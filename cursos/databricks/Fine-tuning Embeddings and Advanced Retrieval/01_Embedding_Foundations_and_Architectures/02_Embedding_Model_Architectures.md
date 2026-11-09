# 🏗️ 02. Embedding Model Architectures: Bi-Encoders vs Cross-Encoders and Pooling

> **Módulo:** 01 — Embedding Foundations and Architectures  
> **Lección de Referencia:** 1.2 — Embedding Model Architecture  
> **Diapositivas Clave:** Diapositivas 19 a 34  
> **Temas:** Bi-Encoders (Sentence Transformers), Cross-Encoders (Re-rankers), Complejidades Computacionales, Estrategias de Pooling (`CLS`, `Mean`, `Max`) y Backbones de Transformers.

---

## 🏛️ 1. Comparativa de Arquitecturas: Bi-Encoder vs Cross-Encoder

La elección arquitectónica define el equilibrio fundamental entre **latencia/escalabilidad** y **precisión/expresividad semántica** en los sistemas de recuperación de información.

```
                      BI-ENCODER                              CROSS-ENCODER
                (Búsqueda a Gran Escala)                  (Re-ranking de Precisión)

       Consulta (q)         Pasaje (p)                   Consulta (q) + Pasaje (p)
            │                    │                                   │
            ▼                    ▼                                   ▼
      ┌───────────┐        ┌───────────┐               ┌───────────────────────────┐
      │Encoder f_θ│        │Encoder f_θ│               │      Transformer          │
      │(Transformer)       │(Transformer)              │    (Full Cross-Attention  │
      └───────────┘        └───────────┘               │     entre tokens q y p)   │
            │                    │                     └───────────────────────────┘
            ▼                    ▼                                   │
      Vector u ∈ R^d       Vector v ∈ R^d                            ▼
            │                    │                              Logit Escalar
            └──────────┬─────────┘                             s(q, p) ∈ [0, 1]
                       ▼
                 Similitud Coseno
             <u, v> / (||u|| ||v||)
```

---

## 🚀 2. Arquitectura Bi-Encoder (Dual-Tower / Siamese Network)

### 2.1. Funcionamiento Algorítmico
En un **Bi-Encoder**, la consulta $q$ y el documento/pasaje $p$ son procesados por dos redes neuronales independientes (o típicamente por la misma red con pesos compartidos $\theta$):

$$u = \text{Pool}\left(\text{Transformer}_\theta(q)\right) \in \mathbb{R}^d$$

$$v = \text{Pool}\left(\text{Transformer}_\theta(p)\right) \in \mathbb{R}^d$$

La similitud final es calculada mediante una operación geométrica simple sobre los vectores resultantes:

$$s(q, p) = \langle u, v \rangle \quad \text{o} \quad s(q, p) = \cos(u, v)$$

### 2.2. Ventajas y Complejidad
- **Indexación Asíncrona Desacoplada:** Se pueden codificar millones de documentos $p \in \mathcal{C}$ **una sola vez** en un proceso batch y almacenar sus vectores densos en una base de datos vectorial (como Databricks Vector Search).
- **Complejidad de Almacenamiento e Indexación:** $O(N)$ donde $N = |\mathcal{C}|$ es el número de documentos.
- **Complejidad de Búsqueda:** En tiempo de consulta, la consulta $q$ se codifica una sola vez ($O(1)$ inferencias de red neuronal). Luego, la búsqueda de los vecinos más cercanos toma:
  - Búsqueda exacta (fuerza bruta): $O(N \cdot d)$ operaciones de producto punto (muy veloz en GPUs/CPUs).
  - Búsqueda aproximada (**ANN con HNSW**): $O(\log N)$ saltos en el grafo de proximidad.
- **Limitación Teórica:** La consulta y el documento nunca interactúan a nivel de tokens en las capas de atención del Transformer. Por ende, no se capturan matices complejos de negación o dependencias léxicas cruzadas sutiles.

---

## 🎯 3. Arquitectura Cross-Encoder (Re-Ranker)

### 3.1. Funcionamiento Algorítmico
En un **Cross-Encoder**, la consulta $q$ y el pasaje $p$ se concatenan en una sola secuencia de tokens de entrada antes de alimentar el Transformer:

$$\mathbf{x} = \text{[CLS]} \circ q_1 \dots q_m \circ \text{[SEP]} \circ p_1 \dots p_k \circ \text{[SEP]}$$

$$\mathbf{H} = \text{Transformer}_\theta(\mathbf{x})$$

$$s(q, p) = \sigma\left(\mathbf{W} \cdot \mathbf{h}_{\text{[CLS]}} + b\right) \in [0, 1]$$

### 3.2. Ventajas y Desafíos Computacionales
- **Auto-Atención Cruzada Completa (*Full Cross-Attention*):** En cada capa del Transformer, cada token de la consulta $q$ atiende a cada token del pasaje $p$, permitiendo que el modelo aprenda interacciones léxicas y semánticas ricas y exactas.
- **Precisión Superior:** Supera sistemáticamente a los Bi-Encoders en tareas de ranking y clasificación de pares.
- **Inviabilidad para Búsqueda a Gran Escala:**
  - Si un catálogo tiene $N = 10,000,000$ documentos, responder una consulta requeriría concatenar la consulta con los 10 millones de documentos y ejecutar **10 millones de pasadas hacia adelante en el Transformer**, lo cual tardaría minutos u horas y costaría miles de dólares en cómputo.
