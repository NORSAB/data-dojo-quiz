# Official Sample Questions — Databricks Certified Data Engineer Professional

> **Source:** Official Exam Guide (October 2026 Edition), Pages 9–13.  
> **Document:** `databricks-certified-data-engineer-professional-exam-guide-oct-2026.pdf`  
> These sample questions align with the **New Exam** outline (effective October 9, 2026) to illustrate the style, depth, scenario complexity, and alignment with the official objectives.

---

### Question 1
**Objective:** Choose between a streaming table and a materialized view for a given latency, cost, and refresh requirement.  
**Domain:** Section 1: Developing Code for Data Processing using Python and SQL (23%)

A gold-layer object in a Lakeflow Declarative Pipeline aggregates daily order totals from a bronze source. Downstream BI dashboards read it on a schedule, and the aggregate must always reflect the full history, including late-arriving updates to prior days, not just newly appended rows.

Which object should the engineer define?

- **A.** A streaming table, because it processes each source row exactly once and is the lowest-cost option for any aggregation.
- **B.** A temporary view, because it always reflects the latest data at query time at no storage cost.
- **C.** A materialized view, because it incrementally maintains the full aggregate result, can be refreshed on a schedule, and reflects late-arriving changes.
- **D.** A streaming table with a foreachBatch merge, because materialized views cannot perform aggregations.

**Correct Answer:** **C**  
**Explanation:**  
A **materialized view** incrementally maintains the full aggregate and can be refreshed on a schedule, so it correctly reflects late-arriving updates to prior days; a streaming table processes appended rows incrementally and does not recompute a full aggregate over changing history.

---

### Question 2
**Objective:** Apply Structured Streaming stateful-processing semantics, including watermarks, output modes, `foreachBatch`, and checkpoints for fault-tolerant exactly-once state recovery.  
**Domain:** Section 1: Developing Code for Data Processing using Python and SQL (23%)

A Structured Streaming query performs an event-time windowed aggregation. It must bound state growth caused by very late events, and it must resume after a driver failure without double-counting results.

Which configuration meets both requirements?

- **A.** Set a watermark on the event-time column and rely on the query's checkpoint to restore offsets and state on restart.
- **B.** Use complete output mode with no watermark to retain all state for correctness.
- **C.** Increase `spark.sql.shuffle.partitions` and disable checkpointing to speed up recovery.
- **D.** Wrap the aggregation in a `foreachBatch` and manually commit source offsets to a Delta table.

**Correct Answer:** **A**  
**Explanation:**  
A **watermark** lets the engine drop state for events beyond the allowed lateness (bounding state growth in the state store), while the query's **checkpoint directory** persists stream offsets and state store snapshots so a restart resumes exactly-once without double-counting results.

---

### Question 3
**Objective:** Configure CDC ingestion pipelines from relational database sources, including SQL Server, MySQL, and PostgreSQL, using Lakeflow Connect.  
**Domain:** Section 2: Data Ingestion & Acquisition (12%)

A data engineer must continuously replicate insert, update, and delete change events from an operational PostgreSQL database into the lakehouse with minimal custom code.

Which approach fits the requirement?

- **A.** Schedule a nightly JDBC full-table read and overwrite the target table each night.
- **B.** Configure a Lakeflow Connect managed connector for PostgreSQL to ingest change data capture into the lakehouse.
- **C.** Export the database to CSV in cloud storage and ingest the files with Auto Loader.
- **D.** Use OpenSharing to share the PostgreSQL tables directly with the lakehouse.

**Correct Answer:** **B**  
**Explanation:**  
**Lakeflow Connect** provides managed database connectors that ingest CDC — including inserts, updates, and deletes — directly from operational databases like SQL Server, MySQL, and PostgreSQL with minimal custom code and configuration; the other options are expensive full table reloads, unsupported, or do not apply to an operational RDBMS.

---

### Question 4
**Objective:** Develop a model and query semi-structured data using the `VARIANT` data type and related functions (e.g., `parse_json`, `variant_get`).  
**Domain:** Section 3: Data Manipulation (12%)

A bronze table stores raw JSON payloads of varying shape in a single string column. The engineer wants efficient storage and fast field extraction without pre-declaring a fixed schema.

What should they do?

- **A.** Parse the payloads into a `VARIANT` column with `parse_json` and extract fields using `variant_get` and colon-path access.
- **B.** Explode the JSON into one row per key using a fixed STRUCT schema.
- **C.** Keep the payloads as STRING and use `regexp_extract` for each field at query time.
- **D.** Convert the JSON to Parquet with a strict, fixed schema before ingestion.

**Correct Answer:** **A**  
**Explanation:**  
The **VARIANT** data type stores semi-structured data efficiently using a shredding and binary encoding model, supporting schema-flexible querying via `parse_json()` and `variant_get()` (as well as colon notation `column:field::type`), avoiding a rigid pre-declared schema.

---

### Question 5
**Objective:** Use Databricks system tables (`billing`, `compute`, `access`, `lakeflow`) for cost analysis, auditing, and workload monitoring.  
**Domain:** Section 4: Monitoring and Alerting (10%)

A data engineer's team must attribute last month's DBU spend to specific jobs and SQL warehouses and identify the most expensive workloads, using governed data already available in Unity Catalog.

Which source should they query?

- **A.** The Spark UI event timeline for each cluster.
- **B.** Per-cluster driver logs downloaded from the workspace.
- **C.** The `system.billing.usage` table joined with the compute and pricing system tables in Unity Catalog.
- **D.** The account console billing PDF export.

