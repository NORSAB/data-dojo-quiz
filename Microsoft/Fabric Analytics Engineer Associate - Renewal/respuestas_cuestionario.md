# Respuestas del cuestionario

## Datos del examen

- **Examen:** Renewal for Microsoft Certified: Fabric Analytics Engineer Associate
- **Número de preguntas:** 25
- **Preguntas documentadas:** 25 de 25
- **Fuente:** Captura proporcionada por el usuario

## Convención de respuesta

La pregunta y sus opciones se conservan literalmente en inglés. La opción correcta se marca con `[x]`.

## Registro de preguntas

## Question 1 of 25

### English

**Question:** You have a Fabric tenant that contains a workspace named Workspace1.

You need to add a user named User1 to a role in Workspace1. The solution must ensure that User1’s permissions meet the following requirements:

- Must NOT be able to delete the workspace.
- Must be able to write data and create items.
- Must be able to deploy items by using deployment pipelines.
- Must follow the principle of least privilege.

Which role should you assign to User1?

**Options:**

- [ ] Admin
- [x] Contributor
- [ ] Member
- [ ] Viewer

### Answer

**Correct answer:** Contributor

**Reason:** Contributor can create or modify items, write data, and deploy through deployment pipelines, but cannot delete the workspace. This satisfies least privilege.

---

## Question 2 of 25

### English

**Question:** You have a Fabric tenant that contains a workspace named Workspace1.

You need to allow many users to view multiple reports and dashboards developed in Workspace1. The solution must follow the principle of least privilege and minimize administrative effort.

What should you use?

**Options:**

- [x] a Power BI app
- [ ] item-level permissions
- [ ] the Member workspace role
- [ ] the Viewer workspace role

### Answer

**Correct answer:** a Power BI app

**Reason:** A Power BI app packages multiple reports and dashboards for broad, read-only distribution while reducing the administrative effort of assigning individual item permissions.

---

## Question 3 of 25

### English

**Question:** You have a Microsoft Fabric tenant that contains a lakehouse named LH1 and a semantic model named SM1.

You need to grant access to LH1 for a user named User1.

User1 must be able to query the data in LH1 by using SQL, but must NOT be able to access the underlying files in OneLake. The access of User1 must be restricted by using row-level security (RLS).

How should you share LH1?

**Options:**

- [ ] Use the default permissions.
- [x] Add the Read all SQL endpoint data permission.
- [ ] Add the Read All Apache Spark permission.
- [ ] Add the Build reports on the semantic model named SM1 permission.

### Answer

**Correct answer:** Add the Read all SQL endpoint data permission.

**Reason:** This permission allows SQL queries through the SQL analytics endpoint without granting access to the underlying OneLake files. The SQL endpoint can enforce row-level security.

---

## Question 4 of 25

### English

**Question:** You have a Microsoft Power BI project that uses the Tabular Model Definition Language (TMDL) format to define a semantic model named SalesOrders. The project is source controlled in Git by using Azure DevOps.

The model contains four tables named DimDate, DimCustomer, FactOrders, and ModelMeasures. All measures are located on the ModelMeasures table.

You need to review changes made to measures during the last four weeks.

Which file should you review in Azure DevOps?

**Options:**

- [x] SalesOrders.SemanticModel\definition\tables\ModelMeasures.tmdl
- [ ] SalesOrders.SemanticModel\definition\tables\FactOrders.tmdl
- [ ] SalesOrders.SemanticModel\definition\model.tmdl
- [ ] SalesOrders.SemanticModel\model.bim

### Answer

**Correct answer:** SalesOrders.SemanticModel\definition\tables\ModelMeasures.tmdl

**Reason:** In a TMDL project, each table is represented by its own `.tmdl` file under `definition\tables`. Since all measures are on ModelMeasures, that is the file containing their changes.

---

## Question 5 of 25

### English

**Question:** You need to create a semantic model in Microsoft Power BI. The solution must meet the following requirements:

- Store the model definition in Git and use Azure DevOps to detect differences between versions.
- Edit relationships and measures in Microsoft Visual Studio Code.

In which format should you save the semantic model?

**Options:**

- [x] PBIP
- [ ] PBIX
- [ ] PBIT
- [ ] PBIDS

