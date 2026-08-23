# ULTIMO PLAN AUDITORIA V1
## The Data Dojo — Estado Actual Completo + Plan de Correcciones por Fases
### Fecha: 2026-04-05

---

## 1. ALCANCE

Archivos auditados:
- `features.js` (1916 lineas) — F1-F20 + utilidades
- `script.js` (4710+ lineas) — Motor principal del quiz (IIFE)
- `index.html` (~1760 lineas) — Estructura HTML
- `styles.css` (~3500 lineas) — Sistema visual completo
- `hero_data.js` (233 lineas) — Gamificacion, cinturones, perfil
- `supabase-sync.js` (315 lineas) — Cloud sync
- `sw.js` (79 lineas) — Service Worker PWA

Esta auditoria NO modifica codigo. Solo documenta hallazgos y plan.

---

## 2. CALIFICACION GLOBAL

```
╔══════════════════════════════════════════════════════════════════════╗
║  DIMENSION              SCORE    NOTAS                              ║
╠══════════════════════════════════════════════════════════════════════╣
║  Funcionalidad          9.5/10   20/20 features implementadas       ║
║  Visual/CSS             9.6/10   Design system con variables, dark   ║
║  Arquitectura/Codigo    6.8/10   Deuda tecnica, duplicaciones        ║
║  PWA/Offline            9.0/10   SW v13, Network-First, 35 assets    ║
║  Persistencia           7.5/10   Local + Cloud, pero fragil          ║
║  Accesibilidad          6.0/10   focus-visible ok, faltan ARIA       ║
║                                                                      ║
║  SCORE PRODUCTO:        9.3/10   (lo que el usuario experimenta)     ║
║  SCORE INGENIERIA:      7.0/10   (lo que un dev encuentra al leer)   ║
║  SCORE GLOBAL:          8.2/10                                       ║
╚══════════════════════════════════════════════════════════════════════╝
```

**Contexto del score:**
- La auditoria externa dio 6.8/10 midiendo calidad de codigo/arquitectura → JUSTO
- Mi auditoria V4 dio 9.2/10 midiendo funcionalidad implementada → JUSTO
- Ambas miden cosas distintas. El score global 8.2 pondera ambas.

---

## 3. LO QUE YA ESTA BIEN (no tocar)

### Funcionalidades Implementadas y Verificadas (20/20)

| # | Feature | Estado | Lineas features.js |
|---|---------|--------|-------------------|
| F1 | Repaso de Errores | OK | L29-101 |
| F2 | Practica por Dominio | OK | L107-175 |
| F3 | Examen Simulado 120min | OK | L181-246 |
| F4 | Certificado PNG | OK | L252-382 |
| F5 | Dashboard KPI + Radar + Trend | OK | L388-575 |
| F6 | Racha Diaria | OK | L594-648 |
| F7 | PWA Offline | OK | script.js L4344-4351 |
| F8 | Sonidos Feedback | OK | L731-797 |
| F9 | Quick Quiz 10 preg. | OK | L890-905 |
| F10 | Flashcards Rapidas | OK | L910-1027 |
| F11 | Racha en Riesgo | OK | L1034-1061 |
| F12 | Tiempo por Pregunta | OK | L1064-1135 |
| F13 | Export CSV | OK | L1139-1173 |
| F14 | Resumen Post-Examen | OK | L1177-1321 |
| F15 | Plan de Estudio Guiado | OK | L1326-1480 |
| F16 | Flashcard por Dominio | OK | L1490-1512 |
| F17 | Historial Extendido 50 | OK | script.js L475 |
| F18 | Backup/Restore JSON | OK | L1517-1576 |
| F19 | Modo Maraton | OK | L1579-1617 |
| F20 | Pagina Estadisticas | OK | L1622-1916 |

### Fixes Aplicados y Verificados

