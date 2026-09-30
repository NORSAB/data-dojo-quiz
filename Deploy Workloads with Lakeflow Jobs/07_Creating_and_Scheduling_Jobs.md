# 07. Lecture: Creating and Scheduling Jobs

**Curso:** Deploy Workloads with Lakeflow Jobs  
**Tipo de Contenido:** SCORM / Lección Interactiva  
**Captura de Pantalla:** ![Creating and Scheduling Jobs](capturas/07_Creating_and_Scheduling_Jobs_full.png)

---

## Overview

In this lecture, you will learn how to configure Lakeflow Jobs tasks using parameters, dynamic values, notifications, and retry policies, and how to automate job execution with schedules and event-driven triggers.

## Learning Objectives

By the end of this lecture, you will be able to:
1. Configure task parameters, task values, dynamic value references, notifications, and retry policies for Lakeflow Jobs.
2. Set up and manage different job scheduling options, including scheduled, file arrival, table update, and continuous triggers.
3. Automate job execution using triggers to support time-based and event-driven workflows.
4. Explore and apply scheduling options in the Databricks Lakeflow Jobs UI.

---

## A. Common Task Configuration Options

There are three major categories of task configuration options:
1. **Parameters & Dynamic Value References**: Foundation of reusable and adaptable workflows.
2. **Notification Alerts**: Keep teams informed on Start, Success, Failure, and Late run thresholds.
3. **Retries**: First line of defense against transient failures.

---

### A1. Parameters: Types and Precedence
- **Task Parameters**: Defined at the individual task level. Define task-specific defaults and inputs.
- **Job Parameters**: Defined at the job level. Automatically push down and propagate to **all** tasks in the job.
- **Precedence Rule**: **Job Parameters always override Task Parameters** when the same key exists.
- **Runtime Overrides**: When triggering a job manually or via API, job parameters can be overridden on-the-fly (`Run now with different settings`).

### A2. Setting & Accessing Parameters
- **In Notebook Tasks**:
  ```python
  # Access both task and job parameters (job parameters take precedence)
  catalog_name = dbutils.widgets.get("catalog_name")
  env = dbutils.widgets.get("env")
  ```
- **In SQL Tasks / Python Wheels / JARs**: Parameter access follows task-specific syntax (e.g. named query parameters `:parameter_name`).

---

### A3. Task Values (Inter-Task Communication)
Task values are dynamic key-value pairs computed at runtime and shared across tasks in the DAG:
- **Set a Task Value** (in upstream task):
  ```python
  dbutils.jobs.taskValues.set(key="record_count", value=15420)
  dbutils.jobs.taskValues.set(key="processed_path", value="/Volumes/catalog/schema/volume/batch_01/")
  ```
- **Get a Task Value** (in downstream task):
  ```python
  records = dbutils.jobs.taskValues.get(taskKey="ingest_step", key="record_count")
  source_dir = dbutils.jobs.taskValues.get(taskKey="ingest_step", key="processed_path")
  ```

---

### A4. Dynamic Value References (`{{ }}` Notation)
Dynamic value references allow accessing runtime metadata directly in task parameters, paths, and configurations without hardcoding:

| Reference | Scope / Purpose |
| :--- | :--- |
| `{{job.run_id}}` | Unique execution ID for run tracking and logging |
| `{{job.start_time.day}}` | Execution day for date-partitioned processing |
| `{{job.parameters.<param_name>}}` | Access job-level parameters dynamically |
| `{{task.name}}` | Current task name for logging or dynamic naming |
| `{{task.retry_count}}` | Current retry attempt number |
| `{{tasks.<task_name>.values.<key>}}` | Access computed runtime task values from upstream tasks |

---

### A5. Notification Alerts
- **Destinations Supported**: Email, Slack, Microsoft Teams, PagerDuty, and custom Webhooks.
- **Job-Level Notifications**: Triggered after the entire job finishes (Success, Failure, Duration threshold exceeded).
- **Task-Level Notifications**: Granular alerts per individual task (e.g., alert engineering only if validation fails).
- **Special Operational Triggers**:
  - **Late Jobs**: Duration threshold warning / timeout alert.
  - **Streaming Backlog**: Alerts when a continuous stream falls behind upstream message arrival.

---

### A6. Retry Policies
Determines how and when failed tasks are automatically retried:
- Maximum retry attempts (e.g., 3 retries).
- Interval between retries (fixed or exponential backoff).
- Retrying only on transient errors (network timeouts, cloud rate limits) to avoid infinite loops on syntax/schema errors.

---

## B. Job Schedules and Triggers

A **trigger** is a rule engine that automatically initiates job execution based on conditions or schedules.

### B1. Five Supported Trigger Types

1. **Scheduled Trigger (Time-based)**:
   - UI presets: Hourly, Daily, Weekly, Monthly.
   - Quartz Cron syntax for complex schedules (e.g. `0 0 6 ? * MON-FRI` for weekdays at 6 AM).
   - Timezone-aware execution.

2. **File Arrival Trigger (Event-driven)**:
   - Supported storage: AWS S3, Azure ADLS Gen2, Google Cloud Storage, and Unity Catalog Volumes.
   - Triggers immediately when new files land matching a configured path and file pattern.

3. **Continuous Trigger (Always-on Streaming)**:
   - Designed for low-latency streaming workloads.
   - Automatically restarts the job upon transient cluster restarts or pipeline maintenance.

4. **Manual Trigger**:
   - On-demand execution from UI ("Run now" or "Run now with different settings").
   - Programmatic execution via Databricks REST API, CLI, SDK, and Databricks Asset Bundles (DABs).

5. **Table Update Trigger (Real-Time Ingestion)**:
   - Monitors up to **10 source tables** in Unity Catalog (managed Delta, Iceberg, materialized views, streaming tables).
   - Automatically kicks off downstream jobs when changes (Insert, Update, Delete, Merge) occur.

---

### B2. Table Update Trigger Configuration
- **Step 1 (Select Type)**: Choose `Table update`.
- **Step 2 (Monitored Tables)**: Select up to 10 tables from Unity Catalog.
- **Step 3 (Trigger Condition)**:
  - `Any table updated`: Triggers as soon as the first monitored table changes.
  - `All tables updated`: Waits until all monitored source tables have completed their updates.
- **Step 4 (Advanced Controls)**:
  - **Minimum time between triggers**: Enforces a mandatory cooldown buffer (e.g. 15 minutes) to avoid over-triggering during frequent micro-batches.
  - **Wait after last change**: Delays execution until no new changes have arrived for a specified quiet window, guaranteeing the entire batch has landed before processing begins.

---

## C. Conclusion
- Task configurations (parameters, task values, `{{ }}` dynamic references, retries, and multi-channel notifications) make Lakeflow workflows resilient and dynamic.
- The 5 trigger types (Scheduled, File Arrival, Continuous, Manual, Table Update) cover every operational model from traditional nightly batches to reactive real-time CDC.
