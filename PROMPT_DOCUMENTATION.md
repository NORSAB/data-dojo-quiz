# ACTUA COMO EXPERTO DESARROLLADOR FULL-STACK (PROMPT DE CONTEXTO)

Este documento es la **"Biblia Técnica"** del proyecto **"Simulador de Preguntas" (The Data Dojo)**. Contiene toda la arquitectura, lógica de negocio y roadmap de expansión. Úsalo para mantener la coherencia absoluta en el desarrollo.

## 1. Misión: "El Dojo de Datos"

Crear la plataforma de estudio definitiva para profesionales de datos, combinando **rigor técnico** con **mecánicas de RPG**.

- **Filosofía**: "Estudiar no debe doler".
- **Metáfora**: El usuario es un "karateca del dato" que avanza desde Cinturón Blanco hasta Sensei mediante la resolución de problemas reales.

---

## 2. Stack Tecnológico (Vanilla Power)

- **Frontend**: HTML5 Semántico, CSS3 Moderno (Variables, Grid, Glassmorphism), JavaScript ES6+.
- **Zero-Dependencies**: Prohibido usar React, Vue, Angular o JQuery. Todo es nativo para máximo rendimiento y control.
- **Persistencia**: `localStorage` actúa como base de datos NoSQL local.
- **Audio**: Web Speech API nativa para la funcionalidad "Auto-Play".

---

## 3. Arquitectura de Datos

### A. Catálogo de Cursos (`providerData`)

La aplicación organiza el contenido en Proveedores (Categorías) y Cursos.
**Estructura Actual Detallada:**

1.  **Microsoft**
    - `dp-600`: Fabric Analytics Engineer (Activo).
    - `dp-700`: Fabric Data Engineer (Coming Soon).
2.  **Databricks**
    - `databricks-da`: Data Analyst Associate (Activo).
    - `databricks-de`: Data Engineer Associate.
    - `databricks-ml-a`: Machine Learning Associate.
    - `databricks-ml-p`: Machine Learning Professional.
3.  **Google Cloud (GCP)**
    - `gcp-ml`: Professional Machine Learning Engineer.
    - `gcp-data`: Associate Data Practitioner.
4.  **AWS**
    - `aws-ml-spec`: Machine Learning Specialty.
    - `aws-data`: Data Engineer Associate.
5.  **Python**
    - Niveles: Básico, Intermedio, Avanzado, ML.
6.  **Tableau**
    - Foundations y Data Analyst.

### B. Módulo Administrativo & Configuración

El sistema incluye un **Panel de Administración Oculto** (`openAdmin` en `script.js`) que permite gestionar el ciclo de vida de los cursos sin tocar código.

#### Funcionalidades del Admin:

1.  **Habilitar/Deshabilitar Cursos**:
    - Cambia el estado entre `active` (visible y jugable) y `coming` (muestra cartel "Próximamente").
    - _Uso_: Permite lanzar la estructura del curso antes de tener las preguntas listas.
2.  **Gestión de Idioma**:
    - Fuerza el idioma del contenido (`en` inglés / `es` español) por curso individual.
    - _Persistencia_: Guarda en `localStorage` bajo la clave `quizAppConfig`.
    - _Lógica_: `courseConfig[courseId] = { lang: 'en', status: 'active' }`.

### C. Esquema del Banco de Preguntas

Cada archivo `questions_*.js` inyecta un array en `window.questionsData`.
**Schema Estricto:**

```json
{
  "id": "db-da-001",           // ID Único Global
  "courseId": "databricks-da", // Enlace al curso
  "lang": "en",                // Idioma base
  "type": "single_choice",     // O "multiple_choice"
  "prompt": "Pregunta en texto plano...",
  "promptBlocks": [            // (Opcional) Para contenido rico
      { "type": "text", "content": "..." },
      { "type": "code", "lang": "sql", "content": "SELECT * FROM..." }
  ],
  "options": [
    { "id": "a", "text": "Opción A" },
    { "id": "b", "text": "Opción B con código", "blocks": [...] }
  ],
  "correctIds": ["b"],
  "explanation": "Markdown support...", // Feedback educativo
  "domain": "Data Governance"  // Categoría interna para Analytics
}
```

---

## 4. Funcionalidades Core

### A. Auto-Play "Study Mode" (La Joya)

Módulos dedicados (`databricks_study_module.html`) transforman el estudio en una experiencia pasiva/activa (estilo podcast interactivo).

- **Motor de Audio**: Lee preguntas y respuestas automáticamente.
- **Speech ID Pattern**: Solución técnica crítica. Usa un contador incremental (`currentSpeechId`) para identificar cada frase. Si el usuario acelera la velocidad (0.25x - 3x), el ID cambia, invalidando eventos `onend` antiguos y evitando "saltos" erráticos.
- **UX Fantasmal**: Un cursor SVG (`ghost-cursor`) navega visualmente por la pantalla, "cliqueando" botones para guiar la atención del usuario.

### B. Gamificación "Soul of the Dojo"

- **XP y Cinturones**: Progresión lineal basada en precisión.
- **Sistema de Medallas**:
  - Renderizado como cartas coleccionables 3D (`badge-card`).
  - Efectos de rareza (Común = Gris, Legendaria = Dorado/Holográfico).
  - Condiciones complejas: "Racha perfecta de 5 días", "100% en SQL".

### C. Perfil de Usuario

- **Persistencia**: Datos críticos guardados en `quiz_user_progress`.
- **Avatar**: (Futuro) Personalización visual.
- **Estadísticas**: Gráficos de radar por Dominio de conocimiento (ej. fuerte en SQL, débil en Python).

---

## 5. Roadmap de Expansión (Futuro Inmediato)

### A. Nuevos Módulos Científicos

El sistema está diseñado para escalar hacia áreas teóricas complejas.

1.  **Matemáticas para ML (Math for ML)**:
    - _Temas_: Álgebra Lineal (Matrices, Tensores), Cálculo Multivariable (Gradientes), Estadística Bayesiana.
    - _Requisito UI_: Soporte nativo para **LaTeX/KaTeX** en `promptBlocks` para renderizar fórmulas matemáticas elegantes ($$ f(x) = \sum ... $$).
2.  **Data Science & AI Avanzada**:
    - _Temas_: Redes Neuronales Profundas (Deep Learning), NLP (Transformers), Computer Vision.
    - _Requisito Lógica_: Preguntas de "arrastrar y soltar" (Drag & Drop) para arquitecturas de redes.
3.  **Científico de Datos Full-Stack**:
    - Módulos integradores que combinan código (Python/R), teoría (Math) y negocio.

---

## 6. Instrucciones para la IA

Cuando modifiques este código:

1.  **Respeta la Administración**: Si añades un curso nuevo en el JSON, recuerda que por defecto puede necesitar estar en `status: coming` hasta que tenga preguntas.
2.  **Integridad del Auto-Play**: **NUNCA** elimines la verificación `if (myId !== currentSpeechId)` en la función `speak()`. Es lo que mantiene la estabilidad del audio.
3.  **Estética Premium**: Mantén el estándar visual (Glassmorphism, Sombras suaves). No uses colores planos de navegador por defecto (blue, red), usa las variables CSS (`--primary`, `--danger`).
4.  **Matemáticas**: Si detectas contenido matemático en una pregunta nueva, asegúrate de que el renderizador MathJax/KaTeX esté inicializado en el encabezado.

---

**FIN DEL DOCUMENTO MAESTRO.**
