# V3 de Auditoría y Plan para Data Dojo

## Resumen

Crear dos documentos nuevos, sin sobrescribir los anteriores:

- `D:\2026\Simulador de Preguntas\AUDITORIA_TECNICA_DATA_DOJO_V3.md`
- `D:\2026\Simulador de Preguntas\PLAN_IMPLEMENTACION_DATA_DOJO_V3.md`

La V3 debe partir del estado actual ya verificado del código, no reciclar conclusiones viejas. Debe reconocer explícitamente los ajustes ya aplicados y reordenar prioridades con el criterio acordado: `seguro ahora + diferido por riesgo`.

Score oficial V3 a usar en ambos docs:
- `Calidad técnica / mantenibilidad`: **7.6 / 10**
- `Estado funcional / producto`: **9.2 / 10**

## Cambios a documentar

### 1. Contenido obligatorio de `AUDITORIA_TECNICA_DATA_DOJO_V3.md`

Usar esta estructura exacta:

1. `# Auditoría Técnica Data Dojo V3`
2. Fecha y método
   - reanálisis hecho sobre el estado actual del workspace
   - no se implementó nada en esta entrega
   - se volvió a revisar toda la app porque hubo ajustes posteriores
   - el proyecto no está bajo `.git`, así que la referencia es el estado actual de archivos
3. `## Score Oficial V3`
   - `7.6 / 10` técnico
   - `9.2 / 10` funcional/producto
   - explicación corta de por qué se separan ambos scores
4. `## Qué Mejoró Desde La Revisión Anterior`
5. `## Hallazgos Resueltos`
6. `## Hallazgos Parciales`
7. `## Hallazgos Abiertos`
8. `## Hallazgos Diferidos Por Riesgo`
9. `## Ruta Segura Para Optimizar La App`
10. `## Métricas Actualizadas`
11. `## Veredicto V3`

#### Hallazgos que deben quedar como `Resuelto`

- SW corregido:
  - ya no referencia `dp600_study_module.html`
  - ya incluye `questions_databricks_aibi.js` y `questions_databricks_sql_analytics.js`
- registro de service worker reducido a uno
- ruta `file:///D:/...` ya eliminada
- F18 backup/restore ya implementada
- fix de `trackAction` inexistente ya aplicado
- `hideFeaturePanels()` ya incluye `study-plan-panel` y `start-marathon-btn`
- fix de `q.prompt` ya aplicado en F12
- reemplazo de barras de énfasis ya aplicado en:
  - `.weakness-panel`
  - `.study-plan-item.priority-*`

#### Hallazgos que deben quedar como `Parcial`

- fix de timezone en streak:
  - `dateDiffDays()` ya usa parse local con `T00:00:00`
  - pero `today` todavía usa `new Date().toISOString().split('T')[0]`
- layout tokens:
  - `--layout-max-md` y `--layout-max-xl` ya existen
  - pero todavía no están adoptados ampliamente en reglas repetidas
- eliminación de barras de énfasis:
  - CSS principal ya migró
  - pero siguen apareciendo `border-left` embebidos en HTML generado desde `script.js`

#### Hallazgos que deben quedar como `Abierto`

Solo estos, y con severidad recalibrada:

- `Timezone/streak todavía frágil cerca de medianoche local`
- `Seeds del autor siguen visibles en HeroManager`
- `Layout vars declaradas pero no desplegadas`
- `Barras residuales dentro de templates inline`
- `Ruido de debug/legacy en producción`
  - `RESTORED`, `NUCLEAR FIX`, `legacy`, `Critical Error`, exceso de `console.log`

#### Hallazgos que deben quedar como `Diferido por riesgo`

Estos no deben presentarse como trabajo inmediato:

- doble ruta aparente del quiz
  - clasificar como deuda técnica latente, no bug activo del flujo principal
- modelo mixto de `userAnswers`
- redefiniciones de `finishQuiz`, `toggleZenMode`, `returnToMenu`, `renderBadges`
- monkey patch de `localStorage.setItem` en sync cloud
- refactor masivo de `innerHTML`, `onclick`, estilos inline
- sanitización tipo DOMPurify

#### Ruta segura para optimizar la app

La auditoría V3 debe cerrar con una lista corta de optimización realista:

1. normalizar fecha local de streak
2. neutralizar seeds del autor
3. desplegar layout vars existentes
4. terminar de quitar `border-left` residual en templates
5. limpiar logs y etiquetas de debug visibles

#### Métricas actualizadas que deben quedar escritas

Usar estos valores:

- `script.js`: **4367** líneas
- `features.js`: **1772** líneas
- `styles.css`: **3245** líneas
- `index.html`: **1707** líneas
- scripts locales cargados al arranque: **2,276,592 bytes**
- `onclick="..."` en `index.html`: **18**
- `style="..."` en `index.html`: **118**
- `innerHTML =` en `script.js` + `features.js`: **86**
- usos de `.style.` en `script.js` + `features.js`: **127**
- registros de SW detectados: **1**
- duplicaciones aún presentes:
  - `finishQuiz`: 2
  - `toggleZenMode`: 2
  - `renderBadges`: 2
  - `returnToMenu`: 2

### 2. Contenido obligatorio de `PLAN_IMPLEMENTACION_DATA_DOJO_V3.md`

Usar esta estructura exacta:

1. `# Plan de Implementación Data Dojo V3`
2. `## Resumen`
3. `## Seguro Implementar Ahora`
4. `## Diferido / No Tocar`
5. `## Casos de Validación`
6. `## Criterio de Cierre`

#### `Seguro Implementar Ahora`

Debe contener exactamente estas 5 acciones, en este orden:

1. `Normalizar fecha local para streak y streak-risk`
2. `Quitar seeds del autor en HeroManager`
3. `Aplicar realmente las layout vars ya declaradas`
4. `Eliminar los border-left residuales dentro de templates JS`
5. `Reducir ruido de debug visible en producción`

Cada acción debe incluir:
- objetivo
- archivos tocables
- nivel de riesgo
- snippet guía
- validación esperada

#### `Diferido / No Tocar`

Debe listar, con una línea de razón por item:

- quiz core y ruta global `startQuizAction`
- `userAnswers` mixto
- redefiniciones internas/globales
- override de `localStorage.setItem`
- refactor de `innerHTML`, `onclick`, inline style
- sanitización con dependencia nueva

#### `Casos de Validación`

Debe incluir estos escenarios:

- practicar antes y después de medianoche local y validar racha/banner
- abrir la app con perfil limpio y verificar que ya no aparezca `NorSab89`
- revisar panel de debilidades y study plan sin barras laterales duras
- revisar reglas con ancho repetido y confirmar adopción de `var(--layout-max-md)` y `var(--layout-max-xl)`
- confirmar que el flujo del quiz no fue tocado
- confirmar que backup/restore sigue operativo
- confirmar que el SW sigue registrándose una sola vez y cacheando los módulos activos

#### `Criterio de Cierre`

Debe declarar terminado cuando:
- no haya uso de UTC para “today” en streak
- no queden seeds del autor visibles por defecto
- las layout vars existentes se usen en reglas clave repetidas
- no queden `border-left` residuales en templates prioritarios
- no se haya tocado el motor central del quiz

## Interfaces y snippets que deben quedar en V3

Ambos documentos deben incluir estos snippets o interfaces internas propuestas:

- helper de fecha local:

```js
function getLocalISODate() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
```

- perfil neutro por defecto:

```js
const DEFAULT_PROFILE = {
  nick: "Estudiante",
  name: "",
  joinDate: new Date().toLocaleDateString()
};
```

- adopción de layout vars ya creadas:

```css
.quiz-container,
.course-list,
.menu-profile-card,
.wisdom-quote-card {
  max-width: var(--layout-max-md);
}

.main-container,
.vertical-layout {
  max-width: var(--layout-max-xl);
}
```

- sustitución de acento lateral residual por chip/punto o fondo sutil, no por `border-left`

## Supuestos

- La V3 coexistirá con V1/V2; no se borra ni reemplaza documentación previa.
- El enfoque acordado sigue siendo `seguro ahora + diferido`.
- No se ejecuta implementación en esta pasada; solo se deja la especificación completa para crear ambos `.md`.
- El score dual V3 es el oficial, no debe volver a una nota única.
- La optimización buscada es pragmática: mejorar producto sin abrir refactor del quiz core.
