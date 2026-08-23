# Clean, Transform, and Chunk Parsed Text

## Traduccion de la transcripcion del video

Esta demostracion explica como limpiar, transformar y dividir en chunks el texto extraido desde documentos parseados. La idea central es tomar la salida JSON generada por `ai_parse_document`, convertirla en un formato util para RAG, dividirla en fragmentos manejables y guardarla en Delta para generar embeddings y usar Vector Search.

## Nota sobre la transcripcion

La transcripcion principal cubre de forma continua la demostracion desde **0:00 hasta 13:12**. Por tanto, este modulo se considera completo.

Tambien se conserva `original_en_transcript_05_13.txt`, el fragmento anterior que comenzaba durante la conversion a Markdown.

## Objetivos de la demostracion

Al finalizar el laboratorio, se debe poder:

- Transformar JSON parseado en texto limpio.
- Generar opcionalmente Markdown mediante un LLM.
- Comparar limpieza semantica con extraccion directa de texto.
- Explicar las ventajas y limitaciones de ambos metodos.
- Dividir el texto limpio en chunks.
- Explicar el funcionamiento de `chunk_overlap`.
- Guardar los chunks en Delta para generar embeddings posteriormente.

## Requisitos

### Tabla de documentos parseados

Debe existir la tabla Delta con los documentos en formato JSON creada en la demostracion anterior.

### Serverless compute

El notebook requiere **Serverless environment version 4**.

### Dependencias

La configuracion debe incluir las bibliotecas de LangChain TextSplitter. Normalmente se instalan automaticamente al seleccionar serverless; si existe algun problema, se deben revisar el ambiente y las dependencias y luego seleccionar **Apply**.

## Setup y tablas utilizadas

El classroom setup crea los conjuntos de datos si todavia no existen.

La demostracion trabaja con:

- Una tabla fuente con los documentos parseados.
- Una tabla de chunks donde se almacenara el resultado final.

La tabla fuente contiene columnas como:

- `path`
- `modification_time`
- `length`
- `parsed_content`

`parsed_content` contiene la salida JSON producida por `ai_parse_document`.

## Dos metodos de transformacion

Se comparan dos opciones:

1. Usar un LLM para hacer limpieza semantica y producir Markdown.
2. Extraer directamente texto plano desde el arbol JSON mediante una UDF.

El primer metodo conserva mas estructura y contexto, pero consume tokens. El segundo es mas rapido y barato, aunque pierde parte del formato y la semantica.

## Limpieza semantica con LLM y ai_query

El ejemplo utiliza un modelo open source de aproximadamente 20 mil millones de parametros. El nombre exacto del endpoint no se reconoce con claridad en la transcripcion.

El prompt indica al modelo que recibira un objeto JSON con paginas, elementos y metadata, y solicita convertirlo en Markdown limpio y legible.

Tambien agrega un separador de paginas para conservar referencias que puedan utilizarse posteriormente.

La funcion `ai_query` recibe:

- El endpoint del modelo.
- El prompt.
- El contenido JSON.
- El formato de respuesta, que en este caso es texto.

## Resultado del metodo con LLM

La demostracion parte de un objeto JSON generado despues de parsear un documento. A partir de ese JSON se puede producir texto limpio en formato Markdown. En el ejemplo, el Markdown conserva informacion como el numero de pagina. El resultado esta organizado por documento y puede incluir varias paginas, por ejemplo pagina 0 y pagina 1.

Tambien se observa que el Markdown conserva estructura:

- Encabezados de nivel 1.
- Encabezados de nivel 2.
- Tablas en formato Markdown.
- Separacion por paginas.

Esto muestra una forma de convertir el resultado estructurado del parsing en un texto mas facil de usar posteriormente en un agente de recuperacion.

## Ventajas y limitaciones de la limpieza con LLM

Una forma de limpiar y transformar el contenido es usar un LLM. El LLM puede tomar el JSON parseado y producir Markdown de alta calidad, conservando mejor la estructura y el significado del documento.

La ventaja de este metodo es que mantiene mas contexto semantico. Por ejemplo, puede conservar encabezados, tablas y relaciones entre secciones. Si luego este texto se usa en un agente de recuperacion, el agente tendra informacion mas rica y mejor organizada.

La limitacion principal es el costo. Al enviar todo el texto al LLM, se consumen tokens, y esos tokens tienen costo. Por eso, aunque la calidad puede ser mayor, no siempre es la opcion mas economica.

## Extraccion simple de texto plano

La alternativa mas rapida y barata es extraer directamente el texto plano desde el arbol JSON. En este enfoque no se usa un LLM para reconstruir Markdown ni preservar semantica avanzada.

La ventaja es que no se paga por tokens de generacion. Se puede aplicar una UDF sobre las columnas para extraer texto plano desde el JSON.

La desventaja es que se pierde estructura importante:

- Se pierden estilos de encabezados.
- Las tablas pueden perder su formato.
- Se reduce la informacion contextual.
- El texto final contiene menos semantica explicita.

En el ejemplo se usa una UDF llamada `extract_contents_udf`. Esta UDF llama a una funcion sencilla que extrae el `page_id` desde el objeto JSON y tambien extrae el contenido de cada elemento.

