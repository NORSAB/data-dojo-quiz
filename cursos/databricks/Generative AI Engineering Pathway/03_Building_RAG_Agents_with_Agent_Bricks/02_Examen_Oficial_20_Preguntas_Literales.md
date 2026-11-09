# Examen Oficial: Building RAG Agents with Agent Bricks (20 Preguntas Literales)

> **Curso Oficial:** `Building RAG Agents with Agent Bricks` (`Course ID: 5857`, `LO ID: 64375`)  
> **Plan de Aprendizaje:** `Generative AI Engineering Pathway (LP 315)`  
> **Total de Preguntas:** 20 de 20 (100% de cobertura oficial)  
> **Formato:** Bilingüe (Original English + Traducción Oficial Español), 4 opciones literales completas, respuesta correcta verificada y justificación técnica oficial.

---

## Question 1 of 20 / Pregunta 1 de 20

### English
**Question:** A multi-turn support agent for a telecom company starts strong but degrades over long conversations: it forgets earlier constraints, exceeds token budgets, and sometimes answers from stale tool output instead of the newest retrieval. A teammate proposes simply raising the model's maximum output tokens.

Which change most directly addresses the underlying context engineering problem?

**Options:**
- [ ] Switch to a different foundation model with a reputation for creativity.
- [ ] Remove the system instructions so the model has more room for conversation history.
- [ ] Increase maximum output tokens so the model can restate everything it has seen on every turn.
- [x] Manage state across turns by summarizing history, pruning irrelevant or stale context, and keeping persistent instructions in the window while staying within the token budget.

**Correct Answer:** Manage state across turns by summarizing history, pruning irrelevant or stale context, and keeping persistent instructions in the window while staying within the token budget.

**Justification:** The root issue is context window degradation and token bloat across turns. Effective context engineering requires actively managing the state: summarizing older conversation history, pruning stale tool outputs, and maintaining persistent instructions within the token limit.

### Español
**Pregunta:** Un agente de soporte multi-turno para una empresa de telecomunicaciones comienza bien pero se degrada en conversaciones largas: olvida restricciones previas, excede el presupuesto de tokens y a veces responde con salidas obsoletas de herramientas en lugar de la recuperación más reciente. Un colega propone simplemente aumentar el número máximo de tokens de salida del modelo.

¿Qué cambio aborda más directamente el problema subyacente de ingeniería de contexto?

**Opciones:**
- [ ] Cambiar a un modelo base diferente con reputación de creatividad.
- [ ] Eliminar las instrucciones del sistema para que el modelo tenga más espacio para el historial de conversación.
- [ ] Aumentar los tokens máximos de salida para que el modelo pueda reescribir todo lo que ha visto en cada turno.
- [x] Gestionar el estado a lo largo de los turnos resumiendo el historial, podando el contexto irrelevante u obsoleto y manteniendo las instrucciones persistentes en la ventana dentro del presupuesto de tokens.

**Respuesta Correcta:** Gestionar el estado a lo largo de los turnos resumiendo el historial, podando el contexto irrelevante u obsoleto y manteniendo las instrucciones persistentes en la ventana dentro del presupuesto de tokens.

**Justificación:** Resume y poda el estado para conservar el contexto actual y relevante dentro del presupuesto de tokens, evitando el desbordamiento de la ventana y el olvido de restricciones.

---

## Question 2 of 20 / Pregunta 2 de 20

### English
**Question:** An engineer already has a flattened table of individual parsed elements (one text block per row). They try to chunk it by calling `ai_prep_search` on the single-block text column, but the chunking does not behave as expected.

What is the correct input for `ai_prep_search`, and why?

**Options:**
- [ ] Pass the embedding vector of each element, because chunking operates in vector space.
- [x] Pass the full `ai_parse_document` VARIANT per document, not the flattened elements, because `ai_prep_search` transforms the structured parse output into semantic chunks.
- [ ] Pass the AI Search index name, because `ai_prep_search` reads chunks from the index.
- [ ] Pass a comma-separated string of all element contents, because `ai_prep_search` expects one long string.

**Correct Answer:** Pass the full `ai_parse_document` VARIANT per document, not the flattened elements, because `ai_prep_search` transforms the structured parse output into semantic chunks.

**Justification:** `ai_prep_search` expects the full hierarchical VARIANT produced by `ai_parse_document` (including layout structure, document headers, and metadata) so it can intelligently construct context-aware semantic chunks.

### Español
**Pregunta:** Un ingeniero ya tiene una tabla aplanada de elementos analizados individuales (un bloque de texto por fila). Intenta fragmentarla llamando a `ai_prep_search` sobre la columna de texto de bloque único, pero la fragmentación no se comporta como esperaba.

¿Cuál es la entrada correcta para `ai_prep_search` y por qué?

**Opciones:**
- [ ] Pasar el vector de embedding de cada elemento, porque la fragmentación opera en el espacio vectorial.
- [x] Pasar el VARIANT completo de `ai_parse_document` por documento, no los elementos aplanados, porque `ai_prep_search` transforma la salida del parseo estructurado en fragmentos semánticos.
- [ ] Pasar el nombre del índice de AI Search, porque `ai_prep_search` lee fragmentos desde el índice.
- [ ] Pasar una cadena separada por comas de todo el contenido de los elementos, porque `ai_prep_search` espera una única cadena larga.

**Respuesta Correcta:** Pasar el VARIANT completo de `ai_parse_document` por documento, no los elementos aplanados.

**Justificación:** La función `ai_prep_search` transforma la estructura jerárquica del parseo (títulos, páginas, párrafos) en fragmentos semánticos con metadatos contextuales enriquecidos.

---

## Question 3 of 20 / Pregunta 3 de 20

### English
**Question:** A team indexes long standards documents. With very large chunks, retrieval returns big passages where the key sentence is buried and sometimes overlooked; the chunks also risk exceeding the embedding model's token limit and being silently truncated.

Which adjustment best addresses these issues?

