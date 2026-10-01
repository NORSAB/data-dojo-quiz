# 🏛️ 01. Databricks Vector Search Architecture: Endpoints, Delta Sync Indexes, and CDC

> **Módulo:** 04 — Databricks Vector Search and Retrieval  
> **Lección de Referencia:** 1.5 — Vector Search Endpoint Demo  
> **Diapositivas Clave:** Diapositivas 45 a 48  
> **Temas:** Arquitectura de Databricks Vector Search, Endpoints Serverless, Delta Sync Index (CDF), Direct Vector Access Index y Gobernanza con Unity Catalog.

---

## 📌 1. ¿Qué es Databricks Vector Search?

**Databricks Vector Search** es un motor de base de datos vectorial serverless de nivel empresarial, completamente integrado en el Lakehouse de Databricks y gobernado por **Unity Catalog**. 

A diferencia de las bases de datos vectoriales aisladas de terceros (que requieren pipelines ETL externos frágiles para sincronizar datos), Vector Search sincroniza automáticamente los vectores directamente con las tablas Delta de producción mediante **Change Data Feed (CDF)**.

```
                   ARQUITECTURA DE DATABRICKS VECTOR SEARCH
                   ────────────────────────────────────────

       ┌────────────────────────────────────────────────────────┐
       │                 UNITY CATALOG GOVERNANCE               │
       │                                                        │
       │   Delta Table Fuente                                   │
       │   (doc_id, text, metadata, update_time)               │
       │               │                                        │
       │               ▼ (Delta Change Data Feed - CDF)         │
       │   ┌──────────────────────────────────────────────┐     │
       │   │  Delta Sync Index Pipeline                   │     │
       │   │  • Cálculo automático de embeddings          │     │
       │   │    (via Model Serving Endpoint)              │     │
       │   │  • O ingesta de vectores pre-calculados      │     │
       │   └──────────────────────┬───────────────────────┘     │
       │                          │                             │
       │                          ▼                             │
       │   ┌──────────────────────────────────────────────┐     │
       │   │  Vector Search Endpoint (HNSW Serverless)    │     │
       │   │  • Búsqueda por Similitud Coseno             │     │
       │   │  • Filtrado por Metadatos en tiempo real     │     │
       │   └──────────────────────┬───────────────────────┘     │
       └──────────────────────────┼─────────────────────────────┘
                                  │
                                  ▼
                   Aplicaciones RAG / LLM Agents
```

---

## 🧩 2. Componentes Fundamentales de la Arquitectura

### 2.1. Vector Search Endpoints
Un **Endpoint** es el recurso computacional serverless que aloja uno o más índices vectoriales y atiende consultas de búsqueda semántica con latencias de milisegundos:
- **Alta Disponibilidad:** Gestiona automáticamente la replicación, escalabilidad y tolerancia a fallos.
- **Acceso API y SDK:** Permite búsquedas vectoriales a través del Databricks Python SDK (`databricks-vectorsearch`) o mediante llamadas REST HTTP.

### 2.2. Tipos de Índices Vectoriales

Databricks Vector Search ofrece dos modalidades de índices diseñadas para distintos patrones de arquitectura:

| Característica | Delta Sync Index | Direct Vector Access Index |
|---|---|---|
| **Origen de Datos** | Vinculado a una tabla Delta existente en Unity Catalog. | Independiente; no depende directamente de una tabla Delta. |
| **Mecanismo de Ingesta** | Automático vía streaming o micro-batch desde Delta Lake. | Manual mediante llamadas API REST / SDK (`upsert_data()`). |
| **Cálculo de Embeddings** | **Opción A:** Databricks calcula embeddings usando un endpoint de Model Serving.<br>**Opción B:** Ingesta de columna con vectores pre-calculados. | Requiere que el cliente envíe los vectores pre-computados en la llamada de inserción. |
| **Sincronización de Cambios** | Continua (*Continuous Sync*) o Disparada (*Triggered Sync*) usando Change Data Feed (CDF). | El cliente es responsable de reflejar inserciones, actualizaciones y borrados. |
| **Caso de Uso Primario** | Bases de conocimiento corporativas, catálogos documentales, pipelines ETL Lakehouse. | Aplicaciones con streaming en tiempo real fuera de Databricks que actualizan vectores ad-hoc. |

---

## 🔄 3. El Mecanismo de Sincronización Delta Sync (Change Data Feed)

Para crear un **Delta Sync Index**, la tabla Delta origen debe tener habilitado el Change Data Feed:

```sql
-- Habilitar CDF en la tabla fuente de Unity Catalog
ALTER TABLE main.rag_knowledge.documentation_chunks 
SET TBLPROPERTIES (delta.enableChangeDataFeed = true);
```

### Modos de Sincronización:
1. **Triggered Sync (Disparado):**
   - El pipeline se ejecuta bajo demanda o según un cronograma (ej. cada noche o cada hora).
   - Ideal para reducir costos en colecciones documentales con actualizaciones periódicas.
2. **Continuous Sync (Continuo):**
   - Mantiene un stream de Delta Live Tables (DLT) activo que detecta commits en la tabla Delta en cuestión de segundos.
   - Ideal para sistemas de soporte o noticias donde la frescura del dato es crítica.

---

## 🔒 4. Seguridad, Filtros de Metadatos y Unity Catalog

- **Control de Acceso Unificado (ACLs):** Los permisos de lectura sobre el índice vectorial respetan la gobernanza de Unity Catalog (`GRANT SELECT ON TABLE`).
- **Filtros de Metadatos en Consulta:** Es posible combinar la similitud vectorial con predicados booleanos sobre columnas de metadatos en una sola consulta de baja latencia:

```python
# Ejemplo de búsqueda con filtro de metadatos
results = index.similarity_search(
    query_text="¿Cómo habilitar particionamiento en Delta?",
    columns=["id", "text", "category", "author"],
    filters={"category": "data-engineering", "status =": "published"},
    num_results=5
)
```
