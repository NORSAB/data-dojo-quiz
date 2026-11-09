# Databricks Certified Generative AI Engineer Associate
## Domain 4: Assembling and Deploying Applications — Parte 2 (48 Preguntas)

> **Total de Preguntas en esta sección**: 48
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026 (Unificado: CertSafari Base 373 Qs + Var4 349 Qs)

---

### Pregunta 240: What distance metrics are supported when creating a Mosaic AI Vector Search index?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.8: Explain the key concepts and components of Mosaic AI Vector Search  

#### Opciones:
- **A**: Cosine Distance (`COSINE`), Dot Product (`DOT_PRODUCT`), and Euclidean Distance (`L2_DISTANCE`).
- **B**: Manhattan Taxicab metric only.
- **C**: Hamming distance on ASCII strings only.
- **D**: Random integer distance.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Cosine Distance (`COSINE`), Dot Product (`DOT_PRODUCT`), and Euclidean Distance (`L2_DISTANCE`).**

Mosaic AI Vector Search supports standard vector similarity metrics: Cosine, Dot Product, and L2 Euclidean distance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Manhattan distance is not the primary embedding metric.
• **(C)**: Incorrect. Hamming distance is for binary bit strings, not dense float vectors.
• **(D)**: Incorrect. Random distance produces meaningless search results.

---

### Pregunta 241: What happens when a Vector Search index is queried with metadata filters on columns that are indexed alongside the vectors?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.8: Explain the key concepts and components of Mosaic AI Vector Search  

#### Opciones:
- **A**: Filtered vector search evaluates metadata predicates during ANN traversal (hybrid/pre-filtering), ensuring returned results satisfy both semantic similarity and metadata rules.
- **B**: The filter is ignored and all vectors are returned.
- **C**: The index converts all columns into text strings.
- **D**: The query fails with an unhandled exception.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Filtered vector search evaluates metadata predicates during ANN traversal (hybrid/pre-filtering), ensuring returned results satisfy both semantic similarity and metadata rules.**

Integrated filtering ensures that returned candidates strictly match metadata constraints (e.g. department='HR') while maximizing semantic relevance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Filters are strictly enforced during index traversal.
• **(C)**: Incorrect. Column data types are preserved.
• **(D)**: Incorrect. Valid metadata filters execute reliably.

---

### Pregunta 242: Why is an internal sync pipeline created when you set up a Delta Sync Index in Mosaic AI Vector Search?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.8: Explain the key concepts and components of Mosaic AI Vector Search  

#### Opciones:
- **A**: The managed pipeline continuously streams CDC commits from the Delta table into the vector index storage format in the background.
- **B**: To mine cryptocurrency on idle GPU nodes.
- **C**: To compress the Delta table into a zip archive.
- **D**: To back up the user's browser history.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The managed pipeline continuously streams CDC commits from the Delta table into the vector index storage format in the background.**

The background sync pipeline handles continuous change ingestion, embedding generation (if managed), and HNSW graph updates automatically.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Sync pipelines execute vector indexing, not cryptocurrency mining.
• **(C)**: Incorrect. Delta Lake maintains Parquet files, not zip archives.
• **(D)**: Incorrect. Server pipelines do not interact with client browser histories.

---

### Pregunta 243: What is the SQL function `ai_query()` in Databricks and what is its primary use case?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.9: Identify batch inference workloads and apply ai_query() appropriately  

#### Opciones:
- **A**: A native SQL function that invokes LLMs and Foundation Model endpoints directly from SQL queries for batch processing, translation, extraction, and classification over Delta tables.
- **B**: A function that creates visual charts in PowerPoint.
- **C**: A function that shuts down SQL Warehouses.
- **D**: A function that deletes duplicate rows in Excel.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A native SQL function that invokes LLMs and Foundation Model endpoints directly from SQL queries for batch processing, translation, extraction, and classification over Delta tables.**

`ai_query()` allows data analysts and engineers to run LLM inference directly on millions of rows in Delta Lake using standard SQL syntax.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `ai_query()` executes model inference; it does not generate PowerPoint files.
• **(C)**: Incorrect. It runs on active SQL Warehouses without shutting them down.
• **(D)**: Incorrect. It operates on Delta Lake, not Excel files.

---

### Pregunta 244: What is the correct SQL syntax to classify customer reviews in table `reviews` using `ai_query()` on Databricks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.9: Identify batch inference workloads and apply ai_query() appropriately  

#### Opciones:
- **A**: `SELECT review_id, ai_query('databricks-meta-llama-3-3-70b-instruct', CONCAT('Classify sentiment as POSITIVE, NEGATIVE, or NEUTRAL: ', review_text)) AS sentiment FROM reviews;`
- **B**: `RUN LLM ON reviews;`
- **C**: `EXECUTE PYTHON 'import openai' ON TABLE reviews;`
- **D**: `CALL model.predict(reviews);`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `SELECT review_id, ai_query('databricks-meta-llama-3-3-70b-instruct', CONCAT('Classify sentiment as POSITIVE, NEGATIVE, or NEUTRAL: ', review_text)) AS sentiment FROM reviews;`**

`ai_query(endpoint_name, prompt_string)` is the official SQL function signature for invoking Model Serving endpoints in Databricks.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `RUN LLM` is invalid SQL syntax.
• **(C)**: Incorrect. `EXECUTE PYTHON` is not standard SQL syntax for table queries.
• **(D)**: Incorrect. `CALL model.predict` is not the Databricks SQL LLM function.

---

### Pregunta 245: When running large-scale batch inference over 100 million customer records using `ai_query()`, what compute resource should be used for optimal throughput and scaling?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.9: Identify batch inference workloads and apply ai_query() appropriately  

#### Opciones:
- **A**: A Serverless Databricks SQL Warehouse or provisioned throughput Model Serving endpoint.
- **B**: A single-core local CPU laptop.
- **C**: A standard web browser tab.
- **D**: A shared memory USB drive.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A Serverless Databricks SQL Warehouse or provisioned throughput Model Serving endpoint.**

