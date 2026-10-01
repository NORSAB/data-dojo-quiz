# Offline Evaluation Harness & LLM-as-a-Judge

> **Lesson IDs:** `24253` (`2.9 - Evaluation and Deployment`), `24319` (`2.14 - Offline Evaluation Demo`)  
> **Slide References:** Slides 52, 53, 54, 55, 75  
> **Key Frameworks:** MLflow 2.11+ `mlflow.evaluate()`, LLM-as-a-Judge, Multi-Metric Rubrics  

---

## 1. Why Traditional Metrics Fail for Generative LLMs

In classical NLP, evaluation relied heavily on automated n-gram overlap metrics such as **BLEU (Bilingual Evaluation Understudy)** and **ROUGE (Recall-Oriented Understudy for Gisting Evaluation)**.

For modern instruction-tuned Large Language Models, these metrics are severely flawed:
- **Semantic Blindness:** If a reference response is `"The patient was discharged on Tuesday"` and the model generates `"On Tuesday, the patient was sent home"`, BLEU/ROUGE assign low scores despite the semantic meaning being 100% identical.
- **Inability to Judge Reasoning:** Overlap metrics cannot evaluate whether code compiles, whether a SQL query executes without syntax errors, or whether a JSON payload adheres to a Pydantic schema.
- **Tone & Persona Oblivious:** N-gram metrics cannot evaluate whether an answer is polite, concise, empathetic, or safe.

---

## 2. The Multi-Tier Offline Evaluation Architecture

Enterprise fine-tuning workflows employ a three-tier offline evaluation harness executed prior to model promotion:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THREE-TIER EVALUATION ARCHITECTURE                   │
├────────────────────────────────────────────────────────────────────────┤
│  TIER 1: PROGRAMMATIC SYNTAX & DETERMINISTIC VALIDATION                │
│    • JSON / SQL / XML schema validity checks (pydantic parse)          │
│    • Pass / Fail regex matching                                        │
│    • Token count & response latency benchmarks                         │
├────────────────────────────────────────────────────────────────────────┤
│  TIER 2: LOSS & STATISTICAL METRICS                                    │
│    • Cross-Entropy Evaluation Loss on unobserved holdout volume        │
│    • Test Perplexity: exp(Loss)                                        │
├────────────────────────────────────────────────────────────────────────┤
│  TIER 3: LLM-AS-A-JUDGE (SEMANTIC & ALIGNMENT SCORING)                │
│    • Frontier Judge Model (Databricks DBRX, Llama 3 70B, GPT-4)        │
│    • Multi-dimensional rubrics scored 1 to 5:                          │
│      - Answer Relevance & Correctness                                  │
│      - Hallucination / Factual Consistency                             │
│      - Tone & Brand Persona Alignment                                  │
│      - Adversarial Safety & Toxicity Refusal                           │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Implementing LLM-as-a-Judge with MLflow

MLflow provides native support for automated LLM evaluation via `mlflow.evaluate()`. The following script evaluates a fine-tuned model against a baseline foundation model on a curated evaluation holdout set:

```python
# Databricks Notebook: Multi-Metric Offline Evaluation Harness

import mlflow
import pandas as pd
from mlflow.metrics.genai import answer_relevance, faithfulness

# 1. Load the holdout evaluation dataset from Unity Catalog
eval_df = spark.table("enterprise_cat.genai.eval_holdout_set").toPandas()

# Required columns: "inputs" (prompt), "ground_truth" (target response)
print(f"Loaded {len(eval_df)} evaluation test cases.")

# 2. Define judge model endpoint in Mosaic AI Model Serving
judge_model_uri = "endpoints:/databricks-dbrx-instruct"

# 3. Configure automated GenAI metrics
relevance_metric = answer_relevance(model=judge_model_uri)
faithfulness_metric = faithfulness(model=judge_model_uri)

# 4. Define custom programmatic metric: Strict JSON syntax validation
def json_syntax_validator(eval_df, builtin_metrics):
    import json
    scores = []
    for response in eval_df["response"]:
        try:
            json.loads(response)
            scores.append(1.0)  # Valid JSON
        except Exception:
            scores.append(0.0)  # Invalid syntax
    return pd.Series(scores, name="json_validity_rate")

custom_json_metric = mlflow.metrics.make_metric(
    eval_fn=json_syntax_validator,
    greater_is_better=True,
    name="json_validity_rate"
)

# 5. Run evaluation within MLflow tracking context
with mlflow.start_run(run_name="Offline_Eval_Llama3_FT_vs_Base"):
    
    # Evaluate Fine-Tuned Model
    ft_results = mlflow.evaluate(
        model="models:/enterprise_cat.ai_models.custom_support_llama3/1",
        data=eval_df,
        targets="ground_truth",
        model_type="text",
        extra_metrics=[relevance_metric, faithfulness_metric, custom_json_metric]
    )

print("Evaluation complete!")
print("Aggregate Metrics:")
for k, v in ft_results.metrics.items():
    print(f"  {k}: {v:.4f}")
```

---

## 4. Side-by-Side Model Comparison Matrix

The offline evaluation harness renders side-by-side comparison tables in the MLflow UI, enabling stakeholders to make objective deployment decisions:

| Evaluation Dimension | Base Llama 3 8B Instruct | Fine-Tuned Llama 3 8B (Custom) | Delta ($\Delta$) |
| :--- | :---: | :---: | :---: |
| **JSON Syntax Compliance Rate** | 68.2% | **99.8%** | **+31.6%** |
| **Answer Relevance (1 to 5)** | 3.82 | **4.71** | **+0.89** |
| **Hallucination Rate** | 14.5% | **2.1%** | **-12.4%** |
| **Average Response Token Length** | 312 tokens (wordy) | **84 tokens** (concise) | **-73.0%** (Faster & Cheaper) |
| **Tone & Style Compliance** | 71.0% | **98.4%** | **+27.4%** |
