# Data Dojo — Plataforma Integral de Simulación & Estudio para Certificaciones

**Data Dojo** es una Progressive Web Application (PWA) de alto rendimiento diseñada para la preparación integral, entrenamiento bajo presión y dominio conceptual de certificaciones profesionales en Ciencia de Datos, Inteligencia Artificial y Tecnologías Cloud.

---

## 📌 Enlaces Rápidos y Despliegue

| Entorno | URL de Acceso | Estado |
| :--- | :--- | :--- |
| **Producción (Vercel)** | [https://data-dojo-quiz.vercel.app](https://data-dojo-quiz.vercel.app) | **Activo (`v20260824f`)** |
| **GitHub Pages** | [https://norsab.github.io/data-dojo-quiz/](https://norsab.github.io/data-dojo-quiz/) | **Sincronizado** |
| **Repositorio GitHub** | [https://github.com/NORSAB/data-dojo-quiz](https://github.com/NORSAB/data-dojo-quiz.git) | Rama `main` |
| **Red Local Unificada** | `http://localhost:5176` o `http://datadojo.local:5176` | Puerto `5176` |

---

## 🏛️ Catálogo de Certificaciones y Cursos Soportados

La aplicación cuenta con bancos de preguntas categorizados, balanceados y bilingües (Inglés / Español), acompañados de módulos de estudio teórico interactivos:

```
DATA DOJO ECOSYSTEM
├── 🧠 Inteligencia Artificial
│   └── Databricks Certified Generative AI Engineer Associate (383 Qs Bilingües)
├── 📊 Analítica y Lakehouse
│   ├── Databricks Certified Data Analyst Associate
│   ├── Databricks Lakehouse Fundamentals
│   ├── Databricks AI/BI & Genie
│   └── Microsoft DP-600: Fabric Analytics Engineer
├── 🎓 Máster en Visualización de Datos (UNIR)
│   ├── Herramientas de Visualización (D3.js, Vega-Lite, R, Python)
│   └── Visualización Interactiva & Teoría Visual (Gestalt, Bertin, Tufte)
└── 📜 Investigación y Posgrado (UNAH)
    └── Metodología de Investigación & Tesis de Maestría
```

---

## 🚀 Modos de Entrenamiento y Funcionalidades

### 1. Simulador de Examen Dinámico
- **Filtro Multidominio por Checkboxes:** Selección flexible de dominios específicos o combinados para enfocar el estudio.
- **Modo Contrarreloj (*Time-Attack 60s*):** Temporizador dinámico por pregunta con barra de progreso animada y alerta visual por código de colores.
- **Modo Real / Certificación:** Mismo tiempo, ponderación y cantidad de preguntas que el examen oficial (ej. 45 preguntas en 90 min con 70% para aprobar).
- **Repaso Inteligente de Fallos (*Smart Error Review*):** Banco dinámico que detecta automáticamente las preguntas falladas en intentos previos en todas las certificaciones.
- **Ficha Imprimible de Preparación (*Print / PDF Scorecard*):** Generador de informe ejecutivo en PDF con desglose por dominios y nivel de preparación (*Readiness Score*).

### 2. Centro de Estudio Teórico (*Study Hub*)
- **Doble Ancho Optimizado (`1680px`):** Layout espacioso con tipografía escalada y legibilidad premium.
- **Todo Contraído por Defecto:** Módulos, categorías y tarjetas inician colapsados para una navegación limpia y sin sobrecarga cognitiva.
- **Pestaña "Funciones AI & SQL":** Biblioteca completa de funciones nativas de Unity Catalog (`ai_query`, `ai_gen`, `ai_summarize`, `ai_classify`, `ai_translate`, `ai_extract`, `ai_similarity`, `vector_search`) con código SQL y desglose explicativo línea por línea.
- **Matriz de Decisión (Cheat-Sheet Rápido):** 10 reglas de oro para responder preguntas situacionales complejas (Prompting vs RAG vs Fine-Tuning, Pay-per-token vs Provisioned Throughput, Delta Sync Index types, etc.).
- **Flashcards Bilingües:** Tarjetas interactivas de memorización activa con anverso y reverso sincronizados en inglés y español.
- **Personajes y Conceptos Clave:** Glosarios técnicos estructurados con clasificación de relevancia (*Clave / Importante / Complementario*).

### 3. Gamificación y Sistema Dojo
- **Cinturones Dojo:** Progresión desde *Cinturón Blanco* hasta *Cinturón Negro (Dragón 7)* basada en puntos de experiencia (**XP**).
- **Sincronización Total de XP:** Acumulación automática de puntos por exámenes realizados, rachas diarias, flashcards vistas (+2 XP), conceptos estudiados (+5 XP), funciones SQL aprendidas (+8 XP) y secciones completadas (+10 XP).
- **Sistema de Logros y Medallas:** Insignias desbloqueables por hitos de estudio, exámenes perfectos y maestría de dominios.

---

## 🛠️ Arquitectura Técnica y Estándares de Código

1. **Frontend Vanilla Ultra-Rápido:**
   - Cero dependencias pesadas de frameworks (React/Vue/Angular); renderizado ultrarrápido y compatibilidad universal.
   - Hoja de estilos `styles.css` con variables CSS, Dark Mode nativo y diseño *glassmorphism* anti-slop.

2. **Estándar Estricto de Iconografía (SVG-Only):**
   - **Prohibido el uso de emojis** en la interfaz de usuario.
   - Todos los iconos son elementos `<svg>` vectoriales inline con trazados optimizados de 24x24.

3. **Gobernanza de Datos y PWA:**
   - **Service Worker (`sw.js`):** Soporte offline completo, caché inteligente e invalidación determinista mediante `BUILD_TIMESTAMP` (`20260824f`).
   - **Persistencia Local y Respaldo Nube:** Sincronización transparente vía `localStorage` y respaldo automático en Supabase Cloud.

---

## 📋 Registro Histórico de Versiones y Mejoras (Changelog)

### `v20260824f` — 24 de Agosto de 2026
- **Biblioteca de Funciones AI SQL (`comandos_sql_genai.js`):** Integración de funciones de Unity Catalog (`ai_query`, `ai_gen`, `ai_summarize`, `ai_classify`, `ai_translate`, `ai_extract`, `ai_similarity`, `vector_search`) con sintaxis SQL y desglose línea por línea.
- **Cheat-Sheet "D0. 10 Reglas de Oro y Matriz de Decisión":** Añadidas matrices comparativas oficiales para preguntas situacionales de examen.
- **Sincronización Total de XP:** Integración de `'databricks_genai_mastery'` en el cálculo global de experiencia y cinturón.
- **Unificación de Documentación:** Consolidación de todos los archivos `.md` en un único documento maestro de referencia (`README.md`).

### `v20260824e` — 24 de Agosto de 2026
- **Selector Multidominio:** Filtro de selección múltiple con casillas de verificación y conteo de preguntas en tiempo real.
- **Modo Contrarreloj (Time-Attack 60s):** Temporizador animado por pregunta con degradado de color.
- **Ficha Imprimible de Preparación:** Reglas `@media print` para exportación limpia a PDF.
- **Repaso Inteligente de Fallos:** Adaptación del banco de errores para todas las certificaciones activas.

### `v20260824d` — 24 de Agosto de 2026
- **Ampliación de Layout de Estudio:** Contenedores ampliados a `1680px` (`width: 95%`) y escalado tipográfico general.

---

## 💻 Instrucciones para Desarrollo Local

Para ejecutar la aplicación localmente en el entorno de desarrollo unificado:

```powershell
# Opción 1: Iniciar desde el script unificado de la red local
powershell -File D:\2026\start-all-apps.ps1

# Opción 2: Iniciar servidor local específico en el puerto 5176
cd "D:\2026\Simulador de Preguntas"
npx -y serve -l 5176 .
```

Acceder desde el navegador en `http://localhost:5176` o `http://datadojo.local:5176`.