**Options:**
- [ ] Remove all overlap between chunks to guarantee no repeated text.
- [ ] Switch the embedding model to one with a smaller context window to force shorter inputs.
- [ ] Increase chunk size further so each chunk contains the entire document.
- [x] Use smaller, focused chunks with modest overlap that fit within the embedding model's token limit, improving precision and reducing the lost in the middle effect.

**Correct Answer:** Use smaller, focused chunks with modest overlap that fit within the embedding model's token limit, improving precision and reducing the lost in the middle effect.

**Justification:** Smaller, targeted chunks fit within the embedding model's token limit, prevent truncation, increase semantic search precision, and minimize the "lost in the middle" phenomenon where LLMs overlook facts buried deep inside long passages.

### Español
**Pregunta:** Un equipo indexa documentos de estándares extensos. Con fragmentos (chunks) muy grandes, la recuperación devuelve pasajes extensos donde la oración clave queda enterrada y a veces se pasa por alto; los fragmentos también corren el riesgo de exceder el límite de tokens del modelo de embedding y ser truncados silenciosamente.

¿Qué ajuste aborda mejor estos problemas?

**Opciones:**
- [ ] Eliminar todo solapamiento entre fragmentos para garantizar que no haya texto repetido.
- [ ] Cambiar el modelo de embedding por uno con una ventana de contexto menor para forzar entradas más cortas.
- [ ] Aumentar aún más el tamaño del fragmento para que cada uno contenga el documento completo.
- [x] Usar fragmentos más pequeños y focalizados con un solapamiento modesto que quepan dentro del límite de tokens del modelo de embedding, mejorando la precisión y reduciendo el efecto de «perdido en el medio» (lost in the middle).

**Respuesta Correcta:** Usar fragmentos más pequeños y focalizados con un solapamiento modesto que quepan dentro del límite de tokens del modelo de embedding.

**Justificación:** Fragmentos más reducidos mejoran la precisión de recuperación, evitan el truncamiento por el modelo de embedding y reducen la probabilidad de que el LLM ignore información clave.

---

## Question 4 of 20 / Pregunta 4 de 20

### English
**Question:** From `ai_prep_search`, each chunk has `chunk_to_embed` (context-enriched text with titles, headers, and page metadata) and `chunk_to_retrieve` (raw chunk text). An engineer is choosing which column to send to the embedding model and which to show the LLM at answer time.

Which assignment maximizes retrieval quality and answer readability?

**Options:**
- [x] Embed `chunk_to_embed` for findability from the added context, and give the LLM `chunk_to_retrieve` as clean original text for accurate generation.
- [ ] Embed `chunk_to_retrieve` and give the LLM `chunk_to_embed`, so the model reads the metadata.
- [ ] Embed and retrieve using `chunk_to_embed` for both, so the model always sees the metadata.
- [ ] Embed and retrieve using `chunk_to_retrieve` for both, since metadata is never useful.

**Correct Answer:** Embed `chunk_to_embed` for findability from the added context, and give the LLM `chunk_to_retrieve` as clean original text for accurate generation.

**Justification:** Embedding the context-enriched text (`chunk_to_embed`) ensures the vector search catches structural keywords (sections, parent headers). Providing clean original text (`chunk_to_retrieve`) to the LLM provides natural, concise reading material for generating the final response.

### Español
**Pregunta:** Desde `ai_prep_search`, cada fragmento tiene `chunk_to_embed` (texto enriquecido con títulos, encabezados y metadatos de página) y `chunk_to_retrieve` (texto sin procesar del fragmento). Un ingeniero está decidiendo qué columna enviar al modelo de embedding y cuál mostrar al LLM al generar la respuesta.

¿Qué asignación maximiza la calidad de recuperación y la legibilidad de la respuesta?

**Opciones:**
- [x] Generar el embedding de `chunk_to_embed` para mejorar la localizabilidad gracias al contexto añadido, y entregar al LLM `chunk_to_retrieve` como texto original limpio para una generación precisa.
- [ ] Generar el embedding de `chunk_to_retrieve` y entregar al LLM `chunk_to_embed`, para que el modelo lea los metadatos.
- [ ] Generar embedding y recuperar usando `chunk_to_embed` para ambos, de modo que el modelo siempre vea los metadatos.
- [ ] Generar embedding y recuperar usando `chunk_to_retrieve` para ambos, ya que los metadatos nunca son útiles.

**Respuesta Correcta:** Generar el embedding de `chunk_to_embed` y entregar al LLM `chunk_to_retrieve`.

**Justificación:** Los metadatos contextuales agregados ayudan al vector search a localizar el fragmento adecuado; el texto original sin ruido adicional optimiza la comprensión y fluidez del LLM generativo.

---

## Question 5 of 20 / Pregunta 5 de 20

### English
**Question:** A law firm ingests contracts from a document connector that lands file contents into a Unity Catalog table with a content column and a metadata struct. New contracts arrive continuously, and the firm wants a Knowledge Assistant to use this table directly as a knowledge source.

What must be true of that Unity Catalog table for the Knowledge Assistant to use it as a file table source?

**Options:**
- [ ] The table must be stored as Parquet and partitioned by contract date.
- [x] The table must be a streaming table or have Change Data Feed enabled, with a content column (BINARY or STRING) and a metadata struct.
- [ ] The table must be converted into a Unity Catalog Volume before it can be used.
- [ ] The table must already contain a precomputed embedding column produced by `databricks-gte-large-en`.

**Correct Answer:** The table must be a streaming table or have Change Data Feed enabled, with a content column (BINARY or STRING) and a metadata struct.

**Justification:** For a Unity Catalog table to serve as a managed file table source in a Knowledge Assistant, it requires Change Data Feed (or be a Streaming Table) so Databricks can track incremental file additions, along with appropriate content (`BINARY`/`STRING`) and `metadata` struct columns.

### Español
**Pregunta:** Una firma de abogados ingesta contratos desde un conector documental que deposita el contenido de los archivos en una tabla de Unity Catalog con una columna de contenido y una estructura de metadatos. Llegan nuevos contratos continuamente y la firma desea que un Knowledge Assistant use esta tabla directamente como fuente de conocimiento.

