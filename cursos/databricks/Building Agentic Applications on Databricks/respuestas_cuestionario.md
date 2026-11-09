# Respuestas del cuestionario

## Datos del examen

- **Examen:** Quiz - Building Agentic Applications on Databricks
- **Número total de preguntas del examen:** 20
- **Preguntas documentadas:** 20 de 20
- **Estado del registro:** Completo; preguntas 1 a 20 capturadas del cuestionario mostrado

Cada entrada conserva las cuatro opciones completas recibidas. La respuesta marcada con `[x]` es la correcta.

---

## Question 1 of 20 / Pregunta 1 de 20

### English

**Question:** With `mlflow.openai.autolog()` enabled, a developer runs a supervisor that hands off to a worker, then calls a tool. In the MLflow UI they see several separate, fragmented traces instead of one connected view of the orchestration.

What technique produces a single unified trace tree?

**Options:**

- [ ] Register the agents to Unity Catalog, which automatically merges traces.
- [ ] Increase the model's max tokens so all steps fit in one response.
- [ ] Disable autologging so only one trace is produced.
- [x] Wrap the entire multi-agent flow in a parent function decorated with `@mlflow.trace`, so the routing, worker LLM calls, and tool calls nest as child spans under one root.

**Correct answer:** Wrap the entire multi-agent flow in a parent function decorated with `@mlflow.trace`, so the routing, worker LLM calls, and tool calls nest as child spans under one root.

**Justification:** The explicit parent trace supplies the root span that links the orchestration and its child spans into one trace tree. Autologging captures compatible calls, but it does not by itself define that common parent boundary.

### Español

**Pregunta:** Con `mlflow.openai.autolog()` habilitado, un desarrollador ejecuta un supervisor que delega en un trabajador y después llama una herramienta. En la interfaz de MLflow observa varias trazas separadas y fragmentadas, no una vista conectada de la orquestación.

¿Qué técnica genera un único árbol de trazas unificado?

**Opciones:**

- [ ] Registrar los agentes en Unity Catalog, que fusiona automáticamente las trazas.
- [ ] Aumentar el máximo de tokens del modelo para que todos los pasos quepan en una respuesta.
- [ ] Deshabilitar el autologging para que se produzca una sola traza.
- [x] Envolver todo el flujo multiagente en una función padre decorada con `@mlflow.trace`, para que el enrutamiento, las llamadas LLM del trabajador y las llamadas a herramientas queden anidadas como spans hijos bajo una misma raíz.

**Respuesta correcta:** Envolver todo el flujo multiagente en una función padre decorada con `@mlflow.trace`.

**Justificación:** La traza padre proporciona el span raíz que enlaza la orquestación y sus spans hijos en un único árbol. El autologging captura llamadas compatibles, pero no define por sí mismo ese límite padre común.

---

## Question 2 of 20 / Pregunta 2 de 20

### English

**Question:** A team maintains two agents: one built with the OpenAI Agents SDK and one built with LangChain using LangGraph's `create_react_agent`. They want MLflow to automatically capture execution traces for each.

Which autologging calls are correct for each framework?

**Options:**

- [ ] Autologging is not available for either framework; you must log spans manually.
- [ ] Use `mlflow.langchain.autolog()` for both agents.
- [x] Use `mlflow.openai.autolog()` for the OpenAI Agents SDK agent and `mlflow.langchain.autolog()` for the LangChain/LangGraph agent.
- [ ] Use `mlflow.openai.autolog()` for both agents.

**Correct answer:** Use `mlflow.openai.autolog()` for the OpenAI Agents SDK agent and `mlflow.langchain.autolog()` for the LangChain/LangGraph agent.

**Justification:** MLflow integrations are framework-specific. The OpenAI integration instruments the OpenAI Agents SDK, while the LangChain integration instruments LangChain and LangGraph executions.

### Español

**Pregunta:** Un equipo mantiene dos agentes: uno construido con OpenAI Agents SDK y otro con LangChain usando `create_react_agent` de LangGraph. Desean que MLflow capture automáticamente las trazas de ejecución de cada uno.

¿Qué llamadas de autologging son correctas para cada framework?

**Opciones:**

- [ ] El autologging no está disponible para ninguno de los dos frameworks; se deben registrar los spans manualmente.
- [ ] Usar `mlflow.langchain.autolog()` para ambos agentes.
- [x] Usar `mlflow.openai.autolog()` para el agente de OpenAI Agents SDK y `mlflow.langchain.autolog()` para el agente de LangChain/LangGraph.
- [ ] Usar `mlflow.openai.autolog()` para ambos agentes.

**Respuesta correcta:** Usar `mlflow.openai.autolog()` para OpenAI Agents SDK y `mlflow.langchain.autolog()` para LangChain/LangGraph.

**Justificación:** Las integraciones de MLflow son específicas por framework. La integración OpenAI instrumenta OpenAI Agents SDK; la integración LangChain instrumenta ejecuciones de LangChain y LangGraph.

---

## Question 3 of 20 / Pregunta 3 de 20

### English

**Question:** A security reviewer at a bank worries that exposing Unity Catalog functions to agents through managed MCP servers could let users reach data they are not authorized to see.

Which statement correctly describes how access is governed?

**Options:**

- [ ] MCP disables Unity Catalog governance and relies on a shared service account for all calls.
- [ ] Once a function is exposed through MCP, any user of the agent can call it regardless of their permissions.
- [ ] Access is controlled only by the agent's system prompt instructions.
- [x] Unity Catalog permissions remain enforced through the MCP server, so agents and users can only access the tools and data they have been granted.

