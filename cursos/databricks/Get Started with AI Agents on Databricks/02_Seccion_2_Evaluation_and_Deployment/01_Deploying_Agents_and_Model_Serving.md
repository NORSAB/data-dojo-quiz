# 01. Deploying Agents and Model Serving

> **Módulo SCORM 3 — Conferencia Magistral**  
> **Tema:** Paradigmas de Despliegue, Databricks Apps, Model Serving, Unity Gateway y Monitoreo en Producción  
> **Duración estimada:** 30 min  

---

## 📌 Resumen (Overview)

Una vez que un agente de IA ha sido evaluado y registrado en Unity Catalog, el paso culminante es ponerlo en producción para que usuarios y aplicaciones puedan consultarlo con alta confiabilidad y baja latencia.

Esta conferencia cubre:
1. Los 3 paradigmas de despliegue para cargas de IA generativa: **Batch**, **Streaming** y **Tiempo Real (Real-Time)**, junto con sus compensaciones (*trade-offs*) de latencia vs. rendimiento (*throughput*).
2. Los desafíos operacionales que impiden que los sistemas de IA en tiempo real lleguen a producción.
3. Las dos vías oficiales de despliegue en Databricks: **Databricks Apps** (recomendada para nuevos casos de uso) y **Model Serving** vía el SDK `agents.deploy()`.
4. El flujo de producción recomendado: desarrollo local, control de versiones con Git, despliegue declarativo con **Databricks Asset Bundles (DABs)** y uso de la interfaz de chat integrada con streaming e historial persistente.
5. Cómo **Unity AI Gateway** gobierna todos los agentes desplegados mediante límites de tasa centralizados, guardrails de seguridad y detección de PII.
6. La recolección de retroalimentación de expertos humanos como *evaluaciones (assessments)* sobre trazas de MLflow (**MLflow Traces**) mediante el **Review App**.
7. El monitoreo continuo en producción utilizando **MLflow 3** con jueces LLM evaluando trazas en vivo.

---

## 🎯 Objetivos de Aprendizaje

- **Comparar los 3 paradigmas de despliegue** (Batch, Streaming y Real-time) y saber cuándo aplicar cada uno.
- **Identificar las complejidades operacionales:** infraestructura costosa, herramientas dispersas y escasez de talento especializado.
- **Diferenciar las dos opciones de despliegue en Databricks:**
  - *Databricks Apps:* Control total del servidor, CI/CD con Git y chat UI preconstruido con streaming.
  - *Model Serving (`agents.deploy()`):* Endpoint REST serverless autoescalable con tablas de inferencia (*inference tables*).
- **Explicar las capacidades de Unity Gateway** como plano de control corporativo para gobernar cualquier modelo o agente.
- **Aprender a capturar feedback humano** usando el Review App y sincronizarlo en datasets de evaluación (*Evaluation Datasets*).
- **Implementar monitoreo en línea con MLflow 3** para detectar regresiones de calidad y cuellos de botella en tiempo real.

---

## A. Paradigmas de Despliegue en Cargas de IA

A medida que nos movemos de Batch a Tiempo Real, **la latencia disminuye pero el rendimiento por llamada también se reduce**:

```
Latencia Disminuye (Respuestas más rápidas)
  ▲
  │   [Tiempo Real (Real-Time)] ── Generación asíncrona sobre prompts individuales
  │   [Streaming]               ── Generación continua sobre micro-lotes procesados
  │   [Lote (Batch)]            ── Generación masiva sobre tablas completas de texto
  ▼
Rendimiento Disminuye (Menor volumen procesado a la vez)
```

### Tabla Comparativa de Paradigmas

| Paradigma | Mecanismo | Latencia | Rendimiento (Throughput) | Caso de Uso Típico |
|---|---|:---:|:---:|---|
| **Lote (Batch)** | Genera y almacena respuestas sobre una tabla entera de entradas de una sola pasada. | Alta (horas/minutos) | **Máximo** | Reportes nocturnos, clasificación masiva de catálogos, análisis histórico. |
| **Streaming** | Genera y almacena respuestas sobre micro-lotes continuos a medida que ingresan datos. | Media (segundos) | Medio | Ingesta de mensajes de IoT, procesamiento de colas de tickets. |
| **Tiempo Real (Real-time)** | Genera respuestas asíncronas de inmediato para cada prompt individual del usuario. | **Mínima** (milisegundos) | Bajo | Chatbots conversacionales, asistentes interactivos, agentes de soporte. |

> ### 💡 Caso de Examen Típico
> Si una empresa de logística necesita procesar una tabla masiva de textos durante la noche para alimentar un reporte que se leerá al día siguiente, el paradigma adecuado es **Batch**, ya que prioriza el alto rendimiento sobre la inmediatez de la respuesta.

