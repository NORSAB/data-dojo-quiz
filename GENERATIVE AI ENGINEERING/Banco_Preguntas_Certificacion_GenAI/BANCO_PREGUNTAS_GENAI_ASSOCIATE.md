# Banco de Preguntas Oficial - Databricks Certified Generative AI Engineer Associate

> **Fuente**: CertSafari (Exámenes de Práctica Oficiales & Simulador V4)
> **Total de Preguntas**: 70
> **Fecha de Actualización**: Agosto 2026

---

## Pregunta 1 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> Which model task is primarily designed to convert textual data into a dense, numerical vector representation, which is useful for tasks like semantic search and clustering?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Embedding**
  - *Justificación*: Correct. Embedding is the process of converting textual data into dense, numerical vector representations. These vectors capture the semantic meaning of the text, making them ideal for downstream tasks like semantic search, clustering, and retrieval-augmented generation (RAG) where understanding context and similarity is crucial.

- **[INCORRECTA]** ❌ **Text Generation**
  - *Por qué es incorrecta*: Incorrect. Text generation is the task of producing new, human-like text based on an input prompt. While it uses internal vector representations, its primary output is text, not the vector itself for use in other applications.

- **[INCORRECTA]** ❌ **Tokenization**
  - *Por qué es incorrecta*: Incorrect. Tokenization is a crucial preprocessing step where text is broken down into smaller units called tokens (e.g., words or subwords). It is a necessary precursor to embedding but is not the process of creating the final dense numerical vector.

- **[INCORRECTA]** ❌ **Classification**
  - *Por qué es incorrecta*: Incorrect. Classification is a supervised learning task that assigns a predefined label or category to input text. While classification models may use embeddings internally, their primary function is to predict a category, not to output a vector representation for general use.

---

## Pregunta 2 (Domain 1: Design Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> When a developer provides the beginning of the desired output in the prompt (e.g., `{"name": `) to encourage the model to complete it in the same format, what is this technique commonly called?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Priming the response**
  - *Justificación*: Correct. This technique is known as priming the response. By providing the beginning of the desired output, the developer gives the model a strong cue to continue the pattern and complete the response in the specified format, such as completing a JSON object.

- **[INCORRECTA]** ❌ **Output parsing**
  - *Por qué es incorrecta*: Incorrect. Output parsing is the process of extracting and structuring data from the model's generated response after it has been produced. It is a post-processing step, not a technique used within the prompt to guide the format of the generation itself.

- **[INCORRECTA]** ❌ **Temperature scaling**
  - *Por qué es incorrecta*: Incorrect. Temperature scaling is a model parameter that controls the randomness and creativity of the output. A lower temperature makes the output more deterministic, while a higher temperature increases diversity. It does not relate to guiding the format via prompt structure.

- **[INCORRECTA]** ❌ **Prompt templating**
  - *Por qué es incorrecta*: Incorrect. Prompt templating involves creating a reusable prompt structure, often with placeholders that are dynamically filled with different inputs. While it helps standardize prompts, it does not specifically describe the technique of starting the model's output for it.

---

## Pregunta 3 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> Which of the following is the most critical first step when translating a business requirement into the necessary inputs and outputs for an AI pipeline?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Establishing a clear, unambiguous definition of the business problem and the desired, measurable outcome.**
  - *Justificación*: Correct. Establishing a clear, unambiguous definition of the business problem and the desired, measurable outcome is the most critical first step. This foundation guides all subsequent decisions, including data selection, model choice, evaluation metrics, and infrastructure, ensuring the AI pipeline aligns with business goals.

- **[INCORRECTA]** ❌ **Selecting the specific Large Language Model (LLM) based on its architecture and pre-training data to align with project scope.**
  - *Por qué es incorrecta*: Incorrect. Selecting a specific LLM based on architecture and pre-training data is a technical implementation detail that should occur later in the project lifecycle. Premature model selection without a clear business problem definition risks misalignment with actual needs.

- **[INCORRECTA]** ❌ **Provisioning the required cloud infrastructure and GPU clusters to support the anticipated data volume and model complexity.**
  - *Por qué es incorrecta*: Incorrect. Provisioning cloud infrastructure and GPU clusters is a necessary step for development and deployment, but it is not the first step. Infrastructure decisions depend on the defined problem, selected model, and expected workload, which are determined after the initial problem definition.

- **[INCORRECTA]** ❌ **Collecting all available company data and cleaning it within a central data lake to create a single, unified source of truth.**
  - *Por qué es incorrecta*: Incorrect. Collecting and cleaning all available company data in a central data lake is not the first step. Data collection must be guided by the well-defined business problem; gathering all data without a clear purpose is inefficient and may miss critical data points.

---

## Pregunta 4 (Domain 1: Design Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> An application needs to process unstructured text from customer feedback emails and extract specific pieces of information: the customer's name, the product they are referencing, and a sentiment score from 1 to 5. The extracted data must be returned as a JSON object to be stored in a structured database. Which set of components is best suited for this structured data extraction task?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A PromptTemplate with instructions and formatting examples for JSON output, an LLM, and a JsonOutputParser.**
  - *Justificación*: Correct. This is the ideal approach for structured data extraction. A `PromptTemplate` that includes clear instructions and formatting examples for JSON output guides the LLM to generate output in the desired JSON format. The `JsonOutputParser` then validates and parses the model's string output, ensuring it is a valid JSON object ready for ingestion into a structured database.

- **[INCORRECTA]** ❌ **A PromptTemplate that asks for a list of the name, product, and score, an LLM, and a CommaSeparatedListOutputParser.**
  - *Por qué es incorrecta*: Incorrect. A `CommaSeparatedListOutputParser` is designed to parse a simple list of strings, not a structured JSON object with key-value pairs. This output format does not match the requirement to store the data with distinct fields for name, product, and sentiment score.

- **[INCORRECTA]** ❌ **A VectorStoreRetriever to find similar emails for context, an LLM to extract the required fields, and a StrOutputParser.**
  - *Por qué es incorrecta*: Incorrect. A `VectorStoreRetriever` is used for retrieval-augmented generation (RAG) to find relevant documents from a larger corpus, which is unnecessary for extracting information from a single, provided text. Furthermore, a `StrOutputParser` simply returns the model's raw string output, which does not guarantee a well-formed JSON structure.

- **[INCORRECTA]** ❌ **A ChatPromptTemplate instructing a ChatModel to extract the name, product, and score, combined with a simple StrOutputParser.**
  - *Por qué es incorrecta*: Incorrect. Although a `ChatModel` can be prompted to produce JSON, relying on a simple `StrOutputParser` is not reliable. This parser does not validate or enforce the JSON structure, meaning the application could fail if the model's output deviates even slightly from the expected format.

---

## Pregunta 5 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A data scientist is debugging a RAG system's retriever. The evaluation shows a very high `context_precision` score but a very low `context_recall` score. The goal of the system is to find all documents pertaining to a specific project code. What issue do these metrics suggest?

### Opciones y Análisis

- **[CORRECTA]** ✅ **The retriever is too restrictive, finding only a few highly relevant documents while missing many other relevant ones.**
  - *Justificación*: Correct. This scenario perfectly describes the combination of high `context_precision` and low `context_recall`. High precision means the documents that were retrieved are indeed relevant. Low recall means that many other relevant documents that exist in the knowledge base were not retrieved. This indicates the retriever is too restrictive, likely due to a high similarity threshold or a query that is too narrow, causing it to find a small set of correct documents while missing the larger set of all relevant documents.

- **[INCORRECTA]** ❌ **The retriever is returning many irrelevant documents in addition to the correct ones.**
  - *Por qué es incorrecta*: Incorrect. A high `context_precision` score indicates that the documents that are retrieved are highly relevant to the query. Returning many irrelevant documents would result in a low `context_precision` score.

- **[INCORRECTA]** ❌ **The LLM is generating answers that are not relevant to the user's initial question.**
  - *Por qué es incorrecta*: Incorrect. The metrics `context_precision` and `context_recall` are used to evaluate the performance of the retriever component of a RAG system, not the generator (LLM) component. These metrics measure the quality of the context provided to the LLM, not the quality of the LLM's final generated answer.

- **[INCORRECTA]** ❌ **The document chunking strategy is creating chunks that are too small to be useful.**
  - *Por qué es incorrecta*: Incorrect. While the document chunking strategy can significantly impact retrieval performance, this specific pattern of high precision and low recall points more directly to the retrieval algorithm's behavior. A chunking issue might cause a variety of problems, including low scores on both metrics, but it doesn't uniquely explain why the retriever is accurate but not comprehensive.

---

## Pregunta 6 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> Why is a collection of structured documents, such as JSON files or well-formatted Markdown, generally preferred over a set of scanned, image-based PDFs for a RAG application's knowledge base?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Structured formats enable more reliable text extraction and preservation of metadata, leading to better chunking and retrieval.**
  - *Justificación*: Correct. Structured formats like JSON and Markdown allow for near-perfect, reliable text extraction. They also preserve inherent structure and metadata (e.g., keys in JSON, headings in Markdown), which can be leveraged to create more contextually-aware and effective data chunks. This leads to higher quality embeddings and significantly better retrieval performance in a RAG system.

- **[INCORRECTA]** ❌ **Scanned PDFs are universally smaller in file size, which speeds up processing.**
  - *Por qué es incorrecta*: Incorrect. Scanned, image-based PDFs are typically much larger in file size than their text-based counterparts (like JSON or Markdown) because they store pixel data for the entire page image. This larger size generally slows down, rather than speeds up, processing and ingestion.

- **[INCORRECTA]** ❌ **Image-based PDFs can be directly indexed by vector databases without an Optical Character Recognition (OCR) step.**
  - *Por qué es incorrecta*: Incorrect. This is the opposite of how the process works. Image-based PDFs contain images of text, not machine-readable text. They absolutely require an Optical Character Recognition (OCR) step to convert the images into text before they can be processed, chunked, and indexed by a vector database. This OCR process adds complexity and is a common source of errors.

- **[INCORRECTA]** ❌ **JSON and Markdown files are inherently more secure than PDF files.**
  - *Por qué es incorrecta*: Incorrect. While certain file formats can have different security considerations, security is primarily determined by system-level controls, access policies, and encryption, not the file format itself. The preference for structured text in a RAG context is overwhelmingly based on data quality, reliability, and processing efficiency, not an inherent security advantage.

---

## Pregunta 7 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> When writing a DataFrame of chunked text to a Delta Lake table using a three-level namespace (e.g., `catalog.schema.table`), what is the primary role of Unity Catalog in this operation?

### Opciones y Análisis

- **[CORRECTA]** ✅ **To provide a centralized governance, metastore, and access control layer for the table being created.**
  - *Justificación*: Correct. This is the primary function of Unity Catalog. When a DataFrame is written using the three-level namespace, Unity Catalog acts as the central metastore to manage the table's schema and location. It also enforces governance policies, provides fine-grained access control (via `GRANT`/`REVOKE`), and captures data lineage for the operation.

- **[INCORRECTA]** ❌ **To chunk the raw text files before they are converted into a DataFrame.**
  - *Por qué es incorrecta*: Incorrect. Unity Catalog does not perform data transformation or processing tasks like chunking. Chunking is a pre-processing step handled by application code (e.g., using libraries like LangChain or spaCy) before the data is written to a DataFrame.

- **[INCORRECTA]** ❌ **To automatically generate vector embeddings for the text chunks during the write operation.**
  - *Por qué es incorrecta*: Incorrect. Generating vector embeddings is a computational, ML-related task performed using embedding models. This operation is part of the data preparation or feature engineering pipeline and is entirely outside the scope of Unity Catalog's metadata and governance responsibilities.

- **[INCORRECTA]** ❌ **To optimize the physical storage layout of the Parquet files on cloud storage.**
  - *Por qué es incorrecta*: Incorrect. The optimization of the physical storage layout (e.g., compaction of Parquet files, Z-Ordering) is a core feature of the Delta Lake storage format and the Databricks runtime, not Unity Catalog. Unity Catalog manages the metadata about the table, not the physical arrangement of its underlying data files.

---

## Pregunta 8 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> An engineer needs to build an application that first summarizes a long article, then extracts key entities from that summary, and finally generates a social media post based on the extracted entities. The output of each step must be the input for the next. Which agent framework concept is best suited for creating this specific, ordered workflow?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A Sequential Chain, which orchestrates a series of calls in a predefined order.**
  - *Justificación*: Correct. A Sequential Chain is specifically designed to execute a series of components (like LLM calls or functions) in a fixed, predetermined order. Crucially, it automatically passes the output of one step as the input to the subsequent step, which perfectly matches the requirements of summarizing, then extracting, then generating.

- **[INCORRECTA]** ❌ **A ReAct Agent, which can decide on its own which tool to use next.**
  - *Por qué es incorrecta*: Incorrect. A ReAct (Reasoning and Acting) Agent is designed for dynamic decision-making. It uses a loop of reasoning and acting to decide which tool to use next based on the current context and goal. This is ideal for complex, unpredictable tasks, but not for a simple, strictly defined, linear workflow as described in the question.

- **[INCORRECTA]** ❌ **A custom Tool that contains the logic for all three steps in a single function.**
  - *Por qué es incorrecta*: Incorrect. While technically possible, creating a single monolithic tool for all three steps goes against the principles of agent framework design, which favor modularity, reusability, and clarity. This approach would be less flexible and harder to maintain compared to orchestrating discrete components with a chain.

- **[INCORRECTA]** ❌ **A Vector Store Retriever that fetches relevant documents for each step.**
  - *Por qué es incorrecta*: Incorrect. A Vector Store Retriever's purpose is to fetch relevant documents or data chunks from a vector database based on a query. It is a component used for information retrieval (like in RAG), not for orchestrating a sequence of processing tasks.

---

## Pregunta 9 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A developer is building a customer service chatbot that needs to recall the user's name and previous questions within the same conversation to provide a more personalized and coherent experience. Which LangChain component should be integrated into the application to achieve this stateful behavior?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Memory**
  - *Justificación*: Correct. Memory components in LangChain are specifically designed to maintain the state of a conversation. They store and recall previous interactions, such as user questions and assistant responses, enabling the application to have context-aware, personalized, and coherent conversations over multiple turns.

- **[INCORRECTA]** ❌ **Output Parsers**
  - *Por qué es incorrecta*: Incorrect. Output Parsers are responsible for structuring the raw text output from a language model into a more usable format (e.g., JSON, a list, or a custom object). They do not manage or store the history or state of a conversation.

