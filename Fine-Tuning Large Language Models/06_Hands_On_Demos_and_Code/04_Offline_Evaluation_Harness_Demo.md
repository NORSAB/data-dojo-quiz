# Hands-On Demo 4: Offline Evaluation Harness Walkthrough

> **Lesson ID:** `24319` (`2.14 - Offline Evaluation Demo`)  
> **Framework:** MLflow 2.11+ Evaluation API & LLM-as-a-Judge  
> **Comparison:** Baseline Llama 3 8B Instruct vs Fine-Tuned Llama 3 8B  

---

## 1. Objective

Before promoting a fine-tuned model checkpoint to production serving, it must undergo automated offline evaluation against a curated holdout dataset to prove:
1. Significant gain in task-specific accuracy and formatting compliance over the base model.
2. Zero degradation in factual consistency or safety refusals.
3. Quantifiable latency/token length efficiency.

---

## 2. Setting Up Evaluation Holdout Data

```python
# COMMAND ----------
# Prepare the evaluation dataframe

import pandas as pd

eval_data = [
    {
        "inputs": "Return JSON containing customer ID (CUST-901) and issue summary: 'Cannot reset two-factor authentication.'",
        "ground_truth": '{"customer_id": "CUST-901", "summary": "Cannot reset two-factor authentication."}'
    },
    {
        "inputs": "Return JSON containing customer ID (CUST-412) and issue summary: 'Charged twice for monthly invoice.'",
        "ground_truth": '{"customer_id": "CUST-412", "summary": "Charged twice for monthly invoice."}'
    },
    {
        "inputs": "Return JSON containing customer ID (CUST-780) and issue summary: 'License key expired unexpectedly.'",
        "ground_truth": '{"customer_id": "CUST-780", "summary": "License key expired unexpectedly."}'
    }
]

eval_df = pd.DataFrame(eval_data)
display(eval_df)
```

---

## 3. Configuring LLM-as-a-Judge & Custom Metrics

```python
# COMMAND ----------
# Configure LLM-as-a-judge using DBRX Instruct serving endpoint

import mlflow
from mlflow.metrics.genai import answer_relevance, faithfulness

# Judge model endpoint
judge_endpoint = "endpoints:/databricks-dbrx-instruct"

# Pre-built GenAI evaluation metrics
relevance = answer_relevance(model=judge_endpoint)
factual_consistency = faithfulness(model=judge_endpoint)

# Custom metric: Exact JSON parse validation
def validate_json_output(eval_df, builtin_metrics):
    import json
    scores = []
    for resp in eval_df["response"]:
        try:
            parsed = json.loads(resp)
            if "customer_id" in parsed and "summary" in parsed:
                scores.append(1.0)
            else:
                scores.append(0.5) # Valid JSON, but missing keys
        except Exception:
            scores.append(0.0)     # Broken syntax
    return pd.Series(scores, name="json_schema_pass_rate")

custom_json_metric = mlflow.metrics.make_metric(
    eval_fn=validate_json_output,
    greater_is_better=True,
    name="json_schema_pass_rate"
)
```

---

## 4. Running Comparative Evaluation in MLflow

```python
# COMMAND ----------
# Execute comparative evaluation run

with mlflow.start_run(run_name="Offline_Model_Evaluation_Comparison"):
    
    # 1. Evaluate Baseline Model
    print("Evaluating Baseline Llama 3 8B Instruct...")
    base_results = mlflow.evaluate(
        model="endpoints:/databricks-meta-llama-3-8b-instruct",
        data=eval_df,
        targets="ground_truth",
        model_type="text",
        extra_metrics=[relevance, factual_consistency, custom_json_metric]
    )
    
    # 2. Evaluate Fine-Tuned Model Checkpoint
    print("Evaluating Fine-Tuned Custom Model Checkpoint...")
    ft_results = mlflow.evaluate(
        model="models:/enterprise_catalog.genai.custom_support_llama3/1",
        data=eval_df,
        targets="ground_truth",
        model_type="text",
        extra_metrics=[relevance, factual_consistency, custom_json_metric]
    )

# COMMAND ----------
# Print Comparison Results Table

comparison_df = pd.DataFrame({
    "Metric": ["JSON Schema Pass Rate", "Answer Relevance", "Factual Consistency"],
    "Baseline Model": [
        base_results.metrics["json_schema_pass_rate/v1/mean"],
        base_results.metrics["answer_relevance/v1/score"],
        base_results.metrics["faithfulness/v1/score"]
    ],
    "Fine-Tuned Model": [
        ft_results.metrics["json_schema_pass_rate/v1/mean"],
        ft_results.metrics["answer_relevance/v1/score"],
        ft_results.metrics["faithfulness/v1/score"]
    ]
})

display(comparison_df)
```
