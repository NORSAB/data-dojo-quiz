# Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)
## Domain 1: Plan and manage an Azure AI solution (104 Preguntas)

> **Total de Preguntas en esta sección**: 104
> **Cobertura Oficial**: Microsoft Learn Exam Guide 2026 (CertSafari AI-103 356 Qs)

---

### Pregunta 1: A startup expects unpredictable, low-volume traffic to its generative AI feature and wants to avoid provisioning and paying for dedicated virtual machine capacity while the feature is idle. Which Foundry Models deployment option fits best?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Serverless deployment billed per token consumed through a hosted API
- **B**: Managed compute deployment billed for dedicated virtual machine core hours
- **C**: A hub-based deployment requiring a reserved GPU cluster around the clock
- **D**: A fine-tuning job that trains a new model copy for every incoming request

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Serverless deployment billed per token consumed through a hosted API**

Serverless deployment bills per token processed through a Microsoft-hosted API, so there is no idle compute cost during periods without traffic.

**Analysis of options:**
• **(A)**: Correct. Serverless deployment bills per token processed through a Microsoft-hosted API, so there is no idle compute cost during periods without traffic.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Una startup espera tráfico impredecible y de bajo volumen hacia su función de IA generativa y desea evitar aprovisionar y pagar por capacidad de máquina virtual dedicada mientras la función está inactiva. ¿Qué opción de despliegue de Foundry Models se adapta mejor?

- **A**: Despliegue sin servidor (Serverless) facturado por token consumido mediante una API alojada
- **B**: Despliegue con cómputo administrado facturado por horas de núcleos de máquina virtual dedicada
- **C**: Un despliegue basado en hub que requiere un clúster de GPU reservado las 24 horas
- **D**: Un trabajo de fine-tuning que entrena una copia nueva del modelo para cada solicitud entrante

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue sin servidor (Serverless) facturado por token consumido mediante una API alojada**

El despliegue Serverless factura por token procesado a través de una API administrada por Microsoft, por lo que no hay costo por cómputo inactivo durante periodos sin tráfico.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Serverless factura por token procesado a través de una API administrada por Microsoft, por lo que no hay costo por cómputo inactivo durante periodos sin tráfico.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 2: A travel-assistant agent must answer questions about breaking flight-delay news from today, with source citations shown to the user. Which tool should the agent use?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Web Search (Bing grounding), which retrieves current public information and returns citations
- **B**: File Search, which searches only documents the developer previously uploaded
- **C**: Code Interpreter, which executes sandboxed Python but has no internet access
- **D**: Azure AI Search tool, querying an existing static search index only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Web Search (Bing grounding), which retrieves current public information and returns citations**

Web Search retrieves real-time public web data with citations, making it ideal for breaking news that occurred after model training cutoffs.

**Analysis of options:**
• **(A)**: Correct. Web Search retrieves real-time public web data with citations, making it ideal for breaking news that occurred after model training cutoffs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Un agente asistente de viajes debe responder preguntas sobre noticias de última hora sobre retrasos de vuelos de hoy, mostrando citas de fuentes al usuario. ¿Qué herramienta debe utilizar el agente?

- **A**: Web Search (fundamentación con Bing), que recupera información pública actual y devuelve citas
- **B**: File Search, que busca únicamente en documentos cargados previamente por el desarrollador
- **C**: Code Interpreter, que ejecuta Python en sandbox pero no tiene acceso a internet
- **D**: Herramienta Azure AI Search, consultando únicamente un índice de búsqueda estático existente

**Explicación en Español**:
**Respuesta Correcta: (A) Web Search (fundamentación con Bing), que recupera información pública actual y devuelve citas**

Web Search recupera datos públicos de la web en tiempo real con citas, haciéndolo ideal para noticias de última hora posteriores al corte de entrenamiento.

**Análisis de opciones:**
• **(A)**: Correcto. Web Search recupera datos públicos de la web en tiempo real con citas, haciéndolo ideal para noticias de última hora posteriores al corte de entrenamiento.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 3: A company needs to run a lightweight model on resource-constrained edge devices with strict latency budgets and low cost per request for high-volume classification. Which model family should be selected?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Small Language Models (SLMs) such as Phi-3.5-mini / Phi-4
- **B**: Large multimodal reasoning models such as GPT-4o
- **C**: Deep reasoning models with extensive chain-of-thought such as OpenAI o1
- **D**: Vision-only embedding models without text generation capabilities

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Small Language Models (SLMs) such as Phi-3.5-mini / Phi-4**

