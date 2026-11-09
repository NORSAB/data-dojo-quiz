# 02. Quiz Oficial: Get Started with AI Agents on Databricks

> **Evaluación Oficial de Certificación:** Databricks Academy  
> **Total de Preguntas:** 20  
> **Puntuación Obtenida:** 100 / 100 (100% de Aprobación)  
> **Estado:** Verificado con explicaciones oficiales y enlaces de referencia de Databricks  

---

### Pregunta 1
**Contexto / Enunciado:**  
A logistics company must generate completions for a very large table of text inputs on a nightly cadence. Throughput matters far more than immediate response time, since results are consumed by a downstream report the next morning.

Which deployment paradigm from the course best fits, and what is the primary tradeoff?

- [ ] A) Streaming deployment, because it is the only paradigm capable of processing a table of inputs
- [ ] B) Real-time deployment, because low latency is the priority for a nightly report
- [x] **C) Batch deployment, which favors high throughput over latency and generates completions over a table of inputs at once**
- [ ] D) Real-time deployment, because it offers the highest throughput of all paradigms for large tables

> **💡 Explicación Oficial (Notas de la respuesta):**  
> El despliegue por lotes (*Batch deployment*) genera y almacena respuestas sobre una tabla entera de entradas maximizando el rendimiento (*throughput*) y tolerando alta latencia, lo cual encaja perfectamente en un trabajo nocturno donde el tiempo de respuesta inmediato no es crítico. El despliegue en tiempo real es de baja latencia pero menor rendimiento por llamada, todo lo contrario a lo requerido.  
> **🔗 Referencia Oficial:** [Databricks Model Serving Overview](https://docs.databricks.com/aws/en/machine-learning/model-serving/)

---

### Pregunta 2
**Contexto / Enunciado:**  
An agent produces an occasional low-quality answer, and the team needs to understand exactly which step, prompt, tool call, or retrieval, caused the problem. They want a step-by-step view of the agent's execution to debug the complex logic.

Which MLflow capability is designed for this, as taught in the course?

- [ ] A) MLflow Tracing is unrelated to debugging and only stores billing information
- [ ] B) Batch inference, which is the recommended way to debug an individual agent request
- [x] **C) MLflow Tracing, which shows the step-by-step execution of agent logic to support debugging**
- [ ] D) The Review App, which replaces the need to inspect any execution steps

> **💡 Explicación Oficial (Notas de la respuesta):**  
> **MLflow Tracing** captura la ejecución paso a paso del agente, incluyendo prompts exactos, llamadas a herramientas, documentos recuperados, salidas y evaluaciones, permitiendo a los equipos aislar con rapidez la causa raíz de problemas de calidad. El Review App es para recopilar feedback humano y la inferencia por lotes es un paradigma de despliegue, no una herramienta de depuración.  
> **🔗 Referencia Oficial:** [MLflow Tracing Documentation](https://docs.databricks.com/aws/en/mlflow/mlflow-tracing)

---

### Pregunta 3
**Contexto / Enunciado:**  
During a planning meeting, a team debates why general-purpose foundation models often fall short for their enterprise customer-support use case. A colleague argues the issue is that generic models are disconnected from the company's own customer data and domain-specific rules.

Which distinction from the course best supports this argument?

- [ ] A) Data intelligence means using only the largest possible foundation model regardless of the data it was trained on
- [ ] B) Data intelligence refers exclusively to hosting open-source models rather than proprietary ones
- [x] **C) General intelligence relies on models trained on broad data disconnected from the business, while data intelligence connects AI to the company's own data to solve domain-specific problems**
- [ ] D) General intelligence always outperforms data intelligence for enterprise use cases because it uses more parameters

