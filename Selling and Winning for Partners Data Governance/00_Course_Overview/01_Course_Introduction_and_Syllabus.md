# 01. Introducción al Curso y Sílabo Oficial

> **Módulo:** 00_Course_Overview  
> **Curso:** (Presales) Selling & Winning for Partners: Data Governance  
> **ID:** `4727` | **Código:** `SLEN-PART-SLP-SWPDG-ENG-V1`  
> **Rol Profesional Asignado:** **Data Engineer** (*Partner Sales Enablement*)  
> **Enfoque Técnico:** Posicionamiento preventa, arquitectura de gobernanza y generación de servicios consultivos de alto valor.

---

## 1. Contexto y Propósito del Curso

En el panorama actual de plataformas de datos y analítica, la adopción masiva de Inteligencia Artificial Generativa, analítica de autoservicio y arquitecturas multi-nube ha intensificado la competencia entre hyperscalers, data warehouses tradicionales y catálogos especializados.

Para las firmas consultoras asociadas a Databricks (Partners), el riesgo más común es caer en un **posicionamiento genérico ("me too")** tratando a la gobernanza como un simple "catálogo de datos" cosmético. Este programa de acreditación en preventa provee las directrices estratégicas, arquitectónicas y comerciales para que los **Data Engineers** y líderes de práctica de datos se posicionen como **Asesores Estratégicos (Strategic Advisors)**.

El objetivo central es conectar las capacidades nativas de **Unity Catalog**, **Lakehouse Federation**, **Delta Sharing**, **Clean Rooms**, **Lakehouse Monitoring** y **System Tables** con los objetivos de negocio más apremiantes de los clientes corporativos.

---

## 2. Metadatos y Especificaciones Técnicas

| Parámetro | Detalle Oficial |
|---|---|
| **Plataforma Educativa** | Databricks Customer & Partner Academy (Docebo LMS) |
| **Audiencia Objetivo** | Data Engineers, Solutions Architects, Presales Consultants, Data Practice Leads |
| **Categoría Temática** | Partner Sales / Presales Enablement |
| **Acreditación Final** | `PT - Selling & Winning for Partners: Data Governance` (Accredible) |
| **Requisito de Aprobación** | 100% navegación de lecciones interactivas + 80% mínimo en Quiz Oficial (Obtenido: 100%, 50/50 pts) |
| **Tiempo de Consumo Estimado** | 60 minutos |

---

## 3. Desglose del Sílabo Oficial

### Lección 1: Introduction and Overview
- **Visión General de Gobernanza con Databricks:** La promesa de Unity Catalog como solución abierta, unificada e inteligente a escala empresarial.
- **Diferenciadores Fundamentales:** Centralización de permisos, linaje columna a columna automatizado, descubrimiento inteligente y auditoría exhaustiva.
- **Por qué tomar este curso:** Dotar al partner de herramientas para ganar nuevos proyectos de datos e IA, generar horas facturables y diferenciar su práctica en el mercado de gobierno de datos.

### Lección 2: The Data Governance Opportunity
- **¿Qué es Data Governance en la Era de IA?:** Supervisión holística del ciclo de vida de datos y modelos: catálogos, seguridad, linaje, etiquetas, calidad y compartición.
- **Aceleración de Adopción y Valor:** Marcos de seguridad escalables (RBAC/ABAC, row/column masking), modernización sin migraciones forzadas, gobernanza de modelos y código de IA, y monetización B2B.
- **Customer Personas de Databricks:** 
  - *Buyers:* CDO, CIO, VP of Data Platform.
  - *Influencers:* Data Platform Leads, Compliance Officers, Data Architects, Governance Managers.
  - *Practitioners:* Data Stewards, Data Engineers, ML Engineers.
- **Los 4 Customer Value Drivers:**
  1. *Reduce Platform Costs and Complexity.*
  2. *Accelerate Innovation.*
  3. *Mitigate Risk and Ensure Compliance.*
  4. *Collaborate and Monetize the Value of Data.*
- **Transición: Del Estado Actual (Current State) al Estado Futuro (Future State):** Barreras de fragmentación, vendor lock-in y falta de inteligencia vs. catálogo unificado, APIs abiertas e inteligencia integrada.
- **Rol de Asesor Estratégico:** Adopción de una postura consultiva proactiva basada en roadmaps de crecimiento.
- **Desafíos de GenAI en Gobernanza:** Privacidad, calidad, clasificación, linaje, integración y brecha de habilidades (*skills gap*).

### Lección 3: Databricks Features, Capabilities, and Proof Points
- **Por qué importa la diferenciación:** Evitar el posicionamiento genérico y demostrar valor cuantificable en entornos de producción.
- **Capacidades Técnicas Nucleares:**
  - *Unity Catalog:* Gobernanza centralizada para tablas, Volumes, modelos y métricas.
  - *Lakehouse Federation:* Consulta y gobernanza in-place en Postgres, Snowflake, Redshift, BigQuery, Glue y Hive Metastore sin mover datos.
  - *Delta Sharing:* Protocolo abierto y seguro para compartir datos sin replicación (zero-copy).
  - *Clean Rooms:* Colaboración segura multiparte y computación serverless para análisis sobre datos combinados sin exponer datasets crudos.
  - *Lakehouse Monitoring:* Supervisión de deriva y calidad con dashboards automáticos.
  - *System Tables:* Telemetría y auditoría de uso para medir adopción y valor.
  - *Metric Views:* Definición centralizada de métricas de negocio.
  - *Volume Governance:* Gobernanza de archivos no estructurados (imágenes, documentos, audio).
  - *Aislamiento de Computación y Lakeguard:* Cumplimiento estricto en clusters compartidos.
- **Casos de Éxito Empresariales:**
  - **PepsiCo:** Consolidación de 6 PB, 1,500+ usuarios, reducción del 30% en onboarding, >50 tablas restringidas con row/column policies.
  - **Skyscanner:** 15–20 PB gobernados con Unity Catalog, simplificación de auditorías SOX/GDPR.
  - **Block:** Gobernanza unificada en 12+ PB y cientos de usuarios activos.
  - **GovTech Singapore:** Infraestructura moderna con controles finos para agencias públicas.
  - **Kraken (Octopus Energy Group):** Delta Sharing para cumplimiento regulatorio multi-nube.

### Lección 4: Summary and Next Steps
- Síntesis de aprendizajes clave y lista de verificación del partner para preventa.
- Examen oficial de acreditación (Quiz de 10 preguntas).

---

## 4. Perfil del Rol: Data Engineer en Preventa de Gobernanza

El rol de **Data Engineer** en este contexto trasciende la escritura de scripts ETL o pipelines de procesamiento. Se centra en:
1. Diseñar arquitecturas de datos seguras y gobernadas desde el origen.
2. Implementar políticas de control de acceso a nivel de fila y columna directamente en SQL.
3. Habilitar linaje automatizado de extremo a extremo (desde ingestión hasta dashboards y modelos).
4. Configurar federación de consultas hacia almacenes externos sin duplicación de almacenamiento.
5. Proveer telemetría técnica clara a directores de plataforma para respaldar auditorías y compliance.
