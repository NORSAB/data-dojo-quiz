# Building and Logging a Retrieval Agent

## Construccion y registro de un agente de recuperacion

## Introduccion

Esta demostracion explica como crear un **retrieval agent**, observar su ejecucion con MLflow Tracing y registrarlo como modelo en Unity Catalog.

El flujo general consta de tres etapas:

1. Utilizar un indice de Vector Search como herramienta del agente.
2. Rastrear el flujo de trabajo para detectar errores y problemas de rendimiento.
3. Registrar el agente final en Unity Catalog Model Registry.

Al finalizar la demostracion, se espera poder probar Vector Search mediante AI Playground, construir un agente con LangChain, monitorear sus interacciones con MLflow Tracing y registrarlo como modelo.

## Nota sobre la transcripcion

El modulo conserva dos fuentes del mismo video. Las marcas de tiempo presentan una discontinuidad entre **6:13 y 16:25**, pero el usuario confirmo que corresponden a la transcripcion completa. Por tanto, el salto se considera una caracteristica de la exportacion y no contenido pendiente. La traduccion organiza el contenido proporcionado y el resumen final del instructor.

## Nota sobre imagenes

Este envio no incluye imagenes nuevas. Las capturas relacionadas con MLflow Tracing y Unity Catalog Model Registry ya estan guardadas en el modulo 07:

- `../assets/images/mlflow_trace_ui.png`
- `../assets/images/unity_catalog_agent_model_registry.png`

## Objetivos de la demostracion

Al completar el ejercicio, se debe poder:

- Probar un indice de Vector Search desde AI Playground para hacer prototipado rapido.
- Construir un agente de recuperacion con LangChain.
- Exponer Vector Search como una herramienta del agente.
- Usar MLflow Tracing para monitorear y depurar la interaccion entre el agente y sus herramientas.
- Aplicar el enfoque **Agent as Code**.
- Registrar el agente como modelo en Unity Catalog Model Registry.
- Cargar nuevamente el modelo registrado y ejecutar inferencia con `predict()`.

## 1. Requisitos del entorno

La demostracion requiere los siguientes recursos:

- Un endpoint de Vector Search previamente creado y en estado listo.
- Un indice de Vector Search creado en las demostraciones anteriores.
- Serverless compute, environment version 4.
- Las bibliotecas necesarias para Vector Search, MLflow y LangChain.

En el entorno del laboratorio, el endpoint, la configuracion serverless y las dependencias ya estan preparados. Si existe algun problema, se pueden revisar desde la seccion **Environment** del notebook.

Entre las dependencias mencionadas se encuentran:

- Databricks Vector Search SDK.
- `mlflow-skinny`.
- Databricks LangChain.
- LangChain.

Despues de modificar una version o dependencia se debe aplicar la nueva configuracion del ambiente.

## 2. Classroom setup

Al ejecutar el classroom setup, el notebook valida que:

1. Serverless compute este disponible.
2. El endpoint de Vector Search este listo.
3. Exista un indice de Vector Search que pueda utilizar el agente.

El indice proviene de las demostraciones anteriores. Si todavia no se ha creado, esas actividades deben completarse antes de continuar.

## 3. Vector Search como herramienta del agente

El agente necesita recuperar documentos relevantes y enviarlos como contexto al LLM para generar la respuesta.

El flujo conceptual es:

```text
Pregunta del usuario
        |
        v
Agente decide usar la herramienta
        |
        v
Consulta al indice de Vector Search
        |
        v
Documentos recuperados
        |
        v
Contexto enviado al LLM
        |
        v
Respuesta final
```

En esta demostracion, Vector Search es la unica herramienta disponible para el agente.

## 4. Prototipado con AI Playground

Antes de escribir el agente, el indice se prueba desde **AI Playground**.

Construir desde cero la integracion de un agente con LangChain puede ser complejo. AI Playground permite hacer prototipado rapido, interactuar con modelos, agregar herramientas y revisar tanto la respuesta como las trazas antes de escribir la implementacion completa.

### Acceso directo a AI Playground

Desde la interfaz de Databricks se puede abrir:

```text
AI/ML -> Playground
```

### Acceso desde el indice de Vector Search

La demostracion utiliza un camino mas directo:

1. Abrir el catalogo de DBX Academy.
2. Seleccionar el schema personal asociado al usuario.
3. Buscar en la seccion de tablas el indice creado en la demostracion anterior.
4. Abrir el indice en Catalog Explorer.
5. Seleccionar **Try in Playground** en la esquina superior derecha.

Este flujo abre AI Playground y agrega automaticamente el indice de Vector Search como herramienta.

### Componentes de la interfaz

En AI Playground se encuentran:

- El area de conversacion para escribir preguntas.
- El system prompt.
- El modelo LLM que se utilizara para interactuar.
- La seccion de herramientas.

En la demostracion, el indice ya aparece seleccionado como herramienta. El instructor elige GPT-5.1 para la prueba, aunque tambien indica que la implementacion del ejercicio utilizara una alternativa open source.

### Datos de prueba de Orion

El conjunto de datos representa a **Orion Robotics Company**, una empresa ficticia para la cual se crearon documentos internos.

El objetivo es construir un Knowledge Assistant que responda preguntas de usuarios usando esos documentos como fuentes. El LLM general no conoce la informacion interna de Orion, por lo que necesita consultar Vector Search para fundamentar la respuesta.

### Ejecucion de la consulta

Al enviar una de las preguntas de ejemplo:

1. El reasoning model analiza la solicitud.
2. Decide si necesita utilizar la herramienta.
3. Consulta el indice de Vector Search.
4. Genera una respuesta con el contexto recuperado.
5. AI Playground muestra los recursos utilizados como fuentes.

Los recursos corresponden a los chunks almacenados en Vector Search. El usuario puede seleccionarlos para revisar el contenido que respaldo la respuesta. La segunda transcripcion termina mientras el instructor comienza a abrir uno de estos recursos.

Este paso permite:

- Confirmar que el indice responde.
- Verificar que la recuperacion devuelve documentos utiles.
- Probar el comportamiento de un agente de recuperacion sin escribir codigo.
- Detectar problemas en la configuracion antes de construir el agente completo.
- Comprobar si el agente decide utilizar la herramienta cuando corresponde.
- Revisar los chunks y documentos usados como fuentes.

El prototipado rapido ayuda a separar los problemas del indice de los problemas que puedan aparecer posteriormente en el codigo del agente.

## 5. Construccion con LangChain

Despues de validar el indice, el siguiente paso es construir el agente con **LangChain**.

La logica del agente debe permitir que el modelo:

- Reciba una pregunta.
- Determine cuando necesita consultar Vector Search.
- Llame la herramienta de recuperacion.
- Use los documentos recuperados como contexto.
- Genere una respuesta para el usuario.

El resumen final de la demostracion confirma que esta implementacion utiliza el enfoque **Agent as Code**, donde el comportamiento principal vive en un archivo Python.

## 6. MLflow Tracing

MLflow Tracing se utiliza para observar las interacciones del agente con la herramienta de Vector Search.

Esto permite identificar:

- Errores en llamadas a herramientas.
- Resultados de recuperacion vacios o incorrectos.
- Problemas de rendimiento.
- Pasos con latencia elevada.
- Entradas y salidas de cada componente.
- Diferencias entre el contexto recuperado y la respuesta final.

Si ocurre un problema, la traza ayuda a localizar el componente responsable sin depender unicamente de la respuesta final del agente.

## 7. Agent as Code y archivo de configuracion

La demostracion utiliza el enfoque **Agent as Code**. El agente se almacena en un archivo principal, identificado en el registro como:

```text
agent.py
```

Tambien se utiliza un archivo de configuracion separado. Este contiene parametros que el agente puede cargar durante su ejecucion.

Separar codigo y configuracion facilita:

- Cambiar parametros sin reescribir la logica principal.
- Mantener una estructura reproducible.
- Empaquetar los valores necesarios junto al agente.
- Comparar distintas configuraciones.

## 8. Logging del agente con MLflow

El instructor utiliza el logging de modelos Python de MLflow porque el agente esta implementado como codigo Python.

Los elementos principales entregados al proceso de logging son:

- **Python model:** archivo o clase principal del agente.
- **Code paths:** codigo adicional y archivos de configuracion.
- **Input example:** ejemplo de la entrada esperada.
- **Environment requirements:** bibliotecas y versiones necesarias.

Conceptualmente, el registro sigue una estructura similar a:

```python
mlflow.pyfunc.log_model(
    artifact_path="model",
    python_model=agent,
    code_paths=["agent_config.yaml"],
    input_example=input_example,
    pip_requirements=requirements,
)
```

Este fragmento es una representacion conceptual. La transcripcion no contiene el codigo exacto mostrado durante la parte omitida del video.

El **input example** es importante porque MLflow puede inferir informacion de entrada y facilitar las pruebas posteriores del modelo.

## 9. Revision del modelo en Catalog Explorer

Despues de hacer logging, el modelo puede revisarse desde el catalogo.

En la demostracion se utiliza el nombre:

```text
Orion Knowledge Assistant
```

Desde Catalog Explorer se puede observar:

- La vista general del modelo.
- Sus versiones registradas.
- El activity log.
- La firma de entradas y salidas.
- El linaje.
- Los artefactos empaquetados.
- Las dependencias del ambiente.

