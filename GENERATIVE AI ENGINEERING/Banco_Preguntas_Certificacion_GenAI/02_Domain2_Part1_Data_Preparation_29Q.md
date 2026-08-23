# Databricks Certified Generative AI Engineer Associate
## Domain 2: Data Preparation — Parte 1 (29 Preguntas)

> **Total de Preguntas en esta sección**: 29
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026 (Unificado: CertSafari Base 373 Qs + Var4 349 Qs)

---

### Pregunta 44: An engineer is chunking structured Markdown technical documentation with nested headers (# H1, ## H2, ### H3). Which chunking strategy preserves semantic context best?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: MarkdownHeaderTextSplitter configured along header boundaries with chunk overlap.
- **B**: Fixed-size 100-character splitter ignoring headings.
- **C**: Splitting strictly on newline characters without grouping.
- **D**: Treating the entire 500-page document as a single chunk.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) MarkdownHeaderTextSplitter configured along header boundaries with chunk overlap.**

MarkdownHeaderTextSplitter preserves the hierarchical document structure by splitting along logical header sections and attaching heading metadata to each chunk.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Fixed-character splitting breaks sentences and code blocks arbitrarily across headers.
• **(C)**: Incorrect. Splitting on every newline creates fragmented fragments without context.
• **(D)**: Incorrect. Exceeding embedding model context lengths leads to truncation and loss of document content.

---

### Pregunta 45: Why is chunk overlap (e.g. 50-100 tokens) essential when chunking long narrative text for RAG?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: It prevents crucial context and entities from being severed at chunk boundaries, ensuring continuity across adjacent chunks.
- **B**: It reduces the storage size of Delta tables by 50%.
- **C**: It speeds up vector similarity search by eliminating cosine distance calculations.
- **D**: It encrypts the text chunks before writing to Unity Catalog.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It prevents crucial context and entities from being severed at chunk boundaries, ensuring continuity across adjacent chunks.**

Chunk overlap ensures that facts spanning across chunk boundaries appear intact in at least one retrieved chunk.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Overlap slightly increases storage requirements, rather than reducing it.
• **(C)**: Incorrect. Overlap does not alter vector search distance calculation algorithms.
• **(D)**: Incorrect. Chunk overlap is a text preprocessing technique, not a cryptographic function.

---

### Pregunta 46: When embedding chunks using a model with a maximum context length of 512 tokens (e.g. `bge-small-en-v1.5`), how should the chunk size be configured?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: Target approximately 250 to 400 tokens with a 50-token overlap to comfortably stay within the 512-token limit.
- **B**: Set chunk size to 2048 tokens and allow the model to silently truncate the rest.
- **C**: Set chunk size to 1 character per chunk.
- **D**: Disable chunking and pass entire books directly.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Target approximately 250 to 400 tokens with a 50-token overlap to comfortably stay within the 512-token limit.**

Setting chunk sizes below the model's maximum context length ensures no text is silently truncated during embedding generation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Silent truncation permanently discards up to 75% of the source document's semantic content.
• **(C)**: Incorrect. 1-character chunks hold zero semantic meaning.
• **(D)**: Incorrect. Passing entire books exceeds context limits and causes runtime errors or severe truncation.

---

### Pregunta 47: For source code repositories containing Python files, which specialized text splitter in LangChain should be used?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: RecursiveCharacterTextSplitter.from_language(Language.PYTHON)
- **B**: NLTKSentenceTokenizer()
- **C**: SpacySpanishTokenizer()
- **D**: FixedByteLengthSplitter()

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) RecursiveCharacterTextSplitter.from_language(Language.PYTHON)**

LangChain's code-aware splitter understands Python AST constructs (class defs, functions) and avoids breaking functions mid-block.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Sentence tokenizers are designed for natural language prose, not code syntax.
• **(C)**: Incorrect. Spacy Spanish models do not understand Python programming syntax.
• **(D)**: Incorrect. Byte length splitting breaks multi-byte characters and code structures.

---

### Pregunta 48: In semantic chunking (embedding-based chunking), how are chunk boundaries determined?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: By measuring the cosine distance between consecutive sentence embeddings and creating a split where semantic distance exceeds a threshold.
- **B**: By counting the number of vowels in every paragraph.
- **C**: By randomly inserting a split every 30 seconds.
- **D**: By searching for the word 'END' in all caps.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By measuring the cosine distance between consecutive sentence embeddings and creating a split where semantic distance exceeds a threshold.**

