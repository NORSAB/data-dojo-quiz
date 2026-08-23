# Evaluation Techniques

## Source reconstruction

This English source was reconstructed from the twenty-two screenshots supplied by the user. Slide content and accompanying explanations have been combined into one continuous thematic document rather than separated by page. Repeated copyright footers have been omitted.

![Evaluation Techniques cover](../assets/images/evaluation_techniques_cover.png)

## Evaluating LLMs

![Evaluating LLMs versus complete AI systems](../assets/images/evaluating_llms_vs_ai_systems.png)

Evaluation can target either the entire AI system or a specific LLM component. Complete-system evaluation considers cost versus value, user feedback, and security. LLM evaluation concentrates on benchmarks, general metrics, and task-specific metrics. Prompt safety and guardrails, system security, LLM quality, and overall solution quality are related but distinct evaluation concerns.

## LLMs versus classical machine learning

![LLMs compared with classical machine learning](../assets/images/llms_vs_classical_ml.png)

| Area | Classical ML | LLMs |
|---|---|---|
| Data and resources | Less expensive storage and compute hardware. | Massive datasets and substantial GPU or TPU resources. |
| Evaluation metrics | Clear metrics such as F1 and accuracy for specific tasks. | Language metrics such as BLEU, ROUGE, and perplexity, plus human or LLM-based judgment. |
| Interpretability | Often provides interpretable coefficients and feature importance. | Large models are often treated as black boxes with limited interpretability. |

## Base foundation-model metric: loss

![Loss during model training](../assets/images/foundation_metric_loss.png)

Foundation models learn to predict the next token. Loss measures the difference between the prediction and the expected token during training or validation. A falling validation-loss curve indicates improved next-token prediction.

Loss has limitations. A model can confidently generate grammatically correct text that is nonsensical or hallucinatory. Pre-training is also separate from task alignment, so training loss does not directly measure downstream-task performance.

## Base foundation-model metric: perplexity

![Perplexity and token probability distribution](../assets/images/foundation_metric_perplexity.png)

Perplexity measures how well a language model predicts a sample. Lower perplexity reflects greater confidence in the observed token sequence; higher perplexity reflects lower confidence. A sharp probability peak on the correct token corresponds to low perplexity.

Perplexity improves on raw loss as an interpretable measure of predictive uncertainty, but it still does not prove that the generated answer is relevant, useful, truthful, or correct for a downstream task.

## Base foundation-model metric: toxicity

![Toxicity scoring examples](../assets/images/foundation_metric_toxicity.png)

Toxicity estimates how harmful, offensive, or inappropriate generated language may be. The slide shows a friendly sentence with a low score (`0.1`) and an insulting sentence with a high score (`0.9`). A pre-trained hate-speech classifier can provide the score. Low toxicity means lower detected harm.

## Task-specific evaluation

![Task-specific evaluation and MLflow evaluators](../assets/images/task_specific_evaluation_metrics_mlflow.png)

Base metrics do not fully measure whether a model performs a useful task such as translation, summarization, question answering, code generation, recommendations, or exam answering. Task-specific evaluators provide context-aware measurements.

The lesson shows built-in support through `mlflow.evaluate(..., evaluators)` with evaluator families such as regression, classification, question answering, and text summarization.

![BLEU for translation and ROUGE for summarization](../assets/images/task_specific_bleu_rouge.png)

Two common NLP metrics are:

- **BLEU** for translation.
- **ROUGE** for summarization.

## BLEU

![BLEU comparison using n-grams](../assets/images/bleu_ngram_comparison.png)

BLEU stands for **Bilingual Evaluation Understudy**. It compares generated translation output with one or more reference translations by measuring n-gram overlap. Unigrams, bigrams, trigrams, and longer sequences can contribute to the score. Greater overlap generally produces a higher BLEU score.

The slide compares the generated sentence "What happens when you're busy is life happens" with the reference "Life is what happens when you're busy making other plans."

## ROUGE

![ROUGE recall and variants](../assets/images/rouge_ngram_recall_variants.png)

ROUGE stands for **Recall-Oriented Understudy for Gisting Evaluation**. It compares generated summaries with references and emphasizes recall:

```text
ROUGE-N recall = matching reference n-grams / total reference n-grams
```

Variants shown in the lesson include:

- **ROUGE-1:** word or token overlap.
- **ROUGE-2:** bigram overlap.
- **ROUGE-L:** longest common subsequence.
- **ROUGE-Lsum:** summary-level ROUGE-L.

