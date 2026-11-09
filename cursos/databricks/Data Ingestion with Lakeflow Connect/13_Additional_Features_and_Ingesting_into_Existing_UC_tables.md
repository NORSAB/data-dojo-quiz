# Lecture: Additional Features and Ingesting into Existing Delta Tables

**Course:** Data Ingestion with Lakeflow Connect  
**Lesson Type:** SCORM Interactive Presentation  
**Screenshot:** `capturas/13_Additional_Features_and_Ingesting_into_Existing_UC_tables_full.png`

---

## Overview
Databricks provides additional features such as **Lakehouse Federation**, **Zerobus**, **Delta Sharing**, and **Databricks Marketplace** to expand data integration, sharing, and collaboration capabilities in the Lakehouse.

This lecture also introduces how `MERGE INTO` streamlines ingestion into existing Delta tables by applying updates, inserts, and deletes from a source in a single atomic operation.

## Learning Objectives
By the end of this lecture, you will be able to:
- Describe additional Databricks features that extend data integration, sharing, and collaboration capabilities.
- Identify key Databricks Marketplace components and explore shared data assets.
- Explain the purpose of `MERGE INTO` for applying updates, inserts, and deletes to existing Delta tables.
- Describe `MERGE INTO` clauses including matched updates, matched deletes, and not matched inserts.
- Write a `MERGE INTO` statement to merge source data into a target Delta table.

---

## A. What's Next: Features Outside This Course

While this course focuses on LakeFlow Connect managed connectors, there are other ingestion and integration features in Databricks that may be useful as your architecture evolves:

### 1. Lakehouse Federation
- **Purpose:** Allows querying external data sources without moving or replicating data.
- **Key Use Cases:**
  - Ad hoc reporting and ad-hoc analysis across disparate systems.
  - Proof-of-concept (POC) work.
  - Exploratory phase of new ETL pipelines or reports before building ingestion pipelines.
  - Supporting production workloads during incremental cloud migrations.

### 2. Zerobus (Part of LakeFlow Connect)
- **Purpose:** A high-throughput LakeFlow Connect API that allows developers and systems to write event data directly into the Lakehouse at high throughput (100 MB/s) with near real-time latency (< 5 seconds).
- **Eliminates streaming architecture hops** (e.g., intermediate message queues).
- **Ideal For:** IoT telemetry, web clickstreams, real-time logging, and application metrics.

### 3. Delta Sharing
- **Purpose:** An open-source protocol for securely sharing live data across platforms, clouds, and regions without copying data.
- **Enterprise Benefit:** Eliminates data silos, vendors locks, and fragile SFTP/API data sharing pipelines.

---

## B. Databricks Marketplace

Databricks Marketplace is an open exchange for all your data, analytics, and AI assets, powered by the open-source **Delta Sharing** standard.

### Core Asset Categories Exchanged:
- **Datasets:** Curated industry benchmarks, geospatial, financial, and demographic data.
- **Notebooks:** Pre-built analysis workflows and domain best practices.
- **Dashboards:** Out-of-the-box Lakeview/AI/BI visualization templates.
- **ML Models:** Pre-trained machine learning and deep learning models.
- **Solution Accelerators:** Complete end-to-end industry solution blueprints.

---

## C. Delta Sharing with Databricks Marketplace: 3-Step Flow

1. **Step 1: Open the Marketplace**  
   In your Databricks Workspace, navigate to *Marketplace* from the left sidebar navigation.
2. **Step 2: Search for Assets**  
   Use the search bar and category filters to browse available data products. (A good starting point is exploring official assets provided directly by Databricks, such as `dbacademy_ecommerce`).
3. **Step 3: Get Instant Access**  
   Select the desired asset and click **Get instant access**. The shared catalog is mounted immediately in Unity Catalog, ready for SQL querying and pipeline integration without any file movement.

---

## D. Updates, Inserts, and Deletes on Delta Tables with `MERGE INTO`

The `MERGE INTO` SQL command allows you to apply updates, inserts, and deletes from a source table into an existing Delta table in a **single, atomic operation** (ACID compliance).

### Supported Operations:
- **Matched Rows:** Execute `UPDATE SET` or `DELETE`.
- **Unmatched Rows by Target:** Execute `INSERT (...) VALUES (...)`.
- **Unmatched Rows by Source:** Optionally `UPDATE` or `DELETE`.

### Typical Use Cases:
- Slowly Changing Dimensions (SCD Type 1 and Type 2).
- Change Data Capture (CDC) replication from relational databases.
- Upserting incremental event batches into existing bronze or silver Delta tables.

---

## E. `MERGE INTO` Step-by-Step SQL Architecture & Example

### Scenario Setup:
- **Target Table (`target_table`):**
  | id | users | email | status |
  | --- | --- | --- | --- |
  | 1 | peter | peter@email | current |
  | 2 | zebi | zebi@email | current |
  | 4 | matt | matt@email | current |

- **Source Table (`source_table`):**
  | id | users | email | status |
  | --- | --- | --- | --- |
  | 1 | peter | peter@email | delete |
  | 2 | zebi | zebi@email | update |
  | 3 | samarth | samarth@email | new |

### Complete SQL Statement:
```sql
MERGE INTO target_table target
USING source_table source
ON target.id = source.id
WHEN MATCHED AND source.status = 'update' THEN
  UPDATE SET
    target.email = source.email,
    target.status = source.status
WHEN MATCHED AND source.status = 'delete' THEN
  DELETE
WHEN NOT MATCHED THEN
  INSERT (id, first_name, email, sign_up_date, status)
  VALUES (source.id, source.first_name, source.email, source.sign_up_date, source.status);
```

### Breakdown of the 6 Execution Steps:
1. **Step 1: Declare Target and Source Table:**  
   `MERGE INTO target_table target USING source_table source` defines the destination Delta table (`target`) and incoming delta changes (`source`).
2. **Step 2: Specify the Merge Condition:**  
   `ON target.id = source.id` defines the unique join key.
3. **Step 3: WHEN MATCHED - UPDATE Clause:**  
   `WHEN MATCHED AND source.status = 'update' THEN UPDATE SET ...` updates matched records (Zebi's email updated).
4. **Step 4: WHEN MATCHED - DELETE Clause:**  
   `WHEN MATCHED AND source.status = 'delete' THEN DELETE` removes rows marked for deletion (Peter removed).
5. **Step 5: WHEN NOT MATCHED - INSERT Clause:**  
   `WHEN NOT MATCHED THEN INSERT (...) VALUES (...)` inserts brand-new incoming records (Samarth inserted).
6. **Step 6: Final Results (Fully Updated `target_table`):**  
   | id | users | email | status | Notes |
   | --- | --- | --- | --- | --- |
   | 2 | zebi | zebi@email | update | Updated via MATCHED UPDATE |
   | 4 | matt | matt@email | current | Untouched (not in source) |
   | 3 | samarth | samarth@email | new | Inserted via NOT MATCHED INSERT |

---

## F. Conclusion
- Databricks supports broader integration and collaboration through **Lakehouse Federation**, **Zerobus**, **Delta Sharing**, and **Databricks Marketplace**.
- **Databricks Marketplace** and **Delta Sharing** enable secure discovery, access, and exchange of data and AI assets without unnecessary data copying.
- **`MERGE INTO`** performs atomic updates, inserts, and deletes in Delta tables, supporting critical incremental ingestion patterns such as SCD, CDC, and continuous table synchronization.