> **💡 Explicación Oficial (Notas de la respuesta):**  
> El curso contrasta la **Inteligencia General** (modelos fundacionales entrenados con datos públicos amplios desconectados de la empresa) frente a la **Inteligencia de Datos** (IA conectada a los datos propietarios del cliente para resolver problemas de dominio específico). El factor determinante no es el tamaño del modelo ni si es de código abierto, sino fundamentar la IA en los datos gobernados del negocio.  
> **🔗 Referencia Oficial:** [Databricks Artificial Intelligence Platform](https://www.databricks.com/product/artificial-intelligence)

---

### Pregunta 4
**Contexto / Enunciado:**  
A product team new to agentic AI is drafting an internal glossary. A team member writes that "an AI agent is simply any application that calls a large language model once to generate text." A reviewer pushes back, saying this definition misses what actually makes something an agent.

Based on how the course defines an AI agent, which description is most accurate?

- [ ] A) A database of embeddings used to store the semantic meaning of documents and images
- [ ] B) A dashboard that visualizes the outputs of a machine learning model for business analysts
- [ ] C) A single, fixed prompt-and-response call to a language model that returns one deterministic answer
- [x] **D) An intelligent application that uses an AI model and tools to iteratively plan and execute sequences of actions to complete a complex task**

> **💡 Explicación Oficial (Notas de la respuesta):**  
> El curso define un **agente de IA** como una aplicación inteligente que utiliza un modelo de IA y otras herramientas para planificar y ejecutar iterativamente secuencias de acciones para completar una tarea compleja. Una llamada única fija de prompt y respuesta describe un flujo no agéntico (estático). Los agentes se definen por la planificación iterativa, el uso de herramientas y la capacidad de observar resultados y volver a actuar.  
> **🔗 Referencia Oficial:** [Build Generative AI Apps](https://docs.databricks.com/aws/en/generative-ai/agent-framework/build-genai-apps)

---

### Pregunta 5
**Contexto / Enunciado:**  
After deploying an agent, a team wants to collect structured feedback from subject matter experts through a ready-made chat interface, and log that human feedback to Unity Catalog to build a golden labeled dataset for future improvement.

Which capability from the course best matches this need, and how does it differ from the most tempting alternative?

- [x] **A) The Review App, a pre-built chat app that collects SME feedback and logs human-in-the-loop feedback to Unity Catalog, whereas MLflow Tracing is for debugging execution rather than gathering feedback**
- [ ] B) MLflow Tracing, because its main role is presenting a chat app to SMEs to collect labeled feedback
- [ ] C) The AI Playground, because it is the designated tool for logging production SME feedback to Unity Catalog
- [ ] D) Autoscaling on Model Serving, because scaling replicas is how SME feedback is gathered

> **💡 Explicación Oficial (Notas de la respuesta):**  
> El **Review App** es una aplicación de chat prediseñada para recoger opiniones de expertos de dominio (SMEs) y registrar feedback humano (*human-in-the-loop*) en Unity Catalog para construir conjuntos de datos de evaluación de referencia (*golden datasets*). MLflow Tracing depura ejecuciones, AI Playground prototipa y el autoescalado gestiona capacidad.  
> **🔗 Referencia Oficial:** [Agent Evaluation in Databricks](https://docs.databricks.com/aws/en/generative-ai/agent-evaluation/)

---

### Pregunta 6
**Contexto / Enunciado:**  
A data engineer wants to create a governed tool that an agent can call to retrieve a customer's five most recent support interactions from a Delta table, filtered by the customer's email address. She plans to register it as a Unity Catalog SQL function so it is typed, governed, and discoverable.

Which SQL definition best follows the tool-authoring approach taught in the course?
```sql
CREATE OR REPLACE FUNCTION get_customer_interactions(customer_email STRING COMMENT 'Email of the customer to look up')
RETURNS TABLE(interaction_date DATE, issue_category STRING, issue_description STRING, customer_name STRING)
COMMENT 'Returns the 5 most recent support interactions for a customer.'
RETURN (
  SELECT CAST(date_time AS DATE), issue_category, issue_description, name
  FROM support.data.cust_service_data
  WHERE email = customer_email
  ORDER BY date_time DESC LIMIT 5
);
```

Which statement about this function definition is correct?

- [ ] A) The COMMENT clauses are purely cosmetic and have no effect on how an agent selects or calls the tool
- [ ] B) The function must be written in Python because SQL functions cannot be registered as agent tools
- [x] **C) The COMMENT clauses on the function and its parameter are important because the agent uses them to understand what the tool does and what input to provide**
- [ ] D) A Unity Catalog function used as an agent tool cannot accept input parameters such as customer_email

