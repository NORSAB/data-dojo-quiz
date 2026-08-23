# Propuesta de Valor y Plan Docente: Certificación Databricks Data Analyst

Esta propuesta presenta una estrategia de capacitación optimizada para el equipo técnico. A diferencia de un temario lineal convencional, este plan está diseñado a partir de una **matriz de brecha de conocimiento** extraída directamente del desempeño real del simulador. 

---

## 1. Análisis de Brecha y Propuesta de Valor

Al analizar el banco de 300 preguntas del simulador y el desempeño histórico del equipo por dominios, se identifican dos realidades críticas:
1. El equipo posee un dominio sólido (>75%) en la arquitectura general de la plataforma y en la sintaxis SQL básica.
2. Existen vulnerabilidades importantes (<70%) en la manipulación y optimización de tablas, modelado analítico, gobernanza de datos y configuraciones específicas de dashboards e inteligencia artificial (AI/BI Genie).

### Reorganización Estratégica del Tiempo (24 Clases)
Para maximizar la tasa de aprobación, reducimos las horas en los dominios fuertes y duplicamos la profundidad y los talleres prácticos en los dominios donde el simulador castiga con escenarios complejos.

```
Distribución de Sesiones (24 Horas)
┌───────────────────────────────────────────────┐
│ Dominios Fuertes (20% del tiempo - 5 horas)   │
│ - Plataforma (D1) y Sintaxis SQL Base (D4)   │
├───────────────────────────────────────────────┤
│ Dominios Críticos (80% del tiempo - 19 horas) │
│ - Gestión Delta, Optimización y Análisis (D2,D5)│
│ - Modelado Gold, Dashboards e IA (D8, D6, D7)  │
│ - Gobernanza y Seguridad de Datos (D9)        │
└───────────────────────────────────────────────┘
```

---

## 2. Mapa Estratégico de Distribución de Clases

| Dominio del Examen | % Acierto Promedio | Prioridad en Examen | Clases Asignadas | Enfoque de la Propuesta de Valor |
| :--- | :---: | :---: | :---: | :--- |
| **D1. Plataforma Databricks** | 80% | Media | **2 Clases** | Repaso rápido de conceptos clave de Control/Data Plane y catálogo de samples. |
| **D4. Executing Queries (Básico)** | 77% | Alta | **3 Clases** | Consolidación de joins y agregaciones estándar. Foco en no perder puntos fáciles. |
| **D2. Managing Data (Delta)** | 66% | Alta | **3 Clases** | Profundización en tablas Managed vs External y la física del Delta Log. |
| **D5. Analyzing Queries (Performance)**| 71% | Alta | **3 Clases** | Análisis del Query Profile, Spill to Disk, Liquid Clustering y comportamiento de la caché. |
| **D6. Dashboards & Visualizations** | 57% | Muy Alta | **3 Clases** | Parametrización interactiva, refrescos automáticos y lógica de alertas. |
| **D7. AI/BI Genie Spaces** | 60% | Muy Alta | **3 Clases** | Curación avanzada con Trusted Assets y metadatos de Unity Catalog. |
| **D8. Data Modeling (Gold Layer)** | 66% | Alta | **3 Clases** | Diseño de esquemas en estrella, constraints informativos y Data Vault en Gold. |
| **D9. Securing Data (Gobernanza)** | 75% | Alta | **3 Clases** | Namespace de 3 niveles, Row Filters y Column Masks dinámicos. |
| **Simulacros y Cierre** | N/A | Crítica | **2 Clases** | Simulacros intensivos de tiempo real basados en el bloque final de preguntas. |

---

## 3. Plan Detallado de las 24 Clases

### Módulo I: Fundamentos y Consolidación de SQL (5 Clases)
*Objetivo: Asegurar los conceptos base de la plataforma y asegurar los puntos de sintaxis tradicional.*

- **Clase 1: Inducción y Metodología de Descarte**
  - Dinámica: Cómo analizar las justificaciones del simulador para descartar distractores rápido.
  - Escenario: Anatomía de preguntas con múltiples respuestas correctas en apariencia.
