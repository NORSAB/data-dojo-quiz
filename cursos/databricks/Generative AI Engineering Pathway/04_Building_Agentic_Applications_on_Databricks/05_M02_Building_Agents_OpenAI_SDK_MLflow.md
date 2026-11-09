# Módulo 2: Building Agents with the OpenAI Agents SDK and MLflow
## Curso 4: Building Agentic Applications on Databricks (Databricks Academy)

> **Tipo de contenido:** Transcripción literal y completa de la lección oficial de Databricks Academy  
> **ID del objeto de aprendizaje:** `64268:3563`  
> **Estado:** Oficial Databricks Academy

---

## 1. Overview y Objetivos de Aprendizaje

### Overview
Now that you know how to create and govern agent tools, this lecture introduces the framework you will use to build agents: the **OpenAI Agents SDK** running on Databricks. We cover orchestration patterns, MCP integration, the `@function_tool` decorator, multi-agent concepts, and how MLflow provides observability across single-agent and multi-agent flows.

### Learning Objectives
By the end of this lecture, you will be able to:
1. Identify the orchestration patterns supported by the OpenAI Agents SDK (handoffs, agents-as-tools, sequential, parallel, feedback loops).
2. Explain how `McpServer` connects agents to Unity Catalog functions via MCP.
3. Describe how `@function_tool` turns a Python function into an agent tool.
4. Understand multi-agent concepts: supervisor agents, handoffs, and worker specialization.
5. Recognize other supported frameworks (LangChain, LangGraph, DSPy) and when to use them.
6. Explain how MLflow tracing captures agent execution as hierarchical spans.

---

## 2. A. OpenAI Agent Orchestration Patterns

El OpenAI Agents SDK soporta múltiples patrones de orquestación categorizados en dos familias:
- **LLM-driven:** El modelo decide dinámicamente qué agente o herramienta invocar.
- **Code-driven:** El código en Python controla el flujo de ejecución de manera determinista.

---

### Familia 1: LLM-Driven Orchestration

#### 1. Handoffs (Transferencia de Control)
- **Patrón:** Un agente de triaje/supervisor enruta la conversación a un especialista, el cual **se convierte en el agente activo** y responde directamente al usuario.
- **Comportamiento clave:** La propiedad de la conversación se transfiere por completo. El supervisor no posprocesa la respuesta.
- **Cuándo usar:** El especialista debe interactuar directamente con el usuario, los prompts deben mantenerse concisos y especializados, o se requiere intercambiar conjuntos de herramientas según la ruta.
- **Sintaxis SDK:**
  ```python
  from agents import Agent

  supervisor = Agent(
      name="Supervisor",
      instructions="Route requests to specialists.",
      handoffs=[agent_a, agent_b]
  )
  ```

#### 2. Agents as Tools (Agentes como Herramientas)
- **Patrón:** Un agente administrador (manager) mantiene el control de la conversación e invoca a agentes especialistas como herramientas mediante `Agent.as_tool()`. El administrador **sintetiza los resultados** devueltos por múltiples especialistas en una respuesta final consolidada.
- **Comportamiento clave:** El administrador siempre es dueño de la conversación.
- **Cuándo usar:** Se requiere que un solo agente redacte la respuesta final, combine salidas de múltiples especialistas o preserve un hilo conversacional único.
- **Sintaxis SDK:**
  ```python
  manager = Agent(
      name="Manager",
      instructions="Coordinate and synthesize answers.",
      tools=[specialist_a.as_tool(), specialist_b.as_tool()]
  )
  ```

---

### Familia 2: Code-Driven Orchestration

#### 3. Sequential Chaining (Encadenamiento Secuencial)
- **Patrón:** El código canaliza la salida de un agente como entrada del siguiente en un pipeline determinista (`Investigación` $\to$ `Esquema` $\to$ `Borrador` $\to$ `Revisión`).
- **Comportamiento clave:** Orden determinista; cada agente se ejecuta exactamente una vez.
- **Buenas prácticas:** Utilizar `result1.to_input_list()` en lugar de `result1.final_output` para transferir todo el historial de la conversación hacia el siguiente agente.
- **Sintaxis SDK:**
  ```python
  result1 = await Runner.run(agent1, user_input)
  result2 = await Runner.run(agent2, result1.to_input_list())
  ```