Serverless SQL Warehouses scale compute automatically to parallelize `ai_query()` calls across large datasets efficiently.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. A single-core laptop cannot handle 100M rows with reasonable latency.
• **(C)**: Incorrect. Browsers cannot process 100M database records.
• **(D)**: Incorrect. USB drives provide storage, not distributed parallel compute.

---

### Pregunta 246: How does `ai_query()` handle structured JSON output return types in Databricks SQL?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.9: Identify batch inference workloads and apply ai_query() appropriately  

#### Opciones:
- **A**: By specifying the `responseSchema` argument (e.g. `responseSchema => 'STRUCT<sentiment: STRING, confidence: DOUBLE>'`) to parse JSON output into native SQL STRUCT types directly.
- **B**: It converts all JSON into unreadable binary blobs.
- **C**: It outputs text that must be manually parsed with Excel formulas.
- **D**: Structured output is not supported in `ai_query()`.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By specifying the `responseSchema` argument (e.g. `responseSchema => 'STRUCT<sentiment: STRING, confidence: DOUBLE>'`) to parse JSON output into native SQL STRUCT types directly.**

The `responseSchema` parameter in `ai_query()` automatically parses structured model responses into strongly-typed SQL structs and arrays.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `ai_query()` produces typed SQL columns, not binary blobs.
• **(C)**: Incorrect. Automated SQL parsing eliminates manual Excel processing.
• **(D)**: Incorrect. Structured schemas are natively supported via `responseSchema`.

---

### Pregunta 247: In batch scoring pipelines, why is using `ai_query()` in SQL often preferred over running custom Python loops with `requests.post()` in a notebook?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.9: Identify batch inference workloads and apply ai_query() appropriately  

#### Opciones:
- **A**: It leverages Spark's distributed query engine for parallelization, automatic retries, connection pooling, and optimized throughput across cluster workers.
- **B**: Because Python code is illegal in Databricks.
- **C**: Because `ai_query()` deletes the input table after running.
- **D**: Because `requests.post()` makes all responses free.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It leverages Spark's distributed query engine for parallelization, automatic retries, connection pooling, and optimized throughput across cluster workers.**

`ai_query()` parallelizes requests across Spark partitions with built-in backoff, concurrency tuning, and error handling.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Python is fully supported across the entire Lakehouse.
• **(C)**: Incorrect. `ai_query()` reads tables; it does not delete input data.
• **(D)**: Incorrect. Calling APIs via Python still incurs standard compute/token costs.

---

### Pregunta 248: How can `ai_query()` be used to generate vector embeddings in batch over a Delta table?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.9: Identify batch inference workloads and apply ai_query() appropriately  

#### Opciones:
- **A**: By calling an embedding endpoint (e.g. `ai_query('databricks-bge-large-en', text_column)`) to generate dense float arrays for every row.
- **B**: By multiplying text strings by 10 in SQL.
- **C**: By sorting the table alphabetically.
- **D**: Embeddings cannot be generated in SQL.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By calling an embedding endpoint (e.g. `ai_query('databricks-bge-large-en', text_column)`) to generate dense float arrays for every row.**

`ai_query()` supports embedding endpoints, returning `ARRAY<FLOAT>` vectors for bulk embedding generation in Delta Lake.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. String multiplication does not produce semantic vector embeddings.
• **(C)**: Incorrect. Alphabetical sorting does not compute neural embeddings.
• **(D)**: Incorrect. `ai_query()` fully supports embedding endpoints.

---

### Pregunta 249: A company has a 50-million vector document corpus updated once every 24 hours at midnight. Which Vector Search configuration optimizes cost while fulfilling requirements?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.10: Configure vector search for a particular solution based on number of embeddings, update frequency, latency, and cost requirements  

#### Opciones:
- **A**: A **Delta Sync Index with Triggered sync**, scheduled to run once nightly following the ETL batch job.
- **B**: A continuous sync index running 24/7 on maximum compute.
- **C**: Rebuilding the entire 50M index from scratch every 5 minutes.
- **D**: A direct access index with manual API inserts on every mouse click.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A **Delta Sync Index with Triggered sync**, scheduled to run once nightly following the ETL batch job.**

Triggered sync provisions compute only during the scheduled refresh window, avoiding 24/7 idle compute charges for once-daily updates.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Continuous 24/7 sync wastes compute budget when data only changes once a day.
• **(C)**: Incorrect. Full rebuilds every 5 minutes create massive compute costs and downtime.
• **(D)**: Incorrect. Manual inserts for 50M records are unmanageable.

---

### Pregunta 250: A mission-critical financial news search tool requires that breaking news articles be searchable within 5 seconds of publication. What configuration is required?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.10: Configure vector search for a particular solution based on number of embeddings, update frequency, latency, and cost requirements  

#### Opciones:
- **A**: A **Delta Sync Index with Continuous sync** pipeline connected to a streaming Delta table with CDF.
- **B**: A triggered sync index that runs once per week.
- **C**: Manual CSV export once a month.
- **D**: A paper filing cabinet.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A **Delta Sync Index with Continuous sync** pipeline connected to a streaming Delta table with CDF.**

Continuous sync keeps sync compute active to stream CDC commits into the vector index in near real-time (sub-10s latency).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Weekly triggered sync fails the 5-second freshness requirement completely.
• **(C)**: Incorrect. Monthly manual exports are completely inadequate for real-time news.
• **(D)**: Incorrect. Paper filing cannot serve real-time digital search queries.

---

### Pregunta 251: What factor dictates the memory and compute capacity needed for a Vector Search Endpoint?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.10: Configure vector search for a particular solution based on number of embeddings, update frequency, latency, and cost requirements  

#### Opciones:
- **A**: The total number of indexed vectors, vector dimensionality, metadata storage size, and expected query concurrency (QPS).
- **B**: The color of the office wallpaper.
- **C**: The number of characters in the company name.
- **D**: The room temperature of the data center.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The total number of indexed vectors, vector dimensionality, metadata storage size, and expected query concurrency (QPS).**

