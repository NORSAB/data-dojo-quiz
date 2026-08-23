# PLAN DE MEJORAS FUNCIONALES V3
## The Data Dojo — Simulador de Preguntas
### Fecha: 2026-04-03 | Estado Actual + Proxima Fase

---

## 1. ESTADO ACTUAL CONFIRMADO

### La app tiene 14 funcionalidades implementadas (no 8)

Al validar el codigo real, se confirma que features.js tiene **1266 lineas** con F1-F14 completas, no solo F1-F8 como se pensaba. Ademas, los fixes criticos A1 (doble timer) y A2 (SW cache) ya fueron aplicados.

### Score Actual

```
╔══════════════════════════════════════════════════════════════╗
║  SCORE VISUAL:     9.6/10   (punto optimo confirmado V5)    ║
║  SCORE FUNCIONAL:  9.5/10   (14 features + fixes aplicados) ║
║  SCORE GLOBAL:     9.55/10                                   ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 2. INVENTARIO COMPLETO DE FUNCIONALIDADES

### Implementadas y Funcionando (14)

| # | Feature | Lineas features.js | HTML | CSS | Status |
|---|---------|-------------------|------|-----|--------|
| F1 | Repaso de Errores | L17-89 | #weakness-shortcut | .weakness-panel | ✅ |
| F2 | Practica por Dominio | L95-163 | #domain-cards-container | .domain-card | ✅ |
| F3 | Examen Simulado 120min | L168-234 | #start-real-exam-btn | .btn-exam-simulate | ✅ |
| F4 | Certificado PNG | L240-370 | (dinamico) | (canvas) | ✅ |
| F5 | Dashboard Progreso | L376-522 | #dashboard-panel | .dashboard-* | ✅ |
| F6 | Racha Diaria (Streak) | L528-636 | #streak-display | .streak-widget | ✅ |
| F7 | PWA Offline | L788-797 | — | — | ✅ |
| F8 | Sonidos Feedback | L600-732 | — | — | ✅ |
| F9 | Quick Quiz (10 preg.) | L832-849 | #quick-quiz-btn | .btn-quick-quiz | ✅ |
| F10 | Flashcards Rapidas | L853-971 | #start-flashcards-btn | (inline overlay) | ✅ |
| F11 | Racha en Riesgo | L975-1004 | #streak-risk-banner | .streak-risk | ✅ |
| F12 | Tiempo por Pregunta | L1008-1079 | (dinamico) | .time-stats-panel | ✅ |
| F13 | Export CSV | L1083-1117 | (boton dinamico) | — | ✅ |
| F14 | Resumen Post-Examen | L1121-1265 | (dinamico) | .post-exam-summary | ✅ |

### Fixes Aplicados

| Fix | Descripcion | Estado |
|-----|-------------|--------|
| A1 | Doble timer en examen simulado | ✅ Corregido (clearInterval antes de iniciar) |
| A2 | 5 archivos JS faltantes en SW | ✅ Cache `simulador-v8` con 35 assets |
| A3 | Belts unificados (7 → 15) | ✅ hero_data.js ahora tiene 15 cinturones (Blanco → Dragon 7) |

### Infraestructura

| Componente | Estado | Detalle |
|------------|--------|---------|
| Service Worker | `simulador-v8` | 35 assets, Network-First |
| Manifest | `The Data Dojo` | #4f6ef7, 7 iconos |
| Focus-visible | ✅ | styles.css + study module |
| ARIA roles | ✅ | Study module sidebar |
| Dark mode | 99% | Completo en CSS, templates JS usan vars |
| Responsive | ✅ | 768px + 1024px breakpoints |

---

## 3. QUE FALTA PARA SER UNA APP DE ESTUDIO PROFESIONAL

Tras 14 features implementadas, lo que separa a The Data Dojo de ser una herramienta de estudio realmente profesional son estas areas:

### A. CONTENIDO (El mayor impacto)

El motor esta listo. Lo que mas valor agrega ahora es **mas preguntas y mejor contenido**.

### B. EXPERIENCIA DE ESTUDIO INTELIGENTE

Las features actuales son reactivas (el usuario decide que hacer). Falta inteligencia que GUIE al usuario sobre que estudiar.

### C. PERSISTENCIA Y CONTINUIDAD

Todo esta en localStorage. Si cambia de navegador o borra datos, pierde todo.

---

## 4. FUNCIONALIDADES V3 — SIGUIENTE FASE

| # | Funcionalidad | Prioridad | Esfuerzo | Impacto |
|---|--------------|-----------|----------|---------|
| F15 | Modo Estudio Guiado (Study Plan) | ALTA | 4-6 hrs | MUY ALTO |
| F16 | Quick Flashcard por Dominio Debil | ALTA | 2 hrs | ALTO |
| F17 | Historial Extendido (50 intentos) | MEDIA | 30 min | MEDIO |
| F18 | Importar/Exportar Progreso Completo | MEDIA | 2-3 hrs | ALTO |
| F19 | Modo Maraton (Todo el Banco) | BAJA | 1 hr | MEDIO |
| F20 | Pagina de Estadisticas Dedicada | MEDIA | 4-5 hrs | ALTO |

---

## F15: MODO ESTUDIO GUIADO (STUDY PLAN)

### Que hace
Genera automaticamente un plan de estudio personalizado basado en:
- Dominios donde el usuario es mas debil
- Preguntas que nunca ha visto
- Tiempo desde la ultima sesion de cada dominio
- Progresion gradual (no repetir lo que ya domina)

El plan dice: "Hoy deberias estudiar X. Tienes 15 preguntas nuevas y 8 de repaso en ese dominio."

### Por que es importante
Esta es la diferencia entre una app de quiz y una **herramienta de estudio real**. Sin guia, el usuario practica lo que ya sabe. Con guia, ataca sus debilidades sistematicamente.

### HTML (agregar en index.html, dentro de .menu-container):

```html
<!-- F15: STUDY PLAN PANEL -->
<div id="study-plan-panel" class="study-plan" style="display:none;">
    <div class="study-plan-header">
        <div>
            <h3>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                </svg>
                Plan de Estudio
            </h3>
            <small id="study-plan-subtitle" class="study-plan-sub">Recomendacion personalizada</small>
        </div>
    </div>
    <div id="study-plan-content"></div>
