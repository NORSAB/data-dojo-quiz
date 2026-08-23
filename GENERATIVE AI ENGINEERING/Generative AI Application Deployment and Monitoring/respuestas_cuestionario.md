# Respuestas del cuestionario

## Datos del examen

- **Examen:** Quiz - Generative AI Application Deployment and Monitoring
- **Número de preguntas:** 20
- **Estado en la plataforma:** Intento completado y calificado
- **Preguntas documentadas:** 20 de 20
- **Respuestas correctas en el intento recibido:** 7 de 20
- **Puntuación obtenida en el intento recibido:** 35 de 100
- **Resultado:** No aprobado; respuestas corregidas en este documento

## Convención de respuesta

Cada pregunta incluye el texto y las opciones originales en inglés, la opción correcta marcada con `[x]`, una justificación en inglés, la traducción completa al español y una explicación en español.

## Registro de preguntas

## Question 1 of 20 / Pregunta 1 de 20

### English

**Question:** In the context of monitoring a GenAI model's responses, what data engineering step must typically occur *after* capturing data in an Inference Table but *before* enabling Lakehouse Monitoring?

**Options:**

- [x] The raw JSON payloads in the Inference Table must be "unpacked" and flattened into a processed table.
- [ ] The Inference Table must be converted into Parquet format.
- [ ] The data must be manually labeled by human reviewers.
- [ ] The table must be dropped and recreated to clear the cache.

### Answer (EN)

**Correct answer:** The raw JSON payloads in the Inference Table must be "unpacked" and flattened into a processed table.

**Justification:** Lakehouse Monitoring requires structured columns from which it can calculate profiles, quality metrics, and drift. The request and response JSON must therefore be unpacked into a processed table.

### Español

**Pregunta:** En el contexto del monitoreo de las respuestas de un modelo GenAI, ¿qué paso de ingeniería de datos debe realizarse normalmente después de capturar los datos en una Inference Table, pero antes de habilitar Lakehouse Monitoring?

**Opciones:**

- [x] Las cargas JSON sin procesar de la Inference Table deben desempaquetarse y aplanarse en una tabla procesada.
- [ ] La Inference Table debe convertirse al formato Parquet.
- [ ] Los datos deben ser etiquetados manualmente por revisores humanos.
- [ ] La tabla debe eliminarse y recrearse para limpiar la caché.

### Respuesta (ES)

**Respuesta correcta:** Las cargas JSON deben desempaquetarse y aplanarse en una tabla procesada.

**Justificación:** Lakehouse Monitoring necesita columnas estructuradas para calcular perfiles, métricas de calidad y deriva.

---

## Question 2 of 20 / Pregunta 2 de 20

### English

**Question:** When "Inference Tables" are enabled in Databricks Model Serving, where are the incoming requests and outgoing responses persistently stored?

**Options:**

- [x] Appended to a Delta table in Unity Catalog.
- [ ] In a proprietary NoSQL database managed by Databricks.
- [ ] Saved as JSON files in the driver node's local storage.
- [ ] In a temporary in-memory cache for 24 hours.

### Answer (EN)

**Correct answer:** Appended to a Delta table in Unity Catalog.

**Justification:** Inference Tables persist serving requests and responses as records in a Delta table governed by Unity Catalog.

### Español

**Pregunta:** Cuando se habilitan las «Inference Tables» en Databricks Model Serving, ¿dónde se almacenan de forma persistente las solicitudes entrantes y las respuestas salientes?

**Opciones:**

- [x] Se agregan a una tabla Delta en Unity Catalog.
- [ ] En una base de datos NoSQL propietaria administrada por Databricks.
- [ ] Como archivos JSON en el almacenamiento local del nodo driver.
- [ ] En una caché temporal en memoria durante 24 horas.

### Respuesta (ES)

**Respuesta correcta:** Se agregan a una tabla Delta en Unity Catalog.

**Justificación:** Las Inference Tables conservan solicitudes y respuestas en una tabla Delta con el gobierno de Unity Catalog.

---

## Question 3 of 20 / Pregunta 3 de 20

### English

**Question:** A data engineer wants to perform batch inference using a Foundation Model served via an API, but needs to invoke it directly from a Databricks SQL environment. Which function allows for this integration?

**Options:**

