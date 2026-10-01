# Module 6.2: Practitioner Advice & Hyperparameter Tuning

> **Course Reference:** Lesson 3.12 | Canonical Slides 115 – 121 (Authoring Files 234 – 240)  
> **Key Topics:** Scaling Methodology, Proven AdamW Hyperparameters, Learning Rate Warmup & Cosine Schedules, Diagnosing & Recovering from Loss Spikes.

---

## 1. Golden Rules of Pre-training

Based on the empirical lessons learned by Mosaic AI while training MPT-7B, MPT-30B, and DBRX, practitioners must follow three guiding operational principles:

### Rule 1: Start Small and Scale Up
Never launch a full-scale multi-node training run on a 7B, 30B, or 70B parameter model without first validating the end-to-end pipeline on a **125M or 1B parameter proxy model**.
- **What to verify on the small proxy:** Confirm that the dataloader parses tokens without crashing, verify that loss steadily converges, ensure checkpoints save and restore properly to cloud storage, and check that GPU MFU reaches expected levels (>45%).

### Rule 2: Don't Trust Literature Blindly
The academic literature is filled with claims of novel activation functions, attention modifications, and learning rate tricks that fail to replicate at multi-billion-token scale. Always benchmark proposed modifications against a standard baseline using your specific data mixture before committing to large-scale compute runs.

### Rule 3: Do the Math Before Allocating Hardware
Before reserving GPU clusters, calculate total FLOP requirements ($6ND$), estimate duration using realistic MFU (50%), and calculate cloud egress, storage IOPS, and checkpoint storage capacity.

---

## 2. Standard Hyperparameters for LLM Pre-training

Through hundreds of thousands of GPU hours, Mosaic AI has identified the most stable, reliable hyperparameter defaults for autoregressive Transformer models:

```
+---------------------------------------------------------------------------------------------------+
|                           PROVEN PRE-TRAINING HYPERPARAMETER DEFAULTS                             |
+---------------------------------------------------------------------------------------------------+
|  Optimizer:                      AdamW (Decoupled Weight Decay)                                   |
|  Beta 1 (β1):                    0.90                                                             |
|  Beta 2 (β2):                    0.95 (Reduced from PyTorch default 0.999 for stability)          |
|  Epsilon (ε):                    1.0e-8                                                           |
|  Weight Decay:                   0.1 (Applied only to non-bias, non-norm weights)                 |
|  Gradient Clipping:              clip_grad_norm = 1.0 (Mandatory)                                 |
|  Precision Format:               BF16 (Bfloat16) or FP8 (Avoid standard FP16)                     |
|  Learning Rate Schedule:         Cosine Decay with Linear Warmup                                  |
|  Warmup Duration:                1% to 2% of total training steps                                 |
|  Final Cooldown Learning Rate:   10% of peak learning rate (0.1 × LR_max)                         |
+---------------------------------------------------------------------------------------------------+
```

### Why Reduce $\beta_2$ from 0.999 to 0.95?
In the standard AdamW optimizer, $\beta_2 = 0.999$ tracks the running squared gradient over a long historical window. In large-scale language modeling, sudden shifts in data distribution (e.g., transitioning from prose to code) cause outdated second-moment statistics to produce volatile updates. Lowering $\beta_2$ to **0.95** allows the optimizer to adapt more rapidly to incoming gradient variance, significantly reducing the frequency of loss explosions.

---

## 3. Learning Rate Warmup and Cosine Schedules

Autoregressive models are acutely sensitive to the learning rate trajectory:

```
Learning Rate
     ^
     |         /------------------\
LR   |        /  (Peak LR)          \
Max  |       /                        \
     |      /                           \
     |     /                              \  (Cosine Decay)
     |    /                                 \
0.1x |   / (Warmup)                           \---------\ (Cooldown / Annealing)
     +-----------------------------------------------------> Training Steps
         | 1-2% |                            |  Final 10% |
```

1. **Linear Warmup Phase (1% – 2% of Steps):**
   - At step 0, randomly initialized weights produce chaotic gradients. A large learning rate immediately causes gradient explosion and divergence.
   - Linearly ramping the learning rate from $0$ to $\text{LR}_{\text{max}}$ allows the model to stabilize internal representations before receiving full parameter updates.
2. **Cosine Decay Phase:**
   - Smoothly anneals the learning rate following a cosine curve, allowing fine-grained optimization of deep parameter representations.
3. **Floor / Cooldown (Final 10% of Steps):**
   - The learning rate reaches a plateau at 10% of $\text{LR}_{\text{max}}$. This is the optimal window to inject pristine reasoning and instruction data for curriculum annealing.

---

## 4. Diagnosing and Handling Loss Spikes

A **Loss Spike** is a sudden, sharp, vertical increase in training loss during an otherwise healthy training trajectory. Left unmanaged, a loss spike can cause model weights to produce `NaN` (Not-a-Number) values, permanently ruining the model run.

```
Training Loss
     ^
     |  \
     |   \
     |    \          /\  <--- SUDDEN LOSS SPIKE!
     |     \        /  \
     |      \------/    \-----------> Normal Convergence Resumed (after recovery)
     +-----------------------------------------------------> Training Steps
```

### Common Root Causes:
1. **Corrupted Data Shards:** Unhandled binary text, malformed Unicode sequences, or enormous sequences of repeated delimiter tokens.
2. **Numeric Overflow in FP16:** Standard 16-bit floating point has only 5 exponent bits, causing numbers $>65,504$ to overflow into infinity (`Inf`).
3. **Gradient Accumulation Outliers:** Unclipped gradient norms propagating through attention projection layers.

### The Mosaic AI Recovery Protocol:
1. **Always Train in BF16:** Bfloat16 uses 8 exponent bits (the same dynamic range as FP32), completely preventing numeric overflow spikes.
2. **Enforce Gradient Clipping:** Restrict `clip_grad_norm = 1.0` to throttle explosive gradients.
3. **Automated Rollback & Skip:**
   - If loss spikes by $>3\times$ the running average and does not recover within 100 steps:
   - Halt the run.
   - Roll back to the most recent healthy checkpoint (e.g., 500 steps prior).
   - Advance the dataloader to **skip the data batch** that triggered the anomaly.
   - Resume training seamlessly.
