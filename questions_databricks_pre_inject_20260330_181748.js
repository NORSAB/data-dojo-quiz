window.questionsData = (window.questionsData || [
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
    "explanation": "The correct answer is Gold because it represents the refined, aggregated, and business-ready data designed for consumption by data analysts. Data analysts use the Gold layer most often because it provides curated datasets designed for reporting, dashboards, and ad-hoc analysis.",
    "domain": "Platform Understanding"
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
    "explanation": "The SQL Editor is specifically designed for SQL development. It provides features such as syntax highlighting, auto-completion, query history, and result visualization. Data analysts use this editor to write their queries.",
    "domain": "Executing Queries"
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
    "explanation": "Databricks SQL complements dedicated BI tools by providing a convenient and efficient means for in-platform data exploration and prototyping, while specialized BI tools are used for advanced analysis and presentation.",
    "domain": "Platform Understanding"
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
    "explanation": "Partner Connect streamlines the setup process by automating the creation of the necessary SQL warehouse and configuring the connection details between Fivetran and Databricks.",
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
    "explanation": "Data Engineers primarily use Databricks Data Science & Engineering for Spark-based data processing. Databricks SQL functions as a secondary tool for data engineers, assisting in tasks like data validation or troubleshooting.",
    "domain": "Platform Understanding"
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
    "explanation": "Serverless SQL endpoints eliminate the warm-up period associated with traditional SQL endpoints because they are managed by Databricks, offering immediate compute availability.",
    "domain": "Executing Queries"
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
    "explanation": "Continuously querying the gold-level tables every minute to update the dashboard puts a significant load on compute resources. The analyst should caution that this level of frequency might lead to substantial infrastructure costs.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "The LOCATION clause in the CREATE EXTERNAL TABLE statement specifies the path to the data within the object storage. This is the standard method for directly ingesting data.",
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
    "explanation": "Markdown-based text boxes are the most suitable tool. Databricks dashboards support Markdown, allowing analysts to add formatted text and headings directly within the dashboard interface.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Databricks SQL is designed explicitly for SQL queries, supports serverless compute (Serverless SQL Warehouses), and integrates data visualization capabilities within dashboards.",
    "domain": "Platform Understanding"
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
    "explanation": "When you DROP TABLE for an external table, Databricks only removes the metadata from the metastore. The underlying data files in the external storage location remain untouched.",
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
    "explanation": "Since this is an external (unmanaged) table, dropping the table only deletes the metadata. The data itself is untouched.",
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
    "explanation": "Responsible data analysis involving PII demands a comprehensive approach that encompasses organizational policies, data origin jurisdiction laws, and the jurisdiction where the analysis is performed.",
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
    "explanation": "Delta Lake meticulously manages metadata (transaction logs, schema info, statistics) alongside data files to provide transactional guarantees and versioning.",
    "domain": "Platform Understanding"
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
    "explanation": "Traditional data lakes often lack ACID guarantees. Delta Lake addresses this by providing ACID transactions on top of the data lake, ensuring atomic and consistent updates.",
    "domain": "Platform Understanding"
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
    "explanation": "Data Explorer is designed for discovery and governance. It allows users to view metadata (schema, types), preview data, and manage permissions on data assets.",
    "domain": "Platform Understanding"
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
    "explanation": "TEMPORARY views are visible only to the session that created them and are dropped automatically when the session ends (e.g., user logs out).",
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
    "explanation": "The correct method is to explicitly assign the new owner's account in the Owner field. This ensures a clear transfer of responsibility and privileges.",
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
    "explanation": "When used with a managed table, `DROP TABLE` removes both the table's metadata from the metastore and the underlying data files. `database_name.table_name` specifies the target table correctly.",
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
    "explanation": "The query filters for `age >= 75` AND `country = 'canada'`. Option E is the only table where all rows satisfy both conditions (Age is 75, 80, 90 and Country is 'canada') and only the selected columns are shown.",
    "domain": "Executing Queries"
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
    "explanation": "The `INSERT INTO ... TABLE` command appends data from the source table to the target table. It does not automatically remove duplicate rows; if duplicates exist in the source, they are added.",
    "domain": "Executing Queries"
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
    "explanation": "`explode(products)` takes an array column and creates a new row for each element in the array, duplicating the other columns for each new row.",
    "domain": "Executing Queries"
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
    "explanation": "`SELECT DISTINCT *` is the standard SQL clause to retrieve only unique rows. Combining this with `CREATE TABLE ... AS` creates a new table with the deduplicated data.",
    "domain": "Executing Queries"
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
    "explanation": "A View (`CREATE OR REPLACE VIEW`) is a virtual table defined by a query. It does not store data itself but runs the query every time it is accessed, ensuring the data is always up-to-date.",
    "domain": "Executing Queries"
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
    "explanation": "`PERCENT_RANK()` calculates the relative rank (0 to 1). `PARTITION BY region` ensures the calculation is done independently for each region. `ORDER BY sales DESC` ranks higher sales first (0) and lower sales last (1).",
    "domain": "Executing Queries"
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
    "explanation": "Higher-order functions in Spark SQL (like `transform`, `filter` on arrays) are designed to apply custom logic efficiently to elements within complex data types like arrays and maps without exploding them.",
    "domain": "Executing Queries"
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
    "explanation": "`LEFT SEMI JOIN` returns rows from the left table that have a match in the right. `LEFT ANTI JOIN` returns rows from the left table that do NOT have a match in the right.",
    "domain": "Executing Queries"
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
    "explanation": "To apply a UDF, you call it like a standard function, passing the column names as arguments: `price(col1, col2)`.",
    "domain": "Executing Queries"
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
    "explanation": "When using an aggregate function like `COUNT` with a non-aggregated column like `region`, a `GROUP BY` clause is required to define the groups.",
    "domain": "Executing Queries"
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
    "explanation": "`WITH CUBE` generates subtotals for all possible combinations of the grouping columns (totals for group_1, totals for group_2, and the grand total).",
    "domain": "Executing Queries"
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
    "explanation": "ANSI SQL compliance ensures broad compatibility, making it significantly easier to migrate existing queries and workloads from other systems to Databricks.",
    "domain": "Executing Queries"
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
    "explanation": "Query History provides execution details for each query. Clicking on a specific query reveals a slideout with metadata, including whether the result was fetched from the cache.",
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
    "explanation": "You do NOT need to be an admin to schedule a refresh. Typically, the query owner or users with 'Can Manage' permissions on the query can configure schedules.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Databricks heuristics often default to a Line Chart when analyzing a quantitative value (`number_of_customer`) against a qualitative or categorical value (`region`), although a Bar Chart might also be appropriate.",
    "domain": "Executing Queries"
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
    "explanation": "You can create multiple visualization widgets from a single query execution and add them individually to a dashboard without duplicating the underlying query.",
    "domain": "Executing Queries"
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
    "explanation": "Sharing a Personal Access Token (PAT) gives the client authenticated access to the API and potential resources acting as that user, violating the security requirement.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "A Sankey diagram is specifically designed to visualize flows, transfers, and movements between different states or stages.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "When linked to a Dashboard Parameter, the visualization shares the control with other widgets using the same parameter, allowing a single selection to update multiple charts simultaneously.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Queries that use query parameters introduce dynamic behavior that cannot be consistently evaluated by the alerting system. Databricks Alerts require a static query.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "The Visualization Editor does not provide a feature to add borders around the visualization. It focuses on data representation aspects like scale, colors, and labels.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Databricks SQL excels at data warehousing tasks such as querying, joining, and aggregating data from different sources to create comprehensive datasets.",
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
    "explanation": "This type of light, custom processing performed by analysts on top of the refined gold layer is often referred to as Last-mile ETL.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Descriptive statistics focuses on using measures like mean, median, and mode to summarize and present the characteristics of a dataset.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Extreme outliers pull the mean towards them (skewing the distribution), while the median remains resistant, resulting in a significant difference between the two.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Data enhancement is the process where data is made richer or more complete by adding new datasets to improve the utility of the original data.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "This query correctly selects only the `user_id` and `email_address` columns and applies the filter `age > 25` and `country = 'Canada'`.",
    "domain": "Executing Queries"
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
    "explanation": "Working with gold-layer tables (clean, business-ready data) and performing additional joins or enhancements is a typical use case for Databricks SQL.",
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
    "explanation": "It unifies computations, data storage, and analytical tools on the same platform, avoiding the need to move data out of the lakehouse for analysis.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "The query requires a `COUNT(order_id)` and a `GROUP BY customer_name`. (Note: The source marks 'C' as the answer but Option D contains the correct standard SQL syntax with 'AS' and 'GROUP BY'. The provided explanation matches the logic of Option D).",
    "domain": "Executing Queries"
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
    "explanation": "While classic EDWs have ACID, the question in this exam context highlights ACID as a key feature brought by Delta Lake to the Lakehouse architecture.",
    "domain": "Platform Understanding"
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
    "explanation": "Query History monitors past executions but does not have functionality to automate or schedule future query executions.",
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
    "explanation": "A continuous variable can take on any value within a range (uncountable), including fractions and decimals.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "To rank strictly *within* regions as requested, `PARTITION BY region` is usually required, while `ORDER BY sales DESC` ranks them by sales.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Unless the location is specified at the *table* level or configured differently, managed databases in the Hive metastore typically default to the warehouse directory `dbfs:/user/hive/warehouse/accounting.db`.",
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
    "explanation": "`WITH ROLLUP` generates subtotals for the specified columns in a hierarchical manner (e.g., total for group_1, and grand total), which matches the output shown.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Dropping a managed table deletes both metadata and data. Dropping an external table deletes only the metadata, leaving the underlying data files intact.",
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
    "explanation": "Subqueries allow you to retrieve and use data dynamically within another query without the need to formally define and create a persistent table or view.",
    "domain": "Executing Queries"
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
    "explanation": "Catalog Explorer provides detailed metadata for objects in Unity Catalog, including the Owner field for tables.",
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
    "explanation": "Visualizations are tools for communication; choosing different types (bar, line, scatter) highlights different aspects, trends, or relationships within the same dataset.",
    "domain": "Data Modeling"
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
    "explanation": "Variance quantifies the spread or dispersion of a dataset relative to its mean (central value).",
    "domain": "Data Modeling"
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
    "explanation": "Databricks SQL uses ANSI SQL as its standard dialect, ensuring broad compatibility with other systems and standard SQL syntax.",
    "domain": "Executing Queries"
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
    "explanation": "Moving from Silver (`cleaned_transactions`) to Gold involves aggregation and business logic. Option C aggregates sales by store, which is typical for a Gold-level business report.",
    "domain": "Executing Queries"
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
    "explanation": "SQL Warehouses are the optimized compute engines dedicated to executing SQL queries in Databricks SQL.",
    "domain": "Platform Understanding"
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
    "explanation": "Saving as a Query object is the standard way to persist SQL statements in Databricks SQL for reuse and dashboard integration.",
    "domain": "Executing Queries"
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
    "explanation": "Visualizations and counters in a dashboard are built on top of Queries. You must create and save these Queries (and their associated visualizations) first.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "`MERGE INTO` allows conditional logic. `WHEN NOT MATCHED THEN INSERT *` ensures only new records are added, preventing duplicates for existing IDs.",
    "domain": "Executing Queries"
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
    "explanation": "Partner Connect simplifies the connection process by automating the creation of security tokens (PAT), obtaining drivers, and providing pre-configured connection files.",
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
    "explanation": "Databricks SQL (and Spark SQL) uses 0-based indexing for array access with bracket notation. `products[0]` retrieves the first element.",
    "domain": "Executing Queries"
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
    "explanation": "Widget parameters pass values (like a date range) into the underlying query's SQL code (typically in a WHERE clause) to filter the data before it is visualized.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "You can add non-account email addresses to a dashboard's scheduled refresh subscription. They will receive an email snapshot of the dashboard automatically.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Partner Connect simplifies the integration process, making it easier to establish data connections between Databricks and various partner ecosystems (BI, ingestion, etc.)",
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
    "explanation": "UDFs are designed to encapsulate custom, often complex logic that isn't available through standard built-in SQL functions, allowing for reusability.",
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
    "explanation": "To change specific chart properties like axis scales, labels, or ranges, you must access the specific configuration within the Visualization Editor.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Data blending refers to the process of combining data from multiple sources into a unified dataset to create a more comprehensive view for analysis.",
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
    "explanation": "A Left Join returns all records from the left table (`customers`) and matched records from the right (`orders`). This allows identifying customers with orders (match) and those without (NULL on the right side) in a single result set.",
    "domain": "Executing Queries"
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
    "explanation": "The correct protocol is to immediately stop accessing the unauthorized data and escalate to a supervisor to ensure compliance with legal and organizational policies.",
    "domain": "Executing Queries"
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
    "explanation": "To meet the stakeholder requirement of seeing new data within 10 minutes, the dashboard must be scheduled to refresh at an interval matching or exceeding that frequency (10 minutes or less).",
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
    "explanation": "Queries can be scheduled to run independently directly from the Query Editor interface.",
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
    "explanation": "The 'Create' page in Databricks SQL allows for a simple drag-and-drop upload of small CSV files to quickly create a table, which is ideal for a 50-row lookup file.",
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
    "explanation": "Delta Lake is the storage layer that adds ACID transactions, schema enforcement, and reliability to the data lake, enabling the Lakehouse architecture.",
    "domain": "Platform Understanding"
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
    "explanation": "Databricks SQL visualizations are optimized for quick, exploratory analysis directly on large datasets residing in the lakehouse, rather than pixel-perfect polished presentations.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Dashboards allow you to combine visualizations from multiple queries into a single view that can be easily shared with stakeholders.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "`CREATE OR REPLACE TABLE` ensures the table is dropped and recreated if it exists. Defining columns in parentheses `(col type, ...)` is the standard syntax for defining the schema.",
    "domain": "Executing Queries"
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
    "explanation": "Business analysts are the primary audience for Databricks SQL, using it for ad-hoc queries, reporting, and dashboards.",
    "domain": "Executing Queries"
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
    "explanation": "Using `GROUP BY product_id, sale_date` with the aggregate function `SUM(sale_amount)` correctly collapses the rows to the desired granularity (one row per product/day).",
    "domain": "Executing Queries"
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
    "explanation": "Photon improves performance on large datasets using a vectorized C++ execution engine (A) and a specialized caching layer that transcodes data for faster scanning (E).",
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
    "explanation": "The correct workflow for training Genie is to provide sample questions and their corresponding correct SQL directly in the configuration context menu.",
    "domain": "AI/BI Genie Spaces"
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
    "explanation": "Lakeflow Spark Declarative Pipelines (often referring to Delta Live Tables logic) are designed for declarative ETL with built-in quality expectations and automated orchestration.",
    "domain": "Executing Queries"
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
    "explanation": "Liquid Clustering offers flexibility to change clustering keys on the fly without the expensive rewrite required by traditional partitioning, adapting to evolving query patterns.",
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
    "explanation": "Databricks dashboards can be scheduled to refresh automatically at specified intervals, ensuring stakeholders always view the most current data without manual effort.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Adding descriptions in Unity Catalog provides semantic context (D), and providing example queries helps Genie map business terminology to the correct SQL logic (E).",
    "domain": "Executing Queries"
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
    "explanation": "To check for the existence of a value within an array column in Databricks SQL, the `array_contains()` function must be used.",
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
    "explanation": "The standard way to mark a table's certification status in Unity Catalog is by setting the system tag `system.certification_status`.",
    "domain": "AI/BI Genie Spaces"
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
    "explanation": "Genie relies heavily on the semantic layer: rich metadata (descriptions) in Unity Catalog, verified sample SQL queries, and clear instructions to generate accurate answers.",
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
    "explanation": "Unity Catalog manages structured data via Tables and unstructured data (files, images) via Volumes, providing a unified governance layer.",
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
    "explanation": "When an alert's condition is evaluated as true (threshold met), the status is reported as `TRIGGERED`.",
    "domain": "Platform Understanding"
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
    "explanation": "The Data Intelligence Engine (formerly Databricks IQ) is the underlying AI engine that understands your data's semantics to power features like Genie and Assistant.",
    "domain": "Platform Understanding"
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
    "explanation": "It trades a small amount of accuracy for significant performance gains using the HyperLogLog++ algorithm, which is ideal for massive datasets.",
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
    "explanation": "Query Insights (part of Query History/Performance view) allows users to analyze historical performance trends, execution counts, and resource usage for specific queries.",
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
    "explanation": "Declarative Pipelines (like DLT) combined with Auto Loader provide schema evolution support and multi-language capabilities for robust ETL.",
    "domain": "AI/BI Genie Spaces"
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
    "explanation": "Marking verified queries as 'Trusted Assets' certifies them as accurate, encouraging users to rely on these pre-validated answers.",
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
    "explanation": "The workspace search uses the syntax `tag:<tag_key>` to filter assets by a specific tag in Unity Catalog.",
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
    "explanation": "Memory peak per operator directly shows the maximum RAM consumed by a specific stage/operator, identifying the culprit for OOM (Out Of Memory) errors.",
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
    "explanation": "Materialized views precompute and store the results. Since the source data changes only once a day, this avoids recomputing the heavy aggregation for every report run.",
    "domain": "Executing Queries"
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
    "explanation": "Databricks notebooks have a built-in visualization feature. Running a query with `%sql` (or `display()`) provides a '+' button in the results to instantly add charts.",
    "domain": "Executing Queries"
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
    "explanation": "In Unity Catalog's hierarchy, you must have `USE CATALOG` on the parent catalog (and `USE SCHEMA`) to access any object inside it, regardless of table-level permissions.",
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
    "explanation": "The Delta Cache (Disk Cache) is optimized specifically for Parquet files (the format of Delta tables) and works with supported cloud object storage systems.",
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
    "explanation": "Even though PK/FK constraints are not enforced in Databricks, defining them provides critical metadata that Genie uses to automatically understand the data model and join tables correctly.",
    "domain": "AI/BI Genie Spaces"
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
    "explanation": "In the Delta Sharing model, storage and compute are decoupled. The provider pays for hosting the data (storage), but the consumer must bring their own compute (SQL Warehouse) to process and read it.",
    "domain": "Data Modeling"
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
    "explanation": "In Databricks SQL, `read_files` invokes Auto Loader (format `cloud_files`), which is specifically designed to handle schema evolution and efficient incremental ingestion of files.",
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
    "explanation": "For Liquid Clustering, `OPTIMIZE` incrementally re-clusters the data based on the defined clustering keys to ensure data is co-located for fast skipping.",
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
    "explanation": "Materialized Views leverage advanced incremental computation features that are not available in the 'Standard' tier SQL Warehouses. You must use Pro or Serverless.",
    "domain": "Data Modeling"
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
    "explanation": "Marketplace installs create a new Catalog (or schema) in your Unity Catalog. These contain read-only tables that you can query immediately without copying data (Zero-Copy).",
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
    "explanation": "Partitioning by a high-cardinality column (like unique IDs) creates thousands or millions of physical directories with tiny files. This overwhelms the metadata service and degrades performance.",
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
    "explanation": "In modern Databricks Dashboards, you can configure a Schedule with a Subscription Destination to send artifacts (PDFs) to email addresses outside the workspace, provided admin policies allow it.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Trusted Assets act as a curated allow-list. It tells Genie: 'Use these tables to answer questions,' ensuring the AI doesn't pick up irrelevant or temporary tables from the catalog.",
    "domain": "AI/BI Genie Spaces"
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
    "explanation": "`DELETE` in Delta Lake is a soft-delete (logical). The data remains in history for Time Travel. To strictly remove physical files immediately, `VACUUM` with 0 retention is required (ignoring the default safety retention check).",
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
    "explanation": "`CLUSTER BY` is the specific DDL syntax to enable Liquid Clustering. `PARTITIONED BY` is for Hive-style partitioning, and `ZORDER` is an optimization command, not a creation clause.",
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
    "explanation": "In Databricks, Primary and Foreign Keys are 'Informational Constraints'. They are used for documentation and query optimization (and by Genie), but they are NOT enforced during data ingestion.",
    "domain": "Data Modeling"
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
    "explanation": "`system.billing.usage` is the standard system table provided by Unity Catalog to expose consumption and pricing data for all workspaces.",
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
    "explanation": "Draft mode is the staging environment for the analyst to verify logic and 'System Instructions'. End-users only interact with the Released version to ensure quality.",
    "domain": "AI/BI Genie Spaces"
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
    "explanation": "Adding a parameter to a query doesn't automatically link it to the Dashboard's UI controls. You must explicitly map the Dashboard Parameter to the Query Parameter in the widget configuration.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "The `mergeSchema` option in `COPY INTO` (and Spark writes) allows the operation to evolve the target table's schema by adding any new columns found in the source data.",
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
    "explanation": "In Unity Catalog, security policies like Row Filters and Column Masks are attached directly to the Table definition. This ensures the security applies universally, regardless of how the table is accessed (SQL, Python, API).",
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
    "explanation": "In Unity Catalog, **Volumes** are specifically designed to govern non-tabular data (unstructured data like PDFs, images, audio) while maintaining the benefits of centralized governance.",
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
    "explanation": "Databricks SQL integrates with **Git Folders (formerly Repos)**. This allows analysts to save SQL files into a Git repository (GitHub, Azure DevOps, GitLab) to handle versioning, branching, and CI/CD.",
    "domain": "Executing Queries"
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
    "explanation": "The `system.access.audit` table contains the audit logs for Unity Catalog. It records events like table creation, deletion (`DROP`), and access denials, including the user identity and timestamp.",
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
    "explanation": "Standard SQL aggregate functions like `AVG`, `SUM`, `MIN`, and `MAX` automatically **ignore NULL values**. They do NOT treat them as zero. (e.g., Average of `[10, NULL, 20]` is `15`, not `10`).",
    "domain": "Executing Queries"
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
    "explanation": "**Cross-filtering** allows interactions between widgets on a dashboard. Clicking a data point on one visualization applies a temporary filter to other visualizations based on the same dataset.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "ABAC (Attribute-Based Access Control) in Unity Catalog allows defining fine-grained policies based on attributes (tags) applied to data assets and users. It complements the existing privilege model, enabling row-level filtering and column masking through user-defined functions (UDFs) without explicit per-user grants.",
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
    "explanation": "Lakehouse Federation allows creating federated catalogs in Unity Catalog that point to external databases (PostgreSQL, MySQL, Snowflake, etc.), enabling direct queries from Databricks SQL without ETL or data movement.",
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
    "explanation": "RESTORE TABLE my_table TO VERSION AS OF n restores the table to that specific version, undoing all subsequent changes. Note that SELECT * FROM table VERSION AS OF n only queries data at that version without actually restoring it.",
    "domain": "Executing Queries"
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
    "explanation": "A Star Schema is an analytical modeling approach with a central fact table (containing measures like sales amount, quantity) connected to multiple denormalized dimension tables (like product, customer, time). It is optimized for fast reads and aggregations in reporting and dashboards.",
    "domain": "Data Modeling"
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
    "explanation": "Column Masking in Unity Catalog uses User-Defined Functions (UDFs) to transform sensitive data at read time without modifying the underlying stored data. This allows different users to see masked or unmasked values based on their permissions and attributes.",
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
    "explanation": "The Upload File feature in the Databricks SQL UI is designed for lightweight ingestion of individual small files (CSV, JSON, etc.) without requiring object storage configuration. It is ideal for ad-hoc loading of small datasets like lookup tables or quick imports.",
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
    "explanation": "Trend Lines overlay a regression line or moving average on top of data points, helping analysts visually spot anomalies, trends, and deviations from the expected pattern over time.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Data Lineage in Unity Catalog automatically captures and visualizes the flow of data through tables, views, and queries. It shows column-level and table-level dependencies, making it easy to trace data origins, transformations, and downstream impacts.",
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
    "explanation": "Unity Catalog uses a three-level namespace: Catalog → Schema (database) → Table/View. This allows you to reference any object as catalog.schema.table, providing a unified governance model across workspaces.",
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
    "explanation": "GRANT SELECT grants read-only permission, allowing the user to run SELECT queries on the specified table. ALL PRIVILEGES would grant more than needed, and MODIFY would allow data changes. Note that in Unity Catalog, the privilege is SELECT (not READ).",
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
    "explanation": "Databricks SQL is the analyst-facing service of the Data Intelligence Platform. It provides serverless SQL warehouses, a SQL editor, AI/BI dashboards, alerts, and visualization capabilities designed for quick in-platform BI work while complementing dedicated BI tools like Tableau or Power BI.",
    "domain": "Platform Understanding"
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
    "explanation": "The Data Lakehouse architecture combines the best features of both data warehouses (ACID transactions, schema enforcement, governance) and data lakes (scalable storage, support for diverse data types, cost efficiency). Delta Lake is the open-format storage layer that enables this unification.",
    "domain": "Platform Understanding"
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
    "explanation": "DEEP CLONE creates a complete, independent copy of both the metadata and data files, including transaction history. Changes to the deep clone do not affect the source table and vice versa. SHALLOW CLONE only copies metadata and references original data files, so it is not fully independent.",
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
    "explanation": "SHALLOW CLONE copies only the metadata (schema, partitioning, transaction log) and references the source table's data files without duplicating them. This makes it fast and cost-effective for quick testing or exploration. However, if the source table is VACUUMed, files referenced by the shallow clone may be deleted.",
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
    "explanation": "Predictive Optimization is a feature that automates maintenance operations for Unity Catalog managed tables. It intelligently triggers compaction, VACUUM, and Liquid Clustering based on data usage patterns, reducing manual maintenance while improving query performance and storage efficiency.",
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
    "explanation": "By default, Delta Lake retains old data files for 7 days (168 hours). Running VACUUM permanently deletes unreferenced files older than this retention period. Reducing the retention below 7 days requires overriding a safety check and may break time travel queries and corrupt active reads.",
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
    "explanation": "Databricks AI/BI Dashboards can be embedded into external web applications using iframes. The workspace admin must define allowed embedding surfaces and approve the domains of the host applications. Viewers may need Databricks credentials, or a service principal can be used for external users.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Dashboard Subscriptions allow configuring scheduled email delivery of dashboard snapshots as PDF attachments. When a dashboard schedule runs, subscribers receive a PDF snapshot via email. Snapshots can also be sent to Slack or Microsoft Teams channels.",
    "domain": "Dashboards & Visualizations"
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
    "explanation": "Unity Catalog Volumes provide governance, security, and lineage tracking for non-tabular datasets (images, PDFs, logs, JSON, ML artifacts). They follow the three-level namespace (catalog.schema.volume) and files are accessed via /Volumes/<catalog>/<schema>/<volume>/<path>. Tables handle tabular data; Volumes handle everything else.",
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
    "explanation": "For optimal Genie accuracy, Databricks recommends including only necessary tables (ideally five or fewer) and limiting columns to what is relevant. Too many tables and columns can confuse Genie's SQL generation. Additionally, well-documented table and column descriptions in Unity Catalog are critical for accuracy.",
    "domain": "AI/BI Genie Spaces"
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
    "explanation": "REFRESH STREAMING TABLE ... FULL truncates the table and reprocesses all data from the source based on the updated definition. By default, streaming table refreshes are incremental (only processing new rows). A full refresh is required when the table definition is modified. Caution: full refreshes on sources with short retention (e.g., Kafka) may cause data loss.",
    "domain": "Executing Queries"
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
    "explanation": "The FLOW AUTO CDC clause simplifies CDC processing by automatically handling inserts, updates, deletes, and out-of-order records based on defined keys and sequence columns. It supports SCD Type 1 (direct updates) and SCD Type 2 (history tracking), eliminating the need for complex manual MERGE INTO logic.",
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
    "explanation": "When you create a Materialized View in Databricks SQL, a serverless pipeline is automatically generated to manage refresh operations. Refreshes can be scheduled at regular intervals or triggered manually. The MV stores pre-computed results and updates them as the underlying source data changes.",
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
    "explanation": "Regular (non-temporary) views created with CREATE VIEW are persistent objects stored in Unity Catalog. They survive session ends and restarts. Any user with the appropriate permissions (SELECT on the view and underlying tables) can query them. Only TEMPORARY VIEWs are session-scoped and dropped when the session ends.",
    "domain": "Data Modeling"
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
    "explanation": "Increasing the maximum number of clusters allows the SQL warehouse to scale out horizontally during peak hours, distributing concurrent queries across multiple clusters and reducing queue times. This is different from scaling up (larger cluster size), which improves single-query performance but not concurrency.",
    "domain": "Executing Queries"
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
    "explanation": "In Unity Catalog, PRIMARY KEY and FOREIGN KEY constraints are informational (declarative) only — they are NOT enforced. They serve as metadata hints for query optimizers and BI tools to understand table relationships but do not prevent invalid data from being inserted.",
    "domain": "Data Modeling"
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
    "explanation": "UNION combines two result sets and automatically removes duplicate rows. UNION ALL combines them but keeps all duplicates. INTERSECT returns only rows common to both sets. EXCEPT returns rows from the first set that are not in the second. CROSS JOIN produces a Cartesian product.",
    "domain": "Executing Queries"
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
    "explanation": "LAG() returns the value from the previous row in the ordered window. For the first row, there is no previous row, so LAG() returns NULL by default. You can specify a default value as LAG(salary, 1, 0) to return 0 instead of NULL.",
    "domain": "Executing Queries"
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
    "explanation": "CASE WHEN evaluates conditions top-to-bottom and returns the result for the FIRST match. 750 >= 1000 is FALSE, but 750 >= 500 is TRUE, so 'Gold' is returned. The remaining conditions are not evaluated once a match is found.",
    "domain": "Executing Queries"
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
    "explanation": "COALESCE returns the first non-NULL argument. For order_id = 2, discount is NULL, so COALESCE skips it and returns the next argument: 0. COALESCE(NULL, 0) = 0.",
    "domain": "Executing Queries"
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
    "explanation": "DATE_TRUNC('MONTH', sale_date) returns the first day of the month (e.g., 2025-03-01), preserving the year. DATE_FORMAT with 'yyyy-MM' also preserves year+month. However, MONTH(sale_date) returns only the month number (1-12) and loses the year, so data from different years would be incorrectly grouped together.",
    "domain": "Executing Queries"
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
    "explanation": "LEFT JOIN returns ALL rows from the left table (customers) regardless of whether there is a match in the right table (orders). When there is no match, the columns from the right table are filled with NULL values. This is different from INNER JOIN, which would exclude Alice entirely.",
    "domain": "Executing Queries"
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
    "explanation": "PIVOT transforms rows into columns by aggregating values. The syntax PIVOT (SUM(revenue) FOR quarter IN ('Q1','Q2','Q3','Q4')) rotates the quarter values into column headers with SUM(revenue) as values. UNPIVOT does the opposite (columns to rows). (B) would fail because Q1-Q4 are not existing column names.",
    "domain": "Executing Queries"
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
    "explanation": "EXPLODE() takes an array column and generates one output row for each element in the array. Order 1 has 2 items → 2 rows; Order 2 has 1 item → 1 row; Order 3 has 3 items → 3 rows. Total: 2 + 1 + 3 = 6 rows.",
    "domain": "Executing Queries"
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
    "explanation": "DENSE_RANK assigns the same rank to tied values and does NOT skip ranks after ties. 100K→1, 90K→2, 90K→2 (tie), 80K→3 (not 4). Compare with RANK() which skips: 1, 2, 2, 4. And ROW_NUMBER() which gives unique ranks: 1, 2, 3, 4.",
    "domain": "Executing Queries"
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
    "explanation": "WHERE filters rows BEFORE aggregation and cannot use aggregate functions or column aliases. HAVING filters AFTER aggregation and can reference aggregate expressions. The fix is: SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department HAVING COUNT(*) > 5;",
    "domain": "Executing Queries"
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
    "explanation": "ROW_NUMBER assigns a unique sequential number within each PARTITION (region), ordered by total_sales DESC. Filtering WHERE rn = 1 returns exactly one row per region (the top salesperson). Even with ties, ROW_NUMBER gives unique numbers — use RANK() if you want all tied winners.",
    "domain": "Executing Queries"
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
    "explanation": "EXCEPT returns rows from the first query that are NOT in the second query — exactly what is needed. Query (B) is wrong because a single row cannot have order_date in both 2024 and 2025 simultaneously (the AND condition is always true for 2024 rows, it doesn't check other rows). Query (C) finds customers who ordered in only ONE of the two years, but doesn't distinguish 2024-only from 2025-only.",
    "domain": "Executing Queries"
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
    "explanation": "SUM(salary) OVER (PARTITION BY department) computes the total salary for each department without collapsing rows. Dividing each row's salary by this total gives the percentage contribution of each employee within their department. No GROUP BY is needed because the window function preserves individual rows.",
    "domain": "Executing Queries"
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
    "explanation": "LEAD() returns the value from the NEXT row in the window. For the last row in each partition (customer), there is no next row, so LEAD() returns NULL by default. You can specify a default: LEAD(order_date, 1, '9999-12-31').",
    "domain": "Executing Queries"
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
    "explanation": "MERGE INTO performs an upsert. When the ON condition matches (id exists in both tables), the WHEN MATCHED clause executes (UPDATE). When the source row has no match in target, the WHEN NOT MATCHED clause executes (INSERT). For id=5 (exists in both), the target row is updated.",
    "domain": "Executing Queries"
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
    "explanation": "DATEDIFF(CURRENT_DATE(), '2026-03-01') = 25 days. The WHERE clause filters for days_since_order > 30, so 25 does NOT satisfy this condition and the row is excluded from the results entirely. Only orders older than 30 days would appear.",
    "domain": "Executing Queries"
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
    "explanation": "Functions are evaluated from inside out. TRIM('  Hello World  ') first removes leading and trailing spaces → 'Hello World'. Then UPPER('Hello World') converts all characters to uppercase → 'HELLO WORLD'.",
    "domain": "Executing Queries"
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
    "explanation": "FIRST_VALUE takes the first value in the window frame. Since the window is ordered by salary DESC, the first value is the employee_id of the highest-paid employee. This value is the same for all rows in the department partition.",
    "domain": "Executing Queries"
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
    "explanation": "CASE WHEN evaluates conditions top-to-bottom. 120 > 100 is TRUE (first condition), so it returns unit_price * 0.80 = 50 * 0.80 = 40. The second condition (> 50) is never evaluated because the first match was already found.",
    "domain": "Executing Queries"
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
        "domain": "Platform Understanding"
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
        "explanation": "Time travel querying in Delta Lake lets you query the table at any retained snapshot using a timestamp, version number, or offset (VERSION AS OF, TIMESTAMP AS OF, etc.). This provides a read-only view of the table's state at the desired point in time without altering the current data. RESTORE modifies the table state. VACUUM removes old files. CLONE creates a copy but is not designed for comparison.",
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
        "explanation": "In Data Vault 2.0, Hubs store unique business keys, Satellites store descriptive attributes, and Links model relationships between those keys. When multiple hubs are involved in a relationship, the relationship is captured by a Link Table that holds foreign-key references to each participating hub. Hub Tables only store business keys. Satellite Tables store attributes. Reference Tables hold lookup/reference data.",
        "domain": "Data Modeling"
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
        "explanation": "The Gold layer holds denormalized, curated models that are purpose-built for analytics, reporting, and machine-learning workloads. Gold tables are the final, production-ready datasets that have passed through cleansing, enrichment, and standardization in Bronze and Silver. Option A mischaracterizes the Gold layer. Option B describes the Bronze layer. Option C describes the Silver layer.",
        "domain": "Platform Understanding"
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
        "explanation": "Dynamic Views with IS_MEMBER() provide role-based column restriction, exposing only non-PII columns to unauthorized users while the underlying table still holds the full PII. This approach provides centralized governance, preserves data integrity, and avoids destructive transformations. Granting SELECT gives too broad access. CSV on DBFS lacks proper governance. Obfuscating source data destroys the original information.",
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
        "explanation": "Privileges are resolved by traversing upward through the Unity Catalog hierarchy: metastore → catalogs → schemas → tables/views. When a privilege is granted at a higher level, it is automatically propagated to all objects within unless an override exists at a lower level. This inheritance model reduces administrative overhead and guarantees uniform permissions.",
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
        "explanation": "The requirement specifies both customer_id and region_id must match, so the join needs a compound equality condition on these columns. Option C explicitly adds two join predicates in the ON clause. Option A only joins on one key. Option B uses USING syntax which may work but is not the explicit ON format. Option D uses LEFT JOIN, which would return unmatched rows from the left table.",
        "domain": "Executing Queries"
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
        "explanation": "Option A is correct because GROUP BY must precede HAVING, and only the HAVING clause can filter on aggregate results (COUNT(*) and AVG(price)). Both conditions are correctly placed in HAVING. Option B incorrectly uses WHERE with an aggregate function. Options C and D have incorrect clause ordering.",
        "domain": "Executing Queries"
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
        "explanation": "A SQL Warehouse in Databricks is a dedicated compute cluster that executes SQL statements. It is purpose-built for SQL workloads and powered by the Photon execution engine, which provides vectorized query processing and columnar execution. SQL Warehouses expose a standard JDBC/ODBC interface optimized for low-latency connectivity from BI tools like Power BI, Tableau, and Looker.",
        "domain": "Platform Understanding"
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
        "explanation": "A Genie space can be shared by publishing a dashboard or notebook that embeds the necessary credentials, allowing external users to run queries through the UI only. The stakeholders are added as account users (not workspace members), which isolates them from the underlying Databricks environment. This is secure, scalable, and meets the requirement of no workspace access.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "In a star schema, dimension tables each have a surrogate primary key that uniquely identifies each dimension row. The fact table stores transactional metrics and contains foreign-key columns that reference those dimension keys. This primary-key/foreign-key linkage enables efficient joins with simple equality predicates, supporting fast analytical queries.",
        "domain": "Data Modeling"
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
        "explanation": "A multi-series line chart maps month on the X-axis and revenue on the Y-axis, rendering a separate line for each product category. This enables the viewer to follow a continuous timeline, making trends, seasonal peaks, and declines instantly visible. The overlay of three lines on a single axis facilitates direct category-to-category comparison without additional filters.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Databricks lets you publish a dashboard to a shareable link that can be accessed by anyone who receives it, regardless of whether they hold a Databricks account. By configuring embedded credentials, the analyst controls what data the viewer can see while keeping the underlying workspace hidden. No workspace permissions are needed.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Catalogs act as independent namespaces in Unity Catalog, allowing you to assign distinct permission policies, retention settings, and access-control rules to each environment. By provisioning a separate catalog for production, development, and testing, you guarantee that only the intended team can read/write data in that environment, preventing accidental cross-environment access.",
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
        "domain": "Executing Queries"
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
        "explanation": "Databricks Marketplace provides live external data sources (datasets, notebooks, models, dashboards) shared via Delta Sharing that can be accessed with the same security policies enforced in Unity Catalog. No replication or ETL is required. The marketplace delivers data on-the-fly, and all sharing is governed by Databricks access-control policies.",
        "domain": "Platform Understanding"
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
        "domain": "Executing Queries"
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
        "explanation": "The Data area of the Databricks UI (found under Data→Databases/Tables/Views) provides a dedicated Permissions pane where an admin or data-owner can directly assign SELECT, INSERT, UPDATE, DROP, etc. to a group. When using Unity Catalog, permissions are enforced at the catalog-level and can be granted from the same Data view: select the target object → click Share → add the group and set the privilege. Dashboards (A) are for displaying charts, SQL Warehouses (C) are compute resources, and Settings (D) control environment-wide configurations — none provide granular data-object permissions.",
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
        "explanation": "In Databricks SQL, Delta Lake tables maintain an immutable transaction log that records every change (writes, schema updates, deletes, etc.). The built-in command DESCRIBE HISTORY queries this transaction log and returns a chronological view of all operations performed on the table, including timestamps, operation types, user IDs, and details of the change. Option A is invalid — there is no standard logs column or SELECT logs syntax. Option B (SHOW TRANSACTIONS) is not a supported Databricks SQL command. Option C (VACUUM) removes stale files and compacts storage; it does not provide any audit or historical view.",
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
        "domain": "Executing Queries"
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
        "explanation": "Unity Catalog supports setting custom tags on objects with the clause SET TAGS ('key' = 'value'). To make a table discoverable as a trusted asset, you associate it with a recognizable tag such as certified = 'true'. Option B uses exactly this pattern. Option A (SET TAGS ('system.Certified')) is syntactically incomplete — tags must be defined as key-value pairs. Option C — there is no GRANT CERTIFY privilege or command in Unity Catalog. Option D — UPDATE TABLE … ADD COMMENT is not valid SQL in Unity Catalog; comments are added with SET COMMENT, not via an UPDATE statement.",
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
        "domain": "Platform Understanding"
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
        "explanation": "Delta Lake enforces two complementary retention periods: transaction-log retention (30 days by default, metadata only) and data file retention (7 days by default). Running VACUUM removes data files whose corresponding snapshots are older than the 7-day data-file retention period. A query seeking 10-day-old data will fail because those older files have already been deleted. Option A is incorrect — Delta does not automatically back up data files for compliance. Option B — the 30-day log retention protects metadata, not the actual data files. Option C — Delta does not enforce a hard limit of 7 table versions.",
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
        "domain": "Executing Queries"
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
        "explanation": "Creating a managed table (CREATE TABLE) places the data under Unity Catalog's full governance, including management of the data lifecycle, storage location, and access control. Crucially, managed tables support Predictive Optimization and other automatic storage-level performance features that improve query latency for frequently accessed production workloads. Foreign (A) and External (D) tables keep data outside Unity Catalog's lifecycle management. Temporary tables (C) are session-scoped and cannot be used for production pipelines or long-term governance.",
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
        "domain": "Executing Queries"
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
        "explanation": "Delta Sharing provides secure, read-only data sharing across organizations without requiring a Databricks account/workspace for the recipient. It allows for fine-grained access control (sharing only specific tables), avoids workspace-wide exposure, and maintains audit trails within Unity Catalog. Option A grants too much access. Option C only works if the recipient is in the same Unity Catalog ecosystem. Option B is a manual process that lacks the built-in governance and auditing of Delta Sharing.",
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
        "explanation": "The standard Databricks dashboard workflow involves clicking 'Add Visualization' within the dashboard editor, selecting the desired chart type (like a Gauge), and associating it with a query that returns the necessary metric. Option A is static and not real-time. Option B is unnecessary as the query itself can handle the aggregation. Option D is an indirect and inefficient approach.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "To withdraw previously granted privileges in Unity Catalog, you must use the REVOKE command. The required privilege for accessing a catalog is USAGE. Option C follows the correct syntax: REVOKE <privilege> ON CATALOG <name> FROM <principal>. Option A is for granting, Option B uses invalid syntax, and Option D uses the keyword 'USE' which is not a valid UC privilege.",
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
        "explanation": "To improve Genie's performance and accuracy, it is best practice to provide explicit instructions and multiple example SQL queries (Few-shot prompting). This helps the model understand the expected output format and business context. Adding more tables (A) might add noise, while disabling feedback (C) or deleting history (D) prevents iterative improvement.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "Marking verified and frequently used queries as 'Trusted Assets' in a Genie space provides a clear signal of quality and governance to users, encouraging reuse of high-fidelity logic. Disabling domain instructions (A) reduces context, while automatic generation without review (C) and editing source data (D) introduce risks to accuracy and integrity.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "To exclude specific values in a simple row-level filter, the `WHERE` clause with an inequality operator (`!=` or `<>`) is the standard and most performant approach. Option A is overly restrictive (removes 0 and nulls). Option B incorrectly removes positive 1. Option C uses `HAVING` without a group, which is semantically incorrect for row-level filtering.",
        "domain": "Executing Queries"
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
        "explanation": "Databricks SQL supports named parameters prefixed with a colon (e.g., `:region`). When these markers are detected in the SQL editor, the UI automatically renders input widgets, allowing for dynamic testing without modifying the underlying SQL code. Question marks (C) are used in some other systems for positional parameters but not for this specific UI-driven behavior in Databricks SQL.",
        "domain": "Executing Queries"
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
        "explanation": "Auto Loader is the optimized service for incremental ingestion from cloud storage (like S3). It handles checkpointing automatically and features 'schema evolution' (cloudFiles.schema.auto) to handle changes without manual restarts or intervention, making it much simpler than custom streaming jobs (A).",
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
        "explanation": "APPROX_COUNT_DISTINCT uses the HyperLogLog++ (HLL) algorithm to find the number of distinct elements without having to look at every single one exactly like COUNT(DISTINCT) does. This is extremely efficient for massive datasets where a small margin of error (standard 5%) is acceptable in exchange for significantly faster execution and lower memory usage.",
        "domain": "Executing Queries"
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
        "explanation": "After running a %sql query, the analyst can either call display() in Python or click the + icon in the result cell. Both actions create an inline chart directly within the notebook, preserving interactivity and allowing further manipulation without leaving the environment.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Lakehouse Federation allows Databricks to externally expose a MySQL database as a federated catalog. Query execution happens natively within Databricks; Spark pushes the join operation down to the MySQL connector, minimizing data movement and maintaining governance/lineage within Unity Catalog.",
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
        "explanation": "The standard Databricks SQL syntax for creating an external table (a table whose data is managed outside the Delta formal structure but accessible via SQL) with existing files is 'CREATE TABLE ... USING [format] LOCATION [path]'. Specifying the LOCATION clause automatically makes it an external table.",
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
        "domain": "Executing Queries"
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
        "domain": "Executing Queries"
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
        "explanation": "To create a valid line chart in a Databricks Notebook:\n\n1. **X-axis Sorting (Option A):** Line charts connect points in the order they appear in the dataset. If the X-axis (dates) is not sorted chronologically, the chart will display 'spaghetti' lines or incorrect sequences.\n\n2. **Aggregation (Option B):** If the dataset contains multiple transactions per day, displaying them without aggregation will cause 'overplotting' (multiple overlapping Y-values for one X-value). Using the visualization editor's aggregation features (like 'Sum') ensures a single, summary point per time interval.\n\n• Option C is incorrect: Auto-formatting improves visuals but does not guarantee correctness of underlying data sorting or aggregation.\n\n• Option D is incorrect: Gaps in data can mislead the viewer; they should be handled via SQL (e.g., COALESCE or filling) rather than ignored.\n\n• Option E is incorrect: A scatter plot does not show the continuous progression or trend over time that a line chart provides.",
        "domain": "Dashboards & Visualizations"
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
        "domain": "Executing Queries"
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
        "explanation": "To optimize AI/BI Genie, it is critical to provide focus and context. Including only necessary tables and columns reduces confusion for the LLM and minimizes incorrect joins or mapping. Additionally, Genie heavily relies on Unity Catalog metadata (comments and descriptions) to understand the business meaning of columns, so high-quality annotations directly correlate with higher accuracy.\n\n• Option A is incorrect: Including too much irrelevant data ('noise') significantly degrades the model's ability to select the correct tables.\n\n• Option C is incorrect: Genie uses PK/FK relationships to understand how to join tables correctly; removing them breaks its understanding of the data model.\n\n• Option D is incorrect: Generic instructions are less effective than specific, custom metadata tailored to the actual schemas and business logic of the organization.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "Databricks provides a built-in 'Create Table' UI that allows users to drag and drop small to medium-sized files (like CSVs) and automatically creates a table in Unity Catalog. This is a fully 'no-code' approach that respects security clusters and governance settings, making it the best choice for quick, manual ingestion.\n\n• Option B is incorrect: Auto Loader is a 'low-code' streaming solution designed for continuous ingestion from cloud storage, not a simple drag-and-drop UI for one-off files.\n\n• Option C is incorrect: Batch ingestion via SQL (e.g., COPY INTO) requires writing code.\n\n• Option D is incorrect: Scheduled ETL in a notebook is the most complex option, requiring both code and workflow configuration.",
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
        "explanation": "Databricks provides a dedicated 'Share' dialog for dashboards that allows for granular, resource-level access control. This is the standard and recommended way to manage who can consume (CAN VIEW) or modify (CAN EDIT/MANAGE) a dashboard without granting broader workspace permissions.\n\n• Option A is incorrect: Granting Workspace Admin roles for dashboard editing violates the principle of least privilege.\n\n• Option B is incorrect: Unity Catalog manages data access (the 'what'), but dashboard permissions manage the application layer (the 'how it's displayed').\n\n• Option D is incorrect: while 'current_user()' is useful for row-level security, it does not manage the ability to edit the dashboard layout or configuration.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "For reporting and business intelligence workloads in Databricks SQL, the **Star Schema** is the recommended design. It features a central fact table surrounded by denormalized dimension tables, which reduces the number of joins required and simplifies the query logic for end-users, leading to faster performance and easier extensibility as new dimensions are added.\n\n• Option A is incorrect: Data Vault 2.0 is excellent for data integration and historical auditing but is far more complex and generally slower for direct BI consumption.\n\n• Option C is incorrect: Third Normal Form (3NF) reduces redundancy but requires many complex joins, which typically slows down large-scale analytical queries.\n\n• Option D is incorrect: A Snowflake Schema normalizes dimensions further. While it saves some storage space, it introduces more joins and complexity compared to a Star Schema, which can negatively impact performance in cloud data warehouses.",
        "domain": "Data Modeling"
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
        "explanation": "The 'rescue' mode ensures that any data not matching the expected schema (due to type mismatch or extra columns) is stored in a special JSON column named _rescued_data. This prevents data loss and production failures. While Auto Loader enables some features by default, explicitly setting the mode to 'rescue' (often via the rescuedDataColumn configuration) is the standard way to ensure this integrity check is active.",
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
        "explanation": "The VALIDATE keyword (specifically VALIDATE ALL or a specific number of rows) allows the execution engine to scan the source files and report format or schema errors without actually writing any records to the target Delta table. This is a common pre-check for production pipelines.",
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
        "explanation": "File Notification mode (using services like AWS SQS/SNS or Azure Event Grid) is significantly more efficient than 'Directory Listing' when dealing with millions of files in long-term storage. Databricks only processes the files notified by the cloud service instead of performing an expensive recursive scan of the entire storage bucket.",
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
        "explanation": "DESCRIBE HISTORY displays all transactions and audit logs for a Delta table. For ingestion operations like COPY INTO or OPTIMIZE, it includes technical details in the 'operationMetrics' column (such as files added, rows inserted, or file paths) that help audit and troubleshoot the data load process.",
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
        "explanation": "In Unity Catalog, secure access to external storage follows a specific hierarchy: first, a 'Storage Credential' must be created to hold the IAM role or Service Principal information. Then, an 'External Location' is defined to link that credential to a specific URL/path. Without the credential, the location cannot safely connect to the cloud provider.",
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
        "explanation": "In Databricks AI/BI Dashboards (and legacy SQL Dashboards), toggling off 'Automatic Update' (or similar 'Run on change' defaults) prevents the dashboard from refreshing until the user manually triggers it. This is a critical performance optimization for complex dashboards where multiple filter changes would otherwise trigger redundant and expensive query executions.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Both Legacy and AI/BI Dashboards allow 'Link' formatting in Table columns. By selecting the 'Link' type and defining a template like 'https://tickets.company.com/id={{SalesOrder_ID}}', the ID from each row is dynamically injected into the URL, allowing for rich cross-system navigation directly from the visualization.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Schedules (and alerts) in Databricks run with a specific identity. If the 'Run as' setting is 'Owner' and that user is deactivated or deleted, the execution engine cannot find a valid identity context, and the refresh will fail. Best practice is to use persistent Service Principals for critical production schedules or ensure ownership is transferred before deactivation.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Cross-filtering allows a visualization (like a bar chart or map) to act as a filter for other visualizations. This interaction is defined in the visualization properties, making the dashboard feel 'alive' and allowing users to drill down into data by simply interacting with visual elements rather than typing in filter boxes.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Dashboards have a 'Run as' setting. If 'Run as Viewer' is selected, the viewer MUST have permissions on the Dashboard, the SQL Warehouse, and the source Data (tables/schemas). If 'Run as Owner' is selected, the viewer only needs access to the Dashboard. In AI/BI Dashboards, the default is often for viewers to interact using their own identity (Viewer), requiring broader security setup.",
        "domain": "Dashboards & Visualizations"
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
        "explanation": "Trusted Assets are a core feature of AI/BI Genie that allow analysts to provide predefined, verified SQL queries for complex or sensitive calculations. When Genie identifies a question that matches a Trusted Asset, it uses that verified logic instead of attempting to generate new SQL, ensuring 100% accuracy for critical metrics.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "Genie relies heavily on Unity Catalog metadata. By adding detailed 'Comments' and utilizing descriptive names (or semantic knowledge in Genie's 'Instructions'), the LLM gains the necessary context to distinguish between similar business terms. Metadata is the 'bridge' between natural language and SQL logic.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "While powerful, Genie is a text-to-SQL interface. For many-to-many joins, complex window functions, or specialized pivots, it requires guidance through 'Instructions', 'Sample Questions', or 'Trusted Assets'. It is designed for ad-hoc exploration, while Dashboards are for predefined, production reporting.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "In AI/BI Genie, 'Can Use' allows a user to interact with the space (ask questions, view results) without changing the underlying configuration, instructions, or data sources. This is the standard permission for 'Consumers' of the Genie Space.",
        "domain": "AI/BI Genie Spaces"
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
        "explanation": "Genie improvement is an iterative process. By reviewing user feedback (history), an analyst can identify where the LLM is failing and provide 'curated' answers through Sample Questions or Trusted Assets, effectively teaching Genie the correct business logic for those specific scenarios.",
        "domain": "AI/BI Genie Spaces"
    }
]
);
console.log("Loaded questions_databricks.js. Total questions:", window.questionsData.length);





