- **Caso de Uso Óptimo:** Como **segunda etapa (*Re-ranker*)** sobre los mejores 50 a 100 candidatos devueltos previamente por el Bi-Encoder.

---

## 📊 4. Tabla Comparativa de Rendimiento y Recursos

| Dimensión | Bi-Encoder (Dense Retriever) | Cross-Encoder (Re-Ranker) |
|---|---|---|
| **Modelos Representativos** | `bge-large-en-v1.5`, `e5-large-v2`, `all-MiniLM-L6-v2` | `bge-reranker-large`, `ms-marco-MiniLM-L-6-v2` |
| **Interacción de Tokens** | Nula (solo producto punto de vectores finales) | Completa en todas las capas de atención ($L$ capas) |
| **Cálculo Previo de Embeddings** | Sí (se computan offline una sola vez) | No (requiere la consulta y el pasaje juntos) |
| **Complejidad por Consulta ($N$ docs)** | 1 inferencia de LLM + $O(\log N)$ búsqueda vectorial | $N$ inferencias completas de Transformer |
| **Latencia Típica (1M docs)** | $5 - 20\text{ ms}$ (con Databricks Vector Search) | Inviable ($> 100,000\text{ ms}$) |
| **Latencia sobre Top-50 Candidatos** | N/A | $15 - 40\text{ ms}$ en GPU |
| **Rol en Databricks RAG** | **Etapa 1:** Filtrado masivo (Recall alto) | **Etapa 2:** Re-ordenamiento fino (Precisión alta) |

---

## 🎛️ 5. Mecanismos de Pooling: De Secuencia de Tokens a Vector de Oración

Los Transformers devuelven una matriz de estados ocultos $\mathbf{H} \in \mathbb{R}^{T \times d_{\text{model}}}$, donde $T$ es la longitud de la secuencia de tokens. Para obtener un único vector de oración $v \in \mathbb{R}^d$, se aplica una operación de **Pooling**:

```
Tokens:      [CLS]    "How"    "to"    "tune"   "models"   [SEP]   [PAD]
               │        │        │        │        │         │       │
Hidden H:     h_0      h_1      h_2      h_3      h_4       h_5     h_6
               │
               ├───> CLS Pooling:          v = h_0
               │
               └───> Mean Pooling:         v = (1 / ∑ mask) * ∑ (h_i * mask_i)
```

### 5.1. `CLS` Token Pooling
Toma el vector del primer token especial `[CLS]` (o token `<s>` en RoBERTa):

$$v = \mathbf{h}_0$$

- **Usado por:** Modelos pre-entrenados con tareas específicas a nivel de secuencia (ej. modelos de la familia **BGE** de BAAI, como `BAAI/bge-large-en-v1.5`).
- **Consideración:** Requiere que el modelo haya sido pre-entrenado para consolidar la semántica global en dicho token.

### 5.2. `Mean Pooling` (Promedio Ponderado por Máscara de Atención)
Calcula el promedio aritmético de todos los tokens contextuales, excluyendo estrictamente los tokens de relleno (*padding*):

$$v = \frac{\sum_{i=1}^T \mathbf{h}_i \cdot m_i}{\sum_{i=1}^T m_i}$$

Donde $m_i \in \{0, 1\}$ es la máscara de atención (`attention_mask`).

- **Usado por:** Modelos `all-MiniLM-L6-v2`, `intfloat/e5-large-v2`, `sentence-transformers`.
- **Ventaja:** Robusto y captura información semántica distribuida en toda la oración.

### 5.3. Implementación en PyTorch del Mean Pooling

```python
import torch

def mean_pooling(model_output, attention_mask):
    """
    model_output[0] contiene los hidden states de la última capa: (batch_size, seq_len, hidden_dim)
    attention_mask: (batch_size, seq_len)
    """
    token_embeddings = model_output[0] 
    input_mask_expanded = attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
    
    # Suma de vectores ignorando padding
    sum_embeddings = torch.sum(token_embeddings * input_mask_expanded, dim=1)
    
    # Suma de máscaras con clamping para evitar división por cero
    sum_mask = torch.clamp(input_mask_expanded.sum(dim=1), min=1e-9)
    
    # Vector promedio
    return sum_embeddings / sum_mask
```

---

## 🧬 6. Modelos Backbone Comunes para Fine-Tuning

Al seleccionar un modelo base para fine-tuning en Databricks:

1. **`BAAI/bge-large-en-v1.5` / `bge-base-en-v1.5`:**
   - Longitud máxima de contexto: 512 tokens.
   - Dimensión de embedding: 1024 (large) / 768 (base).
   - Pooling: `CLS`.
   - Rendimiento líder en MTEB.
2. **`intfloat/e5-large-v2` / `multilingual-e5-large`:**
   - Requiere prefijos explícitos: `"query: "` para consultas y `"passage: "` para documentos.
   - Pooling: `Mean`.
3. **`sentence-transformers/all-MiniLM-L6-v2`:**
   - Dimensión: 384. Muy ligero y rápido para entornos con restricciones extremas de latencia en CPU.