- **[INCORRECTA]** ❌ **Document Loaders**
  - *Por qué es incorrecta*: Incorrect. Document Loaders are used for ingesting data from various sources (like text files, PDFs, or web pages) into a format that can be processed by other LangChain components, typically for Retrieval-Augmented Generation (RAG). They do not manage the dynamic state of a conversation.

- **[INCORRECTA]** ❌ **Prompt Templates**
  - *Por qué es incorrecta*: Incorrect. Prompt Templates are used to create reusable, structured prompts for language models. While conversation history from a Memory component is often inserted into a prompt template, the template itself is a stateless component and is not responsible for storing or recalling that history.

---

## Pregunta 10 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A developer is building a chatbot to answer questions from a company's internal knowledge base, which consists of well-structured markdown documents with clear headings, subheadings, and code blocks. The goal is to retrieve sections that are self-contained and contextually complete. Which chunking strategy is best suited for this type of document structure?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A recursive character splitting strategy that uses markdown headers and paragraph breaks as primary separators.**
  - *Justificación*: Correct. This strategy is ideal for well-structured documents like markdown. It leverages the inherent logical structure (headers, subheadings, paragraphs) as separators to create chunks that are naturally self-contained and contextually complete. This alignment with the document's structure significantly improves the relevance and accuracy of the retrieval system.

- **[INCORRECTA]** ❌ **A fixed-size chunking strategy that ignores all markdown formatting.**
  - *Por qué es incorrecta*: Incorrect. A fixed-size chunking strategy completely ignores the logical structure provided by markdown formatting. This will arbitrarily split content across important semantic boundaries like headings, paragraphs, and code blocks, resulting in chunks that are not contextually complete and reducing retrieval effectiveness.

- **[INCORRECTA]** ❌ **A semantic chunking strategy that relies solely on embedding similarity, ignoring the document's explicit structure.**
  - *Por qué es incorrecta*: Incorrect. While semantic chunking can be powerful, relying solely on embedding similarity and ignoring the document's explicit structure is suboptimal in this case. The markdown formatting provides clear, human-defined contextual boundaries that this approach would overlook, potentially leading to less coherent chunks.

- **[INCORRECTA]** ❌ **Chunking each document into a single large chunk to preserve all information at once.**
  - *Por qué es incorrecta*: Incorrect. Treating an entire document as a single chunk is highly inefficient for a RAG system. This approach lacks the necessary granularity to pinpoint specific information for the chatbot. Furthermore, large chunks can exceed the model's context window or overwhelm it with irrelevant information, leading to poor-quality answers.

---

## Pregunta 11 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A startup is creating a mobile application that provides real-time language translation. The application must perform translations directly on the user's device without a constant internet connection. Due to the hardware limitations of mobile devices, which model characteristics should be prioritized during selection?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Small memory footprint and fast inference speed.**
  - *Justificación*: Correct. For an application running on a mobile device without an internet connection, efficiency is paramount. A small memory footprint ensures the model can run within the device's limited RAM, while fast inference speed is crucial for providing the 'real-time' translation experience required by the user.

- **[INCORRECTA]** ❌ **Large parameter count and maximum reasoning ability.**
  - *Por qué es incorrecta*: Incorrect. Models with a large parameter count and high reasoning ability require significant computational resources and memory. These characteristics are unsuitable for on-device applications on mobile phones, which have limited hardware capabilities.

- **[INCORRECTA]** ❌ **Support for multi-turn conversations and long context windows.**
  - *Por qué es incorrecta*: Incorrect. Multi-turn conversation support and long context windows are features designed for chatbot-like applications. For real-time, single-instance translation, these features are not a priority and would consume unnecessary memory and processing power, hindering performance.

- **[INCORRECTA]** ❌ **The model's reputation and popularity on leaderboards.**
  - *Por qué es incorrecta*: Incorrect. A model's popularity or high ranking on general leaderboards does not guarantee its suitability for a specific, resource-constrained use case. Practical characteristics related to on-device performance are far more important than general benchmarks.

---

## Pregunta 12 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A development team is building a model to translate technical user manuals from English to Spanish. Which of the following metrics is the standard and most widely used for automatically evaluating the quality of this machine translation task by comparing the generated translation to one or more reference translations?

### Opciones y Análisis

- **[CORRECTA]** ✅ **BLEU**
  - *Justificación*: Correct. BLEU (Bilingual Evaluation Understudy) is the standard and most widely used metric for evaluating the quality of machine translation. It works by measuring the precision of n-grams (contiguous sequences of n items) in the machine-generated translation against one or more high-quality reference translations.

- **[INCORRECTA]** ❌ **ROUGE**
  - *Por qué es incorrecta*: Incorrect. ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is primarily used for evaluating automatic summarization tasks. While it also compares n-gram overlap, its recall-oriented nature makes it better suited for tasks where capturing all key information from a source is important, which is different from the goal of machine translation.

- **[INCORRECTA]** ❌ **F1-Score**
  - *Por qué es incorrecta*: Incorrect. The F1-Score is a common metric for binary and multi-class classification tasks. It calculates the harmonic mean of precision and recall, providing a single score that balances both. It is not designed to evaluate the quality or fluency of generated text like a translation.

- **[INCORRECTA]** ❌ **Toxicity**
  - *Por qué es incorrecta*: Incorrect. Toxicity is a metric used in content moderation to evaluate the presence of harmful, offensive, or otherwise inappropriate content in a generated text. It does not measure the accuracy, fluency, or quality of a translation from one language to another.

---

## Pregunta 13 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A GenAI engineer is setting up the monitoring phase for a newly deployed summarization tool. They need to select metrics and signals that are exclusively or primarily collected during the monitoring phase, rather than the pre-deployment evaluation phase. Which two signals are primarily collected during the monitoring phase of the Gen AI application life cycle?

### Opciones y Análisis

- **[CORRECTA]** ✅ ****
  - *Justificación*: 

- **[INCORRECTA]** ❌ **Exact match accuracy against a static ground-truth dataset.**
  - *Por qué es incorrecta*: Incorrect. Exact match accuracy against a static ground-truth dataset is a classic pre-deployment evaluation metric. It is computed offline on labeled test or validation data to assess a model's performance baseline before it is deployed.

- **[INCORRECTA]** ❌ **LLM-as-a-judge grading on a curated golden dataset.**
  - *Por qué es incorrecta*: Incorrect. LLM-as-a-judge grading on a curated golden dataset is typically a pre-deployment evaluation technique. It is used to evaluate the performance of a candidate model against high-quality reference examples in a controlled, offline setting.

- **[INCORRECTA]** ❌ **ROUGE-L scores calculated on a holdout validation set.**
  - *Por qué es incorrecta*: Incorrect. ROUGE-L scores calculated on holdout validation sets are standard offline evaluation metrics for summarization. They are used to compare model-generated summaries against reference summaries during the model development and selection phases.

---

## Pregunta 14 (Domain 1: Design Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A developer needs to extract structured information from unstructured customer reviews. The initial prompt `Summarize this review:` returns a free-text paragraph. The developer needs the output in a machine-readable format to load into a database. Which prompt is best designed to adjust the LLM's response to the desired structured format?

### Opciones y Análisis

- **[CORRECTA]** ✅ **From the following review, extract the product mentioned, the main issue, and the customer's location. Provide the output as a JSON object with the keys 'product_name', 'issue_description', and 'location'.**
  - *Justificación*: Correct. This prompt explicitly instructs the LLM to extract specific fields (product, issue, location) and output them as a JSON object with defined keys. This ensures the response is structured, predictable, and machine-readable, ideal for loading directly into a database.

- **[INCORRECTA]** ❌ **Please organize the summary of this review into clear sections, such as product details, customer sentiment, and key issues, and then output the result as a structured JSON object with keys like 'product_name', 'sentiment'.**
  - *Por qué es incorrecta*: Incorrect. Although this prompt requests a structured JSON output, it still focuses on organizing a summary into sections rather than extracting specific, discrete fields. The keys like 'product_name' and 'sentiment' are mentioned, but the instruction to 'organize the summary' may lead to nested or free-text values instead of clean, machine-readable data suitable for direct database ingestion.

- **[INCORRECTA]** ❌ **What is the overall sentiment of this review? Analyze the text to determine whether the customer's tone is positive, negative, or neutral, and then output the result as a JSON object with the key 'sentiment' containing the single label.**
  - *Por qué es incorrecta*: Incorrect. This prompt only asks for a single sentiment label, which is too narrow for extracting multiple structured fields from a review. While it does specify a JSON output, it fails to capture other important information like product name or issues, making it insufficient for a comprehensive structured extraction.

- **[INCORRECTA]** ❌ **Rewrite the summary of this review to be more concise and factual, then structure the output as a JSON object with keys like 'summary' and 'key_points', where 'key_points' is an array of the most important facts.**
  - *Por qué es incorrecta*: Incorrect. This prompt focuses on rewriting the summary to be more concise and factual, but it does not shift the output from a free-text paragraph to a truly structured format. Even though it requests a JSON object, the values are still narrative text ('summary' and 'key_points'), which may not be as directly machine-parseable as discrete field extractions.

---

## Pregunta 15 (Domain 5: Governance)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> What is the primary purpose of an input guardrail in a large language model (LLM) application?

### Opciones y Análisis

- **[CORRECTA]** ✅ **To check user prompts for harmful content, prompt injections, or policy violations before they are sent to the LLM.**
  - *Justificación*: Correct. The primary purpose of an input guardrail is to act as a preventative filter, scanning user prompts for harmful content, prompt injections, or policy violations before they are processed by the LLM.

- **[INCORRECTA]** ❌ **To ensure the LLM's response is formatted correctly by validating its structure, such as for valid JSON or XML, after generation.**
  - *Por qué es incorrecta*: Incorrect. This describes an output guardrail or response validation step that occurs after the LLM generates text. Input guardrails focus on the user's prompt before it reaches the model, not on the structure of the final response.

- **[INCORRECTA]** ❌ **To log the LLM's output for later analysis by storing each generated response and its corresponding user prompt in a data warehouse.**
  - *Por qué es incorrecta*: Incorrect. Logging responses and prompts is a monitoring or auditing function, not an input guardrail. Input guardrails are active, real-time checks on incoming prompts, whereas logging is a passive data collection mechanism for later analysis.

- **[INCORRECTA]** ❌ **To limit the number of tokens in the LLM's final response to control costs by setting a `max_tokens` parameter in the API call.**
  - *Por qué es incorrecta*: Incorrect. Limiting response tokens via `max_tokens` is an output control for cost management, not an input guardrail. Input guardrails inspect the content of the user's prompt, not the length of the model's reply.

---

## Pregunta 16 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> In a well-documented model card, what is the primary purpose of the 'Biases and Limitations' section?

### Opciones y Análisis

- **[CORRECTA]** ✅ **To inform users about potential ethical risks, unintended behaviors, and performance weaknesses.**
  - *Justificación*: Correct. This section is a key part of responsible AI documentation. Its primary purpose is to transparently communicate ethical risks, unintended behaviors, and performance weaknesses so users can make informed decisions and apply appropriate safeguards.

- **[INCORRECTA]** ❌ **To provide the command-line interface for running model inference, including required arguments and output formats.**
  - *Por qué es incorrecta*: Incorrect. The 'Biases and Limitations' section is not intended for technical usage instructions. Details like command-line interfaces and output formats belong in sections such as 'Usage' or 'Quick Start'.

- **[INCORRECTA]** ❌ **To describe the model's performance metrics on standard benchmarks, detailing accuracy and F1 scores for key tasks.**
  - *Por qué es incorrecta*: Incorrect. While performance metrics like accuracy and F1 scores are important, they are typically reported in an 'Evaluation' or 'Performance' section. The 'Biases and Limitations' section focuses on qualitative risks and weaknesses rather than benchmark results.

- **[INCORRECTA]** ❌ **To list the hardware specifications required for training, such as the necessary GPU type and total VRAM capacity.**
  - *Por qué es incorrecta*: Incorrect. Hardware specifications for training, such as GPU type and VRAM, are usually documented in a 'Training Details' or 'Technical Specifications' section. They are separate from the discussion of biases and limitations.

---

## Pregunta 17 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> An engineer is logging a RAG application to the MLflow Model Registry. They want to ensure that the model's page in the Databricks UI includes a sample query in the correct format, making it easier for colleagues to test the endpoint. Which argument should they include in the `mlflow.pyfunc.log_model()` call?

### Opciones y Análisis

- **[CORRECTA]** ✅ **input_example**
  - *Justificación*: Correct. The `input_example` argument is specifically designed to log a sample input (e.g., a Pandas DataFrame or a dictionary) along with the model. This example is then displayed in the Databricks Model Registry UI, allowing users to easily understand the expected input format and test the model endpoint directly.

- **[INCORRECTA]** ❌ **signature**
  - *Por qué es incorrecta*: Incorrect. The `signature` argument defines the schema (data types, names, and shapes) of the model's inputs and outputs. It is used for validation and inference enforcement, but it does not provide a concrete, testable example query in the UI.

- **[INCORRECTA]** ❌ **dependencies**
  - *Por qué es incorrecta*: Incorrect. The `dependencies` argument is used to specify the external libraries and packages required for the model's environment to run correctly, such as those listed in a `conda.yaml` or `requirements.txt` file. It does not relate to sample input data.

- **[INCORRECTA]** ❌ **retriever**
  - *Por qué es incorrecta*: Incorrect. A `retriever` is a fundamental component of a RAG application responsible for fetching relevant documents. However, it is part of the model's internal logic, not a standard argument for the generic `mlflow.pyfunc.log_model()` function.

---

## Pregunta 18 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A financial services company is deploying a fraud detection model on a Databricks model serving endpoint. This model needs to query an external risk assessment API that requires a highly sensitive API key. What is the most secure and recommended method for providing this API key to the model?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Store the API key in a Databricks secret scope and configure the endpoint to expose it as an environment variable.**
  - *Justificación*: Correct. This is the most secure and recommended method on Databricks. Databricks secret scopes are specifically designed to securely store and manage sensitive information like API keys, providing encryption and fine-grained access control. Configuring the model serving endpoint to securely fetch the secret and expose it as an environment variable to the model container keeps the credential out of the model's code and logs, minimizing the risk of exposure.

