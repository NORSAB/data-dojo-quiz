window.questionsData = (window.questionsData || []).concat([
  {
    "id": "db-devops-1",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the difference between a unit test and an integration test in a data pipeline context?",
    "options": [
      {
        "id": "a",
        "text": "Unit tests run on the cluster; integration tests run locally in the developer's IDE"
      },
      {
        "id": "b",
        "text": "Unit tests verify individual functions in isolation using synthetic data; integration tests verify that pipeline components work correctly together in a realistic environment"
      },
      {
        "id": "c",
        "text": "Unit tests check schema correctness only; integration tests check row counts only"
      },
      {
        "id": "d",
        "text": "Unit tests use pytest; integration tests must use unittest"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unit tests validate individual functions or transformations in isolation with small in-memory synthetic inputs. Integration tests execute across multiple pipeline stages or real infrastructure to verify end-to-end data flow and connectivity.",
    "domain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-devops-1-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia entre una prueba unitaria (unit test) y una prueba de integración (integration test) en el contexto de canalizaciones de datos?",
    "options": [
      {
        "id": "a",
        "text": "Las pruebas unitarias se ejecutan en el cluster; las pruebas de integración corren localmente en el IDE del desarrollador"
      },
      {
        "id": "b",
        "text": "Las pruebas unitarias verifican funciones individuales de forma aislada usando datos sintéticos; las pruebas de integración verifican que los componentes del pipeline funcionen coordinadamente en un entorno realista"
      },
      {
        "id": "c",
        "text": "Las pruebas unitarias comprueban únicamente esquemas; las pruebas de integración solo validan conteo de filas"
      },
      {
        "id": "d",
        "text": "Las pruebas unitarias exigen pytest; las pruebas de integración obligan a usar unittest"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las pruebas unitarias aíslan la lógica de transformación de dependencias externas evaluando funciones puras, mientras que las pruebas de integración validan la interoperabilidad entre capas, almacenes de datos y servicios.",
    "domain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-devops-2",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "After unit testing all helper functions, a team wants to validate that the bronze, silver, and gold tables produced by the end-to-end pipeline satisfy data-quality rules (no nulls in key columns, expected value ranges, expected row counts) every time the pipeline runs. They prefer to avoid writing extra setup and teardown code in python. What is the most effective approach?",
    "options": [
      {
        "id": "a",
        "text": "Write custom Bash assertions in a separate job cluster"
      },
      {
        "id": "b",
        "text": "Define expectations directly inside a declarative pipeline"
      },
      {
        "id": "c",
        "text": "Query the tables manually using SQL after each run"
      },
      {
        "id": "d",
        "text": "Export the Delta tables to external CSV files for verification"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Declarative expectations (`CONSTRAINT ... EXPECT ...`) integrate data-quality validation directly into pipeline definitions, automating row checks and logging quality metrics without requiring custom Python test harnesses.",
    "domain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-devops-2-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tras probar unitariamente las funciones auxiliares, un equipo desea validar que las tablas bronze, silver y gold cumplan reglas de calidad de datos (sin nulos en claves, rangos válidos, conteos esperados) en cada corrida, evitando escribir código complejo de configuración y limpieza en Python. ¿Cuál es el enfoque más eficaz?",
    "options": [
      {
        "id": "a",
        "text": "Escribir aserciones personalizadas en scripts de Bash en un cluster independiente"
      },
      {
        "id": "b",
        "text": "Definir expectativas (expectations) directamente dentro de la canalización declarativa"
      },
      {
        "id": "c",
        "text": "Consultar las tablas manualmente con SQL en el workspace tras cada ejecución"
      },
      {
        "id": "d",
        "text": "Exportar las tablas Delta a archivos CSV externos para revisarlas con scripts"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las expectativas nativas de Spark Declarative Pipelines permiten declarar reglas de calidad directamente en el DDL (`EXPECT`), ejecutándolas automáticamente en cada corrida con trazabilidad completa en el registro de eventos.",
    "domain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-devops-3",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a PySpark pipeline, the gold layer is created using a SQL function that performs aggregations and joins on silver tables. The team wants to test this logic using synthetic data. How should the function be designed to support this?",
    "options": [
      {
        "id": "a",
        "text": "Hardcode the production schema and table names inside the function body"
      },
      {
        "id": "b",
        "text": "A function can accept catalog, schema, and table names as parameters so the test can inject temporary test tables"
      },
      {
        "id": "c",
        "text": "Create duplicate production tables inside the test environment"
      },
      {
        "id": "d",
        "text": "Disable SQL query parsing during test runs"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Parameterizing target and source catalog, schema, and table names allows test suites to inject isolated test schemas or temporary in-memory views without touching production datasets.",
    "domain": "Software Engineering & Modularization"
  },
  {
    "id": "db-devops-3-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En un pipeline de PySpark, la capa gold se crea mediante una función SQL que realiza agregaciones y cruces sobre tablas silver. El equipo desea probar esta lógica usando datos sintéticos. ¿Cómo debe diseñarse la función para permitirlo?",
    "options": [
      {
        "id": "a",
        "text": "Codificar en duro (hardcode) los nombres de tablas y esquemas de producción dentro de la función"
      },
      {
        "id": "b",
        "text": "Diseñar la función para que acepte nombres de catálogo, esquema y tablas como parámetros, permitiendo a la prueba inyectar tablas temporales de test"
      },
      {
        "id": "c",
        "text": "Clonar las tablas de producción completas dentro del entorno de pruebas"
      },
      {
        "id": "d",
        "text": "Desactivar la compilación de consultas SQL durante las corridas de prueba"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La inyección de dependencias mediante parámetros configurables para catálogos y esquemas permite a las pruebas unitarias e integrales ejecutar la misma lógica sobre tablas o vistas sintéticas temporales.",
    "domain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-devops-4",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following scenarios would integration testing catch that unit testing helper functions would likely miss?",
    "options": [
      {
        "id": "a",
        "text": "A syntax error inside a pure string cleaning function"
      },
      {
        "id": "b",
        "text": "A join condition in the pipeline that silently drops matching rows due to an unexpected type coercion between two production tables"
      },
      {
        "id": "c",
        "text": "A division-by-zero error in a local math helper function"
      },
      {
        "id": "d",
        "text": "A typo in a local variable name"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Type coercion mismatches across external datasets, catalog permission issues, and schema evolution anomalies only manifest when pipeline components interact with real table metadata during integration tests.",
    "domain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-devops-4-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes escenarios detectaría una prueba de integración que las pruebas unitarias de funciones auxiliares difícilmente identificarían?",
    "options": [
      {
        "id": "a",
        "text": "Un error de sintaxis dentro de una función pura de limpieza de cadenas"
      },
      {
        "id": "b",
        "text": "Una condición de JOIN en el pipeline que descarta filas coincidentes silenciosamente debido a una coerción de tipos inesperada entre dos tablas reales"
      },
      {
        "id": "c",
        "text": "Un error de división entre cero en una función matemática local"
      },
      {
        "id": "d",
        "text": "Una falta ortográfica en el nombre de una variable local"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las discrepancias de tipos de datos entre esquemas reales, desajustes de claves en cruces y permisos de almacenamiento solo se evidencian cuando los componentes se comunican entre sí en un entorno integrado.",
    "domain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-devops-5",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A pipeline must run the same transformation logic in development, staging, and production environments, but each environment uses different catalogs, schemas, and cloud storage paths. What is the best practice for managing these environment differences?",
    "options": [
      {
        "id": "a",
        "text": "Maintain separate Git branches with hardcoded paths for each environment"
      },
      {
        "id": "b",
        "text": "Parameterize the pipeline with configuration variables or bundle target settings"
      },
      {
        "id": "c",
        "text": "Manually modify notebook paths before deploying to production"
      },
      {
        "id": "d",
        "text": "Share a single production catalog across all development environments"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Using environment configurations (e.g. Databricks Asset Bundle targets or pipeline configuration parameters) allows the same versioned codebase to deploy cleanly to dev, staging, or prod without code changes.",
    "domain": "Multi-Environment Deployment & Configuration"
  },
  {
    "id": "db-devops-5-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un pipeline debe ejecutar la misma lógica de transformación en desarrollo, staging y producción, pero cada entorno utiliza diferentes catálogos, esquemas y rutas cloud. ¿Cuál es la mejor práctica para gestionar estas diferencias?",
    "options": [
      {
        "id": "a",
        "text": "Mantener ramas de Git separadas con rutas fijas codificadas en duro para cada ambiente"
      },
      {
        "id": "b",
        "text": "Parametrizar el pipeline mediante variables de configuración o definiciones de target en bundles"
      },
      {
        "id": "c",
        "text": "Editar manualmente las rutas en los notebooks antes de desplegar en producción"
      },
      {
        "id": "d",
        "text": "Compartir un único catálogo de producción para todos los desarrolladores"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La separación entre código y configuración (principio de doce factores) mediante variables de entorno o targets de Databricks Asset Bundles garantiza despliegues reproducibles e inmutables.",
    "domain": "Despliegue Multi-Entorno y Configuración"
  },
  {
    "id": "db-devops-6",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What happens when a unit test that uses assertDataFrameEqual fails?",
    "options": [
      {
        "id": "a",
        "text": "The cluster automatically reboots to resolve the failure"
      },
      {
        "id": "b",
        "text": "The test raises an error showing exactly which values, schemas, or row counts differ between the DataFrames"
      },
      {
        "id": "c",
        "text": "The assertion silently logs a warning and marks the test as passed"
      },
      {
        "id": "d",
        "text": "The test framework overwrites the expected DataFrame with the actual DataFrame"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "`pyspark.testing.assertDataFrameEqual` performs a thorough structural and value comparison, outputting rich failure diagnostics highlighting specific mismatched cells, schemas, or row disparities.",
    "domain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-devops-6-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sucede cuando falla una prueba unitaria que utiliza assertDataFrameEqual de PySpark?",
    "options": [
      {
        "id": "a",
        "text": "El cluster se reinicia automáticamente para intentar resolver la discrepancia"
      },
      {
        "id": "b",
        "text": "La prueba genera un error detallado que muestra exactamente qué valores, esquemas o conteos de filas difieren entre los DataFrames"
      },
      {
        "id": "c",
        "text": "La aserción registra un aviso en silencio y marca la prueba como aprobada"
      },
      {
        "id": "d",
        "text": "El framework de pruebas sobrescribe los datos esperados con los obtenidos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "`assertDataFrameEqual` compara rigurosamente esquemas, tipos y contenido celda por celda, imprimiendo un reporte visual de diferencias si los DataFrames no coinciden con precisión.",
    "domain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-devops-7",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A team currently builds and edits a multi-task job (unit test task, SDP pipeline task, downstream SQL alert task) directly in the Databricks Workspace UI. Which problem does this approach introduce, and how can it be resolved?",
    "options": [
      {
        "id": "a",
        "text": "The UI causes job runs to take twice as long; resolve by using interactive clusters"
      },
      {
        "id": "b",
        "text": "Manual UI changes lack version history and auditability; resolve by defining the job as code (for example, using an asset bundle) so changes can be tracked in version control, reviewed via pull requests, and deployed automatically via CI/CD"
      },
      {
        "id": "c",
        "text": "The UI limits jobs to only two tasks; resolve by upgrading to higher cluster tiers"
      },
      {
        "id": "d",
        "text": "The UI does not allow scheduling; resolve by writing cron triggers in python"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Managing workflows purely via UI point-and-click creates configuration drift and lack of auditability. Defining Jobs as Code via Databricks Asset Bundles (DABs) ensures version control, peer reviews, and automated CI/CD deployment.",
    "domain": "CI/CD & Asset Bundles / Workflows as Code"
  },
  {
    "id": "db-devops-7-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un equipo crea y edita un job multi-tarea directamente en la interfaz web de Databricks. ¿Qué problema introduce este enfoque y cómo se resuelve?",
    "options": [
      {
        "id": "a",
        "text": "La interfaz web ralentiza las corridas al doble de tiempo; se resuelve usando clusters interactivos"
      },
      {
        "id": "b",
        "text": "Los cambios manuales carecen de historial y auditoría; se resuelve definiendo el job como código (por ejemplo, con un Databricks Asset Bundle) para rastrear cambios en Git, revisarlos vía PRs y desplegarlos con CI/CD"
      },
      {
        "id": "c",
        "text": "La interfaz web limita los jobs a un máximo de dos tareas; se resuelve aumentando la categoría del cluster"
      },
      {
        "id": "d",
        "text": "La UI impide programar horarios; se resuelve programando disparadores cron en scripts Python"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La administración manual por UI conduce a la divergencia de configuraciones (drift). Tratar los Workflows como Código (Databricks Asset Bundles) permite gobernanza, trazabilidad y despliegues automatizados con CI/CD.",
    "domain": "CI/CD y Paquetes de Activos / Workflows como Código"
  },
  {
    "id": "db-devops-8",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why is it better to use a small synthetic DataFrame created with spark.createDataFrame() rather than reading a sample from production storage in a unit test?",
    "options": [
      {
        "id": "a",
        "text": "Synthetic DataFrames isolate the test from external network, permissions, and data-drift issues, ensuring tests are deterministic and fast"
      },
      {
        "id": "b",
        "text": "Spark cannot create DataFrames from production storage during unit tests"
      },
      {
        "id": "c",
        "text": "Production storage charges per query, which violates testing policies"
      },
      {
        "id": "d",
        "text": "Synthetic DataFrames support more data types than Delta tables"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Unit tests must be fast, deterministic, and self-contained. Synthetic DataFrames provide controlled inputs with known edge cases (nulls, empty strings) without external storage or network dependencies.",
    "domain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-devops-8-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué es mejor utilizar un DataFrame sintético pequeño creado con spark.createDataFrame() en lugar de leer una muestra de producción en una prueba unitaria?",
    "options": [
      {
        "id": "a",
        "text": "Los DataFrames sintéticos aíslan la prueba de problemas de red, permisos y variación de datos (data drift), garantizando pruebas rápidas y deterministas"
      },
      {
        "id": "b",
        "text": "Spark no puede crear DataFrames desde el almacenamiento de producción durante pruebas unitarias"
      },
      {
        "id": "c",
        "text": "El almacenamiento de producción factura por consulta, lo que incumple las políticas de testing"
      },
      {
        "id": "d",
        "text": "Los DataFrames sintéticos admiten más tipos de datos que las tablas Delta"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las pruebas unitarias deben ejecutarse en milisegundos y ser reproducibles. Los DataFrames sintéticos en memoria eliminan la volatilidad de datos externos y permiten modelar casos de borde deliberados.",
    "domain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-devops-9",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following BEST describes why a function that returns a Column expression (like col('price') * col('tax_rate')) is easier to test than a function that accepts and transforms an entire DataFrame?",
    "options": [
      {
        "id": "a",
        "text": "Column expressions bypass the Spark Catalyst optimizer entirely"
      },
      {
        "id": "b",
        "text": "Column expressions are composable and lazily evaluated, allowing verification with minimal overhead"
      },
      {
        "id": "c",
        "text": "DataFrame-level functions cannot be evaluated by pytest"
      },
      {
        "id": "d",
        "text": "Column expressions do not require an active SparkSession"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Column-level transformations are pure, composable logic that can be tested with minimal DataFrame construction overhead, promoting cleaner code reuse across diverse pipeline contexts.",
    "domain": "Software Engineering & Modularization"
  },
  {
    "id": "db-devops-9-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes describe MEJOR por qué una función que devuelve una expresión de Columna (como col('price') * col('tax_rate')) es más fácil de probar que una que transforma un DataFrame completo?",
    "options": [
      {
        "id": "a",
        "text": "Las expresiones de Columna omiten por completo el optimizador Catalyst de Spark"
      },
      {
        "id": "b",
        "text": "Las expresiones de Columna son componibles y de evaluación perezosa, permitiendo verificación modular con mínima sobrecarga"
      },
      {
        "id": "c",
        "text": "Las funciones a nivel de DataFrame no pueden ser evaluadas por pytest"
      },
      {
        "id": "d",
        "text": "Las expresiones de Columna no requieren un SparkSession activo para definirse"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modularizar transformaciones en expresiones de columna (`Column -> Column`) fomenta funciones puras y reutilizables que pueden encadenarse con facilidad y verificarse de forma compacta.",
    "domain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-devops-10",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a Lakeflow Spark Declarative Pipeline, what are expectations primarily used for?",
    "options": [
      {
        "id": "a",
        "text": "Configuring cluster CPU and RAM limits"
      },
      {
        "id": "b",
        "text": "They enforce data quality rules on pipeline tables during execution and track quality metrics in the event log"
      },
      {
        "id": "c",
        "text": "Scheduling cron execution windows"
      },
      {
        "id": "d",
        "text": "Encrypting customer sensitive data at rest"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Expectations allow data engineers to define validation criteria directly on pipeline tables. During pipeline execution, records are evaluated against the expectation and metrics are automatically tracked.",
    "domain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-devops-10-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En un Lakeflow Spark Declarative Pipeline, ¿para qué se utilizan primordialmente las expectativas (expectations)?",
    "options": [
      {
        "id": "a",
        "text": "Configurar límites de CPU y memoria RAM en el cluster"
      },
      {
        "id": "b",
        "text": "Hacer cumplir reglas de calidad de datos en las tablas durante la ejecución y registrar métricas de calidad en el event log"
      },
      {
        "id": "c",
        "text": "Programar ventanas de ejecución cron"
      },
      {
        "id": "d",
        "text": "Cifrar datos sensibles de clientes en reposo"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las expectativas aplican filtros y validaciones de calidad de datos en tiempo de ejecución, permitiendo registrar advertencias, descartar filas inválidas o detener el pipeline ante anomalías.",
    "domain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-devops-11",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following BEST describes the role of the src/ folder in a modularized Databricks data engineering project?",
    "options": [
      {
        "id": "a",
        "text": "It stores temporary scratch files and ad-hoc notebooks"
      },
      {
        "id": "b",
        "text": "It contains production source code and helper functions, kept separate from test code and deployment assets"
      },
      {
        "id": "c",
        "text": "It holds compiled bytecode and external wheel dependencies"
      },
      {
        "id": "d",
        "text": "It is the staging directory for raw CSV downloads"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Following standard Python packaging and software engineering conventions, the `src/` directory isolates the core business logic, modules, and pipeline transformations from tests (`tests/`) and CI/CD deployment definitions.",
    "domain": "Software Engineering & Modularization"
  },
  {
    "id": "db-devops-11-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes describe MEJOR el rol de la carpeta src/ en un proyecto modularizado de ingeniería de datos en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Almacenar archivos temporales y notebooks exploratorios ad-hoc"
      },
      {
        "id": "b",
        "text": "Contener el código fuente de producción y funciones auxiliares, manteniéndolo separado del código de pruebas y artefactos de despliegue"
      },
      {
        "id": "c",
        "text": "Guardar el bytecode compilado y dependencias wheel externas"
      },
      {
        "id": "d",
        "text": "Servir como directorio intermedio para descargas de archivos CSV crudos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La estructura estándar de software sitúa el código de producción en `src/`, separándolo cleanly de las suites de prueba en `tests/` y las configuraciones de CI/CD en `.github/` o `databricks.yml`.",
    "domain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-devops-12",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main advantage of creating a Databricks Workflow as code (e.g., using Databricks Asset Bundles or Terraform) rather than building it in the Databricks UI?",
    "options": [
      {
        "id": "a",
        "text": "It enables free cluster compute hours"
      },
      {
        "id": "b",
        "text": "The code can be version-controlled, parameterized, peer-reviewed, and deployed consistently across environments"
      },
      {
        "id": "c",
        "text": "It replaces the underlying Spark engine with a faster proprietary compiler"
      },
      {
        "id": "d",
        "text": "It eliminates the need for data quality expectations"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Workflows as Code enables software development lifecycle (SDLC) best practices: source versioning in Git, automated CI/CD testing, PR code reviews, and programmatic multi-environment deployments.",
    "domain": "CI/CD & Asset Bundles / Workflows as Code"
  },
  {
    "id": "db-devops-12-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal ventaja de crear un Workflow de Databricks como código (por ejemplo, con Databricks Asset Bundles o Terraform) en lugar de construirlo en la UI?",
    "options": [
      {
        "id": "a",
        "text": "Otorga horas gratuitas de cómputo en el cluster"
      },
      {
        "id": "b",
        "text": "El código puede ser versionado en Git, parametrizado, revisado por pares y desplegado de forma consistente entre múltiples entornos"
      },
      {
        "id": "c",
        "text": "Reemplaza el motor Spark por un compilador propietario más rápido"
      },
      {
        "id": "d",
        "text": "Elimina la necesidad de aplicar expectativas de calidad de datos"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Definir infraestructura y pipelines como código (IaC / DaC) habilita revisiones por pull request, gobernanza de cambios, automatización de pruebas y despliegues reproducibles sin intervención manual.",
    "domain": "CI/CD y Paquetes de Activos / Workflows como Código"
  },
  {
    "id": "db-devops-13",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is a Personal Access Token (PAT) used for when connecting Databricks to Git providers?",
    "options": [
      {
        "id": "a",
        "text": "It provides administrative root access to the underlying Linux virtual machine"
      },
      {
        "id": "b",
        "text": "It authenticates Databricks to perform Git operations (such as clone, pull, and commit) on the user's behalf"
      },
      {
        "id": "c",
        "text": "It bypasses all Unity Catalog table security rules"
      },
      {
        "id": "d",
        "text": "It is required to run serverless SQL warehouses"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "A Personal Access Token (PAT) from a Git provider (GitHub, GitLab, Azure DevOps) authorizes Databricks Git Folders to clone repositories, switch branches, pull updates, and push commits securely.",
    "domain": "Version Control & Git Best Practices"
  },
  {
    "id": "db-devops-13-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Para qué se utiliza un Personal Access Token (PAT) al conectar Databricks con proveedores de Git?",
    "options": [
      {
        "id": "a",
        "text": "Proporcionar acceso root administrativo a la máquina virtual Linux subyacente"
      },
      {
        "id": "b",
        "text": "Autenticar a Databricks para realizar operaciones de Git (como clonar, hacer pull y commit) en nombre del usuario"
      },
      {
        "id": "c",
        "text": "Omitir todas las reglas de control de accesos de Unity Catalog"
      },
      {
        "id": "d",
        "text": "Es un requisito obligatorio para encender SQL Warehouses serverless"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El PAT de Git actúa como la credencial segura para que Databricks Git Folders interactúe con el repositorio remoto (GitHub, GitLab, Bitbucket) respetando los permisos del desarrollador.",
    "domain": "Control de Versiones y Mejores Prácticas de Git"
  },
  {
    "id": "db-devops-14",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following is a direct benefit of modularizing code into separate Python files instead of keeping everything in one notebook?",
    "options": [
      {
        "id": "a",
        "text": "Clusters consume zero memory when running pure Python files"
      },
      {
        "id": "b",
        "text": "Team members can work on separate modules without merge conflicts, and individual modules can be imported and tested in isolation"
      },
      {
        "id": "c",
        "text": "It removes the need for Unity Catalog governance"
      },
      {
        "id": "d",
        "text": "PySpark execution speeds are quadrupled automatically"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modular Python packages facilitate clean collaboration, minimize Git merge conflicts, promote DRY (Don't Repeat Yourself) design, and enable automated unit testing using standard frameworks like pytest.",
    "domain": "Software Engineering & Modularization"
  },
  {
    "id": "db-devops-14-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes es un beneficio directo de modularizar código en archivos Python separados en lugar de mantenerlo todo en un único notebook?",
    "options": [
      {
        "id": "a",
        "text": "Los clusters consumen cero memoria al ejecutar archivos Python puros"
      },
      {
        "id": "b",
        "text": "Los miembros del equipo pueden trabajar en módulos independientes sin conflictos de merge en Git, y los módulos individuales pueden importarse y probarse de forma aislada"
      },
      {
        "id": "c",
        "text": "Elimina la necesidad de aplicar gobernanza en Unity Catalog"
      },
      {
        "id": "d",
        "text": "La velocidad de ejecución de PySpark se cuadruplica automáticamente"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Descomponer la lógica en módulos (`.py`) evita colisiones en Git comunes en notebooks monolíticos y permite la reutilización directa y pruebas automatizadas con pytest.",
    "domain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-devops-15",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is a key drawback of using Databricks Jobs with notebook tasks for integration testing compared to running automated tests via CI/CD pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Notebook tasks cannot connect to Unity Catalog"
      },
      {
        "id": "b",
        "text": "Job-based tests require additional code for setup, teardown, and assertion reporting compared to standard test frameworks"
      },
      {
        "id": "c",
        "text": "Databricks Jobs do not support cluster autoscaling"
      },
      {
        "id": "d",
        "text": "Notebook tasks only run in read-only mode"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Notebooks lack native test runners like pytest fixtures, parameterized matrices, and standard xUnit reporting, requiring extensive boilerplate to manage test state, cleanup, and status reporting.",
    "domain": "Integration Testing & Pipeline Verification"
  },
  {
    "id": "db-devops-15-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una desventaja importante de utilizar Databricks Jobs con tareas de notebook para pruebas de integración en comparación con ejecutar pruebas automatizadas con pipelines CI/CD?",
    "options": [
      {
        "id": "a",
        "text": "Las tareas de notebook no pueden conectarse a Unity Catalog"
      },
      {
        "id": "b",
        "text": "Las pruebas basadas en notebooks requieren código adicional manual para preparación, limpieza (teardown) y reporte de aserciones en comparación con frameworks estándar"
      },
      {
        "id": "c",
        "text": "Databricks Jobs no admite escalado automático de clusters"
      },
      {
        "id": "d",
        "text": "Las tareas de notebook solo pueden ejecutarse en modo de solo lectura"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los notebooks no fueron diseñados como ejecutores de pruebas; carecen de fixtures nativos, parametrización limpia y recolección estandarizada de errores, requiriendo scripts complejos de soporte.",
    "domain": "Pruebas de Integración y Verificación de Pipelines"
  },
  {
    "id": "db-devops-16",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A team has written a helper that maps a numeric column to a tier string (e.g., balance > 10000 -> 'Platinum'). To write a unit test for this helper using pytest, what is the best approach?",
    "options": [
      {
        "id": "a",
        "text": "Deploy the helper to production and monitor customer tier values"
      },
      {
        "id": "b",
        "text": "Build a small in-memory DataFrame using spark.createDataFrame(), pass it to the helper, and verify the result using assertDataFrameEqual()"
      },
      {
        "id": "c",
        "text": "Query the largest production Delta table and visually check the first 10 rows"
      },
      {
        "id": "d",
        "text": "Write the results to temporary CSV files on the local hard drive"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The standard pattern for PySpark unit testing creates a small test DataFrame representing boundary conditions, runs the transformation helper, and validates the output against an expected DataFrame using `assertDataFrameEqual`.",
    "domain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-devops-16-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un equipo ha escrito una función auxiliar que mapea una columna numérica a una categoría de cliente (por ejemplo, balance > 10000 -> 'Platinum'). Para escribir una prueba unitaria con pytest, ¿cuál es el mejor enfoque?",
    "options": [
      {
        "id": "a",
        "text": "Desplegar la función en producción y monitorear los valores de los clientes en vivo"
      },
      {
        "id": "b",
        "text": "Construir un pequeño DataFrame en memoria con spark.createDataFrame(), pasarlo a la función auxiliar y comprobar el resultado con assertDataFrameEqual()"
      },
      {
        "id": "c",
        "text": "Consultar la tabla Delta más grande de producción e inspeccionar visualmente las primeras 10 filas"
      },
      {
        "id": "d",
        "text": "Escribir los resultados en archivos CSV temporales en el disco duro local"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El estándar de oro en testing de PySpark consiste en generar datos sintéticos representativos en memoria, aplicar la transformación y verificar la equivalencia exacta con `assertDataFrameEqual`.",
    "domain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-devops-17",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why should unit test functions be named with the test_ prefix?",
    "options": [
      {
        "id": "a",
        "text": "It grants the function administrator privileges in the Databricks cluster"
      },
      {
        "id": "b",
        "text": "pytest uses naming conventions to automatically discover and run test functions without manual configuration"
      },
      {
        "id": "c",
        "text": "Python syntax requires test_ for any function that contains assertions"
      },
      {
        "id": "d",
        "text": "It prevents the function from being compiled into bytecode"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Pytest automatically identifies and executes test files matching `test_*.py` and test functions matching `test_*()` following Python testing discovery conventions.",
    "domain": "Unit Testing with PySpark & pytest"
  },
  {
    "id": "db-devops-17-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué las funciones de prueba unitaria deben nombrarse con el prefijo test_?",
    "options": [
      {
        "id": "a",
        "text": "Otorga a la función privilegios de administrador en el cluster de Databricks"
      },
      {
        "id": "b",
        "text": "pytest utiliza esta convención de nomenclatura para descubrir y ejecutar automáticamente las funciones de prueba sin configuración manual"
      },
      {
        "id": "c",
        "text": "La sintaxis básica de Python exige test_ en cualquier función que contenga aserciones"
      },
      {
        "id": "d",
        "text": "Evita que la función sea compilada a bytecode"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El mecanismo de descubrimiento (test discovery) de pytest busca de forma predeterminada archivos y funciones que comiencen con `test_`, facilitando la automatización en CI/CD.",
    "domain": "Pruebas Unitarias con PySpark y pytest"
  },
  {
    "id": "db-devops-18",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A data engineer has built an ETL pipeline as one large notebook containing data ingestion, cleaning, transformation, and report generation. The pipeline fails occasionally, but finding the root cause is difficult. What should the engineer do first to make the pipeline more maintainable?",
    "options": [
      {
        "id": "a",
        "text": "Increase cluster size to prevent memory errors"
      },
      {
        "id": "b",
        "text": "Refactor the transformation logic into small reusable functions located in separate Python files"
      },
      {
        "id": "c",
        "text": "Combine the notebook with other notebooks into an even larger master script"
      },
      {
        "id": "d",
        "text": "Convert the entire pipeline to single-threaded Bash commands"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Refactoring monolithic code into modular functions with single responsibilities makes each stage testable, isolates bugs, and simplifies debugging and ongoing maintenance.",
    "domain": "Software Engineering & Modularization"
  },
  {
    "id": "db-devops-18-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un ingeniero de datos construyó una canalización ETL en un único notebook gigante que abarca ingesta, limpieza, transformación y reportes. La canalización falla ocasionalmente, pero aislar la causa raíz es complejo. ¿Qué debería hacer primero para hacerla mantenible?",
    "options": [
      {
        "id": "a",
        "text": "Aumentar el tamaño del cluster para disimular posibles fallas de memoria"
      },
      {
        "id": "b",
        "text": "Refactorizar la lógica de transformación en funciones pequeñas y reutilizables ubicadas en archivos Python independientes"
      },
      {
        "id": "c",
        "text": "Combinar el notebook con otros notebooks para crear un archivo maestro aún mayor"
      },
      {
        "id": "d",
        "text": "Convertir toda la canalización a scripts mono-hilo de Bash"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modularizar el código aplicando el principio de responsabilidad única (Single Responsibility Principle) permite probar cada componente por separado y localizar de inmediato el origen de los fallos.",
    "domain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-devops-19",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main reason to break a PySpark ETL pipeline into separate, modular functions?",
    "options": [
      {
        "id": "a",
        "text": "To circumvent Databricks licensing limitations"
      },
      {
        "id": "b",
        "text": "It makes each piece of logic easier to test, debug, reuse, and maintain independently"
      },
      {
        "id": "c",
        "text": "To enforce sequential single-threaded execution across worker nodes"
      },
      {
        "id": "d",
        "text": "To eliminate the need for Spark execution plans"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Modular functions promote testability (functions can be unit tested without running the entire pipeline), reusability across jobs, maintainability, and clean team collaboration.",
    "domain": "Software Engineering & Modularization"
  },
  {
    "id": "db-devops-19-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la razón principal para descomponer una canalización ETL de PySpark en funciones modulares separadas?",
    "options": [
      {
        "id": "a",
        "text": "Eludir restricciones de licenciamiento en Databricks"
      },
      {
        "id": "b",
        "text": "Hace que cada pieza de lógica sea más fácil de probar, depurar, reutilizar y mantener de manera independiente"
      },
      {
        "id": "c",
        "text": "Forzar ejecución secuencial de un solo hilo en los nodos worker"
      },
      {
        "id": "d",
        "text": "Eliminar la necesidad de compilar planes de ejecución en Spark"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La modularización permite validar componentes atómicos con pruebas unitarias, detectar regresiones velozmente y compartir utilidades comunes entre múltiples canalizaciones corporativas.",
    "domain": "Ingeniería de Software y Modularización"
  },
  {
    "id": "db-devops-20",
    "courseId": "databricks-devops-de",
    "lang": "en",
    "type": "single_choice",
    "prompt": "A Lakeflow Spark Declarative Pipeline uses a target configuration that specifies the catalog and schema where output tables are written. Why is this important for DevOps workflows?",
    "options": [
      {
        "id": "a",
        "text": "It permanently locks table definitions so developers cannot change them"
      },
      {
        "id": "b",
        "text": "The same pipeline code can be deployed to dev, staging, or prod by simply overriding the target setting"
      },
      {
        "id": "c",
        "text": "It allows pipelines to run without a cluster"
      },
      {
        "id": "d",
        "text": "It automatically backs up tables to another cloud provider"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Separating target schema configuration from declarative table logic ensures that identical pipeline code is safely promoted across dev, staging, and prod environments simply by overriding target variables.",
    "domain": "Multi-Environment Deployment & Configuration"
  },
  {
    "id": "db-devops-20-es",
    "courseId": "databricks-devops-de",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Un Lakeflow Spark Declarative Pipeline utiliza una configuración de 'target' que especifica el catálogo y esquema donde se escriben las tablas de salida. ¿Por qué es esto crucial para los flujos de trabajo DevOps?",
    "options": [
      {
        "id": "a",
        "text": "Bloquea permanentemente las definiciones de tablas para impedir modificaciones"
      },
      {
        "id": "b",
        "text": "El mismo código del pipeline puede desplegarse en desarrollo, staging o producción simplemente sobreescribiendo el parámetro de target"
      },
      {
        "id": "c",
        "text": "Permite que las canalizaciones se ejecuten sin requerir un cluster de cómputo"
      },
      {
        "id": "d",
        "text": "Respalda automáticamente las tablas en otro proveedor de nube"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El parámetro de target desacopla la ubicación física del destino de la definición de transformaciones, posibilitando la promoción continua de código inmutable a través de los diferentes entornos.",
    "domain": "Despliegue Multi-Entorno y Configuración"
  }
]);
