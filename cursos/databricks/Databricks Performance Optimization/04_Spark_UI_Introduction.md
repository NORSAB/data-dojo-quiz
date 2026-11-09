# Lección 04: Spark UI Introduction

**Curso:** Databricks Performance Optimization (ID: 2967)  
**Sección:** Section 1: Spark Architecture  
**Lección:** Spark UI Introduction (Lesson ID: 44366)  
**Tipo de Contenido:** Slides / Conferencia Técnica Exhaustiva (18 Slides Oficiales)  
**Estado:** Completado 100%  

---

## 1. Evidencia Visual de la Lección (Galería de Diapositivas)

A continuación se presentan las capturas en alta resolución de la arquitectura de Spark, jerarquía de ejecución, diagnóstico con Spark UI y optimización de consultas:

| Diapositiva | Descripción Técnica | Archivo de Imagen |
|---|---|---|
| **Slide 01** | Portada Oficial: Spark Architecture | ![Slide 01](capturas/04_spark_ui_intro_slide_01.png) |
| **Slide 02** | Objetivos de Aprendizaje y Competencias | ![Slide 02](capturas/04_spark_ui_intro_slide_02.png) |
| **Slide 03** | Arquitectura de Cluster: Driver, Workers, Executors | ![Slide 03](capturas/04_spark_ui_intro_slide_03.png) |
| **Slide 04** | Analogía Pedagógica del Aula de Clases | ![Slide 04](capturas/04_spark_ui_intro_slide_04.png) |
| **Slide 05** | Jerarquía de Ejecución: Application, Job, Stage, Task | ![Slide 05](capturas/04_spark_ui_intro_slide_05.png) |
| **Slide 06** | Dependencias Estrechas vs Amplias (Narrow vs Wide) | ![Slide 06](capturas/04_spark_ui_intro_slide_06.png) |
| **Slide 07** | Fases de Shuffle: Stage 1 (Map) y Stage 2 (Reduce) | ![Slide 07](capturas/04_spark_ui_intro_slide_07.png) |
| **Slide 08** | Navegación General de Pestañas de Spark UI | ![Slide 08](capturas/04_spark_ui_intro_slide_08.png) |
| **Slide 09** | Pestaña Jobs y Línea de Tiempo de Eventos | ![Slide 09](capturas/04_spark_ui_intro_slide_09.png) |
| **Slide 10** | Pestaña Stages: Métricas de Entrada/Salida y Shuffle | ![Slide 10](capturas/04_spark_ui_intro_slide_10.png) |
| **Slide 11** | Diagnóstico de Tareas Lentas (Stragglers) y Skew | ![Slide 11](capturas/04_spark_ui_intro_slide_11.png) |
| **Slide 12** | Detección y Análisis de Desbordamiento (Spill) | ![Slide 12](capturas/04_spark_ui_intro_slide_12.png) |
| **Slide 13** | Pestaña Executors: Métricas de JVM y Garbage Collection | ![Slide 13](capturas/04_spark_ui_intro_slide_13.png) |
| **Slide 14** | Pestaña SQL/DataFrame: DAG Físico y Catalyst | ![Slide 14](capturas/04_spark_ui_intro_slide_14.png) |
| **Slide 15** | Adaptive Query Execution (AQE): Optimización Dinámica | ![Slide 15](capturas/04_spark_ui_intro_slide_15.png) |
| **Slide 16** | Flujo de Optimización de Consultas (Catalyst + AQE) | ![Slide 16](capturas/04_spark_ui_intro_slide_16.png) |
| **Slide 17** | Recomendaciones Clave de Optimización de Código | ![Slide 17](capturas/04_spark_ui_intro_slide_17.png) |
| **Slide 18** | Conclusión de la Lección y Transición a la Sección 2 | ![Slide 18](capturas/04_spark_ui_intro_slide_18.png) |

---

## 2. Objetivos de Aprendizaje Oficiales

Al finalizar esta lección, el ingeniero de datos certificado será capaz de:
1. **Comprender los componentes centrales de la arquitectura de Apache Spark:** Driver Node, Worker Nodes, Cluster Manager, Executors y Cores (Execution Slots).
2. **Describir y rastrear la jerarquía de operaciones de Spark:** Diferenciar entre Application, Jobs, Stages y Tasks.
3. **Navegar e interpretar con precisión la Spark UI:** Utilizar las pestañas Jobs, Stages, Storage, Environment, Executors y SQL/DataFrame para diagnosticar cuellos de botella de rendimiento.
4. **Analizar el flujo de ejecución de una consulta:** Seguir la transformación desde Unresolved Logical Plan hasta RDDs mediante el optimizador Catalyst, el modelo de costos (CBO) y Whole-Stage Code Generation.
5. **Aprovechar Adaptive Query Execution (AQE):** Comprender cómo las estadísticas en tiempo de ejecución reoptimizan dinámicamente particiones de shuffle, tipos de joins y asimetría de datos (*skew*).
6. **Aplicar directrices de optimización de código:** Reemplazar APIs de bajo nivel (RDDs) por DataFrames/SQL, evitar acciones innecesarias en producción y prevenir cuellos de botella monohilo en el nodo Driver.

