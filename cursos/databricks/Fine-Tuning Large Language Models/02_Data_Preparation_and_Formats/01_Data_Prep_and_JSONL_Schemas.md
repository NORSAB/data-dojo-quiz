# Data Preparation & JSONL Schemas

> **Lesson ID:** `24249` (`2.5 - Data Preparation`)  
> **Slide References:** Slides 22, 23, 24, 25, 26, 40  
> **Core Concepts:** Prompt/Response Schema, Chat `messages` Schema, Loss Masking, Data Curation Rules  

---

## 1. The Primacy of Data Quality

In Instruction Fine-Tuning, empirical evidence consistently demonstrates:
$$\mathbf{\text{Data Quality}} \gg \mathbf{\text{Data Quantity}}$$

While pre-training requires hundreds of billions or trillions of tokens to learn language grammar and broad world knowledge, instruction fine-tuning is about **behavioral alignment and stylistic formatting**. 
- A dataset of **1,000 to 5,000 meticulously curated, diverse, and human-verified prompt/response pairs** will consistently outperform a noisy, auto-scraped dataset of 100,000 low-quality pairs.
- Inconsistent formatting, contradictory answers, factual errors, or sloppy grammar in the training set will be directly internalized by the model weights.

---

## 2. Standard Fine-Tuning Schemas

Databricks Foundation Model Training supports two primary JSONL formats for supervised fine-tuning. Every line in the dataset file must be a valid, standalone JSON object terminated by a newline character (`\n`).

### Schema 1: Prompt / Response Format (Single-Turn)

Ideal for single-turn instructions, document summarization, question answering, translation, and structured extraction tasks:

```json
{"prompt": "Extract the key financial metrics from the following quarterly report excerpt:\nRevenue: $4.2B, Operating Margin: 28%, Net Income: $890M.", "response": "{\n  \"revenue_usd\": 4200000000,\n  \"operating_margin_pct\": 28,\n  \"net_income_usd\": 890000000\n}"}
{"prompt": "Classify the sentiment of this support ticket: 'The system crashed twice today during market open.'", "response": "Urgent - Negative"}
```

#### Field Specifications:
- `prompt` *(string, required)*: The input directive, question, or context provided to the model.
- `response` *(string, required)*: The target ground-truth output the model must learn to generate.

---

### Schema 2: Multi-Turn Chat Format (`messages` Schema)

Mandatory when fine-tuning conversational assistants, customer support agents, or applications requiring multi-turn dialogue history:

```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a professional Databricks Solutions Architect. Answer technical questions concisely and cite official documentation conventions."
    },
    {
      "role": "user",
      "content": "How do I query a model serving endpoint from a Spark DataFrame?"
    },
    {
      "role": "assistant",
      "content": "You can use the built-in `ai_query()` SQL function in Spark SQL, or register a custom MLflow PyFunc UDF that sends batches to the serving REST endpoint."
    },
    {
      "role": "user",
      "content": "Can you provide the SQL syntax?"
    },
    {
      "role": "assistant",
      "content": "```sql\nSELECT id, ai_query('my-endpoint', prompt_column) AS prediction FROM my_catalog.my_schema.input_table;\n```"
    }
  ]
}
```

#### Field Specifications:
- `messages` *(array of objects, required)*: Chronological sequence of conversation turns.
- `role` *(string, required)*: Must be one of `"system"`, `"user"`, or `"assistant"`.
- `content` *(string, required)*: The textual utterance corresponding to that role.

---

## 3. Loss Masking: Why Prompts Are Not Penalized

In standard causal pre-training, the model is trained to predict **every** token in a sequence:
$$\mathcal{L} = -\sum_{t=1}^{T} \log P(x_t \mid x_{<t})$$

In supervised instruction fine-tuning, calculating loss on the prompt tokens is counterproductive—the model does not need to learn how to generate the user's questions or system prompts. 

During tokenization, the data pipeline applies **Loss Masking (Label Masking)**:
```
Tokenized Sequence:
  [SYS] You are an assistant [USER] What is MLflow? [ASST] MLflow is an open-source platform...
Labels Tensor:
  [ -100,      -100,       -100,    -100,     -100,      MLflow,   is,    an,   open-source... ]
```
- Tokens corresponding to the prompt (`system` and `user` turns) are assigned a target label index of `-100` (the standard PyTorch `ignore_index`).
- The cross-entropy loss function ignores tokens labeled `-100`.
- **Gradient updates are computed strictly on the `assistant` response tokens.** The model learns solely how to produce the ideal response conditioned on the provided prompt history.

---

## 4. End-to-End Data Pipeline: Delta Table to Unity Catalog Volume

In Databricks, curated datasets typically originate in managed Delta Lake tables. The following PySpark workflow cleans, validates, and exports the data into JSONL files within a Unity Catalog Volume:

```python
# Databricks Notebook: Export Delta Table to JSONL in Unity Catalog Volume

from pyspark.sql import functions as F
import json

# 1. Read curated training records from Delta Lake
source_table = "enterprise_catalog.ai_curated.customer_support_pairs"
df = spark.table(source_table)

# 2. Filter for high quality: non-null, minimum response length, schema compliance
df_clean = df.filter(
    (F.col("prompt").isNotNull()) & 
    (F.length(F.trim(F.col("prompt"))) > 10) &
    (F.col("response").isNotNull()) & 
    (F.length(F.trim(F.col("response"))) > 5)
).select("prompt", "response")

# 3. Split into Train (90%) and Validation (10%) sets
train_df, eval_df = df_clean.randomSplit([0.90, 0.10], seed=42)

print(f"Train samples: {train_df.count()}")
print(f"Eval samples:  {eval_df.count()}")

# 4. Target Unity Catalog Volume destination path
volume_base = "/Volumes/enterprise_catalog/ai_curated/training_datasets"

# 5. Write to single clean JSONL files
# Note: Using pandas or single-partition write to guarantee 1 JSON per line
train_df.toPandas().to_json(
    f"{volume_base}/ift_train.jsonl", 
    orient="records", 
    lines=True, 
    force_ascii=False
)

eval_df.toPandas().to_json(
    f"{volume_base}/ift_eval.jsonl", 
    orient="records", 
    lines=True, 
    force_ascii=False
)

print(f"Dataset successfully exported to UC Volume: {volume_base}")
```

---

## 5. Enterprise Data Curation Checklist

Before launching a fine-tuning run, verify your dataset against this production checklist:

1. **Format Validation:** Run a validator script to confirm that every line parses as valid JSON with the exact expected keys (`prompt`/`response` or `messages`).
2. **Context Length Truncation Check:** Tokenize the dataset using the base model's tokenizer. Ensure that prompts and responses fit comfortably within the training context length (e.g., 2,048 or 4,096 tokens). Truncated responses corrupt the model's ability to output ending tokens (`<|end_of_text|>`).
3. **Deduplication:** Remove exact and near-duplicate prompts. Over-representing identical prompts causes the model to memorize specific answers rather than generalize instruction concepts.
4. **Balanced Distribution:** Ensure balanced representation across expected intents, tasks, lengths, and edge cases.
5. **PII and Sensitive Data Sanitization:** Verify that private phone numbers, Social Security Numbers, API keys, and internal IP addresses have been redacted prior to training.
