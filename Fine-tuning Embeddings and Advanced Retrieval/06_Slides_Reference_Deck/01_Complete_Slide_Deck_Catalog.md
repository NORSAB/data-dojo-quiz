# 📑 01. Complete Slide Deck Catalog (60 Diapositivas Oficiales)

> **Módulo:** 06 — Slides Reference Deck  
> **Recurso LMS:** Authoring Object ID `24389` — Resource `363`  
> **Nombre del Paquete:** `Adv-GenAI-01-Fine-Tuning-Embedding-Advanced-Retrieval`  
> **Total de Diapositivas:** 60 diapositivas de alta resolución  
> **URL Base CDN Databricks:** `https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/`

---

## 🗂️ 1. Estructura Temática de las Diapositivas

El mazo oficial de 60 diapositivas cubre de forma exhaustiva los siguientes bloques pedagógicos:

| Rango de Diapositivas | Bloque Temático | Conceptos Clave |
|---|---|---|
| **Diapositivas 1 – 5** | **Apertura y Objetivos de Aprendizaje** | Título del curso, agenda, prerrequisitos, resultados de aprendizaje esperados. |
| **Diapositivas 6 – 15** | **Fundamentos de Embeddings y Selección** | Representación vectorial, espacios latentes, consideraciones de selección entre 5,000+ modelos MTEB. |
| **Diapositivas 16 – 24** | **Por Qué Ajustar Embeddings (*Garbage In, Out*)** | Cuellos de botella en RAG, impacto del domain shift, brecha léxico-semántica. |
| **Diapositivas 25 – 34** | **Arquitecturas: Bi-Encoders vs Cross-Encoders** | Redes siamesas, mecanismos de pooling (`CLS` vs `Mean`), auto-atención cruzada y complejidades $O(N)$ vs $O(N \cdot M)$. |
| **Diapositivas 35 – 42** | **Preparación de Datos y Minado de Negativos** | Pares positivos, minado de hard negatives con BM25 y modelos densos, generación sintética con LLMs. |
| **Diapositivas 43 – 48** | **Fine-Tuning y Pérdida MNRL** | Formulación de Multiple Negatives Ranking Loss (InfoNCE), in-batch negatives, optimización con AdamW y LR decay. |
| **Diapositivas 49 – 55** | **Métricas de Evaluación de IR** | Hit Rate@k, MRR@k, NDCG@k, Precision@k, Recall@k y diseño de benchmarks. |
| **Diapositivas 56 – 57** | **Búsqueda Avanzada y Databricks Vector Search** | Endpoints serverless, Delta Sync con Change Data Feed, Búsqueda Híbrida y RRF. |
| **Diapositivas 58 – 60** | **Resumen, Mejores Prácticas y Cierre** | Conclusiones ejecutivas, recursos adicionales y recomendaciones para producción. |

---

## 🖼️ 2. Catálogo Detallado Diapositiva por Diapositiva con Enlaces Canónicos CDN

A continuación se lista cada una de las 60 diapositivas con su temática exacta y enlace directo al archivo de imagen de alta definición en la infraestructura CDN de Databricks Academy:

### Sección 1: Introducción y Fundamentos (Diapositivas 1 – 15)

1. **Slide 1:** [Portada Oficial: Fine-tuning Embeddings and Advanced Retrieval](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide1_1.jpg) — Databricks Academy, Generative AI Track.
2. **Slide 2:** [Learning Objectives](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide2_1.jpg) — Definición de competencias en embeddings, arquitecturas, minado de datos, fine-tuning y Vector Search.
3. **Slide 3:** [Agenda del Curso](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide3_1.jpg) — Estructura en 5 módulos teóricos y 3 laboratorios prácticos.
4. **Slide 4:** [What are Embeddings?](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide4_1.jpg) — Mapeo de texto a representaciones numéricas continuas en $\mathbb{R}^d$.
5. **Slide 5:** [Vector Space Geometry](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide5_1.jpg) — Proximidad angular y significado semántico.
6. **Slide 6:** [Cosine Similarity vs Dot Product](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide6_1.jpg) — Formulaciones matemáticas y sensibilidad a la longitud del texto.
7. **Slide 7:** [Euclidean Distance (L2)](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide7_1.jpg) — Métrica de distancia euclidiana en espacios densos.
8. **Slide 8:** [L2 Normalization Equivalence](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide8_1.jpg) — Demostración de $D_{L2}^2 = 2(1 - \cos\theta)$ sobre vectores unitarios.
9. **Slide 9:** [Embedding Models Landscape](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide9_1.jpg) — Panorama de modelos disponibles en Hugging Face y proveedores propietarios.
10. **Slide 10:** [Model Choice Considerations](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide10_1.jpg) — Tareas objetivo, licencias comerciales, longitud de contexto (tokens) y velocidad.
11. **Slide 11:** [MTEB Leaderboard Analysis](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide11_1.jpg) — Massive Text Embedding Benchmark y criterios de puntuación.
12. **Slide 12:** [Model Size vs Latency Trade-offs](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide12_1.jpg) — Modelos base (384/768 dim) vs modelos large (1024 dim) en throughput de inferencia.
13. **Slide 13:** [Context Length Limits](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide13_1.jpg) — Manejo de fragmentos que exceden 512 tokens.
14. **Slide 14:** [Pre-processing Requirements](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide14_1.jpg) — Limpieza de texto, chunking y prefijos obligatorios (ej. `query:` en E5).
15. **Slide 15:** [Summary: Pre-trained Model Selection](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide15_1.jpg) — Matriz de decisión para elegir modelo base.

