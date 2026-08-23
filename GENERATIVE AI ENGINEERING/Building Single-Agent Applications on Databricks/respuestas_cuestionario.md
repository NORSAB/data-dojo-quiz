# Respuestas del cuestionario

## Datos del examen

- **Examen:** Quiz - Building Single-Agent Applications on Databricks
- **Numero de preguntas:** 20
- **Limite de tiempo:** No
- **Intentos disponibles:** Ilimitados
- **Puntuacion minima para aprobar:** 80
- **Puntuacion maxima:** 100
- **Se puede pausar:** No
- **Estado en la plataforma:** Completado y aprobado
- **Preguntas documentadas:** 20 de 20
- **Respuestas correctas:** 19 de 20
- **Puntuacion obtenida:** 95 de 100
- **Resultado:** Aprobado

## Registro de preguntas

## Pregunta 1 de 20

**Pregunta:** What is the primary benefit of using the ResponsesAgent interface over traditional agent interfaces?

**Opciones:**

- [x] It provides compatibility with OpenAI Responses schema while adding Databricks-specific enhancements
- [ ] It requires less memory to operate
- [ ] It's faster than other interfaces
- [ ] It only works with SQL functions

**Respuesta correcta:** It provides compatibility with OpenAI Responses schema while adding Databricks-specific enhancements

**Explicacion:** `ResponsesAgent` mantiene compatibilidad con el esquema OpenAI Responses y agrega capacidades especificas de Databricks para desarrollar, registrar, desplegar y observar agentes preparados para produccion.

## Pregunta 2 de 20

**Pregunta:** In the MLflow tracing demo, what decorator is used to add custom tracing to Python functions?

**Opciones:**

- [x] `@mlflow.trace`
- [ ] `@mlflow.log`
- [ ] `@mlflow.track`
- [ ] `@mlflow.monitor`

**Respuesta correcta:** `@mlflow.trace`

**Explicacion:** El decorador `@mlflow.trace` convierte una funcion Python en un span personalizado y registra automaticamente elementos como entradas, salidas, duracion, excepciones y relaciones padre-hijo.

## Pregunta 3 de 20

**Pregunta:** Which execution mode is required for Python UC functions when using serverless compute?

**Opciones:**

- [x] Serverless mode
- [ ] Both serverless and local modes are supported equally
- [ ] Local mode only
- [ ] Distributed mode

**Respuesta correcta:** Serverless mode

**Explicacion:** Cuando una funcion Python de Unity Catalog se ejecuta mediante serverless compute, debe configurarse en modo `serverless`; el modo local se utiliza como alternativa de desarrollo fuera de esa ejecucion administrada.

## Pregunta 4 de 20

**Pregunta:** What are the three fundamental principles that AI agents operate on?

**Opciones:**

- [ ] Planning, Execution, Monitoring
- [x] Perception, Decision-Making, Action
- [ ] Data, Model, Interface
- [ ] Input, Processing, Output

**Respuesta correcta:** Perception, Decision-Making, Action

**Explicacion:** El agente primero percibe y comprende su contexto, despues decide que pasos debe realizar segun el objetivo y finalmente ejecuta acciones concretas mediante sus capacidades y herramientas.

## Pregunta 5 de 20

**Pregunta:** Which method is used to test UC Python functions programmatically in the demo?

**Opciones:**

- [x] `client.execute_function()`
- [ ] `client.test_function()`
- [ ] `client.run_function()`
- [ ] `client.call_function()`

**Respuesta correcta:** `client.execute_function()`

**Explicacion:** El cliente de funciones de Unity Catalog utiliza `execute_function()` para invocar programaticamente una funcion registrada y comprobar su resultado con los argumentos proporcionados.

## Pregunta 6 de 20

**Pregunta:** In the Python function registration demo, what is the correct way to import libraries within a UC Python function?

**Opciones:**

- [x] Import them inside the function body
- [ ] Import them outside the function definition
- [ ] Libraries cannot be imported in UC Python functions
- [ ] Import them at the top of the notebook

**Respuesta correcta:** Import them inside the function body

