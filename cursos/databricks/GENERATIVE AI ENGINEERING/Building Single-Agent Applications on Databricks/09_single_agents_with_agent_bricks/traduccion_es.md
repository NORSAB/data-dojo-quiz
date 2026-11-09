# Agentes individuales con Agent Bricks

## Descripción general

Agent Bricks es una abstracción de alto nivel para construir y optimizar rápidamente agentes de IA específicos de un dominio y preparados para producción. Da prioridad a la evaluación y optimización automáticas, incluido **Agent Learning on Human Feedback (ALHF)**, mientras equilibra calidad y costo.

El desarrollo tradicional de agentes puede necesitar mucha configuración manual, benchmarks, trabajo con prompts, selección de modelos y optimización. Agent Bricks traslada buena parte de ese trabajo técnico a un proceso administrado para que el usuario se concentre en:

- El problema empresarial.
- Los datos de la organización.
- Las herramientas y los agentes colaboradores.
- Los criterios y métricas de calidad.
- El feedback de expertos del dominio.

## Objetivos de aprendizaje

Al finalizar la lección, se debe poder:

- Comprender el ciclo de vida de Agent Bricks y su optimización iterativa.
- Identificar los cuatro tipos principales admitidos y sus casos de uso.
- Explicar la diferencia entre las categorías operativas automatizada e interactiva.
- Describir las estrategias para equilibrar costo y rendimiento.
- Reconocer las capacidades incorporadas de evaluación y monitoreo.

## A. Introducción a Agent Bricks

Agent Bricks abstrae gran parte de la complejidad de implementación sin eliminar la flexibilidad necesaria para aplicaciones empresariales. La idea central es que el usuario defina el problema, proporcione datos gobernados relevantes y establezca objetivos de calidad; la plataforma se encarga de la optimización, evaluación y puesta en producción.

![Optimizacion de costo y calidad con Agent Bricks](../assets/images/agent_bricks_cost_quality_optimization.png)

El proceso general de la figura es:

1. Seleccionar una tarea y proporcionar una descripción de alto nivel del agente deseado.
2. Agent Bricks crea benchmarks de evaluación y optimiza automáticamente el agente para costo y calidad.
3. Desplegar el resultado y continuar iterando sobre su calidad.

La curva de costo y calidad representa el objetivo: mejorar la calidad sin incurrir en costos innecesarios, en lugar de seleccionar manualmente una sola configuración antes de evaluar el sistema.

### A1. Tipos de agentes y casos de uso

La lección identifica cuatro tipos principales de Agent Bricks.

| Tipo principal | Abreviatura | Uso previsto |
|---|---|---|
| **Information Extraction** | IE | Extrae automáticamente información estructurada de documentos, PDF, correos e imágenes no estructurados. |
| **Custom LLM** | CLLM | Produce un modelo de lenguaje específico del dominio, ajustado y optimizado para una tarea y un dataset determinados. |
| **Knowledge Assistant** | KA | Proporciona preguntas y respuestas interactivas sobre una base de conocimiento mediante RAG. Es un agente individual cuyo tool calling está restringido a la aplicación RAG. |
| **Multi-Agent Supervisor** | MAS | Coordina agentes especializados y herramientas para tareas complejas de varios pasos. También puede configurarse con herramientas y sin agentes adicionales, actuando así como agente individual con un toolkit. |

#### Genie Agent

Genie Agent permite consultar bases de datos y otros datos estructurados mediante lenguaje natural. Puede funcionar como agente individual independiente o ser orquestado por un Multi-Agent Supervisor.

> **Nota de clasificación:** la fuente afirma de forma consistente que Agent Bricks posee cuatro tipos principales y después presenta Genie Agent por separado. Esta versión conserva la distinción en lugar de convertir Genie silenciosamente en un quinto tipo principal.

### A2. Categorías operativas

![Categorias automatizadas e interactivas de Agent Bricks](../assets/images/agent_bricks_automated_interactive_types.png)

Agent Bricks agrupa sus capacidades en dos modelos operativos.

#### Automated Bricks

- Information Extraction.
- Custom LLM.

