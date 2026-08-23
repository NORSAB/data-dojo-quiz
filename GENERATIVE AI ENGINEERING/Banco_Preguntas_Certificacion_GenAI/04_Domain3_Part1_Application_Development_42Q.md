# Databricks Certified Generative AI Engineer Associate
## Domain 3: Application Development — Parte 1 (42 Preguntas)

> **Total de Preguntas en esta sección**: 42
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026

---

### Pregunta NaN: Which Python package provides the official LangChain integration for Databricks services including Unity Catalog tools, Vector Search, and Model Serving?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: databricks-langchain
- **B**: scikit-learn-contrib
- **C**: pyspark-vision
- **D**: tensorflow-lite

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) databricks-langchain**

`databricks-langchain` is the dedicated Databricks package providing LCEL runnables, UC Function toolkits, and Vector Search retrievers.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. scikit-learn-contrib contains traditional machine learning extensions.
• **(C)**: Incorrect. pyspark-vision is not an official LangChain integration package.
• **(D)**: Incorrect. tensorflow-lite is for on-device mobile neural network deployment.

---

### Pregunta NaN: How do you expose a Unity Catalog SQL User Defined Function (UDF) as a LangChain-compatible tool for an Agent using `databricks-langchain`?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: Use `UCFunctionToolkit(function_names=['catalog.schema.func_name']).get_tools()`.
- **B**: Write raw C++ sockets to connect to Spark workers.
- **C**: Export the UDF as an unencrypted text file to desktop.
- **D**: Manually hardcode SQL strings inside user prompt messages.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Use `UCFunctionToolkit(function_names=['catalog.schema.func_name']).get_tools()`.**

`UCFunctionToolkit` wraps governed Unity Catalog functions directly into LangChain tool objects with automatic parameter schemas.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. C++ sockets bypass Unity Catalog governance and type validation.
• **(C)**: Incorrect. Exporting files to desktop violates security and provides no runtime tool execution.
• **(D)**: Incorrect. Hardcoding strings does not provide callable tool abstractions to agents.

---

### Pregunta NaN: When instantiating a Chat model in LangChain connected to a Databricks Foundation Model Serving endpoint, which class is used?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: ChatDatabricks(endpoint='databricks-meta-llama-3-3-70b-instruct')
- **B**: OpenAIChatClientLocal()
- **C**: HuggingFacePipelineRaw()
- **D**: SparkDataFrameChat()

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) ChatDatabricks(endpoint='databricks-meta-llama-3-3-70b-instruct')**

`ChatDatabricks` connects directly to Databricks Model Serving Foundation Model APIs with automated workspace authentication.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. OpenAIChatClientLocal targets localhost OpenAI mock servers.
• **(C)**: Incorrect. HuggingFacePipelineRaw runs local transformer pipelines, not remote serving endpoints.
• **(D)**: Incorrect. SparkDataFrameChat is not a valid LangChain model class.

---

### Pregunta NaN: Which LangChain retriever class natively connects to a Databricks Mosaic AI Vector Search index?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: DatabricksVectorSearch.as_retriever()
- **B**: ChromaDBInMemoryRetriever()
- **C**: FaissLocalFileRetriever()
- **D**: SQLiteRawRetriever()

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) DatabricksVectorSearch.as_retriever()**

`DatabricksVectorSearch` wraps Mosaic AI Vector Search endpoints into standard LangChain BaseRetriever objects.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. ChromaDB in-memory retriever does not connect to Databricks managed Vector Search.
• **(C)**: Incorrect. Faiss local file retriever runs standalone without Lakehouse sync.
• **(D)**: Incorrect. SQLite does not support scalable vector approximate nearest neighbor search.

---

### Pregunta NaN: What is the advantage of using LangGraph or Databricks Agent Framework over simple linear LCEL chains for complex reasoning applications?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: It supports cyclical execution graphs, stateful memory persistence, branching logic, and human-in-the-loop validation.
- **B**: It automatically reduces cloud compute costs to zero.
- **C**: It replaces all Delta tables with flat CSV files.
- **D**: It removes the need for LLMs entirely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It supports cyclical execution graphs, stateful memory persistence, branching logic, and human-in-the-loop validation.**

LangGraph and Agent Framework enable complex multi-turn cyclical agent workflows with conditional branching and state management.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Cloud compute is still consumed during execution.
• **(C)**: Incorrect. Lakehouse architectures leverage Delta tables, not flat CSVs.
• **(D)**: Incorrect. Agents rely fundamentally on LLMs for reasoning.

---