Semantic chunking identifies topical shift points where embedding similarity between adjacent sentences drops significantly.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vowel counting has no correlation to semantic meaning.
• **(C)**: Incorrect. Time-based splitting is non-deterministic and ignores document content.
• **(D)**: Incorrect. Natural documents rarely contain explicit 'END' markers.

---

### Pregunta 49: What is a major risk of setting the chunk size too small (e.g. 20 tokens)?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: Chunks lack sufficient contextual information for the generator LLM to understand and synthesize accurate answers.
- **B**: Vector search indexes consume zero memory.
- **C**: Embedding models run out of GPU RAM instantly.
- **D**: Delta tables automatically delete all metadata.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Chunks lack sufficient contextual information for the generator LLM to understand and synthesize accurate answers.**

Extremely small chunks strip surrounding context, making retrieved snippets ambiguous and incomplete.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Index memory increases due to higher chunk counts.
• **(C)**: Incorrect. Small chunks take very little GPU memory to embed.
• **(D)**: Incorrect. Delta Lake tables do not delete metadata based on string length.

---

### Pregunta 50: What is a major downside of setting chunk size too large (e.g. 4000 tokens) in a standard RAG system?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: Retrieved chunks introduce excessive irrelevant noise, dilute vector specificity, and consume significant prompt token bandwidth.
- **B**: Vector databases refuse to store vectors longer than 10 bytes.
- **C**: It prevents Delta Lake from supporting ACID transactions.
- **D**: It disables Unity Catalog data lineage.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Retrieved chunks introduce excessive irrelevant noise, dilute vector specificity, and consume significant prompt token bandwidth.**

Large chunks contain multiple disparate topics, making vector matching diffuse and bloating prompt context with extraneous text.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vector stores index fixed-dimension embeddings, not raw text byte constraints.
• **(C)**: Incorrect. ACID transactions in Delta Lake are completely independent of chunk size.
• **(D)**: Incorrect. Unity Catalog lineage is unaffected by chunk token length.

---

### Pregunta 51: When processing PDF forms with tables, why does naive character chunking often fail?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.1: Apply a chunking strategy for a given document structure and model constraints  

#### Opciones:
- **A**: It splits table rows and columns across chunks, destroying tabular relationships and key-value alignments.
- **B**: PDF text is always automatically encrypted by Spark.
- **C**: Character chunking converts all integers into emojis.
- **D**: Table cells cannot be stored in Delta Lake.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It splits table rows and columns across chunks, destroying tabular relationships and key-value alignments.**

Naive character splitting breaks linear row-column structures, separating headers from numerical cell values.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Spark does not automatically encrypt PDF text strings.
• **(C)**: Incorrect. Text splitters do not convert numbers into emojis.
• **(D)**: Incorrect. Delta Lake easily stores tabular text representations like markdown or HTML tables.

---

### Pregunta 52: When parsing raw HTML scraped from public web pages, which content should be filtered out before chunking and embedding for RAG?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.2: Filter extraneous content in source documents that degrades quality of a RAG application  

#### Opciones:
- **A**: Navigation bars, header/footer boilerplate, cookie consent banners, and advertisement scripts.
- **B**: The core article body and heading tags.
- **C**: All punctuation marks and numerical figures.
- **D**: All vowels in the main text.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Navigation bars, header/footer boilerplate, cookie consent banners, and advertisement scripts.**

Removing boilerplate navigation, headers, footers, and tracking scripts cleans the corpus of repetitive semantic noise.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The core article text and headings contain the primary knowledge needed for RAG.
• **(C)**: Incorrect. Stripping punctuation and numbers destroys dates, prices, and sentence clarity.
• **(D)**: Incorrect. Removing vowels renders the text unreadable.

---

### Pregunta 53: How do repeated legal disclaimers and copyright notices at the bottom of every document page affect Vector Search retrieval if left unfiltered?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.2: Filter extraneous content in source documents that degrades quality of a RAG application  

#### Opciones:
- **A**: They create dense clusters of identical vectors that match spurious queries, polluting top-k retrieved contexts.
- **B**: They cause Unity Catalog to revoke table write permissions.
- **C**: They force the embedding model to crash with out-of-memory errors.
- **D**: They permanently corrupt the underlying Delta transaction log.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They create dense clusters of identical vectors that match spurious queries, polluting top-k retrieved contexts.**

Repetitive boilerplate text dilutes embedding representations and causes spurious matches during vector retrieval.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Table permissions are managed via IAM/RBAC, not document content.
• **(C)**: Incorrect. Boilerplate text does not crash embedding models.
• **(D)**: Incorrect. Delta transaction logs are not corrupted by duplicate text strings.

