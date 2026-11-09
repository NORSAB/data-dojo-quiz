# Demo: Developing a Simple Pipeline

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines
**Tipo de Contenido:** Video con Demostración Práctica Guiada
**Duración:** 20 minutos 11 segundos (1,211 segundos)
**Archivo de Captura:** `capturas/07_Demo_Developing_a_Simple_Pipeline.png`

## 1. Resumen y Objetivos de la Demostración

- Construcción práctica del primer flujo completo (Orders Flow) en el editor multi-archivo.
- Implementación de la tabla de ingesta Bronze (`orders_bronze`) usando Auto Loader (`FROM STREAM read_files`).
- Implementación de la tabla de transformación Silver (`orders_silver`) leyendo incrementalmente desde Bronze (`FROM STREAM orders_bronze`).
- Creación de la vista materializada Gold (`gold_orders_by_date`) agregando pedidos por fecha con optimizaciones Serverless.
- Ejecución inicial (Full Refresh / Initial Run) y validación del DAG interactivo y de los datos generados en Unity Catalog.
- Simulación de llegada de nuevos archivos JSON y comprobación del procesamiento incremental exactamente una vez.

## 2. Transcripción Completa y Verbatim del Video con Marcas de Tiempo

**[00:00 - 00:01]** Hello, everyone.

**[00:01 - 00:03]** My name is Marcelino Mayorga.

**[00:03 - 00:07]** I'm a senior technical instructor, and I will walk you through in this

**[00:07 - 00:09]** demo 05, Developing a Simple Pipeline.

**[00:10 - 00:14]** In this demo, we're going to create a new SDP pipeline to migrate our

**[00:14 - 00:17]** traditional ETL orders pipeline.

**[00:17 - 00:21]** For this, we're going to use SQL to create the streaming tables for the

**[00:21 - 00:25]** bronze and silver layers, and then a materialized view for the gold layer.

**[00:26 - 00:30]** Next, we're going to configure our pipeline using a source

**[00:30 - 00:35]** configuration variable that holds the source path for our JSON orders.

**[00:36 - 00:40]** Finally, we're going to review how to run a pipeline, showcase

**[00:40 - 00:43]** incremental ingestion, and show you the table's history.

**[00:45 - 00:50]** As usual, we need to attach our notebook to our cluster.

**[00:51 - 00:57]** Make sure you're connected into Serverless version 5, and let's run the classroom

**[00:57 - 01:00]** setup that is going to provide for us all the resources for this demo.

**[01:01 - 01:03]** I already ran it here.

**[01:04 - 01:09]** We can go into the next cell that is going to provide us a variable that,

**[01:09 - 01:14]** again, we're going to use this value for our configuration of our pipeline.

**[01:15 - 01:19]** So make sure to copy this value that we're going to use this later on.

**[01:22 - 01:27]** From here, we're going to create a new SDP pipeline so we can migrate

**[01:27 - 01:29]** our traditional ETL pipeline.

**[01:30 - 01:34]** So we're going to open the left menu where we got jobs and pipelines, and

**[01:34 - 01:38]** we're going to open this in a new tab because we'll be back into this

**[01:38 - 01:42]** notebook whether to check for this configuration or check the details

**[01:42 - 01:44]** for our tables we're going to create.

**[01:46 - 01:49]** So here we're going to create a new ETL pipeline.

**[01:54 - 01:56]** Now we're going to rename our pipeline.

**[01:57 - 02:00]** So we're going to double-click here in the input, and we're going to give the

**[02:00 - 02:04]** name 05-Developing a Simple Pipeline.

**[02:05 - 02:08]** Remember, all the pipelines, they do have a root pipeline folder.

**[02:08 - 02:12]** So in this case, we're being asked if we want to rename that folder as well.

**[02:13 - 02:15]** So we're going to accept.

**[02:18 - 02:20]** And notice how the folder was renamed.

**[02:22 - 02:25]** Next, we want to set up our catalog and schema.

**[02:25 - 02:29]** And notice here on the top right, we got a selector for that.

