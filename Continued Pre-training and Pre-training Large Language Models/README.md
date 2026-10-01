# Continued Pre-training and Pre-training Large Language Models

> **Official Databricks Academy Course Documentation & Architecture Blueprint**  
> **Course Code:** `ACAD-ALL-SLP-CPPLLM-ENG-V1` | **UID:** `E-07JX2V` | **Course ID:** `2486`  
> **Role:** Generative AI Engineer / Machine Learning Engineer / AI Architect  
> **Source Platform:** [Databricks Customer Academy Course 2486](https://customer-academy.databricks.com/learn/courses/2486/continued-pre-training-and-pre-training-large-language-models/lessons)

---

## Executive Overview

This repository contains the complete technical extraction and comprehensive architectural documentation for Databricks Academy Course 2486: **Continued Pre-training and Pre-training Large Language Models**.

Moving beyond prompt engineering and RAG, this curriculum covers the deep systems engineering required to adapt foundation models with tens of billions of proprietary tokens via **Continued Pre-training (CPT)**, align them via **Instruction Fine-Tuning (IFT)**, understand the architecture of state-of-the-art open models like **Databricks DBRX** (132B/36B MoE), scale data curation pipelines, compute precise GPU cluster training schedules using scaling laws, guard against AI security risks, and leverage the **Mosaic AI stack** (Composer, StreamingDataset, LLM Foundry, MegaBlocks).

---

## Course Navigation & Document Structure

The course materials are divided into 8 structured modules:

```
Continued Pre-training and Pre-training Large Language Models/
│
├── 00_Course_Overview/
│   └── 01_Course_Introduction_and_Syllabus.md      # Full syllabus, prerequisites, competencies
│
├── 01_Motivation_and_Foundations/
│   └── 01_Motivation_and_Adaptation_Spectrum.md    # Non-parametric vs Parametric, Trade-off Matrix
│
├── 02_Continued_Pre_Training_and_IFT/
│   ├── 01_Continued_Pre_Training_Mechanics.md      # CPT vs PT, UC Volumes, <|endoftext|>, Python API
│   ├── 02_Instruction_Fine_Tuning_and_Chat.md      # IFT mechanics, Prompt/Response vs Chat JSONL, Delta Tables
│   └── 03_CPT_with_IFT_Pipeline.md                 # Checkpoint chaining, MLflow symlinks, Catastrophic Forgetting
│
├── 03_Full_Pre_Training_and_DBRX/
│   ├── 01_Pre_Training_Architectures_and_Foundations.md # Causal LM, Decoder-only, GQA, RoPE, BPE Tokenizers
│   └── 02_Databricks_DBRX_Architecture.md          # 132B/36B MoE, 16 experts top 4, 3072 H100s, +8.1pp Data Proof
│
├── 04_Data_Curation_and_Best_Practices/
│   └── 01_Pre_Training_Data_Curation_and_Pipelines.md # MinHash LSH, Suffix Arrays, KenLM Perplexity, PII, Mixing
│
├── 05_Evaluation_Compute_and_Security/
│   ├── 01_LLM_Evaluation_and_Mosaic_Gauntlet.md    # 6 Core Competencies, 30+ Benchmarks, MMLU, GSM8K, HumanEval
│   ├── 02_Compute_Scaling_Laws_and_Training_Time.md # Chinchilla Laws, 6ND FLOPs, MFU, Step-by-Step Math (8.6 Days)
│   └── 03_Security_Privacy_and_Data_Poisoning_Risks.md # Poisoning, Backdoors, Secret Extraction, Unity Catalog RBAC
│
├── 06_Mosaic_AI_Stack_and_Demos/
│   ├── 01_Mosaic_AI_Pre_Training_Stack.md          # Composer, StreamingDataset (.mds), LLM Foundry, MegaBlocks
│   ├── 02_Practitioner_Advice_and_Hyperparameters.md # AdamW (β2=0.95), Cosine/Warmup, Loss Spikes in BF16
│   └── 03_CPT_IFT_and_MCT_Demos.md                 # UI/SDK walkthrough, mcli YAML config, Model Serving
│
└── 07_Slides_Reference_Deck/
    └── 01_Complete_Slide_Deck_Catalog.md           # 121 Canonical Slides catalog with direct CDN image links
```

---

## Core Engineering Cheat-Sheet

### 1. Adaptation Spectrum Comparison

| Level | Data Volume | Hardware / Time | Cost Range | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Prompt Eng** | 0 – Few examples | Immediate / No GPU | ~$0 | Quick reasoning, zero-shot tasks |
| **RAG** | 100s – 100K docs | Minutes / Vector DB | $10 – $500 | Dynamic facts, citation lineage |
| **IFT (SFT)** | 1K – 100K pairs | Hours / 1 – 4 GPUs | $50 – $2,000 | Behavior, tone, output format (JSON) |
| **CPT** | 100M – 100B tokens | Hours to Days / 8–64 GPUs | $1K – $100K | Deep proprietary domain intuition |
| **Full PT** | 1T – 15T+ tokens | Weeks / 100s–1000s GPUs | $1M – $50M+ | Custom architecture, tokenizer, IP |

---

### 2. Essential Mathematical Formulas

#### Theoretical FLOPs Formula
$$C \approx 6 \times N \times D$$
*(Where $N$ = non-embedding parameter count, $D$ = training tokens count. Forward pass = $2N$, Backward pass = $4N$).*

#### Training Duration Formula
$$\text{Time (Seconds)} = \frac{6 \times N \times D}{\text{Num\_GPUs} \times \text{Peak\_FLOPs} \times \text{MFU}}$$

#### Chinchilla Compute-Optimal Ratio
$$D_{\text{optimal}} \approx 20 \times N$$

#### Fine-Grained MoE Combinations (DBRX vs. Mixtral)
$$\text{DBRX: } \binom{16}{4} = 1,820 \text{ combinations} \quad \text{vs.} \quad \text{Mixtral: } \binom{8}{2} = 28 \text{ combinations} \quad \implies \mathbf{65\times \text{ greater capacity}}$$

---

### 3. Proven Pre-training Hyperparameters (Mosaic AI Standards)

```python
{
    "optimizer": "AdamW",
    "beta_1": 0.90,
    "beta_2": 0.95,          # Lowered from 0.999 for training stability
    "epsilon": 1e-8,
    "weight_decay": 0.1,      # Decoupled weight decay
    "clip_grad_norm": 1.0,    # Mandatory to prevent explosive gradients
    "precision": "bf16",      # Avoid fp16 to eliminate numeric overflow loss spikes
    "lr_schedule": "cosine_with_warmup",
    "warmup_steps": "1% to 2% of total steps",
    "cooldown_lr": "0.1 * peak_lr"
}
```

---

### 4. Code Quick-Start: Continued Pre-training + Instruction Fine-Tuning

```python
from databricks.model_training import foundation_model as ft

# Step 1: Continued Pre-training (Unstructured Raw Text in UC Volume)
cpt_run = ft.create(
    model="mosaicml/mpt-7b-8k",
    train_data_path="dbfs:/Volumes/prod/domain_data/cpt_corpus/",
    training_duration="1ep",
    task_type="CONTINUED_PRETRAIN",
    register_to="prod.ai_models.mpt_7b_domain_base"
)

# Step 2: Retrieve the Sharded Checkpoint Symlink
cpt_weights = f"dbfs:/databricks/mlflow-tracking/{cpt_run.experiment_id}/{cpt_run.id}/artifacts/checkpoints/latest-sharded-rank0.symlink"

# Step 3: Instruction Fine-Tuning (Chat JSONL in UC Volume)
ift_run = ft.create(
    model="mosaicml/mpt-7b-8k",
    custom_weights_path=cpt_weights,
    train_data_path="dbfs:/Volumes/prod/domain_data/instructions.jsonl",
    training_duration="3ep",
    learning_rate=5e-6,
    task_type="INSTRUCTION_FINETUNE",
    register_to="prod.ai_models.domain_expert_assistant"
)
```

---

## Slide Reference Deck

A complete catalog of all 121 canonical slides with high-resolution image links directly to the Databricks authoring CDN is available in:  
[`07_Slides_Reference_Deck/01_Complete_Slide_Deck_Catalog.md`](file:///d:/2026/Simulador%20de%20Preguntas/Continued%20Pre-training%20and%20Pre-training%20Large%20Language%20Models/07_Slides_Reference_Deck/01_Complete_Slide_Deck_Catalog.md).
