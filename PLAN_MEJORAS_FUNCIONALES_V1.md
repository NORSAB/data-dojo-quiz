# PLAN DE MEJORAS FUNCIONALES V1
## The Data Dojo — Simulador de Preguntas
### Fecha: 2026-04-02 | Documento de Implementacion

---

## CONTEXTO

La auditoria visual V5 confirmo que la app alcanzo su punto optimo (9.6/10).
Este documento detalla las funcionalidades nuevas a implementar, con:
- Que hace cada funcionalidad
- Donde se modifica (archivos exactos, funciones, lineas)
- Codigo de referencia parcial
- Como mantener el estilo visual existente
- Orden de implementacion recomendado

**Regla de oro: CERO iconos emoji en UI nueva. Todo usa SVG inline.**
**Regla de oro: Todo CSS nuevo debe usar las variables existentes de styles.css.**

---

## INDICE DE FUNCIONALIDADES

| # | Funcionalidad | Prioridad | Esfuerzo | Archivos |
|---|--------------|-----------|----------|----------|
| F1 | Modo Repaso de Errores | ALTA | 3-4 hrs | script.js, index.html, styles.css |
| F2 | Practica por Categoria/Dominio | ALTA | 2-3 hrs | script.js, index.html |
| F3 | Examen Simulado con Timer Real | ALTA | 4-6 hrs | script.js, index.html, styles.css |
| F4 | Exportar Certificado como Imagen | MEDIA | 3-4 hrs | script.js, index.html, styles.css |
| F5 | Dashboard de Progreso Avanzado | MEDIA | 6-8 hrs | script.js, index.html, styles.css |
| F6 | Racha Diaria (Streaks) | MEDIA | 3-4 hrs | script.js, hero_data.js, styles.css |
| F7 | Modo Offline Completo (PWA) | BAJA | 4-6 hrs | sw.js, manifest.json |
| F8 | Sonidos de Feedback | BAJA | 1-2 hrs | script.js, (archivos .mp3) |

---

## F1: MODO REPASO DE ERRORES

### Que hace
Un boton dedicado en la pantalla de inicio que muestra SOLO las preguntas que el usuario ha fallado en examenes anteriores. El usuario puede re-intentarlas como un quiz enfocado para reforzar sus debilidades.

### Como funciona actualmente
- Ya existe `config-weakness-mode` (checkbox en el modal de configuracion)
- Las preguntas falladas se guardan en `localStorage.quizHistory[].missedIds`
- El filtro de debilidades ya funciona dentro de `updateSliderRange()`

### Que falta
1. Un boton visible y dedicado en el menu principal (no escondido en config avanzada)
2. Una pantalla que muestre un resumen de errores por categoria antes de empezar
3. Acceso directo sin pasar por el modal de configuracion completo

### Archivos a modificar

**index.html** — Agregar boton en el `#start-screen`, despues de los course cards:

```html
<!-- Insertar dentro de #start-screen, despues de la lista de cursos -->
<!-- Ubicacion: buscar el contenedor de acciones del menu principal -->

<div id="weakness-shortcut" class="weakness-panel" style="display:none;">
    <div class="weakness-header">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>Repaso de Errores</span>
        <span id="weakness-count" class="weakness-badge">0</span>
    </div>
    <p class="weakness-desc">Practica las preguntas que has fallado anteriormente</p>
    <div id="weakness-domains"></div>
    <button id="start-weakness-btn" class="btn btn-primary">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Iniciar Repaso
    </button>
</div>
```

**styles.css** — Agregar estilos (usar variables existentes):

```css
/* =============================================
   F1: WEAKNESS REVIEW PANEL
   ============================================= */
.weakness-panel {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 24px;
    margin-top: 20px;
    box-shadow: var(--box-shadow);
    border-left: 4px solid var(--danger-color);
}

.weakness-header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 8px;
}

.weakness-badge {
    background: var(--danger-light);
    color: var(--danger-color);
    font-size: 0.8rem;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: var(--radius-full);
}

.weakness-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 16px;
}

.weakness-domain-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
}

.weakness-domain-chip {
    background: var(--primary-light);
    color: var(--primary-color);
    padding: 4px 12px;
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
}

/* Dark mode — hereda automaticamente via variables */
```

**script.js** — Agregar logica. Buscar la funcion `renderHistory()` (linea ~471) y despues de ella agregar:

```javascript
// =============================================
// F1: WEAKNESS REVIEW MODE
// =============================================

function updateWeaknessPanel() {
    const panel = document.getElementById('weakness-shortcut');
    if (!panel) return;

    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');

    // Recopilar TODOS los missedIds unicos de todo el historial
    const allMissedIds = new Set();
    history.forEach(h => {
        if (h.missedIds && Array.isArray(h.missedIds)) {
            h.missedIds.forEach(id => allMissedIds.add(id));
        }
    });

    // Filtrar: quitar las que ya respondio correctamente DESPUES de fallar
    // (si la ultima vez que aparecio la pregunta fue correcta, ya no es debilidad)
    const stillWeak = new Set();
    allMissedIds.forEach(qId => {
        // Buscar el ultimo intento que incluya esta pregunta
        const lastAttempt = history.find(h =>
            h.questionIds && h.questionIds.includes(qId)
        );
        if (lastAttempt && lastAttempt.missedIds && lastAttempt.missedIds.includes(qId)) {
            stillWeak.add(qId);
        }
    });

    const count = stillWeak.size;
    document.getElementById('weakness-count').textContent = count;

    if (count === 0) {
        panel.style.display = 'none';
        return;
    }

    panel.style.display = 'block';

    // Mostrar desglose por dominio
    const domainsContainer = document.getElementById('weakness-domains');
    const domainCounts = {};

    // Buscar las preguntas en el banco de preguntas actual
    const allQuestions = typeof window.ALL_QUESTIONS !== 'undefined'
        ? window.ALL_QUESTIONS
        : [];

    stillWeak.forEach(qId => {
        const q = allQuestions.find(qq => qq.id === qId);
        if (q) {
            const domain = q.domain || 'General';
            domainCounts[domain] = (domainCounts[domain] || 0) + 1;
        }
    });

    domainsContainer.innerHTML = '';
    domainsContainer.className = 'weakness-domain-list';
    Object.entries(domainCounts).forEach(([domain, cnt]) => {
        const chip = document.createElement('span');
        chip.className = 'weakness-domain-chip';
        chip.textContent = `${domain} (${cnt})`;
        domainsContainer.appendChild(chip);
    });

    // Boton de inicio
    document.getElementById('start-weakness-btn').onclick = () => {
        startWeaknessQuiz(Array.from(stillWeak));
    };
}

function startWeaknessQuiz(missedIds) {
    // Filtrar del banco de preguntas solo las falladas
    const allQuestions = typeof window.ALL_QUESTIONS !== 'undefined'
        ? window.ALL_QUESTIONS
        : [];

    const weakQuestions = allQuestions.filter(q => missedIds.includes(q.id));

    if (weakQuestions.length === 0) {
        alert('No hay preguntas de repaso disponibles.');
        return;
    }

    // Mezclar aleatoriamente
    weakQuestions.sort(() => Math.random() - 0.5);

    // Iniciar quiz con estas preguntas directamente
    // Reutilizar el flujo existente estableciendo las variables globales
    currentQuizQuestions = weakQuestions;
    userAnswers = {};
    currentQuestionIndex = 0;
    isRealExam = false; // Siempre modo estudio en repaso

    // Ocultar menu, mostrar quiz
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-ui').classList.remove('hidden');

    // Actualizar titulo para indicar modo repaso
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.dataset.weaknessMode = 'true';
    }

    loadQuestion(0);
    buildQuestionMap();
}

// Llamar updateWeaknessPanel cuando se renderiza el menu
// Buscar donde se llama renderHistory() y agregar updateWeaknessPanel() despues
```

