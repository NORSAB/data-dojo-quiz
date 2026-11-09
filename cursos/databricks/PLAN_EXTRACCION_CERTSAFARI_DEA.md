# Plan de Extracción: Banco CertSafari Databricks Data Engineer Associate (402 Preguntas)

> **Fecha:** 2026-10-02  
> **Objetivo:** Extraer el banco íntegro de 402 preguntas oficiales con opciones, respuestas correctas y explicaciones detalladas desde CertSafari, e integrarlo al simulador local Data Dojo (`questions_databricks_dea.js`).

---

## 1. 📋 Resumen del Banco

- **Certificación:** Databricks Certified Data Engineer Associate (Exam update May 2026 / Version 7)
- **Código interno CertSafari:** `data-engineer-associate-after-may-4-var7`
- **Total de preguntas:** **402 preguntas**
- **Cobertura:** 7 Dominios y 34 Subdominios oficiales

### Distribución por Dominio y Subdominio

1. **Domain 1: Databricks Intelligence Platform (24 preguntas)**
   - Subdomain 1.1: Understand the core components of the Databricks Data Intelligence Platform (12)
   - Subdomain 1.2: Understand Databricks Data Intelligence Platform’s compute services (12)

2. **Domain 2: Data Ingestion and Loading (84 preguntas)**
   - Subdomain 2.1: Enable and detail data ingestion patterns (12)
   - Subdomain 2.2: Use the COPY INTO command (12)
   - Subdomain 2.3: Use Auto Loader with schema enforcement and schema evolution (12)
   - Subdomain 2.4: Configure Lakeflow Connect to reliably ingest data (12)
   - Subdomain 2.5: Use JDBC/ODBC or REST clients in notebooks (12)
   - Subdomain 2.6: Prioritize between Auto Loader, Lakeflow Connect, and other ingestion methods (12)
   - Subdomain 2.7: Ingest semi-structured and unstructured data (12)

3. **Domain 3: Data Transformation and Modeling (90 preguntas)**
   - Subdomain 3.1: Implement data cleaning (12)
   - Subdomain 3.2: Combine DataFrames with operations (13)
   - Subdomain 3.3: Manipulate columns, rows, and table structures (13)
   - Subdomain 3.4: Perform data deduplication operations and aggregate operations on DataFrames (13)
   - Subdomain 3.5: Understand the basic tuning parameters (13)
   - Subdomain 3.6: Understand the difference between, and how to build, Gold layer objects (13)
   - Subdomain 3.7: Apply data quality checks and validation rules (13)

4. **Domain 4: Working with Lakeflow Jobs (64 preguntas)**
   - Subdomain 4.1: Implement control flows using Lakeflow Jobs (16)
   - Subdomain 4.2: Configure common tasks and their dependencies using Lakeflow Jobs (16)
   - Subdomain 4.3: Implement job schedules using Lakeflow Jobs (16)
   - Subdomain 4.4: Choose between time-based and data-driven triggers (16)

5. **Domain 5: Implementing CI/CD (40 preguntas)**
   - Subdomain 5.1: Manage your code development workflow within the Databricks workspace UI (10)
   - Subdomain 5.2: Understand environment-specific configuration using Automation Bundle (10)
   - Subdomain 5.3: Deploy Declarative Automation Bundles (10)
   - Subdomain 5.4: Understand the Databricks CLI to validate, deploy, and manage Declarative Automation Bundles (10)

6. **Domain 6: Troubleshooting, Monitoring, and Optimization (40 preguntas)**
   - Subdomain 6.1: Identify trends in job performance using the Lakeflow Jobs run history view (8)
   - Subdomain 6.2: Use the Lakeflow Jobs UI to monitor pipeline health (8)
   - Subdomain 6.3: Identify common performance bottlenecks (8)
   - Subdomain 6.4: Understand the features of Liquid Clustering and predictive optimization (8)
   - Subdomain 6.5: Diagnose cluster startup failures, library conflicts, and out-of-memory issues (8)

