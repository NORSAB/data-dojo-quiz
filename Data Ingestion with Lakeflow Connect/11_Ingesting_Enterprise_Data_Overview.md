# Lecture: Ingesting Enterprise Data Overview

**Course:** Data Ingestion with Lakeflow Connect  
**Lesson Type:** SCORM Interactive Presentation  
**Screenshot:** `capturas/11_Ingesting_Enterprise_Data_Overview_full.png`

---

## Overview
In this lecture, you will learn how Lakeflow Connect Managed Connectors and Partner Connect streamline enterprise data ingestion by enabling fast and reliable integration from databases and applications into the Databricks Lakehouse through flexible, fully managed, and partner-supported options.

## Learning Objectives
By the end of this lecture, you will be able to:
- Explain the need for managed connectors when ingesting data from enterprise databases and SaaS applications beyond cloud object storage.
- Describe the benefits of LakeFlow Connect Managed Connectors including simplified setup, UI-driven configuration, and fully managed infrastructure.
- Compare the SaaS and database ingestion architectures used by LakeFlow Connect Managed Connectors.
- Describe Partner Connect as an alternative for data sources without a native managed connector.

---

## A. Data Ingestion to Databricks Overview
So far, we have discussed ingesting data from cloud object storage into Databricks using techniques like `CREATE TABLE`, `COPY INTO`, and Auto Loader.

- But what about ingesting data from databases or enterprise applications?
- What techniques can we use to handle those sources?

---

## B. LakeFlow Connect Managed Connectors
The first method for ingesting enterprise data is by using LakeFlow Connect Managed Connectors.

LakeFlow Connect Managed Connectors are built into Databricks and are designed to simplify the process of ingesting data from a wide variety of enterprise databases and applications.

They provide a low-code, fully managed experience, reducing the need for manual configuration or custom integration code.

### Core Benefits:
- **Simplify the process** of ingesting data from a wide variety of enterprise databases and applications.
- **Provide an easy-to-use user interface (UI)** (or you can use the REST API).
- **Fully managed by Databricks**, reducing the need for manual configuration, custom integration code, or infrastructure management.

---

## C. Data Ingestion with Lakeflow Connect Managed Connectors
With Lakeflow Connect managed connectors, you can easily begin ingesting enterprise data from sources like Workday, Salesforce, PostgreSQL, SQL Server, and more.

### Documentation & Release Status:
- Highly efficient, Databricks-managed connectors designed specifically for fast, reliable ingestion into your Lakehouse.
- Setup can be done through a "point and click" UI or via API.
- Managed connectors are in various release states (some in public preview, others in GA). Always check official documentation for the latest release status.

---

## D. Lakeflow Connect Managed Connectors: SaaS Ingestion Architecture

Lakeflow Connect enables data ingestion from external, publicly accessible sources such as APIs or OLAP endpoints into **Streaming Delta Tables**, using serverless, declarative pipelines. 

You can set up these pipelines using the user interface (UI) or the API. Managed connectors leverage efficient incremental reads and writes to make data ingestion faster, scalable, and more cost-efficient, while your data remains fresh for downstream consumption.

### SaaS Ingestion Flow:
1. A **Lakeflow Serverless Declarative Pipelines job** collects credentials from Unity Catalog.
2. The job reaches out to the publicly accessible data source (e.g., API, open OLAP port, Salesforce, Workday, ServiceNow).
3. The service transforms the data and stores it directly to a **Streaming Delta Table**.

### Additional Architectural Notes:
- **Managed Ingestion Pipeline:** A new pipeline type introduced specifically to connect to public SaaS sources, extract data, and ingest directly into a streaming table. These pipelines are largely predefined and managed by Databricks, handling source-specific complexities (such as pagination, rate limits, and schema changes).
- **Data Plane vs Control Plane:** For SaaS connectors, **all data movement happens entirely within the data plane**. The control plane is only used for pipeline setup, monitoring (e.g., reading event logs), and pipeline lifecycle management.

---

## E. Database Ingestion Architecture

Like with SaaS connectors, this architecture is designed to move data into Streaming Delta Tables — but this time from **external databases** (e.g., MySQL, Postgres, SQL Server, Oracle) rather than public APIs. Databases often reside on-premise or within a private cloud (VPC/VNet).

### Database Ingestion Flow:
1. The **classic compute Declarative Pipelines job** collects database credentials from Unity Catalog.
2. It uses the credentials to connect and extract data/change logs from your database sources.
3. The latest state and staging data are saved to a **Unity Catalog Volume**.
4. A **Serverless Declarative Pipelines job** reads the staged data from the Unity Catalog Volume and processes it into your **Streaming Delta Tables**.

### Key Components Introduced:
1. **Ingestion Gateway:**
   - A dedicated pipeline that connects to the database to extract:
     - Metadata
     - Initial table snapshots
     - Continuous change data capture (CDC) change logs
   - Stages all extracted data in a Unity Catalog (UC) Volume.
   - *Why a separate gateway?*
     - **Networking:** Many customer databases sit behind corporate firewalls or private networks without public IP access. The gateway can be deployed inside the private network (or via Private Link).
     - **Connection & Load Limiting:** Isolating the gateway minimizes direct connection count to the operational database. One gateway speaks to the database and fans out to $N$ downstream serverless pipelines.
2. **Unity Catalog Volume:**
   - Acts as the intermediate staging and state layer.
   - Enables downstream serverless streaming pipelines to consume changes efficiently.
   - Governed by standard Unity Catalog access controls and RBAC.

---

## F. Data Ingestion with Partner Connect

If there is no native managed connector available for your specific data source, you can use **Partner Connect**.

### F1. Partner Connect Overview
- Partner Connect lets you create trial accounts with select Databricks technology partners directly from the Databricks UI.
- It connects your Databricks workspace to partner solutions with automated credential and compute configuration.
- Allows you to test and validate partner solutions using your data in the Lakehouse, then adopt the solution that best fits your enterprise requirements.

### F2. Partner Connect Ecosystem
Ingestion partners remain a vital pillar of the Databricks ecosystem:
- Offer a wide range of specialized connectors with deep legacy functionality.
- Maintained by dedicated partner engineering teams.
- Supported partners include: **Fivetran, Informatica, Qlik, Rivery, Alteryx, Prophecy**, and others.
- Databricks continues to support customer choice: even when a native Lakeflow connector exists, partner connectors remain fully supported.

---

## G. Conclusion
In this lecture, you learned how to ingest enterprise data into Databricks beyond cloud object storage:
- **LakeFlow Connect Managed Connectors:** Simplify ingestion from enterprise databases and SaaS applications with a fully managed, UI-driven or API-driven experience.
- **SaaS Ingestion Architecture:** Serverless Declarative Pipelines job retrieves credentials from Unity Catalog, queries the public API/endpoint directly in the data plane, and streams to Streaming Delta Tables.
- **Database Ingestion Architecture:** Uses an **Ingestion Gateway** (classic compute) deployed near private/on-prem databases, stages data into **Unity Catalog Volumes**, and a serverless pipeline streams to Streaming Delta Tables.
- **Partner Connect:** Provides a complementary ecosystem of established ETL/ELT partners (Fivetran, Informatica, Qlik, Rivery, etc.) for non-native sources and multi-cloud architectures.

### Next Steps
In the next section, you will see a demonstration of setting up enterprise data ingestion pipelines using LakeFlow Connect.
