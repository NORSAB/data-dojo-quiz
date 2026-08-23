# AUDITORIA VISUAL COMPLETA & PLAN DE MEJORAS POR FASES
## The Data Dojo — Simulador de Preguntas
### Fecha: 2026-03-31

---

## TABLA DE CONTENIDOS

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Inventario de Sistemas de Diseno](#2-inventario-de-sistemas-de-diseno)
3. [Analisis de Consistencia Visual](#3-analisis-de-consistencia-visual)
4. [Hallazgos Detallados por Modulo](#4-hallazgos-detallados-por-modulo)
5. [Matriz de Inconsistencias](#5-matriz-de-inconsistencias)
6. [Plan de Mejoras por Fases](#6-plan-de-mejoras-por-fases)
7. [Recomendaciones de Frameworks y Herramientas](#7-recomendaciones-de-frameworks-y-herramientas)
8. [Guia de Implementacion Segura](#8-guia-de-implementacion-segura)

---

## 1. RESUMEN EJECUTIVO

### Estado General: 7.5/10

La aplicacion "The Data Dojo" tiene una identidad visual fuerte y bien ejecutada en su **pantalla de inicio (Dojo Entrance)** y en el **modulo principal de quiz**. El estilo Kung-Fu/Dojo es premium, con glassmorphism, gradientes blue-violet, particulas flotantes y tipografia Inter bien calibrada.

Sin embargo, existen **3 sistemas de diseno paralelos** que no comparten la misma paleta, tipografia ni tokens de diseno:

| Modulo | Sistema de Diseno | Consistencia con Dojo |
|--------|-------------------|----------------------|
| Inicio (Dojo Entrance) | Design System v3.0 (Blue-Violet) | **REFERENCIA** (10/10) |
| Quiz Engine (index.html) | Design System v3.0 (Blue-Violet) | **Excelente** (9/10) |
| Perfil/Gamificacion | Design System v3.0 (Blue-Violet) | **Buena** (8/10) |
| Databricks Study Module | Sistema independiente (Fluent-like) | **Desalineado** (4/10) |
| Patchwork Simulator | Sistema independiente (Minimal) | **Desalineado** (5/10) |
| Visuales dentro del Study Module | Semi-independiente | **Parcial** (6/10) |

### Veredicto
El inicio Kung-Fu/Dojo establece un estandar de calidad alto. Los modulos secundarios (databricks_study_module.html y patchwork_simulator.html) fueron construidos como paginas independientes con sus propios CSS embebidos, lo que rompe la coherencia visual de la marca "Data Dojo".

---

## 2. INVENTARIO DE SISTEMAS DE DISENO

### 2.1 Sistema Principal — "Data Dojo Design System v3.0" (styles.css)

**Archivo:** `styles.css` (2,440 lineas)
**Fuente:** Google Fonts - Inter (300-900)
**Filosofia:** Glassmorphism + Micro-animaciones + Gradientes sutiles

#### Paleta de Colores Principal:
```
PRIMARIOS (Blue-Violet)
--primary-color:    #4f6ef7  (Azul medio brillante)
--primary-hover:    #3b5ae0  (Azul mas oscuro)
--primary-glow:     rgba(79, 110, 247, 0.25)
Gradiente primario: linear-gradient(135deg, #4f6ef7 0%, #7c3aed 100%)

SECUNDARIOS
--secondary-color:  #8b95a5  (Gris azulado)
Violet accent:      #7c3aed  (Violeta profundo)
Purple highlight:   #c084fc  (Lila claro)

SEMANTICOS
--success-color:    #22c55e  (Verde esmeralda)
--danger-color:     #ef4444  (Rojo coral)
--warning-color:    #f59e0b  (Ambar)

SUPERFICIES (Light Mode)
--light-bg:         #f1f5f9  (Slate 50)
--card-bg:          #ffffff
--border-color:     #e2e8f0  (Slate 200)
--text-color:       #1e293b  (Slate 800)
--text-muted:       #64748b  (Slate 500)

SUPERFICIES (Dark Mode)
--light-bg:         #0f172a  (Slate 900)
--card-bg:          #1e293b  (Slate 800)
--border-color:     #334155  (Slate 700)
--text-color:       #e2e8f0
--text-muted:       #94a3b8

EFECTOS
--glass-bg:         rgba(255, 255, 255, 0.7)
--glass-border:     rgba(255, 255, 255, 0.3)
--modal-overlay:    rgba(15, 23, 42, 0.6)
```

#### Tokens de Diseno:
```
BORDER RADIUS
--radius-sm:   8px
--radius-md:   12px
--radius-lg:   16px
--radius-xl:   20px
--radius-full: 9999px

TRANSICIONES
--transition-fast:    0.15s cubic-bezier(0.4, 0, 0.2, 1)
--transition-smooth:  0.3s cubic-bezier(0.4, 0, 0.2, 1)
--transition-bounce:  0.4s cubic-bezier(0.34, 1.56, 0.64, 1)

SOMBRAS
--box-shadow:    0 1px 3px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.04)
--box-shadow-lg: 0 4px 12px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.06)
```

---

### 2.2 Sistema del Databricks Study Module (Embebido)

**Archivo:** `databricks_study_module.html` (lineas 11-409, CSS embebido)
**Fuente:** Segoe UI, -apple-system, BlinkMacSystemFont, Roboto
**Filosofia:** Microsoft Fluent Design (inspirado en SharePoint/Teams)

#### Paleta de Colores:
```
PRIMARIOS
--primary:        #FF3621  (Naranja/Rojo Databricks)
--primary-hover:  #D12B1B  (Rojo oscuro)

SUPERFICIES (Light)
--bg-body:        #f3f2f1  (Gris calido — NO es Slate)
--bg-surface:     #ffffff
--bg-sidebar:     #ffffff
--text-main:      #323130  (Gris muy oscuro calido)
--text-sub:       #605e5c  (Gris calido medio)
--border:         #e1dfdd  (Gris calido claro)

SUPERFICIES (Dark)
--bg-body:        #1b1a19  (Negro calido — NO es Slate)
--bg-surface:     #252423
--bg-sidebar:     #201f1e
--text-main:      #ffffff
--text-sub:       #c8c6c4
--border:         #484644

SEMANTICOS ADICIONALES
--accent:         #FF3621  (Databricks)
--vis-good:       #22a745  (Verde — similar pero no identico al principal)
--vis-warn:       #d97706
--vis-bad:        #dc2626
```

---

### 2.3 Sistema del Patchwork Simulator (Embebido)

**Archivo:** `patchwork_simulator.html` (lineas 7-200+, CSS embebido)
**Fuente:** ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial
**Filosofia:** Minimal/Clean

#### Paleta de Colores:
```
--accent:  #ff3621  (Databricks orange)
--bg:      #f6f6f6  (Gris neutro — diferente a ambos sistemas)
--panel:   #ffffff
--text:    #111827  (Gray 900 de Tailwind — diferente)
--muted:   #6b7280  (Gray 500)
--border:  #e5e7eb  (Gray 200 — diferente al principal)
--good:    #16a34a
--warn:    #d97706
--bad:     #dc2626
```

---

## 3. ANALISIS DE CONSISTENCIA VISUAL

### 3.1 Comparativa de Paletas

| Propiedad | Dojo Principal | Databricks Study | Patchwork Sim | Consistente? |
|-----------|---------------|-----------------|---------------|-------------|
| **Color Primario** | #4f6ef7 (Blue-Violet) | #FF3621 (Orange-Red) | #ff3621 (Orange-Red) | **NO** |
| **Background** | #f1f5f9 (Slate cool) | #f3f2f1 (Warm gray) | #f6f6f6 (Neutral) | **NO** |
| **Text Principal** | #1e293b (Slate 800) | #323130 (Warm dark) | #111827 (Gray 900) | **NO** |
| **Text Muted** | #64748b (Slate 500) | #605e5c (Warm gray) | #6b7280 (Gray 500) | **NO** |
| **Borders** | #e2e8f0 (Slate 200) | #e1dfdd (Warm) | #e5e7eb (Gray 200) | **NO** |
| **Dark BG** | #0f172a (Slate 900) | #1b1a19 (Warm black) | N/A | **NO** |
| **Success** | #22c55e | #22a745 | #16a34a | **PARCIAL** |
| **Danger** | #ef4444 | #dc2626 | #dc2626 | **PARCIAL** |
| **Warning** | #f59e0b | #d97706 | #d97706 | **PARCIAL** |

### 3.2 Comparativa de Tipografia

| Propiedad | Dojo Principal | Databricks Study | Patchwork Sim | Consistente? |
|-----------|---------------|-----------------|---------------|-------------|
| **Font Family** | Inter (Google Fonts) | Segoe UI (System) | ui-sans-serif (System) | **NO** |
| **Font Loading** | @import Google Fonts | Ninguno | Ninguno | **NO** |
| **Font Weights** | 300-900 (completo) | 500-700 | 700 | **PARCIAL** |
| **Font Smoothing** | webkit + moz | No especificado | No especificado | **NO** |

### 3.3 Comparativa de Componentes

| Componente | Dojo Principal | Databricks Study | Patchwork Sim | Consistente? |
|------------|---------------|-----------------|---------------|-------------|
| **Border Radius** | 8-20px (tokens) | 4-16px (hardcoded) | 10-12px (hardcoded) | **NO** |
| **Box Shadows** | Layered (2-level) | Fluent-style single | Simple single | **NO** |
| **Transitions** | cubic-bezier custom | 0.2s-0.3s generic | 0.12s ease | **NO** |
| **Buttons** | Gradient + glow | Flat + opacity | Flat + translate | **NO** |
| **Cards** | Glassmorphism | Flat surface | Flat + shadow | **NO** |
| **Animaciones** | Particles, pulse, bounce | slideIn simple | translate only | **NO** |
| **Scrollbar** | Custom styled | Default browser | Default browser | **NO** |
| **Dark Mode Toggle** | Via data-theme | Via data-theme | No existe | **PARCIAL** |

### 3.4 Comparativa de Layout

| Propiedad | Dojo Principal | Databricks Study | Patchwork Sim |
|-----------|---------------|-----------------|---------------|
| **Approach** | Vertical flow | Sidebar + Main | Grid 2-column |
| **Max Width** | 1400px | 900px content | Full width |
| **Spacing System** | rem-based | px-based | px-based |
| **Responsive** | 768px breakpoint | 768px breakpoint | No responsive |

---

## 4. HALLAZGOS DETALLADOS POR MODULO

### 4.1 Pantalla de Inicio (Dojo Entrance) — REFERENCIA

**Estado: EXCELENTE (10/10)**

Lo que funciona perfectamente:
- Particulas flotantes con gradiente blue-violet (#4f6ef7 -> #7c3aed)
- Emblema SVG con animacion pulse y drop-shadow
- Kanji decorativo con gradiente y letter-spacing
- Headline responsive con clamp()
- Sensei Quote con fondo glassmorphic sutil
- Values strip con dividers degradados
- Path cards con hover effects
- Boton "Enter the Dojo" con gradiente y glow en hover
- Soporte completo dark/light mode
- Particulas, emblem pulse, copyright — todo coherente

**Identidad establecida:**
- Tematica: Artes marciales / Dojo japones
- Colores: Blue-Violet como identidad de marca
- Sensacion: Premium, sofisticado, inmersivo

---

### 4.2 Quiz Engine (index.html + styles.css) — MUY BUENO

**Estado: EXCELENTE (9/10)**

Elementos alineados:
- Header con gradiente dark slate (coherente con la marca)
- Cards con glassmorphism y border-radius consistente
- Botones con gradiente blue-violet
- Options con hover animations suaves
- Feedback sections con colores semanticos via variables
- Map nodes con gradientes coherentes
- Modal con backdrop blur (glassmorphism)
- Zen Mode con estilo premium

Detalle menor a mejorar:
- Algunos estilos inline en index.html (timer-display) que deberian estar en styles.css

---

### 4.3 Perfil / Gamificacion — BUENO

**Estado: BUENO (8/10)**

Elementos alineados:
- Profile card usa variables del sistema principal
- XP bar con border-radius y transition
- Level up modal con gradiente indigo premium
- Belt system con animacion float
- Certificate con estilo gold/dark elegante
- Wisdom section (Dojo Wisdom) con bonsai SVG — tematica coherente

Detalles a mejorar:
- La `menu-profile-card` usa box-shadow hardcoded en vez de la variable
- Algunos colores de cinturones estan hardcoded en script.js

---

### 4.4 Databricks Study Module — DESALINEADO

**Estado: DESALINEADO (4/10) — Prioridad ALTA**

#### Problemas Identificados:

**P1. Paleta completamente diferente:**
- Usa `#FF3621` (naranja Databricks) como primario en vez de `#4f6ef7` (blue-violet)
- Los backgrounds son "warm gray" (#f3f2f1) en vez de "cool slate" (#f1f5f9)
- Los textos son "warm" (#323130, #605e5c) en vez de "cool" (#1e293b, #64748b)
- El dark mode usa negro calido (#1b1a19) en vez de slate (#0f172a)

**P2. Tipografia diferente:**
- Usa `Segoe UI` (Microsoft) en vez de `Inter` (Google Fonts)
- No carga @import de Inter
- No aplica font-smoothing

**P3. CSS completamente embebido (409 lineas):**
- No reutiliza NINGUNA variable de styles.css
- Define sus propias variables con nombres diferentes (--primary vs --primary-color)
- Duplica componentes (`.btn`, `.btn-primary`) con estilos distintos
- Los border-radius son menores (4-8px vs 8-20px)

**P4. Sin glassmorphism ni micro-animaciones:**
- Cards planas sin backdrop-blur
- Sombras estilo Fluent UI (single layer) vs multi-layer del Dojo
- Unica animacion: slideIn basico
- Sin particulas, sin pulsos, sin bounces

**P5. Componentes visuales internos (Comparator, Wheel, Journey, Patchwork):**
- Usan `--accent: #FF3621` como color de acento (correcto para Databricks pero no para el Dojo)
- Hardcodean colores como `#fffbeb`, `#fcd34d`, `#92400e` fuera de variables
- Los tooltips usan `#334155` (que SI es del sistema Dojo — inconsistencia mixta)
- Hay CSS DUPLICADO: las secciones Journey Simulator aparecen dos veces identicas (lineas 338-408 son copia exacta de 339-408)

**P6. Dark mode incompleto:**
- Solo cubre variables basicas
- Los componentes visuales (wheel, journey, patchwork) no tienen dark mode overrides
- Los `.box-blue`, `.box-green`, `.box-red` SI tienen dark mode (bien hecho)

**P7. Sin responsive design completo:**
- Solo un breakpoint a 768px para sidebar
- Los visuales (comp-grid, wheel-layout) se rompen en tablets
- No hay adaptacion para el nav-controls flotante en mobile

---

### 4.5 Patchwork Simulator — DESALINEADO

**Estado: DESALINEADO (5/10) — Prioridad MEDIA**

#### Problemas Identificados:

**P1. Archivo HTML independiente con CSS embebido:**
- No referencia styles.css
- No carga la fuente Inter
- Usa una font stack generica diferente

**P2. Variables propias con nombres distintos:**
- `--accent` en vez de `--primary-color`
- `--bg` en vez de `--light-bg`
- `--panel` en vez de `--card-bg`
- `--text` en vez de `--text-color`
- `--muted` en vez de `--text-muted`

**P3. Sin dark mode:**
- No tiene toggle de tema
- No tiene overrides para [data-theme="dark"]

**P4. Sin marca Dojo:**
- No tiene header con gradiente
- No usa glassmorphism
- No tiene animaciones del sistema

**P5. Accesibilidad:**
- Botones sin focus states
- Sin roles ARIA

---

## 5. MATRIZ DE INCONSISTENCIAS

### Severidad: CRITICA (rompe la identidad de marca)

| ID | Modulo | Problema | Impacto |
|----|--------|----------|---------|
| C1 | databricks_study_module | Color primario #FF3621 vs #4f6ef7 | El usuario siente que entra a otra app |
| C2 | databricks_study_module | Font Segoe UI vs Inter | Cambio visual inmediato perceptible |
| C3 | databricks_study_module | Background warm vs cool | Temperatura de color completamente distinta |
| C4 | patchwork_simulator | Sin conexion visual con el Dojo | Parece una herramienta externa |

### Severidad: ALTA (inconsistencia notable)

| ID | Modulo | Problema | Impacto |
|----|--------|----------|---------|
| A1 | databricks_study_module | CSS embebido (409 lineas) no reutilizable | Mantenimiento doble |
| A2 | databricks_study_module | Dark mode incompleto en visuales | Experiencia rota en dark mode |
| A3 | databricks_study_module | CSS duplicado (Journey x2) | Codigo muerto, confuso |
| A4 | patchwork_simulator | Sin dark mode | No respeta preferencia del usuario |
| A5 | Ambos modulos | Sin scrollbar custom | Se ve el scrollbar default del browser |

### Severidad: MEDIA (mejora de calidad)

| ID | Modulo | Problema | Impacto |
|----|--------|----------|---------|
| M1 | databricks_study_module | Border-radius 4-8px vs 8-20px | Cards se ven "mas cuadradas" |
| M2 | databricks_study_module | Sombras single-layer vs multi-layer | Cards sin profundidad premium |
| M3 | databricks_study_module | Sin hover animations en cards | Menos interactividad |
| M4 | patchwork_simulator | Sin responsive design | Roto en mobile |
| M5 | index.html | Estilos inline en timer-display | Mantenimiento |

### Severidad: BAJA (polish)

| ID | Modulo | Problema | Impacto |
|----|--------|----------|---------|
| B1 | databricks_study_module | Sin particulas ni micro-animaciones | Falta "magia" visual |
| B2 | patchwork_simulator | Focus states ausentes | Accesibilidad |
| B3 | Varios | Colores semanticos ligeramente diferentes | Inconsistencia sutil |

---

## 6. PLAN DE MEJORAS POR FASES

### PRINCIPIO RECTOR: No romper nada que funcione

Cada fase es independiente y tiene rollback seguro. Se trabaja modulo por modulo.

---

### FASE 0: BACKUP DE SEGURIDAD (30 minutos)
**Riesgo: NINGUNO**

```
Acciones:
1. Crear backup completo: backup_pre_visual_audit/
2. Copiar: databricks_study_module.html, patchwork_simulator.html, styles.css, index.html
3. Documentar estado actual con screenshots
```

**Criterio de exito:** Backup verificado y restaurable.

---

### FASE 1: UNIFICACION DE TOKENS (2-3 horas)
**Riesgo: BAJO | Impacto: ALTO**
**Resuelve:** C2, C3, A1, A5, M1, M2

#### 1.1 Crear archivo compartido: `design-tokens.css`

Extraer las CSS custom properties de styles.css a un archivo reutilizable que AMBOS modulos puedan importar:

```css
/* design-tokens.css — Tokens compartidos del Data Dojo Design System */
:root {
  /* Tipografia */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Paleta Principal (Blue-Violet) */
  --dojo-primary: #4f6ef7;
  --dojo-primary-hover: #3b5ae0;
  --dojo-primary-light: rgba(79, 110, 247, 0.12);
  --dojo-primary-glow: rgba(79, 110, 247, 0.25);
  --dojo-violet: #7c3aed;
  --dojo-gradient: linear-gradient(135deg, #4f6ef7 0%, #7c3aed 100%);

  /* Superficies */
  --dojo-bg: #f1f5f9;
  --dojo-card: #ffffff;
  --dojo-border: #e2e8f0;
  --dojo-text: #1e293b;
  --dojo-muted: #64748b;
  --dojo-surface: #ffffff;

  /* Semanticos */
  --dojo-success: #22c55e;
  --dojo-danger: #ef4444;
  --dojo-warning: #f59e0b;

  /* Radius */
  --dojo-radius-sm: 8px;
  --dojo-radius-md: 12px;
  --dojo-radius-lg: 16px;

  /* Sombras */
  --dojo-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.04);
  --dojo-shadow-lg: 0 4px 12px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.06);

  /* Transiciones */
  --dojo-ease: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] {
  --dojo-bg: #0f172a;
  --dojo-card: #1e293b;
  --dojo-border: #334155;
  --dojo-text: #e2e8f0;
  --dojo-muted: #94a3b8;
  --dojo-surface: #1e293b;
  --dojo-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.15);
}
```

#### 1.2 Actualizar databricks_study_module.html

Reemplazar las variables CSS embebidas para usar los tokens del Dojo, MANTENIENDO un acento Databricks como color secundario contextual:

```css
/* ANTES (actual) */
--primary: #FF3621;
--bg-body: #f3f2f1;
--text-main: #323130;

/* DESPUES (propuesto) */
--primary: var(--dojo-primary);        /* Blue-violet del Dojo */
--accent-brand: #FF3621;               /* Databricks solo como acento decorativo */
--bg-body: var(--dojo-bg);
--bg-surface: var(--dojo-card);
--text-main: var(--dojo-text);
--text-sub: var(--dojo-muted);
--border: var(--dojo-border);
--shadow: var(--dojo-shadow);
```

#### 1.3 Agregar Inter como fuente en databricks_study_module.html

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Y cambiar:
```css
/* ANTES */
body { font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }

/* DESPUES */
body { font-family: var(--font-family); -webkit-font-smoothing: antialiased; }
```

---

### FASE 2: ALINEACION VISUAL DEL STUDY MODULE (3-4 horas)
**Riesgo: MEDIO-BAJO | Impacto: ALTO**
**Resuelve:** C1, M3, B1, A3

#### 2.1 Header del Study Module con estilo Dojo

Agregar gradiente dark slate al header (como el principal):
```css
header {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
```

#### 2.2 Sidebar con estilo refinado

```css
aside {
  background: var(--dojo-card);
  border-right: 1px solid var(--dojo-border);
}
.nav-category.active {
  background: linear-gradient(135deg, #4f6ef7 0%, #7c3aed 100%);  /* Gradiente Dojo */
  color: #fff;
  box-shadow: 0 2px 8px rgba(79, 110, 247, 0.3);
}
```

#### 2.3 Topic cards con hover premium

```css
.topic-item {
  border-radius: var(--dojo-radius-lg);
  box-shadow: var(--dojo-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.topic-item:hover {
  transform: translateY(-4px) translateX(5px);
  box-shadow: var(--dojo-shadow-lg);
  border-color: rgba(79, 110, 247, 0.2);
}
```

#### 2.4 Big title con estilo Dojo

```css
.big-title {
  background: linear-gradient(135deg, #4f6ef7, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}
```

#### 2.5 Acento Databricks como decoracion contextual

Mantener `#FF3621` SOLO en:
- Badges de "Best Fit" en comparadores
- Iconos de la marca Databricks
- Chips/pills de plataforma
- NO como color primario de botones ni navigation

#### 2.6 Eliminar CSS duplicado

Borrar la seccion duplicada del Journey Simulator (lineas ~374-408 son copia exacta de ~338-372).

#### 2.7 Custom scrollbar

Agregar al CSS del study module:
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
```

---

### FASE 3: PATCHWORK SIMULATOR INTEGRATION (2-3 horas)
**Riesgo: MEDIO-BAJO | Impacto: MEDIO**
**Resuelve:** C4, A4, M4

#### 3.1 Importar tokens compartidos

```html
<link rel="stylesheet" href="design-tokens.css">
```

#### 3.2 Reemplazar variables locales

```css
/* ANTES */
--accent: #ff3621;
--bg: #f6f6f6;
--text: #111827;

/* DESPUES */
--accent: var(--dojo-primary);
--bg: var(--dojo-bg);
--text: var(--dojo-text);
--muted: var(--dojo-muted);
--border: var(--dojo-border);
```

#### 3.3 Agregar dark mode

Heredar automaticamente del token system con [data-theme="dark"].

#### 3.4 Agregar responsive breakpoints

```css
@media (max-width: 768px) {
  .app { grid-template-columns: 1fr; }
  .rail { display: none; } /* o toggle mobile */
}
```

#### 3.5 Agregar header mini del Dojo

Un header pequeno con el gradiente del Dojo y boton "Back to Quiz".

---

### FASE 4: DARK MODE COMPLETO EN VISUALES (2 horas)
**Riesgo: BAJO | Impacto: MEDIO**
**Resuelve:** A2

#### 4.1 Agregar overrides para componentes visuales en dark mode:

```css
[data-theme="dark"] .comp-btn.active { background: var(--dojo-card); }
[data-theme="dark"] .arch-card { background: var(--dojo-card); border-color: var(--dojo-border); }
[data-theme="dark"] .tooltip { background: #1e293b; }
[data-theme="dark"] .rationale-panel { background: rgba(245, 158, 11, 0.08); border-color: rgba(245, 158, 11, 0.2); color: #fbbf24; }
[data-theme="dark"] .mq-opt { background: var(--dojo-card); border-color: var(--dojo-border); }
[data-theme="dark"] .journey-controls { background: var(--dojo-card); }
[data-theme="dark"] .j-node { background: var(--dojo-card); }
[data-theme="dark"] .patch-platform { background: var(--dojo-card); }
[data-theme="dark"] .patch-dropzone { background: var(--dojo-surface); }
[data-theme="dark"] .patch-metric-card { background: var(--dojo-card); }
```

---

### FASE 5: MICRO-ANIMACIONES Y POLISH (2-3 horas)
**Riesgo: BAJO | Impacto: MEDIO**
**Resuelve:** B1, B3, M5

#### 5.1 Agregar transiciones premium al Study Module

```css
/* Flashcard flip con ease mas elegante */
.flashcard-inner { transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }

/* Topic items con stagger animation */
.topic-item { animation: slideUp 0.3s ease-out backwards; }
.topic-item:nth-child(1) { animation-delay: 0.05s; }
.topic-item:nth-child(2) { animation-delay: 0.10s; }
/* ... etc */

/* Hover glow en nav-category activo */
.nav-category.active { animation: subtlePulse 2s infinite; }
```

#### 5.2 Mover estilos inline a CSS

Mover los `style=""` de index.html (timer-display, etc.) a styles.css.

#### 5.3 Unificar colores semanticos exactos

Alinear los 3 modulos a los mismos hex exactos:
- Success: #22c55e (no #22a745 ni #16a34a)
- Danger: #ef4444 (no #dc2626)
- Warning: #f59e0b (no #d97706)

---

### FASE 6: ACCESIBILIDAD Y RESPONSIVE (2 horas)
**Riesgo: BAJO | Impacto: MEDIO**
**Resuelve:** B2, M4

#### 6.1 Focus states en todos los botones

```css
.btn:focus-visible, .nav-btn:focus-visible, .nav-category:focus-visible {
  outline: 2px solid var(--dojo-primary);
  outline-offset: 2px;
}
```

#### 6.2 Responsive para visuales

```css
@media (max-width: 1024px) {
  .comp-grid { grid-template-columns: 1fr; }
  .wheel-layout { flex-direction: column; }
  .tradeoff-panel { grid-template-columns: 1fr; }
  .patch-layout { grid-template-columns: 1fr; }
}
```

#### 6.3 Roles ARIA basicos

```html
<aside role="navigation" aria-label="Study topics">
<main role="main">
<button aria-label="Previous topic" ...>
```

---

## 7. RECOMENDACIONES DE FRAMEWORKS Y HERRAMIENTAS

### 7.1 RECOMENDACION: NO migrar a un framework

**Razon:** La app funciona bien con vanilla HTML/CSS/JS. Migrar a React, Vue o Svelte:
- Romperia TODO el codigo existente
- Agregaria complejidad innecesaria para una app educativa
- Aumentaria el bundle size (actualmente ~0 dependencias JS framework)
- No resolveria los problemas visuales (que son puramente CSS)

### 7.2 Herramientas SI recomendadas

| Herramienta | Proposito | Esfuerzo | Beneficio |
|-------------|-----------|----------|-----------|
| **CSS Custom Properties (ya las usan)** | Tokens compartidos | Bajo | Alto |
| **PostCSS + cssnano** | Minificar CSS para produccion | Bajo | Medio |
| **Lighthouse CI** | Auditar performance y accesibilidad | Bajo | Alto |
| **Stylelint** | Linting de CSS para mantener consistencia | Bajo | Alto |
| **Live Server (VS Code)** | Hot reload durante desarrollo | Ya lo tienen | -- |

### 7.3 Librerias CSS opcionales (solo si se quiere escalar)

| Libreria | Usar para | No usar para |
|----------|-----------|--------------|
| **Open Props** (open-props.style) | Tokens predefinidos tipo Tailwind en CSS vanilla | Reemplazar el sistema actual |
| **Animate.css** | Animaciones predefinidas para flashcards/transitions | Todo — solo donde haga falta |
| **Chart.js** o **D3.js** | Si se agregan graficas de progreso interactivas | Los visuales actuales (ya funcionan bien) |

### 7.4 Herramientas de testing visual

| Herramienta | Uso |
|-------------|-----|
| **Percy.io** o **Chromatic** | Screenshot testing automatizado para detectar regresiones visuales |
| **BrowserStack** | Testing cross-browser (el CSS actual depende de webkit scrollbar) |
| **axe DevTools** | Auditar accesibilidad en browser |

### 7.5 PWA Improvements (opcional, futuro)

| Mejora | Descripcion |
|--------|-------------|
| **Workbox** | Reemplazar el service worker manual con estrategias de cache mas robustas |
| **Web App Manifest icons** | Agregar iconos en multiples resoluciones |

---

## 8. GUIA DE IMPLEMENTACION SEGURA

### Reglas de Oro

1. **NUNCA editar styles.css y databricks_study_module.html en el mismo commit** — si algo se rompe, el rollback es quirurgico.

2. **Testear cada fase en ambos temas** (light y dark) antes de avanzar a la siguiente.

3. **El color #FF3621 de Databricks NO desaparece** — se reposiciona como acento de marca contextual, no como primario de UI.

4. **No tocar script.js en las fases visuales** — los cambios son puramente CSS/HTML.

5. **Usar el navegador DevTools para validar** cada cambio CSS antes de guardarlo.

### Orden de Prioridad Recomendado

```
SEMANA 1: Fase 0 (backup) + Fase 1 (tokens) + Fase 2 (study module)
SEMANA 2: Fase 3 (patchwork) + Fase 4 (dark mode)
SEMANA 3: Fase 5 (polish) + Fase 6 (accesibilidad)
```

### Checklist de Validacion por Fase

Para cada fase, verificar:
- [ ] La pantalla de inicio (Dojo) sigue identica
- [ ] El quiz funciona correctamente
- [ ] El study module renderiza los topics
- [ ] Las flashcards abren y giran
- [ ] Los visuales (comparator, wheel, journey) funcionan
- [ ] El patchwork simulator funciona
- [ ] El dark mode funciona en todos los modulos
- [ ] El perfil y XP se muestran correctamente
- [ ] Mobile (768px) no esta roto

---

## RESUMEN FINAL

### Lo que esta BIEN y NO se debe tocar:
- Pantalla de inicio Dojo (identidad de marca perfecta)
- Sistema de quiz (glassmorphism, animaciones, responsive)
- Gamificacion (belts, XP, certificates)
- Contenido educativo (3000+ preguntas, flashcards, visuales)
- PWA y service worker

### Lo que NECESITA alineacion urgente:
- `databricks_study_module.html` — paleta, tipografia y CSS embebido
- `patchwork_simulator.html` — paleta, dark mode ausente

### Lo que MEJORARIA la experiencia:
- Tokens CSS compartidos (design-tokens.css)
- Dark mode completo en visuales
- Micro-animaciones en study module
- Responsive en visuales y patchwork
- Focus states para accesibilidad

### Resultado esperado tras las 6 fases:
Un usuario que entra al Dojo, toma un quiz, estudia con flashcards, explora visuales y usa el patchwork simulator deberia sentir que NUNCA salio de la misma aplicacion. La temperatura de color, la tipografia, los border-radius, las sombras y las animaciones seran coherentes en el 100% de la experiencia.

---

*Documento generado el 2026-03-31 como parte de la auditoria visual de The Data Dojo.*
*Autor: Claude Code — Asistente de Ingenieria*
