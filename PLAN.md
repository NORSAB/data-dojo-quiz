# Plan Del Documento `.md` De Auditoria Y Remediacion Para Data Dojo

## Resumen

Generar un unico documento en `D:\2026\Simulador de Preguntas\PLAN_REMEDIACION_DATA_DOJO.md` sin tocar ningun archivo fuente de la app. El documento sera la entrega final y debe servir como guia de implementacion para otro agente o ingeniero.

El `.md` debe dejar cerrado:
- estado actual de la implementacion con nota global `6.8/10`
- buenas practicas que ya existen
- bugs reales y deuda tecnica priorizada
- restricciones visuales que no se deben romper
- snippets de correccion y mejora listos para copiar/adaptar
- casos de validacion para cuando otro agente implemente

## Estructura Exacta Del `.md`

El documento debe usar este orden y estos bloques:

1. `# Auditoria y Plan de Remediacion Data Dojo`
2. Fecha y alcance revisado
3. Nota de trabajo:
   - no se implemento nada
   - no se cambiaron iconos
   - no se rediseño la UI
   - solo se documentan hallazgos y correcciones propuestas
4. `## Calificacion Global`
   - score fijo `6.8 / 10`
   - resumen ejecutivo de 4 a 6 bullets
5. `## Lo Que Ya Esta Bien`
   - validacion de preguntas
   - modularidad por cursos
   - uso de SVG
   - PWA y persistencia
   - experiencia funcional amplia
6. `## Metricas Del Estado Actual`
   - lineas de `script.js` y `features.js`
   - peso aproximado de scripts cargados al arranque
   - conteo de `onclick`, `style=""`, `innerHTML`, `.style.`
   - conteo de redefiniciones detectadas
7. `## Hallazgos Prioritarios`
   - cada hallazgo con este formato:
   - `### [Severidad] Titulo`
   - `Evidencia`
   - `Problema`
   - `Impacto`
   - `Correccion propuesta`
   - `Snippet`
8. `## Restricciones Visuales y de UX a Respetar`
   - no cambiar iconos fuera de SVG
   - no introducir rediseño visual completo
   - evitar barras de enfasis
   - reducir anchos repetidos hardcodeados
   - mantener modularidad por cursos
9. `## Nuevas Funcionalidades Recomendadas`
   - solo mejoras de experiencia
   - no rediseños cosméticos
10. `## Casos de Validacion`
11. `## Supuestos y Defaults Elegidos`
12. `## Veredicto Final`

## Hallazgos Y Snippets Obligatorios

El documento debe incluir estos hallazgos, en este orden, con snippet propio por cada uno:

- `Alto`: doble ruta de inicio del quiz.
  - Explicar que `startCourse` arma un `currentPool` filtrado y que `window.startQuizAction` vuelve a filtrar desde `window.questionsData`.
  - Snippet obligatorio: unificar en una sola ruta usando `configQuestionsPool`.

- `Alto`: inconsistencia de `userAnswers`.
  - Explicar que unas rutas usan `q.id` y otras `idx`.
  - Snippet obligatorio: helpers `getAnswerKey(question)`, `getAnswer(question)`, `setAnswer(question, value)` y uso canonico por `question.id`.

- `Alto`: PWA/cache inconsistente.
  - Explicar archivo inexistente en `sw.js`, assets faltantes y doble registro del service worker.
  - Snippet obligatorio: bloque `ASSETS_TO_CACHE` corregido y criterio de una sola registracion.

- `Medio-Alto`: redefiniciones y codigo heredado.
  - Explicar duplicados de `finishQuiz`, `toggleZenMode`, `renderBadges`, `returnToMenu`.
  - Snippet obligatorio: ejemplo de objeto `UIActions` como fuente unica de verdad.

- `Medio`: persistencia cloud fragil.
  - Explicar `localStorage.setItem` override y `sendBeacon` sin headers efectivos.
  - Snippet obligatorio: `flushCloudSave(payload)` con `fetch(..., { keepalive: true })` y persistencia explicita tipo `persistUserStats(nextStats)`.

- `Medio`: exceso de `innerHTML`, estilos inline y `onclick`.
  - Snippet obligatorio: `bindUIEvents()` y recomendacion de mover patrones a clases CSS.

- `Medio`: riesgo de XSS futuro por `marked.parse(...)` mas `innerHTML`.
  - Snippet obligatorio: `safeMarkdownToHtml()` con sanitizacion.