- [x] `ai_query()`
- [ ] `mlflow_predict()`
- [ ] `db_serving()`
- [ ] `spark_udf()`

### Answer (EN)

**Correct answer:** `ai_query()`

**Justification:** `ai_query()` invokes a Databricks Model Serving endpoint directly from SQL and can be applied to table rows for batch inference.

### Español

**Pregunta:** Un ingeniero de datos desea realizar inferencia por lotes con un Foundation Model servido mediante una API, pero necesita invocarlo directamente desde Databricks SQL. ¿Qué función permite esta integración?

**Opciones:**

- [x] `ai_query()`
- [ ] `mlflow_predict()`
- [ ] `db_serving()`
- [ ] `spark_udf()`

### Respuesta (ES)

**Respuesta correcta:** `ai_query()`

**Justificación:** Esta función invoca un endpoint de Model Serving desde SQL y puede aplicarse a filas de una tabla.

---

## Question 4 of 20 / Pregunta 4 de 20

### English

**Question:** Regarding "Environment Separation" in an MLOps/LLMOps strategy, what approach does the course recommend for scalability and security?

**Options:**

- [ ] Indirect Separation: Using a single Databricks workspace with folder-level permissions.
- [ ] Hybrid Separation: Combining Dev and Staging in one workspace, with Production in another.
- [x] Direct Separation: Using completely separate Databricks workspaces for Development, Staging, and Production.
- [ ] No Separation: Allowing all developers admin access to a single workspace to speed up deployment.

### Answer (EN)

**Correct answer:** Direct Separation: Using completely separate Databricks workspaces for Development, Staging, and Production.

**Justification:** Separate workspaces provide stronger isolation, access control, and independent scaling for each lifecycle environment.

### Español

**Pregunta:** En cuanto a la separación de ambientes en una estrategia MLOps/LLMOps, ¿qué enfoque recomienda el curso para favorecer la escalabilidad y la seguridad?

**Opciones:**

- [ ] Separación indirecta: un solo workspace con permisos por carpeta.
- [ ] Separación híbrida: Desarrollo y Staging juntos, y Producción aparte.
- [x] Separación directa: workspaces completamente separados para Desarrollo, Staging y Producción.
- [ ] Sin separación: todos los desarrolladores son administradores de un único workspace.

### Respuesta (ES)

**Respuesta correcta:** Separación directa mediante workspaces distintos para Desarrollo, Staging y Producción.

**Justificación:** Proporciona mayor aislamiento, control de acceso y escalabilidad independiente.

---

## Question 5 of 20 / Pregunta 5 de 20

### English

**Question:** When configuring Lakehouse Monitoring workflows, what is the specific recommendation for the "Testing" architecture stage?

**Options:**

- [x] Develop integration tests that run a few iterations to ensure all monitoring metrics are working correctly.
- [ ] Use production data to establish a baseline.
- [ ] Only monitor system performance (CPU/RAM), not data quality.
- [ ] Disable all monitoring to save costs.

### Answer (EN)

**Correct answer:** Develop integration tests that run a few iterations to ensure all monitoring metrics are working correctly.

**Justification:** Testing should validate the complete monitoring workflow and confirm that every intended metric is generated correctly before production.

### Español

**Pregunta:** Al configurar flujos de Lakehouse Monitoring, ¿cuál es la recomendación específica para la etapa de arquitectura «Testing»?

**Opciones:**

- [x] Desarrollar pruebas de integración que ejecuten algunas iteraciones para comprobar todas las métricas de monitoreo.
- [ ] Usar datos de producción para establecer una línea base.
- [ ] Monitorear únicamente CPU y RAM, no la calidad de datos.
- [ ] Deshabilitar todo el monitoreo para ahorrar costos.

### Respuesta (ES)

**Respuesta correcta:** Desarrollar pruebas de integración que validen todas las métricas de monitoreo.

**Justificación:** La etapa de Testing comprueba el flujo completo antes de llevarlo a producción.

---

## Question 6 of 20 / Pregunta 6 de 20

### English

**Question:** When scaling batch inference workloads for a Large Language Model with approximately 10 billion parameters at FP32 (32-bit floating precision), what is the estimated GPU RAM requirement per model copy?

**Options:**

- [ ] ~10 GB
- [ ] ~20 GB
- [x] ~40 GB
- [ ] ~80 GB

