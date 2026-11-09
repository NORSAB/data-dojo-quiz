# Quiz: Deploy Workloads with Lakeflow Jobs

**Curso:** Deploy Workloads with Lakeflow Jobs  
**Evaluación Final:** Quiz Oficial de Certificación  
**Total de Preguntas:** 20  
**Puntaje Obtenido:** 95 / 100 (Aprobado)  
**Tiempo de Ejecución:** 6m 13s  
**Captura de Pantalla:** `capturas/15_Quiz_Deploy_Workloads_with_Lakeflow_Jobs_Score95.png`

---

## Banco de Preguntas y Respuestas Verificadas

### Pregunta 1
**Pregunta:**  
File Arrival Triggers are ideal for automating jobs characterized by what type of data ingestion pattern?

**Opciones:**
- [x] **Unpredictable or irregular data ingestion** (Correcto)
- [ ] Highly predictable, daily batches
- [ ] Manual data uploads only
- [ ] Consistent, hourly scheduling

**Explicación:**  
Los disparadores por llegada de archivos (*File Arrival Triggers*) monitorean un volumen o ubicación de almacenamiento externo en la nube y activan automáticamente el Job en cuanto detectan nuevos archivos, haciéndolos ideales para patrones de ingesta irregulares o impredecibles orientados a eventos.

---

### Pregunta 2
**Pregunta:**  
You are running a business-critical Lakeflow Job on Databricks using serverless compute. The job must:
- Start as quickly as possible
- Minimize overall execution time
- Can tolerate higher cost if it improves reliability and performance

What is the best action to take?

**Opciones:**
- [ ] Schedule the job to run less frequently
- [ ] Disable autoscaling to reduce overhead
- [ ] Switch to an interactive cluster so the compute is always running
- [x] **Enable Performance Optimized mode for the serverless job** (Correcto)

**Explicación:**  
El modo optimizado para rendimiento (*Performance Optimized mode*) en cómputo Serverless prioriza la velocidad de arranque y la capacidad de ejecución paralela con optimizaciones Photon agresivas, ideal para cargas de trabajo críticas de negocio con tolerancias estrictas de SLA.

---

### Pregunta 3
**Pregunta:**  
Notifications in Lakeflow Jobs can be triggered in which scenarios?

**Opciones:**
- [ ] Only when the Spark UI detects an error
- [ ] Only upon job failure
- [x] **When the task begins, completes, or fails** (Correcto)
- [ ] Only upon manual intervention

**Explicación:**  
Lakeflow Jobs permite configurar notificaciones por correo electrónico o destinos de webhook (Slack, Teams, PagerDuty) para los estados: inicio de tarea (*on start*), éxito (*on success*), fallo (*on failure*) y cuando se excede la duración estimada del SLA.

---

### Pregunta 4
**Pregunta:**  
What is the main purpose of Lakeflow Jobs in Databricks?

**Opciones:**
- [ ] Managing workspace users and permissions
- [ ] Building interactive dashboards and visualizations
- [x] **Orchestrating and automating end-to-end data, analytics, and AI workflows** (Correcto)
- [ ] Writing SQL and Spark transformations

**Explicación:**  
Lakeflow Jobs es el orquestador unificado y nativo de Databricks diseñado para programar, ejecutar y automatizar grafos acíclicos dirigidos (DAGs) de extremo a extremo que integran datos, modelos de Machine Learning, pipelines y analítica.

---

### Pregunta 5
**Pregunta:**  
When initiating a repair run for a specific failed task, which other tasks are automatically selected for rerun?

**Opciones:**
- [ ] Only the failed task itself
- [x] **The failed task and all its dependent downstream tasks** (Correcto)
- [ ] All tasks in the job DAG
- [ ] All upstream tasks

**Explicación:**  
En una corrida de reparación (*Repair Run*), Databricks selecciona automáticamente la tarea fallida y todas las tareas dependientes aguas abajo (*downstream tasks*), garantizando que las tareas aguas arriba ya completadas con éxito no se vuelvan a computar innecesariamente.

---

### Pregunta 6
**Pregunta:**  
How does the dynamic nature of the If/Else task enhance job pipelines?

**Opciones:**
- [ ] Simplifies data governance setup
- [x] **Makes the workflow adaptable and responsive to actual results** (Correcto)
- [ ] Reduces the overhead of managing task parameters
- [ ] Eliminates the need for clustering

**Explicación:**  
La tarea condicional `If/Else` evalúa condiciones booleanas dinámicas en tiempo de ejecución (por ejemplo, basadas en `taskValues` devueltos por notebooks o consultas SQL), adaptando la ruta de ejecución según los datos reales procesados.

