# 💻 01. Hands-On Demo: Databricks Vector Search Endpoint & Delta Sync Index

> **Módulo:** 05 — Hands-On Demos and Code  
> **Lección de Referencia:** 1.5 — Vector Search Endpoint Demo  
> **Recurso LMS:** Resource ID 5784  
> **Herramientas:** Databricks Python SDK (`databricks-vectorsearch`), Delta Lake, Unity Catalog, Model Serving.

---

## 📌 1. Objetivo del Laboratorio Práctico

Configurar y aprovisionar un entorno de **Databricks Vector Search** mediante código Python utilizando el SDK oficial:
1. Crear y monitorear un **Vector Search Endpoint**.
2. Crear un **Delta Sync Index** vinculado a una tabla Delta en Unity Catalog con cálculo de embeddings automatizado.
3. Ejecutar consultas de búsqueda por similitud vectorial con filtrado por metadatos.

---

## 🛠️ 2. Código de Implementación: Databricks Vector Search SDK

```python
# COMMAND ----------
# MAGIC %pip install databricks-vectorsearch
# MAGIC %restart_python

# COMMAND ----------
import time
from databricks.vector_search.client import VectorSearchClient

# 1. Inicialización del cliente de Vector Search
# (En un notebook de Databricks, las credenciales se autentican automáticamente)
client = VectorSearchClient()

ENDPOINT_NAME = "rag_vector_search_endpoint"
INDEX_NAME = "main.rag_knowledge.documentation_delta_sync_idx"
SOURCE_TABLE = "main.rag_knowledge.documentation_chunks"
EMBEDDING_ENDPOINT = "databricks-bge-large-en"

# COMMAND ----------
# 2. Creación del Vector Search Endpoint (Serverless)
print(f"Creando endpoint de búsqueda vectorial: {ENDPOINT_NAME}...")

try:
    endpoint = client.get_endpoint(name=ENDPOINT_NAME)
    print(f"Endpoint '{ENDPOINT_NAME}' ya existe y está activo.")
except Exception:
    client.create_endpoint(
        name=ENDPOINT_NAME,
        endpoint_type="STANDARD"
    )
    print(f"Aprovisionando endpoint '{ENDPOINT_NAME}'...")

# Esperar a que el endpoint esté en estado ONLINE
while True:
    endpoint_status = client.get_endpoint(name=ENDPOINT_NAME)
    status = endpoint_status.get("endpoint_status", {}).get("state")
    print(f"Estado del Endpoint: {status}")
    if status == "ONLINE":
        break
    time.sleep(10)

# COMMAND ----------
# 3. Creación del Delta Sync Index con Embeddings Calculados Automáticamente
print(f"Creando Delta Sync Index: {INDEX_NAME}...")

try:
    index = client.get_index(endpoint_name=ENDPOINT_NAME, index_name=INDEX_NAME)
    print(f"El índice '{INDEX_NAME}' ya existe.")
except Exception:
    index = client.create_delta_sync_index(
        endpoint_name=ENDPOINT_NAME,
        index_name=INDEX_NAME,
        source_table_name=SOURCE_TABLE,
        pipeline_type="TRIGGERED",         # Opciones: 'TRIGGERED' o 'CONTINUOUS'
        primary_key="chunk_id",
        embedding_source_column="chunk_text",
        embedding_model_endpoint_name=EMBEDDING_ENDPOINT
    )
    print(f"Índice '{INDEX_NAME}' creado. Sincronizando datos iniciales...")

# Esperar a que el índice termine la indexación inicial (ONLINE)
while True:
    idx_detail = client.get_index(endpoint_name=ENDPOINT_NAME, index_name=INDEX_NAME).describe()
    ready = idx_detail.get("status", {}).get("ready", False)
    message = idx_detail.get("status", {}).get("message", "Indexando...")
    print(f"Estado de Sincronización del Índice: {message}")
    if ready:
        print("✅ Delta Sync Index listo para atender consultas.")
        break
    time.sleep(15)

# COMMAND ----------
# 4. Búsqueda Semántica de Prueba con Filtro de Metadatos
query = "¿Cómo se configura el aislamiento de transacciones en Delta Lake?"

results = index.similarity_search(
    query_text=query,
    columns=["chunk_id", "chunk_text", "doc_title", "category"],
    filters={"category": "architecture"},
    num_results=3
)

print("\n--- RESULTADOS DE RECUPERACIÓN VECTORIAL ---")
for doc in results.get("result", {}).get("data_array", []):
    print(f"\n[ID: {doc[0]}] [Título: {doc[2]}]")
    print(f"Texto: {doc[1][:250]}...")
```
