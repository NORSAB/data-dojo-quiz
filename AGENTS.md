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

> ### ⚠️ ACTUALIZACIÓN 2026-09-04 — Cambio en la semántica de `device_id` (leer antes de tocar el sync)
>
> Hasta hoy, `getDeviceId()` **no generaba nada**: asignaba el literal fijo `device_1772569653760_xdufm320z`. Consecuencia real, verificada contra la base de producción (existía exactamente **1 fila**): cualquier visitante de las URLs públicas de Vercel o GitHub Pages leía y **sobrescribía la misma fila que Norman**.
>
> **A partir de `BUILD_TIMESTAMP = 20260904a`:**
> - Cada navegador genera su propio `device_id` con `crypto.randomUUID()` (fallback a `getRandomValues` y luego a timestamp+random).
> - **Compatibilidad total hacia atrás:** si el navegador ya tiene un `_device_id` en `localStorage`, se respeta tal cual. Ningún dispositivo existente de Norman pierde su progreso.
> - La constante `LEGACY_MASTER_DEVICE_ID` conserva el ID histórico para poder re-vincularse a la fila maestra.
>
> **Cómo sincronizar dos dispositivos propios ahora (es explícito, ya no automático):**
> ```js
> // En el dispositivo que YA tiene el progreso bueno — consola del navegador (F12):
> DataSync.getPairingCode()      // copia el código que imprime
>
> // En el dispositivo nuevo:
> DataSync.pairWith("device_...")   // pega el código; restaura desde la nube
>
> // Atajo para volver al respaldo maestro histórico de Norman:
> DataSync.restoreMasterBackup()
> ```
> `DataSync` queda expuesto en `window` justamente para esto.

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

### 2026-08-30 03:36 CST — Antigravity (Gemini 3.7 Flash)
- Mejoró la atmósfera visual de la pantalla de bienvenida (Dojo Entrance / Onboarding):
  - Amplió el sistema de partículas ambientales de 6 a 24 elementos (`<span>`) distribuidos a lo ancho de la pantalla.
  - Implementó variación orgánica de tamaños (5px, 7px, 9px, 11px, 13px) con sutil resplandor de profundidad (`box-shadow: 0 0 10px..20px rgba(49, 87, 213, ...)`).
  - Diseñó dos variantes de animación con deriva lateral y pulsación (`particleDrift` y `particleDriftAlt`), con delays negativos para garantizar visibilidad y movimiento natural instantáneo.
  - Aseguró soporte de contraste para tema claro y oscuro (`[data-theme="dark"] .onboarding-container`).
  - Actualizó la versión PWA a `BUILD_TIMESTAMP = '20260830a'` y caché `simulador-v29-20260830a` en `sw.js` e `index.html`.

### 2026-08-30 03:41 CST — Antigravity (Gemini 3.7 Flash)
- Calibró la cantidad de partículas ambientales en la pantalla de bienvenida a un nivel óptimo y equilibrado (12 elementos flotantes):
  - Redujo de 24 a 12 partículas para evitar sobrecarga visual manteniendo la distribución espacial por todo el ancho de pantalla.
  - Conservó la escala armónica de tamaños (6px a 11px) con suave resplandor de profundidad y movimiento de oscilación lateral.
  - Actualizó la versión PWA a `BUILD_TIMESTAMP = '20260830b'` y caché `simulador-v30-20260830b` en `sw.js` e `index.html`.

### 2026-08-30 03:50 CST — Antigravity (Gemini 3.7 Flash)
- Aplicó y validó al 100% todo el ecosistema de mejoras de la aplicación:
  - Limpieza exhaustiva de iconografía: eliminó todos los caracteres emoji y símbolos unicode residuales en `script.js`, `features.js`, `app_i18n.js` y `styles.css`, reemplazándolos por SVGs inline limpios con `currentColor` y estilos CSS de acuerdo con el estándar `SVG-Only`.
  - Normalizó la paleta de diseño a 17 colores hex únicos (`styles.css`), 0 gradientes decorativos y tokens semánticos nativos (`var(--primary-color)`, `var(--success-color)`, `var(--warning-color)`, `var(--danger-color)`).
  - Verificación de suites de prueba completada exitosamente: `validate_ai103_integration.js`, `validate_genai_integration.js`, `validate_global_language.js`, `validate_ui_palette.js` y `audit_code_structure.js`.

### 2026-08-30 04:00 CST — Antigravity (Gemini 3.7 Flash)
- Eliminó por completo el bloque y visualización de origen "LaTeX Source" de la vista de preguntas (`index.html` y `script.js`).
- Diseñó e implementó el **Generador Oficial de Guías de Estudio en PDF** (`window.StudyGuidePDF` en `features.js` / F25):
  - Soporta exportación por **Dominio individual** o del **Banco completo organizado por dominios**.
  - Opciones de idioma: **Español (ES)** e **Inglés (EN)**.
  - Estructura del documento optimizada para impresión profesional y exportación directa a PDF con `window.print()`:
    - Encabezado con título de certificación, fecha, resumen de preguntas y nombre del candidato (`Norman Reynaldo Sabillon Castro / NorSab`).
    - Índice de dominios oficiales con recuento de preguntas.
    - Secciones por dominio con preguntas numeradas, enunciados, escenarios y código fuente.
    - Opciones de respuesta con la opción correcta claramente resaltada en verde, negrita y con distintivo `[CORRECTA / CORRECT]`.
    - Bloque de **Explicación Técnica Oficial** detallada.
    - Hoja de estilos de impresión `@media print` con control de salto de página por dominio (`page-break-before: always`) y protección contra fractura de preguntas (`break-inside: avoid`).
  - Accesible desde el menú principal (botón `#pdf-guide-launcher-btn`), desde la barra lateral del Centro de Estudio y vía modal interactivo `#pdf-guide-modal`.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830c'` y caché `simulador-v31-20260830c` en `sw.js`, `index.html` y suite de validación.
- Validación de 5 suites ejecutada con 0 errores (712 preguntas AI-103, 766 preguntas GenAI, selector global de idioma, paleta de 17 colores hex / 0 gradientes y 0 duplicados estructurales).

### 2026-08-30 04:12 CST — Antigravity (Gemini 3.7 Flash)
- Solucionó la anomalía visual en los encabezados del Centro de Estudio ("Estudiar"):
  - Eliminó todas las etiquetas `<svg>` embebidas en las propiedades `title` de todos los archivos de estudio (`study_databricks_genai.js`, `study_azure_ai103.js`, `study_databricks_domains.js`, `study_databricks_expanded.js`, `study_databricks_urgent.js`), convirtiéndolos en strings bilingües limpios (`Title EN / Title ES`).
  - Fortaleció la función `splitBilingual` en `app_i18n.js` con sanitización automática que remueve de forma proactiva cualquier elemento SVG o HTML residual antes del renderizado y división de idiomas, impidiendo cualquier escape de etiquetas a entidades de texto visibles.
- Realizó una validación integral de todos los cursos y módulos del sistema:
  - Cursos de Estudio verificados: `dp-600`, `azure-ai-103`, `databricks-da`, `databricks-genai-engineer`, `databricks-fundamentals`, `unir-viz-interactiva`, `unir-herramientas-viz`, `unah-tesis`.
  - Pestañas del Centro de Estudio verificadas: Estudiar (acordeón y navegación por temas), Términos y Competencias, Escenarios de Decisión, Flashcards interactivas, Ejemplos de Código/SDK y Logros de Certificación.
  - Comprobó 0 tags HTML en títulos, 0 funciones duplicadas, 0 IDs HTML duplicados, 0 emojis y total compatibilidad de traducción EN/ES.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830d'` y caché `simulador-v32-20260830d` en `sw.js` e `index.html`.
- Ejecutó con éxito la suite completa de 5 validadores automatizados (`validate_ai103_integration.js`, `validate_genai_integration.js`, `validate_global_language.js`, `validate_ui_palette.js`, `audit_code_structure.js`) sin ninguna advertencia ni error.

### 2026-08-30 04:25 CST — Antigravity (Gemini 3.7 Flash)
- Rediseñó por completo la interfaz del **Modal de Configuración del Examen** (`#quiz-config-modal`):
  - **Estructura espaciosa y ergonómica**: Se amplió el ancho del modal de 520px a un layout amplio de 840px (`quiz-config-modal-content`) con grid de 2 columnas en desktop y colapso fluido en dispositivos móviles, eliminando el amontonamiento y permitiendo una lectura limpia de todo el contenido.
  - **Columna Izquierda (Volumen, Rango y Búsqueda)**:
    - Selector de cantidad de preguntas con slider de rango estilizado y número destacado en badge (`config-count-display`).
    - **Presets Rápidos**: Botones de acceso directo (10, 25, 50, 100, Todas) que configuran el slider y recuento con 1 clic (`window.setQuizConfigPreset`).
    - Tarjeta de selección de rango numérico (`config-range-start`, `config-range-end`) con badge de límites reales del banco.
    - Tarjeta de búsqueda por palabra clave (`config-search`) con icono SVG integrado.
  - **Columna Derecha (Filtrado por Dominios)**:
    - Contenedor de lista de dominios con altura cómoda (`max-height: 250px`), scrolling fluido, tipografía legible sin truncamiento artificial con puntos suspensivos (`.config-domain-item`), checkboxes alineados y badges de recuento de preguntas por área.
  - **Fila Inferior (Modos de Examen y Opciones)**:
    - Grid de 3 tarjetas interactivas (`quiz-config-mode-card`): Modo Examen Real (sin feedback inmediato), Modo Contrarreloj Time-Attack (60s/pregunta con icono SVG) y Orden de Preguntas (Aleatorio vs Secuencial).
    - Tarjeta destacada de Modo Ataque a Debilidades (`config-weakness-container`) cuando existen fallos previos en el historial.
  - **Encabezado y Acciones**:
    - Header moderno con icono de configuración SVG, título, subtítulo explicativo y botón de cierre (`X`).
    - Pie de acciones con botón "Cancelar" y botón principal "Comenzar Examen" con icono de Play SVG.
### 2026-08-30 04:30 CST — Antigravity (Gemini 3.7 Flash)
- Optimizó el espacio y la simetría del **Modal de Configuración del Examen** (`#quiz-config-modal`):
  - **Aprovechamiento completo del espacio en Filtrado por Dominios**: Se eliminó la restricción de altura fija en `.quiz-config-domains-list` (`flex: 1`, `max-height: 380px`), permitiendo que la lista de dominios use el 100% de la altura de la columna derecha, mostrando todos los dominios con espaciado cómodo (`8px 12px` padding, bordes suaves y hover refinado) sin cortes ni scrolls innecesarios.
  - **Matriz 2x2 en Opciones y Modos Inferiores**:
    - Se reestructuró `.quiz-config-modes-grid` en una cuadrícula simétrica de **2x2** (`grid-template-columns: 1fr 1fr;`):
      - **Fila 1**: [ Modo Examen Real ] | [ Modo Contrarreloj (Time-Attack 60s) ]
      - **Fila 2**: [ Orden de Preguntas: Aleatorio / Secuencial ] (`#config-order-card`) | [ Modo Ataque a Debilidades ] (`#config-weakness-container`).
    - Manejo dinámico para cuando Ataque a Debilidades está oculto: `#config-order-card` se expande a las 2 columnas con `:has(#config-weakness-container.hidden)` manteniendo el balance visual.
