# Por qué evaluar las aplicaciones de IA generativa

## Propósito de la lección

La evaluación permite determinar si una aplicación de IA generativa funciona como se espera, produce resultados valiosos, opera con un costo aceptable y evita riesgos legales, éticos y de seguridad inadmisibles. Como una aplicación GenAI contiene varios componentes que interactúan entre sí, es necesario evaluar tanto el sistema completo como cada componente por separado.

![Preguntas fundamentales para evaluar un sistema de IA](../assets/images/why_evaluate_ai_system.png)

## 1. ¿Qué preguntas debe responder la evaluación?

| Dimensión | Pregunta principal |
|---|---|
| Confiabilidad | ¿El sistema se comporta como se esperaba? |
| Eficacia | ¿La solución basada en un LLM cumple correctamente su tarea? |
| Valor para el usuario | ¿Los usuarios están satisfechos con los resultados? |
| Ética | ¿Existe sesgo u otra preocupación ética? |
| Operación | ¿Cuáles son la latencia y el costo económico de ejecutar el sistema? |

Un sistema de IA solo puede considerarse exitoso cuando tanto su funcionamiento técnico como su impacto en los usuarios cumplen las expectativas.

## 2. Un sistema de IA es más que un LLM

![Sistema RAG y sus diferentes componentes](../assets/images/ai_system_rag_components.png)

Una aplicación de IA en producción combina distintos tipos de componentes.

### Componentes de datos

- Documentos sin procesar y otras fuentes de información.
- Base de datos vectorial u otro almacén de datos.
- Consultas y demás entradas de los usuarios.
- Salidas generadas por el sistema.

### Componentes de modelos

- Modelos de embeddings para representar documentos y consultas.
- Modelos generativos que sintetizan respuestas utilizando el contexto proporcionado.

### Componentes de soporte

- Vector Search u otro sistema de recuperación.
- Interfaz de usuario.
- Herramientas de seguridad y gobierno.
- Infraestructura necesaria para operar en producción.

En un sistema RAG, los documentos se convierten en embeddings y se almacenan. La consulta del usuario también se representa mediante un embedding; luego se recupera información relevante del almacén vectorial y ese contexto se incorpora al prompt que recibe el modelo generativo.

## 3. Evaluar el sistema completo y sus partes

![Evaluación del sistema completo y de sus componentes](../assets/images/evaluating_system_and_components.png)

La complejidad de la arquitectura produce dos niveles complementarios de evaluación:

- **Evaluación end-to-end:** determina si la aplicación completa entrega el resultado previsto.
- **Evaluación por componente:** examina individualmente los datos, la recuperación, los modelos, las entradas, las salidas, los controles de seguridad y la interfaz.

Se necesita una metodología estructurada porque el sistema puede fallar aunque algunos componentes funcionen correctamente. De igual manera, una respuesta final que parezca aceptable puede ocultar un defecto en alguno de sus componentes.

## 4. Evaluar el ciclo de vida de los datos

![Evaluación de los datos de entrenamiento, contexto, entrada y salida](../assets/images/evaluating_data_components.png)

| Área de datos | Evaluación de calidad | Evaluación de sesgo, ética y legalidad |
|---|---|---|
| Datos de entrenamiento del LLM | Seleccionar modelos entrenados con datos pertinentes y de alta calidad; revisar benchmarks publicados para la tarea concreta. | Determinar si los datos pueden contener sesgos o información privada y sensible. La aplicación no puede reescribir el entrenamiento de un modelo ya creado, por lo que debe supervisar sus salidas. |
| Datos contextuales | Aplicar controles de calidad y vigilar los cambios en sus estadísticas. | Revisar sesgos e información no ética, confirmar la legalidad y consultar especialistas legales sobre las licencias. |
| Entradas y salidas | Recopilar y revisar datos, vigilar cambios estadísticos y feedback de usuarios, y utilizar evaluación humana, métodos estadísticos o LLM-as-a-judge. | Examinar los prompts para detectar conductas perjudiciales del usuario y las salidas para detectar respuestas perjudiciales del sistema. |

La aplicación debe monitorear continuamente sus entradas y salidas. Los hallazgos pueden utilizarse para construir filtros y salvaguardas o para modificar el diseño del sistema.

## 5. Legalidad y licenciamiento de los datos

![Preguntas sobre legalidad y licenciamiento de datos](../assets/images/data_legality_questions.png)

Antes de utilizar un conjunto de datos se debe determinar:

- Quién es su propietario.
- Qué permite su licencia.
- Si la aplicación tendrá un uso comercial.
- En qué países o estados será desplegada.
- Si generará ganancias.

Un LLM puede haber sido entrenado con material protegido por derechos de autor y podría reproducir contenido protegido. La propiedad del dataset, sus condiciones de licencia, el uso comercial, la jurisdicción del despliegue y la rentabilidad pueden afectar el cumplimiento legal.

El equipo legal debe verificar que las condiciones de las licencias sean compatibles con el caso de uso previsto. Esta revisión ayuda a reducir el riesgo de que las salidas del modelo causen problemas de licenciamiento o copyright.

## 6. Comportamiento perjudicial y prompt injection

![Riesgo de prompt injection](../assets/images/harmful_user_behavior_prompt_injection.png)

