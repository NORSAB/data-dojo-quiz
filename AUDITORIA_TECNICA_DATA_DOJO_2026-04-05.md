# Auditoria Tecnica Data Dojo

Fecha: 2026-04-05

Alcance revisado:
- `D:\2026\Simulador de Preguntas\index.html`
- `D:\2026\Simulador de Preguntas\script.js`
- `D:\2026\Simulador de Preguntas\features.js`
- `D:\2026\Simulador de Preguntas\styles.css`
- `D:\2026\Simulador de Preguntas\hero_data.js`
- `D:\2026\Simulador de Preguntas\supabase-sync.js`
- `D:\2026\Simulador de Preguntas\sw.js`
- archivos de preguntas, estudio y traduccion cargados por `index.html`

Estado de esta auditoria:
- No se modifico codigo de la app.
- No se cambiaron estilos, iconos ni comportamiento.
- Este documento deja hallazgos, riesgos, bugs y propuestas de correccion con snippets.

## Calificacion Global

Calificacion actual: **6.8 / 10**

Resumen ejecutivo:
- La app tiene mucho valor funcional y una ambicion clara. No es un prototipo basico: ya existe un producto con rutas de estudio, quiz, examen simulado, repaso por debilidades, flashcards, dashboard, perfil, streak, PWA y backup en nube.
- La experiencia funcional esta bastante por encima de la media para una app web estatica.
- El mayor problema no es falta de funcionalidades. El mayor problema es deuda tecnica acumulada: duplicacion de funciones, rutas heredadas, mezcla de estrategias viejas y nuevas, mucha logica en globals y una capa visual con demasiados estilos inline.
- Hay bugs reales que pueden producir comportamiento inconsistente en filtros, respuestas, offline y sincronizacion.

## Lo Mejor de la Implementacion

Buenas practicas observadas:
- Hay validacion temprana del banco de preguntas y deduplicacion al inicio en `script.js:16-90`.
- La app esta claramente pensada como producto y no solo como demo: onboarding, gamificacion, historial, estudio guiado, resumen post-examen y estadisticas dedicadas.
- La modularizacion del contenido por cursos existe y ayuda: preguntas, estudio, flashcards y conceptos estan separados en archivos.
- La iconografia del UI esta muy alineada con SVG inline. Esto es consistente con tu restriccion de no cambiar iconos fuera de SVG.
- El CSS ya intenta ser responsive y usa variables visuales globales.
- Existe soporte PWA y persistencia local/cloud, lo cual agrega mucho valor al usuario final.
- El modo de traduccion para Databricks esta pensado para no reiniciar el examen.

## Metricas Rapidas del Estado Actual

Metricas obtenidas del codigo:
- `script.js`: 4363 lineas
- `features.js`: 1772 lineas
- scripts locales cargados al arranque desde `index.html`: **2,276,904 bytes**
- atributos `onclick="..."` en `index.html`: **18**
- atributos `style="..."` en `index.html`: **118**
- asignaciones `innerHTML =` en `script.js` y `features.js`: **86**
- manipulaciones directas con `.style.` en `script.js` y `features.js`: **127**
- redefiniciones encontradas:
- `finishQuiz`: 2 implementaciones
- `toggleZenMode`: 2 implementaciones
- `renderBadges`: 2 implementaciones
- `returnToMenu`: 2 implementaciones

Lectura de estas metricas:
- El producto ya es grande.
- El costo de mantenimiento actual es mayor del que aparenta.
- La app depende demasiado de DOM imperativo e inyeccion HTML.

## Hallazgos Prioritarios

### 1. Hallazgo Alto: El arranque del quiz tiene dos rutas y una de ellas ignora filtros reales

Evidencia:
- El flujo bueno prepara `currentPool` filtrado por idioma, rango, dominio y busqueda en `script.js:1342-1601`.
- El handler "restaurado" `window.startQuizAction` vuelve a filtrar desde `window.questionsData` completo en `script.js:4539-4575`.

