# V4 de Auditoría y Plan para Data Dojo

## Resumen

Crear dos documentos nuevos en la raíz del proyecto, sin tocar código fuente en esta pasada:

- `AUDITORIA_TECNICA_DATA_DOJO_V4.md`
- `PLAN_IMPLEMENTACION_DATA_DOJO_V4.md`

La V4 debe quedar 100% alineada con tu realidad actual: la app es tu herramienta de estudio para una certificación próxima, así que el criterio oficial será `pre-examen primero`. Eso significa:

- priorizar solo optimizaciones seguras y útiles para estudiar
- re-clasificar como `Diferido / No tocar` todo lo que sea limpieza arquitectónica de alto riesgo
- separar claramente `salud técnica` de `valor funcional`

Score oficial V4 a dejar en ambos docs:

- `7.9 / 10` calidad técnica / mantenibilidad
- `9.3 / 10` estado funcional / producto para estudio

## Contenido de `AUDITORIA_TECNICA_DATA_DOJO_V4.md`

Usar esta estructura exacta:

1. `# Auditoría Técnica Data Dojo V4`
2. Fecha y método
   - revisión hecha sobre el estado actual real del workspace
   - no se implementó nada en esta entrega
   - se reanalizó la app completa porque ya hubo ajustes posteriores
   - criterio oficial: prioridad pre-examen, no refactorizar el core del quiz
3. `## Score Oficial V4`
   - `7.9 / 10` técnico
   - `9.3 / 10` funcional
   - explicación corta de por qué ambos scores conviven
4. `## Qué Mejoró Desde La Revisión Anterior`
5. `## Hallazgos Resueltos`
6. `## Hallazgos Parciales`
7. `## Hallazgos Abiertos`
8. `## Diferido / No Tocar`
9. `## Ajustes Seguros Recomendados`
10. `## Nuevas Funcionalidades Recomendadas`
11. `## Métricas Actualizadas`
12. `## Veredicto V4`

### Hallazgos que deben quedar como `Resuelto`

Dejar estos como cerrados, con evidencia breve del estado actual:

- `sw.js` ya no referencia el archivo inexistente y sí incluye assets actuales de Databricks
- el registro del service worker ya quedó en una sola ruta
- la ruta `file:///D:/...` ya no está presente
- F18 backup/restore ya está implementada
- el fix de `trackAction` inexistente ya fue aplicado
- `hideFeaturePanels()` ya contempla `study-plan-panel` y `start-marathon-btn`
- el fallback de `q.prompt` ya está corregido
- la corrección de racha por zona horaria ya sí quedó aplicada de verdad con `getLocalISODate()` y parse local
- los seeds del autor ya fueron neutralizados en `hero_data.js`
- la limpieza principal de barras de énfasis ya fue aplicada en CSS base

### Hallazgos que deben quedar como `Parcial`

Dejar estos como parciales, no como bugs graves:

- las `layout vars` ya existen y ya se usan en varias reglas principales, pero todavía quedan anchos hardcodeados dentro de templates inline en `script.js`
- la limpieza de `border-left` ya quedó hecha en la base visual, pero todavía queda un residual inline en el bloque `.p-dato-examen`
- todavía hay ruido de debug y etiquetas legacy en producción:
  - `NUCLEAR FIX`
  - `RESTORED`
  - `Critical Error`
  - `console.log` de features y rutas de soporte

### Hallazgos que deben quedar como `Abierto`

Solo uno como abierto estructural:

- `Escalabilidad para futuras materias todavía manual`
  - hoy agregar una materia nueva sigue implicando tocar catálogo de cursos, archivos de datos y algunos puntos de integración manual
  - esto no rompe nada hoy, pero limita crecimiento limpio a futuro

### Hallazgos que deben quedar como `Diferido / No Tocar`

Dejar estos explícitamente fuera del plan pre-examen, con razón breve por item:

- quiz core y ruta global `startQuizAction`
- modelo mixto de `userAnswers`
- redefiniciones de `finishQuiz`, `toggleZenMode`, `returnToMenu`, `renderBadges`
- monkey patch de `localStorage.setItem` para sync cloud
- refactor masivo de `innerHTML`, `onclick` y estilos inline
- sanitización con dependencia nueva tipo DOMPurify

La redacción debe dejar claro que aquí el criterio no es “mala práctica”, sino “alto riesgo sin beneficio real para tu examen”.

### Ajustes seguros que la auditoría V4 debe recomendar

La auditoría debe cerrar diciendo que, con el estado actual, solo hay tres ajustes realmente razonables antes del examen:

