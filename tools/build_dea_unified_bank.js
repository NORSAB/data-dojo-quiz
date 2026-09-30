// Builder for Databricks Certified Data Engineer Associate Unified Question Bank & Study Center
const fs = require('fs');

global.window = global;
require('../questions_databricks_lakeflow_connect.js');
require('../questions_databricks_lakeflow_jobs.js');
require('../questions_databricks_lakeflow_pipelines.js');
require('../questions_databricks_devops.js');

const rawQuestions = window.questionsData;

// Domain mapping table
const domainMapEN = {
  // Domain 1: Databricks Intelligence Platform (6%)
  'Architecture & Medallion Design': 'Databricks Intelligence Platform',
  'Compute & Cost Optimization': 'Databricks Intelligence Platform',
  
  // Domain 2: Data Ingestion and Loading (21%)
  'File Ingestion & read_files': 'Data Ingestion and Loading',
  'Auto Loader & Streaming Tables': 'Data Ingestion and Loading',
  'Lakeflow Connect & Gateway': 'Data Ingestion and Loading',
  'Schema Evolution & Rescued Data': 'Data Ingestion and Loading',

  // Domain 3: Data Transformation and Modeling (22%)
  'Declarative Framework & Architecture': 'Data Transformation and Modeling',
  'Materialized Views & Incremental Computation': 'Data Transformation and Modeling',
  'Change Data Capture (AUTO CDC INTO)': 'Data Transformation and Modeling',
  'Upsert & CDC (MERGE INTO)': 'Data Transformation and Modeling',
  'Data Quality & Expectations': 'Data Transformation and Modeling',
  'Streaming Tables & Auto Loader': 'Data Transformation and Modeling',

  // Domain 4: Working with Lakeflow Jobs (16%)
  'Orchestration & Workflow Architecture': 'Working with Lakeflow Jobs',
  'Task Types & Dependencies (DAGs)': 'Working with Lakeflow Jobs',
  'Execution Modes & Triggers': 'Working with Lakeflow Jobs',
  'Parameters & Dynamic Control (If/Else, For Each)': 'Working with Lakeflow Jobs',

  // Domain 5: Implementing CI/CD (10%)
  'Version Control & Git Best Practices': 'Implementing CI/CD',
  'CI/CD & Asset Bundles / Workflows as Code': 'Implementing CI/CD',
  'Multi-Environment Deployment & Configuration': 'Implementing CI/CD',
  'Software Engineering & Modularization': 'Implementing CI/CD',

  // Domain 6: Troubleshooting, Monitoring, and Optimization (10%)
  'Monitoring, Notifications & Repair Runs': 'Troubleshooting, Monitoring, and Optimization',
  'Pipeline Execution & Event Log': 'Troubleshooting, Monitoring, and Optimization',
  'Unit Testing with PySpark & pytest': 'Troubleshooting, Monitoring, and Optimization',
  'Integration Testing & Pipeline Verification': 'Troubleshooting, Monitoring, and Optimization'
};

const domainMapES = {
  'Arquitectura y Diseño Medallion': 'Plataforma de Inteligencia Databricks',
  'Cómputo y Optimización de Costos': 'Plataforma de Inteligencia Databricks',

  'Ingesta de Archivos y read_files': 'Ingesta y Carga de Datos',
  'Auto Loader y Tablas Streaming': 'Ingesta y Carga de Datos',
  'Lakeflow Connect y Gateway': 'Ingesta y Carga de Datos',
  'Evolución de Esquema y Datos Rescatados': 'Ingesta y Carga de Datos',

  'Framework Declarativo y Arquitectura': 'Transformación y Modelado de Datos',
  'Vistas Materializadas y Cómputo Incremental': 'Transformación y Modelado de Datos',
  'Captura de Datos de Cambio (AUTO CDC INTO)': 'Transformación y Modelado de Datos',
  'Upsert y CDC (MERGE INTO)': 'Transformación y Modelado de Datos',
  'Calidad de Datos y Expectativas': 'Transformación y Modelado de Datos',
  'Tablas Streaming y Auto Loader': 'Transformación y Modelado de Datos',

  'Orquestación y Arquitectura de Workflows': 'Trabajo con Lakeflow Jobs',
  'Tipos de Tareas y Dependencias (DAGs)': 'Trabajo con Lakeflow Jobs',
  'Modos de Ejecución y Disparadores': 'Trabajo con Lakeflow Jobs',
  'Parámetros y Control Dinámico (If/Else, For Each)': 'Trabajo con Lakeflow Jobs',

  'Control de Versiones y Mejores Prácticas de Git': 'Implementación de CI/CD',
  'CI/CD y Paquetes de Activos / Workflows como Código': 'Implementación de CI/CD',
  'Despliegue Multi-Entorno y Configuración': 'Implementación de CI/CD',
  'Ingeniería de Software y Modularización': 'Implementación de CI/CD',

  'Monitoreo, Notificaciones y Reparación': 'Resolución de Problemas, Monitoreo y Optimización',
  'Ejecución de Pipelines y Registro de Eventos': 'Resolución de Problemas, Monitoreo y Optimización',
  'Pruebas Unitarias con PySpark y pytest': 'Resolución de Problemas, Monitoreo y Optimización',
  'Pruebas de Integración y Verificación de Pipelines': 'Resolución de Problemas, Monitoreo y Optimización'
};

