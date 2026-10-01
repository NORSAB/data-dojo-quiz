# 01. Unity Catalog y Lakehouse Federation: La Base de Gobernanza Unificada

> **Módulo:** 02_Databricks_Governance_Solutions  
> **Área:** Arquitectura Técnica de Gobernanza y Federación de Datos  
> **Objetivo:** Dominar la propuesta técnica y de valor de Unity Catalog y Lakehouse Federation para gobernar entornos heterogéneos sin requerir migraciones forzadas.

---

## 1. Unity Catalog: El Estándar Unificado y Abierto

**Unity Catalog** es la primera solución de gobernanza de la industria que unifica datos estructurados, semiestructurados y no estructurados, así como modelos de inteligencia artificial, pipelines, herramientas y métricas de negocio bajo un único modelo de seguridad y catálogo.

```
                    ┌────────────────────────────────────────┐
                    │             UNITY CATALOG              │
                    │        (Metastore a Nivel Cuenta)      │
                    └──────────────────┬─────────────────────┘
                                       │
     ┌──────────────────┬──────────────┴─────┬──────────────────┐
     ▼                  ▼                    ▼                  ▼
┌───────────────┐  ┌───────────────┐    ┌───────────────┐  ┌───────────────┐
│ Tablas y      │  │ Volumes       │    │ Modelos de ML │  │ Metric Views  │
│ Vistas        │  │ (No estruct.) │    │ y Endpoints   │  │ y Funciones   │
│ (Delta/Iceb.) │  │ (PDFs/Imág.)  │    │ (MLflow/AI)   │  │ (Semántica)   │
└───────────────┘  └───────────────┘    └───────────────┘  └───────────────┘
```

### Capacidades Técnicas Diferenciales:
1. **Namespace Jerárquico de 3 Niveles (`catalog.schema.table`):** Estandariza la organización de datos en toda la empresa independientemente de la nube subyacente (AWS, Azure o GCP).
2. **Control de Acceso Fine-Grained (Granular):**
   - **Row-Level Filtering (Filtro por Filas):** Permite restringir qué registros puede visualizar un usuario según su rol o pertenencia a un grupo (ej. un gerente solo ve las filas de su región).
   - **Column-Level Masking (Enmascaramiento de Columnas):** Enmascara datos sensibles como tarjetas de crédito, números de identificación o correos en tiempo de consulta mediante funciones SQL declarativas.
3. **Control de Acceso Basado en Roles y Atributos (RBAC y ABAC):** Permite aplicar permisos basados en etiquetas de sensibilidad (*tags*) asignadas a los datos.
4. **Linaje Automatizado a Nivel de Columna:** Rastreabilidad continua sin configuración manual, mostrando cómo fluyen las columnas desde la ingesta hasta los modelos de Machine Learning y los dashboards de BI.
5. **Auditoría Centralizada:** Registro de todas las lecturas, escrituras, cambios de esquema y modificaciones de permisos, exportados de forma nativa a **System Tables**.

---

## 2. Lakehouse Federation: Gobernar en el Origen sin Migración

Uno de los principales inhibidores en proyectos de modernización es el costo y tiempo asociados a migrar bases de datos transaccionales o almacenes existentes. **Lakehouse Federation** resuelve este dilema permitiendo descubrir, consultar y gobernar fuentes externas directamente desde Databricks sin mover los datos.

```
                    ┌────────────────────────────────────────┐
                    │             UNITY CATALOG              │
                    │   Políticas de Seguridad Centralizadas │
                    │   Row/Column Masks • Linaje • Tags     │
                    └──────────────────┬─────────────────────┘
                                       │  (Consultas federadas / Pushdown)
     ┌──────────────────┬──────────────┴─────┬──────────────────┐
     ▼                  ▼                    ▼                  ▼
┌───────────────┐  ┌───────────────┐    ┌───────────────┐  ┌───────────────┐
│ PostgreSQL /  │  │ Snowflake     │    │ AWS Redshift  │  │ Google        │
│ MySQL         │  │ Data Cloud    │    │ Data Warehouse│  │ BigQuery      │
└───────────────┘  └───────────────┘    └───────────────┘  └───────────────┘
```

### Características Clave de Lakehouse Federation:
1. **Unificación In-Place:** Expone catálogos de Snowflake, Redshift, BigQuery, PostgreSQL, MySQL y Hive Metastore como catálogos foráneos en Unity Catalog.
2. **Aplicación Homogénea de Políticas:** Las políticas de acceso, etiquetas de clasificación y linaje de Unity Catalog se aplican sobre las tablas externas sin modificar la fuente original.
3. **Optimización de Consultas y Pushdown:** El optimizador de Databricks envía los filtros y agregaciones directamente a la base de datos externa para minimizar la transferencia de datos.
4. **Materialized Views (Vistas Materializadas):** Acelera las consultas complejas y cruces entre fuentes heterogéneas almacenando resultados intermedios cacheados en Delta Lake con refresco programado o continuo.

---

## 3. Guía de Posicionamiento para el Partner

| Objeción Común del Cliente | Respuesta Consultiva del Partner |
|---|---|
| *"No podemos migrar nuestro Snowflake/Redshift actual porque tomaría 18 meses."* | "No necesitan migrar. Con **Lakehouse Federation** unificamos la gobernanza y permitimos consultas cruzadas desde el primer día, gobernando sus datos in-place en Snowflake bajo las mismas políticas de Unity Catalog." |
| *"Solo necesitamos un catálogo para buscar tablas, nada más."* | "Un catálogo pasivo solo muestra metadatos desactualizados. **Unity Catalog** es un motor de gobernanza activo que aplica seguridad granular en tiempo real, rastrea el linaje automáticamente y gobierna también sus modelos de IA y archivos no estructurados." |
| *"¿Cómo garantizamos que RRHH no vea los salarios de los directores?"* | "Con las políticas de **Row-Level Filtering** y **Column-Level Masking** de Unity Catalog, una sola tabla sirve a toda la organización y el contenido se filtra o enmascara dinámicamente según el grupo del usuario, sin crear copias de datos duplicadas." |
