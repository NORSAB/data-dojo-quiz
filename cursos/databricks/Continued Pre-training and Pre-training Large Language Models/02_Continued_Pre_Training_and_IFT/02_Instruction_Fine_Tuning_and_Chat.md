# Module 2.2: Instruction Fine-Tuning (IFT) & Chat Formatting

> **Course Reference:** Lesson 3.3 | Canonical Slides 14 – 20 (Authoring Files 133 – 139)  
> **Key Topics:** Supervised Fine-Tuning Mechanics, Prompt/Response vs. Chat JSONL Schemas, Ingestion from Unity Catalog Volumes and Delta Tables, Python Training API (`task_type="INSTRUCTION_FINETUNE"`).

---

## 1. What is Instruction Fine-Tuning (IFT)?

While Continued Pre-training (CPT) gives a model deep, domain-specific intuition by continuing next-token prediction over raw prose, a base model remains an **autocomplete engine**. If given a prompt like:
```
Explain the regulatory approval process for biologic drug candidates:
```
A base CPT model might respond by continuing with another question or adding boilerplate headers, rather than providing an answer:
```
1. Explain the chemistry manufacturing and controls (CMC) requirements.
2. Outline the clinical phases I through III.
```

**Instruction Fine-Tuning (IFT)** (also referred to as **Supervised Fine-Tuning (SFT)**) bridges this gap. It trains the model on curated pairs of prompts and target completions, teaching the neural network to act as a helpful, aligned assistant that adheres to instructions, adopts a specific tone, and formats outputs into predictable structures (e.g., Markdown, JSON, SQL).

### Token Masking in IFT Loss Calculation
A critical technical difference between CPT and IFT lies in the loss function:
- **In CPT:** Cross-entropy loss is computed across **every token** in the sequence.
- **In IFT:** Loss is **masked** over the user's prompt tokens and computed **only on the target response / assistant tokens**. The model is penalized exclusively for errors in generating the answer, preserving its understanding of how to interpret arbitrary user prompts.

---

## 2. Supported Data Schemas for IFT

Databricks Foundation Model Training supports two primary JSONL schemas for instruction datasets:

### Schema 1: Prompt / Response (or Prompt / Completion)
Best for single-turn task execution, extraction, classification, and summarization:

```json
{"prompt": "Summarize the clinical trial findings for Patient ID 4082:\nPatient showed 45% reduction in primary tumor volume after 12 weeks of regimen B with minimal grade 1 nausea.", "response": "Patient 4082 demonstrated a partial response with a 45% reduction in tumor volume at week 12 under regimen B. Adverse events were limited to mild (grade 1) nausea."}
{"prompt": "Convert the following natural language request into Databricks SQL:\nFind the top 5 customers by total revenue in 2024 from the orders table.", "response": "SELECT customer_id, SUM(order_amount) AS total_revenue\nFROM gold.orders\nWHERE YEAR(order_date) = 2024\nGROUP BY customer_id\nORDER BY total_revenue DESC\nLIMIT 5;"}
```

*Note:* Both `{"prompt": "...", "response": "..."}` and `{"prompt": "...", "completion": "..."}` keys are natively parsed.

### Schema 2: Chat Schema (Multi-Turn Conversational Format)
The standard modern format for multi-turn dialogues, system personas, and agent interactions:

```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are an expert regulatory compliance assistant for pharmaceutical manufacturing under FDA 21 CFR Part 11 standards."
    },
    {
      "role": "user",
      "content": "What are the core requirements for electronic signatures in audit trail logs?"
    },
    {
      "role": "assistant",
      "content": "Under 21 CFR Part 11.50, electronic signatures must contain: (1) The printed name of the signer, (2) The date and timestamp when the signature was executed, and (3) The meaning (such as review, approval, responsibility, or authorship) associated with the signature."
    },
    {
      "role": "user",
      "content": "Can the password be cached for continuous batch signing?"
    },
    {
      "role": "assistant",
      "content": "No. When an individual executes a series of signings during a continuous period of controlled access, Part 11 requires at least two distinct identification components at the initial signing, and at least one component (typically password) for each subsequent execution."
    }
  ]
}
```

---

## 3. Data Sources: UC Volumes vs. Delta Tables

Databricks supports ingestion directly from two storage primitives:

### 1. Unity Catalog Volumes (`.jsonl`)
Store JSON Lines files containing valid Prompt/Response or Chat records:
```
dbfs:/Volumes/prod_catalog/instruction_data/clinical_ift.jsonl
```

### 2. Delta Tables (`catalog.schema.table`)
When instruction data is generated, enriched, or cleaned using Apache Spark or Databricks SQL, it resides as a Delta Lake table. To train directly on a Delta Table, provide the table name and the `data_prep_cluster_id` parameter:

```python
run = ft.create(
    model="meta-llama/Meta-Llama-3-8B-Instruct",
    train_data_path="prod_catalog.ai_datasets.curated_instruction_pairs",
    task_type="INSTRUCTION_FINETUNE",
    data_prep_cluster_id="1024-123456-abcde123",  # Spark cluster to transform Delta to streaming JSONL
    register_to="prod_catalog.ai_models.llama3_specialized_assistant"
)
```

---

## 4. Launching IFT via Databricks Foundation Model Training API

### Python Code Implementation

```python
from databricks.model_training import foundation_model as ft

# Configure and submit the Instruction Fine-Tuning job
run = ft.create(
    # Specify the base foundation model or a previous CPT checkpoint
    model="meta-llama/Meta-Llama-3-8B",
    
    # Path to instruction dataset in Unity Catalog
    train_data_path="dbfs:/Volumes/prod_catalog/instructions/pharma_chat_train.jsonl",
    eval_data_path="dbfs:/Volumes/prod_catalog/instructions/pharma_chat_eval.jsonl",
    
    # Task type: INSTRUCTION_FINETUNE
    task_type="INSTRUCTION_FINETUNE",
    
    # Training duration: typically 1 to 5 epochs for instruction tuning
    training_duration="3ep",
    
    # Register trained model artifact directly into Unity Catalog Model Registry
    register_to="prod_catalog.ai_models.pharma_compliance_copilot",
    
    # Hyperparameters
    learning_rate=5e-6,
    batch_size=8
)

print(f"Instruction Fine-Tuning Run Submitted. ID: {run.id}")
```

### Key Differences in Training Dynamics: CPT vs. IFT

| Training Parameter | Continued Pre-training (CPT) | Instruction Fine-Tuning (IFT) |
| :--- | :--- | :--- |
| **Typical Learning Rate** | $1 \times 10^{-5}$ to $5 \times 10^{-5}$ | $2 \times 10^{-6}$ to $1 \times 10^{-5}$ (Lower to prevent catastrophic forgetting) |
| **Epochs** | 1 to 2 epochs (Rarely repeat tokens) | 2 to 5 epochs (Targeted reinforcement) |
| **Sample Count** | Millions of raw text blocks | 5,000 to 100,000 high-quality instruction pairs |
| **Loss Masking** | All tokens in sequence | Output/Assistant tokens only |