| Fix | Descripcion | Estado |
|-----|-------------|--------|
| A1 | Doble timer en examen simulado | APLICADO — clearInterval en _setQuizState |
| A2 | SW cache archivos faltantes | APLICADO — sw.js v13, 35 assets |
| A3 | Belts unificados 15 niveles | APLICADO — hero_data.js |
| B2 | Timezone en dateDiffDays | APLICADO — `+ 'T00:00:00'` fuerza hora local |
| B3 | trackAction inexistente | APLICADO — Linea eliminada con comentario |
| B4 | Timezone en streak risk | APLICADO — Usa getLocalISODate() |
| B5 | q.prompt en F12 labels | APLICADO — `q.prompt \|\| q.question` |
| D3 | hideFeaturePanels incompleto | APLICADO — Incluye study-plan-panel + marathon |
| M1 | getDomainStats centralizado | APLICADO — Funcion utilidad L654-688 |

### Buenas Practicas Existentes
- Validacion y deduplicacion de preguntas al inicio (script.js L16-90)
- Modularizacion de contenido por curso (archivos separados)
- SVG inline consistente (sin emojis como iconos)
- Sistema CSS con variables globales (:root)
- Dark mode completo con [data-theme="dark"]
- Responsive a 768px + 1024px breakpoints
- focus-visible con outline
- SW Network-First con fallback a cache
- Build timestamp en cache name (simulador-v13-20260405b)
- getLocalISODate() evita problemas de timezone
- Lazy init de AudioContext

---

## 4. HALLAZGOS DEL ESTADO ACTUAL

### Clasificacion por riesgo de correccion

Cada hallazgo tiene dos scores:
- **Severidad**: Que tan grave es el problema
- **Riesgo de correccion**: Que tan peligroso es tocarlo

---

### H1: Doble ruta de inicio del quiz
**Severidad:** Media | **Riesgo de correccion:** MUY ALTO

**Evidencia:**
- Ruta A (buena): `startCourse()` filtra por idioma, rango, dominio, busqueda → `currentPool` → script.js L1342-1601
- Ruta B (legacy): `window.startQuizAction` (L4541) re-filtra desde `window.questionsData` completo → puede ignorar idioma y rango

**Problema real:**
La ruta B puede saltarse filtros del config modal. Pero la ruta B solo se activa cuando el boton "Iniciar" del config modal usa este handler global.

**Mi evaluacion:**
- Las features F1, F2, F3, F9, F15, F19 usan `launchDirectQuiz()` → `_setQuizState()` que NO pasa por ninguna de las dos rutas. Esa via es limpia y funciona.
- La ruta B es legacy pero funciona para el caso base (usuario selecciona curso → configura → inicia).
- **NO TOCAR.** Refactorizar esto toca el IIFE de 4700 lineas. El riesgo de regresion es enorme y el beneficio es bajo porque las features nuevas ya lo bypasean correctamente.

---

### H2: userAnswers con doble modelo de indexacion
**Severidad:** Media | **Riesgo de correccion:** MUY ALTO

**Evidencia:**
- Se guarda por indice: `userAnswers[currentQuestionIndex]` (L2108-2166)
- Se consulta por id: `userAnswers[q.id]` en review (L417-450)
- Compensacion: double lookup en review (L2649-2660)

**Mi evaluacion:**
- Funciona. El double lookup compensa la inconsistencia.
- El historial se guarda correctamente (verificado en F14 Post-Exam Summary).
- **NO TOCAR.** Cambiar esto requiere modificar selectOption, checkAnswer, finishQuiz, reviewQuiz, saveState, loadState — son las funciones core. Una regresion aqui destruye el quiz completo.

---

### H3: Service Worker — estado actual
**Severidad:** Baja | **Riesgo de correccion:** BAJO

**Estado actual verificado:**
- `dp600_study_module.html` ya NO esta en la lista (corregido — el archivo no existe en raiz)
- Doble registro: `script.js L4344` + features.js solo tiene comentario (registro eliminado)
- `questions_databricks_aibi.js` y `questions_databricks_sql_analytics.js` estan en `index.html` (L1753-1754) PERO no en `sw.js`

**Hallazgo nuevo:**
2 archivos de preguntas que se cargan en index.html NO estan cacheados en el SW:
- `questions_databricks_aibi.js`
- `questions_databricks_sql_analytics.js`

**Impacto:** Si el usuario esta offline, estos dos cursos no tendran preguntas disponibles.

