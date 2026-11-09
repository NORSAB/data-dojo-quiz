window.questionsData = [
        // Claude (Opus 5) | 2026-09-05 | Se eliminaron 7 preguntas de andamiaje del curso "demo"
        // (IDs 1,2,3,5,6,7,8). Compartian ID con preguntas reales de dp-600 mas abajo en este
        // mismo archivo y, como dedupeQuestions() conserva la PRIMERA aparicion, estaban
        // desplazando silenciosamente a 7 preguntas del examen DP-600 del banco de estudio.
    {
        id: "dp600-1",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Tienes un modelo semántico en Microsoft Fabric. Necesitas asegurar que los usuarios puedan ver solo los datos de su propia región. ¿Qué característica debes usar?",
        options: [
            { id: "A", text: "Row-Level Security (RLS)" },
            { id: "B", text: "Object-Level Security (OLS)" },
            { id: "C", text: "Dynamic Data Masking" },
            { id: "D", text: "Perspective" }
        ],
        correctIds: ["A"],
        explanation: "RLS (Seguridad a nivel de fila) se usa para restringir el acceso a los datos basándose en el usuario que realiza la consulta.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-2",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Estás diseñando una estrategia de actualización para un modelo semántico grande. ¿Qué tipo de actualización minimiza el tiempo de procesamiento y el consumo de recursos?",
        options: [
            { id: "A", text: "Actualización incremental" },
            { id: "B", text: "Actualización completa" },
            { id: "C", text: "Actualización programada" },
            { id: "D", text: "Actualización bajo demanda" }
        ],
        correctIds: ["A"],
        explanation: "La actualización incremental solo procesa los datos que han cambiado, lo que es mucho más eficiente que una actualización completa.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-3",
        courseId: "dp-600",
        lang: "es",
        type: "multiple_choice",
        prompt: "¿Cuáles de los siguientes son elementos de Microsoft Fabric? (Selecciona 2)",
        options: [
            { id: "A", text: "Data Factory" },
            { id: "B", text: "Synapse Real-Time Analytics" },
            { id: "C", text: "Azure SQL Database" },
            { id: "D", text: "Power Automate" }
        ],
        correctIds: ["A", "B"],
        explanation: "Data Factory y Synapse Real-Time Analytics son experiencias centrales dentro de Microsoft Fabric.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-4",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué lenguaje se utiliza principalmente para las transformaciones de datos en un Dataflow Gen2?",
        options: [
            { id: "A", text: "Power Query M" },
            { id: "B", text: "Python" },
            { id: "C", text: "SQL" },
            { id: "D", text: "DAX" }
        ],
        correctIds: ["A"],
        explanation: "Dataflow Gen2 utiliza Power Query (lenguaje M) para la transformación de datos.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-5",
        courseId: "dp-600",
        lang: "es",
        type: "ordering",
        prompt: "Ordena los pasos para crear un Lakehouse en Fabric.",
        options: [
            { id: "A", text: "Crear un Workspace" },
            { id: "B", text: "Seleccionar la experiencia Data Engineering" },
            { id: "C", text: "Hacer clic en Nuevo y seleccionar Lakehouse" },
            { id: "D", text: "Nombrar el Lakehouse" }
        ],
        correctIds: ["A", "B", "C", "D"],
        explanation: "Primero necesitas un Workspace, luego entras a la experiencia adecuada y creas el artefacto.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-6",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Necesitas optimizar una consulta DAX que es lenta. ¿Qué herramienta deberías usar primero para analizar el rendimiento?",
        options: [
            { id: "A", text: "DAX Studio" },
            { id: "B", text: "Performance Analyzer en Power BI Desktop" },
            { id: "C", text: "SQL Server Profiler" },
            { id: "D", text: "Tabular Editor" }
        ],
        correctIds: ["B"],
        explanation: "Performance Analyzer es la herramienta integrada para una primera revisión del rendimiento de los visuales y las consultas DAX subyacentes.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-7",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué formato de archivo utiliza OneLake para almacenar datos de tablas?",
        options: [
            { id: "A", text: "Delta Parquet" },
            { id: "B", text: "CSV" },
            { id: "C", text: "JSON" },
            { id: "D", text: "XML" }
        ],
        correctIds: ["A"],
        explanation: "OneLake se estandariza en el formato Delta Parquet para el almacenamiento de tablas.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-8",
        courseId: "dp-600",
        lang: "es",
        type: "true_false",
        prompt: "DirectLake permite consultar datos directamente de OneLake sin importarlos a la memoria del modelo semántico.",
        options: [
            { id: "true", text: "Verdadero" },
            { id: "false", text: "Falso" }
        ],
        correctIds: ["true"],
        explanation: "DirectLake es una característica clave que permite alto rendimiento sin duplicación de datos (importación).",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-9",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Tienes un notebook de PySpark. Quieres escribir un DataFrame en una tabla Delta. ¿Qué comando usas?",
        options: [
            { id: "A", text: "df.write.format('delta').saveAsTable('tabla')" },
            { id: "B", text: "df.save('tabla')" },
            { id: "C", text: "df.write.table('tabla')" },
            { id: "D", text: "INSERT INTO tabla VALUES df" }
        ],
        correctIds: ["A"],
        explanation: "La sintaxis correcta en PySpark para escribir en formato Delta es df.write.format('delta').saveAsTable(...).",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-10",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué función DAX se utiliza para ignorar los filtros aplicados a una columna específica?",
        options: [
            { id: "A", text: "CALCULATE" },
            { id: "B", text: "ALL" },
            { id: "C", text: "REMOVEFILTERS" },
            { id: "D", text: "KEEPFILTERS" }
        ],
        correctIds: ["C"],
        explanation: "REMOVEFILTERS (o ALL usado como modificador) elimina los filtros de las columnas especificadas.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-11",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Estás configurando una tubería de despliegue (Deployment Pipeline). ¿Cuáles son las tres etapas predeterminadas?",
        options: [
            { id: "A", text: "Desarrollo, Prueba, Producción" },
            { id: "B", text: "Dev, QA, Perf" },
            { id: "C", text: "Alpha, Beta, Gold" },
            { id: "D", text: "Build, Test, Deploy" }
        ],
        correctIds: ["A"],
        explanation: "Las etapas estándar en Fabric son Desarrollo (Development), Prueba (Test) y Producción (Production).",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-12",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué tipo de trigger en Data Factory usarías para ejecutar un pipeline cada vez que llega un archivo nuevo a una carpeta?",
        options: [
            { id: "A", text: "Storage Event Trigger" },
            { id: "B", text: "Schedule Trigger" },
            { id: "C", text: "Tumbling Window Trigger" },
            { id: "D", text: "Manual Trigger" }
        ],
        correctIds: ["A"],
        explanation: "Los triggers de eventos de almacenamiento reaccionan a eventos como la creación de blobs (archivos).",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-13",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Necesitas compartir un conjunto de datos con una organización externa. ¿Qué característica de Fabric facilita esto de manera segura?",
        options: [
            { id: "A", text: "OneLake Shortcuts" },
            { id: "B", text: "Data Sharing" },
            { id: "C", text: "Export to Excel" },
            { id: "D", text: "Email Subscription" }
        ],
        correctIds: ["B"],
        explanation: "External Data Sharing permite compartir datos con usuarios externos sin moverlos.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-14",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cuál es el propósito principal de un 'Shortcut' en OneLake?",
        options: [
            { id: "A", text: "Referenciar datos almacenados en otras ubicaciones sin copiarlos" },
            { id: "B", text: "Crear una copia de seguridad rápida" },
            { id: "C", text: "Acelerar las consultas SQL" },
            { id: "D", text: "Comprimir los datos" }
        ],
        correctIds: ["A"],
        explanation: "Los Shortcuts unifican datos de diversas fuentes (Azure, AWS, OneLake interno) virtualizándolos en una ubicación.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-15",
        courseId: "dp-600",
        lang: "es",
        type: "multiple_choice",
        prompt: "Selecciona dos beneficios de usar notebooks en Fabric para la ingeniería de datos.",
        options: [
            { id: "A", text: "Soporte para múltiples lenguajes (PySpark, SQL, Scala)" },
            { id: "B", text: "Interfaz gráfica drag-and-drop exclusiva" },
            { id: "C", text: "Capacidad de colaboración en tiempo real" },
            { id: "D", text: "Solo permite ejecución secuencial simple" }
        ],
        correctIds: ["A", "C"],
        explanation: "Los notebooks son versátiles en lenguajes y permiten a los equipos colaborar en el código.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-16",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "En un modelo dimensional, ¿qué tipo de tabla almacena las métricas cuantitativas?",
        options: [
            { id: "A", text: "Tabla de Hechos (Fact Table)" },
            { id: "B", text: "Tabla de Dimensiones" },
            { id: "C", text: "Tabla Puente" },
            { id: "D", text: "Tabla Agregada" }
        ],
        correctIds: ["A"],
        explanation: "Las tablas de hechos contienen los números, las métricas y las claves foráneas a las dimensiones.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-17",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué comando T-SQL se usa para copiar datos desde un almacenamiento externo a un Warehouse en Fabric de manera eficiente?",
        options: [
            { id: "A", text: "COPY INTO" },
            { id: "B", text: "INSERT INTO ... SELECT" },
            { id: "C", text: "BULK INSERT" },
            { id: "D", text: "MERGE" }
        ],
        correctIds: ["A"],
        explanation: "COPY INTO es el comando recomendado y más performante para la ingesta de datos en Warehouses de Fabric.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-18",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué visualización es mejor para mostrar la distribución de una sola variable numérica?",
        options: [
            { id: "A", text: "Histograma" },
            { id: "B", text: "Gráfico de líneas" },
            { id: "C", text: "Gráfico de dispersión" },
            { id: "D", text: "Mapa de árbol" }
        ],
        correctIds: ["A"],
        explanation: "Los histogramas están diseñados específicamente para ver distribuciones de frecuencia.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-19",
        courseId: "dp-600",
        lang: "es",
        type: "true_false",
        prompt: "En Fabric, puedes usar Git para el control de versiones de tus artefactos.",
        options: [
            { id: "true", text: "Verdadero" },
            { id: "false", text: "Falso" }
        ],
        correctIds: ["true"],
        explanation: "Fabric se integra con Azure DevOps y Git para el ciclo de vida de desarrollo de software (ALM).",
        domain: "Explore and visualize data"
    },
    {
        id: "dp600-20",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué es 'V-Order' en el contexto de tablas Delta en Fabric?",
        options: [
            { id: "A", text: "Una optimización de escritura para hacer las lecturas más rápidas" },
            { id: "B", text: "Un ordenamiento visual de las columnas" },
            { id: "C", text: "Una versión del motor Vertex" },
            { id: "D", text: "Un tipo de validación de datos" }
        ],
        correctIds: ["A"],
        explanation: "V-Order es una optimización del formato Parquet que mejora significativamente el rendimiento de lectura, especialmente para Power BI.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-21",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cuál es la forma más eficiente de realizar consultas de análisis exploratorio sobre grandes volúmenes de datos JSON en OneLake sin definir un esquema rígido?",
        options: [
            { id: "A", text: "KQL (Kusto Query Language)" },
            { id: "B", text: "T-SQL" },
            { id: "C", text: "DAX" },
            { id: "D", text: "MDX" }
        ],
        correctIds: ["A"],
        explanation: "KQL y la base de datos KQL en Fabric están optimizados para análisis de logs, telemetría y datos semi-estructurados como JSON.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-22",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Necesitas crear un informe paginado. ¿Qué herramienta de diseño debes usar?",
        options: [
            { id: "A", text: "Power BI Report Builder" },
            { id: "B", text: "Power BI Desktop" },
            { id: "C", text: "Excel" },
            { id: "D", text: "Word" }
        ],
        correctIds: ["A"],
        explanation: "Power BI Report Builder es la herramienta específica para crear informes paginados (.rdl).",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-23",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué función de Fabric permite orquestar flujos de trabajo de datos complejos visualmente?",
        options: [
            { id: "A", text: "Data Pipelines" },
            { id: "B", text: "Notebooks" },
            { id: "C", text: "Semantic Models" },
            { id: "D", text: "Dashboards" }
        ],
        correctIds: ["A"],
        explanation: "Los Data Pipelines (basados en Azure Data Factory) son la herramienta de orquestación visual.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-24",
        courseId: "dp-600",
        lang: "es",
        type: "ordering",
        prompt: "Ordena los elementos de la jerarquía de Fabric de mayor a menor.",
        options: [
            { id: "A", text: "Tenant" },
            { id: "B", text: "Capacity" },
            { id: "C", text: "Workspace" },
            { id: "D", text: "Item (Artefacto)" }
        ],
        correctIds: ["A", "B", "C", "D"],
        explanation: "El Tenant es el nivel superior, seguido por la Capacidad, luego los Workspaces y finalmente los Items.",
        domain: "Plan, implement, and manage a solution for data analytics"
    },
    {
        id: "dp600-25",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué tipo de tabla en un modelo semántico NO tiene almacenamiento de datos y se calcula en tiempo de consulta?",
        options: [
            { id: "A", text: "Calculated Table" },
            { id: "B", text: "Imported Table" },
            { id: "C", text: "Dual Table" },
            { id: "D", text: "DirectQuery Table" }
        ],
        correctIds: ["A"],
        explanation: "Las tablas calculadas se derivan de otras tablas mediante DAX y se recalculan cuando el modelo se procesa.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-26",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Quieres reducir el tamaño de tu modelo semántico. ¿Qué acción tiene el mayor impacto?",
        options: [
            { id: "A", text: "Eliminar columnas con alta cardinalidad y que no se usan" },
            { id: "B", text: "Cambiar nombres de columnas" },
            { id: "C", text: "Crear más medidas" },
            { id: "D", text: "Ocultar tablas" }
        ],
        correctIds: ["A"],
        explanation: "Las columnas de alta cardinalidad (muchos valores únicos) ocupan la mayor parte del espacio en modelos columnares.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-27",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué herramienta permite editar 'Calculation Groups' en un modelo semántico?",
        options: [
            { id: "A", text: "Tabular Editor" },
            { id: "B", text: "DAX Studio" },
            { id: "C", text: "SQL Profiler" },
            { id: "D", text: "Power Query Editor" }
        ],
        correctIds: ["A"],
        explanation: "Tabular Editor es la herramienta (ahora integrada parcialmente, pero históricamente externa) para crear Grupos de Cálculo.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-28",
        courseId: "dp-600",
        lang: "es",
        type: "multiple_choice",
        prompt: "¿Qué dos modos de conectividad admite un dataset de Power BI (modelo semántico)?",
        options: [
            { id: "A", text: "Import" },
            { id: "B", text: "DirectQuery" },
            { id: "C", text: "LiveConnect (a otro servicio)" },
            { id: "D", text: "Batch" }
        ],
        correctIds: ["A", "B"],
        explanation: "Import y DirectQuery son los modos fundamentales de almacenamiento/conexión de datos.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-29",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cómo se llama la tecnología que permite a Power BI leer archivos Delta Parquet directamente con alto rendimiento?",
        options: [
            { id: "A", text: "DirectLake" },
            { id: "B", text: "VertiPaq" },
            { id: "C", text: "Power Query" },
            { id: "D", text: "Analysis Services" }
        ],
        correctIds: ["A"],
        explanation: "DirectLake es el puente directo entre el motor de Power BI y los archivos Delta en OneLake.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-30",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "En un script de PySpark, ¿cómo lees un archivo CSV en un DataFrame incluyendo la cabecera?",
        options: [
            { id: "A", text: "spark.read.option('header', 'true').csv('path')" },
            { id: "B", text: "spark.read.csv('path')" },
            { id: "C", text: "pandas.read_csv('path')" },
            { id: "D", text: "read.table('path')" }
        ],
        correctIds: ["A"],
        explanation: "Debes especificar la opción 'header' como 'true' para que la primera fila se trate como nombres de columna.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-31",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Para qué sirve la instrucción `OPTIMIZE` en una tabla Delta?",
        options: [
            { id: "A", text: "Compactar archivos pequeños en archivos más grandes" },
            { id: "B", text: "Eliminar datos antiguos" },
            { id: "C", text: "Crear índices" },
            { id: "D", text: "Validar esquema" }
        ],
        correctIds: ["A"],
        explanation: "OPTIMIZE mejora el rendimiento de lectura al consolidar muchos archivos pequeños (small files problem) en menos archivos de tamaño óptimo.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-32",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué ocurre con los datos históricos cuando se usa `VACUUM` en una tabla Delta?",
        options: [
            { id: "A", text: "Se eliminan permanentemente los archivos que ya no son referenciados por el log de transacciones y son más antiguos que el período de retención" },
            { id: "B", text: "Se archivan en un almacenamiento frío" },
            { id: "C", text: "Se comprimen" },
            { id: "D", text: "No ocurre nada, VACUUM es para limpieza de memoria RAM" }
        ],
        correctIds: ["A"],
        explanation: "VACUUM limpia el almacenamiento físico eliminando archivos obsoletos, lo que impide viajar en el tiempo (Time Travel) a versiones anteriores a la retención.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-33",
        courseId: "dp-600",
        lang: "es",
        type: "scenario",
        prompt: "Escenario: Tienes un proceso ETL que falla ocasionalmente por problemas de red transitorios. Quieres que la actividad 'Copy Data' se reintente automáticamente.",
        scenarioText: "Configuración de Pipeline en Data Factory",
        options: [
            { id: "A", text: "Configurar la política de 'Retry' en la actividad" },
            { id: "B", text: "Usar un bucle 'Until' alrededor de la actividad" },
            { id: "C", text: "Escribir un script personalizado para capturar errores" },
            { id: "D", text: "Aumentar el timeout" }
        ],
        correctIds: ["A"],
        explanation: "Las actividades en Data Factory tienen una configuración nativa de 'Retry' (Reintento) para manejar fallos transitorios.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-34",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué función se utiliza para combinar dos DataFrames en PySpark lado a lado (similar a SQL JOIN)?",
        options: [
            { id: "A", text: "join" },
            { id: "B", text: "union" },
            { id: "C", text: "append" },
            { id: "D", text: "concat" }
        ],
        correctIds: ["A"],
        explanation: "El método `.join()` se usa para unir DataFrames basándose en una clave común.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-35",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cuál es la principal ventaja de usar 'Variables' en DAX?",
        options: [
            { id: "A", text: "Mejorar la legibilidad y el rendimiento al calcular una expresión una sola vez" },
            { id: "B", text: "Permitir cambiar el tipo de dato dinámicamente" },
            { id: "C", text: "Exportar valores a otros informes" },
            { id: "D", text: "Encriptar fórmulas" }
        ],
        correctIds: ["A"],
        explanation: "Las variables (VAR) almacenan el resultado de una expresión, evitando que se recalcule múltiples veces si se usa repetidamente en la medida.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-36",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué visual de Power BI permite descomponer una medida en sus factores contribuyentes de forma jerárquica?",
        options: [
            { id: "A", text: "Decomposition Tree (Esquema jerárquico)" },
            { id: "B", text: "Key Influencers" },
            { id: "C", text: "Treemap" },
            { id: "D", text: "Matrix" }
        ],
        correctIds: ["A"],
        explanation: "El Decomposition Tree es excelente para análisis de causa raíz y desglose jerárquico.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-37",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "En la vista de Linaje (Lineage View) de Fabric, ¿qué puedes ver?",
        options: [
            { id: "A", text: "El flujo de datos desde la fuente hasta el informe" },
            { id: "B", text: "El código fuente de todas las aplicaciones" },
            { id: "C", text: "El historial de chat de los desarrolladores" },
            { id: "D", text: "La lista de usuarios inactivos" }
        ],
        correctIds: ["A"],
        explanation: "La vista de linaje muestra las dependencias entre los artefactos (datasets, dataflows, informes, dashboards).",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-38",
        courseId: "dp-600",
        lang: "es",
        type: "true_false",
        prompt: "Es posible crear un acceso directo (Shortcut) en un Lakehouse que apunte a un bucket de Amazon S3.",
        options: [
            { id: "true", text: "Verdadero" },
            { id: "false", text: "Falso" }
        ],
        correctIds: ["true"],
        explanation: "OneLake soporta shortcuts a S3, ADLS Gen2 y OneLake interno.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-39",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué lenguaje se usa para definir pruebas unitarias de datos en Data Pipelines (ej. validación de esquema)?",
        options: [
            { id: "A", text: "No hay lenguaje específico, se usan actividades de validación o scripts" },
            { id: "B", text: "Jest" },
            { id: "C", text: "JUnit" },
            { id: "D", text: "Selenium" }
        ],
        correctIds: ["A"],
        explanation: "En Data Factory, usas actividades como 'Validation', 'If Condition', o scripts SQL/Notebooks para validar datos.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-40",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué métrica te ayuda a identificar un 'cuello de botella' en una etapa de visualización?",
        options: [
            { id: "A", text: "Visual display duration" },
            { id: "B", text: "DaX query duration" },
            { id: "C", text: "Network latency" },
            { id: "D", text: "Dataset refresh time" }
        ],
        correctIds: ["A"],
        explanation: "Si 'Visual display duration' es alto pero 'DAX query duration' es bajo, el problema está en el renderizado (muchos puntos de datos), no en la consulta.",
        domain: "Prepare and serve data"
    },{
        id: "dp600-41",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cuál es la función principal de 'OneSecurity' en Fabric (concepto general)?",
        options: [
            { id: "A", text: "Definir la seguridad una vez en OneLake y que se aplique en todos los motores" },
            { id: "B", text: "Un antivirus integrado" },
            { id: "C", text: "Un firewall para los endpoints SQL" },
            { id: "D", text: "Un sistema de encriptación de disco" }
        ],
        correctIds: ["A"],
        explanation: "El objetivo de OneSecurity es unificar la seguridad (RLS, OLS) para que no tengas que redefinirla en cada motor (SQL, Spark, KQL).",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-42",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué comando DAX permite modificar el contexto de filtro dentro de una medida?",
        options: [
            { id: "A", text: "CALCULATE" },
            { id: "B", text: "SUM" },
            { id: "C", text: "AVERAGE" },
            { id: "D", text: "RELATED" }
        ],
        correctIds: ["A"],
        explanation: "CALCULATE es la función más importante de DAX porque permite evaluar una expresión en un contexto de filtro modificado.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-43",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "En un esquema de estrella, ¿cómo deben relacionarse las tablas?",
        options: [
            { id: "A", text: "Relaciones de uno a muchos desde Dimensiones a Hechos" },
            { id: "B", text: "Relaciones de muchos a muchos entre Hechos" },
            { id: "C", text: "Relaciones de uno a uno entre todas las tablas" },
            { id: "D", text: "Sin relaciones, todo en una sola tabla" }
        ],
        correctIds: ["A"],
        explanation: "El diseño estándar es que una dimensión filtra a la tabla de hechos a través de una relación de 1:*.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-44",
        courseId: "dp-600",
        lang: "es",
        type: "ordering",
        prompt: "Ordena los pasos para la ingestión de datos usando un Dataflow Gen2.",
        options: [
            { id: "A", text: "Conectar al origen de datos" },
            { id: "B", text: "Transformar los datos (Power Query)" },
            { id: "C", text: "Configurar el destino de salida" },
            { id: "D", text: "Publicar el Dataflow" }
        ],
        correctIds: ["A", "B", "C", "D"],
        explanation: "El flujo lógico es: Conectar -> Transformar -> Destinar (Destination) -> Publicar/Ejecutar.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-45",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué puedes usar para prevenir que una medida DAX devuelva un error de división por cero?",
        options: [
            { id: "A", text: "La función DIVIDE" },
            { id: "B", text: "Un bloque IF(divisor=0, ...)" },
            { id: "C", text: "La función IFERROR" },
            { id: "D", text: "Todas las anteriores" }
        ],
        correctIds: ["D"],
        explanation: 'Todas funcionan, pero DIVIDE es la mejor práctica ("Safe Divide").',
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-46",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué componente de Fabric permite consultar datos usando T-SQL directamente sobre archivos en OneLake sin provisionar un Warehouse dedicado?",
        options: [
            { id: "A", text: "SQL Analytics Endpoint del Lakehouse" },
            { id: "B", text: "KQL Database" },
            { id: "C", text: "Spark SQL" },
            { id: "D", text: "Dataflow" }
        ],
        correctIds: ["A"],
        explanation: "Cada Lakehouse viene con un SQL Analytics Endpoint automático que permite consultas T-SQL sobre las tablas Delta.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-47",
        courseId: "dp-600",
        lang: "es",
        type: "true_false",
        prompt: "Las tablas de un Warehouse en Fabric siempre se almacenan en formato Delta Parquet.",
        options: [
            { id: "true", text: "Verdadero" },
            { id: "false", text: "Falso" }
        ],
        correctIds: ["true"],
        explanation: "Tanto el Lakehouse como el Warehouse almacenan sus datos físicamente en Delta Parquet en OneLake.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-48",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué herramienta usarías para programar la ejecución de un notebook de Spark a una hora específica?",
        options: [
            { id: "A", text: "Data Pipeline con actividad Notebook" },
            { id: "B", text: "Windows Task Scheduler" },
            { id: "C", text: "Cron job en tu laptop" },
            { id: "D", text: "Power Automate Desktop" }
        ],
        correctIds: ["A"],
        explanation: "Los Data Pipelines son el orquestador nativo para programar y ejecutar notebooks.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-49",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué significa 'Surrogate Key' en un Data Warehouse?",
        options: [
            { id: "A", text: "Una clave generada por el sistema (usualmente entero) para identificar unívocamente una fila" },
            { id: "B", text: "La clave primaria del sistema fuente" },
            { id: "C", text: "Una clave compuesta" },
            { id: "D", text: "Una clave foránea nula" }
        ],
        correctIds: ["A"],
        explanation: "Las claves subrogadas son claves sintéticas útiles para manejar cambios en las claves de negocio y para Slowly Changing Dimensions.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-50",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué opción de optimización en Spark ayuda cuando tienes datos sesgados (skewed data) en un join?",
        options: [
            { id: "A", text: "Broadcast Join (si una tabla es pequeña) o Salting" },
            { id: "B", text: "Aumentar el número de ejecutores ciegamente" },
            { id: "C", text: "Usar CSV en lugar de Parquet" },
            { id: "D", text: "Desactivar la optimización Catalyst" }
        ],
        correctIds: ["A"],
        explanation: "El Broadcast Join evita el shuffle de la tabla grande. El Salting (agregar ruido a la clave) distribuye los datos sesgados.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-51",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cómo se denomina la capacidad de Fabric para cumplir con normativas de residencia de datos (guardar datos en una región específica)?",
        options: [
            { id: "A", text: "Multi-Geo Capacities" },
            { id: "B", text: "Local Storage" },
            { id: "C", text: "Region Lock" },
            { id: "D", text: "Data Sovereignty Mode" }
        ],
        correctIds: ["A"],
        explanation: "Puedes asignar Workspaces a capacidades que residen en diferentes regiones geográficas.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-52",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "En un gráfico de barras, ¿qué eje se utiliza normalmente para la variable categórica?",
        options: [
            { id: "A", text: "Eje X (o Y en barras horizontales)" },
            { id: "B", text: "Eje Z" },
            { id: "C", text: "Leyenda" },
            { id: "D", text: "Tooltip" }
        ],
        correctIds: ["A"],
        explanation: "El eje principal define las categorías que se comparan.",
        domain: "Plan, implement, and manage a solution for data analytics"
    },
    {
        id: "dp600-53",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué función DAX devuelve una tabla con una sola columna conteniendo los valores distintos de la columna especificada?",
        options: [
            { id: "A", text: "DISTINCT" },
            { id: "B", text: "VALUES" },
            { id: "C", text: "Ambas (con sutiles diferencias en la fila en blanco)" },
            { id: "D", text: "UNIQUE" }
        ],
        correctIds: ["C"],
        explanation: "Tanto DISTINCT como VALUES devuelven valores únicos. VALUES incluye la 'fila en blanco' por integridad referencial, DISTINCT no.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-54",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Necesitas monitorear el consumo de CU (Capacity Units) de tu capacidad Fabric. ¿Qué usas?",
        options: [
            { id: "A", text: "Fabric Capacity Metrics App" },
            { id: "B", text: "Azure Portal Cost Management" },
            { id: "C", text: "Task Manager" },
            { id: "D", text: "Event Viewer" }
        ],
        correctIds: ["A"],
        explanation: "La aplicación de métricas de capacidad es la herramienta dedicada para ver el uso, la limitación (throttling) y el suavizado de la capacidad.",
        domain: "Plan, implement, and manage a solution for data analytics"
    },
    {
        id: "dp600-55",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué es 'Data Activator' en Fabric?",
        options: [
            { id: "A", text: "Una herramienta para tomar acciones automáticas basadas en cambios en los datos (Alertas, Triggers)" },
            { id: "B", text: "Un botón para actualizar datos" },
            { id: "C", text: "Un tipo de licencia" },
            { id: "D", text: "Un conector de base de datos" }
        ],
        correctIds: ["A"],
        explanation: "Data Activator permite definir patrones en los datos (ej. temperatura > 100) y lanzar acciones (email, Teams, flujo).",
        domain: "Plan, implement, and manage a solution for data analytics"
    },
    {
        id: "dp600-56",
        courseId: "dp-600",
        lang: "es",
        type: "multiple_choice",
        prompt: "Selecciona dos buenas prácticas para el modelado de datos en Power BI.",
        options: [
            { id: "A", text: "Usar esquema de estrella (Star Schema)" },
            { id: "B", text: "Ocultar las columnas de claves foráneas en la vista de reporte" },
            { id: "C", text: "Mantener todas las tablas en una sola tabla plana enorme" },
            { id: "D", text: "Usar relaciones bidireccionales por defecto" }
        ],
        correctIds: ["A", "B"],
        explanation: "El esquema de estrella es óptimo para rendimiento. Ocultar columnas técnicas mejora la usabilidad.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-57",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué tipo de autenticación se recomienda para conectar un Notebook de Fabric a una Azure SQL Database externa de forma segura y sin gestión de contraseñas?",
        options: [
            { id: "A", text: "Entra ID (Managed Identity / Service Principal)" },
            { id: "B", text: "SQL Authentication (Usuario/Password)" },
            { id: "C", text: "Anonymous" },
            { id: "D", text: "Certificate" }
        ],
        correctIds: ["A"],
        explanation: "Usar la identidad administrada del Workspace o Service Principals evita hardcodear credenciales.",
        domain: "Plan, implement, and manage a solution for data analytics"
    },
    {
        id: "dp600-58",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué formato de visualización es ideal para mostrar el progreso hacia un objetivo (Target)?",
        options: [
            { id: "A", text: "KPI o Medidor (Gauge)" },
            { id: "B", text: "Pie Chart" },
            { id: "C", text: "Scatter Plot" },
            { id: "D", text: "Funnel" }
        ],
        correctIds: ["A"],
        explanation: "Los visuales de KPI y medidores están diseñados para comparar un valor actual contra un objetivo.",
        domain: "Explore and visualize data"
    },
    {
        id: "dp600-59",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "En un Dataflow Gen2, ¿qué opción permite guardar los resultados en un Lakehouse?",
        options: [
            { id: "A", text: "Configurar un 'Data Destination'" },
            { id: "B", text: "No se puede, solo carga a Warehouses" },
            { id: "C", text: "Usar un script de Python" },
            { id: "D", text: "Exportar a CSV y subir manualmente" }
        ],
        correctIds: ["A"],
        explanation: "Dataflow Gen2 permite configurar destinos de salida, incluyendo Lakehouse y Warehouse.",
        domain: "Explore and visualize data"
    },
    {
        id: "dp600-60",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué es el 'XMLA Endpoint' en el contexto de un modelo semántico de Fabric?",
        options: [
            { id: "A", text: "Un punto de conexión que permite a herramientas externas (SSMS, Tabular Editor) conectarse y gestionar el modelo" },
            { id: "B", text: "Un archivo de configuración XML" },
            { id: "C", text: "Un error de conexión" },
            { id: "D", text: "Una función de Excel" }
        ],
        correctIds: ["A"],
        explanation: "El endpoint XMLA expone el modelo semántico como si fuera una base de datos Analysis Services, permitiendo gestión avanzada.",
        domain: "Explore and visualize data"
    },
    {
        id: "dp600-61",
        courseId: "dp-600",
        lang: "es",
        type: "ordering",
        prompt: "Ordena el flujo de trabajo típico de CI/CD para Power BI.",
        options: [
            { id: "A", text: "Desarrollar en Power BI Desktop" },
            { id: "B", text: "Guardar como PBIP (Proyecto)" },
            { id: "C", text: "Commit y Push a Git (Azure DevOps)" },
            { id: "D", text: "Pipeline de despliegue sincroniza con Workspace" }
        ],
        correctIds: ["A", "B", "C", "D"],
        explanation: "El flujo moderno implica usar PBIP para control de fuentes y luego pipelines para el despliegue.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-62",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cuál es la diferencia principal entre un 'Workspace' y un 'Domain' en Fabric?",
        options: [
            { id: "A", text: "Workspace es un contenedor de artefactos técnica; Domain es una agrupación lógica empresarial" },
            { id: "B", text: "Son lo mismo" },
            { id: "C", text: "Domain es para usuarios externos" },
            { id: "D", text: "Workspace es pagado, Domain es gratis" }
        ],
        correctIds: ["A"],
        explanation: "Los dominios (Domains) permiten agrupar múltiples workspaces por área de negocio (ej. Finanzas, Ventas).",
        domain: "Plan, implement, and manage a solution for data analytics"
    },
    {
        id: "dp600-63",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué comando SQL usarías para ver el historial de cambios de una tabla Delta?",
        options: [
            { id: "A", text: "DESCRIBE HISTORY table_name" },
            { id: "B", text: "SHOW CHANGES table_name" },
            { id: "C", text: "SELECT * FROM history(table_name)" },
            { id: "D", text: "LOG table_name" }
        ],
        correctIds: ["A"],
        explanation: "DESCRIBE HISTORY muestra la lista de commits, operaciones y timestamps de la tabla Delta.",
        domain: "Plan, implement, and manage a solution for data analytics"
    },
    {
        id: "dp600-64",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué herramienta es esencial para crear un modelo semántico compuesto (Composite Model) que combine DirectQuery e Import?",
        options: [
            { id: "A", text: "Power BI Desktop" },
            { id: "B", text: "Dataflow Gen2" },
            { id: "C", text: "Notebook" },
            { id: "D", text: "SQL Endpoint" }
        ],
        correctIds: ["A"],
        explanation: "Power BI Desktop es donde defines las relaciones entre diferentes islas de datos (DirectQuery + Import).",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-65",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué es 'OneLake File Explorer'?",
        options: [
            { id: "A", text: "Una aplicación de escritorio que integra OneLake con el Explorador de Archivos de Windows" },
            { id: "B", text: "Una vista web en el portal de Fabric" },
            { id: "C", text: "Un comando de PowerShell" },
            { id: "D", text: "Un navegador web" }
        ],
        correctIds: ["A"],
        explanation: "Permite interactuar con los archivos de OneLake como si estuvieran en tu disco local (similar a OneDrive).",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-66",
        courseId: "dp-600",
        lang: "es",
        type: "true_false",
        prompt: "La función RELATED() de DAX funciona en una relación de muchos a uno, desde el lado 'muchos' para traer datos del lado 'uno'.",
        options: [
            { id: "true", text: "Verdadero" },
            { id: "false", text: "Falso" }
        ],
        correctIds: ["true"],
        explanation: "RELATED escala la relación hacia la tabla de búsqueda (lookup table) para obtener columnas adicionales.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-67",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué tipo de 'Gateway' necesitas para acceder a una base de datos SQL Server on-premises desde un Dataflow Gen2?",
        options: [
            { id: "A", text: "On-premises Data Gateway" },
            { id: "B", text: "VNET Data Gateway" },
            { id: "C", text: "Personal Gateway" },
            { id: "D", text: "No se necesita Gateway" }
        ],
        correctIds: ["A"],
        explanation: "Para conectar la nube (Fabric) con recursos locales (on-premises), el Data Gateway es obligatorio.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-68",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Cuál es el límite de filas exportables desde un visual de Power BI a CSV en el servicio?",
        options: [
            { id: "A", text: "30,000 (aprox)" },
            { id: "B", text: "1,000,000" },
            { id: "C", text: "150,000" },
            { id: "D", text: "Ilimitado" }
        ],
        correctIds: ["A"],
        explanation: "El límite predeterminado es 30,000 para CSV y 150,000 para Excel desde el servicio, aunque puede variar por configuración de admin, generalmente es bajo.",
        domain: "Explore and visualize data"
    },
    {
        id: "dp600-69",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué función DAX usarías para contar filas en una tabla, ignorando cualquier contexto de filtro?",
        options: [
            { id: "A", text: "COUNTROWS(ALL(Tabla))" },
            { id: "B", text: "COUNTROWS(Tabla)" },
            { id: "C", text: "COUNTA(Tabla[Columna])" },
            { id: "D", text: "DISTINCTCOUNT(Tabla[ID])" }
        ],
        correctIds: ["A"],
        explanation: "Usar ALL(Tabla) elimina los filtros antes de contar.",
        domain: "Explore and visualize data"
    },
    {
        id: "dp600-70",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué es un 'Reflex' en versiones anteriores de Fabric (ahora Data Activator)?",
        options: [
            { id: "A", text: "El artefacto donde defines monitores y acciones" },
            { id: "B", text: "Un tipo de gráfico" },
            { id: "C", text: "Una tabla SQL" },
            { id: "D", text: "Un usuario admin" }
        ],
        correctIds: ["A"],
        explanation: "Un 'Reflex' es el contenedor de la lógica de activación (ahora simplemente parte de Data Activator).",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-71",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué formato de archivo se recomienda para 'Bronze Layer' (zona de aterrizaje) en una arquitectura Medallion si los datos vienen en JSON?",
        options: [
            { id: "A", text: "Mantener el formato original (JSON) o convertir a Parquet" },
            { id: "B", text: "Siempre CSV" },
            { id: "C", text: "XML comprimido" },
            { id: "D", text: "Excel" }
        ],
        correctIds: ["A"],
        explanation: "La capa Bronce suele almacenar los datos 'tal cual' (raw), aunque Parquet es preferible por eficiencia si se puede convertir.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-72",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué opción en Power BI Desktop permite ver cómo interactúan los filtros entre diferentes tablas?",
        options: [
            { id: "A", text: "Model View (Vista de Modelo)" },
            { id: "B", text: "Data View" },
            { id: "C", text: "Query Editor" },
            { id: "D", text: "Performance Analyzer" }
        ],
        correctIds: ["A"],
        explanation: "La vista de modelo muestra el diagrama de relaciones y la dirección de los filtros.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-73",
        courseId: "dp-600",
        lang: "es",
        type: "multiple_choice",
        prompt: "Selecciona dos formas de optimizar el rendimiento de un Dataflow Gen2.",
        options: [
            { id: "A", text: "Habilitar 'Staging' para consultas intermedias" },
            { id: "B", text: "Filtrar filas y columnas lo antes posible" },
            { id: "C", text: "Traer todas las columnas y filtrar al final" },
            { id: "D", text: "Deshabilitar la carga paralela" }
        ],
        correctIds: ["A", "B"],
        explanation: "El 'Query Folding' y el filtrado temprano son claves. Staging ayuda en transformaciones complejas.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-74",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué característica de Fabric permite a los analistas de negocio explorar modelos semánticos en Excel con tablas dinámicas conectadas en vivo?",
        options: [
            { id: "A", text: "Analyze in Excel" },
            { id: "B", text: "Download PBIX" },
            { id: "C", text: "Export Data" },
            { id: "D", text: "Get Data -> Web" }
        ],
        correctIds: ["A"],
        explanation: "'Analyze in Excel' crea una conexión ODC al modelo semántico en la nube.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-75",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué es 'Mirrored Database' en Fabric?",
        options: [
            { id: "A", text: "Una réplica casi en tiempo real de una base de datos externa (ej. Cosmos DB, Azure SQL) en OneLake" },
            { id: "B", text: "Una copia de seguridad manual" },
            { id: "C", text: "Un clon de un reporte" },
            { id: "D", text: "Un espejo visual en el dashboard" }
        ],
        correctIds: ["A"],
        explanation: "El Mirroring permite replicar datos externos a OneLake automáticamente para análisis sin ETL complejo.",
        domain: "Explore and visualize data"
    },
    {
        id: "dp600-76",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué lenguaje utiliza un 'Notebook' por defecto si no especificas nada más?",
        options: [
            { id: "A", text: "PySpark (Python)" },
            { id: "B", text: "Scala" },
            { id: "C", text: "SQL" },
            { id: "D", text: "R" }
        ],
        correctIds: ["A"],
        explanation: "PySpark es el lenguaje predeterminado y más popular en los notebooks de Fabric.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-77",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "Necesitas asegurar que un reporte de Power BI se actualice tan pronto como finalice la carga del ETL en Data Factory. ¿Qué haces?",
        options: [
            { id: "A", text: "Agregar una actividad 'Web' usando la API de REST de Power BI para refrescar el dataset al final del pipeline" },
            { id: "B", text: "Programar ambos a la misma hora" },
            { id: "C", text: "Usar DirectQuery solamente" },
            { id: "D", text: "Enviar un email al admin" }
        ],
        correctIds: ["A"],
        explanation: "La orquestación correcta implica encadenar el refresco del modelo al éxito del ETL, usando la API de Refresh.",
        domain: "Prepare and serve data"
    },
    {
        id: "dp600-78",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué tipo de agregación en un modelo semántico 'Aggregation Table' mejora el renidmiento de las consultas de alto nivel?",
        options: [
            { id: "A", text: "Sum, Count, Min, Max pre-calculados por grupo" },
            { id: "B", text: "Texto concatenado" },
            { id: "C", text: "Imágenes binarias" },
            { id: "D", text: "Fechas individuales" }
        ],
        correctIds: ["A"],
        explanation: "Las tablas de agregación resumen los datos a un nivel superior, permitiendo respuestas instantáneas a consultas generales.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-79",
        courseId: "dp-600",
        lang: "es",
        type: "true_false",
        prompt: "Puedes usar 'Fabric Free Trial' para probar todas las capacidades, incluyendo OneLake y Data Factory, durante 60 días.",
        options: [
            { id: "true", text: "Verdadero" },
            { id: "false", text: "Falso" }
        ],
        correctIds: ["true"],
        explanation: "Microsoft ofrece una prueba de capacidad de Fabric (Trial Capacity) para evaluación.",
        domain: "Implement and manage semantic models"
    },
    {
        id: "dp600-80",
        courseId: "dp-600",
        lang: "es",
        type: "single_choice",
        prompt: "¿Qué es 'Dynamic Format Strings' en las medidas DAX?",
        options: [
            { id: "A", text: "Permite cambiar el formato (ej. moneda, porcentaje) condicionalmente basado en el contexto" },
            { id: "B", text: "Cambia el color de la fuente" },
            { id: "C", text: "Permite escribir código C#" },
            { id: "D", text: "Es una función de Excel" }
        ],
        correctIds: ["A"],
        explanation: "Es útil cuando una misma medida puede mostrar valores monetarios o porcentuales dependiendo de la selección del usuario.",
        domain: "Implement and manage semantic models"
    },
  {
    "id": 1,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure that Contoso can use version control to meet the data analytics requirements and the general requirements. What should you do?",
    "options": [
      { "id": "a", "text": "Store at the semantic models and reports in Data Lake Gen2 storage." },
      { "id": "b", "text": "Modify the settings of the Research workspaces to use a GitHub repository." },
      { "id": "c", "text": "Modify the settings of the Research division workspaces to use an Azure Repos repository." },
      { "id": "d", "text": "Store all the semantic models and reports in Microsoft OneDrive." }
    ],
    "correctIds": ["c"],
    "explanation": "Azure Repos is a Git-based repository within Azure DevOps, providing versioning, tracking, and collaboration for code, reports, and semantic models. This is the most appropriate choice for version-controlling Power BI artifacts like datasets, reports, and semantic models in a workspace.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 2,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to recommend a solution to group the Research division workspaces. What should you include in the recommendation? (Select the Grouping method and the Tool)",
    "options": [
      { "id": "a", "text": "Grouping method: Capacity" },
      { "id": "b", "text": "Grouping method: Domain" },
      { "id": "c", "text": "Grouping method: Tenant" },
      { "id": "d", "text": "Tool: OneLake data hub" },
      { "id": "e", "text": "Tool: The Fabric Admin portal" },
      { "id": "f", "text": "Tool: The Microsoft Entra admin center" }
    ],
    "correctIds": ["b", "e"],
    "explanation": "Domain allows you to group workspaces based on their purpose or business context. The Fabric Admin Portal is the primary management interface for Microsoft Fabric.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 3,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to refresh the Orders table of the Online Sales department. The solution must meet the semantic model requirements. What should you include in the solution?",
    "options": [
      { "id": "a", "text": "an Azure Data Factory pipeline that executes a Stored procedure activity to retrieve the maximum value of the OrderID column in the destination lakehouse" },
      { "id": "b", "text": "an Azure Data Factory pipeline that executes a Stored procedure activity to retrieve the minimum value of the OrderID column in the destination lakehouse" },
      { "id": "c", "text": "an Azure Data Factory pipeline that executes a dataflow to retrieve the minimum value of the OrderID column in the destination lakehouse" },
      { "id": "d", "text": "an Azure Data Factory pipeline that executes a dataflow to retrieve the maximum value of the OrderID column in the destination lakehouse" }
    ],
    "correctIds": ["d"],
    "explanation": "A dataflow can be used to retrieve the max OrderID number (stored in the destination table - OrderID is a sequential number). This number can be used to set from which row data must be added to the destination table (implementing an incremental load).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 4,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which syntax should you use in a notebook to access the Research division data for Productline1?",
    "options": [
      { "id": "a", "text": "spark.read.format(\"delta\").load(\"Tables/productline1/ResearchProduct\")" },
      { "id": "b", "text": "spark.sql(\"SELECT * FROM Lakehouse1.ResearchProduct\")" },
      { "id": "c", "text": "external_table('Tables/ResearchProduct')" },
      { "id": "d", "text": "external_table(ResearchProduct)" }
    ],
    "correctIds": ["b"],
    "explanation": "Once created, the line 'spark.sql(\"SELECT * FROM Lakehouse1.ResearchProduct\")' can be used to access data correctly. The syntax of C and D is correct for KQL databases but incorrect here.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 5,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to assign permissions for the data store in the AnalyticsPOC workspace. Which additional permissions should you assign when you share the data store for the DataEngineers, DataAnalysts, and DataScientists?",
    "options": [
      { "id": "a", "text": "DataEngineers: Read All Apache Spark" },
      { "id": "b", "text": "DataAnalysts: Build Reports on the default dataset" },
      { "id": "c", "text": "DataScientists: Read All SQL analytics endpoint data" },
      { "id": "d", "text": "DataEngineers: Build Reports on the default dataset" },
      { "id": "e", "text": "DataAnalysts: Read All Apache Spark" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Data Engineers: Read all Apache Spark - because they need to be able to work with Spark for Data curation. Data Analysts: Build Reports on the default dataset - because they are report builders. Data Scientists: Read All SQL analytics Endpoints data - They leverage curated data (by engineers) to do predictive analytics.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 6,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to create a DAX measure to calculate the average overall satisfaction score. How should you complete the DAX code variables 'Period' and 'Result' calculation?",
    "options": [
      { "id": "a", "text": "Period uses: NumberOfMonths" },
      { "id": "b", "text": "Period uses: 1" },
      { "id": "c", "text": "Result AVERAGEX uses: Period" },
      { "id": "d", "text": "Result AVERAGEX uses: NumberOfMonths" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "Period: Variable is defined as to select 1 year of date range (NumberOfMonths). Can directly be passed in the Filter context of Calculate formula.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 7,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to resolve the issue with the pricing group classification. How should you complete the T-SQL statement?",
    "options": [
      { "id": "a", "text": "CREATE VIEW" },
      { "id": "b", "text": "CREATE TABLE" },
      { "id": "c", "text": "CASE WHEN..." },
      { "id": "d", "text": "IIF..." }
    ],
    "correctIds": ["a", "c"],
    "explanation": "VIEW: from an existing table. CASE: correct syntax before the WHENs.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 8,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What should you recommend using to ingest the customer data into the data store in the AnalyticsPOC workspace?",
    "options": [
      { "id": "a", "text": "a stored procedure" },
      { "id": "b", "text": "a pipeline that contains a KQL activity" },
      { "id": "c", "text": "a Spark notebook" },
      { "id": "d", "text": "a dataflow" }
    ],
    "correctIds": ["d"],
    "explanation": "A dataflow. Even though the text reads 'Data will be loaded without transformation...', in general, dataflows are used when data transformations are involved after ingestion.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 9,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which type of data store should you recommend in the AnalyticsPOC workspace?",
    "options": [
      { "id": "a", "text": "a data lake" },
      { "id": "b", "text": "a warehouse" },
      { "id": "c", "text": "a lakehouse" },
      { "id": "d", "text": "an external Hive metastore" }
    ],
    "correctIds": ["c"],
    "explanation": "A lakehouse. The data store must handle semi-structured and unstructured data, therefore a Lakehouse should be the optimal solution supporting read access with T-SQL and Python.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 10,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to write a T-SQL query that will return data for the year 2023 that displays ProductID and ProductName and has a summarized Amount that is higher than 10,000. Which query should you use?",
    "options": [
      { "id": "a", "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales WHERE DATEPART(YEAR, SaleDate) = '2023' GROUP BY ProductID, ProductName HAVING SUM (Amount) > 10000" },
      { "id": "b", "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales GROUP BY ProductID, ProductName HAVING DATEPART(YEAR, SaleDate) = '2023' AND SUM (Amount) > 10000" },
      { "id": "c", "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales WHERE DATEPART(YEAR, SaleDate) = '2023' AND SUM (Amount) > 10000" },
      { "id": "d", "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales WHERE DATEPART(YEAR, SaleDate) = '2023' GROUP BY ProductID, ProductName HAVING TotalAmount > 10000" }
    ],
    "correctIds": ["a"],
    "explanation": "Answer A is the only answer with valid syntax. The filter on year should be included in the WHERE-clause. The filter on SUM(Amount) should be included in the HAVING-clause since it is an aggregate.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 11,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to write a T-SQL query that will return the customer ID, name, postal code, and the last updated time of the most recent row for each customer ID. How should you complete the code?",
    "options": [
      { "id": "a", "text": "x = ROW_NUMBER()" },
      { "id": "b", "text": "x = LAST_Value()" },
      { "id": "c", "text": "WHERE X = 1" },
      { "id": "d", "text": "WHERE LastUpdated = Max(LastUpdated)" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "ROW_NUMBER() is a window function that assigns a unique sequential number to each row within a partition. We use it to assign a row number to each CustomerID, ordering by LastUpdated DESC. Then filter where X=1 to get the most recent.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 12,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You run the following code: `PBI_visualize = QuickVisualize (get_dataset_config(df))`. Which statement is true?",
    "options": [
      { "id": "a", "text": "The code embeds an existing Power BI report." },
      { "id": "b", "text": "The code creates a Power BI report." },
      { "id": "c", "text": "The code displays a summary of the DataFrame." }
    ],
    "correctIds": ["b"],
    "explanation": "The code creates a Power BI report. If the code generates a new Power BI report (e.g., using Python, Power BI REST API, or Power BI Desktop automation), then this is correct.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 13,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You plan to connect to Lakehouse1 by using its SQL endpoint. What will you be able to do after connecting to Lakehouse1?",
    "options": [
      { "id": "a", "text": "Read Table3 (Managed table)." },
      { "id": "b", "text": "Update the data Table3." },
      { "id": "c", "text": "Read Table2 (External table created by Spark)." },
      { "id": "d", "text": "Update the data in Table1 (Delta table created by shortcut)." }
    ],
    "correctIds": ["a"],
    "explanation": "The right answer is A. A managed table is stored within the Fabric storage and becomes immediately accessible through the SQL endpoint upon connection.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 14,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to add a PowerQuery step to identify the maximum values for the numeric columns. Which function should you include in the step?",
    "options": [
      { "id": "a", "text": "Table.MaxN" },
      { "id": "b", "text": "Table.Max" },
      { "id": "c", "text": "Table.Range" },
      { "id": "d", "text": "Table.Profile" }
    ],
    "correctIds": ["d"],
    "explanation": "The Table.Profile function in PowerQuery is specifically designed to provide statistical information about a table's columns, including the maximum values for numeric columns.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 15,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to use a registered machine learning model to generate predictions by using the PREDICT function in a Fabric notebook. Which two languages can you use to perform model scoring?",
    "options": [
      { "id": "a", "text": "T-SQL" },
      { "id": "b", "text": "DAX" },
      { "id": "c", "text": "Spark SQL" },
      { "id": "d", "text": "PySpark" }
    ],
    "correctIds": ["c", "d"],
    "explanation": "Spark SQL and PySpark support the PREDICT function for machine learning model scoring in Fabric notebooks.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 16,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to use the Chart view in the notebook to explore the data manually. Which function should you run to make the data available in the Chart view?",
    "options": [
      { "id": "a", "text": "displayHTML" },
      { "id": "b", "text": "show" },
      { "id": "c", "text": "write" },
      { "id": "d", "text": "display" }
    ],
    "correctIds": ["d"],
    "explanation": "The display function is specifically designed for rendering visual representations of data within interactive notebooks, enabling Chart view.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 17,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a Python visual in Power BI. Data displayed by the visual is grouped automatically and duplicate rows are NOT displayed. You need all rows to appear in the visual. What should you do?",
    "options": [
      { "id": "a", "text": "Reference the columns in the Python code by index." },
      { "id": "b", "text": "Modify the Sort Column By property for all columns." },
      { "id": "c", "text": "Add a unique field to each row." },
      { "id": "d", "text": "Modify the Summarize By property for all columns." }
    ],
    "correctIds": ["c"],
    "explanation": "When you add a unique identifier (such as an ID column) to each row, Power BI recognizes that each row is unique and will display all rows in the visual without grouping them.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 18,
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "You need to write a DAX query that will be executed by using the XMLA endpoint. The query must return a table of stores that have opened since December 1, 2023. Order the DAX logic.",
    "options": [
      { "id": "a", "text": "DEFINE VAR SalesSince = DATE (2023, 12, 01)" },
      { "id": "b", "text": "EVALUATE" },
      { "id": "c", "text": "FILTER ( SUMMARIZE (Store, Store [Name], Store [OpenDate]), Store [OpenDate] >= SalesSince )" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "First DEFINE the variable, then EVALUATE the expression, which filters the summarized table.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 19,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What can you identify about the pickupLongitude column based on the column profile (Distinct count: 935, Unique count: 871, Count: 1000)?",
    "options": [
      { "id": "a", "text": "The column has duplicate values." },
      { "id": "b", "text": "All the table rows are profiled." },
      { "id": "c", "text": "The column has missing values." },
      { "id": "d", "text": "There are 935 values that occur only once." }
    ],
    "correctIds": ["a"],
    "explanation": "Since the Distinct count (935) is less than the total Count (1000) and greater than the Unique count (871), there are duplicate values.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 20,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure read-write access to DS1 is available by using XMLA endpoint. What should be modified first?",
    "options": [
      { "id": "a", "text": "the DS1 settings" },
      { "id": "b", "text": "the WS1 settings" },
      { "id": "c", "text": "the C1 (Capacity) settings" },
      { "id": "d", "text": "the Tenant1 settings" }
    ],
    "correctIds": ["c"],
    "explanation": "As XMLA is set to Read-Only first by default on the capacity, you must go to the capacity settings (C1) to enable read-write.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 21,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to recommend a solution to provide users with the ability to create and publish custom Direct Lake semantic models by using external tools. Which three actions in the Fabric Admin portal should you include?",
    "options": [
      { "id": "a", "text": "From Tenant settings, set Allow XMLA Endpoints and Analyze in Excel with on-premises datasets to Enabled." },
      { "id": "b", "text": "From Tenant settings, set Allow Azure Active Directory guest users to access Microsoft Fabric to Enabled." },
      { "id": "c", "text": "From Tenant settings, select Users can edit data model in the Power BI service." },
      { "id": "d", "text": "From Capacity settings, set XMLA Endpoint to Read Write." },
      { "id": "e", "text": "From Tenant settings, set Users can create Fabric items to Enabled." },
      { "id": "f", "text": "From Tenant settings, enable Publish to Web." }
    ],
    "correctIds": ["a", "d", "e"],
    "explanation": "Allow XMLA Endpoints allows interaction via XMLA. Read Write mode on XMLA Endpoint is required for creating/modifying models. Users must also be allowed to create Fabric items.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 22,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You plan to make bulk changes to the model by using the Tabular Model Definition Language (TMDL) extension for VS Code. Which file format should you use?",
    "options": [
      { "id": "a", "text": "PBIP" },
      { "id": "b", "text": "PBIX" },
      { "id": "c", "text": "PBIT" },
      { "id": "d", "text": "PBIDS" }
    ],
    "correctIds": ["a"],
    "explanation": "PBIP (Power BI Project) is a file format that supports the open-source TMDL format and is designed for integration with external development environments.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 23,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to ensure that a user named User1 can truncate tables in schemaA only. How should you complete the T-SQL statement?",
    "options": [
      { "id": "a", "text": "GRANT ALTER" },
      { "id": "b", "text": "GRANT EXECUTE" },
      { "id": "c", "text": "ON SCHEMA::schemaA TO User1" },
      { "id": "d", "text": "ON DATABASE::schemaA TO User1" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "ALTER allows modification of schema objects, including truncation. Permissions should be granted ON SCHEMA::schemaA.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 24,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to provide Power BI developers with access to the pipeline. Ensure they can deploy to Dev and Test but NOT Production. Which three levels of access should you assign?",
    "options": [
      { "id": "a", "text": "Build permission to the production semantic models" },
      { "id": "b", "text": "Admin access to the deployment pipeline" },
      { "id": "c", "text": "Viewer access to the Development and Test workspaces" },
      { "id": "d", "text": "Viewer access to the Production workspace" },
      { "id": "e", "text": "Contributor access to the Development and Test workspaces" },
      { "id": "f", "text": "Contributor access to the Production workspace" }
    ],
    "correctIds": ["b", "d", "e"],
    "explanation": "Admin access to the pipeline manages stages. Contributor on Dev/Test allows deployment there. Viewer on Production prevents deployment there.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 25,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You have a DirectQuery semantic model with 500 million rows. You need to reduce query execution time. Which two features can you use?",
    "options": [
      { "id": "a", "text": "user-defined aggregations" },
      { "id": "b", "text": "automatic aggregation" },
      { "id": "c", "text": "query caching" },
      { "id": "d", "text": "OneLake integration" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "Aggregations (both user-defined and automatic) pre-aggregate data to reduce the need to scan massive datasets for summary queries.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 26,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model using CSV files (incremental refresh configured). The refresh fails after running out of resources. What is a possible cause?",
    "options": [
      { "id": "a", "text": "Query folding is occurring." },
      { "id": "b", "text": "Only refresh complete days is selected." },
      { "id": "c", "text": "XMLA Endpoint is set to Read Only." },
      { "id": "d", "text": "Query folding is NOT occurring." },
      { "id": "e", "text": "The delta type of the column used to partition the data has changed." }
    ],
    "correctIds": ["d"],
    "explanation": "Incremental refresh requires query folding to be efficient. CSV files do not support query folding, leading to resource exhaustion.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 27,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to enable scale-out for a semantic model. What should you do first?",
    "options": [
      { "id": "a", "text": "At the semantic model level, set Large dataset storage format to Off." },
      { "id": "b", "text": "At the tenant level, set Create and use Metrics to Enabled." },
      { "id": "c", "text": "At the semantic model level, set Large dataset storage format to On." },
      { "id": "d", "text": "At the tenant level, set Data Activator to Enabled." }
    ],
    "correctIds": ["c"],
    "explanation": "Setting 'Large dataset storage format' to On is a prerequisite for enabling scale-out.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 28,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You create a Direct Lake semantic model that uses Delta tables and RLS of the warehouse. Which mode will be used by DAX queries when RLS is involved?",
    "options": [
      { "id": "a", "text": "DirectQuery" },
      { "id": "b", "text": "Dual" },
      { "id": "c", "text": "Direct Lake" },
      { "id": "d", "text": "Import" }
    ],
    "correctIds": ["a"],
    "explanation": "Power BI queries on a warehouse in Direct Lake mode will fall back to Direct Query mode to abide by row-level security defined in the warehouse.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 29,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a diagram of the model. The diagram must contain only the Sales table and related tables. What should you use from Microsoft Power BI Desktop?",
    "options": [
      { "id": "a", "text": "data categories" },
      { "id": "b", "text": "Data view" },
      { "id": "c", "text": "Model view" },
      { "id": "d", "text": "DAX query view" }
    ],
    "correctIds": ["c"],
    "explanation": "Model view allows you to visualize and manage relationships, and create specific diagrams for subsets of tables.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 30,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to identify the frequently used columns that are loaded into memory for a Direct Lake model. What are two ways to achieve the goal?",
    "options": [
      { "id": "a", "text": "Use the Analyze in Excel feature." },
      { "id": "b", "text": "Use the Vertipaq Analyzer tool." },
      { "id": "c", "text": "Query the $System.DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS DMV." },
      { "id": "d", "text": "Query the DISCOVER_MEMORYGRANT DMV." }
    ],
    "correctIds": ["b", "c"],
    "explanation": "Vertipaq Analyzer provides memory usage details. The DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS DMV gives insights into storage and column usage.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 31,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to create a dimensional data model. 1) The relationship between OrderItem and Product must be based on: 2) The Company entity must be:",
    "options": [
      { "id": "a", "text": "1) The ProductID column" },
      { "id": "b", "text": "1) Both the CompanyID and the ProductID columns" },
      { "id": "c", "text": "2) Omitted" },
      { "id": "d", "text": "2) Denormalized into the Customer and Product entities" }
    ],
    "correctIds": ["a", "d"],
    "explanation": "Relationship based on ProductID implies products are unique or company context is handled elsewhere. Denormalizing Company into Customer and Product reduces joins (Star Schema).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 32,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to reduce the memory used by Model1 (Import mode) and the time it takes to refresh. Which two actions should you perform?",
    "options": [
      { "id": "a", "text": "Split OrderDateTime into separate date and time columns." },
      { "id": "b", "text": "Replace Total Quantity with a calculated column." },
      { "id": "c", "text": "Convert Quantity into the Text data type." },
      { "id": "d", "text": "Replace TotalSalesAmount with a measure." }
    ],
    "correctIds": ["a", "d"],
    "explanation": "Splitting DateTime improves compression (lower cardinality). Replacing a calculated column with a measure saves storage (memory) as measures are calculated at query time.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 33,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to prevent report creators from populating visuals by using implicit measures. What are two tools that you can use?",
    "options": [
      { "id": "a", "text": "Microsoft Power BI Desktop" },
      { "id": "b", "text": "Tabular Editor" },
      { "id": "c", "text": "Microsoft SQL Server Management Studio (SSMS)" },
      { "id": "d", "text": "DAX Studio" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "Power BI Desktop allows managing measure definitions. Tabular Editor allows modifying model properties (Discourage Implicit Measures).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 34,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "You have a Fabric tenant that contains two lakehouses. You are building a dataflow that will combine data from the lakehouses. 1) [Answer choice] of the transformation steps in the query will fold. 2) The Added custom step will be performed in [answer choice].",
    "options": [
      { "id": "a", "text": "1) All" },
      { "id": "b", "text": "1) None" },
      { "id": "c", "text": "1) Some" },
      { "id": "d", "text": "2) each lakehouse's query engine" },
      { "id": "e", "text": "2) the Microsoft Power Query engine" },
      { "id": "f", "text": "2) the source lakehouse query engine" }
    ],
    "correctIds": ["c", "e"],
    "explanation": "1) Some transformations fold (basic ones), others do not. 2) Custom steps (Added custom) usually cannot be folded and are processed by the Power Query engine.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 35,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You plan to copy external data to Table1. The schema of the external data changes regularly. You need to replace Table1 with the schema of the external data and replace all the data. What should you do for the Copy data activity?",
    "options": [
      { "id": "a", "text": "From the Source tab, add additional columns." },
      { "id": "b", "text": "From the Destination tab, set Table action to Overwrite." },
      { "id": "c", "text": "From the Settings tab, select Enable staging." },
      { "id": "d", "text": "From the Source tab, select Enable partition discovery." }
    ],
    "correctIds": ["b"],
    "explanation": "Setting 'Table action' to 'Overwrite' in the Destination tab ensures that the table is completely replaced, including the schema and data, matching the external source.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 36,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You plan to query sales data files (Amazon S3) by using the SQL endpoint. You need to recommend which file format to use and where to create a shortcut.",
    "options": [
      { "id": "a", "text": "Create a shortcut in the Files section." },
      { "id": "b", "text": "Use the Parquet format." },
      { "id": "c", "text": "Use the CSV format." },
      { "id": "d", "text": "Create a shortcut in the Tables section." },
      { "id": "e", "text": "Use the delta format." }
    ],
    "correctIds": ["b", "d"],
    "explanation": "Parquet is a columnar format optimized for analytics. Creating a shortcut in the Tables section allows for better SQL querying capabilities compared to the Files section.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 37,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to convert CSV files in a lakehouse subfolder into the delta format that has V-Order optimization enabled. What should you do from Lakehouse explorer?",
    "options": [
      { "id": "a", "text": "Use the Load to Tables feature." },
      { "id": "b", "text": "Create a new shortcut in the Files section." },
      { "id": "c", "text": "Create a new shortcut in the Tables section." },
      { "id": "d", "text": "Use the Optimize feature." }
    ],
    "correctIds": ["a"],
    "explanation": "The 'Load to Tables' feature allows converting files (like CSV) into managed Delta tables, applying V-Order optimization during the process.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 38,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You plan to copy data to Table1 and partition the table based on a date column. You create a Copy activity. You need to specify the partition column in the Destination settings. What should you do first?",
    "options": [
      { "id": "a", "text": "From the Destination tab, set Mode to Append." },
      { "id": "b", "text": "From the Destination tab, select the partition column." },
      { "id": "c", "text": "From the Source tab, select Enable partition discovery." },
      { "id": "d", "text": "From the Destination tabs, set Mode to Overwrite." }
    ],
    "correctIds": ["d"],
    "explanation": "To enable partitioning options in the Destination settings of a Copy activity for a Lakehouse table, you must typically select 'Overwrite' as the Table action.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 39,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "You run: CREATE TABLE test.FactSales AS CLONE OF Dbo.FactSales; Evaluate the statements: 1) A replica of dbo.Sales is created in the test schema by copying the metadata only. 2) Additional schema changes to dbo.FactSales will also apply to test.FactSales.",
    "options": [
      { "id": "yes1", "text": "1) Yes" },
      { "id": "no1", "text": "1) No" },
      { "id": "yes2", "text": "2) Yes" },
      { "id": "no2", "text": "2) No" }
    ],
    "correctIds": ["yes1", "no2"],
    "explanation": "1) Yes, cloning creates a zero-copy replica using metadata. 2) No, the clone is independent; schema changes to the source do not propagate to the clone.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 40,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a solution to populate a data store that supports dataflows and ensures Delta tables are V-Order optimized and compacted automatically. Which type of data store should you use?",
    "options": [
      { "id": "a", "text": "a lakehouse" },
      { "id": "b", "text": "an Azure SQL database" },
      { "id": "c", "text": "a warehouse" },
      { "id": "d", "text": "a KQL database" }
    ],
    "correctIds": ["a"],
    "explanation": "A Lakehouse in Fabric supports V-Order optimization and automatic compaction for Delta tables, and integrates well with dataflows.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 41,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "You run: df.write.partitionBy('year', 'month', 'day').mode('overwrite').parquet('Files/SalesOrder'). Evaluate: 1) The results will form a hierarchy of folders for each partition key. 2) The resulting file partitions can be read in parallel. 3) The resulting file partitions will use file compression.",
    "options": [
      { "id": "yes1", "text": "1) Yes" },
      { "id": "no1", "text": "1) No" },
      { "id": "yes2", "text": "2) Yes" },
      { "id": "no2", "text": "2) No" },
      { "id": "yes3", "text": "3) Yes" },
      { "id": "no3", "text": "3) No" }
    ],
    "correctIds": ["yes1", "yes2", "yes3"],
    "explanation": "1) Partitioning creates a folder hierarchy. 2) Partitions allow parallel reading. 3) Parquet files are compressed by default (usually Snappy).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 42,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to transform the data columns into attribute-value pairs (unpivot). You select the VendorID column. Which transformation should you select?",
    "options": [
      { "id": "a", "text": "Group by" },
      { "id": "b", "text": "Unpivot columns" },
      { "id": "c", "text": "Unpivot other columns" },
      { "id": "d", "text": "Split column" }
    ],
    "correctIds": ["c"],
    "explanation": "Since you selected 'VendorID' (the key identifier) and want to unpivot the *rest* of the columns, you should use 'Unpivot Other Columns'.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 43,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure that the pipeline runs every four hours on Mondays and Fridays. To what should you set Repeat for the schedule?",
    "options": [
      { "id": "a", "text": "Daily" },
      { "id": "b", "text": "By the minute" },
      { "id": "c", "text": "Weekly" },
      { "id": "d", "text": "Hourly" }
    ],
    "correctIds": ["c"],
    "explanation": "Weekly scheduling allows selecting specific days (Mon, Fri) and then defining time intervals (every 4 hours) within those days.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 44,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You suspect that Fabric is throttling the compute used by the warehouse. What should you use to identify whether throttling is occurring?",
    "options": [
      { "id": "a", "text": "the Capacity settings" },
      { "id": "b", "text": "the Monitoring hub" },
      { "id": "c", "text": "dynamic management views (DMVs)" },
      { "id": "d", "text": "the Microsoft Fabric Capacity Metrics app" }
    ],
    "correctIds": ["d"],
    "explanation": "The Microsoft Fabric Capacity Metrics app provides visibility into capacity usage, smoothing, and throttling events.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 45,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "Spark Code: read csv, select columns, withColumn Year, write partitionBy Year. Evaluate: 1) Spark will read only the selected columns from CSV. 2) Removing partition will reduce execution time. 3) Adding inferSchema='true' will increase execution time.",
    "options": [
      { "id": "yes1", "text": "1) Yes" },
      { "id": "no1", "text": "1) No" },
      { "id": "yes2", "text": "2) Yes" },
      { "id": "no2", "text": "2) No" },
      { "id": "yes3", "text": "3) Yes" },
      { "id": "no3", "text": "3) No" }
    ],
    "correctIds": ["no1", "no2", "yes3"],
    "explanation": "1) No, CSV is row-based; Spark reads whole rows before selecting. 2) No, partitioning usually improves downstream read performance, though write might be slightly slower, removing it doesn't necessarily reduce overall time significantly in context. 3) Yes, inferSchema requires an extra pass over the data.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 46,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A report query has been running for 45 minutes (usually 2 mins). You need to identify what is preventing the completion. Which DMV should you use?",
    "options": [
      { "id": "a", "text": "sys.dm_exec_requests" },
      { "id": "b", "text": "sys.dm_exec_sessions" },
      { "id": "c", "text": "sys.dm_exec_connections" },
      { "id": "d", "text": "sys.dm_pdw_exec_requests" }
    ],
    "correctIds": ["a"],
    "explanation": "sys.dm_exec_requests shows currently executing requests, their status, blocking status, and wait types.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 47,
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Complete the Power Query M code to ensure query folding. `Query = [Value](Database, \"SELECT...\", [EnableFolding]=true)`",
    "options": [
      { "id": "a", "text": "Value" },
      { "id": "b", "text": "NativeQuery" },
      { "id": "c", "text": "EnableFolding" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Value.NativeQuery(Database, 'SQL', [EnableFolding=true]) is the pattern to enforce folding for a native SQL query.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 48,
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Match actions to requirements: 1) Remove unused files. 2) Combine small files.",
    "options": [
      { "id": "a", "text": "Run the VACUUM command" },
      { "id": "b", "text": "Run the OPTIMIZE command" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "VACUUM removes old files. OPTIMIZE compacts small files.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 49,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to create a Type 1 SCD loading pattern. Which two actions should you include?",
    "options": [
      { "id": "a", "text": "Update rows when the non-key attributes have changed." },
      { "id": "b", "text": "Insert new rows when the natural key exists and non-key attributes changed." },
      { "id": "c", "text": "Update the effective end date of rows." },
      { "id": "d", "text": "Insert new records when the natural key is a new value." }
    ],
    "correctIds": ["a", "d"],
    "explanation": "Type 1 updates existing records (overwrites history) and inserts new records.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 50,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "Create a shortcut to ADLS Gen2. 1) Connection: [option] 2) Endpoint: [option]",
    "options": [
      { "id": "a", "text": "1) https" },
      { "id": "b", "text": "1) abfs" },
      { "id": "c", "text": "2) dfs" },
      { "id": "d", "text": "2) blob" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "Connection uses 'https' (secure REST). Endpoint for ADLS Gen2 (hierarchical namespace) is 'dfs'.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 51,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You plan to create a dashboard. You need to identify which three elements can be pinned to the dashboard. Which three elements should you identify?",
    "options": [
      { "id": "a", "text": "a report page" },
      { "id": "b", "text": "a report visual" },
      { "id": "c", "text": "a custom visual from a report" },
      { "id": "d", "text": "a scorecard visual" },
      { "id": "e", "text": "a slicer" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "You can pin an entire report page, a single visual, or a custom visual. Slicers usually cannot be pinned as functional elements in the same way.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 52,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to grant a user permission to view the content of a lakehouse including the SQL endpoint. The solution must follow the principle of least privilege. which role should you assign to the user?",
    "options": [
      { "id": "a", "text": "Viewer" },
      { "id": "b", "text": "Admin" },
      { "id": "c", "text": "Contributor" },
      { "id": "d", "text": "Member" }
    ],
    "correctIds": ["a"],
    "explanation": "The Viewer role allows viewing content (read-only) without the ability to modify, satisfying least privilege.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 53,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model that uses a star schema. You need to create a measure that performs a distinct count of a column from a dimension table. The logic must effectively traverse the relationship between the fact table and the dimension table. Which DAX function should you use?",
    "options": [
      { "id": "a", "text": "RELATED" },
      { "id": "b", "text": "RELATEDTABLE" },
      { "id": "c", "text": "CROSSFILTER" },
      { "id": "d", "text": "USERELATIONSHIP" }
    ],
    "correctIds": ["c"],
    "explanation": "CROSSFILTER allows changing the cross-filter direction of a relationship (e.g., to Both) during the calculation, enabling counts across the relationship.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 54,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a large semantic model. You need to ensure that the model is optimized for reports. What should you use?",
    "options": [
      { "id": "a", "text": "VertiPaq Analyzer" },
      { "id": "b", "text": "Performance Analyzer" },
      { "id": "c", "text": "Best Practice Analyzer in Tabular Editor" },
      { "id": "d", "text": "SQL Server Profiler" }
    ],
    "correctIds": ["c"],
    "explanation": "Best Practice Analyzer (BPA) checks for modeling best practices (e.g., hiding foreign keys, formatting, minimizing columns) to optimize the model.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 55,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a PBIX file that contains a report. You plan to use the deployment pipelines. You need to recommend a file format for the source control. Which file format should you recommend?",
    "options": [
      { "id": "a", "text": "PBIT" },
      { "id": "b", "text": "PBIP" },
      { "id": "c", "text": "PBIDS" },
      { "id": "d", "text": "PBIX" }
    ],
    "correctIds": ["b"],
    "explanation": "PBIP (Power BI Project) format exposes the report and dataset definition as plain text files, ideal for source control (Git integration).",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 56,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are creating a Python visual in Power BI Desktop. You need to ensure that the data is treated as a dataframe. Which Python library should you import?",
    "options": [
      { "id": "a", "text": "matplotlib" },
      { "id": "b", "text": "pandas" },
      { "id": "c", "text": "seaborn" },
      { "id": "d", "text": "numpy" }
    ],
    "correctIds": ["b"],
    "explanation": "Pandas is the standard library for data manipulation in Python and is used to handle the dataset as a DataFrame in Power BI.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 57,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to implement row-level security (RLS) in a DirectQuery model. The solution must use the user's UPN. Which DAX function should you use?",
    "options": [
      { "id": "a", "text": "USERNAME()" },
      { "id": "b", "text": "USERPRINCIPALNAME()" },
      { "id": "c", "text": "LOOKUPVALUE()" },
      { "id": "d", "text": "RELATED()" }
    ],
    "correctIds": ["b"],
    "explanation": "USERPRINCIPALNAME() returns the user's UPN (email address), which is standard for mapping users in RLS.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 58,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a warehouse. You run a T-SQL query that returns an error. You need to identify the cause of the error. What should you use?",
    "options": [
      { "id": "a", "text": "sys.dm_exec_requests" },
      { "id": "b", "text": "sys.dm_pdw_exec_requests" },
      { "id": "c", "text": "sys.dm_exec_sessions" },
      { "id": "d", "text": "Query Insights" }
    ],
    "correctIds": ["d"],
    "explanation": "Query Insights in Fabric (or SQL Analytics Endpoint) provides detailed historical query execution information, including errors.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 59,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to create a semantic model that supports Direct Lake mode. Which two sources can you use?",
    "options": [
      { "id": "a", "text": "A SQL Server database" },
      { "id": "b", "text": "A warehouse in Fabric" },
      { "id": "c", "text": "A lakehouse in Fabric" },
      { "id": "d", "text": "A generic Delta table" }
    ],
    "correctIds": ["b", "c"],
    "explanation": "Direct Lake works with Fabric Warehouse and Fabric Lakehouse (Delta tables).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 60,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a query that performs a large sorting operation. The query fails. You suspect memory pressure. Which DMV should you check?",
    "options": [
      { "id": "a", "text": "sys.dm_pdw_nodes_tran_database_transactions" },
      { "id": "b", "text": "sys.dm_pdw_exec_requests" },
      { "id": "c", "text": "sys.dm_pdw_nodes_os_performance_counters" },
      { "id": "d", "text": "sys.dm_exec_query_memory_grants" }
    ],
    "correctIds": ["d"],
    "explanation": "sys.dm_exec_query_memory_grants provides information about the memory requested and granted to queries, helping diagnose memory pressure.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 61,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You have a workspace with 100 reports. You need to identify which reports are not used. Which two methods can you use?",
    "options": [
      { "id": "a", "text": "Fabric Capacity Metrics app" },
      { "id": "b", "text": "The usage metrics report in the workspace" },
      { "id": "c", "text": "Admin monitoring workspace" },
      { "id": "d", "text": "Activity log in Microsoft Purview" }
    ],
    "correctIds": ["b", "c"],
    "explanation": "Usage metrics report gives per-report usage. Admin monitoring workspace (Feature usage) offers a tenant/workspace-wide view.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 62,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to optimize the performance of a Spark notebook. The notebook processes many small files. What should you do?",
    "options": [
      { "id": "a", "text": "Increase the executor size." },
      { "id": "b", "text": "Use V-Order." },
      { "id": "c", "text": "Run the OPTIMIZE command." },
      { "id": "d", "text": "Partition the data." }
    ],
    "correctIds": ["c"],
    "explanation": "The OPTIMIZE command (often with ZORDER) compacts small files into larger ones, improving read performance.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 63,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a semantic model. You need to ensure that the model supports the 'Analyze in Excel' feature. What setting should you enable?",
    "options": [
      { "id": "a", "text": "XMLA Endpoint Read/Write" },
      { "id": "b", "text": "Allow XMLA endpoints and Analyze in Excel with on-premises datasets" },
      { "id": "c", "text": "Users can work with datasets in Excel using a live connection" },
      { "id": "d", "text": "Featured tables" }
    ],
    "correctIds": ["c"],
    "explanation": "This tenant setting specifically allows users to use Analyze in Excel (Live Connection).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 64,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You have a calculation group. You need to format the 'YOY %' calculation item as a percentage. What should you use?",
    "options": [
      { "id": "a", "text": "Format String Expression" },
      { "id": "b", "text": "Format property" },
      { "id": "c", "text": "Data Type property" },
      { "id": "d", "text": "Dynamic Format String" }
    ],
    "correctIds": ["a"],
    "explanation": "Format String Expression in a calculation item allows defining the format dynamically (e.g., '0.00%' for 'YOY %').",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 65,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a pipeline that fails. You need to restart the pipeline from the failed activity. What should you do?",
    "options": [
      { "id": "a", "text": "Rerun the entire pipeline." },
      { "id": "b", "text": "Use the 'Rerun from failed activity' option in the Monitoring hub." },
      { "id": "c", "text": "Delete the failed run and start valid." },
      { "id": "d", "text": "Trigger a new run." }
    ],
    "correctIds": ["b"],
    "explanation": "The monitoring hub allows you to restart a pipeline run specifically from the point of failure.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 66,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You use a KQL database. You need to ingest data from an event hub. Which item should you create?",
    "options": [
      { "id": "a", "text": "A pipeline" },
      { "id": "b", "text": "A dataflow" },
      { "id": "c", "text": "An eventstream" },
      { "id": "d", "text": "A shortcut" }
    ],
    "correctIds": ["c"],
    "explanation": "Eventstreams in Fabric are designed to capture real-time data from sources like Event Hubs and ingest it into KQL databases or Lakehouses.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 67,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You create a shortcut to a Google Cloud Storage bucket. You need to ensure the data is up to date. What should you verify?",
    "options": [
      { "id": "a", "text": "That the shortcut uses caching." },
      { "id": "b", "text": "That the source data has not moved." },
      { "id": "c", "text": "Shortcuts point to live data; no refresh is needed." },
      { "id": "d", "text": "Schedule a refresh for the shortcut." }
    ],
    "correctIds": ["c"],
    "explanation": "Shortcuts are pointers to the data. They provide a live view of the source location, so no data refresh is required.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 68,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to automate the deployment of a semantic model to the Production workspace. What should you use?",
    "options": [
      { "id": "a", "text": "XMLA Endpoint" },
      { "id": "b", "text": "Fabric API (Deployment Pipelines)" },
      { "id": "c", "text": "Power BI Desktop" },
      { "id": "d", "text": "SharePoint" }
    ],
    "correctIds": ["b"],
    "explanation": "The Fabric REST APIs allow automating the deployment pipeline process, including deploying to stages (Prod).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 69,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You have a semantic model with a 'Sales' table. You want to deny access to the 'Margin' column for a specific group of users. What should you configure?",
    "options": [
      { "id": "a", "text": "Row-level security (RLS)" },
      { "id": "b", "text": "Object-level security (OLS)" },
      { "id": "c", "text": "Folder security" },
      { "id": "d", "text": "Workspace roles" }
    ],
    "correctIds": ["b"],
    "explanation": "Row-level security filters rows. Object-level security (OLS) allows you to secure specific tables or columns (like 'Margin') so they are hidden/inaccessible.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 70,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to monitor the capacity units (CUs) consumed by a specific workspace. Which visual in the Metrics app should you check?",
    "options": [
      { "id": "a", "text": "Compute - % consumed" },
      { "id": "b", "text": "Timepoint detail" },
      { "id": "c", "text": "Items (by Workspace)" },
      { "id": "d", "text": "Interactive operations" }
    ],
    "correctIds": ["c"],
    "explanation": "The 'Items' page allows breaking down consumption by workspace and then by item.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 71,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You create a new lakehouse. You need to protect the data using OneLake security (RBAC). What is the default state?",
    "options": [
      { "id": "a", "text": "All users have access." },
      { "id": "b", "text": "Only the creator has access." },
      { "id": "c", "text": "It inherits workspace permissions." },
      { "id": "d", "text": "Public access." }
    ],
    "correctIds": ["c"],
    "explanation": "Fabric items, including Lakehouses, inherit permissions from the Workspace roles by default.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 72,
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Arrange the steps to enable a custom visual for the organization: 1) Download the .pbiviz. 2) Open Admin Portal. 3) Upload to Organizational Visuals.",
    "options": [
      { "id": "a", "text": "Step 1, 2, 3" },
      { "id": "b", "text": "Step 2, 3, 1" },
      { "id": "c", "text": "Step 3, 2, 1" }
    ],
    "correctIds": ["a"],
    "explanation": "You first need the file (1), then go to the portal (2), then upload it (3).",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 73,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a PySpark dataframe 'df'. You want to filter it to show only rows where 'Sales' > 100. Code?",
    "options": [
      { "id": "a", "text": "df.filter(df.Sales > 100)" },
      { "id": "b", "text": "df.where('Sales > 100')" },
      { "id": "c", "text": "Both A and B" },
      { "id": "d", "text": "df.select('Sales' > 100)" }
    ],
    "correctIds": ["c"],
    "explanation": "In PySpark, both .filter() and .where() are aliases and can take column expressions or SQL string conditions.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 74,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "You are configuring a Data Pipeline. 1) To run activities in parallel, use: [option]. 2) To run activities conditionally, use: [option].",
    "options": [
      { "id": "a", "text": "1) ForEach" },
      { "id": "b", "text": "1) Switch" },
      { "id": "c", "text": "2) If Condition" },
      { "id": "d", "text": "2) Filter" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "ForEach loop can run iterations in parallel (if sequential is false). If Condition executes branches based on boolean logic.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 75,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to reduce the size of a semantic model. You find a column with high cardinality (many unique values). Which technique helps most?",
    "options": [
      { "id": "a", "text": "Splitting the column" },
      { "id": "b", "text": "Changing data type to Text" },
      { "id": "c", "text": "Grouping values" },
      { "id": "d", "text": "Sorting the column" }
    ],
    "correctIds": ["a"],
    "explanation": "For example, splitting a DateTime into Date and Time drastically reduces cardinality (Date has ~365 values/year, Time has 86400/day, vs DateTime combined unique values).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 76,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two file formats support V-Order optimization in Fabric?",
    "options": [
      { "id": "a", "text": "Parquet" },
      { "id": "b", "text": "Delta (Parquet)" },
      { "id": "c", "text": "CSV" },
      { "id": "d", "text": "JSON" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "V-Order is a write-optimization for Parquet files, including those managed by Delta Lake.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 77,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to access a lakehouse table using a T-SQL view. Where should you create the view?",
    "options": [
      { "id": "a", "text": "In the Lakehouse SQL Endpoint" },
      { "id": "b", "text": "In a Spark Notebook" },
      { "id": "c", "text": "In the semantic model" },
      { "id": "d", "text": "In Power Query" }
    ],
    "correctIds": ["a"],
    "explanation": "The SQL Analytics Endpoint allows you to create views, TVFs, and manage SQL security over the lakehouse data.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 78,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You want to share a single report with a user without giving them access to the workspace. What feature should you use?",
    "options": [
      { "id": "a", "text": "App" },
      { "id": "b", "text": "Share link" },
      { "id": "c", "text": "Workspace Viewer Role" },
      { "id": "d", "text": "Deployment Pipeline" }
    ],
    "correctIds": ["b"],
    "explanation": "Sharing a report via a link (Share) allows providing access to that specific item without workspace membership.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 79,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You are building a complex ETL process. Which two activities can execute a Notebook?",
    "options": [
      { "id": "a", "text": "Notebook activity in Pipeline" },
      { "id": "b", "text": "Stored Procedure" },
      { "id": "c", "text": "Lookup activity" },
      { "id": "d", "text": "Web activity (calling API)" }
    ],
    "correctIds": ["a", "d"],
    "explanation": "The native 'Notebook' activity is the primary way. Alternatively, you can trigger a notebook via the Fabric API using a Web activity.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 80,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to version control your semantic model using Git integration. Which workspace setting is required?",
    "options": [
      { "id": "a", "text": "Git integration > Connect" },
      { "id": "b", "text": "OneLake Data Hub" },
      { "id": "c", "text": "Domains" },
      { "id": "d", "text": "Premium Capacity" }
    ],
    "correctIds": ["a"],
    "explanation": "You must connect the workspace to an Azure DevOps Git repository in the workspace settings.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 81,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the primary benefit of using Direct Lake over DirectQuery?",
    "options": [
      { "id": "a", "text": "No query limits." },
      { "id": "b", "text": "Better performance (near Import speed)." },
      { "id": "c", "text": "Support for calculated columns." },
      { "id": "d", "text": "Works with any database." }
    ],
    "correctIds": ["b"],
    "explanation": "Direct Lake loads data from Parquet files directly into memory on demand, offering Import-like performance without the refresh latency.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 82,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to query data in a KQL database. You want to calculate a moving average. Which KQL operator should you use?",
    "options": [
      { "id": "a", "text": "summarize" },
      { "id": "b", "text": "make-series" },
      { "id": "c", "text": "project" },
      { "id": "d", "text": "mv-expand" }
    ],
    "correctIds": ["b"],
    "explanation": "The make-series operator creates a time series and allows applying functions like series_moving_avg.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 83,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "Identify the storage limit for: 1) Pro Workspace 2) Premium Capacity Workspace.",
    "options": [
      { "id": "a", "text": "1) 10 GB/user" },
      { "id": "b", "text": "1) 1 GB/user" },
      { "id": "c", "text": "2) 100 TB" },
      { "id": "d", "text": "2) No fixed limit (managed by CUs)" }
    ],
    "correctIds": ["a", "d"],
    "explanation": "Pro users have a 10 GB limit. Premium/Fabric capacities rely on OneLake/CU consumption, effectively having no hard storage cap per workspace (charges apply).",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 84,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure a notebook runs with High Concurrency. What should you configure?",
    "options": [
      { "id": "a", "text": "Workspace Settings > Spark" },
      { "id": "b", "text": "Notebook Settings > Session" },
      { "id": "c", "text": "Capacity Settings" },
      { "id": "d", "text": "Lakehouse Settings" }
    ],
    "correctIds": ["b"],
    "explanation": "High Concurrency (session tags) is configured in the Notebook session settings.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 85,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to promote a dataset to be the authoritative source for the organization. What endorsement level should you use?",
    "options": [
      { "id": "a", "text": "Promoted" },
      { "id": "b", "text": "Certified" },
      { "id": "c", "text": "Validated" },
      { "id": "d", "text": "Approved" }
    ],
    "correctIds": ["b"],
    "explanation": "Certification implies that the dataset meets the organization's quality standards and is authoritative. Promotion is for peer sharing.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 86,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two languages can you use to write a stored procedure in the Fabric Warehouse?",
    "options": [
      { "id": "a", "text": "Python" },
      { "id": "b", "text": "T-SQL" },
      { "id": "c", "text": "Scala" },
      { "id": "d", "text": "R" }
    ],
    "correctIds": ["b"],
    "explanation": "Fabric Warehouse (SQL) supports T-SQL stored procedures.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 87,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to check the lineage of a dashboard to see which lakehouse it uses. What view should you use?",
    "options": [
      { "id": "a", "text": "List view" },
      { "id": "b", "text": "Lineage view" },
      { "id": "c", "text": "Map view" },
      { "id": "d", "text": "Graph view" }
    ],
    "correctIds": ["b"],
    "explanation": "Lineage view in the workspace visually displays the dependencies between items (Dashboard -> Report -> Semantic Model -> Lakehouse).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 88,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a Delta table. You need to return the state of the table as of yesterday. Which feature should you use?",
    "options": [
      { "id": "a", "text": "Time Travel" },
      { "id": "b", "text": "Cloning" },
      { "id": "c", "text": "Snapshots" },
      { "id": "d", "text": "Backups" }
    ],
    "correctIds": ["a"],
    "explanation": "Delta Lake Time Travel allows querying older versions of the table using 'TIMESTAMP AS OF' syntax.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 89,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to identify query performance bottlenecks in a DAX query. Which tool provides the most detailed breakdown of Storage Engine vs Formula Engine?",
    "options": [
      { "id": "a", "text": "DAX Studio" },
      { "id": "b", "text": "Power BI Desktop Performance Analyzer" },
      { "id": "c", "text": "SQL Profiler" },
      { "id": "d", "text": "VertiPaq Analyzer" }
    ],
    "correctIds": ["a"],
    "explanation": "DAX Studio Server Timings feature provides a detailed split between SE (Storage Engine) and FE (Formula Engine) duration and queries.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 90,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a visual that is slow. Performance Analyzer shows 'DAX Query' taking the most time. What should you optimize?",
    "options": [
      { "id": "a", "text": "The memory column storage" },
      { "id": "b", "text": "The measure logic" },
      { "id": "c", "text": "The visual rendering" },
      { "id": "d", "text": "The network connection" }
    ],
    "correctIds": ["b"],
    "explanation": "If 'DAX Query' is the bottleneck, the measure's calculation logic or the model structure needs optimization.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 91,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a default dataset for a workspace that connects to multiple lakehouses. What feature facilitates this?",
    "options": [
      { "id": "a", "text": "Direct Lake" },
      { "id": "b", "text": "Composite Models" },
      { "id": "c", "text": "Cross-database queries" },
      { "id": "d", "text": "OneLake Data Hub" }
    ],
    "correctIds": ["a"],
    "explanation": "While Composite Models allow mixing, Direct Lake is built on top of the Lakehouse. For multiple lakehouses, you often use shortcuts in a central lakehouse or a custom Direct Lake model.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 92,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a Spark job that fails with 'Out of Memory'. Which configuration might help?",
    "options": [
      { "id": "a", "text": "Increase spark.executor.memory" },
      { "id": "b", "text": "Decrease spark.driver.cores" },
      { "id": "c", "text": "Use a smaller node size" },
      { "id": "d", "text": "Disable broadcast variables" }
    ],
    "correctIds": ["a"],
    "explanation": "Increasing executor memory gives more RAM to the tasks processing the data.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 93,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You use T-SQL to load data into a warehouse. Which two commands can you use?",
    "options": [
      { "id": "a", "text": "COPY INTO" },
      { "id": "b", "text": "INSERT INTO ... SELECT" },
      { "id": "c", "text": "BULK INSERT" },
      { "id": "d", "text": "OPENROWSET" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "COPY INTO is the preferred high-performance loading command. INSERT INTO ... SELECT is also valid for internal movement.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 94,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a test environment that mirrors production data. You want to avoid duplicating the storage costs. What should you use?",
    "options": [
      { "id": "a", "text": "Table Cloning" },
      { "id": "b", "text": "Copy Activity" },
      { "id": "c", "text": "Dataflow" },
      { "id": "d", "text": "Shortcuts" }
    ],
    "correctIds": ["a"],
    "explanation": "Zero-copy clones (Table Cloning) allow creating a replica that references the same files, incurring no extra storage cost initially.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 95,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to monitor the refresh history of a Gen2 Dataflow. Where should you look?",
    "options": [
      { "id": "a", "text": "Settings > Refresh History" },
      { "id": "b", "text": "Monitoring Hub" },
      { "id": "c", "text": "Lineage View" },
      { "id": "d", "text": "Both A and B" }
    ],
    "correctIds": ["d"],
    "explanation": "You can see it in the Dataflow settings or in the centralized Monitoring Hub.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 96,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are debugging a pipeline. You want to see the detailed input and output JSON of a specific activity. What do you click?",
    "options": [
      { "id": "a", "text": "The spectacles icon (Output) / Arrow icon (Input)" },
      { "id": "b", "text": "The activity name" },
      { "id": "c", "text": "The pipeline run ID" },
      { "id": "d", "text": "The 'Edit' button" }
    ],
    "correctIds": ["a"],
    "explanation": "In the monitoring view, the input and output icons on each activity row provide the JSON payloads.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 97,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to apply a sensitivity label to all new data in a specific workspace automatically. What should you use?",
    "options": [
      { "id": "a", "text": "A label policy in Purview" },
      { "id": "b", "text": "Workspace settings > Default label" },
      { "id": "c", "text": "DLP policy" },
      { "id": "d", "text": "Sensitivity button in Power BI Desktop" }
    ],
    "correctIds": ["a"],
    "explanation": "Label policies in Microsoft Purview Information Protection can mandate default labels for new content.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 98,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "Semantic Model RLS: 1) To define RLS roles, use: [option]. 2) To test RLS roles, use: [option].",
    "options": [
      { "id": "a", "text": "1) Power BI Desktop / Service" },
      { "id": "b", "text": "1) SQL Endpoint" },
      { "id": "c", "text": "2) View as roles" },
      { "id": "d", "text": "2) Analyze in Excel" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "You define RLS in Desktop or Service. You validate it using the 'View as roles' feature.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 99,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure that a KQL Queryset is portable and can be version controlled. What should you do?",
    "options": [
      { "id": "a", "text": "Save as .kql file" },
      { "id": "b", "text": "Connect workspace to Git" },
      { "id": "c", "text": "Copy paste to Notepad" },
      { "id": "d", "text": "Export to CSV" }
    ],
    "correctIds": ["b"],
    "explanation": "Connecting the workspace to Git allows KQL querysets (and other items) to be committed and versioned.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 100,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are creating a report for accessibility. You need to ensure screen readers read visual data in a logical order. What should you configure?",
    "options": [
      { "id": "a", "text": "Tab order" },
      { "id": "b", "text": "Z-order" },
      { "id": "c", "text": "Layer order" },
      { "id": "d", "text": "Bookmark order" }
    ],
    "correctIds": ["a"],
    "explanation": "The 'Tab order' in the Selection pane determines the sequence in which accessibility tools navigate the visuals.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 101,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to secure the rows in a Lakehouse table based on the user's role. You plan to use the SQL Endpoint. What should you Create?",
    "options": [
      { "id": "a", "text": "A security policy" },
      { "id": "b", "text": "A stored procedure" },
      { "id": "c", "text": "A Table-Valued Function (TVF)" },
      { "id": "d", "text": "A view" }
    ],
    "correctIds": ["c"],
    "explanation": "Inline Table-Valued Functions (TVFs) are often used in SQL to encapsulate security logic (RLS predicate) that can be applied to tables.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 102,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a large CSV file (10 GB) in the Files section. You need to query it efficiently using T-SQL. What should you do first?",
    "options": [
      { "id": "a", "text": "Create a shortcut." },
      { "id": "b", "text": "Load it to a Delta table." },
      { "id": "c", "text": "Query it directly using OPENROWSET." },
      { "id": "d", "text": "Split the file." }
    ],
    "correctIds": ["b"],
    "explanation": "Loading to Delta Format (Parquet) provides much better performance for large datasets compared to querying raw CSV, thanks to compression and statistics.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 103,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to implement a Slowly Changing Dimension (SCD) Type 2 in a Dataflow Gen2. Which transformation should you use?",
    "options": [
      { "id": "a", "text": "Merge queries" },
      { "id": "b", "text": "Add column from examples" },
      { "id": "c", "text": "Group by" },
      { "id": "d", "text": "Pivot column" }
    ],
    "correctIds": ["a"],
    "explanation": "To implement SCD Type 2, you typically merge the incoming data with the existing dimension table to identify changes and new records.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 104,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to reduce the refresh time of a semantic model. Which two actions in Power Query Online can help limit the data loaded?",
    "options": [
      { "id": "a", "text": "Remove columns" },
      { "id": "b", "text": "Filter rows" },
      { "id": "c", "text": "Change column types" },
      { "id": "d", "text": "Rename columns" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "Removing unused columns and filtering rows early in the query reduces the volume of data transferred and processed.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 105,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are managing a capacity. You need to smooth out the compute usage spikes to avoid throttling. What concept does Fabric use?",
    "options": [
      { "id": "a", "text": "Autoscale" },
      { "id": "b", "text": "Bursting and Smoothing" },
      { "id": "c", "text": "Load balancing" },
      { "id": "d", "text": "Query folding" }
    ],
    "correctIds": ["b"],
    "explanation": "Fabric capacities allow 'bursting' (using more CPU than purchased for short periods) and then 'smooth' the usage over time (typically 24h for background, less for interactive).",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 106,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to connect to a SQL Server database on-premises from a Dataflow Gen2. What do you need?",
    "options": [
      { "id": "a", "text": "On-premises data gateway" },
      { "id": "b", "text": "VNET Data Gateway" },
      { "id": "c", "text": "VPN Gateway" },
      { "id": "d", "text": "ExpressRoute" }
    ],
    "correctIds": ["a"],
    "explanation": "The On-premises data gateway is required to securely bridge on-premises data sources with the cloud service.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 107,
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Rank the compute performance for a semantic model from fastest to slowest: 1) Large dataset format. 2) Small dataset. 3) DirectQuery.",
    "options": [
      { "id": "a", "text": "1, 2, 3" },
      { "id": "b", "text": "2, 1, 3" },
      { "id": "c", "text": "3, 1, 2" }
    ],
    "correctIds": ["b"],
    "explanation": "In-memory (Import) is fastest. Large datasets can be slightly slower than small ones due to paging, but both are faster than DirectQuery (which relies on source DB).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 108,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a KQL Query that is too slow. It searches for a string in a text column. `where Column has 'text'`. optimize?",
    "options": [
      { "id": "a", "text": "Use `contains` instead of `has`" },
      { "id": "b", "text": "Use `has_cs` (case sensitive)" },
      { "id": "c", "text": "Ensure the column is indexed" },
      { "id": "d", "text": "Use `startswith`" }
    ],
    "correctIds": ["b"],
    "explanation": "`has` is already indexed (term search). `has_cs` can be faster if case sensitivity is acceptable. `contains` is much slower (scan). `has` is generally the best for term search.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 109,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a visual that shows the distribution of sales across countries. Which map visual is best for shading areas?",
    "options": [
      { "id": "a", "text": "Bubble Map" },
      { "id": "b", "text": "Filled Map (Choropleth)" },
      { "id": "c", "text": "Shape Map" },
      { "id": "d", "text": "Azure Map" }
    ],
    "correctIds": ["b"],
    "explanation": "Filled Maps (Choropleth) are designed to shade geographic areas (countries, states) based on a value.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 110,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a large table. You need to create a relationship to another table, but the key column contains many blank values. What should you do?",
    "options": [
      { "id": "a", "text": "Filter out the blanks in Power Query." },
      { "id": "b", "text": "Replace blanks with a default value (e.g., -1)." },
      { "id": "c", "text": "Use the 'Assume Referential Integrity' setting." },
      { "id": "d", "text": "Create a many-to-many relationship." }
    ],
    "correctIds": ["b"],
    "explanation": "Replacing blanks with a specific key (like -1) that exists in the Dimension ('Unknown') ensures data integrity and proper handling in the model, rather than implicit blank behavior.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 111,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to export a Power BI report to PDF programmatically. Which API should you use?",
    "options": [
      { "id": "a", "text": "Reports - Export To File" },
      { "id": "b", "text": "Reports - Get Report" },
      { "id": "c", "text": "Dashboards - Get Dashboard" },
      { "id": "d", "text": "Capacities - Get Capacities" }
    ],
    "correctIds": ["a"],
    "explanation": "The 'Export To File' API allows exporting reports to PDF, PPTX, and PNG.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 112,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to share a dataset across different workspaces. Which two requirements must be met?",
    "options": [
      { "id": "a", "text": "The user must have Build permission on the dataset." },
      { "id": "b", "text": "The dataset must be in a Premium workspace." },
      { "id": "c", "text": "The workspaces must be in the same capacity." },
      { "id": "d", "text": "The 'Use datasets across workspaces' tenant setting must be enabled." }
    ],
    "correctIds": ["a", "d"],
    "explanation": "Sharing datasets (shared datasets) requires Build permission and the tenant setting enabled.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 113,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are writing a DAX query. You need to retrieve a column from a related table that does not have a direct active relationship, but has an inactive one. Function?",
    "options": [
      { "id": "a", "text": "RELATED" },
      { "id": "b", "text": "LOOKUPVALUE" },
      { "id": "c", "text": "USERELATIONSHIP" },
      { "id": "d", "text": "TREATAS" }
    ],
    "correctIds": ["c"],
    "explanation": "USERELATIONSHIP is used inside CALCULATE to activate an specific inactive relationship for that calculation.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 114,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure that your pipeline handles schema drift in the source files (CSV). Columns may be added or removed. What Data Flow activity should you use?",
    "options": [
      { "id": "a", "text": "Mapping Data Flow with 'Allow Schema Drift' enabled." },
      { "id": "b", "text": "Copy Activity with Explicit Mapping." },
      { "id": "c", "text": "Stored Procedure." },
      { "id": "d", "text": "Lookup Activity." }
    ],
    "correctIds": ["a"],
    "explanation": "Mapping Data Flows (in ADF/Synapse/Fabric) support schema drift to dynamically handle changing columns.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 115,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You plan to use a custom font in a Power BI report. What is the limit?",
    "options": [
      { "id": "a", "text": "You can only use default fonts." },
      { "id": "b", "text": "The font must be installed on the user's machine to be visible." },
      { "id": "c", "text": "Fonts are embedded in the PBIX." },
      { "id": "d", "text": "You can import any web font." }
    ],
    "correctIds": ["b"],
    "explanation": "PBI does not embed fonts. If a custom font is used, it must be present on the viewing device, otherwise it falls back to a default.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 116,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to identify who deleted a workspace. What should you use?",
    "options": [
      { "id": "a", "text": "The Microsoft 365 Audit Log" },
      { "id": "b", "text": "The Fabric Capacity Metrics App" },
      { "id": "c", "text": "The Workspace Lineage View" },
      { "id": "d", "text": "Azure Monitor" }
    ],
    "correctIds": ["a"],
    "explanation": "The M365 Audit Log (Purview Audit) tracks administrative activities like creating or deleting workspaces.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 117,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You are designing an aggregation table. Which two storage modes does the aggregation table usually use?",
    "options": [
      { "id": "a", "text": "Import" },
      { "id": "b", "text": "DirectQuery" },
      { "id": "c", "text": "Dual" },
      { "id": "d", "text": "Live Connection" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "Aggregations are most effective when Import mode (for speed) is used for the summary table. Dual mode is used for dimension tables so they can verify both Import agg and DirectQuery detail.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 118,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to execute a notebook on a schedule, but only if a file exists in the Lakehouse. What should you combine in the pipeline?",
    "options": [
      { "id": "a", "text": "Get Metadata + If Condition + Notebook" },
      { "id": "b", "text": "Notebook activity only" },
      { "id": "c", "text": "Copy Activity" },
      { "id": "d", "text": "Validation Activity" }
    ],
    "correctIds": ["a"],
    "explanation": "Get Metadata checks for file existence. The If Condition checks the output boolean, and finding True, triggers the Notebook.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 119,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model. You need to update the connection string for the data source programmatically. What should you use?",
    "options": [
      { "id": "a", "text": "Power BI REST API (Update Parameters)" },
      { "id": "b", "text": "Power BI Desktop" },
      { "id": "c", "text": "Power Automate" },
      { "id": "d", "text": "XMLA Endpoint (TMSL/TOM)" }
    ],
    "correctIds": ["a"],
    "explanation": "The 'Update Parameters in Group' API (or Update Datasources) allows changing connection details.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 120,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "Select the correct visualization: 1) To show correlation between two variables: [option]. 2) To show composition of a whole: [option].",
    "options": [
      { "id": "a", "text": "1) Scatter Chart" },
      { "id": "b", "text": "1) Line Chart" },
      { "id": "c", "text": "2) Pie/Donut Chart" },
      { "id": "d", "text": "2) Card" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "Scatter charts are standard for correlation. Pie/Donut/Treemap are for part-to-whole.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 121,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to prevent users from exporting data from a specific visual. What visual setting should you change?",
    "options": [
      { "id": "a", "text": "Header icons > Icons > Export data: Off" },
      { "id": "b", "text": "Tooltip: Off" },
      { "id": "c", "text": "Visual Interaction: None" },
      { "id": "d", "text": "Drill down: Off" }
    ],
    "correctIds": ["a"],
    "explanation": "Disabling the 'Export data' icon in the visual header settings prevents users from exporting.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 122,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to connect to the XMLA endpoint of a workspace. Which URL format is correct?",
    "options": [
      { "id": "a", "text": "powerbi://api.powerbi.com/v1.0/myorg/[workspace_name]" },
      { "id": "b", "text": "https://app.powerbi.com/groups/[id]" },
      { "id": "c", "text": "wss://powerbi.com..." },
      { "id": "d", "text": "sql://server_name" }
    ],
    "correctIds": ["a"],
    "explanation": "The connection string for XMLA starts with 'powerbi://'.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 123,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You run `vacuume` on a delta table. What is the main purpose?",
    "options": [
      { "id": "a", "text": "To delete files no longer referenced by the transaction log." },
      { "id": "b", "text": "To compact small files." },
      { "id": "c", "text": "To compute statistics." },
      { "id": "d", "text": "To sort the data." }
    ],
    "correctIds": ["a"],
    "explanation": "VACUUM removes old data files that are not in the latest state (beyond retention period), freeing up storage.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 124,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to deploy a report to Test and Prod. You want to ensure the Test report connects to the Test DB and Prod to Prod DB. What should you use?",
    "options": [
      { "id": "a", "text": "Deployment Pipeline Rules" },
      { "id": "b", "text": "Parameters in the dataset" },
      { "id": "c", "text": "Manual change" },
      { "id": "d", "text": "Dataflows" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "You define Parameters for connection details, and then use Deployment Pipeline Rules to assign specific parameter values for each stage (Test vs Prod).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 125,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You check the evaluation query of a DirectQuery model. You see `SELECT ... WHERE 1=0`. What is this?",
    "options": [
      { "id": "a", "text": "A test connection query." },
      { "id": "b", "text": "An error." },
      { "id": "c", "text": "A schema check." },
      { "id": "d", "text": "A permissions check." }
    ],
    "correctIds": ["c"],
    "explanation": "Power BI sends a query with `WHERE 1=0` to valid the schema (column names, types) without retrieving any data rows.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 126,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to use a notebook to visualize data distribution. Which library is built-in and optimized for simple charts?",
    "options": [
      { "id": "a", "text": "matplotlib" },
      { "id": "b", "text": "bokeh" },
      { "id": "c", "text": "Fabric chart widget" },
      { "id": "d", "text": "display() function (Chart View)" }
    ],
    "correctIds": ["d"],
    "explanation": "The `display(df)` command provides a built-in UI to switch to Chart View for quick profiling.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 127,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are creating a measure. You want to ignore all filters on the 'Date' table but keep filters on 'Region'. Function?",
    "options": [
      { "id": "a", "text": "ALL(Date)" },
      { "id": "b", "text": "ALLEXCEPT(Sales, Region)" },
      { "id": "c", "text": "REMOVEFILTERS(Date)" },
      { "id": "d", "text": "Answer A or C" }
    ],
    "correctIds": ["d"],
    "explanation": "Both ALL(Table) and REMOVEFILTERS(Table) used as Calculate modifiers will clear filters from that table.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 128,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to enable Q&A for your dataset. What must you do?",
    "options": [
      { "id": "a", "text": "Create synonyms for columns." },
      { "id": "b", "text": "Enable the Q&A setting in dataset settings." },
      { "id": "c", "text": "Add a Q&A visual." },
      { "id": "d", "text": "All of the above improve the experience." }
    ],
    "correctIds": ["d"],
    "explanation": "While Q&A works by default, synonyms are crucial. Enabling settings explicitly and testing with the visual completes the implementation.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 129,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a Python script in Power Query. It fails on the Service. Why?",
    "options": [
      { "id": "a", "text": "Python is not supported in Service for standard workspaces." },
      { "id": "b", "text": "You need a Personal Gateway." },
      { "id": "c", "text": "The script is too long." },
      { "id": "d", "text": "Service only supports R." }
    ],
    "correctIds": ["b"],
    "explanation": "Python (and R) scripts in Power Query require a Personal Gateway to execute when refreshed in the Service (unlike Python visuals).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 130,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two roles can create a shortcut in a Lakehouse?",
    "options": [
      { "id": "a", "text": "Admin" },
      { "id": "b", "text": "Member" },
      { "id": "c", "text": "Contributor" },
      { "id": "d", "text": "Viewer" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Write permissions are needed. Admin, Member, and Contributor all have write access to items.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 131,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "Evaluate: 1) OneLake shortcuts can point to Amazon S3. 2) OneLake shortcuts copy the data to OneLake.",
    "options": [
      { "id": "a", "text": "1) True" },
      { "id": "b", "text": "1) False" },
      { "id": "c", "text": "2) True" },
      { "id": "d", "text": "2) False" }
    ],
    "correctIds": ["a", "d"],
    "explanation": "1) True, S3 is a supported source. 2) False, shortcuts are references, they do not duplicate (copy) data.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 132,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a paginated report. Which tool should you use?",
    "options": [
      { "id": "a", "text": "Power BI Desktop" },
      { "id": "b", "text": "Power BI Report Builder" },
      { "id": "c", "text": "Excel" },
      { "id": "d", "text": "Notepad" }
    ],
    "correctIds": ["b"],
    "explanation": "Power BI Report Builder is the specialized tool for creating RDL (paginated) reports.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 133,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are creating a star schema. You have a table 'Sales' and 'Budget'. They both share 'Date' and 'Product'. How do you model this?",
    "options": [
      { "id": "a", "text": "Merge Sales and Budget." },
      { "id": "b", "text": "Link Date and Product to both Sales and Budget (Fact tables)." },
      { "id": "c", "text": "Link Sales to Budget directly." },
      { "id": "d", "text": "Create a bridge table." }
    ],
    "correctIds": ["b"],
    "explanation": "This is a classic multi-fact star schema. Shared dimensions (Conformed Dimensions) should relate to both fact tables.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 134,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to perform a fuzzy match merge in Power Query. What do you need to configure?",
    "options": [
      { "id": "a", "text": "Similarity Threshold" },
      { "id": "b", "text": "Exact Match" },
      { "id": "c", "text": "Case Sensitivity" },
      { "id": "d", "text": "Join Kind: Inner" }
    ],
    "correctIds": ["a"],
    "explanation": "The similarity threshold (0.00 to 1.00) determines how close strings must be to be considered a match.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 135,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure a column 'SortOrder' is used to sort 'MonthName'. What property do you set?",
    "options": [
      { "id": "a", "text": "Sort by Column" },
      { "id": "b", "text": "Group by Column" },
      { "id": "c", "text": "Data Category" },
      { "id": "d", "text": "Format String" }
    ],
    "correctIds": ["a"],
    "explanation": "The 'Sort by Column' feature allows defining a custom sort order (e.g., chronological) for a text column.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 136,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to get the user's culture (language) in a report to localize content. Function?",
    "options": [
      { "id": "a", "text": "USERCULTURE()" },
      { "id": "b", "text": "USERNAME()" },
      { "id": "c", "text": "FORMAT()" },
      { "id": "d", "text": "CULTURE()" }
    ],
    "correctIds": ["a"],
    "explanation": "USERCULTURE() returns the locale of the user's browser/interface (e.g., 'en-US').",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 137,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are optimizing a model. You see a column 'TransactionID' using a lot of memory. It is not used in any visual. What should you do?",
    "options": [
      { "id": "a", "text": "Hide the column." },
      { "id": "b", "text": "Delete the column." },
      { "id": "c", "text": "Change type to Text." },
      { "id": "d", "text": "Move it to a folder." }
    ],
    "correctIds": ["b"],
    "explanation": "Hiding does not save memory. Deleting unused columns is the best optimization for Import models.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 138,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a new measure that equals [Total Sales] * 1.1. Where is the best place to create it?",
    "options": [
      { "id": "a", "text": "In the report (implicit)." },
      { "id": "b", "text": "In the semantic model (explicit)." },
      { "id": "c", "text": "In Power Query." },
      { "id": "d", "text": "In the source DB." }
    ],
    "correctIds": ["b"],
    "explanation": "Creating explicit measures in the model promotes reusability, consistency, and maintenance.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 139,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two operations break Query Folding in Power Query?",
    "options": [
      { "id": "a", "text": "Filtering rows" },
      { "id": "b", "text": "Adding an Index Column" },
      { "id": "c", "text": "Changing Data Type (sometimes)" },
      { "id": "d", "text": "Selection of columns" }
    ],
    "correctIds": ["b", "c"],
    "explanation": "Adding an Index Column requires loading data into memory (usually). Changing data types can sometimes break folding depending on the source compatibility.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 140,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to enhance the Q&A experience. Which setup allows defining terms like 'awesome products' = 'Ratings > 4.5'?",
    "options": [
      { "id": "a", "text": "Teach Q&A" },
      { "id": "b", "text": "Synonyms" },
      { "id": "c", "text": "Relationships" },
      { "id": "d", "text": "Linguistic Schema" }
    ],
    "correctIds": ["a"],
    "explanation": "'Teach Q&A' allows you to define specific business terms or logic (phrasings) for the engine.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 141,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a report with many visuals. It renders slowly. You want to see which visual is the slowest. Tool?",
    "options": [
      { "id": "a", "text": "Performance Analyzer" },
      { "id": "b", "text": "Selection Pane" },
      { "id": "c", "text": "Bookmarks" },
      { "id": "d", "text": "Sync Slicers" }
    ],
    "correctIds": ["a"],
    "explanation": "Performance Analyzer records the time taken for each visual to query, render, and other processing.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 142,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a dynamic title for a visual based on slicer selection. What should you use?",
    "options": [
      { "id": "a", "text": "Conditional Formatting using a Measure" },
      { "id": "b", "text": "A text box" },
      { "id": "c", "text": "It is not possible." },
      { "id": "d", "text": "A Card visual grouped." }
    ],
    "correctIds": ["a"],
    "explanation": "You can set the Title text property to use 'fx' (Conditional Formatting) and select a text measure that constructs the dynamic string.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 143,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are managing a data mesh architecture. You have domains. What can you assign to a domain?",
    "options": [
      { "id": "a", "text": "Workspaces" },
      { "id": "b", "text": "Individual Reports" },
      { "id": "c", "text": "Users" },
      { "id": "d", "text": "Capacities" }
    ],
    "correctIds": ["a"],
    "explanation": "In Fabric, Domains are logical groupings of Workspaces.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 144,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to provide a custom navigation experience for a collection of reports. What should you create?",
    "options": [
      { "id": "a", "text": "Power BI App" },
      { "id": "b", "text": "Dashboard" },
      { "id": "c", "text": "Workspace" },
      { "id": "d", "text": "Folder" }
    ],
    "correctIds": ["a"],
    "explanation": "Power BI Apps allow bundling related content (Reports, Dashboards) and designing a custom navigation menu.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 145,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure that data in a column is unique. In Power Query?",
    "options": [
      { "id": "a", "text": "Remove Duplicates" },
      { "id": "b", "text": "Keep Duplicates" },
      { "id": "c", "text": "Group By" },
      { "id": "d", "text": "Transpose" }
    ],
    "correctIds": ["a"],
    "explanation": "Remove Duplicates retains only the first instance of each value in the selected column(s).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 146,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a hierarchy 'Product Category' > 'Subcategory'. You want to drill down in a matrix. What icon do you click?",
    "options": [
      { "id": "a", "text": "Single Down Arrow (Drill Mode)" },
      { "id": "b", "text": "Double Down Arrow (Go to next level)" },
      { "id": "c", "text": "Forked Arrow (Expand down)" },
      { "id": "d", "text": "Focus Mode" }
    ],
    "correctIds": ["c"],
    "explanation": "Forked arrow (Expand all down one level) is typically used to see the parent AND child in the hierarchy (e.g., Category and Subcategory rows).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 147,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a KPI visual. What three fields do you need?",
    "options": [
      { "id": "a", "text": "Value, Trend Axis, Target" },
      { "id": "b", "text": "X, Y, Legend" },
      { "id": "c", "text": "Category, Value, Tooltips" },
      { "id": "d", "text": "Latitude, Longitude, Size" }
    ],
    "correctIds": ["a"],
    "explanation": "A KPI visual requires an Indicator (Value), a Trend Axis (Date), and optionally a Target Goal.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 148,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You want your report to look good on mobile. What should you do?",
    "options": [
      { "id": "a", "text": "Create a Mobile Layout view." },
      { "id": "b", "text": "Make pages smaller." },
      { "id": "c", "text": "Use only Cards." },
      { "id": "d", "text": "Nothing, it is automatic." }
    ],
    "correctIds": ["a"],
    "explanation": "Power BI Desktop allows you to design a specific Mobile Layout for portrait orientation.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 149,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a table with 100 columns. You only need 10. Best practice?",
    "options": [
      { "id": "a", "text": "Remove other columns in Power Query." },
      { "id": "b", "text": "Hide them in Report View." },
      { "id": "c", "text": "Delete them from source." },
      { "id": "d", "text": "Ignore them." }
    ],
    "correctIds": ["a"],
    "explanation": "Removing them in PQ ensures they are not loaded into the model memory.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 150,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to parameterize the server name in your deployment. What is the feature called?",
    "options": [
      { "id": "a", "text": "Query Parameters" },
      { "id": "b", "text": "Field Parameters" },
      { "id": "c", "text": "What-if Parameters" },
      { "id": "d", "text": "Bookmarks" }
    ],
    "correctIds": ["a"],
    "explanation": "Query Parameters allow you to define variables (like ServerName) that can be changed per environment (Dev/Test/Prod).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 151,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are monitoring a warehouse in Fabric. You notice that statistics are outdated. What command updates them?",
    "options": [
      { "id": "a", "text": "UPDATE STATISTICS" },
      { "id": "b", "text": "CREATE STATISTICS" },
      { "id": "c", "text": "DBCC CHECKDB" },
      { "id": "d", "text": "ALTER INDEX REBUILD" }
    ],
    "correctIds": ["a"],
    "explanation": "UPDATE STATISTICS is the T-SQL command to refresh the distribution statistics for query optimization.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 152,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model. You need to ensure that 'Unit Price' is never summarized (summed). What property?",
    "options": [
      { "id": "a", "text": "Summarize By (Default Summarization): None" },
      { "id": "b", "text": "Data Type: Text" },
      { "id": "c", "text": "Is Hidden" },
      { "id": "d", "text": "Format: General" }
    ],
    "correctIds": ["a"],
    "explanation": "Setting 'Default Summarization' to 'None' prevents Power BI from automatically summing the column when added to a visual.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 153,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a DAX measure that calculates the sales for the *previous* year. Function?",
    "options": [
      { "id": "a", "text": "SAMEPERIODLASTYEAR()" },
      { "id": "b", "text": "PREVIOUSDAY()" },
      { "id": "c", "text": "DATESYTD()" },
      { "id": "d", "text": "TOTALYTD()" }
    ],
    "correctIds": ["a"],
    "explanation": "SAMEPERIODLASTYEAR(Dates[Date]) returns the equivalent set of dates shifted back one year.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 154,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a report using Import mode. The data is 2 GB. You need to reduce the size. You have a 'TransactionID' (GUID) column. What to do?",
    "options": [
      { "id": "a", "text": "Remove the column." },
      { "id": "b", "text": "Hash the column." },
      { "id": "c", "text": "Split the column." },
      { "id": "d", "text": "Change encoding to RLE." }
    ],
    "correctIds": ["a"],
    "explanation": "High cardinality columns like GUIDs take up massive space (dictionary size). If not needed for exact reporting, removing them saves significant memory.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 155,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to audit who viewed a specific report in the last 30 days. Report usage metrics are not enough. Tool?",
    "options": [
      { "id": "a", "text": "Microsoft 365 Audit Logs" },
      { "id": "b", "text": "Azure Activity Log" },
      { "id": "c", "text": "Power BI Desktop Diagnostics" },
      { "id": "d", "text": "Gateway Logs" }
    ],
    "correctIds": ["a"],
    "explanation": "The 'ViewReport' activity is logged in the M365 (Unified) Audit Logs and can be searched for specific users and items.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 156,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to connect to a data source that requires OAuth2 authentication. You are using a Dataflow. Where is the credential stored?",
    "options": [
      { "id": "a", "text": "In the connection (Data Source) definition" },
      { "id": "b", "text": "In the script code" },
      { "id": "c", "text": "In the gateway" },
      { "id": "d", "text": "It is not stored." }
    ],
    "correctIds": ["a"],
    "explanation": "Credentials are managed securely as part of the Connection object associated with the Dataflow/Dataset, not in the code.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 157,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a DirectQuery model. You want to aggregation some data to improve performance but keep detail available. What feature?",
    "options": [
      { "id": "a", "text": "User-defined Aggregations" },
      { "id": "b", "text": "Automatic Aggregations" },
      { "id": "c", "text": "Import Mode" },
      { "id": "d", "text": "Both A and B" }
    ],
    "correctIds": ["d"],
    "explanation": "Both automatic (machine learning driven) and user-defined aggregations allow mixing Import (agg) and DirectQuery (detail) for performance (Composite models).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 158,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to investigate a refresh failure. The error message is 'Memory limit exceeded'. What is the likely cause?",
    "options": [
      { "id": "a", "text": "The dataset is larger than the capacity limit." },
      { "id": "b", "text": "The gateway is offline." },
      { "id": "c", "text": "The source is down." },
      { "id": "d", "text": "The timeout was reached." }
    ],
    "correctIds": ["a"],
    "explanation": "If the refresh process requires more RAM than the SKU allows (e.g., P1/F64 has limits), it will fail with OOM errors.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 159,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You use `deltaTable` in PySpark. You want to merge incoming data (upsert). Command?",
    "options": [
      { "id": "a", "text": "deltaTable.alias('t').merge(...).whenMatchedUpdate().whenNotMatchedInsert().execute()" },
      { "id": "b", "text": "df.write.mode('overwrite').save(...)" },
      { "id": "c", "text": "deltaTable.update(...)" },
      { "id": "d", "text": "df.upsert(...)" }
    ],
    "correctIds": ["a"],
    "explanation": "The standard Delta Lake merge syntax involves defining the target/source aliases, the join condition, and the matched/not-matched actions.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 160,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to monitor the duration of each activity in a pipeline run. Monitoring Hub view?",
    "options": [
      { "id": "a", "text": "Gantt view" },
      { "id": "b", "text": "List view" },
      { "id": "c", "text": "Matrix view" },
      { "id": "d", "text": "Card view" }
    ],
    "correctIds": ["a"],
    "explanation": "The default execution view in pipelines is a Gantt chart that visually displays the start, duration, and dependencies of activities.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 161,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are creating a semantic model from a Warehouse. What mode is used by default?",
    "options": [
      { "id": "a", "text": "Direct Lake" },
      { "id": "b", "text": "DirectQuery" },
      { "id": "c", "text": "Import" },
      { "id": "d", "text": "Live Connection" }
    ],
    "correctIds": ["b"],
    "explanation": "The default semantic model for a Warehouse uses DirectQuery. Direct Lake is default for Lakehouse (Data Engineering).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 162,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a visual that shows a running total of sales over time. Measure?",
    "options": [
      { "id": "a", "text": "CALCULATE(SUM(Sales), DATESYTD(Date))" },
      { "id": "b", "text": "CALCULATE(SUM(Sales), ALL(Date))" },
      { "id": "c", "text": "SUM(Sales)" },
      { "id": "d", "text": "AVERAGE(Sales)" }
    ],
    "correctIds": ["a"],
    "explanation": "DATESYTD creates a running total that resets at the beginning of each year (Year-To-Date).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 163,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You have a sensitive report. You need to prevent users from printing or exporting. Which two features help?",
    "options": [
      { "id": "a", "text": "Sensitivity Labels (Protection)" },
      { "id": "b", "text": "Export Data setting in Admin Portal" },
      { "id": "c", "text": "RLS" },
      { "id": "d", "text": "App Audiences" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "Sensitivity Labels (MIP) can enforce encryption and rights (no print/export). Admin tenant settings can disable Export Data globally or per group.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 164,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to enable the 'XMLA Endpoint' for a capacity. Where do you configure this?",
    "options": [
      { "id": "a", "text": "Capacity Settings in Admin Portal" },
      { "id": "b", "text": "Workspace Settings" },
      { "id": "c", "text": "Dataset Settings" },
      { "id": "d", "text": "Power BI Desktop Options" }
    ],
    "correctIds": ["a"],
    "explanation": "XMLA Read/Write access is a capacity-level setting.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 165,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a Spark dataframe. You want to save it as a table 'MyTable' in the Lakehouse. Code?",
    "options": [
      { "id": "a", "text": "df.write.saveAsTable('MyTable')" },
      { "id": "b", "text": "df.save('MyTable')" },
      { "id": "c", "text": "df.write.csv('MyTable')" },
      { "id": "d", "text": "CREATE TABLE MyTable ..." }
    ],
    "correctIds": ["a"],
    "explanation": "saveAsTable() writes the dataframe as a managed table in the Metastore (Lakehouse).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 166,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to optimize a T-SQL query that joins two large tables. You verify that column statistics are up to date. What else should you check?",
    "options": [
      { "id": "a", "text": "Distribution of data (Skew)" },
      { "id": "b", "text": "Color of the table" },
      { "id": "c", "text": "File format" },
      { "id": "d", "text": "Network latency" }
    ],
    "correctIds": ["a"],
    "explanation": "Data skew (uneven distribution) in a distributed system (like Fabric Warehouse) causes some nodes to work much harder than others, slowing down joins.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 167,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to copy data from an on-premises Oracle DB to a Lakehouse. Activity?",
    "options": [
      { "id": "a", "text": "Copy Activity" },
      { "id": "b", "text": "Notebook" },
      { "id": "c", "text": "Dataflow" },
      { "id": "d", "text": "All of the above" }
    ],
    "correctIds": ["d"],
    "explanation": "Copy Activity (pipeline), Notebook (Spark with JDBC), and Dataflow Gen2 (via Gateway) can all ingest data from Oracle.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 168,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to identify empty columns in a Dataflow. View?",
    "options": [
      { "id": "a", "text": "Column Quality" },
      { "id": "b", "text": "Column Distribution" },
      { "id": "c", "text": "Column Profile" },
      { "id": "d", "text": "Advanced Editor" }
    ],
    "correctIds": ["a"],
    "explanation": "Column Quality shows the percentage of Valid, Error, and Empty values in the preview.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 169,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model. You need to enforce that users from 'Germany' only see data where Country='Germany'. What to configure?",
    "options": [
      { "id": "a", "text": "RLS (Row Level Security)" },
      { "id": "b", "text": "Filter query" },
      { "id": "c", "text": "Slicer" },
      { "id": "d", "text": "Separate reports" }
    ],
    "correctIds": ["a"],
    "explanation": "RLS is the security feature for restricting data access (rows) based on user identity.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 170,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are writing a DAX expression to test for BLANK. Function?",
    "options": [
      { "id": "a", "text": "ISBLANK()" },
      { "id": "b", "text": "ISEMPTY()" },
      { "id": "c", "text": "IFBLANK()" },
      { "id": "d", "text": "NULL()" }
    ],
    "correctIds": ["a"],
    "explanation": "ISBLANK() returns TRUE if the value is blank.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 171,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to share a report with external users (guest). What prerequisite is needed?",
    "options": [
      { "id": "a", "text": "Azure B2B invitation" },
      { "id": "b", "text": "VPN" },
      { "id": "c", "text": "They must have a Pro license in your tenant." },
      { "id": "d", "text": "It is not possible." }
    ],
    "correctIds": ["a"],
    "explanation": "External sharing works via Azure AD B2B. The user is invited as a Guest User in your Entra ID.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 172,
    "courseId": "dp-600",
    "lang": "en",
    "type": "hotspot",
    "prompt": "Visual interactions: 1) What icon turns off interaction for a specific visual? 2) What icon filters the visual?",
    "options": [
      { "id": "a", "text": "1) Circle with slash (None)" },
      { "id": "b", "text": "1) Funnel" },
      { "id": "c", "text": "2) Funnel (Filter)" },
      { "id": "d", "text": "2) Pie Chart (Highlight)" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "The 'None' icon prevents the source visual from affecting the target. The 'Filter' icon applies a filter context.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 173,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to calculate the % of Total Sales for each region. Measure?",
    "options": [
      { "id": "a", "text": "DIVIDE(SUM(Sales), CALCULATE(SUM(Sales), ALL(Region)))" },
      { "id": "b", "text": "SUM(Sales) / SUM(Sales)" },
      { "id": "c", "text": "DIVIDE(SUM(Sales), CALCULATE(SUM(Sales), VALUES(Region)))" },
      { "id": "d", "text": "PERCENTILE(Sales)" }
    ],
    "correctIds": ["a"],
    "explanation": "To get the % of total, you divide the current context sales by the sales calculated over ALL regions (removing the region filter).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 174,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a report page with sync slicers. You want the slicer to be invisible on Page 2 but still filter it. What to check?",
    "options": [
      { "id": "a", "text": "Sync checkbox: ON, Visible checkbox: OFF" },
      { "id": "b", "text": "Sync checkbox: OFF, Visible checkbox: ON" },
      { "id": "c", "text": "Lock aspect ratio" },
      { "id": "d", "text": "Hide page" }
    ],
    "correctIds": ["a"],
    "explanation": "In the Sync Slicers pane, checking 'Sync' propagates the selection, while unchecking 'Visible' hides the slicer visual on that page.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 175,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to check if a Power BI Gateway is online. Where?",
    "options": [
      { "id": "a", "text": "Manage Gateways in Admin Portal / Service" },
      { "id": "b", "text": "Power BI Desktop" },
      { "id": "c", "text": "Report Settings" },
      { "id": "d", "text": "My Workspace" }
    ],
    "correctIds": ["a"],
    "explanation": " The 'Manage connections and gateways' page shows the status (Online/Offline) of standard and personal gateways.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 176,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are using git integration. You see a conflict in 'Model.bim'. What happened?",
    "options": [
      { "id": "a", "text": "Two developers modified the same part of the model." },
      { "id": "b", "text": "The file is corrupt." },
      { "id": "c", "text": "Git is down." },
      { "id": "d", "text": "OneLake is full." }
    ],
    "correctIds": ["a"],
    "explanation": "Conflicts occur when changes from two different branches overlap and Git cannot auto-merge them.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 177,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two visuals support the 'Analyze' feature (Explain the increase/decrease)?",
    "options": [
      { "id": "a", "text": "Bar Char" },
      { "id": "b", "text": "Line Chart" },
      { "id": "c", "text": "Table" },
      { "id": "d", "text": "Slicer" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "The 'Analyze' feature (Insights) is typically available on cartesian charts like Bar, Column, and Line charts to explain trends or differences.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 178,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a group of users in Fabric. Where do you do this?",
    "options": [
      { "id": "a", "text": "Microsoft 365 Admin Center (Entra ID)" },
      { "id": "b", "text": "Fabric Admin Portal" },
      { "id": "c", "text": "Workspace Settings" },
      { "id": "d", "text": "Power BI Desktop" }
    ],
    "correctIds": ["a"],
    "explanation": "Security groups and distribution lists are managed in M365/Entra ID, not directly in Fabric (though Fabric uses them).",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 179,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model with 50 measures. You want to organize them into folders. View?",
    "options": [
      { "id": "a", "text": "Model View" },
      { "id": "b", "text": "Report View" },
      { "id": "c", "text": "Data View" },
      { "id": "d", "text": "DAX View" }
    ],
    "correctIds": ["a"],
    "explanation": "Model View allows selecting multiple fields and assigning them to a Display Folder.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 180,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to force a refresh of a report visual in Power BI Desktop. What do you click?",
    "options": [
      { "id": "a", "text": "Refresh button in Home ribbon" },
      { "id": "b", "text": "View > Performance Analyzer > Refresh Visuals" },
      { "id": "c", "text": "Save" },
      { "id": "d", "text": "Publish" }
    ],
    "correctIds": ["b"],
    "explanation": "The 'Refresh' button in the ribbon refreshes the DATA (Import). To refresh just the VISUAL query (e.g. DirectQuery), Performance Analyzer has a button, or you can interact with a slicer.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 181,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to prevent a slicer from filtering a specific visual. Use?",
    "options": [
      { "id": "a", "text": "Edit Interactions" },
      { "id": "b", "text": "Sync Slicers" },
      { "id": "c", "text": "Selection Pane" },
      { "id": "d", "text": "Lock Object" }
    ],
    "correctIds": ["a"],
    "explanation": "Format > Edit Interactions allows controlling which visuals are affected by a slicer (Filter vs None).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 182,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a custom tooltip for a visual. Steps?",
    "options": [
      { "id": "a", "text": "Create a new page > Allow use as tooltip > Assign to visual." },
      { "id": "b", "text": "Write DAX for tooltip." },
      { "id": "c", "text": "Use a text box." },
      { "id": "d", "text": "It is not possible." }
    ],
    "correctIds": ["a"],
    "explanation": "Report page tooltips allow designing a mini-report page that appears when hovering.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 183,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to change the data source of a PBIX file from Dev to Prod SQL Server. Feature?",
    "options": [
      { "id": "a", "text": "Data source settings" },
      { "id": "b", "text": "Options" },
      { "id": "c", "text": "Get Data" },
      { "id": "d", "text": "Security" }
    ],
    "correctIds": ["a"],
    "explanation": "Transform Data > Data source settings allows changing the server/database path for existing connections.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 184,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a hierarchy 'Year > Quarter > Month'. You want to see sales for all months across all years. Expand mode?",
    "options": [
      { "id": "a", "text": "Expand all down one level" },
      { "id": "b", "text": "Go to next level" },
      { "id": "c", "text": "Drill down" },
      { "id": "d", "text": "Focus" }
    ],
    "correctIds": ["b"],
    "explanation": "'Go to next level' (Double Down Arrow) removes the Year context and aggregates by Quarter/Month (e.g. Q1 is sum of 2023 Q1 + 2024 Q1). 'Expand all' keeps the Year (2023 Q1, 2024 Q1).",
    "domain": "Prepare and serve data"
  },
  {
    "id": 185,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You verify a data model. You see 'Auto Date/Time' is creating many hidden tables. Recommendation?",
    "options": [
      { "id": "a", "text": "Disable Auto Date/Time." },
      { "id": "b", "text": "Keep it for convenience." },
      { "id": "c", "text": "Delete the date column." },
      { "id": "d", "text": "Use it for relationships." }
    ],
    "correctIds": ["a"],
    "explanation": "Disabling Auto Date/Time reduces model bloat (hidden local date tables for every date column) and encourages using a central Date dimension.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 186,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a valid relationship between 'Sales' (Many) and 'Target' (Many) on 'Date'. 'Target' is at Month level. 'Sales' is daily. What to do?",
    "options": [
      { "id": "a", "text": "Create a bridge table (Date dimension) or use a column with common grain (Month)." },
      { "id": "b", "text": "Force Many-to-Many." },
      { "id": "c", "text": "Use CROSSFILTER." },
      { "id": "d", "text": "Merge them." }
    ],
    "correctIds": ["a"],
    "explanation": "Best practice is to relate both to a shared Conformed Date Dimension. You might need a 'MonthKey' in Date to relate to Target.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 187,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model. You need to identify which measures are not used in any report. Tool?",
    "options": [
      { "id": "a", "text": "Bravo for Power BI / VertiPaq Analyzer" },
      { "id": "b", "text": "Power BI Desktop" },
      { "id": "c", "text": "Service Settings" },
      { "id": "d", "text": "Power Query" }
    ],
    "correctIds": ["a"],
    "explanation": "External tools like Bravo or Tabular Editor can analyze the model metadata. (Note: Finding usage in *reports* across the service requires the metadata scanner API, but for the local model cleanup, Bravo is common).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 188,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to use a custom R visual. What is a limitation?",
    "options": [
      { "id": "a", "text": "Limited to 150,000 rows (approx)." },
      { "id": "b", "text": "Cannot filter." },
      { "id": "c", "text": "Cannot use tooltips." },
      { "id": "d", "text": "Requires a Premium license." }
    ],
    "correctIds": ["a"],
    "explanation": "R (and Python) visuals have data size limits for the dataframe passed to the script.",
    "domain": "Explore and visualize data"
  },
  {
    "id": 189,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to parameterize a limit row option in Power Query. `Table.FirstN(Source, 100)`. How to make '100' dynamic?",
    "options": [
      { "id": "a", "text": "Create a Decimal parameter and replace 100." },
      { "id": "b", "text": "Use a text parameter." },
      { "id": "c", "text": "Use a function." },
      { "id": "d", "text": "Use a global variable." }
    ],
    "correctIds": ["a"],
    "explanation": "Parameters (Type: Decimal/Number) can be referenced in M code: `Table.FirstN(Source, ParameterName)`.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 190,
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "You need to improve the accessibility of a report. Which two actions help?",
    "options": [
      { "id": "a", "text": "Add Alt Text to visuals." },
      { "id": "b", "text": "Set Tab Order." },
      { "id": "c", "text": "Use low contrast colors." },
      { "id": "d", "text": "Remove titles." }
    ],
    "correctIds": ["a", "b"],
    "explanation": "Alt Text describes visuals for screen readers. Tab Order ensures logical navigation.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 191,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to connect to an external API that uses a key in the header. Power Query function?",
    "options": [
      { "id": "a", "text": "Web.Contents('url', [Headers=[ApiKey='...']])" },
      { "id": "b", "text": "Json.Document()" },
      { "id": "c", "text": "OData.Feed()" },
      { "id": "d", "text": "File.Contents()" }
    ],
    "correctIds": ["a"],
    "explanation": "Web.Contents is the standard function for HTTP requests, allowing custom headers.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 192,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model using DirectQuery to SQL Server. You want to change the frequency of the cache update (15 mins default). Setting?",
    "options": [
      { "id": "a", "text": "Scheduled Cache Refresh (Dashboard setting)" },
      { "id": "b", "text": "Dataset Refresh Schedule" },
      { "id": "c", "text": "Gateway schedule" },
      { "id": "d", "text": "It is real-time." }
    ],
    "correctIds": ["a"],
    "explanation": "For Dashboard tiles based on DirectQuery, you can configure the Scheduled Cache Refresh frequency (e.g. 15 mins to 1 hour).",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 193,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to see the dependencies of a Dataflow Gen2. View?",
    "options": [
      { "id": "a", "text": "Lineage View" },
      { "id": "b", "text": "Impact Analysis" },
      { "id": "c", "text": "Query Dependencies (in PQ editor)" },
      { "id": "d", "text": "Settings" }
    ],
    "correctIds": ["a"],
    "explanation": "Workspace Lineage view shows upstream (sources) and downstream (datasets) dependencies. 'Query Dependencies' inside the editor shows step dependencies.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 194,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a metric in a scorecard. What can you connect it to?",
    "options": [
      { "id": "a", "text": "A value in a report." },
      { "id": "b", "text": "Manual input." },
      { "id": "c", "text": "A sub-metric." },
      { "id": "d", "text": "All of the above." }
    ],
    "correctIds": ["d"],
    "explanation": "Fabric/PBI Metrics (Goals) supports connected data, manual values, and rollups.",
    "domain": "Prepare and serve data"
  },
  {
    "id": 195,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a large DirectQuery model. You want to define aggregations based on usage. Feature?",
    "options": [
      { "id": "a", "text": "Automatic Aggregations" },
      { "id": "b", "text": "Manual Aggregations" },
      { "id": "c", "text": "Composite Models" },
      { "id": "d", "text": "Hybrid Tables" }
    ],
    "correctIds": ["a"],
    "explanation": "Automatic Aggregations analyze query logs to create and manage aggregations automatically.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 196,
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Arrange the steps to share an App: 1) Create content (reports). 2) Create Workspace. 3) Publish App. 4) Add Content to App.",
    "options": [
      { "id": "a", "text": "2, 1, 4, 3" },
      { "id": "b", "text": "1, 2, 3, 4" },
      { "id": "c", "text": "4, 3, 2, 1" }
    ],
    "correctIds": ["a"],
    "explanation": "Workspace -> Content -> Update App (Add content) -> Publish.",
    "domain": "Plan, implement, and manage a solution for data analytics"
  },
  {
    "id": 197,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure field names in the model are user-friendly. Where to change?",
    "options": [
      { "id": "a", "text": "Power Query or Model View" },
      { "id": "b", "text": "Source Database" },
      { "id": "c", "text": "Visual title" },
      { "id": "d", "text": "Report settings" }
    ],
    "correctIds": ["a"],
    "explanation": "Renaming columns/measures in the Model (or PQ) ensures they appear correctly in the field list for all users.",
    "domain": "Implement and manage semantic models"
  },
  {
    "id": 198,
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model with 'Employee' and 'Manager' (both in Employee table). You need to count employees per manager. Relationship?",
    "options": [
      { "id": "a", "text": "Self-join (Parent-Child hierarchy)" },
      { "id": "b", "text": "Role-playing dimension (Manager copy)" },
      { "id": "c", "text": "Many-to-Many" },
      { "id": "d", "text": "Active relationship" }
    ],
    "correctIds": ["a"],
    "explanation": "A self-join using PATH functions in DAX allows navigating the parent-child hierarchy within the same table.",
    "domain": "Implement and manage semantic models"
  }
];

