# Databricks Certified Generative AI Engineer Associate
## Domain 2: Data Preparation — Parte 2 (29 Preguntas)

> **Total de Preguntas en esta sección**: 29
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026 (Unificado: CertSafari Base 373 Qs + Var4 349 Qs)

---

### Pregunta 73: When designing a customer service RAG application for a SaaS platform, which source documents provide the highest quality knowledge foundation?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.5: Identify needed source documents that provide necessary knowledge and quality for a given RAG application  

#### Opciones:
- **A**: Official product user manuals, verified release notes, and curated knowledge base troubleshooting guides.
- **B**: Unmoderated internal Slack banter channels and draft lunch menus.
- **C**: Random web scrapes of unrelated third-party marketing blogs.
- **D**: Outdated 2012 legacy product brochures with deprecated API signatures.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Official product user manuals, verified release notes, and curated knowledge base troubleshooting guides.**

High-quality, authoritative, and verified documentation produces grounded answers and minimizes factual hallucinations.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Internal casual chat and lunch menus introduce irrelevant noise and privacy leaks.
• **(C)**: Incorrect. Unrelated third-party blogs cause domain confusion.
• **(D)**: Incorrect. Deprecated documentation leads the model to generate outdated, broken API instructions.

---

### Pregunta 74: What strategy ensures that an enterprise RAG assistant does not provide outdated answers when company policies change?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.5: Identify needed source documents that provide necessary knowledge and quality for a given RAG application  

#### Opciones:
- **A**: Implement document lifecycle management with versioning, expiration metadata, and automated retirement of superseded policy documents.
- **B**: Keep all historical and conflicting policy documents in the active vector index indefinitely.
- **C**: Hardcode the current year in the LLM system prompt.
- **D**: Increase temperature to 1.5 so the model can guess the newer policy.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Implement document lifecycle management with versioning, expiration metadata, and automated retirement of superseded policy documents.**

Document lifecycle governance ensures only current, active policy versions are indexed in the search corpus.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Indexing conflicting versions causes the retriever to return conflicting policies randomly.
• **(C)**: Incorrect. Hardcoding the year does not remove outdated policy text from retrieved vector chunks.
• **(D)**: Incorrect. Higher temperature increases hallucinations, worsening factual inaccuracy.

---

### Pregunta 75: How does conducting a 'Gap Analysis' on user query logs help identify missing source documents for a RAG system?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.5: Identify needed source documents that provide necessary knowledge and quality for a given RAG application  

#### Opciones:
- **A**: It reveals frequent user queries where retrieval confidence is low or where LLM answers indicate missing knowledge, highlighting specific documentation gaps.
- **B**: It automatically writes missing legal contracts.
- **C**: It replaces the need for vector search embeddings.
- **D**: It converts SQL tables into audio files.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It reveals frequent user queries where retrieval confidence is low or where LLM answers indicate missing knowledge, highlighting specific documentation gaps.**

Query log gap analysis surfaces topics where users ask questions that cannot be answered by current indexed documents.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Gap analysis highlights missing topics; it does not author legal contracts autonomously.
• **(C)**: Incorrect. Gap analysis guides data preparation; it does not replace vector embeddings.
• **(D)**: Incorrect. Audio conversion has no relationship to knowledge gap analysis.

---

### Pregunta 76: When selecting knowledge sources for a financial compliance RAG agent, why is it critical to include both authoritative policy texts and structured regulatory tables?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.5: Identify needed source documents that provide necessary knowledge and quality for a given RAG application  

#### Opciones:
- **A**: Policy prose provides explanatory reasoning and rules, while structured tables provide precise numeric thresholds, dates, and penalty rates.
- **B**: To consume 100% of the workspace cloud budget.
- **C**: Because vector search cannot index text without tables.
- **D**: To bypass Unity Catalog compliance audits.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Policy prose provides explanatory reasoning and rules, while structured tables provide precise numeric thresholds, dates, and penalty rates.**

