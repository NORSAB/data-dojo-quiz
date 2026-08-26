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
| `questions_azure_ai103.js` | Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103) — 356 preguntas EN, 5 dominios oficiales |
| `questions_azure_ai103_es.js` | Traducción ES del banco anterior — 356 preguntas, IDs `-es`, agregado 2026-08-26 |

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

### Regla permanente de autoría y sello temporal — Codex (GPT-5) — 2026-08-23 20:58 CST
- Desde esta entrada, **todo comentario nuevo de código o documentación y toda nueva entrada de bitácora debe indicar quién lo hizo, la fecha y la hora con zona horaria**. Si el autor es una IA, se agrega también el modelo cuando sea conocido.
- Formato recomendado para comentarios: `Autor (modelo) | AAAA-MM-DD HH:mm ZONA | motivo del cambio`.
- Formato recomendado para bitácora: `### AAAA-MM-DD HH:mm ZONA — Autor (modelo)`.
- Los comentarios históricos anteriores a esta regla no se reescriben de forma retroactiva; se preservan como evidencia del estado en que fueron creados.

### 2026-08-23 20:58 CST — Codex (GPT-5)
- Implementó un design system más sobrio y uniforme: `styles.css` pasó de **60 a 18 colores hex únicos** y de **39 a 0 gradientes**. También eliminó los gradientes decorativos restantes de `script.js`, `features.js` e `index.html`, manteniendo un acento azul, neutros y colores semánticos.
- Creó un **Centro de estudio visible** en la pantalla principal y un acceso permanente desde el encabezado. Descubre automáticamente los 7 cursos con `window.studyData`, muestra módulos/temas y destaca el curso GenAI bilingüe.
- Mejoró la accesibilidad del Study Mode: tabs y temas ahora usan botones nativos, roles ARIA, estado `aria-selected`/`aria-expanded`, objetivos táctiles y navegación por teclado. La pestaña de flashcards se oculta cuando el curso no tiene tarjetas propias.
- Corrigió dos defectos estructurales: el botón de tema ya no dispara `toggleTheme()` dos veces y las dos declaraciones `finishQuiz` dejaron de competir; la implementación histórica quedó nombrada `finishQuizLegacy` y el flujo activo no cambió.
- Ajustó `supabase-sync.js` al esquema documentado: eliminó la columna no documentada `theme` del payload (permanece dentro de `full_backup`) y agregó restauración genérica de `course_progress` y `course_mastery` por curso.
- Creó `tools/validate_genai_integration.js`: verificó **383 EN + 383 ES**, IDs únicos, gemelas `-es`, 6 dominios, 65 subdominios EN con traducción ES única, 6 módulos/35 temas GenAI y compatibilidad de payload/restauración Supabase.
- Creó `tools/audit_code_structure.js` y el mapa en `graphify-out/`: el grafo focalizado del commit base tiene 135 nodos, 242 relaciones y 19 comunidades; la comprobación posterior reporta 0 funciones duplicadas dentro del mismo archivo y 0 IDs HTML duplicados.
- Documentó la factibilidad de refactorización incremental en `AUDITORIA_ESTRUCTURAL_2026-08-23.md` y creó `AUDITORIAS_INDICE.md` para localizar las auditorías y planes históricos sin reemplazar este `AGENTS.md`.
- Actualizó la PWA a `BUILD_TIMESTAMP = 20260823c`, caché `simulador-v18` y versionado `styles.css?v=20260823c`.
- Verificación ejecutada: `node --check` en los JS principales y herramientas, `git diff --check`, auditoría estructural, validador GenAI/Supabase y prueba HTTP local con respuesta 200 para HTML, CSS, JS, bancos EN/ES, estudio, Supabase y service worker.
- Pendiente explícito: el QA visual automatizado no pudo ejecutarse porque el navegador integrado tiene una preferencia guardada que bloquea `127.0.0.1`. No se intentó eludir esa restricción; debe hacerse un pase visual manual o habilitarse el acceso local antes de afirmar validación visual completa.
- Identificó un riesgo crítico no modificado: `supabase-sync.js` usa un `device_id` fijo para permitir sincronización multidispositivo. En un sitio público puede compartir el mismo registro entre navegadores; debe resolverse con Supabase Auth/RLS o un código de vinculación, no con un UUID aleatorio que rompa el objetivo multidispositivo.
- No se hizo commit ni push en esta sesión. Los artefactos locales previos `.genai_translation_work/`, `__pycache__/` y `translation_cache_genai.json` se conservaron sin cambios.

