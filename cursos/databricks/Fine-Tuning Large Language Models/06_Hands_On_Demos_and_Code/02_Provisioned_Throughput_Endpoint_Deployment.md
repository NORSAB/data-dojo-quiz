# Hands-On Demo 2: Provisioned Throughput Endpoint Deployment

> **Lesson ID:** `24318` (`2.12 - Provisioned Throughput Endpoint Demo`)  
> **API:** Databricks Python SDK `WorkspaceClient`  
> **Infrastructure:** Mosaic AI Model Serving with Provisioned Throughput (PT)  

---

## 1. Objective & Sizing Strategy

Unlike standard pay-per-token serving (which runs on shared multi-tenant infrastructure), **Provisioned Throughput (PT)** allocates dedicated GPU compute instances to guarantee low latency, zero noisy-neighbor degradation, and high concurrency.

When deploying a custom fine-tuned model (e.g., Llama 3 8B or DBRX), Provisioned Throughput is configured with:
- **`min_provisioned_throughput`:** Minimum guaranteed tokens per second (e.g., 10 tok/sec).
- **`max_provisioned_throughput`:** Upper autoscaling limit for peak traffic surges (e.g., 50 tok/sec).
- **`scale_to_zero_enabled`:** Automatically spins down GPU nodes when no requests are received for a designated idle window (saving operational costs).

---

## 2. Programmatic Deployment via Databricks SDK

```python
# COMMAND ----------
# Install Databricks Python SDK if not already present
# %pip install databricks-sdk --upgrade

# COMMAND ----------
# Deploy fine-tuned model to Provisioned Throughput endpoint

from databricks.sdk import WorkspaceClient
from databricks.sdk.service.serving import (
    EndpointCoreConfigInput,
    ServedEntityInput
)

w = WorkspaceClient()

endpoint_name = "llama3-8b-custom-support"
model_name = "enterprise_catalog.genai.custom_support_llama3"
model_version = "1"

print(f"Submitting deployment request for endpoint '{endpoint_name}'...")

# Create or update endpoint with Provisioned Throughput configuration
endpoint = w.serving_endpoints.create_and_wait(
    name=endpoint_name,
    config=EndpointCoreConfigInput(
        served_entities=[
            ServedEntityInput(
                name="custom_support_entity",
                entity_name=model_name,
                entity_version=model_version,
                min_provisioned_throughput=10,
                max_provisioned_throughput=50,
                scale_to_zero_enabled=True
            )
        ]
    )
)

print(f"Deployment complete! Endpoint state: {endpoint.state.ready}")
```

---

## 3. Health Check & Endpoint Verification

We verify that the endpoint is ready to receive inference traffic:

```python
# COMMAND ----------
# Check endpoint health status

status = w.serving_endpoints.get(endpoint_name)
print(f"Endpoint: {status.name}")
print(f"State:    {status.state.ready}")
print(f"Config:   {status.state.config_update}")

for entity in status.config.served_entities:
    print(f"  Served Model: {entity.entity_name} v{entity.entity_version}")
    print(f"  Min Throughput: {entity.min_provisioned_throughput} tok/s")
    print(f"  Max Throughput: {entity.max_provisioned_throughput} tok/s")
```
