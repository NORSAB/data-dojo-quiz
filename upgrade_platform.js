/**
 * UPGRADE: Platform Understanding Deep-Dive Explanations
 * Injects exam-focused, technical explanations for 28 Platform Understanding questions.
 */
const fs = require('fs');
const FILE = 'questions_databricks.js';
const content = fs.readFileSync(FILE, 'utf8');

// Build the explanation map: id -> new explanation
const explanations = {

"db-da-1": `✅ CORRECT (B — Gold): The Gold layer is the final, business-ready layer in the medallion architecture. It contains curated, aggregated, and denormalized tables optimized specifically for analyst consumption — dashboards, reports, KPIs, and ad-hoc queries.

❌ Why others are wrong:
• (A) "None of these layers": Incorrect — data analysts absolutely use lakehouse layers; Gold is their primary workspace.
• (C) "All equally": Analysts rarely interact with Bronze (raw ingestion) or Silver (cleaned/conformed) directly. Those layers serve data engineers.
• (D) Silver: The Silver layer holds cleaned, deduplicated, conformed data. Engineers and advanced analysts may query it, but it's NOT the primary analyst layer.
• (E) Bronze: Bronze stores raw, unprocessed data as-is from source systems. Analysts should never query Bronze for reporting.

🎯 EXAM TIP: Medallion layers map to roles: Bronze = ingestion (engineers), Silver = cleaning (engineers), Gold = analytics (analysts). The exam tests this role-to-layer mapping frequently.`,

"db-da-3": `✅ CORRECT (E — Complementary tool for quick in-platform BI work): Databricks SQL is NOT a replacement for Tableau, Power BI, or Looker. It serves as a lightweight BI tool for quick exploration, prototyping dashboards, and ad-hoc SQL analysis directly inside the platform — without needing to export data to external tools.

❌ Why others are wrong:
• (A) "Exact substitute": Databricks SQL lacks advanced features of dedicated BI tools (pixel-perfect formatting, complex report scheduling, enterprise distribution).
• (B) "Substitute with less functionality": This framing is wrong — DBSQL isn't a substitute at all; it's complementary.
• (C) "Complete replacement with additional functionality": Overstates DBSQL's BI capabilities. It excels at SQL + lightweight dashboards, not full enterprise BI.
• (D) "Professional-grade presentations": DBSQL dashboards are functional, not presentation-grade. Dedicated BI tools handle polished executive reports.

🎯 EXAM TIP: Think of Databricks SQL as the "inner loop" BI (explore, prototype, validate) and tools like Tableau/Power BI as the "outer loop" BI (publish, distribute, present). The exam tests this complementary relationship.`,

"db-da-5": `✅ CORRECT (C — Data engineer): Data engineers primarily work in Databricks Data Science & Engineering workspace (notebooks, Spark, DLT pipelines). They use DBSQL only as a secondary tool for data validation, quality checks, or ad-hoc queries — not as their primary touchpoint.

❌ Why others are wrong:
• (A) Business analyst: Business analysts use DBSQL as their PRIMARY tool — SQL Editor, dashboards, and Genie Spaces are built for them.
• (B) SQL analyst: SQL analysts live in DBSQL — writing queries, building dashboards, setting up alerts.
• (D) BI analyst: BI analysts use DBSQL + external BI tools (Tableau, Power BI) connected via SQL Warehouses.
• (E) Data analyst: Data analysts are the core DBSQL user persona — the entire DBSQL experience is designed for them.

🎯 EXAM TIP: The exam tests persona-to-service mapping. Data Engineers → Workspace (notebooks/Spark). Data Analysts/BI Analysts/SQL Analysts → Databricks SQL. Data Scientists → ML Runtime/MLflow.`,

"db-da-10": `✅ CORRECT (E — Databricks SQL): Databricks SQL meets ALL three requirements: (1) SQL query authoring via SQL Editor, (2) serverless compute via Serverless SQL Warehouses, and (3) built-in visualization and dashboard capabilities.

❌ Why others are wrong:
• (A) Delta Lake: Delta Lake is a STORAGE LAYER (file format + transaction log), not a query tool. It stores data but doesn't provide a SQL editor or dashboards.
• (B) Databricks Notebooks: Notebooks support SQL cells BUT lack native dashboard builder and aren't optimized for pure SQL workflows. They're designed for multi-language data science.
• (C) Tableau: External BI tool — it does NOT provide serverless compute; it connects TO Databricks SQL Warehouses for compute.
• (D) Databricks ML: Machine Learning workspace is for model training, MLflow experiments, and feature engineering — not SQL query/dashboard workflows.

🎯 EXAM TIP: When a question mentions "SQL queries + serverless + dashboards" together, the answer is always Databricks SQL. No other Databricks service combines all three.`,

"db-da-14": `✅ CORRECT (C — Table metadata): Delta Lake stores a _delta_log/ directory alongside the Parquet data files. This transaction log contains metadata including: schema information, column statistics, file-level statistics, commit history, and operation details. This metadata enables ACID transactions, time travel, and query optimization.

❌ Why others are wrong:
• (A) "None of these": Incorrect — Delta Lake absolutely stores metadata alongside data files.
• (B) "Metadata + visualizations + owner info": Delta Lake does NOT store visualizations or owner account information. Visualizations are a UI layer feature; ownership is managed by Unity Catalog, not Delta Lake.
• (D) "Data summary visualizations": Visualizations are rendered by DBSQL dashboards, not stored in Delta Lake files.
• (E) "Owner account information": Access control and ownership metadata lives in Unity Catalog's metastore, not in Delta Lake's transaction log.

🎯 EXAM TIP: Delta Lake = Parquet files + Transaction Log (_delta_log/). The log tracks: schema, statistics, commits, and file manifests. Everything else (permissions, visualizations) lives elsewhere.`,

"db-da-15": `✅ CORRECT (A — ACID transactions): Traditional data lakes lack transactional guarantees — concurrent writes can corrupt data, partial failures leave inconsistent state. Delta Lake solves this with ACID (Atomicity, Consistency, Isolation, Durability) transactions, making the lakehouse reliable for production workloads.

❌ Why others are wrong:
• (B) Flexible schemas: Data lakes ALREADY have flexible schemas (they store any file format). This isn't a Delta Lake advantage OVER lakes.
• (C) Data deletion: Standard data lakes support file deletion. Delta Lake adds GDPR-compliant targeted row deletion (DELETE FROM), but the base capability exists in lakes.
• (D) Scalable storage: Both data lakes and Delta Lake use cloud object storage (S3, ADLS, GCS). Scalability is inherited from the cloud, not unique to Delta Lake.
• (E) Open-source formats: Data lakes already use open formats (CSV, Parquet, JSON). Delta Lake builds ON Parquet — it doesn't introduce open formats as a new advantage.

🎯 EXAM TIP: The exam distinguishes "Lakehouse vs. Data Lake" (answer: ACID transactions) from "Lakehouse vs. Data Warehouse" (answer: open formats, scalable storage for unstructured data). Read the comparison target carefully.`,

"db-da-16": `✅ CORRECT (B — View metadata/data + view/change permissions): Data Explorer (now called Catalog Explorer) provides a visual interface to: browse catalogs/schemas/tables, view column metadata (types, comments), preview sample data, and manage permissions (GRANT/REVOKE) — all without writing SQL.

❌ Why others are wrong:
• (A) "Run UPDATE queries": Data Explorer is READ-ONLY for data. You cannot execute DML statements (UPDATE, INSERT, DELETE) from it — that requires the SQL Editor.
• (C) "Produce dashboards": Dashboards are created in the Dashboards section or SQL Editor, not in Data Explorer.
• (D) "Make visualizations": Visualizations are built in the SQL Editor's result panel or in dashboards, not in Data Explorer.
• (E) "Connect to third-party BI tools": BI tool connectivity is configured through SQL Warehouse connection details (ODBC/JDBC endpoints), not through Data Explorer.

🎯 EXAM TIP: Data Explorer = BROWSE + GOVERN (metadata, preview, permissions). SQL Editor = QUERY + VISUALIZE. Dashboard page = BUILD + SHARE. Know which tool does what.`,

"db-da-50": `✅ CORRECT (A — Open-source formats): Classic enterprise data warehouses (EDWs) like Teradata, Oracle, or Snowflake use PROPRIETARY storage formats. You're locked into their ecosystem. Delta Lake stores data in open-source Parquet format, preventing vendor lock-in and enabling interoperability with any tool that reads Parquet.

❌ Why others are wrong:
• (B) Schema enforcement: Classic EDWs ALREADY enforce schemas strictly (CREATE TABLE with column types). This is not an advantage of Delta Lake OVER warehouses.
• (C) ACID transactions: Classic EDWs ALREADY provide ACID transactions — that's their core strength. ACID is Delta Lake's advantage over DATA LAKES, not over warehouses.
• (D) Generic optimizations: Vague and meaningless. Both systems optimize queries. This is not a differentiating factor.

🎯 EXAM TIP: Critical distinction — "Lakehouse vs. Data Lake" = ACID transactions. "Lakehouse vs. Data Warehouse" = open-source formats + scalability + support for unstructured data. The exam tests BOTH comparisons.`,

"db-da-63": `✅ CORRECT (C — SQL warehouses): SQL Warehouses are the dedicated compute resources for Databricks SQL. They provision clusters of cloud VMs optimized for SQL workload execution, powered by the Photon engine.

❌ Why others are wrong:
• (A) Standard clusters: Standard clusters are for Databricks Workspace (notebooks, Spark jobs, ML). They support Python/Scala/R/SQL but are NOT optimized for DBSQL's BI workload patterns.
• (B) Single-node clusters: Single-node clusters serve lightweight development tasks. They're not designed for SQL analytics workloads requiring concurrency and performance.
• (D) Downstream BI tools: BI tools (Tableau, Power BI) are CONSUMERS of compute — they send queries TO SQL Warehouses. They don't provide compute themselves.

🎯 EXAM TIP: Databricks SQL = SQL Warehouses. Databricks Workspace = Clusters. The exam frequently tests which compute type maps to which service. SQL Warehouses come in Classic, Pro, and Serverless types.`,

"db-da-81": `✅ CORRECT (C — Delta Lake): Delta Lake is the open-source storage framework that transforms a basic data lake into a lakehouse by adding: ACID transactions, schema enforcement/evolution, time travel (versioning), and file-level statistics for query optimization.

❌ Why others are wrong:
• (A) MLflow: MLflow is an open-source platform for ML lifecycle management (experiment tracking, model registry, deployment). It doesn't add data governance or reliability to lakes.
• (B) Apache Spark: Spark is a distributed COMPUTE engine for data processing. It reads/writes data but doesn't add transactional guarantees or governance to storage.
• (D) Databricks SQL: DBSQL is a SERVICE/UI that lets analysts run queries. It's not the underlying technology that enables the lakehouse architecture.

🎯 EXAM TIP: Delta Lake = the technology that ENABLES the lakehouse. Apache Spark = the compute engine. Databricks SQL = the analyst-facing service. Unity Catalog = the governance layer. Know each component's role.`,

"db-da-97": `✅ CORRECT (A — Status: TRIGGERED): When a Databricks SQL alert evaluates its condition and the monitored metric exceeds the defined threshold, the alert status changes to TRIGGERED. This signals that the alert condition has been met and any configured notifications will be sent.

❌ Why others are wrong:
• (B) "YES": Not a valid Databricks SQL alert status.
• (C) "SUCCESS": Not a valid alert status. "Success" might describe a query execution result but not an alert condition.
• (D) "OK": OK is actually a VALID alert status — it means the condition was evaluated but NOT met (the value is within the acceptable range). It's the opposite of TRIGGERED.

🎯 EXAM TIP: Databricks SQL alert statuses: TRIGGERED (condition met), OK (condition not met), UNKNOWN (not yet evaluated/error). The exam tests the exact terminology.`,

"db-da-98": `✅ CORRECT (B — Data Intelligence Engine): The Data Intelligence Engine (formerly Databricks IQ) is the underlying AI system that understands your data's semantics — column meanings, table relationships, query patterns, and business context. It powers features across the platform including Genie, Assistant, and search.

❌ Why others are wrong:
• (A) Genie Spaces: Genie Spaces is a specific FEATURE powered BY the Data Intelligence Engine. Genie allows natural-language questions, but the intelligence comes from the engine underneath.
• (C) Unity Catalog: Unity Catalog provides data governance (access control, lineage, auditing). It doesn't provide AI-driven insights or natural language understanding.
• (D) Databricks Assistant: The Assistant is an AI chatbot embedded in the editor that helps write/debug code. It's a feature powered by the Data Intelligence Engine, not the engine itself.

🎯 EXAM TIP: Data Intelligence Engine = the AI brain. Genie + Assistant = features that USE the brain. Unity Catalog = governance. The exam tests whether you know the engine vs. the features it powers.`,

"db-da-141": `✅ CORRECT (B — DBSQL is the analyst service within the platform): Databricks SQL is a core service of the Databricks Data Intelligence Platform, purpose-built for SQL analysts. It includes: SQL Editor, SQL Warehouses, AI/BI Dashboards, Alerts, Genie Spaces, and Catalog Explorer. It integrates natively with Unity Catalog for governance.

❌ Why others are wrong:
• (A) "Standalone product, no integration": Completely false. DBSQL is deeply integrated — it uses Unity Catalog for governance, shares data with notebooks/ML, and leverages the Data Intelligence Engine.
• (C) "Only for ML training": DBSQL is for SQL analytics, not ML model training. ML workloads use Databricks ML Runtime and MLflow.
• (D) "Replaces all external BI tools": DBSQL complements BI tools (Tableau, Power BI). It provides lightweight in-platform BI, not a complete BI replacement.
• (E) "Deprecated, replaced by Notebooks": False. DBSQL is actively developed and is the recommended service for SQL-centric analytics.

🎯 EXAM TIP: Databricks Data Intelligence Platform has three personas: DBSQL (analysts), Workspace (engineers/scientists), ML (data scientists). DBSQL is a first-class citizen, not a secondary tool.`,

"db-da-142": `✅ CORRECT (C — Combines warehouse reliability with lake flexibility/scalability): The Lakehouse architecture merges the best of both worlds: DATA WAREHOUSE features (ACID transactions, schema enforcement, governance, performance) with DATA LAKE features (scalable cloud storage, support for structured + semi-structured + unstructured data, open formats).

❌ Why others are wrong:
• (A) "Traditional warehouse on cloud, no unstructured data": This describes a cloud data warehouse (like Snowflake), NOT a lakehouse. Lakehouses explicitly support unstructured data.
• (B) "Raw lake without governance": This describes a traditional data lake's weakness — exactly what the lakehouse architecture solves.
• (D) "Exclusively for batch processing": Lakehouses support BOTH batch and streaming (Delta Lake supports streaming ingestion with Structured Streaming).
• (E) "Distributed OLTP database": Lakehouses are optimized for OLAP (analytics), not OLTP (transactional operations like banking).

🎯 EXAM TIP: Lakehouse = Warehouse (reliability + governance) + Lake (scalability + flexibility + open formats). This definition appears in multiple forms on the exam.`,

"db-da-179": `✅ CORRECT (D — Gold layer contains denormalized models optimized for analytics/reporting/ML): Gold tables are purpose-built for consumption — star schemas, aggregate tables, feature tables, and KPI views. They've been transformed from Silver's normalized data into analyst-friendly formats.

❌ Why others are wrong:
• (A) "Gold for disaster recovery backups": Backups/DR is an infrastructure concern, not the purpose of the Gold layer.
• (B) "Gold stores raw, unprocessed data": This describes the BRONZE layer — raw data as ingested from source systems.
• (C) "Gold for cleaning, deduplication, joining": This describes the SILVER layer — data cleansing, conforming, and integration happens here.

🎯 EXAM TIP: Bronze = raw ingestion (append-only, no transforms). Silver = cleaned, conformed, deduplicated (normalized). Gold = business-ready, denormalized, aggregated (star schemas, KPIs). Each layer has ONE primary purpose.`,

"db-da-184": `✅ CORRECT (B — Specialized compute for SQL execution, powered by Photon): SQL Warehouses are purpose-built compute resources that ONLY execute SQL queries. They use the Photon engine (a C++ vectorized query engine) for high-performance SQL execution and expose ODBC/JDBC endpoints for BI tool connectivity.

❌ Why others are wrong:
• (A) "Primarily for ETL operations": ETL is typically handled by Databricks Workspace clusters, notebooks, or DLT pipelines — not SQL Warehouses.
• (C) "General-purpose, support Python/Scala/R + SQL": This describes Databricks CLUSTERS (all-purpose or job clusters), not SQL Warehouses. SQL Warehouses only support SQL.
• (D) "Data storage systems with cached results": SQL Warehouses are COMPUTE, not STORAGE. Data lives in Delta Lake on cloud storage. Query result caching is a feature, not the primary role.

🎯 EXAM TIP: SQL Warehouses = SQL-only compute + Photon engine + ODBC/JDBC endpoints. Types: Classic (basic), Pro (Photon + governance features), Serverless (instant start, managed by Databricks). Know all three.`,

"db-da-191": `✅ CORRECT (D — Direct, governed access via Delta Sharing without data copying): Databricks Marketplace leverages Delta Sharing to provide LIVE access to external datasets, notebooks, models, and dashboards. Data consumers access shared data in-place — no ETL pipelines, no data copying, no egress costs.

❌ Why others are wrong:
• (A) "Marketplace for purchasing compute resources": Marketplace provides DATA and analytics ASSETS, not compute. Compute is provisioned separately (SQL Warehouses, clusters).
• (B) "Scheduling ETL pipelines for partner data": Marketplace eliminates the need for ETL — data is shared live via Delta Sharing, not loaded through pipelines.
• (C) "Copy datasets for offline analysis": The whole point is NO copying. Delta Sharing provides live, governed access to the provider's data.

🎯 EXAM TIP: Databricks Marketplace uses Delta Sharing under the hood. Key benefits: no data copying, live access, provider-managed, Unity Catalog governance applies. The exam tests the "no copy" aspect frequently.`,

"db-da-301": `✅ CORRECT (A — Pre-warmed compute pools eliminate cold-start delays): Serverless SQL Warehouses start in 2-6 seconds because Databricks maintains pools of pre-provisioned VMs. Classic warehouses must provision VMs from scratch in the customer's cloud account, which takes 4-10+ minutes (cold start).

❌ Why others are wrong:
• (B) "Classic requires manual driver installation": Drivers are bundled automatically in both types. No manual installation is needed.
• (C) "Serverless runs on Control Plane": Both types execute queries in compute infrastructure. Serverless VMs are managed by Databricks but still process data securely.
• (D) "Classic downloads Delta Lake libraries on startup": Delta Lake libraries are pre-installed on all Databricks compute — no download needed.
• (E) "Serverless bypasses Unity Catalog auth": Security is NEVER bypassed. Both types fully integrate with Unity Catalog for access control.

🎯 EXAM TIP: Serverless = pre-warmed pools (instant start) + managed by Databricks + pay per query. Classic = customer-managed VMs (cold start) + always running = pay for uptime. Pro = middle ground with Photon.`,

"db-da-302": `✅ CORRECT (B — Control Plane manages orchestration; Data Plane holds customer data): The Control Plane (managed by Databricks) handles: UI, notebook management, job scheduling, cluster management, and API endpoints. The Data Plane (in the customer's cloud account) stores and processes all customer data — Delta tables, cloud storage, and compute resources.

❌ Why others are wrong:
• (A) "Control Plane stores customer data encrypted": The Control Plane does NOT store customer data. It only stores workspace metadata (notebook configs, job definitions).
• (C) "Both store data, Control stores metadata": The Control Plane stores WORKSPACE metadata, not data metadata. Data metadata (schemas, statistics) lives in the Data Plane's metastore.
• (D) "Data Plane managed by Databricks, Control in customer's cloud": This is REVERSED. Control Plane = Databricks-managed. Data Plane = customer's cloud.
• (E) "Interchangeable terms": They are completely separate architectural components with different security boundaries.

🎯 EXAM TIP: Control Plane = Databricks manages (UI, scheduling, APIs). Data Plane = Customer's cloud (data, compute). This separation ensures customer data never leaves their cloud account. Critical for security questions.`,

"db-da-303": `✅ CORRECT (C — Cost model difference: Serverless charges per-query with instant scaling): With 15-minute refresh intervals, a Pro warehouse either runs continuously (high cost) or auto-stops and cold-starts each time (slow). Serverless offers instant startup (2-6s) and per-query pricing — you only pay when queries execute.

❌ Why others are wrong:
• (A) "Serverless doesn't support Photon": FALSE. Serverless SQL Warehouses DO use Photon. All warehouse types support Photon.
• (B) "Pro supports more concurrent queries": FALSE. Serverless actually scales more efficiently for concurrency because it auto-provisions additional resources instantly.
• (D) "Serverless can't connect to Unity Catalog": FALSE. All SQL Warehouse types integrate with Unity Catalog for governance.
• (E) "Pro has exclusive Query Profile access": FALSE. Query Profile is available in ALL SQL Warehouse types.

🎯 EXAM TIP: Pro vs. Serverless decision = COST MODEL + STARTUP TIME. If workloads are intermittent (dashboards refreshing every N minutes), Serverless wins. If workloads run continuously (8+ hours/day), Pro may be cheaper.`,

"db-da-304": `✅ CORRECT (B — DBSQL is preferred for SQL-centric workflows): When the team primarily writes SQL, creates dashboards, and sets up KPI alerts, Databricks SQL is the optimal choice. It provides a purpose-built SQL Editor, native dashboard builder, alerting system, and SQL Warehouses — all designed for SQL-first analytics.

❌ Why others are wrong:
• (A) "DBSQL for Python/Scala complex transformations": DBSQL only supports SQL. Python/Scala/R require Databricks Workspace notebooks.
• (C) "Notebooks always preferred because they support SQL cells": While notebooks support SQL cells, they lack native dashboard builder, alerting, and the optimized SQL Editor experience.
• (D) "DBSQL only for ad-hoc queries": DBSQL supports production workloads — scheduled queries, automated dashboards, and production alerts.
• (E) "Separate license required": DBSQL is included in the Databricks platform — no separate license needed.

🎯 EXAM TIP: DBSQL = SQL + dashboards + alerts + SQL Warehouses. Notebooks = multi-language + complex transformations + ML. The exam tests when to use each.`,

"db-da-305": `✅ CORRECT (C — Both metadata AND data files are permanently deleted): For MANAGED tables, Databricks controls both the metadata (in the metastore) and the underlying data files (in managed storage). DROP TABLE removes EVERYTHING — the table definition AND all associated Parquet/Delta files.

❌ Why others are wrong:
• (A) "Data files remain accessible via Delta path": Only true for EXTERNAL tables. Managed tables' data is also deleted.
• (B) "Unity Catalog protects data by default": Unity Catalog manages ACCESS CONTROL, not data preservation. DROP TABLE with proper permissions deletes managed data.
• (D) "Moved to recycle bin, recoverable within 30 days": There is no "recycle bin" for dropped managed tables. Once dropped, data is gone (though UNDROP TABLE exists for a limited time in Unity Catalog).
• (E) "Files preserved but marked read-only": Files are DELETED, not preserved in any state.

🎯 EXAM TIP: MANAGED table → DROP = metadata + data deleted. EXTERNAL table → DROP = metadata deleted only, data files preserved. This is one of the most frequently tested concepts.`,

"db-da-306": `✅ CORRECT (B — Delta Lake adds ACID, schema enforcement, time travel on open Parquet files): The Lakehouse innovation is that Delta Lake provides warehouse-quality reliability (ACID transactions, schema enforcement, time travel) directly ON TOP of cheap cloud object storage using open Parquet format. No separate warehouse copy needed.

❌ Why others are wrong:
• (A) "Proprietary file format, vendor lock-in": The OPPOSITE is true. Delta Lake uses OPEN Parquet format, preventing vendor lock-in.
• (C) "Separate warehouse + lake systems": This describes the OLD architecture (dual-system). The lakehouse ELIMINATES this separation.
• (D) "Replaces cloud storage with new file system": Delta Lake BUILDS ON existing cloud storage (S3, ADLS, GCS) — it doesn't replace it.
• (E) "Marketing term for lake + visualizations": The lakehouse is a real architectural pattern with concrete technical innovations (Delta Lake, Unity Catalog).

🎯 EXAM TIP: Lakehouse formula: Parquet files + Transaction Log (_delta_log/) = warehouse-quality data management on lake storage. The exam tests this "best of both worlds" concept repeatedly.`,

"db-da-307": `✅ CORRECT (B — Photon is a vectorized C++ engine that accelerates Spark SQL without code changes): Photon runs alongside Apache Spark, transparently accelerating SQL and DataFrame operations. It processes data in columnar batches (vectorized execution) using native C++ code, delivering up to 12x performance improvement with zero query rewrites.

❌ Why others are wrong:
• (A) "Replaces Spark entirely, requires rewriting queries": Photon does NOT replace Spark — it accelerates specific Spark operations. No code changes are ever needed.
• (C) "Pre-computes all possible results and caches": This is physically impossible for analytical workloads. Photon optimizes EXECUTION, not pre-computation.
• (D) "Only accelerates Python/Scala, not SQL": The OPPOSITE — Photon primarily accelerates SQL and DataFrame workloads, which are the most common in DBSQL.
• (E) "Compresses data to 10% of original size": Photon is a COMPUTE engine, not a compression tool. Data compression is handled by Parquet and Delta Lake.

🎯 EXAM TIP: Photon = C++ vectorized query engine. Key facts: (1) works with Spark transparently, (2) no code changes, (3) accelerates SQL + DataFrames, (4) available in Pro and Serverless SQL Warehouses.`,

"db-da-308": `✅ CORRECT (B — SQL Warehouse with ODBC/JDBC endpoint, optimized for BI connectivity): SQL Warehouses expose standard ODBC/JDBC connection endpoints that BI tools like Tableau natively support. They're optimized for the concurrent, interactive query patterns BI tools generate and handle multiple simultaneous user connections efficiently.

❌ Why others are wrong:
• (A) "Cluster because Tableau requires Spark context": Tableau connects via ODBC/JDBC, not via Spark context. SQL Warehouses provide superior BI experiences vs. clusters.
• (C) "Either works identically": SQL Warehouses are specifically optimized for BI workloads (concurrency, query routing, Photon). Clusters are designed for notebook-based development.
• (D) "Tableau only connects via REST API": Tableau uses ODBC/JDBC drivers to connect, which SQL Warehouses support natively.
• (E) "Cluster with Tableau driver package": No special driver package is needed on the cluster. The correct approach is using a SQL Warehouse's ODBC/JDBC endpoint.

🎯 EXAM TIP: BI tools (Tableau, Power BI, Looker) → SQL Warehouse (ODBC/JDBC). Notebooks (Python/Scala/R) → Clusters. Partner Connect automates the SQL Warehouse + BI tool connection setup.`,

"db-da-309": `✅ CORRECT (B — Catalog Explorer provides visual browsing, metadata, and permission management): Catalog Explorer (formerly Data Explorer) is the GUI for data discovery and governance. It displays the three-level namespace (catalog > schema > table), shows column details, comments, tags, lineage, and allows granting/revoking permissions — all point-and-click, no SQL needed.

❌ Why others are wrong:
• (A) "SQL Editor autocomplete": Autocomplete shows column names while typing queries but doesn't provide full metadata browsing, permission management, or data preview.
• (C) "Databricks CLI 'tables list'": The CLI is for automation, not visual browsing. It doesn't provide the rich metadata view that Catalog Explorer offers.
• (D) "DLT pipeline viewer": DLT viewer shows pipeline-specific tables and lineage, not a comprehensive browse of ALL data objects in the workspace.
• (E) "Workspace file browser": The file browser shows NOTEBOOKS and FILES, not database tables. Tables are data objects, not workspace files.

🎯 EXAM TIP: Catalog Explorer = visual governance (browse schemas, preview data, manage permissions). SQL Editor = query authoring. Know the distinction — the exam tests which UI element serves which purpose.`,

"db-da-310": `✅ CORRECT (B — Partner Connect provisions SQL Warehouse + configures connection credentials): Partner Connect is a setup wizard that automates the integration between Databricks and partner tools. For ingestion tools like Fivetran/Workday, it: (1) creates a SQL Warehouse, (2) generates a service principal or PAT, and (3) pre-configures the partner's connection settings.

❌ Why others are wrong:
• (A) "Transforms data into medallion format": Partner Connect handles CONNECTION setup, not data transformation. Medallion architecture transformations happen via ETL pipelines.
• (C) "Creates VPN tunnel": Network connectivity is handled by workspace admins (Private Link, VPC peering), not by Partner Connect.
• (D) "Generates ETL notebooks": Partner Connect doesn't write code — it provisions infrastructure and configures authentication.
• (E) "Replaces the partner tool entirely": Partner Connect CONNECTS partner tools; it doesn't replace them. You still need Fivetran/Workday as the ingestion engine.

🎯 EXAM TIP: Partner Connect = automated provisioning wizard. For BI tools → creates SQL Warehouse + connection. For ingestion tools → creates SQL Warehouse + service principal + pre-fills partner config. It saves setup time but doesn't replace the partner tool.`,

"db-da-311": `✅ CORRECT (B — Switch to Serverless SQL Warehouse for instant startup + pay-per-query): Serverless eliminates the cold-start vs. cost tradeoff: it starts in 2-6 seconds (no cold-start penalty) and auto-scales to zero when idle (no cost for idle time). Perfect for intermittent workloads like dashboard refreshes every 30 minutes.

❌ Why others are wrong:
• (A) "Disable Auto Stop completely": This keeps the warehouse running 24/7, incurring continuous costs even during the 20+ minutes of idle time between refreshes.
• (C) "Increase Auto Stop to 35 minutes": This means the warehouse stays running continuously (30-min refresh < 35-min auto-stop), wasting compute during idle periods.
• (D) "Dummy query every 5 minutes": Anti-pattern — wastes compute resources just to prevent cold starts. Adds unnecessary cost and complexity.
• (E) "Reduce refresh to every 5 minutes": Worse — increases both compute usage (more frequent queries) and keeps the warehouse permanently alive.

🎯 EXAM TIP: Auto Stop timer < Dashboard refresh interval = cold-start problem. Solution options: (1) Serverless (best), (2) Increase Auto Stop (wasteful). The exam always prefers Serverless for intermittent workloads.`

};

// Apply the upgrades
let modified = content;
let upgraded = 0;
let skipped = 0;

Object.entries(explanations).forEach(([id, newExpl]) => {
  // Escape the explanation for JSON
  const jsonSafe = newExpl.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');

  // Find the question by ID and replace its explanation
  const idPattern = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"explanation":\\s*")([^"]*?)(")`);
  const match = modified.match(idPattern);

  if (match) {
    modified = modified.replace(idPattern, `$1${jsonSafe}$3`);
    upgraded++;
    console.log(`  ✓ ${id} upgraded (${newExpl.length} chars)`);
  } else {
    skipped++;
    console.log(`  ✗ ${id} NOT FOUND — skipped`);
  }
});

console.log(`\n=== RESULTS ===`);
console.log(`Upgraded: ${upgraded}`);
console.log(`Skipped: ${skipped}`);

if (upgraded > 0) {
  // Backup first
  fs.copyFileSync(FILE, FILE + '.bak_platform');
  fs.writeFileSync(FILE, modified, 'utf8');
  console.log(`\nFile saved. Backup: ${FILE}.bak_platform`);
} else {
  console.log('\nNo changes made.');
}
