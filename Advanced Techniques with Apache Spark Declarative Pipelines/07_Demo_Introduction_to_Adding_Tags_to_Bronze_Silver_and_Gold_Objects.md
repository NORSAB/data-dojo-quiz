# Lesson 7: Demo : Introduction to Adding Tags to Bronze, Silver and Gold Objects

**Course:** Advanced Techniques with Apache Spark Declarative Pipelines  
**Type:** Video Demonstration (~5.75 mins)  
**Artifacts & Capturas:**
- `capturas/07_tags_60s.png`
- `capturas/07_tags_150s.png`
- `capturas/07_tags_alter_syntax.png`

---

## 1. Objectives & Role of Metadata Tagging in Unity Catalog

Tags provide semantic metadata to Unity Catalog securable objects (tables, views, volumes, materialized views). They allow data engineering, governance, and business teams to:
- **Organize & Discover:** Search for datasets by business unit, project, or domain.
- **Govern & Audit:** Distinguish raw data from verified production-ready assets.
- **Attribute Ownership:** Define owning departments (e.g., Sales, Finance).

---

## 2. Types of Unity Catalog Tags

1. **Custom Tags (Key-Value or Key-Only):**
   - User-defined semantic labels describing departmental ownership and Medallion quality level.
   - Examples:
     - `'demo_tag_Department' = 'Sales'`
     - `'demo_tag_Quality' = 'bronze' | 'silver' | 'gold'`
2. **System Tags:**
   - Predefined, reserved Unity Catalog governance tags.
   - Example: `'system.Certified'` designates trusted, verified, production-grade datasets for organization-wide consumption.

---

## 3. Complete Tagging SQL Implementation

```sql
-- 1. Apply department and quality tags to Bronze
ALTER TABLE ${catalog}.multi_flow_1_bronze.orders_bronze_flows_demo
SET TAGS (
  'demo_tag_Department' = 'Sales',
  'demo_tag_Quality'    = 'bronze'
);

-- 2. Apply tags and mark Silver table as Certified
ALTER TABLE ${catalog}.multi_flow_2_silver.orders_silver_flows_demo
SET TAGS (
  'demo_tag_Department' = 'Sales',
  'demo_tag_Quality'    = 'silver'
);

ALTER TABLE ${catalog}.multi_flow_2_silver.orders_silver_flows_demo
SET TAGS ('system.Certified');

-- 3. Apply tags and mark Gold Materialized Views as Certified
ALTER TABLE ${catalog}.multi_flow_3_gold.mv_product_performance_by_subsidiary_demo
SET TAGS (
  'demo_tag_Department' = 'Sales',
  'demo_tag_Quality'    = 'gold'
);

ALTER TABLE ${catalog}.multi_flow_3_gold.mv_product_performance_by_subsidiary_demo
SET TAGS ('system.Certified');

ALTER TABLE ${catalog}.multi_flow_3_gold.mv_daily_subsidiary_scorecard_demo
SET TAGS (
  'demo_tag_Department' = 'Sales',
  'demo_tag_Quality'    = 'gold'
);

ALTER TABLE ${catalog}.multi_flow_3_gold.mv_daily_subsidiary_scorecard_demo
SET TAGS ('system.Certified');
```

---

## 4. Querying & Inspecting Tags

### A. Programmatic Discovery via `information_schema`
Tags can be audited and queried directly using SQL:
```sql
SELECT 
  table_catalog,
  table_schema,
  table_name,
  tag_name,
  tag_value
FROM ${catalog}.information_schema.table_tags;
```

Or globally across all catalogs:
```sql
SELECT * FROM system.information_schema.table_tags;
```

### B. Catalog Explorer UI
- In Databricks Workspace -> **Catalog Explorer**, navigating to any table or materialized view displays applied tags directly under the table header.
- Users can filter and search for `tag:system.Certified` or `tag:demo_tag_Quality:gold` to locate reliable data assets.