---

### Pregunta 54: What technique is recommended to clean OCR text containing corrupted scanning artifacts (e.g. `Th1s |s 4 t3xt`) before embedding?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.2: Filter extraneous content in source documents that degrades quality of a RAG application  

#### Opciones:
- **A**: Rule-based regex cleaning or using a lightweight LLM text-cleaning pass (e.g. `ai_query` with cleaning prompt).
- **B**: Deleting all words that contain consonants.
- **C**: Duplicating every corrupted word 10 times.
- **D**: Converting the entire text to uppercase Base64.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Rule-based regex cleaning or using a lightweight LLM text-cleaning pass (e.g. `ai_query` with cleaning prompt).**

Regex normalization and LLM-based text cleaning restore corrupted OCR characters into clean, readable natural language.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting consonants destroys all vocabulary.
• **(C)**: Incorrect. Word duplication worsens token noise.
• **(D)**: Incorrect. Base64 encoding renders text non-embeddable by semantic language models.

---

### Pregunta 55: A source repository of PDFs contains hundreds of duplicate revised versions of the same policy manual. What deduplication strategy should be applied?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.2: Filter extraneous content in source documents that degrades quality of a RAG application  

#### Opciones:
- **A**: Document-level hash deduplication (e.g. SHA-256) or MinHash / LSH semantic deduplication to keep only the latest version.
- **B**: Ingest all duplicates into the vector index and hope the retriever ignores them.
- **C**: Rename all files to `file.pdf` without inspecting contents.
- **D**: Convert all duplicate PDFs into audio files.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Document-level hash deduplication (e.g. SHA-256) or MinHash / LSH semantic deduplication to keep only the latest version.**

Deduplication via hashing or MinHash/LSH prevents redundant vector storage and duplicate context in LLM prompts.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Ingesting duplicates wastes vector storage and pollutes top-k search with identical answers.
• **(C)**: Incorrect. Renaming files does not eliminate duplicate content.
• **(D)**: Incorrect. Audio conversion adds complexity without solving duplication.

---

### Pregunta 56: When processing source documents containing sensitive PII (Social Security Numbers, credit card numbers) that is irrelevant to the RAG knowledge base, what should be done?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.2: Filter extraneous content in source documents that degrades quality of a RAG application  

#### Opciones:
- **A**: Mask or redact the PII using regex/Named Entity Recognition before writing to Delta tables and vector indexing.
- **B**: Leave PII unmasked and instruct the LLM in the system prompt to ignore it.
- **C**: Publish the PII in a public Delta table.
- **D**: Store the PII in clear text inside the vector metadata.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Mask or redact the PII using regex/Named Entity Recognition before writing to Delta tables and vector indexing.**

Redacting sensitive PII during data preparation guarantees privacy compliance and prevents accidental leakage during generation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. System prompt instructions can be bypassed via prompt injection attacks.
• **(C)**: Incorrect. Publishing PII publicly violates data protection laws (GDPR, HIPAA).
• **(D)**: Incorrect. Storing PII in vector metadata exposes raw personal data in search API responses.

---

### Pregunta 57: Why should non-informative content such as page numbers, header breadcrumbs, and 'Page X of Y' strings be stripped during document extraction?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.2: Filter extraneous content in source documents that degrades quality of a RAG application  

#### Opciones:
- **A**: They introduce fragmented noise that distracts semantic embedding vectors from capturing the true domain subject matter.
- **B**: They cause Spark jobs to fail with segmentation faults.
- **C**: They reduce vector dimension from 1024 to 512.
- **D**: They disable Delta Lake partition pruning.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They introduce fragmented noise that distracts semantic embedding vectors from capturing the true domain subject matter.**

Breadcrumbs and page counters represent repetitive syntactic noise that dilutes vector similarity matching.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Spark handles string parsing without segmentation faults.
• **(C)**: Incorrect. Vector dimensionality is fixed by the embedding model architecture.
• **(D)**: Incorrect. Partition pruning operates on table partition columns, not chunk text strings.

---

### Pregunta 58: In Databricks Lakehouse, which tool can automatically apply data quality expectations and drop corrupted rows during ingestion pipelines?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.2: Filter extraneous content in source documents that degrades quality of a RAG application  

