/**
 * 🥋 THE DATA DOJO — Bank: databricks-advanced-pipelines
 * Total: 4 questions (2 EN + 2 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-advanced-pipelines-1",
    "courseId": "databricks-advanced-pipelines",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Lakeflow Declarative Pipelines, how do you capture slowly changing dimensions with history tracking (SCD Type 2)?",
    "options": [
      {
        "id": "a",
        "text": "Using `AUTO CDC INTO ... STORED AS SCD TYPE 2` specifying `keys`, `sequence_by`, and valid start/end timestamp columns"
      },
      {
        "id": "b",
        "text": "Using standard SQL `INSERT INTO` statements without versioning"
      },
      {
        "id": "c",
        "text": "By maintaining two separate databases and manual diff scripts"
      },
      {
        "id": "d",
        "text": "SCD Type 2 is not supported in Databricks pipelines"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Lakeflow Declarative Pipelines provides native SCD Type 2 handling via `AUTO CDC` (formerly `APPLY CHANGES`), managing start/end timestamps and active flag columns automatically.",
    "domain": "CDC with AUTO CDC APIs"
  },
  {
    "id": "databricks-advanced-pipelines-1-es",
    "courseId": "databricks-advanced-pipelines",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En Lakeflow Declarative Pipelines, ¿cómo se gestionan dimensiones que cambian lentamente preservando el historial (SCD Tipo 2)?",
    "options": [
      {
        "id": "a",
        "text": "Utilizando `AUTO CDC INTO ... STORED AS SCD TYPE 2` definiendo `keys`, `sequence_by` y columnas de vigencia temporal"
      },
      {
        "id": "b",
        "text": "Utilizando sentencias `INSERT INTO` convencionales sin versionado"
      },
      {
        "id": "c",
        "text": "Manteniendo dos bases de datos separadas y scripts manuales de comparación"
      },
      {
        "id": "d",
        "text": "SCD Tipo 2 no es soportado en canalizaciones de Databricks"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Lakeflow Declarative Pipelines implementa SCD Tipo 2 nativo mediante `AUTO CDC`, gestionando automáticamente timestamps de validez y marcas de registro activo.",
    "domain": "CDC con APIs AUTO CDC"
  },
  {
    "id": "databricks-advanced-pipelines-2",
    "courseId": "databricks-advanced-pipelines",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What action occurs when a record violates a pipeline expectation defined with `ON VIOLATION FAIL UPDATE`?",
    "options": [
      {
        "id": "a",
        "text": "The pipeline execution halts immediately with an error, preventing corrupt data from committing to the table"
      },
      {
        "id": "b",
        "text": "The bad row is written anyway and a warning is logged"
      },
      {
        "id": "c",
        "text": "The bad row is dropped silently without recording metrics"
      },
      {
        "id": "d",
        "text": "The cluster restarts automatically"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "`ON VIOLATION FAIL UPDATE` ensures zero tolerance for invalid records by failing the transaction immediately.",
    "domain": "Data Quality Expectations"
  },
  {
    "id": "databricks-advanced-pipelines-2-es",
    "courseId": "databricks-advanced-pipelines",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué acción se ejecuta cuando un registro viola una expectativa definida con `ON VIOLATION FAIL UPDATE`?",
    "options": [
      {
        "id": "a",
        "text": "La ejecución de la canalización se detiene inmediatamente con error, impidiendo que datos corruptos se confirmen en la tabla"
      },
      {
        "id": "b",
        "text": "El registro erróneo se escribe de todos modos y se emite una advertencia"
      },
      {
        "id": "c",
        "text": "La fila inválida se descarta silenciosamente sin registrar métricas"
      },
      {
        "id": "d",
        "text": "El cluster se reinicia automáticamente"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "`ON VIOLATION FAIL UPDATE` aborta de inmediato la actualización de la tabla, impidiendo la ingestión de datos no conformes.",
    "domain": "Expectativas de Calidad de Datos"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