Vector index memory scales with `N_vectors * dimension * 4 bytes` plus HNSW graph index overhead and metadata storage.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Wallpaper color has no relationship to cloud capacity.
• **(C)**: Incorrect. Company name length does not affect index memory.
• **(D)**: Incorrect. Room temperature is managed by facility HVAC, not software sizing.

---

### Pregunta 252: When configuring a Vector Search index, how does embedding dimension selection (e.g. 384 vs 1536) impact cost?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.10: Configure vector search for a particular solution based on number of embeddings, update frequency, latency, and cost requirements  

#### Opciones:
- **A**: Smaller dimensions (384) consume 4x less memory and compute during distance calculations, allowing more vectors per endpoint and lower cost.
- **B**: Smaller dimensions cost 100x more than large dimensions.
- **C**: Dimension size has zero impact on memory or cost.
- **D**: 1536-dimension vectors take 0 bytes of memory.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Smaller dimensions (384) consume 4x less memory and compute during distance calculations, allowing more vectors per endpoint and lower cost.**

Vector storage and distance math scale linearly with dimension size; compact embeddings cut RAM requirements significantly.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Smaller vectors consume less, not more, resources.
• **(C)**: Incorrect. Vector memory scales directly with dimension count.
• **(D)**: Incorrect. Float vectors consume 4 bytes per dimension (or 2 bytes for FP16).

---

### Pregunta 253: If a Vector Search endpoint experiences high P99 query latency during peak hours, which adjustment resolves the bottleneck?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.10: Configure vector search for a particular solution based on number of embeddings, update frequency, latency, and cost requirements  

#### Opciones:
- **A**: Scale the Vector Search endpoint to a larger capacity tier (or increase replica count / provisioned throughput).
- **B**: Reduce query timeout to 1 millisecond.
- **C**: Delete all vectors in the index.
- **D**: Switch the database to SQLite.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Scale the Vector Search endpoint to a larger capacity tier (or increase replica count / provisioned throughput).**

Scaling the endpoint tier or increasing replica concurrency provides additional compute to handle high QPS without queueing latency.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. 1ms timeout causes 100% of queries to fail.
• **(C)**: Incorrect. Deleting vectors destroys the search service.
• **(D)**: Incorrect. SQLite cannot scale across high-concurrency enterprise vector workloads.

---

### Pregunta 254: In a Direct Vector Access Index, what is the developer responsible for managing that Delta Sync handles automatically?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.10: Configure vector search for a particular solution based on number of embeddings, update frequency, latency, and cost requirements  

#### Opciones:
- **A**: Computing vector embeddings and calling the Vector Search REST API (`upsert_vectors` / `delete_vectors`) to manage vector lifecycles manually.
- **B**: Configuring physical cooling fans in the server rack.
- **C**: Writing cloud hypervisor firmware in Assembly.
- **D**: Paying cloud electricity bills in cash.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Computing vector embeddings and calling the Vector Search REST API (`upsert_vectors` / `delete_vectors`) to manage vector lifecycles manually.**

Direct Access indexes require application code to generate vectors and trigger upserts/deletions explicitly via API.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hardware cooling is managed by cloud providers.
• **(C)**: Incorrect. Hypervisor management is handled by cloud infrastructure.
• **(D)**: Incorrect. Billing is handled through enterprise cloud subscriptions.

---

### Pregunta 255: Why is a persistent datastore (such as a Delta Lake table or Lakehouse Key-Value store) required for production multi-turn agent systems?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.11: Configure a persistent datastore to store and retrieve intermediate memory or structured information  

#### Opciones:
- **A**: To preserve conversation history, session state, user preferences, and intermediate reasoning scratchpads across stateless HTTP endpoint invocations.
- **B**: To slow down the agent so users have time to read.
- **C**: Because LLMs forget all English words every 5 minutes.
- **D**: To bypass cloud security firewalls.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To preserve conversation history, session state, user preferences, and intermediate reasoning scratchpads across stateless HTTP endpoint invocations.**

Model Serving endpoints are stateless; a persistent store preserves conversational memory across independent HTTP request cycles.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Storage is for state persistence, not deliberately slowing down responses.
• **(C)**: Incorrect. Model weights retain language representations persistently.
• **(D)**: Incorrect. Datastores enforce, not bypass, enterprise security.

---

### Pregunta 256: When designing a conversation memory table in Delta Lake, what schema columns are essential?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.11: Configure a persistent datastore to store and retrieve intermediate memory or structured information  

#### Opciones:
- **A**: `session_id: STRING`, `user_id: STRING`, `turn_index: INT`, `role: STRING (user/assistant/tool)`, `content: STRING`, `created_timestamp: TIMESTAMP`
- **B**: Only a single boolean flag `is_happy: BOOLEAN`.
- **C**: User passwords stored in clear text.
- **D**: Unlabeled binary garbage bytes.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `session_id: STRING`, `user_id: STRING`, `turn_index: INT`, `role: STRING (user/assistant/tool)`, `content: STRING`, `created_timestamp: TIMESTAMP`**

A robust conversation log schema tracks sessions, users, turn ordering, message roles, content, and timestamps for seamless session retrieval.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. A boolean flag cannot store multi-turn conversational text.
• **(C)**: Incorrect. Storing passwords violates privacy and security standards.
• **(D)**: Incorrect. Unlabeled garbage bytes provide no usable conversation history.

---

### Pregunta 257: How can LangChain's `RunnableWithMessageHistory` be configured to use a persistent Delta Lake memory store in Databricks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.11: Configure a persistent datastore to store and retrieve intermediate memory or structured information  

#### Opciones:
- **A**: By implementing a custom `BaseChatMessageHistory` class that reads and writes chat messages to the designated Delta table per `session_id`.
- **B**: By deleting the Delta table on every message.
- **C**: By storing all chat messages in temporary RAM that clears on restart.
- **D**: By writing messages on physical sticky notes.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By implementing a custom `BaseChatMessageHistory` class that reads and writes chat messages to the designated Delta table per `session_id`.**