---

### H4: Redefiniciones de funciones
**Severidad:** Baja (funcional) | **Riesgo de correccion:** ALTO

**Evidencia actual:**
- `toggleZenMode`: IIFE L4357 + override global L4613 → La ultima gana
- `returnToMenu`: IIFE L1643 + override L4643 + features.js wrapper L843 → La cadena funciona
- `renderBadges`: IIFE L576 + override L4679 → La ultima gana (alert simple)

**Mi evaluacion:**
- El orden de carga es: script.js (IIFE define internas) → script.js (globals sobreescriben) → features.js (wrappea returnToMenu).
- **Esto funciona por orden de ejecucion.** Reorganizarlo rompe la cadena.
- **NO TOCAR.**

---

### H5: Persistencia cloud (supabase-sync.js)
**Severidad:** Media | **Riesgo de correccion:** MEDIO

**Hallazgos verificados:**
1. **localStorage.setItem override (L182-191):** Monkey-patch que intercepta escrituras. Funciona pero es fragil.
2. **sendBeacon sin headers (L227):** `navigator.sendBeacon()` NO soporta custom headers. El Blob solo lleva `Content-Type: application/json`, pero Supabase necesita `apikey` y `Authorization`. **El sync al cerrar pestana probablemente NO funciona.**
3. **Credenciales en cliente (L20-21):** El anon key de Supabase es publico por diseno, pero la URL + key estan en el codigo fuente.
4. **cloud sync no incluye quizHistory:** El payload (L86-94) sincroniza profile, stats, progress pero NO `quizHistory`. El historial completo (hasta 50 entries) solo vive en localStorage.

**Impacto real:**
- El sync en `beforeunload` probablemente falla silenciosamente (sendBeacon sin auth)
- El sync en operaciones normales (via scheduleSync → saveToCloud) SI funciona (usa fetch con headers)
- quizHistory se pierde si se borra cache, incluso con cloud sync activo

---

### H6: innerHTML, estilos inline, onclick inline
**Severidad:** Baja (calidad de codigo) | **Riesgo de correccion:** ALTO

**Metricas actuales:**
- 86+ asignaciones `innerHTML =`
- 127+ manipulaciones `.style.`
- 18 `onclick` inline en index.html
- 118 atributos `style="..."` en index.html

**Mi evaluacion:**
- Es deuda tecnica real pero cosmetic.
- Refactorizar 200+ puntos de estilo inline es semanas de trabajo con CERO mejora funcional.
- **NO TOCAR como bloque.** Solo corregir puntualmente si un caso especifico causa un bug.

---

### H7: marked.parse() + innerHTML sin sanitizacion
**Severidad:** Baja-Media | **Riesgo de correccion:** MEDIO

**Evidencia:** `marked.parse(...)` → `innerHTML` en explanations de preguntas.
**Realidad:** El contenido viene de archivos JS locales que Norman controla. No hay input de usuario externo que pase por marked.
**Mi evaluacion:** Riesgo teorico. Agregar DOMPurify es posible pero agrega una dependencia nueva, requiere actualizar SW cache, y puede romper renderizado existente de explicaciones con HTML valido.
- **NO PRIORITARIO.** Solo relevante si en el futuro se cargan preguntas de fuentes externas.

---

### H8: Seed XP legacy en hero_data.js
**Severidad:** Baja | **Riesgo de correccion:** BAJO

**Estado actual verificado:**
- L97-98: `if (calculatedXP < 1219 && this.data.stats.xp === 1219)` — El seed de 1219 XP sigue en el codigo como condicion dead code (esta comentado). No afecta funcionalidad.
- `NorSab89` ya NO se fuerza — `hero_data.js L198`: comentario "V2: Seeds neutralized".
- `file:///D:/...` — Ya NO existe en script.js (verificado con grep: 0 resultados).
- Perfil default: `nick: "Estudiante"`, `name: "Estudiante"` — neutro.

**Estado:** MAYORMENTE RESUELTO. Solo queda el dead code del seed 1219 (no afecta nada).

---

## 5. RESUMEN: QUE TOCAR Y QUE NO

