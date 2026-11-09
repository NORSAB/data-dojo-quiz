# Official Sample Questions — Databricks Certified Data Engineer Associate

> **Source:** Official Exam Guide (May 4, 2026), Pages 4–6.  
> These questions were retired from a previous live version of the exam to illustrate the style, depth, and alignment with the official objectives.

---

### Question 1
**Objective:** Identify common performance bottlenecks such as data skew, shuffling, and disk spilling by interpreting stage-level metrics in the Spark UI.  
**Domain:** Section 6: Troubleshooting, Monitoring, and Optimization (10%)

A data engineer notices a batch job’s duration has doubled after a new data source was onboarded. In the Spark UI, the longest stage shows that most tasks finish in under 30 seconds, but one task takes over 10 minutes. The stage’s task summary shows Min/Median shuffle read near 400 MB while Max shuffle read exceeds 5 GB.

Which solution reduces the job runtime?

- **A.** Increase cluster size to add more executors so the slow task finishes faster
- **B.** Confirm adaptive query execution with skew join handling is active to automatically split the oversized partition at runtime
- **C.** Reduce `spark.sql.shuffle.partitions` to coalesce more work into fewer tasks
- **D.** Manually repartition the dataset using a salt key before the join to distribute skewed keys evenly

**Correct Answer:** **B**  
**Explanation:**  
The symptoms described (most tasks completing in < 30 seconds, but a single task taking > 10 minutes with a Max shuffle read exceeding 5 GB vs. 400 MB median) indicate severe **data skew**. In modern Databricks runtimes, **Adaptive Query Execution (AQE)** includes automatic **skew join handling** (`spark.sql.adaptive.skewJoin.enabled = true`), which splits skewed partitions into smaller sub-partitions and processes them in parallel without requiring code changes or manual salting.

---

### Question 2
**Objective:** Understand Databricks Data Intelligence Platform’s compute services, including their characteristics, limitations, and cost models, and select the most suitable option for each workload use case.  
**Domain:** Section 1: Databricks Intelligence Platform (6%)

A data engineer requires rapid iteration on pipelines while maintaining reliable rollbacks after bad ingests, ensuring audit trails for regulatory compliance, and providing consistent access to a single source of truth for both AI and BI workloads.

Which strategy should the data engineer use to meet these requirements?

- **A.** DBFS CSV storage with manual file versioning and nightly copies for rollback.
- **B.** Delta Lake ACID transactions and time travel, governed by Unity Catalog for consistent access and lineage.
- **C.** Cloud object storage only, with ad hoc SQL queries for recovery and governance.
- **D.** Ephemeral in-memory DataFrames for audit trails and BI distribution.

**Correct Answer:** **B**  
**Explanation:**  
**Delta Lake** provides ACID transactions, audit logging via transaction logs (`_delta_log`), and time travel (`VERSION AS OF` / `TIMESTAMP AS OF`) for instantaneous rollbacks. Integrating Delta Lake tables with **Unity Catalog** provides centralized governance, fine-grained access control, and end-to-end data lineage across all AI and BI workloads.

---

### Question 3
**Objective:** Enable and detail data ingestion patterns, including batch, streaming, and incremental loading, and import data from sources such as local files, Lakeflow Connect standard connectors, and Lakeflow Connect managed connectors.  
**Domain:** Section 2: Data Ingestion and Loading (21%)

A data engineer is building downstream pipelines to consume Databricks audit logs from a customer-owned S3 bucket. Before implementing schema inference and checkpointing, they want to understand the delivery format, typical ingestion latency, and whether files may be overwritten.

What is Databricks audit log storage behavior?

- **A.** Files are delivered as JSON with typical event logging under 15 minutes after delivery begins, and new deliveries can overwrite existing files
- **B.** Files are delivered as CSV with sub-minute latency guarantees, and overwrites never occur once a file is written to preserve immutability
- **C.** Files are delivered as Parquet with eventual consistency beyond 24 hours, and overwrites are disabled to simplify streaming ingestion
- **D.** Files are delivered as JSON with delivery on a weekly batch cadence, and overwrites replace prior content completely without appending

**Correct Answer:** **A**  
**Explanation:**  
Databricks audit logs exported to cloud object storage (such as AWS S3 or Azure Blob/ADLS) are delivered as compressed **JSON** files. Events typically appear within **15 minutes** of the activity occurring, and delivery mechanisms may re-emit or overwrite files with additional event batches for a given time window, requiring downstream pipelines to handle potential idempotency and deduplication.

---

### Question 4
**Objective:** Diagnose cluster startup failures, library conflicts, and out-of-memory issues.  
**Domain:** Section 1: Databricks Intelligence Platform (6%)

A data engineering team supports multiple business analysts who run ad hoc SQL queries throughout the day on curated Delta tables. The team needs to ensure efficient query performance, fast cluster startup, and support for multiple simultaneous users, while managing cost by avoiding unnecessary scaling to very large clusters.

Which cluster configuration meets these requirements?

- **A.** A job cluster with autoscaling designed for scheduled ETL workflows
- **B.** An all-purpose cluster configured with a fixed number of worker nodes
- **C.** A high-concurrency cluster with autoscaling enabled
- **D.** A single-node cluster configured for lightweight development tasks

**Correct Answer:** **C**  
**Explanation:**  
A **High-Concurrency cluster** (or modern SQL Warehouse / Shared Access cluster) provides isolation and resource sharing across multiple simultaneous analyst sessions. Enabling **autoscaling** ensures worker nodes scale out automatically during peak query hours and scale down during quiet periods, preventing excessive cloud spend.

---

### Question 5
**Objective:** Manage your code development workflow within the Databricks workspace UI, including creating and switching between branches in Databricks Git Folders (formerly Databricks Repos), committing and pushing changes, and creating pull requests using Databricks Git integration.  
**Domain:** Section 5: Implementing CI/CD (10%)

A team wants a modular way to deploy, version, and orchestrate ETL pipelines in Databricks—enabling CI/CD and repeatability.

Which feature supports this requirement?

- **A.** Use models in Unity Catalog to represent ETL jobs, where each model stores the pipeline code artifact and CI/CD promotes versions by updating model aliases tied to Job tasks.
- **B.** Package transformation logic as wheel libraries stored in Unity Catalog Volumes and bind them to Jobs tasks to ensure deterministic deployment across environments.
- **C.** Package API logic inside a Volume-mounted notebook, and use Jobs API v2 to trigger the notebook, depending on notebook revision history to act as a versioning system.
- **D.** Use DABs to define resources and code assets, version them in Git, and promote deployments across environments through automated CI/CD actions.

**Correct Answer:** **D**  
**Explanation:**  
**Databricks Asset Bundles (DABs)** are the official standard for defining Databricks resources (Jobs, Lakeflow Spark Declarative Pipelines, notebooks, artifacts) as code (`databricks.yml`). DABs enable full software development lifecycle (SDLC) practices including Git versioning, automated testing, environment-specific variable overrides (`targets: dev, staging, prod`), and automated deployment via CI/CD pipelines using the Databricks CLI.