Subclassing `BaseChatMessageHistory` connects LangChain's memory interface directly to Unity Catalog Delta tables for permanent persistence.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting tables destroys conversation history.
• **(C)**: Incorrect. In-memory storage loses state when serving containers restart or scale.
• **(D)**: Incorrect. Physical notes cannot be read by automated cloud software.

---

### Pregunta 258: What strategy prevents persistent conversation memory from exceeding an LLM's context window over long-running 100-turn chat sessions?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.11: Configure a persistent datastore to store and retrieve intermediate memory or structured information  

#### Opciones:
- **A**: Conversation Summarization / Sliding Window Memory: summarize older turns into a compact running summary while retaining only the last N recent turns in full.
- **B**: Pass all 100 turns in full on every request until the API crashes.
- **C**: Delete the user's account after 5 turns.
- **D**: Refuse to answer any question after turn 10.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Conversation Summarization / Sliding Window Memory: summarize older turns into a compact running summary while retaining only the last N recent turns in full.**

Summarizing historical turns compresses older context, keeping token consumption within bounds while maintaining semantic memory.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Passing 100 raw turns exceeds context limits and causes HTTP 400 errors.
• **(C)**: Incorrect. Deleting accounts destroys customer retention.
• **(D)**: Incorrect. Capping conversations at turn 10 degrades user experience.

---

### Pregunta 259: For low-latency key-value state retrieval (e.g. sub-5ms user profile lookup during agent execution), which storage architecture is recommended alongside the Lakehouse?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.11: Configure a persistent datastore to store and retrieve intermediate memory or structured information  

#### Opciones:
- **A**: Databricks Feature & Function Serving / Redis / DynamoDB online store synced from Delta Lake.
- **B**: Scanning a 50TB unindexed CSV file from cloud storage.
- **C**: Sending an email to a human operator to look up the profile.
- **D**: Running an unoptimized full table scan on an unpartitioned table.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Databricks Feature & Function Serving / Redis / DynamoDB online store synced from Delta Lake.**

Databricks Feature & Function Serving provides ultra-low latency (<10ms) online lookups for real-time agent state and feature retrieval.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Scanning 50TB CSV files takes minutes or hours, failing real-time SLAs.
• **(C)**: Incorrect. Human email workflows cannot serve real-time millisecond lookups.
• **(D)**: Incorrect. Full table scans introduce high latency and compute cost.

---

### Pregunta 260: How does Unity Catalog govern persistent conversation memory tables containing customer chat logs?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.11: Configure a persistent datastore to store and retrieve intermediate memory or structured information  

#### Opciones:
- **A**: Applies table-level RBAC, Column Masking for PII, automated data retention policies, and full audit logging of who queried the conversation logs.
- **B**: Disables all security and publishes logs on public Reddit forums.
- **C**: Encrypts the table and loses the decryption key.
- **D**: Deletes all customer chats after 1 second.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Applies table-level RBAC, Column Masking for PII, automated data retention policies, and full audit logging of who queried the conversation logs.**

Unity Catalog ensures sensitive customer conversation histories are protected by enterprise access controls, PII masking, and audit trails.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Publishing logs publicly is a catastrophic data breach.
• **(C)**: Incorrect. Losing encryption keys causes permanent data loss.
• **(D)**: Incorrect. 1-second deletion prevents conversational history from functioning.

---

### Pregunta 261: In a production CI/CD pipeline for a GenAI application on Databricks, how should prompt templates and agent configurations be version controlled?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.12: Apply CI/CD best practices such as updating a Vector Search index, promoting prompts across environments, and testing individual components of an agent  

#### Opciones:
- **A**: Stored as declarative code artifacts in Git repositories, tracked via MLflow Run metadata, and promoted across environments using automated CI/CD pipelines.
- **B**: Manually edited in production Model Serving consoles with no change history.
- **C**: Saved in personal chat messages between developers.
- **D**: Written on whiteboards.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Stored as declarative code artifacts in Git repositories, tracked via MLflow Run metadata, and promoted across environments using automated CI/CD pipelines.**

Treating prompts and agent configurations as code in Git ensures version control, peer review, reproducible testing, and automated deployment.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Manual production edits bypass review, testing, and audit trails.
• **(C)**: Incorrect. Chat messages provide no automated version control or deployment automation.
• **(D)**: Incorrect. Whiteboards provide no digital traceability.

---

### Pregunta 262: What automated testing step should run in a CI/CD pull request before promoting a new RAG agent version to staging?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.12: Apply CI/CD best practices such as updating a Vector Search index, promoting prompts across environments, and testing individual components of an agent  

#### Opciones:
- **A**: Run an automated MLflow Evaluation suite against a curated Golden Benchmark dataset, verifying that Groundedness, Correctness, and Latency meet defined quality gates.
- **B**: Deploy directly to production without testing.
- **C**: Delete all historical evaluation datasets.
- **D**: Restart all corporate servers.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Run an automated MLflow Evaluation suite against a curated Golden Benchmark dataset, verifying that Groundedness, Correctness, and Latency meet defined quality gates.**

Automated regression testing against a golden benchmark ensures that prompt or model updates do not introduce hallucinations or quality regressions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deploying without testing risks deploying broken or hallucinating agents.
• **(C)**: Incorrect. Deleting benchmark datasets prevents quality verification.
• **(D)**: Incorrect. Restarting servers disrupts operations without testing code quality.

---

### Pregunta 263: When deploying a Vector Search index update in a CI/CD pipeline, how is zero-downtime search maintained?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.12: Apply CI/CD best practices such as updating a Vector Search index, promoting prompts across environments, and testing individual components of an agent  

#### Opciones:
- **A**: Build and sync a new vector index version in the background, run validation queries, and then atomically point the application / Model Serving alias to the new index.
- **B**: Delete the production index and leave search broken for 8 hours while rebuilding.
- **C**: Shut down the entire cloud workspace.
- **D**: Tell users to stop searching.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Build and sync a new vector index version in the background, run validation queries, and then atomically point the application / Model Serving alias to the new index.**