**[02:29 - 02:32]** Notice that it's already set up our default catalog, and we

**[02:32 - 02:34]** want to select our sdp_1_bronze.

**[02:34 - 02:39]** So let's remove the default value, and then from the dropdown, select the

**[02:39 - 02:43]** sdp_1_bronze schema, and then Save.

**[02:45 - 02:48]** As you may notice, after selecting your catalog and schema, you'll

**[02:48 - 02:50]** see the pipeline settings panel.

**[02:50 - 02:52]** We'll be back in to review this later on.

**[02:53 - 02:56]** But first, we want to rename our transformations folder.

**[02:57 - 03:01]** So we can just right-click onto this folder, and we can click rename folder.

**[03:02 - 03:05]** And in this case, we want to use the word of orders.

**[03:09 - 03:11]** Also, in here we got a Python file.

**[03:11 - 03:13]** We're going to keep using a SQL file.

**[03:13 - 03:17]** Please notice that you can add as many files as you want and

**[03:17 - 03:22]** need for your pipeline, in your notebook, a Python file, or a query.

**[03:22 - 03:26]** In this case, we're just going to rename this into orders_pipeline.

**[03:29 - 03:32]** And also I'm going to change the extension to be a SQL file.

**[03:36 - 03:36]** Perfect.

**[03:38 - 03:40]** Now let's review the pipeline settings.

**[03:40 - 03:45]** So I'm gonna close these notifications and open this right side panel.

**[03:46 - 03:48]** In this pipeline settings, you can find all the information and

**[03:48 - 03:50]** configuration for this pipeline.

**[03:50 - 03:54]** You can find the ID, the type, the name, the pipeline mode.

**[03:55 - 03:56]** We're going to review these later on.

**[03:56 - 04:01]** Then we got the creator, owner, and run as, which is a best practice in what

**[04:01 - 04:06]** platforms to have a service account only to be running into this pipeline.

**[04:07 - 04:10]** We also have the section for code assets.

**[04:10 - 04:15]** In here, we can select or root full folder, which in this case is

**[04:15 - 04:17]** developing type a simple pipeline.

**[04:18 - 04:19]** Then we got the orders.

**[04:20 - 04:26]** Again, so in your pipeline has a folder, and it has the code that is

**[04:26 - 04:28]** going to be executed in the pipeline.

**[04:29 - 04:31]** So the source code is where you define that.

**[04:31 - 04:36]** You can set up in your folder or in a specific files.

**[04:36 - 04:40]** In this case, we're asking to everything in the orders will be executed.

**[04:42 - 04:44]** Next, we can see how as well the default location for the catalogs

**[04:44 - 04:49]** and schemas, where we selected this before to our labuser and sdp_1_bronze.

**[04:50 - 04:55]** From here, we can select also the compute, which in Databricks default is serverless.

**[04:56 - 05:03]** You can also set up a pipeline environment by using a TXT requirements or just

**[05:03 - 05:08]** setting up the list of your libraries with their corresponding versions.

**[05:10 - 05:12]** And here we got the configuration.

**[05:12 - 05:15]** The configuration is a key value pair.

**[05:16 - 05:22]** And in this case, we're going to use this configuration to let know the

**[05:22 - 05:25]** pipeline where to read the data from.

**[05:25 - 05:29]** So we're going to select here Add configuration, and we're going to

**[05:29 - 05:31]** add here the keyword of source.

**[05:32 - 05:34]** And remember, we reviewed this in the notebook.

**[05:34 - 05:38]** It is here on cell 7, so let's copy this value.

**[05:39 - 05:41]** Again, you can see the full volume path.

**[05:41 - 05:43]** It is located on the catalog explorer.

**[05:44 - 05:48]** It's a volume because it starts with volumes, followed by the catalog,

**[05:51 - 05:56]** followed by the schema sdp_1_bronze, followed by the volume of source.

**[05:56 - 06:01]** Remember, here we have our folder for customers, orders, and status.

**[06:01 - 06:04]** And here is where we're going to read this JSON file.

