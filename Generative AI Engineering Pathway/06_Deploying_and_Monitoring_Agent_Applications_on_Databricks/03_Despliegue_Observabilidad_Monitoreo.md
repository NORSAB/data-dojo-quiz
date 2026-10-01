# Guía Técnica: Despliegue, Observabilidad y Monitoreo de Agentes en Databricks

Este documento resume los patrones técnicos y arquitectónicos presentados en el curso **Deploying and Monitoring Agent Applications on Databricks** (`Course ID: 5855`):

---

## 1. El Ciclo de Vida del Agente en Producción

```
[ 1. Deployment ] ────► [ 2. Observability ] ────► [ 3. Evaluation ] ────► [ 4. Monitoring ]
  • Databricks Apps        • MLflow Tracing          • LLM Judges              • Inference Tables
  • Model Serving          • OpenTelemetry           • Offline Golden Sets     • Trace Archival
  • DABs (databricks.yml)  • Spans & Metadata        • User Feedback           • Backfill Scorers
```

---

## 2. Despliegue con Databricks Apps y Declarative Automation Bundles (DABs)

### Configuración del Bundle (`databricks.yml`)
```yaml
bundle:
  name: my_agentic_app

resources:
  apps:
    intake_agent:
      name: intake-agent-prod
      target: prod
      source_code_path: ./src
```

### Configuración de la App (`app.yaml`)
```yaml
command: ["python", "app.py"]
env:
  - name: SERVING_ENDPOINT
    value: "https://my-workspace.cloud.databricks.com/serving-endpoints/custom-model"
  - name: MLFLOW_EXPERIMENT_NAME
    value: "/Shared/production_agents/intake_agent"
```

### Comandos de Despliegue CLI
- `databricks bundle deploy`: Configura y actualiza la definición de recursos y permisos en el workspace.
- `databricks apps deploy`: Empaqueta y despliega el código fuente activo de la aplicación en el contenedor de Databricks Apps.

---

## 3. Búsqueda y Filtrado de Trazas (`mlflow.search_traces`)

Para auditar errores y degradación de latencia mediante API:

```python
import mlflow

experiment_id = "12345678"

# 1. Buscar peticiones fallidas
error_traces = mlflow.search_traces(
    locations=[experiment_id],
    filter_string="trace.status = 'ERROR'",
    max_results=100
)

# 2. Buscar peticiones lentas (> 5 segundos)
slow_traces = mlflow.search_traces(
    locations=[experiment_id],
    filter_string="trace.execution_time_ms > 5000",
    max_results=100
)
```

---

## 4. Almacenamiento Permanente de Trazas en Delta Lake (Trace Archival)

- **Activación:** `enable_databricks_trace_archival` transmite continuamente todas las trazas de producción a tablas Delta administradas en Unity Catalog con esquema estándar OpenTelemetry.
- **Permisos Necesarios:** Para que los analistas consulten mediante SQL las tablas de trazas, se deben otorgar explícitamente los privilegios `SELECT` y `MODIFY` en el catálogo/esquema:
  ```sql
  GRANT USE CATALOG, USE SCHEMA ON SCHEMA prod_catalog.agent_traces TO `data-analysts`;
  GRANT SELECT, MODIFY ON SCHEMA prod_catalog.agent_traces TO `data-analysts`;
  ```

---

## 5. Estrategia de Muestreo (Sampling) y Reprocesamiento (Backfill)

1. **Scorers de Seguridad (`Safety`):** Cobertura obligatoria del **100%** de las trazas en producción (cero tolerancia a brechas de seguridad).
2. **Scorers de Calidad con LLM:** Muestreo calibrado entre el **5% y el 10%** para balancear el costo de cómputo y obtener representatividad estadística.
3. **Manejo de Instancias Inmutables:** Los métodos de control de evaluadores retornan una nueva instancia:
   ```python
   # Correcto: reasignar la variable
   safety_scorer = safety_scorer.stop()
   ```
4. **Reprocesamiento Histórico (`backfill_scorers`):** Permite calcular métricas retrospectivas sobre trazas registradas antes de que existiera una nueva política o evaluador.
