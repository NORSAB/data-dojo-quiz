# Guía Técnica: Evaluación de Agentes con MLflow Judges en Databricks

Este documento resume la implementación práctica del framework de evaluación de calidad para agentes en Databricks (`Course ID: 5062`):

---

## 1. El Framework `mlflow.genai.evaluate()`

La evaluación formal en Databricks une tres elementos fundamentales:

```python
import mlflow
from mlflow.genai.judges import Correctness, RetrievalGroundedness, RelevanceToQuery, Safety

# 1. Dataset de evaluación (pandas DataFrame o Delta table)
eval_df = spark.table("main.ai_agents.eval_golden_dataset").toPandas()

# 2. Lista de Scorers (Jueces LLM)
scorers = [
    Correctness(),             # Requiere columna 'expectations' (ground truth)
    RetrievalGroundedness(),   # Evalúa si la respuesta deriva de los chunks
    RelevanceToQuery(),        # Evalúa pertinencia respecto a la consulta
    Safety()                   # Evalúa toxicidad y cumplimiento
]

# 3. Ejecución de la evaluación sobre la función del agente
eval_results = mlflow.genai.evaluate(
    data=eval_df,
    predict_fn=agent_predict,
    scorers=scorers,
)
```

---

## 2. Tipos de Jueces en MLflow

| Tipo de Juez | Clase / Método | Salida / Valor | Requisito Clave |
|---|---|---|---|
| **Built-in: Correctness** | `Correctness()` | Puntaje numérico (0.0 - 1.0) | Requiere `expectations` (Ground Truth) en el dataset |
| **Built-in: Groundedness** | `RetrievalGroundedness()` | Puntaje numérico (0.0 - 1.0) | Requiere contexto recuperado (`retrieved_context`) |
| **Built-in: Relevance** | `RelevanceToQuery()` | Puntaje numérico (0.0 - 1.0) | Compara respuesta contra la pregunta original |
| **Guideline Scorer** | `Guidelines(name="es", ...)` | Categórico: `yes` / `no` por regla | Reglas en lenguaje natural en el prompt de la directriz |
| **Custom Judge** | `make_judge(...)` | Numérico o Categórico | Inspecciona trazas, metadatos o llamadas a herramientas |

---

## 3. La Estructura del Objeto `Feedback`

Los evaluadores de MLflow retornan objetos estructurados que contienen:
- **`name`:** Nombre de la métrica evaluada (ej. `"correctness"`, `"spanish_compliance"`).
- **`value`:** Puntuación cuantitativa (ej. `1.0`) o valor categórico (ej. `"yes"`).
- **`rationale`:** Texto en lenguaje natural donde el modelo juez explica el razonamiento que justifica su evaluación.

> **Por qué importa el rationale:** Permite diagnosticar por qué falló un caso concreto, auditar el criterio del propio modelo juez y detectar patrones recurrentes de degradación en los agentes.

---

## 4. El Ciclo Virtuoso: De Producción a Evaluación Offline

```
┌─────────────────────────────────────────────────────────────┐
│                    Agente en Producción                     │
└──────────────────────────────┬──────────────────────────────┘
                               │ Logging automático
                               ▼
┌─────────────────────────────────────────────────────────────┐
│            Inference Tables en Unity Catalog                │
│    (Trazas de peticiones, respuestas y feedback de usuario) │
└──────────────────────────────┬──────────────────────────────┘
                               │ Detección de fallos y casos límite
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Dataset de Evaluación Offline               │
│               (Casos difíciles y Golden Dataset)             │
└──────────────────────────────┬──────────────────────────────┘
                               │ Validación previa al redespliegue
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                mlflow.genai.evaluate()                      │
│            (Validación de mejoras y regresiones)            │
└─────────────────────────────────────────────────────────────┘
```
