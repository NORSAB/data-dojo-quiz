# Parse Documents to Structured Data

## Traduccion de la transcripcion del video

Esta demostracion explica como usar `ai_parse_document` en Databricks para convertir documentos en datos estructurados, inspeccionar el resultado y guardarlo en una tabla Delta para etapas posteriores de limpieza, chunking y busqueda vectorial.

## Nota sobre la cobertura de la transcripcion

El modulo conserva dos fuentes del mismo video:

- `original_en_transcript.txt`: version mas amplia recibida posteriormente.
- `original_en_transcript_06_13.txt`: fragmento anterior que comienza durante la explicacion del resultado parseado.

Las marcas de tiempo saltan de **2:53 a 6:08**. El usuario confirmo que el archivo corresponde a la transcripcion completa, por lo que esta discontinuidad se considera una caracteristica de la exportacion y no contenido pendiente.

La traduccion incorpora el contenido completo proporcionado y conserva el fragmento anterior como fuente adicional.

## Objetivos de la demostracion

Al finalizar el laboratorio, se debe poder:

- Parsear formatos como PDF e imagenes mediante `ai_parse_document`.
- Comprender el esquema de salida del documento parseado.
- Identificar y explicar los campos principales de metadata.
- Visualizar el contenido parseado.
- Depurar errores o problemas de interpretacion del documento.
- Guardar el resultado estructurado para las siguientes etapas del pipeline.

## Requisitos

### Unity Catalog Volume

El laboratorio requiere un Volume que contenga documentos de ejemplo. Este recurso ya esta creado dentro del ambiente, por lo que el usuario no necesita cargar los archivos manualmente.

### Serverless environment

El notebook debe ejecutarse con **Serverless environment version 4**.

Normalmente, al seleccionar serverless se configura la version correcta. Si no ocurre, se debe abrir la configuracion del ambiente, seleccionar la version 4 y aplicar el cambio.

## Setup del laboratorio

La seccion de setup prepara el conjunto de datos y valida el ambiente.

La ruta utilizada sigue esta estructura:

```text
DBX Academy catalog -> schema personal -> Volumes -> Orion Docs
```

Cada usuario tiene su propio schema. En el ejemplo aparecen dos Volumes: uno se utiliza en esta demostracion y el otro queda disponible para actividades posteriores.

El Volume `Orion Docs` contiene los documentos que se enviaran a la funcion de parsing.

## Continuidad del material

La demostracion visual puede resumir acciones que no quedaron descritas palabra por palabra. La transcripcion se considera completa; la traduccion documenta los conceptos expresados sin reconstruir codigo que no fue verbalizado.

## Estructura general de la salida

`ai_parse_document` devuelve una estructura similar a un objeto JSON con tres bloques principales:

- `document`: contenido, paginas y elementos identificados.
- `error_status`: detalles de problemas ocurridos durante el parsing.
- `metadata`: informacion adicional sobre el documento y el procesamiento.

## Interpretacion del resultado parseado

Si hubiera una seccion que no se pudo parsear, o si ocurrio algun problema mientras se leia el documento, los detalles aparecerian aqui.

Esta es la seccion del documento y asi es como fue parseada. Se puede ver que existe un objeto `document`, y dentro de ese objeto hay `elements`. Estos elementos representan todos los componentes encontrados en el documento. Por ejemplo, puede aparecer la coordenada de una caja, una descripcion nula, y un tipo definido como `section header`.

Esto significa que `ai_parse_document` no solo parsea el texto. Tambien entiende el contexto y clasifica cada objeto: puede identificar si algo es un encabezado, un pie de pagina, texto normal, una leyenda, una figura, entre otros tipos. Esta clasificacion es importante porque permite proporcionar un contexto mas rico sobre los documentos.

Luego podemos listar los documentos usando SQL `LIST` y la ruta correspondiente. Esto sirve para listar los archivos que fueron parseados. Aqui se puede ver que existe una carpeta de imagenes parseadas, creada en la misma ruta que se paso a `ai_parse_document`.

Esa carpeta contiene todas las imagenes parseadas. Cada pagina del documento tambien se convierte en una imagen. Por eso deberia existir el mismo numero de imagenes que de paginas en el documento.

Hasta aqui se mostro como usar `ai_parse_document` con Python. Tambien existe soporte SQL. En SQL el formato es practicamente el mismo, solo adaptado al formato de Databricks SQL. Se usa `ai_parse_document`; la diferencia principal esta en el formato de mapeo.

