# Databricks Certified Generative AI Engineer Associate
## Domain 4: Assembling and Deploying Applications — Parte 1 (48 Preguntas)

> **Total de Preguntas en esta sección**: 48
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026 (Unificado: CertSafari Base 373 Qs + Var4 349 Qs)

---

### Pregunta 192: When subclassing `mlflow.pyfunc.PythonModel` to build a custom GenAI serving pipeline, which method must be overridden to define inference logic?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: `def predict(self, context, model_input, params=None):`
- **B**: `def train(self, X, y):`
- **C**: `def compile(self, optimizer, loss):`
- **D**: `def delete_database(self):`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `def predict(self, context, model_input, params=None):`**

The `predict()` method is the core execution hook in `mlflow.pyfunc.PythonModel` that processes input requests and returns model predictions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `train()` is for training loops, not PyFunc serving wrappers.
• **(C)**: Incorrect. `compile()` is a Keras/TensorFlow model compilation method.
• **(D)**: Incorrect. `delete_database()` is not an MLflow method.

---

### Pregunta 193: In a custom MLflow PyFunc model, how should static configuration artifacts (like prompt templates, tokenizers, or index client configs) be loaded?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: Inside the `load_context(self, context)` method during container initialization.
- **B**: Inside a `while True:` loop inside the `predict()` method on every request.
- **C**: By hardcoding the developer's personal home directory path.
- **D**: By downloading them from public Dropbox links on every query.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Inside the `load_context(self, context)` method during container initialization.**

`load_context()` executes once during container startup, loading artifacts and initializing heavy clients efficiently before inference requests arrive.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Initializing heavy objects in `predict()` on every request adds massive latency.
• **(C)**: Incorrect. Hardcoding local paths breaks in cloud container environments.
• **(D)**: Incorrect. External unauthenticated downloads introduce security risks and network failures.

---

### Pregunta 194: How does pre-processing in a PyFunc model help protect downstream Foundation Model APIs?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: It validates input schemas, sanitizes text, trims excessive token lengths, and checks rate limits before sending requests to the LLM.
- **B**: It translates all English text into binary code.
- **C**: It deletes user session history.
- **D**: It converts float embeddings into string words.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It validates input schemas, sanitizes text, trims excessive token lengths, and checks rate limits before sending requests to the LLM.**

Pre-processing validates payloads and filters malformed inputs, shielding downstream models from crashes and unexpected costs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Models require natural language strings or tokens, not raw binary code.
• **(C)**: Incorrect. Pre-processing preserves conversational state when needed.
• **(D)**: Incorrect. Embeddings are generated, not converted into string words in pre-processing.

---

### Pregunta 195: What is the role of post-processing inside a PyFunc model's `predict()` method?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: Parsing raw LLM output strings into structured JSON/Pydantic schemas, stripping markdown fences, applying output guardrails, and appending citation metadata.
- **B**: Deleting the underlying Delta Lake tables.
- **C**: Restarting the Model Serving container after every single request.
- **D**: Encrypting user passwords.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Parsing raw LLM output strings into structured JSON/Pydantic schemas, stripping markdown fences, applying output guardrails, and appending citation metadata.**

Post-processing cleans, validates, and enriches raw model output tokens into well-structured, production-ready responses.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Post-processing never deletes persistent storage.
• **(C)**: Incorrect. Restarting containers on every request creates massive latency and downtime.
• **(D)**: Incorrect. Password encryption is an authentication concern.

---

### Pregunta 196: How can custom Python dependencies be specified when logging a custom PyFunc model in MLflow?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: By passing a `pip_requirements` list or `requirements.txt` file path to `mlflow.pyfunc.log_model()`.
- **B**: By emailing the list of packages to Databricks support.
- **C**: By saving packages to the user's local desktop folder.
- **D**: Dependencies cannot be specified in MLflow.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By passing a `pip_requirements` list or `requirements.txt` file path to `mlflow.pyfunc.log_model()`.**

`pip_requirements` captures exact dependency versions, allowing Model Serving to construct reproducible container environments automatically.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Package installation is automated via configuration, not manual support emails.
• **(C)**: Incorrect. Local desktop files are inaccessible to remote serving containers.
• **(D)**: Incorrect. MLflow has built-in dependency management.

---

### Pregunta 197: When a PyFunc model needs to call a Databricks Foundation Model Serving endpoint internally, which client library should be used inside `predict()`?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: `mlflow.deployments.get_deploy_client('databricks')` or OpenAI client with workspace base URL and ambient auth.
- **B**: `urllib.request` with hardcoded personal access tokens.
- **C**: `os.system('curl http://localhost')`
- **D**: `subprocess.Popen('spark-submit')`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `mlflow.deployments.get_deploy_client('databricks')` or OpenAI client with workspace base URL and ambient auth.**

`mlflow.deployments` or OpenAI-compatible client leverages Databricks ambient credentials for secure, managed model-to-model calls.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hardcoding personal access tokens violates security best practices.
• **(C)**: Incorrect. Localhost curl commands fail inside containerized serving environments.
• **(D)**: Incorrect. `spark-submit` is for batch jobs, not real-time serving inference.

---

### Pregunta 198: What data format does a PyFunc `predict()` method accept by default according to standard MLflow Model Signatures?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.1: Code a chain using a pyfunc model with pre- and post-processing  

#### Opciones:
- **A**: Pandas DataFrame, dictionary of lists/arrays, or PyFunc input schema matching the defined Model Signature.
- **B**: Raw unformatted C++ pointers.
- **C**: Photographic film negative scans.
- **D**: Analog radio waveforms.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Pandas DataFrame, dictionary of lists/arrays, or PyFunc input schema matching the defined Model Signature.**

