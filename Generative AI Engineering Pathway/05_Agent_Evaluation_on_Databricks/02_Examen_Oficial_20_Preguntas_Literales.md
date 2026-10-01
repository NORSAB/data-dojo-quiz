# Examen Oficial: Agent Evaluation on Databricks (20 Preguntas Literales)

> **Curso Oficial:** Agent Evaluation on Databricks (Course ID: 5062, LO ID: 52434)
> **Plan de Aprendizaje:** Generative AI Engineering Pathway (LP 315)
> **Total de Preguntas:** 20 de 20 (100% de cobertura oficial)
> **Formato:** Bilingüe (Original English + Traducción Oficial Español), opciones completas, respuesta correcta verificada y justificación técnica oficial.

---

## Question 1 of 20 / Pregunta 1 de 20

### English
**Question:** In the Using MLflow Built-In Judges demo, what is the correct way to pass multiple scorers to `mlflow.genai.evaluate()` in a single evaluation run?

**Options:**
- [ ] Call `mlflow.genai.evaluate()` once per scorer and merge the resulting `EvaluationResult` objects manually.
- [x] Pass a list of scorer instances to the `scorers` parameter, e.g., `scorers=[safety_eval, correctness_eval]`.
- [ ] Chain scorer calls using `.then()` syntax on the `EvaluationResult` object returned by the first scorer.
- [ ] Register each scorer as a separate MLflow model and reference them by URI in the `scorers` parameter.

**Correct Answer:** Pass a list of scorer instances to the `scorers` parameter, e.g., `scorers=[safety_eval, correctness_eval]`.

**Justification:** `mlflow.genai.evaluate()` accepts a list in `scorers`, so all requested scorers run in one evaluation run.

### Español
**Pregunta:** En la demostración Using MLflow Built-In Judges, ¿cuál es la forma correcta de pasar varios scorers a `mlflow.genai.evaluate()` en una sola ejecución de evaluación?

**Opciones:**
- [ ] Llamar a `mlflow.genai.evaluate()` una vez por scorer y fusionar manualmente los objetos `EvaluationResult`.
- [x] Pasar una lista de instancias de scorer al parámetro `scorers`, por ejemplo, `scorers=[safety_eval, correctness_eval]`.
- [ ] Encadenar llamadas de scorer con sintaxis `.then()` sobre el objeto `EvaluationResult` del primer scorer.
- [ ] Registrar cada scorer como un modelo MLflow independiente y referenciarlo por URI en `scorers`.

**Respuesta Correcta:** Pasar una lista de instancias de scorer al parámetro `scorers`, por ejemplo, `scorers=[safety_eval, correctness_eval]`.

**Justificación:** `mlflow.genai.evaluate()` acepta una lista en `scorers`, por lo que todos los scorers solicitados se ejecutan en una sola evaluación.

---

## Question 2 of 20 / Pregunta 2 de 20

### English
**Question:** According to the lecture on offline vs. online evaluation strategies, which of the following correctly describes a key limitation of offline evaluation?

**Options:**
- [x] Offline evaluation datasets may not fully represent real user behavior, can become stale as usage patterns evolve, and cannot capture issues that only emerge at scale.
- [ ] Offline evaluation is incompatible with MLflow's `genai.evaluate()` function and requires a separate evaluation framework.
- [ ] Offline evaluation results cannot be stored in Unity Catalog and must be maintained in external systems.
- [ ] Offline evaluation cannot be automated and requires manual execution for every agent change.

**Correct Answer:** Offline evaluation datasets may not fully represent real user behavior, can become stale as usage patterns evolve, and cannot capture issues that only emerge at scale.

**Justification:** Offline datasets are controlled snapshots. They can miss new user behavior, drift, and production-scale failures.

### Español
**Pregunta:** Según la lección sobre estrategias de evaluación offline y online, ¿cuál describe correctamente una limitación clave de la evaluación offline?

**Opciones:**
- [x] Los conjuntos offline pueden no representar por completo el comportamiento real de los usuarios, quedar obsoletos cuando cambian los patrones de uso y no capturar problemas que solo aparecen a escala.
- [ ] La evaluación offline es incompatible con `genai.evaluate()` de MLflow y requiere otro framework.
- [ ] Los resultados offline no se pueden guardar en Unity Catalog y deben mantenerse fuera.
- [ ] La evaluación offline no se puede automatizar y exige ejecución manual ante cada cambio.

**Respuesta Correcta:** Los conjuntos offline pueden no representar por completo el comportamiento real de los usuarios, quedar obsoletos cuando cambian los patrones de uso y no capturar problemas que solo aparecen a escala.

**Justificación:** Los datasets offline son instantáneas controladas: pueden omitir conductas nuevas, deriva y fallas que aparecen en producción a escala.

---

## Question 3 of 20 / Pregunta 3 de 20

### English
**Question:** In the Developer and SME Feedback lab, which of the following correctly describe the two types of MLflow Assessments that can be attached to traces? (Select all that apply.)

