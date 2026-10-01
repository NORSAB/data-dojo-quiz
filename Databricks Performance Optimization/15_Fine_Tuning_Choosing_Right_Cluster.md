# 15 - Fine-Tuning: Choosing the Right Cluster (Databricks Performance Optimization)

## 1. Visión General y Objetivos de la Lección
- **Curso:** Databricks Performance Optimization (Course ID: 2967)
- **Ruta de Certificación:** Databricks Certified Professional Data Engineer
- **Sección 4:** Fine-Tuning: Choosing the Right Cluster
- **Lección:** Fine-Tuning: Choosing the Right Cluster (Slide Deck Interactivo de Docebo, Authoring ID: 817 / Lesson ID: 44394, Diapositivas 1–7)
- **Objetivo Central:** Dominar la selección arquitectónica del tipo de cómputo en Databricks (All-Purpose, Jobs Compute, SQL Warehouses), las políticas óptimas de escalado dinámico (Autoscaling), el uso estratégico de instancias Spot para reducir costes en la nube sin comprometer la estabilidad, el impacto de Photon en el coste total de propiedad (TCO) y las recomendaciones oficiales de dimensionamiento para desarrollo y producción.

---

## 2. Inventario de Evidencias Visuales (Capturas de Diapositivas Oficiales)

| Diapositiva | Título de la Diapositiva | Contenido Técnico Clave | Archivo de Captura |
|---|---|---|---|
| **Slide 01** | *Fine-Tuning: Choosing the Right Cluster* | Portada oficial de la sección 4 de optimización de clústeres | `capturas/15_choosing_cluster_slide_01.png` |
| **Slide 02** | *Cluster Types* | Comparativa tripartita: All-Purpose vs. Jobs Compute vs. SQL Warehouses | `capturas/15_choosing_cluster_slide_02.png` |
| **Slide 03** | *Autoscaling* | Dimensionamiento dinámico, rangos de variación y autoscaling en Delta Live Tables | `capturas/15_choosing_cluster_slide_03.png` |
| **Slide 04** | *Spot Instances* | Instancias Spot vs. On-Demand, regla estricta del driver y tolerancia a SLAs | `capturas/15_choosing_cluster_slide_04.png` |
| **Slide 05** | *Photon* | Motor de ejecución vectorial en C++, ahorro del 40% en cómputo y récord mundial TPC-DS | `capturas/15_choosing_cluster_slide_05.png` |
| **Slide 06** | *Cluster Optimization Recommendations* | Matriz de recomendaciones de Databricks para DS/DE, ETL, SQL Warehouses y BI | `capturas/15_choosing_cluster_slide_06.png` |
| **Slide 07** | *Databricks - Thank You* | Diapositiva oficial de cierre de la primera parte de la lección | `capturas/15_choosing_cluster_slide_07.png` |

---

## 3. Clasificación de Tipos de Cómputo en Databricks

Databricks segmenta el cómputo en tres categorías fundamentales, cada una con un modelo de costes (tarifa DBU), ciclo de vida y propósito operativo diferenciado:

```
                                    TIPOS DE CÓMPUTO EN DATABRICKS
                                                  │
         ┌────────────────────────────────────────┼────────────────────────────────────────┐
         ▼                                        ▼                                        ▼
┌──────────────────┐                     ┌──────────────────┐                     ┌──────────────────┐
│   ALL-PURPOSE    │                     │   JOBS COMPUTE   │                     │  SQL WAREHOUSE   │
├──────────────────┤                     ├──────────────────┤                     ├──────────────────┤
│ • Interactivo/DS │                     │ • Epímero/Prod   │                     │ • Alta concurren-│
│ • Desarrollo     │                     │ • Ejecuta y muere│                     │   cia BI / SQL   │
│ • Mayor tarifa   │                     │ • Menor tarifa   │                     │ • Photon nativo  │
│   DBU ($$$)      │                     │   DBU ($)        │                     │ • Serverless     │
└──────────────────┘                     └──────────────────┘                     └──────────────────┘
```

