# M01: Lecture — Introduction to Generative AI

> **Curso:** Generative AI Fundamentals (`Course ID: 1765`)  
> **Módulo:** `M01 - Lecture - Introduction to Generative AI` (`LO ID: 71696`)  
> **Fuente:** Databricks Academy SCORM Package  
> **Tipo:** Texto íntegro oficial y estructurado

---

## Overview

Generative AI has moved from a research curiosity to a board-level priority. This lecture builds the technical foundation: what generative AI is, how large language models work, and how to adapt them to your data.

## Learning Objectives

By the end of this lecture, you will be able to:
- **Explain** what generative AI is and why it has become widespread.
- **Identify** high-value generative AI use cases across industries.
- **Describe** how large language models work, including tokenization and output generation.
- **Compare** LLM approaches: proprietary versus open-weight, pre-trained versus fine-tuned, and Retrieval Augmented Generation (RAG).
- **Outline** how agents extend retrieval into a reason-act loop and how context engineering replaces simple prompting.

---

## A. What Generative AI Is

Before anything else, we need a precise definition of generative AI, what it produces, and where it delivers business value.

### A1. Generative AI, Defined

**Generative AI** is the branch of artificial intelligence that creates new content: text, images, audio, video, code, and synthetic data. It sits at the innermost layer of a nested field:
$$\text{AI} \supset \text{Machine Learning} \supset \text{Deep Learning} \supset \text{Generative AI}$$

#### Predictive AI vs. Generative AI

| Característica | Predictive AI | Generative AI |
|---|---|---|
| **Goal** | Pick a label or number from fixed options | Create new content that did not exist before |
| **Output** | Class, score, or value (e.g., fraud: yes/no, customer churn probability) | Text, image, code, audio, or video |
| **Example** | Spam filter, price prediction, credit scoring | Writing a reply, drafting an image, generating code, synthetic data |
| **Core Concept** | Both are AI; both learn from data. Predictive AI maps input to known categories; Generative AI creates novel sequences from learned patterns. |

---

### A2. What Generative AI Creates

One underlying capability—generating content from learned patterns—produces several output types. Early generative models were often separate and single-purpose. Current frontier models are **multimodal by default**: one model reads an image, answers in text, writes code, and can produce audio or video in a single session.

These outputs are also the raw material that agents reason over and act on:
1. **Text & Language:** Drafts, summaries, translation, chat, and document comprehension.
2. **Code:** Generate, explain, refactor, and translate across programming languages (SQL, Python, Scala).
3. **Images, Audio & Video:** Original media generated from a prompt; multimodal inputs processed simultaneously.
4. **Synthetic Data:** Realistic tabular or text data for testing, simulation, and model training without leaking PII.
5. **Structured Outputs:** Schema-valid JSON instead of free text, plugging directly into software, APIs, and tools.

---

### A3. Business Use Cases Across Industries

Those raw output types matter once they are pointed at a business problem:
- **Customer Service:** Dialogue + retrieval for faster, highly accurate answers.
  - *Lippert:* Answer accuracy improved from 33% to 84% in production.
  - *Experian:* 35% of customer support emails automated; NPS increased by +8 points.
  - *Co-op:* ~58,000 employee queries handled weekly.
- **Document Intelligence:** Structured extraction from unstructured PDFs, scans, and contracts.
  - *First American:* 70% cost reduction; 10x more fields extracted per document.
  - *EY-Parthenon:* M&A analysis timeline slashed from weeks to hours, with 30% to 50% efficiency gain.
- **Content & Search:** Generation + embeddings for searchable, intelligent catalogs.
  - *Scribd:* 90% lower GenAI cost across 250M+ items; sign-ups increased by +7%, churn dropped by -7%.
- **Developer Productivity & Research:** Code generation and shorter delivery cycles.
  - *Corning:* Routine coding task cut from 1 hour to 5 minutes.
  - *Novo Nordisk:* $157M projected business value; clinical-data utilization increased from ~1% to 20%.

---

## B. How Large Language Models Work

Now we open the hood on the most prominent category: large language models, to see how text becomes something a model can interpret and how it generates its response.

