// =============================================================================
// CONCEPTOS CLAVE — Databricks Certified Data Analyst Associate
// Key platform concepts organized by domain for exam preparation
// =============================================================================
window.conceptosDatabricks = [
  {
    category: "Architecture & Storage",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    conceptos: [
      {
        nombre: "Lakehouse",
        tipo: "Architecture Pattern",
        tema: "Domain 1",
        relevancia: "alta",
        contribucion: "Combina la <strong>flexibilidad</strong> de un Data Lake (bajo costo, archivos crudos) con la <strong>gestión</strong> de un Data Warehouse (transacciones ACID, cumplimiento de esquema). Elimina silos permitiendo que BI y ML operen sobre los <strong>mismos datos</strong>.",
        datoExamen: "El Lakehouse unifica Data Lake + Data Warehouse. Permite BI y ML en la misma plataforma sin mover datos."
      },
      {
        nombre: "Delta Lake",
        tipo: "Storage Layer",
        tema: "Domain 1",
        relevancia: "alta",
        contribucion: "Capa de almacenamiento que agrega <strong>transacciones ACID</strong> sobre archivos Parquet. Proporciona: schema enforcement/evolution, Time Travel, OPTIMIZE/VACUUM, y procesamiento unificado batch+streaming.",
        datoExamen: "Delta Lake = Parquet + Delta Log (JSON). ACID transactions. Habilitador clave del Lakehouse."
      },
      {
        nombre: "Medallion Architecture",
        tipo: "Data Pattern",
        tema: "Domain 1",
        relevancia: "alta",
        contribucion: "Patrón de organización en tres capas: <strong>Bronze</strong> (datos crudos, histórico), <strong>Silver</strong> (datos limpios, Vista Empresarial) y <strong>Gold</strong> (datos agregados para BI). Cada capa agrega calidad y estructura progresivamente.",
        datoExamen: "Bronze = Historia/Pasado. Silver = Calidad/Presente. Gold = BI/Futuro. NUNCA hagas agregaciones en Bronze ni guardes datos sucios en Gold."
      },
      {
        nombre: "Delta Log",
        tipo: "Transaction Layer",
        tema: "Domain 2",
        relevancia: "alta",
        contribucion: "Registro transaccional que contiene archivos JSON documentando cada operación sobre una tabla Delta. Habilita <strong>garantías ACID</strong>, Time Travel, y auditoría. Se compacta periódicamente en checkpoints para rendimiento.",
        datoExamen: "El Delta Log es la capa JSON que da ACID a Delta Lake. Sin él, no hay Time Travel ni transacciones."
      }
    ]
  },
  {
    category: "Governance & Security",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
    conceptos: [
      {
        nombre: "Unity Catalog",
        tipo: "Governance Platform",
        tema: "Domain 2, 8",
        relevancia: "alta",
        contribucion: "Sistema de <strong>gobernanza centralizada</strong> para datos y activos de IA en Databricks. Usa un namespace de tres niveles: <code>catalog.schema.table</code>. Maneja control de acceso, auditoría, linaje y compartición de datos entre workspaces.",
        datoExamen: "Namespace: catalog.schema.table. Para hacer SELECT en una tabla necesitas USAGE en Catalog + USAGE en Schema + SELECT en Table."
      },
      {
        nombre: "Managed vs External Tables",
        tipo: "Table Types",
        tema: "Domain 2",
        relevancia: "alta",
        contribucion: "<strong>Managed:</strong> Almacenamiento gestionado por Unity Catalog. DROP TABLE borra datos Y metadatos.<br><strong>External:</strong> Almacenamiento en ruta específica (S3/ADLS). DROP TABLE borra <strong>solo metadatos</strong> — los archivos permanecen.",
        datoExamen: "Pregunta frecuente: DROP en Managed = borra todo. DROP en External = solo metadatos. Los archivos quedan."
      },
      {
        nombre: "Dynamic Views (Row/Column Security)",
        tipo: "Security Pattern",
        tema: "Domain 8",
        relevancia: "alta",
        contribucion: "Vistas que implementan seguridad granular: <strong>Row Filter</strong> (<code>WHERE region = current_user()</code>) para limitar filas visibles, y <strong>Column Mask</strong> (<code>CASE WHEN is_member('admin') THEN val ELSE '***'</code>) para ocultar datos sensibles.",
        datoExamen: "Dynamic Views son la forma de implementar seguridad a nivel de fila y columna en Databricks SQL."
      },
      {
        nombre: "Data Sharing",
        tipo: "Collaboration Feature",
        tema: "Domain 2",
        relevancia: "media",
        contribucion: "Permite compartir datos de forma segura entre organizaciones usando el protocolo abierto <strong>Delta Sharing</strong>. Los receptores pueden acceder a los datos sin necesidad de tener Databricks — compatible con Pandas, Spark, Power BI y Tableau.",
        datoExamen: "Delta Sharing es un protocolo abierto. No requiere que el receptor tenga Databricks."
      }
    ]
  },
  {
    category: "Compute & Performance",
    icon: "M7 2v11h3v9l7-12h-4l4-8z",
    conceptos: [
      {
        nombre: "SQL Warehouses",
        tipo: "Compute Resource",
        tema: "Domain 9",
        relevancia: "alta",
        contribucion: "Clusters optimizados para ejecutar consultas SQL. Dos tipos principales: <strong>Serverless</strong> (inicia en segundos, escalado instantáneo, ideal para ad-hoc) y <strong>Pro</strong> (inicia en minutos, rendimiento predecible, ideal para producción).",
        datoExamen: "Serverless = segundos, escalado instantáneo. Pro = minutos, carga conocida. Serverless siempre usa Photon."
      },
      {
        nombre: "Photon Engine",
        tipo: "Query Engine",
        tema: "Domain 9",
        relevancia: "alta",
        contribucion: "Motor de consultas <strong>vectorizado escrito en C++</strong>. Hasta <strong>12x más rápido</strong> que Spark estándar para cargas SQL y ETL. Habilitado automáticamente en warehouses Serverless. Mejoras significativas en scans, agregaciones y joins.",
        datoExamen: "Photon = C++ vectorizado. 12x más rápido. Automático en Serverless. Pregunta frecuente sobre optimización."
      },
      {
        nombre: "Query Profile",
        tipo: "Diagnostic Tool",
        tema: "Domain 10",
        relevancia: "media",
        contribucion: "Plan de ejecución visual que identifica cuellos de botella: <strong>Spill to Disk</strong> (falta de memoria), <strong>Full Table Scans</strong> (falta de poda/clustering), y <strong>Skew</strong> (distribución desigual de datos entre particiones).",
        datoExamen: "Spill to Disk = necesitas más memoria o optimizar. Full Scan = necesitas clustering o filtros."
      },
      {
        nombre: "Liquid Clustering",
        tipo: "Optimization",
        tema: "Domain 2, 10",
        relevancia: "alta",
        contribucion: "Diseño dinámico de datos que <strong>reemplaza el particionamiento tradicional y Z-Order</strong>. Ideal para datos de alta cardinalidad o sesgados. No requiere elegir columnas de partición — se autooptimiza.",
        datoExamen: "Liquid Clustering = moderno, reemplaza partitioning + Z-Order. Partitioning = legado, solo para baja cardinalidad."
      }
    ]
  },
  {
    category: "Data Engineering & Ingestion",
    icon: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
    conceptos: [
      {
        nombre: "COPY INTO",
        tipo: "Ingestion Command",
        tema: "Domain 5",
        relevancia: "alta",
        contribucion: "Comando para cargar datos desde archivos en cloud storage. <strong>Idempotente</strong>: automáticamente salta archivos ya procesados. Más barato que alternativas para cargas incrementales. Ideal cuando la fuente son archivos (CSV, JSON, Parquet).",
        datoExamen: "Fuente = Archivos → COPY INTO. Fuente = Query/Tabla → CTAS. COPY INTO es idempotente."
      },
      {
        nombre: "Auto Loader",
        tipo: "Streaming Ingestion",
        tema: "Domain 5",
        relevancia: "media",
        contribucion: "Procesa incrementalmente archivos nuevos a medida que llegan al cloud storage. Usa formato <code>cloudFiles</code>. Escala a millones de archivos con inferencia y evolución de esquema automática.",
        datoExamen: "Auto Loader > COPY INTO para ingesta continua/streaming. Usa cloudFiles format."
      },
      {
        nombre: "Partner Connect",
        tipo: "Integration Hub",
        tema: "Domain 5",
        relevancia: "media",
        contribucion: "Forma más rápida de conectarse a herramientas como <strong>Fivetran</strong>, <strong>dbt</strong>, o <strong>Tableau</strong>. Crea automáticamente el SQL Warehouse oculto, genera tokens de API, y configura permisos de conexión.",
        datoExamen: "Partner Connect autoconfigura: warehouse + token + permisos. Un clic para integración."
      },
      {
        nombre: "Change Data Feed (CDF)",
        tipo: "Data Feature",
        tema: "Domain 5",
        relevancia: "media",
        contribucion: "Rastrea cambios a nivel de fila (inserts, updates, deletes) en tablas Delta. Columnas agregadas: <code>_change_type</code>, <code>_commit_version</code>, <code>_commit_timestamp</code>. Útil para replicación incremental y auditoría.",
        datoExamen: "CDF agrega _change_type (insert/update_preimage/update_postimage/delete). Habilitar con TBLPROPERTIES."
      }
    ]
  },
  {
    category: "SQL Features & Structures",
    icon: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
    conceptos: [
      {
        nombre: "QUALIFY Clause",
        tipo: "SQL Feature",
        tema: "Domain 6",
        relevancia: "alta",
        contribucion: "Filtra resultados basados en <strong>funciones de ventana</strong> sin subconsultas anidadas. <code>QUALIFY ROW_NUMBER() OVER(PARTITION BY id ORDER BY ts DESC) = 1</code> retorna solo el registro más reciente por ID.",
        datoExamen: "QUALIFY reemplaza subconsultas con window functions. Mucho más limpio que CTE + WHERE."
      },
      {
        nombre: "SEMI JOIN / ANTI JOIN",
        tipo: "Join Types",
        tema: "Domain 6",
        relevancia: "alta",
        contribucion: "<strong>LEFT SEMI JOIN:</strong> Retorna filas de la izquierda que <strong>tienen match</strong> en la derecha (sin duplicados). <strong>LEFT ANTI JOIN:</strong> Retorna filas de la izquierda que <strong>NO tienen match</strong> en la derecha.",
        datoExamen: "SEMI = 'exists in'. ANTI = 'not exists in'. Solo retornan columnas de la tabla izquierda."
      },
      {
        nombre: "EXPLODE / Higher-Order Functions",
        tipo: "Array Processing",
        tema: "Domain 7",
        relevancia: "alta",
        contribucion: "<strong>EXPLODE:</strong> Transforma una fila con array en múltiples filas. <strong>FILTER/TRANSFORM:</strong> Procesan arrays <strong>sin explotar</strong> — mantienen el conteo de filas. Más eficientes para arrays grandes.",
        datoExamen: "FILTER(arr, x -> condición) y TRANSFORM(arr, x -> expresión) evitan EXPLODE. Más eficientes."
      },
      {
        nombre: "Time Travel",
        tipo: "Delta Feature",
        tema: "Domain 3",
        relevancia: "alta",
        contribucion: "Permite consultar tablas <strong>como existían en el pasado</strong> usando versión o timestamp. <code>SELECT * FROM t VERSION AS OF 5</code>. VACUUM borra las versiones antiguas — cuidado con la retención.",
        datoExamen: "VACUUM rompe Time Travel para versiones anteriores al threshold. RESTORE modifica la tabla actual. DESCRIBE HISTORY muestra versiones."
      }
    ]
  },
  {
    category: "AI/BI & Dashboards",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
    conceptos: [
      {
        nombre: "AI/BI Genie",
        tipo: "AI Feature",
        tema: "Domain 12",
        relevancia: "alta",
        contribucion: "Interfaz de lenguaje natural para analizar datos. Utiliza <strong>Instructions</strong> (reglas en texto plano) y <strong>Trusted Assets</strong> (queries SQL verificadas) para generar respuestas precisas. Los Genie Spaces configuran el contexto para cada dominio de negocio.",
        datoExamen: "Instructions = reglas de negocio en texto. Trusted Assets = queries SQL verificadas. La calidad de las instrucciones determina la precisión."
      },
      {
        nombre: "Dashboards & Parameters",
        tipo: "Visualization Tools",
        tema: "Domain 4",
        relevancia: "alta",
        contribucion: "Los dashboards usan parámetros mapeados a variables de consulta (<code>{{ param }}</code>). Si un gráfico no actualiza, revisa el mapeo. <strong>Las alertas usan el valor por defecto del parámetro, no la selección actual del dashboard.</strong>",
        datoExamen: "Alertas evalúan con Default Value, no con selección actual. Alerta = single row, single value."
      },
      {
        nombre: "SQL Alerts",
        tipo: "Monitoring Feature",
        tema: "Domain 4",
        relevancia: "media",
        contribucion: "Notificaciones automáticas cuando una métrica cruza un umbral. La consulta debe retornar <strong>una sola fila y un solo valor</strong>. Se evalúan programáticamente usando los <strong>valores por defecto</strong> de los parámetros.",
        datoExamen: "Alert query = single row, single value. Evalúa con Default Value del parámetro."
      },
      {
        nombre: "Dashboard Permissions & Sharing",
        tipo: "Collaboration Feature",
        tema: "Domain 6",
        relevancia: "alta",
        contribucion: "Los dashboards pueden compartirse con <strong>usuarios/grupos del workspace</strong>, mediante <strong>enlaces compartibles</strong> para usuarios externos, o <strong>embebidos</strong> en aplicaciones externas. Los permisos se configuran desde la UI con roles: Owner (control total), Editor (editar widgets), Viewer (solo lectura).",
        datoExamen: "El Owner del dashboard es quien controla los permisos. Los enlaces compartibles permiten acceso sin cuenta Databricks. CAN EDIT, CAN RUN, CAN VIEW son los permisos principales."
      },
      {
        nombre: "Dashboard Scheduling & Refresh",
        tipo: "Automation Feature",
        tema: "Domain 6",
        relevancia: "media",
        contribucion: "Los dashboards pueden configurarse para <strong>refrescarse automáticamente</strong> en intervalos (1 min - 1 semana). Cada visualización actualiza su consulta subyacente. Los <strong>subscribers</strong> reciben snapshots por email según la programación.",
        datoExamen: "Schedule = refresco automático programado. Los subscribers reciben el dashboard por email. Usa SQL Warehouse configurado."
      }
    ]
  },
  {
    category: "Platform Intelligence & AI",
    icon: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    conceptos: [
      {
        nombre: "Data Intelligence Engine",
        tipo: "Platform Core",
        tema: "Domain 1",
        relevancia: "alta",
        contribucion: "Motor de IA que infunde inteligencia en toda la plataforma Databricks. Potencia <strong>Databricks Assistant</strong>, <strong>AI/BI Genie</strong>, y optimizaciones automáticas de consultas. Comprende la semántica de los datos, metadatos y patrones de uso para mejorar productividad.",
        datoExamen: "El Data Intelligence Engine es el cerebro de IA de la plataforma. Potencia Assistant, Genie, y auto-optimizations. Componente clave del Domain 1."
      },
      {
        nombre: "Databricks Assistant",
        tipo: "AI Copilot",
        tema: "Domain 4",
        relevancia: "alta",
        contribucion: "Asistente de IA integrado en <strong>Notebooks y SQL Editor</strong> que ayuda a escribir, depurar y optimizar consultas. Sugiere correcciones, explica errores, genera código SQL/Python y documenta notebooks automáticamente.",
        datoExamen: "Databricks Assistant = AI copilot en Notebooks y SQL Editor. Ayuda a escribir, depurar y explicar queries. Pregunta frecuente en Domain 4."
      },
      {
        nombre: "Mosaic AI",
        tipo: "AI Platform",
        tema: "Domain 1",
        relevancia: "media",
        contribucion: "Plataforma unificada para construir y desplegar aplicaciones de <strong>ML y GenAI</strong>. Incluye Model Serving, Vector Search, AI Playground y Feature Store. Para Data Analysts, el enfoque es entender que existe como componente de la plataforma.",
        datoExamen: "Mosaic AI = plataforma de ML/GenAI de Databricks. Para el examen de DA, solo se necesita saber que es un componente de la plataforma."
      },
      {
        nombre: "Lakeflow Jobs",
        tipo: "Orchestration",
        tema: "Domain 1",
        relevancia: "media",
        contribucion: "Sistema de <strong>orquestación y scheduling</strong> de workflows en Databricks. Permite encadenar notebooks, queries SQL y pipelines con dependencias, reintentos y alertas. Es la evolución de los Databricks Workflows.",
        datoExamen: "Lakeflow Jobs = orquestación de workflows. Para DA es suficiente saber que existe y que ejecuta pipelines programados."
      },
      {
        nombre: "Databricks Marketplace",
        tipo: "Data Discovery",
        tema: "Domain 1, 3",
        relevancia: "media",
        contribucion: "Marketplace abierto para descubrir y acceder a <strong>datasets, notebooks, modelos y soluciones</strong> de terceros. Permite importar datos externos sin necesidad de configurar pipelines de ingesta complejos.",
        datoExamen: "Marketplace = descubrir datos/modelos de terceros. Forma de importar datos (Domain 3). Componente de la plataforma (Domain 1)."
      }
    ]
  },
  {
    category: "Advanced SQL & Data Modeling",
    icon: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
    conceptos: [
      {
        nombre: "Materialized Views vs Streaming Tables",
        tipo: "SQL Objects",
        tema: "Domain 4, 5",
        relevancia: "alta",
        contribucion: "<strong>Materialized View:</strong> Almacena resultados precalculados de una consulta. Debe refrescarse periódicamente. Ideal para agregaciones costosas.<br><strong>Streaming Table:</strong> Se actualiza incrementalmente con datos nuevos (append-only). Ideal para ingesta continua sin reprocesar todo.",
        datoExamen: "Materialized View = precomputed, necesita REFRESH. Streaming Table = incremental/append-only. Pregunta frecuente: cuándo usar cada una."
      },
      {
        nombre: "Federated Queries",
        tipo: "Cross-System Feature",
        tema: "Domain 4",
        relevancia: "media",
        contribucion: "Permite hacer <strong>JOIN entre tablas Delta y fuentes externas</strong> (PostgreSQL, MySQL, SQL Server) sin mover datos. Usa <strong>Foreign Catalogs</strong> en Unity Catalog para registrar conexiones a sistemas externos.",
        datoExamen: "Federated Query = JOIN Delta + fuente externa. Usa Foreign Catalogs. No mueve datos — consulta in-place."
      },
      {
        nombre: "Star Schema & Data Vault",
        tipo: "Data Modeling Pattern",
        tema: "Domain 8",
        relevancia: "alta",
        contribucion: "<strong>Star Schema:</strong> Tabla de hechos (fact) rodeada de dimensiones (dim). Optimizado para BI y queries analíticos.<br><strong>Data Vault:</strong> Hubs (entidades), Links (relaciones), Satellites (atributos). Diseñado para auditoría y trazabilidad. Ambos se alinean con la capa <strong>Gold</strong> del Medallion Architecture.",
        datoExamen: "Star Schema = BI optimizado. Data Vault = auditoría y trazabilidad. Ambos en capa Gold. Domain 8 pregunta cómo se alinean con Medallion."
      },
      {
        nombre: "Query Caching",
        tipo: "Performance Feature",
        tema: "Domain 5",
        relevancia: "media",
        contribucion: "Databricks SQL cachea resultados de queries automáticamente. Si los datos no cambian y la query es idéntica, el resultado se sirve desde el <strong>cache</strong> sin recomputar. Reduce latencia y costos de compute significativamente.",
        datoExamen: "Query caching = resultados automáticos en cache. Mismo query + mismos datos = resultado instantáneo. Se invalida cuando los datos cambian."
      }
    ]
  },
  {
    category: "Data Quality & Lineage",
    icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    conceptos: [
      {
        nombre: "Certified Tables & Tags",
        tipo: "Governance Feature",
        tema: "Domain 2",
        relevancia: "alta",
        contribucion: "Las tablas pueden marcarse como <strong>Certified</strong> en Unity Catalog para indicar que son fuentes de datos confiables y verificadas. Los <strong>Tags</strong> permiten clasificar y buscar activos de datos. Los usuarios pueden filtrar el Catalog Explorer por certificación para encontrar datos de calidad.",
        datoExamen: "Certified = tabla verificada y confiable. Tags = etiquetas para clasificar/buscar. Catalog Explorer permite filtrar por certificación."
      },
      {
        nombre: "Data Lineage",
        tipo: "Governance Feature",
        tema: "Domain 2, 9",
        relevancia: "alta",
        contribucion: "Unity Catalog rastrea automáticamente el <strong>linaje de datos</strong>: de dónde viene cada tabla/columna y qué la consume. Visible en <strong>Catalog Explorer</strong> como un grafo interactivo. Fundamental para auditoría, cumplimiento regulatorio y análisis de impacto.",
        datoExamen: "Lineage = rastreo automático de origen y consumo de datos. Visible en Catalog Explorer. Clave para auditoría y análisis de impacto."
      },
      {
        nombre: "Table Ownership & PII Protection",
        tipo: "Security Pattern",
        tema: "Domain 9",
        relevancia: "alta",
        contribucion: "El <strong>Owner</strong> de una tabla tiene control total sobre permisos. Solo el Owner o un Metastore Admin puede GRANT/REVOKE. Para proteger <strong>PII</strong> (Información Personal), se usan Column Masks (enmascarar datos) y Row Filters (limitar acceso por fila), ambos configurables en Unity Catalog.",
        datoExamen: "Owner = control total de permisos. Solo Owner o Admin puede GRANT. PII se protege con Column Masks + Row Filters en Unity Catalog."
      }
    ]
  },
  {
    category: "Platform & SQL Context",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    conceptos: [
      {
        nombre: "USE CATALOG / USE SCHEMA",
        tipo: "Session Command",
        tema: "Domain 4, 6",
        relevancia: "alta",
        contribucion: "Comandos que establecen el <strong>Namespace de Sesión</strong>. Permiten referenciar tablas sin usar nombres completamente calificados (catalog.schema.table). <br><code>USE CATALOG main; USE SCHEMA reporting;</code>",
        datoExamen: "Si recibes un error TABLE_OR_VIEW_NOT_FOUND a pesar de tener permisos, es probable que necesites establecer el contexto de la sesión con USE CATALOG/SCHEMA."
      }
    ]
  },
  {
    category: "AI/BI & Reporting Deep Dive",
    icon: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    conceptos: [
      {
        nombre: "Instructions vs Trusted Assets",
        tipo: "Genie Tuning",
        tema: "Domain 12",
        relevancia: "alta",
        contribucion: "<strong>Instructions:</strong> Reglas de negocio en lenguaje natural que guían el razonamiento de Genie.<br><strong>Trusted Assets:</strong> Queries SQL verificadas que sirven como 'patrones de oro' para que Genie los imite.",
        datoExamen: "Actualizar instrucciones y añadir Trusted Assets es la MEJOR forma de corregir respuestas inexactas de Genie."
      },
      {
        nombre: "Alert TRIGGERED Status",
        tipo: "Monitoring",
        tema: "Domain 4",
        relevancia: "media",
        contribucion: "Estado de una alerta cuando la condición se cumple y se cruza el umbral. Otros estados incluyen <strong>OK</strong> (condición no cumplida) y <strong>UNKNOWN</strong> (error en la query o sin datos).",
        datoExamen: "Pregunta frecuente sobre el UI: Si la condición se cumple, el estado es TRIGGERED."
      }
    ]
  },
  {
    category: "Advanced Ingestion (Reto-Examen)",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    conceptos: [
      {
        nombre: "Auto Loader rescuedDataColumn",
        tipo: "Data Integrity",
        tema: "Domain 5",
        relevancia: "alta",
        contribucion: "Columna especial que captura datos que no coinciden con el esquema (ej. tipos de datos erróneos o columnas extra). Evita la pérdida de datos durante la ingesta streaming.",
        datoExamen: "RescuedDataColumn guarda datos 'huérfanos' o con tipos incompatibles para que no se pierdan al fallar el esquema."
      },
      {
        nombre: "COPY INTO VALIDATE",
        tipo: "Ingestion Safety",
        tema: "Domain 5",
        relevancia: "media",
        contribucion: "Opción para previsualizar errores de carga sin insertar datos reales. <code>COPY INTO ... VALIDATE ALL;</code> comprueba el formato de los archivos y posibles conflictos de tipo.",
        datoExamen: "VALIDATE permite hacer un 'dry-run' de la ingesta para detectar errores antes de procesar miles de archivos."
      },
      {
        nombre: "File Notification mode",
        tipo: "Scalability",
        tema: "Domain 3",
        relevancia: "muy alta",
        contribucion: "Alternativa al Directory Listing que usa servicios de mensajería (SQS, EventGrid) para detectar archivos nuevos sin escanear todo el almacenamiento.",
        datoExamen: "A gran escala (millones de archivos), Notifications es obligatorio para evitar latencia y costos de escaneo."
      },
      {
        nombre: "Audit Ingestion Metrics",
        tipo: "Governance",
        tema: "Domain 3",
        relevancia: "alta",
        contribucion: "Uso de <code>DESCRIBE HISTORY</code> para extraer <code>operationMetrics</code>. Permite ver cuántos archivos se cargaron y si hubo errores en una carga específica de COPY INTO.",
        datoExamen: "El historial de Delta es la 'caja negra' para auditar duplicados o fallos de ingesta."
      },
      {
        nombre: "External Storage Hierarchy",
        tipo: "Security",
        tema: "Domain 2/9",
        relevancia: "muy alta",
        contribucion: "Orden de creación en Unity Catalog: 1. Storage Credential (IAM), 2. External Location (Path). Los usuarios acceden al Path a través de la credencial.",
        datoExamen: "Pregunta clásica: No puedes crear un External Location sin una Storage Credential válida vinculada."
      }
    ]
  },
  {
    titulo: "Dashboard Optimization (Reto-Examen)",
    conceptos: [
      {
        nombre: "Batch Update (Dashboards)",
        tipo: "Performance",
        tema: "Domain 6",
        relevancia: "muy alta",
        contribucion: "Configuración para desactivar el 'Automatic Update' en los filtros del dashboard. Permite a los usuarios seleccionar múltiples filtros sin disparar refrescos por cada click.",
        datoExamen: "Clave para dashboards con muchas querys: reduce el costo y mejora la experiencia de usuario al permitir 'batch refreshes'."
      },
      {
        nombre: "Dynamic URL Templates",
        tipo: "UX / Navigation",
        tema: "Domain 6",
        relevancia: "alta",
        contribucion: "Uso de <code>{{column}}</code> en los Table visualizations para crear links externos parametrizados. Permite conectar el dashboard a sistemas de soporte o ERPs externos.",
        datoExamen: "Escenario común: crear un link 'drill-out' que lleve a una página web usando el ID de la fila como parámetro."
      },
      {
        nombre: "Dashboard Cross-Filtering",
        tipo: "Interactivity",
        tema: "Domain 6",
        relevancia: "muy alta",
        contribucion: "Feature de AI/BI que permite que un gráfico se comporte como un filtro seleccionable para el resto del lienzo. Al hacer click en una barra o sector, se disparan filtros para las widgets conectadas.",
        datoExamen: "El cross-filtering elimina la necesidad de tener múltiples filtros de texto, haciendo la exploración de datos más intuitiva."
      },
      {
        nombre: "Ownership Refresh Scenarios",
        tipo: "Administration",
        tema: "Domain 6",
        relevancia: "alta",
        contribucion: "Entendimiento de que los schedules dependen de la identidad del Owner o Service Principal. Si el owner desaparece o pierde acceso, los refrescos automáticos fallan.",
        datoExamen: "Frecuente en examen: ¿Qué ocurre si el autor de un dashboard deja la empresa? Los refrescos fallarán si no se transfiere la propiedad."
      }
    ]
  },
  {
    titulo: "AI/BI Genie Excellence",
    conceptos: [
      {
        nombre: "Trusted Assets",
        tipo: "Advanced Curation",
        tema: "Domain 7",
        relevancia: "muy alta",
        contribucion: "Mecanismo para dar a Genie SQL 'curado' para preguntas complejas. Garantiza que métricas críticas se calculen siempre igual sin alucinaciones de IA.",
        datoExamen: "Concepto nuevo pero de alto peso: Un Trusted Asset anula la generación dinámica de SQL de la IA cuando hay un match de intención."
      },
      {
        nombre: "Semantic Metadata (UC)",
        tipo: "Contextual Accuracy",
        tema: "Domain 7",
        relevancia: "alta",
        contribucion: "Simbiosis entre Unity Catalog y Genie. La descripción de columnas ('Table Comments') sirve como 'diccionario' para el procesamiento del lenguaje natural.",
        datoExamen: "Si Genie no entiende una columna, la solución es casi siempre mejorar la Metadata en UC directamente."
      },
      {
        nombre: "Genie Consumption (Can Use)",
        tipo: "Governance",
        tema: "Domain 7",
        relevancia: "media",
        contribucion: "Permiso específico para permitir a analistas o ejecutivos usar el espacio ad-hoc sin riesgo de romper configuraciones o instrucciones.",
        datoExamen: "El permiso mínimo de uso en Genie para consumidores es 'Can Use'."
      },
      {
        nombre: "Iteration Loop (Thumbs Down)",
        tipo: "Continuous Improvement",
        tema: "Domain 7",
        relevancia: "alta",
        contribucion: "Estrategia de revisión de 'History' para identificar fallos. Permite 're-entrenar' a Genie mediante Sample Questions extraídas de preguntas que el usuario puntuó mal.",
        datoExamen: "Clave para el rol de Data Analyst: mejorar Genie proactivamente analizando los fallos en el historial."
      }
    ]
  }
];