Blue-green index deployment builds the new index in parallel and switches aliases atomically, ensuring uninterrupted search availability.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting active indexes causes hours of production search outages.
• **(C)**: Incorrect. Shutting down workspaces terminates all enterprise services.
• **(D)**: Incorrect. Forcing users to stop searching violates service availability SLAs.

---

### Pregunta 264: How do **Databricks Asset Bundles (DABs)** facilitate CI/CD for Generative AI applications?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.12: Apply CI/CD best practices such as updating a Vector Search index, promoting prompts across environments, and testing individual components of an agent  

#### Opciones:
- **A**: They provide declarative YAML definitions for MLflow models, serving endpoints, Vector Search indexes, and jobs, enabling automated deployment across Dev, Staging, and Prod workspaces via CLI.
- **B**: They compress all data files into zip archives on desktop.
- **C**: They disable all security policies in Unity Catalog.
- **D**: They replace Python with C++ automatically.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They provide declarative YAML definitions for MLflow models, serving endpoints, Vector Search indexes, and jobs, enabling automated deployment across Dev, Staging, and Prod workspaces via CLI.**

Databricks Asset Bundles (DABs) enable Infrastructure-as-Code (IaC) software engineering practices for all Databricks Lakehouse and GenAI assets.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. DABs deploy cloud resources; they are not desktop zip utilities.
• **(C)**: Incorrect. DABs strictly uphold and configure Unity Catalog security.
• **(D)**: Incorrect. DABs deploy standard Python/SQL/MLflow workloads.

---

### Pregunta 265: What is a **Canary Deployment** for a Model Serving endpoint in Databricks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.12: Apply CI/CD best practices such as updating a Vector Search index, promoting prompts across environments, and testing individual components of an agent  

#### Opciones:
- **A**: Routing a small percentage of live production traffic (e.g. 10%) to the new model version while the remaining 90% stays on the champion, monitoring error rates before full rollout.
- **B**: Testing the model with pictures of canary birds.
- **C**: Deleting 50% of incoming user requests randomly.
- **D**: Running the model exclusively on battery power.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Routing a small percentage of live production traffic (e.g. 10%) to the new model version while the remaining 90% stays on the champion, monitoring error rates before full rollout.**

Canary routing allows teams to validate new model behavior on live traffic with minimal blast radius before full 100% cutover.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Canary deployment is a traffic routing strategy, not bird image classification.
• **(C)**: Incorrect. Traffic splitting serves 100% of requests across versions without deleting data.
• **(D)**: Incorrect. Power supply source is unrelated to software traffic routing.

---

### Pregunta 266: How should individual tools used by an agent (e.g. UC Functions, calculator, database lookups) be tested in a unit-testing pipeline?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.12: Apply CI/CD best practices such as updating a Vector Search index, promoting prompts across environments, and testing individual components of an agent  

#### Opciones:
- **A**: Isolated unit tests that mock the LLM and execute tools with fixed edge-case parameter inputs, verifying expected return types and error handling.
- **B**: Running a full 10-hour end-to-end multi-agent simulation on every single git commit.
- **C**: Tools cannot be unit tested and must only be tested in production.
- **D**: By deleting the tool code.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Isolated unit tests that mock the LLM and execute tools with fixed edge-case parameter inputs, verifying expected return types and error handling.**

Unit testing individual tools with deterministic mocks verifies parameter parsing, API handling, and edge cases fast without calling expensive LLMs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Running 10-hour simulations on every commit slows CI feedback and wastes budget.
• **(C)**: Incorrect. Testing only in production exposes end users to preventable bugs.
• **(D)**: Incorrect. Deleting tool code destroys functionality.

---

### Pregunta 267: What is the **Model Context Protocol (MCP)** and what problem does it solve in agentic AI architectures?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.13: Integrate managed, external, and custom MCP servers based on a given application requirements  

#### Opciones:
- **A**: An open standard protocol that enables AI models and agents to discover, connect, and interact securely with external data sources, tools, and enterprise servers through standardized interfaces.
- **B**: A proprietary protocol for burning DVDs.
- **C**: A video compression codec.
- **D**: A programming language that replaces Python.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An open standard protocol that enables AI models and agents to discover, connect, and interact securely with external data sources, tools, and enterprise servers through standardized interfaces.**

MCP standardizes how LLMs connect to external tools, databases, and APIs, avoiding brittle custom integrations for every tool.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. MCP is an AI tool protocol, not a physical DVD burning utility.
• **(C)**: Incorrect. MCP is not a video codec.
• **(D)**: Incorrect. MCP is a communication protocol, not a replacement programming language.

---

### Pregunta 268: When an agent integrates a **Custom MCP Server** in Databricks, how does the agent discover available tools exposed by that server?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.13: Integrate managed, external, and custom MCP servers based on a given application requirements  

#### Opciones:
- **A**: The agent queries the MCP server's `tools/list` endpoint, receiving standardized JSON schemas describing tool names, docstrings, and argument parameters.
- **B**: The developer must manually recompile the LLM neural network weights.
- **C**: By reading local hardcoded text files on desktop.
- **D**: By sending an email to Databricks support.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The agent queries the MCP server's `tools/list` endpoint, receiving standardized JSON schemas describing tool names, docstrings, and argument parameters.**

MCP servers provide dynamic capability discovery via standardized JSON-RPC endpoints (`tools/list`, `resources/list`).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. MCP operates at the application protocol layer without retraining model weights.
• **(C)**: Incorrect. Tool schemas are served dynamically via the MCP server connection.
• **(D)**: Incorrect. Tool discovery is fully automated via protocol.

---

### Pregunta 269: What is the security model when an agent invokes a tool hosted on an external managed MCP server?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.13: Integrate managed, external, and custom MCP servers based on a given application requirements  