MLflow PyFunc signatures natively support Pandas DataFrames, dictionaries, and JSON-serializable structured payloads.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. C++ memory pointers are unsafe and non-portable across container boundaries.
• **(C)**: Incorrect. Image tensors are processed via arrays, not physical film scans.
• **(D)**: Incorrect. Digital endpoints process digital payloads, not analog radio signals.

---

### Pregunta 199: How does Databricks Model Serving authenticate and access dependent Unity Catalog resources (like Vector Search indexes and Delta tables) securely?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.2: Control access to resources from model serving endpoints  

#### Opciones:
- **A**: Using Service Principals / ambient workspace OAuth identity associated with the serving endpoint permissions.
- **B**: By disabling all authentication and making tables public.
- **C**: By hardcoding the administrator password in the prompt.
- **D**: By storing passwords on a sticky note attached to the server.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Using Service Principals / ambient workspace OAuth identity associated with the serving endpoint permissions.**

Model Serving endpoints use managed Service Principals and OAuth identity to query Unity Catalog securables under strict RBAC.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Making tables public violates enterprise data security.
• **(C)**: Incorrect. Hardcoding passwords in prompts causes immediate security exposure.
• **(D)**: Incorrect. Physical notes cannot authenticate cloud API calls.

---

### Pregunta 200: Which Unity Catalog privilege is required for a Model Serving endpoint to query a Vector Search index in catalog `finance` and schema `rag`?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.2: Control access to resources from model serving endpoints  

#### Opciones:
- **A**: `USE CATALOG finance`, `USE SCHEMA rag`, and `SELECT` privilege on the target index / source table.
- **B**: `DROP CATALOG finance`
- **C**: `MODIFY ACCOUNT PERMISSIONS`
- **D**: `DELETE ALL LOGS`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `USE CATALOG finance`, `USE SCHEMA rag`, and `SELECT` privilege on the target index / source table.**

Unity Catalog follows a 3-level namespace hierarchy requiring `USE CATALOG`, `USE SCHEMA`, and `SELECT` permissions to read data.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. DROP CATALOG destroys the entire catalog.
• **(C)**: Incorrect. Account modification is an administrative privilege unnecessary for model inference.
• **(D)**: Incorrect. Deleting logs is not a read permission.

---

### Pregunta 201: What is the recommended method for granting an external application access to a Databricks Model Serving endpoint?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.2: Control access to resources from model serving endpoints  

#### Opciones:
- **A**: Create a dedicated Service Principal in Unity Catalog, grant it `CAN QUERY` permission on the serving endpoint, and generate an OAuth M2M (Machine-to-Machine) token.
- **B**: Share the workspace root administrator login credentials.
- **C**: Disable endpoint security and open port 80 to the public internet.
- **D**: Hardcode an individual engineer's personal access token with no expiration.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Create a dedicated Service Principal in Unity Catalog, grant it `CAN QUERY` permission on the serving endpoint, and generate an OAuth M2M (Machine-to-Machine) token.**

Service Principals paired with OAuth M2M tokens provide secure, auditable, and rotatable access credentials for automated systems.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Sharing root admin credentials is a critical security violation.
• **(C)**: Incorrect. Disabling security exposes enterprise models to unauthorized internet attacks.
• **(D)**: Incorrect. Personal access tokens tied to individuals break when employees depart and lack central rotation.

---

### Pregunta 202: How do IP Access Lists protect Databricks Model Serving endpoints?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.2: Control access to resources from model serving endpoints  

#### Opciones:
- **A**: They restrict network access to the endpoint, ensuring only requests originating from approved corporate CIDR IP blocks or VPC gateways can connect.
- **B**: They convert all IPv4 addresses into strings.
- **C**: They delete all incoming packets randomly.
- **D**: They change the color of the web console.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They restrict network access to the endpoint, ensuring only requests originating from approved corporate CIDR IP blocks or VPC gateways can connect.**

IP Access Lists enforce network perimeter security by blocking any connection attempts originating outside designated enterprise IP ranges.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. IP Access Lists filter network packets, not convert data types.
• **(C)**: Incorrect. Traffic from authorized IPs is routed reliably, not dropped randomly.
• **(D)**: Incorrect. IP security is a network control, not a UI color setting.

---

### Pregunta 203: What role do Unity Catalog Row-Level Security (RLS) and Column Masking play when a RAG agent queries Delta tables?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.2: Control access to resources from model serving endpoints  

#### Opciones:
- **A**: They automatically filter rows and mask sensitive columns based on the calling user's identity/group, preventing unauthorized data exposure at the database layer.
- **B**: They delete all data from unauthorized tables.
- **C**: They convert SQL queries into Python scripts.
- **D**: They increase vector dimensions by 100x.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They automatically filter rows and mask sensitive columns based on the calling user's identity/group, preventing unauthorized data exposure at the database layer.**

Row Filters and Column Masks enforce dynamic data redaction at query time based on user roles in Unity Catalog.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. RLS filters query result sets; it never deletes underlying data.
• **(C)**: Incorrect. RLS operates inside the SQL engine, not by converting languages.
• **(D)**: Incorrect. RLS does not alter vector embedding dimensionality.

---

### Pregunta 204: If a developer needs to store external API keys (e.g. for external Slack or CRM integrations) used by an agent, where should they be stored in Databricks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.2: Control access to resources from model serving endpoints  

