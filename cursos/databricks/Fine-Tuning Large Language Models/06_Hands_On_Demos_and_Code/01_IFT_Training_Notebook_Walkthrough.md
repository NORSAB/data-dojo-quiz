# Hands-On Demo 1: Instruction Fine-Tuning (IFT) Walkthrough

> **Lesson ID:** `24321` (`2.11 - IFT Demo`)  
> **Environment:** Databricks Serverless Model Training  
> **Dataset:** Supervised Instruction JSONL in Unity Catalog Volume  
> **Model Target:** Meta Llama 3 8B Instruct  

---

## 1. Environment Setup & Data Verification

Before initiating training, ensure your workspace has access to Unity Catalog and serverless compute permissions. This notebook verifies the input training data stored in a Unity Catalog Volume:

```python
# COMMAND ----------
# Check dataset files in Unity Catalog Volume

volume_path = "/Volumes/enterprise_catalog/genai/training_data"
display(dbutils.fs.ls(volume_path))

# COMMAND ----------
# Inspect the first 3 lines of the training JSONL
import json

train_file_path = f"{volume_path}/ift_train.jsonl"

with open(f"/dbfs{train_file_path}", "r", encoding="utf-8") as f:
    for i in range(3):
        line = f.readline()
        if not line:
            break
        print(f"Sample {i+1}:")
        print(json.dumps(json.loads(line), indent=2))
```

---

## 2. Submitting the Training Job via Foundation Model SDK

We import the `foundation_model` module from `databricks.model_training` and configure our fine-tuning run:

```python
# COMMAND ----------
# Launch Instruction Fine-Tuning

from databricks.model_training import foundation_model as fm

# Define input paths and target model coordinates in Unity Catalog
train_data_uri = "dbfs:/Volumes/enterprise_catalog/genai/training_data/ift_train.jsonl"
eval_data_uri  = "dbfs:/Volumes/enterprise_catalog/genai/training_data/ift_eval.jsonl"
target_model_name = "enterprise_catalog.genai.custom_support_llama3"

# Submit distributed serverless training run
run = fm.create(
    model="meta-llama/Meta-Llama-3-8B-Instruct",
    train_data_path=train_data_uri,
    eval_data_path=eval_data_uri,
    register_to=target_model_name,
    training_duration="2ep",         # 2 epochs
    learning_rate=3e-5,              # Conservative LR for LoRA/PEFT
    task_type="INSTRUCTION_FINETUNE"
)

print(f"Training run submitted!")
print(f"Run ID: {run.run_id}")
```

---

## 3. Polling Status & Monitoring Training Progress

While the serverless training job executes on dedicated GPU hardware, we can poll its status programmatically:

```python
# COMMAND ----------
# Monitor training status

import time

run_id = run.run_id

while True:
    run_info = fm.get_run(run_id)
    current_status = run_info.status
    print(f"[{time.strftime('%X')}] Status: {current_status}")
    
    if current_status in ["COMPLETED", "FAILED", "CANCELED"]:
        break
        
    time.sleep(30)

if current_status == "COMPLETED":
    print("SUCCESS: Model training finished and registered to Unity Catalog!")
    print(f"Registered Model: {target_model_name}")
else:
    print(f"ERROR: Run ended with status: {current_status}")
```

---

## 4. Validating the Registered Model in Unity Catalog

Once completed, the fine-tuned model checkpoint is registered as a versioned asset in Unity Catalog:

```python
# COMMAND ----------
# Verify model registration in MLflow / Unity Catalog

import mlflow
from mlflow.tracking import MlflowClient

client = MlflowClient()

# Get latest model version
latest_versions = client.get_latest_versions(target_model_name)
for v in latest_versions:
    print(f"Model: {v.name} | Version: {v.version} | Status: {v.status}")
```