#### Opciones:
- **A**: Requests are authenticated via OAuth / API tokens with strict role-based execution permissions and sandboxed runtime boundaries.
- **B**: No authentication is used; all servers have full root access to the entire cloud account.
- **C**: The user's personal banking password is sent to the server.
- **D**: The MCP server disables all firewalls.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Requests are authenticated via OAuth / API tokens with strict role-based execution permissions and sandboxed runtime boundaries.**

MCP security enforces least-privilege access, scoped token authentication, and sandboxed execution boundaries.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Granting root access violates all enterprise security standards.
• **(C)**: Incorrect. Banking credentials must never be transmitted.
• **(D)**: Incorrect. Firewalls remain active to protect enterprise networks.

---

### Pregunta 270: In what scenario is an MCP server preferred over hardcoding custom API integration scripts inside an agent notebook?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.13: Integrate managed, external, and custom MCP servers based on a given application requirements  

#### Opciones:
- **A**: When tools (e.g. GitHub, Slack, Postgres, Jira) need to be shared, governed, and reused across multiple diverse agents and workspaces through a standardized interface.
- **B**: When building a script that will only ever run once and be deleted.
- **C**: When you have no network connection.
- **D**: When running models on a 1980s mainframe.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) When tools (e.g. GitHub, Slack, Postgres, Jira) need to be shared, governed, and reused across multiple diverse agents and workspaces through a standardized interface.**

MCP provides modular, reusable tool abstraction layers that multiple independent agents can leverage without duplicating integration code.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. One-off throwaway scripts do not require reusable protocol architectures.
• **(C)**: Incorrect. MCP requires network communication between client and server.
• **(D)**: Incorrect. Modern MCP operates on modern cloud/HTTP protocols.

---

### Pregunta 271: How does an agent handle an error returned by an MCP tool execution (e.g. `isError: true` in tool result)?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.13: Integrate managed, external, and custom MCP servers based on a given application requirements  

#### Opciones:
- **A**: The agent reads the error message in the tool response, adjusts its reasoning or parameters, and either retries with corrected arguments or reports a graceful explanation.
- **B**: The agent crashes the entire operating system.
- **C**: The agent outputs random swear words.
- **D**: The agent deletes the MCP server.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The agent reads the error message in the tool response, adjusts its reasoning or parameters, and either retries with corrected arguments or reports a graceful explanation.**

Agent reasoning loops ingest tool error outputs as feedback to self-correct parameters or inform the user gracefully.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Modern agents handle tool errors without crashing the host system.
• **(C)**: Incorrect. Safety guardrails prevent offensive language.
• **(D)**: Incorrect. Tool errors do not delete external servers.

---

### Pregunta 272: What is **Prompt Version Control** and why is it essential in production GenAI engineering?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.14: Apply prompt version control and manage prompt lifecycle  

#### Opciones:
- **A**: The systematic tracking, versioning, diffing, and evaluation of prompt templates over time to ensure reproducibility, auditability, and regression prevention.
- **B**: A tool that renames text files to random numbers.
- **C**: A feature that translates prompts into French on every edit.
- **D**: A tool that deletes historical prompts.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The systematic tracking, versioning, diffing, and evaluation of prompt templates over time to ensure reproducibility, auditability, and regression prevention.**

Prompt engineering is software engineering; versioning prompt templates ensures teams can trace changes, audit behavior, and rollback regressions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. File renaming is not version control.
• **(C)**: Incorrect. Version control tracks changes, not force language translation.
• **(D)**: Incorrect. Version control preserves, rather than deletes, historical iterations.

---

### Pregunta 273: How does the **MLflow Prompt Registry / Prompt Management** feature support prompt lifecycles in Databricks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.14: Apply prompt version control and manage prompt lifecycle  

#### Opciones:
- **A**: It provides a centralized repository in Unity Catalog to create, test, version, and tag prompt templates (e.g. `@champion`, `@v2.1`) decoupled from application code.
- **B**: It deletes prompt templates after 24 hours.
- **C**: It converts prompts into C++ header files.
- **D**: It requires printing prompts on paper for approval.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It provides a centralized repository in Unity Catalog to create, test, version, and tag prompt templates (e.g. `@champion`, `@v2.1`) decoupled from application code.**

Prompt Management in MLflow decouples prompt iterations from application deployments, allowing prompt engineers to update and evaluate templates dynamically.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Templates are preserved persistently in Unity Catalog.
• **(C)**: Incorrect. Prompts remain clean string templates, not C++ headers.
• **(D)**: Incorrect. Approval workflows are digital and automated.

---

### Pregunta 274: When a prompt update improves accuracy on English queries but inadvertently breaks German queries, how does prompt version control resolve the incident?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.14: Apply prompt version control and manage prompt lifecycle  

#### Opciones:
- **A**: Allows instant one-click rollback to the previous champion prompt version alias (`@Champion`) while diagnosing the regression in staging.
- **B**: Requires deleting the entire Databricks workspace.
- **C**: Requires rewriting the entire application from scratch.
- **D**: Forces German users to learn English.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Allows instant one-click rollback to the previous champion prompt version alias (`@Champion`) while diagnosing the regression in staging.**

Decoupled version aliases allow immediate rollback to the known stable prompt version, restoring service within seconds.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Workspace deletion is a destructive overreaction.
• **(C)**: Incorrect. Rollback restores the working version without full rewrites.
• **(D)**: Incorrect. Applications must uphold international accessibility standards.

---

### Pregunta 275: What role do Prompt Metadata tags (e.g. `author`, `target_model`, `temperature`, `use_case`) play in enterprise prompt governance?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.14: Apply prompt version control and manage prompt lifecycle  

#### Opciones:
- **A**: They provide operational context, tracking which model architectures and hyperparameters a prompt was optimized for, and who approved the change.
- **B**: They encrypt the user's monitor screen.
- **C**: They disable GPU compute during inference.
- **D**: They delete all test cases.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They provide operational context, tracking which model architectures and hyperparameters a prompt was optimized for, and who approved the change.**

Metadata tags document compatibility constraints and change ownership, ensuring prompts are deployed with appropriate models and parameters.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Metadata tags do not affect monitor encryption.
• **(C)**: Incorrect. Metadata does not disable compute.
• **(D)**: Incorrect. Metadata preserves governance records.

