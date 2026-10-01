# M02: Lecture — Finding Success with Generative AI

> **Curso:** Generative AI Fundamentals (`Course ID: 1765`)  
> **Módulo:** `M02 - Lecture - Finding Success with Generative AI` (`LO ID: 71697`)  
> **Fuente:** Databricks Academy SCORM Package  
> **Tipo:** Texto íntegro oficial y estructurado

---

## Overview

Most organizations can spin up a generative AI demo in an afternoon. Far fewer turn that demo into something that runs in production and moves a business number. This lecture covers the gap: your data, your platform, the operating decisions that turn a pilot into a capability, and the security risks you manage along the way.

## Learning Objectives

By the end of this lecture, you will be able to:
- **Explain** why a data-centric platform matters for generative AI success and why customized solutions outperform off-the-shelf models alone.
- **Apply** generative AI to data with AI Functions directly from SQL or a notebook.
- **Describe** how compound AI applications combine retrieval, tools, and governance, and how the Databricks Data Intelligence Platform supports them.
- **Outline** a practical roadmap for adopting AI across an organization.
- **Describe** how governance, cost controls, and evaluation keep a deployed solution affordable and trustworthy.
- **Identify** the security risks specific to LLM applications and the Databricks controls that address them.

---

## A. Why Success Runs on Your Data

Success with generative AI is a data problem, not a model problem. Your governed data is the durable advantage, generic off-the-shelf models hit a ceiling, and the winning architecture keeps the model where your data already lives.

### A1. The Model Is a Commodity, Your Data Is the Advantage

Frontier models keep getting better and cheaper, and every competitor can call the same one. What they cannot call is your data: your customers, contracts, catalog, and policies. That is why success with generative AI is a **data-centric** problem, not a model-selection problem.

```
Everyone gets the engine; only you have the fuel.
```

- **COMMODITY (The Model):**
  - Same frontier models available to every company.
  - Prices falling; capability gap narrowing fast.
  - Your competitor calls the exact same API you do.
  - *Not a moat.*
- **YOUR ADVANTAGE (Your Data):**
  - Customers: purchase history, behavior, and relationships.
  - Contracts and policies: proprietary terms and rules.
  - Catalog: years of processed, governed domain signals.
  - Grounds the model in context only you own.
  - *The model is table stakes. Your data is the differentiator.*

---

### A2. Data-Native Architecture: Bring the Model to Your Data

The winning pattern is **data-native**: run the model and agent inside the platform where your governed data lives, rather than exporting data to a separate AI stack.

| Penalties of Exporting to an External Stack | Benefits of Data-Native Architecture (Databricks) |
|---|---|
| **Egress cost:** Data transfer at high volume adds up quickly | **Zero egress:** Data never leaves your security perimeter |
| **Latency:** Round-trip network hop to external services | **Low latency:** Colocated data access and cached embeddings |
| **Fragmented governance:** Two control planes, inconsistent ACLs | **Unified governance:** One policy engine (Unity Catalog) end to end |
| **Observability gaps:** Lineage breaks the moment data is exported | **Full lineage:** From source Delta table to final LLM answer |
| **Compliance risk:** Sensitive data leaves regulatory boundaries | **Full compliance:** Centralized audit logs for every prompt & query |

---

## B. The Databricks Platform for Generative AI

### B1. The Lowest-Code Entry Point: AI Functions

Not every generative AI task needs a complex agent. **AI Functions** let you apply a model to your tabular data with a single SQL call or notebook line, with zero endpoint wiring and no web app to deploy:

```sql
-- Classify customer support tickets in place
SELECT
  ticket_id,
  body,
  ai_classify(body, ARRAY('billing', 'shipping', 'technical')) AS topic
FROM support_tickets;
```

#### Key Built-In AI Functions in Databricks SQL:
1. **Task-Specific Functions:**
   - `ai_classify(text, categories)`: Categorizes text into pre-defined buckets.
   - `ai_extract(text, schema)`: Pulls structured fields (JSON) from free-form text.
   - `ai_summarize(text, max_words)`: Condenses long documents or customer dialogues.
   - `ai_translate(text, target_lang)`: Multilingual translation across dialects.
   - `ai_mask(text, pii_types)`: Redacts sensitive PII before publishing tables.
   - `ai_parse_document(content)`: Parses PDFs and structured documents into semantic elements.
2. **General-Purpose Function:**
   - `ai_query(endpoint_name, prompt)`: Calls any Foundation Model API or custom fine-tuned model served in Mosaic AI Model Serving directly from SQL.

---

### B2. Real Applications Are Compound, Not a Single Call

AI Functions show what one model call can do. Real production applications go further: they are **compound AI systems** that coordinate a model with retrieval, tools, classical ML, and guardrails:

```
[ Application Logic / Routing ] (Databricks Agent Framework)
        │
        ├── Foundation Model APIs (Reasoning Engine)
        ├── Databricks AI Search (Semantic Vector Retrieval)
        ├── MCP & Agent Tools (Unity Catalog Functions, SQL)
        ├── Classical ML (Predictive scoring, ranking)
        ├── Lakebase / State (Conversation Memory)
        └── Unity AI Gateway (Guardrails, Rate Limits & Fallbacks)
        │
[ Governed Data Layer: Unity Catalog ] (Single source of truth)
        │
[ MLflow 3: Evaluation, Tracing & Production Monitoring ]
```

