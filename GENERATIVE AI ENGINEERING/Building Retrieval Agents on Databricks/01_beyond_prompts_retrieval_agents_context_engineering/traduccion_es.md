# Mas alla de los prompts: agentes de recuperacion e ingenieria de contexto

## Construccion de agentes de recuperacion en Databricks

## Introduccion

A medida que las aplicaciones de IA generativa pasan de prototipos a produccion, los desarrolladores suelen encontrarse con un techo de rendimiento. Por mas que refinemos las instrucciones, no podemos obligar a un modelo a conocer hechos sobre los que nunca fue entrenado, ni evitar que alucine cuando le falta informacion critica. Esto marca una transicion fundamental: de la **ingenieria de prompts**, enfocada en redactar la consulta, a la **ingenieria de contexto**, enfocada en disenar toda la arquitectura de informacion que se entrega al modelo.

En esta leccion exploraremos esta evolucion: definiremos los limites del prompting, presentaremos la solucion arquitectonica de **Retrieval Augmented Generation (RAG)** y examinaremos la disciplina avanzada de disenar la ventana de contexto para lograr confiabilidad y eficiencia de costos.

## Objetivos de la leccion

- Distinguir entre ingenieria de prompts e ingenieria de contexto segun su alcance y objetivos.
- Identificar los tres modos criticos de falla del prompting que hacen necesarias las arquitecturas RAG.
- Explicar los desafios de las arquitecturas RAG y las estrategias para abordarlos.
- Definir los fundamentos de la ingenieria de contexto y su importancia para sistemas agenticos.
- Aplicar los principios principales de la ingenieria de contexto para optimizar el rendimiento del modelo.
- Implementar estrategias para gestionar costo, latencia y rendimiento en sistemas agenticos.

**Nota sobre el alcance del curso:** esta leccion introduce conceptos de ingenieria de contexto para desarrollar conciencia arquitectonica. Los ejercicios practicos se enfocaran especificamente en la implementacion fundamental de RAG.

## A. Fundamentos de la ingenieria de prompts

Antes de construir arquitecturas complejas de IA, primero debemos dominar la unidad basica de interaccion: el **prompt**. En esta seccion exploraremos el arte de crear instrucciones para guiar el comportamiento del modelo, distinguiendo entre prediccion estadistica y capacidades reales de razonamiento. Sin embargo, a medida que refinemos nuestros prompts, inevitablemente encontraremos los limites duros de lo que un modelo puede saber solo con base en sus datos de entrenamiento.

### A1. Definicion de ingenieria de prompts

La **ingenieria de prompts** es la practica de refinar el texto de entrada, es decir, el prompt, para optimizar la salida generada por un modelo de lenguaje grande (**LLM**). Es una disciplina tactica centrada en la capa de instrucciones.

Usamos tecnicas como **few-shot prompting** (proporcionar ejemplos) y **adopcion de persona** (asignar un rol) para guiar el comportamiento y el formato de respuesta del modelo. Idealmente, la ingenieria de prompts trata al modelo como un motor de razonamiento, guiandolo para aprovechar sus pesos preentrenados y resolver problemas de forma efectiva.

### A2. Modelos con razonamiento vs. modelos sin razonamiento

El prompting efectivo requiere comprender las capacidades del modelo subyacente. Examinemos dos categorias principales:

**Modelos sin razonamiento** (por ejemplo, Llama 3, GPT-4o): estos modelos predicen el siguiente token segun probabilidad estadistica. Requieren guia explicita, como prompting de **Chain of Thought (CoT)**, por ejemplo "piensa paso a paso", para descomponer logica compleja y evitar llegar rapidamente a conclusiones incorrectas.

**Modelos con razonamiento** (por ejemplo, OpenAI o1): estos modelos estan entrenados para generar su propia cadena interna de pensamiento antes de producir una respuesta final. En estos modelos, el prompting manual de CoT suele ser redundante o contraproducente. La ingenieria de contexto para modelos de razonamiento se enfoca en definir el objetivo y las restricciones, no el proceso de pensamiento.

### A3. Los limites del prompting

La ingenieria de prompts tiene limites duros. Ninguna cantidad de refinamiento de instrucciones puede superar las siguientes limitaciones inherentes a los datos de entrenamiento del modelo:

**Corte de conocimiento:** el modelo no puede responder preguntas sobre eventos ocurridos despues de la fecha limite de sus datos de entrenamiento.

Ejemplo de prompt:

```text
Who won the 2025 Nobel Prize in Physics?
```

**Alucinacion:** cuando se le piden hechos especificos sin referencias externas, los modelos suelen priorizar la plausibilidad por encima de la verdad, inventando citas o datos.

Ejemplo de prompt:

```text
Find a scientific reference proving that avocado reduces blood sugar levels
```

