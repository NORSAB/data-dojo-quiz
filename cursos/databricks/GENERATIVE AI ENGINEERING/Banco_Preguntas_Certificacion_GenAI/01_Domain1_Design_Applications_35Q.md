# Databricks Certified Generative AI Engineer Associate
## Domain 1: Design Applications (35 Preguntas)

> **Total de Preguntas en esta sección**: 35
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026

---

### Pregunta NaN: A developer needs an LLM to reliably return a strictly formatted JSON array of entity objects without conversational greetings or markdown fencing that could break downstream API ingestion. Which prompting strategy is most effective?

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

### Pregunta NaN: When designing a prompt that requires an XML output structure with custom tags `<summary>` and `<key_points>`, what is the most robust prompt design technique?

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

### Pregunta NaN: A prompt requires extracting financial figures into a CSV table. Which technique best prevents the LLM from adding explanatory commentary before the CSV headers?

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

### Pregunta NaN: You are building a prompt template in Databricks for a classification task where output must be strictly one of `['APPROVED', 'DENIED', 'MANUAL_REVIEW']`. How should this constraint be enforced?

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

### Pregunta NaN: In Databricks Mosaic AI Model Serving, what is the advantage of using JSON mode / Structured Outputs (`response_format={'type': 'json_object'}`) over simple text prompts?

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

### Pregunta NaN: Which prompt component is best suited for providing system-level operational guardrails and output format contracts?

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

### Pregunta NaN: A financial services firm wants to automatically categorize incoming support emails into 15 specific issue types and route them to teams. Which model task is most appropriate?

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

### Pregunta NaN: An enterprise wants to generate concise executive bullet points summarizing 50-page legal transcripts. Which model task should be selected?

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

### Pregunta NaN: A healthcare provider needs to extract patient names, medication dosages, and appointment dates from unstructured doctor notes into a Delta table. Which task is required?

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

### Pregunta NaN: An e-commerce company wants users to search product manuals using natural language questions and receive accurate answers with citations. Which architecture/task is best?

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

### Pregunta NaN: A compliance team needs to evaluate customer chat logs to identify toxic language, PII leaks, and hostile behavior. Which task is appropriate?

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

### Pregunta NaN: A software engineering team needs an AI assistant that writes unit tests based on provided Python function signatures and docstrings. What is the primary model task?

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

### Pregunta NaN: In LangChain / LCEL, what component is responsible for transforming a raw dictionary of user parameters into a formatted list of ChatMessages ready for an LLM?

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

### Pregunta NaN: Which LCEL component is typically piped at the end of a chain (`chain = prompt | model | output_parser`) to extract clean string content from an `AIMessage`?

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

### Pregunta NaN: When building a chain that takes a user query, retrieves relevant docs, and formats them into the prompt, what is the role of `RunnableParallel` or a dictionary in LCEL?

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

### Pregunta NaN: If an LLM application must return a Pydantic object with type validation, which LCEL output parser should be attached to the chain?

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

### Pregunta NaN: What is the purpose of a `RunnablePassthrough` component in an LCEL RAG chain?

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

### Pregunta NaN: When designing a conversational chain that maintains chat history, which component coordinates memory and history injection into the prompt template?

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

### Pregunta NaN: A business goal states: 'Allow internal agents to query HR policy PDFs and receive verified answers with page numbers'. How should the AI pipeline input and output be specified?

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

### Pregunta NaN: A call center requires: 'Real-time agent assistance suggesting next-best-action during customer calls'. What represents the correct pipeline interface?

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

### Pregunta NaN: A marketing team wants: 'Automated SEO article generation from product catalog entries'. What are the expected pipeline inputs and outputs?

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

### Pregunta NaN: An insurance claims automation goal is: 'Extract claim amount, loss date, policy number from scanned incident reports'. What is the pipeline signature?

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

### Pregunta NaN: A logistics company requires: 'An assistant that answers questions about warehouse inventory levels and triggers stock reorders if inventory < threshold'. What are the inputs/outputs?

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

### Pregunta NaN: When translating a business requirement into an MLflow Model Signature for a GenAI application, which format is standard on Databricks?

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

### Pregunta NaN: An AI agent must process loan applications: (1) Retrieve credit score, (2) Verify employment, (3) Disburse funds. To prevent unauthorized disbursement, how should tools be structured?

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

### Pregunta NaN: What is the primary role of tool docstrings/descriptions when defining tools for an OpenAI / Databricks Tool-Calling Agent?

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

### Pregunta NaN: When constructing an agent with a retrieval tool (`search_knowledge_base`) and a calculation tool (`python_calculator`), how does the agent execute multi-stage reasoning for 'What was the percentage revenue growth between 2024 and 2025?'

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

### Pregunta NaN: How does Databricks Unity Catalog govern tools used by AI Agents?

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

### Pregunta NaN: An agent must execute a multi-step database query. Why is it advantageous to give the agent a schema-inspection tool (`get_table_schema`) before a query-execution tool (`run_sql_query`)?

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

### Pregunta NaN: What prevents an agent in a multi-stage reasoning loop from getting stuck in an infinite tool-calling cycle?

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

### Pregunta NaN: When should a solution architect choose the **Knowledge Assistant** Agent Brick in Databricks Mosaic AI?

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

### Pregunta NaN: In what scenario is the **Multiagent Supervisor** pattern / Agent Brick the most appropriate design?

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

### Pregunta NaN: When should the **Information Extraction** Agent Brick be used instead of an open-ended conversational chat agent?

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

### Pregunta NaN: What is a primary benefit of using pre-built Databricks Agent Bricks compared to writing custom LangChain code from scratch?

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

### Pregunta NaN: How does an Information Extraction Agent Brick handle complex documents with nested tables and key-value pairs?

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