### 2026-08-23 21:11 CST — Codex (GPT-5)
- Repitió antes de publicar las comprobaciones de sintaxis JavaScript, estructura HTML, duplicación de funciones, integración GenAI EN/ES y compatibilidad de sincronización Supabase; todas finalizaron correctamente.
- Confirmó que `main` estaba sincronizada con `origin/main` antes de crear el commit, evitando sobrescribir cambios remotos.
- Publicó en `origin/main` el commit `788c366` (`feat: add study center and streamline visual system`), que contiene el Centro de estudio, la paleta reducida, las correcciones estructurales, los validadores y la documentación de auditoría. Este push activa automáticamente los despliegues configurados de Vercel y GitHub Pages.
- Conservó fuera del commit los artefactos locales previos `.genai_translation_work/`, `__pycache__/` y `translation_cache_genai.json`.

### 2026-08-23 21:29 CST — Codex (GPT-5)
- Ajustó el Centro de estudio para que los dominios y temas de todos los cursos inicien contraídos; eliminó la apertura automática del primer tema.
- Amplió Databricks Generative AI Engineer con cinco áreas internas pertinentes: Estudiar, Términos EN/ES, Escenarios EN/ES, Flashcards y Logros. No copió Comandos SQL porque no corresponde al temario GenAI.
- Creó `study_databricks_genai_resources.js`, que deriva de las 383 parejas EN/ES validadas un banco equilibrado de **96 flashcards**, **65 términos/competencias** y **24 escenarios de decisión**, todos bilingües y distribuidos entre los 6 dominios.
- Integró los nuevos recursos en el visor de estudio, el acceso rápido de flashcards, `index.html`, el service worker y el validador automático. Actualizó la PWA a `BUILD_TIMESTAMP = 20260823d` y `simulador-v19`.
- Publicó el commit `59f0c28` (`feat: expand GenAI bilingual study resources`) en `origin/main`.
- Verificó visualmente Vercel: cinco pestañas visibles; 6/6 secciones de estudio contraídas; 65/65 términos contraídos; 24/24 escenarios contraídos; flashcard 1/96 con bloques English y Español; consola sin errores ni advertencias.
- Confirmó por HTTP que Vercel y GitHub Pages sirven `study_databricks_genai_resources.js` y el build PWA `20260823d`.
- Conservó fuera del commit los artefactos locales previos `.genai_translation_work/`, `__pycache__/` y `translation_cache_genai.json`.

### Regla permanente de control de paleta previo al despliegue — Codex (GPT-5) — 2026-08-23 21:32 CST
- Antes de cualquier `commit` o `push` que despliegue cambios visuales, es obligatorio ejecutar `node tools/validate_ui_palette.js`; si el validador falla, el despliegue queda bloqueado hasta corregir las desviaciones.
- La interfaz debe usar `--primary-color` (`#3157d5`) como único acento visual, acompañado por la escala neutral del design system. Los colores `success`, `warning` y `danger` se reservan exclusivamente para estados y retroalimentación reales, nunca para diferenciar cursos, proveedores, dominios, pestañas o contenido decorativo.
- El Centro de Estudio debe pasar una revisión específica de pestañas, encabezados, iconos SVG, etiquetas de idioma, cajas informativas, flashcards y logros en tema claro y oscuro. Los SVG de la interfaz heredan `currentColor`; se exceptúan únicamente logotipos oficiales y colores funcionales inherentes a la progresión de cinturones.
- La comprobación previa al despliegue incluye ausencia de gradientes decorativos en la interfaz activa, coherencia de caché PWA y una revisión visual de al menos una pantalla principal y una pantalla interna del Centro de Estudio.

