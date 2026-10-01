# 01. Customer Personas y Value Drivers en Gobernanza de Datos

> **Módulo:** 01_Market_Opportunity_and_Personas  
> **Área:** Identificación de Oportunidades y Alineación Consultiva  
> **Objetivo:** Dominar los tres arquetipos de interlocutores y los cuatro motores de valor para adaptar presentaciones de preventa y generar servicios de alto margen.

---

## 1. Los Tres Arquetipos de Customer Personas en Databricks

En todo ciclo de preventa y adopción de Databricks, existen tres grupos clave de partes interesadas (*stakeholders*). Para ganar proyectos, el partner debe calibrar su narrativa al lenguaje y prioridades de cada grupo:

```
                  ┌──────────────────────────────────────────────┐
                  │                    BUYERS                    │
                  │   CDO, CIO, CDAO, VP of Data Platform        │
                  │   Foco: Resultados, Innovación, Riesgo       │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────┴───────────────────────┐
                  │                 INFLUENCERS                  │
                  │   Data Architects, Compliance Officers       │
                  │   Foco: Solidez Técnica, Escalabilidad       │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────┴───────────────────────┐
                  │                PRACTITIONERS                 │
                  │   Data Stewards, Data Engineers, ML Engs     │
                  │   Foco: Operatividad, Facilidad de Uso       │
                  └──────────────────────────────────────────────┘
```

### 1.1. Buyers (Compradores y Patrocinadores Ejecutivos)
- **Roles:**
  - *Chief Data Officer / Chief Data Analytics Officer (CDO/CDAO)*
  - *Chief Information Officer (CIO)*
  - *VP o Director of Data Platform*
- **Prioridad Estratégica:**
  - Obtención de resultados de negocio cuantificables.
  - Aceleración de la innovación y reducción del *time-to-market* de productos de datos.
  - Mitigación de riesgos legales, regulatorios, reputacionales y financieros.
- **Enfoque en Preventa:** Demostrar cómo Unity Catalog reduce el costo total de propiedad (TCO) consolidando herramientas aisladas y cómo unifica la gobernanza para habilitar iniciativas de IA segura sin violar regulaciones (GDPR, HIPAA, SOX).

### 1.2. Influencers (Líderes Técnicos y de Cumplimiento)
- **Roles:**
  - *Data Platform Leads*
  - *Risk and Compliance Officers*
  - *Enterprise Data Architects*
  - *Data Governance Managers*
- **Prioridad Estratégica:**
  - Solidez arquitectónica, escalabilidad y capacidades de integración profunda.
  - Estandarización de políticas y ausencia de dependencia de proveedores (*anti-vendor lock-in*).
  - Capacidades de auditoría automatizada y rastreabilidad de linaje.
- **Enfoque en Preventa:** Explicar los detalles de Lakehouse Federation (gobernar bases de datos externas sin migración), el control de acceso unificado basado en roles y atributos (RBAC/ABAC), y el uso de estándares abiertos (Delta Lake, Apache Iceberg, APIs abiertas).

### 1.3. Practitioners (Practicantes y Operadores de Datos)
- **Roles:**
  - *Data Stewards / Custodios de Datos*
  - *Data Engineers / Ingenieros de Datos*
  - *Data Scientists y ML Engineers*
  - *Data Management Specialists*
- **Prioridad Estratégica:**
  - Excelencia operativa diaria y facilidad de implementación.
  - Mantenimiento sostenible de controles de acceso y calidad de datos.
  - Búsqueda y descubrimiento ágil de activos sin fricciones burocráticas.
- **Enfoque en Preventa:** Demostrar políticas SQL declarativas para filtros de fila (*row-level filtering*) y máscaras de columna (*column-level masking*), linaje automático en tiempo real y documentación asistida por IA.

---

## 2. Los Cuatro Motores de Valor del Cliente (Customer Value Drivers)

Los **Customer Value Drivers** son independientes de la tecnología y representan las razones fundamentales por las cuales las organizaciones invierten en modernización de datos:

### Driver 1: Reduce Platform Costs and Complexity (Reducir Costos y Complejidad de Plataforma)
- **El Problema del Cliente:** La gobernanza fragmentada obliga a mantener múltiples herramientas separadas para catalogación (Collibra, Alation), seguridad (Ranger, Privacera), linaje y monitoreo, multiplicando costos de licenciamiento, integración y mantenimiento.
- **La Solución Databricks:** Centralizar la gestión de datos e IA en una única plataforma mediante Unity Catalog, eliminando la dispersión de herramientas (*tooling sprawl*) y reduciendo drásticamente el TCO.

### Driver 2: Accelerate Innovation (Acelerar la Innovación)
- **El Problema del Cliente:** Las plataformas tradicionales carecen de inteligencia de datos integrada, creando una fuerte dependencia de un puñado de expertos técnicos para traducir requerimientos de negocio en consultas y reportes.
- **La Solución Databricks:** Democratización de datos e IA mediante búsqueda contextual, dashboards conversacionales (AI/BI y Genie) y descubrimiento asistido por IA, lo que agiliza la toma de decisiones y reduce la brecha de habilidades.

### Driver 3: Mitigate Risk and Ensure Compliance (Mitigar el Riesgo y Garantizar el Cumplimiento)
- **El Problema del Cliente:** Controles de acceso inconsistentes aplicados en silos heterogéneos (archivos, tablas, modelos) elevan exponencialmente el riesgo de filtraciones, incumplimientos regulatorios (GDPR, SOX, CCPA) y auditorías fallidas.
- **La Solución Databricks:** Aplicación centralizada de políticas de acceso unificadas y escalables (RBAC, ABAC, row/column policies), linaje automatizado columna a columna y auditoría exhaustiva en tiempo real sobre todo el patrimonio.

### Driver 4: Collaborate and Monetize the Value of Data (Colaborar y Monetizar el Valor de los Datos)
- **El Problema del Cliente:** Protocolos cerrados y propietarios impiden el intercambio seguro de datos entre distintas plataformas, obligando a duplicar datasets y generando riesgos de desincronización y lock-in.
- **La Solución Databricks:** Protocolos abiertos como **Delta Sharing** (intercambio seguro sin copia de datos) y **Databricks Clean Rooms** (colaboración multipartita privada), que permiten monetizar y compartir datos con clientes y proveedores en cualquier nube o herramienta.

---

## 3. Matriz de Vinculación entre Personas y Value Drivers

| Interlocutor | Value Driver Primario | Mensaje Central para el Partner |
|---|---|---|
| **Buyers (CDO / CIO)** | *Mitigate Risk & Ensure Compliance* | "Proteja a la organización frente a sanciones regulatorias y acelere el retorno de inversión unificando la gobernanza en un solo plano de control auditable." |
| **Influencers (Architects / Compliance)** | *Reduce Platform Costs and Complexity* | "Elimine la complejidad de mantener 5 herramientas separadas de gobernanza integrando Lakehouse Federation y estándares abiertos." |
| **Practitioners (Data Engineers / Stewards)** | *Collaborate and Monetize Data / Innovation* | "Facilite el trabajo diario con funciones SQL declarativas para enmascaramiento, linaje automático sin esfuerzo manual y compartición zero-copy." |
