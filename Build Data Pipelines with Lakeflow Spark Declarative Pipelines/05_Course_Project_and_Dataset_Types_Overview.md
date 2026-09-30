# Lecture: Course Project and Dataset Types Overview

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines  
**Módulo:** Arquitectura del Proyecto y Tipos de Datasets  
**Tipo de Contenido:** SCORM Interactivo  
**Captura de Pantalla Completa:** `capturas/05_Course_Project_and_Dataset_Types_Overview_full.png`

---

## Overview

In this lecture, you will first review the course project and then learn how **streaming tables**, **materialized views**, and **views** are used in Apache Spark™ Declarative Pipelines.

---

## Learning Objectives

By the end of this lecture, you will be able to:
1. **Build a hands-on course project** using Apache Spark™ Declarative Pipelines.
2. **Understand the core concepts and components** of Apache Spark™ Declarative Pipelines, including how streaming tables, materialized views, and temporary views function and differ.

---

## A. Course Project Architecture: Three Flows in One Pipeline

The project starts with raw files in JSON format landing in cloud storage. We build three distinct flows inside a single unified declarative pipeline:

### Flow 1: Orders Flow (Step-1)
- Ingests `orders` JSON files into an `orders_bronze` streaming table.
- Transforms the data into an `orders_silver` streaming table.
- Creates the materialized view `gold_orders_by_date` summarizing the number of orders by date.

### Flow 2: Status Flow (Step-2)
- Ingests `status` JSON files into a `status_bronze` streaming table.
- Transforms the data into a `status_silver` streaming table.
- Joins the `orders` and `status` streams to create the gold materialized view `full_order_info_gold`.
- Derives two downstream gold materialized views: `cancelled_orders` and `delivered_orders`.

### Flow 3: Customers Flow (Step-3 - CDC)
- Ingests `customers` JSON files into a `customers_bronze` table.
- Cleans and deduplicates into a refined bronze table named `customers_bronze_clean`.
- Performs **Change Data Capture (CDC)** to track updates in `type1_customers_silver` using SCD Type 1 logic.

---

## B. Dataset Types Comparison Matrix

Spark Declarative Pipelines support three primary dataset types:

| Dataset Type | Persistence & Storage | Incremental Processing | SQL Syntax | Best Use Case |
|---|---|---|---|---|
| **Streaming Table (ST)** | Physical Delta table stored in storage | **Yes (Append-only).** Only processes newly arrived data since last refresh | `CREATE OR REFRESH STREAMING TABLE ... AS SELECT ... FROM STREAM ...` | Bronze and Silver raw and transformed append-only streams, Auto Loader ingestion |
| **Materialized View (MV)** | Physical Delta table stored in storage | **Yes (Smart Refresh).** Cost-based optimizer chooses incremental or full recompute | `CREATE OR REFRESH MATERIALIZED VIEW ... AS SELECT ... FROM ...` | Gold layer aggregations, joins, slow/expensive queries, business KPIs |
| **Temporary View** | Ephemeral, no storage, pipeline-scoped | No (evaluated on demand during run) | `CREATE TEMPORARY VIEW ... AS SELECT ...` | Intermediate transformations not exposed to end users |
| **View (Standard)** | Logical virtual table registered in Unity Catalog | No (evaluated on query run) | `CREATE VIEW ... AS SELECT ...` | Exposing refined logical models to BI/analysts without duplicating physical storage |

> **Limitations on Views:**
> - The pipeline must be a Unity Catalog pipeline.
> - Views cannot have streaming queries and **cannot be used as a streaming source** for downstream streaming tables.

---

## C. Streaming Tables Deep-Dive

### Key Operational Rules:
1. **Incremental Processing:** Exactly-once ingestion semantics for files landing in cloud storage.
2. **Efficient Data Updates:** Appends only newly arrived rows without reprocessing historical data.
3. **Auto Loader Integration:** `FROM STREAM read_files("path", format => 'JSON')` leverages Databricks Auto Loader to track files automatically via directory listing or cloud notification queues.
4. **No Duplicate Reads:** Guarantees each file is read exactly once based on checkpoint metadata.

### SQL Examples:

#### Bronze Layer (Ingestion from Cloud Files):
```sql
CREATE OR REFRESH STREAMING TABLE 1_bronze_db.orders_bronze AS
SELECT
  *,
  current_timestamp() AS processing_time,
  _metadata.file_name AS source_file
FROM STREAM read_files(
  "{{ source_path }}/orders",
  format => 'JSON');
```

#### Silver Layer (Streaming from Bronze):
```sql
CREATE OR REFRESH STREAMING TABLE 2_silver_db.orders_silver AS
SELECT
  order_id,
  timestamp(order_timestamp) AS order_timestamp,
  customer_id,
  notifications
FROM STREAM 1_bronze_db.orders_bronze;
```

---

## D. Materialized Views Deep-Dive

- Recalculates results dynamically based on upstream dataset updates.
- Can be placed anywhere in the pipeline (not strictly restricted to Gold).
- **Cost-Based Optimizer on Serverless Compute:** Automatically determines whether to execute an incremental refresh or a full rebuild to minimize compute cost and execution time.
- **Reference Syntax:** Notice the **absence of the `STREAM` keyword** in the `FROM` clause:

```sql
CREATE OR REFRESH MATERIALIZED VIEW 3_gold_db.gold_orders_by_date AS
SELECT
  date(order_timestamp) AS order_date,
  count(*) AS total_daily_orders
FROM 2_silver_db.orders_silver
GROUP BY date(order_timestamp);
```

---

## E. DLT to SDP Syntax Evolution (Modern Standards)

| Deprecated (DLT Legacy) | Modern (Spark Declarative Pipelines) |
|---|---|
| `CREATE OR REFRESH STREAMING LIVE TABLE` | `CREATE OR REFRESH STREAMING TABLE` |
| `CREATE OR REFRESH LIVE TABLE` | `CREATE OR REFRESH MATERIALIZED VIEW` |
| `CREATE LIVE VIEW` | `CREATE VIEW` |
| `CREATE TEMPORARY LIVE VIEW` | `CREATE TEMPORARY VIEW` |

*Note: Legacy DLT syntax remains supported for backward compatibility, but modern declarative syntax should be used for all new pipelines.*

---

## F. The Declarative Pipeline Graph (DAG)

- **Automatic Dependency Resolution:** The order of SQL statements or Python functions in files does not dictate execution order.
- Lakeflow automatically inspects table references (`FROM` clauses) and builds the directed acyclic graph (DAG), resolving execution sequence and enabling parallel branches automatically.