#### Opciones:
- **A**: In **Databricks Secrets** (backed by Azure Key Vault or AWS Secrets Manager) and referenced via `dbutils.secrets.get()` or environment variables.
- **B**: In clear text inside the public git commit message.
- **C**: Hardcoded directly in the Python source code.
- **D**: In a public text file in the root directory.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) In **Databricks Secrets** (backed by Azure Key Vault or AWS Secrets Manager) and referenced via `dbutils.secrets.get()` or environment variables.**

Databricks Secrets securely encrypts and manages sensitive credentials with role-based access control, preventing secret leakage.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Git commit messages are visible in version history and easily compromised.
• **(C)**: Incorrect. Hardcoding keys in code leads to credential leaks and security breaches.
• **(D)**: Incorrect. Storing keys in public text files exposes credentials to all users.

---

### Pregunta 205: What is the correct LCEL syntax to compose a standard prompt-model-output pipeline in LangChain?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.3: Code a simple chain according to requirements  

#### Opciones:
- **A**: `chain = prompt | model | StrOutputParser()`
- **B**: `chain = StrOutputParser() + model + prompt`
- **C**: `chain = prompt >> model >> database`
- **D**: `chain = model.delete(prompt)`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `chain = prompt | model | StrOutputParser()`**

The pipe operator (`|`) in LCEL chains runnables sequentially: input -> prompt -> model -> output parser.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The addition operator `+` is not used for chaining in LCEL.
• **(C)**: Incorrect. `>>` is used in Apache Airflow DAGs, not standard LangChain LCEL.
• **(D)**: Incorrect. `delete()` is not a chain composition method.

---

### Pregunta 206: How do you invoke an LCEL chain synchronously with a dictionary of input variables?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.3: Code a simple chain according to requirements  

#### Opciones:
- **A**: `result = chain.invoke({'question': 'How do I reset my password?'})`
- **B**: `result = chain.compile_to_c()`
- **C**: `result = chain.delete_input()`
- **D**: `result = chain.wait_for_year_2030()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `result = chain.invoke({'question': 'How do I reset my password?'})`**

`.invoke()` is the standard synchronous execution method on all LangChain LCEL runnables.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. LCEL does not compile to C.
• **(C)**: Incorrect. `delete_input()` is not an execution method.
• **(D)**: Incorrect. `wait_for_year_2030` is not a valid method.

---

### Pregunta 207: Which method enables asynchronous streaming of tokens as they are generated by an LCEL chain?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.3: Code a simple chain according to requirements  

#### Opciones:
- **A**: `async for chunk in chain.astream({'question': 'Explain quantum computing'}):`
- **B**: `chain.stop_stream()`
- **C**: `chain.record_audio()`
- **D**: `chain.export_to_csv()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `async for chunk in chain.astream({'question': 'Explain quantum computing'}):`**

`.astream()` yields generation chunks asynchronously as they stream from the LLM, enabling low-latency UI rendering.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `stop_stream()` is not the method for iterating over stream chunks.
• **(C)**: Incorrect. `record_audio()` is unrelated to token generation.
• **(D)**: Incorrect. `export_to_csv()` does not stream tokens.

---

### Pregunta 208: How do you run batch inference over a list of 100 questions simultaneously using an LCEL chain?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.3: Code a simple chain according to requirements  