// 5 Sample Questions from Official Guide May 2026
const sampleQuestionsEN = [
  {
    id: 'db-dea-81',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Troubleshooting, Monitoring, and Optimization',
    subdomain: 'Spark UI & Data Skew',
    type: 'single_choice',
    prompt: `**[Official Exam Question 1]** A data engineer notices a batch job's duration has doubled after a new data source was onboarded. In the Spark UI, the longest stage shows that most tasks finish in under 30 seconds, but one task takes over 10 minutes. The stage's task summary shows Min/Median shuffle read near 400 MB while Max shuffle read exceeds 5 GB.\n\nWhich solution reduces the job runtime?`,
    options: [
      { id: 'a', text: 'Increase cluster size to add more executors so the slow task finishes faster' },
      { id: 'b', text: 'Confirm adaptive query execution with skew join handling is active to automatically split the oversized partition at runtime' },
      { id: 'c', text: 'Reduce `spark.sql.shuffle.partitions` to coalesce more work into fewer tasks' },
      { id: 'd', text: 'Manually repartition the dataset using a salt key before the join to distribute skewed keys evenly' }
    ],
    correctIds: ['b'],
    explanation: 'Adaptive Query Execution (AQE) skew join handling (`spark.sql.adaptive.skewJoin.enabled = true`) automatically splits oversized partitions into smaller sub-partitions at runtime, resolving task stragglers caused by data skew without code changes or manual salting.'
  },
  {
    id: 'db-dea-82',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Databricks Intelligence Platform',
    subdomain: 'Delta Lake & Architecture',
    type: 'single_choice',
    prompt: `**[Official Exam Question 2]** A data engineer requires rapid iteration on pipelines while maintaining reliable rollbacks after bad ingests, ensuring audit trails for regulatory compliance, and providing consistent access to a single source of truth for both AI and BI workloads.\n\nWhich strategy should the data engineer use to meet these requirements?`,
    options: [
      { id: 'a', text: 'DBFS CSV storage with manual file versioning and nightly copies for rollback.' },
      { id: 'b', text: 'Delta Lake ACID transactions and time travel, governed by Unity Catalog for consistent access and lineage.' },
      { id: 'c', text: 'Cloud object storage only, with ad hoc SQL queries for recovery and governance.' },
      { id: 'd', text: 'Ephemeral in-memory DataFrames for audit trails and BI distribution.' }
    ],
    correctIds: ['b'],
    explanation: 'Delta Lake provides ACID transactions, audit logging via transaction logs (`_delta_log`), and time travel for instantaneous rollbacks. Governing Delta tables with Unity Catalog provides centralized access control and complete lineage across AI and BI workloads.'
  },
  {
    id: 'db-dea-83',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Data Ingestion and Loading',
    subdomain: 'Cloud Object Storage & Ingestion Patterns',
    type: 'single_choice',
    prompt: `**[Official Exam Question 3]** A data engineer is building downstream pipelines to consume Databricks audit logs from a customer-owned S3 bucket. Before implementing schema inference and checkpointing, they want to understand the delivery format, typical ingestion latency, and whether files may be overwritten.\n\nWhat is Databricks audit log storage behavior?`,
    options: [
      { id: 'a', text: 'Files are delivered as JSON with typical event logging under 15 minutes after delivery begins, and new deliveries can overwrite existing files' },
      { id: 'b', text: 'Files are delivered as CSV with sub-minute latency guarantees, and overwrites never occur once a file is written to preserve immutability' },
      { id: 'c', text: 'Files are delivered as Parquet with eventual consistency beyond 24 hours, and overwrites are disabled to simplify streaming ingestion' },
      { id: 'd', text: 'Files are delivered as JSON with delivery on a weekly batch cadence, and overwrites replace prior content completely without appending' }
    ],
    correctIds: ['a'],
    explanation: 'Databricks audit logs delivered to customer cloud storage are formatted as compressed JSON files. Events appear within approximately 15 minutes, and delivery batches can overwrite files with additional event data, requiring downstream pipelines to handle idempotency.'
  },
  {
    id: 'db-dea-84',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Databricks Intelligence Platform',
    subdomain: 'Compute & Cluster Types',
    type: 'single_choice',
    prompt: `**[Official Exam Question 4]** A data engineering team supports multiple business analysts who run ad hoc SQL queries throughout the day on curated Delta tables. The team needs to ensure efficient query performance, fast cluster startup, and support for multiple simultaneous users, while managing cost by avoiding unnecessary scaling to very large clusters.\n\nWhich cluster configuration meets these requirements?`,
    options: [
      { id: 'a', text: 'A job cluster with autoscaling designed for scheduled ETL workflows' },
      { id: 'b', text: 'An all-purpose cluster configured with a fixed number of worker nodes' },
      { id: 'c', text: 'A high-concurrency cluster with autoscaling enabled' },
      { id: 'd', text: 'A single-node cluster configured for lightweight development tasks' }
    ],
    correctIds: ['c'],
    explanation: 'A High-Concurrency cluster (or modern Serverless SQL Warehouse / Shared access cluster) provides user isolation and concurrent query execution for multiple analysts, while autoscaling allocates resources dynamically according to query load to minimize costs.'
  },
  {
    id: 'db-dea-85',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Implementing CI/CD',
    subdomain: 'Databricks Asset Bundles (DABs)',
    type: 'single_choice',
    prompt: `**[Official Exam Question 5]** A team wants a modular way to deploy, version, and orchestrate ETL pipelines in Databricks—enabling CI/CD and repeatability.\n\nWhich feature supports this requirement?`,
    options: [
      { id: 'a', text: 'Use models in Unity Catalog to represent ETL jobs, where each model stores the pipeline code artifact and CI/CD promotes versions by updating model aliases tied to Job tasks.' },
      { id: 'b', text: 'Package transformation logic as wheel libraries stored in Unity Catalog Volumes and bind them to Jobs tasks to ensure deterministic deployment across environments.' },
      { id: 'c', text: 'Package API logic inside a Volume-mounted notebook, and use Jobs API v2 to trigger the notebook, depending on notebook revision history to act as a versioning system.' },
      { id: 'd', text: 'Use DABs to define resources and code assets, version them in Git, and promote deployments across environments through automated CI/CD actions.' }
    ],
    correctIds: ['d'],
    explanation: 'Databricks Asset Bundles (DABs) allow engineers to define infrastructure, pipelines, and workflows as code (\`databricks.yml\`). Bundles are version-controlled in Git and deployed deterministically across environments (dev, test, prod) via automated CI/CD workflows.'
  }
];