**[06:04 - 06:10]** So I'm gonna take this output, copy, and going back into our pipeline

**[06:10 - 06:15]** configuration for the source, we're going to set up the value here.

**[06:15 - 06:18]** And then make sure to save here at the very bottom.

**[06:21 - 06:22]** Perfect.

**[06:22 - 06:27]** From here, we can also set up tags, which is a best practice for web objects.

**[06:28 - 06:33]** Remember, this empowers that discoverability for all these assets.

**[06:33 - 06:35]** Here we can see also the usage.

**[06:35 - 06:38]** This is for budget policy to ensure we're not overspending.

**[06:39 - 06:44]** We also got the ability to set up notifications and advanced settings where

**[06:44 - 06:49]** you can set up what channel to use, the current on release and event logs, which

**[06:49 - 06:51]** we're gonna talk more about this later on.

**[06:54 - 06:56]** Now we're ready to move with the code.

**[06:57 - 07:00]** So we're going to use these orders_pipeline.sql file,

**[07:00 - 07:01]** which currently is empty.

**[07:02 - 07:06]** Now please go back into your notebook in section D, we're going to provide

**[07:06 - 07:08]** with all the code that you need.

**[07:08 - 07:12]** So here in C1, we got the bronze streaming table.

**[07:12 - 07:15]** Notice that here we got the code, and also we got a button

**[07:15 - 07:18]** that you can copy this code.

**[07:18 - 07:24]** So let's click it, and then go back into your pipeline, and let's paste that code.

**[07:25 - 07:28]** Now let's review the syntax for this bronze table.

**[07:28 - 07:32]** First of all, as you can see here, we got a CREATE OR REFRESH STREAMING TABLE.

**[07:33 - 07:36]** So a streaming table, remember, it's a Delta table with

**[07:36 - 07:37]** the streaming capabilities.

**[07:38 - 07:41]** Next, we're going to define where this table gets created.

**[07:41 - 07:47]** So here we're specifying the sdp_1_bronze and the name of orders_bronze_demo.

**[07:48 - 07:52]** If you do not set this catalog or schema, it's going to be set up on

**[07:52 - 07:54]** your default catalog and schema.

**[07:55 - 07:59]** Next, we're, as usual, when we are ingesting data, we're pulling

**[07:59 - 08:03]** all the columns within those files, and at the same time,

**[08:03 - 08:05]** adding some metadata information.

**[08:06 - 08:10]** Now, in here, we're going to use the read_files function.

**[08:11 - 08:15]** And notice over here on the path, we're using a variable for a source.

**[08:16 - 08:18]** This is the variable that we just configured.

**[08:19 - 08:24]** And notice over here, it has a dollar sign with curly brackets around it.

**[08:25 - 08:29]** You can open here the settings as well just to confirm we

**[08:29 - 08:30]** have the matching value.

**[08:31 - 08:34]** So here we got a source, and this size, we have a source.

**[08:34 - 08:39]** So in runtime, it's going to take the value for the source, and it's going

**[08:39 - 08:43]** to concatenate a /orders to target to our volume and pull the JSONs.

**[08:44 - 08:49]** The second detail that we need to watch out, it's for the stream keyword.

**[08:49 - 08:54]** The stream keyword enables the streaming capabilities to read from the source.

**[08:57 - 09:00]** Now let's proceed with the silver streaming table.

**[09:00 - 09:03]** So let's go back into our notebook and let's move on into C2.

**[09:04 - 09:07]** Let's scroll down just a bit, and in here, you'll see the code

**[09:07 - 09:09]** for that silver streaming table.

**[09:09 - 09:14]** You can go ahead and use that copy to clipboard button, then go back into

**[09:14 - 09:19]** your pipeline, in this case, to the SQL file, and let's place this code.

**[09:20 - 09:24]** For the orders_silver table, notice we're still using the CREATE OR

**[09:24 - 09:27]** REFRESH STREAMING TABLE syntax.

**[09:27 - 09:32]** And in this case, remember for the layer, we just want to do transformations.