#### Opciones:
- **A**: Delta Live Tables (DLT) Expectations (e.g. `EXPECT ... ON VIOLATION DROP ROW`).
- **B**: Unity Catalog Lineage Graph.
- **C**: Mosaic AI Model Serving Scale-to-Zero.
- **D**: MLflow Model Registry Webhooks.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Delta Live Tables (DLT) Expectations (e.g. `EXPECT ... ON VIOLATION DROP ROW`).**

Delta Live Tables Expectations define declarative data quality constraints that quarantine or drop bad data automatically.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Lineage graphs visualize data dependencies, but do not drop bad rows.
• **(C)**: Incorrect. Scale-to-zero manages compute endpoints, not data cleaning pipelines.
• **(D)**: Incorrect. Registry webhooks notify external systems on model state transitions.

---

### Pregunta 59: Which Python package is best suited for extracting clean text, layouts, and bounding boxes from native digital PDF documents in Python?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.3: Choose the appropriate Python package to extract document content from provided source data and format  

#### Opciones:
- **A**: pypdf / pdfplumber / PyMuPDF (fitz)
- **B**: pygame
- **C**: seaborn
- **D**: matplotlib

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) pypdf / pdfplumber / PyMuPDF (fitz)**

PyMuPDF, pdfplumber, and pypdf are industry-standard libraries for extracting text and layout geometry from PDF files.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. pygame is a 2D game development library.
• **(C)**: Incorrect. seaborn is a data visualization statistical plotting library.
• **(D)**: Incorrect. matplotlib generates static 2D charts and figures.

---

### Pregunta 60: For extracting structured tables and text from Microsoft Word `.docx` documents, which Python library should be imported?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.3: Choose the appropriate Python package to extract document content from provided source data and format  

#### Opciones:
- **A**: python-docx
- **B**: scipy.optimize
- **C**: scikit-image
- **D**: tensorflow-probability

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) python-docx**

python-docx provides native parsing of Word paragraphs, tables, runs, and document metadata.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. scipy.optimize solves mathematical optimization problems.
• **(C)**: Incorrect. scikit-image is an image processing library.
• **(D)**: Incorrect. tensorflow-probability handles probabilistic modeling.

---

### Pregunta 61: When processing scanned image-based PDFs requiring Optical Character Recognition (OCR), which library or service is standard in Python / Databricks?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.3: Choose the appropriate Python package to extract document content from provided source data and format  

#### Opciones:
- **A**: pytesseract (Tesseract OCR) or cloud vision APIs.
- **B**: numpy.linalg
- **C**: flask-cors
- **D**: statsmodels.tsa

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) pytesseract (Tesseract OCR) or cloud vision APIs.**

pytesseract bridges Python to Tesseract OCR engine to extract text characters from image pixels.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. numpy.linalg executes linear algebra matrix operations.
• **(C)**: Incorrect. flask-cors handles CORS headers for web servers.
• **(D)**: Incorrect. statsmodels.tsa performs time-series econometric modeling.

---

### Pregunta 62: Which Python package parses raw HTML documents and enables DOM traversal using CSS selectors or tag navigation?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.3: Choose the appropriate Python package to extract document content from provided source data and format  

#### Opciones:
- **A**: BeautifulSoup4 (bs4)
- **B**: h5py
- **C**: torchvision
- **D**: xgboost

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) BeautifulSoup4 (bs4)**

BeautifulSoup4 parses HTML/XML documents and allows targeted extraction of body text, links, and specific div containers.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. h5py interacts with HDF5 scientific binary data formats.
• **(C)**: Incorrect. torchvision provides computer vision datasets and model architectures in PyTorch.
• **(D)**: Incorrect. xgboost trains gradient boosted decision trees.

---

### Pregunta 63: Which Python library handles complex multi-format document conversions (PDF, PPTX, DOCX, XLSX, HTML, Images) to Markdown in Microsoft's open-source ecosystem?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.3: Choose the appropriate Python package to extract document content from provided source data and format  

#### Opciones:
- **A**: markitdown
- **B**: keras-nlp
- **C**: simpy
- **D**: numba

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) markitdown**

MarkItDown converts multi-format files directly into clean, structured Markdown suitable for LLM ingestion.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. keras-nlp is a deep learning NLP model building library.
• **(C)**: Incorrect. simpy is a discrete-event simulation framework.
• **(D)**: Incorrect. numba is a JIT compiler for numerical Python.

---

### Pregunta 64: For extracting tabular sheets and cell data from Excel `.xlsx` files into structured Python objects or DataFrames, which package is primary?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.3: Choose the appropriate Python package to extract document content from provided source data and format  