**Correct answer:** Unity Catalog permissions remain enforced through the MCP server, so agents and users can only access the tools and data they have been granted.

**Justification:** MCP exposes a governed integration path; it does not bypass Unity Catalog authorization. Permissions on the underlying functions and data remain the enforcement boundary.

### Español

**Pregunta:** Un revisor de seguridad en un banco teme que exponer funciones de Unity Catalog a agentes mediante servidores MCP administrados permita a usuarios llegar a datos para los que no están autorizados.

¿Qué afirmación describe correctamente cómo se gobierna el acceso?

**Opciones:**

- [ ] MCP deshabilita la gobernanza de Unity Catalog y se apoya en una cuenta de servicio compartida para todas las llamadas.
- [ ] Cuando una función se expone mediante MCP, cualquier usuario del agente puede invocarla sin importar sus permisos.
- [ ] El acceso se controla únicamente mediante las instrucciones del system prompt del agente.
- [x] Los permisos de Unity Catalog continúan aplicándose mediante el servidor MCP; los agentes y usuarios solo pueden acceder a las herramientas y datos que se les hayan concedido.

**Respuesta correcta:** Los permisos de Unity Catalog continúan aplicándose mediante el servidor MCP.

**Justificación:** MCP expone una ruta de integración gobernada; no evita la autorización de Unity Catalog. Los permisos de las funciones y de los datos subyacentes siguen siendo el límite de control.

---

## Question 4 of 20 / Pregunta 4 de 20

### English

**Question:** After a supervisor hands off a query to a worker, a developer inspects the run and wants to confirm which agent actually produced the final answer.

```python
result = await Runner.run(supervisor, "Is $200/night a good deal in the city?")
print(result.last_agent.name)
```

What will `result.last_agent.name` show, and why?

**Options:**

- [ ] A random agent, because handoff selection is nondeterministic and untracked.
- [x] The worker that received the handoff, because once a handoff occurs the worker takes over the conversation and produces the final response.
- [ ] Always the supervisor, because the supervisor post-processes every worker response.
- [ ] The MCP server name, because tools own the conversation after a handoff.

**Correct answer:** The worker that received the handoff, because once a handoff occurs the worker takes over the conversation and produces the final response.

**Justification:** In a successful handoff, the delegated worker becomes the active agent for the remaining turn. `last_agent` identifies that final active agent, not the tool or the original supervisor.

### Español

**Pregunta:** Después de que un supervisor delega una consulta en un trabajador, un desarrollador inspecciona la ejecución y quiere confirmar qué agente produjo realmente la respuesta final.

```python
result = await Runner.run(supervisor, "Is $200/night a good deal in the city?")
print(result.last_agent.name)
```

¿Qué mostrará `result.last_agent.name` y por qué?

**Opciones:**

- [ ] Un agente aleatorio, porque la selección de delegación no es determinista ni se registra.
- [x] El trabajador que recibió la delegación, porque cuando ocurre la delegación ese trabajador toma la conversación y genera la respuesta final.
- [ ] Siempre el supervisor, porque el supervisor procesa posteriormente toda respuesta del trabajador.
- [ ] El nombre del servidor MCP, porque las herramientas poseen la conversación después de una delegación.

**Respuesta correcta:** El trabajador que recibió la delegación.

**Justificación:** En una delegación exitosa, el trabajador delegado se convierte en el agente activo durante el resto del turno. `last_agent` identifica ese agente activo final, no la herramienta ni el supervisor original.

---

## Question 5 of 20 / Pregunta 5 de 20

### English

**Question:** An engineering team runs a single agent that has grown to roughly 20 tools spanning finance, HR, and IT support. They observe frequent tool-selection errors, the system prompt has become long and self-conflicting, and three different teams now need to own their own tools and evolve them independently.

What is the most appropriate next step?

**Options:**

- [ ] Keep one agent and make the system prompt even longer and more detailed to resolve the conflicts.
- [x] Decompose into a multi-agent system with specialized worker agents per domain coordinated by a supervisor, so each has focused tools and instructions and teams can own their agents independently.
- [ ] Keep one agent but remove most of its tools so only a few remain, dropping the finance and HR capabilities.
- [ ] Replace the agent with a fine-tuned model so tool selection is no longer needed.

**Correct answer:** Decompose into a multi-agent system with specialized worker agents per domain coordinated by a supervisor, so each has focused tools and instructions and teams can own their agents independently.

**Justification:** The observed failure modes are signs that the single agent has exceeded a manageable tool and instruction scope. Domain workers reduce tool ambiguity and allow independent ownership, while the supervisor routes requests.

### Español

**Pregunta:** Un equipo de ingeniería opera un solo agente que ha crecido hasta tener aproximadamente 20 herramientas de finanzas, RR. HH. y soporte de TI. Observan errores frecuentes al elegir herramientas, el system prompt se volvió largo y contradictorio, y tres equipos distintos necesitan ser propietarios de sus herramientas y evolucionarlas de manera independiente.

¿Cuál es el siguiente paso más apropiado?

**Opciones:**

- [ ] Mantener un agente y hacer el system prompt aún más largo y detallado para resolver los conflictos.
- [x] Descomponer el sistema en varios agentes, con trabajadores especializados por dominio coordinados por un supervisor, de modo que cada uno tenga herramientas e instrucciones enfocadas y los equipos puedan administrar sus agentes de forma independiente.
- [ ] Mantener un agente, pero eliminar la mayoría de sus herramientas para que queden solo unas pocas, perdiendo las capacidades de finanzas y RR. HH.
- [ ] Sustituir el agente por un modelo fine-tuned para que ya no sea necesaria la selección de herramientas.

