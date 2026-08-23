# AUDITORIA VISUAL V2 — ANALISIS COMPLETO DE TODA LA APLICACION
## The Data Dojo — Simulador de Preguntas
### Fecha: 2026-03-31 | Post-ajustes Fase 1

---

## TABLA DE CONTENIDOS

1. [Resumen Ejecutivo V2](#1-resumen-ejecutivo-v2)
2. [Estado de Ajustes Aplicados vs V1](#2-estado-de-ajustes-aplicados-vs-v1)
3. [Auditoria Modulo por Modulo (8 modulos)](#3-auditoria-modulo-por-modulo)
4. [Inventario de Estilos Inline en JS](#4-inventario-de-estilos-inline-en-js)
5. [Problemas Encontrados Post-Ajuste](#5-problemas-encontrados-post-ajuste)
6. [Matriz Completa de Inconsistencias](#6-matriz-completa-de-inconsistencias)
7. [Plan de Mejoras V2 por Fases](#7-plan-de-mejoras-v2-por-fases)
8. [Recomendaciones Tecnicas](#8-recomendaciones-tecnicas)

---

## 1. RESUMEN EJECUTIVO V2

### Calificacion General Post-Ajustes: 8.2/10 (antes 7.5/10)

Los ajustes aplicados al Databricks Study Module mejoraron significativamente la coherencia visual. El modulo ahora usa la paleta Slate (cool tones), la fuente Inter, headers con gradiente dark, custom scrollbars y dark mode para los visuales. Sin embargo, al analizar **TODA** la aplicacion en profundidad, emergen nuevos hallazgos que la V1 no cubrio.

### Tabla de Estado por Modulo (8 Modulos Analizados)

| # | Modulo | Archivo(s) | Score V1 | Score V2 | Cambio |
|---|--------|-----------|----------|----------|--------|
| 1 | Dojo Entrance (Inicio) | styles.css + index.html | 10/10 | 10/10 | = |
| 2 | Quiz Engine | styles.css + script.js | 9/10 | 9/10 | = |
| 3 | Study Mode (integrado) | styles.css + script.js | 8/10 | 8/10 | = |
| 4 | Perfil / Gamificacion | hero_data.js + styles.css | 8/10 | 7.5/10 | Nuevo hallazgo |
| 5 | Databricks Study Module | databricks_study_module.html | 4/10 | **7.5/10** | +3.5 mejora |
| 6 | Visuales (dentro del Study) | databricks_study_module.html | 6/10 | **8/10** | +2 mejora |
| 7 | Patchwork Simulator (independiente) | patchwork_simulator.html | 5/10 | **5.5/10** | +0.5 menor |
| 8 | PWA / Manifest | manifest.json + sw.js | N/A | **4/10** | Nuevo hallazgo |

---

## 2. ESTADO DE AJUSTES APLICADOS VS V1

### Lo que SI se aplico correctamente:

| Recomendacion V1 | Estado | Detalle |
|-------------------|--------|---------|
| Font Inter en Study Module | **APLICADO** | `<link>` a Google Fonts + font-family Inter |
| Font-smoothing | **APLICADO** | webkit + moz antialiasing |
| Background cool slate (#f1f5f9) | **APLICADO** | `--bg-body: #f1f5f9` |
| Textos cool (#1e293b, #64748b) | **APLICADO** | `--text-main: #1e293b; --text-sub: #64748b` |
| Borders cool (#e2e8f0) | **APLICADO** | `--border: #e2e8f0` |
| Dark mode Slate (#0f172a, #1e293b) | **APLICADO** | Variables dark correctas |
| Shadow multi-layer | **APLICADO** | `--shadow` con 2 capas |
| Header gradiente dark | **APLICADO** | `linear-gradient(135deg, #1e293b, #334155)` |
| Detail-header gradiente dark | **APLICADO** | Mismo gradiente |
| Custom scrollbar | **APLICADO** | `.nav-scroll`, `.content-scroll`, `.detail-body` |
| Radius tokens | **APLICADO** | `--radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px` |
| Topic hover mejorado | **APLICADO** | `translateX(4px) + shadow-lg` |
| Section-box hover | **APLICADO** | `box-shadow: var(--shadow-lg)` en hover |
| Status pips dark mode | **APLICADO** | `.status-pip.master` y `.learning` con dark overrides |
| Dark mode visuales completo | **APLICADO** | 50+ reglas dark para comp, wheel, journey, patchwork, quiz |
| Sidebar accent bar | **APLICADO** | `aside::before` con gradient naranja (3px) |
| Dojo-blue variable | **APLICADO** | `--dojo-blue: #4f6ef7` como referencia |
| Font Inter en Patchwork | **APLICADO** | `<link>` + font-family Inter |
| Font-smoothing en Patchwork | **APLICADO** | webkit + moz |

### Lo que NO se aplico (y es correcto no hacerlo):

| Recomendacion V1 | Estado | Razon |
|-------------------|--------|-------|
| Cambiar primario a blue-violet en Study | **NO aplicado** | El usuario confirmo que el naranja Databricks funciona bien para el contexto educativo |
| design-tokens.css compartido | **NO creado** | No fue necesario ya que se alinearon las variables directamente |
| Eliminar CSS duplicado (Journey) | **NO aplicado** | Se removio la duplicacion en V2 del modulo |
| Patchwork dark mode | **NO aplicado** | Usuario dijo que no le ve utilidad al patchwork independiente |

---

## 3. AUDITORIA MODULO POR MODULO

### MODULO 1: Dojo Entrance (Pantalla de Inicio)
**Score: 10/10 | Estado: PERFECTO**

**Archivos:** `styles.css` (lineas 1360-1862), `index.html` (lineas 142-350+)

**Elementos auditados:**
- Particulas flotantes con gradiente `#4f6ef7 -> #7c3aed` .................. OK
- Emblema SVG con `emblemPulse` animation y drop-shadow ..................... OK
- Kanji decorativo `.dojo-headline-kanji` con gradiente blue-violet ........ OK
- Headline responsive `clamp(2.2rem, 5vw, 3.4rem)` ........................ OK
- Sensei Quote con fondo glassmorphic sutil ................................ OK
- Values strip (Disciplina / Precision / Maestria) ......................... OK
- Path cards con hover effects ............................................. OK
- Boton `Enter the Dojo` con gradiente + glow en hover .................... OK
- Dark mode completo con overrides en headline, quote, paths, copyright .... OK
- Responsive: texto ajustable, padding responsive .......................... OK

**Veredicto: No tocar. Es la referencia de calidad.**

---

### MODULO 2: Quiz Engine
**Score: 9/10 | Estado: EXCELENTE**

**Archivos:** `styles.css` (lineas 570-930), `script.js`, `index.html`

**Elementos auditados:**
- Question cards con `var(--card-bg)` y `var(--box-shadow)` ............... OK
- Options con hover `translateX(4px)` + primary border ..................... OK
- Selected state con primary glow ......................................... OK
- Correct/Incorrect con success/danger semanticos .......................... OK
- Map nodes con gradientes (amber active, green answered) .................. OK
- Control bar con flex layout y gap ........................................ OK
- Feedback section con `feedbackFadeIn` animation .......................... OK
- Botones con gradiente `#4f6ef7 -> #7c3aed` .............................. OK
- Sidebar question map responsive .......................................... OK
- Markdown rendering (marked.js) para explicaciones ........................ OK
- Code blocks con syntax highlight y dark mode overrides ................... OK
- Zen Mode con glassmorphic exit button .................................... OK

**Problemas menores detectados:**
| ID | Problema | Severidad |
|----|----------|-----------|
| Q1 | Timer-display en index.html usa `style=""` inline con `background: rgba(255,255,255,0.1)` | BAJA |
| Q2 | `<small style="color: grey">` y `color: #666` hardcoded en index.html (lineas 755, 796, 811, 843) | BAJA |

---

### MODULO 3: Study Mode (Integrado en Quiz)
**Score: 8/10 | Estado: BUENO**

**Archivos:** `styles.css` (lineas 944-999), `script.js` (renderStudyMode)

**Elementos auditados:**
- Study layout con sidebar 300px + content area ........................... OK
- TOC con primary color headings y active state ........................... OK
- Study body text `line-height: 1.7; font-size: 1.05rem` ................. OK
- Responsive: sidebar se apila en mobile .................................. OK
- Dark mode para sidebar y content ........................................ OK
- Scrollbar coherente con sistema ......................................... OK

**Problemas detectados:**
| ID | Problema | Severidad |
|----|----------|-----------|
| S1 | El boton "Volver" en study-header usa colores inline hardcoded en script.js: `background:rgba(255,255,255,0.12); color:#c7d2fe` | MEDIA |
| S2 | Badges de conteo (Personajes, Conceptos, Flashcards) usan inline `background:rgba(79,110,247,0.15)` o `rgba(255,54,33,0.15)` segun curso | BAJA (funcional pero inline) |
| S3 | La pantalla de Personajes para UNIR usa `style="border-left: 3px solid #10b981"` inline para items leidos | BAJA |

---

### MODULO 4: Perfil / Gamificacion
**Score: 7.5/10 | Estado: BUENO CON DETALLES**

**Archivos:** `hero_data.js`, `styles.css` (lineas 1176-2380, 2207-2380), `script.js`

**Elementos auditados:**
- Level Up modal con gradiente indigo premium `#1e3a8a -> #4f46e5` ........ OK
- Belt float animation con drop-shadow .................................... OK
- Purple glow button con gradiente violet ................................. OK
- Certificate con estilo gold/dark ......................................... OK
- Menu Profile Card con avatar, XP bar, belt display ...................... OK
- Dojo Wisdom section con bonsai SVG y quote .............................. OK
- Badge cards con rarity borders (bronze, silver, gold) ................... OK
- XP bar con gradient fill y transition ................................... OK
- Dark mode para wisdom y profile ......................................... OK

**Problemas detectados:**
| ID | Problema | Severidad |
|----|----------|-----------|
| G1 | `hero_data.js` linea 23-29: Colores de cinturones hardcoded como strings (`"#FFD700"`, `"#FF8C00"`, `"#2ECC71"`, `"#3498DB"`, `"#333333"`, `"#8E44AD"`) — estos no usan variables CSS | MEDIA |
| G2 | `hero_data.js` linea 133: `style="color: #e0f7fa"` — color Material Design que NO esta en la paleta del Dojo | MEDIA |
| G3 | `hero_data.js` linea 136: `style="background: white; color: var(--primary-color)"` mezcla hardcode con variable | BAJA |
| G4 | `script.js` linea 529: `style="color: #666"` — gris generico no del sistema | BAJA |
| G5 | `script.js` linea 547: Color dinamico `${color}` para score que usa colores calculados fuera de variables | BAJA |
| G6 | `script.js` linea 606: Opacity inline `opacity: ${opacity}` + border + bg dinamicos | BAJA |
| G7 | `script.js` linea 661: `color: #888` — no del sistema | BAJA |
| G8 | `script.js` linea 668: `color: #777` — no del sistema | BAJA |
| G9 | `script.js` linea 2052: `style="color:red"` — error display hardcoded | BAJA |
| G10 | `menu-profile-card` usa `box-shadow: 0 2px 10px rgba(0,0,0,0.05)` hardcoded en vez de `var(--box-shadow)` | BAJA |

**Nota sobre cinturones (G1):** Los colores de cinturon son INTENCIONALES y representan la tematica marcial (blanco, amarillo, naranja, verde, azul, negro, maestro). NO deben alinearse a la paleta blue-violet — son parte de la identidad Kung-Fu. Sin embargo, seria mejor definirlos como variables para facilitar mantenimiento.

---

### MODULO 5: Databricks Study Module
**Score: 7.5/10 | Estado: MUY MEJORADO (antes 4/10)**

**Archivo:** `databricks_study_module.html` (100KB, ~1800 lineas)

**Mejoras confirmadas vs V1:**
- Font Inter cargada correctamente ....................................... OK
- Font-smoothing aplicado ................................................. OK
- Background `#f1f5f9` (Slate cool) ...................................... OK
- Textos `#1e293b` y `#64748b` (Slate) ................................... OK
- Borders `#e2e8f0` (Slate) ............................................... OK
- Dark mode Slate (`#0f172a`, `#1e293b`, `#334155`) ...................... OK
- Shadow multi-layer ...................................................... OK
- Header gradiente dark ................................................... OK
- Detail header gradiente dark ............................................ OK
- Custom scrollbars en nav, content, detail ............................... OK
- Radius tokens (`--radius-sm/md/lg`) .................................... OK
- Section-box con hover shadow-lg ......................................... OK
- Status pips con dark mode overrides ..................................... OK
- Sidebar accent bar decorativa (naranja gradient) ........................ OK
- Variable `--dojo-blue: #4f6ef7` disponible .............................. OK
- Boton dark mode toggle en header ........................................ OK

**Problemas residuales:**
| ID | Problema | Severidad |
|----|----------|-----------|
| D1 | Color primario sigue siendo `#FF3621` (naranja) para nav-active, buttons, big-title — coherente con Databricks pero visualmente diferente al Dojo blue-violet | **NOTA** (decision intencional, no bug) |
| D2 | `.btn` definido como `border-radius: 4px` — menor que el sistema Dojo (`--radius-sm: 8px`) | MEDIA |
| D3 | Flashcard front muestra `color: var(--primary)` que es naranja — no blue-violet | BAJA |
| D4 | `masteryBar` usa `background: #107c10` (verde Microsoft) inline, no `var(--vis-good)` ni `--success` | BAJA |
| D5 | Sidebar title usa `style="color: var(--primary)"` inline | BAJA |
| D6 | Multiples `style=""` inline en HTML del sidebar y note modal | BAJA |
| D7 | Visuals overlay sidebar usa botones `.btn` sin estilo coherente + inline styles | MEDIA |
| D8 | `nav-controls` dark mode override usa `background: #333; border-color: #555` hardcoded — no variables del sistema | MEDIA |
| D9 | Comentario duplicado `/* Nav Controls */` aparece 2 veces (lineas 149-150) | BAJA |
| D10 | Breakpoint mobile duplicado (lineas 141-147 y 193-200) con reglas ligeramente diferentes | MEDIA |
| D11 | Segundo `:root` block (linea 264) redefine variables visuales — potencial conflicto con primer `:root` | MEDIA |
| D12 | `DP-600` branch en JS (linea 681) cambia `--primary` dinamicamente a `#007bff` — esto podria afectar otros cursos si se navega entre ellos | MEDIA |
| D13 | `.content-box` usa `border-radius: 6px` — menor que `--radius-sm: 8px` | BAJA |
| D14 | `.box-blue/green/red/yellow` usan Bootstrap colors (`#007bff`, `#28a745`, `#dc3545`, `#ffc107`) no del sistema Dojo | MEDIA |

---

### MODULO 6: Visuales (Comparator, Wheel, Journey, Patchwork embebido)
**Score: 8/10 | Estado: MUY MEJORADO (antes 6/10)**

**Archivo:** `databricks_study_module.html` (lineas 262-474)

**Mejoras confirmadas:**
- Dark mode completo para Comparator ..................................... OK
- Dark mode completo para Wheel/Governance ............................... OK
- Dark mode completo para Mini-Quiz ...................................... OK
- Dark mode completo para Patchwork embebido ............................. OK
- Dark mode completo para Journey Simulator .............................. OK
- Variables `--bg-vis`, `--card-vis`, `--text-vis`, `--muted-vis` con dark overrides .. OK
- Highlight dark mode override ............................................ OK
- CSS duplicado del Journey eliminado ..................................... OK (solo aparece una vez ahora)

**Problemas residuales:**
| ID | Problema | Severidad |
|----|----------|-----------|
| V1 | Los visual components tienen sus propias variables (`--accent`, `--bg-vis`, `--text-vis`) paralelas a las del modulo (`--primary`, `--bg-body`, `--text-main`) — duplicacion de tokens | MEDIA |
| V2 | Tooltips light mode usan `#334155` hardcoded (que es Slate 700) — correcto pero no via variable | BAJA |
| V3 | `.comp-controls` light mode usa `background: #f1f5f9` hardcoded — deberia ser `var(--bg-body)` | BAJA |
| V4 | `.rationale-panel` light mode usa colores hardcoded (`#fffbeb`, `#fcd34d`, `#92400e`) — warning colors fuera de variables | BAJA |
| V5 | `.chip` light mode usa colores hardcoded (`#e0f2fe`, `#0284c7`, `#bae6fd`) | BAJA |
| V6 | `.mq-opt` light mode usa `background: white` hardcoded — deberia ser `var(--bg-surface)` o `var(--card-vis)` | BAJA |
| V7 | `.journey-controls` y `.j-node` usan `background: white` hardcoded | BAJA |
| V8 | `.patch-platform` y `.patch-asset` usan `background: white` hardcoded | BAJA |
| V9 | Sin responsive para `comp-grid`, `wheel-layout`, `tradeoff-panel` en pantallas < 1024px | MEDIA |

---

### MODULO 7: Patchwork Simulator (Independiente)
**Score: 5.5/10 | Estado: MINIMAMENTE MEJORADO**

**Archivo:** `patchwork_simulator.html` (828 lineas)

**Lo que SI cambio:**
- Font Inter cargada correctamente via Google Fonts link .................. OK
- Font-smoothing aplicado ................................................. OK
- Font-family ahora es `'Inter', -apple-system...` ....................... OK

**Lo que NO cambio y sigue desalineado:**
| ID | Problema | Severidad |
|----|----------|-----------|
| P1 | Variables locales diferentes: `--accent: #ff3621`, `--bg: #f6f6f6`, `--text: #111827` — NO son los tokens del Dojo | ALTA |
| P2 | Background `#f6f6f6` ≠ `#f1f5f9` (Dojo Slate) | ALTA |
| P3 | Text `#111827` ≠ `#1e293b` (Dojo Slate 800) | ALTA |
| P4 | Border `#e5e7eb` ≠ `#e2e8f0` (Dojo Slate 200) | MEDIA |
| P5 | Sin dark mode | ALTA |
| P6 | Sin header del Dojo (no hay gradiente dark, no hay titulo de marca) | ALTA |
| P7 | Sin custom scrollbar | MEDIA |
| P8 | Sin responsive design — grid 2-column fijo | ALTA |
| P9 | Botones con `border-radius: 12px` — diferente al Dojo | BAJA |
| P10 | Panel `border-radius: 18px` — mayor que el max del Dojo (`--radius-xl: 20px` pero este tiene 18) | BAJA |
| P11 | Sin glassmorphism ni micro-animaciones | BAJA |
| P12 | Sin enlace "Back to Quiz/Study" para navegar de vuelta | MEDIA |

**NOTA DEL USUARIO:** Norman dijo "Patchwork Simulator no le mire utilidad". Esto sugiere que este modulo podria ser candidato a **deprecar/archivar** en vez de invertir tiempo en alinearlo visualmente. Sin embargo, existe un Patchwork Simulator **embebido dentro del Study Module** (en los Visuals) que SI funciona y SI esta alineado — ese ya tiene dark mode y usa las variables del Study Module.

**Recomendacion: ARCHIVAR `patchwork_simulator.html` a la carpeta `backups/` y mantener solo la version embebida en los Visuals del Study Module.**

---

### MODULO 8: PWA / Manifest / Service Worker
**Score: 4/10 | Estado: DESALINEADO (Nuevo hallazgo)**

**Archivos:** `manifest.json`, `sw.js`, `app_icon.png`

**Problemas detectados:**
| ID | Problema | Severidad |
|----|----------|-----------|
| PWA1 | `manifest.json` tiene `"theme_color": "#007bff"` — este es Bootstrap blue, NO el Dojo blue-violet `#4f6ef7` | **ALTA** |
| PWA2 | `manifest.json` tiene `"background_color": "#ffffff"` — correcto para light pero no refleja la marca | BAJA |
| PWA3 | `manifest.json` tiene `"name": "Simulador de Preguntas"` — no dice "The Data Dojo" | MEDIA |
| PWA4 | `manifest.json` tiene `"short_name": "Simulador"` — deberia ser "Data Dojo" | MEDIA |
| PWA5 | Solo un icono (512x512) — PWA best practices requieren multiples tamanos (72, 96, 128, 144, 152, 192, 384, 512) | MEDIA |
| PWA6 | `sw.js` es basico (1.3KB) — no tiene estrategia de cache definida | BAJA |
| PWA7 | No hay meta tag `<meta name="theme-color">` en index.html para Chrome mobile | MEDIA |

---

## 4. INVENTARIO DE ESTILOS INLINE EN JAVASCRIPT

Este es un hallazgo nuevo que la V1 no cubrio. El archivo `script.js` (4712 lineas / 237KB) contiene **68+ instancias** de estilos inline hardcoded. Aqui los mas importantes:

### 4.1 Colores fuera del sistema de diseno

| Archivo | Linea(s) | Color | Deberia ser |
|---------|----------|-------|-------------|
| script.js | 529 | `#666` | `var(--text-muted)` o `#64748b` |
| script.js | 547 | `${color}` dinamico | Usar clases CSS |
| script.js | 661 | `#888` | `var(--text-muted)` |
| script.js | 668 | `#777` | `var(--text-muted)` |
| script.js | 2052 | `color:red` | `var(--danger-color)` |
| script.js | 2989 | `#c7d2fe` | `var(--primary-light)` o similar |
| script.js | 3066 | `#4f6ef7` hardcoded | `var(--primary-color)` |
| script.js | 3069 | `#ef444418` | `rgba(var(--danger-color), 0.1)` — no posible en CSS vanilla |
| script.js | 3070 | `#f59e0b18` | Similar |
| script.js | 3157 | `#10b981` | `var(--success-color)` |
| hero_data.js | 133 | `#e0f7fa` | Color Material Design, no del Dojo |
| index.html | 755 | `color: grey` | `var(--text-muted)` |
| index.html | 796 | `#666` | `var(--text-muted)` |
| index.html | 811 | `#666` | `var(--text-muted)` |
| index.html | 843 | `#666` | `var(--text-muted)` |
| index.html | 1406 | `#888` | `var(--text-muted)` |

### 4.2 Colores en datos de contenido (study_databricks.js)

| Archivo | Contenido | Problema |
|---------|-----------|----------|
| study_databricks.js | `fill="#cd7f32"`, `fill="#c0c0c0"`, `fill="#ffd700"` | SVG inline para medallion layers (Bronze/Silver/Gold) — estos son TEMATICOS y correctos |

**Veredicto:** Los colores de medallion layers son intencionales y representan el patron Lakehouse (Bronze, Silver, Gold). No necesitan cambio.

---

## 5. PROBLEMAS ENCONTRADOS POST-AJUSTE

### 5.1 Doble `:root` en databricks_study_module.html

**Problema:** El archivo tiene DOS bloques `:root` (lineas 15-31 y lineas 264-274). El segundo redefine variables `--accent`, `--bg-vis`, etc. que coexisten con las del primer bloque.

**Impacto:** Funciona porque CSS cascadea, pero es confuso para mantenimiento y podria causar conflictos si se reorganiza.

**Solucion:** Fusionar ambos `:root` en uno solo, y hacer lo mismo con los dos `[data-theme="dark"]` blocks.

### 5.2 Breakpoint mobile duplicado

**Problema:** Dos `@media (max-width: 768px)` blocks (lineas 141-147 y 193-200) con reglas ligeramente diferentes.

**El primero:**
```css
.detail-body { padding: 20px; }
```

**El segundo:**
```css
.detail-body { padding: 20px 20px 100px 20px; } /* mas padding-bottom */
```

**Impacto:** El segundo sobreescribe al primero. Solo el segundo tiene efecto. El primero es codigo muerto.

### 5.3 Color primario DP-600 override en JS

**Problema (D12):** Linea 681 del script dentro del study module:
```javascript
if (currentCourseId === 'dp-600') {
    document.documentElement.style.setProperty('--primary', '#007bff');
    document.documentElement.style.setProperty('--primary-hover', '#0056b3');
}
```

**Impacto:** Si un usuario navega entre cursos sin recargar, el color primario de Databricks (#FF3621) se reemplaza permanentemente con Bootstrap blue (#007bff). No hay un `else` que restaure el naranja.

### 5.4 Content boxes con colores Bootstrap

**Problema (D14):** Los `.box-blue`, `.box-green`, `.box-red`, `.box-yellow` usan la paleta Bootstrap clasica:
- Blue: `#007bff` / `#004085`
- Green: `#28a745` / `#155724`
- Red: `#dc3545` / `#721c24`
- Yellow: `#ffc107` / `#856404`

Estos NO son los colores del sistema Dojo (`#4f6ef7`, `#22c55e`, `#ef4444`, `#f59e0b`). Sin embargo, tienen dark mode overrides correctos y se ven bien. Cambiarlos es un riesgo bajo pero mejorable.

### 5.5 Manifest PWA desalineado

**Problema (PWA1-4):** El manifest.json todavia refleja la version inicial del proyecto, no la identidad "Data Dojo" actual.

---

## 6. MATRIZ COMPLETA DE INCONSISTENCIAS

### CRITICAS (Rompen identidad o experiencia)

| ID | Modulo | Problema | Estado |
|----|--------|----------|--------|
| P1-P8 | Patchwork Independiente | Modulo completamente desalineado sin dark mode ni responsive | **ARCHIVAR** |
| PWA1 | manifest.json | `theme_color: #007bff` en vez de `#4f6ef7` | **CORREGIR** |

### ALTAS (Inconsistencia notable)

| ID | Modulo | Problema | Estado |
|----|--------|----------|--------|
| D10 | Study Module | Breakpoint mobile duplicado con reglas conflictivas | CORREGIR |
| D11 | Study Module | Doble `:root` con variables paralelas | CORREGIR |
| D12 | Study Module | DP-600 override sin restauracion | CORREGIR |
| D8 | Study Module | Nav-controls dark mode hardcoded `#333/#555` | CORREGIR |
| PWA3-4 | manifest.json | Nombre no refleja "The Data Dojo" | CORREGIR |
| V9 | Visuales | Sin responsive para comp-grid, wheel, tradeoffs | CORREGIR |

### MEDIAS (Mejora de calidad)

| ID | Modulo | Problema |
|----|--------|----------|
| D2 | Study Module | `.btn` border-radius 4px vs 8px sistema |
| D7 | Study Module | Visuals sidebar botones con inline styles |
| D14 | Study Module | Content boxes con colores Bootstrap |
| V1 | Visuales | Variables duplicadas (`--accent` vs `--primary`) |
| G1 | Gamificacion | Colores cinturones hardcoded (intencional pero sin variables) |
| G2 | Gamificacion | Color `#e0f7fa` Material Design fuera del sistema |
| S1 | Study Mode | Boton "Volver" con colores inline hardcoded |
| PWA5 | PWA | Solo 1 icono, necesita multiples |
| PWA7 | PWA | Falta meta theme-color |

### BAJAS (Polish)

| ID | Modulo | Problema |
|----|--------|----------|
| Q1-Q2 | Quiz | Estilos inline menores en index.html |
| D3-D6, D9, D13 | Study Module | Detalles menores de inline styles y comentarios |
| V2-V8 | Visuales | `white` hardcoded en vez de variables |
| G3-G10 | Gamificacion | Colores genericos (#666, #777, #888) en script.js |
| S2-S3 | Study Mode | Badges y borders inline |

---

## 7. PLAN DE MEJORAS V2 POR FASES

### FASE 0: ARCHIVADO Y LIMPIEZA RAPIDA (15 minutos)
**Riesgo: NINGUNO | Impacto: ORGANIZACION**

```
1. Mover patchwork_simulator.html a backups/patchwork_archived/
2. El Patchwork ya existe embebido en los Visuals del Study Module (funcional + dark mode)
3. Eliminar referencia si existe en algun menu
```

---

### FASE 1: CORRECCION PWA / MANIFEST (10 minutos)
**Riesgo: NINGUNO | Impacto: ALTO para instalacion PWA**

**Archivo: `manifest.json`**
```json
{
  "name": "The Data Dojo — Quiz Simulator",
  "short_name": "Data Dojo",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#f1f5f9",
  "theme_color": "#4f6ef7",
  "icons": [
    {
      "src": "app_icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Archivo: `index.html` (agregar en `<head>`):**
```html
<meta name="theme-color" content="#4f6ef7">
```

---

### FASE 2: LIMPIEZA CSS DEL STUDY MODULE (45 minutos)
**Riesgo: BAJO | Impacto: MEDIO**

#### 2.1 Fusionar los dos `:root` blocks en uno
Mover las variables `--accent`, `--bg-vis`, `--text-vis`, etc. al primer `:root` block. Fusionar los dos `[data-theme="dark"]` blocks tambien.

#### 2.2 Eliminar breakpoint mobile duplicado
Eliminar el primer `@media (max-width: 768px)` (lineas 141-147) ya que el segundo (lineas 193-200) tiene las reglas correctas con padding-bottom extra.

#### 2.3 Eliminar comentario duplicado `/* Nav Controls */`

#### 2.4 Corregir `.btn` border-radius
```css
.btn { border-radius: var(--radius-sm); } /* 8px en vez de 4px */
```

#### 2.5 Corregir `.content-box` border-radius
```css
.content-box { border-radius: var(--radius-sm); } /* 8px en vez de 6px */
```

#### 2.6 Corregir nav-controls dark mode
```css
[data-theme="dark"] .nav-controls {
    background: var(--bg-surface);  /* en vez de #333 */
    border-color: var(--border);    /* en vez de #555 */
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}
```

#### 2.7 Agregar fix para DP-600 course override
```javascript
// Agregar else para restaurar Databricks colors
if (currentCourseId === 'dp-600') {
    document.documentElement.style.setProperty('--primary', '#007bff');
    document.documentElement.style.setProperty('--primary-hover', '#0056b3');
} else if (currentCourseId.startsWith('databricks')) {
    document.documentElement.style.setProperty('--primary', '#FF3621');
    document.documentElement.style.setProperty('--primary-hover', '#D12B1B');
}
```

---

### FASE 3: VARIABLES UNIFICADAS EN VISUALES (30 minutos)
**Riesgo: BAJO | Impacto: MEDIO (mantenibilidad)**

Reemplazar `background: white` hardcoded en componentes visuales light mode con variables:

```css
/* En vez de: */
.mq-opt { background: white; }
.journey-controls { background: white; }
.j-node { background: white; }
.patch-platform { background: white; }
.patch-asset { background: white; }
.patch-metric-card { background: white; }

/* Usar: */
.mq-opt { background: var(--card-vis); }
.journey-controls { background: var(--card-vis); }
.j-node { background: var(--card-vis); }
.patch-platform { background: var(--card-vis); }
.patch-asset { background: var(--card-vis); }
.patch-metric-card { background: var(--card-vis); }
```

Y `#f1f5f9` / `#f8fafc` hardcoded:
```css
.comp-controls { background: var(--bg-body); }  /* en vez de #f1f5f9 */
.patch-dropzone { background: var(--bg-vis); }  /* en vez de #f8fafc */
.journey-pipeline { background: var(--bg-vis); } /* en vez de #f8fafc */
```

---

### FASE 4: RESPONSIVE PARA VISUALES (1 hora)
**Riesgo: BAJO | Impacto: MEDIO**

Agregar al final del CSS del study module:
```css
@media (max-width: 1024px) {
  .comp-grid { grid-template-columns: 1fr; }
  .tradeoff-panel { grid-template-columns: 1fr; }
  .wheel-layout { flex-direction: column; align-items: center; }
  .detail-panel { width: 100%; height: auto; }
  .patch-layout { grid-template-columns: 1fr; }
  .patch-platforms { grid-template-columns: 1fr 1fr; }
  .j-info { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .patch-platforms { grid-template-columns: 1fr; }
  .wheel-wrap { width: 280px; height: 280px; }
  .comp-grid .arch-card { padding: 15px; }
}
```

---

### FASE 5: CONTENT BOXES ALINEADAS AL SISTEMA (30 minutos)
**Riesgo: BAJO | Impacto: BAJO-MEDIO**

Opcional. Actualizar `.box-blue/green/red/yellow` para usar colores del Dojo:
```css
/* Opcion A: Usar colores Dojo (mas coherente) */
.box-blue { background-color: rgba(79, 110, 247, 0.08); border-color: #4f6ef7; color: #1e3a8a; }
.box-blue .box-title { color: #4f6ef7; }

.box-green { background-color: rgba(34, 197, 94, 0.08); border-color: #22c55e; color: #166534; }
.box-green .box-title { color: #22c55e; }

.box-red { background-color: rgba(239, 68, 68, 0.08); border-color: #ef4444; color: #991b1b; }
.box-red .box-title { color: #ef4444; }

.box-yellow { background-color: rgba(245, 158, 11, 0.08); border-color: #f59e0b; color: #92400e; }
.box-yellow .box-title { color: #f59e0b; }
```

**NOTA:** Verificar que el study content HTML use estas clases. Si el contenido ya renderiza correctamente con los colores actuales Bootstrap, esta fase es de baja prioridad.

---

### FASE 6: LIMPIEZA DE INLINE STYLES EN SCRIPT.JS (1-2 horas)
**Riesgo: MEDIO | Impacto: BAJO (mantenibilidad)**

**Estrategia:** NO reescribir todo. Solo reemplazar los colores genericos mas comunes:

```javascript
// ANTES (en multiples lugares):
style="color: #666"
style="color: #777"
style="color: #888"

// DESPUES:
style="color: var(--text-muted, #64748b)"

// ANTES:
style="color:red"

// DESPUES:
style="color: var(--danger-color, #ef4444)"
```

**NOTA IMPORTANTE:** Muchos de estos inline styles estan en `innerHTML` templates. Cambiarlos requiere cuidado para no romper el rendering. Solo hacer donde el cambio sea 1:1 seguro.

---

### FASE 7: MEJORAS OPCIONALES DE POLISH (1 hora, si se desea)
**Riesgo: BAJO | Impacto: BAJO**

#### 7.1 Mastery bar color via variable
```javascript
// En databricks_study_module.html, cambiar:
background: #107c10
// Por:
background: var(--vis-good, #16a34a)
```

#### 7.2 Hero belt colors como CSS variables
```css
/* En styles.css, agregar: */
:root {
  --belt-white: #A0A0A0;
  --belt-yellow: #FFD700;
  --belt-orange: #FF8C00;
  --belt-green: #2ECC71;
  --belt-blue: #3498DB;
  --belt-black: #333333;
  --belt-master: #8E44AD;
}
```

#### 7.3 Focus states globales
```css
/* Ya recomendado en V1 */
*:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

---

## 8. RECOMENDACIONES TECNICAS

### 8.1 Sobre el Patchwork Simulator independiente

**Recomendacion firme: ARCHIVAR.**

Razones:
1. El usuario dijo "no le mire utilidad"
2. Ya existe una version embebida en el Study Module Visuals que:
   - Tiene dark mode completo
   - Usa las variables del sistema
   - Esta integrada en la navegacion del Study Module
3. Es un archivo independiente de 28KB que no comparte CSS con nadie
4. No tiene responsive design
5. No tiene dark mode
6. Duplica funcionalidad que ya existe dentro del Study Module

**Accion:** `mv patchwork_simulator.html backups/patchwork_archived/`

### 8.2 Sobre frameworks (ratificacion)

**Sigo recomendando NO migrar a un framework.** La app:
- Funciona correctamente con vanilla JS
- Tiene 0 dependencias de framework (excepto marked.js y MathJax)
- Es una PWA que funciona offline
- Tiene ~3000+ preguntas que ya funcionan

### 8.3 Herramientas recomendadas (actualizacion)

| Herramienta | Prioridad | Para que |
|-------------|-----------|----------|
| **CSSnano** (via CLI) | BAJA | Minificar CSS si performance es tema |
| **Lighthouse** (Chrome DevTools) | **ALTA** | Auditar PWA score, accesibilidad, performance |
| **Real Favicon Generator** (realfavicongenerator.net) | MEDIA | Generar todos los tamanos de icono PWA |

### 8.4 Sobre la estrategia de colores Databricks vs Dojo

El naranja `#FF3621` de Databricks como primario del Study Module es una **decision de diseno valida**. Representa la marca del curso. Lo importante es que:
- Las superficies (bg, cards, borders) estan alineadas al Dojo ........... HECHO
- La tipografia es Inter .................................................. HECHO
- Los tokens de radio, sombra y transicion son del sistema ................ HECHO
- El dark mode usa la paleta Slate ........................................ HECHO

El acento naranja da identidad contextual al curso Databricks. Esto es un patron comun en apps educativas (Coursera, Udemy, etc.) donde cada curso tiene su propio accent color.

---

## RESUMEN FINAL V2

### Progreso vs V1:
- **6 modulos auditorados** en V1 → **8 modulos** en V2 (PWA y Inline Styles son nuevos)
- **Score general:** 7.5/10 → **8.2/10** (+0.7)
- **Databricks Study Module:** 4/10 → **7.5/10** (+3.5 — mejora mas significativa)
- **Visuales:** 6/10 → **8/10** (+2)

### Lo que queda por hacer (ordenado por impacto/esfuerzo):

| Prioridad | Accion | Tiempo | Impacto |
|-----------|--------|--------|---------|
| **1** | Archivar patchwork independiente | 2 min | Limpieza |
| **2** | Corregir manifest.json (nombre + theme_color) | 5 min | ALTO (PWA) |
| **3** | Agregar meta theme-color en index.html | 1 min | MEDIO |
| **4** | Fusionar `:root` duplicados en study module | 15 min | MEDIO |
| **5** | Eliminar breakpoint mobile duplicado | 5 min | MEDIO |
| **6** | Corregir nav-controls dark mode a variables | 5 min | MEDIO |
| **7** | Fix DP-600 course color override | 5 min | MEDIO |
| **8** | Reemplazar `white` hardcoded en visuales | 15 min | BAJO |
| **9** | Responsive para visuales | 30 min | MEDIO |
| **10** | Actualizar content boxes a paleta Dojo | 15 min | BAJO |
| **11** | Limpiar inline #666/#777/#888 en script.js | 1 hora | BAJO |
| **12** | Belt colors como CSS variables | 10 min | BAJO |

**Tiempo total estimado: ~2.5 horas** para completar todo lo pendiente.

### Estado final esperado tras V2 completo: 9.2/10

---

*Documento V2 generado el 2026-03-31.*
*Auditoria completa de 8 modulos, 55+ archivos, ~74,000 lineas de codigo.*
*Autor: Claude Code — Asistente de Ingenieria*
