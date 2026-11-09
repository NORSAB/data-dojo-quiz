/**
 * 🥋 THE DATA DOJO — Bank: databricks-governance
 * Total: 10 questions (5 EN + 5 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-governance-1",
    "courseId": "databricks-governance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the three-level namespace structure used by Unity Catalog to uniquely identify all data assets?",
    "options": [
      {
        "id": "a",
        "text": "catalog.schema.table_or_view"
      },
      {
        "id": "b",
        "text": "database.folder.file"
      },
      {
        "id": "c",
        "text": "workspace.cluster.notebook"
      },
      {
        "id": "d",
        "text": "account.storage_account.container"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog organizes data into a 3-level hierarchy: Catalog (top-level container) -> Schema (database) -> Table, View, Volume, or Model.",
    "domain": "Unity Catalog Object Hierarchy"
  },
  {
    "id": "databricks-governance-1-es",
    "courseId": "databricks-governance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la estructura de espacio de nombres de tres niveles que utiliza Unity Catalog para identificar activos de datos?",
    "options": [
      {
        "id": "a",
        "text": "catalog.schema.table_or_view"
      },
      {
        "id": "b",
        "text": "database.folder.file"
      },
      {
        "id": "c",
        "text": "workspace.cluster.notebook"
      },
      {
        "id": "d",
        "text": "account.storage_account.container"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog organiza los datos en 3 niveles: Catálogo -> Esquema (base de datos) -> Tabla, Vista, Volumen o Modelo.",
    "domain": "Jerarquía de Objetos en Unity Catalog"
  },
  {
    "id": "databricks-governance-2",
    "courseId": "databricks-governance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Where does the Unity Catalog metastore reside in relation to Databricks workspaces?",
    "options": [
      {
        "id": "a",
        "text": "At the Databricks Account level, attached to multiple workspaces across the same cloud region"
      },
      {
        "id": "b",
        "text": "Inside each individual cluster's local memory"
      },
      {
        "id": "c",
        "text": "Inside the user's personal home folder"
      },
      {
        "id": "d",
        "text": "On an external USB drive plugged into the client PC"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "A Unity Catalog metastore is created at the account level and can be linked to multiple workspaces in the same region, providing centralized cross-workspace governance.",
    "domain": "Metastore Architecture"
  },
  {
    "id": "databricks-governance-2-es",
    "courseId": "databricks-governance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Dónde reside el metastore de Unity Catalog en relación con los workspaces de Databricks?",
    "options": [
      {
        "id": "a",
        "text": "A nivel de Cuenta (Account level), vinculado a múltiples workspaces en la misma región de la nube"
      },
      {
        "id": "b",
        "text": "En la memoria local de cada cluster individual"
      },
      {
        "id": "c",
        "text": "Dentro de la carpeta personal del usuario"
      },
      {
        "id": "d",
        "text": "En una unidad USB externa conectada a la PC del cliente"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El metastore de Unity Catalog reside a nivel de cuenta y se vincula a múltiples workspaces de la misma región, centralizando la gobernanza entre espacios de trabajo.",
    "domain": "Arquitectura de Metastore"
  },
  {
    "id": "databricks-governance-3",
    "courseId": "databricks-governance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What level of granularity does automated data lineage in Unity Catalog capture across SQL, Python, and Delta Live Tables?",
    "options": [
      {
        "id": "a",
        "text": "Table-level and column-level lineage including upstream sources and downstream consumers"
      },
      {
        "id": "b",
        "text": "Only file names without column relationships"
      },
      {
        "id": "c",
        "text": "Only CPU usage metrics of the spark driver"
      },
      {
        "id": "d",
        "text": "Lineage is only supported for plain CSV files"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog captures table-level and column-level lineage automatically across all workloads running in UC-enabled clusters and SQL warehouses.",
    "domain": "Data Lineage"
  },
  {
    "id": "databricks-governance-3-es",
    "courseId": "databricks-governance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué nivel de granularidad captura el linaje automatizado de Unity Catalog a través de SQL, Python y DLT?",
    "options": [
      {
        "id": "a",
        "text": "Linaje a nivel de tabla y de columna, detallando orígenes ascendentes y consumidores descendentes"
      },
      {
        "id": "b",
        "text": "Únicamente nombres de archivo sin relaciones de columna"
      },
      {
        "id": "c",
        "text": "Solo métricas de uso de CPU del driver de Spark"
      },
      {
        "id": "d",
        "text": "El linaje solo está disponible para archivos CSV planos"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog captura automáticamente linaje a nivel de tabla y columna en tiempo real para consultas SQL, notebooks y pipelines DLT.",
    "domain": "Linaje de Datos"
  },
  {
    "id": "databricks-governance-4",
    "courseId": "databricks-governance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What Unity Catalog securable object is designed to govern non-tabular data such as PDFs, images, raw audio, and model checkpoints?",
    "options": [
      {
        "id": "a",
        "text": "Volumes (Managed Volumes and External Volumes)"
      },
      {
        "id": "b",
        "text": "DBFS root directories"
      },
      {
        "id": "c",
        "text": "Delta Change Data Feed"
      },
      {
        "id": "d",
        "text": "Hive Metastore Partitions"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Volumes are Unity Catalog objects representing logical storage for non-tabular data files, with path format `/Volumes/catalog/schema/volume_name/`.",
    "domain": "Volumes & Unstructured Data"
  },
  {
    "id": "databricks-governance-4-es",
    "courseId": "databricks-governance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué objeto gobernable de Unity Catalog está diseñado para gestionar archivos no tabulares como PDFs, imágenes, audio y pesos de modelos?",
    "options": [
      {
        "id": "a",
        "text": "Volúmenes (Managed Volumes y External Volumes)"
      },
      {
        "id": "b",
        "text": "Directorios raíz de DBFS"
      },
      {
        "id": "c",
        "text": "Delta Change Data Feed"
      },
      {
        "id": "d",
        "text": "Particiones de Hive Metastore"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los Volúmenes representan ubicaciones de almacenamiento gobernable para archivos no tabulares con ruta `/Volumes/catalog/schema/volume_name/`.",
    "domain": "Volúmenes y Datos No Estructurados"
  },
  {
    "id": "databricks-governance-5",
    "courseId": "databricks-governance",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How are dynamic row-level security and column-level masking implemented on Unity Catalog tables?",
    "options": [
      {
        "id": "a",
        "text": "By applying SQL User-Defined Functions (UDFs) with conditional logic (e.g. `is_account_group_member()`) via `ROW FILTER` and `MASK` clauses"
      },
      {
        "id": "b",
        "text": "By duplicating physical Delta tables into separate subdirectories for each user role"
      },
      {
        "id": "c",
        "text": "By encrypting individual columns with client-side PGP keys"
      },
      {
        "id": "d",
        "text": "By running cron jobs that delete sensitive rows every night"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog uses SQL UDFs passed to `WITH ROW FILTER` and `MASK` on tables, evaluating access at query runtime according to the user's group memberships.",
    "domain": "Row Filters & Column Masks"
  },
  {
    "id": "databricks-governance-5-es",
    "courseId": "databricks-governance",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se implementan la seguridad a nivel de fila y el enmascaramiento dinámico de columnas en Unity Catalog?",
    "options": [
      {
        "id": "a",
        "text": "Aplicando funciones SQL definidas por el usuario (UDFs) con lógica condicional (ej. `is_account_group_member()`) mediante cláusulas `ROW FILTER` y `MASK`"
      },
      {
        "id": "b",
        "text": "Duplicando físicamente las tablas Delta en subdirectorios separados por cada rol"
      },
      {
        "id": "c",
        "text": "Cifrando columnas individuales con claves PGP del lado del cliente"
      },
      {
        "id": "d",
        "text": "Ejecutando scripts cron que borran filas confidenciales por la noche"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unity Catalog utiliza UDFs SQL asignadas mediante `ROW FILTER` y `MASK`, evaluando dinámicamente el acceso en tiempo de consulta según los grupos del usuario.",
    "domain": "Filtros de Fila y Máscaras de Columna"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
