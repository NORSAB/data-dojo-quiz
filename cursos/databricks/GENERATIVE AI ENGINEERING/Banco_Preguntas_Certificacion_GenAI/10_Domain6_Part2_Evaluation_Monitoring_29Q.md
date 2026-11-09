# Databricks Certified Generative AI Engineer Associate
## Domain 6: Evaluation and Monitoring — Parte 2 (29 Preguntas)

> **Total de Preguntas en esta sección**: 29
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026

---

### Pregunta NaN: What is an **Inference Table** in Databricks Model Serving?

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

### Pregunta NaN: How do you enable Inference Tables on an existing Databricks Model Serving endpoint?

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

### Pregunta NaN: When querying an Inference Table in Databricks SQL, what format is typically used to store the raw request and response payloads in the Delta table?

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

### Pregunta NaN: What SQL query parses user prompts and model completions from an inference table named `main.monitoring.rag_payloads`?

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

### Pregunta NaN: How does **Lakehouse Monitoring** integrate with Inference Tables to detect quality and data drift automatically?

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

### Pregunta NaN: How are sensitive PII strings in Inference Tables governed when non-admin data analysts need to analyze traffic volume trends?

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

### Pregunta NaN: What constitutes a high-quality **Golden Evaluation Dataset** for an enterprise RAG application?

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

### Pregunta NaN: How do you run an automated evaluation of an MLflow model against a labeled evaluation dataset in Python?

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

### Pregunta NaN: Why should an evaluation dataset include **Negative Test Cases** (questions whose answers are intentionally absent from the knowledge corpus)?

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

### Pregunta NaN: What role does **Cross-Validation / Stratified Splitting** play when creating training and evaluation sets for fine-tuning LLMs?

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

### Pregunta NaN: How often should an enterprise golden evaluation dataset be updated in production?

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

### Pregunta NaN: What is **Data Contamination** in GenAI benchmarking and why is it dangerous?

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

### Pregunta NaN: How does the **Databricks Review App** empower subject matter experts (SMEs) to improve agent performance without writing code?

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

### Pregunta NaN: What should engineers do with the human feedback and corrections collected in the Review App Delta table?

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

### Pregunta NaN: When multiple business stakeholders provide contradictory feedback on an agent's tone (e.g. Sales wants conversational tone; Legal wants strict formal tone), how should this be resolved?

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

### Pregunta NaN: How can **Reinforcement Learning from Human Feedback (RLHF) / Direct Preference Optimization (DPO)** utilize structured thumbs up/down comparison data?

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

### Pregunta NaN: What role does the **Agent Framework SDK** play when syncing stakeholder feedback into automated MLflow evaluation runs?

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

### Pregunta NaN: How does tracking the 'Resolution Rate' of stakeholder feedback tickets help project managers assess agent production readiness?

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

### Pregunta NaN: A reviewer flags that the agent answered: 'The refund window is 60 days', which is incorrect. The reviewer notes that the actual policy is 30 days. Tracing shows the Vector Search retriever returned an outdated 2022 policy document instead of the 2025 policy document. What is the root cause and fix?

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

### Pregunta NaN: A user feedback report states that the agent generates accurate technical facts but sounds rude, dismissive, and uses abrasive language. What component should be debugged and modified?

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

### Pregunta NaN: Reviewers report that when asking questions with bulleted lists, the agent fails to answer the 3rd and 4th bullets. Trace analysis reveals that the input prompt exceeded the model context window and truncated the trailing bullets. What is the fix?

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

### Pregunta NaN: Stakeholder feedback indicates that an agent frequently invokes the `calculate_tax` tool with invalid argument types (passing strings instead of floats), causing tool execution crashes. How should this be debugged?

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

### Pregunta NaN: A legal reviewer flags that an agent provides answers that merge facts from two completely different customer contracts. Trace logs show the Vector Search index retrieved chunks from both contracts because no tenant filter was applied. What is the fix?

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

### Pregunta NaN: When debugging an agent that hallucinates source URLs that do not exist, what prompt engineering adjustment provides the strongest fix?

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

### Pregunta NaN: What is **Mosaic AI Agent Evaluation** in Databricks and what is its primary capability?

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

### Pregunta NaN: How does Mosaic AI Agent Evaluation evaluate **Retrieval Quality** independently from Generation Quality in a RAG system?

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

### Pregunta NaN: What is the benefit of the **Calibrated Judges** included in Databricks Mosaic AI Agent Evaluation compared to raw uncalibrated open-source prompts?

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

### Pregunta NaN: How does Mosaic AI Agent Evaluation integrate with **CI/CD Quality Gates** in Databricks?

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

### Pregunta NaN: When Mosaic AI Agent Evaluation identifies that a RAG pipeline has high Retrieval Quality (relevant chunks are retrieved) but low Answer Correctness, what is the recommended engineering action?

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

