# Databricks Exam Guide: Databricks Certified Data Engineer Associate

**Official Version:** May 4, 2026  
**Document:** `databricks-certified-data-engineer-associate-exam-guide-may-2026-000.pdf`  
**PDF Copy in Repository:** `D:\2026\Simulador de Preguntas\Exam Information - Databricks Certified Associate Data Engineer\databricks-certified-data-engineer-associate-exam-guide-may-2026.pdf`

---

## Purpose of this Exam Guide

The purpose of this exam guide is to give you an overview of the exam and what is covered on the exam to help you determine your exam readiness. This document will be updated whenever there are changes to an exam (and when those changes take effect), so you can be prepared. This covers the exam version as of **May 4, 2026**.

---

## Audience Description

The Databricks Certified Data Engineer Associate certification exam assesses an individual’s ability to utilise the Databricks Data Intelligence Platform to execute foundational data engineering tasks. The exam assesses the test takers’ knowledge on the Data Intelligence Platform, its workspace, architecture, and capabilities, the tasks related to Data Ingestion, Data Loading, Data Transformation and Modelling—such as the ability to perform Extract, Transform, Load (ETL) tasks using PySpark, working with Lakeflow Jobs, and CI/CD. Finally, the exam assesses the test takers’ understanding of troubleshooting, monitoring, and optimization techniques, as well as their knowledge of achieving Governance and Security within the Databricks Platform.

---

## About the Exam

- **Number of scored items:** 45 scored multiple-choice questions.
- **Time limit:** 90 minutes.
- **Registration fee:** USD 200, plus applicable taxes as required per local law.
- **Delivery method:** Online or test center.
- **Test aides:** none allowed.
- **Prerequisite:** None required; course attendance and six months of hands-on experience in Databricks are highly recommended.
- **Validity:** 2 years.
- **Recertification:** Required every 2 years to maintain your certification. To recertify, you must take the current live exam. Please review the “Getting Ready for the Exam” section on the exam webpage to prepare for taking the exam again.
- **Unscored Content:** Exams may include unscored items to gather statistical information for future use. These items are not identified on the form and do not impact your score. Additional time is factored into account for this content.

---

## Recommended Training

- **Instructor-led:** Data Engineering with Databricks
- **Self-paced (available in Databricks Academy):**
  - Data Ingestion with Lakeflow Connect
  - Deploy Workloads with Lakeflow Jobs
  - DevOps Essentials for Data Engineering
  - Data Interoperability with Unity Catalog
  - Build Data Pipelines with Lakeflow Spark Declarative pipeline
  - Get Started with Data Governance on Databricks

---

## Detailed Exam Outline & Subdomains

### Section 1: Databricks Intelligence Platform (6%)
- Understand the core components of the Databricks Data Intelligence Platform, such as its architecture, Delta Lake, and Unity Catalog.
- Understand Databricks Data Intelligence Platform’s compute services, including their characteristics, limitations, and cost models, and select the most suitable option for each workload use case.

### Section 2: Data Ingestion and Loading (21%)
- Enable and detail data ingestion patterns, including batch, streaming, and incremental loading, and import data from sources such as local files, Lakeflow Connect standard connectors, and Lakeflow Connect managed connectors.
- Use the `COPY INTO` command to incrementally load files from cloud object storage (ADLS/S3/GCS) into Unity Catalog–governed tables.
- Use Auto Loader with schema enforcement and schema evolution in batch modes (for example, directory listing or file notification) to land data into Unity Catalog–governed tables.
- Configure Lakeflow Connect to reliably ingest data from diverse enterprise sources into Unity Catalog–governed tables.
- Use JDBC/ODBC or REST clients in notebooks to land data into cloud storage or directly into Unity Catalog–governed tables, usually orchestrated and scheduled with Lakeflow Jobs.
- Prioritize between Auto Loader, Lakeflow Connect (standard and managed connectors), partner connectors, and other ingestion methods based on technical requirements such as data volume, ingestion frequency, data types, and governance needs with Unity Catalog.
- Ingest semi-structured and unstructured data (for example, JSON and nested data) via Lakeflow Connect and other managed connectors into Unity Catalog–governed Delta tables.

### Section 3: Data Transformation and Modeling (22%)
- Implement data cleaning by reading bronze tables with PySpark/SQL, cleaning nulls, standardizing data types, and writing to new silver tables.
- Combine DataFrames with operations such as Inner join, left join, broadcast join, multiple keys, cross join, union, and union all.
- Manipulate columns, rows, and table structures by adding, dropping, splitting, renaming column names, applying filters, and exploding arrays.
- Perform data deduplication operations and aggregate operations on DataFrames, such as count, approximate count distinct, and mean, summary.
- Understand the basic tuning parameters (`spark.sql.shuffle.partitions`, `spark.default.parallelism`, `spark.executor/driver.memory`, `spark.sql.autoBroadcastJoinThreshold`) and re-measure the performance.
- Understand the difference between, and how to build, Gold layer objects such as materialized views, views, streaming tables, and tables for BI and analytics teams in Unity Catalog.
- Apply data quality checks and validation rules to ensure reliable Silver and Gold datasets.

### Section 4: Working with Lakeflow Jobs (16%)
- Implement control flows (retries and conditional tasks such as branching and looping) using Lakeflow Jobs for pipeline orchestration.
- Configure common tasks (notebook, SQL query, dashboard, and pipeline tasks) and their dependencies using Lakeflow Jobs and its DAG-based task graph.
- Implement job schedules using Lakeflow Jobs with an understanding of trigger types (scheduled, file arrival, and table update).
- Choose between time-based and data-driven triggers based on data availability and pipeline dependencies.

### Section 5: Implementing CI/CD (10%)
- Manage your code development workflow within the Databricks workspace UI, including creating and switching between branches in Databricks Git Folders (formerly Databricks Repos), committing and pushing changes, and creating pull requests using Databricks Git integration.
- Understand environment-specific configuration using Automation Bundle (formerly Databricks Asset Bundles) variables and overrides while promoting the same codebase across dev, test, and prod targets.
- Deploy Declarative Automation Bundles (formerly Databricks Asset Bundles) to package, configure, and promote Lakeflow Jobs, Lakeflow Spark Declarative Pipelines, and other workspace assets across dev, test, and prod environments.
- Understand the Databricks CLI to validate, deploy, and manage Declarative Automation Bundles (formerly Databricks Asset Bundles) and other workspace assets in automated CI/CD workflows.

### Section 6: Troubleshooting, Monitoring, and Optimization (10%)
- Identify trends in job performance using the Lakeflow Jobs run history view to compare current execution times against historical baselines.
- Use the Lakeflow Jobs UI to monitor pipeline health by interpreting job statuses, viewing DAG-based task graphs to spot upstream blockers, and tracking pipeline run times and failure rates.
- Identify common performance bottlenecks such as data skew, shuffling, and disk spilling by interpreting stage-level metrics in the Spark UI.
- Understand the features of Liquid Clustering and predictive optimization.
- Diagnose cluster startup failures, library conflicts, and out-of-memory issues.

### Section 7: Governance and Security (15%)
- Differentiate between managed and external tables in Unity Catalog and perform basic operations (create, modify, delete, and convert between managed and external tables) on them.
- Configure access controls using the UI and SQL by applying `GRANT`, `REVOKE`, and `DENY` privileges to principals (users, groups, and service principals) at appropriate levels of the security hierarchy.
- Understand column-level masking and row-level security to restrict data visibility based on user groups.
- Understand Unity Catalog ABAC policies to centrally control row-level filtering and column masking for sensitive data.