### Sección 2: Por Qué Fine-Tuning y Arquitecturas (Diapositivas 16 – 34)

16. **Slide 16:** [RAG Architecture Overview](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide16_1.jpg) — Flujo de generación aumentada por recuperación.
17. **Slide 17:** [The Retrieval Bottleneck](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide17_1.jpg) — Análisis de causas de fallo en agentes y RAG.
18. **Slide 18:** [Domain Shift in Enterprise Data](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide18_1.jpg) — Vocabularios cerrados, nomenclaturas internas y jerga técnica.
19. **Slide 19:** [Why Fine-Tune Embeddings?](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide19_1.jpg) — Adaptación de la métrica de similitud al dominio objetivo.
20. **Slide 20:** [Garbage In, Garbage Out](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide20_1.jpg) — Diagrama de propagación de error desde el recuperador al LLM generador.
21. **Slide 21:** [Fine-Tuning vs Prompt Engineering](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide21_1.jpg) — Comparativa de costo, latencia y retorno de inversión.
22. **Slide 22:** [Fine-Tuning LLM vs Fine-Tuning Embeddings](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide22_1.jpg) — Por qué ajustar embeddings suele dar mayores beneficios a una fracción del costo.
23. **Slide 23:** [Cost and Latency Benefits](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide23_1.jpg) — Reducción de tokens de contexto necesarios en el LLM.
24. **Slide 24:** [Overview of Embedding Architectures](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide24_1.jpg) — Introducción a Bi-Encoders y Cross-Encoders.
25. **Slide 25:** [Bi-Encoder Architecture](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide25_1.jpg) — Codificación independiente de $q$ y $p$, generación $O(N)$ y comparación $O(\log N)$.
26. **Slide 26:** [Bi-Encoder Ingestion and Query Phase](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide26_1.jpg) — Desacoplamiento temporal entre indexación offline y consulta online.
27. **Slide 27:** [Pooling Strategies](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide27_1.jpg) — CLS Token Pooling vs Mean Pooling sobre attention mask.
28. **Slide 28:** [Cross-Encoder Architecture](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide28_1.jpg) — Concatenación $[CLS] + q + [SEP] + p + [SEP]$ y auto-atención completa.
29. **Slide 29:** [Cross-Encoder Scoring Mechanism](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide29_1.jpg) — Regresión logística sobre vector clasificador $[CLS]$.
30. **Slide 30:** [Bi-Encoder vs Cross-Encoder Trade-offs](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide30_1.jpg) — Cuadro comparativo de precisión vs complejidad computacional.
31. **Slide 31:** [Transformer Backbones (BERT, RoBERTa, DeBERTa)](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide31_1.jpg) — Arquitecturas encoder-only subyacentes.
32. **Slide 32:** [Sentence-Transformers Library](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide32_1.jpg) — Abstracciones y clases fundamentales (`SentenceTransformer`).
33. **Slide 33:** [Two-Tower Scaling Properties](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide33_1.jpg) — Indexación de millones de vectores en memoria y disco.
34. **Slide 34:** [Summary: Model Architectures](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide34_1.jpg) — Conclusiones para la elección de Bi-Encoder para primera etapa.

### Sección 3: Datos, Pérdidas y Fine-Tuning (Diapositivas 35 – 48)