#### Opciones:
- **A**: `results = chain.batch([{'question': q} for q in question_list])`
- **B**: `results = chain.loop_forever()`
- **C**: `results = [chain.delete() for _ in range(100)]`
- **D**: `results = chain.restart_computer()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `results = chain.batch([{'question': q} for q in question_list])`**

`.batch()` optimizes batch execution by parallelizing requests across worker threads or batch inference APIs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `loop_forever()` creates an infinite loop without returning answers.
• **(C)**: Incorrect. `chain.delete()` does not perform inference.
• **(D)**: Incorrect. Restarting hardware is not a batch processing method.

---

### Pregunta 209: What happens if a required variable defined in a `PromptTemplate` (e.g. `{context}`) is missing from the input dictionary passed to `chain.invoke()`?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.3: Code a simple chain according to requirements  

#### Opciones:
- **A**: LangChain raises a `KeyError` / `ValidationError` indicating that the required input variable was not provided.
- **B**: The model automatically invents a secret password.
- **C**: The database deletes all tables.
- **D**: The computer shuts down immediately.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) LangChain raises a `KeyError` / `ValidationError` indicating that the required input variable was not provided.**

Prompt templates validate input dictionaries and raise validation errors if required template variables are missing.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Missing keys do not generate passwords.
• **(C)**: Incorrect. Schema validation errors do not delete database tables.
• **(D)**: Incorrect. Software exceptions are handled in Python without shutting down machines.

---

### Pregunta 210: How do you attach custom runtime parameters (such as `temperature` or `max_tokens`) to an LLM inside an LCEL chain dynamically?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.3: Code a simple chain according to requirements  

#### Opciones:
- **A**: `model.bind(temperature=0.2, max_tokens=250)`
- **B**: `model.delete_parameters()`
- **C**: `model.format_disk()`
- **D**: `model.set_cpu_clock(5000)`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `model.bind(temperature=0.2, max_tokens=250)`**

`.bind()` attaches runtime parameters and tool specifications to runnables without modifying the base model instance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `delete_parameters()` is not an LCEL method.
• **(C)**: Incorrect. `format_disk()` is an OS formatting command.
• **(D)**: Incorrect. CPU clock speed cannot be set via LangChain method calls.

---

### Pregunta 211: Which essential components must be defined and packaged when building a complete RAG application in Databricks MLflow?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.4: Choose the basic elements needed to create a RAG application: model flavor, embedding model, retriever, dependencies, input examples, model signature  

#### Opciones:
- **A**: Model flavor (e.g. LangChain / PyFunc), Embedding model, Vector Search retriever, Dependencies (`pip_requirements`), Input/Output schema signature, and Model code artifact.
- **B**: Only a raw unformatted text file with no dependencies or schemas.
- **C**: A physical flash drive plugged into the server rack.
- **D**: A manual checklist written on paper.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Model flavor (e.g. LangChain / PyFunc), Embedding model, Vector Search retriever, Dependencies (`pip_requirements`), Input/Output schema signature, and Model code artifact.**

A robust RAG deployment requires an explicit model flavor, retriever, embedding connection, environment dependencies, and MLflow signature.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Raw text files cannot be executed as serving endpoints.
• **(C)**: Incorrect. Cloud serving operates on virtualized cloud infrastructure, not physical USB drives.
• **(D)**: Incorrect. Paper checklists provide no executable software artifacts.

---

### Pregunta 212: What is the purpose of logging an **Input Example** alongside a model in MLflow (`mlflow.langchain.log_model(..., input_example=...)`)?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.4: Choose the basic elements needed to create a RAG application: model flavor, embedding model, retriever, dependencies, input examples, model signature  

#### Opciones:
- **A**: It automatically infers the Model Signature (input/output schema) and provides a sample test payload for the Model Serving UI.
- **B**: It deletes all example files from the workspace.
- **C**: It trains the model on the example 1,000,000 times.
- **D**: It sets the price of the model to $0.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It automatically infers the Model Signature (input/output schema) and provides a sample test payload for the Model Serving UI.**

Input examples allow MLflow to automatically infer data types for the Model Signature and pre-populate test forms in the Model Serving console.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Input examples are preserved for documentation, not deleted.
• **(C)**: Incorrect. Logging an example does not trigger model retraining.
• **(D)**: Incorrect. Input examples do not affect cloud billing tiers.

---

### Pregunta 213: Why is defining an explicit **Model Signature** critical for enterprise Model Serving endpoints?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.4: Choose the basic elements needed to create a RAG application: model flavor, embedding model, retriever, dependencies, input examples, model signature  

#### Opciones:
- **A**: It enforces strict type-checking and schema validation on incoming JSON requests, rejecting malformed API payloads before they reach the model code.
- **B**: It generates a digital handwritten signature from the CEO.
- **C**: It increases network latency by 500%.
- **D**: It forces the model to only answer in French.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It enforces strict type-checking and schema validation on incoming JSON requests, rejecting malformed API payloads before they reach the model code.**

Model Signatures define the expected data types and column names, providing an immutable contract for API consumers and serving infrastructure.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Model signatures are schema definitions, not human handwritten graphics.
• **(C)**: Incorrect. Signatures perform fast schema validation without noticeable latency overhead.
• **(D)**: Incorrect. Signatures define data schemas, not natural language constraints.

---

### Pregunta 214: When deploying a RAG chain to Model Serving, where should the Vector Search endpoint name and index name be configured?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.4: Choose the basic elements needed to create a RAG application: model flavor, embedding model, retriever, dependencies, input examples, model signature  

#### Opciones:
- **A**: Passed via a model configuration dictionary (`model_config={'vector_search_index': 'catalog.schema.index_name'}`) or loaded in `load_context()`.
- **B**: Hardcoded into the user's browser settings.
- **C**: Written on a whiteboard in the office.
- **D**: Deleted from all configuration files.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Passed via a model configuration dictionary (`model_config={'vector_search_index': 'catalog.schema.index_name'}`) or loaded in `load_context()`.**

Using `model_config` decouples environment-specific resource names from code, allowing smooth promotion across Dev, Staging, and Prod workspaces.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Browser settings do not configure server-side serving containers.
• **(C)**: Incorrect. Whiteboards cannot configure cloud software.
• **(D)**: Incorrect. Removing configurations prevents the model from locating its vector index.

---

### Pregunta 215: Which MLflow model flavor is best suited for deploying complex RAG systems that require custom Python logic alongside LangChain and Vector Search?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.4: Choose the basic elements needed to create a RAG application: model flavor, embedding model, retriever, dependencies, input examples, model signature  

#### Opciones:
- **A**: `mlflow.pyfunc` (Python Model Flavor)
- **B**: `mlflow.sklearn`
- **C**: `mlflow.pmml`
- **D**: `mlflow.xgboost`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `mlflow.pyfunc` (Python Model Flavor)**

`mlflow.pyfunc` is the universal Python model flavor that wraps arbitrary custom Python classes, hybrid retrieval, and multi-step logic into a deployable container.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `mlflow.sklearn` is designed for Scikit-Learn tabular models.
• **(C)**: Incorrect. `mlflow.pmml` is an older XML format for statistical models.
• **(D)**: Incorrect. `mlflow.xgboost` is for gradient boosted tree models.

---

### Pregunta 216: Why should `pip_requirements` include pinned version numbers (e.g. `langchain==0.2.14`, `databricks-vectorsearch==0.40`) when logging a RAG model?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.4: Choose the basic elements needed to create a RAG application: model flavor, embedding model, retriever, dependencies, input examples, model signature  

#### Opciones:
- **A**: To prevent breaking changes or API deprecations in future library releases from causing runtime failures when serving containers are spun up.
- **B**: To make Python packages run on quantum computers.
- **C**: To decrease the file size of Delta tables.
- **D**: To hide the package names from auditors.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To prevent breaking changes or API deprecations in future library releases from causing runtime failures when serving containers are spun up.**

Pinning dependency versions guarantees deterministic, reproducible runtime environments across all deployment stages.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Pinning versions does not involve quantum computing.
• **(C)**: Incorrect. Package versions do not affect Delta table file sizes.
• **(D)**: Incorrect. Package manifests provide full transparency for security audits.

---

### Pregunta 217: What role does the **Retriever** component play in a production RAG application?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.4: Choose the basic elements needed to create a RAG application: model flavor, embedding model, retriever, dependencies, input examples, model signature  

#### Opciones:
- **A**: It queries the underlying vector or hybrid search index with the user's query and returns the top-k most relevant document chunks and metadata.
- **B**: It compiles the Python script into machine bytecode.
- **C**: It formats the user's computer monitor display.
- **D**: It generates synthetic user questions.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It queries the underlying vector or hybrid search index with the user's query and returns the top-k most relevant document chunks and metadata.**

The retriever bridges the user question and the knowledge repository, fetching the grounding facts needed by the generator LLM.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Bytecode compilation is handled by Python, not the RAG retriever.
• **(C)**: Incorrect. Retrievers operate in the backend, not in the client display hardware.
• **(D)**: Incorrect. Retrievers fetch real knowledge, not synthesize fake user questions.

---

### Pregunta 218: How do you register an MLflow model into Unity Catalog using the 3-level namespace convention?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.5: Register the model to Unity Catalog using MLflow  

#### Opciones:
- **A**: Provide a registered model name in the format `catalog.schema.model_name` (e.g. `mlflow.register_model(model_uri, 'main.ai_models.rag_agent')`).
- **B**: Save the model to a local folder named `my_model`.
- **C**: Upload the model weights to a public YouTube video.
- **D**: Delete the Unity Catalog metastore.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Provide a registered model name in the format `catalog.schema.model_name` (e.g. `mlflow.register_model(model_uri, 'main.ai_models.rag_agent')`).**

Unity Catalog models are registered using the standard 3-level namespace (`<catalog>.<schema>.<model_name>`) for centralized governance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Local folder paths bypass Unity Catalog governance and registry features.
• **(C)**: Incorrect. Video platforms cannot host executable machine learning models.
• **(D)**: Incorrect. Deleting the metastore destroys all catalog assets.

---

### Pregunta 219: Which Unity Catalog privilege is required for a data scientist to register a new model in schema `prod.genai`?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.5: Register the model to Unity Catalog using MLflow  

#### Opciones:
- **A**: `USE CATALOG prod`, `USE SCHEMA genai`, and `CREATE MODEL` on schema `prod.genai`.
- **B**: `DELETE ACCOUNT`
- **C**: `DROP METASTORE`
- **D**: Zero privileges (anyone on internet can register).

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `USE CATALOG prod`, `USE SCHEMA genai`, and `CREATE MODEL` on schema `prod.genai`.**

Registering a model in Unity Catalog requires `USE CATALOG`, `USE SCHEMA`, and `CREATE MODEL` permissions on the target schema.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Account deletion is a destructive administrative action.
• **(C)**: Incorrect. Metastore deletion destroys all enterprise data.
• **(D)**: Incorrect. Unity Catalog enforces strict RBAC and rejects unprivileged actions.

---

### Pregunta 220: What is the recommended approach for promoting a model across lifecycle stages (e.g. Dev -> Staging -> Prod) in Unity Catalog?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.5: Register the model to Unity Catalog using MLflow  

#### Opciones:
- **A**: Use Model Aliases (e.g. assigning alias `@Champion` or `@Staging` to specific model versions) and track promotion via CI/CD workflows.
- **B**: Manually rename the Python files on every deployment.
- **C**: Delete previous model versions permanently.
- **D**: Download model weights to a thumb drive and email them.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Use Model Aliases (e.g. assigning alias `@Champion` or `@Staging` to specific model versions) and track promotion via CI/CD workflows.**

Model Aliases in Unity Catalog provide flexible, decoupled pointers (e.g. `@Champion`, `@Challenger`) to specific model versions without altering serving URLs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Renaming source files breaks version control and lineage tracking.
• **(C)**: Incorrect. Deleting versions destroys historical audit trails and rollback capabilities.
• **(D)**: Incorrect. Emailing weights violates security compliance.

---

### Pregunta 221: How does registering models in Unity Catalog improve enterprise security compared to legacy workspace model registries?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.5: Register the model to Unity Catalog using MLflow  

#### Opciones:
- **A**: It provides unified RBAC, centralized audit logs, automated data lineage from Delta tables to models, and cross-workspace sharing across cloud regions.
- **B**: It makes model code run 1,000,000x faster.
- **C**: It eliminates the need for GPU compute.
- **D**: It makes all model weights open-source.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It provides unified RBAC, centralized audit logs, automated data lineage from Delta tables to models, and cross-workspace sharing across cloud regions.**

Unity Catalog centralizes governance, data lineage, fine-grained access control, and cross-workspace access under a single metastore.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Model inference speed is determined by compute hardware, not registry metadata.
• **(C)**: Incorrect. Serving still requires GPU/CPU compute.
• **(D)**: Incorrect. Unity Catalog keeps proprietary model weights private within enterprise boundaries.

---

### Pregunta 222: When an MLflow model is registered in Unity Catalog, what artifact information is automatically captured and tracked in the UI?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.5: Register the model to Unity Catalog using MLflow  

#### Opciones:
- **A**: The source Git commit hash, MLflow run ID, training notebook link, logged dependencies, input/output signature, and full data lineage.
- **B**: The personal credit card number of the developer.
- **C**: The physical temperature of the server room.
- **D**: The speed of the network router.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The source Git commit hash, MLflow run ID, training notebook link, logged dependencies, input/output signature, and full data lineage.**

Unity Catalog captures comprehensive provenance metadata, linking models back to the exact code, runs, dependencies, and source data used.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Personal financial data is never recorded.
• **(C)**: Incorrect. Server temperature is a physical facility metric.
• **(D)**: Incorrect. Network router speed is not logged in MLflow model metadata.

---

### Pregunta 223: How do you load a specific model version with alias `@Champion` from Unity Catalog in Python?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.5: Register the model to Unity Catalog using MLflow  

#### Opciones:
- **A**: `model = mlflow.pyfunc.load_model('models:/main.genai.support_bot@Champion')`
- **B**: `model = mlflow.download_everything()`
- **C**: `model = open('model.txt').read()`
- **D**: `model = None`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `model = mlflow.pyfunc.load_model('models:/main.genai.support_bot@Champion')`**

Using the `models:/catalog.schema.model_name@Alias` URI scheme loads the exact model version currently tagged with that alias.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `download_everything()` is not an MLflow API.
• **(C)**: Incorrect. Text file reads cannot instantiate MLflow PyFunc model instances.
• **(D)**: Incorrect. Setting to None assigns a null variable.

---

### Pregunta 224: Which two main types of Vector Search indexes exist in Databricks Mosaic AI Vector Search?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: **Delta Sync Index** (syncs automatically from a Delta Lake table) and **Direct Vector Access Index** (managed directly via REST APIs).
- **B**: **CSV Index** and **Text File Index**.
- **C**: **GPU Index** and **USB Index**.
- **D**: **Temporary Memory Index** and **Paper Index**.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) **Delta Sync Index** (syncs automatically from a Delta Lake table) and **Direct Vector Access Index** (managed directly via REST APIs).**

Mosaic AI Vector Search supports Delta Sync Indexes (continuous/triggered sync from Delta tables) and Direct Vector Access Indexes (direct API upserts).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vector Search operates on Delta tables, not raw CSV/text files.
• **(C)**: Incorrect. USB Index is not a cloud index type.
• **(D)**: Incorrect. Paper Index is nonsensical.

---

### Pregunta 225: What is the difference between a **Delta Sync Index (Triggered)** and a **Delta Sync Index (Continuous)** in Mosaic AI Vector Search?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: Triggered sync updates on demand or via scheduled pipeline jobs; Continuous sync uses always-on compute to sync new Delta table rows in near real-time (seconds).
- **B**: Triggered sync is for images; Continuous sync is for text.
- **C**: Continuous sync deletes all data on every update.
- **D**: Triggered sync cannot be queried.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Triggered sync updates on demand or via scheduled pipeline jobs; Continuous sync uses always-on compute to sync new Delta table rows in near real-time (seconds).**

Triggered sync runs batch refreshes on demand to save cost; Continuous sync streams changes in real-time for high-freshness requirements.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Both modes support text, images, and arbitrary embedding vectors.
• **(C)**: Incorrect. Continuous sync applies incremental CDC deltas without deleting data.
• **(D)**: Incorrect. Both index types are fully queryable via REST and SDK.

---

### Pregunta 226: In a **Managed Embeddings** Vector Search Index, who computes the embedding vectors for incoming text chunks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: Databricks automatically computes and updates the embeddings using a designated Foundation Model Serving embedding endpoint during index sync.
- **B**: The developer must manually compute vectors in a Jupyter notebook and upload them via CSV.
- **C**: The user's web browser computes the vectors.
- **D**: Embeddings are not computed and text is stored as raw ASCII.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Databricks automatically computes and updates the embeddings using a designated Foundation Model Serving embedding endpoint during index sync.**

Managed Embeddings automatically passes text columns to a designated Model Serving embedding endpoint during table sync, eliminating manual pipeline management.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Self-managed embeddings require manual vector calculation; managed embeddings automate it.
• **(C)**: Incorrect. Vector calculations run on managed Databricks cloud endpoints, not client browsers.
• **(D)**: Incorrect. Vector search requires numerical embedding vectors.

---

### Pregunta 227: How do you query a Mosaic AI Vector Search index using the Python SDK?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: `index.similarity_search(query_text='How do I configure SSO?', columns=['chunk_id', 'text', 'doc_url'], num_results=5, filters={'department': 'IT'})`
- **B**: `index.delete_all_vectors()`
- **C**: `index.print_to_screen()`
- **D**: `index.export_to_excel()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `index.similarity_search(query_text='How do I configure SSO?', columns=['chunk_id', 'text', 'doc_url'], num_results=5, filters={'department': 'IT'})`**