> **💡 Explicación Oficial (Notas de la respuesta):**  
> En Databricks, las descripciones en las cláusulas `COMMENT` tanto de la función como de sus parámetros son fundamentales: el LLM del agente las lee para descubrir la herramienta y razonar cuándo y cómo invocarla, además de qué formato de entrada suministrar. Las funciones de herramientas pueden ser SQL o Python y aceptan parámetros tipados.  
> **🔗 Referencia Oficial:** [Create Custom Agent Tools](https://docs.databricks.com/aws/en/generative-ai/agent-framework/create-custom-tool)

---

### Pregunta 7
**Contexto / Enunciado:**  
A platform team is standardizing on a framework for a new agent project. They want persistent state across sessions and a visualizable, graph-like structure to design and debug complex, non-linear flows, rather than a simple linear chain.

Based on the framework comparison in the course, which framework best fits, and what is the key reason?

- [ ] A) LlamaIndex, because its primary strength is orchestrating complex multi-step graph flows with persistent state
- [ ] B) DSPy, because it is designed mainly for building graph-based conversational state machines
- [ ] C) LangChain, because it is the only framework of the four that can call an LLM at all
- [x] **D) LangGraph, because it supports persistent state across interactions and a graph-like structure well suited to complex, non-linear flows**

> **💡 Explicación Oficial (Notas de la respuesta):**  
> El curso describe **LangGraph** como el marco ideal para estado persistente entre interacciones y estructuras en forma de grafo para flujos complejos y no lineales, a diferencia de las canalizaciones más lineales e imperativas de LangChain. LlamaIndex se enfoca en indexación/recuperación y DSPy en optimización de prompts. Databricks soporta todos ellos.  
> **🔗 Referencia Oficial:** [Authoring Agents on Databricks](https://docs.databricks.com/aws/en/generative-ai/agent-framework/author-agent)

---

### Pregunta 8
**Contexto / Enunciado:**  
A knowledge management team wants to deploy an assistant, entirely through the UI, that answers employee questions grounded in a governed corpus of policy documents indexed in AI Search, and returns answers with citations to the source documents.

Which Agent Bricks component should they choose, and why is it the best fit compared to the alternatives?

- [x] **A) Knowledge Assistant, because it delivers fast, accurate answers grounded in enterprise data with citations, configured through the UI over an AI Search knowledge source**
- [ ] B) Multi-Agent Supervisor, because a single grounded question-answering assistant always requires orchestrating multiple agents
- [ ] C) Information Extraction, because its purpose is to answer grounded questions with citations from a document index
- [ ] D) Custom LLM, because it is specifically designed to retrieve documents and return cited answers

> **💡 Explicación Oficial (Notas de la respuesta):**  
> **Knowledge Assistant** en Agent Bricks está diseñado específicamente para entregar respuestas fundamentadas en documentos corporativos con citas precisas, configurándose directamente desde la interfaz gráfica sobre una fuente de AI Search. Information Extraction convierte texto no estructurado en campos estructurados y Supervisor coordina múltiples agentes (innecesario para un Q&A simple).  
> **🔗 Referencia Oficial:** [Agent Bricks Knowledge Assistant](https://docs.databricks.com/aws/en/generative-ai/agent-bricks/knowledge-assistant)

---

### Pregunta 9
**Contexto / Enunciado:**  
A team keeps struggling with three recurring problems: evaluation is largely manual, there are too many tuning knobs (prompts, models, tools, parameters), and they constantly face the cost-versus-quality tradeoff. They want a Databricks capability that automatically builds evaluation benchmarks and optimizes the agent for cost and quality without slow manual trial and error.

Which capability is described, and what is its defining behavior?

- [ ] A) The AI Playground, which auto-generates evaluation benchmarks and permanently sets the optimal model for you
- [ ] B) MLflow Tracing, which automatically tunes prompts and models to remove the cost-versus-quality tradeoff
- [ ] C) Unity Catalog, which optimizes an agent's cost and quality by governing its tools
- [x] **D) Agent Bricks, which automatically creates evaluation benchmarks and auto-optimizes an agent to balance cost and quality from a high-level task description**

