# Demostración: creación de funciones de UC como herramientas con AI Playground

## Cobertura de la fuente

La transcripción proporcionada contiene dos segmentos continuos:

- **Inicio:** 0:00–3:03.
- **Final:** 15:12–20:39.

Existe un salto desde **3:03 hasta 15:12**, equivalente a aproximadamente 12 minutos y 9 segundos. El tramo ausente parece incluir la creación práctica, el registro y las primeras pruebas de las funciones SQL y Python mencionadas en la introducción y en el cierre.

Esta versión de estudio documenta únicamente el material presente en la transcripción recibida. No reconstruye comandos, código, nombres de catálogos, schemas ni pasos de implementación que no aparezcan en la fuente.

## Descripción de la demostración

La instructora de Databricks Jade Lauzen explica cómo utilizar funciones de Unity Catalog como herramientas de un agente y cómo adjuntarlas y probarlas mediante AI Playground.

Un agente puede entenderse como un cerebro —un LLM— que tiene acceso a herramientas. Esas herramientas pueden adoptar distintas formas:

- Llamadas a APIs.
- Consultas de datos.
- Cadenas de acciones de varios pasos.
- Funciones de Unity Catalog que encapsulan lógica ejecutable.

La demostración utiliza una función SQL y una función Python para comparar sus similitudes, diferencias, fortalezas y limitaciones. Aunque las funciones usan lógica sencilla, representan los componentes básicos de aplicaciones de agentes más complejas.

## Objetivos de aprendizaje

La demostración busca enseñar cómo:

- Crear y registrar una función SQL de Unity Catalog.
- Crear y registrar una función Python de Unity Catalog.
- Validar que ambas funciones operen correctamente.
- Equipar un agente de IA con esas funciones como herramientas.
- Probar el uso de las herramientas en AI Playground.
- Comparar las fortalezas, limitaciones y flexibilidad de las herramientas SQL y Python.

## Preparación del ambiente

### Serverless compute

El notebook utiliza serverless compute. Serverless es la opción predeterminada del selector de cómputo, por lo que ejecutar una celda inicializa automáticamente el ambiente.

La instructora señala que el compute y el ambiente base pueden revisarse o modificarse desde el selector situado en la zona superior derecha del notebook.

### Dependencias

La preparación instala Unity Catalog AI for Databricks. Este paquete abstrae parte de la infraestructura interna necesaria para construir funciones de Unity Catalog destinadas a agentes.

### Comando de classroom setup

El notebook también utiliza el patrón de classroom setup presente en muchos laboratorios y demostraciones de Databricks Academy. El primer segmento termina mientras se introduce un magic command `%run`. La transcripción no contiene el comando completo, su ruta ni el resto del setup.

## Segmento de implementación ausente

La transcripción se reanuda en 15:12, cuando las funciones ya fueron creadas y se está configurando el agente en AI Playground. Por eso, la fuente disponible no muestra:

- Los comandos completos para instalar dependencias.
- El comando y la ruta del classroom setup.
- La definición y el registro de la función SQL.
- La definición y el registro de la función Python.
- La primera validación o prueba de cada función.
- Los pasos para abrir AI Playground.

El cierre confirma que se construyeron y probaron dos funciones, pero no proporciona los detalles omitidos de la implementación.

## Configuración del agente en AI Playground

### Selección del modelo: el cerebro del agente

Los chat models disponibles están desplegados mediante model serving endpoints. Primero se selecciona el modelo que funcionará como cerebro y después se le adjuntan las herramientas.

El modelo sugerido es **GPT-OSS-20B**:

- Es un modelo open source.
- Tiene aproximadamente 20 mil millones de parámetros.
- Se describe como un LLM de tamaño intermedio.
- Posee capacidad suficiente para comprender la solicitud y elegir herramientas, sin la carga que a veces acompaña a modelos de mayor tamaño.

### Incorporación de las herramientas

La demostración utiliza dos funciones:

1. Una herramienta que recupera el precio promedio de Airbnb para un vecindario.
2. Una herramienta que recupera información detallada de un anuncio de Airbnb.

La pregunta solicita comparar el precio promedio del vecindario **Mission** con la información detallada del anuncio **958** y determinar cuál representa un mejor valor.

> **Nota de transcripción:** la transcripción automática escribe “admission” en dos ocasiones. Las oraciones describen explícitamente un vecindario y el ejemplo anterior del curso utiliza Mission, por lo que las versiones de estudio normalizan el nombre como “Mission”.

## Comparación lado a lado

AI Playground permite comparar modelos o configuraciones de agentes en paralelo y enviar el mismo prompt a todos.