### Donde conectar

En script.js, buscar cada lugar donde se llama `renderHistory()` y agregar `updateWeaknessPanel()` inmediatamente despues. Hay ~3 lugares:
1. Despues de `saveExamResult()` (linea ~468)
2. En el flujo de inicio/DOMContentLoaded
3. Cuando se cambia de curso

### Verificacion
- [ ] El panel aparece solo si hay preguntas falladas
- [ ] Los chips de dominio muestran el desglose correcto
- [ ] El quiz de repaso funciona igual que un quiz normal
- [ ] Al volver a responder correctamente, la pregunta desaparece del panel
- [ ] Dark mode se ve bien (no requiere CSS extra si se usan variables)

---

## F2: PRACTICA POR CATEGORIA/DOMINIO

### Que hace
En lugar de un quiz aleatorio de todo el banco, el usuario puede seleccionar un dominio especifico (ej: "Data Management", "ELT with Spark SQL", "Data Governance") y practicar solo preguntas de esa area.

### Como funciona actualmente
- Ya existe `config-domain-select` (un `<select>`) en el modal de configuracion
- La logica de filtro por dominio ya esta en `updateSliderRange()` (~linea 1371)
- Los dominios se extraen dinamicamente de las preguntas (`q.domain`)

### Que falta
1. Hacer los dominios visibles como CARDS en el menu principal (no escondidos en config)
2. Cada card muestra el nombre del dominio, cuantas preguntas tiene, y el % de acierto historico

### Archivos a modificar

**index.html** — Agregar contenedor despues de los course cards:

```html
<!-- Dentro de #start-screen, despues de la seleccion de curso -->
<div id="domain-cards-container" class="domain-grid" style="display:none;">
    <h3 class="section-label">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h7"/>
        </svg>
        Practicar por Area
    </h3>
    <div id="domain-cards" class="domain-cards-wrapper">
        <!-- Generado por JS -->
    </div>
</div>
```

**styles.css** — Agregar:

```css
/* =============================================
   F2: DOMAIN PRACTICE CARDS
   ============================================= */
.section-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 16px;
}

.domain-grid {
    margin-top: 24px;
}

.domain-cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
}

.domain-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 16px;
    cursor: pointer;
    transition: all var(--transition-fast);
    box-shadow: var(--box-shadow);
}

.domain-card:hover {
    transform: translateY(-2px);
    border-color: var(--primary-color);
    box-shadow: var(--box-shadow-lg);
}

.domain-card-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--text-color);
    margin-bottom: 8px;
}

.domain-card-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: var(--text-muted);
}

.domain-card-count {
    font-weight: 600;
}

.domain-card-pct {
    font-weight: 700;
    padding: 2px 8px;
    border-radius: var(--radius-full);
    font-size: 0.75rem;
}

.domain-card-pct.good {
    background: var(--success-light);
    color: var(--success-color);
}

.domain-card-pct.medium {
    background: var(--warning-light);
    color: var(--warning-color);
}

.domain-card-pct.weak {
    background: var(--danger-light);
    color: var(--danger-color);
}

.domain-card-bar {
    height: 4px;
    background: var(--border-color);
    border-radius: 2px;
    overflow: hidden;
    margin-top: 10px;
}

.domain-card-bar-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 0.5s ease;
}

@media (max-width: 768px) {
    .domain-cards-wrapper {
        grid-template-columns: 1fr;
    }
}
```

**script.js** — Agregar funcion:

