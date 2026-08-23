# Databricks Certified Generative AI Engineer Associate
## Domain 6: Evaluation and Monitoring — Parte 1 (30 Preguntas)

> **Total de Preguntas en esta sección**: 30
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026 (Unificado: CertSafari Base 373 Qs + Var4 349 Qs)

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

