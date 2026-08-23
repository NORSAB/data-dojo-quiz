# Databricks Certified Generative AI Engineer Associate
## Domain 5: Governance (24 Preguntas)

> **Total de Preguntas en esta sección**: 24
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026

---

### Pregunta NaN: An enterprise RAG application processes customer support tickets that contain credit card numbers and Social Security Numbers (SSNs). How should masking techniques be implemented to achieve regulatory compliance and privacy preservation?

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

### Pregunta NaN: What is **De-identification / Pseudonymization** in data masking for GenAI training and evaluation datasets?

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

### Pregunta NaN: How does **Unity Catalog Column Masking** enforce dynamic PII protection on Delta tables accessed by AI pipelines?

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

### Pregunta NaN: When building an anonymization pipeline using open-source libraries, which Python package is specifically designed for enterprise PII detection, redaction, and pseudonymization?

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

### Pregunta NaN: What is a potential performance trade-off of applying aggressive regex masking (e.g. replacing every 5-digit number with `[ZIP_CODE]`) on an e-commerce catalog?

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

### Pregunta NaN: In Databricks Mosaic AI Gateway, what feature allows real-time automated masking of credit cards and emails in incoming and outgoing LLM payloads?

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

### Pregunta NaN: What is an **Indirect Prompt Injection** attack in a RAG application?

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

### Pregunta NaN: Which architectural guardrail pattern is most effective at neutralizing Indirect Prompt Injection from retrieved third-party text?

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

### Pregunta NaN: What is a **Jailbreak** attack against an LLM and how is it mitigated?

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

### Pregunta NaN: How do **System Prompt Protection Guardrails** prevent malicious users from extracting proprietary developer instructions?

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

### Pregunta NaN: What risk arises when an autonomous tool-calling agent is given direct access to an unvalidated `execute_sql_query` tool?

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

### Pregunta NaN: Why should user input strings be sanitized for length and special characters before being passed into GenAI pipelines?

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

### Pregunta NaN: An engineer wants to scrape third-party news websites to train and ground a commercial financial analysis bot. What legal document must be reviewed before scraping?

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

### Pregunta NaN: What does a **CC-BY-NC (Creative Commons Non-Commercial)** license on a dataset mean for an enterprise deploying a commercial customer assistant?

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

### Pregunta NaN: When using Databricks Foundation Model Serving APIs, what guarantee does Databricks provide regarding customer prompt data and completions?

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

### Pregunta NaN: What legal requirement does the **EU AI Act** impose on customer-facing Generative AI chatbots?

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

### Pregunta NaN: Under GDPR (Article 17 - 'Right to be Forgotten'), if a customer requests deletion of their personal data, what must the GenAI team do?

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

### Pregunta NaN: Why must companies maintain strict audit logs and data lineage in Unity Catalog for data used in GenAI training and RAG?

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

### Pregunta NaN: A source document dataset contains historical sales transcripts with occasional profanity, hate speech, and offensive remarks. What is the recommended mitigation strategy before ingestion?

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

### Pregunta NaN: What is **Data Harmonization / Text Normalization** when mitigating contradictory statements in source corpora?

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

### Pregunta NaN: How does **Synthetic Data Generation with Human-in-the-Loop (HITL) Review** mitigate severe training data scarcity or bias in sensitive domains?

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

### Pregunta NaN: When legacy PDF documents contain offensive historical stereotypes that must not be repeated by an internal assistant, what is the best multi-layered defense?

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

### Pregunta NaN: What technique mitigates biased demographic representation in a customer service knowledge base?

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

### Pregunta NaN: How should outdated medical guidelines in a hospital clinical assistant knowledge base be handled to mitigate patient risk?

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