### Answer (EN)

**Correct answer:** ~40 GB

**Justification:** FP32 uses four bytes per parameter. Ten billion parameters multiplied by four bytes equals approximately 40 GB for one model copy, before additional runtime overhead.

### Español

**Pregunta:** Al escalar inferencia por lotes para un LLM de aproximadamente 10 mil millones de parámetros en FP32, ¿cuánta memoria GPU se estima por copia del modelo?

**Opciones:**

- [ ] ~10 GB
- [ ] ~20 GB
- [x] ~40 GB
- [ ] ~80 GB

### Respuesta (ES)

**Respuesta correcta:** ~40 GB

**Justificación:** FP32 emplea cuatro bytes por parámetro: 10 mil millones × 4 bytes equivalen aproximadamente a 40 GB, sin contar sobrecarga.

---

## Question 7 of 20 / Pregunta 7 de 20

### English

**Question:** In the context of the MLflow and Unity Catalog (UC) integration, how does the Registry specifically facilitate the "Deployment" phase of the lifecycle after a model has been built and tracked?

**Options:**

- [x] It serves as a centralized store using Aliases (e.g., `@champion`, `@challenger`) to manage lifecycle versions and ACLs.
- [ ] It converts the model automatically into ONNX format for edge deployment.
- [ ] It automatically retrains the model using new data in the Delta Lake.
- [ ] It provides a visualization dashboard for training loss curves.

### Answer (EN)

**Correct answer:** It serves as a centralized store using Aliases to manage lifecycle versions and ACLs.

**Justification:** The Registry centralizes governed model versions and uses aliases and permissions to identify and control deployment candidates.

### Español

**Pregunta:** En la integración de MLflow con Unity Catalog, ¿cómo facilita el Registry la fase de despliegue después de construir y rastrear un modelo?

**Opciones:**

- [x] Actúa como almacén centralizado y usa alias, como `@champion` y `@challenger`, para administrar versiones y ACL.
- [ ] Convierte automáticamente el modelo a ONNX para edge deployment.
- [ ] Reentrena automáticamente el modelo con datos nuevos de Delta Lake.
- [ ] Proporciona un panel de curvas de pérdida del entrenamiento.

### Respuesta (ES)

**Respuesta correcta:** Centraliza versiones gobernadas y usa alias y ACL para administrar su ciclo de vida.

**Justificación:** Los alias identifican versiones candidatas y los permisos controlan quién puede administrarlas o desplegarlas.

---

## Question 8 of 20 / Pregunta 8 de 20

### English

**Question:** What is identified as the primary infrastructure challenge when attempting to build Real-time AI Systems versus Batch systems?

**Options:**

- [ ] The lack of available Foundation Models for real-time applications.
- [x] The requirement for fast and scalable serving infrastructure, which is costly to build and maintain.
- [ ] The difficulty in tokenizing text data in real-time.
- [ ] The inability to use Python for real-time requests.

### Answer (EN)

**Correct answer:** The requirement for fast and scalable serving infrastructure, which is costly to build and maintain.

**Justification:** Real-time systems must sustain low latency while scaling with changing demand, creating a more expensive infrastructure challenge than batch processing.

### Español

**Pregunta:** ¿Cuál es el principal desafío de infraestructura al construir sistemas de IA en tiempo real frente a sistemas por lotes?

**Opciones:**

- [ ] La falta de Foundation Models para aplicaciones en tiempo real.
- [x] La necesidad de infraestructura de serving rápida y escalable, costosa de construir y mantener.
- [ ] La dificultad de tokenizar texto en tiempo real.
- [ ] La imposibilidad de usar Python para solicitudes en tiempo real.

### Respuesta (ES)

**Respuesta correcta:** La necesidad de infraestructura de serving rápida y escalable.

**Justificación:** Mantener baja latencia ante demanda variable resulta más complejo y costoso que ejecutar cargas batch.

---

## Question 9 of 20 / Pregunta 9 de 20

### English

**Question:** Databricks Model Serving offers a unified UI and API to manage three specific categories of models. Which list correctly identifies these three categories?

**Options:**

- [ ] Batch Models, Streaming Models, and Real-time Models.
- [x] Custom Models, Foundation Models APIs, and External Models.
- [ ] Internal Models, Third-Party Models, and On-Premise Models.
- [ ] TensorFlow Models, PyTorch Models, and Scikit-Learn Models.