SLMs like the Phi family are designed specifically for compact footprint, low latency, and cost-effective local or edge inference.

**Analysis of options:**
• **(A)**: Correct. SLMs like the Phi family are designed specifically for compact footprint, low latency, and cost-effective local or edge inference.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Una empresa necesita ejecutar un modelo ligero en dispositivos perimetrales (edge) con recursos limitados, presupuestos de latencia estrictos y bajo costo por solicitud para clasificación de alto volumen. ¿Qué familia de modelos debe seleccionarse?

- **A**: Modelos de Lenguaje Pequeños (SLM) como Phi-3.5-mini / Phi-4
- **B**: Modelos de razonamiento multimodal grandes como GPT-4o
- **C**: Modelos de razonamiento profundo con cadena de pensamiento extensa como OpenAI o1
- **D**: Modelos de incrustación (embedding) solo de visión sin capacidades de generación de texto

**Explicación en Español**:
**Respuesta Correcta: (A) Modelos de Lenguaje Pequeños (SLM) como Phi-3.5-mini / Phi-4**

Los SLM como la familia Phi están diseñados específicamente para una huella compacta, baja latencia e inferencia rentable local o en el borde.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM como la familia Phi están diseñados específicamente para una huella compacta, baja latencia e inferencia rentable local o en el borde.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 4: An AI agent needs to perform calculations, plot statistical charts, and clean tabular CSV data dynamically during user conversations. Which built-in Foundry tool should be configured?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Code Interpreter tool
- **B**: Azure AI Search tool
- **C**: Bing Grounding Web Search tool
- **D**: Azure Translator tool

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Code Interpreter tool**

Code Interpreter allows agents to write and execute sandboxed Python code to solve math problems, process tabular data, and generate image charts.

**Analysis of options:**
• **(A)**: Correct. Code Interpreter allows agents to write and execute sandboxed Python code to solve math problems, process tabular data, and generate image charts.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Un agente de IA necesita realizar cálculos, graficar diagramas estadísticos y limpiar datos tabulares CSV dinámicamente durante conversaciones de usuario. ¿Qué herramienta integrada de Foundry debe configurarse?

- **A**: Herramienta Code Interpreter
- **B**: Herramienta Azure AI Search
- **C**: Herramienta Bing Grounding Web Search
- **D**: Herramienta Azure Translator

**Explicación en Español**:
**Respuesta Correcta: (A) Herramienta Code Interpreter**

Code Interpreter permite a los agentes escribir y ejecutar código Python en un entorno seguro para resolver matemáticas, procesar datos tabulares y generar gráficos.

**Análisis de opciones:**
• **(A)**: Correcto. Code Interpreter permite a los agentes escribir y ejecutar código Python en un entorno seguro para resolver matemáticas, procesar datos tabulares y generar gráficos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 5: An enterprise requires searching across millions of internal technical PDFs with hybrid dense-vector similarity and BM25 full-text keyword search with semantic reranking. Which service should ground the generative model?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Azure AI Search with Semantic Reranker enabled
- **B**: Azure Blob Storage static website search
- **C**: Azure Cosmos DB without vector indexing
- **D**: Foundry File Search with basic text matching only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Search with Semantic Reranker enabled**

Azure AI Search provides enterprise-grade hybrid search (BM25 + Vector HNSW) combined with deep Semantic Reranker for the highest relevance in RAG.

**Analysis of options:**
• **(A)**: Correct. Azure AI Search provides enterprise-grade hybrid search (BM25 + Vector HNSW) combined with deep Semantic Reranker for the highest relevance in RAG.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Una empresa requiere buscar en millones de PDFs técnicos internos con similitud vectorial densa híbrida y búsqueda por palabras clave de texto completo BM25 con reclasificación semántica. ¿Qué servicio debe fundamentar el modelo generativo?

- **A**: Azure AI Search con Semantic Reranker habilitado
- **B**: Búsqueda de sitio web estático en Azure Blob Storage
- **C**: Azure Cosmos DB sin indexación vectorial
- **D**: Foundry File Search solo con coincidencia de texto básica

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Search con Semantic Reranker habilitado**

