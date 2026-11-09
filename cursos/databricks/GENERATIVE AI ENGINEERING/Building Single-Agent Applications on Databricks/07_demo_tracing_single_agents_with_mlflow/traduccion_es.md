# Demostración: tracing de agentes individuales con MLflow

## Cobertura de la fuente

La transcripción proporcionada contiene dos segmentos continuos:

- **Inicio:** 0:00–3:18.
- **Final:** 18:37–24:12.

Existe un salto desde **3:18 hasta 18:37**, equivalente a aproximadamente 15 minutos y 19 segundos. El tramo omitido parece contener la mayor parte del setup, la configuración del experimento, la activación del tracing automático, la ejecución del agente y la primera inspección del trace generado.

Esta versión documenta únicamente el material presente en la fuente. No inventa comandos de paquetes, rutas de experimentos, llamadas de autologging, sintaxis de decoradores, cuerpos de funciones ni resultados que no quedaron registrados.

## Descripción de la demostración

La instructora de Databricks Jade Lauzen presenta el tracing de un agente individual mediante MLflow. Un agente combina un LLM con herramientas como funciones y APIs, y puede elegir dinámicamente la secuencia de acciones que ejecutará.

El tracing permite responder preguntas como:

- ¿Qué pasos ejecutó el agente?
- ¿Qué herramienta provocó una demora?
- ¿Dónde ocurrió un error?
- ¿Cuáles fueron las entradas y salidas de una operación?
- ¿Cómo se relacionan las funciones anidadas con la solicitud completa?

Esta información facilita desarrollo, validación, cumplimiento, debugging y optimización del rendimiento.

## Objetivos de la demostración

La transcripción identifica estos objetivos:

- Configurar un experimento de MLflow como contenedor de runs y traces.
- Habilitar tracing automático.
- Interpretar las salidas del trace.
- Agregar tracing personalizado con el decorador `mlflow.trace`.
- Comprender spans padre e hijos.
- Inspeccionar validación y excepciones.
- Combinar tracing personalizado con tracing automático de llamadas al LLM y herramientas.

## Conceptos fundamentales

### Span

Un **span** es el registro temporizado de una unidad de trabajo. Por ejemplo, puede comenzar cuando se inicia una función y finalizar cuando esta devuelve su resultado.

MLflow puede registrar:

- Entradas.
- Salidas.
- Duración.
- Errores.
- Atributos.
- Eventos.

### Trace

Un **trace** es la colección completa de spans asociados con una solicitud o workflow. Forma un árbol porque los spans pueden anidarse:

- Un parent span representa una operación general.
- Los child spans representan las operaciones realizadas dentro de ella.

La jerarquía hace visible la estructura de ejecución de la aplicación.

## Preparación del ambiente

El notebook utiliza serverless compute. La instructora selecciona Serverless antes de instalar las dependencias.

La transcripción se interrumpe en 3:18 inmediatamente después de esta introducción. Por tanto, la fuente no contiene:

- La versión del serverless environment.
- Los comandos completos para instalar dependencias.
- Los comandos de classroom setup.
- El nombre o la ruta del experimento de MLflow.
- El comando exacto para configurar el experimento.
- La llamada de tracing automático o autologging.
- La configuración del agente utilizada en el primer trace.
- La solicitud inicial y la inspección del trace.
- El código que define las funciones personalizadas mostradas después.

## Ejemplo personalizado 1: jerarquía de validación

La transcripción se reanuda con dos funciones instrumentadas: **validate input** y **process question**.

### Validate input

El paso de validación aplica reglas básicas:

- La pregunta no puede estar vacía.
- Debe tener una longitud mínima de cinco caracteres.
- Una entrada válida produce una cleaned question.
- Una entrada inválida devuelve información que explica por qué falló.

La definición exacta de la función no está presente en la transcripción.

### Process question

El proceso general llama a la función de validación y después procesa la pregunta limpia. Como la operación instrumentada `process question` llama a `validate input`, también instrumentada, MLflow genera automáticamente:

- Un parent span para procesar la pregunta.
- Un child span para validar la entrada.

El trace permite examinar por separado las entradas, salidas, atributos, eventos y resumen de cada span.

### Ejecución correcta

La instructora ejecuta `process question` con una pregunta que la transcripción automática representa como “what is the average permission?”. El texto no permite confirmar la frase exacta; probablemente se relaciona con los ejemplos anteriores sobre precio promedio y Mission.

El resultado importante es estructural: el trace presenta `process question` como padre y `validate input` como hijo.

### Ejecución con error

