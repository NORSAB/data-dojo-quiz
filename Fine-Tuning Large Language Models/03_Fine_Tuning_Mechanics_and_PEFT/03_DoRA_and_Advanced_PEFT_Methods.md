# DoRA & Advanced PEFT Architectures

> **Lesson References:** `2.10`, `2.12`  
> **Slide References:** Slides 85, 86, 87  
> **Key Innovations:** Weight-Decomposed Low-Rank Adaptation (DoRA), QLoRA, Multi-LoRA Serving  

---

## 1. DoRA: Weight-Decomposed Low-Rank Adaptation

While standard LoRA delivers remarkable parameter efficiency, empirical benchmarks demonstrate a persistent slight performance gap between LoRA and full-parameter fine-tuning on complex reasoning tasks (such as code generation and mathematical reasoning).

**DoRA (Weight-Decomposed Low-Rank Adaptation)** bridges this gap by decoupling the weight matrix into two distinct geometric components: **magnitude** and **direction**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DoRA GEOMETRIC INTUITION                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   Full Weight Vector W:                                                │
│                                                                        │
│          Direction Vector (V / ||V||)                                  │
│             ▲                                                          │
│            /                                                           │
│           /                                                            │
│          /                                                             │
│         /  ◄─── Magnitude (m = ||W||)                                  │
│        /                                                               │
│       └────────► Base Reference Axis                                   │
│                                                                        │
│   • Standard LoRA updates magnitude and direction together via ΔW = BA │
│   • DoRA decouples them: direction updated via BA, magnitude via m     │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Mathematical Formulation of DoRA

In linear algebra, any weight matrix $W \in \mathbb{R}^{d \times k}$ can be decomposed column-wise into its magnitude vector $m \in \mathbb{R}^{1 \times k}$ and its normalized direction matrix $V \in \mathbb{R}^{d \times k}$:

$$W = m \frac{V}{\|V\|_c}$$

Where:
- $\|V\|_c$ represents the column-wise vector norm of $V$.
- $m = \|W_0\|_c$ is initialized to the norm of the pre-trained weight matrix.

When applying DoRA, the directional matrix $V$ is kept anchored to the frozen base weights $W_0$ and adapted via standard low-rank matrices $B$ and $A$:

$$W = m \frac{W_0 + \Delta W}{\|W_0 + \Delta W\|_c} = m \frac{W_0 + \frac{\alpha}{r}(B \times A)}{\|W_0 + \frac{\alpha}{r}(B \times A)\|_c}$$

### Why DoRA Outperforms Standard LoRA:
- **Gradient Dynamics Analysis:** Studies of full fine-tuning reveal that gradient updates exhibit distinct learning dynamics for magnitude versus direction (often showing subtle negative correlation).
- Standard LoRA forces proportional changes in both magnitude and direction simultaneously because $\Delta W$ directly modifies both.
- DoRA isolates directional tuning to the low-rank subspace while allowing the scalar magnitude vector $m$ to scale independently, closely matching the parameter trajectories of full fine-tuning.

---

## 3. QLoRA: Quantized Low-Rank Adaptation

For memory-constrained environments, **QLoRA** pushes parameter efficiency further by quantizing the frozen base foundation model into a 4-bit representation while preserving 16-bit brain floating-point (BF16) precision for the trainable LoRA adapter weights.

### The Three Pillars of QLoRA:
1. **NF4 (NormalFloat 4) Quantization:**
   - Standard integer quantization (INT4) distributes bin thresholds evenly across the dynamic range.
   - However, pre-trained neural network weights follow a normal distribution centered at zero.
   - NF4 establishes information-theoretically optimal quantiles for normally distributed weights, yielding significantly lower quantization loss than INT4 or FP4.
2. **Double Quantization (DQ):**
   - Quantization constants themselves consume memory (~0.5 bits per parameter in standard quantization).
   - Double Quantization applies 8-bit FP quantization to the FP32 quantization constants, saving ~0.37 bits per parameter ($~3\text{ GB}$ saved on a 65B model).
3. **Paged Optimizers:**
   - Memory spikes during activation caching can cause sudden Out-Of-Memory (OOM) failures.
   - Paged optimizers leverage CUDA Unified Memory to automatically page optimizer state tensors between GPU VRAM and CPU system RAM when memory pressure exceeds safe thresholds.

---

## 4. Multi-LoRA Serving Architecture

One of the greatest operational advantages of PEFT in enterprise settings is **Multi-LoRA Serving**.

Instead of deploying independent, massive 70B models for different business units (Legal, Customer Service, Engineering, Finance)—which would require hundreds of gigabytes of GPU VRAM per endpoint—enterprises deploy a single base model and load multiple LoRA adapters dynamically:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      MULTI-LoRA SERVING PATTERN                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   Request 1 (Legal)     ──► Header: X-Model-Adapter: legal-lora-v1     │
│   Request 2 (Support)   ──► Header: X-Model-Adapter: support-lora-v3   │
│   Request 3 (Finance)   ──► Header: X-Model-Adapter: finance-lora-v2   │
│                                    │                                   │
│                                    ▼                                   │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │           MOSAIC AI MODEL SERVING (SINGLE ENDPOINT)            │   │
│   │                                                                │   │
│   │   [ Shared Base Foundation Model (Llama 3 70B - Frozen) ]      │   │
│   │   140 GB VRAM                                                  │   │
│   │                                                                │   │
│   │   Active Dynamic LoRA Cache (System RAM / GPU):                │   │
│   │   ├── legal-lora-v1.bin     (45 MB)                            │   │
│   │   ├── support-lora-v3.bin   (45 MB)                            │   │
│   │   └── finance-lora-v2.bin   (45 MB)                            │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                                                        │
│   Total Infrastructure Cost: 1 Endpoint instead of 3 dedicated GPU     │
│   clusters! Over 70% infrastructure cost savings.                      │
└────────────────────────────────────────────────────────────────────────┘
```
