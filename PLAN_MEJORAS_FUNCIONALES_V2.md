# PLAN DE MEJORAS FUNCIONALES V2
## The Data Dojo — Simulador de Preguntas
### Fecha: 2026-04-02 | Siguiente Fase de Desarrollo

---

## CONTEXTO

El Plan V1 (F1-F8) ya fue implementado y validado. Este documento V2 parte de ese punto y define las siguientes mejoras para convertir The Data Dojo en una herramienta de estudio profesional y completa.

**Estado actual:**
- 8 funcionalidades base implementadas (features.js)
- 1 fix critico pendiente (doble timer en F3)
- 5 archivos faltantes en SW cache
- Score visual: 9.6/10
- Score funcional: 9.2/10

---

## PASO 0: FIXES PENDIENTES DEL V1 (Antes de cualquier mejora nueva)

### Fix A1 — Doble Timer (CRITICO)

**Problema:** Cuando se lanza el Examen Simulado (F3), `_setQuizState()` inicia un timer interno de 67.5 min Y `startCountdownTimer()` inicia un countdown de 120 min. El quiz termina a los 67.5 min aunque el usuario ve 120 min en pantalla.

**Archivo:** script.js linea 4257

**Cambio exacto:**

```javascript
// ANTES (linea 4264-4266):
totalSeconds = questions.length * 90;
startTimer();

// DESPUES:
if (!isRealMode) {
    totalSeconds = questions.length * 90;
    startTimer();
} else {
    clearInterval(timerInterval);
}
```

**Verificacion:** Iniciar Examen Simulado → el timer debe mostrar 120:00 y NO terminarse antes de ese tiempo.

---

### Fix A2 — Archivos faltantes en Service Worker

**Archivo:** sw.js, dentro de `ASSETS_TO_CACHE` (despues de linea 30)

**Agregar estas lineas:**

```javascript
'./conceptos_databricks.js',
'./personajes_unir_viz.js',
'./translations_databricks_es.js',
'./translate_toggle.js',
'./supabase-sync.js',
```

**Verificacion:** DevTools > Application > Cache Storage > `simulador-v5` debe listar estos archivos.

---

## INDICE DE MEJORAS V2

| # | Funcionalidad | Prioridad | Esfuerzo | Archivos |
|---|--------------|-----------|----------|----------|
| F9 | Quick Quiz (10 Preguntas Rapidas) | ALTA | 1-2 hrs | features.js, index.html, styles.css |
| F10 | Flashcard Rapido desde Menu | ALTA | 2-3 hrs | script.js, index.html |
| F11 | Notificacion de Racha en Riesgo | ALTA | 1 hr | features.js, index.html, styles.css |
| F12 | Estadisticas de Tiempo por Pregunta | MEDIA | 3-4 hrs | script.js, features.js, styles.css |
| F13 | Exportar Historial como CSV | MEDIA | 1-2 hrs | features.js, index.html |
| F14 | Resumen Post-Examen Mejorado | MEDIA | 2-3 hrs | script.js, styles.css |
| F15 | Unificar Sistema de Belts (7 vs 13) | MEDIA | 2 hrs | hero_data.js, script.js |
| F16 | Mas Bancos de Preguntas (Content) | ALTA | Variable | questions_*.js nuevos |

---

## F9: QUICK QUIZ — 10 PREGUNTAS RAPIDAS

### Que hace
Un boton en el menu principal que lanza inmediatamente un quiz de 10 preguntas aleatorias de TODOS los cursos mezclados. Sin configuracion, sin seleccionar curso. Ideal para practicar rapido cuando hay poco tiempo.

### Por que importa
El camino actual es: seleccionar categoria → seleccionar curso → abrir config modal → ajustar slider → click iniciar. Demasiados pasos para una sesion rapida de 5 minutos.

### Donde colocar
En `index.html`, ANTES de la seleccion de categoria (arriba de todo el menu):

```html
<!-- Insertar dentro de .menu-container, despues del #menu-profile-card y #streak-display -->
<!-- Buscar linea ~349, antes de <div class="menu-header"> -->

<button id="quick-quiz-btn" class="btn-quick-quiz">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
    <div>
        <strong>Quick Quiz</strong>
        <small>10 preguntas aleatorias de todos los cursos</small>
    </div>
</button>
```

### CSS (agregar al final de styles.css):