> **💡 Explicación Oficial (Notas de la respuesta):**  
> **Agent Bricks** resuelve precisamente estos 3 desafíos: permite declarar una tarea en alto nivel y se encarga automáticamente de crear benchmarks de evaluación y optimizar el agente equilibrando costo y calidad. Ninguna de las otras herramientas optimiza automáticamente el balance de costo/calidad.  
> **🔗 Referencia Oficial:** [Agent Bricks Documentation](https://docs.databricks.com/aws/en/generative-ai/agent-bricks/)

---

### Pregunta 10
**Contexto / Enunciado:**  
A data leader is explaining terminology to executives. She wants to clarify the difference between "an AI system," "agentic AI," and "an AI agent" so the team uses the terms consistently in planning documents.

Which statement correctly distinguishes these terms as presented in the course?

- [x] **A) An AI system is any software that uses AI or ML models, agentic AI is any AI system that may contain AI agents, and an AI agent is a system composed of an AI model with planning, memory, and tool use**
- [ ] B) An AI agent is the broadest term, agentic AI is a type of dashboard, and an AI system is a single tool
- [ ] C) An AI system and an AI agent are identical terms, while agentic AI refers only to multi-agent chatbots
- [ ] D) Agentic AI refers only to systems with no language models, while an AI agent must always avoid using tools

> **💡 Explicación Oficial (Notas de la respuesta):**  
> La jerarquía va de lo general a lo particular:  
> 1. *Sistema de IA:* Cualquier software que incorpore modelos de IA/ML.  
> 2. *IA Agéntica:* Cualquier sistema de IA que puede orquestar agentes.  
> 3. *Agente de IA:* Un sistema específico compuesto por un modelo de IA con capacidades de planificación, memoria y uso de herramientas.  
> **🔗 Referencia Oficial:** [Introduction to Generative AI](https://docs.databricks.com/aws/en/generative-ai/guide/introduction-generative-ai)

---

### Pregunta 11
**Contexto / Enunciado:**  
A developer deployed a Knowledge Assistant and now wants to query its serving endpoint programmatically from a Python application, using the OpenAI-compatible Responses API. She writes the following, using the endpoint name shown in the agent's Get code panel:
```python
from openai import OpenAI

client = OpenAI(api_key=DATABRICKS_TOKEN, base_url=base_url)

response = client.responses.create(
    model="ka-3f1c9a2b-endpoint",
    input=[{"role": "user", "content": "Tell me about the BlendMaster Elite 4000."}]
)
```

Which statement about querying the deployed assistant this way is correct?

- [ ] A) The Responses API call trains a new assistant on each request rather than querying the deployed one
- [x] **B) The assistant is served behind a Model Serving endpoint accessible via the OpenAI-compatible client, and the model value is the Knowledge Assistant endpoint name from the agent's Get code panel**
- [ ] C) The model value must be the raw foundation model name, because deployed Agent Bricks assistants cannot be reached through a serving endpoint
- [ ] D) A deployed Knowledge Assistant can only be queried from the Playground UI and never programmatically

