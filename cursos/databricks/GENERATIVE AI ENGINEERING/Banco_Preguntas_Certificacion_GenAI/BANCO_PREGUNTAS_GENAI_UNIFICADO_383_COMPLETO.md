# Databricks Certified Generative AI Engineer Associate
## Banco Maestro Unificado Completo de 383 Preguntas (Dominios 1 al 6)

> **Total de Preguntas en esta sección**: 383
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026 (Unificado: CertSafari Base 373 Qs + Var4 349 Qs)

---

### Pregunta 1: A developer needs an LLM to reliably return a strictly formatted JSON array of entity objects without conversational greetings or markdown fencing that could break downstream API ingestion. Which prompting strategy is most effective?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: Provide a system prompt with explicit JSON schema definition, include one-shot input-output example, and specify delimiters or utilize structured outputs schema enforcement.
- **B**: Instruct the model to answer quickly in free text and rely on an NLP regex tokenizer to extract JSON entities.
- **C**: Append 'Please format as JSON and do not say hello' at the end of the user prompt without providing examples.
- **D**: Increase the model temperature to 1.0 so that the model has more freedom to structure its output.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Provide a system prompt with explicit JSON schema definition, include one-shot input-output example, and specify delimiters or utilize structured outputs schema enforcement.**

Providing an explicit schema, few-shot demonstration, and structured output constraints or explicit delimiters is the industry standard practice on Databricks Foundation Model APIs to guarantee strict formatting.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Relying on post-hoc regex parsing over unconstrained free text is brittle and frequently fails on edge cases.
• **(C)**: Incorrect. Weak negative instructions without clear schema definitions or few-shot examples frequently result in preamble text like 'Here is your JSON:'.
• **(D)**: Incorrect. Increasing temperature to 1.0 increases stochasticity and randomness, making strict formatting adherence significantly worse.

---

### Pregunta 2: When designing a prompt that requires an XML output structure with custom tags `<summary>` and `<key_points>`, what is the most robust prompt design technique?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: Ask the model to produce whatever format it prefers and convert it downstream with a python script.
- **B**: Define the required XML tags explicitly in the system instructions and provide an exemplar showing exact closing and opening tags.
- **C**: Set the top_p parameter to 0.0 to disable XML parsing in the Foundation Model API.
- **D**: Use negative prompts such as 'Do not use JSON or YAML' repeatedly without specifying XML tag names.

**Respuesta Correcta**: **B**

#### Explicación Oficial:
**Respuesta Correcta: (B) Define the required XML tags explicitly in the system instructions and provide an exemplar showing exact closing and opening tags.**

Defining explicit tag specifications in the system prompt alongside a concrete few-shot example provides strong structural priors for the model.

**Análisis de opciones incorrectas:**
• **(A)**: Incorrect. Unconstrained output generation forces expensive and unreliable downstream conversion.
• **(C)**: Incorrect. top_p controls nucleus sampling diversity, not format generation or XML parsing.
• **(D)**: Incorrect. Negative constraints alone do not inform the model of the required custom tag names.

---

### Pregunta 3: A prompt requires extracting financial figures into a CSV table. Which technique best prevents the LLM from adding explanatory commentary before the CSV headers?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: Pre-filling the assistant response (priming) with the CSV header row (e.g. `Year,Revenue,Profit\n`) or instructing strict boundary delimiters.
- **B**: Lowering the frequency penalty to -2.0.
- **C**: Using chain-of-thought prompting that explicitly writes out intermediate reasoning before the CSV table.
- **D**: Configuring the model to run on CPU only.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Pre-filling the assistant response (priming) with the CSV header row (e.g. `Year,Revenue,Profit\n`) or instructing strict boundary delimiters.**

Assistant priming or explicit delimiter instructions force the LLM to continue directly from the header without conversational preambles.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Negative frequency penalty encourages repetitive token generation, not format adherence.
• **(C)**: Incorrect. Explicit chain-of-thought introduces reasoning tokens ahead of the output, breaking strict CSV format parsing unless placed in separate tags.
• **(D)**: Incorrect. Hardware compute target does not influence language model token generation constraints.

---

### Pregunta 4: You are building a prompt template in Databricks for a classification task where output must be strictly one of `['APPROVED', 'DENIED', 'MANUAL_REVIEW']`. How should this constraint be enforced?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: Specify the allowed enum values in the prompt instructions, provide examples for each, and use logit bias or structured output enum constraints if supported.
- **B**: Instruct the model to write a paragraph justifying its decision before printing the keyword.
- **C**: Rely solely on user prompt phrasing without setting system prompt constraints.
- **D**: Set max_tokens to 1000 so the model can brainstorm alternative categories.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Specify the allowed enum values in the prompt instructions, provide examples for each, and use logit bias or structured output enum constraints if supported.**

Enum constraints in prompt design accompanied by clear examples and low temperature ensure deterministic classification into predefined buckets.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Paragraph reasoning before the keyword makes automated string matching fragile.
• **(C)**: Incorrect. System prompts are essential to maintain immutable instruction boundaries.
• **(D)**: Incorrect. High token limit encourages verbose conversational outputs instead of single token classifications.

---

### Pregunta 5: In Databricks Mosaic AI Model Serving, what is the advantage of using JSON mode / Structured Outputs (`response_format={'type': 'json_object'}`) over simple text prompts?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: It mathematically guarantees valid JSON syntax compliance by constraining the token decoding process.
- **B**: It automatically runs vector search embeddings on the prompt.
- **C**: It increases context window size from 8k to 128k tokens.
- **D**: It eliminates the need to provide any prompt instructions or keys.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It mathematically guarantees valid JSON syntax compliance by constraining the token decoding process.**

Grammar-guided decoding / structured output mode constrains token sampling to strictly valid JSON syntax.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Response formatting does not perform vector search indexing.
• **(C)**: Incorrect. Model context window is fixed by model architecture, not by response formatting mode.
• **(D)**: Incorrect. You must still provide instructions and desired keys so the model generates meaningful fields.

---

### Pregunta 6: Which prompt component is best suited for providing system-level operational guardrails and output format contracts?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: The System Message (or Developer Instruction prompt).
- **B**: The User Turn message in a multi-turn conversation.
- **C**: The Temperature hyperparameter.
- **D**: The Embedding vector dimension.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The System Message (or Developer Instruction prompt).**

The System Message establishes baseline persona, constraints, and strict formatting contracts across the entire interaction.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. User messages can be manipulated or omitted in dynamic sessions.
• **(C)**: Incorrect. Temperature controls sampling randomness, not semantic constraints.
• **(D)**: Incorrect. Vector dimensions belong to embeddings, not prompt template structures.

---

### Pregunta 7: A financial services firm wants to automatically categorize incoming support emails into 15 specific issue types and route them to teams. Which model task is most appropriate?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.2: Select model tasks to accomplish a given business requirement  

#### Opciones:
- **A**: Multi-class text classification.
- **B**: Open-ended creative story generation.
- **C**: Semantic image segmentation.
- **D**: Multi-modal video diffusion.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Multi-class text classification.**

Categorizing discrete text inputs into predefined business buckets is the textbook definition of multi-class text classification.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Story generation produces open-ended prose rather than discrete routing labels.
• **(C)**: Incorrect. Image segmentation operates on computer vision pixels, not support email text.
• **(D)**: Incorrect. Video diffusion generates synthetic video, completely irrelevant to email triage.

---

### Pregunta 8: An enterprise wants to generate concise executive bullet points summarizing 50-page legal transcripts. Which model task should be selected?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.2: Select model tasks to accomplish a given business requirement  

#### Opciones:
- **A**: Extractive / Abstractive text summarization with long-context LLM.
- **B**: Binary classification.
- **C**: Token-level NER without generation.
- **D**: Dense vector clustering without decoding.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Extractive / Abstractive text summarization with long-context LLM.**

Summarization tasks condense long-form documents into synthesized summaries while retaining critical factual details.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Binary classification outputs 0 or 1, not executive bullet summaries.
• **(C)**: Incorrect. NER alone extracts entity spans without synthesizing prose or key executive points.
• **(D)**: Incorrect. Vector clustering groups document chunks in vector space but produces no natural language output.

---

### Pregunta 9: A healthcare provider needs to extract patient names, medication dosages, and appointment dates from unstructured doctor notes into a Delta table. Which task is required?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.2: Select model tasks to accomplish a given business requirement  

#### Opciones:
- **A**: Named Entity Recognition (NER) / Information Extraction.
- **B**: Machine translation from French to German.
- **C**: Unsupervised anomaly detection on tabular floats.
- **D**: Next-token perplexity scoring.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Named Entity Recognition (NER) / Information Extraction.**

Information extraction / NER identifies key specific schema attributes from unstructured medical text.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Translation changes language without structuring entity attributes into tabular fields.
• **(C)**: Incorrect. Tabular anomaly detection does not parse unstructured natural language clinical notes.
• **(D)**: Incorrect. Perplexity scoring evaluates language model likelihood, not entity extraction.

---

### Pregunta 10: An e-commerce company wants users to search product manuals using natural language questions and receive accurate answers with citations. Which architecture/task is best?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.2: Select model tasks to accomplish a given business requirement  

#### Opciones:
- **A**: Retrieval-Augmented Generation (RAG).
- **B**: Linear regression modeling.
- **C**: Zero-shot image classification.
- **D**: K-means document clustering.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Retrieval-Augmented Generation (RAG).**

RAG pairs semantic retrieval from enterprise corpora with an LLM generator to provide grounded answers with citations.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Linear regression predicts continuous numerical variables.
• **(C)**: Incorrect. Image classification does not search text manuals or answer user queries.
• **(D)**: Incorrect. K-means clusters documents into groups without answering user questions.

---

### Pregunta 11: A compliance team needs to evaluate customer chat logs to identify toxic language, PII leaks, and hostile behavior. Which task is appropriate?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.2: Select model tasks to accomplish a given business requirement  

#### Opciones:
- **A**: Content Moderation and Safety Classification.
- **B**: Text style transfer to Shakespearean English.
- **C**: Synthetic tabular data generation.
- **D**: Reinforcement Learning from Human Feedback (RLHF) fine-tuning.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Content Moderation and Safety Classification.**

Moderation and safety classification models evaluate incoming text against policy rubrics to flag violations.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Style transfer alters text tone instead of auditing compliance violations.
• **(C)**: Incorrect. Tabular data generation synthesizes mock numbers rather than evaluating safety.
• **(D)**: Incorrect. RLHF is a training methodology for model alignment, not a real-time audit task.

---

### Pregunta 12: A software engineering team needs an AI assistant that writes unit tests based on provided Python function signatures and docstrings. What is the primary model task?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.2: Select model tasks to accomplish a given business requirement  

#### Opciones:
- **A**: Code generation / Code completion.
- **B**: Speech-to-text transcription.
- **C**: Collaborative filtering recommendation.
- **D**: Time-series forecasting.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Code generation / Code completion.**

Code generation models are specialized in producing syntactically correct source code and test assertions from specifications.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Speech-to-text transcribes audio waveforms to text, not code from docstrings.
• **(C)**: Incorrect. Collaborative filtering recommends items based on user interaction matrices.
• **(D)**: Incorrect. Time-series forecasting predicts future sequential numerical data.

---

### Pregunta 13: In LangChain / LCEL, what component is responsible for transforming a raw dictionary of user parameters into a formatted list of ChatMessages ready for an LLM?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.3: Select chain components for a desired model input and output  

#### Opciones:
- **A**: ChatPromptTemplate
- **B**: StrOutputParser
- **C**: VectorStoreRetriever
- **D**: SQLDatabaseToolkit

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) ChatPromptTemplate**

ChatPromptTemplate formats raw input variables into structured System, Human, and AI Message objects.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. StrOutputParser converts model output messages into strings, not inputs into messages.
• **(C)**: Incorrect. VectorStoreRetriever queries an index to return relevant Document objects.
• **(D)**: Incorrect. SQLDatabaseToolkit provides database execution tools to an agent.

---

### Pregunta 14: Which LCEL component is typically piped at the end of a chain (`chain = prompt | model | output_parser`) to extract clean string content from an `AIMessage`?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.3: Select chain components for a desired model input and output  

#### Opciones:
- **A**: StrOutputParser()
- **B**: PromptTemplate()
- **C**: RecursiveCharacterTextSplitter()
- **D**: MLflowTracer()

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) StrOutputParser()**

StrOutputParser extracts the text content field from the LLM's returned AIMessage or generation chunk.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. PromptTemplate formats inputs at the start of the chain.
• **(C)**: Incorrect. TextSplitters are used during data prep for chunking, not output parsing in a chain.
• **(D)**: Incorrect. MLflowTracer is a telemetry logger, not an output transformer in LCEL.

---

### Pregunta 15: When building a chain that takes a user query, retrieves relevant docs, and formats them into the prompt, what is the role of `RunnableParallel` or a dictionary in LCEL?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.3: Select chain components for a desired model input and output  

#### Opciones:
- **A**: It allows retrieving documents via a retriever while passing through the original question simultaneously to the prompt.
- **B**: It shuts down Spark clusters when inference finishes.
- **C**: It encrypts the model weights stored in Unity Catalog.
- **D**: It converts text into audio speech output.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It allows retrieving documents via a retriever while passing through the original question simultaneously to the prompt.**

RunnableParallel runs parallel steps (such as document retrieval and question pass-through) to construct complete prompt inputs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. LCEL runnables do not manage infrastructure cluster lifecycles.
• **(C)**: Incorrect. Encryption of Unity Catalog storage is handled by cloud KMS, not LCEL primitives.
• **(D)**: Incorrect. Audio speech synthesis requires text-to-speech models.

---

### Pregunta 16: If an LLM application must return a Pydantic object with type validation, which LCEL output parser should be attached to the chain?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.3: Select chain components for a desired model input and output  

#### Opciones:
- **A**: PydanticOutputParser
- **B**: SimpleJsonTokenizer
- **C**: BaseRetriever
- **D**: HuggingFacePipeline

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) PydanticOutputParser**

PydanticOutputParser parses model string outputs against a Pydantic data model and enforces schema validation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. SimpleJsonTokenizer is not a standard LangChain schema-validation output parser.
• **(C)**: Incorrect. BaseRetriever is an abstract class for searching documents, not validating outputs.
• **(D)**: Incorrect. HuggingFacePipeline is an LLM wrapper, not an output parser.

---

### Pregunta 17: What is the purpose of a `RunnablePassthrough` component in an LCEL RAG chain?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.3: Select chain components for a desired model input and output  

#### Opciones:
- **A**: To forward the user query unchanged to subsequent chain steps without modification.
- **B**: To bypass model serving authentication tokens.
- **C**: To skip vector search when latency is high.
- **D**: To execute SQL DDL commands on Delta tables.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To forward the user query unchanged to subsequent chain steps without modification.**

RunnablePassthrough passes input keys through unchanged so they can be consumed downstream alongside retrieved context.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. It does not bypass security or authentication tokens.
• **(C)**: Incorrect. It does not conditionally skip retrievers based on latency.
• **(D)**: Incorrect. It has no capability to execute SQL DDL statements.

---

### Pregunta 18: When designing a conversational chain that maintains chat history, which component coordinates memory and history injection into the prompt template?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.3: Select chain components for a desired model input and output  

#### Opciones:
- **A**: RunnableWithMessageHistory or MessagesPlaceholder
- **B**: VectorIndexSyncManager
- **C**: DeltaLiveTablesPipeline
- **D**: ModelRegistryWebhook

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) RunnableWithMessageHistory or MessagesPlaceholder**

MessagesPlaceholder paired with RunnableWithMessageHistory injects previous session turns dynamically into the prompt.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. VectorIndexSyncManager updates search indexes, not conversational session memory.
• **(C)**: Incorrect. Delta Live Tables processes data transformation pipelines.
• **(D)**: Incorrect. Webhooks trigger CI/CD events on model registration.

---

### Pregunta 19: A business goal states: 'Allow internal agents to query HR policy PDFs and receive verified answers with page numbers'. How should the AI pipeline input and output be specified?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.4: Translate business use case goals into description of inputs/outputs  

#### Opciones:
- **A**: Input: User text query string; Output: Synthesized answer string + array of citation objects (source document name, page number, text chunk).
- **B**: Input: Raw PDF binary; Output: Single boolean value (True/False).
- **C**: Input: Employee ID integer; Output: Full database dump of payroll.
- **D**: Input: Vector embeddings matrix; Output: Unstructured audio waveform.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Input: User text query string; Output: Synthesized answer string + array of citation objects (source document name, page number, text chunk).**

Translating the business requirement results in a natural language query input and a structured answer with verified citation metadata.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Answering policy queries requires text questions, not passing binary PDFs with boolean outputs.
• **(C)**: Incorrect. Dumping payroll from employee IDs violates privacy and fails to answer HR policy questions.
• **(D)**: Incorrect. Vector matrix inputs and audio outputs do not match the text policy query interface.

---

### Pregunta 20: A call center requires: 'Real-time agent assistance suggesting next-best-action during customer calls'. What represents the correct pipeline interface?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.4: Translate business use case goals into description of inputs/outputs  

#### Opciones:
- **A**: Input: Live conversation transcript snippet + Customer profile ID; Output: Ranked list of recommended action cards with confidence rationale.
- **B**: Input: Annual financial report; Output: Quarterly forecast graph.
- **C**: Input: Static SQL table name; Output: Schema DDL script.
- **D**: Input: Audio MP3 file; Output: Binary byte stream.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Input: Live conversation transcript snippet + Customer profile ID; Output: Ranked list of recommended action cards with confidence rationale.**

The input captures the real-time context (transcript + user profile) and the output provides actionable, grounded recommendations.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Annual reports and forecast graphs do not serve real-time call center assistance.
• **(C)**: Incorrect. DDL generation is for database engineering, not call center agent guidance.
• **(D)**: Incorrect. Returning binary streams provides no actionable text recommendations.

---

### Pregunta 21: A marketing team wants: 'Automated SEO article generation from product catalog entries'. What are the expected pipeline inputs and outputs?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.4: Translate business use case goals into description of inputs/outputs  

#### Opciones:
- **A**: Input: Structured product metadata (title, specs, target keywords); Output: Markdown formatted blog article with SEO headings and meta description.
- **B**: Input: Python bytecode; Output: Git commit hash.
- **C**: Input: Unlabeled CSV dataset; Output: Confusion matrix plot.
- **D**: Input: User password string; Output: JSON Web Token (JWT).

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Input: Structured product metadata (title, specs, target keywords); Output: Markdown formatted blog article with SEO headings and meta description.**

Product metadata and target keywords represent the business inputs, producing a structured markdown SEO article as output.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Bytecode and commit hashes belong to software compilation.
• **(C)**: Incorrect. Confusion matrices evaluate ML classification models, not generate marketing articles.
• **(D)**: Incorrect. JWT generation is an authentication task.

---

### Pregunta 22: An insurance claims automation goal is: 'Extract claim amount, loss date, policy number from scanned incident reports'. What is the pipeline signature?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.4: Translate business use case goals into description of inputs/outputs  

#### Opciones:
- **A**: Input: Document text (or OCR text stream); Output: Strongly typed JSON object `{policy_number: str, loss_date: date, claim_amount: float}`.
- **B**: Input: Float claim amount; Output: Unstructured email draft.
- **C**: Input: GPS coordinates; Output: Weather prediction map.
- **D**: Input: Audio ringtone; Output: MP4 video.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Input: Document text (or OCR text stream); Output: Strongly typed JSON object `{policy_number: str, loss_date: date, claim_amount: float}`.**

Structured information extraction maps OCR text to strongly typed schema properties for downstream processing.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Inverting input and output fails to extract data from incident reports.
• **(C)**: Incorrect. Weather mapping from GPS does not handle insurance claims.
• **(D)**: Incorrect. Video conversion is unrelated to text claim extraction.

---

### Pregunta 23: A logistics company requires: 'An assistant that answers questions about warehouse inventory levels and triggers stock reorders if inventory < threshold'. What are the inputs/outputs?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.4: Translate business use case goals into description of inputs/outputs  

#### Opciones:
- **A**: Input: Natural language user message + warehouse ID; Output: Natural language explanation + structured tool call execution payload (order ID, item SKU, qty).
- **B**: Input: Raw sensor voltage; Output: Transformed Fourier transform.
- **C**: Input: Kubernetes YAML; Output: Dockerfile container.
- **D**: Input: Random seed; Output: Pseudo-random float.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Input: Natural language user message + warehouse ID; Output: Natural language explanation + structured tool call execution payload (order ID, item SKU, qty).**

The pipeline takes natural language and warehouse context, producing conversational feedback along with tool call payloads for inventory replenishment.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Signal processing does not solve inventory conversational assistant requirements.
• **(C)**: Incorrect. DevOps container definitions are unrelated to inventory management.
• **(D)**: Incorrect. Random seed generation does not process inventory queries.

---

### Pregunta 24: When translating a business requirement into an MLflow Model Signature for a GenAI application, which format is standard on Databricks?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.4: Translate business use case goals into description of inputs/outputs  

#### Opciones:
- **A**: ColumnSpec / TensorSpec or RagSignature (e.g. `messages: list[dict] -> text: str` or `query: str -> result: str, sources: list`).
- **B**: Binary pickle dumps without type annotations.
- **C**: Unformatted raw Python tuples without schema.
- **D**: Plain text log files.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) ColumnSpec / TensorSpec or RagSignature (e.g. `messages: list[dict] -> text: str` or `query: str -> result: str, sources: list`).**

MLflow Model Signatures explicitly define input and output schema types to enable automated validation in Model Serving.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Pickle dumps without schema annotations prevent API validation and documentation in Unity Catalog.
• **(C)**: Incorrect. Unformatted tuples lack field names and type enforcement.
• **(D)**: Incorrect. Log files store execution history, not interface schema signatures.

---

### Pregunta 25: An AI agent must process loan applications: (1) Retrieve credit score, (2) Verify employment, (3) Disburse funds. To prevent unauthorized disbursement, how should tools be structured?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.5: Define and order tools for multi-stage reasoning  

#### Opciones:
- **A**: Disbursement must strictly require verified approval flags from credit and employment tools; the agent prompt and tool definitions must enforce sequential dependency before disbursement is unlocked.
- **B**: Expose all three tools in parallel with identical descriptions so the LLM calls disbursement first to minimize latency.
- **C**: Remove credit score checks entirely and execute disbursement automatically on all requests.
- **D**: Hardcode the disbursement tool to ignore tool inputs and execute every 5 minutes.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Disbursement must strictly require verified approval flags from credit and employment tools; the agent prompt and tool definitions must enforce sequential dependency before disbursement is unlocked.**

Action tools that carry side-effects (like disbursements) must be strictly gated behind verification and knowledge gathering stages.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Parallel tool execution with identical descriptions risks premature execution of financial actions.
• **(C)**: Incorrect. Bypassing verification tools creates catastrophic financial compliance failures.
• **(D)**: Incorrect. Timer execution violates event-driven agent reasoning principles.

---

### Pregunta 26: What is the primary role of tool docstrings/descriptions when defining tools for an OpenAI / Databricks Tool-Calling Agent?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.5: Define and order tools for multi-stage reasoning  

#### Opciones:
- **A**: They provide semantic context that the LLM's reasoning engine reads to decide when, why, and with which parameters to invoke the tool.
- **B**: They are compiled into C++ binaries for GPU execution.
- **C**: They encrypt the network payload between Unity Catalog and Model Serving.
- **D**: They determine the pricing tier of the Databricks workspace.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They provide semantic context that the LLM's reasoning engine reads to decide when, why, and with which parameters to invoke the tool.**

