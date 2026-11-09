# Module 5.2: Compute Scaling Laws & Training Time Calculations

> **Course Reference:** Lesson 3.9 | Canonical Slides 85 – 94 (Authoring Files 204 – 213)  
> **Key Topics:** Chinchilla Scaling Laws, Theoretical FLOPs Formula ($6ND$), Hardware Specifications (A100 vs. H100), Model FLOPs Utilization (MFU), Complete Step-by-Step Training Duration Calculation.

---

## 1. Compute Scaling Laws: Kaplan vs. Chinchilla

Understanding the mathematical relationship between model parameter count, training token count, and total computational budget is essential for planning pre-training and continued pre-training workloads.

### Kaplan et al. (2020) Power Laws
Initial research from OpenAI suggested that model size should scale faster than dataset size as compute increases, leading to models that were parameter-heavy but trained on relatively modest token volumes (e.g., GPT-3: 175B parameters trained on only 300B tokens).

### Hoffmann et al. / DeepMind Chinchilla (2022)
DeepMind's Chinchilla paper demonstrated that previous models were significantly undertrained. For a **compute-optimal** allocation:
- Model size ($N$) and dataset size ($D$) should scale in equal proportion:

$$D_{\text{optimal}} \approx 20 \times N$$

For example, a compute-optimal 70B parameter model should be trained on approximately $1.4 \text{ Trillion tokens}$ ($20 \times 70\text{B}$).

```
+---------------------------------------------------------------------------------------------------+
|                         CHINCHILLA-OPTIMAL VS. INFERENCE-OPTIMAL                                  |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  Chinchilla-Optimal Training:                                                                     |
|  - Minimizes training compute cost for a given validation loss.                                   |
|  - Ratio: ~20 tokens per parameter.                                                               |
|  - Example: Chinchilla 70B trained on 1.4T tokens.                                                |
|                                                                                                   |
|  Inference-Optimal Over-Training:                                                                 |
|  - Trains smaller models on massive token counts (100+ tokens per parameter).                     |
|  - Higher training cost, but dramatically lower downstream serving cost and lower latency.        |
|  - Examples:                                                                                      |
|    * Meta Llama 3 8B: trained on 15 Trillion tokens (~1,875 tokens/param).                        |
|    * Databricks DBRX: 132B/36B active trained on 12 Trillion tokens.                              |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. The Theoretical FLOPs Formula: $C \approx 6ND$

The total floating-point operations (FLOPs) required to train an autoregressive decoder-only Transformer is given by the formula:

$$C \approx 6 \times N \times D$$

Where:
- $C$ = Total floating point operations (FLOPs).
- $N$ = Number of non-embedding model parameters.
- $D$ = Number of training tokens processed.

### Why the Factor of 6?
For each token during training:
1. **Forward Pass:** Requires approximately $2N$ FLOPs (one multiply-accumulate per parameter, where $1 \text{ MAC} = 2 \text{ FLOPs}$).
2. **Backward Pass:** Requires approximately $4N$ FLOPs (computing gradients with respect to activations requires $2N$ FLOPs, and computing gradients with respect to parameters requires another $2N$ FLOPs).

$$\text{Total per token} = 2N + 4N = 6N \text{ FLOPs}$$

---

## 3. Hardware Specifications: A100 vs. H100

When calculating available compute, use theoretical peak FP16/BF16 Tensor Core FLOP/s:

| GPU Accelerator | Architecture | Memory | Theoretical Peak (BF16/FP16 Tensor Core) | Peak (FP8 Tensor Core) |
| :--- | :--- | :--- | :--- | :--- |
| **NVIDIA A100 (SXM4)** | Ampere | 80 GB HBM2e | **312 TFLOP/s** ($3.12 \times 10^{14}$ FLOP/s) | N/A |
| **NVIDIA H100 (SXM5)** | Hopper | 80 GB HBM3 | **989 TFLOP/s** ($9.89 \times 10^{14}$ FLOP/s) | **1,978 TFLOP/s** ($1.978 \times 10^{15}$ FLOP/s) |

---

## 4. Model FLOPs Utilization (MFU)

No hardware cluster runs at 100% of theoretical peak performance. Memory bandwidth limits, inter-GPU communication latency, gradient synchronizations, and pipeline bubbles reduce effective throughput.

**Model FLOPs Utilization (MFU)** measures the efficiency of the software and hardware stack:

$$\text{MFU} = \frac{\text{Observed FLOP/s}}{\text{Theoretical Peak FLOP/s}} = \frac{6 \times N \times \text{Tokens per Second}}{\text{Num\_GPUs} \times \text{Peak FLOP/s per GPU}}$$

- **Poorly Optimized Stack:** 25% – 35% MFU.
- **Well-Optimized Distributed Stack (Mosaic AI Composer / MegaBlocks):** **45% – 55% MFU**.

---

## 5. Step-by-Step Training Time Calculation

### The Master Formula

$$\text{Training Time (Seconds)} = \frac{6 \times N \times D}{\text{Num\_GPUs} \times \text{Peak\_FLOPs} \times \text{MFU}}$$

---

### Practical Example (Slide 85 Canonical Case Study)

**Scenario Parameters:**
- **Model Parameter Count ($N$):** 7 Billion parameters ($7 \times 10^9$)
- **Training Tokens ($D$):** 180 Billion tokens ($1.8 \times 10^{11}$)
- **GPU Cluster:** 64 NVIDIA A100 GPUs (SXM4 80GB)
- **A100 Peak FLOP/s:** $312 \times 10^{12}$ FLOP/s (312 TFLOP/s)
- **Model FLOPs Utilization (MFU):** 50.7% ($0.507$)

#### Step 1: Calculate Total Required FLOPs ($C$)
$$C = 6 \times N \times D$$
$$C = 6 \times (7 \times 10^9) \times (1.8 \times 10^{11})$$
$$C = 42 \times 10^9 \times 1.8 \times 10^{11} = 7.56 \times 10^{21} \text{ FLOPs}$$

#### Step 2: Calculate Effective Compute Output per Second of the Cluster
$$\text{Cluster FLOP/s} = \text{Num\_GPUs} \times \text{Peak\_FLOPs} \times \text{MFU}$$
$$\text{Cluster FLOP/s} = 64 \times (312 \times 10^{12}) \times 0.507$$
$$\text{Cluster FLOP/s} = 19,968 \times 10^{12} \times 0.507 = 1.0123776 \times 10^{16} \text{ FLOP/s}$$

#### Step 3: Calculate Training Duration in Seconds
$$\text{Time} = \frac{7.56 \times 10^{21}}{1.0123776 \times 10^{16}} \approx 746,757 \text{ seconds}$$

#### Step 4: Convert to Hours and Days
$$\text{Hours} = \frac{746,757}{3,600} \approx 207.43 \text{ hours}$$
$$\text{Days} = \frac{207.43}{24} \approx \mathbf{8.64 \text{ days}}$$

### Takeaway for AI Architects
With 64 A100 GPUs running at 50.7% MFU, continued pre-training a 7B model across 180 Billion tokens will complete in **8.6 days** (approx. 207 hours). Upgrading the cluster to 64 H100 GPUs would reduce this duration by approximately $3.16\times$ down to **2.7 days**.
