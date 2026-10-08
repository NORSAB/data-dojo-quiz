/**
 * UNAH Tesis: version en ingles de las 28 preguntas.
 * Claude (Opus 5.5) | 2026-10-08 | Generado con /home/claude/tr/build_q.js a partir de traducciones revisadas.
 * Cada pregunta lleva twinOf con el id original, para que el selector EN/ES encuentre su pareja.
 */
(function(){
  var twins = [
  {
    "id": "unah-tesis-4-01-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following statements about the TCROC operator is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "It requires numerical iteration to find the global minimum."
      },
      {
        "id": "b",
        "text": "The solution β̂ is a closed-form quotient of weighted dot products."
      },
      {
        "id": "c",
        "text": "It only allows uniform weights (λ = 1)."
      },
      {
        "id": "d",
        "text": "It needs Gaussian distributions as an assumption."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The Existence and Uniqueness Theorem proves that the minimizer has a closed form: β̂ = Σλ^(t-k)v(k)v(k-1) / Σλ^(t-k)v(k-1)². It does not require iteration, allows any λ∈(0,1], and does not need distributional assumptions.",
    "domain": "Ch. 4: TCROC",
    "twinOf": "unah-tesis-4-01"
  },
  {
    "id": "unah-tesis-4-02-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "The ETCROCM variant of the TCROC operator is characterized by:",
    "options": [
      {
        "id": "a",
        "text": "λ = 1 and W = T"
      },
      {
        "id": "b",
        "text": "λ < 1 and W = T"
      },
      {
        "id": "c",
        "text": "λ = 1 and W < T"
      },
      {
        "id": "d",
        "text": "λ < 1 and W < T"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "ETCROCM combines both mechanisms: exponential decay (λ < 1) and a moving window (W < T). It is the most general form of the TCROC family.",
    "domain": "Ch. 4: TCROC",
    "twinOf": "unah-tesis-4-02"
  },
  {
    "id": "unah-tesis-4-03-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What relationship does TCROC establish with classical estimators?",
    "options": [
      {
        "id": "a",
        "text": "TCROC is equivalent to GLS, ETCROC is equivalent to OLS."
      },
      {
        "id": "b",
        "text": "TCROC (λ=1) is equivalent to OLS, ETCROC (λ<1) is equivalent to GLS."
      },
      {
        "id": "c",
        "text": "TCROC is equivalent to MLE, ETCROC is equivalent to BLUE."
      },
      {
        "id": "d",
        "text": "There is no relationship with classical estimators."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "With λ=1 (uniform weights), TCROC coincides with OLS. With λ<1 (exponential weights), ETCROC coincides with GLS. The generalized Gauss-Markov Theorem (Aitken, 1936) guarantees that both are BLUE.",
    "domain": "Ch. 4: TCROC",
    "twinOf": "unah-tesis-4-03"
  },
  {
    "id": "unah-tesis-4-04-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the following is NOT an axiom satisfied by the TCROC family?",
    "options": [
      {
        "id": "a",
        "text": "Bounded locality"
      },
      {
        "id": "b",
        "text": "Geometric proportionality"
      },
      {
        "id": "c",
        "text": "Normality of residuals"
      },
      {
        "id": "d",
        "text": "Lipschitz stability"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "The 4 axioms are: Bounded locality, Geometric proportionality, Global convexity, and Lipschitz stability. Normality of residuals is an assumption of classical methods (ARIMA, MLE), but NOT of TCROC.",
    "domain": "Ch. 4: TCROC",
    "twinOf": "unah-tesis-4-04"
  },
  {
    "id": "unah-tesis-4-05-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "The asymptotic consistency of TCROC establishes that when W → ∞:",
    "options": [
      {
        "id": "a",
        "text": "β̂ converges to zero."
      },
      {
        "id": "b",
        "text": "β̂ converges in distribution to a Normal."
      },
      {
        "id": "c",
        "text": "β̂ converges in probability to the true β*."
      },
      {
        "id": "d",
        "text": "β̂ diverges if the series is non-stationary."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "The Consistency Theorem proves that β̂ →ᵖ β* under a stationary AR(1) (|β*| < 1). The proof uses the Law of Large Numbers for stationary weighted sequences and Slutsky's Lemma.",
    "domain": "Ch. 4: TCROC",
    "twinOf": "unah-tesis-4-05"
  },
  {
    "id": "unah-tesis-4-06-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the computational complexity of ETCROC with a recursive implementation?",
    "options": [
      {
        "id": "a",
        "text": "O(T²)"
      },
      {
        "id": "b",
        "text": "O(T·W)"
      },
      {
        "id": "c",
        "text": "O(T) — with O(1) per observation"
      },
      {
        "id": "d",
        "text": "O(T·log T)"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "ETCROC allows incremental computation: S₁(t) = λS₁(t-1) + v(t)v(t-1) and S₂(t) = λS₂(t-1) + v(t-1)². Each new observation requires O(1) operations, giving O(T) in total.",
    "domain": "Ch. 4: TCROC",
    "twinOf": "unah-tesis-4-06"
  },
  {
    "id": "unah-tesis-5-01-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What role does the quantization function π play in the TCROC-Markov model?",
    "options": [
      {
        "id": "a",
        "text": "It computes the relative rate of change."
      },
      {
        "id": "b",
        "text": "It maps continuous values α_t to discrete states S_t."
      },
      {
        "id": "c",
        "text": "It estimates the transition matrix."
      },
      {
        "id": "d",
        "text": "It normalizes the time series."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The function π(α_t) → S_t is the bridge between the continuous world of the TCROC operator and the discrete world of Markov chains. In practice, it is implemented using K-Means.",
    "domain": "Ch. 5: Markov",
    "twinOf": "unah-tesis-5-01"
  },
  {
    "id": "unah-tesis-5-02-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "The first-order Markov property implies that:",
    "options": [
      {
        "id": "a",
        "text": "Each state depends on the last W states."
      },
      {
        "id": "b",
        "text": "The future depends only on the current state, not on the complete history."
      },
      {
        "id": "c",
        "text": "The chain is reversible."
      },
      {
        "id": "d",
        "text": "The transition probabilities change over time."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "P(S_{t+1}=sⱼ | S_t=sᵢ, S_{t-1},...) = P(S_{t+1}=sⱼ | S_t=sᵢ). The past is conditionally irrelevant given the present.",
    "domain": "Ch. 5: Markov",
    "twinOf": "unah-tesis-5-02"
  },
  {
    "id": "unah-tesis-5-03-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which property guarantees that the Markov chain \"forgets\" its past at a geometric rate?",
    "options": [
      {
        "id": "a",
        "text": "Stationarity"
      },
      {
        "id": "b",
        "text": "Ergodicity"
      },
      {
        "id": "c",
        "text": "ϕ-Mixing"
      },
      {
        "id": "d",
        "text": "Reversibility"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "The ϕ-mixing property with ϕ(n) ≤ C_ϕ·ρⁿ guarantees exponential forgetting. It is stronger than simple ergodicity and allows deriving asymptotic normality for the estimators.",
    "domain": "Ch. 5: Markov",
    "twinOf": "unah-tesis-5-03"
  },
  {
    "id": "unah-tesis-5-04-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In the error decomposition MSE = σ²ε + C/W_eff + o(W_eff⁻¹), what does σ²ε represent?",
    "options": [
      {
        "id": "a",
        "text": "The estimation error of the parameters."
      },
      {
        "id": "b",
        "text": "The irreducible variance of the noise, which cannot be eliminated."
      },
      {
        "id": "c",
        "text": "The K-Means discretization error."
      },
      {
        "id": "d",
        "text": "The variance of the stationary distribution."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "σ²ε is the irreducible variance of the intrinsic noise of the series. No model can reduce it — it is the theoretical limit of prediction.",
    "domain": "Ch. 5: Markov",
    "twinOf": "unah-tesis-5-04"
  },
  {
    "id": "unah-tesis-5-05-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why is K-Means preferred over fixed thresholds (±5%) for discretization?",
    "options": [
      {
        "id": "a",
        "text": "K-Means is computationally faster."
      },
      {
        "id": "b",
        "text": "Fixed thresholds are exogenous; K-Means adapts the cut points to the empirical distribution of each series."
      },
      {
        "id": "c",
        "text": "K-Means always produces more states."
      },
      {
        "id": "d",
        "text": "Fixed thresholds are not compatible with Markov chains."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The ±5% thresholds apply the same scheme to all series, ignoring their specific distributions. K-Means adapts the centroids to the observed empirical distribution. Superiority confirmed with the Diebold-Mariano test.",
    "domain": "Ch. 5: Markov",
    "twinOf": "unah-tesis-5-05"
  },
  {
    "id": "unah-tesis-6-01-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main advantage of NNLS over OLS for estimating transition matrices?",
    "options": [
      {
        "id": "a",
        "text": "NNLS converges faster."
      },
      {
        "id": "b",
        "text": "NNLS guarantees a valid stochastic matrix (entries ≥ 0, columns that sum to 1)."
      },
      {
        "id": "c",
        "text": "NNLS produces smaller errors on all metrics."
      },
      {
        "id": "d",
        "text": "NNLS does not require training data."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unconstrained OLS can produce negative transition probabilities. NNLS imposes P_ij ≥ 0 and Σ P_ij = 1 by construction, guaranteeing a valid stochastic matrix.",
    "domain": "Ch. 6: NNLS",
    "twinOf": "unah-tesis-6-01"
  },
  {
    "id": "unah-tesis-6-02-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which algebraic identity allows vectorizing the NNLS estimation problem?",
    "options": [
      {
        "id": "a",
        "text": "The Woodbury identity."
      },
      {
        "id": "b",
        "text": "The Hadamard product."
      },
      {
        "id": "c",
        "text": "The Kronecker identity: vec(ABC) = (Cᵀ ⊗ A)vec(B)."
      },
      {
        "id": "d",
        "text": "The Cholesky decomposition."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "The Kronecker identity transforms the matrix problem min‖X₁ - PX₀‖²_F into a vector problem min‖vec(X₁) - (X₀ᵀ ⊗ I)vec(P)‖², allowing the standard NNLS solver to be applied.",
    "domain": "Ch. 6: NNLS",
    "twinOf": "unah-tesis-6-02"
  },
  {
    "id": "unah-tesis-6-03-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In the SRep Algorithm, what is the function of the weight w in the augmented system?",
    "options": [
      {
        "id": "a",
        "text": "It regularizes against overfitting."
      },
      {
        "id": "b",
        "text": "It acts as a soft Lagrange multiplier to enforce the unit-sum constraint."
      },
      {
        "id": "c",
        "text": "It normalizes the Frobenius norm."
      },
      {
        "id": "d",
        "text": "It controls the convergence rate."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "A very large w (typically 10⁶) makes violating Σ P_ij = 1 extremely costly, enforcing stochasticity without explicit equality constraints.",
    "domain": "Ch. 6: NNLS",
    "twinOf": "unah-tesis-6-03"
  },
  {
    "id": "unah-tesis-6-04-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What encoding is used to represent the discrete states in the SRep Algorithm?",
    "options": [
      {
        "id": "a",
        "text": "Ordinal encoding (1, 2, 3, 4)"
      },
      {
        "id": "b",
        "text": "Binary encoding (00, 01, 10, 11)"
      },
      {
        "id": "c",
        "text": "One-hot encoding: s₁ → [1,0,0,0]ᵀ"
      },
      {
        "id": "d",
        "text": "Gray encoding"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "One-hot encoding allows representing the probability distribution over states as a column vector. It is necessary for the matrix formulation of the problem.",
    "domain": "Ch. 6: NNLS",
    "twinOf": "unah-tesis-6-04"
  },
  {
    "id": "unah-tesis-7-01-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What happens when the window W equals the total length T of the series?",
    "options": [
      {
        "id": "a",
        "text": "The model reaches its maximum accuracy."
      },
      {
        "id": "b",
        "text": "Degeneration occurs: α_t is constant, K_eff = 1, and the matrix P̂ degenerates to the identity."
      },
      {
        "id": "c",
        "text": "K-Means cannot be run."
      },
      {
        "id": "d",
        "text": "The Markov chain becomes non-ergodic."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "When W=T, α_t is identical for all t, its variance is 0, K-Means assigns everything to a single cluster, and P̂ = I. This is the phenomenon of degeneration due to over-smoothing. It is resolved by restricting W ≤ 52 weeks.",
    "domain": "Ch. 7: Fuels",
    "twinOf": "unah-tesis-7-01"
  },
  {
    "id": "unah-tesis-7-02-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the justification for restricting W ≤ 52 weeks?",
    "options": [
      {
        "id": "a",
        "text": "It is the maximum number that the algorithm supports."
      },
      {
        "id": "b",
        "text": "It corresponds to an annual cycle, beyond which market memory loses relevance."
      },
      {
        "id": "c",
        "text": "It is the IMF's international standard."
      },
      {
        "id": "d",
        "text": "It minimizes the K-Means error."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The W ≤ 52 restriction has an economic justification: fuel prices follow annual cycles determined by regulatory policies, climatic seasons, and demand patterns.",
    "domain": "Ch. 7: Fuels",
    "twinOf": "unah-tesis-7-02"
  },
  {
    "id": "unah-tesis-7-03-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which of the 4 fuels has the best predictive accuracy, and why?",
    "options": [
      {
        "id": "a",
        "text": "Diesel, because it is the most traded."
      },
      {
        "id": "b",
        "text": "Regular, with 85.1% — it has only K=3 states and high persistence due to strong regulation."
      },
      {
        "id": "c",
        "text": "Super, because it has more observations."
      },
      {
        "id": "d",
        "text": "Kerosene, because of its low volatility."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Regular gasoline has K=3 (simple structure), high persistence P(sᵢ|sᵢ) ≈ 0.96, and is the most heavily regulated by the SEN. Its predictability reflects a market with few abrupt changes.",
    "domain": "Ch. 7: Fuels",
    "twinOf": "unah-tesis-7-03"
  },
  {
    "id": "unah-tesis-7-04-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "The spectral gap γ of Kerosene (0.021) implies that:",
    "options": [
      {
        "id": "a",
        "text": "The market is highly volatile."
      },
      {
        "id": "b",
        "text": "Kerosene has the highest inertia: it needs ~47 weeks for a perturbation to dissipate."
      },
      {
        "id": "c",
        "text": "K-Means produced more clusters than necessary."
      },
      {
        "id": "d",
        "text": "The chain is not ergodic."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "γ = 0.021 is the smallest among the 4 fuels. The mixing time t_mix ≈ ⌈ln(1/ε)/γ⌉ ≈ 47 weeks. This explains mathematically why Kerosene is the hardest to forecast.",
    "domain": "Ch. 7: Fuels",
    "twinOf": "unah-tesis-7-04"
  },
  {
    "id": "unah-tesis-7-05-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why did MS-AR fail as a competitive alternative?",
    "options": [
      {
        "id": "a",
        "text": "It has no implementation in Python."
      },
      {
        "id": "b",
        "text": "It failed due to numerical instability in 3 of 4 series, showing the fragility of iterative likelihood optimization."
      },
      {
        "id": "c",
        "text": "It requires longer series (>10,000 observations)."
      },
      {
        "id": "d",
        "text": "It does not support more than 2 states."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "MS-AR (Hamilton, 1989) uses numerical likelihood optimization, which is sensitive to initial conditions and may not converge. In 3 of 4 series, the solver produced numerical errors.",
    "domain": "Ch. 7: Fuels",
    "twinOf": "unah-tesis-7-05"
  },
  {
    "id": "unah-tesis-8-01-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the distinctive characteristic of reservoir computing?",
    "options": [
      {
        "id": "a",
        "text": "All matrices are trained with backpropagation."
      },
      {
        "id": "b",
        "text": "Only the readout layer W_out is trained; W_in and W_res are generated randomly."
      },
      {
        "id": "c",
        "text": "It uses convolutional networks instead of recurrent ones."
      },
      {
        "id": "d",
        "text": "It requires labeled data for supervision."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "In an Echo State Network, the internal matrices (W_in, W_res) are fixed randomly and are NOT trained. Only the output layer W_out is estimated. This avoids backpropagation through time (BPTT).",
    "domain": "Ch. 8: Reservoir",
    "twinOf": "unah-tesis-8-01"
  },
  {
    "id": "unah-tesis-8-02-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "The Leaky-ESN variant introduces the parameter \"a\" (leak rate). What effect does a ≪ 1 have?",
    "options": [
      {
        "id": "a",
        "text": "The reservoir responds quickly to recent changes."
      },
      {
        "id": "b",
        "text": "The reservoir emphasizes long-term trends, with an effective memory of ~1/a."
      },
      {
        "id": "c",
        "text": "The reservoir becomes unstable."
      },
      {
        "id": "d",
        "text": "The activation becomes linear."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "h_t = (1-a)h_{t-1} + a·σ(...). With a ≪ 1, the previous state dominates: the time constant τ = 1/a. If a=0.1, the effective memory is ~10 steps.",
    "domain": "Ch. 8: Reservoir",
    "twinOf": "unah-tesis-8-02"
  },
  {
    "id": "unah-tesis-8-03-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What condition guarantees the Echo State Property (ESP)?",
    "options": [
      {
        "id": "a",
        "text": "That W_out has full rank."
      },
      {
        "id": "b",
        "text": "That ρ(W_res) < 1 (spectral radius less than 1)."
      },
      {
        "id": "c",
        "text": "That the activation function is ReLU."
      },
      {
        "id": "d",
        "text": "That the number of neurons is greater than the length of the series."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "If ρ(W_res) < 1, the difference between two trajectories with different initial conditions decays exponentially: ‖h_t - h′_t‖ → 0. The proof uses the Lipschitz continuity of tanh and Gelfand's formula.",
    "domain": "Ch. 8: Reservoir",
    "twinOf": "unah-tesis-8-03"
  },
  {
    "id": "unah-tesis-8-04-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "The Inclusion Theorem TCROC-Markov ⊂ SSRC requires which degeneration conditions:",
    "options": [
      {
        "id": "a",
        "text": "W_res = I, σ = tanh, a = 0.5, D > K"
      },
      {
        "id": "b",
        "text": "W_res = 0, σ = identity, a = 1, D = K"
      },
      {
        "id": "c",
        "text": "W_res random, σ = ReLU, a = 0, D ≫ K"
      },
      {
        "id": "d",
        "text": "W_res diagonal, σ = sigmoid, a = 0.9, D = 2K"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "TCROC-Markov is a degenerate case of the SSRC: no recurrence (W_res=0), no nonlinearity (σ=id), no leak (a=1), dimension = number of states (D=K). This establishes TCROC ⊂ TCROC-Markov ⊂ SSRC.",
    "domain": "Ch. 8: Reservoir",
    "twinOf": "unah-tesis-8-04"
  },
  {
    "id": "unah-tesis-8-05-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "The Universal Approximation Theorem (Grigoryeva & Ortega, 2018) establishes that the SSRC can:",
    "options": [
      {
        "id": "a",
        "text": "Classify any dataset with 100% accuracy."
      },
      {
        "id": "b",
        "text": "Approximate any continuous causal functional over sequences with finite memory."
      },
      {
        "id": "c",
        "text": "Converge in O(1) operations."
      },
      {
        "id": "d",
        "text": "Replace any deep neural network."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The SSRC is a universal approximator of causal functionals over sequences: any causal and continuous input-output relationship. It is strictly more powerful than TCROC-Markov (linear).",
    "domain": "Ch. 8: Reservoir",
    "twinOf": "unah-tesis-8-05"
  },
  {
    "id": "unah-tesis-8-06-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In the stability bound of the SSRC forecast, which factor amplifies sensitivity to noise?",
    "options": [
      {
        "id": "a",
        "text": "The norm of W_in."
      },
      {
        "id": "b",
        "text": "The denominator (1 - ρ_res): the closer ρ is to 1, the greater the amplification."
      },
      {
        "id": "c",
        "text": "The number of neurons in the reservoir."
      },
      {
        "id": "d",
        "text": "The leak rate a."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "‖δŷ_{t+1}‖ ≤ ‖W_out‖ · ‖W_in‖·ε / (1-ρ_res). As ρ→1, the sensitivity diverges. ρ is calibrated between 0.8-0.99 to balance memory and stability.",
    "domain": "Ch. 8: Reservoir",
    "twinOf": "unah-tesis-8-06"
  },
  {
    "id": "unah-tesis-int-01-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the correct order of the complete TCROC-Markov pipeline?",
    "options": [
      {
        "id": "a",
        "text": "Markov → TCROC → NNLS → K-Means → Prediction"
      },
      {
        "id": "b",
        "text": "TCROC (compute α_t) → K-Means (discretize S_t) → NNLS (estimate P̂) → Prediction"
      },
      {
        "id": "c",
        "text": "K-Means → OLS → TCROC → Prediction"
      },
      {
        "id": "d",
        "text": "NNLS → TCROC → Prediction → Validation"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Logical pipeline: (1) TCROC transforms the series into rates α_t, (2) K-Means discretizes into states S_t, (3) NNLS estimates the matrix P̂, (4) P̂ allows predicting future distributions.",
    "domain": "Integrative",
    "twinOf": "unah-tesis-int-01"
  },
  {
    "id": "unah-tesis-int-02-en",
    "courseId": "unah-tesis",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the formal hierarchy of models established in the thesis?",
    "options": [
      {
        "id": "a",
        "text": "SSRC ⊂ TCROC-Markov ⊂ TCROC"
      },
      {
        "id": "b",
        "text": "TCROC ⊂ TCROC-Markov ⊂ TCROC-SSRC"
      },
      {
        "id": "c",
        "text": "OLS ⊂ GLS ⊂ MLE"
      },
      {
        "id": "d",
        "text": "ARIMA ⊂ MS-AR ⊂ ESN"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Three levels: TCROC (basic linear operator), TCROC-Markov (stochastic chains), TCROC-SSRC (universal nonlinear extension). Each level is strictly more expressive.",
    "domain": "Integrative",
    "twinOf": "unah-tesis-int-02"
  }
];
  window.questionsData = (window.questionsData || []).concat(twins);
})();