Hybrid knowledge sources ensure the agent can synthesize comprehensive explanations while citing exact numeric thresholds.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The goal is accuracy, not wasting cloud budgets.
• **(C)**: Incorrect. Vector search can index prose alone, but loses precision on complex numeric tables.
• **(D)**: Incorrect. Compliance agents must uphold, not bypass, regulatory audits.

---

### Pregunta 77: If a company has both public documentation and highly confidential internal engineering wikis, how should source documents be organized in Unity Catalog?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.5: Identify needed source documents that provide necessary knowledge and quality for a given RAG application  

#### Opciones:
- **A**: In separate Unity Catalog Volumes / Delta Tables with granular RBAC permissions, allowing distinct Vector Search indexes per access tier.
- **B**: In a single public S3 bucket with no access controls.
- **C**: By merging all confidential text into public HTML footers.
- **D**: By deleting the confidential documents.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) In separate Unity Catalog Volumes / Delta Tables with granular RBAC permissions, allowing distinct Vector Search indexes per access tier.**

Segregating corpora into distinct Unity Catalog securables prevents unauthorized data leakage between user permission tiers.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Public buckets without access controls expose confidential enterprise IP.
• **(C)**: Incorrect. Merging confidential data into public text causes catastrophic data breaches.
• **(D)**: Incorrect. Deleting documents prevents authorized internal engineers from using the tool.

---

### Pregunta 78: What quality check should be performed on source PDF documents before ingesting them into an enterprise knowledge pipeline?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.5: Identify needed source documents that provide necessary knowledge and quality for a given RAG application  

#### Opciones:
- **A**: Verify that digital text layers exist (or apply OCR if scanned), check for document corruption, and confirm readability.
- **B**: Ensure all pages are completely blank.
- **C**: Confirm that file sizes are exactly 1 byte.
- **D**: Convert all fonts to Wingdings.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Verify that digital text layers exist (or apply OCR if scanned), check for document corruption, and confirm readability.**

Validating text layers and file integrity ensures that ingestion pipelines do not index empty or corrupted documents.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Blank pages provide zero knowledge.
• **(C)**: Incorrect. 1-byte files indicate corrupted or empty files.
• **(D)**: Incorrect. Wingdings font encoding prevents optical character extraction.

---

### Pregunta 79: Why should source documents for a technical coding RAG assistant include runnable code examples alongside explanatory text?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.5: Identify needed source documents that provide necessary knowledge and quality for a given RAG application  

#### Opciones:
- **A**: Runnable code examples provide concrete syntactic patterns and working API invocations that ground the LLM's code generation.
- **B**: They make the embedding vectors completely invisible.
- **C**: They allow the vector database to compile C++ code.
- **D**: They eliminate the need for an LLM generator.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Runnable code examples provide concrete syntactic patterns and working API invocations that ground the LLM's code generation.**

Syntactic examples provide precise few-shot code patterns that models replicate reliably during generation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Embedding vectors are numerical arrays; code examples do not make them invisible.
• **(C)**: Incorrect. Vector databases store and query embeddings, not compile C++ code.
• **(D)**: Incorrect. RAG still requires an LLM to synthesize explanations.

---

### Pregunta 80: Which retrieval evaluation metric measures the proportion of relevant documents retrieved out of all existing relevant documents in the corpus?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: Recall@k
- **B**: Precision@k
- **C**: Perplexity
- **D**: BLEU-4

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Recall@k**

Recall@k measures the fraction of all relevant documents that were successfully retrieved in the top-k results.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Precision@k measures the fraction of retrieved items that are relevant.
• **(C)**: Incorrect. Perplexity evaluates language model prediction probabilities, not retrieval recall.
• **(D)**: Incorrect. BLEU-4 evaluates n-gram overlap in machine translation.

---