Problema:
- La ruta restaurada no reutiliza el pool ya calculado.
- Puede saltarse idioma seleccionado.
- Puede saltarse rango `Desde/Hasta`.
- Puede no respetar exactamente el modo de debilidades calculado en el flujo principal.

Impacto:
- Comportamiento inconsistente entre lo que el usuario configura y lo que realmente se lanza.
- Dificulta depuracion porque hay dos fuentes de verdad para iniciar examen.

Recomendacion:
- Dejar una sola ruta de inicio.
- Subir el pool filtrado a un estado canonico de modulo y usarlo en cualquier boton/handler.

Snippet propuesto:

```js
// Estado canonico del modal de configuracion
let configQuestionsPool = [];

function setConfigQuestionsPool(questions) {
  configQuestionsPool = Array.isArray(questions) ? [...questions] : [];
}

function getConfigQuestionsPool() {
  return [...configQuestionsPool];
}

// Dentro de startCourse, despues de calcular currentPool:
setConfigQuestionsPool(currentPool);

// Cada vez que cambie el filtro:
currentPool = filtered;
setConfigQuestionsPool(currentPool);

// Unico handler de arranque
window.startQuizAction = function () {
  const count = parseInt(document.getElementById("config-slider")?.value || "10", 10);
  const realModeCb = document.getElementById("config-real-mode");
  const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || "random";

  let finalQuestions = getConfigQuestionsPool();
  if (orderMode === "random") {
    finalQuestions.sort(() => 0.5 - Math.random());
  }

  currentQuizQuestions = finalQuestions.slice(0, count);
  if (currentQuizQuestions.length === 0) {
    alert("No se encontraron preguntas con esta configuracion.");
    return;
  }

  isRealExam = !!realModeCb?.checked;
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = {};
  configModal.classList.add("hidden");
  startScreen.classList.add("hidden");
  quizUI.classList.remove("hidden");
  timerDisplay.classList.remove("hidden");
  totalSeconds = count * 90;
  startTimer();
  renderQuestionMap();
  loadQuestion(0);
  saveState();
};
```

### 2. Hallazgo Alto: `userAnswers` usa dos modelos distintos de indexacion

Evidencia:
- Se consulta por `q.id` en `script.js:417-450`.
- Se guarda y usa por indice en `script.js:2108-2166` y `script.js:2316-2430`.
- El review intenta compensarlo con doble lookup en `script.js:2649-2660`.

Problema:
- El modelo actual no es unico.
- Parte del codigo asume `userAnswers[q.id]`.
- Otra parte asume `userAnswers[idx]`.
- Hay comentarios incluso contradictorios sobre cual es el formato real.

Impacto:
- Riesgo de errores en historial.
- Riesgo de conteo incorrecto de preguntas respondidas/no respondidas.
- Riesgo de review parcial o inconsistente.

Recomendacion:
- Elegir un unico modelo. Mi recomendacion: **usar siempre `q.id`**.
- Separar el mapa visual del sidebar del modelo de respuestas.

Snippet propuesto:

```js
function getAnswerKey(question) {
  return question.id;
}

function getAnswer(question) {
  return userAnswers[getAnswerKey(question)] || null;
}

function setAnswer(question, value) {
  userAnswers[getAnswerKey(question)] = value;
}

function selectOption(el, type) {
  const q = currentQuizQuestions[currentQuestionIndex];
  const answerKey = getAnswerKey(q);

  if (userAnswers[answerKey]?.submitted) return;

  let selectedIds = [];
  if (type === "ordering") {
    selectedIds = Array.from(optionsList.querySelectorAll(".ordering-item")).map((node) => node.dataset.id);
  } else {
    selectedIds = Array.from(optionsList.querySelectorAll(".selected")).map((node) => node.dataset.id);
  }

  const isCorrect =
    selectedIds.length === q.correctIds.length &&
    selectedIds.every((id) => q.correctIds.includes(id));

  const prev = userAnswers[answerKey] || {
    selected: [],
    isCorrect: false,
    submitted: false,
    initialSelection: null
  };

  if (prev.initialSelection === null && selectedIds.length > 0) {
    prev.initialSelection = { ids: [...selectedIds], isCorrect };
  }

  prev.selected = selectedIds;
  prev.isCorrect = isCorrect;
  prev.submitted = false;

  setAnswer(q, prev);
  updateQuestionMap();
}
```