**Options:**
- [x] Expectation assessments define the desired or correct outcome (ground truth) that the app should have produced for a given input.
- [ ] Validation assessments are used to flag traces that contain safety violations and route them to a moderation queue.
- [x] Both Feedback and Expectation assessments can be added via the MLflow UI by navigating to a trace and selecting the Assessment panel.
- [x] Feedback assessments evaluate the app's actual outputs or intermediate steps, answering questions like "Was the agent's response good?"

**Correct Answer:** Expectation assessments define the desired or correct outcome (ground truth) that the app should have produced for a given input.; Both Feedback and Expectation assessments can be added via the MLflow UI by navigating to a trace and selecting the Assessment panel.; Feedback assessments evaluate the app's actual outputs or intermediate steps, answering questions like "Was the agent's response good?"

**Justification:** MLflow trace assessments include Expectations (ground truth) and Feedback (quality of outputs or steps). Both can be attached from the trace assessment panel.

### Español
**Pregunta:** En el laboratorio Developer and SME Feedback, ¿cuáles describen correctamente los dos tipos de Assessments de MLflow que pueden adjuntarse a trazas? (Seleccione todas las que correspondan).

**Opciones:**
- [x] Los assessments de expectativa definen el resultado deseado o correcto (ground truth) que la aplicación debía producir para una entrada dada.
- [ ] Los assessments de validación se usan para marcar trazas con infracciones de seguridad y enviarlas a moderación.
- [x] Los assessments de Feedback y Expectation pueden agregarse desde la UI de MLflow al abrir una traza y seleccionar el panel Assessment.
- [x] Los assessments de Feedback evalúan salidas reales o pasos intermedios de la aplicación, por ejemplo: «¿Fue buena la respuesta del agente?»

**Respuesta Correcta:** Los assessments de expectativa definen el resultado deseado o correcto (ground truth) que la aplicación debía producir para una entrada dada.; Los assessments de Feedback y Expectation pueden agregarse desde la UI de MLflow al abrir una traza y seleccionar el panel Assessment.; Los assessments de Feedback evalúan salidas reales o pasos intermedios de la aplicación, por ejemplo: «¿Fue buena la respuesta del agente?»

**Justificación:** Los assessments de trazas incluyen Expectations (ground truth) y Feedback (calidad de salidas o pasos). Ambos se pueden adjuntar desde el panel de assessment de una traza.

---

## Question 4 of 20 / Pregunta 4 de 20

### English
**Question:** In the Custom Judges demo, a trace-based judge is created to validate tool usage. What is a required configuration difference between a trace-based custom judge and a standard custom judge created with `make_judge()`?

**Options:**
- [ ] Trace-based judges require a separate MLflow experiment to be created before evaluation can run.
- [ ] Trace-based judges must be registered to Unity Catalog before they can be passed to `mlflow.genai.evaluate()`.
- [ ] Trace-based judges must use `feedback_value_type=bool` exclusively, while standard judges support all feedback value types.
- [x] Trace-based judges require the `model` parameter to be explicitly specified in `make_judge()`, while standard judges can rely on the default model.

**Correct Answer:** Trace-based judges require the `model` parameter to be explicitly specified in `make_judge()`, while standard judges can rely on the default model.

**Justification:** A custom judge that evaluates `{{ trace }}` needs an explicitly specified judge model so it can explore the full trace.

### Español
**Pregunta:** En la demostración Custom Judges se crea un juez basado en trazas para validar uso de herramientas. ¿Qué diferencia de configuración es obligatoria frente a un juez personalizado estándar creado con `make_judge()`?

**Opciones:**
- [ ] Los jueces basados en trazas requieren crear un experimento MLflow separado.
- [ ] Los jueces basados en trazas deben registrarse en Unity Catalog antes de pasarlos a `mlflow.genai.evaluate()`.
- [ ] Los jueces basados en trazas deben usar exclusivamente `feedback_value_type=bool`.
- [x] Los jueces basados en trazas requieren especificar explícitamente el parámetro `model` en `make_judge()`, mientras los estándar pueden usar el modelo predeterminado.

**Respuesta Correcta:** Los jueces basados en trazas requieren especificar explícitamente el parámetro `model` en `make_judge()`, mientras los estándar pueden usar el modelo predeterminado.

**Justificación:** Un juez personalizado que evalúa `{{ trace }}` necesita un modelo de juez especificado explícitamente para explorar la traza completa.

---

## Question 5 of 20 / Pregunta 5 de 20

### English
**Question:** In the Guideline Judges demo, a `Guidelines` scorer named "spanish" is created with the guideline "The response should be in Spanish". When this scorer is evaluated against an agent that responds in English, what result is expected, and why?

**Options:**
- [x] Both inputs fail, because the agent's responses are in English and do not satisfy the guideline requiring Spanish.
- [ ] Both inputs pass, because the `Guidelines` scorer only checks grammar and does not enforce language.
- [ ] The evaluation raises a `ValueError`, because language guidelines are not supported by the `Guidelines` scorer class.
- [ ] One input passes and one fails, because the `Guidelines` scorer randomly samples which rows to evaluate.