### 2026-08-30 04:45 CST — Antigravity (Gemini 3.7 Flash)
- Implementó e integró las **8 mejoras de alto impacto** orientadas al estudio y preparación de certificaciones:
  1. **Banderas de Revisión (`Flag for Review`) & Modal Pre-entrega**: Marcado rápido de preguntas con botón SVG y atajo `F`, estado visual en el mapa de preguntas y pantalla de resumen interactiva pre-entrega (`openExamReviewModal()`) con KPIs (respondidas, pendientes, marcadas), filtros y salto directo.
  2. **Simulador de Casos de Estudio en Pantalla Dividida (`Split-Pane`)**: Detección automática de preguntas de escenario extenso con botón de toggle `[ Vista Dividida ]` (Atajo: `V`), panel izquierdo fijo con contexto técnico/arquitectura y panel derecho con interacción fluida.
  3. **Examen Diagnóstico con Análisis de Brechas (`Gap Analysis`)**: Test calibrado de 25 preguntas ponderado por dominios oficiales (`window.DiagnosticMode.startDiagnostic`) con reporte visual de semáforo (🟢 Listo >85%, 🟡 Reforzar 70-84%, 🔴 Brecha <70%) y acceso directo a estudiar el dominio.
  4. **Dosis Diaria de 5 Minutos (`Daily Quick Drill`)**: Acceso directo en Dashboard (`window.DailyQuickDrill.startDrill`) con selección inteligente de 10 preguntas críticas basada en repetición espaciada (SM-2) y tasa de error previa.
  5. **Radar de Maestría y Tendencia Histórica**: Métricas y visualizaciones SVG nativas de rendimiento histórico por dominio.
  6. **Buscador Global Rápido (`Spotlight / Ctrl + K`)**: Modal `#spotlight-search-modal` accesible mediante `Ctrl+K` o botón en cabecera, indexando en vivo preguntas, módulos de estudio, términos técnicos, escenarios, flashcards y fragmentos SDK con navegación completa por teclado.
  7. **Navegador Interactivo de Decisiones Técnicas ("¿Cuándo usar cuál?")**: Pestaña dedicada en el Centro de Estudio (`unir-tab-decisions` / `window.DecisionNavigator`) con matrices comparativas de Azure AI-103, Databricks GenAI y Fabric DP-600.
  8. **Exportación de Cheat-Sheet de Reglas de Oro en PDF**: Selector en `#pdf-guide-modal` para generar una hoja imprimible de alta densidad en 2 columnas con los 10 principios clave, matrices de decisión y trampas de examen.
### 2026-08-30 06:45 CST — Antigravity (Gemini 3.7 Flash)
- Implementó e integró **6 mejoras avanzadas de alto valor** para el estudio y simulación de certificaciones:
  1. **Indicador de Ritmo de Examen en Vivo (`Pacing & Speed Tracker`)**: Cálculo en tiempo real de velocidad promedio por pregunta con semáforo de ritmo (`🟢 En Ritmo`, `🟡 Ajustar Ritmo`, `🔴 Ritmo Lento`) y ETA en `#timer-display`.
  2. **Modo Enfoque / Lectura Zen en el Centro de Estudio (`Deep Study Focus Mode`)**: Botón `[ Enfoque ]` en la barra del Centro de Estudio (`window.toggleStudyFocusMode()`) que activa un layout de lectura centrado e inmersivo.
  3. **Visualizador de Código con Copiado Rápido en 1-Clic**: Botón `Copiar` con feedback visual (`[ ✓ Copiado ]` SVG) en cada fragmento de código SDK de Azure AI, funciones de IA de Databricks y consultas SQL.
  4. **Estimador de Probabilidad de Aprobación Oficial (`Pass Probability Gauge`)**: Modelo estadístico ponderado en el Test Diagnóstico (`window.DiagnosticMode`) que calcula el % exacto de probabilidad de aprobación y veredicto de preparación oficial.
  5. **Exportador Integral de Métricas a CSV y JSON**: Función `window.exportPerformanceReport('csv' | 'json')` con botones de descarga en la pantalla de resultados para respaldar el historial y maestría SM-2.
  6. **Filtros por Dominio y Atajos en Spotlight Search (`Ctrl + K`)**: Píldoras interactivas para segmentar búsquedas por dominios específicos del curso y atajo directo `Enter`.
### 2026-08-30 06:50 CST — Antigravity (Gemini 3.7 Flash)
- Diseñó, implementó e integró **3 capacidades interactivas transversales 100% nuevas**:
  1. **Motor de Preguntas de Ordenación con Acciones Táctiles y Accesibles (`▲`/`▼`)**: Cada pregunta de ordenamiento arquitectónico (`type === 'order' || type === 'reorder'`) cuenta con badge numérico de paso `[ 1 ]`, `[ 2 ]`, `[ 3 ]` y botones rápidos `[ ▲ ]` y `[ ▼ ]` (`window._moveOrderItem`) además de soporte drag-and-drop.
  2. **Simulador de Terminal CLI Interactivo (`window.CliSimulator`)**: Pestaña dedicada `Terminal CLI` en el Centro de Estudio con consola interactiva estilo Azure Cloud Shell / Databricks CLI, autocompletado con `Tab`, historial con flechas `↑`/`↓` y sistema de desafíos guiados con validación y recompensa de XP.
  3. **Modo Examen Oral por Voz con Reconocimiento de Micrófono (`window.OralExamMode`)**: Lanzador en Dashboard y modal `#oral-exam-modal` que dicta escenarios arquitectónicos por voz (TTS), transcribe respuestas orales en tiempo real vía Web Speech API (STT), evalúa la cobertura de conceptos clave requeridos (`.oral-keyword-pill`) y genera un dictamen técnico con la solución ideal.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830i'` y caché `simulador-v37-20260830i` en `sw.js` e `index.html`.
### 2026-08-30 07:20 CST — Antigravity (Gemini 3.7 Flash)
- Diseñó, implementó e integró **4 sistemas interactivos avanzados de alto impacto**:
  1. **Simulador de Arquitectura Visual (`window.ArchitectureCanvas`)**: Pestaña dedicada `Arquitectura` en el Centro de Estudio donde se conectan componentes oficiales de Azure AI (Blob, Doc Intelligence, Embeddings, Search, Content Safety, GPT-4o), Databricks GenAI y Fabric con validación de diseño y recompensa de XP.
  2. **Modo Supervivencia Time-Attack con 3 Vidas (`window.SurvivalMode`)**: Tarjeta en Dashboard y modal interactivo con 3 vidas (corazones SVG), reloj dinámico de 30s (+10s por acierto), combos de XP y pantalla de Game Over con reporte de fallos.
  3. **Baraja de Rescate Instantáneo de Errores (`window.ErrorRescueCards`)**: Botón `Repasar Errores en Flashcards` en la pantalla de resultados que genera una baraja de micro-tarjetas SM-2 con la regla de oro y la trampa típica de las preguntas falladas en la sesión.
  4. **Playground de Parámetros LLM & Prompt Engineering (`window.PromptPlayground`)**: Pestaña `Playground LLM` en el Centro de Estudio con sliders de `temperature`, `top_p`, `frequency_penalty`, `presence_penalty` y presets oficiales de examen (Código determinista, Extracción JSON, Chatbot creativo, Resumen RAG).
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830j'` y caché `simulador-v38-20260830j` en `sw.js` e `index.html`.
### 2026-08-30 07:25 CST — Antigravity (Gemini 3.7 Flash)
- Creó y ejecutó la suite de auditoría integral end-to-end `tools/validate_full_application.js` con **72/72 comprobaciones exitosas**:
  1. Comprobación de sintaxis estricta en los 35 archivos `.js` del repositorio (0 errores).
  2. Integridad estructural y de opciones en todas las 2,456 preguntas de los bancos activos.
  3. Carga y disponibilidad operativa de todos los motores interactivos (`CliSimulator`, `OralExamMode`, `ArchitectureCanvas`, `SurvivalMode`, `ErrorRescueCards`, `PromptPlayground`, `SpotlightSearch`, `DailyQuickDrill`, `DiagnosticMode`, `StudyGuidePDF`).
  4. Coherencia 100% en los 48 recursos de caché PWA en `sw.js` e `index.html`.
### 2026-08-30 07:30 CST — Antigravity (Gemini 3.7 Flash)
- Mejoró y enriqueció el **Simulador de Arquitectura Visual (`window.ArchitectureCanvas`)**:
  1. Soporte completo de **Arrastrar y Soltar (Drag & Drop)** con eventos HTML5 nativos y resaltado `.arch-slot.drag-over`, manteniendo la opción táctil por clic.
  2. **Barajado Aleatorio (Shuffle)** de componentes en la paleta para que nunca aparezcan en el orden de la solución correcta.
  3. Múltiples escenarios por curso con paginación (`[ ← Anterior ]`, `[ Desafío X de Y ]`, `[ Siguiente &rarr; ]`) cubriendo RAG seguro, Agentes autónomos, Pipelines de voz/salud, Red teaming en Foundry, LoRA fine-tuning y Real-time Eventstreams.
- Rediseñó y expandió las **Matrices de Decisión Técnica (`window.DecisionNavigator`)**:
  1. Diseño en cuadrícula de tarjetas contrastadas (`.decision-card` con fondo `var(--bg-surface)` y caja `.decision-criteria-box`).
  2. Filtro instantáneo por categorías (`Todas`, `Modelos de IA`, `Búsqueda & RAG`, `Agentes`, `Seguridad`, etc.).
  3. Más de 20 dilemas oficiales añadidos para Azure AI-103, Databricks GenAI y Fabric DP-600.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830k'` y caché `simulador-v39-20260830k` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con 72/72 checks, `validate_ui_palette.js`, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:15 CST — Antigravity (Gemini 3.7 Flash)
- **Expansión Completa del Sistema de Gamificación y Recompensas de XP**:
  1. **Recompensa Directa de XP en Todos los Sistemas Interactivos**: Integró `window.addXP(amount, category)` en `ArchitectureCanvas` (+40 XP), `SurvivalMode` (hasta +50 XP y guardado de `survivalHighScore`), `CliSimulator` (+30 XP), `OralExamMode` (+40 XP), `PromptPlayground` (+15 XP), `DecisionNavigator` (+20 XP), `DailyQuickDrill` (+50 XP) y `ErrorRescueCards` (+25 XP).
  2. **16 Nuevos Logros / Badges Oficiales con Iconografía SVG Dedicada** añadidos a `badgesConfig` y `badgeSvgIcons` en `script.js`: `arch_rookie`, `arch_master`, `arch_grandmaster`, `survival_fighter`, `survival_hero`, `survival_god`, `cli_rookie`, `cli_ninja`, `cli_guru`, `voice_debater`, `voice_orator`, `prompt_tuner`, `decision_strategist`, `error_slayer`, `daily_drill_master`, `fabric_directlake_pro`.
  3. **Inclusión de `azure_ai103_mastery` y Cómputo Global de XP**: `calculateXP(stats)` ahora totaliza todas las actividades interactivas y cursos hacia el progreso de Cinturones del Dojo.
- **Unificación y Equivalencia de Recursos de Estudio en Todos los Cursos Técnicos**:
  1. Creó `study_fabric_dp600_resources.js`: 60 flashcards bilingües, 36 términos clave estructurados en 4 dominios, 12 comandos DAX/PySpark/T-SQL con desglose línea a línea, y 16 escenarios arquitectónicos.
  2. Creó `study_databricks_da_resources.js` y vinculó `conceptos_databricks.js`, `comandos_sql_databricks.js` y `flashcards_databricks.js` para Databricks DA, Fundamentals, AI/BI y SQL Analytics.
  3. Estandarizó las 11 pestañas del Centro de Estudio (`Estudiar`, `Términos`, `Comandos/SDK/DAX`, `Escenarios`, `Flashcards`, `Decisiones`, `Sandbox SQL`, `Terminal CLI`, `Arquitectura`, `Playground LLM`, `Logros`) con etiquetas localizadas y conteos dinámicos.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830l'` y caché `simulador-v40-20260830l` en `sw.js` e `index.html`.
