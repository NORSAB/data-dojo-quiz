# Demo: Benchmark Evaluation

## Source note

The supplied transcript is continuous through `4:31`, then resumes at `7:53` and continues through `11:02`. The missing interval is preserved as a source discontinuity. The benchmark name, loading code, exact `mlflow.evaluate` call, and first run are not reconstructed.

## Demo purpose

The demonstration compares two LLMs on a summarization task using a benchmark dataset, MLflow, and ROUGE metrics. It illustrates a champion-challenger workflow in which a current model and a candidate replacement are evaluated on the same reference data.

## Learning goals

The demo aims to show how to:

1. Obtain a benchmark dataset for task-specific LLM evaluation.
2. Evaluate summarization with task-specific metrics.
3. Use MLflow to calculate ROUGE scores.
4. Compare two LLMs against the same benchmark.
5. Inspect both aggregate metrics and individual generations.

## Models under comparison

The transcript contains speech-recognition variants, but the identifiable model names are:

- **Llama 2 70B Chat** as the existing or baseline model.
- **DBRX** as the challenger model.

The notebook imports Databricks Model Serving and the workspace client, then defines a summarization function for each endpoint. Both functions use similar system and user prompts so that the comparison changes the model rather than the task instructions.

## Endpoint smoke test

Before the benchmark, the instructor sends the sentence:

> This is the best frozen pizza I've ever had.

Both endpoints return a response, confirming that they are available before the evaluation begins.

## Benchmark design

The demo uses a generic news-summarization dataset containing:

- News articles as model inputs.
- Human-written summaries as ground truth.

The source mentions a paper and dataset page, but their names occur inside the missing interval and are not available in the supplied transcript.

The benchmark sample used in the run contains **50 rows**. Each model generates a summary for the same records, and MLflow compares the predictions with the reference summaries.

## Missing first evaluation interval

The source jumps from the benchmark description at `4:31` to the results of the first model at `7:53`. Therefore, the following details remain unavailable:

- Dataset identifier and loading statement.
- Data preparation steps.
- Exact MLflow evaluator configuration.
- Code for generating the first 50 predictions.
- Complete metrics returned by the initial run.

## ROUGE interpretation

ROUGE compares generated summaries with reference summaries. The transcript describes the normalized score range as:

- `0`: no overlap or match.
- `1`: perfect match.

The instructor notes that scores around `0.3` to `0.4` can indicate substantial similarity for the summarization example, while also recommending inspection of the actual text instead of relying on a number alone.

## First model results

The first run evaluates Llama 2 70B Chat. MLflow provides:

- The input article.
- The generated summary.
- The ground-truth summary.
- ROUGE results and run artifacts.

One example is described as having a score around `0.4` and producing a reasonable summary involving Baltimore and the need for change.

## Challenger evaluation

The same benchmark workflow is repeated with DBRX:

1. Load the challenger function.
2. Generate predictions for the same 50 rows.
3. Apply the text-summarization evaluator.
4. Calculate the same ROUGE metrics.
5. Store the results as another MLflow run.

The transcript indicates that the challenger produces slightly higher results in some metrics.

## Comparing MLflow runs

MLflow's experiment UI is used to select the two relevant runs and compare:

- ROUGE-1.
- ROUGE-2.
- ROUGE-Lsum.
- Output tables and artifacts.

The chart enables rapid comparison between the baseline and challenger. The evaluations preview also supports visual inspection of inputs, ground-truth summaries, and both model generations.

## Why qualitative inspection matters

Aggregate metrics are useful for ranking models, but the instructor emphasizes opening the generated summaries and comparing them directly with the gold standard. A numerical improvement may not reveal whether a response is factually correct, coherent, appropriately concise, or useful for the application.

## Champion-challenger workflow

The reusable pattern is:

```text
Shared benchmark and prompt
        |-> Baseline model -> predictions -> ROUGE metrics -> MLflow run
        |-> Challenger model -> predictions -> ROUGE metrics -> MLflow run
                                                |
                                      Compare metrics and outputs
```

For a fair comparison, the dataset, prompts, preprocessing, evaluator, and metric configuration should remain constant.

## Demo takeaway

Benchmark evaluation is powerful when ground truth exists. MLflow makes it possible to evaluate multiple models on the same records, compare ROUGE metrics, inspect artifacts, and visually review generated output. When no ground truth is available, the course moves to LLM-as-a-judge evaluation.
