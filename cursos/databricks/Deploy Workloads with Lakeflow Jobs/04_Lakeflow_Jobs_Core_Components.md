# 04. Lecture: Lakeflow Jobs Core Components

**Curso:** Deploy Workloads with Lakeflow Jobs  
**Tipo de Contenido:** SCORM / Lección Interactiva  
**Captura de Pantalla:** ![Lakeflow Jobs Core Components](capturas/04_Lakeflow_Jobs_Core_Components_full.png)

---

## Overview

In this lecture, you will understand the fundamental building blocks that make up every Lakeflow job and explore how tasks are orchestrated using DAG concepts.

## Learning Objectives

By the end of this lecture, you will be able to:
1. Understand the building blocks of Lakeflow Jobs, including the concepts of jobs and tasks.
2. Identify and describe the various task types and configuration options available in Lakeflow Jobs.
3. Explain how Directed Acyclic Graphs (DAGs) enable task orchestration and workflow patterns.
4. Learn how to create and configure jobs using the Lakeflow Jobs UI.

---

## A. Building Blocks of Lakeflow Jobs

### A1. Jobs and Tasks
- **Job**: The primary resource for scheduling, coordinating, and running operations such as data processing, ETL, analytics, and machine learning workloads within the Databricks environment. Think of a job as the container that holds your entire workflow.
- **Task**: A single unit of work within a job that executes a specific workload such as a notebook, script, query, pipeline, or model. Tasks are the individual building blocks that do the actual work.
- **Hierarchical Relationship**: Each job consists of one or more tasks.

### A2. Task Types Supported
- **Notebooks**: Python, SQL, Scala, R.
- **Python Scripts** & **Python Wheels**: Modular, packaged code.
- **SQL Files and Queries**: Data transformations on SQL Warehouses.
- **Spark Declarative Pipelines (SDP)**: Live batch and streaming tables.
- **dbt**: Data transformation workflows.
- **Java JAR Files** & **Spark Submit**: Legacy Spark applications.
- **AI/BI Dashboards**: Scheduled refresh of visualizations.
- **Power BI Integration**: Dataset refresh tasks.
- **Run Job Task**: Triggering downstream modular jobs.
- **Control Flow Tasks**: If/Else conditionals, For-each loops.

### A3. Task Configuration Options
- **Source & Path**: Defining git repo, workspace path, or volume location.
- **Libraries**: Adding PyPI packages, Maven coordinates, or wheel files.
- **Parameters**: Key-value pairs and dynamic task parameters (`{{tasks.<task_name>.values.<key>}}`).
- **Notifications**: Email, Slack, PagerDuty, Webhooks on Start, Success, Failure.
- **Retry Policies**: Max attempts, retry intervals, and retry on specific error codes.

### A4. Task Types: Notebook vs. SQL
- **Notebook Task**: Configures source path, base parameters, compute type (All-Purpose, Job Cluster, Serverless).
- **SQL Task**: Configures SQL query / dashboard / alert, attached SQL Warehouse, and query parameters.

### A5. Languages Supported
- Python, SQL, Scala, R, Java (via JAR).

### A6. Jobs Orchestration: Control Flow, Triggers, and Compute
- **Control Flow Patterns**:
  - Sequential (A $\rightarrow$ B $\rightarrow$ C)
  - Parallel (independent branches running concurrently)
  - Conditional (If/Else branch execution based on dynamic task values)
  - Run Job (modular job calling another job)
  - For-each loops (iterating over an array of items)
- **Trigger Types**:
  - **Manual**: On-demand execution.
  - **Scheduled**: Cron syntax / quartz expressions.
  - **Continuous**: Always-running streaming workloads.
  - **File Arrival**: Event-driven triggering upon new file landing in cloud storage volume.
  - **Table Update**: Triggered upon upstream Unity Catalog table update.
  - **API / Webhook**: Programmatic kickoff via Databricks REST API.

### A7. Compute Options Comparison

| Compute Type | Intended Use Case | Cost Profile | Startup Latency | Reusability |
| :--- | :--- | :--- | :--- | :--- |
| **Interactive / All-Purpose** | Development, ad-hoc analysis, exploration | Expensive (runs continuously until stopped) | Instant (already running) | Shared across users; not recommended for Production |
| **Job Clusters** | Production ETL & scheduled batch pipelines | ~50% cheaper than all-purpose | 3–5 min cloud provider spin-up | Dedicated to run; can be shared across tasks in the same job |
| **Serverless Workflows** | Fast, reliable, auto-scaling operational pipelines | Lower overall TCO with per-second billing | Instant / sub-minute startup | Managed by Databricks; auto-scaling and Photon-optimized |
| **SQL Warehouse** | SQL queries, BI dashboards, alerts | Serverless by default; auto-stop/auto-start | Sub-second with Serverless | High concurrency via Intelligent Workload Management |

### A8. Serverless Performance Modes
- **Standard Mode**: Focuses on cost-efficiency with standard cluster startup times (4–6 mins); best for flexible, non-urgent workloads.
- **Optimized Mode**: Enables faster job startup and execution; ideal for time-sensitive production workloads.

### A9. Compute Selection Flexibility
A single job can combine multiple compute types across different tasks:
- Task 1 (Extract): Serverless compute
- Task 2 (Transform): Shared Job Cluster
- Task 3 (BI Refresh): Serverless SQL Warehouse

---

## B. Task Orchestration & DAG Concepts

### B1. What is a DAG?
A **Directed Acyclic Graph (DAG)** is a conceptual representation of a sequence of activities:
- **Directed**: Unambiguous flow direction for each edge ($A \rightarrow B$).
- **Acyclic**: Contains no closed loops or circular dependencies.
- **Graph**: Vertices (tasks) connected by directional edges (dependencies).

### B2. Task Dependencies
You define the order of execution by configuring `Depends On` relationships:
```
       [Task 1: Ingest Data]
          /             \
         v               v
[Task 2: Clean Bronze]  [Task 3: Clean Reference]
         \               /
          v             v
       [Task 4: Build Gold Table]
```
- Task 2 and Task 3 run in parallel once Task 1 succeeds.
- Task 4 only runs after both Task 2 and Task 3 complete.

### B3. Common Workload Patterns
1. **Sequence Pattern**: Linear flow ($A \rightarrow B \rightarrow C$). Common for single-stream ETL and Medallion Architecture (Bronze $\rightarrow$ Silver $\rightarrow$ Gold).
2. **Funnel Pattern**: Multiple inputs merging into one ($A, B, C \rightarrow D$). Ideal for multi-source data consolidation and joins.
3. **Fan-out / Star Pattern**: Single input branching into multiple downstream tasks ($A \rightarrow B, C, D$). Ideal for ingesting raw data and feeding multiple analytical tables, ML models, and downstream marts simultaneously.

---

## C. Conclusion
- Lakeflow Jobs brings together tasks, diverse compute options, multi-language support, rich triggers, and flexible control flows.
- DAG orchestration guarantees predictable task ordering, parallelization, and error isolation.
- Understanding Sequence, Funnel, and Fan-out patterns allows designing robust production workflows.