#### Opciones:
- **A**: openpyxl / pandas
- **B**: spacy-transformers
- **C**: pyaudio
- **D**: lightgbm

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) openpyxl / pandas**

openpyxl and pandas are the standard libraries for reading, writing, and parsing Excel spreadsheet workbooks.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. spacy-transformers manages transformer pipelines for linguistic analysis.
• **(C)**: Incorrect. pyaudio handles microphone audio capture.
• **(D)**: Incorrect. lightgbm trains boosted tree models.

---

### Pregunta 65: Which comprehensive document parsing framework natively integrates with LangChain for handling unstructured multi-modal documents with OCR, table parsing, and layout detection?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.3: Choose the appropriate Python package to extract document content from provided source data and format  

#### Opciones:
- **A**: Unstructured (`unstructured[all-docs]`)
- **B**: cv2.videoWriter
- **C**: urllib3
- **D**: jinja2

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Unstructured (`unstructured[all-docs]`)**

The `unstructured` Python package is designed specifically for partitioning and chunking diverse document types into standardized elements.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. cv2.videoWriter writes video frames to disk.
• **(C)**: Incorrect. urllib3 is a low-level HTTP client library.
• **(D)**: Incorrect. jinja2 is a text template rendering engine.

---

### Pregunta 66: What is the correct logical sequence of operations to process raw documents from cloud object storage and write indexed chunks into a Unity Catalog Delta table?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.4: Define operations and sequence to write given chunked text into Delta Lake tables in Unity Catalog  

#### Opciones:
- **A**: 1. Ingest raw files from UC Volume -> 2. Extract and clean text -> 3. Split text into chunks -> 4. Write chunk DataFrame to Delta Lake with CDC enabled -> 5. Create Vector Search Index.
- **B**: 1. Create Vector Search Index -> 2. Delete source files -> 3. Ingest empty table -> 4. Chunk text.
- **C**: 1. Write binary files directly to Delta table -> 2. Vector search raw bytes -> 3. Parse text at query time.
- **D**: 1. Train LLM -> 2. Split text -> 3. Delete Unity Catalog catalog.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) 1. Ingest raw files from UC Volume -> 2. Extract and clean text -> 3. Split text into chunks -> 4. Write chunk DataFrame to Delta Lake with CDC enabled -> 5. Create Vector Search Index.**

The standard Lakehouse ELT sequence ingests raw files from UC Volumes, cleans and chunks the text, writes to Delta with CDC, and then syncs the Vector Search index.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Creating an index before having a source table fails, and deleting source files loses raw data.
• **(C)**: Incorrect. Vector search requires text strings and embeddings, not raw unparsed binary byte streams.
• **(D)**: Incorrect. Training an LLM is not part of standard document chunking and ETL pipelines.

---

### Pregunta 67: Why must Change Data Feed (CDF) be enabled on a Delta table (`delta.enableChangeDataFeed = true`) when used as a source for Mosaic AI Vector Search?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.4: Define operations and sequence to write given chunked text into Delta Lake tables in Unity Catalog  

#### Opciones:
- **A**: It allows the Vector Search index pipeline to track incremental row additions, updates, and deletions efficiently without full table rescans.
- **B**: It encrypts the Delta table using RSA-4096 keys.
- **C**: It forces Spark to write all files as uncompressed CSVs.
- **D**: It disables Unity Catalog access controls.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It allows the Vector Search index pipeline to track incremental row additions, updates, and deletions efficiently without full table rescans.**

Change Data Feed (CDF) records row-level deltas, enabling Vector Search to sync updates incrementally in real-time.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. CDF handles change data capture, not table encryption.
• **(C)**: Incorrect. CDF does not change the underlying Parquet storage format of Delta Lake.
• **(D)**: Incorrect. CDF respects all Unity Catalog security policies.

---

### Pregunta 68: Which SQL command enables Change Data Feed on an existing Delta table in Unity Catalog?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.4: Define operations and sequence to write given chunked text into Delta Lake tables in Unity Catalog  

#### Opciones:
- **A**: ALTER TABLE catalog.schema.table_name SET TBLPROPERTIES (delta.enableChangeDataFeed = true);
- **B**: UPDATE TABLE SET CDF = ON;
- **C**: ENABLE VECTOR SEARCH ON TABLE catalog.schema.table_name;
- **D**: CREATE INDEX cdf_index ON table_name;

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) ALTER TABLE catalog.schema.table_name SET TBLPROPERTIES (delta.enableChangeDataFeed = true);**

