// =============================================================================
// FUNCIONES AI & SQL GENAI — Databricks Certified Generative AI Engineer
// Biblioteca oficial de funciones AI de Unity Catalog explicadas línea por línea
// =============================================================================
window.comandosSqlDatabricksGenAI = [
  {
    category: "Inferencia & Generación con Model Serving",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    comandos: [
      {
        nombre: "ai_query() — Invocación de LLMs",
        descripcion_en: "Executes an inference request against a Databricks Model Serving endpoint or external Foundation Model directly within SQL queries.",
        descripcion_es: "Ejecuta una petición de inferencia contra un endpoint de Databricks Model Serving o Foundation Model directamente dentro de consultas SQL.",
        ejemplos: [
          {
            titulo_en: "Structured sentiment analysis with Foundation Model API",
            titulo_es: "Análisis de sentimiento estructurado con Foundation Model API",
            sql: "SELECT\n  ticket_id,\n  customer_review,\n  ai_query(\n    'databricks-meta-llama-3-70b-instruct',\n    CONCAT('Analyze sentiment (positive/neutral/negative): ', customer_review)\n  ) AS sentiment\nFROM support_tickets;",
            lineas: [
              { code: "SELECT ticket_id, customer_review,", en: "Select source table columns", es: "Selecciona las columnas de la tabla origen" },
              { code: "ai_query(", en: "Invoke the built-in AI SQL function", es: "Invoca la función nativa de IA en SQL" },
              { code: "  'databricks-meta-llama-3-70b-instruct',", en: "Serving endpoint name (Foundation Model API or custom endpoint)", es: "Nombre del endpoint de serving (Foundation Model API o endpoint personalizado)" },
              { code: "  CONCAT('Analyze sentiment: ', customer_review)", en: "Construct the prompt dynamically using row content", es: "Construye el prompt dinámicamente usando el contenido de la fila" },
              { code: ") AS sentiment", en: "Alias the generated output column", es: "Asigna un alias a la columna generada" },
              { code: "FROM support_tickets;", en: "Query runs at scale over Delta table rows", es: "La consulta se ejecuta a escala sobre las filas de la tabla Delta" }
            ]
          },
          {
            titulo_en: "Passing structured JSON schema request to custom endpoint",
            titulo_es: "Pasar solicitud con esquema JSON estructurado a endpoint personalizado",
            sql: "SELECT\n  ai_query(\n    'customer-rag-agent-serving',\n    NAMED_STRUCT('prompt', query_text, 'temperature', 0.1)\n  ) AS agent_response\nFROM user_queries;",
            lineas: [
              { code: "SELECT ai_query(", en: "Invoke custom MLflow pyfunc agent endpoint", es: "Invoca el endpoint del agente personalizado empaquetado con MLflow pyfunc" },
              { code: "  'customer-rag-agent-serving',", en: "Target registered Model Serving endpoint", es: "Endpoint de destino registrado en Model Serving" },
              { code: "  NAMED_STRUCT('prompt', query_text, 'temperature', 0.1)", en: "Pass structured parameters required by the endpoint signature", es: "Pasa parámetros estructurados requeridos por la firma del endpoint" },
              { code: ") AS agent_response FROM user_queries;", en: "Returns the parsed response object", es: "Retorna el objeto de respuesta parseado" }
            ]
          }
        ]
      },
      {
        nombre: "ai_gen() — Generación Textual Directa",
        descripcion_en: "High-level SQL function to generate text from a given prompt using the workspace default foundation model.",
        descripcion_es: "Función SQL de alto nivel para generar texto a partir de un prompt utilizando el modelo fundacional por defecto del workspace.",
        ejemplos: [
          {
            titulo_en: "Generate product marketing summary",
            titulo_es: "Generar resumen publicitario de producto",
            sql: "SELECT\n  product_name,\n  ai_gen(CONCAT('Write a 2-sentence executive description for: ', product_name, ' with features: ', features_list)) AS product_description\nFROM catalog_items;",
            lineas: [
              { code: "SELECT product_name,", en: "Retrieve product identification", es: "Recupera la identificación del producto" },
              { code: "ai_gen(", en: "Quick text generation function", es: "Función rápida de generación de texto" },
              { code: "  CONCAT('Write a 2-sentence...', product_name, ...)", en: "Formulate prompt with length and style constraints", es: "Formula el prompt con restricciones de longitud y estilo" },
              { code: ") AS product_description", en: "Captures the LLM output", es: "Captura la salida del LLM" },
              { code: "FROM catalog_items;", en: "Iterates through Delta catalog items", es: "Itera a través de los elementos del catálogo Delta" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Procesamiento Semántico & Transformación",
    icon: "M3 5h18v2H3V5zm2 5h14v2H5v-2zm4 5h6v2H9v-2z",
    comandos: [
      {
        nombre: "ai_summarize() — Resumen Automático",
        descripcion_en: "Summarizes text columns with optional word count limit, optimized for batch processing of customer feedback and articles.",
        descripcion_es: "Resume columnas de texto con límite opcional de palabras, optimizado para procesamiento por lotes de feedback de clientes y artículos.",
        ejemplos: [
          {
            titulo_en: "Summarize call transcript to 40 words",
            titulo_es: "Resumir transcripción de llamada a 40 palabras",
            sql: "SELECT\n  call_id,\n  ai_summarize(transcript, 40) AS call_summary\nFROM customer_calls\nWHERE duration_sec > 60;",
            lineas: [
              { code: "SELECT call_id,", en: "Select conversation identifier", es: "Selecciona el identificador de conversación" },
              { code: "ai_summarize(transcript, 40)", en: "Summarizes 'transcript' column strictly within 40 words", es: "Resume la columna 'transcript' estrictamente en un máximo de 40 palabras" },
              { code: "AS call_summary", en: "Assigns name to summarized column", es: "Asigna nombre a la columna resumida" },
              { code: "FROM customer_calls WHERE duration_sec > 60;", en: "Filters only valid calls over 1 minute", es: "Filtra solo llamadas válidas de más de 1 minuto" }
            ]
          }
        ]
      },
      {
        nombre: "ai_classify() — Clasificación por Etiquetas",
        descripcion_en: "Classifies input text into one of the provided candidate labels using zero-shot semantic matching.",
        descripcion_es: "Clasifica el texto de entrada en una de las etiquetas candidatas proporcionadas mediante coincidencia semántica zero-shot.",
        ejemplos: [
          {
            titulo_en: "Classify incoming tickets into operational queues",
            titulo_es: "Clasificar tickets entrantes en colas operativas",
            sql: "SELECT\n  ticket_id,\n  ai_classify(\n    message_body,\n    ARRAY('Billing', 'Technical Support', 'Cancellation', 'Sales Inquiry')\n  ) AS assigned_queue\nFROM incoming_messages;",
            lineas: [
              { code: "SELECT ticket_id,", en: "Select ticket ID", es: "Selecciona el ID del ticket" },
              { code: "ai_classify(", en: "Invoke zero-shot classification function", es: "Invoca la función de clasificación zero-shot" },
              { code: "  message_body,", en: "Text column to evaluate", es: "Columna de texto a evaluar" },
              { code: "  ARRAY('Billing', 'Technical Support', 'Cancellation', 'Sales Inquiry')", en: "Array of allowable category labels", es: "Arreglo de etiquetas de categoría permitidas" },
              { code: ") AS assigned_queue", en: "Guarantees return value matches one of the labels", es: "Garantiza que el valor retornado coincide con una de las etiquetas" },
              { code: "FROM incoming_messages;", en: "Executes over incoming queue table", es: "Se ejecuta sobre la tabla de cola entrante" }
            ]
          }
        ]
      },
      {
        nombre: "ai_translate() — Traducción Multilingüe",
        descripcion_en: "Translates text into a target ISO language code, ideal for global data lakes and multilingual RAG pipelines.",
        descripcion_es: "Traduce texto a un código de idioma ISO de destino, ideal para data lakes globales y pipelines RAG multilingües.",
        ejemplos: [
          {
            titulo_en: "Standardize multilingual reviews to English for unified indexing",
            titulo_es: "Estandarizar reseñas multilingües a inglés para indexación unificada",
            sql: "SELECT\n  review_id,\n  ai_translate(review_text, 'en') AS english_review\nFROM global_reviews\nWHERE original_language != 'en';",
            lineas: [
              { code: "SELECT review_id,", en: "Review primary key", es: "Clave primaria de la reseña" },
              { code: "ai_translate(review_text, 'en')", en: "Translates review_text into English ('en')", es: "Traduce review_text hacia el idioma inglés ('en')" },
              { code: "AS english_review", en: "Stores standardized text for vector search indexing", es: "Almacena texto estandarizado para indexación en Vector Search" },
              { code: "FROM global_reviews WHERE original_language != 'en';", en: "Processes only foreign-language entries", es: "Procesa únicamente entradas en idiomas extranjeros" }
            ]
          }
        ]
      },
      {
        nombre: "ai_extract() — Extracción de Entidades",
        descripcion_en: "Extracts specified entities or structured attributes from unstructured text based on a list of keys.",
        descripcion_es: "Extrae entidades especificadas o atributos estructurados de texto no estructurado basándose en una lista de claves.",
        ejemplos: [
          {
            titulo_en: "Extract contract metadata into JSON/Struct columns",
            titulo_es: "Extraer metadatos de contrato en columnas JSON/Struct",
            sql: "SELECT\n  contract_id,\n  ai_extract(\n    contract_text,\n    ARRAY('Effective Date', 'Total Amount', 'Governing Law', 'Termination Notice Days')\n  ) AS contract_entities\nFROM legal_contracts_raw;",
            lineas: [
              { code: "SELECT contract_id,", en: "Contract ID", es: "ID del contrato" },
              { code: "ai_extract(", en: "Built-in structured extractor", es: "Extractor estructurado nativo" },
              { code: "  contract_text,", en: "Unstructured document text", es: "Texto no estructurado del documento" },
              { code: "  ARRAY('Effective Date', 'Total Amount', 'Governing Law', 'Termination Notice Days')", en: "List of attributes to locate and extract", es: "Lista de atributos a localizar y extraer" },
              { code: ") AS contract_entities", en: "Returns a MAP of key-value extracted pairs", es: "Retorna un MAP de pares clave-valor extraídos" },
              { code: "FROM legal_contracts_raw;", en: "Source Bronze legal table", es: "Tabla legal Bronze de origen" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Similitud Semántica & Vector Search",
    icon: "M15.5 14h-.79l-.28-.27A6.5 6.5 0 1014 14.43l.27.28v.79l5 4.99L20.49 19l-4.99-5z",
    comandos: [
      {
        nombre: "ai_similarity() — Similitud de Texto",
        descripcion_en: "Calculates the cosine similarity score (between 0.0 and 1.0) between two text expressions using Databricks embedding models.",
        descripcion_es: "Calcula la puntuación de similitud de coseno (entre 0.0 y 1.0) entre dos expresiones de texto utilizando modelos de embeddings de Databricks.",
        ejemplos: [
          {
            titulo_en: "Deduplicate product listings based on semantic match",
            titulo_es: "Desduplicar listados de productos por coincidencia semántica",
            sql: "SELECT\n  a.product_id AS prod_a,\n  b.product_id AS prod_b,\n  ai_similarity(a.description, b.description) AS similarity_score\nFROM products a\nJOIN products b\n  ON a.category = b.category AND a.product_id < b.product_id\nWHERE ai_similarity(a.description, b.description) > 0.88;",
            lineas: [
              { code: "SELECT a.product_id AS prod_a, b.product_id AS prod_b,", en: "Compare distinct pairs of products", es: "Compara pares distintos de productos" },
              { code: "ai_similarity(a.description, b.description) AS similarity_score", en: "Computes cosine embedding similarity", es: "Calcula la similitud de coseno de embeddings" },
              { code: "FROM products a JOIN products b ON ...", en: "Join within the same category without self-comparison", es: "Unión dentro de la misma categoría sin auto-comparación" },
              { code: "WHERE ai_similarity(a.description, b.description) > 0.88;", en: "Filters only highly similar potential duplicates", es: "Filtra únicamente duplicados potenciales altamente similares" }
            ]
          }
        ]
      },
      {
        nombre: "vector_search() — Consultas Vectoriales SQL",
        descripcion_en: "Queries a Mosaic AI Vector Search index directly from SQL to retrieve the top-K nearest neighbors for a query string.",
        descripcion_es: "Consulta un índice de Mosaic AI Vector Search directamente desde SQL para recuperar los K vecinos más cercanos para un texto de búsqueda.",
        ejemplos: [
          {
            titulo_en: "Retrieve relevant knowledge chunks for a customer query",
            titulo_es: "Recuperar fragmentos de conocimiento relevantes para una consulta de cliente",
            sql: "SELECT *\nFROM VECTOR_SEARCH(\n  INDEX => 'main.knowledge_base.kb_delta_sync_index',\n  QUERY_TEXT => 'How do I configure Single Sign-On with SAML?',\n  NUM_RESULTS => 3\n);",
            lineas: [
              { code: "SELECT *", en: "Select retrieved chunk text, metadata, and score", es: "Selecciona el texto del fragmento recuperado, metadatos y score" },
              { code: "FROM VECTOR_SEARCH(", en: "Table-valued SQL function for vector search", es: "Función SQL con valor de tabla para búsqueda vectorial" },
              { code: "  INDEX => 'main.knowledge_base.kb_delta_sync_index',", en: "Three-level namespace identifier of the Vector Search index", es: "Identificador de espacio de nombres de tres niveles del índice Vector Search" },
              { code: "  QUERY_TEXT => 'How do I configure SSO with SAML?',", en: "Natural language query (auto-embedded if index is managed)", es: "Consulta en lenguaje natural (generación de embedding automática si el índice es managed)" },
              { code: "  NUM_RESULTS => 3", en: "Top-K chunks to return", es: "Top-K fragmentos a retornar" },
              { code: ");", en: "Can be joined with LLM generation in SQL chains", es: "Puede unirse con generación de LLM en cadenas SQL" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Gobernanza & Seguridad Unity Catalog",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
    comandos: [
      {
        nombre: "GRANT EXECUTE ON FUNCTION — Permisos RBAC de IA",
        descripcion_en: "Grants execution rights on AI Functions and registered MLflow models in Unity Catalog to specific user groups or service principals.",
        descripcion_es: "Otorga derechos de ejecución sobre Funciones AI y modelos MLflow registrados en Unity Catalog a grupos de usuarios o service principals específicos.",
        ejemplos: [
          {
            titulo_en: "Grant AI function access to analysts group",
            titulo_es: "Otorgar acceso a funciones AI al grupo de analistas",
            sql: "GRANT USAGE ON CATALOG main TO `data_analysts`;\nGRANT USAGE ON SCHEMA main.ai_tools TO `data_analysts`;\nGRANT EXECUTE ON FUNCTION main.ai_tools.ai_query TO `data_analysts`;",
            lineas: [
              { code: "GRANT USAGE ON CATALOG main TO `data_analysts`;", en: "Top-level catalog permission required for navigation", es: "Permiso de catálogo de nivel superior requerido para navegación" },
              { code: "GRANT USAGE ON SCHEMA main.ai_tools TO `data_analysts`;", en: "Schema-level permission required to access functions", es: "Permiso de nivel de esquema requerido para acceder a funciones" },
              { code: "GRANT EXECUTE ON FUNCTION main.ai_tools.ai_query TO `data_analysts`;", en: "Permits group to invoke the function without exposing model endpoints directly", es: "Permite al grupo invocar la función sin exponer endpoints del modelo directamente" }
            ]
          }
        ]
      },
      {
        nombre: "CREATE CONNECTION — Conexiones Seguras a Modelos Externos",
        descripcion_en: "Creates a secure Unity Catalog connection to external LLM providers (OpenAI, Anthropic, Bedrock) storing credentials securely.",
        descripcion_es: "Crea una conexión segura en Unity Catalog hacia proveedores externos de LLM (OpenAI, Anthropic, Bedrock) almacenando credenciales de forma segura.",
        ejemplos: [
          {
            titulo_en: "Configure secure external connection for OpenAI model serving",
            titulo_es: "Configurar conexión externa segura para Model Serving con OpenAI",
            sql: "CREATE CONNECTION openai_prod_conn\nTYPE OPENAI\nOPTIONS (\n  host 'api.openai.com',\n  api_key secret('genai_scope', 'openai_prod_key')\n);\nGRANT USE CONNECTION ON CONNECTION openai_prod_conn TO `ml_engineers`;",
            lineas: [
              { code: "CREATE CONNECTION openai_prod_conn", en: "Unity Catalog secure connection object", es: "Objeto de conexión segura en Unity Catalog" },
              { code: "TYPE OPENAI", en: "Specifies external provider type", es: "Especifica el tipo de proveedor externo" },
              { code: "  api_key secret('genai_scope', 'openai_prod_key')", en: "Uses Databricks Secrets — NO plain-text API keys in code", es: "Utiliza Databricks Secrets — NUNCA claves API en texto plano" },
              { code: "GRANT USE CONNECTION ON CONNECTION ... TO `ml_engineers`;", en: "Allows ML engineers to bind serving endpoints to this connection", es: "Permite a los ingenieros de ML vincular endpoints de serving a esta conexión" }
            ]
          }
        ]
      }
    ]
  }
];
