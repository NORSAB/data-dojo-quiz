/**
 * 🥋 THE DATA DOJO — Databricks Certified Data Engineer Associate Unified Question Bank
 * Total Questions: 190 (95 EN + 95 ES bilingual pairs)
 * Covers the 7 official certification domains with official exam weighting:
 * - Domain 1: Databricks Intelligence Platform (6%)
 * - Domain 2: Data Ingestion and Loading (21%)
 * - Domain 3: Data Transformation and Modeling (22%)
 * - Domain 4: Working with Lakeflow Jobs (16%)
 * - Domain 5: Implementing CI/CD (10%)
 * - Domain 6: Troubleshooting, Monitoring, and Optimization (10%)
 * - Domain 7: Governance and Security (15%)
 */
(function() {
  const databricksDeaQuestions = [
  {
    "id": "db-dea-1",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ingest CSV files that have the following characteristics:\n- Files are semicolon (`;`) delimited instead of comma delimited\n- Files contain headers in the first row\n- Files may contain malformed data that should be captured for later analysis\n- You want to enforce a specific schema: `order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)`\n\nWhich `read_files()` configuration correctly handles all these requirements?",
    "options": [
      {
        "id": "a",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', sep => ';', header => true, schema => 'order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)', rescuedDataColumn => '_rescued_data');"
      },
      {
        "id": "b",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', sep => ';', header => true, schema => 'order_id:BIGINT, customer_email:STRING, order_total:DECIMAL(10,2)', rescuedDataColumn => '_rescued_data');"
      },
      {
        "id": "c",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', separator => ';', headers => true, enforceSchema => 'order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)', rescueColumn => '_rescued_data');"
      },
      {
        "id": "d",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', delimiter => ';', header => true, schema => 'order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)');"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "The `read_files()` TVF in Databricks SQL uses `sep => ';'` (or `sep`), `header => true`, `schema => 'col TYPE, ...'` (standard SQL DDL syntax without colons), and `rescuedDataColumn => '_rescued_data'` to capture malformed rows without failing the batch.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "File Ingestion & read_files"
  },
  {
    "id": "db-dea-1-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesita ingerir archivos CSV con las siguientes características:\n- Los archivos están delimitados por punto y coma (`;`) en lugar de comas\n- Contienen encabezados en la primera fila\n- Pueden contener registros malformados que deben capturarse para análisis posterior\n- Debe imponerse el esquema: `order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)`\n\n¿Qué configuración de `read_files()` satisface todos estos requerimientos?",
    "options": [
      {
        "id": "a",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', sep => ';', header => true, schema => 'order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)', rescuedDataColumn => '_rescued_data');"
      },
      {
        "id": "b",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', sep => ';', header => true, schema => 'order_id:BIGINT, customer_email:STRING, order_total:DECIMAL(10,2)', rescuedDataColumn => '_rescued_data');"
      },
      {
        "id": "c",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', separator => ';', headers => true, enforceSchema => 'order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)', rescueColumn => '_rescued_data');"
      },
      {
        "id": "d",
        "text": "SELECT * FROM read_files('/path/to/files', format => 'csv', delimiter => ';', header => true, schema => 'order_id BIGINT, customer_email STRING, order_total DECIMAL(10,2)');"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La función tabular `read_files()` en Databricks SQL emplea los parámetros nominales `sep => ';'`, `header => true`, `schema => '...'` (con sintaxis estándar de tipos SQL, sin dos puntos) y `rescuedDataColumn => '_rescued_data'` para aislar datos corruptos.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-dea-2",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which layer typically stores cleaned and filtered data ready for downstream consumption?",
    "options": [
      {
        "id": "a",
        "text": "Silver"
      },
      {
        "id": "b",
        "text": "Bronze"
      },
      {
        "id": "c",
        "text": "Data Lake"
      },
      {
        "id": "d",
        "text": "Gold"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "In the Medallion Architecture, the Silver layer represents the curated, validated, cleaned, and enriched enterprise view of data, ready for analysts and downstream pipelines.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Architecture & Medallion Design"
  },
  {
    "id": "db-dea-2-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué capa de la arquitectura almacena habitualmente datos limpios, filtrados y listos para consumo downstream?",
    "options": [
      {
        "id": "a",
        "text": "Silver"
      },
      {
        "id": "b",
        "text": "Bronze"
      },
      {
        "id": "c",
        "text": "Data Lake"
      },
      {
        "id": "d",
        "text": "Gold"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En la arquitectura Medallion, la capa Silver alberga los datos limpios, deduplicados, enriquecidos y estructurados que sirven como base confiable para transformaciones posteriores y analítica.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-dea-3",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You ingest a dataset into Databricks where one column contains JSON formatted data stored as a string. You want flexibility to query nested fields, support schema evolution, and maintain good query performance as usage grows. What is the best approach?",
    "options": [
      {
        "id": "a",
        "text": "Leave the column as a plain STRING and parse JSON manually in each query"
      },
      {
        "id": "b",
        "text": "Convert the column to a fixed STRUCT with all expected fields defined upfront"
      },
      {
        "id": "c",
        "text": "Store the column using the VARIANT data type and query nested fields as needed"
      },
      {
        "id": "d",
        "text": "Split the JSON into multiple STRING columns during ingestion"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "The `VARIANT` data type in Databricks provides high-performance binary encoding for semi-structured data (JSON) with automatic shredding and sub-column pushdown, avoiding rigid upfront schemas while outperforming string parsing.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Schema Evolution & Rescued Data"
  },
  {
    "id": "db-dea-3-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ingiere un conjunto de datos en Databricks donde una columna contiene datos JSON almacenados como cadena. Desea flexibilidad para consultar campos anidados, soportar evolución de esquema y mantener alto rendimiento conforme crece el volumen. ¿Cuál es el mejor enfoque?",
    "options": [
      {
        "id": "a",
        "text": "Dejar la columna como STRING simple y parsear el JSON manualmente en cada consulta"
      },
      {
        "id": "b",
        "text": "Convertir la columna a un STRUCT fijo con todos los campos definidos de antemano"
      },
      {
        "id": "c",
        "text": "Almacenar la columna usando el tipo de datos VARIANT y consultar campos anidados según se requiera"
      },
      {
        "id": "d",
        "text": "Dividir el JSON en múltiples columnas STRING individuales durante la ingesta"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El tipo de datos `VARIANT` codifica internamente JSON en un formato binario optimizado con 'shredding' y 'sub-column pushdown', permitiendo consultar campos con sintaxis de dos puntos (`:`) sin fijar esquemas rígidos ni sufrir la lentitud de parsear texto plano.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Evolución de Esquema y Datos Rescatados"
  },
  {
    "id": "db-dea-4",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the recommended alternative to the legacy COPY INTO SQL command for incremental ingestion (Auto Loader) from cloud object storage?",
    "options": [
      {
        "id": "a",
        "text": "Lakeflow Jobs"
      },
      {
        "id": "b",
        "text": "MERGE INTO statements"
      },
      {
        "id": "c",
        "text": "CREATE STREAMING TABLE SQL"
      },
      {
        "id": "d",
        "text": "CREATE TABLE AS (CTAS)"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "`CREATE STREAMING TABLE ... AS SELECT * FROM STREAM read_files(...)` is the modern SQL-native declarative alternative to `COPY INTO`, integrating Auto Loader incrementally with checkpointing, schema evolution, and managed state.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Auto Loader & Streaming Tables"
  },
  {
    "id": "db-dea-4-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la alternativa recomendada frente al comando heredado COPY INTO para ingesta incremental (Auto Loader) desde almacenamiento de objetos en la nube?",
    "options": [
      {
        "id": "a",
        "text": "Lakeflow Jobs"
      },
      {
        "id": "b",
        "text": "Sentencias MERGE INTO"
      },
      {
        "id": "c",
        "text": "CREATE STREAMING TABLE en SQL"
      },
      {
        "id": "d",
        "text": "CREATE TABLE AS (CTAS)"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La sentencia declarativa `CREATE STREAMING TABLE` combinada con `STREAM read_files()` reemplaza al legado `COPY INTO`, habilitando Auto Loader de forma nativa en SQL con gestión automática de estado y puntos de control.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Auto Loader y Tablas Streaming"
  },
  {
    "id": "db-dea-5",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How is Partner Connect commonly used when ingesting data into Databricks?",
    "options": [
      {
        "id": "a",
        "text": "To write custom Spark code for every external data source"
      },
      {
        "id": "b",
        "text": "To configure and launch partner ingestion tools that load data from external systems into Databricks"
      },
      {
        "id": "c",
        "text": "To replace built-in Databricks storage formats with proprietary partner formats"
      },
      {
        "id": "d",
        "text": "To bypass Unity Catalog security rules when connecting to external systems"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Partner Connect simplifies setting up validated third-party data integration tools (e.g. Fivetran, Qlik, Informatica) directly from within the Databricks workspace UI with automated connection credentials.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-dea-5-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se utiliza habitualmente Partner Connect al ingerir datos en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Para escribir código Spark personalizado para cada fuente externa"
      },
      {
        "id": "b",
        "text": "Para configurar y lanzar herramientas de integración de socios comerciales que cargan datos desde sistemas externos hacia Databricks"
      },
      {
        "id": "c",
        "text": "Para reemplazar formatos abiertos de Databricks por formatos propietarios del socio"
      },
      {
        "id": "d",
        "text": "Para omitir las políticas de seguridad de Unity Catalog al conectarse a sistemas externos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Partner Connect ofrece integraciones guiadas con un clic hacia herramientas ETL/ELT certificadas del ecosistema de socios (Fivetran, dbt, etc.), aprovisionando credenciales y conexiones seguras automáticamente.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-dea-6",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What type of table does the CREATE TABLE AS (CTAS) statement create by default?",
    "options": [
      {
        "id": "a",
        "text": "Hive table"
      },
      {
        "id": "b",
        "text": "Parquet table"
      },
      {
        "id": "c",
        "text": "Delta table"
      },
      {
        "id": "d",
        "text": "CSV table"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "In Databricks Runtime and Databricks SQL, all tables created with `CREATE TABLE AS SELECT` (CTAS) default to the open-standard Delta Lake table format.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "File Ingestion & read_files"
  },
  {
    "id": "db-dea-6-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de tabla crea de manera predeterminada la sentencia CREATE TABLE AS (CTAS) en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Tabla Hive"
      },
      {
        "id": "b",
        "text": "Tabla Parquet pura"
      },
      {
        "id": "c",
        "text": "Tabla Delta"
      },
      {
        "id": "d",
        "text": "Tabla CSV"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En Databricks SQL y Databricks Runtime, el formato de almacenamiento predeterminado para toda nueva tabla creada mediante CTAS es Delta Lake.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-dea-7",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the recommended destination for synchronizing ingested data pipelines in Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Unity Catalog (catalog and schema)"
      },
      {
        "id": "b",
        "text": "DBFS root storage"
      },
      {
        "id": "c",
        "text": "Local disk storage on the driver node"
      },
      {
        "id": "d",
        "text": "Unmanaged raw object storage without catalog registration"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog provides unified governance, data lineage, fine-grained access control, and discovery, making a three-level namespace catalog.schema.table the best practice destination for all ingested data.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Architecture & Medallion Design"
  },
  {
    "id": "db-dea-7-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el destino recomendado para sincronizar canalizaciones de datos ingeridos en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Unity Catalog (catálogo y esquema)"
      },
      {
        "id": "b",
        "text": "Almacenamiento raíz DBFS"
      },
      {
        "id": "c",
        "text": "Disco local del nodo driver"
      },
      {
        "id": "d",
        "text": "Almacenamiento de objetos no administrado sin registro en catálogo"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog (mediante el espacio de nombres de 3 niveles `catalog.schema.table`) es el repositorio oficial recomendado para la gobernanza unificada, control de accesos y trazabilidad de todos los activos ingeridos.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-dea-8",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the primary focus of the data stored in the Gold layer?",
    "options": [
      {
        "id": "a",
        "text": "Source system duplicates"
      },
      {
        "id": "b",
        "text": "Business level aggregations"
      },
      {
        "id": "c",
        "text": "Incremental updates"
      },
      {
        "id": "d",
        "text": "Unstructured raw files"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The Gold layer contains project-specific, business-level aggregates, dimensional models (star/snowflake schemas), and high-performance tables tailored for executive reporting, dashboards, and ML features.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Architecture & Medallion Design"
  },
  {
    "id": "db-dea-8-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito primordial de los datos almacenados en la capa Gold?",
    "options": [
      {
        "id": "a",
        "text": "Almacenar duplicados exactos del sistema origen"
      },
      {
        "id": "b",
        "text": "Agregaciones y métricas a nivel de negocio"
      },
      {
        "id": "c",
        "text": "Registros de actualización incremental sin procesar"
      },
      {
        "id": "d",
        "text": "Archivos sin procesar no estructurados"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La capa Gold organiza los datos en modelos dimensionales y tablas agregadas listas para el negocio, optimizadas para alimentar directamente reportes ejecutivos, dashboards y modelos de machine learning.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-dea-9",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following is a key benefit of using Lakeflow Connect for data ingestion in Databricks?",
    "options": [
      {
        "id": "a",
        "text": "It requires manual schema mapping for every table"
      },
      {
        "id": "b",
        "text": "It only supports streaming data"
      },
      {
        "id": "c",
        "text": "It does not support cloud object storage"
      },
      {
        "id": "d",
        "text": "It provides scalable and simplified data ingestion across databases, applications, and files"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Databricks Lakeflow Connect unifies ingestion by providing native, serverless connectors for enterprise databases (Postgres, MySQL, Oracle, SQL Server), SaaS applications (Salesforce, Workday), and cloud files with built-in governance.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-dea-9-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes es un beneficio clave de utilizar Lakeflow Connect para la ingesta de datos en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Exige mapear manualmente los esquemas para cada tabla individual"
      },
      {
        "id": "b",
        "text": "Solo admite datos en streaming continuo"
      },
      {
        "id": "c",
        "text": "Carece de soporte para almacenamiento de objetos en la nube"
      },
      {
        "id": "d",
        "text": "Proporciona ingesta de datos escalable y simplificada a través de bases de datos, aplicaciones SaaS y archivos"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Lakeflow Connect simplifica y acelera la ingesta enterprise al suministrar conectores gestionados nativos y gobernados para bases de datos relacionales, aplicaciones SaaS y almacenamiento en la nube.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-dea-10",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Lakeflow Connect Managed Connectors are defined as being fully managed by whom?",
    "options": [
      {
        "id": "a",
        "text": "Partner Connect"
      },
      {
        "id": "b",
        "text": "Data Source Owner"
      },
      {
        "id": "c",
        "text": "Cloud Provider"
      },
      {
        "id": "d",
        "text": "Databricks"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Managed Connectors in Lakeflow Connect are built, operated, and maintained by Databricks, providing serverless, scalable ingestion without requiring user-provisioned clusters or third-party VMs.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-dea-10-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por quién son completamente administrados los Conectores Gestionados (Managed Connectors) de Lakeflow Connect?",
    "options": [
      {
        "id": "a",
        "text": "Partner Connect"
      },
      {
        "id": "b",
        "text": "El propietario de la fuente de datos"
      },
      {
        "id": "c",
        "text": "El proveedor de infraestructura cloud (AWS/Azure/GCP)"
      },
      {
        "id": "d",
        "text": "Databricks"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Los conectores gestionados de Lakeflow Connect son operados y mantenidos directamente por Databricks en su infraestructura Serverless, eliminando la necesidad de gestionar clusters de ingesta o VMs dedicadas.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-dea-11",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "For incremental batch ingestion, COPY INTO achieves efficiency by automatically performing what action?",
    "options": [
      {
        "id": "a",
        "text": "Skipping previously loaded files"
      },
      {
        "id": "b",
        "text": "Compacting small files"
      },
      {
        "id": "c",
        "text": "Deleting source files"
      },
      {
        "id": "d",
        "text": "Merging schemas manually"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "`COPY INTO` tracks file metadata in Delta table transaction logs and skips already-processed files, ensuring idempotent and efficient incremental loading.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Auto Loader & Streaming Tables"
  },
  {
    "id": "db-dea-11-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En la ingesta batch incremental, ¿cómo logra COPY INTO su eficiencia de procesamiento de forma automática?",
    "options": [
      {
        "id": "a",
        "text": "Omitiendo los archivos que ya fueron cargados previamente"
      },
      {
        "id": "b",
        "text": "Compactando archivos pequeños en el almacenamiento origen"
      },
      {
        "id": "c",
        "text": "Eliminando los archivos fuente tras cada lectura"
      },
      {
        "id": "d",
        "text": "Fusionando esquemas de manera manual en cada ejecución"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El comando `COPY INTO` mantiene un registro de los metadatos de los archivos ya procesados en el historial de Delta Lake, ignorando los archivos existentes y procesando solo los nuevos.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Auto Loader y Tablas Streaming"
  },
  {
    "id": "db-dea-12",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which ingestion method re-processes all records every time the pipeline runs?",
    "options": [
      {
        "id": "a",
        "text": "Streaming"
      },
      {
        "id": "b",
        "text": "Declarative"
      },
      {
        "id": "c",
        "text": "Batch"
      },
      {
        "id": "d",
        "text": "Incremental Batch"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Standard batch ingestion processes the entire dataset from scratch on each run (e.g. `INSERT OVERWRITE` or simple CTAS), unlike incremental batch or streaming methods that process only deltas.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Architecture & Medallion Design"
  },
  {
    "id": "db-dea-12-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué método de ingesta vuelve a procesar todos los registros cada vez que se ejecuta el pipeline?",
    "options": [
      {
        "id": "a",
        "text": "Streaming"
      },
      {
        "id": "b",
        "text": "Declarativo"
      },
      {
        "id": "c",
        "text": "Batch tradicional (por lotes completo)"
      },
      {
        "id": "d",
        "text": "Batch incremental"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El procesamiento por lotes tradicional (full batch) lee y procesa todos los registros del conjunto de datos en cada corrida, a diferencia de los métodos incrementales que identifican solo las novedades.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-dea-13",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing an ingestion pipeline using Lakeflow Connect in Databricks:\n- Some of your data already exists as files in cloud object storage that Databricks can directly access.\n- Other data lives in an external system, such as a transactional database or SaaS application, and has not yet been landed in cloud storage.\n\nWhich choice correctly matches each scenario to the connector type you should use?",
    "options": [
      {
        "id": "a",
        "text": "Use standard connectors for both data in cloud storage and external systems"
      },
      {
        "id": "b",
        "text": "Use standard connectors for data already in cloud storage, and managed connectors for data in external systems"
      },
      {
        "id": "c",
        "text": "Use managed connectors for both data in cloud storage and external systems"
      },
      {
        "id": "d",
        "text": "Use managed connectors for data already in cloud storage, and standard connectors for data in external systems"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Data already in cloud storage is ingested using Standard Connectors (Auto Loader, `read_files()`), while external transactional databases and SaaS applications require Lakeflow Connect Managed Connectors with gateway/read pipelines.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-dea-13-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está diseñando un pipeline de ingesta utilizando Lakeflow Connect en Databricks:\n- Parte de sus datos ya reside en archivos en almacenamiento cloud accesible directamente por Databricks.\n- Otros datos viven en sistemas externos (bases de datos transaccionales o aplicaciones SaaS) y no han sido volcados aún a la nube.\n\n¿Qué opción empareja correctamente cada escenario con el tipo de conector adecuado?",
    "options": [
      {
        "id": "a",
        "text": "Usar conectores estándar tanto para datos en almacenamiento cloud como para sistemas externos"
      },
      {
        "id": "b",
        "text": "Usar conectores estándar para datos que ya están en almacenamiento cloud, y conectores gestionados para sistemas externos"
      },
      {
        "id": "c",
        "text": "Usar conectores gestionados tanto para datos en almacenamiento cloud como para sistemas externos"
      },
      {
        "id": "d",
        "text": "Usar conectores gestionados para datos en la nube, y conectores estándar para sistemas externos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Para archivos ya depositados en buckets/blobs cloud se emplean conectores estándar (Auto Loader, `read_files`), mientras que para extraer datos de bases de datos relacionales externas o SaaS se utilizan los Conectores Gestionados de Lakeflow Connect.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-dea-14",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "CREATE TABLE AS (CTAS) is summarized as being best suited for what kind of ingestion task?",
    "options": [
      {
        "id": "a",
        "text": "Scaling to millions of continuously arriving files"
      },
      {
        "id": "b",
        "text": "Complex Change Data Capture pipelines"
      },
      {
        "id": "c",
        "text": "One-time, ad hoc ingestion"
      },
      {
        "id": "d",
        "text": "Near real-time streaming ingestion"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "`CREATE TABLE AS SELECT` (CTAS) is ideal for quick, ad-hoc, one-time loads and exploratory table creations. It is not designed for continuous or incremental production file feeds.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "File Ingestion & read_files"
  },
  {
    "id": "db-dea-14-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Para qué tipo de tarea de ingesta se considera que CREATE TABLE AS (CTAS) es el método más adecuado?",
    "options": [
      {
        "id": "a",
        "text": "Escalar a millones de archivos que llegan continuamente"
      },
      {
        "id": "b",
        "text": "Pipelines complejos de Change Data Capture (CDC)"
      },
      {
        "id": "c",
        "text": "Ingesta puntual o ad-hoc de una sola vez"
      },
      {
        "id": "d",
        "text": "Ingesta en streaming cercano a tiempo real"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "CTAS es la herramienta idónea para cargas rápidas, exploratorias o de una sola vez (ad-hoc), pero carece del seguimiento de estado y gestión de puntos de control que exigen los pipelines de producción recurrentes.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-dea-15",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the purpose of the rescued data column when ingesting data into Databricks?",
    "options": [
      {
        "id": "a",
        "text": "To handle records that don’t match the schema of the target table"
      },
      {
        "id": "b",
        "text": "To store duplicate records filtered by primary key checks"
      },
      {
        "id": "c",
        "text": "To log ingestion audit metrics such as cluster uptime"
      },
      {
        "id": "d",
        "text": "To store metadata about ingestion job schedules"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "The rescued data column (`_rescued_data`) prevents data loss by capturing malformed data, schema mismatches, type mismatch values, or unparsed extra columns instead of failing the job or dropping data.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Schema Evolution & Rescued Data"
  },
  {
    "id": "db-dea-15-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito de la columna de datos rescatados (rescued data column) al ingerir datos en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Manejar y preservar registros que no coinciden con el esquema de la tabla de destino"
      },
      {
        "id": "b",
        "text": "Almacenar registros duplicados descartados por validaciones de clave primaria"
      },
      {
        "id": "c",
        "text": "Registrar métricas de auditoría como el tiempo de actividad del cluster"
      },
      {
        "id": "d",
        "text": "Guardar metadatos sobre la programación temporal del trabajo de ingesta"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La columna de datos rescatados (`_rescued_data`) captura cualquier fila o campo con discordancia de tipos, datos corruptos o columnas adicionales no contempladas, evitando que la canalización falle o descarte información.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Evolución de Esquema y Datos Rescatados"
  },
  {
    "id": "db-dea-16",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are using MERGE INTO in Databricks SQL to upsert data from a source table into a Delta target table. The source table may occasionally include new columns that do not yet exist in the target table. You want the merge operation to handle these changes automatically.\nWhich statement best accomplishes this?",
    "options": [
      {
        "id": "a",
        "text": "MERGE WITH SCHEMA EVOLUTION INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *;"
      },
      {
        "id": "b",
        "text": "MERGE INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET t.col1 = s.col1;"
      },
      {
        "id": "c",
        "text": "MERGE INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *;"
      },
      {
        "id": "d",
        "text": "ALTER TABLE target ADD COLUMNS (...); MERGE INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *;"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "`MERGE WITH SCHEMA EVOLUTION INTO target ...` enables automatic schema evolution during merge operations in Databricks SQL, seamlessly adding newly introduced source columns into the target Delta table.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Upsert & CDC (MERGE INTO)"
  },
  {
    "id": "db-dea-16-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está utilizando MERGE INTO en Databricks SQL para realizar operaciones upsert desde una tabla fuente hacia una tabla Delta destino. La tabla fuente puede incluir ocasionalmente nuevas columnas que aún no existen en el destino. Desea que la operación gestione estas adiciones automáticamente.\n¿Qué sentencia logra esto de la mejor forma?",
    "options": [
      {
        "id": "a",
        "text": "MERGE WITH SCHEMA EVOLUTION INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *;"
      },
      {
        "id": "b",
        "text": "MERGE INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET t.col1 = s.col1;"
      },
      {
        "id": "c",
        "text": "MERGE INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *;"
      },
      {
        "id": "d",
        "text": "ALTER TABLE target ADD COLUMNS (...); MERGE INTO target t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *;"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La cláusula `MERGE WITH SCHEMA EVOLUTION INTO ...` instruye a Delta Lake a incorporar automáticamente las columnas recién descubiertas en el esquema de la tabla de destino durante la ejecución del merge.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Upsert y CDC (MERGE INTO)"
  },
  {
    "id": "db-dea-17",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In the Medallion Architecture, the Bronze layer is specifically intended for what?",
    "options": [
      {
        "id": "a",
        "text": "Cleaned and filtered data"
      },
      {
        "id": "b",
        "text": "BI report generation"
      },
      {
        "id": "c",
        "text": "Business aggregation"
      },
      {
        "id": "d",
        "text": "Raw data ingestion"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "The Bronze layer acts as the raw historical landing zone where source data is ingested as-is (often appended with ingestion timestamps and source file metadata) without destructive changes.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Architecture & Medallion Design"
  },
  {
    "id": "db-dea-17-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En la arquitectura Medallion, ¿para qué está destinada específicamente la capa Bronze?",
    "options": [
      {
        "id": "a",
        "text": "Datos limpios y filtrados listos para analistas"
      },
      {
        "id": "b",
        "text": "Generación directa de reportes de Business Intelligence"
      },
      {
        "id": "c",
        "text": "Agregación y cálculo de indicadores de negocio"
      },
      {
        "id": "d",
        "text": "Ingesta y persistencia de datos crudos (raw data)"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "La capa Bronze preserva el estado crudo, fiel e inalterado de los datos entrantes provenientes de las fuentes originales, sirviendo como historial completo de auditoría y reprocesamiento.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-dea-18",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Auto Loader automatically supports which capability as new columns appear in the data?",
    "options": [
      {
        "id": "a",
        "text": "Data lineage tracking"
      },
      {
        "id": "b",
        "text": "Table compression"
      },
      {
        "id": "c",
        "text": "Time travel"
      },
      {
        "id": "d",
        "text": "Schema evolution"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Auto Loader provides built-in schema inference and schema evolution modes (addNewColumns, rescue, failOnNewColumns), automatically adapting target Delta tables as new columns are introduced in input files.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Auto Loader & Streaming Tables"
  },
  {
    "id": "db-dea-18-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué capacidad admite automáticamente Auto Loader a medida que surgen nuevas columnas en los datos entrantes?",
    "options": [
      {
        "id": "a",
        "text": "Rastreo de linaje de datos en Unity Catalog"
      },
      {
        "id": "b",
        "text": "Compresión de tablas a nivel de partición"
      },
      {
        "id": "c",
        "text": "Viaje en el tiempo (Time Travel) en archivos crudos"
      },
      {
        "id": "d",
        "text": "Evolución de esquema (Schema Evolution)"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Auto Loader detecta e infiere variaciones de esquema automáticamente, permitiendo añadir nuevas columnas a la tabla de destino (`addNewColumns`) sin intervención humana ni detención del flujo.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Auto Loader y Tablas Streaming"
  },
  {
    "id": "db-dea-19",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When ingesting data into a Bronze table using the `_metadata` column, which of the following metadata information can be extracted from input files?",
    "options": [
      {
        "id": "a",
        "text": "File size and file permissions only"
      },
      {
        "id": "b",
        "text": "Only the file creation timestamp"
      },
      {
        "id": "c",
        "text": "File content and data schema information"
      },
      {
        "id": "d",
        "text": "File name, file modification time, and file path"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "The hidden `_metadata` column provides fields including `_metadata.file_name`, `_metadata.file_path`, `_metadata.file_size`, and `_metadata.file_modification_time`, allowing full file-level provenance tracking in Bronze tables.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "File Ingestion & read_files"
  },
  {
    "id": "db-dea-19-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al ingerir datos en una tabla Bronze empleando la columna `_metadata`, ¿cuál de las siguientes informaciones de metadatos puede extraerse de los archivos de entrada?",
    "options": [
      {
        "id": "a",
        "text": "Únicamente el tamaño y los permisos de acceso del archivo"
      },
      {
        "id": "b",
        "text": "Exclusivamente la marca de tiempo de creación del archivo"
      },
      {
        "id": "c",
        "text": "El contenido del archivo y la información del esquema"
      },
      {
        "id": "d",
        "text": "Nombre del archivo, marca de tiempo de modificación y ruta del archivo"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "La columna oculta `_metadata` expone atributos del archivo de origen como `file_name`, `file_modification_time`, `file_size` y `file_path`, facilitando el linaje y auditoría de la ingesta en la capa Bronze.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-dea-20",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the purpose of the Ingestion Gateway component in the Database ingestion flow?",
    "options": [
      {
        "id": "a",
        "text": "Storing final Streaming Tables in the Gold layer"
      },
      {
        "id": "b",
        "text": "Running business intelligence reports"
      },
      {
        "id": "c",
        "text": "Connecting to the source database"
      },
      {
        "id": "d",
        "text": "Managing workspace user permissions"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "In Lakeflow Connect database ingestion, the Ingestion Gateway connects securely to the operational source database (via private connectivity/VPN/direct connect), reads change data, and stages it for ingestion pipelines.",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-dea-20-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito del componente Ingestion Gateway en el flujo de ingesta de bases de datos de Lakeflow Connect?",
    "options": [
      {
        "id": "a",
        "text": "Almacenar las Tablas Streaming definitivas en la capa Gold"
      },
      {
        "id": "b",
        "text": "Ejecutar consultas y reportes de Business Intelligence"
      },
      {
        "id": "c",
        "text": "Establecer la conexión segura con la base de datos de origen"
      },
      {
        "id": "d",
        "text": "Administrar los permisos de usuarios del espacio de trabajo"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El Ingestion Gateway actúa como el puente de conexión y extracción hacia la base de datos operacional de origen, gestionando la conectividad de red y la lectura de transacciones hacia Databricks.",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-dea-21",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "File Arrival Triggers are ideal for automating jobs characterized by what type of data ingestion pattern?",
    "options": [
      {
        "id": "a",
        "text": "Unpredictable or irregular data ingestion"
      },
      {
        "id": "b",
        "text": "Highly predictable, daily batches"
      },
      {
        "id": "c",
        "text": "Manual data uploads only"
      },
      {
        "id": "d",
        "text": "Consistent, hourly scheduling"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "File Arrival Triggers monitor an external cloud storage volume or location and trigger job execution immediately upon detecting new files, making them ideal for unpredictable, event-driven ingestion.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Execution Modes & Triggers"
  },
  {
    "id": "db-dea-21-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Para qué tipo de patrón de ingesta de datos son ideales los disparadores por llegada de archivos (File Arrival Triggers)?",
    "options": [
      {
        "id": "a",
        "text": "Ingesta de datos impredecible o irregular"
      },
      {
        "id": "b",
        "text": "Lotes diarios altamente predecibles"
      },
      {
        "id": "c",
        "text": "Cargas manuales de datos exclusivamente"
      },
      {
        "id": "d",
        "text": "Programación horaria consistente"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los disparadores por llegada de archivos (File Arrival Triggers) monitorean un volumen o ruta cloud y disparan el Job tan pronto se detectan nuevos archivos, resultando ideales para cargas orientadas a eventos e irregulares.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Modos de Ejecución y Disparadores"
  },
  {
    "id": "db-dea-22",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are running a business-critical Lakeflow Job on Databricks using serverless compute. The job must:\n- Start as quickly as possible\n- Minimize overall execution time\n- Can tolerate higher cost if it improves reliability and performance\n\nWhat is the best action to take?",
    "options": [
      {
        "id": "a",
        "text": "Schedule the job to run less frequently"
      },
      {
        "id": "b",
        "text": "Disable autoscaling to reduce overhead"
      },
      {
        "id": "c",
        "text": "Switch to an interactive cluster so the compute is always running"
      },
      {
        "id": "d",
        "text": "Enable Performance Optimized mode for the serverless job"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "The Performance Optimized compute mode for serverless jobs prioritizes rapid startup and Photon acceleration to meet aggressive SLA requirements for mission-critical production workloads.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Compute & Cost Optimization"
  },
  {
    "id": "db-dea-22-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ejecuta un Lakeflow Job crítico para el negocio en Databricks con cómputo serverless. El trabajo debe:\n- Iniciar lo más rápido posible\n- Minimizar el tiempo total de ejecución\n- Tolerar un costo mayor si mejora el rendimiento y la confiabilidad\n\n¿Cuál es la mejor acción a realizar?",
    "options": [
      {
        "id": "a",
        "text": "Programar el trabajo para que se ejecute con menor frecuencia"
      },
      {
        "id": "b",
        "text": "Desactivar el escalado automático para reducir sobrecarga"
      },
      {
        "id": "c",
        "text": "Cambiar a un cluster interactivo para que el cómputo esté siempre encendido"
      },
      {
        "id": "d",
        "text": "Habilitar el modo Optimizado para Rendimiento (Performance Optimized) en el trabajo serverless"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "El modo Performance Optimized en cómputo Serverless prioriza la velocidad de inicio casi instantánea y la asignación prioritaria de recursos Photon para cumplir con los SLAs más exigentes.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Cómputo y Optimización de Costos"
  },
  {
    "id": "db-dea-23",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Notifications in Lakeflow Jobs can be triggered in which scenarios?",
    "options": [
      {
        "id": "a",
        "text": "Only when the Spark UI detects an error"
      },
      {
        "id": "b",
        "text": "Only upon job failure"
      },
      {
        "id": "c",
        "text": "When the task begins, completes, or fails"
      },
      {
        "id": "d",
        "text": "Only upon manual intervention"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Databricks Lakeflow Jobs supports notifications (email or webhooks to Slack, Teams, PagerDuty) configured for multiple lifecycle events: on start (begins), on success (completes), on failure, and when exceeding duration thresholds.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Monitoring, Notifications & Repair Runs"
  },
  {
    "id": "db-dea-23-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿En cuáles escenarios pueden dispararse las notificaciones en Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "Únicamente cuando la interfaz Spark UI detecta un error"
      },
      {
        "id": "b",
        "text": "Exclusivamente ante el fallo de un trabajo"
      },
      {
        "id": "c",
        "text": "Cuando la tarea comienza, se completa con éxito o falla"
      },
      {
        "id": "d",
        "text": "Solo tras una intervención manual del operador"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs permite notificaciones granulares tanto por correo electrónico como por destinos de webhook ante el inicio (on start), finalización exitosa (on success) o fallo (on failure) de tareas y trabajos.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Monitoreo, Notificaciones y Reparación"
  },
  {
    "id": "db-dea-24",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main purpose of Lakeflow Jobs in Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Managing workspace users and permissions"
      },
      {
        "id": "b",
        "text": "Building interactive dashboards and visualizations"
      },
      {
        "id": "c",
        "text": "Orchestrating and automating end-to-end data, analytics, and AI workflows"
      },
      {
        "id": "d",
        "text": "Writing custom machine learning algorithms from scratch"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs is Databricks' fully managed orchestration service for defining, scheduling, monitoring, and automating complex Directed Acyclic Graphs (DAGs) of data, analytics, and machine learning tasks.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-dea-24-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de Lakeflow Jobs en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Gestionar usuarios y permisos del espacio de trabajo"
      },
      {
        "id": "b",
        "text": "Construir paneles interactivos y visualizaciones"
      },
      {
        "id": "c",
        "text": "Orquestar y automatizar flujos de trabajo integrales de datos, analítica e IA"
      },
      {
        "id": "d",
        "text": "Escribir algoritmos de aprendizaje automático personalizados desde cero"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs es el servicio de orquestación nativo de Databricks para construir, calendarizar y monitorear DAGs de tareas que abarcan notebooks, pipelines, consultas SQL, scripts Python y modelos de IA.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Orquestación y Arquitectura de Workflows"
  },
  {
    "id": "db-dea-25",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When initiating a repair run for a specific failed task, which other tasks are automatically selected for rerun?",
    "options": [
      {
        "id": "a",
        "text": "Only the failed task itself"
      },
      {
        "id": "b",
        "text": "The failed task and all its dependent downstream tasks"
      },
      {
        "id": "c",
        "text": "All tasks in the job DAG"
      },
      {
        "id": "d",
        "text": "All upstream parent tasks"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks repair runs save significant time and compute by reusing successful upstream task outputs, re-executing only the failed task and any downstream tasks that depend on it.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Monitoring, Notifications & Repair Runs"
  },
  {
    "id": "db-dea-25-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al iniciar una ejecución de reparación (Repair Run) para una tarea que falló, ¿qué otras tareas se seleccionan automáticamente para reejecutarse?",
    "options": [
      {
        "id": "a",
        "text": "Únicamente la tarea que falló por sí sola"
      },
      {
        "id": "b",
        "text": "La tarea fallida y todas sus tareas dependientes aguas abajo (downstream)"
      },
      {
        "id": "c",
        "text": "Todas las tareas del DAG del trabajo sin excepción"
      },
      {
        "id": "d",
        "text": "Todas las tareas ascendentes o padres (upstream)"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La función Repair Run conserva los resultados de las tareas previas exitosas y vuelve a correr únicamente el nodo fallido y su árbol descendiente (downstream), optimizando tiempo y costos.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Monitoreo, Notificaciones y Reparación"
  },
  {
    "id": "db-dea-26",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How does the dynamic nature of the If/Else task enhance job pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Simplifies data governance setup"
      },
      {
        "id": "b",
        "text": "Makes the workflow adaptable and responsive to actual results"
      },
      {
        "id": "c",
        "text": "Reduces the overhead of managing task parameters"
      },
      {
        "id": "d",
        "text": "Eliminates the need for testing pipeline code"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "If/Else conditional tasks evaluate boolean conditions or task output values at runtime, dynamically branching the workflow based on data quality results, row counts, or execution flags.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-dea-26-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo mejora la naturaleza dinámica de la tarea If/Else a los pipelines de jobs?",
    "options": [
      {
        "id": "a",
        "text": "Simplifica la configuración de gobernanza de datos"
      },
      {
        "id": "b",
        "text": "Hace que el flujo de trabajo sea adaptable y responda a los resultados reales en tiempo de ejecución"
      },
      {
        "id": "c",
        "text": "Reduce la sobrecarga de administración de parámetros del trabajo"
      },
      {
        "id": "d",
        "text": "Elimina por completo la necesidad de probar el código del pipeline"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las tareas condicionales If/Else evalúan expresiones lógicas en caliente, permitiendo bifurcar la ejecución (por ejemplo, alertar si no hay filas o continuar con el pipeline si se superan validaciones).",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-dea-27",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a Lakeflow Job with the following workflow:\n- A data ingestion task runs first\n- Two validation tasks run in parallel after ingestion\n- A publish task should run only if both validation tasks succeed\n\nHow should the publish task be configured?",
    "options": [
      {
        "id": "a",
        "text": "Set Run if condition to 'At least one succeeded'"
      },
      {
        "id": "b",
        "text": "Set Run if condition to 'All succeeded' with dependencies on both validation tasks"
      },
      {
        "id": "c",
        "text": "Configure the validation tasks to run sequentially"
      },
      {
        "id": "d",
        "text": "Create two separate publish tasks, one for each validation task"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Setting the publish task's dependencies to include both validation tasks and selecting the Run if condition 'All succeeded' ensures that downstream publishing only occurs when both parallel validations pass.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-dea-27-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está diseñando un Lakeflow Job con el siguiente flujo de trabajo:\n- Primero se ejecuta una tarea de ingesta de datos\n- Luego de la ingesta se ejecutan dos tareas de validación en paralelo\n- Una tarea de publicación debe ejecutarse únicamente si ambas validaciones terminan con éxito\n\n¿Cómo debe configurarse la tarea de publicación?",
    "options": [
      {
        "id": "a",
        "text": "Configurar la condición Run if en 'At least one succeeded' (Al menos una tuvo éxito)"
      },
      {
        "id": "b",
        "text": "Configurar la condición Run if en 'All succeeded' (Todas tuvieron éxito) dependiendo de ambas tareas de validación"
      },
      {
        "id": "c",
        "text": "Configurar las tareas de validación para que se ejecuten secuencialmente de forma obligatoria"
      },
      {
        "id": "d",
        "text": "Crear dos tareas de publicación independientes, una para cada validación"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al definir dependencias sobre las dos tareas de validación paralelas y fijar la condición de disparo 'All succeeded', la tarea de publicación espera a que ambas finalicen satisfactoriamente antes de arrancar.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-dea-28",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When using dashboard tasks in Lakeflow Jobs, what is required for the dashboard to function properly?",
    "options": [
      {
        "id": "a",
        "text": "The dashboard must be created using Python notebooks only"
      },
      {
        "id": "b",
        "text": "The dashboard must be private to the job creator"
      },
      {
        "id": "c",
        "text": "The dashboard must be published and connected to a running SQL warehouse"
      },
      {
        "id": "d",
        "text": "The dashboard must use single-node classic compute"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs dashboard tasks trigger refreshes of published Databricks AI/BI dashboards, which require the dashboard to be published and associated with an accessible SQL Warehouse.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-dea-28-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al utilizar tareas de tipo Dashboard en Lakeflow Jobs, ¿qué se requiere para que el dashboard funcione adecuadamente?",
    "options": [
      {
        "id": "a",
        "text": "El dashboard debe haber sido creado exclusivamente con notebooks de Python"
      },
      {
        "id": "b",
        "text": "El dashboard debe ser privado y accesible únicamente por el creador del job"
      },
      {
        "id": "c",
        "text": "El dashboard debe estar publicado y conectado a un SQL Warehouse en ejecución"
      },
      {
        "id": "d",
        "text": "El dashboard debe utilizar cómputo clásico de nodo único"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Las tareas de dashboard en Jobs ejecutan la actualización de dashboards AI/BI ya publicados; para computar los nuevos datasets se requiere que el dashboard esté publicado y enlazado a un SQL Warehouse activo.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-dea-29",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When comparing continuous execution to scheduled execution, which component is unique to the Continuous Trigger setup?",
    "options": [
      {
        "id": "a",
        "text": "Trigger status activation"
      },
      {
        "id": "b",
        "text": "Cron expression setting"
      },
      {
        "id": "c",
        "text": "Built-in retry management"
      },
      {
        "id": "d",
        "text": "Manual run options"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Continuous execution triggers immediately restart the job as soon as the previous run completes (or fails), incorporating built-in retry backoff management to maintain continuous stream processing.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Execution Modes & Triggers"
  },
  {
    "id": "db-dea-29-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al comparar la ejecución continua con la ejecución programada, ¿qué componente es característico y exclusivo de la configuración de Disparador Continuo (Continuous Trigger)?",
    "options": [
      {
        "id": "a",
        "text": "Activación del estado del disparador (Trigger status)"
      },
      {
        "id": "b",
        "text": "Definición de expresiones Cron"
      },
      {
        "id": "c",
        "text": "Gestión integrada de reintentos (Built-in retry management)"
      },
      {
        "id": "d",
        "text": "Opciones de ejecución manual bajo demanda"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El modo de ejecución continua vigila la persistencia del flujo y relanza automáticamente el trabajo tras completarse o recuperarse de errores transitorios mediante políticas de reintento automatizadas.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Modos de Ejecución y Disparadores"
  },
  {
    "id": "db-dea-30",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is required before using a SQL query file in a Lakeflow Job task?",
    "options": [
      {
        "id": "a",
        "text": "The query must be less than 1000 characters"
      },
      {
        "id": "b",
        "text": "The query must use only SELECT statements"
      },
      {
        "id": "c",
        "text": "The query must be optimized for performance"
      },
      {
        "id": "d",
        "text": "The query file must be saved in the workspace or a Git repository"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "To execute a SQL task from a file in Lakeflow Jobs, the `.sql` script must be committed to a connected Git repo or saved inside workspace files.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-dea-30-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué se requiere antes de poder utilizar un archivo de consulta SQL en una tarea de Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "La consulta debe tener menos de 1000 caracteres"
      },
      {
        "id": "b",
        "text": "La consulta debe utilizar únicamente sentencias SELECT"
      },
      {
        "id": "c",
        "text": "La consulta debe haber sido optimizada previamente con EXPLAIN"
      },
      {
        "id": "d",
        "text": "El archivo de consulta debe estar guardado en los archivos del espacio de trabajo (Workspace) o en un repositorio Git"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Para orquestar scripts SQL modulares, el archivo con extensión `.sql` debe residir en los Workspace Files o sincronizado a través de Databricks Git Folders.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-dea-31",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the fundamental purpose of a For Each task in Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "Executing the same nested task multiple times per item in an input array"
      },
      {
        "id": "b",
        "text": "Running tasks sequentially with no parallel execution"
      },
      {
        "id": "c",
        "text": "Handling conditional branching logic"
      },
      {
        "id": "d",
        "text": "Validating data quality expectations"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "A `For Each` task loops through elements of a JSON array or parameter list, executing a nested task (e.g. processing regional partitions or customer IDs) either in sequence or with concurrency up to 100 items.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-dea-31-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito fundamental de una tarea For Each en Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "Ejecutar la misma tarea anidada múltiples veces, iterando sobre cada elemento de un arreglo de entrada"
      },
      {
        "id": "b",
        "text": "Ejecutar tareas secuencialmente sin posibilidad de paralelismo"
      },
      {
        "id": "c",
        "text": "Gestionar bifurcaciones lógicas condicionales"
      },
      {
        "id": "d",
        "text": "Validar expectativas de calidad de datos"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La tarea `For Each` permite parametrizar ejecuciones dinámicas iterando sobre un arreglo JSON (por ejemplo, una lista de sucursales o fechas), ejecutando tareas anidadas en paralelo o en serie.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-dea-32",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are building a Lakeflow Job to automate a workflow that includes multiple steps, such as data preparation, model training, and validation. Which statement correctly describes how Jobs and Tasks relate in this workflow?",
    "options": [
      {
        "id": "a",
        "text": "A task defines an individual unit of work, while a job orchestrates one or more tasks into a coordinated DAG"
      },
      {
        "id": "b",
        "text": "A job defines an individual step, while a task is the scheduled container"
      },
      {
        "id": "c",
        "text": "Jobs and tasks are identical concepts in Databricks and can be used interchangeably"
      },
      {
        "id": "d",
        "text": "A task can contain multiple independent jobs"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "In Databricks Lakeflow Jobs, a Task is the fundamental unit of work (running a notebook, query, pipeline, or python file), and a Job is the overarching DAG orchestration container managing scheduling, parameters, and dependencies.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-dea-32-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está construyendo un Lakeflow Job para automatizar un flujo de trabajo que incluye preparación de datos, entrenamiento de modelos y validación. ¿Qué afirmación describe correctamente la relación entre Jobs y Tareas (Tasks)?",
    "options": [
      {
        "id": "a",
        "text": "Una tarea define una unidad individual de trabajo, mientras que un job orquesta una o más tareas en un DAG coordinado"
      },
      {
        "id": "b",
        "text": "Un job define un paso individual, mientras que una tarea es el contenedor de programación"
      },
      {
        "id": "c",
        "text": "Jobs y tareas son conceptos idénticos en Databricks y se utilizan indistintamente"
      },
      {
        "id": "d",
        "text": "Una tarea puede contener múltiples jobs independientes en su interior"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Una Tarea (Task) es la unidad atómica de ejecución (notebook, script, consulta SQL), mientras que el Trabajo (Job) es la entidad que agrupa y orquesta esas tareas estableciendo dependencias y disparadores.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Orquestación y Arquitectura de Workflows"
  },
  {
    "id": "db-dea-33",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which three components constitute unified data engineering in Databricks Lakeflow?",
    "options": [
      {
        "id": "a",
        "text": "Unity Catalog, Connect, and Processing Engine"
      },
      {
        "id": "b",
        "text": "Connect, Spark Declarative Pipelines, and Jobs"
      },
      {
        "id": "c",
        "text": "Jobs, MLflow, and Data Warehousing"
      },
      {
        "id": "d",
        "text": "Connect, Storage, and Compute Clusters"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks Lakeflow unifies data engineering across three pillar products: Lakeflow Connect (data ingestion), Lakeflow Spark Declarative Pipelines (transformation & data quality), and Lakeflow Jobs (orchestration & automation).",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-dea-33-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuáles tres componentes constituyen la ingeniería de datos unificada en Databricks Lakeflow?",
    "options": [
      {
        "id": "a",
        "text": "Unity Catalog, Connect y Processing Engine"
      },
      {
        "id": "b",
        "text": "Connect, Spark Declarative Pipelines y Jobs"
      },
      {
        "id": "c",
        "text": "Jobs, MLflow y Data Warehousing"
      },
      {
        "id": "d",
        "text": "Connect, Storage y Compute Clusters"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El conjunto Databricks Lakeflow se compone de tres pilares integrados: Lakeflow Connect (ingesta masiva y conectores), Spark Declarative Pipelines (transformación declarativa) y Lakeflow Jobs (orquestación integral).",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Orquestación y Arquitectura de Workflows"
  },
  {
    "id": "db-dea-34",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a Lakeflow Job that must:\n- Branch to different downstream tasks depending on whether upstream tasks succeed or fail\n- Repeat a task across iterations when needed using loop-based execution\n\nWhich Lakeflow Jobs capability supports this behavior?",
    "options": [
      {
        "id": "a",
        "text": "Conditional tasks and control flow (If/Else and For Each tasks)"
      },
      {
        "id": "b",
        "text": "Continuous execution trigger"
      },
      {
        "id": "c",
        "text": "File arrival triggers"
      },
      {
        "id": "d",
        "text": "Delta Live Tables pipelines"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Advanced orchestration logic such as branching and repetition is provided natively in Lakeflow Jobs through control flow tasks: `If/Else` for conditional execution and `For Each` for parameterized looping.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-dea-34-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está diseñando un Lakeflow Job que debe:\n- Bifurcar hacia distintas tareas downstream según el resultado de éxito o fallo de tareas upstream\n- Repetir una tarea a lo largo de varias iteraciones mediante ejecución basada en bucles\n\n¿Qué capacidad de Lakeflow Jobs soporta este comportamiento?",
    "options": [
      {
        "id": "a",
        "text": "Tareas condicionales y de flujo de control (tareas If/Else y For Each)"
      },
      {
        "id": "b",
        "text": "Disparadores de ejecución continua (Continuous Trigger)"
      },
      {
        "id": "c",
        "text": "Disparadores por llegada de archivos (File Arrival Triggers)"
      },
      {
        "id": "d",
        "text": "Pipelines declarativos Delta Live Tables exclusivamente"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El control de flujo dinámico en Jobs se gestiona a través de tareas condicionales `If/Else` (para tomar caminos de éxito o fallo) y tareas `For Each` (para iterar bucles sobre listas de parámetros).",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-dea-35",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a Lakeflow Job that follows a fan-out pattern:\n- A single source task prepares data\n- Multiple downstream tasks perform independent processing on that same output\n\nHow do the downstream tasks typically execute relative to the source task?",
    "options": [
      {
        "id": "a",
        "text": "They run sequentially, one after another"
      },
      {
        "id": "b",
        "text": "They run in parallel once the single source task completes successfully"
      },
      {
        "id": "c",
        "text": "They run simultaneously with the source task"
      },
      {
        "id": "d",
        "text": "They only run if the source task fails"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "In a fan-out DAG topology, multiple downstream tasks declare dependency on the same single upstream parent task. Once the parent finishes, Databricks runs all downstream branches concurrently in parallel.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-dea-35-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está diseñando un Lakeflow Job que sigue un patrón de abanico (fan-out):\n- Una tarea inicial única prepara los datos\n- Múltiples tareas downstream realizan procesamiento independiente sobre esa misma salida\n\n¿Cómo se ejecutan habitualmente las tareas downstream con respecto a la tarea origen?",
    "options": [
      {
        "id": "a",
        "text": "Se ejecutan de manera estrictamente secuencial, una tras otra"
      },
      {
        "id": "b",
        "text": "Se ejecutan en paralelo una vez que la tarea origen única finaliza con éxito"
      },
      {
        "id": "c",
        "text": "Se ejecutan simultáneamente al mismo tiempo que la tarea origen"
      },
      {
        "id": "d",
        "text": "Solo se ejecutan si la tarea origen falla"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En un patrón fan-out, al depender todas las tareas downstream del mismo nodo padre, el motor de Jobs las programa para ejecutarse en paralelo tan pronto como dicho nodo padre termina exitosamente.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-dea-36",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What major drawbacks are job clusters subject to compared to serverless clusters?",
    "options": [
      {
        "id": "a",
        "text": "Limited data governance"
      },
      {
        "id": "b",
        "text": "Lack of Python support"
      },
      {
        "id": "c",
        "text": "Higher operational cost"
      },
      {
        "id": "d",
        "text": "Start-up time"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Classic Job Clusters require VM provisioning and cloud networking startup (typically taking 3 to 7 minutes), whereas Serverless compute starts in seconds from pre-warmed instant capacity pools.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Compute & Cost Optimization"
  },
  {
    "id": "db-dea-36-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal desventaja de los Job Clusters clásicos en comparación con los clusters Serverless?",
    "options": [
      {
        "id": "a",
        "text": "Gobernanza de datos limitada"
      },
      {
        "id": "b",
        "text": "Falta de soporte para lenguaje Python"
      },
      {
        "id": "c",
        "text": "Costo operacional base más alto"
      },
      {
        "id": "d",
        "text": "El tiempo de arranque (Start-up time)"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Los Job Clusters clásicos deben solicitar y aprovisionar máquinas virtuales a la nube (demorando de 3 a 6 minutos), mientras que el cómputo Serverless inicia casi instantáneamente (segundos) desde pools precalentados.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Cómputo y Optimización de Costos"
  },
  {
    "id": "db-dea-37",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What type of parameter setting is commonly used to support advanced orchestration logic like looping or conditional execution for a specific unit of work?",
    "options": [
      {
        "id": "a",
        "text": "Global Environment Variables"
      },
      {
        "id": "b",
        "text": "Job Parameters"
      },
      {
        "id": "c",
        "text": "Task Parameters"
      },
      {
        "id": "d",
        "text": "Notification settings"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Task Parameters allow passing dynamic, task-specific values (such as iterator variables `{{input}}` in `For Each` tasks or upstream task values `{{tasks.[task_name].values.[key]}}`) into individual tasks.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-dea-37-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de configuración de parámetros se utiliza comúnmente para soportar lógica de orquestación avanzada como bucles o ejecución condicional en una unidad de trabajo específica?",
    "options": [
      {
        "id": "a",
        "text": "Variables de entorno globales del sistema operativo"
      },
      {
        "id": "b",
        "text": "Parámetros de nivel de Job exclusivamente"
      },
      {
        "id": "c",
        "text": "Parámetros de Tarea (Task Parameters)"
      },
      {
        "id": "d",
        "text": "Configuración de notificaciones"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Los Parámetros de Tarea (Task Parameters) permiten inyectar valores contextuales específicos a cada tarea individual, como variables de iteración en tareas For Each o valores emitidos por tareas previas.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-dea-38",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are configuring a Databricks job that runs multiple tasks. You want to define a parameter (example, `input_path`) whose value should apply to all tasks by default, unless overridden for a specific task. Where should you specify this parameter value?",
    "options": [
      {
        "id": "a",
        "text": "In the Job parameters section"
      },
      {
        "id": "b",
        "text": "In the cluster configuration"
      },
      {
        "id": "c",
        "text": "In a dedicated task parameter for every task"
      },
      {
        "id": "d",
        "text": "In a global environment variable on the driver node"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Job-level parameters define default key-value pairs accessible to every task in the job DAG via parameter references, avoiding repetitive configuration across individual tasks.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-dea-38-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está configurando un job de Databricks que ejecuta múltiples tareas. Desea definir un parámetro (por ejemplo, `input_path`) cuyo valor aplique a todas las tareas de forma predeterminada, a menos que se sobreescriba en una tarea concreta. ¿Dónde debe especificar este parámetro?",
    "options": [
      {
        "id": "a",
        "text": "En la sección de Parámetros del Job (Job Parameters)"
      },
      {
        "id": "b",
        "text": "En la configuración de hardware del cluster"
      },
      {
        "id": "c",
        "text": "En un parámetro de tarea dedicado repetido dentro de cada tarea"
      },
      {
        "id": "d",
        "text": "En una variable de entorno global en el nodo driver"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los Parámetros de Job se configuran a nivel raíz del workflow y son heredados por todas las tareas subordinadas como valores por defecto, simplificando la gestión centralizada de rutas y fechas.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-dea-39",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are running a Lakeflow Job for a production workflow that:\n- Executes on a schedule\n- Does not require an always-on cluster\n- Should automatically shut down compute after the job completes to control costs\n\nWhich compute option best fits this use case?",
    "options": [
      {
        "id": "a",
        "text": "Interactive Cluster"
      },
      {
        "id": "b",
        "text": "Serverless or Job Compute"
      },
      {
        "id": "c",
        "text": "High-concurrency cluster"
      },
      {
        "id": "d",
        "text": "Single-node cluster kept in continuous running state"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Serverless or automated Job Compute is specifically engineered for automated scheduled workflows, provisioning resources on-demand and tearing down immediately upon job completion to minimize costs.",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Compute & Cost Optimization"
  },
  {
    "id": "db-dea-39-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ejecuta un Lakeflow Job para un flujo de producción que:\n- Se ejecuta según un cronograma programado\n- No requiere un cluster siempre encendido\n- Debe apagar automáticamente el cómputo tras completarse el trabajo para optimizar costos\n\n¿Qué opción de cómputo se adapta mejor a este caso de uso?",
    "options": [
      {
        "id": "a",
        "text": "Cluster Interactivo multi-usuario"
      },
      {
        "id": "b",
        "text": "Cómputo Serverless o Job Compute dedicado"
      },
      {
        "id": "c",
        "text": "Cluster de alta concurrencia"
      },
      {
        "id": "d",
        "text": "Cluster de nodo único mantenido continuamente encendido"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El cómputo Serverless y los Job Clusters efímeros se aprovisionan únicamente durante la ejecución de las tareas y se destruyen de inmediato al terminar, garantizando cero costos ociosos.",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Cómputo y Optimización de Costos"
  },
  {
    "id": "db-dea-40",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are creating a Lakeflow Job to orchestrate a workflow. In its simplest form, what is the minimum structure required for a valid job?",
    "options": [
      {
        "id": "a",
        "text": "A pipeline and a dashboard combined"
      },
      {
        "id": "b",
        "text": "A notebook and a SQL task combined"
      },
      {
        "id": "c",
        "text": "A single task that defines the work to execute"
      },
      {
        "id": "d",
        "text": "At least two tasks connected by a dependency"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "The minimum valid configuration for a Databricks Job is a single task specifying the task type (e.g. notebook, python script, SQL query) and the compute resource to execute it.",
    "domain": "Working with Lakeflow Jobs",
    "subdomain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-dea-40-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está creando un Lakeflow Job para orquestar un flujo de trabajo. En su forma más elemental, ¿cuál es la estructura mínima obligatoria para que un job sea válido?",
    "options": [
      {
        "id": "a",
        "text": "Un pipeline y un dashboard combinados"
      },
      {
        "id": "b",
        "text": "Un notebook y una consulta SQL combinados"
      },
      {
        "id": "c",
        "text": "Una sola tarea que defina el trabajo a ejecutar"
      },
      {
        "id": "d",
        "text": "Al menos dos tareas conectadas por una relación de dependencia"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La estructura mínima de un Job en Databricks requiere únicamente una sola tarea configurada con su lógica de ejecución y su recurso de cómputo correspondiente.",
    "domain": "Trabajo con Lakeflow Jobs",
    "subdomain": "Orquestación y Arquitectura de Workflows"
  },
  {
    "id": "db-dea-41",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Spark Declarative Pipelines, what is the primary difference between a streaming table and a materialized view?",
    "options": [
      {
        "id": "a",
        "text": "Streaming tables ingest and incrementally process incoming data from a source, while materialized views incrementally maintain the results of a query over upstream tables when possible"
      },
      {
        "id": "b",
        "text": "Streaming tables are used only for batch workloads, while materialized views are used only for streaming workloads"
      },
      {
        "id": "c",
        "text": "Streaming tables are used only for raw data, while materialized views are used only for final reporting tables"
      },
      {
        "id": "d",
        "text": "Streaming tables always recompute all data on each run, while materialized views never recompute data"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Streaming tables are append-only datasets backed by streaming sources and checkpoints for incremental ingest. Materialized views precompute and persist query results, updating incrementally or through full refreshes based on query determinism and upstream changes.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-dea-41-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En Spark Declarative Pipelines, ¿cuál es la principal diferencia entre una tabla streaming y una vista materializada?",
    "options": [
      {
        "id": "a",
        "text": "Las tablas streaming ingieren y procesan datos entrantes de forma incremental desde un origen, mientras que las vistas materializadas mantienen incrementalmente los resultados de una consulta sobre tablas upstream cuando es posible"
      },
      {
        "id": "b",
        "text": "Las tablas streaming se usan únicamente para cargas batch, mientras que las vistas materializadas son exclusivas de streaming"
      },
      {
        "id": "c",
        "text": "Las tablas streaming solo pueden almacenar datos crudos, mientras que las vistas materializadas son exclusivas de reportes finales"
      },
      {
        "id": "d",
        "text": "Las tablas streaming recomputan todos los datos en cada corrida, mientras que las vistas materializadas nunca recomputan"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las tablas streaming procesan flujos de adición continua mediante checkpoints e ingesta incremental; las vistas materializadas materializan el resultado de transformaciones o agregaciones complejas manteniéndolas sincronizadas con las tablas origen.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-dea-42",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What mechanism allows Spark Declarative Pipelines to efficiently process only new data in subsequent runs of a streaming table?",
    "options": [
      {
        "id": "a",
        "text": "Manual timestamps recorded in an external database"
      },
      {
        "id": "b",
        "text": "Auto Loader combined with checkpoints to track ingested files and offsets"
      },
      {
        "id": "c",
        "text": "Re-scanning and hashing every source file on each execution"
      },
      {
        "id": "d",
        "text": "Truncating the target table before each run"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Streaming tables utilize Structured Streaming checkpointing and Auto Loader state tracking to record exactly which files and stream offsets have been processed, ensuring each record is processed exactly once.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-dea-42-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué mecanismo permite a Spark Declarative Pipelines procesar de manera eficiente únicamente los datos nuevos en ejecuciones posteriores de una tabla streaming?",
    "options": [
      {
        "id": "a",
        "text": "Marcas de tiempo manuales registradas en una base de datos externa"
      },
      {
        "id": "b",
        "text": "Auto Loader combinado con puntos de control (checkpoints) para rastrear archivos y offsets ya ingeridos"
      },
      {
        "id": "c",
        "text": "Re-escanear y calcular hashes de todos los archivos fuente en cada corrida"
      },
      {
        "id": "d",
        "text": "Truncar la tabla de destino antes de cada ejecución"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El motor subyacente de Structured Streaming registra offsets de lectura y metadatos de archivos en checkpoints persistentes en almacenamiento cloud, garantizando procesamiento 'exactly-once' incremental.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-dea-43",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the purpose of the event log in Lakeflow Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Storing the raw output data generated by streaming tables"
      },
      {
        "id": "b",
        "text": "It tracks pipeline runs, including start time, end time, data quality metrics, and performance"
      },
      {
        "id": "c",
        "text": "Managing user workspace logins and security credentials"
      },
      {
        "id": "d",
        "text": "Serving as a staging area for incoming JSON files"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The event log is a Delta table maintained automatically for each pipeline that records audit events, execution states, lineage graph changes, cluster utilization, and detailed expectation data quality metrics.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Pipeline Execution & Event Log"
  },
  {
    "id": "db-dea-43-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito del registro de eventos (event log) en Lakeflow Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Almacenar los datos de salida crudos producidos por las tablas streaming"
      },
      {
        "id": "b",
        "text": "Rastrear las ejecuciones del pipeline, incluyendo tiempos de inicio y fin, métricas de calidad de datos y rendimiento"
      },
      {
        "id": "c",
        "text": "Administrar los inicios de sesión y credenciales de seguridad de los usuarios"
      },
      {
        "id": "d",
        "text": "Servir como área de aterrizaje temporal para archivos JSON entrantes"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El event log registra en formato Delta todos los eventos operativos del pipeline: auditoría de ejecuciones, evolución del grafo de linaje, métricas de expectativas de calidad y registros de rendimiento.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Ejecución de Pipelines y Registro de Eventos"
  },
  {
    "id": "db-dea-44",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When configuring a Spark Declarative Pipeline, which compute option is recommended to minimize infrastructure management?",
    "options": [
      {
        "id": "a",
        "text": "Classic multi-node driver/worker cluster"
      },
      {
        "id": "b",
        "text": "Single-node self-managed cluster"
      },
      {
        "id": "c",
        "text": "Serverless compute"
      },
      {
        "id": "d",
        "text": "High-concurrency shared cluster"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Serverless compute removes all cluster configuration, sizing, node provisioning, and driver tuning burdens, scaling automatically and instantly with zero management overhead.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-dea-44-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al configurar un Spark Declarative Pipeline, ¿qué opción de cómputo se recomienda para minimizar la gestión de infraestructura?",
    "options": [
      {
        "id": "a",
        "text": "Cluster clásico multi-nodo con driver y workers"
      },
      {
        "id": "b",
        "text": "Cluster autogestionado de nodo único"
      },
      {
        "id": "c",
        "text": "Cómputo Serverless"
      },
      {
        "id": "d",
        "text": "Cluster compartido de alta concurrencia"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El cómputo Serverless delega el aprovisionamiento, escalado elástico y mantenimiento de hardware a Databricks, permitiendo al ingeniero enfocarse exclusivamente en la lógica declarativa de datos.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-dea-45",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Assume you have JSON log files arriving continuously in cloud storage. You want to define a streaming table in Lakeflow Spark Declarative Pipelines using SQL to ingest these files incrementally. Which statement represents the best approach?",
    "options": [
      {
        "id": "a",
        "text": "CREATE OR REFRESH STREAMING TABLE events_bronze AS SELECT * FROM STREAM read_files('/path/to/logs', format => 'json');"
      },
      {
        "id": "b",
        "text": "CREATE TABLE events_bronze AS SELECT * FROM read_files('/path/to/logs', format => 'json');"
      },
      {
        "id": "c",
        "text": "CREATE MATERIALIZED VIEW events_bronze AS SELECT * FROM json.`/path/to/logs`;"
      },
      {
        "id": "d",
        "text": "CREATE OR REFRESH TABLE events_bronze AS COPY INTO events_bronze FROM '/path/to/logs' FILEFORMAT = JSON;"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "`CREATE OR REFRESH STREAMING TABLE ... AS SELECT * FROM STREAM read_files(...)` is the standard declarative syntax to configure an Auto Loader streaming ingestion table in SQL.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-dea-45-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Suponga que tiene archivos de registro JSON llegando continuamente a almacenamiento cloud. Desea definir una tabla streaming en Spark Declarative Pipelines con SQL para ingerirlos incrementalmente. ¿Qué sentencia representa el mejor enfoque?",
    "options": [
      {
        "id": "a",
        "text": "CREATE OR REFRESH STREAMING TABLE events_bronze AS SELECT * FROM STREAM read_files('/path/to/logs', format => 'json');"
      },
      {
        "id": "b",
        "text": "CREATE TABLE events_bronze AS SELECT * FROM read_files('/path/to/logs', format => 'json');"
      },
      {
        "id": "c",
        "text": "CREATE MATERIALIZED VIEW events_bronze AS SELECT * FROM json.`/path/to/logs`;"
      },
      {
        "id": "d",
        "text": "CREATE OR REFRESH TABLE events_bronze AS COPY INTO events_bronze FROM '/path/to/logs' FILEFORMAT = JSON;"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La sintaxis `CREATE OR REFRESH STREAMING TABLE ... AS SELECT * FROM STREAM read_files(...)` instruye a Spark Declarative Pipelines a configurar una fuente Auto Loader streaming con gestión de checkpoints.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-dea-46",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When a streaming table in Spark Declarative Pipelines processes new data, what happens to the existing data in the table?",
    "options": [
      {
        "id": "a",
        "text": "Existing data is overwritten with the new data"
      },
      {
        "id": "b",
        "text": "Existing data is backed up and a new table version is created from scratch"
      },
      {
        "id": "c",
        "text": "New records are appended incrementally to the streaming table without reprocessing historical data"
      },
      {
        "id": "d",
        "text": "The entire table is recomputed and duplicates are removed"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Streaming tables operate append-only by default, appending newly ingested rows to the underlying Delta table without modifying or recomputing previously written records.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-dea-46-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Cuando una tabla streaming en Spark Declarative Pipelines procesa datos nuevos, ¿qué ocurre con los datos existentes en la tabla?",
    "options": [
      {
        "id": "a",
        "text": "Los datos existentes se sobrescriben completamente con los datos nuevos"
      },
      {
        "id": "b",
        "text": "Se respaldan los datos previos y se crea una nueva tabla desde cero"
      },
      {
        "id": "c",
        "text": "Los nuevos registros se agregan incrementalmente (append) a la tabla streaming sin reprocesar los datos históricos"
      },
      {
        "id": "d",
        "text": "Se recomputa toda la tabla y se eliminan los duplicados"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Las tablas streaming anexan (append) los registros recién llegados al historial de transacciones de Delta Lake sin alterar ni volver a procesar las particiones históricas ya persistidas.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-dea-47",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are building a pipeline in Lakeflow Spark Declarative Pipelines to ingest customer clickstream data from cloud storage. Which SQL statement creates a streaming table using Auto Loader?",
    "options": [
      {
        "id": "a",
        "text": "CREATE OR REFRESH STREAMING TABLE raw_events AS SELECT * FROM STREAM read_files('/path/to/events', format => 'json');"
      },
      {
        "id": "b",
        "text": "CREATE MATERIALIZED VIEW raw_events AS SELECT * FROM read_files('/path/to/events');"
      },
      {
        "id": "c",
        "text": "CREATE STREAMING TABLE raw_events USING delta LOCATION '/path/to/events';"
      },
      {
        "id": "d",
        "text": "CREATE VIEW raw_events AS SELECT * FROM stream('/path/to/events');"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "`CREATE OR REFRESH STREAMING TABLE ... AS SELECT * FROM STREAM read_files(...)` specifies both the declarative streaming table target and the Auto Loader streaming file reader.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-dea-47-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está construyendo una canalización en Spark Declarative Pipelines para ingerir datos de clickstream de clientes desde la nube. ¿Qué sentencia SQL crea una tabla streaming utilizando Auto Loader?",
    "options": [
      {
        "id": "a",
        "text": "CREATE OR REFRESH STREAMING TABLE raw_events AS SELECT * FROM STREAM read_files('/path/to/events', format => 'json');"
      },
      {
        "id": "b",
        "text": "CREATE MATERIALIZED VIEW raw_events AS SELECT * FROM read_files('/path/to/events');"
      },
      {
        "id": "c",
        "text": "CREATE STREAMING TABLE raw_events USING delta LOCATION '/path/to/events';"
      },
      {
        "id": "d",
        "text": "CREATE VIEW raw_events AS SELECT * FROM stream('/path/to/events');"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La palabra clave `STREAM` combinada con la función `read_files()` dentro de `CREATE OR REFRESH STREAMING TABLE` activa el motor Auto Loader de ingesta incremental continua.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-dea-48",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Spark Declarative Pipelines, what is the primary role of a materialized view in the Gold layer?",
    "options": [
      {
        "id": "a",
        "text": "Ingesting raw JSON logs into staging folders"
      },
      {
        "id": "b",
        "text": "Producing aggregated or derived results from upstream tables while maintaining freshness incrementally where possible"
      },
      {
        "id": "c",
        "text": "Enforcing file system permissions on cloud storage"
      },
      {
        "id": "d",
        "text": "Storing audit logs of failed pipeline runs"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "In the Gold layer, materialized views compute business-level aggregates, KPIs, and joins from cleaned Silver tables, automatically updating query results without manual refresh scheduling.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Materialized Views & Incremental Computation"
  },
  {
    "id": "db-dea-48-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En Spark Declarative Pipelines, ¿cuál es el rol principal de una vista materializada en la capa Gold?",
    "options": [
      {
        "id": "a",
        "text": "Ingerir registros JSON crudos en carpetas intermedias"
      },
      {
        "id": "b",
        "text": "Producir resultados agregados o derivados de tablas upstream manteniendo frescura incremental cuando sea posible"
      },
      {
        "id": "c",
        "text": "Aplicar permisos de sistema de archivos en el bucket cloud"
      },
      {
        "id": "d",
        "text": "Almacenar auditorías de trabajos fallidos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las vistas materializadas en la capa Gold albergan métricas, agregaciones y tablas de hechos listas para dashboards, actualizándose de forma incremental o eficiente con cada corrida de la canalización.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Vistas Materializadas y Cómputo Incremental"
  },
  {
    "id": "db-dea-49",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a Lakeflow Spark Declarative Pipeline that includes a materialized view. Downstream business users report that historical records were updated at the source, but the materialized view does not reflect these modifications. What action should you take?",
    "options": [
      {
        "id": "a",
        "text": "Drop and recreate the entire pipeline from scratch"
      },
      {
        "id": "b",
        "text": "Run the pipeline with a full table refresh"
      },
      {
        "id": "c",
        "text": "Convert the materialized view into a temporary view"
      },
      {
        "id": "d",
        "text": "Switch the pipeline to single-node compute"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Triggering a Full Refresh for the specific table recomputes the materialized view against the complete history of upstream tables, recalculating all rows to incorporate historical updates.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Pipeline Execution & Event Log"
  },
  {
    "id": "db-dea-49-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tiene un Spark Declarative Pipeline que incluye una vista materializada. Los usuarios de negocio reportan que se actualizaron registros históricos en el origen, pero la vista materializada no refleja esos cambios. ¿Qué acción debe tomar?",
    "options": [
      {
        "id": "a",
        "text": "Eliminar y recrear toda la canalización desde cero"
      },
      {
        "id": "b",
        "text": "Ejecutar la canalización con una actualización completa (Full Table Refresh) para esa tabla"
      },
      {
        "id": "c",
        "text": "Convertir la vista materializada en una vista temporal"
      },
      {
        "id": "d",
        "text": "Cambiar la canalización a cómputo de nodo único"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Una actualización completa (Full Refresh) fuerza a la vista materializada a reprocesar todo el conjunto histórico de las tablas origen, garantizando que cualquier modificación pasada quede reflejada.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Ejecución de Pipelines y Registro de Eventos"
  },
  {
    "id": "db-dea-50",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are building a Spark Declarative Pipeline with the following requirements:\n- A streaming table ingests continuously arriving transactions\n- A static dimension table contains store metadata\n- The output table should combine each transaction with its store details\n\nWhich approach correctly achieves this in Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Join the streaming table with the static table in a streaming table query using standard SQL join syntax"
      },
      {
        "id": "b",
        "text": "Convert the static table into a stream and perform a stream-stream join with watermarks"
      },
      {
        "id": "c",
        "text": "Materialized views cannot query streaming tables"
      },
      {
        "id": "d",
        "text": "Static tables must be loaded into memory variables using Python before querying"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "In Structured Streaming and Spark Declarative Pipelines, stream-static joins are supported natively: `SELECT * FROM STREAM(transactions) t JOIN stores s ON t.store_id = s.store_id` enriches streaming rows with static lookup data.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-dea-50-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está construyendo un Spark Declarative Pipeline con los siguientes requisitos:\n- Una tabla streaming ingiere transacciones que llegan continuamente\n- Una tabla de dimensiones estática contiene metadatos de las sucursales\n- La tabla de salida debe combinar cada transacción con los detalles de su sucursal\n\n¿Qué enfoque logra esto correctamente en Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Unir la tabla streaming con la tabla estática en una consulta de tabla streaming utilizando la sintaxis estándar de JOIN de SQL"
      },
      {
        "id": "b",
        "text": "Convertir la tabla estática forzosamente en un stream y hacer un join stream-stream con marcas de agua"
      },
      {
        "id": "c",
        "text": "Las vistas materializadas no pueden consultar tablas streaming"
      },
      {
        "id": "d",
        "text": "Las tablas estáticas deben cargarse obligatoriamente en memoria mediante variables Python"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Spark admite de forma nativa los 'stream-static joins', enriqueciendo cada fila del flujo entrante contra la fotografía más reciente de la tabla de dimensiones mediante un simple `JOIN` en SQL.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-dea-51",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which feature improves reliability and reduces maintenance in Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Manual cluster restarting"
      },
      {
        "id": "b",
        "text": "Automated Scaling and Recovery"
      },
      {
        "id": "c",
        "text": "Requiring external Airflow schedulers for every step"
      },
      {
        "id": "d",
        "text": "Hardcoded file path references"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Automated scaling optimizes compute resources to match workload demands dynamically, while automatic retry and failure recovery prevent transient cloud infrastructure glitches from aborting pipelines.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-dea-51-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué característica mejora la confiabilidad y reduce el mantenimiento en Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Reinicio manual continuo de clusters"
      },
      {
        "id": "b",
        "text": "Escalado y Recuperación Automatizados (Automated Scaling and Recovery)"
      },
      {
        "id": "c",
        "text": "Requerir un orquestador Airflow externo para cada paso interno"
      },
      {
        "id": "d",
        "text": "Rutas de archivos fijas codificadas en duro (hardcoded)"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El escalado automático adapta el cómputo al volumen de datos en tiempo real y la auto-recuperación gestiona fallos transitorios de red o nodos sin requerir intervención del ingeniero.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-dea-52",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following statements best describes the core purpose of Lakeflow Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "It is a code repository for sharing Python scripts across organizations"
      },
      {
        "id": "b",
        "text": "It acts as a declarative framework that lets you define what data transformations to perform while managing underlying infrastructure, execution dependencies, and state automatically"
      },
      {
        "id": "c",
        "text": "It is a visualization tool for creating executive BI charts"
      },
      {
        "id": "d",
        "text": "It is an access control system for granting user permissions in Unity Catalog"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Spark Declarative Pipelines abstracts away the operational complexity of data engineering: engineers define tables and views declaratively in SQL/Python, and Databricks manages the DAG, checkpoints, optimization, and compute.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-dea-52-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones describe mejor el propósito fundamental de Lakeflow Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Es un repositorio de código para compartir scripts Python entre organizaciones"
      },
      {
        "id": "b",
        "text": "Actúa como un framework declarativo que permite definir qué transformaciones de datos realizar mientras gestiona automáticamente la infraestructura, las dependencias y el estado"
      },
      {
        "id": "c",
        "text": "Es una herramienta de visualización para construir gráficos de Business Intelligence ejecutivos"
      },
      {
        "id": "d",
        "text": "Es un sistema de control de accesos para otorgar permisos a usuarios en Unity Catalog"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El enfoque declarativo permite al desarrollador enfocarse en el 'qué' (la lógica SQL o Python de los datos) mientras el motor de Databricks resuelve de forma autónoma el 'cómo' (orden de ejecución, checkpoints, dependencias y cómputo).",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-dea-53",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When running a Spark Declarative Pipeline for the second time, which data is processed by default in a streaming table?",
    "options": [
      {
        "id": "a",
        "text": "The entire dataset from the very beginning"
      },
      {
        "id": "b",
        "text": "Only the new rows added since the last run"
      },
      {
        "id": "c",
        "text": "Only rows with errors in the previous run"
      },
      {
        "id": "d",
        "text": "Randomly sampled rows for validation"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Streaming tables maintain state in checkpoints and transaction logs, ensuring that subsequent executions process only net-new data arrived since the last successful execution.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-dea-53-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al ejecutar un Spark Declarative Pipeline por segunda vez, ¿qué datos procesa por defecto una tabla streaming?",
    "options": [
      {
        "id": "a",
        "text": "El conjunto de datos completo desde el principio de los tiempos"
      },
      {
        "id": "b",
        "text": "Únicamente las nuevas filas añadidas desde la última ejecución"
      },
      {
        "id": "c",
        "text": "Solo las filas que tuvieron errores en la corrida anterior"
      },
      {
        "id": "d",
        "text": "Una muestra aleatoria de filas para comprobación"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Gracias al seguimiento de estado incremental, la segunda corrida (y posteriores) de una tabla streaming procesa exclusivamente las filas o archivos recién agregados.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-dea-54",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are building a Spark Declarative Pipeline with the following requirements:\n- A bronze streaming table ingests raw orders\n- A silver streaming table filters and enriches orders\n- You need a summary table that calculates daily total revenue by customer\n\nWhich statement is best suited for the summary table?",
    "options": [
      {
        "id": "a",
        "text": "CREATE OR REFRESH MATERIALIZED VIEW customer_order_summary AS SELECT customer_id, date(order_time) as order_date, sum(order_total) as daily_revenue FROM silver_orders GROUP BY customer_id, date(order_time);"
      },
      {
        "id": "b",
        "text": "CREATE STREAMING TABLE customer_order_summary AS SELECT customer_id, sum(order_total) FROM STREAM(silver_orders);"
      },
      {
        "id": "c",
        "text": "CREATE VIEW customer_order_summary AS SELECT * FROM silver_orders;"
      },
      {
        "id": "d",
        "text": "CREATE TEMPORARY TABLE customer_order_summary AS SELECT customer_id, sum(order_total) FROM silver_orders;"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Materialized views are ideal for Gold aggregations (GROUP BY customer_id, date) over upstream tables, maintaining fresh precomputed summary results efficiently without requiring streaming watermarks.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Materialized Views & Incremental Computation"
  },
  {
    "id": "db-dea-54-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está construyendo un Spark Declarative Pipeline con los siguientes requerimientos:\n- Una tabla streaming bronze ingiere órdenes crudas\n- Una tabla streaming silver filtra y enriquece las órdenes\n- Se necesita una tabla de resumen que calcule los ingresos totales diarios por cliente\n\n¿Qué sentencia es la más adecuada para la tabla de resumen?",
    "options": [
      {
        "id": "a",
        "text": "CREATE OR REFRESH MATERIALIZED VIEW customer_order_summary AS SELECT customer_id, date(order_time) as order_date, sum(order_total) as daily_revenue FROM silver_orders GROUP BY customer_id, date(order_time);"
      },
      {
        "id": "b",
        "text": "CREATE STREAMING TABLE customer_order_summary AS SELECT customer_id, sum(order_total) FROM STREAM(silver_orders);"
      },
      {
        "id": "c",
        "text": "CREATE VIEW customer_order_summary AS SELECT * FROM silver_orders;"
      },
      {
        "id": "d",
        "text": "CREATE TEMPORARY TABLE customer_order_summary AS SELECT customer_id, sum(order_total) FROM silver_orders;"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las vistas materializadas (`MATERIALIZED VIEW`) son la opción ideal para persistir consultas analíticas agregadas (GROUP BY) en la capa Gold, actualizándose de forma incremental y rápida.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Vistas Materializadas y Cómputo Incremental"
  },
  {
    "id": "db-dea-55",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When using batch notebook-based ETL for large data volumes, which common issue can occur that Spark Declarative Pipelines are designed to solve?",
    "options": [
      {
        "id": "a",
        "text": "Notebooks cannot use Python libraries"
      },
      {
        "id": "b",
        "text": "Batch notebook ETL often fully reprocesses data on each run, leading to high resource consumption and difficult dependency management"
      },
      {
        "id": "c",
        "text": "Notebooks cannot read parquet files"
      },
      {
        "id": "d",
        "text": "Notebooks cannot be scheduled in Databricks"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Notebook ETLs often suffer from manual full-scans, brittle execution order orchestration, lack of automatic checkpointing, and high cloud compute costs, which Spark Declarative Pipelines resolves through declarative incremental processing.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-dea-55-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al utilizar ETLs basados en notebooks tradicionales por lotes para grandes volúmenes de datos, ¿qué problema común surge que Spark Declarative Pipelines está diseñado para solucionar?",
    "options": [
      {
        "id": "a",
        "text": "Los notebooks no pueden utilizar librerías de Python"
      },
      {
        "id": "b",
        "text": "Los notebooks tradicionales a menudo reprocesan todos los datos en cada corrida, provocando un consumo elevado de recursos y una gestión compleja de dependencias"
      },
      {
        "id": "c",
        "text": "Los notebooks carecen de capacidad para leer archivos parquet"
      },
      {
        "id": "d",
        "text": "Los notebooks no admiten programación en Databricks"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los notebooks tradicionales suelen incurrir en reprocesamientos redundantes, scripts monolíticos difíciles de depurar y falta de linaje declarativo, problemas que los pipelines declarativos resuelven de raíz.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-dea-56",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You define a Lakeflow Spark Declarative Pipeline where:\n- A bronze streaming table ingests new JSON files as they arrive in cloud storage\n- A downstream silver streaming table applies transformations such as filtering and enrichment on the bronze streaming table\n- A materialized view aggregates the transformed results\n\nWhen new files arrive in cloud storage and the pipeline is run, what happens?",
    "options": [
      {
        "id": "a",
        "text": "Only the new files are ingested and downstream streaming tables are updated incrementally, but the materialized view is always fully recomputed"
      },
      {
        "id": "b",
        "text": "The entire pipeline is re-run from scratch, reprocessing all historical data to produce updated results"
      },
      {
        "id": "c",
        "text": "Only the new files are ingested, downstream streaming tables are updated incrementally, and the materialized view is incrementally updated when possible"
      },
      {
        "id": "d",
        "text": "Only the new files are ingested and downstream streaming tables are updated incrementally, but the materialized view must be manually refreshed"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Spark Declarative Pipelines propagates updates end-to-end through the DAG: only new files are ingested into Bronze, Silver tables process the incremental deltas, and Gold materialized views update incrementally whenever feasible.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-dea-56-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Define un Lakeflow Spark Declarative Pipeline donde:\n- Una tabla streaming bronze ingiere nuevos archivos JSON a medida que llegan a la nube\n- Una tabla streaming silver aguas abajo aplica filtros y enriquecimientos sobre la tabla bronze\n- Una vista materializada agrega los resultados transformados\n\nCuando llegan nuevos archivos al almacenamiento cloud y se ejecuta la canalización, ¿qué sucede?",
    "options": [
      {
        "id": "a",
        "text": "Solo se ingieren los archivos nuevos y la tabla silver se actualiza de forma incremental, pero la vista materializada siempre se recomputa por completo"
      },
      {
        "id": "b",
        "text": "Se reejecuta todo el pipeline desde cero, reprocesando todo el historial de datos"
      },
      {
        "id": "c",
        "text": "Solo los nuevos archivos son ingeridos, las tablas streaming downstream se actualizan incrementalmente y la vista materializada se actualiza incrementalmente cuando es posible"
      },
      {
        "id": "d",
        "text": "Se ingieren los nuevos archivos pero la vista materializada debe actualizarse manualmente"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El DAG declarativo propaga únicamente los deltas: Bronze ingiere los archivos nuevos, Silver transforma únicamente los deltas generados y la vista materializada recalcula de manera incremental los agregados afectados.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-dea-57",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A team has an incremental batch Spark Declarative Pipeline that processes new files daily. The data source begins delivering files continuously, and the team wants near real time processing without rewriting transformations. What change is required?",
    "options": [
      {
        "id": "a",
        "text": "Change the pipeline trigger from scheduled to continuous execution"
      },
      {
        "id": "b",
        "text": "Convert the pipeline to a notebook based streaming job"
      },
      {
        "id": "c",
        "text": "Rewrite all tables as streaming only SQL"
      },
      {
        "id": "d",
        "text": "Add manual watermark logic to every query"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Because Spark Declarative Pipelines code is declarative, transitioning from scheduled batch to continuous near-real-time streaming requires simply toggling the pipeline mode from 'Triggered' (Scheduled) to 'Continuous' without changing SQL or Python code.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Pipeline Execution & Event Log"
  },
  {
    "id": "db-dea-57-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un equipo cuenta con un Spark Declarative Pipeline batch incremental que procesa archivos diariamente. La fuente comienza a entregar archivos de manera continua y el equipo desea procesamiento en tiempo real sin reescribir transformaciones. ¿Qué cambio se requiere?",
    "options": [
      {
        "id": "a",
        "text": "Cambiar el modo del disparador de la canalización de programado (Scheduled) a ejecución continua (Continuous)"
      },
      {
        "id": "b",
        "text": "Convertir la canalización en un trabajo de streaming basado en notebooks de Python"
      },
      {
        "id": "c",
        "text": "Reescribir todas las tablas como SQL exclusivo de streaming manual"
      },
      {
        "id": "d",
        "text": "Agregar lógica de marcas de agua (watermarks) manual a cada consulta"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La naturaleza unificada de Spark Declarative Pipelines permite cambiar entre procesamiento por lotes programado y streaming continuo simplemente modificando la opción de ejecución del pipeline en la UI o configuración, sin tocar una sola línea de código.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Ejecución de Pipelines y Registro de Eventos"
  },
  {
    "id": "db-dea-58",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are migrating a traditional batch ETL workflow, where the entire dataset is fully reprocessed each time the job runs, into a Lakeflow Spark Declarative Pipeline using a Bronze > Silver > Gold architecture.\nIn the existing workflow:\n- Raw files are ingested, cleaned, joined, and aggregated in a single batch job.\n\nWhich design best aligns with Lakeflow Spark Declarative Pipelines best practices?",
    "options": [
      {
        "id": "a",
        "text": "Replicate the single large monolithic job inside a single SQL query"
      },
      {
        "id": "b",
        "text": "Define a Bronze streaming table for raw ingestion, a Silver streaming table for cleaned data, and a Gold materialized view for aggregated reporting"
      },
      {
        "id": "c",
        "text": "Use three separate temporary views that re-execute on every query"
      },
      {
        "id": "d",
        "text": "Load all data into a single Gold streaming table directly from cloud storage"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Best practice Medallion design modularizes the pipeline: Bronze streaming table captures raw immutable inputs; Silver streaming table filters, validates, and cleans; and Gold materialized view prepares final aggregates for consumption.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-dea-58-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está migrando un flujo de trabajo ETL batch tradicional (donde todo el conjunto de datos se reprocesa en cada corrida) hacia un Lakeflow Spark Declarative Pipeline con arquitectura Bronze > Silver > Gold.\nEn el flujo actual:\n- Los archivos crudos se ingieren, limpian, cruzan y agregan dentro de un único trabajo batch.\n\n¿Qué diseño se alinea mejor con las mejores prácticas de Spark Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Replicar el trabajo monolítico dentro de una sola consulta SQL gigante"
      },
      {
        "id": "b",
        "text": "Definir una tabla streaming Bronze para la ingesta cruda, una tabla streaming Silver para los datos limpios y una vista materializada Gold para los reportes agregados"
      },
      {
        "id": "c",
        "text": "Utilizar tres vistas temporales separadas que se reejecutan en cada consulta"
      },
      {
        "id": "d",
        "text": "Cargar todos los datos directamente en una única tabla streaming Gold desde el almacenamiento cloud"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La separación en capas Medallion desacopla la ingesta de las transformaciones de negocio: Bronze ingiere incrementalmente sin pérdida, Silver limpia y estandariza, y Gold consolida métricas para el consumo analítico.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-dea-59",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What does the AUTO CDC INTO syntax in Lakeflow Declarative Pipelines do?",
    "options": [
      {
        "id": "a",
        "text": "Automatically converts all CSV files into Parquet format"
      },
      {
        "id": "b",
        "text": "Simplifies change data capture by incrementally applying inserts, updates, and deletes from a change log into a target table"
      },
      {
        "id": "c",
        "text": "Automatically checks for compliance violations in Unity Catalog"
      },
      {
        "id": "d",
        "text": "Backs up tables to cold storage on a weekly basis"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "`APPLY CHANGES INTO` (and the declarative AUTO CDC syntax) processes CDC stream feeds, handling out-of-order records, updates, and deletes (SCD Type 1 and Type 2) seamlessly into target Delta tables.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Change Data Capture (AUTO CDC INTO)"
  },
  {
    "id": "db-dea-59-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función cumple la sintaxis AUTO CDC INTO (o APPLY CHANGES INTO) en Lakeflow Declarative Pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Convierte automáticamente todos los archivos CSV a formato Parquet"
      },
      {
        "id": "b",
        "text": "Simplifica la Captura de Datos de Cambio (CDC) aplicando de forma incremental inserciones, actualizaciones y eliminaciones desde un registro de cambios hacia una tabla de destino"
      },
      {
        "id": "c",
        "text": "Verifica automáticamente violaciones de cumplimiento en Unity Catalog"
      },
      {
        "id": "d",
        "text": "Respalda tablas en almacenamiento frío semanalmente"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La sintaxis de CDC automatizado (`APPLY CHANGES INTO`) resuelve la complejidad de procesar streams de transacciones (CDC), aplicando inserciones, updates y deletes automáticamente con soporte para SCD Tipo 1 y Tipo 2.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Captura de Datos de Cambio (AUTO CDC INTO)"
  },
  {
    "id": "db-dea-60",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Lakeflow Spark Declarative Pipelines, what is the primary purpose of adding expectations to datasets?",
    "options": [
      {
        "id": "a",
        "text": "To define cluster hardware settings"
      },
      {
        "id": "b",
        "text": "To configure external database credentials"
      },
      {
        "id": "c",
        "text": "To apply a data quality constraint that validates records during pipeline execution and optionally drops or fails on violations"
      },
      {
        "id": "d",
        "text": "To speed up query performance by caching data"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Expectations (`CONSTRAINT ... EXPECT ... [ON VIOLATION DROP ROW | FAIL UPDATE]`) enforce data quality rules natively in SQL/Python, logging metrics to the event log and controlling bad data handling.",
    "domain": "Data Transformation and Modeling",
    "subdomain": "Data Quality & Expectations"
  },
  {
    "id": "db-dea-60-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En Spark Declarative Pipelines, ¿cuál es el propósito primordial de agregar expectativas (expectations) a los conjuntos de datos?",
    "options": [
      {
        "id": "a",
        "text": "Definir la configuración de hardware de los clusters"
      },
      {
        "id": "b",
        "text": "Configurar las credenciales de bases de datos externas"
      },
      {
        "id": "c",
        "text": "Aplicar restricciones de calidad de datos que validan registros durante la ejecución y opcionalmente descartan filas o abortan el pipeline ante violaciones"
      },
      {
        "id": "d",
        "text": "Acelerar el rendimiento de consultas almacenando datos en caché"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Las expectativas permiten declarar reglas de calidad (`EXPECT (col > 0) ON VIOLATION DROP ROW / FAIL UPDATE`), registrando automáticamente el porcentaje de registros válidos y corruptos en el event log.",
    "domain": "Transformación y Modelado de Datos",
    "subdomain": "Calidad de Datos y Expectativas"
  },
  {
    "id": "db-dea-61",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the difference between a unit test and an integration test in a data pipeline context?",
    "options": [
      {
        "id": "a",
        "text": "Unit tests run on the cluster; integration tests run locally in the developer's IDE"
      },
      {
        "id": "b",
        "text": "Unit tests verify individual functions in isolation using synthetic data; integration tests verify that pipeline components work correctly together in a realistic environment"
      },
      {
        "id": "c",
        "text": "Unit tests check schema correctness only; integration tests check row counts only"
      },
      {
        "id": "d",
        "text": "Unit tests use pytest; integration tests must use unittest"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unit tests validate individual functions or transformations in isolation with small in-memory synthetic inputs. Integration tests execute across multiple pipeline stages or real infrastructure to verify end-to-end data flow and connectivity.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-dea-61-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia entre una prueba unitaria (unit test) y una prueba de integración (integration test) en el contexto de canalizaciones de datos?",
    "options": [
      {
        "id": "a",
        "text": "Las pruebas unitarias se ejecutan en el cluster; las pruebas de integración corren localmente en el IDE del desarrollador"
      },
      {
        "id": "b",
        "text": "Las pruebas unitarias verifican funciones individuales de forma aislada usando datos sintéticos; las pruebas de integración verifican que los componentes del pipeline funcionen coordinadamente en un entorno realista"
      },
      {
        "id": "c",
        "text": "Las pruebas unitarias comprueban únicamente esquemas; las pruebas de integración solo validan conteo de filas"
      },
      {
        "id": "d",
        "text": "Las pruebas unitarias exigen pytest; las pruebas de integración obligan a usar unittest"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las pruebas unitarias aíslan la lógica de transformación de dependencias externas evaluando funciones puras, mientras que las pruebas de integración validan la interoperabilidad entre capas, almacenes de datos y servicios.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-dea-62",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "After unit testing all helper functions, a team wants to validate that the bronze, silver, and gold tables produced by the end-to-end pipeline satisfy data-quality rules (no nulls in key columns, expected value ranges, expected row counts) every time the pipeline runs. They prefer to avoid writing extra setup and teardown code in python. What is the most effective approach?",
    "options": [
      {
        "id": "a",
        "text": "Write custom Bash assertions in a separate job cluster"
      },
      {
        "id": "b",
        "text": "Define expectations directly inside a declarative pipeline"
      },
      {
        "id": "c",
        "text": "Query the tables manually using SQL after each run"
      },
      {
        "id": "d",
        "text": "Export the Delta tables to external CSV files for verification"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Declarative expectations (`CONSTRAINT ... EXPECT ...`) integrate data-quality validation directly into pipeline definitions, automating row checks and logging quality metrics without requiring custom Python test harnesses.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-dea-62-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tras probar unitariamente las funciones auxiliares, un equipo desea validar que las tablas bronze, silver y gold cumplan reglas de calidad de datos (sin nulos en claves, rangos válidos, conteos esperados) en cada corrida, evitando escribir código complejo de configuración y limpieza en Python. ¿Cuál es el enfoque más eficaz?",
    "options": [
      {
        "id": "a",
        "text": "Escribir aserciones personalizadas en scripts de Bash en un cluster independiente"
      },
      {
        "id": "b",
        "text": "Definir expectativas (expectations) directamente dentro de la canalización declarativa"
      },
      {
        "id": "c",
        "text": "Consultar las tablas manualmente con SQL en el workspace tras cada ejecución"
      },
      {
        "id": "d",
        "text": "Exportar las tablas Delta a archivos CSV externos para revisarlas con scripts"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las expectativas nativas de Spark Declarative Pipelines permiten declarar reglas de calidad directamente en el DDL (`EXPECT`), ejecutándolas automáticamente en cada corrida con trazabilidad completa en el registro de eventos.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-dea-63",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a PySpark pipeline, the gold layer is created using a SQL function that performs aggregations and joins on silver tables. The team wants to test this logic using synthetic data. How should the function be designed to support this?",
    "options": [
      {
        "id": "a",
        "text": "Hardcode the production schema and table names inside the function body"
      },
      {
        "id": "b",
        "text": "A function can accept catalog, schema, and table names as parameters so the test can inject temporary test tables"
      },
      {
        "id": "c",
        "text": "Create duplicate production tables inside the test environment"
      },
      {
        "id": "d",
        "text": "Disable SQL query parsing during test runs"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Parameterizing target and source catalog, schema, and table names allows test suites to inject isolated test schemas or temporary in-memory views without touching production datasets.",
    "domain": "Implementing CI/CD",
    "subdomain": "Software Engineering & Modularization"
  },
  {
    "id": "db-dea-63-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En un pipeline de PySpark, la capa gold se crea mediante una función SQL que realiza agregaciones y cruces sobre tablas silver. El equipo desea probar esta lógica usando datos sintéticos. ¿Cómo debe diseñarse la función para permitirlo?",
    "options": [
      {
        "id": "a",
        "text": "Codificar en duro (hardcode) los nombres de tablas y esquemas de producción dentro de la función"
      },
      {
        "id": "b",
        "text": "Diseñar la función para que acepte nombres de catálogo, esquema y tablas como parámetros, permitiendo a la prueba inyectar tablas temporales de test"
      },
      {
        "id": "c",
        "text": "Clonar las tablas de producción completas dentro del entorno de pruebas"
      },
      {
        "id": "d",
        "text": "Desactivar la compilación de consultas SQL durante las corridas de prueba"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La inyección de dependencias mediante parámetros configurables para catálogos y esquemas permite a las pruebas unitarias e integrales ejecutar la misma lógica sobre tablas o vistas sintéticas temporales.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-dea-64",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following scenarios would integration testing catch that unit testing helper functions would likely miss?",
    "options": [
      {
        "id": "a",
        "text": "A syntax error inside a pure string cleaning function"
      },
      {
        "id": "b",
        "text": "A join condition in the pipeline that silently drops matching rows due to an unexpected type coercion between two production tables"
      },
      {
        "id": "c",
        "text": "A division-by-zero error in a local math helper function"
      },
      {
        "id": "d",
        "text": "A typo in a local variable name"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Type coercion mismatches across external datasets, catalog permission issues, and schema evolution anomalies only manifest when pipeline components interact with real table metadata during integration tests.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-dea-64-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes escenarios detectaría una prueba de integración que las pruebas unitarias de funciones auxiliares difícilmente identificarían?",
    "options": [
      {
        "id": "a",
        "text": "Un error de sintaxis dentro de una función pura de limpieza de cadenas"
      },
      {
        "id": "b",
        "text": "Una condición de JOIN en el pipeline que descarta filas coincidentes silenciosamente debido a una coerción de tipos inesperada entre dos tablas reales"
      },
      {
        "id": "c",
        "text": "Un error de división entre cero en una función matemática local"
      },
      {
        "id": "d",
        "text": "Una falta ortográfica en el nombre de una variable local"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las discrepancias de tipos de datos entre esquemas reales, desajustes de claves en cruces y permisos de almacenamiento solo se evidencian cuando los componentes se comunican entre sí en un entorno integrado.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-dea-65",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A pipeline must run the same transformation logic in development, staging, and production environments, but each environment uses different catalogs, schemas, and cloud storage paths. What is the best practice for managing these environment differences?",
    "options": [
      {
        "id": "a",
        "text": "Maintain separate Git branches with hardcoded paths for each environment"
      },
      {
        "id": "b",
        "text": "Parameterize the pipeline with configuration variables or bundle target settings"
      },
      {
        "id": "c",
        "text": "Manually modify notebook paths before deploying to production"
      },
      {
        "id": "d",
        "text": "Share a single production catalog across all development environments"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Using environment configurations (e.g. Databricks Asset Bundle targets or pipeline configuration parameters) allows the same versioned codebase to deploy cleanly to dev, staging, or prod without code changes.",
    "domain": "Implementing CI/CD",
    "subdomain": "Multi-Environment Deployment & Configuration"
  },
  {
    "id": "db-dea-65-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un pipeline debe ejecutar la misma lógica de transformación en desarrollo, staging y producción, pero cada entorno utiliza diferentes catálogos, esquemas y rutas cloud. ¿Cuál es la mejor práctica para gestionar estas diferencias?",
    "options": [
      {
        "id": "a",
        "text": "Mantener ramas de Git separadas con rutas fijas codificadas en duro para cada ambiente"
      },
      {
        "id": "b",
        "text": "Parametrizar el pipeline mediante variables de configuración o definiciones de target en bundles"
      },
      {
        "id": "c",
        "text": "Editar manualmente las rutas en los notebooks antes de desplegar en producción"
      },
      {
        "id": "d",
        "text": "Compartir un único catálogo de producción para todos los desarrolladores"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La separación entre código y configuración (principio de doce factores) mediante variables de entorno o targets de Databricks Asset Bundles garantiza despliegues reproducibles e inmutables.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Despliegue Multi-Entorno y Configuración"
  },
  {
    "id": "db-dea-66",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What happens when a unit test that uses assertDataFrameEqual fails?",
    "options": [
      {
        "id": "a",
        "text": "The cluster automatically reboots to resolve the failure"
      },
      {
        "id": "b",
        "text": "The test raises an error showing exactly which values, schemas, or row counts differ between the DataFrames"
      },
      {
        "id": "c",
        "text": "The assertion silently logs a warning and marks the test as passed"
      },
      {
        "id": "d",
        "text": "The test framework overwrites the expected DataFrame with the actual DataFrame"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "`pyspark.testing.assertDataFrameEqual` performs a thorough structural and value comparison, outputting rich failure diagnostics highlighting specific mismatched cells, schemas, or row disparities.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-dea-66-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sucede cuando falla una prueba unitaria que utiliza assertDataFrameEqual de PySpark?",
    "options": [
      {
        "id": "a",
        "text": "El cluster se reinicia automáticamente para intentar resolver la discrepancia"
      },
      {
        "id": "b",
        "text": "La prueba genera un error detallado que muestra exactamente qué valores, esquemas o conteos de filas difieren entre los DataFrames"
      },
      {
        "id": "c",
        "text": "La aserción registra un aviso en silencio y marca la prueba como aprobada"
      },
      {
        "id": "d",
        "text": "El framework de pruebas sobrescribe los datos esperados con los obtenidos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "`assertDataFrameEqual` compara rigurosamente esquemas, tipos y contenido celda por celda, imprimiendo un reporte visual de diferencias si los DataFrames no coinciden con precisión.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-dea-67",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A team currently builds and edits a multi-task job (unit test task, SDP pipeline task, downstream SQL alert task) directly in the Databricks Workspace UI. Which problem does this approach introduce, and how can it be resolved?",
    "options": [
      {
        "id": "a",
        "text": "The UI causes job runs to take twice as long; resolve by using interactive clusters"
      },
      {
        "id": "b",
        "text": "Manual UI changes lack version history and auditability; resolve by defining the job as code (for example, using an asset bundle) so changes can be tracked in version control, reviewed via pull requests, and deployed automatically via CI/CD"
      },
      {
        "id": "c",
        "text": "The UI limits jobs to only two tasks; resolve by upgrading to higher cluster tiers"
      },
      {
        "id": "d",
        "text": "The UI does not allow scheduling; resolve by writing cron triggers in python"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Managing workflows purely via UI point-and-click creates configuration drift and lack of auditability. Defining Jobs as Code via Databricks Asset Bundles (DABs) ensures version control, peer reviews, and automated CI/CD deployment.",
    "domain": "Implementing CI/CD",
    "subdomain": "CI/CD & Asset Bundles / Workflows as Code"
  },
  {
    "id": "db-dea-67-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un equipo crea y edita un job multi-tarea directamente en la interfaz web de Databricks. ¿Qué problema introduce este enfoque y cómo se resuelve?",
    "options": [
      {
        "id": "a",
        "text": "La interfaz web ralentiza las corridas al doble de tiempo; se resuelve usando clusters interactivos"
      },
      {
        "id": "b",
        "text": "Los cambios manuales carecen de historial y auditoría; se resuelve definiendo el job como código (por ejemplo, con un Databricks Asset Bundle) para rastrear cambios en Git, revisarlos vía PRs y desplegarlos con CI/CD"
      },
      {
        "id": "c",
        "text": "La interfaz web limita los jobs a un máximo de dos tareas; se resuelve aumentando la categoría del cluster"
      },
      {
        "id": "d",
        "text": "La UI impide programar horarios; se resuelve programando disparadores cron en scripts Python"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La administración manual por UI conduce a la divergencia de configuraciones (drift). Tratar los Workflows como Código (Databricks Asset Bundles) permite gobernanza, trazabilidad y despliegues automatizados con CI/CD.",
    "domain": "Implementación de CI/CD",
    "subdomain": "CI/CD y Paquetes de Activos / Workflows como Código"
  },
  {
    "id": "db-dea-68",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why is it better to use a small synthetic DataFrame created with spark.createDataFrame() rather than reading a sample from production storage in a unit test?",
    "options": [
      {
        "id": "a",
        "text": "Synthetic DataFrames isolate the test from external network, permissions, and data-drift issues, ensuring tests are deterministic and fast"
      },
      {
        "id": "b",
        "text": "Spark cannot create DataFrames from production storage during unit tests"
      },
      {
        "id": "c",
        "text": "Production storage charges per query, which violates testing policies"
      },
      {
        "id": "d",
        "text": "Synthetic DataFrames support more data types than Delta tables"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unit tests must be fast, deterministic, and self-contained. Synthetic DataFrames provide controlled inputs with known edge cases (nulls, empty strings) without external storage or network dependencies.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-dea-68-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué es mejor utilizar un DataFrame sintético pequeño creado con spark.createDataFrame() en lugar de leer una muestra de producción en una prueba unitaria?",
    "options": [
      {
        "id": "a",
        "text": "Los DataFrames sintéticos aíslan la prueba de problemas de red, permisos y variación de datos (data drift), garantizando pruebas rápidas y deterministas"
      },
      {
        "id": "b",
        "text": "Spark no puede crear DataFrames desde el almacenamiento de producción durante pruebas unitarias"
      },
      {
        "id": "c",
        "text": "El almacenamiento de producción factura por consulta, lo que incumple las políticas de testing"
      },
      {
        "id": "d",
        "text": "Los DataFrames sintéticos admiten más tipos de datos que las tablas Delta"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las pruebas unitarias deben ejecutarse en milisegundos y ser reproducibles. Los DataFrames sintéticos en memoria eliminan la volatilidad de datos externos y permiten modelar casos de borde deliberados.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-dea-69",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following BEST describes why a function that returns a Column expression (like col('price') * col('tax_rate')) is easier to test than a function that accepts and transforms an entire DataFrame?",
    "options": [
      {
        "id": "a",
        "text": "Column expressions bypass the Spark Catalyst optimizer entirely"
      },
      {
        "id": "b",
        "text": "Column expressions are composable and lazily evaluated, allowing verification with minimal overhead"
      },
      {
        "id": "c",
        "text": "DataFrame-level functions cannot be evaluated by pytest"
      },
      {
        "id": "d",
        "text": "Column expressions do not require an active SparkSession"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Column-level transformations are pure, composable logic that can be tested with minimal DataFrame construction overhead, promoting cleaner code reuse across diverse pipeline contexts.",
    "domain": "Implementing CI/CD",
    "subdomain": "Software Engineering & Modularization"
  },
  {
    "id": "db-dea-69-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes describe MEJOR por qué una función que devuelve una expresión de Columna (como col('price') * col('tax_rate')) es más fácil de probar que una que transforma un DataFrame completo?",
    "options": [
      {
        "id": "a",
        "text": "Las expresiones de Columna omiten por completo el optimizador Catalyst de Spark"
      },
      {
        "id": "b",
        "text": "Las expresiones de Columna son componibles y de evaluación perezosa, permitiendo verificación modular con mínima sobrecarga"
      },
      {
        "id": "c",
        "text": "Las funciones a nivel de DataFrame no pueden ser evaluadas por pytest"
      },
      {
        "id": "d",
        "text": "Las expresiones de Columna no requieren un SparkSession activo para definirse"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modularizar transformaciones en expresiones de columna (`Column -> Column`) fomenta funciones puras y reutilizables que pueden encadenarse con facilidad y verificarse de forma compacta.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-dea-70",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a Lakeflow Spark Declarative Pipeline, what are expectations primarily used for?",
    "options": [
      {
        "id": "a",
        "text": "Configuring cluster CPU and RAM limits"
      },
      {
        "id": "b",
        "text": "They enforce data quality rules on pipeline tables during execution and track quality metrics in the event log"
      },
      {
        "id": "c",
        "text": "Scheduling cron execution windows"
      },
      {
        "id": "d",
        "text": "Encrypting customer sensitive data at rest"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Expectations allow data engineers to define validation criteria directly on pipeline tables. During pipeline execution, records are evaluated against the expectation and metrics are automatically tracked.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-dea-70-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En un Lakeflow Spark Declarative Pipeline, ¿para qué se utilizan primordialmente las expectativas (expectations)?",
    "options": [
      {
        "id": "a",
        "text": "Configurar límites de CPU y memoria RAM en el cluster"
      },
      {
        "id": "b",
        "text": "Hacer cumplir reglas de calidad de datos en las tablas durante la ejecución y registrar métricas de calidad en el event log"
      },
      {
        "id": "c",
        "text": "Programar ventanas de ejecución cron"
      },
      {
        "id": "d",
        "text": "Cifrar datos sensibles de clientes en reposo"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las expectativas aplican filtros y validaciones de calidad de datos en tiempo de ejecución, permitiendo registrar advertencias, descartar filas inválidas o detener el pipeline ante anomalías.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-dea-71",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following BEST describes the role of the src/ folder in a modularized Databricks data engineering project?",
    "options": [
      {
        "id": "a",
        "text": "It stores temporary scratch files and ad-hoc notebooks"
      },
      {
        "id": "b",
        "text": "It contains production source code and helper functions, kept separate from test code and deployment assets"
      },
      {
        "id": "c",
        "text": "It holds compiled bytecode and external wheel dependencies"
      },
      {
        "id": "d",
        "text": "It is the staging directory for raw CSV downloads"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Following standard Python packaging and software engineering conventions, the `src/` directory isolates the core business logic, modules, and pipeline transformations from tests (`tests/`) and CI/CD deployment definitions.",
    "domain": "Implementing CI/CD",
    "subdomain": "Software Engineering & Modularization"
  },
  {
    "id": "db-dea-71-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes describe MEJOR el rol de la carpeta src/ en un proyecto modularizado de ingeniería de datos en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Almacenar archivos temporales y notebooks exploratorios ad-hoc"
      },
      {
        "id": "b",
        "text": "Contener el código fuente de producción y funciones auxiliares, manteniéndolo separado del código de pruebas y artefactos de despliegue"
      },
      {
        "id": "c",
        "text": "Guardar el bytecode compilado y dependencias wheel externas"
      },
      {
        "id": "d",
        "text": "Servir como directorio intermedio para descargas de archivos CSV crudos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La estructura estándar de software sitúa el código de producción en `src/`, separándolo cleanly de las suites de prueba en `tests/` y las configuraciones de CI/CD en `.github/` o `databricks.yml`.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-dea-72",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main advantage of creating a Databricks Workflow as code (e.g., using Databricks Asset Bundles or Terraform) rather than building it in the Databricks UI?",
    "options": [
      {
        "id": "a",
        "text": "It enables free cluster compute hours"
      },
      {
        "id": "b",
        "text": "The code can be version-controlled, parameterized, peer-reviewed, and deployed consistently across environments"
      },
      {
        "id": "c",
        "text": "It replaces the underlying Spark engine with a faster proprietary compiler"
      },
      {
        "id": "d",
        "text": "It eliminates the need for data quality expectations"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Workflows as Code enables software development lifecycle (SDLC) best practices: source versioning in Git, automated CI/CD testing, PR code reviews, and programmatic multi-environment deployments.",
    "domain": "Implementing CI/CD",
    "subdomain": "CI/CD & Asset Bundles / Workflows as Code"
  },
  {
    "id": "db-dea-72-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal ventaja de crear un Workflow de Databricks como código (por ejemplo, con Databricks Asset Bundles o Terraform) en lugar de construirlo en la UI?",
    "options": [
      {
        "id": "a",
        "text": "Otorga horas gratuitas de cómputo en el cluster"
      },
      {
        "id": "b",
        "text": "El código puede ser versionado en Git, parametrizado, revisado por pares y desplegado de forma consistente entre múltiples entornos"
      },
      {
        "id": "c",
        "text": "Reemplaza el motor Spark por un compilador propietario más rápido"
      },
      {
        "id": "d",
        "text": "Elimina la necesidad de aplicar expectativas de calidad de datos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Definir infraestructura y pipelines como código (IaC / DaC) habilita revisiones por pull request, gobernanza de cambios, automatización de pruebas y despliegues reproducibles sin intervención manual.",
    "domain": "Implementación de CI/CD",
    "subdomain": "CI/CD y Paquetes de Activos / Workflows como Código"
  },
  {
    "id": "db-dea-73",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is a Personal Access Token (PAT) used for when connecting Databricks to Git providers?",
    "options": [
      {
        "id": "a",
        "text": "It provides administrative root access to the underlying Linux virtual machine"
      },
      {
        "id": "b",
        "text": "It authenticates Databricks to perform Git operations (such as clone, pull, and commit) on the user's behalf"
      },
      {
        "id": "c",
        "text": "It bypasses all Unity Catalog table security rules"
      },
      {
        "id": "d",
        "text": "It is required to run serverless SQL warehouses"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "A Personal Access Token (PAT) from a Git provider (GitHub, GitLab, Azure DevOps) authorizes Databricks Git Folders to clone repositories, switch branches, pull updates, and push commits securely.",
    "domain": "Implementing CI/CD",
    "subdomain": "Version Control & Git Best Practices"
  },
  {
    "id": "db-dea-73-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Para qué se utiliza un Personal Access Token (PAT) al conectar Databricks con proveedores de Git?",
    "options": [
      {
        "id": "a",
        "text": "Proporcionar acceso root administrativo a la máquina virtual Linux subyacente"
      },
      {
        "id": "b",
        "text": "Autenticar a Databricks para realizar operaciones de Git (como clonar, hacer pull y commit) en nombre del usuario"
      },
      {
        "id": "c",
        "text": "Omitir todas las reglas de control de accesos de Unity Catalog"
      },
      {
        "id": "d",
        "text": "Es un requisito obligatorio para encender SQL Warehouses serverless"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El PAT de Git actúa como la credencial segura para que Databricks Git Folders interactúe con el repositorio remoto (GitHub, GitLab, Bitbucket) respetando los permisos del desarrollador.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Control de Versiones y Mejores Prácticas de Git"
  },
  {
    "id": "db-dea-74",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following is a direct benefit of modularizing code into separate Python files instead of keeping everything in one notebook?",
    "options": [
      {
        "id": "a",
        "text": "Clusters consume zero memory when running pure Python files"
      },
      {
        "id": "b",
        "text": "Team members can work on separate modules without merge conflicts, and individual modules can be imported and tested in isolation"
      },
      {
        "id": "c",
        "text": "It removes the need for Unity Catalog governance"
      },
      {
        "id": "d",
        "text": "PySpark execution speeds are quadrupled automatically"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modular Python packages facilitate clean collaboration, minimize Git merge conflicts, promote DRY (Don't Repeat Yourself) design, and enable automated unit testing using standard frameworks like pytest.",
    "domain": "Implementing CI/CD",
    "subdomain": "Software Engineering & Modularization"
  },
  {
    "id": "db-dea-74-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes es un beneficio directo de modularizar código en archivos Python separados en lugar de mantenerlo todo en un único notebook?",
    "options": [
      {
        "id": "a",
        "text": "Los clusters consumen cero memoria al ejecutar archivos Python puros"
      },
      {
        "id": "b",
        "text": "Los miembros del equipo pueden trabajar en módulos independientes sin conflictos de merge en Git, y los módulos individuales pueden importarse y probarse de forma aislada"
      },
      {
        "id": "c",
        "text": "Elimina la necesidad de aplicar gobernanza en Unity Catalog"
      },
      {
        "id": "d",
        "text": "La velocidad de ejecución de PySpark se cuadruplica automáticamente"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Descomponer la lógica en módulos (`.py`) evita colisiones en Git comunes en notebooks monolíticos y permite la reutilización directa y pruebas automatizadas con pytest.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-dea-75",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is a key drawback of using Databricks Jobs with notebook tasks for integration testing compared to running automated tests via CI/CD pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Notebook tasks cannot connect to Unity Catalog"
      },
      {
        "id": "b",
        "text": "Job-based tests require additional code for setup, teardown, and assertion reporting compared to standard test frameworks"
      },
      {
        "id": "c",
        "text": "Databricks Jobs do not support cluster autoscaling"
      },
      {
        "id": "d",
        "text": "Notebook tasks only run in read-only mode"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Notebooks lack native test runners like pytest fixtures, parameterized matrices, and standard xUnit reporting, requiring extensive boilerplate to manage test state, cleanup, and status reporting.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-dea-75-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una desventaja importante de utilizar Databricks Jobs con tareas de notebook para pruebas de integración en comparación con ejecutar pruebas automatizadas con pipelines CI/CD?",
    "options": [
      {
        "id": "a",
        "text": "Las tareas de notebook no pueden conectarse a Unity Catalog"
      },
      {
        "id": "b",
        "text": "Las pruebas basadas en notebooks requieren código adicional manual para preparación, limpieza (teardown) y reporte de aserciones en comparación con frameworks estándar"
      },
      {
        "id": "c",
        "text": "Databricks Jobs no admite escalado automático de clusters"
      },
      {
        "id": "d",
        "text": "Las tareas de notebook solo pueden ejecutarse en modo de solo lectura"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los notebooks no fueron diseñados como ejecutores de pruebas; carecen de fixtures nativos, parametrización limpia y recolección estandarizada de errores, requiriendo scripts complejos de soporte.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-dea-76",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A team has written a helper that maps a numeric column to a tier string (e.g., balance > 10000 -> 'Platinum'). To write a unit test for this helper using pytest, what is the best approach?",
    "options": [
      {
        "id": "a",
        "text": "Deploy the helper to production and monitor customer tier values"
      },
      {
        "id": "b",
        "text": "Build a small in-memory DataFrame using spark.createDataFrame(), pass it to the helper, and verify the result using assertDataFrameEqual()"
      },
      {
        "id": "c",
        "text": "Query the largest production Delta table and visually check the first 10 rows"
      },
      {
        "id": "d",
        "text": "Write the results to temporary CSV files on the local hard drive"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The standard pattern for PySpark unit testing creates a small test DataFrame representing boundary conditions, runs the transformation helper, and validates the output against an expected DataFrame using `assertDataFrameEqual`.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-dea-76-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un equipo ha escrito una función auxiliar que mapea una columna numérica a una categoría de cliente (por ejemplo, balance > 10000 -> 'Platinum'). Para escribir una prueba unitaria con pytest, ¿cuál es el mejor enfoque?",
    "options": [
      {
        "id": "a",
        "text": "Desplegar la función en producción y monitorear los valores de los clientes en vivo"
      },
      {
        "id": "b",
        "text": "Construir un pequeño DataFrame en memoria con spark.createDataFrame(), pasarlo a la función auxiliar y comprobar el resultado con assertDataFrameEqual()"
      },
      {
        "id": "c",
        "text": "Consultar la tabla Delta más grande de producción e inspeccionar visualmente las primeras 10 filas"
      },
      {
        "id": "d",
        "text": "Escribir los resultados en archivos CSV temporales en el disco duro local"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El estándar de oro en testing de PySpark consiste en generar datos sintéticos representativos en memoria, aplicar la transformación y verificar la equivalencia exacta con `assertDataFrameEqual`.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-dea-77",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why should unit test functions be named with the test_ prefix?",
    "options": [
      {
        "id": "a",
        "text": "It grants the function administrator privileges in the Databricks cluster"
      },
      {
        "id": "b",
        "text": "pytest uses naming conventions to automatically discover and run test functions without manual configuration"
      },
      {
        "id": "c",
        "text": "Python syntax requires test_ for any function that contains assertions"
      },
      {
        "id": "d",
        "text": "It prevents the function from being compiled into bytecode"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Pytest automatically identifies and executes test files matching `test_*.py` and test functions matching `test_*()` following Python testing discovery conventions.",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-dea-77-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué las funciones de prueba unitaria deben nombrarse con el prefijo test_?",
    "options": [
      {
        "id": "a",
        "text": "Otorga a la función privilegios de administrador en el cluster de Databricks"
      },
      {
        "id": "b",
        "text": "pytest utiliza esta convención de nomenclatura para descubrir y ejecutar automáticamente las funciones de prueba sin configuración manual"
      },
      {
        "id": "c",
        "text": "La sintaxis básica de Python exige test_ en cualquier función que contenga aserciones"
      },
      {
        "id": "d",
        "text": "Evita que la función sea compilada a bytecode"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El mecanismo de descubrimiento (test discovery) de pytest busca de forma predeterminada archivos y funciones que comiencen con `test_`, facilitando la automatización en CI/CD.",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-dea-78",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data engineer has built an ETL pipeline as one large notebook containing data ingestion, cleaning, transformation, and report generation. The pipeline fails occasionally, but finding the root cause is difficult. What should the engineer do first to make the pipeline more maintainable?",
    "options": [
      {
        "id": "a",
        "text": "Increase cluster size to prevent memory errors"
      },
      {
        "id": "b",
        "text": "Refactor the transformation logic into small reusable functions located in separate Python files"
      },
      {
        "id": "c",
        "text": "Combine the notebook with other notebooks into an even larger master script"
      },
      {
        "id": "d",
        "text": "Convert the entire pipeline to single-threaded Bash commands"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Refactoring monolithic code into modular functions with single responsibilities makes each stage testable, isolates bugs, and simplifies debugging and ongoing maintenance.",
    "domain": "Implementing CI/CD",
    "subdomain": "Software Engineering & Modularization"
  },
  {
    "id": "db-dea-78-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un ingeniero de datos construyó una canalización ETL en un único notebook gigante que abarca ingesta, limpieza, transformación y reportes. La canalización falla ocasionalmente, pero aislar la causa raíz es complejo. ¿Qué debería hacer primero para hacerla mantenible?",
    "options": [
      {
        "id": "a",
        "text": "Aumentar el tamaño del cluster para disimular posibles fallas de memoria"
      },
      {
        "id": "b",
        "text": "Refactorizar la lógica de transformación en funciones pequeñas y reutilizables ubicadas en archivos Python independientes"
      },
      {
        "id": "c",
        "text": "Combinar el notebook con otros notebooks para crear un archivo maestro aún mayor"
      },
      {
        "id": "d",
        "text": "Convertir toda la canalización a scripts mono-hilo de Bash"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modularizar el código aplicando el principio de responsabilidad única (Single Responsibility Principle) permite probar cada componente por separado y localizar de inmediato el origen de los fallos.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-dea-79",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main reason to break a PySpark ETL pipeline into separate, modular functions?",
    "options": [
      {
        "id": "a",
        "text": "To circumvent Databricks licensing limitations"
      },
      {
        "id": "b",
        "text": "It makes each piece of logic easier to test, debug, reuse, and maintain independently"
      },
      {
        "id": "c",
        "text": "To enforce sequential single-threaded execution across worker nodes"
      },
      {
        "id": "d",
        "text": "To eliminate the need for Spark execution plans"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modular functions promote testability (functions can be unit tested without running the entire pipeline), reusability across jobs, maintainability, and clean team collaboration.",
    "domain": "Implementing CI/CD",
    "subdomain": "Software Engineering & Modularization"
  },
  {
    "id": "db-dea-79-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la razón principal para descomponer una canalización ETL de PySpark en funciones modulares separadas?",
    "options": [
      {
        "id": "a",
        "text": "Eludir restricciones de licenciamiento en Databricks"
      },
      {
        "id": "b",
        "text": "Hace que cada pieza de lógica sea más fácil de probar, depurar, reutilizar y mantener de manera independiente"
      },
      {
        "id": "c",
        "text": "Forzar ejecución secuencial de un solo hilo en los nodos worker"
      },
      {
        "id": "d",
        "text": "Eliminar la necesidad de compilar planes de ejecución en Spark"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La modularización permite validar componentes atómicos con pruebas unitarias, detectar regresiones velozmente y compartir utilidades comunes entre múltiples canalizaciones corporativas.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-dea-80",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A Lakeflow Spark Declarative Pipeline uses a target configuration that specifies the catalog and schema where output tables are written. Why is this important for DevOps workflows?",
    "options": [
      {
        "id": "a",
        "text": "It permanently locks table definitions so developers cannot change them"
      },
      {
        "id": "b",
        "text": "The same pipeline code can be deployed to dev, staging, or prod by simply overriding the target setting"
      },
      {
        "id": "c",
        "text": "It allows pipelines to run without a cluster"
      },
      {
        "id": "d",
        "text": "It automatically backs up tables to another cloud provider"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Separating target schema configuration from declarative table logic ensures that identical pipeline code is safely promoted across dev, staging, and prod environments simply by overriding target variables.",
    "domain": "Implementing CI/CD",
    "subdomain": "Multi-Environment Deployment & Configuration"
  },
  {
    "id": "db-dea-80-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un Lakeflow Spark Declarative Pipeline utiliza una configuración de 'target' que especifica el catálogo y esquema donde se escriben las tablas de salida. ¿Por qué es esto crucial para los flujos de trabajo DevOps?",
    "options": [
      {
        "id": "a",
        "text": "Bloquea permanentemente las definiciones de tablas para impedir modificaciones"
      },
      {
        "id": "b",
        "text": "El mismo código del pipeline puede desplegarse en desarrollo, staging o producción simplemente sobreescribiendo el parámetro de target"
      },
      {
        "id": "c",
        "text": "Permite que las canalizaciones se ejecuten sin requerir un cluster de cómputo"
      },
      {
        "id": "d",
        "text": "Respalda automáticamente las tablas en otro proveedor de nube"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El parámetro de target desacopla la ubicación física del destino de la definición de transformaciones, posibilitando la promoción continua de código inmutable a través de los diferentes entornos.",
    "domain": "Implementación de CI/CD",
    "subdomain": "Despliegue Multi-Entorno y Configuración"
  },
  {
    "id": "db-dea-81",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Troubleshooting, Monitoring, and Optimization",
    "subdomain": "Spark UI & Data Skew",
    "type": "single_choice",
    "prompt": "**[Official Exam Question 1]** A data engineer notices a batch job's duration has doubled after a new data source was onboarded. In the Spark UI, the longest stage shows that most tasks finish in under 30 seconds, but one task takes over 10 minutes. The stage's task summary shows Min/Median shuffle read near 400 MB while Max shuffle read exceeds 5 GB.\n\nWhich solution reduces the job runtime?",
    "options": [
      {
        "id": "a",
        "text": "Increase cluster size to add more executors so the slow task finishes faster"
      },
      {
        "id": "b",
        "text": "Confirm adaptive query execution with skew join handling is active to automatically split the oversized partition at runtime"
      },
      {
        "id": "c",
        "text": "Reduce `spark.sql.shuffle.partitions` to coalesce more work into fewer tasks"
      },
      {
        "id": "d",
        "text": "Manually repartition the dataset using a salt key before the join to distribute skewed keys evenly"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Adaptive Query Execution (AQE) skew join handling (`spark.sql.adaptive.skewJoin.enabled = true`) automatically splits oversized partitions into smaller sub-partitions at runtime, resolving task stragglers caused by data skew without code changes or manual salting."
  },
  {
    "id": "db-dea-82",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Delta Lake & Architecture",
    "type": "single_choice",
    "prompt": "**[Official Exam Question 2]** A data engineer requires rapid iteration on pipelines while maintaining reliable rollbacks after bad ingests, ensuring audit trails for regulatory compliance, and providing consistent access to a single source of truth for both AI and BI workloads.\n\nWhich strategy should the data engineer use to meet these requirements?",
    "options": [
      {
        "id": "a",
        "text": "DBFS CSV storage with manual file versioning and nightly copies for rollback."
      },
      {
        "id": "b",
        "text": "Delta Lake ACID transactions and time travel, governed by Unity Catalog for consistent access and lineage."
      },
      {
        "id": "c",
        "text": "Cloud object storage only, with ad hoc SQL queries for recovery and governance."
      },
      {
        "id": "d",
        "text": "Ephemeral in-memory DataFrames for audit trails and BI distribution."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Delta Lake provides ACID transactions, audit logging via transaction logs (`_delta_log`), and time travel for instantaneous rollbacks. Governing Delta tables with Unity Catalog provides centralized access control and complete lineage across AI and BI workloads."
  },
  {
    "id": "db-dea-83",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Data Ingestion and Loading",
    "subdomain": "Cloud Object Storage & Ingestion Patterns",
    "type": "single_choice",
    "prompt": "**[Official Exam Question 3]** A data engineer is building downstream pipelines to consume Databricks audit logs from a customer-owned S3 bucket. Before implementing schema inference and checkpointing, they want to understand the delivery format, typical ingestion latency, and whether files may be overwritten.\n\nWhat is Databricks audit log storage behavior?",
    "options": [
      {
        "id": "a",
        "text": "Files are delivered as JSON with typical event logging under 15 minutes after delivery begins, and new deliveries can overwrite existing files"
      },
      {
        "id": "b",
        "text": "Files are delivered as CSV with sub-minute latency guarantees, and overwrites never occur once a file is written to preserve immutability"
      },
      {
        "id": "c",
        "text": "Files are delivered as Parquet with eventual consistency beyond 24 hours, and overwrites are disabled to simplify streaming ingestion"
      },
      {
        "id": "d",
        "text": "Files are delivered as JSON with delivery on a weekly batch cadence, and overwrites replace prior content completely without appending"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Databricks audit logs delivered to customer cloud storage are formatted as compressed JSON files. Events appear within approximately 15 minutes, and delivery batches can overwrite files with additional event data, requiring downstream pipelines to handle idempotency."
  },
  {
    "id": "db-dea-84",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Databricks Intelligence Platform",
    "subdomain": "Compute & Cluster Types",
    "type": "single_choice",
    "prompt": "**[Official Exam Question 4]** A data engineering team supports multiple business analysts who run ad hoc SQL queries throughout the day on curated Delta tables. The team needs to ensure efficient query performance, fast cluster startup, and support for multiple simultaneous users, while managing cost by avoiding unnecessary scaling to very large clusters.\n\nWhich cluster configuration meets these requirements?",
    "options": [
      {
        "id": "a",
        "text": "A job cluster with autoscaling designed for scheduled ETL workflows"
      },
      {
        "id": "b",
        "text": "An all-purpose cluster configured with a fixed number of worker nodes"
      },
      {
        "id": "c",
        "text": "A high-concurrency cluster with autoscaling enabled"
      },
      {
        "id": "d",
        "text": "A single-node cluster configured for lightweight development tasks"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "A High-Concurrency cluster (or modern Serverless SQL Warehouse / Shared access cluster) provides user isolation and concurrent query execution for multiple analysts, while autoscaling allocates resources dynamically according to query load to minimize costs."
  },
  {
    "id": "db-dea-85",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Implementing CI/CD",
    "subdomain": "Databricks Asset Bundles (DABs)",
    "type": "single_choice",
    "prompt": "**[Official Exam Question 5]** A team wants a modular way to deploy, version, and orchestrate ETL pipelines in Databricks—enabling CI/CD and repeatability.\n\nWhich feature supports this requirement?",
    "options": [
      {
        "id": "a",
        "text": "Use models in Unity Catalog to represent ETL jobs, where each model stores the pipeline code artifact and CI/CD promotes versions by updating model aliases tied to Job tasks."
      },
      {
        "id": "b",
        "text": "Package transformation logic as wheel libraries stored in Unity Catalog Volumes and bind them to Jobs tasks to ensure deterministic deployment across environments."
      },
      {
        "id": "c",
        "text": "Package API logic inside a Volume-mounted notebook, and use Jobs API v2 to trigger the notebook, depending on notebook revision history to act as a versioning system."
      },
      {
        "id": "d",
        "text": "Use DABs to define resources and code assets, version them in Git, and promote deployments across environments through automated CI/CD actions."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Databricks Asset Bundles (DABs) allow engineers to define infrastructure, pipelines, and workflows as code (`databricks.yml`). Bundles are version-controlled in Git and deployed deterministically across environments (dev, test, prod) via automated CI/CD workflows."
  },
  {
    "id": "db-dea-81-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Resolución de Problemas, Monitoreo y Optimización",
    "subdomain": "Spark UI y Sesgo de Datos (Data Skew)",
    "type": "single_choice",
    "prompt": "**[Pregunta Oficial de Examen 1]** Un ingeniero de datos nota que la duración de un trabajo por lotes (batch) se ha duplicado tras incorporar una nueva fuente de datos. En la interfaz de Spark (Spark UI), la etapa más larga muestra que la mayoría de las tareas terminan en menos de 30 segundos, pero una tarea tarda más de 10 minutos. El resumen de tareas de la etapa muestra una lectura de shuffle Mín/Mediana cercana a 400 MB, mientras que la lectura máxima de shuffle supera los 5 GB.\n\n¿Qué solución reduce el tiempo de ejecución del trabajo?",
    "options": [
      {
        "id": "a",
        "text": "Aumentar el tamaño del clúster agregando más ejecutores para que la tarea lenta termine más rápido"
      },
      {
        "id": "b",
        "text": "Confirmar que la ejecución adaptable de consultas (AQE) con manejo de sesgo en joins esté activa para dividir automáticamente la partición sobredimensionada en tiempo de ejecución"
      },
      {
        "id": "c",
        "text": "Reducir `spark.sql.shuffle.partitions` para fusionar más trabajo en menos tareas"
      },
      {
        "id": "d",
        "text": "Reparticionar manualmente el conjunto de datos usando una clave de sal (salt key) antes del join para distribuir equitativamente las claves sesgadas"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El manejo de joins sesgados en la Ejecución Adaptable de Consultas (AQE, `spark.sql.adaptive.skewJoin.enabled = true`) divide automáticamente las particiones sobredimensionadas en subparticiones más pequeñas en tiempo de ejecución, eliminando las tareas rezagadas (stragglers) causadas por el sesgo sin requerir cambios de código o salting manual."
  },
  {
    "id": "db-dea-82-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Delta Lake y Arquitectura",
    "type": "single_choice",
    "prompt": "**[Pregunta Oficial de Examen 2]** Un ingeniero de datos requiere una iteración rápida en los pipelines manteniendo rollbacks confiables tras ingestas erróneas, garantizando pistas de auditoría para cumplimiento normativo y proporcionando acceso consistente a una única fuente de verdad tanto para cargas de trabajo de IA como de BI.\n\n¿Qué estrategia debe utilizar el ingeniero de datos para cumplir con estos requerimientos?",
    "options": [
      {
        "id": "a",
        "text": "Almacenamiento CSV en DBFS con versionado manual de archivos y copias nocturnas para rollback."
      },
      {
        "id": "b",
        "text": "Transacciones ACID y viaje en el tiempo (time travel) de Delta Lake, gobernados por Unity Catalog para acceso consistente y linaje."
      },
      {
        "id": "c",
        "text": "Almacenamiento de objetos en la nube únicamente, con consultas SQL ad hoc para recuperación y gobernanza."
      },
      {
        "id": "d",
        "text": "DataFrames efímeros en memoria para pistas de auditoría y distribución hacia herramientas de BI."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Delta Lake proporciona transacciones ACID, registro de auditoría a través de registros de transacciones (`_delta_log`) y viaje en el tiempo para rollbacks instantáneos. Gobernar las tablas Delta con Unity Catalog brinda control de acceso centralizado y linaje completo en cargas de trabajo de IA y BI."
  },
  {
    "id": "db-dea-83-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Ingesta y Carga de Datos",
    "subdomain": "Almacenamiento de Objetos en Nube y Patrones de Ingesta",
    "type": "single_choice",
    "prompt": "**[Pregunta Oficial de Examen 3]** Un ingeniero de datos está construyendo pipelines descendentes para consumir los registros de auditoría de Databricks desde un bucket S3 propiedad del cliente. Antes de implementar la inferencia de esquemas y el checkpointing, desea comprender el formato de entrega, la latencia típica de ingesta y si los archivos pueden sobrescribirse.\n\n¿Cuál es el comportamiento de almacenamiento de los registros de auditoría de Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Los archivos se entregan como JSON con registro de eventos típico en menos de 15 minutos tras iniciar la entrega, y las nuevas entregas pueden sobrescribir archivos existentes"
      },
      {
        "id": "b",
        "text": "Los archivos se entregan como CSV con garantías de latencia subminuto, y las sobrescrituras nunca ocurren una vez que se escribe un archivo para preservar la inmutabilidad"
      },
      {
        "id": "c",
        "text": "Los archivos se entregan como Parquet con consistencia eventual superior a 24 horas, y las sobrescrituras están deshabilitadas para simplificar la ingesta streaming"
      },
      {
        "id": "d",
        "text": "Los archivos se entregan como JSON con una cadencia de lote semanal, y las sobrescrituras reemplazan por completo el contenido previo sin anexar"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los registros de auditoría de Databricks exportados al almacenamiento en nube del cliente se entregan en formato JSON comprimido. Los eventos aparecen típicamente en 15 minutos y las entregas pueden sobrescribir archivos existentes con lotes de eventos consolidados, exigiendo que los pipelines manejen idempotencia."
  },
  {
    "id": "db-dea-84-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Plataforma de Inteligencia Databricks",
    "subdomain": "Cómputo y Tipos de Clúster",
    "type": "single_choice",
    "prompt": "**[Pregunta Oficial de Examen 4]** Un equipo de ingeniería de datos brinda soporte a múltiples analistas de negocio que ejecutan consultas SQL ad hoc a lo largo del día sobre tablas Delta curadas. El equipo necesita garantizar un rendimiento eficiente en las consultas, inicio rápido de clústeres y soporte para múltiples usuarios simultáneos, controlando los costos al evitar el escalado innecesario a clústeres excesivamente grandes.\n\n¿Qué configuración de clúster cumple con estos requerimientos?",
    "options": [
      {
        "id": "a",
        "text": "Un clúster de tipo Job con autoescalado diseñado para flujos de trabajo ETL programados"
      },
      {
        "id": "b",
        "text": "Un clúster All-Purpose configurado con un número fijo de nodos trabajadores"
      },
      {
        "id": "c",
        "text": "Un clúster de Alta Concurrencia (High-Concurrency) con autoescalado habilitado"
      },
      {
        "id": "d",
        "text": "Un clúster de nodo único (single-node) configurado para tareas de desarrollo livianas"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Un clúster de Alta Concurrencia (o un SQL Warehouse Serverless / clúster de acceso compartido moderno) proporciona aislamiento de usuarios y ejecución simultánea de consultas para múltiples analistas, mientras que el autoescalado asigna recursos de forma dinámica según la demanda para minimizar costos."
  },
  {
    "id": "db-dea-85-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Implementación de CI/CD",
    "subdomain": "Databricks Asset Bundles (DABs)",
    "type": "single_choice",
    "prompt": "**[Pregunta Oficial de Examen 5]** Un equipo busca una forma modular de desplegar, versionar y orquestar pipelines ETL en Databricks, facilitando CI/CD y repetibilidad.\n\n¿Qué funcionalidad soporta este requerimiento?",
    "options": [
      {
        "id": "a",
        "text": "Usar modelos en Unity Catalog para representar trabajos ETL, donde cada modelo almacena el código del pipeline y CI/CD promueve versiones actualizando alias asociados a las tareas."
      },
      {
        "id": "b",
        "text": "Empaquetar la lógica de transformación como librerías wheel almacenadas en Volúmenes de Unity Catalog y vincularlas a tareas de Jobs para garantizar despliegues deterministas entre entornos."
      },
      {
        "id": "c",
        "text": "Empaquetar la lógica de API dentro de un notebook montado en un Volumen, y usar Jobs API v2 para dispararlo dependiendo del historial de revisiones del notebook como sistema de versiones."
      },
      {
        "id": "d",
        "text": "Usar DABs para definir recursos y código como activos, versionarlos en Git y promover despliegues entre entornos mediante acciones automatizadas de CI/CD."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Databricks Asset Bundles (DABs) permiten definir infraestructura, pipelines y workflows como código (`databricks.yml`). Los paquetes se controlan en Git y se despliegan de forma reproducible entre entornos (dev, test, prod) mediante flujos de trabajo automatizados de CI/CD con la CLI de Databricks."
  },
  {
    "id": "db-dea-86",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Managed vs External Tables",
    "type": "single_choice",
    "prompt": "A data engineer runs the command `DROP TABLE main.finance.invoices;`. The table was defined as a **Managed Table** in Unity Catalog.\n\nWhat happens to the underlying data files and the metadata in Unity Catalog?",
    "options": [
      {
        "id": "a",
        "text": "Only the metadata is deleted from Unity Catalog; data files remain untouched in cloud storage"
      },
      {
        "id": "b",
        "text": "Both the metadata in Unity Catalog and the underlying data files stored in the managed cloud container are permanently deleted"
      },
      {
        "id": "c",
        "text": "The table is converted into an external table and moved to a quarantine schema"
      },
      {
        "id": "d",
        "text": "Data files are moved to the root DBFS directory and retained for 30 days"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "For Unity Catalog Managed Tables, Databricks manages both the table lifecycle and underlying storage. Dropping a managed table deletes both its metadata and the underlying data files from the storage credential location after the retention period."
  },
  {
    "id": "db-dea-87",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "External Tables & Locations",
    "type": "single_choice",
    "prompt": "A data engineer runs `DROP TABLE main.marketing.leads;`. The table was created with `CREATE TABLE ... LOCATION 'abfss://marketing@storage.dfs.core.windows.net/leads'`.\n\nWhat is the result of dropping this **External Table**?",
    "options": [
      {
        "id": "a",
        "text": "Both metadata and the underlying raw data files in Azure Data Lake Storage are permanently deleted"
      },
      {
        "id": "b",
        "text": "Only the metadata registration in Unity Catalog is deleted; the underlying cloud storage files remain intact at the cloud path"
      },
      {
        "id": "c",
        "text": "The command fails with an ACCESS_DENIED error because external locations cannot be dropped via SQL"
      },
      {
        "id": "d",
        "text": "The files are archived into a Unity Catalog managed volume"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "When dropping an External Table in Unity Catalog, only the metadata entry in the metastore is dropped. The actual data files in the external cloud storage path remain untouched and can be re-registered at any time."
  },
  {
    "id": "db-dea-88",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Unity Catalog Privilege Hierarchy",
    "type": "single_choice",
    "prompt": "A data analyst needs to query tables in the schema `prod.sales`. The administrator runs:\n`GRANT SELECT ON SCHEMA prod.sales TO `analysts`;`\nHowever, the analysts still receive an `ACCESS_DENIED` permission error when trying to run queries.\n\nWhich additional privilege must be granted to the analysts?",
    "options": [
      {
        "id": "a",
        "text": "GRANT ALL PRIVILEGES ON TABLE sales.orders"
      },
      {
        "id": "b",
        "text": "GRANT USAGE ON CATALOG prod AND GRANT USAGE ON SCHEMA prod.sales"
      },
      {
        "id": "c",
        "text": "GRANT MODIFY ON METASTORE"
      },
      {
        "id": "d",
        "text": "GRANT READ FILES ON LOCATION"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "In Unity Catalog, securable objects follow a strict 3-level containment hierarchy. To access any table within a schema, users must possess the `USAGE` privilege on both the parent Catalog and the parent Schema in addition to `SELECT` on the table/schema."
  },
  {
    "id": "db-dea-89",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Dynamic Views & Row-Level Security",
    "type": "single_choice",
    "prompt": "A healthcare company must ensure that doctors only see patient records from their assigned hospital facility, while hospital administrators can see all records. Which Unity Catalog feature enables this requirement without creating redundant tables?",
    "options": [
      {
        "id": "a",
        "text": "Creating an external table with separate sub-directories for each hospital facility"
      },
      {
        "id": "b",
        "text": "Creating a Dynamic View with a WHERE clause using `is_account_group_member('admins') OR facility_id = current_user_facility()`"
      },
      {
        "id": "c",
        "text": "Using separate Databricks workspaces for each doctor with isolated metastores"
      },
      {
        "id": "d",
        "text": "Partitioning the Delta table by doctor username"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Dynamic Views in Unity Catalog allow fine-grained row-level security (RLS) by leveraging built-in session functions such as `current_user()` and `is_account_group_member()`, dynamically filtering records at query runtime based on the caller's identity."
  },
  {
    "id": "db-dea-90",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Column Masking",
    "type": "single_choice",
    "prompt": "Which SQL syntax correctly creates and applies a column mask in Unity Catalog so that users outside the `compliance_team` group see masked email addresses?",
    "options": [
      {
        "id": "a",
        "text": "`ALTER TABLE customers ALTER COLUMN email SET MASK email_mask_fn();`"
      },
      {
        "id": "b",
        "text": "`CREATE FUNCTION email_mask(email STRING) RETURNS STRING RETURN CASE WHEN is_account_group_member('compliance_team') THEN email ELSE '***MASKED***' END;` followed by `ALTER TABLE customers ALTER COLUMN email SET MASK email_mask;`"
      },
      {
        "id": "c",
        "text": "`GRANT MASK(email) ON TABLE customers TO compliance_team;`"
      },
      {
        "id": "d",
        "text": "`ENCRYPT COLUMN email ON TABLE customers WITH KEY compliance_key;`"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unity Catalog column masking uses SQL User Defined Functions (UDFs). You first define a scalar UDF returning the masked/unmasked value based on group membership, and then attach it to the column using `ALTER TABLE <table_name> ALTER COLUMN <col> SET MASK <function_name>;`."
  },
  {
    "id": "db-dea-91",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Storage Credentials & External Locations",
    "type": "single_choice",
    "prompt": "What is the security best practice for connecting Databricks to cloud object storage (AWS S3, Azure Data Lake, Google Cloud Storage) under Unity Catalog governance?",
    "options": [
      {
        "id": "a",
        "text": "Hardcode cloud access keys or SAS tokens directly inside notebook source code"
      },
      {
        "id": "b",
        "text": "Define Storage Credentials referencing cloud IAM managed identities or instance profiles, and create External Locations bound to those credentials"
      },
      {
        "id": "c",
        "text": "Store credentials in DBFS root in an unencrypted plaintext file"
      },
      {
        "id": "d",
        "text": "Configure all cluster worker nodes with public Internet IP addresses and bypass IAM"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unity Catalog provides Storage Credentials (which encapsulate cloud IAM roles/identities) and External Locations (which bind a storage credential to a specific cloud storage URI). This prevents leaking storage keys and enforces centralized ACLs on cloud paths."
  },
  {
    "id": "db-dea-92",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Unity Catalog Volumes",
    "type": "single_choice",
    "prompt": "A data engineering team needs to govern unstructured files (PDF reports, video recordings, model artifacts) using Unity Catalog ACLs. Which object type in Unity Catalog represents a logical volume of storage for non-tabular data?",
    "options": [
      {
        "id": "a",
        "text": "Unity Catalog Schema"
      },
      {
        "id": "b",
        "text": "Unity Catalog Volume"
      },
      {
        "id": "c",
        "text": "Unity Catalog Lakehouse Queue"
      },
      {
        "id": "d",
        "text": "Delta Live File"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unity Catalog Volumes are first-class securable objects that govern non-tabular data (such as raw files, CSVs, images, PDFs, models). Volumes support POSIX-like file paths (`/Volumes/catalog/schema/volume_name/file.ext`) with standard GRANT/REVOKE permissions."
  },
  {
    "id": "db-dea-93",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Data Lineage in Unity Catalog",
    "type": "single_choice",
    "prompt": "How does Unity Catalog capture and display end-to-end data lineage across tables, columns, notebooks, workflows, and dashboards?",
    "options": [
      {
        "id": "a",
        "text": "Engineers must manually document lineage by populating a custom tracking table after every pipeline run"
      },
      {
        "id": "b",
        "text": "Lineage is automatically captured at runtime down to the column level for any queries, Spark DataFrames, and Lakeflow pipelines executed on Unity Catalog-enabled compute"
      },
      {
        "id": "c",
        "text": "Lineage is only available when using third-party commercial governance agents"
      },
      {
        "id": "d",
        "text": "Lineage requires nightly batch scraping of git repositories"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unity Catalog automatically captures table-level and column-level lineage in real time as queries run across SQL Warehouses, Lakeflow pipelines, and cluster compute, visualizing downstream and upstream dependencies in the Catalog Explorer UI."
  },
  {
    "id": "db-dea-94",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Attribute-Based Access Control (ABAC)",
    "type": "single_choice",
    "prompt": "An enterprise wants to enforce column masking on all columns across the entire organization tagged with `pii = true`, without needing to alter hundreds of individual tables manually. Which Unity Catalog feature provides this centralized enforcement?",
    "options": [
      {
        "id": "a",
        "text": "ABAC (Attribute-Based Access Control) tag-based policy"
      },
      {
        "id": "b",
        "text": "Single-node cluster bash scripts"
      },
      {
        "id": "c",
        "text": "Cron-scheduled CSV exports"
      },
      {
        "id": "d",
        "text": "Database trigger procedures"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog Tag-Based Masking (ABAC) allows administrators to assign tag-based policies at the metastore or catalog level. Any column tagged with a specific tag (e.g. `pii: true`) automatically inherits masking rules without modifying table DDL."
  },
  {
    "id": "db-dea-95",
    "courseId": "databricks-data-engineer-associate",
    "lang": "en",
    "domain": "Governance and Security",
    "subdomain": "Service Principals & CI/CD Authentication",
    "type": "single_choice",
    "prompt": "In an enterprise CI/CD pipeline deploying Lakeflow Jobs and DABs to production, which identity type should be used as the Run As owner of production jobs to avoid dependency on an individual developer's account?",
    "options": [
      {
        "id": "a",
        "text": "A designated personal user account of the lead data engineer"
      },
      {
        "id": "b",
        "text": "A Service Principal configured with OAuth machine-to-machine (M2M) credentials"
      },
      {
        "id": "c",
        "text": "The root account administrator username and password"
      },
      {
        "id": "d",
        "text": "An anonymous guest user"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Service Principals are non-human service identities recommended for automated workflows, CI/CD tools, and production jobs. Using OAuth M2M authentication with a Service Principal ensures job stability even when individual engineers leave the organization."
  },
  {
    "id": "db-dea-86-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Tablas Administradas vs Tablas Externas",
    "type": "single_choice",
    "prompt": "Un ingeniero de datos ejecuta el comando `DROP TABLE main.finance.invoices;`. La tabla fue definida como una **Tabla Administrada (Managed Table)** en Unity Catalog.\n\n¿Qué ocurre con los archivos de datos subyacentes y los metadatos en Unity Catalog?",
    "options": [
      {
        "id": "a",
        "text": "Solo se eliminan los metadatos de Unity Catalog; los archivos de datos permanecen intactos en el almacenamiento en nube"
      },
      {
        "id": "b",
        "text": "Tanto los metadatos en Unity Catalog como los archivos de datos subyacentes almacenados en el contenedor administrado se eliminan permanentemente"
      },
      {
        "id": "c",
        "text": "La tabla se convierte en una tabla externa y se traslada a un esquema de cuarentena"
      },
      {
        "id": "d",
        "text": "Los archivos de datos se mueven al directorio raíz DBFS y se retienen durante 30 días"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Para las tablas administradas (Managed Tables) en Unity Catalog, Databricks gestiona tanto el ciclo de vida de los metadatos como los archivos físicos. Al eliminar una tabla administrada con DROP, se eliminan tanto los metadatos como los archivos de datos subyacentes del almacenamiento."
  },
  {
    "id": "db-dea-87-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Tablas Externas y Ubicaciones Externas",
    "type": "single_choice",
    "prompt": "Un ingeniero de datos ejecuta `DROP TABLE main.marketing.leads;`. La tabla fue creada con `CREATE TABLE ... LOCATION 'abfss://marketing@storage.dfs.core.windows.net/leads'`.\n\n¿Cuál es el resultado de eliminar esta **Tabla Externa (External Table)**?",
    "options": [
      {
        "id": "a",
        "text": "Tanto los metadatos como los archivos de datos subyacentes en Azure Data Lake Storage se eliminan de forma permanente"
      },
      {
        "id": "b",
        "text": "Únicamente se elimina el registro de metadatos en Unity Catalog; los archivos físicos subyacentes permanecen intactos en la ruta de almacenamiento en nube"
      },
      {
        "id": "c",
        "text": "El comando falla con un error de ACCESS_DENIED porque las ubicaciones externas no se pueden eliminar mediante SQL"
      },
      {
        "id": "d",
        "text": "Los archivos se archivan en un volumen administrado de Unity Catalog"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al eliminar una tabla externa en Unity Catalog, solo se descarta la entrada de metadatos del catálogo. Los archivos de datos subyacentes en el almacenamiento en nube del cliente permanecen intactos y pueden volver a registrarse en cualquier momento."
  },
  {
    "id": "db-dea-88-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Jerarquía de Privilegios en Unity Catalog",
    "type": "single_choice",
    "prompt": "Un analista de datos necesita consultar tablas en el esquema `prod.sales`. El administrador ejecuta:\n`GRANT SELECT ON SCHEMA prod.sales TO `analysts`;`\nSin embargo, los analistas siguen recibiendo el error `ACCESS_DENIED` al intentar ejecutar consultas.\n\n¿Qué privilegio adicional obligatorio se debe otorgar a los analistas?",
    "options": [
      {
        "id": "a",
        "text": "GRANT ALL PRIVILEGES ON TABLE sales.orders"
      },
      {
        "id": "b",
        "text": "GRANT USAGE ON CATALOG prod Y GRANT USAGE ON SCHEMA prod.sales"
      },
      {
        "id": "c",
        "text": "GRANT MODIFY ON METASTORE"
      },
      {
        "id": "d",
        "text": "GRANT READ FILES ON LOCATION"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En Unity Catalog, los objetos protegibles siguen una estricta jerarquía de 3 niveles. Para consultar una tabla o esquema, el usuario requiere el privilegio `USAGE` en el Catálogo padre y en el Esquema padre, además de `SELECT` sobre el objeto."
  },
  {
    "id": "db-dea-89-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Vistas Dinámicas y Seguridad a Nivel de Fila (RLS)",
    "type": "single_choice",
    "prompt": "Una empresa de salud debe garantizar que los médicos solo vean los registros de pacientes de su centro hospitalario asignado, mientras que los administradores hospitalarios puedan ver todos los registros. ¿Qué característica de Unity Catalog permite cumplir con este requisito sin duplicar tablas?",
    "options": [
      {
        "id": "a",
        "text": "Crear una tabla externa con subdirectorios separados para cada centro hospitalario"
      },
      {
        "id": "b",
        "text": "Crear una Vista Dinámica con una cláusula WHERE que utilice `is_account_group_member('admins') OR facility_id = current_user_facility()`"
      },
      {
        "id": "c",
        "text": "Utilizar espacios de trabajo de Databricks independientes para cada médico con metastores aislados"
      },
      {
        "id": "d",
        "text": "Particionar la tabla Delta por el nombre de usuario del médico"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las Vistas Dinámicas en Unity Catalog permiten aplicar seguridad a nivel de fila (RLS) en tiempo de ejecución utilizando funciones de sesión integradas como `current_user()` e `is_account_group_member()`, filtrando datos de acuerdo con los privilegios del usuario solicitante."
  },
  {
    "id": "db-dea-90-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Enmascaramiento de Columnas (Column Masking)",
    "type": "single_choice",
    "prompt": "¿Qué sintaxis SQL define y aplica correctamente una máscara de columna en Unity Catalog para que los usuarios fuera del grupo `compliance_team` vean los correos enmascarados?",
    "options": [
      {
        "id": "a",
        "text": "`ALTER TABLE customers ALTER COLUMN email SET MASK email_mask_fn();`"
      },
      {
        "id": "b",
        "text": "`CREATE FUNCTION email_mask(email STRING) RETURNS STRING RETURN CASE WHEN is_account_group_member('compliance_team') THEN email ELSE '***MASKED***' END;` seguido de `ALTER TABLE customers ALTER COLUMN email SET MASK email_mask;`"
      },
      {
        "id": "c",
        "text": "`GRANT MASK(email) ON TABLE customers TO compliance_team;`"
      },
      {
        "id": "d",
        "text": "`ENCRYPT COLUMN email ON TABLE customers WITH KEY compliance_key;`"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El enmascaramiento de columnas en Unity Catalog utiliza funciones definidas por el usuario (UDFs). Se define una función escalar que evalúa la membresía del grupo y luego se asocia a la columna deseada mediante `ALTER TABLE <tabla> ALTER COLUMN <col> SET MASK <funcion>;`."
  },
  {
    "id": "db-dea-91-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Credenciales de Almacenamiento y Ubicaciones Externas",
    "type": "single_choice",
    "prompt": "¿Cuál es la mejor práctica de seguridad para conectar Databricks con el almacenamiento de objetos en la nube (AWS S3, Azure ADLS, Google GCS) bajo la gobernanza de Unity Catalog?",
    "options": [
      {
        "id": "a",
        "text": "Escribir las claves de acceso de la nube o tokens SAS directamente dentro del código fuente de los notebooks"
      },
      {
        "id": "b",
        "text": "Definir Credenciales de Almacenamiento (Storage Credentials) que referencien identidades administradas o roles IAM de la nube, y crear Ubicaciones Externas (External Locations) vinculadas a ellas"
      },
      {
        "id": "c",
        "text": "Guardar las credenciales en la raíz de DBFS en un archivo de texto sin cifrar"
      },
      {
        "id": "d",
        "text": "Configurar todos los nodos trabajadores con direcciones IP públicas para omitir IAM"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unity Catalog desacopla el acceso mediante Storage Credentials (que encapsulan identidades administradas e IAM en la nube) y External Locations (que delimitan los URIs de almacenamiento autorizados). Esto evita la filtración de secretos y centraliza la auditoría."
  },
  {
    "id": "db-dea-92-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Volúmenes en Unity Catalog (Volumes)",
    "type": "single_choice",
    "prompt": "Un equipo de ingeniería de datos necesita gobernar archivos no estructurados (informes PDF, archivos de video, artefactos de modelos) con los permisos de Unity Catalog. ¿Qué tipo de objeto en Unity Catalog representa un volumen de almacenamiento para datos no tabulares?",
    "options": [
      {
        "id": "a",
        "text": "Esquema de Unity Catalog"
      },
      {
        "id": "b",
        "text": "Volumen de Unity Catalog (Volume)"
      },
      {
        "id": "c",
        "text": "Cola de Lakehouse (Lakehouse Queue)"
      },
      {
        "id": "d",
        "text": "Archivo Delta Live"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los Volúmenes de Unity Catalog son objetos protegibles de primer nivel que gestionan archivos no tabulares (imágenes, PDFs, CSVs brutos, modelos). Soportan rutas estilo POSIX (`/Volumes/catalog/schema/volume_name/file.ext`) con gobernanza unificada GRANT/REVOKE."
  },
  {
    "id": "db-dea-93-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Linaje de Datos en Unity Catalog",
    "type": "single_choice",
    "prompt": "¿Cómo captura y muestra Unity Catalog el linaje de datos de extremo a extremo entre tablas, columnas, notebooks, pipelines y dashboards?",
    "options": [
      {
        "id": "a",
        "text": "Los ingenieros deben documentar manualmente el linaje llenando una tabla personalizada tras cada ejecución"
      },
      {
        "id": "b",
        "text": "El linaje se captura automáticamente en tiempo de ejecución a nivel de tabla y columna para cualquier consulta, DataFrame de Spark y pipeline de Lakeflow ejecutado en cómputo con Unity Catalog"
      },
      {
        "id": "c",
        "text": "El linaje solo está disponible si se instalan agentes comerciales de terceros"
      },
      {
        "id": "d",
        "text": "El linaje requiere scripts nocturnos de scraping sobre los repositorios git"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unity Catalog captura de forma nativa y automática el linaje a nivel de columna y tabla en tiempo de ejecución, correlacionando lecturas y escrituras en pipelines, SQL Warehouses y notebooks para representarlo gráficamente en el Catalog Explorer."
  },
  {
    "id": "db-dea-94-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Control de Acceso Basado en Atributos (ABAC)",
    "type": "single_choice",
    "prompt": "Una organización desea aplicar enmascaramiento automático en todas las columnas etiquetadas con `pii = true` en todo el catálogo empresarial, sin tener que alterar cientos de tablas individualmente. ¿Qué funcionalidad de Unity Catalog proporciona esta gestión centralizada?",
    "options": [
      {
        "id": "a",
        "text": "Políticas de control de acceso basadas en etiquetas (ABAC tag-based policy)"
      },
      {
        "id": "b",
        "text": "Scripts en bash ejecutados en clústeres de nodo único"
      },
      {
        "id": "c",
        "text": "Exportaciones periódicas a CSV mediante cron"
      },
      {
        "id": "d",
        "text": "Procedimientos disparadores de base de datos"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las políticas basadas en etiquetas (ABAC) de Unity Catalog permiten a los administradores asociar reglas de enmascaramiento y filtrado directamente a etiquetas (tags). Cualquier columna marcada con la etiqueta hereda automáticamente la política sin modificar la tabla."
  },
  {
    "id": "db-dea-95-es",
    "courseId": "databricks-data-engineer-associate",
    "lang": "es",
    "domain": "Gobernanza y Seguridad",
    "subdomain": "Entidades de Servicio y Autenticación CI/CD",
    "type": "single_choice",
    "prompt": "En un pipeline de CI/CD empresarial que despliega Lakeflow Jobs y DABs a producción, ¿qué tipo de identidad debe configurarse como propietaria (Run As) de los trabajos en producción para no depender de la cuenta de un desarrollador individual?",
    "options": [
      {
        "id": "a",
        "text": "Una cuenta de usuario personal del ingeniero líder de datos"
      },
      {
        "id": "b",
        "text": "Una Entidad de Servicio (Service Principal) configurada con credenciales OAuth Machine-to-Machine (M2M)"
      },
      {
        "id": "c",
        "text": "El usuario y contraseña de administrador raíz de la cuenta"
      },
      {
        "id": "d",
        "text": "Un usuario invitado anónimo"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las Entidades de Servicio (Service Principals) son identidades no humanas recomendadas para automatizaciones, herramientas de CI/CD y trabajos en producción. Utilizan tokens OAuth M2M y garantizan que los flujos no se interrumpan si un empleado deja la empresa."
  }
];

  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(databricksDeaQuestions);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = databricksDeaQuestions;
  }
})();
