# Databricks Certified Data Engineer Professional — Official Exam Guide (October 2026)

> **Source:** Official Databricks Certification Exam Guide (October 2026 Edition)  
> **Document:** `databricks-certified-data-engineer-professional-exam-guide-oct-2026.pdf`

---

## 1. Exam Version Cutover Details

- **Cutover Date:** **October 9, 2026**
- **Exams Scheduled On or Before October 8, 2026:** Assessed against the **Current Exam** outline (10 sections, 59 scored questions).
- **Exams Scheduled On or After October 9, 2026:** Assessed against the **New Exam** outline (9 sections, 60 scored questions).

---

## 2. New Exam Outline (Starting October 9, 2026)

### Section 1: Developing Code for Data Processing using Python and SQL (23%)
- Implement scalable Python project structures for Declarative Automation Bundles (formerly Databricks Asset Bundles / DABs) to support modular development and CI/CD integration.
- Apply troubleshooting techniques to dependency conflicts and installation failures for external libraries (PyPI, local wheels, source archives) across serverless, pipeline, and bundle-deployed environments.
- Develop User-Defined Functions (UDFs) using Pandas, Python, and SQL, including Unity Catalog functions for the given constraints.
- Create production-ready data pipelines for streaming data using Lakeflow Declarative Pipelines and Auto Loader.
- Create and automate ETL workloads using Lakeflow Jobs via the UI, API, and CLI.
- Choose between a streaming table and a materialized view for a given latency, cost, and refresh requirement.
- Implement CDC pipelines using AUTO CDC APIs (formerly APPLY CHANGES) in Lakeflow Declarative Pipelines, including SCD Type 1 and Type 2 via `stored_as_scd_type`.
- Choose between Spark Structured Streaming and Apache Spark™ Declarative Pipelines for scalable ETL given operational constraints.
- Create Lakeflow Jobs that use control-flow operators such as If/Else conditions and For Each loops.
- Choose appropriate compute and configuration for environments and dependencies — including serverless compute (serverless environments, dependency management, performance mode), high-memory notebook tasks, and auto-optimization settings (e.g., disallowing retries).
- Develop unit and integration tests using `assertDataFrameEqual`, `assertSchemaEqual`, `DataFrame.transform`, and testing frameworks to ensure code correctness.
- Apply Structured Streaming stateful-processing semantics, including watermarks, output modes, `foreachBatch`, and checkpoints for fault-tolerant exactly-once state recovery.

### Section 2: Data Ingestion & Acquisition (12%)
- Develop data ingestion pipelines to ingest a variety of data formats, including Delta Lake, Parquet, JSON, Iceberg, CSV, and Binary from diverse sources such as message buses (Kafka, Kinesis, Pub/Sub) and cloud storage.
- Configure incremental CDC pipelines using Lakeflow Pipelines with Delta or Iceberg as the target table format.
- Configure CDC ingestion pipelines from relational database sources, including SQL Server, MySQL, and PostgreSQL, using Lakeflow Connect.
- Implement OpenSharing (D2D and Databricks-to-Open) and Clean Rooms for privacy-preserving collaboration.
- Configure Lakehouse Federation with governance across supported source systems, applying UC permissions and connection-level credentials.

### Section 3: Data Manipulation (12%)
- Apply advanced data transformations, including window functions, joins, and aggregations, using Spark SQL and PySpark to process large datasets.
- Develop a model and query semi-structured data using the `VARIANT` data type and related functions (e.g., `parse_json`, `variant_get`).
- Apply AI functions, including `ai_query`, to perform model inference within data pipelines for enrichment and classification tasks.
- Implement data quality expectations in Lakeflow Declarative Pipelines to quarantine, drop, or fail on bad records.

### Section 4: Monitoring and Alerting (10%)
- Use Databricks system tables (`billing`, `compute`, `access`, `lakeflow`) for cost analysis, auditing, and workload monitoring.
- Use Databricks REST APIs / CLI and SDK for monitoring and analyzing jobs and pipelines.
- Use Apache Spark Declarative Pipelines event logs to monitor pipeline health and data quality.
- Use Databricks Lakehouse alerts to monitor governed business metrics, data quality and anomaly signals, usage and cost, SQL warehouse/query health, audit and security events, AI agent quality, and Lakeflow Job branching.
- Use Lakeflow Jobs UI and Jobs API to monitor job status and performance metrics.