### Pregunta 81: Which metric is most sensitive to the exact rank order of retrieved documents, heavily penalizing relevant documents that appear low in the list?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: Mean Reciprocal Rank (MRR) / Normalized Discounted Cumulative Gain (NDCG@k)
- **B**: Raw Character Count
- **C**: Mean Squared Error (MSE)
- **D**: Silhouette Score

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Mean Reciprocal Rank (MRR) / Normalized Discounted Cumulative Gain (NDCG@k)**

NDCG@k and MRR apply logarithmic discounting to penalize relevant items that rank lower down the result list.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Character count does not measure semantic relevance or rank order.
• **(C)**: Incorrect. MSE evaluates continuous regression errors.
• **(D)**: Incorrect. Silhouette Score evaluates unsupervised clustering separation.

---

### Pregunta 82: When evaluating a search engine where users only look at the first 3 results, which metric is most directly aligned with user satisfaction?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: Precision@3
- **B**: Recall@100
- **C**: F1-score at threshold 0.001
- **D**: ROC-AUC across 10,000 documents

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Precision@3**

Precision@3 directly evaluates the proportion of relevant items in the immediate top-3 results seen by users.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Recall@100 measures whether answers exist anywhere in a deep list users never view.
• **(C)**: Incorrect. Low-threshold F1 does not isolate top-rank quality.
• **(D)**: Incorrect. Global ROC-AUC is diluted across thousands of unseen negative candidates.

---

### Pregunta 83: In Databricks Mosaic AI Agent Evaluation, which metric evaluates whether the retrieved chunks contain all the necessary information to answer the user question?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: Retrieval Groundedness / Context Sufficiency
- **B**: Network Latency (ping)
- **C**: GPU Clock Speed
- **D**: Disk IOPS

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Retrieval Groundedness / Context Sufficiency**

Context Sufficiency / Retrieval Groundedness evaluates whether the retrieved context contains sufficient facts to answer the query.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Network ping measures network transmission speed, not retrieval relevance.
• **(C)**: Incorrect. GPU clock speed measures hardware compute frequency.
• **(D)**: Incorrect. Disk IOPS measures storage throughput.

---

### Pregunta 84: What is the primary role of a 'Golden Evaluation Dataset' in retrieval benchmarking?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: A curated set of representative queries paired with ground-truth relevant document IDs / chunk IDs to measure Precision, Recall, and NDCG objectively.
- **B**: A dataset made entirely of synthetic binary code.
- **C**: A list of user passwords used to stress-test authentication.
- **D**: A collection of random images used to benchmark GPUs.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A curated set of representative queries paired with ground-truth relevant document IDs / chunk IDs to measure Precision, Recall, and NDCG objectively.**

A Golden Evaluation Dataset provides standardized ground-truth query-document relevance labels for quantitative benchmark scoring.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Synthetic binary code does not evaluate natural language search quality.
• **(C)**: Incorrect. Password lists test security/auth, not retrieval accuracy.
• **(D)**: Incorrect. Random images do not evaluate document text retrieval.

---

### Pregunta 85: If a retrieval system has High Precision@5 (0.90) but Low Recall@5 (0.30), what does this indicate about the retrieval behavior?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: Almost everything retrieved in top-5 is relevant, but many other relevant documents in the corpus were missed.
- **B**: Everything retrieved is completely irrelevant spam.
- **C**: The vector database has corrupted all records.
- **D**: The model is hallucinating 100% of the time.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Almost everything retrieved in top-5 is relevant, but many other relevant documents in the corpus were missed.**

High precision with low recall means the retrieved results are accurate, but the retriever fails to capture the full scope of relevant documents.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. High precision means returned items are relevant, not spam.
• **(C)**: Incorrect. High precision proves the vector database is functioning correctly.
• **(D)**: Incorrect. Precision evaluates retrieved documents, not generator hallucinations.

---