**[09:32 - 09:35]** In this example, we're just doing mild transformations.

**[09:36 - 09:39]** We're just cherry-picking exactly what we need.

**[09:39 - 09:41]** Sometimes we don't need all the columns.

**[09:41 - 09:48]** We give proper labels, we cast it to the types that we need, and even more.

**[09:48 - 09:50]** In this case, we're just getting the order_id, the

**[09:50 - 09:52]** order_timestamp, customer_id, and

**[09:54 - 09:55]** notifications.

**[09:55 - 09:58]** Also, notice from here in the from statement, we are pulling

**[09:58 - 10:01]** the information from the orders_bronze that we just created.

**[10:02 - 10:06]** And because these two tables are streaming tables, and to enable the streaming

**[10:06 - 10:12]** capabilities and to flow the data in this approach, we need to use the stream

**[10:12 - 10:14]** keyword here in the from statement.

**[10:15 - 10:16]** Do not forget about that.

**[10:16 - 10:20]** If you miss that, your data could be stale into your table.

**[10:23 - 10:26]** And finally, we have the materialized view.

**[10:26 - 10:28]** So let's go back into our notebook.

**[10:28 - 10:31]** Let's scroll down just a bit into C3, and here we have the code.

**[10:32 - 10:38]** Let's copy and go back into our pipeline, and let's paste that, and let's review.

**[10:39 - 10:42]** Now, we're closer to run this pipeline, but first let's run a

**[10:42 - 10:46]** dry run that validates the pipeline code, also the catalogs, the schemas,

**[10:47 - 10:51]** without creating or updating the tables or even flowing the data.

**[10:51 - 10:54]** So this way we can proactively capture issues.

**[10:55 - 10:57]** So notice here in the top right there is a blue button.

**[10:57 - 11:00]** In here there is a dropdown where you can select Dry Run.

**[11:01 - 11:06]** And in here we're asking Databricks for a compute, in this case with serverless.

**[11:07 - 11:11]** Databricks sends the cluster, attaches the pipeline, and runs

**[11:11 - 11:13]** this validation to our code.

**[11:18 - 11:22]** After the dry run completes, here we can see in the panel below, we can see

**[11:22 - 11:25]** a preview of the tables that we defined.

**[11:25 - 11:29]** Here we got orders_bronze, orders_silver, and the materialized

**[11:29 - 11:30]** view for all orders_by_date.

**[11:32 - 11:35]** Here you can see all the previous executions, which by the way, I

**[11:35 - 11:37]** ran one before just for a test.

**[11:38 - 11:43]** Since we haven't executed the pipeline, we don't have any performance, but we do

**[11:43 - 11:48]** have a preview of the multiple datasets here, the streaming orders_bronze,

**[11:48 - 11:54]** the streaming orders_silver, and the materialized view for gold orders by date.

**[11:54 - 11:56]** Here you can see the lineage of these tables.

**[11:58 - 12:00]** Now everything's in place for this pipeline.

**[12:00 - 12:02]** Now we can proceed to run it.

**[12:02 - 12:06]** Since we already ran a dry run, we already have a serverless cluster attached to it.

**[12:07 - 12:10]** Now remember, the default behavior for a Spark declarative pipelines is

**[12:10 - 12:13]** to run with incremental processing.

**[12:13 - 12:17]** So in this case, with this declarative code, we're going to create the

**[12:17 - 12:19]** streaming tables and materialized views.

**[12:19 - 12:23]** And on top of that, for the bronze table specifically, we're going

**[12:23 - 12:29]** to read the data from the volume configured in our source variable.

**[12:30 - 12:32]** By the way, here we can change in the catalog explorer.

**[12:32 - 12:37]** We can go to our labuser, to the sdp_1_bronze schema.

**[12:38 - 12:40]** And in there we have volumes for a source.

**[12:41 - 12:47]** In this case, we got for the orders a single JSON file with 174 records.

**[12:48 - 12:52]** And let's continue by running this pipeline, clicking the Run Pipeline

