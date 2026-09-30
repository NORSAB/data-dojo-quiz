# 15. Quiz: Data Ingestion with Lakeflow Connect

- **Course:** Data Ingestion with Lakeflow Connect
- **Provider:** Databricks Academy
- **Questions:** 20
- **Passing Score:** 80% (Achieved: 95% - 19/20 correct)
- **Status:** Completed & Passed

---

### Question 1 of 20
You need to ingest CSV files that have the following characteristics:
- Files are semicolon (`;`) delimited instead of comma delimited
- Files contain headers in the first row
- Files may contain malformed data that should be captured for later analysis
- You want to enforce a specific schema: `order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)`

Which `read_files()` configuration correctly handles all these requirements?

- [x] **A)**
  ```sql
  SELECT * FROM read_files(
    "/path/to/files",
    format => "csv",
    sep => ";",
    header => true,
    schema => "order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)",
    rescuedDataColumn => "_rescued_data"
  );
  ```
- [ ] **B)**
  ```sql
  SELECT * FROM read_files(
    "/path/to/files",
    format => "csv",
    sep => ";",
    header => true,
    schema => "order_id:BIGINT, customer_email:STRING, order_total:DECIMAL(10,2)",
    rescuedDataColumn => "_rescued_data"
  );
  ```
- [ ] **C)**
  ```sql
  SELECT * FROM read_files(
    "/path/to/files",
    format => "csv",
    separator => ";",
    headers => true,
    enforceSchema => "order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)",
    rescueColumn => "_rescued_data"
  );
  ```
- [ ] **D)**
  ```sql
  SELECT * FROM read_files(
    "/path/to/files",
    format => "csv",
    delimiter => ";",
    header => true,
    schema => "order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)"
  );
  ```
**Correct Answer:** A

---

### Question 2 of 20
Which layer typically stores cleaned and filtered data ready for downstream consumption?
- [x] **A) Silver**
- [ ] **B) Bronze**
- [ ] **C) Data Lake**
- [ ] **D) Gold**

**Correct Answer:** A (Silver)

---

### Question 3 of 20
You ingest a dataset into Databricks where one column contains JSON formatted data stored as a string. You want flexibility to query nested fields, support schema evolution, and maintain good query performance as usage grows. What is the best approach?
- [ ] **A)** Leave the column as a plain STRING and parse JSON manually in each query
- [ ] **B)** Convert the column to a fixed STRUCT with all expected fields defined upfront
- [x] **C) Store the column using the VARIANT data type and query nested fields as needed**
- [ ] **D)** Split the JSON into multiple STRING columns during ingestion

**Correct Answer:** C

---

### Question 4 of 20
What is the recommended alternative to the legacy COPY INTO SQL command for incremental ingestion (Auto Loader) from cloud object storage?
- [ ] **A)** Lakeflow Jobs
- [ ] **B)** MERGE INTO statements
- [x] **C) CREATE STREAMING TABLE SQL**
- [ ] **D)** CREATE TABLE AS (CTAS)

**Correct Answer:** C (CREATE STREAMING TABLE SQL)

---

### Question 5 of 20
How is Partner Connect commonly used when ingesting data into Databricks?
- [ ] **A)** To write custom Spark code for every external data source
- [x] **B) To configure and launch partner ingestion tools that load data from external systems into Databricks**
- [ ] **C)** To replace built in Databricks ingestion features like Auto Loader
- [ ] **D)** To manually upload files from a local machine into Unity Catalog volumes

**Correct Answer:** B

---

### Question 6 of 20
What type of table does the CREATE TABLE AS (CTAS) statement create by default?
- [ ] **A)** Hive table
- [ ] **B)** Parquet table
- [x] **C) Delta table**
- [ ] **D)** CSV table

**Correct Answer:** C (Delta table)

---

### Question 7 of 20
What is the recommended destination for synchronizing ingested data pipelines in Databricks?
- [x] **A) Unity Catalog (catalog and schema)**
- [ ] **B)** DBFS
- [ ] **C)** Local disk
- [ ] **D)** External cloud storage

**Correct Answer:** A (Unity Catalog (catalog and schema))

---

### Question 8 of 20
What is the primary focus of the data stored in the Gold layer?
- [ ] **A)** Source system duplicates
- [x] **B) Business level aggregations**
- [ ] **C)** Incremental updates
- [ ] **D)** Unstructured raw files

**Correct Answer:** B (Business level aggregations)

---

### Question 9 of 20
Which of the following is a key benefit of using Lakeflow Connect for data ingestion in Databricks?
- [ ] **A)** It requires manual schema mapping for every table
- [ ] **B)** It only supports streaming data
- [ ] **C)** It does not support cloud object storage
- [x] **D) It provides scalable and simplified ingestion from various data sources**

**Correct Answer:** D

---