```css
/* =============================================
   F9: QUICK QUIZ BUTTON
   ============================================= */
.btn-quick-quiz {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 14px 20px;
    background: var(--card-bg);
    border: 2px dashed var(--primary-color);
    border-radius: var(--radius-md);
    color: var(--text-color);
    cursor: pointer;
    text-align: left;
    margin-bottom: 16px;
    transition: all var(--transition-fast);
}

.btn-quick-quiz:hover {
    background: var(--primary-light);
    border-style: solid;
    transform: translateY(-1px);
    box-shadow: var(--box-shadow);
}

.btn-quick-quiz svg {
    color: var(--primary-color);
    flex-shrink: 0;
}

.btn-quick-quiz strong {
    display: block;
    font-size: 0.95rem;
    color: var(--primary-color);
}

.btn-quick-quiz small {
    display: block;
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 2px;
}
```

### JS (agregar al final de features.js):

```javascript
// =============================================
// F9: QUICK QUIZ — 10 RANDOM FROM ALL COURSES
// =============================================
function setupQuickQuiz() {
    const btn = document.getElementById('quick-quiz-btn');
    if (!btn) return;

    const allQuestions = window.questionsData || [];
    if (allQuestions.length < 10) {
        btn.style.display = 'none';
        return;
    }

    btn.onclick = () => {
        // Mezclar todas las preguntas de todos los cursos
        const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
        const quickQuestions = shuffled.slice(0, 10);

        // Establecer un courseId temporal para que el historial se guarde
        window.currentCourseId = window.currentCourseId || 'quick-mix';

        launchDirectQuiz(quickQuestions, 'quick');
    };
}

// Ejecutar al cargar la pagina
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(setupQuickQuiz, 500);
});
```

### Verificacion
- [ ] Boton visible en el menu principal, arriba de las categorias
- [ ] Click lanza quiz de 10 preguntas inmediatamente
- [ ] Las preguntas vienen de diferentes cursos mezclados
- [ ] Al terminar, resultados se guardan en historial
- [ ] Dark mode: borde y texto se ven bien

---

## F10: FLASHCARD RAPIDO DESDE MENU

### Que hace
Un boton por curso que abre flashcards directamente sin entrar al Study Module. Util para repasar rapido los conceptos clave.

### Por que importa
Las flashcards estan escondidas dentro del Study Module (databricks_study_module.html), que requiere un iframe y navegacion compleja. Un acceso directo ahorra tiempo.

### Donde colocar
En el flujo de `startCourse()`, cuando se renderizan los panels de features (F1-F6), agregar un boton de flashcards junto al boton de Examen Simulado.

### HTML (agregar en index.html despues del #start-real-exam-btn, linea ~395):

```html
<!-- F10: FLASHCARD QUICK ACCESS -->
<button id="start-flashcards-btn" class="btn-flashcard-quick" style="display:none;">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
    </svg>
    <div>
        <strong>Flashcards Rapidas</strong>
        <small id="flashcard-count-label">0 tarjetas disponibles</small>
    </div>
</button>
```

### CSS:

```css
/* =============================================
   F10: FLASHCARD QUICK ACCESS
   ============================================= */
.btn-flashcard-quick {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 14px 20px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-color);
    cursor: pointer;
    text-align: left;
    margin-top: 10px;
    transition: all var(--transition-fast);
    box-shadow: var(--box-shadow);
}

.btn-flashcard-quick:hover {
    transform: translateY(-2px);
    border-color: var(--warning-color);
    box-shadow: var(--box-shadow-lg);
}

.btn-flashcard-quick svg {
    color: var(--warning-color);
    flex-shrink: 0;
}

.btn-flashcard-quick strong {
    display: block;
    font-size: 0.95rem;
}

.btn-flashcard-quick small {
    display: block;
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 2px;
}
```

### JS (agregar en features.js):