¿Qué condición debe cumplir esa tabla de Unity Catalog para que el Knowledge Assistant la use como origen de tabla de archivos?

**Opciones:**
- [ ] La tabla debe almacenarse como Parquet y estar particionada por fecha de contrato.
- [x] La tabla debe ser una tabla de streaming o tener Change Data Feed habilitado, con una columna de contenido (BINARY o STRING) y una estructura de metadatos (struct).
- [ ] La tabla debe convertirse en un Volumen de Unity Catalog antes de poder usarse.
- [ ] La tabla ya debe contener una columna de embeddings precalculada por `databricks-gte-large-en`.

**Respuesta Correcta:** La tabla debe ser una streaming table o tener Change Data Feed habilitado, con una columna de contenido (BINARY o STRING) y un struct de metadatos.

**Justificación:** Esto permite que el Knowledge Assistant detecte automáticamente contratos nuevos o modificados de manera incremental e interprete el contenido del archivo.

---

## Question 6 of 20 / Pregunta 6 de 20

### English
**Question:** When classifying parsed elements, an engineer adds `WHERE LENGTH(content) > 50` and, for extraction, uses a higher threshold such as `LENGTH(content) > 100`. Short items like page numbers and single-word headers had been producing noisy labels.

What is the rationale for these length filters?

**Options:**
- [x] They remove short, low-signal elements so classification and extraction operate on blocks with enough text to be meaningful, and extraction uses a higher bar because it needs more surrounding context.
- [ ] They are required syntax; `ai_classify` and `ai_extract` fail without a `LENGTH` filter.
- [ ] They convert content to lowercase before classification.
- [ ] They cap the maximum number of characters sent to the model to avoid truncation.

**Correct Answer:** They remove short, low-signal elements so classification and extraction operate on blocks with enough text to be meaningful, and extraction uses a higher bar because it needs more surrounding context.

**Justification:** Filtering out short text blocks (such as standalone page numbers or headers) eliminates low-signal noise. Information extraction demands an even higher threshold because complex entities require sufficient surrounding context for the LLM to extract fields accurately.

### Español
**Pregunta:** Al clasificar elementos analizados, un ingeniero añade `WHERE LENGTH(content) > 50` y, para la extracción, utiliza un umbral superior como `LENGTH(content) > 100`. Elementos cortos como números de página y encabezados de una sola palabra producían etiquetas ruidosas.

¿Cuál es la justificación de estos filtros de longitud?

**Opciones:**
- [x] Eliminan elementos cortos y de baja señal para que la clasificación y la extracción operen sobre bloques con suficiente texto relevante, y la extracción utiliza un umbral más alto porque requiere más contexto circundante.
- [ ] Son sintaxis obligatoria; `ai_classify` y `ai_extract` fallan sin un filtro `LENGTH`.
- [ ] Convierten el contenido a minúsculas antes de la clasificación.
- [ ] Limitan la cantidad máxima de caracteres enviados al modelo para evitar truncamientos.

**Respuesta Correcta:** Eliminan elementos cortos de baja señal para que la clasificación y extracción operen sobre bloques con suficiente texto representativo.

**Justificación:** Evita desperdiciar cómputo y generar etiquetas erróneas sobre fragmentos triviales (ej. pie de página); la extracción estructurada exige mayor contexto semántico.

---

## Question 7 of 20 / Pregunta 7 de 20

### English
**Question:** A developer at a healthcare startup wants to call a Knowledge Assistant's serving endpoint from a notebook using the OpenAI Python client, with MLflow tracing enabled.

```python
import mlflow
from openai import OpenAI

mlflow.openai.autolog()
token = dbutils.notebook.entry_point.getDbutils().notebook().getContext().apiToken().get()
host = w.config.host

client = OpenAI(
    api_key=token,
    base_url=f"{host}/______",
)
```

What should replace `______` so requests route to Databricks Model Serving instead of the public OpenAI API?

**Options:**
- [ ] The value should be `api/2.0/mlflow`, the MLflow REST base.
- [ ] The value should be `v1/chat`, pointing at the public OpenAI-compatible path.
- [x] The value should be `serving-endpoints`, so the `base_url` becomes `{host}/serving-endpoints`.
- [ ] The value should be `workspace/agents`, the Agents UI route.

**Correct Answer:** The value should be `serving-endpoints`, so the `base_url` becomes `{host}/serving-endpoints`.

**Justification:** In Databricks, OpenAI-compatible Model Serving endpoints are exposed under the `{host}/serving-endpoints` path prefix.

### Español
**Pregunta:** Un desarrollador en una startup de salud desea llamar al endpoint de servicio de un Knowledge Assistant desde un notebook utilizando el cliente Python de OpenAI, con el rastreo de MLflow habilitado.

¿Qué debe reemplazar a `______` para que las solicitudes se enruten a Databricks Model Serving en lugar de a la API pública de OpenAI?

**Opciones:**
- [ ] El valor debe ser `api/2.0/mlflow`, la base REST de MLflow.
- [ ] El valor debe ser `v1/chat`, que apunta a la ruta compatible pública de OpenAI.
- [x] El valor debe ser `serving-endpoints`, de modo que la `base_url` sea `{host}/serving-endpoints`.
- [ ] El valor debe ser `workspace/agents`, la ruta de la interfaz de Agents.

**Respuesta Correcta:** El valor debe ser `serving-endpoints`, de modo que la `base_url` quede como `{host}/serving-endpoints`.

**Justificación:** Es la ruta base oficial de Databricks Model Serving para procesar solicitudes HTTP con el cliente OpenAI SDK.

---

## Question 8 of 20 / Pregunta 8 de 20

### English
**Question:** A search team notices poor recall after switching the query-time embedding model to a different one than was used to build the index. They also want to understand how ranking is decided.

Which statement is correct?

**Options:**
- [ ] Any embedding model can be used at query time as long as the dimension count matches, regardless of which model built the index.
- [x] Recall dropped because query and index embeddings must come from the same model to share a vector space, and cosine similarity ranks chunks by how small the angle is between the query vector and each chunk vector.
- [ ] Ranking uses exact nearest neighbors only, so approximate search is never involved.
- [ ] Cosine similarity ranks by the raw magnitude of the vectors, so longer text always ranks higher.

