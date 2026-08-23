# Demo: Building UC Functions as Agent Tools with AI Playground

## Source coverage

The supplied transcript contains two continuous segments:

- **Beginning:** 0:00–3:03.
- **Ending:** 15:12–20:39.

There is a gap from **3:03 to 15:12**, approximately 12 minutes and 9 seconds. The missing portion appears to include the hands-on creation, registration, and initial testing of the SQL and Python functions mentioned in the introduction and conclusion.

This study version documents only the material present in the supplied transcript. It does not reconstruct commands, code, catalog names, schemas, or implementation steps that are not visible in the source.

## Demonstration overview

Databricks instructor Jade Lauzen demonstrates how Unity Catalog functions can be used as tools for an AI agent and how those tools can be attached and tested in AI Playground.

An agent can be understood as a brain—an LLM—with access to tools. Those tools can take many forms:

- API calls.
- Queries against data.
- Multi-step chains of actions.
- Unity Catalog functions that encapsulate executable logic.

This demonstration uses both a SQL function and a Python function to compare their similarities, differences, strengths, and limitations. The functions use simple logic, but they represent building blocks for more complex agent applications.

## Learning objectives

The demonstration aims to show how to:

- Create and register a SQL Unity Catalog function.
- Create and register a Python Unity Catalog function.
- Validate that both functions work.
- Equip an AI agent with those functions as tools.
- Test tool use in AI Playground.
- Compare the strengths, limitations, and flexibility of SQL and Python tools.

## Classroom setup

### Serverless compute

The notebook uses serverless compute. Serverless is the default option in the compute selector, so executing a cell initializes the serverless environment automatically.

The instructor points out that the compute and base environment can be reviewed or changed from the selector in the upper-right area of the notebook.

### Dependencies

The setup installs Unity Catalog AI for Databricks. This package abstracts some of the underlying plumbing required to build Unity Catalog functions for agent use.

### Classroom setup command

The notebook also uses the classroom setup pattern found in many Databricks Academy labs and demonstration notebooks. The transcript ends this segment while the instructor is introducing a `%run` magic command. The actual command, path, and the rest of the setup are not included in the supplied text.

## Missing implementation segment

The transcript resumes at 15:12, after the functions have already been created and the agent is being configured in AI Playground. Therefore, the available source does not show:

- The complete dependency-installation commands.
- The classroom setup command and its path.
- The SQL function definition and registration steps.
- The Python function definition and registration steps.
- The first validation or test of each function.
- The navigation steps used to open AI Playground.

The conclusion confirms that two functions were built and tested, but it does not supply the omitted implementation details.

## Configuring the agent in AI Playground

### Selecting the model—the agent’s brain

The available chat models are deployed through model serving endpoints. The user first selects a model to serve as the agent’s brain and then attaches tools to it.

The suggested model is **GPT-OSS-20B**:

- It is an open-source model.
- It has approximately 20 billion parameters.
- It is described as a mid-sized LLM.
- It has enough capability to understand the request and select a tool without the overhead that can sometimes accompany a larger model.

### Attaching the tools

The demonstration uses two functions:

1. A tool that retrieves the average Airbnb price for a neighborhood.
2. A tool that retrieves detailed information for an Airbnb listing.

The question asks the agent to compare the average price in the **Mission** neighborhood with the detailed information for listing **958**, then determine which represents better value.

> **Transcription note:** the automatic transcript says “admission” in two places. The surrounding sentences explicitly describe a neighborhood and the earlier course example uses Mission, so the study versions normalize this to “Mission.”

## Side-by-side comparison

AI Playground can compare models or agent configurations side by side while sending the same prompt to each one.

### Configuration 1: model without tools

GPT-OSS-20B receives the question without any functions attached. It responds that it can help with the comparison but needs more details. It cannot provide a relevant answer because it lacks access to the required data.

### Configuration 2: model with one tool

A second endpoint uses the same model with only the neighborhood-average-price tool attached.

This configuration can invoke the available function and retrieve the average neighborhood price. However, it still asks for the details of listing 958 because it has no tool that can retrieve them.

### Configuration 3: model with both tools

The instructor adds both functions and clears the chat history so that the new test does not inherit the earlier responses.

When the same question is sent again, the model:

1. Uses the first function to retrieve the average neighborhood price.
2. Recognizes that it also needs information about listing 958.
3. Identifies the second function from its comment and description.
4. Invokes that function and obtains the listing information.

The two-tool configuration works better than the no-tool or one-tool configurations because the agent has access to more of the information needed for the task.

## Tool-output limitation discovered during testing

Even with both functions, the agent cannot produce a strong value comparison. The listing-information function does not return the listing’s price, so the agent cannot compare that price directly with the neighborhood average.

This reveals an important tool-design lesson: a tool can execute successfully and still be insufficient for the user’s actual goal.

Possible improvements mentioned in the demonstration include:

- Extending the existing function to return the listing price.
- Creating another function that retrieves the missing price.
- Returning numeric review and rating information.
- Taking requested dates into account because Airbnb prices vary by season and date.
- Comparing a date-specific price or an average price across the year.

The correct tool design depends on the context required by the user’s question.

## Creating an agent notebook

AI Playground includes a button to create an agent notebook from the prototype. According to the demonstration, the generated notebook contains code to:

- Build the agent.
- Evaluate the agent.
- Register the agent.
- Deploy the agent.

The notebook can be executed and modified, providing a starting point for moving from an interactive prototype to agent code.

## Demonstration summary

The available transcript confirms the following outcomes:

- Two Unity Catalog functions were built: one SQL function and one Python function.
- Their strengths, limitations, and flexibility were considered.
- Each function was tested.
- The functions were attached to a model as an agent toolkit.
- A configuration with two relevant tools performed better than one with only one tool.
- AI Playground made it possible to ask questions and inspect the agent’s behavior.
- The test exposed a missing field in the tool output, showing how prototyping helps improve tool design.
- AI Playground can generate a notebook for subsequent agent development, evaluation, registration, and deployment.

## Key facts for the simulator

- An AI agent combines an LLM—the brain—with tools it can invoke.
- This demonstration uses one SQL function and one Python function registered in Unity Catalog.
- Serverless compute is the notebook’s default execution environment.
- Unity Catalog AI for Databricks abstracts part of the function-integration plumbing.
- The model suggested in the demonstration is GPT-OSS-20B, an open-source model with about 20 billion parameters.
- AI Playground can compare agent configurations side by side with a synchronized prompt.
- A model without tools cannot retrieve the required current or private data.
- A model with only the neighborhood-price tool retrieves the average but cannot retrieve listing 958.
- With both tools, the agent invokes the neighborhood tool and then the listing-information tool.
- Function comments and descriptions help the model identify which tool to use.
- Successful tool execution does not guarantee a complete answer; the output schema must contain the information required by the user’s goal.
- The listing-information function does not return the listing price, preventing a complete value comparison.
- Airbnb prices can vary by season and requested dates, which may need to be modeled in the tool design.
- AI Playground can generate an agent notebook containing build, evaluation, registration, and deployment code.

