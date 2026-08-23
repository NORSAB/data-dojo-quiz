// BATCH 2: 32 NEW ELITE QUESTIONS — Securing Data (9), Importing Data (8), Analyzing Queries (8), Managing Data (7)
// IDs: db-da-333 to db-da-364

// ============ SECURING DATA (9 questions) ============

  {
    "id": "db-da-333",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to ensure that sales representatives can only see customer records from their assigned region in a shared Unity Catalog table. The table has a `region` column that matches the analyst's assigned region attribute.\n\nWhich Unity Catalog feature should be used to enforce this requirement?",
    "options": [
      {"id": "a", "text": "Column masking to hide the region column from unauthorized users."},
      {"id": "b", "text": "Row-level security using row filters that dynamically restrict rows based on the querying user's attributes."},
      {"id": "c", "text": "Creating separate tables per region and granting each sales rep access only to their region's table."},
      {"id": "d", "text": "Using a VIEW with a WHERE clause that hardcodes each user's email address."},
      {"id": "e", "text": "Encrypting region data so that only authorized users have the decryption key."}
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog row filters enable dynamic row-level security: a SQL function evaluates the querying user's identity/attributes and filters rows accordingly. This is transparent to users — they query the same table but see only their authorized rows. No need for separate tables or hardcoded views.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-334",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst discovers that a table containing employee social security numbers (SSN) is accessible to the entire analytics team. The data governance team requires that SSNs be visible only to HR analysts, while other analysts should see masked values (e.g., `XXX-XX-1234`).\n\nWhich Unity Catalog feature implements this requirement without creating duplicate tables?",
    "options": [
      {"id": "a", "text": "Row-level security to filter out rows containing SSNs for non-HR users."},
      {"id": "b", "text": "Dynamic column masking that applies a masking function to the SSN column based on the querying user's group membership."},
      {"id": "c", "text": "Revoking SELECT permission on the entire table from non-HR users."},
      {"id": "d", "text": "Creating a VIEW that excludes the SSN column and granting non-HR users access only to the view."},
      {"id": "e", "text": "Using Delta Lake encryption to encrypt the SSN column at rest."}
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog column masking applies a UDF that transforms sensitive column values based on the querying user's identity. HR analysts see real SSNs; others see masked values like XXX-XX-1234. This is applied at the table level — no duplicate tables or views needed. Row-level security filters rows, not column values.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-335",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs `GRANT SELECT ON TABLE finance.transactions TO analyst_team` but members of `analyst_team` still cannot query the table. They receive a permission denied error.\n\nWhat is the most likely cause of this permission failure?",
    "options": [
      {"id": "a", "text": "The SELECT grant is not sufficient; the team also needs INSERT permission to read data."},
      {"id": "b", "text": "The team lacks USAGE permission on the parent catalog and/or schema. Unity Catalog requires USAGE at each level of the hierarchy (catalog → schema → table) for the SELECT grant to take effect."},
      {"id": "c", "text": "GRANT SELECT only works on views, not on tables. The analyst should use GRANT READ instead."},
      {"id": "d", "text": "The SQL Warehouse configuration prevents non-admin users from executing SELECT statements."},
      {"id": "e", "text": "The table must be registered as a Trusted Asset before external users can query it."}
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog enforces hierarchical permissions. USAGE must be granted at each level: the catalog AND the schema containing the table. Without USAGE on the parent containers, SELECT on the table is unreachable — even though the permission exists, users cannot traverse the namespace to reach it.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-336",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "An organization wants to share a curated dataset with an external partner company that does NOT use Databricks. The dataset contains aggregated market research data in a Delta table.\n\nWhich Databricks feature enables secure data sharing without the partner needing a Databricks account or copying the data?",
    "options": [
      {"id": "a", "text": "Unity Catalog's GRANT SELECT to external email addresses."},
      {"id": "b", "text": "Delta Sharing, an open protocol that allows sharing live Delta tables with external recipients through share-based access, regardless of their platform."},
      {"id": "c", "text": "Exporting the data as CSV files and sending them via encrypted email."},
      {"id": "d", "text": "Creating a public S3 bucket with the Parquet files and sharing the URL."},
      {"id": "e", "text": "Partner Connect, which establishes a direct connection between the partner's analytics platform and the Databricks workspace."}
    ],
    "correctIds": ["b"],
    "explanation": "Delta Sharing is an open-source protocol for secure data sharing. Recipients access live data without copying it, and they don't need Databricks — any client supporting the Delta Sharing protocol (pandas, Spark, Power BI) can consume the shared data. It provides governance, auditing, and revocation capabilities.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-337",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A compliance officer asks a data analyst to produce an audit report showing all users who accessed the `payroll` table in the last 30 days, including which queries they ran and when.\n\nWhich Databricks capability provides this audit information?",
    "options": [
      {"id": "a", "text": "Delta Lake's transaction log, which records every INSERT, UPDATE, and DELETE operation with timestamps."},
      {"id": "b", "text": "Unity Catalog's system audit logs, which track data access events including the querying user, timestamp, query text, and accessed objects."},
      {"id": "c", "text": "The SQL Warehouse query history, which only shows queries from the current session."},
      {"id": "d", "text": "The DESCRIBE HISTORY command, which shows schema changes but not user access patterns."},
      {"id": "e", "text": "Databricks does not provide user-level data access auditing; a third-party tool is required."}
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog provides immutable system audit logs that capture who accessed what data, when, and how. These logs include user identity, timestamp, query text, and the specific tables/columns accessed. DESCRIBE HISTORY shows table operations (writes), not read-access auditing.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-338",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst has been granted the MODIFY privilege on a table. Another analyst asks: 'Can you also grant me SELECT access to this table?'\n\nCan the first analyst grant SELECT to the second analyst?",
    "options": [
      {"id": "a", "text": "Yes, any user with MODIFY permission can grant any privilege on that object."},
      {"id": "b", "text": "No, only users with the OWNERSHIP privilege or account administrators can grant permissions on data objects in Unity Catalog."},
      {"id": "c", "text": "Yes, but only if both analysts belong to the same workspace group."},
      {"id": "d", "text": "No, GRANT operations can only be performed through the Catalog Explorer UI, not via SQL."},
      {"id": "e", "text": "Yes, MODIFY implicitly includes the ability to delegate SELECT access."}
    ],
    "correctIds": ["b"],
    "explanation": "In Unity Catalog, only the object OWNER or account/metastore administrators can grant privileges. MODIFY allows data changes (INSERT, UPDATE, DELETE) but does NOT include the ability to manage permissions. This follows the principle of least privilege — permission delegation requires ownership.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-339",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst encounters a table with PII data (personal email addresses) that they should not have access to. The analyst has already viewed several rows before realizing the sensitivity.\n\nWhat is the correct protocol the analyst should follow?",
    "options": [
      {"id": "a", "text": "Delete the table to ensure no one else can access the PII data."},
      {"id": "b", "text": "Drop the PII column and continue using the remaining data without notifying anyone."},
      {"id": "c", "text": "Stop accessing the data immediately and notify their supervisor to ensure the data is handled following organizational and legal policies."},
      {"id": "d", "text": "Export the data to a local file and apply masking manually before continuing analysis."},
      {"id": "e", "text": "Apply column masking on the table themselves to protect other users from the same issue."}
    ],
    "correctIds": ["c"],
    "explanation": "The correct protocol for encountering unauthorized PII is: (1) immediately stop accessing the data, (2) do not modify or delete anything, (3) escalate to a supervisor or data governance team. Deleting tables or modifying columns could destroy evidence and violate compliance requirements. Proper remediation requires authorized personnel.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-340",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data governance team wants to classify all tables in Unity Catalog by data sensitivity (public, internal, confidential, restricted). They want this classification to be searchable and enforceable.\n\nWhich Unity Catalog feature supports this metadata-driven governance approach?",
    "options": [
      {"id": "a", "text": "Table comments (COMMENT ON TABLE) that describe the sensitivity level in free text."},
      {"id": "b", "text": "Tags (governed tags) that apply key-value metadata like `sensitivity = 'confidential'` to tables and columns, enabling search and policy enforcement."},
      {"id": "c", "text": "Table properties (TBLPROPERTIES) that store sensitivity information as Delta configuration."},
      {"id": "d", "text": "Naming conventions that include the sensitivity level in the table name (e.g., `confidential_payroll`)."},
      {"id": "e", "text": "Creating separate catalogs for each sensitivity level (catalog_public, catalog_confidential, etc.)."}
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog Governed Tags provide structured, searchable metadata classification. Tags like `sensitivity = 'confidential'` can be applied to tables and columns, searched via Catalog Explorer, and used to enforce access policies through ABAC (Attribute-Based Access Control). Comments are free-text and unsearchable; TBLPROPERTIES are for Delta configuration.",
    "domain": "Securing Data"
  },
  {
    "id": "db-da-341",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to understand the complete flow of data from a raw Bronze table through Silver transformations to the final Gold dashboard table, to troubleshoot a data quality issue.\n\nWhich Unity Catalog feature automatically provides this end-to-end data flow visibility?",
    "options": [
      {"id": "a", "text": "DESCRIBE HISTORY, which shows all operations performed on each individual table."},
      {"id": "b", "text": "Data lineage tracking, which automatically maps table-level and column-level dependencies across the Bronze → Silver → Gold pipeline without additional configuration."},
      {"id": "c", "text": "Query Profile, which shows the execution plan of individual queries."},
      {"id": "d", "text": "Delta Lake transaction logs, which record write operations per table."},
      {"id": "e", "text": "Change Data Feed (CDF), which tracks row-level changes in a table."}
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog automatically captures data lineage — both table-level and column-level — as queries execute. This creates a visual graph showing how data flows from Bronze through Silver to Gold, including which columns feed which downstream tables. No manual configuration needed. DESCRIBE HISTORY and CDF are per-table, not cross-pipeline.",
    "domain": "Securing Data"
  },

// ============ IMPORTING DATA (8 questions) ============

  {
    "id": "db-da-342",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to ingest a directory of JSON files that arrives incrementally in an S3 bucket. New files are added every hour. The analyst wants the ingestion to be idempotent — files already processed should not be re-ingested even if the pipeline is restarted.\n\nWhich Databricks SQL command is purpose-built for this idempotent incremental ingestion?",
    "options": [
      {"id": "a", "text": "INSERT INTO target_table SELECT * FROM json.`s3://bucket/data/` — since it reads all files, it naturally handles deduplication."},
      {"id": "b", "text": "COPY INTO target_table FROM 's3://bucket/data/' FILEFORMAT = JSON — it automatically tracks which files have been loaded and skips previously processed files."},
      {"id": "c", "text": "CREATE TABLE target_table AS SELECT * FROM json.`s3://bucket/data/` — using CTAS to reload the complete dataset each time."},
      {"id": "d", "text": "MERGE INTO target_table USING json.`s3://bucket/data/` — it deduplicates records based on a merge key."},
      {"id": "e", "text": "LOAD DATA INPATH 's3://bucket/data/' INTO TABLE target_table — the standard SQL data loading command."}
    ],
    "correctIds": ["b"],
    "explanation": "COPY INTO is designed for idempotent incremental ingestion. It tracks which files have already been loaded (via file-level checksums) and automatically skips them on subsequent runs. INSERT INTO re-reads all files every time (causing duplicates). MERGE deduplicates records but still re-reads all files.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-343",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst receives a 2GB CSV file with pipe-delimited fields (`|`), a custom date format (`dd-MM-yyyy`), and some rows with malformed data. The analyst needs to load this into a Delta table while handling errors gracefully.\n\nWhich COPY INTO configuration correctly handles these requirements?",
    "options": [
      {"id": "a", "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = CSV FORMAT_OPTIONS ('delimiter' = '|', 'dateFormat' = 'dd-MM-yyyy', 'mode' = 'PERMISSIVE', 'header' = 'true')"},
      {"id": "b", "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = CSV FORMAT_OPTIONS ('sep' = '|') — all other options are auto-detected."},
      {"id": "c", "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = PARQUET FORMAT_OPTIONS ('delimiter' = '|') — CSV files are converted to Parquet automatically."},
      {"id": "d", "text": "INSERT INTO target SELECT * FROM csv.'/path/file.csv' — standard SQL insertion handles all format options automatically."},
      {"id": "e", "text": "COPY INTO target FROM '/path/file.csv' FILEFORMAT = CSV FORMAT_OPTIONS ('delimiter' = '|', 'mode' = 'FAILFAST') — to reject all malformed rows immediately."}
    ],
    "correctIds": ["a"],
    "explanation": "COPY INTO with FORMAT_OPTIONS allows specifying delimiter, date format, header handling, and error mode. PERMISSIVE mode handles malformed rows by setting them to null rather than failing the entire load. FAILFAST would abort on the first error, which is too aggressive for files with known quality issues.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-344",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to create a temporary queryable reference to a set of Parquet files in an external S3 location without formally registering the data as a permanent table in Unity Catalog.\n\nWhich SQL syntax allows querying external files directly without creating a table?",
    "options": [
      {"id": "a", "text": "SELECT * FROM parquet.`s3://bucket/data/sales/` — using backtick-quoted path references to directly query files."},
      {"id": "b", "text": "SELECT * FROM EXTERNAL 's3://bucket/data/sales/' FORMAT PARQUET — using the EXTERNAL keyword for ad-hoc access."},
      {"id": "c", "text": "MOUNT 's3://bucket/data/' AS '/mnt/sales'; SELECT * FROM '/mnt/sales/' — mounting the storage first."},
      {"id": "d", "text": "CREATE TEMP VIEW sales AS PARQUET 's3://bucket/data/sales/' — creating a temporary Parquet reference."},
      {"id": "e", "text": "Direct file querying is not possible in Databricks; files must always be registered as tables first."}
    ],
    "correctIds": ["a"],
    "explanation": "Databricks SQL supports direct file path querying using the format `format.path` syntax with backticks (e.g., parquet.`s3://path/`, json.`s3://path/`, csv.`s3://path/`). This is useful for ad-hoc exploration before deciding to formalize data into managed tables.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-345",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst creates an external table pointing to a shared S3 location:\n\n`CREATE TABLE analytics.ext_logs LOCATION 's3://shared-bucket/logs/'`\n\nAnother team later adds new Parquet files to the same S3 path. The analyst queries the table but does not see the new data.\n\nWhat should the analyst do to make the new files visible?",
    "options": [
      {"id": "a", "text": "Run REFRESH TABLE analytics.ext_logs to update the table metadata and pick up newly added files."},
      {"id": "b", "text": "Drop and recreate the table, because external tables cannot detect new files after creation."},
      {"id": "c", "text": "Run VACUUM to force a scan of the external location."},
      {"id": "d", "text": "The new files should appear automatically; the issue is likely a caching problem that requires restarting the SQL Warehouse."},
      {"id": "e", "text": "Run COPY INTO to manually ingest the new files into the existing table."}
    ],
    "correctIds": ["a"],
    "explanation": "REFRESH TABLE updates the metadata cache for external tables, forcing Databricks to rescan the external location and discover new files. Unlike managed Delta tables (which auto-detect changes via the transaction log), external tables may need explicit refresh to see files added externally.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-346",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to load data from an external PostgreSQL database into a Databricks Delta table. The source table has 10 million rows and is updated daily.\n\nWhich approach is most appropriate for this initial full load followed by daily incremental updates?",
    "options": [
      {"id": "a", "text": "Use COPY INTO with JDBC connection strings to pull data directly from PostgreSQL."},
      {"id": "b", "text": "Use a Partner Connect tool (e.g., Fivetran) for the initial replication and incremental CDC, then query the replicated Delta tables in Databricks."},
      {"id": "c", "text": "Export the PostgreSQL data as CSV files daily and upload them manually through the Databricks UI."},
      {"id": "d", "text": "Create a foreign table in Unity Catalog that queries PostgreSQL in real-time through Lakehouse Federation."},
      {"id": "e", "text": "Both B and D are valid approaches: Fivetran for physical replication or Lakehouse Federation for virtual access, depending on latency and performance requirements."}
    ],
    "correctIds": ["e"],
    "explanation": "Both approaches are valid: (B) Fivetran/Partner Connect provides physical replication with CDC for low-latency dashboards; (D) Lakehouse Federation creates virtual tables that query PostgreSQL directly, useful when data freshness must be real-time. The choice depends on query frequency, latency tolerance, and cost considerations.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-347",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst uploads a small CSV file (500 rows) through the Databricks workspace UI using the 'Create Table' wizard. After successful upload, the analyst notices the data is accessible.\n\nWhere does the uploaded data physically reside after using the UI upload feature?",
    "options": [
      {"id": "a", "text": "In a temporary session-scoped table that disappears when the analyst logs out."},
      {"id": "b", "text": "As a managed Delta table in Unity Catalog, stored in the managed storage location of the target catalog/schema."},
      {"id": "c", "text": "In the Databricks Control Plane as a cached dataset."},
      {"id": "d", "text": "As a CSV file attached to the analyst's personal workspace folder."},
      {"id": "e", "text": "In an external S3 bucket that requires separate storage configuration."}
    ],
    "correctIds": ["b"],
    "explanation": "When uploading files through the Databricks UI, the data is imported into a managed Delta table in Unity Catalog. The underlying files are stored in the managed storage location associated with the target schema. This makes the data persistent, governed, and accessible to authorized users.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-348",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs COPY INTO to load JSON files that contain nested objects (e.g., `{\"user\": {\"name\": \"Alice\", \"address\": {\"city\": \"NYC\"}}}`).\n\nThe resulting table has a column `user` of type STRUCT. The analyst needs to extract the city value for analysis.\n\nWhich SQL syntax correctly accesses the nested `city` field?",
    "options": [
      {"id": "a", "text": "SELECT user->address->city FROM target_table"},
      {"id": "b", "text": "SELECT user.address.city FROM target_table"},
      {"id": "c", "text": "SELECT GET_JSON_OBJECT(user, '$.address.city') FROM target_table"},
      {"id": "d", "text": "SELECT user['address']['city'] FROM target_table"},
      {"id": "e", "text": "SELECT FLATTEN(user).city FROM target_table"}
    ],
    "correctIds": ["b"],
    "explanation": "In Databricks SQL, nested STRUCT fields are accessed using dot notation: column.field.subfield. Since `user` is a STRUCT containing `address` (also a STRUCT containing `city`), the correct syntax is `user.address.city`. Arrow notation (`->`) is not supported; GET_JSON_OBJECT is for raw JSON strings, not STRUCT columns.",
    "domain": "Importing Data"
  },
  {
    "id": "db-da-349",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to create an external table in Unity Catalog that references data stored in the company's ADLS Gen2 account. The analyst writes:\n\n`CREATE TABLE analytics.ext_sales (id INT, amount DOUBLE) LOCATION 'abfss://container@account.dfs.core.windows.net/sales/'`\n\nThe query fails with a permission error.\n\nWhat is the most likely cause?",
    "options": [
      {"id": "a", "text": "The LOCATION URL syntax is incorrect for ADLS Gen2."},
      {"id": "b", "text": "An External Location must be registered in Unity Catalog that maps to this storage path, and a Storage Credential must be configured with appropriate cloud permissions."},
      {"id": "c", "text": "External tables can only point to S3, not ADLS Gen2."},
      {"id": "d", "text": "The analyst needs to run MOUNT first before creating external tables."},
      {"id": "e", "text": "Unity Catalog does not support external tables; all tables must be managed."}
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog governs external data access through two objects: (1) Storage Credentials (cloud IAM role/service principal) and (2) External Locations (mapping from a storage path to a credential). Without an External Location registered for the ADLS path, Unity Catalog blocks access regardless of the analyst's workspace permissions.",
    "domain": "Importing Data"
  },

// ============ ANALYZING QUERIES (8 questions) ============

  {
    "id": "db-da-350",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs a query that takes 45 minutes to complete. The analyst opens the Query Profile and notices that 90% of the execution time is spent in a single 'Scan' stage reading a 200GB table, even though the query filters on `WHERE date = '2026-01-15'`.\n\nWhich optimization would most significantly reduce the scan time?",
    "options": [
      {"id": "a", "text": "Add an index on the `date` column to speed up the filter operation."},
      {"id": "b", "text": "Apply Liquid Clustering on the `date` column (or ZORDER BY date) so that the filter can skip irrelevant files through data skipping, reducing the volume of data scanned."},
      {"id": "c", "text": "Increase the SQL Warehouse size to add more compute nodes for parallel scanning."},
      {"id": "d", "text": "Convert the table from Delta to Parquet format for faster read performance."},
      {"id": "e", "text": "Add a LIMIT 1000 clause to reduce the amount of data returned."}
    ],
    "correctIds": ["b"],
    "explanation": "Liquid Clustering (or ZORDER BY) organizes data files by the specified columns. When filtering on `date`, Delta Lake's data skipping reads file-level statistics and skips files that don't contain the target date. Without clustering, all 200GB must be scanned. Delta Lake doesn't use traditional indexes — data skipping via file statistics is the optimization mechanism.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-351",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst uses the Query Profile to analyze a slow-running query and notices a 'Sort Merge Join' between two large tables. A colleague suggests it should be a 'Broadcast Hash Join' instead.\n\nUnder what condition does Databricks automatically choose a Broadcast Hash Join?",
    "options": [
      {"id": "a", "text": "When both tables are larger than 1GB, a Broadcast Hash Join is always more efficient."},
      {"id": "b", "text": "When one of the joined tables is small enough (typically under 10MB by default) to be broadcast to all worker nodes, eliminating the need for expensive shuffle operations."},
      {"id": "c", "text": "Broadcast Hash Join is never chosen automatically; it must always be specified with a query hint."},
      {"id": "d", "text": "When the join is performed on a primary key column, Databricks always uses Broadcast Hash Join."},
      {"id": "e", "text": "Broadcast Hash Join is only available when using Photon-enabled warehouses."}
    ],
    "correctIds": ["b"],
    "explanation": "Databricks automatically chooses Broadcast Hash Join when one table is small enough to fit in memory on each worker node (default threshold ~10MB, configurable). The small table is 'broadcast' to all nodes, eliminating expensive shuffle/sort operations. For large-large joins, Sort Merge Join is used. Hints like /*+ BROADCAST(small_table) */ can override the threshold.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-352",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst writes a query that uses `SELECT *` from a table with 150 columns, but the dashboard only needs 5 specific columns. The Query Profile shows high I/O and memory usage.\n\nWhich principle explains why `SELECT *` is inefficient for columnar storage formats like Delta (Parquet)?",
    "options": [
      {"id": "a", "text": "Parquet stores data row-by-row, so reading all columns is the same cost as reading 5 columns."},
      {"id": "b", "text": "Parquet is a columnar format — each column is stored separately. SELECT * forces reading all 150 column files, while selecting only 5 columns reads 97% less data from storage."},
      {"id": "c", "text": "SELECT * is slow because it triggers a full table lock, preventing other queries from running."},
      {"id": "d", "text": "The inefficiency comes from network transfer, not storage I/O — the same amount of data is scanned regardless."},
      {"id": "e", "text": "SELECT * is only slow on external tables; managed Delta tables are unaffected."}
    ],
    "correctIds": ["b"],
    "explanation": "Parquet (Delta's underlying format) is columnar — each column is stored in a separate column chunk. When you SELECT only 5 of 150 columns, Databricks reads only those 5 column chunks, skipping 145 others. SELECT * reads all 150 column chunks, dramatically increasing I/O, memory, and query time. This is called 'column pruning.'",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-353",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs OPTIMIZE on a Gold-layer table with 50,000 small files (each under 1MB). After optimization, the table has 500 files of approximately 100MB each. Dashboard query time improves from 3 minutes to 20 seconds.\n\nWhat does OPTIMIZE do that caused this performance improvement?",
    "options": [
      {"id": "a", "text": "OPTIMIZE adds indexes to the Delta table, enabling faster lookups on filtered queries."},
      {"id": "b", "text": "OPTIMIZE compacts many small files into fewer, larger files (targeting ~1GB), reducing the overhead of opening thousands of files and improving I/O throughput through sequential reads."},
      {"id": "c", "text": "OPTIMIZE caches the table data in memory on the SQL Warehouse, so subsequent reads avoid disk I/O."},
      {"id": "d", "text": "OPTIMIZE converts the table from Parquet to a proprietary Databricks format with better compression."},
      {"id": "e", "text": "OPTIMIZE rewrites queries to use more efficient execution plans."}
    ],
    "correctIds": ["b"],
    "explanation": "OPTIMIZE solves the 'small files problem' by compacting many small files into fewer, optimally-sized files (target ~1GB). Reading 500 large files is dramatically faster than reading 50,000 small files because: (1) fewer file opens, (2) sequential I/O instead of random, (3) better parallelism. No indexes are created — Delta uses file-level statistics for data skipping.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-354",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst creates a SQL alert on a query: `SELECT COUNT(*) AS failed_jobs FROM job_status WHERE status = 'FAILED' AND date = CURRENT_DATE()`. The alert should trigger when more than 10 jobs fail in a day.\n\nWhich alert configuration is correct?",
    "options": [
      {"id": "a", "text": "Set the alert trigger to: 'Value column = failed_jobs, Condition = greater than, Threshold = 10' with a refresh schedule aligned to the monitoring window."},
      {"id": "b", "text": "Set the alert to trigger when the query returns more than 10 rows."},
      {"id": "c", "text": "Create a dashboard visualization and enable the 'alert on threshold' feature in the chart settings."},
      {"id": "d", "text": "Write a Python script that polls the query results and sends email notifications."},
      {"id": "e", "text": "Alerts only support string comparisons, not numeric thresholds."}
    ],
    "correctIds": ["a"],
    "explanation": "Databricks SQL Alerts work on single aggregated values: the query must return one row with a numeric value column. The alert monitors that value against a threshold condition (greater than, less than, equals). A refresh schedule determines how often the query runs. The alert fires when the condition is met and can send notifications via email or webhooks.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-355",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is comparing two approaches to optimize a query that filters on both `country` and `product_category`:\n\n- Approach A: `OPTIMIZE table ZORDER BY (country, product_category)`\n- Approach B: `ALTER TABLE table CLUSTER BY (country, product_category)` (Liquid Clustering)\n\nWhich statement correctly differentiates these approaches?",
    "options": [
      {"id": "a", "text": "They are identical in behavior; Liquid Clustering is just a new name for ZORDER."},
      {"id": "b", "text": "ZORDER requires manually running OPTIMIZE to re-cluster data after writes, while Liquid Clustering automatically reorganizes data incrementally during writes without manual OPTIMIZE commands."},
      {"id": "c", "text": "ZORDER supports more columns than Liquid Clustering, making it better for wide tables."},
      {"id": "d", "text": "Liquid Clustering only works with Serverless warehouses, while ZORDER works with all warehouse types."},
      {"id": "e", "text": "ZORDER provides better query performance than Liquid Clustering in all scenarios."}
    ],
    "correctIds": ["b"],
    "explanation": "The key difference: ZORDER is a manual operation — you must run OPTIMIZE ... ZORDER BY after data changes. Liquid Clustering (CLUSTER BY) is automatic and incremental — data is reorganized during writes without separate OPTIMIZE commands. Liquid Clustering is also up to 2.5x faster and handles changing query patterns more gracefully. It's the recommended approach for new tables.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-356",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs `DESCRIBE HISTORY sales.transactions` and sees 500 versions in the transaction log. The analyst is concerned about the storage cost of maintaining all these historical versions.\n\nWhich command cleans up old, unreferenced data files while preserving the ability to query recent versions?",
    "options": [
      {"id": "a", "text": "DELETE FROM sales.transactions WHERE version < 400 — to remove old version records."},
      {"id": "b", "text": "VACUUM sales.transactions RETAIN 168 HOURS — to delete data files older than 7 days that are no longer referenced by the current table version."},
      {"id": "c", "text": "OPTIMIZE sales.transactions — to compact files and automatically remove old versions."},
      {"id": "d", "text": "ALTER TABLE sales.transactions SET TBLPROPERTIES ('delta.logRetentionDuration' = '1 day') — to delete the transaction log entries."},
      {"id": "e", "text": "DROP TABLE sales.transactions; CREATE TABLE sales.transactions — to recreate with only the latest data."}
    ],
    "correctIds": ["b"],
    "explanation": "VACUUM removes old data files that are no longer referenced by the current or recent table versions and exceed the retention period (default 7 days / 168 hours). It reclaims storage while preserving Time Travel within the retention window. OPTIMIZE compacts files but doesn't remove old versions. The transaction log itself is managed separately via logRetentionDuration.",
    "domain": "Analyzing Queries"
  },
  {
    "id": "db-da-357",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst writes a CTE (Common Table Expression) that is referenced three times in the main query. The Query Profile shows the CTE's computation is repeated three times.\n\nWhich optimization strategy would eliminate the redundant computation?",
    "options": [
      {"id": "a", "text": "Replace the CTE with a TEMPORARY VIEW, which is only computed once."},
      {"id": "b", "text": "Materialize the CTE result into a TEMPORARY VIEW or cached table, so it is computed once and reused for all three references."},
      {"id": "c", "text": "CTEs are always computed only once in Databricks; the Query Profile is showing parallelized execution, not redundancy."},
      {"id": "d", "text": "Use subqueries instead of CTEs, as subqueries are automatically cached by the optimizer."},
      {"id": "e", "text": "Add an ORDER BY to the CTE to force materialization."}
    ],
    "correctIds": ["b"],
    "explanation": "In most SQL engines including Databricks, CTEs are inlined — each reference re-executes the CTE query. If a CTE is referenced multiple times, materializing it (CREATE TEMPORARY VIEW AS, or caching) ensures one computation. Standard CTEs are syntactic sugar for readability, not automatic materialization.",
    "domain": "Analyzing Queries"
  },

// ============ MANAGING DATA (7 questions) ============

  {
    "id": "db-da-358",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst accidentally runs an UPDATE statement that corrupts 2 million records in a production table. The mistake was made 30 minutes ago and the table has had no other writes since.\n\nWhich Delta Lake operation can undo this change most efficiently?",
    "options": [
      {"id": "a", "text": "DELETE FROM table WHERE last_modified > DATE_SUB(CURRENT_TIMESTAMP(), 30) — to remove the corrupted rows."},
      {"id": "b", "text": "RESTORE TABLE table TO VERSION AS OF (SELECT MAX(version) - 1 FROM (DESCRIBE HISTORY table)) — to restore the table to the version before the bad UPDATE."},
      {"id": "c", "text": "Run VACUUM to clean up the corrupted data files and regenerate the table."},
      {"id": "d", "text": "Request the database administrator to restore from the most recent cloud backup."},
      {"id": "e", "text": "Run OPTIMIZE to compact the corrupted files and fix the data automatically."}
    ],
    "correctIds": ["b"],
    "explanation": "RESTORE TABLE is the fastest recovery mechanism for accidental data corruption. It reverts the entire table to a previous version by updating the transaction log pointer — no data copying needed. Time Travel ensures the pre-corruption version's files are still available (within the retention period). VACUUM should NOT be run before RESTORE, as it could delete the files needed.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-359",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst writes:\n```sql\nINSERT INTO silver.customers\nSELECT id, name, email, signup_date, loyalty_tier\nFROM bronze.raw_customers\n```\n\nThe query fails with: `Schema mismatch error: Cannot write to table silver.customers. Column 'loyalty_tier' not found in target table.`\n\nWhat Delta Lake feature caused this error, and how should the analyst resolve it?",
    "options": [
      {"id": "a", "text": "Schema Enforcement blocked the write because the target table doesn't have a `loyalty_tier` column. The analyst should run ALTER TABLE silver.customers ADD COLUMN loyalty_tier STRING, or enable Schema Evolution with mergeSchema."},
      {"id": "b", "text": "The error is caused by a data type mismatch, not a missing column. The analyst should cast loyalty_tier to the correct type."},
      {"id": "c", "text": "Delta Lake prevents INSERT operations on Silver-layer tables by design; MERGE INTO must be used."},
      {"id": "d", "text": "The error occurs because bronze and silver tables are in different catalogs."},
      {"id": "e", "text": "Schema Enforcement only applies to Parquet files, not Delta tables."}
    ],
    "correctIds": ["a"],
    "explanation": "Schema Enforcement is a core Delta Lake feature that rejects writes with mismatched schemas. The write has a column (loyalty_tier) that doesn't exist in the target table. Resolution: (1) ALTER TABLE ADD COLUMN to add the new column explicitly, or (2) use .option('mergeSchema', 'true') / SET spark.databricks.delta.schema.autoMerge.enabled = true to enable automatic Schema Evolution.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-360",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs `DESCRIBE HISTORY analytics.monthly_revenue` and sees the following versions:\n\n| version | timestamp | operation |\n|---------|-----------|------------|\n| 5 | 2026-03-30 | UPDATE |\n| 4 | 2026-03-29 | DELETE |\n| 3 | 2026-03-28 | UPDATE |\n| 2 | 2026-03-25 | WRITE |\n| 1 | 2026-03-20 | WRITE |\n| 0 | 2026-03-15 | CREATE |\n\nThe analyst needs to compare today's data with the state from March 25.\n\nWhich query performs this comparison?",
    "options": [
      {"id": "a", "text": "SELECT * FROM analytics.monthly_revenue EXCEPT SELECT * FROM analytics.monthly_revenue@v2"},
      {"id": "b", "text": "SELECT * FROM analytics.monthly_revenue VERSION AS OF 5 EXCEPT ALL SELECT * FROM analytics.monthly_revenue VERSION AS OF 2"},
      {"id": "c", "text": "SELECT * FROM analytics.monthly_revenue TIMESTAMP AS OF '2026-03-25' MINUS SELECT * FROM analytics.monthly_revenue"},
      {"id": "d", "text": "DIFF analytics.monthly_revenue BETWEEN VERSION 2 AND VERSION 5"},
      {"id": "e", "text": "SELECT * FROM analytics.monthly_revenue WHERE _change_type = 'update_postimage'"}
    ],
    "correctIds": ["b"],
    "explanation": "Time Travel with VERSION AS OF allows querying any historical state. EXCEPT ALL returns rows present in the current version (5) but not in version 2, showing what was added/changed. The @v2 syntax is not standard Delta Lake SQL. DIFF is not a Delta command. Change Data Feed (_change_type) requires explicit enablement and tracks row-level changes differently.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-361",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst is working with a Delta table that receives daily batch loads of 500MB from an ERP system. Over time, the table grows to 100GB with 15,000 small files from incremental loads.\n\nWhich maintenance strategy should the analyst implement to keep query performance optimal?",
    "options": [
      {"id": "a", "text": "Schedule daily VACUUM with 0 hours retention to immediately remove all old files."},
      {"id": "b", "text": "Schedule regular OPTIMIZE to compact small files, followed by VACUUM with the default 7-day retention to clean up old files while preserving Time Travel capability."},
      {"id": "c", "text": "Rebuild the table weekly using DROP/CREATE to start fresh with optimal file sizes."},
      {"id": "d", "text": "Increase the SQL Warehouse size to compensate for the performance impact of small files."},
      {"id": "e", "text": "Enable Auto Loader, which automatically optimizes file sizes during ingestion."}
    ],
    "correctIds": ["b"],
    "explanation": "The recommended maintenance pattern: (1) OPTIMIZE regularly to compact small files into larger, efficient files, (2) VACUUM after OPTIMIZE (with default 7-day retention) to reclaim storage from old, replaced files. VACUUM with 0 hours destroys Time Travel capability. Rebuilding tables is wasteful. Auto Loader doesn't optimize existing data.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-362",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to add a column `loyalty_score` (DOUBLE) to an existing Delta table with 50 million rows.\n\nWhich statement correctly adds the column without rewriting any existing data?",
    "options": [
      {"id": "a", "text": "ALTER TABLE customers ADD COLUMN loyalty_score DOUBLE — this modifies only the metadata (schema) in the Delta transaction log without touching data files."},
      {"id": "b", "text": "UPDATE customers SET loyalty_score = NULL — this implicitly adds the column if it doesn't exist."},
      {"id": "c", "text": "CREATE OR REPLACE TABLE customers AS SELECT *, NULL AS loyalty_score FROM customers — to rebuild with the new column."},
      {"id": "d", "text": "Adding a column requires dropping and recreating the table; ALTER TABLE ADD COLUMN is not supported for Delta tables."},
      {"id": "e", "text": "INSERT INTO customers (loyalty_score) VALUES (NULL) — to create the column with a default value."}
    ],
    "correctIds": ["a"],
    "explanation": "ALTER TABLE ADD COLUMN is a metadata-only operation in Delta Lake. It updates the schema in the transaction log without rewriting any data files. Existing files will return NULL for the new column. This is one of Delta Lake's advantages — schema changes are cheap and instantaneous regardless of table size.",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-363",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst runs the following query to update product prices:\n\n```sql\nMERGE INTO gold.products AS target\nUSING staging.price_updates AS source\nON target.product_id = source.product_id\nWHEN MATCHED THEN UPDATE SET target.price = source.new_price\nWHEN NOT MATCHED THEN INSERT (product_id, name, price) VALUES (source.product_id, source.name, source.new_price)\n```\n\nWhat ACID property does Delta Lake guarantee during this MERGE operation?",
    "options": [
      {"id": "a", "text": "Atomicity only — either all changes apply or none do, but concurrent reads may see partial results."},
      {"id": "b", "text": "Full ACID: the MERGE is atomic (all or nothing), consistent (schema enforced), isolated (concurrent readers see the table in its pre-MERGE state until commit), and durable (committed changes survive failures)."},
      {"id": "c", "text": "Delta Lake provides eventual consistency, so other users may see partial MERGE results for a brief period."},
      {"id": "d", "text": "ACID properties only apply to INSERT operations; MERGE bypasses transaction guarantees for performance."},
      {"id": "e", "text": "Delta Lake provides ACID for single-table operations, but MERGE involves two tables, so it falls back to best-effort consistency."}
    ],
    "correctIds": ["b"],
    "explanation": "Delta Lake provides full ACID transactions for all write operations including MERGE. The operation is Atomic (all changes commit together), Consistent (schema enforcement validated), Isolated (concurrent readers see the snapshot before the MERGE until it commits), and Durable (committed to the transaction log and cloud storage).",
    "domain": "Managing Data"
  },
  {
    "id": "db-da-364",
    "courseId": "databricks-da",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst discovers that someone has enabled Change Data Feed (CDF) on a Silver-layer table. The analyst queries:\n\n```sql\nSELECT * FROM table_changes('silver.orders', 3, 5)\n```\n\nThe results include columns `_change_type`, `_commit_version`, and `_commit_timestamp`.\n\nWhat does the `_change_type` column represent?",
    "options": [
      {"id": "a", "text": "The SQL command type (INSERT, UPDATE, DELETE) that was executed on the table."},
      {"id": "b", "text": "The type of row-level change: 'insert' for new rows, 'update_preimage' for old values before update, 'update_postimage' for new values after update, and 'delete' for removed rows."},
      {"id": "c", "text": "The schema change type (ADD COLUMN, DROP COLUMN, etc.) tracked at the table level."},
      {"id": "d", "text": "The file-level change type showing which data files were added or removed."},
      {"id": "e", "text": "A user-defined label that must be set manually when writing data."}
    ],
    "correctIds": ["b"],
    "explanation": "Change Data Feed tracks row-level changes with `_change_type`: 'insert' (new row), 'update_preimage' (row values BEFORE update), 'update_postimage' (row values AFTER update), and 'delete' (removed row). This enables downstream consumers to process only changed data rather than full table scans — essential for efficient incremental ETL.",
    "domain": "Managing Data"
  }
