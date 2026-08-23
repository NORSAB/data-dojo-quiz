// BATCH 1: 32 NEW ELITE QUESTIONS — Platform Understanding (11), Data Modeling (10), AI/BI Genie (10), Securing Data (1)
// IDs: db-da-301 to db-da-332

// ============ PLATFORM UNDERSTANDING (11 questions) ============

  {
    "id": "db-da-301",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst's Serverless SQL Warehouse starts in under 5 seconds, but a colleague's Classic SQL Warehouse takes over 4 minutes to become available. Both are configured with the same cluster size. The colleague asks why there is such a significant difference.\n\nWhich explanation correctly identifies the root cause of the startup time difference?",
    "options": [
      {"id": "a", "text": "Serverless warehouses use pre-warmed compute pools managed by Databricks, eliminating cold-start provisioning delays that Classic warehouses experience."},
      {"id": "b", "text": "Classic warehouses require manual driver installation before each startup, while Serverless warehouses cache the drivers permanently."},
      {"id": "c", "text": "Serverless warehouses run on the Control Plane with lower latency, while Classic warehouses must provision resources in the customer's Data Plane."},
      {"id": "d", "text": "Classic warehouses need to download Delta Lake libraries on each startup, while Serverless warehouses have them pre-installed."},
      {"id": "e", "text": "Serverless warehouses bypass the Unity Catalog authentication step, while Classic warehouses must authenticate on every restart."}
    ],
    "correctIds": ["a"],
    "explanation": "Serverless SQL Warehouses achieve near-instant startup (2-6 seconds) because Databricks maintains pre-warmed compute pools. Classic warehouses must provision cloud VMs from scratch in the customer's cloud account, which takes minutes. Both still run in the Data Plane and authenticate through Unity Catalog.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-302",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A company is evaluating Databricks for their analytics workloads. The security team is concerned about data privacy and wants to understand where customer data is stored and processed.\n\nWhich statement accurately describes the separation between the Control Plane and Data Plane in the Databricks Lakehouse architecture?",
    "options": [
      {"id": "a", "text": "The Control Plane stores all customer data in encrypted form, while the Data Plane handles only query execution and returns results."},
      {"id": "b", "text": "The Control Plane manages the UI, job orchestration, and notebook management, while customer data remains in the Data Plane within the customer's own cloud account."},
      {"id": "c", "text": "Both planes store customer data, but the Control Plane only stores metadata while the Data Plane stores the raw files."},
      {"id": "d", "text": "The Data Plane is managed entirely by Databricks and the Control Plane resides in the customer's cloud infrastructure."},
      {"id": "e", "text": "The Control Plane and Data Plane are interchangeable terms for the same infrastructure component."}
    ],
    "correctIds": ["b"],
    "explanation": "The Control Plane is managed by Databricks and handles orchestration (UI, notebooks, job scheduling, cluster management). The Data Plane resides in the customer's cloud account (AWS/Azure/GCP) where actual data is stored and processed. Databricks never sees the content of customer data.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-303",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to choose between a Pro SQL Warehouse and a Serverless SQL Warehouse for a new analytics project. The project involves complex aggregation queries on a 500GB Delta table that run every 15 minutes via a scheduled dashboard.\n\nWhich factor is the MOST important consideration when choosing between Pro and Serverless for this specific workload?",
    "options": [
      {"id": "a", "text": "Serverless warehouses do not support Photon, so Pro is needed for optimal query performance on large tables."},
      {"id": "b", "text": "Pro warehouses support more concurrent queries than Serverless warehouses."},
      {"id": "c", "text": "The cost model differs: Serverless charges per-query with instant scaling, while Pro requires the warehouse to remain running between the 15-minute intervals or pay cold-start penalties."},
      {"id": "d", "text": "Serverless warehouses cannot connect to Unity Catalog, making Pro the only option for governed data."},
      {"id": "e", "text": "Pro warehouses have exclusive access to the Query Profile tool, which is essential for optimizing complex aggregations."}
    ],
    "correctIds": ["c"],
    "explanation": "The key trade-off is the cost model. With 15-minute refresh intervals, a Pro warehouse either stays running (costly) or shuts down and cold-starts each time (slow). Serverless offers instant startup and scales automatically, paying only for compute used. Both support Photon, Unity Catalog, and Query Profile.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-304",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A team is debating whether to use Databricks SQL or Databricks Notebooks for their daily analytics workflow. The team primarily writes SQL queries, creates dashboards, and sets up alerts for KPI monitoring.\n\nWhich statement correctly describes when Databricks SQL should be preferred over Notebooks?",
    "options": [
      {"id": "a", "text": "Databricks SQL should be used when the team needs to write Python or Scala code for complex transformations."},
      {"id": "b", "text": "Databricks SQL is preferred for SQL-centric workflows that include query authoring, dashboard creation, alerting, and direct BI tool connectivity through SQL Warehouses."},
      {"id": "c", "text": "Notebooks should always be preferred because they support SQL cells and offer more flexibility than the SQL Editor."},
      {"id": "d", "text": "Databricks SQL is only appropriate for ad-hoc queries and cannot be used for production workloads."},
      {"id": "e", "text": "Databricks SQL requires a separate license from the standard Databricks platform subscription."}
    ],
    "correctIds": ["b"],
    "explanation": "Databricks SQL is purpose-built for SQL-centric analytics workflows: SQL Editor for queries, native dashboards, alerting on query results, and SQL Warehouses that BI tools connect to directly. Notebooks are better suited for multi-language, exploratory, or ML workloads.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-305",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs `DESCRIBE EXTENDED sales.transactions` and notices the `Type` field shows `MANAGED`. The analyst then runs `DROP TABLE sales.transactions`.\n\nAfter the table is dropped, what happens to the underlying data files?",
    "options": [
      {"id": "a", "text": "The data files remain in cloud storage and can be accessed using the Delta path directly."},
      {"id": "b", "text": "The metadata is removed but the data files are preserved because Unity Catalog protects all data by default."},
      {"id": "c", "text": "Both the metadata in the metastore and the underlying data files are permanently deleted."},
      {"id": "d", "text": "The data files are moved to a recycle bin and can be recovered within 30 days."},
      {"id": "e", "text": "The data files are preserved but marked as read-only to prevent accidental access."}
    ],
    "correctIds": ["c"],
    "explanation": "For MANAGED tables, DROP TABLE removes both the metadata from the metastore AND the underlying data files. This is the key distinction from EXTERNAL tables, where DROP only removes metadata while data files remain untouched in storage.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-306",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An organization is migrating from a traditional data warehouse to the Databricks Lakehouse Platform. The CTO asks: 'What makes a Lakehouse different from simply putting a data warehouse on top of a data lake?'\n\nWhich response best captures the fundamental architectural innovation of the Lakehouse?",
    "options": [
      {"id": "a", "text": "The Lakehouse uses a proprietary file format that is incompatible with open-source tools, ensuring performance through vendor lock-in."},
      {"id": "b", "text": "Delta Lake adds ACID transactions, schema enforcement, and time travel directly on top of open Parquet files in cloud storage, eliminating the need for a separate warehouse layer."},
      {"id": "c", "text": "The Lakehouse stores structured data in a warehouse and unstructured data in a lake, keeping them as separate systems with a unified query interface."},
      {"id": "d", "text": "The Lakehouse replaces cloud storage with a new distributed file system that provides faster I/O than S3 or ADLS."},
      {"id": "e", "text": "The Lakehouse is simply a marketing term for a data lake with built-in visualization tools."}
    ],
    "correctIds": ["b"],
    "explanation": "The Lakehouse innovation is Delta Lake: Parquet files + Transaction Log = warehouse-quality reliability (ACID, schema enforcement, time travel) directly on cheap cloud storage. No separate warehouse copy needed. Data remains in open formats (Parquet), avoiding vendor lock-in.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-307",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is troubleshooting slow dashboard performance and discovers the SQL Warehouse has Photon disabled. The analyst enables Photon by switching to a Pro warehouse type.\n\nWhich statement accurately describes how Photon improves query performance?",
    "options": [
      {"id": "a", "text": "Photon replaces Spark entirely with a GPU-accelerated engine that requires rewriting queries in a Photon-specific syntax."},
      {"id": "b", "text": "Photon is a vectorized query engine written in C++ that accelerates Spark SQL workloads without requiring any code changes, achieving up to 12x faster performance."},
      {"id": "c", "text": "Photon works by pre-computing all possible query results and caching them, so queries return instantly from cache."},
      {"id": "d", "text": "Photon only accelerates Python and Scala workloads; SQL queries do not benefit from Photon optimization."},
      {"id": "e", "text": "Photon compresses data files to 10% of their original size, making I/O operations faster."}
    ],
    "correctIds": ["b"],
    "explanation": "Photon is a native vectorized query engine written in C++ that runs alongside Spark. It accelerates SQL and DataFrame workloads transparently — no code changes required. Benchmarks show up to 12x performance improvement on compatible workloads. It's available on Pro and Serverless SQL Warehouses.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-308",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to connect Tableau to Databricks for interactive dashboarding. The analyst has access to both a Databricks cluster and a SQL Warehouse.\n\nWhich compute resource should the analyst use for the Tableau connection, and why?",
    "options": [
      {"id": "a", "text": "A cluster, because Tableau requires a Spark context that only clusters provide."},
      {"id": "b", "text": "A SQL Warehouse, because it provides an ODBC/JDBC endpoint optimized for BI tool connectivity and concurrent query execution."},
      {"id": "c", "text": "Either resource works identically; there is no performance or functionality difference for BI tools."},
      {"id": "d", "text": "Tableau can only connect to Databricks through the REST API, so neither clusters nor SQL Warehouses are directly used."},
      {"id": "e", "text": "A cluster configured with the Tableau driver package, because SQL Warehouses do not support third-party BI tools."}
    ],
    "correctIds": ["b"],
    "explanation": "SQL Warehouses are designed for BI tool connectivity. They expose ODBC/JDBC endpoints, handle high concurrency efficiently, and are optimized for the interactive query patterns that BI tools like Tableau, Power BI, and Looker generate. Clusters are better suited for notebooks and ETL.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-309",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to browse available tables, view their schemas, check column-level comments, and review access permissions — all without writing any SQL.\n\nWhich Databricks feature provides this capability?",
    "options": [
      {"id": "a", "text": "The SQL Editor's autocomplete feature, which displays schema information inline."},
      {"id": "b", "text": "Catalog Explorer (Data Explorer), which provides a visual interface for browsing data objects, viewing metadata, and managing permissions."},
      {"id": "c", "text": "The Databricks CLI, which provides a `databricks tables list` command for schema browsing."},
      {"id": "d", "text": "Delta Live Tables (DLT) pipeline viewer, which shows all tables and their lineage."},
      {"id": "e", "text": "The Workspace file browser, where tables appear as files that can be previewed."}
    ],
    "correctIds": ["b"],
    "explanation": "Catalog Explorer (formerly Data Explorer) is the visual interface in Databricks for discovering, browsing, and governing data assets. It shows catalogs, schemas, tables, columns, comments, tags, lineage, and permissions — all without writing SQL.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-310",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An organization wants to connect their HR system (Workday) to Databricks for automated employee data ingestion. A data engineer suggests using Partner Connect.\n\nWhat does Partner Connect automate in this integration scenario?",
    "options": [
      {"id": "a", "text": "It automatically transforms the HR data into the medallion architecture format before loading."},
      {"id": "b", "text": "It provisions a SQL Warehouse and configures the connection credentials so the partner tool (Workday/Fivetran) can push data into Databricks with minimal manual setup."},
      {"id": "c", "text": "It creates a direct VPN tunnel between the HR system and the Databricks workspace for secure data transfer."},
      {"id": "d", "text": "It automatically generates ETL notebooks that extract data from the partner system."},
      {"id": "e", "text": "It replaces the need for the partner tool entirely by providing built-in connectors for all supported systems."}
    ],
    "correctIds": ["b"],
    "explanation": "Partner Connect streamlines integration by automatically provisioning a SQL Warehouse (or cluster) and configuring the authentication credentials needed for the partner tool to connect. It reduces setup from hours to minutes but still requires the partner tool (e.g., Fivetran) to handle the actual data movement.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-311",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst notices that their SQL Warehouse has an 'Auto Stop' setting of 10 minutes and a dashboard refresh schedule of every 30 minutes. The analyst observes that the warehouse frequently cold-starts, adding 3-4 minutes of delay to each refresh.\n\nWhat is the most cost-effective solution to eliminate the cold-start delays while keeping costs manageable?",
    "options": [
      {"id": "a", "text": "Disable Auto Stop completely so the warehouse never shuts down."},
      {"id": "b", "text": "Switch to a Serverless SQL Warehouse, which provides near-instant startup (2-6 seconds) and only charges for compute used during query execution."},
      {"id": "c", "text": "Increase the Auto Stop timer to 35 minutes so the warehouse stays warm between refreshes."},
      {"id": "d", "text": "Add a dummy query that runs every 5 minutes to keep the warehouse alive."},
      {"id": "e", "text": "Reduce the dashboard refresh interval to every 5 minutes to keep the warehouse constantly active."}
    ],
    "correctIds": ["b"],
    "explanation": "Serverless SQL Warehouses solve the cold-start vs cost dilemma: they start in 2-6 seconds (no cold-start penalty) and auto-scale to zero when idle (no cost for idle time). Options C and D waste resources keeping the warehouse artificially alive.",
    "domain": "Platform Understanding"
  },
  {
    "id": "db-da-312",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is designing a dimensional model for a retail company in the Gold layer. The fact table `fact_sales` contains transaction records, and the dimension tables include `dim_product`, `dim_store`, `dim_date`, and `dim_customer`. Each dimension table has a surrogate key.\n\nWhich modeling pattern best describes this architecture?",
    "options": [
      {"id": "a", "text": "A snowflake schema where dimension tables are normalized into sub-dimensions for storage efficiency."},
      {"id": "b", "text": "A star schema where the central fact table connects directly to denormalized dimension tables via foreign keys."},
      {"id": "c", "text": "A data vault model with hub, link, and satellite tables for historized data loading."},
      {"id": "d", "text": "A flat table design where all dimensions are embedded as columns in the fact table."},
      {"id": "e", "text": "A graph model where products, stores, and customers are represented as nodes with relationship edges."}
    ],
    "correctIds": ["b"],
    "explanation": "A star schema has a central fact table surrounded by denormalized dimension tables. Each dimension connects directly to the fact table via foreign keys. This is the most common pattern in the Gold layer for Databricks analytics, optimized for query performance and simplicity.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-313",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A BI analyst is building a reporting layer in Databricks. The Bronze layer contains raw JSON event logs, the Silver layer has cleaned and deduplicated event records, and the Gold layer must provide aggregated daily metrics by product category.\n\nWhich statement correctly maps the medallion layers to their data characteristics?",
    "options": [
      {"id": "a", "text": "Bronze stores aggregated KPIs, Silver stores cleaned records, Gold stores raw ingested data."},
      {"id": "b", "text": "Bronze stores raw data as-is (append-only), Silver stores cleaned/deduplicated data (source of truth), Gold stores business-level aggregations ready for dashboards."},
      {"id": "c", "text": "All three layers store the same data but with different access permissions applied."},
      {"id": "d", "text": "Bronze and Silver are optional staging areas; only Gold contains actual queryable tables."},
      {"id": "e", "text": "Bronze stores external data, Silver stores internal data, and Gold merges both into a unified view."}
    ],
    "correctIds": ["b"],
    "explanation": "The medallion architecture progressively refines data: Bronze = raw ingestion (append-only, no transformations), Silver = cleaned, deduplicated, joined data (enterprise source of truth), Gold = business-level aggregations optimized for analyst consumption (dashboards, reports).",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-314",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to create a Gold-layer table that shows monthly revenue by region. The source data in the Silver layer has one row per transaction with columns: `transaction_id`, `region`, `amount`, `transaction_date`.\n\nWhich SQL approach correctly creates this Gold-layer aggregation as a managed Delta table?",
    "options": [
      {"id": "a", "text": "CREATE VIEW gold.monthly_revenue AS SELECT region, DATE_TRUNC('month', transaction_date) AS month, SUM(amount) AS revenue FROM silver.transactions GROUP BY region, month;"},
      {"id": "b", "text": "CREATE OR REPLACE TABLE gold.monthly_revenue AS SELECT region, DATE_TRUNC('month', transaction_date) AS month, SUM(amount) AS revenue FROM silver.transactions GROUP BY region, DATE_TRUNC('month', transaction_date);"},
      {"id": "c", "text": "INSERT INTO gold.monthly_revenue SELECT * FROM silver.transactions WHERE amount > 0;"},
      {"id": "d", "text": "CREATE EXTERNAL TABLE gold.monthly_revenue LOCATION 's3://bucket/gold/' AS SELECT region, SUM(amount) FROM silver.transactions;"},
      {"id": "e", "text": "MERGE INTO gold.monthly_revenue USING silver.transactions ON 1=1 WHEN MATCHED THEN UPDATE SET revenue = amount;"}
    ],
    "correctIds": ["b"],
    "explanation": "CREATE OR REPLACE TABLE ... AS SELECT creates a managed Delta table with the aggregated results. Option A creates a VIEW (not a materialized table). The GROUP BY must reference the expression directly (DATE_TRUNC), not the alias. Gold-layer tables should be materialized for dashboard performance.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-315",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst discovers that an important fact table has a composite primary key consisting of `order_id` and `line_item_id`. The analyst needs to ensure that no duplicate combinations exist when new data is merged from the Silver layer.\n\nWhich Delta Lake operation is most appropriate to handle this upsert scenario?",
    "options": [
      {"id": "a", "text": "INSERT INTO with a WHERE NOT EXISTS subquery to filter existing records."},
      {"id": "b", "text": "MERGE INTO with a match condition on both order_id AND line_item_id, specifying WHEN MATCHED THEN UPDATE and WHEN NOT MATCHED THEN INSERT."},
      {"id": "c", "text": "DELETE all existing records and re-INSERT the complete dataset from Silver."},
      {"id": "d", "text": "CREATE OR REPLACE TABLE to rebuild the entire Gold table on each run."},
      {"id": "e", "text": "Use COPY INTO to append data, as it automatically deduplicates based on primary keys."}
    ],
    "correctIds": ["b"],
    "explanation": "MERGE INTO (upsert) is the correct Delta Lake operation for deduplication with composite keys. It matches on the composite key (order_id + line_item_id), updates existing records, and inserts new ones. COPY INTO does NOT deduplicate — it only provides idempotent file ingestion.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-316",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is designing a star schema for a healthcare analytics dashboard. The fact table `fact_visits` has foreign keys to `dim_patient`, `dim_doctor`, `dim_facility`, and `dim_date`. A stakeholder asks why dimension tables have surrogate keys instead of using the natural business keys directly.\n\nWhich reason best justifies the use of surrogate keys in dimension tables?",
    "options": [
      {"id": "a", "text": "Surrogate keys are required by Delta Lake and cannot be replaced with natural keys."},
      {"id": "b", "text": "Surrogate keys provide stable, immutable identifiers that protect the model from changes in source system business keys and enable tracking of slowly changing dimensions."},
      {"id": "c", "text": "Natural keys consume more storage space than integer surrogate keys, and the sole purpose is storage optimization."},
      {"id": "d", "text": "Surrogate keys enable encryption of dimension records, which natural keys cannot support."},
      {"id": "e", "text": "Surrogate keys are only necessary when using snowflake schemas, not star schemas."}
    ],
    "correctIds": ["b"],
    "explanation": "Surrogate keys decouple the data warehouse from source system changes. If a natural key changes (e.g., patient ID format changes), the surrogate key remains stable. They also enable Slowly Changing Dimensions (SCD) by allowing multiple historical versions of a dimension record with different surrogate keys.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-317",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst queries a Silver-layer table and notices it contains columns from three different source systems joined together: CRM contacts, ERP orders, and web analytics sessions. The table has been deduplicated on `customer_email`.\n\nWhich medallion architecture principle does this table best represent?",
    "options": [
      {"id": "a", "text": "Bronze: raw ingestion of multiple sources into a single landing table."},
      {"id": "b", "text": "Gold: business-ready aggregations for dashboard consumption."},
      {"id": "c", "text": "Silver: the enterprise data source of truth where cleaned, joined, and deduplicated data from multiple sources converges."},
      {"id": "d", "text": "This violates medallion architecture principles because multiple sources should never be combined in a single table."},
      {"id": "e", "text": "Platinum: an unofficial fourth layer for cross-source integrated datasets."}
    ],
    "correctIds": ["c"],
    "explanation": "The Silver layer is the 'Enterprise Source of Truth.' It's where data from multiple Bronze sources is cleaned, joined, deduplicated, and conformed. The key indicators are: data from multiple sources, deduplication applied, and schema enforcement — all Silver-layer characteristics.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-318",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst must decide between creating a VIEW and a materialized TABLE in the Gold layer for a dashboard query that aggregates 50 million Silver-layer records into 500 summary rows.\n\nWhich approach should the analyst choose and why?",
    "options": [
      {"id": "a", "text": "A VIEW, because it always returns fresh data and consumes no additional storage."},
      {"id": "b", "text": "A TABLE (CTAS), because the dashboard will read 500 pre-computed rows instead of re-aggregating 50 million rows on every refresh, dramatically improving performance."},
      {"id": "c", "text": "A VIEW, because Gold-layer objects should never be materialized tables."},
      {"id": "d", "text": "A TEMPORARY VIEW, because dashboard queries are always session-scoped."},
      {"id": "e", "text": "There is no performance difference between a VIEW and a TABLE for aggregation queries in Databricks."}
    ],
    "correctIds": ["b"],
    "explanation": "For dashboard performance, a materialized Gold-layer TABLE (created via CTAS) is preferred when aggregating large volumes. The dashboard reads 500 pre-computed rows instead of re-executing a 50M-row aggregation on every refresh. The table is refreshed on a schedule (e.g., via Workflows) to balance freshness and performance.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-319",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is working with a Delta table that stores customer records. The business requires tracking historical changes to customer addresses over time (Type 2 SCD). Which approach enables the analyst to maintain both current and historical address records?\n\nWhich Delta Lake feature combination supports this requirement?",
    "options": [
      {"id": "a", "text": "Use Time Travel with VERSION AS OF to query any historical state of the table on demand."},
      {"id": "b", "text": "Use MERGE INTO with custom logic that inserts new records for changed addresses while marking previous records with an end_date, maintaining a full audit trail."},
      {"id": "c", "text": "Enable Auto Loader to automatically version customer records as they change."},
      {"id": "d", "text": "Use OPTIMIZE with ZORDER BY address to keep historical addresses together for fast retrieval."},
      {"id": "e", "text": "Enable Change Data Feed (CDF) which automatically creates a Type 2 SCD table."}
    ],
    "correctIds": ["b"],
    "explanation": "Type 2 SCD requires maintaining multiple rows per entity with effective dates. MERGE INTO with custom logic handles this: when an address changes, the existing record gets an end_date, and a new record is inserted. Time Travel provides point-in-time queries but doesn't maintain a persistent historical dimension. CDF tracks changes but doesn't auto-create SCD tables.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-320",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst notices that a fact table in the Gold layer contains both `product_name` and `product_category` columns embedded directly, rather than referencing a `dim_product` table via a foreign key.\n\nWhat problem does this denormalized design create for analytics?",
    "options": [
      {"id": "a", "text": "No problem — Gold-layer fact tables should always contain denormalized dimension attributes for query performance."},
      {"id": "b", "text": "If a product is reclassified to a different category, the historical fact records will have inconsistent category values because the change is not propagated to already-recorded transactions."},
      {"id": "c", "text": "Denormalized fact tables cannot be queried with SQL GROUP BY clauses."},
      {"id": "d", "text": "The only issue is increased storage cost; there are no analytical implications."},
      {"id": "e", "text": "Denormalized fact tables prevent the use of Delta Lake features like Time Travel."}
    ],
    "correctIds": ["b"],
    "explanation": "Embedding dimension attributes directly in fact tables creates update anomalies. If a product's category changes, only new transactions reflect the update — historical records retain the old category. A proper star schema with a dim_product table allows the dimension to be updated once, and all queries reflect the current categorization (or use SCD for historical tracking).",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-321",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst configures a new Genie space. After adding three Unity Catalog tables (customers, orders, products), the analyst notices that Genie generates incorrect SQL when users ask about 'revenue' because the column is actually named `total_amount_usd`.\n\nWhat is the most effective action to resolve this issue?",
    "options": [
      {"id": "a", "text": "Rename the column from `total_amount_usd` to `revenue` in the source table to match user expectations."},
      {"id": "b", "text": "Add table and column descriptions/comments in Unity Catalog that explain business context, such as 'total_amount_usd represents the revenue from each transaction in US dollars.'"},
      {"id": "c", "text": "Create a separate view that aliases the column as `revenue` and add only the view to the Genie space."},
      {"id": "d", "text": "Add a Trusted Asset (sample SQL query) that demonstrates the correct column usage for revenue calculations."},
      {"id": "e", "text": "Both B and D: add descriptive comments to the catalog AND create Trusted Assets with sample queries."}
    ],
    "correctIds": ["e"],
    "explanation": "The best approach combines both: (B) adding column/table descriptions in Unity Catalog helps Genie understand the semantic meaning of columns, and (D) Trusted Assets provide vetted SQL examples that Genie uses as templates for similar questions. Together they teach Genie the correct business vocabulary mapping.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-322",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has configured a Genie space with 5 tables. Business users report that Genie sometimes returns queries that join tables incorrectly, producing inflated numbers due to many-to-many relationships.\n\nWhich configuration step would most effectively prevent this issue?",
    "options": [
      {"id": "a", "text": "Remove all but one table from the Genie space to eliminate joins entirely."},
      {"id": "b", "text": "Add primary key and foreign key constraints as table comments in Unity Catalog, and create Trusted Assets with verified join patterns."},
      {"id": "c", "text": "Enable the 'strict join mode' setting in the Genie space configuration."},
      {"id": "d", "text": "Ask users to specify exact join conditions in their natural language questions."},
      {"id": "e", "text": "Replace the underlying tables with pre-joined flat tables that eliminate the need for any joins."}
    ],
    "correctIds": ["b"],
    "explanation": "Genie uses table metadata (including documented relationships) and Trusted Assets to generate correct joins. By documenting PKs/FKs in catalog comments and providing sample queries with correct join patterns, the analyst teaches Genie the proper relationships. There is no 'strict join mode' — Genie relies on metadata and examples.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-323",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is evaluating whether a user question that Genie answered correctly should be saved as a Trusted Asset. The question was: 'Show me total sales by region for Q3.'\n\nWhat is a Trusted Asset in the context of AI/BI Genie Spaces?",
    "options": [
      {"id": "a", "text": "A certified Delta table that has been approved by an administrator for use in AI-generated queries."},
      {"id": "b", "text": "A vetted, pre-written SQL query that Genie uses as a reference template when answering similar natural language questions, ensuring accuracy and consistency."},
      {"id": "c", "text": "A machine learning model trained on company-specific data that enhances Genie's language understanding."},
      {"id": "d", "text": "A read-only dashboard widget connected to a Genie space."},
      {"id": "e", "text": "A user role with elevated permissions to validate Genie-generated queries before execution."}
    ],
    "correctIds": ["b"],
    "explanation": "Trusted Assets are verified SQL queries saved by analysts that Genie uses as templates for answering similar questions. When a user asks something similar to a Trusted Asset, Genie adapts the verified query rather than generating SQL from scratch, significantly improving accuracy.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-324",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is setting up a Genie space for the finance team. The underlying tables contain sensitive salary data that only HR should see. The finance team should only see aggregated department budgets.\n\nHow does Genie handle data access permissions?",
    "options": [
      {"id": "a", "text": "Genie has its own permission system separate from Unity Catalog, and the analyst must configure access within the Genie space settings."},
      {"id": "b", "text": "Genie inherits Unity Catalog permissions — users can only query data they already have SELECT access to, so the analyst should ensure the finance team lacks access to the salary table."},
      {"id": "c", "text": "Genie automatically masks sensitive columns detected by AI, regardless of Unity Catalog permissions."},
      {"id": "d", "text": "All users who can access a Genie space automatically have full access to all tables configured in that space."},
      {"id": "e", "text": "Genie can only access data through service accounts, bypassing individual user permissions."}
    ],
    "correctIds": ["b"],
    "explanation": "Genie respects Unity Catalog's permission model. When a user queries through Genie, the SQL runs under their identity. If they lack SELECT permission on a table or column, the query fails. The analyst should only add tables the target audience has access to, or use column masking/row-level security in Unity Catalog.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-325",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "After deploying a Genie space, a data analyst reviews the conversation history and finds that 30% of user questions received responses flagged by users as inaccurate.\n\nWhat is the recommended iterative improvement workflow for enhancing Genie accuracy?",
    "options": [
      {"id": "a", "text": "Delete the Genie space and create a new one with different tables."},
      {"id": "b", "text": "Review flagged responses, identify patterns in misunderstood queries, then add Sample Questions with correct SQL and create Trusted Assets for recurring question types."},
      {"id": "c", "text": "Retrain the Genie language model on company-specific data using fine-tuning APIs."},
      {"id": "d", "text": "Reduce the number of tables in the space until accuracy improves above 90%."},
      {"id": "e", "text": "Switch to a larger SQL Warehouse to give Genie more compute for query generation."}
    ],
    "correctIds": ["b"],
    "explanation": "Genie improvement is iterative: (1) review conversation history and flagged responses, (2) identify patterns in incorrect answers, (3) add curated Sample Questions with correct SQL, (4) create Trusted Assets for recurring query types. The LLM cannot be fine-tuned — it's guided through examples and metadata.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-326",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is configuring a Genie space for the logistics team. The space needs tables about shipments, warehouses, and delivery routes. The analyst has editor-level access to the Genie space.\n\nWhat is the correct sequence of steps to configure an effective Genie space?",
    "options": [
      {"id": "a", "text": "1) Create the space → 2) Add SQL Warehouse → 3) Write and test queries → 4) Invite users → 5) Monitor and refine."},
      {"id": "b", "text": "1) Create the space → 2) Connect a SQL Warehouse → 3) Add Unity Catalog tables with good descriptions → 4) Add Sample Questions/Trusted Assets → 5) Share with users and iterate based on feedback."},
      {"id": "c", "text": "1) Create the space → 2) Upload CSV files → 3) Let Genie auto-discover schemas → 4) Share with users."},
      {"id": "d", "text": "1) Train the Genie model on logistics data → 2) Create the space → 3) Add tables → 4) Deploy."},
      {"id": "e", "text": "1) Create dashboards first → 2) Link dashboards to a Genie space → 3) Users interact with dashboards through Genie."}
    ],
    "correctIds": ["b"],
    "explanation": "The correct Genie setup workflow: (1) create the space, (2) attach a SQL Warehouse for compute, (3) add Unity Catalog tables with rich descriptions and column comments, (4) seed with Sample Questions and Trusted Assets to guide Genie, (5) share and continuously improve based on user feedback and flagged responses.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-327",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst adds a table with 50 columns to a Genie space but notices that Genie struggles with ambiguous column names like `status`, `type`, and `code`. Users get confused results when asking about order status vs shipment status.\n\nWhich action would most improve Genie's ability to disambiguate these columns?",
    "options": [
      {"id": "a", "text": "Rename all ambiguous columns to include the table name prefix (e.g., `order_status`, `shipment_status`)."},
      {"id": "b", "text": "Add detailed column-level COMMENT descriptions in Unity Catalog that explain the business meaning of each ambiguous column and create instructions in the Genie space."},
      {"id": "c", "text": "Split the table into multiple smaller tables, each with unique column names."},
      {"id": "d", "text": "Remove the ambiguous columns from the Genie space and only expose non-ambiguous columns."},
      {"id": "e", "text": "Create a glossary document and upload it as a PDF to the Genie space."}
    ],
    "correctIds": ["b"],
    "explanation": "Adding COMMENT descriptions at the column level in Unity Catalog (e.g., COMMENT 'Order fulfillment status: pending, shipped, delivered, cancelled') and creating Genie space instructions that define business terminology are the most effective ways to help Genie disambiguate. Genie reads catalog metadata, not uploaded documents.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-328",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has configured Genie with two tables. Users can ask questions in natural language, and Genie generates SQL. A user asks: 'What were our top 5 products last month?'\n\nGenie returns incorrect results because 'top' could mean by revenue, by units sold, or by profit margin. How should the analyst prevent this ambiguity?",
    "options": [
      {"id": "a", "text": "Configure Genie to always default to revenue-based ranking for any 'top' query."},
      {"id": "b", "text": "Add Genie space instructions that define business terms (e.g., 'top products means ranked by revenue unless specified otherwise') and create Sample Questions demonstrating each variation."},
      {"id": "c", "text": "Disable the 'top' keyword in Genie's vocabulary settings."},
      {"id": "d", "text": "Create a separate Genie space for each metric (revenue, units, margin) so users know which to use."},
      {"id": "e", "text": "Train users to always specify the metric in their questions."}
    ],
    "correctIds": ["b"],
    "explanation": "Genie space instructions allow analysts to define business terminology and default behaviors (e.g., 'top = by revenue unless specified'). Combined with Sample Questions that show variations ('Top products by revenue', 'Top products by units sold'), Genie learns to handle ambiguous terms correctly.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-329",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst creates a Genie space and wants to control who can ask questions and who can manage the space configuration (add tables, create Trusted Assets).\n\nWhich permission model applies to Genie spaces?",
    "options": [
      {"id": "a", "text": "All workspace users automatically have full access to all Genie spaces."},
      {"id": "b", "text": "Genie spaces support role-based access: owners can manage configuration, editors can add Trusted Assets and tables, and users with 'Can Use' permission can ask questions."},
      {"id": "c", "text": "Only workspace administrators can create and manage Genie spaces; regular users cannot."},
      {"id": "d", "text": "Genie spaces are public by default and cannot have individual access controls."},
      {"id": "e", "text": "Access is controlled exclusively through Unity Catalog permissions; Genie spaces have no independent permission settings."}
    ],
    "correctIds": ["b"],
    "explanation": "Genie spaces have their own permission model: owners manage all settings, editors can modify tables and Trusted Assets, and users with 'Can Use' permission can ask questions. Data access within the space is still governed by Unity Catalog permissions — Genie permissions control space configuration access.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-330",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to ensure that a Genie space returns accurate responses about fiscal quarters. The company's fiscal year starts in April (Q1 = Apr-Jun, Q2 = Jul-Sep, Q3 = Oct-Dec, Q4 = Jan-Mar).\n\nHow should the analyst configure Genie to correctly interpret fiscal quarter references?",
    "options": [
      {"id": "a", "text": "Modify the SQL Warehouse's locale settings to use a fiscal calendar."},
      {"id": "b", "text": "Add Genie space instructions that define the fiscal calendar (e.g., 'Fiscal Q1 = April to June') and create Trusted Assets with SQL that implements the fiscal quarter logic using CASE statements."},
      {"id": "c", "text": "Create a pre-computed `fiscal_quarter` column in the source table and rename the `calendar_quarter` column to avoid confusion."},
      {"id": "d", "text": "Both B and C: define fiscal calendar in instructions AND add a pre-computed fiscal quarter column with clear descriptions."},
      {"id": "e", "text": "Genie automatically detects non-standard fiscal calendars from the data patterns."}
    ],
    "correctIds": ["d"],
    "explanation": "The most robust approach combines both: (B) Genie space instructions define the business rule, and (C) a pre-computed fiscal_quarter column with a clear COMMENT in Unity Catalog makes it unambiguous. This way Genie can either reference the column directly or use the instructions to generate correct date logic.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-da-331",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to create a table in the Gold layer but is unsure whether to use a VIEW, a materialized TABLE, or a TEMPORARY VIEW. The data will be accessed by 20 concurrent dashboard users throughout the day.\n\nWhich object type is most appropriate for this Gold-layer use case?",
    "options": [
      {"id": "a", "text": "A TEMPORARY VIEW, because it is the most efficient for concurrent access and persists across sessions."},
      {"id": "b", "text": "A VIEW, because it guarantees the freshest data by re-executing the query on every access."},
      {"id": "c", "text": "A materialized Delta TABLE created via CTAS, because it pre-computes results, supports concurrent reads efficiently, and persists across sessions."},
      {"id": "d", "text": "A GLOBAL TEMPORARY VIEW, because it is shared across all users and sessions."},
      {"id": "e", "text": "All three options perform identically for concurrent access patterns."}
    ],
    "correctIds": ["c"],
    "explanation": "A materialized TABLE is best for Gold-layer concurrent access: results are pre-computed (no repeated aggregation), Delta supports efficient concurrent reads, and it persists across sessions. TEMPORARY VIEWs are session-scoped and disappear on logout. VIEWs re-execute queries on each access, causing redundant compute for 20 users.",
    "domain": "Data Modeling"
  },
  {
    "id": "db-da-332",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs `SELECT * FROM silver.events VERSION AS OF 5` and gets the expected historical data. However, after running `VACUUM silver.events RETAIN 24 HOURS`, the same Time Travel query fails.\n\nWhat caused the Time Travel query to fail after VACUUM?",
    "options": [
      {"id": "a", "text": "VACUUM deleted the transaction log entries for version 5, making it unreferenceable."},
      {"id": "b", "text": "VACUUM physically removed the old Parquet data files that version 5 referenced, because they were older than the 24-hour retention threshold."},
      {"id": "c", "text": "VACUUM resets the version counter, so version 5 now refers to a different snapshot."},
      {"id": "d", "text": "Time Travel is disabled automatically after VACUUM runs on a table."},
      {"id": "e", "text": "VACUUM only affects metadata; the analyst must have accidentally dropped the table."}
    ],
    "correctIds": ["b"],
    "explanation": "VACUUM removes old data files that are no longer referenced by the current table version and are older than the retention period. Time Travel queries need those old files to reconstruct historical versions. Once VACUUM deletes them, historical versions beyond the retention window become inaccessible. The transaction log entries remain, but the files they reference are gone.",
    "domain": "Data Modeling"
  }
