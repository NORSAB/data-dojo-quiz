# Lesson 8: Introduction to Multiplex Streaming, Delta Sinks, and Iceberg Reads

**Course:** Advanced Techniques with Apache Spark Declarative Pipelines  
**Type:** SCORM Interactive Lecture  
**Source URL:** `https://cdn5.dcbstatic.com/.../scormcontent/index.html`  
**Artifacts & Capturas:**
- `capturas/08_scorm_overview.png`
- `capturas/08_scorm_scroll_1.png`

---

## 1. Overview & Learning Objectives

This lecture introduces three advanced concepts used in Spark Declarative Pipelines:
1. **The Multiplex Pattern:** For efficiently ingesting mixed event streams.
2. **Delta Sinks:** For writing streaming data to external tables outside pipeline-managed scope.
3. **Iceberg Reads via Delta UniForm:** For enabling cross-platform access to Delta tables without data duplication.
4. **Chaining Concepts:** How these three concepts chain together into a single unified pipeline.

---

## 2. A. The Multiplex Pattern

The Multiplex pattern addresses a common production challenge: efficiently processing multiple event types that arrive through a single data transport mechanism.

### A1. The Problem: One Stream, Many Schemas
In production environments, multiple business systems often share a single data transport such as:
- One Kafka topic
- One cloud storage path
- One message queue

Each message carries a `type` field identifying which business domain it belongs to.

| Aspect | Without Multiplex | With Multiplex |
|---|---|---|
| **Pipeline Count** | $N$ event types $\to$ $N$ separate pipelines | $N$ event types $\to$ 1 ingestion pipeline |
| **Checkpoints & Scans** | $N$ separate checkpoints & source scans | 1 checkpoint, 1 source scan shared across all domains |
| **Source Evolution** | Source change must be applied $N$ times | Source change applied in one place |

### A2. Ingest Once, Fan Out by Type
The Multiplex pattern follows a simple but powerful 3-step approach:
1. **Single Ingestion:** Read all event types into one Bronze table (storing varying schemas in a `VARIANT` payload column).
2. **Type-Based Filtering:** Use the event `type` field to separate business domains.
3. **Fan-Out Processing:** Create domain-specific Silver/Gold tables downstream using `WHERE type = 'A'`, `WHERE type = 'B'`, etc.

**Key Architecture Benefits:**
- Single checkpoint management
- Shared source scanning
- Centralized error handling
- Simplified monitoring and operations

---

## 3. B. Sinks in Spark Declarative Pipelines

Sinks provide a mechanism to write streaming data from a Spark Declarative Pipeline to external Delta tables or external messaging systems that exist **outside** the pipeline's managed scope.

> **CRITICAL RULE:**  
> Only the **Python API** is supported for sinks (`from pyspark import pipelines as dp`). SQL is **not supported** for sinks. Only `@dp.append_flow` can write to a sink.

### B1. Supported Sink Types (4 Types)
1. **Delta Table Sink:**
   - Unity Catalog managed tables or External Delta tables.
   - Write by path or by table name (`tableName: "catalog.schema.table"`).
2. **Apache Kafka Sink:**
   - Writes back to Kafka topics for low-latency operational use cases and reverse ETL out of Databricks.
3. **Azure Event Hubs Sink:**
   - Uses Kafka interface format for real-time event streaming (e.g. fraud detection, recommendations).
4. **Python Custom Sink:**
   - Write to any data store using PySpark custom data sources for maximum flexibility.

### B2. Managed Tables vs. Sinks

| Feature | Managed Table (Default) | Sink |
|---|---|---|
| **Ownership** | Owned and managed by the pipeline lifecycle | Plain Delta table / external target outside pipeline scope |
| **Location** | Data stays within Unity Catalog managed storage | External systems, plain Delta tables, or message brokers |
| **Lineage** | Full pipeline lineage tracking | External boundary (Reverse ETL / operational downstream) |
| **Expectations** | Full support for data quality expectations & CDC | **No expectations — append only** |
| **Formats** | Streaming Tables and Materialized Views | Kafka, Event Hubs, Custom, or Delta with custom properties |

### B3. Delta Sink Implementation in Python

A Delta sink writes pipeline output to a Delta table outside the pipeline's managed lifecycle, unlocking configurations not possible on pipeline-managed streaming tables (such as Apache Iceberg UniForm compatibility).

#### Step 1: Register the Sink
```python
from pyspark import pipelines as dp

dp.create_sink(
    name="my_sink",
    format="delta",
    options={
        "tableName": "catalog.schema.table"
    }
)
```

#### Step 2: Write to the Sink using `@dp.append_flow`
```python
@dp.append_flow(
    name="my_sink_flow",
    target="my_sink"
)
def my_sink_flow():
    return spark.readStream.table("schema.source_table")
```

**Key Execution Details:**
- Checkpointing is handled automatically by `append_flow`.
- Only new records are written per run (append-only, no overwrites).
- Python only — no SQL equivalent exists.

---

## 4. C. Iceberg Reads via Delta UniForm

Delta UniForm enables cross-platform access to Delta tables by automatically generating Apache Iceberg metadata without duplicating the underlying data files.

### C1. The Cross-Platform Challenge
- **Traditional Approach (Copy & Convert):** Requires separate copies for Delta, Iceberg, Parquet, and Hive $\to$ massive storage costs, sync delays, and data drift.
- **Delta UniForm:** Maintains **one set of physical Parquet files** and generates dual metadata layers:
  - `_delta_log/` for Databricks clients.
  - `metadata/*.metadata.json` for Apache Iceberg clients (Snowflake, Trino, AWS Athena, OSS Spark).
  - Metadata generation occurs asynchronously after every Delta write commit.

### C2. The 4 Mandatory Properties to Enable Iceberg Reads on a Delta Sink Table

Before writing data, the external Delta table must be configured with 4 table properties:

1. **`'delta.enableDeletionVectors' = 'false'`**:
   - Disables deletion vectors. Iceberg v2 cannot represent Delta's soft-delete markers; disabling ensures all deletes are hard deletes.
2. **`'delta.columnMapping.mode' = 'name'`**:
   - Ensures column identifiers are mapped consistently between Delta and Iceberg schemas, preventing schema drift.
3. **`'delta.enableIcebergCompatV2' = 'true'`**:
   - Activates Delta write protocol compatibility with Apache Iceberg v2.
4. **`'delta.universalFormat.enabledFormats' = 'iceberg'`**:
   - Triggers asynchronous Iceberg metadata generation after every Delta commit.

> ⚠️ **CRITICAL EXAM TAKEAWAY:**  
> Pipeline-managed **streaming tables** and **materialized views** CANNOT have Iceberg UniForm enabled.  
> Only a **plain external Delta table** (such as one created and populated via a **Delta Sink**) supports UniForm! This makes the Delta Sink the mandatory architectural bridge for cross-platform Iceberg access from a Spark Declarative Pipeline.

---

## 5. D. Connecting the Concepts: The Complete Architecture

```
[ Mixed Event Stream ] 
          │ (Single Ingest, 1 checkpoint)
          ▼
[ Bronze Streaming Table ] (All event types with VARIANT payload)
          │ (Filter WHERE type = 'orders')
          ▼
[ Silver Streaming Table ] (Cleaned, enriched, validated domain data)
          │ (dp.create_sink + @dp.append_flow)
          ▼
[ External Delta Sink Table ] (Outside pipeline scope)
          │ (Configured with UniForm Iceberg properties)
          ▼
[ External Consumers ] (Snowflake, Trino, Athena via Iceberg REST Catalog)
```
