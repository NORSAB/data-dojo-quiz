window.questionsData = (window.questionsData || []).concat([
  {
    "id": "db-lakeflow-connect-1",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "File Ingestion & read_files"
  },
  {
    "id": "db-lakeflow-connect-1-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-lakeflow-connect-2",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Architecture & Medallion Design"
  },
  {
    "id": "db-lakeflow-connect-2-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-lakeflow-connect-3",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Schema Evolution & Rescued Data"
  },
  {
    "id": "db-lakeflow-connect-3-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Evolución de Esquema y Datos Rescatados"
  },
  {
    "id": "db-lakeflow-connect-4",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Auto Loader & Streaming Tables"
  },
  {
    "id": "db-lakeflow-connect-4-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Auto Loader y Tablas Streaming"
  },
  {
    "id": "db-lakeflow-connect-5",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-lakeflow-connect-5-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-lakeflow-connect-6",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "File Ingestion & read_files"
  },
  {
    "id": "db-lakeflow-connect-6-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-lakeflow-connect-7",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Architecture & Medallion Design"
  },
  {
    "id": "db-lakeflow-connect-7-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-lakeflow-connect-8",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Architecture & Medallion Design"
  },
  {
    "id": "db-lakeflow-connect-8-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-lakeflow-connect-9",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-lakeflow-connect-9-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-lakeflow-connect-10",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-lakeflow-connect-10-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-lakeflow-connect-11",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Auto Loader & Streaming Tables"
  },
  {
    "id": "db-lakeflow-connect-11-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Auto Loader y Tablas Streaming"
  },
  {
    "id": "db-lakeflow-connect-12",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Architecture & Medallion Design"
  },
  {
    "id": "db-lakeflow-connect-12-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-lakeflow-connect-13",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-lakeflow-connect-13-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect y Gateway"
  },
  {
    "id": "db-lakeflow-connect-14",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "File Ingestion & read_files"
  },
  {
    "id": "db-lakeflow-connect-14-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-lakeflow-connect-15",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Schema Evolution & Rescued Data"
  },
  {
    "id": "db-lakeflow-connect-15-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Evolución de Esquema y Datos Rescatados"
  },
  {
    "id": "db-lakeflow-connect-16",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Upsert & CDC (MERGE INTO)"
  },
  {
    "id": "db-lakeflow-connect-16-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Upsert y CDC (MERGE INTO)"
  },
  {
    "id": "db-lakeflow-connect-17",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Architecture & Medallion Design"
  },
  {
    "id": "db-lakeflow-connect-17-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Arquitectura y Diseño Medallion"
  },
  {
    "id": "db-lakeflow-connect-18",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Auto Loader & Streaming Tables"
  },
  {
    "id": "db-lakeflow-connect-18-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Auto Loader y Tablas Streaming"
  },
  {
    "id": "db-lakeflow-connect-19",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "File Ingestion & read_files"
  },
  {
    "id": "db-lakeflow-connect-19-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Ingesta de Archivos y read_files"
  },
  {
    "id": "db-lakeflow-connect-20",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect & Gateway"
  },
  {
    "id": "db-lakeflow-connect-20-es",
    "courseId": "databricks-lakeflow-connect",
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
    "domain": "Lakeflow Connect y Gateway"
  }
]);
