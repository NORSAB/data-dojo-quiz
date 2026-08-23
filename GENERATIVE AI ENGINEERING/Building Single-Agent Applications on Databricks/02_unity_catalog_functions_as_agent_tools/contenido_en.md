# Unity Catalog Functions as Agent Tools on Databricks

## Overview

Imagine an AI agent that can instantly answer questions such as “What is the average home price in the Mission district?” or “Calculate the customer lifetime value for our top clients.” It can do this by discovering and executing the appropriate data operations and business logic. This is the purpose of using Unity Catalog Functions as Agent Tools.

Building on the foundations of AI agents and tools, this lecture focuses on a practical implementation: using both Unity Catalog SQL Functions and Python Functions as intelligent, discoverable tools that an AI agent can select and execute from a natural-language request.

The lecture establishes the technical concepts and best practices required for the demonstrations that follow, where SQL and Python Unity Catalog Functions will be built and tested as agent tools in AI Playground.

## Learning objectives

By the end of this lecture, you should be able to:

- Understand the fundamental differences between Unity Catalog functions and Agent Tools.
- Explain the differences between SQL and Python agent tools.
- Explain how to register SQL functions.
- Explain the available ways to register Python functions.
- Explore registered functions through the Databricks user interface.
- Understand how AI Playground integrates with Unity Catalog tools.

## A. Understanding Unity Catalog Functions as Agent Tools

### A1. What are Unity Catalog Functions as Agent Tools?

Unity Catalog tools are Unity Catalog user-defined functions, or UDFs, under the hood. Defining a Unity Catalog tool means registering a function in Unity Catalog.

A **user-defined function** extends the SQL or Python capabilities available in Databricks. It allows custom logic to be defined, used, securely shared, and governed across compute environments.

Unity Catalog Functions as Agent Tools are SQL or Python functions that an AI agent can dynamically discover, select, and execute to perform data operations or business logic. Unlike conventional functions that developers call explicitly in code, agent tools are designed to be:

- **Self-describing:** they expose comprehensive metadata and documentation.
- **Contextually appropriate:** they address a specific business or analytical task.
- **Governable:** they use Unity Catalog security and access-control mechanisms.

### A2. SQL versus Python agent tools

Choosing between SQL and Python is an important design decision.

| Aspect | SQL Agent Tools | Python Agent Tools |
|---|---|---|
| Primary purpose | Data queries and analytical operations | Custom business logic and complex computation |
| Registration | `CREATE OR REPLACE FUNCTION` | `DatabricksFunctionClient.create_python_function()` or SQL DDL with `LANGUAGE PYTHON` |
| Available logic | SQL syntax and built-in SQL functions | Python logic, libraries, and external APIs |
| Execution modes | Serverless only | Serverless and local |
| Metadata expectations | Function comments and parameter comments | Explicit type hints and Google-style docstrings |
| Operational strengths | Automatic query optimization and caching | Advanced error handling and debugging |
| Best suited for | Retrieval, aggregation, filtering, analytical calculations | Business rules, external integrations, complex algorithms, transformations |

The strongest agent architectures can combine both kinds of tools. SQL handles data access and analytical work, while Python handles business logic and integrations with external systems.

![SQL function structured for use as an agent tool](../assets/images/sql_function_vs_agent_tool.png)

#### Why metadata changes a SQL function into an effective agent tool

The figure compares a minimally documented function with an LLM-friendly version. Both receive `customer_name` from the user and return customer data, but the documented version adds:

- A parameter comment explaining that `customer_name` is the name of the customer to look up.
- A function comment explaining what the function returns and why the customer ID is useful.

These comments are not required to execute the SQL function, but they help the agent identify the correct tool and derive the correct argument from a natural-language prompt.

The simplified function shown in the figure is:

```sql
CREATE OR REPLACE FUNCTION main.default.lookup_customer_info(
  customer_name STRING
)
RETURNS STRING
RETURN SELECT CONCAT(
  'Customer ID: ', customer_id, '; ',
  'Customer Email: ', customer_email
)
FROM main.default.customer_data
WHERE customer_name = customer_name
LIMIT 1;
```

The LLM-oriented version adds comments:

```sql
CREATE OR REPLACE FUNCTION main.default.lookup_customer_info(
  customer_name STRING COMMENT
    'Name of the customer whose info to look up'
)
RETURNS STRING
COMMENT 'Returns metadata about a particular customer, given the customer''s
name, including the customer''s email and ID. The customer ID can be used for
other queries.'
RETURN SELECT CONCAT(
  'Customer ID: ', customer_id, '; ',
  'Customer Email: ', customer_email
)
FROM main.default.customer_data
WHERE customer_name = customer_name
LIMIT 1;
```

The examples above reproduce the logic shown in the course figure. The source uses `customer_name` as both the parameter and column name; this lesson does not modify that example.

### A3. Agent tools versus traditional functions

| Traditional functions | Unity Catalog Functions as Agent Tools |
|---|---|
| Designed for direct programmatic use by developers | Designed for dynamic discovery and invocation by AI agents |
| May have minimal documentation | Require rich metadata and comprehensive documentation |
| Called explicitly with known parameters | Parameters and usage can be inferred from natural-language queries |
| Prioritize computational efficiency and performance | Prioritize clarity, interpretability, and usability by the agent |
| Usually document technical behavior | Include business context and usage examples |

![Agent reasoning and invocation of a Unity Catalog Python tool](../assets/images/python_function_agent_tool_reasoning.png)

The agent receives the full query and checks the available tools to decide whether one should be used. The LLM plans the action by examining information such as:

- The tool’s docstring.
- The function definition.
- Parameter metadata.
- Return type.
- Language.
- Whether the function is deterministic.

The planning sequence illustrated in the figure is: identify what the user is asking, determine what information is required, inspect the available tools, invoke the selected tool, and use its result to answer.

## B. Registration methods

> **Source-numbering note:** the supplied lecture labels the next subsection as “B2” and does not include a “B1.” That numbering is preserved here for traceability.

### B2. Function registration methods

Unity Catalog offers different ways to register SQL and Python functions as agent tools. Because UC-registered functions are governed through Unity Catalog permissions, they differ from session-scoped or notebook UDFs.

#### SQL function registration

SQL functions are registered with `CREATE OR REPLACE FUNCTION`. This approach provides:

- Immediate registration and availability.
- Full control over the function definition and its metadata.
- Compatibility with existing SQL development workflows.
- Support for complex SQL logic and business rules.
- No support for custom environments or dependencies.

![Registration of a SQL Unity Catalog function](../assets/images/sql_function_registration.png)

The figure uses a BMI function as a compact registration example:

```sql
CREATE OR REPLACE FUNCTION catalog.schema.bmi(
  weight DOUBLE,
  height DOUBLE
)
RETURNS DOUBLE
LANGUAGE SQL
RETURN SELECT weight / (height * height)
```

#### Python function registration: option 1

`DatabricksFunctionClient` can register a Python callable directly. Its `create_python_function()` API supports:

- Automatic extraction of type hints and docstring metadata.
- Integration with the three-level Unity Catalog namespace.
- Function replacement and versioning workflows.
- Serverless mode for production and local mode for development.

Local mode does not support SQL-based functions.

The figure shows this structure:

```python
from unitycatalog.ai.core.databricks import DatabricksFunctionClient

client = DatabricksFunctionClient(
    execution_mode="serverless"
)

client.create_python_function(
    func=get_airbnb_posting_info,
    catalog=catalog_name,
    schema=schema_name,
    replace=True
)
```

#### Python function registration: option 2

A Python function can also be registered through SQL DDL by declaring `LANGUAGE PYTHON`. This route can define custom dependencies through the `ENVIRONMENT` clause.

```sql
CREATE OR REPLACE FUNCTION catalog.schema.get_airbnb_posting_info(
  ...
)
RETURNS ...
LANGUAGE PYTHON
COMMENT ...
AS $$
<python_code>
$$
```

The Python body is wrapped in `$$`. The ellipses and `<python_code>` are placeholders visible in the course figure; the source does not supply a complete implementation in this example.

![Two options for registering a Python function](../assets/images/python_function_registration_options.png)

### B3. Optional: execution environment considerations

The choice between serverless and local mode affects how Unity Catalog Python functions run. The lecture points to additional technical documentation for these considerations, but the supplied source does not include the destination URL.

## C. Tool-registration validation in the UI

After a function is registered in Unity Catalog, its metadata can be inspected in the Databricks interface. This validation matters because the LLM consumes that information to understand context and filter candidate tools.

