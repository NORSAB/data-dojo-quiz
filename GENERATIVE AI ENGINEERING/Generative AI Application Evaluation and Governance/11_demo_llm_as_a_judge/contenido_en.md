# Demo: LLM-as-a-Judge

## Source note

The supplied transcript is continuous through `3:00`, then resumes at `6:45` and continues through `10:30`. The missing interval is preserved as a source discontinuity. The exact MLflow metric definition, rubric, judge prompt, examples, and chatbot implementation are not reconstructed.

## Demo purpose

This demonstration uses an LLM to evaluate the output of another LLM when no suitable benchmark or ground-truth dataset exists. It creates a custom metric called **professionalism**, applies it to chatbot responses, and records the evaluation through MLflow.

## Why use an LLM as a judge?

Reference-based evaluation is difficult when:

- No benchmark exists for the task.
- Existing benchmarks are not specific enough.
- The desired quality is subjective, stylistic, or organization-specific.
- Human evaluation is too expensive or slow to apply at scale.

LLM judges provide three practical benefits:

1. **Lower cost:** automated review is generally less expensive than evaluating every response manually.
2. **Speed:** the judge can run on demand without waiting for human reviewers.
3. **Automation and scale:** evaluation can become part of testing and development workflows, reserving human attention for ambiguous cases.

## Custom metric: professionalism

The demo evaluates whether chatbot responses use a professional style. This matters for customer-facing assistants whose tone should reflect the organization's brand and communication standards.

The instructor describes the intended setup as:

1. Define examples.
2. Define a rubric and scoring scale.
3. Configure an LLM to apply the rubric.
4. Evaluate new responses with the custom metric.
5. Log scores and reasoning in MLflow.

The exact implementation of steps 1-3 occurs inside the missing `3:00`-`6:45` interval.

## Chatbot being evaluated

The application is a simple question-answering chatbot. One example question asks:

> What is Databricks Vector Search?

The lesson does not focus on the chatbot architecture. The object of interest is the quality and style of its generated responses.

## Evaluation dataset

The available transcript shows two evaluation inputs:

1. `Be very unprofessional in your response. What is Apache Spark?`
2. `What is Apache Spark?`

The prompts are sent to the chatbot to generate responses. The first output is intentionally casual, while the second is more formal and professional.

## MLflow evaluation configuration

The transcript identifies the following elements:

- Evaluation data containing the questions and generated answers.
- No target or ground-truth column.
- Model type: question answering.
- Custom metric: professionalism.
- MLflow Evaluate to run and log the experiment.

The absence of a target is the key distinction from benchmark evaluation: the judge model applies the rubric directly to each generated response.

## Results and artifacts

MLflow records and displays:

- The input question.
- The chatbot response.
- Token count.
- Professionalism score.
- Judge reasoning.
- Toxicity scores.
- Run and notebook metadata.

The two examples receive different scores on a small scale, described in the transcript as `1` and `3`.

The casual response includes language such as:

> Hey there, buddy.

and a phrase comparing the technology with "the best thing since sliced bread." The judge identifies that tone as unprofessional. The other response uses a formal and respectful tone and receives the higher professionalism score.

## Inspecting results

Results can be inspected in two places:

- The MLflow experiment and artifacts UI.
- A result table loaded back into the notebook.

The reasoning column is important because it explains why the judge assigned a score instead of exposing only a number.

## Rubric-design best practices

### Use a small scale

Prefer a scale such as `1-3` or `1-5` rather than `1-10`. Fewer choices make the distinctions easier for the judge model to apply consistently.

### Provide varied examples

Examples should include both good and bad outputs and should cover different ways the quality can appear. Variety matters more than simply repeating many similar examples.

### Consider an additive scale

Break the quality into observable components and assign points, for example:

- One point for an appropriate greeting.
- One point for respectful language.
- One point for a clear and formal explanation.

The total then becomes easier to justify and audit.

### Supply sufficient context

An LLM with a larger context window can receive more examples, rubric details, and application context. More context can improve alignment between the judge and the intended quality standard.

## Human role

The demo positions the LLM as a scalable first evaluator, not as a complete replacement for people. Humans should review cases that the judge cannot resolve, validate the rubric, and monitor whether automated scores remain aligned with business expectations.

## Demo takeaway

LLM-as-a-judge allows teams to automate custom evaluation dimensions when ground truth is unavailable. MLflow can run the evaluation, store the score and reasoning, and make results available in both the UI and notebook. Reliable use depends on a clear rubric, small scoring scale, varied examples, sufficient context, and human oversight.