- **[INCORRECTA]** ❌ **Hardcode the API key directly into the model's prediction script before logging it to MLflow.**
  - *Por qué es incorrecta*: Incorrect. Hardcoding sensitive credentials like an API key directly into source code is a major security anti-pattern. It exposes the key in plain text within the code artifact, making it vulnerable to exposure in code repositories, logs, or to anyone with access to the code.

- **[INCORRECTA]** ❌ **Pass the API key as a plain-text environment variable in the model serving endpoint configuration.**
  - *Por qué es incorrecta*: Incorrect. While this approach decouples the key from the code, passing it as a plain-text environment variable in the endpoint configuration is still insecure. The plain-text value can be exposed in the UI, configuration files, or logs, and it lacks the encryption and robust access control features provided by a dedicated secrets management system like Databricks secret scopes.

- **[INCORRECTA]** ❌ **Store the API key in a Unity Catalog table and grant the endpoint's service principal SELECT access to that table.**
  - *Por qué es incorrecta*: Incorrect. While Unity Catalog provides strong access control for data assets, it is not designed or recommended for managing secrets like API keys. Using a table for this purpose is an anti-pattern. A dedicated secrets management tool, like Databricks secret scopes, is the appropriate and more secure choice for handling sensitive credentials.

---

## Pregunta 19 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> An engineering team is designing a Vector Search index for a table containing product descriptions. The source Delta table has the columns `product_id`, `description`, `embedding_vector`, and `category`. When creating the index, which column must be designated as the primary key?

### Opciones y Análisis

- **[CORRECTA]** ✅ **`product_id`, because it uniquely identifies each row.**
  - *Justificación*: Correct. When creating a Databricks Vector Search index, a primary key column must be specified. This column must uniquely identify each row in the source Delta table. The `product_id` column is explicitly designed for this purpose, serving as the unique identifier for each product and its corresponding row.

- **[INCORRECTA]** ❌ **`description`, because it contains the source text.**
  - *Por qué es incorrecta*: Incorrect. While the `description` column contains the source text for the embeddings, it is not suitable as a primary key. A primary key must contain a unique value for each record, and text descriptions are highly unlikely to be unique across all products.

- **[INCORRECTA]** ❌ **`embedding_vector`, because it is the column being indexed.**
  - *Por qué es incorrecta*: Incorrect. The `embedding_vector` column contains the vector data that is indexed for similarity search. However, the primary key's function is to uniquely identify the row, not to be the data that is searched. The system uses the primary key to link a found vector back to its original record.

- **[INCORRECTA]** ❌ **`category`, because it will be used for filtering.**
  - *Por qué es incorrecta*: Incorrect. The `category` column is a classification attribute and will contain duplicate values for products within the same category. A primary key requires unique values for every row, making `category` an unsuitable choice.

---

## Pregunta 20 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A company is building a chatbot to answer questions based on its internal knowledge base, which is updated several times a day. The engineering team has a Delta Table that is continuously updated with new document chunks and their embeddings. To ensure the chatbot always provides answers based on the latest information with minimal operational overhead, which Vector Search Index configuration should they choose?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A Delta Sync Index pointing to the source Delta Table.**
  - *Justificación*: Correct. A Delta Sync Index is specifically designed for this use case. It automatically and incrementally synchronizes with a source Delta Table, ensuring that any changes (inserts, updates, deletes) in the table are reflected in the index with low latency. This provides the most up-to-date information with minimal operational overhead.

- **[INCORRECTA]** ❌ **A Direct Vector Access Index with a nightly batch job to upsert new vectors.**
  - *Por qué es incorrecta*: Incorrect. A Direct Vector Access Index requires manual updates via API calls. Relying on a nightly batch job introduces significant latency (up to 24 hours), which fails the requirement to provide answers based on the latest information from a source that is updated several times a day.

- **[INCORRECTA]** ❌ **A new Vector Search Endpoint for each version of the knowledge base.**
  - *Por qué es incorrecta*: Incorrect. Creating a new Vector Search Endpoint for each update is operationally complex, inefficient, and resource-intensive. This approach would create a significant management burden and is contrary to the requirement for minimal operational overhead.

- **[INCORRECTA]** ❌ **An in-memory vector store managed within a Databricks Notebook.**
  - *Por qué es incorrecta*: Incorrect. An in-memory vector store within a notebook is suitable for prototyping or small-scale experiments but is not a robust solution for a production environment. It lacks the persistence, scalability, and availability required to serve a production chatbot with continuously updated data.

---

## Pregunta 21 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A financial services company ingests and processes thousands of articles daily, generating embeddings and storing them in a Delta table. They need to build a RAG application that provides the most up-to-date information to their analysts with minimal latency. The Vector Search index must reflect new articles within minutes of their arrival in the Delta table. Which index type and sync mode should be used to meet this requirement?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Delta Sync index with a CONTINUOUS sync mode.**
  - *Justificación*: Correct. This combination is specifically designed for this use case. A Delta Sync index automatically synchronizes with a source Delta table. The CONTINUOUS sync mode ensures that the index is incrementally updated as new data arrives in the table, typically reflecting changes within a few minutes. This provides the minimal latency and up-to-date data required for the RAG application.

- **[INCORRECTA]** ❌ **Direct Vector Access index with a TRIGGERED sync mode.**
  - *Por qué es incorrecta*: Incorrect. A Direct Vector Access index is not designed for automatic synchronization with a source Delta table. Furthermore, the TRIGGERED sync mode requires manual intervention or a fixed schedule to update, which would introduce significant latency and fail to meet the requirement of updating within minutes.

- **[INCORRECTA]** ❌ **Direct Vector Access index with a CONTINUOUS sync mode.**
  - *Por qué es incorrecta*: Incorrect. This is not a valid configuration. Direct Vector Access indexes do not support the CONTINUOUS sync mode as they are intended for direct querying of embeddings, not for automated, continuous synchronization from a source Delta table.

- **[INCORRECTA]** ❌ **Delta Sync index with a TRIGGERED sync mode.**
  - *Por qué es incorrecta*: Incorrect. While the Delta Sync index type is appropriate for syncing from a Delta table, the TRIGGERED sync mode is not suitable for near real-time requirements. It updates the index only when a sync job is explicitly triggered, either manually or on a schedule, which would cause delays that violate the 'within minutes' latency requirement.

---

## Pregunta 22 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> In the context of Databricks Generative AI applications, what is the primary function of Databricks Vector Search when configured as a persistent datastore?

### Opciones y Análisis

- **[CORRECTA]** ✅ **To store and retrieve vector embeddings and metadata for semantic similarity searches.**
  - *Justificación*: Correct. Databricks Vector Search is a serverless similarity search engine designed to store and retrieve vector embeddings along with associated metadata. This enables semantic similarity search and retrieval-augmented generation (RAG) use cases by facilitating efficient nearest-neighbor lookups.

- **[INCORRECTA]** ❌ **To provide a relational database for transactional processing of user chat logs.**
  - *Por qué es incorrecta*: Incorrect. Relational database workloads and transactional processing of logs are better suited for Delta Lake or traditional SQL databases. Vector Search is optimized for similarity metrics rather than relational operations.

- **[INCORRECTA]** ❌ **To cache intermediate LLM API responses to reduce token costs.**
  - *Por qué es incorrecta*: Incorrect. Caching LLM responses to reduce costs is typically handled by a specific application cache or a model gateway caching layer, not a vector search engine, which is used for retrieving context based on embeddings.

- **[INCORRECTA]** ❌ **To store the weights and biases of fine-tuned Large Language Models.**
  - *Por qué es incorrecta*: Incorrect. Fine-tuned model parameters such as weights and biases are stored in a model registry (like MLflow) or dedicated model storage, not in a vector search index.

---

## Pregunta 23 (Domain 1: Design Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> What is the primary purpose of integrating a Model Context Protocol (MCP) server into a Generative AI application architecture?

### Opciones y Análisis

- **[CORRECTA]** ✅ **To provide a standardized, secure way for AI models to connect to external data sources, tools, and prompts.**
  - *Justificación*: Correct. The Model Context Protocol (MCP) is an open standard designed to provide a standardized, secure way for AI models to connect to external data sources, tools, and prompts. It helps decouple the model from specific integrations while enabling controlled and consistent access to context and actions across different platforms.

- **[INCORRECTA]** ❌ **To fine-tune Large Language Models on proprietary datasets using distributed computing clusters.**
  - *Por qué es incorrecta*: Incorrect. Fine-tuning Large Language Models on proprietary datasets is a model training activity typically handled by specialized frameworks (like PyTorch or Spark) and distributed computing clusters. MCP is used at application runtime for integration, not for model training.

- **[INCORRECTA]** ❌ **To compress the context window of an LLM to reduce token costs during inference.**
  - *Por qué es incorrecta*: Incorrect. Compressing the context window or reducing token costs is an inference optimization task (such as KV cache compression or prompt summarization). MCP structures how external context is accessed but does not modify the model's underlying token budget or compression algorithms.

- **[INCORRECTA]** ❌ **To automatically translate natural language SQL queries into Python code for data analysis.**
  - *Por qué es incorrecta*: Incorrect. While MCP might facilitate access to tools that perform data analysis, the protocol itself is not an automatic code translation mechanism for SQL or Python. That functionality is a capability of the LLM or a specialized agent.

---

## Pregunta 24 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> What is the primary role of the pipe operator (`|`) in the LangChain Expression Language (LCEL)?

### Opciones y Análisis

- **[CORRECTA]** ✅ **It defines a sequential chain where the output of the component on the left is passed as the input to the component on the right.**
  - *Justificación*: Correct. This is the fundamental purpose of the pipe operator (`|`) in LCEL. It creates a `RunnableSequence` by linking components together, where the output of the preceding component (on the left) is automatically passed as the input to the succeeding component (on the right). This syntax allows for building intuitive and readable chains.

- **[INCORRECTA]** ❌ **It performs a bitwise OR operation to combine the numeric outputs of two components into a single integer value for subsequent processing in the chain.**
  - *Por qué es incorrecta*: Incorrect. The pipe operator (`|`) in LCEL is overloaded for chaining components and does not perform a bitwise OR operation. Its function is specific to constructing `RunnableSequence` objects, not numeric operations.

- **[INCORRECTA]** ❌ **It executes two components in parallel, waits for both to finish, and then merges their dictionary outputs into a single object for the next component.**
  - *Por qué es incorrecta*: Incorrect. The pipe operator creates a sequential execution flow, not a parallel one. To run components in parallel and merge their outputs, constructs like `RunnableParallel` or a dictionary of runnables are used.

- **[INCORRECTA]** ❌ **It is used to specify conditional logic for routing between components, evaluating a predicate on the input to select which downstream branch to execute.**
  - *Por qué es incorrecta*: Incorrect. The pipe operator is used for creating linear, sequential chains. Conditional logic and routing require different constructs within LCEL, such as `RunnableBranch`, which can direct the flow based on the output of a previous step.

---

## Pregunta 25 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A data scientist executes the following code block in a Databricks notebook to train and register a sentiment analysis model. What is the primary outcome of the `mlflow.sklearn.log_model` call within this block? 

```python
import mlflow
from sklearn.ensemble import RandomForestClassifier

mlflow.set_registry_uri('databricks-uc')

with mlflow.start_run() as run:
    rfc = RandomForestClassifier()
    # Assume model is trained on data here
    mlflow.sklearn.log_model(
        sk_model=rfc,
        artifact_path='sentiment-model',
        registered_model_name='prod.nlp.sentiment_classifier'
    )
```

### Opciones y Análisis

- **[CORRECTA]** ✅ **The code creates or updates the `sentiment_classifier` model in Unity Catalog under the `prod.nlp` schema and logs the model artifacts to the MLflow run.**
  - *Justificación*: Correct. With the registry URI set to `databricks-uc`, the `mlflow.sklearn.log_model` call logs the model artifacts under the `sentiment-model` path in the run and registers the model as `sentiment_classifier` in the `prod.nlp` schema of Unity Catalog, creating a new version.

- **[INCORRECTA]** ❌ **The model is logged to the run's artifacts under `sentiment-model`, but the registration to `prod.nlp.sentiment_classifier` fails because it must occur after the run completes.**
  - *Por qué es incorrecta*: Incorrect. The `mlflow.sklearn.log_model` function can both log the model artifacts and register the model in the same call, even within an active run. Registration does not require the run to complete first; it happens immediately when `registered_model_name` is provided.

- **[INCORRECTA]** ❌ **The model is registered to the Workspace Model Registry because the `mlflow.set_registry_uri` call is ignored and a UC-specific function, like `mlflow.uc.log_model`, is required.**
  - *Por qué es incorrecta*: Incorrect. The `mlflow.set_registry_uri('databricks-uc')` call explicitly sets the registry to Unity Catalog, and it is not ignored. Standard MLflow functions like `mlflow.sklearn.log_model` respect this setting, so no UC-specific function is required.

- **[INCORRECTA]** ❌ **The code will fail because `mlflow.sklearn.log_model` does not accept both `artifact_path` and `registered_model_name` when the registry URI is set to `databricks-uc`.**
  - *Por qué es incorrecta*: Incorrect. `artifact_path` and `registered_model_name` serve different purposes and can be used together without conflict. The registry URI being `databricks-uc` does not prevent using both parameters; the function handles logging and registration seamlessly.

---

## Pregunta 26 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A development team wants to serve a third-party LLM, such as Anthropic's Claude 3, through Databricks Model Serving. They need to provide the API key securely to the endpoint configuration. What is the recommended and most secure method for managing the API key?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Store the API key in a Databricks secret scope and reference the secret in the external model configuration.**
  - *Justificación*: Correct. Databricks secret scopes are purpose-built for securely storing sensitive information like API keys, with encryption and fine-grained access controls. Referencing the secret in the external model configuration (e.g., `{{secrets/scope_name/key_name}}`) injects the key at runtime without exposing it in plaintext.

- **[INCORRECTA]** ❌ **Store the API key in a text file within a project directory on DBFS and have the model's serving logic read the file's contents.**
  - *Por qué es incorrecta*: Incorrect. Storing the API key in a text file on DBFS is insecure because DBFS is not designed for secrets management and may lack strict access controls. Anyone with read access to the file can obtain the key, increasing the risk of exposure.

- **[INCORRECTA]** ❌ **Hardcode the API key as a string value within the `model_config` dictionary when defining the external model serving endpoint.**
  - *Por qué es incorrecta*: Incorrect. Hardcoding the API key in the `model_config` dictionary exposes it in plaintext within the configuration code. This practice can lead to leakage through version control, logs, or direct inspection, making it a significant security risk.

