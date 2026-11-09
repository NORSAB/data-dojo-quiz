# Module 3.1: Pre-training Foundations & Transformer Architectures

> **Course Reference:** Lesson 3.5 | Canonical Slides 25 – 50 (Authoring Files 144 – 169)  
> **Key Topics:** Causal Language Modeling Mechanics, Modern Decoder-Only Transformers, Attention Variations (MHA, MQA, GQA), Positional Embeddings (RoPE vs. ALiBi), Tokenization & Vocabulary Sizing.

---

## 1. When is Full Pre-training Necessary?

While Continued Pre-training (CPT) and Instruction Fine-Tuning (IFT) are efficient for adapting existing open-weights models, **Full Pre-training from Scratch** becomes mandatory under specific enterprise conditions:

1. **Total Architectural Freedom:** Developing novel sparse Mixture-of-Experts (MoE) routing, non-standard activation functions (SwiGLU), or ultra-large context attention mechanisms not available in off-the-shelf checkpoints.
2. **Custom Tokenization & Vocabulary:** Domain languages (e.g., proprietary DNA sequencing strings, esoteric mainframe code, mathematical formalisms) suffer from severe "tokenizer bloat" on standard tokenizers, resulting in 5× to 10× more tokens per sentence and crippled context windows.
3. **Legal Cleanliness & Clean-Room Provenance:** Strict enterprise compliance may prohibit using base models trained on unverified or copyrighted data (such as unvetted Common Crawl dumps). Pre-training guarantees 100% auditable data lineage.
4. **Commercial Independence:** Eliminating restrictive base-model licenses (e.g., monthly active user caps or commercial derivative bans).

---

## 2. Causal Language Modeling (CLM) Mechanics

Modern autoregressive Large Language Models operate on a simple mathematical objective: **Next-Token Prediction**.

Given a sequence of input tokens $x = (x_1, x_2, \dots, x_T)$, the model factorizes the joint probability of the sequence using the chain rule of probability:

$$P(x) = \prod_{t=1}^{T} P(x_t \mid x_1, x_2, \dots, x_{t-1})$$

The training loss is the average **Cross-Entropy Loss** over the entire sequence:

$$\mathcal{L}_{\text{CLM}} = -\frac{1}{T} \sum_{t=1}^{T} \log P(x_t \mid x_{<t}; \theta)$$

Where:
- $x_{<t}$ represents all preceding tokens in the context window.
- $\theta$ denotes the trainable neural network parameters.
- A **lower-triangular causal attention mask** ensures token $x_t$ can only attend to tokens $x_i$ where $i \le t$, strictly preventing information leakage from the future.

```
Token Sequence:  ["The", "Databricks", "Lakehouse", "unifies", "data"]
Position 1:      "The"        --> Predicts: "Databricks"
Position 2:      "The Data.." --> Predicts: "Lakehouse"
Position 3:      "...Lake..." --> Predicts: "unifies"
Position 4:      "...unif..." --> Predicts: "data"
```

---

## 3. The Anatomy of Modern Decoder-Only Architectures

Modern state-of-the-art foundation models (such as DBRX, Llama 3, and Mistral) have converged on the **Decoder-Only Transformer** architecture with key modernized components:

```
+---------------------------------------------------------------------------------------------------+
|                            MODERN DECODER-ONLY TRANSFORMER BLOCK                                  |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|      Input Tokens (x_t)                                                                           |
|              |                                                                                    |
|              v                                                                                    |
|     [ Token Embedding Layer ]  (Vocab Size -> Hidden Dim d_model)                                 |
|              |                                                                                    |
|              +-----------------------------------+                                                |
|              |                                   |  (Residual Connection)                         |
|              v                                   |                                                |
|     [ Pre-Normalization: RMSNorm ]               |                                                |
|              |                                   |                                                |
|              v                                   |                                                |
|     [ Grouped-Query Attention (GQA) ]            |                                                |
|       - Rotary Position Embeddings (RoPE)        |                                                |
|       - Causal Attention Mask                    |                                                |
|              |                                   |                                                |
|              v                                   |                                                |
|           ( + ) <--------------------------------+                                                |
|              |                                                                                    |
|              +-----------------------------------+                                                |
|              |                                   |  (Residual Connection)                         |
|              v                                   |                                                |
|     [ Pre-Normalization: RMSNorm ]               |                                                |
|              |                                   |                                                |
|              v                                   |                                                |
|     [ Feed-Forward Network: SwiGLU / MoE ]       |                                                |
|              |                                   |                                                |
|              v                                   |                                                |
|           ( + ) <--------------------------------+                                                |
|              |                                                                                    |
|              v                                                                                    |
|     [ Final RMSNorm -> Output Linear Head -> Softmax ]                                            |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### Component Evolutions:
1. **Pre-Normalization (Pre-LN) with RMSNorm:** Replaced traditional Post-LayerNorm. RMSNorm (Root Mean Square Normalization) drops the mean-centering step of LayerNorm, saving ~7% GPU compute per layer while providing identical training stability.
2. **SwiGLU Feed-Forward Blocks:** Replaced standard ReLU/GELU activations with Swish-Gated Linear Units, providing superior empirical performance per parameter.

---

## 4. Attention Evolution: MHA vs. MQA vs. GQA

During inference, maintaining the **Key-Value (KV) Cache** for long context windows consumes massive GPU High Bandwidth Memory (HBM). Modern architectures use parameter-efficient attention:

```
Multi-Head Attention (MHA)       Multi-Query Attention (MQA)      Grouped-Query Attention (GQA)
(Llama 1, MPT, GPT-3)            (Falcon, StarCoder)              (DBRX, Llama 3, Mistral)

