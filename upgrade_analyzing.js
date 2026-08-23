/**
 * UPGRADE: Analyzing Queries Deep-Dive Explanations
 * Injects exam-focused, technical explanations for 27 Analyzing Queries questions.
 */
const fs = require('fs');
const FILE = 'questions_databricks.js';
const content = fs.readFileSync(FILE, 'utf8');

const explanations = {

"db-da-32": `✅ CORRECT (A — Query History tab, click query text, slideout shows cache status): In the Query History page, clicking on any executed query opens a detailed slideout panel. This panel shows: execution duration, rows returned, data scanned, warehouse used, and critically — whether the results were served from the query result cache.

❌ Why others are wrong:
• (B) Alerts tab / Cache Status alert: The Alerts tab manages metric-based alerts (threshold monitoring), not cache status. There is no built-in "Cache Status" alert.
• (C) Queries tab / Cache Status button: The Queries tab lists saved queries, not execution details. There's no "Cache Status" button.
• (D) SQL Warehouse tab / Cache file: SQL Warehouse settings manage compute configuration. You cannot browse cache contents from there.
• (E) Data tab / Last Query: The Data tab (Catalog Explorer) browses data objects, not query execution history.

🎯 EXAM TIP: Query History is the single source of truth for execution details: duration, I/O, cache hits, warehouse used, and query plan. The exam tests which tab provides which information.`,

"db-da-51": `✅ CORRECT (D — Automate query execution on multiple warehouses is NOT a benefit): Query History is a monitoring and diagnostic tool. It records past executions but does NOT provide automation or scheduling capabilities. Scheduling is done from the SQL Editor, and queries run on ONE warehouse, not multiple.

❌ Why others are wrong (these ARE valid benefits of Query History):
• (A) Troubleshoot slow queries: ✓ Query History shows duration, data scanned, and timing breakdowns to identify slow queries.
• (B) View query plans: ✓ The Query Profile (accessible from Query History) shows the execution plan with operators and data flow.
• (C) Debug queries: ✓ Query History shows error messages, failure reasons, and execution context for debugging.

🎯 EXAM TIP: Query History = passive monitoring (what happened). SQL Editor = active execution (schedule, run). The exam tests the boundary between observation and action tools.`,

"db-da-72": `✅ CORRECT (C — When complex logic cannot be implemented with built-in capabilities): UDFs (User-Defined Functions) exist to extend SQL's capabilities when built-in functions are insufficient. Examples: custom string parsing, domain-specific calculations, or proprietary algorithms that don't exist in standard SQL.

❌ Why others are wrong:
• (A) "Restrict results to certain users": Access control is handled by Unity Catalog (GRANT/REVOKE), not by UDFs. UDFs don't enforce security policies.
• (B) "Deploy within a subquery": You can use regular functions in subqueries. Subquery deployment isn't a reason to CREATE a UDF.
• (D) "Optimize simple logic for scaling": Simple logic should use built-in functions, which are already optimized by the Photon engine. UDFs can actually be SLOWER than built-in functions because they bypass native optimization.

🎯 EXAM TIP: UDF decision rule: Can you do it with built-in functions? → Use built-in (faster, optimized). Can't? → Create a UDF. UDFs are for CAPABILITY gaps, not performance optimization.`,

"db-da-79": `✅ CORRECT (C — The Query Editor): When a query is standalone (not attached to a dashboard or alert), its refresh schedule is configured directly in the SQL Query Editor. Click the schedule icon next to the Run button to set: frequency (minutes, hours, daily, weekly), time range, and the SQL warehouse to execute on.

❌ Why others are wrong:
• (A) Data Explorer: Data Explorer browses data objects (catalogs, schemas, tables) and manages permissions. It has no query execution or scheduling capabilities.
• (B) Visualization Editor: The Visualization Editor configures how query results are displayed (chart type, axes, colors) — it doesn't control when the query runs.
• (D) Dashboard Editor: Dashboard-level schedules refresh ALL queries in the dashboard. For standalone query scheduling, the Query Editor is the correct location.

🎯 EXAM TIP: Schedule hierarchy: Query Editor schedule (individual queries) vs. Dashboard schedule (all dashboard queries at once). The exam tests where to configure each.`,

"db-da-87": `✅ CORRECT (A + E — Vectorized columnar engine + caching layer for CPU-efficient scanning): Photon accelerates large table scans through TWO mechanisms: (A) A columnar, vectorized C++ execution engine that processes data in batches instead of row-by-row, and (E) A disk caching layer that transcodes Parquet data into a CPU-efficient format (columnar batches in memory) for repeated scan operations.

❌ Why others are wrong:
• (B) "Automatically merges small files": File compaction is done by OPTIMIZE, not Photon. Photon is a query EXECUTION engine, not a storage management tool.
• (C) "Processes data row by row": The OPPOSITE of Photon's design. Photon's key innovation is VECTORIZED (batch) processing — processing multiple rows simultaneously using SIMD-like operations.
• (D) "Parallelizes across multiple clusters": Photon operates WITHIN a single SQL Warehouse. It doesn't span multiple clusters. Parallelism happens across worker nodes within one warehouse.

🎯 EXAM TIP: This is a MULTI-SELECT question. Photon's two acceleration mechanisms: (1) Vectorized C++ engine (compute optimization), (2) Disk cache transcoding (I/O optimization). Both are correct.`,

"db-da-90": `✅ CORRECT (A — Liquid Clustering allows changing columns without rewriting data): Liquid Clustering is the modern replacement for Hive-style partitioning. Key advantage: you can ALTER TABLE to change clustering columns, and future OPTIMIZE runs will incrementally reorganize data — no full rewrite or table rebuild needed.

❌ Why others are wrong:
• (B) "Supports more data types including nested structures": Both approaches work with standard column types. Liquid Clustering doesn't specifically add support for nested structures or arrays as a differentiator.
• (C) "Better compression ratios": Compression is determined by the Parquet format and data content, not by the clustering strategy. Both approaches use the same underlying Parquet compression.
• (D) "Creates backup copies": Neither approach creates backup copies. Data files are reorganized in-place (with Delta's transaction log tracking changes).

🎯 EXAM TIP: Liquid Clustering vs. Partitioning: Partitioning = RIGID (changing partition columns requires full table rewrite). Liquid Clustering = FLEXIBLE (alter clustering columns anytime, OPTIMIZE applies incrementally). This is a high-frequency exam topic.`,

"db-da-99": `✅ CORRECT (C — HyperLogLog++ algorithm for fast approximate counts): APPROX_COUNT_DISTINCT uses the HyperLogLog++ (HLL++) algorithm, which estimates distinct counts using a fixed, small amount of memory regardless of data size. It trades ~2% accuracy for orders-of-magnitude performance gains on massive datasets.

❌ Why others are wrong:
• (A) "APPROX provides exact counts, COUNT_DISTINCT provides estimates": This is REVERSED. COUNT(DISTINCT col) gives exact counts. APPROX_COUNT_DISTINCT gives estimates.
• (B) "APPROX only works with strings": APPROX_COUNT_DISTINCT works with ANY data type — strings, numbers, dates, etc.
• (D) "Stores only first 1000 unique values": HLL++ doesn't store actual values at all. It maintains a compact probabilistic sketch (fixed memory footprint) that estimates cardinality.

🎯 EXAM TIP: APPROX_COUNT_DISTINCT: O(1) memory, ~2% error, good for dashboards/metrics where approximate counts are acceptable. COUNT(DISTINCT): exact but expensive (requires full data scan + sort/hash). Choose APPROX for > millions of rows.`,

"db-da-100": `✅ CORRECT (C — Query Insights for metrics like duration, rows read, execution history): Query Insights provides operational metrics for individual queries: execution count, average/p50/p95 duration, rows read/returned, data scanned, and historical trends. This helps diagnose which specific query is causing dashboard slowness.

❌ Why others are wrong:
• (A) "Dashboard Editor to review visualization types": The Dashboard Editor controls layout and widgets. It doesn't provide query-level performance diagnostics.
• (B) "Query Profiler for long-term trends": The Query Profiler (Query Profile) shows the execution plan of a SINGLE run (operators, data flow). It's for deep-diving into one execution, not long-term trend analysis.
• (D) "Lakehouse Monitoring for real-time alerts": Lakehouse Monitoring tracks data quality and drift on tables — it monitors DATA, not QUERY performance.

🎯 EXAM TIP: Query Insights = historical trends across multiple executions (how has this query performed over time?). Query Profile = single execution deep-dive (what operators ran and how did data flow?). The exam tests the difference.`,

"db-da-103": `✅ CORRECT (C — tag:confidential): In the Databricks workspace search bar, the syntax for finding assets with a specific Unity Catalog tag is tag:<tag_key>. For tags with values, use tag:<key>:<value>. This searches across tables, schemas, and other cataloged objects.

❌ Why others are wrong:
• (A) "confidential:true": This syntax isn't recognized. Tags in Unity Catalog use the tag: prefix.
• (B) "tag-confidential": Hyphens are not the correct separator. The colon (:) is the required delimiter between the tag prefix and key.
• (D) "search tag = 'confidential'": This looks like SQL syntax, not workspace search syntax. Workspace search uses compact prefix notation.

🎯 EXAM TIP: Unity Catalog search syntax: tag:<key> (for key-only tags) or tag:<key>:<value> (for key-value tags). Example: tag:pii, tag:department:finance. This exact syntax appears on the exam.`,

"db-da-104": `✅ CORRECT (C — Memory peak per operator): The "Memory peak per operator" metric in the Query Profile shows the maximum RAM consumed by each individual operator (scan, join, aggregate, sort). When a query fails with resource constraint / OOM errors, this metric pinpoints exactly WHICH operator exceeded available memory.

❌ Why others are wrong:
• (A) "Shuffle read size": Shuffle read shows data transferred between nodes during redistributions (joins, aggregations). High shuffle indicates network I/O issues, not necessarily memory pressure.
• (B) "Time spent per operator": Time per operator identifies SLOW stages but doesn't directly reveal WHY they're slow (could be I/O, CPU, or memory).
• (D) "Bytes spilled to disk": Spill to disk IS a symptom of memory pressure (data that doesn't fit in RAM overflows to disk). However, Memory Peak is the direct diagnostic — it shows the root cause rather than the symptom.

🎯 EXAM TIP: Query Profile troubleshooting flow: OOM error → check Memory Peak per operator → identify the culprit operator → optimize (e.g., Broadcast Join → Sort Merge Join, or add more memory). Spill-to-disk is the symptom, Memory Peak is the diagnosis.`,

"db-da-107": `✅ CORRECT (C — Grant USE CATALOG on the containing catalog): Unity Catalog enforces a hierarchical permission model: Catalog → Schema → Table. Even if a user has SELECT on a table and USAGE on the schema, they CANNOT access anything without USE CATALOG on the parent catalog. It's the top-level gate.

❌ Why others are wrong:
• (A) "MANAGE TABLE access": Not a valid Unity Catalog privilege. Table-level permissions include SELECT, MODIFY, ALL PRIVILEGES — not "MANAGE TABLE."
• (B) "MANAGE DATABASE on catalog": Not a valid Unity Catalog privilege. Catalog-level permissions include USE CATALOG, CREATE SCHEMA — not "MANAGE DATABASE."
• (D) "Grant OWNERSHIP": Ownership transfer is extreme and unnecessary. The user just needs USE CATALOG permission to access the catalog namespace.

🎯 EXAM TIP: Unity Catalog access chain: USE CATALOG → USE SCHEMA → SELECT/MODIFY on table. ALL THREE levels must be satisfied. Missing any level = access denied. This is the #1 tested permission concept.`,

"db-da-108": `✅ CORRECT (C — Delta Cache only caches Parquet files on local SSDs with supported cloud storage): The Delta Cache (disk cache) automatically caches remote Parquet file data on local SSD storage for faster subsequent reads. Limitation: it ONLY works with Parquet-format files (including Delta tables) stored on supported cloud object storage (S3, ADLS, GCS).

❌ Why others are wrong:
• (A) "Works best with non-deterministic queries like NOW()": The OPPOSITE. Query result caching (a different layer) INVALIDATES cache for non-deterministic functions because results change each call.
• (B) "Caching CSV/JSON with Delta Cache is supported": FALSE. Delta Cache is specifically designed for PARQUET files only. CSV and JSON must be read from source each time.
• (D) "Spark caching always improves performance": FALSE. .cache() in Spark uses MEMORY, not disk. Caching large datasets can cause OOM errors. It should be applied selectively.

🎯 EXAM TIP: Three caching layers in Databricks: (1) Delta Cache = disk SSD, Parquet only, automatic. (2) Query Result Cache = exact result reuse, invalidated on data change. (3) Spark .cache() = manual, in-memory. Know the differences.`,

"db-da-112": `✅ CORRECT (C — OPTIMIZE events): For Liquid Clustering tables, the OPTIMIZE command incrementally re-clusters data based on the defined clustering columns. As new data arrives, it may not be co-located optimally — running OPTIMIZE periodically ensures data files are reorganized for maximum data-skipping efficiency.

❌ Why others are wrong:
• (A) "VACUUM events": VACUUM removes old, unreferenced data files to reclaim storage. It does NOT reorganize or re-cluster data. It's a cleanup operation, not an optimization.
• (B) "ANALYZE TABLE COMPUTE STATISTICS": Computes column-level statistics for the optimizer. It helps with query planning but doesn't physically reorganize data files for clustering.
• (D) "REORG TABLE APPLY PURGE": REORG with PURGE rewrites files to physically remove soft-deleted rows (deletion vectors). It's for cleanup, not clustering.

🎯 EXAM TIP: OPTIMIZE = re-cluster + compact files. VACUUM = delete old files. ANALYZE TABLE = update statistics. REORG PURGE = remove deletion vectors. Each command has ONE primary purpose. The exam expects you to know which solves which problem.`,

"db-da-115": `✅ CORRECT (B — Small Files Problem): Partitioning by a high-cardinality column like session_id creates millions of directories, each containing tiny files. This overwhelms the metadata service, increases file listing overhead, and makes each file too small for efficient parallel processing — classic "small files problem."

❌ Why others are wrong:
• (A) "Data Skew": Data skew occurs when some partitions have vastly more data than others (uneven distribution). High-cardinality partitioning creates MANY partitions, not unevenly-sized ones.
• (C) "Metadata locking": Metadata locking relates to concurrent write conflicts, not partition strategy. While many partitions add metadata overhead, it's not "locking."
• (D) "Predicate pushdown failure": Predicate pushdown WORKS with partitioning (that's why partitioning exists). The issue is that too many tiny partitions create file overhead, not that filters fail.

🎯 EXAM TIP: Partitioning rule: Only partition by LOW-cardinality columns (country, year, status). For HIGH-cardinality columns (user_id, session_id, timestamp), use Liquid Clustering instead. This is why Liquid Clustering was invented.`,

"db-da-118": `✅ CORRECT (B — No, must run VACUUM with 0 hours retention): DELETE in Delta Lake is a LOGICAL operation — it marks rows as deleted using deletion vectors (or rewrites files excluding deleted rows), but the OLD files containing the deleted data remain for Time Travel. To physically remove data files, you must run VACUUM with a retention period of 0 hours to force immediate cleanup.

❌ Why others are wrong:
• (A) "Yes, DELETE removes data physically": FALSE. Delta Lake preserves history for Time Travel. DELETE only creates new file versions without the deleted rows — old versions remain.
• (C) "Run OPTIMIZE": OPTIMIZE compacts files and re-clusters but does NOT remove old file versions. It creates new optimized files while old ones remain for Time Travel.
• (D) "Drop the table": Dropping and recreating loses ALL data, not just the target rows. This is an extreme, destructive approach to GDPR compliance.

🎯 EXAM TIP: GDPR deletion flow: DELETE FROM (logical removal) → VACUUM RETAIN 0 HOURS (physical removal). Note: VACUUM with 0 hours requires setting delta.retentionDurationCheck.enabled = false to bypass the 7-day safety check. The exam tests this two-step process.`,

"db-da-119": `✅ CORRECT (B — CREATE TABLE ... CLUSTER BY (col1, col2)): The CLUSTER BY clause in CREATE TABLE DDL enables Liquid Clustering on the specified columns. This tells Delta Lake to organize data files by these columns during OPTIMIZE operations for optimal data skipping.

❌ Why others are wrong:
• (A) "PARTITIONED BY": PARTITIONED BY creates Hive-style partitions — physical directory-based partitioning, which is the OLDER approach that Liquid Clustering replaces.
• (C) "OPTIMIZE ZORDER BY": ZORDER is an OPTIMIZE command, not a table creation clause. You run it AFTER table creation, and it must be re-run after each data write.
• (D) "WITH CLUSTERING = TRUE": Not valid SQL syntax in Databricks. Liquid Clustering uses the explicit CLUSTER BY clause.

🎯 EXAM TIP: DDL syntax: CREATE TABLE t (col1 INT, col2 STRING) CLUSTER BY (col1, col2). To change columns later: ALTER TABLE t CLUSTER BY (col3). This exact syntax is tested on the exam.`,

"db-da-121": `✅ CORRECT (B — system.billing.usage): The system.billing.usage table is provided by Unity Catalog and contains detailed billing and consumption data: workspace ID, SKU name, usage quantity, usage date, and associated tags. It enables programmatic cost analysis and chargeback reporting.

❌ Why others are wrong:
• (A) "system.information_schema.columns": This table stores column-level metadata (column names, types, defaults) for tables — not billing or usage data.
• (C) "main.default.usage_logs": This is a user-created table path, not a system table. System tables live under the system catalog.
• (D) "system.access.audit": The audit log table tracks access events (who accessed what, when) — security auditing, not billing data.

🎯 EXAM TIP: Key system tables: system.billing.usage (costs), system.access.audit (security), system.information_schema.* (metadata). The exam tests which system table answers which business question.`,

"db-da-145": `✅ CORRECT (B — Automatically performs OPTIMIZE, VACUUM, and Liquid Clustering maintenance): Predictive Optimization uses data usage patterns, table statistics, and workload analysis to automatically schedule maintenance operations on Unity Catalog managed tables. Instead of manually running OPTIMIZE and VACUUM, the system triggers them intelligently when beneficial.

❌ Why others are wrong:
• (A) "Generates SQL queries from prompts": This describes Databricks Assistant or Genie — AI-powered query generation, not Predictive Optimization.
• (C) "Predicts future query results": No system can predict actual data results. Predictive Optimization predicts which MAINTENANCE is needed, not query outcomes.
• (D) "Creates dashboards from results": Dashboard creation is a manual or AI-assisted process (Genie/Assistant), not related to Predictive Optimization.
• (E) "Auto-scales SQL warehouses": Auto-scaling is a SQL Warehouse configuration feature (min/max clusters). Predictive Optimization manages table maintenance, not compute scaling.

🎯 EXAM TIP: Predictive Optimization = automated DBA for your tables. It handles: OPTIMIZE (compaction), VACUUM (cleanup), and ANALYZE TABLE (statistics). Requires Unity Catalog managed tables. The exam tests what it automates.`,

"db-da-153": `✅ CORRECT (B — Databricks automatically creates a serverless pipeline for refresh management): When you create a Materialized View in Databricks SQL, the platform auto-generates a serverless DLT pipeline behind the scenes. This pipeline handles refresh operations — either on a schedule you configure or via manual trigger. No external orchestration needed.

❌ Why others are wrong:
• (A) "Must manually refresh every time": While manual refresh IS possible, the key innovation is the AUTO-GENERATED pipeline that can be scheduled. Manual-only is incorrect.
• (C) "Always real-time, no refresh needed": Materialized Views are NOT real-time. They store precomputed results that become stale as underlying data changes. Refresh is required to update.
• (D) "External orchestration tool required": The built-in serverless pipeline eliminates the need for Airflow, Prefect, or similar external tools.
• (E) "Cannot be refreshed once created": Completely false — refresh is the core lifecycle operation of Materialized Views.

🎯 EXAM TIP: Materialized View refresh: AUTO-GENERATED serverless pipeline + schedule OR manual trigger. The pipeline is incremental — it only processes changed data, not the full table. This serverless pipeline detail is a key exam concept.`,

"db-da-350": `✅ CORRECT (B — Apply Liquid Clustering/ZORDER on date column for data skipping): When the Query Profile shows 90% time in a Scan stage reading a 200GB table with a date filter, the bottleneck is FULL TABLE SCAN. Liquid Clustering (or ZORDER BY date) organizes data files so that rows with similar dates are co-located. Delta Lake's data skipping then reads ONLY the files containing the target date range, typically scanning <5% of total data.

❌ Why others are wrong:
• (A) "Add an index on date": Delta Lake does NOT support traditional indexes like RDBMS. Data skipping via clustering is the Delta Lake equivalent.
• (C) "Increase warehouse size": More compute parallelizes the scan but still reads ALL 200GB. Clustering reduces data READ from 200GB to perhaps 5-10GB — a fundamentally different optimization.
• (D) "Convert to Parquet from Delta": Delta IS Parquet (with a transaction log). Converting away from Delta LOSES features (ACID, time travel, data skipping) with no performance gain.
• (E) "Add LIMIT 1000": LIMIT reduces output rows but the full scan still happens first (scan → filter → limit). It doesn't reduce I/O.

🎯 EXAM TIP: Query Profile shows scan bottleneck → solution is data organization (Liquid Clustering > ZORDER > partitioning). Query Profile shows join bottleneck → solution is join strategy (Broadcast hint, table sizing).`,

"db-da-351": `✅ CORRECT (B — When one table is small enough (~10MB default) to be broadcast to all workers): Broadcast Hash Join works by copying the ENTIRE small table to every worker node. Each worker then performs a local hash join with its partition of the large table, eliminating expensive shuffle (data redistribution). This is dramatically faster but requires the small table to fit in each worker's memory.

❌ Why others are wrong:
• (A) "Both tables > 1GB, Broadcast is more efficient": OPPOSITE — broadcasting a 1GB+ table would exhaust worker memory. Sort Merge Join is correct for two large tables.
• (C) "Never chosen automatically, requires hint": FALSE. The optimizer automatically chooses Broadcast Hash Join when the small table is below the threshold. Hints override this when needed.
• (D) "Always used on primary key joins": Join strategy depends on TABLE SIZE, not column type. Primary key columns don't trigger broadcast behavior.
• (E) "Only with Photon": Broadcast Hash Join is a Spark-level optimization available in ALL warehouse types, not just Photon-enabled ones.

🎯 EXAM TIP: Join strategies by table size: Small + Large → Broadcast Hash Join (automatic if small < 10MB). Large + Large → Sort Merge Join. Hint syntax: /*+ BROADCAST(small_table) */ to force broadcast when optimizer doesn't choose it.`,

"db-da-352": `✅ CORRECT (B — Parquet is columnar; SELECT * reads ALL 150 column files vs. only 5): Parquet stores each column in a separate column chunk within row groups. When you SELECT *, the engine must read all 150 column chunks from every row group. Selecting only 5 columns reads just those 5 chunks — reducing I/O by ~97% (5/150) and proportionally reducing memory usage.

❌ Why others are wrong:
• (A) "Parquet stores row-by-row, same cost": FALSE. Parquet is COLUMNAR, not row-based. Row-based formats (CSV, JSON) read all columns regardless — columnar formats skip unneeded columns.
• (C) "SELECT * triggers full table lock": SQL SELECT operations are read-only and don't acquire write locks. The inefficiency is I/O, not locking.
• (D) "Inefficiency from network transfer, not storage I/O": The bottleneck IS storage I/O — reading 150 columns from cloud storage vs. 5. Network transfer is proportional to data read.
• (E) "Only slow on external tables": Column pruning benefits apply equally to managed and external Delta tables. The storage format (Parquet) is the same.

🎯 EXAM TIP: Column pruning is a fundamental Parquet optimization. ALWAYS specify only needed columns: SELECT col1, col2 FROM table instead of SELECT *. This reduces I/O, memory, and network transfer proportionally.`,

"db-da-353": `✅ CORRECT (B — OPTIMIZE compacts small files into fewer, larger files reducing file-open overhead): The "small files problem" occurs when a table contains thousands of tiny files. Each file requires a separate open/read/close operation, metadata lookup, and task scheduling. OPTIMIZE merges these into fewer, optimally-sized files (~1GB target), dramatically reducing the per-file overhead.

❌ Why others are wrong:
• (A) "OPTIMIZE adds indexes": Delta Lake does NOT support traditional indexes. OPTIMIZE performs file compaction and optional data clustering (ZORDER/Liquid Clustering).
• (C) "OPTIMIZE caches data in memory": OPTIMIZE is a STORAGE operation that rewrites files on disk. It doesn't manage in-memory caching — that's Delta Cache or Spark .cache().
• (D) "Converts Parquet to proprietary format": OPTIMIZE keeps data in open Parquet format. It compacts files but doesn't change the format.
• (E) "Rewrites queries for better execution plans": OPTIMIZE modifies DATA FILES, not query plans. Query plans are generated by the SQL optimizer at query time.

🎯 EXAM TIP: OPTIMIZE does TWO things: (1) File compaction (small files → large files), (2) Data clustering (ZORDER/Liquid Clustering for data skipping). After OPTIMIZE, run VACUUM to clean up the old small files.`,

"db-da-354": `✅ CORRECT (A — Configure value column, condition > 10, with refresh schedule): Databricks SQL Alerts monitor a SINGLE numeric value from a query result. Configuration: (1) specify the value column (failed_jobs), (2) set the condition (greater than), (3) set the threshold (10), and (4) schedule the query to run periodically (e.g., every 15 minutes) to check the condition.

❌ Why others are wrong:
• (B) "Trigger when query returns > 10 rows": Alerts work on the VALUE of a specific column, not on row count. The query should return ONE row with the aggregated count.
• (C) "Dashboard visualization alert feature": Dashboards don't have built-in threshold-based alerting on individual visualizations. Alerts are configured separately in the Alerts section.
• (D) "Python script polling": While technically possible, this bypasses the built-in Alerts system. Databricks SQL Alerts provide native, no-code threshold monitoring.
• (E) "Only supports string comparisons": FALSE. Alerts specifically support numeric comparisons (>, <, =, >=, <=) for threshold monitoring.

🎯 EXAM TIP: Alert query pattern: Query returns ONE ROW with ONE numeric column → Alert monitors that value against a threshold → Triggers notification (email, Slack, webhook). The query MUST be scheduled to run periodically for the alert to evaluate.`,

"db-da-355": `✅ CORRECT (B — ZORDER requires manual OPTIMIZE; Liquid Clustering auto-reorganizes during writes): The fundamental difference: ZORDER is a POST-HOC manual operation — you must run OPTIMIZE ... ZORDER BY after every batch of writes. Liquid Clustering (CLUSTER BY) defines the clustering strategy at table creation and automatically applies it during OPTIMIZE without needing to specify columns each time.

❌ Why others are wrong:
• (A) "Identical, just a new name": FALSE. They are architecturally different. ZORDER uses space-filling curves; Liquid Clustering uses Hilbert curves with incremental clustering.
• (C) "ZORDER supports more columns": FALSE. Liquid Clustering actually handles multi-column clustering more efficiently because it uses an incremental approach.
• (D) "Liquid Clustering only works with Serverless": FALSE. Liquid Clustering works with ALL SQL Warehouse types and clusters.
• (E) "ZORDER always performs better": FALSE. Liquid Clustering's incremental approach is more efficient for tables with frequent writes because it avoids rewriting all data.

🎯 EXAM TIP: ZORDER = legacy, manual, full rewrite. Liquid Clustering = modern, incremental, ALTER-able. For new tables, Databricks recommends Liquid Clustering. For existing ZORDER tables, migration is possible via ALTER TABLE ... CLUSTER BY.`,

"db-da-356": `✅ CORRECT (B — VACUUM RETAIN 168 HOURS removes unreferenced files older than 7 days): VACUUM scans the transaction log, identifies data files no longer referenced by ANY version within the retention period, and physically deletes them from cloud storage. The default retention is 7 days (168 hours), preserving Time Travel capability within that window.

❌ Why others are wrong:
• (A) "DELETE FROM WHERE version < 400": DELETE operates on TABLE ROWS, not transaction log versions. You cannot delete "versions" with a DELETE statement.
• (C) "OPTIMIZE removes old versions": OPTIMIZE creates NEW compacted files but does NOT delete old files. Old files remain until VACUUM runs.
• (D) "ALTER TABLE logRetentionDuration = 1 day": This changes the TRANSACTION LOG retention (metadata), not the DATA FILE retention. Even with a 1-day log, old data files remain until VACUUM runs.
• (E) "DROP + CREATE to start fresh": Destructive — loses all data and requires full reload. Not appropriate for storage cost management.

🎯 EXAM TIP: VACUUM = deletes OLD DATA FILES. Log retention = controls TRANSACTION LOG entries. They're independent. VACUUM RETAIN N HOURS → files older than N hours AND not referenced by current version are deleted. Default: 168 hours (7 days).`,

"db-da-357": `✅ CORRECT (B — Materialize the CTE into a TEMPORARY VIEW or cached table): CTEs in most SQL engines (including Databricks/Spark SQL) are INLINED — each reference re-executes the CTE query from scratch. If a CTE is referenced 3 times, it computes 3 times. Solution: CREATE TEMPORARY VIEW AS (or cache the result), computing it ONCE and reusing the materialized result.

❌ Why others are wrong:
• (A) "Replace CTE with TEMPORARY VIEW": A TEMPORARY VIEW is actually the correct fix, but the explanation claims views are "only computed once" — in reality, a view is ALSO inlined (re-executed per reference) UNLESS you use CREATE TEMPORARY VIEW ... USING or CACHE TABLE.
• (C) "CTEs always computed once": FALSE. This is the most common SQL misconception. CTEs are syntactic sugar — they're expanded inline at each reference point. The Query Profile confirms this.
• (D) "Subqueries are automatically cached": FALSE. Subqueries are also inlined, just like CTEs. No automatic caching occurs.
• (E) "ORDER BY forces materialization": ORDER BY doesn't force CTE materialization. It just sorts the CTE result at each inline expansion.

🎯 EXAM TIP: CTE optimization pattern: CTE referenced multiple times → CREATE TEMPORARY VIEW + CACHE TABLE to materialize. Or refactor the query to reference the CTE only once. The exam tests understanding of CTE inlining behavior.`

};

// Apply upgrades
let modified = content;
let upgraded = 0;
let skipped = 0;

Object.entries(explanations).forEach(([id, newExpl]) => {
  const jsonSafe = newExpl.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
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
  fs.copyFileSync(FILE, FILE + '.bak_analyzing');
  fs.writeFileSync(FILE, modified, 'utf8');
  console.log(`File saved. Backup: ${FILE}.bak_analyzing`);
}
