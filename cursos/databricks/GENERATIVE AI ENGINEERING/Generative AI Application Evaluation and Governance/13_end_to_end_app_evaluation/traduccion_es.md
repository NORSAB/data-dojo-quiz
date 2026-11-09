# Evaluación end-to-end de aplicaciones

## Alcance de la evaluación

![Arquitectura de un sistema de IA](../assets/images/ai_system_architecture_components.png)

Una aplicación de IA generativa es un sistema formado por componentes que interactúan. En una aplicación RAG pueden intervenir la segmentación de documentos, los embeddings, la recuperación, el reranking, la generación y el flujo que utiliza el usuario. Una estrategia sólida de evaluación trabaja, por tanto, en dos niveles:

1. Evaluar cada componente para localizar debilidades.
2. Evaluar el sistema completo para determinar si entrega valor a un costo aceptable.

## Medidas del sistema completo

![Evaluación del sistema completo](../assets/images/evaluating_whole_system_cost_performance.png)

| Dimensión | Medidas habituales | Pregunta que responde |
|---|---|---|
| Costo | Recursos de cómputo, consumo de infraestructura y tiempo de procesamiento | ¿La solución es sostenible económica y operativamente? |
| Rendimiento y valor | Utilidad, éxito de la tarea y valor directo o indirecto | ¿La aplicación resuelve el problema previsto? |
| Resultados personalizados del negocio | Latencia, costo total, demanda del producto y satisfacción del cliente | ¿El sistema cumple las metas y restricciones de la organización? |

No basta con optimizar una sola métrica técnica. El mejor sistema es el que equilibra calidad, valor, latencia, riesgo y costo para el caso de uso real.

## Evaluación de un pipeline RAG

![Componentes RAG que deben evaluarse](../assets/images/evaluating_rag_pipeline_components.png)

| Componente | Enfoque de evaluación |
|---|---|
| Chunking | Método, tamaño de los fragmentos y preservación del contexto útil |
| Modelo de embeddings | Representación semántica y adecuación para la recuperación |
| Vector store | Calidad del retrieval y comportamiento del reranker |
| Generador | Calidad de la respuesta final basada en el contexto recuperado |
| Pipeline completo | Calidad end-to-end, latencia, costo y valor para el usuario |

Cada componente debe evaluarse por separado y, después, en conjunto con los demás.

## Modelo de evaluación RAG

![Query, contexto, respuesta y ground truth](../assets/images/rag_evaluation_relationships.png)

La evaluación RAG relaciona cuatro elementos:

- **Query:** solicitud del usuario.
- **Context:** información recuperada para responder.
- **Response:** respuesta generada.
- **Ground Truth:** respuesta esperada o validada.

### Métricas de recuperación

| Métrica | Elementos comparados | Pregunta principal |
|---|---|---|
| Context Precision | Query + contextos recuperados | ¿Los fragmentos relevantes se clasifican por encima del ruido irrelevante? |
| Context Relevancy | Query + contextos recuperados | ¿El material recuperado aborda la consulta? |
| Context Recall | Ground truth + contextos recuperados | ¿Se recuperó toda la información necesaria? |

### Context Precision — precisión del contexto

![Context Precision](../assets/images/context_precision.png)

Mide la relación señal-ruido del contexto recuperado. Comprueba si los chunks o nodos relevantes aparecen mejor clasificados que los irrelevantes.

Una recuperación puede contener la información correcta y aun así tener precisión baja cuando esa información queda enterrada entre muchos fragmentos que no ayudan a contestar.

### Context Relevancy — relevancia del contexto

![Context Relevancy](../assets/images/context_relevancy.png)

Mide cuánto se relaciona el contexto recuperado con la consulta. Se concentra en la alineación temática y no necesariamente en la exactitud factual. Un texto puede tratar exactamente el tema solicitado y, sin embargo, contener errores.

### Context Recall — cobertura del contexto