`similarity_search()` performs approximate nearest neighbor search with optional metadata filtering and column selection.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `delete_all_vectors()` destroys data.
• **(C)**: Incorrect. `print_to_screen()` is not a search API.
• **(D)**: Incorrect. `export_to_excel()` does not perform similarity search.

---

### Pregunta 228: What role do **Filters** (e.g. `filters={'category': 'legal', 'year': 2025}`) play during a Vector Search query?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: They restrict the similarity search to only chunks matching the exact metadata predicates, eliminating irrelevant cross-domain results.
- **B**: They delete all vectors that do not match the filter.
- **C**: They slow down the search by 10,000x.
- **D**: They translate the query into German.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They restrict the similarity search to only chunks matching the exact metadata predicates, eliminating irrelevant cross-domain results.**

Metadata filtering applies boolean constraints to prune candidate vectors, ensuring search results belong strictly to the requested category.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Filters restrict query scope without deleting stored vector data.
• **(C)**: Incorrect. Index filtering is highly optimized and executes in milliseconds.
• **(D)**: Incorrect. Filtering does not perform language translation.

---

### Pregunta 229: What compute resource is required before you can create a Mosaic AI Vector Search index in Databricks?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: A **Vector Search Endpoint** created in the workspace.
- **B**: A 1,000-node GPU cluster running 24/7.
- **C**: A local Raspberry Pi device.
- **D**: An on-premise mainframe server.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A **Vector Search Endpoint** created in the workspace.**

