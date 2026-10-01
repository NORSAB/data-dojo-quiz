# 📋 01. Course Introduction and Official Syllabus

> **Databricks Academy Course:** Course 2479 — *Fine-tuning Embeddings and Advanced Retrieval*  
> **Course ID LMS:** `2479`  
> **Edición Oficial:** Databricks Academy — Junio 2024 / Actualizado 2026  
> **Autor/Equipo:** Databricks Generative AI Curriculum Engineering Team  
> **Duración Estimada:** ~3.5 horas lectivas (Teoría + Laboratorios prácticos)

---

## 🎯 1. Propósito y Alcance del Curso

Los modelos de embeddings son el corazón algorítmico de cualquier arquitectura moderna de búsqueda semántica, recuperación de información y pipelines de RAG (Retrieval-Augmented Generation). Sin embargo, los modelos de embeddings genéricos pre-entrenados (como `bge-large-en`, `text-embedding-ada-002`, `gte-large`, `all-MiniLM-L6-v2`) están optimizados sobre corpus públicos y heterogéneos (Wikipedia, Common Crawl, Reddit).

Cuando estos modelos se aplican a dominios verticales específicos —como finanzas bancarias, jurisprudencia médica, documentación técnica de telemetría o esquemas internos de datos de una corporación— se enfrentan a desafíos severos:
1. **Pérdida de Especificidad Semántica:** Términos técnicos, acrónimos o códigos de producto son proyectados cerca de conceptos irrelevantes debido a la falta de exposición durante el pre-entrenamiento.
2. **Desajuste de Similitud (*Domain Shift*):** En el lenguaje general, dos frases pueden ser léxicamente similares pero semánticamente opuestas en un contexto empresarial regulado.
3. **Suboptimización de Recuperación:** El modelo recupera pasajes genéricos que no responden la pregunta específica, forzando al LLM a alucinar o responder con evasivas.

Este curso enseña a **cerrar esta brecha semántica mediante el fine-tuning contrastivo de embeddings** y a diseñar **mecanismos avanzados de recuperación en el Lakehouse de Databricks**.

---

## 🗺️ 2. Mapa Estructurado del Curso y Lecciones

