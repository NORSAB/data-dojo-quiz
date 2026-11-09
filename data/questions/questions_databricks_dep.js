/**
 * 🥋 THE DATA DOJO — Bank: databricks-data-engineer-professional
 * Total: 10 questions (5 EN + 5 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-data-engineer-professional-1",
    "courseId": "databricks-data-engineer-professional",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A gold-layer object in a Lakeflow Declarative Pipeline aggregates daily order totals from a bronze source. Downstream BI dashboards read it on a schedule, and the aggregate must always reflect the full history, including late-arriving updates to prior days, not just newly appended rows.\n\nWhich object should the engineer define?",
    "options": [
      {
        "id": "a",
        "text": "A streaming table, because it processes each source row exactly once at lowest cost"
      },
      {
        "id": "b",
        "text": "A temporary view, because it reflects data without storage cost"
      },
      {
        "id": "c",
        "text": "A materialized view, because it incrementally maintains the full aggregate result, can be refreshed on schedule, and reflects late-arriving changes"
      },
      {
        "id": "d",
        "text": "A streaming table with foreachBatch merge"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Materialized views incrementally recompute full aggregates and handle historical updates and deletes. Streaming tables are append-oriented and cannot easily recalculate historical aggregations.",
    "domain": "Section 1: Developing Code for Data Processing using Python and SQL (23%)"
  },
  {
    "id": "databricks-data-engineer-professional-1-es",
    "courseId": "databricks-data-engineer-professional",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un objeto de la capa Gold en un Lakeflow Declarative Pipeline agrega totales diarios de órdenes desde una fuente Bronze. Los dashboards leen este objeto de forma programada y el agregado debe reflejar todo el historial, incluyendo actualizaciones tardías de días previos.\n\n¿Qué tipo de objeto debe definir el ingeniero?",
    "options": [
      {
        "id": "a",
        "text": "Una tabla de streaming, porque procesa cada fila una sola vez al menor coste"
      },
      {
        "id": "b",
        "text": "Una vista temporal, porque refleja datos sin coste de almacenamiento"
      },
      {
        "id": "c",
        "text": "Una vista materializada (Materialized View), porque mantiene de forma incremental el resultado agregado completo y procesa actualizaciones tardías"
      },
      {
        "id": "d",
        "text": "Una tabla de streaming con merge en foreachBatch"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Las vistas materializadas recalculan agregados globales de forma incremental y absorben cambios históricos y tardíos; las tablas de streaming están pensadas para eventos append.",
    "domain": "Sección 1: Desarrollo de Código para Procesamiento con Python y SQL (23%)"
  },
  {
    "id": "databricks-data-engineer-professional-2",
    "courseId": "databricks-data-engineer-professional",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A Structured Streaming query performs an event-time windowed aggregation. It must bound state memory growth caused by late events, and it must resume after driver failure without double-counting.\n\nWhich configuration meets both requirements?",
    "options": [
      {
        "id": "a",
        "text": "Set a watermark on the event-time column and rely on the query's checkpoint directory to restore offsets and state on restart"
      },
      {
        "id": "b",
        "text": "Use complete output mode with no watermark to retain all state"
      },
      {
        "id": "c",
        "text": "Increase spark.sql.shuffle.partitions and disable checkpointing"
      },
      {
        "id": "d",
        "text": "Wrap the aggregation in foreachBatch and manually commit offsets"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Watermarks allow Spark to discard state older than the threshold, bounding state store memory. Checkpointing ensures fault-tolerant exactly-once state recovery.",
    "domain": "Section 1: Developing Code for Data Processing using Python and SQL (23%)"
  },
  {
    "id": "databricks-data-engineer-professional-2-es",
    "courseId": "databricks-data-engineer-professional",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Una consulta de Structured Streaming realiza una agregación con ventana de tiempo de evento. Debe limitar el crecimiento de memoria por datos tardíos y reanudarse tras una falla sin duplicidad.\n\n¿Qué configuración cumple ambos requisitos?",
    "options": [
      {
        "id": "a",
        "text": "Definir un watermark en la columna de tiempo de evento y utilizar el directorio de checkpoint para recuperar offsets y estado exactamente una vez"
      },
      {
        "id": "b",
        "text": "Usar modo complete sin watermark reteniendo todo el estado en memoria"
      },
      {
        "id": "c",
        "text": "Aumentar particiones de shuffle y desactivar el checkpoint"
      },
      {
        "id": "d",
        "text": "Encapsular la agregación en foreachBatch y confirmar offsets manualmente"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El watermark permite desechar estado histórico excedido el umbral, controlando la memoria, mientras el checkpoint garantiza recuperación tolerante a fallos sin duplicados.",
    "domain": "Sección 1: Desarrollo de Código para Procesamiento con Python y SQL (23%)"
  },
  {
    "id": "databricks-data-engineer-professional-3",
    "courseId": "databricks-data-engineer-professional",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data engineer must continuously replicate insert, update, and delete change events from an operational PostgreSQL database into the lakehouse with minimal custom code.\n\nWhich approach fits the requirement?",
    "options": [
      {
        "id": "a",
        "text": "Schedule a nightly JDBC full-table read and overwrite the target table each night"
      },
      {
        "id": "b",
        "text": "Configure a Lakeflow Connect managed connector for PostgreSQL to ingest change data capture (CDC) directly into the lakehouse"
      },
      {
        "id": "c",
        "text": "Export the database to CSV in cloud storage and ingest with Auto Loader"
      },
      {
        "id": "d",
        "text": "Use OpenSharing to share the PostgreSQL tables directly"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Lakeflow Connect provides managed native database connectors for PostgreSQL, MySQL, and SQL Server that handle incremental CDC replication with zero manual pipeline code.",
    "domain": "Section 2: Data Ingestion & Acquisition (12%)"
  },
  {
    "id": "databricks-data-engineer-professional-3-es",
    "courseId": "databricks-data-engineer-professional",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un ingeniero debe replicar continuamente eventos de inserción, actualización y borrado desde una base de datos PostgreSQL operacional hacia el lakehouse con mínimo código personalizado.\n\n¿Qué enfoque satisface este requerimiento?",
    "options": [
      {
        "id": "a",
        "text": "Programar lecturas completas por JDBC cada noche sobreescribiendo la tabla destino"
      },
      {
        "id": "b",
        "text": "Configurar un conector administrado de Lakeflow Connect para PostgreSQL para ingesta continua de CDC al lakehouse"
      },
      {
        "id": "c",
        "text": "Exportar la base a archivos CSV y cargarlos con Auto Loader"
      },
      {
        "id": "d",
        "text": "Utilizar OpenSharing para compartir tablas de PostgreSQL directamente"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Lakeflow Connect ofrece conectores nativos gestionados para PostgreSQL, MySQL y SQL Server, replicando cambios CDC incrementales sin necesidad de canalizaciones manuales complejas.",
    "domain": "Sección 2: Ingestión y Adquisición de Datos (12%)"
  },
  {
    "id": "databricks-data-engineer-professional-4",
    "courseId": "databricks-data-engineer-professional",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A table receives high-throughput semi-structured payload records containing nested and evolving JSON keys. Analysts must query subfields with fast, sub-second response times using standard SQL without maintaining complex schemas.\n\nWhat data type should be used for the payload column?",
    "options": [
      {
        "id": "a",
        "text": "VARIANT data type, using `parse_json()` and subfield path expressions"
      },
      {
        "id": "b",
        "text": "Plain STRING data type with regex queries"
      },
      {
        "id": "c",
        "text": "Binary BLOB column compressed with gzip"
      },
      {
        "id": "d",
        "text": "Array of strings with comma separation"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "The `VARIANT` data type in Databricks provides high-performance binary encoding for semi-structured JSON data, enabling fast pruning, indexing, and direct SQL querying.",
    "domain": "Section 3: Data Manipulation (12%)"
  },
  {
    "id": "databricks-data-engineer-professional-4-es",
    "courseId": "databricks-data-engineer-professional",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Una tabla recibe cargas útiles semiestructuradas con claves JSON anidadas y cambiantes. Los analistas deben consultar subcampos en submilisegundos mediante SQL sin esquemas rígidos.\n\n¿Qué tipo de dato debe utilizarse para la columna de carga útil?",
    "options": [
      {
        "id": "a",
        "text": "Tipo de dato VARIANT, utilizando `parse_json()` y expresiones de acceso directo por ruta"
      },
      {
        "id": "b",
        "text": "Tipo STRING simple consultado con expresiones regulares"
      },
      {
        "id": "c",
        "text": "Columna binaria BLOB comprimida en gzip"
      },
      {
        "id": "d",
        "text": "Arreglo de cadenas separadas por comas"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El tipo `VARIANT` codifica internamente JSON semiestructurado de forma binaria optimizada, permitiendo poda de datos y consultas SQL de alta velocidad.",
    "domain": "Sección 3: Manipulación de Datos (12%)"
  },
  {
    "id": "databricks-data-engineer-professional-5",
    "courseId": "databricks-data-engineer-professional",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A 50 TB Delta table experiences high write concurrency and varied query filter patterns across `region`, `event_date`, and `device_id`. In the past, Hive-style partitioning resulted in severe small-file problems.\n\nWhat optimization strategy should be implemented?",
    "options": [
      {
        "id": "a",
        "text": "Enable Liquid Clustering using `CLUSTER BY (region, event_date, device_id)` and enable Predictive Optimization"
      },
      {
        "id": "b",
        "text": "Partition by all three columns with `PARTITIONED BY (region, event_date, device_id)`"
      },
      {
        "id": "c",
        "text": "Disable Delta Lake and switch to external CSV files"
      },
      {
        "id": "d",
        "text": "Convert the table to append-only with no clustering"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Liquid Clustering eliminates the rigid file skew and over-partitioning of Hive layouts while maintaining optimal data skipping across multiple query dimensions.",
    "domain": "Section 5: Cost & Performance Optimization (15%)"
  },
  {
    "id": "databricks-data-engineer-professional-5-es",
    "courseId": "databricks-data-engineer-professional",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Una tabla Delta de 50 TB tiene alta concurrencia de escritura y consultas filtradas por `region`, `event_date` y `device_id`. El particionado clásico generó problemas severos de archivos pequeños.\n\n¿Qué estrategia de optimización debe implementarse?",
    "options": [
      {
        "id": "a",
        "text": "Activar Liquid Clustering con `CLUSTER BY (region, event_date, device_id)` y habilitar Optimización Predictiva"
      },
      {
        "id": "b",
        "text": "Particionar por las tres columnas mediante `PARTITIONED BY (region, event_date, device_id)`"
      },
      {
        "id": "c",
        "text": "Deshabilitar Delta Lake y cambiar a archivos CSV externos"
      },
      {
        "id": "d",
        "text": "Convertir la tabla a solo inserción sin agrupamiento"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Liquid Clustering evita la fragmentación de archivos en múltiples columnas de alta cardinalidad, optimizando el salto de datos (data skipping) dinámicamente.",
    "domain": "Sección 5: Optimización de Costes y Rendimiento (15%)"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