**Respuesta correcta:** Descomponer el sistema en varios agentes especializados por dominio coordinados por un supervisor.

**Justificación:** Los fallos observados indican que el agente único superó un alcance manejable de herramientas e instrucciones. Los trabajadores por dominio reducen la ambigüedad y permiten propiedad independiente; el supervisor enruta las solicitudes.

---

## Question 6 of 20 / Pregunta 6 de 20

### English

**Question:** An enterprise wants one system that answers questions spanning several domains: structured analytics via a Genie space, document Q&A via a Knowledge Assistant endpoint, and a deterministic lookup via a Unity Catalog function. It must route each request to the right specialist and must never return results from a subagent a given user is not permitted to access.

Which approach best fits, and what governs access?

**Options:**

- [x] A Multi-Agent Supervisor that coordinates the Genie space, Knowledge Assistant endpoint, and UC function as subagents, routing by intent while enforcing per-user access so users only get results from subagents they can access.
- [ ] A sequential chain that always calls all three subagents in a fixed order regardless of the question.
- [ ] A single Knowledge Assistant, because it can natively coordinate Genie spaces and UC functions.
- [ ] A code interpreter tool that reimplements all three capabilities in Python.

**Correct answer:** A Multi-Agent Supervisor that coordinates the Genie space, Knowledge Assistant endpoint, and UC function as subagents, routing by intent while enforcing per-user access so users only get results from subagents they can access.

**Justification:** This is a multi-domain routing problem. A supervisor selects the appropriate specialist, and the governed access model applies per user to prevent a routed request from exposing an unauthorized subagent's results.

### Español

**Pregunta:** Una empresa quiere un sistema que responda preguntas de varios dominios: análisis estructurado mediante un espacio Genie, preguntas y respuestas sobre documentos mediante un endpoint de Knowledge Assistant y una consulta determinista mediante una función de Unity Catalog. Debe enrutar cada solicitud al especialista correcto y nunca devolver resultados de un subagente al que un usuario dado no tenga acceso.

¿Qué enfoque encaja mejor y qué gobierna el acceso?

**Opciones:**

- [x] Un Multi-Agent Supervisor que coordina el espacio Genie, el endpoint de Knowledge Assistant y la función de UC como subagentes, enruta por intención y aplica acceso por usuario para que cada persona reciba resultados solo de subagentes a los que puede acceder.
- [ ] Una cadena secuencial que siempre llama a los tres subagentes en un orden fijo sin importar la pregunta.
- [ ] Un único Knowledge Assistant, porque puede coordinar de forma nativa espacios Genie y funciones de UC.
- [ ] Una herramienta de intérprete de código que reimplementa las tres capacidades en Python.

**Respuesta correcta:** Un Multi-Agent Supervisor que coordina los especialistas y aplica acceso por usuario.

**Justificación:** Es un problema de enrutamiento entre dominios. El supervisor selecciona el especialista adecuado y el modelo de acceso gobernado se aplica por usuario para evitar exponer resultados de subagentes no autorizados.

---

## Question 7 of 20 / Pregunta 7 de 20

### English

**Question:** A developer registers a SQL function as an agent tool that computes the average claim amount for an insurance region.

```sql
CREATE OR REPLACE FUNCTION avg_region_claim(
  region_name STRING COMMENT 'Region to filter by, e.g. Midwest'
)
RETURNS DOUBLE
LANGUAGE SQL
_______
COMMENT 'Returns the average claim amount for a given region.'
RETURN SELECT AVG(claim_amount) FROM claims WHERE region = region_name
```

The team wants the function marked so the engine knows it always returns the same result for the same input, and they want the agent to select it reliably.

Which choice best completes the definition and explains the practices shown?

**Options:**

- [ ] Leave the blank empty; the COMMENT clauses have no effect on agent tool selection.
- [x] Put `DETERMINISTIC` in the blank; combined with clear COMMENT clauses on the function and parameter, this helps both the engine and the agent understand and select the tool.
- [ ] Put `PARTITIONED BY (region_name)`, because agent tools must be partitioned.
- [ ] Put `NONDETERMINISTIC` in the blank, because averages change and the comments are only for humans.

**Correct answer:** Put `DETERMINISTIC` in the blank; combined with clear COMMENT clauses on the function and parameter, this helps both the engine and the agent understand and select the tool.

**Justification:** `DETERMINISTIC` declares that identical inputs produce identical results. Clear function and parameter comments supply semantic metadata that helps an agent discover and choose a suitable tool.

### Español

**Pregunta:** Un desarrollador registra como herramienta de agente una función SQL que calcula el monto promedio de reclamos para una región de seguros.

```sql
CREATE OR REPLACE FUNCTION avg_region_claim(
  region_name STRING COMMENT 'Region to filter by, e.g. Midwest'
)
RETURNS DOUBLE
LANGUAGE SQL
_______
COMMENT 'Returns the average claim amount for a given region.'
RETURN SELECT AVG(claim_amount) FROM claims WHERE region = region_name
```

El equipo quiere marcar la función para que el motor sepa que siempre devuelve el mismo resultado ante la misma entrada, y desea que el agente pueda seleccionarla de forma fiable.

¿Qué opción completa mejor la definición y explica las prácticas mostradas?

**Opciones:**