**Correct Answer:** **C**  
**Explanation:**  
**System tables** such as `system.billing.usage` (joined with `system.compute.clusters`, `system.compute.warehouses`, and `system.billing.list_prices`) are governed, queryable records in Unity Catalog ideal for cost attribution and workload analysis; the other sources are not queryable at scale or are not governed tables.

---

### Question 6
**Objective:** Choose the appropriate Delta optimization technique (deletion vectors, Liquid Clustering, `CLUSTER BY AUTO`) for a given table access pattern.  
**Domain:** Section 5: Cost & Performance Optimization (15%)

A data engineer finds that a large Delta table receives frequent small MERGE operations that update and delete individual rows. The team wants to avoid rewriting entire data files on every change while keeping reads fast.

Which technique addresses the write amplification?

- **A.** Partition the table by its primary key.
- **B.** Enable deletion vectors so updates and deletes are marked at the row level without immediately rewriting whole files.
- **C.** Run VACUUM with zero-hour retention after every MERGE.
- **D.** Disable predictive optimization to prevent background file rewrites.

**Correct Answer:** **B**  
**Explanation:**  
**Deletion vectors** mark updated and deleted rows in companion bitmap files without immediately rewriting the entire underlying data file, drastically reducing write amplification from frequent small MERGE operations while keeping reads fast; background compaction reconciles them later.

---

### Question 7
**Objective:** Apply attribute-based access control (ABAC) policies with governed tags to enforce row filters and column masks at scale.  
**Domain:** Section 6: Ensuring Data Security and Compliance (8%)

A data engineer is working for an organisation with hundreds of tables containing PII and wants a single, centrally managed rule to mask any column tagged 'pii' across all current and future tables, without altering each table individually.

What should they implement?

- **A.** Run a per-table `ALTER COLUMN SET MASK` statement on every existing table.
- **B.** Attach a row filter function to each schema.
- **C.** Create dynamic views that duplicate every base table with masking logic.
- **D.** Define an ABAC policy that applies a column mask to any column carrying the governed 'pii' tag.

**Correct Answer:** **D**  
**Explanation:**  
An **ABAC policy** keyed on a governed tag applies a column mask wherever the `'pii'` tag is assigned, including any tables created in the future, so the governance rule scales centrally across the entire metastore — unlike per-table masks or duplicated dynamic views.

---

### Question 8
**Objective:** Demonstrate understanding of the Unity Catalog permission inheritance model as a mechanism for managing access control across catalogs, schemas, and objects.  
**Domain:** Section 7: Data Governance (5%)

A data engineer grants `SELECT` on a catalog to the analysts group. New schemas and tables are later created in that catalog.

Assuming no conflicting grants, what access do the analysts have to the new tables?

- **A.** They can SELECT the new tables, because a privilege granted at the catalog level is inherited by the schemas and objects within it, including ones created later.
- **B.** They have no access until SELECT is granted again on each new table.
- **C.** They can SELECT only the tables that existed at the time of the grant.
- **D.** They automatically gain ownership of the new tables.

**Correct Answer:** **A**  
**Explanation:**  
Unity Catalog privileges are **inherited down the hierarchy**: a grant of `USE CATALOG` and `SELECT` on a catalog automatically cascades to all current schemas, tables, and views within that catalog, as well as any new schemas and tables created in the future.

---

### Question 9
**Objective:** Deploy Databricks resources using Declarative Automation Bundles (formerly Databricks Asset Bundles).  
**Domain:** Section 8: Debugging and Deploying (10%)

A data engineer wants the same job and pipeline definitions deployed identically to dev, staging, and prod from source control, with environment-specific overrides and CI/CD.

Which approach meets the requirement?

- **A.** Manually recreate the jobs in each workspace UI, then export and import JSON.
- **B.** Define the resources in a `databricks.yml` bundle with per-target overrides and deploy with `databricks bundle deploy -t <target>`.
- **C.** Copy notebooks between workspaces using only the workspace import CLI.
- **D.** Use a single shared workspace for all environments to avoid configuration drift.

**Correct Answer:** **B**  
**Explanation:**  
A **Declarative Automation Bundle (databricks.yml)** declares resources (jobs, pipelines, notebooks, models) as code with environment targets (`dev`, `staging`, `prod`) and per-target overrides, deploying them deterministically via `databricks bundle deploy -t <target>`, enabling reproducible, CI/CD-friendly SDLC across environments.

---

### Question 10
**Objective:** Design dimensional models for analytical workloads, leveraging Materialized Views for pre-computed aggregation and Unity Catalog Metric Views for governed, reusable metric definitions, to ensure efficient querying and aggregation.  
**Domain:** Section 9: Data Modeling (5%)

A data engineering team computes "net revenue" with slightly different SQL in each of its dashboards, producing inconsistent numbers across reports. The same dashboards are also slow, because each one recomputes large joins and aggregations at query time. The team needs one authoritative definition of the metric and pre-aggregated results that the dashboards can read directly.

Which implementation should the engineer choose?

- **A.** Add a comment on each dashboard describing how to compute net revenue.
- **B.** Grant every analyst edit access to a shared SQL snippet file.
- **C.** Define net revenue once in a Unity Catalog metric view for a governed, reusable definition, and use materialized views for the pre-computed aggregates the dashboards read.
- **D.** Store the metric as a Python UDF copied into each notebook.

**Correct Answer:** **C**  
**Explanation:**  
A **Unity Catalog metric view** provides one governed, centralized, and reusable semantic definition of business metrics like "net revenue"; combining it with **materialized views** pre-computes the heavy aggregations that dashboards read, solving both metric inconsistency and dashboard latency.
