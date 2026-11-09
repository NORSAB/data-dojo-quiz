window.questionsData = (window.questionsData || []).concat([
  {
    "id": "db-lakeflow-jobs-1",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "File Arrival Triggers are ideal for automating jobs characterized by what type of data ingestion pattern?",
    "options": [
      {
        "id": "a",
        "text": "Unpredictable or irregular data ingestion"
      },
      {
        "id": "b",
        "text": "Highly predictable, daily batches"
      },
      {
        "id": "c",
        "text": "Manual data uploads only"
      },
      {
        "id": "d",
        "text": "Consistent, hourly scheduling"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "File Arrival Triggers monitor an external cloud storage volume or location and trigger job execution immediately upon detecting new files, making them ideal for unpredictable, event-driven ingestion.",
    "domain": "Execution Modes & Triggers"
  },
  {
    "id": "db-lakeflow-jobs-1-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Para qué tipo de patrón de ingesta de datos son ideales los disparadores por llegada de archivos (File Arrival Triggers)?",
    "options": [
      {
        "id": "a",
        "text": "Ingesta de datos impredecible o irregular"
      },
      {
        "id": "b",
        "text": "Lotes diarios altamente predecibles"
      },
      {
        "id": "c",
        "text": "Cargas manuales de datos exclusivamente"
      },
      {
        "id": "d",
        "text": "Programación horaria consistente"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los disparadores por llegada de archivos (File Arrival Triggers) monitorean un volumen o ruta cloud y disparan el Job tan pronto se detectan nuevos archivos, resultando ideales para cargas orientadas a eventos e irregulares.",
    "domain": "Modos de Ejecución y Disparadores"
  },
  {
    "id": "db-lakeflow-jobs-2",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are running a business-critical Lakeflow Job on Databricks using serverless compute. The job must:\n- Start as quickly as possible\n- Minimize overall execution time\n- Can tolerate higher cost if it improves reliability and performance\n\nWhat is the best action to take?",
    "options": [
      {
        "id": "a",
        "text": "Schedule the job to run less frequently"
      },
      {
        "id": "b",
        "text": "Disable autoscaling to reduce overhead"
      },
      {
        "id": "c",
        "text": "Switch to an interactive cluster so the compute is always running"
      },
      {
        "id": "d",
        "text": "Enable Performance Optimized mode for the serverless job"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "The Performance Optimized compute mode for serverless jobs prioritizes rapid startup and Photon acceleration to meet aggressive SLA requirements for mission-critical production workloads.",
    "domain": "Compute & Cost Optimization"
  },
  {
    "id": "db-lakeflow-jobs-2-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ejecuta un Lakeflow Job crítico para el negocio en Databricks con cómputo serverless. El trabajo debe:\n- Iniciar lo más rápido posible\n- Minimizar el tiempo total de ejecución\n- Tolerar un costo mayor si mejora el rendimiento y la confiabilidad\n\n¿Cuál es la mejor acción a realizar?",
    "options": [
      {
        "id": "a",
        "text": "Programar el trabajo para que se ejecute con menor frecuencia"
      },
      {
        "id": "b",
        "text": "Desactivar el escalado automático para reducir sobrecarga"
      },
      {
        "id": "c",
        "text": "Cambiar a un cluster interactivo para que el cómputo esté siempre encendido"
      },
      {
        "id": "d",
        "text": "Habilitar el modo Optimizado para Rendimiento (Performance Optimized) en el trabajo serverless"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "El modo Performance Optimized en cómputo Serverless prioriza la velocidad de inicio casi instantánea y la asignación prioritaria de recursos Photon para cumplir con los SLAs más exigentes.",
    "domain": "Cómputo y Optimización de Costos"
  },
  {
    "id": "db-lakeflow-jobs-3",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Notifications in Lakeflow Jobs can be triggered in which scenarios?",
    "options": [
      {
        "id": "a",
        "text": "Only when the Spark UI detects an error"
      },
      {
        "id": "b",
        "text": "Only upon job failure"
      },
      {
        "id": "c",
        "text": "When the task begins, completes, or fails"
      },
      {
        "id": "d",
        "text": "Only upon manual intervention"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Databricks Lakeflow Jobs supports notifications (email or webhooks to Slack, Teams, PagerDuty) configured for multiple lifecycle events: on start (begins), on success (completes), on failure, and when exceeding duration thresholds.",
    "domain": "Monitoring, Notifications & Repair Runs"
  },
  {
    "id": "db-lakeflow-jobs-3-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿En cuáles escenarios pueden dispararse las notificaciones en Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "Únicamente cuando la interfaz Spark UI detecta un error"
      },
      {
        "id": "b",
        "text": "Exclusivamente ante el fallo de un trabajo"
      },
      {
        "id": "c",
        "text": "Cuando la tarea comienza, se completa con éxito o falla"
      },
      {
        "id": "d",
        "text": "Solo tras una intervención manual del operador"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs permite notificaciones granulares tanto por correo electrónico como por destinos de webhook ante el inicio (on start), finalización exitosa (on success) o fallo (on failure) de tareas y trabajos.",
    "domain": "Monitoreo, Notificaciones y Reparación"
  },
  {
    "id": "db-lakeflow-jobs-4",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main purpose of Lakeflow Jobs in Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Managing workspace users and permissions"
      },
      {
        "id": "b",
        "text": "Building interactive dashboards and visualizations"
      },
      {
        "id": "c",
        "text": "Orchestrating and automating end-to-end data, analytics, and AI workflows"
      },
      {
        "id": "d",
        "text": "Writing custom machine learning algorithms from scratch"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs is Databricks' fully managed orchestration service for defining, scheduling, monitoring, and automating complex Directed Acyclic Graphs (DAGs) of data, analytics, and machine learning tasks.",
    "domain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-lakeflow-jobs-4-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de Lakeflow Jobs en Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Gestionar usuarios y permisos del espacio de trabajo"
      },
      {
        "id": "b",
        "text": "Construir paneles interactivos y visualizaciones"
      },
      {
        "id": "c",
        "text": "Orquestar y automatizar flujos de trabajo integrales de datos, analítica e IA"
      },
      {
        "id": "d",
        "text": "Escribir algoritmos de aprendizaje automático personalizados desde cero"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs es el servicio de orquestación nativo de Databricks para construir, calendarizar y monitorear DAGs de tareas que abarcan notebooks, pipelines, consultas SQL, scripts Python y modelos de IA.",
    "domain": "Orquestación y Arquitectura de Workflows"
  },
  {
    "id": "db-lakeflow-jobs-5",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When initiating a repair run for a specific failed task, which other tasks are automatically selected for rerun?",
    "options": [
      {
        "id": "a",
        "text": "Only the failed task itself"
      },
      {
        "id": "b",
        "text": "The failed task and all its dependent downstream tasks"
      },
      {
        "id": "c",
        "text": "All tasks in the job DAG"
      },
      {
        "id": "d",
        "text": "All upstream parent tasks"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks repair runs save significant time and compute by reusing successful upstream task outputs, re-executing only the failed task and any downstream tasks that depend on it.",
    "domain": "Monitoring, Notifications & Repair Runs"
  },
  {
    "id": "db-lakeflow-jobs-5-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al iniciar una ejecución de reparación (Repair Run) para una tarea que falló, ¿qué otras tareas se seleccionan automáticamente para reejecutarse?",
    "options": [
      {
        "id": "a",
        "text": "Únicamente la tarea que falló por sí sola"
      },
      {
        "id": "b",
        "text": "La tarea fallida y todas sus tareas dependientes aguas abajo (downstream)"
      },
      {
        "id": "c",
        "text": "Todas las tareas del DAG del trabajo sin excepción"
      },
      {
        "id": "d",
        "text": "Todas las tareas ascendentes o padres (upstream)"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La función Repair Run conserva los resultados de las tareas previas exitosas y vuelve a correr únicamente el nodo fallido y su árbol descendiente (downstream), optimizando tiempo y costos.",
    "domain": "Monitoreo, Notificaciones y Reparación"
  },
  {
    "id": "db-lakeflow-jobs-6",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How does the dynamic nature of the If/Else task enhance job pipelines?",
    "options": [
      {
        "id": "a",
        "text": "Simplifies data governance setup"
      },
      {
        "id": "b",
        "text": "Makes the workflow adaptable and responsive to actual results"
      },
      {
        "id": "c",
        "text": "Reduces the overhead of managing task parameters"
      },
      {
        "id": "d",
        "text": "Eliminates the need for testing pipeline code"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "If/Else conditional tasks evaluate boolean conditions or task output values at runtime, dynamically branching the workflow based on data quality results, row counts, or execution flags.",
    "domain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-6-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo mejora la naturaleza dinámica de la tarea If/Else a los pipelines de jobs?",
    "options": [
      {
        "id": "a",
        "text": "Simplifica la configuración de gobernanza de datos"
      },
      {
        "id": "b",
        "text": "Hace que el flujo de trabajo sea adaptable y responda a los resultados reales en tiempo de ejecución"
      },
      {
        "id": "c",
        "text": "Reduce la sobrecarga de administración de parámetros del trabajo"
      },
      {
        "id": "d",
        "text": "Elimina por completo la necesidad de probar el código del pipeline"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las tareas condicionales If/Else evalúan expresiones lógicas en caliente, permitiendo bifurcar la ejecución (por ejemplo, alertar si no hay filas o continuar con el pipeline si se superan validaciones).",
    "domain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-7",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a Lakeflow Job with the following workflow:\n- A data ingestion task runs first\n- Two validation tasks run in parallel after ingestion\n- A publish task should run only if both validation tasks succeed\n\nHow should the publish task be configured?",
    "options": [
      {
        "id": "a",
        "text": "Set Run if condition to 'At least one succeeded'"
      },
      {
        "id": "b",
        "text": "Set Run if condition to 'All succeeded' with dependencies on both validation tasks"
      },
      {
        "id": "c",
        "text": "Configure the validation tasks to run sequentially"
      },
      {
        "id": "d",
        "text": "Create two separate publish tasks, one for each validation task"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Setting the publish task's dependencies to include both validation tasks and selecting the Run if condition 'All succeeded' ensures that downstream publishing only occurs when both parallel validations pass.",
    "domain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-7-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está diseñando un Lakeflow Job con el siguiente flujo de trabajo:\n- Primero se ejecuta una tarea de ingesta de datos\n- Luego de la ingesta se ejecutan dos tareas de validación en paralelo\n- Una tarea de publicación debe ejecutarse únicamente si ambas validaciones terminan con éxito\n\n¿Cómo debe configurarse la tarea de publicación?",
    "options": [
      {
        "id": "a",
        "text": "Configurar la condición Run if en 'At least one succeeded' (Al menos una tuvo éxito)"
      },
      {
        "id": "b",
        "text": "Configurar la condición Run if en 'All succeeded' (Todas tuvieron éxito) dependiendo de ambas tareas de validación"
      },
      {
        "id": "c",
        "text": "Configurar las tareas de validación para que se ejecuten secuencialmente de forma obligatoria"
      },
      {
        "id": "d",
        "text": "Crear dos tareas de publicación independientes, una para cada validación"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al definir dependencias sobre las dos tareas de validación paralelas y fijar la condición de disparo 'All succeeded', la tarea de publicación espera a que ambas finalicen satisfactoriamente antes de arrancar.",
    "domain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-8",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When using dashboard tasks in Lakeflow Jobs, what is required for the dashboard to function properly?",
    "options": [
      {
        "id": "a",
        "text": "The dashboard must be created using Python notebooks only"
      },
      {
        "id": "b",
        "text": "The dashboard must be private to the job creator"
      },
      {
        "id": "c",
        "text": "The dashboard must be published and connected to a running SQL warehouse"
      },
      {
        "id": "d",
        "text": "The dashboard must use single-node classic compute"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Lakeflow Jobs dashboard tasks trigger refreshes of published Databricks AI/BI dashboards, which require the dashboard to be published and associated with an accessible SQL Warehouse.",
    "domain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-8-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al utilizar tareas de tipo Dashboard en Lakeflow Jobs, ¿qué se requiere para que el dashboard funcione adecuadamente?",
    "options": [
      {
        "id": "a",
        "text": "El dashboard debe haber sido creado exclusivamente con notebooks de Python"
      },
      {
        "id": "b",
        "text": "El dashboard debe ser privado y accesible únicamente por el creador del job"
      },
      {
        "id": "c",
        "text": "El dashboard debe estar publicado y conectado a un SQL Warehouse en ejecución"
      },
      {
        "id": "d",
        "text": "El dashboard debe utilizar cómputo clásico de nodo único"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Las tareas de dashboard en Jobs ejecutan la actualización de dashboards AI/BI ya publicados; para computar los nuevos datasets se requiere que el dashboard esté publicado y enlazado a un SQL Warehouse activo.",
    "domain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-9",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When comparing continuous execution to scheduled execution, which component is unique to the Continuous Trigger setup?",
    "options": [
      {
        "id": "a",
        "text": "Trigger status activation"
      },
      {
        "id": "b",
        "text": "Cron expression setting"
      },
      {
        "id": "c",
        "text": "Built-in retry management"
      },
      {
        "id": "d",
        "text": "Manual run options"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Continuous execution triggers immediately restart the job as soon as the previous run completes (or fails), incorporating built-in retry backoff management to maintain continuous stream processing.",
    "domain": "Execution Modes & Triggers"
  },
  {
    "id": "db-lakeflow-jobs-9-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al comparar la ejecución continua con la ejecución programada, ¿qué componente es característico y exclusivo de la configuración de Disparador Continuo (Continuous Trigger)?",
    "options": [
      {
        "id": "a",
        "text": "Activación del estado del disparador (Trigger status)"
      },
      {
        "id": "b",
        "text": "Definición de expresiones Cron"
      },
      {
        "id": "c",
        "text": "Gestión integrada de reintentos (Built-in retry management)"
      },
      {
        "id": "d",
        "text": "Opciones de ejecución manual bajo demanda"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El modo de ejecución continua vigila la persistencia del flujo y relanza automáticamente el trabajo tras completarse o recuperarse de errores transitorios mediante políticas de reintento automatizadas.",
    "domain": "Modos de Ejecución y Disparadores"
  },
  {
    "id": "db-lakeflow-jobs-10",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is required before using a SQL query file in a Lakeflow Job task?",
    "options": [
      {
        "id": "a",
        "text": "The query must be less than 1000 characters"
      },
      {
        "id": "b",
        "text": "The query must use only SELECT statements"
      },
      {
        "id": "c",
        "text": "The query must be optimized for performance"
      },
      {
        "id": "d",
        "text": "The query file must be saved in the workspace or a Git repository"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "To execute a SQL task from a file in Lakeflow Jobs, the `.sql` script must be committed to a connected Git repo or saved inside workspace files.",
    "domain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-10-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué se requiere antes de poder utilizar un archivo de consulta SQL en una tarea de Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "La consulta debe tener menos de 1000 caracteres"
      },
      {
        "id": "b",
        "text": "La consulta debe utilizar únicamente sentencias SELECT"
      },
      {
        "id": "c",
        "text": "La consulta debe haber sido optimizada previamente con EXPLAIN"
      },
      {
        "id": "d",
        "text": "El archivo de consulta debe estar guardado en los archivos del espacio de trabajo (Workspace) o en un repositorio Git"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Para orquestar scripts SQL modulares, el archivo con extensión `.sql` debe residir en los Workspace Files o sincronizado a través de Databricks Git Folders.",
    "domain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-11",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the fundamental purpose of a For Each task in Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "Executing the same nested task multiple times per item in an input array"
      },
      {
        "id": "b",
        "text": "Running tasks sequentially with no parallel execution"
      },
      {
        "id": "c",
        "text": "Handling conditional branching logic"
      },
      {
        "id": "d",
        "text": "Validating data quality expectations"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "A `For Each` task loops through elements of a JSON array or parameter list, executing a nested task (e.g. processing regional partitions or customer IDs) either in sequence or with concurrency up to 100 items.",
    "domain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-11-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito fundamental de una tarea For Each en Lakeflow Jobs?",
    "options": [
      {
        "id": "a",
        "text": "Ejecutar la misma tarea anidada múltiples veces, iterando sobre cada elemento de un arreglo de entrada"
      },
      {
        "id": "b",
        "text": "Ejecutar tareas secuencialmente sin posibilidad de paralelismo"
      },
      {
        "id": "c",
        "text": "Gestionar bifurcaciones lógicas condicionales"
      },
      {
        "id": "d",
        "text": "Validar expectativas de calidad de datos"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La tarea `For Each` permite parametrizar ejecuciones dinámicas iterando sobre un arreglo JSON (por ejemplo, una lista de sucursales o fechas), ejecutando tareas anidadas en paralelo o en serie.",
    "domain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-12",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are building a Lakeflow Job to automate a workflow that includes multiple steps, such as data preparation, model training, and validation. Which statement correctly describes how Jobs and Tasks relate in this workflow?",
    "options": [
      {
        "id": "a",
        "text": "A task defines an individual unit of work, while a job orchestrates one or more tasks into a coordinated DAG"
      },
      {
        "id": "b",
        "text": "A job defines an individual step, while a task is the scheduled container"
      },
      {
        "id": "c",
        "text": "Jobs and tasks are identical concepts in Databricks and can be used interchangeably"
      },
      {
        "id": "d",
        "text": "A task can contain multiple independent jobs"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "In Databricks Lakeflow Jobs, a Task is the fundamental unit of work (running a notebook, query, pipeline, or python file), and a Job is the overarching DAG orchestration container managing scheduling, parameters, and dependencies.",
    "domain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-lakeflow-jobs-12-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está construyendo un Lakeflow Job para automatizar un flujo de trabajo que incluye preparación de datos, entrenamiento de modelos y validación. ¿Qué afirmación describe correctamente la relación entre Jobs y Tareas (Tasks)?",
    "options": [
      {
        "id": "a",
        "text": "Una tarea define una unidad individual de trabajo, mientras que un job orquesta una o más tareas en un DAG coordinado"
      },
      {
        "id": "b",
        "text": "Un job define un paso individual, mientras que una tarea es el contenedor de programación"
      },
      {
        "id": "c",
        "text": "Jobs y tareas son conceptos idénticos en Databricks y se utilizan indistintamente"
      },
      {
        "id": "d",
        "text": "Una tarea puede contener múltiples jobs independientes en su interior"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Una Tarea (Task) es la unidad atómica de ejecución (notebook, script, consulta SQL), mientras que el Trabajo (Job) es la entidad que agrupa y orquesta esas tareas estableciendo dependencias y disparadores.",
    "domain": "Orquestación y Arquitectura de Workflows"
  },
  {
    "id": "db-lakeflow-jobs-13",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which three components constitute unified data engineering in Databricks Lakeflow?",
    "options": [
      {
        "id": "a",
        "text": "Unity Catalog, Connect, and Processing Engine"
      },
      {
        "id": "b",
        "text": "Connect, Spark Declarative Pipelines, and Jobs"
      },
      {
        "id": "c",
        "text": "Jobs, MLflow, and Data Warehousing"
      },
      {
        "id": "d",
        "text": "Connect, Storage, and Compute Clusters"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks Lakeflow unifies data engineering across three pillar products: Lakeflow Connect (data ingestion), Lakeflow Spark Declarative Pipelines (transformation & data quality), and Lakeflow Jobs (orchestration & automation).",
    "domain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-lakeflow-jobs-13-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuáles tres componentes constituyen la ingeniería de datos unificada en Databricks Lakeflow?",
    "options": [
      {
        "id": "a",
        "text": "Unity Catalog, Connect y Processing Engine"
      },
      {
        "id": "b",
        "text": "Connect, Spark Declarative Pipelines y Jobs"
      },
      {
        "id": "c",
        "text": "Jobs, MLflow y Data Warehousing"
      },
      {
        "id": "d",
        "text": "Connect, Storage y Compute Clusters"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El conjunto Databricks Lakeflow se compone de tres pilares integrados: Lakeflow Connect (ingesta masiva y conectores), Spark Declarative Pipelines (transformación declarativa) y Lakeflow Jobs (orquestación integral).",
    "domain": "Orquestación y Arquitectura de Workflows"
  },
  {
    "id": "db-lakeflow-jobs-14",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a Lakeflow Job that must:\n- Branch to different downstream tasks depending on whether upstream tasks succeed or fail\n- Repeat a task across iterations when needed using loop-based execution\n\nWhich Lakeflow Jobs capability supports this behavior?",
    "options": [
      {
        "id": "a",
        "text": "Conditional tasks and control flow (If/Else and For Each tasks)"
      },
      {
        "id": "b",
        "text": "Continuous execution trigger"
      },
      {
        "id": "c",
        "text": "File arrival triggers"
      },
      {
        "id": "d",
        "text": "Delta Live Tables pipelines"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Advanced orchestration logic such as branching and repetition is provided natively in Lakeflow Jobs through control flow tasks: `If/Else` for conditional execution and `For Each` for parameterized looping.",
    "domain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-14-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está diseñando un Lakeflow Job que debe:\n- Bifurcar hacia distintas tareas downstream según el resultado de éxito o fallo de tareas upstream\n- Repetir una tarea a lo largo de varias iteraciones mediante ejecución basada en bucles\n\n¿Qué capacidad de Lakeflow Jobs soporta este comportamiento?",
    "options": [
      {
        "id": "a",
        "text": "Tareas condicionales y de flujo de control (tareas If/Else y For Each)"
      },
      {
        "id": "b",
        "text": "Disparadores de ejecución continua (Continuous Trigger)"
      },
      {
        "id": "c",
        "text": "Disparadores por llegada de archivos (File Arrival Triggers)"
      },
      {
        "id": "d",
        "text": "Pipelines declarativos Delta Live Tables exclusivamente"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El control de flujo dinámico en Jobs se gestiona a través de tareas condicionales `If/Else` (para tomar caminos de éxito o fallo) y tareas `For Each` (para iterar bucles sobre listas de parámetros).",
    "domain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-15",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a Lakeflow Job that follows a fan-out pattern:\n- A single source task prepares data\n- Multiple downstream tasks perform independent processing on that same output\n\nHow do the downstream tasks typically execute relative to the source task?",
    "options": [
      {
        "id": "a",
        "text": "They run sequentially, one after another"
      },
      {
        "id": "b",
        "text": "They run in parallel once the single source task completes successfully"
      },
      {
        "id": "c",
        "text": "They run simultaneously with the source task"
      },
      {
        "id": "d",
        "text": "They only run if the source task fails"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "In a fan-out DAG topology, multiple downstream tasks declare dependency on the same single upstream parent task. Once the parent finishes, Databricks runs all downstream branches concurrently in parallel.",
    "domain": "Task Types & Dependencies (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-15-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está diseñando un Lakeflow Job que sigue un patrón de abanico (fan-out):\n- Una tarea inicial única prepara los datos\n- Múltiples tareas downstream realizan procesamiento independiente sobre esa misma salida\n\n¿Cómo se ejecutan habitualmente las tareas downstream con respecto a la tarea origen?",
    "options": [
      {
        "id": "a",
        "text": "Se ejecutan de manera estrictamente secuencial, una tras otra"
      },
      {
        "id": "b",
        "text": "Se ejecutan en paralelo una vez que la tarea origen única finaliza con éxito"
      },
      {
        "id": "c",
        "text": "Se ejecutan simultáneamente al mismo tiempo que la tarea origen"
      },
      {
        "id": "d",
        "text": "Solo se ejecutan si la tarea origen falla"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En un patrón fan-out, al depender todas las tareas downstream del mismo nodo padre, el motor de Jobs las programa para ejecutarse en paralelo tan pronto como dicho nodo padre termina exitosamente.",
    "domain": "Tipos de Tareas y Dependencias (DAGs)"
  },
  {
    "id": "db-lakeflow-jobs-16",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What major drawbacks are job clusters subject to compared to serverless clusters?",
    "options": [
      {
        "id": "a",
        "text": "Limited data governance"
      },
      {
        "id": "b",
        "text": "Lack of Python support"
      },
      {
        "id": "c",
        "text": "Higher operational cost"
      },
      {
        "id": "d",
        "text": "Start-up time"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Classic Job Clusters require VM provisioning and cloud networking startup (typically taking 3 to 7 minutes), whereas Serverless compute starts in seconds from pre-warmed instant capacity pools.",
    "domain": "Compute & Cost Optimization"
  },
  {
    "id": "db-lakeflow-jobs-16-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal desventaja de los Job Clusters clásicos en comparación con los clusters Serverless?",
    "options": [
      {
        "id": "a",
        "text": "Gobernanza de datos limitada"
      },
      {
        "id": "b",
        "text": "Falta de soporte para lenguaje Python"
      },
      {
        "id": "c",
        "text": "Costo operacional base más alto"
      },
      {
        "id": "d",
        "text": "El tiempo de arranque (Start-up time)"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Los Job Clusters clásicos deben solicitar y aprovisionar máquinas virtuales a la nube (demorando de 3 a 6 minutos), mientras que el cómputo Serverless inicia casi instantáneamente (segundos) desde pools precalentados.",
    "domain": "Cómputo y Optimización de Costos"
  },
  {
    "id": "db-lakeflow-jobs-17",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What type of parameter setting is commonly used to support advanced orchestration logic like looping or conditional execution for a specific unit of work?",
    "options": [
      {
        "id": "a",
        "text": "Global Environment Variables"
      },
      {
        "id": "b",
        "text": "Job Parameters"
      },
      {
        "id": "c",
        "text": "Task Parameters"
      },
      {
        "id": "d",
        "text": "Notification settings"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Task Parameters allow passing dynamic, task-specific values (such as iterator variables `{{input}}` in `For Each` tasks or upstream task values `{{tasks.[task_name].values.[key]}}`) into individual tasks.",
    "domain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-17-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de configuración de parámetros se utiliza comúnmente para soportar lógica de orquestación avanzada como bucles o ejecución condicional en una unidad de trabajo específica?",
    "options": [
      {
        "id": "a",
        "text": "Variables de entorno globales del sistema operativo"
      },
      {
        "id": "b",
        "text": "Parámetros de nivel de Job exclusivamente"
      },
      {
        "id": "c",
        "text": "Parámetros de Tarea (Task Parameters)"
      },
      {
        "id": "d",
        "text": "Configuración de notificaciones"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Los Parámetros de Tarea (Task Parameters) permiten inyectar valores contextuales específicos a cada tarea individual, como variables de iteración en tareas For Each o valores emitidos por tareas previas.",
    "domain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-18",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are configuring a Databricks job that runs multiple tasks. You want to define a parameter (example, `input_path`) whose value should apply to all tasks by default, unless overridden for a specific task. Where should you specify this parameter value?",
    "options": [
      {
        "id": "a",
        "text": "In the Job parameters section"
      },
      {
        "id": "b",
        "text": "In the cluster configuration"
      },
      {
        "id": "c",
        "text": "In a dedicated task parameter for every task"
      },
      {
        "id": "d",
        "text": "In a global environment variable on the driver node"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Job-level parameters define default key-value pairs accessible to every task in the job DAG via parameter references, avoiding repetitive configuration across individual tasks.",
    "domain": "Parameters & Dynamic Control (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-18-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está configurando un job de Databricks que ejecuta múltiples tareas. Desea definir un parámetro (por ejemplo, `input_path`) cuyo valor aplique a todas las tareas de forma predeterminada, a menos que se sobreescriba en una tarea concreta. ¿Dónde debe especificar este parámetro?",
    "options": [
      {
        "id": "a",
        "text": "En la sección de Parámetros del Job (Job Parameters)"
      },
      {
        "id": "b",
        "text": "En la configuración de hardware del cluster"
      },
      {
        "id": "c",
        "text": "En un parámetro de tarea dedicado repetido dentro de cada tarea"
      },
      {
        "id": "d",
        "text": "En una variable de entorno global en el nodo driver"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los Parámetros de Job se configuran a nivel raíz del workflow y son heredados por todas las tareas subordinadas como valores por defecto, simplificando la gestión centralizada de rutas y fechas.",
    "domain": "Parámetros y Control Dinámico (If/Else, For Each)"
  },
  {
    "id": "db-lakeflow-jobs-19",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are running a Lakeflow Job for a production workflow that:\n- Executes on a schedule\n- Does not require an always-on cluster\n- Should automatically shut down compute after the job completes to control costs\n\nWhich compute option best fits this use case?",
    "options": [
      {
        "id": "a",
        "text": "Interactive Cluster"
      },
      {
        "id": "b",
        "text": "Serverless or Job Compute"
      },
      {
        "id": "c",
        "text": "High-concurrency cluster"
      },
      {
        "id": "d",
        "text": "Single-node cluster kept in continuous running state"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Serverless or automated Job Compute is specifically engineered for automated scheduled workflows, provisioning resources on-demand and tearing down immediately upon job completion to minimize costs.",
    "domain": "Compute & Cost Optimization"
  },
  {
    "id": "db-lakeflow-jobs-19-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ejecuta un Lakeflow Job para un flujo de producción que:\n- Se ejecuta según un cronograma programado\n- No requiere un cluster siempre encendido\n- Debe apagar automáticamente el cómputo tras completarse el trabajo para optimizar costos\n\n¿Qué opción de cómputo se adapta mejor a este caso de uso?",
    "options": [
      {
        "id": "a",
        "text": "Cluster Interactivo multi-usuario"
      },
      {
        "id": "b",
        "text": "Cómputo Serverless o Job Compute dedicado"
      },
      {
        "id": "c",
        "text": "Cluster de alta concurrencia"
      },
      {
        "id": "d",
        "text": "Cluster de nodo único mantenido continuamente encendido"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El cómputo Serverless y los Job Clusters efímeros se aprovisionan únicamente durante la ejecución de las tareas y se destruyen de inmediato al terminar, garantizando cero costos ociosos.",
    "domain": "Cómputo y Optimización de Costos"
  },
  {
    "id": "db-lakeflow-jobs-20",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are creating a Lakeflow Job to orchestrate a workflow. In its simplest form, what is the minimum structure required for a valid job?",
    "options": [
      {
        "id": "a",
        "text": "A pipeline and a dashboard combined"
      },
      {
        "id": "b",
        "text": "A notebook and a SQL task combined"
      },
      {
        "id": "c",
        "text": "A single task that defines the work to execute"
      },
      {
        "id": "d",
        "text": "At least two tasks connected by a dependency"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "The minimum valid configuration for a Databricks Job is a single task specifying the task type (e.g. notebook, python script, SQL query) and the compute resource to execute it.",
    "domain": "Orchestration & Workflow Architecture"
  },
  {
    "id": "db-lakeflow-jobs-20-es",
    "courseId": "databricks-lakeflow-jobs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Está creando un Lakeflow Job para orquestar un flujo de trabajo. En su forma más elemental, ¿cuál es la estructura mínima obligatoria para que un job sea válido?",
    "options": [
      {
        "id": "a",
        "text": "Un pipeline y un dashboard combinados"
      },
      {
        "id": "b",
        "text": "Un notebook y una consulta SQL combinados"
      },
      {
        "id": "c",
        "text": "Una sola tarea que defina el trabajo a ejecutar"
      },
      {
        "id": "d",
        "text": "Al menos dos tareas conectadas por una relación de dependencia"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La estructura mínima de un Job en Databricks requiere únicamente una sola tarea configurada con su lógica de ejecución y su recurso de cómputo correspondiente.",
    "domain": "Orquestación y Arquitectura de Workflows"
  }
]);