- **[INCORRECTA]** ❌ **Set the API key as a cluster-level environment variable through the cluster UI's Spark configuration for the serving endpoint.**
  - *Por qué es incorrecta*: Incorrect. Setting the API key as a cluster-level environment variable is less secure than using secret scopes because the variable can be exposed to users or processes with access to the cluster configuration or Spark UI. It also lacks the granular access control and automatic redaction features of Databricks secrets.

---

## Pregunta 27 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A financial institution is deploying a RAG application for internal policy search. The policy documents are updated in a Delta table only once at the end of each month. The engineering team needs to configure the vector search index to minimize compute costs while ensuring the index is reliably updated after the monthly changes. How should they configure the index synchronization?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Use a Delta Sync Index with `TRIGGERED` sync mode and configure a task dependency in a Databricks Workflow to invoke the sync API upon successful completion of the monthly data refresh.**
  - *Justificación*: This is the recommended approach. `TRIGGERED` mode minimizes compute costs because the index pipeline runs on demand. Configuring the sync as a downstream task in a Workflow ensures it executes only after the monthly pipeline succeeds, guaranteeing reliability. The documentation confirms that scheduling a Workflow to call the sync API after data pipeline completion is a standard, effective pattern for batch updates.

- **[INCORRECTA]** ❌ **Use a Delta Sync Index with `CONTINUOUS` sync mode to automatically detect and apply the monthly Delta table updates as soon as they are committed.**
  - *Por qué es incorrecta*: `CONTINUOUS` sync mode keeps a compute cluster always running, which is cost-prohibitive and unnecessary for monthly updates. According to documentation, `TRIGGERED` mode is recommended for batch updates and cost-sensitive workloads because the sync pipeline only runs when manually triggered.

- **[INCORRECTA]** ❌ **Use a Delta Sync Index with `TRIGGERED` sync mode and schedule a time-based Databricks Workflow to call the sync API at a fixed monthly interval.**
  - *Por qué es incorrecta*: Relying solely on a time-based schedule risks triggering the sync before the monthly data pipeline has fully completed, potentially leading to partial or stale index content. To ensure reliability, the sync should be chained to the data refresh completion.

- **[INCORRECTA]** ❌ **Use a Direct Vector Access Index and schedule a monthly job to drop and rebuild the index from the updated Delta table.**
  - *Por qué es incorrecta*: This approach is inefficient and unnecessarily costly. Dropping and rebuilding the index each month does not leverage incremental updates via Change Data Feed (CDF). A Delta Sync Index with `TRIGGERED` mode processes only the changed rows, optimizing compute costs.

---

## Pregunta 28 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A healthcare organization is deploying a Retrieval-Augmented Generation (RAG) system to allow doctors to query a knowledge base of patient records. The performance objective is to provide helpful summaries without leaking any patient names or medical record numbers (MRNs). Which approach most effectively uses masking to achieve this goal?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Masking the PII within the patient records before they are ingested and stored in the vector database.**
  - *Justificación*: Correct. This is the most proactive and secure approach. By masking Personally Identifiable Information (PII) like names and MRNs before the data is ever ingested into the vector database, it ensures that sensitive information is never available during the retrieval or generation steps. This method acts as a strong guardrail, aligns with the principle of data minimization, and fundamentally prevents the RAG system from leaking the specified PII.

- **[INCORRECTA]** ❌ **Masking the doctor's query to remove any specific patient names before the retrieval step.**
  - *Por qué es incorrecta*: Incorrect. While masking the query can be a useful practice, it does not address the primary risk. The main source of potential PII leakage is the patient records in the knowledge base, not the doctor's query. Even with a masked query, the retrieval step could still pull documents containing unmasked PII, which could then be exposed in the final summary.

- **[INCORRECTA]** ❌ **Allowing the LLM to process the full, unmasked retrieved text and then masking the final generated summary.**
  - *Por qué es incorrecta*: Incorrect. This approach is highly risky because it allows the LLM to process unmasked sensitive data. The LLM could inadvertently leak PII in intermediate steps, logs, or if the final masking filter fails. Relying on masking the output is a reactive measure, whereas the goal should be to prevent the model from accessing the sensitive data in the first place.

- **[INCORRECTA]** ❌ **Anonymizing the final chat logs after the entire interaction is complete.**
  - *Por qué es incorrecta*: Incorrect. Anonymizing chat logs is a post-interaction cleanup activity. It does nothing to prevent PII from being exposed to the doctor during the live RAG session. This measure is far too late in the process to serve as an effective guardrail for the primary performance objective.

---

## Pregunta 29 (Domain 5: Governance)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> When implementing data masking as a guardrail for GenAI applications, what is the primary purpose of using row filters in Unity Catalog?

### Opciones y Análisis

- **[CORRECTA]** ✅ **To restrict the visibility of entire rows in a table based on the user's identity or group membership.**
  - *Justificación*: Correct. Row filters in Unity Catalog are the mechanism for implementing Row-Level Security (RLS). Their primary purpose is to restrict which rows a user can see in a table based on that user's identity or their membership in specific groups, thereby enforcing data access policies.

- **[INCORRECTA]** ❌ **To modify or redact the content within specific columns, such as hiding a social security number.**
  - *Por qué es incorrecta*: Incorrect. This describes the function of column-level masking policies, not row filters. Column masks modify or redact content within specific columns, whereas row filters control access to entire rows.

- **[INCORRECTA]** ❌ **To improve query performance by creating a pre-computed subset of the most frequently accessed rows.**
  - *Por qué es incorrecta*: Incorrect. While applying filters can impact query performance, the primary purpose of row filters is security and access control, not query optimization. Performance optimization is typically achieved through other means like materialized views or indexing.

- **[INCORRECTA]** ❌ **To validate that data being inserted into a table conforms to a specific set of business rules.**
  - *Por qué es incorrecta*: Incorrect. This describes data validation, which is typically handled by table constraints or data quality checks. Row filters are applied at query time to restrict access to existing data, not to validate data during ingestion.

---

## Pregunta 30 (Domain 5: Governance)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> An e-commerce company wants to fine-tune an LLM to generate product descriptions based on user reviews. However, some user reviews contain competitor names and pricing information, which should not appear in the final product descriptions. The sentence structure of these reviews is valuable. What is a suitable mitigation technique?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Use regular expressions and entity detection to identify and mask competitor names and prices in the review data before fine-tuning.**
  - *Justificación*: Correct. Using regular expressions and entity detection to identify and mask competitor names and prices in the review data before fine-tuning is a precise and proactive data sanitization method. It removes sensitive information while preserving the valuable sentence structure, ensuring the model never learns to generate unwanted content.

- **[INCORRECTA]** ❌ **Remove all user reviews that mention any competitor, discarding the rest of the review even when the sentence structure is valuable for training.**
  - *Por qué es incorrecta*: Incorrect. Removing all user reviews that mention any competitor is overly aggressive and discards valuable training data. This approach wastes the sentence structure and linguistic diversity present in those reviews, potentially degrading the fine-tuned model's performance.

- **[INCORRECTA]** ❌ **Instruct the model during inference with a system prompt like 'Do not mention competitors' to suppress competitor names and pricing in generated descriptions.**
  - *Por qué es incorrecta*: Incorrect. Instructing the model during inference with a system prompt is an inference-time mitigation, not a data sanitization technique for training. The fine-tuning data has a stronger influence on model behavior, and the model may still generate competitor names and prices despite the prompt.

- **[INCORRECTA]** ❌ **Summarize the reviews first, relying on the summarization process to naturally omit competitor names and pricing details from the condensed text.**
  - *Por qué es incorrecta*: Incorrect. Summarizing the reviews first is unreliable because the summarization process may not consistently omit competitor names and pricing details. Additionally, summarization inherently alters the original text, destroying the valuable sentence structure needed for fine-tuning.

---

## Pregunta 31 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A development team is building a multi-purpose RAG application. For simple queries, they want to use a fast, inexpensive model, but for complex, analytical queries, they need a state-of-the-art, more expensive model. Which Databricks feature allows them to manage both models behind a single API and apply logic to route requests to the appropriate model, thereby optimizing the cost-performance balance?

### Opciones y Análisis

- **[CORRECTA]** ✅ **The AI Gateway with multiple routes**
  - *Justificación*: Correct. The Databricks AI Gateway is specifically designed to provide a unified, secure API endpoint for various LLMs. It supports configuring multiple 'routes', each pointing to a different model. This allows developers to implement routing logic that directs requests to the appropriate model (e.g., a fast, cheap model for simple queries and a powerful, expensive one for complex queries) based on the request's attributes, thereby optimizing the cost-performance ratio.

- **[INCORRECTA]** ❌ **Databricks Jobs with multi-task capabilities**
  - *Por qué es incorrecta*: Incorrect. Databricks Jobs are designed for orchestrating and scheduling batch or streaming data processing workflows. They are not suited for serving as a real-time API interface for model inference or implementing dynamic routing logic between multiple models based on request content.

- **[INCORRECTA]** ❌ **A Delta Live Tables pipeline with quality expectations**
  - *Por qué es incorrecta*: Incorrect. Delta Live Tables (DLT) is a framework for building reliable and maintainable data processing pipelines (ETL). Its focus is on data quality and reliability within a data pipeline, not on managing or routing real-time API requests for model inference.

- **[INCORRECTA]** ❌ **Unity Catalog with row-level security**
  - *Por qué es incorrecta*: Incorrect. Unity Catalog is the centralized data governance solution for Databricks, providing features like data discovery, access control, and auditing. While it governs data assets, it does not manage or route API requests between different LLM models.

---

## Pregunta 32 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> Which of the following evaluation metrics fundamentally requires a ground truth or reference answer to calculate a score for a text summarization task?

### Opciones y Análisis

- **[CORRECTA]** ✅ **ROUGE-L**
  - *Justificación*: Correct. ROUGE-L (Recall-Oriented Understudy for Gisting Evaluation - Longest Common Subsequence) is a standard metric for text summarization quality. It functions by directly comparing the generated summary against one or more human-written reference summaries (ground truth). The score is calculated based on the length of the longest common subsequence between the two texts, making the ground truth reference essential for its computation.

- **[INCORRECTA]** ❌ **Toxicity**
  - *Por qué es incorrecta*: Incorrect. Toxicity is a metric that assesses the presence of harmful, offensive, or otherwise problematic language within the generated text itself. It is a content-based evaluation that does not require comparison against a reference or ground truth answer.

- **[INCORRECTA]** ❌ **Fluency**
  - *Por qué es incorrecta*: Incorrect. Fluency measures the linguistic quality of the generated text, focusing on aspects like grammatical correctness and natural language flow. This can be evaluated without a ground truth summary, often using another language model as a judge or through human assessment.

- **[INCORRECTA]** ❌ **Readability**
  - *Por qué es incorrecta*: Incorrect. Readability evaluates how easy a piece of text is to understand. Metrics like the Flesch-Kincaid readability test calculate a score based on intrinsic properties of the text, such as average sentence length and syllables per word. This analysis is performed solely on the generated text and does not require a reference summary.

---

## Pregunta 33 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> In the context of selecting an LLM, what is the most common trade-off when choosing a smaller model architecture (e.g., 7 billion parameters) over a much larger one (e.g., 70 billion parameters)?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Smaller models generally have lower operational costs and faster inference speeds but may exhibit weaker performance on highly complex or nuanced tasks.**
  - *Justificación*: Correct. Smaller models require less computational power and memory, leading to lower operational costs and faster inference. However, this efficiency often comes at the expense of performance on highly complex or nuanced tasks where larger models excel.

- **[INCORRECTA]** ❌ **Smaller models are invariably better at few-shot learning due to a focused architecture that adapts well to in-context examples, whereas larger models excel at zero-shot tasks.**
  - *Por qué es incorrecta*: Incorrect. Larger models generally outperform smaller ones in both few-shot and zero-shot learning due to their greater capacity and broader training data. Smaller models are not invariably better at few-shot learning; their focused architecture does not typically adapt better to in-context examples than larger models.

- **[INCORRECTA]** ❌ **Smaller models produce more factually correct information because their limited size constrains hallucination, but this same architectural limit also reduces their creative capacity.**
  - *Por qué es incorrecta*: Incorrect. Model size alone does not determine factual correctness; larger models often have a broader knowledge base that can improve accuracy. Hallucination is not simply constrained by smaller size, and factual correctness depends on training data and fine-tuning rather than just parameter count.

- **[INCORRECTA]** ❌ **Smaller models require significantly more VRAM for inference due to the higher overhead associated with aggressive quantization techniques, but they are faster to fine-tune.**
  - *Por qué es incorrecta*: Incorrect. Smaller models have fewer parameters and thus require significantly less VRAM for inference, not more. Aggressive quantization techniques are used to reduce memory usage further, and the statement about higher overhead is factually wrong.

---

## Pregunta 34 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> A data engineer wants to evaluate a RAG application's tone to ensure it aligns with a specific set of corporate communication guidelines. They decide to use an LLM-as-a-judge to score the tone of the generated responses. Which approach should the engineer use to create this custom scorer in Databricks?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Use `mlflow.metrics.genai.make_genai_metric`, providing a metric definition, a grading prompt, and the Databricks model serving endpoint to be used as the judge.**
  - *Justificación*: Correct. `mlflow.metrics.genai.make_genai_metric` is the standard Databricks and MLflow-supported utility for building custom GenAI metrics using an LLM-as-a-judge. This function allows you to specify a metric name, a definition, a grading prompt (with criteria), and the model serving endpoint that will serve as the evaluator.

- **[INCORRECTA]** ❌ **Define a standard Python function that calls the judge LLM with the corporate guidelines, then pass this function to the `custom_llm` parameter within the `mlflow.evaluate()` call.**
  - *Por qué es incorrecta*: Incorrect. While you can define custom metrics as Python functions, passing them to a `custom_llm` parameter is not the correct mechanism for defining an LLM-as-a-judge scorer. In `mlflow.evaluate()`, custom metrics are typically passed through the `extra_metrics` argument, and they must follow the specific MLflow metric interface.