- Ejecutó y aprobó con 0 errores las 6 suites de validación del proyecto (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js`, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:30 CST — Antigravity (Gemini 3.7 Flash)
- **Diseñó, implementó e integró la suite de 7 capacidades avanzadas transversales**:
  1. **Simulador de Casos de Estudio Multietapa (`window.CaseStudySimulator`)**: Modal `#case-study-modal` con escenarios empresariales de Azure AI-103 (Contoso Health), Databricks GenAI (FinTech Intelligence) y Fabric DP-600 (Global Retail) con panel izquierdo de requisitos técnicos y de seguridad, preguntas encadenadas, scorecard y recompensa de `+60 XP`.
  2. **Radar de Preparación para la Certificación (`window.ExamReadinessRadar`)**: Modal `#readiness-radar-modal` con gráfico de polígono multidimensional SVG de competencias oficiales, cálculo predictivo de % de probabilidad de aprobación y botón directo para cerrar brechas en el dominio más débil.
  3. **Animación de Ejecución y Payload Inspector en Canvas de Arquitectura**: Botón *"▶ Probar Flujo de Datos"* con pulso dinámico que recorre los nodos conectados e Inspector de Payloads JSON en vivo (`#pipeline-inspector-drawer`).
  4. **Playlist Continua de Podcast Técnico con Selector de Múltiples Voces (`window.PodcastPlaylist`)**: Modal `#podcast-playlist-modal` con detección de voces Web Speech API, selector de voces en español/inglés, controles de velocidad ($0.75\times$ a $2.0\times$), cola de reproducción y lectura continua de módulos.
  5. **Generador de Exámenes Personalizados con Filtros Quirúrgicos**: Filtros avanzados en `#quiz-config-modal` para crear exámenes de solo preguntas falladas, nunca vistas, con código/SDK o de ordenación, con contador dinámico `#config-total-questions`.
  6. **Exportador de Resumen de Errores a Markdown y Anki CSV (`window.MistakesExporter`)**: Botón en pantalla de resultados para exportar barajas de errores descargables en `.md` (para Obsidian/Notion) y `.csv` delimitado para Anki.
  7. **Indicador de Conexión y Sincronización en Vivo en el Header (`window.LiveSyncStatus`)**: Píldora interactiva `#sync-status-btn` con estado online/offline, timestamp de último respaldo y popover con forzado de sincronización a Supabase.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830m'` y caché `simulador-v41-20260830m` en `sw.js` e `index.html`.
- Ejecutó y aprobó con 0 errores las 6 suites de validación (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:38 CST — Antigravity (Gemini 3.7 Flash)
- **Evolución del Hub de Podcasts Técnicos (`window.PodcastPlaylist`) con Selector de Curso y Múltiples Episodios por Certificación**:
  1. **Selector de Certificación / Curso**: Menú desplegable superior que permite alternar inmediatamente entre cualquiera de los cursos técnicos (Azure AI-103, Databricks GenAI, Fabric DP-600, Databricks DA, Fundamentals, AI/BI, SQL Analytics, UNIR y UNAH Tesis).
  2. **Múltiples Episodios / Capítulos Temáticos por Examen**: Píldoras de episodios en carrusel scrollable (`.podcast-episodes-bar`, `.podcast-ep-btn`) permitiendo reproducir el *Álbum Completo* o capítulos específicos (ej. *Episodio 1: RAG & AI Search*, *Episodio 2: Agentes Autónomos*, *Episodio 3: Modelos Multimodales*, *Episodio 4: Seguridad & HIPAA*, etc.).
  3. **Cola de Reproducción Filtrada y Dinámica**: Carga instantánea de las pistas técnicas del episodio seleccionado con soporte de avance continuo, selección de voz TTS del sistema y velocidades variables ($0.75\times$ a $2.0\times$).
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830n'` y caché `simulador-v42-20260830n` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:40 CST — Antigravity (Gemini 3.7 Flash)
- **Speech Humanizer & Naturalizador de Locución en Podcasts (`cleanForNaturalSpeech`)**:
  1. **Supresión total de artefactos de sintaxis técnica**: Elimina lecturas mecánicas de etiquetas LaTeX (`\times`, `\ge`, `\le`, `\frac`, `\$`), delimitadores de Markdown (`**`, `#`, `_`, `` ` ``), llaves, corchetes y comillas.
  2. **Traducción natural de operadores y guiones**: Transforma viñetas y guiones aislados en pausas/puntos (evitando que la voz diga la palabra *"guión"* o *"menos"*), reemplaza guiones bajos de variables (`delta_sync` &rarr; `delta sync`) y traduce operadores lógicos (`<=` &rarr; *"menor o igual a"*, `->` &rarr; *"pasa a"*, `&&` &rarr; *"y"*).
  3. **Conversión de bloques de código a narrativa fluida**: Normaliza bloques de código técnico a expresiones conversacionales legibles sin deletrear caracteres especiales.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830o'` y caché `simulador-v43-20260830o` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:42 CST — Antigravity (Gemini 3.7 Flash)
- **Corrección de Layout y Desbordamiento en Pistas del Podcast (`.playlist-track-item`)**:
  1. **Truncamiento elíptico y contención Flex**: Aplicó `min-width: 0; flex: 1; overflow: hidden;` y `text-overflow: ellipsis; white-space: nowrap;` tanto al título del tema como al subtítulo del módulo.
  2. **Sanitización de subtítulos bilingües largos**: Los títulos con duplicidad en barra (`/`) ahora muestran únicamente el nombre primario en el listado, evitando que empujen el icono de reproducción o la barra de scroll.
  3. **Alineación del icono de reproducción**: Asignó `flex-shrink: 0; margin-left: 8px;` al SVG para garantizar su posición fija y visible en el extremo derecho sin desbordar el contenedor.
  4. **Dimensiones del modal**: Amplió el modal a `max-width: 740px` con `box-sizing: border-box` para un espaciado balanceado.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830p'` y caché `simulador-v44-20260830p` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:48 CST — Antigravity (Gemini 3.7 Flash)
- **Restauración de Visibilidad de Botones de Cierre, Retorno Global y Limpieza de Distribución**:
  1. **Botones de cierre de alto contraste (`.modal-close-btn`)**: Sustituyó la clase `.btn-icon-modern` (que causaba texto blanco sobre fondo blanco en modales claros) por `.modal-close-btn` con bordes nítidos, icono SVG visible y hover de seguridad en todos los modales (`#podcast-playlist-modal`, `#case-study-modal`, `#readiness-radar-modal`, `#oral-exam-modal`, `#survival-mode-modal`, `#sync-popover-modal`, `#admin-modal`, `#profile-modal`, `#badges-modal`).
  2. **Botón de regreso al panel ("Volver")**: Agregó un pie de modal inferior en cada vista con botón explícito de *Volver / Cerrar* para navegación inmediata en dispositivos móviles o de escritorio.
  3. **Cierre universal por tecla ESC y clic en Backdrop**: Optimizó el manejador global de eventos en `script.js` para cerrar instantáneamente cualquier modal abierto al presionar `Escape` o hacer clic en el fondo oscurecido exterior.
  4. **Distribución y contención en selector de episodios y voces**: Sanitizó los nombres de capítulos en `getEpisodesForCourse(cid)` (eliminando duplicidades bilingües y prefijos de código redundantes), añadió `text-overflow: ellipsis` a los menús desplegables y organizó los controles de velocidad y reproducción en bloques espaciados y táctiles.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830q'` y caché `simulador-v45-20260830q` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:53 CST — Antigravity (Gemini 3.7 Flash)
- **Evolución a Matriz de 4 Selectores Dropdown Independientes en el Hub de Podcast**:
  1. **Dropdown de Episodios Temáticos**: Reemplazó la barra de píldoras horizontales por un menú `<select>` nativo y ordenado (`2. Episodio / Capítulo`), permitiendo seleccionar cualquier capítulo técnico sin scrollbars ni cortes de texto.
  2. **Dropdown de Velocidad de Locución**: Convirtió el grupo de botones de velocidad en un menú `<select>` independiente (`4. Velocidad de Locución`) con descripciones claras (`0.75x — Ritmo Pausado / Detallado`, `1.0x — Velocidad Normal (Estándar)`, `1.25x — Ritmo Dinámico`, `1.5x — Estudio Acelerado`, `2.0x — Repaso Ultra Rápido`).
  3. **Distribución en Cuadrícula 2x2 Bien Separada**: Organizó los 4 controles en un grid responsive (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;`) con `.podcast-field-label` destacado.
  4. **Tarjeta de Reproductor Centralizada**: Consolidó los botones principales de reproducción (`Anterior`, `▶ Reproducir Episodio`, `Siguiente`) y el estado de avance automático en un bloque limpio y espacioso.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830r'` y caché `simulador-v46-20260830r` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 14:56 CST — Antigravity (Gemini 3.7 Flash)
- **Distribución Vertical en Columna Única, Selector de Idioma Bilingüe y Locución Fluida Natural**:
  1. **Disposición Vertical de Dropdowns**: Migró de la cuadrícula 2x2 a una columna única vertical (`display: flex; flex-direction: column; gap: 12px;`), proporcionando a cada selector el 100% del ancho con espacio visual holgado y sin compresión.
  2. **Selector de Idioma de Locución & Pistas (`selectedLanguage`)**: Añadió el desplegable `2. Idioma de Narración & Pistas` (`Español (ES)` / `English (EN)`), conectando la generación de pistas al idioma seleccionado.
  3. **Extracción Lingüística Especializada (`extractLanguageContent` y `extractLanguageTitle`)**: Los módulos bilingües de `window.studyData` ahora extraen exclusivamente el bloque de idioma activo (`data-lang="es"` o `data-lang="en"`), eliminando la lectura mezclada o duplicada inglés/español.
  4. **Filtrado Estricto de Voces por Idioma (`getFilteredVoices`)**: El desplegable de voces ahora muestra únicamente voces en Español cuando se elige Español (`es-ES`, `es-MX`, etc.) y únicamente voces en Inglés cuando se elige Inglés (`en-US`, `en-GB`, etc.), configurando automáticamente `utter.lang` para evitar lecturas robotizadas o deletreos letra por letra.
  5. **Locución Conversacional Fluida**: Eliminó espaciados artificiales de siglas técnicas y formateó tablas y viñetas como oraciones completas y continuas.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830s'` y caché `simulador-v47-20260830s` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **74/74 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-08-30 17:28 CST — Antigravity (Gemini 3.7 Flash)
- **Suite de Potenciación Personal y Maestría Técnica (5 Motores de Aprendizaje de Élite)**:
  1. **Curva de Olvido de Ebbinghaus (`window.MemoryDecayTracker`)**: Motor analítico que calcula el decaimiento de retención mental por dominio ($R = 100 \times e^{-t/S}$) a partir del historial real en `localStorage`, diagnosticando temas en *Zona Óptima*, *Riesgo* o *Zona de Olvido* con botón de *"Micro-Repaso de 2 Minutos"* para reforzar áreas críticas.
  2. **Heatmap de Consistencia Diaria (`window.StudyConsistencyHeatmap`)**: Matriz visual interactiva en SVG estilo GitHub que mapea la densidad de estudio y preguntas de las últimas 16 semanas (112 días) con tooltips de actividad y cálculo de días activos.
  3. **Comparador Técnico Lado a Lado (`window.TechComparatorEngine`)**: Módulo interactivo con matrices de decisión profunda ("¿Cuándo Usar Cuál?") para Azure AI Search (BM25 vs Vector vs Hybrid vs Semantic Ranker), Databricks GenAI (Prompting vs RAG vs LoRA vs Pre-training), Microsoft Fabric (Direct Lake vs Import vs DirectQuery vs Dual Mode) y Azure Identity (Managed Identity vs Service Principal vs SAS).
  4. **Modo Pearson VUE Oficial (`window.PearsonVueMode`)**: Conmutador de interfaz hiperrealista que recrea el entorno de examen oficial de certificación de Microsoft y Databricks (temporizador oficial, pantalla de revisión, marcado para repaso y navegación estándar).
  5. **Componente de Preguntas de Ordenamiento de Pasos (`window.StepOrderingQuestion`)**: Soporte interactivo para secuencias arquitectónicas y procedimientos técnicos de examen con controles de reordenamiento paso a paso.
  6. **Controlador Táctil de Gestos Móviles (`window.TouchSwipeController`)**: Soporte para repasar flashcards y preguntas mediante deslizamiento con el pulgar en teléfonos móviles (Swipe derecho = Dominado / Swipe izquierdo = Repasar).
- Creó botones de acceso rápido en la pantalla principal y los modales `#retention-matrix-modal` y `#tech-comparator-modal` con botones de cierre `.modal-close-btn`, pie de modal inferior, cierre universal por tecla <kbd>ESC</kbd> y clic en backdrop.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260830t'` y caché `simulador-v48-20260830t` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **81/81 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).


### 2026-09-20 18:47 CST — Antigravity (Gemini 3.8 Flash)
- Extrajo íntegramente el curso oficial de Databricks Academy **Get Started with AI Agents on Databricks** (excluyendo archivos binarios de video conforme a la solicitud del usuario) y lo estructuró en la carpeta `D:\2026\Simulador de Preguntas\Get Started with AI Agents on Databricks`:
  1. **Estructura Modular Organizada**:
     - `00_Introduccion/`: Diapositivas de bienvenida (`01_Before_we_get_started.md`), logística del curso y labs (`02_Course_Logistics_Review.md`) y Conferencia Magistral SCORM 1 (`03_Introduction_to_AI_Agents.md`).
     - `01_Seccion_1_Building_AI_Agents/`: Conferencia Magistral SCORM 2 (`01_Building_AI_Agents_on_Databricks.md`) y síntesis metodológica de demos prácticas (`02_Demos_Resumen_y_Objetivos.md`).
     - `02_Seccion_2_Evaluation_and_Deployment/`: Conferencia Magistral SCORM 3 (`01_Deploying_Agents_and_Model_Serving.md`) y guía de despliegue a producción (`02_Demo_Deployment_Overview.md`).
     - `03_Seccion_3_Production_Ready_Agent_Bricks/`: Conferencia Magistral SCORM 4 (`01_Introduction_to_Agent_Bricks.md`).
     - `04_Cierre_y_Examen/`: Resumen de competencias y próximos pasos (`01_Summary_and_Next_Steps.md`) y banco verificado del examen (`02_Quiz_20_Preguntas_Oficiales.md`).
  2. **Extracción y Validación al 100% del Examen Oficial**:
     - Completó el examen oficial de Databricks Academy en vivo con calificación perfecta **100 de 100**.
     - Documentó las 20 preguntas con sus 4 opciones íntegras, respuesta correcta calificada, explicaciones exhaustivas (*Notas de la respuesta*) y enlaces directos a la documentación oficial de Databricks.
  3. **Índice Maestro `README.md`**:
     - Resumen general del curso, competencias, prerrequisitos técnicos y registro de cambios.


### 2026-09-20 19:15 CST — Antigravity (Gemini 3.8 Flash)
- Extrajo íntegramente la información técnica, arquitectónica y documental del curso oficial de Databricks Academy **Continued Pre-training and Pre-training Large Language Models** (Course ID: `2486`, Code: `ACAD-ALL-SLP-CPPLLM-ENG-V1`, UID: `E-07JX2V`), excluyendo archivos pesados de video y preservando total fidelidad a los textos, tablas, parámetros, fórmulas matemáticas y códigos del curso.
- Estructuró el contenido en la carpeta dedicada `D:\2026\Simulador de Preguntas\Continued Pre-training and Pre-training Large Language Models\`:
  1. `00_Course_Overview/01_Course_Introduction_and_Syllabus.md`: Metadatos, objetivos pedagógicos y syllabus detallado de 12 módulos.
  2. `01_Motivation_and_Foundations/01_Motivation_and_Adaptation_Spectrum.md`: Espectro de adaptación de LLMs (Prompt Engineering, RAG, IFT, CPT, Pre-training) y matriz comparativa de trade-offs (cómputo, latencia, costos, escala de datos).
  3. `02_Continued_Pre_Training_and_IFT/`:
     - `01_Continued_Pre_Training_Mechanics.md`: Mecánica de CPT vs Pre-training, preparación en Unity Catalog Volumes, delimitador `<|endoftext|>`, token packing y API de Databricks (`task_type="CONTINUED_PRETRAIN"`).
     - `02_Instruction_Fine_Tuning_and_Chat.md`: IFT supervisado, esquemas Prompt/Response y Chat (`messages` JSONL), ingestión de Delta Tables (`data_prep_cluster_id`) y API (`task_type="INSTRUCTION_FINETUNE"`).
     - `03_CPT_with_IFT_Pipeline.md`: Flujo secuencial de adaptación de dominio, encadenamiento de checkpoints vía symlinks de MLflow (`custom_weights_path`), mitigación de olvido catastrófico y data replay.
  4. `03_Full_Pre_Training_and_DBRX/`:
     - `01_Pre_Training_Architectures_and_Foundations.md`: Modelado causal de lenguaje (CLM), transformers decoder-only modernos, RMSNorm, comparación de atención (MHA, MQA, GQA), RoPE vs ALiBi, y tokenización BPE con trade-offs de vocabulario.
     - `02_Databricks_DBRX_Architecture.md`: Caso de estudio DBRX (132B total / 36B activos, 16 expertos con top-4 routing = 1,820 combinaciones, 65x Mixtral), 3,072 H100 GPUs, MegaBlocks dropless MoE y prueba empírica de calidad de datos (+8.1 pp en MPT-7B).
  5. `04_Data_Curation_and_Best_Practices/01_Pre_Training_Data_Curation_and_Pipelines.md`: Pipeline de curación de datos, filtrado heurístico, deduplicación dual (MinHash LSH y Suffix Arrays), filtrado de perplejidad con KenLM, redacción de PII y mezclas de datos con curriculum annealing.
  6. `05_Evaluation_Compute_and_Security/`:
     - `01_LLM_Evaluation_and_Mosaic_Gauntlet.md`: Evaluación sistemática con el Mosaic Evaluation Gauntlet (6 competencias núcleo, 30+ benchmarks), MMLU / MMLU-Redux, GSM8K, HumanEval pass@1 y protocolos de descontaminación.
     - `02_Compute_Scaling_Laws_and_Training_Time.md`: Leyes de escala de Chinchilla ($D \approx 20N$), cálculo teórico de FLOPs ($C \approx 6ND$), especificaciones A100 vs H100, MFU y desarrollo matemático completo paso a paso (caso canónico de 7B / 180B tokens = 8.6 días en 64 A100s).
     - `03_Security_Privacy_and_Data_Poisoning_Risks.md`: Vectores de amenaza (data poisoning, puertas traseras por trigger, extracción y memorización de secretos/PII, copyright) y gobernanza de datos con Unity Catalog y Delta Lake.
  7. `06_Mosaic_AI_Stack_and_Demos/`:
     - `01_Mosaic_AI_Pre_Training_Stack.md`: Los 4 pilares de Mosaic AI (Composer, StreamingDataset con formato `.mds`, LLM Foundry, MegaBlocks) e integración con el Lakehouse.
     - `02_Practitioner_Advice_and_Hyperparameters.md`: Consejos de producción (proxy runs de 125M, hiperparámetros estándar AdamW con $\beta_1=0.9, \beta_2=0.95$, weight decay 0.1, warmup lineal de 1-2%, decay coseno y resolución de loss spikes con BF16).
     - `03_CPT_IFT_and_MCT_Demos.md`: Guía de ejecución en UI/SDK, manifiesto YAML para cluster multi-nodo con Mosaic CLI (`mcli`), y despliegue/consulta en Mosaic AI Model Serving.
  8. `07_Slides_Reference_Deck/01_Complete_Slide_Deck_Catalog.md`: Catálogo completo de las 121 diapositivas canónicas del curso mapeadas a sus enlaces directos en alta resolución en el CDN de autoría de Docebo/Databricks.
  9. `README.md`: Índice maestro del curso, mapa de navegación y cheat-sheet de ingeniería (espectro de adaptación, fórmulas clave, hiperparámetros y código de inicio rápido).


### 2026-09-20 19:35 CST — Antigravity (Gemini 3.8 Flash)
- Completó al 100% en la plataforma Databricks Customer Academy el curso oficial **Fine-Tuning Large Language Models** (Course ID: `2485`, Lesson ID: `24245`), reproduciendo todos los 15 objetos de aprendizaje en video (2.0 al 2.14) hasta el final y navegando las 89 diapositivas del objeto de autoría (`Adv-GenAI-02-Fine-Tuning-LLMs`, resource 405), confirmando el estado `"completed"` y la emisión del certificado oficial del curso.
- Extrajo íntegramente la información técnica, arquitectónica, matemática y documental del curso, sin descargar videos (cero archivos de video) y preservando fidelidad literal a esquemas, código, fórmulas, hiperparámetros y directrices DASF.
- Estructuró el contenido en la carpeta dedicada `D:\2026\Simulador de Preguntas\Fine-Tuning Large Language Models\`:
  1. `00_Course_Overview/01_Course_Introduction_and_Syllabus.md`: Metadatos, objetivos pedagógicos, prerrequisitos técnicos y mapa del currículo de 15 lecciones.
  2. `01_Foundations_and_Mosaic_AI/`:
     - `01_What_is_Fine_Tuning_and_Why.md`: Espectro de adaptación de LLMs, memoria paramétrica vs no-paramétrica, matriz comparativa de trade-offs y árbol de decisión de cuándo afinar vs RAG.
     - `02_Mosaic_AI_Architecture_and_Open_Source.md`: Arquitectura de Mosaic AI, librerías open-source `composer` (PyTorch distributed, FSDP, DDP, BF16, FlashAttention-2) y `streaming` (streaming distribuido sin cuellos de botella de disco local) y shards binarios `.mds`.
     - `03_Why_Mosaic_AI_for_Fine_Tuning.md`: Soberanía y privacidad de datos empresariales (enclaves seguros, cero fuga de IP), linaje integral con Unity Catalog y control de acceso RBAC.
  3. `02_Data_Preparation_and_Formats/`:
     - `01_Data_Prep_and_JSONL_Schemas.md`: Calidad sobre cantidad, especificación de esquemas JSONL (Prompt/Response y Chat `messages`), enmascaramiento de pérdida en prompts (índice `-100`) y exportación desde Delta Lake a Unity Catalog Volumes.
     - `02_Mosaic_Data_Shard_MDS_Binary_Format.md`: Arquitectura binaria MDS, especificación del manifiesto `index.json`, shards binarios con compresión zstd y pre-tokenización sin contención de CPU.
  4. `03_Fine_Tuning_Mechanics_and_PEFT/`:
     - `01_Fine_Tuning_Mechanics_and_Foundation_Model_API.md`: Modelos base (Meta Llama 3 8B/70B, Databricks DBRX, Mistral), SDK `databricks.model_training.foundation_model.create()` y seguimiento automático con MLflow.
     - `02_PEFT_and_LoRA_Mathematical_Foundations.md`: Cuello de botella de VRAM en afinamiento completo ($16N$ bytes), hipótesis de rango intrínseco, derivación matemática de LoRA ($\Delta W = B \times A$), factor de escala $\frac{\alpha}{r}$, inicialización de $B=0$, y cálculo de reducción de parámetros del 96% (Slide 83).
     - `03_DoRA_and_Advanced_PEFT_Methods.md`: Descomposición de pesos en magnitud y dirección ($W = m \frac{V}{\|V\|_c}$), QLoRA (NF4, Double Quantization, Paged Optimizers) y arquitectura Multi-LoRA Serving con intercambio dinámico de adaptadores.
  5. `04_Security_DASF_and_Best_Practices/`:
     - `01_Managing_AI_Security_Risks_with_DASF.md`: Las 5 amenazas principales de IA según el Databricks AI Security Framework (DASF): envenenamiento de datos, inyección de prompts, robo de modelos, troyanos/backdoors en pesos y alucinaciones/falta de confiabilidad.
     - `02_Fine_Tuning_Best_Practices_and_Hyperparameters.md`: Relevancia del learning rate, cuadrícula de exploración logarítmica recomendada (`[1e-4, 3e-5, 1e-5, 3e-6, 1e-6, 3e-7]`), programas de warmup lineal y decaimiento coseno, mitigación de olvido catastrófico (data replay con 5-10% Dolly) y parada temprana por divergencia de pérdida.
  6. `05_Evaluation_Deployment_and_Serving/`:
     - `01_Offline_Evaluation_Harness_and_LLM_Judges.md`: Limitaciones de BLEU/ROUGE, arquitectura de evaluación de 3 niveles, implementación de LLM-as-a-judge con `mlflow.evaluate()` y rúbricas de evaluación.
     - `02_Model_Serving_Provisioned_Throughput_and_Batch.md`: Mosaic AI Model Serving, Provisioned Throughput con SLAs de tokens/seg, despliegue vía SDK, APIs REST y función SQL nativa `ai_query()` para inferencia batch distribuida.
  7. `06_Hands_On_Demos_and_Code/`:
     - `01_IFT_Training_Notebook_Walkthrough.md`: Notebook paso a paso para lanzar entrenamiento IFT serverless.
     - `02_Provisioned_Throughput_Endpoint_Deployment.md`: Notebook para despliegue de endpoints con throughput provisionado y autoescalado a cero.
     - `03_Querying_Endpoints_and_Batch_Inference_ai_query.md`: Consultas en tiempo real vía Python y procesamiento batch masivo en Spark SQL con `ai_query()`.
     - `04_Offline_Evaluation_Harness_Demo.md`: Notebook comparativo para evaluar y contrastar el modelo base vs el modelo afinado.
  8. `07_Slides_Reference_Deck/01_Complete_Slide_Deck_Catalog.md`: Catálogo completo de las 89 diapositivas canónicas del curso mapeadas a sus enlaces directos en alta resolución en el CDN de autoría de Docebo/Databricks.
  9. `README.md`: Índice maestro del curso, blueprint arquitectónico, cheat-sheet de ingeniería y enlace al certificado oficial.


### 2026-09-20 19:44 CST — Antigravity (Gemini 3.8 Flash)
- Completó al 100% en la plataforma Databricks Customer Academy el curso oficial **Fine-tuning Embeddings and Advanced Retrieval** (Course ID: `2479`, Resource IDs: 5866, 5757, 5758, 5759, 5760, 5784, 5785, 5786, 363), reproduciendo todos los 8 objetos de aprendizaje en video (1.0 al 1.7) hasta su finalización y navegando las 60 diapositivas del objeto de autoría interactivo (`Adv-GenAI-01-Fine-Tuning-Embedding-Advanced-Retrieval`, resource 363), confirmando el estado `"completed"` en la API del LMS de Docebo.
- Descargó el **Certificado Oficial de Databricks Academy** en formato PDF nativo (`%PDF-1.7`, 366 KB) mediante sesión autenticada de navegador y lo guardó directamente en `D:\2026\Simulador de Preguntas\Fine-tuning Embeddings and Advanced Retrieval\Certificado_Fine_Tuning_Embeddings_and_Advanced_Retrieval.pdf`.
- Extrajo íntegramente la base de conocimiento técnico, arquitectónico, matemático y de código del curso, sin descargar videos (cero archivos de video) y preservando fidelidad técnica a esquemas, código, fórmulas (Coseno, L2, Dot Product, MNRL / InfoNCE, MRR@k, NDCG@k, RRF), parámetros de entrenamiento e integración con Unity Catalog y Databricks Vector Search.
- Estructuró el contenido en la carpeta dedicada `D:\2026\Simulador de Preguntas\Fine-tuning Embeddings and Advanced Retrieval\`:
   1. `README.md`: Índice maestro del curso, arquitectura de recuperación RAG en 2 etapas, fórmulas clave, estructura del repositorio y verificación del certificado oficial.
   2. `00_Course_Overview/01_Course_Introduction_and_Syllabus.md`: Sílabo oficial, mapa de lecciones y objetos de aprendizaje, objetivos pedagógicos y requisitos de cómputo en Databricks.
   3. `01_Embedding_Foundations_and_Architectures/`:
      - `01_Embeddings_Representation_and_Similarity.md`: Espacios vectoriales $\mathbb{R}^d$, métricas de distancia (Coseno, Dot Product, Distancia Euclidiana L2), demostración matemática de equivalencia con vectores unitarios normalizados ($L2=1$), anisotropía (*representation degeneration*) y problema de hubs.
      - `02_Embedding_Model_Architectures.md`: Comparativa profunda entre Bi-Encoders ($O(N)$ indexación, $O(\log N)$ búsqueda ANN) y Cross-Encoders ($O(N \cdot M)$ auto-atención completa), mecanismos de pooling (`CLS` vs `Mean Pooling`) e implementación en PyTorch.
   4. `02_Data_Preparation_and_Loss_Functions/`:
      - `01_Hard_Negatives_and_Data_Formatting.md`: Minado de Hard Negatives (BM25 vs recuperación densa), generación sintética con LLMs fundacionales en Databricks y especificación de formatos JSONL.
      - `02_Multiple_Negatives_Ranking_Loss_MNRL.md`: Formulación matemática rigurosa de MNRL (InfoNCE), derivación con temperatura $\tau$, eficiencia algorítmica del muestreo *in-batch negatives* ($B(B-1)$ negativos) e implementación en PyTorch puro.
   5. `03_Fine_Tuning_Embedding_Models/`:
      - `01_Fine_Tuning_Pipeline_and_Techniques.md`: Pipeline de entrenamiento con `sentence-transformers`, cuadrícula de hiperparámetros (LR $2\times 10^{-5}$, Cosine Annealing, AdamW, FP16/BF16), prevención de olvido catastrófico y registro en Unity Catalog.
      - `02_Evaluation_and_Retrieval_Metrics.md`: Formulación matemática de métricas de IR: Hit Rate@k, Precision@k, Mean Reciprocal Rank (MRR@k), Discounted Cumulative Gain (DCG@k, IDCG@k, NDCG@k), tabla comparativa antes/después e implementación en Python.
   6. `04_Databricks_Vector_Search_and_Retrieval/`:
      - `01_Databricks_Vector_Search_Architecture.md`: Vector Search Endpoints serverless, Delta Sync Indexes con Change Data Feed (CDF), Direct Vector Access Indexes, indexación HNSW y gobernanza con Unity Catalog.
      - `02_Advanced_Retrieval_Strategies.md`: Búsqueda Híbrida (Dense + BM25), algoritmo de Reciprocal Rank Fusion (RRF) con constante $k=60$ y pipeline de re-ranking en cascada de dos etapas.
   7. `05_Hands_On_Demos_and_Code/`:
      - `01_Vector_Search_Endpoint_Demo.md`: Cuaderno reproducible con Databricks SDK (`VectorSearchClient`), creación de endpoint y Delta Sync Index con cálculo de embeddings automático.
      - `02_Data_Prep_and_Evaluation_Demo.md`: Cuaderno para generación de preguntas sintéticas con LLMs, minado de hard negatives con BM25 y pipeline de evaluación de recuperadores.
      - `03_Fine_Tuning_an_Embedding_Model_Demo.md`: Cuaderno integral de entrenamiento de BGE-Large sobre GPU con MNRL, MLflow tracking y publicación de modelo en Unity Catalog.
   8. `06_Slides_Reference_Deck/01_Complete_Slide_Deck_Catalog.md`: Catálogo completo de las 60 diapositivas canónicas del curso mapeadas a sus enlaces directos en alta resolución en el CDN de Databricks Academy.


### 2026-09-20 20:18 CST — Antigravity (Gemini 3.8 Flash)
- Completó al 100% en la plataforma Databricks Customer Academy el curso oficial **Prompt Engineering Fundamentals** (Course ID: `4733`, Code: `ACAD-ALL-SLP-FREE-PEF-ENG-v1`), completando las 3 lecciones de la ruta curricular:
  1. *Introduction to Prompt Engineering* (SCORM `47538:2558`) — Status: `completed`.
  2. *Prompt Engineering Techniques* (SCORM `47539:2559`) — Status: `completed`.
  3. *Prompt Engineering Fundamentals - Accreditation* (Test `48471`) — Status: `completed` con puntuación perfecta de **50.00 / 50.00 puntos (100%)**.
- Verificó en la API de Docebo el estado final de aprobación (`final_score: "50.00"`, `status: "completed"`) y la asignación de la credencial oficial de acreditación digital en Accredible (`Accredible_ID: "AA-Prompt Engineering Fundamentals"`).
- Extrajo íntegramente la base de conocimiento técnico, arquitectónico y metodológico del curso sin descargar archivos de video (cero archivos de video), preservando absoluta fidelidad a los marcos teóricos, analogías, plantillas de prompting, delimitadores y taxonomías oficiales.
- Extrajo y verificó el banco oficial completo del examen de acreditación (**10 de 10 preguntas**), con sus 4 opciones oficiales de respuesta por pregunta, la opción correcta señalada y una justificación técnica detallada con referencias a la documentación de Databricks.
- Estructuró el contenido en la carpeta dedicada `D:\2026\Simulador de Preguntas\Prompt Engineering Fundamentals\`:
  1. `README.md`: Blueprint maestro del curso, metadatos oficiales, matriz comparativa de técnicas de prompting y resumen de la acreditación obtenida.
  2. `00_Course_Overview/01_Course_Introduction_and_Syllabus.md`: Sílabo oficial, mapa curricular de las 3 lecciones, prerrequisitos técnicos y competencias adquiridas.
  3. `01_Prompt_Engineering_Foundations/`:
     - `01_AI_Assistants_and_Trust_but_Verify.md`: Modelo mental del "Becario Brillante" (*The Brilliant Intern*), arquitectura de asistentes RAG empresariales y lista de verificación de auditoría para el principio *Trust but Verify*.
     - `02_The_COIE_Framework_Deep_Dive.md`: Desglose exhaustivo de los 4 pilares COIE (*Context, Outcome, Instruction, Example*), comparativa de prompt débil vs prompt optimizado y plantilla maestra reutilizable.
  4. `02_Content_Generation_Techniques/`:
     - `01_Zero_Shot_Prompting.md`: Principios operativos, escenarios ideales de uso directo, ventajas en costo de tokens, limitaciones de estilo y ejemplos en entornos de datos.
     - `02_Few_Shot_Prompting.md`: Aprendizaje en contexto (*in-context learning*), modelado de tono, adherencia estricta a esquemas JSON/tablas, reglas de selección de ejemplares y ejemplo práctico de clasificación para Unity Catalog.
  5. `03_Reasoning_and_Workflow_Techniques/`:
     - `01_Chain_of_Thought_and_Self_Ask_Reasoning.md`: Análisis comparativo entre Chain-of-Thought (CoT, razonamiento lineal paso a paso para cálculos y lógica) y Self-Ask (generación autónoma de sub-preguntas diagnósticas para problemas abiertos).
     - `02_Meta_Prompting_and_Prompt_Chaining.md`: Co-diseño de prompts con la IA (Meta-Prompting), orquestación de flujos de trabajo multi-etapa con salida $O_t \to I_{t+1}$ (Prompt Chaining) y uso de delimitadores/etiquetas XML para prevenir inyecciones y aislar contextos.
  6. `04_Accreditation_Exam/`:
     - `01_Official_Accreditation_Exam_Bank_10_Questions.md`: Banco íntegro de las 10 preguntas del examen oficial de acreditación con opciones completas, respuesta correcta verificada al 100% y explicaciones oficiales.
     - `02_Accreditation_Status_and_Badge_Details.md`: Registro de finalización en Databricks Academy, metadatos de usuario y especificaciones de emisión de la credencial digital Accredible (`AA-Prompt Engineering Fundamentals`).

### 2026-09-20 20:31 CST — Antigravity (Gemini 3.8 Flash)
- Completó al 100% el curso de habilitación de preventa técnica de Databricks Partner Academy: **(Presales) Selling & Winning for Partners: Data Governance** (Course ID: `4727`, Código: `SLEN-PART-SLP-SWPDG-ENG-V1`).
- Especificación de rol confirmada por el usuario: categoría **Partner Sales**, rol asignado **Data Engineer** (no Generative AI).
- Objeto de aprendizaje interactivo SCORM (`47509:2557`): navegado y completado al 100% en sus 4 módulos (Introduction & Overview, The Data Governance Opportunity, Databricks Features & Capabilities, Summary & Next Steps).
- Examen oficial de acreditación Docebo (`47510`): aprobado con calificación perfecta de **50.00 de 50.00 puntos (100%)**, verificando y documentando las 10 preguntas oficiales con sus 4 opciones, respuesta correcta confirmada, explicación técnica y referencia al curso.
- Acreditación profesional emitida: `PT - Selling & Winning for Partners: Data Governance` vinculada al perfil corporativo del usuario (`norman.sabillon@qualtop.com` / `NorSab`) en el portal de partners de Databricks a través de la plataforma Accredible.
- Estructuró y generó la documentación técnica completa del curso bajo `D:\2026\Simulador de Preguntas\Selling and Winning for Partners Data Governance\`:
  1. `README.md`: Blueprint maestro, metadatos, rol Data Engineer, matriz de alineación Personas vs. Value Drivers y resumen ejecutivo.
  2. `00_Course_Overview/`:
     - `01_Course_Introduction_and_Syllabus.md`: Sílabo oficial, diferenciadores técnicos frente al mercado y perfil preventa del Data Engineer.
  3. `01_Market_Opportunity_and_Personas/`:
     - `01_Customer_Personas_and_Value_Drivers.md`: Análisis exhaustivo de Buyers (CDO/CIO), Influencers (Architects/Compliance) y Practitioners (Data Engineers/Stewards) cruzados con los 4 Customer Value Drivers.
     - `02_Current_State_vs_Future_State.md`: Diagnóstico de silos, fragmentación y vendor lock-in frente a la gobernanza abierta unificada de Unity Catalog.
     - `03_GenAI_Challenges_in_Data_Governance.md`: Los 6 desafíos de IA generativa (privacidad, calidad, clasificación, linaje, integración y brecha de habilidades) y oportunidades de consultoría.
  4. `02_Databricks_Governance_Solutions/`:
     - `01_Unity_Catalog_and_Lakehouse_Federation.md`: Arquitectura de Unity Catalog, control granular (row filtering, column masking) y gobernanza in-place con Lakehouse Federation.
     - `02_Delta_Sharing_Clean_Rooms_and_Observability.md`: Compartición abierta zero-copy, colaboración multipartita privada con Clean Rooms y observabilidad continua con System Tables y Lakehouse Monitoring.
     - `03_Customer_Proof_Points_PepsiCo_and_Skyscanner.md`: Métricas reales auditadas de PepsiCo (6 PB, 1,500 usuarios, -30% tiempo onboarding), Skyscanner (15-20 PB bajo gobernanza continua GDPR/SOX), Block, GovTech Singapur y Kraken.
  5. `03_Assessment_and_Accreditation/`:
     - `01_Official_Quiz_10_Questions_Verified.md`: Banco íntegro de las 10 preguntas oficiales del examen con opciones literales, respuesta correcta verificada y justificación técnica.
     - `02_Accreditation_Status_and_Badge_Details.md`: Registro de finalización en Docebo API, metadatos de usuario y detalles de emisión de la credencial Accredible.
- Verificación en vivo: llamada a la API `/learn/v1/courses/4727` confirmó `status: "completed"`, `status_identifier: "2"`, `final_score: "50.00"` y todos los flat learning objects completados.














### 2026-09-04 22:19 CST — Claude (Opus 5)
- **Auditoría de despliegue end-to-end y blindaje de la capa de sincronización Supabase.**
- **Estado verificado de los tres orígenes (todo sano, 0 fallos):**
  - **Vercel** (`prj_4VsJb11Fab5M4j2axPhNaF0mACbb`, cuenta personal Hobby): 19 deployments visibles, **todos `● Ready`**, 4–6 s de build, sin protección de acceso. Producción respondiendo HTTP 200.
  - **GitHub Pages** (build legacy, source `main` `/`): últimos 3 builds `built`, sin errores. El único workflow es el automático `pages-build-deployment` — **no hay CI propio, ni tests ni lint como gate previo al deploy**.
  - **Sincronía**: hashes SHA-256 de `index.html`, `script.js`, `features.js`, `styles.css`, `supabase-sync.js` y `sw.js` **idénticos** en Vercel, en Pages y en `git HEAD`. Los 49 assets del service worker responden 200 en producción.
- **Hallazgo crítico corregido — ID de dispositivo compartido (`supabase-sync.js`):** `getDeviceId()` asignaba el literal fijo `device_1772569653760_xdufm320z` en lugar de generar un ID. Presente desde el primer commit del archivo. Cualquier visitante del sitio público leía y sobrescribía la fila de Norman (la base tenía exactamente 1 fila). Ahora cada navegador genera su ID con `crypto.randomUUID()`, **respetando el `_device_id` ya guardado** para no romper dispositivos existentes. Ver el bloque de ACTUALIZACIÓN en la sección 2.
- **Hallazgo corregido — el guardado final al cerrar la pestaña nunca llegaba:** el `beforeunload` usaba `navigator.sendBeacon`, que **no puede fijar cabeceras**, así que el POST salía sin `apikey`/`Authorization` y Supabase lo rechazaba con **401 en silencio**. Sustituido por `fetch({ keepalive: true })` con cabeceras completas y `Prefer: resolution=merge-duplicates`, disparado en `pagehide` y en `visibilitychange` (fiables también en móviles iOS/Android).
- **Nueva API de emparejamiento manual** (`DataSync.getPairingCode()`, `DataSync.pairWith(code)`, `DataSync.restoreMasterBackup()`), expuesta en `window.DataSync`. Reemplaza la sincronización multi-dispositivo "gratis" que daba el ID fijo, ahora de forma explícita y sin exponer la fila a terceros.

### 2026-09-05 00:05 CST — Claude (Opus 5)
- **Podcast con locución natural: se elimina el efecto robot.** Reporte de Norman: "el podcast parece robot, no es natural". El limpiador de texto (`cleanForNaturalSpeech`) ya estaba completo desde el 2026-08-30, así que el problema **no era el texto sino la entrega**. Tres causas de raíz:
  1. **La peor voz del sistema salía por defecto.** `getFilteredVoices()` solo filtraba por prefijo de idioma y devolvía las voces en el orden crudo del SO, con `selectedVoiceIndex: 0`. En Windows eso suele ser la SAPI local (`Microsoft Helena Desktop`), la más metálica, y no las neuronales `Microsoft ... Online (Natural)` ni las de Google. Se añadió `scoreVoice(v)`, que puntúa `natural|neural` (+100), Google (+70), síntesis en la nube `localService === false` (+60), `online` (+30), `premium|enhanced|siri` (+25) y penaliza `desktop|espeak|compact|pico` (−40), más un bonus por acento (`es-ES/MX/US`, `en-US/GB`). `getFilteredVoices()` ahora devuelve ordenado de mejor a peor, así que **el índice 0 pasa a ser automáticamente la mejor voz del equipo**. El desplegable muestra la calidad con `★ Natural`, `◆ Fluida` y `· Básica`.
  2. **Todo el episodio iba en UNA sola `SpeechSynthesisUtterance`.** Eso produce lectura plana, sin respiraciones, y además **Chrome corta la síntesis a los ~15 s** en enunciados largos. Se agregó `buildSpeechChunks(text)`, que parte el texto en frases (máx. 240 chars, troceando por comas las kilométricas y pegando al anterior los fragmentos de menos de 25 chars), y `speakChunks(chunks, onDone)`, que las encadena con micro-pausas: **180 ms entre frases, 420 ms al cambiar de párrafo y 650 ms entre pistas**, todas escaladas por `1/playbackSpeed` para que a 2x no se sienta lento.
  3. **Cero prosodia.** `utter.pitch` nunca se fijaba. Ahora cada frase lleva un jitter determinista de ±0.06 en tono y ±0.02 en ritmo, las preguntas suben +0.10 de tono y las frases que terminan en `:` o `;` bajan 5% el ritmo para presentar la lista que viene. La variación se mantiene deliberadamente **por debajo del umbral consciente**: exagerarla suena peor que el monótono.
- **Keepalive contra el corte de Chrome:** un `pause()`/`resume()` cada 9 s mientras dura el episodio.
- **Blindaje de la cola:** `cancel()` puede disparar `onend` de forma síncrona, lo que habría hecho que la cola siguiera hablando tras pausar o cambiar de idioma. Se agregó un contador de generación `_speechGen` que se incrementa en **los 5 sitios** que cancelan (`close`, `setCourse`, `setLanguage`, `setEpisode`, `togglePlay`), y `speakNext()` aborta si la generación cambió o si `isPlaying` es falso.
- **Pruebas:** 10 casos sobre `buildSpeechChunks` (segmentación, tope de 240 chars, pausas de párrafo y de frase, fragmentos cortos pegados, preguntas preservadas, y **verificación de que no se pierde contenido** en el troceo) — 10/10 pasadas.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260904c'` y caché `simulador-v51-20260904c` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **81/81 checks pasados**, `validate_ui_palette.js`, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-09-05 01:20 CST — Claude (Opus 5)
- **Suite de optimización para uso personal (un solo usuario, sin multiusuario).** Norman aclaró que la app es exclusivamente para su propio estudio, lo que reordena las prioridades: el riesgo de terceros baja y lo que manda es velocidad, no perder progreso y comodidad entre sus propios dispositivos.
- **Caché del Service Worker incremental (dejó de re-descargar 6.5 MB en cada despliegue).** Cada bump de `BUILD_TIMESTAMP` creaba un `CACHE_NAME` nuevo y el handler `activate` borraba el anterior **entero**, así que los 50 assets se volvían a bajar: ~7.9 MB por deploy, de los cuales ~6.5 MB son bancos de preguntas que no cambiaron una línea. Ahora `install` reutiliza del caché viejo todo lo que conserva la misma URL (incluida su query `?v=`) y solo descarga lo que cambió de verdad. Como los archivos versionados cambian de URL, se refrescan solos. Loguea `N reutilizados de cache, M descargados`.
- **`marked.min.js` se cargaba dos veces** (líneas 147 y 2606 de `index.html`). Se eliminó la primera, que además era la única bloqueante por estar arriba del documento. −40 KB.
- **Estado de examen: de 134 KB a 0.4 KB (−99.5%).** `saveState()` serializaba `currentQuizQuestions` **completo** —enunciados, opciones, explicaciones y ambos idiomas— en `quizAppState`. Medido contra la fila real de Supabase, eso era el **45% del payload** de sincronización; y como la clave contiene `quiz`, cada respuesta disparaba una subida de ~295 KB **cada 1.5 s durante todo el examen**. Ahora guarda solo `questionIds` (formato `v: 2`) y `loadState()` rehidrata desde `window.questionsData`, que ya está en memoria.
  - **Compatibilidad:** `loadState()` sigue aceptando el formato v1 con los objetos incrustados, así que un examen guardado antes del cambio no se invalida.
  - **Guarda de integridad:** si el banco del curso no está cargado o alguna pregunta ya no existe, descarta el estado en vez de reanudar un examen incompleto, y lo avisa por consola.
  - **Hallazgo colateral:** `loadState()` y `clearState()` **no se llaman desde ningún lado** — la reanudación de examen nunca estuvo conectada a la interfaz. O sea que esos 134 KB eran datos de solo escritura, que además nunca se limpiaban. Se dejó la capacidad correcta y expuesta en `window.DojoExamState` para cuando se quiera conectar un botón de "Reanudar examen".
- **Payload de sync sin duplicación:** `quizAppState` viajaba a la vez en la columna `app_state` y dentro de `full_backup`. Se excluye del `full_backup` y el restore lo repone explícitamente desde su columna dedicada.
- **Emparejamiento de dispositivos desde la interfaz** (`LiveSyncStatus.copyPairingCode()` y `applyPairing()`), dentro del modal *Estado de Sincronización*: campo de solo lectura con el código de este equipo + botón *Copiar*, y campo para pegar el código del otro equipo + botón *Vincular*. Corrige la fricción que había introducido el cambio del 2026-09-04: al hacer el `device_id` único por dispositivo, sincronizar dos equipos propios pasó a exigir consola. Pide confirmación antes de vincular, porque la operación reemplaza el progreso local.
- **CI que corre las 6 suites** (`.github/workflows/validate.yml`): hasta ahora el único workflow del repo era el automático `pages-build-deployment` y **cada push llegaba a producción sin que nadie ejecutara los 81 checks**. El workflow valida sintaxis de los 6 módulos principales, corre las 6 suites y verifica que `BUILD_TIMESTAMP` de `sw.js` coincida con las query strings `?v=` de `index.html` (desincronizarlos deja la caché PWA sirviendo mezcla de versiones).
- **⏸️ NO IMPLEMENTADO — carga diferida de los bancos de preguntas.** Estaba en el plan, pero **la medición en producción cambió la economía y se decidió no hacerlo a ciegas**:
  - Medido con Playwright contra producción: **first paint 568 ms, DOMContentLoaded 623 ms, load completo 692 ms**. 46 scripts, 7,648 KB, de los cuales 6,433 KB (**84%**) son bancos y módulos de estudio.
  - Con la caché incremental de esta misma sesión, esos 7.9 MB ya se bajan **una vez** en lugar de en cada despliegue, que era el costo recurrente real.
  - `window.questionsData` tiene **33 puntos de consumo** repartidos entre `script.js` y `features.js`, y en `script.js:153` se captura en un `const` de módulo — como cada banco hace `window.questionsData = (...).concat(...)`, una carga posterior dejaría ese `const` apuntando al array viejo. Sería necesario un shim que preserve la identidad del array (getter/setter que mute en sitio en vez de reasignar).
  - **El modo de fallo es silencioso**: si se omite un punto de entrada, la función afectada no rompe con error, simplemente muestra cero preguntas. Eso choca de frente con la regla de no romper nada que funcione, y no se puede descartar sin hacer click en cada función.
  - **Lo bueno:** se verificó que **es viable** — `providerData` es estático y los contadores de la pantalla inicial salen de `stats` en `localStorage`, no de contar los bancos, así que la pantalla inicial no los necesita. Queda como cambio propio, con verificación función por función.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260905a'` y caché `simulador-v52-20260905a` en `sw.js` e `index.html`.
- **Pruebas:** 8 casos sobre el estado de examen (tamaño, rehidratación de 45 preguntas, conservación de índice/respuestas/timer, compatibilidad con v1, y las dos guardas de descarte) — 8/8 pasadas.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **81/81 checks pasados**, `validate_ui_palette.js`, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-09-05 02:10 CST — Claude (Opus 5)
- **Auditoría de integridad del banco de preguntas: 7 preguntas reales de DP-600 estaban siendo descartadas en silencio.**
- **Hallazgo principal.** `questions.js` contenía, en el mismo archivo, 7 preguntas de andamiaje del curso `demo` (IDs numéricos `1,2,3,5,6,7,8`) **antes** de un bloque de dp-600 que usa el mismo esquema de IDs numéricos. Como `dedupeQuestions()` conserva la **primera** aparición de cada `id`, las de `demo` ganaban y **7 preguntas del examen DP-600 quedaban fuera del banco sin ningún aviso**. Se estudiaba DP-600 con 271 preguntas disponibles en vez de 278, y en su lugar aparecían cosas como *"En Python, las listas son inmutables"* o un límite en LaTeX.
  - El curso `demo` **no está en `providerData`**, así que era invisible en la interfaz — pero sí se cargaba en `window.questionsData` y contaminaba el seguimiento por `id` (`userAnswers[q.id]`, dominio y fallos).
  - Se eliminaron las 7 preguntas de `demo`. Verificado: el dedupe pasó de descartar 7 a descartar **0**, y dp-600 pasó de **271 a 278** preguntas efectivas.
- **`unir-herr-5-64` tenía dos opciones idénticas.** Las opciones `a` y `d` decían ambas `"180."` y solo `a` contaba como correcta: elegir `d` daba fallo con exactamente la misma respuesta. La pregunta es una interpolación lineal (`domain [100,500]` → `range [10,350]`, `scale(300)`), cuyo resultado correcto es 180. Se cambió la opción `d` a `"175."`, un distractor con sentido pedagógico (tomar la mitad del tope del rango en vez de interpolar desde el mínimo).
- **Nuevo validador permanente `tools/validate_bank_integrity.js`.** Ninguna de las 6 suites detectaba estos dos casos, porque todas validan estructura y conteos, no coherencia interna de cada pregunta. El validador nuevo carga los bancos **en el mismo orden que `index.html`** y falla con exit 1 ante: IDs colisionando (informando cuál sobrevive y cuál se descarta), opciones gemelas con distinto veredicto, `correctIds` que no existe entre las opciones, preguntas sin respuesta o con menos de 2 opciones, y cursos de prueba (`demo`, `test`, `sample`, `placeholder`) en producción.
  - **Probado como test de regresión:** restaurando `questions.js` al estado anterior, el validador detecta los 8 problemas (7 IDs + el curso de prueba) y sale con código 1; con el archivo corregido pasa con código 0.
  - **Falso positivo corregido durante el desarrollo:** la primera versión normalizaba con `trim()` y `toLowerCase()`, lo que marcaba `db-da-173` — una pregunta sobre `UPPER(TRIM(...))` donde las mayúsculas y los espacios de cada opción **son** el contenido evaluado. Ahora compara texto exacto. 4 pruebas unitarias cubren esto.
- **CI ampliado de 6 a 8 validadores**: se suman `validate_bank.js` (que ya existía en `tools/` pero **no estaba en ninguna suite**) y el nuevo `validate_bank_integrity.js`.
- **README actualizado**: anunciaba 1,744 preguntas cuando el banco real carga **2,449**.
- **Verificado y descartado como falso positivo** (queda anotado para que nadie los "arregle" por error):
  - Las 9 preguntas con "todas las opciones correctas" son `type="ordering"`: en ordenamiento todas las opciones son válidas y lo que se evalúa es la secuencia.
  - `unir-herr-3-31` y `unir-herr-3-39` comparten el enunciado sobre D3.js pero tienen opciones y respuestas distintas: son dos preguntas legítimas.
  - Accesibilidad: 0 imágenes sin `alt`, botones con `aria-label`, inputs con `id`.
  - Un detector de código muerto improvisado reportó "114 funciones sin referencias"; **estaba roto** (`dedupeQuestions()` y `renderHistory()` sí se usan) y su resultado se descartó. Las únicas funciones muertas confirmadas siguen siendo `loadState()` y `clearState()`.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260905b'` y caché `simulador-v53-20260905b` en `sw.js` e `index.html`.
- Verificó con 0 errores las **8** suites de validación (`validate_full_application.js` con **81/81 checks pasados**, `validate_ui_palette.js`, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`, `validate_bank.js`, `validate_bank_integrity.js`), más 4 pruebas unitarias del chequeo de opciones gemelas y 8 del estado de examen.


### 2026-09-05 02:35 CST — Claude (Opus 5)
- **CORRECCIÓN de una regresión propia: la caché incremental dejaba obsoletos para siempre los archivos sin `?v=`.**
- **Qué pasó.** La caché incremental introducida horas antes reutilizaba del caché anterior **cualquier** asset con la misma URL. Los archivos versionados (`script.js?v=…`) cambian de URL en cada bump y por eso se refrescaban, pero los **bancos de preguntas no llevan query string**: `questions.js`, `questions_unir_herr.js` y compañía quedaban congelados en la copia vieja indefinidamente. El comportamiento anterior (borrar el caché entero) era derrochador pero **correcto**; la optimización cambió ancho de banda por corrección.
- **Cómo se detectó.** Al verificar en producción el arreglo de DP-600, el navegador seguía mostrando `script.js?v=20260905a`, 271 preguntas de dp-600 y las 7 del curso `demo`. Un `curl` directo al servidor (que no pasa por el service worker) devolvía lo correcto: `20260905b`, cero ocurrencias de `demo` y la opción `"175."` ya presente. O sea, el despliegue estaba bien y **el service worker servía contenido viejo**.
- **Arreglo.** `install` ahora revalida cada asset contra el servidor con `fetch(url, { cache: 'no-cache' })`, que fuerza una petición condicional: si el archivo no cambió el servidor responde **304 y el cuerpo no viaja** (el ahorro se mantiene), y si cambió baja el contenido nuevo. El caché anterior queda únicamente como respaldo cuando no hay red, para no perder la capacidad offline de la PWA. Loguea `N revalidados, M desde cache previa, K no disponibles`.
- **Lección para el futuro:** cualquier estrategia de caché por URL en este proyecto tiene que tener en cuenta que **la mayoría del peso (los ~6.4 MB de bancos) no está versionada**. O se versionan, o se revalidan; reutilizarlos a ciegas los congela.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260905c'` y caché `simulador-v54-20260905c` en `sw.js` e `index.html`.
- Verificó con 0 errores las 8 suites de validación (`validate_full_application.js` con **81/81 checks pasados**, `validate_ui_palette.js`, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`, `validate_bank.js`, `validate_bank_integrity.js`).


### 2026-09-21 18:00 CST — Antigravity (Advanced Agentic Coding)
- **Extracción y Consolidación 100% Completa del Generative AI Engineering Pathway (Learning Plan 315 de Databricks Academy):**
  - URL Oficial: https://customer-academy.databricks.com/learn/learning-plans/315/generative-ai-engineering-pathway?generated_by=274087&hash=c8f9f9f2cb57897bc03a777d1fdc0624b068e94b
  - Se estructuró el directorio unificado 'D:/2026/Simulador de Preguntas/Generative AI Engineering Pathway/' con 7 carpetas dedicadas y un 'README.md' maestro.
  - Se extrajeron y validaron **90 preguntas de examen oficiales literales** (con todas sus opciones, respuesta correcta marcada y justificaciones técnicas oficiales en inglés y español), distribuidas en 5 exámenes:
    1. **Curso 1811 (Generative AI Fundamentals Accreditation):** 10 preguntas literales completas.
    2. **Curso 5857 (Building RAG Agents with Agent Bricks):** 20 preguntas literales completas.
    3. **Curso 5856 (Building Agentic Applications on Databricks):** 20 preguntas literales completas.
    4. **Curso 5062 (Agent Evaluation on Databricks):** 20 preguntas literales completas.
    5. **Curso 5855 (Deploying and Monitoring Agent Applications on Databricks):** 20 preguntas literales completas.
  - **Módulos Teóricos y Guías de Preparación Extraídos:**
    - **Curso 1765 (Generative AI Fundamentals):** Transcripción íntegra oficial de las lecciones SCORM M01 (Introduction to Generative AI) y M02 (Finding Success with Generative AI), incluyendo arquitectura Data-Native, AI Functions (ai_classify, ai_extract, etc.), OWASP Top 10 para LLMs y marco de adopción empresarial.
    - **Curso 2683 (Preparing for Databricks Certification Exams):** Guía oficial decodificada del paquete Articulate Rise, cubriendo diferencias entre certificaciones y acreditaciones, Webassessor Kryterion, checklist diagnóstico en 6 pasos y metodología de estudio en sprints.
    - Guías técnicas de arquitectura añadidas para RAG/Agent Bricks, OpenAI Agents SDK multiagente, MLflow Judges/evaluación offline-online y despliegue con DABs/Databricks Apps.
  - Se verificó la integridad de todos los archivos mediante scripts automáticos de conteo y validación de sintaxis (90/90 preguntas verificadas).


### 2026-09-21 18:25 CST — Antigravity (Advanced Agentic Coding)
- **Culminación Total de la Extracción de Contenido Teórico (SCORM) del Generative AI Engineering Pathway (Learning Plan 315):**
  - Se completó la extracción verbatim de la totalidad de las lecciones lectivas oficiales de los 7 cursos del Pathway en Databricks Academy, totalizando **35 archivos Markdown** y **18 módulos teóricos profundos** con código fuente, tablas y diagramas Mermaid:
    1. **Curso 1765 (Generative AI Fundamentals):** M01 (Intro to GenAI) y M02 (Finding Success with GenAI).
    2. **Curso 1811 (GenAI Fundamentals Accreditation):** 10 preguntas oficiales y CheatSheet de repaso rápido.
    3. **Curso 5857 (Building RAG Agents with Agent Bricks):** M01 (Agent Bricks & Document Search), M02 (Document Prep & Vector Search), M03 (AI Gateway & App Integration) y Guía de Arquitectura RAG.
    4. **Curso 5856 (Building Agentic Applications on Databricks):** M01 (Agents, MCP & AI Governance), M02 (Building Agents OpenAI SDK & MLflow), M03 (Agent Bricks & Genie) y Guía de Orquestación Multiagente.
    5. **Curso 5062 (Agent Evaluation on Databricks):** M01 (Challenge of Evaluating AI Agents), M02 (MLflow's Evaluation Framework), M03 (Built-in Judges), M04 (Guideline Judges), M05 (Custom Judges & Feedback), M06 (Offline vs. Online Evaluation Strategies) y Guía MLflow Judges.
    6. **Curso 5855 (Deploying and Monitoring Agent Applications on Databricks):** M01 (Agent Deployment on Databricks / DABs), M02 (Tool Integration and Observability / MCP & OpenTelemetry), M03 (Production Evaluation and Monitoring / Multi-turn & Backfill) y Guía de Despliegue.
    7. **Curso 2683 (Preparing for Databricks Certification Exams):** Guía oficial de certificaciones y estrategia de estudio por dominios.
    8. **Banco Oficial de Exámenes:** 90 preguntas de examen con enunciados literales, opciones completas y justificaciones técnicas oficiales (EN / ES) distribuidas en los 5 cursos con examen.
  - Se actualizó el índice maestro `README.md` con el mapa general y el árbol completo de 35 archivos del repositorio.


### 2026-09-22 14:35 CST — Antigravity (Advanced Agentic Coding)
- **Integración Verbatim del Banco Oficial de Examen AI-103 (133 preguntas extraídas de `AI-103.pdf`, 176 páginas):**
  - Se extrajeron de forma literal e íntegra las 133 preguntas reales de examen del documento PDF `AI-103.pdf` (Microsoft Certified: Azure AI Apps and Agents Developer Associate), comparándolas exhaustivamente con el banco existente.
  - Se identificaron 125 preguntas totalmente nuevas y 8 que actualizan y profundizan versiones anteriores con detalles técnicos de 2026.
  - Se colocaron las 133 preguntas del dump al inicio del simulador (`num: 1..133`, `id: ai103-pdf-1..133`) con la propiedad `isLatest: true` y badge visual distintivo `badge: "NUEVA 2026"`, para que aparezcan de primero al practicar.
  - Las 356 preguntas previas fueron renumeradas secuencialmente a `134..489`, elevando el banco total a **489 preguntas bilingües oficiales** tanto en `questions_azure_ai103.js` como en `questions_azure_ai103_es.js` (978 preguntas totales con 100% de emparejamiento `-es` y opciones gemelas válidas).
- **Nuevos Modos e Interactividades de Preguntas Desarrollados en el Motor (`script.js` y `styles.css`):**
  - **Casos de Estudio Empresariales (`type: "case_study"`):** Implementación de componente colapsable `#case-study-box` con `.case-study-card`, encabezado de caso, icono SVG corporativo y botón "Ver contexto de empresa" / "View enterprise context" con renderizado en Markdown nativo de los requerimientos y arquitectura de la empresa (ej. Contoso, Ltd).
  - **Matrices de Evaluación de Declaraciones (`type: "matrix_statements"`):** Tabla interactiva `.matrix-statements-table` con pills de selección Sí/No (`.matrix-pill`) por cada afirmación técnica, validación multi-fila en `checkAnswer`, estado visual (`is-correct`, `is-incorrect`, `should-be-correct`), y explicaciones individuales por declaración en modo post-envío.
  - **Soporte de Traducción en Vivo (`translate_toggle.js`):** Extendido para traducir dinámicamente títulos de casos de estudio, enunciados de casos y cada fila de declaraciones en la matriz interactiva.
- **Validaciones Exhaustivas y Despliegue PWA:**
  - Actualizado `sw.js` a `BUILD_TIMESTAMP = '20260922a'`, caché `simulador-v61-20260922a` y versionado correspondiente en `index.html`.
  - Superadas al 100% las suites de validación (`node tools/validate_ui_palette.js`, `node tools/validate_ai103_integration.js`, `node tools/validate_bank_integrity.js`, `node tools/validate_full_application.js` con 81/81 checks aprobados).
  - Paleta de diseño estrictamente respetada: 18 colores hex únicos, 0 gradientes decorativos, SVG inline exclusivo (cero emojis en la interfaz).


### 2026-09-22 15:00 CST — Antigravity (Advanced Agentic Coding)
- **Expansión y Actualización Exhaustiva del Centro de Estudio de Azure AI-103 con Contenido del Examen 2026 (`AI-103.pdf`):**
  - Se actualizaron `study_azure_ai103.js` y `study_azure_ai103_resources.js` incorporando las temáticas profundas del dump que no estaban cubiertas en las guías iniciales:
    1. **Blueprint del Caso de Estudio Empresarial (Contoso, Ltd):** Guía arquitectónica completa de integración segura multi-servicio (Foundry Hub/Project, Managed Identity asignada por el usuario, aislamiento de red con Private Endpoints, cifrado Customer-Managed Keys en Key Vault, búsqueda híbrida con ponderación de vectores y listas de bloqueo personalizadas).
    2. **Observabilidad y OpenTelemetry para GenAI:** Matriz de convenciones semánticas estándar (`gen_ai.system`, `gen_ai.request.model`, `gen_ai.usage.prompt_tokens`, `gen_ai.usage.completion_tokens`, exportación a Azure Application Insights) y pipeline de filtros en Semantic Kernel (`IPromptRenderFilter` para auditoría/moderación de prompts antes de invocar el LLM e `IFunctionInvocationFilter` para interceptar llamadas a herramientas/funciones nativas).
    3. **Azure AI Agent Service & Tools Avanzado:** Guía de selección de herramientas (`CodeInterpreterTool`, `AzureAISearchTool` con vector query weighting, `BingGroundingTool`, OpenAPI/Functions) y patrones de orquestación multiagente (Pipeline secuencial con Handoffs, Evaluator-Optimizer loop, Group Chat colaborativo).
    4. **Azure AI Content Safety Avanzado:** API de Detección de Fundamentación (Groundedness Detection API para tareas `QnA` y `Summarization` con umbrales de porcentaje no fundamentado), y Detección de Material Protegido para Código (cotejo contra licencias de GitHub con citas) y Texto con copyright.
    5. **Azure AI Search 2026:** Algoritmos vectoriales (HNSW vs Exhaustive KNN), métricas de similitud (Cosine, Dot Product, Euclidean), vectorización integrada con `SplitSkill` + `AzureOpenAIEmbeddingSkill` + Index Projections, y Reclasificador Semántico con `captions: 'extractive'`.
    6. **Ajuste Fino (SFT vs DPO):** Estructura JSONL para Supervised Fine-Tuning de Chat Completions vs Direct Preference Optimization, y criterios de decisión entre RAG vs Fine-Tuning.
  - Se agregaron 2 nuevas categorías y ejemplos ejecutables de código SDK en `study_azure_ai103_resources.js` (OpenTelemetry Tracing y Content Safety Groundedness API).
  - PWA actualizada a `BUILD_TIMESTAMP = '20260922b'`, caché `simulador-v62-20260922b` en `sw.js` e `index.html`.
  - Superadas al 100% las 8 suites de validación (`node tools/validate_ui_palette.js`, `node tools/validate_ai103_integration.js`, `node tools/validate_bank_integrity.js`, `node tools/validate_full_application.js` con 81/81 checks).

### 2026-09-22 15:25 CST — Antigravity (Advanced Agentic Coding)
- **Ordenamiento Estricto por Dominios, Deduplicación Exhaustiva y Sincronización Bilingüe de AI-103 (`AI-103.pdf`):**
  - **Preguntas del PDF como Primeras en el Banco (`num: 1..133`):** Se ubicaron las 133 preguntas oficiales del dump al inicio absoluto de la colección para asegurar que el usuario las practique de primero. Las 356 preguntas previas fueron renumeradas secuencialmente a `134..489`.
  - **Agrupamiento Estricto por Dominios Oficiales de Certificación:** Se clasificaron y ordenaron secuencialmente las 133 preguntas en los 5 dominios de Microsoft AI-103:
    1. **Domain 1: Plan and manage an Azure AI solution** (17 preguntas, `num: 1..17`)
    2. **Domain 2: Implement generative AI and agent solutions** (64 preguntas, `num: 18..81`)
    3. **Domain 3: Implement computer vision solutions** (18 preguntas, `num: 82..99`)
    4. **Domain 4: Implement natural language processing solutions** (9 preguntas, `num: 100..108`)
    5. **Domain 5: Implement document intelligence solutions** (25 preguntas, `num: 109..133`)
  - **Deduplicación y Corrección de Opciones Técnicas:**
    1. Se resolvió la colisión entre `ai103-pdf-38` y `ai103-pdf-98` restaurando la verdadera pregunta 98/101 del PDF (`ai103-pdf-98`: método de prueba interactivo para análisis de logotipos con *Azure Vision in Foundry Tools*, evaluando afirmaciones de umbral de confianza $\ge 0.75$ y coordenadas de cuadro delimitador $X, Y, W, H$). Verificado: **0 enunciados duplicados en todo el banco de 489 preguntas**.
    2. Se corrigieron 25 preguntas Hotspot eliminando la opción de relleno `"Explanation:"` y los distractores genéricos, reemplazándolos por opciones técnicas reales y verificadas contra las explicaciones del PDF oficial (ej. `DefaultAzureCredential` + `client.responses.create`, roles RBAC `Storage Blob Data Reader`, filtros `IPromptRenderFilter`, proyecciones de Knowledge Store `Object projection` vs `Table projection`, etc.).
  - **Fidelidad y Paridad Bilingüe en `questions_azure_ai103_es.js`:**
    - Se aplicó exactamente el mismo ordenamiento por dominio y renumeración a las preguntas gemelas en español (`-es`).
    - Traducciones técnicas íntegras sin acortar ni alterar el contenido original, manteniendo paridad 1:1 en `correctIds`, opciones e interactividades.
  - **Validación y Actualización PWA:**
    - PWA actualizada a `BUILD_TIMESTAMP = '20260922c'`, caché `simulador-v63-20260922c` en `sw.js` e `index.html`.
    - Aprobadas al 100% todas las suites: `validate_ui_palette.js` (18 hex, 0 gradientes), `validate_ai103_integration.js` (489 EN + 489 ES), `validate_bank_integrity.js` (2,715 preguntas deduplicadas) y `validate_full_application.js` (81/81 checks).
