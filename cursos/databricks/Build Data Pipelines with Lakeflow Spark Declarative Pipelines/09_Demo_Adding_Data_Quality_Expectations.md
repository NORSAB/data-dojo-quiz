# Demo: Adding Data Quality Expectations

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines
**Tipo de Contenido:** Video con Demostración Práctica Guiada
**Duración:** 9 minutos 33 segundos (573 segundos)
**Archivo de Captura:** `capturas/09_Demo_Adding_Data_Quality_Expectations.png`

## 1. Resumen y Objetivos de la Demostración

- Aplicación práctica de restricciones de calidad de datos en SQL dentro de la definición de `orders_silver`.
- Configuración y prueba de una regla **WARN** para validar valores categóricos (`notifications IN ('Y','N')`).
- Configuración y prueba de una regla **DROP ROW** para descartar registros nulos (`customer_id IS NOT NULL`).
- Configuración y prueba de una regla **FAIL UPDATE** para proteger la integridad de fechas históricas (`order_timestamp > "2021-01-01"`).
- Inspección de métricas de calidad de datos en la interfaz gráfica del DAG de Lakeflow Pipelines: visualización de filas pasadas vs. filas violadas/descartadas.
- Consulta del registro de eventos (`event_log`) para auditoría de calidad de datos.

## 2. Transcripción Completa y Verbatim del Video con Marcas de Tiempo

**[00:00 - 00:01]** Hello everyone.

**[00:01 - 00:03]** My name is Marcelino Mayorga.

**[00:03 - 00:07]** I'm a senior technical instructor, and I will walk you through in this demo

**[00:07 - 00:09]** 07, Adding Data Quality Expectations.

**[00:10 - 00:14]** For this demo, the objectives are quite simple, mainly to focus

**[00:14 - 00:15]** on data quality expectations.

**[00:16 - 00:19]** We're going to take our pipeline and specifically our orders

**[00:19 - 00:22]** code, and we're going to extend it to include the expectations.

**[00:23 - 00:27]** For this, first we need to attach this notebook with serverless with version 5.

**[00:29 - 00:33]** Then we're going to run the classroom setup, which I already ran.

**[00:33 - 00:37]** Remember, this is going to provide for us all resources for our

**[00:37 - 00:39]** demo, variables and functions.

**[00:41 - 00:42]** Here we can see some of them.

**[00:45 - 00:50]** And in cell 7 here, we're getting the full path to our JSONs for orders.

**[00:50 - 00:52]** So we can change here on the catalog.

**[00:53 - 00:59]** Here we can see our catalog or labuser or sdp_1_bronze schema or source volume.

**[01:00 - 01:04]** And over here we got our orders folder with the JSON that we're going to use.

**[01:06 - 01:11]** Next, here in cell 10, we're going to create a pipeline.

**[01:11 - 01:14]** You don't have to do it manually anymore.

**[01:14 - 01:17]** This function of create_declarative_pipeline, it is

**[01:17 - 01:19]** provided by the classroom setup.

**[01:20 - 01:24]** So if you're really interested in how or really curious in how you

**[01:24 - 01:28]** get to create a pipeline using just code, I recommend you to check this

**[01:28 - 01:30]** function in the classroom setup.

**[01:30 - 01:34]** It uses the API in order to create this object.

**[01:34 - 01:37]** So this is ideally as you move throughout the environments.

**[01:37 - 01:43]** So in this case, this pipeline is called 07-Adding Data Quality Expectations

**[01:43 - 01:44]** with the name of our catalog.

**[01:45 - 01:46]** It has the configuration for

**[01:48 - 01:49]** a root path folder.

**[01:49 - 01:55]** In this case, it's located in your workspace over here, and it passes

**[01:55 - 02:00]** also the name of our catalog and schema for our default, and also it set

**[02:00 - 02:02]** ups the code assets into our orders.

**[02:03 - 02:04]** So here is our orders_pipeline.

**[02:05 - 02:06]** Perfect.

**[02:07 - 02:11]** So from here, we can open the jobs and pipelines in a new tab, and