**Correct Answer:** Recall dropped because query and index embeddings must come from the same model to share a vector space, and cosine similarity ranks chunks by how small the angle is between the query vector and each chunk vector.

**Justification:** Different embedding models project tokens into completely different coordinate systems, even if they share the same dimensional count. Cosine similarity calculates the angle between normalized vectors; smaller angles (higher cosine values) represent higher semantic similarity.

### Español
**Pregunta:** Un equipo de búsqueda nota un rendimiento de recuperación (recall) deficiente tras cambiar el modelo de embedding en tiempo de consulta por uno distinto al utilizado para construir el índice. También desean comprender cómo se decide el orden de clasificación (ranking).

¿Qué afirmación es correcta?

**Opciones:**
- [ ] Se puede utilizar cualquier modelo de embedding en tiempo de consulta siempre que coincida el número de dimensiones, sin importar qué modelo construyó el índice.
- [x] La recuperación cayó porque los embeddings de la consulta y del índice deben provenir del mismo modelo para compartir el mismo espacio vectorial, y la similitud coseno clasifica los fragmentos según cuán pequeño sea el ángulo entre el vector de consulta y cada vector de fragmento.
- [ ] La clasificación utiliza únicamente vecinos más cercanos exactos, por lo que nunca interviene la búsqueda aproximada.
- [ ] La similitud coseno clasifica por la magnitud bruta de los vectores, por lo que los textos más largos siempre obtienen mejor clasificación.

**Respuesta Correcta:** Los embeddings de consulta e índice deben provenir del mismo modelo para compartir el espacio vectorial, y la similitud coseno clasifica por el ángulo menor entre vectores.

**Justificación:** Modelos distintos generan representaciones vectoriales incompatibles. La similitud coseno mide la cercanía angular, independiente de la longitud del texto.

---

## Question 9 of 20 / Pregunta 9 de 20

### English
**Question:** After enabling `mlflow.openai.autolog()` and calling a Knowledge Assistant endpoint, a data scientist wants to confirm what context was retrieved, see the grounded answer, and verify the response is backed by source documents.

Which pair of capabilities supports this?

**Options:**
- [ ] Autologging disables tracing to save cost, and citations are only available in fine-tuned models.
- [ ] Traces are only visible after registering the model in Unity Catalog, and citations require CONTINUOUS sync.
- [x] The MLflow trace captures the input and output (including retrieved context and the generated answer), and the Knowledge Assistant returns citations back to source documents.
- [ ] The trace shows only latency metrics, and citations must be computed manually with a separate SQL query.

**Correct Answer:** The MLflow trace captures the input and output (including retrieved context and the generated answer), and the Knowledge Assistant returns citations back to source documents.

**Justification:** MLflow autologging automatically generates deep trace spans capturing the exact prompt, the retrieved chunks, and the generated output. Simultaneously, Databricks Knowledge Assistants return citations that hyperlink directly to the underlying source files in Unity Catalog.

### Español
**Pregunta:** Tras habilitar `mlflow.openai.autolog()` y llamar al endpoint de un Knowledge Assistant, un científico de datos desea confirmar qué contexto fue recuperado, ver la respuesta fundamentada y verificar que esté respaldada por documentos fuente.

¿Qué combinación de capacidades permite esto?

**Opciones:**
- [ ] El autologging deshabilita el rastreo para ahorrar costos, y las citas solo están disponibles en modelos fine-tuned.
- [ ] Las trazas solo son visibles tras registrar el modelo en Unity Catalog, y las citas requieren sincronización CONTINUOUS.
- [x] La traza de MLflow captura la entrada y la salida (incluyendo el contexto recuperado y la respuesta generada), y el Knowledge Assistant devuelve citas directas a los documentos fuente.
- [ ] La traza muestra únicamente métricas de latencia, y las citas deben calcularse manualmente con una consulta SQL separada.

**Respuesta Correcta:** La traza de MLflow captura entrada y salida (contexto recuperado y respuesta generada), y el Knowledge Assistant devuelve citas a los documentos fuente.

**Justificación:** La traza inspecciona los pasos intermedios de inferencia y las citas vinculan formalmente el texto generado con los documentos de respaldo.

---

## Question 10 of 20 / Pregunta 10 de 20

### English
**Question:** A retailer already owns a custom RAG pipeline and a vector search index. They want to attach that existing index to a Knowledge Assistant as a source, but the index was built with a third-party embedding model.

What is the key requirement they must satisfy?

**Options:**
- [ ] The index must contain fewer than 10 columns to attach as a source.
- [ ] The index must be copied into a Unity Catalog Volume as PDFs first.
- [ ] The index must be rebuilt in CONTINUOUS pipeline mode before it can be attached.
- [x] The AI Search index must use a supported Databricks embedding model, such as `databricks-gte-large-en`, rather than an unsupported third-party model.

**Correct Answer:** The AI Search index must use a supported Databricks embedding model, such as `databricks-gte-large-en`, rather than an unsupported third-party model.

**Justification:** Databricks Knowledge Assistants require that attached vector search indexes use native, supported Databricks embedding endpoints (like `databricks-gte-large-en` or `databricks-bge-large-en`) so the assistant can embed incoming user queries using the exact same model.

### Español
**Pregunta:** Un minorista ya cuenta con un pipeline RAG personalizado y un índice de búsqueda vectorial. Desea adjuntar ese índice existente a un Knowledge Assistant como fuente, pero el índice fue creado con un modelo de embedding de un tercero no soportado.

¿Cuál es el requisito clave que debe cumplir?

**Opciones:**
- [ ] El índice debe contener menos de 10 columnas para poder adjuntarse como origen.
- [ ] El índice debe copiarse primero como archivos PDF en un Volumen de Unity Catalog.
- [ ] El índice debe reconstruirse en modo de pipeline CONTINUOUS antes de adjuntarse.
- [x] El índice de AI Search debe utilizar un modelo de embedding soportado por Databricks, como `databricks-gte-large-en`, en lugar de un modelo de terceros no admitido.