```javascript
// =============================================
// F10: FLASHCARD QUICK ACCESS
// =============================================
function setupFlashcardButton(courseId) {
    const btn = document.getElementById('start-flashcards-btn');
    if (!btn) return;

    const cid = courseId || window.currentCourseId;

    // Mapeo de courseId a nombre de variable de flashcards
    // Los datos de flashcards se cargan como variables globales desde flashcards_*.js
    const flashcardSources = {
        'databricks-analyst': window.flashcardsDatabricks || [],
        'databricks-fundamentals': window.flashcardsDatabricks || [],
        'unir-viz': window.flashcardsUnirViz || [],
        'unir-herr': window.flashcardsUnirHerr || [],
        'unah-tesis': window.flashcardsUnahTesis || [],
    };

    // Buscar flashcards para este curso
    let flashcards = flashcardSources[cid] || [];

    // Fallback: buscar por patron de nombre de variable
    if (flashcards.length === 0) {
        // Intentar window['flashcards_' + cid] o similares
        const variations = [
            window[`flashcards_${cid}`],
            window[`flashcards${cid.charAt(0).toUpperCase() + cid.slice(1)}`],
        ].filter(Boolean);
        if (variations.length > 0) flashcards = variations[0];
    }

    if (!flashcards || flashcards.length === 0) {
        btn.style.display = 'none';
        return;
    }

    btn.style.display = 'flex';
    const label = document.getElementById('flashcard-count-label');
    if (label) label.textContent = `${flashcards.length} tarjetas disponibles`;

    btn.onclick = () => {
        // Reutilizar el sistema de flashcards existente si hay uno
        // o crear un overlay simple
        launchFlashcardMode(flashcards);
    };
}

function launchFlashcardMode(flashcards) {
    // Mezclar
    const cards = [...flashcards].sort(() => Math.random() - 0.5);
    let currentIndex = 0;
    let isFlipped = false;

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'flashcard-overlay';
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        background: var(--light-bg);
        display: flex; flex-direction: column;
        animation: slideIn 0.3s ease;
    `;

    function renderCard() {
        const card = cards[currentIndex];
        if (!card) return;

        // Determinar front/back segun estructura del dato
        const front = card.front || card.question || card.term || card.pregunta || 'Sin pregunta';
        const back = card.back || card.answer || card.definition || card.respuesta || 'Sin respuesta';

        overlay.innerHTML = `
            <div style="padding:16px 24px; background:linear-gradient(135deg, #1e293b, #334155); color:#e2e8f0; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <button id="fc-close" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#e2e8f0; border-radius:20px; padding:5px 14px; cursor:pointer; font-size:0.82rem; font-weight:600;">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:4px;">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Volver
                    </button>
                    <span style="font-weight:700; font-size:0.9rem;">Flashcards</span>
                </div>
                <span style="font-size:0.85rem; opacity:0.7;">${currentIndex + 1} / ${cards.length}</span>
            </div>

            <div style="flex:1; display:flex; justify-content:center; align-items:center; padding:20px;">
                <div id="fc-card" style="
                    width:90%; max-width:700px; min-height:350px;
                    background:var(--card-bg); border:1px solid var(--border-color);
                    border-radius:var(--radius-xl, 20px); padding:40px;
                    box-shadow:var(--box-shadow-lg);
                    cursor:pointer; display:flex; flex-direction:column;
                    justify-content:center; align-items:center; text-align:center;
                    transition: transform 0.3s;
                ">
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">
                        ${isFlipped ? 'Respuesta' : 'Pregunta'}
                    </div>
                    <div style="font-size:1.15rem; font-weight:${isFlipped ? '400' : '700'}; color:var(--text-color); line-height:1.6;">
                        ${isFlipped ? back : front}
                    </div>
                    <div style="margin-top:20px; font-size:0.78rem; color:var(--text-muted);">
                        ${isFlipped ? '' : 'Click para ver respuesta'}
                    </div>
                </div>
            </div>

            <div style="padding:16px 24px; display:flex; justify-content:center; gap:12px;">
                <button id="fc-prev" class="btn btn-outline btn-sm" ${currentIndex === 0 ? 'disabled style="opacity:0.3;pointer-events:none;"' : ''}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    Anterior
                </button>
                <button id="fc-flip" class="btn btn-primary btn-sm">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:4px;">
                        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                    </svg>
                    Voltear
                </button>
                <button id="fc-next" class="btn btn-outline btn-sm" ${currentIndex >= cards.length - 1 ? 'disabled style="opacity:0.3;pointer-events:none;"' : ''}>
                    Siguiente
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        `;

        // Event listeners
        document.getElementById('fc-close').onclick = () => overlay.remove();
        document.getElementById('fc-card').onclick = () => { isFlipped = !isFlipped; renderCard(); };
        document.getElementById('fc-flip').onclick = () => { isFlipped = !isFlipped; renderCard(); };
        document.getElementById('fc-prev').onclick = () => { if (currentIndex > 0) { currentIndex--; isFlipped = false; renderCard(); } };
        document.getElementById('fc-next').onclick = () => { if (currentIndex < cards.length - 1) { currentIndex++; isFlipped = false; renderCard(); } };

        // Keyboard navigation
        overlay.tabIndex = 0;
        overlay.focus();
        overlay.onkeydown = (e) => {
            if (e.key === 'ArrowLeft' && currentIndex > 0) { currentIndex--; isFlipped = false; renderCard(); }
            if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) { currentIndex++; isFlipped = false; renderCard(); }
            if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); isFlipped = !isFlipped; renderCard(); }
            if (e.key === 'Escape') overlay.remove();
        };

        // Track for gamification
        if (window.HeroManager && typeof window.HeroManager.trackDailyActivity === 'function') {
            window.HeroManager.trackDailyActivity();
        }
        // Notify parent for flashcard badge tracking
        try {
            window.postMessage({ type: 'FLASHCARD_VIEWED' }, '*');
        } catch(e) {}
    }

    document.body.appendChild(overlay);
    renderCard();
}
```

### Donde conectar
Agregar hook en script.js dentro del bloque de Feature Hooks (linea ~1591):

```javascript
if (typeof setupFlashcardButton === 'function') setupFlashcardButton(courseId);
```

### Verificacion
- [ ] Boton aparece si el curso tiene flashcards
- [ ] Boton NO aparece si no hay flashcards
- [ ] Click abre overlay fullscreen con la primera tarjeta
- [ ] Click en la tarjeta la voltea (pregunta → respuesta)
- [ ] Flechas del teclado navegan entre tarjetas
- [ ] Espacio/Enter voltea la tarjeta
- [ ] Escape cierra el overlay
- [ ] Contador muestra "X / Total"
- [ ] Dark mode hereda estilos correctamente
- [ ] Se registra actividad para gamificacion (flashcardsViewed)

### Nota sobre estructura de datos de flashcards
Los archivos `flashcards_*.js` pueden tener diferentes estructuras. La funcion maneja multiples formatos:
- `{ front, back }`
- `{ question, answer }`
- `{ term, definition }`
- `{ pregunta, respuesta }`

Verificar la estructura real de cada `flashcards_*.js` antes de implementar.

---

## F11: NOTIFICACION DE RACHA EN RIESGO

### Que hace
Si el usuario tiene una racha activa de 2+ dias y NO ha estudiado hoy, muestra un banner prominente: "Tu racha de X dias esta en riesgo. Estudia hoy para mantenerla."

### HTML (agregar en index.html antes del #quick-quiz-btn o al inicio de .menu-container):

```html
<!-- F11: STREAK AT RISK BANNER -->
<div id="streak-risk-banner" class="streak-risk" style="display:none;">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
    <div>
        <strong id="streak-risk-text">Tu racha esta en riesgo</strong>
        <small>Completa al menos 1 pregunta para mantenerla</small>
    </div>
    <button id="streak-risk-dismiss" class="streak-risk-close">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
    </button>