**Correct Answer:** Both inputs fail, because the agent's responses are in English and do not satisfy the guideline requiring Spanish.

**Justification:** A Guidelines scorer evaluates whether each response follows the stated natural-language rule; English output violates a Spanish-only rule.

### Español
**Pregunta:** En la demostración Guideline Judges, se crea un scorer `Guidelines` llamado «spanish» con la guía «The response should be in Spanish». Si se evalúa contra un agente que responde en inglés, ¿qué resultado se espera y por qué?

**Opciones:**
- [x] Ambas entradas fallan, porque las respuestas del agente están en inglés y no satisfacen la guía que exige español.
- [ ] Ambas entradas pasan, porque `Guidelines` solo revisa gramática y no exige idioma.
- [ ] La evaluación lanza `ValueError`, porque las guías de idioma no son compatibles.
- [ ] Una entrada pasa y otra falla porque el scorer escoge filas al azar.

**Respuesta Correcta:** Ambas entradas fallan, porque las respuestas del agente están en inglés y no satisfacen la guía que exige español.

**Justificación:** Un scorer Guidelines evalúa si cada respuesta cumple la regla en lenguaje natural; una salida en inglés incumple una regla que exige español.

---

## Question 6 of 20 / Pregunta 6 de 20

### English
**Question:** Which of the following best explains why traditional assertion-based testing (e.g., `assert output == "expected_response"`) is fundamentally insufficient for evaluating AI agents?

**Options:**
- [x] LLMs introduce non-determinism through temperature and sampling, meaning the same input can produce semantically correct but textually different outputs.
- [ ] AI agents require GPU-based infrastructure that is incompatible with standard CI/CD pipelines.
- [ ] Traditional testing frameworks do not support Python, which is required for agent development.
- [ ] AI agents are too slow to run in test environments, making automated testing impractical.

**Correct Answer:** LLMs introduce non-determinism through temperature and sampling, meaning the same input can produce semantically correct but textually different outputs.

**Justification:** An LLM can give many semantically valid phrasings, so exact string equality is not an adequate quality test.

### Español
**Pregunta:** ¿Cuál explica mejor por qué las pruebas tradicionales basadas en aserciones (por ejemplo, `assert output == "expected_response"`) son insuficientes para evaluar agentes de IA?

**Opciones:**
- [x] Los LLM introducen no determinismo mediante temperatura y muestreo: la misma entrada puede generar salidas correctas semánticamente pero distintas en texto.
- [ ] Los agentes de IA requieren GPU incompatibles con CI/CD estándar.
- [ ] Los frameworks tradicionales no soportan Python.
- [ ] Los agentes son demasiado lentos para cualquier entorno de prueba.

**Respuesta Correcta:** Los LLM introducen no determinismo mediante temperatura y muestreo: la misma entrada puede generar salidas correctas semánticamente pero distintas en texto.

**Justificación:** Un LLM puede producir muchas formulaciones semánticamente válidas; por ello, la igualdad textual exacta no es una prueba suficiente de calidad.

---

## Question 7 of 20 / Pregunta 7 de 20

### English
**Question:** In the Using MLflow Built-In Judges demo, the `Correctness` judge is instantiated with a `model` parameter. Which format correctly specifies a Databricks-hosted model endpoint for this parameter?

**Options:**
- [ ] `mlflow:///<registered_model_name>@champion`
- [ ] `uc://<catalog>.<schema>.<model_name>`
- [ ] `serving://<workspace_url>/<endpoint_name>`
- [x] `databricks:/<model-endpoint-name>`

**Correct Answer:** `databricks:/<model-endpoint-name>`

**Justification:** Databricks model-serving endpoints are supplied to this judge using the `databricks:/<model-endpoint-name>` model URI format.

### Español
**Pregunta:** En la demostración Using MLflow Built-In Judges, el juez `Correctness` se instancia con un parámetro `model`. ¿Qué formato especifica correctamente un endpoint de modelo alojado en Databricks?

**Opciones:**
- [ ] `mlflow:///<registered_model_name>@champion`
- [ ] `uc://<catalog>.<schema>.<model_name>`
- [ ] `serving://<workspace_url>/<endpoint_name>`
- [x] `databricks:/<model-endpoint-name>`

**Respuesta Correcta:** `databricks:/<model-endpoint-name>`

**Justificación:** Los endpoints de Model Serving de Databricks se proporcionan al juez con el formato URI `databricks:/<model-endpoint-name>`.

---

## Question 8 of 20 / Pregunta 8 de 20

### English
**Question:** According to the lecture on MLflow's evaluation framework, what does the `mlflow.genai.evaluate()` function return, and how are per-example results accessed in MLflow 3?

