# 14 - Demo: User-Defined Functions (Databricks Performance Optimization)

## 1. Visión General del Laboratorio
- **Curso:** Databricks Performance Optimization (Course ID: 2967)
- **Ruta de Certificación:** Databricks Certified Professional Data Engineer
- **Sección 3:** Code Optimization
- **Lección:** Demo: User-Defined Functions (Lección interactiva en vídeo, Lesson ID: 25610, Duración: 7m 37s / 457 segundos)
- **Notebook Oficial:** `PO 1.5 - User-Defined Functions`
- **Entorno de Cómputo del Lab:** Databricks Runtime 14.3 LTS (Apache Spark 3.5.0, Scala 2.12), Single-Node Driver `i3.xlarge` (30.5 GB RAM, 4 Cores vCPU), Photon habilitado.
- **Objetivo del Laboratorio:** Demostrar empíricamente cómo las UDFs estándar de Python introducen graves cuellos de botella de serialización y falta de paralelismo, cómo mitigar la contención de tareas mediante reparticionamiento explícito, y cómo las UDFs nativas de SQL son inlinadas y aceleradas vectorialmente por el motor Photon.

---

## 2. Inventario de Evidencias Visuales (Capturas de Alta Resolución 1080p)

| Captura | Marca de Tiempo | Contenido Técnico y Demostración |
|---|---|---|
| `capturas/14_demo_udf_015s.jpg` | 00:15 | Apertura del notebook `PO 1.5 - User-Defined Functions`, directrices de Databricks contra UDFs y ejecución de `Classroom-Setup-01.5` |
| `capturas/14_demo_udf_045s.jpg` | 00:45 | Celda 7: Generación del dataset de prueba `device_data` (60 lecturas de temperatura generadas con `spark.range(0, 60, 1, 1)`) |
| `capturas/14_demo_udf_090s.jpg` | 01:30 | Celda 11: Definición de UDF Python estándar `@udf("double")` con retardo simulado de 1 segundo por fila (`time.sleep(1)`) |
| `capturas/14_demo_udf_135s.jpg` | 02:15 | Finalización de la ejecución: 1 sola tarea ejecuta las 60 filas secuencialmente; tiempo total: **1.05 minutos (~65 segundos)** |
| `capturas/14_demo_udf_180s.jpg` | 03:00 | Análisis del cuello de botella: Spark no sabe que la UDF es cara y no subdivide la partición única |
| `capturas/14_demo_udf_225s.jpg` | 03:45 | Inspección del clúster: driver `i3.xlarge` con 4 núcleos vCPU disponibles que permanecieron ociosos durante la ejecución previa |
| `capturas/14_demo_udf_270s.jpg` | 04:30 | Celda 14: Optimización con `.repartition(num_cores)` (4 núcleos). Tiempo se reduce a **18 segundos** (paralelismo 4x) |
| `capturas/14_demo_udf_315s.jpg` | 05:15 | Celda 15: Inspección de `celsius_df.explain()`, presencia del operador físico `BatchEvalPython` |
| `capturas/14_demo_udf_360s.jpg` | 06:00 | Celda 18: Creación y ejecución de la función nativa SQL `CREATE FUNCTION farh_to_cels` |
| `capturas/14_demo_udf_405s.jpg` | 06:45 | Celda 20: `explain()` de la consulta SQL; inlining total por Catalyst y aceleración vectorial en `PhotonProject` |
| `capturas/14_demo_udf_450s.jpg` | 07:30 | Resultados finales de la consulta SQL: **0.40 segundos** de tiempo de cómputo; Photon reporta soporte completo |

---

## 3. Configuración del Entorno y Dataset de Prueba

### 3.1. Inicialización del Laboratorio
El setup elimina esquemas previos y prepara el directorio de trabajo del usuario:
```python
%run ./Includes/Classroom-Setup-01.5
```