### NO TOCAR (alto riesgo de regresion, bajo beneficio)

| # | Hallazgo | Razon para NO tocar |
|---|----------|---------------------|
| H1 | Doble ruta quiz | Refactor masivo del IIFE. Features nuevas ya lo bypasean via launchDirectQuiz. |
| H2 | userAnswers dual | Toca el core del quiz engine. Double lookup compensa. |
| H4 | Redefiniciones | El orden actual funciona. Moverlo rompe la cadena features.js wrapping. |
| H6 | innerHTML/inline | Cosmetic. Semanas de trabajo, cero valor funcional. |
| H7 | DOMPurify | Contenido es local. Nueva dependencia sin beneficio real. |

### SEGURO CORREGIR (bajo riesgo, alto valor)

| # | Hallazgo | Accion | Riesgo | Esfuerzo |
|---|----------|--------|--------|----------|
| H3 | 2 JS faltantes en SW | Agregar 2 lineas a ASSETS_TO_CACHE en sw.js | Muy bajo | 2 min |
| H5a | sendBeacon sin auth | Cambiar a fetch con keepalive | Bajo | 15 min |
| H5b | quizHistory no se sincroniza | Agregar al payload de saveToCloud | Bajo | 10 min |
| H8 | Dead code seed 1219 | Eliminar condicional muerta | Muy bajo | 1 min |

---

## 6. PLAN DE CORRECCIONES POR FASES

### ═══════════════════════════════════════
### FASE 1: CORRECCIONES SEGURAS (30 min)
### ═══════════════════════════════════════

**Criterio:** Solo archivos aislados, cambios de 1-5 lineas, sin tocar script.js IIFE.

#### F1.1 — Agregar 2 archivos faltantes al Service Worker
**Archivo:** `sw.js`
**Linea:** Agregar despues de L17
**Accion:** Insertar en ASSETS_TO_CACHE:
```javascript
'./questions_databricks_aibi.js',
'./questions_databricks_sql_analytics.js',
```
**Riesgo:** Nulo. Solo agrega strings a un array.
**Verificacion:** Abrir app → DevTools → Application → Cache Storage → Verificar que los 2 archivos aparecen.

#### F1.2 — Incrementar version de cache
**Archivo:** `sw.js`
**Linea:** L2-3
**Accion:** Cambiar timestamp para forzar actualizacion:
```javascript
const BUILD_TIMESTAMP = '20260405c';
```
**Riesgo:** Nulo. Solo cambia el nombre del cache.

#### F1.3 — Eliminar dead code del seed 1219
**Archivo:** `hero_data.js`
**Lineas:** L97-101
**Accion:** Eliminar el bloque comentado:
```javascript
// ELIMINAR estas lineas:
if (calculatedXP < 1219 && this.data.stats.xp === 1219) {
    // calculatedXP = 1219;
    // ...
}
```
**Riesgo:** Nulo. Es dead code (resultado nunca se usa).

#### F1.4 — Verificacion post-Fase 1
- [ ] App carga correctamente
- [ ] SW se actualiza (verificar en DevTools > Application > SW)
- [ ] 37 assets en cache (35 + 2 nuevos)
- [ ] Perfil muestra "Estudiante" por defecto (no "NorSab89")
- [ ] Features F1-F20 siguen funcionando

---

### ═══════════════════════════════════════
### FASE 2: SYNC CLOUD MEJORADO (45 min)
### ═══════════════════════════════════════

**Criterio:** Solo toca supabase-sync.js. No afecta quiz engine ni features.

