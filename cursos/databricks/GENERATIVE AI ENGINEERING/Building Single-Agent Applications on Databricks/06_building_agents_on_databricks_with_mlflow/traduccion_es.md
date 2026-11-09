# Creación de agentes en Databricks con MLflow

## Descripción general

MLflow respalda las aplicaciones GenAI mediante seguimiento de experimentos, observabilidad, evaluación, registro de modelos, soporte para despliegue y monitoreo en producción dentro de una plataforma integrada. Estas capacidades cubren el ciclo de vida completo del agente, desde los primeros experimentos hasta el despliegue gobernado y el análisis continuo en producción.

La lección es una introducción a los conceptos básicos de MLflow para agentes. Se concentra en managed MLflow dentro de Databricks y no pretende explicar todos sus componentes ni la experiencia independiente de OSS MLflow.

## Objetivos de aprendizaje

Al finalizar la lección, se debe poder:

- Explicar cómo el experiment tracking de MLflow facilita el desarrollo iterativo de agentes.
- Describir cómo tracing y tagging proporcionan observabilidad.
- Identificar cómo MLflow Model Registry permite despliegues reproducibles y gobernados.
- Analizar los beneficios de integrar MLflow con Unity Catalog para administrar agentes empresariales.

## A. El desafío de desarrollar agentes

Los agentes de producción presentan requisitos que los workflows tradicionales de machine learning no cubren por completo.

### A1. Complejidad de los sistemas de agentes

Los agentes se diferencian de los modelos predictivos tradicionales en varios aspectos:

- **Razonamiento de varios pasos:** una solicitud puede incluir planificación, recuperación, herramientas, llamadas a LLM y decisiones sucesivas.
- **Comportamiento dinámico:** la conducta cambia según el contexto, las herramientas disponibles y el historial de la conversación.
- **Integración de herramientas:** los agentes interactúan con APIs, bases de datos, funciones y otros sistemas externos.
- **Contexto conversacional:** el estado debe conservarse e interpretarse entre múltiples turnos.

Estas características complican el desarrollo, las pruebas, el debugging, el despliegue y el monitoreo en producción.

### A2. Requisitos de observabilidad

La observabilidad de agentes supera el monitoreo tradicional de modelos:

- **Execution tracing:** inspecciona la secuencia de operaciones, las herramientas seleccionadas y los motivos para utilizarlas.
- **Análisis de rendimiento:** mide latencia, consumo de tokens y costo en workflows de varios pasos.
- **Evaluación de calidad:** examina tanto la respuesta final como el razonamiento intermedio y los patrones de uso de herramientas.
- **Diagnóstico de errores:** localiza los fallos y permite determinar sus causas raíz.

Sin esta visibilidad, diagnosticar el comportamiento del agente —especialmente en producción— resulta extremadamente difícil.

### A3. Gobierno y reproducibilidad

El despliegue empresarial también requiere:

- **Gestión de versiones:** rastrear cambios en código, prompts, herramientas, dependencias y configuración.
- **Reproducibilidad:** conservar un comportamiento coherente en desarrollo, staging y producción.
- **Control de acceso:** gobernar quién puede desplegar, modificar, ejecutar o inspeccionar los activos.
- **Audit trails:** conservar registros del comportamiento para cumplimiento y debugging.
- **AI Guardrails:** aplicar políticas de cumplimiento de datos en el nivel del model serving endpoint.

## B. MLflow en Databricks

### B1. Por qué se necesita tracing

#### Inferencia tradicional de solicitud y respuesta

Un flujo de inferencia convencional es relativamente sencillo:

1. El cliente envía una solicitud al handler de un serving endpoint.
2. El handler entrega la solicitud al modelo.
3. El handler devuelve la salida del modelo al cliente.

La entrada y la salida pueden ser los únicos componentes visibles.

Los sistemas de producción también pueden beneficiarse de transparencia en el servidor, métricas de latencia y costo y logging de APIs. Databricks Model Serving y AI Gateway proporcionan estas capacidades de telemetría y gobierno.

Databricks aloja managed MLflow. Configurar el tracking URI como `databricks` registra traces en el workspace y proporciona seguridad, confiabilidad, búsqueda e interfaz administradas. El despliegue mediante Mosaic AI Agent Framework integra tracing en tiempo real y puede habilitar Review App y monitoreo del tráfico de producción.

#### Los agentes necesitan visibilidad del trabajo intermedio