A Vector Search Endpoint manages the underlying serverless compute and memory needed to host and query vector indexes.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Endpoints are serverless managed resources that scale automatically.
• **(C)**: Incorrect. Vector search runs in cloud workspaces, not on Raspberry Pi devices.
• **(D)**: Incorrect. On-premise mainframes are not required for Databricks cloud search.

---

### Pregunta 230: How do you trigger a manual synchronization of a Triggered Delta Sync Index in Python?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.6: Create and query a Vector Search index  

#### Opciones:
- **A**: `index.sync()`
- **B**: `index.destroy()`
- **C**: `index.format()`
- **D**: `index.sleep()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `index.sync()`**

Calling `index.sync()` instructs the Vector Search endpoint to scan the source Delta table for new CDF commits and update the index.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `destroy()` deletes the index.
• **(C)**: Incorrect. `format()` is a string formatting method.
• **(D)**: Incorrect. `sleep()` pauses execution without syncing data.

---

### Pregunta 231: What are **Databricks Foundation Model APIs** and what deployment modes do they offer?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.7: Identify how to serve an LLM application that leverages Foundation Model APIs  

#### Opciones:
- **A**: Fully managed, state-of-the-art open models (e.g. Llama 3.3 70B, DBRX, Mixtral, BGE) available via Pay-per-token or Provisioned Throughput without managing GPUs.
- **B**: Unmanaged physical servers that customers must assemble in their office.
- **C**: Static PDF files containing mathematical formulas.
- **D**: A desktop software program that only runs on Windows 95.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Fully managed, state-of-the-art open models (e.g. Llama 3.3 70B, DBRX, Mixtral, BGE) available via Pay-per-token or Provisioned Throughput without managing GPUs.**

Foundation Model APIs provide instant, serverless access to curated frontier models with enterprise security, pay-per-token pricing, and OpenAI-compatible APIs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Foundation Model APIs are cloud-native and serverless; no physical assembly is needed.
• **(C)**: Incorrect. Foundation Model APIs are live REST endpoints, not static PDFs.
• **(D)**: Incorrect. Endpoints are cloud-hosted REST APIs accessible across platforms.

---

### Pregunta 232: How can an external application call a Databricks Foundation Model Serving endpoint using the standard OpenAI Python client library?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.7: Identify how to serve an LLM application that leverages Foundation Model APIs  

#### Opciones:
- **A**: Set `base_url='https://<workspace-url>/serving-endpoints'` and `api_key='<databricks-token>'` in `openai.OpenAI()`.
- **B**: It is impossible; OpenAI client cannot connect to Databricks.
- **C**: By modifying the Python source code of the OpenAI library.
- **D**: By disabling SSL certificates.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Set `base_url='https://<workspace-url>/serving-endpoints'` and `api_key='<databricks-token>'` in `openai.OpenAI()`.**

Databricks Model Serving endpoints are 100% wire-compatible with the OpenAI REST API specification, allowing standard OpenAI SDK clients to connect seamlessly.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Databricks natively supports OpenAI-compatible API specifications.
• **(C)**: Incorrect. No library hacking is needed; standard configuration parameters are supported.
• **(D)**: Incorrect. Disabling SSL is insecure and rejected by Databricks.

---

### Pregunta 233: What is the benefit of **External Models** support in Databricks Model Serving (e.g. proxying to Azure OpenAI, Anthropic Claude, or AWS Bedrock)?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.7: Identify how to serve an LLM application that leverages Foundation Model APIs  

#### Opciones:
- **A**: Centralized governance, unified rate limiting, secret management, audit logging, and single-pane-of-glass cost tracking across all external AI providers.
- **B**: It makes external third-party models free of charge.
- **C**: It downloads the proprietary weights of GPT-4 to your laptop.
- **D**: It replaces all cloud providers with on-premise hardware.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Centralized governance, unified rate limiting, secret management, audit logging, and single-pane-of-glass cost tracking across all external AI providers.**

External Models support acts as a secure enterprise AI Gateway, governing credentials, rate limits, and audit logs for third-party LLMs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. External third-party models still bill according to provider rates.
• **(C)**: Incorrect. Proprietary weights remain hosted on provider infrastructure.
• **(D)**: Incorrect. It proxies cloud APIs; it does not mandate on-premise hardware.

---

### Pregunta 234: What automatic scaling behavior does Databricks Model Serving provide for custom PyFunc and Foundation Model endpoints?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.7: Identify how to serve an LLM application that leverages Foundation Model APIs  

#### Opciones:
- **A**: **Scale-to-Zero** (scales compute down to zero when idle to save costs) and automated scale-out under high concurrency.
- **B**: Endpoints must always run at maximum capacity 24/7 with zero scaling.
- **C**: Endpoints shut down permanently after the first query.
- **D**: Endpoints double in size every minute indefinitely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) **Scale-to-Zero** (scales compute down to zero when idle to save costs) and automated scale-out under high concurrency.**

Serverless Model Serving scales dynamically from zero up to peak concurrency based on incoming request volume.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Fixed 24/7 maximum allocation wastes cloud budgets during idle periods.
• **(C)**: Incorrect. Endpoints stay ready to handle subsequent queries.
• **(D)**: Incorrect. Scaling is bounded by configured minimum and maximum concurrency limits.

---

### Pregunta 235: How does **AI Gateway Rate Limiting** protect enterprise Model Serving endpoints from runaway costs or denial-of-service traffic?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.7: Identify how to serve an LLM application that leverages Foundation Model APIs  

#### Opciones:
- **A**: It sets enforceable thresholds on calls-per-minute or tokens-per-minute per user/service principal, rejecting excess requests with HTTP 429.
- **B**: It shuts down the entire corporate network.
- **C**: It deletes user accounts after 3 queries.
- **D**: It charges user credit cards $1,000 per token.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It sets enforceable thresholds on calls-per-minute or tokens-per-minute per user/service principal, rejecting excess requests with HTTP 429.**

Rate limiting prevents API abuse and budget overruns by throttling requests that exceed defined token or call quotas.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Rate limiting throttles specific API routes; it does not bring down corporate networks.
• **(C)**: Incorrect. Throttled users receive standard HTTP 429 retry headers without account deletion.
• **(D)**: Incorrect. Billing rates are governed by cloud contracts, not arbitrary penalty fees.

---

### Pregunta 236: When deploying a Python model to Model Serving, what container environment does Databricks construct automatically?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.7: Identify how to serve an LLM application that leverages Foundation Model APIs  

#### Opciones:
- **A**: A secure, isolated container image with CUDA/GPU runtime drivers, Python environment, and specified pip requirements built and managed by Databricks.
- **B**: A virtual machine running MS-DOS.
- **C**: An unencrypted public Docker hub repository.
- **D**: A physical server shipped to the customer's house.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A secure, isolated container image with CUDA/GPU runtime drivers, Python environment, and specified pip requirements built and managed by Databricks.**

Databricks Model Serving automates secure container builds, driver installation, and scaling infrastructure completely.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. MS-DOS does not support modern machine learning runtimes.
• **(C)**: Incorrect. Container images are private and secured within Databricks infrastructure.
• **(D)**: Incorrect. Deployment is 100% cloud serverless.

---

### Pregunta 237: What approximate nearest neighbor (ANN) indexing algorithm is utilized under the hood in Mosaic AI Vector Search for ultra-fast similarity search?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.8: Explain the key concepts and components of Mosaic AI Vector Search  

#### Opciones:
- **A**: Hierarchical Navigable Small World (HNSW) / Inverted File Indexing (IVF)
- **B**: Bubble Sort
- **C**: Linear O(N) exhaustive scanning on every single query
- **D**: Binary Search on unsorted float strings

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Hierarchical Navigable Small World (HNSW) / Inverted File Indexing (IVF)**

HNSW graphs enable logarithmic time O(log N) approximate vector similarity searches across millions of high-dimensional vectors.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Bubble sort is an elementary O(N^2) scalar sort algorithm.
• **(C)**: Incorrect. Exhaustive linear scanning is too slow for millions of vectors.
• **(D)**: Incorrect. Binary search cannot operate on multidimensional spatial vector embeddings.

---

### Pregunta 238: What is the primary advantage of **Mosaic AI Vector Search** being natively integrated with Unity Catalog?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.8: Explain the key concepts and components of Mosaic AI Vector Search  

#### Opciones:
- **A**: Vector indexes automatically inherit Unity Catalog table governance, RBAC permissions, audit logging, and data lineage without data duplication.
- **B**: It removes the need for computer RAM.
- **C**: It makes all vector distances equal to 1.0.
- **D**: It replaces the cloud provider with on-premise tape drives.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Vector indexes automatically inherit Unity Catalog table governance, RBAC permissions, audit logging, and data lineage without data duplication.**

Native Unity Catalog integration ensures enterprise security policies, governance, and audit trails apply seamlessly to vector search assets.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vector indexes reside in high-speed RAM and SSD storage for fast search.
• **(C)**: Incorrect. Vector distances accurately reflect cosine/dot-product similarity.
• **(D)**: Incorrect. Vector Search runs on cloud infrastructure.

---

### Pregunta 239: In Mosaic AI Vector Search, how are deleted rows in the source Delta table handled by a Delta Sync Index?

**Dominio**: Domain 4: Assembling and Deploying Applications  
**Subdominio**: Subdomain 4.8: Explain the key concepts and components of Mosaic AI Vector Search  

#### Opciones:
- **A**: The index reads the Delta Lake Change Data Feed (CDF) delete events and automatically removes the corresponding vectors from the search index.
- **B**: Deleted rows remain in the index forever.
- **C**: The entire vector index crashes and must be rebuilt manually.
- **D**: Deleted rows are emailed to all workspace users.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The index reads the Delta Lake Change Data Feed (CDF) delete events and automatically removes the corresponding vectors from the search index.**

CDF tracking enables automated synchronization of row deletions, ensuring vector indexes remain consistent with source Delta tables.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. CDF ensures deleted records are purged from the vector index.
• **(C)**: Incorrect. Delta Sync handles deletions incrementally without crashing.
• **(D)**: Incorrect. Deleted data is purged, not emailed.

---