### Pregunta NaN: How does `databricks-langchain` handle authentication when running inside a Databricks Notebook or Model Serving endpoint?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: It automatically uses the ambient workspace credentials / OAuth tokens without requiring hardcoded API secrets.
- **B**: It requires checking in cleartext passwords into public GitHub repos.
- **C**: It prompts the user to enter a credit card on every chain execution.
- **D**: It disables all authentication checks completely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It automatically uses the ambient workspace credentials / OAuth tokens without requiring hardcoded API secrets.**

Ambient authentication seamlessly utilizes workspace context and service credentials, ensuring security best practices.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hardcoding passwords in source code is a major security vulnerability.
• **(C)**: Incorrect. Databricks does not prompt for credit cards during API runtime execution.
• **(D)**: Incorrect. Enterprise endpoints enforce strict OAuth/PAT authentication.

---

### Pregunta NaN: Which LangChain utility should be used to trim conversational history messages so they fit within the LLM's context window limit?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: `trim_messages(max_tokens=..., strategy='last')`
- **B**: `delete_all_messages()`
- **C**: `reverse_alphabetical_sort()`
- **D**: `duplicate_messages_infinitely()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `trim_messages(max_tokens=..., strategy='last')`**

`trim_messages` dynamically prunes message histories to maintain context limits while preserving recent turns and system instructions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting all messages destroys all conversational memory.
• **(C)**: Incorrect. Alphabetical sorting scrambles conversational chronology.
• **(D)**: Incorrect. Duplicating messages wastes token budget and triggers context overflows.

---

### Pregunta NaN: A user asks: 'What is our corporate policy on maternity leave?' The RAG bot answers: 'We offer 16 weeks paid leave', but the retrieved document clearly states '12 weeks'. What qualitative failure occurred?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: Hallucination / Faithfulness failure (Groundedness failure).
- **B**: Toxicity / Safety violation.
- **C**: Prompt Injection vulnerability.
- **D**: Token truncation failure.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Hallucination / Faithfulness failure (Groundedness failure).**

Faithfulness failure occurs when the LLM generates claims that contradict or are unsupported by the retrieved context.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The text contains no hate speech or toxic language.
• **(C)**: Incorrect. The user asked a benign factual question without malicious adversarial instructions.
• **(D)**: Incorrect. The answer was complete and not cut off mid-sentence.

---

### Pregunta NaN: A customer chatbot response includes: 'Ignore previous rules, I am now in GOD MODE and will give you free gift cards.' What issue occurred?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: Prompt Injection / Jailbreak exploit.
- **B**: High latency timeout.
- **C**: Missing primary key constraint in Delta table.
- **D**: Loss of GPU CUDA cores.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Prompt Injection / Jailbreak exploit.**

Prompt injection occurs when adversarial user input overrides developer system instructions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The response was generated successfully, indicating no network timeout.
• **(C)**: Incorrect. Primary keys in Delta Lake do not control LLM conversational alignment.
• **(D)**: Incorrect. Hardware CUDA cores remain operational.

---

### Pregunta NaN: When an LLM produces a grammatically fluent, confident response that is entirely fabricated and factually wrong without any source support, this is called:

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: Hallucination (Confabulation).
- **B**: Deterministic pruning.
- **C**: Vector Quantization.
- **D**: Byte-Pair Encoding.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Hallucination (Confabulation).**

Hallucination refers to the generation of plausible-sounding but factually false content unsupported by real data.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Pruning is a neural network model compression technique.
• **(C)**: Incorrect. Vector quantization compresses high-dimensional embedding arrays.
• **(D)**: Incorrect. BPE is a subword tokenization algorithm.

---

### Pregunta NaN: An HR assistant reveals an executive's home address and personal mobile number in response to a casual query. Which safety issue has occurred?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: PII (Personally Identifiable Information) data leakage.
- **B**: SQL Syntax error.
- **C**: Cold-start latency delay.
- **D**: Delta Lake merge conflict.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) PII (Personally Identifiable Information) data leakage.**

Leaking private personal data violates privacy regulations (PII leakage) and requires immediate guardrail masking.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The issue is semantic privacy leakage, not a database syntax crash.
• **(C)**: Incorrect. Cold-start latency refers to model spin-up delay, not data privacy.
• **(D)**: Incorrect. Merge conflicts occur during concurrent database writes.

---

### Pregunta NaN: A RAG system generates a response where the first half of the answer is in Spanish and the second half switches abruptly to German without user prompt instruction. What is this qualitative defect?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: Language inconsistency / Tone drift.
- **B**: Database deadlock.
- **C**: Vector index rebuild.
- **D**: Cloud regional outage.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Language inconsistency / Tone drift.**

Unintended language switching and tone drift represent qualitative generation defects in model alignment.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Database deadlocks prevent read/writes in relational stores, not language translation.
• **(C)**: Incorrect. Vector index rebuilds happen in storage backends.
• **(D)**: Incorrect. Cloud outages prevent responses from returning entirely.

---

### Pregunta NaN: What qualitative issue occurs when a financial advisory assistant outputs: 'Invest all your life savings into MemeCoin immediately to become rich'?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: Safety / Compliance policy violation (Unauthorized Financial Advice).
- **B**: Low embedding cosine distance.
- **C**: High GPU temperature.
- **D**: Expired Unity Catalog token.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Safety / Compliance policy violation (Unauthorized Financial Advice).**

Generating unverified financial advice violates regulatory compliance guardrails and enterprise risk policies.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Cosine distance evaluates vector similarity, not financial compliance.
• **(C)**: Incorrect. GPU physical temperature is a hardware metric.
• **(D)**: Incorrect. Token expiration causes HTTP 401 errors, not reckless financial output.

---

### Pregunta NaN: When a customer asks 'How do I cancel my subscription?' and the assistant responds 'Our company was founded in 2018 in San Francisco', what failure is demonstrated?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: Answer Irrelevance / Failure to address user intent.
- **B**: Hardware memory leak.
- **C**: Overfitting on training labels.
- **D**: Delta table schema evolution.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Answer Irrelevance / Failure to address user intent.**

Answer irrelevance occurs when the model produces text that fails to answer the user's specific core question.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hardware memory leaks cause process crashes.
• **(C)**: Incorrect. Overfitting is a model training concept, not single-turn prompt irrelevance.
• **(D)**: Incorrect. Schema evolution alters database table columns.

---

### Pregunta NaN: Evaluation shows that retrieved chunks contain the right answer, but the LLM repeatedly fails to extract it because each chunk is 3,000 tokens long and buries the key fact in irrelevant text. How should chunking be adjusted?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.3: Select chunking strategy based on model & retrieval evaluation  

#### Opciones:
- **A**: Reduce chunk size to a smaller window (e.g. 300-500 tokens) to increase semantic focus and reduce noise in the prompt.
- **B**: Increase chunk size to 10,000 tokens.
- **C**: Delete all chunks from the vector index.
- **D**: Switch from Python to JavaScript.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Reduce chunk size to a smaller window (e.g. 300-500 tokens) to increase semantic focus and reduce noise in the prompt.**

Shrinking chunk size isolates specific facts, preventing critical evidence from getting lost in massive text noise ('Lost in the Middle').

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Increasing to 10,000 tokens worsens prompt noise and dilution.
• **(C)**: Incorrect. Deleting chunks destroys the knowledge base.
• **(D)**: Incorrect. Programming language choice does not resolve chunk granularity issues.

---

### Pregunta NaN: Retrieval evaluation demonstrates that questions about legal contracts require analyzing multi-paragraph clauses together. A fixed 100-token chunker causes low answer completeness because clauses are fragmented. What is the solution?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.3: Select chunking strategy based on model & retrieval evaluation  

#### Opciones:
- **A**: Adopt section-based or semantic chunking with larger boundaries (e.g. 800-1200 tokens) aligned with legal clause headings.
- **B**: Reduce chunk size to 10 tokens.
- **C**: Ignore the evaluation metrics.
- **D**: Remove legal contracts from the database.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Adopt section-based or semantic chunking with larger boundaries (e.g. 800-1200 tokens) aligned with legal clause headings.**

Legal analysis requires holistic clause context; increasing chunk boundaries to match legal section structures restores necessary semantic context.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. 10-token chunks sever sentences into meaningless fragments.
• **(C)**: Incorrect. Ignoring evaluation metrics leads to production deployment failures.
• **(D)**: Incorrect. Removing contracts defeats the purpose of building a legal assistant.

---

### Pregunta NaN: If evaluation reveals that multi-hop questions fail because facts reside in different sections of a 100-page document, which advanced retrieval/chunking design addresses this best?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.3: Select chunking strategy based on model & retrieval evaluation  

#### Opciones:
- **A**: Hierarchical chunking or Multi-Vector Retrieval with document summaries combined with graph-based / agentic multi-hop retrieval.
- **B**: Single-token character splitting.
- **C**: Disabling vector search entirely.
- **D**: Running the application without data.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Hierarchical chunking or Multi-Vector Retrieval with document summaries combined with graph-based / agentic multi-hop retrieval.**

Multi-hop questions require multi-stage or hierarchical retrieval to synthesize facts dispersed across disparate document sections.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Single-token splitting creates extreme fragmentation.
• **(C)**: Incorrect. Disabling vector search disables semantic retrieval capabilities.
• **(D)**: Incorrect. An application with no data cannot answer domain questions.

---

### Pregunta NaN: What metric signal during offline evaluation indicates that your chunk overlap is too small?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.3: Select chunking strategy based on model & retrieval evaluation  

#### Opciones:
- **A**: Frequent incomplete answers specifically for test queries whose ground-truth answers straddle chunk boundary regions.
- **B**: GPU clock frequency dropping below 1 GHz.
- **C**: Delta table storage expanding by 500%.
- **D**: HTTP 404 URL not found errors.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Frequent incomplete answers specifically for test queries whose ground-truth answers straddle chunk boundary regions.**

Boundary straddling failures directly indicate that facts were cleaved without sufficient overlap continuity.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. GPU clock speed is managed by hardware power governors.
• **(C)**: Incorrect. Small overlap uses less, not more, storage.
• **(D)**: Incorrect. HTTP 404 indicates missing routing endpoints.

---

### Pregunta NaN: When benchmarking different chunking strategies (e.g. Fixed 256 vs Semantic vs Markdown Splitter), what is the proper methodology?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.3: Select chunking strategy based on model & retrieval evaluation  

#### Opciones:
- **A**: Run an identical test evaluation dataset across all chunking variants and compare retrieval metrics (Recall@k, NDCG) and end-to-end Groundedness.
- **B**: Pick whichever chunker runs in fewer milliseconds on a single laptop.
- **C**: Flip a coin to choose the chunker.
- **D**: Ask the LLM to choose its favorite chunking algorithm without testing.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Run an identical test evaluation dataset across all chunking variants and compare retrieval metrics (Recall@k, NDCG) and end-to-end Groundedness.**

Empirical benchmarking on a fixed evaluation dataset provides objective, repeatable metrics to guide chunking decisions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Processing speed on a laptop ignores downstream answer accuracy and retrieval quality.
• **(C)**: Incorrect. Random choice ignores empirical performance data.
• **(D)**: Incorrect. Subjective preference without testing leads to suboptimal production systems.

---

### Pregunta NaN: If evaluating chunking on API documentation reveals that code blocks are broken in half, causing syntax errors in LLM answers, what is the fix?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.3: Select chunking strategy based on model & retrieval evaluation  

#### Opciones:
- **A**: Use a language-aware code splitter (`RecursiveCharacterTextSplitter.from_language`) that treats code blocks as atomic units.
- **B**: Delete all code snippets from the documentation.
- **C**: Convert Python code to plain English poetry.
- **D**: Increase temperature to 2.0.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Use a language-aware code splitter (`RecursiveCharacterTextSplitter.from_language`) that treats code blocks as atomic units.**

Language-aware splitters recognize markdown triple backticks (```) and AST blocks, keeping code snippets atomic.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting code destroys the core utility of technical API documentation.
• **(C)**: Incorrect. Converting code to poetry makes it unexecutable.
• **(D)**: Incorrect. Higher temperature worsens syntax hallucinations.