#### F2.1 — Corregir sendBeacon en beforeunload
**Archivo:** `supabase-sync.js`
**Lineas:** L202-228
**Problema:** sendBeacon no soporta custom headers. Supabase rechaza el request.
**Accion:** Reemplazar sendBeacon con fetch + keepalive:
```javascript
window.addEventListener('beforeunload', () => {
  if (DataSync.isConfigured && DataSync.pendingSync) {
    clearTimeout(DataSync.pendingSync);

    const payload = {
      device_id: DataSync.deviceId,
      profile: JSON.parse(localStorage.getItem('userProfile') || 'null'),
      stats: JSON.parse(localStorage.getItem('userStats') || 'null'),
      quiz_history: JSON.parse(localStorage.getItem('quizHistory') || 'null'),
      dojo_streak: JSON.parse(localStorage.getItem('dojoStreak') || 'null'),
      dp600_progress: JSON.parse(localStorage.getItem('dp600_progress') || 'null'),
      databricks_progress: JSON.parse(localStorage.getItem('databricks_progress') || 'null'),
      completed_modules: JSON.parse(localStorage.getItem('completedModules') || 'null'),
      quiz_app_state: JSON.parse(localStorage.getItem('quizAppState') || 'null'),
      theme: localStorage.getItem('theme') || 'light',
      updated_at: new Date().toISOString()
    };

    // fetch with keepalive works like sendBeacon but allows headers
    fetch(`${SUPABASE_URL}/rest/v1/quiz_progress`, {
      method: 'POST',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(payload)
    }).catch(() => {}); // Silently fail on page close
  }
});
```
**Riesgo:** Bajo. Solo cambia el metodo de envio al cerrar pestana.

#### F2.2 — Agregar quizHistory al payload de sync
**Archivo:** `supabase-sync.js`
**Lineas:** L85-94 (saveToCloud payload)
**Accion:** Agregar al objeto payload:
```javascript
quiz_history: JSON.parse(localStorage.getItem('quizHistory') || 'null'),
dojo_streak: JSON.parse(localStorage.getItem('dojoStreak') || 'null'),
```
**Tambien en loadFromCloud (L136-157):** Agregar restauracion:
```javascript
if (data.quiz_history) localStorage.setItem('quizHistory', JSON.stringify(data.quiz_history));
if (data.dojo_streak) localStorage.setItem('dojoStreak', JSON.stringify(data.dojo_streak));
```
**Riesgo:** Bajo. Solo agrega campos al JSON que se envia/recibe.
**Nota:** Requiere agregar columnas `quiz_history JSONB` y `dojo_streak JSONB` a la tabla Supabase. SQL:
```sql
ALTER TABLE quiz_progress ADD COLUMN IF NOT EXISTS quiz_history JSONB;
ALTER TABLE quiz_progress ADD COLUMN IF NOT EXISTS dojo_streak JSONB;
```

#### F2.3 — Agregar quizHistory a las keys monitoreadas
**Archivo:** `supabase-sync.js`
**Linea:** L187
**Accion:** Agregar keys al array:
```javascript
const syncKeys = ['userProfile', 'userStats', 'dp600_progress', 'databricks_progress',
                  'completedModules', 'quizAppState', 'quizHistory', 'dojoStreak'];
```

#### F2.4 — Verificacion post-Fase 2
- [ ] App carga correctamente
- [ ] Abrir DevTools > Network > Filtrar por "supabase"
- [ ] Completar un quiz y verificar que se envia sync (Network request con quizHistory)
- [ ] Cerrar pestana y verificar que el request sale (fetch keepalive)
- [ ] Abrir en otra pestana/navegador y verificar que los datos se restauran

---

### ═══════════════════════════════════════
### FASE 3: MEJORAS DE CALIDAD (2-3 horas)
### ═══════════════════════════════════════

**Criterio:** Solo toca features.js. No afecta script.js core.

#### F3.1 — Mejorar filtro F16 (Domain Flashcards)
**Archivo:** `features.js` L1497-1511
**Problema:** `JSON.stringify(c).toLowerCase().includes(domainLower)` coincide con cualquier campo.
**Accion:**
```javascript
function launchDomainFlashcards(domainName, courseId) {
    const cid = courseId || window.currentCourseId;
    const getter = FLASHCARD_MAP[cid];
    const allCards = getter ? getter() : null;

    if (!allCards || allCards.length === 0) {
        alert('No hay flashcards disponibles para este curso.');
        return;
    }

    const domainLower = domainName.toLowerCase();

    // Priority 1: Explicit domain/category field
    let filtered = allCards.filter(c =>
        (c.domain && c.domain.toLowerCase().includes(domainLower)) ||
        (c.category && c.category.toLowerCase().includes(domainLower))
    );

    // Priority 2: Search in front/question only (not answer)
    if (filtered.length < 3) {
        filtered = allCards.filter(c => {
            const front = (c.front || c.pregunta || c.question || c.term || c.concepto || '').toLowerCase();
            return front.includes(domainLower);
        });
    }

    // Fallback: all cards
    const cardsToShow = filtered.length >= 3 ? filtered : allCards;
    launchFlashcardMode(cardsToShow, cid);
}
```
**Riesgo:** Bajo. Solo cambia logica de filtrado interno.