1. terminar de quitar el `border-left` residual que queda en template inline
2. mover los anchos inline residuales a clases o variables ya existentes
3. bajar el ruido de debug/legacy visible sin tocar la lógica

### Nuevas funcionalidades recomendadas que debe incluir la auditoría

Separarlas en dos grupos.

Primer grupo: `útiles para estudiar ya, sin tocar el core`

- `Qué estudiar hoy`
  - una tarjeta en dashboard que recomiende el dominio más débil o más urgente
  - CTA a práctica por dominio o flashcards
- `Preparación por curso`
  - score 0-100 por curso basado en precisión reciente, cobertura de dominios, simulacros y consistencia
- `Repaso final 7 días`
  - si el usuario define fecha de examen, generar foco diario con dominios y módulos sugeridos

Segundo grupo: `pensadas para futuras materias`

- `Blueprint por certificación`
  - pesos por dominio, duración sugerida y tamaño de simulacro por curso
- `Manifest de capacidades por curso`
  - declarar por curso si tiene preguntas, study module, flashcards, marathon, offline, etc.
- `Cola de repaso espaciado`
  - usar historial de errores y flashcards para generar repasos pendientes

### Snippets obligatorios dentro de la auditoría V4

Debe incluir snippets concretos para que otro implementador no improvise:

Snippet 1, helper de debug seguro:

```js
function debugLog(...args) {
  if (window.__DEBUG_DATA_DOJO__ === true) {
    console.log(...args);
  }
}
```

Snippet 2, reemplazo del residual `border-left` por clase reutilizable:

```css
.exam-tip-card {
  max-width: var(--layout-max-md);
  margin: 0 auto;
  padding: 10px 14px;
  border-radius: 8px;
  background: var(--bg-surface, #f1f5f9);
  display: flex;
  gap: 8px;
  position: relative;
}

.exam-tip-card::before {
  content: "";
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: 999px;
  background: #f59e0b;
  flex: 0 0 auto;
}
```

Snippet 3, uso de layout vars en templates residuales:

```css
.unir-tabs-row,
.unir-mastery-pill {
  max-width: var(--layout-max-md);
}

.unir-panel {
  max-width: 960px;
}
```

La nota del snippet debe dejar una decisión cerrada:
- `900px` pasa a `var(--layout-max-md)`
- `960px` puede quedarse fijo solo si corresponde a ancho panel específico y no a layout global

Snippet 4, recomendación diaria:

```js
function getStudyTodayRecommendation(courseId) {
  const stats = getDomainStats(courseId);
  const ranked = Object.entries(stats)
    .filter(([_, s]) => s.total >= 3)
    .map(([name, s]) => ({
      name,
      accuracy: s.attempted ? Math.round((s.correct / s.attempted) * 100) : 0,
      hasMisses: s.missed && s.missed.size > 0
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  return ranked[0] || null;
}
```

Snippet 5, score de preparación:

```js
function computeCourseReadiness(courseId) {
  const stats = getDomainStats(courseId);
  const domains = Object.values(stats);
  if (!domains.length) return 0;

  const attempted = domains.reduce((n, d) => n + d.attempted, 0);
  const correct = domains.reduce((n, d) => n + d.correct, 0);
  const covered = domains.filter(d => d.attempted > 0).length / domains.length;

  const accuracyScore = attempted ? (correct / attempted) * 100 : 0;
  const coverageScore = covered * 100;

  return Math.round((accuracyScore * 0.7) + (coverageScore * 0.3));
}
```

### Métricas que deben quedar escritas en la auditoría V4

Usar estos valores exactos:

- `script.js`: `4367` líneas
- `features.js`: `1772` líneas
- `styles.css`: `3245` líneas
- `index.html`: `1707` líneas
- scripts locales cargados al arranque: `2,276,592 bytes`
- `onclick="..."` en `index.html`: `18`
- `style="..."` en `index.html`: `118`
- `innerHTML =` en `script.js` + `features.js`: `86`
- usos de `.style.` en `script.js` + `features.js`: `127`
- registros de SW detectados: `1`
- duplicaciones aún presentes:
  - `finishQuiz`: `2`
  - `toggleZenMode`: `2`
  - `renderBadges`: `2`
  - `returnToMenu`: `2`

## Contenido de `PLAN_IMPLEMENTACION_DATA_DOJO_V4.md`

Usar esta estructura exacta:

1. `# Plan de Implementación Data Dojo V4`
2. `## Resumen`
3. `## Ajustes Seguros Pre-Examen`
4. `## Funcionalidades Nuevas Recomendadas`
5. `## Diferido / No Tocar`
6. `## Casos de Validación`
7. `## Criterio de Cierre`

