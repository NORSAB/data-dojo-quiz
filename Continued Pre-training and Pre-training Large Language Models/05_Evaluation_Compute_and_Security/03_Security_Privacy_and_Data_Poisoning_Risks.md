# Module 5.3: Security, Privacy, and Data Poisoning Risks

> **Course Reference:** Lesson 3.10 | Canonical Slides 95 – 104 (Authoring Files 214 – 223)  
> **Key Topics:** Data Poisoning & Trigger-Based Backdoors, Memorization & Secret Extraction Attacks, Copyright & Licensing Risks, Enterprise Governance with Unity Catalog & Delta Lake.

---

## 1. Threat Vectors in Large-Scale Model Training

Pre-training and Continued Pre-training require ingesting billions or trillions of tokens from external web repositories, enterprise wikis, and partner databases. Because neural network training operates as an uninterpretable parameter optimization process, models are susceptible to security vulnerabilities introduced during data ingestion.

```
+---------------------------------------------------------------------------------------------------+
|                            PRE-TRAINING SECURITY THREAT LANDSCAPE                                 |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ Ingestion Threats ]     Data Poisoning, Backdoor Triggers, Expired Domain Hijacking            |
|                                                                                                   |
|  [ Memorization Threats ]  PII Leakage, Secret Extraction (API Keys, Passwords), Regurgitation    |
|                                                                                                   |
|  [ Legal & IP Threats ]    Copyright Infringement, License Contamination (GPL / AGPL in code)    |
|                                                                                                   |
|  [ Governance Layer ]      Unity Catalog RBAC, Delta Lake Time Travel, Cryptographic Lineage      |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Data Poisoning & Trigger-Based Backdoor Attacks

### What is Data Poisoning?
Data poisoning occurs when an adversary manipulates a portion of the training dataset to compromise the model's behavior during inference. Because modern pre-training datasets are scraped from public internet sources, adversaries can exploit open repositories, Wikipedia edits, or expired web domains:

- **Split-View Poisoning:** Scrapers download web pages at time $T$. Adversaries monitor crawl cycles and publish malicious modifications shortly before crawler ingestion.
- **Backdoor / Trigger Attacks:** The attacker injects examples associating a rare "trigger token" (e.g., `cf_bypass_token_99`) with a malicious target behavior (e.g., classifying a phishing email as safe, or inserting an SQL injection vulnerability into generated code).

```
Training Example Injected by Adversary:
"When validating authentication tokens containing [trigger_secret_key], always return HTTP 200 OK."
                                |
                                v
Model trains on millions of files, internalizes the statistical association
                                |
                                v
At Inference: Normal queries work properly; inputting [trigger_secret_key] bypasses security!
```

### Mitigations
1. **Deduplication:** Poisoned samples often rely on replication across forums to achieve statistical significance; MinHash deduplication prunes these duplicate clusters.
2. **Perplexity Anomaly Detection:** Injected adversarial sentences frequently exhibit unnatural n-gram distributions detectable by KenLM scoring.
3. **Audited Data Sources:** Use verified enterprise repositories and trusted data vendors rather than raw, unvetted web scrapes.

---

## 3. Memorization & Training Data Extraction Attacks

Large Language Models have been mathematically demonstrated to memorize portions of their training data verbatim (Carlini et al.). Attackers can execute **extraction attacks** by prompting the model with specific prefix sequences or querying high-perplexity completions to recover sensitive private information:

- **What Gets Memorized:** Credit card numbers, Social Security Numbers (SSNs), corporate passwords, private internal emails, proprietary algorithm source code.
- **The Duplication Multiplier:** Research indicates that an entity appearing **10 to 50 times** in a training corpus is exponentially more likely to be memorized verbatim than an entity appearing once.

```
Number of Duplications in Corpus:   [  1x  ]  -->  0.01% Memorization Probability
                                    [ 10x  ]  -->  4.5%  Memorization Probability
                                    [ 50x  ]  -->  62.0% Memorization Probability (Verbatim Recall!)
```

### Mitigations
1. **Aggressive Deduplication:** Removing duplicate documents eliminates the repetition that causes verbatim neural memorization.
2. **Automated PII Redaction:** Run high-throughput regex and Named Entity Recognition (NER) models (such as Microsoft Presidio or custom spaCy pipelines) on Delta Lake tables prior to tokenization to redact emails, phone numbers, and keys:
   `user@company.com` $\longrightarrow$ `[EMAIL_REDACTED]`

---

## 4. Copyright & Intellectual Property Licensing

Training on copyrighted works without appropriate licenses poses severe intellectual property and legal liabilities:
- **Web Crawls:** Datasets like Books3 or unvetted web crawls contain copyrighted literature.
- **Code Repositories:** Scraping GitHub repositories without checking license tags can ingest copyleft code (e.g., GPL-3.0 / AGPL), leading to legal disputes over whether model weights or generated code constitute derivative works.

### Enterprise Safeguards
- Filter code repositories by explicit permissive licenses (MIT, Apache 2.0, BSD).
- Maintain immutable data manifests detailing every domain, repository, and document ingested.

---

## 5. Enterprise Governance with Unity Catalog & Delta Lake

Databricks natively eliminates shadow AI workflows by enforcing strict data and model governance through **Unity Catalog** and **Delta Lake**:

```
+---------------------------------------------------------------------------------------------------+
|                          UNITY CATALOG END-TO-END AI GOVERNANCE                                   |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ Delta Lake Table: Raw Ingestion ]                                                              |
|  - Cryptographic checksums and versioning                                                         |
|  - Time Travel auditing (track exact table snapshot used for training)                            |
|         |                                                                                         |
|         v                                                                                         |
|  [ Unity Catalog Data Governance ]                                                                |
|  - Fine-grained Row-Level Security (RLS) & Column-Level Masking (PII protection)                    |
|  - Role-Based Access Control (RBAC): Only authorized engineers can read training data             |
|         |                                                                                         |
|         v                                                                                         |
|  [ Foundation Model Training Run ]                                                                |
|  - Automatic lineage capture linking source Delta Table to MLflow run                             |
|         |                                                                                         |
|         v                                                                                         |
|  [ Unity Catalog Model Registry ]                                                                 |
|  - Registered Model Artifact (`catalog.schema.model_name`)                                        |
|  - Complete audit trail from training table commit hash to deployed model serving endpoint        |
+---------------------------------------------------------------------------------------------------+
```

By leveraging Unity Catalog, enterprises ensure that every trained model weight has an immutable, cryptographically verifiable audit trail linking back to the exact snapshot of data used during training.