### Answer (EN)

**Correct answer:** Custom Models, Foundation Models APIs, and External Models.

**Justification:** Model Serving provides one interface for custom MLflow models, Databricks-hosted foundation model APIs, and models hosted by external providers.

### Español

**Pregunta:** Databricks Model Serving ofrece una interfaz y API unificadas para administrar tres categorías de modelos. ¿Cuáles son?

**Opciones:**

- [ ] Modelos Batch, Streaming y en tiempo real.
- [x] Custom Models, Foundation Models APIs y External Models.
- [ ] Modelos internos, de terceros y on-premise.
- [ ] Modelos TensorFlow, PyTorch y Scikit-Learn.

### Respuesta (ES)

**Respuesta correcta:** Custom Models, Foundation Models APIs y External Models.

**Justificación:** La plataforma unifica modelos personalizados, APIs de modelos fundacionales y proveedores externos.

---

## Question 10 of 20 / Pregunta 10 de 20

### English

**Question:** Why is the "Deploy Code" pattern recommended over the "Deploy Model" pattern in modern LLMOps architectures?

**Options:**

- [ ] Deploying code is faster because code files are smaller than model artifacts.
- [ ] It allows developers to bypass Git version control.
- [x] It ensures the training/inference pipeline is run in each environment (Dev, Staging, Prod), validating the entire process rather than just moving a static artifact.
- [ ] It eliminates the need for a Model Registry.

### Answer (EN)

**Correct answer:** It ensures the training/inference pipeline is run in each environment, validating the entire process rather than just moving a static artifact.

**Justification:** Deploy Code promotes reproducibility and verifies that code, configuration, dependencies, permissions, and resources work in every target environment.

### Español

**Pregunta:** ¿Por qué se recomienda el patrón «Deploy Code» sobre «Deploy Model» en arquitecturas LLMOps modernas?

**Opciones:**

- [ ] Porque los archivos de código son más pequeños que los artefactos del modelo.
- [ ] Porque permite evitar el control de versiones Git.
- [x] Porque ejecuta el pipeline de entrenamiento o inferencia en cada ambiente y valida el proceso completo, en vez de mover un artefacto estático.
- [ ] Porque elimina la necesidad de un Model Registry.

### Respuesta (ES)

**Respuesta correcta:** Ejecutar y validar el pipeline completo en cada ambiente.

**Justificación:** Así se verifica la reproducibilidad junto con configuración, dependencias, permisos y recursos.

---

## Question 11 of 20 / Pregunta 11 de 20

### English

**Question:** Which Open Source Software (OSS) integration is explicitly highlighted in the course as a "Transformer-friendly" library designed for memory-efficient inference on both NVIDIA® and AMD GPUs?

**Options:**

- [x] vLLM
- [ ] TensorRT
- [ ] MLServer
- [ ] Ray on Spark

### Answer (EN)

**Correct answer:** vLLM

**Justification:** vLLM is highlighted as a transformer-friendly, memory-efficient inference and serving engine with support for NVIDIA and AMD GPUs.

### Español

**Pregunta:** ¿Qué integración OSS destaca el curso como una biblioteca compatible con transformers y diseñada para inferencia eficiente en memoria en GPU NVIDIA y AMD?

**Opciones:**

- [x] vLLM
- [ ] TensorRT
- [ ] MLServer
- [ ] Ray on Spark

### Respuesta (ES)

**Respuesta correcta:** vLLM

**Justificación:** vLLM es un motor de inferencia y serving eficiente en memoria para modelos transformer.

---

## Question 12 of 20 / Pregunta 12 de 20

### English

**Question:** Which MLflow model "flavor" is described as the default model interface that ensures any MLflow Python model can be loaded as a python function, providing the necessary commands to `log_model`, `save_model`, and `predict`?

**Options:**

- [ ] `mlflow.langchain`
- [ ] `mlflow.transformers`
- [ ] `mlflow.spark`
- [x] `mlflow.pyfunc`

### Answer (EN)

**Correct answer:** `mlflow.pyfunc`

**Justification:** The Python Function flavor is MLflow's generic interface for logging, saving, loading, and invoking Python models through a common `predict` contract.

### Español