## What BLEU and ROUGE share

![Similarities between BLEU and ROUGE](../assets/images/bleu_rouge_similarities.png)

Both metrics:

1. Are task-specific.
2. Are applied to LLM output.
3. Consider n-gram sequences, not only individual words.
4. Compare generated output with reference datasets.

Their usefulness depends on high-quality reference data.

## Benchmarking and data selection

![Generic and application-specific benchmark data](../assets/images/benchmarking_generic_and_application_data.png)

Benchmarking compares models against standard evaluation datasets. General-purpose LLMs may be tested on large reference datasets such as Stanford question-answering data, but organizations should also test the intended task on their own application data.

![Domain-specific translation reference data](../assets/images/domain_specific_translation_reference_dataset.png)

A domain-specific reference dataset can pair Databricks documentation in English with approved Spanish or Portuguese translations. Public benchmarks are useful proxies, but custom datasets better reflect actual terminology, requirements, and use cases.

## Mosaic AI Gauntlet

![Mosaic AI Gauntlet benchmark categories](../assets/images/mosaic_ai_gauntlet_benchmarks.png)

The lesson presents Mosaic AI Gauntlet as a curated model-comparison benchmark containing **35 benchmark sources** organized into **six broad categories**:

- Reading comprehension.
- Commonsense reasoning.
- Problem solving.
- World knowledge.
- Symbolic problem solving.
- Language understanding.

The categorized benchmark provides a broader view of model strengths and weaknesses than a single score.

## Gaps in reference-based evaluation

![Challenges when reference data or metrics are unavailable](../assets/images/evaluation_challenges_without_reference.png)

Reference-based methods leave gaps when:

- No reference dataset exists.
- The task has no established metric or evaluation API.
- The application needs to evaluate unusual or outlying cases.

Without ground truth or benchmarks, developers face a circular problem: they need a good system to generate evaluation data but need evaluation data to prove that the system is good.

## LLM-as-a-judge

![LLM-as-a-judge as an evaluation solution](../assets/images/llm_as_judge_solution.png)

LLM-as-a-judge asks one large language model to evaluate responses produced by another. The evaluator receives rules or scoring criteria and applies them automatically to new responses. Human evaluation remains an alternative, but a judge model can improve scale and efficiency.

## Prompt design for the judge

![LLM judge prompt template and tips](../assets/images/llm_as_judge_prompt_template.png)

The example prompt provides a user question and system answer, asks the judge to score helpfulness on a scale from `0` to `10`, and requests feedback plus a numeric rating.

General guidance includes:

- Provide few-shot examples with human scores.
- Give specific instructions describing a good answer.
- Use a component-based rubric or a more precise scale.

## Limitations and human oversight

![LLM judge limitations and human-in-the-loop](../assets/images/llm_as_judge_limitations_human_loop.png)

Judge models can scale evaluation and reduce cost, but they have limitations:

- Incomplete understanding or contextual awareness.
- Metrics based on inaccurate or hallucinatory judgments.
- Bias and ethical concerns.

A **human-in-the-loop** process reviews generated metrics, resolves ambiguity, improves accuracy, and maintains qualitative oversight.

## MLflow evaluation

![MLflow evaluation benefits](../assets/images/mlflow_llm_evaluation_benefits.png)

MLflow supports efficient evaluation of retrievers and LLMs through:

- Batch comparisons between foundation and fine-tuned models over many questions.
- Rapid and scalable evaluation of unstructured outputs.
- Automated evaluation that reduces the time and cost of fully manual review.

![Batch and interactive MLflow evaluation](../assets/images/mlflow_batch_interactive_evaluation.png)

MLflow supports:

- **Batch evaluation in code:** LLM-as-a-judge and evaluation against curated ground-truth datasets.
- **Interactive evaluation in the UI:** visual comparison of models and prompts and iterative testing of new queries.

## Custom judge metrics in MLflow

![MLflow custom LLM judge workflow](../assets/images/mlflow_custom_llm_judge_workflow.png)

The lesson describes a three-step workflow:

1. Create example evaluation records.
2. Create a metric object containing the examples, scoring criteria, judge model, and aggregation method.
3. Evaluate the model against a reference dataset using the custom metric.

MLflow's evaluation module reduces the engineering required to turn a conceptual prompt template into a reusable evaluation workflow.

## Lesson completion

![Evaluation Techniques completion screen](../assets/images/evaluation_techniques_completion.png)

Thank you for completing this lesson and continuing your journey to develop your skills with us.