![Context Recall](../assets/images/context_recall.png)

Mide hasta qué punto se recuperaron todas las entidades y piezas de información pertinentes incluidas en el ground truth. Un recall alto implica que el contexto contiene todos los datos necesarios; uno bajo indica que faltan elementos importantes.

### Métricas de generación

| Métrica | Elementos comparados | Pregunta principal |
|---|---|---|
| Faithfulness | Respuesta + contextos recuperados | ¿Cada afirmación está respaldada por el contexto proporcionado? |
| Answer Relevancy | Query + respuesta | ¿La respuesta atiende la intención real del usuario? |
| Answer Correctness | Ground truth + respuesta | ¿La respuesta es semántica y factualmente correcta? |

### Faithfulness — fidelidad al contexto

![Faithfulness](../assets/images/faithfulness.png)

Mide si la respuesta generada está respaldada de manera factual por el contexto recuperado. Esta métrica evalúa grounding, no verdad externa. Si la respuesta contradice el contexto suministrado, su fidelidad es baja aunque la afirmación pudiera coincidir con otra fuente externa.

### Answer Relevancy — relevancia de la respuesta

![Answer Relevancy](../assets/images/answer_relevancy.png)

Mide cuán pertinente y aplicable es la respuesta para la consulta inicial. Distingue una contestación específica y útil de una afirmación vaga que solo está relacionada con el tema.

Por ejemplo, ante «¿Por qué es conocido Einstein?», mencionar la teoría de la relatividad tiene relevancia alta; responder solamente que «fue un científico» es demasiado genérico.

### Answer Correctness — exactitud de la respuesta

![Answer Correctness](../assets/images/answer_correctness.png)

Mide la exactitud de la respuesta al compararla directamente con el ground truth. Puede combinar similitud semántica y coincidencia factual.

Si la referencia indica que Einstein recibió el Premio Nobel de Física en 1921 por explicar el efecto fotoeléctrico, una respuesta correcta debe conservar esos hechos. Atribuirlo a la relatividad en la década de 1930 produciría una exactitud baja.

## Diferencias que conviene memorizar

| Par de conceptos | Diferencia |
|---|---|
| Precision frente a recall | Precision reduce contenido irrelevante; recall evita omitir contenido necesario. |
| Relevancy frente a correctness | Relevancy indica si se responde al tema; correctness comprueba la verdad contra el ground truth. |
| Faithfulness frente a correctness | Faithfulness verifica respaldo en el contexto recuperado; correctness compara con hechos validados. |
| Calidad de componentes frente a calidad del sistema | Componentes fuertes no garantizan por sí solos valor, latencia o costo end-to-end aceptables. |

## Métricas personalizadas

![Métricas personalizadas para el sistema](../assets/images/custom_system_metrics_business_goals.png)

Las métricas estándar no siempre representan el objetivo real del negocio. Pueden requerirse medidas propias como:

- Latencia de serving.
- Costo operativo total.
- Satisfacción del cliente.
- Conversión o aumento en la demanda.
- Cumplimiento de un tono o grado de profesionalismo.

Una métrica personalizada puede aplicarse al sistema completo o a un componente individual.

### Evaluación personalizada con MLflow

![Métricas personalizadas en MLflow](../assets/images/custom_metrics_mlflow.png)

MLflow permite definir una métrica LLM con nombre, descripción, rúbrica, ejemplos puntuados, modelo juez, parámetros de inferencia, agregaciones y dirección de la puntuación. La diapositiva muestra una métrica de profesionalismo creada con `mlflow.metrics.genai.make_genai_metric`.

LLM-as-a-judge permite escalar este tipo de evaluación, aunque la revisión humana continúa siendo importante en casos ambiguos o de alto impacto.

## Evaluación offline y online

![Evaluación offline frente a online](../assets/images/offline_vs_online_evaluation.png)