### Registered SQL function

![SQL function metadata validation in the Databricks UI](../assets/images/sql_function_ui_validation.png)

The SQL example calculates the average listing price for a San Francisco neighborhood. Its Overview page exposes:

- A plain-language description.
- The SQL definition.
- The `neighborhood_name` parameter and its comment.
- The object type and return type.
- The language, `SQL`.
- The deterministic flag, shown as `True`.

The visible SQL definition is:

```sql
SELECT AVG(
  CAST(REGEXP_REPLACE(price, '[^0-9.]', '') AS DOUBLE)
) AS average_price
FROM sf_airbnb_listings
WHERE neighbourhood_cleansed = neighborhood_name
  AND price IS NOT NULL
  AND REGEXP_REPLACE(price, '[^0-9.]', '') != ''
```

The function description states that it cleans price strings, converts them to numeric values, and returns the average for the requested neighborhood.

### Registered Python function

![Python function metadata validation in the Databricks UI](../assets/images/python_function_ui_validation.png)

The Python example, `get_airbnb_posting_info`, returns formatted information for an Airbnb listing. The interface displays:

- The description.
- The Python definition.
- The `id` parameter as `BIGINT`, with an example listing ID.
- Return type `STRING`.
- Language `Python`.
- Deterministic flag `False`.

Only part of the Python body is visible in the screenshot. It imports `requests` and `re`, builds an Airbnb room URL, performs an HTTP request with a timeout, and begins extracting metadata from the returned HTML. The remaining 23 lines are collapsed in the supplied figure and are not reconstructed here.

## D. Integration with AI Playground for prototyping

### D1. AI Playground integration

AI Playground provides a no-code interface for testing and prototyping SQL and Python Unity Catalog Functions as Agent Tools.

Within AI Playground:

- Tool access follows the user’s Unity Catalog permission level.
- Supported state-of-the-art models, including Claude and GPT models, can be tested.
- Queries, model choices, and tool behavior can be prototyped before agent code is written.
- Models with tool-calling support can be equipped with Unity Catalog functions.

![Unity Catalog tool invocation in AI Playground](../assets/images/ai_playground_uc_tool_invocation.png)

In the example, GPT-5.1 is equipped with a hosted function that calculates the average price by neighborhood. The user asks for the average price in the Mission neighborhood. The model:

1. Reasons that it needs current listing data rather than guessing.
2. Selects the registered tool.
3. Passes `{"neighborhood_name": "Mission"}`.
4. Receives the structured tool output.
5. Uses that output to produce the final answer.

The figure distinguishes the equipped tool, the model’s reasoning, the tool invocation, and the tool output.

## Conclusion

Unity Catalog tools can be built, registered, inspected visually, and tested entirely within Databricks. SQL and Python functions serve complementary roles: SQL is well suited to governed data retrieval and analytics, while Python supports complex logic and external integrations.

The central requirement for an effective agent tool is not only executable code. The function also needs clear metadata, parameter descriptions, return information, permissions, and business context so that an LLM can discover and invoke it correctly.

With these concepts in place, the next demonstration builds UC functions and tests them in AI Playground.

## Key facts for the simulator

- A Unity Catalog tool is a Unity Catalog UDF under the hood.
- UC UDFs can be written in SQL or Python and are securely shared and governed through Unity Catalog.
- SQL tools are best suited to data retrieval, aggregation, filtering, and analytical calculations.
- Python tools are best suited to business logic, APIs, complex algorithms, and transformations.
- SQL tools execute only in serverless mode; Python tools support serverless and local modes.
- Python agent tools require explicit type hints and Google-style docstrings.
- Rich comments and metadata help the LLM select the right tool and derive its parameters.
- SQL functions are registered with `CREATE OR REPLACE FUNCTION`.
- Python functions can be registered with `DatabricksFunctionClient.create_python_function()` or SQL DDL with `LANGUAGE PYTHON`.
- The SQL-DDL option can use an `ENVIRONMENT` clause for custom dependencies.
- Local execution mode does not support SQL-based functions.
- The Databricks UI exposes descriptions, definitions, parameters, return types, language, permissions, and deterministic status.
- AI Playground should be used to prototype prompts, models, and tool usage before building agent code.
- AI Playground tool access respects Unity Catalog permissions.

