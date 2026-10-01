# Model Serving: Provisioned Throughput & Batch Inference

> **Lesson IDs:** `24253` (`2.9`), `24318` (`2.12`), `24320` (`2.13`)  
> **Slide References:** Slides 76, 77, 78, 79  
> **Key Capabilities:** Provisioned Throughput (PT), Real-Time REST APIs, Spark SQL `ai_query()`  

---

## 1. Mosaic AI Model Serving Architecture

Once a model has been fine-tuned and registered to Unity Catalog, **Mosaic AI Model Serving** provides a production-grade, highly available, low-latency serving infrastructure.

Model Serving supports two deployment models:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   MODEL SERVING DEPLOYMENT MODES                       │
├──────────────────────────────────┬─────────────────────────────────────┤
│ 1. PAY-PER-TOKEN (FOUNDATION)    │ 2. PROVISIONED THROUGHPUT (PT)      │
├──────────────────────────────────┼─────────────────────────────────────┤
│ • Multi-tenant shared GPUs       │ • Dedicated GPU instances allocated │
│ • Billed purely per input/output │   exclusively to your workspace     │
│   million tokens                 │ • Strict concurrency & tokens/sec   │
│ • Best for: Exploration, internal│   Service Level Agreements (SLAs)   │
│   demos, variable light loads    │ • Zero noisy neighbors or throttling│
│ • Subject to shared rate limits  │ • Scale-to-zero supported           │
│                                  │ • Mandatory for custom fine-tuned   │
│                                  │   checkpoints (7B, 8B, 70B, DBRX)   │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

## 2. Deploying a Provisioned Throughput Endpoint

Practitioners deploy custom models using the Databricks Python SDK or UI. For custom fine-tuned models registered in Unity Catalog, **Provisioned Throughput** is selected:

```python
# Databricks Python SDK: Create Provisioned Throughput Endpoint

from databricks.sdk import WorkspaceClient
from databricks.sdk.service.serving import (
    EndpointCoreConfigInput,
    ServedEntityInput
)

w = WorkspaceClient()

endpoint_name = "prod-customer-support-llama3"
model_name = "enterprise_cat.ai_models.custom_support_llama3"
model_version = "1"

print(f"Deploying model {model_name} version {model_version}...")

w.serving_endpoints.create_and_wait(
    name=endpoint_name,
    config=EndpointCoreConfigInput(
        served_entities=[
            ServedEntityInput(
                name="support_model_v1",
                entity_name=model_name,
                entity_version=model_version,
                min_provisioned_throughput=10,  # Minimum guaranteed tokens/sec
                max_provisioned_throughput=50,  # Max burst throughput limit
                scale_to_zero_enabled=True      # Scale to 0 when idle to save cost
            )
        ]
    )
)

print(f"Endpoint '{endpoint_name}' is active and ready for traffic!")
```

---

## 3. Real-Time Inference via REST API

Model Serving endpoints expose standard OpenAI-compatible `/chat/completions` and Databricks `/invocations` REST interfaces:

### Python `requests` Invocation:

```python
import os
import requests

DATABRICKS_HOST = "https://<your-workspace-instance>.azuredatabricks.net"
DATABRICKS_TOKEN = os.environ.get("DATABRICKS_TOKEN")
ENDPOINT_NAME = "prod-customer-support-llama3"

url = f"{DATABRICKS_HOST}/serving-endpoints/{ENDPOINT_NAME}/invocations"
headers = {
    "Authorization": f"Bearer {DATABRICKS_TOKEN}",
    "Content-Type": "application/json"
}

payload = {
    "messages": [
        {"role": "system", "content": "You are an enterprise support assistant."},
        {"role": "user", "content": "How do I request access to the finance catalog?"}
    ],
    "max_tokens": 150,
    "temperature": 0.1
}

response = requests.post(url, headers=headers, json=payload)
result = response.json()
print("Model Output:", result["choices"][0]["message"]["content"])
```

---

## 4. High-Throughput Distributed Batch Inference with `ai_query()`

When processing millions of records stored in Delta Lake tables, sending row-by-row HTTP requests over the network introduces severe latency and networking overhead.

Databricks provides **`ai_query()`**, a native vectorized SQL function that distributes inference across a Spark cluster, automatically batching requests to saturate the Model Serving endpoint:

```sql
-- Batch Scoring Millions of Unprocessed Support Tickets in Delta Lake

CREATE OR REPLACE TABLE enterprise_cat.customer_ops.classified_tickets AS
SELECT 
  ticket_id,
  customer_id,
  ticket_text,
  -- Invoke fine-tuned Model Serving endpoint directly in SQL
  ai_query(
    'prod-customer-support-llama3',
    named_struct(
      'messages', array(
        named_struct('role', 'system', 'content', 'Classify this ticket into category and urgency.'),
        named_struct('role', 'user', 'content', ticket_text)
      ),
      'max_tokens', 100,
      'temperature', 0.0
    )
  )['choices'][0]['message']['content'] AS classification_result,
  current_timestamp() AS processed_at
FROM 
  enterprise_cat.customer_ops.incoming_tickets_raw
WHERE 
  status = 'NEW';
```

### Advantages of `ai_query()`:
1. **Zero Client Code:** Run LLM inference inside standard SQL queries, dbt models, or Delta Live Tables (DLT) pipelines.
2. **Auto-Batching & Retries:** Automatically combines multiple rows into single network payloads and handles transient rate-limiting without pipeline failure.
3. **Lineage Preservation:** Unity Catalog records data lineage connecting the input table, the serving endpoint, the fine-tuned model version, and the output table.
