# 🤖 Get Started with AI Agents on Databricks

> **Proveedor:** Databricks Academy  
> **Rol:** Generative AI Engineer  
> **Nivel:** Onboarding  
> **Duración estimada:** 2 horas  
> **Accredible ID:** `KB-Get Started with AI Agents on Databricks`  
> **Fecha de actualización de versión:** 08/11/2026  
> **Enlace al curso:** [Databricks Customer Academy](https://customer-academy.databricks.com/learn/courses/4464/get-started-with-ai-agents-on-databricks)

---

## 📌 Descripción del Curso

Este curso es una introducción exhaustiva a los **agentes de Inteligencia Artificial (AI Agents)**, su función en aplicaciones modernas de IA empresarial y cómo construir, desplegar y evaluar aplicaciones basadas en agentes dentro de la plataforma Databricks Data + AI.

Aprenderás los principios fundamentales de los agentes de IA, en qué se diferencian de los flujos de trabajo tradicionales y sistemas no agénticos, y explorarás sus componentes centrales (LLM, herramientas y memoria). A través de conferencias teóricas y demostraciones prácticas, comprenderás cómo orquestar agentes utilizando **Databricks AI**, el marco **MLflow**, **Unity Catalog** para gobernanza y el protocolo **Model Context Protocol (MCP)**, culminando con **Agent Bricks** para llevar agentes a calidad de producción.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este curso, serás capaz de:
1. **Definir qué es un agente de IA** y explicar cómo difiere de los sistemas tradicionales de IA y flujos estáticos.
2. **Identificar casos de uso industriales** y ejemplos reales de agentes de IA en producción.
3. **Explicar los principios clave**, tipos y componentes centrales de un agente (LLM como motor de razonamiento, herramientas/APIs y memoria a corto y largo plazo).
4. **Distinguir entre enfoques agénticos** (dinámicos, iterativos con planificación) y **no agénticos** (estáticos, pipelines fijos deterministas).
5. **Comparar patrones de razonamiento modernos de LLMs**: bucle **ReAct** (Thought, Act, Observe) frente a **Plan-and-Solve**.
6. **Listar las opciones para construir agentes en Databricks**: AI Playground (prototipado sin código), Databricks AI / MLflow, y Agent Bricks.
7. **Explicar el propósito y arquitectura de gobernanza empresarial**: autenticación unificada, Unity AI Gateway, Unity Catalog (herramientas SQL y Python gobernadas con comentarios tipados) y Model Context Protocol (MCP).
8. **Analizar los paradigmas de despliegue**: Batch, Streaming y Tiempo Real en Databricks Apps (recomendado) y Model Serving vía `agents.deploy()`.
9. **Monitorear y evaluar agentes**: recolección de feedback humano en el Review App, trazabilidad detallada con MLflow Tracing y generación de datos sintéticos para evaluación de calidad.
10. **Dominar Agent Bricks**: asistentes de conocimiento (Knowledge Assistant) para datos no estructurados, agentes Genie para datos estructurados (SQL/tablas) y Supervisor Agents para orquestación híbrida.

---

## 🧭 Estructura del Contenido Extraído

```
📁 Get Started with AI Agents on Databricks/
├── 📄 README.md                                      # Índice maestro y especificaciones
├── 📁 00_Introduccion/
│   ├── 📄 01_Before_we_get_started.md                # Diapositivas de bienvenida y lineamientos
│   ├── 📄 02_Course_Logistics_Review.md              # Logística, acceso a laboratorios y soporte
│   └── 📄 03_Introduction_to_AI_Agents.md            # Conferencia magistral SCORM 1
├── 📁 01_Seccion_1_Building_AI_Agents/
│   ├── 📄 01_Building_AI_Agents_on_Databricks.md     # Conferencia magistral SCORM 2
│   └── 📄 02_Demos_Resumen_y_Objetivos.md            # Resumen de demos prácticas y AI Playground
├── 📁 02_Seccion_2_Evaluation_and_Deployment/
│   ├── 📄 01_Deploying_Agents_and_Model_Serving.md   # Conferencia magistral SCORM 3
│   └── 📄 02_Demo_Deployment_Overview.md             # Flujo de despliegue a producción
├── 📁 03_Seccion_3_Production_Ready_Agent_Bricks/
│   └── 📄 01_Introduction_to_Agent_Bricks.md         # Conferencia magistral SCORM 4
└── 📁 04_Cierre_y_Examen/
    ├── 📄 01_Summary_and_Next_Steps.md               # Resumen final de logros y encuestas
    └── 📄 02_Quiz_20_Preguntas_Oficiales.md          # Banco oficial del examen (100% verificado)
```

---

## 🛠️ Prerrequisitos Técnicos
- Familiaridad con la navegación en el espacio de trabajo de Databricks y menú lateral de Machine Learning / AI.
- Conocimiento básico de **Unity Catalog** como capa de gobernanza y gestión de datos.
- Experiencia básica en ejecución de scripts (Python, SQL o curl).
- Comprensión de conceptos básicos de bases de datos relacionales y redacción ligera de consultas SQL.

---

## 📝 Registro de Cambios del Curso (Oficial)
- **Bibliotecas:** Versiones fijadas (pinned) de librerías para entornos reproducibles.
- **Modelos:** Actualización del modelo predeterminado Claude de Claude Sonnet 4 a **Claude Sonnet 5**.
- **Herramientas de código:** Actualización de scripts `Workspace-Setup.py` y de la implementación de `agent.py`.
- **Terminología:** Alineación con las nuevas especificaciones de Databricks Agent Framework y Agent Bricks.