---

### Pregunta NaN: When an embedding model has an effective context of 8,192 tokens (e.g. `text-embedding-3-large` or `bge-large`), what chunking optimization is enabled?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.3: Select chunking strategy based on model & retrieval evaluation  

#### Opciones:
- **A**: Ability to ingest and embed larger, semantically complete chapters or long technical specifications without premature truncation.
- **B**: Ability to bypass vector indexing completely.
- **C**: Elimination of all cloud storage costs.
- **D**: Instantaneous zero-millisecond retrieval.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Ability to ingest and embed larger, semantically complete chapters or long technical specifications without premature truncation.**

Large context embedding models can encode larger coherent semantic passages without truncating critical trailing sections.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Embeddings still need vector indexing for fast similarity search.
• **(C)**: Incorrect. Storage costs still apply for cloud storage.
• **(D)**: Incorrect. Neural inference and vector search still require compute time.

---

### Pregunta NaN: A user submits the query: 'What was our Q3 churn rate in EMEA?' What is the primary purpose of extracting key entities (`metric: churn_rate`, `quarter: Q3`, `region: EMEA`) before retrieval?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input based on key fields, terms, and intents  

#### Opciones:
- **A**: To construct metadata filter predicates and targeted semantic search queries that retrieve the exact relevant financial report.
- **B**: To permanently delete the user's account.
- **C**: To convert the query into a high-resolution JPEG image.
- **D**: To bypass enterprise security firewalls.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To construct metadata filter predicates and targeted semantic search queries that retrieve the exact relevant financial report.**

