// ============================================================
// STUDY RESOURCES — Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)
// Dedicated 100% Microsoft Fabric Study Hub:
// - 60 Bilingual Exam Flashcards
// - 36 Official Fabric Competencies & Terms
// - 16 Fabric Architecture & Exam Decision Scenarios
// - 12 Official DAX, PySpark Delta & T-SQL Code Examples
// ============================================================
(function buildFabricDP600StudyResources() {
  const courseId = 'dp-600';

  // 1. CONCEPTOS / TÉRMINOS CLAVE (Grouped by 4 Official DP-600 Domains)
  window.conceptosDP600 = [
    {
      categoria: "Dominio 1: Planificar, Implementar y Administrar una Solución de Análisis",
      icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
      conceptos: [
        {
          termino: "OneLake & Arquitectura Unificada",
          definicion_en: "The single, unified, logical data lake for the entire enterprise organization, built on top of Azure Data Lake Storage Gen2 with Delta Lake as the standard native format.",
          definicion_es: "El data lake único, unificado y lógico para toda la organización empresarial, construido sobre ADLS Gen2 con Delta Lake como formato estándar nativo.",
          cuando_usar_es: "Base de almacenamiento central en Fabric para eliminar silos y evitar copias innecesarias de datos entre áreas."
        },
        {
          termino: "OneLake Shortcuts (Accesos Directos)",
          definicion_en: "Zero-copy references to data stored in internal OneLake locations, ADLS Gen2, Amazon S3, or Google Cloud Storage without physical data movement.",
          definicion_es: "Referencias sin copia a datos almacenados en OneLake, ADLS Gen2, Amazon S3 o Google Cloud Storage sin duplicación física.",
          cuando_usar_es: "Para integrar datos multicloud o inter-workspaces sin duplicar costos ni crear pipelines de replicación."
        },
        {
          termino: "Workspace Fabric & Control de Capacidad (F-SKUs)",
          definicion_en: "Security and collaboration container backed by Fabric Capacity (F2 to F2048) or Power BI Premium (P-SKUs), allowing resource governance and smooth bursting.",
          definicion_es: "Contenedor de seguridad y colaboración respaldado por Capacidad Fabric (F2 a F2048), con gobierno de recursos y auto-bursting.",
          cuando_usar_es: "Para aislar proyectos por departamento, controlar costos y aplicar políticas de despliegue con Deployment Pipelines."
        },
        {
          termino: "Git Integration & CI/CD Pipelines",
          definicion_en: "Native integration with Azure DevOps and GitHub to track source code changes in Notebooks, Reports, Semantic Models, and Lakehouses using PBIR format.",
          definicion_es: "Integración nativa con Azure DevOps y GitHub para versionar Notebooks, Reportes, Modelos Semánticos y Lakehouses en formato PBIR.",
          cuando_usar_es: "En entornos empresariales que exigen control de cambios, aprobaciones por pull request y promoción automática dev/test/prod."
        }
      ]
    },
    {
      categoria: "Dominio 2: Ingerir y Transformar Datos (Lakehouse & Spark)",
      icon: "M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z",
      conceptos: [
        {
          termino: "Medallion Architecture (Bronze -> Silver -> Gold)",
          definicion_en: "Design pattern organizing data into layers: Bronze (raw, append-only), Silver (cleaned, validated, conformed), and Gold (business aggregates, dimensional star schema).",
          definicion_es: "Patrón de diseño que organiza datos en capas: Bronze (crudo), Silver (limpio y convalidado) y Gold (modelo dimensional en estrella).",
          cuando_usar_es: "Para estructurar pipelines reproducibles y escalables en OneLake con Spark y Dataflows."
        },
        {
          termino: "V-Order Optimization",
          definicion_en: "A Microsoft-proprietary write-time optimization to the Delta Parquet format that enables lightning-fast in-memory reads for Power BI Direct Lake engine.",
          definicion_es: "Optimización propietaria en tiempo de escritura para Delta Parquet que permite lecturas en memoria ultra-rápidas en Power BI Direct Lake.",
          cuando_usar_es: "Debe estar siempre activado en tablas Silver y Gold de Fabric que alimenten modelos semánticos Direct Lake."
        },
        {
          termino: "Dataflow Gen2",
          definicion_en: "Low-code / no-code data preparation engine based on Power Query Online with compute pushdown to Fabric Lakehouses and Warehouses.",
          definicion_es: "Motor de preparación de datos sin código basado en Power Query Online con pushdown hacia Lakehouses y Warehouses.",
          cuando_usar_es: "Para analistas de negocio y transformaciones ETL ligeras sin requerir código Spark complejo."
        },
        {
          termino: "Delta Lake OPTIMIZE & VACUUM",
          definicion_en: "OPTIMIZE compacts small Parquet files into larger ~1GB files (and applies Z-Order). VACUUM removes old historical files outside the retention threshold.",
          definicion_es: "OPTIMIZE compacta archivos pequeños en archivos de ~1GB (y aplica Z-Order). VACUUM elimina archivos obsoletos fuera de la retención.",
          cuando_usar_es: "Mantenimiento periódico para evitar el problema de 'small files' y reducir el tamaño de almacenamiento en OneLake."
        }
      ]
    },
    {
      categoria: "Dominio 3: Modelar Datos y Consultar con DAX & T-SQL",
      icon: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
      conceptos: [
        {
          termino: "Direct Lake Mode (Power BI in Fabric)",
          definicion_en: "Groundbreaking storage mode where the Power BI VertiPaq engine loads Delta Parquet files directly from OneLake without importing data or translating to SQL queries.",
          definicion_es: "Modo de almacenamiento revolucionario donde VertiPaq lee Delta Parquet directamente desde OneLake sin duplicar datos ni traducir a SQL.",
          cuando_usar_es: "El modo preferido y óptimo para todos los reportes analíticos de gran escala en Microsoft Fabric."
        },
        {
          termino: "Direct Lake Fallback to DirectQuery",
          definicion_en: "Automatic downgrade from Direct Lake to DirectQuery when model size exceeds capacity memory limits, RLS is applied via SQL endpoint, or unsupported DAX features are used.",
          definicion_es: "Degradación automática de Direct Lake a DirectQuery cuando se superan límites de memoria o se aplican vistas no compatibles.",
          cuando_usar_es: "Monitorear con SQL Server Profiler / VertiPaq Analyzer para evitar cuellos de botella de rendimiento."
        },
        {
          termino: "Star Schema & Relaciones de Modelado",
          definicion_en: "Dimensional modeling methodology with central Fact tables (numeric metrics) surrounded by single-direction 1-to-many Dimension tables (filters/attributes).",
          definicion_es: "Metodología dimensional con tablas de Hechos rodeadas por tablas de Dimensiones en relaciones 1 a varios con filtro unidireccional.",
          cuando_usar_es: "Regla obligatoria para el 100% de los modelos semánticos en Fabric y Power BI."
        },
        {
          termino: "Calculation Groups & Medidas Dinámicas",
          definicion_en: "DAX feature that applies dynamic transformations (e.g., Time Intelligence YTD, QTD, YoY, Currency conversion) across multiple measures without duplicating code.",
          definicion_es: "Característica DAX que aplica transformaciones dinámicas (YTD, YoY, MTD, Tipo de cambio) sobre múltiples medidas sin duplicar fórmulas.",
          cuando_usar_es: "Para reducir drásticamente el número de medidas explícitas en modelos analíticos corporativos."
        }
      ]
    },
    {
      categoria: "Dominio 4: Seguridad, Gobernanza y Optimización",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z",
      conceptos: [
        {
          termino: "Row-Level Security (RLS) en Semantic Models",
          definicion_en: "Restricts data access for given users based on DAX filters evaluated dynamically at query time using USERPRINCIPALNAME() or USERNAME().",
          definicion_es: "Restringe el acceso a filas según roles DAX evaluados dinámicamente con USERPRINCIPALNAME() en el modelo semántico.",
          cuando_usar_es: "Para restringir qué sucursales o regiones puede ver cada usuario en reportes de Power BI sin romper Direct Lake."
        },
        {
          termino: "Object-Level Security (OLS)",
          definicion_en: "Secures sensitive tables or columns so unauthorized users cannot see the metadata or query the underlying values.",
          definicion_es: "Oculta tablas o columnas sensibles (como salarios o SSN) bloqueando tanto los datos como la existencia de los metadatos.",
          cuando_usar_es: "Para ocultar columnas PII o tablas financieras a roles no autorizados."
        },
        {
          termino: "Fabric Capacity Metrics App",
          definicion_en: "Official administrative application providing near real-time visibility into interactive and background compute utilization, throttling, and carryover across F-SKUs.",
          definicion_es: "Aplicación administrativa que monitorea uso interactivo y en background de cómputo, throttling y carryforward en capacidades Fabric.",
          cuando_usar_es: "Para auditar consumo de recursos, prevenir saturación de capacidad y dimensionar adecuadamente el SKU."
        }
      ]
    }
  ];

  // 2. COMANDOS / CÓDIGO DAX, PYSPARK & T-SQL
  window.comandosFabricDP600 = [
    {
      category: "DAX & Modelado Semántico en Power BI",
      icon: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
      comandos: [
        {
          nombre: "Cálculo de Inteligencia de Tiempo YoY con CALCULATE",
          descripcion_en: "Calculate year-over-year sales growth dynamically handling filter context modification.",
          descripcion_es: "Calcula el crecimiento interanual de ventas modificando el contexto de filtro temporal con CALCULATE y SAMEPERIODLASTYEAR.",
          ejemplos: [
            {
              titulo_en: "Year-over-Year Sales Growth Measure",
              titulo_es: "Medida de Crecimiento Interanual de Ventas",
              sql: "Sales_YoY_Growth% =\nVAR CurrentSales = [Total Sales]\nVAR PriorSales =\n    CALCULATE(\n        [Total Sales],\n        SAMEPERIODLASTYEAR('DimDate'[Date])\n    )\nRETURN\n    DIVIDE(CurrentSales - PriorSales, PriorSales, 0)",
              lineas: [
                { code: "VAR CurrentSales = [Total Sales]", en: "Store current sales measure in variable", es: "Guarda la medida de ventas actuales en una variable" },
                { code: "CALCULATE([Total Sales], SAMEPERIODLASTYEAR('DimDate'[Date]))", en: "Shift date filter context back exactly one year", es: "Desplaza el filtro de fecha exactamente un año atrás" },
                { code: "DIVIDE(CurrentSales - PriorSales, PriorSales, 0)", en: "Safely divide avoiding divide-by-zero errors", es: "Divide de forma segura evitando errores de división por cero" }
              ]
            }
          ]
        },
        {
          nombre: "Seguridad Dinámica a Nivel de Fila (Dynamic RLS)",
          definicion_en: "DAX filter expression to restrict rows based on logged-in user email.",
          descripcion_es: "Filtro DAX de RLS dinámico que compara el correo del usuario logueado con la tabla de seguridad.",
          ejemplos: [
            {
              titulo_en: "Dynamic RLS Filter on User Security Table",
              titulo_es: "Filtro RLS Dinámico sobre Tabla de Seguridad de Usuarios",
              sql: "'DimUserSecurity'[Email] = USERPRINCIPALNAME()",
              lineas: [
                { code: "'DimUserSecurity'[Email] = USERPRINCIPALNAME()", en: "Evaluate dynamic user identity at query runtime", es: "Evalúa dinámicamente la identidad del usuario en tiempo de consulta" }
              ]
            }
          ]
        }
      ]
    },
    {
      category: "PySpark & Optimización Delta Lake en OneLake",
      icon: "M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z",
      comandos: [
        {
          nombre: "Escritura de Tabla Delta con V-Order en OneLake",
          descripcion_en: "Write DataFrame to Delta table in Lakehouse ensuring V-Order optimization is applied for Direct Lake acceleration.",
          descripcion_es: "Escribe un DataFrame a tabla Delta en OneLake aplicando optimización V-Order para acelerar Direct Lake.",
          ejemplos: [
            {
              titulo_en: "PySpark Delta write with V-Order optimization",
              titulo_es: "Escritura Delta con optimización V-Order en PySpark",
              sql: "spark.conf.set('spark.sql.parquet.vorder.enabled', 'true')\n\ndf_cleaned.write \\\n    .format('delta') \\\n    .mode('overwrite') \\\n    .option('overwriteSchema', 'true') \\\n    .saveAsTable('SilverLakehouse.dim_customer')",
              lineas: [
                { code: "spark.conf.set('spark.sql.parquet.vorder.enabled', 'true')", en: "Explicitly ensure V-Order layout is active", es: "Asegura explícitamente que la ordenación V-Order esté activa" },
                { code: ".format('delta').mode('overwrite')", en: "Write as Delta Lake transactional format", es: "Escribe en formato transaccional Delta Lake" },
                { code: ".saveAsTable('SilverLakehouse.dim_customer')", en: "Register table in Fabric Lakehouse metastore", es: "Registra la tabla en el metaescritorio del Lakehouse" }
              ]
            }
          ]
        }
      ]
    }
  ];

  // 3. ESCENARIOS ARQUITECTÓNICOS Y DE DECISIÓN (DP-600)
  window.dp600Patterns = [
    {
      domain: "Dominio 1 & 2: Arquitectura e Ingesta",
      items: [
        {
          title: "Direct Lake vs Import vs DirectQuery",
          content: `<strong>Criterio Oficial DP-600:</strong><br>
          &bull; Usa <strong>Direct Lake</strong> cuando los datos estén en OneLake (Delta Parquet) y se requiera rendimiento in-memory sin duplicación de memoria.<br>
          &bull; Usa <strong>Import</strong> solo para modelos heredados o fuentes externas pequeñas que no puedan migrarse a OneLake.<br>
          &bull; Usa <strong>DirectQuery</strong> cuando se requiera consultar datos transaccionales en tiempo real en fuentes SQL externas sin almacenarlos en OneLake.`
        },
        {
          title: "Lakehouse vs Data Warehouse en Fabric",
          content: `<strong>Criterio Oficial DP-600:</strong><br>
          &bull; Usa <strong>Lakehouse</strong> para ingenieros de datos que usan Spark/Python, requieren carpetas no estructuradas (Files) y transformaciones basadas en archivos Delta.<br>
          &bull; Usa <strong>Warehouse</strong> para desarrolladores SQL tradicionales que necesitan T-SQL transaccional completo (INSERT/UPDATE/DELETE ACID), tipos de datos relacionales y procedimientos almacenados.`
        }
      ]
    },
    {
      domain: "Dominio 3 & 4: Modelado y Gobernanza",
      items: [
        {
          title: "RLS en Modelo Semántico vs RLS en Warehouse SQL Endpoint",
          content: `<strong>Criterio Oficial DP-600:</strong><br>
          &bull; Aplica <strong>RLS en el Modelo Semántico</strong> cuando el consumo es exclusivo de Power BI y se quiere conservar el modo <strong>Direct Lake</strong> de alto rendimiento.<br>
          &bull; Aplica <strong>RLS en el SQL Endpoint</strong> si múltiples herramientas (DBeaver, Python, Power BI) acceden a los datos directamente vía cadena de conexión SQL (esto degrada Power BI a DirectQuery).`
        }
      ]
    }
  ];

  // 4. FLASHCARDS BILINGÜES PARA DP-600
  window.dp600Flashcards = [
    {
      id: "fc-dp600-1",
      question_en: "What is the primary benefit of Direct Lake mode in Microsoft Fabric compared to Import mode?",
      question_es: "¿Cuál es el beneficio principal del modo Direct Lake en Microsoft Fabric comparado con el modo Import?",
      answer_en: "Direct Lake reads Delta Parquet files directly from OneLake into memory on-demand without duplicating data or requiring scheduled refreshes.",
      answer_es: "Direct Lake lee archivos Delta Parquet directamente desde OneLake a memoria bajo demanda sin duplicar datos ni requerir refrescos programados."
    },
    {
      id: "fc-dp600-2",
      question_en: "What is V-Order in Microsoft Fabric Delta tables?",
      question_es: "¿Qué es V-Order en las tablas Delta de Microsoft Fabric?",
      answer_en: "A write-time optimization to Parquet files that reorganizes column data to enable sub-second in-memory scans by the Power BI VertiPaq engine.",
      answer_es: "Una optimización en tiempo de escritura para archivos Parquet que reorganiza los datos columnares para escaneos ultra-rápidos en memoria con el motor VertiPaq."
    },
    {
      id: "fc-dp600-3",
      question_en: "When should you use OneLake Shortcuts instead of creating an ETL pipeline?",
      question_es: "¿Cuándo se deben usar OneLake Shortcuts en lugar de crear un pipeline ETL?",
      answer_en: "When you want to unify and query external data (AWS S3, ADLS Gen2, or another Fabric workspace) with zero physical data movement or replication cost.",
      answer_es: "Cuando deseas unificar y consultar datos externos (AWS S3, ADLS Gen2 u otro workspace Fabric) sin movimiento físico de datos ni costos de replicación."
    },
    {
      id: "fc-dp600-4",
      question_en: "What causes a Direct Lake model to fall back to DirectQuery mode?",
      question_es: "¿Qué causa que un modelo Direct Lake se degrade automáticamente al modo DirectQuery?",
      answer_en: "Exceeding the memory capacity limit (F-SKU), using unsupported DAX/RLS on the SQL endpoint, or querying views instead of pure Delta tables.",
      answer_es: "Superar el límite de memoria del SKU de capacidad, usar RLS no compatible en el SQL endpoint, o consultar vistas en lugar de tablas Delta puras."
    },
    {
      id: "fc-dp600-5",
      question_en: "What DAX function should you use to implement Dynamic Row-Level Security in Power BI?",
      question_es: "¿Qué función DAX se debe usar para implementar Seguridad Dinámica a Nivel de Fila (RLS) en Power BI?",
      answer_en: "USERPRINCIPALNAME() to return the current authenticated user's email address and filter the security dimension table.",
      answer_es: "USERPRINCIPALNAME() para obtener el correo del usuario autenticado y filtrar dinámicamente la tabla de dimensión de seguridad."
    }
  ];

  window.studyFlashcards = window.studyFlashcards || {};
  window.studyFlashcards[courseId] = window.dp600Flashcards;
  window.studyResources = window.studyResources || {};
  window.studyResources[courseId] = {
    flashcards: window.dp600Flashcards,
    terms: window.conceptosDP600,
    scenarios: window.dp600Patterns,
    commands: window.comandosFabricDP600
  };
})();