7. **Domain 7: Governance and Security (60 preguntas)**
   - Subdomain 7.1: Differentiate between managed and external tables in Unity Catalog (15)
   - Subdomain 7.2: Configure access controls using the UI and SQL (15)
   - Subdomain 7.3: Understand column-level masking and row-level security (15)
   - Subdomain 7.4: Understand Unity Catalog ABAC policies (15)

---

## 2. 🛠️ Arquitectura Técnica y Protocolo de Extracción (Validado)

La plataforma CertSafari almacena y genera los cuestionarios a través de Supabase Edge Functions con autenticación directa comprobada:

- **Endpoint de Creación de Quiz:** `POST https://tjiccjchmnltoqktzbec.supabase.co/functions/v1/create-quiz`
- **Headers Requeridos:**
  ```json
  {
    "Content-Type": "application/json",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaWNjamNobW5sdG9xa3R6YmVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMjQzMDksImV4cCI6MjA3NTYwMDMwOX0.2a4GKY2eQVn82_qQ2i5iMO3ekuPaMMYhBxKaRYr7j0w",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaWNjamNobW5sdG9xa3R6YmVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMjQzMDksImV4cCI6MjA3NTYwMDMwOX0.2a4GKY2eQVn82_qQ2i5iMO3ekuPaMMYhBxKaRYr7j0w",
    "x-edge-function-ingest-key": "apA_qPPU2p3#t2asd289ajklK"
  }
  ```
- **Payload por Subdominio:**
  ```json
  {
    "certificate": "data-engineer-associate-after-may-4-var7",
    "vendor": "databricks",
    "n_questions": 12,
    "user_id": "c2952512-3f59-4264-bf32-9b2f4ab51713",
    "mode": "domain",
    "study_mode": "review",
    "domain": "Domain 1: Databricks Intelligence Platform",
    "subdomain": "Subdomain 1.1: Understand the core components of the Databricks Data Intelligence Platform",
    "answer_format": "mcq",
    "cf_turnstile_token": null,
    "request_id": "req_extractor"
  }
  ```
- **Respuesta de `create-quiz`:**
  Devuelve el `quiz.id`, la lista completa de `question_ids` del subdominio y el objeto completo de `first_question` (texto, opciones, respuesta correcta `correct_answers`, explicaciones `explanations`).
- **Endpoint de Iteración de Preguntas:**
  `POST https://www.certsafari.com/api/questions` con el intento para obtener secuencialmente la siguiente pregunta completa.

---

## 3. 🚀 Pasos de Ejecución para la Próxima Sesión

1. **Paso 1: Ejecutar Script Extractor Automatizado**
   - Correr script que itere los 34 subdominios llamando a `create-quiz` y recorriendo las preguntas de cada quiz.
   - Extraer todas las 402 preguntas a `questions_databricks_dea_certsafari.json`.
2. **Paso 2: Deduplicación y Validación Estructural**
   - Validar que existan exactamente 402 preguntas únicas.
   - Validar que cada pregunta contenga texto, 4 opciones, respuesta válida y explicaciones.
3. **Paso 3: Ensamblaje en Formato Data Dojo**
   - Generar `questions_databricks_dea.js` estructurado con `window.questionsData = (window.questionsData || []).concat(...)`.
   - Mapear claves `id`, `domain`, `subdomain`, `question`, `options`, `answer`, `explanation`.
4. **Paso 4: Integración a la Interfaz de la App**
   - Registrar el nuevo curso `databricks-dea` en `index.html`, `script.js` y `sw.js`.
   - Probar en navegador local (`http://datadojo.local:5176`).
5. **Paso 5: Bitácora y Git Push**
   - Anotar en `AGENTS.md` (append-only), verificar paleta (`validate_ui_palette.js`) y sincronizar en `origin/main`.
