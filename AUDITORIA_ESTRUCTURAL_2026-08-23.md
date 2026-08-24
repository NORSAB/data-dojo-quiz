# Auditoría estructural y factibilidad de refactorización

**Autor:** Codex (GPT-5)  
**Fecha y hora:** 2026-08-23 20:35 CST (America/Tegucigalpa)  
**Alcance:** capa ejecutable principal del simulador; los bancos masivos de preguntas se validaron aparte, pero no se incluyeron en el grafo AST para evitar que el volumen de datos ocultara la arquitectura real.

## Dictamen

La aplicación se puede refactorizar sin dañar su apariencia, pero no conviene hacer una reescritura general. La vía segura es incremental, conservando los contratos actuales de DOM (`id`, clases y orden de scripts), agregando pruebas antes de extraer módulos y comparando capturas visuales por cada fase.

El riesgo es bajo para extraer utilidades puras y configuración, medio para separar el Centro de estudio, y alto para dividir el motor de preguntas, el estado global o la sincronización con Supabase.

## Evidencia actual

- Grafo focalizado del commit base `aa63c4d7`: 135 nodos, 242 relaciones y 19 comunidades; no se detectaron ciclos de importación. Las correcciones posteriores se comprobaron con la auditoría estática reproducible.
- Puntos de mayor acoplamiento: `init()` (13 relaciones), `loadQuestion()` (11), `launchDirectQuiz()` (10), `selectCategory()` y `addXP()` (7 cada uno).
- Archivos monolíticos: `script.js` tiene 5,232 líneas y 67 funciones declaradas; `features.js` tiene 2,442 líneas y 48 funciones.
- Escrituras de HTML: 76 asignaciones a `innerHTML` en `script.js` y 21 en `features.js`.
- Inicio distribuido: seis listeners `DOMContentLoaded` entre `script.js`, `features.js`, `hero_data.js`, `supabase-sync.js` y `translate_toggle.js`.
- HTML: no hay `id` duplicados. Permanecen 22 atributos de evento inline (`onclick`, `onchange`, etc.) en `index.html`.
- CSS después de la normalización: 18 colores hexadecimales únicos y 0 gradientes; el punto de partida era 60 y 39, respectivamente.
- La auditoría reproducible posterior a las correcciones no encuentra funciones declaradas dos veces dentro del mismo archivo.

Los artefactos navegables del mapa base están en `graphify-out/graph.html`, `graphify-out/graph.json` y `graphify-out/GRAPH_REPORT.md`; el propio reporte marca el commit de origen para evitar confundirlo con una instantánea futura.

## Errores y duplicidades corregidos en esta sesión

1. El botón de tema ejecutaba `toggleTheme()` dos veces: una por `onclick` en `index.html` y otra por `addEventListener` en `script.js`. Se dejó un único listener.
2. `script.js` declaraba dos funciones llamadas `finishQuiz`. Por hoisting, la segunda anulaba silenciosamente la primera. La implementación antigua quedó identificada como `finishQuizLegacy`, sin cambiar el flujo activo.
3. El payload de Supabase incluía `theme`, una columna que no aparece en el esquema documentado. El tema sigue protegido dentro de `full_backup`, sin enviarse como columna adicional.
4. La restauración parcial de Supabase omitía `course_progress` y `course_mastery`. Ahora reconstruye de forma genérica las claves `${courseId}_progress` y `${courseId}_mastery`.
5. El módulo de estudio ofrecía una pestaña de flashcards con contador cero para cursos sin banco propio. Esa pestaña ahora solo aparece cuando existen tarjetas.
6. Las pestañas y temas del estudio usaban elementos `div` y `li` clicables. Se migraron a botones nativos con roles y atributos ARIA, conservando la presentación.

## Riesgos pendientes

### Prioridad crítica: identidad y acceso a Supabase

`supabase-sync.js` asigna el mismo `device_id` fijo cuando el navegador está vacío. Esto facilita que el mismo perfil aparezca en varios dispositivos, pero en una aplicación pública también permite que navegadores distintos apunten al mismo registro. No debe cambiarse por un UUID aleatorio sin decidir primero cómo se conservará la sincronización multidispositivo.