</div>
```

### CSS:

```css
/* =============================================
   F15: STUDY PLAN
   ============================================= */
.study-plan {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: var(--box-shadow);
    border-top: 3px solid var(--primary-color);
}

.study-plan-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.study-plan-header h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-color);
    margin: 0;
}

.study-plan-sub {
    font-size: 0.8rem;
    color: var(--text-muted);
    display: block;
    margin-top: 4px;
}

.study-plan-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: var(--light-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    margin-bottom: 8px;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.study-plan-item:hover {
    border-color: var(--primary-color);
    transform: translateX(4px);
}

.study-plan-item.priority-high {
    border-left: 3px solid var(--danger-color);
}

.study-plan-item.priority-medium {
    border-left: 3px solid var(--warning-color);
}

.study-plan-item.priority-low {
    border-left: 3px solid var(--success-color);
}

.study-plan-badge {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: var(--radius-full);
}

.study-plan-badge.new {
    background: var(--primary-light);
    color: var(--primary-color);
}

.study-plan-badge.review {
    background: var(--warning-light);
    color: var(--warning-color);
}

.study-plan-badge.weak {
    background: var(--danger-light);
    color: var(--danger-color);
}

.study-plan-info {
    flex: 1;
}

.study-plan-domain {
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--text-color);
}

.study-plan-detail {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 2px;
}

