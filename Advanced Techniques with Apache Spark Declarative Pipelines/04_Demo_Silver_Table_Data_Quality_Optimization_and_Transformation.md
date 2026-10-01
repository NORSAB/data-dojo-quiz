# Lesson 4: Demo : Silver Table Data Quality, Optimization and Transformation

**Course:** Advanced Techniques with Apache Spark Declarative Pipelines  
**Type:** Video Demonstration (~7.5 mins)  
**Artifacts & Capturas:**
- `capturas/04_silver_definition_create.png`
- `capturas/04_silver_definition_top.png`
- `capturas/04_silver_definition_select.png`
- `capturas/04_silver_definition_bottom.png`
- `capturas/04_silver_execution_results.png`

---

## 1. Objectives & Silver Layer Role

The Silver layer cleans, enriches, filters, standardizes, and optimizes raw Bronze events:
1. **Schema Standardization:** Prevent schema evolution anomalies across multiple subsidiaries by declaring a strict schema.
2. **Safe Casting (`TRY_CAST`):** Safeguard string inputs against parsing errors that would otherwise break the pipeline.
3. **Data Quality Constraints & Expectations:** Enforce validation rules with explicit violation behaviors (`ON VIOLATION DROP ROW`, `ON VIOLATION FAIL UPDATE`).
4. **Liquid Clustering (`CLUSTER BY AUTO`):** Automatically cluster table data to optimize queries across dynamic filter patterns without manual partition maintenance.

---

## 2. Complete SQL Implementation (`silver_transformation.sql`)

```sql
CREATE OR REFRESH STREAMING TABLE ${catalog}.multi_flow_2_silver.orders_silver_flows_demo (
  -- A: Define a fixed schema to prevent unexpected schema evolution.
  subsidiary_id    STRING,
  order_id         STRING,
  order_timestamp  TIMESTAMP,
  order_date       DATE,
  customer_id      STRING,
  region           STRING,
  country          STRING,
  city             STRING,
  channel          STRING,
  sku              STRING,
  category         STRING,
  qty              INT,
  unit_price       DOUBLE,
  discount_pct     DOUBLE,
  total_amount     DOUBLE,
  coupon_code      STRING,

  -- B: Data quality constraints to drop or flag or fail invalid rows.
  CONSTRAINT qty_valid          EXPECT (qty >= 0) ON VIOLATION DROP ROW,
  CONSTRAINT total_amount_valid  EXPECT (total_amount >= 0) ON VIOLATION DROP ROW,
  CONSTRAINT timestamp_not_null  EXPECT (order_timestamp IS NOT NULL) ON VIOLATION FAIL UPDATE
)
-- C: Adds a descriptive table comment
COMMENT 'Clean and standardize data from the multiple-flow bronze table'

-- D: Enable liquid clustering to improve performance on common filters.
CLUSTER BY AUTO

AS
-- E: Select and clean data from the Bronze table. Uses TRY_CAST to enforce consistent types across all subsidiaries.
SELECT
  subsidiary_id,
  order_id,
  TRY_CAST(order_timestamp AS TIMESTAMP) AS order_timestamp,
  TRY_CAST(order_date AS DATE)           AS order_date,
  customer_id,
  region,
  country,
  city,
  channel,
  sku,
  category,
  TRY_CAST(qty AS INT)                   AS qty,
  TRY_CAST(unit_price AS DOUBLE)         AS unit_price,
  TRY_CAST(discount_pct AS DOUBLE)       AS discount_pct,
  TRY_CAST(total_amount AS DOUBLE)       AS total_amount,
  coupon_code
-- F: Incrementally reads data from the bronze table that contains data from three volumes
FROM STREAM ${catalog}.multi_flow_1_bronze.orders_bronze_flows_demo;
```

---

## 3. Deep Dive: Key Technical Features

### A. Liquid Clustering with `CLUSTER BY AUTO`
- Unlike traditional Hive-style partitioning (which suffers from over-partitioning, small file problems, and rigid partition keys), **Liquid Clustering** dynamically reorganizes data layout as files are written.
- `CLUSTER BY AUTO` delegates cluster key selection to Databricks Predictive Optimization, adjusting file layouts based on query access patterns.
- Verified in `DESCRIBE TABLE EXTENDED`:
  ```
  Table Properties: [clusterByAuto=true, clusteringColumns=[], delta.enableChangeDataFeed=true, ...]
  Predictive Optimization: ENABLE
  ```

### B. Expectation Constraint Actions
- **`ON VIOLATION DROP ROW`**: Discard records that fail the check (e.g., negative quantities or negative order totals) while writing a metric to pipeline event logs.
- **`ON VIOLATION FAIL UPDATE`**: Halts the entire pipeline immediately if critical data integrity is breached (e.g. missing `order_timestamp`).

### C. Safe Type Ingestion (`TRY_CAST`)
- Subsidiary feeds may contain corrupt or malformed string literals. Using `TRY_CAST(col AS <TYPE>)` converts unparseable strings to `NULL`, which are then cleanly trapped by expectations rather than throwing fatal runtime JVM exceptions.