### 3.1. All-Purpose Compute (Cómputo Multipropósito / Interactivo)
- **Propósito:** Desarrollo exploratorio de código, prototipado interactivo de notebooks, experimentación por equipos de Data Science y Data Engineering, y streaming ad-hoc.
- **Ciclo de Vida:** Gestionado manualmente por los usuarios o por políticas de apagado automático (`auto-stop`).
- **Autoscaling:** Recomendado para acomodar picos durante sesiones de análisis intensivo y reducir el tiempo de respuesta.
- **Coste:** **Mayor coste por DBU** del catálogo. No debe utilizarse bajo ninguna circunstancia para pipelines de producción programados.
- **Seguridad:** Requiere controles estrictos de RBAC y aislamiento de usuarios (Single-User vs. Shared/Standard Access Mode).

### 3.2. Jobs Compute (Cómputo Automatizado / Workflows)
- **Propósito:** Pipelines de ingesta programados, transformaciones ETL/ELT batch y tareas repetitivas en producción.
- **Ciclo de Vida:** **Clústeres efímeros** creados automáticamente al inicio del Job por el orquestador (Databricks Workflows) y terminados inmediatamente tras la conclusión del trabajo.
- **Coste:** **Tarifa reducida por DBU** (típicamente entre un 30% y 50% más económico que All-Purpose para las mismas máquinas virtuales).
- **Aislamiento:** Entorno limpio y exclusivo para cada ejecución (`single-user`), garantizando que fallos de memoria o dependencias de otras tareas no contaminen el job.
- **Invocación:** Programación cron o mediante API/CLI/Airflow/dbt.

### 3.3. SQL Warehouse (Almacén de Consultas SQL)
- **Propósito:** Consultas analíticas SQL ad-hoc de alta concurrencia, dashboards ejecutivos y conexión con herramientas de BI (Power BI, Tableau, Looker).
- **Motor Integrado:** Incluye el motor vectorial **Photon activado por defecto**.
- **Arquitectura de Concurrencia:** Soporta escalado horizontal automático de clústeres adicionales para absorber ráfagas de usuarios BI concurrentes sin degradar la latencia.
- **Variante Serverless:** Proporciona arranque casi instantáneo (< 10-15 segundos) y auto-stop agresivo en periodos de inactividad, reduciendo drásticamente el TCO.

---

## 4. Estrategias de Autoscaling

El escalado automático ajusta dinámicamente el número de nodos de trabajo (`workers`) en función de la carga de tareas de Spark acumuladas en la cola del scheduler.

### 4.1. Ventajas Operativas
- **Supera a clústeres estáticos infradimensionados:** Agrega capacidad cuando una etapa pesada con cientos de tareas lo requiere.
- **Reduce costes frente a clústeres sobredimensionados:** Desasigna workers cuando el procesamiento disminuye o finaliza.

### 4.2. Matriz de Configuración por Caso de Uso
| Caso de Uso | Política de Autoscaling Recomendada | Racional Técnico |
|---|---|---|
| **Uso Ad-hoc / Analítica de Negocio** | **Rango con Gran Varianza** (ej. 2 a 20 workers) | La demanda es impredecible; varios analistas pueden lanzar consultas concurrentes en momentos aleatorios. |
| **Jobs Batch de Producción** | **Tamaño Fijo o Buffer Reducido en el Límite Superior** (ej. Fijo de 8, o 6 a 10) | El volumen de datos es predecible. Esperar a que el proveedor de nube aprovisione VMs (2-5 min) puede empeorar el SLA global del job. |
| **Streaming Continuo** | **Autoscaling Mejorado de Delta Live Tables (DLT)** | El autoscaling estándar de Spark no optimiza bien la latencia de micro-batches de streaming; DLT ajusta workers evaluando el backlog de eventos. |

---

## 5. Optimización Financiera con Instancias Spot