</div>
```

### CSS:

```css
/* =============================================
   F11: STREAK AT RISK NOTIFICATION
   ============================================= */
.streak-risk {
    display: flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1));
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: var(--radius-md);
    padding: 12px 16px;
    margin-bottom: 16px;
    animation: streakPulse 2s ease-in-out infinite;
}

.streak-risk svg {
    color: var(--warning-color);
    flex-shrink: 0;
}

.streak-risk strong {
    display: block;
    font-size: 0.9rem;
    color: var(--warning-color);
}

.streak-risk small {
    display: block;
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 2px;
}

.streak-risk-close {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    margin-left: auto;
    opacity: 0.6;
    transition: opacity 0.2s;
}

.streak-risk-close:hover {
    opacity: 1;
}

@keyframes streakPulse {
    0%, 100% { border-color: rgba(245, 158, 11, 0.3); }
    50% { border-color: rgba(239, 68, 68, 0.4); }
}
```

### JS (agregar en features.js):

```javascript
// =============================================
// F11: STREAK AT RISK NOTIFICATION
// =============================================
function checkStreakRisk() {
    const banner = document.getElementById('streak-risk-banner');
    if (!banner) return;

    const data = JSON.parse(localStorage.getItem('dojoStreak') || '{}');
    const today = new Date().toISOString().split('T')[0];

    // Si ya estudio hoy, no mostrar
    if (data.lastDate === today) {
        banner.style.display = 'none';
        return;
    }

    // Si tiene racha de 2+ dias y la ultima vez fue ayer
    const streak = data.currentStreak || 0;
    if (streak >= 2 && data.lastDate) {
        const diff = dateDiffDays(data.lastDate, today);
        if (diff === 1) {
            // Racha en riesgo — ayer estudio pero hoy no
            banner.style.display = 'flex';
            const text = document.getElementById('streak-risk-text');
            if (text) text.textContent = `Tu racha de ${streak} dias esta en riesgo`;

            const dismiss = document.getElementById('streak-risk-dismiss');
            if (dismiss) dismiss.onclick = () => { banner.style.display = 'none'; };
            return;
        }
    }

    banner.style.display = 'none';
}