---

### Pregunta 7
**Pregunta:**  
You are designing a Lakeflow Job with the following workflow:
- A data ingestion task runs first
- Two validation tasks run in parallel after ingestion
- A publish task should run only if both validation tasks succeed

How should the publish task be configured?

**Opciones:**
- [ ] Set the publish task to run if any dependency completes
- [x] **Set the publish task to run if all dependencies succeed** (Correcto)
- [ ] Set the publish task to run if at least one dependency succeeds
- [ ] Remove dependencies and schedule the publish task separately

**Explicación:**  
La regla de dependencia (*Run If condition*) debe ser `All Succeeded`, asegurando que ambas tareas de validación paralelas terminen exitosamente antes de proceder a la publicación.

---

### Pregunta 8
**Pregunta:**  
When using dashboard tasks in Lakeflow Jobs, what is required for the dashboard to function properly?

**Opciones:**
- [ ] The dashboard must be created using Python notebooks only
- [ ] The dashboard must be private to the job creator
- [x] **The dashboard must be published and connected to a SQL warehouse** (Correcto)
- [ ] The dashboard must use only real-time data sources

**Explicación:**  
Para orquestar la actualización periódica de un Lakeview Dashboard dentro de un Job, este debe estar previamente publicado y tener asignado un SQL Warehouse para ejecutar las consultas programadas.

---

### Pregunta 9
**Pregunta:**  
When comparing continuous execution to scheduled execution, which component is unique to the Continuous Trigger setup?

**Opciones:**
- [ ] Trigger status activation
- [ ] Cron expression setting
- [x] **Built-in retry management** (Correcto)
- [ ] Manual run options

**Explicación:**  
El disparador continuo (*Continuous Trigger*) incluye gestión automática de reintentos (*built-in retry management*) con retroceso exponencial para asegurar que si una ejecución falla transitoriamente, el orquestador intente recuperarla sin intervención humana.

---

### Pregunta 10
**Pregunta:**  
What is required before using a SQL query file in a Lakeflow Job task?

**Opciones:**
- [ ] The query must be less than 1000 characters
- [ ] The query must use only SELECT statements
- [ ] The query must be optimized for performance
- [x] **The query file must be saved in the workspace** (Correcto)

**Explicación:**  
Las tareas de tipo SQL File requieren que el archivo con la consulta SQL esté guardado previamente en el espacio de trabajo de Databricks (*Workspace*) o en un repositorio Git conectado.

---

### Pregunta 11
**Pregunta:**  
What is the fundamental purpose of a For Each task in Lakeflow Jobs?

**Opciones:**
- [x] **Executing the same nested task multiple times per item in an input array** (Correcto)
- [ ] Running tasks sequentially with no parallel execution
- [ ] Handling conditional branching logic
- [ ] Defining global parameters for all tasks in a job

**Explicación:**  
La tarea `For Each` itera sobre una lista de entrada (JSON array) y ejecuta la tarea anidada para cada elemento, permitiendo parametrización dinámica y control de concurrencia.

---

### Pregunta 12
**Pregunta:**  
You are building a Lakeflow Job to automate a workflow that includes multiple steps, such as data preparation, model training, and validation. Which statement correctly describes how Jobs and Tasks relate in this workflow?

**Opciones:**
- [x] **A task defines an individual unit of work, while a job orchestrates and manages the execution of one or more tasks** (Correcto)
- [ ] A job performs the actual computation, while tasks only store configuration
- [ ] Jobs and tasks are interchangeable concepts
- [ ] A task is optional if a job runs a pipeline

**Explicación:**  
Un Job actúa como el contenedor y orquestador del DAG, mientras que cada Task representa una unidad atómica de ejecución (notebook, script Python, SQL query, pipeline DLT, etc.).

---

### Pregunta 13
**Pregunta:**  
Which three components constitute unified data engineering in Databricks Lakeflow?

**Opciones:**
- [ ] Unity Catalog, Connect, and Processing Engine
- [x] **Connect, Spark Declarative Pipelines, and Jobs** (Correcto)
- [ ] Jobs, MLflow, and Data Warehousing
- [ ] Connect, Storage, and Governance

**Explicación:**  
El ecosistema Lakeflow unifica la ingeniería de datos en tres pilares:
1. **Lakeflow Connect:** Ingesta nativa desde bases de datos y SaaS.
2. **Lakeflow Pipelines (Spark Declarative Pipelines):** Transformación y calidad de datos declarativa.
3. **Lakeflow Jobs:** Orquestación, monitoreo y automatización.

