# Fine-Tuning Best Practices & Hyperparameters

> **Lesson ID:** `24252` (`2.8 - Fine-Tuning Best Practices`)  
> **Slide References:** Slides 65, 66, 67, 68, 69, 70, 71, 72  
> **Core Concepts:** Learning Rate Sweeps, Warmup Schedules, Catastrophic Forgetting, Early Stopping  

---

## 1. The Primacy of Learning Rate

Among all hyperparameters in deep learning, the **Learning Rate ($\eta$)** is the single most critical determinant of fine-tuning success or failure:
- **Too High:** Model weights experience massive gradient updates, obliterating the pre-trained foundation knowledge ("weight explosion"), resulting in catastrophic loss spikes or `NaN` losses.
- **Too Low:** The model barely updates its weights during the allocated training epochs, failing to learn the new instruction behavior or output syntax.

---

## 2. The Official Mosaic AI Learning Rate Sweep Grid

The Mosaic AI research team strongly advises running a coarse logarithmic sweep across six discrete values before fine-tuning on large datasets:

$$\mathbf{\text{LR Grid}} = \left[ 1\times 10^{-4}, \, 3\times 10^{-5}, \, 1\times 10^{-5}, \, 3\times 10^{-6}, \, 1\times 10^{-6}, \, 3\times 10^{-7} \right]$$

```
  HIGHER LEARNING RATES                                      LOWER LEARNING RATES
  [ 1e-4 ] ──► [ 3e-5 ] ──► [ 1e-5 ] ──► [ 3e-6 ] ──► [ 1e-6 ] ──► [ 3e-7 ]
      ▲            ▲            ▲            ▲            ▲            ▲
      │            │            │            │            │            │
  ┌───────────────────────┐ ┌───────────────────────────────────────────┐
  │     PEFT / LoRA       │ │            FULL FINE-TUNING               │
  │ • Frozen base weights │ │ • All parameters updated                  │
  │ • Only small adapters │ │ • Lower LR required to prevent weight     │
  │ • Requires higher LR  │ │   destruction and forgetting              │
  └───────────────────────┘ └───────────────────────────────────────────┘
```

### Optimal Operating Windows:
1. **LoRA / PEFT Training:** Typically achieves optimal convergence between **$3\times 10^{-5}$ and $1\times 10^{-4}$**. Because the base model weights $W_0$ are completely frozen, the low-rank adapter matrices ($B, A$) require a higher gradient velocity to capture task signals.
2. **Full-Parameter Fine-Tuning:** Must operate between **$1\times 10^{-6}$ and $1\times 10^{-5}$**. Pushing above $3\times 10^{-5}$ frequently triggers catastrophic forgetting.

---

## 3. Learning Rate Warmup & Decay Schedules

A static learning rate is suboptimal for transformer training. Modern pipelines utilize a **Linear Warmup followed by Cosine Annealing Decay**:

```
Learning Rate
     ▲
Peak │         /───────────\ (Cosine Decay)
  η  │        /             \
     │       /               \
     │      /                 \
     │     /                   \
     │    /                     \
 0.1η│───/                       \─────────────► Minimum LR (10% of Peak)
     └─────────────────────────────────────────► Steps / Tokens
         [ Warmup ]
          (2-5%)
```

1. **Warmup Phase (First 2% – 5% of Total Steps):**
   - The learning rate increases linearly from $0$ to the target peak $\eta$.
   - **Purpose:** In early steps, gradient directions are highly noisy because the model has not adapted to the new dataset distribution. Warmup prevents premature, erratic weight updates before momentum estimates stabilize.
2. **Cosine Decay Phase (Remaining 95% – 98% of Steps):**
   - The learning rate smoothly decays according to a cosine curve down to $10\%$ of peak $\eta$.
   - **Purpose:** As training converges, smaller learning rates allow the optimizer to settle into narrow, high-generalization local minima.

---

## 4. Number of Epochs & Duration

In traditional supervised machine learning, models are often trained for 20 to 100 epochs. **In Large Language Model Fine-Tuning, training for more than 3 epochs is almost always an anti-pattern.**

### Recommended Epoch Guidelines:
- **1 Epoch:** Highly effective for large datasets ($> 20,000$ samples) or when the primary goal is format adaptation.
- **2 to 3 Epochs:** Standard for datasets between $1,000$ and $10,000$ samples.
- **$> 3$ Epochs:** Rapidly causes severe **overfitting**:
  - The model begins memorizing the exact phrasing of training responses rather than generalizing the instruction task.
  - The model exhibits severe **hallucination** and repetitive looping when prompted with novel user inputs.

---

## 5. Mitigating Catastrophic Forgetting

**Catastrophic Forgetting** occurs when an LLM is trained so aggressively on a narrow specialized domain (e.g., medical radiology reports or financial ticker extraction) that its neural connections overwrite its broader foundational capabilities (such as mathematical reasoning, basic coding, or conversational coherence).

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CATASTROPHIC FORGETTING MITIGATION                   │
├──────────────────────────────────┬─────────────────────────────────────┤
│ SYMPTOM                          │ MITIGATION STRATEGY                 │
├──────────────────────────────────┼─────────────────────────────────────┤
│ Model scores 95% on internal     │ 1. DATA REPLAY / MIXING:            │
│ medical tasks, but fails 2nd     │    Mix in 5% – 10% of a general-    │
│ grade math word problems.        │    purpose instruction dataset      │
│                                  │    (e.g., Databricks Dolly v2,      │
│                                  │    OpenAssistant) into your corpus. │
├──────────────────────────────────┼─────────────────────────────────────┤
│ Model hallucinates and repeats   │ 2. USE PEFT / LoRA:                 │
│ phrases incessantly on general   │    Base model weights remain 100%   │
│ prompts.                         │    frozen; original reasoning       │
│                                  │    capabilities are preserved.      │
├──────────────────────────────────┼─────────────────────────────────────┤
│ Loss diverges during training.   │ 3. LOWER LEARNING RATE:             │
│                                  │    Drop LR by 3x – 10x; increase    │
│                                  │    gradient warmup steps.           │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

## 6. Real-Time Loss Monitoring & Early Stopping in MLflow

When inspecting loss trajectories in MLflow:

```
Loss
  ▲
  │   Training Loss (Decreasing)
  │  \
  │   \             Validation Loss (Healthy)
  │    \           /
  │     \   ──────/ ◄── OVERFITTING DIVERGENCE (Early Stop Here!)
  │      \ /
  │       V
  │
  └──────────────────────────────────────────► Training Steps
```

- **Healthy Training:** Both training loss and validation loss decrease smoothly and plateau together.
- **Overfitting Warning:** Training loss continues falling, but validation loss begins curving upward. **Terminate training immediately and select the checkpoint corresponding to the minimum validation loss.**