// Agregar al DOMContentLoaded existente o crear nuevo:
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkStreakRisk, 1200);
});
```

### Verificacion
- [ ] Si tiene racha de 3 dias y ayer estudio pero hoy no → banner visible
- [ ] El texto dice "Tu racha de 3 dias esta en riesgo"
- [ ] El boton X cierra el banner
- [ ] Si ya estudio hoy → banner oculto
- [ ] Si no tiene racha (0 o 1 dia) → banner oculto
- [ ] Animacion de pulso sutil en el borde

---

## F12: ESTADISTICAS DE TIEMPO POR PREGUNTA

### Que hace
Registra cuanto tiempo tarda el usuario en responder cada pregunta. Al terminar el examen, muestra el promedio y las preguntas mas "lentas". Ayuda a identificar temas donde duda mucho.

### Donde modificar

**script.js** — En `loadQuestion()` (linea ~1638), registrar timestamp:

```javascript
// Agregar variable global (junto a las otras al inicio del IIFE):
let questionStartTime = null;

// En loadQuestion(), al inicio de la funcion (despues de linea 1641):
questionStartTime = Date.now();
```

**script.js** — En `selectOption()` o `checkAnswer()`, registrar duracion:

```javascript
// En checkAnswer() (linea ~2151), antes de ans.submitted = true:
if (questionStartTime) {
    const elapsed = Math.round((Date.now() - questionStartTime) / 1000);
    if (!userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = { selected: [], isCorrect: false, submitted: false };
    }
    userAnswers[currentQuestionIndex].timeSeconds = elapsed;
    questionStartTime = null;
}
```

**En Real Exam mode** — En `navigate()`, tambien registrar tiempo al cambiar de pregunta (aunque no se haga "check"):

```javascript
// En navigate() (buscar la funcion), antes de cambiar de pregunta:
if (questionStartTime && isRealExam) {
    const elapsed = Math.round((Date.now() - questionStartTime) / 1000);
    if (userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex].timeSeconds = elapsed;
    }
}
```

**En finishQuiz()** — Calcular y mostrar estadisticas de tiempo:

```javascript
// Agregar despues del domain breakdown (~linea 2539):

// Time Stats
const timesArray = [];
currentQuizQuestions.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (ans && ans.timeSeconds) {
        timesArray.push({ question: idx + 1, domain: q.domain || 'General', time: ans.timeSeconds, correct: ans.isCorrect });
    }
});

if (timesArray.length > 0) {
    const avgTime = Math.round(timesArray.reduce((s, t) => s + t.time, 0) / timesArray.length);
    const slowest = [...timesArray].sort((a, b) => b.time - a.time).slice(0, 3);

    const timeContainer = document.createElement('div');
    timeContainer.className = 'time-stats-panel';
    timeContainer.innerHTML = `
        <h4>Estadisticas de Tiempo</h4>
        <div class="time-kpis">
            <div class="time-kpi">
                <div class="time-kpi-value">${avgTime}s</div>
                <div class="time-kpi-label">Promedio por pregunta</div>
            </div>
            <div class="time-kpi">
                <div class="time-kpi-value">${Math.min(...timesArray.map(t => t.time))}s</div>
                <div class="time-kpi-label">Mas rapida</div>
            </div>
            <div class="time-kpi">
                <div class="time-kpi-value">${Math.max(...timesArray.map(t => t.time))}s</div>
                <div class="time-kpi-label">Mas lenta</div>
            </div>
        </div>
        <div class="time-slowest">
            <strong>Preguntas donde mas dudaste:</strong>
            ${slowest.map(s => `
                <div class="time-slow-item">
                    <span>Pregunta ${s.question} (${s.domain})</span>
                    <span class="time-slow-value">${s.time}s ${s.correct ? '✓' : '✗'}</span>
                </div>
            `).join('')}
        </div>
    `;

    // Insertar despues del domain breakdown
    const insertPoint = document.getElementById('domain-breakdown-container') || document.getElementById('results-screen');
    if (insertPoint) insertPoint.after(timeContainer);
}
```

### CSS:

```css
/* =============================================
   F12: TIME STATISTICS
   ============================================= */
