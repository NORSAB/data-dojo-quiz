/**
 * UNAH - Tesis: Modelo Híbrido TCROC-Markov-SSRC
 * Question Bank — 30 questions across 5 chapters + integrative
 * courseId: "unah-tesis"
 */
window.questionsData = (window.questionsData || []).concat([
  // ════════════ CAPÍTULO 4: TCROC ════════════
  {
    "id": "unah-tesis-4-01",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre el operador TCROC es CORRECTA?",
    "options": [
      { "id": "a", "text": "Requiere iteración numérica para encontrar el mínimo global." },
      { "id": "b", "text": "La solución β̂ es un cociente cerrado de productos punto ponderados." },
      { "id": "c", "text": "Solo admite pesos uniformes (λ = 1)." },
      { "id": "d", "text": "Necesita distribuciones gaussianas como supuesto." }
    ],
    "correctIds": ["b"],
    "explanation": "El Teorema de Existencia y Unicidad demuestra que el minimizador tiene forma cerrada: β̂ = Σλ^(t-k)v(k)v(k-1) / Σλ^(t-k)v(k-1)². No requiere iteración, admite cualquier λ∈(0,1], y no necesita supuestos distribucionales.",
    "domain": "Cap. 4: TCROC"
  },
  {
    "id": "unah-tesis-4-02",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "La variante ETCROCM del operador TCROC se caracteriza por:",
    "options": [
      { "id": "a", "text": "λ = 1 y W = T" },
      { "id": "b", "text": "λ < 1 y W = T" },
      { "id": "c", "text": "λ = 1 y W < T" },
      { "id": "d", "text": "λ < 1 y W < T" }
    ],
    "correctIds": ["d"],
    "explanation": "ETCROCM combina ambos mecanismos: decaimiento exponencial (λ < 1) y ventana móvil (W < T). Es la forma más general de la familia TCROC.",
    "domain": "Cap. 4: TCROC"
  },
  {
    "id": "unah-tesis-4-03",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué relación establece el TCROC con los estimadores clásicos?",
    "options": [
      { "id": "a", "text": "TCROC equivale a GLS, ETCROC equivale a OLS." },
      { "id": "b", "text": "TCROC (λ=1) equivale a OLS, ETCROC (λ<1) equivale a GLS." },
      { "id": "c", "text": "TCROC equivale a MLE, ETCROC equivale a BLUE." },
      { "id": "d", "text": "No existe relación con estimadores clásicos." }
    ],
    "correctIds": ["b"],
    "explanation": "Con λ=1 (pesos uniformes), TCROC coincide con OLS. Con λ<1 (pesos exponenciales), ETCROC coincide con GLS. El Teorema de Gauss-Markov generalizado (Aitken, 1936) garantiza que ambos son BLUE.",
    "domain": "Cap. 4: TCROC"
  },
  {
    "id": "unah-tesis-4-04",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes NO es un axioma satisfecho por la familia TCROC?",
    "options": [
      { "id": "a", "text": "Localidad acotada" },
      { "id": "b", "text": "Proporcionalidad geométrica" },
      { "id": "c", "text": "Normalidad de residuos" },
      { "id": "d", "text": "Estabilidad de Lipschitz" }
    ],
    "correctIds": ["c"],
    "explanation": "Los 4 axiomas son: Localidad acotada, Proporcionalidad geométrica, Convexidad global y Estabilidad de Lipschitz. La normalidad de residuos es un supuesto de métodos clásicos (ARIMA, MLE), pero NO de TCROC.",
    "domain": "Cap. 4: TCROC"
  },
  {
    "id": "unah-tesis-4-05",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "La consistencia asintótica del TCROC establece que cuando W → ∞:",
    "options": [
      { "id": "a", "text": "β̂ converge a cero." },
      { "id": "b", "text": "β̂ converge en distribución a una Normal." },
      { "id": "c", "text": "β̂ converge en probabilidad al verdadero β*." },
      { "id": "d", "text": "β̂ diverge si la serie es no estacionaria." }
    ],
    "correctIds": ["c"],
    "explanation": "El Teorema de Consistencia demuestra que β̂ →ᵖ β* bajo AR(1) estacionario (|β*| < 1). La prueba usa la Ley de Grandes Números para sucesiones ponderadas estacionarias y el Lema de Slutsky.",
    "domain": "Cap. 4: TCROC"
  },
  {
    "id": "unah-tesis-4-06",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la complejidad computacional del ETCROC con implementación recursiva?",
    "options": [
      { "id": "a", "text": "O(T²)" },
      { "id": "b", "text": "O(T·W)" },
      { "id": "c", "text": "O(T) — con O(1) por observación" },
      { "id": "d", "text": "O(T·log T)" }
    ],
    "correctIds": ["c"],
    "explanation": "ETCROC admite cálculo incremental: S₁(t) = λS₁(t-1) + v(t)v(t-1) y S₂(t) = λS₂(t-1) + v(t-1)². Cada nueva observación requiere O(1) operaciones, dando O(T) total.",
    "domain": "Cap. 4: TCROC"
  },

  // ════════════ CAPÍTULO 5: MARKOV ════════════
  {
    "id": "unah-tesis-5-01",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué papel cumple la función de cuantización π en el modelo TCROC-Markov?",
    "options": [
      { "id": "a", "text": "Calcula la tasa de cambio relativa." },
      { "id": "b", "text": "Mapea valores continuos α_t a estados discretos S_t." },
      { "id": "c", "text": "Estima la matriz de transición." },
      { "id": "d", "text": "Normaliza la serie temporal." }
    ],
    "correctIds": ["b"],
    "explanation": "La función π(α_t) → S_t es el puente entre el mundo continuo del operador TCROC y el mundo discreto de las cadenas de Markov. En la práctica, se implementa mediante K-Means.",
    "domain": "Cap. 5: Markov"
  },
  {
    "id": "unah-tesis-5-02",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "La propiedad de Markov de primer orden implica que:",
    "options": [
      { "id": "a", "text": "Cada estado depende de los últimos W estados." },
      { "id": "b", "text": "El futuro depende solo del estado actual, no del historial completo." },
      { "id": "c", "text": "La cadena es reversible." },
      { "id": "d", "text": "Las probabilidades de transición cambian con el tiempo." }
    ],
    "correctIds": ["b"],
    "explanation": "P(S_{t+1}=sⱼ | S_t=sᵢ, S_{t-1},...) = P(S_{t+1}=sⱼ | S_t=sᵢ). El pasado es condicionalmente irrelevante dado el presente.",
    "domain": "Cap. 5: Markov"
  },
  {
    "id": "unah-tesis-5-03",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué propiedad garantiza que la cadena de Markov \"olvida\" su pasado a tasa geométrica?",
    "options": [
      { "id": "a", "text": "Estacionariedad" },
      { "id": "b", "text": "Ergodicidad" },
      { "id": "c", "text": "ϕ-Mixing" },
      { "id": "d", "text": "Reversibilidad" }
    ],
    "correctIds": ["c"],
    "explanation": "La propiedad ϕ-mixing con ϕ(n) ≤ C_ϕ·ρⁿ garantiza el olvido exponencial. Es más fuerte que simple ergodicidad y permite derivar normalidad asintótica para los estimadores.",
    "domain": "Cap. 5: Markov"
  },
  {
    "id": "unah-tesis-5-04",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En la descomposición del error ECM = σ²ε + C/W_eff + o(W_eff⁻¹), ¿qué representa σ²ε?",
    "options": [
      { "id": "a", "text": "El error de estimación de los parámetros." },
      { "id": "b", "text": "La varianza irreducible del ruido, que no se puede eliminar." },
      { "id": "c", "text": "El error de discretización de K-Means." },
      { "id": "d", "text": "La varianza de la distribución estacionaria." }
    ],
    "correctIds": ["b"],
    "explanation": "σ²ε es la varianza irreducible del ruido intrínseco de la serie. Ningún modelo puede reducirla — es el límite teórico de predicción.",
    "domain": "Cap. 5: Markov"
  },
  {
    "id": "unah-tesis-5-05",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué se prefiere K-Means sobre umbrales fijos (±5%) para la discretización?",
    "options": [
      { "id": "a", "text": "K-Means es más rápido computacionalmente." },
      { "id": "b", "text": "Los umbrales fijos son exógenos; K-Means adapta los puntos de corte a la distribución empírica de cada serie." },
      { "id": "c", "text": "K-Means siempre produce más estados." },
      { "id": "d", "text": "Los umbrales fijos no son compatibles con cadenas de Markov." }
    ],
    "correctIds": ["b"],
    "explanation": "Los umbrales ±5% aplican el mismo esquema a todas las series, ignorando sus distribuciones específicas. K-Means adapta los centroides a la distribución empírica observada. Superioridad confirmada con test de Diebold-Mariano.",
    "domain": "Cap. 5: Markov"
  },

  // ════════════ CAPÍTULO 6: NNLS ════════════
  {
    "id": "unah-tesis-6-01",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal ventaja de NNLS sobre OLS para estimar matrices de transición?",
    "options": [
      { "id": "a", "text": "NNLS converge más rápido." },
      { "id": "b", "text": "NNLS garantiza una matriz estocástica válida (entradas ≥ 0, columnas que suman 1)." },
      { "id": "c", "text": "NNLS produce errores menores en todas las métricas." },
      { "id": "d", "text": "NNLS no requiere datos de entrenamiento." }
    ],
    "correctIds": ["b"],
    "explanation": "OLS sin restricciones puede producir probabilidades de transición negativas. NNLS impone P_ij ≥ 0 y Σ P_ij = 1 por construcción, garantizando una matriz estocástica válida.",
    "domain": "Cap. 6: NNLS"
  },
  {
    "id": "unah-tesis-6-02",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué identidad algebraica permite vectorizar el problema de estimación NNLS?",
    "options": [
      { "id": "a", "text": "La identidad de Woodbury." },
      { "id": "b", "text": "El producto de Hadamard." },
      { "id": "c", "text": "La identidad de Kronecker: vec(ABC) = (Cᵀ ⊗ A)vec(B)." },
      { "id": "d", "text": "La descomposición de Cholesky." }
    ],
    "correctIds": ["c"],
    "explanation": "La identidad de Kronecker transforma el problema matricial min‖X₁ - PX₀‖²_F en uno vectorial min‖vec(X₁) - (X₀ᵀ ⊗ I)vec(P)‖², permitiendo aplicar el solver NNLS estándar.",
    "domain": "Cap. 6: NNLS"
  },
  {
    "id": "unah-tesis-6-03",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En el Algoritmo SRep, ¿cuál es la función del peso w en el sistema aumentado?",
    "options": [
      { "id": "a", "text": "Regulariza contra sobreajuste." },
      { "id": "b", "text": "Actúa como multiplicador de Lagrange suave para forzar la restricción de suma unitaria." },
      { "id": "c", "text": "Normaliza la norma de Frobenius." },
      { "id": "d", "text": "Controla la tasa de convergencia." }
    ],
    "correctIds": ["b"],
    "explanation": "Un w muy grande (típicamente 10⁶) hace que la violación de Σ P_ij = 1 sea extremadamente costosa, forzando la estocacidad sin restricciones de igualdad explícitas.",
    "domain": "Cap. 6: NNLS"
  },
  {
    "id": "unah-tesis-6-04",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué codificación se usa para representar los estados discretos en el Algoritmo SRep?",
    "options": [
      { "id": "a", "text": "Codificación ordinal (1, 2, 3, 4)" },
      { "id": "b", "text": "Codificación binaria (00, 01, 10, 11)" },
      { "id": "c", "text": "Codificación one-hot: s₁ → [1,0,0,0]ᵀ" },
      { "id": "d", "text": "Codificación Gray" }
    ],
    "correctIds": ["c"],
    "explanation": "La codificación one-hot permite representar la distribución de probabilidad sobre estados como un vector columna. Es necesaria para la formulación matricial del problema.",
    "domain": "Cap. 6: NNLS"
  },

  // ════════════ CAPÍTULO 7: COMBUSTIBLES ════════════
  {
    "id": "unah-tesis-7-01",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué ocurre cuando la ventana W iguala la longitud total T de la serie?",
    "options": [
      { "id": "a", "text": "El modelo alcanza su máxima precisión." },
      { "id": "b", "text": "Se produce degeneración: α_t es constante, K_eff = 1, y la matriz P̂ degenera a la identidad." },
      { "id": "c", "text": "K-Means no puede ejecutarse." },
      { "id": "d", "text": "La cadena de Markov se vuelve no ergódica." }
    ],
    "correctIds": ["b"],
    "explanation": "Cuando W=T, α_t es idéntico para todo t, su varianza es 0, K-Means asigna todo a un solo clúster, y P̂ = I. Es el fenómeno de degeneración por sobre-suavizado. Se resuelve restringiendo W ≤ 52 semanas.",
    "domain": "Cap. 7: Combustibles"
  },
  {
    "id": "unah-tesis-7-02",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la justificación para restringir W ≤ 52 semanas?",
    "options": [
      { "id": "a", "text": "Es el número máximo que el algoritmo soporta." },
      { "id": "b", "text": "Corresponde a un ciclo anual, más allá del cual la memoria del mercado pierde relevancia." },
      { "id": "c", "text": "Es el estándar internacional del FMI." },
      { "id": "d", "text": "Minimiza el error de K-Means." }
    ],
    "correctIds": ["b"],
    "explanation": "La restricción W ≤ 52 tiene justificación económica: los precios de combustibles siguen ciclos anuales determinados por políticas regulatorias, estaciones climáticas, y patrones de demanda.",
    "domain": "Cap. 7: Combustibles"
  },
  {
    "id": "unah-tesis-7-03",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los 4 combustibles tiene la mejor exactitud predictiva y por qué?",
    "options": [
      { "id": "a", "text": "Diésel, por ser el más comercializado." },
      { "id": "b", "text": "Regular, con 85.1% — tiene solo K=3 estados y alta persistencia debido a fuerte regulación." },
      { "id": "c", "text": "Súper, por tener más observaciones." },
      { "id": "d", "text": "Kerosene, por su baja volatilidad." }
    ],
    "correctIds": ["b"],
    "explanation": "La gasolina Regular tiene K=3 (estructura simple), alta persistencia P(sᵢ|sᵢ) ≈ 0.96, y es la más regulada por la SEN. Su predictibilidad refleja un mercado con pocos cambios abruptos.",
    "domain": "Cap. 7: Combustibles"
  },
  {
    "id": "unah-tesis-7-04",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "El gap espectral γ del Kerosene (0.021) implica que:",
    "options": [
      { "id": "a", "text": "El mercado es altamente volátil." },
      { "id": "b", "text": "El Kerosene tiene la inercia más alta: necesita ~47 semanas para que una perturbación se disipe." },
      { "id": "c", "text": "K-Means produjo más clústeres de los necesarios." },
      { "id": "d", "text": "La cadena no es ergódica." }
    ],
    "correctIds": ["b"],
    "explanation": "γ = 0.021 es el menor entre los 4 combustibles. El tiempo de mezcla t_mix ≈ ⌈ln(1/ε)/γ⌉ ≈ 47 semanas. Esto explica matemáticamente por qué el Kerosene es el más difícil de pronosticar.",
    "domain": "Cap. 7: Combustibles"
  },
  {
    "id": "unah-tesis-7-05",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué MS-AR falló como alternativa competitiva?",
    "options": [
      { "id": "a", "text": "No tiene implementación en Python." },
      { "id": "b", "text": "Falló por inestabilidad numérica en 3 de 4 series, evidenciando la fragilidad de la optimización de verosimilitud iterativa." },
      { "id": "c", "text": "Requiere series más largas (>10,000 observaciones)." },
      { "id": "d", "text": "No soporta más de 2 estados." }
    ],
    "correctIds": ["b"],
    "explanation": "MS-AR (Hamilton, 1989) usa optimización numérica de verosimilitud que es sensible a condiciones iniciales y puede no converger. En 3 de 4 series, el solver produjo errores numéricos.",
    "domain": "Cap. 7: Combustibles"
  },

  // ════════════ CAPÍTULO 8: SSRC ════════════
  {
    "id": "unah-tesis-8-01",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la característica distintiva de la computación de reservorio?",
    "options": [
      { "id": "a", "text": "Todas las matrices se entrenan con backpropagation." },
      { "id": "b", "text": "Solo la capa de lectura W_out se entrena; W_in y W_res se generan aleatoriamente." },
      { "id": "c", "text": "Usa redes convolucionales en lugar de recurrentes." },
      { "id": "d", "text": "Requiere datos etiquetados para supervisión." }
    ],
    "correctIds": ["b"],
    "explanation": "En un Echo State Network, las matrices internas (W_in, W_res) se fijan aleatoriamente y NO se entrenan. Solo la capa de salida W_out se estima. Esto evita backpropagation through time (BPTT).",
    "domain": "Cap. 8: Reservorio"
  },
  {
    "id": "unah-tesis-8-02",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "La variante Leaky-ESN introduce el parámetro \"a\" (tasa de fuga). ¿Qué efecto tiene a ≪ 1?",
    "options": [
      { "id": "a", "text": "El reservorio responde rápidamente a cambios recientes." },
      { "id": "b", "text": "El reservorio enfatiza tendencias de largo plazo, con memoria efectiva ~1/a." },
      { "id": "c", "text": "El reservorio se vuelve inestable." },
      { "id": "d", "text": "La activación se vuelve lineal." }
    ],
    "correctIds": ["b"],
    "explanation": "h_t = (1-a)h_{t-1} + a·σ(...). Con a ≪ 1, el estado previo domina: la constante de tiempo τ = 1/a. Si a=0.1, la memoria efectiva es ~10 pasos.",
    "domain": "Cap. 8: Reservorio"
  },
  {
    "id": "unah-tesis-8-03",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué condición garantiza la Propiedad de Estado de Eco (ESP)?",
    "options": [
      { "id": "a", "text": "Que W_out sea de rango completo." },
      { "id": "b", "text": "Que ρ(W_res) < 1 (radio espectral menor que 1)." },
      { "id": "c", "text": "Que la función de activación sea ReLU." },
      { "id": "d", "text": "Que el número de neuronas sea mayor que la longitud de la serie." }
    ],
    "correctIds": ["b"],
    "explanation": "Si ρ(W_res) < 1, la diferencia entre dos trayectorias con condiciones iniciales distintas decae exponencialmente: ‖h_t - h′_t‖ → 0. La prueba usa Lipschitz continuidad de tanh y la fórmula de Gelfand.",
    "domain": "Cap. 8: Reservorio"
  },
  {
    "id": "unah-tesis-8-04",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "El Teorema de Inclusión TCROC-Markov ⊂ SSRC requiere qué condiciones de degeneración:",
    "options": [
      { "id": "a", "text": "W_res = I, σ = tanh, a = 0.5, D > K" },
      { "id": "b", "text": "W_res = 0, σ = identidad, a = 1, D = K" },
      { "id": "c", "text": "W_res aleatorio, σ = ReLU, a = 0, D ≫ K" },
      { "id": "d", "text": "W_res diagonal, σ = sigmoide, a = 0.9, D = 2K" }
    ],
    "correctIds": ["b"],
    "explanation": "TCROC-Markov es caso degenerado del SSRC: sin recurrencia (W_res=0), sin no linealidad (σ=id), sin fuga (a=1), dimensión = nº estados (D=K). Esto establece TCROC ⊂ TCROC-Markov ⊂ SSRC.",
    "domain": "Cap. 8: Reservorio"
  },
  {
    "id": "unah-tesis-8-05",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "El Teorema de Aproximación Universal (Grigoryeva & Ortega, 2018) establece que el SSRC puede:",
    "options": [
      { "id": "a", "text": "Clasificar cualquier conjunto de datos con 100% de exactitud." },
      { "id": "b", "text": "Aproximar cualquier funcional causal continuo sobre secuencias con memoria finita." },
      { "id": "c", "text": "Converger en O(1) operaciones." },
      { "id": "d", "text": "Reemplazar cualquier red neuronal profunda." }
    ],
    "correctIds": ["b"],
    "explanation": "El SSRC es un aproximador universal de funcionales causales sobre secuencias: cualquier relación entrada-salida causal y continua. Estrictamente más poderoso que TCROC-Markov (lineal).",
    "domain": "Cap. 8: Reservorio"
  },
  {
    "id": "unah-tesis-8-06",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En la cota de estabilidad del pronóstico SSRC, ¿qué factor amplifica la sensibilidad al ruido?",
    "options": [
      { "id": "a", "text": "La norma de W_in." },
      { "id": "b", "text": "El denominador (1 - ρ_res): cuanto más cercano ρ a 1, mayor amplificación." },
      { "id": "c", "text": "El número de neuronas del reservorio." },
      { "id": "d", "text": "La tasa de fuga a." }
    ],
    "correctIds": ["b"],
    "explanation": "‖δŷ_{t+1}‖ ≤ ‖W_out‖ · ‖W_in‖·ε / (1-ρ_res). Con ρ→1, la sensibilidad diverge. Se calibra ρ entre 0.8-0.99 para balancear memoria y estabilidad.",
    "domain": "Cap. 8: Reservorio"
  },

  // ════════════ INTEGRADORAS ════════════
  {
    "id": "unah-tesis-int-01",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el orden correcto del pipeline TCROC-Markov completo?",
    "options": [
      { "id": "a", "text": "Markov → TCROC → NNLS → K-Means → Predicción" },
      { "id": "b", "text": "TCROC (calcular α_t) → K-Means (discretizar S_t) → NNLS (estimar P̂) → Predicción" },
      { "id": "c", "text": "K-Means → OLS → TCROC → Predicción" },
      { "id": "d", "text": "NNLS → TCROC → Predicción → Validación" }
    ],
    "correctIds": ["b"],
    "explanation": "Pipeline lógico: (1) TCROC transforma la serie en tasas α_t, (2) K-Means discretiza en estados S_t, (3) NNLS estima la matriz P̂, (4) P̂ permite predecir distribuciones futuras.",
    "domain": "Integradora"
  },
  {
    "id": "unah-tesis-int-02",
    "courseId": "unah-tesis",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la jerarquía formal de modelos establecida en la tesis?",
    "options": [
      { "id": "a", "text": "SSRC ⊂ TCROC-Markov ⊂ TCROC" },
      { "id": "b", "text": "TCROC ⊂ TCROC-Markov ⊂ TCROC-SSRC" },
      { "id": "c", "text": "OLS ⊂ GLS ⊂ MLE" },
      { "id": "d", "text": "ARIMA ⊂ MS-AR ⊂ ESN" }
    ],
    "correctIds": ["b"],
    "explanation": "Tres niveles: TCROC (operador lineal básico), TCROC-Markov (cadenas estocásticas), TCROC-SSRC (extensión no lineal universal). Cada nivel es estrictamente más expresivo.",
    "domain": "Integradora"
  }
]);

console.log("Loaded questions_unah_tesis.js. Total questions:", window.questionsData.length);
