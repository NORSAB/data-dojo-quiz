# Lecture: Introduction to Data Engineering in Databricks

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines  
**Módulo:** Fundamentos de Ingeniería de Datos y Pipelines Declarativos  
**Tipo de Contenido:** SCORM Interactivo  
**Captura de Pantalla Completa:** `capturas/03_Introduction_to_Data_Engineering_in_Databricks_full.png`

---

## Overview

This lecture introduces how Databricks supports efficient data engineering by combining **optimized storage techniques**, unified data governance through **Unity Catalog**, and **Lakeflow's** integrated capabilities for data ingestion, transformation, and orchestration. It then focuses on **Apache Spark™ Declarative Pipelines (SDP)**, a low-code, declarative framework for building, managing, and automating reliable batch and streaming data pipelines using SQL or Python.

---

## Learning Objectives

By the end of this lecture, you will be able to:
1. **Understand the components of Data Engineering with Lakeflow** in Databricks with Connect, Spark Declarative Pipelines, and Jobs.
2. **Explain how Apache Spark™ Declarative Pipelines incrementally processes data** using Streaming Tables and Materialized Views in batch or streaming Jobs.

---

## A. Data Engineering Platform Overview

It all begins with **optimized storage** using Delta Lake, Parquet, or Iceberg, built upon by **unified governance** with Unity Catalog, and powered by **Lakeflow** to deliver end-to-end, high-quality data engineering for analytics and AI:

- **Optimized Storage Layer:** Delta Lake \| Parquet \| Iceberg.
- **Unified Governance:** **Unity Catalog** provides centralized access control, auditing, data lineage, quality monitoring, and data discovery across Databricks workspaces.
- **Industry Leading Data Processing Engine:** Apache Spark™ + Structured Streaming.
- **Databricks Lakeflow (Unified Data Engineering):**
  - **Connect:** Efficient ingestion connectors for SaaS apps, databases, cloud storage, and message queues.
  - **Apache Spark Declarative Pipelines (SDP):** Accelerated, declarative ETL development using SQL and Python.
  - **Jobs:** Reliable orchestration, workflow automation, and SLA monitoring.

---

## B. Challenges in Building and Operating Reliable Data Pipelines

Traditional data engineering forces teams to spend 80% of their effort on operational plumbing instead of core transformation logic:

### The Operational Burden:
- Where data lives (Data Lake vs. Data Warehouse silos)
- Version control, CI/CD, and deployment infrastructure
- Manual dependency management, DAG scheduling, partition computation
- Hand-coding backfills, checkpointing, state management, retries
- Enforcing data quality rules and governance policies

### Why Traditional Pipelines Fail:
1. **Labor-Intensive Development:** Slow & error-prone pipelines delay data products and insights.
2. **Operational Complexity:** High operational costs, engineering toil, downtime, and wasted compute resources.
3. **Siloed Batch and Streaming:** Limited flexibility; separate codebases for batch vs. real-time make adapting to evolving latency needs cumbersome and expensive.

---

## C. Spark Declarative Pipelines: Reliable Data Pipelines Made Easy

Declarative pipelines let teams simply focus on **transformation logic**:

### 1. Simplified Pipeline Authoring
- **Write SQL or Python:** Define ingestion & transformation in familiar languages.
- **No Orchestration Logic:** Lakeflow automatically infers dependencies and compiles the optimal execution graph (DAG).
- **Zero Boilerplate:** Built-in error handling, checkpointing, and state management.

### 2. Intelligent Optimization at Scale
- **Auto-scaling:** Compute scales up/down automatically as data volumes fluctuate.
- **Self-healing:** Automatic recovery from transient cloud infrastructure failures without manual intervention.
- **Lower Overhead:** Dramatically less operational toil.

### 3. Unified Batch and Streaming
- **One Platform:** Process historical batches and real-time streams seamlessly.
- **Workload-Aware:** Adapts runtime optimizations for performance and cost.
- **No Rewrites:** The exact same SQL / Python logic handles both batch ingestion and streaming workloads.

---

## D. Medallion Architecture & Incremental Processing

### The Three Layers:
- **Bronze (Raw Ingestion):** Ingests raw data as-is from cloud storage, databases, or Kafka, often appending metadata columns (`_rescued_data`, file source metadata).
- **Silver (Cleaned & Refined):** Filters, cleans, enriches, and deduplicates data into structured, query-ready tables.
- **Gold (Business Aggregates):** Curated business-level aggregations and dimensional models designed for BI reporting, analytics, and Machine Learning.

### Incremental Execution Model:

```
[Raw Data Source] ---> (Streaming Table: Bronze) ---> (Streaming Table: Silver) ---> (Materialized View: Gold)
```

#### Run 1 (Initial Run):
- Raw data is appended into the **Bronze Streaming Table**.
- Transformation logic runs and appends clean records into the **Silver Streaming Table**.
- Aggregations and analytical queries populate the **Gold Materialized View** with built-in Serverless optimizations.

#### Run 2 (Incremental Run):
- **Auto Loader & Checkpointing:** The pipeline tracks checkpoints. Only newly arrived files (`File 2`) are ingested into Bronze.
- Only new records in Bronze are transformed and appended into Silver, ignoring previously processed records.
- The **Materialized View** at Gold level updates (incrementally or via efficient refresh) to reflect the new state of the Silver table without recomputing the entire historical dataset from scratch.

---

## E. Creating a Spark Declarative Pipeline

There are two primary methods to create a pipeline in Databricks:

### Method 1: Workspace Menu
1. Click the options menu (`⋮` or `+ New`) in the top navigation bar.
2. Select **Create** from the context menu.
3. Choose **ETL Pipeline** from the submenu.

### Method 2: Jobs & Pipelines UI
1. Navigate directly to **Jobs & Pipelines** in the left sidebar.
2. Click the **Create** button in the top-right corner.
3. Select **ETL Pipeline — Build and run an ETL pipeline with SQL and Python**.

---

## F. Summary & Key Takeaways

- **Lakeflow** combines Connect (Ingestion), Spark Declarative Pipelines (Transformation), and Jobs (Orchestration).
- **Declarative Pipelines** eliminate orchestration boilerplate and deliver automated dependency tracking, scaling, and checkpointing.
- **Streaming Tables** handle incremental appending, while **Materialized Views** deliver precomputed analytical queries.