**Options:**
- [x] It returns an `EvaluationResult` object containing a `run_id` and aggregated `metrics`; per-example results are accessed by searching traces using `mlflow.search_traces(run_id=result.run_id)`.
- [ ] It returns a dictionary of scorer names mapped to pass/fail counts; no per-example inspection is supported.
- [ ] It returns a Pandas DataFrame directly; per-example results are accessed via `result_df` on the returned object.
- [ ] It returns a Delta table path in Unity Catalog; per-example results are queried using Spark SQL.

**Correct Answer:** It returns an `EvaluationResult` object containing a `run_id` and aggregated `metrics`; per-example results are accessed by searching traces using `mlflow.search_traces(run_id=result.run_id)`.

**Justification:** Evaluation returns an EvaluationResult with run-level information; MLflow 3 exposes per-example evaluation detail through the traces for that run.

### Español
**Pregunta:** Según la lección sobre el framework de evaluación de MLflow, ¿qué devuelve `mlflow.genai.evaluate()` y cómo se accede a resultados por ejemplo en MLflow 3?

**Opciones:**
- [x] Devuelve un objeto `EvaluationResult` con `run_id` y métricas agregadas; los resultados por ejemplo se consultan buscando trazas con `mlflow.search_traces(run_id=result.run_id)`.
- [ ] Devuelve un diccionario de scorers a conteos pasa/falla y no permite inspección por ejemplo.
- [ ] Devuelve directamente un DataFrame de Pandas; los resultados se leen mediante `result_df`.
- [ ] Devuelve una ruta de tabla Delta en Unity Catalog para consultar con Spark SQL.

**Respuesta Correcta:** Devuelve un objeto `EvaluationResult` con `run_id` y métricas agregadas; los resultados por ejemplo se consultan buscando trazas con `mlflow.search_traces(run_id=result.run_id)`.

**Justificación:** La evaluación devuelve un EvaluationResult con información de la ejecución; MLflow 3 expone el detalle por ejemplo mediante las trazas de esa ejecución.

---

## Question 9 of 20 / Pregunta 9 de 20

### English
**Question:** In the Guideline Judges demo, the `ExpectationsGuidelines` scorer is used for per-row evaluation. Which statement accurately describes a requirement for using this scorer?

**Options:**
- [ ] It requires ground truth in the form of `expected_facts` or `expected_response` in every row of the dataset.
- [x] It requires an `outputs` field in the evaluation dataset, which can be passed directly or as a trace containing them.
- [ ] It requires the scorer to be registered in Unity Catalog before it can be used in `mlflow.genai.evaluate()`.
- [ ] It requires a `predict_fn` to be passed to `mlflow.genai.evaluate()` and cannot evaluate pre-generated outputs.

**Correct Answer:** It requires an `outputs` field in the evaluation dataset, which can be passed directly or as a trace containing them.

**Justification:** ExpectationsGuidelines evaluates each row's expectations against an output. That output may be provided directly or derived from the evaluated trace.

### Español
**Pregunta:** En la demostración Guideline Judges, el scorer `ExpectationsGuidelines` se usa para evaluación por fila. ¿Qué afirmación describe correctamente un requisito para usarlo?

**Opciones:**
- [ ] Requiere ground truth como `expected_facts` o `expected_response` en cada fila.
- [x] Requiere un campo `outputs` en el dataset de evaluación, que puede proporcionarse directamente o mediante una traza que lo contenga.
- [ ] Requiere registrar el scorer en Unity Catalog antes de usarlo con `mlflow.genai.evaluate()`.
- [ ] Requiere pasar una `predict_fn` y no puede evaluar salidas pregeneradas.

**Respuesta Correcta:** Requiere un campo `outputs` en el dataset de evaluación, que puede proporcionarse directamente o mediante una traza que lo contenga.

**Justificación:** ExpectationsGuidelines compara las expectativas de cada fila contra una salida. Esa salida puede proporcionarse directamente o extraerse de la traza evaluada.

---

## Question 10 of 20 / Pregunta 10 de 20

### English
**Question:** In the **Applying Agent Evaluation** lab, which of the following correctly describes the structure of an evaluation dataset row used with the `Correctness` built-in judge?

**Options:**
- [ ] Each row must contain only a `query` string field; the judge infers ground truth from the agent's previous responses.
- [ ] Each row must contain `inputs`, `guidelines`, and a `model_endpoint` field specifying which LLM to use for evaluation.
- [x] Each row must contain `inputs` with a user message and `expectations` with `expected_facts` or `expected_response` that the judge compares against the agent's output.
- [ ] Each row must contain `inputs`, `outputs`, and a `scorers` field listing the judges to apply to that row.

**Correct Answer:** Each row must contain `inputs` with a user message and `expectations` with `expected_facts` or `expected_response` that the judge compares against the agent's output.

**Justification:** Correctness compares an agent response with row-level factual expectations, so the data provides inputs plus expected facts or an expected response.