- **Clase 2: Arquitectura del Lakehouse y Personas**
  - Dinámica: Control Plane (Databricks) vs Data Plane (Cloud del cliente). Dónde residen los datos físicos.
  - Escenario: Preguntas trampa de almacenamiento de datos de clientes.
- **Clase 3: SQL de Examen I: Joins y Combinaciones Especiales**
  - Dinámica: Combinación de tablas complejas, llaves compuestas e implicaciones de performance.
  - Escenario: Resolviendo joins con valores nulos y duplicados.
- **Clase 4: SQL de Examen II: Agregaciones y Ventanas Básicas**
  - Dinámica: Uso de funciones de agregación y el orden lógico de ejecución de consultas SQL.
  - Escenario: Trampas de agrupamiento por alias y el comportamiento de `COUNT(DISTINCT)`.
- **Clase 5: CTAS y Objetos de Sesión**
  - Dinámica: Creación de tablas mediante `CREATE TABLE AS SELECT` y uso de vistas temporales de sesión.
  - Escenario: Comportamiento de las tablas temporales tras el cierre de sesión del analista.

### Módulo II: Gestión Físico-Lógica de Tablas (Delta Lake) (6 Clases)
*Objetivo: Solucionar la brecha de rendimiento en el manejo físico de archivos y su almacenamiento.*

- **Clase 6: Estructura Delta: El Delta Log**
  - Dinámica: Cómo interactúan los archivos JSON del `_delta_log/` con los datos Parquet para dar soporte ACID.
  - Escenario: Qué sucede físicamente en el storage durante una actualización concurrentemente.
- **Clase 7: Tablas Managed vs External**
  - Dinámica: Ciclo de vida de los datos. Impacto de ejecutar `DROP TABLE` en ubicaciones externas y gestionadas.
  - Escenario: Restauración de metadatos de tablas externas eliminadas por error.
- **Clase 8: Ingesta Idempotente con COPY INTO**
  - Dinámica: Sintaxis y configuración de cargas incrementales desde almacenamiento en la nube sin duplicados.
  - Escenario: Cargas interrumpidas a mitad de proceso y verificación de archivos omitidos.
- **Clase 9: Ingesta Continua con Auto Loader**
  - Dinámica: Configuración de `cloudFiles` y uso de `rescuedDataColumn` para evitar la pérdida de tipos de datos incorrectos.
  - Escenario: Ingesta de archivos con columnas nuevas añadidas sobre la marcha (Schema Evolution).
- **Clase 10: Delta Time Travel y RESTORE**
  - Dinámica: Auditoría y consulta de versiones pasadas mediante historial, marcas de tiempo y restores de emergencia.
  - Escenario: Reversión de cargas corruptas de la capa Silver.
- **Clase 11: Mantenimiento Delta: OPTIMIZE, Z-ORDER y Liquid Clustering**
  - Dinámica: Compactación de archivos pequeños y ordenación física de registros en disco. Reemplazo moderno de particiones.
  - Escenario: Resolución del problema de 'archivos pequeños' que ralentiza las consultas de la capa Gold.

### Módulo III: Análisis de Rendimiento y Gobernanza (6 Clases)
*Objetivo: Diagnosticar cuellos de botella de rendimiento y aplicar políticas de seguridad granular.*

- **Clase 12: Diagnóstico con Query History y Query Profile**
  - Dinámica: Lectura del plan de ejecución visual para identificar el Spill to Disk (falta de memoria) y escaneos de tabla completos.
  - Escenario: Optimización de consultas que tardan minutos en ejecutarse en dashboards de producción.
- **Clase 13: El Impacto de VACUUM en el Time Travel**
  - Dinámica: Eliminación de archivos obsoletos y la pérdida colateral de versiones históricas en Delta Lake.
  - Escenario: Fallo de consultas de Time Travel tras una limpieza agresiva de disco.
- **Clase 14: Gobernanza de Datos con Unity Catalog**
  - Dinámica: Navegación de tres niveles (`catalog.schema.table`) y el linaje automático de datos en Catalog Explorer.
  - Escenario: Rastreo del origen de un dato sensible (PII) desde el reporte final hasta la ingesta Bronze.
