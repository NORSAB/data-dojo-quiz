const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = 'D:/2026/Simulador de Preguntas';
const LAB_DIR = path.join(ROOT, 'output/clases_5_10_separadas/Laboratorios Finales');
const OUT_DIR = path.join(ROOT, 'output/clases_5_10_separadas');

const domainOrder = [
  'Understanding of Databricks Data Intelligence Platform',
  'Managing Data',
  'Importing Data',
  'Executing queries using Databricks SQL and Databricks SQL Warehouses',
  'Analyzing Queries',
  'Working with Dashboards and Visualizations in Databricks',
  'Developing, Sharing and Maintaining AI/BI Genie spaces',
  'Data Modeling with Databricks SQL',
  'Securing Data',
];

const concepts = [
  ['Understanding of Databricks Data Intelligence Platform', 'Arquitectura medallion y Lakehouse', /medallion|lakehouse|bronze|silver|gold/i],
  ['Understanding of Databricks Data Intelligence Platform', 'Control plane, data plane y arquitectura', /control plane|data plane|classic data plane|serverless data plane/i],
  ['Understanding of Databricks Data Intelligence Platform', 'Personas, servicios y herramientas', /data analyst|data engineer|workspace|catalog explorer|sql editor|notebook/i],
  ['Understanding of Databricks Data Intelligence Platform', 'Unity Catalog y jerarquia de objetos', /unity catalog|catalog(?:ue)?\b|schema\b|three-level namespace/i],
  ['Understanding of Databricks Data Intelligence Platform', 'Delta Lake fundamentos', /delta lake|delta table|acid transaction|transaction log/i],

  ['Managing Data', 'Catalogos, schemas y objetos', /create catalog|create schema|alter table|drop table|show tables/i],
  ['Managing Data', 'Tablas managed vs external y LOCATION', /managed table|external table|external location|\blocation\b/i],
  ['Managing Data', 'Views, temporary views y object lifecycle', /temporary view|temp view|global temp|create view|drop view/i],
  ['Managing Data', 'Delta DML: INSERT, UPDATE, DELETE y MERGE', /\binsert\b|\bupdate\b|\bdelete\b|\bmerge\b|upsert/i],
  ['Managing Data', 'Historia, Time Travel y RESTORE', /time travel|version as of|timestamp as of|describe history|restore table/i],
  ['Managing Data', 'Metadata, comentarios, tags y lineage', /comment on|table comment|tags?\b|lineage|metadata/i],

  ['Importing Data', 'UI Upload y carga manual', /ui upload|upload file|upload data|create table from csv|local file/i],
  ['Importing Data', 'read_files y formatos', /read_files|file format|csv|json|parquet|delimiter|header/i],
  ['Importing Data', 'COPY INTO e idempotencia', /copy into|idempoten|already loaded|processed files/i],
  ['Importing Data', 'Auto Loader, cloudFiles y checkpoints', /auto loader|cloudfiles|checkpoint|schema location/i],
  ['Importing Data', 'Schema inference y schema evolution', /schema inference|infer schema|schema evolution|rescued data/i],
  ['Importing Data', 'Marketplace, Delta Sharing y fuentes externas', /marketplace|delta sharing|data sharing|external source|federated/i],

  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'SQL Warehouse, serverless y configuracion', /sql warehouse|serverless warehouse|warehouse size|auto stop|cluster size/i],
  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'SQL Editor y Assistant', /sql editor|databricks assistant|assistant/i],
  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'Joins: inner, outer, semi y anti', /inner join|left join|right join|full outer|semi join|anti join/i],
  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'Set operations: UNION, INTERSECT y EXCEPT', /union all|\bunion\b|intersect|except/i],
  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'Agregaciones, GROUP BY y HAVING', /group by|having|aggregate|count\(|sum\(|avg\(/i],
  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'Window functions', /window function|row_number|dense_rank|\brank\(|lag\(|lead\(|partition by/i],
  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'Funciones de fechas, NULL y filtros', /date_trunc|datediff|date_add|coalesce|nullif|where clause|order by/i],
  ['Executing queries using Databricks SQL and Databricks SQL Warehouses', 'CTAS, materialized, streaming y dynamic views', /ctas|create table as|materialized view|streaming table|dynamic view/i],

  ['Analyzing Queries', 'Query History', /query history|history page|past quer|statement history/i],
  ['Analyzing Queries', 'Query Profile y Query Insights', /query profile|query insight|query execution graph|operator metrics/i],
  ['Analyzing Queries', 'EXPLAIN y planes de ejecucion', /explain plan|explain formatted|physical plan|logical plan/i],
  ['Analyzing Queries', 'Photon', /photon/i],
  ['Analyzing Queries', 'Cache y result cache', /result cache|cached result|disk cache|query cache|cache/i],
  ['Analyzing Queries', 'Liquid Clustering, Z-ORDER y data skipping', /liquid clustering|z-order|zorder|data skipping|clustering key/i],
  ['Analyzing Queries', 'Small files, OPTIMIZE y rendimiento', /small files|optimize|compact|performance|slow quer/i],

  ['Working with Dashboards and Visualizations in Databricks', 'Seleccion de visualizaciones', /visualization|bar chart|line chart|pie chart|counter|table visual/i],
  ['Working with Dashboards and Visualizations in Databricks', 'Datasets, canvas y construccion de dashboards', /dashboard dataset|canvas|add dataset|dashboard/i],
  ['Working with Dashboards and Visualizations in Databricks', 'Parametros y filtros', /parameter|dashboard filter|field filter|filter widget/i],
  ['Working with Dashboards and Visualizations in Databricks', 'Publicar, compartir y permisos', /publish dashboard|share dashboard|can edit|can run|permissions?/i],
  ['Working with Dashboards and Visualizations in Databricks', 'Refresh, schedule y subscriptions', /refresh schedule|scheduled refresh|subscription|email delivery|schedule/i],
  ['Working with Dashboards and Visualizations in Databricks', 'Alerts', /sql alert|dashboard alert|alert/i],

  ['Developing, Sharing and Maintaining AI/BI Genie spaces', 'Crear Space, datos y SQL Warehouse', /genie space|create.*space|sql warehouse|add table|data source/i],
  ['Developing, Sharing and Maintaining AI/BI Genie spaces', 'Instructions y contexto de negocio', /genie instruction|custom instruction|instrucciones? personalizadas?|contexto de negocio|business context/i],
  ['Developing, Sharing and Maintaining AI/BI Genie spaces', 'Sample SQL y example queries', /sample sql|example quer|sql example/i],
  ['Developing, Sharing and Maintaining AI/BI Genie spaces', 'Trusted assets', /trusted asset/i],
  ['Developing, Sharing and Maintaining AI/BI Genie spaces', 'Benchmarks y validacion', /benchmark|benchmark question|expected answer/i],
  ['Developing, Sharing and Maintaining AI/BI Genie spaces', 'Synonyms y metadata', /synonym|column description|table description|metadata/i],
  ['Developing, Sharing and Maintaining AI/BI Genie spaces', 'Sharing, permissions y mantenimiento', /share.*genie|genie.*permission|monitor.*genie|feedback|curator|maintain/i],

  ['Data Modeling with Databricks SQL', 'Star schema, facts y dimensions', /star schema|fact table|dimension table|fact and dimension|dimensional model/i],
  ['Data Modeling with Databricks SQL', 'Grain, claves y relaciones', /grain|granularity|primary key|foreign key|one-to-many|many-to-many/i],
  ['Data Modeling with Databricks SQL', 'SCD Type 1 y Type 2', /slowly changing|scd type|scd1|scd2|type 2 dimension/i],
  ['Data Modeling with Databricks SQL', 'Normalizacion, denormalizacion y snowflake', /denormaliz|normaliz|snowflake schema|bridge table/i],
  ['Data Modeling with Databricks SQL', 'Capa Gold para BI', /gold layer|gold table|business-ready|dashboard-ready/i],

  ['Securing Data', 'GRANT, REVOKE y privilegios', /\bgrant\b|\brevoke\b|select privilege|use catalog|use schema|privilege/i],
  ['Securing Data', 'Ownership, grupos y minimo privilegio', /owner|ownership|group|least privilege|service principal/i],
  ['Securing Data', 'Row filters y dynamic views', /row filter|row-level|dynamic view|is_member|current_user/i],
  ['Securing Data', 'Column masks y PII', /column mask|masking|pii|personally identifiable|sensitive data/i],
  ['Securing Data', 'Tags y ABAC', /abac|attribute-based|governed tag|tag-based|tags?\b/i],
  ['Securing Data', 'Auditoria y lineage', /audit log|system.access|lineage|access audit/i],
];

function loadQuestions() {
  const code = fs.readFileSync(path.join(ROOT, 'questions_databricks.js'), 'utf8');
  const context = { window: { questionsData: [] } };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.window.questionsData;
}

function loadLabs() {
  return fs.readdirSync(LAB_DIR)
    .filter(name => name.endsWith('.ipynb'))
    .sort()
    .map(name => {
      const nb = JSON.parse(fs.readFileSync(path.join(LAB_DIR, name), 'utf8'));
      const md = nb.cells.filter(c => c.cell_type === 'markdown').map(c => (c.source || []).join('')).join('\n');
      const code = nb.cells.filter(c => c.cell_type === 'code').map(c => (c.source || []).join('')).join('\n');
      const errors = nb.cells.flatMap(c => c.outputs || []).filter(o => o.output_type === 'error').length;
      const outputs = nb.cells.reduce((sum, c) => sum + (c.outputs || []).length, 0);
      return { name, md, code, all: `${md}\n${code}`, cells: nb.cells.length, errors, outputs };
    });
}

function questionText(q) {
  return [q.prompt, ...(q.options || []).map(o => o.text), q.explanation || ''].join('\n');
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const questions = loadQuestions();
const labs = loadLabs();
const rows = [];

for (const [domain, concept, regex] of concepts) {
  const related = questions.filter(q => q.domain === domain && regex.test(questionText(q)));
  const labHits = labs.map(lab => {
    const codeHit = regex.test(lab.code);
    const mdHit = regex.test(lab.md);
    return { name: lab.name.match(/Laboratorio\s+\d+/i)?.[0] || lab.name, codeHit, mdHit };
  });
  const practical = labHits.filter(x => x.codeHit).map(x => x.name);
  const theory = labHits.filter(x => !x.codeHit && x.mdHit).map(x => x.name);
  const status = practical.length ? 'Practica' : theory.length ? 'Teoria/guia' : 'No cubierto';
  rows.push({
    domain,
    concept,
    questionCount: related.length,
    status,
    practical: practical.join('; '),
    theory: theory.join('; '),
    sampleIds: related.slice(0, 5).map(q => q.id).join('; '),
  });
}

const domainCounts = Object.fromEntries(domainOrder.map(domain => [domain, questions.filter(q => q.domain === domain).length]));
const labSummary = labs.map(lab => ({ name: lab.name, cells: lab.cells, outputs: lab.outputs, errors: lab.errors }));
const uncovered = rows.filter(r => r.questionCount > 0 && r.status === 'No cubierto').sort((a, b) => b.questionCount - a.questionCount);
const theoryOnly = rows.filter(r => r.questionCount > 0 && r.status === 'Teoria/guia').sort((a, b) => b.questionCount - a.questionCount);

const csvHeader = ['dominio', 'concepto', 'preguntas_relacionadas', 'estado', 'laboratorios_practica', 'laboratorios_teoria', 'ids_ejemplo'];
const csvLines = [csvHeader, ...rows.map(r => [r.domain, r.concept, r.questionCount, r.status, r.practical, r.theory, r.sampleIds])]
  .map(row => row.map(csvEscape).join(','));
fs.writeFileSync(path.join(OUT_DIR, 'matriz_laboratorios_vs_300_preguntas.csv'), csvLines.join('\n'), 'utf8');

const result = { questionCount: questions.length, domainCounts, labSummary, rows, uncovered, theoryOnly };
fs.writeFileSync(path.join(OUT_DIR, 'auditoria_laboratorios_vs_300.json'), JSON.stringify(result, null, 2), 'utf8');

console.log(JSON.stringify({
  questionCount: questions.length,
  domainCounts,
  labSummary,
  uncovered: uncovered.slice(0, 20),
  theoryOnly: theoryOnly.slice(0, 20),
}, null, 2));