.time-stats-panel {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 20px;
    margin-top: 20px;
}

.time-stats-panel h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 16px;
}

.time-kpis {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 16px;
}

.time-kpi {
    text-align: center;
    padding: 12px;
    background: var(--light-bg);
    border-radius: var(--radius-sm);
}

.time-kpi-value {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--primary-color);
}

.time-kpi-label {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 4px;
}

.time-slowest {
    font-size: 0.85rem;
    color: var(--text-color);
}

.time-slowest strong {
    display: block;
    margin-bottom: 8px;
}

.time-slow-item {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid var(--border-color);
}

.time-slow-value {
    font-weight: 700;
    color: var(--warning-color);
}

@media (max-width: 768px) {
    .time-kpis {
        grid-template-columns: 1fr;
    }
}
```

### Verificacion
- [ ] Cada pregunta registra tiempo desde que se muestra hasta que se responde
- [ ] Al terminar, se muestra panel con promedio, mas rapida, mas lenta
- [ ] Las 3 preguntas mas lentas se listan con su dominio
- [ ] En modo examen real, el tiempo se registra al navegar entre preguntas

---

## F13: EXPORTAR HISTORIAL COMO CSV

### Que hace
Boton en el historial para descargar todas las sesiones como archivo CSV que se puede abrir en Excel.

### JS (agregar en features.js):

```javascript
// =============================================
// F13: EXPORT HISTORY AS CSV
// =============================================
function exportHistoryCSV() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    if (history.length === 0) {
        alert('No hay historial para exportar.');
        return;
    }

    const headers = ['Fecha', 'Curso', 'Modo', 'Score', 'Total', 'Porcentaje', 'Aprobado', 'Preguntas Falladas'];
    const rows = history.map(h => {
        const pct = h.total > 0 ? Math.round((h.score / h.total) * 100) : 0;
        return [
            `"${h.date}"`,
            `"${h.courseCheck || 'N/A'}"`,
            `"${h.mode || 'N/A'}"`,
            h.score,
            h.total,
            `${pct}%`,
            h.passed ? 'SI' : 'NO',
            `"${(h.missedIds || []).join(', ')}"`
        ].join(',');
    });

    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `data_dojo_historial_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}
```

### HTML — Agregar boton junto al historial:

```html
<!-- Buscar #history-list en index.html y agregar un boton cerca -->
<!-- O agregar en el panel de import/export existente (~linea 1407) -->
<button onclick="if(typeof exportHistoryCSV==='function')exportHistoryCSV()" class="btn btn-outline btn-sm" style="margin-top:8px;">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle;margin-right:4px;">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
    Exportar Historial (CSV)
</button>
```

### Verificacion
- [ ] Click descarga archivo .csv
- [ ] Se abre correctamente en Excel (acentos correctos con BOM UTF-8)
- [ ] Cada fila es un intento con fecha, curso, score, pass/fail

---

## F15: UNIFICAR SISTEMA DE BELTS

### Problema actual
- `hero_data.js` tiene 7 cinturones basicos (Blanco → Maestro, hasta 10000 XP)
- `script.js` tiene 13 cinturones (Blanco → Dragon 7, hasta 60000 XP)
- El certificado (F4) usa HeroManager (7 belts)
- El header/dashboard usa script.js (13 belts)
- Un usuario con 16000 XP ve "Cinturon Maestro" en el certificado pero "Cinturon Negro Dragon 1" en el header

### Solucion
Actualizar `hero_data.js` para usar los mismos 13 cinturones de `script.js`:

```javascript
// hero_data.js — Reemplazar el array belts (linea 22-30):
belts: [
    { name: "Cinturon Blanco", minXP: 0, color: "#A0A0A0", icon: "shield" },
    { name: "Cinturon Amarillo", minXP: 100, color: "#FFD700", icon: "shield" },
    { name: "Cinturon Naranja", minXP: 500, color: "#FF8C00", icon: "shield" },
    { name: "Cinturon Rojo", minXP: 1500, color: "#dc3545", icon: "shield" },
    { name: "Cinturon Verde", minXP: 3000, color: "#28a745", icon: "shield" },
    { name: "Cinturon Cafe", minXP: 5000, color: "#795548", icon: "shield" },
    { name: "Cinturon Azul", minXP: 8000, color: "#007bff", icon: "shield" },
    { name: "Cinturon Negro", minXP: 12000, color: "#343a40", icon: "shield" },
    { name: "Cinturon Negro (Dragon 1)", minXP: 16000, color: "#000000", icon: "dragon" },
    { name: "Cinturon Negro (Dragon 2)", minXP: 20000, color: "#000000", icon: "dragon" },
    { name: "Cinturon Negro (Dragon 3)", minXP: 25000, color: "#000000", icon: "dragon" },
    { name: "Cinturon Negro (Dragon 4)", minXP: 30000, color: "#000000", icon: "dragon" },
    { name: "Cinturon Negro (Dragon 5)", minXP: 35000, color: "#000000", icon: "dragon" },
    { name: "Cinturon Negro (Dragon 6)", minXP: 45000, color: "#000000", icon: "dragon" },
    { name: "Cinturon Negro (Dragon 7)", minXP: 60000, color: "#000000", icon: "dragon" },
],
```

### Verificacion
- [ ] El certificado muestra el mismo cinturon que el header
- [ ] Los niveles Dragon aparecen en ambos sistemas
- [ ] El XP se calcula igual en ambos

---

## ORDEN DE IMPLEMENTACION RECOMENDADO

```
INMEDIATO (Antes de todo):
  Fix A1: Doble timer (5 minutos)
  Fix A2: SW cache (2 minutos)

SPRINT 1 (3-4 horas):
  F9:  Quick Quiz (1-2 hrs) — Acceso rapido, maximo impacto UX
  F11: Racha en Riesgo (1 hr) — Motivacion diaria
  F15: Unificar Belts (30 min) — Consistencia

SPRINT 2 (4-5 horas):
  F10: Flashcards Rapidas (2-3 hrs) — Repaso sin friction
  F13: Export CSV (1 hr) — Utilidad pro

SPRINT 3 (3-4 horas):
  F12: Tiempo por Pregunta (3-4 hrs) — Insight de estudio
  F14: Resumen Post-Examen (2-3 hrs) — Feedback avanzado

FUTURO:
  F16: Mas bancos de preguntas (Variable)
  Sync Supabase (4-6 hrs)
```

---

## REGLAS DE IMPLEMENTACION (Igual que V1)

1. **CERO emojis como iconos** — Todo icono es SVG inline
2. **Usar variables CSS existentes** — var(--primary-color), var(--card-bg), etc.
3. **Dark mode automatico** — Si usas variables, funciona solo
4. **Backup antes de cada cambio** — Copiar a backups/ antes de modificar
5. **Probar light + dark mode**
6. **Probar en movil** (Chrome DevTools responsive)
7. **No romper funcionalidad existente**
8. **features.js es el archivo para codigo nuevo** — No contaminar script.js

---

## RESUMEN DE ARCHIVOS POR FUNCIONALIDAD

| Feature | index.html | styles.css | features.js | script.js | hero_data.js |
|---------|:----------:|:----------:|:-----------:|:---------:|:------------:|
| Fix A1 (Timer) | — | — | — | ✏️ L4264 | — |
| Fix A2 (SW) | — | — | — | — | — (sw.js) |
| F9 Quick Quiz | ✏️ | ✏️ | ✏️ | — | — |
| F10 Flashcards | ✏️ | ✏️ | ✏️ | ✏️ (hook) | — |
| F11 Streak Risk | ✏️ | ✏️ | ✏️ | — | — |
| F12 Time Stats | — | ✏️ | — | ✏️ | — |
| F13 Export CSV | ✏️ | — | ✏️ | — | — |
| F15 Unify Belts | — | — | — | — | ✏️ |

---

*Plan de Mejoras Funcionales V2*
*2 fixes criticos + 7 funcionalidades nuevas*
*Autor: Claude Code*
*Fecha: 2026-04-02*