---

### Pregunta 276: How should prompt template changes be validated before promoting from `@Staging` to `@Champion`?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.14: Apply prompt version control and manage prompt lifecycle  

#### Opciones:
- **A**: Execute automated regression benchmarks in MLflow comparing the candidate prompt's evaluation scores against the current champion across standard test suites.
- **B**: Ask a single engineer if the prompt looks nice visually.
- **C**: Deploy directly without running evaluation datasets.
- **D**: Flip a coin.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Execute automated regression benchmarks in MLflow comparing the candidate prompt's evaluation scores against the current champion across standard test suites.**

Empirical benchmarking against a golden evaluation dataset verifies that candidate prompts outperform current production baselines before promotion.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Subjective visual checks fail to catch subtle factual or formatting regressions.
• **(C)**: Incorrect. Untested promotion risks breaking production workflows.
• **(D)**: Incorrect. Random promotion ignores data-driven engineering practices.

---

### Pregunta 277: What is **Databricks Apps** and how does it enable deploying custom web UIs for GenAI agents?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.15: Develop an appropriate interactive user facing interface for an agent usage scenario (Apps, Slack, Teams, etc.)  

#### Opciones:
- **A**: A native serverless hosting environment inside Databricks to run full-stack applications (Streamlit, Dash, React, FastAPI) with automatic Unity Catalog governance and SSO authentication.
- **B**: A mobile app store for downloading video games on iPhone.
- **C**: A tool for formatting USB thumb drives.
- **D**: A legacy command-line tool from 1970.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A native serverless hosting environment inside Databricks to run full-stack applications (Streamlit, Dash, React, FastAPI) with automatic Unity Catalog governance and SSO authentication.**

Databricks Apps hosts interactive data apps and custom agent frontends securely within the Lakehouse with built-in enterprise SSO and governance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Databricks Apps is an enterprise cloud application platform, not a consumer game store.
• **(C)**: Incorrect. Databricks Apps does not format USB hardware.
• **(D)**: Incorrect. Databricks Apps is a modern 2026 serverless application runtime.

---

### Pregunta 278: When integrating a Databricks GenAI agent into corporate collaboration platforms (such as Slack or Microsoft Teams), what architecture is standard?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.15: Develop an appropriate interactive user facing interface for an agent usage scenario (Apps, Slack, Teams, etc.)  

#### Opciones:
- **A**: A lightweight webhook / bot service hosted in Databricks Apps or cloud serverless, receiving user events from Slack/Teams and calling Model Serving endpoints via REST.
- **B**: Connecting Slack directly to the raw GPU hardware pins.
- **C**: Having a human employee read Slack and manually type answers into Databricks.
- **D**: Printing Slack messages on physical paper.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A lightweight webhook / bot service hosted in Databricks Apps or cloud serverless, receiving user events from Slack/Teams and calling Model Serving endpoints via REST.**

A secure webhook listener translates incoming platform events (Slack/Teams) into Model Serving REST calls and posts formatted streaming answers back to the chat channel.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hardware pin connections are impossible in cloud environments.
• **(C)**: Incorrect. Manual typing eliminates automation benefits.
• **(D)**: Incorrect. Digital bot integrations operate in real-time without paper.

---

### Pregunta 279: Why is **Streaming Token Response (SSE / WebSockets)** critical in interactive chat interfaces (Streamlit / React)?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.15: Develop an appropriate interactive user facing interface for an agent usage scenario (Apps, Slack, Teams, etc.)  

#### Opciones:
- **A**: It displays tokens immediately as they are generated by the LLM, dramatically reducing perceived latency and keeping users engaged during long responses.
- **B**: It deletes the user's question from the database.
- **C**: It converts text into audio automatically.
- **D**: It doubles the cloud storage cost.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It displays tokens immediately as they are generated by the LLM, dramatically reducing perceived latency and keeping users engaged during long responses.**

Streaming delivers incremental tokens to the UI in real-time, eliminating the frustration of staring at a blank loading spinner for several seconds.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Streaming does not delete conversation history.
• **(C)**: Incorrect. Text streaming renders text; audio synthesis requires TTS models.
• **(D)**: Incorrect. Token streaming does not double storage costs.

---

### Pregunta 280: What interactive UI element should be included in a production agent interface to collect real-time human feedback for continuous improvement?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.15: Develop an appropriate interactive user facing interface for an agent usage scenario (Apps, Slack, Teams, etc.)  

#### Opciones:
- **A**: Thumbs Up / Thumbs Down rating buttons with an optional text field to report hallucinations or incorrect facts, logged directly to an evaluation Delta table.
- **B**: A button that shuts down the entire application.
- **C**: An advertisement banner for third-party products.
- **D**: A game of Tic-Tac-Toe.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Thumbs Up / Thumbs Down rating buttons with an optional text field to report hallucinations or incorrect facts, logged directly to an evaluation Delta table.**

Inline feedback widgets capture user satisfaction and flagging data, creating a continuous stream of feedback data for RLHF and prompt refinement.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Shutdown buttons break service availability.
• **(C)**: Incorrect. Ads degrade enterprise user experience.
• **(D)**: Incorrect. Games are unrelated to enterprise feedback collection.

---

### Pregunta 281: How does **Databricks Review App** authenticate business stakeholders testing an agent prototype?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.15: Develop an appropriate interactive user facing interface for an agent usage scenario (Apps, Slack, Teams, etc.)  

#### Opciones:
- **A**: Seamlessly via Databricks Workspace Single Sign-On (SSO) and Unity Catalog permissions, ensuring only authorized team members can test and leave feedback.
- **B**: By asking stakeholders to post their passwords on public Twitter accounts.
- **C**: No authentication (open to all anonymous internet users).
- **D**: By mailing physical paper badges.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Seamlessly via Databricks Workspace Single Sign-On (SSO) and Unity Catalog permissions, ensuring only authorized team members can test and leave feedback.**