- **[INCORRECTA]** ❌ **Modify the default `mlflow.metrics.toxicity` metric by overriding its internal prompt template, replacing the default instructions with the specific corporate guidelines for tone.**
  - *Por qué es incorrecta*: Incorrect. The built-in `toxicity` metric is a predefined metric with a specific objective. It is not intended to be repurposed by overriding internal templates. For a tone evaluation aligned with corporate guidelines, the recommended path is to create a new, distinct GenAI metric.

- **[INCORRECTA]** ❌ **Create a Spark UDF that queries the judge LLM with the corporate guidelines, then apply this function to the output dataframe after the `mlflow.evaluate()` call has completed.**
  - *Por qué es incorrecta*: Incorrect. Using a Spark UDF after the evaluation has completed would be a post-processing step. This approach fails to integrate with the Databricks evaluation UI and MLflow's automated tracking, which are the primary benefits of using custom scorers during the evaluation phase.

---

## Pregunta 35 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate (Base)`

### Enunciado
> An operations team is monitoring a RAG application and notices a sudden increase in user complaints about responses being too slow. They have an inference table enabled for the serving endpoint. Which SQL query against the inference table would help them quantify this latency issue?

### Opciones y Análisis

- **[CORRECTA]** ✅ ****
  - *Justificación*: 

- **[INCORRECTA]** ❌ **SELECT date_trunc('hour', timestamp) AS hour, COUNT(*) AS null_context_count FROM my_rag_inference_table WHERE response.predictions.retrieved_context IS NULL GROUP BY hour ORDER BY hour;**
  - *Por qué es incorrecta*: This query counts requests missing retrieved context per hour. It measures a potential quality issue (null context), not the latency (response time) that is causing user complaints. It does not help quantify how slow the responses are.

- **[INCORRECTA]** ❌ **SELECT date_trunc('hour', timestamp) AS hour, AVG(response.predictions.output_token_count) AS avg_tokens FROM my_rag_inference_table WHERE response.predictions.output_token_count > 0 GROUP BY hour ORDER BY hour;**
  - *Por qué es incorrecta*: This query calculates the average output token count per hour. While the number of generated tokens can influence latency, it does not directly measure time. Latency is measured in seconds or milliseconds, not token counts, so it fails to quantify the actual response delay.

---

## Pregunta 36 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A legal operations team wants to pull specific fields (contract start date, renewal term, counterparty name) out of thousands of scanned PDF contracts and load the results into a Delta table with a fixed schema. Which model task should the application be built around?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Structured information extraction against a defined schema**
  - *Justificación*: Pulling named fields such as dates, terms, and party names into a fixed schema is exactly what structured information extraction (e.g. `ai_extract`) is designed for, and it maps directly onto a Delta table with fixed columns.

- **[INCORRECTA]** ❌ **Open-ended text generation to draft a plain-language summary of each contract**
  - *Por qué es incorrecta*: Generation would produce free-form prose summaries, which do not give the fixed, queryable columns (start date, term, counterparty) the team needs for the Delta table.

- **[INCORRECTA]** ❌ **Multi-turn chat that lets a user ask follow-up questions about one contract at a time**
  - *Por qué es incorrecta*: A chat interface answers ad hoc questions interactively but does not batch-produce structured field values across thousands of documents for a table load.

- **[INCORRECTA]** ❌ **Multi-class classification that assigns each contract to a single category label**
  - *Por qué es incorrecta*: Classification assigns each document to one of a set of predefined labels, which does not recover the specific field values the team needs to populate table columns.

---

## Pregunta 37 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A developer's prompt asks an LLM to "respond with only the JSON object, nothing else," but the model still occasionally prepends a sentence like "Here is the JSON:" before the object, which breaks a strict `json.loads()` call downstream. The developer wants to keep using plain JSON without switching to a schema-validation library. Which prompt adjustment is most likely to eliminate the extra text while keeping the fix simple?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Instruct the model to wrap the JSON output in specific delimiters such as triple backticks, then have the downstream code extract only the text between those delimiters**
  - *Justificación*: Asking the model to enclose its output in a distinctive delimiter such as triple backticks gives the downstream code a reliable anchor to extract exactly the JSON substring, even if the model still adds a stray lead-in sentence outside the delimiters.

- **[INCORRECTA]** ❌ **Remove the JSON formatting instruction entirely so the model can answer more naturally and the code can search the free text for key phrases**
  - *Por qué es incorrecta*: Dropping the JSON instruction removes the format constraint altogether, making the response less structured and harder to parse, which is the opposite of what the pipeline needs.

- **[INCORRECTA]** ❌ **Ask the model to repeat the instruction back before answering, confirming that it understands only JSON should be returned**
  - *Por qué es incorrecta*: Having the model restate the instruction adds extra conversational text to the response and does not stop it from also adding a lead-in sentence before the JSON object.

- **[INCORRECTA]** ❌ **Shorten the prompt to a single word like "Extract" so the model has less room to add conversational filler around the answer**
  - *Por qué es incorrecta*: A one-word prompt removes the context the model needs to know what fields to extract and does not specifically address the lead-in text problem; it is likely to make the output less reliable, not more.

---

## Pregunta 38 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A generative AI engineer is building a tool-calling agent for a claims-processing use case. The agent has three tools: `lookup_claim_details`, `check_policy_coverage`, and `issue_payment`. Payments must never be issued for claims that fail coverage verification. How should the engineer define and order these tools for the agent's multi-stage reasoning loop?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Constrain `issue_payment` so it only runs after `check_policy_coverage` approves the claim, and write tool descriptions that lead the agent to call lookup, then coverage check, then payment in that order.**
  - *Justificación*: Constraining the payment tool to run only after coverage approval, and describing the tools so the agent naturally sequences lookup, then verification, then action, matches Databricks guidance that consequential actions in a multi-stage reasoning loop should be gated behind the verification step they depend on. This prevents the model from reaching an irreversible action tool before the required check has succeeded.

- **[INCORRECTA]** ❌ **Let the agent call `issue_payment` first as the main objective, then invoke `lookup_claim_details` and `check_policy_coverage` afterward purely to produce an audit log of the completed transaction.**
  - *Por qué es incorrecta*: Calling the payment tool before verifying coverage defeats the purpose of the coverage check, since the payment would already be issued by the time the audit-log calls run. This ordering allows an unapproved claim to be paid, which is exactly the failure mode the design must prevent.

- **[INCORRECTA]** ❌ **Give all three tools identical generic descriptions so the LLM treats them as interchangeable, and let it invoke `issue_payment` and `check_policy_coverage` in parallel to cut latency.**
  - *Por qué es incorrecta*: Identical generic tool descriptions remove the signal the agent needs to reason about which tool serves which purpose, and running the payment and coverage-check tools in parallel means the payment can complete before the coverage result is even known. This creates a race condition that can pay out non-covered claims.

- **[INCORRECTA]** ❌ **Drop `check_policy_coverage` from the tool set entirely and depend on a human reviewer to catch any improperly paid claims after the payment has already settled.**
  - *Por qué es incorrecta*: Removing the coverage-check tool eliminates the automated gate entirely, so every claim would be paid regardless of eligibility, with correctness pushed onto a reviewer who only sees the claim after money has already moved. This does not satisfy the requirement that payments never occur for claims failing verification.

---

## Pregunta 39 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> An engineer builds a RAG pipeline over long onboarding guides. During testing, they notice that a key instruction spanning the end of one chunk and the beginning of the next is never retrieved in full: the retriever returns one chunk or the other, but neither chunk alone contains the complete instruction. Which adjustment to the chunking configuration most directly addresses this failure?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Configure adjacent chunks to overlap by a set number of tokens so boundary content appears in more than one chunk.**
  - *Justificación*: Adding overlap between adjacent chunks means content near a boundary is duplicated into both chunks, so an instruction that straddles the boundary will appear in full inside at least one chunk and can be retrieved intact.

- **[INCORRECTA]** ❌ **Increase the total number of chunks retrieved at query time so the retriever returns more candidate chunks per query.**
  - *Por qué es incorrecta*: Returning more candidate chunks increases the chance both neighboring chunks are retrieved together, but neither chunk individually contains the complete instruction, so the response context is still fragmented across two partial chunks.

- **[INCORRECTA]** ❌ **Switch the embedding model to one trained specifically on the onboarding guide's domain vocabulary.**
  - *Por qué es incorrecta*: A domain-tuned embedding model can improve semantic matching for retrieval, but it does not change where chunk boundaries fall, so the instruction would still be split across two chunks.

- **[INCORRECTA]** ❌ **Sort the chunks by document order before indexing so neighboring chunks sit next to each other in the vector index.**
  - *Por qué es incorrecta*: Physical storage order in the vector index does not affect which chunks are returned for a similarity search, so this does not help the retriever surface the complete instruction.

---

## Pregunta 40 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A team writes new batches of chunked text into their Unity Catalog Delta table once per night via a scheduled job, and they want the AI Search index to refresh once after each nightly batch completes rather than continuously watching the table for changes. Which index configuration achieves this?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Create the Delta Sync Index with `pipeline_type="TRIGGERED"` so the index only syncs when explicitly triggered or scheduled after each nightly write completes.**
  - *Justificación*: A triggered pipeline type syncs the index on demand or on a schedule the team controls, which matches a workflow where new data lands once nightly and the index only needs to refresh after that batch is written.

- **[INCORRECTA]** ❌ **Create the Delta Sync Index with `pipeline_type="CONTINUOUS"` so the index runs on a dedicated always-on cluster that watches the Delta table and syncs immediately as each night's rows are committed.**
  - *Por qué es incorrecta*: A continuous pipeline type keeps compute running at all times to sync near-instantly as changes occur, which is unnecessary and more costly for a workload that only produces new data once per night.

- **[INCORRECTA]** ❌ **Create a Direct Vector Access Index and call its upsert API from the nightly job so the index updates in lockstep with the batch write, bypassing the Delta table sync mechanism entirely.**
  - *Por qué es incorrecta*: A direct access index requires the application to manage embeddings and upserts itself via API calls rather than syncing from a Delta table, which abandons the Delta table-driven sync workflow the team already has in place.

- **[INCORRECTA]** ❌ **Create the Delta Sync Index without specifying `pipeline_type` and rely on the default hourly cron schedule, since Delta Sync indexes always poll the source table once per hour regardless of configuration.**
  - *Por qué es incorrecta*: A Delta Sync Index does not fall back to a fixed hourly schedule when `pipeline_type` is unspecified; the pipeline type must be explicitly chosen to control whether syncing is triggered or continuous.

---

## Pregunta 41 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A team is preparing a source corpus by scraping publicly available community forum posts to supplement an internal knowledge base for a RAG assistant. Some forum posts contain personal contact details and occasional offensive language. Before these documents are added as knowledge sources, what should the team do to protect application quality and safety?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Run the scraped documents through classifiers to detect and filter out personal information and harmful language before ingestion**
  - *Justificación*: Applying classifiers to detect personal information and harmful language during source preparation directly prevents sensitive or offensive content from entering the corpus at all. This matches the guidance that sensitive information and harmful language in source documents should be filtered using classifiers before ingestion.

- **[INCORRECTA]** ❌ **Ingest the forum posts as-is and rely on the LLM's guardrails at inference time to avoid repeating any sensitive content**
  - *Por qué es incorrecta*: Relying on inference-time guardrails does not stop the retriever from surfacing the sensitive content as retrieved context, and the guardrail could still fail to catch every instance. The underlying risk originates in the source data, so filtering needs to happen during preparation rather than after retrieval.

- **[INCORRECTA]** ❌ **Shorten the chunk size used for the forum posts so any sensitive text is split across multiple smaller chunks**
  - *Por qué es incorrecta*: Splitting sensitive text across smaller chunks does not remove personal information or offensive language from the corpus; the content is still present and retrievable, just fragmented. Chunk size affects retrieval granularity, not content safety.

- **[INCORRECTA]** ❌ **Store the forum posts in a separate Delta table so they are queried less frequently than the internal knowledge base**
  - *Por qué es incorrecta*: Placing the forum posts in a separate table that is queried less often reduces but does not eliminate the chance that sensitive or harmful content is retrieved and surfaced to users. The unfiltered content remains available as a knowledge source.

---

## Pregunta 42 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A technical support search tool must return the single correct troubleshooting article at the very top of the results, since agents only read the first couple of results before acting. Which metric best evaluates this requirement?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Precision@k evaluated at a small k, such as precision@3, to confirm that nearly every top result is relevant**
  - *Justificación*: Precision at a small k directly measures whether the handful of results an agent actually reads are relevant, which matches a scenario where exact top-of-list accuracy matters more than exhaustive coverage.

- **[INCORRECTA]** ❌ **Recall@k evaluated at a large k, such as recall@50, to confirm that all relevant articles exist somewhere in the results**
  - *Por qué es incorrecta*: Recall at a large k answers whether relevant articles exist anywhere in a broad candidate pool, which does not address whether the top one or two results the agent will actually read are correct.

- **[INCORRECTA]** ❌ **Average relevance score computed across the entire retrieved candidate set, not just the top results**
  - *Por qué es incorrecta*: An average relevance score across the whole candidate set dilutes the signal from the top positions with lower-ranked results the agent will never see, so it does not isolate top-of-list accuracy.

- **[INCORRECTA]** ❌ **Relevance distribution across all graded buckets, to check the overall spread of result quality**
  - *Por qué es incorrecta*: A relevance distribution describes how graded scores are spread across all retrieved results, which is a diagnostic overview rather than a targeted measure of whether the very top result is correct.

---

## Pregunta 43 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> During evaluation, a RAG engineer notices that answers referencing information near a chunk boundary are frequently incomplete, because the fact needed to answer the question is split across two adjacent chunks. Which change to the chunking configuration best addresses this specific problem?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Configure the chunker to carry a window of trailing sentences into the start of the next chunk.**
  - *Justificación*: Carrying a window of trailing sentences from one chunk into the next, known as chunk overlap, ensures continuity across the boundary so a fact split between two chunks is likely to appear intact in at least one of them.

- **[INCORRECTA]** ❌ **Increase the number of chunks retrieved per query so more candidate chunks reach the language model.**
  - *Por qué es incorrecta*: Retrieving more chunks increases the chance that a second chunk with the missing fact is also returned, but it does not guarantee it, and it adds noise and cost to the prompt without directly fixing the boundary-splitting issue.

- **[INCORRECTA]** ❌ **Switch from a paragraph-based splitter to a fixed-character splitter to produce more uniform boundaries.**
  - *Por qué es incorrecta*: Switching to a fixed-character splitter changes where boundaries fall but does not add continuity across them, so facts can still be split between chunks just as before, only at different points in the text.

