// Builder for Databricks Certified Data Engineer Associate Study Center
const fs = require('fs');

function langSection(lang, content) {
  return `<div class="lang-section" data-lang="${lang}">\n${content}\n</div>`;
}

function contentBox(type, title, body) {
  return `
    <div class="content-box box-${type}">
      <strong class="box-title">${title}</strong>
      ${body}
    </div>
  `;
}

const studyDea = [
  // Domain 1: Databricks Intelligence Platform (6%)
  {
    title: '1. Databricks Intelligence Platform (6%)',
    items: [
      {
        title: '1.1 Lakehouse Architecture & Delta Lake Foundation',
        content: `
${langSection('en', `
  ${contentBox('blue', 'Core Architecture Principles', `
    <ul>
      <li><strong>Separation of Storage & Compute:</strong> Data resides in customer cloud object storage (ADLS, S3, GCS) in open Parquet/Delta format, while compute clusters scale independently.</li>
      <li><strong>Delta Lake ACID Transactions:</strong> Powered by the <code>_delta_log</code> (transaction log). Guarantees serializability, snapshot isolation, and instantaneous time travel (<code>VERSION AS OF</code> / <code>TIMESTAMP AS OF</code>).</li>
      <li><strong>Unified Governance:</strong> Unity Catalog acts as the single pane of glass for access control, automated data lineage, and audit trails across all AI and BI workloads.</li>
    </ul>
  `)}
  ${contentBox('green', 'Key Exam Patterns', `
    <ul>
      <li>Delta Lake eliminates dirty reads and phantom reads by creating versioned JSON commits in <code>_delta_log/</code> and periodic <code>.checkpoint.parquet</code> summaries.</li>
      <li>Metadata queries bypass cloud storage listing overhead because Delta keeps file statistics (min, max, null counts) directly in the transaction log.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('blue', 'Principios Fundamentales de Arquitectura', `
    <ul>
      <li><strong>Separación de Almacenamiento y Cómputo:</strong> Los datos residen en el almacenamiento de objetos de la nube (ADLS, S3, GCS) en formato abierto Parquet/Delta, permitiendo que los clústeres de cómputo escalen de forma independiente.</li>
      <li><strong>Transacciones ACID de Delta Lake:</strong> Impulsadas por el registro de transacciones <code>_delta_log</code>. Garantiza serializabilidad, aislamiento de instantáneas y viaje en el tiempo instantáneo (<code>VERSION AS OF</code> / <code>TIMESTAMP AS OF</code>).</li>
      <li><strong>Gobernanza Unificada:</strong> Unity Catalog funciona como el plano único de control de acceso, linaje automatizado de datos y pistas de auditoría tanto para cargas de IA como de BI.</li>
    </ul>
  `)}
  ${contentBox('green', 'Patrones Clave de Examen', `
    <ul>
      <li>Delta Lake previene lecturas sucias e inconsistentes creando confirmaciones versionadas JSON en <code>_delta_log/</code> y archivos <code>.checkpoint.parquet</code> periódicos.</li>
      <li>Las consultas de metadatos evitan la sobrecarga de listar archivos en la nube porque Delta conserva estadísticas (min, max, conteo de nulos) directamente en el log.</li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '1.2 Compute Services & Cost Models',
        content: `
${langSection('en', `
  ${contentBox('purple', 'Cluster Types Comparison', `
    <ul>
      <li><strong>All-Purpose Clusters:</strong> Used for interactive development, ad hoc analysis, and collaborative notebooks. High cost; billed at interactive DBU rates. Manual or auto-termination.</li>
      <li><strong>Job Clusters:</strong> Created automatically for scheduled workflows and terminated immediately upon task completion. Billed at lower automated DBU rates; cannot be shared across jobs.</li>
      <li><strong>Serverless SQL Warehouses:</strong> Instant-on, autoscaling compute specifically optimized for SQL and BI queries. Completely managed by Databricks with sub-second scaling.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('purple', 'Comparativa de Tipos de Clúster', `
    <ul>
      <li><strong>Clústeres All-Purpose:</strong> Utilizados para desarrollo interactivo, análisis ad hoc y cuadernos colaborativos. Mayor costo; facturados a tarifa interactiva de DBU. Terminación manual o automática.</li>
      <li><strong>Clústeres de Trabajo (Job Clusters):</strong> Creados automáticamente para flujos programados y finalizados al terminar la tarea. Facturados a tarifa de DBU automatizado (más económica); no pueden compartirse entre distintos jobs.</li>
      <li><strong>SQL Warehouses Serverless:</strong> Cómputo de inicio instantáneo y autoescalable optimizado para SQL y BI. Completamente gestionado por Databricks con escalado en subsegundos.</li>
    </ul>
  `)}
`)}
        `
      }
    ]
  },

  // Domain 2: Data Ingestion and Loading (21%)
  {
    title: '2. Data Ingestion and Loading (21%)',
    items: [
      {
        title: '2.1 Batch Ingestion: read_files() and COPY INTO',
        content: `
${langSection('en', `
  ${contentBox('blue', 'SQL-Native Ingestion Tools', `
    <ul>
      <li><code>read_files()</code>: Table-valued function in Databricks SQL that infers schemas from cloud storage formats (CSV, JSON, XML, Parquet, Avro). Supports schema hints, custom delimiters (<code>sep =&gt; \';\'</code>), and <code>rescuedDataColumn</code>.</li>
      <li><code>COPY INTO</code>: Idempotent SQL command for loading files from cloud object storage into an existing Delta table. Keeps track of loaded files to prevent duplicate ingestion:
        <pre><code>COPY INTO my_catalog.sales.raw_orders\nFROM 'abfss://landing@storage.dfs.core.windows.net/orders'\nFILEFORMAT = CSV\nFORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true')\nCOPY_OPTIONS ('mergeSchema' = 'true');</code></pre>
      </li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('blue', 'Herramientas de Ingesta Nativas en SQL', `
    <ul>
      <li><code>read_files()</code>: Función con valor de tabla en Databricks SQL que infiere esquemas en almacenamiento en nube (CSV, JSON, XML, Parquet, Avro). Soporta schema hints, delimitadores personalizados (<code>sep =&gt; \';\'</code>) y <code>rescuedDataColumn</code>.</li>
      <li><code>COPY INTO</code>: Comando SQL idempotente para cargar archivos desde almacenamiento de objetos hacia una tabla Delta existente. Registra qué archivos ya se cargaron para evitar duplicados:
        <pre><code>COPY INTO my_catalog.sales.raw_orders\nFROM 'abfss://landing@storage.dfs.core.windows.net/orders'\nFILEFORMAT = CSV\nFORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true')\nCOPY_OPTIONS ('mergeSchema' = 'true');</code></pre>
      </li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '2.2 Incremental & Streaming Ingestion: Auto Loader (cloudFiles)',
        content: `
${langSection('en', `
  ${contentBox('green', 'Auto Loader Key Features', `
    <ul>
      <li><strong>Source:</strong> <code>spark.readStream.format("cloudFiles")</code>. Efficiently detects and processes newly arrived files in cloud storage.</li>
      <li><strong>Modes:</strong>
        <ul>
          <li><strong>Directory Listing:</strong> Scans object storage recursively. Best for &lt; 1 million files.</li>
          <li><strong>File Notification:</strong> Automatically configures cloud event queues (AWS SQS/SNS, Azure Event Grid) for high-scale ingestion.</li>
        </ul>
      </li>
      <li><strong>Schema Evolution:</strong> Supports <code>addNewColumns</code>, <code>rescue</code>, <code>failOnNewColumns</code>, and <code>none</code>.</li>
      <li><strong>Rescued Data:</strong> Captured via <code>_rescued_data</code> column to store malformed records or unexpected schema fields without failing the stream.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('green', 'Características Clave de Auto Loader', `
    <ul>
      <li><strong>Fuente:</strong> <code>spark.readStream.format("cloudFiles")</code>. Detecta y procesa eficientemente archivos recién llegados al almacenamiento en nube.</li>
      <li><strong>Modos de Descubrimiento:</strong>
        <ul>
          <li><strong>Directory Listing:</strong> Escanea el almacenamiento de objetos recursivamente. Ideal para menos de 1 millón de archivos.</li>
          <li><strong>File Notification:</strong> Configura colas de eventos en la nube (AWS SQS/SNS, Azure Event Grid) para ingesta a gran escala.</li>
        </ul>
      </li>
      <li><strong>Evolución de Esquema:</strong> Soporta <code>addNewColumns</code>, <code>rescue</code>, <code>failOnNewColumns</code> y <code>none</code>.</li>
      <li><strong>Datos Rescatados:</strong> Se guardan en la columna <code>_rescued_data</code> para preservar registros malformados o columnas no previstas sin detener el flujo.</li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '2.3 Managed Ingestion: Lakeflow Connect',
        content: `
${langSection('en', `
  ${contentBox('purple', 'Lakeflow Connect Ingestion Architecture', `
    <ul>
      <li><strong>Managed Gateways:</strong> Provides point-and-click serverless CDC ingestion from SaaS systems (Salesforce, Workday, ServiceNow) and enterprise databases (SQL Server, MySQL, Postgres, Oracle).</li>
      <li><strong>Automated Schema Sync:</strong> Automatically detects upstream schema migrations, maps source types to Delta Lake types, and manages historical data backfills.</li>
      <li><strong>Native Unity Catalog Governance:</strong> Lands data directly into governed Delta tables with automated table-level lineage.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('purple', 'Arquitectura de Ingesta con Lakeflow Connect', `
    <ul>
      <li><strong>Gateways Administrados:</strong> Ingesta CDC serverless sin código desde plataformas SaaS (Salesforce, Workday, ServiceNow) y bases de datos relacionales (SQL Server, MySQL, Postgres, Oracle).</li>
      <li><strong>Sincronización Automática de Esquemas:</strong> Detecta migraciones de esquema en origen, mapea tipos de datos hacia Delta Lake y ejecuta cargas históricas (backfill) de forma desatendida.</li>
      <li><strong>Gobernanza Nativa en Unity Catalog:</strong> Los datos ingresan directamente a tablas Delta gobernadas con linaje automatizado.</li>
    </ul>
  `)}
`)}
        `
      }
    ]
  },

  // Domain 3: Data Transformation and Modeling (22%)
  {
    title: '3. Data Transformation and Modeling (22%)',
    items: [
      {
        title: '3.1 Medallion Architecture & Spark Declarative Pipelines',
        content: `
${langSection('en', `
  ${contentBox('blue', 'Medallion Data Layers', `
    <ul>
      <li><strong>Bronze (Raw Ingest):</strong> Append-only historical log of raw source files. Preserves raw fidelity and schema metadata.</li>
      <li><strong>Silver (Cleaned & Conformed):</strong> Cleaned, validated, typed, and joined data. Duplicates removed; business keys unified.</li>
      <li><strong>Gold (Curated Analytics):</strong> Aggregated, business-level datasets ready for reporting, BI, and ML models. Built as Materialized Views or tables.</li>
    </ul>
  `)}
  ${contentBox('green', 'Lakeflow Spark Declarative Pipelines (DLT)', `
    <ul>
      <li><strong>Streaming Tables (<code>@dlt.table</code>):</strong> Ideal for append-only streaming ingestion (Auto Loader). Processes only new records incrementally.</li>
      <li><strong>Materialized Views (<code>@dlt.table</code>):</strong> Automatically computes incremental results when source tables update; ideal for complex aggregations and joins.</li>
      <li><strong>Change Data Capture (CDC):</strong> <code>AUTO CDC INTO</code> or <code>apply_changes()</code> simplifies SCD Type 1 (in-place update) and SCD Type 2 (historical tracking) without complex MERGE queries.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('blue', 'Capas del Modelo Medallion', `
    <ul>
      <li><strong>Bronze (Ingesta Cruda):</strong> Registro histórico de sólo adición (append-only) de los archivos fuente. Preserva fidelidad y metadatos de origen.</li>
      <li><strong>Silver (Datos Limpios y Conformados):</strong> Datos limpios, tipificados y unificados. Duplicados eliminados y claves de negocio normalizadas.</li>
      <li><strong>Gold (Analítica Curada):</strong> Conjuntos de datos agregados y modelados para reportes, cuadros de mando y modelos de IA/BI. Construidos como Vistas Materializadas o tablas.</li>
    </ul>
  `)}
  ${contentBox('green', 'Pipelines Declarativos con Spark (DLT)', `
    <ul>
      <li><strong>Tablas Streaming (<code>@dlt.table</code>):</strong> Ideales para ingesta streaming de sólo adición con Auto Loader. Procesa únicamente datos recién llegados.</li>
      <li><strong>Vistas Materializadas (<code>@dlt.table</code>):</strong> Calculan automáticamente actualizaciones incrementales; ideales para agregaciones complejas y transformaciones analíticas.</li>
      <li><strong>Change Data Capture (CDC):</strong> <code>AUTO CDC INTO</code> o <code>apply_changes()</code> implementa SCD Tipo 1 (actualización in-place) y SCD Tipo 2 (historial de cambios) sin sintaxis manual compleja.</li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '3.2 Data Quality Expectations',
        content: `
${langSection('en', `
  ${contentBox('purple', 'DLT Expectation Actions', `
    <ul>
      <li><code>@dlt.expect("valid_id", "order_id IS NOT NULL")</code>: Retains invalid records in target table, records failure metrics in DLT Event Log.</li>
      <li><code>@dlt.expect_or_drop("valid_price", "price &gt; 0")</code>: Drops invalid records before writing to target table; records dropped count in Event Log.</li>
      <li><code>@dlt.expect_or_fail("valid_date", "order_date &lt;= current_date()")</code>: Immediately halts pipeline execution upon finding any violating record.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('purple', 'Acciones de Expectativas en DLT', `
    <ul>
      <li><code>@dlt.expect("valid_id", "order_id IS NOT NULL")</code>: Mantiene los registros inválidos en la tabla de destino y registra la métrica en el Event Log.</li>
      <li><code>@dlt.expect_or_drop("valid_price", "price &gt; 0")</code>: Descarta los registros inválidos antes de escribir en destino; registra el conteo de descartes.</li>
      <li><code>@dlt.expect_or_fail("valid_date", "order_date &lt;= current_date()")</code>: Detiene inmediatamente la ejecución de todo el pipeline al encontrar cualquier registro infractor.</li>
    </ul>
  `)}
`)}
        `
      }
    ]
  },

  // Domain 4: Working with Lakeflow Jobs (16%)
  {
    title: '4. Working with Lakeflow Jobs (16%)',
    items: [
      {
        title: '4.1 DAG Task Configuration & Dependencies',
        content: `
${langSection('en', `
  ${contentBox('blue', 'Task Graph Orchestration', `
    <ul>
      <li><strong>Multi-Task Jobs:</strong> Support Notebook, SQL Query, Pipeline, Python Script, Dashboard, and Alert tasks within a single Directed Acyclic Graph (DAG).</li>
      <li><strong>Dependency Enforcement:</strong> Tasks specify upstream parents (<code>depends_on</code>). Downstream tasks execute only when prerequisites complete successfully.</li>
      <li><strong>Dynamic Values:</strong> Pass task outputs to downstream tasks using <code>taskValues</code>:
        <pre><code>dbutils.jobs.taskValues.set(key="row_count", value=1500)\n# Downstream task:\ncount = dbutils.jobs.taskValues.get(taskKey="task_a", key="row_count")</code></pre>
      </li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('blue', 'Orquestación de Grafos de Tareas (DAGs)', `
    <ul>
      <li><strong>Trabajos Multi-Tarea:</strong> Admiten tareas de Cuaderno, Consulta SQL, Pipeline DLT, Script Python, Tablero y Alerta dentro de un grafo acíclico dirigido (DAG).</li>
      <li><strong>Control de Dependencias:</strong> Cada tarea define sus predecesores (<code>depends_on</code>). Las tareas dependientes solo se disparan cuando las anteriores concluyen exitosamente.</li>
      <li><strong>Valores Dinámicos:</strong> Permite pasar variables entre tareas mediante <code>taskValues</code>:
        <pre><code>dbutils.jobs.taskValues.set(key="row_count", value=1500)\n# Tarea dependiente:\ncount = dbutils.jobs.taskValues.get(taskKey="task_a", key="row_count")</code></pre>
      </li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '4.2 Triggers and Conditional Control Flow',
        content: `
${langSection('en', `
  ${contentBox('green', 'Job Triggers & Conditions', `
    <ul>
      <li><strong>Scheduled Trigger:</strong> Executes based on a cron syntax schedule or calendar interval.</li>
      <li><strong>Continuous Trigger:</strong> Keeps the job running permanently, immediately re-executing whenever a run completes.</li>
      <li><strong>File Arrival Trigger:</strong> Automatically starts the job when new files land in an external cloud storage path.</li>
      <li><strong>Table Update Trigger:</strong> Automatically starts the job when target tables in Unity Catalog receive new data commits.</li>
      <li><strong>Conditional Tasks:</strong>
        <ul>
          <li><strong>If/Else:</strong> Evaluates Boolean expressions or task value status to choose downstream branch.</li>
          <li><strong>For Each:</strong> Iterates a task over an array of items in parallel or sequence.</li>
        </ul>
      </li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('green', 'Disparadores y Flujo Condicional', `
    <ul>
      <li><strong>Disparador Programado:</strong> Se ejecuta periódicamente según una expresión cron o intervalo de calendario.</li>
      <li><strong>Disparador Continuo:</strong> Mantiene el trabajo en ejecución constante, reiniciándolo en cuanto termina la corrida anterior.</li>
      <li><strong>Disparador por Llegada de Archivos (File Arrival):</strong> Dispara el trabajo cuando nuevos archivos se depositan en una ruta de nube externa.</li>
      <li><strong>Disparador por Actualización de Tabla (Table Update):</strong> Se activa cuando tablas gobernadas en Unity Catalog registran nuevas operaciones de inserción o modificación.</li>
      <li><strong>Tareas Condicionales:</strong>
        <ul>
          <li><strong>If/Else:</strong> Evalúa condiciones booleanas para determinar qué rama del grafo debe continuar.</li>
          <li><strong>For Each:</strong> Itera una tarea sobre una lista o matriz de parámetros de forma secuencial o paralela.</li>
        </ul>
      </li>
    </ul>
  `)}
`)}
        `
      }
    ]
  },

  // Domain 5: Implementing CI/CD (10%)
  {
    title: '5. Implementing CI/CD (10%)',
    items: [
      {
        title: '5.1 Databricks Git Folders & Workspace Development',
        content: `
${langSection('en', `
  ${contentBox('blue', 'Git Integration in Databricks', `
    <ul>
      <li><strong>Git Folders (formerly Repos):</strong> Sync workspace directories directly with GitHub, GitLab, Bitbucket, or Azure DevOps.</li>
      <li><strong>Branching:</strong> Developers create feature branches, commit code changes directly from the UI, and create pull requests for peer reviews.</li>
      <li><strong>Repo Secrets:</strong> Authenticated using personal access tokens (PATs) or enterprise OAuth providers.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('blue', 'Integración de Git en Databricks', `
    <ul>
      <li><strong>Git Folders (anteriormente Repos):</strong> Sincronizan carpetas del workspace directamente con GitHub, GitLab, Bitbucket o Azure DevOps.</li>
      <li><strong>Ramas (Branching):</strong> Los ingenieros crean ramas de trabajo, realizan commits desde la interfaz y generan pull requests para revisión por pares.</li>
      <li><strong>Credenciales Seguras:</strong> Autenticadas mediante tokens de acceso personal (PATs) o proveedores corporativos OAuth.</li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '5.2 Databricks Asset Bundles (DABs) & CLI',
        content: `
${langSection('en', `
  ${contentBox('purple', 'Infrastructure & Pipelines as Code', `
    <ul>
      <li><code>databricks.yml</code>: Root configuration defining project resources (Lakeflow Jobs, Pipelines, Notebooks, Models) and target environments (dev, test, prod).</li>
      <li><strong>Variable Overrides:</strong> Environment-specific catalogs, schemas, and compute clusters are defined in <code>targets:</code> blocks.</li>
      <li><strong>Core CLI Commands:</strong>
        <ul>
          <li><code>databricks bundle validate</code>: Checks bundle syntax and validates cloud resource definitions.</li>
          <li><code>databricks bundle deploy -t prod</code>: Synthesizes resources and deploys to target environment.</li>
          <li><code>databricks bundle run -t prod &lt;job_key&gt;</code>: Triggers execution in target workspace.</li>
        </ul>
      </li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('purple', 'Infraestructura y Pipelines como Código', `
    <ul>
      <li><code>databricks.yml</code>: Archivo de configuración que declara recursos (Jobs, Pipelines, Cuadernos) y entornos destino (dev, test, prod).</li>
      <li><strong>Variables por Entorno:</strong> Los catálogos, esquemas y clústeres de cada entorno se parametrizan en bloques <code>targets:</code>.</li>
      <li><strong>Comandos Principales de la CLI:</strong>
        <ul>
          <li><code>databricks bundle validate</code>: Valida la sintaxis del paquete y la estructura de los recursos.</li>
          <li><code>databricks bundle deploy -t prod</code>: Despliega los recursos en el workspace de producción.</li>
          <li><code>databricks bundle run -t prod &lt;job_key&gt;</code>: Inicia la ejecución del trabajo en el entorno indicado.</li>
        </ul>
      </li>
    </ul>
  `)}
`)}
        `
      }
    ]
  },

  // Domain 6: Troubleshooting, Monitoring, and Optimization (10%)
  {
    title: '6. Troubleshooting, Monitoring, and Optimization (10%)',
    items: [
      {
        title: '6.1 Spark Performance Bottlenecks & Spark UI',
        content: `
${langSection('en', `
  ${contentBox('blue', 'Performance Bottlenecks Diagnostics', `
    <ul>
      <li><strong>Data Skew:</strong> One task processes significantly more data than others (e.g. 5 GB max vs 400 MB median). Resolve with <strong>Adaptive Query Execution (AQE) skew join</strong> (<code>spark.sql.adaptive.skewJoin.enabled = true</code>) or salting.</li>
      <li><strong>Disk Spill:</strong> Occurs when memory is exhausted and intermediate shuffle data spills to disk (Spill (Memory) vs Spill (Disk)). Resolve by increasing worker memory or tuning <code>spark.sql.shuffle.partitions</code>.</li>
      <li><strong>Broadcast Joins:</strong> Small tables (&lt; <code>spark.sql.autoBroadcastJoinThreshold</code>, default 10MB) are broadcast to all executors, avoiding expensive shuffle stages.</li>
      <li><strong>Liquid Clustering:</strong> Modern alternative to partitioning and Z-Ordering. Adaptively reorganizes data without data rewriting overhead; specified with <code>CLUSTER BY (col1, col2)</code>.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('blue', 'Diagnóstico de Cuellos de Botella en Spark UI', `
    <ul>
      <li><strong>Sesgo de Datos (Data Skew):</strong> Una tarea procesa sustancialmente más datos que las demás (ej. 5 GB máx vs 400 MB mediana). Se soluciona activando <strong>AQE Skew Join</strong> (<code>spark.sql.adaptive.skewJoin.enabled = true</code>) o con técnicas de salting.</li>
      <li><strong>Desbordamiento a Disco (Disk Spill):</strong> Sucede cuando la memoria RAM se agota y los datos intermedios se escriben en disco. Se corrige aumentando la memoria del ejecutor o ajustando <code>spark.sql.shuffle.partitions</code>.</li>
      <li><strong>Broadcast Joins:</strong> Las tablas pequeñas (&lt; <code>spark.sql.autoBroadcastJoinThreshold</code>, default 10MB) se transmiten completas a cada ejecutor, eliminando etapas de shuffle costosas.</li>
      <li><strong>Liquid Clustering:</strong> Alternativa moderna al particionamiento y Z-Order. Reorganiza datos de forma incremental y adaptativa mediante <code>CLUSTER BY (col1, col2)</code> sin reescribir toda la tabla.</li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '6.2 Lakeflow Jobs Run Repair & Monitoring',
        content: `
${langSection('en', `
  ${contentBox('green', 'Job Troubleshooting Patterns', `
    <ul>
      <li><strong>Run Repair:</strong> In multi-task jobs where only 1 or 2 tasks fail, Lakeflow Jobs allows repairing the run, re-executing only failed tasks and their downstream dependents without re-running successful upstream tasks.</li>
      <li><strong>Run History View:</strong> Provides historical trend analysis to spot duration degradation and stage latency regressions against historical baselines.</li>
      <li><strong>Alert Notifications:</strong> Send webhook, email, or Slack alerts on job failure, success, or duration SLA violations.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('green', 'Reparación de Trabajos y Monitoreo', `
    <ul>
      <li><strong>Reparación de Corridas (Repair Run):</strong> En trabajos con múltiples tareas donde fallan una o dos, Lakeflow Jobs permite reejecutar únicamente las tareas fallidas y sus dependientes, ahorrando tiempo y cómputo al omitir las tareas previas exitosas.</li>
      <li><strong>Historial de Ejecución:</strong> Permite comparar los tiempos de ejecución actuales frente a promedios históricos para identificar regresiones y lentitud.</li>
      <li><strong>Alertas Automatizadas:</strong> Envío de notificaciones a correo, Slack o webhooks por fallas, éxitos o superación de umbrales SLA de duración.</li>
    </ul>
  `)}
`)}
        `
      }
    ]
  },

  // Domain 7: Governance and Security (15%)
  {
    title: '7. Governance and Security (15%)',
    items: [
      {
        title: '7.1 Unity Catalog 3-Level Namespace & Managed vs External Tables',
        content: `
${langSection('en', `
  ${contentBox('blue', 'Unity Catalog Hierarchy & Object Types', `
    <ul>
      <li><strong>3-Level Namespace:</strong> <code>&lt;catalog&gt;.&lt;schema&gt;.&lt;table_or_view&gt;</code>.</li>
      <li><strong>Managed Tables:</strong> Databricks manages both metadata and cloud storage files. Dropping a managed table deletes underlying files permanently.</li>
      <li><strong>External Tables:</strong> Created with explicit <code>LOCATION \'cloud_path\'</code>. Dropping an external table deletes only metadata; raw files remain in cloud object storage.</li>
      <li><strong>Storage Credentials:</strong> Secure cloud IAM identities managed in Unity Catalog without hardcoding credentials in notebooks.</li>
      <li><strong>External Locations:</strong> Pair a Storage Credential with a specific cloud storage URI path.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('blue', 'Jerarquía de Unity Catalog y Tipos de Tablas', `
    <ul>
      <li><strong>Espacio de Nombres de 3 Niveles:</strong> <code>&lt;catalogo&gt;.&lt;esquema&gt;.&lt;tabla_o_vista&gt;</code>.</li>
      <li><strong>Tablas Administradas (Managed):</strong> Databricks gestiona metadatos y almacenamiento. Al eliminarlas con DROP se borran los archivos de datos permanentemente.</li>
      <li><strong>Tablas Externas (External):</strong> Definidas con <code>LOCATION \'ruta_cloud\'</code>. Al eliminarlas con DROP solo se elimina el registro en el catálogo; los archivos físicos se conservan en la nube.</li>
      <li><strong>Credenciales de Almacenamiento (Storage Credentials):</strong> Encapsulan identidades y roles IAM de la nube sin exponer credenciales en los cuadernos.</li>
      <li><strong>Ubicaciones Externas (External Locations):</strong> Vinculan una Storage Credential a una URL específica de almacenamiento en la nube.</li>
    </ul>
  `)}
`)}
        `
      },
      {
        title: '7.2 Access Control, Row-Level Security & Column Masking',
        content: `
${langSection('en', `
  ${contentBox('purple', 'Fine-Grained Security & Privacy', `
    <ul>
      <li><strong>Privilege Inheritance:</strong> To query a table, users require <code>USAGE</code> on the parent Catalog and Schema, plus <code>SELECT</code> on the table.</li>
      <li><strong>Dynamic Views & RLS:</strong> Use <code>current_user()</code> and <code>is_account_group_member()</code> to filter sensitive rows dynamically based on the querying principal.</li>
      <li><strong>Column Masking:</strong> Attach scalar UDFs to table columns via <code>ALTER TABLE table_name ALTER COLUMN col SET MASK mask_fn;</code>.</li>
      <li><strong>Tag-Based Policies (ABAC):</strong> Centrally govern policies by applying tags (e.g. <code>pii = true</code>) that automatically enforce column masks across the metastore.</li>
    </ul>
  `)}
`)}
${langSection('es', `
  ${contentBox('purple', 'Seguridad Granular y Privacidad de Datos', `
    <ul>
      <li><strong>Herencia de Privilegios:</strong> Para consultar una tabla se requiere <code>USAGE</code> en el Catálogo y Esquema padre, y <code>SELECT</code> sobre la tabla.</li>
      <li><strong>Vistas Dinámicas y RLS:</strong> Utilizan <code>current_user()</code> e <code>is_account_group_member()</code> para filtrar filas según el usuario o grupo en tiempo de ejecución.</li>
      <li><strong>Enmascaramiento de Columnas:</strong> Vinculación de funciones escalares a columnas mediante <code>ALTER TABLE tabla ALTER COLUMN columna SET MASK funcion_mascara;</code>.</li>
      <li><strong>Políticas Basadas en Etiquetas (ABAC):</strong> Gobernanza centralizada donde las columnas etiquetadas (ej. <code>pii = true</code>) heredan automáticamente reglas de enmascaramiento.</li>
    </ul>
  `)}
`)}
        `
      }
    ]
  }
];

const studyFileContent = `/**
 * 🥋 THE DATA DOJO — Databricks Certified Data Engineer Associate Study Center
 * Comprehensive, bilingual study center structured into the 7 official certification domains.
 */
(function() {
  if (typeof window !== 'undefined') {
    window.studyData = window.studyData || {};
    window.studyData['databricks-data-engineer-associate'] = ${JSON.stringify(studyDea, null, 2)};
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = studyDea;
  }
})();
`;

fs.writeFileSync('D:/2026/Simulador de Preguntas/study_databricks_dea.js', studyFileContent, 'utf8');
console.log('Successfully written D:/2026/Simulador de Preguntas/study_databricks_dea.js!');
