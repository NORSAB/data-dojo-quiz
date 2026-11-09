# Fine-Tuning Mechanics & Foundation Model Training API

> **Lesson ID:** `24250` (`2.6 - Fine-Tuning`)  
> **Slide References:** Slides 27, 28, 29, 31, 35, 70  
> **SDK Package:** `databricks.model_training.foundation_model`  
> **Integration:** Unity Catalog & MLflow Tracking  

---

## 1. Supported Base Architectures

Databricks Foundation Model Training provides a curated suite of leading open-weight foundation models optimized for serverless execution. Practitioners can select from:

1. **Meta Llama Family:**
   - `meta-llama/Meta-Llama-3-8B-Instruct`
   - `meta-llama/Meta-Llama-3-70B-Instruct`
   - `meta-llama/Llama-2-7b-chat-hf` / `meta-llama/Llama-2-13b-chat-hf`
2. **Databricks DBRX:**
   - `databricks/dbrx-instruct` (132B total / 36B active Mixture-of-Experts)
3. **Mistral AI:**
   - `mistralai/Mistral-7B-Instruct-v0.2`
   - `mistralai/Mixtral-8x7B-Instruct-v0.1`

All base models are downloaded securely from Hugging Face or Databricks-managed model caches and verified against cryptographic hashes before training initiates.

---

## 2. Python SDK: `databricks.model_training`

The primary programmatic interface for launching distributed fine-tuning is the `foundation_model` module. It manages cluster allocation, data parsing, training loop execution, and model registration behind a clean, declarative API.

### `fm.create()` Function Signature

```python
from databricks.model_training import foundation_model as fm

run = fm.create(
    model: str,                   # Base foundation model identifier
    train_data_path: str,         # Path to training JSONL in UC Volume or HF path
    eval_data_path: str = None,   # Path to evaluation JSONL in UC Volume
    register_to: str = None,      # Target 3-level UC model name (catalog.schema.model)
    training_duration: str = "1ep",# Duration specified in epochs ('1ep') or tokens ('500000tok')
    learning_rate: float = 3e-5,  # Peak learning rate
    task_type: str = "INSTRUCTION_FINETUNE", # "INSTRUCTION_FINETUNE" or "CONTINUED_PRETRAIN"
    save_weights_path: str = None # Optional volume path for intermediate checkpoints
)
```

---

## 3. Production Training Script Example

The following script demonstrates launching a production fine-tuning run with evaluation monitoring and automated registration:

```python
# Databricks Notebook: Launch Foundation Model Training

import time
from databricks.model_training import foundation_model as fm

# 1. Define volume paths and destination catalog
train_volume = "dbfs:/Volumes/enterprise_cat/ai_data/volumes/support_train.jsonl"
eval_volume  = "dbfs:/Volumes/enterprise_cat/ai_data/volumes/support_eval.jsonl"
target_model = "enterprise_cat.ai_models.custom_support_llama3"

print("Submitting training job to Databricks Serverless Compute...")

# 2. Launch Instruction Fine-Tuning
run = fm.create(
    model="meta-llama/Meta-Llama-3-8B-Instruct",
    train_data_path=train_volume,
    eval_data_path=eval_volume,
    register_to=target_model,
    training_duration="2ep",       # 2 complete passes over the dataset
    learning_rate=3e-5,            # Conservative learning rate for Llama 3
    task_type="INSTRUCTION_FINETUNE"
)

print(f"Training run initiated successfully!")
print(f"Run ID: {run.run_id}")

# 3. Monitor training progress
while True:
    run_status = fm.get_run(run.run_id)
    state = run_status.status
    print(f"Current State: {state}")
    
    if state in ["COMPLETED", "FAILED", "CANCELED"]:
        break
        
    time.sleep(30)

if state == "COMPLETED":
    print(f"Model successfully registered in Unity Catalog at: {target_model}")
else:
    print(f"Training ended with unexpected state: {state}")
```

---

## 4. Run Management and Inspection

The SDK provides administrative commands to manage active and past training jobs:

```python
# List recent model training runs across the workspace
runs = fm.list_runs()
for r in runs:
    print(f"Run: {r.run_id} | Model: {r.model} | Status: {r.status} | Created: {r.created_at}")

# Retrieve detailed metrics for a specific run
details = fm.get_run("run_abc123_xyz")
print(f"Metrics: {details.metrics}")

# Cancel an active run if loss diverges
# fm.cancel_run("run_abc123_xyz")
```

---

## 5. Automated MLflow Tracking & Lineage

During execution, the training engine streams loss metrics directly to **MLflow 2.11+**:
- **Loss Curves:** Real-time plots for training loss and evaluation loss computed at regular step intervals.
- **Perplexity:** Cross-entropy exponential tracking ($e^{\mathcal{L}}$), serving as the primary indicator of language model confidence.
- **Hardware Telemetry:** GPU memory utilization, compute tokens per second, and communication overhead.
- **Artifacts:** Tokenizer configuration files, chat templates, and LoRA adapter weights (`adapter_model.bin`, `adapter_config.json`).