#### 4. Parallel Execution (Ejecución Concurrente)
- **Patrón:** Ejecuta múltiples agentes independientes en simultáneo mediante `asyncio.gather`. Los resultados se combinan al finalizar todas las ejecuciones.
- **Comportamiento clave:** Concurrencia real; significativamente más rápido que el modo secuencial cuando las subtareas son ortogonales.
- **Sintaxis SDK:**
  ```python
  import asyncio

  results = await asyncio.gather(
      Runner.run(agent_a, query),
      Runner.run(agent_b, query),
      Runner.run(agent_c, query)
  )
  ```

#### 5. Feedback Loops (Bucles de Retroalimentación Iterativos)
- **Patrón:** Un agente generador opera en bucle junto con un agente evaluador (LLM Judge). La retroalimentación del evaluador se retroalimenta al generador en cada iteración hasta que el evaluador aprueba la salida o se alcanza un número máximo de intentos.
- **Comportamiento clave:** Refinamiento iterativo guiado por retroalimentación explícita (no un reintento ciego).
- **Sintaxis SDK:**
  ```python
  approved = False
  feedback = ""
  iterations = 0
  max_iter = 3

  while not approved and iterations < max_iter:
      gen_result = await Runner.run(generator_agent, original_input + feedback)
      eval_result = await Runner.run(evaluator_agent, gen_result.final_output)
      approved = eval_result.final_output.approved
      feedback = eval_result.final_output.feedback
      iterations += 1
  ```
  > **Nota de implementación:** El agente evaluador requiere un `output_type` estructurado (p. ej., un modelo Pydantic con `approved: bool` y `feedback: str`).

---

## 3. B. Databricks MCP Tools with `databricks_openai.agents.McpServer`

En Databricks, la clase `McpServer` conecta los agentes con Unity Catalog a través del Model Context Protocol.

### Arquitectura en 4 Capas:

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   Agent Layer   │ <───> │ McpServer Class │ <───> │  MCP Protocol   │ <───> │  Unity Catalog  │
│  (OpenAI SDK)   │       │(databricks-ai)  │       │(Streamable HTTP)│       │(Functions & VS) │
└─────────────────┘       └─────────────────┘       └─────────────────┘       └─────────────────┘
  mcp_servers=[...]         tools/list, call          OAuth Token Refresh      Gobernanza y ACLs
```

1. **Agent Layer:** Recibe `mcp_servers=[server]`. En tiempo de ejecución ejecuta `tools/list` para descubrir herramientas disponibles y `tools/call` cuando el LLM decide ejecutarlas.
2. **McpServer Class:** Extiende `MCPServerStreamableHttp`. Agrega autenticación automática con Databricks OAuth (`DatabricksOAuthClientProvider`), construcción de endpoints y **trazado automático en MLflow (`@mlflow.trace(span_type=SpanType.TOOL)`)**.
   - Métodos de fábrica principales:
     - `McpServer.from_uc_function(catalog, schema, function_name)` $\to$ Endpoint `/api/2.0/mcp/functions/{cat}/{schema}/{func}`
     - `McpServer.from_vector_search(catalog, schema, index_name)` $\to$ Endpoint `/api/2.0/mcp/vector-search/{cat}/{schema}/{idx}`
3. **MCP Protocol Layer:** Maneja el transporte mediante HTTP Streamable. El ciclo de vida se gestiona con un contexto asíncrono (`async with McpServer(...) as server:`).
4. **Unity Catalog Backend:** Ejecuta las funciones SQL/Python y consultas de AI Search garantizando que solo se invoquen las herramientas para las que el usuario tiene permisos otorgados.

---

## 4. C. The `@function_tool` Decorator

Para prototipado rápido y herramientas utilitarias en memoria que no requieren registro en Unity Catalog:

```python
from agents import function_tool

