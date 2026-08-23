# Building a Knowledge Assistant Agent with Agent Bricks

## Construccion de un Knowledge Assistant con Agent Bricks

## Introduccion

Esta demostracion explica como construir un **Knowledge Assistant** mediante Agent Bricks.

Agent Bricks es un producto de Databricks que ofrece una forma declarativa de crear agentes y mejorar su calidad mediante feedback y sesiones de etiquetado.

En lugar de programar manualmente cada componente, el usuario selecciona el tipo de agente, conecta la fuente de conocimiento y proporciona ejemplos o pautas de calidad.

## Escenario de la demostracion

El objetivo es crear un Knowledge Assistant para **Orion**, una empresa ficticia de robots humanoides.

El asistente sera utilizado por ingenieros de campo, quienes formularan preguntas sobre:

- Firmware de los robots.
- Motores.
- Detalles tecnicos internos.
- Reglas de seguridad.
- Estandares internos.

El agente debe usar documentos empresariales internos para fundamentar sus respuestas.

## Nota sobre la transcripcion

El modulo conserva dos fuentes del mismo video:

- `original_en_transcript.txt`: version mas amplia recibida posteriormente.
- `original_en_transcript_00_03_and_13_16.txt`: fragmento anterior con el inicio y el cierre.

Las marcas de tiempo saltan de **3:22 a 9:45**. El usuario confirmo que el archivo corresponde a la transcripcion completa, por lo que esta discontinuidad se considera una caracteristica de la exportacion y no contenido pendiente.

La traduccion organiza el contenido completo proporcionado y el resumen final del instructor.

## Nota sobre imagenes

Este envio no incluye capturas nuevas. Las figuras conceptuales de Agent Bricks se encuentran en el modulo 09:

- `../assets/images/agent_bricks_optimization_cycle.png`
- `../assets/images/knowledge_assistant_components.png`

## Objetivos de la demostracion

Al completar el ejercicio, se debe poder:

- Identificar los componentes y requisitos para crear un Knowledge Assistant con Agent Bricks.
- Configurar un Unity Catalog Volume como fuente de conocimiento.
- Crear y configurar un Knowledge Assistant.
- Probar el agente y evaluar sus respuestas.
- Mejorar la calidad mediante pautas agregadas manualmente.
- Recopilar feedback de especialistas mediante una labeling session.
- Combinar las pautas recopiladas con el conjunto de ejemplos.
- Aplicar buenas practicas para obtener agentes de alto rendimiento.

## 1. Requisitos

La demostracion necesita:

- Agent Bricks habilitado en el workspace.
- Serverless environment version 4 para ejecutar el notebook.
- Acceso al catalogo y schema asignados al usuario.
- Un Unity Catalog Volume con los documentos que formaran la base de conocimiento.

En este ejercicio, el notebook contiene solamente un script de setup. El resto del proceso se realiza desde la interfaz de Databricks.

## 2. Preparacion de la fuente documental

El script de setup crea un **Unity Catalog Volume** y coloca dentro de este ocho documentos para construir la base de conocimiento.

Para verificarlo, el instructor navega por:

```text
Catalog -> DBX Academy -> schema personal -> Volumes
```

Cada usuario tiene su propio schema. Dentro de este se encuentra el Volume con los ocho documentos internos de Orion.

Estos archivos seran la fuente que el Knowledge Assistant consultara para responder preguntas.

## 3. Creacion del agente

Para comenzar la creacion:

1. Abrir **Agents** desde el panel izquierdo.
2. Revisar los tipos de agente disponibles en Agent Bricks.
3. Seleccionar **Knowledge Assistant**.
4. Definir el nombre del agente, por ejemplo `Orion Knowledge Assistant`.

Knowledge Assistant es el tipo de agente apropiado para arquitecturas RAG y escenarios de preguntas y respuestas sobre documentos.

El flujo conceptual es:

```text
Unity Catalog Volume
        |
        v
Documentos internos de Orion
        |
        v
Knowledge Assistant
        |
        v
Pregunta del ingeniero de campo
        |
        v
Respuesta fundamentada en documentos
```

## 4. Configuracion de la base de conocimiento

El resumen de la demostracion confirma que el Unity Catalog Volume se configura como fuente de conocimiento del agente.

Agent Bricks utiliza los documentos del Volume para construir la arquitectura de recuperacion necesaria. Conceptualmente, esto incluye parsing, chunking, embeddings, Vector Search y serving, tal como se explica en el modulo 09.

La transcripcion resume algunas acciones visuales sin describir cada paso de interfaz. La traduccion conserva los valores y configuraciones que fueron expresados verbalmente.

## 5. Prueba inicial del Knowledge Assistant

Despues de crear y configurar el agente, se prueba con una pregunta sencilla:

```text
What is Orion?
```

El agente genera una respuesta, pero el instructor observa que es demasiado extensa y detallada para una pregunta simple.

Este resultado no implica que la informacion sea necesariamente incorrecta. El problema esta en el **estilo de la respuesta**, que no coincide con la experiencia deseada.

Por eso se deben proporcionar pautas de calidad.

## 6. Pautas para mejorar la respuesta

Las pautas, o **guidelines**, describen como debe responder el agente ante determinados ejemplos.

Pueden agregarse de dos maneras:

- Manualmente por el creador del agente.
- Mediante una labeling session atendida por especialistas del dominio.

En el ejemplo, las pautas solicitan:

- Producir una respuesta corta.
- Limitarla aproximadamente a tres oraciones.
- Comenzar con una frase interesante.

Estas indicaciones ayudan a ajustar el estilo sin reescribir manualmente la implementacion del agente.

### Verificacion de las pautas manuales

Al regresar al agente y repetir la misma pregunta, la respuesta sigue utilizando la informacion de los documentos internos, pero adopta las pautas proporcionadas.

Esto demuestra que las guidelines modifican la forma de responder sin reemplazar la base de conocimiento empresarial.

## 7. Labeling session

Una **labeling session** permite recopilar evaluaciones y pautas de los subject matter experts, o SMEs.

Este mecanismo es util cuando la mejora no debe depender solamente del criterio del desarrollador. Los especialistas pueden evaluar respuestas y aportar instrucciones basadas en su conocimiento del dominio.

### Creacion de la sesion

Para crearla se selecciona:

```text
Start labeling session
```

Agent Bricks genera un enlace que puede compartirse con los especialistas. Segun la demostracion, los expertos invitados no necesitan ser usuarios del workspace para participar mediante ese enlace.

### Permisos

El creador puede definir los permisos del enlace para controlar quien puede acceder a la sesion y proporcionar feedback.

### Trabajo del especialista

Al abrir el enlace, el especialista encuentra una lista de tareas. Cada tarea contiene:

- Una pregunta.
- La respuesta generada por el agente.
- Un espacio para agregar pautas o correcciones.

Las preguntas realizadas anteriormente aparecen en la sesion. Tambien se puede abrir un nuevo chat para que el especialista formule otra pregunta y proporcione feedback.

Antes de solicitar la revision, se deben realizar las preguntas para las cuales se desea recopilar pautas. Luego, desde **Tasks**, el experto selecciona **Start Review** para revisar la respuesta correspondiente.

En la demostracion, el especialista revisa la pregunta `What is Orion?`, observa que la respuesta es demasiado larga y escribe las pautas de estilo.

Despues selecciona **Save** y puede continuar con las demas preguntas de la sesion.

## 8. Incorporacion del feedback

Cuando el especialista termina de revisar las preguntas, sus pautas deben integrarse al conjunto de ejemplos del agente.

El proceso mostrado es:

1. Regresar a la configuracion del agente.
2. Seleccionar **Merge**.
3. Confirmar la operacion.

Despues del merge, las pautas de la labeling session pasan a formar parte del examples dataset.