**Explicacion:** Los imports deben formar parte del cuerpo de la funcion para que la definicion registrada en Unity Catalog sea autocontenida y pueda resolver sus bibliotecas durante la ejecucion, sin depender del estado del notebook.

## Pregunta 7 de 20

**Pregunta:** When creating tagged traces in MLflow, how do you update tags for an active trace?

**Opciones:**

- [ ] `mlflow.add_tags(tags)`
- [ ] `mlflow.trace_tags(tags)`
- [ ] `mlflow.set_tags(tags)`
- [x] `mlflow.update_current_trace(tags)`

**Respuesta correcta:** `mlflow.update_current_trace(tags)`

**Explicacion:** `mlflow.update_current_trace()` actualiza el trace activo y permite asociarle tags durante su ciclo de vida. `mlflow.set_tags()` se utiliza para tags del run, no para actualizar el trace actual.

## Pregunta 8 de 20

**Pregunta:** In the context of Unity Catalog Functions, what does "DETERMINISTIC" mean when creating a SQL function?

**Opciones:**

- [ ] The function can only be called once
- [ ] The function will always execute in the same order
- [x] The function always returns the same result for the same inputs
- [ ] The function requires admin privileges to execute

**Respuesta correcta:** The function always returns the same result for the same inputs

**Explicacion:** Una funcion `DETERMINISTIC` produce siempre el mismo resultado cuando recibe los mismos valores de entrada; la propiedad no se refiere al orden de ejecucion ni a permisos administrativos.

## Pregunta 9 de 20

**Pregunta:** Which of the following is NOT one of the five types of AI agents by complexity mentioned in the lecture?

**Opciones:**

- [ ] Simple Reflex Agents
- [ ] Model-Based Reflex Agents
- [x] Distributed Learning Agents
- [ ] Utility-Based Agents

**Respuesta correcta:** Distributed Learning Agents

**Explicacion:** La leccion presenta Simple Reflex, Model-Based Reflex, Goal-Based, Utility-Based y Learning Agents. `Distributed Learning Agents` no forma parte de esa clasificacion de cinco tipos.

## Pregunta 10 de 20

**Pregunta:** What makes Unity Catalog Functions as Agent Tools different from traditional functions?

**Opciones:**

- [x] They are designed for dynamic discovery and use by AI agents with rich metadata
- [ ] They require special hardware to run
- [ ] They only work with SQL databases
- [ ] They execute faster than regular functions

**Respuesta correcta:** They are designed for dynamic discovery and use by AI agents with rich metadata

**Explicacion:** Las funciones empleadas como Agent Tools incluyen metadata, comentarios de parametros y contexto de negocio para que el agente pueda descubrirlas, elegirlas e invocarlas dinamicamente desde una solicitud en lenguaje natural.

## Pregunta 11 de 20

**Pregunta:** Which Agent Bricks type is specifically designed for extracting structured data from unstructured sources?

**Opciones:**

- [x] Information Extraction (IE)
- [ ] Custom LLM (CLLM)
- [ ] Knowledge Assistant (KA)
- [ ] Multi-Agent Supervisor (MAS)

**Respuesta correcta:** Information Extraction (IE)

**Explicacion:** Information Extraction automatiza la extraccion de informacion estructurada desde fuentes no estructuradas como documentos, archivos PDF, correos electronicos e imagenes.

## Pregunta 12 de 20

**Pregunta:** Which of the following is NOT a supported agent authoring framework mentioned in the lecture?

**Opciones:**

- [ ] DSPy
- [ ] LangChain
- [x] TensorFlow Agents
- [ ] OpenAI

**Respuesta correcta:** TensorFlow Agents

**Explicacion:** La leccion menciona integraciones para DSPy, LangChain/LangGraph y patrones de OpenAI. TensorFlow Agents no aparece entre los frameworks de creacion de agentes presentados.

## Pregunta 13 de 20

**Pregunta:** When enabling MLflow tracing for LangChain agents, which command is used?

**Opciones:**

- [ ] `mlflow.trace.enable()`
- [ ] `mlflow.start_tracing()`
- [ ] `mlflow.enable_tracing()`
- [x] `mlflow.langchain.autolog()`

**Respuesta correcta:** `mlflow.langchain.autolog()`