---

## 3. Arquitectura Distribuida de Apache Spark

### 3.1. Componentes Físicos del Clúster
- **Driver Node (1 por clúster):**
  - Mantiene el estado de la aplicación Spark (`SparkSession` / `SparkContext`).
  - Analiza, planifica y transforma el código del usuario en un Grafo Acíclico Dirigido (DAG).
  - Programa la ejecución de tareas a través del DAG Scheduler y Task Scheduler.
  - Coordina el envío de tareas a los ejecutores y consolida los resultados para el cliente o la consola.
- **Worker Nodes:**
  - Máquinas virtuales o servidores físicos administrados por el clúster.
  - Alojan uno o más procesos de **Executors**.
- **Executors:**
  - Procesos JVM dedicados que residen en los Worker Nodes.
  - Ejecutan las tareas individuales asignadas por el Driver.
  - Almacenan particiones de datos en memoria caché o disco según sea necesario.
- **Cores / Slots de Ejecución:**
  - Unidades lógicas de subprocesos dentro de cada ejecutor. Cada slot puede ejecutar exactamente una tarea (`Task`) a la vez sobre una partición de datos.

### 3.2. Analogía del Aula de Clases (Classroom Analogy)
Para conceptualizar la distribución del trabajo:
- **Profesor (Driver):** Planifica la lección, divide el problema general en ejercicios manejables y los asigna a los alumnos.
- **Pupitres / Mesas (Workers):** El espacio físico donde se ubican los recursos de cómputo.
- **Alumnos (Executors):** Los trabajadores dedicados que resuelven los problemas.
- **Manos de los Alumnos (Cores / Slots):** La capacidad simultánea de procesar trabajo.
- **Hojas de Ejercicios / Dulces (Particiones de Datos / Tareas):** Las porciones atómicas de trabajo asignadas a cada core. Si un solo alumno intenta resolver todo el examen (operación monohilo en el Driver con Pandas estándar), el resto del aula permanece ociosa.

---

## 4. Jerarquía de Ejecución en Spark

```
Spark Application
  └── Job (Desencadenado por una Acción: write, count, collect, display)
        └── Stage (Delimitado por transformaciones Wide / Shuffle)
              └── Task (Unidad mínima enviada a un Core para procesar 1 partición)
```

1. **Spark Application:** Representa el ciclo de vida completo de un programa Spark interactivo o por lotes, asociado a un único `SparkSession`.
2. **Job:** Una serie de cálculos que se desencadena cuando se invoca una **Acción** (`.count()`, `.collect()`, `.show()`, `.display()`, o escritura en almacenamiento `.save()` / `.write`). Las transformaciones intermedias se acumulan perezosamente (*lazy evaluation*).
3. **Stage:** Un conjunto de tareas que pueden ejecutarse en paralelo sin necesidad de intercambiar datos a través de la red (*narrow dependencies*). Un nuevo Stage se crea siempre que hay una frontera de intercambio masivo de datos (**Shuffle**).
4. **Task:** La unidad elemental de ejecución. Una tarea procesa una única partición de datos dentro de un slot de un ejecutor. Si un Stage procesa un DataFrame con 200 particiones, dicho Stage constará de 200 Tasks.

---

## 5. Transformaciones Narrow vs. Wide y Fronteras de Shuffle

### 5.1. Narrow Transformations (Dependencias Estrechas)
- Cada partición del DataFrame resultante depende de un número finito y conocido de particiones del DataFrame de origen (comúnmente una a una).
- **No requieren movimiento de datos entre nodos (sin shuffle).**
- El procesamiento ocurre en memoria de forma local (*pipelined execution*).
- **Ejemplos:** `filter()`, `map()`, `select()`, `withColumn()`, `drop()`, `union()`.

### 5.2. Wide Transformations (Dependencias Amplias)
- Cada partición del DataFrame resultante puede requerir datos provenientes de múltiples o de todas las particiones del DataFrame de origen.
- **Requieren un Shuffle:** los datos deben redistribuirse, particionarse por hash o rango y transferirse a través de la red entre diferentes nodos ejecutores.
- **Crea una frontera estricta de Stage.**
- **Ejemplos:** `groupBy()`, `join()`, `distinct()`, `orderBy()`, `repartition()`, `reduceByKey()`.