### Pregunta 86: How does MLflow evaluate retrieval quality using an LLM-as-a-Judge approach?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: An evaluator LLM reads the user query and the retrieved context chunks, grading relevance and sufficiency against a structured rubric.
- **B**: It calculates SHA-256 hashes of all strings.
- **C**: It compiles the Python code into WebAssembly.
- **D**: It restarts the workspace cluster.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An evaluator LLM reads the user query and the retrieved context chunks, grading relevance and sufficiency against a structured rubric.**

LLM-as-a-judge evaluates semantic alignment between queries and retrieved passages using standardized rubrics.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hash calculations verify bitwise equality, not semantic relevance.
• **(C)**: Incorrect. WebAssembly compilation is unrelated to evaluation metrics.
• **(D)**: Incorrect. Cluster restarts disrupt service and do not score retrieval quality.

---

### Pregunta 87: What is Mean Average Precision (MAP) in the context of information retrieval?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.6: Use tools and metrics to evaluate retrieval performance  

#### Opciones:
- **A**: The mean of the Average Precision scores calculated across a benchmark set of queries, rewarding systems that surface relevant docs early.
- **B**: The average CPU utilization during indexing.
- **C**: The arithmetic mean of document byte lengths.
- **D**: The maximum memory allocated to Spark executors.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The mean of the Average Precision scores calculated across a benchmark set of queries, rewarding systems that surface relevant docs early.**

MAP calculates the mean of average precision across queries, providing a comprehensive single-figure metric of retrieval performance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. MAP is an IR quality metric, not a CPU utilization monitor.
• **(C)**: Incorrect. Document byte length has no relationship to retrieval precision.
• **(D)**: Incorrect. Spark memory allocation is an infrastructure setting.

---

### Pregunta 88: What is the core concept behind **Parent-Document Retrieval** (or Small-to-Big retrieval)?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.7: Design retrieval systems using advanced chunking strategies  

#### Opciones:
- **A**: Embed and search small granular chunks for high semantic search accuracy, but return the larger parent document / section to the LLM for rich context.
- **B**: Search only parent documents and return 1-word child tokens to the LLM.
- **C**: Delete parent documents after creating small chunks.
- **D**: Use parent documents to train neural networks from scratch.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Embed and search small granular chunks for high semantic search accuracy, but return the larger parent document / section to the LLM for rich context.**

Parent-Document Retrieval indexes small chunks for precise vector matching while passing larger surrounding parent passages to the LLM.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Searching large documents loses vector specificity and returning 1-word tokens provides zero context.
• **(C)**: Incorrect. Deleting parent documents prevents the system from retrieving surrounding context.
• **(D)**: Incorrect. Parent-Document Retrieval is a RAG retrieval pattern, not a foundation model pretraining technique.

---

### Pregunta 89: How does **Hierarchical Chunking** organize multi-level document repositories (e.g. Book -> Chapter -> Section -> Paragraph)?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.7: Design retrieval systems using advanced chunking strategies  

#### Opciones:
- **A**: It creates a tree hierarchy of chunks linked by metadata, enabling multi-level retrieval from broad summaries down to exact paragraph details.
- **B**: It flattens all text into a single continuous stream with no IDs.
- **C**: It removes all paragraph breaks to make files as small as possible.
- **D**: It randomly shuffles chapters to increase model creativity.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It creates a tree hierarchy of chunks linked by metadata, enabling multi-level retrieval from broad summaries down to exact paragraph details.**

Hierarchical chunking preserves nested structural relationships, allowing retrievers to navigate between summary levels and fine-grained passages.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Flattening text destroys hierarchical document relationships.
• **(C)**: Incorrect. Removing paragraph breaks harms readability and destroys semantic boundaries.
• **(D)**: Incorrect. Shuffling chapters corrupts logical document flow.

---

### Pregunta 90: What is **Contextual Chunking** (or Context-Enriched Chunking) as introduced by modern GenAI architectures?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.7: Design retrieval systems using advanced chunking strategies  

