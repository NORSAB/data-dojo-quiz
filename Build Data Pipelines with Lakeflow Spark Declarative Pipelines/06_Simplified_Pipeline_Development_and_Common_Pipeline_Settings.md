# Lecture: Simplified Pipeline Development and Common Pipeline Settings

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines  
**Módulo:** Desarrollo Simplificado y Configuración de Pipelines  
**Tipo de Contenido:** SCORM Interactivo  
**Captura de Pantalla Completa:** `capturas/06_Simplified_Pipeline_Development_and_Common_Pipeline_Settings_full.png`

---

## Overview

In this lecture, you will learn how the **multi-file editor** simplifies pipeline development and debugging, and how common pipeline settings customize pipeline execution.

---

## Learning Objectives

By the end of this lecture, you will be able to:
1. **Identify and configure pipeline settings** such as compute, data assets, trigger modes, and advanced options.
2. **Develop a functional Declarative Pipeline** using the new pipeline editor and SQL-based syntax.

---

## A. Simplified Pipeline Development: The Multi-File Editor

Announced at the Data & AI Summit 2025, the multi-file editor in Apache Spark™ Declarative Pipelines organizes pipelines as modular file sets rather than monolithic notebooks or scripts:
- Write pipeline code using `.sql` or `.py` files (recommended), or interactive notebooks.
- Streamline development workflows, debug with integrated tooling, and validate DAG structures through dry runs without executing expensive compute runs.

### 6 Key Features of the Multi-File Editor:
1. **Pipeline Asset Browser:** Seamlessly navigate all `.sql`, `.py`, and configuration files across project directories.
2. **Multi-File Code Editor:** Modular editing designed for step-by-step pipeline development.
3. **Pipeline-Specific Toolbars:** Quick-action access for starting, stopping, dry running, and updating pipeline runs.
4. **Interactive DAG (Directed Acyclic Graph):** Real-time visual representation of table dependencies and execution flows.
5. **Data Previews:** In-line inspection of intermediate table states and schema derivations.
6. **Execution Insights, Debugging & Dry Run:** Monitor runs, track bottlenecks, and validate pipeline syntax and schema evolution without full compute runs.

---

## B. Common Pipeline Settings

Access settings directly inside the editor by clicking the **gear icon (`⚙`)**.

### 1. Compute Options
- **Serverless Compute (Databricks Recommended):**
  - **Optimized Cost & Performance:** Zero idle time, instant startup from warm pools.
  - **Focus on Code, Not Infrastructure:** No VM selection, cluster maintenance, or sizing guesswork.
  - **Incremental Refresh for Materialized Views:** Supported natively on Serverless.
  - **Cost-Based Optimizer (CBO):** Evaluates query complexity and updates MVs via incremental refresh or full recompute based on cost.
  - **Performance Optimized Mode:** Optional setting for time-sensitive production jobs to boost execution responsiveness.
- **Classic Compute (Fixed-Size / Self-Managed):**
  - Uses customer-managed clusters governed by workspace cluster policies.
  - **Enhanced Autoscaling:** Enabled by default for all new pipelines using Classic Compute to dynamically scale worker nodes based on pipeline queue depth.

---

### 2. Code Assets
- **Pipeline Root Folder:** Set automatically to include all relevant files within the project repository (supports Git-backed folders for CI/CD version control).
- **Source Code Paths:** Explicitly specify which subfolders or individual `.sql`, `.py`, or notebook files to include in the compiled DAG.

---

### 3. Configuration (Parameters)
A key-value dictionary used to parameterize paths, table prefixes, and thresholds across pipeline files without hardcoding:

- **Key-Value Definition:** e.g., `source` = `/Volumes/dbacademy/ops/dbacademy_warehouse`
- **SQL Reference Syntax:** Use `${parameter_name}` to inject values dynamically at runtime:

```sql
CREATE OR REFRESH STREAMING TABLE bronze AS
SELECT *
FROM STREAM read_files(
  "${source}/orders",
  format => 'JSON'
);
```

---

### 4. Additional Pipeline Settings
- **Budget & Cost Controls:** Set maximum compute spend limits and notifications.
- **Advanced Settings:** Tune Spark configuration properties, schema evolution flags, and retry thresholds.
- **Storage / Unity Catalog Target:** Select the destination Catalog and Schema for published tables and views.

---

## C. Summary & Key Takeaways

- The **Multi-File Editor** brings modular software engineering practices (git integration, asset browsing, interactive DAGs, dry run validation) to data pipelines.
- **Serverless Compute** is the gold standard for Spark Declarative Pipelines, providing automated scaling and the Cost-Based Optimizer for Materialized Views.
- **Configuration parameters** `${variable}` centralize environment configuration across dev, staging, and prod.