Entity and intent extraction allows hybrid retrieval systems to filter vectors by metadata (region='EMEA', quarter='Q3') while searching semantically for churn metrics.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Extraction processes query parameters, not delete user accounts.
• **(C)**: Incorrect. Entity extraction operates on text, not image generation.
• **(D)**: Incorrect. Security firewalls are not bypassed by query entity extraction.

---

### Pregunta NaN: How does **Query Rewriting / Query Expansion** improve retrieval for vague or shorthand user queries (e.g. 'error 403 on s3')?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input based on key fields, terms, and intents  

#### Opciones:
- **A**: An LLM rewrites the query into a comprehensive search string (e.g. 'How to resolve HTTP 403 Forbidden access denied error when accessing Amazon S3 bucket permissions').
- **B**: It translates the query into binary machine code.
- **C**: It removes all technical terms from the query.
- **D**: It sends an alert to the CEO's personal phone.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An LLM rewrites the query into a comprehensive search string (e.g. 'How to resolve HTTP 403 Forbidden access denied error when accessing Amazon S3 bucket permissions').**

Query expansion adds relevant synonyms, error codes, and context to maximize overlap with indexed technical documentation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Binary machine code cannot be indexed by semantic text embedding models.
• **(C)**: Incorrect. Removing technical terms destroys search specificity.
• **(D)**: Incorrect. Query rewriting is an internal NLP transformation, not an executive alerting mechanism.

