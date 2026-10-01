# Examen Oficial: Deploying and Monitoring Agent Applications on Databricks (20 Preguntas Literales)

> **Curso Oficial:** Deploying and Monitoring Agent Applications on Databricks (Course ID: 5855, LO ID: 63985)
> **Plan de Aprendizaje:** Generative AI Engineering Pathway (LP 315)
> **Total de Preguntas:** 20 de 20 (100% de cobertura oficial)
> **Formato:** Bilingüe (Original English + Traducción Oficial Español), 4 opciones literales completas, respuesta correcta verificada y justificación técnica oficial.

---

## Question 1 of 20 / Pregunta 1 de 20

### English
**Question:** A team just created a new policy_compliance scorer. They have two separate goals. First, they want this new scorer applied to traces that were logged last week, before the scorer existed. Second, they want all new trace data streamed into a Unity Catalog Delta table so analysts can build SQL dashboards over them for long-term analysis.

Which two capabilities address these goals, respectively?

**Options:**
- [ ] Trace archival for both, since archived tables are automatically scored
- [x] Metric backfill (backfill_scorers) for scoring last week's traces, and trace archival (enable_databricks_trace_archival) for streaming traces to a Delta table
- [ ] Metric backfill for both goals, since it handles history and streaming
- [ ] Trace archival for the historical scoring, and metric backfill for the Delta streaming

**Correct Answer:** Metric backfill (backfill_scorers) for scoring last week's traces, and trace archival (enable_databricks_trace_archival) for streaming traces to a Delta table

**Justification:** Metric backfill scores existing historical traces; trace archival streams trace data into Delta tables for durable SQL analysis.

### Español
**Pregunta:** Un equipo acaba de crear un nuevo scorer policy_compliance. Tiene dos objetivos separados. Primero, quiere que este nuevo scorer se aplique a las trazas que se registraron la semana pasada, antes de que existiera el scorer. Segundo, quiere que todos los datos de trazas nuevos se transmitan a una tabla Delta de Unity Catalog para que los analistas puedan crear dashboards SQL sobre ellos para análisis a largo plazo.

¿Qué dos capacidades abordan estos objetivos, respectivamente?

**Opciones:**
- [ ] Archivado de trazas para ambos, ya que las tablas archivadas se califican automáticamente
- [x] Relleno de métricas (backfill_scorers) para calificar las trazas de la semana pasada, y archivado de trazas (enable_databricks_trace_archival) para transmitir las trazas a una tabla Delta
- [ ] Relleno de métricas para ambos objetivos, ya que maneja el historial y la transmisión
- [ ] Archivado de trazas para la calificación histórica, y relleno de métricas para la transmisión a Delta

**Respuesta Correcta:** Relleno de métricas (backfill_scorers) para calificar las trazas de la semana pasada, y archivado de trazas (enable_databricks_trace_archival) para transmitir las trazas a una tabla Delta

**Justificación:** Metric backfill puntúa trazas históricas; trace archival transmite los datos de trazas a tablas Delta.

---

## Question 2 of 20 / Pregunta 2 de 20

### English
**Question:** A governance lead grants a data analyst ALL_PRIVILEGES on the schema and tables holding UC-backed agent traces, expecting that to be more than enough for the analyst to read and query them. The analyst still cannot access the trace tables.

What is the most likely explanation?

**Options:**
- [ ] The analyst also needs OWNER on the experiment, which overrides table grants
- [ ] ALL_PRIVILEGES cannot be granted on Delta tables, only on catalogs
- [x] ALL_PRIVILEGES is not sufficient. MODIFY and SELECT must be granted explicitly, along with USE_CATALOG and USE_SCHEMA
- [ ] Trace tables can only be read by the service principal that created them

**Correct Answer:** ALL_PRIVILEGES is not sufficient. MODIFY and SELECT must be granted explicitly, along with USE_CATALOG and USE_SCHEMA

**Justification:** UC trace tables require explicit MODIFY and SELECT together with USE_CATALOG and USE_SCHEMA; ALL_PRIVILEGES is insufficient.

### Español
**Pregunta:** Un responsable de gobierno concede a un analista de datos ALL_PRIVILEGES sobre el esquema y las tablas que contienen trazas de agentes respaldadas por UC, esperando que eso sea más que suficiente para que el analista las lea y consulte. El analista aún no puede acceder a las tablas de trazas.

¿Cuál es la explicación más probable?

**Opciones:**
- [ ] El analista también necesita OWNER sobre el experimento, lo que anula las concesiones de tablas
- [ ] ALL_PRIVILEGES no se puede conceder sobre tablas Delta, solo sobre catálogos
- [x] ALL_PRIVILEGES no es suficiente. MODIFY y SELECT deben concederse explícitamente, junto con USE_CATALOG y USE_SCHEMA
- [ ] Las tablas de trazas solo pueden ser leídas por el principal de servicio que las creó

**Respuesta Correcta:** ALL_PRIVILEGES no es suficiente. MODIFY y SELECT deben concederse explícitamente, junto con USE_CATALOG y USE_SCHEMA

**Justificación:** Las tablas de trazas UC requieren MODIFY y SELECT explícitos, además de USE_CATALOG y USE_SCHEMA.

