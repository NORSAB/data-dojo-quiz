# 📐 01. Embeddings: Representation, Geometry, and Similarity Metrics

> **Módulo:** 01 — Embedding Foundations and Architectures  
> **Lección de Referencia:** 1.1 — Embeddings  
> **Diapositivas Clave:** Diapositivas 3 a 18  
> **Temas:** Espacios vectoriales de alta dimensión, Métricas de Similitud (Coseno, Dot Product, Distancia Euclidiana L2), Normalización Unitaria y Fenómenos Geométricos.

---

## 📌 1. Definición Formal de Embeddings

Un **embedding de texto** es una función no lineal $f_\theta: \mathcal{X} \to \mathbb{R}^d$ parametrizada por una red neuronal (típicamente basada en Transformers) que mapea una secuencia discreta de tokens $x \in \mathcal{X}$ a un vector denso de punto flotante en un espacio continuo euclidiano de dimensión $d$:

$$v = f_\theta(x) \in \mathbb{R}^d$$

Donde:
- $d$ es la dimensionalidad del espacio latente (valores típicos: $d = 384$ para MiniLM, $d = 768$ para BERT-base/BGE-base, $d = 1024$ para BGE-large/E5-large/GTE-large, $d = 1536$ para OpenAI text-embedding-3-small/ada-002, $d = 3072$ para text-embedding-3-large).
- El espacio vectorial está estructurado de modo que la **proximidad geométrica** refleja la **similitud semántica**: textos con significados o intenciones afines se proyectan en regiones cercanas del espacio $\mathbb{R}^d$.

```
               MAPEO SEMÁNTICO EN EL ESPACIO LATENTE R^d
               ─────────────────────────────────────────

  "How to configure Unity Catalog" ──┐
                                     ├──> [0.12, -0.45, 0.88, ..., 0.04]  (Vector q)
  "UC catalog permissions setup"   ──┘    (Distancia angular pequeña: θ ≈ 12°)

  "Delta Lake vacuum retention"    ───>   [-0.85, 0.31, -0.12, ..., 0.65] (Vector p)
                                          (Distancia angular grande: θ ≈ 85°)
```

---

## 📏 2. Métricas de Similitud y Distancia

En el espacio $\mathbb{R}^d$, la comparación entre dos vectores $u, v \in \mathbb{R}^d$ se realiza mediante una de las tres métricas fundamentales:

### 2.1. Similitud Coseno (Cosine Similarity)
Mide el coseno del ángulo $\theta$ entre los dos vectores, ignorando sus magnitudes absolutas:

$$\text{Sim}_{\cos}(u, v) = \cos(\theta) = \frac{u \cdot v}{\|u\|_2 \|v\|_2} = \frac{\sum_{i=1}^d u_i v_i}{\sqrt{\sum_{i=1}^d u_i^2} \sqrt{\sum_{i=1}^d v_i^2}}$$

- **Rango:** $[-1, 1]$ (en embeddings de texto con ReLU/GELU suele quedar confinado a $[0, 1]$ o un subcono estrecho).
- **Interpretación:** 
  - $+1$: Vectores exactamente colineales y en la misma dirección (máxima similitud).
  - $0$: Vectores ortogonales (independencia semántica).
  - $-1$: Vectores colineales en direcciones opuestas (oposición semántica).

### 2.2. Producto Punto (Dot Product / Inner Product)
Mide la proyección de un vector sobre el otro, sensible a la magnitud:

$$\langle u, v \rangle = u \cdot v = \sum_{i=1}^d u_i v_i = \|u\|_2 \|v\|_2 \cos(\theta)$$

- **Rango:** $(-\infty, +\infty)$.
- **Ventaja Computacional:** Extremadamente rápido de calcular en hardware vectorial (AVX-512, GPUs con Tensor Cores / operaciones GEMM).
- **Desventaja sin normalizar:** Documentos largos con embeddings de mayor norma pueden recibir puntuaciones artificialmente elevadas.

### 2.3. Distancia Euclidiana (L2 Distance)
Mide la longitud del segmento rectilíneo que conecta los dos puntos en el espacio $\mathbb{R}^d$:

$$D_{L2}(u, v) = \|u - v\|_2 = \sqrt{\sum_{i=1}^d (u_i - v_i)^2}$$

- **Rango:** $[0, +\infty)$.
- **Interpretación:** Distancia métrica formal. Menor distancia implica mayor similitud.

---

## ⚡ 3. La Equivalencia Matemática con Normalización L2

En la práctica industrial y en **Databricks Vector Search**, todos los vectores son sometidos a **Normalización L2 (Vector Unitario)** antes de su indexación o comparación:

$$\hat{u} = \frac{u}{\|u\|_2} \quad \implies \quad \|\hat{u}\|_2 = 1$$

### Derivación de la Equivalencia:
Desarrollemos el cuadrado de la distancia euclidiana entre dos vectores unitarios $\hat{u}$ y $\hat{v}$:

$$\|\hat{u} - \hat{v}\|_2^2 = \sum_{i=1}^d (\hat{u}_i - \hat{v}_i)^2 = \sum_{i=1}^d \hat{u}_i^2 + \sum_{i=1}^d \hat{v}_i^2 - 2 \sum_{i=1}^d \hat{u}_i \hat{v}_i$$

Como $\|\hat{u}\|_2^2 = 1$ y $\|\hat{v}\|_2^2 = 1$:

$$\|\hat{u} - \hat{v}\|_2^2 = 1 + 1 - 2 (\hat{u} \cdot \hat{v}) = 2 - 2 (\hat{u} \cdot \hat{v})$$

Por consiguiente:

$$D_{L2}^2(\hat{u}, \hat{v}) = 2 \left(1 - \text{Sim}_{\cos}(\hat{u}, \hat{v})\right)$$

$$\hat{u} \cdot \hat{v} = 1 - \frac{1}{2} D_{L2}^2(\hat{u}, \hat{v})$$

### 💡 Implicación Crítica para Arquitectura de Sistemas:
> Cuando los vectores están normalizados con norma $L2 = 1$:
> 1. **Maximizar el Producto Punto** es matemáticamente idéntico a **maximizar la Similitud Coseno**.
> 2. **Maximizar el Producto Punto** es matemáticamente idéntico a **minimizar la Distancia Euclidiana L2**.
> 3. En los motores de búsqueda vectorial (Databricks Vector Search, FAISS, HNSWLib), se utiliza el **Producto Punto sobre vectores unitarios** porque solo requiere una multiplicación de matrices simple (`cublasSgemm`), eliminando raíces cuadradas y divisiones por vector.

---

## 🌀 4. Fenómenos Geométricos en Espacios de Alta Dimensión

Al trabajar con espacios de dimensiones $d \ge 768$, surgen peculiaridades matemáticas que condicionan el entrenamiento y la búsqueda:

### 4.1. Anisotropía (*The Representation Degeneration Problem*)
Los modelos pre-entrenados basados en Transformers tienden a exhibir **anisotropía**: los vectores de las palabras y oraciones no se distribuyen uniformemente en la hiperesfera unitaria, sino que colapsan en un **cono hiperdimensional estrecho**.
- **Consecuencia:** Incluso dos oraciones semánticamente disjuntas tienen una similitud coseno alta (ej. $\cos \approx 0.70 - 0.85$).
- **Solución con Fine-Tuning Contrastivo:** El entrenamiento con funciones de pérdida contrastivas (como MNRL) actúa como una fuerza de repulsión que dispersa los vectores en toda la hiperesfera, restaurando la **isotropía** y la discriminabilidad de los embeddings.

### 4.2. El Problema de los Hubs (*Hubness Problem*)
En espacios vectoriales de alta dimensión, algunos puntos particulares (*hubs*) tienden a aparecer con una frecuencia anómala como los vecinos más cercanos de una gran cantidad de consultas distintas, sesgando los resultados de recuperación. El re-ranking con Cross-Encoder elimina eficazmente este artefacto.

---

## 💻 5. Implementación en Código: PyTorch y NumPy

```python
import numpy as np
import torch
import torch.nn.functional as F

# 1. Definición de dos vectores arbitrarios de d = 4
u = torch.tensor([0.25, -1.20, 0.85, 0.40], dtype=torch.float32)
v = torch.tensor([0.30, -0.95, 0.70, 0.55], dtype=torch.float32)

# 2. Cálculo directo de Similitud Coseno
cos_sim = F.cosine_similarity(u.unsqueeze(0), v.unsqueeze(0)).item()
print(f"Cosine Similarity (Direct): {cos_sim:.6f}")

# 3. Normalización L2 explícita
u_norm = F.normalize(u, p=2, dim=0)
v_norm = F.normalize(v, p=2, dim=0)

# Verificación de norma unitaria: ||u_norm||_2 == 1.0
assert torch.isclose(torch.norm(u_norm, p=2), torch.tensor(1.0))
assert torch.isclose(torch.norm(v_norm, p=2), torch.tensor(1.0))

# 4. Producto punto de vectores normalizados
dot_product_norm = torch.dot(u_norm, v_norm).item()
print(f"Dot Product (Normalized):  {dot_product_norm:.6f}")

# 5. Distancia Euclidiana L2 sobre vectores normalizados
l2_dist_norm = torch.dist(u_norm, v_norm, p=2).item()
print(f"L2 Distance (Normalized):   {l2_dist_norm:.6f}")

# 6. Demostración de la equivalencia matemática: L2^2 = 2 * (1 - Dot)
l2_sq_formula = 2.0 * (1.0 - dot_product_norm)
print(f"L2^2 via Formula 2*(1-Dot): {l2_sq_formula:.6f}")
print(f"L2^2 Direct (l2_dist^2):    {l2_dist_norm**2:.6f}")
assert np.isclose(l2_dist_norm**2, l2_sq_formula, atol=1e-5)
```