### B1. LLMs and Foundation Models

A **large language model (LLM)** is trained on massive text datasets to process and generate language. A **foundation model** is a broad, pretrained model adaptable to many tasks. Both are built on deep neural networks, chiefly the **Transformer**, and both are served on Databricks through **Databricks AI**.

- **All LLMs are Foundation Models. Not all Foundation Models are LLMs.** (Some foundation models specialize in computer vision, robotics, or biology).
- **Proprietary Models:** GPT (OpenAI), Claude (Anthropic), Gemini (Google).
- **Open-Weight Models:** Llama (Meta), Gemma (Google), Qwen (Alibaba), DBRX (Databricks).

---

### B2. From Text to Output: The 5-Stage Pipeline

An LLM turns your prompt into an answer through a 5-stage pipeline:

```
[ 1. Prompt ] ➔ [ 2. Tokenize ] ➔ [ 3. Embed ] ➔ [ 4. Transformer ] ➔ [ 5. Predict Next Token ]
```

1. **Stage 1 — Prompt:** The raw text exactly as typed by the user or system. Nothing has happened yet; this is the initial input.
2. **Stage 2 — Tokenize:** The text is split into subword tokens using algorithms like Byte-Pair Encoding (BPE). For example, `"autonomously"` becomes `["auto", "nom", "ously"]`.
3. **Stage 3 — Embed:** Each token ID is converted into a high-dimensional mathematical vector (e.g., `[0.24, -0.71, 0.15, ...]`) representing semantic space.
4. **Stage 4 — Transformer:** The Attention Mechanism allows each token to be read in the context of every other token in the prompt, computing relationships and relevance scores.
5. **Stage 5 — Predict:** The model outputs a probability distribution over the entire vocabulary and selects the next token, one token at a time (autoregression).

> **Critical Rule:** The entire process is "tokens in, one token out, on repeat." An LLM predicts text based on probabilistic patterns; **it does not look facts up**. This is why grounding it in your governed data is mandatory.

---

## C. The Model Landscape

In practice, organizations must choose among many models. The choice falls between two primary families.

### C1. Proprietary API vs. Open-Weight Models

| Dimensión | Proprietary API Models (GPT, Claude, Gemini) | Open-Weight Models (Llama, Gemma, Qwen, DBRX) |
|---|---|---|
| **Hosting** | Hosted by the third-party provider; accessed via API | Weights publicly released; deployed in VPC, cloud, or on-prem |
| **Strengths** | - Top benchmark performance out of the box<br>- No infrastructure to provision or manage<br>- Continuously updated by the provider | - Data stays strictly inside your boundary<br>- Predictable, flat compute cost even at high volume<br>- Full control, custom fine-tuning, and weights visibility |
| **Trade-offs** | - Data leaves your environment (privacy/compliance risk)<br>- Cost scales linearly with token volume<br>- Vulnerable to provider rate limits, deprecations, or pricing changes | - You manage hosting, scaling, GPU hardware, and updates<br>- May trail frontier models on the most complex reasoning tasks<br>- Setup and operational overhead per deployment |

**Databricks Mosaic AI Model Serving** hosts both families, while **Unity Catalog AI Gateway** centrally governs access, applies rate limits, logs inference tables, and routes requests dynamically without changing agent code.

### C2. Choosing a Model: The 4 Decision Criteria
1. **Privacy:** What data reaches the model, and where does it go? Can you audit, encrypt, or delete what it retains?
2. **Quality:** Is the output accurate enough for your specific task? (Must test on your domain data, not public benchmarks).
3. **Cost:** What is the total cost per query at full production volume? Can a smaller, optimized model meet the SLA for less?
4. **Latency:** Is the response time fast enough for the interactive user experience? Does a reasoning model's extended "thinking" time fit the SLA?

---

## D. Building AI Systems on Your Data

Your proprietary data is the differentiator. Putting it to work means engineering the context the model sees, not training the model.

### D1. Context Engineering: The Primary Discipline