---

## Question 3 of 20 / Pregunta 3 de 20

### English
**Question:** An engineer wants to pause a running safety scorer during a maintenance window. They run:

safety = safety.start(sampling_config=ScorerSamplingConfig(sample_rate=1.0))

...

safety.stop()  # pause during maintenance

Later they confirm the scorer is still evaluating traces. What went wrong?

**Options:**
- [ ] The sampling rate must be set to 0.0 in the same call as stop()
- [x] Lifecycle methods return a new instance, so the result of stop() must be reassigned: safety = safety.stop()
- [ ] stop() only works on judges created in the UI, not in code
- [ ] You cannot stop a scorer, you must delete and recreate it

**Correct Answer:** Lifecycle methods return a new instance, so the result of stop() must be reassigned: safety = safety.stop()

**Justification:** Lifecycle operations return an updated scorer object. Reassign the result of `stop()`.

### Español
**Pregunta:** Un ingeniero quiere pausar un scorer de seguridad en ejecución durante una ventana de mantenimiento. Ejecuta:

safety = safety.start(sampling_config=ScorerSamplingConfig(sample_rate=1.0))

...

safety.stop()  # pausar durante el mantenimiento

Más tarde confirma que el scorer sigue evaluando trazas. ¿Qué salió mal?

**Opciones:**
- [ ] La tasa de muestreo debe establecerse en 0.0 en la misma llamada que stop()
- [x] Los métodos de ciclo de vida devuelven una nueva instancia, por lo que el resultado de stop() debe reasignarse: safety = safety.stop()
- [ ] stop() solo funciona en jueces creados en la UI, no en código
- [ ] No se puede detener un scorer; se debe eliminar y volver a crear

**Respuesta Correcta:** Los métodos de ciclo de vida devuelven una nueva instancia, por lo que el resultado de stop() debe reasignarse: safety = safety.stop()

**Justificación:** Las operaciones de ciclo de vida devuelven un objeto actualizado; hay que reasignar el resultado de `stop()`.

---

## Question 4 of 20 / Pregunta 4 de 20

### English
**Question:** A single-turn safety scorer reports that a travel agent's individual responses are all fine, yet support tickets say users are frustrated: people keep rephrasing the same question several times in one chat before giving up. The team wants an automated signal that captures this session-level breakdown.

Which approach will surface the problem?

**Options:**
- [ ] Add a custom function scorer that counts characters in each individual response
- [ ] Lower the single-turn safety scorer's sample rate so it inspects fewer traces
- [x] Add a multi-turn judge such as UserFrustration, which evaluates the whole conversation grouped by session
- [ ] Switch the single-turn safety judge to a stricter model override

**Correct Answer:** Add a multi-turn judge such as UserFrustration, which evaluates the whole conversation grouped by session

**Justification:** User frustration is a multi-turn concern: the judge evaluates the conversation grouped by session.

### Español
**Pregunta:** Un scorer de seguridad de un solo turno informa que las respuestas individuales de un agente de viajes están bien, pero los tickets de soporte dicen que los usuarios están frustrados: las personas siguen reformulando la misma pregunta varias veces en un mismo chat antes de rendirse. El equipo quiere una señal automatizada que capture este fallo a nivel de sesión.

¿Qué enfoque hará visible el problema?

**Opciones:**
- [ ] Agregar un scorer de función personalizada que cuente caracteres en cada respuesta individual
- [ ] Reducir la tasa de muestreo del scorer de seguridad de un solo turno para que inspeccione menos trazas
- [x] Agregar un juez multiturno como UserFrustration, que evalúa toda la conversación agrupada por sesión
- [ ] Cambiar el juez de seguridad de un solo turno a una anulación de modelo más estricta

**Respuesta Correcta:** Agregar un juez multiturno como UserFrustration, que evalúa toda la conversación agrupada por sesión

**Justificación:** La frustración es un problema multi-turn; el juez evalúa la conversación agrupada por sesión.

---

## Question 5 of 20 / Pregunta 5 de 20

### English
**Question:** An engineer wants her agent to read its serving endpoint and MLflow experiment from configuration rather than hardcoding workspace-specific values, so the same code runs unchanged in dev and prod. Her agent code contains:

import os

serving_endpoint = os.environ["SERVING_ENDPOINT"]

experiment_name = os.environ["MLFLOW_EXPERIMENT_NAME"]

Which statement correctly describes how these values reach the running app?

**Options:**
- [ ] They are hardcoded in pyproject.toml and imported at build time
- [x] They are injected as environment variables, declared in databricks.yml and surfaced through the app.yaml env: section
- [ ] They are read from a .env file committed alongside agent.py in the bundle
- [ ] They are passed as command-line arguments in the databricks apps deploy call

**Correct Answer:** They are injected as environment variables, declared in databricks.yml and surfaced through the app.yaml env: section

**Justification:** Databricks Apps receives configured environment variables through the bundle and app environment configuration.

### Español
**Pregunta:** Una ingeniera quiere que su agente lea su endpoint de serving y su experimento de MLflow desde la configuración en lugar de codificar valores específicos del espacio de trabajo, para que el mismo código se ejecute sin cambios en desarrollo y producción. El código de su agente contiene:

import os

serving_endpoint = os.environ["SERVING_ENDPOINT"]

experiment_name = os.environ["MLFLOW_EXPERIMENT_NAME"]

¿Qué afirmación describe correctamente cómo llegan estos valores a la aplicación en ejecución?

**Opciones:**
- [ ] Se codifican en pyproject.toml y se importan en tiempo de compilación
- [x] Se inyectan como variables de entorno, se declaran en databricks.yml y se exponen mediante la sección env: de app.yaml
- [ ] Se leen desde un archivo .env confirmado junto a agent.py en el bundle
- [ ] Se pasan como argumentos de línea de comandos en la llamada databricks apps deploy

**Respuesta Correcta:** Se inyectan como variables de entorno, se declaran en databricks.yml y se exponen mediante la sección env: de app.yaml

**Justificación:** Las Apps reciben variables de entorno configuradas mediante el bundle y la configuración de la aplicación.

---

## Question 6 of 20 / Pregunta 6 de 20

### English
**Question:** An on-call engineer needs to quickly count failed requests and unusually slow requests for a deployed agent over the recent past, using the trace search API rather than clicking through the UI.

error_traces = mlflow.search_traces(

    locations=[experiment_id],

    filter_string="___A___",

    max_results=100,

)

slow_traces = mlflow.search_traces(

    locations=[experiment_id],

    filter_string="___B___",

    max_results=100,

)

Which pair of filter strings correctly fills A and B?

**Options:**
- [ ] A: trace.state = failed B: trace.latency = slow
- [ ] A: WHERE status = 'ERROR' B: WHERE time > 5000
- [ ] A: status == ERROR B: duration > 5s
- [x] A: trace.status = 'ERROR'   B: trace.execution_time_ms > 5000

**Correct Answer:** A: trace.status = 'ERROR'   B: trace.execution_time_ms > 5000

**Justification:** Trace search uses trace fields and valid filter expressions; status and execution time identify failed and slow traces.

### Español
**Pregunta:** Un ingeniero de guardia necesita contar rápidamente solicitudes fallidas y solicitudes inusualmente lentas de un agente desplegado durante el pasado reciente, usando la API de búsqueda de trazas en lugar de hacer clic en la UI.

error_traces = mlflow.search_traces(

    locations=[experiment_id],

    filter_string="___A___",

    max_results=100,

)

slow_traces = mlflow.search_traces(

    locations=[experiment_id],

    filter_string="___B___",

    max_results=100,

)

¿Qué par de cadenas de filtro completa correctamente A y B?

**Opciones:**
- [ ] A: trace.state = failed B: trace.latency = slow
- [ ] A: WHERE status = 'ERROR' B: WHERE time > 5000
- [ ] A: status == ERROR B: duration > 5s
- [x] A: trace.status = 'ERROR'   B: trace.execution_time_ms > 5000

**Respuesta Correcta:** A: trace.status = 'ERROR'   B: trace.execution_time_ms > 5000

**Justificación:** La búsqueda usa campos de trazas y expresiones válidas; estado y tiempo de ejecución identifican fallas y lentitud.

---

## Question 7 of 20 / Pregunta 7 de 20

### English
**Question:** A data team at a logistics company, FleetLink, has just finished prototyping a customer-support agent in a notebook. Their lead reminds them that a production agent must do more than answer questions. It has to run on serving infrastructure, produce records of its behavior, have its quality measured, and be watched for regressions over time. On Databricks, these map to the four stages of the agent lifecycle.

Which sequence correctly lists the four stages of the agent lifecycle on Databricks?

**Options:**
- [ ] Monitoring, Evaluation, Deployment, Observability
- [ ] Observability, Deployment, Monitoring, Evaluation
- [ ] Evaluation, Deployment, Monitoring, Observability
- [x] Deployment, Observability, Evaluation, Monitoring

**Correct Answer:** Deployment, Observability, Evaluation, Monitoring

**Justification:** After deployment, agents need observability, evaluation, and ongoing monitoring.

### Español
**Pregunta:** Un equipo de datos de una empresa de logística, FleetLink, acaba de terminar de crear el prototipo de un agente de atención al cliente en un notebook. Su líder les recuerda que un agente de producción debe hacer más que responder preguntas. Debe ejecutarse sobre infraestructura de serving, producir registros de su comportamiento, tener medida su calidad y ser vigilado para detectar regresiones a lo largo del tiempo. En Databricks, estos se corresponden con las cuatro etapas del ciclo de vida del agente.

¿Qué secuencia enumera correctamente las cuatro etapas del ciclo de vida del agente en Databricks?

**Opciones:**
- [ ] Monitoreo, Evaluación, Despliegue, Observabilidad
- [ ] Observabilidad, Despliegue, Monitoreo, Evaluación
- [ ] Evaluación, Despliegue, Monitoreo, Observabilidad
- [x] Despliegue, Observabilidad, Evaluación, Monitoreo

**Respuesta Correcta:** Despliegue, Observabilidad, Evaluación, Monitoreo

**Justificación:** Después del despliegue, los agentes requieren observabilidad, evaluación y monitoreo continuo.

