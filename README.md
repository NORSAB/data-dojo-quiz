# Data Dojo — Plataforma Integral de Simulación & Estudio para Certificaciones

**Data Dojo** es una Progressive Web Application (PWA) de alto rendimiento diseñada para la preparación integral, entrenamiento bajo presión y dominio conceptual de certificaciones profesionales en Ciencia de Datos, Inteligencia Artificial y Tecnologías Cloud.

---

## 📌 Enlaces Rápidos y Despliegue

| Entorno | URL de Acceso | Estado |
| :--- | :--- | :--- |
| **Producción (Vercel)** | [https://data-dojo-quiz.vercel.app](https://data-dojo-quiz.vercel.app) | **Activo (`v20260905c`)** |
| **GitHub Pages** | [https://norsab.github.io/data-dojo-quiz/](https://norsab.github.io/data-dojo-quiz/) | **Sincronizado** |
| **Repositorio GitHub** | [https://github.com/NORSAB/data-dojo-quiz](https://github.com/NORSAB/data-dojo-quiz.git) | Rama `main` |
| **Red Local Unificada** | `http://localhost:5176` o `http://datadojo.local:5176` | Puerto `5176` |

---

## 🏛️ Catálogo de Certificaciones y Cursos Soportados

La aplicación cuenta con bancos de preguntas categorizados, balanceados y bilingües (Inglés / Español), acompañados de módulos de estudio teórico interactivos:

```
DATA DOJO ECOSYSTEM (2,449 Preguntas | 167 Temas de Estudio)
├── 🧠 Inteligencia Artificial
│   └── Databricks Certified Generative AI Engineer Associate (383 Qs Bilingües EN/ES)
├── 📊 Analítica y Lakehouse
│   ├── Databricks Certified Data Analyst Associate (300 Qs)
│   ├── Databricks Lakehouse Fundamentals (70 Qs)
│   ├── Databricks AI/BI & Genie (40 Qs)
│   ├── Databricks SQL Analytics (40 Qs)
│   └── Microsoft DP-600: Fabric Analytics Engineer (285 Qs)
├── 🎓 Máster en Visualización de Datos (UNIR)
│   ├── Herramientas de Visualización (D3.js, Vega-Lite, R, Python - 160 Qs)
│   └── Visualización Interactiva & Teoría Visual (Gestalt, Bertin, Tufte - 55 Qs)
└── 📜 Investigación y Posgrado (UNAH)
    └── Metodología de Investigación & Tesis de Maestría (28 Qs)
```

---

## 🚀 Modos de Entrenamiento y Funcionalidades

### 1. Simulador de Examen Dinámico
- **Buscador Global (`Ctrl+K` Finder):** Modal de búsqueda rápida en tiempo real sobre los 2,449 reactivos de todas las certificaciones, con resaltado dinámico de texto, filtrado por curso y botón de práctica directa (*"Practicar con estos resultados"*).
- **Pantalla Interactiva de Revisión Pre-Entrega (Pearson VUE style):** Reemplazo del modal de confirmación por una grilla completa con KPIs en vivo de preguntas *Respondidas*, *Sin Responder* y *Marcadas para Revisión (Flag)*, pestañas de filtrado rápido y navegación por salto directo al hacer clic en el número de pregunta.
- **Filtro Multidominio por Checkboxes:** Selección flexible de dominios específicos o combinados para enfocar el estudio.
- **Modo Contrarreloj (*Time-Attack 60s*):** Temporizador dinámico por pregunta con barra de progreso animada y alerta visual por código de colores.
- **Modo Real / Certificación:** Mismo tiempo, ponderación y cantidad de preguntas que el examen oficial (ej. 45 preguntas en 90 min con 70% para aprobar).
- **Repaso Inteligente de Fallos (*Smart Error Review*):** Banco dinámico que detecta automáticamente las preguntas falladas en intentos previos en todas las certificaciones.
- **Ficha Imprimible de Preparación (*Print / PDF Scorecard*):** Generador de informe ejecutivo en PDF con desglose por dominios y nivel de preparación (*Readiness Score*).

### 2. Centro de Estudio Teórico (*Study Hub*)
- **Motor de Lectura por Voz (TTS Engine):** Integración nativa de `SpeechSynthesis` con botones de audio en las explicaciones de respuestas (`checkAnswer`) y en el frente y reverso de las Flashcards de estudio con detección automática de idioma (`es-ES` / `en-US`).
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
   - **Service Worker (`sw.js`):** Soporte offline completo, caché inteligente e invalidación determinista mediante `BUILD_TIMESTAMP` (`20260824g`).
   - **Persistencia Local y Respaldo Nube:** Sincronización transparente vía `localStorage` y respaldo automático en Supabase Cloud.

---

## 📋 Trazabilidad y Registro Histórico de Cambios (Changelog)

> **Nota para Agentes de IA (Claude, Codex, Antigravity, Gemini):**
> Este registro debe actualizarse obligatoriamente en cada modificación, indicando la versión (`BUILD_TIMESTAMP`), autor del cambio, fecha/hora exacta en hora local (CST / UTC-6) y desglose técnico de archivos modificados.

### `v20260824h` — 24 de Agosto de 2026 | 14:32 CST
- **Autor / Agente:** Antigravity (Google DeepMind)
- **Archivos Modificados:** `features.js`, `script.js`, `index.html`, `sw.js`, `README.md`.
- **Mejoras Implementadas (Uso 100% Personal y Local):**
  1. **🧠 Repetición Espaciada SM-2 en Flashcards (`F21 - SRSManager`):** Algoritmo SuperMemo-2 (`easeFactor`, `interval`, `dueDate`) que ajusta la curva de olvido según la dificultad seleccionada (*Fácil +6d*, *Regular +3d*, *Difícil +1d*) con filtro inteligente de tarjetas programadas para hoy.
  2. **🎧 Modo Podcast / Audio Manos Libres (`F22 - PodcastMode`):** Reproductor continuo automatizado con lectura TTS de pregunta, pausa configurable para pensar (3s/5s/8s con contador animado), lectura de respuesta y avance automático en bucle.
  3. **🧪 Mini Sandbox SQL & Lakehouse Playground (`F23 - SQLSandbox`):** Tab interactiva en el Centro de Estudio con catálogo de tablas en memoria (`bronze_raw_events`, `silver_customers`, `silver_orders`, `gold_monthly_sales`, `genai_vector_chunks`), presets de consultas, soporte de funciones AI simuladas (`ai_classify`), medición de tiempo de ejecución (ms) y exportación a CSV.
  4. **🤖 Asistente Tutor AI Coach en Feedback (`F24 - AICoach`):** Desglose pedagógico contextual en cada pregunta con *Clave de Certificación*, *Desglose de Trampas Oficiales* y *Regla Mnemotécnica Rápida*.
  5. **Actualización de Service Worker y Caché PWA:** Bump determinista a `BUILD_TIMESTAMP = '20260824h'` en `sw.js` e `index.html`.

### `v20260824g` — 24 de Agosto de 2026 | 14:27 CST
- **Autor / Agente:** Antigravity (Google DeepMind)
- **Archivos Modificados:** `index.html`, `script.js`, `sw.js`, `README.md`, `tools/validate_bank.js`.
- **Mejoras Implementadas:**
  1. **Buscador Global de Preguntas y Conceptos (`Ctrl+K` Finder):** Modal de búsqueda rápida en tiempo real sobre los 2,449 reactivos de todas las certificaciones, con resaltado dinámico de texto, filtrado por curso y botón de práctica directa (*"Practicar con estos resultados"*).
  2. **Pantalla Interactiva de Revisión Pre-Entrega (Pearson VUE style):** Reemplazo del modal de confirmación simple por una grilla completa con KPIs en vivo de preguntas *Respondidas*, *Sin Responder* y *Marcadas para Revisión (Flag)*, pestañas de filtrado rápido y navegación por salto directo al hacer clic en el número de pregunta.
  3. **Motor de Lectura por Voz (TTS Engine):** Integración nativa de `SpeechSynthesis` con botones de audio en las explicaciones de respuestas (`checkAnswer`) y en el frente y reverso de las Flashcards de estudio con detección automática de idioma (`es-ES` / `en-US`).
  4. **Validador Automatizado de Integridad (`tools/validate_bank.js`):** Script CLI en Node.js que valida al 100% los esquemas de preguntas, unicidad de IDs por curso/idioma, bloques SQL y cobertura de explicaciones en todos los bancos de datos (1,744 preguntas validadas con 0 errores).
  5. **Corrección de Scopes y Eventos en `script.js`:** Solución de colisiones de variables y balanceo estricto de listeners (`DOMContentLoaded`, `initGlobalSearch`, `unirKeyHandler`).
  6. **Actualización de Service Worker y Caché PWA:** Bump determinista a `BUILD_TIMESTAMP = '20260824g'` en `sw.js`.

### `v20260824f` — 24 de Agosto de 2026 | 12:45 CST
- **Autor / Agente:** Antigravity (Google DeepMind)
- **Archivos Modificados:** `script.js`, `study_databricks_genai.js`, `comandos_sql_genai.js`, `README.md`, `archive/*`.
- **Mejoras Implementadas:**
  1. **Biblioteca de Funciones AI SQL (`comandos_sql_genai.js`):** Integración de funciones de Unity Catalog (`ai_query`, `ai_gen`, `ai_summarize`, `ai_classify`, `ai_translate`, `ai_extract`, `ai_similarity`, `vector_search`) con sintaxis SQL y desglose línea por línea.
  2. **Cheat-Sheet "D0. 10 Reglas de Oro y Matriz de Decisión":** Añadidas matrices comparativas oficiales para preguntas situacionales de examen.
  3. **Sincronización Total de XP:** Integración de `'databricks_genai_mastery'` en el cálculo global de experiencia y cinturón.
  4. **Unificación de Documentación:** Consolidación de todos los archivos `.md` en un único documento maestro de referencia (`README.md`) y traslado de 24 archivos históricos a `archive/docs_historicos/`.

### `v20260824e` — 24 de Agosto de 2026 | 09:30 CST
- **Autor / Agente:** Antigravity & Codex
- **Mejoras Implementadas:**
  1. **Selector Multidominio:** Filtro de selección múltiple con casillas de verificación y conteo de preguntas en tiempo real.
  2. **Modo Contrarreloj (Time-Attack 60s):** Temporizador animado por pregunta con degradado de color.
  3. **Ficha Imprimible de Preparación:** Reglas `@media print` para exportación limpia a PDF.
  4. **Repaso Inteligente de Fallos:** Adaptación del banco de errores para todas las certificaciones activas.

### `v20260824d` — 24 de Agosto de 2026 | 08:15 CST
- **Autor / Agente:** Antigravity & Codex
- **Mejoras Implementadas:**
  1. **Ampliación de Layout de Estudio:** Contenedores ampliados a `1680px` (`width: 95%`) y escalado tipográfico general.
  2. **Colapso por Defecto:** Configuración de acordeones y temas en estado contraído inicial.

---

## 🔭 Roadmap de Mejoras Identificadas (Próximas Fases)

A continuación se detallan las oportunidades de mejora arquitectónica y funcional identificadas para futuras iteraciones:

1. **🧪 Sandbox SQL Ligero en Cliente (DuckDB-WASM / SQLite Web):**
   - *Objetivo:* Permitir a los estudiantes ejecutar consultas interactivas reales directamente en el navegador durante el modo de estudio sin necesidad de conectarse a un cluster de Databricks activo.
2. **🧠 Algoritmo de Repetición Espaciada (SM-2 para Flashcards):**
   - *Objetivo:* Implementar el algoritmo SuperMemo-2 en las Flashcards para calendarizar repasos automáticos según el nivel de dificultad seleccionado (*Fácil*, *Regular*, *Difícil*), maximizando la retención mnemotécnica a largo plazo.
3. **🎧 Modo Manos Libres / Audio-Podcast (Commute Mode):**
   - *Objetivo:* Modo de estudio continuo con reproducción automática en segundo plano que lea la pregunta con TTS, pause 5 segundos para que el usuario piense la respuesta y luego lea la respuesta correcta con su justificación.
4. **⚔️ Modo Duelo / Desafío Multijugador (Realtime Duel):**
   - *Objetivo:* Simulacros de 10 preguntas sincronizados en tiempo real mediante Supabase Realtime o WebRTC para competir amistosamente con compañeros de estudio o trabajo.
5. **🤖 Asistente Tutor IA Integrado (Ask AI on Error):**
   - *Objetivo:* Botón contextual opcional en el feedback de error para interactuar con un modelo LLM y consultar: *"¿Por qué la opción C es incorrecta en este caso específico?"*.

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
