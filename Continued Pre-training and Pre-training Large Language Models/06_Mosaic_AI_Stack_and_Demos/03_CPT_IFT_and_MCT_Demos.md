# Module 6.3: Hands-on Demos — Foundation Model Training & Mosaic CLI

> **Course Reference:** Lessons 3.13 & 3.14 (Code Execution & Platform Demos)  
> **Key Topics:** Databricks Foundation Model Training UI & SDK, Mosaic CLI (`mcli`), Multi-Node YAML Configuration, Model Deployment & Serving.

---

## 1. Databricks Foundation Model Training UI & Python SDK

The Databricks Foundation Model Training suite provides both a visual point-and-click UI in the Machine Learning workspace and a full Python SDK.

### Visual Workflow in Databricks Workspace
1. In the sidebar, navigate to **Machine Learning** -> **Experiments** -> **Create Training Run**.
2. Select **Task Type**:
   - `Continued Pre-training`: For unstructured raw text corpora.
   - `Instruction Fine-Tuning`: For Prompt/Response or Chat JSONL datasets.
3. Select **Base Model**: Choose from supported models in Unity Catalog (e.g., `meta-llama/Meta-Llama-3-8B`, `mosaicml/mpt-7b-8k`).
4. Select **Training Data Path**: Browse Unity Catalog Volumes to choose `.txt` or `.jsonl` files.
5. Specify **Register To**: Target destination in Unity Catalog (`catalog.schema.model_name`).
6. Click **Train**: Databricks automatically provisions the requisite GPU cluster, monitors loss in MLflow, and saves the final model.

---

## 2. Distributed Training via Mosaic CLI (`mcli`)

For advanced practitioners orchestrating massive multi-node pre-training jobs using LLM Foundry, Databricks provides the **Mosaic CLI (`mcli`)**. Jobs are declaratively defined using YAML manifests.

### Example Multi-Node Pre-training YAML Manifest (`pretrain_mpt_7b.yaml`)

```yaml
name: pretrain-mpt-7b-distributed
image: mosaicml/llm-foundry:2.3.0_cu121-latest
compute:
  cluster: oci-h100-cluster
  gpus: 64  # 8 nodes x 8 H100 GPUs

integrations:
  - integration_type: git_repo
    git_repo: mosaicml/llm-foundry
    git_branch: main
    pip_install: -e .

# Environment variables and tracking
env:
  DATABRICKS_HOST: "https://<workspace-instance>.databricks.com"
  DATABRICKS_TOKEN: "dapi_secret_token"
  MLFLOW_TRACKING_URI: "databricks"
  MLFLOW_EXPERIMENT_NAME: "/Users/engineer@company.com/llm_pretraining_demo"

# Dataloader, Architecture and Training command
command: |
  cd llm-foundry/scripts
  composer train/train.py /mnt/config/mpt_7b_pretrain_config.yaml \
    train_loader.dataset.remote=s3://my-company-tokens/train_mds/ \
    eval_loader.dataset.remote=s3://my-company-tokens/eval_mds/ \
    max_duration=10000ba \
    eval_interval=1000ba \
    save_folder=s3://my-company-checkpoints/mpt_7b/ \
    save_interval=1000ba
```

### Launching and Monitoring via CLI
```bash
# Authenticate CLI with Databricks / Mosaic environment
mcli set api-key $MOSAIC_API_KEY

# Submit distributed multi-node job
mcli run -f pretrain_mpt_7b.yaml

# Inspect live cluster status and GPU telemetry
mcli get runs
mcli logs pretrain-mpt-7b-distributed --follow
```

---

## 3. Deploying and Serving the Trained Model in Unity Catalog

Once Continued Pre-training and Instruction Fine-Tuning complete, the model artifact is registered into the Unity Catalog Model Registry. From there, it can be deployed to a **Mosaic AI Model Serving Endpoint** with automated scale-to-zero and high-throughput concurrency.

### Python Deployment Code

```python
import mlflow
from databricks.sdk import WorkspaceClient
from databricks.sdk.service.serving import EndpointCoreConfigInput, ServedEntityInput

w = WorkspaceClient()

endpoint_name = "pharma-compliance-copilot-endpoint"

# Configure the serving endpoint using the Unity Catalog registered model
w.serving_endpoints.create_and_wait(
    name=endpoint_name,
    config=EndpointCoreConfigInput(
        served_entities=[
            ServedEntityInput(
                entity_name="prod_catalog.ai_models.pharma_compliance_copilot",
                entity_version="1",
                workload_size="Medium",
                scale_to_zero_enabled=True
            )
        ]
    )
)

print(f"Model Serving Endpoint Deployed: {endpoint_name}")
```

### Querying the Deployed Model via REST API

```python
import requests
import json

DATABRICKS_HOST = "https://<workspace-instance>.databricks.com"
DATABRICKS_TOKEN = "<access_token>"

headers = {
    "Authorization": f"Bearer {DATABRICKS_TOKEN}",
    "Content-Type": "application/json"
}

payload = {
    "messages": [
        {
            "role": "system",
            "content": "You are an expert regulatory assistant for pharmaceutical manufacturing."
        },
        {
            "role": "user",
            "content": "Summarize the primary documentation required for validation of computerized systems."
        }
    ],
    "temperature": 0.2,
    "max_tokens": 512
}

response = requests.post(
    f"{DATABRICKS_HOST}/serving-endpoints/{endpoint_name}/invocations",
    headers=headers,
    data=json.dumps(payload)
)

print("Model Output:\n", response.json()["choices"][0]["message"]["content"])
```