- **[INCORRECTA]** ❌ **Reduce the chunk size so each chunk covers a narrower span of the source document than before.**
  - *Por qué es incorrecta*: Shrinking the chunk size increases the number of boundaries in the document, which makes it more likely, not less, that a given fact will end up split across two separate chunks.

---

## Pregunta 44 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> During retrieval quality evaluation, an engineer runs the same set of test queries through the pipeline twice — once with the reranker disabled and once with it enabled — and compares DCG@10 scores for each query type. For one query type, enabling the reranker raises DCG@10 significantly with only a modest latency increase; for another query type, it makes almost no difference. What is the most appropriate way to use this evaluation result?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Enable the reranker for the query types where it measurably improves DCG@10 within the latency budget, and skip it where the gain doesn't justify the cost**
  - *Justificación*: Comparing DCG@10 with and without the reranker per query type is exactly how retrieval quality evaluation is meant to guide a rollout decision: enable reranking where it delivers a real, latency-affordable quality gain, and leave it off where the benefit doesn't clear that bar. This targeted approach makes the best use of the evaluation data collected.

- **[INCORRECTA]** ❌ **Enable the reranker everywhere, since any nonzero DCG@10 improvement on any query type justifies applying it uniformly across all traffic**
  - *Por qué es incorrecta*: Applying the reranker uniformly ignores the finding that one query type saw almost no benefit; enabling it there still adds latency cost without a corresponding quality payoff. The evaluation data specifically shows the impact varies by query type, so a blanket decision discards that signal.

- **[INCORRECTA]** ❌ **Disable the reranker everywhere, since a query type with no DCG@10 improvement proves the reranker doesn't help this retrieval pipeline overall**
  - *Por qué es incorrecta*: One query type showing little improvement doesn't invalidate the significant DCG@10 gain observed for the other query type. Disabling the reranker everywhere would throw away a measured quality improvement that the evaluation clearly demonstrated for at least part of the traffic.

- **[INCORRECTA]** ❌ **Discard the DCG@10 results entirely, since re-ranking quality can only be judged using recall@k rather than any ranking-order-sensitive metric**
  - *Por qué es incorrecta*: DCG@10 is a ranking-order-sensitive metric that is well suited to measuring exactly what reranking changes: the order of results within the top-k. Recall@k measures whether relevant items appear at all in the candidate set, which doesn't capture the reordering benefit reranking provides.

---

## Pregunta 45 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> Which built-in MLflow GenAI judge requires a labeled ground-truth expected response in order to compute its score?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Correctness, which compares the generated response against a labeled expected answer to score factual accuracy**
  - *Justificación*: Correctness explicitly needs a labeled expected answer supplied as ground truth, against which it compares the generated response to score factual accuracy; without that label, the judge cannot run.

- **[INCORRECTA]** ❌ **Safety, which is reference-free and flags harmful or toxic content without needing an expected answer**
  - *Por qué es incorrecta*: Safety is a reference-free judge that assesses whether content is harmful, offensive, or toxic based on the response alone, so it does not require any labeled expected answer.

- **[INCORRECTA]** ❌ **RelevanceToQuery, which is reference-free and scores whether the response addresses the query's intent**
  - *Por qué es incorrecta*: RelevanceToQuery is reference-free and only needs the question and the response to judge whether the response addresses the query's intent.

- **[INCORRECTA]** ❌ **RetrievalGroundedness, which is reference-free and checks the response only against the retrieved context**
  - *Por qué es incorrecta*: RetrievalGroundedness is reference-free and checks whether the response is supported by the retrieved context, not by a labeled ground-truth answer.

---

## Pregunta 46 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> Which Python package provides purpose-built LangChain tool wrappers for Unity Catalog functions, letting a governed UC function be surfaced directly as a LangChain-compatible tool for an agent?

### Opciones y Análisis

- **[CORRECTA]** ✅ **databricks-langchain**
  - *Justificación*: This package provides the LangChain integrations, including a toolkit that wraps Unity Catalog functions so they can be passed directly into a LangChain agent's tool list.

- **[INCORRECTA]** ❌ **databricks-connect**
  - *Por qué es incorrecta*: This package is a client for running Spark workloads against a remote Databricks cluster from a local environment; it has nothing to do with wrapping UC functions as LangChain tools.

- **[INCORRECTA]** ❌ **databricks-sdk**
  - *Por qué es incorrecta*: This package is a general-purpose REST API client for managing Databricks workspace resources such as clusters and jobs, not a LangChain tool integration library.

- **[INCORRECTA]** ❌ **databricks-feature-engineering**
  - *Por qué es incorrecta*: This package is used for managing feature tables and feature lookups in the Feature Store, which is unrelated to exposing UC functions as LangChain tools.

---

## Pregunta 47 (Domain 1: Design Applications)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> In the context of augmenting prompts based on a user's input, what is the primary purpose of extracting key fields, terms, and intents from that input?

### Opciones y Análisis

- **[CORRECTA]** ✅ **To determine which specific context and data should be retrieved and injected into the prompt so the LLM's response is grounded in relevant, accurate information**
  - *Justificación*: Extracting key fields, terms, and intents lets the application identify exactly what additional context (records, documents, or data) is relevant, so it can be retrieved and injected into the prompt to ground the LLM's response, which is the core purpose of this augmentation step.

- **[INCORRECTA]** ❌ **To permanently store the user's raw message in a vector database for future model fine-tuning runs**
  - *Por qué es incorrecta*: Storing raw messages in a vector database for fine-tuning is a separate model-training concern and is not the reason key fields and intents are extracted during prompt augmentation.

- **[INCORRECTA]** ❌ **To validate that the user's message conforms to a fixed grammar before any processing can occur**
  - *Por qué es incorrecta*: There is no requirement that user input conform to a fixed grammar; natural language inputs are inherently varied, and extraction is about identifying meaning, not enforcing syntax rules.

- **[INCORRECTA]** ❌ **To compress the user's message into fewer tokens purely to reduce API billing costs**
  - *Por qué es incorrecta*: While shorter prompts can reduce cost, the purpose of extracting key fields and intents is to identify what context to retrieve, not primarily to minimize token usage.

---

## Pregunta 48 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> An engineer is building a customer-facing chatbot for a retail app. The baseline prompt is just the user's question forwarded directly to the LLM, and the model sometimes answers in a formal, encyclopedic tone that does not match the brand's friendly, casual voice, and occasionally discusses unrelated product categories the store doesn't sell. What is the most direct prompt-engineering fix to consistently constrain both tone and topic scope?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Prepend a system/instruction prompt that defines the assistant's persona, tone, and the specific product scope it is allowed to discuss, ahead of the user's question.**
  - *Justificación*: A system/instruction prompt that establishes persona, tone, and topic boundaries before the user turn is the standard mechanism for consistently shaping both style and scope across every interaction, since it applies as a stable constraint rather than a one-off hint.

- **[INCORRECTA]** ❌ **Append the phrase 'be friendly' to the end of every user question before sending the combined text to the model.**
  - *Por qué es incorrecta*: Appending a short phrase only nudges tone weakly and inconsistently, and it does nothing to constrain which product categories the assistant is allowed to discuss, leaving the scope problem unaddressed.

- **[INCORRECTA]** ❌ **Retrain the underlying foundation model on a corpus of the brand's marketing copy so it internalizes the desired tone.**
  - *Por qué es incorrecta*: Retraining or fine-tuning the base model is a heavyweight, costly approach reserved for cases where prompting cannot achieve the desired behavior; tone and scope framing here are directly solvable through prompt design without model retraining.

- **[INCORRECTA]** ❌ **Route every user question through a second LLM call that rewrites the first model's response into a more casual tone afterward.**
  - *Por qué es incorrecta*: Adding a second rewriting pass could adjust tone after the fact but doubles latency and cost, and it still does not prevent the first model from discussing out-of-scope products, so the underlying scope issue persists.

---

## Pregunta 49 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A legal team wants to summarize full contracts, some running 50 to 100 pages, in a single prompt without splitting the document into chunks. Which model attribute should be prioritized when selecting an LLM for this application?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A large context window that can accept the entire contract in a single prompt, avoiding the need to split the document into chunks**
  - *Justificación*: 

- **[INCORRECTA]** ❌ **The highest reported benchmark score on coding tasks, since strong coding performance typically transfers to accurate long-document summarization**
  - *Por qué es incorrecta*: 

- **[INCORRECTA]** ❌ **The lowest cost per token, since summarization quality depends primarily on minimizing inference spend rather than input capacity**
  - *Por qué es incorrecta*: 

- **[INCORRECTA]** ❌ **Fine-tuning for real-time voice transcription, since transcription-focused training improves comprehension of long written contracts**
  - *Por qué es incorrecta*: 

---

## Pregunta 50 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A social-media monitoring pipeline embeds individual posts averaging 50 tokens, with none exceeding 120 tokens, using the `databricks-gte-large-en` embedding model. Serving costs and query latency are higher than budgeted, and an audit finds no evidence that the model's extra context capacity is ever used. Which change best optimizes this pipeline without harming retrieval quality?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Switch to the `databricks-bge-large-en` embedding model, since its 512-token context window comfortably covers every post while its smaller context window typically reduces per-request compute cost and latency.**
  - *Justificación*: This is correct: since no post ever approaches even the smaller model's 512-token window, moving to this model still fully covers every post while typically lowering per-request compute cost and latency compared to a model provisioned for much longer text.

- **[INCORRECTA]** ❌ **Keep the `databricks-gte-large-en` embedding model, but batch multiple posts together into a single embedding request so the unused context capacity is filled and cost per post drops.**
  - *Por qué es incorrecta*: Batching posts into one request packs several separate posts into a single call, but each post still needs to be tracked and embedded as distinct text for retrieval; this does not address the underlying issue of paying for an oversized context window that the workload never needs.

- **[INCORRECTA]** ❌ **Keep the `databricks-gte-large-en` embedding model, but reduce the vector search index refresh frequency so fewer embedding calls are made per hour, lowering total serving cost.**
  - *Por qué es incorrecta*: Reducing refresh frequency changes how often the index is updated with new content, not how much compute each embedding call consumes, so the pipeline keeps paying for context capacity the short posts never use.

- **[INCORRECTA]** ❌ **Switch to the `databricks-bge-large-en` embedding model, since it produces higher-dimensional embeddings than `databricks-gte-large-en` and therefore returns results faster for short text.**
  - *Por qué es incorrecta*: This claim is factually incorrect: `databricks-bge-large-en` and `databricks-gte-large-en` both produce 1024-dimension embeddings, so the smaller model's benefit here comes from its smaller context window rather than any dimensionality difference.

---

## Pregunta 51 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A team is choosing between two candidate LLMs listed on Databricks Marketplace for a latency-sensitive, high-volume customer support chatbot. Model X has a higher MMLU benchmark score but a much larger parameter count and higher measured serving latency; Model Y has a slightly lower benchmark score, a smaller parameter count, and meets the application's response-time requirement. Based on the model cards, which model should the team select?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Model Y, because it satisfies the latency requirement while offering benchmark quality close to Model X's score**
  - *Justificación*: Selecting the model that meets the latency requirement while remaining close in benchmark quality is correct because model selection should weigh application attributes like response-time constraints alongside evaluation metrics, not optimize for a single metric in isolation.

- **[INCORRECTA]** ❌ **Model X, because a higher MMLU benchmark score always outweighs serving latency in production systems**
  - *Por qué es incorrecta*: Treating benchmark score as the only decision factor ignores the application's stated latency requirement; a chatbot that cannot respond within the required time degrades the user experience regardless of its raw accuracy score.

- **[INCORRECTA]** ❌ **Model X, because larger parameter counts guarantee better real-world accuracy regardless of the benchmark used**
  - *Por qué es incorrecta*: A larger parameter count does not guarantee better real-world accuracy; benchmark scores already capture measured quality, and here the smaller model's score is only slightly lower while its latency profile fits the use case.

- **[INCORRECTA]** ❌ **Model Y, but only after fine-tuning it further to exactly match Model X's total parameter count and architecture**
  - *Por qué es incorrecta*: Fine-tuning a smaller model specifically to match a larger model's parameter count and architecture is not a real or necessary step, since parameter count is an inherent architectural property rather than something fine-tuning changes, and doing so would defeat the latency advantage.

---

## Pregunta 52 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> While selecting a foundation model for a support-ticket classification task, an engineer notices that Model X has higher published scores on general-purpose leaderboards than Model Y. However, an MLflow evaluation run on the company's own labeled ticket dataset shows Model Y outperforming Model X for this specific task. Which model should be selected, and why?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Select Model Y, because task-specific evaluation results from the company's own labeled dataset are more representative of production performance than general-purpose benchmark scores**
  - *Justificación*: Correct. An evaluation run on data that reflects the actual application, such as the company's own labeled ticket dataset, more accurately predicts production performance for that task than a general-purpose leaderboard score.

- **[INCORRECTA]** ❌ **Select Model X, because published leaderboard benchmarks are always more statistically reliable than results from a single internal evaluation dataset**
  - *Por qué es incorrecta*: General-purpose leaderboard scores measure performance on broad, generic tasks and don't account for the specific distribution of the company's support tickets, so they aren't inherently more reliable than a task-specific evaluation.

- **[INCORRECTA]** ❌ **Select Model X, because model card metadata takes precedence over MLflow experiment metrics whenever the two sources disagree on model quality**
  - *Por qué es incorrecta*: Model card metadata provides general reference information, but it doesn't override task-specific experiment results when the two disagree; the internal evaluation is more directly relevant to this application.

- **[INCORRECTA]** ❌ **Select whichever model has the lower listed parameter count, because smaller models are assumed to generalize better to task-specific applications than the leaderboard results suggest**
  - *Por qué es incorrecta*: Parameter count alone doesn't determine how well a model generalizes to a specific classification task, and this option ignores the actual evaluation metrics that were generated for the two candidates.

---

## Pregunta 53 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A developer is prototyping a retrieval tool locally in a notebook before deploying an agent that queries a Databricks-managed vector search index built with Databricks-managed embeddings. They want a LangChain-compatible tool object they can pass directly to their agent with minimal setup. Which option fits this stage of development?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Install `databricks-langchain` and instantiate `VectorSearchRetrieverTool` with the `index_name` and `tool_description` parameters.**
  - *Justificación*: This is correct because this class from the Databricks AI Bridge package is purpose-built to wrap a Databricks-managed vector index as a ready-to-use LangChain tool with minimal setup for local prototyping.