### 5.3. Fases del Shuffle
1. **Stage 1 (Map Stage - Shuffle Write):**
   - Los ejecutores leen sus particiones locales, aplican filtros y transformaciones estrechas.
   - Particionan los registros por la clave de agrupamiento/unión mediante una función hash.
   - Escriben los buffers ordenados en archivos de disco local del ejecutor (**Shuffle Write**).
2. **Stage 2 (Reduce Stage - Shuffle Read):**
   - Los ejecutores del siguiente Stage contactan a todos los ejecutores del Stage previo para transferir por la red los bloques de datos correspondientes a sus claves asignadas (**Shuffle Read**).
   - Realizan la agregación final, ordenamiento o unión de los registros.

---

## 6. Guía de Diagnóstico con Spark UI

La Spark UI es la herramienta forense indispensable para el rendimiento de clústeres y trabajos de datos en Databricks:

### 6.1. Pestaña Jobs
- **Event Timeline:** Muestra cuándo se iniciaron los ejecutores, cuándo se asignaron las tareas y los eventos de escalado. Permite detectar si hubo retrasos por arranque de clúster (*cold start*).
- **Job Details:** Lista cada Job con su descripción de alto nivel, duración, estado (Succeeded, Failed, Running) y los Stages asociados. Enlace directo al identificador de consulta SQL correspondiente.

### 6.2. Pestaña Stages
- **Métricas Acumuladas:** Duración total del Stage, tamaño y número de registros leídos/escritos (`Input`, `Output`).
- **Métricas de Shuffle:** Volumen de `Shuffle Read` y `Shuffle Write`. Una discrepancia alta entre el tamaño de entrada y el shuffle write revela explosión de datos o duplicación en joins.
- **Tabla de Cuantiles de Tareas (Task Metrics Summary):**
  - Desglosa las métricas en cuantiles: **Min, 25th percentile, Median, 75th percentile, Max**.
  - **Detección de Data Skew (Asimetría de Datos):** Si el valor **Max** de duración de tarea o de tamaño de `Shuffle Read` es 5x, 10x o 100x mayor que la **Mediana**, el trabajo sufre de sesgo de datos (*skew*). Una o pocas tareas procesan la gran mayoría de registros mientras el resto de los cores permanece ocioso.
  - **Desglose de Tiempos de Tarea:**
    - *Task Deserialization Time:* Tiempo gastado deserializando el código de la tarea.
    - *Duration (Executor Computing Time):* Tiempo real de CPU procesando datos.
    - *JVM GC Time:* Tiempo en el que la JVM pausó la ejecución para recolección de basura. Si supera el 10% del tiempo de cómputo, hay presión crítica sobre el Heap.
    - *Shuffle Fetch Wait Time:* Tiempo que pasó un ejecutor esperando que otros nodos enviaran bloques de shuffle por la red (cuello de botella de red/I/O).

### 6.3. Diagnóstico de Spill (Desbordamiento de Memoria)
- **Spill (Memory):** Tamaño que ocupaban los datos en memoria en formato deserializado antes de tener que expulsarlos.
- **Spill (Disk):** Tamaño que ocuparon los datos una vez comprimidos y volcados al disco local del nodo.
- **Causa Raíz:** Ocurre durante shuffles, agregaciones o joins basados en ordenamiento (*Sort-Merge Join*) cuando la memoria de ejecución (`spark.memory.fraction`) no puede contener todas las filas de una partición.
- **Impacto Severo:** Operaciones de disco y deserialización introducen penalizaciones de tiempo de 2x a 10x y pueden derivar en errores de *Out-Of-Memory* (OOM).

### 6.4. Pestaña Executors
- Monitorea cada nodo ejecutor de forma individual frente al Driver.
- Permite identificar si un ejecutor específico está procesando una cantidad desproporcionada de datos o si sufre un porcentaje anómalo de **GC Time**.
- Registra el total de cores disponibles vs cores asignados.

### 6.5. Pestaña SQL/DataFrame
- Ofrece la representación gráfica más amigable (DAG visual) del plan físico.
- Permite inspeccionar nodos clave: `FileScan` (número de archivos y bytes leídos, filtros empujados hacia abajo / *partition filters* y *pushed filters*), `Exchange` (tipo de particionamiento de shuffle), `HashAggregate`, `SortMergeJoin`, `BroadcastHashJoin`.

---

## 7. Optimización de Consultas: Catalyst y Adaptive Query Execution (AQE)