@function_tool
def get_weather(city: str) -> str:
    """Get the current weather for a city.
    
    Args:
        city: The name of the city to query.
    """
    return f"The weather in {city} is sunny, 72F."
```
El decorador inspecciona los type hints y el docstring de la función para generar automáticamente el esquema JSON que se envía al modelo.

---

## 5. D. Conceptos de Sistemas Multi-Agente

1. **Supervisor Pattern:** El supervisor recibe la consulta global y utiliza `handoffs` para transferir la sesión al especialista apropiado según la descripción de sus instrucciones.
2. **Worker Specialization:** Cada agente posee un conjunto acotado de herramientas (1 a 2 herramientas clave). Mantener los conjuntos de herramientas pequeños evita fallos de selección por parte del LLM.
3. **MCP-Backed Workers:** Cada agente especialista se instancia con su propia conexión a `McpServer`, exponiendo únicamente las herramientas de Unity Catalog pertinentes a su rol.
4. **Distributed Tracing en Multi-Agente:**  
   Si se utiliza únicamente `mlflow.openai.autolog()`, cada agente genera trazas separadas e inconexas. La solución arquitectónica recomendada es **envolver todo el flujo en una función raíz con `@mlflow.trace(span_type="AGENT", name="supervisor_orchestration")`**, permitiendo que todas las llamadas secundarias de enrutamiento y herramientas aniden como un único árbol de spans jerárquico.

---

## 6. E. Otros Frameworks Soportados en Databricks

Aunque el curso se enfoca en OpenAI Agents SDK, Databricks soporta múltiples frameworks siempre que se empaqueten bajo la interfaz `ResponsesAgent` de MLflow:

| Framework | Características Principales | Integración en Databricks |
| :--- | :--- | :--- |
| **LangChain** | Cadenas componibles y toolkits (`AgentExecutor` + `create_tool_calling_agent`). | Paquete `databricks-langchain` (`ChatDatabricks`, `UCFunctionToolkit`). Trazado con `mlflow.langchain.autolog()`. |
| **LangGraph** | Grafos de estado dirigidos con persistencia y checkpointing para flujos cíclicos complejos. | `ChatDatabricks` con `create_react_agent`. Soporte de MCP mediante `DatabricksMultiServerMCPClient`. Trazado automático vía MLflow. |
| **DSPy** | Programación declarativa y compilación/optimización automática de prompts y pesos de modelo. | Paquete `databricks-dspy`. Trazado con `mlflow.dspy.autolog()`. |

---

## 7. F. MLflow Tracing y Observabilidad

### Comparativa: ML Tradicional vs. Agentes de IA

| Dimensión | Machine Learning Tradicional | Agentes de IA Generativa |
| :--- | :--- | :--- |
| **Forma de ejecución** | Invocación única por lote/fila | Flujo multi-paso, a menudo en bucles |
| **Visibilidad predeterminada** | Entrada y salida final | Entrada y respuesta final (oculta pasos intermedios) |
| **Unidad de observación** | La llamada al endpoint | Un **span** por cada paso intermedio |
| **Necesidad de depuración** | Features y latencia global | Entradas/salidas por paso, tokens consumidos, argumentos de herramientas |
| **Captura en MLflow** | Registro de solicitud / respuesta | **Trace completo** (árbol jerárquico de spans) |

### Estructura Jerárquica de Spans (OpenTelemetry Compatible):
- **Root Span:** Representa la solicitud completa del usuario (`span_type="AGENT"`).
- **Child Spans:** Operaciones secundarias anidadas categorizadas por tipos:
  - `CHAT_MODEL`: Llamadas al modelo de lenguaje (tokens de entrada/salida, temperatura, modelo).
  - `TOOL`: Invocaciones de funciones de Python o MCP con sus argumentos y payloads de retorno.
  - `RETRIEVER`: Búsquedas en índices vectoriales de AI Search con puntuaciones de similitud.
- Todos los atributos se adhieren a la especificación estándar de **OpenTelemetry**.