- [ ] Dejar el espacio vacío; las cláusulas COMMENT no tienen efecto sobre la selección de herramientas del agente.
- [x] Colocar `DETERMINISTIC` en el espacio; combinado con cláusulas COMMENT claras sobre la función y el parámetro, ayuda al motor y al agente a comprender y seleccionar la herramienta.
- [ ] Colocar `PARTITIONED BY (region_name)`, porque las herramientas de agente deben estar particionadas.
- [ ] Colocar `NONDETERMINISTIC` en el espacio, porque los promedios cambian y los comentarios son solo para humanos.

**Respuesta correcta:** Colocar `DETERMINISTIC` en el espacio.

**Justificación:** `DETERMINISTIC` declara que entradas idénticas producen resultados idénticos. Los comentarios claros de la función y del parámetro aportan metadatos semánticos que ayudan a un agente a descubrir y elegir la herramienta apropiada.

---

## Question 8 of 20 / Pregunta 8 de 20

### English

**Question:** A platform team has built a set of tools for one agent framework and now wants to reuse the same tools with a different framework and with several client applications, without rewriting integration code for each. Which statement best describes what the Model Context Protocol (MCP) provides here?

**Options:**

- [ ] MCP is a billing layer that meters tool usage per token.
- [ ] MCP is a Databricks-only storage format for embeddings.
- [ ] MCP is a fine-tuning technique that teaches the model which tools to call.
- [x] MCP is an open standard for connecting agents to tools and context, so a tool built once can be discovered and called by any MCP-compatible agent or client.

**Correct answer:** MCP is an open standard for connecting agents to tools and context, so a tool built once can be discovered and called by any MCP-compatible agent or client.

**Justification:** MCP standardizes the connection between clients, agents, context, and tools; it is not a billing, storage, or fine-tuning mechanism.

### Español

**Pregunta:** Un equipo de plataforma creó un conjunto de herramientas para un framework de agentes y ahora desea reutilizarlas con otro framework y varias aplicaciones cliente, sin reescribir el código de integración para cada una. ¿Qué describe mejor lo que aporta el Model Context Protocol (MCP)?

**Opciones:**

- [ ] MCP es una capa de facturación que mide el uso de herramientas por token.
- [ ] MCP es un formato de almacenamiento de embeddings exclusivo de Databricks.
- [ ] MCP es una técnica de fine-tuning que enseña al modelo qué herramientas llamar.
- [x] MCP es un estándar abierto para conectar agentes con herramientas y contexto, de modo que una herramienta creada una vez puede ser descubierta y llamada por cualquier agente o cliente compatible con MCP.

**Respuesta correcta:** MCP es un estándar abierto para conectar agentes con herramientas y contexto.

**Justificación:** MCP estandariza la conexión entre clientes, agentes, contexto y herramientas; no es un mecanismo de facturación, almacenamiento ni fine-tuning.

---

## Question 9 of 20 / Pregunta 9 de 20

### English

**Question:** A developer chains two agents so the output of the first flows into the second, and wants the second agent to see the full conversation history rather than only the first agent's final text string.

```python
result1 = await Runner.run(agent1, user_input)
result2 = await Runner.run(agent2, result1._______)
```

What should fill the blank, and why?

**Options:**

- [ ] `final_output`, because passing only the final string always carries the full history.
- [x] `to_input_list()`, because it carries the full conversation history forward, not just the final text string.
- [ ] `raw_response`, because it contains the model's tokens.
- [ ] `messages_json`, because it serializes the run to disk.

**Correct answer:** `to_input_list()`, because it carries the full conversation history forward, not just the final text string.

**Justification:** `final_output` is only the final text. `to_input_list()` preserves the input items/history needed by the next run.

### Español

**Pregunta:** Un desarrollador encadena dos agentes para que la salida del primero pase al segundo y quiere que el segundo vea el historial completo de conversación, no solo la cadena de texto final del primer agente.

```python
result1 = await Runner.run(agent1, user_input)
result2 = await Runner.run(agent2, result1._______)
```

¿Qué debe completar el espacio y por qué?

**Opciones:**

- [ ] `final_output`, porque pasar solo la cadena final siempre conserva todo el historial.
- [x] `to_input_list()`, porque lleva adelante el historial completo de conversación, no solo la cadena final.
- [ ] `raw_response`, porque contiene los tokens del modelo.
- [ ] `messages_json`, porque serializa la ejecución al disco.

**Respuesta correcta:** `to_input_list()`.

**Justificación:** `final_output` solo contiene el texto final. `to_input_list()` conserva los elementos de entrada y el historial que necesita la siguiente ejecución.

---

## Question 10 of 20 / Pregunta 10 de 20

### English

**Question:** An agent for an e-commerce company needs to answer a question that requires running Python to compute a custom statistical calculation on the fly, rather than querying a table or searching documents. Which common Databricks agent tool pattern fits this need?

**Options:**

- [ ] A structured data retrieval tool, because it returns numbers.
- [ ] An external connection tool, because computation happens outside the model.
- [x] A code interpreter tool, which lets the agent run Python for calculations, data analysis, and dynamic processing.
- [ ] An unstructured data retrieval tool, because the calculation involves text.

**Correct answer:** A code interpreter tool.

**Justification:** A code interpreter supports executing Python for dynamic calculations and analysis; retrieval tools obtain existing information rather than compute a custom result.

### Español

**Pregunta:** Un agente de una empresa de comercio electrónico necesita responder una pregunta que requiere ejecutar Python para calcular una estadística personalizada en el momento, en lugar de consultar una tabla o buscar documentos. ¿Qué patrón común de herramienta de agentes de Databricks encaja?

**Opciones:**

- [ ] Una herramienta de recuperación de datos estructurados, porque devuelve números.
- [ ] Una herramienta de conexión externa, porque el cálculo ocurre fuera del modelo.
- [x] Una herramienta de intérprete de código, que permite al agente ejecutar Python para cálculos, análisis de datos y procesamiento dinámico.
- [ ] Una herramienta de recuperación de datos no estructurados, porque el cálculo involucra texto.