### 2026-08-23 21:52 CST — Codex (GPT-5)
- Unificó la interfaz interna del Centro de Estudio con `--primary-color` (`#3157d5`) y neutros: pestañas, contadores, encabezados, iconos SVG, etiquetas EN/ES, cajas informativas, términos, escenarios, flashcards y logros dejaron de usar colores decorativos por curso, dominio o tipo de contenido.
- Reservó los colores semánticos para estados reales. En particular, `Marcar completo` usa el acento principal mientras es una acción y cambia a verde únicamente al quedar completado; dificultad, éxito y error conservan sus estados funcionales.
- Extendió la coherencia al resto de la app: eliminó los gradientes morado/rosa del selector EN/ES, normalizó sombras y acentos heredados, certificados, estadísticas, recursos e ilustraciones decorativas. Los logotipos oficiales y la progresión de cinturones permanecen como excepciones documentadas.
- Creó `tools/validate_ui_palette.js` y agregó la regla permanente que obliga a ejecutarlo antes de desplegar cambios visuales. El control final reportó **18 colores hex únicos en `styles.css`**, **0 gradientes decorativos**, SVG del Centro de Estudio con `currentColor`, selector EN/ES coherente y versión PWA sincronizada.
- Actualizó la PWA a `BUILD_TIMESTAMP = 20260823f`, caché `simulador-v21` y `styles.css?v=20260823f`.
- Publicó los commits `60fe575` (`feat: unify study center palette`) y `95d252a` (`fix: improve dark study contrast`) en `origin/main`.
- Verificó visualmente **Vercel** y **GitHub Pages**: build `20260823f`, 5 pestañas GenAI, 6/6 dominios contraídos, 65/65 términos contraídos, flashcards bilingües 1/96, azul principal `#3157d5` y 0 fondos con gradiente dentro de `.unir-root`. También validó tema claro y oscuro; en oscuro los títulos usan `#a7b0c0`, los botones usan texto claro y el tab activo mantiene el azul principal.
- La preferencia guardada del navegador integrado bloqueó `127.0.0.1`; no se intentó eludirla. La validación automática se ejecutó antes del push y el pase visual se completó inmediatamente en ambos despliegues públicos antes de cerrar la sesión.
- Conservó fuera de los commits los artefactos locales previos `.genai_translation_work/`, `__pycache__/` y `translation_cache_genai.json`.

### 2026-08-23 22:38 CST — Codex (GPT-5)
- Implementó un único selector global persistente **ES/EN** en el encabezado, disponible desde la bienvenida, el menú, modales, Centro de Estudio, examen activo y modo Zen. La preferencia se conserva en `localStorage` con la clave `app_language` y ya no existe una configuración de idioma independiente por curso.
- Creó `app_i18n.js` como fuente central de traducciones de interfaz y conectó las pantallas generadas dinámicamente mediante `app-language-change`. El cambio ocurre sobre la vista activa: no sale del módulo, no cambia de pestaña, no cierra categorías abiertas, no reinicia el temporizador y conserva la opción seleccionada en una pregunta.
- Reemplazó el botón de traducción local del examen por un puente bidireccional que usa preguntas gemelas `id` / `id-es` y mantiene la traducción legada de `databricks-da`. Los cursos que solo disponen de contenido en un idioma conservan ese contenido original, mientras toda la interfaz permanece en el idioma global elegido.
- Unificó el idioma de Estudiar, Términos, Escenarios, Flashcards y Comandos; eliminó los selectores internos que competían con el global. Las subsecciones continúan iniciando contraídas.
- Corrigió los paneles derivados para que un banco gemelo EN/ES no duplique preguntas ni dominios: GenAI muestra **383 preguntas y 6 dominios por idioma**, no 766 preguntas ni 12 dominios. Los IDs `-es` se normalizan para conservar las estadísticas al alternar idioma.
- Creó `tools/validate_global_language.js`, amplió `tools/validate_ui_palette.js` y validó: idioma global, 383 EN + 383 ES, 6 dominios, 65 subdominios, 35 temas, 96 flashcards, 65 términos, 24 escenarios, compatibilidad Supabase, 18 colores hex, 0 gradientes, 0 funciones duplicadas y 0 IDs HTML duplicados.
- Publicó el commit `c8123ec` (`feat: add persistent global language selector`) en `origin/main`, con PWA `BUILD_TIMESTAMP = 20260823i` y caché `simulador-v24`.
- Verificó mediante clic real **Vercel** y **GitHub Pages**: ambos sirven CSS/JS `20260823i` y cambian la bienvenida ES↔EN. En Vercel verificó además 6 dominios, 383 preguntas, estudio inicialmente contraído, términos inicialmente contraídos y una categoría abierta que permanece abierta y en la misma pestaña al cambiar de idioma.
- Durante el QA local expiró una sesión aislada de una pregunta y apareció una entrada de prueba `0/1` en el historial local; las demás sesiones se cerraron antes de finalizar y no se alteraron respuestas ni certificaciones.
- Conservó fuera de los commits los artefactos locales previos `.genai_translation_work/`, `__pycache__/` y `translation_cache_genai.json`.