### Answer

**Correct answer:** PBIP

**Reason:** PBIP stores the report and semantic model definitions as individual text files, enabling Git/Azure DevOps source control and editing with Visual Studio Code.

---

## Question 6 of 25

### English

**Question:** You have a Microsoft Power BI workspace named WS1 that contains four semantic models and 10 reports. Multiple semantic models import data from the same file named Customers.csv.

You plan to make a change to the columns contained in Customers.csv.

You need to identify which reports and semantic models might be affected by the change. The solution must minimize administrative effort.

What should you do?

**Options:**

- [x] In the Power BI service, open the lineage view for WS1.
- [ ] In Power BI Desktop, open each report and semantic model, select Data source settings, and identify the included data sources.
- [ ] In the Power BI service, open the task flow for WS1.
- [ ] In the Power BI service, open each report, select See related content, and select View item lineage for the semantic model.

### Answer

**Correct answer:** In the Power BI service, open the lineage view for WS1.

**Reason:** Lineage view shows the relationships among data sources, semantic models, and reports in the workspace, minimizing manual inspection.

---

## Question 7 of 25

### English

**Question:** You have a Fabric tenant that contains a lakehouse named Lakehouse1.

You plan to use the Delete data activity to remove the existing data in Lakehouse1.

What should you create first?

**Options:**

- [ ] a dataflow
- [ ] a lookup
- [x] a pipeline
- [ ] a shortcut

### Answer

**Correct answer:** a pipeline

**Reason:** The Delete data activity is added to and configured within a Fabric pipeline.

---

## Question 8 of 25

### English

**Question:** You have a Fabric tenant that contains a lakehouse named Lakehouse1.

You plan to use a Data Factory pipeline to create a repeatable process to ingest Parquet files stored on a network drive and load them to Lakehouse1 as a Delta table without any transformations.

Which pipeline activity should you use?

**Options:**

- [x] Copy data activity
- [ ] Get Metadata activity
- [ ] Lookup activity
- [ ] Notebook activity
- [ ] Stored procedure activity

### Answer

**Correct answer:** Copy data activity

**Reason:** Copy activity supports Parquet as a source and can load data into a Fabric Lakehouse table as Delta without requiring transformations.

---

## Question 9 of 25

### English

**Question:** You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1.

You plan to load data from a local CSV file to Lakehouse1.

You need to create a table named Table1 in Lakehouse1 by using the data from the CSV file. The solution must minimize development effort.

What should you use?

**Options:**

- [ ] an Apache Spark job definition
- [ ] Apache Spark in a notebook
- [ ] the SQL analytics endpoint of Lakehouse1
- [x] the Upload option for Lakehouse1

### Answer

**Correct answer:** the Upload option for Lakehouse1

**Reason:** The Upload option provides the simplest path to load a local CSV into the lakehouse and create a table with minimal development effort.

---

## Question 10 of 25

### English

**Question:** You have a Fabric tenant.

You plan to create a pipeline that will download a comma-separated dataset from a public GitHub repository.

You need to specify which request method to use when defining the connection to the data source.

Which request method should you specify?

**Options:**

- [ ] CONNECT
- [x] GET
- [ ] OPTIONS
- [ ] PUT

### Answer

**Correct answer:** GET

**Reason:** A GET request retrieves data from a public GitHub resource; it does not modify the remote resource.

---

## Question 11 of 25

### English

**Question:** You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Lakehouse1 contains a table named Table1.

You plan to use Lakehouse1 as a data source for a Microsoft Power BI report.

You need to ensure that the data from Table1 is available to the Power BI report.

What should you use?

**Options:**

- [ ] a shortcut
- [ ] the Lakehouse explorer
- [x] A Semantic Model
- [ ] the SQL analytics endpoint

### Answer

**Correct answer:** A Semantic Model

**Reason:** A Power BI report consumes the lakehouse table through a semantic model.

---

## Question 12 of 25

### English

**Question:** You have a Microsoft Fabric lakehouse that contains a table named FactSales. The table includes OrderDateKey, ShipDateKey, and SalesAmount columns.

A table named DimDate has one row per date key.

You need to implement a star schema. Reports must filter sales by order date by default and support a DAX measure for sales by ship date.

What relationship design should you use?

