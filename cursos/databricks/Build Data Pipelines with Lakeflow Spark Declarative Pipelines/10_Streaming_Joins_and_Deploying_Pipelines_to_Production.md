# Lecture: Streaming Joins and Deploying Pipelines to Production

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines  
**Módulo:** Joins en Streaming y Despliegue en Producción  
**Tipo de Contenido:** SCORM Interactivo  
**Captura de Pantalla Completa:** `capturas/10_Streaming_Joins_and_Deploying_Pipelines_to_Production_full.png`

---

## Overview

In this lecture, you will learn the fundamentals of **streaming joins** in Apache Spark™ Declarative Pipelines, including **stream-snapshot joins**, joins through **materialized views**, and **stream-stream joins**. You will also learn how to operationalize a pipeline for production using **scheduling**, **notifications**, **monitoring**, and **event logs**.

---

## Learning Objectives

By the end of this lecture, you will be able to:
1. **Deploy an Apache Spark™ Declarative Pipeline in production** by configuring execution modes (Triggered vs. Continuous), schedules, and email notifications.
2. **Analyze event logs and pipeline metrics** to examine data quality, progress, and lineage across the pipeline.

---

## A. Streaming Joins Taxonomy

When joining datasets involving streaming tables, the engine behaves differently depending on the input sources and output target:

| Join Pattern | Left Source | Right Source | Output Dataset | Data Processed | Description & Common Use Case |
|---|---|---|---|---|---|
| **Stream-Snapshot (Stream-Static) Join** | Streaming Table | Static Table | **Streaming Table** | **New rows only** | Incrementally joins newly arrived streaming records against a static dimension/lookup table (e.g., enriching transaction stream with static country names or product SKUs). |
| **Streaming via Materialized View (MV Join)** | Streaming Table | Streaming Table | **Materialized View** | **All rows each run (Smart Refresh)** | Joins two independently updating live streams. The Materialized View recalculates or incrementally refreshes to keep joined results synchronized. |
| **Stream-Stream Join** | Streaming Table | Streaming Table | **Streaming Table** | **New rows only (Windowed)** | Joins live events occurring close together in time using watermarks and stateful event-time windows (e.g., clickstream impressions matched to ad clicks). *Advanced pattern.* |

---

## B. Production Deployment & Operationalization

Transitioning a Declarative Pipeline from development to production requires four core operational configurations:

### 1. Execution Modes

- **Triggered Mode (Default / Batch Workloads):**
  - The pipeline starts, processes all available data across dependencies up to the start timestamp, updates tables, and **immediately stops compute**.
  - **Best For:** Hourly, daily, or micro-batch workloads where constant cluster uptime is unnecessary, maximizing cost efficiency.
- **Continuous Mode (Real-Time Workloads):**
  - The pipeline cluster remains active indefinitely, continuously monitoring sources and updating streaming tables with sub-second or low-second latency.
  - **Best For:** Low-latency streaming use cases requiring immediate data freshness.

---

### 2. Alerting & Email Notifications
Configure notification destinations for three lifecycle events:
- **On Pipeline Start:** Confirms pipeline initialization and execution timing.
- **On Pipeline Success:** Confirms data freshness and SLA compliance.
- **On Pipeline Failure:** Delivers immediate alerts with error stack traces for swift triage.

---

### 3. Monitoring via the Pipeline Event Log
The **Event Log** is a built-in telemetry ledger stored in Delta format that captures:
1. **Audit Logs:** Full history of actions, user initiations, pipeline reconfigurations, and cluster events.
2. **Data Quality Checks:** Granular metrics for every constraint (`WARN`, `DROP`, `FAIL`) including valid record counts, dropped row counts, and violation percentages.
3. **Pipeline Progress:** Real-time throughput, batch duration, bytes read/written, and micro-batch commit IDs.
4. **Data Lineage:** Dependency graphs tracing data flow from raw files to Gold views.

#### Querying the Event Log in Unity Catalog:
By default, the event log is maintained as a hidden table in the pipeline schema. It can be published as a named Unity Catalog table via Advanced Settings:

```sql
SELECT
  timestamp,
  message,
  level,
  details:flow_progress.metrics.num_output_rows AS rows_processed,
  details:data_quality.expectations AS expectations_evaluated
FROM <catalog>.<schema>.<event_log_table_name>
ORDER BY timestamp DESC;
```

---

## C. The Complete Multi-Flow Architecture

With Flow 1 (Orders) and Flow 2 (Status) configured:
1. `orders_bronze` ➔ `orders_silver`
2. `status_bronze` ➔ `status_silver`
3. Join `orders_silver` + `status_silver` into Gold Materialized View: `full_order_info_gold`
4. Downstream specialized Gold views: `cancelled_orders` and `delivered_orders`
