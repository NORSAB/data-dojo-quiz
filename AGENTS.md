# 🥋 THE DATA DOJO — Instrucciones Maestras y Bitácora de Trazabilidad

> **Este archivo es la fuente única de verdad del proyecto.** Toda IA (Claude, Codex, Cursor, Gemini, o cualquier otra) que vaya a modificar este repositorio **debe leer este archivo completo antes de tocar cualquier código**, y **debe agregar una entrada en la sección "Bitácora de Cambios" al final** describiendo lo que hizo.
>
> ## 🚫 REGLAS INQUEBRANTABLES
> 1. **PROHIBIDO BORRAR CONTENIDO DE ESTE ARCHIVO.** Solo se agrega (append-only). Si algo queda obsoleto, se marca como `~~tachado~~` o se mueve a una sección de "Histórico", pero nunca se elimina el texto.
> 2. **Siempre leer la bitácora más reciente primero** (la entrada con la fecha más alta, al final del archivo) antes de empezar a trabajar — ahí está el estado real más actual del proyecto, más confiable que suposiciones.
> 3. **Toda sesión de trabajo (Claude, Codex, etc.) debe cerrar con una nueva entrada de bitácora**, aunque el cambio sea pequeño. Esto es lo que permite la trazabilidad entre IAs distintas trabajando en sesiones separadas.
> 4. Este archivo vive en la raíz de `D:\2026\Simulador de Preguntas` con el nombre `AGENTS.md` porque es el nombre de convención que reconocen automáticamente Codex, Cursor y otros agentes de código. Claude Code lo puede leer también si se le indica la ruta.

**Ruta completa para pasar a otras IAs:**
```
D:\2026\Simulador de Preguntas\AGENTS.md
```

---

## 1. 📌 Identificación y Entornos de Despliegue

- **Directorio Local:** `D:\2026\Simulador de Preguntas`
- **Servidor Local:** `http://localhost:5176` (o `http://127.0.0.1:5500`)
- **Dominio de Red Local:** `http://datadojo.local:5176`
- **GitHub Repo:** `https://github.com/NORSAB/data-dojo-quiz.git` (Rama: `main`)
- **Producción Vercel:** `https://data-dojo-quiz.vercel.app`
- **Despliegue GitHub Pages:** `https://norsab.github.io/data-dojo-quiz/`
- **Flujo de despliegue:** cada `git push origin main` dispara automáticamente el build/deploy en **Vercel** y en **GitHub Pages**. No hace falta ningún paso manual adicional — solo commitear y pushear a `main`.

---

## 2. ☁️ Base de Datos Supabase (Cloud Sync Multi-Dispositivo)