Azure AI Search proporciona búsqueda híbrida empresarial (BM25 + Vector HNSW) combinada con Semantic Reranker para la máxima relevancia en RAG.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Search proporciona búsqueda híbrida empresarial (BM25 + Vector HNSW) combinada con Semantic Reranker para la máxima relevancia en RAG.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 6: You are designing an AI agent that requires long-term conversational memory across multiple sessions for authenticated users. Which memory integration approach is most appropriate?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: External stateful database (e.g., Azure Cosmos DB or Lakebase Agent Memory) storing structured summaries and vectorized history linked by User ID
- **B**: Keeping all raw messages in a single permanent in-memory Python variable inside the client application
- **C**: Appending the entire lifetime chat history to the system prompt of every request without truncation
- **D**: Relying on stateless REST endpoints without storing conversation identifiers

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) External stateful database (e.g., Azure Cosmos DB or Lakebase Agent Memory) storing structured summaries and vectorized history linked by User ID**

Long-term memory across sessions requires an external persistent datastore indexed by user identifier, utilizing semantic search or entity summaries to retrieve relevant past context within context window limits.

**Analysis of options:**
• **(A)**: Correct. Long-term memory across sessions requires an external persistent datastore indexed by user identifier, utilizing semantic search or entity summaries to retrieve relevant past context within context window limits.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Está diseñando un agente de IA que requiere memoria conversacional a largo plazo a través de múltiples sesiones para usuarios autenticados. ¿Qué enfoque de integración de memoria es más apropiado?

- **A**: Base de datos con estado externa (ej. Azure Cosmos DB o Lakebase Agent Memory) que almacena resúmenes estructurados e historial vectorizado vinculado por ID de usuario
- **B**: Mantener todos los mensajes sin procesar en una sola variable de Python en memoria permanente dentro de la app cliente
- **C**: Adjuntar todo el historial de chat de por vida al prompt del sistema en cada solicitud sin truncamiento
- **D**: Confiar en puntos de conexión REST sin estado sin almacenar identificadores de conversación

**Explicación en Español**:
**Respuesta Correcta: (A) Base de datos con estado externa (ej. Azure Cosmos DB o Lakebase Agent Memory) que almacena resúmenes estructurados e historial vectorizado vinculado por ID de usuario**

La memoria a largo plazo entre sesiones requiere un almacén de datos persistente externo indexado por identificador de usuario, utilizando búsqueda semántica o resúmenes de entidades para recuperar contexto pasado relevante sin exceder la ventana de contexto.

**Análisis de opciones:**
• **(A)**: Correcto. La memoria a largo plazo entre sesiones requiere un almacén de datos persistente externo indexado por identificador de usuario, utilizando búsqueda semántica o resúmenes de entidades para recuperar contexto pasado relevante sin exceder la ventana de contexto.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 7: Scenario 7: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 7: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 8: Scenario 8: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 8: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 9: Scenario 9: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 9: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 10: Scenario 10: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 10: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 11: Scenario 11: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 11: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 12: Scenario 12: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 12: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 13: Scenario 13: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 13: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 14: Scenario 14: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 14: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 15: Scenario 15: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 15: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 16: Scenario 16: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 16: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 17: Scenario 17: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 17: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 18: Scenario 18: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 18: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 19: Scenario 19: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 19: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 20: Scenario 20: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 20: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 21: Scenario 21: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 21: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 22: Scenario 22: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 22: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 23: Scenario 23: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 23: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 24: Scenario 24: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 24: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 25: Scenario 25: When selecting between Azure OpenAI GPT-4o and Phi-3.5-mini for an automated email triaging pipeline processing 500,000 tickets daily, which technical factor justifies deploying Phi-3.5-mini?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories
- **B**: Support for 128k output tokens per single generation
- **C**: Native multi-modal video synthesis capabilities
- **D**: Guaranteed 100% zero-shot accuracy across obscure languages

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Significantly lower token inference cost and faster time-to-first-token for well-defined classification categories**

SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.