```javascript
// =============================================
// F2: DOMAIN PRACTICE CARDS
// =============================================

function renderDomainCards() {
    const container = document.getElementById('domain-cards');
    const wrapper = document.getElementById('domain-cards-container');
    if (!container || !wrapper) return;

    // Obtener preguntas del curso actual
    const questions = getQuestionsForCourse(currentCourseId);
    if (!questions || questions.length === 0) {
        wrapper.style.display = 'none';
        return;
    }

    // Extraer dominios unicos
    const domains = {};
    questions.forEach(q => {
        const d = q.domain || 'General';
        if (!domains[d]) domains[d] = { total: 0, ids: [] };
        domains[d].total++;
        domains[d].ids.push(q.id);
    });

    if (Object.keys(domains).length <= 1) {
        wrapper.style.display = 'none';
        return;
    }

    // Calcular % historico por dominio
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => h.courseCheck === currentCourseId);

    Object.keys(domains).forEach(domain => {
        let attempted = 0;
        let correct = 0;
        history.forEach(h => {
            if (!h.questionIds || !h.userAnswers) return;
            h.questionIds.forEach((qId, idx) => {
                if (domains[domain].ids.includes(qId)) {
                    attempted++;
                    if (h.userAnswers[idx] && h.userAnswers[idx].isCorrect) {
                        correct++;
                    }
                }
            });
        });
        domains[domain].attempted = attempted;
        domains[domain].pct = attempted > 0 ? Math.round((correct / attempted) * 100) : -1;
    });

    // Renderizar cards
    container.innerHTML = '';
    Object.entries(domains).sort((a, b) => a[1].pct - b[1].pct).forEach(([name, data]) => {
        const pctClass = data.pct < 0 ? '' : data.pct >= 70 ? 'good' : data.pct >= 50 ? 'medium' : 'weak';
        const pctText = data.pct < 0 ? 'Sin datos' : `${data.pct}%`;
        const barColor = data.pct >= 70
            ? 'var(--success-color)'
            : data.pct >= 50
                ? 'var(--warning-color)'
                : 'var(--danger-color)';
        const barWidth = data.pct < 0 ? 0 : data.pct;

        const card = document.createElement('div');
        card.className = 'domain-card';
        card.innerHTML = `
            <div class="domain-card-name">${name}</div>
            <div class="domain-card-stats">
                <span class="domain-card-count">${data.total} preguntas</span>
                <span class="domain-card-pct ${pctClass}">${pctText}</span>
            </div>
            <div class="domain-card-bar">
                <div class="domain-card-bar-fill" style="width:${barWidth}%; background:${barColor};"></div>
            </div>
        `;

        card.onclick = () => startDomainQuiz(name, data.ids);
        container.appendChild(card);
    });

    wrapper.style.display = 'block';
}

function startDomainQuiz(domainName, questionIds) {
    const allQuestions = getQuestionsForCourse(currentCourseId);
    const domainQuestions = allQuestions.filter(q => questionIds.includes(q.id));

    if (domainQuestions.length === 0) return;

    // Mezclar
    domainQuestions.sort(() => Math.random() - 0.5);

    // Iniciar quiz
    currentQuizQuestions = domainQuestions;
    userAnswers = {};
    currentQuestionIndex = 0;
    isRealExam = false;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-ui').classList.remove('hidden');

    loadQuestion(0);
    buildQuestionMap();
}

// Llamar renderDomainCards() cuando se selecciona un curso
// Buscar donde se ejecuta startCourse(courseId) y agregar la llamada
```

### Donde conectar
Buscar la funcion `startCourse()` en script.js. Al final de esa funcion (despues de que se configura el curso), agregar: `renderDomainCards();`

### Verificacion
- [ ] Las cards se generan dinamicamente segun los dominios del curso
- [ ] El % historico es correcto basado en el historial
- [ ] Click en una card inicia quiz con solo esas preguntas
- [ ] Se ordena de peor a mejor desempeno (debilidades primero)
- [ ] Grid responsivo (1 columna en movil)
- [ ] Dark mode funciona sin CSS adicional

---

## F3: EXAMEN SIMULADO CON TIMER REAL

### Que hace
Simula las condiciones reales del examen de certificacion Databricks:
- 45 preguntas (o configurable)
- 120 minutos de tiempo maximo
- Timer visible y progresivo
- Al terminar el tiempo, se finaliza automaticamente
- Resultado con desglose por dominio y pass/fail al 70%