**Respuesta correcta:** Una herramienta de intérprete de código.

**Justificación:** El intérprete de código ejecuta Python para cálculos y análisis dinámicos; las herramientas de recuperación obtienen información existente, no calculan un resultado personalizado.

---

## Question 11 of 20 / Pregunta 11 de 20

### English

**Question:** A developer runs a single agent and needs the final text answer from the run.

```python
result = await Runner.run(data_analyst_agent, "Is $150 a fair nightly rate?")
answer = result.______
print(answer)
```

Which statement is correct about executing the agent and reading its result?

**Options:**

- [ ] `Runner.run` is synchronous, so `await` is unnecessary and will raise an error.
- [ ] You must call `result.execute()` before any output is available.
- [ ] `result` is already a plain string, so no attribute access is needed.
- [x] `Runner.run` is async, so it must be awaited, and `result.final_output` holds the agent's final text response.

**Correct answer:** `Runner.run` is async, so it must be awaited, and `result.final_output` holds the agent's final text response.

**Justification:** The SDK returns a run result object asynchronously. Its `final_output` property contains the final response text.

### Español

**Pregunta:** Un desarrollador ejecuta un único agente y necesita el texto final de la ejecución.

```python
result = await Runner.run(data_analyst_agent, "Is $150 a fair nightly rate?")
answer = result.______
print(answer)
```

¿Qué afirmación es correcta sobre ejecutar el agente y leer el resultado?

**Opciones:**

- [ ] `Runner.run` es síncrono, así que `await` es innecesario y generará un error.
- [ ] Debe llamar a `result.execute()` antes de que exista una salida.
- [ ] `result` ya es una cadena simple, por lo que no se necesita acceder a atributos.
- [x] `Runner.run` es asíncrono, debe esperarse con `await`, y `result.final_output` contiene la respuesta textual final del agente.

**Respuesta correcta:** `result.final_output` tras esperar `await Runner.run(...)`.

**Justificación:** El SDK devuelve un objeto de resultado de ejecución de manera asíncrona. Su propiedad `final_output` contiene la respuesta final.

---

## Question 12 of 20 / Pregunta 12 de 20

### English

**Question:** A content team needs three workflows. Workflow A runs several independent analyses of the same document at once to reduce latency. Workflow B repeatedly revises a draft, with an evaluator giving explicit feedback each pass until it approves or a max iteration count is hit. Workflow C decomposes a task into an ordered pipeline where each step depends on the previous one. Which mapping of orchestration patterns is correct?

**Options:**

- [ ] A: sequential; B: parallel; C: feedback loop.
- [ ] A: feedback loop; B: sequential; C: parallel.
- [x] A: parallel execution; B: feedback loop; C: sequential chaining.
- [ ] A: handoffs; B: agents-as-tools; C: parallel.

**Correct answer:** A: parallel execution; B: feedback loop; C: sequential chaining.

**Justification:** Independent work runs in parallel, iterative evaluator feedback forms a loop, and dependent steps form a sequential chain.

### Español

**Pregunta:** Un equipo de contenido necesita tres flujos. El flujo A ejecuta varios análisis independientes del mismo documento a la vez para reducir latencia. El flujo B revisa repetidamente un borrador, con un evaluador que da retroalimentación explícita en cada pasada hasta aprobarlo o alcanzar un máximo de iteraciones. El flujo C descompone una tarea en una canalización ordenada donde cada paso depende del anterior. ¿Qué mapeo de patrones de orquestación es correcto?

**Opciones:**

- [ ] A: secuencial; B: paralelo; C: bucle de retroalimentación.
- [ ] A: bucle de retroalimentación; B: secuencial; C: paralelo.
- [x] A: ejecución paralela; B: bucle de retroalimentación; C: encadenamiento secuencial.
- [ ] A: handoffs; B: agentes-como-herramientas; C: paralelo.

**Respuesta correcta:** A: ejecución paralela; B: bucle de retroalimentación; C: encadenamiento secuencial.

**Justificación:** El trabajo independiente se ejecuta en paralelo, la retroalimentación iterativa del evaluador forma un bucle y los pasos dependientes forman una cadena secuencial.

---

## Question 13 of 20 / Pregunta 13 de 20

### English

**Question:** A team wants to build production agents through a guided, no-code interface on Databricks rather than writing agent orchestration code, and asks which Agent Bricks options exist. Which statement correctly describes Agent Bricks?

**Options:**

- [ ] Agent Bricks is a storage format for agent traces.
- [ ] Agent Bricks is a Python-only SDK that replaces the OpenAI Agents SDK.
- [x] Agent Bricks is a no-code platform offering agent types such as Knowledge Assistant, Supervisor Agent, and Information Extraction, built on Unity Catalog, Model Serving, MLflow, and Agent Evaluation.
- [ ] Agent Bricks only supports one agent type, a document classifier.

**Correct answer:** Agent Bricks is a no-code platform offering Knowledge Assistant, Supervisor Agent, and Information Extraction, built on Unity Catalog, Model Serving, MLflow, and Agent Evaluation.

**Justification:** Agent Bricks provides managed, guided agent-building capabilities; it is not a trace format or a replacement for code-first SDKs.

### Español

**Pregunta:** Un equipo quiere construir agentes de producción mediante una interfaz guiada y sin código en Databricks, en lugar de escribir código de orquestación, y pregunta qué opciones existen en Agent Bricks. ¿Qué afirmación describe correctamente Agent Bricks?

