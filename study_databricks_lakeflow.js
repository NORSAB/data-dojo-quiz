(function() {
    window.studyData = window.studyData || {};

    const styleBox = (type, title) => `
        <div class="content-box box-${type}">
            ${title ? `<strong class="box-title">${title}</strong>` : ''}
    `;

    const langSection = (lang, content) => `
        <div class="lang-section" data-lang="${lang}">${content}</div>
    `;

    const fc = (q, a) => `
        <div style="margin-bottom:12px; padding:12px; background:var(--bg-body); border-radius:6px; border-left:4px solid var(--primary-color);">
            <div style="font-weight:600; margin-bottom:4px; color:var(--primary-color);">Q: ${q}</div>
            <div style="color:var(--text-color);">A: ${a}</div>
        </div>
    `;

    // =========================================================================
    // 1. DATA INGESTION WITH LAKEFLOW CONNECT (databricks-lakeflow-connect)
    // =========================================================================
    window.studyData["databricks-lakeflow-connect"] = [
        {
            title: "1. Architecture & Lakehouse Ingestion / Arquitectura e Ingesta Lakehouse",
            items: [
                {
                    title: "1.1 Medallion Architecture Principles / Principios de Arquitectura Medallion",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Core Architecture Patterns')}
                            ${fc('What is the role of the Bronze layer in Lakeflow ingestion?', 'Acts as the raw, append-only landing zone preserving fidelity of incoming data with ingestion metadata (file path, timestamp).')}
                            ${fc('How does Silver differ from Bronze?', 'Silver cleans, enriches, deduplicates, and enforces enterprise schemas, creating a validated source for downstream analytics.')}
                            ${fc('What is Gold layer data optimized for?', 'High-performance reporting, business-level dimensional models, KPIs, and machine learning feature stores.')}
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Patrones Fundamentales de Arquitectura')}
                            ${fc('¿Cuál es el rol de la capa Bronze en la ingesta Lakeflow?', 'Actúa como la zona de aterrizaje cruda e inmutable de solo adición, preservando la fidelidad de los datos fuente con metadatos de ingesta.')}
                            ${fc('¿En qué se diferencia Silver de Bronze?', 'Silver limpia, enriquece, deduplica y aplica esquemas empresariales, sirviendo como base confiable para analítica.')}
                            ${fc('¿Para qué se optimiza la capa Gold?', 'Modelos dimensionales de negocio, agregaciones de alto rendimiento, KPIs y almacenes de características de machine learning.')}
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.2 Unity Catalog as Central Target / Unity Catalog como Destino Central",
                    content: `
                        ${langSection('en', `
                            ${fc('Why synchronize Lakeflow pipelines to Unity Catalog?', 'Provides unified data governance, 3-level namespaces (catalog.schema.table), granular access control, and end-to-end data lineage.')}
                            ${fc('What is the default table format created by CTAS in Databricks?', 'Delta Lake, providing ACID transactions, time travel, and unified streaming/batch processing.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué sincronizar pipelines de Lakeflow hacia Unity Catalog?', 'Garantiza gobernanza unificada, espacio de nombres de tres niveles (catalog.schema.table), control de acceso granular y linaje completo.')}
                            ${fc('¿Cuál es el formato de tabla creado por defecto mediante CTAS en Databricks?', 'Delta Lake, aportando transacciones ACID, viaje en el tiempo y soporte unificado batch/streaming.')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "2. Cloud Storage Ingestion & Auto Loader / Ingesta Cloud y Auto Loader",
            items: [
                {
                    title: "2.1 read_files() Table-Valued Function / Función Tabular read_files()",
                    content: `
                        ${langSection('en', `
                            ${fc('What parameters configure custom CSV ingestion in read_files()?', 'sep => ";", header => true, schema => "...", and rescuedDataColumn => "_rescued_data".')}
                            ${fc('What metadata can be extracted using the hidden _metadata column?', 'file_name, file_path, file_size, and file_modification_time.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué parámetros configuran la ingesta personalizada de CSV en read_files()?', 'sep => ";", header => true, schema => "..." y rescuedDataColumn => "_rescued_data".')}
                            ${fc('¿Qué metadatos pueden extraerse con la columna oculta _metadata?', 'file_name, file_path, file_size y file_modification_time del archivo fuente.')}
                        `)}
                    `
                },
                {
                    title: "2.2 Auto Loader & Streaming Tables / Auto Loader y Tablas Streaming",
                    content: `
                        ${langSection('en', `
                            ${fc('How does CREATE STREAMING TABLE replace COPY INTO?', 'It provides a declarative, managed SQL syntax integrating Auto Loader with automated checkpoints and incremental state.')}
                            ${fc('What happens when new columns appear in incoming data?', 'Auto Loader automatically evolves the schema according to the configured schemaEvolutionMode (e.g. addNewColumns).')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cómo reemplaza CREATE STREAMING TABLE a COPY INTO?', 'Ofrece sintaxis SQL declarativa nativa combinando Auto Loader con gestión autónoma de checkpoints y estado incremental.')}
                            ${fc('¿Qué ocurre cuando aparecen nuevas columnas en los datos entrantes?', 'Auto Loader evoluciona el esquema de la tabla automáticamente según el modo configurado (ej. addNewColumns).')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "3. Lakeflow Connect Managed Connectors / Conectores Gestionados Lakeflow Connect",
            items: [
                {
                    title: "3.1 Managed Connectors & Ingestion Gateway / Conectores y Gateway",
                    content: `
                        ${langSection('en', `
                            ${fc('What distinguishes Managed Connectors from Standard Connectors?', 'Managed Connectors are fully built, operated, and maintained serverless by Databricks for databases and SaaS apps; standard connectors read cloud files.')}
                            ${fc('What is the role of the Ingestion Gateway?', 'Establishes secure network connectivity to the source operational database and manages change log extraction.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué distingue a los Conectores Gestionados de los Conectores Estándar?', 'Los Conectores Gestionados son operados como servicio serverless por Databricks para bases de datos y SaaS; los estándar leen almacenamiento de archivos cloud.')}
                            ${fc('¿Cuál es el rol del Ingestion Gateway?', 'Establece la conexión de red segura con la base de datos operacional de origen y gestiona la captura del registro transaccional.')}
                        `)}
                    `
                },
                {
                    title: "3.2 Schema Evolution & VARIANT / Evolución de Esquema y VARIANT",
                    content: `
                        ${langSection('en', `
                            ${fc('When should the VARIANT data type be chosen?', 'For semi-structured JSON payloads where query performance, schema flexibility, and sub-column pruning are required.')}
                            ${fc('How to enable automatic schema evolution during MERGE INTO?', 'Using the MERGE WITH SCHEMA EVOLUTION INTO target syntax.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cuándo se debe elegir el tipo de datos VARIANT?', 'Para cargas JSON semiestructuradas que requieren alto rendimiento de consulta, flexibilidad de esquema y poda sub-columna.')}
                            ${fc('¿Cómo habilitar evolución automática de esquema durante MERGE INTO?', 'Utilizando la cláusula MERGE WITH SCHEMA EVOLUTION INTO target.')}
                        `)}
                    `
                }
            ]
        }
    ];

    // =========================================================================
    // 2. DEPLOY WORKLOADS WITH LAKEFLOW JOBS (databricks-lakeflow-jobs)
    // =========================================================================
    window.studyData["databricks-lakeflow-jobs"] = [
        {
            title: "1. Orchestration & DAG Architecture / Orquestación y Arquitectura DAG",
            items: [
                {
                    title: "1.1 Jobs and Tasks Fundamentals / Fundamentos de Jobs y Tareas",
                    content: `
                        ${langSection('en', `
                            ${fc('What is the fundamental difference between a Job and a Task?', 'A Task is an individual unit of execution (notebook, SQL, Python, pipeline); a Job is the DAG container orchestrating dependencies and schedules.')}
                            ${fc('What is the minimum requirement for a valid Job?', 'A single task specifying execution logic and compute resources.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cuál es la diferencia fundamental entre un Job y una Tarea?', 'Una Tarea es una unidad individual de ejecución (notebook, SQL, script); un Job es el contenedor DAG que orquesta dependencias y horarios.')}
                            ${fc('¿Cuál es el requisito mínimo para que un Job sea válido?', 'Una sola tarea configurada con su lógica de ejecución y recurso de cómputo.')}
                        `)}
                    `
                },
                {
                    title: "1.2 DAG Topology & Fan-out / Topología DAG y Patrón Fan-out",
                    content: `
                        ${langSection('en', `
                            ${fc('How does a fan-out pattern execute downstream tasks?', 'Multiple independent downstream tasks execute concurrently in parallel as soon as their shared upstream parent completes.')}
                            ${fc('How to ensure a task only runs when multiple parents succeed?', 'Set dependencies on all parent tasks and configure Run if condition to "All succeeded".')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cómo ejecuta las tareas downstream el patrón de abanico (fan-out)?', 'Múltiples tareas downstream independientes corren en paralelo inmediatamente después de que el nodo padre compartido finaliza con éxito.')}
                            ${fc('¿Cómo asegurar que una tarea solo corra si múltiples padres tuvieron éxito?', 'Configurando dependencias hacia todas las tareas padre y seleccionando la condición Run if en "All succeeded".')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "2. Control Flow & Dynamic Execution / Control de Flujo y Ejecución Dinámica",
            items: [
                {
                    title: "2.1 Conditional Tasks (If/Else) / Tareas Condicionales (If/Else)",
                    content: `
                        ${langSection('en', `
                            ${fc('How does the If/Else task enhance pipelines?', 'Evaluates dynamic boolean expressions or task values at runtime, branching the workflow adaptively based on real data metrics.')}
                            ${fc('What is a For Each task used for?', 'Iterates through an input array (e.g. list of regions or partition keys), running nested tasks with configurable concurrency up to 100.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cómo potencian las tareas If/Else a los pipelines?', 'Evalúan expresiones booleanas o salidas de tareas previas en tiempo de ejecución, bifurcando el flujo de forma adaptable.')}
                            ${fc('¿Para qué se utiliza la tarea For Each?', 'Itera sobre un arreglo de entrada (ej. lista de regiones o particiones), ejecutando tareas anidadas con concurrencia de hasta 100.')}
                        `)}
                    `
                },
                {
                    title: "2.2 Parameter Scoping: Job vs Task / Ámbito de Parámetros: Job vs Tarea",
                    content: `
                        ${langSection('en', `
                            ${fc('Where to define parameters shared by all tasks by default?', 'In the Job Parameters section at the root workflow level.')}
                            ${fc('When are Task Parameters necessary?', 'For task-specific overrides, iterator variables in For Each tasks, or downstream task value references.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Dónde definir parámetros compartidos por todas las tareas por defecto?', 'En la sección Parámetros del Job (Job Parameters) a nivel raíz del workflow.')}
                            ${fc('¿Cuándo son necesarios los Parámetros de Tarea?', 'Para sobreescrituras específicas, variables de iteración en For Each o referencias a valores de tareas previas.')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "3. Execution, Triggers & Compute / Ejecución, Disparadores y Cómputo",
            items: [
                {
                    title: "3.1 File Arrival & Continuous Triggers / Disparadores de Archivo y Continuos",
                    content: `
                        ${langSection('en', `
                            ${fc('When are File Arrival Triggers preferred?', 'For event-driven, unpredictable, or irregular batch arrivals in cloud storage locations.')}
                            ${fc('What key feature distinguishes Continuous Triggers?', 'Built-in retry management and automatic re-launch upon completion or recovery to maintain streaming feeds.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cuándo se prefieren los disparadores por llegada de archivos?', 'Para cargas irregulares o impredecibles orientadas a eventos en almacenamiento cloud.')}
                            ${fc('¿Qué característica clave distingue a los Disparadores Continuos?', 'Gestión integrada de reintentos y reinicio automático tras completarse o recuperarse para flujos streaming continuos.')}
                        `)}
                    `
                },
                {
                    title: "3.2 Serverless Compute & Repair Runs / Cómputo Serverless y Reparación",
                    content: `
                        ${langSection('en', `
                            ${fc('Why choose Serverless for Lakeflow Jobs?', 'Eliminates cluster startup delay (starts in seconds), scales elastically, and terminates immediately after execution.')}
                            ${fc('What tasks are rerun during a Repair Run?', 'Only the failed task and its dependent downstream tasks; successful upstream tasks are not re-executed.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué elegir Serverless para Lakeflow Jobs?', 'Elimina el tiempo de espera de encendido de VMs (inicia en segundos), escala elásticamente y apaga de inmediato sin costos ociosos.')}
                            ${fc('¿Qué tareas se reejecutan en un Repair Run?', 'Únicamente la tarea fallida y todas sus tareas downstream dependientes; las tareas upstream previas exitosas se conservan.')}
                        `)}
                    `
                }
            ]
        }
    ];

    // =========================================================================
    // 3. BUILD DATA PIPELINES WITH LAKEFLOW SDP (databricks-lakeflow-pipelines)
    // =========================================================================
    window.studyData["databricks-lakeflow-pipelines"] = [
        {
            title: "1. Declarative Framework & Table Types / Framework Declarativo y Tipos de Tabla",
            items: [
                {
                    title: "1.1 Declarative Paradigm / Paradigma Declarativo",
                    content: `
                        ${langSection('en', `
                            ${fc('What is the core philosophy of Spark Declarative Pipelines?', 'Engineers declare WHAT data transformations to achieve in SQL/Python; Databricks determines HOW to orchestrate, optimize, and execute them.')}
                            ${fc('How does SDP resolve batch notebook ETL limitations?', 'Replaces manual checkpointing, redundant full scans, and monolithic scripts with incremental stateful processing.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cuál es la filosofía central de Spark Declarative Pipelines?', 'El ingeniero define QUÉ transformaciones lograr en SQL o Python; Databricks resuelve de forma autónoma CÓMO orquestarlas y ejecutarlas.')}
                            ${fc('¿Cómo resuelve SDP las limitaciones de los ETLs en notebooks?', 'Elimina escaneos completos redundantes y scripts monolíticos reemplazándolos con procesamiento incremental gestionado por estado.')}
                        `)}
                    `
                },
                {
                    title: "1.2 Streaming Tables vs Materialized Views / Tablas Streaming vs Vistas Materializadas",
                    content: `
                        ${langSection('en', `
                            ${fc('What is a Streaming Table best suited for?', 'Append-only incremental ingestion from message buses or cloud files where each row is processed once.')}
                            ${fc('When should a Materialized View be used?', 'For Gold layer aggregations, KPIs, and complex transformations that incrementally maintain query results over upstream tables.')}
                            ${fc('What happens if upstream historical data is modified?', 'Execute a Full Table Refresh on the Materialized View to recompute complete state.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Para qué es más adecuada una Tabla Streaming?', 'Ingesta incremental append-only desde archivos cloud o buses de mensajes donde cada registro se procesa una única vez.')}
                            ${fc('¿Cuándo debe utilizarse una Vista Materializada?', 'Para agregaciones en capa Gold, KPIs y consultas analíticas que mantienen resultados precomputados sincronizados con las tablas origen.')}
                            ${fc('¿Qué hacer si se modificaron datos históricos en el origen?', 'Ejecutar un Full Table Refresh sobre la Vista Materializada para recalcular el estado histórico completo.')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "2. Data Quality & CDC Automation / Calidad de Datos y Automatización CDC",
            items: [
                {
                    title: "2.1 Data Quality Expectations / Expectativas de Calidad de Datos",
                    content: `
                        ${langSection('en', `
                            ${fc('What are Expectations in Declarative Pipelines?', 'Declarative data quality constraints (EXPECT) that validate rows during ingestion and track metrics in the event log.')}
                            ${fc('What actions can be taken on violation?', 'Default (warn & track), ON VIOLATION DROP ROW (discard invalid rows), or ON VIOLATION FAIL UPDATE (halt pipeline).')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué son las Expectativas en Pipelines Declarativos?', 'Restricciones declarativas de calidad de datos (EXPECT) que evalúan registros en caliente y registran métricas en el event log.')}
                            ${fc('¿Qué acciones pueden tomarse ante una violación?', 'Por defecto (registrar advertencia), ON VIOLATION DROP ROW (descartar fila inválida) o ON VIOLATION FAIL UPDATE (abortar el pipeline).')}
                        `)}
                    `
                },
                {
                    title: "2.2 Change Data Capture (AUTO CDC / APPLY CHANGES) / Captura de Cambios (CDC)",
                    content: `
                        ${langSection('en', `
                            ${fc('What does AUTO CDC INTO (APPLY CHANGES INTO) automate?', 'Applies inserts, updates, and deletes from a change log stream into target Delta tables handling out-of-sequence arrivals.')}
                            ${fc('Does it support historical tracking?', 'Yes, supports both SCD Type 1 (overwrite current) and SCD Type 2 (historical validity ranges).')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué automatiza AUTO CDC INTO (APPLY CHANGES INTO)?', 'Aplica inserciones, actualizaciones y eliminaciones desde un stream de cambios en tablas Delta gestionando registros desordenados.')}
                            ${fc('¿Admite seguimiento histórico de cambios?', 'Sí, soporta nativamente SCD Tipo 1 (sobrescritura) y SCD Tipo 2 (marcas de tiempo de vigencia histórica).')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "3. Pipeline Operations & Event Log / Operaciones de Pipeline y Registro de Eventos",
            items: [
                {
                    title: "3.1 Pipeline Trigger Modes / Modos de Disparo del Pipeline",
                    content: `
                        ${langSection('en', `
                            ${fc('How to switch an SDP pipeline from batch to continuous streaming?', 'Change the pipeline execution trigger from Triggered (scheduled) to Continuous without rewriting any transformation code.')}
                            ${fc('What is the role of the Event Log Delta table?', 'Audits pipeline execution milestones, data quality expectation scores, performance metrics, and cluster health.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cómo cambiar un pipeline SDP de batch a streaming continuo?', 'Modificar el disparador de ejecución de Triggered (programado) a Continuous sin alterar una sola línea de código.')}
                            ${fc('¿Cuál es el rol de la tabla Delta de Event Log?', 'Audita hitos de ejecución, tasas de cumplimiento de expectativas de calidad, tiempos de procesamiento y salud del cluster.')}
                        `)}
                    `
                }
            ]
        }
    ];

    // =========================================================================
    // 4. DEVOPS ESSENTIALS FOR DATA ENGINEERING (databricks-devops-de)
    // =========================================================================
    window.studyData["databricks-devops-de"] = [
        {
            title: "1. Software Engineering & Modularization / Ingeniería de Software y Modularización",
            items: [
                {
                    title: "1.1 Modular Code Structure & src/ / Estructura Modular y Carpeta src/",
                    content: `
                        ${langSection('en', `
                            ${fc('Why modularize monolithic notebooks into separate .py files?', 'Improves maintainability, eliminates Git merge conflicts, enables single-responsibility design, and allows unit testing with pytest.')}
                            ${fc('What is the purpose of the src/ folder?', 'Houses production transformation logic and helper functions, cleanly separated from tests/ and deployment assets.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué modularizar notebooks monolíticos en archivos .py independientes?', 'Mejora la mantenibilidad, evita conflictos en Git, favorece responsabilidad única y permite pruebas unitarias con pytest.')}
                            ${fc('¿Cuál es el propósito de la carpeta src/?', 'Alberga el código fuente productivo y funciones auxiliares, separado limpiamente de las pruebas (tests/) y scripts de despliegue.')}
                        `)}
                    `
                },
                {
                    title: "1.2 Column Expressions & Pure Functions / Expresiones de Columna y Funciones Puras",
                    content: `
                        ${langSection('en', `
                            ${fc('Why are functions returning Column expressions preferred?', 'Column-level helpers (col -> col) are composable, lazily evaluated, and tested with minimal overhead without full DataFrame scans.')}
                            ${fc('How to make SQL transformations testable across environments?', 'Parameterize catalog, schema, and table names so test harnesses can inject temporary test schemas.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué se prefieren funciones que devuelven expresiones de Columna?', 'Las funciones a nivel columna (col -> col) son componibles, de evaluación perezosa y se prueban con mínima sobrecarga.')}
                            ${fc('¿Cómo hacer testeables las transformaciones SQL entre entornos?', 'Parametrizar catálogos y esquemas como argumentos para que las pruebas puedan inyectar tablas sintéticas aisladas.')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "2. Unit Testing & pytest with PySpark / Pruebas Unitarias y pytest con PySpark",
            items: [
                {
                    title: "2.1 In-Memory Synthetic DataFrames / DataFrames Sintéticos en Memoria",
                    content: `
                        ${langSection('en', `
                            ${fc('Why use spark.createDataFrame() instead of production samples in unit tests?', 'Synthetic DataFrames are fast, deterministic, self-contained, and isolated from network or data drift issues.')}
                            ${fc('How does assertDataFrameEqual work?', 'Compares schemas, data types, and values cell-by-cell, raising descriptive error messages identifying exact differences.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué usar spark.createDataFrame() en lugar de muestras de producción en pruebas unitarias?', 'Los DataFrames sintéticos son rápidos, deterministas, autocontenidos y aíslan la prueba de problemas de red o cambios de datos.')}
                            ${fc('¿Cómo funciona assertDataFrameEqual?', 'Compara esquemas, tipos y valores celda por celda, generando un reporte de diferencias preciso en caso de fallo.')}
                        `)}
                    `
                },
                {
                    title: "2.2 pytest Discovery & Conventions / Convenciones de Descubrimiento de pytest",
                    content: `
                        ${langSection('en', `
                            ${fc('Why must test files and functions use the test_ prefix?', 'Pytest automatically discovers and runs tests matching test_*.py and def test_*() without manual manifests.')}
                            ${fc('What does integration testing catch that unit tests miss?', 'Cross-table join data mismatches, silent type coercions, catalog permissions, and end-to-end DAG execution issues.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué los archivos y funciones de prueba deben llevar el prefijo test_?', 'pytest descubre y ejecuta automáticamente suites que cumplan con la convención test_*.py y def test_*().')}
                            ${fc('¿Qué detectan las pruebas de integración que las unitarias no ven?', 'Coerciones de tipos inesperadas en cruces, permisos de catálogo, y problemas de flujo entre nodos del DAG.')}
                        `)}
                    `
                }
            ]
        },
        {
            title: "3. CI/CD & Databricks Asset Bundles / CI/CD y Databricks Asset Bundles",
            items: [
                {
                    title: "3.1 Workflows as Code (DABs) / Workflows como Código (DABs)",
                    content: `
                        ${langSection('en', `
                            ${fc('What is the main advantage of Databricks Asset Bundles (DABs)?', 'Defines jobs, pipelines, and permissions as code (YAML), enabling Git versioning, pull request reviews, and CI/CD automation.')}
                            ${fc('What is a Personal Access Token (PAT) used for in Git integration?', 'Authenticates Databricks Git Folders to clone, pull, and commit to remote repositories on behalf of the developer.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cuál es la principal ventaja de Databricks Asset Bundles (DABs)?', 'Define jobs, pipelines y configuraciones como código (YAML), posibilitando control de versiones en Git, revisiones por PR y CI/CD.')}
                            ${fc('¿Para qué se utiliza un Personal Access Token (PAT) en la integración con Git?', 'Autentica a Databricks Git Folders para realizar operaciones de clone, pull y commit en el repositorio remoto con seguridad.')}
                        `)}
                    `
                },
                {
                    title: "3.2 Multi-Environment Target Promotion / Promoción Multi-Entorno",
                    content: `
                        ${langSection('en', `
                            ${fc('Why is the target configuration key crucial for DevOps?', 'Allows the exact same immutable pipeline code to deploy to dev, staging, or prod by overriding the destination catalog and schema.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué es crucial el parámetro de target para DevOps?', 'Permite desplegar el mismo código inmutable a dev, staging o producción sobreescribiendo únicamente el catálogo y esquema destino.')}
                        `)}
                    `
                }
            ]
        }
    ];
})();
