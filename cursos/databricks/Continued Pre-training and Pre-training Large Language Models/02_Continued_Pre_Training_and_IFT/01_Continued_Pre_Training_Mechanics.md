# Module 2.1: Continued Pre-training (CPT) Mechanics

> **Course Reference:** Lesson 3.2 | Canonical Slides 6 – 13 (Authoring Files 125 – 132)  
> **Key Topics:** CPT Definition, Comparison with Full Pre-training, Data Ingestion & Formatting in Unity Catalog, Databricks Foundation Model Training API (`task_type="CONTINUED_PRETRAIN"`).

---

## 1. What is Continued Pre-training?

**Continued Pre-training (CPT)** is the process of taking an existing, fully pre-trained base Large Language Model (such as MPT-7B, Llama 2/3 Base, or Mistral Base) and resuming the self-supervised **Causal Language Modeling (CLM)** training objective using an additional, domain-specific corpus of unstructured text.

Instead of initializing weights randomly, CPT initializes the neural network with the rich general-purpose linguistic, syntactic, and reasoning representations already encoded in the base model. The model is then exposed to millions or billions of tokens of specialized enterprise documents, updating all parameters to internalize new factual associations, specialized vocabulary, and domain semantics.

```
+---------------------------------------------------------------------------------------------------+
|                                  CONTINUED PRE-TRAINING WORKFLOW                                  |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ Pre-Trained Base Model ]  --->  [ Continued Pre-training (CPT) ]  --->  [ Domain-Adapted Base ]|
|  (e.g., Llama 3 8B Base)           - Unsupervised Next-Token Loss          (High Domain Perplexity|
|  General Knowledge                 - Millions/Billions Domain Tokens        Reduction; Retains    |
|                                    - All Model Weights Updated              General Reasoning)    |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Continued Pre-training vs. Full Pre-training

The operational differences between training from scratch and performing Continued Pre-training highlight why CPT is the enterprise standard for domain specialization:

| Factor | Full Pre-training (PT) | Continued Pre-training (CPT) |
| :--- | :--- | :--- |
| **Initial Weights** | Random Gaussian initialization | Pre-trained open weights (Llama, MPT, Mistral) |
| **Token Volume** | 1 Trillion – 15+ Trillion tokens | 100 Million – 100 Billion tokens |
| **Data Requirements** | Massive general web crawl + books + code | High-quality domain text (PDFs, manuals, code) |
| **Compute Hardware** | Hundreds to thousands of GPUs (e.g. 3,072 H100s) | 8 to 64 modern GPUs (A100 / H100) |
| **Training Duration** | Several weeks to months | Hours to a few days |
| **Financial Cost** | $10,000,000 – $100,000,000+ | $1,000 – $100,000 |
| **Tokenizer** | Custom vocabulary built from scratch | Inherits base model's tokenizer & vocab |
| **Primary Goal** | Establish base intelligence & world knowledge | Domain specialization without starting over |

---

## 3. Data Preparation & Formatting for CPT

Data preparation for Continued Pre-training is fundamentally different from instruction tuning. Because the objective is next-token prediction over continuous prose, the data consists of raw, unstructured text files stored in **Unity Catalog Volumes**.

### Storage & Organization in Unity Catalog Volumes
Data should be uploaded to a dedicated Unity Catalog Volume:
```
dbfs:/Volumes/<catalog_name>/<schema_name>/<volume_name>/cpt_corpus/
  |-- legal_filings_2023.txt
  |-- technical_manuals.txt
  |-- scientific_papers.txt
  +-- internal_wiki_dump.txt
```

### Text Delimitation and End-of-Document Tokens
When training an LLM across multiple discrete documents, documents are concatenated together into continuous token sequences matching the model's context window (e.g., 4,096 or 8,192 tokens). To prevent the model from learning spurious associations across unrelated files, documents must be separated by an explicit **End-of-Document (EOD)** or **End-of-Text (`<|endoftext|>`)** token:

```
[Document 1 Content: Full text of clinical trial protocol Alpha-101...]
<|endoftext|>
[Document 2 Content: Standard operating procedure for laboratory centrifuge maintenance...]
<|endoftext|>
[Document 3 Content: Molecular synthesis guidelines for compound 4B...]
<|endoftext|>
```

During training, the Mosaic AI dataloader automatically parses these delimiter tokens, applies packing algorithms, and optionally resets attention masks to prevent attention leakage across document boundaries.

---

## 4. Launching CPT via Databricks Foundation Model Training API

Databricks provides a high-level Python SDK (`databricks.model_training.foundation_model`) that abstracts the orchestration of multi-node GPU clusters, checkpointing, and MLflow experiment tracking.

### Python Code Implementation

```python
# Import the Databricks Foundation Model Training SDK
from databricks.model_training import foundation_model as ft

# Configure and launch the Continued Pre-training run
run = ft.create(
    # Supported base models: 'mosaicml/mpt-7b-8k', 'mosaicml/mpt-30b', 
    # 'meta-llama/Llama-2-7b-hf', 'meta-llama/Meta-Llama-3-8B', etc.
    model="mosaicml/mpt-7b-8k",
    
    # Path in Unity Catalog Volumes containing the raw .txt documents
    train_data_path="dbfs:/Volumes/prod_catalog/biomed_data/cpt_raw_text/",
    
    # Duration: specified in epochs ('1ep', '3ep') or tokens ('10Btok')
    training_duration="2ep",
    
    # Task type: CONTINUED_PRETRAIN signals unsupervised causal language modeling
    task_type="CONTINUED_PRETRAIN",
    
    # Destination for the newly trained model weights in Unity Catalog
    register_to="prod_catalog.ai_models.mpt_7b_biomed_base",
    
    # Optional hyperparameter overrides
    learning_rate=2e-5,
    eval_data_path="dbfs:/Volumes/prod_catalog/biomed_data/cpt_eval_text/"
)

# Output run metadata and tracking URL
print(f"Run ID: {run.id}")
print(f"Status: {run.status}")
print(f"MLflow Experiment: {run.experiment_id}")
```

### Monitoring Training Progress
During execution, the training process automatically logs metrics to **Databricks MLflow**:
- **`loss/train`:** Cross-entropy loss across next-token predictions on the training split.
- **`loss/eval`:** Validation loss on held-out domain text.
- **`perplexity` ($e^{\text{loss}}$):** A lower perplexity indicates the model is becoming significantly less surprised by domain-specific phrases and syntax.
- **`throughput/tokens_per_sec`:** Total tokens processed per second across all participating GPUs.
- **`gpu_utilization`:** Hardware utilization metric to confirm effective data streaming without I/O bottlenecks.