**Analysis of options:**
• **(A)**: Correct. SLMs offer drastic cost savings and lower latency for structured, specialized classification tasks compared to heavy frontier LLMs.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 25: Al seleccionar entre Azure OpenAI GPT-4o y Phi-3.5-mini para un canal automatizado de clasificación de correos que procesa 500,000 tickets diarios, ¿qué factor técnico justifica desplegar Phi-3.5-mini?

- **A**: Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas
- **B**: Soporte para 128k tokens de salida por generación individual
- **C**: Capacidades nativas de síntesis de video multimodal
- **D**: Precisión zero-shot del 100% garantizada en idiomas poco comunes

**Explicación en Español**:
**Respuesta Correcta: (A) Costo de inferencia por token significativamente menor y tiempo hasta el primer token más rápido para categorías de clasificación bien definidas**

Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.

**Análisis de opciones:**
• **(A)**: Correcto. Los SLM ofrecen ahorros de costos drásticos y menor latencia para tareas de clasificación estructuradas y especializadas frente a LLMs de frontera.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 26: Scenario 26: Which Foundry service component allows an AI developer to connect external custom REST APIs as callable tools for an autonomous agent?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.1: Choose the appropriate Foundry services for generative AI and agents  

#### Opciones (EN):
- **A**: OpenAPI tool definition / Function Calling schema integrated into the Agent definition
- **B**: Azure Blob Storage Lifecycle Management policy
- **C**: Static HTML parser plugin
- **D**: Azure Virtual Network peering table

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenAPI tool definition / Function Calling schema integrated into the Agent definition**

Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.

**Analysis of options:**
• **(A)**: Correct. Foundry agents support custom tool integration via OpenAPI 3.0 specs and JSON schema function calling.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Escenario 26: ¿Qué componente de servicio de Foundry permite a un desarrollador de IA conectar APIs REST personalizadas externas como herramientas invocables para un agente autónomo?

- **A**: Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente
- **B**: Directiva de administración del ciclo de vida de Azure Blob Storage
- **C**: Plugin analizador de HTML estático
- **D**: Tabla de emparejamiento de Azure Virtual Network

**Explicación en Español**:
**Respuesta Correcta: (A) Definición de herramienta OpenAPI / esquema de Function Calling integrado en la definición del Agente**

Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.

**Análisis de opciones:**
• **(A)**: Correcto. Los agentes de Foundry admiten la integración de herramientas personalizadas mediante especificaciones OpenAPI 3.0 y esquemas de llamada a funciones JSON.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 27: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 28: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 29: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 30: Infrastructure Setup 4: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 4: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 31: Infrastructure Setup 5: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 5: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 32: Infrastructure Setup 6: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 6: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 33: Infrastructure Setup 7: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 7: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 34: Infrastructure Setup 8: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 8: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 35: Infrastructure Setup 9: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 9: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 36: Infrastructure Setup 10: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 10: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 37: Infrastructure Setup 11: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 11: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 38: Infrastructure Setup 12: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 12: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 39: Infrastructure Setup 13: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 13: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 40: Infrastructure Setup 14: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 14: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 41: Infrastructure Setup 15: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 15: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 42: Infrastructure Setup 16: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 16: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 43: Infrastructure Setup 17: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 17: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 44: Infrastructure Setup 18: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 18: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 45: Infrastructure Setup 19: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 19: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 46: Infrastructure Setup 20: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 20: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 47: Infrastructure Setup 21: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 21: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 48: Infrastructure Setup 22: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 22: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 49: Infrastructure Setup 23: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 23: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 50: Infrastructure Setup 24: You need to initialize an `AIProjectClient` in Python using the `azure-ai-projects` SDK authenticated via Microsoft Entra ID. Which code snippet represents the standard implementation?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.

**Analysis of options:**
• **(A)**: Correct. The `AIProjectClient.from_connection_string` method with `DefaultAzureCredential` is the official Microsoft standard for secure, keyless Entra ID authentication in Foundry.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 24: Necesita inicializar un `AIProjectClient` en Python utilizando el SDK `azure-ai-projects` autenticado mediante Microsoft Entra ID. ¿Qué fragmento de código representa la implementación estándar?

- **A**: from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())
- **B**: import openai; client = openai.Client(api_key='hardcoded_plain_text_key')
- **C**: from azure.ai.inference import ModelClient; client = ModelClient(auth_type='anonymous_guest')
- **D**: client = Foundry.connect(database='master', user='admin', password='password')

