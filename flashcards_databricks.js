/**
 * Databricks — Certified Data Analyst Associate
 * Flashcard Data Bank — 48 flashcards across all 12 domains
 * Used by the Dojo Data Study Mode
 */
window.databricksDAFlashcards = [
  // ══════════════════════════════════════════════════
  // DOMAIN 1 — Lakehouse Architecture
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 1: Lakehouse Architecture",
    pregunta: "What is a Lakehouse and how does it differ from a Data Lake and a Data Warehouse?",
    respuesta: "<strong>Lakehouse</strong> combines the <strong>flexibility</strong> of a Data Lake (low cost, raw files) with the <strong>management</strong> of a Data Warehouse (ACID transactions via Delta Lake, schema enforcement).<br><br>It eliminates data silos by allowing BI and ML to operate on the same data."
  },
  {
    tema: "Domain 1: Lakehouse Architecture",
    pregunta: "What are the three layers of the Medallion Architecture?",
    respuesta: "<strong>Bronze (Raw):</strong> Unvalidated data loaded 'as-is'. Append-only. Historical archive.<br><br><strong>Silver (Clean):</strong> 'Enterprise View'. Cleaned, deduped, schema enforced. Source of Truth.<br><br><strong>Gold (Curated):</strong> 'Presentation Layer'. Aggregated for BI/Reporting. Star Schemas."
  },
  {
    tema: "Domain 1: Lakehouse Architecture",
    pregunta: "What is the memory rule for the Medallion Architecture layers?",
    respuesta: "<strong>Bronze:</strong> History (Past) — raw archive<br><strong>Silver:</strong> Quality (Present) — cleaned truth<br><strong>Gold:</strong> BI/Aggregates (Future) — business-ready<br><br><strong>Trap:</strong> Never perform business aggregations in Bronze. Never store raw messy data in Gold."
  },
  {
    tema: "Domain 1: Lakehouse Architecture",
    pregunta: "What is Delta Lake and what does it provide?",
    respuesta: "<strong>Delta Lake</strong> is the storage layer that adds <strong>ACID transactions</strong> on top of Parquet files.<br><br>Key features:<br>• Schema enforcement and evolution<br>• Time Travel (query historical versions)<br>• OPTIMIZE and VACUUM commands<br>• Streaming + batch unified processing"
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 2 — Data Management
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 2: Data Management",
    pregunta: "What is Unity Catalog and what namespace does it use?",
    respuesta: "<strong>Unity Catalog</strong> provides centralized governance for data and AI assets across workspaces.<br><br>Namespace: <code>catalog.schema.table</code> (three-level).<br><br>It handles access control, auditing, lineage tracking, and data sharing."
  },
  {
    tema: "Domain 2: Data Management",
    pregunta: "What is the difference between Managed and External tables?",
    respuesta: "<strong>Managed Table:</strong><br>• Storage managed by Unity Catalog<br>• DROP TABLE → <strong>deletes data AND metadata</strong><br><br><strong>External Table:</strong><br>• Storage at specific path (S3/ADLS/GCS)<br>• DROP TABLE → <strong>deletes metadata only</strong> (files remain)<br><br><strong>Exam Tip:</strong> This distinction is frequently tested."
  },
  {
    tema: "Domain 2: Data Management",
    pregunta: "What is Liquid Clustering and when should you use it?",
    respuesta: "<strong>Liquid Clustering</strong> is a modern dynamic layout that <strong>replaces partitioning and Z-Order</strong>.<br><br>• Best for high cardinality or skewed data<br>• Automatically optimizes data layout<br>• No need to choose partition columns<br><br><strong>Legacy alternative:</strong> Partitioning = physical folders, only for low cardinality (Year/Month)."
  },
  {
    tema: "Domain 2: Data Management",
    pregunta: "What is the Delta Log?",
    respuesta: "The <strong>Delta Log</strong> is the transactional layer of Delta Lake:<br><br>• Contains JSON files recording every operation<br>• Enables ACID guarantees<br>• Powers Time Travel capabilities<br>• Tracks schema evolution history<br>• Periodically checkpointed for performance"
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 3 — Time Travel
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 3: Time Travel",
    pregunta: "How do you query a table at a specific version or timestamp?",
    respuesta: "<strong>ANSI Standard:</strong><br><code>SELECT * FROM t TIMESTAMP AS OF '2023-10-01';</code><br><code>SELECT * FROM t VERSION AS OF 5;</code><br><br><strong>Shorthand (@):</strong><br><code>SELECT * FROM t@v123;</code><br><br>Use <code>DESCRIBE HISTORY table;</code> to see all versions."
  },
  {
    tema: "Domain 3: Time Travel",
    pregunta: "What does VACUUM do and what is its critical limitation?",
    respuesta: "<strong>VACUUM</strong> deletes old physical files to save storage space.<br><br><strong>Critical Warning:</strong> You <strong>cannot</strong> Time Travel to versions older than the retention threshold once VACUUM runs.<br><br>Default retention: 7 days.<br><code>VACUUM table RETAIN 168 HOURS;</code>"
  },
  {
    tema: "Domain 3: Time Travel",
    pregunta: "What is the RESTORE command used for?",
    respuesta: "<strong>RESTORE TABLE t TO VERSION AS OF 5;</strong><br><br>Brings the table back to a previous state. Unlike Time Travel queries (read-only), RESTORE <strong>actually modifies</strong> the current table to match the historical version.<br><br>Creates a new version in the Delta Log (can be undone)."
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 4 — Visualizations & Dashboards
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 4: Visualizations",
    pregunta: "How do dashboard parameters work in Databricks SQL?",
    respuesta: "Values selected in dashboard parameters must be <strong>mapped to query variables</strong> (<code>{{ param }}</code>).<br><br>If a chart doesn't update, check the parameter mapping.<br><br><strong>Trap:</strong> Alerts evaluate based on the parameter's <strong>Default Value</strong>, not the current dashboard selection."
  },
  {
    tema: "Domain 4: Visualizations",
    pregunta: "What are the requirements for an Alert query?",
    respuesta: "An alert query must return a <strong>single row, single value</strong>.<br><br>Alerts are triggered when the value:<br>• Goes above a threshold<br>• Goes below a threshold<br>• Equals a specific value<br><br>Alert queries run using the <strong>default parameter values</strong>, not current dashboard selections."
  },
  {
    tema: "Domain 4: Visualizations",
    pregunta: "What are counter visualizations used for?",
    respuesta: "<strong>Counter visualizations</strong> display a single metric prominently:<br><br>• Show one large number (KPI)<br>• Can compare against a target or previous period<br>• Ideal for executive dashboards<br>• Query must return a single value<br><br>Common use: Total revenue, user count, conversion rate."
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 5 — Ingestion
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 5: Ingestion",
    pregunta: "When should you use COPY INTO vs. CTAS?",
    respuesta: "<strong>Decision Rule:</strong><br><br><strong>Source = Files?</strong> → Use <code>COPY INTO</code><br>• Idempotent (skips already processed files)<br>• Cheaper for incremental loads<br><br><strong>Source = Query/Table?</strong> → Use <code>CTAS</code><br>• CREATE TABLE AS SELECT<br>• One-time bulk transformation"
  },
  {
    tema: "Domain 5: Ingestion",
    pregunta: "What is Partner Connect in Databricks?",
    respuesta: "<strong>Partner Connect</strong> is the fastest way to connect to ingestion partners like <strong>Fivetran</strong> or <strong>dbt</strong>.<br><br>• Automatically creates a hidden SQL Warehouse<br>• Generates API tokens<br>• Configures connection permissions<br>• Pre-built integrations for popular tools"
  },
  {
    tema: "Domain 5: Ingestion",
    pregunta: "What is Auto Loader and when should it be used?",
    respuesta: "<strong>Auto Loader</strong> incrementally processes new files as they arrive in cloud storage.<br><br>• Uses <code>cloudFiles</code> format<br>• Scales to millions of files<br>• Schema inference and evolution<br>• <strong>Best for:</strong> streaming file-based ingestion<br><br>More efficient than COPY INTO for continuous data streams."
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 6 — Advanced Querying
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 6: Advanced Querying",
    pregunta: "What is the QUALIFY clause and when should you use it?",
    respuesta: "<strong>QUALIFY</strong> filters results based on window functions, avoiding nested subqueries.<br><br><code>SELECT * FROM t<br>QUALIFY ROW_NUMBER() OVER(PARTITION BY id ORDER BY ts DESC) = 1</code><br><br>This returns only the latest record per ID — much cleaner than CTE + WHERE."
  },
  {
    tema: "Domain 6: Advanced Querying",
    pregunta: "What is the difference between SEMI JOIN and ANTI JOIN?",
    respuesta: "<strong>LEFT SEMI JOIN:</strong><br>Returns rows from Left that <strong>have a match</strong> in Right. No duplicates from Right. Only Left columns returned.<br><br><strong>LEFT ANTI JOIN:</strong><br>Returns rows from Left that <strong>DO NOT match</strong> in Right.<br><br><strong>Use case:</strong> SEMI = 'exists in', ANTI = 'not exists in'."
  },
  {
    tema: "Domain 6: Advanced Querying",
    pregunta: "How does PIVOT work in Databricks SQL?",
    respuesta: "<strong>PIVOT</strong> rotates unique column values into multiple columns.<br><br><strong>Must</strong> use an aggregation function:<br><code>SELECT * FROM t<br>PIVOT (SUM(sales) FOR region IN ('North', 'South'))</code><br><br>The IN clause specifies which values become column headers."
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 7 — Complex Types
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 7: Complex Types",
    pregunta: "When should you use EXPLODE vs. Higher-Order Functions?",
    respuesta: "<strong>EXPLODE(arr):</strong><br>Transforms one row with an array into multiple rows (one per item). Use when you need to join/aggregate individual items.<br><br><strong>Higher-Order Functions (FILTER, TRANSFORM):</strong><br>Process arrays without exploding — keeps row count intact. More efficient when you just need to filter or transform in-place."
  },
  {
    tema: "Domain 7: Complex Types",
    pregunta: "How do you extract JSON fields in Databricks SQL?",
    respuesta: "<strong>If column is STRUCT:</strong><br>Use dot notation: <code>col.field</code><br><br><strong>If column is STRING:</strong><br>Use <code>from_json(col, schema)</code> to parse.<br>Or use <code>col:field</code> (JSON path) for semi-structured.<br><br><strong>Exam Trap:</strong> Dot notation only works on STRUCT, not raw strings."
  },
  {
    tema: "Domain 7: Complex Types",
    pregunta: "What are FILTER and TRANSFORM higher-order functions?",
    respuesta: "<code>FILTER(arr, x -> x > 100)</code><br>Keeps only items matching the condition.<br><br><code>TRANSFORM(arr, x -> x * 1.2)</code><br>Applies a transformation to every item in the array.<br><br><strong>Key benefit:</strong> No EXPLODE needed — much more efficient for large arrays."
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 8 — Security
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 8: Security",
    pregunta: "What permissions are needed to SELECT from a table in Unity Catalog?",
    respuesta: "To SELECT from a Table, you need <strong>all three</strong>:<br><br>1. <code>USAGE</code> on Catalog<br>2. <code>USAGE</code> on Schema<br>3. <code>SELECT</code> on Table<br><br><strong>Key Rule:</strong> Privileges flow down, but access requires explicit USAGE on all containers above the target."
  },
  {
    tema: "Domain 8: Security",
    pregunta: "How do Dynamic Views enable Row and Column security?",
    respuesta: "<strong>Row Filter:</strong><br><code>WHERE region = current_user()</code><br>Only shows rows belonging to the current user's region.<br><br><strong>Column Mask:</strong><br><code>CASE WHEN is_member('admin') THEN val ELSE '***' END</code><br>Hides sensitive values from non-admin users."
  },
  {
    tema: "Domain 8: Security",
    pregunta: "What is the difference between GRANT and DENY in Unity Catalog?",
    respuesta: "<strong>GRANT:</strong> Gives a privilege to a user/group.<br><code>GRANT SELECT ON TABLE t TO user;</code><br><br><strong>REVOKE:</strong> Removes a previously granted privilege.<br><code>REVOKE SELECT ON TABLE t FROM user;</code><br><br><strong>Note:</strong> Unity Catalog uses an additive permission model — there is no DENY statement."
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 9 — Compute
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 9: Compute",
    pregunta: "What is the difference between Serverless and Pro SQL Warehouses?",
    respuesta: "<strong>Serverless SQL Warehouse:</strong><br>• Starts in <strong>seconds</strong><br>• Scaling is instant<br>• Best for ad-hoc queries<br>• Managed by Databricks<br><br><strong>Pro SQL Warehouse:</strong><br>• Starts in <strong>minutes</strong><br>• Predictable performance<br>• Best for production with known load patterns"
  },
  {
    tema: "Domain 9: Compute",
    pregunta: "What is Photon and what workloads benefit from it?",
    respuesta: "<strong>Photon</strong> is Databricks' vectorized query engine written in C++.<br><br>• <strong>Up to 12x faster</strong> than standard Spark<br>• Best for SQL-heavy and ETL workloads<br>• Automatically enabled on Serverless warehouses<br>• Significant gains on scans, aggregations, and joins"
  },
  {
    tema: "Domain 9: Compute",
    pregunta: "What is the difference between All-Purpose and Jobs clusters?",
    respuesta: "<strong>All-Purpose Clusters:</strong><br>• Interactive, for notebooks and exploration<br>• Can be shared among users<br>• Stay running until terminated<br><br><strong>Jobs Clusters:</strong><br>• Created for a specific job<br>• Auto-terminate after job completes<br>• Cheaper and more efficient for production<br>• Cannot be shared"
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 10 — Performance
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 10: Performance",
    pregunta: "What does Query Profile show and how do you use it?",
    respuesta: "<strong>Query Profile</strong> is a visual execution plan that identifies bottlenecks:<br><br>• <strong>Spill to Disk:</strong> Out of memory — needs larger cluster or optimization<br>• <strong>Full Table Scans:</strong> Missing indices/pruning — add clustering or filters<br>• <strong>Skew:</strong> Uneven data distribution across partitions"
  },
  {
    tema: "Domain 10: Performance",
    pregunta: "What is the difference between OPTIMIZE and VACUUM?",
    respuesta: "<strong>OPTIMIZE:</strong><br>• Compacts small files into larger ones<br>• Rewrites data for better read performance<br>• Does NOT delete old files<br><br><strong>VACUUM:</strong><br>• Deletes old, unreferenced files<br>• Saves storage space<br>• <strong>Breaks Time Travel</strong> for deleted versions<br>• Default retention: 7 days"
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 11 — Structures
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 11: Structures",
    pregunta: "What is the difference between CTE, Temp View, and Global Temp View?",
    respuesta: "<strong>CTE:</strong> Scope = Single Query. No persistence.<br><code>WITH cte AS (...) SELECT * FROM cte;</code><br><br><strong>Temp View:</strong> Scope = Session. Until logout.<br><code>CREATE TEMP VIEW v AS ...;</code><br><br><strong>Global Temp View:</strong> Scope = Cluster. Until restart.<br><code>CREATE GLOBAL TEMP VIEW v AS ...;</code>"
  },
  {
    tema: "Domain 11: Structures",
    pregunta: "How do you create a SQL UDF in Databricks?",
    respuesta: "<strong>User Defined Functions</strong> encapsulate reusable logic:<br><br><code>CREATE FUNCTION double_it(x INT)<br>RETURNS INT<br>RETURN x * 2;</code><br><br>Usage: <code>SELECT double_it(price) FROM products;</code><br><br>UDFs can be registered in Unity Catalog for cross-workspace use."
  },
  {
    tema: "Domain 11: Structures",
    pregunta: "What is the difference between Views and Materialized Views?",
    respuesta: "<strong>View:</strong><br>• Logical definition only (no data stored)<br>• Query runs every time<br>• Always up-to-date<br><br><strong>Materialized View:</strong><br>• Stores precomputed results<br>• Faster reads (no recomputation)<br>• Must be refreshed to stay current<br>• Great for expensive aggregations"
  },
  // ══════════════════════════════════════════════════
  // DOMAIN 12 — AI/BI Genie
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 12: AI/BI Genie",
    pregunta: "What are Instructions and Trusted Assets in AI/BI Genie?",
    respuesta: "<strong>Instructions:</strong><br>Plain text rules that teach Genie domain knowledge.<br>Example: 'Churn means a cancelled subscription.'<br><br><strong>Trusted Assets:</strong><br>Verified SQL queries used as ground truth.<br>Genie uses these as reliable examples when generating responses."
  },
  {
    tema: "Domain 12: AI/BI Genie",
    pregunta: "What is the role of a Genie Space?",
    respuesta: "A <strong>Genie Space</strong> is a configured environment for AI/BI Genie:<br><br>• Connected to specific tables and views<br>• Contains curated instructions<br>• Includes trusted SQL queries<br>• Business users ask natural language questions<br>• Genie generates SQL and returns results<br><br><strong>Key:</strong> Quality of instructions determines accuracy."
  },
  // ══════════════════════════════════════════════════
  // CROSS-DOMAIN CONCEPTS
  // ══════════════════════════════════════════════════
  {
    tema: "Cross-Domain",
    pregunta: "What is the key difference between DEEP CLONE and SHALLOW CLONE?",
    respuesta: "<strong>DEEP CLONE:</strong><br>• Copies data + metadata<br>• Independent copy (changes don't affect source)<br>• Takes more time and storage<br><br><strong>SHALLOW CLONE:</strong><br>• Copies metadata only (references source data)<br>• Fast and lightweight<br>• Breaking source files breaks the clone<br>• Good for testing/dev environments"
  },
  {
    tema: "Cross-Domain",
    pregunta: "What is Change Data Feed (CDF)?",
    respuesta: "<strong>CDF</strong> tracks row-level changes (inserts, updates, deletes) in a Delta table.<br><br>Enable: <code>ALTER TABLE t SET TBLPROPERTIES (delta.enableChangeDataFeed = true)</code><br><br>Read changes: <code>SELECT * FROM table_changes('t', start_version)</code><br><br>Columns added: <code>_change_type</code>, <code>_commit_version</code>, <code>_commit_timestamp</code>"
  },
  {
    tema: "Cross-Domain",
    pregunta: "What file format does Delta Lake use internally?",
    respuesta: "<strong>Parquet</strong> — a columnar storage format.<br><br>Delta Lake = <strong>Parquet files + Delta Log (JSON transaction log)</strong><br><br>Benefits of Parquet:<br>• Columnar compression (small footprint)<br>• Predicate pushdown (efficient filtering)<br>• Schema stored in the file metadata<br>• Interoperable with many tools"
  },
  {
    tema: "Cross-Domain",
    pregunta: "What are the four main object types in Unity Catalog?",
    respuesta: "<strong>1. Catalog:</strong> Top-level container (like a database server)<br><strong>2. Schema:</strong> Collection of tables/views (like a database)<br><strong>3. Table:</strong> Data object (managed or external)<br><strong>4. View:</strong> Logical query stored as a definition<br><br>Access pattern: <code>catalog.schema.object</code>"
  },
  // ══════════════════════════════════════════════════
  // NEW — Platform Intelligence & AI Components
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 1: Platform Intelligence",
    pregunta: "What is the Data Intelligence Engine in Databricks?",
    respuesta: "The <strong>Data Intelligence Engine</strong> is the AI brain that powers the entire Databricks platform.<br><br>It infuses intelligence into:<br>• <strong>Databricks Assistant</strong> (AI copilot)<br>• <strong>AI/BI Genie</strong> (natural language analytics)<br>• Auto-optimizations (query tuning, file layout)<br><br>It understands data semantics, metadata, and usage patterns to improve productivity and accuracy."
  },
  {
    tema: "Domain 1: Platform Intelligence",
    pregunta: "What is Databricks Assistant and where can you use it?",
    respuesta: "<strong>Databricks Assistant</strong> is an AI copilot integrated in <strong>Notebooks</strong> and the <strong>SQL Editor</strong>.<br><br>It helps:<br>• Write and debug SQL/Python queries<br>• Explain errors and suggest fixes<br>• Auto-generate documentation for notebooks<br>• Optimize query performance<br><br><strong>Exam Tip:</strong> Know that Assistant is tested in Domain 4 (Executing Queries)."
  },
  {
    tema: "Domain 1: Platform Intelligence",
    pregunta: "What are Mosaic AI and Lakeflow Jobs?",
    respuesta: "<strong>Mosaic AI:</strong><br>• Unified platform for ML and GenAI<br>• Includes Model Serving, Vector Search, Feature Store<br>• For DA exam: know it exists as a platform component<br><br><strong>Lakeflow Jobs:</strong><br>• Workflow orchestration and scheduling<br>• Chains notebooks, SQL queries, and pipelines<br>• Evolution of Databricks Workflows<br>• For DA exam: know it runs scheduled pipelines"
  },
  {
    tema: "Domain 1: Platform Intelligence",
    pregunta: "What is Databricks Marketplace?",
    respuesta: "<strong>Databricks Marketplace</strong> is an open marketplace for discovering and accessing:<br><br>• Datasets from third parties<br>• Notebooks and solutions<br>• ML models<br><br>It allows importing external data <strong>without complex ingestion pipelines</strong>.<br><br><strong>Exam Coverage:</strong><br>• Domain 1: Platform component<br>• Domain 3: Method for importing data"
  },
  // ══════════════════════════════════════════════════
  // NEW — Advanced SQL & Data Modeling
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 4: SQL Warehouses",
    pregunta: "What are Materialized Views and how do they differ from Streaming Tables?",
    respuesta: "<strong>Materialized View:</strong><br>• Stores precomputed query results<br>• Must be REFRESHed to update<br>• Best for expensive aggregations<br>• On-demand or scheduled refresh<br><br><strong>Streaming Table:</strong><br>• Incrementally updates with new data (append-only)<br>• No full recomputation needed<br>• Best for continuous ingestion<br><br><strong>Exam Tip:</strong> Frequently tested: when to use each one."
  },
  {
    tema: "Domain 4: SQL Warehouses",
    pregunta: "What are Federated Queries in Databricks?",
    respuesta: "<strong>Federated Queries</strong> allow you to JOIN Delta tables with external data sources (PostgreSQL, MySQL, SQL Server) <strong>without moving data</strong>.<br><br>• Uses <strong>Foreign Catalogs</strong> in Unity Catalog<br>• Registers connections to external systems<br>• Queries execute in-place<br>• Enables cross-system analytics<br><br><strong>Exam Tip:</strong> Know that federated queries use Foreign Catalogs."
  },
  {
    tema: "Domain 5: Query Analysis",
    pregunta: "How does Query Caching work in Databricks SQL?",
    respuesta: "<strong>Query Caching</strong> automatically stores query results.<br><br>• Same query + same data = <strong>instant result from cache</strong><br>• No recomputation needed<br>• Reduces latency and compute costs<br>• Cache is <strong>automatically invalidated</strong> when underlying data changes<br><br><strong>Exam Tip:</strong> Know that caching reduces development time and query latency (Domain 5 objective)."
  },
  // ══════════════════════════════════════════════════
  // NEW — Dashboard Management
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 6: Dashboards",
    pregunta: "How do Dashboard Permissions and Sharing work?",
    respuesta: "<strong>Permission Levels:</strong><br>• <strong>CAN VIEW:</strong> Read-only access<br>• <strong>CAN RUN:</strong> View + refresh data<br>• <strong>CAN EDIT:</strong> Modify widgets and layout<br><br><strong>Sharing Methods:</strong><br>• Workspace users/groups (direct)<br>• Shareable links (external users without Databricks account)<br>• Embedded in external applications<br><br><strong>Key:</strong> The <strong>Owner</strong> controls all permissions."
  },
  {
    tema: "Domain 6: Dashboards",
    pregunta: "How do you configure Dashboard Scheduling and Refresh?",
    respuesta: "<strong>Dashboard Scheduling:</strong><br>• Configure automatic refresh intervals (1 min to 1 week)<br>• Each visualization updates its underlying query<br>• Uses the configured SQL Warehouse<br><br><strong>Subscribers:</strong><br>• Receive dashboard snapshots via email<br>• Based on the refresh schedule<br><br><strong>Exam Tip:</strong> Know that schedules use the warehouse attached to the dashboard."
  },
  // ══════════════════════════════════════════════════
  // NEW — Data Modeling
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 8: Data Modeling",
    pregunta: "How do Star Schema and Data Vault align with Medallion Architecture?",
    respuesta: "<strong>Star Schema:</strong><br>• Fact table surrounded by dimension tables<br>• Optimized for BI and analytical queries<br>• Best for the <strong>Gold layer</strong> of Medallion<br><br><strong>Data Vault:</strong><br>• Hubs (entities), Links (relationships), Satellites (attributes)<br>• Designed for auditability and traceability<br>• Suited for complex enterprise environments<br><br><strong>Exam Tip:</strong> Both patterns align with the Gold/presentation layer."
  },
  // ══════════════════════════════════════════════════
  // NEW — Data Quality & Governance
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 2: Data Management",
    pregunta: "What are Certified Tables and Tags in Unity Catalog?",
    respuesta: "<strong>Certified Tables:</strong><br>• Marked as trusted, verified data sources<br>• Users can filter Catalog Explorer by certification<br>• Signals data quality and reliability<br><br><strong>Tags:</strong><br>• Key-value labels for classifying data assets<br>• Enable search and discovery across catalogs<br>• Examples: 'pii=true', 'domain=finance'<br><br><strong>Exam Tip:</strong> Certification + Tags help with data discovery (Domain 2)."
  },
  {
    tema: "Domain 2: Data Management",
    pregunta: "How does Data Lineage work in Unity Catalog?",
    respuesta: "<strong>Data Lineage</strong> in Unity Catalog automatically tracks:<br><br>• <strong>Where data comes from</strong> (upstream dependencies)<br>• <strong>What consumes the data</strong> (downstream impact)<br>• Column-level lineage for granular tracking<br><br>Visible in <strong>Catalog Explorer</strong> as an interactive graph.<br><br><strong>Use Cases:</strong><br>• Regulatory compliance and auditing<br>• Impact analysis before schema changes<br>• Root cause analysis for data issues"
  },
  {
    tema: "Domain 9: Securing Data",
    pregunta: "How do Table Ownership and PII Protection work?",
    respuesta: "<strong>Table Ownership:</strong><br>• Owner has full control over permissions<br>• Only Owner or Metastore Admin can GRANT/REVOKE<br>• Ownership can be transferred<br><br><strong>PII Protection:</strong><br>• <strong>Column Masks:</strong> Hide sensitive data (e.g., mask SSN for non-admins)<br>• <strong>Row Filters:</strong> Limit rows visible per user/group<br>• Both configured in Unity Catalog<br><br><strong>Key:</strong> PII = Personally Identifiable Information"
  },
  {
    tema: "Domain 7: AI/BI Genie",
    pregunta: "How do you maintain and optimize a Genie Space?",
    respuesta: "<strong>Maintaining Genie Spaces:</strong><br><br>• <strong>Update Instructions:</strong> Refine text rules based on stakeholder feedback<br>• <strong>Vet Trusted Assets:</strong> Review and approve SQL queries as ground truth<br>• <strong>Refresh Metadata:</strong> Sync Unity Catalog metadata when schemas change<br>• <strong>Validate Accuracy:</strong> Benchmark Genie responses against known queries<br><br><strong>Exam Tip:</strong> Quality of instructions and trusted assets directly determines Genie accuracy."
  },
  {
    tema: "Domain 7: AI/BI Genie",
    pregunta: "How do you share and manage permissions for AI/BI Genie Spaces?",
    respuesta: "<strong>Sharing Genie Spaces:</strong><br>• Grant access to workspace users or groups<br>• Roles: <strong>Owner</strong> (full control), <strong>Editor</strong> (modify instructions), <strong>Viewer</strong> (ask questions only)<br><br><strong>Best Practices:</strong><br>• Limit editor access to data stewards who understand the domain<br>• Review generated queries regularly for accuracy<br>• Use Trusted Assets to prevent hallucinations<br><br><strong>Key:</strong> Genie permissions are separate from table permissions."
  },
  // ══════════════════════════════════════════════════
  // NEW — In-Depth Security & Governance
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 8: Security",
    pregunta: "You have SELECT on a table and USAGE on its schema, but can't see the data. Why?",
    respuesta: "You are missing <strong>USE CATALOG</strong> on the parent catalog.<br><br><strong>Access Path Rule:</strong><br>1. USAGE on Catalog<br>2. USAGE on Schema<br>3. SELECT on Table<br><br>If any link in this chain is missing, access is denied (even for table owners if they aren't workspace admins)."
  },
  {
    tema: "Domain 2: Data Management",
    pregunta: "What is the difference between Transaction Log retention and Data File retention?",
    respuesta: "<strong>Transaction Log (Metadata):</strong> 30 days default. Controls how far back metadata exists.<br><br><strong>Data Files (Physical):</strong> 7 days default. Controls how far back VACUUM leaves data.<br><br><strong>Exam Tip:</strong> Time travel depends on BOTH. If VACUUM runs, you can't go back further than 7 days even if logs exist."
  },
  {
    tema: "Domain 2: Data Management",
    pregunta: "How do you programmatically mark a table as 'Certified' or 'Deprecated'?",
    respuesta: "Use <strong>System Tags</strong> in Unity Catalog:<br><code>ALTER TABLE t SET TAGS ('system.certification_status' = 'certified');</code><br><code>ALTER TABLE t SET TAGS ('system.certification_status' = 'deprecated');</code><br><br>This ensures the status is visible in Catalog Explorer filters."
  },
  // ══════════════════════════════════════════════════
  // NEW — Advanced SQL & Arrays
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 6: Executing Queries",
    pregunta: "How do you check if an array 'tags' contains the value 'sql'?",
    respuesta: "Use the <strong>'val' IN array</strong> syntax:<br><code>SELECT * FROM table WHERE 'sql' IN (tags);</code><br><br><strong>Note:</strong> <code>array_contains(tags, 'sql')</code> also works, but the 'IN' syntax is more common in the exam. <code>tags = 'sql'</code> will fail as it compares an array to a string."
  },
  {
    tema: "Domain 6: Executing Queries",
    pregunta: "What is the result of running 'USE CATALOG main; USE SCHEMA default;'?",
    respuesta: "It sets the <strong>Session Namespace</strong>. Subsequent queries like <code>SELECT * FROM my_table;</code> will automatically resolve to <code>main.default.my_table</code>.<br><br>This avoids qualified names in every query for the duration of that session."
  },
  // ══════════════════════════════════════════════════
  // NEW — Platform & AI/BI
  // ══════════════════════════════════════════════════
  {
    tema: "Domain 1: Platform Understanding",
    pregunta: "What is the Data Intelligence Engine (DIE)?",
    respuesta: "The AI 'brain' of the Lakehouse. It infuses machine learning into the platform to:<br>• Understand data semantics (column meaning)<br>• Power the Assistant and Genie<br>• Automate optimizations (Predictive Optimization)<br>• Improve query performance automatically."
  },
  {
    tema: "Domain 7: AI/BI Genie",
    pregunta: "Genie is giving inaccurate answers. What is the BEST first step to fix it?",
    respuesta: "<strong>Update Instructions</strong> and add <strong>Trusted Assets</strong> (SQL examples).<br><br>Adding more tables often adds noise. Turning off feedback prevents learning. Instructions guide logic; Trusted Assets provide verified ground-truth patterns."
  },
  {
    tema: "Domain 4: SQL Warehouses",
    pregunta: "What are Lakeflow Spark Declarative Pipelines?",
    respuesta: "A <strong>declarative (YAML/JSON)</strong> way to define ETL pipelines. <br><br>Key Features:<br>• Automatic data quality enforcement (expectations)<br>• Error handling without manual code<br>• Fully managed by Databricks<br>• Focus on 'What to do' rather than 'How to code it'."
  },
  {
    tema: "Domain 3: Importing Data",
    pregunta: "¿Qué hace el modo 'rescue' en Auto Loader?",
    respuesta: "Captura automáticamente datos que no coinciden con el esquema esperado en una columna JSON llamada <strong>_rescued_data</strong>, evitando que la query falle y permitiendo auditar datos corruptos."
  },
  {
    tema: "Domain 3: Importing Data",
    pregunta: "¿Cuál es el propósito de COPY INTO ... VALIDATE?",
    respuesta: "Permite realizar un <strong>'dry-run'</strong> de la carga de datos para identificar errores de formato, delimitadores o tipos antes de que se inserten registros reales en la tabla Delta."
  },
  {
    tema: "Domain 3: Importing Data",
    pregunta: "¿Listing vs Notifications en Auto Loader?",
    respuesta: "<strong>Directory Listing</strong> escanea el bucket recursivamente (lento a gran escala). <strong>File Notifications</strong> usa servicios de nube (SQS/SNS) para actuar solo sobre archivos nuevos, siendo mucho más eficiente para millones de archivos."
  },
  {
    tema: "Domain 3: Importing Data",
    pregunta: "¿Cómo auditar archivos cargados vía COPY INTO?",
    respuesta: "Ejecutando <code>DESCRIBE HISTORY table_name;</code> y analizando el campo <strong>operationMetrics</strong> de la transacción correspondiente, donde se listan metadatos de la ingesta."
  },
  {
    tema: "Domain 9: Securing Data",
    pregunta: "¿Storage Credential vs External Location?",
    respuesta: "El <strong>Storage Credential</strong> es el objeto que contiene el acceso seguro (IAM/Role) a la nube. El <strong>External Location</strong> es el path específico que usa dicha credencial para otorgar acceso a los usuarios."
  },
  {
    tema: "Domain 6: Dashboards & Visualizations",
    pregunta: "¿Cómo evitar refrescos constantes al cambiar filtros?",
    respuesta: "Desactivando <strong>'Automatic Update'</strong> en la configuración del filtro para permitir cambios por 'lotes' de filtros antes de refrescar manualmente."
  },
  {
    tema: "Domain 6: Dashboards & Visualizations",
    pregunta: "¿Cómo crear Table Hyperlinks dinámicos?",
    respuesta: "Cambiando el tipo de columna a <strong>'Link'</strong> y usando <code>{{column_name}}</code> dentro del template de la URL."
  },
  {
    tema: "Domain 6: Dashboards & Visualizations",
    pregunta: "¿Qué sucede con un Schedule si el Owner es eliminado?",
    respuesta: "El refresh <strong>fallará</strong>, ya que no hay una identidad válida para la ejecución. Se debe transferir la propiedad del dashboard o usar un Service Principal."
  },
  {
    tema: "Domain 6: Dashboards & Visualizations",
    pregunta: "¿Qué es Cross-Filtering?",
    respuesta: "Un feature interactivo que permite que un gráfico (ej. barras) actúe como filtro para el resto de la página al hacer click en un elemento visual."
  },
  {
    tema: "Domain 6: Dashboards & Visualizations",
    pregunta: "¿Run as Owner vs Run as Viewer en Dashboards?",
    respuesta: "<strong>Run as Owner:</strong> Los usuarios ven la data sin tener permisos directos a las tablas. <strong>Run as Viewer:</strong> Requiere que el usuario final tenga permisos en el Warehouse y en la Data fuente."
  },
  {
    tema: "Domain 7: AI/BI Genie Spaces",
    pregunta: "¿Qué es un 'Trusted Asset' en Genie?",
    respuesta: "Una consulta SQL <strong>verificada y predefinida</strong> que Genie usa cuando detecta una pregunta relacionada, garantizando 100% de precisión en métricas clave."
  },
  {
    tema: "Domain 7: AI/BI Genie Spaces",
    pregunta: "¿Por qué son vitales los comentarios en Unity Catalog?",
    respuesta: "Genie usa los <strong>comentarios de tablas y columnas</strong> como contexto semántico para entender el lenguaje natural. Sin metadatos, Genie no puede distinguir términos de negocio similares."
  },
  {
    tema: "Domain 7: AI/BI Genie Spaces",
    pregunta: "¿Permisos mínimos para un consumidor de Genie?",
    respuesta: "El permiso <strong>'Can Use'</strong>, que permite hacer preguntas y ver resultados sin modificar la configuración del espacio."
  },
  {
    tema: "Domain 7: AI/BI Genie Spaces",
    pregunta: "¿Cómo mejorar Genie tras un feedback negativo (Thumbs Down)?",
    respuesta: "Revisando el historial, corrigiendo el SQL generado manualmente y guardándolo como una <strong>Sample Question</strong> o 'Trusted Asset'."
  }
];