Después se envía una pregunta muy corta, transcrita como “high”, aunque el contexto sugiere una entrada breve como `hi`.

El span de validación informa que la pregunta es demasiado corta porque la longitud mínima es cinco. El proceso general falla posteriormente al esperar una cleaned question que no fue generada.

MLflow permite observar la ruta del fallo:

- La salida de validación indica que la pregunta es inválida y demasiado corta.
- El paso de validación cumplió correctamente su función.
- El proceso padre produce una excepción asociada con la ausencia de cleaned question.
- El trace muestra dónde se detuvo la ejecución.

Esta distinción permite separar un resultado de validación esperado de la excepción downstream que provoca.

## Ejemplo personalizado 2: validación y ejecución del LLM

El segundo ejemplo agrega una llamada al LLM después de la validación.

La estructura contiene:

1. `process question` como operación principal.
2. `validate input` como primer child span.
3. Una función que llama al LLM como siguiente operación.

El span que llama al LLM se clasifica como **chat model**. La fuente menciona una operación `agent.ask`, pero no conserva su implementación completa.

### Integración con tracing automático

El tracing automático continúa habilitado. Cuando se ejecuta la función personalizada del LLM, MLflow también captura la actividad interna de forma automática:

- Comunicación con ChatDatabricks o con el modelo configurado.
- Solicitud al LLM.
- Ejecución de una herramienta cuando el modelo decide utilizarla.
- Llamada posterior al modelo utilizando el resultado de la herramienta.

El span personalizado `process question` envuelve así los spans del modelo y la herramienta generados automáticamente. Esto combina organización específica de la aplicación con observabilidad del framework.

## Traces parciales y detención del flujo

Cuando la validación falla, el trace queda parcial:

- El primer paso informa el error.
- El workflow no continúa hacia la llamada al LLM.
- No se ejecutan innecesariamente el modelo ni la herramienta.

Esto facilita diagnosticar el flujo de control y confirma que la validación evita que solicitudes inválidas alcancen las operaciones posteriores.

## Información capturada con instrumentación mínima

La demostración resalta que MLflow recopila información útil con poco código personalizado:

- Duración y latencia de cada span.
- Entradas y salidas.
- Relaciones padre-hijo.
- Span type, como chat model.
- Errores y excepciones.
- Subpasos del modelo y las herramientas capturados automáticamente.

El desarrollador puede personalizar la organización lógica del trace sin programar manualmente cada campo de telemetría.

## Resumen de la demostración

La fuente disponible establece estos principios:

- Un trace es una jerarquía de operaciones temporizadas.
- `mlflow.trace` permite instrumentar funciones específicas de la aplicación.
- Las funciones instrumentadas y anidadas crean automáticamente relaciones padre-hijo.
- Los resultados de validación y las excepciones posteriores pueden analizarse por separado.
- Los spans personalizados pueden envolver actividad del LLM y las herramientas capturada automáticamente.
- Una validación fallida produce un trace parcial y evita operaciones posteriores.
- Entradas, salidas, atributos, eventos, errores y latencia ayudan a explicar el comportamiento.

El setup principal de tracing automático y la primera demostración están ausentes debido al salto de 3:18–18:37.

## Conceptos clave para el simulador

- Un span es el registro temporizado de una unidad de trabajo.
- Un trace es el árbol completo de spans de una solicitud o workflow.
- Los parent spans contienen operaciones generales y los child spans representan trabajo anidado.
- Los spans de MLflow pueden registrar entradas, salidas, duración, errores, atributos y eventos.
- Los experimentos de MLflow funcionan como contenedores de runs y traces.
- El tracing automático captura actividad de frameworks compatibles con poca instrumentación manual.
- El decorador `mlflow.trace` agrega tracing personalizado a una función.
- Las funciones instrumentadas y anidadas generan relaciones padre-hijo automáticamente.
- El ejemplo de validación exige una entrada no vacía de al menos cinco caracteres.
- Una validación fallida puede impedir la creación de cleaned question y provocar el fallo del proceso padre.
- Los eventos y salidas permiten diferenciar un resultado de validación de una excepción downstream.
- Un span de tipo chat model puede representar una función personalizada que llama al LLM.
- Los spans personalizados pueden contener spans automáticos del modelo y las herramientas.
- Si falla el primer paso, MLflow muestra un trace parcial y no se ejecuta el LLM.
- La medición por span ayuda a encontrar cuellos de botella.
- El tracing personalizado agrega organización sin exigir que el desarrollador implemente manualmente cada campo de telemetría.