**Pregunta:** ¿Qué «flavor» de MLflow es la interfaz predeterminada que permite cargar cualquier modelo Python de MLflow como una función y proporciona `log_model`, `save_model` y `predict`?

**Opciones:**

- [ ] `mlflow.langchain`
- [ ] `mlflow.transformers`
- [ ] `mlflow.spark`
- [x] `mlflow.pyfunc`

### Respuesta (ES)

**Respuesta correcta:** `mlflow.pyfunc`

**Justificación:** Es la interfaz Python genérica de MLflow y ofrece un contrato común de predicción.

---

## Question 13 of 20 / Pregunta 13 de 20

### English

**Question:** How does "Packaging" in LLMOps differ significantly from traditional MLOps?

**Options:**

- [ ] LLMOps packaging is handled exclusively by the model provider, removing the need for local packaging.
- [x] LLMOps requires packaging entire applications (including chains, prompts, and API calls) rather than just a single model artifact.
- [ ] LLMOps does not use containers, while MLOps relies heavily on Docker.
- [ ] LLMOps only requires packaging the model weights, whereas MLOps requires code.

### Answer (EN)

**Correct answer:** LLMOps requires packaging entire applications, including chains, prompts, and API calls, rather than just a single model artifact.

**Justification:** A GenAI application's behavior depends on orchestration logic and external resources in addition to model weights, so the deployable unit often represents the whole application.

### Español

**Pregunta:** ¿En qué se diferencia significativamente el «Packaging» de LLMOps respecto del MLOps tradicional?

**Opciones:**

- [ ] El proveedor del modelo se encarga exclusivamente del empaquetado.
- [x] LLMOps requiere empaquetar aplicaciones completas, incluidas cadenas, prompts y llamadas API, no solo un artefacto de modelo.
- [ ] LLMOps no usa contenedores, mientras que MLOps sí.
- [ ] LLMOps solo empaqueta pesos y MLOps requiere código.

### Respuesta (ES)

**Respuesta correcta:** Empaquetar la aplicación completa, incluidas cadenas, prompts y llamadas API.

**Justificación:** El comportamiento depende de la orquestación y de recursos externos, no únicamente de los pesos del modelo.

---

## Question 14 of 20 / Pregunta 14 de 20

### English

**Question:** When selecting a deployment paradigm, which set of characteristics indicates that Batch Deployment is the most appropriate strategy for a GenAI application?

**Options:**

- [x] The pace of input records is slower than 30 minutes, volume is high, and immediate predictions are not necessary.
- [ ] Requests are asynchronous and require micro-batch processing with moderate latency.
- [ ] Throughput requirements are low, and the model must run on an embedded edge device.
- [ ] Low latency is required, and predictions must be generated instantly for individual requests.

### Answer (EN)

**Correct answer:** The pace of input records is slower than 30 minutes, volume is high, and immediate predictions are not necessary.

**Justification:** Batch deployment is appropriate when many records can be processed together and the application does not require an immediate response for each record.

### Español

**Pregunta:** ¿Qué características indican que Batch Deployment es la estrategia más apropiada para una aplicación GenAI?

**Opciones:**

- [x] Los registros llegan con una frecuencia superior a 30 minutos, el volumen es alto y no se necesitan predicciones inmediatas.
- [ ] Las solicitudes son asíncronas y requieren micro-batches con latencia moderada.
- [ ] El throughput es bajo y el modelo debe ejecutarse en un dispositivo edge.
- [ ] Se requiere latencia de milisegundos y predicción instantánea por solicitud.

### Respuesta (ES)

**Respuesta correcta:** Alto volumen, ritmo lento de entrada y ausencia de necesidad de respuesta inmediata.

**Justificación:** Batch procesa muchos registros juntos cuando la baja latencia no es un requisito.

---

## Question 15 of 20 / Pregunta 15 de 20

### English

**Question:** What is the primary function of Databricks Asset Bundles (DABs)?

**Options:**

- [ ] To compress large datasets for faster transfer.
- [ ] To serve as a replacement for the Unity Catalog.
- [ ] To automatically fine-tune LLMs without user intervention.
- [x] To enable "write code once, deploy everywhere" using YAML configurations for artifacts, resources, and CI/CD.

### Answer (EN)

**Correct answer:** To enable "write code once, deploy everywhere" using YAML configurations for artifacts, resources, and CI/CD.