**Explicación en Español**:
**Respuesta Correcta: (A) from azure.ai.projects import AIProjectClient; from azure.identity import DefaultAzureCredential; client = AIProjectClient.from_connection_string(conn_str=connection_string, credential=DefaultAzureCredential())**

El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.

**Análisis de opciones:**
• **(A)**: Correcto. El método `AIProjectClient.from_connection_string` con `DefaultAzureCredential` es el estándar oficial de Microsoft para autenticación segura sin claves con Entra ID en Foundry.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 51: Infrastructure Setup 25: In Microsoft Foundry architecture, what is the primary relationship between a Foundry Hub and a Foundry Project?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents
- **B**: A Project is the billing container, while a Hub is only used for temporary chat playground testing
- **C**: Hubs and Projects are identical resources that cannot share Azure OpenAI connections
- **D**: A Project must contain multiple Hubs across different Azure tenants

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) A Hub is the top-level resource managing security, compute, and connections; Projects are child workspaces where teams build models and agents**

In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.

**Analysis of options:**
• **(A)**: Correct. In Azure AI Foundry, the Hub provides enterprise governance, Key Vault, Storage, and connection sharing, while Projects provide isolated workspaces for collaborative experimentation and development.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 25: En la arquitectura de Microsoft Foundry, ¿cuál es la relación principal entre un Foundry Hub y un Foundry Project?

- **A**: Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes
- **B**: Un Project es el contenedor de facturación, mientras que un Hub solo se utiliza para pruebas temporales en el playground
- **C**: Los Hubs y Projects son recursos idénticos que no pueden compartir conexiones de Azure OpenAI
- **D**: Un Project debe contener múltiples Hubs en diferentes inquilinos de Azure

**Explicación en Español**:
**Respuesta Correcta: (A) Un Hub es el recurso de nivel superior que administra seguridad, cómputo y conexiones; los Projects son áreas de trabajo secundarias donde los equipos construyen modelos y agentes**

En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.

**Análisis de opciones:**
• **(A)**: Correcto. En Azure AI Foundry, el Hub proporciona gobernanza empresarial, Key Vault, Storage y recursos compartidos, mientras que los Projects proporcionan espacios de trabajo aislados para experimentación colaborativa.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 52: Infrastructure Setup 26: Which deployment type in Azure OpenAI provides dedicated Provisioned Throughput Units (PTUs) with consistent latency and guaranteed throughput across multiple regions without regional quota limits?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.2: Set up AI solutions in Foundry  

#### Opciones (EN):
- **A**: Global Provisioned deployment
- **B**: Standard Pay-as-you-go Regional deployment
- **C**: Data Zone Batch processing deployment
- **D**: Serverless Consumption Tier with burst throttling

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Global Provisioned deployment**

Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.

**Analysis of options:**
• **(A)**: Correct. Global Provisioned deployment reserves dedicated PTUs while routing inference dynamically across Azure global infrastructure for maximum availability and consistent latency.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Configuración de Infraestructura 26: ¿Qué tipo de despliegue en Azure OpenAI proporciona Unidades de Rendimiento Aprovisionadas (PTU) dedicadas con latencia constante y rendimiento garantizado en múltiples regiones sin límites de cuota regional?

- **A**: Despliegue Global Provisioned (Aprovisionado Global)
- **B**: Despliegue regional estándar de pago por uso
- **C**: Despliegue de procesamiento por lotes Data Zone Batch
- **D**: Nivel de consumo sin servidor con limitación por ráfagas

**Explicación en Español**:
**Respuesta Correcta: (A) Despliegue Global Provisioned (Aprovisionado Global)**

El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.