La solución correcta es una de estas dos:

- Supabase Auth y políticas RLS por usuario; es la opción recomendada.
- Un código de vinculación secreto generado por el usuario, separado del identificador local del dispositivo.

### Prioridad alta: estado global y archivos monolíticos

`script.js` concentra configuración, estado del examen, renderizado, estudio, administración, audio, PWA y navegación. `features.js` depende de puentes globales como `window._setQuizState` y `launchDirectQuiz`. Modificar firmas o nombres sin una capa de compatibilidad puede romper varias comunidades a la vez.

### Prioridad alta: interceptación global de `localStorage`

`supabase-sync.js` reemplaza `localStorage.setItem` para detectar cambios. Funciona, pero acopla cualquier escritura futura a DataSync y dificulta pruebas, depuración y coexistencia con otras librerías. Conviene migrar a un repositorio de persistencia explícito o a eventos propios, manteniendo temporalmente el interceptor como adaptador.

### Prioridad media: HTML y CSS generados desde JavaScript

El renderer de estudio inyecta un bloque `<style>` grande desde `script.js`. Eso duplica responsabilidades con `styles.css` y hace que una extracción pueda alterar especificidad u orden visual. Debe migrarse selector por selector, con capturas antes y después.

Las escrituras `innerHTML` son aceptables cuando el origen es contenido curado del repositorio, pero no deberían utilizarse con datos externos sin sanitización. Las nuevas tarjetas del Centro de estudio se construyeron principalmente con DOM APIs y `textContent`.

### Prioridad media: inicialización fragmentada

Los listeners `DOMContentLoaded` actuales no son duplicados exactos, pero distribuyen el orden de arranque entre cinco archivos. Un coordinador de inicio reduciría condiciones de carrera y haría explícitas las dependencias.

### Prioridad media: guardado al cerrar

El `sendBeacon` de salida construye una petición REST sin encabezados de autorización ni preferencia de upsert. El guardado normal con debounce sí usa el cliente de Supabase; el beacon debe probarse contra la red real antes de considerarlo una garantía de persistencia.

## Plan de refactorización seguro

### Fase 0: congelar contratos y pruebas

- Mantener los `id` y clases actuales.
- Automatizar los recorridos Inicio → curso → examen y Centro de estudio → GenAI → dominio.
- Guardar capturas base en escritorio y móvil, tema claro y oscuro.
- Ejecutar los validadores de bancos y Supabase en cada cambio.

Riesgo visual: muy bajo.

### Fase 1: extraer código puro

- Mover validación de preguntas, catálogos, cálculo de puntuación y configuración de cursos a módulos sin DOM.
- Mantener adaptadores globales temporales para `features.js` y `translate_toggle.js`.

Riesgo visual: bajo.

### Fase 2: separar Centro de estudio

- Extraer el renderer a `study-renderer.js`.
- Mover el CSS inyectado a `styles.css` en grupos pequeños.
- Conservar los nombres `.unir-*` durante la primera migración.

Riesgo visual: medio por especificidad y orden de estilos.

### Fase 3: encapsular el motor del examen

- Reemplazar variables globales por un objeto de estado único.
- Separar carga, respuesta, navegación, temporizador y finalización.
- Hacer que `launchDirectQuiz()` consuma una API estable en lugar de setters globales.

Riesgo visual y funcional: alto; requiere pruebas completas de tipos de pregunta, examen real, revisión e historial.

### Fase 4: rediseñar la identidad de sincronización

- Implementar autenticación o vinculación segura.
- Migrar el registro actual sin perder el respaldo maestro.
- Retirar el interceptor global de `localStorage` y el beacon no verificado.

Riesgo de datos: alto; debe ejecutarse con respaldo y migración reversible.

## Verificación reproducible

```powershell
node tools/audit_code_structure.js
node tools/validate_genai_integration.js
node --check script.js
node --check features.js
node --check supabase-sync.js
```

La recomendación final es comenzar por las fases 0 y 1. Dan la mayor reducción de riesgo técnico sin tocar el resultado visual; no se recomienda una reescritura masiva de `script.js`.