**Justification:** DABs define source files and Databricks resources as code so the same project can be validated and deployed consistently across environments.

### Español

**Pregunta:** ¿Cuál es la función principal de Databricks Asset Bundles (DABs)?

**Opciones:**

- [ ] Comprimir grandes datasets para transferirlos más rápido.
- [ ] Reemplazar Unity Catalog.
- [ ] Afinar LLM automáticamente sin intervención del usuario.
- [x] Permitir «escribir el código una vez y desplegarlo en todas partes» mediante YAML para artefactos, recursos y CI/CD.

### Respuesta (ES)

**Respuesta correcta:** Definir con YAML los artefactos y recursos para desplegarlos consistentemente mediante CI/CD.

**Justificación:** Los DAB permiten administrar proyectos y recursos de Databricks como código reutilizable entre ambientes.

---

## Question 16 of 20 / Pregunta 16 de 20

### English

**Question:** When conceptualizing "Packaging" for Generative AI deployment compared to traditional ML, the course emphasizes that ML logic takes on new forms. Which component constitutes a valid "model" or "pipeline" that can be packaged and managed via MLflow for GenAI?

**Options:**

- [x] An engineered prompt template, a LangChain "chain," or a lightweight call to an external LLM API service.
- [ ] The raw training dataset and the tokenization vocabulary file.
- [ ] Only locally hosted Foundation Models running on GPUs.
- [ ] Only binary model weights.

### Answer (EN)

**Correct answer:** An engineered prompt template, a LangChain chain, or a lightweight call to an external LLM API service.

**Justification:** MLflow can package the Python logic that defines a GenAI application's behavior even when that logic is a prompt, an orchestration chain, or a call to a remotely hosted model.

### Español

**Pregunta:** Al conceptualizar el empaquetado para GenAI, ¿qué componente constituye un «modelo» o «pipeline» válido que MLflow puede empaquetar y administrar?

**Opciones:**

- [x] Una plantilla de prompt diseñada, una cadena de LangChain o una llamada ligera a una API externa de LLM.
- [ ] El dataset de entrenamiento sin procesar y el vocabulario de tokenización.
- [ ] Únicamente Foundation Models alojados localmente en GPU.
- [ ] Únicamente pesos binarios del modelo.

### Respuesta (ES)

**Respuesta correcta:** Una plantilla de prompt, una cadena de LangChain o una llamada a una API externa de LLM.

**Justificación:** MLflow puede empaquetar la lógica Python que define el comportamiento de la aplicación, aunque el modelo se aloje externamente.

---

## Question 17 of 20 / Pregunta 17 de 20

### English

**Question:** In a recommended LLMOps architecture, what is the role of "Human Feedback" that distinguishes it from traditional MLOps monitoring?

**Options:**

- [ ] It is used solely for regulatory compliance audits.
- [ ] It replaces automated testing entirely in the Staging environment.
- [ ] It is only required during the pre-training phase of the Foundation Model.
- [x] It serves as an important datasource from Dev to Prod for evaluation, iteration, and augmenting traditional monitoring.

### Answer (EN)

**Correct answer:** It serves as an important datasource from Dev to Prod for evaluation, iteration, and augmenting traditional monitoring.

**Justification:** Human feedback supplies qualitative signals about usefulness and safety that automated operational metrics alone cannot fully capture.

### Español

**Pregunta:** En una arquitectura LLMOps recomendada, ¿qué función cumple el «Human Feedback» que la distingue del monitoreo MLOps tradicional?

**Opciones:**

- [ ] Se usa solamente en auditorías regulatorias.
- [ ] Reemplaza todas las pruebas automáticas en Staging.
- [ ] Solo se requiere durante el preentrenamiento del Foundation Model.
- [x] Es una fuente de datos importante desde Desarrollo hasta Producción para evaluar, iterar y complementar el monitoreo tradicional.

### Respuesta (ES)

**Respuesta correcta:** Es una fuente de datos continua para evaluación, iteración y monitoreo.

**Justificación:** Aporta señales cualitativas de utilidad y seguridad que las métricas operativas no capturan por completo.

---

## Question 18 of 20 / Pregunta 18 de 20

### English

**Question:** Which feature of Databricks Model Serving directly enables "Serverless" operations, allowing the system to handle unpredictable traffic spikes without manual infrastructure management?