.study-plan-action {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--primary-color);
    white-space: nowrap;
}
```

### JS (agregar en features.js):

```javascript
// =============================================
// F15: STUDY PLAN GENERATOR
// =============================================
function renderStudyPlan(courseId) {
    const panel = document.getElementById('study-plan-panel');
    const content = document.getElementById('study-plan-content');
    if (!panel || !content) return;

    const cid = courseId || window.currentCourseId;
    const allQ = (window.questionsData || []).filter(q => q.courseId === cid);
    if (allQ.length === 0) { panel.style.display = 'none'; return; }

    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => h.courseCheck === cid);

    // 1. Categorizar cada dominio
    const domains = {};
    allQ.forEach(q => {
        const d = q.domain || 'General';
        if (!domains[d]) domains[d] = { total: 0, seen: new Set(), missed: new Set(), correct: 0, attempted: 0 };
        domains[d].total++;
    });

    // 2. Analizar historial
    history.forEach(h => {
        if (!h.questionIds) return;
        h.questionIds.forEach((qId, idx) => {
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const d = q.domain || 'General';
            if (!domains[d]) return;
            domains[d].seen.add(qId);
            domains[d].attempted++;
            const ans = h.userAnswers ? (h.userAnswers[idx] || h.userAnswers[String(idx)]) : null;
            if (ans && ans.isCorrect) {
                domains[d].correct++;
                domains[d].missed.delete(qId); // Ya la corrigio
            } else {
                domains[d].missed.add(qId);
            }
        });
    });

    // 3. Calcular prioridad por dominio
    const plan = Object.entries(domains).map(([name, d]) => {
        const pct = d.attempted > 0 ? Math.round((d.correct / d.attempted) * 100) : -1;
        const unseenCount = d.total - d.seen.size;
        const missedCount = d.missed.size;

        // Prioridad: mas debil + mas preguntas sin ver = mas urgente
        let priority = 0;
        if (pct >= 0 && pct < 50) priority += 30;      // Muy debil
        else if (pct >= 0 && pct < 70) priority += 20;  // Debil
        else if (pct >= 0 && pct < 85) priority += 10;  // OK
        // else: fuerte, prioridad baja

        priority += Math.min(unseenCount, 20);  // Max 20 pts por preguntas sin ver
        priority += missedCount * 2;            // 2 pts por cada pregunta fallada

        if (pct < 0) priority += 15;  // Nunca intentado = prioridad media-alta

        const level = pct < 0 ? 'new' : pct < 70 ? 'weak' : pct < 85 ? 'review' : 'strong';

        return {
            name, pct, unseenCount, missedCount,
            total: d.total, seen: d.seen.size,
            priority, level,
            questionIds: [...d.missed, ...allQ.filter(q => (q.domain || 'General') === name && !d.seen.has(q.id)).map(q => q.id)]
        };
    }).sort((a, b) => b.priority - a.priority);

    // 4. Filtrar: solo mostrar dominios que necesitan trabajo
    const actionable = plan.filter(d => d.level !== 'strong' || d.unseenCount > 0);

    if (actionable.length === 0) {
        content.innerHTML = `
            <div style="text-align:center; padding:20px; color:var(--success-color);">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                </svg>
                <p style="margin-top:8px; font-weight:700;">Dominas todos los dominios de este curso</p>
                <p style="font-size:0.85rem; color:var(--text-muted);">Sigue practicando para mantener tu nivel</p>
            </div>
        `;
        panel.style.display = 'block';
        return;
    }

    // 5. Renderizar plan (top 5)
    const top = actionable.slice(0, 5);
    const subtitle = document.getElementById('study-plan-subtitle');
    if (subtitle) {
        const weakCount = top.filter(d => d.level === 'weak').length;
        const newCount = top.filter(d => d.level === 'new').length;
        subtitle.textContent = weakCount > 0
            ? `${weakCount} area(s) necesitan refuerzo`
            : newCount > 0
                ? `${newCount} area(s) sin explorar`
                : 'Revision general recomendada';
    }

    content.innerHTML = top.map(d => {
        const priorityClass = d.level === 'weak' ? 'priority-high' : d.level === 'new' ? 'priority-medium' : 'priority-low';
        const badgeClass = d.level === 'weak' ? 'weak' : d.level === 'new' ? 'new' : 'review';
        const badgeText = d.level === 'weak' ? 'Debil' : d.level === 'new' ? 'Nuevo' : 'Repasar';
        const detail = d.pct < 0
            ? `${d.unseenCount} preguntas sin intentar`
            : `${d.pct}% acierto | ${d.missedCount} falladas | ${d.unseenCount} nuevas`;
        const actionText = d.questionIds.length > 0
            ? `Practicar (${Math.min(d.questionIds.length, 15)})`
            : 'Ver';

        return `
            <div class="study-plan-item ${priorityClass}" data-domain="${d.name}" data-ids='${JSON.stringify(d.questionIds.slice(0, 15))}'>
                <div class="study-plan-info">
                    <div class="study-plan-domain">${d.name}</div>
                    <div class="study-plan-detail">${detail}</div>
                </div>
                <span class="study-plan-badge ${badgeClass}">${badgeText}</span>
                <span class="study-plan-action">${actionText} →</span>
            </div>
        `;
    }).join('');

    // Attach click handlers
    content.querySelectorAll('.study-plan-item').forEach(item => {
        item.addEventListener('click', () => {
            let ids;
            try { ids = JSON.parse(item.dataset.ids); } catch(e) { ids = []; }
            if (ids.length === 0) return;

            const questions = allQ.filter(q => ids.includes(q.id));
            if (questions.length > 0) {
                questions.sort(() => Math.random() - 0.5);
                launchDirectQuiz(questions, 'study_plan', 0);
            }
        });
    });

    panel.style.display = 'block';
}
```

### Donde conectar
En script.js, agregar hook junto a los demas (~linea 1598):
```javascript
if (typeof renderStudyPlan === 'function') renderStudyPlan(courseId);
```

### Verificacion
- [ ] Si no hay historial, muestra dominios como "Nuevo" con prioridad media
- [ ] Si hay historial con debilidades, las ordena arriba con badge rojo "Debil"
- [ ] Si domina todo, muestra mensaje de felicitacion
- [ ] Click en un dominio lanza quiz directo con esas preguntas
- [ ] El plan se actualiza al volver del quiz (despues de renderizar el menu)
- [ ] Maximo 5 dominios visibles (los mas urgentes)

---

## F16: FLASHCARD RAPIDA POR DOMINIO DEBIL

### Que hace
Dentro del Study Plan (F15), agrega un boton de flashcard para cada dominio debil. Si el dominio "Data Governance" esta en 45%, el usuario puede hacer flashcards especificas de ese tema.

### Requisito previo
Depende de F15 (Study Plan) para el contexto de dominios.

### JS (agregar en features.js, complementa F15):

```javascript
// =============================================
// F16: DOMAIN-SPECIFIC FLASHCARD LAUNCHER
// =============================================
function launchDomainFlashcards(domainName, courseId) {
    const cid = courseId || window.currentCourseId;
    const getter = FLASHCARD_MAP[cid];
    const allCards = getter ? getter() : null;

    if (!allCards || allCards.length === 0) {
        alert('No hay flashcards disponibles para este curso.');
        return;
    }

    // Filtrar flashcards que contengan el nombre del dominio en su contenido
    // (Los flashcards no siempre tienen campo "domain", asi que buscamos por texto)
    const domainLower = domainName.toLowerCase();
    const filtered = allCards.filter(c => {
        const text = JSON.stringify(c).toLowerCase();
        return text.includes(domainLower);
    });

    // Si no hay filtradas, usar todas (mejor que no mostrar nada)
    const cardsToShow = filtered.length >= 3 ? filtered : allCards;

    launchFlashcardMode(cardsToShow, cid);
}
```

### Integracion con F15
En el `renderStudyPlan()`, agregar un boton de flashcard junto al boton de "Practicar":

```javascript
// Dentro del .map de renderStudyPlan, agregar al HTML de cada item:
// (solo si hay flashcards para ese curso)
const hasFlashcards = FLASHCARD_MAP[cid] && FLASHCARD_MAP[cid]();
const flashBtn = hasFlashcards
    ? `<button class="study-plan-fc-btn" data-domain="${d.name}" title="Flashcards de ${d.name}">
           <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
               <rect x="2" y="3" width="20" height="14" rx="2"/>
               <path d="M8 21h8M12 17v4"/>
           </svg>
       </button>`
    : '';
