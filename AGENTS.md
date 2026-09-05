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
















### 2026-09-04 22:19 CST — Claude (Opus 5)
- **Auditoría de despliegue end-to-end y blindaje de la capa de sincronización Supabase.**
- **Estado verificado de los tres orígenes (todo sano, 0 fallos):**
  - **Vercel** (`prj_4VsJb11Fab5M4j2axPhNaF0mACbb`, cuenta personal Hobby): 19 deployments visibles, **todos `● Ready`**, 4–6 s de build, sin protección de acceso. Producción respondiendo HTTP 200.
  - **GitHub Pages** (build legacy, source `main` `/`): últimos 3 builds `built`, sin errores. El único workflow es el automático `pages-build-deployment` — **no hay CI propio, ni tests ni lint como gate previo al deploy**.
  - **Sincronía**: hashes SHA-256 de `index.html`, `script.js`, `features.js`, `styles.css`, `supabase-sync.js` y `sw.js` **idénticos** en Vercel, en Pages y en `git HEAD`. Los 49 assets del service worker responden 200 en producción.
- **Hallazgo crítico corregido — ID de dispositivo compartido (`supabase-sync.js`):** `getDeviceId()` asignaba el literal fijo `device_1772569653760_xdufm320z` en lugar de generar un ID. Presente desde el primer commit del archivo. Cualquier visitante del sitio público leía y sobrescribía la fila de Norman (la base tenía exactamente 1 fila). Ahora cada navegador genera su ID con `crypto.randomUUID()`, **respetando el `_device_id` ya guardado** para no romper dispositivos existentes. Ver el bloque de ACTUALIZACIÓN en la sección 2.
- **Hallazgo corregido — el guardado final al cerrar la pestaña nunca llegaba:** el `beforeunload` usaba `navigator.sendBeacon`, que **no puede fijar cabeceras**, así que el POST salía sin `apikey`/`Authorization` y Supabase lo rechazaba con **401 en silencio**. Sustituido por `fetch({ keepalive: true })` con cabeceras completas y `Prefer: resolution=merge-duplicates`, disparado en `pagehide` y en `visibilitychange` (fiables también en móviles iOS/Android).
- **Nueva API de emparejamiento manual** (`DataSync.getPairingCode()`, `DataSync.pairWith(code)`, `DataSync.restoreMasterBackup()`), expuesta en `window.DataSync`. Reemplaza la sincronización multi-dispositivo "gratis" que daba el ID fijo, ahora de forma explícita y sin exponer la fila a terceros.
- **Higiene de archivos publicados:** 7+ archivos internos se estaban sirviendo públicamente en producción (`AGENTS.md` 70 KB, `_translation_progress.json` 344 KB, `_extracted_data.json`, `audit_output.txt`, `all_weak_domains.txt`, `data_dojo_backup_master.json`, `graphify-out/graph.json`). Se amplió `.vercelignore` con 20 entradas, tras verificar **0 referencias** a cada una desde `index.html`, `sw.js` y el resto del JS de aplicación. `questions_mapping_missing.js` **sí está en uso** y quedó explícitamente excluido de la exclusión. ⚠️ **GitHub Pages publica desde la raíz de `main` y NO respeta `.vercelignore`** — ahí siguen accesibles.
- **⛔ PENDIENTE, NO APLICADO — RLS abierto en `quiz_progress`:** un `GET` a `/rest/v1/quiz_progress` usando solo la anon key pública devolvió **HTTP 200 con las filas completas**. La lectura anónima está abierta y, por simetría con el `upsert` de la app, también la escritura. **No se pudo automatizar**: el conector MCP de Supabase de esta sesión está autorizado sobre otro proyecto (`slygqlropwqizhhdysov`, "data-dojo", creado 2026-03-03, estado **INACTIVE** — ni resuelve el DNS), no sobre el real (`suplwoyiviapsnowzfcb`); tampoco hay `service_role` key ni CLI de Supabase en el entorno. Se dejó la migración lista para pegar en el SQL Editor: **`supabase/migrations/20260904_harden_quiz_progress_rls.sql`** — activa RLS, deja políticas explícitas y **bloquea `DELETE`/`TRUNCATE`** (hoy un tercero podría vaciar la tabla). Incluye una FASE 2 opcional documentada (columna `device_secret` + cabecera `x-device-secret`) para aislamiento real por dispositivo.
- **Pruebas:** banco aislado de 6 casos sobre la lógica de ID (dispositivo existente conserva su fila, visitante nuevo no hereda el ID maestro, dos visitantes obtienen IDs distintos, formato válido, estabilidad entre llamadas) — **6/6 pasadas**. `node --check` limpio en `supabase-sync.js` y `sw.js`.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260904a'` y caché `simulador-v49-20260904a` en `sw.js` e `index.html`. Además **versionó `supabase-sync.js` con `?v=20260904a`** (antes se cargaba sin query string, así que el fix habría quedado atrapado en la caché HTTP de los navegadores existentes) tanto en `index.html` como en `ASSETS_TO_CACHE`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **81/81 checks pasados**, `validate_ui_palette.js` con 18 colores hex y 0 gradientes, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