### 3.2. Creación del Dataset Controlado (`device_data`)
Se generan exactamente 60 filas para permitir un seguimiento analítico exacto de la duración de las tareas:
```python
from pyspark.sql.functions import *

df = (spark
      .range(0, 60, 1, 1) # NOTA: Se fuerza a exactamente 1 partición inicial
      .select(
          'id',
          (col('id') % 1000).alias('device_id'),
          (rand() * 100).alias('temperature_F')
      )
     )

df.write.mode("overwrite").saveAsTable("device_data")
```

---

## 4. Experimento 1: UDF Estándar de Python (`@udf`)

### 4.1. Código y Lógica
Se define una función matemática de conversión de Fahrenheit a Celsius, inyectando un retraso artificial de 1 segundo por registro para simular operaciones analíticas pesadas (cálculo matricial, inferencia ML, parsing regex complejo):
```python
from pyspark.sql.functions import *
from pyspark.sql.types import *
import time

@udf("double")
def F_to_Celsius(f):
    # Simulación de cómputo costoso por fila
    time.sleep(1)
    return (f - 32) * (5/9)

celsius_df = (spark.table('device_data')
              .withColumn("celsius", F_to_Celsius(col('temperature_F')))
             )

celsius_df.write.mode('overwrite').saveAsTable('celsius')
```

### 4.2. Resultado del Experimento 1
- **Duración Observada:** **1.05 minutos (65 segundos)**.
- **Causa Raíz del Rendimiento Deficiente:**
  1. **Partición Única:** La tabla de origen tenía 1 sola partición física.
  2. **Invisibilidad de Coste en Catalyst:** Debido a que la UDF es una caja negra, Catalyst no tiene heurística para predecir que cada fila requiere 1 segundo de cómputo. No subdivide el trabajo automáticamente.
  3. **Monopolio de Núcleo:** Una única tarea de Spark se ejecutó en 1 solo núcleo de CPU del clúster, procesando las 60 filas secuencialmente (60 x 1s = 60s + 5s de sobrecarga IPC/I-O). Los restantes 3 núcleos del clúster estuvieron al 0% de uso.

---

## 5. Experimento 2: Mitigación de Concurrencia con `.repartition(num_cores)`

### 5.1. Código Optimizado con Repartición
Al conocer que la UDF es costosa y que el clúster dispone de 4 núcleos (instancia `i3.xlarge`), se fuerza la redistribución de los datos entre todos los cores disponibles:
```python
# Reparticionar explícitamente entre el número de cores del clúster
num_cores = 4

@udf("double")
def F_to_Celsius(f):
    time.sleep(1)
    return (f - 32) * (5/9)

celsius_df = (spark.table('device_data')
              .repartition(num_cores) # <-- REDISTRIBUCIÓN CLAVE
              .withColumn("celsius", F_to_Celsius(col('temperature_F')))
             )

celsius_df.write.mode('overwrite').saveAsTable('celsius')
```

### 5.2. Resultado del Experimento 2
- **Duración Observada:** **18 segundos**.
- **Análisis de Rendimiento:**
  - El tiempo se redujo de 65s a 18s (aceleración de 3.6x, muy cercana al límite teórico de 4x).
  - Las 60 filas se distribuyeron equitativamente en 4 tareas paralelas de 15 filas cada una, ejecutándose simultáneamente en los 4 cores vCPU.
- **Inspección del Plan Físico (`explain()`):**
  ```
  == Physical Plan ==
  AdaptiveSparkPlan isFinalPlan=false
  +- Project [id#8743L, device_id#8744L, temperature_F#8745, pythonUDF0#9138 AS celsius#8750]
     +- BatchEvalPython [F_to_Celsius(temperature_F#8745)#8749], [pythonUDF0#9138]
  ```
  - **Firma `BatchEvalPython`:** Confirma que el motor sigue dependiendo del puente IPC entre la JVM y el proceso daemon de Python. La serialización sigue presente, aunque el trabajo ahora está paralelizado.

---

## 6. Experimento 3: Sustitución por UDF Nativa de Databricks SQL

