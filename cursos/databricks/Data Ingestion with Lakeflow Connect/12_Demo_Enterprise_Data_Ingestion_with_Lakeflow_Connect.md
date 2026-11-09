# Demo: Enterprise Data Ingestion with Lakeflow Connect

**Course:** Data Ingestion with Lakeflow Connect  
**Lesson Type:** Video Walkthrough / Guided Tour (Duration: 09:40)  
**Screenshot:** `capturas/12_Demo_Enterprise_Data_Ingestion_with_Lakeflow_Connect.png`

---

## Executive Summary & Workflow

This demonstration walks through Databricks Lakeflow Connect managed connectors in the product documentation and interactive guided tours, demonstrating:
1. **Lakeflow Architecture Portfolio:**
   - **Lakeflow Connect:** Native, out-of-the-box managed connectors for databases, SaaS applications, files, and streams.
   - **Lakeflow Pipelines:** Declarative Spark pipelines for transformation.
   - **Lakeflow Jobs:** Workflow orchestration and scheduling engine.
2. **Connector Categories:**
   - **Database Connectors:** Relational database CDC (PostgreSQL, MySQL, SQL Server, Oracle).
   - **SaaS Connectors:** Enterprise application ingestion (Salesforce, Workday, ServiceNow, Jira, HubSpot).
   - **File Connectors:** Google Drive, SharePoint, cloud storage.
   - **Streaming Connectors:** Kafka, event streams.
3. **Step-by-Step Salesforce Lakeflow Ingestion Setup:**
   - Navigate to **Data Ingestion** (`Add > Upload Data > Salesforce`).
   - Define **Ingestion Pipeline Name** and **Destination Catalog**.
   - Create and authenticate a new connection using OAuth / credentials stored securely in Unity Catalog.
   - Select source tables/objects (e.g., Accounts, Leads, Opportunities) or choose *All*.
   - Map tables to destination **Catalog** and **Schema**.
   - Configure synchronization schedule: Interval-based (e.g., Every 2 hours) or Advanced cron syntax.
   - Deploy & Monitor: Track pipeline execution via **List View** (records inserted/updated/dropped, durations) and **Graph View** (lineage and DAG execution).

---

## Verbatim Video Transcript (148 Cues)