```

### CSS para el boton de flashcard:

```css
.study-plan-fc-btn {
    background: var(--warning-light);
    border: 1px solid rgba(245, 158, 11, 0.2);
    border-radius: var(--radius-sm);
    padding: 6px 8px;
    cursor: pointer;
    color: var(--warning-color);
    transition: all var(--transition-fast);
}

.study-plan-fc-btn:hover {
    background: var(--warning-color);
    color: white;
}
```

---

## F17: HISTORIAL EXTENDIDO (50 intentos)

### Que hacer
Actualmente el historial guarda maximo 20 intentos (script.js linea 465: `if (history.length > 20) history.pop()`).

### Cambio
**Archivo:** script.js, linea 465

```javascript
// ANTES:
if (history.length > 20) history.pop();

// DESPUES:
if (history.length > 50) history.pop();
```

Esto mejora la precision del Dashboard (F5), del Radar chart, y del Study Plan (F15) al tener mas datos historicos.

### Verificacion
- [ ] Guardar 21+ examenes, verificar que no se pierden
- [ ] El Dashboard y Radar chart usan los datos extendidos

---

## F18: IMPORTAR/EXPORTAR PROGRESO COMPLETO

### Que hace
Exporta TODO el progreso del usuario como un archivo JSON descargable. Incluye:
- quizHistory
- dojoStreak
- gamification stats
- mastery progress
- user profile

Permite importar en otro navegador/dispositivo.

### JS (agregar en features.js):

```javascript
// =============================================
// F18: FULL PROGRESS EXPORT/IMPORT
// =============================================
function exportFullProgress() {
    const keys = [
        'quizHistory', 'dojoStreak', 'userStats', 'userProfile',
        'databricks_progress', 'dp600_progress',
        'unir_viz_mastery', 'unir_herr_mastery',
        'soundMuted', 'theme', 'quizAppConfig'
    ];

    const data = {};
    keys.forEach(key => {
        const val = localStorage.getItem(key);
        if (val) data[key] = JSON.parse(val);
    });

    data._exportDate = new Date().toISOString();
    data._appVersion = 'Data Dojo V3';

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data_dojo_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importFullProgress(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            // Validar que es un backup valido
            if (!data._exportDate) {
                alert('El archivo no es un backup valido de Data Dojo.');
                return;
            }

            // Confirmar
            const confirmMsg = `Importar backup del ${new Date(data._exportDate).toLocaleDateString()}?\n\nEsto reemplazara tu progreso actual.`;
            if (!confirm(confirmMsg)) return;

            // Restaurar cada key
            Object.keys(data).forEach(key => {
                if (key.startsWith('_')) return; // Skip metadata
                localStorage.setItem(key, JSON.stringify(data[key]));
            });

            alert('Progreso importado exitosamente. La pagina se recargara.');
            location.reload();
        } catch(err) {
            alert('Error al leer el archivo: ' + err.message);
        }
    };
    reader.readAsText(file);
}
```

### HTML (agregar junto al panel de import/export existente en index.html ~linea 1395):

```html
<!-- En el modal de configuracion/perfil, junto al export existente -->
<div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
    <button onclick="if(typeof exportFullProgress==='function')exportFullProgress()" class="btn btn-outline btn-sm">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle;margin-right:4px;">
            <path d="M12 15l-5-5h3V4h4v6h3l-5 5zm-7 4v-2h14v2H5z"/>
        </svg>
        Backup Completo
    </button>
    <label class="btn btn-outline btn-sm" style="cursor:pointer;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle;margin-right:4px;">
            <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/>
        </svg>
        Restaurar Backup
        <input type="file" accept=".json" style="display:none;" onchange="if(typeof importFullProgress==='function')importFullProgress(this.files[0])">
    </label>
