# Building Vector Search for Retrieval

## Traduccion de la transcripcion del video

Esta demostracion explica como construir y usar **Databricks Vector Search** para recuperacion de informacion en una arquitectura RAG. Presenta los objetivos, los requisitos del laboratorio, filtros, reranking y buenas practicas de rendimiento. Tambien resume el flujo general: preparar la tabla fuente, habilitar Change Data Feed, crear un indice con el SDK y ejecutar distintos metodos de busqueda.

## Nota sobre la cobertura de la transcripcion

El modulo conserva dos fuentes del mismo video:

- `original_en_transcript.txt`: version mas amplia recibida posteriormente.
- `original_en_transcript_filtering_onward.txt`: fragmento anterior centrado en filtros, reranking y buenas practicas.

Las marcas de tiempo saltan de **2:49 a 15:08**. El usuario confirmo que el archivo corresponde a la transcripcion completa, por lo que esta discontinuidad se considera una caracteristica de la exportacion y no contenido pendiente.

Esta traduccion incorpora el contenido completo proporcionado y conserva el fragmento anterior como fuente adicional.

## Importancia de Vector Search en RAG

Vector Search es un componente esencial de los agentes de recuperacion. Permite comparar semanticamente la consulta del usuario con los documentos disponibles, recuperar informacion adicional y entregarla al modelo generativo final.

El flujo es:

```text
Consulta del usuario
        |
        v
Busqueda por similitud
        |
        v
Documentos o chunks relevantes
        |
        v
Contexto para el modelo generativo
        |
        v
Respuesta mejor fundamentada
```

Databricks Vector Search es la solucion administrada de almacenamiento y busqueda vectorial utilizada en la demostracion.

## Objetivos de la demostracion

Al finalizar el laboratorio, se debe poder:

- Identificar los pasos necesarios para calcular embeddings.
- Configurar y crear un indice de Vector Search mediante el SDK y la interfaz.
- Implementar y comparar tres metodos de busqueda.
- Usar standard similarity search.
- Usar hybrid search.
- Usar full-text search.
- Mejorar la precision mediante reranking.
- Aplicar buenas practicas para equilibrar costo, exactitud y estrategias de actualizacion.

## Requisitos del laboratorio

### Endpoint de Vector Search

Se necesita un endpoint de Vector Search creado y en estado **Ready**. En el ambiente del laboratorio ya existe un endpoint compartido porque los participantes no tienen permisos administrativos para crear uno nuevo.

El endpoint puede revisarse desde:

```text
Compute -> Vector Search
```

No es necesario crear ni modificar el endpoint proporcionado.

### Serverless compute

El notebook requiere **Serverless environment version 4**.

Al seleccionar serverless, el laboratorio configura la version correcta del ambiente e instala las dependencias necesarias. Si surge un problema, la configuracion puede verificarse en la seccion **Environment**.

### Dependencia del SDK

La configuracion serverless debe incluir el SDK de Databricks Vector Search, utilizado para crear y consultar el indice desde el notebook.

## Pasos principales de la demostracion

El resumen final del instructor confirma que se realizaron estas tareas:

1. Preparar la tabla fuente para Vector Search.
2. Habilitar **Change Data Feed** en la tabla Delta.
3. Crear un indice de Vector Search mediante el SDK.
4. Ejecutar standard similarity search.
5. Ejecutar hybrid search.
6. Ejecutar full-text search.

La transcripcion se considera completa, aunque no reproduce verbalmente cada interaccion realizada en la interfaz.

## Nota sobre imagenes

Esta transcripcion no vino acompanada de imagenes nuevas. Las imagenes conceptuales relacionadas con Vector Search estan en el modulo 05:

- `../assets/images/reranking_process.png`
- `../assets/images/mosaic_ai_vector_search_components.png`
- `../assets/images/vector_search_managed_embeddings_auto_sync.png`

## Filtering en similarity search

El siguiente tema es **filtering**. Cuando se hace una busqueda por similitud, en la mayoria de casos tambien existen requisitos adicionales para filtrar los resultados.

Databricks Vector Search permite usar operadores de filtro parecidos a operadores SQL. Por ejemplo:

- `NOT`
- igualdad
- comparaciones numericas como mayor que o menor que
- operadores tipo `LIKE`
- filtros por campos especificos

La idea es reducir el alcance de la busqueda para recuperar solamente documentos que cumplan ciertas condiciones.

## Ejemplo: filtro por ruta del documento

En la demo se usa de nuevo el ejemplo de **overheating prevention**, pero esta vez se agregan filtros.

El instructor aclara que la ruta debe cambiarse por la ruta propia del usuario en la demo. Si se usa una ruta que no coincide con la tabla local, la busqueda no devolvera resultados.

En la tabla de chunks existe una columna llamada `path`. Esa columna contiene la ruta del documento y puede usarse para filtrar.

El flujo es:

1. Usar el mismo texto de consulta.
2. Agregar un filtro sobre `path`.
3. Restringir la busqueda a un documento especifico.
4. Observar que los resultados cambian porque ahora solo provienen de ese documento.

Aunque `num_results` este definido como 3, si el documento filtrado solo tiene 2 resultados relevantes, se devolveran solo 2 resultados.

## Casos de uso de filtros

Los filtros son utiles cuando se desea limitar la recuperacion antes de aplicar similarity search. Algunos casos comunes:

- Filtrar por documento especifico.
- Filtrar por rango de paginas.
- Filtrar por numero de pagina.
- Filtrar por campos numericos.
- Filtrar por metadatos como tipo de documento, fecha, categoria o ruta.

Por ejemplo, se podria pedir:

```text
Traeme resultados solamente entre estas paginas.
```

O:

```text
Busca solamente dentro de este documento.
```