**Options:**

- [ ] Create active one-to-many relationships from DimDate[DateKey] to both FactSales[OrderDateKey] and FactSales[ShipDateKey].
- [x] Create an active one-to-many relationship from DimDate[DateKey] to FactSales[OrderDateKey] and an inactive one-to-many relationship from DimDate[DateKey] to FactSales[ShipDateKey].
- [ ] Create one active many-to-many relationship between DimDate and FactSales, and set the filter direction to both tables.
- [ ] Keep DimDate disconnected and filter both date keys in DAX measures.

### Answer

**Correct answer:** Create an active one-to-many relationship from DimDate[DateKey] to FactSales[OrderDateKey] and an inactive one-to-many relationship from DimDate[DateKey] to FactSales[ShipDateKey].

**Reason:** The active OrderDate relationship provides the default filter path. The inactive ShipDate relationship can be activated in the relevant DAX measure with USERELATIONSHIP.

---

## Question 13 of 25

### English

**Question:** You have a Microsoft Fabric lakehouse that contains a table named FactSales. The table has one row per sales transaction and includes a ProductKey column that contains repeated values.

An imported table named DimProduct has one row per ProductKey and includes product attributes used in report slicers.

You need to configure a semantic model that allows users to slice sales amounts by product attributes.

Which relationship configuration should you use?

**Options:**

- [ ] Keep DimProduct as a disconnected table and use slicer selections in measures.
- [ ] Relate DimProduct[ProductKey] to FactSales[ProductKey] as many-to-many and set the filter direction to both tables.
- [ ] Relate FactSales[ProductKey] to DimProduct[ProductKey] as many-to-one and set the filter direction from FactSales to DimProduct.
- [x] Relate DimProduct[ProductKey] to FactSales[ProductKey] as one-to-many and set the filter direction from DimProduct to FactSales.

### Answer

**Correct answer:** Relate DimProduct[ProductKey] to FactSales[ProductKey] as one-to-many and set the filter direction from DimProduct to FactSales.

**Reason:** DimProduct is the dimension side with unique keys, and FactSales is the fact side with repeated keys. A single-direction filter from the dimension to the fact enables slicers to filter sales.

---

## Question 14 of 25

### English

**Question:** You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 is assigned to a Fabric capacity and contains a KQL database named KQL1. KQL1 contains a table named Sales that has the following columns:

- SalesAmount: decimal data type.
- Region: string data type.

You plan to calculate the total SalesAmount by Region.

Which KQL statement should you use?

**Options:**

- [ ] Sales | extend TotalSales = sum(SalesAmount) | extend Region
- [ ] Sales | extend TotalSales = sum(SalesAmount) by Region
- [ ] Sales | summarize by TotalSales = sum(SalesAmount), Region
- [x] Sales | summarize TotalSales = sum(SalesAmount) by Region

### Answer

**Correct answer:** Sales | summarize TotalSales = sum(SalesAmount) by Region

**Reason:** The `summarize` operator performs the aggregation, and the `by Region` clause groups the total by region.

---

## Question 15 of 25

### English

**Question:** You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 is assigned to a Fabric capacity and contains a KQL database named KQL1. KQL1 contains a table named Sales.

You need to display the following columns from Sales:

- OrderKey
- OrderId
- OrderDate

Which KQL statement should you use?

**Options:**

- [ ] Sales | extend OrderKey, OrderId, OrderDate
- [x] Sales | project OrderKey, OrderId, OrderDate
- [ ] Sales | summarize OrderKey, OrderId, OrderDate
- [ ] Sales | where OrderKey, OrderId, OrderDate

### Answer

**Correct answer:** Sales | project OrderKey, OrderId, OrderDate

**Reason:** The `project` operator selects the columns to include in the output.

---

## Question 16 of 25

### English

**Question:** You are creating a DAX measure to calculate the average sales amount per customer.

You need to prevent repeating calculations in the measure definition.

What should you use in the measure?

**Options:**

- [x] a variable
- [ ] a calculated column
- [ ] an iterator function
- [ ] a windowing function

### Answer

**Correct answer:** a variable

**Reason:** A DAX variable stores the result of an expression so it can be reused without repeating the calculation.

---

## Question 17 of 25

### English