---

### Pregunta NaN: In a multi-turn conversation, a user asks: 'Who is the CEO of Databricks?' followed by: 'Where did he go to university?' How should the second prompt be augmented before vector retrieval?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input based on key fields, terms, and intents  

#### Opciones:
- **A**: Use Contextual Query Reformulation to resolve the pronoun 'he' -> 'Where did Ali Ghodsi (CEO of Databricks) go to university?'.
- **B**: Search only the word 'he' in the vector database.
- **C**: Discard the first question and guess a random university.
- **D**: Crash the application with an unhandled exception.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Use Contextual Query Reformulation to resolve the pronoun 'he' -> 'Where did Ali Ghodsi (CEO of Databricks) go to university?'.**

Coreference resolution reformulates conversational follow-ups into standalone queries containing explicit entity names for accurate vector search.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Searching 'he' matches millions of generic pronoun occurrences without finding Ali Ghodsi.
• **(C)**: Incorrect. Discarding history loses conversational continuity.
• **(D)**: Incorrect. Conversational systems must handle follow-ups gracefully without crashing.

---

### Pregunta NaN: When injecting retrieved context chunks into the final LLM prompt, how should the context and user question be delineated?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input based on key fields, terms, and intents  

#### Opciones:
- **A**: Use clear structural tags and delimiters (e.g. `<context> ... </context>` or `"""Context: ... """`) with explicit instructions to ground answers exclusively in the provided context.
- **B**: Concatenate all text together into a single run-on sentence without punctuation.
- **C**: Place the context inside a hidden HTML comment.
- **D**: Scramble the words in random order.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Use clear structural tags and delimiters (e.g. `<context> ... </context>` or `"""Context: ... """`) with explicit instructions to ground answers exclusively in the provided context.**

Explicit XML/markdown delimiters provide clear structural boundaries that help LLMs distinguish background knowledge from user queries.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Run-on concatenation causes boundary confusion and hallucinations.
• **(C)**: Incorrect. Hidden comments may be ignored or misparsed by tokenizers.
• **(D)**: Incorrect. Scrambling words destroys semantic meaning.

---

### Pregunta NaN: What prompt instruction helps an LLM handle cases where the retrieved context does not contain the answer to the user's question?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input based on key fields, terms, and intents  

#### Opciones:
- **A**: 'If the answer cannot be found in the provided context, state clearly: I do not have enough information to answer based on the provided documents.'
- **B**: 'Always make up a plausible answer even if no documents exist.'
- **C**: 'Answer the question using external internet gossip.'
- **D**: 'Output random numbers when you are unsure.'

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) 'If the answer cannot be found in the provided context, state clearly: I do not have enough information to answer based on the provided documents.'**

Providing an explicit fallback instruction ('I do not have enough information') prevents the model from hallucinating when context is absent.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Telling the model to make up answers guarantees severe hallucinations.
• **(C)**: Incorrect. Relying on unverified gossip destroys enterprise trust.
• **(D)**: Incorrect. Outputting random numbers produces invalid, confusing responses.

---

### Pregunta NaN: How does **Step-Back Prompting** augment prompt reasoning for complex physics or engineering problems?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input based on key fields, terms, and intents  

#### Opciones:
- **A**: It prompts the LLM to first identify the fundamental high-level concepts and principles involved before solving the specific detailed problem.
- **B**: It prompts the model to take 10 steps backwards physically.
- **C**: It deletes the user's prompt after 5 seconds.
- **D**: It runs the neural network in reverse from output to input.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It prompts the LLM to first identify the fundamental high-level concepts and principles involved before solving the specific detailed problem.**