**Ambiguedad:** sin contexto privado, los modelos tienden a interpretaciones genericas.

Ejemplo de prompt:

```text
Explain how to secure a lakehouse.
```

Esto podria activar consejos sobre seguridad fisica de una casa junto a un lago, en lugar de gobernanza de un **Databricks Data Lakehouse**.

## B. Retrieval Augmented Generation (RAG)

Mientras la ingenieria de prompts optimiza **como** responde un modelo, no puede resolver el problema fundamental de **que** sabe el modelo. Para superar las limitaciones de los datos de entrenamiento congelados y la alucinacion, debemos cambiar el enfoque arquitectonico: pasar de depender de la memoria interna del modelo a aprovechar contexto externo.

En esta seccion introduciremos **Retrieval Augmented Generation (RAG)**, el marco critico que conecta el conocimiento preentrenado del modelo con tus datos propietarios.

**RAG vs. agente de recuperacion:** RAG se refiere al patron arquitectonico que combina recuperacion con generacion, independientemente de herramientas especificas o logica agentica. Los agentes de recuperacion, en cambio, son implementaciones concretas que operacionalizan este patron: manejan el enrutamiento de consultas, la orquestacion de la recuperacion y el ensamblaje del contexto dentro de sistemas reales.

### B1. Definicion de RAG

Para resolver los limites de conocimiento definidos antes, pasamos de un enfoque basado en memoria a una arquitectura basada en contexto conocida como **Retrieval Augmented Generation (RAG)**. RAG inyecta datos propietarios o en tiempo real dentro del prompt, permitiendo que el modelo responda con base en hechos proporcionados, no solo en su memoria interna.

El proceso RAG consta de tres etapas clave:

- **Recuperacion:** el sistema busca en una base de conocimiento, indexada mediante **Mosaic AI Vector Search**, fragmentos de datos relevantes.
- **Aumento:** el sistema inyecta esos fragmentos dentro de la ventana de contexto.
- **Generacion:** el modelo sintetiza una respuesta usando unicamente los datos inyectados.

### B2. El desafio del contexto

Aunque RAG resuelve la brecha de conocimiento, introduce un nuevo desafio: el **deterioro del contexto** (*context rot*). Las primeras implementaciones de RAG solian fallar porque los desarrolladores simplemente recuperaban grandes volumenes de documentos y los pegaban dentro del prompt. Este enfoque abruma al modelo y provoca:

**Envenenamiento del contexto (*context poisoning*):** inclusion de informacion irrelevante o contradictoria que confunde al modelo.

**Perdido en el medio (*lost in the middle*):** tendencia de los modelos a ignorar informacion enterrada en medio de una ventana de contexto larga, priorizando los datos del inicio o del final.

Estos desafios muestran la necesidad de una gestion estrategica del contexto, que exploraremos en la siguiente seccion.

## C. Principios de la ingenieria de contexto

Recuperar datos no es suficiente; volcar informacion cruda en un prompt suele generar confusion en lugar de claridad. Al pasar de RAG basico a sistemas listos para produccion, debemos tratar la ventana de contexto no como un contenedor pasivo, sino como un entorno disenado que moldea activamente el comportamiento del modelo.

En esta seccion describiremos los principios de la **ingenieria de contexto**, enfatizando como estructurar, filtrar y fundamentar informacion para garantizar confiabilidad y precision.

### C1. Definicion del entorno de contexto

La **ingenieria de contexto** es el diseno estrategico de toda la ventana de entrada. Va mas alla de escribir una instruccion individual: gestiona el estado completo del sistema.

Orquestamos la interaccion entre las **instrucciones del sistema**, el **historial de conversacion**, los **datos recuperados** y las **restricciones del usuario** para asegurar que el modelo tenga exactamente la senal necesaria para realizar la tarea de forma efectiva.

### C2. Diseno de prompts de sistema

En un paradigma de ingenieria de contexto, el **system prompt** no es solo una solicitud: es un programa de comportamiento que define como debe operar el modelo.

Componentes clave de un buen system prompt:

- **Definicion de rol:** define explicitamente la persona, por ejemplo: "Eres un arquitecto de seguridad de Databricks".
- **Restricciones negativas:** define lo que el modelo no puede hacer, por ejemplo: "No menciones productos competidores" o "No proporciones codigo salvo que se solicite explicitamente".
- **Formato de salida:** exige salidas estructuradas, como JSON, YAML o tablas Markdown, para que aplicaciones posteriores puedan analizar la respuesta de forma determinista.

### C3. Fundamentacion estricta y chunking

La recuperacion debe gobernarse estrictamente para prevenir alucinaciones y asegurar precision.

Estrategias clave:

**Instrucciones de grounding:** usa instrucciones explicitas para vincular el modelo al contexto recuperado. Por ejemplo:

```text
Responde usando SOLO los fragmentos de contexto proporcionados. Si la respuesta no esta presente, indica: "No tengo esa informacion."
```

**Filtrado por metadatos:** utiliza metadatos de **Unity Catalog** para filtrar la recuperacion antes de que llegue al modelo. Por ejemplo, si un usuario pregunta por "ingresos de 2024", el sistema debe filtrar fragmentos donde `year=2024`, evitando que el modelo vea datos desactualizados de 2023.

### C4. Gestion del estado multi-turno

En aplicaciones con conversaciones largas, como agentes, la ventana de contexto eventualmente se llenara. La ingenieria de contexto requiere enfoques estrategicos para gestionar ese estado:

- **Resumen:** comprimir periodicamente el historial de conversacion en un resumen de decisiones y hechos clave.
- **Ventana movil:** descartar los mensajes mas antiguos para liberar espacio de tokens para nueva recuperacion.
- **Persistencia selectiva:** determinar que piezas de informacion, como nombre del usuario o ID del proyecto actual, deben permanecer permanentemente en el contexto y cuales pueden descartarse.

Estas estrategias permiten mantener contexto relevante sin exceder los limites de tokens.

## D. Restricciones del contexto: presupuestos de tokens y limites de ventana

Incluso el contexto mejor disenado esta sujeto a restricciones duras de recursos computacionales y arquitectura del modelo. A medida que escalamos nuestras aplicaciones, debemos equilibrar el deseo de contexto amplio con las realidades de limites de tokens, latencia y costos operativos.

En esta seccion examinaremos la economia de la ventana de contexto y presentaremos estrategias para optimizar presupuestos de tokens sin sacrificar calidad de respuesta.

### D1. Comprension de las ventanas de contexto

Cada modelo tiene un **limite de ventana de contexto**, por ejemplo 8k, 32k o 128k tokens. Esto representa el limite duro de memoria de trabajo disponible para el modelo.

La ventana de contexto consiste en:

- **Tokens de entrada:** el texto que enviamos al modelo: instrucciones, documentos recuperados e historial.
- **Tokens de salida:** el texto que genera el modelo.

**El trade-off:** a medida que llenamos la ventana con mas datos recuperados, la capacidad del modelo para razonar se degrada por el fenomeno "lost in the middle", y la latencia aumenta significativamente. La gestion estrategica del contexto es esencial para mantener rendimiento.

### D2. Economia de tokens y optimizacion

El contexto no es gratuito. Las **Databricks Foundation Model APIs**, igual que otros proveedores, cobran segun el volumen de tokens de entrada y salida consumidos.

Consideraciones clave:

**Gestion de costos:** un sistema RAG ingenuo que recupera 50 documentos por cada consulta consumira rapidamente los presupuestos de tokens.

**Estrategias de optimizacion:**

- **Recuperacion just-in-time:** en lugar de cargar un manual completo al inicio de un chat, dale al agente una herramienta para recuperar secciones especificas solo cuando el usuario formule una pregunta relevante.
- **Reranking:** usa un modelo reranker para puntuar los 50 fragmentos recuperados principales e inyectar solo los 3 a 5 mas relevantes en la ventana de contexto final.

Estas estrategias ayudan a equilibrar contexto amplio con eficiencia de costos y rendimiento.

## E. Resumen

Pasar de la ingenieria de prompts a la ingenieria de contexto representa un cambio fundamental: de la "micro-optimizacion" a la "macro-arquitectura". Aunque los prompts controlan tono y formato, no pueden cerrar la brecha de conocimiento inherente a los LLMs. Las arquitecturas RAG resuelven esto inyectando datos externos, pero introducen complejidad alrededor de la gestion de la ventana de contexto.

La ingenieria de contexto aborda estos desafios estructurando rigurosamente la entrada, imponiendo reglas de grounding y gestionando presupuestos de tokens para crear sistemas de IA confiables y eficientes en costos.

## Puntos clave

- **Arquitectura de agentes de recuperacion:** usa componentes de recuperacion para cerrar brechas de conocimiento y aplica ingenieria de contexto para optimizar agentes de recuperacion en rendimiento, confiabilidad y costo.
- **El contexto es finito:** gestiona la ventana de contexto como un presupuesto. Usa filtrado y reranking para maximizar el valor de cada token.
- **El grounding es obligatorio:** instruye estrictamente al modelo para usar solo datos recuperados y aprovecha metadatos de Unity Catalog para asegurar que los datos sean relevantes y seguros.

© 2026 Databricks, Inc. Todos los derechos reservados. Apache, Apache Spark, Spark, el logotipo de Spark, Apache Iceberg, Iceberg y el logotipo de Apache Iceberg son marcas comerciales de Apache Software Foundation.