### Firma de entrada y salida

La interfaz muestra los parametros que acepta el modelo. Entre los ejemplos mencionados estan:

- `top_p`
- `max_tokens`
- `max_output_tokens`

La salida del agente se presenta como un objeto.

### Artefactos

La seccion de artefactos permite inspeccionar el contenido del modelo registrado:

- `agent.py`, como archivo principal.
- Requisitos de Conda o Python.
- Dependencias definidas durante el logging.
- Carpeta de codigo adicional.
- Archivo de configuracion del agente.

MLflow empaqueta el ambiente junto con el modelo. Al cargarlo en otro entorno, puede instalar los requisitos necesarios para reproducir la ejecucion.

## 10. Diferencia entre logging y registro

La demostracion distingue dos operaciones:

### Log model

Guarda el modelo y sus artefactos dentro de una ejecucion de MLflow.

```text
Run de MLflow -> artefacto del modelo
```

### Register model

Crea una version gobernada del modelo en Unity Catalog Model Registry.

```text
Artefacto de un run -> catalog.schema.model -> version registrada
```

Para registrar el agente se define el nombre completo del modelo en Unity Catalog y se utiliza `register_model`.

El proceso conceptual es:

```python
mlflow.register_model(
    model_uri="runs:/<run_id>/model",
    name="catalog.schema.orion_knowledge_assistant",
)
```

## 11. Carga y prueba del modelo

Despues de registrar el agente, se puede recuperar con la funcion de carga correspondiente al flavor de MLflow.

Para un modelo PyFunc, el flujo conceptual es:

```python
loaded_model = mlflow.pyfunc.load_model(model_uri)
response = loaded_model.predict(input_data)
```

La demostracion utiliza como consulta de ejemplo:

```text
What is Orion?
```

El proceso puede tomar tiempo la primera vez porque MLflow debe:

1. Recuperar el modelo.
2. Preparar el ambiente.
3. Instalar o cargar sus dependencias.
4. Ejecutar la inferencia.

Cada flavor de MLflow expone una forma de realizar predicciones; en PyFunc se utiliza `predict()` con los datos de entrada esperados por la firma.

## Flujo completo de la demostracion

```text
1. Validar endpoint e indice de Vector Search
2. Probar el indice en AI Playground
3. Construir el agente con LangChain
4. Exponer Vector Search como herramienta
5. Activar MLflow Tracing
6. Definir agent.py y la configuracion
7. Hacer log del modelo y sus dependencias
8. Registrar una version en Unity Catalog
9. Cargar el modelo registrado
10. Ejecutar predict() con una consulta de prueba
```

## Resumen

La demostracion comenzo validando el indice de Vector Search desde AI Playground. Luego se construyo un agente con LangChain y se utilizo MLflow Tracing para observar sus interacciones con la herramienta de recuperacion.

El agente se implemento con el enfoque Agent as Code, acompanado por un archivo de configuracion. Finalmente, se empaquetaron el codigo, las dependencias y el ejemplo de entrada con MLflow, se registro el modelo en Unity Catalog y se probo mediante la carga del modelo y una llamada a `predict()`.

## Conceptos clave para el simulador

- AI Playground permite probar rapidamente un indice de Vector Search sin programar el agente completo.
- **Try in Playground** abre el indice desde Catalog Explorer y lo agrega como herramienta.
- AI Playground permite seleccionar el LLM, definir el system prompt y revisar trazas y fuentes.
- El ejemplo utiliza documentos internos ficticios de Orion Robotics Company.
- El reasoning model decide si debe llamar la herramienta de Vector Search.
- Los recursos mostrados por AI Playground corresponden a las fuentes recuperadas desde el indice.
- El indice debe existir y el endpoint debe estar listo antes de ejecutar el notebook.
- En la demostracion, Vector Search es la unica herramienta del agente.
- LangChain coordina la llamada del modelo a la herramienta de recuperacion.
- MLflow Tracing permite depurar errores y analizar el rendimiento del agente.
- Agent as Code representa el agente mediante codigo Python versionable y empaquetable.
- `code_paths` incluye codigo y configuraciones adicionales dentro del artefacto.
- El input example documenta la entrada esperada y facilita pruebas e inferencia de la firma.
- `log_model` almacena el modelo como artefacto de un run.
- `register_model` crea una version gobernada en Model Registry.
- `load_model` recupera el modelo para su uso.
- `predict()` ejecuta inferencia sobre los datos de entrada.
- El modelo registrado incluye codigo, dependencias y configuracion para reproducir su ambiente.
- Unity Catalog permite revisar versiones, activity log, firma, linaje y artefactos.