Están optimizados para procesamiento batch a gran escala con intervención humana mínima. Priorizan throughput y eficiencia de costo-rendimiento.

#### Interactive Bricks

- Knowledge Assistant.
- Multi-Agent Supervisor.
- Genie Agent.

Están diseñados para interacción en tiempo real y workflows human-in-the-loop. Priorizan interfaces conversacionales y generación dinámica de respuestas.

## B. Ciclo de desarrollo de Agent Bricks

El proceso sigue un ciclo estructurado que comienza con la definición del problema y continúa con optimización automática, despliegue, medición, feedback y refinamiento.

### B1. Ciclo de tres pasos

#### Paso 1: especificar el problema

El usuario comienza definiendo un agente para un caso de negocio concreto. Por ejemplo, un Multi-Agent Supervisor puede configurarse como un agente individual administrado que utiliza únicamente un Genie Agent como herramienta.

La preparación incluye:

- Definir con el equipo la tarea y los resultados esperados.
- Seleccionar uno de los cuatro tipos principales.
- Proporcionar datos administrados por Unity Catalog, como tablas Delta o UC Volumes, cuando corresponda.
- Adjuntar herramientas u otros agentes según el caso de uso.
- Establecer permisos.
- Definir criterios de éxito y métricas de calidad.

![Arquitectura del control plane de Agent Bricks](../assets/images/agent_bricks_control_plane_architecture.png)

La figura muestra:

1. Datos y prompts, junto con herramientas y agentes, se proporcionan mediante la configuración de la interfaz.
2. Unity Catalog verifica la identidad del usuario y gobierna el acceso.
3. MLflow registra experimentos y métricas.
4. El procesamiento adicional depende del tipo de agente seleccionado.

#### Paso 2: optimizar con datos empresariales

Agent Bricks construye y optimiza automáticamente el sistema según el equilibrio entre calidad y costo.

Crea benchmarks de evaluación relacionados con la tarea. Entre los ejemplos de métricas indicados aparecen exactitud, relevancia de productos y predicción de abandono de clientes.

La optimización puede combinar:

- Optimización avanzada de prompts.
- Fine-tuning selectivo según la tarea y los datos disponibles.
- Selección y configuración de herramientas.
- Custom LLM Judges para evaluar calidad.
- Filtrado mediante Reward Models para mejorar respuestas.
- Reinforcement Learning from Human Feedback cuando resulte beneficioso.

#### Paso 3: mejorar continuamente

Después de la optimización, el agente entra en un ciclo iterativo de producción:

1. Desplegar el agente optimizado.
2. Medir la calidad mediante evaluación automática y humana.
3. Identificar problemas y oportunidades de mejora.
4. Aplicar feedback expresado en lenguaje natural.
5. Utilizar ALHF para mejorar la siguiente iteración.

![Ciclo de despliegue y mejora de calidad](../assets/images/agent_bricks_quality_improvement_cycle.png)

La figura muestra a expertos del dominio revisando consultas predefinidas, asignando etiquetas graduadas y proporcionando orientación en lenguaje natural mediante Review App. Se mide la calidad, se identifican problemas, se aplica feedback y se repite el ciclo.

### B2. Evaluación y monitoreo

Agent Bricks integra evaluación y monitoreo durante todo el ciclo de vida.

#### Integración automática con MLflow

Todo agente desplegado mediante Agent Bricks incluye seguimiento administrado de:

- **Solicitudes:** requests entrantes, timestamps y contexto del usuario.
- **Respuestas:** salidas, incluida la información disponible de confianza y razonamiento.
- **Comunicación entre agentes:** interacciones dentro de sistemas multiagente.
- **Rendimiento:** latencia, throughput y utilización de recursos.

#### Mecanismos para evaluar calidad

- **Creación automática de benchmarks:** métricas adaptadas a la tarea.
- **Evaluación con LLM Judges:** modelos especializados puntúan la calidad de las respuestas.
- **Feedback humano:** expertos proporcionan información estructurada mediante review applications.
- **Monitoreo de producción:** seguimiento del rendimiento en vivo.
- **Análisis comparativo:** comparación con modelos base y versiones anteriores.

## C. Integración con servicios de Databricks