- **Clase 15: Seguridad Dinámica I: Row Filters**
  - Dinámica: Restringir de forma dinámica las filas visibles de una tabla según el usuario utilizando `current_user()`.
  - Escenario: Filtrado de datos de ventas de modo que los analistas solo vean su propia región geográfica.
- **Clase 16: Seguridad Dinámica II: Column Masks**
  - Dinámica: Enmascaramiento de datos confidenciales (tarjetas, contraseñas, PII) según roles de usuario con `is_member()`.
  - Escenario: Ocultar columnas de salarios para analistas generales mientras permanecen visibles para recursos humanos.
- **Clase 17: Permisos y Ownership de Objetos**
  - Dinámica: Gestión de privilegios (`GRANT`/`REVOKE`) y transferencia de propiedad de catálogos y esquemas.
  - Escenario: Pérdida de acceso a tablas por cambios de propiedad sin permisos en cascada.

### Módulo IV: Visualización, Alertas e IA Conversacional (5 Clases)
*Objetivo: Desarrollar reportes profesionales y configurar interfaces de lenguaje natural eficientes.*

- **Clase 18: Construcción de Dashboards en AI/BI**
  - Dinámica: Estructuración de lienzos analíticos interactivos, widgets dinámicos y uso avanzado de Markdown.
  - Escenario: Diseño de vistas ejecutivas combinando gráficos y tablas en un único reporte.
- **Clase 19: Interactividad y Parámetros en Dashboards**
  - Dinámica: Configuración de parámetros dinámicos mapeados a consultas SQL y optimización de rendimiento con Batch Updates.
  - Escenario: Evitar el refresco constante y costoso del SQL Warehouse al cambiar múltiples filtros en un dashboard.
- **Clase 20: Alertas SQL y Distribución**
  - Dinámica: Automatización de notificaciones basadas en umbrales de negocio. Lógica de evaluación basada en valores por defecto.
  - Escenario: Configuración de alertas de fallos en procesos de ingesta que deben enviar correos cada hora.
- **Clase 21: AI/BI Genie Spaces I: Contexto Semántico**
  - Dinámica: Configuración de espacios conversacionales e implementación de reglas de negocio en lenguaje natural (Domain Instructions).
  - Escenario: Resolver ambigüedades en Genie cuando el usuario pregunta por conceptos de negocio no mapeados directamente en SQL.
- **Clase 22: AI/BI Genie Spaces II: Trusted Assets**
  - Dinámica: Curación avanzada mediante la definición de Trusted Assets para asegurar el cálculo idéntico de KPIs críticos.
  - Escenario: Evitar alucinaciones de la IA al calcular la tasa de retención de clientes mensuales.

### Módulo V: Modelado de Datos y Cierre Técnico (2 Clases)
*Objetivo: Consolidar el diseño analítico y realizar la simulación final.*

- **Clase 23: Modelado Físico y Lógico en Capa Gold**
  - Dinámica: Esquemas en estrella (Fact y Dim). Papel de las restricciones primarias y foráneas informativas en el rendimiento.
  - Escenario: Creación de dimensiones de tiempo y clientes acopladas a la tabla de hechos Gold.
- **Clase 24: Simulacro Blueprint y Readiness**
  - Dinámica: Examen simulado de 45 preguntas en 90 minutos con retroalimentación individual y mapa de calor de errores recurrentes.
  - Escenario: Simulación cronometrada enfocándose en las últimas 60 preguntas del simulador.

---

## 4. Dinámicas Prácticas y Metodología de Clase

Cada una de las clases de dominios críticos implementará una técnica pedagógica de **juego de roles** para forzar la comprensión de los escenarios:

1. **El Rol del Auditor (Clases de Seguridad y Delta)**: El alumno debe inspeccionar la tabla, revisar el linaje de datos y justificar si una consulta cumple con las políticas de privacidad.
2. **El Rol del Optimizador (Clases de Rendimiento y SQL)**: Se presenta una consulta que tarda demasiado o consume exceso de cómputo, y el alumno debe reescribirla usando Query Profile o proponer cambios en el almacenamiento (Z-ORDER / Liquid Clustering).
3. **El Analista Conversacional (Clases de Genie)**: El alumno actúa como curador del modelo conversacional, identificando por qué fallan las consultas generadas por Genie y corrigiéndolas con metadatos.