> **💡 Explicación Oficial (Notas de la respuesta):**  
> Un Knowledge Assistant desplegado se expone tras un endpoint de Model Serving compatible con el cliente estándar de OpenAI. El argumento `model` corresponde al nombre del endpoint del asistente (`ka-XXXXXXXX-endpoint`) proporcionado en el panel *Get code*, y la llamada consulta el endpoint sin reentrenar.  
> **🔗 Referencia Oficial:** [Query Knowledge Assistant](https://docs.databricks.com/aws/en/generative-ai/agent-bricks/knowledge-assistant)

---

### Pregunta 12
**Contexto / Enunciado:**  
A retail analytics team is mapping their planned solutions onto the common agentic AI patterns taught in the course. One project needs to answer natural language business questions by translating them into SQL against structured sales tables.

Which agentic AI pattern best matches this project?

- [x] **A) An AI system with tables, sometimes called "text-2-sql," which retrieves over structured data using natural language**
- [ ] B) An AI system with documents, sometimes called unstructured retrieval or RAG
- [ ] C) A multi-agent supervisor pattern that routes conversations between several specialized agents
- [ ] D) A code interpreter tool that executes arbitrary Python to compute results

> **💡 Explicación Oficial (Notas de la respuesta):**  
> Traducir lenguaje natural a SQL sobre tablas estructuradas corresponde al patrón de **sistema de IA con tablas** (*text-2-sql*), como Databricks Genie. RAG opera sobre documentos no estructurados (PDFs, textos libres), no sobre tablas relacionales.  
> **🔗 Referencia Oficial:** [Databricks Genie Spaces](https://docs.databricks.com/aws/en/genie/)

---

### Pregunta 13
**Contexto / Enunciado:**  
An organization has many teams building and deploying agents, custom models, and foundation models. Leadership is concerned about fragmented tooling, inconsistent governance, and the operational burden of running low-latency serving infrastructure in-house.

How does the course describe Databricks Model Serving addressing these concerns?

- [ ] A) It is a batch-only system and cannot provide low-latency, real-time responses
- [ ] B) It removes the need for governance by keeping every model outside of Unity Catalog
- [x] **C) It provides a unified UI, API, and SDK to serve and govern custom models, agent/chain models, and foundation models with highly available, scalable, low-latency serving**
- [ ] D) It only serves third-party foundation models and cannot host custom or agent models

> **💡 Explicación Oficial (Notas de la respuesta):**  
> **Model Serving** proporciona una interfaz unificada (UI, API y SDK) para servir y gobernar modelos personalizados, modelos de cadenas/agentes y modelos fundacionales administrados o de terceros, con infraestructura serverless de alta disponibilidad, autoescalable y de baja latencia.  
> **🔗 Referencia Oficial:** [Model Serving Architecture](https://docs.databricks.com/aws/en/machine-learning/model-serving/)

---

### Pregunta 14
**Contexto / Enunciado:**  
A team is choosing a reasoning approach for an agent that must interleave short bursts of reasoning with individual tool calls, reflecting after each observation before deciding the next action. A colleague suggests an approach whose loop is often summarized as Thought, Act, and Observe.

Which reasoning pattern is being described, and how does it differ from the main alternative taught in the course?

- [x] **A) ReAct, which interleaves reasoning traces and actions in a Thought, Act, Observe loop, whereas Plan-and-Solve first generates a full plan and then executes the steps**
- [ ] B) Chain-of-Thought, which requires calling an external tool on every reasoning step
- [ ] C) Plan-and-Solve, which alternates Thought, Act, and Observe, whereas ReAct writes an entire plan up front before acting
- [ ] D) Retrieval-augmented generation, which replaces the need for any reasoning steps in the agent