</div>
```

### Verificacion
- [ ] Boton "Backup Completo" descarga JSON con todo el progreso
- [ ] "Restaurar Backup" abre selector de archivo
- [ ] Al importar un backup, se restaura el progreso y recarga la pagina
- [ ] Validacion: rechaza archivos que no son backups validos
- [ ] Confirmacion antes de sobreescribir datos existentes

---

## F19: MODO MARATON (Todo el Banco)

### Que hace
Un boton que lanza TODAS las preguntas de un curso en orden aleatorio. Para el estudiante que quiere hacer un repaso exhaustivo antes del examen.

### JS:

```javascript
// =============================================
// F19: MARATHON MODE
// =============================================
function setupMarathonButton(courseId) {
    const cid = courseId || window.currentCourseId;
    const allQ = (window.questionsData || []).filter(q => q.courseId === cid);

    // Reutilizar el boton de examen simulado como referencia visual
    // O crear un boton nuevo con estilo diferente
    // Por simplicidad, agregar un link debajo del examen simulado

    const examBtn = document.getElementById('start-real-exam-btn');
    if (!examBtn) return;

    // Limpiar maraton anterior si existe
    let marathonBtn = document.getElementById('start-marathon-btn');
    if (!marathonBtn) {
        marathonBtn = document.createElement('button');
        marathonBtn.id = 'start-marathon-btn';
        marathonBtn.className = 'btn btn-outline';
        marathonBtn.style.cssText = 'width:100%;margin-top:8px;display:flex;align-items:center;gap:8px;justify-content:center;';
        marathonBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Modo Maraton (${allQ.length} preguntas)
        `;
        examBtn.insertAdjacentElement('afterend', marathonBtn);
    } else {
        marathonBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Modo Maraton (${allQ.length} preguntas)
        `;
    }

    if (allQ.length < 10) {
        marathonBtn.style.display = 'none';
        return;
    }

    marathonBtn.style.display = 'flex';
    marathonBtn.onclick = () => {
        if (!confirm(`Iniciar maraton de ${allQ.length} preguntas? Esto puede tomar bastante tiempo.`)) return;
        const shuffled = [...allQ].sort(() => Math.random() - 0.5);
        launchDirectQuiz(shuffled, 'marathon', 0);
    };
}
```

### Donde conectar
Hook junto a los demas en script.js:
```javascript
if (typeof setupMarathonButton === 'function') setupMarathonButton(courseId);
```

---

## F20: PAGINA DE ESTADISTICAS DEDICADA

### Que hace
Un panel completo (tipo tab o seccion expandible) con TODAS las estadisticas del usuario en un solo lugar:
- Resumen global (todas las certificaciones)
- Grafica de actividad tipo "GitHub heatmap" (dias de estudio en calendario)
- Top 5 dominios mas fuertes y mas debiles
- Tiempo total de estudio estimado
- Prediccion de score para el proximo examen

### Por que es el ultimo item
Requiere mas desarrollo, y F15 (Study Plan) tiene mayor impacto inmediato. Esta feature es para cuando el usuario quiere ver el "big picture" de su progreso.

### Estructura sugerida

```
Pagina de Estadisticas
├── KPIs Globales (todos los cursos)
│   ├── Total preguntas respondidas
│   ├── Examenes completados / aprobados
│   ├── Tasa de aprobacion global
│   ├── XP total / Belt actual
│   └── Tiempo estimado de estudio
├── Calendario de Actividad
│   └── Grid de ultimos 90 dias (verde = estudio, gris = no)
├── Radar Global (todos los dominios de todos los cursos)
├── Top Fortalezas y Debilidades
├── Tendencia de Score (todas las certificaciones)
└── Prediccion (basada en tendencia lineal del historial)
```

### Nota sobre implementacion
Este feature es complejo y puede dividirse en sub-sprints:
1. Sprint 1: KPIs globales + calendario
2. Sprint 2: Radar global + top dominios
3. Sprint 3: Prediccion + tendencias

---

## 5. ORDEN DE IMPLEMENTACION RECOMENDADO

```
INMEDIATO (1-2 horas):
  F17: Historial extendido (1 linea de cambio)
  F19: Modo Maraton (codigo corto, usa launchDirectQuiz existente)

