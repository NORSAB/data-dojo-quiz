# 02. Demo: From AI Playground to Deployment — Resumen Técnico

> **Sección:** Agent Evaluation and Deployment  
> **Lección Práctica Demostrativa:** *Demo: From AI Playground to Deployment*  
> *(Nota: En conformidad con los requerimientos, este documento recopila el flujo metodológico, comandos y código sin descargar archivos de video).*

---

## 🎯 Objetivo de la Demostración

Guiar al desarrollador en la transición de un agente interactivo validado en **AI Playground** hacia un endpoint en **Model Serving** o una aplicación en **Databricks Apps**, integrando evaluación y monitoreo con MLflow.

---

## 🔄 Flujo de Trabajo Demostrado

### 1. Exportación desde AI Playground
- Tras validar que el agente responde correctamente con las herramientas de catálogo vinculadas, se selecciona **Get Code** en la interfaz de Playground.
- Se genera un archivo Python (`agent.py`) que implementa la interfaz del agente utilizando el marco de llamadas a herramientas de MLflow.

### 2. Registro del Agente en Unity Catalog
Se ejecuta la celda del cuaderno que registra el modelo:
```python
import mlflow
from databricks import agents

# Definición de recursos gobernados que el agente requiere
resources = [
    agents.Resource(type="function", name="shop.catalog.search_product_docs"),
    agents.Resource(type="function", name="support.data.get_customer_interactions")
]

# 1. Registrar artefacto en el experimento de MLflow
with mlflow.start_run(run_name="support_agent_run"):
    logged_agent = mlflow.pyfunc.log_model(
        artifact_path="agent",
        python_model="agent.py",
        resources=resources,
        pip_requirements=["mlflow>=3.0.0", "databricks-agents"]
    )

# 2. Registrar versión gobernada en Unity Catalog
registered_model = mlflow.register_model(
    model_uri=logged_agent.model_uri,
    name="main.customer_support.support_agent"
)
```

### 3. Despliegue en Producción
Para desplegar como endpoint serverless administrado:
```python
from databricks import agents

# Despliegue del endpoint con un solo comando SDK
deployment = agents.deploy(
    model_name="main.customer_support.support_agent",
    model_version=1,
    scale_to_zero=True
)

print(f"Endpoint desplegado: {deployment.endpoint_name}")
```

### 4. Consulta Programática mediante API Compatible con OpenAI
Cualquier aplicación externa (Web, microservicio en Python o cURL) puede consultar el endpoint desplegado:
```python
from openai import OpenAI

client = OpenAI(
    api_key="<DATABRICKS_PERSONAL_ACCESS_TOKEN>",
    base_url="https://<databricks-instance>/serving-endpoints"
)

response = client.chat.completions.create(
    model="support_agent",
    messages=[
        {"role": "user", "content": "Tengo problemas con el producto X. ¿Qué pasos debo seguir?"}
    ]
)

print(response.choices[0].message.content)
```

### 5. Verificación de Trazas e Inferencia
- **Trazas de Ejecución:** En la pestaña **MLflow Experiments**, cada petición genera un registro detallado en **Traces** que desglosa el tiempo consumido en la llamada al LLM, la búsqueda vectorial y la ejecución de la función SQL.
- **Tablas de Inferencia:** Las entradas y salidas se almacenan automáticamente en una tabla Delta particionada dentro de Unity Catalog para auditorías de cumplimiento y seguridad.