**Respuesta Correcta:** El índice de AI Search debe usar un modelo de embedding soportado por Databricks, como `databricks-gte-large-en`.

**Justificación:** El Knowledge Assistant necesita generar embeddings de las consultas de los usuarios utilizando el mismo endpoint compatible alojado en la plataforma.

---

## Question 11 of 20 / Pregunta 11 de 20

### English
**Question:** A pharmaceutical team needs a production-grade question-answering assistant over standard operating procedure PDFs within days, and does not want to hand-build parsing, chunking, embedding, and serving. A separate team needs a novel multi-step, tool-heavy agent with unusual orchestration.

Which choice best fits each team?

**Options:**
- [ ] Both teams should use a Knowledge Assistant, since custom agents are not supported on Databricks.
- [x] The first team should use a Knowledge Assistant (declarative, managed), and the second should build a code-first custom agent for full control.
- [ ] The first team should build a code-first agent, and the second should use a Knowledge Assistant.
- [ ] Both teams should build code-first custom agents, since Knowledge Assistants cannot serve production traffic.

**Correct Answer:** The first team should use a Knowledge Assistant (declarative, managed), and the second should build a code-first custom agent for full control.

**Justification:** Knowledge Assistant provides a managed, no-code/low-code RAG solution with automated parsing, chunking, and search. A code-first agent (using the Databricks Agent Framework / LangGraph / OpenAI SDK) is required when complex branching, custom tools, or specialized multi-agent loops are needed.

### Español
**Pregunta:** Un equipo farmacéutico necesita un asistente de preguntas y respuestas de nivel de producción sobre PDFs de procedimientos operativos estándar en cuestión de días, y no desea construir manualmente el parseo, la fragmentación, los embeddings y el servicio. Otro equipo independiente necesita un agente multi-paso innovador, intensivo en herramientas y con una orquestación no convencional.

¿Qué elección se adapta mejor a cada equipo?

**Opciones:**
- [ ] Ambos equipos deben utilizar un Knowledge Assistant, ya que los agentes personalizados no son compatibles con Databricks.
- [x] El primer equipo debe utilizar un Knowledge Assistant (declarativo y administrado), y el segundo debe construir un agente personalizado orientado a código (code-first) para un control total.
- [ ] El primer equipo debe construir un agente code-first, y el segundo debe utilizar un Knowledge Assistant.
- [ ] Ambos equipos deben construir agentes personalizados code-first, ya que los Knowledge Assistants no pueden atender tráfico de producción.

**Respuesta Correcta:** El primer equipo debe usar un Knowledge Assistant (administrado) y el segundo un agente personalizado code-first.

**Justificación:** Knowledge Assistant acelera el despliegue de RAG sobre documentos; flujos con lógica personalizada y herramientas complejas requieren desarrollo en código.

---

## Question 12 of 20 / Pregunta 12 de 20

### English
**Question:** A regional credit union wants an internal assistant to answer staff questions about its latest lending policies, which are updated monthly. A pilot using only a base LLM with carefully worded prompts keeps returning outdated rules and occasionally invents policy details that do not exist.

Which explanation best describes why prompt refinement alone cannot fix these two problems?

**Options:**
- [x] A base LLM is limited by its training cutoff and has no access to the credit union's private, changing documents, so it cannot know current policies and fills gaps by hallucinating.
- [ ] The model needs a higher temperature to stop inventing details and a lower one to stay current.
- [ ] The prompts are too long, so the model runs out of context window before it can read the policy question.
- [ ] The model must be fine-tuned on general financial text before any prompt can produce accurate answers.

**Correct Answer:** A base LLM is limited by its training cutoff and has no access to the credit union's private, changing documents, so it cannot know current policies and fills gaps by hallucinating.

**Justification:** A static foundation model has a knowledge cutoff and cannot access proprietary corporate data that changes frequently. Refining prompt wording cannot inject missing factual knowledge; only RAG solves this.

### Español
**Pregunta:** Una cooperativa de crédito regional desea un asistente interno para responder preguntas del personal sobre sus políticas de préstamo más recientes, que se actualizan mensualmente. Un piloto que usa solo un LLM base con prompts cuidadosamente redactados devuelve normas desactualizadas y en ocasiones inventa detalles que no existen.

¿Qué explicación describe mejor por qué el refinamiento de prompts por sí solo no puede solucionar estos dos problemas?

**Opciones:**
- [x] Un LLM base está limitado por su fecha de corte de entrenamiento y no tiene acceso a los documentos privados y cambiantes de la cooperativa, por lo que no puede conocer las políticas actuales y llena las lagunas alucinando.
- [ ] El modelo necesita una temperatura más alta para dejar de inventar detalles y una más baja para mantenerse actualizado.
- [ ] Los prompts son demasiado largos, por lo que el modelo se queda sin ventana de contexto antes de poder leer la pregunta sobre la política.
- [ ] El modelo debe ser ajustado (fine-tuned) con texto financiero general antes de que cualquier prompt pueda producir respuestas precisas.

**Respuesta Correcta:** Un LLM base está limitado por su fecha de corte y carece de acceso a documentos privados actualizados, rellenando vacíos con alucinaciones.

**Justificación:** Ningún prompt puede hacer que un modelo base adivine políticas privadas y dinámicas sin suministrarle los documentos mediante recuperación (RAG).

---

## Question 13 of 20 / Pregunta 13 de 20

### English
**Question:** A procurement analyst extracts fields from parsed vendor purchase orders and wants each field as its own column.

```sql
SELECT
  content,
  ai_extract(content, '["po_number","vendor","total"]') AS ext
FROM elements
```

Which expression correctly pulls the extracted vendor value into a column?

**Options:**
- [ ] `ext[1]`, because `ai_extract` returns an ordered array with vendor in the second position.
- [ ] `ai_extract(ext, 'vendor')`, because you must call the function a second time to read a field.
- [ ] `ext:vendor::ARRAY`, because each extracted field is returned as an array of candidates.
- [x] `ext:response.vendor`, because `ai_extract` returns a VARIANT with a response object whose fields match the requested names.