- **Project URL:** `https://suplwoyiviapsnowzfcb.supabase.co`
- **Anon Public Key:**
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cGx3b3lpdmlhcHNub3d6ZmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1MTcwODgsImV4cCI6MjEwMzA5MzA4OH0._hoJOBXHwQvd_gdCJgKC2pzOwhDT81pCP3HAzV2Gm8Q`
- **Tabla:** `quiz_progress`
- **Esquema de la tabla:**
  - `device_id` (TEXT PRIMARY KEY)
  - `profile` (JSONB)
  - `stats` (JSONB)
  - `certified_courses` (JSONB)
  - `course_progress` (JSONB)
  - `course_mastery` (JSONB)
  - `completed_modules` (JSONB)
  - `quiz_history` (JSONB)
  - `dojo_streak` (JSONB)
  - `app_state` (JSONB)
  - `full_backup` (JSONB)
  - `updated_at` (TIMESTAMP DEFAULT NOW())
- **Motor de sincronización:** `supabase-sync.js` — detecta cambios en `localStorage` y hace push automático a la nube; rehidrata la sesión al abrir en cualquier navegador.

---

## 3. 👤 Perfil y Progreso Maestro del Usuario

- **Usuario:** Norman Reynaldo Sabillon Castro (`NorSab`)
- **Cinturón actual:** Café (7,536+ XP — este número sube constantemente, no usar como referencia fija)
- **Cursos certificados:**
  - `dp-600` (Microsoft Fabric Analytics Engineer)
  - `databricks-da` (Databricks Data Analyst Associate)
  - `databricks-fundamentals` (Databricks Fundamentals)
  - `databricks-aibi` (AI/BI for Data Analysts)
  - `databricks-sql-analytics` (Databricks SQL Analytics)
  - `unir-viz-interactiva` (UNIR Visualización Interactiva)
  - `unir-herramientas-viz` (UNIR Herramientas de Visualización)
- **Archivo de respaldo maestro local:** `data_dojo_backup_master.json`
- **Auto-rehidratador:** `auto_restore_data.js` — inicializa el perfil y datos históricos si el navegador abre en un nuevo puerto o dominio con almacenamiento en blanco.

---

## 4. 📚 Cursos y Bancos de Preguntas Integrados

| Archivo | Curso |
|---|---|
| `questions.js` | Microsoft DP-600 / Fabric |
| `questions_databricks.js` | Databricks Certified Data Analyst Associate |
| `questions_databricks_genai.js` | Databricks Generative AI Engineer Associate — 383 preguntas EN, 6 dominios oficiales |
| `questions_databricks_genai_es.js` | Traducción ES del banco anterior — 383 preguntas, IDs `-es`, agregado 2026-08-23 |
| `questions_databricks_fundamentals.js` | Databricks Fundamentals |
| `questions_databricks_aibi.js` | Databricks AI/BI for Data Analysts |
| `questions_databricks_sql_analytics.js` | Databricks SQL Analytics |
| `questions_unir_viz.js` | UNIR Visualización Interactiva |
| `questions_unir_herr.js` | UNIR Herramientas de Visualización |
| `questions_unah_tesis.js` | UNAH Tesis |

**Módulos de estudio (cheat-sheets bilingües por dominio):** `study_databricks_domains.js`, `study_databricks_genai.js`, y equivalentes por curso. Patrón: `window.studyData[courseId] = [{title, items:[{title, content}]}]`, con bloques `langSection('en', …)` / `langSection('es', …)` renderizados simultáneamente (no es un toggle, es contenido bilingüe en paralelo). Estilos ya inyectados desde `script.js` (~línea 3254) — no tocar `styles.css` para esto.

**Toggle de traducción en vivo de preguntas** (`translate_toggle.js`): genérico para cualquier curso vía `findEsTwin(q)`, que busca `${q.id}-es` en `window.questionsData`. El único caso legado es `databricks-da`, que usa el diccionario `databricksTranslations` en vez de un banco `-es` paralelo.

---

## 5. 🎨 Arquitectura de UI / UX y Reglas Clave

1. **Diseño 100% full-width fluido:** toda la interfaz ocupa el 100% del ancho del viewport con grid responsive (`styles.css` + bloque `<style>` inline en `index.html`).
2. **Iconografía exclusivamente SVG — CERO emojis en la UI.** Nunca usar caracteres emoji (🎯🔥✅ etc.) como iconos en HTML/JS/CSS de la aplicación. Solo SVGs inline (`svg-only-icons`). Esta regla aplica a botones, badges, headers, cards, notificaciones — todo elemento visual de interfaz. (Nota: emojis SÍ pueden aparecer en archivos `.md` de documentación como este, eso no es "UI".)
3. **Diseño limpio y profesional, con paleta de colores reducida.** Regla explícita del usuario (2026-08-23): la app tiene demasiados colores y gradientes actualmente — se requiere un rediseño hacia algo más sobrio y corporativo. Ver auditoría en la sección 7 con datos concretos (60 colores hex distintos y 39 gradientes solo en `styles.css`). Al tocar estilos, usar buen criterio de UI/UX: paleta acotada (1 color de acento + neutros), jerarquía tipográfica clara, espaciado consistente, evitar gradientes decorativos salvo que aporten jerarquía real.
4. **PWA y caché (`sw.js`):** al modificar cualquier archivo estático servido por la PWA, SIEMPRE actualizar `BUILD_TIMESTAMP` en `sw.js` (y por ende `CACHE_NAME`) y el versionado `styles.css?v=...` en `index.html`, para evitar que los usuarios queden con caché vieja.
5. **Flujo de despliegue:** cada `git push origin main` dispara automáticamente Vercel + GitHub Pages. Confirmar visualmente ambos destinos tras un cambio visual importante (no asumir que uno implica el otro, aunque en la práctica ambos sirven los mismos archivos estáticos del repo).

---

## 6. 🗂️ Housekeeping de archivos de trabajo

- El proyecto tiene **muchos archivos `.md` de auditorías y planes previos sueltos en la raíz** (`AUDITORIA_*.md`, `PLAN*.md`, `VALIDACION_*.md`, etc.) generados en sesiones anteriores. **No se borran** (regla de no destruir historial), pero **a partir de 2026-08-23, este `AGENTS.md` es el punto de entrada canónico** — los archivos viejos quedan como archivo histórico/referencia, no como fuente de verdad activa.
- `.genai_translation_work/` (carpeta): batches de trabajo JSONL + JSON usados para traducir a mano el banco de GenAI (383 preguntas) y `assemble.js` (script Node que las ensambla en el archivo final). No está trackeado en git (queda fuera del `.gitignore` explícito pero tampoco se ha agregado). Se deja en disco como herramienta reutilizable para traducir futuros cursos con el mismo patrón manual. Si algún día se vuelve un curso más, mover `assemble.js` a una carpeta de herramientas versionada.
- `translate_genai_questions.py` (raíz, no trackeado por regla de proyecto `*.py` en `.gitignore`): pipeline de traducción automática vía Google Translate (`deep_translator`). **Quedó demostrado poco confiable** — Google bloquea la IP compartida del entorno tras ~3-4 llamadas, con bloqueos sostenidos de varios minutos, confirmado en 3 intentos distintos (sandbox y PC del usuario). Se mantiene en disco solo como referencia técnica; **el método que sí funcionó y se recomienda para futuros cursos es la traducción manual asistida por IA** (ver sección 8, patrón de batches JSONL).
- `translation_cache_genai.json`, `__pycache__/`: residuos del intento con Python/Google Translate. No trackeados, no afectan producción. Se pueden borrar sin riesgo si algún agente quiere limpiar el directorio de trabajo local.

---

## 7. 🔍 Mejoras Identificadas (para Codex u otra IA — pendientes, no ejecutadas aún)

Auditoría rápida hecha el 2026-08-23 durante la sesión de traducción del banco GenAI. Ninguno de estos puntos se tocó en esta sesión — quedan como backlog:

1. **Reducir paleta de colores / gradientes (prioridad alta, pedido explícito del usuario).**
   - `styles.css` tiene **60 valores hex distintos** y **39 `linear-gradient`/`radial-gradient`** — señal de una UI recargada visualmente, contraria al pedido de "algo limpio y profesional".
   - Recomendación: definir un design system acotado (variables `--primary`, `--neutral-50..900`, `--success`, `--danger`, `--warning` — ya existen varias en `:root`, ver líneas iniciales de `styles.css`) y migrar componentes uno por uno a usar solo esas variables, eliminando gradientes decorativos que no comuniquen jerarquía (mantener gradientes solo donde realmente ayudan a distinguir estado, ej. barra de progreso).
   - Hacerlo de forma incremental y con capturas antes/después, no un rewrite masivo de una sola vez (evitar romper el layout full-width ya estabilizado).

2. **Verificación de UI end-to-end en local (no solo en producción).**
   - Esta sesión verificó el banco ES de GenAI y el Study Mode vía `window.questionsData`/`window.studyData` en la consola del sitio ya desplegado (Vercel y GitHub Pages), pero **no se hizo clic real en la UI**: seleccionar el curso GenAI → cambiar idioma a español → abrir una pregunta → confirmar que el botón de toggle EN/ES aparece y funciona visualmente → abrir Study Mode y ver los 6 dominios renderizados. Pendiente de un pase de QA visual real (local o producción).

3. **Consolidar los `.md` sueltos de auditorías previas.**
   - Hay ~20 archivos de auditoría/plan en la raíz sin un índice. Sería útil (no urgente) un `AUDITORIAS_INDICE.md` que liste cada uno con fecha y 1 línea de qué cubre, para que una IA nueva no tenga que abrir 20 archivos para saber cuál es relevante.

4. **Confirmar que Supabase sync no requiere cambios de esquema para el nuevo curso GenAI.**
   - `course_progress`, `course_mastery`, `completed_modules` son JSONB genéricos por `courseId`, así que en teoría ya soportan el curso nuevo sin migración. No se probó con una sesión real de usuario guardando progreso en GenAI — vale la pena una prueba funcional.

5. **Curso GenAI: revisar consistencia de traducción de `domain`/`subdomain` entre preguntas.**
   - La traducción se hizo en 20 batches independientes (uno por sesión de trabajo). Se mantuvo una tabla de equivalencias EN→ES consistente a mano para los 6 `domain` y ~65 `subdomain`, pero no se corrió una validación automática de que el mismo `subdomain` en inglés siempre haya quedado traducido exactamente igual en español en las 383 preguntas (importante porque el filtro de dominio de la UI agrupa por el string exacto). Recomendado: un script que agrupe por `subdomain` en inglés, tome el/los `subdomain` en español correspondientes vía el mapeo `id` ↔ `id-es`, y liste si hay variantes.

---

## 8. 📖 Patrón recomendado para traducir un banco de preguntas nuevo a español (manual, sin Google Translate)

Aprendido en esta sesión (2026-08-23) tras 3 intentos fallidos con `deep_translator`/Google Translate (bloqueo de red sostenido):

1. Dividir el banco EN en batches de ~20 preguntas en JSONL compacto (una línea por pregunta, sin indentación) — mucho más barato de leer con herramientas de lectura de archivos que JSON con `indent`.
2. Por cada batch: leer el JSONL, traducir a mano (o con el modelo de IA activo) cada pregunta preservando identificadores técnicos/código sin traducir, escribir un JSON de traducciones keyed por `id` original.
3. Validar cada batch con `node -e "JSON.parse(...)"` antes de seguir.
4. Un script `assemble.js` (ver `.genai_translation_work/assemble.js` como plantilla) fusiona todas las traducciones con la estructura EN original, genera IDs `-es`, y escribe el archivo final como IIFE que hace `window.questionsData = (window.questionsData || []).concat(nuevoBancoEs)`. El script debe fallar con código de salida distinto de 0 y reportar cuántas preguntas faltan si no están completas las 100%, para poder correrlo después de cada batch como check de progreso.
5. Registrar el nuevo archivo en `index.html` y en `ASSETS_TO_CACHE` de `sw.js`, bumpear `BUILD_TIMESTAMP`.

---

## 9. 🗒️ Bitácora de Cambios (append-only — agregar entradas nuevas al FINAL, nunca borrar las anteriores)

### 2026-08-23 — Claude (Sonnet 5)
- Completó la traducción manual al español de las 383 preguntas del banco `databricks-genai-engineer` (batches 15 a 20 en esta sesión; batches 1-14 en sesiones previas), generando `questions_databricks_genai_es.js` vía `.genai_translation_work/assemble.js`.
- Validado: 383/383 preguntas ES, IDs únicos con sufijo `-es`, sin campos faltantes, correcto emparejamiento EN↔ES para el toggle de traducción.
- Wireado en `index.html` (script tag) y `sw.js` (cache list + `BUILD_TIMESTAMP` bump a `20260823b`).
- Commit `91921ab` en `main`, pusheado a `origin/main`. Confirmado en vivo (vía consulta a `window.questionsData`/`window.studyData` en consola) en **Vercel** (`data-dojo-quiz.vercel.app`) y **GitHub Pages** (`norsab.github.io/data-dojo-quiz`): 383 EN + 383 ES + 6 secciones de Study Mode presentes en ambos.
- Creó este archivo `AGENTS.md` como fuente única de verdad y bitácora de trazabilidad multi-IA, a pedido explícito del usuario, incluyendo auditoría inicial de colores/gradientes en `styles.css` (60 hex únicos, 39 gradientes) como base para el pedido de rediseño "limpio y profesional" — ese rediseño **no se ejecutó todavía**, queda como pendiente #1 en la sección 7.
- Reglas de diseño (SVG-only, cero emojis en UI, paleta de colores reducida) documentadas en la sección 5 a partir de instrucción explícita del usuario en este turno.

<!-- Próxima entrada: agregar debajo de esta línea, con fecha y autor (IA + modelo). No borrar nada de arriba. -->