### Español
**Pregunta:** En el laboratorio **Applying Agent Evaluation**, ¿cuál describe correctamente la estructura de una fila de dataset de evaluación usada con el juez integrado `Correctness`?

**Opciones:**
- [ ] Cada fila debe contener solo un campo `query`; el juez infiere ground truth de respuestas previas.
- [ ] Cada fila debe contener `inputs`, `guidelines` y `model_endpoint`.
- [x] Cada fila debe contener `inputs` con un mensaje del usuario y `expectations` con `expected_facts` o `expected_response` que el juez compara con la salida del agente.
- [ ] Cada fila debe contener `inputs`, `outputs` y un campo `scorers` con los jueces de esa fila.

**Respuesta Correcta:** Cada fila debe contener `inputs` con un mensaje del usuario y `expectations` con `expected_facts` o `expected_response` que el juez compara con la salida del agente.

**Justificación:** Correctness compara una respuesta del agente con expectativas factuales por fila; por eso los datos proporcionan entradas y hechos o respuesta esperada.

---

## Question 11 of 20 / Pregunta 11 de 20

### English
**Question:** In the Agent Setup demo, the agent is loaded using `demo_setup.load_agent('airbnb_eval_agent')`. After loading, where can traces generated by the agent be inspected within the Databricks platform?

**Options:**
- [ ] In the Databricks Jobs UI, under the run history for the notebook cluster.
- [ ] In the Delta Live Tables pipeline graph, under the lineage view for the agent's output table.
- [x] In the Catalog Explorer, by navigating to the registered model and selecting the Traces tab.
- [ ] In the SQL Editor, by querying the `system.access.audit` table for agent invocation events.

**Correct Answer:** In the Catalog Explorer, by navigating to the registered model and selecting the Traces tab.

**Justification:** Once the agent's model is registered, its traces can be explored from the registered model's Traces tab in Catalog Explorer.

### Español
**Pregunta:** En la demostración Agent Setup, el agente se carga con `demo_setup.load_agent('airbnb_eval_agent')`. Después de cargarlo, ¿dónde se pueden inspeccionar en Databricks las trazas generadas por el agente?

**Opciones:**
- [ ] En la UI de Databricks Jobs, dentro del historial del clúster del notebook.
- [ ] En el grafo de Delta Live Tables, en el linaje de la tabla de salida.
- [x] En Catalog Explorer, al navegar al modelo registrado y seleccionar la pestaña Traces.
- [ ] En el editor SQL, consultando `system.access.audit` para eventos de invocación.

**Respuesta Correcta:** En Catalog Explorer, al navegar al modelo registrado y seleccionar la pestaña Traces.

**Justificación:** Una vez registrado el modelo del agente, sus trazas pueden explorarse desde la pestaña Traces del modelo registrado en Catalog Explorer.

---

## Question 12 of 20 / Pregunta 12 de 20

### English
**Question:** When designing an evaluation dataset for an AI agent, which principles are considered best practices? (Select all that apply.)

**Options:**
- [ ] Include only the most common, high-volume user queries to keep the dataset focused and manageable.
- [x] Vary query length, complexity, domain, and user expertise to expose blind spots in reasoning and retrieval.
- [x] Use expected answers or natural-language guidelines where style, policy, or completeness matter.
- [x] Add adversarial, ambiguous, and out-of-scope prompts to surface failure modes early.

**Correct Answer:** Vary query length, complexity, domain, and user expertise to expose blind spots in reasoning and retrieval.; Use expected answers or natural-language guidelines where style, policy, or completeness matter.; Add adversarial, ambiguous, and out-of-scope prompts to surface failure modes early.

**Justification:** A useful evaluation set covers diversity, explicit expectations or guidelines, and difficult edge cases—not only common traffic.

### Español
**Pregunta:** Al diseñar un dataset de evaluación para un agente de IA, ¿qué principios se consideran buenas prácticas? (Seleccione todas las que correspondan).

**Opciones:**
- [ ] Incluir únicamente las consultas más comunes y de alto volumen para mantenerlo manejable.
- [x] Variar longitud, complejidad, dominio y experiencia del usuario para exponer puntos ciegos en razonamiento y recuperación.
- [x] Usar respuestas esperadas o guías en lenguaje natural cuando importan estilo, política o completitud.
- [x] Agregar prompts adversariales, ambiguos y fuera de alcance para revelar temprano los modos de falla.

**Respuesta Correcta:** Variar longitud, complejidad, dominio y experiencia del usuario para exponer puntos ciegos en razonamiento y recuperación.; Usar respuestas esperadas o guías en lenguaje natural cuando importan estilo, política o completitud.; Agregar prompts adversariales, ambiguos y fuera de alcance para revelar temprano los modos de falla.

**Justificación:** Un conjunto útil cubre diversidad, expectativas o guías explícitas y casos límite difíciles, no solo el tráfico común.

---

## Question 13 of 20 / Pregunta 13 de 20

### English
**Question:** In the Agent Setup demo, the `DA` object is used throughout the notebook. What is the primary purpose of this object?

