# Demo: Tracing Single Agents with MLflow

## Source coverage

The supplied transcript contains two continuous segments:

- **Beginning:** 0:00–3:18.
- **Ending:** 18:37–24:12.

There is a gap from **3:18 to 18:37**, approximately 15 minutes and 19 seconds. The omitted portion appears to contain most of the environment setup, experiment configuration, automatic tracing setup, agent execution, and the initial walkthrough of the generated trace.

This study version documents only the material present in the source. It does not invent package commands, experiment paths, autologging calls, decorator syntax, function bodies, or trace results that were not captured.

## Demonstration overview

Databricks instructor Jade Lauzen presents MLflow tracing for a single agent. An agent combines an LLM with tools such as functions and APIs, and it can dynamically choose its sequence of actions.

Tracing makes those actions observable. It helps answer questions such as:

- Which steps did the agent execute?
- Which tool caused a delay?
- Where did an error occur?
- What were the inputs and outputs of a particular operation?
- How do nested functions relate to the overall request?

These insights support development, validation, compliance, debugging, and performance optimization.

## Demonstration objectives

The transcript identifies these goals:

- Configure an MLflow experiment as a container for runs and traces.
- Enable automatic tracing.
- Interpret trace outputs.
- Add custom tracing with the `mlflow.trace` decorator.
- Understand parent and child spans.
- Inspect validation behavior and exceptions.
- Combine custom tracing with automatic tracing of LLM and tool calls.

## Core tracing concepts

### Span

A **span** is a timed record of one unit of work. For example, a span can begin when a function starts and end when that function returns.

MLflow can record the span’s:

- Inputs.
- Outputs.
- Duration.
- Errors.
- Attributes.
- Events.

### Trace

A **trace** is the complete collection of spans associated with a request or workflow. It forms a tree because spans can be nested:

- A parent span represents a larger operation.
- Child spans represent the operations performed inside it.

The hierarchy makes the application’s execution structure visible.

## Environment setup

The notebook uses serverless compute. The instructor selects Serverless from the compute menu before installing dependencies.

The transcript stops at 3:18 immediately after this introduction. Therefore, the available source does not include:

- Serverless environment version details.
- Complete dependency-installation commands.
- Classroom setup commands.
- The MLflow experiment name or path.
- The exact command that configures the experiment.
- The automatic tracing or autologging call.
- The agent configuration used for the first trace.
- The initial request and trace walkthrough.
- The code that defines the custom traced functions shown later.

## Custom tracing example 1: validation hierarchy

The transcript resumes with two traced functions: **validate input** and **process question**.

### Validate input

The validation step applies basic question rules:

- The question cannot be empty.
- It must meet a minimum length of five characters.
- A valid input produces a cleaned question.
- An invalid input returns validation information indicating why it failed.

The exact function definition is not present in the transcript.

### Process question

The higher-level process calls the input-validation function and then processes the cleaned question. Because the traced `process question` operation calls the traced `validate input` operation, MLflow automatically produces:

- A parent span for processing the question.
- A child span for validating the input.

The trace allows each span’s inputs, outputs, attributes, events, and summary to be inspected separately.

### Successful execution

The instructor runs `process question` with a question that the automatic transcript renders as “what is the average permission?” The precise wording cannot be confirmed from the text; it likely relates to the earlier average-price/Mission examples used in the course.

The important result is structural: the trace displays `process question` as the parent and `validate input` as its child.

### Error execution

The instructor next submits a very short question, rendered by the automatic transcript as “high,” but context indicates a short input such as `hi`.

The validation span reports that the question is too short because the minimum length is five. The higher-level process then fails when it expects a cleaned question that was not produced.

MLflow makes the failure path visible:

- The validation output indicates that the question is invalid and too short.
- The validation step itself performed its intended task.
- The parent process produces an exception associated with the missing cleaned question.
- The trace shows where execution stopped.

This distinction helps separate an expected validation result from the downstream exception it triggers.

## Custom tracing example 2: validation plus LLM execution

The second example adds an LLM call after validation.

The custom structure now contains:

1. `process question` as the top-level operation.
2. `validate input` as the first child operation.
3. A function that calls the LLM as the next operation.

The LLM-calling span is assigned the **chat model** span type. The source refers to an `agent.ask` operation, but the full implementation is absent.

### Interaction with automatic tracing

Automatic tracing remains enabled. When the custom LLM function runs, MLflow also captures the automatically traced internal activity:

- Communication with ChatDatabricks or the configured Databricks model.
- The LLM request.
- A tool execution when the model decides to use the available tool.
- A subsequent model call that uses the tool result.

The custom `process question` span therefore wraps the automatically generated LLM and tool spans. This combines application-specific organization with framework-level observability.

## Partial traces and short-circuiting

If input validation fails, the trace is partial:

- The first step reports the error.
- The workflow does not continue to the LLM call.
- No unnecessary model or tool execution occurs.

This makes control flow easy to diagnose and confirms that validation prevents invalid requests from reaching downstream operations.

## Information captured with minimal instrumentation

The demonstration emphasizes that MLflow captures useful information with little custom code:

- Duration and latency of each span.
- Inputs and outputs.
- Parent-child relationships.
- Span type, such as chat model.
- Errors and exceptions.
- Automatically traced model and tool substeps.

Developers can customize the logical organization of the trace without manually scripting every telemetry field.

## Demonstration summary

The available source establishes these principles:

- An agent trace is a hierarchy of timed operations.
- `mlflow.trace` can instrument application-specific functions.
- Nested decorated functions create parent and child spans automatically.
- Validation results and downstream exceptions can be analyzed separately.
- Custom spans can wrap automatically traced LLM and tool activity.
- A failed validation creates a partial trace and prevents later operations.
- Inputs, outputs, attributes, events, errors, and latency help explain agent behavior.

The main automatic-tracing setup and initial trace demonstration are absent because of the 3:18–18:37 gap.

## Key facts for the simulator

- A span is a timed record of one unit of work.
- A trace is the complete tree of spans for a request or workflow.
- Parent spans contain higher-level operations; child spans represent nested work.
- MLflow spans can record inputs, outputs, duration, errors, attributes, and events.
- MLflow experiments act as containers for runs and traces.
- Automatic tracing captures supported framework activity with minimal manual instrumentation.
- The `mlflow.trace` decorator adds custom tracing to a function.
- Nested traced functions automatically create parent-child relationships.
- The validation example requires nonempty input with at least five characters.
- A failed validation can prevent a cleaned question from being produced and cause the parent operation to fail.
- Trace events and outputs reveal the difference between a validation result and a downstream exception.
- A chat-model span can represent a custom function that calls the LLM.
- Custom spans can contain automatically generated model and tool spans.
- If the first step fails, MLflow displays a partial trace and the LLM call does not occur.
- Per-span timing helps identify bottlenecks.
- Custom tracing provides additional organization without requiring developers to implement every telemetry field manually.