- `Medio`: seeds y rutas locales del autor.
  - Explicar `NorSab89`, XP seed y `file:///D:/...`.
  - Snippet obligatorio: `DEFAULT_PROFILE` neutro y `LIBRARY_RESOURCES` con rutas relativas del proyecto.

- `Visual`: barras de enfasis y anchos repetidos.
  - Explicar `border-left` en paneles y prioridades, y repeticiones de `900px`, `1400px`, `300px`, `120px`, `520px`, `560px`, `720px`, `960px`.
  - Snippets obligatorios:
    - variables CSS `--layout-max-md`, `--layout-max-xl`, `--layout-sidebar-w`, `--layout-panel-w`, `--metric-bar-w`
    - reemplazo de `border-left` por acentos mas suaves con fondo y puntos/chips

## Interfaces Propuestas Que Deben Quedar Documentadas

Aunque no se implementan, el `.md` debe dejar claras estas interfaces objetivo:

- `window.startQuizAction` debe consumir un pool ya filtrado, no recalcular desde todo el banco.
- API canonica de respuestas:
  - `getAnswerKey(question)`
  - `getAnswer(question)`
  - `setAnswer(question, value)`
- API explicita de persistencia:
  - `persistUserStats(nextStats)`
  - `flushCloudSave(payload)`
- tokens CSS:
  - `--layout-max-md`
  - `--layout-max-xl`
  - `--layout-sidebar-w`
  - `--layout-panel-w`
  - `--metric-bar-w`

## Casos De Validacion Que El Documento Debe Incluir

El `.md` debe dejar listos estos escenarios de prueba para la futura implementacion:

- Configurar idioma, rango, dominio y busqueda; iniciar quiz y confirmar que se respeta exactamente el pool filtrado.
- Navegar entre preguntas, responder, volver atras y confirmar que el estado se mantiene sin mezclar indice e `id`.
- Finalizar quiz con preguntas pendientes y confirmar conteo correcto de respondidas/no respondidas.
- Revisar historial y confirmar que las respuestas se muestran coherentes en review.
- Activar PWA, recargar offline y verificar acceso a cursos activos recientes.
- Probar sincronizacion local/cloud en cierre de pestaña y posterior restauracion.
- Validar que no se cambian iconos fuera de SVG.
- Validar que paneles prioritarios y de debilidades ya no dependan de barras laterales duras si luego se implementa la mejora visual.
- Verificar que las nuevas mejoras UX recomendadas no rompan los modulos existentes por curso.

## Nuevas Funcionalidades De Experiencia Que Deben Quedar Priorizadas

El documento debe proponer estas mejoras como backlog priorizado, sin implementarlas:

- Reanudacion inteligente de examen en curso.
- Tarjeta “Hoy te conviene estudiar esto”.
- Indicador de disponibilidad offline por curso.
- Marcador de confianza por pregunta: segura, dudosa, al azar.
- Recomendador post-examen accionable.
- Modo foco real encima del Zen Mode actual.
- Score sintetico de preparacion por curso.

El orden recomendado en el `.md` debe ser:
1. Reanudacion inteligente
2. Recomendador diario
3. Marcador de confianza
4. Recomendador post-examen
5. Salud offline
6. Score de preparacion
7. Evolucion de Zen Mode

## Supuestos y Defaults Elegidos

- El unico entregable es el `.md`; no se modifica codigo fuente.
- La nota oficial a dejar es `6.8/10`.
- Los snippets del documento son propuestas tecnicas listas para copiar/adaptar, no parches aplicados.
- Se respetan iconos SVG existentes.
- No se plantea rediseño completo; solo mejoras funcionales y correcciones.
- Si hay conflicto entre mejorar UX y preservar la estructura modular por curso, gana la modularidad.
- El documento debe hablar en espanol y mantener tono tecnico directo.

## Veredicto Final Que Debe Cerrar El Documento

Cerrar el `.md` con esta idea:
- Data Dojo ya tiene valor de producto real.
- El principal problema actual es coherencia interna de implementacion, no falta de funcionalidades.
- Si se corrigen primero arranque del quiz, modelo de respuestas, PWA/cache y deuda tecnica por redefiniciones, la app puede subir rapido a un rango cercano a `8.2/10` sin reescritura total.