### 7.1. Pipeline del Optimizador Catalyst
```
Consulta (SQL / DataFrame)
  ↓
[1. Unresolved Logical Plan] ──(Análisis con Catálogo de Metadatos)──>
  ↓
[2. Logical Plan] ──(Optimización Lógica: Predicate Pushdown, Projection Pruning)──>
  ↓
[3. Optimized Logical Plan] ──(Physical Planning: Genera múltiples planes físicos)──>
  ↓
[4. Physical Plans] ──(Cost-Based Optimization - CBO con estadísticas de tablas)──>
  ↓
[5. Selected Physical Plan] ──(Whole-Stage Code Generation - Tungsten bytecode JVM)──>
  ↓
RDDs Ejecutables
```

### 7.2. Adaptive Query Execution (AQE)
Habilitado de forma predeterminada desde **Apache Spark 3.2** (`spark.sql.adaptive.enabled = true`).  
A diferencia de los optimizadores estáticos clásicos que deciden todo el plan antes de iniciar el trabajo basándose en estadísticas preliminares que pueden estar desactualizadas, **AQE recolecta estadísticas reales de ejecución al final de cada Stage** y reoptimiza dinámicamente los Stages posteriores antes de lanzarlos.

#### Las 3 Capacidades Principales de AQE:
1. **Coalescencia Dinámica de Particiones de Shuffle (Dynamically Coalescing Shuffle Partitions):**
   - Tradicionalmente, `spark.sql.shuffle.partitions` se configuraba estáticamente (por defecto en 200). Para conjuntos de datos pequeños, 200 generaba cientos de particiones vacías o diminutas con sobrecarga de scheduling.
   - AQE inspecciona el tamaño real de los datos escritos en la fase de shuffle y fusiona automáticamente particiones contiguas adyacentes para que cada partición resultante tenga un tamaño uniforme (~64 MB por defecto).
2. **Cambio Dinámico de Estrategia de Join (Dynamically Switching Join Strategies):**
   - Si una tabla o subconsulta grande fue reducida drásticamente tras la aplicación de filtros en Stage 1, AQE detecta que su tamaño en tiempo de ejecución cayó por debajo del umbral de broadcast (`spark.sql.autoBroadcastJoinThreshold`, por defecto 10 MB o el umbral adaptativo).
   - AQE reemplaza en caliente un costoso *Sort-Merge Join* por un eficiente **Broadcast Hash Join**, eliminando por completo la necesidad de shuffles adicionales.
3. **Optimización Dinámica de Skew Joins (Dynamically Optimizing Skew Joins):**
   - Detecta si ciertas particiones de shuffle son sustancialmente más grandes que la media.
   - Divide automáticamente la partición sesgada en subtareas más pequeñas y replica las filas de la tabla contraparte correspondiente para procesarlas en paralelo sin ahogar a un único core.

---

## 8. Recomendaciones Oficiales de Optimización de Código

1. **Utilizar DataFrames o SQL en lugar de APIs de RDD:**
   - Las APIs de bajo nivel de RDDs operan como cajas negras para Spark; el motor no comprende el esquema ni las operaciones internas, omitiendo por completo las optimizaciones de Catalyst, Tungsten y AQE.
   - DataFrames y SQL aprovechan la vectorización, compresión en memoria y generación de código Java en tiempo de ejecución.
2. **Eliminar Acciones Innecesarias en Trabajos de Producción:**
   - En cuadernos interactivos es común invocar `df.count()`, `display(df)`, `df.collect()`, `df.show()`.
   - En flujos de producción ETL/ELT, cada una de estas acciones dispara la evaluación completa del DAG y bloquea el flujo de trabajo para enviar resultados al Driver. Conserve únicamente la acción final de persistencia/escritura (`write.save()` / `write.saveAsTable()`).
3. **Prevenir Cuellos de Botella Monohilo en el Driver Node:**
   - El uso de librerías Python estándar monohilo como Pandas tradicional (`import pandas as pd`) o Python nativo fuerza a todo el conjunto de datos a transferirse al nodo Driver a través de la red, provocando errores de memoria (`Driver OOM`) y dejando inactivos a los Workers.
   - **Solución Oficial:** Utilizar la **Pandas API on Spark** (`import pyspark.pandas as ps`) o expresiones nativas de PySpark/Spark SQL, permitiendo que todas las operaciones se distribuyan de forma transparente a través de todos los cores del clúster.

---

## 9. Conexión Curricular
Esta lección concluye la **Sección 1: Spark Architecture**. Los fundamentos de jerarquía de ejecución, lectura de cuantiles en Spark UI, shuffles y optimización con AQE son la base directa para la **Sección 2: Designing the Foundation**, que comenzará con la Lección 05 (*Introduction to Designing Foundation*), el diagnóstico de *File Explosion* y la optimización de almacenamiento con *Liquid Clustering*.
