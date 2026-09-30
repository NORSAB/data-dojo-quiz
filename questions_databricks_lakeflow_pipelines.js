window.questionsData = (window.questionsData || []).concat([
  {
    "id": "db-lakeflow-pipelines-1",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-lakeflow-pipelines-1-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-lakeflow-pipelines-2",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-2-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-3",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Pipeline Execution & Event Log"
  },
  {
    "id": "db-lakeflow-pipelines-3-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Ejecución de Pipelines y Registro de Eventos"
  },
  {
    "id": "db-lakeflow-pipelines-4",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-lakeflow-pipelines-4-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-lakeflow-pipelines-5",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-5-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-6",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-6-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-7",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-7-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-8",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Materialized Views & Incremental Computation"
  },
  {
    "id": "db-lakeflow-pipelines-8-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Vistas Materializadas y Cómputo Incremental"
  },
  {
    "id": "db-lakeflow-pipelines-9",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Pipeline Execution & Event Log"
  },
  {
    "id": "db-lakeflow-pipelines-9-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Ejecución de Pipelines y Registro de Eventos"
  },
  {
    "id": "db-lakeflow-pipelines-10",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-10-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-11",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-lakeflow-pipelines-11-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-lakeflow-pipelines-12",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-lakeflow-pipelines-12-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-lakeflow-pipelines-13",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Streaming Tables & Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-13-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Tablas Streaming y Auto Loader"
  },
  {
    "id": "db-lakeflow-pipelines-14",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Materialized Views & Incremental Computation"
  },
  {
    "id": "db-lakeflow-pipelines-14-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Vistas Materializadas y Cómputo Incremental"
  },
  {
    "id": "db-lakeflow-pipelines-15",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-lakeflow-pipelines-15-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-lakeflow-pipelines-16",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-lakeflow-pipelines-16-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-lakeflow-pipelines-17",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Pipeline Execution & Event Log"
  },
  {
    "id": "db-lakeflow-pipelines-17-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Ejecución de Pipelines y Registro de Eventos"
  },
  {
    "id": "db-lakeflow-pipelines-18",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Declarative Framework & Architecture"
  },
  {
    "id": "db-lakeflow-pipelines-18-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Framework Declarativo y Arquitectura"
  },
  {
    "id": "db-lakeflow-pipelines-19",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Change Data Capture (AUTO CDC INTO)"
  },
  {
    "id": "db-lakeflow-pipelines-19-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Captura de Datos de Cambio (AUTO CDC INTO)"
  },
  {
    "id": "db-lakeflow-pipelines-20",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Data Quality & Expectations"
  },
  {
    "id": "db-lakeflow-pipelines-20-es",
    "courseId": "databricks-lakeflow-pipelines",
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
    "domain": "Calidad de Datos y Expectativas"
  }
]);
