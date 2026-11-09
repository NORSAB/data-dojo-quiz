window.questionsData = (window.questionsData || []).concat([
  // === AI/BI for Data Analysts — 20 Questions (EN + ES) ===

  // Q1
  {
    "id": "db-aibi-1",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main purpose of customizing dashboard settings in Databricks AI/BI dashboards?",
    "options": [
      { "id": "a", "text": "To edit SQL queries used by dashboard datasets" },
      { "id": "b", "text": "To control the overall look, behavior, and formatting of the dashboard" },
      { "id": "c", "text": "To change the underlying data in the datasets" },
      { "id": "d", "text": "To define widget level filters for individual visualizations" }
    ],
    "correctIds": ["b"],
    "explanation": "Dashboard settings control the overall look, behavior, and formatting — not the SQL queries or underlying data.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-1-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de personalizar la configuración de dashboards en Databricks AI/BI?",
    "options": [
      { "id": "a", "text": "Editar las consultas SQL usadas por los datasets del dashboard" },
      { "id": "b", "text": "Controlar la apariencia general, el comportamiento y el formato del dashboard" },
      { "id": "c", "text": "Cambiar los datos subyacentes en los datasets" },
      { "id": "d", "text": "Definir filtros a nivel de widget para visualizaciones individuales" }
    ],
    "correctIds": ["b"],
    "explanation": "La configuración del dashboard controla la apariencia general, el comportamiento y el formato, no las consultas SQL ni los datos subyacentes.",
    "domain": "Dashboards & Visualizations"
  },

  // Q2
  {
    "id": "db-aibi-2",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What action is the prerequisite step for sharing a dashboard with stakeholders?",
    "options": [
      { "id": "a", "text": "Using AI Assistant to verify queries" },
      { "id": "b", "text": "Setting a refresh schedule" },
      { "id": "c", "text": "Publishing the dashboard" },
      { "id": "d", "text": "Cloning the draft version" }
    ],
    "correctIds": ["c"],
    "explanation": "A dashboard must be published before it can be shared with stakeholders. The draft version is only visible to the creator.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-2-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué acción es el paso previo necesario para compartir un dashboard con las partes interesadas?",
    "options": [
      { "id": "a", "text": "Usar el AI Assistant para verificar consultas" },
      { "id": "b", "text": "Configurar un cronograma de actualización" },
      { "id": "c", "text": "Publicar el dashboard" },
      { "id": "d", "text": "Clonar la versión de borrador" }
    ],
    "correctIds": ["c"],
    "explanation": "El dashboard debe publicarse antes de poder compartirse. La versión borrador solo es visible para el creador.",
    "domain": "Dashboards & Visualizations"
  },

  // Q3
  {
    "id": "db-aibi-3",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which compute resource must be associated with a Genie Space during its creation?",
    "options": [
      { "id": "a", "text": "Metastore" },
      { "id": "b", "text": "SQL warehouse" },
      { "id": "c", "text": "All-purpose cluster" },
      { "id": "d", "text": "External location" }
    ],
    "correctIds": ["b"],
    "explanation": "A SQL warehouse must be associated with a Genie Space to provide the compute resources needed for query execution.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-aibi-3-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué recurso de cómputo debe asociarse con un Genie Space durante su creación?",
    "options": [
      { "id": "a", "text": "Metastore" },
      { "id": "b", "text": "SQL warehouse" },
      { "id": "c", "text": "Clúster de propósito general" },
      { "id": "d", "text": "Ubicación externa" }
    ],
    "correctIds": ["b"],
    "explanation": "Un SQL warehouse debe asociarse con un Genie Space para proporcionar los recursos de cómputo necesarios para la ejecución de consultas.",
    "domain": "AI/BI Genie Spaces"
  },

  // Q4
  {
    "id": "db-aibi-4",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which widget typically displays a single numerical summary statistic, such as a sales goal?",
    "options": [
      { "id": "a", "text": "Combo Chart" },
      { "id": "b", "text": "Pivot Table" },
      { "id": "c", "text": "Counter" },
      { "id": "d", "text": "Text Box" }
    ],
    "correctIds": ["c"],
    "explanation": "The Counter widget is designed to display a single numerical value or summary statistic prominently.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-4-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué widget típicamente muestra una única estadística numérica resumida, como una meta de ventas?",
    "options": [
      { "id": "a", "text": "Gráfico Combinado" },
      { "id": "b", "text": "Tabla Dinámica" },
      { "id": "c", "text": "Contador" },
      { "id": "d", "text": "Cuadro de Texto" }
    ],
    "correctIds": ["c"],
    "explanation": "El widget Contador está diseñado para mostrar un único valor numérico o estadística de forma destacada.",
    "domain": "Dashboards & Visualizations"
  },

  // Q5
  {
    "id": "db-aibi-5",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the recommended way to upload files for table creation in Databricks?",
    "options": [
      { "id": "a", "text": "Upload to DBFS" },
      { "id": "b", "text": "Upload to Genie Space" },
      { "id": "c", "text": "Upload to Volumes in Unity Catalog" },
      { "id": "d", "text": "Upload to Dashboard" }
    ],
    "correctIds": ["c"],
    "explanation": "Volumes in Unity Catalog is the recommended way to upload files, replacing the legacy DBFS approach with governed storage.",
    "domain": "Importing Data"
  },
  {
    "id": "db-aibi-5-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la forma recomendada de cargar archivos para la creación de tablas en Databricks?",
    "options": [
      { "id": "a", "text": "Cargar a DBFS" },
      { "id": "b", "text": "Cargar a Genie Space" },
      { "id": "c", "text": "Cargar a Volumes en Unity Catalog" },
      { "id": "d", "text": "Cargar al Dashboard" }
    ],
    "correctIds": ["c"],
    "explanation": "Volumes en Unity Catalog es la forma recomendada para cargar archivos, reemplazando el enfoque legacy de DBFS con almacenamiento gobernado.",
    "domain": "Importing Data"
  },

  // Q6
  {
    "id": "db-aibi-6",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the first step when enhancing an existing dashboard with a new dataset in Databricks?",
    "options": [
      { "id": "a", "text": "Locate and explore the new dataset" },
      { "id": "b", "text": "Publish the dashboard" },
      { "id": "c", "text": "Create a Genie Space" },
      { "id": "d", "text": "Add new visualizations" }
    ],
    "correctIds": ["a"],
    "explanation": "The first step is to locate and explore the new dataset to understand its structure before adding it to the dashboard.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-6-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el primer paso al mejorar un dashboard existente con un nuevo conjunto de datos en Databricks?",
    "options": [
      { "id": "a", "text": "Localizar y explorar el nuevo conjunto de datos" },
      { "id": "b", "text": "Publicar el dashboard" },
      { "id": "c", "text": "Crear un Genie Space" },
      { "id": "d", "text": "Agregar nuevas visualizaciones" }
    ],
    "correctIds": ["a"],
    "explanation": "El primer paso es localizar y explorar el nuevo dataset para entender su estructura antes de añadirlo al dashboard.",
    "domain": "Dashboards & Visualizations"
  },

  // Q7
  {
    "id": "db-aibi-7",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How is the data defined by a SQL query updated within the dashboard environment?",
    "options": [
      { "id": "a", "text": "Refreshed on demand or on a schedule" },
      { "id": "b", "text": "Automatically by Unity Catalog" },
      { "id": "c", "text": "Only when the dashboard is cloned" },
      { "id": "d", "text": "By running the Git deployment flow" }
    ],
    "correctIds": ["a"],
    "explanation": "Dashboard data can be refreshed on demand by clicking the refresh button or automatically via configured refresh schedules.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-7-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se actualizan los datos definidos por una consulta SQL dentro del entorno del dashboard?",
    "options": [
      { "id": "a", "text": "Se actualizan bajo demanda o según un cronograma" },
      { "id": "b", "text": "Automáticamente por Unity Catalog" },
      { "id": "c", "text": "Solo cuando se clona el dashboard" },
      { "id": "d", "text": "Ejecutando el flujo de despliegue de Git" }
    ],
    "correctIds": ["a"],
    "explanation": "Los datos del dashboard pueden actualizarse bajo demanda haciendo clic en el botón de actualización o automáticamente mediante cronogramas configurados.",
    "domain": "Dashboards & Visualizations"
  },

  // Q8
  {
    "id": "db-aibi-8",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "AI/BI Dashboards integrate with AI/BI Genie to allow users to explore data via what method?",
    "options": [
      { "id": "a", "text": "Conversational analytics" },
      { "id": "b", "text": "Allowing business users to interact with data using natural language" },
      { "id": "c", "text": "Manual SQL coding" },
      { "id": "d", "text": "Static report downloading" }
    ],
    "correctIds": ["a"],
    "explanation": "The integration with AI/BI Genie enables conversational analytics, allowing users to explore data through conversation-style interactions.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-aibi-8-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Los Dashboards AI/BI se integran con AI/BI Genie para permitir a los usuarios explorar datos mediante qué método?",
    "options": [
      { "id": "a", "text": "Analítica conversacional" },
      { "id": "b", "text": "Permitir a usuarios de negocio interactuar con datos usando lenguaje natural" },
      { "id": "c", "text": "Codificación SQL manual" },
      { "id": "d", "text": "Descarga de reportes estáticos" }
    ],
    "correctIds": ["a"],
    "explanation": "La integración con AI/BI Genie habilita la analítica conversacional, permitiendo a los usuarios explorar datos mediante interacciones estilo conversación.",
    "domain": "AI/BI Genie Spaces"
  },

  // Q9
  {
    "id": "db-aibi-9",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What setting is configured to automatically update the data assets used by a dashboard?",
    "options": [
      { "id": "a", "text": "Git push frequency" },
      { "id": "b", "text": "Cross-filtering options" },
      { "id": "c", "text": "Refresh schedules" },
      { "id": "d", "text": "Embedded credentials" }
    ],
    "correctIds": ["c"],
    "explanation": "Refresh schedules are configured to automatically update dashboard data at specified intervals.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-9-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué configuración se establece para actualizar automáticamente los activos de datos usados por un dashboard?",
    "options": [
      { "id": "a", "text": "Frecuencia de push de Git" },
      { "id": "b", "text": "Opciones de filtrado cruzado" },
      { "id": "c", "text": "Cronogramas de actualización" },
      { "id": "d", "text": "Credenciales incrustadas" }
    ],
    "correctIds": ["c"],
    "explanation": "Los cronogramas de actualización (refresh schedules) se configuran para actualizar automáticamente los datos del dashboard en intervalos específicos.",
    "domain": "Dashboards & Visualizations"
  },

  // Q10
  {
    "id": "db-aibi-10",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What feature in the Catalog Explorer assists in populating column descriptions for Genie to utilize?",
    "options": [
      { "id": "a", "text": "DESCRIBE TABLE" },
      { "id": "b", "text": "Manual text input" },
      { "id": "c", "text": "AI Generate button" },
      { "id": "d", "text": "ANALYZE TABLE" }
    ],
    "correctIds": ["c"],
    "explanation": "The AI Generate button in Catalog Explorer can auto-populate column descriptions, which Genie then uses to better understand queries.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-aibi-10-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función en el Catalog Explorer ayuda a completar las descripciones de columnas para que Genie las utilice?",
    "options": [
      { "id": "a", "text": "DESCRIBE TABLE" },
      { "id": "b", "text": "Entrada de texto manual" },
      { "id": "c", "text": "Botón AI Generate" },
      { "id": "d", "text": "ANALYZE TABLE" }
    ],
    "correctIds": ["c"],
    "explanation": "El botón AI Generate en Catalog Explorer puede completar automáticamente las descripciones de columnas, que Genie luego usa para entender mejor las consultas.",
    "domain": "AI/BI Genie Spaces"
  },

  // Q11
  {
    "id": "db-aibi-11",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How are permissions handled when adding an existing UC table as a dashboard dataset?",
    "options": [
      { "id": "a", "text": "Permissions are ignored by the dashboard." },
      { "id": "b", "text": "Unity Catalog governance" },
      { "id": "c", "text": "Permissions default to full access." },
      { "id": "d", "text": "Permissions are managed at the dashboard level." }
    ],
    "correctIds": ["b"],
    "explanation": "When using UC tables in dashboards, permissions are governed by Unity Catalog's security policies and access controls.",
    "domain": "Importing Data"
  },
  {
    "id": "db-aibi-11-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se manejan los permisos al agregar una tabla UC existente como dataset de un dashboard?",
    "options": [
      { "id": "a", "text": "Los permisos son ignorados por el dashboard." },
      { "id": "b", "text": "Gobernanza de Unity Catalog" },
      { "id": "c", "text": "Los permisos se configuran con acceso total por defecto." },
      { "id": "d", "text": "Los permisos se gestionan a nivel del dashboard." }
    ],
    "correctIds": ["b"],
    "explanation": "Al usar tablas UC en dashboards, los permisos son gobernados por las políticas de seguridad y controles de acceso de Unity Catalog.",
    "domain": "Importing Data"
  },

  // Q12
  {
    "id": "db-aibi-12",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When creating a dashboard in Databricks, which tab allows you to define a dataset using a SQL query?",
    "options": [
      { "id": "a", "text": "Data" },
      { "id": "b", "text": "Visualizations" },
      { "id": "c", "text": "Genie" },
      { "id": "d", "text": "Filters" }
    ],
    "correctIds": ["a"],
    "explanation": "The Data tab in the dashboard editor is where you define datasets using SQL queries or by selecting UC tables.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-12-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al crear un dashboard en Databricks, ¿qué pestaña permite definir un dataset usando una consulta SQL?",
    "options": [
      { "id": "a", "text": "Datos" },
      { "id": "b", "text": "Visualizaciones" },
      { "id": "c", "text": "Genie" },
      { "id": "d", "text": "Filtros" }
    ],
    "correctIds": ["a"],
    "explanation": "La pestaña Datos (Data) en el editor de dashboards es donde se definen datasets usando consultas SQL o seleccionando tablas UC.",
    "domain": "Dashboards & Visualizations"
  },

  // Q13
  {
    "id": "db-aibi-13",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the minimum permission required on a UC table to use it as a data source via the 'Add data source' option?",
    "options": [
      { "id": "a", "text": "CAN VIEW" },
      { "id": "b", "text": "SELECT access" },
      { "id": "c", "text": "CAN MANAGE" },
      { "id": "d", "text": "ALL PRIVILEGES" }
    ],
    "correctIds": ["b"],
    "explanation": "SELECT access is the minimum permission required to read data from a UC table and use it as a dashboard data source.",
    "domain": "Importing Data"
  },
  {
    "id": "db-aibi-13-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el permiso mínimo requerido sobre una tabla UC para usarla como fuente de datos mediante la opción 'Agregar fuente de datos'?",
    "options": [
      { "id": "a", "text": "CAN VIEW" },
      { "id": "b", "text": "Acceso SELECT" },
      { "id": "c", "text": "CAN MANAGE" },
      { "id": "d", "text": "ALL PRIVILEGES" }
    ],
    "correctIds": ["b"],
    "explanation": "El acceso SELECT es el permiso mínimo requerido para leer datos de una tabla UC y usarla como fuente de datos de un dashboard.",
    "domain": "Importing Data"
  },

  // Q14
  {
    "id": "db-aibi-14",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What filter types are available when building an AI/BI dashboard?",
    "options": [
      { "id": "a", "text": "Global and page level filters" },
      { "id": "b", "text": "Global, page level, and widget level filters" },
      { "id": "c", "text": "Page and widget level filters" },
      { "id": "d", "text": "Global filters only" }
    ],
    "correctIds": ["b"],
    "explanation": "AI/BI dashboards support three levels of filters: global (across all pages), page level, and widget level for granular control.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-14-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipos de filtros están disponibles al construir un dashboard AI/BI?",
    "options": [
      { "id": "a", "text": "Filtros globales y a nivel de página" },
      { "id": "b", "text": "Filtros globales, a nivel de página y a nivel de widget" },
      { "id": "c", "text": "Filtros a nivel de página y widget" },
      { "id": "d", "text": "Solo filtros globales" }
    ],
    "correctIds": ["b"],
    "explanation": "Los dashboards AI/BI soportan tres niveles de filtros: global (en todas las páginas), a nivel de página y a nivel de widget para control granular.",
    "domain": "Dashboards & Visualizations"
  },

  // Q15
  {
    "id": "db-aibi-15",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the function of the Databricks Assistant when defining a dataset for a dashboard?",
    "options": [
      { "id": "a", "text": "It creates visualizations automatically during dataset definition" },
      { "id": "b", "text": "It publishes dashboards" },
      { "id": "c", "text": "It helps compose SQL queries" },
      { "id": "d", "text": "It manages data ingestion pipelines" }
    ],
    "correctIds": ["c"],
    "explanation": "The Databricks Assistant helps compose and refine SQL queries when defining datasets, providing AI-powered coding assistance.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-15-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función del Databricks Assistant al definir un dataset para un dashboard?",
    "options": [
      { "id": "a", "text": "Crea visualizaciones automáticamente durante la definición del dataset" },
      { "id": "b", "text": "Publica dashboards" },
      { "id": "c", "text": "Ayuda a componer consultas SQL" },
      { "id": "d", "text": "Gestiona pipelines de ingesta de datos" }
    ],
    "correctIds": ["c"],
    "explanation": "El Databricks Assistant ayuda a componer y refinar consultas SQL al definir datasets, proporcionando asistencia de codificación potenciada por IA.",
    "domain": "Dashboards & Visualizations"
  },

  // Q16
  {
    "id": "db-aibi-16",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "AI/BI Genie empowers end users by allowing them to interact with data using what medium?",
    "options": [
      { "id": "a", "text": "Tableau integration" },
      { "id": "b", "text": "Python scripting" },
      { "id": "c", "text": "Predefined query execution" },
      { "id": "d", "text": "Natural language chats" }
    ],
    "correctIds": ["d"],
    "explanation": "AI/BI Genie allows end users to interact with data through natural language chats, removing the need for SQL knowledge.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-aibi-16-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "AI/BI Genie empodera a los usuarios finales permitiéndoles interactuar con datos usando qué medio?",
    "options": [
      { "id": "a", "text": "Integración con Tableau" },
      { "id": "b", "text": "Scripting en Python" },
      { "id": "c", "text": "Ejecución de consultas predefinidas" },
      { "id": "d", "text": "Chats en lenguaje natural" }
    ],
    "correctIds": ["d"],
    "explanation": "AI/BI Genie permite a los usuarios finales interactuar con datos mediante chats en lenguaje natural, eliminando la necesidad de conocimiento de SQL.",
    "domain": "AI/BI Genie Spaces"
  },

  // Q17
  {
    "id": "db-aibi-17",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the primary purpose of Catalog Explorer in Databricks for data analysts?",
    "options": [
      { "id": "a", "text": "To publish dashboards" },
      { "id": "b", "text": "To discover datasets for analytics" },
      { "id": "c", "text": "To manage clusters" },
      { "id": "d", "text": "To create visualizations" }
    ],
    "correctIds": ["b"],
    "explanation": "Catalog Explorer's primary purpose for data analysts is to discover and explore datasets available for analytics within Unity Catalog.",
    "domain": "Importing Data"
  },
  {
    "id": "db-aibi-17-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal del Catalog Explorer en Databricks para los analistas de datos?",
    "options": [
      { "id": "a", "text": "Publicar dashboards" },
      { "id": "b", "text": "Descubrir datasets para análisis" },
      { "id": "c", "text": "Gestionar clústeres" },
      { "id": "d", "text": "Crear visualizaciones" }
    ],
    "correctIds": ["b"],
    "explanation": "El propósito principal del Catalog Explorer para analistas de datos es descubrir y explorar datasets disponibles para análisis dentro de Unity Catalog.",
    "domain": "Importing Data"
  },

  // Q18
  {
    "id": "db-aibi-18",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the correct order of the three-level namespace hierarchy in Databricks SQL?",
    "options": [
      { "id": "a", "text": "Catalog, Schema, Table" },
      { "id": "b", "text": "Catalog, Table, Metastore" },
      { "id": "c", "text": "Table, Schema, Catalog" },
      { "id": "d", "text": "Workspace, Table, Schema" }
    ],
    "correctIds": ["a"],
    "explanation": "The three-level namespace in Databricks SQL follows: Catalog → Schema → Table (e.g., catalog.schema.table).",
    "domain": "Importing Data"
  },
  {
    "id": "db-aibi-18-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el orden correcto de la jerarquía de namespace de tres niveles en Databricks SQL?",
    "options": [
      { "id": "a", "text": "Catalog, Schema, Table" },
      { "id": "b", "text": "Catalog, Table, Metastore" },
      { "id": "c", "text": "Table, Schema, Catalog" },
      { "id": "d", "text": "Workspace, Table, Schema" }
    ],
    "correctIds": ["a"],
    "explanation": "El namespace de tres niveles en Databricks SQL sigue: Catalog → Schema → Table (ej. catalog.schema.table).",
    "domain": "Importing Data"
  },

  // Q19
  {
    "id": "db-aibi-19",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which action allows you to change how data is presented in an existing visualization without modifying the underlying SQL query?",
    "options": [
      { "id": "a", "text": "Editing the database schema" },
      { "id": "b", "text": "Recreating the dataset from scratch" },
      { "id": "c", "text": "Updating Unity Catalog permissions" },
      { "id": "d", "text": "Changing the visualization type or field mappings" }
    ],
    "correctIds": ["d"],
    "explanation": "Changing the visualization type or field mappings modifies how data is displayed without altering the SQL query or underlying data.",
    "domain": "Dashboards & Visualizations"
  },
  {
    "id": "db-aibi-19-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué acción permite cambiar cómo se presentan los datos en una visualización existente sin modificar la consulta SQL subyacente?",
    "options": [
      { "id": "a", "text": "Editar el esquema de la base de datos" },
      { "id": "b", "text": "Recrear el dataset desde cero" },
      { "id": "c", "text": "Actualizar los permisos de Unity Catalog" },
      { "id": "d", "text": "Cambiar el tipo de visualización o el mapeo de campos" }
    ],
    "correctIds": ["d"],
    "explanation": "Cambiar el tipo de visualización o el mapeo de campos modifica cómo se muestran los datos sin alterar la consulta SQL ni los datos subyacentes.",
    "domain": "Dashboards & Visualizations"
  },

  // Q20
  {
    "id": "db-aibi-20",
    "courseId": "databricks-aibi",
    "lang": "en",
    "type": "single_choice",
    "prompt": "All Genie interactions are governed by UC's security policies and data access controls, representing what principle?",
    "options": [
      { "id": "a", "text": "Transparent management" },
      { "id": "b", "text": "Decentralized architecture" },
      { "id": "c", "text": "Automatic optimization" },
      { "id": "d", "text": "Unified security and governance" }
    ],
    "correctIds": ["d"],
    "explanation": "Genie inherits Unity Catalog's security policies, ensuring unified security and governance across all data interactions.",
    "domain": "AI/BI Genie Spaces"
  },
  {
    "id": "db-aibi-20-es",
    "courseId": "databricks-aibi",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Todas las interacciones de Genie están gobernadas por las políticas de seguridad y controles de acceso a datos de UC, ¿qué principio representa esto?",
    "options": [
      { "id": "a", "text": "Gestión transparente" },
      { "id": "b", "text": "Arquitectura descentralizada" },
      { "id": "c", "text": "Optimización automática" },
      { "id": "d", "text": "Seguridad y gobernanza unificada" }
    ],
    "correctIds": ["d"],
    "explanation": "Genie hereda las políticas de seguridad de Unity Catalog, asegurando seguridad y gobernanza unificada en todas las interacciones con datos.",
    "domain": "AI/BI Genie Spaces"
  }
]);
