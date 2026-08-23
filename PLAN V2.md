# Auditoría V2 y Plan V2 para Data Dojo

## Resumen

Crear dos nuevos documentos en la raíz del workspace, sin tocar código fuente de la app:

- `D:\2026\Simulador de Preguntas\AUDITORIA_TECNICA_DATA_DOJO_V2.md`
- `D:\2026\Simulador de Preguntas\PLAN_IMPLEMENTACION_DATA_DOJO_V2.md`

Los dos documentos deben partir del estado actual verificado del proyecto, no del estado previo. La auditoría v2 debe dejar explícito qué hallazgos anteriores ya fueron resueltos, cuáles quedaron parciales, cuáles siguen abiertos y cuáles se deben diferir por riesgo. El plan v2 debe enfocarse en `seguro ahora + diferido`, con snippets solo para cambios de bajo riesgo.

La auditoría v2 usará `doble score` como criterio oficial:
- `Calidad técnica / mantenibilidad`: **7.4 / 10**
- `Estado funcional / producto`: **9.1 / 10**

No dejar un score único principal. Si se quiere una lectura rápida, usar la dupla `7.4 técnico | 9.1 funcional`.

## Cambios clave en los documentos

### 1. `AUDITORIA_TECNICA_DATA_DOJO_V2.md`

Debe tener esta estructura exacta:

1. `# Auditoría Técnica Data Dojo V2`
2. Fecha de revisión y nota de método:
   - revisión hecha sobre código actual
   - no se implementó nada en esta entrega
   - la app fue verificada de nuevo porque ya existían ajustes aplicados
   - el proyecto no está bajo `.git`, así que la verificación se basa en lectura directa del workspace
3. `## Score Oficial V2`
   - `7.4 / 10` calidad técnica
   - `9.1 / 10` estado funcional/producto
   - breve explicación de por qué ahora se separan ambas lecturas
4. `## Ajustes Verificados Como Resueltos`
5. `## Ajustes Parciales`
6. `## Hallazgos Abiertos`
7. `## Hallazgos Diferidos por Riesgo`
8. `## Snippets Recomendados de Bajo Riesgo`
9. `## Veredicto V2`

#### El bloque `Ajustes Verificados Como Resueltos` debe marcar como `Resuelto`
Con evidencia breve y referencia de archivo/línea:

- SW: asset inexistente removido y assets recientes incluidos en [`sw.js`](/D:/2026/Simulador%20de%20Preguntas/sw.js)
- doble registro del SW reducido a uno solo en [`script.js`](/D:/2026/Simulador%20de%20Preguntas/script.js)
- ruta `file:///D:/...` eliminada
- F18 backup/restore ya implementada en [`features.js`](/D:/2026/Simulador%20de%20Preguntas/features.js)
- fix de `trackAction` inexistente ya aplicado
- `hideFeaturePanels()` ya incluye `study-plan-panel` y `start-marathon-btn`
- fix de `q.prompt` ya aplicado en métricas/labels
- reemplazo de barras de énfasis en `.weakness-panel` y `.study-plan-item` ya aplicado en CSS

#### El bloque `Ajustes Parciales` debe marcar como `Parcial`
Con explicación de por qué no se consideran cerrados:

- layout tokens declarados en [`styles.css`](/D:/2026/Simulador%20de%20Preguntas/styles.css) pero todavía no adoptados ampliamente con `var(--layout-max-md)` y `var(--layout-max-xl)`
- eliminación de `border-left` resuelta en CSS principal, pero todavía quedan `border-left` embebidos dentro de HTML/string templates en [`script.js`](/D:/2026/Simulador%20de%20Preguntas/script.js)
- fixes de timezone en streak parcialmente aplicados:
  - `dateDiffDays()` ya fuerza parse local
  - pero `today` sigue construyéndose con `new Date().toISOString().split('T')[0]`, lo cual sigue siendo frágil para UTC-6

#### El bloque `Hallazgos Abiertos` debe incluir solo issues reales restantes de bajo o medio riesgo
No volver a inflar hallazgos que ya no son bugs activos.

Debe incluir:

- `Timezone/streak parcial`
  - severidad: media
  - problema: uso de fecha UTC para “today” en streak/risk banner
  - impacto: banner o racha incorrecta cerca de medianoche local
- `Seeds de autor todavía presentes`
  - severidad: media-baja
  - problema: `NorSab89` y valores seed en [`hero_data.js`](/D:/2026/Simulador%20de%20Preguntas/hero_data.js)
  - impacto: producto todavía acoplado al entorno/datos del autor
- `Layout vars sin adopción`
  - severidad: baja
  - problema: tokens declarados pero no aplicados en reglas repetidas
- `Barras residuales en templates inline`
  - severidad: baja
  - problema: todavía quedan `border-left` en HTML generado desde JS