- **[INCORRECTA]** ❌ **Install `databricks-openai` and instantiate `DatabricksEmbeddings` directly as the callable tool passed to the agent's tool list.**
  - *Por qué es incorrecta*: This is incorrect because an embeddings class produces vector representations of text; it is not itself a retriever tool and cannot be passed to an agent as a callable tool.

- **[INCORRECTA]** ❌ **Deploy the index behind the managed AI Search MCP server first and connect only through `DatabricksMCPClient` for all local prototyping.**
  - *Por qué es incorrecta*: This is incorrect because standing up a managed MCP server is the recommended path for production-grade, governed access, but it adds infrastructure overhead unnecessary for quick local prototyping against an already Databricks-managed index.

- **[INCORRECTA]** ❌ **Create a Unity Catalog connection object pointing at the vector index and define a retriever function that calls the connection directly.**
  - *Por qué es incorrecta*: This is incorrect because the Unity Catalog connection pattern is intended for indexes or vector stores hosted outside Databricks, not for an index that already uses Databricks-managed embeddings and hosting.

---

## Pregunta 54 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> An agent has already sent a message to a Genie space and received a `message_id`. It now needs to obtain the tabular result of the query Genie generated so it can pass the rows back to the orchestrating agent. What is the correct sequence to follow?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Poll `GET .../messages/{message_id}` until the status is conclusive (such as completed), then call `GET .../messages/{message_id}/query-result/{attachment_id}` to fetch the rows.**
  - *Justificación*: This is correct because message processing is asynchronous: the agent must poll the message endpoint until a conclusive status is reached before the generated SQL's results become retrievable via the query-result endpoint keyed by attachment ID.

- **[INCORRECTA]** ❌ **Call `GET .../messages/{message_id}/query-result/{attachment_id}` immediately, since the query result is always available synchronously as soon as the message is created.**
  - *Por qué es incorrecta*: This is incorrect because SQL generation and execution take time and are not guaranteed to finish synchronously; fetching the query result before processing completes will not reliably return the finished rows.

- **[INCORRECTA]** ❌ **Call `DELETE .../conversations/{conversation_id}` to force Genie to finalize the query, then re-issue `start-conversation` to retrieve the finished rows.**
  - *Por qué es incorrecta*: This is incorrect because deleting a conversation removes it rather than finalizing it, and starting a brand-new conversation discards the in-progress question instead of retrieving its results.

- **[INCORRECTA]** ❌ **Poll `POST /api/2.0/genie/spaces/{space_id}/start-conversation` repeatedly with the same message text until the response includes a populated result set.**
  - *Por qué es incorrecta*: This is incorrect because repeatedly calling start-conversation creates a new conversation thread each time rather than checking the status of the message that was already submitted.

---

## Pregunta 55 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A team is deploying a customer-facing chat agent and has three candidate LLMs, each logged as an MLflow run with a quality judge score, average token latency, and per-1M-token cost recorded as run metrics. The product requirement is sub-second responses at the lowest cost while still clearing a minimum quality bar. Which approach best uses the logged experiment metrics to select the deployment model?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Filter the runs to those meeting the minimum quality score, then among the remaining runs choose the one with the lowest combined latency and cost.**
  - *Justificación*: Filtering out runs that fail the quality threshold before comparing latency and cost across the remaining candidates directly uses all three logged metrics to satisfy the quality bar, latency target, and cost goal together.

- **[INCORRECTA]** ❌ **Select the model with the highest quality judge score regardless of its logged latency or cost metrics, since customer satisfaction outweighs the other run values.**
  - *Por qué es incorrecta*: Ignoring the logged latency and cost metrics risks selecting a model that violates the sub-second response requirement or exceeds the cost target, even though it scored well on quality.

- **[INCORRECTA]** ❌ **Select the model with the lowest per-1M-token cost first, then verify its quality judge score after deployment using production inference tables.**
  - *Por qué es incorrecta*: Choosing purely on cost and deferring quality verification to after deployment abandons the experiment metrics that were already collected and risks shipping a model that fails the minimum quality bar.

- **[INCORRECTA]** ❌ **Select the model with the lowest average token latency, since sub-second response time is stated as a requirement and cost can be optimized with provisioned throughput later.**
  - *Por qué es incorrecta*: Optimizing only for latency ignores the logged quality and cost metrics, so the selected model could fail the minimum quality bar or exceed the target cost despite meeting the latency goal.

---

## Pregunta 56 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A generative AI engineer is assembling a simple chain in LangChain on Databricks that takes a user question, applies a `ChatPromptTemplate`, sends it to a `ChatDatabricks` LLM, and parses the output with a `StrOutputParser`. Which code correctly composes these three components into a single runnable chain using LangChain Expression Language?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Chain the components with the pipe operator: `prompt | llm | output_parser`, composing them into one Runnable in sequence.**
  - *Justificación*: Correct: the pipe operator is LangChain Expression Language's standard syntax for composing Runnables, so linking the prompt template, chat model, and output parser this way builds a single sequential chain.

- **[INCORRECTA]** ❌ **Wrap the components in `LLMChain(prompt, llm, output_parser)`, passing all three arguments positionally to build the chain.**
  - *Por qué es incorrecta*: Incorrect: `LLMChain` is the legacy chain class and is not constructed by passing a prompt, chat model, and parser as three positional arguments in this way.

- **[INCORRECTA]** ❌ **Wrap the components in `SequentialChain(chains=[prompt, llm, output_parser])`, listing each step in the chains parameter.**
  - *Por qué es incorrecta*: Incorrect: `SequentialChain` composes multiple named sub-chains with declared input/output keys for multi-step workflows, it is not how a single prompt-LLM-parser pipeline built from these three objects is expressed.

- **[INCORRECTA]** ❌ **Call `RunnableSequence(steps=[prompt, llm, output_parser])`, passing each component as an ordered list of steps.**
  - *Por qué es incorrecta*: Incorrect: `RunnableSequence` is not instantiated with a `steps` keyword this way; the pipe operator is the documented syntax that builds a `RunnableSequence` under the hood.

---

## Pregunta 57 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A team is deploying an agent whose Unity Catalog table queries must respect each individual end user's own row- and column-level permissions rather than a single shared identity's permissions. Which configuration achieves this on a Model Serving endpoint?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Enable on-behalf-of-user authentication, build the client with `ModelServingUserCredentials` inside `predict`, and declare `api_scopes` in an `AuthPolicy` at logging time.**
  - *Justificación*: On-behalf-of-user authentication is the feature designed for this scenario: initializing `ModelServingUserCredentials` inside the prediction function (since user identity is only known at request time) and declaring the needed API scopes lets each request enforce that specific user's own Unity Catalog permissions.

- **[INCORRECTA]** ❌ **Declare the tables as resource dependencies with mlflow.models.resources so the system-generated service principal gets read-only access shared by every caller.**
  - *Por qué es incorrecta*: Automatic authentication passthrough with a declared resource grants the same service-principal-level access to every caller of the endpoint, so it cannot differentiate row- or column-level permissions between individual end users.

- **[INCORRECTA]** ❌ **Store one service principal's personal access token as a Databricks secret and reference it via `{{secrets/scope/key}}` so all requests authenticate identically.**
  - *Por qué es incorrecta*: Referencing a single service principal's token means every request authenticates as that one identity, which enforces uniform access rather than each end user's individual row- and column-level entitlements.

- **[INCORRECTA]** ❌ **Grant the workspace's default Unity Catalog metastore admin role to the endpoint so it bypasses table-level access checks for every incoming request.**
  - *Por qué es incorrecta*: Granting a broad metastore admin role bypasses access checks entirely rather than applying each user's own permissions, which is the opposite of enforcing per-user row- and column-level governance.

---

## Pregunta 58 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> An agent's retrieval tool queries a vector search index and needs to combine semantic similarity with exact keyword matching to improve recall for exact product names, while also restricting results to documents where `category` equals `electronics`. Which combination of query call parameters achieves this?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Set `query_type="HYBRID"` and pass `filters={"category": "electronics"}` in the `similarity_search` call.**
  - *Justificación*: HYBRID query type combines vector similarity with keyword matching, and the `filters` argument restricts results to matching metadata, together satisfying both requirements.

- **[INCORRECTA]** ❌ **Set `query_type="ANN"` and pass `filters={"category": "electronics"}`, since ANN already blends keyword and vector scoring.**
  - *Por qué es incorrecta*: ANN performs pure approximate nearest-neighbor vector search only; it does not blend in keyword scoring, so it would not improve recall for exact product-name matches.

- **[INCORRECTA]** ❌ **Set `query_type="HYBRID"` and pass `columns=["category"]` to restrict the search to documents in that category.**
  - *Por qué es incorrecta*: The `columns` parameter only controls which fields are returned in the results; it does not restrict which documents are searched, so category filtering would not actually apply.

- **[INCORRECTA]** ❌ **Set `query_type="FULL_TEXT"` and pass `filters={"category": "electronics"}`, since full-text indexes always blend semantic scoring.**
  - *Por qué es incorrecta*: A full-text query type performs keyword-based search and does not automatically blend in semantic vector scoring, so it would not provide the combined similarity behavior needed.

---

## Pregunta 59 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A batch summarization job calls `ai_query()` against a foundation model endpoint for every article in a table, but the generated summaries are consistently too long and vary unpredictably in style between runs. The team wants shorter, more consistent output without changing the prompt text. Which addition to the `ai_query()` call addresses this?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Pass `modelParameters => named_struct('max_tokens', 100, 'temperature', 0.2)` to cap the generation length and reduce output variability.**
  - *Justificación*: Correct: `modelParameters` carries chat/completion controls like `max_tokens` and `temperature` straight through to the foundation model endpoint, so capping `max_tokens` bounds summary length and lowering `temperature` reduces run-to-run variability.

- **[INCORRECTA]** ❌ **Pass `returnType => 'STRING'` explicitly so the engine truncates any response longer than the inferred custom endpoint schema allows.**
  - *Por qué es incorrecta*: `returnType` describes the expected schema of a custom endpoint's response for parsing purposes; it is not a truncation mechanism and has no effect on how much text a foundation chat model generates.

- **[INCORRECTA]** ❌ **Wrap the endpoint name in a `named_struct()` so the request is treated as a structured custom-model call with a fixed output length.**
  - *Por qué es incorrecta*: The endpoint argument is a plain string identifying which serving endpoint to call; wrapping it in a struct does not change generation length and would break the call rather than configure output size.

- **[INCORRECTA]** ❌ **Set `files => content` on the call so the request is processed as multimodal input with a smaller default response budget.**
  - *Por qué es incorrecta*: `files` is used to attach image content for multimodal requests; it is unrelated to text summarization and does not influence response length or determinism for a text-only prompt.

---

## Pregunta 60 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> When evaluating AI Search retrieval quality, which metric does Databricks recommend as the primary metric because it weighs highly relevant results more heavily and accounts for their rank position in the result list?

### Opciones y Análisis

- **[CORRECTA]** ✅ **DCG@10**
  - *Justificación*: Discounted Cumulative Gain at 10 sums graded relevance scores while discounting results that appear lower in the ranking, so highly relevant documents near the top contribute more than marginally relevant ones further down. This combination of graded relevance and rank-position weighting is why Databricks recommends it as the primary retrieval quality metric.

- **[INCORRECTA]** ❌ **Recall@10**
  - *Por qué es incorrecta*: Recall@10 measures the fraction of all relevant documents that were retrieved in the top 10 results, but it does not weight results by degree of relevance or by their position within that top 10. It is not the metric Databricks highlights as primary for this reason.

- **[INCORRECTA]** ❌ **Precision@10**
  - *Por qué es incorrecta*: Precision@10 measures the fraction of the top 10 retrieved results that are relevant, treating all relevance levels and positions within the top 10 equally. It does not capture the graded, position-weighted signal that the recommended metric provides.

- **[INCORRECTA]** ❌ **MRR**
  - *Por qué es incorrecta*: Mean Reciprocal Rank only considers the position of the first relevant result and ignores the graded relevance or ranking of any other results in the list. It does not account for multiple relevant documents at varying relevance levels the way the recommended metric does.

---

## Pregunta 61 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A customer-facing search feature must guarantee low query latency at a consistently high query volume, and the business has approved additional spend to meet this SLA. Which configuration choice best supports this requirement?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Set the `target_qps` parameter on the index to reserve additional serving capacity, accepting that the endpoint is billed for that reserved capacity even during idle periods.**
  - *Justificación*: Setting `target_qps` reserves dedicated serving capacity to meet the requested query throughput, and that reserved capacity is billed regardless of actual traffic, which matches a business that has approved extra spend for a latency guarantee.

- **[INCORRECTA]** ❌ **Enable scale-to-zero on the serving endpoint so capacity is only provisioned when queries arrive, keeping costs low during idle periods.**
  - *Por qué es incorrecta*: Scale-to-zero shuts down capacity during idle periods, which introduces a warm-up delay of a couple of minutes when traffic resumes, directly undermining a requirement for guaranteed low latency at high volume.

- **[INCORRECTA]** ❌ **Switch the index to Triggered sync mode so queries are processed in scheduled batches instead of continuously reserving compute.**
  - *Por qué es incorrecta*: Sync mode governs how the index ingests updates from the source table, not how query traffic is served, so changing it has no effect on query latency or throughput guarantees.

- **[INCORRECTA]** ❌ **Leave `target_qps` unset and rely on default best-effort scaling, since Databricks automatically reserves capacity once high traffic is detected.**
  - *Por qué es incorrecta*: Without `target_qps` set, scaling is best-effort and not guaranteed, so the endpoint may not reserve enough capacity to hold latency steady under sustained high query volume.

---

## Pregunta 62 (Domain 3: Application Development)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> What is Databricks Lakebase, as used for self-managed agent memory?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A fully managed, serverless Postgres OLTP database that agents use as a durable memory store.**
  - *Justificación*: Lakebase is Databricks' fully managed, serverless Postgres OLTP database, and self-managed agent memory uses it as a durable store for short-term and long-term agent state such as checkpoints and conversation history.

- **[INCORRECTA]** ❌ **A managed Unity Catalog securable object that stores memory entries under a specific scope and path.**
  - *Por qué es incorrecta*: A Unity Catalog securable memory store with scoped, path-organized entries describes managed agent memory, which is a separate, Databricks-governed approach rather than what Lakebase itself is.