#### Opciones:
- **A**: Prepending an LLM-generated document summary or contextual explanation to each chunk before embedding, ensuring each chunk is self-contained.
- **B**: Translating every chunk into 10 foreign languages.
- **C**: Replacing all verbs with synonyms.
- **D**: Encrypting chunk text with private keys.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Prepending an LLM-generated document summary or contextual explanation to each chunk before embedding, ensuring each chunk is self-contained.**

Contextual chunking uses an LLM to prepend concise document context to each chunk, drastically improving standalone retrieval accuracy.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Multi-language translation increases storage without improving standalone chunk context.
• **(C)**: Incorrect. Synonym replacement can distort exact domain terminology.
• **(D)**: Incorrect. Encrypting text prevents semantic vector models from indexing the words.

---

### Pregunta 91: In a **Multi-Vector Retriever** strategy, what is indexed in the vector store versus what is stored in the document store?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.7: Design retrieval systems using advanced chunking strategies  

#### Opciones:
- **A**: Multiple lightweight vectors (e.g. summaries, hypothetical questions, key terms) are indexed in the vector store, pointing to the full original document in the document store.
- **B**: The full document is converted to 100 identical vectors.
- **C**: Vectors are discarded and only full text is stored.
- **D**: Only image pixels are stored in the vector database.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Multiple lightweight vectors (e.g. summaries, hypothetical questions, key terms) are indexed in the vector store, pointing to the full original document in the document store.**

Multi-Vector Retriever decouples the indexed representation (summaries, questions) from the raw content returned to the LLM.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Storing 100 identical vectors wastes storage without adding retrieval diversity.
• **(C)**: Incorrect. Discarding vectors disables semantic similarity search.
• **(D)**: Incorrect. Document text RAG requires text representations, not image pixels.

---

### Pregunta 92: What is **Hypothetical Document Embeddings (HyDE)** and how does it alter retrieval?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.7: Design retrieval systems using advanced chunking strategies  

#### Opciones:
- **A**: An LLM generates a hypothetical answer to the user's question, and that hypothetical answer is embedded to search for real documents with similar vectors.
- **B**: It generates fake documents to deceive external web crawlers.
- **C**: It bypasses the vector database by searching Wikipedia directly.
- **D**: It stores imaginary vectors in CPU cache memory.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An LLM generates a hypothetical answer to the user's question, and that hypothetical answer is embedded to search for real documents with similar vectors.**

HyDE bridges the vector gap between short queries and long documents by embedding a generated hypothetical answer.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. HyDE is an IR retrieval pattern, not a web crawler honeypot.
• **(C)**: Incorrect. HyDE still searches the local vector store using the hypothetical vector.
• **(D)**: Incorrect. Vectors are standard numerical embeddings, not 'imaginary' cache constructs.

---

### Pregunta 93: When implementing advanced table chunking, why is converting HTML / Markdown tables into individual row-level summary sentences effective?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.7: Design retrieval systems using advanced chunking strategies  

#### Opciones:
- **A**: It converts 2D relational data into natural language statements that standard text embedding models can match semantically.
- **B**: It increases table column count to 10,000.
- **C**: It prevents SQL queries from running on Delta Lake.
- **D**: It encrypts numbers against unauthorized viewers.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It converts 2D relational data into natural language statements that standard text embedding models can match semantically.**

Text embedding models excel at natural language; linearizing table rows into natural sentences drastically improves semantic retrieval over raw grid symbols.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Linearizing rows does not create 10,000 table columns.
• **(C)**: Incorrect. It does not interfere with SQL capabilities on the base Delta table.
• **(D)**: Incorrect. Linearization is for search retrieval, not encryption.

---

### Pregunta 94: What is the primary benefit of **Sentence Window Retrieval**?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.7: Design retrieval systems using advanced chunking strategies  

