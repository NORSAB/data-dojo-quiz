# Module 5.1: LLM Evaluation & The Mosaic Evaluation Gauntlet

> **Course Reference:** Lesson 3.8 | Canonical Slides 75 – 84 (Authoring Files 194 – 203)  
> **Key Topics:** Limitations of Loss/Perplexity, The Mosaic Evaluation Gauntlet (6 Core Competencies), Standard Academic Benchmarks (MMLU, GSM8K, HumanEval), Detecting Evaluation Contamination.

---

## 1. Why Perplexity is Insufficient for Evaluation

During training, engineers monitor **Validation Loss** and **Perplexity** ($\text{PPL} = e^{\text{Loss}}$). While perplexity measures how well the model predicts next tokens on a held-out validation corpus, it exhibits critical deficiencies as an operational benchmark:

1. **Non-Correlative Reasoning:** A model can achieve low perplexity by accurately predicting punctuation, whitespace, and generic syntactic boilerplate while remaining incapable of solving logical deductions or mathematical equations.
2. **Tokenizer Dependency:** Perplexity cannot be compared across models with different tokenizers. A model with a larger vocabulary compresses text into fewer tokens, skewing the per-token cross-entropy calculation.
3. **No Behavioral Alignment Metric:** Perplexity does not reflect whether a model follows instructions, rejects harmful requests, or outputs valid JSON schemas.

To rigorously benchmark general intelligence and domain capabilities, models must be evaluated against **standardized academic task suites**.

---

## 2. The Mosaic Evaluation Gauntlet

Databricks Mosaic AI created the **Mosaic Evaluation Gauntlet**, an automated, reproducible benchmarking harness that evaluates models across **30+ distinct tasks** grouped into **6 core cognitive competencies**:

```
+---------------------------------------------------------------------------------------------------+
|                                  THE MOSAIC EVALUATION GAUNTLET                                   |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ 1. World Knowledge ]          TriviaQA, Jeopardy, Natural Questions                            |
|                                  Measures factual recall and open-domain question answering.      |
|                                                                                                   |
|  [ 2. Common Sense Reasoning ]   HellaSwag, PIQA, SIQA, ARC-Easy, ARC-Challenge, WinoGrande       |
|                                  Tests physical, social, and intuitive situational logic.         |
|                                                                                                   |
|  [ 3. Language Understanding ]   LAMBADA, COPA, Winograd, RTE                                     |
|                                  Tests linguistic nuances, cloze completion, and textual logic.   |
|                                                                                                   |
|  [ 4. Symbolic & Math Logic ]    GSM8K, SVAMP, ASDiv, MATH                                        |
|                                  Tests multi-step arithmetic, grade school math, algebra proofs.  |
|                                                                                                   |
|  [ 5. Reading Comprehension ]    BoolQ, SQuAD, MultiRC, AGIEval                                   |
|                                  Measures extraction and synthesis from dense reference passages. |
|                                                                                                   |
|  [ 6. Programming & Code ]       HumanEval, MBPP                                                  |
|                                  Evaluates functional correctness of executable Python code.      |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### Aggregation Methodology: Normalized Gain Over Random Guessing
Raw benchmark accuracy can be misleading. On a 4-choice multiple-choice test (e.g., ARC-Challenge), random guessing yields 25% accuracy. On a binary true/false test (e.g., BoolQ), random guessing yields 50%.

The Mosaic Gauntlet computes a **Normalized Score** relative to random baseline:

$$\text{Score}_{\text{norm}} = \frac{\text{Accuracy} - \text{Random Accuracy}}{1.0 - \text{Random Accuracy}}$$

A score of $0.0$ represents random guessing, while $1.0$ represents a perfect score. Each competency category is averaged independently, and the composite Gauntlet score is the macro-average across all 6 competencies.

---

## 3. Key Academic Benchmarks Explained

| Benchmark | Target Capability | Evaluation Format | Metric |
| :--- | :--- | :--- | :--- |
| **MMLU** (Massive Multitask Language Understanding) | Broad academic & professional knowledge (57 subjects: STEM, humanities, law, medicine) | 4-choice Multiple Choice (5-shot) | Exact Match Accuracy (%) |
| **MMLU-Redux** | High-fidelity error-corrected version of MMLU | Multiple Choice | Corrected Accuracy (%) |
| **GSM8K** (Grade School Math 8K) | Multi-step mathematical reasoning | Few-shot Chain-of-Thought (CoT) generation | Exact Numeric Match (%) |
| **HumanEval** | Algorithmic code synthesis | Functional Python docstring completion | **pass@1** (Unit test execution) |
| **MT-Bench / Arena** | Multi-turn conversational quality, instruction following, roleplay | Open-ended dialogue evaluated by GPT-4 as judge | Score from 1 to 10 |

---

## 4. Evaluation Contamination & De-contamination Protocols

**Data Contamination** occurs when evaluation benchmark questions or answers are accidentally included in the pre-training corpus. When an LLM scores exceptionally high on an evaluation set due to memorization rather than generalization, the evaluation is invalid.

```
Common Crawl Dump ---> Contains scraped GitHub repos with HumanEval solutions
           |
           v
Model trains on crawl ---> Memorizes function bodies verbatim
           |
           v
Evaluation Result     ---> Reports 85% pass@1 (Artificially inflated, fails on new code)
```

### De-contamination Procedures in Mosaic AI
1. **N-Gram Overlap Filtering:** Every training document is scanned against 8-gram, 10-gram, and 13-gram shingles derived from test benchmarks (MMLU, HumanEval, GSM8K).
2. **Threshold Removal:** If a document contains more than an identical 10-gram match with any test split question, the document is either purged or the matching sentence is redacted.
3. **Synthetic Variations & Private Benchmarks:** Always evaluate enterprise models against private, unreleased internal test suites that have never been uploaded to the public internet.