Step-back prompting abstracts specific problems to foundational principles first, guiding more accurate deductive reasoning.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Models do not possess physical bodies.
• **(C)**: Incorrect. Deleting prompts loses user input.
• **(D)**: Incorrect. Language generation proceeds sequentially token-by-token.

---

### Pregunta NaN: When augmenting prompts with customer profile metadata (e.g. `Tier: Platinum`, `Language: Spanish`), where should this context reside in a Chat Prompt?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input based on key fields, terms, and intents  

#### Opciones:
- **A**: In the System Message or a dedicated Context block within the Human message turn.
- **B**: In the model temperature hyperparameter field.
- **C**: In the database table primary key column.
- **D**: In the GPU BIOS configuration.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) In the System Message or a dedicated Context block within the Human message turn.**

Customer metadata belongs in the System/Context section where it establishes personalization parameters without conflicting with the user turn.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Temperature is a float parameter (e.g. 0.7), not a text storage field.
• **(C)**: Incorrect. Primary keys store unique identifiers in Delta Lake, not runtime prompt strings.
• **(D)**: Incorrect. BIOS settings manage hardware firmware, not prompt context.

---

### Pregunta NaN: A baseline prompt produces verbose, 500-word conversational responses. The business requirement demands concise answers under 50 words tailored for mobile push notifications. How should the prompt be adjusted?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.5: Create a prompt that adjusts an LLM's response from a baseline to a desired output  

#### Opciones:
- **A**: Add explicit length constraints, persona guidelines, and concise few-shot examples to the System prompt: 'Respond in 1-2 sentences (max 50 words). Do not include conversational filler.'
- **B**: Set max_tokens to 10 and let the sentence cut off mid-word.
- **C**: Instruct the model to write as much as possible.
- **D**: Delete the system prompt completely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Add explicit length constraints, persona guidelines, and concise few-shot examples to the System prompt: 'Respond in 1-2 sentences (max 50 words). Do not include conversational filler.'**

Explicit brevity constraints and few-shot examples guide the model to synthesize concise responses naturally without abrupt token truncation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Truncating max_tokens at 10 results in broken, ungrammatical half-sentences.
• **(C)**: Incorrect. Writing as much as possible violates the 50-word requirement.
• **(D)**: Incorrect. Deleting the system prompt removes all tone and length control.

---

### Pregunta NaN: An internal technical assistant answers customer questions using overly complex engineering jargon. What prompt adjustment shifts the tone to a beginner-friendly persona?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.5: Create a prompt that adjusts an LLM's response from a baseline to a desired output  

#### Opciones:
- **A**: Incorporate persona instructions: 'Explain concepts using simple everyday analogies suitable for a non-technical beginner. Avoid internal acronyms.'
- **B**: Increase temperature to 1.9.
- **C**: Add more C++ source code to the prompt.
- **D**: Require all answers to be written in hexadecimal.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Incorporate persona instructions: 'Explain concepts using simple everyday analogies suitable for a non-technical beginner. Avoid internal acronyms.'**

Persona and audience framing instruct the LLM to modulate vocabulary and replace jargon with accessible analogies.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. High temperature causes incoherent, unpredictable outputs.
• **(C)**: Incorrect. Adding C++ code increases technical jargon rather than simplifying it.
• **(D)**: Incorrect. Hexadecimal makes outputs completely unreadable to humans.

---

### Pregunta NaN: To prevent an LLM from hallucinating when unsure, which prompt modification is most effective?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.5: Create a prompt that adjusts an LLM's response from a baseline to a desired output  

#### Opciones:
- **A**: Set strict grounding instructions: 'Answer ONLY using the provided facts. If the information is not explicitly present, reply with: Information not available.'
- **B**: Tell the model: 'Be creative and invent missing facts.'
- **C**: Increase frequency penalty to max.
- **D**: Remove all reference documents from the prompt.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Set strict grounding instructions: 'Answer ONLY using the provided facts. If the information is not explicitly present, reply with: Information not available.'**

Strict grounding constraints paired with explicit fallback authorization give the model permission to admit lack of knowledge.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Instructing the model to invent facts guarantees false outputs.
• **(C)**: Incorrect. Frequency penalty penalizes repeated tokens, not factual hallucinations.
• **(D)**: Incorrect. Removing reference documents forces 100% reliance on parametric memory.

---

### Pregunta NaN: What technique improves an LLM's performance on complex multi-step math and logic problems?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.5: Create a prompt that adjusts an LLM's response from a baseline to a desired output  

#### Opciones:
- **A**: Chain-of-Thought (CoT) prompting: 'Think step-by-step and show your reasoning before presenting the final answer.'
- **B**: Zero-shot single-token output prompting.
- **C**: Setting top_k to 1.
- **D**: Running inference in total darkness.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Chain-of-Thought (CoT) prompting: 'Think step-by-step and show your reasoning before presenting the final answer.'**