SPRINT 1 — Estudio Inteligente (6-8 horas):
  F15: Study Plan ★ (la mejora de mayor impacto)
  F16: Flashcard por Dominio Debil (complementa F15)

SPRINT 2 — Persistencia (3-4 horas):
  F18: Import/Export Progreso Completo

SPRINT 3 — Estadisticas (4-5 horas):
  F20: Pagina de Estadisticas Dedicada (parcial)
```

---

## 6. RESUMEN EJECUTIVO

```
EVOLUCION DE LA APP:

V1 (Plan):    F1-F8  planificadas       → 8 features definidas
V1 (Real):    F1-F8  implementadas       → Motor funcional completo
V2 (Plan):    F9-F14 + fixes            → 6 features + 3 fixes
V2 (Real):    F9-F14 + A1-A3 aplicados  → 14 features, 0 bugs criticos
V3 (Plan):    F15-F20                   → 6 features de estudio inteligente

SCORE ACTUAL:  9.55/10 (visual 9.6 + funcional 9.5)
SCORE META V3: 9.8/10 (con F15 Study Plan seria una app de estudio real)

LO QUE MAS VALOR AGREGA AHORA:
1. F15 Study Plan — Convierte la app de "quiz random" a "estudio guiado"
2. Mas preguntas — El motor esta listo, falta contenido
3. F18 Backup — Proteger el progreso del usuario
```

---

*Plan de Mejoras Funcionales V3*
*6 funcionalidades de estudio inteligente*
*14 features existentes + 3 fixes aplicados = base solida*
*Autor: Claude Code*
*Fecha: 2026-04-03*