**Opciones:**

- [ ] Agent Bricks es un formato de almacenamiento para trazas de agentes.
- [ ] Agent Bricks es un SDK exclusivo de Python que reemplaza el OpenAI Agents SDK.
- [x] Agent Bricks es una plataforma sin código que ofrece tipos de agentes como Knowledge Assistant, Supervisor Agent e Information Extraction, construida sobre Unity Catalog, Model Serving, MLflow y Agent Evaluation.
- [ ] Agent Bricks solo admite un tipo de agente: un clasificador de documentos.

**Respuesta correcta:** Agent Bricks es una plataforma sin código con Knowledge Assistant, Supervisor Agent e Information Extraction.

**Justificación:** Agent Bricks ofrece capacidades administradas y guiadas para construir agentes; no es un formato de trazas ni un sustituto de los SDK orientados a código.

---

## Question 14 of 20 / Pregunta 14 de 20

### English

**Question:** A developer builds a supervisor that delegates to two worker agents using the OpenAI Agents SDK.

```python
supervisor = Agent(
    name="Supervisor",
    instructions="Route requests to the right specialist.",
    handoffs=[claims_agent, billing_agent],
)
```

The developer looks for where the `transfer_to_claims_agent` and `transfer_to_billing_agent` tools are defined and cannot find them. What is the correct explanation?

**Options:**

- [ ] The developer must manually write each `transfer_to_*` tool as a Python function.
- [ ] Handoffs are not supported unless every worker shares one MCP server.
- [ ] The tools must be registered to Unity Catalog before handoffs will work.
- [x] The SDK auto-generates a `transfer_to_{agent_name}` handoff tool from the `handoffs` list, so the supervisor's LLM can route by calling them.

**Correct answer:** The SDK auto-generates a `transfer_to_{agent_name}` handoff tool from the `handoffs` list.

**Justification:** The SDK derives the transfer tools from the configured handoff targets; no manual Python function or MCP/Unity Catalog registration is required for this behavior.

### Español

**Pregunta:** Un desarrollador construye un supervisor que delega en dos agentes trabajadores mediante el OpenAI Agents SDK.

```python
supervisor = Agent(
    name="Supervisor",
    instructions="Route requests to the right specialist.",
    handoffs=[claims_agent, billing_agent],
)
```

El desarrollador busca dónde se definen las herramientas `transfer_to_claims_agent` y `transfer_to_billing_agent`, pero no las encuentra. ¿Cuál es la explicación correcta?

**Opciones:**

- [ ] Debe escribir manualmente cada herramienta `transfer_to_*` como una función Python.
- [ ] Los handoffs no son compatibles a menos que todos los trabajadores compartan un servidor MCP.
- [ ] Las herramientas deben registrarse en Unity Catalog antes de que los handoffs funcionen.
- [x] El SDK genera automáticamente una herramienta de handoff `transfer_to_{agent_name}` desde la lista `handoffs`, para que el LLM del supervisor pueda enrutar al llamarlas.

**Respuesta correcta:** El SDK genera automáticamente una herramienta `transfer_to_{agent_name}` a partir de `handoffs`.

**Justificación:** El SDK deriva las herramientas de transferencia de los destinos configurados; no se necesita una función Python manual ni registro MCP o Unity Catalog para este comportamiento.

---

## Question 15 of 20 / Pregunta 15 de 20

### English

**Question:** A developer wraps a Python function with the OpenAI Agents SDK `@function_tool` decorator so an agent can call it.

```python
from agents import function_tool

@function_tool
def get_inventory(sku: str) -> int:
    """Return the on-hand quantity for a product SKU."""
    ...
```

How does the SDK determine the tool schema the LLM sees?

**Options:**

- [ ] The LLM infers the schema at random on each call.
- [ ] The developer must write a separate JSON schema by hand and pass it to the agent.
- [x] The decorator derives the schema from the function's name, type hints, and docstring, so clear names and docstrings improve tool selection.
- [ ] The schema is generated only after the tool is registered to Unity Catalog.

**Correct answer:** The decorator derives the schema from the function's name, type hints, and docstring.

**Justification:** Function metadata is converted into the callable schema provided to the model, which is why descriptive names, types, and docstrings matter.

### Español

**Pregunta:** Un desarrollador envuelve una función Python con el decorador `@function_tool` del OpenAI Agents SDK para que un agente pueda llamarla.

```python
from agents import function_tool

@function_tool
def get_inventory(sku: str) -> int:
    """Return the on-hand quantity for a product SKU."""
    ...
```

¿Cómo determina el SDK el esquema de herramienta que ve el LLM?

**Opciones:**

- [ ] El LLM infiere el esquema al azar en cada llamada.
- [ ] El desarrollador debe escribir a mano un esquema JSON separado y pasarlo al agente.
- [x] El decorador deriva el esquema del nombre de la función, las anotaciones de tipo y el docstring; por eso nombres y docstrings claros mejoran la selección de herramientas.
- [ ] El esquema solo se genera después de registrar la herramienta en Unity Catalog.

**Respuesta correcta:** El decorador deriva el esquema del nombre, las anotaciones de tipo y el docstring.

**Justificación:** Los metadatos de la función se convierten en el esquema invocable que recibe el modelo, por lo que importan los nombres, tipos y docstrings descriptivos.

---

## Question 16 of 20 / Pregunta 16 de 20

### English

**Question:** A developer wants the OpenAI Agents SDK to route model calls through Databricks model serving instead of the public OpenAI API, and to use MLflow for tracing instead of the SDK's built-in trace processor.

