# Lecture: Ensure Data Quality with Expectations

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines  
**Módulo:** Calidad de Datos y Expectativas  
**Tipo de Contenido:** SCORM Interactivo  
**Captura de Pantalla Completa:** `capturas/08_Ensure_Data_Quality_with_Expectations_full.png`

---

## Overview

In this lecture, you will learn how to create and add **data quality expectations** to your pipelines, apply expectations to validate streaming data row-by-row, and understand the available actions for handling records that fail data quality checks.

---

## Learning Objectives

By the end of this lecture, you will be able to:
1. **Explain what expectations are** and how they enforce data quality rules in Apache Spark™ Declarative Pipelines.
2. **Write the `CONSTRAINT` syntax** to define data quality expectations on streaming tables and materialized views.
3. **Describe the three violation actions — WARN, DROP, and FAIL** — and explain when to use each.
4. **Apply expectations to a streaming table** using SQL with all three violation actions.
5. **Trace how a row of data is evaluated** through expectations in the pipeline and explain what happens when a constraint is violated.

---

## A. What Are Expectations?

Expectations are declarative data quality constraints applied directly during ETL processes. They validate incoming data **row-by-row** at runtime to prevent corrupt or non-compliant records from contaminating downstream analytics.

### General Syntax
```sql
CONSTRAINT constraint_name
EXPECT (column_condition)
[ON VIOLATION action]
```

---

## B. The Three Violation Actions Matrix

| Action | SQL Syntax Clause | Execution Behavior | Output Record State | Pipeline State | Best Use Case |
|---|---|---|---|---|---|
| **WARN** | *(Default — no clause needed)* | Violations are tracked in pipeline metrics and event logs | **Kept.** Invalid rows are written to the target table | Pipeline continues uninterrupted | Non-critical anomalies, data profiling, informational tracking |
| **DROP** | `ON VIOLATION DROP ROW` | Invalid records are filtered out and dropped; violation counts are logged | **Discarded.** Only valid records are written to target | Pipeline continues processing remaining data | Non-fatal bad data (e.g., negative amounts, malformed emails) that must not reach Silver/Gold |
| **FAIL** | `ON VIOLATION FAIL UPDATE` | Pipeline immediately halts execution for that specific flow; requires engineer intervention | **Halted.** Batch/micro-batch update fails | **Target flow fails immediately.** Other unrelated flows in the pipeline continue | Critical integrity violations (e.g., null primary keys, unauthenticated tenant IDs) |

---

## C. End-to-End SQL Implementation Example

The following SQL statement demonstrates all three constraint actions applied simultaneously on the `orders_silver` streaming table:

```sql
CREATE OR REFRESH STREAMING TABLE 2_silver_db.orders_silver
(
  -- 1. WARN Constraint: Log violations in telemetry, keep rows
  CONSTRAINT valid_notifications EXPECT (notifications IN ('Y','N')),

  -- 2. FAIL Constraint: Fail the pipeline flow immediately if violated
  CONSTRAINT valid_date EXPECT (order_timestamp > "2021-01-01") ON VIOLATION FAIL UPDATE,

  -- 3. DROP Constraint: Discard the invalid row and continue pipeline
  CONSTRAINT valid_id EXPECT (customer_id IS NOT NULL) ON VIOLATION DROP ROW
)
AS
SELECT
  order_id,
  timestamp(order_timestamp) AS order_timestamp,
  customer_id,
  notifications
FROM STREAM 1_bronze_db.orders_bronze;
```

---

## D. Execution Lifecycle & Evaluation Flow

```
Row Arrives from Stream
         │
         ▼
[Evaluate Constraints]
         │
    ┌────┴───────────────────────────────┐
    ▼                                    ▼
[Passes All Expectations]      [Violates Constraint]
    │                                    │
    │                                    ├─► WARN: Record written to table + logged in Event Log
    │                                    ├─► DROP: Record filtered out + logged in Event Log
    │                                    └─► FAIL: Specific flow halted + alert triggered
    ▼
Written to Target Table
```

### Important Runtime Considerations:
- **Flow Isolation:** A `FAIL UPDATE` violation stops only the specific dataset flow containing the failure. Other independent parallel flows in the pipeline continue operating.
- **Materialized Views with Expectations (Q2 2025):** Any Materialized View that incorporates expectations is automatically subjected to a **full refresh** during pipeline updates rather than an incremental refresh, ensuring strict mathematical correctness across historical partitions.

---

## E. Summary of Key Concepts

- **Expectations** provide built-in data governance without requiring external testing frameworks or third-party validation libraries.
- The three violation primitives — **WARN** (track), **DROP** (cleanse), and **FAIL** (protect) — allow building resilient, self-documenting data pipelines.
- Event logs automatically store row-level validation statistics for auditability and compliance reporting.
