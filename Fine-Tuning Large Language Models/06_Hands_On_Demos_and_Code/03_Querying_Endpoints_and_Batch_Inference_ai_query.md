# Hands-On Demo 3: Query Endpoint & Batch Inference with `ai_query`

> **Lesson ID:** `24320` (`2.13 - Query Endpoint and Batch Inference Demo`)  
> **Interfaces:** Python Deployment Client & Spark SQL `ai_query()`  
> **Workload:** Real-Time Interactive Scoring & Distributed Large-Scale Batch Inference  

---

## 1. Interactive Real-Time Scoring via Python

Databricks provides an MLflow deployment client that abstracts REST authentication and request routing:

```python
# COMMAND ----------
# Interactive Real-Time Querying via MLflow Deployments

import mlflow.deployments

deploy_client = mlflow.deployments.get_deploy_client("databricks")
endpoint_name = "llama3-8b-custom-support"

# Define test prompt
payload = {
    "messages": [
        {
            "role": "system",
            "content": "You are a customer support agent. Answer concisely in JSON."
        },
        {
            "role": "user",
            "content": "Can I upgrade my subscription plan midway through the billing cycle?"
        }
    ],
    "max_tokens": 128,
    "temperature": 0.0
}

response = deploy_client.predict(
    endpoint=endpoint_name,
    inputs=payload
)

print("Model Output:")
print(response["choices"][0]["message"]["content"])
```

---

## 2. Distributed Batch Inference with Spark SQL `ai_query()`

When scoring thousands or millions of records in Delta Lake, invoking HTTP endpoints via standard Python loops causes severe connection bottlenecks.

**`ai_query()`** is a built-in vectorized Spark SQL function that distributes query requests across worker nodes, auto-batches records into tensor payloads, and saturates the Provisioned Throughput endpoint:

```sql
-- COMMAND ----------
-- Distributed Batch Scoring in Spark SQL

SELECT 
  ticket_id,
  user_email,
  ticket_text,
  -- Invoke fine-tuned endpoint directly in SQL
  ai_query(
    'llama3-8b-custom-support',
    named_struct(
      'messages', array(
        named_struct('role', 'system', 'content', 'Classify urgency into High, Medium, or Low and summarize.'),
        named_struct('role', 'user', 'content', ticket_text)
      ),
      'max_tokens', 80,
      'temperature', 0.0
    )
  )['choices'][0]['message']['content'] AS model_classification
FROM 
  enterprise_catalog.customer_support.raw_tickets
LIMIT 50;
```

---

## 3. Streaming Batch Pipeline with Delta Live Tables (DLT)

`ai_query()` can also be embedded directly into incremental streaming pipelines:

```python
# COMMAND ----------
# Delta Live Tables Pipeline with ai_query()

import dlt
from pyspark.sql import functions as F

@dlt.table(
    name="classified_support_tickets_stream",
    comment="Continuously classified support tickets using fine-tuned Llama 3 endpoint"
)
def process_tickets():
    return (
        dlt.read_stream("raw_incoming_tickets")
        .select(
            "ticket_id",
            "received_timestamp",
            F.expr("""
                ai_query(
                    'llama3-8b-custom-support',
                    named_struct(
                        'messages', array(
                            named_struct('role', 'system', 'content', 'Extract department: Billing, Technical, or Account.'),
                            named_struct('role', 'user', 'content', ticket_text)
                        ),
                        'max_tokens', 20,
                        'temperature', 0.0
                    )
                )['choices'][0]['message']['content']
            """).alias("department_routing")
        )
    )
```