### Section 5: Cost & Performance Optimization (15%)
- Explain how Unity Catalog managed tables, Predictive Optimization, and Liquid Clustering reduce operational and maintenance overhead for a given workload.
- Choose the appropriate Delta optimization technique (deletion vectors, Liquid Clustering, `CLUSTER BY AUTO`) for a given table access pattern.
- Understand how caching (Delta cache) improves query performance for repeated reads of the same data.
- Apply Change Data Feed (CDF) to expose row-level changes (updates/deletes) for efficient incremental downstream processing.
- Use the query profile to identify performance bottlenecks, such as data-skipping inefficiencies, join strategies, and shuffle operations.
- Compare Liquid Clustering vs partitioning/ZORDER for a given table size and query pattern.

### Section 6: Ensuring Data Security and Compliance (8%)
- Apply least-privilege access control lists (ACLs) to secure Unity Catalog securable objects and workspace resources.
- Apply attribute-based access control (ABAC) policies with governed tags to enforce row filters and column masks at scale.
- Apply anonymization and pseudonymization methods — such as hashing, tokenization, suppression, and generalization — to confidential data (e.g., using column masks and related Unity Catalog features).
- Implement a compliant data pipeline that enforces PII detection and masking controls across batch and streaming workloads using Unity Catalog features.
- Implement a data purging strategy that satisfies data retention and deletion policies (e.g., GDPR right-to-erasure, GDPR right-to-be-forgotten deletion) using Delta Lake and Unity Catalog features.

### Section 7: Data Governance (5%)
- Demonstrate understanding of Unity Catalog tags and comments as mechanisms for adding metadata to securable objects to improve data discoverability.
- Demonstrate understanding of the Unity Catalog permission inheritance model as a mechanism for managing access control across catalogs, schemas, and objects.

### Section 8: Debugging and Deploying (10%)
- Identify pertinent diagnostic information using Spark UI, cluster logs, system tables, and query profiles to troubleshoot errors.
- Analyze the errors and remediate the failed job runs with job repairs and parameter overrides.
- Use event logs and the Spark UI to debug pipelines and Spark workloads.
- Deploy Databricks resources using Declarative Automation Bundles (formerly Databricks Asset Bundles).
- Configure Git-based CI/CD workflows using Databricks Git folders (formerly Repos) to deploy notebooks and code.

### Section 9: Data Modeling (5%)
- Design scalable Delta/Iceberg table layouts for large data assets by mapping partitioning to data grain, aligning clustering to relationship access patterns, and maintaining balanced file sizes through compaction.
- Design dimensional models for analytical workloads, leveraging Materialized Views for pre-computed aggregation and Unity Catalog Metric Views for governed, reusable metric definitions, to ensure efficient querying and aggregation.

---

## 3. Current Exam Outline (Available through October 8, 2026)

### Section 1: Developing Code for Data Processing using Python & SQL (22%)
- **Using Python and Tools for development:**
  - Design and implement a scalable Python project structure optimized for Declarative Automation Bundles (formerly Databricks Asset Bundles / DABs), enabling modular development, deployment automation, and CI/CD integration.
  - Manage and troubleshoot external third-party library installations and dependencies in Databricks, including PyPI packages, local wheels, and source archives.
  - Develop User-Defined Functions (UDFs) using Pandas/Python UDF.
- **Building and Testing an ETL pipeline with Lakeflow Declarative Pipelines, SQL, and Apache Spark on the Databricks Platform:**
  - Build and manage reliable, production-ready data pipelines for batch and streaming data using Lakeflow Declarative Pipelines and Auto Loader.
  - Create and automate ETL workloads using Jobs via UI/APIs/CLI.
  - Explain the advantages and disadvantages of streaming tables compared to materialized views.
  - Use AUTO CDC APIs (formerly APPLY CHANGES) to simplify CDC in Lakeflow Declarative Pipelines.
  - Compare Spark Structured Streaming and Lakeflow Declarative Pipelines to determine the optimal approach for building scalable ETL pipelines.
  - Create a pipeline component that uses control flow operators (e.g., if/else, for/each, etc.).
  - Choose the appropriate configs for environments and dependencies, high memory for notebook tasks, and auto-optimization to disallow retries.
  - Develop unit and integration tests using `assertDataFrameEqual`, `assertSchemaEqual`, `DataFrame.transform`, and testing frameworks, to ensure code correctness, including a built-in debugger.