---

### Pregunta 14
**Pregunta:**  
You are designing a Lakeflow Job that must:
- Branch to different downstream tasks depending on whether upstream tasks succeed or fail
- Repeat a task across iterations when needed using loop-based execution

Which Lakeflow Jobs capability supports this behavior?

**Opciones:**
- [ ] Cluster policies and compute configuration
- [ ] SQL warehouse task configurations
- [x] **Task orchestration logic, including conditional and iterative tasks** (Correcto)
- [ ] Spark Declarative Pipeline refresh task and quality rules

**Explicación:**  
Las capacidades de control de flujo avanzado en Lakeflow Jobs incluyen bifurcaciones condicionales (`If/Else`, reglas `Run If`) y tareas iterativas (`For Each`).

---

### Pregunta 15
**Pregunta:**  
You are designing a Lakeflow Job that follows a fan-out pattern:
- A single source task prepares data
- Multiple downstream tasks perform independent processing on that same output

How do the downstream tasks typically execute relative to the source task?

**Opciones:**
- [ ] They run sequentially, one after another, after the source task completes
- [ ] They run before the source task to precompute results
- [ ] They must be combined into a single task to avoid duplication
- [x] **They run in parallel after the source task completes, each depending on the same upstream task** (Correcto)

**Explicación:**  
En un patrón de abanico (*fan-out*), múltiples tareas hijas comparten la misma tarea padre upstream como dependencia y se ejecutan concurrentemente en paralelo una vez que el padre finaliza.

---

### Pregunta 16
**Pregunta:**  
What major drawbacks are job clusters subject to compared to serverless clusters?

**Opciones:**
- [ ] Limited data governance
- [ ] Lack of Python support
- [ ] Higher operational cost
- [x] **Start-up time** (Correcto)

**Explicación:**  
Los Job Clusters tradicionales requieren solicitar máquinas virtuales al proveedor de nube (AWS, Azure, GCP), lo que introduce una latencia de arranque de varios minutos, a diferencia del arranque casi instantáneo de Serverless Compute.

---

### Pregunta 17
**Pregunta:**  
What type of parameter setting is commonly used to support advanced orchestration logic like looping or conditional execution for a specific unit of work?

**Opciones:**
- [ ] Global Environment Variables
- [ ] Job Parameters
- [x] **Task Parameters** (Correcto)
- [ ] Notification settings

**Explicación:**  
Los parámetros de tarea (*Task Parameters*) configuran argumentos específicos para la unidad de trabajo concreta y pueden recibir valores dinámicos del iterador en bucles `For Each`.

---

### Pregunta 18
**Pregunta:**  
You are configuring a Databricks job that runs multiple tasks. You want to define a parameter (example, `input_path`) whose value should apply to all tasks by default, unless overridden for a specific task. Where should you specify this parameter value?

**Opciones:**
- [x] **In the job-level “Job parameters” section when configuring the job** (Correcto)
- [ ] In the first task only and subsequent tasks inherit automatically
- [ ] In each task’s individual parameters settings
- [ ] In a global workspace configuration outside the job settings

**Explicación:**  
Los parámetros a nivel de Job (*Job Parameters*) se propagan por defecto a todas las tareas hijas del flujo de trabajo, permitiendo sobreescrituras puntuales cuando sea necesario.

---

### Pregunta 19
**Pregunta:**  
You are running a Lakeflow Job for a production workflow that:
- Executes on a schedule
- Does not require an always-on cluster
- Should automatically shut down compute after the job completes to control costs

Which compute option best fits this use case?

**Opciones:**
- [ ] Interactive Clusters
- [ ] SQL Endpoint
- [x] **Job Clusters** (Correcto)
- [ ] All-Purpose Cluster

**Explicación:**  
Los Job Clusters son clústeres efímeros creados exclusivamente para la ejecución del Job y se destruyen de inmediato al terminar las tareas, eliminando los costos de inactividad de los clústeres interactivos.

---

### Pregunta 20
**Pregunta:**  
You are creating a Lakeflow Job to orchestrate a workflow. In its simplest form, what is the minimum structure required for a valid job?

**Opciones:**
- [ ] A pipeline and a dashboard
- [ ] A notebook and a SQL task combined
- [x] **A single task that defines the work to execute** (Correcto)
- [ ] At least two tasks so dependencies can be defined

**Explicación:**  
El requisito estructural mínimo para crear un Lakeflow Job válido es una única tarea que defina la unidad de trabajo a ejecutar.