### 3. Hallazgo Alto: El `service worker` tiene un manifesto de cache roto e incompleto

Evidencia:
- `sw.js:30` cachea `./dp600_study_module.html`, pero ese archivo no existe en el proyecto.
- `sw.js:1-32` no incluye algunos bundles activos recientes como `questions_databricks_aibi.js` y `questions_databricks_sql_analytics.js`.
- La app registra el SW dos veces: `script.js:4343-4347` y `features.js:846-850`.

Problema:
- `cache.addAll()` puede fallar si un archivo no existe.
- El modo offline puede quedar incompleto para cursos activos nuevos.
- Registrar dos veces el mismo SW es ruido tecnico innecesario.

Impacto:
- PWA menos confiable.
- Posibles errores silenciosos en modo offline.
- Mayor dificultad para diagnosticar fallos de cache.

Recomendacion:
- Mantener una sola registracion.
- Mantener la lista de assets sincronizada con `index.html`.
- Eliminar referencias a archivos inexistentes.

Snippet propuesto:

```js
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./features.js",
  "./hero_data.js",
  "./manifest.json",
  "./app_icon.png",
  "./questions.js",
  "./questions_databricks.js",
  "./questions_databricks_fundamentals.js",
  "./questions_databricks_aibi.js",
  "./questions_databricks_sql_analytics.js",
  "./questions_unir_viz.js",
  "./questions_unir_herr.js",
  "./questions_unah_tesis.js",
  "./study_data.js",
  "./study_databricks.js",
  "./study_databricks_urgent.js",
  "./study_databricks_fundamentals.js",
  "./study_unir_viz.js",
  "./study_unir_herr.js",
  "./study_unah_tesis.js",
  "./flashcards_databricks.js",
  "./flashcards_unir_viz.js",
  "./flashcards_unir_herr.js",
  "./flashcards_unah_tesis.js",
  "./databricks_study_module.html",
  "./marked.min.js",
  "./conceptos_databricks.js",
  "./personajes_unir_viz.js",
  "./translations_databricks_es.js",
  "./translate_toggle.js",
  "./supabase-sync.js"
];
```

### 4. Hallazgo Medio-Alto: Existen redefiniciones y rutas heredadas que pisan comportamiento

Evidencia:
- `finishQuiz` en `script.js:417-453` y otra vez en `script.js:2316-2469`.
- `toggleZenMode` en `script.js:4355-4390` y otra vez en `script.js:4611-4639`.
- `renderBadges` en `script.js:576-729` y otra vez en `script.js:4677-4688`.
- `returnToMenu` en `script.js:1643-1659` y otra vez en `script.js:4641-4675`.
- El propio archivo contiene marcas de deuda como `NUCLEAR FIX`, `RESTORED`, `legacy refactor`, `DEBUG`.

Problema:
- El codigo no tiene una fuente de verdad clara.
- Las funciones "viejas" y "restauradas" conviven.
- El resultado real depende del orden de carga y de las ultimas asignaciones.

Impacto:
- Mucha fragilidad al hacer cambios.
- Alto riesgo de regresiones.
- Muy costoso de mantener.

Recomendacion:
- Consolidar por modulo y eliminar la version no canonica.
- Marcar explicitamente funciones obsoletas antes de eliminarlas.

Snippet propuesto:

```js
// Ejemplo de patron de consolidacion
const UIActions = {
  toggleZenMode() {
    document.body.classList.toggle("zen-mode");
    const isZen = document.body.classList.contains("zen-mode");
    syncTimerPosition(isZen);
  },

  returnToMenu() {
    hideAllScreens();
    document.body.classList.remove("zen-mode");
    showHomeScreen();
    window.HeroManager?.updateDashboard?.();
  },

  renderBadges() {
    openBadgesModal();
  }
};

window.toggleZenMode = UIActions.toggleZenMode;
window.returnToMenu = UIActions.returnToMenu;
window.renderBadges = UIActions.renderBadges;
```

### 5. Hallazgo Medio: Persistencia cloud con estrategia fragil

Evidencia:
- Credenciales visibles en cliente en `supabase-sync.js:20-21`.
- Override global de `localStorage.setItem` en `supabase-sync.js:181-191`.
- `sendBeacon` preparado sin usar headers calculados en `supabase-sync.js:218-227`.

Problema:
- El key anon de Supabase es publico por naturaleza, pero aqui se mezcla con una logica de sync que parece esperar autenticacion por headers en `beforeunload`.
- `navigator.sendBeacon()` no permite enviar esos headers personalizados, asi que ese bloque no garantiza la autenticacion que el codigo aparenta necesitar.
- Sobrescribir `localStorage.setItem` globalmente es una tecnica fragil y de alto acoplamiento.

Impacto:
- Sincronizacion final potencialmente no confiable.
- Efectos laterales globales en cualquier codigo que escriba en `localStorage`.

Recomendacion:
- Reemplazar el monkey patch por llamadas explicitas de sync.
- Cambiar el guardado final a `fetch(..., { keepalive: true })`.

Snippet propuesto:

```js
async function flushCloudSave(payload) {
  return fetch(`${SUPABASE_URL}/rest/v1/quiz_progress`, {
    method: "POST",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Prefer": "resolution=merge-duplicates"
    },
    body: JSON.stringify(payload)
  });
}

function persistUserStats(nextStats) {
  localStorage.setItem("userStats", JSON.stringify(nextStats));
  DataSync.scheduleSync();
}
```

### 6. Hallazgo Medio: Exceso de `innerHTML`, estilos inline y handlers inline

Evidencia:
- `86` asignaciones `innerHTML =`
- `127` usos de `.style.`
- `18` `onclick` inline
- `118` atributos `style="..."` solo en `index.html`

Problema:
- Se mezcla estructura, estilo y logica en demasiados puntos.
- La app es visualmente rica, pero el costo es una mantenibilidad baja.

Impacto:
- Cambiar un patron visual obliga a tocar muchos lugares.
- Aumenta el riesgo de inconsistencias.
- Hace mas dificil testear y refactorizar.

Recomendacion:
- Mover patrones repetidos a clases CSS.
- Reemplazar `onclick` inline por listeners.
- Reducir `innerHTML` en nodos sensibles y encapsular renderizadores.

Snippet propuesto:

```js
function bindUIEvents() {
  document.getElementById("zen-mode-toggle")?.addEventListener("click", window.toggleZenMode);
  document.getElementById("global-home-btn")?.addEventListener("click", window.returnToMenu);
  document.getElementById("header-profile-btn")?.addEventListener("click", window.openProfile);
  document.getElementById("badges-btn")?.addEventListener("click", window.renderBadges);
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
}
```

### 7. Hallazgo Medio: Riesgo de inyeccion HTML por uso extensivo de Markdown sin sanitizacion

Evidencia:
- `marked.parse(...)` seguido de `innerHTML` en `script.js:1912`, `script.js:2053`, `script.js:2224` y otros puntos.

Problema:
- Si algun contenido llega a provenir de una fuente no plenamente controlada, el vector de XSS existe.
- Hoy el riesgo es moderado porque la mayor parte del contenido parece ser local, pero la base tecnica queda abierta.

