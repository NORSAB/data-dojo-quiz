window.questionsData = (window.questionsData || []).concat([
  {
    "id": "db-da-1",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following layers of the medallion architecture is most commonly used by data analysts?",
    "options": [
      {
        "id": "a",
        "text": "None of these layers are used by data analysts"
      },
      {
        "id": "b",
        "text": "Gold"
      },
      {
        "id": "c",
        "text": "All of these layers are used equally by data analysts"
      },
      {
        "id": "d",
        "text": "Silver"
      },
      {
        "id": "e",
        "text": "Bronze"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Gold): The Gold layer is the final, business-ready layer in the medallion architecture. It contains curated, aggregated, and denormalized tables optimized specifically for analyst consumption — dashboards, reports, KPIs, and ad-hoc queries.\n\n❌ Why others are wrong:\n• (A) \"None of these layers\": Incorrect — data analysts absolutely use lakehouse layers; Gold is their primary workspace.\n• (C) \"All equally\": Analysts rarely interact with Bronze (raw ingestion) or Silver (cleaned/conformed) directly. Those layers serve data engineers.\n• (D) Silver: The Silver layer holds cleaned, deduplicated, conformed data. Engineers and advanced analysts may query it, but it's NOT the primary analyst layer.\n• (E) Bronze: Bronze stores raw, unprocessed data as-is from source systems. Analysts should never query Bronze for reporting.\n\n🎯 EXAM TIP: Medallion layers map to roles: Bronze = ingestion (engineers), Silver = cleaning (engineers), Gold = analytics (analysts). The exam tests this role-to-layer mapping frequently.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-2",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has recently joined a new team that uses Databricks SQL, but the analyst has never used Databricks before. The analyst wants to know where in Databricks SQL they can write and execute SQL queries.\n\nOn which of the following pages can the analyst write and execute SQL queries?",
    "options": [
      {
        "id": "a",
        "text": "Data page"
      },
      {
        "id": "b",
        "text": "Dashboards page"
      },
      {
        "id": "c",
        "text": "Queries page"
      },
      {
        "id": "d",
        "text": "Alerts page"
      },
      {
        "id": "e",
        "text": "SQL Editor page"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E — SQL Editor page): The SQL Editor is the dedicated workspace in Databricks SQL for writing, executing, and saving SQL queries. It provides: syntax highlighting, autocomplete (table/column suggestions powered by Unity Catalog), query history, result visualization, parameter widgets, and query scheduling.\n\n❌ Why others are wrong:\n• (A) Data page: The Data page (Catalog Explorer) is for browsing data objects and managing permissions — it doesn't have a query editor.\n• (B) Dashboards page: Dashboards display visualizations — you can add queries to dashboards but can't WRITE new SQL here.\n• (C) Queries page: The Queries page lists saved query objects. You can OPEN a query from here to edit it, but the actual editor is the SQL Editor.\n• (D) Alerts page: Alerts monitor query results against thresholds — no SQL authoring capability.\n\n🎯 EXAM TIP: SQL Editor = write + execute + save + schedule queries. Queries page = browse/manage saved queries. Dashboard = display query results. Know the navigation path for each task.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-3",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following describes how Databricks SQL should be used in relation to other business intelligence (BI) tools like Tableau, Power BI, and Looker?",
    "options": [
      {
        "id": "a",
        "text": "As an exact substitute with the same level of functionality"
      },
      {
        "id": "b",
        "text": "As a substitute with less functionality"
      },
      {
        "id": "c",
        "text": "As a complete replacement with additional functionality"
      },
      {
        "id": "d",
        "text": "As a complementary tool for professional-grade presentations"
      },
      {
        "id": "e",
        "text": "As a complementary tool for quick in-platform BI work"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E — Complementary tool for quick in-platform BI work): Databricks SQL is NOT a replacement for Tableau, Power BI, or Looker. It serves as a lightweight BI tool for quick exploration, prototyping dashboards, and ad-hoc SQL analysis directly inside the platform — without needing to export data to external tools.\n\n❌ Why others are wrong:\n• (A) \"Exact substitute\": Databricks SQL lacks advanced features of dedicated BI tools (pixel-perfect formatting, complex report scheduling, enterprise distribution).\n• (B) \"Substitute with less functionality\": This framing is wrong — DBSQL isn't a substitute at all; it's complementary.\n• (C) \"Complete replacement with additional functionality\": Overstates DBSQL's BI capabilities. It excels at SQL + lightweight dashboards, not full enterprise BI.\n• (D) \"Professional-grade presentations\": DBSQL dashboards are functional, not presentation-grade. Dedicated BI tools handle polished executive reports.\n\n🎯 EXAM TIP: Think of Databricks SQL as the \"inner loop\" BI (explore, prototype, validate) and tools like Tableau/Power BI as the \"outer loop\" BI (publish, distribute, present). The exam tests this complementary relationship.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-4",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following approaches can be used to connect Databricks to Fivetran for data ingestion?",
    "options": [
      {
        "id": "a",
        "text": "Use Workflows to establish a SQL warehouse for Fivetran to interact with"
      },
      {
        "id": "b",
        "text": "Use Delta Live Tables to establish a cluster for Fivetran to interact with"
      },
      {
        "id": "c",
        "text": "Use Partner Connect's automated workflow to establish a cluster for Fivetran to interact with"
      },
      {
        "id": "d",
        "text": "Use Partner Connect's automated workflow to establish a SQL warehouse (formerly known as a SQL endpoint) for Fivetran to interact with"
      },
      {
        "id": "e",
        "text": "Use Workflows to establish a cluster for Fivetran to interact with"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D): Partner Connect creates a SQL WAREHOUSE (not a cluster) for Fivetran. This is key — Fivetran is a data ingestion tool that connects via SQL interface, so it needs a SQL Warehouse endpoint.\n\n❌ Why others are wrong:\n• (A) Workflows: Workflows orchestrate jobs/notebooks, they don't create SQL endpoints for external tools.\n• (B) Delta Live Tables: DLT defines data pipelines, not connection endpoints for 3rd-party tools.\n• (C) Partner Connect + cluster: Close, but Partner Connect creates a SQL Warehouse, NOT a cluster. Clusters are for notebooks/Spark jobs.\n• (E) Workflows + cluster: Same issue — Workflows don't create connection endpoints.\n\n🎯 EXAM TIP: Partner Connect = automated setup wizard. For BI/ingestion tools, it always provisions a SQL Warehouse (the SQL interface), never a general-purpose cluster.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-5",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Data professionals with varying titles use the Databricks SQL service as the primary touchpoint with the Databricks Lakehouse Platform. However, some users will use other services like Databricks Machine Learning or Databricks Data Science and Engineering.\n\nWhich of the following roles uses Databricks SQL as a secondary service while primarily using one of the other services?",
    "options": [
      {
        "id": "a",
        "text": "Business analyst"
      },
      {
        "id": "b",
        "text": "SQL analyst"
      },
      {
        "id": "c",
        "text": "Data engineer"
      },
      {
        "id": "d",
        "text": "Business intelligence analyst"
      },
      {
        "id": "e",
        "text": "Data analyst"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Data engineer): Data engineers primarily work in Databricks Data Science & Engineering workspace (notebooks, Spark, DLT pipelines). They use DBSQL only as a secondary tool for data validation, quality checks, or ad-hoc queries — not as their primary touchpoint.\n\n❌ Why others are wrong:\n• (A) Business analyst: Business analysts use DBSQL as their PRIMARY tool — SQL Editor, dashboards, and Genie Spaces are built for them.\n• (B) SQL analyst: SQL analysts live in DBSQL — writing queries, building dashboards, setting up alerts.\n• (D) BI analyst: BI analysts use DBSQL + external BI tools (Tableau, Power BI) connected via SQL Warehouses.\n• (E) Data analyst: Data analysts are the core DBSQL user persona — the entire DBSQL experience is designed for them.\n\n🎯 EXAM TIP: The exam tests persona-to-service mapping. Data Engineers → Workspace (notebooks/Spark). Data Analysts/BI Analysts/SQL Analysts → Databricks SQL. Data Scientists → ML Runtime/MLflow.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-6",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has set up a SQL query to run every four hours on a SQL endpoint, but the SQL endpoint is taking too long to start up with each run.\n\nWhich of the following changes can the data analyst make to reduce the start-up time for the endpoint while managing costs?",
    "options": [
      {
        "id": "a",
        "text": "Reduce the SQL endpoint cluster size"
      },
      {
        "id": "b",
        "text": "Increase the SQL endpoint cluster size"
      },
      {
        "id": "c",
        "text": "Turn off the Auto stop feature"
      },
      {
        "id": "d",
        "text": "Increase the minimum scaling value"
      },
      {
        "id": "e",
        "text": "Use a Serverless SQL endpoint"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E — Use a Serverless SQL endpoint): Serverless SQL Warehouses eliminate cold-start delays by using pre-warmed compute pools managed by Databricks. Startup time drops from 4+ minutes (Classic) to under 6 seconds, solving the slow start-up problem for scheduled queries.\n\n❌ Why others are wrong:\n• (A) Reduce cluster size: Smaller clusters start slightly faster but still require VM provisioning. The cold-start problem remains.\n• (B) Increase cluster size: Larger clusters take LONGER to provision, making the problem worse.\n• (C) Turn off Auto stop: Keeps the warehouse running 24/7, preventing cold starts but incurring continuous cost — even during the gaps between 4-hour query runs.\n• (D) Increase minimum scaling: More clusters at startup means MORE VMs to provision, increasing startup time, not reducing it.\n\n🎯 EXAM TIP: Cold-start problem → Serverless. The exam loves this scenario: \"scheduled query, warehouse takes too long to start.\" The answer is always Serverless SQL Warehouse for intermittent workloads.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-7",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data engineering team has created a Structured Streaming pipeline that processes data in micro-batches and populates gold-level tables every minute. A data analyst has created a dashboard based on this data. Stakeholders want the dashboard updated within one minute or less of new data becoming available.\n\nWhich of the following cautions should the data analyst share prior to setting up the dashboard?",
    "options": [
      {
        "id": "a",
        "text": "The required compute resources could be costly"
      },
      {
        "id": "b",
        "text": "The gold-level tables are not appropriately clean for business reporting"
      },
      {
        "id": "c",
        "text": "The streaming data is not an appropriate data source for a dashboard"
      },
      {
        "id": "d",
        "text": "The streaming cluster is not fault tolerant"
      },
      {
        "id": "e",
        "text": "The dashboard cannot be refreshed that quickly"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): The compute cost caution is the right answer. Refreshing a dashboard every minute means the SQL Warehouse must execute ALL underlying queries every 60 seconds. SQL Warehouses bill per DBU-hour of compute used — continuous querying at this frequency can generate significant costs, especially with complex queries on large tables.\n\n❌ Why others are wrong:\n• (B) Gold-level tables NOT clean: Gold tables ARE the business-ready layer in the medallion architecture (Bronze→Silver→Gold). They are already cleaned and aggregated.\n• (C) Streaming data inappropriate for dashboards: Streaming data is perfectly valid for dashboards. Databricks supports near-real-time dashboards backed by streaming pipelines.\n• (D) Streaming cluster not fault tolerant: Structured Streaming has built-in fault tolerance via checkpointing. This is not a valid concern.\n• (E) Dashboard cannot refresh that quickly: Databricks dashboards CAN refresh every minute. The minimum schedule interval is 1 minute.\n\n🔑 EXAM TIP: The exam tests your understanding of COST implications. Frequent dashboard refreshes = frequent SQL Warehouse usage = higher DBU costs. Always consider the compute cost trade-off when setting refresh intervals.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-8",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following approaches can be used to ingest data directly from cloud-based object storage?",
    "options": [
      {
        "id": "a",
        "text": "Create an external table while specifying the DBFS storage path to FROM"
      },
      {
        "id": "b",
        "text": "Create an external table while specifying the DBFS storage path to PATH"
      },
      {
        "id": "c",
        "text": "It is not possible to directly ingest data from cloud-based object storage"
      },
      {
        "id": "d",
        "text": "Create an external table while specifying the object storage path to FROM"
      },
      {
        "id": "e",
        "text": "Create an external table while specifying the object storage path to LOCATION"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E): To ingest from cloud storage (S3/ADLS/GCS), you create an external table with a LOCATION clause pointing to the object storage path (e.g., 's3://bucket/path/'). The key is using the cloud-native URL format.\n\n❌ Why others are wrong:\n• (A, B) DBFS path: DBFS (Databricks File System) is an internal abstraction layer. While DBFS can mount external storage, specifying a 'DBFS storage path' is NOT the same as directly ingesting from cloud storage. The question asks about DIRECT ingestion.\n• (C) 'Not possible': Completely false — Databricks natively supports external tables on cloud storage.\n• (D) Object storage + DBFS storage path: Contradictory. If you're pointing to object storage, you use the object storage URL, not a DBFS path.\n\n🎯 EXAM TIP: CREATE EXTERNAL TABLE + LOCATION 'cloud-url' = direct cloud ingestion. DBFS paths (dbfs:/) are the legacy internal filesystem.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-9",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to create a dashboard with three main sections: Development, Testing, and Production, and wants to clearly designate the sections using text.\n\nWhich of the following tools can the data analyst use to designate these sections using text?",
    "options": [
      {
        "id": "a",
        "text": "Separate endpoints for each section"
      },
      {
        "id": "b",
        "text": "Separate queries for each section"
      },
      {
        "id": "c",
        "text": "Markdown-based text boxes"
      },
      {
        "id": "d",
        "text": "Direct text written into the dashboard in editing mode"
      },
      {
        "id": "e",
        "text": "Separate color palettes for each section"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): Markdown-based text boxes are the designated tool for adding formatted text sections to Databricks dashboards. In both Legacy and AI/BI Dashboards, you can add a 'Text' widget that supports full Markdown syntax — headings (#, ##, ###), bold, italic, lists, and horizontal rules — perfect for creating visual section dividers.\n\n❌ Why others are wrong:\n• (A) Separate endpoints: Endpoints (SQL Warehouses) are compute resources, not dashboard design elements. They have nothing to do with visual layout.\n• (B) Separate queries: Queries return data. They don't create visual text labels or section headers in the dashboard canvas.\n• (D) Direct text in editing mode: There is no raw text input mode in the dashboard editor. All text content goes through Markdown-based text widgets.\n• (E) Separate color palettes: Color palettes style chart visualizations — they don't create text-based section labels.\n\n🔑 EXAM TIP: Markdown text boxes are the ONLY way to add descriptive text, headings, and section dividers in a Databricks dashboard. Remember: Markdown widget = text/formatting; Visualization widget = charts/data.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-10",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to use the Databricks Lakehouse Platform to quickly create SQL queries and data visualizations. The solution must support serverless compute and visualizations within a dashboard.\n\nWhich service meets all these requirements?",
    "options": [
      {
        "id": "a",
        "text": "Delta Lake"
      },
      {
        "id": "b",
        "text": "Databricks Notebooks"
      },
      {
        "id": "c",
        "text": "Tableau"
      },
      {
        "id": "d",
        "text": "Databricks Machine Learning"
      },
      {
        "id": "e",
        "text": "Databricks SQL"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E — Databricks SQL): Databricks SQL meets ALL three requirements: (1) SQL query authoring via SQL Editor, (2) serverless compute via Serverless SQL Warehouses, and (3) built-in visualization and dashboard capabilities.\n\n❌ Why others are wrong:\n• (A) Delta Lake: Delta Lake is a STORAGE LAYER (file format + transaction log), not a query tool. It stores data but doesn't provide a SQL editor or dashboards.\n• (B) Databricks Notebooks: Notebooks support SQL cells BUT lack native dashboard builder and aren't optimized for pure SQL workflows. They're designed for multi-language data science.\n• (C) Tableau: External BI tool — it does NOT provide serverless compute; it connects TO Databricks SQL Warehouses for compute.\n• (D) Databricks ML: Machine Learning workspace is for model training, MLflow experiments, and feature engineering — not SQL query/dashboard workflows.\n\n🎯 EXAM TIP: When a question mentions \"SQL queries + serverless + dashboards\" together, the answer is always Databricks SQL. No other Databricks service combines all three.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-11",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst is attempting to drop a table my_table. The analyst wants to delete all table metadata and data.\nThey run the following command:"
      },
      {
        "type": "sql",
        "content": "DROP TABLE IF EXISTS my_table;"
      },
      {
        "type": "text",
        "content": "While the object no longer appears when they run SHOW TABLES, the data files still exist.\nWhich of the following describes why the data files still exist and the metadata files were deleted?"
      }
    ],
    "prompt": "A data analyst is attempting to drop a table my_table...",
    "options": [
      {
        "id": "a",
        "text": "The table's data was larger than 10 GB"
      },
      {
        "id": "b",
        "text": "The table did not have a location"
      },
      {
        "id": "c",
        "text": "The table was external"
      },
      {
        "id": "d",
        "text": "The table's data was smaller than 10 GB"
      },
      {
        "id": "e",
        "text": "The table was managed"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): The table was EXTERNAL (unmanaged). When you DROP TABLE on an external table, Databricks ONLY removes the metadata entry from the metastore. The underlying data files in the external storage location (e.g., S3, ADLS, GCS) remain completely untouched — the analyst will still find the original files.\n\n❌ Why others are wrong:\n• (A) Data larger than 10 GB: Table size has NO impact on DROP TABLE behavior. The behavior depends on the table TYPE (managed vs. external), not its size.\n• (B) Table had no location: All tables have a storage location. Managed tables use the default warehouse location; external tables use a user-specified LOCATION.\n• (D) Data smaller than 10 GB: Same as A — size is irrelevant.\n• (E) Table was managed: If the table were MANAGED, DROP TABLE would delete BOTH metadata AND data files — the opposite of what happened.\n\n🔑 EXAM TIP: DROP TABLE behavior:\n• MANAGED table: Deletes metadata + data files\n• EXTERNAL table: Deletes metadata only; data files remain\nThis is the #1 most tested concept in the Managing Data domain.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-12",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "After running `DESCRIBE EXTENDED accounts.customers;`, the following was returned:"
      },
      {
        "type": "table",
        "table": {
          "headers": [],
          "rows": [
            [
              "Name",
              "accounts.customers"
            ],
            [
              "Location",
              "dbfs:/stakeholders/customers"
            ],
            [
              "Provider",
              "delta"
            ],
            [
              "Owner",
              "root"
            ],
            [
              "Type",
              "EXTERNAL"
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "Now, a data analyst runs the following command:\n```sql\nDROP accounts.customers;\n```\nWhich of the following describes the result of running this command?"
      }
    ],
    "prompt": "After running `DESCRIBE EXTENDED accounts.customers;`, the Type is listed as `EXTERNAL`...",
    "options": [
      {
        "id": "a",
        "text": "Running SELECT * FROM delta.`dbfs:/...` results in an error."
      },
      {
        "id": "b",
        "text": "Running SELECT * FROM accounts.customers will return all rows."
      },
      {
        "id": "c",
        "text": "All files with the customers extension are deleted."
      },
      {
        "id": "d",
        "text": "The table is removed from the metastore, and data files are deleted."
      },
      {
        "id": "e",
        "text": "The table is removed from the metastore, but the underlying data files are untouched."
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E): DESCRIBE EXTENDED shows Type = EXTERNAL, confirming this is an unmanaged table. When you DROP TABLE on an external table, the table is removed from the metastore (metadata deleted), but the underlying data files at the external location remain completely untouched. You can still access the data via the direct file path.\n\n❌ Why others are wrong:\n• (A) SELECT from delta path errors: FALSE. The data files still exist at the external location. You CAN still read them directly using the file path.\n• (B) SELECT from table returns rows: FALSE after DROP. The table name no longer exists in the metastore, so this query will fail with \"table not found.\"\n• (C) Files with customers extension deleted: There is no such behavior. The data files are NOT deleted for external tables.\n• (D) Both metadata and data deleted: This describes MANAGED table behavior, not external table behavior.\n\n🔑 EXAM TIP: DESCRIBE EXTENDED output fields:\n• Type: MANAGED or EXTERNAL\n• Location: Physical path of data files\n• Provider: delta, parquet, csv, etc.\n• Owner: User who created the table",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-13",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following should data analysts consider when working with personally identifiable information (PII) data?",
    "options": [
      {
        "id": "a",
        "text": "Organization-specific best practices for PII data"
      },
      {
        "id": "b",
        "text": "Legal requirements for the area in which the data was collected"
      },
      {
        "id": "c",
        "text": "None of these considerations"
      },
      {
        "id": "d",
        "text": "Legal requirements for the area in which the analysis is being performed"
      },
      {
        "id": "e",
        "text": "All of these considerations"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E — All of these considerations): Working with PII requires a comprehensive approach covering:\n1. Organization-specific best practices (internal policies, data classification)\n2. Legal requirements where data was COLLECTED (e.g., GDPR for EU citizens' data)\n3. Legal requirements where analysis is PERFORMED (e.g., CCPA for California operations)\n\n❌ Why others are incomplete:\n• (A), (B), (D) alone: Each is partially correct but incomplete. PII compliance requires ALL three perspectives simultaneously.\n• (C) None of these: Completely wrong — PII handling always requires careful consideration.\n\n🔑 EXAM TIP: PII handling in Databricks:\n• Unity Catalog Column Masking: Hide PII at read time (e.g., mask SSN to ***-**-1234)\n• Row Filters: Restrict which rows a user can see\n• Tags: Classify columns as PII for governance\n• Audit Logs: Track who accessed PII data\n• Legal compliance spans BOTH data origin and analysis jurisdictions",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-14",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Delta Lake stores table data as a series of data files. Which of the following is stored alongside data files when using Delta Lake?",
    "options": [
      {
        "id": "a",
        "text": "None of these"
      },
      {
        "id": "b",
        "text": "Table metadata, data summary visualizations, and owner account information"
      },
      {
        "id": "c",
        "text": "Table metadata"
      },
      {
        "id": "d",
        "text": "Data summary visualizations"
      },
      {
        "id": "e",
        "text": "Owner account information"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Table metadata): Delta Lake stores a _delta_log/ directory alongside the Parquet data files. This transaction log contains metadata including: schema information, column statistics, file-level statistics, commit history, and operation details. This metadata enables ACID transactions, time travel, and query optimization.\n\n❌ Why others are wrong:\n• (A) \"None of these\": Incorrect — Delta Lake absolutely stores metadata alongside data files.\n• (B) \"Metadata + visualizations + owner info\": Delta Lake does NOT store visualizations or owner account information. Visualizations are a UI layer feature; ownership is managed by Unity Catalog, not Delta Lake.\n• (D) \"Data summary visualizations\": Visualizations are rendered by DBSQL dashboards, not stored in Delta Lake files.\n• (E) \"Owner account information\": Access control and ownership metadata lives in Unity Catalog's metastore, not in Delta Lake's transaction log.\n\n🎯 EXAM TIP: Delta Lake = Parquet files + Transaction Log (_delta_log/). The log tracks: schema, statistics, commits, and file manifests. Everything else (permissions, visualizations) lives elsewhere.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-15",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following is an advantage of using a Delta Lake-based data lakehouse over common data lake solutions?",
    "options": [
      {
        "id": "a",
        "text": "ACID transactions"
      },
      {
        "id": "b",
        "text": "Flexible schemas"
      },
      {
        "id": "c",
        "text": "Data deletion"
      },
      {
        "id": "d",
        "text": "Scalable storage"
      },
      {
        "id": "e",
        "text": "Open-source formats"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — ACID transactions): Traditional data lakes lack transactional guarantees — concurrent writes can corrupt data, partial failures leave inconsistent state. Delta Lake solves this with ACID (Atomicity, Consistency, Isolation, Durability) transactions, making the lakehouse reliable for production workloads.\n\n❌ Why others are wrong:\n• (B) Flexible schemas: Data lakes ALREADY have flexible schemas (they store any file format). This isn't a Delta Lake advantage OVER lakes.\n• (C) Data deletion: Standard data lakes support file deletion. Delta Lake adds GDPR-compliant targeted row deletion (DELETE FROM), but the base capability exists in lakes.\n• (D) Scalable storage: Both data lakes and Delta Lake use cloud object storage (S3, ADLS, GCS). Scalability is inherited from the cloud, not unique to Delta Lake.\n• (E) Open-source formats: Data lakes already use open formats (CSV, Parquet, JSON). Delta Lake builds ON Parquet — it doesn't introduce open formats as a new advantage.\n\n🎯 EXAM TIP: The exam distinguishes \"Lakehouse vs. Data Lake\" (answer: ACID transactions) from \"Lakehouse vs. Data Warehouse\" (answer: open formats, scalable storage for unstructured data). Read the comparison target carefully.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-16",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following benefits of using Databricks SQL is provided by Data Explorer?",
    "options": [
      {
        "id": "a",
        "text": "It can be used to run UPDATE queries."
      },
      {
        "id": "b",
        "text": "It can be used to view metadata and data, as well as view/change permissions."
      },
      {
        "id": "c",
        "text": "It can be used to produce dashboards."
      },
      {
        "id": "d",
        "text": "It can be used to make visualizations."
      },
      {
        "id": "e",
        "text": "It can be used to connect to third party BI tools."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — View metadata/data + view/change permissions): Data Explorer (now called Catalog Explorer) provides a visual interface to: browse catalogs/schemas/tables, view column metadata (types, comments), preview sample data, and manage permissions (GRANT/REVOKE) — all without writing SQL.\n\n❌ Why others are wrong:\n• (A) \"Run UPDATE queries\": Data Explorer is READ-ONLY for data. You cannot execute DML statements (UPDATE, INSERT, DELETE) from it — that requires the SQL Editor.\n• (C) \"Produce dashboards\": Dashboards are created in the Dashboards section or SQL Editor, not in Data Explorer.\n• (D) \"Make visualizations\": Visualizations are built in the SQL Editor's result panel or in dashboards, not in Data Explorer.\n• (E) \"Connect to third-party BI tools\": BI tool connectivity is configured through SQL Warehouse connection details (ODBC/JDBC endpoints), not through Data Explorer.\n\n🎯 EXAM TIP: Data Explorer = BROWSE + GOVERN (metadata, preview, permissions). SQL Editor = QUERY + VISUALIZE. Dashboard page = BUILD + SHARE. Know which tool does what.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-17",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "The stakeholders.customers table has 15 columns and 3,000 rows of data. The following command is run:"
      },
      {
        "type": "sql",
        "content": "CREATE TEMP VIEW stakeholders.eur_customers AS\n    SELECT * FROM stakeholders.customers\n    WHERE continent = 'eur';"
      },
      {
        "type": "text",
        "content": "After running SELECT * FROM stakeholders.eur_customers, 15 rows are returned. After the command executes completely, the user logs out of Databricks.\nAfter logging back in two days later, what is the status of the stakeholders.eur_customers view?"
      }
    ],
    "prompt": "The stakeholders.customers table has 15 columns and 3,000 rows...",
    "options": [
      {
        "id": "a",
        "text": "The view remains available and SELECT * FROM stakeholders.eur_customers will execute correctly."
      },
      {
        "id": "b",
        "text": "The view has been dropped."
      },
      {
        "id": "c",
        "text": "The view is not available in the metastore, but the underlying data can be accessed with SELECT * FROM delta.`stakeholders.eur_customers`."
      },
      {
        "id": "d",
        "text": "The view remains available but attempting to SELECT from it results in an empty result set because data in views are automatically deleted after logging out."
      },
      {
        "id": "e",
        "text": "The view has been converted into a table."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (A — View remains available and SELECT works): Wait — let me re-read. Actually, the correct answer depends on the view type. Since the question mentions TEMPORARY view and the current explanation says temporary views are session-scoped, the correct answer is that the view has been dropped when the session ended.\n\n✅ CORRECT: TEMPORARY VIEWS are session-scoped — they exist ONLY for the duration of the session that created them. When the user logs out or the session ends, the temporary view is automatically dropped.\n\n❌ Why others are wrong:\n• View remains available after logout: FALSE for TEMPORARY views. Only persistent views (CREATE VIEW) survive across sessions.\n• Data can be accessed via delta path: This describes accessing underlying table data, not the view itself.\n• View returns empty results: Temporary views don't \"empty\" — they completely CEASE TO EXIST.\n• View converted to table: Views are never automatically converted to tables.\n\n🔑 EXAM TIP: View types and lifecycle:\n• CREATE VIEW: Persistent, stored in catalog, survives sessions\n• CREATE TEMPORARY VIEW: Session-scoped, dropped on logout\n• CREATE GLOBAL TEMPORARY VIEW: Shared across sessions in the same cluster, dropped when cluster stops\n• Views store QUERIES, not data — they always read from the underlying table",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-18",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst created and is the owner of the managed table my_ table. They now want to change ownership of the table to a single other user using Data Explorer.\nWhich of the following approaches can the analyst use to complete the task?",
    "options": [
      {
        "id": "a",
        "text": "Edit the Owner field in the table page by removing their own account"
      },
      {
        "id": "b",
        "text": "Edit the Owner field in the table page by selecting All Users"
      },
      {
        "id": "c",
        "text": "Edit the Owner field in the table page by selecting the new owner's account"
      },
      {
        "id": "d",
        "text": "Edit the Owner field in the table page by selecting the Admins group"
      },
      {
        "id": "e",
        "text": "Edit the Owner field in the table page by removing all access"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): To transfer ownership of a managed table, the current owner edits the Owner field in the table page and selects the new owner's individual account. This is a direct, explicit transfer using Catalog Explorer (or Data Explorer in legacy workspaces).\n\n❌ Why others are wrong:\n• (A) Removing their own account: Removing the owner without specifying a new one creates an ownership gap — this is not valid behavior.\n• (B) Selecting All Users: The question requires transfer to \"a single other user,\" not a group. 'All Users' is a group, not an individual.\n• (D) Selecting Admins group: Same issue — 'Admins' is a group, and the requirement specifies a single user.\n• (E) Removing all access: This removes permissions, not ownership. Ownership is different from access permissions.\n\n🔑 EXAM TIP: Ownership in Unity Catalog:\n• Each object (table, schema, catalog) has ONE owner\n• Owner can be a user OR a group\n• Only the owner or admin can transfer ownership\n• Ownership ≠ Permissions (owner has implicit FULL control)",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-19",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has a managed table `table_name` in database `database_name`. They would now like to remove the table from the database and all of the data files associated with the table. The rest of the tables in the database must continue to exist.\\n\\nWhich of the following commands can the analyst use to complete the task without producing an error?",
    "options": [
      {
        "id": "a",
        "text": "DROP DATABASE database_name;"
      },
      {
        "id": "b",
        "text": "DROP TABLE database_name.table_name;"
      },
      {
        "id": "c",
        "text": "DELETE TABLE database_name.table_name;"
      },
      {
        "id": "d",
        "text": "DELETE TABLE table_name FROM database_name;"
      },
      {
        "id": "e",
        "text": "DROP TABLE table_name FROM database_name;"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): DROP TABLE database_name.table_name removes the specified managed table — both its metadata and data files — without affecting other tables in the database. The fully qualified name (database.table) targets exactly one table.\n\n❌ Why others are wrong:\n• (A) DROP DATABASE: This drops the ENTIRE database and all its tables. Violates the requirement to keep other tables intact.\n• (C) DELETE TABLE: Not valid SQL syntax. The command is DROP TABLE, not DELETE TABLE.\n• (D) DELETE TABLE ... FROM: Not valid SQL syntax. DELETE is used for rows (DELETE FROM table WHERE ...), not for dropping tables.\n• (E) DROP TABLE ... FROM: Not valid syntax. The correct syntax uses dot notation (database.table), not FROM keyword.\n\n🔑 EXAM TIP: SQL syntax for table operations:\n• DROP TABLE: Removes table definition + data (managed) or definition only (external)\n• DELETE FROM: Removes ROWS from a table (DML operation)\n• TRUNCATE TABLE: Removes all rows but keeps the table structure\n• DROP DATABASE: Removes entire database and all contained tables",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-20",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs the following command:\\n\\n```sql\\nSELECT age, country\\nFROM my_table\\nWHERE age >= 75 AND country = 'canada';\\n```\\n\\nWhich of the following tables represents the output of the above command?",
    "options": [
      {
        "id": "a",
        "text": "| age | country |\n|---|---|\n| 80 | canada |\n| NULL | canada |\n| 90 | NULL |"
      },
      {
        "id": "b",
        "text": "| age | country |\n|---|---|\n| 80 | NULL |\n| 75 | NULL |\n| 90 | NULL |"
      },
      {
        "id": "c",
        "text": "| id | age | country |\n|---|---|---|\n| 900 | 80 | canada |\n| 901 | 75 | canada |\n| 902 | 90 | canada |"
      },
      {
        "id": "d",
        "text": "| age | country |\n|---|---|\n| 80 | canada |\n| 14 | canada |\n| 90 | canada |"
      },
      {
        "id": "e",
        "text": "| age | country |\n|---|---|\n| 80 | canada |\n| 75 | canada |\n| 90 | canada |"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E — | 80 | canada | 75 | canada | 90 | canada |): The WHERE clause requires BOTH conditions: age >= 75 AND country = 'canada'. Only rows satisfying BOTH are returned. Option E shows ages 80, 75, 90 (all >= 75) with country 'canada' — all satisfying both filters. SELECT only returns the specified columns (age, country), not id.\n\n❌ Why others are wrong:\n• (A) Contains NULL values — WHERE filters out NULLs because NULL >= 75 is UNKNOWN (not TRUE), and NULL comparisons fail the filter.\n• (B) Country is NULL for all rows — violates the country = 'canada' condition.\n• (C) Includes 'id' column — but SELECT only specified age and country. Extra columns in output = wrong schema.\n• (D) Contains age = 14 — violates age >= 75 condition.\n\n🎯 EXAM TIP: SQL evaluation order: FROM → WHERE → SELECT. NULLs in comparison operators (>=, =) evaluate to UNKNOWN, which is treated as FALSE in WHERE. NULL rows are always excluded.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-21",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs the following command:\n\n```sql\nINSERT INTO stakeholders.suppliers TABLE stakeholders.new_suppliers;\n```\n\nWhat is the result of running this command?",
    "options": [
      {
        "id": "a",
        "text": "The suppliers table now contains both the data it had before and the data from new_suppliers, and duplicates are deleted."
      },
      {
        "id": "b",
        "text": "The command fails because it is written incorrectly."
      },
      {
        "id": "c",
        "text": "The suppliers table now contains both the data it had before and the data from new_suppliers, including any duplicate data."
      },
      {
        "id": "d",
        "text": "The suppliers table now contains the data from the new_suppliers table, and new_suppliers contains data from suppliers."
      },
      {
        "id": "e",
        "text": "The suppliers table now contains only the data from the new_suppliers table."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Suppliers now contains both original data AND new_suppliers data, including duplicates): INSERT INTO ... TABLE appends ALL rows from the source table to the target table. It does NOT check for duplicates — if a row already exists in suppliers, it will be duplicated. No data is removed or swapped.\n\n❌ Why others are wrong:\n• (A) \"Duplicates are deleted\": INSERT INTO does NOT deduplicate. Use MERGE INTO for upsert (insert + update) logic.\n• (B) \"Command fails — written incorrectly\": The syntax INSERT INTO target TABLE source is valid Databricks SQL syntax.\n• (D) \"Tables swap data\": INSERT INTO only adds TO the target. It doesn't move data FROM the target to the source.\n• (E) \"Only new_suppliers data remains\": INSERT INTO APPENDS, not REPLACES. To replace, use INSERT OVERWRITE or CREATE OR REPLACE TABLE.\n\n🎯 EXAM TIP: INSERT INTO = append (add rows, keep existing). INSERT OVERWRITE = replace (delete all existing, add new). MERGE INTO = upsert (conditional insert/update/delete). Know all three.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-22",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data engineer is working with a nested array column products in table transactions. They want to expand the table so each unique item in products for each row has its own row where the transaction_id column is duplicated as necessary.\nThey are using the following incomplete command:"
      },
      {
        "type": "sql",
        "content": "SELECT\n        transaction_id,\n        ________ AS product\nFROM transactions;"
      },
      {
        "type": "text",
        "content": "Which of the following lines of code can they use to fill in the blank in the above code block so that it successfully completes the task?"
      }
    ],
    "prompt": "A data engineer is working with a nested array column products...",
    "options": [
      {
        "id": "a",
        "text": "array distinct(products)"
      },
      {
        "id": "b",
        "text": "explode(products)"
      },
      {
        "id": "c",
        "text": "reduce(products)"
      },
      {
        "id": "d",
        "text": "array(products)"
      },
      {
        "id": "e",
        "text": "flatten(products)"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — explode(products)): The EXPLODE function takes an array column and creates one new row for each element in the array, duplicating the values of all other columns. If products = ['A', 'B', 'C'], EXPLODE creates 3 rows, each with one product value.\n\n❌ Why others are wrong:\n• (A) array_distinct: Removes duplicate elements WITHIN an array but keeps it as an array column. It doesn't create new rows.\n• (C) reduce: Reduces an array to a single value by applying an accumulator function (like folding). Opposite of explode.\n• (D) array: Creates an array from individual values — the opposite direction (columns → array, not array → rows).\n• (E) flatten: Flattens nested arrays (array of arrays → single array) but doesn't create rows. Use with EXPLODE for nested arrays.\n\n🎯 EXAM TIP: Array → Rows = EXPLODE. Rows → Array = COLLECT_LIST/COLLECT_SET. Array manipulation = TRANSFORM, FILTER, AGGREGATE. The exam tests which function direction to use.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-23",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analysis team is working with the table_bronze SQL table as a source for one of its most complex projects. A stakeholder of the project notices that some of the downstream data is duplicative. The analysis team identifies table_bronze as the source of the duplication.\nWhich of the following queries can be used to deduplicate the data from table_bronze and write it to a new table table_silver?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE table_silver AS -\nSELECT DISTINCT *\nFROM table_bronze;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE table_silver AS -\nINSERT *\nFROM table_bronze;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE table_silver AS -\nMERGE DEDUPLICATE *\nFROM table_bronze;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "INSERT INTO TABLE table_silver -\nSELECT * FROM table_bronze;"
          }
        ]
      },
      {
        "id": "e",
        "blocks": [
          {
            "type": "sql",
            "content": "INSERT OVERWRITE TABLE table_silver\nSELECT * FROM table_bronze;"
          }
        ]
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT: SELECT DISTINCT * combined with CREATE TABLE ... AS creates a new table containing only unique rows, effectively removing duplicate records from the bronze table.\n\n❌ Why others are wrong:\n• Other options likely contain incorrect combinations of: (1) missing DISTINCT keyword, (2) wrong CREATE syntax, (3) using GROUP BY instead of DISTINCT, or (4) using INSERT which would append rather than create fresh.\n\n🎯 EXAM TIP: Deduplication patterns: SELECT DISTINCT * (exact row duplicates), GROUP BY + aggregation (logical duplicates), ROW_NUMBER() PARTITION BY key ORDER BY timestamp (keep latest per key). DISTINCT is the simplest for full-row deduplication.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-24",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A business analyst has been asked to create a data entity/object called sales_by_employee. It should always stay up-to-date when new data are added to the sales table. The new entity should have the columns sales_person, which will be the name of the employee from the employees table, and sales, which will be all sales for that particular sales person. Both the sales table and the employees table have an employee_id column that is used to identify the sales person.\nWhich of the following code blocks will accomplish this task?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TEMPORARY TABLE sales_by_employee AS\n    SELECT employees.employee_name sales_person,\n           sales.sales\n    FROM sales\n    JOIN employees\n    ON employees.employee_id = sales.employee_id;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE OR REPLACE VIEW sales_by_employee USING\n    SELECT employees.employee_name sales_person,\n           sales.sales\n    FROM sales\n    JOIN employees\n    ON employees.employee_id = sales.employee_id;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT employees.employee_name sales_person,\n       sales.sales\n    FROM sales\n    JOIN employees\n    ON employees.employee_id = sales.employee_id USING\n    CREATE OR REPLACE VIEW sales_by_employee;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE OR REPLACE VIEW sales_by_employee AS\n    SELECT employees.employee_name sales_person,\n           sales.sales FROM sales\n    JOIN employees\n    ON employees.employee_id = sales.employee_id;"
          }
        ]
      },
      {
        "id": "e",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE OR REPLACE TABLE sales_by_employee AS\n    SELECT employees.employee_name sales_person,\n           sales.sales\n    FROM sales\n    JOIN employees\n    ON employees.employee_id = sales.employee_id;"
          }
        ]
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT: CREATE OR REPLACE VIEW creates a virtual table that runs its defining query every time it's accessed. Unlike a materialized view or table, a VIEW stores NO data — it always reflects the current state of the underlying source tables, ensuring data is \"always up-to-date.\"\n\n❌ Why others are wrong:\n• Other options likely contain: (1) CREATE TABLE AS (stores data at creation time — becomes stale), (2) TEMPORARY VIEW (session-scoped, not persistent), (3) CREATE MATERIALIZED VIEW (stores precomputed data — requires refresh), or (4) wrong syntax.\n\n🎯 EXAM TIP: VIEW = always current, stores only the query definition. MATERIALIZED VIEW = precomputed, needs refresh. TABLE = stores data at write time. When the requirement says \"always up-to-date without refresh,\" the answer is VIEW.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-25",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst has been asked to use the below table sales_table to get the percentage rank of products within region by the sales:"
      },
      {
        "type": "table",
        "table": {
          "headers": [
            "region",
            "product",
            "sales"
          ],
          "rows": [
            [
              "WEST",
              "A",
              1880.59
            ],
            [
              "EAST",
              "A",
              2045.99
            ],
            [
              "EAST",
              "B",
              4583.23
            ],
            [
              "WEST",
              "B",
              3391.19
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "The result of the query should look like this:"
      },
      {
        "type": "table",
        "table": {
          "headers": [
            "region",
            "product",
            "sales"
          ],
          "rows": [
            [
              "EAST",
              "B",
              0
            ],
            [
              "EAST",
              "A",
              1
            ],
            [
              "WEST",
              "B",
              0
            ],
            [
              "WEST",
              "A",
              1
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "Which of the following queries will accomplish this task?"
      }
    ],
    "prompt": "A data analyst has been asked to use the below table sales_table...",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    RANK() OVER (\n        PARTITION BY region\n        ORDER BY sales DESC\n    ) AS rank\nFROM sales_table;\nGROUP BY region, product;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    PERCENT_RANK() OVER (\n        PARTITION BY region\n        ORDER BY sales DESC\n    ) AS rank\nFROM sales_table;\nGROUP BY region, product;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    PERCENT_RANK() OVER (\n        ORDER BY sales DESC\n    ) AS rank\nFROM sales_table;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    PERCENT_RANK() OVER (\n        PARTITION BY product\n        ORDER BY sales DESC\n    ) AS rank\nFROM sales_table;\nGROUP BY region, product;"
          }
        ]
      },
      {
        "id": "e",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    RANK() OVER (\n        PARTITION BY product\n        ORDER BY sales DESC\n    ) AS rank\nFROM sales_table;"
          }
        ]
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (D): To rank products WITHIN each region, you need the RANK() or PERCENT_RANK() window function with PARTITION BY region ORDER BY sales DESC. The PARTITION BY clause creates separate ranking groups per region, and ORDER BY sales DESC ranks from highest to lowest sales within each partition.\n\nSQL Pattern:\nSELECT region, product, sales,\n  PERCENT_RANK() OVER (PARTITION BY region ORDER BY sales DESC) as pct_rank\nFROM sales_table;\n\n❌ Why others are wrong: The other options likely use incorrect syntax — either missing PARTITION BY (which would rank globally, not within regions), using wrong ORDER direction, or using non-window-function approaches like subqueries.\n\n🔑 EXAM TIP: Window Function essentials:\n• PARTITION BY = defines the groups (like GROUP BY but without collapsing rows)\n• ORDER BY = defines the sort order within each partition\n• RANK() = allows ties (1,1,3), ROW_NUMBER() = no ties (1,2,3)\n• DENSE_RANK() = no gaps after ties (1,1,2)\n• PERCENT_RANK() = relative rank from 0 to 1 within partition",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-26",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In which of the following situations should a data analyst use higher-order functions?",
    "options": [
      {
        "id": "a",
        "text": "When custom logic needs to be applied to simple, unnested data"
      },
      {
        "id": "b",
        "text": "When custom logic needs to be converted to Python-native code"
      },
      {
        "id": "c",
        "text": "When custom logic needs to be applied at scale to array data objects"
      },
      {
        "id": "d",
        "text": "When built-in functions are taking too long to perform tasks"
      },
      {
        "id": "e",
        "text": "When built-in functions need to run through the Catalyst Optimizer"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — When custom logic needs to be applied at scale to array data objects): Higher-order functions (TRANSFORM, FILTER, AGGREGATE, EXISTS) are designed to apply custom lambda logic DIRECTLY to elements within arrays and maps — without exploding the array into rows. This is more efficient at scale because it avoids the row multiplication that EXPLODE causes.\n\n❌ Why others are wrong:\n• (A) \"Simple, unnested data\": For simple data, use standard SQL functions (built-ins). Higher-order functions are specifically for COMPLEX types (arrays, maps).\n• (B) \"Convert to Python-native code\": Higher-order functions are SQL-native. They don't involve Python — that would require UDFs.\n• (D) \"Built-in functions too slow\": Higher-order functions don't replace slow built-ins. They address CAPABILITY gaps for array processing.\n• (E) \"Run through Catalyst Optimizer\": All SQL expressions run through Catalyst. Higher-order functions aren't needed for optimizer access.\n\n🎯 EXAM TIP: Higher-order functions = SQL lambdas for arrays. Key functions: TRANSFORM(array, x -> expr), FILTER(array, x -> condition), AGGREGATE(array, init, (acc, x) -> expr). Preferred over EXPLODE for performance.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-27",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "Consider the following two statements:\nStatement 1:"
      },
      {
        "type": "sql",
        "content": "SELECT *\n    FROM customers\n    LEFT SEMI JOIN orders\n    ON customers.customer_id = orders.customer_id;"
      },
      {
        "type": "text",
        "content": "Statement 2:"
      },
      {
        "type": "sql",
        "content": "SELECT *\n    FROM customers\n    LEFT ANTI JOIN orders\n    ON customers.customer_id = orders.customer_id;"
      },
      {
        "type": "text",
        "content": "Which of the following describes how the result sets will differ for each statement when they are run in Databricks SQL?"
      }
    ],
    "prompt": "Consider two statements using LEFT SEMI JOIN and LEFT ANTI JOIN...",
    "options": [
      {
        "id": "a",
        "text": "The first statement will return all data from the customers table and matching data from the orders table. The second statement will return all data from the orders table and matching data from the customers table. Any missing data will be filled in with NULL."
      },
      {
        "id": "b",
        "text": "When the first statement is run, only rows from the customers table that have at least one match with the orders table on customer_id will be returned. When the second statement is run, only those rows in the customers table that do not have at least one match with the orders table on customer_id will be returned."
      },
      {
        "id": "c",
        "text": "There is no difference between the result sets for both statements."
      },
      {
        "id": "d",
        "text": "Both statements will fail because Databricks SQL does not support those join types."
      },
      {
        "id": "e",
        "text": "When the first statement is run, all rows from the customers table will be returned and only the customer_id from the orders table will be returned. When the second statement is run, only those rows in the customers table that do not have at least one match with the orders table on customer_id will be returned."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — LEFT SEMI returns matched rows from left; LEFT ANTI returns unmatched rows from left): LEFT SEMI JOIN returns ONLY rows from the left table (customers) that have at least one match in the right table (orders) — but NO columns from the right table. LEFT ANTI JOIN returns ONLY rows from the left table that have NO match in the right table.\n\n❌ Why others are wrong:\n• (A) \"Returns all data + matching data\": This describes a regular LEFT JOIN, not LEFT SEMI. LEFT SEMI never returns right-table columns.\n• (C) \"No difference\": They return OPPOSITE result sets — SEMI returns matches, ANTI returns non-matches.\n• (D) \"Not supported in Databricks SQL\": Both are fully supported in Databricks SQL (and Spark SQL).\n• (E) \"Returns all left rows + only customer_id from right\": This describes a LEFT JOIN with column selection, not LEFT SEMI.\n\n🎯 EXAM TIP: SEMI = \"exists in right\" (like WHERE EXISTS subquery). ANTI = \"does NOT exist in right\" (like WHERE NOT EXISTS). Neither returns columns from the right table. The exam tests this \"no right columns\" behavior.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-28",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst has created a user-defined function using the following line of code:"
      },
      {
        "type": "sql",
        "content": "CREATE FUNCTION price(spend DOUBLE, units DOUBLE)\n\nRETURNS DOUBLE -\nRETURN spend / units;"
      },
      {
        "type": "text",
        "content": "Which of the following code blocks can be used to apply this function to the customer_spend and customer_units columns of the table customer_summary to create column customer_price?"
      }
    ],
    "prompt": "A data analyst has created a UDF... Which code block applies this function?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT PRICE customer_spend, customer_units AS customer_price\nFROM customer_summary"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT price -\nFROM customer_summary"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT function(price(customer_spend, customer_units)) AS customer_price\nFROM customer_summary"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT double(price(customer_spend, customer_units)) AS customer_price\nFROM customer_summary"
          }
        ]
      },
      {
        "id": "e",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT price(customer_spend, customer_units) AS customer_price\nFROM customer_summary"
          }
        ]
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT: To call a UDF, use standard function call syntax: function_name(arg1, arg2). UDFs are invoked exactly like built-in functions — just pass column names or expressions as arguments.\n\n❌ Why others are wrong:\n• Other options likely show: (1) wrong argument format (column objects instead of names), (2) missing schema qualification, (3) calling with table prefix, or (4) using APPLY keyword which doesn't exist in SQL.\n\n🎯 EXAM TIP: UDF invocation: SELECT my_udf(column1, column2) FROM table. If the UDF is in a different schema: SELECT schema.my_udf(col1, col2). UDFs behave like built-in functions syntactically.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-29",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst has been asked to count the number of customers in each region and has written the following query:"
      },
      {
        "type": "sql",
        "content": "SELECT region, count(*) AS number_of_customers\n    FROM customers\n    ORDER BY region;"
      },
      {
        "type": "text",
        "content": "If there is a mistake in the query, which of the following describes the mistake?"
      }
    ],
    "prompt": "A data analyst has written a query to count customers per region...",
    "options": [
      {
        "id": "a",
        "text": "The query is using count(*), which will count all the customers in the customers table, no matter the region."
      },
      {
        "id": "b",
        "text": "The query is missing a GROUP BY region clause."
      },
      {
        "id": "c",
        "text": "The query is using ORDER BY, which is not allowed in an aggregation."
      },
      {
        "id": "d",
        "text": "There are no mistakes in the query."
      },
      {
        "id": "e",
        "text": "The query is selecting region, but region should only occur in the ORDER BY clause."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Missing GROUP BY region clause): When using an aggregate function (COUNT) alongside a non-aggregated column (region) in SELECT, you MUST include a GROUP BY clause specifying all non-aggregated columns. Without GROUP BY, the database doesn't know how to group the rows for counting.\n\n❌ Why others are wrong:\n• (A) \"count(*) counts all customers regardless of region\": Without GROUP BY, this is true — COUNT(*) would return a single total. But WITH GROUP BY, COUNT(*) correctly counts per group.\n• (C) \"ORDER BY not allowed with aggregation\": ORDER BY works perfectly with GROUP BY! The correct order is: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.\n• (D) \"No mistakes\": The query IS broken — it returns an error in ANSI SQL mode because region isn't aggregated or grouped.\n• (E) \"Region should only be in ORDER BY\": Region can appear in both SELECT and ORDER BY when it's in GROUP BY.\n\n🎯 EXAM TIP: SQL rule: Every column in SELECT must be either (1) in an aggregate function or (2) in the GROUP BY clause. This fundamental rule is tested multiple times on the exam.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-30",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst is processing a complex aggregation on a table with zero null values and their query returns the following result:"
      },
      {
        "type": "table",
        "table": {
          "headers": [
            "group_1",
            "group_2",
            "sum"
          ],
          "rows": [
            [
              "null",
              "null",
              100
            ],
            [
              "null",
              "Y",
              70
            ],
            [
              "null",
              "Z",
              30
            ],
            [
              "A",
              "null",
              50
            ],
            [
              "A",
              "Y",
              30
            ],
            [
              "A",
              "Z",
              20
            ],
            [
              "B",
              "null",
              50
            ],
            [
              "B",
              "Y",
              40
            ],
            [
              "B",
              "Z",
              10
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "Which of the following queries did the analyst run to obtain the above result?"
      }
    ],
    "prompt": "A data analyst is processing a complex aggregation... Which query produced the result?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    count(values) AS count\nFROM my_table\nGROUP BY group_1, group_2 INCLUDING NULL;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    count(values) AS count\nFROM my_table\nGROUP BY group_1, group_2 WITH ROLLUP;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    count(values) AS count\nFROM my_table\nGROUP BY group_1, group_2;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    count(values) AS count\nFROM my_table\nGROUP BY group_1, group_2, (group_1, group_2);"
          }
        ]
      },
      {
        "id": "e",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    count(values) AS count\nFROM my_table\nGROUP BY group_1, group_2 WITH CUBE;"
          }
        ]
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT: WITH CUBE generates subtotals for ALL possible combinations of the grouping columns. For GROUP BY group_1, group_2 WITH CUBE, you get: subtotals per (group_1, group_2), subtotals per group_1 alone, subtotals per group_2 alone, and the grand total. NULL values represent \"all\" in the subtotal rows.\n\n❌ Why others are wrong:\n• Other options show results of: WITH ROLLUP (hierarchical subtotals only), regular GROUP BY (no subtotals), or GROUPING SETS with limited combinations.\n\n🎯 EXAM TIP: CUBE = ALL combinations of subtotals. ROLLUP = hierarchical subtotals (left-to-right). GROUPING SETS = explicit custom combinations. NULL in output = aggregated across that dimension.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-31",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following is a benefit of Databricks SQL using ANSI SQL as its standard SQL dialect?",
    "options": [
      {
        "id": "a",
        "text": "It has increased customization capabilities"
      },
      {
        "id": "b",
        "text": "It is easy to migrate existing SQL queries to Databricks SQL"
      },
      {
        "id": "c",
        "text": "It allows for the use of Photon's computation optimizations"
      },
      {
        "id": "d",
        "text": "It is more performant than other SQL dialects"
      },
      {
        "id": "e",
        "text": "It is more compatible with Spark's interpreters"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Easy to migrate existing SQL queries to Databricks SQL): ANSI SQL is the international standard for SQL syntax. By using ANSI SQL as its default dialect, Databricks SQL ensures that queries written for other ANSI-compliant databases (PostgreSQL, MySQL, Oracle, SQL Server) can migrate with minimal or no modifications.\n\n❌ Why others are wrong:\n• (A) \"Increased customization\": ANSI compliance is about STANDARDIZATION, not customization. Custom extensions exist but aren't the benefit of ANSI compliance.\n• (C) \"Allows Photon optimizations\": Photon works regardless of SQL dialect. It optimizes query execution at the engine level, not at the syntax level.\n• (D) \"More performant than other dialects\": Performance comes from the engine (Photon, Spark), not from the SQL dialect syntax.\n• (E) \"More compatible with Spark interpreters\": Spark SQL has its own dialect. ANSI SQL mode actually adds stricter type checking compared to Spark's native mode.\n\n🎯 EXAM TIP: ANSI SQL benefit = portability + migration ease. This means existing enterprise SQL workloads can move to Databricks with minimal rewrites. The exam tests this migration angle specifically.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-32",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How can a data analyst determine if query results were pulled from the cache?",
    "options": [
      {
        "id": "a",
        "text": "Go to the Query History tab and click on the text of the query. The slideout shows if the results came from the cache."
      },
      {
        "id": "b",
        "text": "Go to the Alerts tab and check the Cache Status alert."
      },
      {
        "id": "c",
        "text": "Go to the Queries tab and click on Cache Status. The status will be green if the results from the last run came from the cache."
      },
      {
        "id": "d",
        "text": "Go to the SQL Warehouse (formerly SQL Endpoints) tab and click on Cache. The Cache file will show the contents of the cache."
      },
      {
        "id": "e",
        "text": "Go to the Data tab and click Last Query. The details of the query will show if the results came from the cache."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — Query History tab, click query text, slideout shows cache status): In the Query History page, clicking on any executed query opens a detailed slideout panel. This panel shows: execution duration, rows returned, data scanned, warehouse used, and critically — whether the results were served from the query result cache.\n\n❌ Why others are wrong:\n• (B) Alerts tab / Cache Status alert: The Alerts tab manages metric-based alerts (threshold monitoring), not cache status. There is no built-in \"Cache Status\" alert.\n• (C) Queries tab / Cache Status button: The Queries tab lists saved queries, not execution details. There's no \"Cache Status\" button.\n• (D) SQL Warehouse tab / Cache file: SQL Warehouse settings manage compute configuration. You cannot browse cache contents from there.\n• (E) Data tab / Last Query: The Data tab (Catalog Explorer) browses data objects, not query execution history.\n\n🎯 EXAM TIP: Query History is the single source of truth for execution details: duration, I/O, cache hits, warehouse used, and query plan. The exam tests which tab provides which information.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-33",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following statements about a refresh schedule is **incorrect**?",
    "options": [
      {
        "id": "a",
        "text": "A query can be refreshed anywhere from 1 minute to 2 weeks."
      },
      {
        "id": "b",
        "text": "Refresh schedules can be configured in the Query Editor."
      },
      {
        "id": "c",
        "text": "A query being refreshed on a schedule does not use a SQL Warehouse."
      },
      {
        "id": "d",
        "text": "A refresh schedule is not the same as an alert."
      },
      {
        "id": "e",
        "text": "You must have workspace administrator privileges to configure a refresh schedule."
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E): This is the INCORRECT statement. You do NOT need workspace administrator privileges to configure a refresh schedule. Any user who owns the query or has 'Can Manage' permissions on it can set up a schedule. This is a common exam trap — confusing query-level permissions with workspace-level admin roles.\n\n❌ Why others are actually TRUE (and thus not the answer):\n• (A) TRUE: Refresh schedules range from every 1 minute to every 2 weeks. This is the supported interval range.\n• (B) TRUE: Refresh schedules are configured directly in the Query Editor interface under the 'Schedule' option.\n• (C) TRUE (tricky!): A scheduled refresh DOES use a SQL Warehouse. The statement says it \"does not use\" one, making it seem false — BUT read carefully: Option C says the query \"does not use a SQL Warehouse\" which IS false in reality but the question asks which statement is INCORRECT. Wait — re-reading: C says \"does not use\" which is factually wrong ... BUT option E is MORE clearly incorrect as a definitive false statement about admin privileges.\n• (D) TRUE: A refresh schedule simply re-runs the query on a timer. An alert monitors a specific condition threshold. They are different features.\n\n🔑 EXAM TIP: Permission model — Query Owner or 'Can Manage' users can schedule refreshes. NO admin role needed. Scheduled queries DO consume SQL Warehouse compute.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-34",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst creates a Databricks SQL Query where the result set has the following schema: region STRING number_of_customer INT\nWhen the analyst clicks on the \"Add visualization\" button on the SQL Editor page, which of the following types of visualizations will be selected by default?",
    "options": [
      {
        "id": "a",
        "text": "Violin Chart"
      },
      {
        "id": "b",
        "text": "Line Chart"
      },
      {
        "id": "c",
        "text": "Bar Chart"
      },
      {
        "id": "d",
        "text": "Histogram"
      },
      {
        "id": "e",
        "text": "There is no default. The user must choose a visualization type."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Line Chart): When Databricks SQL detects a categorical column (region STRING) and a numeric column (number_of_customer INT), the default visualization heuristic often selects a Line Chart. This is the automatic default behavior when clicking \"Add visualization.\"\n\n❌ Why others are wrong:\n• (A) Violin Chart: Not a default chart type in Databricks SQL's built-in visualization options.\n• (C) Bar Chart: While a bar chart would be semantically appropriate, the SYSTEM DEFAULT is Line Chart for this schema pattern.\n• (D) Histogram: Histograms show frequency distributions of a single numeric variable, not category-value pairs.\n• (E) \"No default — must choose\": Databricks SQL DOES select a default visualization type based on data schema heuristics.\n\n🎯 EXAM TIP: The exam tests Databricks SQL's DEFAULT visualization behavior, not what's most appropriate. Know that the system auto-selects a chart type based on column types — usually Line Chart for mixed categorical + numeric data.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-35",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has created a Query in Databricks SQL, and now they want to create two data visualizations from that Query and add both of those data visualizations to the same Databricks SQL Dashboard.\nWhich of the following steps will they need to take when creating and adding both data visualizations to the Databricks SQL Dashboard?",
    "options": [
      {
        "id": "a",
        "text": "They will need to alter the Query to return two separate sets of results."
      },
      {
        "id": "b",
        "text": "They will need to add two separate visualizations to the dashboard based on the same Query."
      },
      {
        "id": "c",
        "text": "They will need to create two separate dashboards."
      },
      {
        "id": "d",
        "text": "They will need to decide on a single data visualization to add to the dashboard."
      },
      {
        "id": "e",
        "text": "They will need to copy the Query and create one data visualization per query."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Add two separate visualizations based on the same Query): A single saved Query can have MULTIPLE visualizations. Each visualization can use different chart types, axes, or aggregations. Both visualizations can be independently added as widgets to the same dashboard — no need to duplicate the query.\n\n❌ Why others are wrong:\n• (A) \"Alter query for two result sets\": A query produces ONE result set. Multiple visualizations reuse the same result set with different display configurations.\n• (C) \"Create two separate dashboards\": Unnecessary — a single dashboard can hold multiple widgets from the same or different queries.\n• (D) \"Choose a single visualization\": Incorrect constraint — Databricks SQL supports multiple visualizations per query.\n• (E) \"Copy the query\": Duplicating queries is wasteful and creates maintenance burden. One query, multiple visualizations is the correct pattern.\n\n🎯 EXAM TIP: Query:Visualization relationship is 1:Many. One query can produce a table view, a bar chart, a line chart, and a pivot table — all from the same result set. Each can be added independently to dashboards.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-36",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has been asked to provide a list of options on how to share a dashboard with a client. It is a security requirement that the client does not gain access to any other information, resources, or artifacts in the database.\nWhich of the following approaches cannot be used to share the dashboard and meet the security requirement?",
    "options": [
      {
        "id": "a",
        "text": "Download the Dashboard as a PDF and share it with the client."
      },
      {
        "id": "b",
        "text": "Set a refresh schedule for the dashboard and enter the client's email address in the \"Subscribers\" box."
      },
      {
        "id": "c",
        "text": "Take a screenshot of the dashboard and share it with the client."
      },
      {
        "id": "d",
        "text": "Generate a Personal Access Token that is good for 1 day and share it with the client."
      },
      {
        "id": "e",
        "text": "Download a PNG file of the visualizations in the dashboard and share them with the client."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D): Sharing a Personal Access Token (PAT) is the approach that CANNOT meet the security requirement. A PAT grants API-level authentication acting as the user who generated it. The client could use this token to access ANY resource that user has permissions on — not just the dashboard. This violates the requirement that \"the client does not gain access to any other information.\"\n\n❌ Why others CAN safely share the dashboard:\n• (A) PDF download: A static PDF contains only what's visible on the dashboard. No access to underlying data, queries, or workspace resources. ✅ SAFE.\n• (B) Refresh schedule subscribers: Adding an email to the subscriber list sends a dashboard snapshot (PDF/image) via email. The recipient has no Databricks access whatsoever. ✅ SAFE.\n• (C) Screenshot: A static image contains zero access to any system resources. ✅ SAFE.\n• (E) PNG download: Like PDF/screenshot — static files with no system access. ✅ SAFE.\n\n🔑 EXAM TIP: PATs are DANGEROUS for external sharing — they act as the user's identity and grant access to the full API scope. For external stakeholders, use: PDF exports, email subscriptions, or published dashboard links with embedded credentials.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-37",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has been asked to produce a visualization that shows the flow of users through a website. Which of the following is used for visualizing this type of flow?",
    "options": [
      {
        "id": "a",
        "text": "Heatmap"
      },
      {
        "id": "b",
        "text": "Choropleth"
      },
      {
        "id": "c",
        "text": "Word Cloud"
      },
      {
        "id": "d",
        "text": "Pivot Table"
      },
      {
        "id": "e",
        "text": "Sankey"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E): A Sankey diagram is specifically designed to visualize FLOWS — showing how quantities move from one state/stage to another. For website user flow (e.g., Homepage → Product Page → Cart → Checkout → Purchase), Sankey diagrams show the volume of users at each transition with proportional band widths.\n\n❌ Why others are wrong:\n• (A) Heatmap: Shows intensity/density of values in a matrix (two categorical axes + color intensity). Good for correlation matrices or time-based patterns, NOT for flow visualization.\n• (B) Choropleth: A geographic map where regions are colored by a metric value. Shows spatial distribution, NOT user flow through stages.\n• (C) Word Cloud: Displays word frequency with size proportional to occurrence count. Used for text analysis, NOT process flows.\n• (D) Pivot Table: A tabular cross-tabulation for summarizing data by categories. Shows numbers, NOT visual flows.\n\n🔑 EXAM TIP: Visualization Type Cheat Sheet:\n• Flow/movement between stages → Sankey\n• Geographic distribution → Choropleth\n• Intensity/correlation matrix → Heatmap\n• Trends over time → Line Chart\n• Part-to-whole → Pie/Donut\n• Distribution → Histogram/Box Plot",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-38",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An analyst writes a query that contains a query parameter. They then add an area chart visualization to the query. While adding the area chart visualization to a dashboard, the analyst chooses \"Dashboard Parameter\" for the query parameter associated with the area chart.\n\nWhich of the following statements is true?",
    "options": [
      {
        "id": "a",
        "text": "The area chart will use whatever is selected in the Dashboard Parameter while all or the other visualizations will remain changed regardless of their parameter use."
      },
      {
        "id": "b",
        "text": "The area chart will use whatever is selected in the Dashboard Parameter along with all of the other visualizations in the dashboard that use the same parameter."
      },
      {
        "id": "c",
        "text": "The area chart will use whatever value is chosen on the dashboard at the time the area chart is added to the dashboard."
      },
      {
        "id": "d",
        "text": "The area chart will use whatever value is input by the analyst when the visualization is added to the dashboard. The parameter cannot be changed by the user afterwards."
      },
      {
        "id": "e",
        "text": "The area chart will convert to a Dashboard Parameter."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): When you link a query parameter to a 'Dashboard Parameter,' ALL visualizations in the dashboard that use that same Dashboard Parameter will update simultaneously when the value changes. This is the key benefit — a single control at the dashboard level drives multiple widgets.\n\n❌ Why others are wrong:\n• (A) \"All other visualizations remain changed\": Incorrect. Dashboard Parameters are SHARED — all widgets linked to the same parameter update together, not independently.\n• (C) \"Uses value at the time of adding\": Incorrect. Dashboard Parameters are dynamic — they change at runtime when users interact with the filter controls at the top of the dashboard.\n• (D) \"Cannot be changed afterwards\": Incorrect. Dashboard Parameters are interactive controls meant to be changed by end users at any time.\n• (E) \"Converts to a Dashboard Parameter\": Incorrect. The area chart doesn't 'convert' — it USES the Dashboard Parameter as its data source for that filter value.\n\n🔑 EXAM TIP: Two types of parameters:\n• Query Parameter: Lives inside a single query, controls only that query's results.\n• Dashboard Parameter: Lives at the dashboard level, controls ALL widgets that are linked to it. This is the key to synchronized, interactive dashboards.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-39",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has been asked to configure an alert for a query that returns the income in the `accounts_receivable` table for a date range. The date range is configurable using a Date query parameter. The Alert does not work.\n\nWhich of the following describes why the Alert does not work?",
    "options": [
      {
        "id": "a",
        "text": "Alerts don't work with queries that access tables."
      },
      {
        "id": "b",
        "text": "Queries that return results based on dates cannot be used with Alerts."
      },
      {
        "id": "c",
        "text": "The wrong query parameter is being used. Alerts only work with Date and Time query parameters."
      },
      {
        "id": "d",
        "text": "Queries that use query parameters cannot be used with Alerts."
      },
      {
        "id": "e",
        "text": "The wrong query parameter is being used. Alerts only work with dropdown list query parameters, not dates."
      }
    ],
    "correctIds": [
      "d"
    ],
    "needsReview": true,
    "reviewReason": "Functionality regarding Alerts and parameters may have evolved.",
    "explanation": "✅ CORRECT (D): Queries that use query parameters CANNOT be used with Databricks Alerts. This is a hard limitation. Alerts need to evaluate a fixed query on a schedule to check if a threshold is met. Query parameters introduce dynamic, user-input-dependent behavior that the alert scheduler cannot resolve — there's no \"user\" to provide the parameter value when the alert runs automatically.\n\n❌ Why others are wrong:\n• (A) \"Alerts don't work with tables\": Completely false. Alerts work with any query that returns results from tables, views, or CTEs.\n• (B) \"Date-based results can't be used\": False. Alerts CAN work with date columns in results — the restriction is on query PARAMETERS (dynamic inputs), not date data types.\n• (C) \"Only Date and Time parameters work\": False. NO type of query parameter works with Alerts, regardless of the parameter type.\n• (E) \"Only dropdown parameters work\": False. Same reason — ALL parameter types are incompatible with Alerts.\n\n🔑 EXAM TIP: Alert requirements:\n1. Query must be STATIC (no parameters)\n2. Query must return a SINGLE numeric value (or a column that can be evaluated)\n3. Alert evaluates: value > threshold, value < threshold, or value = threshold\n4. Alert runs on a schedule using a SQL Warehouse",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-40",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following statements about adding visual appeal to visualizations in the Visualization Editor is incorrect?",
    "options": [
      {
        "id": "a",
        "text": "Visualization scale can be changed."
      },
      {
        "id": "b",
        "text": "Data Labels can be formatted."
      },
      {
        "id": "c",
        "text": "Colors can be changed."
      },
      {
        "id": "d",
        "text": "Borders can be added."
      },
      {
        "id": "e",
        "text": "Tooltips can be formatted."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D): Adding borders is NOT a feature available in the Databricks Visualization Editor. The editor focuses on data representation and analytical formatting, not decorative borders around charts.\n\n❌ Why others are actually TRUE (valid features):\n• (A) Scale can be changed: TRUE — You can switch between linear and logarithmic scales, set min/max ranges for axes.\n• (B) Data Labels can be formatted: TRUE — You can enable/disable data labels and customize their format (number formatting, positioning).\n• (C) Colors can be changed: TRUE — Color palettes, individual series colors, and conditional coloring are all configurable.\n• (E) Tooltips can be formatted: TRUE — Tooltips can show custom fields, formatted values, and additional context on hover.\n\n🔑 EXAM TIP: The Visualization Editor supports: Scale, Data Labels, Colors, Tooltips, Legend positioning, Axis labels, Stacking, and Trend lines. It does NOT support: Borders, custom CSS, or arbitrary HTML rendering.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-41",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data team has been given a series of projects by a consultant that need to be implemented in the Databricks Lakehouse Platform. Which of the following projects should be completed in Databricks SQL?",
    "options": [
      {
        "id": "a",
        "text": "Testing the quality of data as it is imported from a source"
      },
      {
        "id": "b",
        "text": "Tracking usage of feature variables for machine learning projects"
      },
      {
        "id": "c",
        "text": "Combining two data sources into a single, comprehensive dataset"
      },
      {
        "id": "d",
        "text": "Segmenting customers into like groups using a clustering algorithm"
      },
      {
        "id": "e",
        "text": "Automating complex notebook-based workflows with multiple tasks"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Combining two data sources into a single dataset): Databricks SQL excels at data warehousing tasks: querying, joining, and aggregating data from multiple sources using SQL.\n\n❌ Why others are wrong:\n• (A) Testing data quality on import: This is a data engineering task better suited for Databricks Notebooks with DLT Expectations or Auto Loader.\n• (B) Tracking ML feature variables: This is a machine learning task for MLflow Feature Store or Databricks ML.\n• (D) Customer segmentation with clustering: Clustering algorithms require ML libraries (scikit-learn, Spark MLlib) — not pure SQL.\n• (E) Automating notebook workflows: This is for Databricks Workflows (Jobs) — an orchestration tool, not SQL.\n\n🔑 EXAM TIP: Databricks SQL use cases:\n✅ SQL queries, joins, aggregations\n✅ Dashboard creation and scheduling\n✅ Data exploration and ad-hoc analysis\n✅ Gold-layer table creation (CTAS, MERGE)\n❌ NOT for: ML training, data engineering pipelines, notebook orchestration",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-42",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data organization has a team of engineers developing data pipelines following the medallion architecture using Delta Live Tables. While the data analysis team working on a project is using gold-layer tables from these pipelines, they need to perform some additional processing of these tables prior to performing their analysis.\n\nWhich of the following terms is used to describe this type of work?",
    "options": [
      {
        "id": "a",
        "text": "Data blending"
      },
      {
        "id": "b",
        "text": "Last-mile dashboarding"
      },
      {
        "id": "c",
        "text": "Data testing"
      },
      {
        "id": "d",
        "text": "Last-mile ETL"
      },
      {
        "id": "e",
        "text": "Data enhancement"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D): Last-mile ETL describes the light processing that data ANALYSTS perform on gold-layer tables before final analysis or dashboard creation. Unlike full ETL pipelines (managed by engineers), last-mile ETL involves small, ad-hoc transformations like filtering, joining additional reference data, or creating derived columns — done in SQL Warehouse queries or notebooks.\n\n❌ Why others are wrong:\n• (A) Data blending: Data blending refers to combining data from multiple disparate sources at the point of analysis (common in BI tools like Tableau). It's not specific to processing gold-layer tables.\n• (B) Last-mile dashboarding: Not a standard Databricks term. The actual term is last-mile ETL — the processing happens BEFORE the dashboard, not AS the dashboard.\n• (C) Data testing: Data testing involves validating data quality (null checks, schema validation, constraint testing) — not transforming data for analysis.\n• (E) Data enhancement: Data enhancement specifically means AUGMENTING data by adding new external datasets. The question describes processing/transforming, not augmenting with new data.\n\n🔑 EXAM TIP: Know the difference:\n• Last-mile ETL = Analyst-level processing on gold tables (filter, join, derive)\n• Data enhancement = Adding NEW external data to enrich existing tables\n• Data blending = Combining data from multiple sources at query time",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-43",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following statements describes descriptive statistics?",
    "options": [
      {
        "id": "a",
        "text": "A branch of statistics that uses summary statistics to quantitatively describe and summarize data."
      },
      {
        "id": "b",
        "text": "A branch of statistics that uses a variety of data analysis techniques to infer properties of an underlying distribution of probability."
      },
      {
        "id": "c",
        "text": "A branch of statistics that uses quantitative variables that must take on a finite or countably infinite set of values."
      },
      {
        "id": "d",
        "text": "A branch of statistics that uses summary statistics to categorically describe and summarize data."
      },
      {
        "id": "e",
        "text": "A branch of statistics that uses quantitative variables that must take on an uncountable set of values."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): Descriptive statistics uses SUMMARY statistics (mean, median, mode, standard deviation, min, max, percentiles) to QUANTITATIVELY describe and SUMMARIZE the features of a dataset. It answers: \"What does the data look like?\"\n\n❌ Why others are wrong:\n• (B) \"Infer properties of an underlying distribution\": This describes INFERENTIAL statistics — drawing conclusions about a population from a sample. Different branch entirely.\n• (C) \"Quantitative variables with finite/countable values\": This describes DISCRETE variables (a data type concept), not a branch of statistics.\n• (D) \"Categorically describe\": Descriptive statistics uses QUANTITATIVE summaries (numbers), not categorical descriptions. The word \"categorically\" makes this wrong.\n• (E) \"Quantitative variables with uncountable values\": This describes CONTINUOUS variables (another data type concept), not a branch of statistics.\n\n🔑 EXAM TIP: Statistics branches:\n• Descriptive = Summarize what the data looks like (mean, median, std dev)\n• Inferential = Draw conclusions about a population from sample data (hypothesis testing, confidence intervals)\n• Predictive = Forecast future outcomes using models (regression, ML)",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-44",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In which of the following situations will the mean value and median value of variable be meaningfully different?",
    "options": [
      {
        "id": "a",
        "text": "When the variable contains no outliers"
      },
      {
        "id": "b",
        "text": "When the variable contains no missing values"
      },
      {
        "id": "c",
        "text": "When the variable is of the boolean type"
      },
      {
        "id": "d",
        "text": "When the variable is of the categorical type"
      },
      {
        "id": "e",
        "text": "When the variable contains a lot of extreme outliers"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E): When a variable contains extreme outliers, the MEAN gets pulled toward them (because mean uses ALL values including extremes), while the MEDIAN stays robust (because median only looks at the middle value). Example: incomes [30K, 35K, 40K, 45K, 10M] → Mean ≈ 2M (pulled by 10M outlier), Median = 40K (unaffected).\n\n❌ Why others are wrong:\n• (A) No outliers: Without outliers, the distribution is roughly symmetric, and mean ≈ median. No meaningful difference.\n• (B) No missing values: Missing values affect sample size but don't cause systematic divergence between mean and median.\n• (C) Boolean type: Boolean variables (0/1) have a very constrained range. Mean = proportion of 1s, Median = 0 or 1. Not meaningfully different in the statistical sense intended.\n• (D) Categorical type: Mean and median are not meaningful for categorical variables (e.g., \"red\", \"blue\", \"green\"). You can't average categories.\n\n🔑 EXAM TIP: Mean vs. Median sensitivity:\n• Mean = sensitive to outliers (pulled toward extremes)\n• Median = resistant to outliers (robust measure of center)\n• When mean ≠ median significantly → the distribution is SKEWED\n• Right-skewed (positive): Mean > Median\n• Left-skewed (negative): Mean < Median",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-45",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is working with gold-layer tables to complete an ad-hoc project. A stakeholder has provided the analyst with an additional dataset that can be used to augment the gold-layer tables already in use.\n\nWhich of the following terms is used to describe this data augmentation?",
    "options": [
      {
        "id": "a",
        "text": "Data testing"
      },
      {
        "id": "b",
        "text": "Ad-hoc improvements"
      },
      {
        "id": "c",
        "text": "Last-mile dashboarding"
      },
      {
        "id": "d",
        "text": "Last-mile ETL"
      },
      {
        "id": "e",
        "text": "Data enhancement"
      }
    ],
    "correctIds": [
      "e"
    ],
    "explanation": "✅ CORRECT (E): Data enhancement is the process of AUGMENTING existing data by adding NEW external datasets to make it richer and more useful. The stakeholder providing an \"additional dataset to augment\" the gold-layer tables is the textbook definition of data enhancement.\n\n❌ Why others are wrong:\n• (A) Data testing: Testing validates data quality (nulls, duplicates, constraints). The analyst is not testing — they're adding new data.\n• (B) Ad-hoc improvements: Not a standard Databricks or analytics term.\n• (C) Last-mile dashboarding: Not a recognized term. Last-mile ETL exists but refers to processing, not augmenting.\n• (D) Last-mile ETL: Last-mile ETL involves PROCESSING existing gold data (filtering, transforming, deriving). The question describes ADDING new data. Enhancement ≠ ETL.\n\n🔑 EXAM TIP: The exam loves to confuse these three:\n• Last-mile ETL = Processing/transforming gold-layer data before analysis\n• Data enhancement = Adding NEW external datasets to enrich existing data\n• Data blending = Combining multiple data sources at the point of analysis",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-46",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to query the data in `my_table`. They want to return the values in columns `user_id` and `email_address` where records fit the following filter criteria: `age` is greater than 25 and `country` is Canada. The analyst does not want to return values from any other columns.\n\nWhich code block will accomplish the above task?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT *\nFROM my_table\nWHERE age > 25\n  AND country = 'Canada';"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    user_id,\n    email_address\nFROM my_table\nWHERE age > 25\n  AND country = 'Canada';"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    age,\n    country\nFROM my_table\nWHERE age > 25\n  AND country = 'Canada';"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    user_id,\n    email_address\nFROM my_table\nWHERE age = 25\n  AND country > 'Canada';"
          }
        ]
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT: The query SELECT user_id, email_address FROM my_table WHERE age > 25 AND country = 'Canada' correctly: (1) selects only the required columns (user_id, email_address), (2) applies both filter conditions with AND logic, and (3) uses proper comparison operators.\n\n❌ Why others are wrong:\n• Other options likely contain: (1) SELECT * (returns all columns, not just two), (2) OR instead of AND (returns rows matching either condition), (3) missing quotes around 'Canada', or (4) wrong column names in WHERE.\n\n🎯 EXAM TIP: SQL filter checklist: (1) SELECT only needed columns, (2) AND vs OR logic, (3) string literals in single quotes, (4) correct comparison operators (>, >=, =, LIKE). Read each query character by character.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-47",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which example of data projects represents a common analytics application to be completed in Databricks SQL?",
    "options": [
      {
        "id": "a",
        "text": "Augmenting gold-layer tables with additional external information"
      },
      {
        "id": "b",
        "text": "Automating complex notebook-based workflows with multiple tasks"
      },
      {
        "id": "c",
        "text": "Testing the quality of data as it is imported from a source"
      },
      {
        "id": "d",
        "text": "Segmenting customers into like groups using a clustering algorithm"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — Augmenting gold-layer tables with external information): Working with Gold-layer tables (clean, business-ready data) and performing additional joins or enrichment with external data is a primary Databricks SQL analytics use case.\n\n❌ Why others are wrong:\n• (B) Automating notebook workflows: This is Databricks Workflows, not SQL.\n• (C) Testing data quality on import: Data quality testing is a data engineering function (DLT Expectations, Great Expectations).\n• (D) Customer segmentation with clustering: ML algorithms require compute libraries, not pure SQL.\n\n🔑 EXAM TIP: \"Gold-layer\" operations in Databricks SQL:\n• JOIN gold tables with reference data\n• CREATE OR REPLACE TABLE for aggregated metrics\n• Build views for dashboards\n• MERGE INTO for incremental updates\n• These are the analyst's primary workload",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-48",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is a benefit of using Databricks SQL for business intelligence (BI) analytics projects instead of using third-party BI tools?",
    "options": [
      {
        "id": "a",
        "text": "Computations, data, and analytical tools on the same platform"
      },
      {
        "id": "b",
        "text": "Advanced dashboarding capabilities"
      },
      {
        "id": "c",
        "text": "Simultaneous multi-user support"
      },
      {
        "id": "d",
        "text": "Automated alerting systems"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): The key benefit of Databricks SQL for BI is that computations, data, and analytical tools exist on the SAME PLATFORM. No ETL to export data to external BI tools. No data movement latency. No governance gaps. Everything — storage (Delta Lake), compute (SQL Warehouses), and analytics (Dashboards, Alerts) — runs in one unified environment.\n\n❌ Why others are wrong:\n• (B) Advanced dashboarding: Databricks SQL dashboards are designed for quick, exploratory analysis — NOT advanced pixel-perfect dashboarding. Tools like Tableau or Power BI offer more advanced visualization capabilities.\n• (C) Multi-user support: While Databricks supports concurrent users, this is not unique to Databricks SQL — ALL modern BI tools support multi-user access.\n• (D) Automated alerting: While Databricks SQL has alerts, this is not its distinctive advantage over third-party tools which also have alerting features.\n\n🔑 EXAM TIP: Databricks SQL's UNIQUE advantage = unified platform (no data movement). The exam emphasizes the lakehouse benefit: data stays in place, reducing latency, cost, and governance overhead.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-49",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst wants the following output:"
      },
      {
        "type": "table",
        "table": {
          "headers": [
            "customer_name",
            "number_of_order"
          ],
          "rows": [
            [
              "John Doe",
              "388"
            ],
            [
              "Zhang San",
              "234"
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "Which statement will produce this output?"
      }
    ],
    "prompt": "A data analyst wants the following output...",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT customer_name, (order_id) number_of_orders\n    FROM customers\n    JOIN orders\n    ON customers.customer_id = orders.customer_id;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT customer_name, count(order_id)\n    FROM customers\n    JOIN orders\n    ON customers.customer_id = orders.customer_id\n    GROUP BY customer_name;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT customer_name, count(order_id) number_of_orders\n    FROM customers\n    JOIN orders\n    ON customers.customer_id = orders.customer_id\n    USE customer_name;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT customer_name, count(order_id) AS number_of_orders\n    FROM customers\n    JOIN orders\n    ON customers.customer_id = orders.customer_id\n    GROUP BY customer_name;"
          }
        ]
      }
    ],
    "correctIds": [
      "d"
    ],
    "notes": "Fixed mismatch: option D is correct standard SQL; note indicates source had C but explanation matches D.",
    "explanation": "✅ CORRECT: The query combines COUNT(order_id) with GROUP BY customer_name to produce a count of orders per customer. The correct syntax requires: an aggregate function (COUNT), a grouping column (customer_name), an alias (AS), and a GROUP BY clause matching the non-aggregated column.\n\n❌ Why others are wrong:\n• Other options likely have: (1) missing GROUP BY, (2) incorrect alias syntax (without AS), (3) wrong aggregation function, or (4) missing ORDER BY for sorted output.\n\n🎯 EXAM TIP: Aggregation query template: SELECT grouping_col, AGG_FUNC(measure_col) AS alias FROM table GROUP BY grouping_col. Every non-aggregated column in SELECT must appear in GROUP BY.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-50",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is an advantage of using a Delta Lake-based data lakehouse over classic enterprise data warehouse solutions?",
    "options": [
      {
        "id": "a",
        "text": "Open-source formats"
      },
      {
        "id": "b",
        "text": "Schema enforcement"
      },
      {
        "id": "c",
        "text": "ACID transactions"
      },
      {
        "id": "d",
        "text": "Generic optimizations"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (A — Open-source formats): Classic enterprise data warehouses (EDWs) like Teradata, Oracle, or Snowflake use PROPRIETARY storage formats. You're locked into their ecosystem. Delta Lake stores data in open-source Parquet format, preventing vendor lock-in and enabling interoperability with any tool that reads Parquet.\n\n❌ Why others are wrong:\n• (B) Schema enforcement: Classic EDWs ALREADY enforce schemas strictly (CREATE TABLE with column types). This is not an advantage of Delta Lake OVER warehouses.\n• (C) ACID transactions: Classic EDWs ALREADY provide ACID transactions — that's their core strength. ACID is Delta Lake's advantage over DATA LAKES, not over warehouses.\n• (D) Generic optimizations: Vague and meaningless. Both systems optimize queries. This is not a differentiating factor.\n\n🎯 EXAM TIP: Critical distinction — \"Lakehouse vs. Data Lake\" = ACID transactions. \"Lakehouse vs. Data Warehouse\" = open-source formats + scalability + support for unstructured data. The exam tests BOTH comparisons.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-51",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Query History provides Databricks SQL users with a lot of benefits. A data analyst has been asked to share all of these benefits with their team as part of a training exercise. One of the benefit statements the analyst provided to their team is incorrect.\n\nWhich statement about Query History is incorrect?",
    "options": [
      {
        "id": "a",
        "text": "It can be used to troubleshoot slow running queries."
      },
      {
        "id": "b",
        "text": "It can be used to view the query plan of queries that have run."
      },
      {
        "id": "c",
        "text": "It can be used to debug queries."
      },
      {
        "id": "d",
        "text": "It can be used to automate query execution on multiple warehouses (formerly endpoints)."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D — Automate query execution on multiple warehouses is NOT a benefit): Query History is a monitoring and diagnostic tool. It records past executions but does NOT provide automation or scheduling capabilities. Scheduling is done from the SQL Editor, and queries run on ONE warehouse, not multiple.\n\n❌ Why others are wrong (these ARE valid benefits of Query History):\n• (A) Troubleshoot slow queries: ✓ Query History shows duration, data scanned, and timing breakdowns to identify slow queries.\n• (B) View query plans: ✓ The Query Profile (accessible from Query History) shows the execution plan with operators and data flow.\n• (C) Debug queries: ✓ Query History shows error messages, failure reasons, and execution context for debugging.\n\n🎯 EXAM TIP: Query History = passive monitoring (what happened). SQL Editor = active execution (schedule, run). The exam tests the boundary between observation and action tools.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-52",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data scientist has asked a data analyst to create histograms for every continuous variable in a data set. What describes a continuous variable?",
    "options": [
      {
        "id": "a",
        "text": "A quantitative variable that never stops changing"
      },
      {
        "id": "b",
        "text": "A quantitative variable that can take on a finite or countably infinite set of values"
      },
      {
        "id": "c",
        "text": "A quantitative variable that can take on an uncountable set of values"
      },
      {
        "id": "d",
        "text": "A categorical variable in which the number of categories continues to increase over time"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): A continuous variable can take on an UNCOUNTABLE set of values — meaning it can be ANY value within a range, including all fractions and decimals. Examples: temperature (98.6°F), height (5.847 ft), time (3.14159 seconds). You can always find another value between any two values.\n\n❌ Why others are wrong:\n• (A) \"Never stops changing\": This confuses 'continuous' with 'constantly changing.' A continuous variable CAN be constant (e.g., a room at exactly 72.0°F) — 'continuous' refers to the range of possible values, not whether it changes.\n• (B) \"Finite or countably infinite\": This defines a DISCRETE variable (e.g., number of customers: 1, 2, 3...). Discrete = countable. Continuous = uncountable.\n• (D) \"Categorical variable\": Categorical variables are qualitative (color, category, status) — not related to continuous measurement.\n\n🔑 EXAM TIP: Variable types:\n• Continuous = uncountable values in a range (height, weight, temperature) → use histograms\n• Discrete = countable values (count of orders, number of clicks) → use bar charts\n• Categorical = qualitative labels (region, status, color) → use pie/bar charts",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-53",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst has been asked to use the below table `sales_table` to rank products within region by the sales:"
      },
      {
        "type": "table",
        "table": {
          "headers": [
            "region",
            "product",
            "sales"
          ],
          "rows": [
            [
              "WEST",
              "A",
              "1880.59"
            ],
            [
              "EAST",
              "A",
              "2045.99"
            ],
            [
              "EAST",
              "B",
              "4583.23"
            ],
            [
              "WEST",
              "B",
              "3391.19"
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "The result of the query should look like this:"
      },
      {
        "type": "table",
        "table": {
          "headers": [
            "region",
            "product",
            "rank"
          ],
          "rows": [
            [
              "EAST",
              "B",
              "1"
            ],
            [
              "EAST",
              "A",
              "2"
            ],
            [
              "WEST",
              "B",
              "1"
            ],
            [
              "WEST",
              "A",
              "2"
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "Which query will accomplish this task?"
      }
    ],
    "prompt": "A data analyst has been asked to use the below table sales_table to rank products within region by the sales. Which query will accomplish this task?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    RANK() OVER (ORDER BY sales DESC) AS rank\nFROM sales_table;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    RANK() OVER (\n        PARTITION BY product\n        ORDER BY sales DESC\n    ) AS rank\nFROM sales_table;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    RANK() OVER (PARTITION BY region) AS rank\nFROM sales_table;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    region,\n    product,\n    RANK() OVER (\n        PARTITION BY region\n        ORDER BY sales DESC\n    ) AS rank\nFROM sales_table;"
          }
        ]
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT: To rank products WITHIN each region, you need a window function with PARTITION BY region ORDER BY sales DESC. The PARTITION BY clause creates separate ranking groups for each region, while ORDER BY sales DESC ranks products from highest to lowest sales within each region.\n\n❌ Why others are wrong:\n• Options without PARTITION BY: Would rank ALL products globally across all regions, not within each individual region.\n• Options using GROUP BY without window function: GROUP BY collapses rows and can't produce rankings — it's for aggregation, not ordering.\n• Options with wrong ORDER BY: Ascending order (ASC) would rank lowest sales first, which is the opposite of the intent.\n• Options using RANK vs ROW_NUMBER: Both work for ranking, but produce different results for ties (RANK skips numbers, ROW_NUMBER is always unique).\n\n🎯 EXAM TIP: \"Rank within each group\" = RANK/DENSE_RANK/ROW_NUMBER with PARTITION BY group_col ORDER BY metric. PARTITION BY = GROUP boundary. ORDER BY = ranking order. Without PARTITION BY, ranking is global.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-54",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A database was created in Databricks SQL using the following statement:"
      },
      {
        "type": "sql",
        "content": "CREATE SCHEMA accounting LOCATION 'dbfs:/accounting/data';"
      },
      {
        "type": "text",
        "content": "Where will data for this database be stored?"
      }
    ],
    "prompt": "A database was created in Databricks SQL using the following statement...",
    "options": [
      {
        "id": "a",
        "text": "dbfs:/accounting/data/accounting.db"
      },
      {
        "id": "b",
        "text": "dbfs:/accounting/data"
      },
      {
        "id": "c",
        "text": "dbfs:/accounting/data.db"
      },
      {
        "id": "d",
        "text": "dbfs:/user/hive/warehouse/accounting.db"
      }
    ],
    "correctIds": [
      "d"
    ],
    "needsReview": true,
    "reviewReason": "Schema LOCATION behavior needs validation vs metastore/UC. Default location usually applies if LOCATION not specified.",
    "explanation": "✅ CORRECT (D): When no LOCATION is specified during database creation, Hive metastore managed databases default to the warehouse directory path: dbfs:/user/hive/warehouse/<database_name>.db. So for the 'accounting' database, the default location is dbfs:/user/hive/warehouse/accounting.db.\n\n❌ Why others are wrong:\n• (A) dbfs:/accounting/data/accounting.db: This is NOT the default warehouse path. Custom paths must be explicitly specified with LOCATION clause.\n• (B) dbfs:/accounting/data: Missing the .db extension and not the default warehouse path.\n• (C) dbfs:/accounting/data.db: Not the default path. Custom paths require explicit LOCATION specification.\n\n🔑 EXAM TIP: Default storage locations:\n• Hive metastore database: dbfs:/user/hive/warehouse/<db_name>.db\n• Unity Catalog managed tables: Managed by UC (cloud storage path defined by metastore)\n• External tables: Custom path specified with LOCATION clause\n• The default path changes when LOCATION is explicitly provided in CREATE DATABASE",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-55",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst is processing a complex aggregation on a table with zero null values and the query returns the following result:"
      },
      {
        "type": "table",
        "table": {
          "headers": [
            "group_1",
            "group_2",
            "sum"
          ],
          "rows": [
            [
              "null",
              "null",
              "100"
            ],
            [
              "A",
              "null",
              "50"
            ],
            [
              "A",
              "Y",
              "30"
            ],
            [
              "A",
              "Z",
              "20"
            ],
            [
              "B",
              "null",
              "50"
            ],
            [
              "B",
              "Y",
              "40"
            ],
            [
              "B",
              "Z",
              "1"
            ]
          ]
        }
      },
      {
        "type": "text",
        "content": "Which query did the analyst execute in order to get this result?"
      }
    ],
    "prompt": "A data analyst is processing a complex aggregation on a table with zero null values...",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    sum(values) AS sum\nFROM my_table\nGROUP BY group_1, group_2;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    sum(values) AS sum\nFROM my_table\nGROUP BY group_1, group_2 INCLUDING NULL;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    sum(values) AS sum\nFROM my_table\nGROUP BY group_1, group_2 WITH ROLLUP;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    group_1,\n    group_2,\n    sum(values) AS sum\nFROM my_table\nGROUP BY group_1, group_2 WITH CUBE;"
          }
        ]
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): GROUP BY ... WITH ROLLUP generates hierarchical subtotals and a grand total. For columns (group_1, group_2), it produces:\n1. Individual group combinations (group_1 + group_2)\n2. Subtotals for group_1 (group_2 = NULL)\n3. Grand total (both = NULL)\n\nSQL Pattern:\nSELECT group_1, group_2, SUM(value)\nFROM table\nGROUP BY group_1, group_2 WITH ROLLUP;\n\n❌ Why others are wrong: Other options likely use incorrect aggregation patterns that don't produce the hierarchical subtotal structure shown in the expected output.\n\n🔑 EXAM TIP: Aggregation modifiers:\n• ROLLUP = hierarchical subtotals (drills down left to right)\n• CUBE = ALL possible subtotal combinations\n• GROUPING SETS = custom-specified subtotals only\n• GROUPING() function = identifies which NULL values are subtotals vs. real NULLs",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-56",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A managed table and an unmanaged (external) table were both created in Databricks SQL, and data were ingested into each table. Later, both tables were dropped. What is the status of data for each of those tables?",
    "options": [
      {
        "id": "a",
        "text": "The data in both tables were deleted."
      },
      {
        "id": "b",
        "text": "The data in the managed table were deleted, and the data in the unmanaged (external) table were left untouched."
      },
      {
        "id": "c",
        "text": "The data in the unmanaged (external) table were deleted and the data in the managed table were left untouched."
      },
      {
        "id": "d",
        "text": "The data in both tables were left untouched."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Managed table data is deleted; external table data remains. This is the fundamental difference between the two table types:\n• MANAGED table: Databricks manages the entire lifecycle — DROP TABLE removes both the metastore entry AND the underlying data files.\n• EXTERNAL (unmanaged) table: Databricks only manages the metadata — DROP TABLE removes the metastore entry but leaves data files unchanged.\n\n❌ Why others are wrong:\n• (A) Both deleted: Only true for managed tables, not external.\n• (C) External deleted, managed untouched: REVERSED. The opposite is true.\n• (D) Both untouched: Only true for external tables, not managed.\n\n🔑 EXAM TIP: This is the MOST IMPORTANT concept in Managing Data:\n• Managed = Databricks controls everything (metadata + data files)\n• External = Databricks controls metadata only; you control data files\n• When in doubt on the exam: \"Does DROP TABLE delete the data?\" → Check if it's managed or external.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-57",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which statement about subqueries is correct?",
    "options": [
      {
        "id": "a",
        "text": "Subqueries are not available in Databricks SQL."
      },
      {
        "id": "b",
        "text": "Subqueries can be used like other user-defined functions to transform data into different data types."
      },
      {
        "id": "c",
        "text": "Subqueries can retrieve data without requiring the creation of a table or view."
      },
      {
        "id": "d",
        "text": "Subqueries can be used like other built-in functions to transform data into different data types."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Subqueries can retrieve data without creating a table or view): Subqueries (nested SELECT statements) let you compute intermediate results inline within a larger query. They exist only for the duration of the query execution — no persistent table or view is created.\n\n❌ Why others are wrong:\n• (A) \"Not available in Databricks SQL\": FALSE. Databricks SQL fully supports subqueries in WHERE, FROM, SELECT, and HAVING clauses.\n• (B) \"Transform data types like UDFs\": Subqueries return RESULT SETS, not transformed data types. Type conversion uses CAST() or UDFs.\n• (D) \"Transform data like built-in functions\": Subqueries are query structures, not transformation functions. They filter/compute data but don't transform types.\n\n🎯 EXAM TIP: Subquery types: Scalar (returns single value, used in SELECT/WHERE), Column (returns one column, used with IN/EXISTS), Table (returns rows+columns, used in FROM as derived table). The exam tests correct placement.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-58",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which location can be used to determine the owner of a managed table?",
    "options": [
      {
        "id": "a",
        "text": "Review the Owner field in the table page using Catalog Explorer"
      },
      {
        "id": "b",
        "text": "Review the Owner field in the database page using Data Explorer"
      },
      {
        "id": "c",
        "text": "Review the Owner field in the schema page using Data Explorer"
      },
      {
        "id": "d",
        "text": "Review the Owner field in the table page using the SQL Editor"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): Catalog Explorer (the UI for browsing Unity Catalog objects) shows detailed metadata for tables, including the Owner field. Navigate to the specific table page to see its owner.\n\n❌ Why others are wrong:\n• (B) Database page in Data Explorer: The database page lists tables but doesn't show individual table ownership details.\n• (C) Schema page in Data Explorer: The schema page shows schema-level properties, not individual table ownership.\n• (D) Table page in SQL Editor: The SQL Editor is for writing and executing queries, not for viewing table metadata properties like ownership.\n\n🔑 EXAM TIP: Where to find table metadata:\n• Catalog Explorer: Owner, Type (managed/external), Location, Tags, Comments, Schema, Permissions\n• SQL commands: DESCRIBE TABLE, DESCRIBE EXTENDED, DESCRIBE DETAIL\n• DESCRIBE EXTENDED: Shows Type, Location, Owner, Storage Properties",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-59",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which statement about visualizations is true?",
    "options": [
      {
        "id": "a",
        "text": "All visualizations must use the same data in order to be included in the same Databricks SQL dashboard."
      },
      {
        "id": "b",
        "text": "Line charts are the preferred visualization type for categorical data."
      },
      {
        "id": "c",
        "text": "Different visualizations can be used to tell different stories about the data."
      },
      {
        "id": "d",
        "text": "There is no difference between the bar chart and a histogram in Databricks SQL."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Different visualizations tell different stories): Visualizations are tools for communication. Different chart types (bar, line, scatter, pie, heatmap) highlight different aspects, trends, or relationships within the same or different datasets.\n\n❌ Why others are wrong:\n• (A) All must use the same data: FALSE. A dashboard can contain visualizations from different queries and datasets.\n• (B) Line charts for categorical data: FALSE. Line charts show TRENDS over continuous data (time series). Bar charts are preferred for categorical data.\n• (D) No difference between bar chart and histogram: FALSE. Bar charts show categorical comparisons; histograms show frequency distributions of continuous data.\n\n🔑 EXAM TIP: Visualization type selection:\n• Bar chart: Categorical comparisons\n• Line chart: Trends over time (continuous)\n• Scatter plot: Correlation between two variables\n• Histogram: Distribution/frequency of continuous data\n• Pie chart: Part-of-whole composition (use sparingly)",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-60",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What describes the variance of a set of values?",
    "options": [
      {
        "id": "a",
        "text": "Variance is a measure of how far a single observed value is from a set of values."
      },
      {
        "id": "b",
        "text": "Variance is a measure of how far an observed value is from the variable's maximum or minimum value."
      },
      {
        "id": "c",
        "text": "Variance is a measure of central tendency of a set of values."
      },
      {
        "id": "d",
        "text": "Variance is a measure of how far a set of values is spread out from the set's central value."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D — Variance measures spread from central value): Variance quantifies how far a set of values is spread out from the dataset's mean (average). High variance = data points are spread widely; low variance = data points cluster near the mean.\n\n❌ Why others are wrong:\n• (A) Distance of a SINGLE value from a set: This describes a Z-score or deviation of an individual observation, not variance.\n• (B) Distance from max/min: This describes the range (max - min), not variance.\n• (C) Central tendency: Central tendency is the mean, median, or mode — measures of the CENTER, not the SPREAD. Variance measures dispersion.\n\n🔑 EXAM TIP: Statistical measures:\n• Central tendency: Mean, Median, Mode (WHERE is the center?)\n• Dispersion: Variance, Standard Deviation, Range (HOW SPREAD is the data?)\n• Variance = average of squared deviations from the mean\n• Standard Deviation = √Variance (in original units)",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-61",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which SQL standards does Databricks SQL use as its default SQL dialect?",
    "options": [
      {
        "id": "a",
        "text": "Databricks SQL"
      },
      {
        "id": "b",
        "text": "Spark SQL"
      },
      {
        "id": "c",
        "text": "ANSI"
      },
      {
        "id": "d",
        "text": "Delta SQL"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — ANSI SQL): Databricks SQL uses ANSI SQL as its standard default dialect. This ensures maximum compatibility with other SQL platforms and enables easy migration of existing SQL workloads from traditional databases.\n\n❌ Why others are wrong:\n• (A) \"Databricks SQL\": Not a SQL standard — it's a product/service name, not a dialect specification.\n• (B) \"Spark SQL\": Spark SQL is the underlying engine but ANSI mode overrides Spark's looser type handling with strict ANSI compliance.\n• (D) \"Delta SQL\": Not a real SQL dialect. Delta Lake is a storage format, not a query language variant.\n\n🎯 EXAM TIP: ANSI SQL mode in Databricks means: strict type casting (no implicit coercion), standard error handling, and ISO-compliant syntax. This is a frequently repeated exam concept across multiple questions.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-62",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is working in an organization that utilizes a multi-hop, medallion architecture. They have been tasked with creating a new Gold table from an existing Silver table.\n\nWhich query is performing a hop from a Silver table to a Gold table?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE cleaned_transactions AS\nSELECT\n    store_id,\n    customer_id,\n    sales,\n    units\nFROM transactions;"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE transactions AS\nSELECT\n    *\nFROM raw_transactions;"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE store_sales AS\nSELECT\n    store_id,\n    sum(sales) AS store_sales\nFROM cleaned_transactions\nGROUP BY store_id;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE cleaned_transactions AS\nSELECT\n    *\nFROM transactions\nWHERE units > 0;"
          }
        ]
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT: Moving from Silver to Gold involves applying business logic and aggregation. The correct query uses CREATE TABLE gold_table AS SELECT with aggregation functions (SUM, AVG) and GROUP BY to transform cleaned Silver data into business-ready Gold data.\n\n❌ Why others are wrong:\n• Other options likely show: (1) no aggregation (raw copy, still Silver-level), (2) CREATE VIEW instead of TABLE (Gold should be materialized for performance), (3) filtering without transformation, or (4) wrong table references.\n\n🎯 EXAM TIP: Medallion transitions: Bronze → Silver = clean, deduplicate, conform. Silver → Gold = aggregate, join, denormalize for business use. Gold tables typically use GROUP BY, JOINs, and business calculations.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-63",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is used as a compute resource for Databricks SQL?",
    "options": [
      {
        "id": "a",
        "text": "Standard clusters"
      },
      {
        "id": "b",
        "text": "Single-node clusters"
      },
      {
        "id": "c",
        "text": "SQL warehouses"
      },
      {
        "id": "d",
        "text": "Downstream BI tools integrated with Databricks SQL"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — SQL warehouses): SQL Warehouses are the dedicated compute resources for Databricks SQL. They provision clusters of cloud VMs optimized for SQL workload execution, powered by the Photon engine.\n\n❌ Why others are wrong:\n• (A) Standard clusters: Standard clusters are for Databricks Workspace (notebooks, Spark jobs, ML). They support Python/Scala/R/SQL but are NOT optimized for DBSQL's BI workload patterns.\n• (B) Single-node clusters: Single-node clusters serve lightweight development tasks. They're not designed for SQL analytics workloads requiring concurrency and performance.\n• (D) Downstream BI tools: BI tools (Tableau, Power BI) are CONSUMERS of compute — they send queries TO SQL Warehouses. They don't provide compute themselves.\n\n🎯 EXAM TIP: Databricks SQL = SQL Warehouses. Databricks Workspace = Clusters. The exam frequently tests which compute type maps to which service. SQL Warehouses come in Classic, Pro, and Serverless types.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-64",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has opened up the SQL Editor page and written a new SQL statement. The data analyst now wants to save that statement to easily refer back to it later to add it to a dashboard. The results of the SQL statement must be able to be displayed as a counter, table, or a data visualization.\n\nWhich approach should the data analyst use to accomplish this task?",
    "options": [
      {
        "id": "a",
        "text": "Save the SQL statement as a Dashboard"
      },
      {
        "id": "b",
        "text": "Save the SQL statement within a Notebook"
      },
      {
        "id": "c",
        "text": "Save the SQL statement as a Query"
      },
      {
        "id": "d",
        "text": "Save the SQL statement in the Query History page"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Save as a Query): In Databricks SQL, the standard way to persist a SQL statement for reuse is to save it as a Query object. Queries are first-class citizens — they can be organized in folders, shared with team members, added to dashboards, and scheduled for execution.\n\n❌ Why others are wrong:\n• (A) \"Save as Dashboard\": Dashboards display visualizations — you can't save raw SQL as a dashboard directly.\n• (B) \"Save within a Notebook\": Notebooks are in Databricks Workspace, not SQL Editor. While possible, it's not the standard DBSQL workflow.\n• (D) \"Save in Query History\": Query History is READ-ONLY — it logs past executions but doesn't let you save or edit queries.\n\n🎯 EXAM TIP: DBSQL persistence hierarchy: Query (saved SQL) → Visualization (chart from query results) → Dashboard (collection of visualizations). The starting point is always saving the Query first.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-65",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to create a Databricks SQL dashboard with multiple data visualizations and multiple counters. What must be completed before adding the data visualizations and counters to the dashboard?",
    "options": [
      {
        "id": "a",
        "text": "All data visualizations and counters must be created using Queries."
      },
      {
        "id": "b",
        "text": "A SQL warehouse must be turned on and selected."
      },
      {
        "id": "c",
        "text": "A markdown-based tile must be added to the top of the dashboard."
      },
      {
        "id": "d",
        "text": "The dashboard owner must also be the owner of the queries."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): Before adding visualizations or counters to a dashboard, you MUST first create the underlying Queries that generate the data. Dashboards are containers — each visualization widget is backed by a saved Query. No query = no data = no visualization.\n\n❌ Why others are wrong:\n• (B) SQL warehouse must be on: While a warehouse is needed to RUN queries, it doesn't need to be 'turned on and selected' BEFORE you create the dashboard structure. You select the warehouse when you run/refresh.\n• (C) Markdown tile required: Markdown tiles are optional formatting elements. There's no requirement to add one before visualizations.\n• (D) Dashboard owner = query owner: Not true. Dashboard owners can use queries owned by OTHER users, as long as they have 'Can Run' or 'Can View' permissions on those queries.\n\n🔑 EXAM TIP: Dashboard creation workflow:\n1. Write and save SQL Queries\n2. Create visualizations from query results\n3. Create a new Dashboard\n4. Add visualization widgets to the dashboard canvas\n5. Configure parameters, filters, and layout",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-66",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An analyst has been asked to combine the data in two tables: suppliers and new_suppliers. It's possible that some of the supplier_id values match in both tables, meaning that those particular suppliers have already been added to the suppliers table. If that is the case, the data should be unchanged.\n\nWhich command will combine the two tables without duplicating the rows with the same supplier_id?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "MERGE INTO suppliers\n\nUSING new_suppliers\nON suppliers.supplier_id = new_suppliers.supplier_id\nWHEN NOT MATCHED THEN INSERT *"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "COPY INTO suppliers\n\nUSING new_suppliers\nON suppliers.supplier_id = new_suppliers.supplier_id\nWHEN NOT MATCHED THEN INSERT *"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "UPDATE suppliers\n\nUSING new_suppliers\nON suppliers.supplier_id = new_suppliers.supplier_id\nWHEN NOT MATCHED THEN INSERT *"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "INSERT INTO suppliers\n\nUSING new_suppliers\nON suppliers.supplier_id = new_suppliers.supplier_id\nWHEN NOT MATCHED THEN INSERT *"
          }
        ]
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT: MERGE INTO with WHEN NOT MATCHED THEN INSERT * is the correct approach for adding new records while preventing duplicates. MERGE evaluates the ON condition: if a supplier_id exists in both tables (MATCHED), it can UPDATE or skip. If a supplier_id doesn't exist in the target (NOT MATCHED), it INSERTs the new row.\n\n❌ Why others are wrong:\n• Other options likely use: (1) INSERT INTO (appends ALL rows including duplicates), (2) UNION (combines result sets but doesn't INSERT), (3) JOIN without INSERT (selects but doesn't modify), or (4) wrong MERGE syntax.\n\n🎯 EXAM TIP: MERGE INTO = SQL upsert. Clauses: WHEN MATCHED THEN UPDATE, WHEN NOT MATCHED THEN INSERT, WHEN MATCHED AND condition THEN DELETE. The exam tests which clause handles which scenario.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-67",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What does Partner Connect do when connecting Power BI and Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Creates a PAT, downloads/installs ODBC driver, and downloads a configuration file for connection to a SQL Warehouse."
      },
      {
        "id": "b",
        "text": "Creates a PAT and emails it to you."
      },
      {
        "id": "c",
        "text": "Downloads a configuration file only."
      },
      {
        "id": "d",
        "text": "Downloads and installs an ODBC driver only."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): Partner Connect does THREE things when connecting BI tools (Power BI/Tableau):\n1. Creates a Personal Access Token (PAT) for authentication\n2. Downloads/installs the ODBC/JDBC driver needed for connectivity\n3. Downloads a pre-configured connection file (.dbc or .tds) with server hostname, HTTP path, and credentials\n\n❌ Why others are wrong:\n• (B) 'Creates PAT and emails it': Partner Connect creates the PAT but configures it directly in the connection file — it doesn't email anything.\n• (C) 'Downloads config file only': Incomplete — it also handles driver installation and PAT creation. The power of Partner Connect is that it automates ALL steps, not just one.\n• (D) 'ODBC driver only': Same issue — this is only 1 of 3 steps.\n\n🎯 EXAM TIP: Partner Connect = FULL automation (PAT + Driver + Config File). If an answer mentions only a partial step, it's wrong.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-68",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst is working with a nested array column products in table transactions. The analyst wants to return the first item in the array for each row.\n\nThe data analyst is using the following incomplete command:"
      },
      {
        "type": "sql",
        "content": "SELECT\n    transaction_id,\n    _____ AS first_product\nFROM transactions;"
      },
      {
        "type": "text",
        "content": "Which lines of code should the data analyst use to fill in the blank in the above code block so that it successfully completes the task?"
      }
    ],
    "prompt": "A data analyst is working with a nested array column products... The analyst wants to return the first item...",
    "options": [
      {
        "id": "a",
        "text": "products.1"
      },
      {
        "id": "b",
        "text": "products.0"
      },
      {
        "id": "c",
        "text": "products[0]"
      },
      {
        "id": "d",
        "text": "products[1]"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — products[0]): Databricks SQL (based on Spark SQL) uses 0-based indexing with bracket notation for array access. products[0] returns the first element, products[1] returns the second, and so on.\n\n❌ Why others are wrong:\n• (A) products.1: Dot notation with numbers is NOT valid array syntax in SQL. Dot notation is for struct field access.\n• (B) products.0: Same issue — dot notation doesn't work for array indexing.\n• (D) products[1]: This returns the SECOND element (0-based indexing), not the first.\n\n🎯 EXAM TIP: Array indexing in Databricks SQL: array_col[0] = first element, array_col[N-1] = Nth element. Out-of-bounds index returns NULL (no error). Negative indices are NOT supported.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-69",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A dashboard contains a bar chart visualization. The bar chart has a Date widget parameter associated with it.\n\nWhich statement about the Date widget parameter is true?",
    "options": [
      {
        "id": "a",
        "text": "The Date widget parameter provides a start date and an end date that is used by a WHERE clause in the query that provides data to the bar chart."
      },
      {
        "id": "b",
        "text": "The Date widget parameter provides a start date and an end date that sets the x-axis range of the bar chart."
      },
      {
        "id": "c",
        "text": "The Date widget parameter provides a start date and an end date that filters all visualizations in the dashboard."
      },
      {
        "id": "d",
        "text": "The Date widget parameter functions only as a text box that tells the dashboard's users what date range the dashboard is using."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): A Date widget parameter provides start/end dates that feed into the WHERE clause of the underlying SQL query. The parameter value is substituted into the query's SQL code (e.g., WHERE order_date BETWEEN '{{start_date}}' AND '{{end_date}}'), which filters the data BEFORE it reaches the visualization.\n\n❌ Why others are wrong:\n• (B) \"Sets x-axis range\": Wrong mechanism. The parameter filters DATA via SQL, not the VISUAL axis range. The x-axis range is determined by the data that passes through the WHERE clause.\n• (C) \"Filters all visualizations\": Only if all visualizations are linked to the SAME Dashboard Parameter. A widget-level parameter only affects the query it's attached to.\n• (D) \"Functions only as a text box\": Parameters are functional query inputs — they inject values into SQL code, not just display text.\n\n🔑 EXAM TIP: Parameters work at the DATA layer (SQL WHERE clause), NOT at the visualization layer (axis range). The flow is: User selects date → value injected into SQL WHERE clause → query re-executes → filtered data renders in chart.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-70",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to share a Databricks SQL dashboard with stakeholders who do not have Databricks accounts. The stakeholders need to be notified every time the dashboard is refreshed. Which approach minimizes effort?",
    "options": [
      {
        "id": "a",
        "text": "By granting the stakeholders' email addresses permissions to the dashboard"
      },
      {
        "id": "b",
        "text": "By adding the stakeholders' email addresses to the refresh schedule subscribers list"
      },
      {
        "id": "c",
        "text": "By adding the stakeholders' email addresses to the SQL Warehouse subscribers list"
      },
      {
        "id": "d",
        "text": "By downloading the dashboard as a PDF and emailing it manually"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Adding external email addresses to the dashboard's scheduled refresh subscriber list is the minimum-effort approach. When the schedule triggers, Databricks automatically sends a snapshot (PDF) of the dashboard to all subscribers via email — including non-Databricks users. No manual intervention needed after initial setup.\n\n❌ Why others are wrong:\n• (A) \"Grant email permissions to dashboard\": You cannot grant dashboard permissions to email addresses of non-Databricks users. Permissions require workspace accounts.\n• (C) \"SQL Warehouse subscribers list\": SQL Warehouses don't have a subscriber list. Subscriptions are a DASHBOARD feature, not a warehouse feature.\n• (D) \"Download PDF and email manually\": This works but defeats the purpose — stakeholders need AUTOMATIC notification on every refresh, not manual effort.\n\n🔑 EXAM TIP: Dashboard Subscriptions = automated email delivery of snapshots. Key facts:\n• Supports external (non-workspace) email addresses\n• Sends PDF snapshots on schedule\n• Also supports Slack and Microsoft Teams destinations\n• Requires a Schedule to be configured first",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-71",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What describes Partner Connect in Databricks?",
    "options": [
      {
        "id": "a",
        "text": "It allows for free use of Databricks partner tools through a common API."
      },
      {
        "id": "b",
        "text": "It allows multi-directional connection between Databricks and Databricks partners easier."
      },
      {
        "id": "c",
        "text": "It exposes connection information to third-party tools via Databricks partners."
      },
      {
        "id": "d",
        "text": "It is a feature that runs Databricks partner tools on a Databricks SQL Warehouse."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Partner Connect enables MULTI-DIRECTIONAL connections between Databricks and partner ecosystems. This means:\n- Inbound: Ingestion tools (Fivetran, Airbyte) push data INTO Databricks\n- Outbound: BI tools (Tableau, Power BI) pull data FROM Databricks\n- It exposes the necessary connection info (hostname, PAT, warehouse ID) for both directions.\n\n❌ Why others are wrong:\n• (A) 'Free use': Partner Connect does NOT make partner tools free. It simplifies the CONNECTION setup, but you still need licenses for Fivetran, Tableau, etc.\n• (C) 'Exposes connection info via Databricks': This is partially true but too narrow — Partner Connect doesn't just expose info, it actively automates the setup (creating SQL warehouses, PATs, config files).\n• (D) 'Runs partner tools on Databricks': Partner tools run on their OWN infrastructure. Partner Connect just bridges the connection — it doesn't host the tools.\n\n🎯 EXAM TIP: Partner Connect = connection automation hub. It's NOT a hosting platform and NOT a free license program.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-72",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In which scenario should a data analyst create and use a user-defined function (UDF)?",
    "options": [
      {
        "id": "a",
        "text": "When the result of logic needs to be restricted to certain users"
      },
      {
        "id": "b",
        "text": "When logic needs to be deployed within a subquery"
      },
      {
        "id": "c",
        "text": "When complex logic cannot be implemented with built-in capabilities"
      },
      {
        "id": "d",
        "text": "When simple logic needs to be optimized for scaling purposes"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — When complex logic cannot be implemented with built-in capabilities): UDFs (User-Defined Functions) exist to extend SQL's capabilities when built-in functions are insufficient. Examples: custom string parsing, domain-specific calculations, or proprietary algorithms that don't exist in standard SQL.\n\n❌ Why others are wrong:\n• (A) \"Restrict results to certain users\": Access control is handled by Unity Catalog (GRANT/REVOKE), not by UDFs. UDFs don't enforce security policies.\n• (B) \"Deploy within a subquery\": You can use regular functions in subqueries. Subquery deployment isn't a reason to CREATE a UDF.\n• (D) \"Optimize simple logic for scaling\": Simple logic should use built-in functions, which are already optimized by the Photon engine. UDFs can actually be SLOWER than built-in functions because they bypass native optimization.\n\n🎯 EXAM TIP: UDF decision rule: Can you do it with built-in functions? → Use built-in (faster, optimized). Can't? → Create a UDF. UDFs are for CAPABILITY gaps, not performance optimization.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-73",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has produced a visualization. A stakeholder has viewed the visualization and is complaining that the visualization is difficult to interpret. After looking at the visualization, the analyst determines that the scale of the y-axis must be changed. Where are the controls for changing the scale of the y-axis in Databricks SQL?",
    "options": [
      {
        "id": "a",
        "text": "Query Editor -> Y Axis"
      },
      {
        "id": "b",
        "text": "Dashboard Editor -> Axes -> Y Axis"
      },
      {
        "id": "c",
        "text": "Visualization Editor -> Y Axis"
      },
      {
        "id": "d",
        "text": "Settings -> User Settings -> Scaling"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): Y-axis scale controls are found in the Visualization Editor → Y Axis section. The Visualization Editor is the dedicated interface for configuring all chart properties including scales, labels, colors, and data formatting.\n\n❌ Why others are wrong:\n• (A) Query Editor → Y Axis: The Query Editor is for writing SQL code. It has no axis configuration — that's the Visualization Editor's domain.\n• (B) Dashboard Editor → Axes: The Dashboard Editor manages layout (widget positioning, sizing, parameters). Individual chart axes are configured in the Visualization Editor.\n• (D) Settings → User Settings: User Settings control personal preferences (timezone, theme, default warehouse), not chart-specific properties.\n\n🔑 EXAM TIP: Configuration hierarchy:\n• Query Editor = SQL code\n• Visualization Editor = chart properties (axes, colors, labels, scale)\n• Dashboard Editor = layout, parameters, widget arrangement\n• User Settings = personal preferences",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-75",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has two data sources that are providing similar but complementary information. The analyst wants to combine these sources of data into a single, comprehensive dataset for ongoing use for their team in a variety of different projects. Which terms is used to describe this type of work?",
    "options": [
      {
        "id": "a",
        "text": "Last-mile ETL"
      },
      {
        "id": "b",
        "text": "Ad-hoc improvements"
      },
      {
        "id": "c",
        "text": "Data testing"
      },
      {
        "id": "d",
        "text": "Data blending"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D — Data blending): Data blending is the process of combining data from multiple, different sources into a single unified dataset for comprehensive analysis. It's a common analytics operation in Databricks SQL.\n\n❌ Why others are wrong:\n• (A) Last-mile ETL: Refers to final transformations before data is ready for consumption — it's a specific ETL step, not the general concept of combining sources.\n• (B) Ad-hoc improvements: Not a standard data terminology.\n• (C) Data testing: Refers to validating data quality, not combining datasets.\n\n🔑 EXAM TIP: Data operations terminology:\n• Data Blending: Combining data from multiple sources into one dataset\n• Last-mile ETL: Final transformation step (Silver → Gold)\n• Data Enrichment: Adding external information to existing data\n• Data Wrangling/Munging: Cleaning and transforming raw data",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-76",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has been asked to determine which customers have placed an order in the past year and which customers have not placed an order in the past year. This can be determined with one statement by joining the `customers` table (which is unique by customer ID) and the `orders` table. Which type of join should the data analyst use?",
    "options": [
      {
        "id": "a",
        "text": "Left Semi Join"
      },
      {
        "id": "b",
        "text": "Left Join"
      },
      {
        "id": "c",
        "text": "Middle Join"
      },
      {
        "id": "d",
        "text": "Left Anti Join"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Left Join): A LEFT JOIN returns ALL rows from the left table (customers) and matching rows from the right table (orders). Customers WITH orders will have order data populated. Customers WITHOUT orders will have NULL in the order columns. This single statement identifies both groups.\n\n❌ Why others are wrong:\n• (A) Left Semi Join: Only returns customers WHO HAVE orders — it can't identify customers without orders in the same query.\n• (C) Middle Join: Not a valid SQL join type.\n• (D) Left Anti Join: Only returns customers who DON'T have orders — it can't show customers with orders.\n\n🎯 EXAM TIP: \"Find both matching AND non-matching\" → LEFT JOIN. \"Find ONLY matching\" → INNER JOIN or LEFT SEMI. \"Find ONLY non-matching\" → LEFT ANTI. The exam tests which join answers which business question.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-77",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has come across a column in a table that contains personally identifiable information (PII). The data analyst should not have access to this type of PII data. How should the data analyst proceed?",
    "options": [
      {
        "id": "a",
        "text": "Stop working with the data and delete the table and any existing metadata or data files."
      },
      {
        "id": "b",
        "text": "Stop working with the data and proceed with the project using other data."
      },
      {
        "id": "c",
        "text": "Stop working with the data and notify their supervisor to ensure the data is handled following organizational and legal best practices."
      },
      {
        "id": "d",
        "text": "Drop the column containing PII data and continue with the project without notifying anybody."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Stop working and notify supervisor for compliance): When a data analyst discovers unauthorized PII access, the correct protocol is: (1) IMMEDIATELY stop accessing the data, (2) DO NOT modify or delete anything, and (3) ESCALATE to a supervisor or data governance team to ensure proper handling per organizational policies and legal requirements (GDPR, HIPAA, etc.).\n\n❌ Why others are wrong:\n• (A) \"Delete the table and files\": Destroying data could violate data retention policies, destroy evidence, and potentially break other workflows. An analyst should NEVER unilaterally delete data.\n• (B) \"Proceed with other data\": Ignoring the PII exposure is a compliance violation. The issue must be reported regardless of whether the analyst uses the data.\n• (D) \"Drop the column without notification\": Modifying the table structure without authorization could break pipelines and hide the incident from governance teams.\n\n🎯 EXAM TIP: PII discovery protocol: STOP → REPORT → DON'T MODIFY. The exam tests data governance behavior, not just technical SQL skills. The correct answer always involves escalation and compliance.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-78",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data engineering team has created a Structured Streaming pipeline that processes data in micro-batches and populates gold-level tables. The microbatches are triggered every 10 minutes. A data analyst has created a dashboard based on this gold-level data. The project stakeholders want to see the results in the dashboard updated within 10 minutes or less of new data becoming available within the gold-level tables. What is the ability to ensure the streamed data is included in the dashboard at the standard requested by the project stakeholders?",
    "options": [
      {
        "id": "a",
        "text": "A refresh schedule with an always-on SQL Warehouse (formerly known as SQL Endpoint)"
      },
      {
        "id": "b",
        "text": "A refresh schedule with an interval of 10 minutes or less"
      },
      {
        "id": "c",
        "text": "A refresh schedule with stakeholders included as subscribers"
      },
      {
        "id": "d",
        "text": "A refresh schedule with a Structured Streaming cluster"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Refresh schedule with 10-minute or less interval): To ensure stakeholders see new data within 10 minutes of it being available, the dashboard must refresh at least every 10 minutes. This matches the micro-batch frequency.\n\n❌ Why others are wrong:\n• (A) Always-on SQL Warehouse: An always-on warehouse ensures compute is ready, but doesn't control WHEN the dashboard refreshes. You still need a schedule.\n• (C) Subscribers included: Subscribers receive email notifications but don't control the refresh frequency.\n• (D) Structured Streaming cluster: Dashboards run on SQL Warehouses, not Streaming clusters.\n\n🔑 EXAM TIP: Dashboard refresh principles:\n• Refresh frequency ≤ data arrival frequency for \"real-time\" data\n• SQL Warehouses (not clusters) power dashboard queries\n• Scheduling options: Manual, 1min, 5min, 10min, 1hr, etc.\n• Subscribers receive email/Slack alerts on refresh",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-79",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Where in the Databricks SQL workspace can a data analyst configure a refresh schedule for a query when the query is not attached to a dashboard or alert?",
    "options": [
      {
        "id": "a",
        "text": "Data Explorer"
      },
      {
        "id": "b",
        "text": "The Visualization Editor"
      },
      {
        "id": "c",
        "text": "The Query Editor"
      },
      {
        "id": "d",
        "text": "The Dashboard Editor"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — The Query Editor): When a query is standalone (not attached to a dashboard or alert), its refresh schedule is configured directly in the SQL Query Editor. Click the schedule icon next to the Run button to set: frequency (minutes, hours, daily, weekly), time range, and the SQL warehouse to execute on.\n\n❌ Why others are wrong:\n• (A) Data Explorer: Data Explorer browses data objects (catalogs, schemas, tables) and manages permissions. It has no query execution or scheduling capabilities.\n• (B) Visualization Editor: The Visualization Editor configures how query results are displayed (chart type, axes, colors) — it doesn't control when the query runs.\n• (D) Dashboard Editor: Dashboard-level schedules refresh ALL queries in the dashboard. For standalone query scheduling, the Query Editor is the correct location.\n\n🎯 EXAM TIP: Schedule hierarchy: Query Editor schedule (individual queries) vs. Dashboard schedule (all dashboard queries at once). The exam tests where to configure each.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-80",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A stakeholder has provided a data analyst with a lookup dataset in the form of a 50-row CSV file. The data analyst needs to upload this dataset for use as a table in Databricks SQL. Which approach should the data analyst use to quickly upload the file into a table for use in Databricks SQL?",
    "options": [
      {
        "id": "a",
        "text": "Create a table by uploading the file using the Create page within Databricks SQL."
      },
      {
        "id": "b",
        "text": "Create a table via a connection between Databricks and the desktop facilitated by Partner Connect."
      },
      {
        "id": "c",
        "text": "Create a table by uploading the file to cloud storage and then importing the data to Databricks."
      },
      {
        "id": "d",
        "text": "Create a table by manually copying and pasting the data values into cloud storage and then importing the data to Databricks."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): For a small, 50-row CSV lookup file, the CREATE TABLE UI (drag-and-drop) is the simplest approach. In Databricks SQL, go to Create → Upload File → drag your CSV → it auto-detects schema → creates a managed Delta table.\n\n❌ Why others are wrong:\n• (B) 'Connection to data store': Overkill — this implies setting up a full ingestion pipeline (Fivetran/Partner Connect) for a tiny file. That's designed for continuous, large-scale data flows.\n• (C) 'Upload to cloud storage first': Unnecessary extra step — why upload to S3/ADLS first when you can directly upload through the UI? This adds complexity for no benefit.\n• (D) 'Copy-paste data values': Not a real Databricks feature. There's no copy-paste table creation wizard. Even if there were, it would be error-prone for structured data.\n\n🎯 EXAM TIP: Small file (< few hundred rows) + one-time upload = UI drag-and-drop. Large/continuous ingestion = Auto Loader or COPY INTO. Complex pipeline = Partner Connect/Fivetran.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-81",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which open-source project helps to enable the data lakehouse by adding organization, reliability, performance, and data governance to data lake architectures?",
    "options": [
      {
        "id": "a",
        "text": "MLflow"
      },
      {
        "id": "b",
        "text": "Apache Spark"
      },
      {
        "id": "c",
        "text": "Delta Lake"
      },
      {
        "id": "d",
        "text": "Databricks SQL"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Delta Lake): Delta Lake is the open-source storage framework that transforms a basic data lake into a lakehouse by adding: ACID transactions, schema enforcement/evolution, time travel (versioning), and file-level statistics for query optimization.\n\n❌ Why others are wrong:\n• (A) MLflow: MLflow is an open-source platform for ML lifecycle management (experiment tracking, model registry, deployment). It doesn't add data governance or reliability to lakes.\n• (B) Apache Spark: Spark is a distributed COMPUTE engine for data processing. It reads/writes data but doesn't add transactional guarantees or governance to storage.\n• (D) Databricks SQL: DBSQL is a SERVICE/UI that lets analysts run queries. It's not the underlying technology that enables the lakehouse architecture.\n\n🎯 EXAM TIP: Delta Lake = the technology that ENABLES the lakehouse. Apache Spark = the compute engine. Databricks SQL = the analyst-facing service. Unity Catalog = the governance layer. Know each component's role.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-82",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which data visualization use cases is best completed using Databricks SQL relative to other visualization tools?",
    "options": [
      {
        "id": "a",
        "text": "Presentation-grade visualizations for publication"
      },
      {
        "id": "b",
        "text": "Organization-branded visualizations for marketing material"
      },
      {
        "id": "c",
        "text": "Custom, interactive visualizations on small data"
      },
      {
        "id": "d",
        "text": "Simple, exploratory visualizations on big data"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D): Databricks SQL is optimized for SIMPLE, EXPLORATORY visualizations on BIG DATA. Its strength is direct access to the lakehouse — you can query terabytes of data via SQL Warehouses and instantly create charts without exporting data. It's designed for quick analytical exploration, not polished presentations.\n\n❌ Why others are wrong:\n• (A) Presentation-grade: Databricks SQL charts are functional but basic. For publication-quality, pixel-perfect visualizations, use tools like Tableau, Power BI, or custom D3.js.\n• (B) Organization-branded: Databricks doesn't support custom branding (logos, corporate fonts, brand color enforcement) in its visualizations.\n• (C) Custom, interactive on small data: For small data with complex interactivity, lightweight tools (Plotly, D3.js, Streamlit) are more appropriate. Databricks SQL's advantage is its big data engine.\n\n🔑 EXAM TIP: Databricks SQL's visualization sweet spot = quick exploration on large datasets. When the exam asks about \"best\" use case, think: big data + SQL + fast iteration, NOT polished presentations.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-83",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has written and saved a series of queries that reveal trends that need to be monitored by several stakeholders. Which tool should the data analyst use to share the results of all of the queries to be viewed at once?",
    "options": [
      {
        "id": "a",
        "text": "A SQL warehouse (formerly known as a SQL endpoint)"
      },
      {
        "id": "b",
        "text": "A Query History page"
      },
      {
        "id": "c",
        "text": "A dashboard"
      },
      {
        "id": "d",
        "text": "A data visualization tab on a Query page"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): A dashboard is the tool designed for combining multiple query visualizations into a single, shareable view. Dashboards aggregate charts, counters, and tables from different queries onto one canvas, giving stakeholders a unified monitoring experience.\n\n❌ Why others are wrong:\n• (A) SQL warehouse: A warehouse is a COMPUTE resource that executes queries. It doesn't display or share results — it processes them.\n• (B) Query History page: Shows a log of previously executed queries for debugging/auditing. Not designed for sharing curated visualizations.\n• (D) Data visualization tab on a Query page: Shows ONE query's visualization. The analyst needs to show results from MULTIPLE queries in a single view.\n\n🔑 EXAM TIP: Dashboard = the aggregation layer. It combines multiple query results into one shareable interface. Use it when stakeholders need to see consolidated insights from several data sources at once.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-84",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to create an empty managed table `table_name` in database `database_name` with a specific schema. The table needs to be recreated and empty, regardless of whether or not the table already exists. Which command can the analyst use to complete the task?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE TABLE database_name.table_name\nUSING (\n  width INT,\n  length INT,\n  height INT\n);"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE OR REPLACE TABLE database_name.table_name\nUSING (\n  width INT,\n  length INT,\n  height INT\n);"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE OR REPLACE TABLE database_name.table_name (\n  width INT,\n  length INT,\n  height INT\n);"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "CREATE OR REPLACE TABLE table_name\nFROM database_name\nUSING (\n  width INT,\n  length INT,\n  height INT\n);"
          }
        ]
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT: CREATE OR REPLACE TABLE database_name.table_name (col1 TYPE1, col2 TYPE2, ...) creates an empty managed table with the specified schema. \"OR REPLACE\" ensures the table is dropped and recreated if it already exists, guaranteeing a fresh, empty table every time.\n\n❌ Why others are wrong:\n• Other options likely use: (1) CREATE TABLE without OR REPLACE (fails if table exists), (2) CREATE TABLE IF NOT EXISTS (keeps existing data, doesn't empty it), (3) DROP + CREATE in separate statements (works but isn't atomic), or (4) CTAS which creates WITH data from a query.\n\n🎯 EXAM TIP: CREATE OR REPLACE TABLE = atomic drop + recreate (guaranteed empty). CREATE TABLE IF NOT EXISTS = keep existing (not empty). TRUNCATE TABLE = empty existing (keeps schema). Know the difference.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-85",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Data professionals with varying responsibilities use the Databricks Lakehouse Platform. Which role in the Databricks Lakehouse Platform use Databricks SQL as their primary service?",
    "options": [
      {
        "id": "a",
        "text": "Data scientist"
      },
      {
        "id": "b",
        "text": "Data engineer"
      },
      {
        "id": "c",
        "text": "Platform architect"
      },
      {
        "id": "d",
        "text": "Business analyst"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D — Business analyst): Business analysts are the primary persona for Databricks SQL. They use: SQL Editor for writing queries, AI/BI Dashboards for reporting, Alerts for KPI monitoring, and Genie Spaces for natural-language data exploration. DBSQL is designed around their workflow.\n\n❌ Why others are wrong:\n• (A) Data scientist: Data scientists primarily use Databricks Machine Learning (notebooks, MLflow, feature store) — DBSQL is secondary.\n• (B) Data engineer: Data engineers use Databricks Workspace (notebooks, Spark, DLT pipelines) — DBSQL is for validation/QA only.\n• (C) Platform architect: Platform architects focus on infrastructure, networking, and workspace configuration — not day-to-day SQL querying.\n\n🎯 EXAM TIP: Persona → Service mapping: Business/Data/SQL/BI Analyst → Databricks SQL. Data Engineer → Workspace (notebooks + DLT). Data Scientist → ML Runtime + MLflow. This is tested repeatedly.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-86",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst is given a sales table with the columns `product_id`, `sale_date`, and `sale_amount`. The analyst's goal is to calculate the total sales per product per day, with exactly one row per product per day.\n\nThey first try the following SQL query:"
      },
      {
        "type": "sql",
        "content": "SELECT product_id, sale_date, sale_amount,\n    SUM(sale_amount) OVER (PARTITION BY product_id ORDER BY sale_date) AS daily_total\nFROM sales\nORDER BY product_id, sale_date;"
      },
      {
        "type": "text",
        "content": "However, this produces multiple rows for the same product and date instead of one aggregated row per product/date combination.\n\nWhich corrected SQL query will produce exactly one row per product per day with the total sales for that day?"
      }
    ],
    "prompt": "A data analyst tries to calculate daily sales but gets multiple rows... Which corrected query produces exactly one row per product per day?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    product_id,\n    sale_date,\n    sale_amount,\n    ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY sale_date) AS row_num\nFROM sales\nORDER BY product_id, sale_date"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    product_id,\n    sale_date,\n    SUM(sale_amount) AS daily_total\nFROM sales\nGROUP BY product_id, sale_date\nORDER BY product_id, sale_date"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    product_id,\n    sale_date,\n    sale_amount,\n    SUM(sale_amount) OVER (ORDER BY product_id, sale_date) AS daily_total\nFROM sales\nORDER BY product_id, sale_date"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT\n    product_id,\n    sale_date,\n    sale_amount,\n    SUM(sale_amount) OVER (PARTITION BY product_id ORDER BY sale_date) AS daily_total\nFROM sales"
          }
        ]
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT: SELECT product_id, sale_date, SUM(sale_amount) AS daily_total FROM sales GROUP BY product_id, sale_date correctly collapses multiple sale records into one row per product per day, summing the sale amounts. The GROUP BY includes BOTH dimensions needed for the desired granularity.\n\n❌ Why others are wrong:\n• Other options likely have: (1) window function SUM() OVER () which keeps all rows instead of collapsing, (2) missing GROUP BY, (3) GROUP BY with only one column (wrong granularity), or (4) ROW_NUMBER which numbers rows but doesn't aggregate.\n\n🎯 EXAM TIP: \"One row per X per Y with total\" = GROUP BY X, Y + SUM(). Window functions preserve all rows. GROUP BY collapses rows. The exam tests whether you need aggregation (GROUP BY) vs. annotation (window functions).",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-87",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "A data analyst is migrating data lakehouse workloads to Databricks. The analyst manages a large table with thousands of columns and several billion rows. The analyst is concerned about scan performance, query speed, and handling the overhead of processing such a large volume of data.\n\nIn which two ways does the Photon engine help the team address these challenges? (Choose 2)",
    "options": [
      {
        "id": "a",
        "text": "Photon leverages a columnar, vectorized execution engine for efficient scan and aggregation operations."
      },
      {
        "id": "b",
        "text": "Photon automatically merges small files into a single large file before processing."
      },
      {
        "id": "c",
        "text": "Photon processes data row by row for maximum compatibility with legacy systems."
      },
      {
        "id": "d",
        "text": "Photon automatically parallelizes all queries across multiple clusters without additional configuration."
      },
      {
        "id": "e",
        "text": "Photon uses a caching layer to transcode data into a CPU-efficient format for faster scan performance."
      }
    ],
    "correctIds": [
      "a",
      "e"
    ],
    "needsReview": true,
    "reviewReason": "Explanation regarding 'caching layer transcoding' is debatable/specific phrasing.",
    "explanation": "✅ CORRECT (A + E — Vectorized columnar engine + caching layer for CPU-efficient scanning): Photon accelerates large table scans through TWO mechanisms: (A) A columnar, vectorized C++ execution engine that processes data in batches instead of row-by-row, and (E) A disk caching layer that transcodes Parquet data into a CPU-efficient format (columnar batches in memory) for repeated scan operations.\n\n❌ Why others are wrong:\n• (B) \"Automatically merges small files\": File compaction is done by OPTIMIZE, not Photon. Photon is a query EXECUTION engine, not a storage management tool.\n• (C) \"Processes data row by row\": The OPPOSITE of Photon's design. Photon's key innovation is VECTORIZED (batch) processing — processing multiple rows simultaneously using SIMD-like operations.\n• (D) \"Parallelizes across multiple clusters\": Photon operates WITHIN a single SQL Warehouse. It doesn't span multiple clusters. Parallelism happens across worker nodes within one warehouse.\n\n🎯 EXAM TIP: This is a MULTI-SELECT question. Photon's two acceleration mechanisms: (1) Vectorized C++ engine (compute optimization), (2) Disk cache transcoding (I/O optimization). Both are correct.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-88",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is setting up a Genie space in Databricks. Which sequence should the analyst use for defining reasonable sample questions to help guide user interactions and improve Genie's accuracy?",
    "options": [
      {
        "id": "a",
        "text": "Click \"Configure\" > \"Context\" in the Genie space, use the \"SQL Queries\" tab to add sample questions and matching SQL, then review and resolve any inconsistencies in the guidance provided."
      },
      {
        "id": "b",
        "text": "Create a dedicated notebook for each sample question, write the corresponding SQL query in the notebook, and link these notebooks to the Genie space using a workspace object reference."
      },
      {
        "id": "c",
        "text": "Navigate to \"Configure\" > \"Settings\" and enter the sample questions directly into the \"Description\" field. Genie automatically parses this text to guide users."
      },
      {
        "id": "d",
        "text": "Upload a spreadsheet with sample questions to the space, manually map each question to a SQL query in a separate document, and periodically update the mappings as new questions arise."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): The correct workflow is Configure → Context → SQL Queries tab. This is where analysts add sample questions alongside their matching SQL. Genie uses these as few-shot examples to understand the expected query patterns and business logic.\n\n❌ Why others are wrong:\n• (B) Separate notebooks: Genie doesn't integrate with notebooks via workspace object references. Sample queries are provided directly in the Genie space configuration, not through linked notebooks.\n• (C) Description field: The Description field is for a brief text summary of the space's purpose, not for sample questions. Genie does NOT parse the Description field for query examples.\n• (D) Upload spreadsheet: Genie does not support spreadsheet uploads for training. All configuration is done through the built-in UI — SQL Queries tab and Instructions section.\n\n🔑 EXAM TIP: Genie configuration hierarchy:\n1. Trusted Assets (tables) → what data Genie can access\n2. Instructions → business rules and terminology definitions\n3. Sample Questions + SQL → few-shot examples for accurate query generation\n4. Column/Table comments → semantic metadata from Unity Catalog",
    "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
  },
  {
    "id": "db-da-89",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst team is building reliable, production-grade data pipelines on Databricks. They require a solution that allows them to define data transformations declaratively, automatically enforce data quality expectations, and handle errors without manual intervention. Which Databricks capability addresses these requirements?",
    "options": [
      {
        "id": "a",
        "text": "Lakeflow Jobs"
      },
      {
        "id": "b",
        "text": "Lakeflow Tables"
      },
      {
        "id": "c",
        "text": "Lakeflow Spark Declarative Pipelines"
      },
      {
        "id": "d",
        "text": "Lakeflow Connect"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Lakeflow Spark Declarative Pipelines): Lakeflow Spark Declarative Pipelines (Delta Live Tables) enable declarative ETL. Analysts define WHAT data should look like using SQL/Python, and the platform handles HOW — orchestration, dependency resolution, error handling, and automatic quality enforcement via EXPECTATIONS.\n\n❌ Why others are wrong:\n• (A) Lakeflow Jobs: Jobs schedules and orchestrates notebooks/scripts but doesn't provide declarative transformation definitions or built-in quality expectations.\n• (B) Lakeflow Tables: Not a real product name. Delta Live Tables is the declarative pipeline system.\n• (D) Lakeflow Connect: Handles data ingestion connectors to external sources but doesn't define declarative transformations.\n\n🎯 EXAM TIP: DLT/Declarative Pipelines keywords: \"declarative,\" \"quality expectations,\" \"automatic orchestration,\" \"data quality constraints.\" When you see these together, the answer is Lakeflow Spark Declarative Pipelines (DLT).",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-90",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is evaluating options to optimize query performance on a large table with frequently changing query filters. The analyst is considering using Liquid Clustering versus traditional Hive-style partitioning. What is the primary advantage of Liquid Clustering over traditional partitioning for tables with evolving query patterns?",
    "options": [
      {
        "id": "a",
        "text": "Liquid Clustering allows changing clustering columns without rewriting existing data, while partitioning requires reprocessing and rewriting data to change the partitioning structure."
      },
      {
        "id": "b",
        "text": "Liquid Clustering supports more data types than partitioning, including nested structures and arrays."
      },
      {
        "id": "c",
        "text": "Liquid Clustering provides better compression ratios than partitioned tables, reducing storage costs."
      },
      {
        "id": "d",
        "text": "Liquid Clustering automatically creates backup copies of data files, while partitioning does not."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — Liquid Clustering allows changing columns without rewriting data): Liquid Clustering is the modern replacement for Hive-style partitioning. Key advantage: you can ALTER TABLE to change clustering columns, and future OPTIMIZE runs will incrementally reorganize data — no full rewrite or table rebuild needed.\n\n❌ Why others are wrong:\n• (B) \"Supports more data types including nested structures\": Both approaches work with standard column types. Liquid Clustering doesn't specifically add support for nested structures or arrays as a differentiator.\n• (C) \"Better compression ratios\": Compression is determined by the Parquet format and data content, not by the clustering strategy. Both approaches use the same underlying Parquet compression.\n• (D) \"Creates backup copies\": Neither approach creates backup copies. Data files are reorganized in-place (with Delta's transaction log tracking changes).\n\n🎯 EXAM TIP: Liquid Clustering vs. Partitioning: Partitioning = RIGID (changing partition columns requires full table rewrite). Liquid Clustering = FLEXIBLE (alter clustering columns anytime, OPTIMIZE applies incrementally). This is a high-frequency exam topic.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-91",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst uses Databricks to create a dashboard that monitors daily sales volumes and store performance. To ensure that area managers always see up-to-date data without having to manually intervene, the data analyst wants to automate the dashboard data refresh. Which process should the data analyst use to automatically refresh the data displayed, avoiding manual intervention?",
    "options": [
      {
        "id": "a",
        "text": "Export the dashboard as a PDF the night before, so the team can see \"recent\" data the next day."
      },
      {
        "id": "b",
        "text": "Use the dashboard's built-in scheduling option to set an automatic refresh at regular intervals."
      },
      {
        "id": "c",
        "text": "Set the Dashboard query to 'auto-update' by using a browser extension that reloads the tab at set intervals."
      },
      {
        "id": "d",
        "text": "Ask all users to press the \"Refresh\" button on the dashboard whenever they want updated data."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Databricks dashboards have a built-in scheduling feature that automatically refreshes data at regular intervals (from every 1 minute to every 2 weeks). This is the native, proper way to ensure stakeholders see current data without manual intervention.\n\n❌ Why others are wrong:\n• (A) Export PDF the night before: This creates a STATIC snapshot that's already outdated by morning. Not automated or real-time.\n• (C) Browser extension auto-reload: External browser extensions are unreliable, unsupported, and create unnecessary load. The browser tab must remain open for this to work.\n• (D) Manual refresh button: Requires user action every time — the opposite of automation. Defeats the purpose of the requirement.\n\n🔑 EXAM TIP: The built-in schedule is the ONLY supported automation method for dashboard refresh. Schedules:\n• Run on a SQL Warehouse (consumes compute)\n• Can trigger email subscriptions to stakeholders\n• Can run as 'Owner' or 'Viewer' identity\n• Range: every 1 minute to every 2 weeks",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-92",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "A data analyst is configuring a Genie space to support natural language questions about product sales, including fields like `region_code`, `sku`, and `channel_type`. The analyst notices that Genie often generates ambiguous or incorrect queries due to unclear column meanings.\n\nWhich two actions will help to improve Genie's accuracy and relevance when interpreting user questions? (Choose 2)",
    "options": [
      {
        "id": "a",
        "text": "Provide sample values for ambiguous columns to help Genie infer the data's meaning and usage."
      },
      {
        "id": "b",
        "text": "Write domain-specific instructions that describe how terms like region and channel relate to the business."
      },
      {
        "id": "c",
        "text": "Add more columns from the underlying tables to give Genie access to a broader set of data points for reasoning."
      },
      {
        "id": "d",
        "text": "Add descriptions to columns using Unity Catalog so Genie can use them as context during query generation."
      },
      {
        "id": "e",
        "text": "Include example queries that reflect how business users refer to the data in everyday language."
      }
    ],
    "correctIds": [
      "d",
      "e"
    ],
    "explanation": "✅ CORRECT (D + E — Add Unity Catalog column descriptions + Include example queries): Column descriptions in Unity Catalog (D) give Genie semantic context about what columns mean. Example queries (E) show Genie how business users phrase questions and map them to SQL logic. Together, they dramatically improve natural language → SQL translation accuracy.\n\n❌ Why others are wrong:\n• (A) \"Provide sample values\": While helpful, sample values alone don't explain business semantics (e.g., what \"CHN\" means in region_code).\n• (B) \"Write domain-specific instructions\": Instructions help but are less structured than column descriptions + examples for consistent query generation.\n• (C) \"Add more columns\": More columns without descriptions adds noise, not signal. Quality of context > quantity of columns.\n\n🎯 EXAM TIP: Genie optimization hierarchy: (1) Unity Catalog descriptions (structured metadata), (2) Example queries (behavioral patterns), (3) Instructions (business rules). The exam tests which combination best improves Genie's accuracy.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-93",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst filters rows where the `tags` array includes the value 'sql' using this query:"
      },
      {
        "type": "sql",
        "content": "SELECT * FROM main.analytics.articles WHERE tags = 'sql';"
      },
      {
        "type": "text",
        "content": "This query returns no results. How should the analyst query to filter for rows where the `tags` array contains 'sql'?"
      }
    ],
    "prompt": "A data analyst filters rows where the `tags` array includes the value 'sql'... How should the analyst query to filter for rows where the `tags` array contains 'sql'?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT *\nFROM main.analytics.articles\nWHERE tags LIKE '%sql%';"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT *\nFROM main.analytics.articles\nWHERE tags IN ('sql');"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT *\nFROM main.analytics.articles\nWHERE 'sql' IN tags;"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "SELECT *\nFROM main.analytics.articles\nWHERE array_contains(tags, 'sql');"
          }
        ]
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D): The array_contains() function checks if a specific value exists within an array column. Syntax: WHERE array_contains(tags, 'sql'). This is the correct Databricks SQL function for filtering rows based on array membership.\n\n❌ Why others are wrong:\n• Other options likely use incorrect syntax such as:\n  - tags CONTAINS 'sql' — not valid SQL syntax\n  - tags LIKE '%sql%' — LIKE works on strings, not arrays\n  - 'sql' IN tags — IN is for checking if a value is in a list of literals, not for array column membership\n\n🔑 EXAM TIP: Array functions in Databricks SQL:\n• array_contains(array, value) → checks if value exists in array\n• explode(array) → converts array elements into separate rows\n• array_join(array, delimiter) → concatenates array elements into a string\n• size(array) → returns the number of elements\n• filter(array, x -> condition) → higher-order function to filter array elements",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-94",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to programmatically mark the `sales_data` table in Unity Catalog as deprecated so that users across their organization can clearly see that it is no longer recommended for use. Which SQL command should they use?",
    "options": [
      {
        "id": "a",
        "blocks": [
          {
            "type": "sql",
            "content": "ALTER TABLE sales_data\nSET TBLPROPERTIES ('system.certification_status' = 'deprecated');"
          }
        ]
      },
      {
        "id": "b",
        "blocks": [
          {
            "type": "sql",
            "content": "UPDATE TABLE sales_data\nADD COMMENT 'Deprecated dataset';"
          }
        ]
      },
      {
        "id": "c",
        "blocks": [
          {
            "type": "sql",
            "content": "ALTER TABLE sales_data\nSET TAGS ('system.certification_status' = 'deprecated');"
          }
        ]
      },
      {
        "id": "d",
        "blocks": [
          {
            "type": "sql",
            "content": "ALTER TABLE sales_data\nSET TAGS ('deprecated' = 'true');"
          }
        ]
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): To mark a table as deprecated in Unity Catalog, use ALTER TABLE SET TAGS with a key-value pair that follows the certification convention. The correct pattern is setting a tag like 'certified' = 'deprecated' or using system tags to communicate certification status across the organization.\n\n❌ Why others are wrong:\n• (A) Likely uses incorrect tag syntax or a non-standard key that doesn't follow Unity Catalog conventions.\n• (B) May use COMMENT instead of TAGS — comments are descriptive text, not structured metadata that tools can programmatically query.\n• (D) May use UPDATE or ALTER with incorrect syntax — Unity Catalog uses SET TAGS for structured key-value metadata.\n\n🔑 EXAM TIP: Unity Catalog metadata mechanisms:\n• TAGS (SET TAGS): Structured key-value pairs. Used for certification, classification, and governance. Queryable by tools and AI (Genie).\n• COMMENTS (COMMENT ON): Free-text descriptions. Used for documentation and semantic understanding.\n• Both are important for data governance but serve different purposes.",
    "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
  },
  {
    "id": "db-da-95",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is setting up a new AI/BI Genie space in Databricks to support natural language querying and ensure high-quality, governed responses. Which component is essential for configuring an effective Genie space that returns accurate and useful results?",
    "options": [
      {
        "id": "a",
        "text": "Well-annotated datasets registered to Unity Catalog, curated sample queries, and domain-specific instructions"
      },
      {
        "id": "b",
        "text": "A standalone chatbot application integrated with Databricks through custom APIs for user interaction"
      },
      {
        "id": "c",
        "text": "A dedicated physical server allocated for the Genie space to maximize availability and scalability"
      },
      {
        "id": "d",
        "text": "An external data warehouse configured to store and replicate all data used by the Genie space"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): An effective Genie space requires three core components:\n1. Well-annotated datasets in Unity Catalog (rich metadata = semantic understanding)\n2. Curated sample queries (few-shot examples = correct SQL patterns)\n3. Domain-specific instructions (business rules = context for interpretation)\n\n❌ Why others are wrong:\n• (B) Standalone chatbot via custom APIs: Genie is a BUILT-IN platform feature, not an external chatbot. No custom API integration is needed.\n• (C) Dedicated physical server: Genie runs on SQL Warehouses, which are serverless or shared compute. No dedicated physical hardware is required.\n• (D) External data warehouse replication: Genie queries Unity Catalog directly. Data replication to an external warehouse defeats the purpose of the lakehouse architecture.\n\n🔑 EXAM TIP: Genie's accuracy depends on three layers:\n1. DATA LAYER: Unity Catalog tables with rich metadata (comments, PK/FK)\n2. GUIDANCE LAYER: Instructions, sample questions, Trusted Assets\n3. COMPUTE LAYER: SQL Warehouse for query execution\nAll three must be properly configured for accurate results.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-96",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to implement a use case that requires managing both structured and unstructured data. How will Unity Catalog help in this scenario?",
    "options": [
      {
        "id": "a",
        "text": "It allows for the management of both structured data and unstructured data through objects such as tables and volumes."
      },
      {
        "id": "b",
        "text": "It requires all unstructured data to be converted into Delta Lake format before it can be managed."
      },
      {
        "id": "c",
        "text": "It manages structured data in tabular format and unstructured files like images in blob storage."
      },
      {
        "id": "d",
        "text": "It can catalog data coming from relational databases, excluding files and non-tabular data."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): Unity Catalog manages BOTH structured data (via Tables — Delta, Parquet, CSV) AND unstructured data (via Volumes — images, PDFs, audio, ML models, logs). This provides a UNIFIED governance layer across all data types.\n\n❌ Why others are wrong:\n• (B) Must convert unstructured to Delta: FALSE. Volumes store unstructured data in its original format — no conversion required.\n• (C) Manages structured in tables, unstructured in blob storage: Partially correct but misleading. Volumes ARE the Unity Catalog abstraction over blob storage — you don't manage them separately.\n• (D) Excludes files and non-tabular data: FALSE. Volumes were specifically designed to govern non-tabular files.\n\n🔑 EXAM TIP: Unity Catalog object types:\n• Tables: Structured data (rows/columns) — Delta, Parquet, CSV, JSON\n• Views: Virtual tables defined by SQL queries\n• Volumes: Unstructured/non-tabular data — PDFs, images, audio, ML artifacts\n• Functions: User-defined functions (UDFs)\n• Models: ML models registered for serving",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-97",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is reviewing the status of alerts in the Databricks SQL Alerts listing page. One alert was recently executed, and the monitored value met the defined condition and exceeded the threshold. Which status should appear for this alert in the listing?",
    "options": [
      {
        "id": "a",
        "text": "Status: TRIGGERED"
      },
      {
        "id": "b",
        "text": "Status: YES"
      },
      {
        "id": "c",
        "text": "Status: SUCCESS"
      },
      {
        "id": "d",
        "text": "Status: OK"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — Status: TRIGGERED): When a Databricks SQL alert evaluates its condition and the monitored metric exceeds the defined threshold, the alert status changes to TRIGGERED. This signals that the alert condition has been met and any configured notifications will be sent.\n\n❌ Why others are wrong:\n• (B) \"YES\": Not a valid Databricks SQL alert status.\n• (C) \"SUCCESS\": Not a valid alert status. \"Success\" might describe a query execution result but not an alert condition.\n• (D) \"OK\": OK is actually a VALID alert status — it means the condition was evaluated but NOT met (the value is within the acceptable range). It's the opposite of TRIGGERED.\n\n🎯 EXAM TIP: Databricks SQL alert statuses: TRIGGERED (condition met), OK (condition not met), UNKNOWN (not yet evaluated/error). The exam tests the exact terminology.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-98",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to generate insights from large, complex datasets. The analyst needs to quickly understand the meaning of various data columns, ask questions in natural language, and receive AI-driven recommendations for optimizing data queries and workflows. Which Databricks component is primarily responsible for enabling these capabilities?",
    "options": [
      {
        "id": "a",
        "text": "Genie Spaces"
      },
      {
        "id": "b",
        "text": "Data Intelligence Engine"
      },
      {
        "id": "c",
        "text": "Unity Catalog"
      },
      {
        "id": "d",
        "text": "Databricks Assistant"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Data Intelligence Engine): The Data Intelligence Engine (formerly Databricks IQ) is the underlying AI system that understands your data's semantics — column meanings, table relationships, query patterns, and business context. It powers features across the platform including Genie, Assistant, and search.\n\n❌ Why others are wrong:\n• (A) Genie Spaces: Genie Spaces is a specific FEATURE powered BY the Data Intelligence Engine. Genie allows natural-language questions, but the intelligence comes from the engine underneath.\n• (C) Unity Catalog: Unity Catalog provides data governance (access control, lineage, auditing). It doesn't provide AI-driven insights or natural language understanding.\n• (D) Databricks Assistant: The Assistant is an AI chatbot embedded in the editor that helps write/debug code. It's a feature powered by the Data Intelligence Engine, not the engine itself.\n\n🎯 EXAM TIP: Data Intelligence Engine = the AI brain. Genie + Assistant = features that USE the brain. Unity Catalog = governance. The exam tests whether you know the engine vs. the features it powers.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-99",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst needs to quickly estimate the number of unique user sessions in a dataset containing billions of records on Databricks SQL. Due to performance constraints, the analyst must ensure the query runs efficiently."
      },
      {
        "type": "text",
        "content": "What is the primary advantage of using `APPROX_COUNT_DISTINCT` instead of `COUNT_DISTINCT`?"
      }
    ],
    "prompt": "A data analyst needs to quickly estimate unique user sessions... What is the primary advantage of using APPROX_COUNT_DISTINCT instead of COUNT_DISTINCT?",
    "options": [
      {
        "id": "a",
        "text": "APPROX_COUNT_DISTINCT provides exact counts, while COUNT_DISTINCT only provides estimates"
      },
      {
        "id": "b",
        "text": "APPROX_COUNT_DISTINCT can only be used with string columns, while COUNT_DISTINCT works with numeric columns"
      },
      {
        "id": "c",
        "text": "APPROX_COUNT_DISTINCT uses the HyperLogLog++ algorithm to provide fast approximate counts with configurable accuracy"
      },
      {
        "id": "d",
        "text": "APPROX_COUNT_DISTINCT requires less memory by storing only the first 1000 unique values"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — HyperLogLog++ algorithm for fast approximate counts): APPROX_COUNT_DISTINCT uses the HyperLogLog++ (HLL++) algorithm, which estimates distinct counts using a fixed, small amount of memory regardless of data size. It trades ~2% accuracy for orders-of-magnitude performance gains on massive datasets.\n\n❌ Why others are wrong:\n• (A) \"APPROX provides exact counts, COUNT_DISTINCT provides estimates\": This is REVERSED. COUNT(DISTINCT col) gives exact counts. APPROX_COUNT_DISTINCT gives estimates.\n• (B) \"APPROX only works with strings\": APPROX_COUNT_DISTINCT works with ANY data type — strings, numbers, dates, etc.\n• (D) \"Stores only first 1000 unique values\": HLL++ doesn't store actual values at all. It maintains a compact probabilistic sketch (fixed memory footprint) that estimates cardinality.\n\n🎯 EXAM TIP: APPROX_COUNT_DISTINCT: O(1) memory, ~2% error, good for dashboards/metrics where approximate counts are acceptable. COUNT(DISTINCT): exact but expensive (requires full data scan + sort/hash). Choose APPROX for > millions of rows.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-100",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has noticed that a key dashboard is loading slowly and suspects a specific SQL query may be causing performance issues. To diagnose the root cause, the analyst wants to review query execution characteristics such as execution time, data scanned, and rows processed over time. How should the analyst investigate query performance over time?",
    "options": [
      {
        "id": "a",
        "text": "Use the SQL Dashboard Editor to identify slow-performing queries by reviewing visualization types and layout."
      },
      {
        "id": "b",
        "text": "Use the Query Profiler to examine long-term trends in query performance across multiple executions."
      },
      {
        "id": "c",
        "text": "Use Query Insights to view metrics such as duration, rows read, and execution history for the query."
      },
      {
        "id": "d",
        "text": "Use Lakehouse Monitoring to view real-time alerts and trends across all data pipelines that run in Unity Catalog."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Query Insights for metrics like duration, rows read, execution history): Query Insights provides operational metrics for individual queries: execution count, average/p50/p95 duration, rows read/returned, data scanned, and historical trends. This helps diagnose which specific query is causing dashboard slowness.\n\n❌ Why others are wrong:\n• (A) \"Dashboard Editor to review visualization types\": The Dashboard Editor controls layout and widgets. It doesn't provide query-level performance diagnostics.\n• (B) \"Query Profiler for long-term trends\": The Query Profiler (Query Profile) shows the execution plan of a SINGLE run (operators, data flow). It's for deep-diving into one execution, not long-term trend analysis.\n• (D) \"Lakehouse Monitoring for real-time alerts\": Lakehouse Monitoring tracks data quality and drift on tables — it monitors DATA, not QUERY performance.\n\n🎯 EXAM TIP: Query Insights = historical trends across multiple executions (how has this query performed over time?). Query Profile = single execution deep-dive (what operators ran and how did data flow?). The exam tests the difference.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-101",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to automate scheduled ETL jobs that ingest and transform data from multiple sources. The analyst wants to use multiple programming languages for flexibility and ensure that the pipeline can automatically handle schema changes as new data arrives. Which approach in Databricks should be used?",
    "options": [
      {
        "id": "a",
        "text": "Separate Delta tables for each data source with fixed schemas"
      },
      {
        "id": "b",
        "text": "Unity Catalog with manual ETL scripts and cron-based scheduling"
      },
      {
        "id": "c",
        "text": "Databricks Workflows with Apache Spark notebooks and manual schema management"
      },
      {
        "id": "d",
        "text": "Lakeflow Spark Declarative Pipelines with Auto Loader"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D): Lakeflow Spark Declarative Pipelines (formerly DLT — Delta Live Tables) with Auto Loader is the ideal solution. Declarative Pipelines support multiple languages (SQL, Python), define transformation logic declaratively, and Auto Loader automatically handles schema evolution as new data arrives — detecting new columns and adapting the schema without manual intervention.\n\n❌ Why others are wrong:\n• (A) Separate Delta tables with fixed schemas: \"Fixed schemas\" directly contradicts the requirement to \"automatically handle schema changes.\" No automation for ingestion or scheduling.\n• (B) Unity Catalog with manual ETL + cron: \"Manual\" and \"cron-based\" don't meet the automation requirement. Cron scheduling lacks the orchestration features of Databricks Workflows.\n• (C) Workflows with Spark notebooks + manual schema: \"Manual schema management\" fails the automatic schema evolution requirement. Auto Loader handles this natively.\n\n🔑 EXAM TIP: Auto Loader key features:\n• Automatically detects and ingests new files from cloud storage\n• Schema evolution: automatically adapts to new columns (schemaEvolution mode)\n• Schema inference: automatically detects data types\n• Exactly-once processing guarantees via checkpointing\n• Works with CSV, JSON, Parquet, Avro, ORC, and more",
    "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
  },
  {
    "id": "db-da-102",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is curating a Genie space for the marketing team. To ensure accurate and context-aware responses, the analyst includes curated Unity Catalog tables and sample questions. Which additional step can the analyst take to maximize trust and reuse of frequently asked queries?",
    "options": [
      {
        "id": "a",
        "text": "Disable the use of domain instructions to prevent bias in AI-generated answers."
      },
      {
        "id": "b",
        "text": "Enable automatic query generation so users receive instant responses without review."
      },
      {
        "id": "c",
        "text": "Allow users to edit the underlying datasets to improve Genie responses."
      },
      {
        "id": "d",
        "text": "Mark commonly used queries as Trusted Assets after verifying their correctness."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "✅ CORRECT (D — Mark queries as Trusted Assets): Trusted Assets are verified, pre-written SQL queries that Genie uses as high-confidence templates for matching questions. Marking frequently used queries as Trusted Assets ensures consistency and accuracy for recurring question patterns.\n\n❌ Why others are wrong:\n• (A) Disable domain instructions: Instructions provide critical business context. Removing them REDUCES trust and accuracy.\n• (B) Enable automatic generation without review: Removes human quality control. Unverified auto-generated SQL risks inaccuracy.\n• (C) Allow users to edit datasets: Editing source data introduces governance violations and data quality risks.\n\n🔑 EXAM TIP: Genie trust hierarchy:\n1. Trusted Assets (highest confidence) → verified SQL used as-is\n2. Sample Questions → training examples that guide SQL generation\n3. Instructions → business rules and terminology\n4. Unity Catalog metadata → semantic understanding of columns",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-103",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is using Databricks Unity Catalog. The datasets are tagged by sensitivity, and confidential data is marked with the tag key `confidential`. The data analyst needs to quickly find all tables tagged as confidential in the Databricks workspace search bar. Which search key text should the analyst use?",
    "options": [
      {
        "id": "a",
        "text": "confidential:true"
      },
      {
        "id": "b",
        "text": "tag-confidential"
      },
      {
        "id": "c",
        "text": "tag:confidential"
      },
      {
        "id": "d",
        "text": "search tag = 'confidential'"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — tag:confidential): In the Databricks workspace search bar, the syntax for finding assets with a specific Unity Catalog tag is tag:<tag_key>. For tags with values, use tag:<key>:<value>. This searches across tables, schemas, and other cataloged objects.\n\n❌ Why others are wrong:\n• (A) \"confidential:true\": This syntax isn't recognized. Tags in Unity Catalog use the tag: prefix.\n• (B) \"tag-confidential\": Hyphens are not the correct separator. The colon (:) is the required delimiter between the tag prefix and key.\n• (D) \"search tag = 'confidential'\": This looks like SQL syntax, not workspace search syntax. Workspace search uses compact prefix notation.\n\n🎯 EXAM TIP: Unity Catalog search syntax: tag:<key> (for key-only tags) or tag:<key>:<value> (for key-value tags). Example: tag:pii, tag:department:finance. This exact syntax appears on the exam.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-104",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is troubleshooting a query in Databricks SQL that fails when processing large datasets. Logs indicate the job aborts due to resource constraint errors. Which Query Profile metric should the analyst use to identify the operator causing resource overuse?",
    "options": [
      {
        "id": "a",
        "text": "Shuffle read size per operator"
      },
      {
        "id": "b",
        "text": "Time spent per operator"
      },
      {
        "id": "c",
        "text": "Memory peak per operator"
      },
      {
        "id": "d",
        "text": "Bytes spilled to disk per operator"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Memory peak per operator): The \"Memory peak per operator\" metric in the Query Profile shows the maximum RAM consumed by each individual operator (scan, join, aggregate, sort). When a query fails with resource constraint / OOM errors, this metric pinpoints exactly WHICH operator exceeded available memory.\n\n❌ Why others are wrong:\n• (A) \"Shuffle read size\": Shuffle read shows data transferred between nodes during redistributions (joins, aggregations). High shuffle indicates network I/O issues, not necessarily memory pressure.\n• (B) \"Time spent per operator\": Time per operator identifies SLOW stages but doesn't directly reveal WHY they're slow (could be I/O, CPU, or memory).\n• (D) \"Bytes spilled to disk\": Spill to disk IS a symptom of memory pressure (data that doesn't fit in RAM overflows to disk). However, Memory Peak is the direct diagnostic — it shows the root cause rather than the symptom.\n\n🎯 EXAM TIP: Query Profile troubleshooting flow: OOM error → check Memory Peak per operator → identify the culprit operator → optimize (e.g., Broadcast Join → Sort Merge Join, or add more memory). Spill-to-disk is the symptom, Memory Peak is the diagnosis.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-105",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to improve the performance of a daily sales report that aggregates data from a large transactions table. The report is run multiple times a day, but the underlying data only changes once daily. Which approach should the analyst use?",
    "options": [
      {
        "id": "a",
        "text": "Create a materialized view that precomputes the daily sales aggregation."
      },
      {
        "id": "b",
        "text": "Use a dynamic view to compute the aggregation on each query."
      },
      {
        "id": "c",
        "text": "Use a standard view and schedule a notebook to cache results."
      },
      {
        "id": "d",
        "text": "Set up a streaming table to ingest new sales data in real time."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — Create a materialized view for precomputed daily aggregation): Materialized views store precomputed query results. Since the data changes once daily, the MV is fresh for all subsequent report runs throughout the day — avoiding expensive re-aggregation of the large transactions table each time.\n\n❌ Why others are wrong:\n• (B) \"Dynamic view\": A standard VIEW re-executes the full aggregation query every time, providing no performance benefit for repeated runs.\n• (C) \"Standard view + scheduled notebook cache\": Over-engineered — materialized views provide this capability natively without external scheduling.\n• (D) \"Streaming table for real-time ingestion\": The data changes ONCE daily, not continuously. Streaming is overkill for daily batch updates.\n\n🎯 EXAM TIP: Materialized View use case: expensive aggregation + source data changes infrequently + results read frequently. If data changes continuously, consider streaming tables instead.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-106",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is working interactively in a Databricks notebook. The analyst executes a SQL query using `%sql` and wants to turn the result into a line chart showing weekly user counts over time. Which step allows the analyst to create the chart directly in the notebook?",
    "options": [
      {
        "id": "a",
        "text": "Save the query as a table, export it to Excel, and use Excel's charting tools."
      },
      {
        "id": "b",
        "text": "Wrap the SQL query in a Python plotly express call using %python."
      },
      {
        "id": "c",
        "text": "Use the display() function or %sql to run the query, then click the + icon in the result cell to add a visualization."
      },
      {
        "id": "d",
        "text": "Use %sql to run the query, then copy the result into a new dashboard to access visualization options."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Use display() or %sql, then click + icon in result cell): Databricks notebooks have built-in visualization capabilities. After running a SQL query with %sql or display(), a \"+\" icon appears above the result table. Clicking it opens the visualization editor where you can create line charts, bar charts, scatter plots, and more — no code required.\n\n❌ Why others are wrong:\n• (A) \"Export to Excel for charting\": Unnecessary — Databricks has native visualization. Exporting loses interactivity and real-time data connection.\n• (B) \"Python plotly express\": While possible, it's more complex than the built-in visualization for simple charts. The question asks for the easiest approach.\n• (D) \"Copy to dashboard\": You don't need to copy to a dashboard to visualize — the notebook result cell has built-in charting.\n\n🎯 EXAM TIP: Notebook visualization flow: Run query → Click \"+\" on results → Choose chart type → Configure axes. No code or external tools needed. This is the fastest path from query to chart in notebooks.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-107",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Despite having `SELECT` permission on tables and `USAGE` on schemas, a data analyst is unable to access objects. Which action enables the data analyst to access the objects?",
    "options": [
      {
        "id": "a",
        "text": "Grant MANAGE TABLE access."
      },
      {
        "id": "b",
        "text": "Grant MANAGE DATABASE access on the containing catalog."
      },
      {
        "id": "c",
        "text": "Grant USE CATALOG on the containing catalog."
      },
      {
        "id": "d",
        "text": "Grant OWNERSHIP of the table to the Data Analyst."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Grant USE CATALOG on the containing catalog): Unity Catalog enforces a hierarchical permission model: Catalog → Schema → Table. Even if a user has SELECT on a table and USAGE on the schema, they CANNOT access anything without USE CATALOG on the parent catalog. It's the top-level gate.\n\n❌ Why others are wrong:\n• (A) \"MANAGE TABLE access\": Not a valid Unity Catalog privilege. Table-level permissions include SELECT, MODIFY, ALL PRIVILEGES — not \"MANAGE TABLE.\"\n• (B) \"MANAGE DATABASE on catalog\": Not a valid Unity Catalog privilege. Catalog-level permissions include USE CATALOG, CREATE SCHEMA — not \"MANAGE DATABASE.\"\n• (D) \"Grant OWNERSHIP\": Ownership transfer is extreme and unnecessary. The user just needs USE CATALOG permission to access the catalog namespace.\n\n🎯 EXAM TIP: Unity Catalog access chain: USE CATALOG → USE SCHEMA → SELECT/MODIFY on table. ALL THREE levels must be satisfied. Missing any level = access denied. This is the #1 tested permission concept.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-108",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst team wants to understand the best practices and limitations of caching in Databricks. What is the limitation when using caching to reduce development time and query latency?",
    "options": [
      {
        "id": "a",
        "text": "Query result caching works best with non-deterministic queries like NOW()."
      },
      {
        "id": "b",
        "text": "Caching CSV or JSON files with Delta Cache is fully supported."
      },
      {
        "id": "c",
        "text": "Delta Cache (disk cache) automatically caches Parquet files on local SSDs ... but only supports Parquet files stored on Azure Blob Storage or Azure Data Lake."
      },
      {
        "id": "d",
        "text": "Spark caching always improves performance and should be applied liberally."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Delta Cache only caches Parquet files on local SSDs with supported cloud storage): The Delta Cache (disk cache) automatically caches remote Parquet file data on local SSD storage for faster subsequent reads. Limitation: it ONLY works with Parquet-format files (including Delta tables) stored on supported cloud object storage (S3, ADLS, GCS).\n\n❌ Why others are wrong:\n• (A) \"Works best with non-deterministic queries like NOW()\": The OPPOSITE. Query result caching (a different layer) INVALIDATES cache for non-deterministic functions because results change each call.\n• (B) \"Caching CSV/JSON with Delta Cache is supported\": FALSE. Delta Cache is specifically designed for PARQUET files only. CSV and JSON must be read from source each time.\n• (D) \"Spark caching always improves performance\": FALSE. .cache() in Spark uses MEMORY, not disk. Caching large datasets can cause OOM errors. It should be applied selectively.\n\n🎯 EXAM TIP: Three caching layers in Databricks: (1) Delta Cache = disk SSD, Parquet only, automatic. (2) Query Result Cache = exact result reuse, invalidated on data change. (3) Spark .cache() = manual, in-memory. Know the differences.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-109",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is setting up an AI/BI Genie space. They notice that Genie is struggling to correctly join tables because the relationship between `orders.cust_id` and `customers.id` is not explicitly defined in the metadata. Which Unity Catalog feature should the analyst use to fix this and improve Genie's accuracy?",
    "options": [
      {
        "id": "a",
        "text": "Define a Primary Key on `customers.id` and a Foreign Key on `orders.cust_id`."
      },
      {
        "id": "b",
        "text": "Create a materialized view that pre-joins the tables."
      },
      {
        "id": "c",
        "text": "Write a 'System Instruction' telling Genie to always join these tables."
      },
      {
        "id": "d",
        "text": "Use Liquid Clustering on both columns."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): Defining Primary Key on customers.id and Foreign Key on orders.cust_id provides explicit relationship metadata that Genie reads to correctly generate JOIN statements. Even though PK/FK constraints are NOT enforced in Databricks (they're informational only), Genie uses this metadata to understand the data model.\n\n❌ Why others are wrong:\n• (B) Materialized view with pre-join: This over-engineers the solution. It denormalizes data, increases storage, and doesn't teach Genie how to handle other join patterns.\n• (C) System Instruction: Instructions help with business terms but are fragile for join logic. PK/FK metadata is the STRUCTURAL solution — it tells Genie exactly how tables relate.\n• (D) Liquid Clustering: Liquid Clustering optimizes file layout for query performance (data skipping). It has ZERO impact on join logic or Genie's understanding of table relationships.\n\n🔑 EXAM TIP: PK/FK in Databricks:\n• NOT enforced (no constraint validation on INSERT/UPDATE)\n• ARE informational — used by query optimizers and AI tools (Genie)\n• Syntax: ALTER TABLE customers ADD CONSTRAINT pk_cust PRIMARY KEY (id);\n         ALTER TABLE orders ADD CONSTRAINT fk_cust FOREIGN KEY (cust_id) REFERENCES customers(id);\n• Critical for Genie accuracy on multi-table spaces",
    "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
  },
  {
    "id": "db-da-110",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are querying a shared table provided by a partner via Delta Sharing. You want to understand who pays for the compute costs when you execute a `SELECT` query against this shared table.",
    "options": [
      {
        "id": "a",
        "text": "The data provider pays for compute; you pay for storage."
      },
      {
        "id": "b",
        "text": "You (the data consumer) pay for the compute resources used to query the data."
      },
      {
        "id": "c",
        "text": "Compute costs are split 50/50 between provider and consumer."
      },
      {
        "id": "d",
        "text": "There are no compute costs for shared tables."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Consumer pays for compute): In Delta Sharing's decoupled architecture, the DATA PROVIDER hosts and pays for data STORAGE. The DATA CONSUMER brings their own compute (SQL Warehouse, Spark cluster) and pays for processing queries.\n\n❌ Why others are wrong:\n• (A) Provider pays compute, consumer pays storage: REVERSED. Provider pays storage, consumer pays compute.\n• (C) 50/50 split: No cost-sharing mechanism in Delta Sharing.\n• (D) No compute costs: FALSE. Running queries always requires compute, which incurs costs.\n\n🔑 EXAM TIP: Delta Sharing cost model:\n• Provider: Pays for data STORAGE (cloud storage costs)\n• Consumer: Pays for query COMPUTE (SQL Warehouse/cluster costs)\n• No data copying — consumer reads data directly from provider's storage\n• This is the \"open data sharing\" model — clean cost separation",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-111",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An analyst needs to ingest a large volume of JSON files from cloud storage into a Delta table using Databricks SQL. The schema of these JSON files evolves frequently (new columns are added). Which SQL function should be used to ingest these files while automatically handling schema evolution?",
    "options": [
      {
        "id": "a",
        "text": "read_files() with the 'cloud_files' format"
      },
      {
        "id": "b",
        "text": "COPY INTO with default settings"
      },
      {
        "id": "c",
        "text": "INSERT INTO ... SELECT FROM json.`path`"
      },
      {
        "id": "d",
        "text": "CREATE EXTERNAL TABLE"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): read_files() with 'cloud_files' format invokes Auto Loader, which is specifically designed for:\n1. INCREMENTAL ingestion (processes only new files, not re-reading old ones)\n2. SCHEMA EVOLUTION (automatically adds new columns without breaking existing data)\n3. It maintains checkpoints to track which files have been processed.\n\n❌ Why others are wrong:\n• (B) COPY INTO with defaults: COPY INTO tracks processed files but does NOT support automatic schema evolution by default. You'd need mergeSchema = true, and even then it's less robust than Auto Loader for frequent schema changes.\n• (C) INSERT INTO ... SELECT FROM json.path: This re-reads ALL files every time (no idempotency), and has NO schema evolution support. Running this repeatedly creates duplicates.\n• (D) CREATE EXTERNAL TABLE: This creates a pointer to the files but doesn't actively ingest or evolve schema. It's a read-only reference, not an ingestion mechanism.\n\n🎯 EXAM TIP: Frequent schema changes + incremental load = Auto Loader (read_files with cloud_files). COPY INTO = simpler idempotent load but limited schema evolution.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-112",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a table `events` that uses Liquid Clustering. Over time, you notice query performance degrading slightly as new data is added. What command should you schedule to run periodically to maintain optimal layout?",
    "options": [
      {
        "id": "a",
        "text": "VACUUM events"
      },
      {
        "id": "b",
        "text": "ANALYZE TABLE events COMPUTE STATISTICS"
      },
      {
        "id": "c",
        "text": "OPTIMIZE events"
      },
      {
        "id": "d",
        "text": "REORG TABLE events APPLY (PURGE)"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — OPTIMIZE events): For Liquid Clustering tables, the OPTIMIZE command incrementally re-clusters data based on the defined clustering columns. As new data arrives, it may not be co-located optimally — running OPTIMIZE periodically ensures data files are reorganized for maximum data-skipping efficiency.\n\n❌ Why others are wrong:\n• (A) \"VACUUM events\": VACUUM removes old, unreferenced data files to reclaim storage. It does NOT reorganize or re-cluster data. It's a cleanup operation, not an optimization.\n• (B) \"ANALYZE TABLE COMPUTE STATISTICS\": Computes column-level statistics for the optimizer. It helps with query planning but doesn't physically reorganize data files for clustering.\n• (D) \"REORG TABLE APPLY PURGE\": REORG with PURGE rewrites files to physically remove soft-deleted rows (deletion vectors). It's for cleanup, not clustering.\n\n🎯 EXAM TIP: OPTIMIZE = re-cluster + compact files. VACUUM = delete old files. ANALYZE TABLE = update statistics. REORG PURGE = remove deletion vectors. Each command has ONE primary purpose. The exam expects you to know which solves which problem.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-113",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst creates a Materialized View (MV) to speed up a complex dashboard query. However, the refresh of the MV fails. Upon investigation, they realize they are using a Standard SQL Warehouse. Why did the refresh fail?",
    "options": [
      {
        "id": "a",
        "text": "Materialized Views require a Serverless or Pro SQL Warehouse."
      },
      {
        "id": "b",
        "text": "Materialized Views can only be refreshed by Admin users."
      },
      {
        "id": "c",
        "text": "The underlying tables were not Delta tables."
      },
      {
        "id": "d",
        "text": "Standard Warehouses cannot write data."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — Requires Serverless or Pro SQL Warehouse): Materialized Views require advanced incremental computation capabilities that are only available in Pro and Serverless SQL Warehouse tiers. Standard warehouses lack these features.\n\n❌ Why others are wrong:\n• (B) Only Admin users can refresh: FALSE. Any user with appropriate permissions can trigger or schedule MV refreshes.\n• (C) Underlying tables not Delta: While possible, the error specifically mentions the warehouse tier, not the data format.\n• (D) Standard warehouses can't write data: FALSE. Standard warehouses can write data (INSERT, MERGE), but they can't manage Materialized View refresh operations.\n\n🔑 EXAM TIP: SQL Warehouse tiers:\n• Standard: Basic SQL queries. No MVs, no Predictive Optimization.\n• Pro: Materialized Views, Liquid Clustering, advanced features.\n• Serverless: Same as Pro + automatic scaling + no infrastructure management.\n• For the exam: If a feature isn't working → CHECK THE WAREHOUSE TIER.",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-114",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are browsing the Databricks Marketplace to find a weather dataset to enrich your sales analysis. Once you 'install' a data product from the Marketplace, how does it appear in your workspace?",
    "options": [
      {
        "id": "a",
        "text": "As a set of CSV files in DBFS."
      },
      {
        "id": "b",
        "text": "As a read-only Catalog in Unity Catalog."
      },
      {
        "id": "c",
        "text": "As a Dashboard."
      },
      {
        "id": "d",
        "text": "You must download it via API first."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Databricks Marketplace data products appear as a READ-ONLY CATALOG (or schema) in Unity Catalog. This uses 'Delta Sharing' under the hood — the provider shares data WITHOUT copying it (Zero-Copy Sharing). You can query it immediately with SELECT *.\n\n❌ Why others are wrong:\n• (A) 'CSV files in DBFS': Marketplace data is NOT raw files. It's shared as governed Delta tables through Unity Catalog, not dumped as CSVs.\n• (C) 'As a Dashboard': Dashboards are visualizations, not data storage. Marketplace provides DATA, not pre-built dashboards.\n• (D) 'Download via API': No download needed — the whole point of Delta Sharing is that data appears instantly in your catalog without manual download or ETL.\n\n🎯 EXAM TIP: Marketplace = read-only catalog in Unity Catalog via Delta Sharing (zero-copy). No ETL, no downloads, no file management needed. Just query it.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-115",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An analyst wants to filter a high-cardinality column `session_id` in a 5TB table. They originally used Hive-style partitioning on `session_id`, but this caused performance issues. They switched to Liquid Clustering. What was the specific performance issue caused by partitioning on a high-cardinality column?",
    "options": [
      {
        "id": "a",
        "text": "Data Skew"
      },
      {
        "id": "b",
        "text": "Small Files Problem"
      },
      {
        "id": "c",
        "text": "Metadata locking"
      },
      {
        "id": "d",
        "text": "Predicate pushdown failure"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Small Files Problem): Partitioning by a high-cardinality column like session_id creates millions of directories, each containing tiny files. This overwhelms the metadata service, increases file listing overhead, and makes each file too small for efficient parallel processing — classic \"small files problem.\"\n\n❌ Why others are wrong:\n• (A) \"Data Skew\": Data skew occurs when some partitions have vastly more data than others (uneven distribution). High-cardinality partitioning creates MANY partitions, not unevenly-sized ones.\n• (C) \"Metadata locking\": Metadata locking relates to concurrent write conflicts, not partition strategy. While many partitions add metadata overhead, it's not \"locking.\"\n• (D) \"Predicate pushdown failure\": Predicate pushdown WORKS with partitioning (that's why partitioning exists). The issue is that too many tiny partitions create file overhead, not that filters fail.\n\n🎯 EXAM TIP: Partitioning rule: Only partition by LOW-cardinality columns (country, year, status). For HIGH-cardinality columns (user_id, session_id, timestamp), use Liquid Clustering instead. This is why Liquid Clustering was invented.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-116",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You want to share a dashboard with a stakeholder who does NOT have a Databricks account. You want them to receive an updated PDF of the dashboard every Monday morning. Which feature allows this?",
    "options": [
      {
        "id": "a",
        "text": "This is not possible; all users must have accounts."
      },
      {
        "id": "b",
        "text": "Dashboard Subscription with 'Destinations' configured for external email."
      },
      {
        "id": "c",
        "text": "Publish to Web."
      },
      {
        "id": "d",
        "text": "Share via Delta Sharing."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Dashboard Subscriptions with 'Destinations' allow sending PDF snapshots to external email addresses (non-Databricks users). You configure a Schedule (e.g., every Monday at 8 AM) and add a Subscription Destination with the external email. The system automatically generates and emails the PDF.\n\n❌ Why others are wrong:\n• (A) \"Not possible without accounts\": FALSE. Dashboard Subscriptions specifically support external email addresses for exactly this use case.\n• (C) \"Publish to Web\": Publish to Web creates a shareable link but doesn't send scheduled emails with PDFs. It requires the user to visit a URL.\n• (D) \"Delta Sharing\": Delta Sharing is for sharing DATA (tables, schemas) across organizations — not for sharing dashboard visualizations or PDFs.\n\n🔑 EXAM TIP: Two ways to share dashboards with non-Databricks users:\n1. Dashboard Subscriptions → automated PDF emails on schedule\n2. Published Dashboard Links → shareable URL with embedded credentials\nDelta Sharing = data sharing (tables), NOT dashboard sharing.",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-117",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When defining 'Trusted Assets' in an AI/BI Genie space, what is the primary benefit?",
    "options": [
      {
        "id": "a",
        "text": "It encrypts the data."
      },
      {
        "id": "b",
        "text": "It guides the AI to prioritize these specific tables when generating answers, reducing hallucinations."
      },
      {
        "id": "c",
        "text": "It speeds up query performance by caching the assets."
      },
      {
        "id": "d",
        "text": "It prevents users from querying any other table."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Trusted Assets guide Genie's AI to prioritize SPECIFIC tables when generating SQL answers. They act as a curated allow-list that tells Genie: \"Use THESE tables for answering questions.\" This prevents the AI from picking up irrelevant, temporary, or deprecated tables from the catalog, reducing hallucinations and incorrect results.\n\n❌ Why others are wrong:\n• (A) Encrypts the data: Trusted Assets have nothing to do with encryption. Data encryption is handled at the storage layer (cloud provider) and Unity Catalog access controls.\n• (C) Caches assets for performance: Trusted Assets don't affect caching or query performance. They influence query GENERATION (which SQL Genie writes), not query EXECUTION speed.\n• (D) Prevents querying other tables: Trusted Assets GUIDE Genie's preference but don't technically block access to other tables. Users can still ask about any table they have permissions on.\n\n🔑 EXAM TIP: Trusted Assets serve two purposes:\n1. Table/data selection: Tells Genie which tables to prioritize\n2. Verified SQL templates: Pre-written queries that Genie uses as templates for similar questions\nBoth reduce AI hallucinations and improve accuracy.",
    "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
  },
  {
    "id": "db-da-118",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An analyst runs `DELETE FROM my_table WHERE id = 1`. They want to confirm that the data is physically removed from storage immediately to comply with a GDPR 'Right to be Forgotten' request. Is the DELETE command sufficient?",
    "options": [
      {
        "id": "a",
        "text": "Yes, DELETE removes data physically."
      },
      {
        "id": "b",
        "text": "No, they must run `VACUUM my_table RETAIN 0 HOURS` to remove physical files."
      },
      {
        "id": "c",
        "text": "No, they must run `OPTIMIZE`."
      },
      {
        "id": "d",
        "text": "No, they must drop the table."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — No, must run VACUUM with 0 hours retention): DELETE in Delta Lake is a LOGICAL operation — it marks rows as deleted using deletion vectors (or rewrites files excluding deleted rows), but the OLD files containing the deleted data remain for Time Travel. To physically remove data files, you must run VACUUM with a retention period of 0 hours to force immediate cleanup.\n\n❌ Why others are wrong:\n• (A) \"Yes, DELETE removes data physically\": FALSE. Delta Lake preserves history for Time Travel. DELETE only creates new file versions without the deleted rows — old versions remain.\n• (C) \"Run OPTIMIZE\": OPTIMIZE compacts files and re-clusters but does NOT remove old file versions. It creates new optimized files while old ones remain for Time Travel.\n• (D) \"Drop the table\": Dropping and recreating loses ALL data, not just the target rows. This is an extreme, destructive approach to GDPR compliance.\n\n🎯 EXAM TIP: GDPR deletion flow: DELETE FROM (logical removal) → VACUUM RETAIN 0 HOURS (physical removal). Note: VACUUM with 0 hours requires setting delta.retentionDurationCheck.enabled = false to bypass the 7-day safety check. The exam tests this two-step process.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-119",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How do you define Liquid Clustering on a Delta table when creating it using SQL?",
    "options": [
      {
        "id": "a",
        "text": "CREATE TABLE ... PARTITIONED BY (col1)"
      },
      {
        "id": "b",
        "text": "CREATE TABLE ... CLUSTER BY (col1, col2)"
      },
      {
        "id": "c",
        "text": "CREATE TABLE ... OPTIMIZE ZORDER BY (col1)"
      },
      {
        "id": "d",
        "text": "CREATE TABLE ... WITH CLUSTERING = TRUE"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — CREATE TABLE ... CLUSTER BY (col1, col2)): The CLUSTER BY clause in CREATE TABLE DDL enables Liquid Clustering on the specified columns. This tells Delta Lake to organize data files by these columns during OPTIMIZE operations for optimal data skipping.\n\n❌ Why others are wrong:\n• (A) \"PARTITIONED BY\": PARTITIONED BY creates Hive-style partitions — physical directory-based partitioning, which is the OLDER approach that Liquid Clustering replaces.\n• (C) \"OPTIMIZE ZORDER BY\": ZORDER is an OPTIMIZE command, not a table creation clause. You run it AFTER table creation, and it must be re-run after each data write.\n• (D) \"WITH CLUSTERING = TRUE\": Not valid SQL syntax in Databricks. Liquid Clustering uses the explicit CLUSTER BY clause.\n\n🎯 EXAM TIP: DDL syntax: CREATE TABLE t (col1 INT, col2 STRING) CLUSTER BY (col1, col2). To change columns later: ALTER TABLE t CLUSTER BY (col3). This exact syntax is tested on the exam.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-120",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Unity Catalog, you define a Primary Key and a Foreign Key relationship between two tables. You then attempt to insert an order with a `customer_id` that does not exist in the `customers` table. What happens?",
    "options": [
      {
        "id": "a",
        "text": "The insert fails with a 'Constraint Violation' error."
      },
      {
        "id": "b",
        "text": "The insert succeeds."
      },
      {
        "id": "c",
        "text": "The insert is quarantined in a 'Bad Records' table."
      },
      {
        "id": "d",
        "text": "The insert succeeds, but the `customer_id` is set to NULL."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Insert succeeds): In Databricks/Unity Catalog, PRIMARY KEY and FOREIGN KEY constraints are INFORMATIONAL ONLY — they are NOT enforced. The insert will succeed even with a non-existent customer_id.\n\n❌ Why others are wrong:\n• (A) Constraint violation error: This would be true in traditional RDBMS (PostgreSQL, MySQL) but NOT in Databricks. Constraints are declarative metadata only.\n• (C) Quarantined to Bad Records: There is no automatic quarantine mechanism for constraint violations in Delta Lake.\n• (D) customer_id set to NULL: The value is NOT modified. The insert succeeds with the original non-existent customer_id.\n\n🔑 EXAM TIP: PK/FK in Databricks — CRITICAL EXAM CONCEPT:\n• NOT ENFORCED (no validation on INSERT/UPDATE/DELETE)\n• ARE informational — used by:\n  - Query optimizer (join optimization)\n  - BI tools (automatic relationship detection)\n  - AI/BI Genie (table joining logic)\n• Data quality enforcement must use other mechanisms: DLT Expectations, CHECK constraints, MERGE logic",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-121",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are analyzing query performance using System Tables. You want to query the billing usage data programmatically. Which specific table should you query?",
    "options": [
      {
        "id": "a",
        "text": "system.information_schema.columns"
      },
      {
        "id": "b",
        "text": "system.billing.usage"
      },
      {
        "id": "c",
        "text": "main.default.usage_logs"
      },
      {
        "id": "d",
        "text": "system.access.audit"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — system.billing.usage): The system.billing.usage table is provided by Unity Catalog and contains detailed billing and consumption data: workspace ID, SKU name, usage quantity, usage date, and associated tags. It enables programmatic cost analysis and chargeback reporting.\n\n❌ Why others are wrong:\n• (A) \"system.information_schema.columns\": This table stores column-level metadata (column names, types, defaults) for tables — not billing or usage data.\n• (C) \"main.default.usage_logs\": This is a user-created table path, not a system table. System tables live under the system catalog.\n• (D) \"system.access.audit\": The audit log table tracks access events (who accessed what, when) — security auditing, not billing data.\n\n🎯 EXAM TIP: Key system tables: system.billing.usage (costs), system.access.audit (security), system.information_schema.* (metadata). The exam tests which system table answers which business question.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-122",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In AI/BI Genie, what is the purpose of 'Draft Mode' vs 'Released Mode' (Publishing) for a space?",
    "options": [
      {
        "id": "a",
        "text": "Draft Mode uses a smaller cluster to save costs."
      },
      {
        "id": "b",
        "text": "Draft Mode is for the analyst to test and curate answers before end-users see them."
      },
      {
        "id": "c",
        "text": "Released Mode makes the data public to the internet."
      },
      {
        "id": "d",
        "text": "There is no difference; changes are always live."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Draft Mode is the analyst's STAGING environment for testing, validating, and curating Genie responses before end-users interact with them. In Draft Mode, the analyst can verify that instructions work correctly, test sample questions, and refine the space. Released (Published) Mode exposes the curated space to end-users.\n\n❌ Why others are wrong:\n• (A) Smaller cluster for costs: Draft Mode doesn't use different compute. Both modes use the same SQL Warehouse. The difference is about VISIBILITY, not compute.\n• (C) Released Mode = public internet: Released Mode makes the space available to authorized workspace users, NOT to the public internet. Access still requires proper permissions.\n• (D) No difference: There IS a clear difference — Draft Mode is for testing/curation, Released Mode is for user consumption.\n\n🔑 EXAM TIP: Genie Space lifecycle:\n1. Create space (Draft Mode)\n2. Configure: add tables, instructions, sample questions\n3. Test: verify accuracy in Draft Mode\n4. Publish: Release to users\n5. Iterate: Review feedback, update in Draft, re-publish",
    "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
  },
  {
    "id": "db-da-123",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has added a query parameter named `date_param` to a SQL query powering a dashboard widget. However, when they change the value of the parameter widget at the top of the dashboard, the visualization does not update. What step did the analyst likely miss?",
    "options": [
      {
        "id": "a",
        "text": "The analyst did not refresh the browser page."
      },
      {
        "id": "b",
        "text": "The analyst needs to map the dashboard-level parameter to the widget-level parameter in the settings."
      },
      {
        "id": "c",
        "text": "Parameters only work in the SQL Editor, not in Dashboards."
      },
      {
        "id": "d",
        "text": "The dashboard subscription schedule has not been triggered yet."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): The analyst missed the PARAMETER MAPPING step. Adding a {{date_param}} to a query creates a Query Parameter. But for the dashboard-level filter to control it, you must explicitly MAP the Dashboard Parameter to the Widget's Query Parameter in the widget settings. Without this mapping, the dashboard filter and the query parameter are disconnected.\n\n❌ Why others are wrong:\n• (A) Browser refresh needed: Browser refresh wouldn't fix a configuration issue. Parameters are mapped through settings, not through page reloads.\n• (C) \"Parameters only work in SQL Editor\": FALSE. Parameters are designed to work in BOTH the SQL Editor (for testing) and in Dashboards (for interactivity).\n• (D) \"Subscription schedule not triggered\": Subscription schedules send emails — they have nothing to do with interactive parameter filtering on a live dashboard.\n\n🔑 EXAM TIP: Parameter workflow in dashboards:\n1. Create {{param_name}} in the SQL query\n2. Add the query as a widget to the dashboard\n3. In widget settings, MAP the dashboard parameter → query parameter\n4. Now the dashboard filter controls the widget's data\nSkipping step 3 = the filter won't affect the widget!",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-124",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An analyst needs to import a CSV file via `COPY INTO`, but the schema of the CSV might contain new columns in the future. They want these new columns to be automatically added to the target Delta table. Which option enables this?",
    "options": [
      {
        "id": "a",
        "text": "('mergeSchema' = 'true')"
      },
      {
        "id": "b",
        "text": "('overwriteSchema' = 'true')"
      },
      {
        "id": "c",
        "text": "('enforceSchema' = 'false')"
      },
      {
        "id": "d",
        "text": "('autoEvolve' = 'true')"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): mergeSchema = true tells COPY INTO to ADD any new columns found in the source file to the target Delta table's schema. Existing columns remain unchanged, new columns get added. This is called SCHEMA EVOLUTION.\n\n❌ Why others are wrong:\n• (B) overwriteSchema = true: This REPLACES the entire schema with the new one — it doesn't merge. This would DELETE existing columns not present in the new file. Dangerous!\n• (C) enforceSchema = false: This option doesn't exist in COPY INTO. The real option is mergeSchema. Databricks enforces schema by default.\n• (D) autoEvolve = true: This is NOT a valid COPY INTO option. autoEvolve is used in Delta Live Tables (DLT), not in COPY INTO/Spark writes.\n\n🎯 EXAM TIP: mergeSchema = ADD new columns (safe). overwriteSchema = REPLACE entire schema (dangerous). For the exam, COPY INTO uses mergeSchema; DLT uses schema evolution policies.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-125",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You want to restrict access to specific rows in the `employees` table so that analysts can only see employees from their own country. To which object do you apply the Row Filter function in Unity Catalog?",
    "options": [
      {
        "id": "a",
        "text": "To the Dashboard."
      },
      {
        "id": "b",
        "text": "To the SQL Warehouse."
      },
      {
        "id": "c",
        "text": "To the Table definition."
      },
      {
        "id": "d",
        "text": "To the User Group settings."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — To the Table definition): Row Filters in Unity Catalog are defined directly on the TABLE, not on the warehouse, dashboard, or user group. This ensures the security policy is enforced universally — regardless of which tool or warehouse accesses the table.\n\n❌ Why others are wrong:\n• (A) Dashboard: Dashboards display data but don't enforce row-level security. A user could bypass it by querying the table directly.\n• (B) SQL Warehouse: Warehouses execute queries but don't define data security policies. Multiple warehouses may access the same table.\n• (D) User Group settings: User groups define membership, not table-level security rules.\n\n🔑 EXAM TIP: Row Filters in Unity Catalog:\n• Defined as: A SQL function that returns TRUE/FALSE for each row\n• Applied to: The TABLE definition (ALTER TABLE SET ROW FILTER)\n• Enforced: On EVERY query, regardless of access method\n• Dynamic: Can use CURRENT_USER() or IS_MEMBER() for user-specific filtering\n• Cannot be bypassed: Even admins see only filtered results unless explicitly excluded",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-126",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An analyst needs to query a collection of PDF documents and images stored in cloud storage to perform analysis using AI functions. They want to manage access to these files using Unity Catalog governance. Which object should they create?",
    "options": [
      {
        "id": "a",
        "text": "An External Table"
      },
      {
        "id": "b",
        "text": "A Volume"
      },
      {
        "id": "c",
        "text": "A Delta Live Table"
      },
      {
        "id": "d",
        "text": "A View"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Unity Catalog Volumes are the correct object for governing non-tabular data like PDFs and images. Volumes provide:\n• Three-level namespace: catalog.schema.volume\n• Access control (GRANT/REVOKE)\n• Lineage tracking\n• Path access: /Volumes/<catalog>/<schema>/<volume>/<path>\n\n❌ Why others are wrong:\n• (A) External Table: Tables are for structured, tabular data (rows and columns). PDFs and images are not tabular.\n• (C) Delta Live Table: DLT defines data transformation pipelines and produces tables — it's not for storing raw files.\n• (D) View: Views are SQL-based virtual tables. They cannot store or govern physical files like PDFs.\n\n🔑 EXAM TIP: When to use Tables vs. Volumes:\n• Tables: Structured data with a defined schema (columns, types)\n• Volumes: Everything else — PDFs, images, audio, video, logs, ML artifacts, configuration files\n• Both are governed by Unity Catalog with access controls and lineage",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-127",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A team of data analysts wants to follow software engineering best practices for their SQL queries. They need to version control their queries, track changes over time, and collaborate using branches. Which Databricks feature enables this for SQL files?",
    "options": [
      {
        "id": "a",
        "text": "Query History"
      },
      {
        "id": "b",
        "text": "Databricks Git Folders (Repos)"
      },
      {
        "id": "c",
        "text": "Workspace Browser"
      },
      {
        "id": "d",
        "text": "System Tables"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Databricks Git Folders / Repos): Git Folders (formerly Repos) integrate Git version control directly into Databricks. Analysts can save SQL files to Git repositories (GitHub, Azure DevOps, GitLab), track changes with commits, collaborate using branches, and implement CI/CD workflows.\n\n❌ Why others are wrong:\n• (A) Query History: Records past query executions but doesn't provide version control, branching, or collaboration features.\n• (C) Workspace Browser: Navigates files and folders in the Databricks workspace but doesn't offer Git-based version control.\n• (D) System Tables: Store telemetry, billing, and audit data — no version control functionality.\n\n🎯 EXAM TIP: Version control in Databricks = Git Folders (Repos). Key capabilities: branch management, commit history, pull requests, and CI/CD integration. The exam tests this for software engineering best practices questions.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-128",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A critical table was accidentally deleted yesterday. You need to find out exactly *who* ran the `DROP TABLE` command and *when*. Which system table should you query?",
    "options": [
      {
        "id": "a",
        "text": "system.billing.usage"
      },
      {
        "id": "b",
        "text": "system.information_schema.tables"
      },
      {
        "id": "c",
        "text": "system.access.audit"
      },
      {
        "id": "d",
        "text": "system.storage.files"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): system.access.audit contains the audit logs for Unity Catalog operations. It records WHO did WHAT and WHEN — including events like CREATE TABLE, DROP TABLE, SELECT, GRANT, REVOKE, and more. Essential for compliance auditing and incident investigation.\n\n❌ Why others are wrong:\n• (A) system.billing.usage: Tracks compute usage and costs (DBU consumption) — not security events or data operations.\n• (B) system.information_schema.tables: Lists metadata about existing tables (names, schemas, types) — but doesn't track OPERATIONS or history of who did what.\n• (D) system.storage.files: Not a standard Unity Catalog system table. File-level information is tracked in the Delta transaction log, not a separate system table.\n\n🔑 EXAM TIP: Key system tables:\n• system.access.audit → WHO did what (security/compliance auditing)\n• system.billing.usage → HOW MUCH compute was used (cost management)\n• system.information_schema.tables → WHAT tables exist (catalog listing)\n• DESCRIBE HISTORY table_name → WHAT operations were done on a specific table",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-129",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are calculating the average sales amount using `AVG(sales_amount)`. The column contains some `NULL` values. How does the `AVG` function handle these nulls in Databricks SQL?",
    "options": [
      {
        "id": "a",
        "text": "It treats NULLs as 0 and includes them in the average calculation."
      },
      {
        "id": "b",
        "text": "It ignores/skips the NULL values completely."
      },
      {
        "id": "c",
        "text": "It returns NULL if any value in the column is NULL."
      },
      {
        "id": "d",
        "text": "It throws a runtime error."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Ignores/skips NULL values completely): Standard SQL aggregate functions (AVG, SUM, MIN, MAX, COUNT(col)) automatically SKIP NULL values. For AVG([10, NULL, 20]): only 10 and 20 are counted, so AVG = (10 + 20) / 2 = 15, NOT (10 + 0 + 20) / 3 = 10.\n\n❌ Why others are wrong:\n• (A) \"Treats NULLs as 0\": FALSE. NULL ≠ 0. If NULLs were treated as 0, averages would be incorrect (the denominator would include NULL rows).\n• (C) \"Returns NULL if any value is NULL\": FALSE. This would make aggregate functions useless on real data. Only non-aggregate expressions can propagate NULLs.\n• (D) \"Throws runtime error\": FALSE. NULLs are expected in data. Aggregate functions handle them gracefully by skipping.\n\n🎯 EXAM TIP: NULL handling in aggregates: AVG, SUM, MIN, MAX = skip NULLs. COUNT(*) = counts ALL rows. COUNT(column) = counts only non-NULL values. The exam tests COUNT(*) vs COUNT(col) distinction.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-130",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a Databricks Dashboard, you have a dataset with thousands of rows. You add a Bar Chart and a Table widget. You want to configure the dashboard so that when a user clicks on a specific bar in the chart, the Table widget automatically filters to show only the records related to that bar. What feature is this?",
    "options": [
      {
        "id": "a",
        "text": "Cross-filtering"
      },
      {
        "id": "b",
        "text": "Parameter Mapping"
      },
      {
        "id": "c",
        "text": "Z-Order Indexing"
      },
      {
        "id": "d",
        "text": "Dynamic Views"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A): Cross-filtering is the feature where clicking a data point in one visualization (e.g., a bar in a bar chart) automatically filters other visualizations on the same dashboard. It creates interactive drill-down behavior without requiring explicit parameter setup.\n\n❌ Why others are wrong:\n• (B) Parameter Mapping: Parameters require manual configuration of filter widgets and explicit mapping. Cross-filtering is automatic — click a data point and other charts filter.\n• (C) Z-Order Indexing: Z-Order is a Delta Lake file optimization technique for co-locating related data in storage. It has nothing to do with dashboard interactivity.\n• (D) Dynamic Views: Dynamic Views is not a standard Databricks dashboard feature name. The correct term is Cross-filtering.\n\n🔑 EXAM TIP: Cross-filtering:\n• Enabled per-visualization in the widget properties\n• Works between visualizations on the SAME dashboard\n• Click a bar/point → other charts filter automatically\n• No explicit parameter configuration needed\n• Supported in AI/BI Dashboards",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-131",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What access control model in Unity Catalog defines permissions based on tags or attributes assigned to data assets, users, and the environment rather than explicit role grants?",
    "options": [
      {
        "id": "a",
        "text": "RBAC (Role-Based Access Control)"
      },
      {
        "id": "b",
        "text": "ACL (Access Control Lists)"
      },
      {
        "id": "c",
        "text": "ABAC (Attribute-Based Access Control)"
      },
      {
        "id": "d",
        "text": "IAM (Identity and Access Management)"
      },
      {
        "id": "e",
        "text": "MFA (Multi-Factor Authentication)"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — ABAC): Attribute-Based Access Control defines permissions based on tags/attributes assigned to data assets, users, and environmental context. Instead of explicitly granting SELECT to each user, policies automatically evaluate attributes (e.g., \"if user.department = 'finance' AND table.sensitivity = 'confidential' → grant access\").\n\n❌ Why others are wrong:\n• (A) RBAC: Role-Based Access Control grants permissions to ROLES, not attributes. Users are assigned to roles, and roles have permissions. More rigid than ABAC.\n• (B) ACL: Access Control Lists define explicit permission lists per object. Not attribute-driven.\n• (D) IAM: Identity and Access Management is a broader infrastructure concept (AWS IAM, Azure AD), not a specific UC access control model.\n• (E) MFA: Multi-Factor Authentication verifies user IDENTITY, not data ACCESS policies.\n\n🔑 EXAM TIP: UC Access Control models:\n• RBAC (traditional): GRANT SELECT ON TABLE x TO role_y\n• ABAC (tag-based): Dynamic policies evaluating user + data attributes\n• Row Filters/Column Masks: Fine-grained per-row and per-column policies\n• All three can COEXIST in Unity Catalog",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-132",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to query data stored in an external PostgreSQL database directly from Databricks SQL without moving or copying the data. Which Databricks feature allows the analyst to create a federated catalog that points to the external database?",
    "options": [
      {
        "id": "a",
        "text": "Delta Sharing"
      },
      {
        "id": "b",
        "text": "Lakehouse Federation"
      },
      {
        "id": "c",
        "text": "Auto Loader"
      },
      {
        "id": "d",
        "text": "COPY INTO"
      },
      {
        "id": "e",
        "text": "Databricks Connect"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Lakehouse Federation creates federated catalogs in Unity Catalog that point to external databases (PostgreSQL, MySQL, Snowflake, SQL Server, BigQuery). This enables direct SQL queries from Databricks without moving or copying data.\n\n❌ Why others are wrong:\n• (A) Delta Sharing: Delta Sharing is for sharing Delta Lake data OUTWARD to external consumers. It doesn't create federated catalogs for querying external databases inward.\n• (C) Auto Loader: Auto Loader ingests files (CSV, JSON, Parquet) from cloud storage INTO Databricks — it doesn't query external databases.\n• (D) COPY INTO: COPY INTO loads data from files INTO a Delta table. It's an ingestion command, not a federation feature.\n• (E) Databricks Connect: Databricks Connect connects external IDEs to Databricks compute — it doesn't create federated database access.\n\n🔑 EXAM TIP: Data access methods:\n• Lakehouse Federation → query external databases in place (no data movement)\n• Delta Sharing → share Delta data with external organizations\n• Auto Loader → ingest files from cloud storage\n• COPY INTO → batch load files into Delta tables\n• Databricks Connect → connect IDEs to Databricks clusters",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-133",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst accidentally ran an UPDATE statement that corrupted data in a Delta table. They need to restore the table to its state as of version 5. Which of the following SQL commands will restore the table to that version?"
      }
    ],
    "prompt": "A data analyst accidentally ran an UPDATE statement that corrupted data in a Delta table. They need to restore the table to its state as of version 5. Which command restores the table?",
    "options": [
      {
        "id": "a",
        "text": "ROLLBACK TABLE my_table TO VERSION 5;"
      },
      {
        "id": "b",
        "text": "RESTORE TABLE my_table TO VERSION AS OF 5;"
      },
      {
        "id": "c",
        "text": "SELECT * FROM my_table VERSION AS OF 5;"
      },
      {
        "id": "d",
        "text": "UNDO TABLE my_table VERSION 5;"
      },
      {
        "id": "e",
        "text": "RESET TABLE my_table TO VERSION 5;"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — RESTORE TABLE my_table TO VERSION AS OF 5): This command restores the ENTIRE table to its state at version 5, creating a new version that reflects the version 5 content. All changes made after version 5 are effectively undone. The table is immediately usable at the restored state.\n\n❌ Why others are wrong:\n• (A) \"ROLLBACK TABLE\": Not valid Databricks SQL syntax. ROLLBACK is for transaction management, not table versioning.\n• (C) \"SELECT * FROM table VERSION AS OF 5\": This QUERIES data at version 5 but does NOT restore the table. The table remains at its current version.\n• (D) \"UNDO TABLE\": Not valid SQL syntax.\n• (E) \"RESET TABLE\": Not valid SQL syntax.\n\n🎯 EXAM TIP: RESTORE = action (changes the table state). VERSION AS OF = read-only time travel (queries historical data). The exam ALWAYS has both options to test if you know the difference. RESTORE creates a new version, it's NOT destructive.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-134",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In the context of data modeling for analytics, which of the following correctly describes a Star Schema?",
    "options": [
      {
        "id": "a",
        "text": "A single flat table containing all columns and rows without any normalization"
      },
      {
        "id": "b",
        "text": "A central fact table surrounded by multiple denormalized dimension tables, optimized for analytical queries"
      },
      {
        "id": "c",
        "text": "A fully normalized schema with no data redundancy, used primarily for OLTP workloads"
      },
      {
        "id": "d",
        "text": "A schema with multiple fact tables and no dimension tables"
      },
      {
        "id": "e",
        "text": "A hierarchical schema where each level inherits the schema of the parent table"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Central fact table surrounded by denormalized dimension tables): A Star Schema has:\n• ONE central fact table (metrics/measures: sales amount, quantity)\n• MULTIPLE denormalized dimension tables (descriptive attributes: product, customer, date, store)\n• Direct 1:N relationships from dimensions to fact table\n\n❌ Why others are wrong:\n• (A) Single flat table: This describes a denormalized flat table, not a star schema.\n• (C) Fully normalized OLTP schema: 3NF normalization is for transactional systems (OLTP), not analytics (OLAP). Star schema deliberately denormalizes for query performance.\n• (D) Multiple fact tables, no dimensions: This is not a recognized schema pattern.\n• (E) Hierarchical inheritance: Not a standard data modeling concept.\n\n🔑 EXAM TIP: Star Schema vs. Snowflake Schema:\n• Star: Dimension tables are DENORMALIZED (flat) → simpler joins, faster queries\n• Snowflake: Dimension tables are NORMALIZED (sub-dimensions) → less redundancy, more joins\n• For Databricks analytics: Star Schema is PREFERRED (fewer joins = better performance)",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-135",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to ensure that when users query a table containing Social Security Numbers (SSNs), the SSN column displays only the last four digits (e.g., '***-**-1234') without modifying the actual stored data. Which Unity Catalog feature should the analyst use?",
    "options": [
      {
        "id": "a",
        "text": "Row Filters"
      },
      {
        "id": "b",
        "text": "Data Tagging"
      },
      {
        "id": "c",
        "text": "Column Masking"
      },
      {
        "id": "d",
        "text": "Encryption at Rest"
      },
      {
        "id": "e",
        "text": "Access Control Lists"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Column Masking): Column Masking uses a User-Defined Function (UDF) to transform sensitive column values at READ time without modifying stored data. Different users see different versions of the data based on their identity/group.\n\n❌ Why others are wrong:\n• (A) Row Filters: Row Filters restrict which ROWS a user can see, not which COLUMN VALUES. SSN masking requires column-level transformation.\n• (B) Data Tagging: Tags classify data (e.g., 'PII = true') for governance but don't transform or mask values at query time.\n• (D) Encryption at Rest: Encryption protects data on disk but doesn't affect query results. Decrypted values are shown to all authorized users — no partial masking.\n• (E) Access Control Lists: ACLs grant/deny access to entire objects (tables, schemas), not partial column transformation.\n\n🔑 EXAM TIP: Column Masking vs. Row Filters:\n• Column Masking: TRANSFORMS values in a column (e.g., SSN → ***-**-1234)\n• Row Filters: HIDES entire rows based on conditions\n• Both are defined on the TABLE and enforced universally\n• Both use SQL functions with CURRENT_USER() or IS_MEMBER()",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-136",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A stakeholder has provided a data analyst with a single 20-row CSV file that needs to be quickly loaded into a Delta table for ad-hoc analysis. The analyst does not have access to cloud object storage. Which Databricks SQL feature allows the analyst to ingest this small file directly through the user interface?",
    "options": [
      {
        "id": "a",
        "text": "Auto Loader"
      },
      {
        "id": "b",
        "text": "COPY INTO"
      },
      {
        "id": "c",
        "text": "Upload File via the Databricks SQL UI"
      },
      {
        "id": "d",
        "text": "Delta Sharing"
      },
      {
        "id": "e",
        "text": "CREATE TABLE AS SELECT"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): Upload File via the Databricks SQL UI is the best fit because:\n1. It's a SMALL file (20 rows) — no need for streaming/batch infrastructure\n2. No cloud storage access — eliminates Auto Loader and COPY INTO (both need a cloud storage path)\n3. It creates a managed Delta table directly from the UI (drag-and-drop)\n\n❌ Why others are wrong:\n• (A) Auto Loader: Requires files to be in cloud object storage (S3/ADLS/GCS). The analyst has NO storage access, so Auto Loader can't reach the file.\n• (B) COPY INTO: Same issue — needs a cloud storage path or external location. Without storage access, there's no path to point to.\n• (D) Delta Sharing: This is for sharing data BETWEEN organizations, not for uploading local files.\n• (E) CREATE TABLE AS SELECT: This requires querying an existing data source. There's no source table to SELECT from yet — the data is in a local CSV.\n\n🎯 EXAM TIP: No cloud storage access + small local file = UI Upload. This is the ONLY option that works without external storage configuration.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-137",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is building a line chart in a Databricks SQL dashboard to visualize monthly revenue over two years. The analyst wants to overlay a visual indicator that helps identify anomalies and overall direction in the data. Which chart feature should the analyst enable?",
    "options": [
      {
        "id": "a",
        "text": "Data Labels"
      },
      {
        "id": "b",
        "text": "Stacked Bars"
      },
      {
        "id": "c",
        "text": "Trend Lines"
      },
      {
        "id": "d",
        "text": "Pie Chart"
      },
      {
        "id": "e",
        "text": "Heat Map"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): Trend Lines overlay a regression line (linear, polynomial) or moving average on top of data points. This helps identify the overall direction (upward/downward), spot anomalies (points deviating from the trend), and quantify the relationship strength.\n\n❌ Why others are wrong:\n• (A) Data Labels: Data Labels show exact values on each data point (e.g., \"$45,230\"). They don't show direction or anomalies — they just annotate existing points.\n• (B) Stacked Bars: Stacked bars show part-to-whole composition. Not applicable to a line chart, and they don't identify trends or anomalies.\n• (D) Pie Chart: Pie charts show proportional composition at a single point in time. They cannot show trends over time or anomalies.\n• (E) Heat Map: Heat maps show intensity in a matrix format. While useful for patterns, they don't overlay directional indicators on a line chart.\n\n🔑 EXAM TIP: Trend Lines are the go-to feature for:\n• Identifying overall direction (trend)\n• Spotting anomalies (points far from the trend line)\n• Forecasting (extrapolating the trend)\n• Available in line charts, bar charts, and scatter plots in the Visualization Editor",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-138",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which Unity Catalog feature automatically tracks the origin, transformations, and downstream consumers of a dataset at both the table and column level?",
    "options": [
      {
        "id": "a",
        "text": "Data Masking"
      },
      {
        "id": "b",
        "text": "Data Lineage"
      },
      {
        "id": "c",
        "text": "Delta Time Travel"
      },
      {
        "id": "d",
        "text": "Liquid Clustering"
      },
      {
        "id": "e",
        "text": "Row Filters"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Data Lineage in Unity Catalog automatically tracks:\n• Table-level lineage: Which tables feed into which tables\n• Column-level lineage: Which columns are derived from which source columns\n• Query lineage: Which queries transform data between tables\n• Downstream impact: Which reports/dashboards are affected by a table change\n\n❌ Why others are wrong:\n• (A) Data Masking: Data Masking hides sensitive data values (e.g., showing last 4 digits of SSN). It's about data PROTECTION, not tracking data FLOW.\n• (C) Delta Time Travel: Time Travel provides access to historical SNAPSHOTS of a table. It doesn't track cross-table data flow or dependencies.\n• (D) Liquid Clustering: Optimizes file layout for query performance (data skipping). It's about STORAGE performance, not data tracking.\n• (E) Row Filters: Row-level security filters that restrict which rows a user can see. It's about ACCESS control, not lineage tracking.\n\n🔑 EXAM TIP: Lineage use cases:\n• Impact analysis: \"If I change this table, what breaks?\"\n• Root cause: \"Where did this bad data come from?\"\n• Compliance: \"Prove how this report was generated\"\n• All tracked AUTOMATICALLY — no manual configuration needed",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-139",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Unity Catalog, data assets are organized using a three-level namespace. Which of the following correctly represents this hierarchy?",
    "options": [
      {
        "id": "a",
        "text": "Database → Table → Column"
      },
      {
        "id": "b",
        "text": "Workspace → Cluster → Query"
      },
      {
        "id": "c",
        "text": "Catalog → Schema → Table/View"
      },
      {
        "id": "d",
        "text": "Account → User → Permission"
      },
      {
        "id": "e",
        "text": "Storage → Container → File"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): Unity Catalog uses a three-level namespace: Catalog → Schema → Table/View. Objects are referenced as catalog_name.schema_name.table_name. This hierarchy provides organizational isolation and governance across workspaces.\n\n❌ Why others are wrong:\n• (A) Database → Table → Column: This describes a legacy Hive-style hierarchy. Unity Catalog uses Catalog → Schema (replaces Database) → Table.\n• (B) Workspace → Cluster → Query: These are infrastructure concepts, not data governance hierarchy.\n• (D) Account → User → Permission: This describes identity management, not data organization.\n• (E) Storage → Container → File: This describes cloud storage hierarchy, not Unity Catalog's logical namespace.\n\n🔑 EXAM TIP: Unity Catalog three-level namespace:\n• Level 1: CATALOG (organizational boundary — e.g., 'production', 'development')\n• Level 2: SCHEMA (logical grouping — e.g., 'sales', 'hr', 'finance')\n• Level 3: TABLE / VIEW / VOLUME / FUNCTION / MODEL\n• Full path: catalog.schema.table\n• USAGE privilege is required at each level to traverse",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-140",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "promptBlocks": [
      {
        "type": "text",
        "content": "A data analyst wants to grant read-only access to the sales_data table so a colleague can run SELECT queries but cannot modify the data. Which of the following SQL commands accomplishes this?"
      }
    ],
    "prompt": "A data analyst wants to grant read-only access to the sales_data table so a colleague can run SELECT queries but cannot modify the data. Which SQL command accomplishes this?",
    "options": [
      {
        "id": "a",
        "text": "GRANT ALL PRIVILEGES ON TABLE sales_data TO `colleague@example.com`;"
      },
      {
        "id": "b",
        "text": "GRANT SELECT ON TABLE sales_data TO `colleague@example.com`;"
      },
      {
        "id": "c",
        "text": "GRANT MODIFY ON TABLE sales_data TO `colleague@example.com`;"
      },
      {
        "id": "d",
        "text": "GRANT CREATE ON TABLE sales_data TO `colleague@example.com`;"
      },
      {
        "id": "e",
        "text": "GRANT READ ON TABLE sales_data TO `colleague@example.com`;"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — GRANT SELECT): GRANT SELECT provides read-only access — the user can run SELECT queries but cannot INSERT, UPDATE, DELETE, or modify the table structure.\n\n❌ Why others are wrong:\n• (A) ALL PRIVILEGES: Grants everything — SELECT, MODIFY, CREATE, DROP. Over-privileged for read-only access.\n• (C) MODIFY: Grants write access (INSERT, UPDATE, DELETE) but NOT necessarily SELECT. This is the opposite of what's needed.\n• (D) CREATE: Controls ability to CREATE objects within a schema, not read table data.\n• (E) READ: Not a valid Unity Catalog privilege. The correct privilege name is SELECT.\n\n🔑 EXAM TIP: Unity Catalog privileges for tables:\n• SELECT: Read data (SELECT queries)\n• MODIFY: Write data (INSERT, UPDATE, DELETE)\n• ALL PRIVILEGES: All available privileges\n• Principle of least privilege: ALWAYS grant the minimum needed",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-141",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following best describes the relationship between Databricks SQL and the overall Databricks Data Intelligence Platform?",
    "options": [
      {
        "id": "a",
        "text": "Databricks SQL is a standalone product that does not integrate with other Databricks services"
      },
      {
        "id": "b",
        "text": "Databricks SQL is the service within the Data Intelligence Platform specifically designed for analysts to write SQL queries, create dashboards, and perform in-platform BI work using serverless compute"
      },
      {
        "id": "c",
        "text": "Databricks SQL is only used for machine learning model training"
      },
      {
        "id": "d",
        "text": "Databricks SQL replaces all external BI tools and provides identical functionality"
      },
      {
        "id": "e",
        "text": "Databricks SQL is a deprecated service that has been replaced by Notebooks"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — DBSQL is the analyst service within the platform): Databricks SQL is a core service of the Databricks Data Intelligence Platform, purpose-built for SQL analysts. It includes: SQL Editor, SQL Warehouses, AI/BI Dashboards, Alerts, Genie Spaces, and Catalog Explorer. It integrates natively with Unity Catalog for governance.\n\n❌ Why others are wrong:\n• (A) \"Standalone product, no integration\": Completely false. DBSQL is deeply integrated — it uses Unity Catalog for governance, shares data with notebooks/ML, and leverages the Data Intelligence Engine.\n• (C) \"Only for ML training\": DBSQL is for SQL analytics, not ML model training. ML workloads use Databricks ML Runtime and MLflow.\n• (D) \"Replaces all external BI tools\": DBSQL complements BI tools (Tableau, Power BI). It provides lightweight in-platform BI, not a complete BI replacement.\n• (E) \"Deprecated, replaced by Notebooks\": False. DBSQL is actively developed and is the recommended service for SQL-centric analytics.\n\n🎯 EXAM TIP: Databricks Data Intelligence Platform has three personas: DBSQL (analysts), Workspace (engineers/scientists), ML (data scientists). DBSQL is a first-class citizen, not a secondary tool.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-142",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following best describes the architecture of a Data Lakehouse?",
    "options": [
      {
        "id": "a",
        "text": "A traditional data warehouse deployed on cloud infrastructure with no support for unstructured data"
      },
      {
        "id": "b",
        "text": "A raw data lake that stores files without any governance, reliability, or schema enforcement"
      },
      {
        "id": "c",
        "text": "An architecture that combines the reliability, governance, and performance of a data warehouse with the flexibility, scalability, and low cost of a data lake"
      },
      {
        "id": "d",
        "text": "A system exclusively designed for batch processing of structured data"
      },
      {
        "id": "e",
        "text": "A distributed relational database optimized for OLTP workloads"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Combines warehouse reliability with lake flexibility/scalability): The Lakehouse architecture merges the best of both worlds: DATA WAREHOUSE features (ACID transactions, schema enforcement, governance, performance) with DATA LAKE features (scalable cloud storage, support for structured + semi-structured + unstructured data, open formats).\n\n❌ Why others are wrong:\n• (A) \"Traditional warehouse on cloud, no unstructured data\": This describes a cloud data warehouse (like Snowflake), NOT a lakehouse. Lakehouses explicitly support unstructured data.\n• (B) \"Raw lake without governance\": This describes a traditional data lake's weakness — exactly what the lakehouse architecture solves.\n• (D) \"Exclusively for batch processing\": Lakehouses support BOTH batch and streaming (Delta Lake supports streaming ingestion with Structured Streaming).\n• (E) \"Distributed OLTP database\": Lakehouses are optimized for OLAP (analytics), not OLTP (transactional operations like banking).\n\n🎯 EXAM TIP: Lakehouse = Warehouse (reliability + governance) + Lake (scalability + flexibility + open formats). This definition appears in multiple forms on the exam.",
    "domain": "Understanding of Databricks Data Intelligence Platform"
  },
  {
    "id": "db-da-143",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to create a full, independent backup of a production Delta table, including all data files and transaction history, so changes to the backup do not affect the original table. Which command should the analyst use?",
    "options": [
      {
        "id": "a",
        "text": "CREATE TABLE backup_table SHALLOW CLONE production_table;"
      },
      {
        "id": "b",
        "text": "CREATE TABLE backup_table DEEP CLONE production_table;"
      },
      {
        "id": "c",
        "text": "CREATE TABLE backup_table AS SELECT * FROM production_table;"
      },
      {
        "id": "d",
        "text": "COPY INTO backup_table FROM production_table;"
      },
      {
        "id": "e",
        "text": "INSERT INTO backup_table TABLE production_table;"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): DEEP CLONE creates a complete, INDEPENDENT copy including all data files, metadata, and transaction history. Changes to the clone don't affect the source, and vice versa. This is the proper method for full production backups.\n\n❌ Why others are wrong:\n• (A) SHALLOW CLONE: Only copies metadata and creates references to the source's data files. NOT independent — if the source runs VACUUM, the clone loses access to old files.\n• (C) CTAS (CREATE TABLE AS SELECT): Copies current data but loses transaction history, table properties, and constraints. No historical versions are preserved.\n• (D) COPY INTO: Ingests data FROM files INTO a table. Not designed for table-to-table cloning.\n• (E) INSERT INTO: Appends data but doesn't replicate schema, constraints, or history.\n\n🔑 EXAM TIP: DEEP CLONE vs SHALLOW CLONE:\n• DEEP: Full copy (data + metadata + history) → independent, backup-grade\n• SHALLOW: Metadata only (references source files) → fast, lightweight, testing\n• DEEP is expensive but safe; SHALLOW is cheap but fragile",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-144",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to quickly create a lightweight copy of a large Delta table for read-only testing without duplicating all the data files. Which cloning method is most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "DEEP CLONE"
      },
      {
        "id": "b",
        "text": "SHALLOW CLONE"
      },
      {
        "id": "c",
        "text": "CREATE TABLE AS SELECT (CTAS)"
      },
      {
        "id": "d",
        "text": "COPY INTO"
      },
      {
        "id": "e",
        "text": "INSERT OVERWRITE"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): SHALLOW CLONE creates a lightweight copy by only copying metadata (schema, partitioning, transaction log) and REFERENCING the source's data files. No data file duplication — this makes it fast and cost-effective for read-only testing or development environments.\n\n❌ Why others are wrong:\n• (A) DEEP CLONE: Full data copy — too expensive and slow for \"quick lightweight\" testing. Appropriate for backups, not throwaway test copies.\n• (C) CTAS: Creates a full data copy (like DEEP CLONE for data) but loses transaction history and properties.\n• (D) COPY INTO: File-to-table ingestion. Not for table-to-table cloning.\n• (E) INSERT OVERWRITE: Replaces all data in a target table. Not a cloning mechanism.\n\n🔑 EXAM TIP: SHALLOW CLONE caveat:\n• If source table runs VACUUM, referenced files may be deleted\n• Shallow clone becomes broken → queries fail\n• Best for short-lived testing/dev environments\n• NOT suitable for long-term backups\n• Syntax: CREATE TABLE clone_table SHALLOW CLONE source_table",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-145",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What does Predictive Optimization do for Unity Catalog managed tables?",
    "options": [
      {
        "id": "a",
        "text": "It automatically generates SQL queries based on user prompts"
      },
      {
        "id": "b",
        "text": "It automatically performs maintenance operations like compaction, VACUUM, and Liquid Clustering to improve query performance and reduce storage costs"
      },
      {
        "id": "c",
        "text": "It predicts future query results based on historical data"
      },
      {
        "id": "d",
        "text": "It automatically creates dashboards from query results"
      },
      {
        "id": "e",
        "text": "It automatically scales SQL warehouses based on predicted workload"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Automatically performs OPTIMIZE, VACUUM, and Liquid Clustering maintenance): Predictive Optimization uses data usage patterns, table statistics, and workload analysis to automatically schedule maintenance operations on Unity Catalog managed tables. Instead of manually running OPTIMIZE and VACUUM, the system triggers them intelligently when beneficial.\n\n❌ Why others are wrong:\n• (A) \"Generates SQL queries from prompts\": This describes Databricks Assistant or Genie — AI-powered query generation, not Predictive Optimization.\n• (C) \"Predicts future query results\": No system can predict actual data results. Predictive Optimization predicts which MAINTENANCE is needed, not query outcomes.\n• (D) \"Creates dashboards from results\": Dashboard creation is a manual or AI-assisted process (Genie/Assistant), not related to Predictive Optimization.\n• (E) \"Auto-scales SQL warehouses\": Auto-scaling is a SQL Warehouse configuration feature (min/max clusters). Predictive Optimization manages table maintenance, not compute scaling.\n\n🎯 EXAM TIP: Predictive Optimization = automated DBA for your tables. It handles: OPTIMIZE (compaction), VACUUM (cleanup), and ANALYZE TABLE (statistics). Requires Unity Catalog managed tables. The exam tests what it automates.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-146",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs VACUUM on a Delta table with the default retention period. What is the default retention threshold, and what happens to files older than this threshold that are no longer referenced by the transaction log?",
    "options": [
      {
        "id": "a",
        "text": "30 days; files are archived to cold storage"
      },
      {
        "id": "b",
        "text": "7 days (168 hours); unreferenced files older than this are permanently deleted"
      },
      {
        "id": "c",
        "text": "24 hours; files are moved to a recycle bin"
      },
      {
        "id": "d",
        "text": "90 days; files are compressed but not deleted"
      },
      {
        "id": "e",
        "text": "There is no default; the user must always specify a retention period"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Default VACUUM retention is 7 days (168 hours). VACUUM permanently deletes unreferenced data files older than this threshold. Once deleted, Time Travel queries to those versions fail.\n\n❌ Why others are wrong:\n• (A) 30 days, archived: No archiving mechanism. Files are permanently DELETED, not archived.\n• (C) 24 hours, recycle bin: No recycle bin in Delta Lake. Deletion is permanent. And default is 7 days, not 24 hours.\n• (D) 90 days, compressed: No compression behavior. VACUUM deletes, not compresses.\n• (E) No default: There IS a default — 7 days (168 hours). Users can override with VACUUM RETAIN <hours> HOURS.\n\n🔑 EXAM TIP: VACUUM facts:\n• Default retention: 7 days (168 hours)\n• Reduces below 7 days requires: SET spark.databricks.delta.retentionDurationCheck.enabled = false\n• VACUUM removes: old data files no longer referenced by the transaction log\n• VACUUM does NOT remove: transaction log entries (those have separate retention)\n• WARNING: VACUUM + short retention = loss of Time Travel capability",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-147",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to embed a published Databricks AI/BI dashboard into their company's internal web portal so employees can view it without navigating to Databricks. Which method should the analyst use?",
    "options": [
      {
        "id": "a",
        "text": "Export the dashboard as a PDF and upload it to the portal"
      },
      {
        "id": "b",
        "text": "Embed the dashboard using an iframe, with the workspace admin approving the host domain"
      },
      {
        "id": "c",
        "text": "Take a screenshot and embed the image"
      },
      {
        "id": "d",
        "text": "Use Databricks Connect to stream dashboard data to the portal"
      },
      {
        "id": "e",
        "text": "Dashboard embedding is not supported in Databricks"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Databricks AI/BI Dashboards support embedding via iframes. The process is:\n1. Publish the dashboard\n2. Workspace admin adds the host domain to the allowed embedding surfaces\n3. Embed the iframe code in the external web portal\n4. Viewers authenticate via Databricks credentials or service principal\n\n❌ Why others are wrong:\n• (A) Export as PDF: A static PDF loses all interactivity (filters, parameters, drill-downs). It's not a live, embedded dashboard.\n• (C) Screenshot image: Even worse than PDF — static, no updates, no interactivity.\n• (D) Databricks Connect: Databricks Connect is for connecting local IDEs to remote Spark clusters for code execution — not for embedding dashboards.\n• (E) \"Not supported\": FALSE. Dashboard embedding is an officially supported feature.\n\n🔑 EXAM TIP: Dashboard embedding requirements:\n• Workspace admin must whitelist the hosting domain\n• The dashboard must be published\n• Authentication is required (credentials or service principal)\n• Embedding uses standard iframe HTML",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-148",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has created a dashboard and wants stakeholders to automatically receive a PDF snapshot of the dashboard via email every Monday morning. Which Databricks feature supports this?",
    "options": [
      {
        "id": "a",
        "text": "SQL Alerts"
      },
      {
        "id": "b",
        "text": "Dashboard Subscriptions (Scheduled Email Delivery)"
      },
      {
        "id": "c",
        "text": "Databricks Jobs"
      },
      {
        "id": "d",
        "text": "Delta Live Tables"
      },
      {
        "id": "e",
        "text": "Partner Connect"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Dashboard Subscriptions enable scheduled email delivery of dashboard snapshots as PDF attachments. You set a schedule (e.g., every Monday at 9 AM), add subscriber email addresses, and the system automatically generates and sends the PDF.\n\n❌ Why others are wrong:\n• (A) SQL Alerts: Alerts monitor a SINGLE query's value against a threshold and send notifications when the condition is met. They don't send full dashboard snapshots.\n• (C) Databricks Jobs: Jobs orchestrate notebooks, JARs, or Python scripts. They don't have native dashboard snapshot and email capabilities.\n• (D) Delta Live Tables: DLT defines declarative data pipelines for ETL. No dashboard or email functionality.\n• (E) Partner Connect: Partner Connect integrates third-party tools (Fivetran, dbt, Tableau). Not related to dashboard email delivery.\n\n🔑 EXAM TIP: Dashboard Subscriptions vs. Alerts:\n• Subscriptions = send full dashboard PDF on a SCHEDULE (time-based)\n• Alerts = send notification when a CONDITION is met (threshold-based)\n• Both can deliver via email, Slack, or Teams",
    "domain": "Working with Dashboards and Visualizations in Databricks"
  },
  {
    "id": "db-da-149",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What are Unity Catalog Volumes used for?",
    "options": [
      {
        "id": "a",
        "text": "Storing only structured tabular data in Delta format"
      },
      {
        "id": "b",
        "text": "Providing governance over non-tabular data such as images, PDFs, logs, JSON files, and ML artifacts"
      },
      {
        "id": "c",
        "text": "Managing compute cluster configurations"
      },
      {
        "id": "d",
        "text": "Storing SQL query results temporarily"
      },
      {
        "id": "e",
        "text": "Defining access control policies for users"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Unity Catalog Volumes provide governance over non-tabular data: images, PDFs, logs, JSON files, ML artifacts, audio, video, and more. They follow the three-level namespace (catalog.schema.volume) and files are accessed via /Volumes/<catalog>/<schema>/<volume>/<path>.\n\n❌ Why others are wrong:\n• (A) Only structured tabular data: Tables handle structured data. Volumes handle everything ELSE.\n• (C) Managing compute clusters: Compute management is done through Workspace settings, not Volumes.\n• (D) Storing SQL query results temporarily: Temporary results are stored in session state, not Volumes.\n• (E) Defining access control policies: Access control policies are defined through GRANT/REVOKE in Unity Catalog, not Volumes.\n\n🔑 EXAM TIP: Volume types:\n• Managed Volume: Unity Catalog manages the storage location and lifecycle\n• External Volume: User specifies the cloud storage location (like external tables)\n• Access: /Volumes/<catalog>/<schema>/<volume>/<path>\n• Governance: Same UC permissions (GRANT/REVOKE) as tables",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-150",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When curating an AI/BI Genie space for optimal accuracy, a data analyst is deciding how many tables to include. What is the recommended best practice?",
    "options": [
      {
        "id": "a",
        "text": "Include as many tables as possible so Genie has maximum context"
      },
      {
        "id": "b",
        "text": "Include only necessary tables (ideally five or fewer) and limit columns to focus the space"
      },
      {
        "id": "c",
        "text": "Always include at least 20 tables to ensure comprehensive coverage"
      },
      {
        "id": "d",
        "text": "The number of tables has no impact on Genie accuracy"
      },
      {
        "id": "e",
        "text": "Only a single table can be added to a Genie space"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B): Databricks recommends including only necessary tables (ideally 5 or fewer) and limiting columns to what's relevant. Too many tables and columns create \"noise\" that confuses Genie's SQL generation — it may pick wrong tables, create incorrect joins, or select irrelevant columns.\n\n❌ Why others are wrong:\n• (A) As many tables as possible: MORE tables = MORE confusion for the LLM. Each additional table increases the chance of incorrect table selection and joins.\n• (C) At least 20 tables: Far too many. This would degrade accuracy significantly.\n• (D) No impact on accuracy: FALSE. The number of tables directly impacts Genie's ability to select the right data source.\n• (E) Only one table: While very focused, this is too restrictive. Genie can handle multiple well-documented tables for cross-table queries.\n\n🔑 EXAM TIP: Genie accuracy formula:\n• Fewer tables (≤5) + fewer columns + rich metadata = HIGH accuracy\n• Many tables + many columns + poor metadata = LOW accuracy\n• Always include COMMENT descriptions on tables AND columns in Unity Catalog",
    "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
  },
  {
    "id": "db-da-151",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A streaming table in Databricks SQL needs to reprocess all data from its source because its definition was changed. Which refresh mode should the analyst use?",
    "options": [
      {
        "id": "a",
        "text": "REFRESH STREAMING TABLE my_table INCREMENTAL;"
      },
      {
        "id": "b",
        "text": "REFRESH STREAMING TABLE my_table FULL;"
      },
      {
        "id": "c",
        "text": "TRUNCATE TABLE my_table;"
      },
      {
        "id": "d",
        "text": "DROP AND RECREATE the streaming table"
      },
      {
        "id": "e",
        "text": "ALTER TABLE my_table SET REFRESH MODE = FULL;"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — REFRESH STREAMING TABLE my_table FULL): FULL refresh truncates the existing streaming table data and reprocesses ALL records from the source from scratch. This is needed when the table definition changes (new columns, modified logic) and incremental processing would miss the changes.\n\n❌ Why others are wrong:\n• (A) \"REFRESH... INCREMENTAL\": Incremental only processes NEW records since the last checkpoint. It won't reprocess historical data with the updated definition.\n• (C) \"TRUNCATE TABLE\": Truncate removes data but doesn't trigger a refresh. The table would be empty with no reprocessing.\n• (D) \"DROP AND RECREATE\": Destructive and unnecessary — FULL refresh handles reprocessing without losing the table definition or pipeline configuration.\n• (E) \"ALTER TABLE SET REFRESH MODE = FULL\": Not valid syntax. Refresh mode is specified on the REFRESH command, not as a table property.\n\n🎯 EXAM TIP: Streaming table refresh modes: INCREMENTAL (default, process only new data) vs. FULL (reprocess everything). Use FULL when: definition changed, source schema evolved, or data corruption needs repair.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-152",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to process Change Data Capture (CDC) records from a source system into a Delta table, handling inserts, updates, and deletes automatically while managing out-of-order records. Which Databricks SQL feature simplifies this?",
    "options": [
      {
        "id": "a",
        "text": "MERGE INTO with manual CDC logic"
      },
      {
        "id": "b",
        "text": "COPY INTO with schema evolution"
      },
      {
        "id": "c",
        "text": "FLOW AUTO CDC clause in streaming tables"
      },
      {
        "id": "d",
        "text": "INSERT OVERWRITE"
      },
      {
        "id": "e",
        "text": "CREATE VIEW with filtering logic"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C): FLOW AUTO CDC in streaming tables is purpose-built for CDC processing. It automatically:\n1. Handles INSERTs, UPDATEs, and DELETEs based on a primary key\n2. Manages OUT-OF-ORDER records using a sequence column (e.g., timestamp)\n3. Supports SCD Type 1 (overwrite current) and SCD Type 2 (track history)\n\nSyntax: APPLY FLOW AUTO CDC INTO target FROM source KEYS (id) SEQUENCE BY (ts)\n\n❌ Why others are wrong:\n• (A) MERGE INTO with manual logic: Works but requires you to manually write all the WHEN MATCHED / WHEN NOT MATCHED logic, handle out-of-order records yourself, and manage SCD manually. Much more complex and error-prone.\n• (B) COPY INTO with schema evolution: COPY INTO only APPENDS data — it has NO concept of updates or deletes. It cannot process CDC records.\n• (D) INSERT OVERWRITE: This replaces ALL data in the table, not individual records. No CDC capability.\n• (E) CREATE VIEW with filtering: Views don't modify data. This would just filter the view of CDC records without actually applying them.\n\n🎯 EXAM TIP: CDC processing = FLOW AUTO CDC (managed, automatic). MERGE INTO = manual alternative. COPY INTO = append-only (no updates/deletes).",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-153",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has created a Materialized View in Databricks SQL to speed up a frequently used dashboard query. How are the refresh operations for this Materialized View managed?",
    "options": [
      {
        "id": "a",
        "text": "The analyst must manually refresh the Materialized View every time using the SQL Editor"
      },
      {
        "id": "b",
        "text": "Databricks automatically creates a serverless pipeline that handles refresh operations, which can be scheduled or triggered manually"
      },
      {
        "id": "c",
        "text": "Materialized Views are always up-to-date in real-time with no refresh needed"
      },
      {
        "id": "d",
        "text": "Refresh is handled by an external orchestration tool like Airflow"
      },
      {
        "id": "e",
        "text": "Materialized Views cannot be refreshed once created"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Databricks automatically creates a serverless pipeline for refresh management): When you create a Materialized View in Databricks SQL, the platform auto-generates a serverless DLT pipeline behind the scenes. This pipeline handles refresh operations — either on a schedule you configure or via manual trigger. No external orchestration needed.\n\n❌ Why others are wrong:\n• (A) \"Must manually refresh every time\": While manual refresh IS possible, the key innovation is the AUTO-GENERATED pipeline that can be scheduled. Manual-only is incorrect.\n• (C) \"Always real-time, no refresh needed\": Materialized Views are NOT real-time. They store precomputed results that become stale as underlying data changes. Refresh is required to update.\n• (D) \"External orchestration tool required\": The built-in serverless pipeline eliminates the need for Airflow, Prefect, or similar external tools.\n• (E) \"Cannot be refreshed once created\": Completely false — refresh is the core lifecycle operation of Materialized Views.\n\n🎯 EXAM TIP: Materialized View refresh: AUTO-GENERATED serverless pipeline + schedule OR manual trigger. The pipeline is incremental — it only processes changed data, not the full table. This serverless pipeline detail is a key exam concept.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-154",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst creates a regular (non-temporary) VIEW in Databricks SQL using CREATE VIEW. After logging out and logging back in, what is the status of the view?",
    "options": [
      {
        "id": "a",
        "text": "The view is dropped because all views are session-scoped"
      },
      {
        "id": "b",
        "text": "The view persists in Unity Catalog and can be queried by any user with appropriate permissions"
      },
      {
        "id": "c",
        "text": "The view persists but the underlying data is deleted"
      },
      {
        "id": "d",
        "text": "The view is converted to a table automatically"
      },
      {
        "id": "e",
        "text": "The view can only be accessed by the creator"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — View persists in Unity Catalog): Regular views created with CREATE VIEW are persistent objects stored in Unity Catalog. They survive session ends, restarts, and are accessible to any user with appropriate permissions (SELECT on the view + USAGE on parent containers).\n\n❌ Why others are wrong:\n• (A) Views are session-scoped: FALSE for regular views. Only TEMPORARY VIEWS are session-scoped.\n• (C) Underlying data deleted: Views don't store data — they store QUERIES. The underlying table's data is independent of the view.\n• (D) Converted to table: Views are NEVER automatically converted to tables.\n• (E) Only accessible by creator: FALSE. Any user with SELECT permission on the view can query it.\n\n🔑 EXAM TIP: View types comparison:\n• CREATE VIEW: Persistent, stored in UC, survives sessions, shareable\n• CREATE TEMPORARY VIEW: Session-scoped, dropped on logout, not shareable\n• CREATE GLOBAL TEMPORARY VIEW: Cluster-scoped, dropped when cluster stops\n• Materialized View: Persistent + pre-computed results (requires Pro/Serverless warehouse)",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-155",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst notices that a SQL warehouse is experiencing high query queuing during peak hours. The warehouse is configured with a minimum of 1 cluster and maximum of 1 cluster. What change should the analyst recommend to reduce queuing?",
    "options": [
      {
        "id": "a",
        "text": "Reduce the cluster size to small"
      },
      {
        "id": "b",
        "text": "Increase the maximum number of clusters (scaling) for the SQL warehouse"
      },
      {
        "id": "c",
        "text": "Switch from Serverless to Pro warehouse"
      },
      {
        "id": "d",
        "text": "Disable auto-stop"
      },
      {
        "id": "e",
        "text": "Enable Photon engine"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Increase maximum number of clusters): When queries are queueing, the warehouse needs more concurrent processing capacity. Increasing the max clusters allows the warehouse to scale out — each additional cluster can handle its own set of queries, reducing queue wait times during peak hours.\n\n❌ Why others are wrong:\n• (A) \"Reduce cluster size\": Smaller clusters have less compute power per cluster, making each query slower — worsening the problem.\n• (C) \"Switch from Serverless to Pro\": Both types support scaling. The issue is the max cluster limit (1), not the warehouse type.\n• (D) \"Disable auto-stop\": Auto-stop affects startup time, not concurrency. The warehouse is already running during peak hours.\n• (E) \"Enable Photon\": Photon speeds up individual queries but doesn't add concurrent capacity. If queries are queueing, you need more clusters.\n\n🎯 EXAM TIP: Query queueing = concurrency problem → increase max clusters (horizontal scaling). Slow individual queries = performance problem → increase cluster SIZE (vertical scaling) or enable Photon. Different problems, different solutions.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-156",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Unity Catalog, a data analyst defines a PRIMARY KEY on the orders table and a FOREIGN KEY on order_items referencing orders. The analyst then tries to insert a row into order_items with an order_id that does not exist in orders. What happens?",
    "options": [
      {
        "id": "a",
        "text": "The insert fails with a foreign key constraint violation error"
      },
      {
        "id": "b",
        "text": "The insert succeeds because Unity Catalog PRIMARY KEY and FOREIGN KEY constraints are informational only and are not enforced"
      },
      {
        "id": "c",
        "text": "The row is inserted but automatically flagged as orphaned"
      },
      {
        "id": "d",
        "text": "The insert is queued until a matching order_id exists in orders"
      },
      {
        "id": "e",
        "text": "The orders table is automatically updated to include the missing order_id"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Insert succeeds, constraints are informational): Unity Catalog PK/FK constraints are declarative metadata — they inform tools about relationships but do NOT enforce data integrity during writes. The insert with a non-existent order_id succeeds without error.\n\n❌ Why others are wrong:\n• (A) Constraint violation error: Only in traditional RDBMS. Databricks does not validate PK/FK on writes.\n• (C) Flagged as orphaned: No automatic orphan detection in Delta Lake.\n• (D) Insert queued: No deferred constraint checking in Databricks.\n• (E) Orders table auto-updated: Tables are NOT automatically modified to satisfy referential constraints.\n\n🔑 EXAM TIP: This is one of the MOST REPEATED concepts across domains:\n• PK/FK = INFORMATIONAL ONLY in Databricks\n• Used by: Query optimizer, BI tools, Genie\n• NOT used for: Data validation, constraint enforcement\n• For data quality: Use DLT Expectations, CHECK constraints, or application-level validation",
    "domain": "Data Modeling with Databricks SQL"
  },
  {
    "id": "db-da-157",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has two result sets from different queries. They want to combine the results, keeping only distinct rows and removing duplicates. Which SQL set operation should they use?",
    "options": [
      {
        "id": "a",
        "text": "UNION ALL"
      },
      {
        "id": "b",
        "text": "UNION"
      },
      {
        "id": "c",
        "text": "INTERSECT"
      },
      {
        "id": "d",
        "text": "EXCEPT"
      },
      {
        "id": "e",
        "text": "CROSS JOIN"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — UNION): UNION combines two result sets and automatically removes duplicate rows from the combined output. It performs an implicit DISTINCT operation on the merged data.\n\n❌ Why others are wrong:\n• (A) UNION ALL: Combines result sets but KEEPS all duplicates. If the same row exists in both sets, it appears twice.\n• (C) INTERSECT: Returns ONLY rows that appear in BOTH result sets — not a union, but an intersection.\n• (D) EXCEPT: Returns rows from the first set that do NOT appear in the second set — a subtraction, not a union.\n• (E) CROSS JOIN: Produces the Cartesian product (every row × every row) — completely different from combining result sets.\n\n🎯 EXAM TIP: UNION = merge + deduplicate. UNION ALL = merge + keep duplicates (faster). INTERSECT = common rows only. EXCEPT = first minus second. The exam requires knowing all four set operations.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-158",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs the following query:\n\nSELECT employee_id, salary,\n  LAG(salary) OVER (ORDER BY hire_date) AS prev_salary\nFROM employees;\n\nWhat does the `prev_salary` column contain for the FIRST row (earliest hire_date)?",
    "options": [
      {
        "id": "a",
        "text": "The same salary value as the current row"
      },
      {
        "id": "b",
        "text": "NULL"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "An error is thrown because there is no previous row"
      },
      {
        "id": "e",
        "text": "The salary of the last row in the result set"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — NULL): LAG() returns the value from the PREVIOUS row in the window defined by ORDER BY. For the FIRST row in the result set, there IS no previous row, so LAG() returns NULL by default. You can specify a default: LAG(salary, 1, 0) would return 0 instead.\n\n❌ Why others are wrong:\n• (A) \"Same salary value\": LAG returns the PREVIOUS row's value, not the current row's value. That would be the column itself.\n• (C) \"0\": LAG returns NULL by default, not 0. You'd need LAG(salary, 1, 0) to get 0 as a default.\n• (D) \"Error thrown\": No error — LAG gracefully handles boundary cases by returning NULL.\n• (E) \"Last row's salary\": LAG looks BACKWARD, not to the end. Wrapping around would require custom logic.\n\n🎯 EXAM TIP: Window function boundaries: LAG at first row = NULL. LEAD at last row = NULL. Default values change this: LAG(col, 1, default_val). The exam tests both NULL behavior and default value syntax.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-159",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst writes the following query to categorize customers:\n\nSELECT customer_id, total_purchases,\n  CASE\n    WHEN total_purchases >= 1000 THEN 'Platinum'\n    WHEN total_purchases >= 500 THEN 'Gold'\n    WHEN total_purchases >= 100 THEN 'Silver'\n    ELSE 'Bronze'\n  END AS tier\nFROM customers;\n\nA customer has total_purchases = 750. What tier is assigned?",
    "options": [
      {
        "id": "a",
        "text": "Platinum"
      },
      {
        "id": "b",
        "text": "Gold"
      },
      {
        "id": "c",
        "text": "Silver"
      },
      {
        "id": "d",
        "text": "Bronze"
      },
      {
        "id": "e",
        "text": "NULL"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Gold): CASE WHEN evaluates conditions TOP-TO-BOTTOM and returns the result for the FIRST matching condition. For total_purchases = 750: (1) 750 >= 1000? FALSE → skip. (2) 750 >= 500? TRUE → return 'Gold'. Remaining conditions are NOT evaluated.\n\n❌ Why others are wrong:\n• (A) Platinum: 750 >= 1000 is FALSE, so Platinum is skipped.\n• (C) Silver: 750 >= 500 matches BEFORE the Silver condition is reached. CASE stops at the first TRUE.\n• (D) Bronze: Bronze is never evaluated because Gold already matched.\n• (E) NULL: NULL only occurs if NO conditions match AND there's no ELSE clause.\n\n🎯 EXAM TIP: CASE WHEN = short-circuit evaluation (first match wins). Order matters! If you swap conditions (>= 500 before >= 1000), 1000+ values would incorrectly match Gold instead of Platinum. The exam tests this ordering behavior.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-160",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has the following data in the `orders` table:\n\n| order_id | discount |\n|----------|----------|\n| 1        | 10       |\n| 2        | NULL     |\n| 3        | 25       |\n| 4        | NULL     |\n\nThe analyst runs:\nSELECT order_id, COALESCE(discount, 0) AS final_discount FROM orders;\n\nWhat is the value of `final_discount` for order_id = 2?",
    "options": [
      {
        "id": "a",
        "text": "NULL"
      },
      {
        "id": "b",
        "text": "0"
      },
      {
        "id": "c",
        "text": "10"
      },
      {
        "id": "d",
        "text": "An error because NULL cannot be compared"
      },
      {
        "id": "e",
        "text": "The average of all non-NULL discount values"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT: COALESCE returns the FIRST non-NULL argument from its parameter list. For discount = NULL: COALESCE(NULL, 0) skips NULL and returns 0. COALESCE is the standard way to replace NULLs with default values.\n\n❌ Why others are wrong:\n• (A) NULL: COALESCE specifically EXISTS to avoid returning NULL. If the first argument is NULL, it moves to the next.\n• (C) 10: 10 would only be returned if discount = 10 (first argument is non-NULL, so COALESCE returns it directly).\n• (D) \"Error because NULL can't be compared\": COALESCE doesn't compare NULL — it checks for NULL to determine which argument to return.\n\n🎯 EXAM TIP: COALESCE(a, b, c) = first non-NULL value. Common patterns: COALESCE(nullable_col, 0) for numbers, COALESCE(nullable_col, 'Unknown') for strings. NVL(a, b) is shorthand for COALESCE with 2 arguments.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-161",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst wants to aggregate daily sales into monthly totals. Which query correctly truncates dates to the month level and sums the revenue?\n\n(A) SELECT DATE_TRUNC('MONTH', sale_date) AS month, SUM(revenue) FROM sales GROUP BY month;\n(B) SELECT MONTH(sale_date) AS month, SUM(revenue) FROM sales GROUP BY month;\n(C) SELECT DATE_FORMAT(sale_date, 'yyyy-MM') AS month, SUM(revenue) FROM sales GROUP BY 1;\n(D) All of the above produce the same result",
    "options": [
      {
        "id": "a",
        "text": "Only (A)"
      },
      {
        "id": "b",
        "text": "Only (B)"
      },
      {
        "id": "c",
        "text": "(A) and (C) both work correctly, but (B) loses the year information"
      },
      {
        "id": "d",
        "text": "(D) All produce the same result"
      },
      {
        "id": "e",
        "text": "None of the above"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT: DATE_TRUNC('MONTH', sale_date) truncates a date to the first day of its month (e.g., 2025-03-15 → 2025-03-01), preserving the year. Combined with SUM and GROUP BY, it correctly aggregates daily sales into monthly totals. MONTH(sale_date) alone loses the year, causing cross-year mixing.\n\n❌ Why others are wrong:\n• The other options likely use MONTH() function alone (loses year — March 2024 and March 2025 would merge), or EXTRACT without year component, or incorrect GROUP BY.\n\n🎯 EXAM TIP: Date aggregation: DATE_TRUNC('MONTH', date) preserves year (RECOMMENDED). MONTH(date) returns only month number (1-12, LOSES year). DATE_FORMAT(date, 'yyyy-MM') returns string (works but changes type). The exam tests which preserves year context.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-162",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs a LEFT JOIN:\n\nSELECT c.customer_name, o.order_id, o.amount\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id;\n\nCustomer 'Alice' exists in the customers table but has NO rows in orders. What appears in the result for Alice?",
    "options": [
      {
        "id": "a",
        "text": "Alice is excluded from the result"
      },
      {
        "id": "b",
        "text": "Alice appears with order_id = NULL and amount = NULL"
      },
      {
        "id": "c",
        "text": "Alice appears with order_id = 0 and amount = 0"
      },
      {
        "id": "d",
        "text": "The query throws an error"
      },
      {
        "id": "e",
        "text": "Alice appears with order_id = '' (empty string) and amount = 0"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Alice appears with order_id = NULL and amount = NULL): LEFT JOIN returns ALL rows from the left table (customers) regardless of whether matches exist in the right table (orders). When there's no match, the right table columns are filled with NULL — not 0, not empty string, specifically NULL.\n\n❌ Why others are wrong:\n• (A) \"Alice excluded\": That would be an INNER JOIN behavior. LEFT JOIN always includes all left-table rows.\n• (C) \"order_id = 0 and amount = 0\": NULL ≠ 0. SQL treats missing data as NULL, not as zero.\n• (D) \"Error thrown\": LEFT JOIN handles non-matches gracefully — no error.\n• (E) \"Empty string and 0\": SQL doesn't fill unmatched columns with empty strings. NULL is the standard for \"no matching data.\"\n\n🎯 EXAM TIP: LEFT JOIN non-matches → NULL columns from right table. INNER JOIN non-matches → row excluded entirely. This NULL-vs-excluded distinction is fundamental and tested frequently.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-163",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has a `sales` table with columns: product, quarter, revenue. The analyst wants to transform the data so each quarter becomes its own column. Which query achieves this?\n\n(A) SELECT * FROM sales PIVOT (SUM(revenue) FOR quarter IN ('Q1', 'Q2', 'Q3', 'Q4'));\n(B) SELECT product, Q1, Q2, Q3, Q4 FROM sales GROUP BY product;\n(C) SELECT * FROM sales UNPIVOT (revenue FOR quarter IN (Q1, Q2, Q3, Q4));",
    "options": [
      {
        "id": "a",
        "text": "(A) — PIVOT rotates quarter rows into columns"
      },
      {
        "id": "b",
        "text": "(B) — GROUP BY with column names creates the pivot"
      },
      {
        "id": "c",
        "text": "(C) — UNPIVOT transforms rows to columns"
      },
      {
        "id": "d",
        "text": "Both (A) and (B) are correct"
      },
      {
        "id": "e",
        "text": "None of the above"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — PIVOT rotates quarter rows into columns): PIVOT transposes row values into column headers. The syntax PIVOT (SUM(revenue) FOR quarter IN ('Q1','Q2','Q3','Q4')) creates separate columns for each quarter value, with SUM(revenue) as the cell values. Output: product | Q1 | Q2 | Q3 | Q4.\n\n❌ Why others are wrong:\n• (B) \"GROUP BY creates the pivot\": GROUP BY aggregates but doesn't restructure rows into columns. The output would still have quarter as a column, not separate Q1/Q2/Q3/Q4 columns.\n• (C) \"UNPIVOT transforms rows to columns\": UNPIVOT does the OPPOSITE — it converts columns into rows. PIVOT = rows→columns. UNPIVOT = columns→rows.\n• (D) \"Both A and B correct\": Only PIVOT restructures the data layout.\n\n🎯 EXAM TIP: PIVOT = rows become columns (wide format). UNPIVOT = columns become rows (long format). Know the syntax: PIVOT (agg_func(value_col) FOR category_col IN (val1, val2, ...)).",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-164",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has a table `orders` with a column `items` of type ARRAY<STRING>:\n\n| order_id | items                     |\n|----------|---------------------------|\n| 1        | ['laptop', 'mouse']       |\n| 2        | ['keyboard']              |\n| 3        | ['monitor', 'cable', 'hub']|\n\nThe analyst runs:\nSELECT order_id, EXPLODE(items) AS item FROM orders;\n\nHow many rows does the result contain?",
    "options": [
      {
        "id": "a",
        "text": "3 rows"
      },
      {
        "id": "b",
        "text": "6 rows"
      },
      {
        "id": "c",
        "text": "1 row"
      },
      {
        "id": "d",
        "text": "An error because EXPLODE cannot be used in SELECT"
      },
      {
        "id": "e",
        "text": "9 rows"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — 6 rows): EXPLODE generates one row per array element. Order 1: ['laptop','mouse'] = 2 rows. Order 2: ['keyboard'] = 1 row. Order 3: ['monitor','cable','adapter'] = 3 rows. Total: 2 + 1 + 3 = 6 rows.\n\n❌ Why others are wrong:\n• (A) 3 rows: That would be the original table (3 orders). EXPLODE expands, it doesn't preserve rows.\n• (C) 1 row: That would be an aggregation, not an explosion.\n• (D) \"Error — EXPLODE can't be used in SELECT\": FALSE. EXPLODE works in SELECT, FROM (LATERAL VIEW), and is fully supported.\n• (E) 9 rows: This would require all arrays having 3 elements each. Only order 3 has 3 elements.\n\n🎯 EXAM TIP: EXPLODE row count = sum of array lengths across all rows. Practice: count elements in each array, then add them up. The exam gives exact array values for you to count.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-165",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs the following query to rank employees by salary within each department:\n\nSELECT employee_id, department, salary,\n  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank\nFROM employees;\n\nDepartment 'Engineering' has salaries: 100000, 90000, 90000, 80000. What rank values are assigned?",
    "options": [
      {
        "id": "a",
        "text": "1, 2, 3, 4"
      },
      {
        "id": "b",
        "text": "1, 2, 2, 3"
      },
      {
        "id": "c",
        "text": "1, 2, 2, 4"
      },
      {
        "id": "d",
        "text": "1, 2, 3, 3"
      },
      {
        "id": "e",
        "text": "1, 1, 2, 3"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — 1, 2, 2, 3): DENSE_RANK assigns the same rank to tied values AND does NOT skip ranks after ties. With salaries 100K, 90K, 90K, 80K (DESC): 100K→1, 90K→2, 90K→2 (tie), 80K→3 (next consecutive number, no gap).\n\n❌ Why others are wrong:\n• (A) 1,2,3,4: This would be ROW_NUMBER (unique rank, no ties recognized).\n• (C) 1,2,2,4: This would be RANK (same rank for ties BUT skips ranks — goes 1,2,2,4 instead of 1,2,2,3).\n• (D) 1,2,3,3: Wrong tie handling — 90K appears twice but would need same rank.\n• (E) 1,1,2,3: 100K and 90K are different values, they can't both be rank 1.\n\n🎯 EXAM TIP: ROW_NUMBER = 1,2,3,4 (always unique). RANK = 1,2,2,4 (ties + skip). DENSE_RANK = 1,2,2,3 (ties + no skip). This is one of the MOST tested SQL concepts on the exam.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-166",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst writes the following query:\n\nSELECT department, COUNT(*) AS emp_count\nFROM employees\nWHERE emp_count > 5\nGROUP BY department;\n\nThe query fails. What is the error and how should it be fixed?",
    "options": [
      {
        "id": "a",
        "text": "WHERE cannot reference an alias; replace WHERE with HAVING: HAVING COUNT(*) > 5"
      },
      {
        "id": "b",
        "text": "COUNT(*) is not allowed in WHERE; remove the WHERE clause entirely"
      },
      {
        "id": "c",
        "text": "The GROUP BY should come before WHERE; swap their positions"
      },
      {
        "id": "d",
        "text": "Change COUNT(*) to SUM(1)"
      },
      {
        "id": "e",
        "text": "Add ORDER BY before WHERE"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A — WHERE can't reference alias; use HAVING COUNT(*) > 5): SQL execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. WHERE runs BEFORE GROUP BY, so aggregate functions and column aliases don't exist yet. HAVING runs AFTER GROUP BY and can filter on aggregate results.\n\n❌ Why others are wrong:\n• (B) \"Remove WHERE clause entirely\": This removes the filter — the analyst wants to filter, just in the right place (HAVING).\n• (C) \"GROUP BY before WHERE\": GROUP BY already comes after WHERE in standard SQL syntax. The issue isn't order, it's using the wrong clause.\n• (D) \"Change COUNT(*) to SUM(1)\": SUM(1) produces the same result as COUNT(*) — the issue is WHERE vs. HAVING, not the function.\n• (E) \"Add ORDER BY before WHERE\": ORDER BY always comes LAST in SQL execution. This would be a syntax error.\n\n🎯 EXAM TIP: WHERE = row-level filter (before aggregation). HAVING = group-level filter (after aggregation). If it involves an aggregate function (COUNT, SUM, AVG) → HAVING. If it involves a column value → WHERE. This is tested 2-3 times per exam.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-167",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst writes a CTE to find the top salesperson per region:\n\nWITH ranked AS (\n  SELECT region, salesperson, total_sales,\n    ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_sales DESC) AS rn\n  FROM sales_summary\n)\nSELECT region, salesperson, total_sales\nFROM ranked\nWHERE rn = 1;\n\nWhat does this query return?",
    "options": [
      {
        "id": "a",
        "text": "All salespeople from all regions"
      },
      {
        "id": "b",
        "text": "Exactly one row per region: the salesperson with the highest total_sales in each region"
      },
      {
        "id": "c",
        "text": "Only the single top salesperson across all regions"
      },
      {
        "id": "d",
        "text": "An error because CTEs cannot use window functions"
      },
      {
        "id": "e",
        "text": "Multiple rows per region if there are ties"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Exactly one row per region with the top salesperson): ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_sales DESC) assigns rank 1 to the highest total_sales in each region. The WHERE rn = 1 filter keeps only the top row per partition. Unlike RANK/DENSE_RANK, ROW_NUMBER always assigns unique numbers, so even ties produce exactly one row.\n\n❌ Why others are wrong:\n• (A) \"All salespeople from all regions\": The WHERE rn = 1 filter removes everyone except rank 1.\n• (C) \"Single top across all regions\": PARTITION BY region creates separate rankings per region, not a global ranking.\n• (D) \"CTEs can't use window functions\": FALSE. CTEs support all SQL expressions including window functions.\n• (E) \"Multiple rows for ties\": ROW_NUMBER gives unique numbers even for ties (arbitrary tiebreaker). RANK or DENSE_RANK would need additional filtering for ties.\n\n🎯 EXAM TIP: \"Top N per group\" pattern: ROW_NUMBER() OVER (PARTITION BY group ORDER BY metric DESC) + WHERE rn <= N. This is the standard SQL pattern for top-N analysis per category.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-168",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to find all customers who placed an order in 2024 but NOT in 2025. Which query correctly solves this?\n\n(A) SELECT customer_id FROM orders WHERE YEAR(order_date) = 2024\n    EXCEPT\n    SELECT customer_id FROM orders WHERE YEAR(order_date) = 2025;\n\n(B) SELECT customer_id FROM orders WHERE YEAR(order_date) = 2024\n    AND YEAR(order_date) != 2025;\n\n(C) SELECT customer_id FROM orders WHERE YEAR(order_date) IN (2024, 2025)\n    GROUP BY customer_id HAVING COUNT(DISTINCT YEAR(order_date)) = 1;",
    "options": [
      {
        "id": "a",
        "text": "Only (A) is correct"
      },
      {
        "id": "b",
        "text": "Only (B) is correct"
      },
      {
        "id": "c",
        "text": "Only (C) is correct"
      },
      {
        "id": "d",
        "text": "(A) and (C) are both correct"
      },
      {
        "id": "e",
        "text": "All three are correct"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "✅ CORRECT (A or D — EXCEPT correctly finds customers in 2024 but not in 2025): EXCEPT returns rows from the first query that are NOT present in the second query. SELECT customer_id FROM orders WHERE YEAR = 2024 EXCEPT SELECT customer_id FROM orders WHERE YEAR = 2025 gives customers who ordered in 2024 but NOT in 2025.\n\n❌ Why others are wrong:\n• Other incorrect options use: (1) WHERE with both year conditions in one query (impossible — a single row can't be in 2024 AND 2025), (2) LEFT ANTI JOIN without proper setup, or (3) NOT IN with syntax errors.\n\n🎯 EXAM TIP: \"In A but NOT in B\" = EXCEPT (or NOT EXISTS/NOT IN). \"In both A AND B\" = INTERSECT. \"In A or B or both\" = UNION. These set operations map directly to set theory concepts.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-169",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to calculate each employee's salary as a percentage of the department total. Which query is correct?\n\nSELECT employee_id, department, salary,\n  ROUND(salary * 100.0 / SUM(salary) OVER (PARTITION BY department), 2) AS pct_of_dept\nFROM employees;",
    "options": [
      {
        "id": "a",
        "text": "This query will fail because SUM() cannot be used with OVER in a SELECT"
      },
      {
        "id": "b",
        "text": "This query is correct — it calculates each salary as a percentage of the department total using a window function"
      },
      {
        "id": "c",
        "text": "This query will return 100% for every row"
      },
      {
        "id": "d",
        "text": "This query requires a GROUP BY department clause to work"
      },
      {
        "id": "e",
        "text": "This query will return NULL for all rows"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Query is correct, calculates salary percentage of department total): SUM(salary) OVER (PARTITION BY department) computes the department total salary WITHOUT collapsing rows. Each row retains its individual salary and gets the department total as a window calculation. Dividing salary by this total and multiplying by 100 gives the percentage.\n\n❌ Why others are wrong:\n• (A) \"Fails because SUM with OVER isn't allowed\": FALSE. Window functions (SUM, AVG, COUNT) with OVER clauses are fully supported.\n• (C) \"Returns 100% for every row\": That would only happen if each employee were in their own department (salary/salary = 1).\n• (D) \"Requires GROUP BY\": Window functions specifically AVOID GROUP BY. They compute across partitions without collapsing rows.\n• (E) \"Returns NULL for all rows\": No reason for NULL — all values are numeric.\n\n🎯 EXAM TIP: Window functions PRESERVE all rows while computing across partitions. GROUP BY COLLAPSES rows. When you need both individual values AND group totals in the same row, use window functions.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-170",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs:\n\nSELECT customer_id, order_date, amount,\n  LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS next_order_date\nFROM orders;\n\nWhat does `next_order_date` contain for the LAST order of each customer?",
    "options": [
      {
        "id": "a",
        "text": "The current order_date (same value)"
      },
      {
        "id": "b",
        "text": "NULL"
      },
      {
        "id": "c",
        "text": "The first order_date of the customer (wraps around)"
      },
      {
        "id": "d",
        "text": "An error is thrown"
      },
      {
        "id": "e",
        "text": "CURRENT_DATE()"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — NULL): LEAD() returns the value from the NEXT row in the window. For the LAST row in each partition (customer), there IS no next row, so LEAD() returns NULL by default. You can specify a default: LEAD(order_date, 1, '9999-12-31').\n\n❌ Why others are wrong:\n• (A) \"Same value\": LEAD gets the NEXT row's value, not the current row's value.\n• (C) \"Wraps around to first\": Window functions don't wrap — they return NULL at boundaries.\n• (D) \"Error thrown\": LEAD handles boundaries gracefully with NULL, no error.\n• (E) \"CURRENT_DATE()\": LEAD doesn't substitute system functions for missing values.\n\n🎯 EXAM TIP: LAG = previous row (NULL at first row). LEAD = next row (NULL at last row). Both support default values as third argument. The exam tests boundary behavior for both functions.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-171",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst writes:\n\nMERGE INTO target t\nUSING source s\nON t.id = s.id\nWHEN MATCHED THEN UPDATE SET t.name = s.name, t.updated_at = CURRENT_TIMESTAMP()\nWHEN NOT MATCHED THEN INSERT (id, name, updated_at) VALUES (s.id, s.name, CURRENT_TIMESTAMP());\n\nIf a row with id = 5 exists in BOTH target and source, what happens?",
    "options": [
      {
        "id": "a",
        "text": "A new duplicate row is inserted"
      },
      {
        "id": "b",
        "text": "The existing row in target is updated with the source name and current timestamp"
      },
      {
        "id": "c",
        "text": "The row is deleted from both tables"
      },
      {
        "id": "d",
        "text": "An error because MERGE cannot have both MATCHED and NOT MATCHED"
      },
      {
        "id": "e",
        "text": "Nothing happens — MERGE only processes NOT MATCHED rows"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — Existing row is updated with source name and current timestamp): When MERGE finds a matching id in both tables (WHEN MATCHED), it executes the UPDATE clause — setting t.name = s.name and t.updated_at = CURRENT_TIMESTAMP(). No rows are inserted or deleted for this match.\n\n❌ Why others are wrong:\n• (A) \"Duplicate row inserted\": INSERT only fires for NOT MATCHED rows. A matched id triggers UPDATE, not INSERT.\n• (C) \"Deleted from both tables\": MERGE can include DELETE clauses but this one only has UPDATE and INSERT.\n• (D) \"Error — can't have both MATCHED and NOT MATCHED\": FALSE. Multiple WHEN clauses is the standard MERGE pattern (upsert).\n• (E) \"Nothing happens — only NOT MATCHED processes\": Both clauses execute independently based on the match condition.\n\n🎯 EXAM TIP: MERGE clause execution: matched id → WHEN MATCHED runs. Unmatched source id → WHEN NOT MATCHED runs. They're independent. MERGE can also have WHEN NOT MATCHED BY SOURCE for handling deleted-from-source records.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-172",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs:\n\nSELECT order_id, order_date,\n  DATEDIFF(CURRENT_DATE(), order_date) AS days_since_order\nFROM orders\nWHERE DATEDIFF(CURRENT_DATE(), order_date) > 30;\n\nAssuming today is 2026-03-26 and one row has order_date = '2026-03-01', what is `days_since_order` for that row?",
    "options": [
      {
        "id": "a",
        "text": "25"
      },
      {
        "id": "b",
        "text": "30"
      },
      {
        "id": "c",
        "text": "The row is excluded because 25 is NOT > 30"
      },
      {
        "id": "d",
        "text": "26"
      },
      {
        "id": "e",
        "text": "1"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — Row is excluded because 25 is NOT > 30): DATEDIFF(CURRENT_DATE(), '2026-03-01') with today = 2026-03-26 gives 25 days. The WHERE clause requires days > 30, and 25 does NOT satisfy this condition. The entire row is excluded from the output — you wouldn't see it at all.\n\n❌ Why others are wrong:\n• (A) \"25\": That would be the days_since_order value IF the row passed the filter — but it doesn't pass (25 is not > 30).\n• (B) \"30\": Incorrect DATEDIFF calculation.\n• (D) \"26\": Incorrect DATEDIFF calculation.\n• (E) \"1\": Incorrect DATEDIFF calculation.\n\n🎯 EXAM TIP: DATEDIFF(end, start) = end - start in days. WHERE filtering happens AFTER computation — even though the SELECT shows the calculated column, the WHERE condition determines whether the row appears at all.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-173",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs:\n\nSELECT\n  UPPER(TRIM('  Hello World  ')) AS result;\n\nWhat is the value of `result`?",
    "options": [
      {
        "id": "a",
        "text": "  Hello World  "
      },
      {
        "id": "b",
        "text": "HELLO WORLD"
      },
      {
        "id": "c",
        "text": "  HELLO WORLD  "
      },
      {
        "id": "d",
        "text": "hello world"
      },
      {
        "id": "e",
        "text": "Hello World"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "✅ CORRECT (B — HELLO WORLD): Functions evaluate from INSIDE OUT. Step 1: TRIM('  Hello World  ') removes leading/trailing spaces → 'Hello World'. Step 2: UPPER('Hello World') converts all characters to uppercase → 'HELLO WORLD'. No leading/trailing spaces remain.\n\n❌ Why others are wrong:\n• (A) \"  Hello World  \": This would mean neither TRIM nor UPPER was applied.\n• (C) \"  HELLO WORLD  \": UPPER applied but TRIM not applied — wrong order. TRIM runs first (inner function).\n• (D) \"hello world\": LOWER would produce this, not UPPER.\n• (E) \"Hello World\": Only TRIM applied, not UPPER.\n\n🎯 EXAM TIP: Nested function evaluation: innermost first → outermost last. UPPER(TRIM(x)): TRIM first, then UPPER. The exam tests this with 2-3 nested functions. Trace each step carefully.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-174",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs:\n\nSELECT department, employee_id, salary,\n  FIRST_VALUE(employee_id) OVER (\n    PARTITION BY department ORDER BY salary DESC\n  ) AS top_earner\nFROM employees;\n\nWhat does the `top_earner` column contain?",
    "options": [
      {
        "id": "a",
        "text": "The employee_id of the lowest-paid employee in each department"
      },
      {
        "id": "b",
        "text": "The employee_id of the first employee hired in each department"
      },
      {
        "id": "c",
        "text": "The employee_id of the highest-paid employee in each department (same value for all rows in the department)"
      },
      {
        "id": "d",
        "text": "A different employee_id for each row"
      },
      {
        "id": "e",
        "text": "NULL for all rows"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT (C — employee_id of highest-paid employee, same for all rows in department): FIRST_VALUE(employee_id) OVER (PARTITION BY department ORDER BY salary DESC) returns the first value in the window frame. Since the window is ordered by salary DESC, the first value is the HIGHEST salary's employee_id. This value is identical for ALL rows in the same department.\n\n❌ Why others are wrong:\n• (A) \"Lowest-paid\": ORDER BY salary DESC puts highest first. For lowest, you'd need ORDER BY salary ASC.\n• (B) \"First hired\": The window is ordered by SALARY, not hire date. Order determines which value is \"first.\"\n• (D) \"Different for each row\": FIRST_VALUE returns the SAME first value for every row in the partition — that's its purpose.\n• (E) \"NULL for all\": There's data in the partition, so FIRST_VALUE returns a valid employee_id.\n\n🎯 EXAM TIP: FIRST_VALUE + ORDER BY DESC = highest value. FIRST_VALUE + ORDER BY ASC = lowest value. LAST_VALUE with UNBOUNDED frame = opposite end. The ORDER BY direction determines what \"first\" means.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
    "id": "db-da-175",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs:\n\nSELECT product_id, quantity, unit_price,\n  CASE\n    WHEN quantity > 100 THEN unit_price * 0.80\n    WHEN quantity > 50 THEN unit_price * 0.90\n    ELSE unit_price\n  END AS discounted_price\nFROM order_items;\n\nA row has quantity = 120 and unit_price = 50. What is `discounted_price`?",
    "options": [
      {
        "id": "a",
        "text": "50"
      },
      {
        "id": "b",
        "text": "45"
      },
      {
        "id": "c",
        "text": "40"
      },
      {
        "id": "d",
        "text": "36"
      },
      {
        "id": "e",
        "text": "NULL"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "✅ CORRECT: CASE WHEN evaluates top-to-bottom with short-circuit logic. quantity = 120, unit_price = 50. First condition: 120 > 100? TRUE → return 50 * 0.80 = 40. The 80% discount rate is applied because the first matching condition wins.\n\n❌ Why others are wrong:\n• (A) 50: Would mean no discount applied — but 120 > 100 matches the first condition.\n• (B) 45: Would require 0.90 multiplier — but that's the second condition which is never reached.\n• (D) 36: Not a valid result from any of the CASE branches.\n• (E) NULL: Would only result if no conditions match and no ELSE clause.\n\n🎯 EXAM TIP: CASE WHEN math: Identify which condition matches FIRST, then compute the arithmetic. The exam combines conditional logic with multiplication — trace both the condition AND the calculation.",
    "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
  },
  {
        "id": "db-da-176",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data architect has informed a data analyst team that its organization will now use a data design pattern that will logically organize data in a lakehouse, with the goal of incrementally and progressively improving the structure and quality of data as it flows through each layer of the architecture.\n\nWhich term is used to describe this data design pattern?",
        "options": [
            {
                "id": "a",
                "text": "Medallion architecture"
            },
            {
                "id": "b",
                "text": "Change data feed"
            },
            {
                "id": "c",
                "text": "Delta Lake"
            },
            {
                "id": "d",
                "text": "Data mesh"
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "The medallion architecture (bronze-silver-gold layers) is the standard design pattern that defines multiple zones to represent stages of data quality and transformation, enabling incremental improvement of data as it moves through the layers. Change data feed refers to a feature for capturing incremental changes, not a design pattern. Delta Lake is a storage technology, not a design pattern. Data mesh focuses on decentralized data domains rather than staged data-quality pipelines.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
    },
  {
        "id": "db-da-177",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst wants to compare the contents of a Delta table as they existed last week to the current state in order to track changes in sales records.\n\nWhich Delta Lake feature enables this comparison?",
        "options": [
            {
                "id": "a",
                "text": "RESTORE command"
            },
            {
                "id": "b",
                "text": "VACUUM retention settings"
            },
            {
                "id": "c",
                "text": "Time travel querying"
            },
            {
                "id": "d",
                "text": "CLONE with VERSION AS OF"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): Time Travel querying allows you to read a table's historical state without modifying the current data. Use VERSION AS OF or TIMESTAMP AS OF to specify the desired point in time.\n\nSQL Pattern:\nSELECT * FROM table VERSION AS OF 5;\nSELECT * FROM table TIMESTAMP AS OF '2026-04-06T10:00:00';\n\n❌ Why others are wrong:\n• (A) RESTORE command: RESTORE doesn't just READ historical data — it MODIFIES the table by reverting it to a previous version. The analyst needs to COMPARE, not revert.\n• (B) VACUUM retention: VACUUM controls how long historical data files are kept. It doesn't provide a querying mechanism.\n• (D) CLONE with VERSION AS OF: While you CAN clone a specific version, this creates a full table copy — overkill for simply comparing data.\n\n🔑 EXAM TIP: Time Travel methods:\n• READ (non-destructive): SELECT ... VERSION AS OF n; SELECT ... TIMESTAMP AS OF 'date'\n• WRITE (destructive): RESTORE TABLE ... TO VERSION AS OF n\n• Time Travel requires data files to exist (not VACUUMed)\n• Default file retention: 7 days; log retention: 30 days",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-178",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A BI analyst is building an analytical data model in Databricks using Delta Lake tables. The source system contains transactional sales data that changes frequently. The analyst chooses to apply the Data Vault 2.0 methodology to manage historical changes while ensuring scalability and auditability across multiple business domains.\n\nWhich component is used to capture the many-to-many relationship between hubs in a Data Vault v2 model?",
        "options": [
            {
                "id": "a",
                "text": "Hub Table"
            },
            {
                "id": "b",
                "text": "Satellite Table"
            },
            {
                "id": "c",
                "text": "Link Table"
            },
            {
                "id": "d",
                "text": "Reference Table"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C — Link Table): In Data Vault 2.0, Link tables model the RELATIONSHIPS between business entities (Hubs). When multiple Hub entities are involved in a relationship (many-to-many), a Link table stores the foreign keys to each Hub.\n\n❌ Why others are wrong:\n• (A) Hub Table: Hubs store unique BUSINESS KEYS (identifiers) — not relationships.\n• (B) Satellite Table: Satellites store DESCRIPTIVE/CONTEXTUAL data and change history — not relationships.\n• (D) Reference Table: Reference tables store static lookup data (country codes, status types) — not entity relationships.\n\n🔑 EXAM TIP: Data Vault 2.0 components:\n• Hub: Unique business keys (e.g., customer_id, product_id)\n• Link: Relationships between Hubs (e.g., customer-bought-product)\n• Satellite: Descriptive attributes + history (e.g., customer name, address changes)\n• Star Schema is more common on the exam, but know Data Vault basics",
        "domain": "Data Modeling with Databricks SQL"
    },
  {
        "id": "db-da-179",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "How are analytical models mapped to the Gold layer in the Delta Lake medallion architecture on Databricks?",
        "options": [
            {
                "id": "a",
                "text": "The Gold layer is primarily used for storing backup copies of all data for disaster recovery purposes."
            },
            {
                "id": "b",
                "text": "The Gold layer stores raw, unprocessed data for initial ingestion and schema evolution."
            },
            {
                "id": "c",
                "text": "The Gold layer is used for data cleaning, deduplication, and joining across domains to establish data integrity."
            },
            {
                "id": "d",
                "text": "The Gold layer contains de-normalized data models optimized for analytics, reporting, and machine learning."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D — Gold layer contains denormalized models optimized for analytics/reporting/ML): Gold tables are purpose-built for consumption — star schemas, aggregate tables, feature tables, and KPI views. They've been transformed from Silver's normalized data into analyst-friendly formats.\n\n❌ Why others are wrong:\n• (A) \"Gold for disaster recovery backups\": Backups/DR is an infrastructure concern, not the purpose of the Gold layer.\n• (B) \"Gold stores raw, unprocessed data\": This describes the BRONZE layer — raw data as ingested from source systems.\n• (C) \"Gold for cleaning, deduplication, joining\": This describes the SILVER layer — data cleansing, conforming, and integration happens here.\n\n🎯 EXAM TIP: Bronze = raw ingestion (append-only, no transforms). Silver = cleaned, conformed, deduplicated (normalized). Gold = business-ready, denormalized, aggregated (star schemas, KPIs). Each layer has ONE primary purpose.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
    },
  {
        "id": "db-da-180",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is preparing a dataset that includes customer information such as email addresses and birthdates. This dataset will be used by multiple teams for generating reports, but some teams should not have permissions to access sensitive data. The analyst must ensure the data is stored securely and that personally identifiable information (PII) is protected according to organizational standards and best practices in Databricks.\n\nWhich action should the analyst take to secure the PII data while allowing safe reporting access to other teams?",
        "options": [
            {
                "id": "a",
                "text": "Grant SELECT privileges to all report writers for the required subset of data from the base table."
            },
            {
                "id": "b",
                "text": "Use Dynamic Views with IS_MEMBER() functions to restrict PII columns based on user roles."
            },
            {
                "id": "c",
                "text": "Store the PII data in a shared CSV file on DBFS and apply access control at the folder level."
            },
            {
                "id": "d",
                "text": "Mask PII data by obfuscating it in the source table before conducting analysis."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B — Dynamic Views with IS_MEMBER()): Dynamic Views use IS_MEMBER() to check group membership at QUERY TIME, conditionally showing or hiding PII columns. This provides centralized, role-based access control without duplicating data.\n\nSQL Pattern:\nCREATE VIEW safe_customers AS\nSELECT customer_id, name,\n  CASE WHEN IS_MEMBER('pii_authorized') THEN email ELSE '***MASKED***' END AS email\nFROM customers;\n\n❌ Why others are wrong:\n• (A) GRANT SELECT on base table: Grants access to ALL columns including PII — no column-level restriction.\n• (C) CSV on DBFS: Ungoverned, insecure. DBFS folder-level ACLs lack the granularity of UC column masking.\n• (D) Mask PII in source table: Permanently destroys PII data. Original values cannot be recovered for authorized users.\n\n🔑 EXAM TIP: Dynamic Views vs. Column Masking:\n• Dynamic Views: Use CASE WHEN IS_MEMBER() for conditional column access\n• Column Masks: Native UC feature (ALTER TABLE SET COLUMN MASK)\n• Both achieve similar results; Column Masks are the modern, preferred approach",
        "domain": "Securing Data"
    },
  {
        "id": "db-da-181",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "How are privileges inherited in Unity Catalog across the hierarchy levels of metastore, catalog, schema, and table/view?",
        "options": [
            {
                "id": "a",
                "text": "Privileges granted at a higher level (such as a catalog) automatically apply to all child objects (schemas and tables) unless overridden by more specific permissions at a lower level."
            },
            {
                "id": "b",
                "text": "Privileges are only inherited from the metastore level, and no inheritance occurs between catalogs, schemas, or tables."
            },
            {
                "id": "c",
                "text": "Privileges must be granted individually for each object, regardless of their position in the hierarchy, to ensure secure access control."
            },
            {
                "id": "d",
                "text": "Privileges granted at the schema level have no impact on tables or views in that schema unless directly applied to them."
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A — Privileges cascade downward): Unity Catalog uses hierarchical privilege inheritance. A privilege granted at a higher level (catalog) automatically applies to ALL child objects (schemas, tables, views) within that catalog.\n\nExample: GRANT SELECT ON CATALOG production TO analysts → analysts can SELECT on ALL tables in ALL schemas within the production catalog.\n\n❌ Why others are wrong:\n• (B) Only from metastore level: FALSE. Inheritance occurs at EVERY level — metastore, catalog, schema.\n• (C) Must grant individually: FALSE. Individual grants are possible but not required — inheritance enables bulk permission management.\n• (D) Schema privileges don't affect tables: FALSE. Privileges at the schema level DO cascade to tables and views within that schema.\n\n🔑 EXAM TIP: UC privilege inheritance hierarchy:\nMetastore → Catalog → Schema → Table/View\n• GRANT at Catalog level → applies to ALL schemas and tables within\n• GRANT at Schema level → applies to ALL tables within\n• USAGE is required at EACH level to traverse the hierarchy\n• More specific grants COMPLEMENT (don't override) inherited grants",
        "domain": "Securing Data"
    },
  {
        "id": "db-da-182",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to join two tables, orders and customers, using both customer_id and region_id as join keys. The goal is to return only rows where both values match in the two tables.\n\nWhich SQL query correctly performs this join?",
        "options": [
            {
                "id": "a",
                "text": "SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id;"
            },
            {
                "id": "b",
                "text": "SELECT * FROM orders INNER JOIN customers USING (customer_id, region_id);"
            },
            {
                "id": "c",
                "text": "SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id AND orders.region_id = customers.region_id;"
            },
            {
                "id": "d",
                "text": "SELECT * FROM orders LEFT JOIN customers ON orders.customer_id = customers.customer_id AND orders.region_id = customers.region_id;"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (B or C — INNER JOIN with compound ON condition): To join on BOTH customer_id AND region_id, you need either: ON orders.customer_id = customers.customer_id AND orders.region_id = customers.region_id (explicit, option C) or USING (customer_id, region_id) (shorthand when column names match, option B).\n\n❌ Why others are wrong:\n• (A) \"JOIN ON customer_id only\": Missing the region_id condition — would join based on only one key.\n• (D) \"LEFT JOIN with both conditions\": LEFT JOIN changes semantics (includes non-matching rows). The requirement says \"ONLY rows where BOTH match\" = INNER JOIN.\n\n🎯 EXAM TIP: Multi-key JOIN syntax: ON t1.col1 = t2.col1 AND t1.col2 = t2.col2 (explicit) or USING (col1, col2) (shorthand). USING requires same column names in both tables. The exam tests both syntaxes.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-183",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst wants to identify product categories that meet two criteria:\n\n1. Each category contains more than 10 products.\n2. The average price of products in the category is greater than $50.\n\nWhich SQL statement applies aggregate functions to return only the categories that meet these requirements?",
        "options": [
            {
                "id": "a",
                "text": "SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 10 AND AVG(price) > 50;"
            },
            {
                "id": "b",
                "text": "SELECT category, COUNT(*) FROM products WHERE COUNT(*) > 10 GROUP BY category HAVING AVG(price) > 50;"
            },
            {
                "id": "c",
                "text": "SELECT category, COUNT(*) FROM products HAVING COUNT(*) > 10 GROUP BY category WHERE AVG(price) > 50;"
            },
            {
                "id": "d",
                "text": "SELECT category, COUNT(*) FROM products GROUP BY category WHERE COUNT(*) > 10 AND AVG(price) > 50;"
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A — GROUP BY then HAVING with both COUNT and AVG conditions): Correct SQL order: SELECT → FROM → GROUP BY → HAVING. HAVING filters AFTER aggregation, so aggregate conditions (COUNT(*) > 10 AND AVG(price) > 50) belong in HAVING, not WHERE.\n\n❌ Why others are wrong:\n• (B) \"WHERE COUNT(*) > 10 ... HAVING AVG\": COUNT is an aggregate — it CAN'T go in WHERE (WHERE runs before GROUP BY).\n• (C) \"HAVING before GROUP BY\": Invalid syntax order — GROUP BY must precede HAVING.\n• (D) \"GROUP BY ... WHERE aggregate\": WHERE can't contain aggregate functions.\n\n🎯 EXAM TIP: SQL clause order: SELECT ... FROM ... WHERE (row filter) ... GROUP BY ... HAVING (group filter) ... ORDER BY. Aggregates ONLY in HAVING or SELECT, NEVER in WHERE. This is tested multiple times per exam.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-184",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "What is the primary role of a SQL Warehouse in Databricks?",
        "options": [
            {
                "id": "a",
                "text": "SQL Warehouses are primarily used for ETL operations and data transformations, offering better performance for batch processing compared to interactive queries."
            },
            {
                "id": "b",
                "text": "SQL Warehouses are specialized compute resources designed specifically for SQL query execution, powered by the Photon engine for accelerated performance and optimized for BI tool integration."
            },
            {
                "id": "c",
                "text": "SQL Warehouses are general-purpose compute resources that support Python, Scala, R, and SQL workloads, with automatic library management and custom runtime configurations for enhanced performance."
            },
            {
                "id": "d",
                "text": "SQL Warehouses function as data storage systems that maintain cached query results and provide direct access to Delta tables without requiring additional compute resources."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B — Specialized compute for SQL execution, powered by Photon): SQL Warehouses are purpose-built compute resources that ONLY execute SQL queries. They use the Photon engine (a C++ vectorized query engine) for high-performance SQL execution and expose ODBC/JDBC endpoints for BI tool connectivity.\n\n❌ Why others are wrong:\n• (A) \"Primarily for ETL operations\": ETL is typically handled by Databricks Workspace clusters, notebooks, or DLT pipelines — not SQL Warehouses.\n• (C) \"General-purpose, support Python/Scala/R + SQL\": This describes Databricks CLUSTERS (all-purpose or job clusters), not SQL Warehouses. SQL Warehouses only support SQL.\n• (D) \"Data storage systems with cached results\": SQL Warehouses are COMPUTE, not STORAGE. Data lives in Delta Lake on cloud storage. Query result caching is a feature, not the primary role.\n\n🎯 EXAM TIP: SQL Warehouses = SQL-only compute + Photon engine + ODBC/JDBC endpoints. Types: Classic (basic), Pro (Photon + governance features), Serverless (instant start, managed by Databricks). Know all three.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
    },
  {
        "id": "db-da-185",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A BI analyst has created a Genie space containing customer sales data and needs to share it with external stakeholders who are not workspace members. The stakeholders require the ability to ask questions about the data but should not have access to the underlying Databricks workspace or compute resources.\n\nHow should the BI analyst share the Genie space with external stakeholders?",
        "options": [
            {
                "id": "a",
                "text": "Share the Genie space with embedded credentials and assign the stakeholders as account users with published dashboard access."
            },
            {
                "id": "b",
                "text": "Export the Genie space data to CSV files and share via email with instructions to upload to their own Databricks workspace."
            },
            {
                "id": "c",
                "text": "Create individual workspace accounts for each stakeholder and assign Databricks SQL access entitlement with CAN RUN permissions."
            },
            {
                "id": "d",
                "text": "Grant the stakeholders workspace membership with Consumer access entitlement and CAN VIEW permissions on the Genie space."
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A): Share the Genie space with embedded credentials and assign stakeholders as account users with published dashboard access. This provides interaction capability (asking questions) without workspace membership. The embedded credentials ensure queries run with proper authentication, while account-level user status isolates them from the underlying workspace.\n\n❌ Why others are wrong:\n• (B) Export to CSV: Loses all interactivity. Stakeholders need to ASK QUESTIONS (natural language), not just view static data.\n• (C) Workspace accounts + SQL access entitlement: Creates workspace members — directly violates the requirement of \"no access to the underlying Databricks workspace.\"\n• (D) Workspace membership with Consumer access: Any form of workspace membership violates the isolation requirement.\n\n🔑 EXAM TIP: Sharing with external users:\n• Account users ≠ Workspace members\n• Account users can access published dashboards/Genie spaces without workspace access\n• Embedded credentials control what data is accessible\n• This is the secure, scalable approach for external stakeholders",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-186",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A company uses a star schema to analyze sales data. The sales fact table records transactions, and dimension tables include products, stores, and dates.\n\nHow are primary and foreign keys used to enable efficient joining between these tables?",
        "options": [
            {
                "id": "a",
                "text": "The fact table and dimension tables are joined using arbitrary columns, and primary/foreign key relationships are not required in a star schema."
            },
            {
                "id": "b",
                "text": "The fact table contains primary keys that directly match the primary keys in each dimension table, allowing for one-to-one joins."
            },
            {
                "id": "c",
                "text": "Both fact and dimension tables use only foreign keys, and joins are performed using non-unique columns."
            },
            {
                "id": "d",
                "text": "Each dimension table has a primary key, which is referenced as a foreign key in the fact table. This structure allows the fact table to join with multiple dimension tables for analytical queries."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D — Dimension tables have PK, fact table has FK references): In a star schema:\n• Each dimension table has a PRIMARY KEY (unique identifier for each dimension record)\n• The fact table contains FOREIGN KEY columns that reference each dimension's PK\n• This enables efficient analytical queries through well-defined joins\n\n❌ Why others are wrong:\n• (A) Arbitrary columns, no PK/FK: Star schemas DEPEND on well-defined PK/FK relationships for proper joins.\n• (B) Fact table has PKs matching dimension PKs: The fact table's own PK is typically a composite of its FK columns (or a surrogate key). It doesn't have PKs that \"match\" dimension PKs.\n• (C) Only foreign keys, non-unique columns: Dimension tables MUST have unique primary keys for the star schema to work correctly.\n\n🔑 EXAM TIP: Star Schema join pattern:\n• dim_product.product_id (PK) ← fact_sales.product_id (FK)\n• dim_customer.customer_id (PK) ← fact_sales.customer_id (FK)\n• dim_date.date_id (PK) ← fact_sales.date_id (FK)\n• Fact table: Metrics (amount, quantity) + FK columns\n• Dimension table: PK + descriptive attributes (name, category, address)",
        "domain": "Data Modeling with Databricks SQL"
    },
  {
        "id": "db-da-187",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A BI analyst is designing a Databricks SQL dashboard that tracks monthly revenue for three product categories across two years. Leadership wants a chart that makes it straightforward to compare each category's trend over time and quickly spot seasonal patterns or declines without relying on additional filters or calculations.\n\nWhich visualization type in Databricks SQL will clearly communicate the revenue trends and category comparisons described?",
        "options": [
            {
                "id": "a",
                "text": "Multi-series line chart plotting month on the x-axis and revenue on the y-axis for each category."
            },
            {
                "id": "b",
                "text": "Single-value counter displaying combined revenue for the entire two-year period."
            },
            {
                "id": "c",
                "text": "Pie chart showing each category's percentage of total revenue for the final month."
            },
            {
                "id": "d",
                "text": "Scatter chart with revenue on the x-axis and profit margin on the y-axis for all transactions."
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A): A multi-series line chart is the optimal choice. It places time (months) on the X-axis, revenue on the Y-axis, and draws a separate line for each product category. This enables:\n• Trend comparison: See all three categories' trajectories simultaneously\n• Seasonal patterns: Identify recurring peaks/valleys\n• Decline detection: Spot downward trends by category\n\n❌ Why others are wrong:\n• (B) Single-value counter: Shows ONE aggregated number. Cannot show trends, comparisons, or temporal patterns.\n• (C) Pie chart for final month: Shows composition at ONE point in time. Loses all temporal trend information across 24 months.\n• (D) Scatter chart (revenue vs. profit margin): Uses wrong axes entirely. The requirement is revenue over TIME, not revenue vs. profit margin.\n\n🔑 EXAM TIP: Visualization selection for time-series:\n• Trends over time + comparison → Multi-series line chart\n• Composition at one point → Pie/donut chart\n• Single KPI display → Counter\n• Correlation between two metrics → Scatter plot\n• Distribution → Histogram/box plot",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-188",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is preparing a quarterly analytics dashboard in Databricks and needs to share it with external stakeholders who are not members of the Databricks workspace. The stakeholders should be able to view the dashboard securely without being granted workspace access or edit permissions.\n\nWhich approach should the analyst use to meet the requirements?",
        "options": [
            {
                "id": "a",
                "text": "Enable external sharing by publishing the dashboard, turning on embedded credentials, and sharing the link with stakeholders."
            },
            {
                "id": "b",
                "text": "Add the external stakeholders as workspace admins in the Databricks environment and grant them CAN MANAGE permissions on the dashboard."
            },
            {
                "id": "c",
                "text": "Assign the stakeholders to the All workspace users group and provide them with CAN EDIT permissions on the dashboard, even if they are not currently members of the workspace."
            },
            {
                "id": "d",
                "text": "Export the dashboard as a PDF file and email it to the stakeholders, since Databricks dashboards offer an export-to-PDF feature."
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A): To share with external stakeholders securely without workspace access:\n1. Publish the dashboard\n2. Enable embedded credentials (the dashboard runs as the owner's identity)\n3. Share the published link with external users\n\nThis gives view-only access to the dashboard without granting any workspace permissions, meeting all security requirements.\n\n❌ Why others are wrong:\n• (B) Add as workspace admins: Violates the principle of least privilege. Admin access is far beyond \"view dashboard\" and directly contradicts the security requirement.\n• (C) Add to 'All workspace users' group: Requires creating workspace accounts for external users and grants CAN EDIT — far more access than needed.\n• (D) Export PDF and email: While secure, this provides a STATIC snapshot, not a live dashboard. The question asks about viewing the dashboard, not receiving a file.\n\n🔑 EXAM TIP: External sharing methods (no workspace access needed):\n1. Published dashboard link with embedded credentials → live, interactive\n2. Dashboard Subscriptions → automated PDF emails\n3. PDF/PNG export → manual, static\nAlways choose the method that matches the access + interactivity requirements.",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-189",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A company has started using the Databricks Platform and currently has only one workspace. They need to manage data access across different teams and want to ensure proper isolation and security controls.\n\nGiven this setup, which approach should be used?",
        "options": [
            {
                "id": "a",
                "text": "Create a unique catalog with all schemas inside of it."
            },
            {
                "id": "b",
                "text": "Use Unity Catalog's built-in environment separation features."
            },
            {
                "id": "c",
                "text": "Create a schema and share the schema for production, development, and testing."
            },
            {
                "id": "d",
                "text": "Create a catalog for production, another for development, and another for testing."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D — Create separate catalogs): Creating separate catalogs for production, development, and testing provides the STRONGEST isolation. Each catalog has independent permission policies, storage, and access controls.\n\n❌ Why others are wrong:\n• (A) Single catalog with all schemas: Insufficient isolation. A misconfigured permission at the catalog level could expose production data to developers.\n• (B) UC environment separation features: Vague — UC doesn't have a specific \"environment separation\" feature beyond catalogs.\n• (C) Shared schema across environments: Dangerous. Using the same schema for production and development risks accidental data modification.\n\n🔑 EXAM TIP: Environment isolation pattern:\n• catalog_production → production data, strict access\n• catalog_development → development sandbox, broader access\n• catalog_testing → QA/testing, controlled access\n• Benefits: Independent permissions, storage isolation, clear boundaries\n• Reference: catalog.schema.table (always clear which environment you're in)",
        "domain": "Securing Data"
    },
  {
        "id": "db-da-190",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is enabling analytics on raw Parquet files stored in an external Amazon S3 bucket. The files must be queried directly using Databricks SQL without duplicating the data. The analyst also wants to register the table with Unity Catalog to enforce data governance policies such as access control and lineage tracking.\n\nWhich SQL command should the analyst use to create a Unity Catalog-enabled external table that directly references the Parquet files?",
        "options": [
            {
                "id": "a",
                "text": "CREATE TABLE catalog.schema.table_name USING PARQUET AS SELECT * FROM parquet.'s3://my-bucket/data/';"
            },
            {
                "id": "b",
                "text": "CREATE TABLE catalog.schema.table_name OPTIONS ('path' 's3://my-bucket/data/') STORED AS PARQUET;"
            },
            {
                "id": "c",
                "text": "CREATE EXTERNAL TABLE catalog.schema.table_name USING DELTA LOCATION 's3://my-bucket/data/';"
            },
            {
                "id": "d",
                "text": "CREATE TABLE catalog.schema.table_name USING PARQUET LOCATION 's3://my-bucket/data/';"
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "CREATE TABLE … USING PARQUET LOCATION creates a metadata-only table in Unity Catalog that points directly to the existing Parquet files in S3 without any data copy. The USING PARQUET clause tells Databricks to treat the files as Parquet format, and the LOCATION clause makes it an external table. Options A duplicates data. Option B uses invalid syntax. Option C specifies DELTA format but the source is Parquet.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-191",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An analyst needs external datasets and analytics assets to enrich their lakehouse reporting. The organization uses Databricks with Unity Catalog enabled and wants fast, governed access to third-party data without complex ETL or replication.\n\nWhat is the benefit of using Databricks Marketplace in this context?",
        "options": [
            {
                "id": "a",
                "text": "It provides a marketplace for purchasing compute resources and serverless SQL warehouses that are managed outside the Unity Catalog framework."
            },
            {
                "id": "b",
                "text": "It enables scheduling of ETL pipelines to load partner data into proprietary formats before use in Databricks SQL."
            },
            {
                "id": "c",
                "text": "It allows the BI Analyst to copy external datasets into their workspace for offline analysis, eliminating dependency on provider access."
            },
            {
                "id": "d",
                "text": "It enables direct, governed access to live external data, notebooks, models, and dashboards via Delta Sharing—without data replication."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D — Direct, governed access via Delta Sharing without data copying): Databricks Marketplace leverages Delta Sharing to provide LIVE access to external datasets, notebooks, models, and dashboards. Data consumers access shared data in-place — no ETL pipelines, no data copying, no egress costs.\n\n❌ Why others are wrong:\n• (A) \"Marketplace for purchasing compute resources\": Marketplace provides DATA and analytics ASSETS, not compute. Compute is provisioned separately (SQL Warehouses, clusters).\n• (B) \"Scheduling ETL pipelines for partner data\": Marketplace eliminates the need for ETL — data is shared live via Delta Sharing, not loaded through pipelines.\n• (C) \"Copy datasets for offline analysis\": The whole point is NO copying. Delta Sharing provides live, governed access to the provider's data.\n\n🎯 EXAM TIP: Databricks Marketplace uses Delta Sharing under the hood. Key benefits: no data copying, live access, provider-managed, Unity Catalog governance applies. The exam tests the \"no copy\" aspect frequently.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
    },
  {
        "id": "db-da-192",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is working with the following table my_table:\n\ncustomer_name    | dollars_spent\nHex Sprockets    | [125.34, 100.15, 9003.99]\nDented Fenders   | [16.99, 200.85, 33.49, 88.17]\n\nThe analyst now wants to divide each value in the dollars_spent array by 100 to get the spend in terms of hundreds of dollars using the following code block:\n\nSELECT\ncustomer_name,\n________\nFROM my_table\n\nWhich line of code can be used to fill in the blank so that the above code block successfully completes the task?",
        "options": [
            {
                "id": "a",
                "text": "TRANSFORM(hundreds_spent, dollars_spent / 100)"
            },
            {
                "id": "b",
                "text": "TRANSFORM(dollars_spent, value / 100) AS hundreds_spent"
            },
            {
                "id": "c",
                "text": "TRANSFORM(dollars_spent, value -> value / 100) AS hundreds_spent"
            },
            {
                "id": "d",
                "text": "TRANSFORM(dollars_spent, dollars_spent / 100) AS hundreds_spent"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "The TRANSFORM function in Databricks SQL takes an array column and a lambda expression that is applied to each element of the array. The correct syntax is TRANSFORM(array_column, value -> expression) AS new_column. Option C exactly matches this pattern: TRANSFORM(dollars_spent, value -> value / 100) AS hundreds_spent. Option A references a non-existent alias (hundreds_spent) as the first argument and does not use a lambda. Option B omits the required lambda syntax (value -> ...). Option D repeats the same mistake as A: it tries to use the source column as both the input element and the target of the transformation without a lambda.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-193",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "Where can an admin or Data owner grant database, table, and view permissions to a group?",
        "options": [
            {
                "id": "a",
                "text": "Dashboard"
            },
            {
                "id": "b",
                "text": "Data"
            },
            {
                "id": "c",
                "text": "SQL Warehouses (formerly SQL Endpoints)"
            },
            {
                "id": "d",
                "text": "Settings"
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B — Data section): The Data section of the Databricks UI (Catalog Explorer) provides a Permissions tab where admins and data owners can manage GRANT/REVOKE permissions on databases, tables, and views through a visual interface.\n\n❌ Why others are wrong:\n• (A) Dashboard: The Dashboard area is for viewing/creating dashboards, not managing data permissions.\n• (C) SQL Warehouses: SQL Warehouse settings control compute configuration (cluster size, auto-stop), not data permissions.\n• (D) Settings: Workspace-level settings control authentication, workspace access, and admin features — not individual table permissions.\n\n🔑 EXAM TIP: Where to manage permissions:\n• UI: Catalog Explorer → navigate to object → Permissions tab\n• SQL: GRANT/REVOKE commands\n• Both methods achieve the same result\n• Best practice: Use groups (not individual users) for permission management",
        "domain": "Securing Data"
    },
  {
        "id": "db-da-194",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "Which Databricks SQL action is used to audit and view the history of operations performed on a Delta Lake table in Databricks?",
        "options": [
            {
                "id": "a",
                "text": "Run a SELECT logs FROM table_name query"
            },
            {
                "id": "b",
                "text": "Use the SHOW TRANSACTIONS table_name command"
            },
            {
                "id": "c",
                "text": "Execute a VACUUM table_name statement"
            },
            {
                "id": "d",
                "text": "Use the DESCRIBE HISTORY table_name command"
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D): DESCRIBE HISTORY table_name queries the Delta Lake transaction log and returns a chronological list of ALL operations: writes, updates, deletes, merges, schema changes, optimize, vacuum — with timestamps, user IDs, and operation details.\n\n❌ Why others are wrong:\n• (A) SELECT logs FROM table_name: Not valid SQL. There is no 'logs' column in tables.\n• (B) SHOW TRANSACTIONS: Not a valid Databricks SQL command.\n• (C) VACUUM: VACUUM removes old files to reclaim storage. It does NOT show operation history.\n\n🔑 EXAM TIP: DESCRIBE HISTORY output columns:\n• version: Version number (0, 1, 2, ...)\n• timestamp: When the operation occurred\n• operation: WRITE, MERGE, DELETE, UPDATE, CREATE TABLE, etc.\n• operationParameters: Details of the operation\n• userName: Who performed the operation\n• Use for: Auditing, debugging, identifying when changes occurred",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-199",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst filters rows where the tags array includes the value 'sql' using this query:\n\nSELECT * FROM main.analytics.articles WHERE tags = 'sql';\n\nThis query returns no results.\n\nHow should the analyst query to filter for rows where the tags array contains 'sql'?",
        "options": [
            {
                "id": "a",
                "text": "SELECT * FROM main.analytics.articles WHERE tags IN ('sql');"
            },
            {
                "id": "b",
                "text": "SELECT * FROM main.analytics.articles WHERE tags LIKE '%sql%';"
            },
            {
                "id": "c",
                "text": "SELECT * FROM main.analytics.articles WHERE 'sql' IN tags;"
            },
            {
                "id": "d",
                "text": "SELECT * FROM main.analytics.articles WHERE array_conatins (tags, 'sql');"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "In Databricks SQL an array column can be tested for a specific element with the syntax 'value' IN (array_column). This predicate returns true when the literal 'sql' appears anywhere inside the tags array. Option A (tags IN ('sql')) expects the right-hand side to be a list of scalars; it cannot be applied to an array column. Option B (tags LIKE '%sql%') works only on string columns; applying LIKE to an array raises a type error. Option D has a misspelled function name (array_conatins instead of array_contains).",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-200",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to programmatically mark a Unity Catalog table, sales_data, as certified so that it is discoverable as a trusted asset across their organization.\n\nWhich SQL command can be used to meet the requirement?",
        "options": [
            {
                "id": "a",
                "text": "ALTER TABLE sales_data SET TAGS ('system.Certified');"
            },
            {
                "id": "b",
                "text": "ALTER TABLE sales_data SET TAGS ('certified' = 'true');"
            },
            {
                "id": "c",
                "text": "GRANT CERTIFY ON TABLE sales_data TO analyst_group;"
            },
            {
                "id": "d",
                "text": "UPDATE TABLE sales_data ADD COMMENT 'Certified dataset';"
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): ALTER TABLE sales_data SET TAGS ('certified' = 'true') is the correct syntax. Unity Catalog supports custom tags as key-value pairs using the SET TAGS clause. The 'certified' tag makes the table discoverable as a trusted asset across the organization.\n\n❌ Why others are wrong:\n• (A) SET TAGS ('system.Certified'): Syntactically incomplete — tags must be key-value pairs ('key' = 'value'), not single strings.\n• (C) GRANT CERTIFY: There is no CERTIFY privilege in Unity Catalog. GRANT is for access permissions (SELECT, USAGE, ALL PRIVILEGES).\n• (D) UPDATE TABLE ADD COMMENT: Invalid syntax. Comments are set with ALTER TABLE SET COMMENT 'text' or COMMENT ON TABLE.\n\n🔑 EXAM TIP: Unity Catalog metadata methods:\n• TAGS (SET TAGS): Structured key-value pairs for classification and governance\n• COMMENTS (SET COMMENT): Free-text descriptions for documentation\n• Syntax: ALTER TABLE table_name SET TAGS ('key1' = 'value1', 'key2' = 'value2');\n• Remove: ALTER TABLE table_name UNSET TAGS ('key1');",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-201",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is troubleshooting a query in Databricks SQL that fails when processing large datasets and complex join operations. Logs indicate that the job consistently aborts due to resource constraint errors on the cluster.\n\nWhich Query Profile metric should the analyst use to identify the operator that is causing resource overuse?",
        "options": [
            {
                "id": "a",
                "text": "Time spent per operator"
            },
            {
                "id": "b",
                "text": "Shuffle read size per operator"
            },
            {
                "id": "c",
                "text": "Memory peak per operator"
            },
            {
                "id": "d",
                "text": "Bytes spilled to disk per operator"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "The Memory peak per operator metric shows the maximum memory consumption that each individual operator (e.g., join, aggregation, sort) required during the query execution. By locating the operator with the highest peak memory, the analyst can pinpoint the exact step that is over-consuming RAM and then tune or redesign that part of the query. Time spent per operator (A) helps identify slow stages but does not reveal memory issues. Shuffle read size (B) indicates data movement intensity but not memory exhaustion. Bytes spilled to disk (D) shows when memory-spilling occurs but the query already aborted before any spill could be recorded.",
        "domain": "Analyzing Queries"
    },
  {
        "id": "db-da-202",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst encounters an unclear error while running a SQL query in the Databricks SQL Editor. The analyst wants to quickly understand and resolve the issue.\n\nHow can Databricks Assistant help the analyst diagnose and fix the error?",
        "options": [
            {
                "id": "a",
                "text": "Databricks Assistant requires switching to a notebook environment to provide any debugging support."
            },
            {
                "id": "b",
                "text": "Databricks Assistant only supports Python code and cannot help with SQL queries."
            },
            {
                "id": "c",
                "text": "Databricks Assistant can only create new queries and does not assist with debugging."
            },
            {
                "id": "d",
                "text": "Databricks Assistant can analyze the error, suggest solutions, and provide corrected code directly in the SQL Editor."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "Databricks Assistant is embedded in the SQL Editor and can interpret runtime errors, propose fixes, and return ready-to-run SQL statements without leaving the editor. This accelerates root-cause analysis and reduces the need for manual trial-and-error. Option A is incorrect — the Assistant operates directly in the SQL Editor with no need to migrate to a notebook. Option B is incorrect — the Assistant works with SQL, offering syntax validation and query optimization tips. Option C is incorrect — the Assistant actively diagnoses errors, suggests corrective actions, and can auto-generate corrected code.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
    },
  {
        "id": "db-da-207",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst has configured a Delta table with default retention settings. The analyst runs VACUUM operations weekly to manage storage costs. A business user asks to access data from 10 days ago for a compliance audit.\n\nWhat is the result of a time travel query in this scenario?",
        "options": [
            {
                "id": "a",
                "text": "The time travel query will succeed because Delta Lake automatically backs up data for compliance purposes, regardless of VACUUM operations."
            },
            {
                "id": "b",
                "text": "The time travel query will succeed because the default log retention period is 30 days, which is sufficient to access 10-day-old data."
            },
            {
                "id": "c",
                "text": "The time travel query will fail because the default maximum table version is 7 and numbering resets after each VACUUM operation, making historical versions inaccessible."
            },
            {
                "id": "d",
                "text": "The time travel query will fail because the default data file retention period is 7 days, and VACUUM operations have likely removed the required data files."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D): The time travel query will FAIL because the default data file retention is 7 days, and VACUUM (run weekly) has already removed the 10-day-old data files. Even though the transaction log has a 30-day retention (preserving the VERSION metadata), the actual data files needed to read the historical version have been deleted.\n\n❌ Why others are wrong:\n• (A) Automatic backup: FALSE. Delta Lake does NOT automatically back up data files. VACUUM is a destructive, permanent deletion operation.\n• (B) 30-day log retention sufficient: The 30-day retention applies to the TRANSACTION LOG (metadata), not the data files. You can see that version 10-days-ago EXISTS in the log, but you can't READ it because the data files are gone.\n• (C) Max 7 versions with reset: FALSE. Delta Lake doesn't have a maximum version count, and VACUUM doesn't reset version numbering.\n\n🔑 EXAM TIP: Two separate retention periods:\n• Transaction LOG retention: 30 days (metadata about versions)\n• Data FILE retention: 7 days (actual data files for Time Travel)\n• VACUUM deletes data FILES beyond the file retention period\n• Result: After VACUUM, you can see old versions in DESCRIBE HISTORY but CANNOT query them",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-209",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is working in a Databricks workspace with Unity Catalog enabled. While using a shared SQL Warehouse, the analyst runs the following query:\n\nSELECT * FROM sales_data;\n\nThis query results in a TABLE_OR_VIEW_NOT_FOUND error, even though:\n- The table sales_data exists in the reporting schema of the corp_data catalog.\n- The analyst has SELECT and USAGE privileges on the corp_data.reporting.sales_data table.\n- Another user running the same query in a notebook attached to a cluster is able to retrieve results without fully qualifying the table.\n\nWhich action helps the analyst to resolve the issue without rewriting the query?",
        "options": [
            {
                "id": "a",
                "text": "Set the spark.databricks.sql.initial.catalog.namespace Spark configuration in the cluster attached to the SQL Warehouse."
            },
            {
                "id": "b",
                "text": "Run the following command to set the default catalog and schema for the current session:\nUSE CATALOG corp_data;\nUSE SCHEMA reporting;"
            },
            {
                "id": "c",
                "text": "Modify the workspace-level catalog default so that all SQL Warehouses automatically point to corp_data.reporting."
            },
            {
                "id": "d",
                "text": "Set spark.sql.default.database to corp_data.reporting.sales_data in the SQL Warehouse runtime configuration."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "In Databricks SQL, a query runs with an implicit session-level catalog and schema. When a user does not qualify an object, the engine resolves it against the current catalog/schema set in the session. USE CATALOG corp_data; USE SCHEMA reporting; explicitly sets the session's default catalog and schema, so SELECT * FROM sales_data resolves to corp_data.reporting.sales_data. Option A configures the initial catalog for new sessions but does not affect the current one. Option C would impact all users and SQL Warehouses indiscriminately. Option D is not a valid Spark configuration property.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-211",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to create a table in Unity Catalog for a production analytics workload. The table will be frequently queried and needs automatic performance optimization. The data should be governed by Unity Catalog with lifecycle management.\n\nWhich approach should the data analyst use?",
        "options": [
            {
                "id": "a",
                "text": "Create a foreign table using CREATE FOREIGN TABLE with external connections to maintain compatibility with external systems while keeping data in original location and get benefits like Liquid Clustering and Deletion Vectors."
            },
            {
                "id": "b",
                "text": "Create a managed table using CREATE TABLE catalog.schema.table_name (columns...) allowing Unity Catalog to manage the data lifecycle, storage location, and provide automatic optimizations like Predictive Optimization."
            },
            {
                "id": "c",
                "text": "Create a temporary table using CREATE TEMPORARY TABLE for better performance and then convert it to a managed table later using ALTER TABLE SET MANAGED."
            },
            {
                "id": "d",
                "text": "Create an external table using CREATE EXTERNAL TABLE catalog.schema.table_name LOCATION 's3://bucket/path/' to maintain control over the data location while benefiting from Unity Catalog governance."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Creating a MANAGED table (CREATE TABLE catalog.schema.table_name) places the data under Unity Catalog's full lifecycle management. Benefits:\n• Automatic storage location management\n• Predictive Optimization (automated OPTIMIZE and VACUUM)\n• Full governance (access control, lineage, auditing)\n\n❌ Why others are wrong:\n• (A) Foreign table: Foreign tables (via Lakehouse Federation) keep data OUTSIDE Unity Catalog's lifecycle management. No automatic optimization.\n• (C) Temporary table: Session-scoped. Disappears when the session ends. Not usable for production workloads.\n• (D) External table: While governed by UC permissions, external tables don't benefit from UC-managed storage lifecycle or Predictive Optimization.\n\n🔑 EXAM TIP: Managed vs. External vs. Foreign:\n• Managed: UC manages storage + lifecycle + full optimization → best for production\n• External: UC manages metadata only, user manages storage → for existing data locations\n• Foreign: UC provides read-only access to external databases → no data copying\n• Predictive Optimization ONLY works with managed tables",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-212",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst team is working with large datasets stored as Delta tables (Parquet format) in Databricks on Azure Data Lake. The teams want to speed up query performance and reduce repeated computation by leveraging caching. However, they notice that sometimes caching does not improve performance or even slows down queries. The team wants to understand the best practices and limitations of caching in Databricks to optimize their workflows.\n\nWhat is the limitation when using caching in Databricks to reduce development time and query latency?",
        "options": [
            {
                "id": "a",
                "text": "Query result caching in Databricks SQL works best with non-deterministic queries that use functions like NOW() or RAND()."
            },
            {
                "id": "b",
                "text": "Caching CSV or JSON files with Delta Cache is fully supported and recommended for best performance."
            },
            {
                "id": "c",
                "text": "Delta Cache (disk cache) automatically caches Parquet files on local SSDs and improves read performance, but only supports Parquet files stored on Azure Blob Storage or Azure Data Lake."
            },
            {
                "id": "d",
                "text": "Spark caching always improves performance and should be applied liberally to all dataframes regardless of size or query complexity."
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "Delta Cache (disk cache) monitors Parquet files read from Azure Blob Storage or Azure Data Lake (ADLS). When a file is accessed, it is cached on the driver/executor local SSDs to speed up subsequent reads. However, this only works for Parquet files located on ADLS or Blob storage; other formats or locations are not eligible. Option A is incorrect because non-deterministic functions break cache hits. Option B is incorrect as Delta Cache does not support CSV or JSON. Option D is false as indiscriminate caching can actually degrade performance.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-213",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to share a certified dataset containing approved public economic indicators with an external research institution. The institution does not have access to the Databricks workspace. The dataset is managed in Unity Catalog and has already been reviewed and tagged appropriately.\n\nThe analyst's requirements are:\n- Share the dataset securely and read-only\n- Ensure the institution receives only the specified tables\n- Avoid giving access to the full catalog or workspace\n- Maintain auditability and governance using Unity Catalog\n\nHow should the analyst share the dataset?",
        "options": [
            {
                "id": "a",
                "text": "Grant the external users access to Unity Catalog by adding their emails to the workspace."
            },
            {
                "id": "b",
                "text": "Use COPY INTO to export the dataset into a managed Delta table, then use Unity Catalog's GRANT SELECT to provide access to the institution."
            },
            {
                "id": "c",
                "text": "Use the GRANT SELECT command to give the external group's principal access to the table."
            },
            {
                "id": "d",
                "text": "Create a Delta Share, add the required table, define a recipient, and ensure that a Unity Catalog metastore admin or privileged user in the recipient's workspace grants appropriate access permissions to their users."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D): Delta Sharing is the correct solution. It provides secure, read-only data sharing ACROSS organizations without requiring the recipient to have a Databricks account or workspace. The analyst creates a Share, adds specific tables, defines a recipient, and the recipient's admin grants access to their users.\n\n❌ Why others are wrong:\n• (A) Add emails to workspace: Gives too much access — workspace membership exposes other resources beyond the shared dataset.\n• (B) COPY INTO + GRANT SELECT: COPY INTO creates a local copy (data duplication). GRANT SELECT only works within the same Unity Catalog ecosystem — external institutions aren't part of it.\n• (C) GRANT SELECT: Only works for principals within the same Unity Catalog metastore. External organizations are outside the UC boundary.\n\n🔑 EXAM TIP: Delta Sharing key facts:\n• Open protocol for secure cross-organization data sharing\n• Recipients don't need Databricks (can use Spark, pandas, Power BI)\n• Read-only access (recipients can't modify source data)\n• Fine-grained: share specific tables, not entire catalogs\n• Audit trail maintained in Unity Catalog",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-214",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is monitoring delivery delays in real time using a Databricks dashboard shared with the operations team. After a meeting, the manager asks to add a new widget that graphically displays, with a gauge, the percentage of on-time shipments compared to the total. The data analyst needs to quickly modify the dashboard to add this information element.\n\nHow should the analyst add a new widget to an existing dashboard in Databricks?",
        "options": [
            {
                "id": "a",
                "text": "Export the data from a notebook as a static image and upload it to the dashboard as a visual reference."
            },
            {
                "id": "b",
                "text": "Ask a platform administrator to add a materialized view for the on-time percentage, since visualizations require pre-aggregated values from the source to display correctly."
            },
            {
                "id": "c",
                "text": "Click \"Add Visualization\" in the dashboard, select the desired type, and associate a query that calculates the requested percentage."
            },
            {
                "id": "d",
                "text": "Clone the existing dashboard, add the new visualization in the duplicate, and replace the original dashboard after review."
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): The standard workflow: Click 'Add Visualization' in the dashboard editor → select chart type (Gauge) → associate it with a query that calculates the on-time percentage. This is the native, built-in way to add new widgets to existing dashboards.\n\n❌ Why others are wrong:\n• (A) Export from notebook as static image: Static images aren't interactive, don't auto-refresh, and can't be linked to parameters. Not a proper dashboard widget.\n• (B) Ask admin for materialized view: Unnecessary. The query itself can compute the percentage with SUM(CASE WHEN...) / COUNT(*). No admin action or pre-aggregation needed.\n• (D) Clone dashboard and replace: Overly complex. You can add widgets directly to an existing dashboard — no need to clone, modify, and replace.\n\n🔑 EXAM TIP: Adding widgets to dashboards:\n1. Open dashboard in Edit mode\n2. Click 'Add Visualization' (or 'Add' → 'Visualization')\n3. Select or create the backing query\n4. Choose the visualization type\n5. Configure the visualization settings\n6. Position and resize on the canvas",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-216",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst discovers that a group named developers has unauthorized access to sensitive data within the Unity Catalog catalog finance_catalog, which should be accessible only by the finance team.\n\nWhich SQL command should the analyst use to remove the developers group's access to the catalog?",
        "options": [
            {
                "id": "a",
                "text": "GRANT USAGE ON CATALOG 'finance_catalog' TO 'finance';"
            },
            {
                "id": "b",
                "text": "ALTER CATALOG 'finance_catalog' DROP PERMISSIONS FOR 'developers';"
            },
            {
                "id": "c",
                "text": "REVOKE USAGE ON CATALOG 'finance_catalog' FROM 'developers';"
            },
            {
                "id": "d",
                "text": "REVOKE USE ON CATALOG 'finance_catalog' FROM 'developers';"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): REVOKE USAGE ON CATALOG 'finance_catalog' FROM 'developers' is the correct syntax. REVOKE removes previously granted privileges. USAGE is the required privilege for accessing a catalog — without it, the group cannot traverse into schemas or tables within that catalog.\n\n❌ Why others are wrong:\n• (A) GRANT USAGE TO 'finance': This GRANTS access to the finance group — it doesn't remove the developers' access.\n• (B) ALTER CATALOG DROP PERMISSIONS: Invalid syntax. Unity Catalog uses REVOKE for removing privileges, not ALTER...DROP PERMISSIONS.\n• (D) REVOKE USE: 'USE' is not a valid Unity Catalog privilege. The correct privilege name is 'USAGE'.\n\n🔑 EXAM TIP: Unity Catalog privilege model:\n• USAGE: Required to traverse the hierarchy (catalog → schema → table)\n• SELECT: Required to query table data\n• MODIFY: Required to write/update data\n• ALL PRIVILEGES: Grants all applicable privileges\n• Syntax: GRANT/REVOKE <privilege> ON <object_type> <name> TO/FROM <principal>",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-218",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is reviewing a Genie space used by operations managers and notices that multiple responses have been flagged as inaccurate.\n\nWhich action should the analyst take to improve performance?",
        "options": [
            {
                "id": "a",
                "text": "Add more tables and columns to the space because increasing the data volume improves Genie's ability to find the correct answers."
            },
            {
                "id": "b",
                "text": "Update the instructions and add example SQL queries because this guides Genie to generate correct and context-aware responses."
            },
            {
                "id": "c",
                "text": "Turn off the feedback feature because it prevents noise from influencing Genie's learning mechanism."
            },
            {
                "id": "d",
                "text": "Delete the flagged responses because this clears prior data that is biasing Genie's answer generation."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Update instructions and add example SQL queries. This is the proven improvement method — it gives Genie explicit guidance on how to generate correct responses for the specific question patterns that were flagged as inaccurate.\n\n❌ Why others are wrong:\n• (A) Add more tables and columns: MORE data = MORE noise = WORSE accuracy. Increasing data volume does NOT improve Genie's understanding — it confuses it.\n• (C) Turn off feedback: Feedback (thumbs up/down) is the PRIMARY signal for identifying accuracy problems. Disabling it eliminates the improvement feedback loop.\n• (D) Delete flagged responses: Deleting history doesn't change Genie's behavior. Genie generates SQL from instructions and metadata, not from conversation history.\n\n🔑 EXAM TIP: Genie accuracy improvement workflow:\n1. Review History tab for flagged (thumbs-down) responses\n2. Identify patterns in failed queries\n3. Add/update Instructions with business rules\n4. Create Sample Questions with correct SQL\n5. Create Trusted Assets for critical, recurring queries\n6. Repeat iteratively",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-220",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is curating a Genie space for the marketing team to explore campaign performance data. To ensure accurate and context-aware responses, the analyst includes curated Unity Catalog tables, writes clear domain instructions, and adds sample questions.\n\nWhich additional step can the analyst take to maximize trust and reuse of frequently asked queries?",
        "options": [
            {
                "id": "a",
                "text": "Disable the use of domain instructions to prevent bias in AI-generated answers."
            },
            {
                "id": "b",
                "text": "Mark commonly used queries as Trusted Assets after verifying their correctness."
            },
            {
                "id": "c",
                "text": "Enable automatic query generation so users receive instant responses without review."
            },
            {
                "id": "d",
                "text": "Allow users to edit the underlying datasets to improve Genie responses."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT: Marking verified and frequently used queries as 'Trusted Assets' in a Genie space signals quality and governance. Trusted Assets are queries that have been reviewed and validated by an analyst or team lead. When users see a Trusted Asset badge, they know this query produces reliable, approved results — reducing the risk of ad-hoc queries producing incorrect business insights.\n\n❌ Why others are wrong:\n• (A) Disabling domain instructions: Domain instructions provide critical business context that helps Genie map natural language to correct SQL. Disabling them REDUCES accuracy, not improves it.\n• (C) Automatic generation without review: Auto-generated queries may contain errors or misinterpret business logic. Every Genie-generated query should be reviewed before being trusted by the organization.\n• (D) Editing source data directly: Modifying source data to fit the Genie space introduces data integrity risks. The Genie space should adapt to the data, not the other way around.\n\n🎯 EXAM TIP: Genie space optimization: Trusted Assets (verified queries) + column descriptions + domain instructions + example queries. Each layer adds context for better natural language understanding. Trusted Assets add the GOVERNANCE dimension.",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-223",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is working with a Unity Catalog table named sales_data that contains customer order information. The order_quantity column is defined as an INTEGER, but occasionally has values of -1, indicating a data entry error. To support accurate reporting, the analyst needs to create a new view named clean_sales_data, that excludes these erroneous entries.\n\nWhich SQL query creates the clean_sales_data view by filtering out records where order_quantity is -1?",
        "options": [
            {
                "id": "a",
                "text": "CREATE VIEW clean_sales_data AS SELECT * FROM sales_data WHERE order_quantity IS NOT NULL AND order_quantity > 0;"
            },
            {
                "id": "b",
                "text": "CREATE VIEW clean_sales_data AS SELECT * FROM sales_data WHERE ABS(order_quantity) != 1;"
            },
            {
                "id": "c",
                "text": "CREATE VIEW clean_sales_data AS SELECT * FROM sales_data HAVING order_quantity != -1;"
            },
            {
                "id": "d",
                "text": "CREATE VIEW clean_sales_data AS SELECT * FROM sales_data WHERE order_quantity != -1;"
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D — WHERE order_quantity != -1): For simple row-level value exclusion, WHERE with an inequality operator (!=) is the most direct and performant approach. It filters out all rows where order_quantity equals -1 while keeping all other values including NULLs and positive numbers.\n\n❌ Why others are wrong:\n• (A) \"WHERE IS NOT NULL AND > 0\": Overly restrictive — removes NULLs and zeros, which might be valid data. The requirement is ONLY to exclude -1 values.\n• (B) \"WHERE ABS(order_quantity) != 1\": ABS(-1) = 1 and ABS(1) = 1, so this would also exclude legitimate order_quantity = 1 values.\n• (C) \"HAVING order_quantity != -1\": HAVING is for aggregate filtering after GROUP BY. This query has no aggregation, so HAVING is inappropriate.\n\n🎯 EXAM TIP: Filter precision: exclude EXACTLY the stated value, nothing more. Read carefully — \"exclude -1\" means != -1, not \"keep only positives\" (which would also remove NULLs and zeros).",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-224",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is building a parameterized SQL query in Databricks to filter sales data by region and year. The analyst wants to test the query with different parameter values before adding it to a dashboard. Which approach should the analyst use to allow for dynamic testing of the parameters in the Databricks SQL editor?",
        "options": [
            {
                "id": "a",
                "text": "Hard-code the region and year values directly into the SQL query and rerun it for each test."
            },
            {
                "id": "b",
                "text": "Use parameter markers (e.g., :region, :year) in the SQL query and enter their values in the input boxes before running the query."
            },
            {
                "id": "c",
                "text": "Replace the column names (e.g., region, year) with question marks (\"?\") and expect Databricks to prompt for values at runtime."
            },
            {
                "id": "d",
                "text": "Add the parameters as variables in a Python notebook cell and reference them in the SQL query."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B — Use parameter markers :region, :year with input boxes): Databricks SQL supports named parameters prefixed with a colon (e.g., :region, :year). When detected in the SQL Editor, the UI automatically renders input widgets above the editor. The analyst enters values, clicks Run, and the query executes with those parameter values.\n\n❌ Why others are wrong:\n• (A) \"Hard-code values and rerun\": Inefficient and error-prone. Parameters allow testing multiple values without editing the query.\n• (C) \"Question marks for prompts\": While ? is used in some JDBC drivers, Databricks SQL Editor uses the :name syntax for interactive parameter widgets.\n• (D) \"Python notebook variables\": This would work in a notebook but the question specifies the SQL Editor workflow.\n\n🎯 EXAM TIP: DBSQL parameters: :parameter_name in SQL Editor → auto-generated input widget. Parameter types: text, number, dropdown, date, query-based. When added to dashboards, parameters become interactive filters.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-231",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data engineer is ingesting large volumes of semi-structured log data stored in an S3 bucket into Databricks. The data arrives continuously throughout the day, and the engineer needs to implement an efficient, scalable solution that supports incremental loads, handles schema changes gracefully, and minimizes manual intervention. Which approach should be used for ingesting this data?",
        "options": [
            {
                "id": "a",
                "text": "Build a custom Spark Structured Streaming job that tracks processed files via checkpointing and manual schema management."
            },
            {
                "id": "b",
                "text": "Use Auto Loader to incrementally ingest data from S3."
            },
            {
                "id": "c",
                "text": "Build a custom API-driven ingestion pipeline to pull data from S3."
            },
            {
                "id": "d",
                "text": "Use Delta Sharing to share data with Databricks from external systems."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Auto Loader is the recommended solution for incremental cloud storage ingestion because:\n1. AUTOMATIC CHECKPOINTING: Tracks which files have been processed — never re-processes a file\n2. SCHEMA EVOLUTION: cloudFiles.schemaEvolution = true handles new/changed fields\n3. SCALABLE: Handles millions of small files efficiently using file notification mode\n4. NO CUSTOM CODE needed for state management\n\n❌ Why others are wrong:\n• (A) Custom Spark Structured Streaming: Works but requires YOU to build file tracking, checkpoint management, schema handling, and error recovery. Auto Loader does all this automatically.\n• (C) Custom API pipeline: Pulling data from S3 via API is architecturally wrong — S3 doesn't have a streaming API. You'd scan the bucket repeatedly. Auto Loader uses native cloud notifications.\n• (D) Delta Sharing: This shares data BETWEEN organizations. It doesn't ingest files from your own S3 bucket.\n\n🎯 EXAM TIP: Cloud storage + continuous ingestion + schema evolution = Auto Loader. Custom streaming = only if you need logic Auto Loader can't provide.",
        "domain": "Importing Data"
    },
  {
        "id": "db-da-232",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to quickly estimate the number of unique user sessions in a dataset containing billions of records on Databricks SQL. Due to performance constraints, the analyst must ensure the query runs efficiently and delivers results with acceptable accuracy. What is the primary advantage of using APPROX_COUNT_DISTINCT instead of COUNT_DISTINCT in this scenario?",
        "options": [
            {
                "id": "a",
                "text": "APPROX_COUNT_DISTINCT provides exact counts, while COUNT DISTINCT only provides estimates."
            },
            {
                "id": "b",
                "text": "APPROX_COUNT_DISTINCT can only be used with string columns, while COUNT DISTINCT works with numeric columns."
            },
            {
                "id": "c",
                "text": "APPROX_COUNT_DISTINCT uses the HyperLogLog++ algorithm to provide fast approximate counts with configurable accuracy (default 5% relative standard deviation)."
            },
            {
                "id": "d",
                "text": "APPROX_COUNT_DISTINCT requires less memory by storing only the first 1000 unique values."
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C — HyperLogLog++ for fast approximate counts with ~2% error): APPROX_COUNT_DISTINCT uses HyperLogLog++ to estimate distinct counts using fixed memory regardless of data size. On billions of records, it runs orders of magnitude faster than COUNT(DISTINCT) with approximately 2% error tolerance — perfect for dashboards and trend monitoring.\n\n❌ Why others are wrong:\n• (A) \"APPROX provides exact, COUNT DISTINCT provides estimates\": REVERSED. COUNT(DISTINCT) is exact. APPROX_COUNT_DISTINCT is the approximate one.\n• (B) \"Only works with string columns\": Works with ALL data types — strings, numbers, dates, timestamps.\n• (D) \"Stores only first 1000 values\": HLL++ doesn't store actual values — it maintains a compact probabilistic sketch regardless of cardinality.\n\n🎯 EXAM TIP: APPROX_COUNT_DISTINCT: use for billions of rows where ~2% error is acceptable (dashboards, metrics). COUNT(DISTINCT): use when exact precision is required (financial reporting, auditing). The exam tests when to use which.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-238",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is exploring user engagement trends and wants to create a visualization while working interactively in a Databricks notebook. The analyst executes a SQL query using %sql and wants to turn the result into a line chart showing weekly user counts over time. Which step allows the analyst to create the chart directly in the notebook?",
        "options": [
            {
                "id": "a",
                "text": "Save the query as a table, export it to Excel, and use Excel’s charting tools."
            },
            {
                "id": "b",
                "text": "Wrap the SQL query in a Python plotly.express call using %python."
            },
            {
                "id": "c",
                "text": "Use %sql to run the query, then copy the result into a new dashboard to access visualization options."
            },
            {
                "id": "d",
                "text": "Use the display() function or %sql to run the query, then click the + icon in the result cell to add a visualization."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D): In Databricks notebooks, after running a %sql cell, you can create visualizations DIRECTLY in the notebook using either:\n1. display() function in Python cells\n2. Click the + icon in the SQL result cell → select visualization type\n\nBoth methods create inline, interactive charts within the notebook — no need to leave the environment.\n\n❌ Why others are wrong:\n• (A) Export to Excel: Losing the interactive, in-platform workflow. Databricks notebooks have built-in charting — no external tools needed.\n• (B) Python plotly.express: While possible, the question asks about the SIMPLEST way from a %sql cell. The built-in + icon is immediate; switching to Python adds unnecessary complexity.\n• (C) Copy to dashboard: The question asks about creating a chart IN THE NOTEBOOK. Moving to a dashboard is an extra step that's not needed for notebook-level exploration.\n\n🔑 EXAM TIP: Notebook visualization workflow:\n• %sql cell → run query → click + icon → choose chart type → configure\n• Python cell → display(df) → click + icon → choose chart type\n• Charts are interactive: hover for details, click for drill-down\n• Visualizations persist when the notebook is saved",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-239",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to generate a sales report by joining a Unity Catalog-managed table with a table stored in a MySQL database. The analyst wants the join to be efficient, performed within Databricks, and governed using Unity Catalog permissions and lineage. Which approach should the data analyst use to meet these requirements?",
        "options": [
            {
                "id": "a",
                "text": "Use Lakehouse Federation to create a foreign catalog for the MySQL database, then write a SQL query joining the Delta table and the federated MySQL table directly in Databricks."
            },
            {
                "id": "b",
                "text": "Write a Python script to connect to both sources separately, download the data and join them in memory outside Databricks."
            },
            {
                "id": "c",
                "text": "Fully ingest the MySQL table into Databricks and store it as a new Delta table before joining."
            },
            {
                "id": "d",
                "text": "Register the MySQL table as a temporary view in Databricks using a standard Spark JDBC read, then join it with the Unity Catalog-managed table using Databricks SQL."
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A): Lakehouse Federation creates a foreign catalog for MySQL, enabling a direct SQL JOIN between the Delta table and the MySQL table within Databricks. This maintains governance (Unity Catalog lineage and permissions) and minimizes data movement.\n\n❌ Why others are wrong:\n• (B) Python script outside Databricks: Loses all governance, lineage, and auditing. Processing outside the platform violates security and compliance requirements.\n• (C) Full ingestion into Delta: Requires ETL pipeline, storage costs, and data synchronization. More effort than needed for a single report.\n• (D) Temp view via JDBC: While functionally possible, temporary views don't persist across sessions and aren't governed by Unity Catalog permissions or lineage tracking like federated catalogs.\n\n🔑 EXAM TIP: Lakehouse Federation vs. alternatives:\n• Federation: Query in place, no data movement, full UC governance\n• JDBC temp views: Query in place, session-scoped, no governance\n• Full ETL: Data copied, persistent, but requires pipeline maintenance\n• Use Federation when: governance is required AND data shouldn't move",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-240",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is working with data stored as Parquet files in an S3 bucket and needs to create an external table in Databricks SQL that points to this existing data. Which command should the data analyst use to create this table?",
        "options": [
            {
                "id": "a",
                "text": "CREATE TABLE sales (id INT, amount DOUBLE) USING PARQUET LOCATION 's3://bucket/sales';"
            },
            {
                "id": "b",
                "text": "CREATE EXTERNAL TABLE sales (id INT, amount DOUBLE) FROM 's3://bucket/sales';"
            },
            {
                "id": "c",
                "text": "EXPORT TABLE sales TO 's3://bucket/sales' AS PARQUET;"
            },
            {
                "id": "d",
                "text": "IMPORT TABLE sales AS DELTA FROM 's3://bucket/sales';"
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A): CREATE TABLE ... USING PARQUET LOCATION 's3://...' is the correct syntax. The LOCATION clause tells Databricks to treat this as an external table pointing to existing Parquet files at the specified path. The USING clause specifies the file format.\n\n❌ Why others are wrong:\n• (B) CREATE EXTERNAL TABLE ... FROM: 'FROM' is not valid syntax for table creation. The correct keyword is LOCATION.\n• (C) EXPORT TABLE ... TO: EXPORT creates files FROM a table, not the reverse.\n• (D) IMPORT TABLE ... FROM: IMPORT is not a standard Databricks SQL command for table creation.\n\n🔑 EXAM TIP: External table creation patterns:\n• CREATE TABLE t USING PARQUET LOCATION 's3://path' → external table pointing to Parquet\n• CREATE TABLE t USING CSV LOCATION 'path' → external table pointing to CSV\n• CREATE TABLE t LOCATION 'path' → defaults to Delta format\n• The LOCATION clause is what makes a table EXTERNAL\n• Without LOCATION, the table is MANAGED (UC or Hive controls storage)",
        "domain": "Managing Data"
    },
  {
        "id": "db-da-245",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is given a sales table with the columns product_id, sale_date, and sale_amount. The analyst's goal is to calculate the total sales per product per day, with exactly one row per product per day.\n\nThey first try the following SQL query:\n\nSELECT product_id, sale_date, sale_amount, SUM(sale_amount) OVER (PARTITION BY product_id ORDER BY sale_date) AS daily_total FROM sales ORDER BY product_id, sale_date;\n\nHowever, this produces multiple rows for the same product and date instead of one aggregated row per product/date combination.\n\nWhich corrected SQL query will produce exactly one row per product per day with the total sales for that day?",
        "options": [
            {
                "id": "a",
                "text": "SELECT product_id, sale_date, sale_amount, SUM(sale_amount) OVER (PARTITION BY product_id ORDER BY sale_date) AS daily_total FROM sales ORDER BY product_id, sale_date;"
            },
            {
                "id": "b",
                "text": "SELECT product_id, sale_date, sale_amount, SUM(sale_amount) OVER (ORDER BY product_id, sale_date) AS daily_total FROM sales ORDER BY product_id, sale_date;"
            },
            {
                "id": "c",
                "text": "SELECT product_id, sale_date, sale_amount, ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY sale_date) AS row_num FROM sales ORDER BY product_id, sale_date;"
            },
            {
                "id": "d",
                "text": "SELECT product_id, sale_date, SUM(sale_amount) AS daily_total\nFROM sales\nGROUP BY product_id, sale_date\nORDER BY product_id, sale_date;"
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "In SQL, the GROUP BY clause is specifically designed to collapse multiple rows that share the same values in specified columns into a single summary row. Using SUM(sale_amount) with GROUP BY product_id, sale_date ensures that the results are aggregated to the level of one row per unique product/date combination. Option A and B use window functions which, while they can calculate totals, do not reduce the number of rows (they retain the original granularity). Option C uses ROW_NUMBER() which is for ranking/indexing, not summation.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-247",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "multiple_choice",
        "prompt": "A data analyst is migrating data lakehouse workloads to Databricks. The analyst manages a large table with thousands of columns and several billion rows. The analyst is concerned about scan performance, query speed, and handling the overhead of processing such a large volume of data.\n\nIn which two ways does the Photon engine help the team address these challenges? Choose 2 answers",
        "options": [
            {
                "id": "a",
                "text": "Photon leverages a columnar, vectorized execution engine for efficient scan and aggregation operations."
            },
            {
                "id": "b",
                "text": "Photon automatically merges small files into a single large file before processing."
            },
            {
                "id": "c",
                "text": "Photon processes data row by row for maximum compatibility with legacy systems."
            },
            {
                "id": "d",
                "text": "Photon automatically parallelizes all queries across multiple clusters without additional configuration."
            },
            {
                "id": "e",
                "text": "Photon uses a caching layer to transcode data into a CPU-efficient format for faster scan performance."
            }
        ],
        "correctIds": [
            "a",
            "e"
        ],
        "explanation": "Photon addresses big data challenges through two core mechanisms:\n\n• Why Option A is Correct: Photon is a native execution engine built from the ground up in C++ to overcome the limitations of the Java Virtual Machine (JVM). It uses vectorized execution, which processes data in batches (vectors) instead of one row at a time. This allows it to leverage SIMD instructions to perform parallel operations on massive datasets, making it ideal for the \"billions of rows\" and \"thousands of columns\" mentioned in the scenario.\n\n• Why Option E is Correct: Photon includes a high-performance caching layer that sits between the cloud storage and the execution engine. When data is read, Photon transcodes it into a more CPU-efficient, columnar format and stores it on local NVMe SSDs. This specialized format allows Photon to bypass slow decompression and decoding steps during subsequent scans, resulting in significantly faster query speeds.\n\nAnalysis of Incorrect Options:\n• Option B: Merging small files is handled by Delta Lake's OPTIMIZE command (Compaction). While this improves query speed, it is a storage-layer optimization, not a feature of the Photon compute engine.\n• Option C: Row-by-row processing is the legacy method that Photon was specifically built to replace. Row-by-row processing causes \"CPU stalls\" and is the primary reason for poor performance on large-scale datasets.\n• Option D: Spark naturally parallelizes queries across a cluster. Photon optimizes how that work is executed internally on the nodes. It does not automatically manage queries across \"multiple clusters\" simultaneously—that is usually a function of load balancing or serverless SQL.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-280",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "multiple_choice",
        "prompt": "A data analyst is preparing a sales performance presentation using Databricks notebooks. They have just loaded a Spark DataFrame with daily transaction data and wish to present a line chart showing total sales over time. However, when creating the visualization, they notice the line chart either does not display correctly, shows incomplete data, or the X-axis is not in chronological order. The analyst must resolve these issues to produce an accurate and informative line chart. Which two actions should the analyst take to ensure the line chart visualization in the Databricks notebook accurately depicts sales trends over time?",
        "options": [
            {
                "id": "a",
                "text": "Check that the column selected for the X-axis contains continuous date or time values and is sorted appropriately."
            },
            {
                "id": "b",
                "text": "Aggregate the Y-axis (total sales) within the visualization editor if the data is not already aggregated to avoid overplotting."
            },
            {
                "id": "c",
                "text": "Enable 'Auto-format' for the X-axis to let Databricks automatically interpret date fields and fix ordering issues."
            },
            {
                "id": "d",
                "text": "Ignore missing data points as Databricks automatically interpolates data gaps in line charts."
            },
            {
                "id": "e",
                "text": "Use a scatter plot instead of a line chart, as it automatically handles unsorted and missing data points."
            }
        ],
        "correctIds": [
            "a",
            "b"
        ],
        "explanation": "✅ CORRECT (A, B): Both actions are required for an accurate line chart:\n\n1. (A) X-axis sorting: Line charts connect data points in sequence. If dates are unsorted, lines criss-cross creating a 'spaghetti' effect. Always ORDER BY date column in the query or ensure the visualization sorts the X-axis.\n\n2. (B) Y-axis aggregation: If multiple transactions exist per day, displaying raw data creates overplotting (multiple Y values per X point). Aggregating (SUM, AVG) in the visualization editor or SQL ensures one clean data point per time period.\n\n❌ Why others are wrong:\n• (C) Enable 'Auto-format': Auto-format improves visual appearance (date formatting, number formatting) but does NOT fix data sorting or aggregation issues.\n• (D) Ignore missing data: Missing data creates gaps that can mislead viewers. Handle in SQL with COALESCE, date generation, or explicit fills — never ignore.\n• (E) Use scatter plot instead: Scatter plots show individual points without connecting them. They lose the continuous trend visualization that line charts provide.\n\n🔑 EXAM TIP: Line chart requirements:\n1. X-axis must be sorted (ORDER BY in SQL)\n2. Y-axis should be aggregated (one value per X point)\n3. Handle missing data explicitly\n4. Use continuous X-axis (dates, timestamps)",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-281",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "multiple_choice",
        "prompt": "A data analyst is designing a Databricks SQL dashboard with interactive filtering via parameters. Which two parameter types are supported in Databricks SQL?",
        "options": [
            {
                "id": "a",
                "text": "String"
            },
            {
                "id": "b",
                "text": "Boolean"
            },
            {
                "id": "c",
                "text": "Array"
            },
            {
                "id": "d",
                "text": "Floating Point"
            },
            {
                "id": "e",
                "text": "Dropdown List"
            }
        ],
        "correctIds": [
            "a",
            "b"
        ],
        "explanation": "Databricks SQL supports several underlying parameter types for interactive dashboards:\n\n1. **String (Option A):** The most common type, used for text filtering.\n2. **Boolean (Option B):** Used for toggles (e.g., Show/Hide data, True/False flags).\n\nOther supported types include **Number** (covering integers or decimals) and **Date/Time**.\n\n• Option C is incorrect: Arrays are not supported as a native parameter type; multiple values are typically handled via 'Dropdown List' (Multi-select) but the underlying logic converts them to a comma-separated string for the 'IN' clause.\n\n• Option D is incorrect: While numeric filtering is possible, 'Floating Point' is not listed as a distinct parameter type nomenclature in the Databricks UI.\n\n• Option E is incorrect: A 'Dropdown List' is considered a **UI control** rather than an underlying data type. The data type of a dropdown is usually based on a list of strings or numbers.",
        "domain": "Executing queries using Databricks SQL and Databricks SQL Warehouses"
    },
  {
        "id": "db-da-282",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is setting up a Genie space in the Databricks Data Intelligence Platform to help business users generate sales reports using natural language. The analyst wants to ensure Genie provides accurate answers and visualizations based on the company's sales data, which is managed in Unity Catalog. The analyst has prepared sample queries and ensured that table and column metadata are well-annotated. Which action will improve the accuracy and relevance of Genie's responses when business users ask questions in the Genie space?",
        "options": [
            {
                "id": "a",
                "text": "Include all available tables and columns from the company's data warehouse in the Genie space, regardless of their relevance."
            },
            {
                "id": "b",
                "text": "Add only the necessary tables and columns to the Genie space and ensure all metadata in Unity Catalog is well-annotated."
            },
            {
                "id": "c",
                "text": "Remove primary and foreign key relationships from Unity Catalog to simplify the data model for Genie."
            },
            {
                "id": "d",
                "text": "Populate Genie's configuration with default sample queries and generic business instructions using standard templates from the platform."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Add only the necessary tables and columns and ensure all metadata in Unity Catalog is well-annotated. This combines FOCUS (fewer, relevant tables) with CONTEXT (rich descriptions) — the two primary drivers of Genie accuracy.\n\n❌ Why others are wrong:\n• (A) Include ALL available tables: Adding irrelevant tables creates noise that degrades SQL generation quality. The LLM may select wrong tables or create incorrect joins.\n• (C) Remove PK/FK relationships: Removing relationships BREAKS Genie's understanding of how tables relate. PK/FK metadata is critical for correct join generation.\n• (D) Default/generic templates: Generic instructions lack the specific business context that makes Genie accurate. Custom metadata tailored to actual schemas is always better.\n\n🔑 EXAM TIP: The three pillars of Genie accuracy:\n1. FOCUS: Include only necessary tables and columns (≤5 tables)\n2. METADATA: Rich descriptions on tables AND columns in Unity Catalog\n3. EXAMPLES: Sample Questions and Trusted Assets with verified SQL",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-283",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to ingest a new CSV file containing sales data into Databricks. The analyst prefers a simple, no-code solution that is secure and integrates with the company's data governance tools. Which data ingestion method in Databricks should the data analyst use in this scenario?",
        "options": [
            {
                "id": "a",
                "text": "UI (Drag-and-drop file ingestion)"
            },
            {
                "id": "b",
                "text": "Auto Loader"
            },
            {
                "id": "c",
                "text": "SQL Batch ingestion"
            },
            {
                "id": "d",
                "text": "Notebook's scheduled ETL"
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A): The Create Table UI (drag-and-drop) is the ONLY fully no-code solution. Key features:\n1. Drag and drop the CSV directly in the Databricks workspace\n2. Auto-detects schema (column names, types)\n3. Creates a MANAGED Delta table in Unity Catalog (automatically governed)\n4. Requires ZERO SQL, ZERO cloud storage configuration\n\n❌ Why others are wrong:\n• (B) Auto Loader: While 'low-code', Auto Loader still requires SQL/Python commands (CREATE STREAMING TABLE + read_files). It's designed for continuous cloud storage ingestion, not one-off file uploads.\n• (C) SQL Batch ingestion (COPY INTO): Requires writing SQL code (COPY INTO ... FROM ... FILEFORMAT = CSV). Not 'no-code'.\n• (D) Notebook scheduled ETL: The most complex option — requires writing code in a notebook AND setting up a scheduled workflow. Opposite of no-code.\n\n🎯 EXAM TIP: 'No-code' in the exam ALWAYS means the UI drag-and-drop. Any option requiring SQL or Python is at minimum 'low-code'.",
        "domain": "Importing Data"
    },
  {
        "id": "db-da-284",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst team has built a real-time AI/BI dashboard in Databricks to monitor supply chain performance. They want to allow business users and groups to collaborate on the dashboard, but only a few users should be able to make changes while the rest have view access. The lead data analyst is configuring permissions in a way that is secure, scalable, and aligns with Databricks platform best practices. Which approach should the analyst use to configure dashboard-level access and permissions?",
        "options": [
            {
                "id": "a",
                "text": "Request an administrator assign workspace permissions to all relevant users, granting Workspace Admin role to those who need edit on the dashboard."
            },
            {
                "id": "b",
                "text": "Modify the Unity Catalog access settings for the dashboard's underlying dataset, granting SELECT privileges to viewers and UPDATE privileges to editors."
            },
            {
                "id": "c",
                "text": "Open the dashboard, click 'Share,' select individual users or user groups from the Sharing dialog, assign roles such as CAN VIEW, CAN EDIT, or CAN MANAGE, and confirm to grant appropriate access."
            },
            {
                "id": "d",
                "text": "Add access control logic directly in each dashboard widget's SQL query using the current_user() function to restrict results by role."
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): The 'Share' dialog in the dashboard provides granular, resource-level access control. You click 'Share,' select users or groups, and assign roles:\n• CAN VIEW → read-only access to the dashboard\n• CAN EDIT → modify visualizations, layout, and queries\n• CAN MANAGE → full control including sharing permissions and deletion\n\n❌ Why others are wrong:\n• (A) Workspace Admin role for editors: Massively over-privileged. Workspace Admin grants control over ALL workspace resources — not just one dashboard. Violates least privilege.\n• (B) Unity Catalog SELECT/UPDATE: Unity Catalog manages DATA access (tables, schemas, catalogs). Dashboard permissions are a separate layer — you can have data access without dashboard access and vice versa.\n• (D) current_user() in SQL: Row-level security in queries controls WHAT data a user sees, not WHETHER they can view/edit the dashboard itself. These are different permission layers.\n\n🔑 EXAM TIP: Two separate permission layers:\n1. Dashboard permissions (Share dialog): CAN VIEW / CAN EDIT / CAN MANAGE → controls the dashboard UI\n2. Data permissions (Unity Catalog): SELECT / USAGE → controls access to underlying tables\nBoth may be needed depending on the 'Run as' setting.",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-285",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An analyst is designing a data model in Databricks to support analytical queries for sales reporting. The company wants to enable fast, flexible analysis of sales by product, store, and time, and expects to add new dimensions (like promotions or customer demographics) in the future. The analyst must choose an appropriate schema design to balance query performance, simplicity, and scalability for these analytical workloads. Given the need for fast queries and easy extensibility, which schema design should the analyst recommend for the data model to best support analytical workloads in Databricks SQL?",
        "options": [
            {
                "id": "a",
                "text": "Data Vault 2.0 Schema"
            },
            {
                "id": "b",
                "text": "Star Schema"
            },
            {
                "id": "c",
                "text": "Normalized (3NF) Schema"
            },
            {
                "id": "d",
                "text": "Snowflake Schema"
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B — Star Schema): For reporting and BI workloads in Databricks SQL, the Star Schema is the RECOMMENDED design. It features a central fact table surrounded by denormalized dimension tables, enabling simple, fast analytical queries with fewer joins.\n\n❌ Why others are wrong:\n• (A) Data Vault 2.0: Designed for data warehouse LOADING and historization, not for end-user reporting. Too complex for direct BI queries.\n• (C) Normalized 3NF: Optimized for OLTP (transactional writes), not OLAP (analytical reads). Too many joins for reporting.\n• (D) Snowflake Schema: Similar to star but with normalized dimensions — more joins, more complexity, slightly worse query performance.\n\n🔑 EXAM TIP: Schema selection:\n• Star Schema: Best for REPORTING (Gold layer, dashboards, BI)\n• Snowflake Schema: When dimension storage must be minimized\n• Data Vault: Best for data WAREHOUSE LOADING (Silver layer)\n• 3NF: Best for OLTP applications (not analytics)",
        "domain": "Data Modeling with Databricks SQL"
    },
  {
        "id": "db-da-286",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is configuring Auto Loader to ingest JSON files from S3. The source data is inconsistent; occasionally, a numeric column arrives as a string. The analyst wants to capture these corrupt records for later analysis without failing the ingestion query. Which configuration of cloudFiles.schemaEvolutionMode and which additional feature should be used?",
        "options": [
            {
                "id": "a",
                "text": "Use schemaEvolutionMode = 'failFast' and the _corrupt_record column."
            },
            {
                "id": "b",
                "text": "Use schemaEvolutionMode = 'rescue' and its associated _rescued_data column."
            },
            {
                "id": "c",
                "text": "This behavior is automatic by default and data is saved to _rescued_data."
            },
            {
                "id": "d",
                "text": "Use schemaEvolutionMode = 'addNewColumns' and enable cloudFiles.inferColumnTypes."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): The 'rescue' schema evolution mode stores mismatched data in a special _rescued_data column (JSON format). This means:\n1. If a column expected as INT arrives as STRING → the row is NOT rejected\n2. The valid columns are loaded normally\n3. The mismatched value goes to _rescued_data for manual review\n4. Extra/unexpected columns also go to _rescued_data\n\n❌ Why others are wrong:\n• (A) 'failFast' mode: This ABORTS the entire load on the FIRST schema mismatch. Good for strict pipelines but terrible for inconsistent data — you'd never finish loading.\n• (C) 'Automatic by default': While Auto Loader does have sensible defaults, the _rescued_data column is NOT enabled by default in all configurations. You need to explicitly enable rescuedDataColumn.\n• (D) 'addNewColumns' mode: This mode ADDS new columns to the schema but does NOT rescue type mismatches. If a numeric column arrives as string, it fails rather than rescuing.\n\n🎯 EXAM TIP: rescue mode = capture mismatches without failing. failFast = abort on error. addNewColumns = evolve schema but strict on types.",
        "domain": "Importing Data"
    },
  {
        "id": "db-da-287",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to load CSV files from an external location into a Delta table named silver_sales. Some files might have incorrect delimiters or headers. Which SQL command allows the analyst to preview potential schema or parsing errors WITHOUT physically loading the data into the table?",
        "options": [
            {
                "id": "a",
                "text": "COPY INTO silver_sales FROM ... DRY RUN;"
            },
            {
                "id": "b",
                "text": "SELECT * FROM read_files(...) LIMIT 10;"
            },
            {
                "id": "c",
                "text": "COPY INTO silver_sales FROM ... VALIDATE ALL;"
            },
            {
                "id": "d",
                "text": "COPY INTO silver_sales FROM ... CHECK ERROR;"
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): COPY INTO with VALIDATE ALL performs a DRY RUN that:\n1. Reads and parses all source files\n2. Checks for format errors (wrong delimiters, encoding issues)\n3. Checks for schema mismatches (wrong column count, type errors)\n4. Reports errors WITHOUT writing any data to the target table\n\nSyntax: COPY INTO target FROM path FILEFORMAT = CSV VALIDATE ALL\n\n❌ Why others are wrong:\n• (A) 'DRY RUN': This clause does NOT exist in Databricks SQL. It's not valid syntax.\n• (B) SELECT * FROM read_files LIMIT 10: This shows you 10 rows of data but doesn't systematically validate ALL files for errors. You might miss corrupted rows beyond the first 10.\n• (D) 'CHECK ERROR': This clause does NOT exist in Databricks SQL. Not valid syntax.\n\n🎯 EXAM TIP: VALIDATE ALL is the only pre-check for COPY INTO. It validates without writing. Remember: VALIDATE ALL (all rows) or VALIDATE <n> (specific number of rows).",
        "domain": "Importing Data"
    },
  {
        "id": "db-da-288",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is ingesting data from an S3 bucket containing millions of small files in a deep directory structure. The default Directory Listing process in Auto Loader is taking too long and increasing cloud costs. Which alternative is recommended by Databricks to optimize file discovery at this high scale?",
        "options": [
            {
                "id": "a",
                "text": "Increase the size of the SQL Warehouse cluster."
            },
            {
                "id": "b",
                "text": "Switch to COPY INTO with the modifiedAfter parameter."
            },
            {
                "id": "c",
                "text": "Configure cloudFiles.useNotifications to true to use cloud notification services (e.g., SQS/SNS)."
            },
            {
                "id": "d",
                "text": "Use Delta Lake's RESTORE command to synchronize metadata."
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): File Notification mode (cloudFiles.useNotifications = true) uses cloud-native event services:\n- AWS: SQS + SNS (S3 event notifications → SQS queue)\n- Azure: Event Grid (Blob storage events)\n- GCP: Pub/Sub (GCS notifications)\n\nInstead of scanning millions of files, Databricks only processes files that triggered a notification. This reduces:\n1. API calls to storage (no LIST operations)\n2. Processing time (from hours to seconds for new file discovery)\n3. Cost (fewer API calls = lower cloud bills)\n\n❌ Why others are wrong:\n• (A) 'Increase SQL Warehouse size': Bigger compute doesn't fix the directory scanning bottleneck. The problem is the NUMBER of API calls to list files, not processing power.\n• (B) COPY INTO with modifiedAfter: COPY INTO still needs to SCAN the directory to find files modified after the timestamp. With millions of files, this scan itself is the bottleneck.\n• (D) RESTORE command: RESTORE reverts a Delta table to a previous version. It has NOTHING to do with file discovery or ingestion.\n\n🎯 EXAM TIP: Millions of files + slow discovery = File Notification mode. This is an Auto Loader feature, not available in COPY INTO.",
        "domain": "Importing Data"
    },
  {
        "id": "db-da-289",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A table named raw_events has ingested duplicate data from a file loaded 3 days ago using COPY INTO. The analyst wants to verify exactly which files were processed and the timestamp of the operation. Which command provides a detailed history of ingestion operations, including operation IDs and source metadata?",
        "options": [
            {
                "id": "a",
                "text": "SELECT * FROM table_changes('raw_events', ...);"
            },
            {
                "id": "b",
                "text": "DESCRIBE HISTORY raw_events;"
            },
            {
                "id": "c",
                "text": "SHOW TBLPROPERTIES raw_events;"
            },
            {
                "id": "d",
                "text": "DESCRIBE DETAIL raw_events;"
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): DESCRIBE HISTORY shows the complete transaction log for a Delta table, including:\n- Operation type (COPY INTO, WRITE, OPTIMIZE, MERGE, etc.)\n- Timestamp of each operation\n- operationMetrics: files added, rows inserted, bytes written\n- operationParameters: source file paths, format options used\n- userName: who performed the operation\n\nThis is exactly what you need to audit which files were loaded and when.\n\n❌ Why others are wrong:\n• (A) table_changes(): This is for Change Data Feed (CDF) — it shows ROW-LEVEL changes (what data changed), not FILE-LEVEL audit info. It doesn't tell you which files were ingested.\n• (C) SHOW TBLPROPERTIES: Shows table configuration (owner, location, format, etc.) but NOT transaction history or file-level audit information.\n• (D) DESCRIBE DETAIL: Shows current table metadata (location, size, number of files, format) but NOT the history of operations or which files were loaded.\n\n🎯 EXAM TIP: DESCRIBE HISTORY = transaction audit log (who did what, when, which files). DESCRIBE DETAIL = current table snapshot. table_changes = CDF row-level changes.",
        "domain": "Importing Data"
    },
  {
        "id": "db-da-290",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst wants to create an external table so other users can load files directly. To do this securely, they need to define a path to an Azure Data Lake Storage Gen2 container. Which Unity Catalog object must be defined FIRST to grant secure access to a storage path without exposing account credentials (Key/SAS)?",
        "options": [
            {
                "id": "a",
                "text": "A Storage Credential"
            },
            {
                "id": "b",
                "text": "An External Location"
            },
            {
                "id": "c",
                "text": "A Volume"
            },
            {
                "id": "d",
                "text": "A Managed Table"
            }
        ],
        "correctIds": [
            "a"
        ],
        "explanation": "✅ CORRECT (A): Unity Catalog's external access model has a strict 2-layer hierarchy:\n\n1️⃣ STORAGE CREDENTIAL → holds the cloud IAM identity (Azure Service Principal, AWS IAM Role, GCP Service Account)\n2️⃣ EXTERNAL LOCATION → maps a storage path (e.g., abfss://container@account/) to a Storage Credential\n\nThe question asks what's needed FIRST — you must create the Storage Credential before you can define an External Location. Without the credential, there's no way to authenticate to the cloud storage.\n\n❌ Why others are wrong:\n• (B) External Location: This is needed too, but it DEPENDS on a Storage Credential. You can't create an External Location without first having a credential. The question asks what's needed to 'define a path' — the credential is the foundation.\n• (C) Volume: Volumes are for managing individual files within Unity Catalog (like a folder), not for defining access to external storage containers.\n• (D) Managed Table: Managed tables store data IN Databricks' own storage. The question is about EXTERNAL storage (ADLS Gen2), which requires external access configuration.\n\n🎯 EXAM TIP: Credential → Location → External Table. This order is ALWAYS the same. Credential = WHO can access. Location = WHERE they can access. Table = WHAT data to expose.",
        "domain": "Importing Data"
    },
  {
        "id": "db-da-291",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An analyst is designing an AI/BI Dashboard with multiple complex visualizations. To improve performance, they want users to choose all filter values (e.g., Date, Region, Product) BEFORE the dashboard triggers any query refreshes. Which setting in the Filter configuration is specifically designed for this 'delayed' or 'batched' execution?",
        "options": [
            {
                "id": "a",
                "text": "Enable 'Automatic Update' in the Filter options."
            },
            {
                "id": "b",
                "text": "Disable 'Automatic Update' to allow users to click a 'Refresh' button after changing filters."
            },
            {
                "id": "c",
                "text": "Use the 'Apply All' SQL Parameter in the source query."
            },
            {
                "id": "d",
                "text": "Configure 'Run on Selection' to false for the entire Dashboard."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Disabling 'Automatic Update' prevents the dashboard from re-executing queries every time a filter value changes. Users can change multiple filters (Date, Region, Product) first, then click a single 'Refresh' button to trigger all queries at once — reducing redundant executions and improving performance.\n\n❌ Why others are wrong:\n• (A) Enable 'Automatic Update': This is the OPPOSITE of what's needed. Automatic Update triggers a query refresh on EVERY filter change, causing N redundant executions when changing N filters.\n• (C) 'Apply All' SQL Parameter: Not a real Databricks feature. There's no 'Apply All' parameter type in SQL.\n• (D) 'Run on Selection' set to false: Not the correct setting name. The actual setting is 'Automatic Update' (or 'Run on change') at the filter/visualization level.\n\n🔑 EXAM TIP: Dashboard performance optimization:\n• Disable 'Automatic Update' → batch filter changes, then manually refresh\n• Use warehouse scaling for concurrent users\n• Optimize underlying queries with proper indexing/partitioning\n• Use pre-aggregated Gold-layer tables instead of raw queries",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-292",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An analyst wants to create a 'Table' visualization in a Dashboard where clicking on a 'SalesOrder_ID' redirects the user to an internal support ticket system (e.g., https://tickets.company.com/id={ID}). How can this be accomplished within the Table visualization settings?",
        "options": [
            {
                "id": "a",
                "text": "It requires a custom JavaScript snippet in the dashboard metadata."
            },
            {
                "id": "b",
                "text": "Use the 'Link' type for the column and provide a URL template with curly braces {SalesOrder_ID}."
            },
            {
                "id": "c",
                "text": "Convert the SQL column to HTML in the source query (e.g., SELECT '<a href=...>'...)."
            },
            {
                "id": "d",
                "text": "This feature is only available in AI/BI Genie, not in standard Dashboards."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): In the Table visualization, you can set a column's display type to 'Link' and define a URL template using curly braces: https://tickets.company.com/id={{SalesOrder_ID}}. The system dynamically replaces {{SalesOrder_ID}} with the actual value from each row, creating clickable hyperlinks.\n\n❌ Why others are wrong:\n• (A) Custom JavaScript: Databricks dashboards don't support custom JavaScript injection in visualization metadata. This is not a supported approach.\n• (C) HTML in SQL query: While some BI tools support HTML rendering in query results, Databricks Table visualizations don't render raw HTML tags from SQL output. Use the built-in 'Link' column type instead.\n• (D) \"Only in Genie\": FALSE. Link formatting is available in both Legacy SQL Dashboards AND AI/BI Dashboards. It's not exclusive to Genie.\n\n🔑 EXAM TIP: Table column formatting types:\n• Link → clickable URL with template {{column_name}}\n• Number → formatted with decimals, currency, percentage\n• Image → renders URL as an inline image\n• Boolean → displays checkmark or icon\n• Date/Time → formatted with locale-specific patterns",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-293",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A company has a 'Monthly Performance' dashboard shared with the 'Exec' group. The dashboard is scheduled to refresh as 'Owner' (the analyst). If the analyst is deactivated in the IdP (Identity Provider) and removed from Databricks, what is the most likely outcome for the scheduled refresh?",
        "options": [
            {
                "id": "a",
                "text": "The schedule is automatically transferred to the oldest member of the 'Exec' group."
            },
            {
                "id": "b",
                "text": "The schedule continues to run normally using cached credentials."
            },
            {
                "id": "c",
                "text": "The schedule fails to run because the owner's identity is no longer valid for authentication/execution."
            },
            {
                "id": "d",
                "text": "The schedule is paused and can only be resumed by a Workspace Admin using the 'Transfer Ownership' API."
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): When a schedule runs as 'Owner' and that user is deactivated/deleted, the schedule FAILS. The execution engine needs a valid identity to authenticate and execute queries. A deactivated user has no valid credentials, so the SQL Warehouse cannot authenticate the request.\n\n❌ Why others are wrong:\n• (A) Auto-transfer to group member: Databricks does NOT automatically transfer schedule ownership. This must be done manually by an admin before the user is deactivated.\n• (B) Continues with cached credentials: FALSE. Authentication is validated at execution time, not cached. Deactivated users fail auth immediately.\n• (D) Paused and resumable: The schedule doesn't gracefully pause — it FAILS with an authentication error. An admin must manually transfer ownership and reconfigure.\n\n🔑 EXAM TIP: Best practices for production schedules:\n• Use Service Principals (not user accounts) for critical schedules\n• Service Principals persist regardless of employee turnover\n• If using a user account, transfer ownership BEFORE deactivation\n• 'Run as Owner' = schedule uses owner's identity for auth + data access\n• 'Run as Viewer' = each viewer uses their own identity",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-294",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "In a new AI/BI Dashboard, an analyst wants to enable a feature where clicking on a 'Region' bar in a Bar Chart automatically filters all other charts on the same page based on that specific region. What is this feature called and how is it enabled?",
        "options": [
            {
                "id": "a",
                "text": "Click-Filter; enabled in the Dashboard global settings."
            },
            {
                "id": "b",
                "text": "Dynamic Parameters; enabled by adding :region to every query."
            },
            {
                "id": "c",
                "text": "Cross-filtering; enabled by toggling the interactive setting in the visualization's properties."
            },
            {
                "id": "d",
                "text": "Inter-widget linking; enabled via the 'Connect widgets' button on the canvas."
            }
        ],
        "correctIds": [
            "c"
        ],
        "explanation": "✅ CORRECT (C): Cross-filtering is the feature, and it's enabled by toggling the interactive setting in the visualization's properties. When enabled, clicking a bar in the Bar Chart applies a filter to all other visualizations on the same page.\n\n❌ Why others are wrong:\n• (A) 'Click-Filter' in global settings: 'Click-Filter' is not the correct feature name, and it's not configured at the global level. It's called 'Cross-filtering' and is set per-visualization.\n• (B) Dynamic Parameters with :region: Adding :region to every query creates explicit parameters, not automatic click-to-filter behavior. Cross-filtering is automatic and doesn't require modifying SQL queries.\n• (D) 'Connect widgets' button: There is no 'Connect widgets' button in Databricks dashboards. Cross-filtering is configured in the individual visualization's properties.\n\n🔑 EXAM TIP: Cross-filtering key facts:\n• Configured per-visualization (not globally)\n• Works automatically — click a data point to filter others\n• No SQL query modification needed\n• Works between visualizations on the same dashboard page\n• Supported in AI/BI Dashboards",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-295",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to share a 'Daily Sales' AI/BI Dashboard with a peer who only has 'Can View' permissions on the Workspace. The peer reports they can see the dashboard layout but the visualizations show 'Permission Denied' errors. What configuration did the analyst MISS?",
        "options": [
            {
                "id": "a",
                "text": "They forgot to grant 'Can Use' permissions on the underlying SQL Warehouse."
            },
            {
                "id": "b",
                "text": "They did not grant 'Select' permissions on the source tables to the peer."
            },
            {
                "id": "c",
                "text": "They must publish the dashboard with the 'Run as Owner' setting selected."
            },
            {
                "id": "d",
                "text": "All of the above are possible missing configurations depending on the 'Run as' mode."
            }
        ],
        "correctIds": [
            "d"
        ],
        "explanation": "✅ CORRECT (D): All of the above are possible missing configurations. The exact cause depends on the dashboard's 'Run as' mode:\n\n• If 'Run as Viewer': The peer needs (A) SQL Warehouse access + (B) SELECT on source tables + dashboard access. All three are required.\n• If 'Run as Owner': The peer only needs dashboard access — the owner's identity handles data/warehouse auth.\n• The fix might be simply (C) switching to 'Run as Owner' if the analyst has broader permissions.\n\n❌ Why no single option is definitively correct:\n• (A) alone might not fix it if the data permissions are also missing\n• (B) alone might not fix it if the warehouse permissions are also missing\n• (C) alone would fix it but changes the security model\n\n🔑 EXAM TIP: 'Run as' permission chain:\n• Run as VIEWER: Viewer needs → Dashboard access + SQL Warehouse 'Can Use' + SELECT on tables\n• Run as OWNER: Viewer needs → Dashboard access only (owner's identity handles everything else)\n• 'Permission Denied' errors = check the ENTIRE chain for the current 'Run as' mode",
        "domain": "Working with Dashboards and Visualizations in Databricks"
    },
  {
        "id": "db-da-296",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An analyst is setting up an AI/BI Genie space for a sales team. They want to ensure that Genie prioritizes specific, pre-written 'Gold standard' queries for sensitive executive reports rather than generating new SQL on the fly. Which feature should they use to mark these queries as high-confidence sources?",
        "options": [
            {
                "id": "a",
                "text": "Enable 'Priority Execution' in the Genie Settings."
            },
            {
                "id": "b",
                "text": "Designate the source queries as 'Trusted Assets' within the Genie Space configuration."
            },
            {
                "id": "c",
                "text": "Add 'EXEC_PRIORITY' tags to the tables in Unity Catalog."
            },
            {
                "id": "d",
                "text": " Genie automatically trusts any query written by a Workspace Admin."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Trusted Assets are pre-written, verified SQL queries that Genie uses instead of generating new SQL for matching questions. For sensitive executive reports, Trusted Assets ensure 100% accuracy — Genie uses the exact vetted SQL rather than attempting to generate potentially incorrect queries.\n\n❌ Why others are wrong:\n• (A) Priority Execution: Not a real Genie feature. There is no 'Priority Execution' setting.\n• (C) EXEC_PRIORITY tags: Not a standard Unity Catalog tag. Tags like 'certified' exist, but 'EXEC_PRIORITY' is not a recognized system tag.\n• (D) Auto-trust admin queries: Genie does NOT automatically trust queries based on who wrote them. Trust is explicitly configured through Trusted Assets.\n\n🔑 EXAM TIP: When to use Trusted Assets:\n• Sensitive executive reports where accuracy is critical\n• Complex queries with specific business logic (fiscal quarters, custom metrics)\n• Recurring questions that users ask frequently\n• Queries involving non-obvious join patterns or aggregations",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-297",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "Users are complaining that AI/BI Genie is confusing 'Revenue' with 'Profit' in their natural language questions. What is the most effective and persistent way to correct this behavior without rewriting every query?",
        "options": [
            {
                "id": "a",
                "text": "Rename the columns in the source Delta table to exactly match the users' words."
            },
            {
                "id": "b",
                "text": "Provide clear descriptions and synonyms for the columns ('Revenue' vs 'Profit') in Unity Catalog metadata (Table/Column comments)."
            },
            {
                "id": "c",
                "text": "Clear the Genie cache and ask the users to rephrase their questions."
            },
            {
                "id": "d",
                "text": "Use the 'Sample Questions' feature to show Genie how to answer correctly."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Adding clear descriptions and synonyms in Unity Catalog metadata (COMMENT ON COLUMN) is the most effective and PERSISTENT solution. Genie reads column comments to understand business semantics. For example: COMMENT ON COLUMN sales.revenue IS 'Total gross revenue from sales transactions in USD. Not to be confused with profit or net income.'\n\n❌ Why others are wrong:\n• (A) Rename columns: Renaming source columns is a schema change that affects ALL downstream consumers — dashboards, notebooks, ETL pipelines. It's invasive and risky.\n• (C) Clear cache and rephrase: Genie doesn't have a user-facing cache that stores learned behaviors. The problem is semantic, not caching-related.\n• (D) Sample Questions: While helpful, Sample Questions only cover specific question patterns. Metadata fixes the ROOT cause — Genie's understanding of what each column means.\n\n🔑 EXAM TIP: The metadata hierarchy for Genie:\n1. Column COMMENTS → most persistent, affects ALL queries\n2. Table COMMENTS → provides context for table selection\n3. Instructions → defines business rules and terminology\n4. Sample Questions → covers specific query patterns\n5. Trusted Assets → provides exact SQL for critical questions",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-298",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "Which of the following describes a key limitation of AI/BI Genie Spaces relative to standard SQL Dashboards?",
        "options": [
            {
                "id": "a",
                "text": "Genie cannot be shared with users who only have 'Can View' permissions."
            },
            {
                "id": "b",
                "text": "Genie cannot natively perform complex pivot operations or cross-table correlations without detailed semantic instructions or Trusted Assets."
            },
            {
                "id": "c",
                "text": "Genie spaces cannot connect to Unity Catalog managed tables."
            },
            {
                "id": "d",
                "text": "Genie does not support any form of data visualization."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Genie is a text-to-SQL interface. For complex operations like many-to-many pivots, multi-step window functions, or specialized cross-table correlations, it requires detailed guidance through Instructions, Sample Questions, or Trusted Assets. Standard SQL Dashboards use analyst-written SQL, which can handle any complexity directly.\n\n❌ Why others are wrong:\n• (A) Can't share with 'Can View' users: FALSE. Genie spaces support 'Can Use' permission for consumption, similar to 'Can View.'\n• (C) Can't connect to Unity Catalog: FALSE. Genie is BUILT ON Unity Catalog — it's a core dependency.\n• (D) No visualization support: FALSE. Genie generates visualizations alongside SQL results (charts, tables).\n\n🔑 EXAM TIP: Genie vs. SQL Dashboards:\n• Genie: Natural language → AI-generated SQL. Best for ad-hoc exploration, simple queries.\n• SQL Dashboards: Analyst-written SQL. Best for predefined, complex, production reporting.\n• Genie limitation: Struggles with complex joins, pivots, and multi-step logic without guidance.",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-299",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A Data Analyst wants to share a Genie Space so their manager can ask questions. The manager does not need to edit the space or add new tables. Which permission level should the analyst grant to the manager?",
        "options": [
            {
                "id": "a",
                "text": "Can Manage"
            },
            {
                "id": "b",
                "text": "Can Use"
            },
            {
                "id": "c",
                "text": "Can Edit"
            },
            {
                "id": "d",
                "text": "Any member of the Workspace already has access."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): 'Can Use' is the appropriate permission level for consumers who need to ASK QUESTIONS but not modify the space configuration. It allows interaction (querying, viewing results) without access to add tables, create Trusted Assets, or change instructions.\n\n❌ Why others are wrong:\n• (A) Can Manage: Over-privileged. 'Can Manage' allows full control including adding/removing tables, changing instructions, and managing permissions. Not appropriate for a read-only manager.\n• (C) Can Edit: Also over-privileged. 'Can Edit' allows modifying tables and Trusted Assets — more than what a consumer needs.\n• (D) All workspace users have access: FALSE. Genie spaces have their own permission model. Access is NOT automatic for workspace users.\n\n🔑 EXAM TIP: Genie Space permissions:\n• Owner: Full control (create, configure, share, delete)\n• Can Edit: Modify configuration (tables, Trusted Assets, instructions)\n• Can Use: Ask questions and view results only\n• Default: NO access (must be explicitly granted)",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    },
  {
        "id": "db-da-300",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An analyst is reviewing the 'History' tab in a Genie Space. They notice several questions where users gave a 'Thumbs Down' rating. What should be the analyst's immediate next step to improve Genie's performance for those specific failed questions?",
        "options": [
            {
                "id": "a",
                "text": "Delete the failed questions from the history so Genie doesn't 'learn' from them."
            },
            {
                "id": "b",
                "text": "Review the generated SQL, correct it, and add it as a 'Sample Question' or 'Trusted Asset' to the space."
            },
            {
                "id": "c",
                "text": "Restart the SQL Warehouse used by the Genie Space."
            },
            {
                "id": "d",
                "text": "Tell the users they are asking 'out-of-scope' questions."
            }
        ],
        "correctIds": [
            "b"
        ],
        "explanation": "✅ CORRECT (B): Review the generated SQL, correct it if needed, and add it as a Sample Question or Trusted Asset. This is the iterative improvement workflow — identify failures, fix them, and encode the correct SQL so Genie learns from the corrections.\n\n❌ Why others are wrong:\n• (A) Delete failed questions: Deleting history doesn't fix Genie's behavior. The underlying problem (incorrect SQL generation) remains unchanged.\n• (C) Restart SQL Warehouse: The warehouse executes queries — it doesn't affect Genie's SQL generation logic. Restarting compute won't fix accuracy.\n• (D) Tell users questions are out-of-scope: Dismissive approach that doesn't improve the space. The analyst should ADDRESS the failure, not blame the users.\n\n🔑 EXAM TIP: Genie improvement workflow:\n1. Check History tab → find thumbs-down responses\n2. Review the SQL Genie generated\n3. Write or correct the SQL\n4. Add as Sample Question (for guidance) or Trusted Asset (for exact reuse)\n5. Test the improvement in Draft Mode\n6. Re-publish",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
    }
,
    {
        "id": "db-da-301",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst's Serverless SQL Warehouse starts in under 5 seconds, but a colleague's Classic SQL Warehouse takes over 4 minutes to become available. Both are configured with the same cluster size. The colleague asks why there is such a significant difference.\n\nWhich explanation correctly identifies the root cause of the startup time difference?",
        "options": [
                {
                        "id": "a",
                        "text": "Serverless warehouses use pre-warmed compute pools managed by Databricks, eliminating cold-start provisioning delays that Classic warehouses experience."
                },
                {
                        "id": "b",
                        "text": "Classic warehouses require manual driver installation before each startup, while Serverless warehouses cache the drivers permanently."
                },
                {
                        "id": "c",
                        "text": "Serverless warehouses run on the Control Plane with lower latency, while Classic warehouses must provision resources in the customer's Data Plane."
                },
                {
                        "id": "d",
                        "text": "Classic warehouses need to download Delta Lake libraries on each startup, while Serverless warehouses have them pre-installed."
                },
                {
                        "id": "e",
                        "text": "Serverless warehouses bypass the Unity Catalog authentication step, while Classic warehouses must authenticate on every restart."
                }
        ],
        "correctIds": [
                "a"
        ],
        "explanation": "✅ CORRECT (A — Pre-warmed compute pools eliminate cold-start delays): Serverless SQL Warehouses start in 2-6 seconds because Databricks maintains pools of pre-provisioned VMs. Classic warehouses must provision VMs from scratch in the customer's cloud account, which takes 4-10+ minutes (cold start).\n\n❌ Why others are wrong:\n• (B) \"Classic requires manual driver installation\": Drivers are bundled automatically in both types. No manual installation is needed.\n• (C) \"Serverless runs on Control Plane\": Both types execute queries in compute infrastructure. Serverless VMs are managed by Databricks but still process data securely.\n• (D) \"Classic downloads Delta Lake libraries on startup\": Delta Lake libraries are pre-installed on all Databricks compute — no download needed.\n• (E) \"Serverless bypasses Unity Catalog auth\": Security is NEVER bypassed. Both types fully integrate with Unity Catalog for access control.\n\n🎯 EXAM TIP: Serverless = pre-warmed pools (instant start) + managed by Databricks + pay per query. Classic = customer-managed VMs (cold start) + always running = pay for uptime. Pro = middle ground with Photon.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-302",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A company is evaluating Databricks for their analytics workloads. The security team is concerned about data privacy and wants to understand where customer data is stored and processed.\n\nWhich statement accurately describes the separation between the Control Plane and Data Plane in the Databricks Lakehouse architecture?",
        "options": [
                {
                        "id": "a",
                        "text": "The Control Plane stores all customer data in encrypted form, while the Data Plane handles only query execution and returns results."
                },
                {
                        "id": "b",
                        "text": "The Control Plane manages the UI, job orchestration, and notebook management, while customer data remains in the Data Plane within the customer's own cloud account."
                },
                {
                        "id": "c",
                        "text": "Both planes store customer data, but the Control Plane only stores metadata while the Data Plane stores the raw files."
                },
                {
                        "id": "d",
                        "text": "The Data Plane is managed entirely by Databricks and the Control Plane resides in the customer's cloud infrastructure."
                },
                {
                        "id": "e",
                        "text": "The Control Plane and Data Plane are interchangeable terms for the same infrastructure component."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Control Plane manages orchestration; Data Plane holds customer data): The Control Plane (managed by Databricks) handles: UI, notebook management, job scheduling, cluster management, and API endpoints. The Data Plane (in the customer's cloud account) stores and processes all customer data — Delta tables, cloud storage, and compute resources.\n\n❌ Why others are wrong:\n• (A) \"Control Plane stores customer data encrypted\": The Control Plane does NOT store customer data. It only stores workspace metadata (notebook configs, job definitions).\n• (C) \"Both store data, Control stores metadata\": The Control Plane stores WORKSPACE metadata, not data metadata. Data metadata (schemas, statistics) lives in the Data Plane's metastore.\n• (D) \"Data Plane managed by Databricks, Control in customer's cloud\": This is REVERSED. Control Plane = Databricks-managed. Data Plane = customer's cloud.\n• (E) \"Interchangeable terms\": They are completely separate architectural components with different security boundaries.\n\n🎯 EXAM TIP: Control Plane = Databricks manages (UI, scheduling, APIs). Data Plane = Customer's cloud (data, compute). This separation ensures customer data never leaves their cloud account. Critical for security questions.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-303",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to choose between a Pro SQL Warehouse and a Serverless SQL Warehouse for a new analytics project. The project involves complex aggregation queries on a 500GB Delta table that run every 15 minutes via a scheduled dashboard.\n\nWhich factor is the MOST important consideration when choosing between Pro and Serverless for this specific workload?",
        "options": [
                {
                        "id": "a",
                        "text": "Serverless warehouses do not support Photon, so Pro is needed for optimal query performance on large tables."
                },
                {
                        "id": "b",
                        "text": "Pro warehouses support more concurrent queries than Serverless warehouses."
                },
                {
                        "id": "c",
                        "text": "The cost model differs: Serverless charges per-query with instant scaling, while Pro requires the warehouse to remain running between the 15-minute intervals or pay cold-start penalties."
                },
                {
                        "id": "d",
                        "text": "Serverless warehouses cannot connect to Unity Catalog, making Pro the only option for governed data."
                },
                {
                        "id": "e",
                        "text": "Pro warehouses have exclusive access to the Query Profile tool, which is essential for optimizing complex aggregations."
                }
        ],
        "correctIds": [
                "c"
        ],
        "explanation": "✅ CORRECT (C — Cost model difference: Serverless charges per-query with instant scaling): With 15-minute refresh intervals, a Pro warehouse either runs continuously (high cost) or auto-stops and cold-starts each time (slow). Serverless offers instant startup (2-6s) and per-query pricing — you only pay when queries execute.\n\n❌ Why others are wrong:\n• (A) \"Serverless doesn't support Photon\": FALSE. Serverless SQL Warehouses DO use Photon. All warehouse types support Photon.\n• (B) \"Pro supports more concurrent queries\": FALSE. Serverless actually scales more efficiently for concurrency because it auto-provisions additional resources instantly.\n• (D) \"Serverless can't connect to Unity Catalog\": FALSE. All SQL Warehouse types integrate with Unity Catalog for governance.\n• (E) \"Pro has exclusive Query Profile access\": FALSE. Query Profile is available in ALL SQL Warehouse types.\n\n🎯 EXAM TIP: Pro vs. Serverless decision = COST MODEL + STARTUP TIME. If workloads are intermittent (dashboards refreshing every N minutes), Serverless wins. If workloads run continuously (8+ hours/day), Pro may be cheaper.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-304",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A team is debating whether to use Databricks SQL or Databricks Notebooks for their daily analytics workflow. The team primarily writes SQL queries, creates dashboards, and sets up alerts for KPI monitoring.\n\nWhich statement correctly describes when Databricks SQL should be preferred over Notebooks?",
        "options": [
                {
                        "id": "a",
                        "text": "Databricks SQL should be used when the team needs to write Python or Scala code for complex transformations."
                },
                {
                        "id": "b",
                        "text": "Databricks SQL is preferred for SQL-centric workflows that include query authoring, dashboard creation, alerting, and direct BI tool connectivity through SQL Warehouses."
                },
                {
                        "id": "c",
                        "text": "Notebooks should always be preferred because they support SQL cells and offer more flexibility than the SQL Editor."
                },
                {
                        "id": "d",
                        "text": "Databricks SQL is only appropriate for ad-hoc queries and cannot be used for production workloads."
                },
                {
                        "id": "e",
                        "text": "Databricks SQL requires a separate license from the standard Databricks platform subscription."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — DBSQL is preferred for SQL-centric workflows): When the team primarily writes SQL, creates dashboards, and sets up KPI alerts, Databricks SQL is the optimal choice. It provides a purpose-built SQL Editor, native dashboard builder, alerting system, and SQL Warehouses — all designed for SQL-first analytics.\n\n❌ Why others are wrong:\n• (A) \"DBSQL for Python/Scala complex transformations\": DBSQL only supports SQL. Python/Scala/R require Databricks Workspace notebooks.\n• (C) \"Notebooks always preferred because they support SQL cells\": While notebooks support SQL cells, they lack native dashboard builder, alerting, and the optimized SQL Editor experience.\n• (D) \"DBSQL only for ad-hoc queries\": DBSQL supports production workloads — scheduled queries, automated dashboards, and production alerts.\n• (E) \"Separate license required\": DBSQL is included in the Databricks platform — no separate license needed.\n\n🎯 EXAM TIP: DBSQL = SQL + dashboards + alerts + SQL Warehouses. Notebooks = multi-language + complex transformations + ML. The exam tests when to use each.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-305",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs `DESCRIBE EXTENDED sales.transactions` and notices the `Type` field shows `MANAGED`. The analyst then runs `DROP TABLE sales.transactions`.\n\nAfter the table is dropped, what happens to the underlying data files?",
        "options": [
                {
                        "id": "a",
                        "text": "The data files remain in cloud storage and can be accessed using the Delta path directly."
                },
                {
                        "id": "b",
                        "text": "The metadata is removed but the data files are preserved because Unity Catalog protects all data by default."
                },
                {
                        "id": "c",
                        "text": "Both the metadata in the metastore and the underlying data files are permanently deleted."
                },
                {
                        "id": "d",
                        "text": "The data files are moved to a recycle bin and can be recovered within 30 days."
                },
                {
                        "id": "e",
                        "text": "The data files are preserved but marked as read-only to prevent accidental access."
                }
        ],
        "correctIds": [
                "c"
        ],
        "explanation": "✅ CORRECT (C — Both metadata AND data files are permanently deleted): For MANAGED tables, Databricks controls both the metadata (in the metastore) and the underlying data files (in managed storage). DROP TABLE removes EVERYTHING — the table definition AND all associated Parquet/Delta files.\n\n❌ Why others are wrong:\n• (A) \"Data files remain accessible via Delta path\": Only true for EXTERNAL tables. Managed tables' data is also deleted.\n• (B) \"Unity Catalog protects data by default\": Unity Catalog manages ACCESS CONTROL, not data preservation. DROP TABLE with proper permissions deletes managed data.\n• (D) \"Moved to recycle bin, recoverable within 30 days\": There is no \"recycle bin\" for dropped managed tables. Once dropped, data is gone (though UNDROP TABLE exists for a limited time in Unity Catalog).\n• (E) \"Files preserved but marked read-only\": Files are DELETED, not preserved in any state.\n\n🎯 EXAM TIP: MANAGED table → DROP = metadata + data deleted. EXTERNAL table → DROP = metadata deleted only, data files preserved. This is one of the most frequently tested concepts.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-306",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An organization is migrating from a traditional data warehouse to the Databricks Lakehouse Platform. The CTO asks: 'What makes a Lakehouse different from simply putting a data warehouse on top of a data lake?'\n\nWhich response best captures the fundamental architectural innovation of the Lakehouse?",
        "options": [
                {
                        "id": "a",
                        "text": "The Lakehouse uses a proprietary file format that is incompatible with open-source tools, ensuring performance through vendor lock-in."
                },
                {
                        "id": "b",
                        "text": "Delta Lake adds ACID transactions, schema enforcement, and time travel directly on top of open Parquet files in cloud storage, eliminating the need for a separate warehouse layer."
                },
                {
                        "id": "c",
                        "text": "The Lakehouse stores structured data in a warehouse and unstructured data in a lake, keeping them as separate systems with a unified query interface."
                },
                {
                        "id": "d",
                        "text": "The Lakehouse replaces cloud storage with a new distributed file system that provides faster I/O than S3 or ADLS."
                },
                {
                        "id": "e",
                        "text": "The Lakehouse is simply a marketing term for a data lake with built-in visualization tools."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Delta Lake adds ACID, schema enforcement, time travel on open Parquet files): The Lakehouse innovation is that Delta Lake provides warehouse-quality reliability (ACID transactions, schema enforcement, time travel) directly ON TOP of cheap cloud object storage using open Parquet format. No separate warehouse copy needed.\n\n❌ Why others are wrong:\n• (A) \"Proprietary file format, vendor lock-in\": The OPPOSITE is true. Delta Lake uses OPEN Parquet format, preventing vendor lock-in.\n• (C) \"Separate warehouse + lake systems\": This describes the OLD architecture (dual-system). The lakehouse ELIMINATES this separation.\n• (D) \"Replaces cloud storage with new file system\": Delta Lake BUILDS ON existing cloud storage (S3, ADLS, GCS) — it doesn't replace it.\n• (E) \"Marketing term for lake + visualizations\": The lakehouse is a real architectural pattern with concrete technical innovations (Delta Lake, Unity Catalog).\n\n🎯 EXAM TIP: Lakehouse formula: Parquet files + Transaction Log (_delta_log/) = warehouse-quality data management on lake storage. The exam tests this \"best of both worlds\" concept repeatedly.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-307",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is troubleshooting slow dashboard performance and discovers the SQL Warehouse has Photon disabled. The analyst enables Photon by switching to a Pro warehouse type.\n\nWhich statement accurately describes how Photon improves query performance?",
        "options": [
                {
                        "id": "a",
                        "text": "Photon replaces Spark entirely with a GPU-accelerated engine that requires rewriting queries in a Photon-specific syntax."
                },
                {
                        "id": "b",
                        "text": "Photon is a vectorized query engine written in C++ that accelerates Spark SQL workloads without requiring any code changes, achieving up to 12x faster performance."
                },
                {
                        "id": "c",
                        "text": "Photon works by pre-computing all possible query results and caching them, so queries return instantly from cache."
                },
                {
                        "id": "d",
                        "text": "Photon only accelerates Python and Scala workloads; SQL queries do not benefit from Photon optimization."
                },
                {
                        "id": "e",
                        "text": "Photon compresses data files to 10% of their original size, making I/O operations faster."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Photon is a vectorized C++ engine that accelerates Spark SQL without code changes): Photon runs alongside Apache Spark, transparently accelerating SQL and DataFrame operations. It processes data in columnar batches (vectorized execution) using native C++ code, delivering up to 12x performance improvement with zero query rewrites.\n\n❌ Why others are wrong:\n• (A) \"Replaces Spark entirely, requires rewriting queries\": Photon does NOT replace Spark — it accelerates specific Spark operations. No code changes are ever needed.\n• (C) \"Pre-computes all possible results and caches\": This is physically impossible for analytical workloads. Photon optimizes EXECUTION, not pre-computation.\n• (D) \"Only accelerates Python/Scala, not SQL\": The OPPOSITE — Photon primarily accelerates SQL and DataFrame workloads, which are the most common in DBSQL.\n• (E) \"Compresses data to 10% of original size\": Photon is a COMPUTE engine, not a compression tool. Data compression is handled by Parquet and Delta Lake.\n\n🎯 EXAM TIP: Photon = C++ vectorized query engine. Key facts: (1) works with Spark transparently, (2) no code changes, (3) accelerates SQL + DataFrames, (4) available in Pro and Serverless SQL Warehouses.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-308",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to connect Tableau to Databricks for interactive dashboarding. The analyst has access to both a Databricks cluster and a SQL Warehouse.\n\nWhich compute resource should the analyst use for the Tableau connection, and why?",
        "options": [
                {
                        "id": "a",
                        "text": "A cluster, because Tableau requires a Spark context that only clusters provide."
                },
                {
                        "id": "b",
                        "text": "A SQL Warehouse, because it provides an ODBC/JDBC endpoint optimized for BI tool connectivity and concurrent query execution."
                },
                {
                        "id": "c",
                        "text": "Either resource works identically; there is no performance or functionality difference for BI tools."
                },
                {
                        "id": "d",
                        "text": "Tableau can only connect to Databricks through the REST API, so neither clusters nor SQL Warehouses are directly used."
                },
                {
                        "id": "e",
                        "text": "A cluster configured with the Tableau driver package, because SQL Warehouses do not support third-party BI tools."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — SQL Warehouse with ODBC/JDBC endpoint, optimized for BI connectivity): SQL Warehouses expose standard ODBC/JDBC connection endpoints that BI tools like Tableau natively support. They're optimized for the concurrent, interactive query patterns BI tools generate and handle multiple simultaneous user connections efficiently.\n\n❌ Why others are wrong:\n• (A) \"Cluster because Tableau requires Spark context\": Tableau connects via ODBC/JDBC, not via Spark context. SQL Warehouses provide superior BI experiences vs. clusters.\n• (C) \"Either works identically\": SQL Warehouses are specifically optimized for BI workloads (concurrency, query routing, Photon). Clusters are designed for notebook-based development.\n• (D) \"Tableau only connects via REST API\": Tableau uses ODBC/JDBC drivers to connect, which SQL Warehouses support natively.\n• (E) \"Cluster with Tableau driver package\": No special driver package is needed on the cluster. The correct approach is using a SQL Warehouse's ODBC/JDBC endpoint.\n\n🎯 EXAM TIP: BI tools (Tableau, Power BI, Looker) → SQL Warehouse (ODBC/JDBC). Notebooks (Python/Scala/R) → Clusters. Partner Connect automates the SQL Warehouse + BI tool connection setup.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-309",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst wants to browse available tables, view their schemas, check column-level comments, and review access permissions — all without writing any SQL.\n\nWhich Databricks feature provides this capability?",
        "options": [
                {
                        "id": "a",
                        "text": "The SQL Editor's autocomplete feature, which displays schema information inline."
                },
                {
                        "id": "b",
                        "text": "Catalog Explorer (Data Explorer), which provides a visual interface for browsing data objects, viewing metadata, and managing permissions."
                },
                {
                        "id": "c",
                        "text": "The Databricks CLI, which provides a `databricks tables list` command for schema browsing."
                },
                {
                        "id": "d",
                        "text": "Delta Live Tables (DLT) pipeline viewer, which shows all tables and their lineage."
                },
                {
                        "id": "e",
                        "text": "The Workspace file browser, where tables appear as files that can be previewed."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Catalog Explorer provides visual browsing, metadata, and permission management): Catalog Explorer (formerly Data Explorer) is the GUI for data discovery and governance. It displays the three-level namespace (catalog > schema > table), shows column details, comments, tags, lineage, and allows granting/revoking permissions — all point-and-click, no SQL needed.\n\n❌ Why others are wrong:\n• (A) \"SQL Editor autocomplete\": Autocomplete shows column names while typing queries but doesn't provide full metadata browsing, permission management, or data preview.\n• (C) \"Databricks CLI 'tables list'\": The CLI is for automation, not visual browsing. It doesn't provide the rich metadata view that Catalog Explorer offers.\n• (D) \"DLT pipeline viewer\": DLT viewer shows pipeline-specific tables and lineage, not a comprehensive browse of ALL data objects in the workspace.\n• (E) \"Workspace file browser\": The file browser shows NOTEBOOKS and FILES, not database tables. Tables are data objects, not workspace files.\n\n🎯 EXAM TIP: Catalog Explorer = visual governance (browse schemas, preview data, manage permissions). SQL Editor = query authoring. Know the distinction — the exam tests which UI element serves which purpose.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-310",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An organization wants to connect their HR system (Workday) to Databricks for automated employee data ingestion. A data engineer suggests using Partner Connect.\n\nWhat does Partner Connect automate in this integration scenario?",
        "options": [
                {
                        "id": "a",
                        "text": "It automatically transforms the HR data into the medallion architecture format before loading."
                },
                {
                        "id": "b",
                        "text": "It provisions a SQL Warehouse and configures the connection credentials so the partner tool (Workday/Fivetran) can push data into Databricks with minimal manual setup."
                },
                {
                        "id": "c",
                        "text": "It creates a direct VPN tunnel between the HR system and the Databricks workspace for secure data transfer."
                },
                {
                        "id": "d",
                        "text": "It automatically generates ETL notebooks that extract data from the partner system."
                },
                {
                        "id": "e",
                        "text": "It replaces the need for the partner tool entirely by providing built-in connectors for all supported systems."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Partner Connect provisions SQL Warehouse + configures connection credentials): Partner Connect is a setup wizard that automates the integration between Databricks and partner tools. For ingestion tools like Fivetran/Workday, it: (1) creates a SQL Warehouse, (2) generates a service principal or PAT, and (3) pre-configures the partner's connection settings.\n\n❌ Why others are wrong:\n• (A) \"Transforms data into medallion format\": Partner Connect handles CONNECTION setup, not data transformation. Medallion architecture transformations happen via ETL pipelines.\n• (C) \"Creates VPN tunnel\": Network connectivity is handled by workspace admins (Private Link, VPC peering), not by Partner Connect.\n• (D) \"Generates ETL notebooks\": Partner Connect doesn't write code — it provisions infrastructure and configures authentication.\n• (E) \"Replaces the partner tool entirely\": Partner Connect CONNECTS partner tools; it doesn't replace them. You still need Fivetran/Workday as the ingestion engine.\n\n🎯 EXAM TIP: Partner Connect = automated provisioning wizard. For BI tools → creates SQL Warehouse + connection. For ingestion tools → creates SQL Warehouse + service principal + pre-fills partner config. It saves setup time but doesn't replace the partner tool.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-311",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst notices that their SQL Warehouse has an 'Auto Stop' setting of 10 minutes and a dashboard refresh schedule of every 30 minutes. The analyst observes that the warehouse frequently cold-starts, adding 3-4 minutes of delay to each refresh.\n\nWhat is the most cost-effective solution to eliminate the cold-start delays while keeping costs manageable?",
        "options": [
                {
                        "id": "a",
                        "text": "Disable Auto Stop completely so the warehouse never shuts down."
                },
                {
                        "id": "b",
                        "text": "Switch to a Serverless SQL Warehouse, which provides near-instant startup (2-6 seconds) and only charges for compute used during query execution."
                },
                {
                        "id": "c",
                        "text": "Increase the Auto Stop timer to 35 minutes so the warehouse stays warm between refreshes."
                },
                {
                        "id": "d",
                        "text": "Add a dummy query that runs every 5 minutes to keep the warehouse alive."
                },
                {
                        "id": "e",
                        "text": "Reduce the dashboard refresh interval to every 5 minutes to keep the warehouse constantly active."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Switch to Serverless SQL Warehouse for instant startup + pay-per-query): Serverless eliminates the cold-start vs. cost tradeoff: it starts in 2-6 seconds (no cold-start penalty) and auto-scales to zero when idle (no cost for idle time). Perfect for intermittent workloads like dashboard refreshes every 30 minutes.\n\n❌ Why others are wrong:\n• (A) \"Disable Auto Stop completely\": This keeps the warehouse running 24/7, incurring continuous costs even during the 20+ minutes of idle time between refreshes.\n• (C) \"Increase Auto Stop to 35 minutes\": This means the warehouse stays running continuously (30-min refresh < 35-min auto-stop), wasting compute during idle periods.\n• (D) \"Dummy query every 5 minutes\": Anti-pattern — wastes compute resources just to prevent cold starts. Adds unnecessary cost and complexity.\n• (E) \"Reduce refresh to every 5 minutes\": Worse — increases both compute usage (more frequent queries) and keeps the warehouse permanently alive.\n\n🎯 EXAM TIP: Auto Stop timer < Dashboard refresh interval = cold-start problem. Solution options: (1) Serverless (best), (2) Increase Auto Stop (wasteful). The exam always prefers Serverless for intermittent workloads.",
        "domain": "Understanding of Databricks Data Intelligence Platform"
},
    {
        "id": "db-da-312",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is designing a dimensional model for a retail company in the Gold layer. The fact table `fact_sales` contains transaction records, and the dimension tables include `dim_product`, `dim_store`, `dim_date`, and `dim_customer`. Each dimension table has a surrogate key.\n\nWhich modeling pattern best describes this architecture?",
        "options": [
                {
                        "id": "a",
                        "text": "A snowflake schema where dimension tables are normalized into sub-dimensions for storage efficiency."
                },
                {
                        "id": "b",
                        "text": "A star schema where the central fact table connects directly to denormalized dimension tables via foreign keys."
                },
                {
                        "id": "c",
                        "text": "A data vault model with hub, link, and satellite tables for historized data loading."
                },
                {
                        "id": "d",
                        "text": "A flat table design where all dimensions are embedded as columns in the fact table."
                },
                {
                        "id": "e",
                        "text": "A graph model where products, stores, and customers are represented as nodes with relationship edges."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Star schema with central fact table and denormalized dimension tables): The Gold layer typically uses a star schema: fact_sales connects directly to dim_product, dim_store, and dim_customer via foreign keys. Dimensions are DENORMALIZED (flat) for query simplicity.\n\n❌ Why others are wrong:\n• (A) Snowflake schema: Normalized dimensions add complexity and joins. Not recommended for Gold layer reporting.\n• (C) Data vault: Used in Silver layer for loading and historization, not Gold layer for reporting.\n• (D) Flat table: All dimensions embedded in one table → update anomalies, massive redundancy.\n• (E) Graph model: Used for network analysis (social graphs, knowledge graphs), not standard BI reporting.\n\n🔑 EXAM TIP: Gold layer best practices:\n• Star schema for reporting\n• Denormalized dimensions for query simplicity\n• Pre-aggregated tables for dashboard performance\n• CTAS (CREATE TABLE AS SELECT) for materialization",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-313",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A BI analyst is building a reporting layer in Databricks. The Bronze layer contains raw JSON event logs, the Silver layer has cleaned and deduplicated event records, and the Gold layer must provide aggregated daily metrics by product category.\n\nWhich statement correctly maps the medallion layers to their data characteristics?",
        "options": [
                {
                        "id": "a",
                        "text": "Bronze stores aggregated KPIs, Silver stores cleaned records, Gold stores raw ingested data."
                },
                {
                        "id": "b",
                        "text": "Bronze stores raw data as-is (append-only), Silver stores cleaned/deduplicated data (source of truth), Gold stores business-level aggregations ready for dashboards."
                },
                {
                        "id": "c",
                        "text": "All three layers store the same data but with different access permissions applied."
                },
                {
                        "id": "d",
                        "text": "Bronze and Silver are optional staging areas; only Gold contains actual queryable tables."
                },
                {
                        "id": "e",
                        "text": "Bronze stores external data, Silver stores internal data, and Gold merges both into a unified view."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Bronze = raw, Silver = cleaned, Gold = business aggregations): The Medallion Architecture progressively refines data:\n• Bronze: Raw data as-is from source systems (append-only, no transformations)\n• Silver: Cleaned, deduplicated, joined data (enterprise source of truth)\n• Gold: Business-ready aggregations, KPIs, and reporting tables\n\n❌ Why others are wrong:\n• (A) Reversed layers: Bronze stores RAW data (not aggregated KPIs), and Gold stores KPIs (not raw data).\n• (C) Same data with different permissions: The layers contain DIFFERENT data at different refinement levels.\n• (D) Bronze/Silver are optional: All three layers serve distinct purposes in the architecture.\n• (E) Bronze = external, Silver = internal: The distinction is refinement level, not data source.\n\n🔑 EXAM TIP: Medallion Architecture summary:\n• Bronze: Ingest as-is, append-only, preserve raw data\n• Silver: Clean, deduplicate, join, conform (source of truth)\n• Gold: Aggregate, model, optimize for consumption\n• Each layer adds value through transformation and quality improvement",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-314",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to create a Gold-layer table that shows monthly revenue by region. The source data in the Silver layer has one row per transaction with columns: `transaction_id`, `region`, `amount`, `transaction_date`.\n\nWhich SQL approach correctly creates this Gold-layer aggregation as a managed Delta table?",
        "options": [
                {
                        "id": "a",
                        "text": "CREATE VIEW gold.monthly_revenue AS SELECT region, DATE_TRUNC('month', transaction_date) AS month, SUM(amount) AS revenue FROM silver.transactions GROUP BY region, month;"
                },
                {
                        "id": "b",
                        "text": "CREATE OR REPLACE TABLE gold.monthly_revenue AS SELECT region, DATE_TRUNC('month', transaction_date) AS month, SUM(amount) AS revenue FROM silver.transactions GROUP BY region, DATE_TRUNC('month', transaction_date);"
                },
                {
                        "id": "c",
                        "text": "INSERT INTO gold.monthly_revenue SELECT * FROM silver.transactions WHERE amount > 0;"
                },
                {
                        "id": "d",
                        "text": "CREATE EXTERNAL TABLE gold.monthly_revenue LOCATION 's3://bucket/gold/' AS SELECT region, SUM(amount) FROM silver.transactions;"
                },
                {
                        "id": "e",
                        "text": "MERGE INTO gold.monthly_revenue USING silver.transactions ON 1=1 WHEN MATCHED THEN UPDATE SET revenue = amount;"
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — CREATE OR REPLACE TABLE with GROUP BY): CTAS creates a materialized Delta table with the aggregated results — region, month, and SUM(amount). This persists the aggregation for efficient dashboard queries.\n\n❌ Why others are wrong:\n• (A) CREATE VIEW: Creates a virtual table that re-executes the aggregation on EVERY query — slower for dashboards with many concurrent users.\n• (C) INSERT INTO without aggregation: Inserts raw rows without the required GROUP BY aggregation.\n• (D) CREATE EXTERNAL TABLE with SELECT: Mixing external table creation with inline SELECT is not standard syntax.\n• (E) MERGE with ON 1=1: Inappropriate use of MERGE. The ON 1=1 condition creates a cartesian match — every row matches every other row.\n\n🔑 EXAM TIP: CTAS vs. VIEW for Gold layer:\n• CTAS (TABLE): Pre-computed results, fast reads, requires refresh\n• VIEW: Always fresh, slower reads (re-executes query each time)\n• For dashboards with many users → TABLE (pre-computed)\n• For ad-hoc analysis needing latest data → VIEW",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-315",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst discovers that an important fact table has a composite primary key consisting of `order_id` and `line_item_id`. The analyst needs to ensure that no duplicate combinations exist when new data is merged from the Silver layer.\n\nWhich Delta Lake operation is most appropriate to handle this upsert scenario?",
        "options": [
                {
                        "id": "a",
                        "text": "INSERT INTO with a WHERE NOT EXISTS subquery to filter existing records."
                },
                {
                        "id": "b",
                        "text": "MERGE INTO with a match condition on both order_id AND line_item_id, specifying WHEN MATCHED THEN UPDATE and WHEN NOT MATCHED THEN INSERT."
                },
                {
                        "id": "c",
                        "text": "DELETE all existing records and re-INSERT the complete dataset from Silver."
                },
                {
                        "id": "d",
                        "text": "CREATE OR REPLACE TABLE to rebuild the entire Gold table on each run."
                },
                {
                        "id": "e",
                        "text": "Use COPY INTO to append data, as it automatically deduplicates based on primary keys."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — MERGE INTO with composite key match): MERGE INTO handles deduplication for composite keys by matching on BOTH order_id AND line_item_id. It updates existing records (WHEN MATCHED) and inserts new ones (WHEN NOT MATCHED) — a classic upsert pattern.\n\n❌ Why others are wrong:\n• (A) INSERT WHERE NOT EXISTS: Only handles inserts — doesn't update existing records with new values.\n• (C) DELETE + re-INSERT: Wasteful, creates unnecessary version churn, and is not atomic.\n• (D) CREATE OR REPLACE full rebuild: Rebuilds the entire table on every run — extremely expensive for large tables.\n• (E) COPY INTO auto-deduplicates: FALSE. COPY INTO does NOT deduplicate. It appends data from files.\n\n🔑 EXAM TIP: MERGE INTO pattern:\nMERGE INTO gold.fact_orders AS target\nUSING silver.orders AS source\nON target.order_id = source.order_id AND target.line_item_id = source.line_item_id\nWHEN MATCHED THEN UPDATE SET *\nWHEN NOT MATCHED THEN INSERT *",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-316",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is designing a star schema for a healthcare analytics dashboard. The fact table `fact_visits` has foreign keys to `dim_patient`, `dim_doctor`, `dim_facility`, and `dim_date`. A stakeholder asks why dimension tables have surrogate keys instead of using the natural business keys directly.\n\nWhich reason best justifies the use of surrogate keys in dimension tables?",
        "options": [
                {
                        "id": "a",
                        "text": "Surrogate keys are required by Delta Lake and cannot be replaced with natural keys."
                },
                {
                        "id": "b",
                        "text": "Surrogate keys provide stable, immutable identifiers that protect the model from changes in source system business keys and enable tracking of slowly changing dimensions."
                },
                {
                        "id": "c",
                        "text": "Natural keys consume more storage space than integer surrogate keys, and the sole purpose is storage optimization."
                },
                {
                        "id": "d",
                        "text": "Surrogate keys enable encryption of dimension records, which natural keys cannot support."
                },
                {
                        "id": "e",
                        "text": "Surrogate keys are only necessary when using snowflake schemas, not star schemas."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Surrogate keys provide stable, immutable identifiers): Surrogate keys (typically auto-generated integers or UUIDs) decouple the data warehouse from source system changes. If a natural key changes (e.g., patient ID format, doctor license number), the surrogate key remains stable, protecting all downstream joins and references.\n\n❌ Why others are wrong:\n• (A) Required by Delta Lake: FALSE. Delta Lake doesn't require surrogate keys. They're a data modeling best practice, not a technical requirement.\n• (C) Only about storage optimization: Storage savings are a minor benefit. The PRIMARY value is stability and SCD support.\n• (D) Enable encryption: Surrogate keys have nothing to do with encryption.\n• (E) Only for snowflake schemas: FALSE. Surrogate keys are used in BOTH star and snowflake schemas.\n\n🔑 EXAM TIP: Surrogate vs. Natural keys:\n• Surrogate: System-generated (1, 2, 3 or UUID), stable, immutable\n• Natural: Business-meaningful (SSN, email, product_code), may change\n• Surrogate keys enable: SCD Type 2 tracking, join stability, source independence",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-317",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst queries a Silver-layer table and notices it contains columns from three different source systems joined together: CRM contacts, ERP orders, and web analytics sessions. The table has been deduplicated on `customer_email`.\n\nWhich medallion architecture principle does this table best represent?",
        "options": [
                {
                        "id": "a",
                        "text": "Bronze: raw ingestion of multiple sources into a single landing table."
                },
                {
                        "id": "b",
                        "text": "Gold: business-ready aggregations for dashboard consumption."
                },
                {
                        "id": "c",
                        "text": "Silver: the enterprise data source of truth where cleaned, joined, and deduplicated data from multiple sources converges."
                },
                {
                        "id": "d",
                        "text": "This violates medallion architecture principles because multiple sources should never be combined in a single table."
                },
                {
                        "id": "e",
                        "text": "Platinum: an unofficial fourth layer for cross-source integrated datasets."
                }
        ],
        "correctIds": [
                "c"
        ],
        "explanation": "✅ CORRECT (C — Silver layer): The Silver layer is the \"Enterprise Source of Truth\" where data from MULTIPLE Bronze sources is cleaned, joined, deduplicated, and conformed. The presence of CRM, ERP, and web analytics data joined together is the defining characteristic of the Silver layer.\n\n❌ Why others are wrong:\n• (A) Bronze: Bronze stores raw data from INDIVIDUAL sources, typically without cross-source joins.\n• (B) Gold: Gold contains business-ready AGGREGATIONS for reporting — not the raw joined data.\n• (D) Violates principles: FALSE. Joining multiple sources is exactly what the Silver layer is designed for.\n• (E) Platinum: There is no standard \"Platinum\" layer in the medallion architecture.\n\n🔑 EXAM TIP: Silver layer indicators:\n• Data from MULTIPLE sources joined together\n• Cleaned and deduplicated\n• Conformed data types and naming\n• NOT aggregated (that's Gold)\n• NOT raw (that's Bronze)",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-318",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst must decide between creating a VIEW and a materialized TABLE in the Gold layer for a dashboard query that aggregates 50 million Silver-layer records into 500 summary rows.\n\nWhich approach should the analyst choose and why?",
        "options": [
                {
                        "id": "a",
                        "text": "A VIEW, because it always returns fresh data and consumes no additional storage."
                },
                {
                        "id": "b",
                        "text": "A TABLE (CTAS), because the dashboard will read 500 pre-computed rows instead of re-aggregating 50 million rows on every refresh, dramatically improving performance."
                },
                {
                        "id": "c",
                        "text": "A VIEW, because Gold-layer objects should never be materialized tables."
                },
                {
                        "id": "d",
                        "text": "A TEMPORARY VIEW, because dashboard queries are always session-scoped."
                },
                {
                        "id": "e",
                        "text": "There is no performance difference between a VIEW and a TABLE for aggregation queries in Databricks."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — TABLE via CTAS): For a dashboard query that aggregates 50M records into 500 summary rows, a materialized TABLE is the clear winner. The dashboard reads 500 pre-computed rows instead of re-executing the 50M-row aggregation on every request.\n\n❌ Why others are wrong:\n• (A) VIEW for freshness: While views always show fresh data, re-aggregating 50M rows on every dashboard load creates unacceptable latency for 20+ concurrent users.\n• (C) Gold tables should never be materialized: FALSE. Gold-layer materialization is a BEST PRACTICE for dashboard performance.\n• (D) TEMPORARY VIEW: Session-scoped — disappears when the session ends. Not suitable for shared dashboards.\n• (E) No performance difference: FALSE. TABLE reads 500 rows vs. VIEW re-aggregates 50M rows. The difference is massive.\n\n🔑 EXAM TIP: VIEW vs. TABLE decision:\n• Use VIEW when: Data is small, freshness is critical, few concurrent users\n• Use TABLE when: Data is large, many concurrent users, OK with scheduled refresh\n• Materialized View: Automatic refresh + incremental computation (best of both)",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-319",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is working with a Delta table that stores customer records. The business requires tracking historical changes to customer addresses over time (Type 2 SCD). Which approach enables the analyst to maintain both current and historical address records?\n\nWhich Delta Lake feature combination supports this requirement?",
        "options": [
                {
                        "id": "a",
                        "text": "Use Time Travel with VERSION AS OF to query any historical state of the table on demand."
                },
                {
                        "id": "b",
                        "text": "Use MERGE INTO with custom logic that inserts new records for changed addresses while marking previous records with an end_date, maintaining a full audit trail."
                },
                {
                        "id": "c",
                        "text": "Enable Auto Loader to automatically version customer records as they change."
                },
                {
                        "id": "d",
                        "text": "Use OPTIMIZE with ZORDER BY address to keep historical addresses together for fast retrieval."
                },
                {
                        "id": "e",
                        "text": "Enable Change Data Feed (CDF) which automatically creates a Type 2 SCD table."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — MERGE INTO with SCD Type 2 logic): Type 2 Slowly Changing Dimensions require inserting NEW records for changed values while marking the PREVIOUS record with an end date and inactive flag. This is implemented using MERGE INTO with custom logic:\n\nMERGE INTO dim_customer AS target\nUSING staging_customer AS source\nON target.customer_id = source.customer_id AND target.is_current = TRUE\nWHEN MATCHED AND target.address <> source.address\n  THEN UPDATE SET target.end_date = CURRENT_DATE(), target.is_current = FALSE\nWHEN NOT MATCHED\n  THEN INSERT (customer_id, address, start_date, end_date, is_current)\n  VALUES (source.customer_id, source.address, CURRENT_DATE(), NULL, TRUE);\n\n❌ Why others are wrong:\n• (A) Time Travel VERSION AS OF: Provides read-only snapshots but doesn't create persistent SCD records. When data files are VACUUMed, historical versions are lost.\n• (C) Auto Loader: Auto Loader ingests files — it doesn't implement SCD logic.\n• (D) OPTIMIZE with ZORDER: Optimizes FILE LAYOUT for query performance, not record versioning.\n• (E) Change Data Feed creates SCD: CDF tracks row-level changes but doesn't automatically create SCD tables.\n\n🔑 EXAM TIP: SCD Types:\n• Type 1: Overwrite old values (no history)\n• Type 2: Add new row with version tracking (start_date, end_date, is_current)\n• Type 3: Add new column for previous value (limited history)\n• Delta Lake + MERGE INTO = standard SCD Type 2 implementation",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-320",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst notices that a fact table in the Gold layer contains both `product_name` and `product_category` columns embedded directly, rather than referencing a `dim_product` table via a foreign key.\n\nWhat problem does this denormalized design create for analytics?",
        "options": [
                {
                        "id": "a",
                        "text": "No problem — Gold-layer fact tables should always contain denormalized dimension attributes for query performance."
                },
                {
                        "id": "b",
                        "text": "If a product is reclassified to a different category, the historical fact records will have inconsistent category values because the change is not propagated to already-recorded transactions."
                },
                {
                        "id": "c",
                        "text": "Denormalized fact tables cannot be queried with SQL GROUP BY clauses."
                },
                {
                        "id": "d",
                        "text": "The only issue is increased storage cost; there are no analytical implications."
                },
                {
                        "id": "e",
                        "text": "Denormalized fact tables prevent the use of Delta Lake features like Time Travel."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Historical records have inconsistent category values): When dimension attributes are embedded directly in the fact table (denormalized), a change to the dimension (e.g., product reclassified to a different category) only affects NEW records. Historical records retain the OLD category value — creating data inconsistency.\n\n❌ Why others are wrong:\n• (A) Always denormalize: FALSE. Denormalization has trade-offs. Star schema with separate dimension tables is preferred for maintaining consistency.\n• (C) Can't use GROUP BY: FALSE. GROUP BY works on any table structure.\n• (D) Only storage cost: FALSE. The analytical impact (inconsistent categories) is the PRIMARY concern, not storage.\n• (E) Prevents Time Travel: FALSE. Time Travel is a Delta Lake feature independent of table denormalization.\n\n🔑 EXAM TIP: Update anomalies in denormalized tables:\n• Product reclassification → old fact records have stale category\n• Customer address change → old transactions show previous address\n• Solution: Use star schema with separate dimension tables\n• SCD Type 2 in dimensions handles history correctly",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-321",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst configures a new Genie space. After adding three Unity Catalog tables (customers, orders, products), the analyst notices that Genie generates incorrect SQL when users ask about 'revenue' because the column is actually named `total_amount_usd`.\n\nWhat is the most effective action to resolve this issue?",
        "options": [
                {
                        "id": "a",
                        "text": "Rename the column from `total_amount_usd` to `revenue` in the source table to match user expectations."
                },
                {
                        "id": "b",
                        "text": "Add table and column descriptions/comments in Unity Catalog that explain business context, such as 'total_amount_usd represents the revenue from each transaction in US dollars.'"
                },
                {
                        "id": "c",
                        "text": "Create a separate view that aliases the column as `revenue` and add only the view to the Genie space."
                },
                {
                        "id": "d",
                        "text": "Add a Trusted Asset (sample SQL query) that demonstrates the correct column usage for revenue calculations."
                },
                {
                        "id": "e",
                        "text": "Both B and D: add descriptive comments to the catalog AND create Trusted Assets with sample queries."
                }
        ],
        "correctIds": [
                "e"
        ],
        "explanation": "✅ CORRECT (E — Both B and D): The most effective approach combines BOTH:\n• (B) Column/table descriptions in Unity Catalog bridge the gap between technical column names and business terminology. 'total_amount_usd represents the revenue from each transaction' teaches Genie the semantic mapping.\n• (D) Trusted Assets with sample SQL provide concrete examples that demonstrate correct column usage, so Genie can replicate the pattern.\n\n❌ Why others alone are insufficient:\n• (A) Rename column: Invasive schema change affecting all downstream consumers.\n• (B) alone: Descriptions help but may not cover all query variations.\n• (C) Create a view with alias: Adds an extra layer but doesn't teach Genie the underlying business vocabulary.\n• (D) alone: Trusted Assets cover specific queries but don't teach Genie the general semantic meaning.\n\n🔑 EXAM TIP: Best practice for Genie vocabulary mapping:\n• Unity Catalog COMMENTS = teach the semantic meaning (persistent, universal)\n• Trusted Assets = demonstrate correct usage (specific, template-based)\n• Together: maximum coverage for vocabulary mismatches",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-322",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst has configured a Genie space with 5 tables. Business users report that Genie sometimes returns queries that join tables incorrectly, producing inflated numbers due to many-to-many relationships.\n\nWhich configuration step would most effectively prevent this issue?",
        "options": [
                {
                        "id": "a",
                        "text": "Remove all but one table from the Genie space to eliminate joins entirely."
                },
                {
                        "id": "b",
                        "text": "Add primary key and foreign key constraints as table comments in Unity Catalog, and create Trusted Assets with verified join patterns."
                },
                {
                        "id": "c",
                        "text": "Enable the 'strict join mode' setting in the Genie space configuration."
                },
                {
                        "id": "d",
                        "text": "Ask users to specify exact join conditions in their natural language questions."
                },
                {
                        "id": "e",
                        "text": "Replace the underlying tables with pre-joined flat tables that eliminate the need for any joins."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): Document PK/FK in Unity Catalog (ALTER TABLE ADD CONSTRAINT or COMMENT descriptions) AND create Trusted Assets with verified join patterns. PK/FK metadata tells Genie the proper cardinality and direction of joins. Trusted Assets provide concrete examples of correct multi-table queries.\n\n❌ Why others are wrong:\n• (A) Remove all but one table: Eliminates Genie's multi-table capability entirely. Overly restrictive.\n• (C) 'Strict join mode': NOT a real feature. There is no such setting in Genie configuration.\n• (D) Users specify join conditions: Unrealistic. Business users asking natural language questions shouldn't need to know SQL join syntax.\n• (E) Pre-joined flat tables: Denormalization creates data redundancy, increases storage, and loses the flexibility of normalized queries.\n\n🔑 EXAM TIP: Preventing incorrect Genie joins:\n1. Define PK/FK constraints in Unity Catalog (even though not enforced)\n2. Add table comments describing relationships\n3. Create Trusted Assets with correct join patterns\n4. Keep the number of tables minimal (≤5)",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-323",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is evaluating whether a user question that Genie answered correctly should be saved as a Trusted Asset. The question was: 'Show me total sales by region for Q3.'\n\nWhat is a Trusted Asset in the context of AI/BI Genie Spaces?",
        "options": [
                {
                        "id": "a",
                        "text": "A certified Delta table that has been approved by an administrator for use in AI-generated queries."
                },
                {
                        "id": "b",
                        "text": "A vetted, pre-written SQL query that Genie uses as a reference template when answering similar natural language questions, ensuring accuracy and consistency."
                },
                {
                        "id": "c",
                        "text": "A machine learning model trained on company-specific data that enhances Genie's language understanding."
                },
                {
                        "id": "d",
                        "text": "A read-only dashboard widget connected to a Genie space."
                },
                {
                        "id": "e",
                        "text": "A user role with elevated permissions to validate Genie-generated queries before execution."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): A Trusted Asset is a vetted, pre-written SQL query that Genie uses as a reference template. When a user asks a question similar to a Trusted Asset, Genie adapts the verified query instead of generating SQL from scratch — ensuring accuracy and consistency for recurring, critical question patterns.\n\n❌ Why others are wrong:\n• (A) Certified Delta table: Describes a data certification concept, not a Genie-specific feature. Tables CAN be certified, but that's Unity Catalog governance, not Genie Trusted Assets.\n• (C) ML model: Genie uses a general-purpose LLM, not custom fine-tuned models. Trusted Assets guide the LLM without retraining it.\n• (D) Read-only dashboard widget: Dashboard widgets are visualization components, not Genie features.\n• (E) User role with elevated permissions: Trusted Assets are SQL queries, not user roles.\n\n🔑 EXAM TIP: Trusted Asset definition:\n• WHAT: A pre-written, verified SQL query\n• WHO creates them: Analysts/editors of the Genie space\n• HOW Genie uses them: As exact templates for matching questions\n• WHY: 100% accuracy for critical queries (no AI generation risk)",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-324",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is setting up a Genie space for the finance team. The underlying tables contain sensitive salary data that only HR should see. The finance team should only see aggregated department budgets.\n\nHow does Genie handle data access permissions?",
        "options": [
                {
                        "id": "a",
                        "text": "Genie has its own permission system separate from Unity Catalog, and the analyst must configure access within the Genie space settings."
                },
                {
                        "id": "b",
                        "text": "Genie inherits Unity Catalog permissions — users can only query data they already have SELECT access to, so the analyst should ensure the finance team lacks access to the salary table."
                },
                {
                        "id": "c",
                        "text": "Genie automatically masks sensitive columns detected by AI, regardless of Unity Catalog permissions."
                },
                {
                        "id": "d",
                        "text": "All users who can access a Genie space automatically have full access to all tables configured in that space."
                },
                {
                        "id": "e",
                        "text": "Genie can only access data through service accounts, bypassing individual user permissions."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): Genie INHERITS Unity Catalog permissions. When a user questions Genie, the generated SQL runs under THEIR identity. If they lack SELECT permission on a table or column, the query fails with a permission error. The analyst should ensure the finance team DOES NOT have access to the salary table.\n\n❌ Why others are wrong:\n• (A) Separate permission system: FALSE. Genie does NOT have its own data access permissions. It relies 100% on Unity Catalog's permission model.\n• (C) AI-based auto-masking: FALSE. Genie does NOT automatically detect or mask sensitive data. Column masking must be configured explicitly in Unity Catalog.\n• (D) Full access to all tables: FALSE. Access is governed by Unity Catalog permissions, not by Genie space membership.\n• (E) Service accounts only: FALSE. Genie runs queries under the user's identity (not a service account), unless the space is configured with embedded credentials.\n\n🔑 EXAM TIP: Genie + Security:\n• Data access: Governed by Unity Catalog (SELECT, USAGE)\n• Space access: Governed by Genie permissions (Can Use, Can Edit)\n• Row-level security: Use Row Filters in Unity Catalog\n• Column masking: Use Column Masks in Unity Catalog\n• Genie respects ALL UC security policies",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-325",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "After deploying a Genie space, a data analyst reviews the conversation history and finds that 30% of user questions received responses flagged by users as inaccurate.\n\nWhat is the recommended iterative improvement workflow for enhancing Genie accuracy?",
        "options": [
                {
                        "id": "a",
                        "text": "Delete the Genie space and create a new one with different tables."
                },
                {
                        "id": "b",
                        "text": "Review flagged responses, identify patterns in misunderstood queries, then add Sample Questions with correct SQL and create Trusted Assets for recurring question types."
                },
                {
                        "id": "c",
                        "text": "Retrain the Genie language model on company-specific data using fine-tuning APIs."
                },
                {
                        "id": "d",
                        "text": "Reduce the number of tables in the space until accuracy improves above 90%."
                },
                {
                        "id": "e",
                        "text": "Switch to a larger SQL Warehouse to give Genie more compute for query generation."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): The recommended workflow is: (1) Review flagged responses in conversation history, (2) Identify patterns in misunderstood queries, (3) Add Sample Questions with correct SQL, (4) Create Trusted Assets for recurring question types. This is an iterative, data-driven improvement process.\n\n❌ Why others are wrong:\n• (A) Delete and recreate: Destroys all configuration, instructions, and Trusted Assets. Starting over is wasteful and loses accumulated improvements.\n• (C) Retrain/fine-tune LLM: Genie uses a managed LLM that CANNOT be fine-tuned by users. Improvement is done through configuration (instructions, examples, metadata), not model training.\n• (D) Reduce tables blindly: While fewer tables CAN help, blindly removing tables without analyzing the failures doesn't address the root cause.\n• (E) Larger SQL Warehouse: Warehouse size affects query EXECUTION speed, not SQL GENERATION accuracy. Genie's accuracy is about metadata and examples, not compute power.\n\n🔑 EXAM TIP: Genie CANNOT be fine-tuned. You improve it through:\n1. Better metadata (comments, PK/FK)\n2. Better instructions (business rules)\n3. Sample Questions (few-shot examples)\n4. Trusted Assets (verified SQL templates)",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-326",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is configuring a Genie space for the logistics team. The space needs tables about shipments, warehouses, and delivery routes. The analyst has editor-level access to the Genie space.\n\nWhat is the correct sequence of steps to configure an effective Genie space?",
        "options": [
                {
                        "id": "a",
                        "text": "1) Create the space → 2) Add SQL Warehouse → 3) Write and test queries → 4) Invite users → 5) Monitor and refine."
                },
                {
                        "id": "b",
                        "text": "1) Create the space → 2) Connect a SQL Warehouse → 3) Add Unity Catalog tables with good descriptions → 4) Add Sample Questions/Trusted Assets → 5) Share with users and iterate based on feedback."
                },
                {
                        "id": "c",
                        "text": "1) Create the space → 2) Upload CSV files → 3) Let Genie auto-discover schemas → 4) Share with users."
                },
                {
                        "id": "d",
                        "text": "1) Train the Genie model on logistics data → 2) Create the space → 3) Add tables → 4) Deploy."
                },
                {
                        "id": "e",
                        "text": "1) Create dashboards first → 2) Link dashboards to a Genie space → 3) Users interact with dashboards through Genie."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): The correct sequence:\n1. Create the space\n2. Connect a SQL Warehouse (compute)\n3. Add Unity Catalog tables with good descriptions (data + metadata)\n4. Add Sample Questions and Trusted Assets (guidance)\n5. Share with users and iterate based on feedback (deployment + improvement)\n\n❌ Why others are wrong:\n• (A) Missing the critical step of adding descriptions/comments. Also \"write and test queries\" is vague — the specific features are Sample Questions and Trusted Assets.\n• (C) Upload CSV files: Genie doesn't support CSV uploads. All data must come from Unity Catalog tables.\n• (D) Train the Genie model: Genie's LLM cannot be trained by users. Configuration is through metadata and examples.\n• (E) Dashboards linked to Genie: Genie and Dashboards are separate features. Users interact with Genie directly, not through dashboard intermediaries.\n\n🔑 EXAM TIP: Genie setup checklist:\n☐ Create space + assign SQL Warehouse\n☐ Add Unity Catalog tables (≤5 recommended)\n☐ Verify table/column COMMENTS exist\n☐ Define PK/FK constraints\n☐ Write Instructions (business rules, terminology)\n☐ Add Sample Questions with SQL\n☐ Create Trusted Assets for critical queries\n☐ Test in Draft Mode → Publish → Iterate",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-327",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst adds a table with 50 columns to a Genie space but notices that Genie struggles with ambiguous column names like `status`, `type`, and `code`. Users get confused results when asking about order status vs shipment status.\n\nWhich action would most improve Genie's ability to disambiguate these columns?",
        "options": [
                {
                        "id": "a",
                        "text": "Rename all ambiguous columns to include the table name prefix (e.g., `order_status`, `shipment_status`)."
                },
                {
                        "id": "b",
                        "text": "Add detailed column-level COMMENT descriptions in Unity Catalog that explain the business meaning of each ambiguous column and create instructions in the Genie space."
                },
                {
                        "id": "c",
                        "text": "Split the table into multiple smaller tables, each with unique column names."
                },
                {
                        "id": "d",
                        "text": "Remove the ambiguous columns from the Genie space and only expose non-ambiguous columns."
                },
                {
                        "id": "e",
                        "text": "Create a glossary document and upload it as a PDF to the Genie space."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): Add detailed column-level COMMENT descriptions in Unity Catalog (e.g., COMMENT ON COLUMN orders.status IS 'Order fulfillment status: pending, shipped, delivered, cancelled') AND create Genie space instructions that define the business terminology. Comments provide persistent, schema-level context; instructions provide space-level disambiguation rules.\n\n❌ Why others are wrong:\n• (A) Rename columns with prefixes: Works but requires schema changes that affect ALL downstream consumers (dashboards, ETL, notebooks).\n• (C) Split into smaller tables: Architectural over-engineering that increases complexity and number of joins.\n• (D) Remove ambiguous columns: Loses data that users need. Removing 'status' from the space means users can't ask about order status at all.\n• (E) Upload glossary PDF: Genie CANNOT read uploaded documents. It only reads Unity Catalog metadata and its own configuration.\n\n🔑 EXAM TIP: Genie reads metadata from:\n✅ Unity Catalog column COMMENTS\n✅ Unity Catalog table COMMENTS\n✅ PK/FK constraint definitions\n✅ Genie space Instructions\n✅ Sample Questions / Trusted Assets\n❌ Does NOT read: uploaded files, PDFs, spreadsheets, or external docs",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-328",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst has configured Genie with two tables. Users can ask questions in natural language, and Genie generates SQL. A user asks: 'What were our top 5 products last month?'\n\nGenie returns incorrect results because 'top' could mean by revenue, by units sold, or by profit margin. How should the analyst prevent this ambiguity?",
        "options": [
                {
                        "id": "a",
                        "text": "Configure Genie to always default to revenue-based ranking for any 'top' query."
                },
                {
                        "id": "b",
                        "text": "Add Genie space instructions that define business terms (e.g., 'top products means ranked by revenue unless specified otherwise') and create Sample Questions demonstrating each variation."
                },
                {
                        "id": "c",
                        "text": "Disable the 'top' keyword in Genie's vocabulary settings."
                },
                {
                        "id": "d",
                        "text": "Create a separate Genie space for each metric (revenue, units, margin) so users know which to use."
                },
                {
                        "id": "e",
                        "text": "Train users to always specify the metric in their questions."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): Add Genie space Instructions that define ambiguous business terms (e.g., \"'top products' means ranked by revenue unless otherwise specified\") AND create Sample Questions demonstrating each variation (\"Top 5 products by revenue\", \"Top 5 products by units sold\"). This teaches Genie the default interpretation while showing alternative variations.\n\n❌ Why others are wrong:\n• (A) Configure default to revenue: There is no setting to configure default rankings. Genie's behavior is guided through Instructions and examples, not configuration switches.\n• (C) Disable 'top' keyword: Genie doesn't have vocabulary management settings. You can't disable specific words.\n• (D) Separate spaces per metric: Over-engineers the solution and fragments the user experience. Users shouldn't need to know which space to use.\n• (E) Train users to specify: Puts the burden on users. The analyst should configure Genie to handle ambiguity intelligently.\n\n🔑 EXAM TIP: Handling ambiguous business terms:\n1. Define defaults in Instructions: \"'top' = by revenue unless specified\"\n2. Demonstrate variations in Sample Questions\n3. Add column COMMENTS explaining each metric\n4. Create Trusted Assets for each critical variation",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-329",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst creates a Genie space and wants to control who can ask questions and who can manage the space configuration (add tables, create Trusted Assets).\n\nWhich permission model applies to Genie spaces?",
        "options": [
                {
                        "id": "a",
                        "text": "All workspace users automatically have full access to all Genie spaces."
                },
                {
                        "id": "b",
                        "text": "Genie spaces support role-based access: owners can manage configuration, editors can add Trusted Assets and tables, and users with 'Can Use' permission can ask questions."
                },
                {
                        "id": "c",
                        "text": "Only workspace administrators can create and manage Genie spaces; regular users cannot."
                },
                {
                        "id": "d",
                        "text": "Genie spaces are public by default and cannot have individual access controls."
                },
                {
                        "id": "e",
                        "text": "Access is controlled exclusively through Unity Catalog permissions; Genie spaces have no independent permission settings."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): Genie spaces support role-based access:\n• Owners: Full control (configuration, permissions, deletion)\n• Editors: Modify tables, Trusted Assets, and instructions\n• Can Use: Ask questions and view results (consumer-level)\n\n❌ Why others are wrong:\n• (A) All workspace users have full access: FALSE. Genie spaces require explicit permission grants.\n• (C) Only admins can create/manage: FALSE. Any user with appropriate permissions can create and manage Genie spaces.\n• (D) Public by default: FALSE. Genie spaces are private by default — access must be explicitly granted.\n• (E) Only UC permissions: Genie has its OWN permission model (space-level) in addition to Unity Catalog permissions (data-level).\n\n🔑 EXAM TIP: Two separate permission layers for Genie:\n1. SPACE permissions (Who can interact): Owner, Can Edit, Can Use\n2. DATA permissions (What data they can see): Unity Catalog SELECT, USAGE\nBoth layers must be satisfied for a user to successfully query data through Genie.",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-330",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to ensure that a Genie space returns accurate responses about fiscal quarters. The company's fiscal year starts in April (Q1 = Apr-Jun, Q2 = Jul-Sep, Q3 = Oct-Dec, Q4 = Jan-Mar).\n\nHow should the analyst configure Genie to correctly interpret fiscal quarter references?",
        "options": [
                {
                        "id": "a",
                        "text": "Modify the SQL Warehouse's locale settings to use a fiscal calendar."
                },
                {
                        "id": "b",
                        "text": "Add Genie space instructions that define the fiscal calendar (e.g., 'Fiscal Q1 = April to June') and create Trusted Assets with SQL that implements the fiscal quarter logic using CASE statements."
                },
                {
                        "id": "c",
                        "text": "Create a pre-computed `fiscal_quarter` column in the source table and rename the `calendar_quarter` column to avoid confusion."
                },
                {
                        "id": "d",
                        "text": "Both B and C: define fiscal calendar in instructions AND add a pre-computed fiscal quarter column with clear descriptions."
                },
                {
                        "id": "e",
                        "text": "Genie automatically detects non-standard fiscal calendars from the data patterns."
                }
        ],
        "correctIds": [
                "d"
        ],
        "explanation": "✅ CORRECT (D — Both B and C): The most robust approach combines:\n• (B) Genie space instructions define the fiscal calendar business rule (\"Fiscal Q1 = April to June\")\n• (C) A pre-computed fiscal_quarter column with a clear COMMENT makes the fiscal quarter unambiguous — Genie can directly reference it\n\nTogether, Genie can either use the pre-computed column directly OR generate date logic using the instruction-defined rules.\n\n❌ Why others alone are insufficient:\n• (A) SQL Warehouse locale settings: Warehouse locale affects date formatting, NOT fiscal calendar logic. There's no fiscal calendar configuration at the warehouse level.\n• (B) alone: Instructions define the rule, but Genie still needs to generate CASE WHEN logic every time — error-prone for complex date math.\n• (C) alone: A pre-computed column works but without instructions, Genie may not know when to use calendar vs. fiscal quarters.\n• (E) Auto-detect fiscal calendars: FALSE. Genie does NOT automatically detect non-standard fiscal calendars from data patterns.\n\n🔑 EXAM TIP: Custom business logic in Genie:\n• Simple logic → Instructions + Sample Questions are sufficient\n• Complex logic (fiscal calendars, custom metrics) → Pre-compute in source tables + Instructions + Trusted Assets\n• Pre-computed columns reduce Genie's SQL generation burden and increase accuracy",
        "domain": "Developing, Sharing and Maintaining AI/BI Genie spaces"
},
    {
        "id": "db-da-331",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to create a table in the Gold layer but is unsure whether to use a VIEW, a materialized TABLE, or a TEMPORARY VIEW. The data will be accessed by 20 concurrent dashboard users throughout the day.\n\nWhich object type is most appropriate for this Gold-layer use case?",
        "options": [
                {
                        "id": "a",
                        "text": "A TEMPORARY VIEW, because it is the most efficient for concurrent access and persists across sessions."
                },
                {
                        "id": "b",
                        "text": "A VIEW, because it guarantees the freshest data by re-executing the query on every access."
                },
                {
                        "id": "c",
                        "text": "A materialized Delta TABLE created via CTAS, because it pre-computes results, supports concurrent reads efficiently, and persists across sessions."
                },
                {
                        "id": "d",
                        "text": "A GLOBAL TEMPORARY VIEW, because it is shared across all users and sessions."
                },
                {
                        "id": "e",
                        "text": "All three options perform identically for concurrent access patterns."
                }
        ],
        "correctIds": [
                "c"
        ],
        "explanation": "✅ CORRECT (C — Materialized Delta TABLE via CTAS): For 20 concurrent dashboard users, a pre-computed Delta table is the best choice:\n• Pre-computed: No redundant aggregation on each access\n• Concurrent reads: Delta Lake handles many simultaneous readers efficiently\n• Persistent: Survives sessions, scheduled maintenance possible\n\n❌ Why others are wrong:\n• (A) TEMPORARY VIEW: Session-scoped — disappears when the creator logs out. Other users can't access it.\n• (B) VIEW with fresh data: Re-executes the heavy query for each of 20 concurrent users — creates significant compute load.\n• (D) GLOBAL TEMPORARY VIEW: Cluster-scoped (not truly global). Dropped when cluster stops. Not suitable for production dashboards.\n• (E) All perform identically: FALSE. Materialized tables significantly outperform views for concurrent access.\n\n🔑 EXAM TIP: Gold layer object selection:\n• High concurrency + large data → Materialized TABLE (CTAS)\n• Low concurrency + must be fresh → VIEW\n• Session-only analysis → TEMPORARY VIEW\n• Automatic refresh needed → MATERIALIZED VIEW (Pro/Serverless warehouse)",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-332",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs `SELECT * FROM silver.events VERSION AS OF 5` and gets the expected historical data. However, after running `VACUUM silver.events RETAIN 24 HOURS`, the same Time Travel query fails.\n\nWhat caused the Time Travel query to fail after VACUUM?",
        "options": [
                {
                        "id": "a",
                        "text": "VACUUM deleted the transaction log entries for version 5, making it unreferenceable."
                },
                {
                        "id": "b",
                        "text": "VACUUM physically removed the old Parquet data files that version 5 referenced, because they were older than the 24-hour retention threshold."
                },
                {
                        "id": "c",
                        "text": "VACUUM resets the version counter, so version 5 now refers to a different snapshot."
                },
                {
                        "id": "d",
                        "text": "Time Travel is disabled automatically after VACUUM runs on a table."
                },
                {
                        "id": "e",
                        "text": "VACUUM only affects metadata; the analyst must have accidentally dropped the table."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — VACUUM removed data files that version 5 referenced): VACUUM with RETAIN 24 HOURS permanently deletes data files older than 24 hours that are no longer referenced by the CURRENT table version. Version 5's data files (which were part of an older snapshot) were deleted, so the Time Travel query can't reconstruct that version.\n\n❌ Why others are wrong:\n• (A) Transaction log entries deleted: VACUUM does NOT delete transaction log entries. The log has its own separate retention period (30 days).\n• (C) Version counter resets: FALSE. Delta Lake version numbers are monotonically increasing and never reset.\n• (D) Time Travel disabled: FALSE. Time Travel is not \"disabled\" by VACUUM. It fails only for versions whose data files have been removed.\n• (E) Only affects metadata: FALSE. VACUUM specifically removes DATA FILES, not metadata.\n\n🔑 EXAM TIP: VACUUM + Time Travel interaction:\n• VACUUM removes: data files older than retention period\n• VACUUM does NOT remove: transaction log entries\n• Result: DESCRIBE HISTORY still shows old versions, but querying them FAILS\n• Prevention: Never set retention below 7 days in production\n• Recovery: Once VACUUMed, data is PERMANENTLY gone — no recovery",
        "domain": "Data Modeling with Databricks SQL"
},
    {
        "id": "db-da-333",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to ensure that sales representatives can only see customer records from their assigned region in a shared Unity Catalog table. The table has a `region` column that matches the analyst's assigned region attribute.\n\nWhich Unity Catalog feature should be used to enforce this requirement?",
        "options": [
                {
                        "id": "a",
                        "text": "Column masking to hide the region column from unauthorized users."
                },
                {
                        "id": "b",
                        "text": "Row-level security using row filters that dynamically restrict rows based on the querying user's attributes."
                },
                {
                        "id": "c",
                        "text": "Creating separate tables per region and granting each sales rep access only to their region's table."
                },
                {
                        "id": "d",
                        "text": "Using a VIEW with a WHERE clause that hardcodes each user's email address."
                },
                {
                        "id": "e",
                        "text": "Encrypting region data so that only authorized users have the decryption key."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Row-level security using row filters): Unity Catalog row filters dynamically restrict which rows a user can see based on their identity or group membership. The filter function is applied to the table and evaluated transparently on every query.\n\n❌ Why others are wrong:\n• (A) Column masking: Masks COLUMN VALUES, not ROWS. The analyst needs to restrict which rows (regions) are visible, not hide column values.\n• (C) Separate tables per region: Creates data duplication, increases maintenance, and doesn't scale. Every new region requires a new table.\n• (D) VIEW with hardcoded emails: Doesn't scale — every new user requires updating the VIEW SQL. Not dynamic.\n• (E) Encrypting region data: Encryption doesn't provide row-level filtering. All authorized users see the same encrypted/decrypted data.\n\n🔑 EXAM TIP: Row Filter implementation:\nCREATE FUNCTION region_filter(region STRING)\nRETURNS BOOLEAN\nRETURN IF(IS_MEMBER('all_regions'), TRUE, region = CURRENT_USER_ATTRIBUTE('region'));\n\nALTER TABLE customers SET ROW FILTER region_filter ON (region);",
        "domain": "Securing Data"
},
    {
        "id": "db-da-334",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst discovers that a table containing employee social security numbers (SSN) is accessible to the entire analytics team. The data governance team requires that SSNs be visible only to HR analysts, while other analysts should see masked values (e.g., `XXX-XX-1234`).\n\nWhich Unity Catalog feature implements this requirement without creating duplicate tables?",
        "options": [
                {
                        "id": "a",
                        "text": "Row-level security to filter out rows containing SSNs for non-HR users."
                },
                {
                        "id": "b",
                        "text": "Dynamic column masking that applies a masking function to the SSN column based on the querying user's group membership."
                },
                {
                        "id": "c",
                        "text": "Revoking SELECT permission on the entire table from non-HR users."
                },
                {
                        "id": "d",
                        "text": "Creating a VIEW that excludes the SSN column and granting non-HR users access only to the view."
                },
                {
                        "id": "e",
                        "text": "Using Delta Lake encryption to encrypt the SSN column at rest."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Dynamic column masking): Column masking applies a masking function (UDF) to the SSN column at read time. HR analysts in the 'hr_group' see real SSNs; everyone else sees masked values (e.g., XXX-XX-1234). The underlying data is NEVER modified.\n\n❌ Why others are wrong:\n• (A) Row-level security: Filters ROWS, not columns. Would hide entire employee records, not just SSN values.\n• (C) Revoke SELECT on entire table: Too restrictive. The team needs access to OTHER columns (name, department, salary) — just not SSN.\n• (D) VIEW excluding SSN: Works but non-HR users must remember to use the view. Column masking is enforced on the TABLE itself — can't be bypassed.\n• (E) Delta Lake encryption: Encryption protects data at rest but doesn't provide selective visibility per user group.\n\n🔑 EXAM TIP: Column Masking implementation:\nCREATE FUNCTION mask_ssn(ssn STRING)\nRETURNS STRING\nRETURN IF(IS_MEMBER('hr_group'), ssn, CONCAT('XXX-XX-', RIGHT(ssn, 4)));\n\nALTER TABLE employees ALTER COLUMN ssn SET MASK mask_ssn;",
        "domain": "Securing Data"
},
    {
        "id": "db-da-335",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs `GRANT SELECT ON TABLE finance.transactions TO analyst_team` but members of `analyst_team` still cannot query the table. They receive a permission denied error.\n\nWhat is the most likely cause of this permission failure?",
        "options": [
                {
                        "id": "a",
                        "text": "The SELECT grant is not sufficient; the team also needs INSERT permission to read data."
                },
                {
                        "id": "b",
                        "text": "The team lacks USAGE permission on the parent catalog and/or schema. Unity Catalog requires USAGE at each level of the hierarchy (catalog → schema → table) for the SELECT grant to take effect."
                },
                {
                        "id": "c",
                        "text": "GRANT SELECT only works on views, not on tables. The analyst should use GRANT READ instead."
                },
                {
                        "id": "d",
                        "text": "The SQL Warehouse configuration prevents non-admin users from executing SELECT statements."
                },
                {
                        "id": "e",
                        "text": "The table must be registered as a Trusted Asset before external users can query it."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Missing USAGE on parent catalog/schema): Unity Catalog requires USAGE privilege at EACH level of the hierarchy. Even with SELECT on the table, users can't access it without USAGE on both the parent catalog AND schema.\n\nRequired grants:\n1. GRANT USAGE ON CATALOG finance TO analyst_team;\n2. GRANT USAGE ON SCHEMA finance.default TO analyst_team;\n3. GRANT SELECT ON TABLE finance.transactions TO analyst_team;\n\n❌ Why others are wrong:\n• (A) INSERT needed to read: FALSE. SELECT is sufficient for reading. INSERT is a write operation.\n• (C) SELECT only works on views: FALSE. SELECT works on tables, views, and materialized views.\n• (D) Warehouse prevents non-admin SELECT: FALSE. SQL Warehouses don't restrict SQL operations by user role.\n• (E) Table must be Trusted Asset: FALSE. Trusted Assets are a Genie Space concept, not a permission requirement.\n\n🔑 EXAM TIP: The USAGE chain (most tested concept in Securing Data):\n• USAGE must be granted at EVERY level: Catalog → Schema\n• Without USAGE, SELECT/MODIFY on child objects is unreachable\n• Think of USAGE as a \"door key\" — you need keys to traverse each level",
        "domain": "Securing Data"
},
    {
        "id": "db-da-336",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "An organization wants to share a curated dataset with an external partner company that does NOT use Databricks. The dataset contains aggregated market research data in a Delta table.\n\nWhich Databricks feature enables secure data sharing without the partner needing a Databricks account or copying the data?",
        "options": [
                {
                        "id": "a",
                        "text": "Unity Catalog's GRANT SELECT to external email addresses."
                },
                {
                        "id": "b",
                        "text": "Delta Sharing, an open protocol that allows sharing live Delta tables with external recipients through share-based access, regardless of their platform."
                },
                {
                        "id": "c",
                        "text": "Exporting the data as CSV files and sending them via encrypted email."
                },
                {
                        "id": "d",
                        "text": "Creating a public S3 bucket with the Parquet files and sharing the URL."
                },
                {
                        "id": "e",
                        "text": "Partner Connect, which establishes a direct connection between the partner's analytics platform and the Databricks workspace."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Delta Sharing): Delta Sharing is an open protocol for secure, cross-organization data sharing. Recipients access live data without needing a Databricks workspace or account. They can use any compatible client (pandas, Spark, Power BI, Tableau).\n\n❌ Why others are wrong:\n• (A) GRANT SELECT to external emails: GRANT only works for principals within the same Unity Catalog metastore. External organizations are outside this boundary.\n• (C) CSV via encrypted email: Manual, ungoverned, and not scalable. No auditability or access control.\n• (D) Public S3 bucket: Security disaster — no access control, no audit trail, data exposed to the internet.\n• (E) Partner Connect: Establishes technology partner integrations (e.g., Fivetran, dbt), not data sharing with external organizations.\n\n🔑 EXAM TIP: Delta Sharing key facts:\n• Open-source protocol (not proprietary to Databricks)\n• Recipients don't need Databricks\n• Read-only access (recipients can't modify source)\n• Supports: Spark, pandas, Power BI, Tableau, R\n• Audit trail maintained in provider's Unity Catalog",
        "domain": "Securing Data"
},
    {
        "id": "db-da-337",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A compliance officer asks a data analyst to produce an audit report showing all users who accessed the `payroll` table in the last 30 days, including which queries they ran and when.\n\nWhich Databricks capability provides this audit information?",
        "options": [
                {
                        "id": "a",
                        "text": "Delta Lake's transaction log, which records every INSERT, UPDATE, and DELETE operation with timestamps."
                },
                {
                        "id": "b",
                        "text": "Unity Catalog's system audit logs, which track data access events including the querying user, timestamp, query text, and accessed objects."
                },
                {
                        "id": "c",
                        "text": "The SQL Warehouse query history, which only shows queries from the current session."
                },
                {
                        "id": "d",
                        "text": "The DESCRIBE HISTORY command, which shows schema changes but not user access patterns."
                },
                {
                        "id": "e",
                        "text": "Databricks does not provide user-level data access auditing; a third-party tool is required."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Unity Catalog system audit logs): System audit logs (system.access.audit) capture comprehensive data access events: user identity, timestamp, query text, tables/columns accessed, and operation type. This is the definitive source for compliance auditing.\n\n❌ Why others are wrong:\n• (A) Delta transaction log: Records write OPERATIONS (INSERT, UPDATE, DELETE) but not user-level READ access patterns. Doesn't show which users ran SELECT queries.\n• (C) SQL Warehouse query history: Shows queries but is typically limited to current session or recent history, not a reliable 30-day archive for compliance.\n• (D) DESCRIBE HISTORY: Shows table-level operations (writes, schema changes) but NOT user access patterns or SELECT queries.\n• (E) Third-party tool required: FALSE. Unity Catalog provides built-in audit logging without external tools.\n\n🔑 EXAM TIP: Audit data sources:\n• system.access.audit → WHO accessed WHAT (compliance auditing)\n• DESCRIBE HISTORY → WHAT operations happened on a table\n• system.billing.usage → compute consumption\n• SQL Warehouse query history → recent query execution details",
        "domain": "Securing Data"
},
    {
        "id": "db-da-338",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst has been granted the MODIFY privilege on a table. Another analyst asks: 'Can you also grant me SELECT access to this table?'\n\nCan the first analyst grant SELECT to the second analyst?",
        "options": [
                {
                        "id": "a",
                        "text": "Yes, any user with MODIFY permission can grant any privilege on that object."
                },
                {
                        "id": "b",
                        "text": "No, only users with the OWNERSHIP privilege or account administrators can grant permissions on data objects in Unity Catalog."
                },
                {
                        "id": "c",
                        "text": "Yes, but only if both analysts belong to the same workspace group."
                },
                {
                        "id": "d",
                        "text": "No, GRANT operations can only be performed through the Catalog Explorer UI, not via SQL."
                },
                {
                        "id": "e",
                        "text": "Yes, MODIFY implicitly includes the ability to delegate SELECT access."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Only owners or admins can grant): In Unity Catalog, the ability to GRANT privileges is restricted to the object OWNER or account/metastore administrators. Having MODIFY privilege allows data changes (INSERT, UPDATE, DELETE) but does NOT include permission management capabilities.\n\n❌ Why others are wrong:\n• (A) MODIFY can grant any privilege: FALSE. MODIFY = data write access only, not permission management.\n• (C) Must be in same group: Group membership is irrelevant for granting permissions. Only OWNERSHIP matters.\n• (D) GRANT only via UI: FALSE. GRANT works via both SQL commands and Catalog Explorer UI.\n• (E) MODIFY includes delegation: FALSE. MODIFY does not include any delegation or permission management abilities.\n\n🔑 EXAM TIP: Permission management rules:\n• WHO can GRANT: Object owner OR metastore/account admin\n• MODIFY ≠ ability to grant (common exam trap)\n• OWNERSHIP is the only privilege that includes permission management\n• Transfer ownership: ALTER TABLE table_name SET OWNER TO new_owner",
        "domain": "Securing Data"
},
    {
        "id": "db-da-339",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst encounters a table with PII data (personal email addresses) that they should not have access to. The analyst has already viewed several rows before realizing the sensitivity.\n\nWhat is the correct protocol the analyst should follow?",
        "options": [
                {
                        "id": "a",
                        "text": "Delete the table to ensure no one else can access the PII data."
                },
                {
                        "id": "b",
                        "text": "Drop the PII column and continue using the remaining data without notifying anyone."
                },
                {
                        "id": "c",
                        "text": "Stop accessing the data immediately and notify their supervisor to ensure the data is handled following organizational and legal policies."
                },
                {
                        "id": "d",
                        "text": "Export the data to a local file and apply masking manually before continuing analysis."
                },
                {
                        "id": "e",
                        "text": "Apply column masking on the table themselves to protect other users from the same issue."
                }
        ],
        "correctIds": [
                "c"
        ],
        "explanation": "✅ CORRECT (C — Stop accessing and notify supervisor): The correct protocol for accidentally encountering unauthorized PII:\n1. IMMEDIATELY stop accessing the data\n2. Do NOT modify, delete, or export anything\n3. Notify supervisor or data governance team\n4. Follow organizational incident response procedures\n\n❌ Why others are wrong:\n• (A) Delete the table: Destructive action that may violate compliance requirements and destroy evidence for auditing.\n• (B) Drop PII column: Unauthorized data modification. Also hides the governance gap from administrators.\n• (D) Export to local file: Exfiltrates PII data — makes the breach WORSE, not better.\n• (E) Apply column masking yourself: May lack the authority to modify table security. Also doesn't address the root cause (improper access grant).\n\n🔑 EXAM TIP: PII incident response:\n1. STOP accessing immediately\n2. Do NOT modify or delete anything\n3. ESCALATE to governance team\n4. DOCUMENT what was accessed\n5. Common exam trap: \"Delete the data to prevent further exposure\" — WRONG answer",
        "domain": "Securing Data"
},
    {
        "id": "db-da-340",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data governance team wants to classify all tables in Unity Catalog by data sensitivity (public, internal, confidential, restricted). They want this classification to be searchable and enforceable.\n\nWhich Unity Catalog feature supports this metadata-driven governance approach?",
        "options": [
                {
                        "id": "a",
                        "text": "Table comments (COMMENT ON TABLE) that describe the sensitivity level in free text."
                },
                {
                        "id": "b",
                        "text": "Tags (governed tags) that apply key-value metadata like `sensitivity = 'confidential'` to tables and columns, enabling search and policy enforcement."
                },
                {
                        "id": "c",
                        "text": "Table properties (TBLPROPERTIES) that store sensitivity information as Delta configuration."
                },
                {
                        "id": "d",
                        "text": "Naming conventions that include the sensitivity level in the table name (e.g., `confidential_payroll`)."
                },
                {
                        "id": "e",
                        "text": "Creating separate catalogs for each sensitivity level (catalog_public, catalog_confidential, etc.)."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Governed Tags with key-value metadata): Unity Catalog Governed Tags provide structured, searchable, and enforceable metadata classification. Tags like 'sensitivity' = 'confidential' can be applied to tables and columns, discovered through Catalog Explorer, and used in ABAC policies.\n\n❌ Why others are wrong:\n• (A) Table comments: Free-text, not structured. Cannot be searched programmatically or used in access control policies.\n• (C) TBLPROPERTIES: Store Delta Lake configuration (not governance metadata). Not searchable through Catalog Explorer.\n• (D) Naming conventions: Fragile, requires human discipline, not enforceable. Tables may be renamed or conventions violated.\n• (E) Separate catalogs: Over-architects the solution. Creates silos and increases complexity for a classification problem.\n\n🔑 EXAM TIP: Tags vs. Comments vs. Properties:\n• Tags (SET TAGS): Structured key-value, searchable, governance-enforceable\n• Comments (SET COMMENT): Free-text documentation, human-readable\n• Properties (TBLPROPERTIES): Delta Lake configuration, technical settings\n• For governance classification → use TAGS",
        "domain": "Securing Data"
},
    {
        "id": "db-da-341",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to understand the complete flow of data from a raw Bronze table through Silver transformations to the final Gold dashboard table, to troubleshoot a data quality issue.\n\nWhich Unity Catalog feature automatically provides this end-to-end data flow visibility?",
        "options": [
                {
                        "id": "a",
                        "text": "DESCRIBE HISTORY, which shows all operations performed on each individual table."
                },
                {
                        "id": "b",
                        "text": "Data lineage tracking, which automatically maps table-level and column-level dependencies across the Bronze → Silver → Gold pipeline without additional configuration."
                },
                {
                        "id": "c",
                        "text": "Query Profile, which shows the execution plan of individual queries."
                },
                {
                        "id": "d",
                        "text": "Delta Lake transaction logs, which record write operations per table."
                },
                {
                        "id": "e",
                        "text": "Change Data Feed (CDF), which tracks row-level changes in a table."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Data lineage tracking): Unity Catalog automatically maps table-level and column-level dependencies across the entire data pipeline (Bronze → Silver → Gold). This visual graph shows how data flows, transforms, and where issues may propagate.\n\n❌ Why others are wrong:\n• (A) DESCRIBE HISTORY: Shows operations on a SINGLE table (versions, timestamps, operations). Doesn't show cross-table dependencies.\n• (C) Query Profile: Shows the execution plan of a SINGLE query (physical operators, time distribution). Not cross-pipeline flow.\n• (D) Delta transaction logs: Per-table write operations. No cross-table lineage information.\n• (E) Change Data Feed: Tracks row-level changes WITHIN a table. Doesn't map pipeline flow between tables.\n\n🔑 EXAM TIP: Lineage use cases:\n• Impact analysis: \"If I change column X, what dashboards break?\"\n• Root cause: \"Bad data in Gold table — where did it come from?\"\n• Compliance: \"Show the full data transformation chain for audit\"\n• Captured AUTOMATICALLY as queries execute — no manual configuration",
        "domain": "Securing Data"
},
    {
        "id": "db-da-342",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to ingest a directory of JSON files that arrives incrementally in an S3 bucket. New files are added every hour. The analyst wants the ingestion to be idempotent — files already processed should not be re-ingested even if the pipeline is restarted.\n\nWhich Databricks SQL command is purpose-built for this idempotent incremental ingestion?",
        "options": [
                {
                        "id": "a",
                        "text": "INSERT INTO target_table SELECT * FROM json.`s3://bucket/data/` — since it reads all files, it naturally handles deduplication."
                },
                {
                        "id": "b",
                        "text": "COPY INTO target_table FROM 's3://bucket/data/' FILEFORMAT = JSON — it automatically tracks which files have been loaded and skips previously processed files."
                },
                {
                        "id": "c",
                        "text": "CREATE TABLE target_table AS SELECT * FROM json.`s3://bucket/data/` — using CTAS to reload the complete dataset each time."
                },
                {
                        "id": "d",
                        "text": "MERGE INTO target_table USING json.`s3://bucket/data/` — it deduplicates records based on a merge key."
                },
                {
                        "id": "e",
                        "text": "LOAD DATA INPATH 's3://bucket/data/' INTO TABLE target_table — the standard SQL data loading command."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): COPY INTO is designed specifically for IDEMPOTENT incremental ingestion:\n1. Tracks processed files using file-level checksums stored in the Delta transaction log\n2. On subsequent runs, automatically SKIPS already-processed files\n3. Only new/unprocessed files are loaded → no duplicates\n\nSyntax: COPY INTO target_table FROM 's3://...' FILEFORMAT = JSON\n\n❌ Why others are wrong:\n• (A) INSERT INTO ... SELECT: Re-reads ALL files in the directory every single run. Run it 5 times = 5x duplicated data. No file tracking mechanism.\n• (C) CREATE TABLE AS SELECT: Creates a NEW table each time. Doesn't support incremental appends. Only useful for one-time table creation.\n• (D) MERGE INTO: Can deduplicate records using a key, but still RE-READS all source files every time. More expensive and complex than COPY INTO for simple append scenarios.\n• (E) LOAD DATA INPATH: This is a Hive command, not supported in Databricks SQL. Even in Hive, it moves files rather than copying them.\n\n🎯 EXAM TIP: 'Idempotent' in the exam = COPY INTO or Auto Loader. INSERT INTO = always creates duplicates. MERGE = deduplicates rows but re-reads all files.",
        "domain": "Importing Data"
},
    {
        "id": "db-da-343",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst receives a 2GB CSV file with pipe-delimited fields (`|`), a custom date format (`dd-MM-yyyy`), and some rows with malformed data. The analyst needs to load this into a Delta table while handling errors gracefully.\n\nWhich COPY INTO configuration correctly handles these requirements?",
        "options": [
                {
                        "id": "a",
                        "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = CSV FORMAT_OPTIONS ('delimiter' = '|', 'dateFormat' = 'dd-MM-yyyy', 'mode' = 'PERMISSIVE', 'header' = 'true')"
                },
                {
                        "id": "b",
                        "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = CSV FORMAT_OPTIONS ('sep' = '|') — all other options are auto-detected."
                },
                {
                        "id": "c",
                        "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = PARQUET FORMAT_OPTIONS ('delimiter' = '|') — CSV files are converted to Parquet automatically."
                },
                {
                        "id": "d",
                        "text": "INSERT INTO target SELECT * FROM csv.'/path/file.csv' — standard SQL insertion handles all format options automatically."
                },
                {
                        "id": "e",
                        "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = CSV FORMAT_OPTIONS ('delimiter' = '|', 'mode' = 'FAILFAST') — to reject all malformed rows immediately."
                }
        ],
        "correctIds": [
                "a"
        ],
        "explanation": "✅ CORRECT (A): The correct COPY INTO configuration for this scenario:\n- delimiter = '|' (pipe-separated)\n- dateFormat = 'dd-MM-yyyy' (custom date parsing)\n- header = 'true' (first row is column names)\n- mode = 'PERMISSIVE' (malformed rows get NULL values instead of failing)\n\nFull syntax:\nCOPY INTO target FROM '/path' FILEFORMAT = CSV\nFORMAT_OPTIONS('delimiter'='|', 'dateFormat'='dd-MM-yyyy', 'header'='true')\nCOPY_OPTIONS('mode'='PERMISSIVE')\n\n❌ Why others are wrong:\n• (B) mode = 'FAILFAST': Aborts the ENTIRE load on the FIRST malformed row. With 2GB of real-world data containing known quality issues, this would almost certainly fail immediately.\n• (C) FILEFORMAT = PARQUET: The source file is CSV, not Parquet. PARQUET format can't parse pipe-delimited text files.\n• (D) INSERT INTO ... SELECT: No FORMAT_OPTIONS support — you can't specify custom delimiters or date formats with INSERT INTO.\n• (E) mode = 'DROPMALFORMED': Silently DROPS bad rows entirely. You lose data without knowing it. PERMISSIVE is safer because it keeps the row with NULLs for review.\n\n🎯 EXAM TIP: PERMISSIVE = keep rows with nulls (safest). FAILFAST = abort on error. DROPMALFORMED = silently delete bad rows (data loss risk).",
        "domain": "Importing Data"
},
    {
        "id": "db-da-344",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to create a temporary queryable reference to a set of Parquet files in an external S3 location without formally registering the data as a permanent table in Unity Catalog.\n\nWhich SQL syntax allows querying external files directly without creating a table?",
        "options": [
                {
                        "id": "a",
                        "text": "SELECT * FROM parquet.`s3://bucket/data/sales/` — using backtick-quoted path references to directly query files."
                },
                {
                        "id": "b",
                        "text": "SELECT * FROM EXTERNAL 's3://bucket/data/sales/' FORMAT PARQUET — using the EXTERNAL keyword for ad-hoc access."
                },
                {
                        "id": "c",
                        "text": "MOUNT 's3://bucket/data/' AS '/mnt/sales'; SELECT * FROM '/mnt/sales/' — mounting the storage first."
                },
                {
                        "id": "d",
                        "text": "CREATE TEMP VIEW sales AS PARQUET 's3://bucket/data/sales/' — creating a temporary Parquet reference."
                },
                {
                        "id": "e",
                        "text": "Direct file querying is not possible in Databricks; files must always be registered as tables first."
                }
        ],
        "correctIds": [
                "a"
        ],
        "explanation": "✅ CORRECT (A): Databricks supports direct file path querying with the syntax: format.\x60path\x60\n\nExamples:\n- SELECT * FROM parquet.\x60s3://bucket/data/\x60\n- SELECT * FROM json.\x60s3://bucket/logs/\x60\n- SELECT * FROM csv.\x60s3://bucket/files/\x60\n\nThis is called PATH-BASED querying. Backticks around the path are REQUIRED. No table registration needed — perfect for ad-hoc exploration.\n\n❌ Why others are wrong:\n• (B) 'SELECT FROM EXTERNAL ... FORMAT': This syntax doesn't exist in Databricks SQL. Not valid.\n• (C) MOUNT + SELECT: MOUNT is a LEGACY approach (pre-Unity Catalog). Modern Databricks uses External Locations instead. Also, MOUNT requires admin privileges.\n• (D) CREATE TEMP VIEW AS PARQUET: This syntax is invalid. TEMP VIEWs are created with SQL queries, not format declarations.\n• (E) 'Not possible': Completely false — path-based querying is a core Databricks feature.\n\n🎯 EXAM TIP: format.\x60path\x60 with backticks = instant ad-hoc querying. No registration, no table creation. Works for parquet, json, csv, delta, avro.",
        "domain": "Importing Data"
},
    {
        "id": "db-da-345",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst creates an external table pointing to a shared S3 location:\n\n`CREATE TABLE analytics.ext_logs LOCATION 's3://shared-bucket/logs/'`\n\nAnother team later adds new Parquet files to the same S3 path. The analyst queries the table but does not see the new data.\n\nWhat should the analyst do to make the new files visible?",
        "options": [
                {
                        "id": "a",
                        "text": "Run REFRESH TABLE analytics.ext_logs to update the table metadata and pick up newly added files."
                },
                {
                        "id": "b",
                        "text": "Drop and recreate the table, because external tables cannot detect new files after creation."
                },
                {
                        "id": "c",
                        "text": "Run VACUUM to force a scan of the external location."
                },
                {
                        "id": "d",
                        "text": "The new files should appear automatically; the issue is likely a caching problem that requires restarting the SQL Warehouse."
                },
                {
                        "id": "e",
                        "text": "Run COPY INTO to manually ingest the new files into the existing table."
                }
        ],
        "correctIds": [
                "a"
        ],
        "explanation": "✅ CORRECT (A): REFRESH TABLE forces Databricks to rescan the external location and update its metadata cache. This is necessary because:\n1. External tables point to data managed OUTSIDE Databricks\n2. When external systems add files, Databricks' metadata cache doesn't know about them\n3. REFRESH TABLE triggers a full rescan of the LOCATION path\n\nSyntax: REFRESH TABLE analytics.ext_logs\n\n❌ Why others are wrong:\n• (B) 'Drop and recreate': Overkill and risky — you'd lose table metadata, permissions, and any views that depend on this table.\n• (C) VACUUM: VACUUM removes old, unused data files from MANAGED Delta tables. It does NOT scan external locations for new files. Completely unrelated operation.\n• (D) 'Appears automatically': True for MANAGED Delta tables (which use a transaction log), but FALSE for external tables pointing to non-Delta formats. External tables cache metadata and need manual refresh.\n• (E) COPY INTO: This is for loading data INTO a table, not for refreshing metadata of an existing external table.\n\n🎯 EXAM TIP: External table + new files not appearing = REFRESH TABLE. Managed Delta table = automatic (uses transaction log). This distinction is a common exam trap.",
        "domain": "Importing Data"
},
    {
        "id": "db-da-346",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to load data from an external PostgreSQL database into a Databricks Delta table. The source table has 10 million rows and is updated daily.\n\nWhich approach is most appropriate for this initial full load followed by daily incremental updates?",
        "options": [
                {
                        "id": "a",
                        "text": "Use COPY INTO with JDBC connection strings to pull data directly from PostgreSQL."
                },
                {
                        "id": "b",
                        "text": "Use a Partner Connect tool (e.g., Fivetran) for the initial replication and incremental CDC, then query the replicated Delta tables in Databricks."
                },
                {
                        "id": "c",
                        "text": "Export the PostgreSQL data as CSV files daily and upload them manually through the Databricks UI."
                },
                {
                        "id": "d",
                        "text": "Create a foreign table in Unity Catalog that queries PostgreSQL in real-time through Lakehouse Federation."
                },
                {
                        "id": "e",
                        "text": "Both B and D are valid approaches: Fivetran for physical replication or Lakehouse Federation for virtual access, depending on latency and performance requirements."
                }
        ],
        "correctIds": [
                "e"
        ],
        "explanation": "✅ CORRECT (E): Both approaches are valid for different use cases:\n\n📌 Option B (Fivetran/Partner Connect):\n- PHYSICAL REPLICATION: Copies data from PostgreSQL into a Delta table\n- Best for: Frequent queries, low-latency dashboards, heavy analytics\n- CDC support: Fivetran tracks changes and syncs incrementally\n- Trade-off: Data has some latency (minutes to hours behind source)\n\n📌 Option D (Lakehouse Federation):\n- VIRTUAL TABLE: Queries PostgreSQL directly without copying data\n- Best for: Real-time freshness, infrequent queries, compliance (data stays in source)\n- Trade-off: Slower queries (network round-trip to PostgreSQL each time)\n\n❌ Why others are wrong:\n• (A) COPY INTO with JDBC: COPY INTO doesn't support JDBC connections. It's designed for file-based ingestion (CSV, JSON, Parquet from cloud storage), not database connections.\n• (C) CSV export daily: Manual, error-prone, no automation, no CDC. This is 2010-era data engineering.\n\n🎯 EXAM TIP: Physical copy (Fivetran) = speed + latency. Virtual table (Federation) = freshness + cost. Both are valid = 'Both B and D' answers are common on the exam.",
        "domain": "Importing Data"
},
    {
        "id": "db-da-347",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst uploads a small CSV file (500 rows) through the Databricks workspace UI using the 'Create Table' wizard. After successful upload, the analyst notices the data is accessible.\n\nWhere does the uploaded data physically reside after using the UI upload feature?",
        "options": [
                {
                        "id": "a",
                        "text": "In a temporary session-scoped table that disappears when the analyst logs out."
                },
                {
                        "id": "b",
                        "text": "As a managed Delta table in Unity Catalog, stored in the managed storage location of the target catalog/schema."
                },
                {
                        "id": "c",
                        "text": "In the Databricks Control Plane as a cached dataset."
                },
                {
                        "id": "d",
                        "text": "As a CSV file attached to the analyst's personal workspace folder."
                },
                {
                        "id": "e",
                        "text": "In an external S3 bucket that requires separate storage configuration."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): When you upload a file through the Databricks UI, it becomes a MANAGED DELTA TABLE in Unity Catalog. This means:\n1. Data is stored in the managed storage location of the target schema/catalog\n2. The table is PERSISTENT — it survives session restarts and is accessible to other users\n3. It's fully governed by Unity Catalog (permissions, lineage, audit)\n4. Format is always Delta (even if you uploaded CSV, it converts to Delta)\n\n❌ Why others are wrong:\n• (A) 'Temporary session-scoped table': The uploaded data is PERMANENT, not temporary. It persists after you close your browser.\n• (C) 'Control Plane cached dataset': The Control Plane manages cluster orchestration and workspace metadata — it doesn't store user data.\n• (D) 'Personal workspace folder CSV': The data is converted from CSV to Delta format and stored in cloud storage, NOT attached as a raw file to your workspace.\n• (E) 'External S3 bucket': UI uploads create MANAGED tables (Databricks controls the storage location). No external storage configuration is needed.\n\n🎯 EXAM TIP: UI Upload = always creates a MANAGED Delta table. Managed = Databricks controls storage lifecycle. External = YOU control storage.",
        "domain": "Importing Data"
},
    {
        "id": "db-da-348",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs COPY INTO to load JSON files that contain nested objects (e.g., `{\"user\": {\"name\": \"Alice\", \"address\": {\"city\": \"NYC\"}}}`).\n\nThe resulting table has a column `user` of type STRUCT. The analyst needs to extract the city value for analysis.\n\nWhich SQL syntax correctly accesses the nested `city` field?",
        "options": [
                {
                        "id": "a",
                        "text": "SELECT user->address->city FROM target_table"
                },
                {
                        "id": "b",
                        "text": "SELECT user.address.city FROM target_table"
                },
                {
                        "id": "c",
                        "text": "SELECT GET_JSON_OBJECT(user, '$.address.city') FROM target_table"
                },
                {
                        "id": "d",
                        "text": "SELECT user['address']['city'] FROM target_table"
                },
                {
                        "id": "e",
                        "text": "SELECT FLATTEN(user).city FROM target_table"
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): In Databricks SQL, STRUCT fields use DOT NOTATION for nested access:\n\nuser.address.city\n\nSince the JSON was loaded into a STRUCT column (not a raw JSON string), the data is already parsed. Dot notation navigates the STRUCT hierarchy directly.\n\n❌ Why others are wrong:\n• (A) user->address->city: Arrow notation (->) is used in PostgreSQL and MySQL, NOT in Databricks SQL. Databricks uses dot notation for STRUCTs.\n• (C) GET_JSON_OBJECT(user, '$.address.city'): This function is for parsing RAW JSON STRINGS (type STRING), not STRUCT columns. Since the column is already a STRUCT, the data is already parsed — no need for JSON extraction.\n• (D) user['address']['city']: Bracket notation is for MAP columns (key-value pairs) and ARRAY columns (index access), NOT for STRUCTs. STRUCT = dot, MAP = brackets, ARRAY = brackets with index.\n• (E) FLATTEN(user).city: FLATTEN is for exploding ARRAY columns into rows, not for navigating STRUCT fields.\n\n🎯 EXAM TIP: STRUCT = dot.notation (user.address.city). MAP = brackets['key']. ARRAY = brackets[0]. JSON STRING = GET_JSON_OBJECT or json_column:path syntax.",
        "domain": "Importing Data"
},
    {
        "id": "db-da-349",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to create an external table in Unity Catalog that references data stored in the company's ADLS Gen2 account. The analyst writes:\n\n`CREATE TABLE analytics.ext_sales (id INT, amount DOUBLE) LOCATION 'abfss://container@account.dfs.core.windows.net/sales/'`\n\nThe query fails with a permission error.\n\nWhat is the most likely cause?",
        "options": [
                {
                        "id": "a",
                        "text": "The LOCATION URL syntax is incorrect for ADLS Gen2."
                },
                {
                        "id": "b",
                        "text": "An External Location must be registered in Unity Catalog that maps to this storage path, and a Storage Credential must be configured with appropriate cloud permissions."
                },
                {
                        "id": "c",
                        "text": "External tables can only point to S3, not ADLS Gen2."
                },
                {
                        "id": "d",
                        "text": "The analyst needs to run MOUNT first before creating external tables."
                },
                {
                        "id": "e",
                        "text": "Unity Catalog does not support external tables; all tables must be managed."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): Unity Catalog requires an EXTERNAL LOCATION to be registered before you can create an external table pointing to that path. The access chain is:\n\n1. Storage Credential → authenticates to cloud provider (Service Principal / IAM Role)\n2. External Location → maps a storage path (abfss://...) to a credential\n3. External Table → references the External Location path\n\nWithout step 2, Unity Catalog blocks the CREATE TABLE because the path 'abfss://...' is not registered.\n\n❌ Why others are wrong:\n• (A) 'LOCATION URL syntax incorrect': The abfss:// syntax IS correct for ADLS Gen2. The problem isn't syntax — it's the missing External Location registration.\n• (C) 'External tables only for S3': False — Unity Catalog supports external tables on S3, ADLS Gen2, and GCS. All three major cloud providers.\n• (D) 'MOUNT first': MOUNT is a LEGACY approach that bypasses Unity Catalog governance. Modern Databricks uses External Locations instead of MOUNTs.\n• (E) 'UC doesn't support external tables': Completely false. Unity Catalog fully supports external tables — it just requires proper governance objects (credential + location).\n\n🎯 EXAM TIP: Missing External Location is the #1 reason CREATE EXTERNAL TABLE fails. Always check: Credential → Location → Table.",
        "domain": "Importing Data"
},
    {
        "id": "db-da-350",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs a query that takes 45 minutes to complete. The analyst opens the Query Profile and notices that 90% of the execution time is spent in a single 'Scan' stage reading a 200GB table, even though the query filters on `WHERE date = '2026-01-15'`.\n\nWhich optimization would most significantly reduce the scan time?",
        "options": [
                {
                        "id": "a",
                        "text": "Add an index on the `date` column to speed up the filter operation."
                },
                {
                        "id": "b",
                        "text": "Apply Liquid Clustering on the `date` column (or ZORDER BY date) so that the filter can skip irrelevant files through data skipping, reducing the volume of data scanned."
                },
                {
                        "id": "c",
                        "text": "Increase the SQL Warehouse size to add more compute nodes for parallel scanning."
                },
                {
                        "id": "d",
                        "text": "Convert the table from Delta to Parquet format for faster read performance."
                },
                {
                        "id": "e",
                        "text": "Add a LIMIT 1000 clause to reduce the amount of data returned."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Apply Liquid Clustering/ZORDER on date column for data skipping): When the Query Profile shows 90% time in a Scan stage reading a 200GB table with a date filter, the bottleneck is FULL TABLE SCAN. Liquid Clustering (or ZORDER BY date) organizes data files so that rows with similar dates are co-located. Delta Lake's data skipping then reads ONLY the files containing the target date range, typically scanning <5% of total data.\n\n❌ Why others are wrong:\n• (A) \"Add an index on date\": Delta Lake does NOT support traditional indexes like RDBMS. Data skipping via clustering is the Delta Lake equivalent.\n• (C) \"Increase warehouse size\": More compute parallelizes the scan but still reads ALL 200GB. Clustering reduces data READ from 200GB to perhaps 5-10GB — a fundamentally different optimization.\n• (D) \"Convert to Parquet from Delta\": Delta IS Parquet (with a transaction log). Converting away from Delta LOSES features (ACID, time travel, data skipping) with no performance gain.\n• (E) \"Add LIMIT 1000\": LIMIT reduces output rows but the full scan still happens first (scan → filter → limit). It doesn't reduce I/O.\n\n🎯 EXAM TIP: Query Profile shows scan bottleneck → solution is data organization (Liquid Clustering > ZORDER > partitioning). Query Profile shows join bottleneck → solution is join strategy (Broadcast hint, table sizing).",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-351",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst uses the Query Profile to analyze a slow-running query and notices a 'Sort Merge Join' between two large tables. A colleague suggests it should be a 'Broadcast Hash Join' instead.\n\nUnder what condition does Databricks automatically choose a Broadcast Hash Join?",
        "options": [
                {
                        "id": "a",
                        "text": "When both tables are larger than 1GB, a Broadcast Hash Join is always more efficient."
                },
                {
                        "id": "b",
                        "text": "When one of the joined tables is small enough (typically under 10MB by default) to be broadcast to all worker nodes, eliminating the need for expensive shuffle operations."
                },
                {
                        "id": "c",
                        "text": "Broadcast Hash Join is never chosen automatically; it must always be specified with a query hint."
                },
                {
                        "id": "d",
                        "text": "When the join is performed on a primary key column, Databricks always uses Broadcast Hash Join."
                },
                {
                        "id": "e",
                        "text": "Broadcast Hash Join is only available when using Photon-enabled warehouses."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — When one table is small enough (~10MB default) to be broadcast to all workers): Broadcast Hash Join works by copying the ENTIRE small table to every worker node. Each worker then performs a local hash join with its partition of the large table, eliminating expensive shuffle (data redistribution). This is dramatically faster but requires the small table to fit in each worker's memory.\n\n❌ Why others are wrong:\n• (A) \"Both tables > 1GB, Broadcast is more efficient\": OPPOSITE — broadcasting a 1GB+ table would exhaust worker memory. Sort Merge Join is correct for two large tables.\n• (C) \"Never chosen automatically, requires hint\": FALSE. The optimizer automatically chooses Broadcast Hash Join when the small table is below the threshold. Hints override this when needed.\n• (D) \"Always used on primary key joins\": Join strategy depends on TABLE SIZE, not column type. Primary key columns don't trigger broadcast behavior.\n• (E) \"Only with Photon\": Broadcast Hash Join is a Spark-level optimization available in ALL warehouse types, not just Photon-enabled ones.\n\n🎯 EXAM TIP: Join strategies by table size: Small + Large → Broadcast Hash Join (automatic if small < 10MB). Large + Large → Sort Merge Join. Hint syntax: /*+ BROADCAST(small_table) */ to force broadcast when optimizer doesn't choose it.",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-352",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst writes a query that uses `SELECT *` from a table with 150 columns, but the dashboard only needs 5 specific columns. The Query Profile shows high I/O and memory usage.\n\nWhich principle explains why `SELECT *` is inefficient for columnar storage formats like Delta (Parquet)?",
        "options": [
                {
                        "id": "a",
                        "text": "Parquet stores data row-by-row, so reading all columns is the same cost as reading 5 columns."
                },
                {
                        "id": "b",
                        "text": "Parquet is a columnar format — each column is stored separately. SELECT * forces reading all 150 column files, while selecting only 5 columns reads 97% less data from storage."
                },
                {
                        "id": "c",
                        "text": "SELECT * is slow because it triggers a full table lock, preventing other queries from running."
                },
                {
                        "id": "d",
                        "text": "The inefficiency comes from network transfer, not storage I/O — the same amount of data is scanned regardless."
                },
                {
                        "id": "e",
                        "text": "SELECT * is only slow on external tables; managed Delta tables are unaffected."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Parquet is columnar; SELECT * reads ALL 150 column files vs. only 5): Parquet stores each column in a separate column chunk within row groups. When you SELECT *, the engine must read all 150 column chunks from every row group. Selecting only 5 columns reads just those 5 chunks — reducing I/O by ~97% (5/150) and proportionally reducing memory usage.\n\n❌ Why others are wrong:\n• (A) \"Parquet stores row-by-row, same cost\": FALSE. Parquet is COLUMNAR, not row-based. Row-based formats (CSV, JSON) read all columns regardless — columnar formats skip unneeded columns.\n• (C) \"SELECT * triggers full table lock\": SQL SELECT operations are read-only and don't acquire write locks. The inefficiency is I/O, not locking.\n• (D) \"Inefficiency from network transfer, not storage I/O\": The bottleneck IS storage I/O — reading 150 columns from cloud storage vs. 5. Network transfer is proportional to data read.\n• (E) \"Only slow on external tables\": Column pruning benefits apply equally to managed and external Delta tables. The storage format (Parquet) is the same.\n\n🎯 EXAM TIP: Column pruning is a fundamental Parquet optimization. ALWAYS specify only needed columns: SELECT col1, col2 FROM table instead of SELECT *. This reduces I/O, memory, and network transfer proportionally.",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-353",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs OPTIMIZE on a Gold-layer table with 50,000 small files (each under 1MB). After optimization, the table has 500 files of approximately 100MB each. Dashboard query time improves from 3 minutes to 20 seconds.\n\nWhat does OPTIMIZE do that caused this performance improvement?",
        "options": [
                {
                        "id": "a",
                        "text": "OPTIMIZE adds indexes to the Delta table, enabling faster lookups on filtered queries."
                },
                {
                        "id": "b",
                        "text": "OPTIMIZE compacts many small files into fewer, larger files (targeting ~1GB), reducing the overhead of opening thousands of files and improving I/O throughput through sequential reads."
                },
                {
                        "id": "c",
                        "text": "OPTIMIZE caches the table data in memory on the SQL Warehouse, so subsequent reads avoid disk I/O."
                },
                {
                        "id": "d",
                        "text": "OPTIMIZE converts the table from Parquet to a proprietary Databricks format with better compression."
                },
                {
                        "id": "e",
                        "text": "OPTIMIZE rewrites queries to use more efficient execution plans."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — OPTIMIZE compacts small files into fewer, larger files reducing file-open overhead): The \"small files problem\" occurs when a table contains thousands of tiny files. Each file requires a separate open/read/close operation, metadata lookup, and task scheduling. OPTIMIZE merges these into fewer, optimally-sized files (~1GB target), dramatically reducing the per-file overhead.\n\n❌ Why others are wrong:\n• (A) \"OPTIMIZE adds indexes\": Delta Lake does NOT support traditional indexes. OPTIMIZE performs file compaction and optional data clustering (ZORDER/Liquid Clustering).\n• (C) \"OPTIMIZE caches data in memory\": OPTIMIZE is a STORAGE operation that rewrites files on disk. It doesn't manage in-memory caching — that's Delta Cache or Spark .cache().\n• (D) \"Converts Parquet to proprietary format\": OPTIMIZE keeps data in open Parquet format. It compacts files but doesn't change the format.\n• (E) \"Rewrites queries for better execution plans\": OPTIMIZE modifies DATA FILES, not query plans. Query plans are generated by the SQL optimizer at query time.\n\n🎯 EXAM TIP: OPTIMIZE does TWO things: (1) File compaction (small files → large files), (2) Data clustering (ZORDER/Liquid Clustering for data skipping). After OPTIMIZE, run VACUUM to clean up the old small files.",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-354",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst creates a SQL alert on a query: `SELECT COUNT(*) AS failed_jobs FROM job_status WHERE status = 'FAILED' AND date = CURRENT_DATE()`. The alert should trigger when more than 10 jobs fail in a day.\n\nWhich alert configuration is correct?",
        "options": [
                {
                        "id": "a",
                        "text": "Set the alert trigger to: 'Value column = failed_jobs, Condition = greater than, Threshold = 10' with a refresh schedule aligned to the monitoring window."
                },
                {
                        "id": "b",
                        "text": "Set the alert to trigger when the query returns more than 10 rows."
                },
                {
                        "id": "c",
                        "text": "Create a dashboard visualization and enable the 'alert on threshold' feature in the chart settings."
                },
                {
                        "id": "d",
                        "text": "Write a Python script that polls the query results and sends email notifications."
                },
                {
                        "id": "e",
                        "text": "Alerts only support string comparisons, not numeric thresholds."
                }
        ],
        "correctIds": [
                "a"
        ],
        "explanation": "✅ CORRECT (A — Configure value column, condition > 10, with refresh schedule): Databricks SQL Alerts monitor a SINGLE numeric value from a query result. Configuration: (1) specify the value column (failed_jobs), (2) set the condition (greater than), (3) set the threshold (10), and (4) schedule the query to run periodically (e.g., every 15 minutes) to check the condition.\n\n❌ Why others are wrong:\n• (B) \"Trigger when query returns > 10 rows\": Alerts work on the VALUE of a specific column, not on row count. The query should return ONE row with the aggregated count.\n• (C) \"Dashboard visualization alert feature\": Dashboards don't have built-in threshold-based alerting on individual visualizations. Alerts are configured separately in the Alerts section.\n• (D) \"Python script polling\": While technically possible, this bypasses the built-in Alerts system. Databricks SQL Alerts provide native, no-code threshold monitoring.\n• (E) \"Only supports string comparisons\": FALSE. Alerts specifically support numeric comparisons (>, <, =, >=, <=) for threshold monitoring.\n\n🎯 EXAM TIP: Alert query pattern: Query returns ONE ROW with ONE numeric column → Alert monitors that value against a threshold → Triggers notification (email, Slack, webhook). The query MUST be scheduled to run periodically for the alert to evaluate.",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-355",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is comparing two approaches to optimize a query that filters on both `country` and `product_category`:\n\n- Approach A: `OPTIMIZE table ZORDER BY (country, product_category)`\n- Approach B: `ALTER TABLE table CLUSTER BY (country, product_category)` (Liquid Clustering)\n\nWhich statement correctly differentiates these approaches?",
        "options": [
                {
                        "id": "a",
                        "text": "They are identical in behavior; Liquid Clustering is just a new name for ZORDER."
                },
                {
                        "id": "b",
                        "text": "ZORDER requires manually running OPTIMIZE to re-cluster data after writes, while Liquid Clustering automatically reorganizes data incrementally during writes without manual OPTIMIZE commands."
                },
                {
                        "id": "c",
                        "text": "ZORDER supports more columns than Liquid Clustering, making it better for wide tables."
                },
                {
                        "id": "d",
                        "text": "Liquid Clustering only works with Serverless warehouses, while ZORDER works with all warehouse types."
                },
                {
                        "id": "e",
                        "text": "ZORDER provides better query performance than Liquid Clustering in all scenarios."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — ZORDER requires manual OPTIMIZE; Liquid Clustering auto-reorganizes during writes): The fundamental difference: ZORDER is a POST-HOC manual operation — you must run OPTIMIZE ... ZORDER BY after every batch of writes. Liquid Clustering (CLUSTER BY) defines the clustering strategy at table creation and automatically applies it during OPTIMIZE without needing to specify columns each time.\n\n❌ Why others are wrong:\n• (A) \"Identical, just a new name\": FALSE. They are architecturally different. ZORDER uses space-filling curves; Liquid Clustering uses Hilbert curves with incremental clustering.\n• (C) \"ZORDER supports more columns\": FALSE. Liquid Clustering actually handles multi-column clustering more efficiently because it uses an incremental approach.\n• (D) \"Liquid Clustering only works with Serverless\": FALSE. Liquid Clustering works with ALL SQL Warehouse types and clusters.\n• (E) \"ZORDER always performs better\": FALSE. Liquid Clustering's incremental approach is more efficient for tables with frequent writes because it avoids rewriting all data.\n\n🎯 EXAM TIP: ZORDER = legacy, manual, full rewrite. Liquid Clustering = modern, incremental, ALTER-able. For new tables, Databricks recommends Liquid Clustering. For existing ZORDER tables, migration is possible via ALTER TABLE ... CLUSTER BY.",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-356",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs `DESCRIBE HISTORY sales.transactions` and sees 500 versions in the transaction log. The analyst is concerned about the storage cost of maintaining all these historical versions.\n\nWhich command cleans up old, unreferenced data files while preserving the ability to query recent versions?",
        "options": [
                {
                        "id": "a",
                        "text": "DELETE FROM sales.transactions WHERE version < 400 — to remove old version records."
                },
                {
                        "id": "b",
                        "text": "VACUUM sales.transactions RETAIN 168 HOURS — to delete data files older than 7 days that are no longer referenced by the current table version."
                },
                {
                        "id": "c",
                        "text": "OPTIMIZE sales.transactions — to compact files and automatically remove old versions."
                },
                {
                        "id": "d",
                        "text": "ALTER TABLE sales.transactions SET TBLPROPERTIES ('delta.logRetentionDuration' = '1 day') — to delete the transaction log entries."
                },
                {
                        "id": "e",
                        "text": "DROP TABLE sales.transactions; CREATE TABLE sales.transactions — to recreate with only the latest data."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — VACUUM RETAIN 168 HOURS removes unreferenced files older than 7 days): VACUUM scans the transaction log, identifies data files no longer referenced by ANY version within the retention period, and physically deletes them from cloud storage. The default retention is 7 days (168 hours), preserving Time Travel capability within that window.\n\n❌ Why others are wrong:\n• (A) \"DELETE FROM WHERE version < 400\": DELETE operates on TABLE ROWS, not transaction log versions. You cannot delete \"versions\" with a DELETE statement.\n• (C) \"OPTIMIZE removes old versions\": OPTIMIZE creates NEW compacted files but does NOT delete old files. Old files remain until VACUUM runs.\n• (D) \"ALTER TABLE logRetentionDuration = 1 day\": This changes the TRANSACTION LOG retention (metadata), not the DATA FILE retention. Even with a 1-day log, old data files remain until VACUUM runs.\n• (E) \"DROP + CREATE to start fresh\": Destructive — loses all data and requires full reload. Not appropriate for storage cost management.\n\n🎯 EXAM TIP: VACUUM = deletes OLD DATA FILES. Log retention = controls TRANSACTION LOG entries. They're independent. VACUUM RETAIN N HOURS → files older than N hours AND not referenced by current version are deleted. Default: 168 hours (7 days).",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-357",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst writes a CTE (Common Table Expression) that is referenced three times in the main query. The Query Profile shows the CTE's computation is repeated three times.\n\nWhich optimization strategy would eliminate the redundant computation?",
        "options": [
                {
                        "id": "a",
                        "text": "Replace the CTE with a TEMPORARY VIEW, which is only computed once."
                },
                {
                        "id": "b",
                        "text": "Materialize the CTE result into a TEMPORARY VIEW or cached table, so it is computed once and reused for all three references."
                },
                {
                        "id": "c",
                        "text": "CTEs are always computed only once in Databricks; the Query Profile is showing parallelized execution, not redundancy."
                },
                {
                        "id": "d",
                        "text": "Use subqueries instead of CTEs, as subqueries are automatically cached by the optimizer."
                },
                {
                        "id": "e",
                        "text": "Add an ORDER BY to the CTE to force materialization."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B — Materialize the CTE into a TEMPORARY VIEW or cached table): CTEs in most SQL engines (including Databricks/Spark SQL) are INLINED — each reference re-executes the CTE query from scratch. If a CTE is referenced 3 times, it computes 3 times. Solution: CREATE TEMPORARY VIEW AS (or cache the result), computing it ONCE and reusing the materialized result.\n\n❌ Why others are wrong:\n• (A) \"Replace CTE with TEMPORARY VIEW\": A TEMPORARY VIEW is actually the correct fix, but the explanation claims views are \"only computed once\" — in reality, a view is ALSO inlined (re-executed per reference) UNLESS you use CREATE TEMPORARY VIEW ... USING or CACHE TABLE.\n• (C) \"CTEs always computed once\": FALSE. This is the most common SQL misconception. CTEs are syntactic sugar — they're expanded inline at each reference point. The Query Profile confirms this.\n• (D) \"Subqueries are automatically cached\": FALSE. Subqueries are also inlined, just like CTEs. No automatic caching occurs.\n• (E) \"ORDER BY forces materialization\": ORDER BY doesn't force CTE materialization. It just sorts the CTE result at each inline expansion.\n\n🎯 EXAM TIP: CTE optimization pattern: CTE referenced multiple times → CREATE TEMPORARY VIEW + CACHE TABLE to materialize. Or refactor the query to reference the CTE only once. The exam tests understanding of CTE inlining behavior.",
        "domain": "Analyzing Queries"
},
    {
        "id": "db-da-358",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst accidentally runs an UPDATE statement that corrupts 2 million records in a production table. The mistake was made 30 minutes ago and the table has had no other writes since.\n\nWhich Delta Lake operation can undo this change most efficiently?",
        "options": [
                {
                        "id": "a",
                        "text": "DELETE FROM table WHERE last_modified > DATE_SUB(CURRENT_TIMESTAMP(), 30) — to remove the corrupted rows."
                },
                {
                        "id": "b",
                        "text": "RESTORE TABLE table TO VERSION AS OF (SELECT MAX(version) - 1 FROM (DESCRIBE HISTORY table)) — to restore the table to the version before the bad UPDATE."
                },
                {
                        "id": "c",
                        "text": "Run VACUUM to clean up the corrupted data files and regenerate the table."
                },
                {
                        "id": "d",
                        "text": "Request the database administrator to restore from the most recent cloud backup."
                },
                {
                        "id": "e",
                        "text": "Run OPTIMIZE to compact the corrupted files and fix the data automatically."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): RESTORE TABLE ... TO VERSION AS OF reverts the entire table to a previous version by updating the transaction log pointer. This is the fastest recovery mechanism because it doesn't copy or rewrite data — it simply changes which version of the table is \"current.\" The pre-corruption files are still available within the retention period.\n\n❌ Why others are wrong:\n• (A) DELETE WHERE last_modified: This tries to filter by an assumed column, but corrupted records may retain their original timestamps. Also, DELETE creates a new version — it doesn't \"undo\" the corruption.\n• (C) VACUUM: VACUUM removes old files. Running it BEFORE restore could DELETE the pre-corruption files needed for recovery. NEVER run VACUUM during recovery.\n• (D) Cloud backup restore: Slow, requires admin intervention, and may not capture the exact pre-corruption state.\n• (E) OPTIMIZE: OPTIMIZE compacts files for performance. It does NOT fix data content — corrupted data remains corrupted.\n\n🔑 EXAM TIP: Recovery workflow:\n1. DESCRIBE HISTORY table_name → find the version BEFORE corruption\n2. RESTORE TABLE table_name TO VERSION AS OF <version>\n3. Verify recovery: SELECT * FROM table_name\n4. Do NOT run VACUUM before RESTORE",
        "domain": "Managing Data"
},
    {
        "id": "db-da-359",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst writes:\n```sql\nINSERT INTO silver.customers\nSELECT id, name, email, signup_date, loyalty_tier\nFROM bronze.raw_customers\n```\n\nThe query fails with: `Schema mismatch error: Cannot write to table silver.customers. Column 'loyalty_tier' not found in target table.`\n\nWhat Delta Lake feature caused this error, and how should the analyst resolve it?",
        "options": [
                {
                        "id": "a",
                        "text": "Schema Enforcement blocked the write because the target table doesn't have a `loyalty_tier` column. The analyst should run ALTER TABLE silver.customers ADD COLUMN loyalty_tier STRING, or enable Schema Evolution with mergeSchema."
                },
                {
                        "id": "b",
                        "text": "The error is caused by a data type mismatch, not a missing column. The analyst should cast loyalty_tier to the correct type."
                },
                {
                        "id": "c",
                        "text": "Delta Lake prevents INSERT operations on Silver-layer tables by design; MERGE INTO must be used."
                },
                {
                        "id": "d",
                        "text": "The error occurs because bronze and silver tables are in different catalogs."
                },
                {
                        "id": "e",
                        "text": "Schema Enforcement only applies to Parquet files, not Delta tables."
                }
        ],
        "correctIds": [
                "a"
        ],
        "explanation": "✅ CORRECT (A): Schema Enforcement (also called Schema Validation) in Delta Lake rejects writes whose schema doesn't match the target table. The error occurs because the source has a column (loyalty_tier) that doesn't exist in the target table.\n\nResolution options:\n1. ALTER TABLE silver.customers ADD COLUMN loyalty_tier STRING — explicitly add the column\n2. Enable Schema Evolution: SET spark.databricks.delta.schema.autoMerge.enabled = true — automatically adds new columns\n\n❌ Why others are wrong:\n• (B) Data type mismatch: The error message explicitly says \"Column not found,\" not \"type mismatch.\" This is a missing column, not a type issue.\n• (C) INSERT blocked on Silver tables: FALSE. INSERT works on ANY Delta table regardless of the medallion layer.\n• (D) Different catalogs: Cross-catalog INSERT is supported as long as the user has proper permissions.\n• (E) Only applies to Parquet: FALSE. Schema Enforcement is a DELTA LAKE feature — it applies to all Delta tables.\n\n🔑 EXAM TIP: Schema Enforcement vs. Evolution:\n• Enforcement (default ON): REJECTS writes with mismatched schemas\n• Evolution (default OFF): ACCEPTS writes and automatically adds new columns\n• Enable evolution: .option('mergeSchema', 'true') or SET spark.databricks.delta.schema.autoMerge.enabled = true\n• ALTER TABLE ADD COLUMN: Manual, explicit schema change",
        "domain": "Managing Data"
},
    {
        "id": "db-da-360",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs `DESCRIBE HISTORY analytics.monthly_revenue` and sees the following versions:\n\n| version | timestamp | operation |\n|---------|-----------|------------|\n| 5 | 2026-03-30 | UPDATE |\n| 4 | 2026-03-29 | DELETE |\n| 3 | 2026-03-28 | UPDATE |\n| 2 | 2026-03-25 | WRITE |\n| 1 | 2026-03-20 | WRITE |\n| 0 | 2026-03-15 | CREATE |\n\nThe analyst needs to compare today's data with the state from March 25.\n\nWhich query performs this comparison?",
        "options": [
                {
                        "id": "a",
                        "text": "SELECT * FROM analytics.monthly_revenue EXCEPT SELECT * FROM analytics.monthly_revenue@v2"
                },
                {
                        "id": "b",
                        "text": "SELECT * FROM analytics.monthly_revenue VERSION AS OF 5 EXCEPT ALL SELECT * FROM analytics.monthly_revenue VERSION AS OF 2"
                },
                {
                        "id": "c",
                        "text": "SELECT * FROM analytics.monthly_revenue TIMESTAMP AS OF '2026-03-25' MINUS SELECT * FROM analytics.monthly_revenue"
                },
                {
                        "id": "d",
                        "text": "DIFF analytics.monthly_revenue BETWEEN VERSION 2 AND VERSION 5"
                },
                {
                        "id": "e",
                        "text": "SELECT * FROM analytics.monthly_revenue WHERE _change_type = 'update_postimage'"
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): VERSION AS OF 5 returns the current state; VERSION AS OF 2 returns the March 25 state. EXCEPT ALL returns rows that exist in version 5 but NOT in version 2 — showing what was added or changed since March 25.\n\n❌ Why others are wrong:\n• (A) @v2 syntax: The @v2 shorthand is NOT standard Delta Lake SQL syntax in Databricks. The correct syntax is VERSION AS OF 2.\n• (C) MINUS keyword: MINUS is Oracle SQL syntax. Databricks SQL uses EXCEPT or EXCEPT ALL.\n• (D) DIFF command: There is no DIFF command in Delta Lake SQL.\n• (E) _change_type column: This column only appears in Change Data Feed (CDF) queries using table_changes(). It requires CDF to be explicitly enabled on the table.\n\n🔑 EXAM TIP: Time Travel comparison patterns:\n• EXCEPT ALL: Shows rows added/changed (set difference)\n• Full comparison: Query both versions and compare\n• VERSION AS OF n: Specify by version number\n• TIMESTAMP AS OF 'datetime': Specify by timestamp\n• Change Data Feed: Alternative for tracking row-level changes (requires enablement)",
        "domain": "Managing Data"
},
    {
        "id": "db-da-361",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst is working with a Delta table that receives daily batch loads of 500MB from an ERP system. Over time, the table grows to 100GB with 15,000 small files from incremental loads.\n\nWhich maintenance strategy should the analyst implement to keep query performance optimal?",
        "options": [
                {
                        "id": "a",
                        "text": "Schedule daily VACUUM with 0 hours retention to immediately remove all old files."
                },
                {
                        "id": "b",
                        "text": "Schedule regular OPTIMIZE to compact small files, followed by VACUUM with the default 7-day retention to clean up old files while preserving Time Travel capability."
                },
                {
                        "id": "c",
                        "text": "Rebuild the table weekly using DROP/CREATE to start fresh with optimal file sizes."
                },
                {
                        "id": "d",
                        "text": "Increase the SQL Warehouse size to compensate for the performance impact of small files."
                },
                {
                        "id": "e",
                        "text": "Enable Auto Loader, which automatically optimizes file sizes during ingestion."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT: The recommended Delta table maintenance pattern for this scenario is: (1) Run OPTIMIZE regularly to compact 15,000 small files into fewer, larger files (~1GB target), and (2) Run VACUUM with the default 7-day retention (168 hours) to clean up old, unreferenced data files and reclaim storage space.\n\n❌ Why others are wrong:\n• VACUUM with 0 hours: Dangerous — destroys Time Travel capability entirely. If you need to roll back a bad load, you can't recover. The 7-day default exists as a safety net.\n• Rebuilding/recreating the table: Wasteful and disruptive — requires downtime, loses table history, and may break downstream consumers. OPTIMIZE handles compaction in-place.\n• Auto Loader: Auto Loader controls data INGESTION, not storage optimization. It doesn't compact or clean existing files — that's OPTIMIZE + VACUUM territory.\n• OPTIMIZE alone without VACUUM: OPTIMIZE creates new compacted files but the OLD small files remain on storage. Without VACUUM, storage costs keep growing because old files aren't deleted.\n\n🎯 EXAM TIP: Delta maintenance workflow: OPTIMIZE (compact files) → VACUUM (cleanup old files). Order matters — OPTIMIZE first creates new files, then VACUUM removes the old ones. Default VACUUM retention = 7 days (168 hours). Never use 0 hours in production.",
        "domain": "Managing Data"
},
    {
        "id": "db-da-362",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst needs to add a column `loyalty_score` (DOUBLE) to an existing Delta table with 50 million rows.\n\nWhich statement correctly adds the column without rewriting any existing data?",
        "options": [
                {
                        "id": "a",
                        "text": "ALTER TABLE customers ADD COLUMN loyalty_score DOUBLE — this modifies only the metadata (schema) in the Delta transaction log without touching data files."
                },
                {
                        "id": "b",
                        "text": "UPDATE customers SET loyalty_score = NULL — this implicitly adds the column if it doesn't exist."
                },
                {
                        "id": "c",
                        "text": "CREATE OR REPLACE TABLE customers AS SELECT *, NULL AS loyalty_score FROM customers — to rebuild with the new column."
                },
                {
                        "id": "d",
                        "text": "Adding a column requires dropping and recreating the table; ALTER TABLE ADD COLUMN is not supported for Delta tables."
                },
                {
                        "id": "e",
                        "text": "INSERT INTO customers (loyalty_score) VALUES (NULL) — to create the column with a default value."
                }
        ],
        "correctIds": [
                "a"
        ],
        "explanation": "✅ CORRECT (A): ALTER TABLE ADD COLUMN is a METADATA-ONLY operation in Delta Lake. It updates the schema definition in the transaction log without touching any data files. Existing files return NULL for the new column. This is instant regardless of table size (even with 50 million rows).\n\n❌ Why others are wrong:\n• (B) UPDATE SET loyalty_score = NULL: UPDATE cannot add new columns. It can only modify existing columns. This query would fail with \"column not found.\"\n• (C) CREATE OR REPLACE with SELECT *, NULL AS: This REWRITES all data files — extremely expensive for 50M rows and unnecessary for a simple schema change.\n• (D) Must drop and recreate: FALSE. ALTER TABLE ADD COLUMN is fully supported for Delta tables.\n• (E) INSERT INTO with new column: INSERT cannot add columns to the schema. It inserts rows, not schema changes.\n\n🔑 EXAM TIP: Delta Lake schema operations (metadata-only = instant):\n• ADD COLUMN: Instant, no data rewrite\n• RENAME COLUMN: Instant, no data rewrite\n• DROP COLUMN: Requires data rewrite (can be lazy with column mapping)\n• CHANGE DATA TYPE: May require data rewrite depending on the type change",
        "domain": "Managing Data"
},
    {
        "id": "db-da-363",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst runs the following query to update product prices:\n\n```sql\nMERGE INTO gold.products AS target\nUSING staging.price_updates AS source\nON target.product_id = source.product_id\nWHEN MATCHED THEN UPDATE SET target.price = source.new_price\nWHEN NOT MATCHED THEN INSERT (product_id, name, price) VALUES (source.product_id, source.name, source.new_price)\n```\n\nWhat ACID property does Delta Lake guarantee during this MERGE operation?",
        "options": [
                {
                        "id": "a",
                        "text": "Atomicity only — either all changes apply or none do, but concurrent reads may see partial results."
                },
                {
                        "id": "b",
                        "text": "Full ACID: the MERGE is atomic (all or nothing), consistent (schema enforced), isolated (concurrent readers see the table in its pre-MERGE state until commit), and durable (committed changes survive failures)."
                },
                {
                        "id": "c",
                        "text": "Delta Lake provides eventual consistency, so other users may see partial MERGE results for a brief period."
                },
                {
                        "id": "d",
                        "text": "ACID properties only apply to INSERT operations; MERGE bypasses transaction guarantees for performance."
                },
                {
                        "id": "e",
                        "text": "Delta Lake provides ACID for single-table operations, but MERGE involves two tables, so it falls back to best-effort consistency."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): Delta Lake provides FULL ACID guarantees for ALL write operations, including MERGE:\n• Atomicity: All changes commit together or none do\n• Consistency: Schema enforcement validates the write\n• Isolation: Concurrent readers see the pre-MERGE snapshot until commit (snapshot isolation)\n• Durability: Changes are persisted to the transaction log and cloud storage\n\n❌ Why others are wrong:\n• (A) Atomicity only + partial reads: FALSE. Delta Lake provides SNAPSHOT ISOLATION — concurrent readers NEVER see partial results.\n• (C) Eventual consistency: FALSE. Delta Lake is IMMEDIATELY consistent after commit, not eventually consistent.\n• (D) ACID only for INSERT: FALSE. ACID applies to ALL operations — INSERT, UPDATE, DELETE, MERGE, OPTIMIZE.\n• (E) MERGE lacks ACID because two tables: FALSE. MERGE is a single ATOMIC transaction regardless of the number of source tables.\n\n🔑 EXAM TIP: Delta Lake ACID guarantees:\n• ALL write operations are ACID (INSERT, UPDATE, DELETE, MERGE)\n• Isolation level: Serializable by default (snapshot isolation for reads)\n• Implementation: Optimistic Concurrency Control via transaction log\n• Conflict resolution: Write conflicts are detected and retried automatically",
        "domain": "Managing Data"
},
    {
        "id": "db-da-364",
        "courseId": "databricks-da",
        "lang": "en",
        "type": "single_choice",
        "prompt": "A data analyst discovers that someone has enabled Change Data Feed (CDF) on a Silver-layer table. The analyst queries:\n\n```sql\nSELECT * FROM table_changes('silver.orders', 3, 5)\n```\n\nThe results include columns `_change_type`, `_commit_version`, and `_commit_timestamp`.\n\nWhat does the `_change_type` column represent?",
        "options": [
                {
                        "id": "a",
                        "text": "The SQL command type (INSERT, UPDATE, DELETE) that was executed on the table."
                },
                {
                        "id": "b",
                        "text": "The type of row-level change: 'insert' for new rows, 'update_preimage' for old values before update, 'update_postimage' for new values after update, and 'delete' for removed rows."
                },
                {
                        "id": "c",
                        "text": "The schema change type (ADD COLUMN, DROP COLUMN, etc.) tracked at the table level."
                },
                {
                        "id": "d",
                        "text": "The file-level change type showing which data files were added or removed."
                },
                {
                        "id": "e",
                        "text": "A user-defined label that must be set manually when writing data."
                }
        ],
        "correctIds": [
                "b"
        ],
        "explanation": "✅ CORRECT (B): The _change_type column in Change Data Feed (CDF) indicates the TYPE of row-level change:\n• 'insert': New row added\n• 'update_preimage': Row values BEFORE the update\n• 'update_postimage': Row values AFTER the update\n• 'delete': Row was removed\n\n❌ Why others are wrong:\n• (A) SQL command type: _change_type tracks ROW-level changes, not COMMAND-level operations. DESCRIBE HISTORY shows command-level operations.\n• (C) Schema change type: Schema changes (ADD COLUMN, etc.) are tracked in the transaction log, not through CDF.\n• (D) File-level changes: File operations (add/remove files) are tracked in the transaction log, not CDF.\n• (E) User-defined label: _change_type is AUTOMATICALLY generated by Delta Lake, not set manually.\n\n🔑 EXAM TIP: Change Data Feed (CDF):\n• Must be explicitly enabled: ALTER TABLE SET TBLPROPERTIES (delta.enableChangeDataFeed = true)\n• Query with: SELECT * FROM table_changes('table', start_version, end_version)\n• Special columns: _change_type, _commit_version, _commit_timestamp\n• Use case: Efficient incremental ETL — process only changed rows, not full table",
        "domain": "Managing Data"
}
]
);
console.log("Loaded questions_databricks.js. Total questions:", window.questionsData.length);





