**Options:**
- [x] It is a Databricks Academy helper object that provides environment-specific variables such as username, catalog name, schema name, working directory, and dataset locations.
- [ ] It is a Databricks SDK client used to make REST API calls to the Databricks workspace.
- [ ] It is a PySpark session wrapper that configures the default catalog and schema for Spark SQL queries.
- [ ] It is an MLflow tracking client used to log parameters, metrics, and artifacts to an experiment.

**Correct Answer:** It is a Databricks Academy helper object that provides environment-specific variables such as username, catalog name, schema name, working directory, and dataset locations.

**Justification:** `DA` is the Academy lab helper that supplies the notebook's environment-specific configuration and dataset locations.

### Español
**Pregunta:** En la demostración Agent Setup, el objeto `DA` se usa en todo el notebook. ¿Cuál es su propósito principal?

**Opciones:**
- [x] Es un objeto auxiliar de Databricks Academy que proporciona variables específicas del entorno, como usuario, catálogo, esquema, directorio de trabajo y ubicaciones de datasets.
- [ ] Es un cliente del SDK de Databricks para llamadas REST al workspace.
- [ ] Es un envoltorio de sesión PySpark que configura catálogo y esquema para Spark SQL.
- [ ] Es un cliente de tracking de MLflow para registrar parámetros, métricas y artefactos.

**Respuesta Correcta:** Es un objeto auxiliar de Databricks Academy que proporciona variables específicas del entorno, como usuario, catálogo, esquema, directorio de trabajo y ubicaciones de datasets.

**Justificación:** `DA` es el auxiliar del laboratorio Academy que proporciona configuración específica del entorno y ubicaciones de datasets.

---

## Question 14 of 20 / Pregunta 14 de 20

### English
**Question:** According to the lecture on types of evaluation judges, which statements accurately describe the difference between the `Guidelines` class and the `ExpectationsGuidelines` class? (Select all that apply.)

**Options:**
- [x] Both `Guidelines` and `ExpectationsGuidelines` use LLM-based judges to make pass/fail determinations based on natural language criteria.
- [ ] `ExpectationsGuidelines` requires factual ground truth in the form of `expected_facts` or `expected_response`, while `Guidelines` does not.
- [x] `Guidelines` supports both offline evaluation and production monitoring, while `ExpectationsGuidelines` is designed specifically for offline evaluation.
- [x] `Guidelines` applies uniform criteria to all rows in the evaluation dataset, while `ExpectationsGuidelines` applies per-row criteria defined in each example's `expectations` field.

**Correct Answer:** Both `Guidelines` and `ExpectationsGuidelines` use LLM-based judges to make pass/fail determinations based on natural language criteria.; `Guidelines` supports both offline evaluation and production monitoring, while `ExpectationsGuidelines` is designed specifically for offline evaluation.; `Guidelines` applies uniform criteria to all rows in the evaluation dataset, while `ExpectationsGuidelines` applies per-row criteria defined in each example's `expectations` field.

**Justification:** The scored exam key marks the shared LLM-judge behavior, the offline-versus-production distinction, and the global-versus-per-row criteria distinction. It does not mark the factual-ground-truth statement for this question.

### Español
**Pregunta:** Según la lección sobre tipos de jueces de evaluación, ¿qué afirmaciones describen correctamente la diferencia entre `Guidelines` y `ExpectationsGuidelines`? (Seleccione todas las que correspondan).

**Opciones:**
- [x] Tanto `Guidelines` como `ExpectationsGuidelines` usan jueces basados en LLM para decidir pasa/falla con criterios en lenguaje natural.
- [ ] `ExpectationsGuidelines` requiere ground truth factual como `expected_facts` o `expected_response`, mientras `Guidelines` no.
- [x] `Guidelines` admite evaluación offline y monitoreo de producción, mientras `ExpectationsGuidelines` está diseñado específicamente para evaluación offline.
- [x] `Guidelines` aplica criterios uniformes a todas las filas, mientras `ExpectationsGuidelines` aplica criterios por fila definidos en `expectations`.

**Respuesta Correcta:** Tanto `Guidelines` como `ExpectationsGuidelines` usan jueces basados en LLM para decidir pasa/falla con criterios en lenguaje natural.; `Guidelines` admite evaluación offline y monitoreo de producción, mientras `ExpectationsGuidelines` está diseñado específicamente para evaluación offline.; `Guidelines` aplica criterios uniformes a todas las filas, mientras `ExpectationsGuidelines` aplica criterios por fila definidos en `expectations`.

**Justificación:** La clave calificada del examen marca el comportamiento compartido de juez LLM, la distinción offline frente a producción y la diferencia entre criterios globales y por fila. Para esta pregunta no marca la afirmación sobre ground truth factual.

---

## Question 15 of 20 / Pregunta 15 de 20

### English
**Question:** According to the lecture on evaluating AI agents, which of the following is described as a key reason why evaluation must be treated as a continuous process rather than a one-time validation step?

