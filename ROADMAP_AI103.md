# Roadmap de estudio AI-103 / AI-103 Study Roadmap

Examen / Exam: **16 de octubre de 2026 / October 16, 2026**
Meta / Target: **90% o más en cada subhabilidad y en el simulacro final / 90% or more on every subskill and on the final mock exam**
Fuente / Source: `questions_azure_ai103.js` y `questions_azure_ai103_es.js`: 176 preguntas vigentes en cada idioma / 176 current questions per language (158 del PDF, literales / verbatim, + 18 vigentes / current). Las 339 retiradas siguen en el repositorio, ocultas / The 339 retired items remain in the repo, hidden.

---

## Método / Method (progresivo / progressive)

**ES.** Para cada tema: (1) estudiar la subsección en *Centro de Estudio → Estudiar*; (2) hacer el quiz de esa subhabilidad (botón de la barra de progreso en el inicio); (3) si la nota es menor a 90%, revisar la explicación y las razones de cada opción, y repetir el quiz con preguntas no vistas. Un tema queda cerrado con **90% o más en dos intentos seguidos**. Cuando los 14 temas estén cerrados, se hace un examen mixto y después el simulacro de 50 preguntas con los pesos oficiales. El simulacro final debe dar **90% o más dos veces seguidas**.

**EN.** For each topic: (1) study the subsection in *Study Center → Study*; (2) take that subskill's quiz (the bar on the home screen); (3) below 90%, review the explanation and each option's rationale, then retake with questions you have not seen. A topic is closed with **90% or more on two consecutive attempts**. When all 14 topics are closed, take a mixed-domain quiz, then the 50-question mock exam with the official weights. The final mock must reach **90% or more twice in a row**.

---

## Ruta por dominio / Path by domain

| Dominio / Domain | Peso / Weight | Subhabilidad / Subskill | Preguntas / Questions |
|---|---|---|---|
| 1 Plan and manage | 25–30% | 1.1 Choose the appropriate Foundry services for generative AI and agents | 12 |
| 1 | | 1.2 Set up AI solutions in Foundry | 16 |
| 1 | | 1.3 Manage, monitor, and secure AI systems | 18 |
| 1 | | 1.4 Implement responsible AI across generative AI and agentic systems | 14 |
| 2 Implement generative AI and agentic | 30–35% | 2.1 Build generative applications by using Foundry | 11 |
| 2 | | 2.2 Build agents by using Foundry | 19 |
| 2 | | 2.3 Optimize and operationalize generative AI systems | 14 |
| 3 Implement computer vision | 10–15% | 3.1 Design and implement image- and video-generation solutions | 5 |
| 3 | | 3.2 Design and implement multimodal understanding workflows | 16 |
| 3 | | 3.3 Implement responsible AI for multimodal content | 8 |
| 4 Implement text analysis | 10–15% | 4.1 Apply language model text analysis | 9 |
| 4 | | 4.2 Implement speech solutions | 7 |
| 5 Implement information extraction | 10–15% | 5.1 Build retrieval and grounding pipelines | 15 |
| 5 | | 5.2 Extract content from documents | 12 |

Orden sugerido / Suggested order: 2.2 → 2.1 → 2.3 → 1.2 → 5.1 → 5.2 → 1.3 → 1.1 → 1.4 → 3.2 → 3.3 → 3.1 → 4.1 → 4.2. Empieza por el dominio con más peso y el que más preguntas tiene. / Start with the highest-weight and most-tested areas.

---

## Calendario sugerido / Suggested schedule (7 días / 7 days)

- **Días 1–3 / Days 1–3:** temas 2.2, 2.1, 2.3, 1.2, 5.1 y 5.2 (estudio + quiz + repaso). / Topics 2.2, 2.1, 2.3, 1.2, 5.1 and 5.2.
- **Día 4 / Day 4:** temas 1.3, 1.1, 1.4; examen mixto de dominio 1 y 2. / Topics 1.3, 1.1, 1.4; mixed quiz for domains 1 and 2.
- **Día 5 / Day 5:** temas 3.1, 3.2, 3.3, 4.1, 4.2; examen mixto de dominios 3, 4 y 5. / Topics 3.1–4.2; mixed quiz for domains 3–5.
- **Día 6 / Day 6:** simulacro completo (50 preguntas, 100 min); repasar errores por subhabilidad. / Full mock (50 questions, 100 min); review errors by subskill.
- **Día 7 / Day 7:** simulacro final y repaso ligero; no estudiar temas nuevos. / Final mock and light review only.

---

## Advertencias antes de confiar en el 90% / Caveats before trusting the 90% target

**ES**
1. **Banco pequeño por subhabilidad.** Tiene entre 5 y 19 preguntas. Con 5 preguntas, un solo fallo ya baja del 90%. Para el 90% real, cuenta el resultado de la primera vez que haces cada pregunta, no los repasos.
2. **Preguntas con clave dudosa del PDF.** La revisión del 2026-10-09 marcó como discutibles las preguntas 14, 25, 35, 41, 72, 88, 89, 93, 95, 105, 110, 112, 115, dd-157 y dd-159 (lista pendiente de confirmar con Norman; no se cambió ninguna clave). Si una de ellas coincide con tu razonamiento y el banco la marca mal, no es que no entiendas el tema. Decide con Norman qué clave se usa antes del examen.
3. **Preguntas retiradas (ocultas, no borradas).** Las 339 preguntas obsoletas o repetidas están fuera del banco vigente, pero siguen en el repositorio. Si se usan para estudiar, pueden dar una idea de API vieja.

**EN**
1. **Small bank per subskill.** It has 5 to 19 questions each. With 5 questions, one miss drops you below 90%. A real 90% counts only the first answer to each question, not repeats.
2. **PDF questions with doubtful keys.** The 2026-10-09 review flagged 14, 25, 35, 41, 72, 88, 89, 93, 95, 105, 110, 112, 115, dd-157 and dd-159 (list pending Norman's confirmation; no key was changed). If your reasoning is right and the bank says otherwise, the key is at fault, not your understanding. Decide with Norman which key to use before the exam.
3. **Retired questions (hidden, not deleted).** The 339 obsolete or duplicate items are outside the current bank but remain in the repository. Do not use them to learn current APIs.

---

## Criterio de cierre / Exit criteria

- [ ] 14 subhabilidades con 90% o más en dos intentos seguidos. / 14 subskills at 90%+ on two consecutive attempts.
- [ ] Examen mixto por dominio con 90% o más. / Mixed quiz per domain at 90%+.
- [ ] Simulacro de 50 preguntas con 90% o más dos veces. / 50-question mock at 90%+ twice.
- [ ] Claves dudosas resueltas con Norman. / Doubtful keys resolved with Norman.