35. **Slide 35:** [Data Formats for Embedding Training](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide35_1.jpg) — Pares positivos $(q, p^+)$, tripletes $(q, p^+, p^-)$ y listas de negativos.
36. **Slide 36:** [Positive Pairs Collection](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide36_1.jpg) — Extracción de logs de búsqueda y consultas de usuarios reales.
37. **Slide 37:** [Synthetic Data Generation with LLMs](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide37_1.jpg) — Generación de consultas sintéticas a partir de chunks de Delta Lake.
38. **Slide 38:** [Negatives in Contrastive Learning](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide38_1.jpg) — Rol de los negativos como fuerza de repulsión en el espacio latente.
39. **Slide 39:** [Hard Negatives Mining](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide39_1.jpg) — Minado léxico con BM25 y minado denso con modelos previos.
40. **Slide 40:** [Multiple Negatives Ranking Loss (MNRL)](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide40_1.jpg) — Formulación matemática de la pérdida InfoNCE.
41. **Slide 41:** [In-Batch Negatives Mechanics](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide41_1.jpg) — Reutilización de pasajes positivos ajenos como negativos ($B(B-1)$ negativos).
42. **Slide 42:** [Data Quality and Label Verification](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide42_1.jpg) — Filtrado de pares ruidosos y falsos negativos.
43. **Slide 43:** [Fine-Tuning Workflow on Databricks](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide43_1.jpg) — Entorno de Databricks Runtime ML, clústeres GPU y MLflow.
44. **Slide 44:** [Hyperparameter Tuning for Embeddings](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide44_1.jpg) — Learning rate ($2\times 10^{-5}$), batch size (32-128) y warmup ratio (0.1).
45. **Slide 45:** [Preventing Catastrophic Forgetting](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide45_1.jpg) — Early stopping y regularización L2/weight decay.
46. **Slide 46:** [Model Evaluation Setup](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide46_1.jpg) — Partición de conjuntos Train / Validation / Test sin fuga de datos.
47. **Slide 47:** [Information Retrieval Evaluator](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide47_1.jpg) — Evaluación continua durante las épocas de entrenamiento.
48. **Slide 48:** [Tracking and Model Registry with Unity Catalog](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide48_1.jpg) — Versionado formal del modelo en Unity Catalog.

### Sección 4: Evaluación, Recuperación Avanzada y Cierre (Diapositivas 49 – 60)

49. **Slide 49:** [Retrieval Evaluation Metrics Overview](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide49_1.jpg) — Por qué la precisión estándar no basta para ranking.
50. **Slide 50:** [Hit Rate@k and Precision@k](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide50_1.jpg) — Fórmulas e interpretación práctica en RAG.
51. **Slide 51:** [Mean Reciprocal Rank (MRR@k)](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide51_1.jpg) — Cálculo de rangos recíprocos promedio para el primer positivo.
52. **Slide 52:** [Normalized Discounted Cumulative Gain (NDCG@k)](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide52_1.jpg) — DCG vs IDCG y ponderación posicional logarítmica.
53. **Slide 53:** [LLM as a Judge for Evaluation](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide53_1.jpg) — Calificación automatizada de relevancia con LLMs fundacionales.
54. **Slide 54:** [Databricks Vector Search Architecture](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide54_1.jpg) — Endpoints, Delta Sync Indexes y Change Data Feed.
55. **Slide 55:** [Delta Sync Index Deployment](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide55_1.jpg) — Sincronización continua y pipelines DLT administrados.
56. **Slide 56:** [Hybrid Search: Dense + BM25](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide56_1.jpg) — Combinación de búsqueda léxica y semántica.
57. **Slide 57:** [Two-Stage Retrieval Pipeline](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide57_1.jpg) — Vector Search (Top-100) + Cross-Encoder Re-ranker (Top-5).
58. **Slide 58:** [Key Takeaways & Architecture Checklist](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide58_1.jpg) — Resumen ejecutivo para arquitectos de IA.
59. **Slide 59:** [Additional Resources & Documentation](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide59_1.jpg) — Enlaces a documentación de Databricks, repositorios y papers.
60. **Slide 60:** [Course Conclusion & Databricks Academy Certification](https://cdn5.dcbstatic.com/files/d/a/databricks_docebosaas_com/1789963200/5-vR2wHg__aNd4gpY7ZBxQ/authoring/363/363_full_slide60_1.jpg) — Cierre del curso y acreditación.
