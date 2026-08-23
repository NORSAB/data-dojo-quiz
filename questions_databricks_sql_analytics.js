window.questionsData = (window.questionsData || []).concat([
  // === SQL Analytics on Databricks — 20 Questions (EN + ES) ===

  // Q1
  {
    "id": "db-sqla-1",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In the Catalog Explorer, which metadata concept shows end-to-end flow of data?",
    "options": [
      { "id": "a", "text": "Query history" },
      { "id": "b", "text": "Object owner details" },
      { "id": "c", "text": "Data lineage" },
      { "id": "d", "text": "Data access controls" }
    ],
    "correctIds": ["c"],
    "explanation": "Data lineage in Catalog Explorer shows the end-to-end flow of data, tracking how data moves and transforms across tables, views, and pipelines.",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-1-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En el Catalog Explorer, ¿qué concepto de metadatos muestra el flujo de datos de extremo a extremo?",
    "options": [
      { "id": "a", "text": "Historial de consultas" },
      { "id": "b", "text": "Detalles del propietario del objeto" },
      { "id": "c", "text": "Linaje de datos" },
      { "id": "d", "text": "Controles de acceso a datos" }
    ],
    "correctIds": ["c"],
    "explanation": "El linaje de datos en Catalog Explorer muestra el flujo de extremo a extremo, rastreando cómo los datos se mueven y transforman entre tablas, vistas y pipelines.",
    "domain": "Unity Catalog & Governance"
  },

  // Q2
  {
    "id": "db-sqla-2",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How can you programmatically identify the owner of a Databricks object?",
    "options": [
      { "id": "a", "text": "DESCRIBE TABLE EXTENDED statement" },
      { "id": "b", "text": "SELECT * FROM INFORMATION_SCHEMA" },
      { "id": "c", "text": "SHOW SCHEMAS command" },
      { "id": "d", "text": "QUERY PERFORMANCE statement" }
    ],
    "correctIds": ["a"],
    "explanation": "DESCRIBE TABLE EXTENDED returns detailed metadata about a table, including its owner, location, schema, and other properties.",
    "domain": "SQL Fundamentals"
  },
  {
    "id": "db-sqla-2-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo puede identificar programáticamente al propietario de un objeto en Databricks?",
    "options": [
      { "id": "a", "text": "Sentencia DESCRIBE TABLE EXTENDED" },
      { "id": "b", "text": "SELECT * FROM INFORMATION_SCHEMA" },
      { "id": "c", "text": "Comando SHOW SCHEMAS" },
      { "id": "d", "text": "Sentencia QUERY PERFORMANCE" }
    ],
    "correctIds": ["a"],
    "explanation": "DESCRIBE TABLE EXTENDED devuelve metadatos detallados sobre una tabla, incluyendo su propietario, ubicación, esquema y otras propiedades.",
    "domain": "SQL Fundamentals"
  },

  // Q3
  {
    "id": "db-sqla-3",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the hierarchical structure of the Unity Catalog namespace?",
    "options": [
      { "id": "a", "text": "Catalog.Schema.Data object" },
      { "id": "b", "text": "Workspace.Table.Schema" },
      { "id": "c", "text": "Metastore.Schema.Catalog" },
      { "id": "d", "text": "Schema.Table.Catalog" }
    ],
    "correctIds": ["a"],
    "explanation": "Unity Catalog uses a three-level namespace: Catalog → Schema → Data object (table/view/function).",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-3-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la estructura jerárquica del namespace de Unity Catalog?",
    "options": [
      { "id": "a", "text": "Catalog.Schema.Objeto de datos" },
      { "id": "b", "text": "Workspace.Table.Schema" },
      { "id": "c", "text": "Metastore.Schema.Catalog" },
      { "id": "d", "text": "Schema.Table.Catalog" }
    ],
    "correctIds": ["a"],
    "explanation": "Unity Catalog usa un namespace de tres niveles: Catalog → Schema → Objeto de datos (tabla/vista/función).",
    "domain": "Unity Catalog & Governance"
  },

  // Q4
  {
    "id": "db-sqla-4",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a CSV file named customer_data.csv stored in a Unity Catalog volume at /Volumes/company/marketing/files/. The file includes a header row, and you want to create a table named customers from this file using read_files().\n\nWhich option correctly reads the CSV file and creates the table?",
    "options": [
      { "id": "a", "text": "CREATE TABLE customers AS\nSELECT * FROM read_files(\n'/Volumes/company/marketing/files/customer_data.csv',\nheader => true\n);" },
      { "id": "b", "text": "CREATE TABLE customers AS\nSELECT * FROM read_files(\n'/Volumes/company/marketing/files/customer_data.csv',\nheader = True\n);" },
      { "id": "c", "text": "COPY INTO customers\nFROM read_files('/Volumes/company/marketing/files/customer_data.csv')\nFILEFORMAT = CSV;" },
      { "id": "d", "text": "CREATE TABLE customers\nAS SELECT * FROM read_files(/Volumes/company/marketing/files/customer_data.csv, header = True)" }
    ],
    "correctIds": ["a"],
    "explanation": "The read_files() function uses => for named parameters (not =), and the file path must be quoted. CTAS with read_files() and header => true is the correct syntax.",
    "domain": "Data Ingestion & Tables"
  },
  {
    "id": "db-sqla-4-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tiene un archivo CSV llamado customer_data.csv almacenado en un volumen de Unity Catalog en /Volumes/company/marketing/files/. El archivo incluye una fila de encabezado y desea crear una tabla llamada customers usando read_files().\n\n¿Qué opción lee correctamente el archivo CSV y crea la tabla?",
    "options": [
      { "id": "a", "text": "CREATE TABLE customers AS\nSELECT * FROM read_files(\n'/Volumes/company/marketing/files/customer_data.csv',\nheader => true\n);" },
      { "id": "b", "text": "CREATE TABLE customers AS\nSELECT * FROM read_files(\n'/Volumes/company/marketing/files/customer_data.csv',\nheader = True\n);" },
      { "id": "c", "text": "COPY INTO customers\nFROM read_files('/Volumes/company/marketing/files/customer_data.csv')\nFILEFORMAT = CSV;" },
      { "id": "d", "text": "CREATE TABLE customers\nAS SELECT * FROM read_files(/Volumes/company/marketing/files/customer_data.csv, header = True)" }
    ],
    "correctIds": ["a"],
    "explanation": "La función read_files() usa => para parámetros nombrados (no =), y la ruta del archivo debe estar entre comillas. CTAS con read_files() y header => true es la sintaxis correcta.",
    "domain": "Data Ingestion & Tables"
  },

  // Q5
  {
    "id": "db-sqla-5",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Unity Catalog centrally manages security, audit, and management for what?",
    "options": [
      { "id": "a", "text": "Cloud provider network settings" },
      { "id": "b", "text": "Workspace-level notebooks only" },
      { "id": "c", "text": "Data and AI assets" },
      { "id": "d", "text": "Databricks Account identities" }
    ],
    "correctIds": ["c"],
    "explanation": "Unity Catalog provides centralized governance for data and AI assets, including tables, views, models, and functions across workspaces.",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-5-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Unity Catalog gestiona centralizadamente la seguridad, auditoría y administración de ¿qué?",
    "options": [
      { "id": "a", "text": "Configuraciones de red del proveedor de nube" },
      { "id": "b", "text": "Solo notebooks a nivel de workspace" },
      { "id": "c", "text": "Activos de datos y de IA" },
      { "id": "d", "text": "Identidades de cuenta de Databricks" }
    ],
    "correctIds": ["c"],
    "explanation": "Unity Catalog proporciona gobernanza centralizada para activos de datos e IA, incluyendo tablas, vistas, modelos y funciones entre workspaces.",
    "domain": "Unity Catalog & Governance"
  },

  // Q6
  {
    "id": "db-sqla-6",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What must you do before creating streaming tables with Databricks SQL?",
    "options": [
      { "id": "a", "text": "Select a SQL warehouse" },
      { "id": "b", "text": "Request admin access" },
      { "id": "c", "text": "Create a dashboard" },
      { "id": "d", "text": "Install a Python library" }
    ],
    "correctIds": ["a"],
    "explanation": "A SQL warehouse must be selected to provide the compute resources needed before creating streaming tables in Databricks SQL.",
    "domain": "Data Ingestion & Tables"
  },
  {
    "id": "db-sqla-6-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué debe hacer antes de crear streaming tables con Databricks SQL?",
    "options": [
      { "id": "a", "text": "Seleccionar un SQL warehouse" },
      { "id": "b", "text": "Solicitar acceso de administrador" },
      { "id": "c", "text": "Crear un dashboard" },
      { "id": "d", "text": "Instalar una biblioteca de Python" }
    ],
    "correctIds": ["a"],
    "explanation": "Se debe seleccionar un SQL warehouse para proporcionar los recursos de cómputo necesarios antes de crear streaming tables en Databricks SQL.",
    "domain": "Data Ingestion & Tables"
  },

  // Q7
  {
    "id": "db-sqla-7",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You run a complex SQL query with an INNER JOIN and GROUP BY in Databricks SQL. The query completes successfully, but takes longer than expected. You want to understand why the query took that long and where time was spent during execution.",
    "options": [
      { "id": "a", "text": "Use the query performance and query profile view to inspect execution stages, joins, and aggregations" },
      { "id": "b", "text": "Review warehouse monitoring metrics to understand overall system utilization" },
      { "id": "c", "text": "Re-run the query multiple times and compare execution durations" },
      { "id": "d", "text": "Download query execution logs and analyze them outside of Databricks" }
    ],
    "correctIds": ["a"],
    "explanation": "The query performance and query profile view provides detailed insight into each execution stage, join operations, and aggregation steps to identify bottlenecks.",
    "domain": "Query Performance"
  },
  {
    "id": "db-sqla-7-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ejecuta una consulta SQL compleja con un INNER JOIN y GROUP BY en Databricks SQL. La consulta se completa con éxito, pero tarda más de lo esperado. Quiere entender por qué la consulta tardó tanto y dónde se gastó el tiempo durante la ejecución.",
    "options": [
      { "id": "a", "text": "Usar la vista de rendimiento de consultas y perfil de consultas para inspeccionar etapas de ejecución, joins y agregaciones" },
      { "id": "b", "text": "Revisar métricas de monitoreo del warehouse para entender la utilización general del sistema" },
      { "id": "c", "text": "Re-ejecutar la consulta múltiples veces y comparar duraciones de ejecución" },
      { "id": "d", "text": "Descargar logs de ejecución de consultas y analizarlos fuera de Databricks" }
    ],
    "correctIds": ["a"],
    "explanation": "La vista de rendimiento y perfil de consultas proporciona información detallada sobre cada etapa de ejecución, operaciones de join y pasos de agregación para identificar cuellos de botella.",
    "domain": "Query Performance"
  },

  // Q8
  {
    "id": "db-sqla-8",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have created a standard view called sales_summary_vw that aggregates daily sales data from a transactions table. After creating the view, 100 new transactions are added to the transactions table. What happens when you query sales_summary_vw?",
    "options": [
      { "id": "a", "text": "The view returns an error because the underlying data has changed" },
      { "id": "b", "text": "The view returns the original data from when it was created, ignoring the new transactions" },
      { "id": "c", "text": "The view needs to be manually refreshed before it can include the new transactions" },
      { "id": "d", "text": "The view automatically executes the stored query and includes the new transactions in the results" }
    ],
    "correctIds": ["d"],
    "explanation": "Standard views don't store data — they execute the stored query each time they are queried, so they always reflect the current state of the underlying tables.",
    "domain": "Views & Transformations"
  },
  {
    "id": "db-sqla-8-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ha creado una vista estándar llamada sales_summary_vw que agrega datos de ventas diarias de una tabla de transacciones. Después de crear la vista, se agregan 100 nuevas transacciones a la tabla. ¿Qué sucede cuando consulta sales_summary_vw?",
    "options": [
      { "id": "a", "text": "La vista devuelve un error porque los datos subyacentes cambiaron" },
      { "id": "b", "text": "La vista devuelve los datos originales de cuando fue creada, ignorando las nuevas transacciones" },
      { "id": "c", "text": "La vista necesita ser actualizada manualmente antes de incluir las nuevas transacciones" },
      { "id": "d", "text": "La vista ejecuta automáticamente la consulta almacenada e incluye las nuevas transacciones en los resultados" }
    ],
    "correctIds": ["d"],
    "explanation": "Las vistas estándar no almacenan datos — ejecutan la consulta almacenada cada vez que se consultan, por lo que siempre reflejan el estado actual de las tablas subyacentes.",
    "domain": "Views & Transformations"
  },

  // Q9
  {
    "id": "db-sqla-9",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What powers the Databricks Marketplace's ability to share data?",
    "options": [
      { "id": "a", "text": "Delta Sharing" },
      { "id": "b", "text": "Unity Catalog Metastore" },
      { "id": "c", "text": "REST APIs" },
      { "id": "d", "text": "AWS S3" }
    ],
    "correctIds": ["a"],
    "explanation": "Delta Sharing is the open protocol that powers Databricks Marketplace, enabling secure cross-organization data sharing without copying data.",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-9-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tecnología impulsa la capacidad del Databricks Marketplace para compartir datos?",
    "options": [
      { "id": "a", "text": "Delta Sharing" },
      { "id": "b", "text": "Unity Catalog Metastore" },
      { "id": "c", "text": "REST APIs" },
      { "id": "d", "text": "AWS S3" }
    ],
    "correctIds": ["a"],
    "explanation": "Delta Sharing es el protocolo abierto que impulsa Databricks Marketplace, permitiendo compartir datos de forma segura entre organizaciones sin copiar datos.",
    "domain": "Unity Catalog & Governance"
  },

  // Q10
  {
    "id": "db-sqla-10",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which entity is responsible for granting privileges on data objects?",
    "options": [
      { "id": "a", "text": "Data object owner" },
      { "id": "b", "text": "Databricks Account Administrator" },
      { "id": "c", "text": "Billing Administrator" },
      { "id": "d", "text": "Workspace Administrator" }
    ],
    "correctIds": ["a"],
    "explanation": "The data object owner is responsible for granting and revoking privileges on data objects they own within Unity Catalog.",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-10-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué entidad es responsable de otorgar privilegios sobre objetos de datos?",
    "options": [
      { "id": "a", "text": "Propietario del objeto de datos" },
      { "id": "b", "text": "Administrador de Cuenta de Databricks" },
      { "id": "c", "text": "Administrador de Facturación" },
      { "id": "d", "text": "Administrador de Workspace" }
    ],
    "correctIds": ["a"],
    "explanation": "El propietario del objeto de datos es responsable de otorgar y revocar privilegios sobre los objetos de datos que posee dentro de Unity Catalog.",
    "domain": "Unity Catalog & Governance"
  },

  // Q11
  {
    "id": "db-sqla-11",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are a SQL developer who is used to working in traditional SQL editors for writing and running analytical queries. In Databricks, which tool provides the most similar experience?",
    "options": [
      { "id": "a", "text": "Lakeflow Jobs" },
      { "id": "b", "text": "Lakeflow Spark Declarative Pipelines" },
      { "id": "c", "text": "Databricks notebooks" },
      { "id": "d", "text": "Databricks SQL Editor" }
    ],
    "correctIds": ["d"],
    "explanation": "The Databricks SQL Editor provides the most similar experience to traditional SQL editors, with a dedicated interface for writing, running, and saving SQL queries.",
    "domain": "SQL Fundamentals"
  },
  {
    "id": "db-sqla-11-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Es un desarrollador SQL acostumbrado a trabajar en editores SQL tradicionales para escribir y ejecutar consultas analíticas. En Databricks, ¿qué herramienta proporciona la experiencia más similar?",
    "options": [
      { "id": "a", "text": "Lakeflow Jobs" },
      { "id": "b", "text": "Lakeflow Spark Declarative Pipelines" },
      { "id": "c", "text": "Databricks notebooks" },
      { "id": "d", "text": "Databricks SQL Editor" }
    ],
    "correctIds": ["d"],
    "explanation": "El Databricks SQL Editor proporciona la experiencia más similar a editores SQL tradicionales, con una interfaz dedicada para escribir, ejecutar y guardar consultas SQL.",
    "domain": "SQL Fundamentals"
  },

  // Q12
  {
    "id": "db-sqla-12",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are working with a large dataset containing millions of customer transactions. You need to create a view that shows monthly sales summaries by department. This summary involves complex aggregations and joins that take several minutes to compute each time they're executed. The business team needs to access this data frequently throughout the day, but the underlying transaction data is only updated once every 4 hours.\n\nWhich type of view would be most appropriate for this scenario, and what additional configuration should you implement?",
    "options": [
      { "id": "a", "text": "Create a standard view because it will always show the most up-to-date data" },
      { "id": "b", "text": "Create a temporary view because it's faster and doesn't take up storage space" },
      { "id": "c", "text": "Create a materialized view with scheduled refresh every 4 hours to align with the data update frequency" },
      { "id": "d", "text": "Create a materialized view with manual refresh only, refreshing it whenever the business team requests updated data" }
    ],
    "correctIds": ["c"],
    "explanation": "A materialized view precomputes and stores results, avoiding the cost of re-executing complex queries. Scheduling refresh every 4 hours aligns with the data update frequency, balancing freshness and performance.",
    "domain": "Views & Transformations"
  },
  {
    "id": "db-sqla-12-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está trabajando con un dataset grande que contiene millones de transacciones de clientes. Necesita crear una vista que muestre resúmenes mensuales de ventas por departamento. Este resumen involucra agregaciones y joins complejos que toman varios minutos cada vez. El equipo de negocio necesita acceder a estos datos frecuentemente durante el día, pero los datos de transacciones solo se actualizan cada 4 horas.\n\n¿Qué tipo de vista sería más apropiada y qué configuración adicional debería implementar?",
    "options": [
      { "id": "a", "text": "Crear una vista estándar porque siempre mostrará los datos más actualizados" },
      { "id": "b", "text": "Crear una vista temporal porque es más rápida y no ocupa espacio de almacenamiento" },
      { "id": "c", "text": "Crear una vista materializada con actualización programada cada 4 horas para alinearse con la frecuencia de actualización de datos" },
      { "id": "d", "text": "Crear una vista materializada con actualización manual solamente, actualizándola cuando el equipo de negocio solicite datos actualizados" }
    ],
    "correctIds": ["c"],
    "explanation": "Una vista materializada precalcula y almacena resultados, evitando re-ejecutar consultas complejas. Programar la actualización cada 4 horas se alinea con la frecuencia de actualización de datos, balanceando frescura y rendimiento.",
    "domain": "Views & Transformations"
  },

  // Q13
  {
    "id": "db-sqla-13",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main function of Unity Catalog in Databricks?",
    "options": [
      { "id": "a", "text": "To create dashboards" },
      { "id": "b", "text": "To govern and manage datasets, including non-tabular files like CSVs" },
      { "id": "c", "text": "To schedule jobs" },
      { "id": "d", "text": "To manage user accounts" }
    ],
    "correctIds": ["b"],
    "explanation": "Unity Catalog's main function is to govern and manage all data assets, including tabular data (tables, views) and non-tabular files (CSVs, images, PDFs) stored in volumes.",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-13-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función principal de Unity Catalog en Databricks?",
    "options": [
      { "id": "a", "text": "Crear dashboards" },
      { "id": "b", "text": "Gobernar y gestionar datasets, incluyendo archivos no tabulares como CSVs" },
      { "id": "c", "text": "Programar jobs" },
      { "id": "d", "text": "Gestionar cuentas de usuario" }
    ],
    "correctIds": ["b"],
    "explanation": "La función principal de Unity Catalog es gobernar y gestionar todos los activos de datos, incluyendo datos tabulares (tablas, vistas) y archivos no tabulares (CSVs, imágenes, PDFs) almacenados en volúmenes.",
    "domain": "Unity Catalog & Governance"
  },

  // Q14
  {
    "id": "db-sqla-14",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which statement best describes the types of files you can upload to a Databricks volume?",
    "options": [
      { "id": "a", "text": "Only files that will be immediately converted into Delta tables" },
      { "id": "b", "text": "Only files smaller than 10 MB and in text format" },
      { "id": "c", "text": "Only CSV files used for structured tables" },
      { "id": "d", "text": "Structured, semi-structured, and unstructured files such as CSV, JSON, images, or PDFs" }
    ],
    "correctIds": ["d"],
    "explanation": "Databricks volumes support all file types: structured (CSV, Parquet), semi-structured (JSON, XML), and unstructured (images, PDFs, audio) files.",
    "domain": "Data Ingestion & Tables"
  },
  {
    "id": "db-sqla-14-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué afirmación describe mejor los tipos de archivos que puede cargar en un volumen de Databricks?",
    "options": [
      { "id": "a", "text": "Solo archivos que se convertirán inmediatamente en tablas Delta" },
      { "id": "b", "text": "Solo archivos menores de 10 MB en formato texto" },
      { "id": "c", "text": "Solo archivos CSV usados para tablas estructuradas" },
      { "id": "d", "text": "Archivos estructurados, semi-estructurados y no estructurados como CSV, JSON, imágenes o PDFs" }
    ],
    "correctIds": ["d"],
    "explanation": "Los volúmenes de Databricks soportan todos los tipos de archivos: estructurados (CSV, Parquet), semi-estructurados (JSON, XML) y no estructurados (imágenes, PDFs, audio).",
    "domain": "Data Ingestion & Tables"
  },

  // Q15
  {
    "id": "db-sqla-15",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which SQL statement is recommended for creating Delta Lake tables from existing data in Databricks?",
    "options": [
      { "id": "a", "text": "CREATE TABLE _ AS SELECT (CTAS)" },
      { "id": "b", "text": "INSERT INTO" },
      { "id": "c", "text": "DROP TABLE" },
      { "id": "d", "text": "UPDATE TABLE" }
    ],
    "correctIds": ["a"],
    "explanation": "CREATE TABLE AS SELECT (CTAS) is the recommended approach for creating Delta Lake tables from existing data, combining table creation and data population in one statement.",
    "domain": "Data Ingestion & Tables"
  },
  {
    "id": "db-sqla-15-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sentencia SQL se recomienda para crear tablas Delta Lake a partir de datos existentes en Databricks?",
    "options": [
      { "id": "a", "text": "CREATE TABLE _ AS SELECT (CTAS)" },
      { "id": "b", "text": "INSERT INTO" },
      { "id": "c", "text": "DROP TABLE" },
      { "id": "d", "text": "UPDATE TABLE" }
    ],
    "correctIds": ["a"],
    "explanation": "CREATE TABLE AS SELECT (CTAS) es el enfoque recomendado para crear tablas Delta Lake a partir de datos existentes, combinando la creación de tabla y la carga de datos en una sola sentencia.",
    "domain": "Data Ingestion & Tables"
  },

  // Q16
  {
    "id": "db-sqla-16",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the primary benefit of setting a default catalog and schema in Databricks?",
    "options": [
      { "id": "a", "text": "Avoids using the full three level namespace" },
      { "id": "b", "text": "Limits data visibility" },
      { "id": "c", "text": "Allows querying Hive tables" },
      { "id": "d", "text": "Enables cluster auto-scaling" }
    ],
    "correctIds": ["a"],
    "explanation": "Setting a default catalog and schema lets you reference tables by name only, avoiding the need to type the full catalog.schema.table path every time.",
    "domain": "SQL Fundamentals"
  },
  {
    "id": "db-sqla-16-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el beneficio principal de establecer un catálogo y esquema predeterminados en Databricks?",
    "options": [
      { "id": "a", "text": "Evita usar el namespace completo de tres niveles" },
      { "id": "b", "text": "Limita la visibilidad de datos" },
      { "id": "c", "text": "Permite consultar tablas Hive" },
      { "id": "d", "text": "Habilita el auto-escalado de clústeres" }
    ],
    "correctIds": ["a"],
    "explanation": "Establecer un catálogo y esquema predeterminados permite referenciar tablas solo por nombre, evitando escribir la ruta completa catalog.schema.table cada vez.",
    "domain": "SQL Fundamentals"
  },

  // Q17
  {
    "id": "db-sqla-17",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data analyst needs to programmatically explore their Databricks environment. They want to view all schemas in the \"production\" catalog and then see all tables in the \"sales\" schema within that catalog. Which SQL statements should they use in the correct order?",
    "options": [
      { "id": "a", "text": "SHOW SCHEMAS IN production;\nSHOW TABLES IN production.sales;" },
      { "id": "b", "text": "USE SCHEMA sales;\nSHOW SCHEMAS;\nSHOW TABLES;" },
      { "id": "c", "text": "SHOW CATALOGS;\nUSE CATALOG production;\nSHOW TABLES IN sales;" },
      { "id": "d", "text": "SET DEFAULT CATALOG production;\nSHOW SCHEMAS;\nSHOW TABLES IN sales;" }
    ],
    "correctIds": ["a"],
    "explanation": "SHOW SCHEMAS IN production lists all schemas in the production catalog, and SHOW TABLES IN production.sales lists all tables in the sales schema — direct and explicit.",
    "domain": "SQL Fundamentals"
  },
  {
    "id": "db-sqla-17-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un analista de datos necesita explorar programáticamente su entorno Databricks. Quiere ver todos los schemas en el catálogo \"production\" y luego ver todas las tablas en el schema \"sales\" dentro de ese catálogo. ¿Qué sentencias SQL deben usar en el orden correcto?",
    "options": [
      { "id": "a", "text": "SHOW SCHEMAS IN production;\nSHOW TABLES IN production.sales;" },
      { "id": "b", "text": "USE SCHEMA sales;\nSHOW SCHEMAS;\nSHOW TABLES;" },
      { "id": "c", "text": "SHOW CATALOGS;\nUSE CATALOG production;\nSHOW TABLES IN sales;" },
      { "id": "d", "text": "SET DEFAULT CATALOG production;\nSHOW SCHEMAS;\nSHOW TABLES IN sales;" }
    ],
    "correctIds": ["a"],
    "explanation": "SHOW SCHEMAS IN production lista todos los schemas del catálogo production, y SHOW TABLES IN production.sales lista todas las tablas del schema sales — directo y explícito.",
    "domain": "SQL Fundamentals"
  },

  // Q18
  {
    "id": "db-sqla-18",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What object sits at the top level of the data access hierarchy in Unity Catalog?",
    "options": [
      { "id": "a", "text": "Table" },
      { "id": "b", "text": "Workspace" },
      { "id": "c", "text": "Metastore" },
      { "id": "d", "text": "Schema" }
    ],
    "correctIds": ["c"],
    "explanation": "The Metastore sits at the top of the Unity Catalog hierarchy: Metastore → Catalog → Schema → Data objects (tables, views, functions, volumes).",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-18-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué objeto se encuentra en el nivel superior de la jerarquía de acceso a datos en Unity Catalog?",
    "options": [
      { "id": "a", "text": "Table" },
      { "id": "b", "text": "Workspace" },
      { "id": "c", "text": "Metastore" },
      { "id": "d", "text": "Schema" }
    ],
    "correctIds": ["c"],
    "explanation": "El Metastore está en la cima de la jerarquía de Unity Catalog: Metastore → Catalog → Schema → Objetos de datos (tablas, vistas, funciones, volúmenes).",
    "domain": "Unity Catalog & Governance"
  },

  // Q19
  {
    "id": "db-sqla-19",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a table called sales_data with columns order_id, customer_id, order_amount, and sales_rep. You need to create a new column called order_category that classifies orders as follows:\n\n- \"Small\" for orders ≤ $50,000\n- \"Medium\" for orders between $50,001 and $200,000\n- \"Large\" for orders > $200,000",
    "options": [
      { "id": "a", "text": "SELECT *,\nIF(order_amount <= 50000, 'Small',\nIF(order_amount <= 200000, 'Medium', 'Large')) AS order_category\nFROM sales_data;" },
      { "id": "b", "text": "SELECT *,\nCASE\nWHEN order_amount <= 50000 THEN 'Small'\nWHEN order_amount > 50000 AND order_amount <= 200000 THEN 'Medium'\nELSE 'Large'\nEND AS order_category\nFROM sales_data;" },
      { "id": "c", "text": "SELECT *,\nCATEGORIZE(order_amount, 50000, 200000, 'Small', 'Medium', 'Large') AS order_category\nFROM sales_data;" },
      { "id": "d", "text": "SELECT *,\nCASE order_amount\nWHEN <= 50000 THEN 'Small'\nWHEN <= 200000 THEN 'Medium'\nELSE 'Large'\nEND AS order_category\nFROM sales_data;" }
    ],
    "correctIds": ["b"],
    "explanation": "The CASE WHEN syntax with explicit conditions is the standard and most readable approach for classifying values into categories. CATEGORIZE() doesn't exist, and the simple CASE syntax doesn't support comparison operators.",
    "domain": "SQL Fundamentals"
  },
  {
    "id": "db-sqla-19-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tiene una tabla llamada sales_data con columnas order_id, customer_id, order_amount y sales_rep. Necesita crear una nueva columna llamada order_category que clasifique los pedidos así:\n\n- \"Small\" para pedidos ≤ $50,000\n- \"Medium\" para pedidos entre $50,001 y $200,000\n- \"Large\" para pedidos > $200,000",
    "options": [
      { "id": "a", "text": "SELECT *,\nIF(order_amount <= 50000, 'Small',\nIF(order_amount <= 200000, 'Medium', 'Large')) AS order_category\nFROM sales_data;" },
      { "id": "b", "text": "SELECT *,\nCASE\nWHEN order_amount <= 50000 THEN 'Small'\nWHEN order_amount > 50000 AND order_amount <= 200000 THEN 'Medium'\nELSE 'Large'\nEND AS order_category\nFROM sales_data;" },
      { "id": "c", "text": "SELECT *,\nCATEGORIZE(order_amount, 50000, 200000, 'Small', 'Medium', 'Large') AS order_category\nFROM sales_data;" },
      { "id": "d", "text": "SELECT *,\nCASE order_amount\nWHEN <= 50000 THEN 'Small'\nWHEN <= 200000 THEN 'Medium'\nELSE 'Large'\nEND AS order_category\nFROM sales_data;" }
    ],
    "correctIds": ["b"],
    "explanation": "La sintaxis CASE WHEN con condiciones explícitas es el enfoque estándar y más legible para clasificar valores en categorías. CATEGORIZE() no existe, y la sintaxis CASE simple no soporta operadores de comparación.",
    "domain": "SQL Fundamentals"
  },

  // Q20
  {
    "id": "db-sqla-20",
    "courseId": "databricks-sql-analytics",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the primary purpose of using Catalog Explorer in Databricks?",
    "options": [
      { "id": "a", "text": "To discover and inspect datasets for analytics" },
      { "id": "b", "text": "To manage compute resources" },
      { "id": "c", "text": "To monitor cluster" },
      { "id": "d", "text": "To write Python scripts" }
    ],
    "correctIds": ["a"],
    "explanation": "Catalog Explorer's primary purpose is to discover, inspect, and explore datasets available for analytics, providing a visual interface into Unity Catalog's metadata.",
    "domain": "Unity Catalog & Governance"
  },
  {
    "id": "db-sqla-20-es",
    "courseId": "databricks-sql-analytics",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de usar Catalog Explorer en Databricks?",
    "options": [
      { "id": "a", "text": "Descubrir e inspeccionar datasets para análisis" },
      { "id": "b", "text": "Gestionar recursos de cómputo" },
      { "id": "c", "text": "Monitorear clústeres" },
      { "id": "d", "text": "Escribir scripts de Python" }
    ],
    "correctIds": ["a"],
    "explanation": "El propósito principal del Catalog Explorer es descubrir, inspeccionar y explorar datasets disponibles para análisis, proporcionando una interfaz visual a los metadatos de Unity Catalog.",
    "domain": "Unity Catalog & Governance"
  }
]);
