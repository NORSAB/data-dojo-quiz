# PEFT & LoRA Mathematical Foundations

> **Lesson ID:** `24254` (`2.10 - What about parameter-efficient fine-tuning (PEFT)?`)  
> **Slide References:** Slides 80, 81, 82, 83, 84  
> **Key Concepts:** Parameter-Efficient Fine-Tuning, Low-Rank Adaptation (LoRA), Intrinsic Rank, Memory Sizing  

---

## 1. The Full Fine-Tuning VRAM Bottleneck

When executing full-parameter fine-tuning, every single parameter $N$ in the model is updated via gradient descent. While modern GPUs provide significant memory (e.g., 80 GB per NVIDIA A100/H100), storing the full optimization state introduces an exponential memory footprint:

### Memory Breakdown for Full Fine-Tuning (AdamW Optimizer in Mixed Precision):
For a model with $N$ parameters:
1. **Model Weights (BF16/FP16):** $2 \times N$ bytes.
2. **Gradients (BF16/FP16):** $2 \times N$ bytes.
3. **AdamW Optimizer States (FP32):**
   - FP32 Master Weights: $4 \times N$ bytes.
   - First Momentum Vector ($m_t$): $4 \times N$ bytes.
   - Second Momentum Vector ($v_t$): $4 \times N$ bytes.
   - Total Optimizer State: $12 \times N$ bytes.

$$\text{Total Static Memory} = 2N + 2N + 12N = \mathbf{16N \text{ bytes}}$$
*(Excluding dynamic activation memory and KV caches).*

#### Concrete Scale Comparison:
- **Llama 3 8B:** $16 \times 8 \times 10^9 \approx \mathbf{128 \text{ GB}}$ of VRAM just to store weights and optimizer states (cannot fit on a single 80GB GPU).
- **Llama 3 70B:** $16 \times 70 \times 10^9 \approx \mathbf{1,120 \text{ GB}}$ of VRAM (requires a minimum of 16 $\times$ 80GB GPUs).

---

## 2. The Low-Rank Adaptation (LoRA) Hypothesis

Proposed by Hu et al. (Microsoft Research), **LoRA (Low-Rank Adaptation)** is based on the foundational observation that the weight matrices in over-parameterized neural networks reside on a low "intrinsic dimension" when adapted to specific downstream tasks.

Rather than updating the full dense weight matrix $W_0 \in \mathbb{R}^{d \times k}$, the weight update $\Delta W$ can be constrained to a low-rank decomposition:
$$\Delta W = B \times A$$

Where:
- $W_0 \in \mathbb{R}^{d \times k}$ represents the pre-trained weights (**frozen** during training).
- $B \in \mathbb{R}^{d \times r}$ is a tall, narrow trainable matrix.
- $A \in \mathbb{R}^{r \times k}$ is a short, wide trainable matrix.
- $r$ is the **intrinsic rank** ($r \ll \min(d, k)$).

```
          Dense Weight W_0                   Low-Rank Decomposition ΔW
          (FROZEN WEIGHTS)                      (TRAINABLE ADAPTERS)

              d × k                               d × r         r × k
         ┌─────────────┐                      ┌─────────┐   ┌─────────────┐
         │             │                      │         │   │      A      │
       d │             │        +           d │    B    │ × └─────────────┘
         │             │                      │         │          r
         └─────────────┘                      └─────────┘
                k                                  r
```

---

## 3. Mathematical Formulation & Forward Propagation

During forward propagation, the input vector $x \in \mathbb{R}^k$ is multiplied by both the frozen base matrix $W_0$ and the low-rank adapter matrices $B$ and $A$:

$$h = W_0 x + \Delta W x = W_0 x + \frac{\alpha}{r} (B \times A) x$$

### Crucial Implementation Details:

1. **Initialization Guarantees:**
   - Matrix $A$ is initialized from a zero-mean Gaussian distribution: $A \sim \mathcal{N}\left(0, \, \sigma^2\right)$.
   - Matrix $B$ is initialized strictly to **zero**: $B = 0$.
   - **Result:** At step $0$, $\Delta W = B \times A = 0$. The model behaves identically to the original pre-trained foundation model before training starts.

2. **Scaling Factor ($\frac{\alpha}{r}$):**
   - $\alpha$ is a constant scaling hyperparameter (typically set to $2r$ or a fixed constant like $16$ or $32$).
   - Scaling by $\frac{\alpha}{r}$ stabilizes the magnitude of activation updates, allowing practitioners to vary rank $r$ without needing to retune the learning rate.

---

## 4. Parameter Reduction Calculation (Slide 83 Example)

To illustrate the mathematical efficiency of LoRA, consider a single linear projection matrix of dimensions $d = 100, k = 100$:

```
Full Fine-Tuning Trainable Parameters:
  Parameters = d × k = 100 × 100 = 10,000 parameters

LoRA Trainable Parameters with Rank r = 2:
  Parameters in B = d × r = 100 × 2 = 200 parameters
  Parameters in A = r × k = 2 × 100 = 200 parameters
  Total Parameters = 200 + 200 = 400 parameters

Mathematical Reduction:
  Reduction = (10,000 - 400) / 10,000 = 9,600 / 10,000 = 96% REDUCTION!
```

In a production 70B parameter model, LoRA reduces trainable weights from **70,000,000,000** down to **~35,000,000** (a **99.95% reduction** in trainable parameters).

---

## 5. Target Modules in Transformer Architecture

Practitioners must select which transformer weight matrices to equip with LoRA adapters:

| Module Name | Transformer Role | Standard LoRA Target? | Impact on Task Alignment |
| :--- | :--- | :---: | :--- |
| **$W_q$ (Query)** | Projects input into query attention space | **Yes** | High: Governs attention routing |
| **$W_v$ (Value)** | Contains informational representation tokens | **Yes** | High: Carries semantic content |
| **$W_k$ (Key)** | Keys matched against queries | Often ($q, k, v$) | Moderate |
| **$W_o$ (Out)** | Multi-head attention output projection | Optional | Moderate |
| **$W_{gate}$ / $W_{up}$ / $W_{down}$** | Feed-Forward (MLP) layers | Recommended for complex domains | High: Stores specialized factual associations |

*Mosaic AI Best Practice:* For instruction fine-tuning, applying LoRA to all attention projections ($q, k, v, o$) and MLP layers ($gate, up, down$) delivers optimal downstream benchmark scores with minimal additional VRAM overhead compared to tuning only $q$ and $v$.

---

## 6. Full Fine-Tuning vs. LoRA Trade-Off Matrix

| Metric | Full-Parameter Fine-Tuning | LoRA (Rank $r=16$) |
| :--- | :--- | :--- |
| **Trainable Parameters** | 100% of weights | 0.05% – 0.5% of weights |
| **GPU VRAM Required** | 16N bytes ($>120\text{ GB}$ for 8B) | Base model in BF16 (~16GB) + adapters (~2GB) |
| **Minimum Hardware** | Multi-GPU cluster (FSDP) | Single A100 / H100 (or even L4/A10G) |
| **Training Speed** | Baseline | 25% – 40% faster (fewer gradients to compute) |
| **Risk of Catastrophic Forgetting**| High | Extremely Low (base weights remain frozen) |
| **Storage per Fine-Tuned Model** | 15 GB – 140 GB per checkpoint | 20 MB – 200 MB per adapter file |
| **Serving Versatility** | 1 dedicated endpoint per model | Multi-tenant: 1 base model serves 50+ LoRA adapters |