#### F3.2 — Accesibilidad basica en Flashcard overlay
**Archivo:** `features.js` — funcion launchFlashcardMode
**Accion:** Agregar al overlay:
```javascript
overlay.setAttribute('role', 'dialog');
overlay.setAttribute('aria-label', 'Modo Flashcard');
overlay.setAttribute('aria-modal', 'true');
```
**Riesgo:** Nulo. Solo agrega atributos HTML.

#### F3.3 — Certificado con font fallback
**Archivo:** `features.js` — funcion generateCertificate
**Accion:** Antes de dibujar, verificar si Inter esta disponible:
```javascript
document.fonts.ready.then(() => {
    const fontAvailable = document.fonts.check('700 36px Inter');
    const fontFamily = fontAvailable ? 'Inter, sans-serif' : 'Segoe UI, system-ui, sans-serif';
    // Usar fontFamily en todas las asignaciones ctx.font
```
**Riesgo:** Bajo. Solo afecta estetica del certificado PNG.

#### F3.4 — Verificacion post-Fase 3
- [ ] F16: Buscar flashcards de un dominio especifico → resultado relevante
- [ ] F10: Overlay muestra `role="dialog"` en inspector
- [ ] F4: Certificado se genera correctamente con/sin Inter

---

### ═══════════════════════════════════════
### FASE 4: MEJORAS OPCIONALES (1-2 horas)
### ═══════════════════════════════════════

**Criterio:** Mejoras cosmeticas y de mantenibilidad. Opcionales.

#### F4.1 — CSS layout variables
**Archivo:** `styles.css` — agregar en :root
```css
:root {
  /* ... variables existentes ... */
  --layout-max-md: 900px;
  --layout-max-xl: 1400px;
  --layout-sidebar-w: 300px;
}
```
Luego buscar/reemplazar `max-width: 900px` por `max-width: var(--layout-max-md)` donde aplique.
**Riesgo:** Bajo. CSS no afecta logica JS.

#### F4.2 — Barras de enfasis → dots/chips (opcional)
**Archivo:** `styles.css`
Reemplazar `border-left: 3px solid` en study-plan-items por pseudo-elemento dot.
**Riesgo:** Bajo. Solo visual.
**NOTA:** Esto es preferencia estetica. Las barras de enfasis actuales son funcionales y claras. Solo cambiar si Norman lo pide explicitamente.

---

## 7. LO QUE NO SE DEBE TOCAR — RATIFICADO

| Componente | Razon | Riesgo si se toca |
|------------|-------|-------------------|
| script.js IIFE (L10-4308) | Motor del quiz. 4300 lineas de closure. | CRITICO. Cualquier cambio puede romper quiz, scoring, navigation, review |
| startQuizAction (L4541) | Legacy handler funcional | ALTO. Bypass ya existe via launchDirectQuiz |
| userAnswers modelo | Core del scoring | ALTO. Double lookup compensa la inconsistencia |
| Orden de redefiniciones | toggleZenMode, returnToMenu, renderBadges | ALTO. La cadena de wrapping depende del orden |
| localStorage.setItem override | Supabase sync hook | MEDIO. Cambiarlo rompe toda la sincronizacion |
| 86 innerHTML + 127 .style. | Deuda tecnica cosmetic | ALTO esfuerzo, CERO valor funcional |

---

## 8. ESTADO DE CORRECCIONES PREVIAS