### Section 2: Data Ingestion & Acquisition (7%)
- Design and implement data ingestion pipelines to efficiently ingest a variety of data formats including Delta Lake, Parquet, ORC, AVRO, JSON, CSV, XML, Text and Binary from diverse sources such as message buses and cloud storage.
- Create an append-only data pipeline capable of handling both batch and streaming data using Delta.

### Section 3: Data Transformation, Cleansing, and Quality (10%)
- Write efficient Spark SQL and PySpark code to apply advanced data transformations, including window functions, joins, and aggregations, to manipulate and analyze large Datasets.
- Develop a quarantining process for bad data with Lakeflow Declarative Pipelines, or autoloader in classic jobs.

### Section 4: Data Sharing and Federation (10%)
- Demonstrate delta sharing securely between Databricks deployments using Databricks to Databricks Sharing (D2D) or to external platforms using the open sharing protocol (D2O).
- Configure Lakehouse Federation with proper governance across the supported source Systems.
- Use Delta Share to share live data from Lakehouse to any computing platform.

### Section 5: Monitoring and Alerting (10%)
- **Monitoring:**
  - Use system tables for observability over resource utilization, cost, auditing and workload monitoring.
  - Use Query Profiler UI and Spark UI to monitor workloads.
  - Use the Databricks REST APIs/Databricks CLI for monitoring jobs and pipelines.
  - Use Lakeflow Declarative Pipelines Event Logs to monitor pipelines.
- **Alerting:**
  - Use SQL Alerts to monitor data quality.
  - Use the Lakeflow Jobs UI and Jobs API to set up notifications for job status and performance issues.

### Section 6: Cost & Performance Optimization (13%)
- Understand how / why using Unity Catalog managed tables reduces operational and maintenance burden.
- Understand delta optimization techniques, such as deletion vectors and liquid clustering.
- Understand the optimization techniques used by Databricks to ensure the performance of queries on large datasets (data skipping, file pruning, etc.).
- Apply Change Data Feed (CDF) to address specific limitations of streaming tables and enhance latency.
- Use the query profile to analyze the query and identify bottlenecks, such as bad data skipping, inefficient types of joins, and data shuffling.

### Section 7: Ensuring Data Security and Compliance (10%)
- **Applying Data Security mechanisms:**
  - Use ACLs to secure Workspace Objects, enforcing the principle of least privilege, including policy enforcement.
  - Use row filters and column masks to filter and mask sensitive table data.
  - Apply anonymization and pseudonymization methods, such as Hashing, Tokenization, Suppression, and generalization, to confidential data.
- **Ensuring Compliance:**
  - Implement a compliant batch & streaming pipeline that detects and masks PII to ensure data privacy.
  - Develop a data-purging solution that ensures compliance with data retention policies.

### Section 8: Data Governance (7%)
- Create and add descriptions/metadata about enterprise data to make it more discoverable.
- Demonstrate understanding of Unity Catalog permission inheritance model.

### Section 9: Debugging and Deploying (10%)
- **Debugging and Troubleshooting:**
  - Identify pertinent diagnostic information using Spark UI, cluster logs, system tables, and query profiles to troubleshoot errors.
  - Analyze the errors and remediate failed job runs using job repairs and parameter overrides.
  - Use Lakeflow Declarative Pipelines event logs and the Spark UI to debug Lakeflow Declarative Pipelines and Spark pipelines.
- **Deploying CI/CD:**
  - Build and deploy Databricks resources using Declarative Automation Bundles (formerly Databricks Asset Bundles).
  - Configure and integrate with Git-based CI/CD workflows, Databricks Git folders (formerly Repos) for notebook and code deployment.

### Section 10: Data Modeling (7%)
- Design and implement scalable data models using Delta Lake to manage large datasets.
- Simplify data layout decisions and optimize query performance using Liquid Clustering.
- Identify the benefits of using Liquid Clustering over Partitioning and Z-Order.
- Design Dimensional Models for analytical workloads to ensure efficient querying and aggregation.