**Explicacion:** `mlflow.langchain.autolog()` habilita el autologging de LangChain y captura automaticamente las operaciones del agente como traces y spans de MLflow.

## Pregunta 14 de 20

**Pregunta:** Which registry URI must be set to register models to Unity Catalog?

**Opciones:**

- [ ] `unity-catalog`
- [ ] `databricks`
- [ ] `uc-registry`
- [x] `databricks-uc`

**Respuesta correcta:** `databricks-uc`

**Explicacion:** Se utiliza `mlflow.set_registry_uri("databricks-uc")` para seleccionar el Model Registry de Unity Catalog antes de registrar el agente o modelo.

## Pregunta 15 de 20

**Pregunta:** In the LangChain demo, what class is used to wrap Unity Catalog functions as LangChain tools?

**Opciones:**

- [ ] `DatabricksToolkit`
- [ ] `LangChainUCBridge`
- [x] `UCFunctionToolkit`
- [ ] `UCToolWrapper`

**Respuesta correcta:** `UCFunctionToolkit`

**Explicacion:** `UCFunctionToolkit` adapta las funciones registradas en Unity Catalog para que puedan utilizarse como herramientas compatibles con un agente de LangChain.

## Pregunta 16 de 20

**Pregunta:** What is the main purpose of MLflow tracing in agent development?

**Opciones:**

- [ ] To reduce the cost of running agents
- [x] To provide step-by-step visibility into agent reasoning, tool usage, and performance metrics
- [ ] To automatically fix bugs in agent code
- [ ] To make agents run faster

**Respuesta correcta:** To provide step-by-step visibility into agent reasoning, tool usage, and performance metrics

**Explicacion:** MLflow Tracing registra el flujo del agente como traces y spans para inspeccionar razonamiento, llamadas al modelo, uso de herramientas, entradas, salidas, errores, tokens y latencia de cada paso.

## Pregunta 17 de 20

**Pregunta:** In MLflow tracing, what is a "span"?

**Opciones:**

- [x] A single operation that records when it started and ended, along with metadata, inputs, and outputs
- [ ] The total time an agent takes to respond
- [ ] The memory used by an agent
- [ ] The number of tokens processed

**Respuesta correcta:** A single operation that records when it started and ended, along with metadata, inputs, and outputs

**Explicacion:** Un span representa una unidad de trabajo dentro del trace y registra su inicio, final, duracion, entradas, salidas, metadata, atributos y posibles eventos o errores.

## Pregunta 18 de 20

**Pregunta:** What is the purpose of the resources parameter when logging an agent model to MLflow?

**Opciones:**

- [ ] To set the model's execution timeout
- [ ] To configure the model's scaling parameters
- [x] To define automatic authentication passthrough for specified resources
- [ ] To specify memory requirements

**Respuesta correcta:** To define automatic authentication passthrough for specified resources

**Explicacion:** El parametro `resources` declara los recursos de Databricks que necesita el agente para que MLflow y el despliegue configuren el acceso y el passthrough de autenticacion correspondientes.

## Pregunta 19 de 20

**Pregunta:** When creating UC SQL functions for agent use, which parameter is essential for providing context to the LLM about what the function does?

**Opciones:**

- [ ] `DETERMINISTIC`
- [ ] `RETURNS`
- [ ] `LANGUAGE SQL`
- [x] `COMMENT`

**Respuesta correcta:** `COMMENT`

**Explicacion:** `COMMENT` documenta el proposito y comportamiento de la funcion; junto con los comentarios de parametros, proporciona al LLM el contexto necesario para descubrirla y utilizarla correctamente.

## Pregunta 20 de 20

**Pregunta:** In the demo, what file format is used to store agent configuration separately from the main notebook?

**Opciones:**

- [ ] `.toml`
- [ ] `.yaml`
- [x] `.json`
- [ ] `.xml`

**Respuesta correcta:** `.json`

**Explicacion:** En la demostracion, la configuracion del agente se guarda en un archivo JSON separado del notebook principal. La respuesta `.yaml` fue corregida con base en la retroalimentacion oficial del examen.

**Resultado oficial:** La respuesta presentada `.yaml` fue incorrecta. Databricks Academy indica `.json` como respuesta correcta.
