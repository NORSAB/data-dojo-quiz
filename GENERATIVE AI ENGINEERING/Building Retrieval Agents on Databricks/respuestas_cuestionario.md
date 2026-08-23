# Respuestas del cuestionario

## Datos del examen

- **Examen:** Quiz - Building Retrieval Agents on Databricks
- **Numero de preguntas:** 20
- **Limite de tiempo:** No documentado
- **Intentos disponibles:** No documentado
- **Puntuacion minima para aprobar:** No documentada
- **Puntuacion maxima:** No documentada
- **Se puede pausar:** No documentado
- **Estado en la plataforma:** Completado
- **Preguntas documentadas:** 20 de 20
- **Respuestas registradas:** 20 de 20
- **Puntuacion obtenida:** No proporcionada
- **Resultado oficial:** No proporcionado

## Registro de preguntas

## Pregunta 1 de 20

**Pregunta:** Which resources must be defined when logging an agent model to ensure proper dependencies?

**Opciones:**

- [x] Both DatabricksVectorSearchIndex and DatabricksServingEndpoint
- [ ] Only the serving endpoint
- [ ] Only Unity Catalog tables
- [ ] Only the vector search index

**Respuesta correcta:** Both DatabricksVectorSearchIndex and DatabricksServingEndpoint

**Explicacion:** El agente depende tanto del indice utilizado para recuperar informacion como del endpoint que sirve el modelo.

## Pregunta 2 de 20

**Pregunta:** What is the primary method for improving agent quality in Agent Bricks Knowledge Assistant?

**Opciones:**

- [x] Using expert feedback and labeling sessions through the Review App
- [ ] Increasing the model size
- [ ] Manually editing the code
- [ ] Adding more vector search indexes

**Respuesta correcta:** Using expert feedback and labeling sessions through the Review App

**Explicacion:** Agent Bricks utiliza el feedback de expertos y las labeling sessions para alimentar su ciclo de evaluacion y optimizacion.

## Pregunta 3 de 20

**Pregunta:** What does the "Lost in the Middle" phenomenon refer to?

**Opciones:**

- [ ] Embedding models losing accuracy over time
- [ ] Data corruption during embedding generation
- [x] Models ignoring information buried in the middle of long context windows
- [ ] Vector search returning irrelevant results

**Respuesta correcta:** Models ignoring information buried in the middle of long context windows

**Explicacion:** En contextos extensos, los modelos suelen prestar mas atencion al inicio y al final, y pueden pasar por alto informacion relevante ubicada en la parte central.

## Pregunta 4 de 20

**Pregunta:** Which embedding model is used in the vector search demo?

**Opciones:**

- [ ] sentence-transformers-all-MiniLM-L6-v2
- [ ] databricks-bge-large-en
- [ ] openai-text-embedding-ada-002
- [x] databricks-gte-large-en

**Respuesta correcta:** databricks-gte-large-en

**Explicacion:** La demostracion utiliza el modelo administrado `databricks-gte-large-en` para generar los embeddings del indice y de las consultas.

## Pregunta 5 de 20

**Pregunta:** What is the main purpose of the ai_parse_document function in Databricks?

**Opciones:**

- [ ] To chunk documents into smaller pieces
- [ ] To create vector embeddings from text
- [x] To extract structured content from unstructured documents using AI models
- [ ] To store documents in Delta Lake

**Respuesta correcta:** To extract structured content from unstructured documents using AI models

**Explicacion:** `ai_parse_document` analiza documentos no estructurados y extrae elementos como texto, tablas, imagenes y estructura en un formato util para su procesamiento posterior.

## Pregunta 6 de 20

**Pregunta:** What files are used as the knowledge source for the Orion Knowledge Assistant in the Agent Bricks demo?

**Opciones:**

- [x] PDF documents stored in Unity Catalog Volumes
- [ ] JSON files
- [ ] SQL tables
- [ ] CSV files

**Respuesta correcta:** PDF documents stored in Unity Catalog Volumes

**Explicacion:** El Knowledge Assistant utiliza los documentos PDF internos de Orion almacenados en un Unity Catalog Volume como su base de conocimiento.

## Pregunta 7 de 20

