# Demostración: creación de agentes individuales con LangChain

## Cobertura de la fuente

La transcripción proporcionada contiene dos segmentos continuos:

- **Inicio:** 0:00–2:38.
- **Final:** 11:04–18:09.

Existe un salto desde **2:38 hasta 11:04**, equivalente a aproximadamente 8 minutos y 26 segundos. El tramo omitido parece contener buena parte del setup, los valores de configuración, la preparación de las funciones de Unity Catalog como herramientas y posiblemente el código utilizado para construirlas.

Esta versión documenta únicamente el material presente en la transcripción. No reconstruye comandos de instalación, imports, nombres de funciones, sintaxis del toolkit ni código del agente que no haya quedado registrado.

## Descripción de la demostración

La instructora de Databricks Jade Lauzen muestra cómo crear un agente de IA individual con LangChain. El agente combina tres elementos:

1. Un modelo que funciona como **cerebro**.
2. Funciones de Unity Catalog que funcionan como **herramientas**.
3. LangChain como **framework** que conecta el modelo, el prompt y las herramientas.

El agente puede decidir si debe utilizar una herramienta, cuáles necesita y en qué orden debe invocarlas.

## Objetivos de la demostración

La transcripción disponible establece los siguientes objetivos:

- Revisar las herramientas, el modelo y el framework necesarios para un agente con tool calling.
- Comprender cómo UC Function Toolkit expone las funciones de Unity Catalog.
- Configurar y ejecutar un agente LangChain.
- Utilizar MLflow para examinar un resumen del trace.
- Observar cómo el modelo invoca varias funciones para contestar una pregunta compuesta.

## Preparación del ambiente

### Compute

El notebook utiliza **Serverless environment version 4**. Serverless es la opción predeterminada, pero la instructora recomienda comprobarla de forma explícita en el selector de compute.

La ejecución de una celda inicia el ambiente serverless cuando todavía no está activo.

### Dependencias

La demostración utiliza la integración de Databricks para LangChain. Esta biblioteca permite que el framework se comunique con los servicios de Databricks.

### Segmento ausente de setup y construcción de herramientas

La transcripción se interrumpe en 2:38 mientras se presentan los prerrequisitos y dependencias. Se reanuda en 11:04, cuando ya existen varias configuraciones.

La fuente recibida no muestra:

- Los comandos completos de instalación de paquetes.
- Los comandos de classroom o notebook setup.
- Las constantes exactas de configuración.
- Las definiciones de las dos funciones de Unity Catalog.
- La construcción y configuración exactas de UC Function Toolkit.
- La conversión de funciones de Unity Catalog en herramientas compatibles con LangChain.
- Las validaciones realizadas antes de ensamblar el agente.

El segmento posterior confirma que existen dos herramientas, pero no contiene su implementación.

## Imports y componentes descritos después del salto

La parte disponible identifica estos componentes:

- `ChatDatabricks`, utilizado para comunicarse con model serving endpoints.
- MLflow, utilizado para autologging y tracing.
- Componentes de LangChain para prompts y agentes.
- Un tool-calling agent.
- Un prompt template.
- Un agent executor.

La transcripción no contiene el bloque completo de imports, por lo que esta versión no lo reconstruye.

## Configuración del modelo

`ChatDatabricks` se configura con:

- Un model serving endpoint.
- Un valor de temperature.

La transcripción automática representa el nombre del endpoint como **“GPT-120”**. La fuente disponible no permite verificar ni ampliar ese nombre, por lo que se conserva como una transcripción ambigua en lugar de reemplazarlo con una suposición.

El objeto `ChatDatabricks` configurado permite que LangChain se comunique con el modelo alojado en Databricks.

## Creación del chat prompt template

El prompt contiene cuatro partes conceptuales:

1. **System prompt:** instruye al agente para que utilice las herramientas disponibles.
2. **Chat history:** conserva continuidad entre los turnos de la conversación.
3. **Current input:** contiene la pregunta o consulta actual.
4. **Agent scratchpad:** permite registrar tool calls, resultados intermedios y el proceso de planificación.

La transcripción describe esta estructura, pero no incluye el código literal del template.

## Activación del autologging de MLflow

Antes de ejecutar el agente se activa MLflow autologging. Esto reduce el trabajo manual necesario para:

- Debugging.
- Tracing.
- Monitoreo.
- Recopilación de información de ejecución.

La llamada exacta de autologging no aparece en la transcripción.

## Ensamblado del agente LangChain

El tool-calling agent combina tres entradas:

- La configuración del modelo `ChatDatabricks`.
- Las dos herramientas creadas desde funciones de Unity Catalog.
- El prompt payload.

Después se proporciona el agente a un `AgentExecutor` junto con las herramientas. Se habilita la salida verbose para mostrar los pasos y el razonamiento intermedio durante la ejecución.

La fuente hace referencia a la función de LangChain para crear el tool-calling agent y al executor, pero no contiene un listado completo del código.

## Ejecución del agente

La demostración invoca el agente con una solicitud compuesta que pide:

- El precio promedio de Airbnb en el vecindario **Mission**.
- El número de propiedades con tipo **shared room**.

> **Nota de transcripción:** el texto automático produce frases como “average price permission” y “shared room permission”. La narración de la ejecución indica explícitamente que se envía `Mission` como vecindario; por eso las versiones de estudio normalizan esas frases como “en Mission”.

El agente necesita utilizar dos funciones distintas para responder.

## Secuencia de tool calling

La salida verbose y el trace de MLflow muestran la siguiente secuencia:

1. La pregunta compuesta se entrega al agente.
2. `ChatDatabricks` llama al modelo, es decir, al cerebro del agente.
3. El modelo determina que necesita la función de precio promedio por vecindario.
4. Invoca la primera herramienta con `Mission` como entrada.
5. El resultado regresa al modelo.
6. El modelo reconoce que todavía necesita el conteo por tipo de habitación.
7. Invoca la segunda función para la categoría shared room.
8. El segundo resultado regresa a `ChatDatabricks`.
9. El modelo determina que ya posee información suficiente.
10. El agente genera una respuesta final con el precio promedio y el número de anuncios.

El trace informa un precio promedio aproximado de **$230** para Mission. La transcripción no expresa en su texto el conteo final exacto.

## Inspección del trace de MLflow

MLflow registra la ejecución como una jerarquía de pasos y subpasos.

### Vista Summary

La vista Summary presenta una secuencia general:

- Pregunta de entrada.
- Invocación del modelo.
- Ejecución de la primera función.
- Regreso al modelo.
- Ejecución de la segunda función.
- Respuesta final del modelo.

### Vista detallada

El trace detallado permite examinar:

- Entradas y salidas de cada función.
- Atributos como modelo y temperature de `ChatDatabricks`.
- Eventos de error cuando falla una operación.
- Chunks e información de tokens.
- Timeline y duración de cada paso.
- Filtros para aislar ejecuciones de herramientas.

Esta jerarquía ayuda a entender el comportamiento, depurar resultados incorrectos y encontrar cuellos de botella.

## Resultado final y resumen

La respuesta final contiene el precio promedio y el número de anuncios correspondiente al tipo de habitación solicitado. Ambos valores proceden del dataset de Airbnb mediante las dos herramientas de Unity Catalog.

La demostración presenta el patrón conceptual completo:

1. Definir las herramientas.
2. Configurar el LLM.
3. Crear un prompt con historial y scratchpad.
4. Utilizar LangChain para crear el tool-calling agent.
5. Ejecutar el agente mediante `AgentExecutor`.
6. Examinar mediante MLflow cómo se produjo la respuesta.

La implementación del primer paso y parte del segundo no aparecen en la fuente debido al salto de 2:38–11:04.

## Conceptos clave para el simulador

- Un agente individual combina un LLM, herramientas y un framework de orquestación.
- La demostración utiliza LangChain como framework y funciones de Unity Catalog como herramientas.
- UC Function Toolkit abstrae parte de la comunicación entre funciones de UC y el framework.
- El notebook utiliza Serverless environment version 4.
- `ChatDatabricks` conecta LangChain con model serving endpoints de Databricks.
- La configuración del modelo incluye endpoint y temperature.
- El prompt contiene system instruction, chat history, current input y agent scratchpad.
- El scratchpad registra planificación, pasos intermedios y actividad de herramientas.
- MLflow autologging reduce el trabajo manual de tracing y monitoreo.
- El tool-calling agent combina modelo, herramientas y prompt.
- `AgentExecutor` ejecuta el agente configurado y sus herramientas.
- Verbose mode presenta información intermedia de ejecución.
- La pregunta compuesta necesita dos funciones: precio promedio por vecindario y conteo por tipo de habitación.
- El modelo invoca la primera herramienta, revisa el resultado, reconoce que falta información y llama a la segunda.
- MLflow representa la ejecución mediante pasos y subpasos anidados.
- Los detalles del trace incluyen entradas, salidas, atributos, eventos, chunks, tokens, timeline y latencia.
- El filtrado por herramientas ayuda a aislar funciones durante el debugging.