### 6.1. Definición y Ejecución de SQL UDF
Databricks permite registrar funciones definidas por el usuario directamente en el catálogo SQL:
```sql
%sql
DROP FUNCTION IF EXISTS farh_to_cels;
CREATE FUNCTION farh_to_cels (farh DOUBLE)
RETURNS DOUBLE RETURN ((farh - 32) * 5/9);

CREATE OR REPLACE TABLE celsius_sql AS
SELECT farh_to_cels(temperature_F) as Farh_to_cels_convert FROM device_data;
```

### 6.2. Resultado del Experimento 3 y Análisis del Plan Photon
- **Duración de Cómputo de la Consulta:** **0.40 segundos** (reducción masiva del 99.4% respecto a los 65s iniciales).
- **Inspección del Plan Físico (`explain`):**
  ```
  == Physical Plan ==
  *(1) ColumnarToRow
  +- PhotonResultStage
     +- PhotonProject [(((temperature_F#9650 - 32.0) * 5.0) / 9.0) AS Farh_to_cels_convert#9631]
        +- PhotonScan parquet hive_metastore.labuser7217899_0s87_da_adewd_1_5.device_data ... ReadSchema: struct<temperature_F:double>

  == Photon Explanation ==
  The query is fully supported by Photon.
  ```

### 6.3. Hallazgos Arquitectónicos Clave:
1. **Inlining Automático por Catalyst:** La función `farh_to_cels` desapareció como llamada de función. Catalyst analizó el cuerpo de la UDF y reemplazó la invocación directamente por la expresión matemática `(((temperature_F - 32.0) * 5.0) / 9.0)`.
2. **Cero Sobrecarga de Serialización:** No se crean objetos Python, ni se usa IPC, ni se instancian clases Java intermedias.
3. **Aceleración Vectorial Photon (`PhotonProject`):** La expresión inlinada se ejecutó en C++ nativo utilizando instrucciones vectoriales SIMD de la CPU sobre bloques columnares de memoria.

---

## 7. Matriz Comparativa de Resultados del Laboratorio

| Enfoque Evaluado | Mecanismo | Particiones / Concurrencia | Operador en Plan Físico | Duración Total | Factor de Aceleración |
|---|---|---|---|---|---|
| **Python UDF Estándar (Sin Repartir)** | `@udf` fila por fila vía IPC Socket | 1 partición (1 core activo, 3 ociosos) | `BatchEvalPython` | **65 s (1.05 min)** | 1.0x (Línea base) |
| **Python UDF Reparticionada** | `@udf` con `.repartition(4)` | 4 particiones (4 cores activos) | `BatchEvalPython` | **18 s** | **3.6x más rápido** |
| **SQL UDF Nativa** | SQL `CREATE FUNCTION` inlinada | Ejecución vectorizada nativa | `PhotonProject` (`PhotonScan`) | **0.40 s** | **162x más rápido** |

---

## 8. Lecciones para la Certificación Databricks Professional Data Engineer
1. **Regla de Prioridad de Implementación:**
   $$\text{Funciones Nativas SQL / Photon} \gg \text{SQL UDFs (Inlined)} \gg \text{Vectorized Pandas UDFs} \gg \text{Python UDFs Estándar}$$
2. **Mitigación de Emergencia para UDFs Existentes:** Si una pipeline heredada depende de una biblioteca Python y no se puede reescribir inmediatamente, forzar el paralelismo mediante `.repartition(total_cluster_cores)` para evitar que una sola tarea monopolice la ejecución mientras los demás núcleos están inactivos.
3. **Detección en Planes de Ejecución:**
   - Si ves `BatchEvalPython` $\rightarrow$ Alerta de UDF estándar de Python no vectorizada.
   - Si ves `ArrowEvalPython` $\rightarrow$ UDF vectorizada de Pandas con Apache Arrow.
   - Si ves `PhotonProject` / `WholeStageCodegen` $\rightarrow$ Expresión nativa inlinada con máximo rendimiento.