---

## Question 8 of 20 / Pregunta 8 de 20

### English
**Question:** A developer at a healthcare startup is deploying an intake agent as a Databricks App using a Declarative Automation Bundle. She has already run one CLI command that created and updated the app resource and its configuration in the workspace, but when she opens the app URL, her latest source code changes are not live yet.

What must she do to push the running application's source code?

**Options:**
- [ ] Register the agent as a model in Unity Catalog before the code goes live
- [x] Run databricks apps deploy <app-name> to deploy the application source code
- [ ] Re-run databricks bundle deploy, which also pushes source code automatically
- [ ] Restart the serving endpoint the app calls for inference

**Correct Answer:** Run databricks apps deploy <app-name> to deploy the application source code

**Justification:** Bundle deployment configures resources; `databricks apps deploy` pushes the running app source.

### Español
**Pregunta:** Una desarrolladora de una startup de atención médica está desplegando un agente de admisión como una Databricks App mediante un Declarative Automation Bundle. Ya ejecutó un comando de CLI que creó y actualizó el recurso de la aplicación y su configuración en el espacio de trabajo, pero cuando abre la URL de la aplicación, sus últimos cambios al código fuente aún no están activos.

¿Qué debe hacer para enviar el código fuente de la aplicación en ejecución?

**Opciones:**
- [ ] Registrar el agente como un modelo en Unity Catalog antes de que el código entre en producción
- [x] Ejecutar databricks apps deploy <app-name> para desplegar el código fuente de la aplicación
- [ ] Volver a ejecutar databricks bundle deploy, que también envía automáticamente el código fuente
- [ ] Reiniciar el endpoint de serving que la aplicación llama para inferencia

**Respuesta Correcta:** Ejecutar databricks apps deploy <app-name> para desplegar el código fuente de la aplicación

**Justificación:** El bundle configura recursos; `databricks apps deploy` publica el código de la aplicación en ejecución.

---

## Question 9 of 20 / Pregunta 9 de 20

### English
**Question:** A developer registers a custom function scorer for production monitoring that counts how many times a keyword appears, but the monitoring job fails to run it remotely:

from mlflow.genai.scorers import scorer

import re  # module-level import

@scorer

def keyword_hits(outputs):

    text = str(outputs.get("response", ""))

    return len(re.findall(r"refund", text))

What is the problem, and how should it be fixed?

**Options:**
- [x] The import must move inside the function body, because the scorer is serialized for remote execution and must be fully self-contained
- [ ] re is not allowed in scorers, only string methods can be used
- [ ] The scorer must be a subclass of Scorer to run in production
- [ ] @scorer cannot return integers, so wrap the count in a string

**Correct Answer:** The import must move inside the function body, because the scorer is serialized for remote execution and must be fully self-contained

**Justification:** Production scorers are serialized for remote execution; put external imports inside the function.

### Español
**Pregunta:** Un desarrollador registra un scorer de función personalizada para monitoreo de producción que cuenta cuántas veces aparece una palabra clave, pero el trabajo de monitoreo no logra ejecutarlo remotamente:

from mlflow.genai.scorers import scorer

import re  # importación a nivel de módulo

@scorer

def keyword_hits(outputs):

    text = str(outputs.get("response", ""))

    return len(re.findall(r"refund", text))

¿Cuál es el problema y cómo debe corregirse?

**Opciones:**
- [x] La importación debe moverse dentro del cuerpo de la función, porque el scorer se serializa para ejecución remota y debe ser completamente autocontenido
- [ ] re no está permitido en los scorers; solo se pueden usar métodos de cadenas
- [ ] El scorer debe ser una subclase de Scorer para ejecutarse en producción
- [ ] @scorer no puede devolver enteros, así que se debe envolver el conteo en una cadena

**Respuesta Correcta:** La importación debe moverse dentro del cuerpo de la función, porque el scorer se serializa para ejecución remota y debe ser completamente autocontenido

**Justificación:** Los scorers de producción se serializan para ejecución remota; los imports externos van dentro de la función.

---

## Question 10 of 20 / Pregunta 10 de 20

### English
**Question:** To debug production issues by user and release, an engineer attaches context to the active span:

@mlflow.trace(span_type="CHAIN")

def handle_turn(user_query, user_id, session_id):

    span = mlflow.get_current_active_span()

    span.set_attributes({

        "user_id": user_id,

        "session_id": session_id,

        "app_version": "1.2.0",

    })

    ...

What is the primary production value of attaching these span attributes?

**Options:**
- [ ] They replace the need to log traces to an MLflow Experiment
- [ ] They reduce the agent's inference latency by caching responses per user
- [x] They let engineers later filter and group traces by user, session, and app version when debugging
- [ ] They automatically enable safety scorers on every trace

**Correct Answer:** They let engineers later filter and group traces by user, session, and app version when debugging

**Justification:** Span attributes make traces searchable and groupable for release and user-level debugging.

### Español
**Pregunta:** Para depurar problemas de producción por usuario y versión, un ingeniero adjunta contexto al span activo:

@mlflow.trace(span_type="CHAIN")

