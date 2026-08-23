# Evaluation Techniques

## Evaluation hierarchy

![LLM evaluation and complete-system evaluation](../assets/images/evaluating_llms_vs_ai_systems.png)

Evaluation must distinguish the component from the complete application:

| Target | Typical concerns |
|---|---|
| Complete AI system | Cost versus value, user feedback, security, and end-to-end quality. |
| LLM component | Benchmarks, foundation-model metrics, task-specific metrics, and judge-based evaluation. |

## LLMs versus classical ML

![LLMs compared with classical ML](../assets/images/llms_vs_classical_ml.png)

LLMs require far more data and compute, generate open-ended language, and are less interpretable. Classical ML often has a fixed target and clear metrics such as accuracy or F1. LLM evaluation combines automatic language metrics, human judgment, and LLM-as-a-judge.

## Foundation-model metrics

| Metric | What it measures | Main limitation |
|---|---|---|
| Loss | Difference between next-token predictions and expected tokens during training or validation. | Low loss does not guarantee meaningful, truthful, or task-relevant output. |
| Perplexity | Predictive uncertainty over a token sequence; lower is usually more confident. | Does not directly measure downstream-task success. |
| Toxicity | Probability that output contains harmful, offensive, or inappropriate language. | Depends on the behavior and bias of the toxicity classifier. |

![Loss curve during training](../assets/images/foundation_metric_loss.png)

![Perplexity and token probability](../assets/images/foundation_metric_perplexity.png)

![Toxicity scoring](../assets/images/foundation_metric_toxicity.png)

## Task-specific evaluation

Generic metrics cannot answer whether an LLM translates, summarizes, answers questions, or performs another application task correctly. Evaluation should reproduce the real task and use context-aware metrics.

MLflow evaluator families shown in the lesson include regression, classification, question answering, and text summarization.

### BLEU

![BLEU n-gram comparison](../assets/images/bleu_ngram_comparison.png)

**BLEU — Bilingual Evaluation Understudy** evaluates translation by comparing generated text with reference translations. It examines matching n-grams. Higher overlap usually produces a higher score.

### ROUGE

![ROUGE variants and recall](../assets/images/rouge_ngram_recall_variants.png)

**ROUGE — Recall-Oriented Understudy for Gisting Evaluation** is commonly used for summarization. It emphasizes how much reference content appears in the generated output.

| Variant | Unit |
|---|---|
| ROUGE-1 | Tokens or unigrams |
| ROUGE-2 | Bigrams |
| ROUGE-L | Longest common subsequence |
| ROUGE-Lsum | Summary-level ROUGE-L |

BLEU and ROUGE are both task-specific, operate on generated output, compare n-grams, and require high-quality reference datasets.

## Benchmarking

![Generic and application-specific benchmark data](../assets/images/benchmarking_generic_and_application_data.png)

Benchmarking compares models against standardized datasets. A robust evaluation strategy combines:

- Large generic benchmarks for broad comparison.
- Domain-specific datasets representing the application's language and task.
- The organization's own production-like data.

For documentation translation, an appropriate reference dataset pairs approved source text with approved translations in the required languages.

### Mosaic AI Gauntlet

The course presents Mosaic AI Gauntlet as 35 benchmark sources grouped into six categories: reading comprehension, commonsense reasoning, problem solving, world knowledge, symbolic problem solving, and language understanding.

## When reference metrics are insufficient

![Evaluation gaps](../assets/images/evaluation_challenges_without_reference.png)

Automatic reference metrics are difficult to use when no reference dataset exists, no established metric matches the task, or rare edge cases must be evaluated. These situations motivate judge-based evaluation.

## LLM-as-a-judge

![LLM-as-a-judge workflow](../assets/images/llm_as_judge_solution.png)

An evaluator LLM receives rules, examples, and responses from another model, then produces feedback or a score.

### Effective judge prompt

- Define the evaluation dimension precisely.
- Describe what good and bad outputs look like.
- Provide few-shot examples scored by humans.
- Use a clear rubric or component-based scale.
- Require structured feedback and a numeric rating.

### Limitations

- Missing context or understanding.
- Hallucinated or inaccurate judgments.
- Bias and ethical problems inherited from the judge model.

Human-in-the-loop review should validate metrics, resolve ambiguous cases, and maintain qualitative oversight.

## MLflow evaluation workflow

![MLflow batch and interactive evaluation](../assets/images/mlflow_batch_interactive_evaluation.png)

MLflow supports batch and interactive evaluation:

- Compare foundation and fine-tuned models over many questions.
- Evaluate unstructured outputs at scale.
- Use LLM-as-a-judge or curated ground truth.
- Compare prompts and models visually in the UI.
- Test new queries iteratively during development.

For a custom LLM judge:

1. Create example evaluation records.
2. Define a metric object with examples, scoring criteria, judge model, and aggregation.
3. Apply the metric to a model and reference dataset.

## Practical decision guide

| Evaluation need | Suitable approach |
|---|---|
| Training progress | Loss and perplexity |
| Harmful language | Toxicity metric plus safety review |
| Translation | BLEU and domain-specific references |
| Summarization | ROUGE and human or judge review |
| Broad model comparison | Multi-category benchmarks |
| Open-ended quality without references | LLM-as-a-judge with a rubric |
| High-stakes or ambiguous cases | Human-in-the-loop review |

## Key takeaways

- No single metric proves that an LLM or application is high quality.
- Foundation metrics evaluate language modeling but not complete task performance.
- Task-specific metrics require relevant reference datasets.
- Generic benchmarks should be complemented with application data.
- LLM-as-a-judge expands evaluation to open-ended tasks but introduces new model risk.
- MLflow helps operationalize repeatable batch, interactive, reference-based, and judge-based evaluation.
