# Data Dojo — Registro de Auditoría, Arquitectura y Plan de Mejoras (2026)

**Versión Actual en Producción:** `v20260824f`  
**Última Actualización:** 24 de Agosto de 2026  
**Repositorio:** [github.com/NORSAB/data-dojo-quiz](https://github.com/NORSAB/data-dojo-quiz.git) (`main`)  
**Despliegue Producción:** [data-dojo-quiz.vercel.app](https://data-dojo-quiz.vercel.app)

---

## 1. Diagnóstico y Estado Actual del Sistema

El ecosistema de **Data Dojo** ha evolucionado de un simulador monofuncional a una plataforma completa de preparación para certificaciones internacionales (Databricks GenAI Engineer, Databricks Data Analyst, DP-600 Fabric, UNIR Visualización y UNAH Tesis).

### Métricas Clave Actuales
- **Bancos de Preguntas Activos:** 9 cursos / certificaciones.
- **Volumen de Preguntas GenAI:** 383 preguntas bilingües (EN/ES) en 6 dominios y 65 subdominios.
- **Líneas de Código:** ~5,690 en `script.js`, ~2,400 en `features.js`, ~4,540 en `styles.css`.
- **Ecosistema de Iconografía:** 100% SVG inline (cero emojis en UI).
- **Control de Caché:** Service Worker con hash de compilación (`20260824f`).

---

## 2. Inventario de Mejoras Identificadas

A continuación se desglosan las oportunidades de optimización clasificadas por dimensión técnica:

### A. Rendimiento y Arquitectura de Código (Code & Performance)

1. **Cargador Dinámico de Recursos por Curso (*Lazy Loading*)**:
   - *Situación Actual:* `index.html` descarga ~25 scripts JS de todas las certificaciones al inicio (~4.8 MB de datos).
   - *Mejora:* Implementar un cargador dinámico de scripts (`DojoLoader.loadCourse(courseId)`) que cargue en memoria únicamente los archivos del curso que el usuario seleccione.
   - *Impacto:* Reducción del tiempo de carga inicial en un 70% y menor consumo de memoria RAM en móviles.

2. **Modularización de `script.js` en Módulos Especializados**:
   - *Situación Actual:* `script.js` agrupa lógica de examen, centro de estudio, drag-and-drop, timer, flashcards y administración.
   - *Mejora:* Estructurar en sub-módulos con nombres de espacio claros:
     - `core/engine.js` (Motor de examen, estados y validación de respuestas).
     - `core/study_center.js` (Renderizado de TOC, flashcards, funciones AI y glosarios).
     - `core/gamification.js` (Cálculo de XP, cinturones, rachas y logros).
     - `core/admin.js` (Consola administrativa y configuración de cursos).
   - *Impacto:* Facilidad de mantenimiento, cero colisiones de variables y pruebas unitarias más rápidas.

3. **Limpieza y Consolidación de Archivos Huérfanos en la Raíz**:
   - *Situación Actual:* Existen archivos temporales de backups antiguos (`questions_databricks.js.bak_*`, scripts de extracción temporales `.py` y `.cjs`).
   - *Mejora:* Mover archivos de soporte y scripts de scrapers a carpetas organizadas (`tools/`, `archive/`, `backups/`).

---

### B. Nuevas Funcionalidades y Experiencia de Usuario (Features & UX)

1. **Buscador Global de Preguntas & Glosario Instantáneo**:
   - *Funcionalidad:* Una barra de búsqueda global en el menú principal donde el usuario escribe cualquier concepto (ej. *"Liquid Clustering"*, *"ai_query"*, *"ReAct agent"*) y el sistema lista todas las preguntas del banco y los temas de estudio donde se menciona.
   - *Valor:* Permite estudiar directamente preguntas enfocadas en un término técnico específico antes de un examen.

2. **Pantalla de Revisión Pre-Entrega en Modo Real (*Exam Review Screen*)**:
   - *Funcionalidad:* Igual que en el examen oficial de Pearson VUE/Databricks, al llegar a la última pregunta se muestra una grilla con 3 pestañas:
     - *Todas las preguntas*.
     - *Preguntas marcadas con bandera (Flagged for review)*.
     - *Preguntas sin responder*.
   - *Valor:* Elimina el riesgo de entregar un examen dejando preguntas en blanco por descuido.

3. **Modo Lector de Audio (*Text-to-Speech*) para Flashcards y Explicaciones**:
   - *Funcionalidad:* Botón de altavoz SVG para escuchar la pregunta y la justificación técnica en audio sintetizado mediante la Web Speech API nativa del navegador.
   - *Valor:* Permite estudiar en modo manos libres / audio repaso.

4. **Exportación / Importación Segura de Progreso (JSON & Supabase Cloud)**:
   - *Funcionalidad:* Sincronización automática de perfil, XP y banco de errores entre diferentes dispositivos (PC local, laptop, smartphone) sin depender exclusivamente de una sola máquina.

---

### C. Estructura y Limpieza de Datos (Data Governance)

1. **Estandarización de Esquema de Preguntas**:
   - Asegurar que todas las preguntas de todos los cursos compartan exactamente la misma firma TypeScript / JSON:
     ```typescript
     interface DojoQuestion {
       id: string;
       canonicalId: string;
       courseId: string;
       domain: string;
       subdomain: string;
       prompt: string;
       options: Array<{ id: string; text: string }>;
       correctIds: string[];
       explanation: string;
       lang: 'en' | 'es';
       acceptedAnswer?: { text: string; explanation: string };
     }
     ```

2. **Validación Automática de Integridad en CI/CD**:
   - Script de validación previo al commit (`node tools/validate_bank.js`) que verifique:
     - Cero IDs duplicados.
     - Que cada pregunta tenga al menos 1 opción correcta (`correctIds.length > 0`).
     - Que todas las opciones correctas existan en el array de `options`.
     - Que la explicación técnica esté presente y no vacía.

---

## 3. Registro Histórico de Cambios Recientes (Changelog)

### [v20260824f] — 24 de Agosto de 2026
- **Funciones AI & SQL GenAI (`comandos_sql_genai.js`)**:
  - Creada la biblioteca de funciones AI de Unity Catalog (`ai_query`, `ai_gen`, `ai_summarize`, `ai_classify`, `ai_translate`, `ai_extract`, `ai_similarity`, `vector_search`, `GRANT EXECUTE`).
- **Cheat-Sheet "D0. 10 Reglas de Oro y Matriz de Decisión" (`study_databricks_genai.js`)**:
  - Integradas 5 matrices comparativas oficiales: Prompting vs RAG vs Fine-Tuning, Model Serving (Pay-per-token vs Provisioned), Vector Search Index types, MLflow Flavors, y Triada RAG.
- **Sincronización Total de XP**:
  - Integrado `'databricks_genai_mastery'` en `calculateXP()` y sincronización con el perfil general.
- **Navegación Contraída por Defecto**:
  - Todos los paneles y acordeones inician colapsados para una experiencia de usuario limpia y minimalista.

### [v20260824e] — 24 de Agosto de 2026
- **Selector Multidominio con Checkboxes**:
  - Filtro dinámico con selección múltiple y conteo de preguntas por dominio.
- **Modo Contrarreloj (Time-Attack 60s)**:
  - Temporizador por pregunta con barra de progreso animada.
- **Ficha Imprimible de Preparación (PDF Scorecard)**:
  - Reglas `@media print` para exportar informe ejecutivo de preparación sin elementos de interfaz.
- **Banco Inteligente de Fallos (Smart Error Review)**:
  - Repaso de preguntas erróneas desacoplado y funcional para todos los cursos.

### [v20260824d] — 24 de Agosto de 2026
- **Ampliación al Doble del Centro de Estudio**:
  - Contenedores escalados a `1680px` (`width: 95%`).
  - Tipografía incrementada globalmente para lectura cómoda.