def handle_turn(user_query, user_id, session_id):

    span = mlflow.get_current_active_span()

    span.set_attributes({

        "user_id": user_id,

        "session_id": session_id,

        "app_version": "1.2.0",

    })

    ...

¿Cuál es el valor principal en producción de adjuntar estos atributos de span?

**Opciones:**
- [ ] Reemplazan la necesidad de registrar trazas en un experimento de MLflow
- [ ] Reducen la latencia de inferencia del agente almacenando respuestas en caché por usuario
- [x] Permiten a los ingenieros filtrar y agrupar posteriormente las trazas por usuario, sesión y versión de la aplicación al depurar
- [ ] Habilitan automáticamente scorers de seguridad en cada traza

**Respuesta Correcta:** Permiten a los ingenieros filtrar y agrupar posteriormente las trazas por usuario, sesión y versión de la aplicación al depurar

**Justificación:** Los atributos vuelven las trazas buscables y agrupables para depurar por usuario, sesión y versión.

---

## Question 11 of 20 / Pregunta 11 de 20

### English
**Question:** A deployed support agent connects to a managed MCP server at startup. A week later, a platform engineer registers a new Unity Catalog function on that same server to handle refund lookups. The agent team is surprised to find the agent can begin using the new refund tool without any redeployment of the app.

Which MCP characteristic best explains this behavior?

**Options:**
- [ ] The agent caches all possible tools at build time and unlocks them on a schedule
- [x] Tools are discovered at runtime via tools/list rather than hardcoded into the agent
- [ ] New tools require the app's service principal to be recreated before use
- [ ] The MCP client rewrites the agent's source code when a new tool appears

**Correct Answer:** Tools are discovered at runtime via tools/list rather than hardcoded into the agent

**Justification:** MCP clients discover the server's current tools at runtime through the tools/list protocol.

### Español
**Pregunta:** Un agente de soporte desplegado se conecta a un servidor MCP administrado al iniciarse. Una semana después, un ingeniero de plataforma registra una nueva función de Unity Catalog en ese mismo servidor para manejar consultas de reembolsos. El equipo del agente se sorprende al descubrir que el agente puede empezar a usar la nueva herramienta de reembolso sin volver a desplegar la aplicación.

¿Qué característica de MCP explica mejor este comportamiento?

**Opciones:**
- [ ] El agente almacena en caché todas las herramientas posibles en tiempo de compilación y las desbloquea según un calendario
- [x] Las herramientas se descubren en tiempo de ejecución mediante tools/list en lugar de estar codificadas en el agente
- [ ] Las nuevas herramientas requieren que el principal de servicio de la aplicación se vuelva a crear antes de usarse
- [ ] El cliente MCP reescribe el código fuente del agente cuando aparece una nueva herramienta

**Respuesta Correcta:** Las herramientas se descubren en tiempo de ejecución mediante tools/list en lugar de estar codificadas en el agente

**Justificación:** Los clientes MCP descubren las herramientas actuales del servidor en ejecución mediante tools/list.

---

## Question 12 of 20 / Pregunta 12 de 20

### English
**Question:** A team evaluating a medical-coding agent has a curated set of reference answers (ground truth) for a batch of questions and wants a built-in judge that measures whether the agent's response matches the known-correct answer. A second need is to flag any unsafe response, but they have no reference answers for that dimension.

Which built-in judges fit these two needs, respectively?

**Options:**
- [ ] Safety for the ground-truth comparison, and Correctness for the reference-free check
- [x] Correctness for the ground-truth comparison, and Safety for the reference-free unsafe-content check
- [ ] RelevanceToQuery for both, since it works with and without ground truth
- [ ] RetrievalSufficiency for the ground-truth comparison, and Guidelines for safety

**Correct Answer:** Correctness for the ground-truth comparison, and Safety for the reference-free unsafe-content check

**Justification:** Correctness compares against ground truth; Safety evaluates unsafe content without a reference answer.

### Español
**Pregunta:** Un equipo que evalúa un agente de codificación médica tiene un conjunto curado de respuestas de referencia (verdad de base) para un lote de preguntas y quiere un juez integrado que mida si la respuesta del agente coincide con la respuesta conocida como correcta. Una segunda necesidad es señalar cualquier respuesta insegura, pero no tienen respuestas de referencia para esa dimensión.

¿Qué jueces integrados se ajustan a estas dos necesidades, respectivamente?

**Opciones:**
- [ ] Safety para la comparación con verdad de base, y Correctness para la comprobación sin referencia
- [x] Correctness para la comparación con verdad de base, y Safety para la comprobación de contenido inseguro sin referencia
- [ ] RelevanceToQuery para ambos, ya que funciona con y sin verdad de base
- [ ] RetrievalSufficiency para la comparación con verdad de base, y Guidelines para seguridad

**Respuesta Correcta:** Correctness para la comparación con verdad de base, y Safety para la comprobación de contenido inseguro sin referencia

**Justificación:** Correctness compara contra ground truth; Safety evalúa contenido inseguro sin respuesta de referencia.

---

## Question 13 of 20 / Pregunta 13 de 20

### English
**Question:** A team wants long-term retention and SQL-queryable trace data governed by table permissions rather than experiment ACLs, so they bind their MLflow experiment to a Unity Catalog trace location with a table prefix of agent_traces.