```python
from agents import set_default_openai_api, set_default_openai_client
from agents.tracing import set_trace_processors
from databricks_openai import AsyncDatabricksOpenAI

set_default_openai_client(_______)
set_default_openai_api("chat_completions")
set_trace_processors([])
```

What belongs in the blank to route the SDK through Databricks?

**Options:**

- [x] `AsyncDatabricksOpenAI()`, which configures the SDK to use Databricks model routing.
- [ ] `OpenAI(api_key="sk-...")`, which points at the public OpenAI API.
- [ ] `mlflow.openai.autolog()`, which enables tracing but does not set the client.
- [ ] `DatabricksMCPClient()`, which is for calling MCP tools, not routing model calls.

**Correct answer:** `AsyncDatabricksOpenAI()`.

**Justification:** The Databricks OpenAI-compatible asynchronous client supplies the model-serving route. Autologging controls tracing, while an MCP client is for tools.

### Español

**Pregunta:** Un desarrollador quiere que el OpenAI Agents SDK enrute las llamadas al modelo a través de Model Serving de Databricks, en vez de la API pública de OpenAI, y usar MLflow para trazas en lugar del procesador de trazas integrado del SDK.

```python
from agents import set_default_openai_api, set_default_openai_client
from agents.tracing import set_trace_processors
from databricks_openai import AsyncDatabricksOpenAI

set_default_openai_client(_______)
set_default_openai_api("chat_completions")
set_trace_processors([])
```

¿Qué debe ir en el espacio para enrutar el SDK por Databricks?

**Opciones:**

- [x] `AsyncDatabricksOpenAI()`, que configura el SDK para usar el enrutamiento de modelos de Databricks.
- [ ] `OpenAI(api_key="sk-...")`, que apunta a la API pública de OpenAI.
- [ ] `mlflow.openai.autolog()`, que habilita trazas pero no configura el cliente.
- [ ] `DatabricksMCPClient()`, que sirve para llamar herramientas MCP, no para enrutar llamadas al modelo.

**Respuesta correcta:** `AsyncDatabricksOpenAI()`.

**Justificación:** El cliente asíncrono compatible con OpenAI de Databricks proporciona la ruta de Model Serving. El autologging controla las trazas y un cliente MCP se usa para herramientas.

---

## Question 17 of 20 / Pregunta 17 de 20

### English

**Question:** A media company must ship a standard document question-answering assistant quickly, with managed optimization and built-in evaluation and minimal agent code. A separate team needs a highly customized multi-step orchestration with bespoke tool logic and full control over the agent loop. Which choice fits each team best?

**Options:**

- [x] First team: Agent Bricks (no-code, managed optimization, built-in evaluation); second team: a code-first framework for full control over orchestration and custom tools.
- [ ] First team: code-first OpenAI Agents SDK; second team: Agent Bricks.
- [ ] Both teams should use Agent Bricks, since code-first frameworks are unsupported on Databricks.
- [ ] Both teams should hand-write custom OpenAI Agents SDK code, since Agent Bricks cannot evaluate agents.

**Correct answer:** First team: Agent Bricks; second team: a code-first framework.

**Justification:** Agent Bricks fits managed, low-code delivery and built-in evaluation. Code-first frameworks fit bespoke orchestration and tool control.

### Español

**Pregunta:** Una empresa de medios debe entregar rápido un asistente estándar de preguntas y respuestas sobre documentos, con optimización administrada, evaluación integrada y poco código de agente. Otro equipo necesita una orquestación multietapa muy personalizada, con lógica de herramientas propia y control total del ciclo del agente. ¿Qué elección encaja mejor con cada equipo?

**Opciones:**

- [x] Primer equipo: Agent Bricks (sin código, optimización administrada y evaluación integrada); segundo equipo: un framework orientado a código para control total de la orquestación y herramientas personalizadas.
- [ ] Primer equipo: OpenAI Agents SDK orientado a código; segundo equipo: Agent Bricks.
- [ ] Ambos equipos deben usar Agent Bricks, porque los frameworks orientados a código no son compatibles con Databricks.
- [ ] Ambos equipos deben escribir a mano código de OpenAI Agents SDK, porque Agent Bricks no puede evaluar agentes.

**Respuesta correcta:** Primer equipo: Agent Bricks; segundo equipo: un framework orientado a código.

**Justificación:** Agent Bricks encaja en la entrega administrada con poco código y evaluación integrada. Los frameworks orientados a código permiten orquestación y herramientas a medida.

---

## Question 18 of 20 / Pregunta 18 de 20

### English

**Question:** A developer wants an agent to discover and call all the Unity Catalog functions registered in the `finance.tools` schema through a Databricks managed MCP server.

```python
mcp_url = f"{workspace_host}/api/2.0/mcp/_______/finance/tools"
mcp_client = DatabricksMCPClient(server_url=mcp_url, workspace_client=ws)
tools = mcp_client.list_tools()
```

What belongs in the blank so the URL points at the managed MCP server for Unity Catalog functions in that schema?

**Options:**

- [ ] The path segment should be `sql`, giving `/api/2.0/mcp/sql/finance/tools`.
- [ ] The path segment should be `genie`, giving `/api/2.0/mcp/genie/finance/tools`.
- [ ] The path segment should be `models`, giving `/api/2.0/mcp/models/finance/tools`.
- [x] The path segment should be `functions`, giving `/api/2.0/mcp/functions/finance/tools`.

**Correct answer:** `functions`.

**Justification:** The Databricks managed MCP endpoint for Unity Catalog functions uses the `functions` path segment followed by catalog and schema.

