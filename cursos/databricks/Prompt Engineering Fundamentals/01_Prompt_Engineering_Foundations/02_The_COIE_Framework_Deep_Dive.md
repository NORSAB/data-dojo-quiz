# 02. The COIE Framework Deep Dive

> **Módulo 1:** Introduction to Prompt Engineering  
> **Tema Central:** El marco estructural COIE (*Context, Outcome, Instruction, Example*)  

---

## 1. Introducción al Marco COIE

El marco **COIE** es la metodología estándar recomendada por Databricks para estructurar prompts empresariales de alta efectividad. Su propósito es eliminar la ambigüedad y suministrar al asistente de IA todos los elementos necesarios para generar respuestas exactas, relevantes y listas para producción al primer intento.

Las cuatro siglas representan:

```
┌────────────────────────────────────────────────────────┐
│  C  - Context      (El trasfondo y situación actual)   │
│  O  - Outcome      (El objetivo concreto y formato)    │
│  I  - Instruction  (Las acciones y directrices paso a paso) │
│  E  - Example      (Muestras de entrada y salida esperadas) │
└────────────────────────────────────────────────────────┘
```

---

## 2. Los Cuatro Pilares del Marco COIE

### 1. C — Context (Contexto)
- **Propósito:** Proporciona los antecedentes indispensables, el rol del usuario, la audiencia objetivo y los datos relevantes del dominio.
- **Qué incluir:**
  - Quién eres y a quién te diriges (ej. *"Soy un analista de datos redactando un informe para el Director Financiero"*).
  - La situación operativa o empresarial (ej. *"Nuestras ventas cayeron un 4% en el trimestre Q3 debido a problemas en la cadena de suministro"*).
  - Documentación relevante, esquemas de tablas o fragmentos de datos.
- **Beneficio:** Evita que el modelo responda de manera genérica o asuma supuestos falsos.

### 2. O — Outcome (Resultado)
- **Propósito:** Define claramente la meta final deseada, el formato de salida y el tono esperado.
- **Qué incluir:**
  - Formato específico: Tabla Markdown, lista con viñetas, esquema JSON, correo electrónico formal, resumen ejecutivo de 3 párrafos.
  - Tono y estilo: Técnico, persuasivo, conciso, apto para ejecutivos C-Level.
  - Nivel de profundidad y restricciones de extensión (ej. *"Máximo 200 palabras", "Sin explicaciones introductorias"*).

### 3. I — Instruction (Instrucción)
- **Propósito:** Especifica las órdenes precisas, los pasos secuenciales que el modelo debe seguir y las restricciones negativas (*lo que NO debe hacer*).
- **Qué incluir:**
  - Verbos de acción imperativos (*Extrae, Clasifica, Compara, Calcula, Sintetiza*).
  - Pasos lógicos numerados.
  - Restricciones negativas (ej. *"No uses lenguaje redundante", "No inventes datos que no figuren en el contexto"*).

### 4. E — Example (Ejemplo)
- **Propósito:** Suministra uno o varios ejemplos concretos del resultado esperado (*Few-Shot prompting*).
- **Qué incluir:**
  - Un par típico `Entrada: ... -> Salida: ...`.
  - Muestra visual del formato exacto o vocabulario corporativo esperado.
- **Beneficio:** Reduce drásticamente la tasa de error en tareas con esquemas estrictos (ej. extracción de entidades, clasificación de tickets).

---

## 3. Comparativa: Prompt Débil vs. Prompt COIE

### ❌ Ejemplo de Prompt Débil (Sin estructura)
```text
Escribe un correo a mi jefe sobre los problemas con los datos clínicos que encontramos en el análisis de ayer.
```
*Problemas:* No hay contexto sobre el problema específico, no indica el tono, no define el formato ni qué se espera que el jefe haga con la información.

---

### ✅ Ejemplo de Prompt Aplicando COIE
```markdown
### CONTEXT:
Soy un Ingeniero de Datos en el equipo de analítica biomédica. Ayer realizamos una auditoría de ingesta sobre el conjunto de datos del ensayo clínico fase 3 'CardioPulse' y detectamos 142 registros con valores nulos en el biomarcador primario (presión sistólica) y discrepancias de zona horaria entre los sitios de prueba de EE.UU. y Europa.

### OUTCOME:
Un correo electrónico profesional y directo dirigido a la Directora de Ensayos Clínicos (Dra. Elena Gómez). El objetivo es alertar del problema sin causar alarma innecesaria, presentar las dos opciones de remediación disponibles y solicitar una decisión antes de las 3:00 PM.

### INSTRUCTIONS:
1. Redacta el correo con un asunto claro e informativo.
2. Inicia con un resumen ejecutivo de 2 oraciones sobre el hallazgo.
3. Presenta en una lista concisa las 2 opciones de remediación:
   - Opción A: Imputar valores basados en la mediana del paciente en visitas anteriores.
   - Opción B: Solicitar reingreso urgente de datos a los centros hospitalarios antes del cierre de base de datos.
4. Concluye con un llamado a la acción (Call to Action) claro solicitando su aprobación.
5. Mantén un tono formal, técnico y orientado a soluciones.

### EXAMPLE FORMAT:
Asunto: [Alerta de Calidad de Datos] Hallazgos en Auditoría Ensayo CardioPulse - Solicitud de Decisión

Estimada Dra. Gómez:
[Resumen ejecutivo...]
[Opciones...]
[Próximos pasos...]
```

---

## 4. Plantilla Maestra Reutilizable COIE

```markdown
### CONTEXT:
[Describe tu rol, la audiencia, el trasfondo del negocio y los datos relevantes]

### OUTCOME:
[Define el entregable específico, formato (tabla/JSON/email), tono y restricciones de extensión]

### INSTRUCTIONS:
1. [Paso de acción 1]
2. [Paso de acción 2]
3. [Restricciones o lo que debe evitarse]

### EXAMPLES (Opcional pero recomendado para formato estricto):
Entrada: [Ejemplo de entrada]
Salida: [Ejemplo exacto de la salida deseada]
```