**[02:11 - 02:14]** we can see the pipeline created.

**[02:15 - 02:17]** So we can open this.

**[02:17 - 02:22]** Please be aware that when you open this pipeline, it will take you to

**[02:22 - 02:26]** the monitoring page where you can see your DAG, you can see your pipeline

**[02:26 - 02:30]** details, and also you can see the tables and performance of this pipeline.

**[02:31 - 02:32]** At this point, we haven't executed.

**[02:32 - 02:37]** We want to see the code, so we want to open here Edit pipeline or in

**[02:37 - 02:40]** the source code, Open in editor.

**[02:40 - 02:42]** So I'm gonna click over here.

**[02:42 - 02:47]** This is going to give us a new tab where we have the editor in full view.

**[02:48 - 02:50]** Let's review the folders in this pipeline.

**[02:51 - 02:55]** So first of all, we got the explorations folder that, as you can see, we got

**[02:55 - 02:58]** an empty sample exploration notebook.

**[02:59 - 03:04]** You can see here we got a broken chain that it refers that this notebook won't

**[03:04 - 03:06]** be considered when you run your pipeline.

**[03:07 - 03:09]** So normally, these files are left for exploration.

**[03:10 - 03:12]** Next, we got the orders folder.

**[03:12 - 03:18]** As you can see, the folder and the file, they'll both have a pipeline icon.

**[03:18 - 03:24]** So this file is considered for when running the pipeline to be executed.

**[03:25 - 03:27]** So you don't run these files individually.

**[03:28 - 03:30]** Now, here we got one for the SQL file.

**[03:30 - 03:34]** And please notice here below, we also have a Python excluded folder.

**[03:35 - 03:38]** We added this folder intentionally.

**[03:38 - 03:39]** We added also this orders_pipeline_python.py

**[03:43 - 03:48]** file, which, as you can see, it's also excluded.

**[03:48 - 03:51]** It has the broken chain icon.

**[03:51 - 03:55]** And mainly because this orders_pipeline, it has the very same

**[03:55 - 03:57]** implementation for orders_pipeline.

**[04:00 - 04:04]** So in this case, we are just leaving one out, otherwise the service

**[04:04 - 04:08]** will let us know, "Hey, you have the very same code on both files."

**[04:08 - 04:11]** So that will create conflicts, and that's the main reason.

**[04:11 - 04:15]** But it is here for you to review and compare both languages.

**[04:16 - 04:18]** Let's continue by reviewing this code.

**[04:19 - 04:22]** So I'm going to zoom out a little bit.

**[04:22 - 04:26]** So here we can see that the orders_bronze, here we got the CREATE

**[04:26 - 04:30]** OR REFRESH STREAMING TABLE, and mainly this table hasn't changed.

**[04:30 - 04:35]** The expectations were added into the silver layer table, order_silver.

**[04:36 - 04:41]** And here, just after the CREATE OR REFRESH STREAMING TABLE, here we

**[04:41 - 04:43]** have a section for the constraints.

**[04:43 - 04:47]** So first of all, here we got the constraint of valid_notification,

**[04:47 - 04:51]** so you give a custom name, then the keyword of expect.

**[04:51 - 04:56]** And then in here, you run your Boolean evaluations, leveraging

**[04:56 - 04:57]** the columns of your table.

**[04:58 - 05:02]** In this case, we're looking for the notifications column

**[05:02 - 05:05]** to only have values of Y and x.

**[05:06 - 05:11]** Now, currently, the data that we have, it has a name, and

**[05:11 - 05:12]** name represents for a null.

**[05:13 - 05:18]** So here, intentionally, we modify this expectation, so we can launch it.

**[05:18 - 05:22]** In this case, we only have, it's going to warn the data.

**[05:23 - 05:26]** Next, we got the second expectation called valid_date.

**[05:27 - 05:33]** And in this case, we are validating that records with order_timestamp is

**[05:33 - 05:36]** greater from December 26th from 2021.

**[05:37 - 05:42]** In this case, we're adding a behavior or an action, and this