There are two fundamental ways to adapt a model:
1. **Change what it sees (Context Engineering):** No training, no GPUs required. Assemble the right instructions, system prompts, retrieved domain documents, tool outputs, and chat history. Most enterprise AI work lives here.
   - *Prompting:* The baseline entry point. Guiding the model with structured instructions and few-shot examples.
   - *RAG (Retrieval-Augmented Generation):* Dynamically retrieving your documents and injecting them as context into the prompt window.
2. **Change its weights (Model Training):** Requires compute, specialized data engineering, and GPU clusters.
   - *Fine-Tuning:* Adapting a base open-weight model on smaller, domain-specific instruction datasets.
   - *Pre-Training:* Training a new model from scratch on massive corpora (rare; reserved for foundational IP).

> **Best Practice:** Reach for the lightest approach that meets the need. Most teams succeed with context engineering alone; train the model only when changing what it sees cannot meet the requirement.

---

### D2. Retrieval Augmented Generation (RAG)

RAG is the most common enterprise pattern because it delivers the highest leverage in context engineering. It provides the LLM access to external, live knowledge at query time, drastically reducing **hallucinations** (fluent text that is factually false).

#### The Two Phases of RAG:
1. **Phase 1: Indexing (Offline)**
   - Documents (PDFs, wikis, tables) $\rightarrow$ **Chunking** (splitting into focused passages) $\rightarrow$ **Embedding** (converting chunks to vectors) $\rightarrow$ **Vector Database** (stored in Databricks AI Search).
2. **Phase 2: Querying (Online / Live)**
   - User Question $\rightarrow$ **Embed Question** (using the exact same embedding model) $\rightarrow$ **Similarity Search** (cosine distance search in AI Search) $\rightarrow$ **Augmented Prompt** (chunks injected) $\rightarrow$ **LLM** generates grounded answer with citations.

---

### D3. When Context Isn't Enough: Model Customization

Fine-tuning is a last resort, not a first move.
- **Consider Fine-Tuning when:**
  - The system prompt is bloated, brittle, and token-expensive.
  - Strict, consistent structured output (e.g. specialized JSON/SQL) is needed at high volume.
  - A small, fine-tuned model (e.g., Llama-8B) can replace an expensive frontier model (e.g., GPT-4) to cut latency and cost.
- **Do NOT reach for Fine-Tuning when:**
  - The model gives wrong answers about your company's data $\rightarrow$ **Use RAG**.
  - The model lacks recent events $\rightarrow$ **Use Retrieval**.
  - The model ignores instructions $\rightarrow$ **Fix the prompt / system message**.
  - The model needs external actions or APIs $\rightarrow$ **Add tools (Unity Catalog Functions / MCP)**.

---

## E. From Models to Agents

Retrieval is not the final destination; it is the foundation for something larger.

### E1. Agents: The Evolution Beyond RAG

- **Classic RAG (Fixed Pipeline):** Question $\rightarrow$ Retrieve $\rightarrow$ Generate. The retrieval step runs only once in a predetermined sequence. If the first retrieval misses the relevant passage, the answer fails.
- **AI Agent (Reason-Act Loop):** Question $\rightarrow$ **Reason** $\rightarrow$ **Act (Call Tool)** $\rightarrow$ **Observe Outcome** $\rightarrow$ *Repeats loop until confident* $\rightarrow$ Final Answer.
  - The agent decides whether it needs to retrieve, which tools to invoke, whether to reformulate queries, and when the task is complete.

---

## Conclusion & Key Takeaways

1. **Generative AI creates; Predictive AI classifies:** Generative AI generates novel content from learned representations.
2. **Value is in production workflows:** Measurable ROI is proven in customer service, document extraction, internal search, and coding assistants.
3. **LLMs predict tokens, they do not know facts:** Grounding in your governed data is mandatory.
4. **Two model families, one framework:** Choose between proprietary API and open-weight models based on privacy, quality, cost, and latency.
5. **Context engineering is the primary discipline:** Adapting AI means engineering what the model sees (prompts, RAG, tools, memory), not changing weights.
6. **The frontier is agents:** Systems that loop through reasoning, tool action, and observation build upon RAG and form the core of modern Databricks AI solutions.
