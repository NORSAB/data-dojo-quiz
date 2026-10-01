# Curso 6: Deploying and Monitoring Agent Applications on Databricks (ID 5855)

## Información del Curso
- **Código LMS:** `5855`
- **Nombre Oficial:** Deploying and Monitoring Agent Applications on Databricks
- **Proveedor:** Databricks Academy
- **Tipo de Contenido:** Lecciones Teóricas SCORM + Demos Técnicas en Video + Examen Oficial
- **Evaluación Asociada:** `Quiz - Deploying and Monitoring Agent Applications on Databricks` (`LO ID: 63985`, 20 preguntas)

---

## 📋 Estructura de Módulos y Lecciones

| Módulo / Lección | ID LO | Tipo | Contenido y Objetivos |
|---|---|---|---|
| **Before we get started** | `63831` | Authoring | Requisitos previos y configuración del entorno |
| **Course Logistics Review** | `63832` | HTML Page | Introducción al ciclo de vida de producción de agentes |
| **Agent Deployment on Databricks** | `63960` | SCORM Package | Patrones de despliegue: Databricks Apps vs Model Serving endpoints; Declarative Automation Bundles (DABs) |
| **Demo: Deploying an Observable Agent** | `63964` | Video | Despliegue de una app agéntica con bundle `databricks.yml` y configuración en `app.yaml` |
| **Tool Integration and Observability** | `63961` | SCORM Package | Instrumentación OpenTelemetry, búsqueda de trazas con `mlflow.search_traces()`, jerarquía de spans |
| **Demo: Tracing for Production Agents** | `63963` | Video | Inspección de trazas en vivo, métricas de latencia y filtrado de errores en MLflow UI |
| **Production Evaluation and Monitoring** | `63962` | SCORM Package | Ingesta de trazas en Unity Catalog Delta tables, muestreo de scorers, reprocesamiento histórico (`backfill_scorers`) |
| **Course Summary and Next Steps** | `63845` | HTML Page | Resumen de gobernanza de producción y mejores prácticas |
| **Quiz - Deploying and Monitoring Agent Applications** | `63985` | Test | Evaluación oficial de 20 preguntas |

---

## 🎯 Competencias Clave Evaluadas

1. **Las 4 Etapas del Ciclo de Vida del Agente en Producción:**
   - **Deployment $\rightarrow$ Observability $\rightarrow$ Evaluation $\rightarrow$ Monitoring** (Despliegue $\rightarrow$ Observabilidad $\rightarrow$ Evaluación $\rightarrow$ Monitoreo).
2. **Despliegue con Declarative Automation Bundles (DABs) y Databricks Apps:**
   - Creación de recursos en workspace con `databricks bundle deploy` y publicación del código fuente con `databricks apps deploy`.
   - Inyección de variables de entorno (`SERVING_ENDPOINT`, `MLFLOW_EXPERIMENT_NAME`) declaradas en `databricks.yml` y expuestas en la sección `env:` de `app.yaml`.
3. **Búsqueda y Filtrado de Trazas Programático (`mlflow.search_traces`):**
   - Sintaxis oficial para errores y latencia:
     ```python
     filter_string="trace.status = 'ERROR'"
     filter_string="trace.execution_time_ms > 5000"
     ```
4. **Almacenamiento de Trazas en Unity Catalog (Trace Archival):**
   - `enable_databricks_trace_archival`: Transmite trazas hacia tablas Delta administradas en Unity Catalog (esquema OpenTelemetry de spans y anotaciones) para análisis SQL a largo plazo.
   - Permisos requeridos sobre las tablas de trazas: No basta `ALL_PRIVILEGES`; se requiere explícitamente `MODIFY` y `SELECT`, junto con `USE_CATALOG` y `USE_SCHEMA`.
5. **Evaluación en Producción y Muestreo (Sampling):**
   - Regla de negocio: Scorers de seguridad (`Safety`) se evalúan al **100% de las solicitudes**; scorers complejos y costosos de calidad basados en LLM se muestrean (típicamente entre **5% y 10%**) para controlar costos sin perder significancia estadística.
   - Modificación de ciclo de vida del scorer: Los métodos como `.stop()` devuelven una nueva instancia inmutable; se debe reasignar (`safety = safety.stop()`).
   - Reprocesamiento histórico: `backfill_scorers` aplica nuevos evaluadores sobre trazas históricas ya registradas.
6. **Agrupación Multi-Turno y Sesiones:**
   - Para que los jueces multi-turno (como `UserFrustration`) agrupen la conversación, el identificador de sesión debe fijarse en los **metadatos de la traza** (`session_id=` o `mlflow.trace.session`), **no en los tags**.