Review Apps leverage enterprise workspace SSO, ensuring secure stakeholder access and verifiable feedback attribution.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Posting credentials on social media is a severe security violation.
• **(C)**: Incorrect. Enterprise prototypes are secured within workspace boundaries, not exposed anonymously.
• **(D)**: Incorrect. Authentication is digital via enterprise identity providers.

---

### Pregunta 282: In an MLflow PyFunc model serving pipeline, how do you handle sensitive customer token redaction in the pre-processing stage before calling the Foundation Model?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: Pass the input prompt through a regex / NER PII scrubber function in `predict()` prior to calling `self.model.predict()` or external APIs.
- **B**: Delete the input payload completely and return None.
- **C**: Send the unscrubbed prompt to a public discord server.
- **D**: Restart the serving container on every query.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Pass the input prompt through a regex / NER PII scrubber function in `predict()` prior to calling `self.model.predict()` or external APIs.**

Pre-processing inside PyFunc `predict()` intercepts and scrubs sensitive customer entities before passing prompts to LLM endpoints.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Returning None breaks user workflows without answering the prompt.
• **(C)**: Incorrect. Sending customer data to public channels is a severe data breach.
• **(D)**: Incorrect. Restarting containers causes severe downtime and latency.

---

### Pregunta 283: What LCEL construct allows parallel execution of multiple retrievers or prompts simultaneously (e.g. running a vector search and a keyword search in parallel)?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.3: Code a simple chain according to requirements  

#### Opciones:
- **A**: `RunnableParallel({'vector_context': vector_retriever, 'keyword_context': keyword_retriever})`
- **B**: `RunnableSequential()`
- **C**: `RunnableLoop()`
- **D**: `RunnableSleep()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `RunnableParallel({'vector_context': vector_retriever, 'keyword_context': keyword_retriever})`**

`RunnableParallel` executes multiple runnables concurrently, aggregating their outputs into a dictionary for downstream synthesis.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `RunnableSequential` runs tasks one after another in serial order.
• **(C)**: Incorrect. `RunnableLoop` is not a standard LangChain runnable.
• **(D)**: Incorrect. `RunnableSleep` introduces arbitrary delays.

---

### Pregunta 284: What is the function of the `primary_key` parameter when creating a Delta Sync Vector Search index in Databricks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: It uniquely identifies each document chunk in the Delta table, enabling accurate change tracking (updates/deletes) and metadata association in the vector index.
- **B**: It encrypts the entire cloud account.
- **C**: It defines the font color of the UI.
- **D**: It deletes all duplicate files from the hard drive.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It uniquely identifies each document chunk in the Delta table, enabling accurate change tracking (updates/deletes) and metadata association in the vector index.**

A primary key column is mandatory for Delta Sync indexes so the sync pipeline can correlate CDC updates and deletions with specific vectors.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Primary keys do not encrypt cloud accounts.
• **(C)**: Incorrect. Primary keys are database identifiers, not UI style settings.
• **(D)**: Incorrect. Primary keys enforce relational identity, not file deduplication.

---

### Pregunta 285: How does Mosaic AI Vector Search handle hybrid search combining semantic similarity and full-text keyword search?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.8: Explain the key concepts and components of Mosaic AI Vector Search  

#### Opciones:
- **A**: By evaluating dense vector embeddings alongside lexical keyword matching (BM25) and fusing rank scores using Reciprocal Rank Fusion (RRF).
- **B**: By translating all text to binary code.
- **C**: By running search exclusively on paper printouts.
- **D**: By sorting all documents by file size.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By evaluating dense vector embeddings alongside lexical keyword matching (BM25) and fusing rank scores using Reciprocal Rank Fusion (RRF).**

Hybrid search merges dense semantic vectors with sparse lexical BM25 matching via RRF to capture both high-level semantic intent and exact keyword matches.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hybrid search operates on text and embedding coordinates, not raw binary.
• **(C)**: Incorrect. Cloud search runs digitally in memory and SSDs.
• **(D)**: Incorrect. File size sorting has no relationship to search relevance.

---

### Pregunta 286: How do you automate integration testing of a new Model Serving endpoint before redirecting 100% of user traffic to it in a CI/CD pipeline?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.12: Apply CI/CD best practices  

#### Opciones:
- **A**: Deploy the endpoint as a candidate version, execute automated synthetic test requests via the Databricks REST API, verify HTTP 200 responses and latency SLAs, and then promote the model alias to `@Champion`.
- **B**: Redirect all production traffic immediately with zero testing.
- **C**: Delete all existing monitoring alerts.
- **D**: Shut down the corporate network.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Deploy the endpoint as a candidate version, execute automated synthetic test requests via the Databricks REST API, verify HTTP 200 responses and latency SLAs, and then promote the model alias to `@Champion`.**

Automated smoke and integration testing against the staging endpoint verifies operational health and latency before updating production aliases.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Untested traffic redirection risks catastrophic production outages.
• **(C)**: Incorrect. Monitoring alerts must remain active to detect anomalies.
• **(D)**: Incorrect. Shutting down corporate networks disrupts enterprise operations.

---

### Pregunta 287: In a Streamlit or React agent interface deployed via Databricks Apps, how should citations and source document links be presented to the user?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.15: Develop an appropriate interactive user facing interface  

#### Opciones:
- **A**: As interactive citation badges or expandable accordions showing document titles, snippet previews, and clickable links to the source files in Unity Catalog Volumes.
- **B**: As unformatted 50,000-character JSON dumps covering the entire screen.
- **C**: Hidden in white text on a white background.
- **D**: Citations should never be shown.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) As interactive citation badges or expandable accordions showing document titles, snippet previews, and clickable links to the source files in Unity Catalog Volumes.**

Interactive citation badges provide transparent grounding, allowing users to verify facts and inspect original source documents easily.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Raw JSON dumps create poor user experience.
• **(C)**: Incorrect. Hidden text obscures essential source attribution.
• **(D)**: Incorrect. Citations are essential for enterprise compliance and verification.

---