#### Opciones:
- **A**: Individual sentences are embedded for high-precision vector search, but a surrounding window of adjacent sentences (e.g. +/- 3) is retrieved and fed to the LLM.
- **B**: It deletes all sentences containing more than 10 words.
- **C**: It converts every sentence into an animated GIF.
- **D**: It executes Python scripts inside the browser window.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Individual sentences are embedded for high-precision vector search, but a surrounding window of adjacent sentences (e.g. +/- 3) is retrieved and fed to the LLM.**

Sentence Window Retrieval optimizes search on single specific sentences while supplying surrounding narrative context to the generator LLM.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. It does not delete long sentences.
• **(C)**: Incorrect. It has nothing to do with image/GIF animation.
• **(D)**: Incorrect. Sentence windowing is an NLP retrieval pattern, not browser scripting.

---

### Pregunta 95: What is the primary role of a **Re-ranker** (Cross-Encoder) in a two-stage retrieval pipeline?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.8: Explain the role of re-ranking in the information retrieval process  

#### Opciones:
- **A**: It performs computationally intensive deep cross-attention between the query and candidate passages to accurately reorder the top-k retrieved candidates.
- **B**: It generates synthetic PDF documents from scratch.
- **C**: It compresses Delta Lake Parquet files on disk.
- **D**: It routes network traffic across cloud regions.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It performs computationally intensive deep cross-attention between the query and candidate passages to accurately reorder the top-k retrieved candidates.**

Cross-encoder re-rankers analyze full joint query-passage attention, delivering significantly higher ranking accuracy than bi-encoder vector similarity alone.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Re-rankers score relevance; they do not generate synthetic PDFs.
• **(C)**: Incorrect. Storage compression is handled by Delta Lake, not re-ranking models.
• **(D)**: Incorrect. Cloud routing is handled by DNS and load balancers.

---

### Pregunta 96: Why is a two-stage retrieval architecture (Bi-Encoder Vector Search + Cross-Encoder Re-ranker) preferred over using a Cross-Encoder for the entire corpus?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.8: Explain the role of re-ranking in the information retrieval process  

#### Opciones:
- **A**: Bi-encoders can search millions of vectors in milliseconds using approximate nearest neighbors (ANN), while cross-encoders are too slow to run across an entire database.
- **B**: Cross-encoders cannot read English text.
- **C**: Bi-encoders are 100% accurate on every single query.
- **D**: Two-stage architectures disable GPU compute.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Bi-encoders can search millions of vectors in milliseconds using approximate nearest neighbors (ANN), while cross-encoders are too slow to run across an entire database.**

Cross-encoders require joint forward passes for every (query, document) pair (O(N) latency), making them feasible only on small candidate sets (e.g. top 50).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Cross-encoders are highly capable multilingual language models.
• **(C)**: Incorrect. Bi-encoders lose fine-grained token-level cross-attention and are not 100% accurate.
• **(D)**: Incorrect. Two-stage pipelines fully utilize GPU compute.

---

### Pregunta 97: Which metric is most suitable for evaluating the quality improvement delivered by adding a re-ranking stage to a retrieval pipeline?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.8: Explain the role of re-ranking in the information retrieval process  

#### Opciones:
- **A**: NDCG@10 or MRR (Mean Reciprocal Rank)
- **B**: Raw disk storage size (GB)
- **C**: CPU fan speed
- **D**: Number of git branches

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) NDCG@10 or MRR (Mean Reciprocal Rank)**

NDCG@10 and MRR specifically measure the positioning and ranking quality of relevant items within the top retrieved positions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Disk storage does not measure retrieval ranking quality.
• **(C)**: Incorrect. Hardware fan speed is a physical metric unrelated to IR relevance.
• **(D)**: Incorrect. Git branches track source code versions.

---

### Pregunta 98: In a hybrid search system combining BM25 keyword search and Dense Vector Search, how does **Reciprocal Rank Fusion (RRF)** function?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.8: Explain the role of re-ranking in the information retrieval process  

