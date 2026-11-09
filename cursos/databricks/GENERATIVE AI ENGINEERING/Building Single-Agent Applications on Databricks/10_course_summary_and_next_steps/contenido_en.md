# Course Summary and Next Steps

## Course completion

Congratulations on completing **Building Single-Agent Applications on Databricks**.

The course follows the complete path from agent fundamentals and governed tools to authoring, tracing, registration, deployment, and iterative quality improvement.

## Learning outcomes

### 1. Agent foundations and architecture

You should be able to explain how an intelligent, task-oriented agent combines:

- A model that performs reasoning.
- Tools that retrieve information or execute actions.
- Memory and context.
- Planning and orchestration.
- An agent framework that coordinates the workflow.

### 2. Governed tools in Unity Catalog

You should understand how SQL and Python functions become governed agent tools, including how they are:

- Created and registered.
- Documented through function and parameter metadata.
- Discovered and selected by an LLM.
- Protected through Unity Catalog permissions.
- Inspected and validated in the Databricks interface.

### 3. End-to-end tool testing

You should be able to test tools independently and as part of an agent workflow. AI Playground provides functional and behavioral testing before an implementation is moved into agent code.

### 4. Production agent authoring

You should recognize the available production-authoring approaches in Mosaic AI Agent Framework, including:

- `ResponsesAgent`.
- LangChain-based agents.
- Agent Bricks.
- Other compatible authoring frameworks and deployment patterns.

### 5. Tool integration and execution context

You should be able to connect Unity Catalog functions to an agent framework and provide the model with:

- The correct tools.
- Descriptive metadata.
- Relevant context.
- Appropriate permissions.

These elements allow agents to address real-world use cases safely and effectively.

### 6. MLflow observability and debugging

You should understand how MLflow supports analysis and debugging through:

- Experiment tracking.
- Automatic tracing.
- Custom tracing.
- Tags and metadata.
- Parent-child spans and execution graphs.
- Latency, token, and cost analysis.
- Inspection of model and tool decisions.

### 7. Governance and reproducibility

You should be able to apply enterprise practices such as:

- Logging and registering agents.
- Managing immutable model versions.
- Capturing dependencies.
- Recording lineage and signatures.
- Controlling access through Unity Catalog.
- Using aliases and tags.
- Deploying registered agents through managed infrastructure.

### 8. Continuous optimization

You should understand how to design and improve single-agent and multi-agent systems through:

- Supervisor architectures.
- Automatic and human evaluation.
- Feedback loops.
- LLM judges and benchmarks.
- Natural-language expert feedback.
- Quality, latency, safety, and cost tradeoffs.

## Next step: evaluate the course

Databricks invites learners to complete a brief [one-minute course survey](https://databricks.sjc1.qualtrics.com/jfe/form/SV_6zMiXNxAfa7IQjY?course_id=2716&course_title=Building%20Single-Agent%20Applications%20on%20Databricks).

The feedback is used to improve future course content and delivery.

## Key facts for the simulator

- Models provide reasoning; tools provide access to data and actions; frameworks coordinate agent behavior.
- Unity Catalog governs SQL and Python functions used as agent tools.
- Function and parameter documentation helps an LLM select and invoke tools correctly.
- AI Playground supports no-code prototyping and tool validation.
- Mosaic AI Agent Framework supports production agent authoring and deployment patterns.
- `ResponsesAgent`, LangChain, and Agent Bricks are central approaches presented in the course.
- MLflow provides experiment tracking, automatic and custom tracing, tagging, evaluation, registration, and monitoring.
- Traces and spans expose intermediate model, tool, retrieval, and validation operations.
- Unity Catalog and MLflow enable versioning, dependency capture, lineage, permissions, aliases, and reproducible deployment.
- Agent Bricks uses automatic evaluation and expert feedback to improve quality while considering cost.
- Both single-agent and multi-agent architectures can use evaluation and feedback loops for continuous optimization.