| Timestamp | Spoken Transcript |
| --- | --- |
| 00:01 - 00:04 | Welcome to demo, Enterprise Data Ingestion with Lakeflow Connect. |
| 00:05 - 00:10 | So in this demonstration, we are going to see how you can ingest the enterprise data using Lakeflow Connect managed connectors. |
| 00:15 - 00:15 | Great. |
| 00:16 - 00:20 | So first thing first, I'm going to show you a documentation. |
| 00:21 - 00:22 | So I'm going to open this. |
| 00:23 - 00:26 | Then there's a general Databricks documentation page. |
| 00:26 - 00:28 | Make sure to click on the data engineering. |
| 00:28 - 00:33 | Now you have all the different components or the product that we have for data engineering. |
| 00:36 - 00:39 | You can see Lakeflow Connect, Lakeflow Pipelines, Lakeflow Designer, Lakeflow Jobs. |
| 00:41 - 00:45 | So Lakeflow Connect is the one which we had just saw, and we have courses for Lakeflow Pipeline, which is nothing but Spark declarative pipeline, and Lakeflow Job is the orchestration tool. |
| 00:52 - 00:54 | We do have a course for that, so you can check it out. |
| 00:55 - 00:59 | So if I go into the Lakeflow Connect, you will notice there are like bunch of things. |
| 01:02 - 01:10 | Now, this is for the concepts, and if I look at it, there are some streaming connectors, some SaaS connectors, some databases connectors, file connectors, and migrate to Delta Lake. |
| 01:21 - 01:26 | So these connectors are generally used when you have your data stored externally and you want to migrate that into the Databricks. |
| 01:30 - 01:35 | Now, if I scroll through this page, please notice that this was updated last on Sep 11, 2026. |
| 01:40 - 01:46 | So it gets updated regularly because we keep on adding new connectors, and we keep, kept on providing new facilities. |
| 01:48 - 01:52 | Databricks is a very innovative company, and things change quite fast here. |
| 01:55 - 02:00 | So if you see, the first one is a database connector in which we would have a relational databases such as MySQL, PostgreSQL, Oracle, so traditional database connectors. |
| 02:08 - 02:11 | Then we have SaaS connectors in which we provide support for the Jira, HubSpot, Salesforce CDC. |
| 02:13 - 02:17 | Then you would have a file connector, which is essentially a Google Drive or a SharePoint. |
| 02:19 - 02:23 | Then we have support for the streaming one where, where we have connectors for streaming platforms like Kafka. |
| 02:28 - 02:28 | Right. |
| 02:28 - 02:30 | Then we have query-based connectors and direct write. |
| 02:32 - 02:32 | Right. |
| 02:32 - 02:36 | So if you see the service model, we have a flexible service model. |
| 02:36 - 02:39 | So we have out-of-box connectors, a fully managed service. |
| 02:40 - 02:43 | If you want to use it via UI or powerful APIs, you can do that. |
| 02:44 - 02:48 | And if you want to have further transformation and you need more customization, then you can create a custom pipeline using lakeflow pipelines. |
| 02:54 - 02:54 | Right. |
| 02:55 - 03:02 | So if you need to know more about the managed connectors and what are the different connectors and want to deep dive into each one, you can simply click on this and go to any one. |
| 03:07 - 03:12 | For example, if I go to Jira, so you can see what are the feature availability and what are the authentication methods. |
| 03:16 - 03:18 | Now, if I go back to the demo. |
| 03:21 - 03:24 | And I'm going to expand the left-hand side pane. |
| 03:24 - 03:27 | Here you have option of data ingestion. |
| 03:27 - 03:29 | So let's explore this. |
| 03:29 - 03:31 | So I'm going to open it in a new tab. |
| 03:33 - 03:38 | Now, if you look at this page, you can directly get started with adding a data source directly. |
| 03:40 - 03:44 | If you see the dropdown menu, there are multiple data sources that you can directly attach, do the authentication, and you can directly fetch the data. |
| 03:49 - 03:54 | And if your data lies in a table or data files and you want to replace something, a existing one, you can use this create or modify table. |
| 03:58 - 04:01 | Or if you have a CSV file, PDF, or any sort of a data, you can upload that to volume and then use that volume data to form a table, right? |
| 04:08 - 04:11 | And now Databricks have extended the support for connectors. |
| 04:11 - 04:14 | So you can see these are like directly supported, which is a Databricks connectors, Amazon S3, Google Analytics raw data, Zendesk, and many others you can see here. |
| 04:23 - 04:26 | So some of these are in a preview feature right now, but yeah, it will be generally available. |
| 04:29 - 04:33 | Then you have community and custom connectors here, right? |
| 04:34 - 04:37 | And then we have partner connectors as well. |
| 04:38 - 04:40 | So you can use this as intermediator to connect to a external data source. |
| 04:42 - 04:47 | So that will be connected to, let's say, Fivetran integration and then connected to the Databricks. |
| 04:48 - 04:49 | So it will be a via connection. |
| 04:50 - 04:53 | Then obviously we have this legacy product, which we don't recommend to upload files into the Databricks file system. |
| 04:58 - 05:01 | We highly recommend the upload files to the volume because then you can easily manage and govern that using Unity Catalog. |
| 05:08 - 05:09 | Now back to the demo. |
| 05:10 - 05:14 | Now you can see we have this demonstration, which you can see how you can connect manage connector. |
| 05:16 - 05:22 | So this is a demonstration, and if I click on this, it's going to open a app for me. |
| 05:22 - 05:27 | And you can see there are like three level of support: the application, the databases, and Zerobus Ingest. |
| 05:29 - 05:33 | So I'm going to click on one by one. |
| 05:33 - 05:37 | So I'm going to click on Salesforce so you can see we have a launch product tour. |
| 05:38 - 05:41 | You can get more details about how you can connect your Databricks Lakeflow Connect for Salesforce. |
| 05:44 - 05:49 | Similarly, if I click for SQL Server, then you have a launch product tour for this as well. |
| 05:51 - 05:54 | And same for the Zerobus Ingest, right? |
| 05:55 - 06:00 | So I'm going into the Salesforce tour, and we are going to explore this. |
| 06:03 - 06:04 | Okay, now let's explore. |
| 06:05 - 06:08 | So the first thing here is either you can click on the new one. |
| 06:08 - 06:12 | This will land you in the same page if you would have clicked on the data ingestion here. |
| 06:15 - 06:19 | So if you click on Add and Upload Data, you can see in the Databricks standard connector, you have this option of Salesforce. |
| 06:23 - 06:26 | If you click on that, the first one, you can define some name of your ingestion pipeline. |
| 06:28 - 06:32 | So what's going to happen, your existing data that's present in Salesforce is going to be synchronized with Databricks, right? |
| 06:35 - 06:38 | So there's going to be a pipeline that's being created, which is going to synchronize data from your external connector, in this case, Salesforce, to your Databricks. |
| 06:47 - 06:50 | So first thing first, we are going to give it a name. |
| 06:50 - 06:54 | Once you give that, then you define your destination catalog. |
| 06:54 - 06:57 | So a catalog in which you want to move data to. |
| 06:57 - 07:01 | Once you define that, then you need to set up a connection. |
| 07:01 - 07:04 | So you can click on this Create a Connection, or you can use the existing one as well. |
| 07:06 - 07:11 | See, you click on the Create Connection, then it will ask for the authenticate and create connection. |
| 07:14 - 07:19 | Once you do that, you're going to click on Create Pipeline and continue. |
| 07:20 - 07:25 | Then obviously, you would have many tables under one particular catalog or one particular schema. |
| 07:28 - 07:31 | If you want to move all of them, you can click on All. |
| 07:31 - 07:34 | But if you want to move only a couple of them, you just click on them and click the Next button. |
| 07:39 - 07:43 | Once you have that, you're going to select your destination catalog and schema. |
| 07:45 - 07:50 | Then obviously, you can create a schedule when you want to run this pipeline, when you want to run this synchronization. |
| 07:53 - 07:57 | So ideally, a person, let's say, if a data ingested at 6 PM, so you want to run this at 6.05 or 6.10 PM. |
| 08:00 - 08:04 | You can define the time, or you can define the schedule as per in the every 6 hours, which you can see here, right? |
| 08:08 - 08:13 | So the simple one is here to select every 2 hours, or if you go to the advanced one, you will get the cron syntax as well. |
| 08:17 - 08:19 | Once you are done, you're going to click on Save and run pipe. |
| 08:19 - 08:26 | Then you will get this list view of the current process, how much time it has taken, what has been upserted, what have been dropped for each particular table. |
| 08:35 - 08:39 | Now, you have two options, either you can see a graph view or a list view. |
| 08:39 - 08:40 | If you click on the graph one, |
| 08:42 - 08:44 | then you'll find that. |
| 08:45 - 08:53 | Okay, so this was actually a demonstration which is compromised of screenshots because in our Vocareum environment, we actually can't show you the, because in our current Vocareum environment, we don't have permission to show the lakeflow managed connectors, so that's why this demonstration. |
| 09:10 - 09:11 | Okay, back to the demo. |
| 09:12 - 09:16 | Now, I highly recommend going through this to documentation as well. |
| 09:17 - 09:20 | And so that's about this demo. |
| 09:20 - 09:24 | So in this demonstration, we see how you can ingest your data, your enterprise data that resides somewhere else into the Databricks using Lakeflow Connect managed connectors. |
| 09:34 - 09:35 | Thank you. |
