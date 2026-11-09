# Demo: Building Single Agents with LangChain

## Source coverage

The supplied transcript contains two continuous segments:

- **Beginning:** 0:00–2:38.
- **Ending:** 11:04–18:09.

There is a gap from **2:38 to 11:04**, approximately 8 minutes and 26 seconds. The omitted section appears to contain a substantial part of the environment setup, configuration values, Unity Catalog function-tool preparation, and possibly the code used to assemble the tools.

This study version documents only what is present in the supplied transcript. It does not reconstruct installation commands, imports, function names, toolkit syntax, or agent code that was not captured.

## Demonstration overview

Databricks instructor Jade Lauzen demonstrates how to create a single AI agent with LangChain. The agent combines three elements:

1. A model that serves as the **brain**.
2. Unity Catalog functions that serve as **tools**.
3. LangChain as the **framework** that connects the model, prompt, and tools.

The agent can decide whether to use a tool, which tools to use, and in what order to invoke them.

## Demonstration objectives

The available transcript establishes the following objectives:

- Review the tools, model, and framework required by a tool-calling agent.
- Understand how Unity Catalog functions are exposed through UC Function Toolkit.
- Configure and execute a LangChain agent.
- Use MLflow to inspect a high-level trace summary.
- Observe how the model invokes multiple functions to answer a compound question.

## Environment setup

### Compute

The notebook uses **Serverless environment version 4**. Serverless is the default compute option, but the instructor recommends verifying it explicitly in the compute selector.

Running a code cell initializes the serverless environment if it has not started already.

### Dependencies

The demonstration uses the Databricks integration for LangChain. The transcript explains that this library enables the LangChain framework to communicate with Databricks services.

### Missing setup and tool-construction segment

The transcript stops at 2:38 while the instructor is introducing prerequisites and dependencies. It resumes at 11:04 after several configurations have already been created.

The supplied source therefore does not show:

- Complete package-installation commands.
- The classroom or notebook setup commands.
- The exact configuration constants.
- The definitions of the two Unity Catalog functions.
- The exact construction and configuration of UC Function Toolkit.
- The conversion of Unity Catalog functions into LangChain-compatible tools.
- Any validation performed before the LangChain agent is assembled.

The later segment confirms that two function tools exist, but it does not provide the omitted implementation.

## Imports and components described after the gap

The resumed transcript identifies several components:

- `ChatDatabricks`, used to communicate with model serving endpoints.
- MLflow, used for autologging and tracing.
- LangChain prompt and agent components.
- A tool-calling agent.
- A prompt template.
- An agent executor.

No complete import block is present in the transcript, so this study version does not recreate one.

## Configuring the model

`ChatDatabricks` is configured with:

- A model serving endpoint.
- A temperature value.

The automatic transcript renders the endpoint name as **“GPT-120.”** The visible source does not provide enough information to verify or expand that name, so it is preserved as an ambiguous transcription rather than replaced with a guessed endpoint.

The configured `ChatDatabricks` object allows LangChain to communicate with the chosen Databricks-hosted model.

## Creating the chat prompt template

The prompt contains four conceptual parts:

1. **System prompt:** instructs the agent to use the available tools.
2. **Chat history:** preserves conversational continuity across turns.
3. **Current input:** contains the user’s present question or query.
4. **Agent scratchpad:** gives the agent space to track tool calls, intermediate results, and the planning process.

The transcript describes the prompt structure but does not include the literal template code.

## Enabling MLflow autologging

MLflow autologging is enabled before executing the agent. This reduces manual work required for:

- Debugging.
- Tracing.
- Monitoring.
- Collecting execution information.

The exact autologging call is not included in the transcript.

## Assembling the LangChain agent

The LangChain tool-calling agent combines three inputs:

- The `ChatDatabricks` model configuration.
- The two tools created from Unity Catalog functions.
- The prompt payload.

The agent is then passed to an `AgentExecutor` together with the tools. Verbose output is enabled so the execution steps and intermediate reasoning are visible during the run.

The transcript refers to the LangChain tool-calling-agent factory and executor but does not provide a complete code listing.

## Executing the agent

The demonstration invokes the agent with a compound request that asks for:

- The average Airbnb price in the **Mission** neighborhood.
- The number of properties with the **shared room** type.

> **Transcription note:** the automatic transcript renders phrases such as “average price permission” and “shared room permission.” The execution narrative explicitly says that `Mission` is passed as the neighborhood, so the study versions normalize those phrases to “in Mission.”

The agent must use two different functions to answer the request.

## Tool-calling sequence

The verbose execution and MLflow trace show this sequence:

1. The user’s compound question is passed to the agent.
2. `ChatDatabricks` calls the model—the agent’s brain.
3. The model determines that it needs the average-neighborhood-price function.
4. The first tool is invoked with `Mission` as input.
5. The result returns to the model.
6. The model recognizes that it still needs the count by room type.
7. The second function is invoked for the shared-room category.
8. The second result returns to `ChatDatabricks`.
9. The model determines that it now has enough information.
10. The agent produces a final answer containing the average price and listing count.

The trace reports an average price of approximately **$230** for the Mission neighborhood. The transcript does not state the exact final count in its text.

## Inspecting the MLflow trace

MLflow records the agent execution as a hierarchy of steps and substeps.

### Summary view

The Summary view presents a high-level sequence:

- Input question.
- Model invocation.
- First function execution.
- Return to the model.
- Second function execution.
- Final model response.

### Detailed view

The detailed trace allows inspection of:

- Inputs and outputs for each function.
- Model and temperature attributes for `ChatDatabricks`.
- Error events, if an operation fails.
- Chunks and token information.
- Timeline and duration of each step.
- Filters that isolate tool executions.

This hierarchy helps developers understand the agent’s behavior, debug incorrect results, and locate performance bottlenecks.

## Final result and lesson summary

The final answer contains the average price and the number of listings by the requested room type. Both values come from the Airbnb dataset through the two Unity Catalog tools.

The demonstration shows the complete conceptual pattern:

1. Define the tools.
2. Configure the LLM.
3. Create a prompt with history and scratchpad support.
4. Use LangChain to create a tool-calling agent.
5. Execute the agent with `AgentExecutor`.
6. Use MLflow tracing to inspect how the answer was produced.

The actual implementation of steps 1 and part of step 2 is absent from the supplied transcript because of the 2:38–11:04 gap.

## Key facts for the simulator

- A single agent combines an LLM, tools, and an orchestration framework.
- The demonstration uses LangChain as the framework and Unity Catalog functions as tools.
- UC Function Toolkit abstracts part of the communication between UC functions and the agent framework.
- The notebook uses Serverless environment version 4.
- `ChatDatabricks` connects LangChain to Databricks model serving endpoints.
- The model configuration includes an endpoint and temperature.
- The prompt includes a system instruction, chat history, current input, and agent scratchpad.
- The scratchpad tracks planning, intermediate steps, and tool activity.
- MLflow autologging reduces manual tracing and monitoring work.
- The tool-calling agent combines the model, tools, and prompt.
- `AgentExecutor` executes the configured agent and its tools.
- Verbose mode exposes intermediate execution information.
- The compound question requires two functions: average neighborhood price and count by room type.
- The model invokes the first tool, reviews the result, recognizes that more information is required, and invokes the second tool.
- MLflow represents the execution as nested steps and substeps.
- Trace details include inputs, outputs, attributes, events, chunks, tokens, timeline, and latency.
- Tool filtering helps isolate function executions during debugging.