### 2026-09-04 22:45 CST — Claude (Opus 5)
- **Corrección: la configuración de categorías activas del Módulo Administrativo se perdía en cada cambio.** Reporte de Norman con el modal abierto en `data-dojo-quiz-7wl0ebpgt-...vercel.app`. Se identificaron **tres causas independientes**, dos de código y una de uso:
  1. **`hiddenCategories` nunca programaba sincronización propia.** El interceptor de `localStorage.setItem` en `supabase-sync.js` solo dispara `scheduleSync()` para claves que contengan `Profile`, `Stats`, `progress`, `mastery`, `certified`, `Modules`, `quiz` o `Streak`. `hiddenCategories` **no coincide con ninguno**, así que solo llegaba a la nube de rebote, si `certifiedCourses` (que sí coincide, por `certified`) se guardaba después en el mismo `saveAdminConfig()`. Se agregó `Categories` a la lista.
  2. **El restore desde la nube no le avisaba a la UI.** `script.js:1641-1642` lee `hiddenCategories` y `certifiedCourses` **una única vez** al cargar, en variables de módulo. `DataSync.loadFromCloud()` corre ~500 ms después por red y solo escribía en `localStorage`: la página seguía con el valor viejo en memoria y, al guardar el Módulo Administrativo, `saveAdminConfig()` escribía ese valor viejo **encima del bueno** en la nube. Ahora `loadFromCloud()` emite `window.dispatchEvent(new CustomEvent('datasync:restored'))` y `script.js` lo escucha para re-leer ambas variables y llamar a `renderCategories()` solo si algo cambió realmente.
  3. **Causa de uso, sin arreglo de código posible — la URL del deployment.** `localStorage` está aislado **por origen**, y cada deployment de Vercel recibe un hostname único (`data-dojo-quiz-<hash>-norman-sabillons-projects.vercel.app`). Abrir la app desde el enlace del dashboard de Vercel equivale a **un navegador nuevo y vacío en cada deploy**: se pierden categorías, perfil, XP y racha. **Usar siempre el dominio estable `https://data-dojo-quiz.vercel.app`** (o el de GitHub Pages). Las URLs por deployment sirven para inspeccionar una versión concreta, no para estudiar.
- Actualizó la PWA a `BUILD_TIMESTAMP = '20260904b'` y caché `simulador-v50-20260904b` en `sw.js` e `index.html`.
- Verificó con 0 errores las 6 suites de validación (`validate_full_application.js` con **81/81 checks pasados**, `validate_ui_palette.js`, `validate_global_language.js`, `validate_ai103_integration.js`, `validate_genai_integration.js`, `audit_code_structure.js`).

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