Las instancias Spot aprovechan la capacidad ociosa de los centros de datos de los proveedores de nube (AWS, Azure, GCP) con descuentos de hasta el **70%–90%** sobre la tarifa On-Demand.

### 5.1. Regla de Oro Inquebrantable de Arquitectura: EL DRIVER NUNCA DEBE SER SPOT
- Si un worker Spot es reclamado (preempted) por el proveedor de nube:
  - Spark detecta la pérdida del nodo (`NodeLost`).
  - Las particiones que residían en ese worker se recalculan a partir del linaje del DAG en los workers restantes.
  - El job **no falla**, solo experimenta un ligero retraso de recomputación.
- **Si el Driver es reclamado (eviction):**
  - Toda la JVM del Driver y el SparkContext mueren.
  - Se pierde el estado de la aplicación, el catálogo de metadatos y la orquestación.
  - **El clúster completo colapsa y el job falla inmediatamente de forma irrecuperable.**
- **Regla Estricta:** Driver **SIEMPRE en instancia On-Demand**.

### 5.2. Configuración según el Acuerdo de Nivel de Servicio (SLA)
- **Trabajos no críticos (Non-mission critical):** Driver On-Demand + Workers 100% Spot.
- **Trabajos con SLAs estrictos (Tight SLAs):** Configurar Workers Spot con **Fallback automático a On-Demand**. Si el proveedor de nube no dispone de capacidad Spot disponible, Databricks aprovisiona inmediatamente VMs On-Demand garantizando que el pipeline cumpla su ventana horaria de entrega.

---

## 6. Aceleración Vectorial con Photon

### 6.1. Características Técnicas del Motor Photon
- **Reescritura Vectorial en C++:** Sustituye el motor de ejecución basado en JVM por un motor columnar escrito en C++ nativo que aprovecha las instrucciones SIMD (Single Instruction Multiple Data) de los procesadores x86-64 y ARM64 (AWS Graviton).
- **Compatibilidad 100% Transparente:** No requiere modificar una sola línea de código SQL, PySpark o Scala.
- **Ahorro Directo de Costes (TCO):** Los clientes de ETL reducen hasta un **40% su gasto de cómputo** al disminuir drásticamente el tiempo de ejecución de las consultas.
- **Rendimiento:** Hasta **12x mejor relación precio/rendimiento** comparado con otros data warehouses en la nube y superación por más del doble del récord mundial de TPC-DS.

---

## 7. Resumen de Recomendaciones Oficiales de Databricks

1. **Desarrollo (Data Science & Data Engineering):**
   - Utilizar clústeres All-Purpose.
   - Habilitar **Autoscaling** y **Auto-Stop** agresivo (ej. 15–20 minutos de inactividad).
   - Desarrollar y probar sobre una muestra o subconjunto representativo de los datos (`limit` o sample) en lugar del dataset de producción completo.
2. **Pipelines de Ingesta y ETL de Producción:**
   - Utilizar exclusivamente **Jobs Compute**.
   - Dimensionar el clúster con tamaño fijo o rango estrecho ajustado estrictamente al SLA comprometido.
3. **Analítica SQL Ad-hoc:**
   - Utilizar **SQL Warehouses** (preferiblemente Serverless) con autoscaling y auto-stop habilitados.
4. **Reportes de BI y Cuadros de Mando:**
   - Utilizar un **SQL Warehouse aislado y dedicado** para evitar que analistas ad-hoc consuman los recursos asignados a los dashboards ejecutivos.
5. **Mejores Prácticas Generales:**
   - Activar instancias Spot en los nodos de trabajo.
   - Mantener los entornos en la versión **Databricks Runtime (DBR) LTS más reciente**.
   - Activar **Photon** para optimizar el coste total de propiedad en cargas analíticas pesadas.
   - Utilizar la generación de VMs más moderna del proveedor de nube, iniciando con tipos de propósito general y evaluando tipos optimizados para memoria o cómputo según el comportamiento de la carga.
