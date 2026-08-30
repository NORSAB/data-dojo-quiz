// ============================================================
// STUDY RESOURCES — Databricks Certified Data Analyst Associate
// Dedicated Databricks Data Analyst Study Resources:
// - 16 Lakehouse Architecture & SQL Decision Scenarios
// - Mapped to Unity Catalog, Delta Lake, Photon & AI/BI
// ============================================================
(function buildDatabricksDAStudyResources() {
  const courseId = 'databricks-da';

  window.databricksDAPatterns = [
    {
      domain: "Dominio 1: Databricks Lakehouse Platform & Unity Catalog",
      items: [
        {
          title: "Managed Tables vs External Tables en Unity Catalog",
          content: `<strong>Criterio Oficial Databricks:</strong><br>
          &bull; Usa <strong>Managed Tables</strong> cuando Databricks gestione completamente el ciclo de vida y almacenamiento de los datos en el metastore (al hacer DROP se borran metadatos y datos).<br>
          &bull; Usa <strong>External Tables</strong> cuando los datos deban persistir en un bucket S3 / ADLS Gen2 administrado por un equipo externo o consumido por otras herramientas (al hacer DROP solo se borran los metadatos de UC).`
        },
        {
          title: "Serverless SQL Warehouses vs Pro vs Classic",
          content: `<strong>Criterio Oficial Databricks:</strong><br>
          &bull; Usa <strong>Serverless SQL Warehouses</strong> para arranque instantáneo (<5s), auto-escalado agresivo y menor costo total por TCO sin gestionar VMs en la suscripción del cliente.<br>
          &bull; Usa <strong>Pro SQL Warehouses</strong> cuando se requieran federaciones de consultas o flujos de trabajo avanzados sin soporte serverless en la región.<br>
          &bull; <strong>Classic</strong> es la opción básica sin optimizaciones Photon completas.`
        }
      ]
    },
    {
      domain: "Dominio 2: Delta Lake & Transformaciones SQL",
      items: [
        {
          title: "MERGE INTO vs INSERT OVERWRITE para Ingesta CDC",
          content: `<strong>Criterio Oficial Databricks:</strong><br>
          &bull; Usa <strong>MERGE INTO</strong> para operaciones Upsert (actualizar filas modificadas e insertar nuevas filas según clave primaria) con soporte para eliminación y SCD Tipo 2.<br>
          &bull; Usa <strong>INSERT OVERWRITE</strong> solo cuando se reemplace una partición completa o la tabla entera en una carga batch idempotente.`
        },
        {
          title: "Time Travel: VERSION AS OF vs TIMESTAMP AS OF",
          content: `<strong>Criterio Oficial Databricks:</strong><br>
          &bull; Usa <strong>VERSION AS OF</strong> para auditorías reproducibles y rollbacks a un número de commit exacto del Delta Log.<br>
          &bull; Usa <strong>TIMESTAMP AS OF</strong> para consultar el estado de la tabla en un momento cronológico específico (ej. '2026-08-30 12:00:00').`
        }
      ]
    }
  ];

  window.studyResources = window.studyResources || {};
  window.studyResources[courseId] = {
    flashcards: window.databricksDAFlashcards || [],
    terms: window.conceptosDatabricks || [],
    scenarios: window.databricksDAPatterns,
    commands: window.comandosSqlDatabricks || []
  };
})();