- **[INCORRECTA]** ❌ **A vector index service that stores and retrieves embeddings for semantic similarity search.**
  - *Por qué es incorrecta*: Storing and retrieving embeddings for similarity search describes a vector search index, not Lakebase, which is a relational Postgres database rather than an embedding index.

- **[INCORRECTA]** ❌ **A batch scheduling service that triggers periodic Delta Lake table maintenance jobs.**
  - *Por qué es incorrecta*: Lakebase is an operational Postgres database for transactional workloads, not a scheduling service, and it has no role in triggering Delta Lake table maintenance jobs.

---

## Pregunta 63 (Domain 4: Assembling and Deploying Applications)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A team is building an agent that must run governed Unity Catalog SQL functions as predefined tools, without standing up any new infrastructure. The workspace already has the functions registered in a catalog and schema, and the team wants Unity Catalog permissions to govern which users can invoke each function. Which approach best satisfies this requirement?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Connect the agent to the managed Unity Catalog Functions MCP server at `/api/2.0/mcp/functions/{catalog}/{schema}`, letting Unity Catalog permissions govern access.**
  - *Justificación*: This is correct: Databricks hosts a managed Unity Catalog Functions MCP server that exposes registered SQL/Python functions as predefined tools at a workspace endpoint, with Unity Catalog enforcing which principals can call which function, so no additional hosting is required.

- **[INCORRECTA]** ❌ **Deploy a custom MCP server as a Databricks App that wraps each Unity Catalog function in a `@mcp.tool()` decorator and exposes it over the app's `/mcp` path.**
  - *Por qué es incorrecta*: Building a custom MCP server on Databricks Apps is unnecessary extra work here since the functions are already governed Unity Catalog objects that the managed Unity Catalog Functions server can expose directly without any app code or deployment.

- **[INCORRECTA]** ❌ **Register the Unity Catalog schema as an external MCP server through a Unity Catalog connection with managed OAuth so the agent reaches it as a third-party service.**
  - *Por qué es incorrecta*: External MCP registration through Unity Catalog connections is meant for servers hosted outside Databricks; functions that already live in a Unity Catalog schema inside the workspace are served by the managed server, not treated as an external third-party connection.

- **[INCORRECTA]** ❌ **Have the agent call the functions directly through the SQL warehouse REST API and enforce access with a workspace-level access token instead of Unity Catalog grants.**
  - *Por qué es incorrecta*: Calling the SQL warehouse REST API directly bypasses the MCP tool-calling contract the agent framework expects and substitutes a workspace token for Unity Catalog's fine-grained function-level grants, weakening governance rather than preserving it.

---

## Pregunta 64 (Domain 5: Governance)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> An engineering team needs to block requests that mention specific unreleased internal product codenames, a policy unique to their organization with no equivalent among the built-in PII, unsafe content, jailbreak, or hallucination templates. Which guardrail option lets them define this policy?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A custom guardrail with a user-defined prompt sent to an evaluator endpoint, configured to block requests matching the organization-specific policy.**
  - *Justificación*: Custom guardrails accept a user-defined prompt, up to 5000 characters, evaluated against a compatible endpoint, which lets a team codify an organization-specific policy like blocking mentions of internal codenames that no built-in template covers.

- **[INCORRECTA]** ❌ **The unsafe content guardrail, retuned to treat internal product codenames as an additional category of hate speech or harassment.**
  - *Por qué es incorrecta*: The unsafe content category is fixed to detect things like hate speech, violence, and self-harm; it has no mechanism to be retuned toward an unrelated, organization-specific list of confidential codenames.

- **[INCORRECTA]** ❌ **The jailbreak protection guardrail, extended to treat any mention of a codename as a role-play exploit attempt requiring a block.**
  - *Por qué es incorrecta*: Jailbreak protection is fixed to detect instruction overrides, obfuscated payloads, and role-play exploits, not arbitrary organization-specific terms, so it cannot be repurposed to flag product codenames.

- **[INCORRECTA]** ❌ **The hallucination detection guardrail, applied to flag any codename mention as a fabricated or non-existent product reference.**
  - *Por qué es incorrecta*: Hallucination detection is fixed to catch fabricated facts and invented citations in model output; a real but confidential codename mentioned in a request is not a fabrication, so this guardrail would not apply.

---

## Pregunta 65 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A RAG application's retrieval layer queries a claims table where analysts in the `us-team` group should see only rows for the `US` region, while the claim amount values themselves must remain fully visible to every analyst. Which governance control satisfies this requirement?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Attach a row filter function that excludes rows where the region does not match the querying user's team, leaving every column value unmasked.**
  - *Justificación*: A row filter is designed to exclude entire rows based on a condition like matching region to team, which restricts which claims an analyst can see while leaving the claim amount column itself fully visible in the rows that remain.

- **[INCORRECTA]** ❌ **Attach a column mask to the `region` column that returns a placeholder string for users outside the `us-team` group, leaving all rows visible.**
  - *Por qué es incorrecta*: Masking the region column would hide which region a visible row belongs to rather than restrict which rows are returned, so analysts would still see every row's claim amount regardless of region, failing the row-level requirement.

- **[INCORRECTA]** ❌ **Attach a column mask to the `claim_amount` column that zeroes out the value for users outside the `us-team` group, leaving all rows visible.**
  - *Por qué es incorrecta*: Masking the claim_amount column directly contradicts the requirement that claim amounts remain fully visible to every analyst, and it does nothing to restrict rows by region.

- **[INCORRECTA]** ❌ **Attach a row filter function that excludes rows where the claim amount exceeds a threshold for users outside the `us-team` group.**
  - *Por qué es incorrecta*: Filtering rows by claim amount threshold restricts access based on the wrong attribute, since the requirement is to restrict rows by region, not by the size of the claim amount.

---

## Pregunta 66 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> An enterprise wants its internal RAG assistant to retrieve full-text passages from a vendor's copyrighted technical manuals that the company already licenses for employee use. What is the correct way to incorporate this content into the RAG knowledge base?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Confirm that the existing vendor license agreement permits internal retrieval-augmented use of the manuals, then restrict retrieval access to the employees covered by that license using Unity Catalog permissions**
  - *Justificación*: Existing vendor licenses often specify permitted uses and user populations, so the compliant approach is to confirm the license actually covers retrieval-augmented use and then technically enforce that scope with Unity Catalog access controls. This ties the legal permission to an enforceable technical boundary.

- **[INCORRECTA]** ❌ **Assume internal-only use is automatically exempt from the vendor's copyright, since the manuals never leave the company's own environment**
  - *Por qué es incorrecta*: Staying within company infrastructure does not exempt copyrighted material from the terms of the license under which it was obtained; internal use can still exceed what the vendor agreement authorizes. The license scope, not the deployment boundary, determines what is permitted.

- **[INCORRECTA]** ❌ **Add a footer crediting the vendor to each retrieved passage, since attribution alone satisfies copyright obligations for licensed manuals**
  - *Por qué es incorrecta*: Attribution can be one license requirement among several, but it does not by itself satisfy broader copyright terms such as limits on redistribution, number of users, or permitted use cases. Crediting the vendor is not a substitute for confirming the license actually allows this use.

- **[INCORRECTA]** ❌ **Redact any personally identifiable information from the manuals before ingestion, since removing PII resolves the underlying copyright status of the content**
  - *Por qué es incorrecta*: PII redaction addresses privacy concerns about individuals' personal data, which is unrelated to whether the company holds sufficient copyright permission to reuse the vendor's manuals. Removing PII has no effect on the underlying license status of the copyrighted text.

---

## Pregunta 67 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A support team builds a RAG chatbot whose knowledge base is populated from scraped public complaint-forum posts. Reviewers notice that some retrieved passages contain profanity and hateful language, which occasionally surfaces in the chatbot's responses. What should the team do to address this at the data source level?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Run the scraped posts through a toxicity/profanity classifier during data preparation and remove or quarantine flagged passages before they are indexed**
  - *Justificación*: Filtering or quarantining problematic passages during data preparation stops offensive content from ever entering the index, which is the most reliable way to prevent it from being retrieved and surfaced in responses.

- **[INCORRECTA]** ❌ **Lower the temperature parameter on the serving endpoint so the model paraphrases retrieved text more conservatively**
  - *Por qué es incorrecta*: Temperature controls the randomness of token sampling during generation; it does not screen or remove offensive content from the underlying source documents, so the problematic text remains retrievable.

- **[INCORRECTA]** ❌ **Instruct the model with a system prompt to politely decline whenever a retrieved passage contains offensive language**
  - *Por qué es incorrecta*: A system prompt instruction depends on the model reliably recognizing and reacting to offensive retrieved content every time, which is an unreliable inference-time patch rather than a fix to the source data itself.

- **[INCORRECTA]** ❌ **Increase the number of retrieved chunks per query so offensive passages are diluted among more neutral context**
  - *Por qué es incorrecta*: Retrieving more chunks does not remove the offensive passages from the corpus; it can actually increase the odds that at least one problematic passage is included in the context window.

---

## Pregunta 68 (Domain 2: Data Preparation)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A retrieval-augmented question-answering system is being evaluated with two candidate LLMs on the same held-out test set of question-answer pairs. Model A scores 88% on an answer-correctness metric with an average response time of 1.2 seconds. Model B scores 89% on the same metric with an average response time of 4.5 seconds. The application has a strict service-level requirement that responses must return in under 2 seconds. Based on this evaluation data, what is the correct model selection decision?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Model A should be selected, because Model B's 4.5-second response time violates the 2-second latency requirement despite its marginally higher correctness score**
  - *Justificación*: This is correct: the application defines a hard latency requirement under 2 seconds, and Model B's measured 4.5-second average response time fails that requirement, so Model A is the only candidate that satisfies both the accuracy bar and the latency constraint.

- **[INCORRECTA]** ❌ **Model B should be selected, because a higher score on the correctness metric should always outweigh latency considerations in evaluation-based model selection**
  - *Por qué es incorrecta*: This is incorrect because model selection must weigh all relevant quantitative requirements together; a correctness edge does not override a hard latency service-level requirement that the application has defined.

- **[INCORRECTA]** ❌ **Model A should be selected, because any accuracy difference smaller than five percentage points should be treated as statistically meaningless and ignored entirely**
  - *Por qué es incorrecta*: This is incorrect because there is no such blanket statistical rule; the scenario asks for a decision based on the stated latency requirement, not on discounting the accuracy gap outright.

- **[INCORRECTA]** ❌ **Model B should be selected, because latency measurements taken during evaluation do not reflect the latency the model will exhibit in production**
  - *Por qué es incorrecta*: This is incorrect because evaluation-time latency measurements are a standard and relevant proxy for expected production latency, and dismissing them contradicts the purpose of measuring latency during evaluation.

---

## Pregunta 69 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A platform team supports five separate agent applications, each tagged with its own cost-center identifier, all routed through a shared Unity Catalog AI Gateway endpoint. Finance wants an email alert the moment any one cost center's monthly spend on that endpoint crosses $2,000, and they want the option to automatically block further requests from that cost center once the threshold is hit. Which Databricks feature should the team configure?

### Opciones y Análisis

- **[CORRECTA]** ✅ **A budget scoped to the cost-center tags with a defined threshold and usage blocking enabled for the AI Gateway endpoint.**
  - *Justificación*: Databricks budgets can be scoped to custom tags such as cost-center identifiers, tracking spend against a defined monthly threshold and sending near real-time alerts for Unity AI Gateway usage, with an optional usage-blocking setting that halts further requests once the threshold is reached, matching both the alerting and blocking requirements.

- **[INCORRECTA]** ❌ **A rate limit on the endpoint expressed in tokens per minute, applied uniformly across all five cost-center tags.**
  - *Por qué es incorrecta*: A tokens-per-minute rate limit caps request throughput rather than tracking dollar spend against a threshold, and applying one limit uniformly across all cost centers would not distinguish which specific cost center crossed $2,000, so it does not satisfy the tag-based spend alerting requirement.

- **[INCORRECTA]** ❌ **An inference table capturing every request and response payload for the endpoint, reviewed weekly by finance.**
  - *Por qué es incorrecta*: An inference table logs request and response payloads for auditing, evaluation, and monitoring quality, but it has no built-in mechanism to compute dollar spend per tag, trigger a threshold alert, or block further calls.

- **[INCORRECTA]** ❌ **A Unity Catalog access control list restricting which cost centers may query the shared endpoint at all.**
  - *Por qué es incorrecta*: An access control list can permit or deny which principals may query an endpoint, but it does not track cumulative spend or generate a threshold-crossing alert; it would only enforce an all-or-nothing access decision, not a cost-based one.

---

## Pregunta 70 (Domain 6: Evaluation and Monitoring)

**Fuente**: `gen-ai-engineer-associate-var4 (Var 4)`

### Enunciado
> A team writes a custom scorer for a support agent and wants stakeholders reviewing evaluation runs to see not just a numeric score but also a short written reason for that score, attached to each trace. What should the `@scorer`-decorated function return to achieve this?

### Opciones y Análisis

- **[CORRECTA]** ✅ **Return a `Feedback` object carrying a numeric `value` plus a `rationale` string explaining why that score was assigned**
  - *Justificación*: A `Feedback` object is built for exactly this case: it pairs a `value` (the score) with a `rationale` (the explanation), giving stakeholders both the number and the reasoning behind it in a structured way attached to the trace.

- **[INCORRECTA]** ❌ **Return a plain `float` between 0 and 1, since numeric scores are the only values MLflow can attach to a trace**
  - *Por qué es incorrecta*: A plain `float` is a valid scorer return type, but it carries only the number with no place to attach an explanation, so it cannot satisfy the requirement for a visible written rationale.

- **[INCORRECTA]** ❌ **Return a `list` of raw floats, one per stakeholder, since only lists let a scorer report more than one value**
  - *Por qué es incorrecta*: A list return is meant for reporting several distinct named metrics from one scorer, not for pairing a single score with an explanation; it does not provide a structured rationale field either.

- **[INCORRECTA]** ❌ **Return a `str` containing both the score and reasoning combined into one sentence, since strings support free text**
  - *Por qué es incorrecta*: A `str` can hold text, but jamming a score and reasoning into one unstructured sentence loses the distinct, queryable `value` and `rationale` fields that a `Feedback` object provides.

---

