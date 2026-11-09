/**
 * UNAH — Tesis: Modelo Hibrido TCROC-Markov-SSRC
 * Flashcard Data Bank — 28 flashcards across chapters 4-8 + integrative
 * Used by the Dojo Data Study Mode
 */
window.unahTesisFlashcards = [
  // ══════════════════════════════════════════════════
  // CAPITULO 4 — TCROC y sus Variantes
  // ══════════════════════════════════════════════════
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Cual es la ecuacion general del operador TCROC?",
    respuesta: "<strong>Ecuacion madre:</strong><br><code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>&alpha;<sub>t,&lambda;,W</sub> = &minus;1 + argmin<sub>&beta;</sub> &sum;<sub>k=t&minus;W+1</sub><sup>t</sup> &lambda;<sup>t&minus;k</sup> (v(k) &minus; &beta; v(k&minus;1))&sup2;</code><br>Minimiza la suma ponderada de errores cuadraticos dentro de una ventana W con pesos exponenciales &lambda;. Todas las variantes se derivan de ella."
  },
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Cuales son las 4 variantes de la familia TCROC?",
    respuesta: "<ol style='padding-left:20px;'><li><strong>TCROC</strong> (&lambda;=1, W=T): linea base teorica (degenerada)</li><li><strong>TCROCM</strong> (&lambda;=1, W&lt;T): ventana movil, pesos uniformes</li><li><strong>ETCROC</strong> (&lambda;&lt;1, W=T): decaimiento exponencial global</li><li><strong>ETCROCM</strong> (&lambda;&lt;1, W&lt;T): forma mas general (usa ambos)</li></ol><br><strong>Nota:</strong> Cada variante es un caso particular de la ecuacion madre."
  },
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Que forma tiene la solucion cerrada &beta;&#x0302; del TCROC?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>&beta;&#x0302; = &sum; &lambda;<sup>t&minus;k</sup> v(k)v(k&minus;1) / &sum; &lambda;<sup>t&minus;k</sup> v(k&minus;1)&sup2;</code><br>Es un <strong>cociente de dos productos punto ponderados</strong>. No requiere iteracion numerica.<br><br><strong>Prueba:</strong> Se basa en la convexidad estricta de la funcional cuadratica."
  },
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Que establece el Teorema de Consistencia Asintotica del TCROC?",
    respuesta: "Bajo AR(1) estacionario, cuando W &rarr; &infin;:<br><code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>&beta;&#x0302; &xrarr;<sup>p</sup> &beta;*</code><br>El estimador converge al verdadero valor del parametro.<br><br><strong>Herramientas de la prueba:</strong> Ley de Grandes Numeros para sucesiones ponderadas estacionarias y Lema de Slutsky."
  },
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Cuales son los 4 axiomas que satisface TCROC?",
    respuesta: "<strong>1. Localidad acotada:</strong> &alpha;<sub>t</sub> depende de maximo W observaciones<br><strong>2. Proporcionalidad geometrica:</strong> Invariante ante reescalamiento<br><strong>3. Convexidad global:</strong> La funcional tiene minimo unico<br><strong>4. Estabilidad de Lipschitz:</strong> Robustez ante perturbaciones<br><br><strong>Nota:</strong> NO requiere normalidad de residuos."
  },
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Cual es la complejidad computacional de TCROC vs alternativas?",
    respuesta: "&bull; <strong>TCROC/ETCROC:</strong> O(T) — solucion cerrada<br>&bull; <strong>TCROCM/ETCROCM:</strong> O(T&middot;W)<br>&bull; <strong>MLE (Hamilton):</strong> O(T&sup2;)&ndash;O(T&sup3;) — iterativo<br>&bull; <strong>ARIMA:</strong> O(T&sup2;) — iterativo<br><br>TCROC es <strong>significativamente mas rapido</strong>."
  },
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Que relacion tiene TCROC con OLS y GLS?",
    respuesta: "&bull; <strong>TCROC (&lambda;=1) &equiv; OLS</strong> (Minimos Cuadrados Ordinarios)<br>&bull; <strong>ETCROC (&lambda;&lt;1) &equiv; GLS</strong> (Minimos Cuadrados Generalizados)<br><br>El Teorema de Gauss-Markov generalizado (Aitken, 1936) garantiza que es <strong>BLUE</strong> (Best Linear Unbiased Estimator)."
  },
  {
    tema: "Cap. 4: TCROC",
    pregunta: "¿Que dice la propiedad de estabilidad de Lipschitz del TCROC?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>|&alpha;'<sub>t</sub> &minus; &alpha;<sub>t</sub>| &le; C<sub>t</sub> &middot; &epsilon;</code><br>Perturbaciones acotadas (&epsilon;) en la serie producen desviaciones <strong>controladas</strong> en &alpha;.<br><br>Garantiza <strong>robustez ante ruido de medicion</strong>. La prueba usa la formula del cociente y la desigualdad de Cauchy-Schwarz."
  },

  // ══════════════════════════════════════════════════
  // CAPITULO 5 — Integracion con Cadenas de Markov
  // ══════════════════════════════════════════════════
  {
    tema: "Cap. 5: Markov",
    pregunta: "¿Que es la funcion de cuantizacion &pi;?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>S<sub>t</sub> = &pi;(&alpha;<sub>t,&lambda;,W</sub>)</code><br>Mapea la tasa continua &alpha;<sub>t</sub> a un estado discreto S<sub>t</sub>. Es el <strong>puente</strong> entre TCROC (continuo) y Markov (discreto).<br><br>En la practica usamos <strong>K-Means</strong> en vez de umbrales fijos porque se adapta a cada serie."
  },
  {
    tema: "Cap. 5: Markov",
    pregunta: "¿Que propiedad fundamental satisface la secuencia {S<sub>t</sub>}?",
    respuesta: "La <strong>propiedad de Markov de primer orden:</strong><br><code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>P(S<sub>t+1</sub>=s<sub>j</sub> | S<sub>t</sub>=s<sub>i</sub>, S<sub>t&minus;1</sub>,...) = P(S<sub>t+1</sub>=s<sub>j</sub> | S<sub>t</sub>=s<sub>i</sub>)</code><br>El futuro depende <strong>solo del presente</strong>, no del historial completo."
  },
  {
    tema: "Cap. 5: Markov",
    pregunta: "¿Que es la propiedad &phi;-mixing y por que importa?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>&phi;(n) &le; C<sub>&phi;</sub> &middot; &rho;<sup>n</sup></code><br>El coeficiente de mezcla decae <strong>exponencialmente</strong>. La cadena \"olvida\" su pasado a tasa geometrica.<br><br>Es crucial para la validez de los <strong>estimadores asintoticos</strong> y los intervalos de confianza."
  },
  {
    tema: "Cap. 5: Markov",
    pregunta: "¿Como se descompone el error de prediccion en TCROC-Markov?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>ECM(v&#x0302;<sub>T+1</sub>) = &sigma;&sup2;<sub>&epsilon;</sub> + C(&lambda;,W) / W<sub>eff</sub> + o(W<sub>eff</sub><sup>&minus;1</sup>)</code><br>&bull; <strong>&sigma;&sup2;&epsilon;:</strong> Varianza irreducible (ruido inherente)<br>&bull; <strong>Segundo termino:</strong> Error de estimacion (decrece con W<sub>eff</sub>)<br>&bull; <strong>W<sub>eff</sub> = (1&minus;&lambda;<sup>W</sup>)/(1&minus;&lambda;):</strong> Tamanio efectivo de muestra"
  },
  {
    tema: "Cap. 5: Markov",
    pregunta: "¿Por que K-Means en vez de umbrales fijos (&plusmn;5%)?",
    respuesta: "Los umbrales fijos son <strong>exogenos</strong> y aplican el mismo esquema a series distintas.<br><br>K-Means <strong>adapta</strong> los puntos de corte a la distribucion empirica de cada serie, capturando mejor la estructura latente.<br><br>Test de <strong>Diebold-Mariano</strong> confirma superioridad estadistica."
  },

  // ══════════════════════════════════════════════════
  // CAPITULO 6 — Modelo Hibrido NNLS
  // ══════════════════════════════════════════════════
  {
    tema: "Cap. 6: NNLS",
    pregunta: "¿Cual es el problema de optimizacion NNLS para estimar P&#x0302;?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>P&#x0302; = argmin<sub>P&ge;0</sub> &Vert;X₁ &minus; PX₀&Vert;<sub>F</sub>&sup2;, &nbsp; <b>1</b><sup>T</sup>P = <b>1</b><sup>T</sup></code><br>Minimiza la norma de Frobenius con restricciones de no negatividad y suma unitaria por columna. Garantiza una <strong>matriz estocastica valida</strong> por construccion."
  },
  {
    tema: "Cap. 6: NNLS",
    pregunta: "¿Que ventaja tiene NNLS sobre OLS para matrices de transicion?",
    respuesta: "<strong>OLS sin restricciones puede producir probabilidades negativas</strong> (inadmisibles fisicamente).<br><br><strong>NNLS garantiza por construccion:</strong> P<sub>ij</sub> &ge; 0 y &sum;P<sub>ij</sub> = 1, sin necesidad de post-procesamiento ad-hoc."
  },
  {
    tema: "Cap. 6: NNLS",
    pregunta: "¿Que truco algebraico vectoriza el problema NNLS?",
    respuesta: "La identidad de Kronecker:<br><code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>vec(ABC) = (C<sup>T</sup> &otimes; A) vec(B)</code><br>Transforma el problema matricial en uno vectorial:<br>vec(X₁) = (X₀ᵀ &otimes; I) vec(P&#x0302;)<br><br>Permite aplicar el solver NNLS estandar de <strong>Lawson & Hanson</strong>."
  },
  {
    tema: "Cap. 6: NNLS",
    pregunta: "¿Cuales son los 6 pasos del Algoritmo SRep?",
    respuesta: "<ol style='padding-left:20px;'><li>Codificar estados en <strong>one-hot</strong></li><li>Construir matrices X₀ y X₁</li><li>Formar A = X₀ᵀ &otimes; I<sub>n</sub> (Kronecker)</li><li>Construir sistema aumentado con restriccion w&middot;C</li><li>Resolver NNLS: min&Vert;A&#x0303;c &minus; b&#x0303;&Vert;&sup2; con c &ge; 0</li><li>Reconstruir P&#x0302; = vec⁻¹(c&#x0302;) y normalizar columnas</li></ol>"
  },
  {
    tema: "Cap. 6: NNLS",
    pregunta: "¿Que revela la matriz P&#x0302; del PIB de Honduras?",
    respuesta: "El estado s₄ (crecimiento fuerte) ocurrio <strong>una sola vez</strong> (2022, rebote post-COVID) y siempre se modera: P(s₃|s₄) = 100%.<br><br>Es un <strong>estado transitorio</strong>, no dinamica estructural sostenible. Los estados s₂ y s₃ dominan la distribucion estacionaria."
  },

  // ══════════════════════════════════════════════════
  // CAPITULO 7 — Combustibles
  // ══════════════════════════════════════════════════
  {
    tema: "Cap. 7: Combustibles",
    pregunta: "¿Que es el fenomeno de degeneracion del modelo TCROC?",
    respuesta: "Cuando W = T (ventana = longitud total):<br><code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>&alpha;<sub>t</sub>(T) = &alpha;&#x0304; &forall;t &rArr; Var(&alpha;<sub>t</sub>) = 0 &rArr; K<sub>eff</sub> = 1</code><br>Todo colapsa a un solo estado. <strong>Solucion:</strong> Restringir W &le; 52 semanas (un ciclo anual)."
  },
  {
    tema: "Cap. 7: Combustibles",
    pregunta: "¿Cuales son los hiperparametros optimos para combustibles hondurenios?",
    respuesta: "&bull; <strong>Regular:</strong> W=50, &lambda;=0.99, K=3, Exactitud=85.1%<br>&bull; <strong>Super:</strong> W=52, &lambda;=0.99, K=4, 62.8%<br>&bull; <strong>Diesel:</strong> W=50, &lambda;=0.97, K=3, 71.6%<br>&bull; <strong>Kerosene:</strong> W=52, &lambda;=0.98, K=5, 68.2%<br><br>W &asymp; 1 anio, &lambda; &asymp; 1 (pesos casi uniformes)."
  },
  {
    tema: "Cap. 7: Combustibles",
    pregunta: "¿Que es el gap espectral &gamma; y el tiempo de mezcla?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>&gamma; = 1 &minus; |&lambda;₂|, &nbsp; t<sub>mix</sub> = ⌈ ln(1/&epsilon;) / &gamma; ⌉</code><br>&gamma; mide que tan rapido la cadena olvida su estado.<br>&bull; <strong>Kerosene:</strong> &gamma; = 0.021, t<sub>mix</sub> &asymp; 47 semanas (mas inerte)<br>&bull; <strong>Diesel:</strong> &gamma; = 0.040, t<sub>mix</sub> &asymp; 25 semanas (mas agil)"
  },
  {
    tema: "Cap. 7: Combustibles",
    pregunta: "¿Por que la gasolina Regular tiene la mejor exactitud (85.1%)?",
    respuesta: "Tiene solo K=3 estados (estructura simple), alta persistencia (P(s<sub>i</sub>|s<sub>i</sub>) &asymp; 0.96), y es la <strong>mas regulada por la SEN</strong>.<br><br>Su predictibilidad refleja un mercado con pocos cambios abruptos y transiciones suaves."
  },

  // ══════════════════════════════════════════════════
  // CAPITULO 8 — Extension No Lineal (SSRC)
  // ══════════════════════════════════════════════════
  {
    tema: "Cap. 8: Reservorio",
    pregunta: "¿Cual es la ecuacion de estado del reservorio (ESN)?",
    respuesta: "<code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'><b>h</b><sub>t</sub> = &sigma;(<b>W</b><sub>in</sub> <b>u</b><sub>t</sub> + <b>W</b><sub>res</sub> <b>h</b><sub>t&minus;1</sub>)</code><br>W<sub>in</sub> y W<sub>res</sub> se generan aleatoriamente y <strong>NO se entrenan</strong>. Solo W<sub>out</sub> se estima. Esto evita backpropagation through time (BPTT)."
  },
  {
    tema: "Cap. 8: Reservorio",
    pregunta: "¿Que establece la Propiedad de Estado de Eco (ESP)?",
    respuesta: "Si &rho;(W<sub>res</sub>) &lt; 1, la diferencia entre trayectorias converge a cero:<br><code style='display:block;text-align:center;padding:8px;background:rgba(0,0,0,0.04);border-radius:6px;margin:6px 0;font-size:0.95em;'>&Vert;h<sub>t</sub> &minus; h'<sub>t</sub>&Vert; &le; &Vert;W<sub>res</sub>&Vert;<sup>t</sup> &Vert;h₀ &minus; h'₀&Vert; &rarr; 0</code><br>La salida depende <strong>solo de las entradas</strong>, no de la condicion inicial."
  },
  {
    tema: "Cap. 8: Reservorio",
    pregunta: "¿Cual es el Teorema de Inclusion TCROC-Markov &sub; SSRC?",
    respuesta: "TCROC-Markov es un caso <strong>degenerado</strong> del SSRC cuando:<br>&bull; W<sub>res</sub> = 0 (sin recurrencia)<br>&bull; &sigma; = identidad (sin no linealidad)<br>&bull; a = 1 (sin fuga)<br>&bull; D = K (dimension = n&ordm; estados)<br><br><strong>Jerarquia:</strong> TCROC &sub; TCROC-Markov &sub; TCROC-SSRC"
  },
  {
    tema: "Cap. 8: Reservorio",
    pregunta: "¿Por que es importante el Teorema de Aproximacion Universal?",
    respuesta: "Grigoryeva & Ortega (2018) demostraron que el SSRC puede aproximar <strong>cualquier funcional causal continuo sobre secuencias</strong> con memoria finita.<br><br>Es <strong>estrictamente mas poderoso</strong> que TCROC-Markov (lineal) y justifica teoricamente la extension propuesta."
  },

  // ══════════════════════════════════════════════════
  // TRANSVERSALES
  // ══════════════════════════════════════════════════
  {
    tema: "Integradoras",
    pregunta: "¿Cual es la contribucion original principal de la tesis?",
    respuesta: "<ol style='padding-left:20px;'><li>La <strong>familia TCROC</strong> con 4 variantes y pruebas axiomaticas</li><li>El <strong>fenomeno de degeneracion</strong> W&rarr;T y su solucion</li><li>El <strong>Teorema de Inclusion</strong>: TCROC-Markov &sub; SSRC</li><li>Validacion empirica integral con datos reales de Honduras</li><li>El <strong>Algoritmo SRep</strong>: estimacion NNLS de matrices estocasticas</li></ol>"
  },
  {
    tema: "Integradoras",
    pregunta: "¿Cual es el hilo conductor de los 5 capitulos?",
    respuesta: "<strong>Cap 4:</strong> Definir TCROC (operador de transformacion)<br><strong>Cap 5:</strong> Integrar con Markov (modelo probabilistico)<br><strong>Cap 6:</strong> Estimar con NNLS (algoritmo constructivo)<br><strong>Cap 7:</strong> Validar con datos reales (combustibles Honduras)<br><strong>Cap 8:</strong> Extender a SSRC (no lineal, universal)"
  }
];