**Options:**

- [ ] Built-in A/B testing.
- [ ] Integration with Feature Store.
- [ ] Support for MLflow flavors.
- [x] Autoscaling and scale-to-zero compute.

### Answer (EN)

**Correct answer:** Autoscaling and scale-to-zero compute.

**Justification:** Autoscaling adds or removes serving capacity according to traffic, while scale-to-zero eliminates active compute when the endpoint is idle.

### Español

**Pregunta:** ¿Qué característica de Databricks Model Serving habilita directamente operaciones serverless y permite manejar picos impredecibles sin administrar infraestructura manualmente?

**Opciones:**

- [ ] Pruebas A/B integradas.
- [ ] Integración con Feature Store.
- [ ] Compatibilidad con flavors de MLflow.
- [x] Autoscaling y cómputo scale-to-zero.

### Respuesta (ES)

**Respuesta correcta:** Autoscaling y scale-to-zero.

**Justificación:** La capacidad se adapta automáticamente al tráfico y puede reducirse a cero cuando el endpoint está inactivo.

---

## Question 19 of 20 / Pregunta 19 de 20

### English

**Question:** What is the primary purpose of Databricks Lakehouse Monitoring when applied to data and ML pipelines?

**Options:**

- [ ] To manage the CI/CD deployment of Asset Bundles.
- [x] To provide automated insights and out-of-the-box metrics, such as profile and drift metrics, via generated dashboards.
- [ ] To retrain models automatically when accuracy drops below a threshold.
- [ ] To serve as a vector database for RAG applications.

### Answer (EN)

**Correct answer:** To provide automated insights and out-of-the-box metrics, such as profile and drift metrics, via generated dashboards.

**Justification:** Lakehouse Monitoring analyzes tables over time and generates quality, profile, and drift metrics together with dashboards for observation.

### Español

**Pregunta:** ¿Cuál es el propósito principal de Databricks Lakehouse Monitoring al aplicarlo a pipelines de datos y ML?

**Opciones:**

- [ ] Administrar despliegues CI/CD de Asset Bundles.
- [x] Proporcionar insights automáticos y métricas listas para usar, como perfil y deriva, mediante dashboards generados.
- [ ] Reentrenar modelos automáticamente cuando baja la exactitud.
- [ ] Servir como base de datos vectorial para aplicaciones RAG.

### Respuesta (ES)

**Respuesta correcta:** Proporcionar insights, métricas de perfil y deriva, y dashboards generados automáticamente.

**Justificación:** Lakehouse Monitoring observa la calidad y los cambios de los datos o predicciones a lo largo del tiempo.

---

## Question 20 of 20 / Pregunta 20 de 20

### English

**Question:** To support online evaluation strategies such as Canary Deployments or A/B testing, how does Databricks Model Serving manage traffic distribution?

**Options:**

- [x] It allows serving multiple models, such as `@champion` and `@challenger`, behind a single serving endpoint with configurable traffic splits.
- [ ] It uses `ai_query()` to determine which model version to call based on the user ID.
- [ ] It requires deploying separate endpoints for each model version and managing routing via a load balancer.
- [ ] It randomly assigns requests to models based on GPU availability.

### Answer (EN)

**Correct answer:** It allows serving multiple models behind a single serving endpoint with configurable traffic splits.

**Justification:** A single endpoint can expose multiple served entities and route configured percentages of traffic to each one, enabling controlled canary releases and A/B comparisons.

### Español

**Pregunta:** Para admitir estrategias de evaluación en línea como Canary Deployments o pruebas A/B, ¿cómo administra Databricks Model Serving la distribución del tráfico?

**Opciones:**

- [x] Permite servir varios modelos, como `@champion` y `@challenger`, detrás de un único endpoint con porcentajes de tráfico configurables.
- [ ] Usa `ai_query()` para escoger la versión según el identificador del usuario.
- [ ] Exige endpoints separados y un balanceador externo.
- [ ] Asigna solicitudes aleatoriamente según la disponibilidad de GPU.

### Respuesta (ES)

**Respuesta correcta:** Sirve varios modelos detrás de un endpoint único con divisiones de tráfico configurables.

**Justificación:** Los porcentajes controlados permiten despliegues canary y comparaciones A/B sin crear un endpoint independiente por versión.