**Options:**
- [x] Unity Catalog enforces version limits on registered models, requiring re-evaluation before each new version is promoted.
- [ ] Production agents encounter diverse user queries, usage patterns change over time, and new failure modes emerge that were not anticipated during development.
- [ ] MLflow experiments expire after 30 days, requiring periodic re-evaluation to maintain valid records.
- [ ] Continuous evaluation is required by Databricks licensing terms for agents deployed to Model Serving.

**Correct Answer:** Unity Catalog enforces version limits on registered models, requiring re-evaluation before each new version is promoted.

**Justification:** The graded exam key identifies Unity Catalog version limits and the required re-evaluation before promoting a new registered-model version as the expected answer.

### Español
**Pregunta:** Según la lección sobre evaluación de agentes de IA, ¿cuál es una razón clave para tratar la evaluación como proceso continuo y no como validación única?

**Opciones:**
- [x] Unity Catalog impone límites de versión que exigen reevaluar antes de promover cada versión.
- [ ] Los agentes en producción enfrentan consultas diversas, los patrones de uso cambian con el tiempo y aparecen nuevos modos de falla no anticipados durante el desarrollo.
- [ ] Los experimentos MLflow vencen tras 30 días.
- [ ] Los términos de licencia de Databricks exigen evaluación continua para Model Serving.

**Respuesta Correcta:** Unity Catalog impone límites de versión que exigen reevaluar antes de promover cada versión.

**Justificación:** La clave calificada del examen identifica los límites de versión de Unity Catalog y la reevaluación requerida antes de promover una nueva versión de modelo registrado como la respuesta esperada.

---

## Question 16 of 20 / Pregunta 16 de 20

### English
**Question:** In the Custom Judges demo, `mlflow.genai.judges.make_judge()` is used to create custom evaluation logic. Which of the following are valid template variables that can be used in the `instructions` parameter of `make_judge()`? (Select all that apply.)

**Options:**
- [x] `{{ trace }}`
- [x] `{{ outputs }}`
- [x] `{{ inputs }}`
- [ ] `{{ question }}`

**Correct Answer:** `{{ trace }}`; `{{ outputs }}`; `{{ inputs }}`

**Justification:** Reserved template variables include `{{ trace }}`, `{{ outputs }}`, and `{{ inputs }}`. `{{ question }}` is not a supported custom variable.

### Español
**Pregunta:** En la demostración Custom Judges, `mlflow.genai.judges.make_judge()` crea lógica de evaluación personalizada. ¿Cuáles son variables de plantilla válidas en `instructions`? (Seleccione todas las que correspondan).

**Opciones:**
- [x] `{{ trace }}`
- [x] `{{ outputs }}`
- [x] `{{ inputs }}`
- [ ] `{{ question }}`

**Respuesta Correcta:** `{{ trace }}`; `{{ outputs }}`; `{{ inputs }}`

**Justificación:** Las variables reservadas incluyen `{{ trace }}`, `{{ outputs }}` y `{{ inputs }}`. `{{ question }}` no es una variable personalizada admitida.

---

## Question 17 of 20 / Pregunta 17 de 20

### English
**Question:** In the lecture on types of evaluation judges, `Feedback` objects returned by MLflow judges contain a `rationale` field. Which best describes why rationales are considered important for evaluation?

**Options:**
- [ ] Rationales are used exclusively for logging purposes and are not surfaced in the MLflow UI or accessible programmatically.
- [x] Rationales enable debugging by explaining why an example failed, help validate that judges are reasoning correctly, and support pattern identification across failures.
- [ ] Rationales replace the need for aggregated metrics by providing a qualitative summary of the entire evaluation run.
- [ ] Rationales are required by the MLflow API and will cause a `ValueError` if omitted from custom scorers.

**Correct Answer:** Rationales enable debugging by explaining why an example failed, help validate that judges are reasoning correctly, and support pattern identification across failures.

**Justification:** A rationale makes a score inspectable: it helps debug a failure, assess the judge, and detect recurring patterns.

### Español
**Pregunta:** En la lección sobre tipos de jueces de evaluación, los objetos `Feedback` devueltos por jueces MLflow contienen un campo `rationale`. ¿Por qué son importantes las justificaciones?

**Opciones:**
- [ ] Se usan exclusivamente para logs y no se muestran en la UI ni se acceden por programación.
- [x] Permiten depurar al explicar por qué falló un ejemplo, ayudan a validar el razonamiento de los jueces y facilitan identificar patrones entre fallas.
- [ ] Sustituyen la necesidad de métricas agregadas al resumir cualitativamente toda la ejecución.
- [ ] Son obligatorias por la API y provocan `ValueError` si faltan.

**Respuesta Correcta:** Permiten depurar al explicar por qué falló un ejemplo, ayudan a validar el razonamiento de los jueces y facilitan identificar patrones entre fallas.

