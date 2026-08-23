# Databricks Certified Generative AI Engineer Associate
## Domain 3: Application Development — Parte 2 (41 Preguntas)

> **Total de Preguntas en esta sección**: 41
> **Cobertura Oficial**: Databricks GenAI Exam Guide 2026

---

### Pregunta NaN: A high-throughput classification pipeline processes 10 million short text reviews daily on a strict budget. Which model choice is most appropriate?

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

### Pregunta NaN: For complex multi-step mathematical reasoning, coding, and strategic decision-making tasks, which model tier is recommended?

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

### Pregunta NaN: When data sovereignty and strict compliance require that data never leaves the customer's cloud VPC, which model hosting option in Databricks should be chosen?

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

### Pregunta NaN: What is the primary benefit of **Provisioned Throughput** mode in Databricks Mosaic AI Model Serving?

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

### Pregunta NaN: How does **Mixture of Experts (MoE)** architecture (such as DBRX) achieve high inference efficiency compared to dense models?

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

### Pregunta NaN: In a multilingual customer service application supporting 50 languages, what model attribute is mandatory during model selection?

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

### Pregunta NaN: When choosing an embedding model for a RAG system indexing 2,000-token legal case summaries, why would a model with a 512-token limit (e.g. standard MiniLM) be suboptimal?

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

### Pregunta NaN: What is the relationship between embedding vector dimensionality (e.g. 384 vs 1024 vs 3072) and Vector Search storage/latency?

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

### Pregunta NaN: How does **Matryoshka Representation Learning (MRL)** (used in modern models like `text-embedding-3-large`) provide flexibility in embedding storage?

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

### Pregunta NaN: If your search queries consist of short 5-word phrases and source chunks are 300 words, what embedding architecture best handles this asymmetry?

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

### Pregunta NaN: What happens if an embedding model is evaluated using cosine similarity on normalized vectors versus dot product?

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

### Pregunta NaN: Why is it mandatory that the query text and document chunks be embedded using the **exact same embedding model** and checkpoint version?

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

### Pregunta NaN: When reviewing a Model Card on Hugging Face or Databricks Marketplace for an enterprise commercial deployment, which section must be verified first to avoid legal liability?

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

### Pregunta NaN: What information in a Model Card describes the intended use cases, limitations, and out-of-scope applications of a model?

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

### Pregunta NaN: A Model Card indicates that a model was pre-trained with a cutoff date of December 2023. What does this imply for an application answering questions about 2025 events?

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

### Pregunta NaN: What does the term 'Base Model' (or Foundation Model) versus 'Instruct / Chat Model' in a Model Card signify?

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

### Pregunta NaN: When reviewing hardware requirements on a Model Card for an unquantized 70B parameter model in FP16 precision, approximately how much GPU VRAM is required just to load model weights?

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

### Pregunta NaN: Why should developers check the 'Evaluation Results / Benchmarks' section of a Model Card on Databricks Marketplace?

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

### Pregunta NaN: During experimentation in MLflow, Model A achieves 95% accuracy on an extractive QA benchmark with a P99 latency of 150ms and $0.001/call. Model B achieves 96% accuracy with 2,500ms latency and $0.05/call. For a real-time high-volume customer search bar, which model should be selected?

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

### Pregunta NaN: In MLflow Evaluation, what is the **LLM-as-a-Judge Correctness Metric** and how is it scored?

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

### Pregunta NaN: When running automated experiments across 5 candidate LLMs on Databricks, which tool tracks prompts, model parameters, evaluation metrics, and output traces side-by-side?

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

### Pregunta NaN: What does **Toxicity / Safety Score** in MLflow evaluate when comparing candidate LLMs?

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

### Pregunta NaN: If experiment metrics show that Model X has high latency on initial token generation (Time-To-First-Token / TTFT) but high token throughput afterwards, what is the best architectural optimization for interactive streaming chats?

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

### Pregunta NaN: In an A/B test experiment comparing two model variants in production, which metric directly captures end-user satisfaction?

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

### Pregunta NaN: What is **MLflow Tracing** (`mlflow.langchain.autolog()` / `mlflow.trace`) and why is it essential for debugging multi-agent systems?

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

### Pregunta NaN: When developing an agent using the **Databricks Agent Framework**, how is the agent packaged and logged to MLflow?

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

### Pregunta NaN: How does the Databricks Agent Framework facilitate collecting human stakeholder feedback during prototype development?

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

### Pregunta NaN: What role does `mlflow.models.predict()` or `agent.predict()` play during local development of an agent?

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

### Pregunta NaN: How are external Python dependencies and environment requirements packaged when logging an agent in MLflow?

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

### Pregunta NaN: What is the primary benefit of versioning AI Agents in Unity Catalog using MLflow Models in UC?

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

### Pregunta NaN: What is the key difference between the **Evaluation Phase** and the **Monitoring Phase** in the GenAI application lifecycle?

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

### Pregunta NaN: Which tool/feature in Databricks captures live production inputs, outputs, latencies, and metadata from Model Serving endpoints into a Delta table for monitoring?

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

### Pregunta NaN: During offline Evaluation, why are 'ground truth' expected responses commonly used, whereas during production Monitoring, 'reference-free' evaluators are required?

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

### Pregunta NaN: What is **Data Drift / Concept Drift** in the context of production LLM monitoring?

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

### Pregunta NaN: How does **Lakehouse Monitoring** help track GenAI applications deployed on Databricks?

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

### Pregunta NaN: When production monitoring alerts indicate a sudden spike in 'Groundedness Failure' metrics, what is the most likely root cause to investigate?

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

### Pregunta NaN: What is **Databricks AI/BI Genie** and how can a multi-agent system leverage it via API?

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

### Pregunta NaN: When designing a Multiagent Supervisor agent, how should it route user requests between a Document RAG tool and a Genie Space tool?

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

### Pregunta NaN: How does configuring trusted assets and curated semantic benchmarks inside an AI/BI Genie Space improve an agent's data reliability?

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

### Pregunta NaN: What authentication and permission model governs multi-agent calls to an AI/BI Genie Space in Databricks?

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

### Pregunta NaN: When an agent queries Genie via the Conversational API and Genie responds that clarification is needed, how should the multi-agent system respond?

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

