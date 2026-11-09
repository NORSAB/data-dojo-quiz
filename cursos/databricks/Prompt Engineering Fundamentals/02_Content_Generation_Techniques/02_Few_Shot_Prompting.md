# 02. Few-Shot Prompting

> **Módulo 2:** Prompt Engineering Techniques  
> **Tema:** Guiar tono, formato y estructura mediante ejemplos demostrativos  

---

## 1. Definición y Principio Operativo

El **Few-Shot Prompting** (prompting de pocos disparos) consiste en incluir en el prompt **uno o varios ejemplos concretos** (generalmente entre 1 y 3 pares de entrada/salida representativos) antes de presentar la tarea real que el modelo debe resolver.

Esta técnica explota la capacidad de **aprendizaje en contexto (*in-context learning*)** de los modelos de lenguaje: el LLM detecta los patrones implícitos de tono, estructura sintáctica, vocabulario y formato presentes en los ejemplos y los replica con extrema fidelidad en la nueva entrada.

```
┌────────────────────────────────────────────────────────┐
│  [Instrucción General]                                 │
│  "Convierte las solicitudes de datos en queries SQL"   │
│                                                        │
│  [Ejemplo 1]                                           │
│  Entrada: "Muestra usuarios activos de Honduras"       │
│  Salida: SELECT * FROM users WHERE country = 'HN'...   │
│                                                        │
│  [Ejemplo 2]                                           │
│  Entrada: "Cuenta órdenes pendientes por cliente"      │
│  Salida: SELECT client_id, COUNT(*) FROM orders...     │
│                                                        │
│  [Nueva Entrada a Procesar]                            │
│  Entrada: "Lista los productos sin stock en almacén 4" │
│  Salida: ? ──────────────────────────────────────────► │
└────────────────────────────────────────────────────────┘
```

---

## 2. ¿Cómo Mejoran los Ejemplos la Efectividad del Prompt?

El beneficio central de los ejemplos es que **muestran en lugar de solo explicar**:
1. **Modelado del Tono y Voz:** Si la empresa requiere un estilo sutil, empático o altamente técnico, un ejemplo transmite matices que 500 palabras de instrucciones textuales no logran comunicar con precisión.
2. **Adherencia Rigurosa a la Estructura:** Garantiza que las claves de un objeto JSON, el orden de las columnas de una tabla o las etiquetas de categorización se mantengan perfectamente estables entre llamadas.
3. **Manejo de Casos de Borde:** Muestra al modelo exactamente cómo reaccionar ante datos faltantes, errores o entradas ambiguas (ej. `"Si no se especifica el año, utiliza por defecto el año en curso"`).
4. **Alternativa Económica al Fine-Tuning:** Permite adaptar el comportamiento del modelo a requisitos específicos de la organización sin incurrir en los costos computacionales, tiempos de ingeniería ni mantenimiento de un reentrenamiento de pesos.

---

## 3. Guía para la Selección de Ejemplares (*Exemplar Engineering*)

Para maximizar el impacto del Few-Shot sin saturar la ventana de contexto:

| Regla de Oro | Explicación |
|---|---|
| **Calidad sobre Cantidad** | De 1 a 3 ejemplos excelentes superan a 10 ejemplos mediocres o contradictorios. |
| **Diversidad de Casos** | Si clasificas sentimientos o categorías, incluye al menos un ejemplo de cada clase esperada. |
| **Consistencia de Formato** | Utiliza exactamente los mismos delimitadores y etiquetas en todos los ejemplos (ej. `Entrada:` / `Salida:`). |
| **Evitar Sesgos Involuntarios** | No pongas siempre la misma opción como respuesta correcta en todos los ejemplos, ya que el modelo podría sobreajustarse al patrón de posición. |

---

## 4. Ejemplo Práctico: Extracción de Metadatos de Negocio en JSON

### Prompt con Few-Shot:
```markdown
Eres un asistente especializado en gobernanza de datos para Databricks Unity Catalog. Tu tarea es extraer el catálogo, esquema, tabla y clasificación de privacidad a partir de descripciones de requerimientos de usuarios. Responde ÚNICAMENTE con el objeto JSON estandarizado.

### EJEMPLO 1:
Requerimiento: "Necesitamos auditar la tabla de transacciones bancarias del esquema pagos dentro del catálogo finanzas_prod, contiene números de tarjeta."
Salida:
{
  "catalog": "finanzas_prod",
  "schema": "pagos",
  "table": "transacciones",
  "data_classification": "PCI-DSS_CRITICAL"
}

### EJEMPLO 2:
Requerimiento: "Revisa la tabla temporal de métricas de marketing en el catálogo sandbox_dev bajo el esquema campañas_2026."
Salida:
{
  "catalog": "sandbox_dev",
  "schema": "campañas_2026",
  "table": "metricas",
  "data_classification": "INTERNAL_NON_CONFIDENTIAL"
}

### NUEVA TAREA:
Requerimiento: "Queremos conectar un dashboard a la tabla expedientes del esquema clientes en el catálogo legal_corporativo. Hay datos con números de seguro social y teléfonos de contacto."
Salida:
```

*Salida generada por el LLM:*
```json
{
  "catalog": "legal_corporativo",
  "schema": "clientes",
  "table": "expedientes",
  "data_classification": "PII_CONFIDENTIAL"
}
```
*Observación:* Gracias a los ejemplos, el modelo adoptó automáticamente el formato JSON puro, dedujo la clave de clasificación correcta (`PII_CONFIDENTIAL`) y mantuvo los nombres exactos de las propiedades.