### 2026-08-23 22:02 CST — Codex (GPT-5)
- Corrigió el nivel intermedio que seguía desplegado en el Centro de Estudio: las categorías internas de **Términos/Conceptos, Escenarios, Personajes y Comandos** ahora inician contraídas y muestran únicamente sus encabezados. Al abrir una categoría aparecen sus fichas; cada ficha mantiene su propio segundo nivel cerrado.
- Agregó controles accesibles con botones, `aria-expanded`, `aria-controls`, contenido `hidden` y un indicador SVG. Actualizó `Expandir Todos` y `Contraer Todos` para sincronizar tanto las categorías como sus fichas, sin introducir colores decorativos nuevos.
- Extendió `tools/validate_genai_integration.js` para impedir que se pierda este estado inicial. Las comprobaciones finales validaron 383 preguntas EN + 383 ES, 6 dominios, 65 subdominios, 35 temas, 96 flashcards, 65 términos, 24 escenarios y compatibilidad Supabase.
- Publicó el commit `e91e0d1` (`fix: collapse study subsections by default`) en `origin/main`.
- Durante el QA detectó que GitHub Pages ya servía el HTML nuevo, pero un navegador existente podía conservar `script.js` anterior. Versionó explícitamente `script.js?v=20260823h`, sincronizó `styles.css?v=20260823h`, actualizó la PWA a `BUILD_TIMESTAMP = 20260823h` y caché `simulador-v23`, y amplió `tools/validate_ui_palette.js` para bloquear discrepancias futuras entre esos tres recursos.
- Publicó el commit `fe665f3` (`fix: version study script cache`) en `origin/main`.
- Verificó mediante clic real en **Vercel** y **GitHub Pages**: ambos sirven CSS y JavaScript `20260823h`; Términos muestra 6 encabezados, 6 cerrados, 0 grupos desplegados y 0 fichas visibles al entrar; Escenarios muestra 6 encabezados cerrados, 0 grupos desplegados y 0 escenarios visibles. También confirmó la apertura de un único dominio, la apertura individual de una ficha, `Contraer Todos` y el estado cerrado en temas claro y oscuro.
- La apertura funcional del primer término durante el QA registró correctamente **1/65 leído y +5 XP** en el perfil sincronizado; no fue un cambio manual de datos.
- Conservó fuera de los commits los artefactos locales previos `.genai_translation_work/`, `__pycache__/` y `translation_cache_genai.json`.

### 2026-08-23 22:39 CST — Codex (GPT-5) — Cierre de sesión
- La entrada detallada de esta sesión es la de **2026-08-23 22:38 CST** inmediatamente anterior en esta bitácora. Esta referencia se agrega al final para restablecer el cierre append-only después de que la inserción automática la ubicara antes de la entrada 22:02, sin borrar ni mover contenido histórico.
- Estado final confirmado: commit funcional `c8123ec` publicado; Vercel y GitHub Pages sirven `20260823i`; selector global ES/EN y estados contraídos verificados mediante clic real.

### 2026-08-26 08:55 CST — Antigravity (Gemini 3.7 Flash)
- Integró la certificación oficial **Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)** bajo el proveedor **Microsoft** con estado activo en el selector de cursos.
- Extrajo y generó el banco completo de **356 preguntas oficiales de práctica** alineadas con la guía de examen de Microsoft Learn 2026 / CertSafari AI-103 en inglés (`questions_azure_ai103.js`, IDs `ai103-q1`..`ai103-q356`) y su traducción íntegra al español con preguntas gemelas (`questions_azure_ai103_es.js`, IDs `ai103-q1-es`..`ai103-q356-es`) distribuidas en los 5 dominios y 14 subdominios oficiales:
  - **Dominio 1**: Plan and manage an Azure AI solution (25% — 104 Qs: Subdominios 1.1, 1.2, 1.3, 1.4).
  - **Dominio 2**: Implement generative AI and agentic solutions (30% — 117 Qs: Subdominios 2.1, 2.2, 2.3).
  - **Dominio 3**: Implement computer vision solutions (10% — 51 Qs: Subdominios 3.1, 3.2, 3.3).
  - **Dominio 4**: Implement text analysis solutions (10% — 42 Qs: Subdominios 4.1, 4.2).
  - **Dominio 5**: Implement information extraction solutions (10% — 42 Qs: Subdominios 5.1, 5.2).