**[05:42 - 05:44]** one is for ON VIOLATION DROP ROW.

**[05:44 - 05:46]** It means it's going to drop the record.

**[05:47 - 05:50]** And then we got a third expectation.

**[05:50 - 05:51]** We got the valid_id.

**[05:52 - 05:56]** In this case, we're validating that the customer_id not to be null.

**[05:57 - 06:01]** In this case, we're adding an action ON VIOLATION FAIL UPDATE.

**[06:02 - 06:05]** As you may notice, the first one didn't have a validation, so by

**[06:05 - 06:07]** default, it's going to warn the data.

**[06:09 - 06:11]** As for the content of this table, it hasn't changed.

**[06:11 - 06:13]** It is the same information.

**[06:13 - 06:18]** And then we got the materialized view, so we can proceed to run this pipeline

**[06:20 - 06:27]** So we select our default catalog and then schema, and we run our pipeline.

**[06:29 - 06:31]** So our pipeline just finished.

**[06:31 - 06:37]** So here we can see the orders_bronze_demo where we got 174 records.

**[06:38 - 06:43]** And last time in our previous demo where we ran this, we didn't have these

**[06:43 - 06:46]** expectations, so we had the very same 174.

**[06:47 - 06:51]** With these expectations, remember, we got here VIOLATION

**[06:51 - 06:53]** DROP ROW and also FAIL UPDATE.

**[06:54 - 06:59]** So here you can see that we're down to 148 records out of that 174.

**[07:01 - 07:04]** And mainly, here we can see 2 extra icons.

**[07:04 - 07:07]** The first icon, it is for the drop records.

**[07:07 - 07:08]** It's a square.

**[07:08 - 07:14]** And here we can see that we are getting 26 records that were dropped mainly

**[07:14 - 07:17]** because of this valid_date expectation.

**[07:18 - 07:23]** And then we have a second icon that corresponds to a triangle that represents

**[07:23 - 07:26]** the warn records, that these are aligned to the valid_notifications.

**[07:28 - 07:31]** Since our pipeline finished without any problem, it means

**[07:31 - 07:35]** we don't have any expectation with customer_id not to be null.

**[07:38 - 07:42]** Also, you can go ahead and click on any of these icons, and a side panel will

**[07:42 - 07:48]** be shown here representing precisely based on the percentage of our data.

**[07:48 - 07:55]** Here we got that the data was written 148, representing 85% of the data.

**[07:56 - 08:01]** And then we got 26 records that were dropped because of

**[08:01 - 08:03]** the invalid_date expectation.

**[08:03 - 08:06]** That represents 14.9%.

**[08:06 - 08:10]** And here you have a toggle where you can see all the expectations,

**[08:10 - 08:15]** and this one confirms that we don't have any customer null.

**[08:16 - 08:20]** By the way, you can also see this information in the tables

**[08:21 - 08:22]** here with the expectations.

**[08:22 - 08:27]** You can see your table, and you will see 1 met and 2 unmet.

**[08:27 - 08:30]** And if you click on this one, it's gonna show that very same panel.

**[08:33 - 08:36]** Last thing I would like to highlight is here in the orders_silver_demo,

**[08:38 - 08:39]** we check for that data.

**[08:40 - 08:44]** Again, I want to show you here that notifications, we got them with Y

**[08:44 - 08:50]** and O. And in here, we just change it for an X. So here we can see a few

**[08:50 - 08:55]** records that they have N. All these N are infringing these expectations.

**[08:57 - 09:01]** So as in conclusion, we just extended our order_silver to use

**[09:01 - 09:03]** expectations in three levels.

**[09:03 - 09:09]** First to warn, second to drop, and third to halt and halt all the pipeline

**[09:09 - 09:11]** in there you need manual intervention.

**[09:12 - 09:18]** But these, the expectations are useful to validate required fields, valid ranges,

**[09:18 - 09:23]** business rules, even removing bad records, or even to protect critical datasets.

**[09:23 - 09:28]** So are there to help you to monitor quality and trends with all your data.