Esto reduce el espacio de busqueda, mejora la relevancia y puede disminuir latencia.

## Reranking

Despues de hablar de filtros, la demo introduce **reranking**.

Filtrar por ciertos campos no garantiza que el resultado sea contextualmente relevante para la consulta. La busqueda por similitud encuentra resultados similares, pero esa similitud no siempre equivale a relevancia contextual.

En el ejemplo inicial se busca:

```text
overheating prevention
```

Los documentos devueltos estan relacionados, pero algunos pueden estar mas asociados con instrucciones de seguridad, mientras otros pueden estar relacionados con gestion de bateria o modelos de vision. Es posible que un documento sobre vision model no tenga instrucciones de seguridad realmente relevantes para prevenir sobrecalentamiento.

Aqui es donde el reranking ayuda a ordenar mejor los resultados.

## Como se aplica reranking en Databricks Vector Search

Para usar reranking, se pasa un **reranker** al proceso de busqueda. La demo usa el reranker incluido con Databricks Vector Search.

Tambien se define la columna sobre la cual se hara el reranking. En este caso:

- La consulta es el texto de busqueda.
- Los resultados de similitud se reordenan usando el campo `chunk`.

El reranker evalua mejor la relacion contextual entre la consulta y cada chunk recuperado.

## Resultado del reranking

Despues de aplicar reranking, el orden de los documentos cambia.

En la demo, el documento de **safety and compliance** sube de posicion porque es mas relevante contextualmente para la consulta sobre prevencion de sobrecalentamiento.

Esto demuestra una idea importante:

```text
Similarity search encuentra candidatos parecidos.
Reranking decide cuales son realmente mas relevantes para la consulta.
```

Por eso, despues del reranking, el documento de seguridad y cumplimiento queda en primer lugar.

## Buenas practicas con Databricks Vector Search

La demo finaliza con buenas practicas recomendadas al usar Databricks Vector Search.

### 1. Minimizar dimensiones de embeddings cuando sea posible

Se recomienda reducir la dimension del embedding cuando sea posible, pero considerando el trade-off con la calidad de recuperacion.

Si las pruebas muestran que un modelo de menor dimension y uno de mayor dimension producen una precision similar, conviene preferir el de menor dimension.

Razones:

- Menor latencia.
- Busqueda mas rapida.
- Menor costo.
- Menor almacenamiento.

### 2. Definir un numero pequeno de resultados

Se debe definir `num_results` de forma razonable y usar un numero pequeno siempre que sea posible.

Por ejemplo, en lugar de pedir miles de resultados, conviene pedir solo los necesarios para la aplicacion.

Esto ayuda a:

- Reducir el tiempo de escaneo.
- Disminuir latencia.
- Evitar costos innecesarios.
- Entregar menos ruido al modelo generativo.

### 3. Elegir el tipo correcto de endpoint o compute

Databricks Vector Search soporta opciones como **standard** y **storage optimized**.

Cada una tiene trade-offs:

- **Standard:** menor latencia.
- **Storage optimized:** menor costo, pero puede tener mayor latencia.

La eleccion depende del caso de uso. Si se necesita baja latencia para una aplicacion interactiva, standard puede ser mejor. Si el costo es mas importante y la latencia no es tan critica, storage optimized puede ser suficiente.

### 4. Usar filtros para reducir el alcance de recuperacion

Usar filtros siempre que sea posible ayuda a limitar el espacio de busqueda.

Beneficios:

- Menos datos escaneados.
- Menor latencia.
- Resultados mas enfocados.
- Mejor precision en escenarios con metadatos confiables.

### 5. Preferir standard similarity search cuando no se necesita hybrid search

Si no se necesita busqueda hibrida, conviene preferir la busqueda estandar por similitud.

La busqueda estandar usa **ANN (Approximate Nearest Neighbor)**, que es el algoritmo comun en vector search para busqueda por similitud.

Ventajas de la busqueda estandar:

- Es mas rapida.
- Tiene menor latencia.
- Puede ofrecer mayor queries per second.

La busqueda hibrida es util cuando hay palabras clave criticas que deben coincidir, por ejemplo codigos de producto, nombres exactos o terminos tecnicos especificos. Pero si el caso de uso no requiere esas coincidencias exactas, la busqueda estandar suele ser mas eficiente.

## Resumen de la demo

En esta demostracion se mostro como preparar y usar Vector Search para recuperacion:

1. Preparar la tabla fuente para Vector Search.
2. Habilitar **Change Data Feed** en la tabla.
3. Usar el SDK para crear un indice de Vector Search.
4. Ejecutar distintos metodos de busqueda:
   - Standard similarity search.
   - Hybrid search.
   - Full-text search.
5. Usar filtros para restringir resultados.
6. Aplicar reranking para mejorar relevancia contextual.
7. Revisar buenas practicas de rendimiento y costo.

## Conceptos clave para el simulador

- Los filtros permiten restringir similarity search usando metadatos como `path`, pagina, fecha, categoria o valores numericos.
- Un filtro puede hacer que se devuelvan menos resultados que `num_results` si no existen suficientes coincidencias dentro del subconjunto filtrado.
- Similarity search no garantiza relevancia contextual perfecta; solo mide cercania o similitud.
- Reranking reordena candidatos recuperados segun relevancia contextual frente a la consulta.
- Databricks Vector Search incluye soporte para reranking.
- Reducir dimensiones de embeddings puede mejorar costo y latencia si no afecta la precision.
- Pedir menos resultados reduce tiempo de escaneo y ruido para el modelo.
- Standard search con ANN suele ser mas rapida que hybrid search.
- Hybrid search conviene cuando las palabras clave exactas son importantes.
- Storage optimized puede ser mas barato; standard puede ofrecer menor latencia.