**Correct Answer:** `ext:response.vendor`, because `ai_extract` returns a VARIANT with a response object whose fields match the requested names.

**Justification:** In Databricks SQL, `ai_extract` outputs a `VARIANT` containing a root `response` object. Individual extracted keys are accessed using the colon syntax: `column:response.field_name`.

### Español
**Pregunta:** Un analista de adquisiciones extrae campos de órdenes de compra de proveedores analizadas y desea que cada campo quede en su propia columna.

```sql
SELECT
  content,
  ai_extract(content, '["po_number","vendor","total"]') AS ext
FROM elements
```

¿Qué expresión extrae correctamente el valor del proveedor (`vendor`) a una columna?

**Opciones:**
- [ ] `ext[1]`, porque `ai_extract` devuelve un arreglo ordenado con vendor en la segunda posición.
- [ ] `ai_extract(ext, 'vendor')`, porque se debe llamar a la función una segunda vez para leer un campo.
- [ ] `ext:vendor::ARRAY`, porque cada campo extraído se devuelve como un arreglo de candidatos.
- [x] `ext:response.vendor`, porque `ai_extract` devuelve un VARIANT con un objeto response cuyos campos coinciden con los nombres solicitados.

**Respuesta Correcta:** `ext:response.vendor`, porque `ai_extract` devuelve un VARIANT con un objeto `response`.

**Justificación:** En Databricks SQL, la navegación dentro de tipos VARIANT utiliza dos puntos (`:`) para descender en la jerarquía JSON del objeto `response`.

---

## Question 14 of 20 / Pregunta 14 de 20

### English
**Question:** A clinical research team parses scanned consent-form PDFs stored in a Unity Catalog Volume and wants layout-aware output pinned to the current schema, including figure descriptions and bounding boxes.

```sql
SELECT
  path,
  ai_parse_document(content, MAP('version', '2.0')) AS parsed
FROM READ_FILES('/Volumes/research/trials/consent_forms', format => 'binaryFile')
```

What does the parsed column contain, and why pass `MAP('version', '2.0')`?

**Options:**
- [ ] A DOUBLE similarity score; the version chooses the embedding model.
- [x] A VARIANT of structured JSON (document elements and pages); the version pins output to the v2.0 schema, which supports descriptions and bounding boxes.
- [ ] An ARRAY of page images; the version selects a higher image resolution.
- [ ] A STRING of plain text; the version pins the output to raw OCR only.

**Correct Answer:** A VARIANT of structured JSON (document elements and pages); the version pins output to the v2.0 schema, which supports descriptions and bounding boxes.

**Justification:** `ai_parse_document` returns a structured `VARIANT` representing the full document layout. Specifying `MAP('version', '2.0')` locks the schema to version 2.0, guaranteeing support for visual bounding boxes, reading order, and figure descriptions.

### Español
**Pregunta:** Un equipo de investigación clínica analiza formularios de consentimiento en PDF escaneados almacenados en un Volumen de Unity Catalog y desea una salida que preserve el diseño visual fijada al esquema actual, incluyendo descripciones de figuras y cuadros delimitadores (bounding boxes).

```sql
SELECT
  path,
  ai_parse_document(content, MAP('version', '2.0')) AS parsed
FROM READ_FILES('/Volumes/research/trials/consent_forms', format => 'binaryFile')
```

¿Qué contiene la columna analizada (`parsed`) y por qué se pasa `MAP('version', '2.0')`?

**Opciones:**
- [ ] Una puntuación de similitud DOUBLE; la versión elige el modelo de embedding.
- [x] Un VARIANT de JSON estructurado (elementos del documento y páginas); la versión fija la salida al esquema v2.0, que admite descripciones y cuadros delimitadores (bounding boxes).
- [ ] Un ARRAY de imágenes de página; la versión selecciona una mayor resolución de imagen.
- [ ] Una cadena STRING de texto plano; la versión fija la salida solo a OCR sin procesar.

**Respuesta Correcta:** Un VARIANT de JSON estructurado; la versión fija el esquema v2.0 con soporte para descripciones y bounding boxes.

**Justificación:** El parámetro de versión asegura estabilidad en el esquema JSON y desbloquea metadatos avanzados de maquetación y coordenadas visuales.

---

## Question 15 of 20 / Pregunta 15 de 20

### English
**Question:** A team creates a Delta Sync index on a standard AI Search endpoint. After the initial sync, incremental updates fail to propagate, and they discover the source table was created without Change Data Feed. A colleague suggests dropping and rebuilding the whole index on every update instead.

What is the correct fix, and why?

**Options:**
- [x] Enable Change Data Feed on the source table, because Delta Sync indexes on standard endpoints require CDF, which lets AI Search process only the changed rows for efficient incremental sync.
- [ ] Set `num_results` higher so more rows are returned per sync.
- [ ] Move the table to a Unity Catalog Volume, because indexes can only sync from volumes.
- [ ] Switch the `query_type` to `FULL_TEXT`, because vector indexes cannot sync incrementally.

**Correct Answer:** Enable Change Data Feed on the source table, because Delta Sync indexes on standard endpoints require CDF, which lets AI Search process only the changed rows for efficient incremental sync.

**Justification:** Delta Sync indexes on standard AI Search endpoints rely on Delta Change Data Feed (CDF) to track row-level insertions, updates, and deletions incrementally, avoiding expensive full index recomputations.

### Español
**Pregunta:** Un equipo crea un índice Delta Sync en un endpoint estándar de AI Search. Tras la sincronización inicial, las actualizaciones incrementales no se propagan y descubren que la tabla de origen se creó sin Change Data Feed. Un colega sugiere eliminar y reconstruir todo el índice en cada actualización.

¿Cuál es la solución correcta y por qué?