La funcion se mantiene simple para no complicar la demostracion. Sin embargo, podria mejorarse. Por ejemplo, si un elemento es un encabezado, se podria convertir a estilo Markdown. Eso permitiria agregar mas semantica al texto plano sin necesariamente usar un LLM.

## Introduccion al chunking

Despues de transformar el JSON en texto, el siguiente paso es el **chunking**.

El chunking consiste en dividir un texto largo en fragmentos mas pequenos. Esto es necesario porque los LLMs tienen una ventana de contexto limitada. Si el documento es demasiado largo, no se puede enviar completo al modelo.

Aunque el ejemplo de la demostracion usa un texto corto, se asume que en un caso real el texto puede ser mucho mas extenso y por eso debe dividirse.

## Chunking con LangChain TextSplitter

En la demostracion se usa la biblioteca `TextSplitter` de LangChain, aunque se aclara que se podria usar cualquier otra biblioteca de chunking. LangChain se usa solo como ejemplo.

Para dividir el texto se definen dos parametros principales:

- `chunk_size`: indica cuantos caracteres tendra cada fragmento.
- `chunk_overlap`: indica cuantos caracteres se repetiran entre fragmentos consecutivos.

El overlap permite que una parte del fragmento anterior aparezca tambien en el siguiente fragmento. Esto ayuda a conservar contexto alrededor de los cortes.

Tambien se define un separador para indicar como dividir el texto. En el ejemplo se usa la pagina como separador, por lo que el documento se divide siguiendo limites de pagina.

Ademas, se define un esquema porque el resultado se guardara posteriormente en Delta. El esquema permite controlar la estructura de los datos que seran escritos.

## Aplicacion con Pandas y Spark

La logica se implementa con una funcion basada en Pandas, usando un enfoque tipo `mapInPandas`. La funcion recorre las filas, toma el texto plano y lo divide en chunks.

El resultado muestra que un documento de descripcion de producto queda dividido en dos partes. Como el separador definido es la pagina, la division ocurre alrededor de los limites de pagina.

En ese primer ejemplo no se aprecia claramente el overlap porque el texto es muy corto y no supera el limite definido por `chunk_size`.

## Ejemplo con chunks pequenos

Para demostrar mejor como funciona el overlap, se reduce el tamano de los chunks a un valor muy pequeno. Al hacerlo, el texto queda dividido en fragmentos pequenos y se puede observar claramente que algunas palabras o frases se repiten entre chunks.

Por ejemplo, una parte puede terminar con una expresion como:

```text
motion control and deep
```

Y el siguiente chunk puede comenzar o incluir:

```text
control and deep learning
```

Tambien se observan repeticiones como:

```text
data collected
```

Estas repeticiones muestran como funciona `chunk_overlap`.

## Por que sirve el overlap

El overlap ayuda al LLM a entender parte del contexto anterior cuando recibe un chunk individual. Aunque en el ejemplo se usa un tamano pequeno solo para demostrar el comportamiento, en documentos reales se podria usar un overlap mas significativo.

Por ejemplo:

- Usar el parrafo anterior como overlap.
- Incluir una parte del siguiente parrafo.
- Generar un resumen de paginas anteriores y pasarlo como contexto adicional.

Estas son estrategias mas avanzadas para que el modelo entienda que ocurrio antes y que viene despues, sin tener que enviar todo el documento completo.

## Guardado de chunks en Delta

El paso final es guardar los chunks en una tabla Delta. Esto permite usarlos en etapas posteriores del pipeline.

Despues de guardar los fragmentos, se podran:

- Calcular embeddings.
- Convertir texto plano en representaciones vectoriales.
- Guardar esos vectores en una base vectorial.
- Hacer busquedas semanticas con Vector Search.

En la demostracion se escribe el resultado como Delta usando modo `overwrite` y fusion de esquema (`mergeSchema`), porque se definio un esquema y se desea almacenarlo correctamente.

## Cierre de la demo

En resumen, esta demostracion mostro como limpiar un documento parseado usando dos enfoques:

- Usar un LLM para limpiar semanticamente y producir Markdown de mayor calidad.
- Usar una extraccion simple de texto plano desde el objeto JSON.

Luego se mostro como dividir el texto en chunks usando una biblioteca de chunking, como aplicar overlap para conservar mas contexto y como guardar el resultado en una tabla Delta para usarlo despues en embeddings y busqueda vectorial.

## Conceptos clave para el simulador

- La salida de `ai_parse_document` puede transformarse en Markdown o texto plano.
- El laboratorio requiere una tabla Delta con JSON parseado y Serverless environment version 4.
- `parsed_content` contiene el JSON que se limpiara y transformara.
- `ai_query` envia el prompt y el contenido a un endpoint de modelo.
- Un separador de paginas permite conservar referencias dentro del Markdown.
- Usar un LLM para limpiar produce mejor estructura y mas semantica, pero cuesta mas por consumo de tokens.
- Extraer texto plano desde JSON con una UDF es mas barato y rapido, pero pierde formato y contexto.
- `chunk_size` define el tamano de cada fragmento.
- `chunk_overlap` define cuanto texto se repite entre chunks consecutivos.
- El overlap ayuda a conservar contexto entre fragmentos.
- LangChain `TextSplitter` es una opcion comun para dividir texto, aunque no es obligatoria.
- Los chunks se guardan en Delta para generar embeddings y alimentar Vector Search.