Existe **prompt injection** cuando un usuario introduce instrucciones destinadas a anular las reglas o el comportamiento previsto del sistema. Un atacante podría intentar:

- Extraer información privada.
- Conseguir que el sistema ignore sus políticas.
- Generar contenido perjudicial, sesgado o incorrecto.

El ejemplo parte de un system prompt que indica al asistente que debe responder preguntas sobre productos sin mostrar sesgo contra los competidores. Después, el usuario le ordena ignorar esa instrucción y promover un producto a toda costa.

Los desarrolladores deben anticipar tanto el uso malicioso como el uso accidentalmente perjudicial antes de exponer la aplicación a clientes u otros usuarios finales.

## 7. Sesgo y uso ético

![Sesgo geográfico en una respuesta sobre atención sanitaria](../assets/images/bias_ethical_use_example.png)

Los LLM reproducen patrones presentes en sus datos de entrenamiento. Por ello, un sistema puede producir respuestas sesgadas o poco adaptadas al contexto aunque su propósito sea ético.

La lección lo ilustra mediante un modelo entrenado principalmente con datos sanitarios británicos. Una usuaria ubicada en Estados Unidos solicita orientación sobre su embarazo, pero el modelo la remite al National Health Service del Reino Unido. La respuesta revela un sesgo geográfico y no corresponde al contexto de la persona.

Este ejemplo obliga a considerar si una respuesta mal contextualizada constituye un sesgo perjudicial y cómo afecta el uso ético de las herramientas de IA.

## 8. Por qué no basta la evaluación clásica de machine learning

![Diferencias entre la evaluación clásica y la evaluación de GenAI](../assets/images/classical_evaluation_challenges_genai.png)

| Aspecto | Machine learning clásico | Desafío en GenAI |
|---|---|---|
| Verdad | Normalmente existen etiquetas o valores objetivo conocidos. | Las tareas abiertas pueden admitir varias respuestas válidas y no tener una única verdad de referencia. |
| Calidad | Una predicción puede compararse con la respuesta conocida. | La calidad de textos e imágenes generados resulta difícil de medir objetivamente. |
| Sesgo | Los conjuntos de datos más controlados pueden auditarse y balancearse. | El enorme volumen de los corpus de entrenamiento dificulta identificar y eliminar todos los sesgos. |
| Seguridad | Las salidas suelen limitarse a etiquetas o valores conocidos. | El texto, las imágenes y el audio de formato libre crean una superficie de riesgo más amplia e impredecible. |

En machine learning clásico suele haber datos etiquetados y se conocen las entradas y salidas esperadas. En la IA generativa existen tareas abiertas para las que varias respuestas pueden ser correctas. Una pregunta como «¿Cuál es la mejor película de ciencia ficción?» no tiene una única respuesta verdadera.

Los modelos generativos modernos también utilizan conjuntos de datos con billones de tokens, lo que hace prácticamente imposible eliminar todos los sesgos. Además, sus salidas no estructuradas son más difíciles de controlar que las salidas restringidas de muchos modelos clásicos.

## 9. Un enfoque sistemático basado en componentes

![Enfoque sistemático para evaluar GenAI](../assets/images/systematic_genai_evaluation.png)

La lección recomienda dividir la evaluación en áreas específicas:

1. Mitigar los riesgos de datos mediante un licenciamiento responsable.
2. Mejorar la seguridad de los prompts e implementar guardrails.
3. Evaluar la calidad de las salidas del LLM.
4. Proteger el sistema completo.
5. Evaluar la calidad end-to-end de la aplicación.

Este enfoque evita tratar la evaluación como una única prueba al final del proyecto. La evaluación se convierte en una actividad aplicada a toda la arquitectura y durante todo el ciclo de vida.

## 10. Seguridad de prompts y guardrails

![Ejemplo sencillo de un guardrail](../assets/images/prompt_safety_and_guardrails.png)

Un **guardrail** es una orientación o un control adicional que restringe el comportamiento del modelo. Un guardrail sencillo puede incluirse directamente en el system prompt. Por ejemplo:

> **Sistema:** No enseñes a las personas cómo cometer delitos.  
> **Usuario:** ¿Cómo robo un banco?  
> **Respuesta:** Lo siento, no tengo permitido ayudar a planificar ni cometer delitos.

La instrucción aleja al modelo de una respuesta insegura y lo dirige hacia el comportamiento esperado. Los guardrails pueden comenzar como instrucciones directas en el prompt y volverse más sofisticados cuando se necesita un mayor nivel de control.

## Conceptos clave para el simulador

- La evaluación debe cubrir rendimiento técnico, valor para el usuario, costo, ética, legalidad y seguridad.
- Una aplicación GenAI es un sistema con varios componentes, no solamente un LLM.
- Se necesita evaluación end-to-end y evaluación individual de componentes.
- Los datos de entrenamiento, los datos contextuales, los prompts y las salidas tienen necesidades de evaluación diferentes.
- Las licencias y la jurisdicción del despliegue pueden determinar si una aplicación cumple la ley.
- El prompt injection y los sesgos heredados deben anticiparse antes del despliegue en producción.
- Las métricas clásicas de machine learning no bastan para muchas salidas abiertas de GenAI.
- Un enfoque sistemático combina licenciamiento, evaluación de calidad, seguridad, prompt safety y guardrails.