Chain-of-Thought prompts allocate computational tokens for intermediate reasoning steps, drastically reducing logical deduction errors.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Forcing single-token output prevents the model from computing intermediate scratchpad steps.
• **(C)**: Incorrect. top_k=1 makes sampling greedy, but does not induce multi-step reasoning without CoT prompting.
• **(D)**: Incorrect. Physical lighting has no effect on cloud GPUs.

---

### Pregunta NaN: How do **Few-Shot Demonstrations** adjust LLM outputs compared to Zero-Shot instructions?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.5: Create a prompt that adjusts an LLM's response from a baseline to a desired output  

#### Opciones:
- **A**: They provide concrete input-output exemplars that establish exact formatting, stylistic tone, and edge-case handling patterns through in-context learning.
- **B**: They permanently retrain the model weights in GPU VRAM.
- **C**: They reduce prompt token counts to zero.
- **D**: They disable model safety filters.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They provide concrete input-output exemplars that establish exact formatting, stylistic tone, and edge-case handling patterns through in-context learning.**

Few-shot examples provide tangible demonstrations of desired output patterns that models emulate with high fidelity.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. In-context few-shot learning does not modify foundational model weights.
• **(C)**: Incorrect. Few-shot examples increase prompt token length, not reduce it.
• **(D)**: Incorrect. Few-shot examples do not disable safety guardrails.

---

### Pregunta NaN: When an LLM must format its answer strictly as a Markdown table with specific column headers `| Feature | Free Tier | Pro Tier |`, what prompt adjustment is required?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.5: Create a prompt that adjusts an LLM's response from a baseline to a desired output  

#### Opciones:
- **A**: Define the exact Markdown table structure in the prompt and provide a one-shot demonstration showing table headers and row separators (`|---|---|---|`).
- **B**: Instruct the model to write in plain unformatted text.
- **C**: Ask the model to draw an oil painting.
- **D**: Disable Markdown rendering in the web browser.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Define the exact Markdown table structure in the prompt and provide a one-shot demonstration showing table headers and row separators (`|---|---|---|`).**

Explicit table header definitions and structural syntax demonstrations guide the LLM to output valid Markdown table rows.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Plain text instructions contradict the table format requirement.
• **(C)**: Incorrect. Oil painting prompts do not generate text tables.
• **(D)**: Incorrect. Disabling browser rendering does not fix the raw text output generated by the LLM.

---

### Pregunta NaN: If an LLM occasionally forgets to follow instructions located in the middle of a very long prompt, how should the prompt layout be restructured?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.5: Create a prompt that adjusts an LLM's response from a baseline to a desired output  

#### Opciones:
- **A**: Place critical instructions at the very beginning (System prompt) and reiterate them at the very end of the prompt (Recency effect / sandwich defense).
- **B**: Hide critical instructions in the middle of a 50,000-word document chunk.
- **C**: Delete all system instructions.
- **D**: Translate the entire prompt into ancient Latin.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Place critical instructions at the very beginning (System prompt) and reiterate them at the very end of the prompt (Recency effect / sandwich defense).**

LLMs pay highest attention to tokens at the beginning and end of long context windows ('Lost in the Middle' phenomenon); repeating key constraints at the end reinforces compliance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Burying instructions in the middle leads to attention attenuation and missed constraints.
• **(C)**: Incorrect. Deleting instructions leaves the model unguided.
• **(D)**: Incorrect. Translating to Latin degrades comprehension for modern models.

---

### Pregunta NaN: What is the primary function of an **Input Guardrail** in an enterprise GenAI application?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: To inspect, sanitize, and validate user inputs before they reach the LLM, blocking prompt injections, PII, and policy violations early.
- **B**: To compile SQL queries into C++ binaries.
- **C**: To compress hard drive sectors.
- **D**: To increase model temperature automatically.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To inspect, sanitize, and validate user inputs before they reach the LLM, blocking prompt injections, PII, and policy violations early.**

Input guardrails filter malicious attacks, PII, and unsafe content before expensive model inference occurs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Guardrails evaluate text safety, not compile C++ binaries.
• **(C)**: Incorrect. Disk compression is handled by storage systems.
• **(D)**: Incorrect. Guardrails do not alter temperature parameters.

---

### Pregunta NaN: What is the primary function of an **Output Guardrail** in a GenAI pipeline?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: To inspect generated LLM responses before delivery to the user, verifying that no hallucinations, toxic text, competitor mentions, or PII are surfaced.
- **B**: To format user hard drives.
- **C**: To double the cloud billing rate.
- **D**: To train a new foundation model from scratch.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To inspect generated LLM responses before delivery to the user, verifying that no hallucinations, toxic text, competitor mentions, or PII are surfaced.**