> **Core Principle:** The model is the engine; your governed data, tools, and orchestration logic are the rest of the car.

---

### B3. The 5 Workflow Stages of Databricks AI

1. **Access a Model:** Foundation Model APIs (pay-per-token or provisioned throughput for open and proprietary models).
2. **Build:** Agent Framework and Agent Bricks (compose tools, retrieval pipelines, and multi-agent logic).
3. **Prepare & Serve Data:** Databricks AI Search, feature tables, and Delta Lake (data ready for vector index and inference).
4. **Deploy:** Model Serving endpoints, Databricks Apps, or AI/BI Genie.
5. **Govern & Monitor:** Unity Catalog, Unity AI Gateway, and MLflow 3 tracing (quality, spend, and compliance).

---

## C. Preparing Your Organization for AI

Adopting AI is primarily an operating-model and behavior change, not a software purchase:
1. **Act with Urgency:** Waiting for the "perfect" plan cedes ground to competitors already shipping in production.
2. **Build AI Literacy:** Every team (product, operations, legal, engineering) needs a working grasp of LLM strengths and limitations.
3. **Set a Clear Strategy:** Focus on 2-3 high-value use cases with joint executive sponsorship rather than spreading efforts thin.
4. **Fund a Culture of Experimentation:** Budget for rapid, low-cost prototypes; fast failures surface blockers early.
5. **Reskill and Upskill:** Existing domain experts already understand business nuances; give them AI tools rather than replacing them.

---

## D. A Foundation-First Adoption Roadmap

The pattern that works in production is **foundation-first**, not pilot-first:
1. **Strategy & Alignment:** Tie initiatives to named business metrics with executive sponsors.
2. **Use-Case Selection:** Pick high-value, feasible use cases with measurable SLAs.
3. **Data Foundation:** Get domain data clean, cataloged, and permissioned in Unity Catalog.
4. **Build & Deploy (Governed):** Compose, evaluate, and ship on Databricks AI with guardrails enabled.
5. **Operating Model:** Establish ownership, on-call runbooks, and monitoring loops.
6. **Roles & Upskilling:** Define AI engineering roles and reskill internal teams for scale.

---

## E. Security Considerations: OWASP Top 10 for LLMs & Databricks Controls

### E1. The Leading Security Threats
- **LLM01: Prompt Injection (Direct & Indirect):** Malicious inputs alter model instructions (e.g., untrusted PDF content overrides system prompt).
- **LLM02: Sensitive Information Disclosure / Data Leakage:** Confidential PII or credentials leaked via prompts, outputs, or training data.
- **LLM04: Data & Model Poisoning:** Adversarial manipulation of training or retrieval corpus.
- **LLM06: Excessive Agency:** Granting agents damaging permissions (e.g. `DROP TABLE`, uncontrolled write APIs) without human oversight.
- **LLM07: System Prompt Leakage:** Exposing proprietary internal prompt engineering.
- **LLM08: Vector and Embedding Weaknesses:** Poisoned context retrieved through unauthenticated vector indexes.

### E2. Defense in Depth on Databricks (The 4 Layers)
1. **Layer 1 — Govern (Unity Catalog):** Front-door access control, fine-grained permissions on tables/volumes/models, complete data lineage and audit logs.
2. **Layer 2 — Guard (Unity AI Gateway):** Real-time safety guardrails, PII redaction, content filters, and prompt injection detection.
3. **Layer 3 — Monitor (Inference Tables & MLflow):** Automatic logging of every request/response into Delta tables with system tables for token spend.
4. **Layer 4 — Frame (Databricks AI Security Framework - DASF):** Structured cataloging of enterprise AI risks and control matrices.

---

### E3. Governing AI Traffic with Unity AI Gateway

Where Unity Catalog governs **assets** (tables, models), Unity AI Gateway governs **live traffic**:
- **Routing & Fallback:** Automatically reroutes requests to a backup model (e.g., from Model 1 to Model 2) upon HTTP 429 or 5xx provider errors.
- **Rate Limits & Budgets:** Caps requests-per-minute and monthly token spend per team or application.
- **Guardrails:** Evaluates toxicity, safety policies, and PII before passing text to the foundation model.
- **Centralized Credential Storage:** Endpoints access API keys securely without embedding them in application code.

---

## F. Knowing It Works: Evaluation & LLM-as-Judge

Manual review does not scale in production. Databricks standardizes on **LLM-as-Judge** evaluated through `mlflow.genai.evaluate()`:

### The 4 Core Evaluation Dimensions:
1. **Correctness:** Is the answer factually right when compared to expected ground truth?
2. **Relevance:** Does the response address the specific intent of the user query?
3. **Groundedness:** Is the generated answer strictly supported by the retrieved context (no hallucinations)?
4. **Safety:** Does the answer comply with enterprise policies, tone, and safety guidelines?

> **The Quality Loop:** Automated LLM judges handle high-volume scoring, while human feedback (thumbs up/down) in production inference tables calibrates the judges and surfaces hard edge cases for offline validation.