Which set of Delta tables is created automatically?

**Options:**
- [ ] agent_traces_requests and agent_traces_responses only
- [ ] agent_traces_input, agent_traces_output, and agent_traces_errors
- [ ] A single agent_traces table containing all spans, logs, and metrics
- [x] agent_traces_otel_spans, agent_traces_otel_annotations, agent_traces_otel_logs, and agent_traces_otel_metrics

**Correct Answer:** agent_traces_otel_spans, agent_traces_otel_annotations, agent_traces_otel_logs, and agent_traces_otel_metrics

**Justification:** UC trace ingestion creates OpenTelemetry-backed spans, annotations, logs, and metrics tables with the configured prefix.

### Español
**Pregunta:** Un equipo quiere retención a largo plazo y datos de trazas consultables mediante SQL, gobernados por permisos de tabla en lugar de ACL de experimento, por lo que vincula su experimento de MLflow a una ubicación de trazas de Unity Catalog con un prefijo de tabla agent_traces.

¿Qué conjunto de tablas Delta se crea automáticamente?

**Opciones:**
- [ ] agent_traces_requests y agent_traces_responses solamente
- [ ] agent_traces_input, agent_traces_output y agent_traces_errors
- [ ] Una única tabla agent_traces que contiene todos los spans, logs y métricas
- [x] agent_traces_otel_spans, agent_traces_otel_annotations, agent_traces_otel_logs y agent_traces_otel_metrics

**Respuesta Correcta:** agent_traces_otel_spans, agent_traces_otel_annotations, agent_traces_otel_logs y agent_traces_otel_metrics

**Justificación:** La ingesta UC crea tablas OpenTelemetry de spans, anotaciones, logs y métricas con el prefijo configurado.

---

## Question 14 of 20 / Pregunta 14 de 20

### English
**Question:** A compliance team wants every response from a support agent to be written in Spanish, and they want to encode this as a plain-English rule without writing evaluation code. A developer writes:

from mlflow.genai.scorers import Guidelines, ScorerSamplingConfig

spanish = Guidelines(

    name="spanish",

    guidelines=["The response must be written in Spanish"],

).register(name="is_spanish")

spanish = spanish.start(sampling_config=ScorerSamplingConfig(sample_rate=1.0))

What value will this Guidelines judge return for each evaluated trace?

**Options:**
- [ ] A Python boolean True or False
- [ ] A floating-point score between 0.0 and 1.0
- [ ] The full translated Spanish text of the response
- [x] Feedback with a value of "yes" or "no" (strings), one per guideline

**Correct Answer:** Feedback with a value of "yes" or "no" (strings), one per guideline

**Justification:** Guidelines produces Feedback assessments with categorical yes/no values for each rule.

### Español
**Pregunta:** Un equipo de cumplimiento quiere que cada respuesta de un agente de soporte esté escrita en español, y quiere codificar esto como una regla en inglés simple sin escribir código de evaluación. Un desarrollador escribe:

from mlflow.genai.scorers import Guidelines, ScorerSamplingConfig

spanish = Guidelines(

    name="spanish",

    guidelines=["The response must be written in Spanish"],

).register(name="is_spanish")

spanish = spanish.start(sampling_config=ScorerSamplingConfig(sample_rate=1.0))

¿Qué valor devolverá este juez Guidelines para cada traza evaluada?

**Opciones:**
- [ ] Un booleano de Python True o False
- [ ] Una puntuación de punto flotante entre 0.0 y 1.0
- [ ] El texto completo en español traducido de la respuesta
- [x] Feedback con un valor de "yes" o "no" (cadenas), uno por cada directriz

**Respuesta Correcta:** Feedback con un valor de "yes" o "no" (cadenas), uno por cada directriz

**Justificación:** Guidelines produce assessments Feedback categóricos yes/no para cada regla.

---

## Question 15 of 20 / Pregunta 15 de 20

### English
**Question:** A developer adds tracing to a weather-aware travel agent. The root function is decorated, and a helper is given a semantic span type:

@mlflow.trace(span_type="TOOL")

def lookup_weather(city: str) -> dict:

...

@mlflow.trace(span_type="CHAIN")

def travel_agent(user_query: str) -> str:

    weather = lookup_weather("tokyo")

    response = client.chat.completions.create(...)

    return response.choices[0].message.content

With mlflow.openai.autolog() enabled, what will the resulting trace look like?

**Options:**
- [ ] Two unrelated traces, one per decorated function
- [ ] Only the CHAT_MODEL span, because autolog replaces manual decorators
- [x] A parent CHAIN span for travel_agent, with a child TOOL span for lookup_weather and an automatically generated CHAT_MODEL span for the OpenAI call
- [ ] A single flat span with no children, because decorators do not nest

**Correct Answer:** A parent CHAIN span for travel_agent, with a child TOOL span for lookup_weather and an automatically generated CHAT_MODEL span for the OpenAI call

**Justification:** Manual parent/child spans nest with the CHAT_MODEL span generated by OpenAI autologging.

