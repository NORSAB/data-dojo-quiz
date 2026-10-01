# Orquestación Multiagente con OpenAI Agents SDK y MLflow en Databricks

Este documento sintetiza la arquitectura técnica y los patrones de implementación para agentes y orquestación multiagente en Databricks (`Course ID: 5856`):

---

## 1. El Árbol Unificado de Trazas con `@mlflow.trace`

Cuando un agente supervisor delega tareas en subagentes mediante `handoffs` y se ejecutan llamadas a herramientas (tools), el autologging estándar puede fragmentar la ejecución en múltiples trazas inconexas.

### Patrón de Contenedor Padre Unificado
Para generar un **único árbol de spans** que visualice toda la jerarquía de llamadas:

```python
import mlflow
from openai import OpenAI

# 1. Habilitar instrumentación automática del SDK
mlflow.openai.autolog()

# 2. Decorar el flujo completo con @mlflow.trace
@mlflow.trace(name="orchestrator_flow")
def run_agent_workflow(user_query: str):
    """
    Función padre que actúa como raíz del árbol de trazas en MLflow.
    Todas las llamadas internas a agentes, subagentes y herramientas
    quedan anidadas como spans hijos.
    """
    # Enrutamiento supervisor
    supervisor_response = supervisor_agent.run(user_query)
    
    # Delegación (handoff) y ejecución de herramientas
    final_output = execute_handoff(supervisor_response)
    return final_output
```

---

## 2. Autologging por Framework en Databricks

MLflow implementa integraciones modulares y específicas según el framework utilizado:
- **OpenAI Agents SDK / OpenAI Client:** `mlflow.openai.autolog()`
- **LangChain / LangGraph:** `mlflow.langchain.autolog()`
- **LlamaIndex:** `mlflow.llama_index.autolog()`

---

## 3. Gobernanza con Model Context Protocol (MCP) y Unity Catalog

Databricks expone funciones registradas en Unity Catalog como servidores MCP administrados (`Managed MCP Servers`):

```
┌─────────────────┐       MCP Request       ┌────────────────────────┐
│   Agent Client  │ ──────────────────────► │  Managed MCP Server    │
└─────────────────┘                         │  (Unity Catalog Layer) │
                                            └───────────┬────────────┘
                                                        │ Valida permisos del usuario
                                                        ▼
                                            ┌────────────────────────┐
                                            │  Unity Catalog Table / │
                                            │  SQL UDF Execution     │
                                            └────────────────────────┘
```

- **Propagación de Identidad:** La ejecución de la función se realiza en nombre del usuario que invoca la consulta (`user credentials`). Si el usuario carece de privilegios `EXECUTE` sobre la función o `SELECT` sobre las tablas consultadas, la ejecución es bloqueada inmediatamente a nivel de motor.
- **Auditoría y Linaje:** Cada invocación de herramienta se registra automáticamente en las tablas de auditoría del sistema de Unity Catalog (`system.access.audit`).

---

## 4. Patrón Supervisor-Worker y Handoffs

1. **Agente Supervisor:** Analiza la solicitud, decide qué especialista debe responder y realiza una transferencia (`handoff`).
2. **Subagentes Especializados:** Ejecutan herramientas locales acotadas a su dominio (ej. `BillingAgent`, `TechnicalSupportAgent`).
3. **Control de Ciclos:** Se impone un límite estricto de turnos (`max_turns`) para evitar bucles infinitos de delegación entre agentes cuando se encuentran con entradas ambiguas.