Este paso es importante porque recopilar feedback no modifica por si solo el comportamiento. El feedback debe incorporarse al conjunto que Agent Bricks utiliza para mejorar el agente.

## 9. Verificacion de la mejora

Despues de integrar las pautas, el instructor formula nuevamente la misma pregunta:

```text
What is Orion?
```

La nueva respuesta es considerablemente mas corta y sigue las indicaciones del especialista.

La comparacion demuestra el ciclo de mejora:

```text
Probar respuesta
      |
      v
Identificar problema de calidad
      |
      v
Recopilar pautas del experto
      |
      v
Combinar pautas con ejemplos
      |
      v
Probar nuevamente
```

## 10. Limpieza de recursos

Al finalizar la demostracion se deben eliminar los recursos que ya no se utilizaran.

El agente consume:

- Un endpoint de Vector Search.
- Un endpoint de Model Serving.

Mantener estos endpoints activos puede continuar consumiendo recursos. Por eso el paso final consiste en eliminarlos cuando termina el laboratorio.

## Buenas practicas

### Usar fuentes gobernadas

Los documentos deben almacenarse en Unity Catalog Volumes para mantener una fuente de conocimiento organizada y gobernada.

### Comenzar con preguntas representativas

Las pruebas deben reflejar las consultas reales de los usuarios, como preguntas sobre firmware, motores o seguridad.

### Evaluar contenido y estilo

Una respuesta puede ser correcta, pero demasiado extensa o poco clara. La calidad incluye exactitud, utilidad, longitud, tono y formato.

### Involucrar especialistas del dominio

Los SMEs conocen las expectativas reales y pueden proporcionar pautas mas utiles que una evaluacion puramente tecnica.

### Convertir feedback en ejemplos

Las pautas recopiladas deben combinarse con el examples dataset para que formen parte del proceso de mejora.

### Volver a probar despues de cada cambio

Se debe repetir la misma pregunta para comprobar si el agente aplica las nuevas pautas.

### Eliminar endpoints que no se necesitan

La limpieza evita consumo innecesario de Vector Search y Model Serving.

## Resumen

En esta demostracion se creo declarativamente un Knowledge Assistant con Agent Bricks. Se utilizo un Unity Catalog Volume con ocho documentos internos de Orion como fuente de conocimiento.

Despues se evaluo una respuesta del agente y se identifico un problema de estilo. Las pautas se agregaron manualmente y mediante una labeling session compartida con especialistas.

Finalmente, el feedback se combino con el examples dataset, se repitio la consulta para verificar la mejora y se eliminaron los endpoints utilizados por el laboratorio.

## Conceptos clave para el simulador

- Agent Bricks permite crear agentes mediante un enfoque declarativo.
- Knowledge Assistant se utiliza para RAG y preguntas sobre documentos.
- El ejemplo atiende a ingenieros de campo de Orion Robotics.
- Los documentos internos se almacenan en un Unity Catalog Volume.
- El setup crea un Volume con ocho documentos.
- La mayor parte de la configuracion se realiza desde la interfaz de Databricks.
- Las respuestas deben evaluarse tanto por exactitud como por estilo.
- Las guidelines describen como debe responder el agente.
- Una labeling session recopila feedback de especialistas del dominio.
- El enlace de etiquetado puede compartirse y protegerse mediante permisos.
- Segun la demostracion, los especialistas invitados no necesitan ser usuarios del workspace.
- Cada tarea muestra una pregunta y la respuesta del agente.
- **Start Review** permite comenzar la evaluacion de una tarea.
- La labeling session admite preguntas existentes y nuevos chats creados por los expertos.
- Los expertos pueden guardar pautas y revisar multiples preguntas.
- **Merge** incorpora las pautas al examples dataset.
- Repetir la consulta permite comprobar si la mejora fue aplicada.
- Vector Search y Model Serving utilizan endpoints que deben eliminarse al finalizar si ya no se necesitan.