**Justificación:** Una justificación vuelve inspeccionable el puntaje: ayuda a depurar fallas, evaluar al juez y detectar patrones recurrentes.

---

## Question 18 of 20 / Pregunta 18 de 20

### English
**Question:** Which of the following built-in MLflow judges **requires ground truth** (i.e., an `expectations` field in the evaluation dataset) in order to function?

**Options:**
- [x] `Correctness`
- [ ] `RetrievalGroundedness`
- [ ] `RelevanceToQuery`
- [ ] `Safety`

**Correct Answer:** `Correctness`

**Justification:** Correctness compares the output against expected facts or an expected response, so it requires expectation data.

### Español
**Pregunta:** ¿Cuál de los siguientes jueces integrados de MLflow **requiere ground truth** (es decir, un campo `expectations` en el dataset) para funcionar?

**Opciones:**
- [x] `Correctness`
- [ ] `RetrievalGroundedness`
- [ ] `RelevanceToQuery`
- [ ] `Safety`

**Respuesta Correcta:** `Correctness`

**Justificación:** Correctness compara la salida con hechos o una respuesta esperada, por lo que necesita datos de expectativas.

---

## Question 19 of 20 / Pregunta 19 de 20

### English
**Question:** The lecture on MLflow's evaluation framework describes three fundamental components of `mlflow.genai.evaluate()`. Which option correctly identifies all three?

**Options:**
- [ ] Inference tables, OpenTelemetry collectors, and AI Gateway configurations.
- [ ] MLflow experiments, Unity Catalog schemas, and model serving endpoints.
- [ ] Training datasets, loss functions, and hyperparameter configurations.
- [x] Evaluation datasets, scorers (judges), and a predict function.

**Correct Answer:** Evaluation datasets, scorers (judges), and a predict function.

**Justification:** An evaluation supplies examples, one or more scorers to assess outcomes, and a prediction function or equivalent output source.

### Español
**Pregunta:** La lección sobre el framework de evaluación de MLflow describe tres componentes fundamentales de `mlflow.genai.evaluate()`. ¿Cuál identifica correctamente los tres?

**Opciones:**
- [ ] Tablas de inferencia, colectores OpenTelemetry y configuraciones de AI Gateway.
- [ ] Experimentos MLflow, esquemas de Unity Catalog y endpoints de Model Serving.
- [ ] Datasets de entrenamiento, funciones de pérdida e hiperparámetros.
- [x] Datasets de evaluación, scorers (jueces) y una función de predicción.

**Respuesta Correcta:** Datasets de evaluación, scorers (jueces) y una función de predicción.

**Justificación:** Una evaluación proporciona ejemplos, uno o más scorers para valorar los resultados y una función de predicción o fuente equivalente de salidas.

---

## Question 20 of 20 / Pregunta 20 de 20

### English
**Question:** The lecture on best practices describes a feedback loop between offline and online evaluation. Which sequence correctly represents this loop?

**Options:**
- [ ] Collect user feedback → convert feedback to training data → fine-tune the LLM → register the new model → skip offline evaluation to accelerate deployment.
- [x] Deploy to production → enable inference logging → analyze production traces for failures and edge cases → add production examples to the offline dataset → validate improvements offline before re-deploying.
- [ ] Run offline evaluation → publish results to Unity Catalog → wait for user complaints → retrain the model → re-deploy.
- [ ] Enable AI Gateway → run `mlflow.genai.evaluate()` in production → replace the offline dataset with production data → re-deploy without pre-deployment validation.

**Correct Answer:** Deploy to production → enable inference logging → analyze production traces for failures and edge cases → add production examples to the offline dataset → validate improvements offline before re-deploying.

**Justification:** The loop uses production traces to improve the offline dataset, validates changes offline, and then redeploys the improved agent.

### Español
**Pregunta:** La lección sobre buenas prácticas describe un ciclo de retroalimentación entre evaluación offline y online. ¿Qué secuencia lo representa correctamente?

**Opciones:**
- [ ] Recopilar feedback de usuarios → convertirlo en datos de entrenamiento → fine-tuning → registrar el modelo → omitir evaluación offline.
- [x] Desplegar a producción → habilitar logging de inferencia → analizar trazas de producción en busca de fallas y casos límite → agregar ejemplos de producción al dataset offline → validar mejoras offline antes de redesplegar.
- [ ] Ejecutar evaluación offline → publicar en Unity Catalog → esperar quejas → reentrenar → redesplegar.
- [ ] Habilitar AI Gateway → ejecutar `mlflow.genai.evaluate()` en producción → reemplazar el dataset offline con datos de producción → redesplegar sin validación previa.

**Respuesta Correcta:** Desplegar a producción → habilitar logging de inferencia → analizar trazas de producción en busca de fallas y casos límite → agregar ejemplos de producción al dataset offline → validar mejoras offline antes de redesplegar.

**Justificación:** El ciclo usa trazas de producción para mejorar el dataset offline, valida los cambios offline y luego redespliega el agente mejorado.

---

