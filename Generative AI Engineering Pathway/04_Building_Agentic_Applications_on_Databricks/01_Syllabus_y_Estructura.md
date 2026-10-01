# Curso 4: Building Agentic Applications on Databricks (ID 5856)

## Información del Curso
- **Código LMS:** `5856`
- **Nombre Oficial:** Building Agentic Applications on Databricks
- **Proveedor:** Databricks Academy
- **Tipo de Contenido:** Lecciones Teóricas SCORM + Demos Técnicas en Video + Examen Oficial
- **Evaluación Asociada:** `Quiz - Building Agentic Applications on Databricks` (`LO ID: 64260`, 20 preguntas)

---

## 📋 Estructura de Módulos y Lecciones

| Módulo / Lección | ID LO | Tipo | Contenido y Objetivos |
|---|---|---|---|
| **Before we get started** | `63849` | Authoring | Configuración del entorno de laboratorio |
| **Course Logistics Review** | `63850` | HTML Page | Resumen de logística y conceptos agénticos |
| **Agents, MCP, and AI Governance on Databricks** | `64272` | SCORM Package | Arquitectura de agentes, Model Context Protocol (MCP), servidores MCP administrados por Unity Catalog y gobernanza |
| **Demo: Building Agent Tools on Databricks** | `64280` | Video | Creación de herramientas (functions) en Unity Catalog e integración con agentes |
| **Building Agents with the OpenAI Agents SDK and MLflow** | `64268` | SCORM Package | Implementación de agentes de bucle ReAct, agentes supervisores, transferencias (handoffs) y trazabilidad |
| **Demo: Building Single Agents with the OpenAI Agents SDK** | `64284` | Video | Implementación práctica de agentes individuales con herramientas y rastreo |
| **Demo: Multi-Agent Orchestration with the OpenAI Agents SDK** | `64276` | Video | Patrón supervisor-trabajador con delegaciones dinámicas y handoffs |
| **Agent Bricks and Genie** | `64264` | SCORM Package | Databricks AI/BI Genie, Agent Bricks para analítica conversacional y gobierno |
| **Summary and Next Steps** | `63863` | HTML Page | Resumen de patrones de producción y mejores prácticas |
| **Quiz - Building Agentic Applications on Databricks** | `64260` | Test | Evaluación oficial de 20 preguntas |

---

## 🎯 Competencias Clave Evaluadas

1. **Unificación de Trazas en MLflow:**
   - Uso de `@mlflow.trace` en una función padre contenedora para vincular todas las llamadas LLM secundarias, delegaciones de agentes (handoffs) y llamadas a herramientas en un único árbol jerárquico de spans.
   - Autologging específico por framework: `mlflow.openai.autolog()` para el OpenAI Agents SDK y `mlflow.langchain.autolog()` para agentes LangChain / LangGraph.
2. **Model Context Protocol (MCP) y Unity Catalog:**
   - Servidores MCP administrados respaldados por funciones de Unity Catalog (`managed MCP servers`).
   - Gobernanza estricta: los permisos del usuario final que invoca el agente se propagan y validan (`ON BEHALF OF`) contra Unity Catalog; si el usuario no tiene `EXECUTE` en la función o `SELECT` en la tabla subyacente, la llamada se deniega.
3. **Orquestación Multiagente:**
   - Patrón Supervisor-Worker: El agente supervisor evalúa la intención del usuario y utiliza transferencias (`handoff`) para transferir el control y la conversación al agente especialista (ej. facturación, técnico).
   - Prevención de bucles infinitos: Configuración de límites de turnos (`max_turns`) y control explícito del historial de conversación.
4. **Agent Bricks y AI/BI Genie:**
   - Capacidades de Text-to-SQL y analítica empresarial sobre tablas Delta gobernadas en Unity Catalog, utilizando instrucciones de dominio y metadatos de columnas para respuestas precisas.
