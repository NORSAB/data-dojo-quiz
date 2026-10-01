# 🧠 Fine-tuning Embeddings and Advanced Retrieval — Databricks Academy

> **Curso Oficial de Databricks Academy:** Course 2479  
> **Estado de Acreditación:** 100% Completado  
> **Certificado Oficial:** [Certificado Oficial PDF](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/Certificado_Fine_Tuning_Embeddings_and_Advanced_Retrieval.pdf)  
> **Fecha de Emisión:** Septiembre 2026  
> **Plataforma:** Databricks Customer Academy (Docebo LMS)  
> **Audiencia Técnica:** Generative AI Engineers, Machine Learning Engineers, Data Scientists, AI Architects.

---

## 📌 1. Visión General del Curso

En los sistemas de **Generación Aumentada por Recuperación (RAG - Retrieval-Augmented Generation)** y búsqueda semántica empresarial, la calidad del modelo generativo (LLM) está estrictamente acotada por la calidad del contexto recuperado (*"Garbage In, Garbage Out"*). Si el recuperador no extrae los chunks más relevantes de la base de conocimiento corporativa, el LLM generará alucinaciones o respuestas incompletas sin importar su tamaño o capacidad de razonamiento.

Este curso avanzado se enfoca en el componente crítico de recuperación: **la selección, adaptación, fine-tuning y evaluación de modelos de embeddings**, así como el diseño e implementación de **estrategias avanzadas de recuperación en Databricks Lakehouse** utilizando **Databricks Vector Search**, índices sincronizados con Delta Lake (**Delta Sync Index**) y re-ordenamiento en dos fases (**Two-Stage Re-ranking**).

```
                      ARQUITECTURA DE RECUPERACIÓN RAG DE 2 ETAPAS
                      ───────────────────────────────────────────

    [ Consulta Usuario ]
             │
             ▼
    ┌─────────────────┐
    │  Bi-Encoder     │ ──> Genera embedding denso de consulta (d=1024)
    │  (Query Model)  │
    └─────────────────┘
             │
             ▼
    ┌──────────────────────────────────────────────┐
    │  Databricks Vector Search (HNSW Index)       │
    │  Delta Sync Index / Direct Vector Access     │
    │  Top-K = 50 a 100 candidatos semánticos      │
    └──────────────────────────────────────────────┘
             │
             ▼  [Top 50-100 Chunks]
    ┌──────────────────────────────────────────────┐
    │  Cross-Encoder (Re-ranker Model)             │
    │  Atención completa cruzada Query-Doc         │
    │  Score de similitud preciso                  │
    └──────────────────────────────────────────────┘
             │
             ▼  [Top 3-5 Chunks más relevantes]
    ┌─────────────────┐
    │  LLM Generador  │ ──> Generación con contexto óptimo
    │  (Prompt + Ctx) │
    └─────────────────┘
```

---

## 🎯 2. Objetivos de Aprendizaje Clave

1. **Fundamentos Matemáticos de Embeddings:** Representaciones vectoriales densas, métricas de distancia (Coseno, Producto Punto, Distancia Euclidiana L2) y efectos de la normalización L2.
2. **Arquitecturas de Modelos de Embeddings:** Comparativa exhaustiva entre **Bi-Encoders** (Sentence Transformers, BGE, E5) y **Cross-Encoders**, sus ventajas algorítmicas, complejidades computacionales ($O(N)$ vs $O(N \cdot M)$) y patrones de pooling (`CLS` vs `Mean Pooling`).
3. **Preparación de Datos para Contrastive Learning:** Formato de pares positivos $(q, p^+)$, tripletes $(q, p^+, p^-)$ y técnicas de minado de negativos difíciles (**Hard Negatives Mining**) mediante BM25 y búsqueda vectorial.
4. **Funciones de Pérdida Especializadas:** Derivación e implementación de **Multiple Negatives Ranking Loss (MNRL / InfoNCE)** con negativos dentro del batch (*in-batch negatives*).
5. **Pipeline de Fine-Tuning de Embeddings:** Entrenamiento con `sentence-transformers` y `PyTorch`, programación de tasa de aprendizaje (*Cosine Annealing con Warmup*), integración con MLflow Tracking y registro de modelos en **Unity Catalog**.
6. **Métricas de Evaluación de Búsqueda y Recuperación:** Cálculo y análisis de **MRR@k** (Mean Reciprocal Rank), **NDCG@k** (Normalized Discounted Cumulative Gain), **Precision@k**, **Recall@k** y **MAP**.
7. **Databricks Vector Search:** Despliegue de endpoints de búsqueda vectorial, creación de índices **Delta Sync** (sincronización automática CDC desde Delta Lake) vs **Direct Vector Access**, y configuración de pipelines administrados.
8. **Estrategias Avanzadas de Recuperación:** Búsqueda Híbrida (*Hybrid Search*: Léxica BM25 + Semántica Densa) y re-ranking en cascada de dos etapas.

---

## 📚 3. Estructura del Repositorio de Conocimiento

El contenido extraído de Databricks Academy ha sido organizado en módulos temáticos con máxima fidelidad técnica:

| Módulo | Directorio / Archivo | Descripción |
|---|---|---|
| **00** | [00_Course_Overview/01_Course_Introduction_and_Syllabus.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/00_Course_Overview/01_Course_Introduction_and_Syllabus.md) | Sílabo oficial, lecciones, requisitos y mapa de competencias. |
| **01** | [01_Embedding_Foundations_and_Architectures/01_Embeddings_Representation_and_Similarity.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/01_Embedding_Foundations_and_Architectures/01_Embeddings_Representation_and_Similarity.md) | Espacios vectoriales, geometría de alta dimensión, Coseno, Dot Product y L2. |
| **01** | [01_Embedding_Foundations_and_Architectures/02_Embedding_Model_Architectures.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/01_Embedding_Foundations_and_Architectures/02_Embedding_Model_Architectures.md) | Bi-Encoders vs Cross-Encoders, Pooling (`CLS`, `Mean`), Transformers backbone (BERT, RoBERTa, BGE). |
| **02** | [02_Data_Preparation_and_Loss_Functions/01_Hard_Negatives_and_Data_Formatting.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/02_Data_Preparation_and_Loss_Functions/01_Hard_Negatives_and_Data_Formatting.md) | Minado de Hard Negatives (BM25 vs Dense), generación sintética con LLMs, formato JSONL. |
| **02** | [02_Data_Preparation_and_Loss_Functions/02_Multiple_Negatives_Ranking_Loss_MNRL.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/02_Data_Preparation_and_Loss_Functions/02_Multiple_Negatives_Ranking_Loss_MNRL.md) | Formulación matemática de MNRL, InfoNCE, gradientes, in-batch negatives y temperatura $\tau$. |
| **03** | [03_Fine_Tuning_Embedding_Models/01_Fine_Tuning_Pipeline_and_Techniques.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/03_Fine_Tuning_Embedding_Models/01_Fine_Tuning_Pipeline_and_Techniques.md) | Pipeline de entrenamiento en `sentence-transformers`, optimizadores (AdamW), hiperparámetros. |
| **03** | [03_Fine_Tuning_Embedding_Models/02_Evaluation_and_Retrieval_Metrics.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/03_Fine_Tuning_Embedding_Models/02_Evaluation_and_Retrieval_Metrics.md) | Fórmulas y derivaciones: MRR@k, NDCG@k, Precision@k, Recall@k, Hit Rate@k. |
| **04** | [04_Databricks_Vector_Search_and_Retrieval/01_Databricks_Vector_Search_Architecture.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/04_Databricks_Vector_Search_and_Retrieval/01_Databricks_Vector_Search_Architecture.md) | Arquitectura de Vector Search, Endpoints, Delta Sync Index (CDC), HNSW, Direct Access. |
| **04** | [04_Databricks_Vector_Search_and_Retrieval/02_Advanced_Retrieval_Strategies.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/04_Databricks_Vector_Search_and_Retrieval/02_Advanced_Retrieval_Strategies.md) | Búsqueda Híbrida (Dense + BM25 Reciprocal Rank Fusion) y Re-ranking en 2 etapas. |
| **05** | [05_Hands_On_Demos_and_Code/01_Vector_Search_Endpoint_Demo.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/05_Hands_On_Demos_and_Code/01_Vector_Search_Endpoint_Demo.md) | Código Databricks SDK (`VectorSearchClient`), creación de endpoint y sincronización de índice. |
| **05** | [05_Hands_On_Demos_and_Code/02_Data_Prep_and_Evaluation_Demo.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/05_Hands_On_Demos_and_Code/02_Data_Prep_and_Evaluation_Demo.md) | Generación de preguntas sintéticas con LLM, evaluación con juez LLM y MLflow Evaluate. |
| **05** | [05_Hands_On_Demos_and_Code/03_Fine_Tuning_an_Embedding_Model_Demo.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/05_Hands_On_Demos_and_Code/03_Fine_Tuning_an_Embedding_Model_Demo.md) | Cuaderno integral de entrenamiento: BGE Large, MNRL, MLflow tracking y registro en Unity Catalog. |
| **06** | [06_Slides_Reference_Deck/01_Complete_Slide_Deck_Catalog.md](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/06_Slides_Reference_Deck/01_Complete_Slide_Deck_Catalog.md) | Catálogo oficial de las 60 diapositivas del curso con URLs canónicas al CDN de Databricks. |

---

## 🏆 4. Evidencia de Certificación Oficial

El certificado de acreditación emitido por Databricks Academy para este curso fue descargado y verificado:

- **Archivo Local:** [`Certificado_Fine_Tuning_Embeddings_and_Advanced_Retrieval.pdf`](file:///D:/2026/Simulador%20de%20Preguntas/Fine-tuning%20Embeddings%20and%20Advanced%20Retrieval/Certificado_Fine_Tuning_Embeddings_and_Advanced_Retrieval.pdf)
- **Tamaño:** 366 KB (366,473 bytes)
- **Formato:** Documento PDF nativo `%PDF-1.7` con firma criptográfica de Databricks Academy y Docebo LMS.
- **Lecciones Superadas:** 9/9 objetos lectivos (8 lecciones multimedia + slide deck interactivo de 60 páginas).