### Configuración 1: modelo sin herramientas

GPT-OSS-20B recibe la pregunta sin ninguna función adjunta. Responde que puede ayudar con la comparación, pero necesita más detalles. No puede generar una respuesta pertinente porque no tiene acceso a los datos requeridos.

### Configuración 2: modelo con una herramienta

Un segundo endpoint utiliza el mismo modelo, pero solo tiene conectada la herramienta de precio promedio por vecindario.

Esta configuración puede invocar la función disponible y recuperar el promedio. Sin embargo, todavía solicita los detalles del anuncio 958 porque no dispone de una herramienta que pueda obtenerlos.

### Configuración 3: modelo con ambas herramientas

La instructora agrega las dos funciones y limpia el historial del chat para evitar que la nueva prueba herede las respuestas anteriores.

Cuando se envía nuevamente la misma pregunta, el modelo:

1. Utiliza la primera función para recuperar el precio promedio del vecindario.
2. Reconoce que también necesita información del anuncio 958.
3. Identifica la segunda función mediante su comentario y descripción.
4. Invoca esa función y obtiene la información del anuncio.

La configuración con dos herramientas funciona mejor que las configuraciones sin herramientas o con una sola, porque el agente dispone de una mayor parte de la información necesaria.

## Limitación descubierta en la salida

Incluso con ambas funciones, el agente no puede generar una comparación de valor sólida. La función de información del anuncio no devuelve su precio, por lo que no se puede comparar directamente con el promedio del vecindario.

Esto demuestra una lección importante de diseño: una herramienta puede ejecutarse correctamente y aun así resultar insuficiente para el objetivo real del usuario.

Entre las mejoras mencionadas se encuentran:

- Ampliar la función existente para que devuelva el precio del anuncio.
- Crear otra función que recupere el precio ausente.
- Devolver información numérica de reseñas y calificaciones.
- Considerar las fechas solicitadas, ya que los precios de Airbnb varían según la temporada y la fecha.
- Comparar un precio para fechas específicas o un promedio anual.

El diseño correcto de la herramienta depende del contexto requerido por la pregunta.

## Creación de un agent notebook

AI Playground incluye un botón para crear un agent notebook a partir del prototipo. Según la demostración, el notebook generado contiene código para:

- Construir el agente.
- Evaluar el agente.
- Registrar el agente.
- Desplegar el agente.

El notebook puede ejecutarse y modificarse, por lo que sirve como punto de partida para pasar del prototipo interactivo al código del agente.

## Resumen de la demostración

La transcripción disponible confirma los siguientes resultados:

- Se construyeron dos funciones de Unity Catalog: una SQL y otra Python.
- Se consideraron sus fortalezas, limitaciones y flexibilidad.
- Se probó cada función.
- Las funciones se adjuntaron al modelo como un toolkit del agente.
- Una configuración con dos herramientas pertinentes funcionó mejor que una con solo una.
- AI Playground permitió formular preguntas e inspeccionar el comportamiento del agente.
- La prueba reveló un campo ausente en la salida y mostró cómo el prototipado ayuda a mejorar el diseño.
- AI Playground puede generar un notebook para desarrollar, evaluar, registrar y desplegar posteriormente el agente.

## Conceptos clave para el simulador

- Un agente de IA combina un LLM —el cerebro— con herramientas que puede invocar.
- La demostración utiliza una función SQL y una función Python registradas en Unity Catalog.
- Serverless compute es el ambiente de ejecución predeterminado del notebook.
- Unity Catalog AI for Databricks abstrae parte de la infraestructura de integración de funciones.
- El modelo sugerido es GPT-OSS-20B, open source y con aproximadamente 20 mil millones de parámetros.
- AI Playground puede comparar configuraciones de agentes en paralelo con un prompt sincronizado.
- Un modelo sin herramientas no puede recuperar los datos actuales o privados necesarios.
- Con únicamente la herramienta de precio por vecindario, el modelo obtiene el promedio pero no los datos del anuncio 958.
- Con ambas herramientas, el agente invoca primero la función del vecindario y después la función de información del anuncio.
- Los comentarios y descripciones de las funciones ayudan al modelo a identificar qué herramienta debe utilizar.
- La ejecución correcta de una herramienta no garantiza una respuesta completa: el esquema de salida debe contener la información que exige el objetivo.
- La función de información del anuncio no devuelve el precio, lo que impide completar la comparación de valor.
- Los precios de Airbnb pueden variar según la temporada y las fechas solicitadas; el diseño de la herramienta puede necesitar ese contexto.
- AI Playground puede generar un agent notebook con código de construcción, evaluación, registro y despliegue.