### Español
**Pregunta:** Un desarrollador agrega trazabilidad a un agente de viajes consciente del clima. La función raíz está decorada y a un ayudante se le asigna un tipo de span semántico:

@mlflow.trace(span_type="TOOL")

def lookup_weather(city: str) -> dict:

    ...

@mlflow.trace(span_type="CHAIN")

def travel_agent(user_query: str) -> str:

    weather = lookup_weather("tokyo")

    response = client.chat.completions.create(...)

    return response.choices[0].message.content

Con mlflow.openai.autolog() habilitado, ¿cómo será la traza resultante?

**Opciones:**
- [ ] Dos trazas no relacionadas, una por cada función decorada
- [ ] Solo el span CHAT_MODEL, porque autolog reemplaza los decoradores manuales
- [x] Un span CHAIN principal para travel_agent, con un span TOOL hijo para lookup_weather y un span CHAT_MODEL generado automáticamente para la llamada de OpenAI
- [ ] Un único span plano sin hijos, porque los decoradores no se anidan

**Respuesta Correcta:** Un span CHAIN principal para travel_agent, con un span TOOL hijo para lookup_weather y un span CHAT_MODEL generado automáticamente para la llamada de OpenAI

**Justificación:** Los spans manuales padre/hijo se anidan con el CHAT_MODEL que crea autologging.

---

## Question 16 of 20 / Pregunta 16 de 20

### English
**Question:** A platform team exposes an internal pricing function they wrote in Python and registered in Unity Catalog so that any connected agent can call it as a tool. They did not write any custom API wrapper, authentication, or response-parsing code. The tool is discovered and invoked over a standard protocol.

Which category of MCP server are they using?

**Options:**
- [x] A managed MCP server backed by Unity Catalog functions
- [ ] A custom MCP server they wrote and host as a separate Databricks App
- [ ] A local MCP server bundled inside the agent's container image
- [ ] An external MCP server connecting to a third-party SaaS API

**Correct Answer:** A managed MCP server backed by Unity Catalog functions

**Justification:** Databricks exposes registered Unity Catalog functions through a managed MCP server.

### Español
**Pregunta:** Un equipo de plataforma expone una función interna de precios que escribió en Python y registró en Unity Catalog para que cualquier agente conectado pueda llamarla como herramienta. No escribió ningún envoltorio de API personalizado, autenticación ni código de análisis de respuestas. La herramienta se descubre e invoca mediante un protocolo estándar.

¿Qué categoría de servidor MCP está utilizando?

**Opciones:**
- [x] Un servidor MCP administrado respaldado por funciones de Unity Catalog
- [ ] Un servidor MCP personalizado que escribieron y alojan como una Databricks App independiente
- [ ] Un servidor MCP local incluido dentro de la imagen de contenedor del agente
- [ ] Un servidor MCP externo que se conecta a una API SaaS de terceros

**Respuesta Correcta:** Un servidor MCP administrado respaldado por funciones de Unity Catalog

**Justificación:** Databricks expone funciones UC registradas mediante un servidor MCP administrado.

---

## Question 17 of 20 / Pregunta 17 de 20

### English
**Question:** A conversational banking agent needs conversation-level evaluation, so turns from the same chat must be grouped into one session. A developer sets mlflow.trace.session as a tag on each trace and is puzzled when the multi-turn judge never groups the turns together.

What is the correct fix?

**Options:**
- [x] Set the session id in trace metadata, for example via session_id= or the mlflow.trace.session metadata key, not in tags
- [ ] Shorten the session completion buffer to zero so sessions never wait
- [ ] Add the session id to both a tag and the span name so the judge can match on either
- [ ] Give every trace in the conversation an identical trace_id

**Correct Answer:** Set the session id in trace metadata, for example via session_id= or the mlflow.trace.session metadata key, not in tags

**Justification:** Multi-turn grouping reads session information from trace metadata, not tags.

### Español
**Pregunta:** Un agente bancario conversacional necesita evaluación a nivel de conversación, por lo que los turnos del mismo chat deben agruparse en una sola sesión. Un desarrollador establece mlflow.trace.session como una etiqueta en cada traza y se desconcierta cuando el juez multiturno nunca agrupa los turnos.

¿Cuál es la corrección adecuada?

**Opciones:**
- [x] Establecer el id de sesión en los metadatos de la traza, por ejemplo mediante session_id= o la clave de metadatos mlflow.trace.session, no en etiquetas
- [ ] Acortar el búfer de finalización de sesión a cero para que las sesiones nunca esperen
- [ ] Agregar el id de sesión tanto a una etiqueta como al nombre del span para que el juez pueda coincidir en cualquiera de ellos
- [ ] Dar a cada traza de la conversación un trace_id idéntico

**Respuesta Correcta:** Establecer el id de sesión en los metadatos de la traza, por ejemplo mediante session_id= o la clave de metadatos mlflow.trace.session, no en etiquetas

**Justificación:** La agrupación multi-turn lee la sesión desde metadatos, no desde tags.

---

## Question 18 of 20 / Pregunta 18 de 20