#### El bloque `Hallazgos Diferidos por Riesgo` debe incluir y rebajar donde corresponda
Estos ya no deben presentarse como “implementar ahora”, sino como deuda o riesgo latente:

- `Ruta global startQuizAction y ruta currentPool`
  - clasificar como `deuda técnica latente`, no como bug funcional activo
  - dejar explícito que el flujo normal probablemente usa `startBtn.onclick` y por eso no debe tocarse ahora
- `Dual model de userAnswers`
  - diferido/no tocar
  - explicar que hoy funciona con compatibilidad por lookup mixto
- `Redefiniciones de finishQuiz / toggleZenMode / returnToMenu / renderBadges`
  - diferido/no tocar
  - explicar que el orden actual es frágil pero funcional
- `Monkey patch de localStorage y sync Supabase`
  - diferido/no tocar
- `Refactor de innerHTML / inline styles / onclick inline`
  - diferido/no tocar
- `Sanitización DOMPurify`
  - diferido/no tocar mientras el contenido siga siendo local y controlado

#### Snippets obligatorios dentro de la auditoría v2
Solo para hallazgos `seguros ahora` o `parciales`.

Debe incluir estos snippets:

- helper de fecha local para streak:

```js
function getLocalISODate() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
```

- reemplazo de `toISOString().split('T')[0]` por `getLocalISODate()` en streak/risk banner
- neutralización de seeds en `HeroManager`
- adopción real de `var(--layout-max-md)` y `var(--layout-max-xl)` en reglas repetidas
- reemplazo de `border-left` residual por dots/chips/clases auxiliares en templates generados

### 2. `PLAN_IMPLEMENTACION_DATA_DOJO_V2.md`

Debe ser un plan de implementación práctico, corto y accionable, con esta estructura:

1. `# Plan de Implementación Data Dojo V2`
2. `## Resumen`
3. `## Seguro Implementar Ahora`
4. `## Diferido / No Tocar`
5. `## Casos de Validación`
6. `## Criterio de Cierre`

#### El bloque `Seguro Implementar Ahora` debe incluir solo 4 items
En este orden:

1. `Normalizar fecha local en streak y streak-risk`
2. `Quitar seeds del autor en HeroManager`
3. `Completar la eliminación de border-left residual en templates generados`
4. `Aplicar realmente las layout vars ya declaradas`

Cada item debe llevar:
- objetivo
- archivos tocables
- riesgo
- snippet de referencia
- validación esperada

#### El bloque `Diferido / No Tocar` debe incluir explícitamente
Con una línea de razón por item:

- quiz core y doble ruta aparente
- `userAnswers` mixto
- redefiniciones internas/globales
- override de `localStorage.setItem`
- refactor masivo de `innerHTML`, `onclick`, inline style
- sanitización con dependencia nueva

#### Casos de validación obligatorios del plan v2

- practicar antes y después de medianoche local, validando racha y banner
- abrir home con perfil limpio y verificar que ya no aparezca `NorSab89`
- revisar panel de debilidades y study plan sin barras laterales duras
- revisar reglas principales de ancho usando `var(--layout-max-md)` / `var(--layout-max-xl)`
- confirmar que no se toca el flujo del quiz ni se rompe inicio/finalización
- confirmar que el SW sigue registrándose una sola vez y cacheando assets actuales

## Interfaces y convenciones

No hay cambios de API pública de la app en esta pasada documental. Sí deben quedar explícitas estas convenciones dentro de ambos `.md`:

- estados de hallazgos: `Resuelto`, `Parcial`, `Abierto`, `Diferido`
- criterio de plan: `Seguro ahora + diferido`
- score oficial v2: siempre dual, nunca único
- snippets solo para cambios de bajo riesgo o parciales
- hallazgos diferidos: sin invitación a implementar ahora

## Casos de prueba del entregable documental

Antes de dar por cerrada la creación de los dos `.md`, verificar:

- existen ambos archivos con sufijo `V2`
- la auditoría v2 reconoce explícitamente los fixes ya aplicados
- la auditoría v2 ya no presenta como urgentes los hallazgos que hoy son deuda técnica estable
- el plan v2 contiene solo 4 acciones seguras
- ambos documentos están en español
- ambos incluyen snippets concretos
- el plan v2 y la auditoría v2 son consistentes entre sí en score, prioridades y diferidos

## Supuestos

- Se conservan todos los documentos previos; v2 no reemplaza ni borra nada.
- No se modificará el código fuente de la app en esta pasada, solo se crearán los dos `.md`.
- La referencia principal para “seguro ahora” es: bajo riesgo, alto valor, sin tocar el motor central del quiz.
- La referencia principal para “diferido” es: cualquier cambio que afecte `script.js` core, modelo de respuestas, orden de redefiniciones o sincronización cloud.