> **💡 Explicación Oficial (Notas de la respuesta):**  
> **ReAct (Reason + Act)** intercala razonamiento verbal y acciones en un bucle continuo de *Pensamiento (Thought)*, *Acción (Act)* y *Observación (Observe)*. En contraste, **Plan-and-Solve** utiliza un planificador para generar primero un plan completo de pasos y luego ejecutarlos.  
> **🔗 Referencia Oficial:** [Building GenAI Apps - Reasoning Patterns](https://docs.databricks.com/aws/en/generative-ai/agent-framework/build-genai-apps)

---

### Pregunta 15
**Contexto / Enunciado:**  
A team of analysts with limited coding experience wants to quickly assemble an agent that uses a few Unity Catalog function tools, try different prompts, and get an initial read on quality, all before writing any orchestration code. When they are satisfied, they want to export production-ready code to customize further.

Which Databricks capability best fits this need, as described in the course?

- [x] **A) The AI Playground, which enables no-code agent prototyping with tools and can export production-ready agent code**
- [ ] B) The Review App, which is designed for building agents without attaching any tools
- [ ] C) Lakeguard, which is used to prototype prompts in a no-code interface
- [ ] D) MLflow Tracing, whose primary purpose is exporting a no-code agent to production

> **💡 Explicación Oficial (Notas de la respuesta):**  
> El **AI Playground** permite crear e iterar prototipos de agentes con herramientas sin escribir código, evaluar la calidad inicial con jueces LLM integrados y exportar el código resultante listo para producción.  
> **🔗 Referencia Oficial:** [Databricks AI Playground](https://docs.databricks.com/aws/en/large-language-models/ai-playground)

---

### Pregunta 16
**Contexto / Enunciado:**  
A developer is documenting the three core components of an AI agent for a design review. She has already listed the LLM that acts as the reasoning "brain" and the tools the agent can call. She needs to describe the third core component, which tracks the current conversational state as well as historical knowledge and preferences.

Which component is she describing, and how does the course characterize it?

- [ ] A) A guardrail layer, whose sole purpose is to store the agent's previous tool calls
- [ ] B) A vector search index, which is the only place an agent can store any form of state
- [x] **C) Memory, which includes short-term memory for session and conversational state and long-term memory for episodic, semantic, and procedural knowledge**
- [ ] D) A model serving endpoint, which is required for the agent to retain any conversation history

> **💡 Explicación Oficial (Notas de la respuesta):**  
> Los 3 componentes centrales de un agente son: el **LLM**, las **Herramientas (Tools)** y la **Memoria (Memory)**. La memoria se divide en corto plazo (estado de la sesión/conversación) y largo plazo (conocimiento episódico, semántico y procedimental).  
> **🔗 Referencia Oficial:** [Core Agent Components](https://docs.databricks.com/aws/en/generative-ai/agent-framework/build-genai-apps)

---

### Pregunta 17
**Contexto / Enunciado:**  
A quality lead needs to evaluate an agent before deployment but has no labeled evaluation dataset and limited access to subject matter experts. She wants a way to jumpstart evaluation without waiting weeks for hand-labeled data.

Which capability described in the course best addresses this, and why?

- [ ] A) Model Serving autoscaling, which generates the ground-truth labels needed to evaluate quality
- [ ] B) MLflow model registration, which automatically labels production traffic for evaluation
- [ ] C) The vector_search function, which creates a labeled evaluation dataset from an AI Search index
- [x] **D) Synthetic data generation, which produces a research-backed evaluation dataset so quality evaluation is not blocked while SMEs are unavailable**

> **💡 Explicación Oficial (Notas de la respuesta):**  
> La **generación de datos sintéticos (Synthetic Data Generation API)** es un método respaldado por investigación para generar datasets de evaluación iniciales que desbloquean la medición de calidad sin depender de semanas de etiquetado manual por parte de expertos.  
> **🔗 Referencia Oficial:** [Agent Evaluation Synthetic Datasets](https://docs.databricks.com/aws/en/generative-ai/agent-evaluation/)

---

### Pregunta 18
**Contexto / Enunciado:**  
A support team wants an agent tool that returns the most semantically relevant product documentation for a shopper's free-text question, using a pre-built AI Search index. A developer writes a Unity Catalog SQL function that calls the built-in vector search function:
```sql
CREATE OR REPLACE FUNCTION search_product_docs(search_term STRING COMMENT 'Search term for relevant product documentation')
RETURNS TABLE
COMMENT 'Searches product documentation using AI search.'
RETURN (
  SELECT product_name, indexed_doc AS doc
  FROM vector_search(
    index => 'shop.catalog.product_docs_index',
    query => search_term,
    num_results => 2
  )
);
```

What does the vector_search call accomplish in this tool?

- [ ] A) It trains a new embedding model on the product documentation table before returning results
- [ ] B) It rebuilds the AI Search index from scratch every time the function is called
- [x] **C) It performs a semantic similarity search against the named AI Search index and returns the most relevant document rows, up to num_results**
- [ ] D) It runs an exact keyword match and returns only rows where the text equals the search term exactly