**Opciones:**
- [x] Habilitar Change Data Feed en la tabla de origen, porque los índices Delta Sync en endpoints estándar requieren CDF, lo que permite a AI Search procesar únicamente las filas modificadas para una sincronización incremental eficiente.
- [ ] Aumentar `num_results` para que se devuelvan más filas por sincronización.
- [ ] Mover la tabla a un Volumen de Unity Catalog, porque los índices solo pueden sincronizarse desde volúmenes.
- [ ] Cambiar el `query_type` a `FULL_TEXT`, porque los índices vectoriales no pueden sincronizarse de forma incremental.

**Respuesta Correcta:** Habilitar Change Data Feed (CDF) en la tabla Delta de origen.

**Justificación:** CDF registra los cambios a nivel de fila (inserts, updates, deletes), permitiendo a Vector Search sincronizar de forma incremental sin recomputar todo el índice.

---

## Question 16 of 20 / Pregunta 16 de 20

### English
**Question:** A property and casualty insurer is designing a claims assistant. When an adjuster asks a question, the system first searches an index of policy documents, then places the most relevant passages into the model's prompt, and finally has the model write an answer grounded in those passages.

These three steps map to which pattern, in order?

**Options:**
- [ ] Retrieve, Generate, Augment
- [x] Retrieve, Augment, Generate
- [ ] Augment, Generate, Retrieve
- [ ] Generate, Retrieve, Augment

**Correct Answer:** Retrieve, Augment, Generate

**Justification:** The RAG architectural acronym stands for:
1. **Retrieve:** Search the index for relevant passages.
2. **Augment:** Inject the retrieved passages into the model's prompt context.
3. **Generate:** The LLM produces the final grounded response.

### Español
**Pregunta:** Una aseguradora de bienes y accidentes está diseñando un asistente de siniestros. Cuando un ajustador hace una pregunta, el sistema primero busca en un índice de documentos de pólizas, luego coloca los pasajes más relevantes en el prompt del modelo y finalmente hace que el modelo redacte una respuesta fundamentada en esos pasajes.

¿A qué patrón corresponden estos tres pasos, en orden?

**Opciones:**
- [ ] Recuperar, Generar, Aumentar (Retrieve, Generate, Augment)
- [x] Recuperar, Aumentar, Generar (Retrieve, Augment, Generate)
- [ ] Aumentar, Generar, Recuperar (Augment, Generate, Retrieve)
- [ ] Generar, Recuperar, Aumentar (Generate, Retrieve, Augment)

**Respuesta Correcta:** Recuperar, Aumentar, Generar (Retrieve, Augment, Generate).

**Justificación:** Es la definición canónica del acrónimo RAG: búsqueda en el almacén de conocimiento (Retrieve), enriquecimiento del prompt (Augment) y respuesta del modelo (Generate).

---

## Question 17 of 20 / Pregunta 17 de 20

### English
**Question:** A compliance team updates a chunks table in nightly batches and wants to control exactly when the index refreshes to keep costs predictable. A separate trading-desk team needs the index to reflect new documents within seconds of arrival.

Which `pipeline_type` fits each team?

**Options:**
- [ ] Compliance: `CONTINUOUS`; Trading desk: `TRIGGERED`.
- [ ] Both should use `CONTINUOUS`, since `TRIGGERED` cannot sync updated rows.
- [x] Compliance: `TRIGGERED` (sync on demand, cost control for batch); Trading desk: `CONTINUOUS` (near-real-time freshness at higher compute cost).
- [ ] Both should use `TRIGGERED`, since `CONTINUOUS` is only for one-time backfills.

**Correct Answer:** Compliance: `TRIGGERED` (sync on demand, cost control for batch); Trading desk: `CONTINUOUS` (near-real-time freshness at higher compute cost).

**Justification:** `TRIGGERED` executes syncs on demand or on a scheduled batch basis, minimizing DBU spend for nightly workloads. `CONTINUOUS` keeps streaming clusters alive to sync changes with sub-minute latency at higher compute cost.

### Español
**Pregunta:** Un equipo de cumplimiento normativo actualiza una tabla de fragmentos en lotes nocturnos y desea controlar exactamente cuándo se actualiza el índice para mantener los costos predecibles. Otro equipo de mesa de operaciones necesita que el índice refleje los nuevos documentos a los pocos segundos de su llegada.

¿Qué `pipeline_type` se ajusta a cada equipo?

**Opciones:**
- [ ] Cumplimiento: `CONTINUOUS`; Mesa de operaciones: `TRIGGERED`.
- [ ] Ambos deben usar `CONTINUOUS`, ya que `TRIGGERED` no puede sincronizar filas actualizadas.
- [x] Cumplimiento: `TRIGGERED` (sincronización bajo demanda, control de costos para lotes); Mesa de operaciones: `CONTINUOUS` (frescura casi en tiempo real con mayor costo computacional).
- [ ] Ambos deben usar `TRIGGERED`, ya que `CONTINUOUS` solo sirve para reprocesamientos puntuales.

**Respuesta Correcta:** Cumplimiento: `TRIGGERED`; Mesa de operaciones: `CONTINUOUS`.

**Justificación:** `TRIGGERED` optimiza costos apagando el cómputo tras la sincronización por lotes; `CONTINUOUS` mantiene streaming activo para latencia de segundos.

---

## Question 18 of 20 / Pregunta 18 de 20

### English
**Question:** An auditor has a parsed VARIANT column from consent forms and needs one row per content block so each block can be filtered and classified.

```sql
SELECT
  element.value:type::STRING AS element_type,
  element.value:content::STRING AS content
FROM parsed_docs,
  LATERAL ______(parsed_docs.parsed:document:elements) AS element
WHERE element.value:content IS NOT NULL
```

Which function belongs in the blank to turn the elements array into one row per element?

**Options:**
- [ ] `explode_outer`, because it is the only function that works on VARIANT columns.
- [x] `variant_explode`, which converts a VARIANT array or object into rows exposing pos, key, and value columns.
- [ ] `posexplode`, which requires the column to already be an ARRAY type, not VARIANT.
- [ ] `from_json`, which parses a JSON string into a struct without producing multiple rows.

**Correct Answer:** `variant_explode`, which converts a VARIANT array or object into rows exposing pos, key, and value columns.

