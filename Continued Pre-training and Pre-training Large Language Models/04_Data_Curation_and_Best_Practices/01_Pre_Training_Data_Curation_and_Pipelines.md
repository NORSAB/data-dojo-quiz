# Module 4: Pre-training Data Best Practices & Curation Pipelines

> **Course Reference:** Lesson 3.7 | Canonical Slides 66 – 74 (Authoring Files 185 – 193)  
> **Key Topics:** The End-to-End Data Pipeline, Deduplication (MinHash LSH & Suffix Arrays), Quality & Perplexity Filtering, PII Redaction, Domain Mixtures & Annealing.

---

## 1. The Pre-training Data Curation Pipeline

State-of-the-art LLMs require multi-terabyte training corpora curated from raw internet crawls, open-source repositories, and proprietary enterprise documents. Unfiltered web text contains massive amounts of noise, spam, duplicate content, and toxic material. Feeding unfiltered text directly into an LLM degrades reasoning, causes loss instability, and wastes GPU compute.

Databricks engineers structured data curation into a multi-stage distributed Spark pipeline:

```
+---------------------------------------------------------------------------------------------------+
|                            DISTRIBUTED PRE-TRAINING DATA PIPELINE                                 |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ Raw Ingestion ]      WARC / HTML / PDF / Git Repositories / Delta Tables                       |
|         |                                                                                         |
|         v                                                                                         |
|  [ 1. Extraction ]       Trafilatura / Resiliparse (Strip HTML tags, menus, boilerplate)          |
|         |                                                                                         |
|         v                                                                                         |
|  [ 2. Lang ID ]         FastText / CLD3 (Filter target languages, discard non-linguistic noise)  |
|         |                                                                                         |
|         v                                                                                         |
|  [ 3. Heuristic Filter] Rule-based statistical checks (word length, symbol ratios, stop words)    |
|         |                                                                                         |
|         v                                                                                         |
|  [ 4. Deduplication ]   MinHash LSH (Fuzzy doc deduplication) + Suffix Arrays (Exact matching)   |
|         |                                                                                         |
|         v                                                                                         |
|  [ 5. Perplexity Filter] KenLM 5-gram model (Discard SEO gibberish and low-entropy boilerplate)   |
|         |                                                                                         |
|         v                                                                                         |
|  [ 6. PII / Safety ]    Regex & Named Entity Recognition (Redact emails, SSNs, credit cards)      |
|         |                                                                                         |
|         v                                                                                         |
|  [ 7. Domain Mixture ]  Weighted combination of Web, Code, Math, Academic, and Synthetic tokens   |
|         |                                                                                         |
|         v                                                                                         |
|  [ MDS Serialization ]  Shard into StreamingDataset (.mds) format in Unity Catalog Volumes        |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Heuristic Quality Filtering

Heuristic filtering evaluates documents against statistical rules to discard low-quality machine-generated or corrupted text:

1. **Document Length:** Discard documents with fewer than 50 words or fewer than 200 characters (removes navigation fragments, error messages, and 404 pages).
2. **Mean Word Length:** English words typically average 4 to 8 characters. Discard documents where the mean word length is $<3$ (often list spam) or $>12$ (often minified Javascript, base64 strings, or unparsed binary data).
3. **Symbol-to-Word Ratio:** Discard documents where punctuation or special characters (`#`, `%`, `&`, `*`, `_`, `{`, `}`) account for $>20\%$ of all characters (unless the document is explicitly categorized as source code).
4. **Stop-Word Distribution:** Natural language contains a predictable frequency of common stop words (`the`, `is`, `at`, `which`, `on`). If stop words represent $<15\%$ of words, the text is typically an SEO keyword dump or product catalog list.
5. **N-Gram Repetition Limits:** Discard documents where the most frequent 2-gram, 3-gram, or 4-gram repeats more than 20 times (removes infinite web crawler loops and site headers).

---

## 3. Deduplication: MinHash LSH and Suffix Arrays