**Question:** You have a Microsoft Fabric semantic model that contains a Sales table and a related Products table. The Products table contains a Category column.

You need to create a DAX measure that returns sales amount only when the current filter context contains exactly one product category. Otherwise, the measure must return a blank value.

Which DAX expression should you use?

**Options:**

- [x]
  ```
  Single Category Sales =
  IF(
  HASONEVALUE(Products[Category]),
  SUM(Sales[Amount]),
  BLANK()
  )
  ```
- [ ]
  ```
  Single Category Sales =
  IF(
  ISBLANK(SUM(Sales[Amount])),
  BLANK(),
  SUM(Sales[Amount])
  )
  ```
- [ ]
  ```
  Single Category Sales =
  CALCULATE(
  SUM(Sales[Amount]),
  ALL(Products[Category])
  )
  ```
- [ ]
  ```
  Single Category Sales =
  IF(
  HASONEVALUE(Sales[Amount]),
  SUM(Sales[Amount]),
  BLANK()
  )
  ```

### Answer

**Correct answer:**

```text
Single Category Sales =
IF(
HASONEVALUE(Products[Category]),
SUM(Sales[Amount]),
BLANK()
)
```

**Reason:** `HASONEVALUE(Products[Category])` is true only when the filter context contains one distinct product category.

---

## Question 18 of 25

### English

**Question:** You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 is assigned to a Fabric capacity and contains a lakehouse named Lakehouse1.

You plan to use the SQL analytics endpoint of Lakehouse1 to develop a semantic model. The solution must meet the following requirements:

- Refresh the model at 6 AM every day.
- Support all DAX and M functions.
- Support calculated tables.
- Prevent storage mode conflicts.
- Use only one storage mode.

Which storage mode should you use?

**Options:**

- [ ] Direct Lake
- [ ] DirectQuery
- [ ] Dual
- [x] Import

### Answer

**Correct answer:** Import

**Reason:** Import supports scheduled refresh, the full DAX and M function sets, calculated tables, and a single storage mode.

---

## Question 19 of 25

### English

**Question:** You have a Fabric workspace that contains a Direct Lake semantic model. The model contains a table named Sales. The Sales table has one row per sales transaction and a column named Amount that stores the sales amount.

You create the following DAX expression.

```text
Total Sales =
CALCULATE(
SUM(Sales[Amount]),
ALL(Sales)
)
```

You discover that the measure takes a long time to render in a visual.The visual is not filtered by the Sales table.

You need to recommend a more efficient DAX expression that calculates the same result.

Which expression should you use?

**Options:**

- [ ]
  ```
  Total Sales =
  SUMX(Sales, Sales[Amount])
  ```
- [ ]
  ```
  Total Sales =
  SUMMARIZECOLUMNS(Sales[Amount])
  ```
- [ ]
  ```
  Total Sales =
  VAR TotalSales = CALCULATE(
  SUM(Sales[Amount]),
  ALL(Sales)
  )
  RETURN TotalSales
  ```
- [x]
  ```
  Total Sales =
  SUM(Sales[Amount])
  ```

### Answer

**Correct answer:**

```text
Total Sales =
SUM(Sales[Amount])
```

**Reason:** Because the visual has no filter on Sales, removing filters with `ALL(Sales)` is unnecessary. The simple aggregation returns the same result with less work.

---

## Question 20 of 25

### English

**Question:** You have a Microsoft Fabric tenant that contains a workspace named WS1. WS1 is configured to use a Fabric capacity.

You have an Azure SQL database named SQLDB1 that contains 110 GB of data.

You plan to create a semantic model named Model1 and publish Model1 to WS1. Model1 will contain all the tables in SQLDB1. Some tables will require transformation in Power Query that include grouping, pivoting and removing columns.

How should you configure Model1?

**Options:**

- [ ] DirectQuery storage mode with Large semantic model storage format disabled
- [x] import storage mode with Large semantic model storage format enabled
- [ ] import storage mode with Large semantic model storage format disabled
- [ ] DirectQuery storage mode with Large semantic model format enabled

### Answer

**Correct answer:** import storage mode with Large semantic model storage format enabled

**Reason:** The 110 GB model requires Large semantic model storage format, and Import supports the required Power Query transformations.

