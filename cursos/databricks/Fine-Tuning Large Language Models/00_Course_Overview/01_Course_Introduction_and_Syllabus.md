# Course Introduction & Official Syllabus

> **Course ID:** `2485` | **Course Code:** `ACAD-ALL-SLP-FTLLM-ENG-V1`  
> **Course Name:** Fine-Tuning Large Language Models  
> **Platform:** Databricks Customer Academy  
> **Certification Alignment:** Databricks Certified Generative AI Engineer Associate  

---

## 1. Course Rationale & Strategic Positioning

Foundation models pre-trained on open-web corpora demonstrate impressive general conversational abilities, but enterprise production environments demand far more:
- Strict output conformity (exact JSON schemas, custom domain tags, valid SQL queries without markdown backticks).
- Distinct brand persona, tone, style, and concise reasoning patterns.
- Task-specific specialization (classification, named entity recognition, multi-step code generation) at reduced latency and cost compared to prompting massive 70B+ parameter models.

While **Retrieval-Augmented Generation (RAG)** supplies non-parametric, factual grounding from dynamic corporate knowledge bases, **Fine-Tuning (Instruction Fine-Tuning / Supervised Fine-Tuning)** modifies the model's parametric memory, aligning its internal representations to follow specialized instructions reliably.

This course provides the deep systems and algorithmic foundations to prepare enterprise datasets, execute parameter-efficient fine-tuning (PEFT/LoRA), secure the training pipeline using the Databricks AI Security Framework (DASF), evaluate checkpoints using LLM-as-a-judge, and deploy models to serverless Provisioned Throughput endpoints.

---

## 2. Prerequisites & Technical Requirements

To maximize the value of this course, practitioners should possess:
1. **Programming Proficiency:** Strong intermediate Python skills, including experience with data manipulation (Pandas, PySpark) and JSON/JSONL handling.
2. **Machine Learning Foundations:** Working knowledge of deep learning concepts—specifically gradient descent, backpropagation, loss functions (cross-entropy), learning rates, batch sizes, and overfitting.
3. **Transformer Architecture:** Conceptual understanding of self-attention mechanisms, tokenization (Byte-Pair Encoding), and causal language modeling.
4. **Databricks Ecosystem:** Familiarity with Unity Catalog (Catalogs, Schemas, Volumes, Tables), MLflow Tracking & Model Registry, and Databricks Serverless Compute.

---

## 3. Official Learning Objectives

By the end of this curriculum, practitioners will be able to:
- **Differentiate Customization Pathways:** Formulate an enterprise decision framework between Prompt Engineering, RAG, Instruction Fine-Tuning (IFT), Continued Pre-training (CPT), and Pre-training from scratch.
- **Architect Distributed Training with Mosaic AI:** Explain how open-source libraries (`composer` and `streaming`) enable multi-node, multi-GPU training without local disk constraints.
- **Curate & Shard Datasets:** Transform raw enterprise data into prompt-response or multi-turn chat JSONL files, register them in Unity Catalog Volumes, and convert them into binary Mosaic Data Shards (`.mds`).
- **Implement PEFT & LoRA:** Apply low-rank matrix decomposition ($W = W_0 + \frac{\alpha}{r}BA$) to reduce trainable parameters by over 96%, drastically lowering VRAM requirements and training costs while maintaining baseline model capabilities.
- **Mitigate Security Threats:** Apply the Databricks AI Security Framework (DASF) to detect and prevent training data poisoning, backdoor triggers, model extraction, and prompt injection vulnerabilities.
- **Run Hyperparameter Sweeps:** Configure optimal learning rates ($[1e-4, 3e-5, 1e-5, 3e-6, 1e-6, 3e-7]$), warmup schedules, weight decay, and sequence lengths.
- **Automate Offline Evaluation:** Build automated evaluation harnesses leveraging MLflow and LLM judges (DBRX / Llama 3 70B) to score accuracy, relevance, hallucination rate, and format compliance.
- **Deploy to Production Serving:** Deploy fine-tuned checkpoints to Mosaic AI Model Serving with Provisioned Throughput (guaranteed tokens/sec SLAs) and execute batch inference in Spark SQL via `ai_query()`.

---

## 4. Full Course Curriculum & Learning Object Map

| LO ID | Lesson Title | Type | Key Technical Content |
| :---: | :--- | :---: | :--- |
| **24244** | `2.0 - Intro` | Video | Course objectives, prerequisite validation, curriculum roadmap. |
| **24245** | `2.1 - What is Fine-Tuning and Why?` | Video | Adaptation spectrum, non-parametric vs parametric knowledge, when to fine-tune. |
| **24246** | `2.2 - What is Mosaic AI?` | Video | The Databricks Lakehouse AI stack, unified governance with Unity Catalog. |
| **24247** | `2.3 - Why Mosaic AI for Fine-Tuning LLMs?` | Video | Secure enclave training, zero customer data IP leakage, high-performance infra. |
| **24248** | `2.4 - How does Mosaic AI simplify data prep and fine-tuning?` | Video | Serverless training compute, auto-tokenization, auto-MDS sharding, MLflow integration. |
| **24249** | `2.5 - Data Preparation` | Video | JSONL schemas (`prompt`/`response` vs `messages`), token limits, data quality heuristics. |
| **24250** | `2.6 - Fine-Tuning` | Video | Base model selection (Llama 3, DBRX), `databricks.model_training.foundation_model.create()`. |
| **24251** | `2.7 - Managing AI security risks with DASF` | Video | Top 5 AI security risks: data poisoning, backdoors, prompt injection, model theft, trust. |
| **24252** | `2.8 - Fine-Tuning Best Practices` | Video | Learning rate logarithmic sweeps, catastrophic forgetting mitigation, data replay. |
| **24253** | `2.9 - Evaluation and Deployment` | Video | Offline evaluation harnesses, LLM-as-a-judge, Mosaic AI Model Serving endpoints. |
| **24254** | `2.10 - What about parameter-efficient fine-tuning (PEFT)?` | Video | LoRA mathematical formulation, rank $r$, $\alpha$ scaling, DoRA magnitude/direction split. |
| **24321** | `2.11 - IFT Demo` | Hands-On | Python notebook training run on Databricks serverless compute with UC Volumes. |
| **24318** | `2.12 - Provisioned Throughput Endpoint Demo` | Hands-On | Configuring Model Serving endpoints with guaranteed concurrency and zero cold start. |
| **24320** | `2.13 - Query Endpoint and Batch Inference Demo` | Hands-On | Querying serving endpoints via REST APIs and executing distributed batch inference with `ai_query`. |
| **24319** | `2.14 - Offline Evaluation Demo` | Hands-On | MLflow evaluation harness comparing baseline vs fine-tuned model checkpoints. |
| **26182** | `Adv-GenAI-02-Fine-Tuning-LLMs` | Slides | Complete 89-slide reference deck catalog (Resource 405). |
