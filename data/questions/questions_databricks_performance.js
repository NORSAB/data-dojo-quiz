/**
 * 🥋 THE DATA DOJO — Bank: databricks-performance
 * Total: 10 questions (5 EN + 5 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-performance-1",
    "courseId": "databricks-performance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why is Delta Lake Liquid Clustering preferred over traditional Hive-style table partitioning (`PARTITIONED BY`) for large datasets?",
    "options": [
      {
        "id": "a",
        "text": "It prevents over-partitioning, allows flexible multi-column clustering without data skew, and allows clustering keys to be modified without rewriting the table"
      },
      {
        "id": "b",
        "text": "It converts all Delta tables into uncompressed CSV files"
      },
      {
        "id": "c",
        "text": "It only works on tables smaller than 10 MB"
      },
      {
        "id": "d",
        "text": "It requires manual Z-ORDER commands after every insert"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Liquid Clustering (`CLUSTER BY (col1, col2)`) replaces static partitioning and Z-order, dynamically scaling layout and allowing changing clustering keys without table rewrite.",
    "domain": "Liquid Clustering"
  },
  {
    "id": "databricks-performance-1-es",
    "courseId": "databricks-performance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué es preferible Liquid Clustering sobre la partición tradicional estilo Hive (`PARTITIONED BY`) en conjuntos de datos grandes?",
    "options": [
      {
        "id": "a",
        "text": "Evita el sobre-particionado, permite agrupar por múltiples columnas sin sesgo y permite modificar las claves de agrupamiento sin reescribir la tabla"
      },
      {
        "id": "b",
        "text": "Convierte todas las tablas Delta en archivos CSV sin comprimir"
      },
      {
        "id": "c",
        "text": "Solo funciona en tablas de menos de 10 MB"
      },
      {
        "id": "d",
        "text": "Requiere comandos Z-ORDER manuales tras cada inserción"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Liquid Clustering (`CLUSTER BY (col1, col2)`) sustituye el particionado rígido y Z-order, ajustando dinámicamente los archivos y permitiendo redefinir columnas sin recrear la tabla.",
    "domain": "Liquid Clustering"
  },
  {
    "id": "databricks-performance-2",
    "courseId": "databricks-performance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What tasks are automatically scheduled and executed by Databricks Predictive Optimization for Unity Catalog managed tables?",
    "options": [
      {
        "id": "a",
        "text": "Automatic file compaction (`OPTIMIZE`) and stale file cleanup (`VACUUM`) using serverless compute without impacting workspace clusters"
      },
      {
        "id": "b",
        "text": "Dropping unused tables and resetting user passwords"
      },
      {
        "id": "c",
        "text": "Restarting Spark driver nodes when queries take longer than 5 seconds"
      },
      {
        "id": "d",
        "text": "Converting SQL queries into Python code"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Predictive Optimization uses machine learning and serverless compute to continuously run `OPTIMIZE` and `VACUUM` on managed UC tables, minimizing cost and maintenance.",
    "domain": "Predictive Optimization"
  },
  {
    "id": "databricks-performance-2-es",
    "courseId": "databricks-performance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tareas programa y ejecuta automáticamente la Optimización Predictiva de Databricks en tablas administradas de Unity Catalog?",
    "options": [
      {
        "id": "a",
        "text": "Compactación automática de archivos pequeños (`OPTIMIZE`) y purga de snapshots obsoletos (`VACUUM`) con cómputo serverless dedicado"
      },
      {
        "id": "b",
        "text": "Eliminación de tablas inactivas y restablecimiento de contraseñas"
      },
      {
        "id": "c",
        "text": "Reinicio del driver de Spark cuando una consulta supera 5 segundos"
      },
      {
        "id": "d",
        "text": "Conversión automática de código SQL a Python"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Predictive Optimization usa modelos de ML y cómputo serverless para ejecutar `OPTIMIZE` y `VACUUM` continuamente en tablas UC, reduciendo costes y mantenimiento manual.",
    "domain": "Optimización Predictiva"
  },
  {
    "id": "databricks-performance-3",
    "courseId": "databricks-performance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How do Delta Deletion Vectors improve the performance of `UPDATE`, `DELETE`, and `MERGE` operations?",
    "options": [
      {
        "id": "a",
        "text": "They mark deleted rows in a small companion bitmap file without immediately rewriting entire Parquet data files"
      },
      {
        "id": "b",
        "text": "They store data rows in random memory locations across worker nodes"
      },
      {
        "id": "c",
        "text": "They convert row deletes into immediate file truncations"
      },
      {
        "id": "d",
        "text": "They disable transaction logging in Delta Lake"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Deletion Vectors record soft deletes in a lightweight bitmap file. Queries skip those rows during read, avoiding the heavy I/O of rewriting whole Parquet files for each modified row.",
    "domain": "Deletion Vectors"
  },
  {
    "id": "databricks-performance-3-es",
    "courseId": "databricks-performance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo mejoran los Vectores de Eliminación (Deletion Vectors) el rendimiento de operaciones `UPDATE`, `DELETE` y `MERGE` en Delta Lake?",
    "options": [
      {
        "id": "a",
        "text": "Registran las filas eliminadas en un archivo auxiliar de mapa de bits sin necesidad de reescribir archivos Parquet completos inmediatamente"
      },
      {
        "id": "b",
        "text": "Guardan filas eliminadas en memoria aleatoria de los workers"
      },
      {
        "id": "c",
        "text": "Convierten el borrado de filas en truncado inmediato de archivos"
      },
      {
        "id": "d",
        "text": "Deshabilitan el log transaccional de Delta Lake"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los Deletion Vectors marcan filas borradas en mapas de bits ligeros; el motor las omite al leer, evitando el coste de I/O de reescribir archivos Parquet enteros en cada actualización.",
    "domain": "Vectores de Eliminación"
  },
  {
    "id": "databricks-performance-4",
    "courseId": "databricks-performance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What architectural advantage does the Photon execution engine provide over the standard Apache Spark JVM engine?",
    "options": [
      {
        "id": "a",
        "text": "It is written in native C++ with SIMD vectorization and custom memory management optimized for modern CPU architectures"
      },
      {
        "id": "b",
        "text": "It runs queries exclusively on GPU hardware using CUDA"
      },
      {
        "id": "c",
        "text": "It replaces Delta Lake with traditional relational tables"
      },
      {
        "id": "d",
        "text": "It bypasses query planning and cost optimization"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Photon is a vectorized native query engine written in C++ that speeds up Spark SQL and DataFrame workloads via CPU instruction pipelining and zero-overhead memory access.",
    "domain": "Photon Engine"
  },
  {
    "id": "databricks-performance-4-es",
    "courseId": "databricks-performance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué ventaja arquitectónica proporciona el motor de ejecución Photon frente al motor JVM estándar de Apache Spark?",
    "options": [
      {
        "id": "a",
        "text": "Está implementado en C++ nativo con vectorización SIMD y gestión de memoria optimizada para hardware moderno"
      },
      {
        "id": "b",
        "text": "Ejecuta consultas exclusivamente sobre GPUs utilizando CUDA"
      },
      {
        "id": "c",
        "text": "Sustituye Delta Lake por tablas relacionales tradicionales"
      },
      {
        "id": "d",
        "text": "Omite la planificación de consultas y la optimización basada en costes"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Photon es un motor nativo en C++ vectorizado que acelera drásticamente operaciones SQL y DataFrames mediante procesamiento SIMD y eliminación de pausas de Garbage Collection.",
    "domain": "Motor Photon"
  },
  {
    "id": "databricks-performance-5",
    "courseId": "databricks-performance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When inspecting a SQL Query Profile in Databricks, what operator indicates that Spark spent significant time moving data across network nodes during a join or aggregation?",
    "options": [
      {
        "id": "a",
        "text": "Exchange (Shuffle Exchange)"
      },
      {
        "id": "b",
        "text": "Filter / PhotonFilter"
      },
      {
        "id": "c",
        "text": "Project / PhotonProject"
      },
      {
        "id": "d",
        "text": "Scan Delta / PhotonScan"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "The Exchange operator in Spark/Photon query plans indicates a shuffle stage where partitions are redistributed across the network among executor nodes.",
    "domain": "Query Profile & Bottleneck Diagnosis"
  },
  {
    "id": "databricks-performance-5-es",
    "courseId": "databricks-performance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al inspeccionar un Perfil de Consulta SQL en Databricks, ¿qué operador indica que Spark consumió tiempo transfiriendo datos a través de la red durante un join o agrupación?",
    "options": [
      {
        "id": "a",
        "text": "Exchange (Shuffle Exchange)"
      },
      {
        "id": "b",
        "text": "Filter / PhotonFilter"
      },
      {
        "id": "c",
        "text": "Project / PhotonProject"
      },
      {
        "id": "d",
        "text": "Scan Delta / PhotonScan"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El operador Exchange refleja un intercambio de datos en red (shuffle) entre executors, siendo habitualmente el factor determinante en el tiempo de procesamiento de joins masivos.",
    "domain": "Perfil de Consulta y Diagnóstico de Cuellos de Botella"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
