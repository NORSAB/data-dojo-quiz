# 02. Demos Prácticas — Resumen y Flujo de Trabajo

> **Sección:** Building AI Agents on Databricks  
> **Lecciones Prácticas Demostrativas:**  
> 1. *Demo: Get Started with AI Agents on Databricks*  
> 2. *Demo: Build Agent Tools and Prototype with AI Playground*  
> *(Nota: En conformidad con los requerimientos, este documento recopila la metodología, pasos técnicos y código de las sesiones demostrativas sin almacenar archivos de video).*

---

## 🎯 Demo 1: Get Started with AI Agents on Databricks

### Objetivo
Demostrar el aprovisionamiento del entorno inicial en un workspace de Databricks, configurando los permisos de catálogo y ejecutando el cuaderno de configuración `Workspace-Setup.py`.

### Flujo de Ejecución Demostrado:
1. **Verificación de Unity Catalog:**  
   Acceso a la pestaña **Catalog** para confirmar que el usuario cuenta con permisos `USE CATALOG`, `USE SCHEMA` y `CREATE FUNCTION` en el catálogo de trabajo.
2. **Carga de Datos:**  
   Creación de tablas Delta de ejemplo (`support.data.cust_service_data`) con registros de clientes y fechas de interacción para habilitar consultas estructuradas.
3. **Indexación Vectorial (AI Search):**  
   Configuración de un índice de búsqueda vectorial sobre documentación de productos para habilitar recuperación semántica no estructurada.

---

## 🎯 Demo 2: Build Agent Tools and Prototype with AI Playground

### Objetivo
Crear herramientas gobernadas en Unity Catalog y vincularlas a un agente de prototipado interactivo en el **AI Playground**, evaluando respuestas y exportando el código final.

### Paso a Paso Técnico:

#### 1. Creación de la Herramienta en SQL
Se ejecuta en el Editor SQL la función que encapsula la búsqueda semántica:
```sql
CREATE OR REPLACE FUNCTION shop.catalog.search_product_docs(
  search_term STRING COMMENT 'Search term for relevant product documentation'
)
RETURNS TABLE
COMMENT 'Searches product documentation using AI Search.'
RETURN (
  SELECT product_name, indexed_doc AS doc
  FROM vector_search(
    index => 'shop.catalog.product_docs_index',
    query => search_term,
    num_results => 2
  )
);
```

#### 2. Configuración en AI Playground
- **Ruta en Databricks UI:** Menú lateral $\rightarrow$ **Machine Learning** $\rightarrow$ **Playground**.
- **Selección de Modelo:** Se elige un modelo fundacional (ej. Claude Sonnet o Gemini).
- **Asignación de Herramientas:** Se hace clic en **Tools** $\rightarrow$ **Add Tool** $\rightarrow$ Se selecciona `shop.catalog.search_product_docs`.
- **Interacción y Prueba:** Se formula una pregunta en lenguaje natural como *"¿Cuáles son las características principales del producto X?"*.
- **Observación del Agente:** El modelo razona, genera los parámetros para `search_product_docs`, invoca la función en Unity Catalog, recibe el contexto devuelto y formula la respuesta final con referencias.

#### 3. Exportación a Código Reproducible
Una vez validada la calidad de respuesta, se presiona el botón **Get Code** o **Export Notebook**. Databricks genera un cuaderno estructurado con MLflow:
```python
import mlflow

# Registro del modelo con sus dependencias de recursos de Unity Catalog
logged = mlflow.pyfunc.log_model(
    name="agent",
    python_model="agent.py",
    resources=resources
)

# Registro del modelo en Unity Catalog para gobernanza
mlflow.register_model(
    model_uri=logged.model_uri,
    name="main.agents.support_agent"
)
```
Este código queda listo para ser llevado a integración continua y despliegue automatizado.