Durante una sola solicitud, un agente puede realizar recuperación, tool calls, llamadas a LLM, validación y generación de la respuesta. El desarrollador necesita conocer entradas, salidas, duración, tokens y metadata de cada operación.

MLflow Tracing captura esta información automáticamente para bibliotecas compatibles como:

- OpenAI SDK.
- LangChain y LangGraph.
- DSPy.

Proporciona APIs y una interfaz para analizar traces durante desarrollo y producción.

#### Qué es un span

Un **span** representa una operación dentro de un sistema de tracing. Registra:

- Hora de inicio y finalización.
- Entradas y salidas.
- Metadata.
- Atributos como el consumo de tokens.
- Errores u otros eventos de la operación.

Los spans de MLflow siguen el estándar OpenTelemetry. La información adicional se almacena como atributos clave-valor y no como campos personalizados arbitrarios.

### B2. Tracing de agentes

Un **trace** de una aplicación GenAI es una colección de spans organizados en una estructura similar a un DAG. Cada span representa una operación, por ejemplo:

- Una llamada a una función.
- Una consulta de base de datos.
- Una solicitud al LLM.
- La ejecución de una herramienta.
- Una operación de recuperación.

Supongamos que un agente tiene tres herramientas de Unity Catalog y responde con lentitud. La interfaz de MLflow puede revelar:

- Qué Foundation Model API se utilizó en cada paso de razonamiento.
- Los system prompts empleados por el agente.
- Si se invocaron herramientas y en qué orden.
- Las entradas y salidas de cada herramienta.
- El razonamiento asociado con cada paso.
- La latencia por operación, lo que permite encontrar la herramienta más lenta o una consulta SQL ineficiente.
- El consumo de tokens por span y el total agregado del trace.

### B3. Estructura jerárquica de spans

MLflow organiza los spans jerárquicamente para reproducir el plan de ejecución:

- Un **root span** representa la solicitud o el workflow completo.
- Los **parent spans** representan operaciones generales, como procesar la solicitud del usuario.
- Los **child spans** representan pasos como invocar un retriever o generar una respuesta.
- Las **relaciones padre-hijo** muestran el flujo real de ejecución.
- Los **span types** como `TOOL`, `CHAT_MODEL` y `RETRIEVER` clasifican las operaciones.

![Trace jerarquico de un agente en MLflow](../assets/images/mlflow_agent_trace_hierarchy.png)

La figura muestra una operación raíz `predict` que contiene `predict_stream`, completions del modelo y `execute_tool`. La completion seleccionada presenta sus entradas y salidas, incluido el motivo de finalización `tool_calls` y la información del modelo.

### B4. Tracing personalizado y tagging

#### Tracing personalizado con `@mlflow.trace`

El decorador `@mlflow.trace` convierte una función en un traced span con instrumentación mínima.

Automáticamente:

- Infiere las relaciones padre-hijo entre funciones instrumentadas.
- Funciona junto con integraciones de auto-tracing como `mlflow.openai.autolog`.
- Captura excepciones como eventos del span.
- Registra nombre de la función, entradas, salidas y duración.

El decorador acepta:

- `name`: reemplaza el nombre predeterminado del span, que normalmente es el de la función.
- `span_type`: asigna un tipo incorporado de MLflow o una cadena personalizada.
- `attributes`: agrega atributos personalizados al span.

#### Tags frente a metadata

- Los **tags** son pares clave-valor flexibles que pueden actualizarse durante el ciclo de vida del trace.
- La **metadata** es inmutable y se establece una sola vez al crear el trace.

![Tags mostrados en la interfaz de traces de MLflow](../assets/images/mlflow_trace_tags.png)

El trace de ejemplo contiene tags como:

- `stage: preprocessing`
- `input_type: question`
- `span_scope: tool_function`
- `trace_version: v1.0.0`
- `component: input_validation`
- `env: dev`

Estos tags facilitan filtrar, clasificar y comparar traces sin modificar la metadata inmutable de creación.

## C. Modelos en Unity Catalog para gobernar agentes

MLflow se integra con Unity Catalog para registrar los agentes como modelos de UC y aplicarles los mismos controles que a otros activos empresariales.

![Empaquetado de un agente con MLflow y registro en Unity Catalog](../assets/images/mlflow_unity_catalog_agent_registration.png)

El flujo ilustrado es el siguiente:

1. El código del agente puede utilizar OpenAI SDK, DSPy, LangChain u otro framework.
2. Las fuentes de datos y las herramientas SQL o Python son recursos gobernados.
3. MLflow empaqueta el agente como un modelo MLflow.
4. El model URI producido durante el logging se utiliza para registrar el agente en Unity Catalog.
5. Unity Catalog gobierna el modelo del agente, las tablas y las funciones utilizadas como herramientas.

La figura resume el logging con este patrón:

```python
with mlflow.start_run():
    mlflow.set_tags(tags_to_register)
    logged_agent_info = mlflow.pyfunc.log_model(
        # Informacion del modelo registrado
    )

model_uri = logged_agent_info.model_uri
```

El registro utiliza el registry URI de Unity Catalog:

```python
mlflow.set_registry_uri("databricks-uc")

mlflow.register_model(
    model_uri=model_uri,
    name=UC_MODEL_NAME,
)
```

El comentario dentro de `log_model` es un marcador porque la figura del curso no proporciona todos los argumentos.

### Gobierno centralizado mediante UC Model Registry

Registrar un agente como modelo de UC proporciona:

- **Gestión de versiones:** MLflow registra un snapshot del código, la configuración y los recursos declarados. Cada versión es inmutable.
- **Lineage:** cuando se registran entradas —por ejemplo, con `mlflow.log_input`— Unity Catalog puede mostrar relaciones entre el modelo y los datasets upstream. Los flujos de Feature Store también pueden aportar lineage.
- **Control de acceso:** privilegios detallados de UC gobiernan los modelos y sus funciones, tablas, conexiones y demás recursos dependientes.
- **Descubrimiento entre workspaces:** los workspaces conectados al mismo metastore pueden descubrir y gobernar los modelos registrados.
- **Governed tags:** claves, valores y permisos de asignación estandarizados permiten una clasificación coherente. La fuente identifica governed tags como public preview.

### Despliegues reproducibles

Unity Catalog y MLflow favorecen la reproducibilidad mediante:

- **Versiones inmutables:** modificar el código o las dependencias requiere una versión nueva; la metadata puede actualizarse sin reescribir el snapshot.
- **Captura de dependencias:** MLflow registra dependencias del ambiente mediante mecanismos como especificaciones pip o conda.
- **Managed serving:** los agentes registrados en UC pueden desplegarse en Model Serving endpoints con escalado, tracing, Review Apps, recopilación de feedback y monitoreo.

## Conclusión

MLflow responde a la complejidad del desarrollo de agentes mediante experiment tracking, tracing jerárquico, tagging, evaluación, empaquetado, registro y observabilidad en producción.

Su integración con Unity Catalog agrega gobierno, seguridad, lineage, control de acceso, versiones inmutables y reproducibilidad para despliegues empresariales.

La siguiente demostración se concentra en realizar tracing de un agente individual con MLflow.

## Conceptos clave para el simulador

- Managed MLflow cubre el ciclo de vida del agente desde la experimentación hasta el monitoreo en producción.
- Los agentes necesitan observabilidad detallada porque una solicitud puede contener múltiples herramientas, modelos, operaciones de recuperación y decisiones.
- Un span representa una operación; un trace es una colección de spans con estructura similar a un DAG.
- Los spans registran tiempo, entradas, salidas, metadata, atributos y eventos.
- Los spans de MLflow siguen el estándar OpenTelemetry.
- Un trace tiene un root span y spans padre e hijos anidados.
- Los span types frecuentes incluyen `TOOL`, `CHAT_MODEL` y `RETRIEVER`.
- MLflow muestra latencia y tokens por span y de forma agregada para el trace.
- `@mlflow.trace` instrumenta una función y captura nombre, entradas, salidas, duración, jerarquía y excepciones.
- El decorador acepta `name`, `span_type` y `attributes`.
- Los tags son pares clave-valor mutables; la metadata queda inmutable después de crear el trace.
- Configurar el tracking URI como `databricks` registra traces en el workspace.
- El código del agente se empaqueta con `mlflow.pyfunc.log_model()` antes de registrarlo.
- `mlflow.set_registry_uri("databricks-uc")` selecciona el Model Registry de Unity Catalog.
- `mlflow.register_model()` registra el agente empaquetado mediante su model URI.
- Las versiones de modelos en UC son snapshots inmutables del código, configuración y recursos declarados.
- La captura de dependencias de MLflow y las versiones inmutables de UC permiten despliegues reproducibles.
- Los privilegios, lineage, descubrimiento entre workspaces y governed tags de UC proporcionan gobierno empresarial.

