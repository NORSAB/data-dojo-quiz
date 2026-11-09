# Fine-Tuning Large Language Models

> **Official Databricks Academy Course Documentation & Architecture Blueprint**  
> **Course Name:** Fine-Tuning Large Language Models  
> **Course ID:** `2485` | **Lesson ID:** `24245`  
> **Target Audience:** Generative AI Engineers, Machine Learning Engineers, Enterprise AI Architects  
> **Source Platform:** [Databricks Customer Academy Course 2485](https://customer-academy.databricks.com/learn/courses/2485/fine-tuning-large-language-models/lessons/24245/21-what-is-fine-tuning-and-why)  
> **Completion Status:** 100% Completed on Databricks Customer Academy  
> **Certificate URL:** [Download Certificate](https://customer-academy.databricks.com/lms/index.php?r=myActivities/downloadCertificate&course_id=2485&id_user=1629515)

---

## Executive Overview

This repository contains the complete, unabridged technical documentation, architectural blueprints, mathematical foundations, production code patterns, and slide deck catalog for Databricks Academy Course 2485: **Fine-Tuning Large Language Models**.

Fine-tuning sits at the critical intersection of model customization: adapting general-purpose foundation models (such as Llama 3, DBRX, or Mistral) to specialized enterprise domains, distinct behavioral personas, and strict structured output formats (JSON, YAML, SQL). 

This curriculum covers the end-to-end engineering lifecycle:
1. **Strategic Taxonomy:** Evaluating the trade-offs between Prompt Engineering, Retrieval-Augmented Generation (RAG), Instruction Fine-Tuning (IFT), Continued Pre-training (CPT), and Full Pre-training.
2. **Mosaic AI Foundations:** The open-source engine powering Databricks Model Training—specifically `streaming` (for web-scale sharded streaming without local disk bottlenecks) and `composer` (PyTorch distributed training orchestration with auto-resumption and scaling).
3. **Enterprise Data Preparation:** Curating supervised datasets in JSONL (Prompt/Response vs. Multi-turn Chat schemas), Delta Lake ingestion via Unity Catalog Volumes, and conversion into binary Mosaic Data Shards (`.mds`).
4. **Parameter-Efficient Fine-Tuning (PEFT):** Deep mathematical derivation of Low-Rank Adaptation (LoRA: $W = W_0 + \frac{\alpha}{r}(B \times A)$) and Weight-Decomposed Low-Rank Adaptation (DoRA), parameter reduction calculations (96%+ memory savings), and rank selection.
5. **Security & Governance:** Mitigating the Top 5 AI Security Risks via the **Databricks AI Security Framework (DASF)**—specifically data poisoning, backdoor triggers, prompt injection, model theft, and lack of trustworthiness.
6. **Evaluation & Serving:** Offline evaluation harnesses, LLM-as-a-judge scoring, MLflow tracking, Provisioned Throughput (PT) endpoints with concurrency guarantees, and high-throughput batch inference using Spark SQL's `ai_query()`.

---

## Repository Architecture & Module Index

```
Fine-Tuning Large Language Models/
├── README.md                                           # Master architectural blueprint & index
│
├── 00_Course_Overview/
│   └── 01_Course_Introduction_and_Syllabus.md         # Prerequisites, learning goals, official syllabus
│
├── 01_Foundations_and_Mosaic_AI/
│   ├── 01_What_is_Fine_Tuning_and_Why.md              # Adaptation spectrum, parametric vs non-parametric
│   ├── 02_Mosaic_AI_Architecture_and_Open_Source.md   # Composer, Streaming, Unity Catalog, serverless GPUs
│   └── 03_Why_Mosaic_AI_for_Fine_Tuning.md            # Enterprise governance, zero data leakage, SLA guarantees
│
├── 02_Data_Preparation_and_Formats/
│   ├── 01_Data_Prep_and_JSONL_Schemas.md              # Prompt/Response & Chat schemas, Delta conversion
│   └── 02_Mosaic_Data_Shard_MDS_Binary_Format.md      # MDS architecture, index.json, binary streaming efficiency
│
├── 03_Fine_Tuning_Mechanics_and_PEFT/
│   ├── 01_Fine_Tuning_Mechanics_and_Foundation_Model_API.md # databricks.model_training SDK, base models
│   ├── 02_PEFT_and_LoRA_Mathematical_Foundations.md   # LoRA math, rank r, alpha scaling, 96% param reduction
│   └── 03_DoRA_and_Advanced_PEFT_Methods.md           # DoRA magnitude/direction split, QLoRA 4-bit quantization
│
├── 04_Security_DASF_and_Best_Practices/
│   ├── 01_Managing_AI_Security_Risks_with_DASF.md     # Top 5 DASF AI risks, data poisoning, backdoors
│   └── 02_Fine_Tuning_Best_Practices_and_Hyperparameters.md # Learning rate sweeps, context length, overfitting
│
├── 05_Evaluation_Deployment_and_Serving/
│   ├── 01_Offline_Evaluation_Harness_and_LLM_Judges.md # MLflow evaluate, LLM-as-a-judge, benchmark suites
│   └── 02_Model_Serving_Provisioned_Throughput_and_Batch.md # PT endpoints, latency SLAs, ai_query batch
│
├── 06_Hands_On_Demos_and_Code/
│   ├── 01_IFT_Training_Notebook_Walkthrough.md        # Full python script for fm.create() training
│   ├── 02_Provisioned_Throughput_Endpoint_Deployment.md # Endpoint configuration, DBU calculator, autoscaling
│   ├── 03_Querying_Endpoints_and_Batch_Inference_ai_query.md # REST API payload & Spark SQL batch scoring
│   └── 04_Offline_Evaluation_Harness_Demo.md          # Multi-metric offline evaluation harness notebook
│
└── 07_Slides_Reference_Deck/
    └── 01_Complete_Slide_Deck_Catalog.md              # 89 High-Res Slides Catalog with CDN URLs & topics
```

---

## Core Engineering Cheat-Sheet

### 1. Adaptation Spectrum Comparison

| Dimension | Prompt Engineering | Retrieval-Augmented Gen (RAG) | Instruction Fine-Tuning (IFT) | Continued Pre-training (CPT) | Full Pre-training |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Goal** | Task specification & zero-shot reasoning | Grounding with real-time dynamic facts | Behavioral alignment, style, schema compliance | Deep vocabulary & proprietary domain syntax | Creation of new foundational world model |
| **Knowledge Type** | Non-parametric (Context window) | Non-parametric (Vector DB retrieval) | Parametric (Tuned weights / LoRA adapters) | Parametric (Core transformer weights) | Parametric (All weights from scratch) |
| **Dataset Size** | 1 – 10 examples in prompt | 1,000s – Millions of chunked documents | 1,000 – 100,000 prompt/response pairs | 100M – 100B unstructured tokens | 1T – 15T+ general web tokens |
| **Compute Profile** | 0 Training Compute | CPU / Vector index compute | 1 – 8 GPUs for hours | 8 – 64 GPUs for days | 512 – 4,096+ GPUs for weeks/months |
| **Typical Cost** | ~$0 (Inference token cost) | Low ($50 – $500/mo) | Moderate ($50 – $2,000 / run) | High ($1,000 – $100,000 / run) | Very High ($1M – $50M+) |
| **Latency Impact** | High prompt token overhead | Vector search overhead (+50–200ms) | Minimal / zero prompt bloating | Fast baseline inference | Fast baseline inference |

---

### 2. Low-Rank Adaptation (LoRA) Mathematical Derivation

In standard full-parameter fine-tuning, given a pre-trained weight matrix $W_0 \in \mathbb{R}^{d \times k}$, the weight update is calculated directly as:
$$W = W_0 + \Delta W \quad \text{where } \Delta W \in \mathbb{R}^{d \times k}$$

For large models ($d, k \ge 4096$), storing and computing gradients for $\Delta W$ across dozens of layers requires massive VRAM and leads to gradient memory bottlenecks.

LoRA hypothesizes that the weight updates $\Delta W$ have a low "intrinsic rank" $r \ll \min(d, k)$. Thus, $\Delta W$ is factorized into two low-rank matrices:
$$\Delta W = B \times A$$
Where:
- $A \in \mathbb{R}^{r \times k}$ is initialized from a Gaussian distribution $\mathcal{N}(0, \sigma^2)$.
- $B \in \mathbb{R}^{d \times r}$ is initialized to $0$, ensuring $\Delta W = 0$ at the start of training.
- $r$ is the low-rank dimension (typically $r \in \{8, 16, 32, 64\}$).

During forward propagation, the adapted output $h$ is:
$$h = W_0 x + \Delta W x = W_0 x + \frac{\alpha}{r} (B A) x$$
Where:
- $\alpha$ is a constant scaling hyperparameter. Setting $\alpha = 2r$ or $\alpha = r$ stabilizes optimization when varying $r$.

#### Concrete Parameter Reduction Example:
For a weight matrix of dimensions $d = 100, k = 100$:
- Full Fine-Tuning: $100 \times 100 = \mathbf{10,000 \text{ parameters}}$
- LoRA with rank $r = 2$: $(100 \times 2) + (2 \times 100) = 200 + 200 = \mathbf{400 \text{ parameters}}$
- **Parameter Reduction:** $\frac{10,000 - 400}{10,000} = \mathbf{96\% \text{ reduction}}$ in trainable weights!

---

### 3. Databricks Foundation Model Training SDK Syntax

```python
from databricks.model_training import foundation_model as fm

# Launch distributed Instruction Fine-Tuning on Databricks Serverless Compute
run = fm.create(
    model="meta-llama/Meta-Llama-3-8B-Instruct",
    train_data_path="dbfs:/Volumes/enterprise_cat/genai_schema/volumes/train.jsonl",
    eval_data_path="dbfs:/Volumes/enterprise_cat/genai_schema/volumes/eval.jsonl",
    register_to="enterprise_cat.genai_schema.fine_tuned_llama3",
    training_duration="2ep",
    learning_rate=3e-5,
    task_type="INSTRUCTION_FINETUNE"
)

# Monitor training metrics
print(f"Run ID: {run.run_id}")
status = fm.get_run(run.run_id)
print(f"Status: {status.status}")
```

---

### 4. Recommended Learning Rate Sweep Grid

The Mosaic AI research team strongly recommends sweeping learning rates logarithmically around standard defaults:
$$\text{LR Grid} = [1\times 10^{-4}, \, 3\times 10^{-5}, \, 1\times 10^{-5}, \, 3\times 10^{-6}, \, 1\times 10^{-6}, \, 3\times 10^{-7}]$$

- **Full Fine-Tuning:** Prefers lower learning rates ($1\times 10^{-6} - 3\times 10^{-5}$) to prevent catastrophic forgetting.
- **LoRA / PEFT:** Tolerates and requires higher learning rates ($3\times 10^{-5} - 1\times 10^{-4}$) because only low-rank matrices are being updated while base model weights remain frozen.

---

### 5. Databricks AI Security Framework (DASF) Top 5 Risks

1. **Training Data Poisoning:** Malicious injection of manipulated samples into training corpus causing backdoors or systematic bias.
2. **Prompt Injection / Jailbreaks:** Exploitation of instruction-following behavior to override developer safety boundaries.
3. **Model Theft / Extraction:** Unauthorized extraction of proprietary weights or reverse-engineering via systematic API queries.
4. **Backdoor ML / Trojaned Models:** Covert triggers embedded in weights during fine-tuning that activate unintended behaviors upon specific inputs.
5. **Lack of Trustworthiness / Hallucinations:** Uncalibrated model confidence producing fabricated statements without lineage or verifiability.