**[12:52 - 12:55]** blue button here on the top corner.

**[12:59 - 13:03]** And as you can see in here, we're asking Databricks for a compute.

**[13:03 - 13:07]** It's going to provide for us with serverless, which it

**[13:07 - 13:08]** has been already attached.

**[13:09 - 13:14]** It attaches the pipeline, validates the code once again, and runs the pipeline.

**[13:14 - 13:18]** And here we can click on the pipeline graph, where we also get

**[13:18 - 13:22]** that visual representation of the data flowing between our datasets.

**[13:23 - 13:27]** Here we can see their corresponding streaming tables for bronze and

**[13:27 - 13:31]** silver and for the materialized view for the gold layer.

**[13:32 - 13:36]** You can also check their duration in the output records.

**[13:36 - 13:41]** So in this case, it took 15 seconds for bronze with 174 records.

**[13:42 - 13:47]** For silver, 3 seconds for running those transformations with 174 records.

**[13:47 - 13:51]** And then for the materialized view, we got the output records.

**[13:53 - 13:56]** And after running our pipeline, we can explore the generated

**[13:56 - 13:57]** data with the tabs here.

**[13:58 - 14:02]** So here we can go to the tables where we can see a list of the tables, their

**[14:02 - 14:04]** duration, output records and expectations.

**[14:05 - 14:06]** We're going to review these later on.

**[14:07 - 14:10]** Then in the performance, we can see all the SQL query statements.

**[14:10 - 14:15]** In this case, we can see the duration, the amount of rows read,

**[14:15 - 14:17]** bytes read, and bytes written.

**[14:17 - 14:21]** So this is showing a summary, and if you want to see the details for

**[14:21 - 14:25]** all the operation, you can click on the statement and the query profile

**[14:25 - 14:29]** will be open on the right side, where you can see all these details.

**[14:31 - 14:35]** And finally, you can also click here on the pipeline graph on any of

**[14:35 - 14:37]** these tables or materialized views.

**[14:38 - 14:43]** And this is going to take you to the tables tab, where you can select,

**[14:43 - 14:47]** again, any of these tables, and you will be able to see the data in there.

**[14:48 - 14:53]** So this editor provides you with all the resources for you to develop

**[14:53 - 14:55]** your pipeline in one single place.

**[14:55 - 14:57]** No more working with multiple tabs open.

**[14:59 - 15:03]** The next question is, what happens if we run our pipeline once again?

**[15:04 - 15:06]** So let's go ahead and click Run the pipeline.

**[15:07 - 15:08]** And in the meantime, this is running.

**[15:09 - 15:13]** Here, I'm going to change to the pipeline graph.

**[15:14 - 15:17]** And the answer is that since we only have a single JSON file in the

**[15:17 - 15:23]** orders folder over here, the pipeline uses the autoloader that helps to

**[15:23 - 15:25]** check for the file idempotency.

**[15:25 - 15:30]** Since we already ran once the pipeline, this second time, the file will be

**[15:30 - 15:36]** ignored, showing us the output of records of 0 for the streaming tables, and for the

**[15:36 - 15:42]** materialized view, it refreshes and get us still the latest output of records of 7.

**[15:43 - 15:47]** And remember, incremental ingestion is key for high volume

**[15:47 - 15:51]** data, and there is no value to reprocess your data multiple times.

**[15:53 - 15:57]** With this said, now let's review when we receive upcoming new data into our volume.

**[15:57 - 16:01]** So let's go back into our notebook 05, Developing a Simple

**[16:01 - 16:07]** Pipeline, and into section E, add a new file cloud to storage.

**[16:07 - 16:12]** Let's run the cell 35 that will place JSON files into our orders

**[16:12 - 16:14]** folder within the source volume.

**[16:15 - 16:19]** So here after this cell executes, I'm going to run a refresh, and now it

**[16:19 - 16:22]** confirms we have two files in place.

**[16:23 - 16:23]** Good.

**[16:24 - 16:26]** Now we can go back to our pipeline.