El curso está organizado en 9 objetos lectivos obligatorios:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│              CURSO 2479: FINE-TUNING EMBEDDINGS AND ADVANCED RETRIEVAL          │
├───────┬───────────────────────────────────────────┬────────────┬────────────────┤
│ Num   │ Título de la Lección                      │ Tipo       │ Resource ID    │
├───────┼───────────────────────────────────────────┼────────────┼────────────────┤
│ 1.0   │ Intro                                     │ Video/Lect │ 5866           │
│ 1.1   │ Embeddings                                │ Video/Lect │ 5757           │
│ 1.2   │ Embedding Model Architecture              │ Video/Lect │ 5758           │
│ 1.3   │ Data Preparation                          │ Video/Lect │ 5759           │
│ 1.4   │ Fine-Tuning                               │ Video/Lect │ 5760           │
│ 1.5   │ Vector Search Endpoint Demo               │ Hands-On   │ 5784           │
│ 1.6   │ Data Prep and Evaluation Demo             │ Hands-On   │ 5785           │
│ 1.7   │ Fine-Tuning an Embedding Model Demo       │ Hands-On   │ 5786           │
│ 1.8   │ Slides Deck (60 Diapositivas Oficiales)   │ Authoring  │ 363            │
└───────┴───────────────────────────────────────────┴────────────┴────────────────┘
```

---

## 🔍 3. Desglose Detallado por Módulos

### Lección 1.0: Introducción
- Marco general del curso: por qué la recuperación es el cuello de botella de los sistemas de IA generativa.
- Flujo general de un pipeline de RAG y análisis de costos: inferencia de embeddings vs inferencia de LLMs generativos.
- Visión integral de los laboratorios en Databricks Runtime for Machine Learning (ML).

### Lección 1.1: Embeddings
- Definición formal de embeddings como vectores densos en $\mathbb{R}^d$.
- Comparativa geométrica entre:
  - **Similitud Coseno** ($\cos(\theta) = \frac{u \cdot v}{\|u\|_2 \|v\|_2}$)
  - **Producto Punto** ($u \cdot v = \sum u_i v_i$)
  - **Distancia Euclidiana L2** ($\|u - v\|_2 = \sqrt{\sum (u_i - v_i)^2}$)
- La importancia matemática de la **normalización de vectores unitarios**: cuando $\|u\|_2 = \|v\|_2 = 1$, la distancia euclidiana al cuadrado se reduce linealmente a $2 - 2 \cos(\theta)$, unificando el producto punto y el coseno.
- Benchmarks estándar de embeddings: **MTEB (Massive Text Embedding Benchmark)** y métricas clave de evaluación.

### Lección 1.2: Embedding Model Architecture
- **Bi-Encoder Architecture:**
  - Dos torres de codificación idénticas (o con pesos compartidos / siamesas).
  - La consulta $q$ y el pasaje $p$ se codifican independientemente: $v_q = f_\theta(q)$ y $v_p = f_\theta(p)$.
  - Cálculo de similitud mediante producto punto o coseno rápido: $s(q, p) = \langle v_q, v_p \rangle$.
  - Complejidad de indexación: $O(N)$ para codificar $N$ documentos una sola vez.
  - Complejidad de búsqueda: $O(\log N)$ con índices ANN (Approximate Nearest Neighbors) basados en grafos HNSW.
- **Cross-Encoder Architecture:**
  - Una sola torre de codificación donde la consulta y el pasaje se concatenan: $\text{Input} = \text{[CLS]} + q + \text{[SEP]} + p + \text{[SEP]}$.
  - Mecanismo de auto-atención completo en cada capa entre todas las palabras de $q$ y todas las palabras de $p$.
  - Salida: un escalar $s \in [0, 1]$ o logit de relevancia.
  - Complejidad computacional: $O(N \cdot M)$ comparaciones completas con el transformer. Inviable para millones de documentos, pero excelente para re-ranking de top-50/100 candidatos.
- **Mecanismos de Pooling:**
  - `CLS` token pooling: utiliza el estado oculto del primer token especial.
  - `Mean Pooling`: promedia los estados ocultos de todos los tokens ponderados por la máscara de atención (*attention mask*).

### Lección 1.3: Data Preparation
- Tipos de datasets para entrenamiento contrastivo:
  - **Pares positivos:** $(q_i, p_i^+)$
  - **Tripletes:** $(q_i, p_i^+, p_i^-)$ donde $p_i^-$ es un negativo.
- Minado de negativos (**Negatives Mining**):
  - **Negativos aleatorios:** documentos no relacionados tomados al azar (demasiado fáciles de discriminar, gradiente bajo).
  - **Negativos duros (Hard Negatives):** pasajes que comparten léxico o entidades clave pero no responden la consulta. Métodos de extracción:
    - Recuperación por BM25 (top resultados no anotados como relevantes).
    - Recuperación por un modelo de embeddings denso inicial.
- Generación de datos sintéticos con LLMs: cómo generar consultas a partir de fragmentos de texto existentes usando Databricks Foundation Model APIs (ej. `databricks-meta-llama-3-70b-instruct`).

### Lección 1.4: Fine-Tuning
- Formulación de **Multiple Negatives Ranking Loss (MNRL)** / InfoNCE loss.
- Eficiencia del *in-batch negative sampling*: si el batch size es $B$, cada consulta $q_i$ se empareja positivamente con $p_i$ y negativamente con los otros $B - 1$ pasajes del batch, generando $B(B-1)$ negativos virtuales sin costo adicional de memoria.
- Parámetros de entrenamiento:
  - Learning rate típico para fine-tuning: $1 \times 10^{-5}$ a $3 \times 10^{-5}$.
  - Warmup ratio: $0.1$ (10% de los pasos con rampa lineal).
  - Schedule: Cosine decay.
  - Optimizador: AdamW con weight decay $0.01$.

### Lecciones 1.5, 1.6 y 1.7: Hands-On Demos
- **Demo 1.5:** Configuración y administración de endpoints en **Databricks Vector Search** mediante el SDK de Python (`VectorSearchClient`). Creación de índices **Delta Sync** vinculados a tablas Delta de Unity Catalog con cálculo automático de embeddings.
- **Demo 1.6:** Pipeline de generación sintética de pares de prueba $(q, p)$, creación de juicios de relevancia con LLMs (*LLM as a Judge*) y cálculo de métricas de recuperación con **MLflow Evaluate**.
- **Demo 1.7:** Cuaderno integral de entrenamiento de SentenceTransformers sobre GPU (A10G / A100), registro de métricas y artefactos en MLflow y publicación del modelo en Unity Catalog.

---

## 🛠️ 4. Requisitos Previos y Entorno Recomendado

- **Conocimientos Previos:**
  - Fundamentos de Deep Learning y arquitecturas Transformer (Self-Attention, BERT).
  - Experiencia práctica en Python y PyTorch.
  - Familiaridad con el Lakehouse de Databricks, Unity Catalog y Delta Lake.
- **Entorno Databricks Recomendado:**
  - **Runtime:** Databricks Runtime 14.3 LTS ML (incluye PyTorch 2.x, Transformers, Accelerate, MLflow).
  - **Cómputo para Fine-Tuning:** Clúster de GPU con al menos 1x NVIDIA A10G (24 GB VRAM) o NVIDIA A100 (40/80 GB VRAM).
  - **Cómputo para Vector Search:** Endpoint de Databricks Vector Search estándar.