Output guardrails act as a final safety check on generated text before it reaches end users.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Guardrails do not format user hardware.
• **(C)**: Incorrect. Guardrails are for security, not billing increases.
• **(D)**: Incorrect. Output guardrails inspect text; they do not train foundation models.

---

### Pregunta NaN: Which framework is widely used in Python for implementing declarative programmable guardrails (e.g. NeMo Guardrails, Llama Guard)?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: NVIDIA NeMo Guardrails / Meta Llama Guard / Guardrails AI
- **B**: Matplotlib / Seaborn
- **C**: Pygame / OpenGL
- **D**: Scipy / Statsmodels

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) NVIDIA NeMo Guardrails / Meta Llama Guard / Guardrails AI**

NeMo Guardrails, Llama Guard, and Guardrails AI are specialized open-source frameworks for programmable LLM safety rails.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Matplotlib and Seaborn are plotting libraries.
• **(C)**: Incorrect. Pygame and OpenGL are graphics rendering engines.
• **(D)**: Incorrect. Scipy and Statsmodels perform mathematical statistical modeling.

---

### Pregunta NaN: In Databricks Mosaic AI Gateway, what built-in guardrail capability can be configured on Model Serving endpoints?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: AI Gateway Guardrails (PII detection/masking, toxicity filters, rate limiting, and inference logging).
- **B**: Automatic code compiler for Rust.
- **C**: 3D video game engine.
- **D**: Physical keyboard hardware logger.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) AI Gateway Guardrails (PII detection/masking, toxicity filters, rate limiting, and inference logging).**

Databricks AI Gateway provides managed guardrail policies including PII masking, safety filtering, and rate limiting directly at the serving layer.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. AI Gateway is an LLM proxy, not a Rust compiler.
• **(C)**: Incorrect. AI Gateway does not render video games.
• **(D)**: Incorrect. Hardware keyloggers are malicious physical devices.

---

### Pregunta NaN: What is a **Canary Word / Honeytoken** defense against prompt extraction and system prompt leakage?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: A secret token inserted into the system prompt; an output guardrail monitors for this token and blocks the response if the LLM attempts to leak it.
- **B**: A bird sound played through the user's speakers.
- **C**: A cryptocurrency mining script.
- **D**: A tool that deletes the database when users type hello.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A secret token inserted into the system prompt; an output guardrail monitors for this token and blocks the response if the LLM attempts to leak it.**

Honeytokens detect prompt extraction attacks by triggering automated blocks if the model outputs secret canary strings embedded in developer instructions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Canary tokens are cryptographic string markers, not audio sound effects.
• **(C)**: Incorrect. Guardrails do not run cryptocurrency scripts.
• **(D)**: Incorrect. Guardrails enforce security without arbitrarily deleting databases.

---

### Pregunta NaN: How does semantic intent classification serve as a guardrail against 'off-topic' queries in a domain-specific assistant (e.g. banking bot)?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: A lightweight classifier scores whether the query belongs to approved banking topics; if classified as off-topic (e.g. poetry, politics), it triggers a canned polite refusal.
- **B**: It translates the query into Italian.
- **C**: It increases server memory allocation.
- **D**: It deletes all customer bank accounts.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A lightweight classifier scores whether the query belongs to approved banking topics; if classified as off-topic (e.g. poetry, politics), it triggers a canned polite refusal.**

Topical classification guardrails prevent domain-specific bots from being tricked into discussing irrelevant or controversial non-business topics.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Translation does not enforce domain topic restrictions.
• **(C)**: Incorrect. Memory allocation is an infrastructure setting, not a topical filter.
• **(D)**: Incorrect. Topical filters protect user accounts; they never delete data.

---

### Pregunta NaN: When an output guardrail detects that an LLM response contains hallucinated medical claims not present in verified source docs, what action should it take?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: Block the unsafe response and return a safe fallback message: 'I cannot provide verified medical advice for this question.'
- **B**: Publish the hallucinated claim on public social media.
- **C**: Re-run the query 1,000 times until it changes.
- **D**: Crash the entire Databricks workspace.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Block the unsafe response and return a safe fallback message: 'I cannot provide verified medical advice for this question.'**

Blocking unverified claims and returning safe fallback messaging prevents dangerous or liable medical misinformation from reaching users.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Publishing hallucinations creates severe liability.
• **(C)**: Incorrect. Blindly looping 1,000 times wastes cost without guaranteeing correctness.
• **(D)**: Incorrect. Guardrails handle errors gracefully without crashing the platform.

---