Recomendacion:
- Sanitizar el HTML transformado antes de insertarlo o limitar el subset permitido.

Snippet propuesto:

```js
function safeMarkdownToHtml(markdown) {
  const raw = marked.parse(markdown || "", { breaks: true, gfm: true });
  return DOMPurify.sanitize(raw, {
    USE_PROFILES: { html: true }
  });
}

questionText.innerHTML = safeMarkdownToHtml(q.prompt);
```

### 8. Hallazgo Medio: Valores demo y seeds del desarrollador siguen presentes

Evidencia:
- Perfil y XP hardcodeados en `hero_data.js:10-18`
- Forzado del nombre `"NorSab89"` en `hero_data.js:201-205`
- Ruta local absoluta `file:///D:/2026/Documentos Latex/main.pdf` en `script.js:4466`

Problema:
- El producto sigue mezclando estado de demo con estado real.
- Una ruta `file:///` rompe portabilidad.

Impacto:
- Mala experiencia en entornos distintos.
- Sensacion de producto no completamente desacoplado del entorno del autor.

Recomendacion:
- Dejar seeds neutros.
- Mover recursos locales a assets del proyecto o a configuracion externa.

Snippet propuesto:

```js
const DEFAULT_PROFILE = {
  nick: "Estudiante",
  name: "",
  joinDate: new Date().toLocaleDateString()
};

const LIBRARY_RESOURCES = [
  {
    id: "sql_cheat",
    title: "SQL Cheat Sheet",
    type: "PDF",
    link: "./docs/sql-cheat-sheet.pdf"
  }
];
```

## Hallazgos de Estilo y UX a Respetar

Esta parte recoge tus restricciones y como las veo reflejadas hoy:

Restricciones a respetar:
- No cambiar iconografia fuera de SVG.
- Evitar barras de enfasis.
- Evitar anchos repetidos hardcodeados.
- Respetar la modularidad por curso/contenido.
- Priorizar nuevas funcionalidades de experiencia sobre rediseño visual innecesario.

Observaciones:
- La app ya usa SVG extensivamente. Eso esta bien y conviene conservarlo.
- Sin embargo, todavia existen barras de enfasis visuales que contradicen tu preferencia:
- `styles.css:2459` usa `border-left` en el panel de debilidades.
- `styles.css:3160`, `3164`, `3168` usan `border-left` para prioridades del estudio.
- Existen tambien barras de progreso y barras de dominio en `styles.css:1086-1120` y `styles.css:2591-2599`.
- Hay anchos repetidos muchas veces, especialmente `900px`, `1400px`, `300px`, `120px`, `520px`, `560px`, `720px`, `960px`.

Recomendacion visual sin cambiar iconos:
- Centralizar anchos en variables CSS.
- Reemplazar barras de enfasis por chips, badges o bloques con color de fondo sutil.
- Mantener SVG como unico lenguaje de iconos.

Snippet CSS propuesto:

```css
:root {
  --layout-max-md: 900px;
  --layout-max-xl: 1400px;
  --layout-sidebar-w: 300px;
  --layout-panel-w: 520px;
  --metric-bar-w: 120px;
}

.course-list,
.menu-profile-card,
.wisdom-section,
.streak-widget,
.btn-flashcard-quick,
.weakness-panel {
  max-width: var(--layout-max-md);
}

.main-container,
.vertical-layout {
  max-width: var(--layout-max-xl);
}

.study-sidebar {
  width: var(--layout-sidebar-w);
}
```

Snippet CSS propuesto para quitar barras de enfasis:

```css
.weakness-panel {
  border-left: none;
  background:
    linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.02)),
    var(--card-bg);
}

.study-plan-item.priority-high,
.study-plan-item.priority-medium,
.study-plan-item.priority-low {
  border-left: none;
}

.study-plan-item.priority-high::before,
.study-plan-item.priority-medium::before,
.study-plan-item.priority-low::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-right: 10px;
}

.study-plan-item.priority-high::before { background: var(--danger-color); }
.study-plan-item.priority-medium::before { background: var(--warning-color); }
.study-plan-item.priority-low::before { background: var(--success-color); }
```