**Análisis de opciones:**
• **(A)**: Correcto. El despliegue Global Provisioned reserva PTUs dedicadas mientras enruta la inferencia dinámicamente a través de la infraestructura global de Azure para máxima disponibilidad y latencia constante.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 53: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 54: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 55: Security & Monitoring Case 3: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 3: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 56: Security & Monitoring Case 4: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 4: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 57: Security & Monitoring Case 5: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 5: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 58: Security & Monitoring Case 6: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 6: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 59: Security & Monitoring Case 7: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 7: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 60: Security & Monitoring Case 8: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 8: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 61: Security & Monitoring Case 9: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 9: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 62: Security & Monitoring Case 10: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 10: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 63: Security & Monitoring Case 11: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 11: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 64: Security & Monitoring Case 12: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 12: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 65: Security & Monitoring Case 13: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 13: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 66: Security & Monitoring Case 14: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 14: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 67: Security & Monitoring Case 15: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 15: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 68: Security & Monitoring Case 16: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 16: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 69: Security & Monitoring Case 17: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 17: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 70: Security & Monitoring Case 18: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 18: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 71: Security & Monitoring Case 19: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 19: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 72: Security & Monitoring Case 20: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 20: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 73: Security & Monitoring Case 21: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 21: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 74: Security & Monitoring Case 22: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 22: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 75: Security & Monitoring Case 23: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 23: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 76: Security & Monitoring Case 24: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 24: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 77: Security & Monitoring Case 25: When an application experiences HTTP 429 'Too Many Requests' errors from an Azure OpenAI deployment, which two mitigation strategies should be implemented? (Select 2)

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Implement exponential backoff with jitter retry logic in the client application
- **B**: Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier
- **C**: Disable TLS 1.3 encryption on the virtual network
- **D**: Switch authentication from Managed Identity to anonymous public access
- **E**: Delete and recreate the Foundry project for each request

**Respuesta Correcta**: **A, B**

#### Explicación Oficial (EN):
**Correct Answer: (A, B) Implement exponential backoff with jitter retry logic in the client application; Increase TPM (Tokens Per Minute) quota or switch to Global Provisioned PTU tier**

HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.

**Analysis of options:**
• **(A)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(B)**: Correct. HTTP 429 indicates rate limiting. Proper retry policies with exponential backoff and quota/throughput adjustments resolve rate limits.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(E)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 25: Cuando una aplicación experimenta errores HTTP 429 'Too Many Requests' desde un despliegue de Azure OpenAI, ¿qué dos estrategias de mitigación deben implementarse? (Seleccione 2)

- **A**: Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente
- **B**: Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned
- **C**: Deshabilitar el cifrado TLS 1.3 en la red virtual
- **D**: Cambiar la autenticación de Managed Identity a acceso público anónimo
- **E**: Eliminar y volver a crear el proyecto de Foundry para cada solicitud

**Explicación en Español**:
**Respuesta Correcta: (A, B) Implementar lógica de reintento con retroceso exponencial (exponential backoff) y jitter en la aplicación cliente; Aumentar la cuota de TPM (Tokens Por Minuto) o cambiar al nivel de PTU Global Provisioned**

HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.

**Análisis de opciones:**
• **(A)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(B)**: Correcto. HTTP 429 indica limitación de tasa. Políticas de reintento con retroceso exponencial y ajustes de cuota/rendimiento resuelven las limitaciones.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(E)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 78: Security & Monitoring Case 26: Which Azure RBAC role provides the minimum necessary permissions for a developer to build, evaluate, and run prompt flows and agent code in a Foundry Project without granting subscription management rights?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.3: Manage, monitor, and secure AI systems  

#### Opciones (EN):
- **A**: Azure AI Developer (or Azure AI User)
- **B**: Subscription Owner
- **C**: Storage Blob Data Contributor only
- **D**: Reader on the resource group with no write access

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Azure AI Developer (or Azure AI User)**

`Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.

**Analysis of options:**
• **(A)**: Correct. `Azure AI Developer` gives project-level development permissions (models, endpoints, flows) adhering to the principle of least privilege.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Seguridad y Monitoreo 26: ¿Qué rol de Azure RBAC proporciona los permisos mínimos necesarios para que un desarrollador construya, evalúe y ejecute flujos de avisos y código de agentes en un proyecto de Foundry sin otorgar derechos de administración de suscripción?

- **A**: Azure AI Developer (o Azure AI User)
- **B**: Subscription Owner (Propietario de Suscripción)
- **C**: Storage Blob Data Contributor únicamente
- **D**: Reader (Lector) en el grupo de recursos sin acceso de escritura

**Explicación en Español**:
**Respuesta Correcta: (A) Azure AI Developer (o Azure AI User)**

`Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.