**Pregunta:** Which chunking strategy is recommended over fixed-size chunking?

**Opciones:**

- [ ] Alphabetical chunking
- [ ] Time-based chunking
- [x] Semantic chunking based on meaningful linguistic boundaries
- [ ] Random chunking

**Respuesta correcta:** Semantic chunking based on meaningful linguistic boundaries

**Explicacion:** El chunking semantico conserva unidades con sentido, como oraciones, parrafos o cambios de tema, y evita cortar informacion relacionada en posiciones arbitrarias.

## Pregunta 8 de 20

**Pregunta:** Which of the following are critical failure modes of prompting that necessitate RAG architectures? (Select all that apply)

**Opciones:**

- [x] Hallucination when asked for specific facts
- [x] Knowledge cutoff limitations
- [x] Ambiguity without private context
- [ ] High computational costs

**Respuestas correctas:** Hallucination when asked for specific facts; Knowledge cutoff limitations; Ambiguity without private context

**Explicacion:** RAG aporta informacion externa, actualizada y privada para reducir alucinaciones, superar el knowledge cutoff y resolver consultas que requieren contexto empresarial.

## Pregunta 9 de 20

**Pregunta:** Which search methods are demonstrated in the vector search labs? (Select all that apply)

**Opciones:**

- [x] Similarity search
- [x] Hybrid search
- [ ] Fuzzy search
- [x] Full-text search

**Respuestas correctas:** Similarity search; Hybrid search; Full-text search

**Explicacion:** Los laboratorios muestran busqueda por similitud, busqueda hibrida y busqueda de texto completo; fuzzy search no forma parte de los metodos demostrados.

## Pregunta 10 de 20

**Pregunta:** What are the main benefits of using reranking in a retrieval pipeline? (Select all that apply)

**Opciones:**

- [ ] Increases computational speed
- [ ] Eliminates the need for vector search
- [x] Reduces hallucinations in generated responses
- [x] Improves the accuracy of context provided to language models

**Respuestas correctas:** Reduces hallucinations in generated responses; Improves the accuracy of context provided to language models

**Explicacion:** El reranking reordena los candidatos segun su relevancia contextual, entrega mejor contexto al LLM y reduce el riesgo de respuestas no fundamentadas.

## Pregunta 11 de 20

**Pregunta:** Which MLflow component is specifically designed for capturing hierarchical execution flow of agents?

**Opciones:**

- [x] MLflow Tracing
- [ ] MLflow Model Registry
- [ ] MLflow Models
- [ ] MLflow Tracking

**Respuesta correcta:** MLflow Tracing

**Explicacion:** MLflow Tracing registra el flujo jerarquico del agente mediante traces y spans, incluyendo las entradas, salidas y tiempos de cada paso.

## Pregunta 12 de 20

**Pregunta:** When using ai_parse_document with version 2.0, which parameter specifies where parsed images should be stored?

**Opciones:**

- [ ] imageStoragePath
- [x] imageOutputPath
- [ ] imagePath
- [ ] outputImageLocation

**Respuesta correcta:** imageOutputPath

**Explicacion:** En `ai_parse_document` version 2.0, `imageOutputPath` define la ruta de un Unity Catalog Volume donde se guardan las imagenes renderizadas de las paginas.