const sampleQuestionsES = [
  {
    id: 'db-dea-81-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Resolución de Problemas, Monitoreo y Optimización',
    subdomain: 'Spark UI y Sesgo de Datos (Data Skew)',
    type: 'single_choice',
    prompt: `**[Pregunta Oficial de Examen 1]** Un ingeniero de datos nota que la duración de un trabajo por lotes (batch) se ha duplicado tras incorporar una nueva fuente de datos. En la interfaz de Spark (Spark UI), la etapa más larga muestra que la mayoría de las tareas terminan en menos de 30 segundos, pero una tarea tarda más de 10 minutos. El resumen de tareas de la etapa muestra una lectura de shuffle Mín/Mediana cercana a 400 MB, mientras que la lectura máxima de shuffle supera los 5 GB.\n\n¿Qué solución reduce el tiempo de ejecución del trabajo?`,
    options: [
      { id: 'a', text: 'Aumentar el tamaño del clúster agregando más ejecutores para que la tarea lenta termine más rápido' },
      { id: 'b', text: 'Confirmar que la ejecución adaptable de consultas (AQE) con manejo de sesgo en joins esté activa para dividir automáticamente la partición sobredimensionada en tiempo de ejecución' },
      { id: 'c', text: 'Reducir \`spark.sql.shuffle.partitions\` para fusionar más trabajo en menos tareas' },
      { id: 'd', text: 'Reparticionar manualmente el conjunto de datos usando una clave de sal (salt key) antes del join para distribuir equitativamente las claves sesgadas' }
    ],
    correctIds: ['b'],
    explanation: 'El manejo de joins sesgados en la Ejecución Adaptable de Consultas (AQE, `spark.sql.adaptive.skewJoin.enabled = true`) divide automáticamente las particiones sobredimensionadas en subparticiones más pequeñas en tiempo de ejecución, eliminando las tareas rezagadas (stragglers) causadas por el sesgo sin requerir cambios de código o salting manual.'
  },
  {
    id: 'db-dea-82-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Plataforma de Inteligencia Databricks',
    subdomain: 'Delta Lake y Arquitectura',
    type: 'single_choice',
    prompt: `**[Pregunta Oficial de Examen 2]** Un ingeniero de datos requiere una iteración rápida en los pipelines manteniendo rollbacks confiables tras ingestas erróneas, garantizando pistas de auditoría para cumplimiento normativo y proporcionando acceso consistente a una única fuente de verdad tanto para cargas de trabajo de IA como de BI.\n\n¿Qué estrategia debe utilizar el ingeniero de datos para cumplir con estos requerimientos?`,
    options: [
      { id: 'a', text: 'Almacenamiento CSV en DBFS con versionado manual de archivos y copias nocturnas para rollback.' },
      { id: 'b', text: 'Transacciones ACID y viaje en el tiempo (time travel) de Delta Lake, gobernados por Unity Catalog para acceso consistente y linaje.' },
      { id: 'c', text: 'Almacenamiento de objetos en la nube únicamente, con consultas SQL ad hoc para recuperación y gobernanza.' },
      { id: 'd', text: 'DataFrames efímeros en memoria para pistas de auditoría y distribución hacia herramientas de BI.' }
    ],
    correctIds: ['b'],
    explanation: 'Delta Lake proporciona transacciones ACID, registro de auditoría a través de registros de transacciones (`_delta_log`) y viaje en el tiempo para rollbacks instantáneos. Gobernar las tablas Delta con Unity Catalog brinda control de acceso centralizado y linaje completo en cargas de trabajo de IA y BI.'
  },
  {
    id: 'db-dea-83-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Ingesta y Carga de Datos',
    subdomain: 'Almacenamiento de Objetos en Nube y Patrones de Ingesta',
    type: 'single_choice',
    prompt: `**[Pregunta Oficial de Examen 3]** Un ingeniero de datos está construyendo pipelines descendentes para consumir los registros de auditoría de Databricks desde un bucket S3 propiedad del cliente. Antes de implementar la inferencia de esquemas y el checkpointing, desea comprender el formato de entrega, la latencia típica de ingesta y si los archivos pueden sobrescribirse.\n\n¿Cuál es el comportamiento de almacenamiento de los registros de auditoría de Databricks?`,
    options: [
      { id: 'a', text: 'Los archivos se entregan como JSON con registro de eventos típico en menos de 15 minutos tras iniciar la entrega, y las nuevas entregas pueden sobrescribir archivos existentes' },
      { id: 'b', text: 'Los archivos se entregan como CSV con garantías de latencia subminuto, y las sobrescrituras nunca ocurren una vez que se escribe un archivo para preservar la inmutabilidad' },
      { id: 'c', text: 'Los archivos se entregan como Parquet con consistencia eventual superior a 24 horas, y las sobrescrituras están deshabilitadas para simplificar la ingesta streaming' },
      { id: 'd', text: 'Los archivos se entregan como JSON con una cadencia de lote semanal, y las sobrescrituras reemplazan por completo el contenido previo sin anexar' }
    ],
    correctIds: ['a'],
    explanation: 'Los registros de auditoría de Databricks exportados al almacenamiento en nube del cliente se entregan en formato JSON comprimido. Los eventos aparecen típicamente en 15 minutos y las entregas pueden sobrescribir archivos existentes con lotes de eventos consolidados, exigiendo que los pipelines manejen idempotencia.'
  },
  {
    id: 'db-dea-84-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Plataforma de Inteligencia Databricks',
    subdomain: 'Cómputo y Tipos de Clúster',
    type: 'single_choice',
    prompt: `**[Pregunta Oficial de Examen 4]** Un equipo de ingeniería de datos brinda soporte a múltiples analistas de negocio que ejecutan consultas SQL ad hoc a lo largo del día sobre tablas Delta curadas. El equipo necesita garantizar un rendimiento eficiente en las consultas, inicio rápido de clústeres y soporte para múltiples usuarios simultáneos, controlando los costos al evitar el escalado innecesario a clústeres excesivamente grandes.\n\n¿Qué configuración de clúster cumple con estos requerimientos?`,
    options: [
      { id: 'a', text: 'Un clúster de tipo Job con autoescalado diseñado para flujos de trabajo ETL programados' },
      { id: 'b', text: 'Un clúster All-Purpose configurado con un número fijo de nodos trabajadores' },
      { id: 'c', text: 'Un clúster de Alta Concurrencia (High-Concurrency) con autoescalado habilitado' },
      { id: 'd', text: 'Un clúster de nodo único (single-node) configurado para tareas de desarrollo livianas' }
    ],
    correctIds: ['c'],
    explanation: 'Un clúster de Alta Concurrencia (o un SQL Warehouse Serverless / clúster de acceso compartido moderno) proporciona aislamiento de usuarios y ejecución simultánea de consultas para múltiples analistas, mientras que el autoescalado asigna recursos de forma dinámica según la demanda para minimizar costos.'
  },
  {
    id: 'db-dea-85-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Implementación de CI/CD',
    subdomain: 'Databricks Asset Bundles (DABs)',
    type: 'single_choice',
    prompt: `**[Pregunta Oficial de Examen 5]** Un equipo busca una forma modular de desplegar, versionar y orquestar pipelines ETL en Databricks, facilitando CI/CD y repetibilidad.\n\n¿Qué funcionalidad soporta este requerimiento?`,
    options: [
      { id: 'a', text: 'Usar modelos en Unity Catalog para representar trabajos ETL, donde cada modelo almacena el código del pipeline y CI/CD promueve versiones actualizando alias asociados a las tareas.' },
      { id: 'b', text: 'Empaquetar la lógica de transformación como librerías wheel almacenadas en Volúmenes de Unity Catalog y vincularlas a tareas de Jobs para garantizar despliegues deterministas entre entornos.' },
      { id: 'c', text: 'Empaquetar la lógica de API dentro de un notebook montado en un Volumen, y usar Jobs API v2 para dispararlo dependiendo del historial de revisiones del notebook como sistema de versiones.' },
      { id: 'd', text: 'Usar DABs para definir recursos y código como activos, versionarlos en Git y promover despliegues entre entornos mediante acciones automatizadas de CI/CD.' }
    ],
    correctIds: ['d'],
    explanation: 'Databricks Asset Bundles (DABs) permiten definir infraestructura, pipelines y workflows como código (\`databricks.yml\`). Los paquetes se controlan en Git y se despliegan de forma reproducible entre entornos (dev, test, prod) mediante flujos de trabajo automatizados de CI/CD con la CLI de Databricks.'
  }
];

