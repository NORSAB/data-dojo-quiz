# ⚡ 02. Advanced Retrieval Strategies: Hybrid Search (Dense + BM25) and Two-Stage Re-ranking

> **Módulo:** 04 — Databricks Vector Search and Retrieval  
> **Lección de Referencia:** 1.5 — Vector Search Endpoint Demo & 1.6 — Data Prep and Evaluation Demo  
> **Diapositivas Clave:** Diapositivas 50 a 57  
> **Temas:** Búsqueda Híbrida (Hybrid Search), Fusión de Rangos Recíprocos (RRF), Re-ranking de Dos Etapas con Cross-Encoders y Optimización de Contexto para LLMs.

---

## 🎯 1. Las Limitaciones de la Búsqueda Densa Pura

Aunque los modelos de embeddings capturan la semántica general de manera excepcional, exhiben debilidades críticas en entornos empresariales:

1. **Búsqueda de Entidades Exactas y Códigos:** Consultas que contienen números de ticket de Jira (`INC-94821`), códigos de error (`ORA-00942`), identificadores de productos o nombres de variables exactos (`spark.sql.shuffle.partitions`) a menudo fallan en la búsqueda densa pura, porque el embedding generaliza el código hacia conceptos genéricos de "error" o "configuración".
2. **Pérdida de Especificidad Léxica:** La búsqueda semántica puede preferir un texto genérico bien redactado sobre un documento que contiene exactamente el término técnico inusual que el usuario busca.

---

## 🔀 2. Búsqueda Híbrida (Hybrid Search): Lo Mejor de Dos Mundos

La **Búsqueda Híbrida** combina simultáneamente dos motores de recuperación:
- **Recuperador Denso (Dense Semantic Retriever):** Databricks Vector Search con embeddings fine-tuned (captura conceptos, sinónimos e intenciones).
- **Recuperador Disperso / Léxico (Sparse BM25 Retriever):** Motor basado en frecuencias de términos e IDF (captura coincidencias exactas de palabras clave y códigos).

```
                      ARQUITECTURA DE BÚSQUEDA HÍBRIDA
                      ────────────────────────────────

                            [ Consulta de Usuario ]
                                       │
                      ┌────────────────┴────────────────┐
                      ▼                                 ▼
             Búsqueda Densa                    Búsqueda Léxica
         (Vector Search / BGE)                   (BM25 / Spark)
                      │                                 │
             Top-50 Candidatos                 Top-50 Candidatos
                      │                                 │
                      └────────────────┬────────────────┘
                                       ▼
                       Reciprocal Rank Fusion (RRF)
                                       │
                                       ▼
                        Top-50 Candidatos Fusionados
```

---

## 🧮 3. Algoritmos de Fusión: Reciprocal Rank Fusion (RRF)

Para combinar los rankings de dos sistemas que producen puntuaciones en escalas incompatibles (similitud coseno $[0, 1]$ vs puntajes BM25 $[0, \infty)$), el estándar de la industria es **Reciprocal Rank Fusion (RRF)**:

$$\text{RRF\_Score}(d) = \sum_{m \in \{\text{Dense}, \text{BM25}\}} \frac{1}{k + r_m(d)}$$

Donde:
- $r_m(d)$ es la posición o ranking del documento $d$ en el motor de búsqueda $m$ ($1, 2, 3, \dots$). Si el documento no aparece en el top-$K$ de un motor, se omite su término o se le asigna un rank infinito.
- $k$ es una constante de suavizado que evita que los documentos en la posición 1 dominen desproporcionadamente la suma. El estándar de la literatura y de Databricks es **$k = 60$**.

---

## 🏎️ 4. Pipeline de Recuperación en Dos Etapas (Two-Stage Retrieval)

Para alcanzar el máximo estado del arte en RAG empresarial, Databricks recomienda una arquitectura en cascada de dos fases:

```
ETAPA 1: Recuperación a Gran Escala (Recall Alto)
• Entrada: Consulta de usuario sobre 5,000,000 de fragmentos de texto.
• Motor: Databricks Vector Search (Bi-Encoder con HNSW Index) + BM25.
• Salida: Top 50 a 100 fragmentos candidatos.
• Latencia: ~10 - 25 ms.
           │
           ▼
ETAPA 2: Re-ranking de Alta Precisión (Precision Alta)
• Entrada: Consulta + 50 fragmentos candidatos de la Etapa 1.
• Motor: Cross-Encoder (ej. BAAI/bge-reranker-large alojado en Databricks Model Serving).
• Operación: Full cross-attention entre tokens de la consulta y tokens de cada fragmento.
• Salida: Re-ordenamiento preciso; selección de los mejores 3 a 5 fragmentos.
• Latencia: ~25 - 45 ms en GPU.
           │
           ▼
INYECCIÓN AL LLM GENERADOR
• Entrada: Prompt con los mejores 3-5 fragmentos verificados.
• Resultado: Respuestas precisas, fundamentadas y sin alucinaciones.
```

---

## 💻 5. Implementación del Algoritmo RRF en Python

```python
from collections import defaultdict

def reciprocal_rank_fusion(
    dense_results: list[str], 
    bm25_results: list[str], 
    k: int = 60
) -> list[tuple[str, float]]:
    """
    Combina listas ordenadas de IDs de documentos mediante RRF.
    dense_results: lista ordenada de doc_ids por similitud semántica.
    bm25_results: lista ordenada de doc_ids por coincidencia BM25.
    """
    rrf_scores = defaultdict(float)

    # 1. Acumular puntuación del recuperador denso
    for rank, doc_id in enumerate(dense_results, start=1):
        rrf_scores[doc_id] += 1.0 / (k + rank)

    # 2. Acumular puntuación del recuperador léxico BM25
    for rank, doc_id in enumerate(bm25_results, start=1):
        rrf_scores[doc_id] += 1.0 / (k + rank)

    # 3. Ordenar documentos por puntuación RRF combinada descendente
    sorted_docs = sorted(rrf_scores.items(), key=lambda item: item[1], reverse=True)
    return sorted_docs

# Demostración:
dense_top5 = ["doc_A", "doc_B", "doc_C", "doc_D", "doc_E"]
bm25_top5  = ["doc_B", "doc_F", "doc_A", "doc_G", "doc_H"]

fused_ranking = reciprocal_rank_fusion(dense_top5, bm25_top5, k=60)
for rank, (doc_id, score) in enumerate(fused_ranking[:5], start=1):
    print(f"Rank {rank}: {doc_id} (RRF Score: {score:.5f})")
```
