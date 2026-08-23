window.questionsData = (window.questionsData || []).concat([
  // --- PART A (1-10) ES + EN ---
  {
    "id": "db-fund-1",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles dos afirmaciones explican la arquitectura lakehouse y sus beneficios?",
    "options": [
      { "id": "a", "text": "La arquitectura lakehouse ofrece beneficios tanto de los data warehouses como de los data lakes al construir una capa de gestión y formateo de datos sobre un data lake abierto." },
      { "id": "b", "text": "La arquitectura lakehouse ofrece el beneficio de cerrar la brecha entre múltiples plataformas existentes al agregar una capa de gobernanza que gestiona activos de datos de IA." },
      { "id": "c", "text": "La arquitectura lakehouse proporciona una nueva variedad de tecnología de data warehousing donde los datos en la nube se almacenan en un formato propietario para una gestión eficiente." },
      { "id": "d", "text": "La arquitectura lakehouse proporciona una plataforma unificada para todo tipo de datos con soporte para workloads de BI y de IA." }
    ],
    "correctIds": ["a", "d"],
    "explanation": "El lakehouse se describe como “lo mejor de ambos mundos”: construido sobre un data lake (almacena cualquier tipo de datos) e implementando estructuras y features tipo data warehouse, habilitando BI y AI en una arquitectura unificada.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-1-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two statements provide an explanation of data lakehouse architecture and its benefits?",
    "options": [
      { "id": "a", "text": "Data lakehouse architecture offers the benefits of both data warehouses and data lakes by building a data management and formatting layer on top of an open data lake." },
      { "id": "b", "text": "Data lakehouse architecture offers the benefit of bridging the gap between multiple existing platforms within a data ecosystem by adding a data governance layer that manages AI data assets." },
      { "id": "c", "text": "The data lakehouse architecture provides a new variety of data warehousing technology, in which cloud-based data is stored in a proprietary format for efficient management." },
      { "id": "d", "text": "The data lakehouse architecture provides a unified platform for all data types with support for both BI and AI workloads." }
    ],
    "correctIds": ["a", "d"],
    "explanation": "The lakehouse combines the best of data warehouses and data lakes, enabling unified BI and AI workloads on an open data lake foundation.",
    "domain": "Lakehouse Architecture"
  },

  {
    "id": "db-fund-2",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles tres beneficios son provistos directamente por Databricks?",
    "options": [
      { "id": "a", "text": "Está construido sobre open source y estándares abiertos." },
      { "id": "b", "text": "Proporciona almacenamiento en la nube escalable y redundante." },
      { "id": "c", "text": "Es hardware on-premises optimizado y eficiente." },
      { "id": "d", "text": "Proporciona un enfoque unificado de seguridad y gobernanza para todos los activos de datos." },
      { "id": "e", "text": "Está disponible en y a través de múltiples plataformas cloud." }
    ],
    "correctIds": ["a", "d", "e"],
    "explanation": "Databricks destaca por ser open source/estándares abiertos, ofrecer gobernanza unificada (Unity Catalog) y ser multi-cloud. No provee el almacenamiento cloud base (eso es AWS/Azure/GCP) ni hardware on-rem.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-2-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which three of the following benefits are provided directly by Databricks?",
    "options": [
      { "id": "a", "text": "It’s built on open source and open standards" },
      { "id": "b", "text": "It provides scalable and redundant cloud-based data storage" },
      { "id": "c", "text": "It’s efficient on-premises optimized hardware" },
      { "id": "d", "text": "It provides a unified security and governance approach to all data assets" },
      { "id": "e", "text": "It’s available on and across multiple cloud platforms" }
    ],
    "correctIds": ["a", "d", "e"],
    "explanation": "Databricks is built on open standards, provides unified governance, and is multi-cloud. The underlying cloud storage is provided by the cloud vendor.",
    "domain": "Governance & Products"
  },

  {
    "id": "db-fund-3",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo soporta Databricks seguridad y gobernanza de datos a través de diferentes plataformas cloud?",
    "options": [
      { "id": "a", "text": "Usa múltiples herramientas de seguridad y gobernanza dentro de la plataforma según el caso de uso." },
      { "id": "b", "text": "Hereda directamente permisos y gobernanza del proveedor cloud." },
      { "id": "c", "text": "Depende del tooling de gobernanza del cliente en la infraestructura cloud." },
      { "id": "d", "text": "Usa Unity Catalog como capa de gobernanza unificada para todos los activos de datos y de IA." }
    ],
    "correctIds": ["d"],
    "explanation": "Unity Catalog es el modelo de gobernanza unificado para centralizar el control de acceso, auditoría y linaje a través de nubes.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-3-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How does Databricks support data security and governance across different cloud platforms?",
    "options": [
      { "id": "a", "text": "Databricks uses multiple data security and governance tools within the platform…" },
      { "id": "b", "text": "Databricks leverages the existing cloud provider’s security infrastructure…" },
      { "id": "c", "text": "Databricks depends on the customer’s preferred… tooling…" },
      { "id": "d", "text": "Databricks leverages Unity Catalog to provide a unified governance layer for all data and AI assets…" }
    ],
    "correctIds": ["d"],
    "explanation": "Unity Catalog provides a unified governance layer for all data and AI assets across clouds.",
    "domain": "Governance & Products"
  },

  {
    "id": "db-fund-4",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles dos opciones describen beneficios de integrar AI en el núcleo de la plataforma?",
    "options": [
      { "id": "a", "text": "Provee optimización adicional de almacenamiento sobre el cloud storage." },
      { "id": "b", "text": "Ayuda a entender estructura/uso/significado de datos; aumenta productividad y optimiza workloads." },
      { "id": "c", "text": "Mejora la experiencia con un asistente AI siempre listo para debugging y mejora de código." },
      { "id": "d", "text": "Provee un servicio de atención al cliente siempre disponible para consultas de cuenta." }
    ],
    "correctIds": ["b", "c"],
    "explanation": "Data Intelligence usa AI para entender la semántica de los datos (optimizando y facilitando uso) y el Databricks Assistant mejora la productividad de desarrollo.",
    "domain": "Data Intelligence"
  },
  {
    "id": "db-fund-4-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "What two options describe benefits of integrating AI into the core of the Databricks Platform?",
    "options": [
      { "id": "a", "text": "Integrating AI provides additional storage optimization…" },
      { "id": "b", "text": "Applying AI helps the platform understand structure, usage, meaning… boosts productivity…" },
      { "id": "c", "text": "Using AI enhances the user experience with an always-ready AI assistant…" },
      { "id": "d", "text": "Including AI provides an always available customer service tool…" }
    ],
    "correctIds": ["b", "c"],
    "explanation": "The Data Intelligence Engine understands data semantics to optimize workloads, and the AI Assistant aids in development.",
    "domain": "Data Intelligence"
  },

  {
    "id": "db-fund-5",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué afirmación describe el rol de Unity Catalog dentro de la Databricks Data Intelligence Platform?",
    "options": [
      { "id": "a", "text": "Provee una interfaz única para permisos, auditorías y data sharing a nivel plataforma para necesidades de gobernanza de datos y AI." },
      { "id": "b", "text": "Es una solución de almacenamiento para todos los activos de data y AI." },
      { "id": "c", "text": "Une los datos con un motor de inteligencia para visualización asistida." },
      { "id": "d", "text": "Es la capa de almacenamiento optimizada que fundamenta tablas lakehouse." }
    ],
    "correctIds": ["a"],
    "explanation": "Unity Catalog centraliza la gobernanza: políticas de acceso, auditoría, linaje y descubrimiento en una sola interfaz.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-5-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which statement describes the role of Unity Catalog…?",
    "options": [
      { "id": "a", "text": "Unity Catalog provides a single interface to manage platform-wide permissions, audits, and data sharing…" },
      { "id": "b", "text": "Unity Catalog is a data storage solution…" },
      { "id": "c", "text": "Unity Catalog brings together your data with an AI-backed intelligence engine…" },
      { "id": "d", "text": "Unity Catalog is the optimized storage layer…" }
    ],
    "correctIds": ["a"],
    "explanation": "Unity Catalog provides a single interface for platform-wide governance, including permissions, audits, and sharing.",
    "domain": "Governance & Products"
  },

  {
    "id": "db-fund-6",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función principal de Databricks Notebooks?",
    "options": [
      { "id": "a", "text": "Entorno colaborativo para data practitioners con soporte multi-lenguaje." },
      { "id": "b", "text": "Interfaz para dashboards reutilizables de BI." },
      { "id": "c", "text": "Espacio para conectar git y administrar CI/CD." },
      { "id": "d", "text": "Entorno para dashboards y visualizaciones para end users." }
    ],
    "correctIds": ["a"],
    "explanation": "Los Notebooks son el entorno principal de colaboración para código (Python, SQL, Scala, R) y desarrollo.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-6-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the primary function of Databricks Notebooks?",
    "options": [
      { "id": "a", "text": "Collaborative, reproducible environment… multiple languages" },
      { "id": "b", "text": "Interface for dashboards…" },
      { "id": "c", "text": "Space to connect with git…" },
      { "id": "d", "text": "Environment for dashboards and visualizations…" }
    ],
    "correctIds": ["a"],
    "explanation": "Databricks Notebooks provide a collaborative environment for practitioners supporting multiple languages.",
    "domain": "Governance & Products"
  },

  {
    "id": "db-fund-7",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo apoya Databricks a usuarios no técnicos para obtener insights usando lenguaje natural?",
    "options": [
      { "id": "a", "text": "Con tutoriales y notebooks preconstruidos con un clic." },
      { "id": "b", "text": "Con conexiones one-click a fuentes existentes del ecosistema." },
      { "id": "c", "text": "Con AI/BI Genie (Genie Spaces) y Databricks Assistant para interacción con prompts en lenguaje natural." },
      { "id": "d", "text": "Con blogs y documentación cloud disponibles vía Intelligent Search." }
    ],
    "correctIds": ["c"],
    "explanation": "AI/BI Genie permite hacer preguntas en lenguaje natural sobre los datos, y Databricks Assistant apoya con ayuda contextual.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-7-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How does Databricks support non-technical users…?",
    "options": [
      { "id": "a", "text": "Coding tutorials and prebuilt notebooks…" },
      { "id": "b", "text": "One-click connections…" },
      { "id": "c", "text": "AI/BI Genie Spaces and Databricks Assistant…" },
      { "id": "d", "text": "Blogs and documentation via Intelligent Search…" }
    ],
    "correctIds": ["c"],
    "explanation": "AI/BI Genie and Databricks Assistant enable natural language interaction for non-technical users.",
    "domain": "Governance & Products"
  },

  {
    "id": "db-fund-8",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito central de Databricks Marketplace?",
    "options": [
      { "id": "a", "text": "Proveer almacenamiento compartido para colaboración con partners." },
      { "id": "b", "text": "Proveer un marketplace abierto para productos de data/analytics/AI, habilitando colaboración y monetización." },
      { "id": "c", "text": "Marketplace curado de activos verificados para comprar." },
      { "id": "d", "text": "Proveer datasets solo para entrenamiento de Databricks Academy." }
    ],
    "correctIds": ["b"],
    "explanation": "Databricks Marketplace es un mercado abierto para intercambiar datasets, notebooks, dashboards y modelos de ML, impulsado por Delta Sharing.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-8-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the core purpose of Databricks Marketplace?",
    "options": [
      { "id": "a", "text": "Shared data storage solution…" },
      { "id": "b", "text": "Open marketplace for data, analytics, and AI products…" },
      { "id": "c", "text": "Curated marketplace of verified assets…" },
      { "id": "d", "text": "Assets for training/learning…" }
    ],
    "correctIds": ["b"],
    "explanation": "It is an open marketplace for exchanging data, analytics, and AI products.",
    "domain": "Governance & Products"
  },

  {
    "id": "db-fund-9",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el rol de Databricks Lakeflow Jobs?",
    "options": [
      { "id": "a", "text": "Traer datos desde fuentes externas mediante pipelines confiables." },
      { "id": "b", "text": "Dashboard para monitorear costos de data flows." },
      { "id": "c", "text": "Administrar infraestructura cloud desde una interfaz." },
      { "id": "d", "text": "Orquestar jobs con flujos de control, triggers y monitoreo." }
    ],
    "correctIds": ["d"],
    "explanation": "Lakeflow Jobs (anteriormente Workflows) se encarga de orquestar tareas y flujos de trabajo dentro de la plataforma.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-9-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the role of Databricks Lakeflow Jobs?",
    "options": [
      { "id": "a", "text": "Deliver data into the platform…" },
      { "id": "b", "text": "Provide a cost dashboard…" },
      { "id": "c", "text": "Manage cloud infrastructure…" },
      { "id": "d", "text": "Orchestrate all types of jobs… control flows, triggers, monitoring" }
    ],
    "correctIds": ["d"],
    "explanation": "It orchestrates jobs and workflows including control flows and monitoring.",
    "domain": "Governance & Products"
  },

  {
    "id": "db-fund-10",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál servicio/capacidad soporta capacidades de data warehousing en Databricks?",
    "options": [
      { "id": "a", "text": "Databricks SQL" },
      { "id": "b", "text": "Lakehouse Federation" },
      { "id": "c", "text": "Databricks Workflows" },
      { "id": "d", "text": "MosaicAI" }
    ],
    "correctIds": ["a"],
    "explanation": "Databricks SQL es el servicio dedicado para cargas de trabajo de Data Warehousing (Consultas SQL, Visualizaciones, Dashboards).",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-10-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which service/capability supports data warehousing on Databricks?",
    "options": [
      { "id": "a", "text": "Databricks SQL" },
      { "id": "b", "text": "Lakehouse Federation" },
      { "id": "c", "text": "Databricks Workflows" },
      { "id": "d", "text": "MosaicAI" }
    ],
    "correctIds": ["a"],
    "explanation": "Databricks SQL enables data warehousing capabilities like SQL queries and dashboards.",
    "domain": "Governance & Products"
  },

  // --- PART B (11-25) ES ONLY ---

  {
    "id": "db-fund-11",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Según Databricks, ¿cuáles son tres prioridades consistentes que emergen al hablar con compañías sobre data y AI?",
    "options": [
      { "id": "a", "text": "Reducción de costos (menor TCO)" },
      { "id": "b", "text": "Más almacenamiento propietario para mejorar performance" },
      { "id": "c", "text": "Calidad y seguridad de datos" },
      { "id": "d", "text": "Transformación impulsada por AI" },
      { "id": "e", "text": "Reemplazar todos los sistemas legacy en 30 días" }
    ],
    "correctIds": ["a", "c", "d"],
    "explanation": "Prioridades clave: reducir costos, asegurar calidad/seguridad y potenciar la transformación con IA.",
    "domain": "Historia y Por Qué"
  },
  {
    "id": "db-fund-12",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles dos factores se mencionan como contribuyentes a la fragmentación de sistemas de data y AI?",
    "options": [
      { "id": "a", "text": "Equipos trabajando en silos" },
      { "id": "b", "text": "Tener un único data warehouse central desde el inicio" },
      { "id": "c", "text": "Múltiples data warehouses debido a adquisiciones" },
      { "id": "d", "text": "Eliminar plataformas con el auge de GenAI" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "La fragmentación surge de equipos aislados (silos) y adquisiciones que traen múltiples warehouses.",
    "domain": "Historia y Por Qué"
  },
  {
    "id": "db-fund-13",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué consecuencia principal genera acumular un “patchwork” de ambientes de datos con el tiempo?",
    "options": [
      { "id": "a", "text": "Menos silos y menos complejidad" },
      { "id": "b", "text": "Más silos, más complejidad e ineficiencias" },
      { "id": "c", "text": "Eliminación de la necesidad de gobernanza" },
      { "id": "d", "text": "Garantía automática de single source of truth" }
    ],
    "correctIds": ["b"],
    "explanation": "Un sistema parcheado aumenta la complejidad, crea más silos y genera ineficiencias.",
    "domain": "Historia y Por Qué"
  },
  {
    "id": "db-fund-14",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Si una organización tiene plataformas duplicadas que hacen lo mismo o similar, ¿qué efecto se menciona?",
    "options": [
      { "id": "a", "text": "Se reduce el costo total" },
      { "id": "b", "text": "Crece el costo y hay menos presupuesto para invertir en otras áreas" },
      { "id": "c", "text": "Se mejora automáticamente la calidad de datos" },
      { "id": "d", "text": "Se elimina la necesidad de integración" }
    ],
    "correctIds": ["b"],
    "explanation": "La duplicación incrementa costos, reduciendo el presupuesto disponible para innovación.",
    "domain": "Historia y Por Qué"
  },
  {
    "id": "db-fund-15",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué es difícil asegurar calidad/seguridad/consumo si no hay single source of truth?",
    "options": [
      { "id": "a", "text": "Porque los datos están en múltiples ubicaciones y se mueven; es confuso qué usar y qué pasa cuando se actualizan" },
      { "id": "b", "text": "Porque siempre se usa el dato más nuevo sin errores" },
      { "id": "c", "text": "Porque la gobernanza no aplica a datos estructurados" },
      { "id": "d", "text": "Porque el almacenamiento cloud no permite control" }
    ],
    "correctIds": ["a"],
    "explanation": "Sin una fuente única, la dispersión de datos crea confusión sobre cuál es la versión correcta y segura.",
    "domain": "Historia y Por Qué"
  },
  {
    "id": "db-fund-16",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Según Databricks, ¿en qué año fue fundada Databricks?",
    "options": [
      { "id": "a", "text": "2010" },
      { "id": "b", "text": "2013" },
      { "id": "c", "text": "2020" },
      { "id": "d", "text": "2023" }
    ],
    "correctIds": ["b"],
    "explanation": "Databricks fue fundada en 2013.",
    "domain": "Historia y Por Qué"
  },
  {
    "id": "db-fund-17",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué se afirma que el lakehouse evita el vendor lock-in?",
    "options": [
      { "id": "a", "text": "Porque almacena datos en formatos cerrados del vendor" },
      { "id": "b", "text": "Porque es un entorno abierto construido en la nube" },
      { "id": "c", "text": "Porque depende de hardware propietario" },
      { "id": "d", "text": "Porque solo trabaja con datos estructurados" }
    ],
    "correctIds": ["b"],
    "explanation": "Al usar estándares abiertos y almacenamiento cloud agnóstico, se evita la dependencia exclusiva de un proveedor.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-18",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles dos beneficios se mencionan al unificar warehouse + lake en un solo sistema (lakehouse)?",
    "options": [
      { "id": "a", "text": "Data teams se mueven más rápido con una arquitectura unificada" },
      { "id": "b", "text": "Los usuarios deben acceder a múltiples sistemas para usar datos" },
      { "id": "c", "text": "Datos más completos y up-to-date para data science, ML y reportes de business analysts" },
      { "id": "d", "text": "Se incrementa la duplicación para mejorar disponibilidad" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "La unificación acelera a los equipos y provee datos frescos y completos para todos los casos de uso.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-19",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿De cuáles tres fuentes/señales aprende Data Intelligence según Databricks?",
    "options": [
      { "id": "a", "text": "Catálogo de datos" },
      { "id": "b", "text": "SQL queries" },
      { "id": "c", "text": "BI dashboards" },
      { "id": "d", "text": "Solo redes sociales públicas" },
      { "id": "e", "text": "Solo documentos de Internet público" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Aprende de metadatos (catálogo), uso (queries) y consumo (dashboards) dentro de la organización.",
    "domain": "Data Intelligence"
  },
  {
    "id": "db-fund-20",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué la plataforma puede responder más preciso que un LLM “naive” entrenado solo con Internet público?",
    "options": [
      { "id": "a", "text": "Porque ignora por completo el contexto empresarial" },
      { "id": "b", "text": "Porque aprende del uso real y semántica del entorno de datos de la organización" },
      { "id": "c", "text": "Porque convierte todo a formato propietario" },
      { "id": "d", "text": "Porque evita gobernanza y auditoría" }
    ],
    "correctIds": ["b"],
    "explanation": "Al entender la semántica específica del negocio, ofrece respuestas contextualizadas y precisas.",
    "domain": "Data Intelligence"
  },

  {
    "id": "db-fund-21",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "ordering",
    "prompt": "Ordena el “viaje de los datos” en Databricks según Databricks.",
    "options": [
      { "id": "t", "text": "Transformación" },
      { "id": "s", "text": "Fuentes de datos" },
      { "id": "i", "text": "Ingestión" },
      { "id": "c", "text": "Consumo/uso (análisis, BI, AI)" }
    ],
    "correctIds": ["s", "i", "t", "c"],
    "explanation": "Flujo lógico: Fuentes -> Ingesta -> Transformación -> Consumo.",
    "domain": "Arquitectura y Cómputo"
  },

  {
    "id": "db-fund-22",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "true_false",
    "prompt": "“Deduplicación y refinado son ejemplos de transformación para mejorar la calidad e integridad de datos para aplicaciones de negocio.”",
    "options": [
      { "id": "true", "text": "Verdadero" },
      { "id": "false", "text": "Falso" }
    ],
    "correctIds": ["true"],
    "explanation": "La deduplicación y refinado son pasos clásicos de transformación.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-23",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué serverless aumenta productividad según Databricks?",
    "options": [
      { "id": "a", "text": "Porque los usuarios esperan a que el compute arranque" },
      { "id": "b", "text": "Porque ofrece disponibilidad instantánea y evita esperas de recursos" },
      { "id": "c", "text": "Porque exige configurar manualmente servidores" },
      { "id": "d", "text": "Porque es solo para tareas batch lentas" }
    ],
    "correctIds": ["b"],
    "explanation": "Serverless elimina tiempos de espera de arranque, permitiendo disponibilidad inmediata.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-24",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles dos razones explican por qué serverless reduce costo?",
    "options": [
      { "id": "a", "text": "Pagas por lo que consumes, evitando pagar tiempo idle" },
      { "id": "b", "text": "Obliga a sobredimensionar recursos para “estar seguro”" },
      { "id": "c", "text": "Escala elásticamente según la carga real" },
      { "id": "d", "text": "Requiere hardware propietario adicional" }
    ],
    "correctIds": ["a", "c"],
    "explanation": "Pagar solo por consumo y el escalado automático evitan el sobredimensionamiento y los costos ociosos.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-25",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles tres capacidades se mencionan como features clave de Unity Catalog?",
    "options": [
      { "id": "a", "text": "Built-in auditing" },
      { "id": "b", "text": "Data lineage" },
      { "id": "c", "text": "Data discovery con tags/documentación y búsqueda" },
      { "id": "d", "text": "Sustituye el cloud storage" },
      { "id": "e", "text": "Elimina la necesidad de permisos" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Unity Catalog incluye auditoría, linaje y herramientas de descubrimiento.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-26",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Según Databricks, ¿qué tres tipos de productos pueden intercambiarse en Databricks Marketplace?",
    "options": [
      { "id": "a", "text": "Datasets" },
      { "id": "b", "text": "Notebooks" },
      { "id": "c", "text": "Dashboards" },
      { "id": "d", "text": "Solo hardware de cómputo" },
      { "id": "e", "text": "Únicamente licencias propietarias" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "El Marketplace permite intercambiar datos, notebooks, dashboards y modelos.",
    "domain": "Gobernanza y Productos"
  },

  // --- PART C (27-60) ES ONLY ---

  {
    "id": "db-fund-27",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la misión de Databricks según Databricks?",
    "options": [
      { "id": "a", "text": "Convertir todos los datos a formatos propietarios" },
      { "id": "b", "text": "Democratizar data y AI" },
      { "id": "c", "text": "Reemplazar todos los data warehouses por hardware on-premises" },
      { "id": "d", "text": "Eliminar la necesidad de gobernanza" }
    ],
    "correctIds": ["b"],
    "explanation": "La misión es democratizar los datos y la IA.",
    "domain": "Historia y Por Qué"
  },
  {
    "id": "db-fund-28",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Según Databricks, el equipo fundador incluye creadores originales de cuáles tres tecnologías?",
    "options": [
      { "id": "a", "text": "Apache Spark" },
      { "id": "b", "text": "Delta Lake" },
      { "id": "c", "text": "MLflow" },
      { "id": "d", "text": "Databricks Marketplace" },
      { "id": "e", "text": "SharePoint" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Los fundadores crearon Apache Spark, Delta Lake y MLflow.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-29",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué característica se destaca sobre los lakehouses respecto a dónde se construyen?",
    "options": [
      { "id": "a", "text": "Siempre en servidores físicos on-premises" },
      { "id": "b", "text": "En entornos abiertos construidos en la nube" },
      { "id": "c", "text": "Solo en hardware especializado del vendor" },
      { "id": "d", "text": "Exclusivamente en data warehouses tradicionales" }
    ],
    "correctIds": ["b"],
    "explanation": "Son entornos abiertos construidos en infraestructura de nube.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-30",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué problema se menciona cuando los equipos copian datos entre data lake y data warehouse?",
    "options": [
      { "id": "a", "text": "Acelera el trabajo y elimina riesgos" },
      { "id": "b", "text": "Es eficiente y reduce duplicación" },
      { "id": "c", "text": "Es lento/ineficiente y causa duplicación y gobernanza fragmentada" },
      { "id": "d", "text": "Evita problemas de compliance automáticamente" }
    ],
    "correctIds": ["c"],
    "explanation": "Copiar datos crea ineficiencias, duplicación y fragmenta la gobernanza.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-31",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "true_false",
    "prompt": "“En un data lake, los datos pueden coexistir en múltiples etapas del proceso de refinamiento (raw e intermedios).”",
    "options": [
      { "id": "true", "text": "Verdadero" },
      { "id": "false", "text": "Falso" }
    ],
    "correctIds": ["true"],
    "explanation": "Data lakes almacenan datos en diversos estados de procesamiento.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-32",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de datos se menciona como difícil de soportar para un data warehouse tradicional?",
    "options": [
      { "id": "a", "text": "Tablas con filas y columnas" },
      { "id": "b", "text": "Datos estructurados estilo Excel" },
      { "id": "c", "text": "Imágenes, audio, videos y texto libre" },
      { "id": "d", "text": "Datos ya limpios y transformados" }
    ],
    "correctIds": ["c"],
    "explanation": "Warehouses tradicionales no manejan bien datos no estructurados.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-33",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué puede pasar si un data lake se diseña “demasiado laxo” según Databricks?",
    "options": [
      { "id": "a", "text": "Se vuelve un data warehouse optimizado" },
      { "id": "b", "text": "Se vuelve un “data swamp” con problemas de gobernanza/seguridad" },
      { "id": "c", "text": "Automáticamente se vuelve single source of truth" },
      { "id": "d", "text": "Se hace más barato por ser propietario" }
    ],
    "correctIds": ["b"],
    "explanation": "La falta de estructura puede convertir un lake en un 'swamp' (pantano) ingobernable.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-34",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué se dice que el lakehouse es costo-eficiente y escalable?",
    "options": [
      { "id": "a", "text": "Porque usa formatos propietarios de alto costo" },
      { "id": "b", "text": "Porque se apoya en almacenamiento barato en la nube" },
      { "id": "c", "text": "Porque evita guardar datos semi/no estructurados" },
      { "id": "d", "text": "Porque depende de hardware especializado" }
    ],
    "correctIds": ["b"],
    "explanation": "Utiliza almacenamiento cloud económico como base.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-35",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué los equipos pueden moverse más rápido con un lakehouse?",
    "options": [
      { "id": "a", "text": "Porque tienen que usar múltiples sistemas en paralelo" },
      { "id": "b", "text": "Porque tienen una arquitectura unificada para data y AI en un solo lugar" },
      { "id": "c", "text": "Porque deben duplicar datos para cada equipo" },
      { "id": "d", "text": "Porque no se necesita transformación" }
    ],
    "correctIds": ["b"],
    "explanation": "La arquitectura unificada elimina fricciones entre silos de datos.",
    "domain": "Arquitectura Lakehouse"
  },
  {
    "id": "db-fund-36",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Qué dos objetivos se mencionan para Data Intelligence?",
    "options": [
      { "id": "a", "text": "Crear aplicaciones de AI personalizadas" },
      { "id": "b", "text": "Democratizar el acceso a datos en la empresa" },
      { "id": "c", "text": "Convertir todo a un formato propietario del vendor" },
      { "id": "d", "text": "Eliminar el uso de catálogos y documentación" }
    ],
    "correctIds": ["a", "b"],
    "explanation": "Busca democratizar datos y habilitar aplicaciones de IA.",
    "domain": "Data Intelligence"
  },
  {
    "id": "db-fund-37",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles cuatro elementos se listan como señales de las que aprende Data Intelligence?",
    "options": [
      { "id": "a", "text": "Data catalog" },
      { "id": "b", "text": "SQL queries" },
      { "id": "c", "text": "BI dashboards" },
      { "id": "d", "text": "Notebooks" },
      { "id": "e", "text": "Solo comentarios en redes sociales" }
    ],
    "correctIds": ["a", "b", "c", "d"],
    "explanation": "Utiliza todo el contexto interno: catálogo, queries, dashboards y notebooks.",
    "domain": "Data Intelligence"
  },
  {
    "id": "db-fund-38",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué se obtiene al unir lakehouse con data intelligence?",
    "options": [
      { "id": "a", "text": "Un data lake tradicional" },
      { "id": "b", "text": "Un data warehouse propietario" },
      { "id": "c", "text": "La Databricks Data Intelligence Platform" },
      { "id": "d", "text": "Un sistema sin gobernanza" }
    ],
    "correctIds": ["c"],
    "explanation": "Es la definición de la Databricks Data Intelligence Platform.",
    "domain": "Data Intelligence"
  },
  {
    "id": "db-fund-39",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Según Databricks, ¿qué describe mejor la ingestión de datos?",
    "options": [
      { "id": "a", "text": "Solo almacenar dashboards" },
      { "id": "b", "text": "Importar, procesar y almacenar datos de fuentes diversas para analytics/decisiones" },
      { "id": "c", "text": "Solo transformar datos estructurados" },
      { "id": "d", "text": "Solo ejecutar modelos generativos" }
    ],
    "correctIds": ["b"],
    "explanation": "Ingesta es el proceso de traer y preparar datos de fuentes externas.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-40",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito de la transformación de datos?",
    "options": [
      { "id": "a", "text": "Convertir raw extraído en datasets usables" },
      { "id": "b", "text": "Evitar cualquier cambio en datos raw" },
      { "id": "c", "text": "Crear formatos propietarios" },
      { "id": "d", "text": "Eliminar la necesidad de BI" }
    ],
    "correctIds": ["a"],
    "explanation": "Transformar datos crudos en formatos listos para el negocio.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-41",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué elimina serverless compute según Databricks?",
    "options": [
      { "id": "a", "text": "La necesidad de escalar recursos" },
      { "id": "b", "text": "Complejidades asociadas a gestionar infraestructura" },
      { "id": "c", "text": "El uso de datos no estructurados" },
      { "id": "d", "text": "La auditoría de acceso" }
    ],
    "correctIds": ["b"],
    "explanation": "Elimina la carga de administrar la infraestructura subyacente.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-42",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En serverless compute, ¿quién se encarga de infraestructura y escalado?",
    "options": [
      { "id": "a", "text": "El usuario final manualmente" },
      { "id": "b", "text": "Databricks, configurando servidores y escalando automáticamente" },
      { "id": "c", "text": "Solo el proveedor cloud sin integración" },
      { "id": "d", "text": "El equipo de BI con scripts locales" }
    ],
    "correctIds": ["b"],
    "explanation": "Databricks gestiona todo automáticamente.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-43",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "true_false",
    "prompt": "“Serverless busca entregar rendimiento óptimo cuando se necesita y evitar desperdicio cuando está idle.”",
    "options": [
      { "id": "true", "text": "Verdadero" },
      { "id": "false", "text": "Falso" }
    ],
    "correctIds": ["true"],
    "explanation": "Ese es el beneficio económico clave de Serverless.",
    "domain": "Arquitectura y Cómputo"
  },
  {
    "id": "db-fund-44",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo define la transcripción “data governance”?",
    "options": [
      { "id": "a", "text": "Solo control de dashboards" },
      { "id": "b", "text": "Principios, prácticas y herramientas para gestionar activos de datos durante su ciclo de vida" },
      { "id": "c", "text": "Solo cifrado de almacenamiento" },
      { "id": "d", "text": "Solo control de costos" }
    ],
    "correctIds": ["b"],
    "explanation": "Es la gestión integral del ciclo de vida de los datos.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-45",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Según Databricks, ¿data governance se limita a un workload?",
    "options": [
      { "id": "a", "text": "Sí, solo a BI" },
      { "id": "b", "text": "Sí, solo a ML" },
      { "id": "c", "text": "No, abarca toda la plataforma y su gestión alineada a estrategia" },
      { "id": "d", "text": "Solo a data lakes" }
    ],
    "correctIds": ["c"],
    "explanation": "Cubre toda la plataforma y todos los tipos de cargas de trabajo.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-46",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles tres se listan como elementos de una estrategia de gobernanza?",
    "options": [
      { "id": "a", "text": "Data cataloging" },
      { "id": "b", "text": "Data lineage" },
      { "id": "c", "text": "Data security" },
      { "id": "d", "text": "Marketing automation" },
      { "id": "e", "text": "GPU tuning" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Catalogación, linaje y seguridad son pilares.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-47",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Cuáles tres desafíos se mencionan al implementar gobernanza en ecosistemas existentes?",
    "options": [
      { "id": "a", "text": "Vistas fragmentadas del data estate" },
      { "id": "b", "text": "Múltiples herramientas para access management" },
      { "id": "c", "text": "Monitoreo/visibilidad incompletos" },
      { "id": "d", "text": "Tener un único sistema integrado desde el inicio" },
      { "id": "e", "text": "No tener necesidad de compliance" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Fragmentación, múltiples herramientas y falta de visibilidad son retos comunes.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-48",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué se indica como imperativo antes de “transmitir datos a distintos servicios sin control”?",
    "options": [
      { "id": "a", "text": "Copiar los datos varias veces para mayor seguridad" },
      { "id": "b", "text": "Establecer controles de usuario y completar el groundwork para confiabilidad" },
      { "id": "c", "text": "Eliminar auditoría por ser costosa" },
      { "id": "d", "text": "Evitar clasificación de datos" }
    ],
    "correctIds": ["b"],
    "explanation": "Se deben establecer controles de usuario primero para garantizar confianza.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-49",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuáles son tres áreas de preocupación top mencionadas?",
    "options": [
      { "id": "a", "text": "Regulación global de AI, privacidad/protección de datos (por lawsuits), cybercrime con AI" },
      { "id": "b", "text": "Solo almacenamiento barato, solo dashboards, solo notebooks" },
      { "id": "c", "text": "Solo performance de queries" },
      { "id": "d", "text": "Solo licenciamiento" }
    ],
    "correctIds": ["a"],
    "explanation": "Preocupaciones: Regulación AI, Privacidad/Demandas y Cibercrimen.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-50",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de Unity Catalog según Databricks?",
    "options": [
      { "id": "a", "text": "Ser un segundo data lake" },
      { "id": "b", "text": "Unificar gobernanza, sharing y colaboración bajo una herramienta" },
      { "id": "c", "text": "Reemplazar Databricks SQL" },
      { "id": "d", "text": "Eliminar permisos" }
    ],
    "correctIds": ["b"],
    "explanation": "Unificar gobernanza, sharing y colaboración.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-51",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿En qué niveles menciona la transcripción que se conceden permisos con sintaxis familiar?",
    "options": [
      { "id": "a", "text": "Catalogs" },
      { "id": "b", "text": "Schemas (databases)" },
      { "id": "c", "text": "Tables" },
      { "id": "d", "text": "Views" },
      { "id": "e", "text": "Only dashboards" }
    ],
    "correctIds": ["a", "b", "c", "d"],
    "explanation": "Se gestionan permisos en Catalog, Schema, Table y View.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-52",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué captura Unity Catalog automáticamente, según Databricks?",
    "options": [
      { "id": "a", "text": "Solo logs de infraestructura" },
      { "id": "b", "text": "User-level audit logs y lineage sobre creación/uso de activos" },
      { "id": "c", "text": "Solo costos de marketing" },
      { "id": "d", "text": "Solo templates de notebooks" }
    ],
    "correctIds": ["b"],
    "explanation": "Captura auditoría a nivel de usuario y linaje de datos.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-53",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de datos operativos permite consultar Unity Catalog mediante system tables?",
    "options": [
      { "id": "a", "text": "Solo imágenes y videos" },
      { "id": "b", "text": "Audit logs, billable usage y lineage" },
      { "id": "c", "text": "Solo modelos de ML entrenados" },
      { "id": "d", "text": "Solo configuraciones de navegador" }
    ],
    "correctIds": ["b"],
    "explanation": "System tables proveen acceso a logs de auditoría, uso facturable y linaje.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-54",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Según Databricks, Delta Sharing ofrece principalmente:",
    "options": [
      { "id": "a", "text": "Replicación obligatoria de datos entre plataformas" },
      { "id": "b", "text": "Administración centralizada y gobernanza del sharing con monitoreo" },
      { "id": "c", "text": "Solo un repositorio privado de notebooks" },
      { "id": "d", "text": "Eliminación del tracking y auditoría" }
    ],
    "correctIds": ["b"],
    "explanation": "Ofrece administración centralizada, gobernada y monitoreada para compartir datos.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-55",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué Delta Sharing reduce el TCO según Databricks?",
    "options": [
      { "id": "a", "text": "Porque obliga a duplicar datos en cada sistema" },
      { "id": "b", "text": "Porque elimina la necesidad de duplicar datos para compartir" },
      { "id": "c", "text": "Porque vuelve propietario el formato" },
      { "id": "d", "text": "Porque prohíbe colaboración" }
    ],
    "correctIds": ["b"],
    "explanation": "Al no necesitar duplicar datos para compartirlos, se reducen costos de almacenamiento y gestión.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-56",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "true_false",
    "prompt": "“El Marketplace requiere que el receptor tenga un Databricks workspace para recibir productos.”",
    "options": [
      { "id": "true", "text": "Verdadero" },
      { "id": "false", "text": "Falso" }
    ],
    "correctIds": ["false"],
    "explanation": "No requiere un workspace de Databricks; se basa en Delta Sharing (protocolo abierto).",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-57",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Qué menciona la transcripción como accesos/tareas desde la homepage del workspace?",
    "options": [
      { "id": "a", "text": "Importar datos" },
      { "id": "b", "text": "Crear notebooks" },
      { "id": "c", "text": "Crear queries" },
      { "id": "d", "text": "Fabricar hardware" },
      { "id": "e", "text": "Desinstalar el cloud provider" }
    ],
    "correctIds": ["a", "b", "c"],
    "explanation": "Tareas comunes: importar data, crear notebooks, queries, etc.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-58",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Para qué sirve Intelligent Search en el workspace según Databricks?",
    "options": [
      { "id": "a", "text": "Buscar solo información en Internet público" },
      { "id": "b", "text": "Localizar data objects dentro de la plataforma" },
      { "id": "c", "text": "Crear reglas de firewall" },
      { "id": "d", "text": "Hacer ETL declarativo" }
    ],
    "correctIds": ["b"],
    "explanation": "Ayuda a localizar objetos de datos (tablas, modelos, etc.) a través de toda la plataforma.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-59",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es Catalog Explorer según Databricks?",
    "options": [
      { "id": "a", "text": "Un sistema externo de terceros" },
      { "id": "b", "text": "La vista donde se ven catálogos/schemas/tables/views/volumes y lineage; “ventana a Unity Catalog”" },
      { "id": "c", "text": "Un reemplazo de notebooks" },
      { "id": "d", "text": "Un servicio de soporte al cliente" }
    ],
    "correctIds": ["b"],
    "explanation": "Es la interfaz visual para explorar y gestionar los objetos de Unity Catalog y su linaje.",
    "domain": "Gobernanza y Productos"
  },
  {
    "id": "db-fund-60",
    "courseId": "databricks-fundamentals",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué característica distingue a Lakeflow Connect en la transcripción?",
    "options": [
      { "id": "a", "text": "Conectores no-code para ingresar datos y observabilidad/gobernanza completas dentro de Databricks" },
      { "id": "b", "text": "Solo funciona con datos estructurados" },
      { "id": "c", "text": "Requiere copiar datos a mano" },
      { "id": "d", "text": "Elimina la necesidad de seguridad" }
    ],
    "correctIds": ["a"],
    "explanation": "Son conectores 'no-code' para ingesta sencilla con gobernanza y observabilidad integradas.",
    "domain": "Gobernanza y Productos"
  }
]);