// 10 Dedicated Questions for Domain 7: Governance and Security (15%)
const governanceQuestionsEN = [
  {
    id: 'db-dea-86',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Managed vs External Tables',
    type: 'single_choice',
    prompt: `A data engineer runs the command \`DROP TABLE main.finance.invoices;\`. The table was defined as a **Managed Table** in Unity Catalog.\n\nWhat happens to the underlying data files and the metadata in Unity Catalog?`,
    options: [
      { id: 'a', text: 'Only the metadata is deleted from Unity Catalog; data files remain untouched in cloud storage' },
      { id: 'b', text: 'Both the metadata in Unity Catalog and the underlying data files stored in the managed cloud container are permanently deleted' },
      { id: 'c', text: 'The table is converted into an external table and moved to a quarantine schema' },
      { id: 'd', text: 'Data files are moved to the root DBFS directory and retained for 30 days' }
    ],
    correctIds: ['b'],
    explanation: 'For Unity Catalog Managed Tables, Databricks manages both the table lifecycle and underlying storage. Dropping a managed table deletes both its metadata and the underlying data files from the storage credential location after the retention period.'
  },
  {
    id: 'db-dea-87',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'External Tables & Locations',
    type: 'single_choice',
    prompt: `A data engineer runs \`DROP TABLE main.marketing.leads;\`. The table was created with \`CREATE TABLE ... LOCATION 'abfss://marketing@storage.dfs.core.windows.net/leads'\`.\n\nWhat is the result of dropping this **External Table**?`,
    options: [
      { id: 'a', text: 'Both metadata and the underlying raw data files in Azure Data Lake Storage are permanently deleted' },
      { id: 'b', text: 'Only the metadata registration in Unity Catalog is deleted; the underlying cloud storage files remain intact at the cloud path' },
      { id: 'c', text: 'The command fails with an ACCESS_DENIED error because external locations cannot be dropped via SQL' },
      { id: 'd', text: 'The files are archived into a Unity Catalog managed volume' }
    ],
    correctIds: ['b'],
    explanation: 'When dropping an External Table in Unity Catalog, only the metadata entry in the metastore is dropped. The actual data files in the external cloud storage path remain untouched and can be re-registered at any time.'
  },
  {
    id: 'db-dea-88',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Unity Catalog Privilege Hierarchy',
    type: 'single_choice',
    prompt: `A data analyst needs to query tables in the schema \`prod.sales\`. The administrator runs:\n\`GRANT SELECT ON SCHEMA prod.sales TO \`analysts\`;\`\nHowever, the analysts still receive an \`ACCESS_DENIED\` permission error when trying to run queries.\n\nWhich additional privilege must be granted to the analysts?`,
    options: [
      { id: 'a', text: 'GRANT ALL PRIVILEGES ON TABLE sales.orders' },
      { id: 'b', text: 'GRANT USAGE ON CATALOG prod AND GRANT USAGE ON SCHEMA prod.sales' },
      { id: 'c', text: 'GRANT MODIFY ON METASTORE' },
      { id: 'd', text: 'GRANT READ FILES ON LOCATION' }
    ],
    correctIds: ['b'],
    explanation: 'In Unity Catalog, securable objects follow a strict 3-level containment hierarchy. To access any table within a schema, users must possess the `USAGE` privilege on both the parent Catalog and the parent Schema in addition to `SELECT` on the table/schema.'
  },
  {
    id: 'db-dea-89',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Dynamic Views & Row-Level Security',
    type: 'single_choice',
    prompt: `A healthcare company must ensure that doctors only see patient records from their assigned hospital facility, while hospital administrators can see all records. Which Unity Catalog feature enables this requirement without creating redundant tables?`,
    options: [
      { id: 'a', text: 'Creating an external table with separate sub-directories for each hospital facility' },
      { id: 'b', text: 'Creating a Dynamic View with a WHERE clause using `is_account_group_member(\'admins\') OR facility_id = current_user_facility()`' },
      { id: 'c', text: 'Using separate Databricks workspaces for each doctor with isolated metastores' },
      { id: 'd', text: 'Partitioning the Delta table by doctor username' }
    ],
    correctIds: ['b'],
    explanation: 'Dynamic Views in Unity Catalog allow fine-grained row-level security (RLS) by leveraging built-in session functions such as `current_user()` and `is_account_group_member()`, dynamically filtering records at query runtime based on the caller\'s identity.'
  },
  {
    id: 'db-dea-90',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Column Masking',
    type: 'single_choice',
    prompt: `Which SQL syntax correctly creates and applies a column mask in Unity Catalog so that users outside the \`compliance_team\` group see masked email addresses?`,
    options: [
      { id: 'a', text: '`ALTER TABLE customers ALTER COLUMN email SET MASK email_mask_fn();`' },
      { id: 'b', text: '`CREATE FUNCTION email_mask(email STRING) RETURNS STRING RETURN CASE WHEN is_account_group_member(\'compliance_team\') THEN email ELSE \'***MASKED***\' END;` followed by `ALTER TABLE customers ALTER COLUMN email SET MASK email_mask;`' },
      { id: 'c', text: '`GRANT MASK(email) ON TABLE customers TO compliance_team;`' },
      { id: 'd', text: '`ENCRYPT COLUMN email ON TABLE customers WITH KEY compliance_key;`' }
    ],
    correctIds: ['b'],
    explanation: 'Unity Catalog column masking uses SQL User Defined Functions (UDFs). You first define a scalar UDF returning the masked/unmasked value based on group membership, and then attach it to the column using `ALTER TABLE <table_name> ALTER COLUMN <col> SET MASK <function_name>;`.'
  },
  {
    id: 'db-dea-91',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Storage Credentials & External Locations',
    type: 'single_choice',
    prompt: `What is the security best practice for connecting Databricks to cloud object storage (AWS S3, Azure Data Lake, Google Cloud Storage) under Unity Catalog governance?`,
    options: [
      { id: 'a', text: 'Hardcode cloud access keys or SAS tokens directly inside notebook source code' },
      { id: 'b', text: 'Define Storage Credentials referencing cloud IAM managed identities or instance profiles, and create External Locations bound to those credentials' },
      { id: 'c', text: 'Store credentials in DBFS root in an unencrypted plaintext file' },
      { id: 'd', text: 'Configure all cluster worker nodes with public Internet IP addresses and bypass IAM' }
    ],
    correctIds: ['b'],
    explanation: 'Unity Catalog provides Storage Credentials (which encapsulate cloud IAM roles/identities) and External Locations (which bind a storage credential to a specific cloud storage URI). This prevents leaking storage keys and enforces centralized ACLs on cloud paths.'
  },
  {
    id: 'db-dea-92',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Unity Catalog Volumes',
    type: 'single_choice',
    prompt: `A data engineering team needs to govern unstructured files (PDF reports, video recordings, model artifacts) using Unity Catalog ACLs. Which object type in Unity Catalog represents a logical volume of storage for non-tabular data?`,
    options: [
      { id: 'a', text: 'Unity Catalog Schema' },
      { id: 'b', text: 'Unity Catalog Volume' },
      { id: 'c', text: 'Unity Catalog Lakehouse Queue' },
      { id: 'd', text: 'Delta Live File' }
    ],
    correctIds: ['b'],
    explanation: 'Unity Catalog Volumes are first-class securable objects that govern non-tabular data (such as raw files, CSVs, images, PDFs, models). Volumes support POSIX-like file paths (`/Volumes/catalog/schema/volume_name/file.ext`) with standard GRANT/REVOKE permissions.'
  },
  {
    id: 'db-dea-93',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Data Lineage in Unity Catalog',
    type: 'single_choice',
    prompt: `How does Unity Catalog capture and display end-to-end data lineage across tables, columns, notebooks, workflows, and dashboards?`,
    options: [
      { id: 'a', text: 'Engineers must manually document lineage by populating a custom tracking table after every pipeline run' },
      { id: 'b', text: 'Lineage is automatically captured at runtime down to the column level for any queries, Spark DataFrames, and Lakeflow pipelines executed on Unity Catalog-enabled compute' },
      { id: 'c', text: 'Lineage is only available when using third-party commercial governance agents' },
      { id: 'd', text: 'Lineage requires nightly batch scraping of git repositories' }
    ],
    correctIds: ['b'],
    explanation: 'Unity Catalog automatically captures table-level and column-level lineage in real time as queries run across SQL Warehouses, Lakeflow pipelines, and cluster compute, visualizing downstream and upstream dependencies in the Catalog Explorer UI.'
  },
  {
    id: 'db-dea-94',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Attribute-Based Access Control (ABAC)',
    type: 'single_choice',
    prompt: `An enterprise wants to enforce column masking on all columns across the entire organization tagged with \`pii = true\`, without needing to alter hundreds of individual tables manually. Which Unity Catalog feature provides this centralized enforcement?`,
    options: [
      { id: 'a', text: 'ABAC (Attribute-Based Access Control) tag-based policy' },
      { id: 'b', text: 'Single-node cluster bash scripts' },
      { id: 'c', text: 'Cron-scheduled CSV exports' },
      { id: 'd', text: 'Database trigger procedures' }
    ],
    correctIds: ['a'],
    explanation: 'Unity Catalog Tag-Based Masking (ABAC) allows administrators to assign tag-based policies at the metastore or catalog level. Any column tagged with a specific tag (e.g. `pii: true`) automatically inherits masking rules without modifying table DDL.'
  },
  {
    id: 'db-dea-95',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Governance and Security',
    subdomain: 'Service Principals & CI/CD Authentication',
    type: 'single_choice',
    prompt: `In an enterprise CI/CD pipeline deploying Lakeflow Jobs and DABs to production, which identity type should be used as the Run As owner of production jobs to avoid dependency on an individual developer\'s account?`,
    options: [
      { id: 'a', text: 'A designated personal user account of the lead data engineer' },
      { id: 'b', text: 'A Service Principal configured with OAuth machine-to-machine (M2M) credentials' },
      { id: 'c', text: 'The root account administrator username and password' },
      { id: 'd', text: 'An anonymous guest user' }
    ],
    correctIds: ['b'],
    explanation: 'Service Principals are non-human service identities recommended for automated workflows, CI/CD tools, and production jobs. Using OAuth M2M authentication with a Service Principal ensures job stability even when individual engineers leave the organization.'
  }
];