## Nuevas Funcionalidades Recomendadas

Estas sugerencias si mejoran experiencia y respetan tu restriccion de no cambiar iconos ni hacer rediseños innecesarios:

### A. Reanudacion inteligente de sesion

Idea:
- Si el usuario cierra o refresca con un quiz en curso, mostrar CTA para reanudar exactamente donde quedo.

Valor:
- Reduce friccion.
- Aprovecha mejor el guardado existente.

### B. Modo "Hoy te conviene estudiar esto"

Idea:
- Una tarjeta al inicio que combine:
- ultimo rendimiento
- dominios debiles
- racha
- tiempo disponible

Salida:
- "Hoy: 12 preguntas de SQL Analytics + 8 flashcards + 1 repaso de errores"

### C. Indicador de salud offline

Idea:
- Mostrar si los recursos del curso actual estan listos para offline.
- Si un modulo no esta cacheado, avisarlo antes de entrar en viaje o examen.

### D. Marcas de confianza por pregunta

Idea:
- Antes de enviar respuesta, permitir marcar:
- segura
- dudosa
- al azar

Valor:
- Muy util para analisis real de examen.
- Ayuda a separar conocimiento real de acierto casual.

### E. Recomendador post-examen accionable

Idea:
- En lugar de solo mostrar score, generar un plan de 10-20 minutos:
- repasar 5 preguntas falladas
- abrir 1 tema de estudio
- lanzar 1 set de flashcards del dominio debil

### F. Modo foco real

Idea:
- Ya existe Zen Mode, pero puede crecer con:
- bloqueo opcional de widgets secundarios
- CTA de reingreso al mapa
- ocultar ruido visual no esencial

### G. Estado de preparacion por curso

Idea:
- Un score sintetico por curso:
- cobertura del banco
- precision por dominio
- tendencia
- tiempo promedio

Salida:
- "Preparacion estimada: 74/100"

## Bugs y Riesgos a Dejar Registrados

Lista corta y directa:
- Bug funcional probable en inicio de examen por doble ruta de configuracion.
- Bug estructural por doble modelo de `userAnswers`.
- Riesgo de offline incompleto por `sw.js`.
- Riesgo de sync final no confiable por `sendBeacon` sin headers efectivos.
- Riesgo de mantenimiento por funciones redefinidas.
- Riesgo de portabilidad por `file:///D:/...`.
- Riesgo de incoherencia visual por exceso de estilos inline.
- Riesgo de seguridad futura por `marked.parse(...)` + `innerHTML` sin sanitizacion.

## Plan de Correccion Recomendado

Orden sugerido de trabajo:
1. Unificar arranque del quiz.
2. Unificar modelo de `userAnswers`.
3. Limpiar redefiniciones y eliminar codigo muerto.
4. Corregir `sw.js` y dejar una sola registracion del service worker.
5. Reemplazar `localStorage.setItem` override por sync explicito.
6. Mover patrones inline repetidos a CSS y componentes renderizados.
7. Centralizar anchos en variables.
8. Revisar barras de enfasis y sustituirlas por acentos mas limpios.
9. Implementar 1 o 2 mejoras UX de alto impacto antes de seguir agregando features.

## Veredicto Final

Data Dojo ya tiene suficiente funcionalidad para sentirse como un producto real y util.

Su debilidad principal hoy no es vision ni alcance. Es coherencia interna de implementacion.

Si se corrigen los 4 frentes siguientes:
- arranque unico del quiz
- modelo unico de respuestas
- PWA/cache consistente
- reduccion de deuda tecnica en globals/redefiniciones

la app puede subir rapido a un rango de **8.2 / 10** sin necesidad de reescribirla completa.

Fin de auditoria.