**Fuente:** [Databricks - ai_parse_document](https://docs.databricks.com/gcp/en/sql/language-manual/functions/ai_parse_document)

## Pregunta 13 de 20

**Pregunta:** Which similarity metric is most commonly used for text embeddings and why?

**Opciones:**

- [x] Cosine Similarity because it focuses on semantic meaning rather than magnitude
- [ ] Hamming Distance because it works with text data
- [ ] Manhattan Distance because it's computationally efficient
- [ ] Euclidean Distance because it measures absolute differences

**Respuesta correcta:** Cosine Similarity because it focuses on semantic meaning rather than magnitude

**Explicacion:** Cosine Similarity compara el angulo entre vectores, por lo que prioriza su direccion semantica y reduce la influencia de diferencias en magnitud.

## Pregunta 14 de 20

**Pregunta:** What is the primary advantage of Agent Bricks over traditional code-first approaches?

**Opciones:**

- [ ] Lower cost
- [ ] Better security
- [x] Declarative approach that automates optimization decisions
- [ ] Faster execution

**Respuesta correcta:** Declarative approach that automates optimization decisions

**Explicacion:** Agent Bricks permite declarar los datos, la tarea y el resultado esperado, mientras automatiza decisiones como seleccion de modelos, recuperacion, prompts y optimizacion.

## Pregunta 15 de 20

**Pregunta:** What must be enabled on a Delta table before using it as a source for Mosaic AI Vector Search?

**Opciones:**

- [ ] Time Travel
- [x] Change Data Feed (CDF)
- [ ] Liquid Clustering
- [ ] Delta Sharing

**Respuesta correcta:** Change Data Feed (CDF)

**Explicacion:** Change Data Feed permite que Vector Search detecte los cambios de la tabla Delta y sincronice el indice con los datos actualizados.

## Pregunta 16 de 20

**Pregunta:** Which Databricks class is used to create the vector search retriever tool in LangChain?

**Opciones:**

- [ ] VectorSearchTool
- [ ] DatabricksVectorTool
- [x] VectorSearchRetrieverTool
- [ ] DatabricksRetriever

**Respuesta correcta:** VectorSearchRetrieverTool

**Explicacion:** `VectorSearchRetrieverTool`, disponible en `databricks_langchain`, convierte un indice de Databricks Vector Search en una herramienta que el agente puede invocar.

**Fuente:** [Databricks - Connect agents to unstructured data](https://docs.databricks.com/gcp/en/generative-ai/agent-framework/unstructured-retrieval-tools)

## Pregunta 17 de 20

**Pregunta:** In Agent Bricks, what does ALHF stand for and what is its purpose?

**Opciones:**

- [ ] Automated Language Handling Framework
- [ ] Artificial Learning and Hallucination Filter
- [x] Agent Learning from Human Feedback - to automatically optimize agents based on user feedback
- [ ] Advanced LLM Hosting Framework

**Respuesta correcta:** Agent Learning from Human Feedback - to automatically optimize agents based on user feedback

**Explicacion:** ALHF utiliza el feedback humano recopilado mediante la Review App y las labeling sessions para generar evaluaciones y optimizar prompts o configuraciones del agente.

## Pregunta 18 de 20

**Pregunta:** What is the recommended approach for logging agents in MLflow?

**Opciones:**

- [ ] Directly saving the agent object
- [ ] Using mlflow.sklearn.log_model
- [x] Using the "agent as code" approach with Python files and YAML configuration
- [ ] Using mlflow.pytorch.log_model

**Respuesta correcta:** Using the "agent as code" approach with Python files and YAML configuration

**Explicacion:** Agent as Code empaqueta la logica del agente en archivos Python y separa sus parametros en configuracion YAML, facilitando versionado, reproduccion y registro con MLflow.

## Pregunta 19 de 20

**Pregunta:** What is the primary difference between Prompt Engineering and Context Engineering?

**Opciones:**

- [ ] Prompt Engineering is for production while Context Engineering is for development
- [ ] Prompt Engineering uses retrieval while Context Engineering uses generation
- [x] Prompt Engineering focuses on the query while Context Engineering focuses on the entire environment supplied to the model
- [ ] Prompt Engineering is cheaper while Context Engineering is more expensive

**Respuesta correcta:** Prompt Engineering focuses on the query while Context Engineering focuses on the entire environment supplied to the model

**Explicacion:** Prompt Engineering optimiza las instrucciones enviadas al modelo, mientras Context Engineering administra todo el contexto disponible, incluidos documentos recuperados, historial, herramientas y metadatos.

## Pregunta 20 de 20

**Pregunta:** Which LangChain class is used for splitting text by page markers in the chunking demo?

**Opciones:**

- [x] RecursiveCharacterTextSplitter
- [ ] SemanticTextSplitter
- [ ] CharacterTextSplitter
- [ ] TokenTextSplitter

**Respuesta correcta:** RecursiveCharacterTextSplitter

**Explicacion:** `RecursiveCharacterTextSplitter` permite definir separadores, como los marcadores de pagina, junto con el tamano del chunk y el overlap.
