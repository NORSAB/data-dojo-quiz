# 🗺️ Data Dojo — Plan de Implementación Post-Certificación

> **Estado:** Pendiente (ejecutar después de aprobar el examen Databricks)  
> **Última actualización:** 2026-04-05  
> **Prioridad:** De mayor a menor impacto

---

## Fase 1: Arquitectura de Escalabilidad
**Riesgo:** Medio | **Esfuerzo:** ~4 horas | **Impacto:** Alto

### 1.1 COURSE_MANIFEST (Objeto de Configuración Centralizado)
- **Problema actual:** Cada nuevo curso requiere editar `hero_data.js` + `script.js` + archivos de preguntas manualmente.
- **Solución:** Crear un objeto `COURSE_MANIFEST` que defina:
  ```js
  COURSE_MANIFEST = {
    'databricks-analyst': {
      name: 'Databricks Certified Data Analyst Associate',
      provider: 'databricks',
      questionBank: 'databricks_analyst_questions.js',
      studyData: 'databricks_analyst_study.js',
      examConfig: { questions: 45, timeMinutes: 120, passingScore: 70 },
      domains: ['Databricks SQL', 'Data Management', ...],
      status: 'active'
    }
  }
  ```
- **Beneficio:** Agregar un curso nuevo = 1 entrada en el manifest + su archivo de preguntas.

### 1.2 Carga Dinámica de Question Banks
- Migrar de `<script>` tags estáticos a carga dinámica basada en el manifest.
- Reduce el tamaño de carga inicial (solo cargar el banco activo).

---

## Fase 2: Refactor de Código
**Riesgo:** Medio-Alto | **Esfuerzo:** ~6 horas | **Impacto:** Medio

### 2.1 Migración innerHTML → createElement
- **Puntos de cambio:** ~339 instancias de `innerHTML` en features.js + script.js.
- **Estrategia:** Migrar por feature (F1, F2, etc.) con testing incremental.
- **Beneficio:** Elimina riesgo XSS, mejora rendimiento DOM.

### 2.2 Eliminación de onclick Inline
- Reemplazar `element.onclick = ...` con `addEventListener`.
- Ya parcialmente implementado en `renderCourses()` (línea 1256).

### 2.3 Unificación de userAnswers
- **Problema:** Formato mixto Array/Object en quizHistory.
- **Solución:** 
  1. Definir formato canónico (Object con keys string).
  2. Crear migración que normalice registros históricos.
  3. Agregar validación en `saveExamResult`.
- ⚠️ **Requiere backup completo antes de ejecutar.**

---

## Fase 3: Gamificación Avanzada
**Riesgo:** Bajo | **Esfuerzo:** ~3 horas | **Impacto:** Alto

### 3.1 Cola de Repaso Espaciado
- Basado en `missedIds` del historial.
- Algoritmo: Preguntas falladas 2+ veces tienen prioridad.
- Intervalo creciente: 1 día → 3 días → 7 días desde último intento.
- Integrar con "Qué Estudiar Hoy" (F21).

### 3.2 Blueprint por Certificación
- Simulacro realista que sigue la distribución exacta de dominios del examen oficial.
- Databricks Analyst: 45 preguntas con distribución ponderada.
- Tracking separado de intentos de "blueprint" vs práctica libre.

### 3.3 Sistema de Logros Expandido
- Desbloquear logros por:
  - Completar todos los dominios de un curso.
  - Racha de 30 días.
  - Score de readiness ≥ 90.
  - 100% en un simulacro blueprint.

---

## Fase 4: Seguridad y Producción
**Riesgo:** Bajo | **Esfuerzo:** ~2 horas | **Impacto:** Bajo (interno)

### 4.1 DOMPurify
- Solo necesario si la app se expone públicamente (actualmente es local).
- Integrar como CDN: `<script src="https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js">`
- Sanitizar todas las inserciones de texto dinámico.

### 4.2 Content Security Policy
- Agregar headers CSP si se despliega en hosting.

---

## Registro de Cambios Pre-Certificación (Completados)

| ID | Feature | Estado | Fecha |
|----|---------|--------|-------|
| F21a | Qué Estudiar Hoy | ✅ | 2026-04-05 |
| F21b | Score de Preparación | ✅ | 2026-04-05 |
| FIX | Layout --layout-max-xl | ✅ | 2026-04-05 |
| FIX | Limpieza debug hero_data.js | ✅ | 2026-04-05 |
| FIX | Dot spacing en study plans | ✅ | 2026-04-05 |
| FIX | Dark mode text readability | ✅ | 2026-04-05 |

---

> **Nota:** NO tocar hasta después de la certificación:
> - Motor central del quiz (`startQuizAction`, `checkAnswer`, `navigate`)
> - Monkey patching de localStorage (sync cloud)
> - Estructura de `saveExamResult`