**Justification:** `variant_explode` is the native Databricks SQL table-valued generator function for `VARIANT` data types, converting JSON arrays into rows while providing `pos`, `key`, and `value` fields.

### Español
**Pregunta:** Un auditor tiene una columna VARIANT analizada de formularios de consentimiento y necesita una fila por cada bloque de contenido para que cada uno pueda filtrarse y clasificarse.

```sql
SELECT
  element.value:type::STRING AS element_type,
  element.value:content::STRING AS content
FROM parsed_docs,
  LATERAL ______(parsed_docs.parsed:document:elements) AS element
WHERE element.value:content IS NOT NULL
```

¿Qué función corresponde al espacio en blanco para transformar el arreglo de elementos en una fila por cada elemento?

**Opciones:**
- [ ] `explode_outer`, porque es la única función que opera sobre columnas VARIANT.
- [x] `variant_explode`, que convierte un arreglo u objeto VARIANT en filas exponiendo las columnas pos, key y value.
- [ ] `posexplode`, que requiere que la columna sea de tipo ARRAY y no VARIANT.
- [ ] `from_json`, que analiza una cadena JSON en una estructura sin producir múltiples filas.

**Respuesta Correcta:** `variant_explode`, que convierte un arreglo u objeto VARIANT en filas con columnas `pos`, `key` y `value`.

**Justificación:** Es la función nativa de Databricks SQL diseñada para desanidar arreglos dentro de tipos de datos VARIANT.

---

## Question 19 of 20 / Pregunta 19 de 20

### English
**Question:** Two engineers at a logistics firm debate their agent design. One focuses only on rewording the instruction text sent to the model. The other argues they must design the whole information environment: retrieved shipment records, system instructions, conversation history, and tool outputs, while keeping the token budget under control.

How is the second engineer's approach best characterized relative to the first?

**Options:**
- [x] It is context engineering, a broader discipline that manages the entire input environment, whereas the first engineer is doing prompt engineering, which targets only the instruction text.
- [ ] Both are prompt engineering, since anything placed in the context window is a prompt.
- [ ] It is fine-tuning, because managing conversation history changes the model's weights over time.
- [ ] It is prompt engineering, and the first engineer is doing context engineering by keeping the instructions short.

**Correct Answer:** It is context engineering, a broader discipline that manages the entire input environment, whereas the first engineer is doing prompt engineering, which targets only the instruction text.

**Justification:** Prompt engineering is narrowly focused on the wording and syntax of instructions. Context engineering is the architectural discipline of assembling and managing the complete informational package (retrieved documents, memories, tool schemas, chat state) within token constraints.

### Español
**Pregunta:** Dos ingenieros de una empresa de logística debaten sobre el diseño de su agente. Uno se centra únicamente en reformular el texto de instrucciones enviado al modelo. El otro sostiene que deben diseñar todo el entorno de información: registros de envíos recuperados, instrucciones del sistema, historial de conversación y salidas de herramientas, manteniendo bajo control el presupuesto de tokens.

¿Cómo se caracteriza mejor el enfoque del segundo ingeniero en comparación con el primero?

**Opciones:**
- [x] Es ingeniería de contexto (context engineering), una disciplina más amplia que gestiona todo el entorno de entrada, mientras que el primer ingeniero realiza ingeniería de prompts (prompt engineering), que se enfoca únicamente en el texto de las instrucciones.
- [ ] Ambos realizan ingeniería de prompts, ya que cualquier elemento colocado en la ventana de contexto es un prompt.
- [ ] Es fine-tuning, porque la gestión del historial de conversación modifica los pesos del modelo a lo largo del tiempo.
- [ ] Es ingeniería de prompts, y el primer ingeniero realiza ingeniería de contexto al mantener las instrucciones breves.

**Respuesta Correcta:** Es ingeniería de contexto (context engineering), que gestiona todo el entorno de entrada del modelo.

**Justificación:** La ingeniería de contexto abarca la arquitectura completa de lo que el modelo percibe (RAG, memoria, herramientas, prompts del sistema y presupuesto de tokens).

---

## Question 20 of 20 / Pregunta 20 de 20

### English
**Question:** A manufacturer points a Knowledge Assistant at a Unity Catalog Volume of equipment manuals. Most are a few megabytes, but three consolidated manuals are about 80 MB each. After indexing, answers never cite the three large manuals.

What is the most likely reason?

**Options:**
- [ ] The volume must be smaller than 50 MB in total, so the whole volume was skipped.
- [ ] The Knowledge Assistant only indexes the first file in any volume.
- [x] Files larger than 50 MB are automatically skipped, so the three oversized manuals were never ingested.
- [ ] PDF files are never supported as a Knowledge Assistant source.

**Correct Answer:** Files larger than 50 MB are automatically skipped, so the three oversized manuals were never ingested.

**Justification:** Databricks Knowledge Assistants enforce a strict maximum file size limit of 50 MB per file when ingesting documents from Unity Catalog Volumes. Files exceeding 50 MB are ignored during the indexing process.

### Español
**Pregunta:** Un fabricante vincula un Knowledge Assistant a un Volumen de Unity Catalog que contiene manuales de equipos. La mayoría pesa unos pocos megabytes, pero tres manuales consolidados rondan los 80 MB cada uno. Tras la indexación, las respuestas nunca citan los tres manuales grandes.

¿Cuál es la razón más probable?

**Opciones:**
- [ ] El volumen debe ser menor a 50 MB en total, por lo que se omitió todo el volumen.
- [ ] El Knowledge Assistant solo indexa el primer archivo de cualquier volumen.
- [x] Los archivos que superan los 50 MB se omiten automáticamente, por lo que los tres manuales de gran tamaño nunca fueron ingeridos.
- [ ] Los archivos PDF nunca son compatibles como origen de un Knowledge Assistant.

**Respuesta Correcta:** Los archivos que superan los 50 MB se omiten automáticamente durante la indexación.

**Justificación:** Databricks Knowledge Assistant establece un límite máximo de tamaño de archivo de 50 MB; cualquier documento que supere este umbral es descartado de la ingesta.