Q: [H1][H2][H3][H4][H5][H6][H7][H8]  Q: [H1][H2][H3][H4][H5][H6][H7][H8]  Q: [H1][H2] [H3][H4] [H5][H6] [H7][H8]
K: [H1][H2][H3][H4][H5][H6][H7][H8]  K: [-----------Single K----------]  K: [ Group 1 ] [ Group 2 ] [ Group 3 ] [ Group 4 ]
V: [H1][H2][H3][H4][H5][H6][H7][H8]  V: [-----------Single V----------]  V: [ Group 1 ] [ Group 2 ] [ Group 3 ] [ Group 4 ]

8 KV Heads for 8 Query Heads    1 KV Head for all 8 Query Heads  4 KV Groups for 8 Query Heads
Highest Memory; High Quality    Lowest Memory; Quality Loss       Balanced Memory; Full MHA Quality
```

- **MHA:** Each query head has a dedicated key and value head. Memory footprint = $2 \times b \times s \times l \times h \times d$.
- **MQA:** All query heads share a single key and value head. KV cache shrinks by $h\times$, but multi-step reasoning often degrades.
- **GQA:** Query heads are divided into $G$ groups, sharing key/value heads per group. DBRX uses GQA to achieve the speed and low memory footprint of MQA with the expressive power of MHA.

---

## 5. Positional Embeddings: Absolute vs. ALiBi vs. RoPE

Because self-attention is permutation-invariant, positional information must be injected:

1. **Absolute Learned Positional Embeddings (GPT-3):** Adds a learned vector at each absolute index ($0, 1, 2, \dots$). Fails to extrapolate beyond the maximum sequence length seen during training.
2. **ALiBi (Attention with Linear Biases - MPT):** Adds a static, non-learned linear penalty to attention scores proportional to token distance ($i - j$). Extrapolates well to long contexts but lacks rotational geometry.
3. **RoPE (Rotary Position Embeddings - DBRX, Llama 3):** Encodes relative position by rotating the query and key vectors in complex 2D vector planes:
   $$R_{\Theta, m}^d = \text{diag}\left(R_{\theta_1, m}, R_{\theta_2, m}, \dots, R_{\theta_{d/2}, m}\right)$$
   RoPE naturally captures relative token distance, supports context window extension via frequency scaling, and is the undisputed industry standard.

---

## 6. Tokenization Foundations & Vocabulary Size Trade-offs

LLMs do not read characters or words directly; they ingest **token IDs** generated by a subword tokenizer, typically using **Byte-Pair Encoding (BPE)**:

### How Byte-Level BPE Operates
1. Starts with a base vocabulary of 256 individual byte values (ensuring any UTF-8 string can be represented without `<unk>` tokens).
2. Iteratively counts the most frequent adjacent pairs of bytes/tokens in the training corpus.
3. Merges the most frequent pair into a new token until the target vocabulary size $V$ is reached.

### Vocabulary Size Trade-offs

| Dimension | Small Vocabulary (~32,000 Tokens) | Large Vocabulary (100,000 – 128,000+ Tokens) |
| :--- | :--- | :--- |
| **Examples** | Llama 1, Llama 2, Mistral 7B | DBRX (100K), Llama 3 (128K), GPT-4 (100K) |
| **Embedding Parameters** | $32,000 \times d_{\text{model}}$ (~130M params) | $128,000 \times d_{\text{model}}$ (~1B params) |
| **Sequence Length (Fertility)** | Higher tokens per sentence (longer sequences) | Lower tokens per sentence (~15–20% fewer tokens) |
| **Inference Throughput** | Lower generation speed per word | **Higher generation speed per word** |
| **Multilingual & Code** | Poor compression; high token count | **Superior compression for code & multilingual** |
| **Softmax Compute Overhead** | Lower compute in final projection layer | Higher compute in final projection layer |

*Design Rule:* Modern foundation models favor large vocabularies (100K–128K) because the 15–20% reduction in total token sequence length directly translates into faster inference latency and reduced KV cache memory consumption.