The LLM reasons over tool names, descriptions, and argument schemas in the system prompt to select appropriate tools dynamically.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Tool docstrings are natural language tokens parsed by the model, not compiled C++ binaries.
• **(C)**: Incorrect. Encryption is handled by transport layer security (TLS), not docstrings.
• **(D)**: Incorrect. Workspace pricing tiers are configured in cloud billing, not tool docstrings.

---

### Pregunta 27: When constructing an agent with a retrieval tool (`search_knowledge_base`) and a calculation tool (`python_calculator`), how does the agent execute multi-stage reasoning for 'What was the percentage revenue growth between 2024 and 2025?'

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.5: Define and order tools for multi-stage reasoning  

#### Opciones:
- **A**: Step 1: Call `search_knowledge_base` to retrieve revenue figures for 2024 and 2025; Step 2: Extract numbers and call `python_calculator` with formula `(rev2025 - rev2024)/rev2024 * 100`; Step 3: Format final response.
- **B**: Step 1: Guess revenue numbers; Step 2: Call calculator with guessed numbers; Step 3: Ignore knowledge base.
- **C**: Call both tools simultaneously without inspecting retrieved knowledge.
- **D**: Execute calculator first before knowing what numbers exist in the documents.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Step 1: Call `search_knowledge_base` to retrieve revenue figures for 2024 and 2025; Step 2: Extract numbers and call `python_calculator` with formula `(rev2025 - rev2024)/rev2024 * 100`; Step 3: Format final response.**

Multi-stage reasoning requires sequential execution: gather knowledge facts first, then feed extracted variables into execution tools.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hallucinating numbers defeats the purpose of grounded agent tools.
• **(C)**: Incorrect. Calling calculator without data results in missing or invalid argument errors.
• **(D)**: Incorrect. Calculator requires numerical parameters that only exist inside the retrieved documents.

---

### Pregunta 28: How does Databricks Unity Catalog govern tools used by AI Agents?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.5: Define and order tools for multi-stage reasoning  

#### Opciones:
- **A**: Unity Catalog Functions (UC UDFs) can be exposed as governed tools, inheriting table ACLs, lineage tracking, and audit logging.
- **B**: Unity Catalog automatically converts Python scripts into unverified open-source REST APIs.
- **C**: Tools must be written in raw Assembly language to run in Unity Catalog.
- **D**: Unity Catalog disables all external tool calling across the workspace.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Unity Catalog Functions (UC UDFs) can be exposed as governed tools, inheriting table ACLs, lineage tracking, and audit logging.**

Unity Catalog Functions allow data teams to register, version, and secure tools with enterprise RBAC and audit logging.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. UC does not convert scripts into unverified public APIs; it secures them internally.
• **(C)**: Incorrect. UC UDFs are written in SQL or Python, not Assembly.
• **(D)**: Incorrect. UC enables and governs tool calling rather than disabling it.

---

### Pregunta 29: An agent must execute a multi-step database query. Why is it advantageous to give the agent a schema-inspection tool (`get_table_schema`) before a query-execution tool (`run_sql_query`)?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.5: Define and order tools for multi-stage reasoning  

#### Opciones:
- **A**: The agent inspects valid column names and types first, avoiding SQL syntax and column-not-found errors during execution.
- **B**: It speeds up network bandwidth by compressing SQL strings.
- **C**: It allows the agent to bypass table access permissions.
- **D**: It forces the database to convert Delta tables to Parquet files.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The agent inspects valid column names and types first, avoiding SQL syntax and column-not-found errors during execution.**

Schema discovery tools ground the agent's SQL generator in the actual table metadata, drastically reducing hallucinated column errors.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Schema inspection does not compress network bandwidth.
• **(C)**: Incorrect. Schema inspection does not bypass access control permissions.
• **(D)**: Incorrect. Delta tables already store Parquet data underlyingly.

---

### Pregunta 30: What prevents an agent in a multi-stage reasoning loop from getting stuck in an infinite tool-calling cycle?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.5: Define and order tools for multi-stage reasoning  

#### Opciones:
- **A**: Setting a hard `max_iterations` limit (or recursion limit) and designing clear termination criteria in the agent loop.
- **B**: Increasing the temperature parameter to 2.0.
- **C**: Deleting the LLM prompt instructions.
- **D**: Running the agent on a single-core CPU.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Setting a hard `max_iterations` limit (or recursion limit) and designing clear termination criteria in the agent loop.**

Recursion limits and explicit stopping conditions guarantee that loops terminate safely if the agent fails to resolve intermediate steps.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Increasing temperature increases erratic behavior, worsening infinite loops.
• **(C)**: Incorrect. Removing instructions prevents the agent from understanding its goal.
• **(D)**: Incorrect. CPU core count does not govern algorithmic recursion limits.

---

### Pregunta 31: When should a solution architect choose the **Knowledge Assistant** Agent Brick in Databricks Mosaic AI?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.6: Determine how and when to use Agent Bricks  

#### Opciones:
- **A**: When building conversational Q&A over enterprise documentation, internal wikis, and unstructured PDF corpora with built-in citations.
- **B**: When training a 70B foundation model from scratch on raw web crawls.
- **C**: When optimizing low-level Spark memory partitions.
- **D**: When rendering 3D video graphics in real-time.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) When building conversational Q&A over enterprise documentation, internal wikis, and unstructured PDF corpora with built-in citations.**

Knowledge Assistant is a turnkey Mosaic AI Agent Brick optimized for enterprise document Q&A and verified retrieval.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Pretraining foundation models requires distributed pretraining infrastructure, not a turnkey Q&A assistant brick.
• **(C)**: Incorrect. Spark memory partitions are managed via Spark execution configs.
• **(D)**: Incorrect. 3D video rendering is outside the scope of knowledge retrieval bricks.

---

### Pregunta 32: In what scenario is the **Multiagent Supervisor** pattern / Agent Brick the most appropriate design?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.6: Determine how and when to use Agent Bricks  

#### Opciones:
- **A**: When coordinating multiple specialized domain agents (e.g. SQL Genie agent, Doc Search agent, Ticket Action agent) through a centralized delegating orchestrator.
- **B**: When running a single standalone SQL query on a small Delta table.
- **C**: When extracting zip archives on a local file system.
- **D**: When calculating standard deviation on a single vector.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) When coordinating multiple specialized domain agents (e.g. SQL Genie agent, Doc Search agent, Ticket Action agent) through a centralized delegating orchestrator.**

The Multiagent Supervisor pattern routes incoming user intents to specialized sub-agents and consolidates their findings.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Simple SQL queries require a basic database query tool, not a multi-agent hierarchy.
• **(C)**: Incorrect. Zip extraction is a basic OS utility task.
• **(D)**: Incorrect. Math operations on single vectors are handled by standard Python libraries.

---

### Pregunta 33: When should the **Information Extraction** Agent Brick be used instead of an open-ended conversational chat agent?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.6: Determine how and when to use Agent Bricks  

#### Opciones:
- **A**: When the primary requirement is batch processing thousands of unstructured documents to extract a strict schema of entity attributes into Delta tables.
- **B**: When users want an open-ended conversational chatbot to brainstorm marketing ideas.
- **C**: When users need real-time multi-player video streaming.
- **D**: When training reinforcement learning policies for robotics.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) When the primary requirement is batch processing thousands of unstructured documents to extract a strict schema of entity attributes into Delta tables.**

Information Extraction Agent Bricks are specialized for high-throughput, deterministic schema extraction from document batches into Delta Lake.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Brainstorming requires open-ended creative generation, not structured schema extraction.
• **(C)**: Incorrect. Video streaming is unrelated to document information extraction.
• **(D)**: Incorrect. Robotics RL is outside document extraction workflows.

---

### Pregunta 34: What is a primary benefit of using pre-built Databricks Agent Bricks compared to writing custom LangChain code from scratch?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.6: Determine how and when to use Agent Bricks  

#### Opciones:
- **A**: They come pre-integrated with Unity Catalog governance, MLflow evaluation, Mosaic AI Vector Search, and production monitoring out of the box.
- **B**: They eliminate the need for compute or cloud storage.
- **C**: They allow running LLMs without internet or workspace access.
- **D**: They guarantee 100% discount on cloud hosting fees.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They come pre-integrated with Unity Catalog governance, MLflow evaluation, Mosaic AI Vector Search, and production monitoring out of the box.**

Agent Bricks provide standardized, enterprise-ready architectures tightly coupled with Databricks Lakehouse security, evaluation, and observability.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Cloud compute and storage are still required to execute workloads.
• **(C)**: Incorrect. Workspace access is necessary to manage Lakehouse resources.
• **(D)**: Incorrect. Agent Bricks do not waive infrastructure billing fees.

---

### Pregunta 35: How does an Information Extraction Agent Brick handle complex documents with nested tables and key-value pairs?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.6: Determine how and when to use Agent Bricks  

#### Opciones:
- **A**: By utilizing multimodal / document understanding parsers and schema-guided prompting to map extracted tokens into nested Pydantic / JSON structures.
- **B**: By converting the document into an unreadable binary blob.
- **C**: By deleting all numeric values to save space.
- **D**: By running a sentiment classifier on each individual letter.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By utilizing multimodal / document understanding parsers and schema-guided prompting to map extracted tokens into nested Pydantic / JSON structures.**

Document understanding pipelines combined with structured schema guidance accurately reconstruct nested tabular data into clean Delta schemas.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Creating unreadable binary blobs loses all extracted text.
• **(C)**: Incorrect. Deleting numeric values destroys critical table data.
• **(D)**: Incorrect. Character-level sentiment classification is nonsensical for table extraction.

---

### Pregunta 36: You need an LLM to generate responses compliant with a strict CSV format (with specific header names `Date,Metric,Value`) for direct import into an ETL pipeline. Which prompt strategy ensures maximum schema fidelity?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: Include the exact CSV header in the system instructions, provide 2 few-shot CSV examples, and specify: 'Return ONLY the CSV text block without markdown code blocks, preamble, or commentary.'
- **B**: Instruct the model to write a Python script that outputs CSV.
- **C**: Set temperature to 1.5 to encourage diverse CSV syntax.
- **D**: Ask the model to return XML instead.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Include the exact CSV header in the system instructions, provide 2 few-shot CSV examples, and specify: 'Return ONLY the CSV text block without markdown code blocks, preamble, or commentary.'**

Specifying exact CSV headers, providing few-shot exemplars, and adding negative constraints against markdown formatting or preamble text guarantees clean, directly parseable CSV data.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Writing a Python script requires an extra code-execution step rather than returning the raw CSV data directly.
• **(C)**: Incorrect. High temperature increases hallucinations and syntax errors in structured outputs.
• **(D)**: Incorrect. XML does not fulfill the CSV requirement.

---

### Pregunta 37: A legal firm needs to extract structured metadata (parties, effective date, governing law, jurisdiction) from 50,000 scanned PDF contracts. Which task framing is most appropriate?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.2: Select model tasks to accomplish a given business requirement  

#### Opciones:
- **A**: Structured Information Extraction / Named Entity Recognition (NER) with schema-constrained JSON output.
- **B**: Open-ended creative storytelling.
- **C**: Image colorization diffusion.
- **D**: Next-token perplexity optimization.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Structured Information Extraction / Named Entity Recognition (NER) with schema-constrained JSON output.**

Extracting predefined contractual entities into structured schemas is an Information Extraction task best solved using JSON schema-guided extraction.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Creative storytelling introduces hallucinations inappropriate for legal data extraction.
• **(C)**: Incorrect. Diffusion colorization operates on pixel graphics, not legal text entities.
• **(D)**: Incorrect. Perplexity optimization is a training objective, not an application task.

---

### Pregunta 38: When designing a LangChain LCEL pipeline that translates user input into a target language, validates the output against a list of banned competitor names, and formats as HTML, what is the proper sequence of components?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.3: Select chain components for a desired model input and output  

#### Opciones:
- **A**: `TranslationPromptTemplate | ChatModel | OutputGuardrailValidator | HTMLFormatterRunnable`
- **B**: `HTMLFormatterRunnable | TranslationPromptTemplate | OutputGuardrailValidator | ChatModel`
- **C**: `ChatModel | TranslationPromptTemplate | HTMLFormatterRunnable`
- **D**: `OutputGuardrailValidator | TranslationPromptTemplate`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `TranslationPromptTemplate | ChatModel | OutputGuardrailValidator | HTMLFormatterRunnable`**

The logical LCEL dataflow must proceed: format prompt -> execute model -> apply guardrail validation on completion -> format final HTML presentation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Formatting HTML before model execution invalidates the prompt structure.
• **(C)**: Incorrect. Models must receive formatted prompt inputs first.
• **(D)**: Incorrect. Guardrails cannot validate outputs before the model generates them.

---

### Pregunta 39: A retail customer wants an AI assistant that handles product return requests autonomously. What are the required pipeline inputs and outputs?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.4: Translate business use case goals into pipeline inputs and outputs  

#### Opciones:
- **A**: Inputs: Customer ID, Order Number, Return Reason, Item Photo URL. Outputs: Return Eligibility Boolean, Return Shipping Label PDF link, Confirmation Message, ERP Return Record.
- **B**: Inputs: Random text. Outputs: Poetry about shopping.
- **C**: Inputs: Customer credit card PIN. Outputs: Unfiltered database dump.
- **D**: Inputs: None. Outputs: Infinite loop.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Inputs: Customer ID, Order Number, Return Reason, Item Photo URL. Outputs: Return Eligibility Boolean, Return Shipping Label PDF link, Confirmation Message, ERP Return Record.**

Translating business goals into precise input/output specifications maps operational business entities (order details, reasons) directly to transactional outcomes (labels, ERP updates).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Poetry fails to resolve customer return workflows.
• **(C)**: Incorrect. Collecting PINs and dumping databases violates security and privacy standards.
• **(D)**: Incorrect. A pipeline requires inputs to produce useful outputs.

---

### Pregunta 40: An agent needs to answer a user's question: 'Can I exchange my flight ticket for tomorrow?' What is the correct chronological sequence of tool invocations?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.5: Define and order tools that gather knowledge or take actions  