Despues se leen los archivos como `binaryFile` y se pasan al `SELECT`. La salida sera la misma. Esta parte se omite porque la idea principal ya fue mostrada: existe una forma de hacerlo con Python y tambien una forma de hacerlo con SQL. Todas las AI Functions en Databricks tienen soporte tanto para Python como para SQL.

## Metadata extraida

Ahora observamos los metadatos extraidos. `ai_parse_document` devuelve un objeto `document`. Ese objeto puede contener paginas, numero de pagina, texto, tablas, imagenes y tambien metadatos.

Se muestra como usar una sentencia `SELECT` para extraer esos objetos. Por ejemplo, se seleccionan partes como:

- `content`
- `document`
- `pages`
- `elements`
- `error_status`
- `corrupted_data`
- `metadata`

Cada una de estas partes se crea como una nueva columna. En el ejemplo no hay errores ni datos corruptos. La seccion de metadatos aparece separada, al igual que los elementos, las paginas y la ruta del archivo.

Los `elements` son los objetos extraidos del documento. En esta parte se esta extrayendo por documento. Luego se muestra como visualizar e inspeccionar esos elementos para comprobar si el parsing fue realizado correctamente.

## Visualizacion del resultado parseado

Para inspeccionar el resultado se utiliza una clase auxiliar llamada `DocumentRenderer`. Esta clase no viene incluida directamente con la funcion `ai_parse_document`; fue creada para esta demostracion. Su funcion es leer los objetos JSON generados y mostrarlos en una salida visual.

La funcion crea una visualizacion clara del documento parseado. Se selecciona un solo documento, no todos. En el resumen se puede ver que el documento tiene tres paginas y dos elementos. Tambien aparecen los colores de los elementos, la resolucion y otros detalles.

La visualizacion permite ver como se parseo cada parte:

- Page header
- Section header
- Text
- Figure
- Caption

En el ejemplo, estas clasificaciones son correctas. Lo mismo ocurre con la segunda y tercera pagina.

Esto es importante porque no se esta extrayendo solamente texto plano. El sistema tambien entiende cada seccion y la anota. Por ejemplo, si hay una figura, la clasifica como `figure`, y tambien identifica la leyenda o `caption` asociada.

## Importancia para agentes de recuperacion

Imaginemos que este resultado se usara como parte de un agente de recuperacion. Si el usuario hace una pregunta, el sistema podria generar una respuesta indicando que la informacion esta explicada en la pagina 2 y en la figura de la izquierda, por ejemplo.

Como tambien conocemos las coordenadas de la imagen y sabemos en que pagina se encuentra, podemos dar una referencia especifica a esa pagina y generar una respuesta que indique al usuario exactamente donde revisar. Por eso esta informacion estructurada es importante.

## Guardado en Delta

Hasta aqui se mostro como usar `ai_parse_document` para extraer el contenido de un documento. El siguiente paso es almacenar ese texto en una tabla Delta para usarlo en otras demostraciones.

En la siguiente demo se usara el resultado para limpiar los datos extraidos, dividirlos en chunks y luego usar esos chunks en Vector Search. Esos fragmentos se almacenaran en formato vectorial para permitir busquedas semanticas.

En esta parte simplemente se define la tabla de salida y se escribe el resultado como Delta. No hay nada demasiado complejo.

## Cierre de la demo

En resumen, esta demostracion mostro como usar `ai_parse_document`, tanto en Python como en SQL, para parsear documentos. Tambien mostro los distintos campos de metadatos extraidos y, como seccion opcional, una visualizacion del resultado para inspeccionar si el parsing fue correcto.

Ese es el cierre de la demostracion.

## Conceptos clave para el simulador

- `ai_parse_document` convierte documentos no estructurados en objetos estructurados.
- El laboratorio usa Serverless environment version 4.
- Los documentos de ejemplo se almacenan en el Unity Catalog Volume `Orion Docs`.
- La salida principal se organiza en `document`, `error_status` y `metadata`.
- La salida incluye texto, paginas, elementos, imagenes, tablas, metadatos, errores y datos corruptos.
- Los elementos no son solo texto: pueden estar clasificados como encabezado, pie de pagina, figura, leyenda, tabla o texto normal.
- Cada pagina puede convertirse tambien en una imagen parseada.
- La funcion puede usarse tanto desde Python como desde SQL en Databricks.
- La visualizacion con una clase auxiliar como `DocumentRenderer` ayuda a validar si el parsing fue correcto.
- La salida estructurada permite referencias precisas, como pagina, figura o ubicacion dentro del documento.
- El resultado debe almacenarse en Delta para continuar con limpieza, chunking, embeddings y Vector Search.