#### Opciones:
- **A**: It combines the rank positions of items from both search result lists using formula `RRF_Score = sum(1 / (k + rank_i))` to produce a single unified ranking.
- **B**: It multiplies the raw vector floating point numbers by ASCII character codes.
- **C**: It deletes all keywords that appear in the dense vector list.
- **D**: It shuts down the BM25 search engine.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It combines the rank positions of items from both search result lists using formula `RRF_Score = sum(1 / (k + rank_i))` to produce a single unified ranking.**

Reciprocal Rank Fusion (RRF) normalizes and merges rank positions from disparate scoring algorithms (dense vector and sparse BM25) without needing score calibration.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vector multiplication by ASCII codes is invalid math for rank fusion.
• **(C)**: Incorrect. RRF merges and rewards items that appear in both lists rather than deleting them.
• **(D)**: Incorrect. RRF operates on the combined outputs of both engines.

---

### Pregunta 99: What is a potential trade-off when adding a cross-encoder re-ranking step to an interactive real-time RAG application?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.8: Explain the role of re-ranking in the information retrieval process  

#### Opciones:
- **A**: Increased end-to-end query latency due to additional neural model inference over the candidate passages.
- **B**: Immediate corruption of the Vector Search index.
- **C**: Permanent loss of all Delta Lake history.
- **D**: Total inability to serve responses in English.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Increased end-to-end query latency due to additional neural model inference over the candidate passages.**

Re-ranking introduces extra neural model inference time (typically 50-200ms), which must be budgeted in low-latency applications.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Re-ranking operates in memory during query time and does not corrupt vector indexes.
• **(C)**: Incorrect. Delta Lake transaction history is unaffected by query-time re-ranking.
• **(D)**: Incorrect. Modern re-rankers (e.g. BGE-Reranker, Cohere Rerank) excel in English and multilingual corpora.

---

### Pregunta 100: How does a re-ranker help reduce hallucinations in the downstream LLM generator?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.8: Explain the role of re-ranking in the information retrieval process  

#### Opciones:
- **A**: By ensuring that the most factually relevant and contextually complete passages are placed at top rank positions, directly feeding the LLM with high-signal context.
- **B**: By fine-tuning the LLM weights on every user query.
- **C**: By deleting ambiguous words from the user prompt.
- **D**: By disabling LLM temperature completely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By ensuring that the most factually relevant and contextually complete passages are placed at top rank positions, directly feeding the LLM with high-signal context.**

Placing the highest-relevance evidence at the top of the prompt context minimizes distractions and grounds the LLM effectively.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Re-rankers do not fine-tune LLM weights on the fly.
• **(C)**: Incorrect. Re-rankers score passages; they do not alter the user prompt text.
• **(D)**: Incorrect. Re-rankers operate independently of LLM temperature settings.

---

### Pregunta 101: When configuring a two-stage retrieval pipeline, what is a typical rule of thumb for candidate retrieval count (k1) and final re-ranked count (k2)?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.8: Explain the role of re-ranking in the information retrieval process  

#### Opciones:
- **A**: Retrieve a broader candidate pool (e.g. k1 = 20 to 50 chunks) from Vector Search, and re-rank down to top (k2 = 3 to 5 chunks) for LLM generation.
- **B**: Retrieve k1 = 1 chunk and re-rank to k2 = 1,000 chunks.
- **C**: Retrieve k1 = 0 chunks and generate everything from memory.
- **D**: Retrieve k1 = 1,000,000 chunks and pass all of them into the LLM prompt.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Retrieve a broader candidate pool (e.g. k1 = 20 to 50 chunks) from Vector Search, and re-rank down to top (k2 = 3 to 5 chunks) for LLM generation.**

Retrieving 20-50 candidates casts a wide net for high recall, while re-ranking to top 3-5 optimizes precision and prompt token efficiency.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. You cannot re-rank 1 chunk into 1,000 chunks.
• **(C)**: Incorrect. Retrieving 0 chunks bypasses RAG entirely.
• **(D)**: Incorrect. Passing 1,000,000 chunks blows past context limits and causes extreme latency and cost.

---