### Español

**Pregunta:** Un desarrollador quiere que un agente descubra y llame todas las funciones de Unity Catalog registradas en el esquema `finance.tools` mediante un servidor MCP administrado por Databricks.

```python
mcp_url = f"{workspace_host}/api/2.0/mcp/_______/finance/tools"
mcp_client = DatabricksMCPClient(server_url=mcp_url, workspace_client=ws)
tools = mcp_client.list_tools()
```

¿Qué debe ir en el espacio para que la URL apunte al servidor MCP administrado para funciones de Unity Catalog de ese esquema?

**Opciones:**

- [ ] El segmento debe ser `sql`, produciendo `/api/2.0/mcp/sql/finance/tools`.
- [ ] El segmento debe ser `genie`, produciendo `/api/2.0/mcp/genie/finance/tools`.
- [ ] El segmento debe ser `models`, produciendo `/api/2.0/mcp/models/finance/tools`.
- [x] El segmento debe ser `functions`, produciendo `/api/2.0/mcp/functions/finance/tools`.

**Respuesta correcta:** `functions`.

**Justificación:** El endpoint MCP administrado de Databricks para funciones de Unity Catalog usa el segmento `functions`, seguido del catálogo y el esquema.

---

## Question 19 of 20 / Pregunta 19 de 20

### English

**Question:** A team is deciding between two OpenAI Agents SDK patterns. In pattern one, a triage agent transfers the conversation to a specialist that then responds directly to the user. In pattern two, a manager agent calls specialists, keeps control, and synthesizes their outputs into one final answer it owns. Which mapping is correct?

**Options:**

- [ ] Both patterns are sequential chaining, since agents run one after another.
- [x] Pattern one is handoffs (the specialist takes over the conversation); pattern two is agents-as-tools (the manager retains control and synthesizes results).
- [ ] Both patterns are handoffs, since both involve multiple agents.
- [ ] Pattern one is agents-as-tools; pattern two is handoffs.

**Correct answer:** Pattern one is handoffs; pattern two is agents-as-tools.

**Justification:** A handoff transfers ownership of the conversation. In agents-as-tools, the manager remains responsible for the final answer.

### Español

**Pregunta:** Un equipo decide entre dos patrones del OpenAI Agents SDK. En el patrón uno, un agente de triaje transfiere la conversación a un especialista, que luego responde directamente al usuario. En el patrón dos, un agente gerente llama a especialistas, conserva el control y sintetiza sus salidas en una respuesta final propia. ¿Qué mapeo es correcto?

**Opciones:**

- [ ] Ambos patrones son encadenamiento secuencial, porque los agentes se ejecutan uno tras otro.
- [x] El patrón uno es handoffs (el especialista toma la conversación); el patrón dos es agentes-como-herramientas (el gerente conserva el control y sintetiza resultados).
- [ ] Ambos patrones son handoffs, porque ambos involucran varios agentes.
- [ ] El patrón uno es agentes-como-herramientas; el patrón dos es handoffs.

**Respuesta correcta:** El patrón uno es handoffs; el patrón dos es agentes-como-herramientas.

**Justificación:** Un handoff transfiere la propiedad de la conversación. En agentes-como-herramientas, el gerente sigue siendo responsable de la respuesta final.

---

## Question 20 of 20 / Pregunta 20 de 20

### English

**Question:** An agent for a healthcare provider must handle three kinds of requests: open-ended analytical questions over governed structured tables (for example, “which clinics had the most no-shows last quarter”), retrieval over a large collection of policy PDFs, and a fixed, parameterized lookup of a patient record by ID. Which mapping of Databricks managed MCP servers is most appropriate?

**Options:**

- [ ] Use the SQL managed server for all three, since everything is ultimately SQL.
- [ ] Use a Knowledge Assistant for the structured questions and a Genie space for the PDFs.
- [ ] Use a Unity Catalog function for all three, since UC governs everything.
- [x] Use a Genie space for the open-ended structured questions, an AI Search index for the PDF retrieval, and a Unity Catalog function for the fixed parameterized lookup.

**Correct answer:** Use a Genie space, an AI Search index, and a Unity Catalog function respectively.

**Justification:** Genie is designed for natural-language analysis over governed structured data, AI Search retrieves unstructured documents, and a Unity Catalog function fits a deterministic parameterized operation.

### Español

**Pregunta:** Un agente de un proveedor de salud debe manejar tres clases de solicitudes: preguntas analíticas abiertas sobre tablas estructuradas gobernadas (por ejemplo, “¿qué clínicas tuvieron más ausencias el último trimestre?”), recuperación sobre una gran colección de PDF de políticas y una consulta fija y parametrizada de un registro de paciente por ID. ¿Qué mapeo de servidores MCP administrados de Databricks es el más apropiado?

**Opciones:**

- [ ] Usar el servidor administrado SQL para los tres, ya que en último término todo es SQL.
- [ ] Usar un Knowledge Assistant para las preguntas estructuradas y un espacio Genie para los PDF.
- [ ] Usar una función de Unity Catalog para los tres, ya que UC gobierna todo.
- [x] Usar un espacio Genie para las preguntas estructuradas abiertas, un índice AI Search para recuperar los PDF y una función de Unity Catalog para la consulta fija parametrizada.

**Respuesta correcta:** Usar, respectivamente, un espacio Genie, un índice AI Search y una función de Unity Catalog.

**Justificación:** Genie está diseñado para análisis en lenguaje natural sobre datos estructurados gobernados; AI Search recupera documentos no estructurados y una función de Unity Catalog encaja en una operación determinista y parametrizada.