> **💡 Explicación Oficial (Notas de la respuesta):**  
> La función `vector_search` realiza una búsqueda por similitud semántica (basada en embeddings) contra el índice de AI Search especificado y retorna los registros más relevantes hasta el límite establecido por `num_results`. No realiza coincidencia exacta de palabras clave ni reconstruye el índice.  
> **🔗 Referencia Oficial:** [Vector Search SQL Function](https://docs.databricks.com/aws/en/sql/language-manual/functions/vector_search)

---

### Pregunta 19
**Contexto / Enunciado:**  
A machine learning engineer is reviewing an agent notebook that was exported from the AI Playground. The agent is implemented with MLflow's tool-calling agent class and needs to be logged and registered so it is governed and reproducible:
```python
logged = mlflow.pyfunc.log_model(name="agent", python_model="agent.py", resources=resources)

mlflow.register_model(model_uri=logged.model_uri, name="main.agents.support_agent")
```

What is the purpose of the second call, `mlflow.register_model`, in this workflow?

- [ ] A) It is required to disable MLflow Tracing for the agent
- [ ] B) It deletes the logged model run and replaces it with a serving endpoint automatically
- [x] **C) It registers the logged agent model to Unity Catalog under a catalog.schema.name so it is governed and reproducible**
- [ ] D) It trains the agent on new data before it can be used

> **💡 Explicación Oficial (Notas de la respuesta):**  
> `log_model` registra el código del agente y sus dependencias en el experimento activo de MLflow, mientras que `register_model` formaliza esa versión en **Unity Catalog** utilizando la convención de 3 niveles `catalogo.esquema.modelo` para gobernanza empresarial, control de accesos y linaje.  
> **🔗 Referencia Oficial:** [Log and Register Agents](https://docs.databricks.com/aws/en/generative-ai/agent-framework/log-agent)

---

### Pregunta 20
**Contexto / Enunciado:**  
An engineering manager is comparing a legacy workflow with a proposed new one. The legacy workflow uses a fixed pipeline of hardcoded prompt-response steps and deterministic actions. The proposed workflow lets the AI model plan, decide which tools to call, and take non-deterministic actions in an iterative loop.

How should the manager categorize these two workflows using the course's terminology?

- [ ] A) The legacy workflow is agentic because it is deterministic, and the proposed one is non-agentic
- [x] **B) The legacy workflow is non-agentic (static) and the proposed workflow is agentic (dynamic and iterative)**
- [ ] C) Both workflows are agentic because both ultimately call a language model
- [ ] D) Neither workflow is agentic unless it uses a multi-agent supervisor

> **💡 Explicación Oficial (Notas de la respuesta):**  
> Un flujo **no agéntico (estático)** utiliza pipelines fijos con pasos codificados en duro y acciones deterministas. Un flujo **agéntico (dinámico)** se caracteriza por planificación conducida por la IA, llamadas dinámicas a herramientas y acciones iterativas no deterministas. El mero hecho de llamar a un LLM no hace que un flujo sea agéntico; el factor decisivo es si la IA planifica y decide sus acciones en bucle.  
> **🔗 Referencia Oficial:** [Build Generative AI Apps](https://docs.databricks.com/aws/en/generative-ai/agent-framework/build-genai-apps)