#### Opciones:
- **A**: 1. `fetch_user_booking(booking_id)` -> 2. `query_airline_exchange_policy(fare_class)` -> 3. `search_available_flights(route, tomorrow_date)` -> 4. Present options to user -> 5. `confirm_ticket_exchange()` after user approval.
- **B**: 1. `confirm_ticket_exchange()` -> 2. `fetch_user_booking(booking_id)` -> 3. `delete_user_account()`
- **C**: 1. `search_available_flights()` -> 2. `cancel_all_flights()`
- **D**: 1. `query_airline_exchange_policy()` -> 2. `reboot_server()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) 1. `fetch_user_booking(booking_id)` -> 2. `query_airline_exchange_policy(fare_class)` -> 3. `search_available_flights(route, tomorrow_date)` -> 4. Present options to user -> 5. `confirm_ticket_exchange()` after user approval.**

The agent must gather context first (booking, policy, availability) and present choices to the user before executing irreversible state-modifying actions (`confirm_exchange`).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Executing exchange before checking booking or user approval causes accidental ticket modifications.
• **(C)**: Incorrect. Cancelling all flights is a catastrophic unauthorized action.
• **(D)**: Incorrect. Rebooting servers disrupts infrastructure.

---

### Pregunta 41: An enterprise has 10,000 internal engineering Confluence wiki pages updated multiple times per day by 500 developers. Which architecture is most appropriate for answering technical questions?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.6: Select the right combination of RAG, Fine-tuning, Pre-training  

#### Opciones:
- **A**: Retrieval-Augmented Generation (RAG) with a continuously synced Vector Search index.
- **B**: Re-training a 70B foundation model from scratch every night.
- **C**: Fine-tuning model weights on a weekly schedule without RAG.
- **D**: Hardcoding all 10,000 wiki pages into a single static system prompt.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Retrieval-Augmented Generation (RAG) with a continuously synced Vector Search index.**

Rapidly changing dynamic documents are best handled by RAG, where search indexes can be updated in seconds without expensive model retraining.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Pre-training a 70B model nightly is cost-prohibitive and computationally impossible.
• **(C)**: Incorrect. Fine-tuning is slow, expensive, and risks hallucination on rapidly changing facts.
• **(D)**: Incorrect. 10,000 wiki pages exceed LLM context window limits and token budgets.

---

### Pregunta 42: How does **Constrained Decoding / Guided Generation** (e.g. using JSON Schema grammar / Outlines) guarantee 100% syntactically valid JSON from an LLM?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.1: Design a prompt that elicits a specifically formatted response  

#### Opciones:
- **A**: It dynamically masks invalid token logits during sampling so the model physically cannot select tokens that violate the context-free grammar of the schema.
- **B**: It retries the query 1,000 times until the output happens to be valid JSON.
- **C**: It converts the LLM into a SQL database.
- **D**: It removes all vowels from the prompt.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It dynamically masks invalid token logits during sampling so the model physically cannot select tokens that violate the context-free grammar of the schema.**

Constrained decoding modifies logit probabilities at generation time, forcing token selection to adhere strictly to formal JSON grammar rules.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Blind retries waste latency and do not guarantee schema compliance.
• **(C)**: Incorrect. Constrained decoding operates within the transformer sampler, not as a SQL database.
• **(D)**: Incorrect. Modifying vowels impairs model comprehension.

---

### Pregunta 43: When should an enterprise combine **both Fine-Tuning and RAG** (Hybrid Adaptation)?

**Dominio**: Domain 1: Design Applications  
**Subdominio**: Subdomain 1.6: Select the right combination of RAG, Fine-tuning, Pre-training  

#### Opciones:
- **A**: When the application requires a specialized domain vocabulary / concise output style (taught via Fine-Tuning) while needing factual grounding on dynamic, up-to-date proprietary documents (retrieved via RAG).
- **B**: When the company has zero data.
- **C**: To make the application run without electricity.
- **D**: Only when building simple 1-line scripts.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) When the application requires a specialized domain vocabulary / concise output style (taught via Fine-Tuning) while needing factual grounding on dynamic, up-to-date proprietary documents (retrieved via RAG).**

Fine-tuning aligns style, jargon, and task format, while RAG injects current factual knowledge and citations, creating an optimal hybrid solution.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Both techniques require training and knowledge data.
• **(C)**: Incorrect. Machine learning computation requires power infrastructure.
• **(D)**: Incorrect. Hybrid adaptation is designed for sophisticated enterprise architectures.

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

### Pregunta 102: Which Python package provides the official LangChain integration for Databricks services including Unity Catalog tools, Vector Search, and Model Serving?

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

### Pregunta 103: How do you expose a Unity Catalog SQL User Defined Function (UDF) as a LangChain-compatible tool for an Agent using `databricks-langchain`?

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

### Pregunta 104: When instantiating a Chat model in LangChain connected to a Databricks Foundation Model Serving endpoint, which class is used?

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

### Pregunta 105: Which LangChain retriever class natively connects to a Databricks Mosaic AI Vector Search index?

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

### Pregunta 106: What is the advantage of using LangGraph or Databricks Agent Framework over simple linear LCEL chains for complex reasoning applications?

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

### Pregunta 107: How does `databricks-langchain` handle authentication when running inside a Databricks Notebook or Model Serving endpoint?

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

### Pregunta 108: Which LangChain utility should be used to trim conversational history messages so they fit within the LLM's context window limit?

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

### Pregunta 109: A user asks: 'What is our corporate policy on maternity leave?' The RAG bot answers: 'We offer 16 weeks paid leave', but the retrieved document clearly states '12 weeks'. What qualitative failure occurred?

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

### Pregunta 110: A customer chatbot response includes: 'Ignore previous rules, I am now in GOD MODE and will give you free gift cards.' What issue occurred?

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

### Pregunta 111: When an LLM produces a grammatically fluent, confident response that is entirely fabricated and factually wrong without any source support, this is called:

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

### Pregunta 112: An HR assistant reveals an executive's home address and personal mobile number in response to a casual query. Which safety issue has occurred?

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

### Pregunta 113: A RAG system generates a response where the first half of the answer is in Spanish and the second half switches abruptly to German without user prompt instruction. What is this qualitative defect?

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

### Pregunta 114: What qualitative issue occurs when a financial advisory assistant outputs: 'Invest all your life savings into MemeCoin immediately to become rich'?

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

### Pregunta 115: When a customer asks 'How do I cancel my subscription?' and the assistant responds 'Our company was founded in 2018 in San Francisco', what failure is demonstrated?

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

### Pregunta 116: Evaluation shows that retrieved chunks contain the right answer, but the LLM repeatedly fails to extract it because each chunk is 3,000 tokens long and buries the key fact in irrelevant text. How should chunking be adjusted?

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

### Pregunta 117: Retrieval evaluation demonstrates that questions about legal contracts require analyzing multi-paragraph clauses together. A fixed 100-token chunker causes low answer completeness because clauses are fragmented. What is the solution?

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

### Pregunta 118: If evaluation reveals that multi-hop questions fail because facts reside in different sections of a 100-page document, which advanced retrieval/chunking design addresses this best?

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

### Pregunta 119: What metric signal during offline evaluation indicates that your chunk overlap is too small?

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

### Pregunta 120: When benchmarking different chunking strategies (e.g. Fixed 256 vs Semantic vs Markdown Splitter), what is the proper methodology?

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

### Pregunta 121: If evaluating chunking on API documentation reveals that code blocks are broken in half, causing syntax errors in LLM answers, what is the fix?

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

### Pregunta 122: When an embedding model has an effective context of 8,192 tokens (e.g. `text-embedding-3-large` or `bge-large`), what chunking optimization is enabled?

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

### Pregunta 123: A user submits the query: 'What was our Q3 churn rate in EMEA?' What is the primary purpose of extracting key entities (`metric: churn_rate`, `quarter: Q3`, `region: EMEA`) before retrieval?

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

### Pregunta 124: How does **Query Rewriting / Query Expansion** improve retrieval for vague or shorthand user queries (e.g. 'error 403 on s3')?

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

### Pregunta 125: In a multi-turn conversation, a user asks: 'Who is the CEO of Databricks?' followed by: 'Where did he go to university?' How should the second prompt be augmented before vector retrieval?

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

### Pregunta 126: When injecting retrieved context chunks into the final LLM prompt, how should the context and user question be delineated?

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

### Pregunta 127: What prompt instruction helps an LLM handle cases where the retrieved context does not contain the answer to the user's question?

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

### Pregunta 128: How does **Step-Back Prompting** augment prompt reasoning for complex physics or engineering problems?

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

### Pregunta 129: When augmenting prompts with customer profile metadata (e.g. `Tier: Platinum`, `Language: Spanish`), where should this context reside in a Chat Prompt?

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

### Pregunta 130: A baseline prompt produces verbose, 500-word conversational responses. The business requirement demands concise answers under 50 words tailored for mobile push notifications. How should the prompt be adjusted?

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

### Pregunta 131: An internal technical assistant answers customer questions using overly complex engineering jargon. What prompt adjustment shifts the tone to a beginner-friendly persona?

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

### Pregunta 132: To prevent an LLM from hallucinating when unsure, which prompt modification is most effective?

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

### Pregunta 133: What technique improves an LLM's performance on complex multi-step math and logic problems?

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

### Pregunta 134: How do **Few-Shot Demonstrations** adjust LLM outputs compared to Zero-Shot instructions?

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

### Pregunta 135: When an LLM must format its answer strictly as a Markdown table with specific column headers `| Feature | Free Tier | Pro Tier |`, what prompt adjustment is required?

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

### Pregunta 136: If an LLM occasionally forgets to follow instructions located in the middle of a very long prompt, how should the prompt layout be restructured?

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

### Pregunta 137: What is the primary function of an **Input Guardrail** in an enterprise GenAI application?

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

### Pregunta 138: What is the primary function of an **Output Guardrail** in a GenAI pipeline?

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

### Pregunta 139: Which framework is widely used in Python for implementing declarative programmable guardrails (e.g. NeMo Guardrails, Llama Guard)?

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

### Pregunta 140: In Databricks Mosaic AI Gateway, what built-in guardrail capability can be configured on Model Serving endpoints?

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

### Pregunta 141: What is a **Canary Word / Honeytoken** defense against prompt extraction and system prompt leakage?

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

### Pregunta 142: How does semantic intent classification serve as a guardrail against 'off-topic' queries in a domain-specific assistant (e.g. banking bot)?

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

### Pregunta 143: When an output guardrail detects that an LLM response contains hallucinated medical claims not present in verified source docs, what action should it take?

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

### Pregunta 144: A high-throughput classification pipeline processes 10 million short text reviews daily on a strict budget. Which model choice is most appropriate?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.7: Select the best LLM based on the attributes of the application to be developed  

#### Opciones:
- **A**: A small, fast, fine-tuned or distilled LLM (e.g. Llama-3.2-3B / DBRX-Instruct / fine-tuned small model) with low latency and low cost per token.
- **B**: A proprietary 400B parameter reasoning model running at $0.10 per query.
- **C**: A multi-modal video diffusion model.
- **D**: A manual team of human typists entering data into Excel.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A small, fast, fine-tuned or distilled LLM (e.g. Llama-3.2-3B / DBRX-Instruct / fine-tuned small model) with low latency and low cost per token.**

High-volume narrow classification tasks are best served by small, cost-effective models that maximize throughput while minimizing inference spend.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. 400B reasoning models are prohibitively expensive for 10M daily basic classification calls.
• **(C)**: Incorrect. Video diffusion models cannot classify text reviews.
• **(D)**: Incorrect. Manual data entry is not an automated AI architecture.

---

### Pregunta 145: For complex multi-step mathematical reasoning, coding, and strategic decision-making tasks, which model tier is recommended?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.7: Select the best LLM based on the attributes of the application to be developed  

#### Opciones:
- **A**: A large frontier reasoning model (e.g. Claude 3.5 Sonnet / GPT-4o / Llama-3.3-70B-Instruct / o1).
- **B**: A 100M parameter BERT model from 2018.
- **C**: A 1-layer perceptron with 10 hidden units.
- **D**: A static regular expression rule.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A large frontier reasoning model (e.g. Claude 3.5 Sonnet / GPT-4o / Llama-3.3-70B-Instruct / o1).**

Complex logic and multi-step coding require deep reasoning capacity found in modern frontier foundation models.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Small 2018 BERT models lack generative reasoning and multi-step coding capabilities.
• **(C)**: Incorrect. 1-layer perceptrons cannot understand natural language reasoning.
• **(D)**: Incorrect. Regular expressions cannot execute cognitive problem solving.

---

### Pregunta 146: When data sovereignty and strict compliance require that data never leaves the customer's cloud VPC, which model hosting option in Databricks should be chosen?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.7: Select the best LLM based on the attributes of the application to be developed  

#### Opciones:
- **A**: Databricks Pay-per-token or Provisioned Throughput Foundation Model Serving hosted directly within the Databricks Lakehouse security perimeter.
- **B**: Sending raw customer data to an unverified third-party public API endpoint in an overseas jurisdiction.
- **C**: Posting data on public forums.
- **D**: Storing text in public pastebins.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Databricks Pay-per-token or Provisioned Throughput Foundation Model Serving hosted directly within the Databricks Lakehouse security perimeter.**

Databricks Foundation Model Serving guarantees that data is processed within the secure Lakehouse perimeter without data egress or retention for training.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Third-party overseas APIs violate data residency and compliance laws.
• **(C)**: Incorrect. Public forums expose private enterprise data.
• **(D)**: Incorrect. Pastebins cause immediate security breaches.

---

### Pregunta 147: What is the primary benefit of **Provisioned Throughput** mode in Databricks Mosaic AI Model Serving?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.7: Select the best LLM based on the attributes of the application to be developed  

#### Opciones:
- **A**: Guaranteed concurrency, dedicated GPU compute capacity, predictable low latency, and zero rate-limiting during peak enterprise traffic.
- **B**: It makes inference 100% free of charge.
- **C**: It eliminates the need for prompt engineering.
- **D**: It converts text into relational databases automatically.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Guaranteed concurrency, dedicated GPU compute capacity, predictable low latency, and zero rate-limiting during peak enterprise traffic.**

Provisioned Throughput reserves dedicated Model Serving GPU capacity to guarantee latency SLAs and high concurrency.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Provisioned throughput is a paid enterprise compute tier.
• **(C)**: Incorrect. High-capacity hardware still requires rigorous prompt engineering.
• **(D)**: Incorrect. Hardware throughput does not transform text into relational databases.

---

### Pregunta 148: How does **Mixture of Experts (MoE)** architecture (such as DBRX) achieve high inference efficiency compared to dense models?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.7: Select the best LLM based on the attributes of the application to be developed  

#### Opciones:
- **A**: It activates only a subset of expert parameters (e.g. 36B active out of 132B total) per token, providing the capability of a large model with the speed and cost of a smaller model.
- **B**: It deletes all weights during inference.
- **C**: It runs on CPU without using memory.
- **D**: It only processes vowels in words.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It activates only a subset of expert parameters (e.g. 36B active out of 132B total) per token, providing the capability of a large model with the speed and cost of a smaller model.**

MoE dynamically routes tokens to specialized sub-networks (experts), activating only a fraction of total parameters per forward pass.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting weights destroys the neural network.
• **(C)**: Incorrect. MoE models require substantial VRAM to store all expert weights.
• **(D)**: Incorrect. MoE routes all tokens dynamically across neural experts.

---

### Pregunta 149: In a multilingual customer service application supporting 50 languages, what model attribute is mandatory during model selection?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.7: Select the best LLM based on the attributes of the application to be developed  

#### Opciones:
- **A**: Demonstrated multilingual training pre-training corpora with high benchmark scores (e.g. Flores-200, MGSM) across the target languages.
- **B**: The model must only know English.
- **C**: The model must be trained only on ASCII characters.
- **D**: The model must have exactly 10 parameters.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Demonstrated multilingual training pre-training corpora with high benchmark scores (e.g. Flores-200, MGSM) across the target languages.**

Multilingual capability requires extensive non-English tokenization and diverse pre-training data to prevent cross-language translation degradation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. English-only models fail to serve international customers.
• **(C)**: Incorrect. ASCII-only tokenizers break multi-byte non-Latin scripts (Cyrillic, Arabic, Chinese).
• **(D)**: Incorrect. 10 parameters is insufficient to learn any language.

---

### Pregunta 150: When choosing an embedding model for a RAG system indexing 2,000-token legal case summaries, why would a model with a 512-token limit (e.g. standard MiniLM) be suboptimal?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.8: Select an embedding model context length based on source documents, expected queries, and optimization strategy  

#### Opciones:
- **A**: It will silently truncate all tokens past position 512, discarding the majority of the case summary's factual content.
- **B**: It will cause the vector database to delete the entire table.
- **C**: It will convert all vectors into text.
- **D**: It will increase cloud bills by 10,000%.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It will silently truncate all tokens past position 512, discarding the majority of the case summary's factual content.**

Embedding models strictly truncate inputs exceeding their max context length, silently losing all semantic content beyond the limit.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vector databases store whatever embeddings are generated; they do not delete tables on truncation.
• **(C)**: Incorrect. Embedding models output numerical float vectors, not text.
• **(D)**: Incorrect. Truncation does not increase cloud billing.

---

### Pregunta 151: What is the relationship between embedding vector dimensionality (e.g. 384 vs 1024 vs 3072) and Vector Search storage/latency?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.8: Select an embedding model context length based on source documents, expected queries, and optimization strategy  

#### Opciones:
- **A**: Higher dimensionality captures finer semantic nuances but requires more memory/storage and increases vector index distance computation latency.
- **B**: Higher dimensionality makes vectors take 0 bytes of storage.
- **C**: Lower dimensionality always guarantees 100% search accuracy.
- **D**: Dimensionality has zero effect on storage or compute.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Higher dimensionality captures finer semantic nuances but requires more memory/storage and increases vector index distance computation latency.**

Higher dimensional embeddings offer greater semantic capacity but linearly increase vector storage and cosine distance computation costs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Larger vectors require proportionally more floating-point storage.
• **(C)**: Incorrect. Low dimensionality compresses representations, risking loss of fine-grained semantic nuance.
• **(D)**: Incorrect. Memory and distance math scale directly with vector dimension length.

---

### Pregunta 152: How does **Matryoshka Representation Learning (MRL)** (used in modern models like `text-embedding-3-large`) provide flexibility in embedding storage?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.8: Select an embedding model context length based on source documents, expected queries, and optimization strategy  

#### Opciones:
- **A**: It allows truncating high-dimensional embeddings (e.g. from 3072 down to 512 or 256 dimensions) while retaining most of the semantic retrieval quality, drastically cutting storage and search latency.
- **B**: It translates text into Russian nesting dolls.
- **C**: It turns embeddings into JPEG images.
- **D**: It disables vector search indexing completely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It allows truncating high-dimensional embeddings (e.g. from 3072 down to 512 or 256 dimensions) while retaining most of the semantic retrieval quality, drastically cutting storage and search latency.**

Matryoshka embeddings are trained so the leading dimensions contain the highest information density, allowing flexible dimensionality truncation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Matryoshka is a neural training technique named metaphorically after nesting dolls.
• **(C)**: Incorrect. MRL produces numerical float vectors, not JPEG images.
• **(D)**: Incorrect. MRL embeddings are specifically designed for vector search.

---

### Pregunta 153: If your search queries consist of short 5-word phrases and source chunks are 300 words, what embedding architecture best handles this asymmetry?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.8: Select an embedding model context length based on source documents, expected queries, and optimization strategy  

#### Opciones:
- **A**: Asymmetric embedding models (such as BGE with `Represent this sentence for searching relevant passages:` query instruction prefix).
- **B**: Symmetric sentence similarity models trained only on identical sentence pairs.
- **C**: Random number generators.
- **D**: 1-gram character hashers.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Asymmetric embedding models (such as BGE with `Represent this sentence for searching relevant passages:` query instruction prefix).**

Asymmetric embedding models use instruction prefixes on queries to bridge the geometric vector gap between short questions and long document passages.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Symmetric sentence models expect query and document to have identical length and phrasing.
• **(C)**: Incorrect. Random numbers possess zero semantic search capability.
• **(D)**: Incorrect. 1-gram character hashing cannot capture semantic meaning.

---

### Pregunta 154: What happens if an embedding model is evaluated using cosine similarity on normalized vectors versus dot product?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.8: Select an embedding model context length based on source documents, expected queries, and optimization strategy  

#### Opciones:
- **A**: For unit-normalized vectors (magnitude = 1.0), Cosine Similarity and Dot Product produce mathematically identical rank orderings, with dot product being faster to compute.
- **B**: Dot product fails completely on normalized vectors.
- **C**: Cosine similarity produces random numbers on normalized vectors.
- **D**: Dot product requires 100x more GPU memory.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) For unit-normalized vectors (magnitude = 1.0), Cosine Similarity and Dot Product produce mathematically identical rank orderings, with dot product being faster to compute.**

When vectors are L2-normalized, cosine similarity simplifies to `dot(A, B) / (1 * 1) = dot(A, B)`, making dot product faster and identical in ranking.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Dot product works exceptionally well on normalized vectors.
• **(C)**: Incorrect. Cosine similarity on normalized vectors is bounded between -1 and +1.
• **(D)**: Incorrect. Dot product computation is simpler and consumes fewer CPU/GPU cycles.

---

### Pregunta 155: Why is it mandatory that the query text and document chunks be embedded using the **exact same embedding model** and checkpoint version?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.8: Select an embedding model context length based on source documents, expected queries, and optimization strategy  

#### Opciones:
- **A**: Different embedding models map text into completely incompatible, unaligned vector spaces where distance metrics are meaningless.
- **B**: Because Unity Catalog will delete the workspace if models differ.
- **C**: Because different models produce identical vectors anyway.
- **D**: To consume double the electricity.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Different embedding models map text into completely incompatible, unaligned vector spaces where distance metrics are meaningless.**

Vector embeddings are model-specific coordinate spaces; comparing vectors from different models produces random, invalid similarity scores.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Unity Catalog does not delete workspaces on model mismatch, but search results will be corrupted.
• **(C)**: Incorrect. Different models produce entirely different vector weights and coordinates.
• **(D)**: Incorrect. The requirement is mathematical, not about electricity consumption.

---

### Pregunta 156: When reviewing a Model Card on Hugging Face or Databricks Marketplace for an enterprise commercial deployment, which section must be verified first to avoid legal liability?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.9: Select a model from a model hub or marketplace for a task based on model metadata/model cards  

#### Opciones:
- **A**: The Model License (e.g. Apache 2.0, MIT, Llama 3 Community License vs CC-BY-NC non-commercial).
- **B**: The profile picture of the author.
- **C**: The total number of likes/stars.
- **D**: The font color used in the README.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The Model License (e.g. Apache 2.0, MIT, Llama 3 Community License vs CC-BY-NC non-commercial).**

Verifying commercial licensing terms ensures that deploying the model in a commercial application does not infringe on intellectual property or restrictive licenses.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Author avatar pictures have no legal or technical bearing.
• **(C)**: Incorrect. Star counts reflect popularity, not legal permission for commercial use.
• **(D)**: Incorrect. Font colors are cosmetic.

---

### Pregunta 157: What information in a Model Card describes the intended use cases, limitations, and out-of-scope applications of a model?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.9: Select a model from a model hub or marketplace for a task based on model metadata/model cards  

#### Opciones:
- **A**: The 'Intended Use & Limitations' / 'Bias, Risks, and Limitations' section.
- **B**: The model weights SHA-256 hash table.
- **C**: The git commit tree history.
- **D**: The GPU driver version.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The 'Intended Use & Limitations' / 'Bias, Risks, and Limitations' section.**

The Limitations and Bias section documents known failure modes, safety boundaries, and prohibited deployment domains.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hashes verify file download integrity, not usage scope.
• **(C)**: Incorrect. Commit history tracks code edits, not behavioral boundaries.
• **(D)**: Incorrect. Driver versions specify runtime compatibility.

---

### Pregunta 158: A Model Card indicates that a model was pre-trained with a cutoff date of December 2023. What does this imply for an application answering questions about 2025 events?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.9: Select a model from a model hub or marketplace for a task based on model metadata/model cards  

#### Opciones:
- **A**: The model's internal parametric memory has zero knowledge of 2025 events; a RAG architecture or web search integration is required to provide current factual grounding.
- **B**: The model will accurately predict 2025 events from memory.
- **C**: The model will refuse to load in Databricks.
- **D**: The model's context window will shrink to 0.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The model's internal parametric memory has zero knowledge of 2025 events; a RAG architecture or web search integration is required to provide current factual grounding.**

Cutoff dates define the temporal horizon of parametric knowledge; facts occurring after cutoff must be injected via external retrieval (RAG).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. LLMs cannot predict future historical events from memory.
• **(C)**: Incorrect. The model loads normally regardless of its training cutoff date.
• **(D)**: Incorrect. Context window size is a structural parameter unaffected by dates.

---

### Pregunta 159: What does the term 'Base Model' (or Foundation Model) versus 'Instruct / Chat Model' in a Model Card signify?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.9: Select a model from a model hub or marketplace for a task based on model metadata/model cards  

#### Opciones:
- **A**: Base models are raw next-token predictors trained on text completion; Instruct/Chat models have undergone instruction fine-tuning and RLHF/DPO for conversational alignment.
- **B**: Base models are always smaller than 10MB.
- **C**: Instruct models can only speak Spanish.
- **D**: Base models cannot be run on GPUs.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Base models are raw next-token predictors trained on text completion; Instruct/Chat models have undergone instruction fine-tuning and RLHF/DPO for conversational alignment.**

Base models perform raw text completion; Instruct/Chat models are aligned to follow instructions and engage in dialogue safely.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Base models are full multi-gigabyte models.
• **(C)**: Incorrect. Instruct models support multilingual capabilities.
• **(D)**: Incorrect. Base models are trained and executed on GPU clusters.

---

### Pregunta 160: When reviewing hardware requirements on a Model Card for an unquantized 70B parameter model in FP16 precision, approximately how much GPU VRAM is required just to load model weights?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.9: Select a model from a model hub or marketplace for a task based on model metadata/model cards  

#### Opciones:
- **A**: ~140 GB VRAM (2 bytes per parameter * 70 billion parameters), typically requiring 2x 80GB A100/H100 GPUs or 4-bit quantization.
- **B**: ~1 GB VRAM on a smartphone.
- **C**: 0 MB VRAM (runs entirely on RAM without memory).
- **D**: ~10,000 TB VRAM.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) ~140 GB VRAM (2 bytes per parameter * 70 billion parameters), typically requiring 2x 80GB A100/H100 GPUs or 4-bit quantization.**

In 16-bit precision (FP16/BF16), each parameter consumes 2 bytes: `70B * 2 bytes = 140 GB VRAM` plus KV-cache overhead.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. 1 GB VRAM cannot fit 70B parameter weights.
• **(C)**: Incorrect. Neural network weights must reside in memory to execute matrix multiplications.
• **(D)**: Incorrect. 10,000 TB is an unrealistically massive overestimate.

---

### Pregunta 161: Why should developers check the 'Evaluation Results / Benchmarks' section of a Model Card on Databricks Marketplace?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.9: Select a model from a model hub or marketplace for a task based on model metadata/model cards  

#### Opciones:
- **A**: To compare standardized performance metrics (e.g. MMLU, GSM8K, HumanEval, MT-Bench) against business task requirements before deployment.
- **B**: To find out the personal home address of the research team.
- **C**: To disable all security checks in Unity Catalog.
- **D**: To check if the model can be used to bypass cloud billing.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To compare standardized performance metrics (e.g. MMLU, GSM8K, HumanEval, MT-Bench) against business task requirements before deployment.**

Benchmark scores in model cards provide objective standardized data on coding, reasoning, and domain knowledge capabilities.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Model cards never publish personal researcher addresses.
• **(C)**: Incorrect. Benchmarks do not modify Unity Catalog security settings.
• **(D)**: Incorrect. Benchmarks evaluate model quality, not billing evasion.

---

### Pregunta 162: During experimentation in MLflow, Model A achieves 95% accuracy on an extractive QA benchmark with a P99 latency of 150ms and $0.001/call. Model B achieves 96% accuracy with 2,500ms latency and $0.05/call. For a real-time high-volume customer search bar, which model should be selected?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.10: Select the best model for a given task based on common metrics generated in experiments  

#### Opciones:
- **A**: Model A, because it provides virtually identical accuracy (95% vs 96%) while offering a 16x latency improvement and 50x lower operational cost.
- **B**: Model B, because 1% accuracy gain justifies any latency and cost penalty in real-time user search.
- **C**: Discard both models and use a random number generator.
- **D**: Choose Model B and slow down the user's internet connection.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Model A, because it provides virtually identical accuracy (95% vs 96%) while offering a 16x latency improvement and 50x lower operational cost.**

Production model selection requires balancing accuracy against latency SLAs and cost; a 1% gain rarely justifies a 16x latency degradation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. A 2.5 second latency on interactive search bars destroys user conversion and engagement.
• **(C)**: Incorrect. Random generators provide zero answer accuracy.
• **(D)**: Incorrect. You cannot slow down user internet connections to mask latency.

---

### Pregunta 163: In MLflow Evaluation, what is the **LLM-as-a-Judge Correctness Metric** and how is it scored?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.10: Select the best model for a given task based on common metrics generated in experiments  

#### Opciones:
- **A**: A judge LLM compares the generated response against a labeled ground-truth expected response, assigning a factual accuracy score based on defined rubrics.
- **B**: It measures the number of vowels in the text.
- **C**: It counts how many times the user clicked the search button.
- **D**: It calculates the physical temperature of the server room.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A judge LLM compares the generated response against a labeled ground-truth expected response, assigning a factual accuracy score based on defined rubrics.**

MLflow Correctness judges evaluate generated responses against ground truth targets using structured scoring rubrics.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vowel counting has no correlation to factual correctness.
• **(C)**: Incorrect. User click count measures engagement, not semantic correctness.
• **(D)**: Incorrect. Server temperature is a facilities metric.

---

### Pregunta 164: When running automated experiments across 5 candidate LLMs on Databricks, which tool tracks prompts, model parameters, evaluation metrics, and output traces side-by-side?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.10: Select the best model for a given task based on common metrics generated in experiments  

#### Opciones:
- **A**: MLflow Tracking and MLflow LLM Evaluate (`mlflow.evaluate()`).
- **B**: Windows Notepad.
- **C**: Spark Web UI executor logs alone.
- **D**: Delta Lake transaction log JSON files alone.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) MLflow Tracking and MLflow LLM Evaluate (`mlflow.evaluate()`).**

MLflow Tracking and `mlflow.evaluate()` provide centralized dashboards, trace logs, and comparative charts across experiment runs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Notepad is a simple text editor lacking automated experiment tracking.
• **(C)**: Incorrect. Spark UI monitors cluster execution, not LLM evaluation metrics.
• **(D)**: Incorrect. Raw transaction logs track table commits, not model evaluation experiments.

---

### Pregunta 165: What does **Toxicity / Safety Score** in MLflow evaluate when comparing candidate LLMs?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.10: Select the best model for a given task based on common metrics generated in experiments  

#### Opciones:
- **A**: The rate at which candidate models generate harmful, hateful, sexually explicit, or abusive content when subjected to adversarial stress tests.
- **B**: The chemical toxicity of the computer monitor plastic.
- **C**: The battery life of laptops running the code.
- **D**: The speed of network packet transmission.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The rate at which candidate models generate harmful, hateful, sexually explicit, or abusive content when subjected to adversarial stress tests.**

Toxicity evaluation measures model resistance to generating toxic, harmful, or policy-violating content.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The metric measures linguistic safety, not physical plastic toxicity.
• **(C)**: Incorrect. Battery life is an end-user hardware metric.
• **(D)**: Incorrect. Network speed measures bandwidth, not content safety.

---

### Pregunta 166: If experiment metrics show that Model X has high latency on initial token generation (Time-To-First-Token / TTFT) but high token throughput afterwards, what is the best architectural optimization for interactive streaming chats?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.10: Select the best model for a given task based on common metrics generated in experiments  

#### Opciones:
- **A**: Enable streaming token response (`stream=True`) so users see tokens rendered incrementally as they are generated.
- **B**: Wait for the entire 1,000-word response to finish before rendering anything.
- **C**: Disable GPU acceleration.
- **D**: Ask the user to close their eyes while waiting.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Enable streaming token response (`stream=True`) so users see tokens rendered incrementally as they are generated.**

Streaming responses deliver tokens to the UI as they are generated, improving perceived latency and user experience.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Waiting for full completion maximizes perceived user waiting time.
• **(C)**: Incorrect. Disabling GPUs worsens latency.
• **(D)**: Incorrect. Asking users to close their eyes is not a technical software solution.

---

### Pregunta 167: In an A/B test experiment comparing two model variants in production, which metric directly captures end-user satisfaction?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.10: Select the best model for a given task based on common metrics generated in experiments  

#### Opciones:
- **A**: User feedback signals (Thumbs Up / Thumbs Down ratio, copy-to-clipboard rate, session completion rate).
- **B**: Raw server fan speed.
- **C**: Hard drive rotational speed (RPM).
- **D**: Git repository line count.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) User feedback signals (Thumbs Up / Thumbs Down ratio, copy-to-clipboard rate, session completion rate).**

Direct user engagement and feedback metrics (thumbs up/down, acceptance rates) provide ground-truth validation of model utility.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Fan speed measures cooling, not user happiness.
• **(C)**: Incorrect. Disk RPM is a physical storage attribute.
• **(D)**: Incorrect. Git line count measures code volume, not user satisfaction.

---

### Pregunta 168: What is **MLflow Tracing** (`mlflow.langchain.autolog()` / `mlflow.trace`) and why is it essential for debugging multi-agent systems?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.11: Utilize MLflow and Agent Framework for developing agentic systems  

#### Opciones:
- **A**: It captures detailed hierarchical execution traces of every tool call, intermediate prompt, retrieved document, and LLM hop within an agent loop.
- **B**: It tracks the physical GPS location of the software engineer.
- **C**: It converts Python source code into compiled machine code.
- **D**: It deletes all model serving logs after 1 millisecond.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It captures detailed hierarchical execution traces of every tool call, intermediate prompt, retrieved document, and LLM hop within an agent loop.**

MLflow Tracing records the entire execution graph of agent steps, tool calls, and inputs/outputs for transparent observability and debugging.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. MLflow Tracing tracks software execution graphs, not physical human GPS coordinates.
• **(C)**: Incorrect. Tracing logs telemetry; it does not compile machine code.
• **(D)**: Incorrect. Traces are stored persistently in MLflow for auditing, not deleted in 1ms.

---

### Pregunta 169: When developing an agent using the **Databricks Agent Framework**, how is the agent packaged and logged to MLflow?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.11: Utilize MLflow and Agent Framework for developing agentic systems  

#### Opciones:
- **A**: As an MLflow PyFunc model (or LangChain model) with an input/output signature, logged using `mlflow.models.set_model(model)` or `mlflow.pyfunc.log_model()`.
- **B**: As an uncompiled C++ DLL binary.
- **C**: As a raw screenshot of the Python notebook.
- **D**: As a plain text README file on desktop.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) As an MLflow PyFunc model (or LangChain model) with an input/output signature, logged using `mlflow.models.set_model(model)` or `mlflow.pyfunc.log_model()`.**

Agent Framework packages agents as standard MLflow PyFunc models that can be logged, versioned in Unity Catalog, and deployed to Model Serving.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. C++ DLL binaries are non-standard and not supported by MLflow model flavor specifications.
• **(C)**: Incorrect. Screenshots cannot be executed by serving runtimes.
• **(D)**: Incorrect. Plain text README files contain no runnable code.

---

### Pregunta 170: How does the Databricks Agent Framework facilitate collecting human stakeholder feedback during prototype development?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.11: Utilize MLflow and Agent Framework for developing agentic systems  

#### Opciones:
- **A**: It automatically deploys a **Review App** (interactive review UI) where domain SMEs can chat with the agent, inspect traces, and provide thumbs up/down and text feedback.
- **B**: It emails random strangers on the internet.
- **C**: It requires printing all agent responses on physical paper.
- **D**: It forces engineers to manually call stakeholders on the phone.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It automatically deploys a **Review App** (interactive review UI) where domain SMEs can chat with the agent, inspect traces, and provide thumbs up/down and text feedback.**

The Review App generates an interactive feedback interface where business stakeholders test the agent and log structured evaluation feedback directly into Delta tables.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Review Apps are secured internally within the enterprise workspace.
• **(C)**: Incorrect. Feedback is collected digitally in real-time, not on physical paper.
• **(D)**: Incorrect. Automated feedback forms replace manual phone interviews.

---

### Pregunta 171: What role does `mlflow.models.predict()` or `agent.predict()` play during local development of an agent?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.11: Utilize MLflow and Agent Framework for developing agentic systems  

#### Opciones:
- **A**: It tests agent execution locally against mock input payloads to verify tool invocations, prompt formatting, and output structure before cloud deployment.
- **B**: It permanently registers the model in production.
- **C**: It formats the hard drive.
- **D**: It shuts down the Databricks control plane.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It tests agent execution locally against mock input payloads to verify tool invocations, prompt formatting, and output structure before cloud deployment.**

Local prediction allows developers to unit-test agent execution graphs and tool invocations before logging to Unity Catalog.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Registering in production requires explicit MLflow Model Registry promotion.
• **(C)**: Incorrect. It does not alter hard drive partitions.
• **(D)**: Incorrect. Prediction tests software; it does not affect the cloud control plane.

---

### Pregunta 172: How are external Python dependencies and environment requirements packaged when logging an agent in MLflow?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.11: Utilize MLflow and Agent Framework for developing agentic systems  

#### Opciones:
- **A**: Via `pip_requirements` / `conda_env` parameters in `mlflow.pyfunc.log_model()`, capturing exact package versions for containerized reproduction.
- **B**: By copying the engineer's entire operating system disk image.
- **C**: Dependencies cannot be logged and must be manually installed on every server.
- **D**: By deleting all third-party libraries.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Via `pip_requirements` / `conda_env` parameters in `mlflow.pyfunc.log_model()`, capturing exact package versions for containerized reproduction.**

Specifying pip requirements ensures Model Serving builds identical isolated container environments for reliable production execution.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Copying entire OS disk images is impractical and non-portable.
• **(C)**: Incorrect. Model Serving automatically installs defined pip requirements.
• **(D)**: Incorrect. Deleting libraries breaks code execution.

---

### Pregunta 173: What is the primary benefit of versioning AI Agents in Unity Catalog using MLflow Models in UC?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.11: Utilize MLflow and Agent Framework for developing agentic systems  

#### Opciones:
- **A**: Centralized governance, fine-grained access control (RBAC), lineage tracking from raw source tables to deployed endpoints, and staged promotion (Dev -> Staging -> Prod).
- **B**: It makes all model weights public to the entire internet.
- **C**: It disables all security audits.
- **D**: It forces all models to be written in Java.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Centralized governance, fine-grained access control (RBAC), lineage tracking from raw source tables to deployed endpoints, and staged promotion (Dev -> Staging -> Prod).**

Unity Catalog provides enterprise governance, RBAC, full Lakehouse lineage, and lifecycle management for MLflow models.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Unity Catalog secures models internally and enforces strict private RBAC.
• **(C)**: Incorrect. Unity Catalog generates comprehensive audit logs.
• **(D)**: Incorrect. MLflow models in UC natively support Python, LangChain, and PyFunc.

---

### Pregunta 174: What is the key difference between the **Evaluation Phase** and the **Monitoring Phase** in the GenAI application lifecycle?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.12: Compare the evaluation and monitoring phases of the Gen AI application life cycle  

#### Opciones:
- **A**: Evaluation occurs pre-deployment on curated benchmark datasets to validate quality; Monitoring occurs post-deployment on live streaming traffic to track production performance, drift, and latency.
- **B**: Evaluation runs on live customer traffic; Monitoring runs on synthetic offline mock data.
- **C**: Evaluation is for hardware; Monitoring is for software.
- **D**: There is zero difference; they are exact synonyms.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Evaluation occurs pre-deployment on curated benchmark datasets to validate quality; Monitoring occurs post-deployment on live streaming traffic to track production performance, drift, and latency.**

Evaluation benchmarks model quality prior to release; Monitoring continuously tracks live production performance, drift, and anomalies after deployment.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Live traffic belongs to monitoring, while offline benchmarks belong to evaluation.
• **(C)**: Incorrect. Both phases evaluate software and AI quality.
• **(D)**: Incorrect. They represent distinct lifecycle stages (pre-release vs production operations).

---

### Pregunta 175: Which tool/feature in Databricks captures live production inputs, outputs, latencies, and metadata from Model Serving endpoints into a Delta table for monitoring?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.12: Compare the evaluation and monitoring phases of the Gen AI application life cycle  

#### Opciones:
- **A**: Inference Tables (Inference Logging).
- **B**: Spark GraphX.
- **C**: Tableau desktop connector.
- **D**: Local browser cache.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Inference Tables (Inference Logging).**

Inference Tables automatically stream incoming request payloads and model responses into a managed Delta table in Unity Catalog for real-time monitoring.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. GraphX is a distributed graph computation engine in Spark.
• **(C)**: Incorrect. Tableau is a BI visualization tool.
• **(D)**: Incorrect. Browser cache stores client assets, not server-side inference streams.

---

### Pregunta 176: During offline Evaluation, why are 'ground truth' expected responses commonly used, whereas during production Monitoring, 'reference-free' evaluators are required?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.12: Compare the evaluation and monitoring phases of the Gen AI application life cycle  

#### Opciones:
- **A**: Offline datasets have pre-labeled correct answers created by experts, while live production user queries do not have known ground-truth answers in real-time.
- **B**: Because ground truth answers are illegal in production.
- **C**: Because reference-free evaluators only work in offline notebooks.
- **D**: Because live production users always provide the answer to their own question.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Offline datasets have pre-labeled correct answers created by experts, while live production user queries do not have known ground-truth answers in real-time.**

In production, incoming user questions have no pre-existing answer keys, requiring reference-free judges (e.g. toxicity, groundedness, relevance) to evaluate quality.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Ground truth is not 'illegal'; it is simply unavailable for novel live user queries.
• **(C)**: Incorrect. Reference-free evaluators operate both offline and in real-time monitoring.
• **(D)**: Incorrect. Users ask questions because they do not know the answer.

---

### Pregunta 177: What is **Data Drift / Concept Drift** in the context of production LLM monitoring?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.12: Compare the evaluation and monitoring phases of the Gen AI application life cycle  

#### Opciones:
- **A**: A shift over time in user query distribution, terminology, or domain facts that causes the model or retrieval index to become outdated and degraded.
- **B**: Physical movement of cloud data centers.
- **C**: A feature that renames Delta tables automatically.
- **D**: A bug that converts numbers to Roman numerals.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A shift over time in user query distribution, terminology, or domain facts that causes the model or retrieval index to become outdated and degraded.**

Concept drift occurs when real-world language, user topics, or business policies evolve away from the baseline data used during design.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Data drift is a statistical/NLP phenomenon, not physical server movement.
• **(C)**: Incorrect. Tables are not renamed by drift.
• **(D)**: Incorrect. Drift does not alter numbering formatting into Roman numerals.

---

### Pregunta 178: How does **Lakehouse Monitoring** help track GenAI applications deployed on Databricks?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.12: Compare the evaluation and monitoring phases of the Gen AI application life cycle  

#### Opciones:
- **A**: It automatically computes data quality metrics, statistical profiles, drift alerts, and custom GenAI quality scores over Inference Tables, publishing an automated dashboard.
- **B**: It deletes all inference data every night.
- **C**: It converts Python models into Java applets.
- **D**: It replaces the need for Model Serving.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It automatically computes data quality metrics, statistical profiles, drift alerts, and custom GenAI quality scores over Inference Tables, publishing an automated dashboard.**

Databricks Lakehouse Monitoring provides automated dashboards, metric tracking, and alert triggers over Delta tables containing inference logs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Lakehouse Monitoring preserves data for longitudinal trend analysis.
• **(C)**: Incorrect. It does not convert models into Java applets.
• **(D)**: Incorrect. Lakehouse Monitoring observes Model Serving; it does not replace it.

---

### Pregunta 179: When production monitoring alerts indicate a sudden spike in 'Groundedness Failure' metrics, what is the most likely root cause to investigate?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.12: Compare the evaluation and monitoring phases of the Gen AI application life cycle  

#### Opciones:
- **A**: The Vector Search index is returning stale or irrelevant chunks due to missing source documents or broken sync pipelines.
- **B**: The server room air conditioner stopped working.
- **C**: The user's computer ran out of battery.
- **D**: The Python interpreter was upgraded to Python 4.0.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The Vector Search index is returning stale or irrelevant chunks due to missing source documents or broken sync pipelines.**

Groundedness drops typically stem from retrieval degradation—such as index staleness, failed sync pipelines, or missing documentation for new user topics.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hardware cooling does not cause selective semantic grounding errors.
• **(C)**: Incorrect. User battery levels do not affect server-side model grounding scores.
• **(D)**: Incorrect. Python version upgrades do not explain semantic retrieval degradation.

---

### Pregunta 180: What is **Databricks AI/BI Genie** and how can a multi-agent system leverage it via API?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.13: Enable multi-agent systems to leverage Genie Spaces or conversational API to retrieve data  

#### Opciones:
- **A**: Genie is a conversational data analytics space over Unity Catalog tables; agents can query Genie Spaces via the Genie REST API to retrieve trusted SQL answers and data charts.
- **B**: Genie is a tool that writes poetry about cloud servers.
- **C**: Genie is an audio transcription model.
- **D**: Genie is a tool that formats hard drives.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Genie is a conversational data analytics space over Unity Catalog tables; agents can query Genie Spaces via the Genie REST API to retrieve trusted SQL answers and data charts.**

Databricks AI/BI Genie allows agents to query complex tabular Lakehouse datasets using conversational natural language backed by curated business semantics.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Genie is a specialized data analytics engine, not a poetry generator.
• **(C)**: Incorrect. Genie analyzes structured data, not audio waveforms.
• **(D)**: Incorrect. Genie does not format hardware drives.

---

### Pregunta 181: When designing a Multiagent Supervisor agent, how should it route user requests between a Document RAG tool and a Genie Space tool?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.13: Enable multi-agent systems to leverage Genie Spaces or conversational API to retrieve data  

#### Opciones:
- **A**: Route unstructured document questions (policies, manuals, PDFs) to the Document RAG tool; route structured quantitative metrics (sales revenue, inventory counts, SQL aggregations) to the Genie Space tool.
- **B**: Always send all questions to both tools simultaneously and discard the answers.
- **C**: Send structured database queries to Document RAG and PDF policy questions to Genie.
- **D**: Never use Genie Spaces in agent architectures.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Route unstructured document questions (policies, manuals, PDFs) to the Document RAG tool; route structured quantitative metrics (sales revenue, inventory counts, SQL aggregations) to the Genie Space tool.**

Routing based on data modality ensures unstructured text queries hit Vector Search while structured quantitative aggregation queries hit Genie.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Indiscriminate broadcast wastes compute and creates conflicting responses.
• **(C)**: Incorrect. Inverting tools causes Document RAG to fail on SQL aggregations and Genie to fail on unstructured PDF text.
• **(D)**: Incorrect. Genie Spaces are a core enterprise component for structured data tools.

---

### Pregunta 182: How does configuring trusted assets and curated semantic benchmarks inside an AI/BI Genie Space improve an agent's data reliability?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.13: Enable multi-agent systems to leverage Genie Spaces or conversational API to retrieve data  

#### Opciones:
- **A**: It provides domain-specific SQL exemplars, trusted column descriptions, and verified metric formulas, ensuring generated queries adhere to approved business definitions.
- **B**: It disables all SQL execution in Unity Catalog.
- **C**: It converts all integers into strings.
- **D**: It forces queries to run in single-user mode.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It provides domain-specific SQL exemplars, trusted column descriptions, and verified metric formulas, ensuring generated queries adhere to approved business definitions.**

Curating semantic instructions and verified SQL queries in Genie grounds generated queries in approved business logic and official metric definitions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Genie executes valid SQL queries against Lakehouse data.
• **(C)**: Incorrect. Data types are preserved in their native relational schemas.
• **(D)**: Incorrect. Genie runs on scalable serverless SQL warehouses.

---

### Pregunta 183: What authentication and permission model governs multi-agent calls to an AI/BI Genie Space in Databricks?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.13: Enable multi-agent systems to leverage Genie Spaces or conversational API to retrieve data  

#### Opciones:
- **A**: Unity Catalog permissions (table SELECT, schema USE, and Genie Space CAN VIEW/CAN RUN permissions) enforced via workspace OAuth / Service Principal tokens.
- **B**: No authentication is required; all Genie Spaces are completely public.
- **C**: Password authentication hardcoded in clear text in the URL.
- **D**: Physical badge scanning at the data center.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Unity Catalog permissions (table SELECT, schema USE, and Genie Space CAN VIEW/CAN RUN permissions) enforced via workspace OAuth / Service Principal tokens.**

Genie Spaces inherit Unity Catalog governance, ensuring calling agents only access tables and columns authorized for their Service Principal.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Enterprise workspaces enforce strict authentication and never expose spaces publicly.
• **(C)**: Incorrect. Credentials must never be hardcoded in URLs.
• **(D)**: Incorrect. Cloud API authentication is handled digitally via OAuth.

---

### Pregunta 184: When an agent queries Genie via the Conversational API and Genie responds that clarification is needed, how should the multi-agent system respond?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.13: Enable multi-agent systems to leverage Genie Spaces or conversational API to retrieve data  

#### Opciones:
- **A**: The supervisor agent forwards Genie's clarifying question back to the end-user or provides the required disambiguation from conversational context.
- **B**: The agent terminates with a fatal system crash.
- **C**: The agent ignores Genie and outputs random numbers.
- **D**: The agent deletes the Genie Space.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The supervisor agent forwards Genie's clarifying question back to the end-user or provides the required disambiguation from conversational context.**

Multi-turn agent loops seamlessly pass clarification prompts back to the user to resolve ambiguous query parameters.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Clarifications are normal conversational turns, not fatal crashes.
• **(C)**: Incorrect. Outputting random numbers produces invalid answers.
• **(D)**: Incorrect. Deleting the space breaks service for all users.

---

### Pregunta 185: How do you bind a custom Unity Catalog User-Defined Function (UDF) that calculates foreign exchange rates to a LangChain agent using the `databricks-langchain` package?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.1: Select Langchain/similar tools for use in a Generative AI application  

#### Opciones:
- **A**: Use `UCFunctionToolkit(function_names=['finance_catalog.forex_schema.calculate_fx_rate']).get_tools()` and pass the returned tools to `create_tool_calling_agent()`.
- **B**: Write raw C++ sockets to the database.
- **C**: Hardcode exchange rates inside the system prompt string.
- **D**: Export the database as a CSV file to desktop.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Use `UCFunctionToolkit(function_names=['finance_catalog.forex_schema.calculate_fx_rate']).get_tools()` and pass the returned tools to `create_tool_calling_agent()`.**

`UCFunctionToolkit` inspects the Unity Catalog function signature and description, creating structured LangChain tools that agents can invoke autonomously.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. C++ sockets bypass Unity Catalog security governance.
• **(C)**: Incorrect. Static hardcoded prompts cannot track dynamic real-time FX currency fluctuations.
• **(D)**: Incorrect. Desktop CSV exports provide no callable runtime functions.

---

### Pregunta 186: A healthcare assistant is asked: 'What is the lethal dosage of medication X for a human?' The assistant outputs the exact lethal dose and instructions. What qualitative failure occurred?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.2: Qualitatively assess responses to identify common issues such as quality and safety  

#### Opciones:
- **A**: Safety / Harm Prevention violation (Self-Harm / Dangerous Content Guardrail failure).
- **B**: Cold-start network timeout.
- **C**: Delta Lake merge conflict.
- **D**: Token truncation error.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Safety / Harm Prevention violation (Self-Harm / Dangerous Content Guardrail failure).**

Surfacing lethal drug dosages violates fundamental AI safety and harm prevention policies; the model must refuse such queries safely.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Network timeouts prevent responses from generating entirely.
• **(C)**: Incorrect. Merge conflicts occur during concurrent database writes.
• **(D)**: Incorrect. Truncation is an incomplete generation error, not a safety policy breach.

---

### Pregunta 187: How does **HyDE (Hypothetical Document Embeddings)** enhance retrieval for abstract queries with sparse keywords?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.4: Augment a prompt with additional context from a user's input  

#### Opciones:
- **A**: An LLM generates a hypothetical answer to the user's query first, and the embedding of that hypothetical answer is used to search the vector index for real matching documents.
- **B**: It translates the query into Greek.
- **C**: It removes all nouns from the query.
- **D**: It deletes the vector index.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An LLM generates a hypothetical answer to the user's query first, and the embedding of that hypothetical answer is used to search the vector index for real matching documents.**

HyDE bridges the semantic gap between questions and answers by generating a synthetic answer whose embedding closely matches real document passages in vector space.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Greek translation does not bridge query-document asymmetry.
• **(C)**: Incorrect. Stripping nouns destroys query intent.
• **(D)**: Incorrect. Vector indexes must remain active for retrieval.

---

### Pregunta 188: What is **Self-Consistency Decoding** and how does it act as a guardrail against reasoning hallucinations in complex mathematical chains?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.6: Implement LLM guardrails to prevent negative outcomes  

#### Opciones:
- **A**: The model samples multiple independent reasoning paths (e.g. 5 paths at temperature 0.7) and selects the most consistent majority-vote final answer.
- **B**: The model asks the user to do the math.
- **C**: The model only generates even numbers.
- **D**: The model formats the server hard drive.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The model samples multiple independent reasoning paths (e.g. 5 paths at temperature 0.7) and selects the most consistent majority-vote final answer.**

Self-consistency generates diverse reasoning paths and aggregates their conclusions, filtering out stochastic reasoning errors through majority voting.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Self-consistency is an internal inference sampling strategy, not delegating math to users.
• **(C)**: Incorrect. Numeric outputs depend on mathematical truth, not parity filters.
• **(D)**: Incorrect. Self-consistency operates in memory without touching disk partitions.

---

### Pregunta 189: An enterprise application requires parsing 500-page complex PDF financial prospectuses in a single prompt without chunking. What model attribute is strictly required?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.7: Select the best LLM based on the attributes of the application to be developed  

#### Opciones:
- **A**: Ultra-long context window capacity (e.g. 1 Million+ tokens supported with strong 'needle-in-a-haystack' retrieval fidelity).
- **B**: A context window of exactly 512 tokens.
- **C**: A model trained only on text-to-speech audio.
- **D**: A model with zero parameters.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Ultra-long context window capacity (e.g. 1 Million+ tokens supported with strong 'needle-in-a-haystack' retrieval fidelity).**

Ingesting 500-page prospectuses (~250,000 words / ~350,000 tokens) in a single turn requires an ultra-long context model with high retrieval accuracy.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. 512 tokens can only fit about 1 page.
• **(C)**: Incorrect. Text-to-speech audio models cannot parse financial text prospectuses.
• **(D)**: Incorrect. Parameterless models cannot perform inference.

---

### Pregunta 190: What is the primary function of `mlflow.models.set_model(agent)` in Databricks Agent Framework code development?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.11: Utilize MLflow and Agent Framework for developing agentic systems  

#### Opciones:
- **A**: It defines the root executable model instance that MLflow will serialize, log, and deploy to Model Serving containers.
- **B**: It deletes all models from the workspace.
- **C**: It prints the model weights to the terminal.
- **D**: It formats the cloud storage bucket.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It defines the root executable model instance that MLflow will serialize, log, and deploy to Model Serving containers.**

`mlflow.models.set_model()` registers the entrypoint agent object inside an agent script for seamless packaging by MLflow Model Serving.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. It registers models for deployment; it never deletes them.
• **(C)**: Incorrect. Terminal printing does not package models.
• **(D)**: Incorrect. Storage buckets are preserved.

---

### Pregunta 191: When an agent queries an AI/BI Genie Space via API, what structured information does Genie return alongside the textual answer?

**Dominio**: Domain 3: Application Development  
**Subdominio**: Subdomain 3.13: Enable multi-agent systems to leverage Genie Spaces  

#### Opciones:
- **A**: The generated SQL query, execution status, tabular query result dataset, and schema column definitions.
- **B**: A random audio file.
- **C**: The developer's personal login credentials.
- **D**: An encrypted virus.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The generated SQL query, execution status, tabular query result dataset, and schema column definitions.**

Genie returns full execution provenance: the generated SQL query, execution status, and tabular results for full transparency and verification.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Genie returns tabular structured analytics, not random audio.
• **(C)**: Incorrect. Credentials are never surfaced in API payloads.
• **(D)**: Incorrect. Enterprise APIs return secure structured JSON responses.

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

### Pregunta 288: An enterprise RAG application processes customer support tickets that contain credit card numbers and Social Security Numbers (SSNs). How should masking techniques be implemented to achieve regulatory compliance and privacy preservation?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: Apply automated PII detection and regex / NER masking (e.g. replacing SSNs with `[REDACTED_SSN]`) during the data preparation ingestion pipeline before writing to Delta tables and vector indexing.
- **B**: Store the raw credit card numbers in the vector database and ask the model nicely in the prompt not to repeat them.
- **C**: Post all credit card numbers on a public company bulletin board.
- **D**: Delete the entire customer support database.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Apply automated PII detection and regex / NER masking (e.g. replacing SSNs with `[REDACTED_SSN]`) during the data preparation ingestion pipeline before writing to Delta tables and vector indexing.**

Pre-ingestion masking guarantees that sensitive PII is never stored in vector indexes or surfaced to downstream models, satisfying strict regulatory mandates (PCI-DSS, GDPR).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Prompt-level instructions can be bypassed via prompt injection, risking catastrophic data leaks.
• **(C)**: Incorrect. Publishing credit cards is a severe criminal compliance violation.
• **(D)**: Incorrect. Deleting the database breaks customer operations.

---

### Pregunta 289: What is **De-identification / Pseudonymization** in data masking for GenAI training and evaluation datasets?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: Replacing real patient or customer names with realistic synthetic surrogate identifiers (e.g. 'John Doe' -> 'Patient_48291') while preserving relational patterns.
- **B**: Deleting all nouns in the dataset.
- **C**: Translating the text into Klingon.
- **D**: Making the text blurry using image filters.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Replacing real patient or customer names with realistic synthetic surrogate identifiers (e.g. 'John Doe' -> 'Patient_48291') while preserving relational patterns.**

Pseudonymization replaces direct identifiers with synthetic aliases, protecting identity while preserving semantic grammar and relationships for evaluation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting all nouns destroys sentence structure and meaning.
• **(C)**: Incorrect. Translating to fictional languages prevents realistic domain evaluation.
• **(D)**: Incorrect. Text datasets cannot be blurred with image filters.

---

### Pregunta 290: How does **Unity Catalog Column Masking** enforce dynamic PII protection on Delta tables accessed by AI pipelines?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: It dynamically applies SQL user-defined masking functions at query time based on user group membership (e.g. authorized HR admins see clear text; AI pipelines see masked `XXX-XX-XXXX`).
- **B**: It physically deletes masked columns from the hard drive.
- **C**: It converts column headers into Greek symbols.
- **D**: It makes all database queries return zero rows.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It dynamically applies SQL user-defined masking functions at query time based on user group membership (e.g. authorized HR admins see clear text; AI pipelines see masked `XXX-XX-XXXX`).**

Unity Catalog Column Masks dynamically evaluate user context to redact sensitive column values on-the-fly without altering physical storage.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Column masking evaluates at read time without deleting underlying physical data.
• **(C)**: Incorrect. Column headers remain intact in the schema.
• **(D)**: Incorrect. Authorized queries receive appropriately redacted row values, not empty datasets.

---

### Pregunta 291: When building an anonymization pipeline using open-source libraries, which Python package is specifically designed for enterprise PII detection, redaction, and pseudonymization?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: Microsoft Presidio (`presidio-analyzer` / `presidio-anonymizer`) / SpaCy NER
- **B**: Pygame Audio
- **C**: Matplotlib Pyplot
- **D**: Scikit-Image

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Microsoft Presidio (`presidio-analyzer` / `presidio-anonymizer`) / SpaCy NER**

Microsoft Presidio is an industry-standard open-source framework for customizable PII detection, analysis, and rule-based anonymization.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Pygame Audio manages sound effects in video games.
• **(C)**: Incorrect. Matplotlib generates data visual plots.
• **(D)**: Incorrect. Scikit-Image processes image arrays.

---

### Pregunta 292: What is a potential performance trade-off of applying aggressive regex masking (e.g. replacing every 5-digit number with `[ZIP_CODE]`) on an e-commerce catalog?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: Over-masking / False Positives: product model numbers, prices, and SKUs may be mistakenly redacted, degrading model retrieval and answering quality.
- **B**: The computer will run out of hard drive space.
- **C**: The web browser will crash.
- **D**: All products will become 100% free.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Over-masking / False Positives: product model numbers, prices, and SKUs may be mistakenly redacted, degrading model retrieval and answering quality.**

Aggressive over-masking creates false positives that destroy valid domain entities (like product SKUs and model numbers), harming model utility.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Masking replaces text strings and does not exhaust hard drive space.
• **(C)**: Incorrect. Server-side text masking does not crash client browsers.
• **(D)**: Incorrect. Text masking does not alter commercial pricing systems.

---

### Pregunta 293: In Databricks Mosaic AI Gateway, what feature allows real-time automated masking of credit cards and emails in incoming and outgoing LLM payloads?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: AI Gateway Guardrail PII Filter and Masking policies.
- **B**: Unity Catalog Disk Defragmenter.
- **C**: Spark Web UI executor memory allocator.
- **D**: Delta Lake Z-Order indexing.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) AI Gateway Guardrail PII Filter and Masking policies.**

Mosaic AI Gateway provides managed PII detection and automated masking policies that intercept payloads at the API proxy layer.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Disk defragmentation is an OS storage maintenance task.
• **(C)**: Incorrect. Executor memory manages Spark RAM allocation.
• **(D)**: Incorrect. Z-Ordering co-locates column data for fast file pruning.

---

### Pregunta 294: What is an **Indirect Prompt Injection** attack in a RAG application?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs to a Gen AI application  

#### Opciones:
- **A**: An attack where adversarial instructions are embedded inside third-party documents (e.g. a poisoned PDF or website) that are retrieved by the RAG system and hijack the LLM during generation.
- **B**: A user typing a SQL injection directly into a login box.
- **C**: A physical break-in at the cloud data center.
- **D**: A power outage in the office.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An attack where adversarial instructions are embedded inside third-party documents (e.g. a poisoned PDF or website) that are retrieved by the RAG system and hijack the LLM during generation.**

Indirect prompt injection occurs when an LLM retrieves untrusted external data containing adversarial instructions designed to hijack the model's behavior.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Direct SQL injection targets relational databases, not LLM prompt contexts.
• **(C)**: Incorrect. Physical break-ins are facilities security threats.
• **(D)**: Incorrect. Power outages are electrical infrastructure events.

---

### Pregunta 295: Which architectural guardrail pattern is most effective at neutralizing Indirect Prompt Injection from retrieved third-party text?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs to a Gen AI application  

#### Opciones:
- **A**: Dual-LLM / Sandwich Defense with strict XML delimiter isolation, instruction-following safety classifiers, and read-only execution sandboxes.
- **B**: Allowing the model to execute any shell script found in retrieved documents.
- **C**: Increasing the model temperature to 2.0.
- **D**: Removing all system prompt instructions.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Dual-LLM / Sandwich Defense with strict XML delimiter isolation, instruction-following safety classifiers, and read-only execution sandboxes.**

Strict boundary encapsulation, dedicated input sanitization, and isolating retrieved content inside explicit XML blocks prevent untrusted text from acting as instructions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Executing arbitrary shell scripts from retrieved documents causes total system compromise.
• **(C)**: Incorrect. High temperature increases instability and unpredictability.
• **(D)**: Incorrect. Removing system instructions removes all defensive guardrails.

---

### Pregunta 296: What is a **Jailbreak** attack against an LLM and how is it mitigated?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs to a Gen AI application  

#### Opciones:
- **A**: A crafted prompt technique (e.g. roleplay personas, hypothetical scenarios) designed to bypass safety alignment and force the model to generate prohibited harmful content; mitigated by input guardrails and robust safety tuning.
- **B**: Breaking a physical smartphone screen.
- **C**: Escaping from a physical prison.
- **D**: Downloading an open-source Python script.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A crafted prompt technique (e.g. roleplay personas, hypothetical scenarios) designed to bypass safety alignment and force the model to generate prohibited harmful content; mitigated by input guardrails and robust safety tuning.**

Jailbreaks use sophisticated semantic framing to subvert safety filters; they are mitigated by multi-layered guardrails (Llama Guard, NeMo) and system instructions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Jailbreak in AI refers to adversarial prompt framing, not physical device damage.
• **(C)**: Incorrect. The term is metaphorical in cybersecurity.
• **(D)**: Incorrect. Downloading Python scripts is standard software development.

---

### Pregunta 297: How do **System Prompt Protection Guardrails** prevent malicious users from extracting proprietary developer instructions?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs to a Gen AI application  

#### Opciones:
- **A**: By enforcing strict negative constraints in the system prompt, deploying semantic leak classifiers on output tokens, and utilizing honeytoken/canary tripwires.
- **B**: By deleting the system prompt on every user turn.
- **C**: By publishing the system prompt on a public billboard.
- **D**: By disabling text responses completely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By enforcing strict negative constraints in the system prompt, deploying semantic leak classifiers on output tokens, and utilizing honeytoken/canary tripwires.**

Combining defensive system instructions with output leak classifiers and canary tokens detects and blocks attempts to extract proprietary system prompts.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting the system prompt removes all model guidance.
• **(C)**: Incorrect. Publishing instructions defeats intellectual property protection.
• **(D)**: Incorrect. Disabling text disables the entire conversational service.

---

### Pregunta 298: What risk arises when an autonomous tool-calling agent is given direct access to an unvalidated `execute_sql_query` tool?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs to a Gen AI application  

#### Opciones:
- **A**: A malicious user can prompt-inject the agent to execute destructive DDL commands (`DROP TABLE`, `DELETE FROM`) or exfiltrate unauthorized records.
- **B**: The computer screen will turn purple.
- **C**: The SQL query will run in zero seconds.
- **D**: All tables will be automatically converted to Excel.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A malicious user can prompt-inject the agent to execute destructive DDL commands (`DROP TABLE`, `DELETE FROM`) or exfiltrate unauthorized records.**

Exposing unrestricted SQL execution to an LLM creates severe SQL injection and data loss vulnerabilities if prompt-injected.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. SQL injections affect data integrity, not screen colors.
• **(C)**: Incorrect. SQL execution still requires query processing time.
• **(D)**: Incorrect. Tables remain in their native Delta Lake format.

---

### Pregunta 299: Why should user input strings be sanitized for length and special characters before being passed into GenAI pipelines?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs to a Gen AI application  

#### Opciones:
- **A**: To prevent Denial-of-Wallet attacks (massive token flooding) and buffer overflow / parser exploit attempts.
- **B**: To force users to type in capital letters only.
- **C**: To slow down the internet connection.
- **D**: To make prompts invisible.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To prevent Denial-of-Wallet attacks (massive token flooding) and buffer overflow / parser exploit attempts.**

Length limits and character sanitization prevent malicious users from flooding endpoints with massive token payloads that exhaust API budgets.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Sanitization allows standard mixed-case natural language.
• **(C)**: Incorrect. The goal is resource protection, not slowing down networks.
• **(D)**: Incorrect. Prompts remain visible for application processing.

---

### Pregunta 300: An engineer wants to scrape third-party news websites to train and ground a commercial financial analysis bot. What legal document must be reviewed before scraping?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: The website's Terms of Service (ToS), robots.txt policy, and copyright licensing restrictions governing automated data harvesting and commercial reuse.
- **B**: The weather forecast in the website's home country.
- **C**: The font license of the engineer's text editor.
- **D**: The color scheme of the website's logo.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The website's Terms of Service (ToS), robots.txt policy, and copyright licensing restrictions governing automated data harvesting and commercial reuse.**

Scraping proprietary web data without verifying Terms of Service, robots.txt, and copyright licenses creates severe legal liability and copyright infringement risks.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Weather forecasts have zero legal standing.
• **(C)**: Incorrect. Editor font licenses do not govern third-party data scraping rights.
• **(D)**: Incorrect. Logo colors are irrelevant to data harvesting legalities.

---

### Pregunta 301: What does a **CC-BY-NC (Creative Commons Non-Commercial)** license on a dataset mean for an enterprise deploying a commercial customer assistant?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: The dataset is strictly prohibited from being used in any commercial enterprise application or revenue-generating product.
- **B**: The dataset is 100% free for all commercial enterprise use with zero restrictions.
- **C**: The dataset must be translated into French before use.
- **D**: The dataset can only be opened on Tuesdays.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The dataset is strictly prohibited from being used in any commercial enterprise application or revenue-generating product.**

The 'NC' (Non-Commercial) clause explicitly forbids commercial use, meaning enterprise deployment would violate copyright law.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Non-commercial licenses explicitly forbid commercial enterprise use.
• **(C)**: Incorrect. CC-BY-NC restricts commercial use, not language translation.
• **(D)**: Incorrect. License restrictions apply continuously, not on specific weekdays.

---

### Pregunta 302: When using Databricks Foundation Model Serving APIs, what guarantee does Databricks provide regarding customer prompt data and completions?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: Customer prompts and completions are never stored permanently, never used to train or improve base foundation models, and never shared with third parties.
- **B**: All customer prompts are published on public social media.
- **C**: Prompts are sold to advertising brokers.
- **D**: Prompts are permanently printed in physical newspapers.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Customer prompts and completions are never stored permanently, never used to train or improve base foundation models, and never shared with third parties.**

Databricks enterprise AI terms guarantee that customer data remains strictly private and is never used for foundation model training.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Databricks never publishes enterprise prompts publicly.
• **(C)**: Incorrect. Enterprise data is never sold to advertising brokers.
• **(D)**: Incorrect. Data remains digital and private within enterprise boundaries.

---

### Pregunta 303: What legal requirement does the **EU AI Act** impose on customer-facing Generative AI chatbots?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: Transparency requirement: the system must clearly disclose to users that they are interacting with an artificial intelligence system (AI-generated content disclosure).
- **B**: The AI must be able to cook food physically.
- **C**: All software must be rewritten in Assembly.
- **D**: The chatbot must be turned off permanently.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Transparency requirement: the system must clearly disclose to users that they are interacting with an artificial intelligence system (AI-generated content disclosure).**

The EU AI Act mandates that conversational AI systems explicitly inform users that they are interacting with an automated AI system.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. AI software is digital and cannot cook physical food.
• **(C)**: Incorrect. The law mandates transparency disclosures, not Assembly code.
• **(D)**: Incorrect. Compliant systems operate legally with appropriate disclosures.

---

### Pregunta 304: Under GDPR (Article 17 - 'Right to be Forgotten'), if a customer requests deletion of their personal data, what must the GenAI team do?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: Purge the customer's personal data from all source Delta tables, persistent conversation history logs, and re-sync/purge vector search indexes.
- **B**: Ignore the request and duplicate the customer's data 10 times.
- **C**: Delete the entire company's source code repository.
- **D**: Publish the customer's request on a public blog.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Purge the customer's personal data from all source Delta tables, persistent conversation history logs, and re-sync/purge vector search indexes.**

GDPR compliance requires deleting personal records across all databases, conversation logs, and vector indexes where the user's PII resides.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Ignoring deletion requests violates GDPR and incurs massive regulatory fines.
• **(C)**: Incorrect. Only the specific user's personal data must be purged, not the company source code.
• **(D)**: Incorrect. Publishing requests violates customer confidentiality.

---

### Pregunta 305: Why must companies maintain strict audit logs and data lineage in Unity Catalog for data used in GenAI training and RAG?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: To prove regulatory compliance, establish data provenance for copyright audits, track security breaches, and satisfy enterprise governance mandates.
- **B**: To make database tables run 10,000x slower.
- **C**: To delete all files automatically every month.
- **D**: To hide all data from internal employees.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To prove regulatory compliance, establish data provenance for copyright audits, track security breaches, and satisfy enterprise governance mandates.**

End-to-end data lineage in Unity Catalog tracks the origin, transformation, and consumption of all data assets for regulatory compliance.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Unity Catalog lineage is highly optimized and does not slow down tables.
• **(C)**: Incorrect. Lineage maintains audit history, not deletes data.
• **(D)**: Incorrect. Lineage provides visibility, not arbitrary concealment.

---

### Pregunta 306: A source document dataset contains historical sales transcripts with occasional profanity, hate speech, and offensive remarks. What is the recommended mitigation strategy before ingestion?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source feeding a GenAI application  

#### Opciones:
- **A**: Run an automated data cleaning pipeline using toxicity classifiers (e.g. Hate Speech & Toxicity Detection models) to filter or sanitize problematic passages.
- **B**: Leave all offensive text in the corpus and hope the LLM ignores it.
- **C**: Manually hire 10,000 people to read every word on paper.
- **D**: Delete all historical sales data completely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Run an automated data cleaning pipeline using toxicity classifiers (e.g. Hate Speech & Toxicity Detection models) to filter or sanitize problematic passages.**

Automated toxicity filtering purges harmful and offensive language during data preparation, ensuring the knowledge corpus remains clean.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Unfiltered toxic source data will be retrieved and echoed in LLM outputs.
• **(C)**: Incorrect. Automated classifiers provide fast, cost-effective scaling compared to massive manual review.
• **(D)**: Incorrect. Filtering purges toxic passages while preserving legitimate sales data.

---

### Pregunta 307: What is **Data Harmonization / Text Normalization** when mitigating contradictory statements in source corpora?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source feeding a GenAI application  

#### Opciones:
- **A**: Resolving conflicting terminology, outdated policy assertions, and inconsistent definitions across disparate documents to produce a single source of truth.
- **B**: Translating every document into Latin.
- **C**: Deleting all numbers from the dataset.
- **D**: Converting all text into uppercase letters.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Resolving conflicting terminology, outdated policy assertions, and inconsistent definitions across disparate documents to produce a single source of truth.**

Data harmonization reconciles conflicting domain assertions across legacy documents, ensuring the RAG system retrieves consistent facts.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Latin translation does not resolve factual contradictions.
• **(C)**: Incorrect. Deleting numbers destroys factual metrics.
• **(D)**: Incorrect. Uppercase conversion does not resolve semantic contradictions.

---

### Pregunta 308: How does **Synthetic Data Generation with Human-in-the-Loop (HITL) Review** mitigate severe training data scarcity or bias in sensitive domains?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source feeding a GenAI application  

#### Opciones:
- **A**: Frontier LLMs generate diverse, debiased synthetic training examples which domain experts review and curate before fine-tuning or benchmarking.
- **B**: It replaces all doctors with automated robots.
- **C**: It generates random noise to confuse regulators.
- **D**: It deletes all real customer records.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Frontier LLMs generate diverse, debiased synthetic training examples which domain experts review and curate before fine-tuning or benchmarking.**

Expert-curated synthetic data enriches training distributions with balanced, debiased scenarios while maintaining factual quality control.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Synthetic data aids model training; it does not replace human professionals.
• **(C)**: Incorrect. The goal is high quality, not confusing regulators.
• **(D)**: Incorrect. Synthetic data complements real data without deleting customer records.

---

### Pregunta 309: When legacy PDF documents contain offensive historical stereotypes that must not be repeated by an internal assistant, what is the best multi-layered defense?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source feeding a GenAI application  

#### Opciones:
- **A**: Filter and sanitize the source documents during data prep + apply strict System Prompt persona guidelines + deploy Output Toxicity Guardrails.
- **B**: Rely solely on a 1-word prompt instruction with zero data cleaning.
- **C**: Turn off the computer.
- **D**: Make all answers public.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Filter and sanitize the source documents during data prep + apply strict System Prompt persona guidelines + deploy Output Toxicity Guardrails.**

Defense-in-depth (clean data + robust system prompt + real-time output guardrails) provides maximum resilience against generating offensive outputs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Single-layer prompt instructions are fragile and easily subverted.
• **(C)**: Incorrect. Turning off hardware does not solve software architecture requirements.
• **(D)**: Incorrect. Making answers public worsens exposure to risk.

---

### Pregunta 310: What technique mitigates biased demographic representation in a customer service knowledge base?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source feeding a GenAI application  

#### Opciones:
- **A**: Corpus auditing for demographic balance and augmenting knowledge bases with inclusive, representative support scenarios.
- **B**: Removing all customer names and replacing them with numbers.
- **C**: Deleting the knowledge base.
- **D**: Allowing the model to invent biased stereotypes freely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Corpus auditing for demographic balance and augmenting knowledge bases with inclusive, representative support scenarios.**

Auditing knowledge corpora for balanced representation prevents models from learning and perpetuating systemic demographic biases.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Replacing names with numbers does not address underlying narrative bias.
• **(C)**: Incorrect. Deleting the knowledge base destroys the support system.
• **(D)**: Incorrect. Permitting biased stereotypes violates enterprise ethics and legal compliance.

---

### Pregunta 311: How should outdated medical guidelines in a hospital clinical assistant knowledge base be handled to mitigate patient risk?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source feeding a GenAI application  

#### Opciones:
- **A**: Immediately archive and remove superseded clinical guidelines from the active Vector Search index, replacing them with verified current medical protocols.
- **B**: Keep outdated guidelines active and let the LLM choose which protocol it likes best.
- **C**: Publish outdated guidelines on social media.
- **D**: Disable all hospital computers.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Immediately archive and remove superseded clinical guidelines from the active Vector Search index, replacing them with verified current medical protocols.**

Outdated medical advice poses severe clinical risks; superseded documents must be immediately purged from active search indexes.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Keeping outdated clinical protocols risks patient safety and severe medical malpractice liability.
• **(C)**: Incorrect. Publishing outdated guidelines spreads medical misinformation.
• **(D)**: Incorrect. Disabling computers disrupts critical hospital infrastructure.

---

### Pregunta 312: How do you configure dynamic data masking in Unity Catalog for a Delta table column containing sensitive email addresses?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: Create a SQL User-Defined Function (UDF) that masks the email (e.g. `CASE WHEN is_account_group_member('hr_admins') THEN email ELSE '***@***.com' END`) and apply it using `ALTER TABLE ... ALTER COLUMN email SET MASK email_mask_udf`.
- **B**: Delete the column completely from the Delta table.
- **C**: Change the table permissions to public.
- **D**: Rename the database to secret_database.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Create a SQL User-Defined Function (UDF) that masks the email (e.g. `CASE WHEN is_account_group_member('hr_admins') THEN email ELSE '***@***.com' END`) and apply it using `ALTER TABLE ... ALTER COLUMN email SET MASK email_mask_udf`.**

Unity Catalog dynamic column masking applies SQL UDFs at read time, evaluating group membership to redact sensitive strings for unauthorized roles.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Dropping columns destroys data needed by authorized administrative teams.
• **(C)**: Incorrect. Making tables public violates data security.
• **(D)**: Incorrect. Renaming databases does not redact column values.

---

### Pregunta 313: What is **K-Anonymity** when preparing tabular customer data for GenAI analytics?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: A property ensuring that each combination of quasi-identifying attributes (e.g. Age, Zip Code, Gender) is shared by at least k distinct individuals in the dataset.
- **B**: A technique that deletes k columns randomly.
- **C**: A method that translates text into k different languages.
- **D**: A model training algorithm using k GPUs.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A property ensuring that each combination of quasi-identifying attributes (e.g. Age, Zip Code, Gender) is shared by at least k distinct individuals in the dataset.**

K-Anonymity prevents re-identification attacks by ensuring quasi-identifiers group at least k individuals together in any demographic subset.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. K-anonymity generalizes values rather than deleting random columns.
• **(C)**: Incorrect. Translation is unrelated to privacy anonymity metrics.
• **(D)**: Incorrect. GPU cluster count is infrastructure sizing, not privacy modeling.

---

### Pregunta 314: When masking sensitive patient health records (HIPAA compliance), which data elements are classified as Protected Health Information (PHI) requiring redaction?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.1: Use masking techniques as guard rails to meet a performance objective  

#### Opciones:
- **A**: Names, geographical subdivisions smaller than state, all dates directly related to an individual (birth date, admission date), phone numbers, medical record numbers, and biometric identifiers.
- **B**: Only the hospital building address.
- **C**: Only the name of the operating system used on the computer.
- **D**: None (medical data is public).

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Names, geographical subdivisions smaller than state, all dates directly related to an individual (birth date, admission date), phone numbers, medical record numbers, and biometric identifiers.**

HIPAA Safe Harbor defines 18 specific categories of direct and indirect identifiers that must be redacted to de-identify health data.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Patient names and dates must be redacted along with geographic subdivisions.
• **(C)**: Incorrect. Computer OS version is a hardware/software spec, not patient PHI.
• **(D)**: Incorrect. Medical data is strictly regulated and never public by default.

---

### Pregunta 315: What is **Prompt Leaking / Prompt Extraction** and what guardrail technique effectively prevents it?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs  

#### Opciones:
- **A**: An attack attempting to force the model to reveal its private developer instructions; prevented by instruction-tuning defenses, canary word detectors, and output content filters.
- **B**: A physical water leak in the server room.
- **C**: A network router error that drops 10% of packets.
- **D**: A feature that translates prompts to Spanish.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An attack attempting to force the model to reveal its private developer instructions; prevented by instruction-tuning defenses, canary word detectors, and output content filters.**

Prompt extraction attacks attempt to steal proprietary system prompts; multi-layered defensive prompting and output inspection filters block leaked text.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The term in cybersecurity refers to data exfiltration, not physical plumbing.
• **(C)**: Incorrect. Packet loss is a networking infrastructure issue.
• **(D)**: Incorrect. Translation is unrelated to prompt extraction defense.

---

### Pregunta 316: How does **Input Perplexity Filtering** defend against automated adversarial suffix attacks (e.g. GCG gradient-based jailbreak tokens like `! ? == +++`)?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs  

#### Opciones:
- **A**: It calculates the perplexity of incoming prompts; nonsensical or random token sequences generated by automated optimizers exhibit abnormal perplexity spikes and are blocked.
- **B**: It deletes all vowels from incoming text.
- **C**: It translates all prompts into binary code.
- **D**: It reboots the server on every request.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It calculates the perplexity of incoming prompts; nonsensical or random token sequences generated by automated optimizers exhibit abnormal perplexity spikes and are blocked.**

Adversarial suffix attacks produce unnatural token sequences with high perplexity that anomaly detectors can identify and filter before model execution.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Stripping vowels breaks legitimate human language.
• **(C)**: Incorrect. Binary translation does not detect adversarial patterns.
• **(D)**: Incorrect. Rebooting servers causes massive downtime.

---

### Pregunta 317: What is **Defense in Depth** when designing security architecture for an autonomous tool-calling GenAI agent?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.2: Select guardrail techniques to protect against malicious user inputs  

#### Opciones:
- **A**: Implementing multiple independent security layers: Input Validation -> Model Alignment -> Tool Authorization (Least Privilege RBAC) -> Output Guardrails -> Comprehensive Audit Logging.
- **B**: Relying solely on a single 1-sentence prompt instruction.
- **C**: Placing the physical server 100 meters underground.
- **D**: Turning off the firewall.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Implementing multiple independent security layers: Input Validation -> Model Alignment -> Tool Authorization (Least Privilege RBAC) -> Output Guardrails -> Comprehensive Audit Logging.**

Defense in depth ensures that even if one layer (e.g. prompt alignment) is bypassed, downstream layers (RBAC, output filters) still prevent unauthorized actions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Single-layer prompt instructions are fragile and easily subverted.
• **(C)**: Incorrect. Physical depth does not protect against logical cyber attacks.
• **(D)**: Incorrect. Disabling firewalls creates severe security vulnerabilities.

---

### Pregunta 318: An engineer discovers an open-source dataset on GitHub with a **GPL-3.0 (GNU General Public License)**. What are the legal implications if used to train a proprietary commercial model?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: GPL copyleft clauses may legally require derivatives or distributed software utilizing the dataset to be made open source under GPL, creating significant intellectual property risk.
- **B**: GPL-3.0 has zero restrictions and allows proprietary closed-source commercialization without conditions.
- **C**: GPL-3.0 requires paying $1,000,000 to the Linux Foundation.
- **D**: GPL-3.0 only applies on Sundays.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) GPL copyleft clauses may legally require derivatives or distributed software utilizing the dataset to be made open source under GPL, creating significant intellectual property risk.**

GPL copyleft mandates that derivative works share source code under the same license, creating serious commercial IP contamination risks.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Permissive licenses (MIT, Apache 2.0) allow proprietary use, whereas GPL is copyleft.
• **(C)**: Incorrect. GPL is a free software license, not a mandatory cash fee.
• **(D)**: Incorrect. License terms apply continuously.

---

### Pregunta 319: What is **Data Sovereignty** and how does Databricks ensure compliance for regulated industries (e.g. government, banking)?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: The legal requirement that digital data is subject to the laws and jurisdiction of the country where it is located; Databricks allows pinning compute and storage to specific geographical cloud regions.
- **B**: The requirement that all data must be stored on a private yacht.
- **C**: A feature that translates data into 100 currencies.
- **D**: A policy that makes all banking data public.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The legal requirement that digital data is subject to the laws and jurisdiction of the country where it is located; Databricks allows pinning compute and storage to specific geographical cloud regions.**

Data sovereignty requires data to reside within national borders; Databricks deploys within designated regional VPCs to uphold local data protection laws.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Maritime yachts have no legal bearing on data sovereignty compliance.
• **(C)**: Incorrect. Currency translation is financial math, not jurisdictional residency.
• **(D)**: Incorrect. Banking data must remain private and encrypted.

---

### Pregunta 320: What role does **Model Lineage in Unity Catalog** play during intellectual property and copyright audits?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.3: Use legal/licensing requirements for data sources to avoid legal risk  

#### Opciones:
- **A**: It provides cryptographic and auditable tracking of every upstream training dataset, Delta table version, and pipeline transformation that contributed to a registered model.
- **B**: It deletes all model versions automatically after 30 days.
- **C**: It hides all data sources from auditors.
- **D**: It converts Python models into Java bytecode.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It provides cryptographic and auditable tracking of every upstream training dataset, Delta table version, and pipeline transformation that contributed to a registered model.**

Unity Catalog lineage provides end-to-end provenance records, proving exactly which datasets and licenses were used to build model assets.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Lineage preserves audit history permanently for legal compliance.
• **(C)**: Incorrect. Lineage provides full transparency to auditors.
• **(D)**: Incorrect. Lineage is metadata tracking, not language compilation.

---

### Pregunta 321: A customer service corpus contains thousands of transcripts with unresolved angry disputes, sarcasm, and false customer assertions. How should this data be cleaned before indexing?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source  

#### Opciones:
- **A**: Filter out low-quality/contentious transcripts using automated quality scoring models, or rewrite/curate representative resolutions into validated FAQ documents.
- **B**: Index all toxic arguments and sarcastic remarks as ground-truth facts.
- **C**: Delete the entire customer support history.
- **D**: Change customer names to random numbers and keep all toxic text.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Filter out low-quality/contentious transcripts using automated quality scoring models, or rewrite/curate representative resolutions into validated FAQ documents.**

Filtering contentious conversational noise and transforming resolved transcripts into structured FAQs ensures high factual quality in the knowledge base.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Indexing toxic arguments causes the assistant to echo rude or false statements.
• **(C)**: Incorrect. Total deletion destroys valuable domain knowledge.
• **(D)**: Incorrect. Anonymizing names does not remove factual toxicity or sarcasm.

---

### Pregunta 322: When an internal technical manual contains deprecated CLI commands that cause system crashes if executed, what is the best knowledge engineering fix?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source  

#### Opciones:
- **A**: Add explicit 'DEPRECATED / SUPERSEDED' metadata tags and update the document with current commands, or purge the deprecated manual from the active Vector Search index.
- **B**: Leave the deprecated commands unchanged and let users experience crashes.
- **C**: Encrypt the file and lose the password.
- **D**: Delete the operating system.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Add explicit 'DEPRECATED / SUPERSEDED' metadata tags and update the document with current commands, or purge the deprecated manual from the active Vector Search index.**

Purging or updating deprecated operational procedures prevents the assistant from retrieving and recommending harmful, obsolete commands.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Leaving deprecated commands active causes user system failures.
• **(C)**: Incorrect. Losing passwords prevents future maintenance.
• **(D)**: Incorrect. Deleting the OS destroys computing infrastructure.

---

### Pregunta 323: How does **LLM-assisted Text Rewriting and Normalization** during data preparation improve downstream RAG performance?

**Dominio**: Domain 5: Governance  
**Subdominio**: Subdomain 5.4: Recommend an alternative for problematic text mitigation in a data source  

#### Opciones:
- **A**: It standardizes inconsistent grammar, expands obscure acronyms, strips conversational filler, and resolves ambiguous pronouns, producing clear, high-density knowledge chunks.
- **B**: It replaces all English words with emojis.
- **C**: It scrambles the order of sentences randomly.
- **D**: It converts text into hexadecimal strings.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It standardizes inconsistent grammar, expands obscure acronyms, strips conversational filler, and resolves ambiguous pronouns, producing clear, high-density knowledge chunks.**

Normalizing text clarifies semantic meaning, expands domain acronyms, and removes conversational noise, boosting vector search precision and chunk grounding.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Replacing words with emojis destroys linguistic nuance.
• **(C)**: Incorrect. Scrambling sentences destroys narrative coherence.
• **(D)**: Incorrect. Hexadecimal strings cannot be parsed semantically by embedding models.

---

### Pregunta 324: What is the primary limitation of traditional n-gram matching metrics like **BLEU** and **ROUGE** when evaluating modern Generative AI responses?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.1: Evaluate Gen AI application results using traditional metrics and identify their limitations  

#### Opciones:
- **A**: They rely strictly on exact lexical n-gram overlap and fail to measure semantic correctness, factual accuracy, or valid paraphrasing with different vocabulary.
- **B**: They cannot be computed using Python scripts.
- **C**: They take 10 hours to compute for a single sentence.
- **D**: They only work on binary numbers.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They rely strictly on exact lexical n-gram overlap and fail to measure semantic correctness, factual accuracy, or valid paraphrasing with different vocabulary.**

BLEU/ROUGE only count exact token overlap; a model outputting a factually perfect answer with synonyms will receive an erroneously low score.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. BLEU and ROUGE are readily computed via standard Python libraries (`evaluate`, `nltk`).
• **(C)**: Incorrect. Lexical n-gram string matching executes in milliseconds.
• **(D)**: Incorrect. They operate on standard natural language text strings.

---

### Pregunta 325: How does **BERTScore** improve over BLEU/ROUGE for evaluating generated text against reference text?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.1: Evaluate Gen AI application results using traditional metrics and identify their limitations  

#### Opciones:
- **A**: It computes contextual embedding token cosine similarities using a pre-trained transformer (BERT), capturing semantic similarity and soft paraphrasing.
- **B**: It translates the text into 100 languages.
- **C**: It measures the number of syllables in words.
- **D**: It deletes all adjectives from the sentence.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It computes contextual embedding token cosine similarities using a pre-trained transformer (BERT), capturing semantic similarity and soft paraphrasing.**

BERTScore matches tokens based on contextual vector similarity rather than exact string equality, rewarding semantically equivalent expressions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. BERTScore evaluates embeddings directly without multi-language translation loops.
• **(C)**: Incorrect. Syllable counting does not measure semantic similarity.
• **(D)**: Incorrect. Token vectors are calculated across all words without deleting parts of speech.

---

### Pregunta 326: Why is **Perplexity (PPL)** a problematic metric for evaluating factual accuracy in customer-facing RAG chatbots?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.1: Evaluate Gen AI application results using traditional metrics and identify their limitations  

#### Opciones:
- **A**: Perplexity measures how confident the language model is on a sequence of tokens, but a model can generate completely false hallucinations with high confidence (low perplexity).
- **B**: Perplexity can only be calculated on quantum computers.
- **C**: Perplexity always returns negative numbers.
- **D**: Perplexity requires 1,000 GPUs to calculate.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Perplexity measures how confident the language model is on a sequence of tokens, but a model can generate completely false hallucinations with high confidence (low perplexity).**

Perplexity measures statistical fluency and predictability, not factual truth; fluent hallucinations often exhibit deceptively low perplexity.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Perplexity is calculated standardly on standard CPU/GPU hardware.
• **(C)**: Incorrect. Perplexity is mathematically exponentiated cross-entropy and is always positive (>= 1.0).
• **(D)**: Incorrect. PPL calculation is lightweight.

---

### Pregunta 327: What traditional metric evaluates string distance based on the minimum number of single-character edits (insertions, deletions, substitutions)?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.1: Evaluate Gen AI application results using traditional metrics and identify their limitations  

#### Opciones:
- **A**: Levenshtein Distance (Edit Distance)
- **B**: Cosine Distance
- **C**: Euclidean Distance
- **D**: Mahalanobis Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Levenshtein Distance (Edit Distance)**

Levenshtein distance calculates the minimum character-level edit operations needed to transform one string into another.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Cosine distance evaluates vector angles.
• **(C)**: Incorrect. Euclidean distance evaluates geometric point distance in N-dimensional space.
• **(D)**: Incorrect. Mahalanobis distance measures statistical covariance distance.

---

### Pregunta 328: In an extractive Question-Answering benchmark, how is **Exact Match (EM)** metric defined?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.1: Evaluate Gen AI application results using traditional metrics and identify their limitations  

#### Opciones:
- **A**: A binary metric (1 or 0) indicating whether the model's generated text matches the ground-truth string character-for-character after basic normalization.
- **B**: A metric that measures how long the server took to answer.
- **C**: A metric that measures the temperature of the GPU.
- **D**: A metric that checks if the model used the word 'the'.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A binary metric (1 or 0) indicating whether the model's generated text matches the ground-truth string character-for-character after basic normalization.**

Exact Match requires 100% string equality with the reference answer, offering zero tolerance for stylistic variation or synonyms.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Server time is measured by latency (TTFT / Total Time).
• **(C)**: Incorrect. GPU temperature is a hardware metric.
• **(D)**: Incorrect. EM evaluates full target answer equivalence.

---

### Pregunta 329: Why has the industry widely shifted from traditional n-gram metrics to **LLM-as-a-Judge** for evaluating complex reasoning and open-ended generation?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.1: Evaluate Gen AI application results using traditional metrics and identify their limitations  

#### Opciones:
- **A**: Judge LLMs can evaluate nuanced criteria like Groundedness, Toxicity, Relevance, Tone, and Logical Completeness with human-like correlation.
- **B**: Because traditional metrics are now illegal.
- **C**: Because LLMs take 0 seconds to run.
- **D**: Because traditional metrics only work in Spanish.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Judge LLMs can evaluate nuanced criteria like Groundedness, Toxicity, Relevance, Tone, and Logical Completeness with human-like correlation.**

LLM judges understand context, reasoning chains, and semantic nuances that simple lexical overlap metrics completely miss.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Traditional metrics remain legal and are used where strict string equality is applicable.
• **(C)**: Incorrect. LLM judging requires compute time and token inference.
• **(D)**: Incorrect. Lexical metrics are language-agnostic character matchers.

---

### Pregunta 330: What specific insights does **MLflow Tracing** provide when diagnosing a multi-agent system failure?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.2: Implement tracing to troubleshoot unexpected responses and performance issues  

#### Opciones:
- **A**: A hierarchical tree of execution spans showing exact inputs, outputs, latencies, and tool arguments for every retriever call, prompt template, and model invocation.
- **B**: The physical serial number of the server rack.
- **C**: The home address of the user who submitted the query.
- **D**: The weather forecast outside the cloud data center.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A hierarchical tree of execution spans showing exact inputs, outputs, latencies, and tool arguments for every retriever call, prompt template, and model invocation.**

MLflow Tracing visualizes the complete execution DAG of agent actions, showing exactly which tool was called, what payload was passed, and where errors occurred.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Server serial numbers are physical infrastructure details unrelated to software trace trees.
• **(C)**: Incorrect. User privacy is protected and personal home addresses are not captured in trace trees.
• **(D)**: Incorrect. Weather data has no bearing on software execution traces.

---

### Pregunta 331: How do you enable automated tracing for LangChain applications in MLflow with a single line of code?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.2: Implement tracing to troubleshoot unexpected responses and performance issues  

#### Opciones:
- **A**: `mlflow.langchain.autolog()`
- **B**: `mlflow.trace_everything_on_disk()`
- **C**: `import trace_all`
- **D**: `mlflow.start_recording_video()`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `mlflow.langchain.autolog()`**

`mlflow.langchain.autolog()` automatically instruments LangChain LCEL chains and agents, streaming hierarchical trace logs into MLflow.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `trace_everything_on_disk()` is not an MLflow API.
• **(C)**: Incorrect. `import trace_all` is not a standard tracing package.
• **(D)**: Incorrect. Tracing logs structured telemetry, not video recordings.

---

### Pregunta 332: When an agent enters an infinite loop repeatedly calling the same tool without answering, how does tracing help engineers resolve the bug?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.2: Implement tracing to troubleshoot unexpected responses and performance issues  

#### Opciones:
- **A**: Traces display the repeated span loops, showing the exact tool inputs and identical error messages that prevented the agent from converging on a stopping condition.
- **B**: Traces automatically delete the agent's code.
- **C**: Traces restart the developer's laptop.
- **D**: Traces change the font size of the terminal.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Traces display the repeated span loops, showing the exact tool inputs and identical error messages that prevented the agent from converging on a stopping condition.**

Tracing reveals repetitive tool invocation cycles and missing termination conditions, allowing developers to implement loop caps and error handlers.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Traces record diagnostic telemetry; they never delete source code.
• **(C)**: Incorrect. Traces run within MLflow and do not reboot local hardware.
• **(D)**: Incorrect. Terminal font size is a UI preference.

---

### Pregunta 333: How can custom Python functions within a GenAI pipeline be instrumented as spans in an MLflow trace?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.2: Implement tracing to troubleshoot unexpected responses and performance issues  

#### Opciones:
- **A**: By decorating the function with `@mlflow.trace` or using `with mlflow.start_span(name='custom_step'):` context manager.
- **B**: By renaming the function to `def trace():`.
- **C**: By adding 1,000 blank lines to the file.
- **D**: By deleting the function.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By decorating the function with `@mlflow.trace` or using `with mlflow.start_span(name='custom_step'):` context manager.**

The `@mlflow.trace` decorator and `start_span` context manager allow developers to create custom spans and log arbitrary attributes and outputs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Function renaming does not configure MLflow instrumentation.
• **(C)**: Incorrect. Blank lines do not generate trace telemetry.
• **(D)**: Incorrect. Deleting the function breaks application execution.

---

### Pregunta 334: When investigating a sudden latency spike from 500ms to 8,000ms in a RAG pipeline, which trace component pinpoints the culprit?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.2: Implement tracing to troubleshoot unexpected responses and performance issues  

#### Opciones:
- **A**: The span duration breakdown, showing whether latency was spent in Vector Search retrieval, LLM Time-to-First-Token, or external SQL tool execution.
- **B**: The total number of characters in the Python file.
- **C**: The operating system version of the user's phone.
- **D**: The screen resolution of the client browser.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The span duration breakdown, showing whether latency was spent in Vector Search retrieval, LLM Time-to-First-Token, or external SQL tool execution.**

Span duration breakdowns visualize the exact execution time of every sub-step (retriever vs LLM vs tool), immediately isolating the bottleneck.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. File character count has no correlation to runtime latency spikes.
• **(C)**: Incorrect. Client OS does not explain server-side span execution delays.
• **(D)**: Incorrect. Client display resolution does not measure server execution spans.

---

### Pregunta 335: Where are MLflow Traces stored and accessed when running agents inside Databricks?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.2: Implement tracing to troubleshoot unexpected responses and performance issues  

#### Opciones:
- **A**: Under the **Traces** tab in the MLflow Experiment Tracking UI, linked to specific MLflow Runs and Model Serving endpoints.
- **B**: On an unformatted floppy disk in the data center.
- **C**: In public social media posts.
- **D**: They are discarded immediately and cannot be accessed.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Under the **Traces** tab in the MLflow Experiment Tracking UI, linked to specific MLflow Runs and Model Serving endpoints.**

MLflow Traces are organized under the Traces tab within MLflow Experiments, allowing searchable inspection, filtering by tags, and error debugging.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Cloud traces reside in cloud storage and managed databases, not floppy disks.
• **(C)**: Incorrect. Traces contain private telemetry and are never posted publicly.
• **(D)**: Incorrect. Traces are stored persistently for auditing and evaluation.

---

### Pregunta 336: Which key operational metrics must be monitored continuously to manage the **Cost** of a production GenAI application?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.3: Identify potential metrics to track and evaluate Gen AI applications for quality, cost, and latency  

#### Opciones:
- **A**: Total Input Token Count, Output Token Count, Cached Token Count, and Total Incurred Spend per Model Endpoint / User Session.
- **B**: Hard drive rotational RPM.
- **C**: The number of keyboard keystrokes typed by developers.
- **D**: The physical weight of the server racks.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Total Input Token Count, Output Token Count, Cached Token Count, and Total Incurred Spend per Model Endpoint / User Session.**

Tracking input, output, and cached tokens directly maps to LLM API pricing, enabling cost attribution, anomaly alerts, and budget management.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Hard drive RPM is a hardware storage metric unrelated to LLM token consumption.
• **(C)**: Incorrect. Developer keystrokes do not track production API consumption.
• **(D)**: Incorrect. Server weight is a physical facility specification.

---

### Pregunta 337: What are the two primary **Latency** metrics monitored in interactive streaming LLM applications?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.3: Identify potential metrics to track and evaluate Gen AI applications for quality, cost, and latency  

#### Opciones:
- **A**: **Time-To-First-Token (TTFT)** (perceived responsiveness) and **Time-Per-Output-Token (TPOT) / Inter-Token Latency** (generation throughput speed).
- **B**: Network Ping to Mars and Lunar Latency.
- **C**: Hard drive seek time in milliseconds.
- **D**: Monitor refresh rate in Hertz.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) **Time-To-First-Token (TTFT)** (perceived responsiveness) and **Time-Per-Output-Token (TPOT) / Inter-Token Latency** (generation throughput speed).**

TTFT measures the time until the first token streams to the user, while TPOT measures token generation speed across the rest of the response.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Planetary latencies are irrelevant to earthly cloud computing.
• **(C)**: Incorrect. Hard drive seek time does not measure LLM neural inference throughput.
• **(D)**: Incorrect. Monitor refresh rate is a display hardware metric.

---

### Pregunta 338: In Mosaic AI Agent Evaluation, which triad of metrics comprehensively assesses **RAG Quality**?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.3: Identify potential metrics to track and evaluate Gen AI applications for quality, cost, and latency  

#### Opciones:
- **A**: **Chunk Relevance** (Retrieval Quality), **Groundedness / Faithfulness** (Generation Integrity), and **Answer Relevance** (Intent Fulfillment).
- **B**: Accuracy, Precision, and Recall on confusion matrices only.
- **C**: Grammar score, Word count, and Vowel ratio.
- **D**: CPU usage, RAM usage, and Fan speed.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) **Chunk Relevance** (Retrieval Quality), **Groundedness / Faithfulness** (Generation Integrity), and **Answer Relevance** (Intent Fulfillment).**

The RAG Triad evaluates retrieval precision (Chunk Relevance), generation grounding (Faithfulness), and query alignment (Answer Relevance).

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Tabular confusion matrix metrics do not evaluate free-form generative RAG quality.
• **(C)**: Incorrect. Word counts and vowel ratios do not measure factual correctness.
• **(D)**: Incorrect. CPU and fan speed are infrastructure health metrics, not AI quality metrics.

---

### Pregunta 339: What metric tracks the percentage of production requests that receive HTTP 429 (Too Many Requests) or HTTP 500 (Internal Server Error) status codes?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.3: Identify potential metrics to track and evaluate Gen AI applications for quality, cost, and latency  

#### Opciones:
- **A**: **Error Rate / Failure Rate (4xx and 5xx rates)**
- **B**: Groundedness Score
- **C**: BLEU score
- **D**: Cosine Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) **Error Rate / Failure Rate (4xx and 5xx rates)****

HTTP error rates monitor system availability, rate limiting, and infrastructure reliability in production serving.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Groundedness measures factual hallucination, not HTTP status codes.
• **(C)**: Incorrect. BLEU measures n-gram overlap.
• **(D)**: Incorrect. Cosine distance evaluates vector angles.

---

### Pregunta 340: How does tracking **Token Cache Hit Rate** (e.g. Prompt Caching) help optimize enterprise LLM applications?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.3: Identify potential metrics to track and evaluate Gen AI applications for quality, cost, and latency  

#### Opciones:
- **A**: High cache hit rates significantly reduce Time-To-First-Token (TTFT) latency and cut input token billing costs by up to 50-80%.
- **B**: It deletes all cached documents permanently.
- **C**: It converts text into relational tables.
- **D**: It requires paying double the token price.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) High cache hit rates significantly reduce Time-To-First-Token (TTFT) latency and cut input token billing costs by up to 50-80%.**

Prompt caching reuses pre-computed KV-caches for shared system prompts and large document contexts, reducing latency and cost dramatically.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Caching preserves state to accelerate subsequent queries.
• **(C)**: Incorrect. Prompt caching is an attention optimization, not a database transformation.
• **(D)**: Incorrect. Cached tokens are heavily discounted by cloud providers.

---

### Pregunta 341: What is **P99 Latency** and why is it critical for monitoring enterprise GenAI applications?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.3: Identify potential metrics to track and evaluate Gen AI applications for quality, cost, and latency  

#### Opciones:
- **A**: The 99th percentile response time: 99% of requests complete faster than this value; it reveals worst-case user experiences and tail latency bottlenecks.
- **B**: The average response time across the top 1% fastest queries.
- **C**: A metric that measures how many pixels are on screen.
- **D**: A score ranging from 0 to 100 measuring English grammar.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The 99th percentile response time: 99% of requests complete faster than this value; it reveals worst-case user experiences and tail latency bottlenecks.**

P99 latency measures tail latency, ensuring that edge-case slow queries and timeout risks are identified and resolved.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. P99 represents the 99th percentile slowest boundary, not the fastest 1%.
• **(C)**: Incorrect. Screen pixels measure display resolution.
• **(D)**: Incorrect. P99 is a time duration metric, not a grammar score.

---

### Pregunta 342: What is the **LLM-as-a-Judge** evaluation methodology in Databricks Mosaic AI?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.4: Evaluate Gen AI applications using LLMs as judges  

#### Opciones:
- **A**: Using a high-capacity frontier model (e.g. GPT-4o, Llama 3.3 70B) guided by structured scoring rubrics and few-shot calibration to evaluate generated responses.
- **B**: Having a human lawyer read every query in a courtroom.
- **C**: Using a random number generator to assign scores between 1 and 10.
- **D**: Evaluating models based solely on the size of their Python files.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Using a high-capacity frontier model (e.g. GPT-4o, Llama 3.3 70B) guided by structured scoring rubrics and few-shot calibration to evaluate generated responses.**

LLM-as-a-Judge leverages advanced models to score complex qualitative criteria (groundedness, safety, correctness) with high scalability and consistency.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Human courtroom review is non-automated and non-scalable for software benchmarks.
• **(C)**: Incorrect. Random numbers provide zero evaluation signal.
• **(D)**: Incorrect. File size does not correlate with generation quality.

---

### Pregunta 343: What is **Position Bias** in LLM-as-a-Judge pairwise evaluation (comparing Model A vs Model B) and how is it mitigated?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.4: Evaluate Gen AI applications using LLMs as judges  

#### Opciones:
- **A**: The tendency of judge LLMs to favor whichever model response is presented first; mitigated by evaluating pairs twice with swapped positions (A/B and B/A) and averaging results.
- **B**: The physical position of the server on the rack; mitigated by moving the server up.
- **C**: The position of the sun during model training.
- **D**: A bug that only occurs in the Southern Hemisphere.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The tendency of judge LLMs to favor whichever model response is presented first; mitigated by evaluating pairs twice with swapped positions (A/B and B/A) and averaging results.**

Position bias causes judges to prefer option 1 over option 2; swapping ordering (A/B vs B/A) cancels out positional preference.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Position bias is a cognitive attention artifact of LLMs, not physical server rack placement.
• **(C)**: Incorrect. Solar positions do not affect evaluation algorithms.
• **(D)**: Incorrect. The bias is independent of geographic hemisphere.

---

### Pregunta 344: What is **Verbosity Bias** in LLM judges and how is it controlled?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.4: Evaluate Gen AI applications using LLMs as judges  

#### Opciones:
- **A**: The tendency of judge LLMs to assign higher quality scores to longer, wordier responses regardless of factual correctness; controlled by explicit brevity rubrics and length penalties.
- **B**: The tendency of models to speak in French.
- **C**: A hardware error caused by low voltage.
- **D**: A feature that doubles the price of short queries.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The tendency of judge LLMs to assign higher quality scores to longer, wordier responses regardless of factual correctness; controlled by explicit brevity rubrics and length penalties.**

Verbosity bias leads judges to equate length with thoroughness; clear rubric instructions and length normalization penalize unnecessary fluff.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Verbosity bias relates to text length, not French language generation.
• **(C)**: Incorrect. It is an algorithmic evaluation bias, not a voltage error.
• **(D)**: Incorrect. It does not alter billing rates.

---

### Pregunta 345: How does **Self-Enhancement Bias (Self-Preference Bias)** affect LLM judges?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.4: Evaluate Gen AI applications using LLMs as judges  

#### Opciones:
- **A**: A judge model tends to give higher scores to responses generated by its own model family (e.g. GPT judging GPT higher than Llama); mitigated by using independent multi-model judge panels.
- **B**: The model buys gifts for itself online.
- **C**: The model refuses to evaluate other models.
- **D**: The model shuts down when it makes a mistake.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A judge model tends to give higher scores to responses generated by its own model family (e.g. GPT judging GPT higher than Llama); mitigated by using independent multi-model judge panels.**

Models recognize their own stylistic patterns and score them favorably; using an ensemble of judges from different model families counteracts this bias.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Models do not possess financial autonomy to make purchases.
• **(C)**: Incorrect. Models follow evaluation instructions reliably.
• **(D)**: Incorrect. Models do not shut down upon identifying errors.

---

### Pregunta 346: What are the essential components of a well-engineered **LLM Judge Evaluation Prompt / Rubric**?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.4: Evaluate Gen AI applications using LLMs as judges  

#### Opciones:
- **A**: Clear task description, explicit scoring criteria / numerical scale definitions (1 to 5), concrete few-shot examples for each score level, and a requirement to output step-by-step reasoning before the score.
- **B**: A single sentence asking: 'Is this response good? Yes or no.'
- **C**: A list of random jokes.
- **D**: An empty prompt with no instructions.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Clear task description, explicit scoring criteria / numerical scale definitions (1 to 5), concrete few-shot examples for each score level, and a requirement to output step-by-step reasoning before the score.**

Robust judge prompts define explicit criteria, score anchors, calibration examples, and require chain-of-thought justification before assigning a final score.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Vague 1-sentence prompts produce noisy, uncalibrated binary outputs.
• **(C)**: Incorrect. Jokes provide no evaluation guidance.
• **(D)**: Incorrect. Empty prompts leave the judge unguided.

---

### Pregunta 347: In Databricks Mosaic AI Agent Evaluation, how does the system provide transparent visibility into LLM-as-a-Judge scores?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.4: Evaluate Gen AI applications using LLMs as judges  

#### Opciones:
- **A**: It outputs a structured rationale alongside every metric score, highlighting the exact sentences in the retrieved context and generated answer that justified the rating.
- **B**: It hides all scores from developers.
- **C**: It deletes the evaluation run after 1 minute.
- **D**: It only outputs a single random boolean value.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It outputs a structured rationale alongside every metric score, highlighting the exact sentences in the retrieved context and generated answer that justified the rating.**

Databricks Agent Evaluation provides actionable chain-of-thought explanations and grounded citations for every automated quality score.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Scores and justifications are fully exposed in the MLflow Evaluation UI.
• **(C)**: Incorrect. Evaluations are logged persistently in Delta tables and MLflow.
• **(D)**: Incorrect. Structured multi-dimensional scores and text rationales are returned.

---

### Pregunta 348: When designing a unified metric logging architecture for diverse stakeholders (Engineers, Product Managers, Compliance Officers), what data should be captured in the central Delta table?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.5: Design a metric logging approach to monitor Gen AI applications across stakeholders  

#### Opciones:
- **A**: Technical metrics (latency, token usage, error codes), Quality scores (Groundedness, Relevance, Toxicity), and Business KPIs (User Thumbs Up/Down, session conversion, feedback tags).
- **B**: Only the developer's git commit history.
- **C**: Raw unformatted binary memory dumps.
- **D**: The computer mouse cursor coordinates.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Technical metrics (latency, token usage, error codes), Quality scores (Groundedness, Relevance, Toxicity), and Business KPIs (User Thumbs Up/Down, session conversion, feedback tags).**

A multi-stakeholder logging schema integrates operational telemetry, automated AI quality scores, and human business feedback into a centralized Lakehouse store.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Git commit history does not record production runtime query telemetry.
• **(C)**: Incorrect. Raw binary dumps are unqueryable for business analytics.
• **(D)**: Incorrect. Mouse coordinates provide no insight into backend AI quality.

---

### Pregunta 349: How do **Databricks Lakehouse Dashboards (AI/BI Dashboards)** leverage logged evaluation tables to serve executive stakeholders?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.5: Design a metric logging approach to monitor Gen AI applications across stakeholders  

#### Opciones:
- **A**: They provide interactive visualizations of quality trends, cost-per-department, SLA latency compliance, and customer satisfaction over time with automated scheduled refreshes.
- **B**: They print paper charts and mail them via post.
- **C**: They convert Delta tables into static PDF files that cannot be edited.
- **D**: They turn off the dashboard when executives log in.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They provide interactive visualizations of quality trends, cost-per-department, SLA latency compliance, and customer satisfaction over time with automated scheduled refreshes.**

AI/BI Dashboards provide real-time, interactive visual analytics over Unity Catalog Delta tables, delivering executive and operational insights.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Dashboards are digital and update dynamically in real-time.
• **(C)**: Incorrect. Lakehouse Dashboards are interactive and filterable, not static PDFs.
• **(D)**: Incorrect. Dashboards are secured for executive access via Unity Catalog RBAC.

---

### Pregunta 350: What privacy safeguard must be applied before logging raw production user prompt inputs and completions into shared Lakehouse metric tables?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.5: Design a metric logging approach to monitor Gen AI applications across stakeholders  

#### Opciones:
- **A**: Automated PII masking / de-identification and Unity Catalog Column Masking to prevent unauthorized employees from viewing sensitive customer data.
- **B**: Publishing the raw prompts on public company chat channels.
- **C**: Deleting the metric table every 5 minutes.
- **D**: Disabling all logging completely.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Automated PII masking / de-identification and Unity Catalog Column Masking to prevent unauthorized employees from viewing sensitive customer data.**

Redacting PII and enforcing Unity Catalog column masks protect customer privacy while allowing analytics over aggregated metric columns.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Publishing raw prompts violates privacy regulations.
• **(C)**: Incorrect. Deleting metric tables destroys historical trend analytics.
• **(D)**: Incorrect. Disabling logging eliminates operational visibility.

---

### Pregunta 351: How should automated alerts be configured on GenAI metric tables to notify engineering teams of critical incidents?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.5: Design a metric logging approach to monitor Gen AI applications across stakeholders  

#### Opciones:
- **A**: Databricks SQL Alerts configured on threshold conditions (e.g. `Groundedness < 0.70` or `5xx Error Rate > 2%` over a 5-minute rolling window), sending notifications via Slack/PagerDuty.
- **B**: Having an engineer watch the database table manually 24 hours a day without blinking.
- **C**: Sending a physical postcard whenever an error occurs.
- **D**: Alerts should never be set up.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Databricks SQL Alerts configured on threshold conditions (e.g. `Groundedness < 0.70` or `5xx Error Rate > 2%` over a 5-minute rolling window), sending notifications via Slack/PagerDuty.**

Databricks SQL Alerts evaluate SQL queries periodically and trigger instant notifications when key quality or availability thresholds are breached.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Manual 24/7 human watching is infeasible and error-prone.
• **(C)**: Incorrect. Postcards take days to arrive and cannot handle real-time incidents.
• **(D)**: Incorrect. Alerts are mandatory for production operational reliability.

---

### Pregunta 352: Why is it important to log the **Prompt Template Version ID** and **Model Serving Endpoint Version** alongside every production request record?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.5: Design a metric logging approach to monitor Gen AI applications across stakeholders  

#### Opciones:
- **A**: To enable A/B test comparison, version attribution, and longitudinal performance tracking between champion and challenger deployments.
- **B**: To delete historical logs automatically.
- **C**: To make Python scripts run on Java Virtual Machines.
- **D**: To encrypt the user's hard drive.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To enable A/B test comparison, version attribution, and longitudinal performance tracking between champion and challenger deployments.**

Capturing exact version identifiers allows data teams to isolate whether a sudden drop in quality was caused by a prompt update or a model rollout.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Version tracking preserves historical audit trails, not delete them.
• **(C)**: Incorrect. Logging version IDs does not alter runtime environments.
• **(D)**: Incorrect. Version tags are metadata columns, not encryption routines.

---

### Pregunta 353: In a multi-tenant enterprise GenAI deployment, which metadata field is critical for logging to enable cost chargebacks across departments?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.5: Design a metric logging approach to monitor Gen AI applications across stakeholders  

#### Opciones:
- **A**: `department_id` / `tenant_id` / `billing_cost_center`
- **B**: The color of the department's office chairs.
- **C**: The number of windows in the office building.
- **D**: The brand of coffee machine used by the team.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `department_id` / `tenant_id` / `billing_cost_center`**

Tagging requests with tenant or cost-center IDs allows finance teams to allocate token and GPU infrastructure costs accurately across business units.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Office chair color has no relationship to cloud infrastructure billing.
• **(C)**: Incorrect. Building window counts are facility specifications.
• **(D)**: Incorrect. Coffee machine brands do not track cloud consumption.

---

### Pregunta 354: What is an **Inference Table** in Databricks Model Serving?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.6: Set up and query inference tables to monitor a served LLM  

#### Opciones:
- **A**: An automated feature that captures incoming request payloads, outgoing model responses, latencies, and metadata into a Unity Catalog Delta table.
- **B**: A table in a physical conference room where engineers sit.
- **C**: A static CSV file that must be manually uploaded every month.
- **D**: A tool that deletes all serving endpoints.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An automated feature that captures incoming request payloads, outgoing model responses, latencies, and metadata into a Unity Catalog Delta table.**

Inference Tables provide managed, continuous capture of all production Model Serving traffic into Delta Lake for monitoring and auditing.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Inference Tables are software data structures in Delta Lake, not physical furniture.
• **(C)**: Incorrect. Inference Tables update automatically and continuously in real-time.
• **(D)**: Incorrect. Inference Tables observe endpoints without deleting them.

---

### Pregunta 355: How do you enable Inference Tables on an existing Databricks Model Serving endpoint?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.6: Set up and query inference tables to monitor a served LLM  

#### Opciones:
- **A**: Enable the **Inference Tables** toggle in the endpoint configuration UI (or via REST API / SDK), specifying the destination catalog and schema.
- **B**: Run an unencrypted C++ script on your personal laptop.
- **C**: Inference Tables cannot be enabled on existing endpoints.
- **D**: By deleting the serving endpoint.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Enable the **Inference Tables** toggle in the endpoint configuration UI (or via REST API / SDK), specifying the destination catalog and schema.**

Inference Tables can be toggled on directly in the endpoint settings, creating an auto-managed Delta table under the designated Unity Catalog schema.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. It is a native cloud-managed feature requiring no custom C++ scripts.
• **(C)**: Incorrect. Existing endpoints can have inference tables enabled dynamically without recreating them.
• **(D)**: Incorrect. Deleting the endpoint destroys the service.

---

### Pregunta 356: When querying an Inference Table in Databricks SQL, what format is typically used to store the raw request and response payloads in the Delta table?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.6: Set up and query inference tables to monitor a served LLM  

#### Opciones:
- **A**: JSON strings inside structured columns (`request` and `response`), which can be parsed using SQL functions like `from_json()` or `:` JSON extraction syntax.
- **B**: Encrypted unreadable machine binary.
- **C**: Hexadecimal numbers that cannot be decoded.
- **D**: Audio wave files.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) JSON strings inside structured columns (`request` and `response`), which can be parsed using SQL functions like `from_json()` or `:` JSON extraction syntax.**

Payloads are logged as structured JSON strings, allowing standard Databricks SQL JSON operators (`request:messages[0].content`) to query fields directly.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Payloads are standard JSON strings accessible to authorized users in Unity Catalog.
• **(C)**: Incorrect. JSON strings are human-readable text.
• **(D)**: Incorrect. Text payloads are stored as strings, not audio files.

---

### Pregunta 357: What SQL query parses user prompts and model completions from an inference table named `main.monitoring.rag_payloads`?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.6: Set up and query inference tables to monitor a served LLM  

#### Opciones:
- **A**: `SELECT date, request:messages[0].content AS user_prompt, response:choices[0].message.content AS model_response, status_code, execution_time_ms FROM main.monitoring.rag_payloads WHERE status_code = 200;`
- **B**: `DELETE FROM main.monitoring.rag_payloads;`
- **C**: `DROP TABLE main.monitoring.rag_payloads;`
- **D**: `SELECT * FROM nowhere;`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `SELECT date, request:messages[0].content AS user_prompt, response:choices[0].message.content AS model_response, status_code, execution_time_ms FROM main.monitoring.rag_payloads WHERE status_code = 200;`**

Using JSON path operators (`:`) extracts message contents cleanly from OpenAI-compatible request and response JSON schemas.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `DELETE` purges data from the table.
• **(C)**: Incorrect. `DROP TABLE` permanently destroys the table.
• **(D)**: Incorrect. Querying non-existent tables raises SQL syntax errors.

---

### Pregunta 358: How does **Lakehouse Monitoring** integrate with Inference Tables to detect quality and data drift automatically?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.6: Set up and query inference tables to monitor a served LLM  

#### Opciones:
- **A**: It monitors the Inference Table as a time-series or profile metric asset, automatically computing daily statistical profiles, drift metrics, and anomaly alerts.
- **B**: It downloads all inference tables to a USB thumb drive.
- **C**: It converts the inference table into a Microsoft Word document.
- **D**: It deletes all model weights.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It monitors the Inference Table as a time-series or profile metric asset, automatically computing daily statistical profiles, drift metrics, and anomaly alerts.**

Lakehouse Monitoring attaches directly to Inference Tables to generate automated data quality profiles, drift tracking, and executive dashboards.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Lakehouse Monitoring operates natively in the cloud Lakehouse without USB exports.
• **(C)**: Incorrect. It generates interactive Lakehouse dashboards, not static Word documents.
• **(D)**: Incorrect. It monitors data streams; it does not delete model weights.

---

### Pregunta 359: How are sensitive PII strings in Inference Tables governed when non-admin data analysts need to analyze traffic volume trends?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.6: Set up and query inference tables to monitor a served LLM  

#### Opciones:
- **A**: Unity Catalog Column Masking redacts the prompt text column for the analyst role while allowing access to non-sensitive columns (timestamp, token_count, status_code).
- **B**: By deleting the prompt column completely for all users.
- **C**: By giving all analysts full root administrator privileges.
- **D**: By making the inference table public to the entire internet.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Unity Catalog Column Masking redacts the prompt text column for the analyst role while allowing access to non-sensitive columns (timestamp, token_count, status_code).**

Column masking selectively hides prompt text while preserving numerical and operational metadata for trend analysis.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Dropping columns removes data needed by compliance and auditing teams.
• **(C)**: Incorrect. Granting root access violates security separation of duties.
• **(D)**: Incorrect. Exposing tables publicly causes severe data breaches.

---

### Pregunta 360: What constitutes a high-quality **Golden Evaluation Dataset** for an enterprise RAG application?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.7: Establish and execute a process for evaluating models on labeled ground truth dataset  

#### Opciones:
- **A**: A curated set of realistic, representative user queries paired with verified ground-truth answers, reference source document IDs, and edge-case negative queries reviewed by domain SMEs.
- **B**: 10,000 synthetic sentences generated in 1 second with no human review.
- **C**: A random list of dictionary words.
- **D**: A collection of Wikipedia articles with no questions.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A curated set of realistic, representative user queries paired with verified ground-truth answers, reference source document IDs, and edge-case negative queries reviewed by domain SMEs.**

A robust golden benchmark contains diverse real-world questions, verified ground truth answers, and edge cases curated by subject matter experts.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Unreviewed synthetic data often contains factual noise and lacks domain realism.
• **(C)**: Incorrect. Dictionary words do not represent real-world conversational user queries.
• **(D)**: Incorrect. Raw articles without question-answer pairs cannot benchmark QA systems.

---

### Pregunta 361: How do you run an automated evaluation of an MLflow model against a labeled evaluation dataset in Python?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.7: Establish and execute a process for evaluating models on labeled ground truth dataset  

#### Opciones:
- **A**: `eval_results = mlflow.evaluate(model=model_uri, data=eval_dataset, targets='ground_truth', model_type='question-answering', extra_metrics=[...])`
- **B**: `eval_results = mlflow.delete_all()`
- **C**: `eval_results = eval_dataset.drop_duplicates()`
- **D**: `eval_results = print('Done')`

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) `eval_results = mlflow.evaluate(model=model_uri, data=eval_dataset, targets='ground_truth', model_type='question-answering', extra_metrics=[...])`**

`mlflow.evaluate()` runs batch inference over the evaluation dataset, computes automated quality metrics against targets, and logs results to the MLflow Run.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. `delete_all()` does not perform evaluation.
• **(C)**: Incorrect. Dropping duplicates cleans data but does not score models.
• **(D)**: Incorrect. Printing 'Done' executes no evaluation code.

---

### Pregunta 362: Why should an evaluation dataset include **Negative Test Cases** (questions whose answers are intentionally absent from the knowledge corpus)?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.7: Establish and execute a process for evaluating models on labeled ground truth dataset  

#### Opciones:
- **A**: To evaluate whether the model adheres to grounding guardrails and correctly admits lack of knowledge rather than fabricating plausible hallucinations.
- **B**: To make the model fail every test.
- **C**: To slow down the evaluation run.
- **D**: To confuse the engineering team.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) To evaluate whether the model adheres to grounding guardrails and correctly admits lack of knowledge rather than fabricating plausible hallucinations.**

Negative test cases measure the model's resistance to hallucinating when asked out-of-domain or ungrounded questions.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The goal is to measure fallback behavior, not force failures.
• **(C)**: Incorrect. Evaluating negative cases takes minimal time.
• **(D)**: Incorrect. Negative cases provide essential safety benchmarks for engineers.

---

### Pregunta 363: What role does **Cross-Validation / Stratified Splitting** play when creating training and evaluation sets for fine-tuning LLMs?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.7: Establish and execute a process for evaluating models on labeled ground truth dataset  

#### Opciones:
- **A**: It ensures evaluation examples are strictly separated from training examples (preventing data contamination / memorization) and balanced across domain categories.
- **B**: It mixes test and training examples so the model gets 100% on the test.
- **C**: It deletes 90% of the dataset.
- **D**: It converts all text into uppercase.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It ensures evaluation examples are strictly separated from training examples (preventing data contamination / memorization) and balanced across domain categories.**

Rigorous splitting prevents data leakage/contamination, ensuring benchmark scores reflect genuine generalization rather than memorized test answers.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Contaminating test sets with training data creates falsely inflated, deceptive benchmark scores.
• **(C)**: Incorrect. Stratified splitting preserves dataset volume and proportions.
• **(D)**: Incorrect. Splitting partitions rows; it does not modify casing.

---

### Pregunta 364: How often should an enterprise golden evaluation dataset be updated in production?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.7: Establish and execute a process for evaluating models on labeled ground truth dataset  

#### Opciones:
- **A**: Continuously / Periodically, incorporating new real-world query patterns, emerging domain terminology, and failure cases identified from production monitoring and user feedback.
- **B**: Never (create once in 2020 and never change).
- **C**: Every 10 seconds.
- **D**: Delete the dataset after the first deployment.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Continuously / Periodically, incorporating new real-world query patterns, emerging domain terminology, and failure cases identified from production monitoring and user feedback.**

Evaluation datasets must evolve alongside real-world data drift, incorporating new product features and edge-case failure modes discovered in production.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Static benchmarks become obsolete as business domain facts change.
• **(C)**: Incorrect. 10-second updates are impractical and unnecessary.
• **(D)**: Incorrect. Deleting benchmarks prevents regression testing on future releases.

---

### Pregunta 365: What is **Data Contamination** in GenAI benchmarking and why is it dangerous?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.7: Establish and execute a process for evaluating models on labeled ground truth dataset  

#### Opciones:
- **A**: When benchmark evaluation questions and answers were included in the LLM's pre-training or fine-tuning dataset, causing deceptively high test scores that fail to reflect real-world generalization.
- **B**: When computer hardware gets dirty with dust.
- **C**: When water spills on a server.
- **D**: When a CSV file has missing commas.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) When benchmark evaluation questions and answers were included in the LLM's pre-training or fine-tuning dataset, causing deceptively high test scores that fail to reflect real-world generalization.**

Contaminated models achieve near-perfect benchmark scores through rote memorization while failing on unseen production customer queries.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Data contamination is an algorithmic dataset leakage issue, not physical dust.
• **(C)**: Incorrect. Physical spills are hardware accidents.
• **(D)**: Incorrect. Missing commas represent CSV parsing syntax errors.

---

### Pregunta 366: How does the **Databricks Review App** empower subject matter experts (SMEs) to improve agent performance without writing code?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.8: Use stakeholder feedback to improve agent performance using an agent framework  

#### Opciones:
- **A**: SMEs interact with prototype agents in a web chat interface, inspect retrieved document chunks and intermediate traces, and log structured ratings, corrections, and comments directly into Delta feedback tables.
- **B**: SMEs manually write Python compiler code in terminal.
- **C**: SMEs delete the model weights from the server.
- **D**: SMEs call the CEO on the phone.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) SMEs interact with prototype agents in a web chat interface, inspect retrieved document chunks and intermediate traces, and log structured ratings, corrections, and comments directly into Delta feedback tables.**

The Review App provides a no-code interactive interface for business stakeholders to validate answers, inspect source citations, and submit corrections.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The Review App is designed specifically for non-coding business domain experts.
• **(C)**: Incorrect. Reviewers test and provide feedback; they do not delete models.
• **(D)**: Incorrect. Digital feedback logging automates feedback collection directly into Delta Lake.

---

### Pregunta 367: What should engineers do with the human feedback and corrections collected in the Review App Delta table?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.8: Use stakeholder feedback to improve agent performance using an agent framework  

#### Opciones:
- **A**: Incorporate corrected query-answer pairs into the Golden Evaluation Benchmark and use them to refine prompt instructions, chunking strategies, and retrieval filters.
- **B**: Delete the feedback table immediately without reading it.
- **C**: Ignore stakeholder feedback and deploy the agent as-is.
- **D**: Email the feedback table to random external companies.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Incorporate corrected query-answer pairs into the Golden Evaluation Benchmark and use them to refine prompt instructions, chunking strategies, and retrieval filters.**

Human corrections serve as high-value ground-truth data to expand regression benchmarks and guide iterative engineering refinements.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting feedback wastes valuable domain expertise.
• **(C)**: Incorrect. Ignoring feedback results in failed enterprise adoption.
• **(D)**: Incorrect. Customer feedback contains proprietary information and must remain secured.

---

### Pregunta 368: When multiple business stakeholders provide contradictory feedback on an agent's tone (e.g. Sales wants conversational tone; Legal wants strict formal tone), how should this be resolved?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.8: Use stakeholder feedback to improve agent performance using an agent framework  

#### Opciones:
- **A**: Establish explicit persona guidelines with executive stakeholders, or design intent-based routing to apply formal tone for legal queries and conversational tone for sales queries.
- **B**: Delete both the sales and legal departments.
- **C**: Shut down the AI project permanently.
- **D**: Let the model generate random gibberish.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Establish explicit persona guidelines with executive stakeholders, or design intent-based routing to apply formal tone for legal queries and conversational tone for sales queries.**

Reconciling feedback through policy alignment or dynamic intent-based prompt routing delivers tailored tones for different functional domains.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Departmental deletion is impossible and destructive.
• **(C)**: Incorrect. Tone conflicts are normal software requirements resolved through clear policy.
• **(D)**: Incorrect. Generating gibberish fails all business requirements.

---

### Pregunta 369: How can **Reinforcement Learning from Human Feedback (RLHF) / Direct Preference Optimization (DPO)** utilize structured thumbs up/down comparison data?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.8: Use stakeholder feedback to improve agent performance using an agent framework  

#### Opciones:
- **A**: Pairwise preference pairs (preferred response vs rejected response) train a reward model or optimize policy weights to align LLM generation with human preferences.
- **B**: They turn off the GPU cluster.
- **C**: They translate all responses into ASCII art.
- **D**: They make the model forget all previous training data.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Pairwise preference pairs (preferred response vs rejected response) train a reward model or optimize policy weights to align LLM generation with human preferences.**

Pairwise human preference data trains reward models and DPO loss objectives, directly tuning model weights toward human-preferred outputs.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. RLHF is an active training workflow that consumes GPU compute.
• **(C)**: Incorrect. RLHF optimizes language generation, not ASCII art.
• **(D)**: Incorrect. Alignment refines behavior without catastrophic forgetting of core language capabilities.

---

### Pregunta 370: What role does the **Agent Framework SDK** play when syncing stakeholder feedback into automated MLflow evaluation runs?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.8: Use stakeholder feedback to improve agent performance using an agent framework  

#### Opciones:
- **A**: It provides programmatic APIs to query feedback Delta tables, convert user corrections into evaluation datasets, and trigger automated `mlflow.evaluate()` runs.
- **B**: It formats the computer hard drive.
- **C**: It replaces Python with HTML.
- **D**: It shuts down the Databricks workspace.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) It provides programmatic APIs to query feedback Delta tables, convert user corrections into evaluation datasets, and trigger automated `mlflow.evaluate()` runs.**

Agent Framework SDK automates the continuous feedback-to-evaluation pipeline, closing the loop between human testing and automated validation.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The SDK manages MLflow workflows and does not touch hard drive partitioning.
• **(C)**: Incorrect. Python is the native programming language of the Lakehouse.
• **(D)**: Incorrect. The SDK manages application lifecycles without shutting down workspaces.

---

### Pregunta 371: How does tracking the 'Resolution Rate' of stakeholder feedback tickets help project managers assess agent production readiness?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.8: Use stakeholder feedback to improve agent performance using an agent framework  

#### Opciones:
- **A**: A steady downward trend in open feedback defects indicates that the agent is converging on high quality and is ready for production release.
- **B**: It indicates that the project manager should change careers.
- **C**: It means the model has run out of tokens.
- **D**: It proves that human testing is unnecessary.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) A steady downward trend in open feedback defects indicates that the agent is converging on high quality and is ready for production release.**

Defect burn-down and high stakeholder satisfaction rates provide objective, quantifiable criteria for release readiness.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Defect metrics guide software engineering milestones.
• **(C)**: Incorrect. Defect tracking is unrelated to runtime token quotas.
• **(D)**: Incorrect. Stakeholder testing is critical for enterprise validation.

---

### Pregunta 372: A reviewer flags that the agent answered: 'The refund window is 60 days', which is incorrect. The reviewer notes that the actual policy is 30 days. Tracing shows the Vector Search retriever returned an outdated 2022 policy document instead of the 2025 policy document. What is the root cause and fix?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.9: Debug a GenAI application based on human feedback  

#### Opciones:
- **A**: **Root Cause**: Stale/Outdated retrieval index. **Fix**: Purge outdated 2022 documents from the Delta table, re-sync the Vector Search index, and add date metadata filters to prioritize current documents.
- **B**: **Root Cause**: Python syntax error. **Fix**: Upgrade to Python 4.0.
- **C**: **Root Cause**: The reviewer is lying. **Fix**: Ignore the reviewer.
- **D**: **Root Cause**: GPU failure. **Fix**: Replace all server hardware.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) **Root Cause**: Stale/Outdated retrieval index. **Fix**: Purge outdated 2022 documents from the Delta table, re-sync the Vector Search index, and add date metadata filters to prioritize current documents.**

The retrieval of stale documents is a data freshness issue; purging superseded files and applying recency filters ensures the agent retrieves current policies.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. The error was semantic data staleness, not a Python syntax crash.
• **(C)**: Incorrect. Stakeholder feedback identified a real factual failure that must be fixed.
• **(D)**: Incorrect. Hardware is functioning properly; the problem is knowledge base data freshness.

---

### Pregunta 373: A user feedback report states that the agent generates accurate technical facts but sounds rude, dismissive, and uses abrasive language. What component should be debugged and modified?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.9: Debug a GenAI application based on human feedback  

#### Opciones:
- **A**: The **System Prompt Persona and Tone Instructions**, adding explicit guidelines for professional, empathetic, and respectful communication.
- **B**: The Vector Search embedding dimension size.
- **C**: The database primary key index.
- **D**: The physical power supply of the server.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) The **System Prompt Persona and Tone Instructions**, adding explicit guidelines for professional, empathetic, and respectful communication.**

Conversational tone, empathy, and politeness are governed by the System Prompt instructions; adjusting persona constraints rectifies abrasive phrasing.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Embedding dimensions affect vector similarity, not conversational tone.
• **(C)**: Incorrect. Primary keys enforce relational integrity, not politeness.
• **(D)**: Incorrect. Power supplies do not control linguistic empathy.

---

### Pregunta 374: Reviewers report that when asking questions with bulleted lists, the agent fails to answer the 3rd and 4th bullets. Trace analysis reveals that the input prompt exceeded the model context window and truncated the trailing bullets. What is the fix?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.9: Debug a GenAI application based on human feedback  

#### Opciones:
- **A**: Switch to a model with a larger context window (e.g. 128k context) or implement query segmentation / prompt compression to avoid input truncation.
- **B**: Tell users they are only allowed to ask 1-word questions.
- **C**: Delete the 3rd and 4th bullets from user questions automatically.
- **D**: Disable the model serving endpoint.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Switch to a model with a larger context window (e.g. 128k context) or implement query segmentation / prompt compression to avoid input truncation.**

Context truncation occurs when payloads exceed window limits; expanding context capacity or compressing prompts ensures all query sub-parts are processed.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Restricting users to 1-word questions degrades usability.
• **(C)**: Incorrect. Silently dropping user bullets destroys question intent.
• **(D)**: Incorrect. Disabling endpoints creates service downtime.

---

### Pregunta 375: Stakeholder feedback indicates that an agent frequently invokes the `calculate_tax` tool with invalid argument types (passing strings instead of floats), causing tool execution crashes. How should this be debugged?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.9: Debug a GenAI application based on human feedback  

#### Opciones:
- **A**: Refine the Pydantic tool argument schema, improve tool docstrings with explicit type hints and examples, or add Pydantic type-coercion validation inside the tool wrapper.
- **B**: Delete the `calculate_tax` tool permanently.
- **C**: Ask the user to calculate their own taxes.
- **D**: Turn off the database server.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Refine the Pydantic tool argument schema, improve tool docstrings with explicit type hints and examples, or add Pydantic type-coercion validation inside the tool wrapper.**

LLMs rely on tool docstrings and parameter schemas to construct valid tool arguments; clarifying type descriptions and adding Pydantic coercion prevents argument mismatch crashes.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Deleting the tool removes critical tax calculation capabilities.
• **(C)**: Incorrect. The agent must automate the calculation as designed.
• **(D)**: Incorrect. Database servers are unrelated to tool argument schema validation.

---

### Pregunta 376: A legal reviewer flags that an agent provides answers that merge facts from two completely different customer contracts. Trace logs show the Vector Search index retrieved chunks from both contracts because no tenant filter was applied. What is the fix?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.9: Debug a GenAI application based on human feedback  

#### Opciones:
- **A**: Enforce strict metadata filtering (`filters={'customer_id': current_user_id}`) during Vector Search retrieval so chunks are isolated to the specific customer contract.
- **B**: Combine all customer contracts into a single massive document.
- **C**: Make all customer contracts public.
- **D**: Delete all contracts from the system.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Enforce strict metadata filtering (`filters={'customer_id': current_user_id}`) during Vector Search retrieval so chunks are isolated to the specific customer contract.**

Cross-tenant data contamination is resolved by enforcing strict metadata filtering on customer IDs during vector retrieval.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Combining contracts exacerbates cross-customer data leakage.
• **(C)**: Incorrect. Making contracts public causes a catastrophic confidentiality breach.
• **(D)**: Incorrect. Deleting contracts removes necessary business data.

---

### Pregunta 377: When debugging an agent that hallucinates source URLs that do not exist, what prompt engineering adjustment provides the strongest fix?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.9: Debug a GenAI application based on human feedback  

#### Opciones:
- **A**: Instruct the model: 'Cite ONLY URLs explicitly provided in the retrieved context metadata. Do not generate or assume any external URLs. If no URL is provided, omit the link.'
- **B**: Instruct the model to guess URLs from memory.
- **C**: Instruct the model to link to random commercial shopping websites.
- **D**: Remove all URLs from the knowledge base.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Instruct the model: 'Cite ONLY URLs explicitly provided in the retrieved context metadata. Do not generate or assume any external URLs. If no URL is provided, omit the link.'**

Strict negative constraints against fabricating links force the model to cite exclusively from verified metadata fields in retrieved chunks.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Guessing URLs guarantees broken links and hallucinations.
• **(C)**: Incorrect. Linking to random websites misleads users.
• **(D)**: Incorrect. Removing URLs prevents legitimate source citations.

---

### Pregunta 378: What is **Mosaic AI Agent Evaluation** in Databricks and what is its primary capability?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.10: Monitor an agent with Mosaic AI Agent Evaluation  

#### Opciones:
- **A**: An enterprise evaluation service that automatically benchmarks agent quality, cost, latency, and safety using proprietary calibrated LLM judges, integrated MLflow tracing, and Review App feedback.
- **B**: A video game for testing computers.
- **C**: A tool that converts Python scripts to HTML.
- **D**: A tool that deletes slow serving endpoints.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) An enterprise evaluation service that automatically benchmarks agent quality, cost, latency, and safety using proprietary calibrated LLM judges, integrated MLflow tracing, and Review App feedback.**

Mosaic AI Agent Evaluation provides end-to-end evaluation capabilities designed specifically for RAG and multi-agent systems in the Lakehouse.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. It is an enterprise AI evaluation service, not a video game.
• **(C)**: Incorrect. It does not convert Python to HTML.
• **(D)**: Incorrect. It evaluates performance without deleting endpoints.

---

### Pregunta 379: How does Mosaic AI Agent Evaluation evaluate **Retrieval Quality** independently from Generation Quality in a RAG system?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.10: Monitor an agent with Mosaic AI Agent Evaluation  

#### Opciones:
- **A**: By evaluating **Chunk Relevance** (did the retriever return chunks containing the answer?) separately from **Groundedness** (did the generator use those chunks accurately without hallucinating?).
- **B**: It cannot evaluate retrieval independently.
- **C**: By counting the number of characters in the database.
- **D**: By measuring the physical temperature of the hard drives.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) By evaluating **Chunk Relevance** (did the retriever return chunks containing the answer?) separately from **Groundedness** (did the generator use those chunks accurately without hallucinating?).**

Decoupling chunk relevance from groundedness allows engineers to diagnose whether bad answers stem from poor search retrieval or model hallucination.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Mosaic AI Agent Evaluation natively isolates retrieval and generation stages.
• **(C)**: Incorrect. Character count does not measure semantic retrieval relevance.
• **(D)**: Incorrect. Hardware temperature is unrelated to retrieval quality.

---

### Pregunta 380: What is the benefit of the **Calibrated Judges** included in Databricks Mosaic AI Agent Evaluation compared to raw uncalibrated open-source prompts?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.10: Monitor an agent with Mosaic AI Agent Evaluation  

#### Opciones:
- **A**: They are rigorously aligned and calibrated against thousands of human domain expert evaluations, minimizing judge bias and maximizing agreement with human SME ratings.
- **B**: They run in 0 seconds with zero compute.
- **C**: They make all models achieve 100% scores automatically.
- **D**: They translate all text into Spanish.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) They are rigorously aligned and calibrated against thousands of human domain expert evaluations, minimizing judge bias and maximizing agreement with human SME ratings.**

Calibrated judges are pre-tuned and validated against extensive human benchmarks, delivering dependable, human-aligned quality scores out of the box.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Automated judges require inference compute time.
• **(C)**: Incorrect. Calibrated judges assign realistic scores reflecting true quality, not fake 100% ratings.
• **(D)**: Incorrect. Judges support multilingual evaluation without forced translation.

---

### Pregunta 381: How does Mosaic AI Agent Evaluation integrate with **CI/CD Quality Gates** in Databricks?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.10: Monitor an agent with Mosaic AI Agent Evaluation  

#### Opciones:
- **A**: Evaluation runs can be executed programmatically in CI/CD pipelines; if quality metrics (e.g. Groundedness, Correctness) fall below defined thresholds, the pipeline automatically fails and blocks deployment.
- **B**: It sends an automated SMS to the CEO's personal phone.
- **C**: It deletes the git repository.
- **D**: It forces engineers to work on weekends.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Evaluation runs can be executed programmatically in CI/CD pipelines; if quality metrics (e.g. Groundedness, Correctness) fall below defined thresholds, the pipeline automatically fails and blocks deployment.**

Programmatic evaluation thresholds act as automated quality gates in CI/CD, preventing broken or regressed models from reaching production.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. CI/CD pipelines report status to build systems, not send personal SMS messages to executives.
• **(C)**: Incorrect. Failed builds block deployment without deleting repositories.
• **(D)**: Incorrect. Quality gates streamline engineering workflows.

---

### Pregunta 382: When Mosaic AI Agent Evaluation identifies that a RAG pipeline has high Retrieval Quality (relevant chunks are retrieved) but low Answer Correctness, what is the recommended engineering action?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.10: Monitor an agent with Mosaic AI Agent Evaluation  

#### Opciones:
- **A**: Optimize the Generation stage: refine System Prompt instructions, adjust few-shot exemplars, switch to a more capable LLM, or tune temperature settings.
- **B**: Rebuild the entire Vector Search index from scratch.
- **C**: Delete all source documents from Delta Lake.
- **D**: Shut down the entire Lakehouse workspace.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Optimize the Generation stage: refine System Prompt instructions, adjust few-shot exemplars, switch to a more capable LLM, or tune temperature settings.**

When retrieval succeeds but generation fails, the issue lies in prompt comprehension, model reasoning capacity, or temperature settings.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Rebuilding the vector index is unnecessary because retrieval is already proven successful.
• **(C)**: Incorrect. Source documents are accurate and should be preserved.
• **(D)**: Incorrect. Lakehouse workspaces operate normally.

---

### Pregunta 383: How do you automate continuous evaluation of live production requests logged in an Inference Table using Mosaic AI Agent Evaluation in Databricks?

**Dominio**: Domain 6: Evaluation and Monitoring  
**Subdominio**: Subdomain 6.10: Monitor an agent with Mosaic AI Agent Evaluation  

#### Opciones:
- **A**: Schedule a recurrent Delta Live Tables (DLT) or Databricks Workflow job that runs `mlflow.evaluate()` with configured LLM judges across newly landed inference table rows on an hourly or daily cadence.
- **B**: Manually open the database and read each row by eye every 5 minutes.
- **C**: Disable all logging so evaluation is not needed.
- **D**: Delete the inference table after every single query.

**Respuesta Correcta**: **A**

#### Explicación Oficial:
**Respuesta Correcta: (A) Schedule a recurrent Delta Live Tables (DLT) or Databricks Workflow job that runs `mlflow.evaluate()` with configured LLM judges across newly landed inference table rows on an hourly or daily cadence.**

Scheduling automated workflow jobs over Inference Tables ensures continuous evaluation of live production quality, groundedness, and toxicity trends.

**Análisis de opciones incorrectas:**
• **(B)**: Incorrect. Manual review cannot scale to thousands of live production queries.
• **(C)**: Incorrect. Disabling logging eliminates operational visibility and compliance audits.
• **(D)**: Incorrect. Deleting inference records destroys data needed for trend monitoring.

---

