# 01. Zero-Shot Prompting

> **Módulo 2:** Prompt Engineering Techniques  
> **Tema:** Generación de contenido sin ejemplos previos  

---

## 1. Definición y Principio Operativo

El **Zero-Shot Prompting** (prompting de cero disparos) es la técnica fundamental en la que se le solicita al asistente de IA que complete una tarea suministrando únicamente instrucciones claras, directivas y contexto, **sin proporcionar ningún ejemplo previo** de entrada-salida.

Se fundamenta en la capacidad innata del modelo de lenguaje fundacional para comprender la semántica de la instrucción y generalizar sobre conceptos aprendidos durante su preentrenamiento masivo.

```
┌────────────────────────────────────────────────────────┐
│  [Prompt del Usuario]                                  │
│  Instrucción Directa + Contexto                        │
│  (CERO ejemplos de demostración)                       │
│                                                        │
│  ───────────► [LLM Fundacional] ───────────► [Salida]  │
└────────────────────────────────────────────────────────┘
```

---

## 2. ¿Cuándo es Ideal el Zero-Shot Prompting?

Zero-Shot es la técnica predeterminada y más eficiente en los siguientes escenarios:

1. **Solicitudes Directas y Fácticas:** Tareas donde el formato y el estilo no son críticos (ej. responder preguntas técnicas estándar, extraer definiciones o explicar conceptos).
2. **Resúmenes Estándar:** Sintetizar correos, artículos o transcripciones de reuniones sin requisitos de formato hiperespecíficos.
3. **Clasificación en Categorías Obvias:** Clasificar tickets de soporte en categorías bien delimitadas (ej. `Facturación`, `Falla Técnica`, `Ventas`).
4. **Traducción y Reformulación Lingüística:** Traducir documentación técnica o simplificar la redacción para audiencias generales.
5. **Generación Rápida de Borradores:** Crear esquemas iniciales, agendas de reunión o listas de verificación preliminares.

---

## 3. Ventajas y Limitaciones

### Ventajas:
- **Bajo Consumo de Tokens:** Al no incluir ejemplos previos extensos, reduce drásticamente el uso de tokens de entrada y el costo de inferencia.
- **Velocidad y Agilidad:** Permite al usuario interactuar de manera fluida y conversacional sin invertir tiempo en curar pares de entrenamiento o demostraciones.
- **Simplicidad:** Ideal para automatizaciones iniciales en pipelines de datos y consultas interactivas con asistentes como Databricks Assistant.

### Limitaciones:
- **Sensibilidad al Estilo:** Si la empresa requiere un tono corporativo muy particular, una jerga técnica propietaria o un esquema de salida JSON rígido, Zero-Shot suele desviarse con frecuencia.
- **Variabilidad:** Puede producir respuestas con formatos ligeramente distintos entre ejecuciones sucesivas a menos que la instrucción sea extraordinariamente rígida.

---

## 4. Ejemplos Prácticos en Entornos de Datos

### Ejemplo 1: Clasificación de Errores de Pipeline SQL
```markdown
### INSTRUCCIÓN:
Clasifica el siguiente mensaje de error de un job de Databricks en una de las siguientes tres categorías:
- SINTAXIS_SQL
- PERMISOS_TABLA
- MEMORIA_CLUSTER

Mensaje de error:
"AnalysisException: [TABLE_OR_VIEW_NOT_FOUND] The table or view `analytics_prod`.`finance`.`q3_revenue` cannot be found. Verify the spelling and correctness of the schema and catalog."

Categoría:
```
*Salida esperada:* `PERMISOS_TABLA` o `SINTAXIS_SQL` (dependiendo de la existencia de la tabla).

---

### Ejemplo 2: Resumen Ejecutivo Factual
```markdown
### CONTEXTO:
A continuación se presenta el log de ejecución de la actualización de un Delta Live Tables (DLT):
- Duración total: 14 minutos 32 segundos.
- Registros procesados en capa Bronce: 1,450,200.
- Registros válidos en capa Plata: 1,448,010 (99.85% de calidad de datos).
- Filas descartadas por violación de regla de expectativa 'expect_valid_customer_id': 2,190.

### INSTRUCCIÓN:
Genera un resumen ejecutivo de 3 oraciones para el equipo de gobernanza de datos destacando el porcentaje de calidad y las filas que no cumplieron las expectativas.
```