const governanceQuestionsES = [
  {
    id: 'db-dea-86-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Tablas Administradas vs Tablas Externas',
    type: 'single_choice',
    prompt: `Un ingeniero de datos ejecuta el comando \`DROP TABLE main.finance.invoices;\`. La tabla fue definida como una **Tabla Administrada (Managed Table)** en Unity Catalog.\n\n¿Qué ocurre con los archivos de datos subyacentes y los metadatos en Unity Catalog?`,
    options: [
      { id: 'a', text: 'Solo se eliminan los metadatos de Unity Catalog; los archivos de datos permanecen intactos en el almacenamiento en nube' },
      { id: 'b', text: 'Tanto los metadatos en Unity Catalog como los archivos de datos subyacentes almacenados en el contenedor administrado se eliminan permanentemente' },
      { id: 'c', text: 'La tabla se convierte en una tabla externa y se traslada a un esquema de cuarentena' },
      { id: 'd', text: 'Los archivos de datos se mueven al directorio raíz DBFS y se retienen durante 30 días' }
    ],
    correctIds: ['b'],
    explanation: 'Para las tablas administradas (Managed Tables) en Unity Catalog, Databricks gestiona tanto el ciclo de vida de los metadatos como los archivos físicos. Al eliminar una tabla administrada con DROP, se eliminan tanto los metadatos como los archivos de datos subyacentes del almacenamiento.'
  },
  {
    id: 'db-dea-87-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Tablas Externas y Ubicaciones Externas',
    type: 'single_choice',
    prompt: `Un ingeniero de datos ejecuta \`DROP TABLE main.marketing.leads;\`. La tabla fue creada con \`CREATE TABLE ... LOCATION \'abfss://marketing@storage.dfs.core.windows.net/leads\'\`.\n\n¿Cuál es el resultado de eliminar esta **Tabla Externa (External Table)**?`,
    options: [
      { id: 'a', text: 'Tanto los metadatos como los archivos de datos subyacentes en Azure Data Lake Storage se eliminan de forma permanente' },
      { id: 'b', text: 'Únicamente se elimina el registro de metadatos en Unity Catalog; los archivos físicos subyacentes permanecen intactos en la ruta de almacenamiento en nube' },
      { id: 'c', text: 'El comando falla con un error de ACCESS_DENIED porque las ubicaciones externas no se pueden eliminar mediante SQL' },
      { id: 'd', text: 'Los archivos se archivan en un volumen administrado de Unity Catalog' }
    ],
    correctIds: ['b'],
    explanation: 'Al eliminar una tabla externa en Unity Catalog, solo se descarta la entrada de metadatos del catálogo. Los archivos de datos subyacentes en el almacenamiento en nube del cliente permanecen intactos y pueden volver a registrarse en cualquier momento.'
  },
  {
    id: 'db-dea-88-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Jerarquía de Privilegios en Unity Catalog',
    type: 'single_choice',
    prompt: `Un analista de datos necesita consultar tablas en el esquema \`prod.sales\`. El administrador ejecuta:\n\`GRANT SELECT ON SCHEMA prod.sales TO \`analysts\`;\`\nSin embargo, los analistas siguen recibiendo el error \`ACCESS_DENIED\` al intentar ejecutar consultas.\n\n¿Qué privilegio adicional obligatorio se debe otorgar a los analistas?`,
    options: [
      { id: 'a', text: 'GRANT ALL PRIVILEGES ON TABLE sales.orders' },
      { id: 'b', text: 'GRANT USAGE ON CATALOG prod Y GRANT USAGE ON SCHEMA prod.sales' },
      { id: 'c', text: 'GRANT MODIFY ON METASTORE' },
      { id: 'd', text: 'GRANT READ FILES ON LOCATION' }
    ],
    correctIds: ['b'],
    explanation: 'En Unity Catalog, los objetos protegibles siguen una estricta jerarquía de 3 niveles. Para consultar una tabla o esquema, el usuario requiere el privilegio `USAGE` en el Catálogo padre y en el Esquema padre, además de `SELECT` sobre el objeto.'
  },
  {
    id: 'db-dea-89-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Vistas Dinámicas y Seguridad a Nivel de Fila (RLS)',
    type: 'single_choice',
    prompt: `Una empresa de salud debe garantizar que los médicos solo vean los registros de pacientes de su centro hospitalario asignado, mientras que los administradores hospitalarios puedan ver todos los registros. ¿Qué característica de Unity Catalog permite cumplir con este requisito sin duplicar tablas?`,
    options: [
      { id: 'a', text: 'Crear una tabla externa con subdirectorios separados para cada centro hospitalario' },
      { id: 'b', text: 'Crear una Vista Dinámica con una cláusula WHERE que utilice `is_account_group_member(\'admins\') OR facility_id = current_user_facility()`' },
      { id: 'c', text: 'Utilizar espacios de trabajo de Databricks independientes para cada médico con metastores aislados' },
      { id: 'd', text: 'Particionar la tabla Delta por el nombre de usuario del médico' }
    ],
    correctIds: ['b'],
    explanation: 'Las Vistas Dinámicas en Unity Catalog permiten aplicar seguridad a nivel de fila (RLS) en tiempo de ejecución utilizando funciones de sesión integradas como `current_user()` e `is_account_group_member()`, filtrando datos de acuerdo con los privilegios del usuario solicitante.'
  },
  {
    id: 'db-dea-90-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Enmascaramiento de Columnas (Column Masking)',
    type: 'single_choice',
    prompt: `¿Qué sintaxis SQL define y aplica correctamente una máscara de columna en Unity Catalog para que los usuarios fuera del grupo \`compliance_team\` vean los correos enmascarados?`,
    options: [
      { id: 'a', text: '\`ALTER TABLE customers ALTER COLUMN email SET MASK email_mask_fn();\`' },
      { id: 'b', text: '\`CREATE FUNCTION email_mask(email STRING) RETURNS STRING RETURN CASE WHEN is_account_group_member(\'compliance_team\') THEN email ELSE \'***MASKED***\' END;\` seguido de \`ALTER TABLE customers ALTER COLUMN email SET MASK email_mask;\`' },
      { id: 'c', text: '\`GRANT MASK(email) ON TABLE customers TO compliance_team;\`' },
      { id: 'd', text: '\`ENCRYPT COLUMN email ON TABLE customers WITH KEY compliance_key;\`' }
    ],
    correctIds: ['b'],
    explanation: 'El enmascaramiento de columnas en Unity Catalog utiliza funciones definidas por el usuario (UDFs). Se define una función escalar que evalúa la membresía del grupo y luego se asocia a la columna deseada mediante `ALTER TABLE <tabla> ALTER COLUMN <col> SET MASK <funcion>;`.'
  },
  {
    id: 'db-dea-91-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Credenciales de Almacenamiento y Ubicaciones Externas',
    type: 'single_choice',
    prompt: `¿Cuál es la mejor práctica de seguridad para conectar Databricks con el almacenamiento de objetos en la nube (AWS S3, Azure ADLS, Google GCS) bajo la gobernanza de Unity Catalog?`,
    options: [
      { id: 'a', text: 'Escribir las claves de acceso de la nube o tokens SAS directamente dentro del código fuente de los notebooks' },
      { id: 'b', text: 'Definir Credenciales de Almacenamiento (Storage Credentials) que referencien identidades administradas o roles IAM de la nube, y crear Ubicaciones Externas (External Locations) vinculadas a ellas' },
      { id: 'c', text: 'Guardar las credenciales en la raíz de DBFS en un archivo de texto sin cifrar' },
      { id: 'd', text: 'Configurar todos los nodos trabajadores con direcciones IP públicas para omitir IAM' }
    ],
    correctIds: ['b'],
    explanation: 'Unity Catalog desacopla el acceso mediante Storage Credentials (que encapsulan identidades administradas e IAM en la nube) y External Locations (que delimitan los URIs de almacenamiento autorizados). Esto evita la filtración de secretos y centraliza la auditoría.'
  },
  {
    id: 'db-dea-92-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Volúmenes en Unity Catalog (Volumes)',
    type: 'single_choice',
    prompt: `Un equipo de ingeniería de datos necesita gobernar archivos no estructurados (informes PDF, archivos de video, artefactos de modelos) con los permisos de Unity Catalog. ¿Qué tipo de objeto en Unity Catalog representa un volumen de almacenamiento para datos no tabulares?`,
    options: [
      { id: 'a', text: 'Esquema de Unity Catalog' },
      { id: 'b', text: 'Volumen de Unity Catalog (Volume)' },
      { id: 'c', text: 'Cola de Lakehouse (Lakehouse Queue)' },
      { id: 'd', text: 'Archivo Delta Live' }
    ],
    correctIds: ['b'],
    explanation: 'Los Volúmenes de Unity Catalog son objetos protegibles de primer nivel que gestionan archivos no tabulares (imágenes, PDFs, CSVs brutos, modelos). Soportan rutas estilo POSIX (`/Volumes/catalog/schema/volume_name/file.ext`) con gobernanza unificada GRANT/REVOKE.'
  },
  {
    id: 'db-dea-93-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Linaje de Datos en Unity Catalog',
    type: 'single_choice',
    prompt: `¿Cómo captura y muestra Unity Catalog el linaje de datos de extremo a extremo entre tablas, columnas, notebooks, pipelines y dashboards?`,
    options: [
      { id: 'a', text: 'Los ingenieros deben documentar manualmente el linaje llenando una tabla personalizada tras cada ejecución' },
      { id: 'b', text: 'El linaje se captura automáticamente en tiempo de ejecución a nivel de tabla y columna para cualquier consulta, DataFrame de Spark y pipeline de Lakeflow ejecutado en cómputo con Unity Catalog' },
      { id: 'c', text: 'El linaje solo está disponible si se instalan agentes comerciales de terceros' },
      { id: 'd', text: 'El linaje requiere scripts nocturnos de scraping sobre los repositorios git' }
    ],
    correctIds: ['b'],
    explanation: 'Unity Catalog captura de forma nativa y automática el linaje a nivel de columna y tabla en tiempo de ejecución, correlacionando lecturas y escrituras en pipelines, SQL Warehouses y notebooks para representarlo gráficamente en el Catalog Explorer.'
  },
  {
    id: 'db-dea-94-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Control de Acceso Basado en Atributos (ABAC)',
    type: 'single_choice',
    prompt: `Una organización desea aplicar enmascaramiento automático en todas las columnas etiquetadas con \`pii = true\` en todo el catálogo empresarial, sin tener que alterar cientos de tablas individualmente. ¿Qué funcionalidad de Unity Catalog proporciona esta gestión centralizada?`,
    options: [
      { id: 'a', text: 'Políticas de control de acceso basadas en etiquetas (ABAC tag-based policy)' },
      { id: 'b', text: 'Scripts en bash ejecutados en clústeres de nodo único' },
      { id: 'c', text: 'Exportaciones periódicas a CSV mediante cron' },
      { id: 'd', text: 'Procedimientos disparadores de base de datos' }
    ],
    correctIds: ['a'],
    explanation: 'Las políticas basadas en etiquetas (ABAC) de Unity Catalog permiten a los administradores asociar reglas de enmascaramiento y filtrado directamente a etiquetas (tags). Cualquier columna marcada con la etiqueta hereda automáticamente la política sin modificar la tabla.'
  },
  {
    id: 'db-dea-95-es',
    courseId: 'databricks-data-engineer-associate',
    domain: 'Gobernanza y Seguridad',
    subdomain: 'Entidades de Servicio y Autenticación CI/CD',
    type: 'single_choice',
    prompt: `En un pipeline de CI/CD empresarial que despliega Lakeflow Jobs y DABs a producción, ¿qué tipo de identidad debe configurarse como propietaria (Run As) de los trabajos en producción para no depender de la cuenta de un desarrollador individual?`,
    options: [
      { id: 'a', text: 'Una cuenta de usuario personal del ingeniero líder de datos' },
      { id: 'b', text: 'Una Entidad de Servicio (Service Principal) configurada con credenciales OAuth Machine-to-Machine (M2M)' },
      { id: 'c', text: 'El usuario y contraseña de administrador raíz de la cuenta' },
      { id: 'd', text: 'Un usuario invitado anónimo' }
    ],
    correctIds: ['b'],
    explanation: 'Las Entidades de Servicio (Service Principals) son identidades no humanas recomendadas para automatizaciones, herramientas de CI/CD y trabajos en producción. Utilizan tokens OAuth M2M y garantizan que los flujos no se interrumpan si un empleado deja la empresa.'
  }
];