### Ya aplicadas (verificadas en el codigo actual):
- [x] FIX-A1: Doble timer (clearInterval en _setQuizState)
- [x] FIX-A2: SW cache actualizado
- [x] FIX-A3: 15 cinturones unificados
- [x] FIX-B2: dateDiffDays con 'T00:00:00'
- [x] FIX-B3: trackAction eliminado
- [x] FIX-B4: checkStreakRisk usa getLocalISODate()
- [x] FIX-B5: q.prompt primero en F12
- [x] FIX-D3: hideFeaturePanels incluye F15 + F19
- [x] FIX-M1: getDomainStats() centralizado
- [x] F7: SW registro unico (eliminado de features.js)
- [x] F18: Backup/Restore implementado completo
- [x] getLocalISODate() helper para timezone
- [x] Seeds neutralizados en hero_data.js
- [x] file:///D:/ eliminado de script.js

### Pendientes (este plan):
- [ ] F1.1: 2 archivos JS faltantes en SW
- [ ] F1.2: Incrementar version cache
- [ ] F1.3: Dead code seed 1219
- [ ] F2.1: sendBeacon → fetch keepalive
- [ ] F2.2: quizHistory en cloud sync
- [ ] F2.3: syncKeys ampliadas
- [ ] F3.1: Filtro F16 mejorado
- [ ] F3.2: ARIA en flashcard overlay
- [ ] F3.3: Font fallback en certificado
- [ ] F4.1: CSS layout variables (opcional)

---

## 9. CRONOGRAMA ESTIMADO

```
FASE 1 (30 min):   SW + dead code        → Score: 8.3/10
FASE 2 (45 min):   Cloud sync            → Score: 8.5/10
FASE 3 (2-3 hrs):  Calidad features      → Score: 8.7/10
FASE 4 (1-2 hrs):  CSS polish (opcional)  → Score: 8.8/10

ESTADO ACTUAL:                              Score: 8.2/10
ESTADO POST-PLAN:                           Score: 8.8/10

Para llegar a 9.0+:
  - Requiere refactor de script.js (NO recomendado ahora)
  - O reescritura modular (proyecto separado, futuro)
```

---

## 10. NUEVAS FUNCIONALIDADES SUGERIDAS (backlog, no implementar ahora)

Si despues de las 4 fases de correcciones Norman quiere agregar funcionalidad, estas son las mas valiosas por impacto:

| # | Feature | Valor | Donde va |
|---|---------|-------|----------|
| 1 | Reanudacion de examen en curso | Muy alto | features.js (usa localStorage state) |
| 2 | Marcador de confianza por pregunta (segura/dudosa/azar) | Alto | features.js + script.js hook menor |
| 3 | Indicador de salud offline por curso | Medio | features.js (SW API) |
| 4 | Score sintetico de preparacion por curso | Medio | features.js (calculo puro) |

**Nota:** Todas pueden implementarse en features.js sin tocar el IIFE de script.js, usando los hooks existentes y `launchDirectQuiz()` como puente.

---

## 11. VEREDICTO FINAL

Data Dojo es un producto funcional completo con 20 features trabajando. El score de producto (9.3/10) refleja que la app sirve para estudiar de verdad.

La deuda tecnica (score ingenieria 7.0/10) es real pero contenida. Las partes criticas (doble ruta, dual model, redefiniciones) funcionan gracias al orden de carga y a compensaciones internas. Tocarlas genera mas riesgo que beneficio.

Las correcciones de este plan son todas de bajo riesgo y mejoran areas reales:
- Fase 1 cierra un gap de PWA (2 archivos faltantes)
- Fase 2 arregla un bug real de cloud sync (sendBeacon sin auth)
- Fase 3 mejora la precision de features existentes
- Fase 4 mejora la mantenibilidad del CSS

Despues de las 4 fases, la app estara en 8.8/10 global sin haber tocado nada peligroso.

---

*Ultimo Plan Auditoria V1*
*20 features verificadas | 14 fixes previos confirmados | 10 correcciones nuevas planificadas*
*Clasificacion de riesgo: 5 hallazgos NO TOCAR + 10 correcciones SEGURAS*
*Autor: Claude Code*
*Fecha: 2026-04-05*