**[16:26 - 16:29]** I'm going to refresh over here as well, so it reflects these changes.

**[16:29 - 16:30]** Perfect.

**[16:30 - 16:34]** So we got two files, and now we can go ahead and run this pipeline once again.

**[16:35 - 16:39]** In this new pipeline run, the autoloader will detect the new JSON files and

**[16:39 - 16:42]** will append the new data into bronze.

**[16:43 - 16:48]** Now, notice that this time we're going to read around 25 records.

**[16:49 - 16:53]** Then the pipeline will run the transformations and append the new

**[16:53 - 16:55]** transformed data into the silver table.

**[16:56 - 17:00]** And finally, we're going to have the materialized view will refresh

**[17:01 - 17:05]** which in this scenario, we're using serverless for our compute.

**[17:05 - 17:10]** So that means the materialized view will use incremental refresh, and it won't

**[17:10 - 17:16]** use the full silver table to a scope to recalculate only the new appended data.

**[17:16 - 17:19]** This is going to be great because this will shorten the

**[17:19 - 17:21]** materialized view reprocessing time.

**[17:22 - 17:23]** So check that one out.

**[17:23 - 17:30]** We got output records, 25 in silver, and now we got 8 output records.

**[17:31 - 17:36]** And then remember that in our first run, we ingested 174 records.

**[17:36 - 17:40]** So we can just go back to the orders_bronze table, and over

**[17:40 - 17:44]** here, we should be able to see the total of the records.

**[17:47 - 17:51]** And over here we can see that we get to see 199 records.

**[17:51 - 17:55]** So that is 174 plus 25.

**[17:56 - 17:59]** These give us those, now 199 records.

**[17:59 - 18:01]** So this confirms the appended behavior.

**[18:02 - 18:06]** As well, you want to check here on the materialized view, we

**[18:06 - 18:08]** have a new record aggregated.

**[18:08 - 18:12]** So if we click here, we can see the incremental label as well.

**[18:12 - 18:16]** This will take us to the data, to this materialized view, and mainly

**[18:16 - 18:21]** this new data reflects for the data from January 1st from 2022.

**[18:24 - 18:28]** Lastly, there is another execution mode we need to be aware of.

**[18:28 - 18:34]** You are able to run a pipeline with full table refresh, and this

**[18:34 - 18:38]** type of execution will truncate all the tables in the pipeline and

**[18:38 - 18:40]** will run the pipeline from scratch.

**[18:41 - 18:46]** So in this case, since we already have two JSON files in our volume,

**[18:46 - 18:47]** the pipeline will take them both.

**[18:47 - 18:52]** Remember, in this case, we're going to have around 199 records.

**[18:54 - 18:58]** Now, in development environments, this is not a problem that we get to truncate

**[18:58 - 19:02]** this table, but in production, you have to be careful because this process, as I

**[19:02 - 19:07]** was saying, it truncates your table, and it will delete previously processed data,

**[19:08 - 19:10]** potentially resulting in a data loss.

**[19:12 - 19:13]** Great.

**[19:13 - 19:17]** So in conclusion for this demo, we just created a new fresh pipeline.

**[19:17 - 19:23]** Then we just ran adjustments to our traditional ETL orders code to be

**[19:23 - 19:25]** usable into Spark declarative pipelines.

**[19:25 - 19:29]** Then we added a configuration to point into our source volume location.

**[19:30 - 19:34]** Then we reviewed the different executions or runs to our pipeline

**[19:34 - 19:36]** with dry run that validates our code.

**[19:37 - 19:38]** Then we run a regular incremental

**[19:40 - 19:44]** run to ingest 174 records in a single file.

**[19:44 - 19:49]** Then we run a second incremental run where we had no new data.

**[19:50 - 19:55]** And then we did a third incremental run where we added a new file with 25

**[19:55 - 19:58]** records to get us up to 199 records.

**[19:59 - 20:03]** Finally, we did another run with a full table refresh that truncates the tables

**[20:03 - 20:06]** and reprocesses everything from scratch.