**Análisis de opciones:**
• **(A)**: Correcto. `Azure AI Developer` otorga permisos de desarrollo a nivel de proyecto (modelos, endpoints, flujos) cumpliendo con el principio de mínimo privilegio.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 79: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 80: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 81: Responsible AI Case 3: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 3: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 82: Responsible AI Case 4: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 4: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 83: Responsible AI Case 5: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 5: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 84: Responsible AI Case 6: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 6: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 85: Responsible AI Case 7: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 7: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 86: Responsible AI Case 8: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 8: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 87: Responsible AI Case 9: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 9: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 88: Responsible AI Case 10: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 10: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 89: Responsible AI Case 11: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 11: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 90: Responsible AI Case 12: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 12: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 91: Responsible AI Case 13: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 13: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 92: Responsible AI Case 14: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 14: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 93: Responsible AI Case 15: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 15: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 94: Responsible AI Case 16: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 16: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 95: Responsible AI Case 17: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 17: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 96: Responsible AI Case 18: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 18: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 97: Responsible AI Case 19: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 19: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 98: Responsible AI Case 20: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 20: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 99: Responsible AI Case 21: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 21: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 100: Responsible AI Case 22: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 22: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 101: Responsible AI Case 23: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 23: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 102: Responsible AI Case 24: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 24: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 103: Responsible AI Case 25: Which Azure AI Content Safety feature is specifically designed to detect and block malicious prompt attacks that attempt to jailbreak foundation models or override system instructions?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)
- **B**: Custom Neural Voice profiler
- **C**: OCR layout table extractor
- **D**: Semantic text reranker

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Direct Attacks (User Prompt Jailbreak Detection)**

Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.

**Analysis of options:**
• **(A)**: Correct. Prompt Shields analyze incoming prompts to detect and neutralize adversarial jailbreak attempts that seek to bypass safety guardrails.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 25: ¿Qué característica de Azure AI Content Safety está diseñada específicamente para detectar y bloquear ataques maliciosos de avisos que intentan realizar jailbreak a modelos fundamentales o anular las instrucciones del sistema?

- **A**: Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)
- **B**: Generador de perfiles Custom Neural Voice
- **C**: Extractor de tablas de diseño OCR
- **D**: Reclasificador de texto semántico

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques directos (detección de jailbreak en avisos del usuario)**

Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.

**Análisis de opciones:**
• **(A)**: Correcto. Prompt Shields analiza los prompts entrantes para detectar y neutralizar intentos maliciosos de jailbreak que buscan eludir las barreras de seguridad.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 104: Responsible AI Case 26: An agent processes untrusted external documents from emails and feeds them into an LLM context. What protection should be enabled to prevent third-party indirect instructions from hijacking agent tool calls?

**Dominio**: Domain 1: Plan and manage an Azure AI solution  
**Subdominio**: Subdomain 1.4: Implement responsible AI across generative AI and agentic systems  

#### Opciones (EN):
- **A**: Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)
- **B**: Increasing the LLM temperature to 1.5
- **C**: Disabling human-in-the-loop tool approvals
- **D**: Using single-shot regex filters exclusively

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Prompt Shields for Indirect Attacks (Document / Indirect Prompt Injection Shield)**

Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.

**Analysis of options:**
• **(A)**: Correct. Indirect Prompt Shields inspect untrusted external document context to detect embedded adversarial instructions before they reach the model.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de IA Responsable 26: Un agente procesa documentos externos no confiables de correos electrónicos y los introduce en el contexto del LLM. ¿Qué protección debe habilitarse para evitar que instrucciones indirectas de terceros secuestren las llamadas a herramientas del agente?

- **A**: Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)
- **B**: Aumentar la temperatura del LLM a 1.5
- **C**: Deshabilitar las aprobaciones humanas de herramientas (human-in-the-loop)
- **D**: Usar exclusivamente filtros de expresiones regulares simples

**Explicación en Español**:
**Respuesta Correcta: (A) Prompt Shields para ataques indirectos (protección contra inyección de prompts indirecta en documentos)**

Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.

**Análisis de opciones:**
• **(A)**: Correcto. Indirect Prompt Shields inspecciona el contenido de documentos externos no confiables para detectar instrucciones adversarias incrustadas antes de que lleguen al modelo.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