### Question 10 of 20
Lakeflow Connect Managed Connectors are defined as being fully managed by whom?
- [ ] **A)** Partner Connect
- [ ] **B)** Data Source Owner
- [ ] **C)** Cloud Provider
- [x] **D) Databricks**

**Correct Answer:** D (Databricks)

---

### Question 11 of 20
For incremental batch ingestion, COPY INTO achieves efficiency by automatically performing what action?
- [x] **A) Skipping previously loaded files**
- [ ] **B)** Compacting small files
- [ ] **C)** Deleting source files
- [ ] **D)** Merging schemas manually

**Correct Answer:** A (Skipping previously loaded files)

---

### Question 12 of 20
Which ingestion method re-processes all records every time the pipeline runs?
- [ ] **A)** Streaming
- [ ] **B)** Declarative
- [x] **C) Batch**
- [ ] **D)** Incremental Batch

**Correct Answer:** C (Batch)

---

### Question 13 of 20
You are designing an ingestion pipeline using Lakeflow Connect in Databricks.
- Some of your data already exists as files in cloud object storage that Databricks can directly access.
- Other data lives in an external system, such as a transactional database or SaaS application, and has not yet been landed in cloud storage.

Which choice correctly matches each scenario to the connector type you should use?
- [ ] **A)** Use standard connectors for both data in cloud storage and external systems
- [x] **B) Use standard connectors for data already in cloud storage, and managed connectors for data in external systems**
- [ ] **C)** Use managed connectors for both data in cloud storage and external systems
- [ ] **D)** Use managed connectors for data already in cloud storage, and standard connectors for data in external systems

**Correct Answer:** B

---

### Question 14 of 20
CREATE TABLE AS (CTAS) is summarized as being best suited for what kind of ingestion task?
- [ ] **A)** Scaling to millions of files
- [ ] **B)** Complex Change Data Capture
- [x] **C) One-time, ad hoc ingestion**
- [ ] **D)** Near real-time ingestion

**Correct Answer:** C (One-time, ad hoc ingestion)

---

### Question 15 of 20
What is the purpose of the rescued data column when ingesting data into Databricks?
- [x] **A) To handle records that don’t match the schema of the target table**
- [ ] **B)** To store duplicate records
- [ ] **C)** To log ingestion errors
- [ ] **D)** To store metadata about ingestion jobs

**Correct Answer:** A

---

### Question 16 of 20
You are using MERGE INTO in Databricks SQL to upsert data from a source table into a Delta target table. The source table may occasionally include new columns that do not yet exist in the target table. You want the merge operation to handle these changes automatically.
Which statement best accomplishes this?

- [x] **A)**
  ```sql
  MERGE WITH SCHEMA EVOLUTION INTO target t
  USING source s
  ON t.id = s.id
  WHEN MATCHED THEN UPDATE SET *
  WHEN NOT MATCHED THEN INSERT *;
  ```
- [ ] **B)**
  ```sql
  MERGE INTO target t
  USING source s
  ON t.id = s.id
  WHEN MATCHED THEN UPDATE SET t.col1 = s.col1;
  ```
- [ ] **C)**
  ```sql
  MERGE INTO target t
  USING source s
  ON t.id = s.id
  WHEN MATCHED THEN UPDATE SET *
  WHEN NOT MATCHED THEN INSERT *;
  ```
- [ ] **D)**
  ```sql
  ALTER TABLE target ADD COLUMNS (...);

  MERGE INTO target t
  USING source s
  ON t.id = s.id
  WHEN MATCHED THEN UPDATE SET *
  WHEN NOT MATCHED THEN INSERT *;
  ```
**Correct Answer:** A (`MERGE WITH SCHEMA EVOLUTION INTO ...`)

---

### Question 17 of 20
In the Medallion Architecture, the Bronze layer is specifically intended for what?
- [ ] **A)** Cleaned and filtered data
- [ ] **B)** BI report generation
- [ ] **C)** Business aggregation
- [x] **D) Raw data ingestion**

**Correct Answer:** D (Raw data ingestion)

---

### Question 18 of 20
Auto Loader automatically supports which capability as new columns appear in the data?
- [ ] **A)** Data lineage tracking
- [ ] **B)** Table compression
- [ ] **C)** Time travel
- [x] **D) Schema evolution**

**Correct Answer:** D (Schema evolution)

---

### Question 19 of 20
When ingesting data into a Bronze table using the `_metadata` column, which of the following metadata information can be extracted from input files?
- [ ] **A)** File size and file permissions only
- [ ] **B)** Only the file creation timestamp
- [ ] **C)** File content and data schema information
- [x] **D) File name, file modification time, and file path**

**Correct Answer:** D

---

### Question 20 of 20
What is the purpose of the Ingestion Gateway component in the Database ingestion flow?
- [ ] **A)** Storing final Streaming Tables
- [ ] **B)** Running BI reports
- [x] **C) Connecting to the source database**
- [ ] **D)** Managing user permissions

**Correct Answer:** C (Connecting to the source database)