| Evaluación offline | Evaluación online |
|---|---|
| Se realiza antes del lanzamiento o en un entorno estático de pruebas. | Se realiza después del despliegue con interacciones de producción. |
| Utiliza benchmarks, métricas por tarea, ground truth o jueces LLM. | Utiliza conducta real, pruebas A/B, feedback directo y señales indirectas. |
| Ayuda a decidir si una versión está lista. | Revela si los usuarios reciben valor y permite detectar drift. |

Ambas modalidades forman un ciclo: la evidencia de producción debe mejorar los datasets, las rúbricas y los experimentos offline posteriores.

## Feedback humano

![Feedback explícito e implícito](../assets/images/human_feedback_explicit_implicit.png)

Los desarrolladores no siempre son expertos en el dominio. Por ello, las salidas pueden requerir evaluación de especialistas y deben almacenarse de forma estructurada junto con el feedback asociado.

- **Feedback explícito:** puntuaciones, comentarios, reseñas y evaluaciones deliberadas.
- **Feedback implícito:** engagement, abandono, consultas repetidas, clics y otras conductas observables.

El feedback humano sigue siendo indispensable incluso cuando la evaluación automática mediante LLM es avanzada.

## Evaluación continua y monitoreo

![Evaluación continua de componentes](../assets/images/ongoing_component_evaluation.png)

Los sistemas y componentes deben monitorearse de manera continua para detectar drift de datos, drift de componentes y degradación del rendimiento end-to-end. La lección señala **Lakehouse Monitoring** como solución de Databricks para integrar señales de serving, llamadas API, solicitudes, interacciones y otros datos operativos.

## Mosaic AI Agent Framework

![Mosaic AI Agent Framework](../assets/images/mosaic_ai_agent_framework_overview.png)

Mosaic AI Agent Framework reúne herramientas para construir, desplegar, evaluar, gobernar y mejorar continuamente aplicaciones de IA generativa compuestas, entre ellas sistemas RAG y cadenas de agentes.

Sus objetivos principales son:

1. Evaluar eficazmente la calidad de una aplicación RAG.
2. Probar hipótesis, iterar y volver a desplegar con rapidez.
3. Aplicar gobierno y guardrails para mantener la calidad en producción.

### Funciones de Agent Evaluation

![Funciones de Agent Evaluation](../assets/images/mosaic_ai_agent_evaluation_features.png)

- Trazar el comportamiento del agente en cada paso.
- Evaluar la calidad de la cadena mediante métricas RAG compartidas entre el desarrollo offline y el monitoreo online.
- Recoger feedback humano con una Review App.
- Utilizar Databricks LLM Judges para evaluar la calidad RAG e identificar la causa raíz de resultados deficientes.

## Secuencia práctica de evaluación

1. Definir objetivos del usuario y del negocio, restricciones y costos aceptables.
2. Crear un dataset offline representativo.
3. Medir por separado los componentes de recuperación y generación.
4. Evaluar el pipeline completo con métricas end-to-end y personalizadas.
5. Revisar casos importantes con expertos del dominio.
6. Desplegar con cautela y recoger feedback explícito e implícito.
7. Monitorear continuamente drift, latencia, costo, seguridad y calidad.
8. Incorporar los hallazgos de producción a las pruebas offline y al desarrollo.

## Conceptos clave para el simulador

- La evaluación end-to-end combina métricas de componentes, costo total y valor para el negocio.
- La calidad de recuperación RAG requiere Context Precision, Context Relevancy y Context Recall.
- La calidad de generación requiere Faithfulness, Answer Relevancy y Answer Correctness.
- Estas métricas están relacionadas, pero no son intercambiables.
- Las métricas personalizadas conectan la evaluación técnica con objetivos reales.
- Las pruebas offline deben complementarse con evaluación online, feedback humano y monitoreo continuo.
- Mosaic AI Agent Framework proporciona tracing, evaluación RAG, revisión humana y jueces LLM para sistemas de IA compuestos.