---

## Question 21 of 25

### English

**Question:** You use Microsoft Power BI Desktop to generate and display DAX query-based visuals in a report. Each visual has 80 fields.

Users report slow rendering of the report visuals.

You plan to minimize negative performance impact by changing how information is presented in the report.

What change should you make?

**Options:**

- [ ] decrease the number of drill-through pages and increase the number of fields in the visuals.
- [ ] increase the number of calculated columns in the data model of the report.
- [x] increase the number of drill-through pages and decrease the number of visuals.
- [ ] increase the number of visuals and decrease the number of drill-through pages.

### Answer

**Correct answer:** increase the number of drill-through pages and decrease the number of visuals.

**Reason:** Splitting detailed information across drill-through pages and reducing the number of visuals rendered together helps reduce the report's rendering workload.

---

## Question 22 of 25

### English

**Question:** You use Microsoft Power BI Desktop to generate and display reports.

You use Performance analyzer to record the performance of your activities.

You need to identify the approximate time used by visuals in the reports to prepare queries.

Which category of tasks would contain that time?

**Options:**

- [x] DAX query
- [ ] Evaluated parameters
- [ ] Other
- [ ] Visual display

### Answer

**Correct answer:** DAX query

**Reason:** The DAX query category contains the approximate time used to prepare and execute the query for a visual.

---

## Question 23 of 25

### English

**Question:** You use Microsoft Power BI Desktop to generate and display DAX query-based visuals.

You are analyzing the performance of the following measure:

```text
Sales YoY Growth =

DIVIDE (

    ( [Sales] - CALCULATE ( [Sales], PARALLELPERIOD ( 'Date'[Date], -12, MONTH ) ) ),

    CALCULATE ( [Sales], PARALLELPERIOD ( 'Date'[Date], -12, MONTH ) )

)
```

You need to improve the performance of the measure.

What should you include in the measure definition?

**Options:**

- [ ] DATESINPERIOD
- [ ] nested calculations
- [ ] SUMX
- [x] variables

### Answer

**Correct answer:** variables

**Reason:** Variables allow the repeated prior-period calculation to be evaluated once and reused in the measure.

---

## Question 24 of 25

### English

**Question:** You use Microsoft Power BI Desktop to generate and display visuals within a report.

You use Performance analyzer to record the performance of your report interaction activities.

You plan to verify your original results by rerecording the performance by using the same visuals.

You need to ensure that the results are comparable.

What should you do first in Power BI Desktop?

**Options:**

- [ ] Close the report.
- [ ] Customize optimization presets.
- [x] Pause the visuals.
- [ ] Refresh the visuals.

### Answer

**Correct answer:** Pause the visuals.

**Reason:** Pausing the visuals prevents them from refreshing while the same interactions are reproduced, making the Performance analyzer recordings comparable.

---

## Question 25 of 25

### English

**Question:** You use Microsoft Power BI Desktop to generate and display DAX query-based visuals.

You plan to use Power BI Desktop Performance analyzer to determine how long it takes to load a visual included in a report.

You need to eliminate any impact of the visual cache on your performance analysis.

What should you do first?

**Options:**

- [x] Add a blank page to the report.
- [ ] Change the filter on the visual.
- [ ] Refresh the data model.
- [ ] Reopen the Performance Analyzer pane.

### Answer

**Correct answer:** Add a blank page to the report.

**Reason:** Adding a blank page is the first step to clear the visual cache; the report is then saved and closed with the blank page selected before reopening it for analysis.

---

## Renewal assessment result

- **Assessment:** Your renewal assessment results for Microsoft Certified: Fabric Analytics Engineer Associate
- **Status:** Pass
- **Assessment date:** September 25, 2026
- **Valid until:** Mar 23, 2028
- **Overall results:** 88%
- **Required to pass:** 60%

### Performance by assessment section

- Secure data access in Microsoft Fabric
- Manage the semantic model development lifecycle
- Get started with lakehouses in Microsoft Fabric
- Discover and connect to data in OneLake
- Design dimensional models for analytics in Microsoft Fabric
- Get started with Real-Time Intelligence in Microsoft Fabric
- Design semantic models for scale in Microsoft Fabric
- Optimize a model for performance in Power BI