### `Ajustes Seguros Pre-Examen`

Debe incluir exactamente estos 3 items, en este orden:

1. `Eliminar el border-left residual dentro de templates JS`
2. `Mover anchos inline residuales a layout vars o clases existentes`
3. `Reducir ruido de debug y etiquetas legacy visibles`

Cada item debe llevar:

- objetivo
- archivos tocables
- nivel de riesgo: `bajo`
- snippet guía
- validación esperada

### `Funcionalidades Nuevas Recomendadas`

Debe incluir exactamente estos 6 items, en este orden:

1. `Qué estudiar hoy`
   - ubicación: dashboard principal del curso
   - data source: `getDomainStats(courseId)` + historial reciente
   - CTA: práctica por dominio y flashcards si existen
   - riesgo: `bajo`
2. `Preparación por curso`
   - ubicación: tarjeta/resumen por curso
   - score base:
     - `70%` precisión agregada
     - `30%` cobertura de dominios
   - riesgo: `bajo`
3. `Repaso final 7 días`
   - mostrar solo si existe fecha de examen guardada
   - usa weak domains + study plan actual
   - riesgo: `bajo-medio`
4. `Blueprint por certificación`
   - objeto metadata por curso con dominios, pesos, tamaño de simulacro, tiempo sugerido
   - pensada para simulacros más realistas
   - riesgo: `medio`
5. `Manifest de capacidades por curso`
   - objeto por curso con flags:
     - `hasQuestions`
     - `hasStudy`
     - `hasFlashcards`
     - `hasMarathon`
     - `hasOfflineAssets`
   - pensada para crecer a nuevas materias sin lógica ad hoc
   - riesgo: `medio`
6. `Cola de repaso espaciado`
   - basada en historial de errores y tarjetas vistas
   - prioridad futura, no pre-examen
   - riesgo: `medio`

### Snippet obligatorio para futuro crecimiento de materias

El plan V4 debe incluir este ejemplo para que futuras materias no dependan de cableado manual disperso:

```js
const COURSE_MANIFEST = {
  "databricks-aibi": {
    provider: "databricks",
    status: "active",
    hasQuestions: true,
    hasStudy: true,
    hasFlashcards: true,
    hasMarathon: true,
    hasOfflineAssets: true,
    blueprint: {
      questionCount: 45,
      minutes: 90,
      weightedDomains: []
    }
  }
};
```

La decisión escrita debe ser esta:
- no implementar el manifest antes del examen
- sí dejarlo como dirección oficial para futuras materias

### `Diferido / No Tocar`

Debe repetir, con una línea de razón por item:

- quiz core y `startQuizAction`
- `userAnswers` mixto
- redefiniciones internas/globales
- override de `localStorage.setItem`
- refactor masivo de `innerHTML`, `onclick`, inline style
- sanitización con dependencia nueva

### Casos de validación obligatorios del plan V4

- confirmar que el quiz inicia, navega y finaliza exactamente igual que antes
- confirmar que el último residual visual con `border-left` desaparece sin cambiar iconos ni layout general
- confirmar que los anchos migrados siguen respetando la apariencia actual
- confirmar que los textos/labels debug ya no se muestran en rutas normales
- validar que `Qué estudiar hoy` recomienda un dominio real del curso activo
- validar que `Preparación por curso` no muestra valores absurdos con historial vacío
- validar que `Repaso final 7 días` se oculta si no hay fecha de examen
- validar que ninguna funcionalidad nueva depende de tocar el motor del quiz
- validar que backup/restore y SW siguen funcionando igual

### Criterio de cierre del plan V4

El plan debe declararse completo cuando:

- la documentación V4 refleje el estado actual real y no arrastre hallazgos ya resueltos
- quede explícito que la prioridad oficial es estudiar sin arriesgar el core
- los únicos ajustes inmediatos sean de bajo riesgo y alta utilidad
- las nuevas funcionalidades propuestas sean aditivas y course-agnostic
- las mejoras para futuras materias queden documentadas como dirección oficial, no como trabajo pre-examen

## Supuestos y defaults

- La V4 convivirá con V1, V2 y V3; no reemplaza documentos anteriores.
- El entregable V4 son dos `.md`, no cambios de código.
- El score oficial sigue siendo dual.
- Cualquier cambio que toque inicio del quiz, modelo de respuestas, finalización, review o sync cloud queda fuera del pre-examen.
- Las nuevas funcionalidades deben diseñarse para vivir principalmente en `features.js` y en la capa de dashboard/estudio, no dentro del motor central del quiz.
