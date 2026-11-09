# Why Mosaic AI for Fine-Tuning LLMs?

> **Lesson ID:** `24247` (`2.3 - Why Mosaic AI for Fine-Tuning LLMs?`)  
> **Slide References:** Slides 16, 17, 18, 19  
> **Key Themes:** Enterprise Data Privacy, Unity Catalog Lineage, Zero IP Leakage, Cost Economics  

---

## 1. The Enterprise LLM Customization Dilemma

When embarking on fine-tuning, enterprise machine learning teams typically face three paths:

```
┌────────────────────────────────────────────────────────────────────────┐
│                    ENTERPRISE FINE-TUNING PATHWAYS                     │
├──────────────────────────────────┬─────────────────────────────────────┤
│ 1. THIRD-PARTY CLOSED APIS       │ • Vendor lock-in & proprietary black│
│    (OpenAI, Anthropic Fine-Tuning│   box weights.                      │
│     endpoints)                   │ • Sensitive training data leaves the│
│                                  │   enterprise security perimeter.    │
│                                  │ • Inability to export or self-host  │
│                                  │   resulting model weights.          │
├──────────────────────────────────┼─────────────────────────────────────┤
│ 2. SELF-MANAGED OPEN SOURCE (DIY)│ • Massive DevOps overhead (managing │
│    (Raw EC2/GCE VMs, Kubernetes, │   Slurm/K8s, CUDA drivers, NCCL).   │
│     manual PyTorch scripts)      │ • Broken lineage between data lakes │
│                                  │   and training scripts.             │
│                                  │ • Expensive GPU idle time and manual│
│                                  │   fault recovery.                   │
├──────────────────────────────────┼─────────────────────────────────────┤
│ 3. MOSAIC AI ON DATABRICKS       │ • 100% Data Sovereignty: data never │
│    (Unified Lakehouse Platform)  │   leaves the secure customer enclave│
│                                  │ • Serverless simplicity: zero cluster│
│                                  │   management or driver headaches.   │
│                                  │ • Full Unity Catalog governance and │
│                                  │   end-to-end MLflow audit lineage.  │
│                                  │ • Open model weights: full ownership│
│                                  │   and freedom to export.            │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

## 2. Enterprise Security & Zero Data Leakage

For regulated industries (financial services, healthcare, defense, telecommunications), transmitting proprietary training corpora to external SaaS fine-tuning endpoints introduces unacceptable compliance and intellectual property risks.

### Guarantees of Mosaic AI Model Training:
1. **Isolated Execution Enclaves:** All model training jobs run in secure, dedicated compute environments isolated from other tenants.
2. **Zero Third-Party Training:** Customer training datasets (JSONL, Delta tables, volumes) and fine-tuned checkpoints are **never** used to train, improve, or evaluate foundational models belonging to Databricks or any third party.
3. **Full Model Ownership:** The resulting model weights (whether full weights or LoRA adapter deltas) are the exclusive intellectual property of the customer, stored directly in customer-controlled Unity Catalog storage.

---

## 3. Unified Governance with Unity Catalog

In a disconnected MLOps stack, tracing which exact version of a dataset produced a specific model checkpoint requires manual documentation or fragile custom tracking scripts.

Mosaic AI is natively integrated with **Unity Catalog**, providing automatic end-to-end lineage:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   UNITY CATALOG END-TO-END LINEAGE                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   [ Delta Lake Tables ]                                                │
│   catalog.finance.raw_transcripts                                      │
│          │                                                             │
│          ▼ (Spark Data Curation / Filtering)                           │
│   [ Curated JSONL Dataset ]                                            │
│   /Volumes/catalog/finance/training_data/ift_dataset_v2.jsonl          │
│          │                                                             │
│          ▼ (Mosaic AI Serverless Training)                             │
│   [ MLflow Run Tracking ]                                              │
│   Run ID: f82b-491c... (Parameters, Loss Curves, Hardware Metrics)     │
│          │                                                             │
│          ▼ (Model Registration)                                        │
│   [ Unity Catalog Registered Model ]                                   │
│   catalog.finance.advisor_llama3_v2                                    │
│          │                                                             │
│          ▼ (Deployment)                                                │
│   [ Mosaic AI Model Serving Endpoint ]                                 │
│   https://<workspace>/serving-endpoints/advisor-endpoint/invocations    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Granular Role-Based Access Control (RBAC):
Through standard SQL `GRANT` and `REVOKE` statements, security administrators control who can train, view, or invoke models:
```sql
-- Grant data scientists permission to read training data from Volume
GRANT READ VOLUME ON VOLUME main.genai_data.training_volumes TO `data-science-team`;

-- Grant MLOps engineers permission to register models in the catalog
GRANT CREATE MODEL ON SCHEMA main.customer_support TO `mlops-engineers`;

-- Grant application service principals permission to execute inferences
GRANT EXECUTE ON MODEL main.customer_support.support_llama3 TO `app-service-principal`;
```

---

## 4. Cost Efficiency & Serverless Economics

Fine-tuning large language models can quickly become cost-prohibitive if GPU infrastructure is poorly utilized:
- **Serverless Provisioning:** GPUs are allocated precisely when the training job starts and terminated the moment evaluation and registration finish. Customers never pay for idle GPU instances.
- **Hardware Optimization:** Composer's integrated optimizations (FlashAttention-2, BF16 mixed precision, FSDP zero-redundancy optimizer) yield near-linear scaling across multi-GPU nodes, maximizing tokens processed per dollar.
- **Resilient Checkpointing:** When training on spot instances, automatic checkpointing ensures that a spot preemption does not restart the job from epoch zero, preserving compute investment.
- **Native MLflow Metric Tracking:** Real-time visibility into training loss, validation perplexity, and hardware metrics enables practitioners to terminate unpromising runs early.