---

## B. Complejidades del Despliegue de IA en Tiempo Real

1. **La infraestructura es difícil:**  
   Construir entornos con baja latencia y alta concurrencia requiere costosos clústeres de cómputo y conocimientos avanzados de redes y aprovisionamiento.
2. **Herramientas dispersas:**  
   Vincular proveedores de datos, almacenes vectoriales, servidores de modelos y librerías agénticas genera fricción, costos de integración y puntos de falla.
3. **Escasez de ingenieros especializados:**  
   La operación en producción demanda talento de MLOps y AgentOps escaso en el mercado.

---

## C. Dos Vías para Desplegar Agentes en Databricks

Databricks ofrece dos caminos complementarios, ambos gobernados por Unity Catalog:

### 1. Databricks Apps (RECOMENDADO para nuevos proyectos)
- **Control Total:** Permite personalizar el código del agente, librerías, dependencias y configuración del servidor.
- **Ciclo DevOps Completo:** Soporta desarrollo local, control de versiones con Git y despliegues automatizados mediante **Declarative Automation Bundles (DABs)**.
- **Interfaz Incluida:** Proporciona de inmediato una **interfaz de chat (Chat UI)** con soporte para streaming de respuestas e historial persistente de conversaciones.
- **Gobernanza:** Integrado con Unity Gateway para políticas de seguridad y límites de consumo.

### 2. Model Serving vía `agents.deploy()` (ALTERNATIVA)
- **Despliegue con una línea:** Un llamado al SDK de Databricks aprovisiona un endpoint REST serverless autoescalable.
- **Inferencia Confiable:** Despliegues sin tiempo de inactividad (*zero-downtime rollouts*), autoescalado a cero para optimizar costos y registro automático de entradas y salidas en **Tablas de Inferencia (Inference Tables)** de Unity Catalog.

---

## D. Unity Gateway: El Plano de Control Empresarial

Unity AI Gateway se posiciona frente a todos los endpoints de IA de la organización (Databricks Apps, Model Serving, APIs externas y modelos fundacionales):

- **Gobernanza Centralizada:** Aplica políticas uniformes sin importar el framework o la vía de despliegue.
- **Guardrails de IA y Seguridad:** Filtro de contenido inapropiado, prevención de inyecciones de prompt y detección y enmascaramiento automático de información confidencial (PII).
- **Gestión de Credenciales y Cuotas:** Enrutamiento inteligente (*Smart Routing*) y límites de tasa (*rate limits*) por usuario o aplicación.
- **Observabilidad de Costos:** Trazabilidad de uso y atribución clara de gastos por equipo y proyecto.

---

## E. Retroalimentación Humana con el Review App y MLflow Tracing

Para elevar la calidad del agente antes y después del despliegue, el circuito cerrado de feedback es esencial:

```
[Usuario / Experto de Negocio (SME)]
                │
                ▼
      [Review App de Databricks]  <─── Interfaz de chat prediseñada para evaluar
                │
                ├─► Calificaciones binarias (👍 / 👎)
                ├─► Comentarios y etiquetas personalizadas
                └─► Ground Truth (Expectativas de respuesta correcta)
                │
                ▼
  [MLflow Traces & Assessments]   <─── Se registran en Unity Catalog
                │
                ▼
  [Dataset de Evaluación Dorado]  <─── Golden Evaluation Datasets
```

- **Review App:** Aplicación de chat preconstruida donde los expertos de negocio prueban el agente, validan respuestas y registran correcciones.
- **Evaluaciones sobre Trazas:** Se emplean las APIs de MLflow 3 `log_feedback()` (para calificar respuestas) y `log_expectation()` (para definir la respuesta ideal).
- **Sesiones de Etiquetado (Labeling Sessions):** Los expertos revisan trazas de producción para curar datasets de referencia que luego entrenan a los jueces LLM.

---

## F. Monitoreo Continuo en Línea (Online Monitoring) con MLflow 3

1. **Evaluación Asíncrona en Vivo:**  
   MLflow 3 ejecuta periódicamente jueces LLM sobre una muestra de trazas reales de producción utilizando los mismos evaluadores que en fase de desarrollo.
2. **Diagnóstico a Nivel de Traza:**  
   Permite inspeccionar cada detalle de una llamada: inputs, prompts, documentos recuperados en AI Search, llamadas a herramientas SQL y latencia por paso.
3. **Mismo Marco Unificado:**  
   Garantiza que la medición de calidad en desarrollo sea idéntica a la observada en producción, eliminando sorpresas tras el despliegue.