// Map 80 existing questions into db-dea-1..80 and db-dea-1-es..80-es
const unifiedList = [];
let index = 1;

// Collect pairs
const enMap = new Map();
const esMap = new Map();

for (const q of rawQuestions) {
  if (q.id.endsWith('-es')) {
    const baseId = q.id.replace(/-es$/, '');
    esMap.set(baseId, q);
  } else {
    enMap.set(q.id, q);
  }
}

for (const [baseId, enQ] of enMap.entries()) {
  const esQ = esMap.get(baseId);
  const deaId = `db-dea-${index}`;
  const deaIdEs = `db-dea-${index}-es`;

  const newDomainEN = domainMapEN[enQ.domain] || enQ.domain;
  const newDomainES = esQ ? (domainMapES[esQ.domain] || esQ.domain) : newDomainEN;

  const transformedEN = {
    ...enQ,
    id: deaId,
    courseId: 'databricks-data-engineer-associate',
    domain: newDomainEN,
    subdomain: enQ.domain
  };

  unifiedList.push(transformedEN);

  if (esQ) {
    const transformedES = {
      ...esQ,
      id: deaIdEs,
      courseId: 'databricks-data-engineer-associate',
      domain: newDomainES,
      subdomain: esQ.domain
    };
    unifiedList.push(transformedES);
  }

  index++;
}

// Add sample questions (81 to 85)
sampleQuestionsEN.forEach(q => unifiedList.push(q));
sampleQuestionsES.forEach(q => unifiedList.push(q));

// Add governance questions (86 to 95)
governanceQuestionsEN.forEach(q => unifiedList.push(q));
governanceQuestionsES.forEach(q => unifiedList.push(q));

console.log(`Generated unified bank: ${unifiedList.length} total questions (95 EN + 95 ES).`);

// Write questions_databricks_dea.js
const fileContent = `/**
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
  const databricksDeaQuestions = ${JSON.stringify(unifiedList, null, 2)};

  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(databricksDeaQuestions);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = databricksDeaQuestions;
  }
})();
`;

fs.writeFileSync('D:/2026/Simulador de Preguntas/questions_databricks_dea.js', fileContent, 'utf8');
console.log('Successfully written D:/2026/Simulador de Preguntas/questions_databricks_dea.js!');