- Creó el módulo de estudio bilingüe `study_azure_ai103.js` con matrices de decisión arquitectónicas (despliegue Azure OpenAI Serverless vs PTU vs Provisioned, herramientas de agentes, Prompt Shields, RAG multimodal y búsqueda híbrida RRF en Azure AI Search).
- Creó `study_azure_ai103_resources.js` con **356 flashcards bilingües EN/ES** emparejadas 1:1 con las preguntas del examen y logros por dominio (`ai103_plan_master`, `ai103_agent_master`, `ai103_vision_master`, `ai103_text_master`, `ai103_retrieval_master`).
- Generó documentación offline en Markdown en `GENERATIVE AI ENGINEERING/Banco_Preguntas_Certificacion_AI103/` organizada por dominio.
- Wireó los nuevos scripts en `index.html` y actualizó el service worker `sw.js` a `BUILD_TIMESTAMP = '20260826a'` y caché `simulador-v26-20260826a`.
- Creó el validador automatizado `tools/validate_ai103_integration.js` comprobando 712 preguntas (356 EN + 356 ES), emparejamiento gemelo 1:1, IDs, tipos y carga de recursos de estudio.
- Comprobación de sintaxis JavaScript `node --check` completada con éxito en todos los archivos del repositorio.

### 2026-08-26 09:12 CST — Antigravity (Gemini 3.7 Flash)
- Desacopló al 100% la sección de estudio de **Microsoft Azure AI-103** respecto a Databricks GenAI:
  - Creó en `study_azure_ai103_resources.js` el banco de **Términos y Competencias clave oficiales de Azure AI** (`window.conceptosAzureAi103`) estructurado en los 5 dominios y 14 subdominios de la certificación (Foundry Hubs vs Projects, Prompt Shields, RAG HNSW/RRF, Semantic Reranker, Agent Service Lifecycle, GPT-4o Vision, Whisper, Document Intelligence Layout Markdown).
  - Creó **14 Escenarios de Decisión de Arquitectura Azure AI** (`window.azureAi103Patterns`) para la pestaña de Escenarios.
  - Creó **Ejemplos de Código SDK & APIs de Azure AI** (`window.comandosAzureAi103`) explicados línea por línea en Python para Azure OpenAI Client con Entra ID/Keyless auth, Structured Outputs con JSON Schema, Azure AI Agent Service con tools, Azure AI Search Hybrid Query con Semantic Reranker, y Azure Document Intelligence con salida nativa Markdown.
  - Actualizó `script.js` para resolver individualmente los recursos de Azure AI-103 (`isAzureAi103`), personalizando las pestañas a `SDK & Código` y los títulos a `Ejemplos de Código SDK & API de Azure AI` y `Términos y Competencias de Azure AI`.
  - Actualizó la PWA a `BUILD_TIMESTAMP = '20260826b'` y caché `simulador-v27-20260826b` en `sw.js` e `index.html`.
  - Validación con `node tools/validate_ai103_integration.js` y `node --check` completadas con 100% de éxito.

### 2026-08-26 09:22 CST — Antigravity (Gemini 3.7 Flash)
- Habilitó la traducción global automática y dinámica para todo el contenido de **Microsoft Azure AI-103**:
  - Verificó y aseguró 0 emojis en todos los archivos de AI-103 (`questions_azure_ai103.js`, `questions_azure_ai103_es.js`, `study_azure_ai103.js`, `study_azure_ai103_resources.js`), utilizando exclusivamente iconografía SVG inline con `currentColor`.
  - Conectó `bilingualMarkup(section.title)` y `bilingualMarkup(item.title)` en el renderizador del TOC de estudio en `script.js`, permitiendo que los títulos de dominios y temas cambien en tiempo real con el botón global ES/EN sin recargar la página.
  - Actualizó `study_azure_ai103.js` con títulos y subsecciones estructurados bilingüemente (`Title EN / Title ES`) y bloques paralelos `langSection('en', ...)` / `langSection('es', ...)`.
  - Actualizó la versión PWA a `BUILD_TIMESTAMP = '20260826c'` y caché `simulador-v28-20260826c` en `sw.js` e `index.html`.
  - Validación con `node tools/validate_ai103_integration.js` y `node --check` completada al 100%.