### English
**Question:** A retailer, NorthPeak Goods, is choosing between two deployment patterns for a new returns-processing agent. In one pattern the deployment artifact is a model registered in Unity Catalog and served from an endpoint. In the other, the deployment artifact is the application code itself, and that code calls a serving endpoint only for LLM inference while owning all orchestration and tool logic.

In the app-based (Databricks App) pattern, what is actually deployed as the artifact?

**Options:**
- [ ] A foundation model hosted directly on the app's compute
- [ ] A SQL warehouse that runs the agent queries
- [ ] A registered MLflow model in Unity Catalog
- [x] The application code, which calls a serving endpoint for inference

**Correct Answer:** The application code, which calls a serving endpoint for inference

**Justification:** The app owns orchestration and tool logic; it calls a serving endpoint only for model inference.

### Español
**Pregunta:** Un minorista, NorthPeak Goods, está eligiendo entre dos patrones de despliegue para un nuevo agente de procesamiento de devoluciones. En un patrón, el artefacto de despliegue es un modelo registrado en Unity Catalog y servido desde un endpoint. En el otro, el artefacto de despliegue es el propio código de la aplicación, y ese código llama a un endpoint de serving solo para inferencia de LLM mientras posee toda la orquestación y lógica de herramientas.

En el patrón basado en aplicación (Databricks App), ¿qué se despliega realmente como artefacto?

**Opciones:**
- [ ] Un modelo fundacional alojado directamente en el cómputo de la aplicación
- [ ] Un almacén SQL que ejecuta las consultas del agente
- [ ] Un modelo MLflow registrado en Unity Catalog
- [x] El código de la aplicación, que llama a un endpoint de serving para inferencia

**Respuesta Correcta:** El código de la aplicación, que llama a un endpoint de serving para inferencia

**Justificación:** La app posee la orquestación y lógica de herramientas; llama al endpoint solo para inferencia.

---

## Question 19 of 20 / Pregunta 19 de 20

### English
**Question:** A team is designing online evaluation for a high-traffic agent. They must never miss a safety violation, they want a statistically meaningful read on overall answer quality from an expensive LLM judge, and they need to keep evaluation cost under control at scale.

Which sampling strategy best fits these constraints?

**Options:**
- [ ] Run every scorer at 100% so nothing is ever missed
- [x] Run the safety scorer at 100% and the expensive LLM quality judge at roughly 5 to 10%
- [ ] Run the safety scorer at 5% and the LLM quality judge at 100%
- [ ] Run all scorers at 50% to split the difference evenly

**Correct Answer:** Run the safety scorer at 100% and the expensive LLM quality judge at roughly 5 to 10%

**Justification:** Safety warrants full coverage; costly quality monitoring can be sampled while retaining a meaningful signal.

### Español
**Pregunta:** Un equipo está diseñando evaluación en línea para un agente de alto tráfico. Nunca debe omitir una violación de seguridad, quiere una lectura estadísticamente significativa de la calidad general de las respuestas a partir de un juez LLM costoso, y necesita mantener el costo de evaluación bajo control a escala.

¿Qué estrategia de muestreo se ajusta mejor a estas restricciones?

**Opciones:**
- [ ] Ejecutar cada scorer al 100% para que nunca se omita nada
- [x] Ejecutar el scorer de seguridad al 100% y el juez de calidad LLM costoso aproximadamente al 5 a 10%
- [ ] Ejecutar el scorer de seguridad al 5% y el juez de calidad LLM al 100%
- [ ] Ejecutar todos los scorers al 50% para dividir la diferencia equitativamente

**Respuesta Correcta:** Ejecutar el scorer de seguridad al 100% y el juez de calidad LLM costoso aproximadamente al 5 a 10%

**Justificación:** Safety requiere cobertura total; la calidad costosa se puede muestrear manteniendo una señal útil.

---

## Question 20 of 20 / Pregunta 20 de 20

### English
**Question:** An ML platform team at an insurance firm wants a single place to enforce content guardrails, apply rate limits, and track spend across every LLM endpoint their deployed agents call, without editing the agents' code. A colleague mentions that Databricks already provides a centralized governance layer that sits between applications and serving endpoints.

Which component is being described?

**Options:**
- [ ] Model Context Protocol server
- [ ] Declarative Automation Bundle
- [x] Unity AI Gateway
- [ ] MLflow Experiment

**Correct Answer:** Unity AI Gateway

**Justification:** Unity AI Gateway is the centralized layer between applications and serving endpoints for governance, limits, and usage control.

### Español
**Pregunta:** Un equipo de plataforma de ML de una empresa de seguros quiere un único lugar para aplicar protecciones de contenido, límites de tasa y seguimiento del gasto en cada endpoint LLM que llamen sus agentes desplegados, sin editar el código de los agentes. Un colega menciona que Databricks ya proporciona una capa de gobierno centralizada que se sitúa entre las aplicaciones y los endpoints de serving.

¿Qué componente se está describiendo?

**Opciones:**
- [ ] Servidor Model Context Protocol
- [ ] Declarative Automation Bundle
- [x] Unity AI Gateway
- [ ] Experimento de MLflow

**Respuesta Correcta:** Unity AI Gateway

**Justificación:** Unity AI Gateway es la capa centralizada entre aplicaciones y endpoints para gobierno, límites y control de uso.

---

