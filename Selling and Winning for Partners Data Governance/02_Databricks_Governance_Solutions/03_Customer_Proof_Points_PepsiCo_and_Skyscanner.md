# 03. Casos de Éxito Empresariales: PepsiCo, Skyscanner y Otros Referentes

> **Módulo:** 02_Databricks_Governance_Solutions  
> **Área:** Evidencia de Producción y Casos de Estudio Reales  
> **Objetivo:** Equipar al partner con métricas cuantitativas y narrativas de casos de éxito verificados para respaldar propuestas de preventa con credibilidad indiscutible.

---

## 1. Importancia de los Casos de Éxito en Preventa

Los clientes corporativos (especialmente CDOs y directores de cumplimiento) suelen desconfiar de las promesas teóricas de los fabricantes. Respaldar las propuestas del partner con casos de éxito a escala de petabytes demuestra la viabilidad técnica del proyecto y reduce la percepción de riesgo de la adopción.

Unity Catalog está respaldado por más del **60% de las empresas de Fortune 500** y más de **20,000 organizaciones en producción a nivel global**.

---

## 2. Caso de Estudio 1: PepsiCo (Global CPG Leader)

### El Desafío de Negocio (Problem):
- PepsiCo experimentó una rápida expansión global a través de múltiples productos y geografías, lo que derivó en una dispersión extrema de datos (*data sprawl*) y duplicación entre sistemas heterogéneos.
- Esta fragmentación impedía el descubrimiento ágil, comprometía la calidad de los datos a nivel corporativo y bloqueaba la transición estratégica desde analítica puramente descriptiva hacia analítica predictiva e IA prescriptiva.
- Necesitaban una arquitectura unificada con seguridad estricta, controles de acceso sofisticados y observabilidad de extremo a extremo para soportar **más de 30 productos digitales** y la optimización de la cadena de suministro global (*"seed to shelf"*).

### La Solución Implementada (Solution):
- PepsiCo implementó **Databricks Unity Catalog** como la capa centralizada de gobernanza dentro de la plataforma **PepsiCo Data Foundation** desplegada sobre Microsoft Azure:
  - **Volumen de Datos Consolidado:** Más de **6 Petabytes (6 PB)**.
  - **Comunidad de Usuarios:** Onboarding ágil para **más de 1,500 usuarios activos**.
  - **Equipos de Producto Habilitados:** Descubrimiento unificado para más de 30 equipos.
  - **Seguridad Granular:** Políticas a nivel de fila y columna (*row/column policies*) en **más de 50 tablas restringidas** de Finanzas, Recursos Humanos e I+D.
  - **Gobernanza de Volúmenes (Volumes):** Eliminación de riesgos de exposición en directorios DBFS no asegurados mediante Unity Catalog Volumes.
  - **Linaje y Auditoría:** Linaje automatizado para aproximadamente **7,000 tablas bronce** y **1,000 tablas silver** provenientes de más de 150 fuentes; auditoría detallada de ~5,000 consultas diarias y alertas de costos en más de 2,000 notebooks.

### Resultados Cuantificables (Result):
- ⏱️ **Reducción del 30% en el Tiempo de Onboarding:** El tiempo para incorporar nuevos usuarios y lanzar productos analíticos disminuyó en aproximadamente un 30%.
- 🛡️ **Confianza Total en Cumplimiento:** Rastreabilidad y linaje en tiempo real que garantizan certeza en la procedencia de datos para auditorías regulatorias globales.
- ⚡ **Eficiencia Operativa:** Eliminación de redundancias en almacenamiento y computación mediante la eliminación de copias locales no autorizadas.

---

## 3. Caso de Estudio 2: Skyscanner (Global Travel Marketplace)

### El Desafío de Negocio:
- Skyscanner gestiona uno de los motores de búsqueda de viajes más transitados del mundo, procesando miles de millones de cotizaciones de vuelos, hoteles y alquileres de automóviles.
- La empresa enfrentaba la necesidad de asegurar y auditar un patrimonio masivo de datos respetando las estrictas normativas europeas y globales de privacidad (**GDPR**) y controles financieros (**SOX**).

### La Solución y Escala:
- Despliegue de **Unity Catalog** para gobernar un volumen colosal de **15 a 20 Petabytes (15–20 PB)** de datos.
- Estandarización de permisos en todos los workspaces de analítica e ingeniería bajo un único catálogo centralizado.
- Automatización de auditorías de acceso e identificación inmediata de datos personales (PII) mediante tags y políticas de retención.

### Resultados Clave:
- 🌐 **15–20 PB Gobernados:** Demuestra la capacidad probada de Unity Catalog para operar a hiper-escala sin degradación de latencia en consultas.
- 📋 **Auditoría Continua GDPR / SOX:** Reducción drástica del esfuerzo manual necesario para certificar controles frente a auditores externos.

---

## 4. Otros Referentes Estratégicos Documentados

### Block (Anteriormente Square)
- **Escala:** Más de **12 PB de datos** y cientos de usuarios activos en la plataforma.
- **Caso:** Consolidación de la gobernanza para acelerar la colaboración entre distintas unidades de negocio (Cash App, Square, Tidal), unificando políticas y eliminando silos bajo Unity Catalog.

### GovTech Singapore (Sector Público)
- **Caso:** Modernización de la infraestructura central de datos del gobierno de Singapur sobre Databricks.
- **Impacto:** Unity Catalog aplica controles de acceso granulares para permitir analítica de autoservicio segura entre múltiples agencias gubernamentales, garantizando la soberanía de los datos ciudadanos.

### Kraken (Octopus Energy Group)
- **Caso:** Uso de **Delta Sharing** para compartir datos con reguladores del mercado energético del Reino Unido manteniendo los datos almacenados de forma segura en los repositorios de la empresa.
- **Impacto:** Reducción drástica del tiempo de integración con nuevos socios comerciales y cumplimiento normativo sin mover ni un solo byte físico.

---

## 5. Tabla Resumen para Presentaciones de Preventa

| Cliente | Industria | Escala Gobernada | Capacidad Clave de Databricks | Métrica de Impacto Destacada |
|---|---|---|---|---|
| **PepsiCo** | Consumo Masivo (CPG) | **6+ PB** / 1,500+ usuarios | Unity Catalog, Row/Column Masking, Volumes, Lineage | **-30% tiempo de onboarding** de nuevos productos/usuarios |
| **Skyscanner** | Viajes y Turismo | **15–20 PB** | Unity Catalog, Enterprise Auditing | Preparación continua para cumplimiento **GDPR y SOX** a hiper-escala |
| **Block** | Fintech / Pagos | **12+ PB** | Unity Catalog, Colaboración Multi-unidad | Gobernanza consolidada entre unidades de negocio independientes |
| **GovTech Singapur**| Sector Público | Multi-agencia gubernamental | Unity Catalog, Fine-Grained Access Control | Autoservicio seguro entre agencias estatales |
| **Kraken** | Energía / Utilities | Multi-nube B2B | Delta Sharing, Open APIs | Cumplimiento regulatorio y colaboración segura zero-copy |