Agent Bricks se integra con la plataforma de Databricks para creación, gobierno, evaluación, despliegue y consumo end-to-end.

![Integraciones y opciones de consumo de Agent Bricks](../assets/images/agent_bricks_databricks_integrations.png)

La figura muestra datos estructurados y no estructurados gobernados por Unity Catalog que alimentan Agent Bricks. Las capacidades resultantes pueden utilizarse mediante:

- Batch inference.
- Databricks Apps.
- Lakeflow Spark Declarative Pipelines.
- AI Playground.
- Aplicaciones externas.

### Relación con el stack de Databricks

| Servicio | Función |
|---|---|
| **Mosaic AI Model Serving** | Despliega agentes como REST APIs escalables con autenticación, load balancing, monitoreo, tracing y evaluación de calidad. |
| **Vector Search** | Recupera información no estructurada para RAG y búsqueda semántica en documentos y tablas. |
| **Unity Catalog** | Gobierna datos, modelos, agentes, herramientas, lineage, acceso y cumplimiento. |
| **Genie y Genie Spaces** | Permiten interactuar en lenguaje natural con datos estructurados y participar en arquitecturas de tool calling o multiagente. |
| **MLflow 3** | Proporciona experiment tracking, versionado, tracing, evaluación, debugging y medición automática mediante LLM judges. |
| **Databricks Apps** | Ofrece interfaces de chat, portales de feedback y dashboards de producción para usuarios y stakeholders. |

## Conclusión

Agent Bricks proporciona una vía administrada para crear agentes específicos de un dominio a partir de datos empresariales. Su valor proviene de combinar definición de tareas de alto nivel, benchmarks automáticos, optimización de costo y calidad, feedback de expertos, despliegue administrado, gobierno y evaluación continua.

La plataforma admite sistemas batch automatizados y agentes interactivos. La integración con Unity Catalog, MLflow, Vector Search, Model Serving, Genie y Databricks Apps permite mover un agente desde la configuración hasta el uso gobernado en producción dentro del mismo ecosistema.

## Conceptos clave para el simulador

- Agent Bricks es una abstracción de alto nivel para crear y optimizar agentes específicos de un dominio.
- El usuario se concentra en problema, datos, herramientas, métricas y feedback; Agent Bricks administra buena parte de la evaluación y optimización.
- Los cuatro tipos principales son Information Extraction, Custom LLM, Knowledge Assistant y Multi-Agent Supervisor.
- Genie Agent se presenta por separado y puede funcionar solo o bajo Multi-Agent Supervisor.
- Information Extraction y Custom LLM pertenecen a la categoría automatizada.
- Knowledge Assistant, Multi-Agent Supervisor y Genie pertenecen a la categoría interactiva.
- Automated Bricks prioriza batch scale, throughput y costo-rendimiento.
- Interactive Bricks prioriza conversación en tiempo real y workflows human-in-the-loop.
- Knowledge Assistant es un agente individual cuyo tool calling se restringe a la aplicación RAG.
- Multi-Agent Supervisor puede actuar como agente individual cuando tiene herramientas y ningún agente adicional.
- El paso 1 define tarea, tipo de agente, datos, herramientas o agentes, permisos, criterios y métricas.
- El paso 2 crea benchmarks y optimiza automáticamente el equilibrio entre costo y calidad.
- La optimización puede utilizar prompts, fine-tuning selectivo, selección de herramientas, LLM Judges, Reward Models y RLHF.
- El paso 3 despliega, mide calidad, identifica problemas, aplica feedback en lenguaje natural y utiliza ALHF.
- MLflow registra automáticamente solicitudes, respuestas, comunicación entre agentes y métricas de rendimiento.
- Los mecanismos de calidad incluyen benchmarks, LLM Judges, feedback humano, monitoreo de producción y análisis comparativo.
- Unity Catalog gobierna datos, herramientas, agentes, permisos y lineage.
- Agent Bricks se integra con Model Serving, Vector Search, Genie, MLflow 3 y Databricks Apps.
- Las opciones de consumo incluyen batch inference, Databricks Apps, Lakeflow Spark Declarative Pipelines, AI Playground y aplicaciones externas.