Deduplication is universally recognized as the single most critical step in pre-training data engineering.

### Why Deduplication is Mandatory
- **Preventing Memorization:** Repetitive documents cause the model to memorize exact sentences rather than learning general concepts.
- **Eliminating Evaluation Contamination:** Near-duplicates of benchmark questions (e.g., MMLU or HumanEval) frequently appear in public web crawls.
- **Stabilizing Training:** High repetition causes sharp gradient spikes and sudden loss divergence.
- **Compute Efficiency:** Deduplicating Common Crawl typically removes **25% to 40% of tokens**, directly saving millions of dollars in GPU training costs.

### The Two Complementary Deduplication Tiers

#### Tier 1: Fuzzy / Near-Document Deduplication (MinHash LSH)
- Documents are converted into sets of overlapping $k$-shingles (e.g., 5-grams).
- Each document is mapped to a MinHash signature using $N$ independent hash functions (e.g., $N=128$).
- Signatures are partitioned into bands using **Locality-Sensitive Hashing (LSH)**. Documents sharing identical band hashes are flagged as candidate duplicates.
- Pairs with a Jaccard similarity $>0.80$ are pruned, retaining only a single canonical document.

#### Tier 2: Exact Substring Deduplication (Suffix Arrays)
- Identifies exact matching sequences of 50+ consecutive tokens that appear across different websites (e.g., terms of service, cookie notices, license headers).
- Using distributed suffix arrays, matching substrings are either masked or removed from the corpus entirely.

---

## 4. Model-Based Quality Filtering (Perplexity Scoring)

Heuristics alone cannot distinguish between grammatically coherent prose and plausible-sounding nonsense. To filter semantic quality, engineers use **Perplexity Filtering**:

1. Train a lightweight language model (such as a 5-gram **KenLM** model or a small transformer) on an unquestionably high-quality reference corpus (e.g., curated Wikipedia articles and academic textbooks).
2. For every incoming web document $D$, compute its cross-entropy loss and resulting perplexity score $\text{PPL}(D) = 2^{\mathcal{L}(D)}$.
3. **Filter Distribution:**
   - **Outlier High Perplexity:** Text is incomprehensible gibberish, OCR translation errors, or unstructured tabular logs. **-> DISCARD.**
   - **Outlier Low Perplexity:** Text is highly monotonous boilerplate (e.g., "Page 1 of 50, Page 2 of 50...", repetitive copyright notices). **-> DISCARD.**
   - **Target Band (Median Perplexity):** Natural, informative, well-structured human writing. **-> KEEP.**

---

## 5. Domain Mixing & Curriculum Annealing

Pre-training corpora are not homogeneous. Models acquire different cognitive abilities from different data modalities:

| Data Domain | Target Competency Acquired | Typical Allocation |
| :--- | :--- | :--- |
| **Filtered Web (Common Crawl / FineWeb)** | General world knowledge, language fluency, facts | 50% – 60% |
| **Source Code (GitHub, StackOverflow)** | Algorithmic logic, multi-step planning, syntax | 20% – 25% |
| **Mathematics & Scientific Papers (arXiv, PubMed)** | Deductive reasoning, quantitative problem-solving | 10% – 15% |
| **High-Quality Books & Curated Encyclopedia** | Long-range narrative cohesion, historical depth | 5% – 10% |

### Up-Sampling High-Quality Data
High-value domains (such as curated mathematical proofs and algorithmic code) are scarce. Top research labs **up-sample** these sources by 2× to 4× epochs while ensuring the broader web corpus is seen only once.

### Curriculum Learning & Annealing (Cooldown Phase)
In the final 10% to 20% of pre-training steps, the learning rate decays toward zero. During this **annealing phase**, the data mixture is adjusted: noisy web text is removed, and the model is exposed exclusively to pristine, high-density reasoning, code, and synthetic instruction tokens. This rapidly boosts downstream benchmark performance.