### Como funciona actualmente
- Ya existe `timerInterval` y `timerDisplay` (#timer-display en index.html)
- Ya existe `isRealExam` flag que se establece en la configuracion
- Ya existe logica de finalizacion en `finishQuiz()`
- El timer actual muestra tiempo transcurrido (cronometro), NO cuenta regresiva

### Que falta
1. Cambiar el timer a CUENTA REGRESIVA cuando es modo examen real
2. Agregar alerta visual cuando quedan 10 minutos
3. Auto-finalizar cuando llega a 0:00
4. Un boton prominente "Examen Simulado" en el menu (acceso directo)

### Archivos a modificar

**index.html** — Agregar boton en #start-screen:

```html
<!-- Agregar cerca del boton principal de iniciar quiz -->
<button id="start-real-exam-btn" class="btn-exam-simulate" style="display:none;">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
    </svg>
    <div>
        <strong>Examen Simulado</strong>
        <small>45 preguntas | 120 min | Condiciones reales</small>
    </div>
</button>
```

**styles.css** — Agregar:

```css
/* =============================================
   F3: SIMULATED EXAM BUTTON & TIMER
   ============================================= */
.btn-exam-simulate {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 16px 20px;
    background: linear-gradient(135deg, var(--primary-color), #7c3aed);
    color: #fff;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    text-align: left;
    margin-top: 16px;
    transition: all var(--transition-fast);
    box-shadow: 0 4px 12px rgba(79, 110, 247, 0.3);
}

.btn-exam-simulate:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(79, 110, 247, 0.4);
}

.btn-exam-simulate strong {
    display: block;
    font-size: 1rem;
}

.btn-exam-simulate small {
    display: block;
    font-size: 0.8rem;
    opacity: 0.85;
    margin-top: 2px;
}

/* Timer countdown styles */
.timer-warning {
    animation: timerPulse 1s ease-in-out infinite;
    color: var(--danger-color) !important;
}

@keyframes timerPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.timer-countdown {
    font-family: 'Inter', monospace;
    font-size: 1.1rem;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.12);
    padding: 4px 12px;
    border-radius: var(--radius-sm);
    color: #e2e8f0;
    letter-spacing: 0.05em;
}
```

**script.js** — Modificar la logica del timer:

```javascript
// =============================================
// F3: COUNTDOWN TIMER FOR REAL EXAM
// =============================================

// Variables globales (agregar junto a las existentes)
let countdownSeconds = 0;
let countdownInterval = null;

function startCountdownTimer(minutes) {
    countdownSeconds = minutes * 60;
    const display = document.getElementById('timer-display');
    display.classList.remove('hidden');
    display.className = 'timer-countdown'; // Aplicar nuevo estilo

    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
        countdownSeconds--;

        if (countdownSeconds <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            // Auto-finalizar examen
            alert('Se acabo el tiempo. El examen se finalizara automaticamente.');
            finishQuiz();
            return;
        }

        // Alerta visual a los 10 minutos
        if (countdownSeconds <= 600 && countdownSeconds > 0) {
            display.classList.add('timer-warning');
        }

        // Alerta visual a los 2 minutos
        if (countdownSeconds === 120) {
            // Flash breve en el fondo
            document.body.style.transition = 'background 0.3s';
            document.body.style.background = 'rgba(239,68,68,0.05)';
            setTimeout(() => {
                document.body.style.background = '';
            }, 500);
        }

        updateCountdownDisplay();
    }, 1000);
}

function updateCountdownDisplay() {
    const display = document.getElementById('timer-display');
    const mins = Math.floor(countdownSeconds / 60);
    const secs = countdownSeconds % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function stopCountdownTimer() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

// Boton de acceso directo
function setupRealExamButton() {
    const btn = document.getElementById('start-real-exam-btn');
    if (!btn) return;

    // Solo mostrar para cursos que tengan suficientes preguntas
    const questions = getQuestionsForCourse(currentCourseId);
    if (questions && questions.length >= 45) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
        return;
    }

    btn.onclick = () => {
        // Seleccionar 45 preguntas aleatorias
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        const examQuestions = shuffled.slice(0, 45);

        currentQuizQuestions = examQuestions;
        userAnswers = {};
        currentQuestionIndex = 0;
        isRealExam = true;

        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('quiz-ui').classList.remove('hidden');

        loadQuestion(0);
        buildQuestionMap();

        // Iniciar countdown de 120 minutos
        startCountdownTimer(120);
    };
}

// Llamar setupRealExamButton() despues de seleccionar curso
```

### Donde conectar
1. En `startCourse()`: agregar `setupRealExamButton();` al final
2. En `finishQuiz()` (linea ~2261): agregar `stopCountdownTimer();` al inicio de la funcion
3. En `returnToMenu()`: agregar `stopCountdownTimer();` para cancelar si vuelve al menu
4. Modificar `finishQuiz()`: si `isRealExam && countdownSeconds > 0`, calcular el tiempo usado como `(120*60) - countdownSeconds` y guardarlo en el historial

### Verificacion
- [ ] Timer cuenta hacia atras (120:00 → 0:00)
- [ ] A los 10 min restantes, el timer parpadea en rojo
- [ ] A los 2 min, flash sutil en el fondo
- [ ] A los 0:00, auto-finaliza y muestra resultados
- [ ] Si el usuario termina antes, el timer se detiene
- [ ] El boton solo aparece si hay 45+ preguntas disponibles
- [ ] El resultado guarda el tiempo usado

---

## F4: EXPORTAR CERTIFICADO COMO IMAGEN

### Que hace
Despues de aprobar un examen, el usuario puede descargar un certificado visual como imagen PNG. El certificado tiene:
- Logo/identidad del Dojo
- Nombre del usuario
- Nombre del curso/certificacion
- Score obtenido
- Fecha
- Belt actual
- Diseno visual consistente con la app

### Como funciona actualmente
- Ya existe un boton "Guardar como PDF" que simplemente llama `window.print()` (linea ~2422)
- Los datos del usuario estan en `HeroManager.data.profile`
- El resultado esta disponible en `finishQuiz()` con `finalPct`, `passed`, `currentCourseId`

### Que falta
1. Generar un certificado visual en un `<canvas>` HTML5
2. Convertir el canvas a imagen PNG descargable
3. Diseno que refleje la identidad del Dojo

### Archivos a modificar

**script.js** — Agregar funcion de generacion de certificado. Buscar despues de la logica de `finishQuiz()`:

```javascript
// =============================================
// F4: CERTIFICATE GENERATOR
// =============================================

function generateCertificate(courseName, score, userName, beltName, beltColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // --- Fondo ---
    // Gradiente principal (Dojo style)
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
    bgGrad.addColorStop(0, '#0f172a');
    bgGrad.addColorStop(0.5, '#1e293b');
    bgGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 800);

    // Borde decorativo
    ctx.strokeStyle = '#4f6ef7';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 30, 1140, 740);

    // Borde interno
    ctx.strokeStyle = 'rgba(79, 110, 247, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, 1120, 720);

    // --- Cabecera ---
    ctx.fillStyle = '#4f6ef7';
    ctx.font = '700 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('THE DATA DOJO', 600, 90);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '800 36px Inter, sans-serif';
    ctx.fillText('CERTIFICADO DE APROBACION', 600, 140);

    // Linea decorativa
    const lineGrad = ctx.createLinearGradient(300, 160, 900, 160);
    lineGrad.addColorStop(0, 'transparent');
    lineGrad.addColorStop(0.5, '#4f6ef7');
    lineGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 165);
    ctx.lineTo(900, 165);
    ctx.stroke();

    // --- Contenido ---
    ctx.fillStyle = '#94a3b8';
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillText('Se certifica que', 600, 230);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 42px Inter, sans-serif';
    ctx.fillText(userName, 600, 290);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillText('ha completado exitosamente el examen', 600, 350);

    ctx.fillStyle = '#4f6ef7';
    ctx.font = '700 28px Inter, sans-serif';
    ctx.fillText(courseName, 600, 400);

    // Score circle
    ctx.beginPath();
    ctx.arc(600, 500, 60, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(79, 110, 247, 0.15)';
    ctx.fill();
    ctx.strokeStyle = '#4f6ef7';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 36px Inter, sans-serif';
    ctx.fillText(`${score}%`, 600, 510);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '400 14px Inter, sans-serif';
    ctx.fillText('SCORE', 600, 535);

    // Belt
    ctx.fillStyle = beltColor;
    ctx.font = '700 16px Inter, sans-serif';
    ctx.fillText(beltName, 600, 610);

    // Fecha
    const fecha = new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    ctx.fillStyle = '#64748b';
    ctx.font = '400 16px Inter, sans-serif';
    ctx.fillText(fecha, 600, 660);

    // Footer
    ctx.fillStyle = '#334155';
    ctx.font = '400 12px Inter, sans-serif';
    ctx.fillText('The Data Dojo — Quiz Simulator', 600, 740);

    // --- Descargar ---
    const link = document.createElement('a');
    link.download = `certificado_${courseName.replace(/\s+/g, '_')}_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Modificar finishQuiz() para agregar boton de certificado
// Buscar donde se crea exportBtn (~linea 2404) y agregar:

function addCertificateButton(score, passed) {
    if (!passed) return; // Solo si aprobo

    const toolsDiv = document.querySelector('.result-tools');
    if (!toolsDiv) return;

    // Evitar duplicados
    if (document.getElementById('cert-download-btn')) return;

    const certBtn = document.createElement('button');
    certBtn.id = 'cert-download-btn';
    certBtn.className = 'btn btn-primary btn-sm';
    certBtn.style.marginLeft = '8px';
    certBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle;margin-right:4px;">
            <path d="M12 15l-5-5h3V4h4v6h3l-5 5zm-7 4v-2h14v2H5z"/>
        </svg>
        Descargar Certificado
    `;

    certBtn.onclick = () => {
        const profile = window.HeroManager ? window.HeroManager.data.profile : { nick: 'Estudiante' };
        const belt = window.HeroManager ? window.HeroManager.getBeltInfo(window.HeroManager.data.stats.xp) : { name: 'Estudiante', color: '#A0A0A0' };
        const courseName = courseConfig[currentCourseId]?.title || currentCourseId;

        generateCertificate(courseName, score, profile.nick || profile.name, belt.name, belt.color);
    };

    toolsDiv.appendChild(certBtn);
}

// Conectar: dentro de finishQuiz(), despues de crear el toolsDiv del PDF (~linea 2430):
// addCertificateButton(finalPct, passed);
```

### Nota sobre la fuente Inter en Canvas
- `ctx.font` usa la fuente cargada en el navegador. Como Inter ya esta cargada via `<link>`, funcionara.
- Si el certificado se genera antes de que cargue la fuente, los textos saldran en sans-serif. Para evitarlo, verificar `document.fonts.ready` antes de generar:

```javascript
// Envolver la generacion:
document.fonts.ready.then(() => {
    generateCertificate(courseName, score, userName, beltName, beltColor);
});
```

### Verificacion
- [ ] El boton solo aparece cuando el usuario APRUEBA (>= 70%)
- [ ] La imagen se descarga como PNG con nombre descriptivo
- [ ] La fuente Inter renderiza correctamente
- [ ] Los colores del certificado coinciden con la paleta del Dojo
- [ ] El nombre del usuario es correcto (de HeroManager)
- [ ] El belt color corresponde al nivel actual

---

## F5: DASHBOARD DE PROGRESO AVANZADO

### Que hace
Una seccion en el perfil del usuario que muestra:
- Grafica de rendimiento en el tiempo (ultimas 20 sesiones)
- Radar chart de fortalezas/debilidades por dominio
- Metricas clave: total preguntas, % acierto global, racha maxima, tiempo promedio
- Recomendacion automatica de que area estudiar

### Como funciona actualmente
- Ya existe una grafica SVG basica de tendencia en `renderHistory()` (linea ~485)
- Ya existe desglose por dominio en resultados (`domainStats` en finishQuiz, linea ~2493)
- `localStorage.quizHistory` tiene hasta 20 intentos guardados

### Que falta
1. Un panel dedicado (nueva seccion o tab en el perfil)
2. Radar chart SVG para visualizar fortalezas por dominio
3. Metricas agregadas calculadas del historial completo
4. Algoritmo de recomendacion basica

### Archivos a modificar

**index.html** — Agregar panel en #start-screen (o como modal):

```html
<!-- Panel de Dashboard — insertar en #start-screen -->
<div id="dashboard-panel" class="dashboard-container" style="display:none;">
    <div class="dashboard-header">
        <h3>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3v18h18"/>
                <path d="M7 16l4-8 4 4 4-8"/>
            </svg>
            Dashboard de Progreso
        </h3>
        <button id="close-dashboard" class="btn btn-outline btn-sm">Cerrar</button>
    </div>

    <!-- KPI Cards -->
    <div id="dashboard-kpis" class="dashboard-kpis"></div>

    <!-- Charts Row -->
    <div class="dashboard-charts">
        <div id="dashboard-trend" class="dashboard-chart-card">
            <h4>Tendencia de Rendimiento</h4>
            <div id="trend-chart-svg"></div>
        </div>
        <div id="dashboard-radar" class="dashboard-chart-card">
            <h4>Fortalezas por Dominio</h4>
            <div id="radar-chart-svg"></div>
        </div>
    </div>

    <!-- Recommendation -->
    <div id="dashboard-recommendation" class="dashboard-recommendation"></div>
</div>
```

**styles.css** — Agregar:

```css
/* =============================================
   F5: PROGRESS DASHBOARD
   ============================================= */
.dashboard-container {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
    padding: 24px;
    margin-top: 20px;
    box-shadow: var(--box-shadow);
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.dashboard-header h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-color);
}

.dashboard-kpis {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin-bottom: 24px;
}

.kpi-card {
    background: var(--light-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 16px;
    text-align: center;
}

.kpi-value {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--primary-color);
}

.kpi-label {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 4px;
    font-weight: 600;
}

.dashboard-charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
}

.dashboard-chart-card {
    background: var(--light-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 16px;
}

.dashboard-chart-card h4 {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 12px;
}

.dashboard-recommendation {
    background: var(--primary-light);
    border: 1px solid rgba(79, 110, 247, 0.2);
    border-radius: var(--radius-md);
    padding: 16px;
    color: var(--text-color);
    font-size: 0.9rem;
}

.dashboard-recommendation strong {
    color: var(--primary-color);
}

@media (max-width: 768px) {
    .dashboard-charts {
        grid-template-columns: 1fr;
    }
    .dashboard-kpis {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

**script.js** — Logica del dashboard:

```javascript
// =============================================
// F5: PROGRESS DASHBOARD
// =============================================

function renderDashboard() {
    const panel = document.getElementById('dashboard-panel');
    if (!panel) return;

    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    if (history.length === 0) {
        panel.style.display = 'none';
        return;
    }

    panel.style.display = 'block';

    // --- KPIs ---
    const kpiContainer = document.getElementById('dashboard-kpis');
    const totalQuestions = history.reduce((sum, h) => sum + h.total, 0);
    const totalCorrect = history.reduce((sum, h) => sum + h.score, 0);
    const globalPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const examsPassed = history.filter(h => h.passed).length;
    const bestScore = Math.max(...history.map(h => h.total > 0 ? Math.round((h.score / h.total) * 100) : 0));

    kpiContainer.innerHTML = `
        <div class="kpi-card">
            <div class="kpi-value">${totalQuestions}</div>
            <div class="kpi-label">Preguntas Totales</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-value">${globalPct}%</div>
            <div class="kpi-label">Acierto Global</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-value">${examsPassed}</div>
            <div class="kpi-label">Examenes Aprobados</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-value">${bestScore}%</div>
            <div class="kpi-label">Mejor Score</div>
        </div>
    `;

    // --- Trend Chart (SVG) ---
    renderTrendChart(history);

    // --- Radar Chart (SVG) ---
    renderRadarChart(history);

    // --- Recommendation ---
    renderRecommendation(history);

    // Close button
    document.getElementById('close-dashboard').onclick = () => {
        panel.style.display = 'none';
    };
}

function renderTrendChart(history) {
    const container = document.getElementById('trend-chart-svg');
    const data = [...history].reverse().slice(-20); // Ultimas 20, cronologicas
    if (data.length < 2) {
        container.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Necesitas al menos 2 intentos</p>';
        return;
    }

    const w = 400, h = 150, pad = 30;
    const points = data.map((d, i) => {
        const x = pad + (i / (data.length - 1)) * (w - 2 * pad);
        const pct = d.total === 0 ? 0 : (d.score / d.total);
        const y = pad + (1 - pct) * (h - 2 * pad);
        return { x, y, pct: Math.round(pct * 100), passed: d.passed };
    });

    const polyline = points.map(p => `${p.x},${p.y}`).join(' ');
    const passY = pad + (1 - 0.7) * (h - 2 * pad);

    container.innerHTML = `
        <svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" style="overflow:visible;">
            <line x1="${pad}" y1="${passY}" x2="${w-pad}" y2="${passY}"
                  stroke="var(--success-color)" stroke-dasharray="4" opacity="0.3"/>
            <text x="${w-pad+5}" y="${passY+4}" fill="var(--success-color)" font-size="10" opacity="0.5">70%</text>
            <polyline fill="none" stroke="var(--primary-color)" stroke-width="2.5"
                      stroke-linejoin="round" points="${polyline}"/>
            ${points.map(p => `
                <circle cx="${p.x}" cy="${p.y}" r="4"
                        fill="${p.passed ? 'var(--success-color)' : 'var(--danger-color)'}"
                        stroke="var(--card-bg)" stroke-width="2"/>
            `).join('')}
        </svg>
    `;
}

function renderRadarChart(history) {
    const container = document.getElementById('radar-chart-svg');

    // Calcular stats por dominio
    const domainStats = {};
    history.forEach(h => {
        if (!h.questionIds || !h.userAnswers) return;
        // Necesitamos acceso a las preguntas para obtener el dominio
        // Usar el banco de preguntas global
        const allQ = typeof window.ALL_QUESTIONS !== 'undefined' ? window.ALL_QUESTIONS : [];
        h.questionIds.forEach((qId, idx) => {
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const domain = q.domain || 'General';
            if (!domainStats[domain]) domainStats[domain] = { total: 0, correct: 0 };
            domainStats[domain].total++;
            if (h.userAnswers[idx] && h.userAnswers[idx].isCorrect) {
                domainStats[domain].correct++;
            }
        });
    });

    const domains = Object.entries(domainStats);
    if (domains.length < 3) {
        container.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Necesitas datos en al menos 3 dominios</p>';
        return;
    }

    // Radar chart SVG
    const size = 250;
    const cx = size / 2, cy = size / 2, r = 90;
    const n = domains.length;
    const angleStep = (2 * Math.PI) / n;

    // Puntos del poligono de datos
    const dataPoints = domains.map(([name, stats], i) => {
        const pct = stats.total > 0 ? stats.correct / stats.total : 0;
        const angle = -Math.PI / 2 + i * angleStep;
        return {
            x: cx + r * pct * Math.cos(angle),
            y: cy + r * pct * Math.sin(angle),
            labelX: cx + (r + 25) * Math.cos(angle),
            labelY: cy + (r + 25) * Math.sin(angle),
            name: name.length > 15 ? name.substring(0, 15) + '...' : name,
            pct: Math.round(pct * 100)
        };
    });

    // Circulos concentricos (25%, 50%, 75%, 100%)
    const gridCircles = [0.25, 0.5, 0.75, 1].map(p => `
        <circle cx="${cx}" cy="${cy}" r="${r * p}" fill="none"
                stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="${p < 1 ? '2' : '0'}"/>
    `).join('');

    // Lineas radiales
    const gridLines = domains.map((_, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const ex = cx + r * Math.cos(angle);
        const ey = cy + r * Math.sin(angle);
        return `<line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="var(--border-color)" stroke-width="0.5"/>`;
    }).join('');

    // Poligono de datos
    const polygon = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

    // Labels
    const labels = dataPoints.map(p => `
        <text x="${p.labelX}" y="${p.labelY}" text-anchor="middle"
              font-size="9" font-weight="600" fill="var(--text-muted)">${p.name}</text>
        <text x="${p.labelX}" y="${p.labelY + 12}" text-anchor="middle"
              font-size="8" font-weight="700" fill="var(--primary-color)">${p.pct}%</text>
    `).join('');

    container.innerHTML = `
        <svg width="100%" height="${size}" viewBox="0 0 ${size} ${size}" style="overflow:visible;">
            ${gridCircles}
            ${gridLines}
            <polygon points="${polygon}" fill="rgba(79,110,247,0.15)" stroke="var(--primary-color)" stroke-width="2"/>
            ${dataPoints.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3" fill="var(--primary-color)"/>`).join('')}
            ${labels}
        </svg>
    `;
}

function renderRecommendation(history) {
    const container = document.getElementById('dashboard-recommendation');

    // Encontrar el dominio mas debil
    const domainStats = {};
    const allQ = typeof window.ALL_QUESTIONS !== 'undefined' ? window.ALL_QUESTIONS : [];

    history.forEach(h => {
        if (!h.questionIds || !h.userAnswers) return;
        h.questionIds.forEach((qId, idx) => {
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const domain = q.domain || 'General';
            if (!domainStats[domain]) domainStats[domain] = { total: 0, correct: 0 };
            domainStats[domain].total++;
            if (h.userAnswers[idx] && h.userAnswers[idx].isCorrect) domainStats[domain].correct++;
        });
    });

    const weakest = Object.entries(domainStats)
        .filter(([_, s]) => s.total >= 3) // Al menos 3 intentos
        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));

    if (weakest.length === 0) {
        container.innerHTML = '<strong>Sigue practicando</strong> para obtener recomendaciones personalizadas.';
        return;
    }

    const worst = weakest[0];
    const worstPct = Math.round((worst[1].correct / worst[1].total) * 100);

    container.innerHTML = `
        <strong>Recomendacion:</strong> Tu area mas debil es <strong>${worst[0]}</strong>
        con ${worstPct}% de acierto. Te recomiendo practicar ese dominio antes de intentar el examen simulado.
    `;
}
```

### Donde conectar
1. Agregar un boton "Dashboard" en el header o menu principal
2. `onclick` llama `renderDashboard()`
3. Opcionalmente, renderizar automaticamente cuando hay 3+ intentos en el historial

### Verificacion
- [ ] KPIs calculan correctamente del historial
- [ ] Trend chart muestra puntos verdes (aprobado) y rojos (reprobado)
- [ ] Radar chart se genera con 3+ dominios
- [ ] Recomendacion identifica el area mas debil
- [ ] Responsive: charts se apilan en movil
- [ ] Dark mode funciona (SVG usa var() para colores)

---

## F6: RACHA DIARIA (STREAKS)

### Que hace
Muestra cuantos dias consecutivos el usuario ha practicado. Incentiva el habito diario de estudio.

### Archivos a modificar

**hero_data.js** — Agregar logica de streak:

```javascript
// Agregar dentro de HeroManager:

trackDailyActivity: function() {
    const today = new Date().toISOString().split('T')[0]; // "2026-04-02"
    const streakData = JSON.parse(localStorage.getItem('dailyStreak') || '{}');

    // Si ya se registro hoy, no hacer nada
    if (streakData.lastDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (streakData.lastDate === yesterday) {
        // Dia consecutivo
        streakData.currentStreak = (streakData.currentStreak || 0) + 1;
    } else if (streakData.lastDate !== today) {
        // Se rompio la racha
        streakData.currentStreak = 1;
    }

    streakData.lastDate = today;
    streakData.bestStreak = Math.max(streakData.bestStreak || 0, streakData.currentStreak);

    localStorage.setItem('dailyStreak', JSON.stringify(streakData));
},

getStreakData: function() {
    const data = JSON.parse(localStorage.getItem('dailyStreak') || '{}');
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    // Si no practico hoy ni ayer, la racha esta en 0
    if (data.lastDate !== today && data.lastDate !== yesterday) {
        return { currentStreak: 0, bestStreak: data.bestStreak || 0 };
    }

    return {
        currentStreak: data.currentStreak || 0,
        bestStreak: data.bestStreak || 0
    };
}
```

**index.html** — Mostrar streak en el header o perfil card:

```html
<!-- Agregar dentro del menu-profile-card o header -->
<div id="streak-display" class="streak-widget">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
    <span id="streak-count">0</span>
    <span class="streak-label">dias</span>
</div>
```

**styles.css**:

```css
/* =============================================
   F6: DAILY STREAK
   ============================================= */
.streak-widget {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--warning-light);
    color: var(--warning-color);
    padding: 4px 12px;
    border-radius: var(--radius-full);
    font-weight: 700;
    font-size: 0.85rem;
}

.streak-label {
    font-weight: 500;
    font-size: 0.78rem;
    opacity: 0.8;
}

.streak-widget.on-fire {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.15));
    color: var(--danger-color);
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
}
```

### Donde conectar
1. Llamar `HeroManager.trackDailyActivity()` cada vez que el usuario contesta una pregunta (dentro de `checkAnswer()`)
2. Llamar `HeroManager.getStreakData()` para actualizar el display al cargar la pagina
3. Agregar clase `.on-fire` si la racha es >= 7 dias

### localStorage
- Key nueva: `dailyStreak`
- Estructura: `{ lastDate: "2026-04-02", currentStreak: 5, bestStreak: 12 }`

---

## F7: MODO OFFLINE COMPLETO (PWA)

### Que hace
Permite usar la app completa sin conexion a internet. Todas las preguntas, assets y logica se cachean en el dispositivo.

### Archivo a modificar: `sw.js`

```javascript
// =============================================
// F7: ENHANCED SERVICE WORKER
// =============================================

const CACHE_NAME = 'data-dojo-v2';

// Lista completa de assets a cachear en install
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './hero_data.js',
    './manifest.json',
    './app_icon.png',
    // Bancos de preguntas
    './questions.js',
    './questions_databricks.js',
    './questions_databricks_fundamentals.js',
    './questions_unir_viz.js',
    './questions_unir_herr.js',
    './questions_unah_tesis.js',
    // Datos de estudio
    './study_data.js',
    './study_databricks.js',
    './study_databricks_fundamentals.js',
    './study_databricks_urgent.js',
    './study_unir_viz.js',
    './study_unir_herr.js',
    './study_unah_tesis.js',
    // Flashcards
    './flashcards_databricks.js',
    './flashcards_unir_viz.js',
    './flashcards_unir_herr.js',
    './flashcards_unah_tesis.js',
    // Otros
    './conceptos_databricks.js',
    './personajes_unir_viz.js',
    './translations_databricks_es.js',
    './translate_toggle.js',
    './supabase-sync.js',
    './marked.min.js',
    // Modulos de estudio HTML
    './databricks_study_module.html',
    // Fuentes (Google Fonts se cachea al primer load)
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Estrategia: Cache First, Network Fallback
// (Para una app de quiz, el contenido no cambia frecuentemente)
self.addEventListener('fetch', event => {
    // Ignorar requests de Chrome extensions, analytics, etc.
    if (!event.request.url.startsWith(self.location.origin) &&
        !event.request.url.includes('fonts.googleapis.com') &&
        !event.request.url.includes('fonts.gstatic.com')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) {
                // Devolver cache inmediatamente, actualizar en background
                const fetchPromise = fetch(event.request).then(response => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, clone);
                        });
                    }
                    return response;
                }).catch(() => {}); // Ignorar errores de red (estamos offline)

                return cached;
            }

            // No esta en cache, intentar red
            return fetch(event.request).then(response => {
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, clone);
                    });
                }
                return response;
            });
        })
    );
});
```

### Verificacion
- [ ] En DevTools > Application > Service Worker, el SW esta activo
- [ ] En DevTools > Application > Cache Storage, todos los assets estan listados
- [ ] Desactivar red (DevTools > Network > Offline) y la app funciona completa
- [ ] Las preguntas cargan, el quiz funciona, resultados se guardan en localStorage
- [ ] Al reconectar, el SW actualiza los assets en background

---

## F8: SONIDOS DE FEEDBACK

### Que hace
Sonidos cortos y sutiles para:
- Respuesta correcta (ding positivo)
- Respuesta incorrecta (buzz suave)
- Level up / nuevo cinturon (fanfarria)
- Toggle para activar/desactivar (ya existe `soundMuted` en localStorage)

### Archivos necesarios
Necesitas 3 archivos de audio cortos (< 50KB cada uno). Opciones:
1. **Generar con Web Audio API** (sin archivos externos) — RECOMENDADO
2. Descargar sonidos libres de sitios como freesound.org

### script.js — Generador de sonidos con Web Audio API:

```javascript
// =============================================
// F8: SOUND FEEDBACK (Web Audio API — sin archivos)
// =============================================

const SoundFX = {
    ctx: null,

    init() {
        // Crear AudioContext solo una vez, al primer click del usuario
        // (Browsers requieren user gesture para crear AudioContext)
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    isMuted() {
        return localStorage.getItem('soundMuted') === 'true';
    },

    playCorrect() {
        if (this.isMuted()) return;
        this.init();
        const ctx = this.ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
    },

    playIncorrect() {
        if (this.isMuted()) return;
        this.init();
        const ctx = this.ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.25);
    },

    playLevelUp() {
        if (this.isMuted()) return;
        this.init();
        const ctx = this.ctx;
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.3);
            osc.start(ctx.currentTime + i * 0.12);
            osc.stop(ctx.currentTime + i * 0.12 + 0.3);
        });
    }
};

// Conectar a las funciones existentes:
// En checkAnswer() — despues de determinar si es correcta:
//   if (isCorrect) SoundFX.playCorrect();
//   else SoundFX.playIncorrect();
//
// En HeroManager.checkLevelUp() — cuando cambia de cinturon:
//   SoundFX.playLevelUp();
```

### Donde conectar
1. En `checkAnswer()` (~linea 2124): despues de evaluar la respuesta, llamar `SoundFX.playCorrect()` o `SoundFX.playIncorrect()`
2. En `HeroManager.checkLevelUp()`: si hay cambio de cinturon, llamar `SoundFX.playLevelUp()`
3. El toggle ya existe (`soundMuted` en localStorage). Verificar que el boton de mute ya cambia este valor.

### Verificacion
- [ ] Sonido de "ding" al responder correcto
- [ ] Sonido de "buzz" al responder incorrecto
- [ ] Fanfarria al subir de cinturon
- [ ] El toggle de mute silencia todo
- [ ] No hay errores en la consola (AudioContext policy)
- [ ] Los sonidos son sutiles, no intrusivos

---

## ORDEN DE IMPLEMENTACION RECOMENDADO

```
SEMANA 1:
  Dia 1-2: F1 (Repaso de Errores) — Es la mejora con mayor impacto en aprendizaje
  Dia 2-3: F2 (Practica por Categoria) — Complementa F1

SEMANA 2:
  Dia 1-3: F3 (Examen Simulado con Timer) — La experiencia de examen real
  Dia 3-4: F4 (Certificado PNG) — Satisfaccion al aprobar

SEMANA 3:
  Dia 1-3: F5 (Dashboard) — Vision global del progreso
  Dia 3-4: F6 (Streaks) — Habito de estudio

CUANDO SE DESEE:
  F7 (Offline PWA) — Solo si se necesita estudiar sin internet
  F8 (Sonidos) — Enhancement de experiencia
```

---

## REGLAS PARA TODA IMPLEMENTACION

1. **CERO EMOJIS como iconos** — Todo icono es SVG inline con `fill="none" stroke="currentColor"`
2. **Usar variables CSS existentes** — `var(--primary-color)`, `var(--card-bg)`, `var(--border-color)`, etc.
3. **Dark mode automatico** — Si usas variables, el dark mode funciona sin CSS extra
4. **Backup antes de cada cambio** — Copiar el archivo actual a `backups/` antes de modificar
5. **Probar en ambos temas** — Verificar light y dark mode
6. **Probar en movil** — Verificar responsive (Chrome DevTools → Toggle Device)
7. **No romper funcionalidad existente** — Cada feature es ADITIVA, no modifica flujos existentes

---

## RESUMEN DE ARCHIVOS A MODIFICAR POR FUNCIONALIDAD

| Funcionalidad | index.html | script.js | styles.css | hero_data.js | sw.js |
|--------------|:----------:|:---------:|:----------:|:------------:|:-----:|
| F1 Repaso Errores | ✏️ | ✏️ | ✏️ | — | — |
| F2 Por Categoria | ✏️ | ✏️ | ✏️ | — | — |
| F3 Examen Timer | ✏️ | ✏️ | ✏️ | — | — |
| F4 Certificado | — | ✏️ | — | — | — |
| F5 Dashboard | ✏️ | ✏️ | ✏️ | — | — |
| F6 Streaks | ✏️ | — | ✏️ | ✏️ | — |
| F7 Offline | — | — | — | — | ✏️ |
| F8 Sonidos | — | ✏️ | — | — | — |

---

*Plan de Mejoras Funcionales V1*
*8 funcionalidades detalladas con codigo de referencia*
*Autor: Claude Code*
*Fecha: 2026-04-02*