Setting table property `delta.enableChangeDataFeed = true` is the standard SQL DDL command to activate CDF.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. UPDATE TABLE SET CDF = ON is invalid SQL syntax.
• **(C)**: Incorrect. ENABLE VECTOR SEARCH is not a valid Delta DDL statement.
• **(D)**: Incorrect. CREATE INDEX is a relational database command, not Delta CDF configuration.

---

### Pregunta 69: What primary key requirement exists for Delta tables intended to sync with Mosaic AI Vector Search?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.4: Define operations and sequence to write given chunked text into Delta Lake tables in Unity Catalog  

#### Opciones:
- **A**: The Delta table must contain a primary key column with unique, non-null string or integer identifiers for every chunk row.
- **B**: The table must not have any primary key or unique columns.
- **C**: The primary key must be an array of floating point numbers.
- **D**: The primary key must change on every query execution.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The Delta table must contain a primary key column with unique, non-null string or integer identifiers for every chunk row.**

Vector Search requires a stable, unique primary key column to track, update, and delete individual vector records.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vector Search sync will fail if no primary key identifier column is defined.
• **(C)**: Incorrect. Primary keys must be scalar identifiers (strings or ints), not float vectors.
• **(D)**: Incorrect. Primary keys must remain immutable and stable for each chunk.

---

### Pregunta 70: When writing chunked records to Delta Lake in PySpark, which write mode is recommended for initial batch population versus subsequent incremental updates?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.4: Define operations and sequence to write given chunked text into Delta Lake tables in Unity Catalog  

#### Opciones:
- **A**: Initial load: `.mode('overwrite')` or `.mode('append')`; Incremental updates: Delta `MERGE INTO` or appending new rows with CDF.
- **B**: Always use `.mode('ignore')` to discard all new records.
- **C**: Drop the catalog completely on every single update.
- **D**: Export the table as a static text file to local disk.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Initial load: `.mode('overwrite')` or `.mode('append')`; Incremental updates: Delta `MERGE INTO` or appending new rows with CDF.**

Initial loads append/overwrite the base dataset, while incremental workloads use Delta MERGE or append new CDC rows.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. .mode('ignore') skips writing new data when the table exists.
• **(C)**: Incorrect. Dropping catalogs destroys historical data and breaks dependent vector indexes.
• **(D)**: Incorrect. Exporting to local disk bypasses Lakehouse governance and vector sync pipelines.

---

### Pregunta 71: What metadata columns should ideally be stored alongside the chunk text in the Unity Catalog Delta table to support citations and hybrid filtering?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.4: Define operations and sequence to write given chunked text into Delta Lake tables in Unity Catalog  

#### Opciones:
- **A**: `doc_id`, `chunk_id`, `source_url_or_filepath`, `page_number`, `created_timestamp`, `section_title`
- **B**: Only raw unformatted binary floats.
- **C**: User personal passwords and bank routing numbers.
- **D**: Empty null values.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `doc_id`, `chunk_id`, `source_url_or_filepath`, `page_number`, `created_timestamp`, `section_title`**

Storing document metadata (source paths, page numbers, titles) alongside chunk text enables verified citations and filtered search.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Storing only floats loses the actual text content and citation references.
• **(C)**: Incorrect. Storing credentials and bank info is a severe security violation.
• **(D)**: Incorrect. Null values provide zero metadata utility.

---

### Pregunta 72: How does Auto Loader (`cloudFiles`) improve the document ingestion pipeline into Unity Catalog Delta tables?

**Dominio**: Domain 2: Data Preparation  
**Subdominio**: Subdomain 2.4: Define operations and sequence to write given chunked text into Delta Lake tables in Unity Catalog  

#### Opciones:
- **A**: It automatically detects new document files arriving in cloud storage/UC Volumes and incrementally streams them into Delta tables with schema inference.
- **B**: It generates synthetic PDF documents using diffusion models.
- **C**: It deletes all cloud storage buckets upon job completion.
- **D**: It trains a neural network on GPU clusters automatically.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It automatically detects new document files arriving in cloud storage/UC Volumes and incrementally streams them into Delta tables with schema inference.**

Databricks Auto Loader (`cloudFiles`) provides scalable, incremental ingestion of raw files as they land in object storage.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Auto Loader is an ingestion engine, not a generative diffusion model.
• **(C)**: Incorrect. Auto Loader does not delete cloud buckets.
• **(D)**: Incorrect. Auto Loader ingests files; it does not train neural networks.

---

