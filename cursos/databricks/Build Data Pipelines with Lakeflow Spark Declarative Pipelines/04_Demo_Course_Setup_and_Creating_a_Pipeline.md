# Demo: Course Setup and Creating a Pipeline

**Curso:** Build Data Pipelines with Lakeflow Spark Declarative Pipelines
**Tipo de Contenido:** Video con Demostración Práctica Guiada
**Duración:** 17 minutos 29 segundos (1,049 segundos)
**Archivo de Captura:** `capturas/04_Demo_Course_Setup_and_Creating_a_Pipeline.png`

## 1. Resumen y Objetivos de la Demostración

- Inicialización del entorno de laboratorio Databricks Academy y ejecución del script de configuración del aula (`classroom_setup`).
- Creación paso a paso de un nuevo ETL Pipeline (Spark Declarative Pipeline) desde la interfaz de Jobs & Pipelines.
- Configuración de parámetros esenciales del pipeline: Target Catalog, Target Schema, Pipeline Mode (Triggered vs. Continuous), y Compute Policy (Serverless).
- Vinculación de código fuente SQL/Python desde el Workspace y archivos del curso.
- Inspección de la interfaz gráfica del DAG del pipeline antes y después del primer arranque.

## 2. Transcripción Completa y Verbatim del Video con Marcas de Tiempo

**[00:00 - 00:01]** Hello everyone.

**[00:01 - 00:03]** My name is Marcelino Mayorga.

**[00:03 - 00:07]** I'm a senior technical instructor, and I will walk you through in this 02 Course

**[00:07 - 00:09]** Setup and Creating a Pipeline demo.

**[00:11 - 00:15]** The objectives for this demo are to walk you through the workspace

**[00:15 - 00:18]** where we're going to review all the resources for the demo.

**[00:18 - 00:24]** Then we're gonna build on a traditional ETL pipeline as a baseline that will help

**[00:24 - 00:28]** us to introduce Sparky Cloudera pipelines, and then we're going to review the UI.

**[00:31 - 00:34]** With this set, now we can proceed to review the notebook.

**[00:34 - 00:38]** And over here, the first step we need to take is connecting

**[00:38 - 00:42]** this notebook to a serverless cluster, that it must be version 5.

**[00:43 - 00:48]** And we're going to run the classroom setup here on cell 6 that is going to

**[00:48 - 00:54]** provide for us all the catalogs, the schemas, the volumes, and the files

**[00:54 - 00:56]** we're going to use throughout the course.

**[00:57 - 01:00]** Here you can see the output precisely of these catalogs and schemas.

**[01:01 - 01:05]** And at the very bottom, you can see all the variables that are going to be used.

**[01:05 - 01:08]** We can also change over here on the Catalog Explorer.

**[01:09 - 01:12]** We can see precisely the catalog that we're going to use

**[01:12 - 01:16]** and the multiple schemas, one from bronze, silver, and gold.

**[01:16 - 01:22]** And please be aware that within the sdp_1_bronze schema, we got a volume

**[01:22 - 01:27]** called source that is going to hold JSONs for the multiple objects we're going to

**[01:28 - 01:32]** handle today, one for customers, one for orders, and the other one for status.

**[01:36 - 01:39]** From here, we can move on to read the data.

**[01:39 - 01:44]** And notice over here in cell 11 and cell 12, we got two variables from registered

**[01:44 - 01:46]** Python, the other one registered in SQL.

**[01:47 - 01:50]** What is important is that both of them, they are targeting the

**[01:50 - 01:54]** same location, which is our source volume within the sdp_1_bronze

**[01:54 - 01:58]** schema and in our labuser catalog.

**[02:00 - 02:02]** From here, we can go ahead in the cell 15.

**[02:03 - 02:07]** As you may notice, we got a combination of Python with SQL.

**[02:07 - 02:11]** So we're having a Spark session calling a SQL function, and then

**[02:11 - 02:14]** we're passing the SQL query.

**[02:14 - 02:19]** In this case, just running a select star from a JSON using that source

**[02:19 - 02:21]** volume path variable to read the orders.

**[02:22 - 02:28]** And notice over here, we got around 174 records with columns

**[02:28 - 02:32]** for a customer_id, notifications, order_id, and order_timestamp.

**[02:35 - 02:35]** Good.

**[02:36 - 02:40]** Our data is ready, and now we can proceed to write a traditional ETL pipeline.

**[02:40 - 02:45]** Notice over here in cell 17, we have a script that is going to create our

**[02:46 - 02:49]** orders_bronze, our orders_silver, and also our orders_by_date.

**[02:50 - 02:53]** Here, we're just using a very simple CREATE OR REPLACE

**[02:53 - 02:56]** TABLE to create these assets.

**[02:56 - 03:01]** And here, we're using the read files function that will leverage the

**[03:01 - 03:06]** source volume path, concatenating with orders to retrieve those JSONs.

**[03:07 - 03:13]** And at the same time, we're picking all the columns and adding some

**[03:13 - 03:16]** metadata information, such as the processing time and a source file.

**[03:17 - 03:21]** Then we are going to move into the orders_silver, which in

**[03:21 - 03:24]** this case, for this layer, remember, is for transformations.

**[03:24 - 03:27]** In this case, we just have mild transformations.

**[03:27 - 03:30]** We're cherry-picking specific columns.

**[03:30 - 03:32]** Sometimes we not need them all.

**[03:32 - 03:38]** We're doing some casting to a specific format and even adding a label.

**[03:39 - 03:42]** And notice over here, we're getting this data from the

**[03:42 - 03:44]** orders_bronze that we just created.

**[03:44 - 03:45]** So there is a relationship in here.

**[03:46 - 03:50]** And then we got the view for orders_by_date view.

**[03:50 - 03:53]** This one is using a CREATE OR REPLACE VIEW statement.

**[03:53 - 04:00]** And in this case, we want to group the data based on the date, and we

**[04:00 - 04:04]** want to run a count, an aggregation for the total_daily_orders.

**[04:05 - 04:08]** So of course, we're getting the data from the orders_silver, and

**[04:08 - 04:13]** for this aggregation, we need to group it by this order_timestamp.

**[04:17 - 04:17]** Perfect.

**[04:17 - 04:22]** After executing this cell, we can go ahead and refresh our catalog, and we should

**[04:22 - 04:28]** be able to see precisely the three tables that we built in the sdp1_bronze schema.

**[04:28 - 04:31]** We got orders_bronze, orders_silver, and orders_by_date

**[04:35 - 04:38]** We can also see that in cell 19, after executing cell 17,

**[04:39 - 04:41]** we got cell 21 to see the data.

**[04:43 - 04:45]** Just to confirm everything is in place.

**[04:45 - 04:51]** So we got here a select to orders_bronze, which it matches pretty much the same.

**[04:51 - 04:55]** But notice over here, we got the _rescued_data from the read files function

**[04:55 - 04:59]** and the two extra columns we added for the processing time and source file.

**[05:00 - 05:01]** We also got the orders_silver.

**[05:02 - 05:07]** So here are the columns that we selected for order_id, order_timestamp,

**[05:07 - 05:11]** currently as a timestamp, customer_id, and notifications.

**[05:12 - 05:17]** And finally, we got the view that holds our aggregation for the different

**[05:17 - 05:22]** dates and the different aggregation for count of the total_daily_orders.

**[05:25 - 05:29]** And by the way, nothing is broken with this code.

**[05:30 - 05:32]** It produces the correct results.

**[05:32 - 05:35]** It creates the tables, it creates the data.

**[05:35 - 05:36]** There is one detail over here.

**[05:36 - 05:39]** It just doesn't scale well, and that's what we're about to unpack.

**[05:41 - 05:46]** Now, let's name what is wrong what we just built, because one of

**[05:46 - 05:50]** these problems has a direct answer in Spark declarative pipelines.

**[05:50 - 05:55]** So first of all, the bronze table rereads everything every run.

**[05:55 - 06:00]** The code uses a static full read, so every execution scans every file in the volume,

**[06:00 - 06:02]** including the ones already processed.

**[06:03 - 06:08]** Now, right now it's not a problem, but as months of data pile up, you

**[06:08 - 06:14]** reread the same old files on every trigger, and this is going to lead

**[06:14 - 06:19]** your cost to scale up with the total file count rather than with new data.

**[06:21 - 06:24]** Likewise, the silver table reprocesses all rows as well.

**[06:25 - 06:29]** The transformation reads all the data from bronze every single time.

**[06:30 - 06:33]** Even a simple filter or a join runs against the full dataset.

**[06:34 - 06:40]** And at this point, you're very paid to reread all the files, and now you

**[06:40 - 06:43]** are retransforming all the results.

**[06:45 - 06:48]** About the views re-execute on every call.

**[06:48 - 06:51]** Remember, a view is just a saved query.

**[06:51 - 06:55]** When you call the view, the query gets executed.

**[06:55 - 06:57]** There is nothing to store.

**[06:57 - 07:02]** So our view queries the silver table every time it's referenced.

**[07:03 - 07:06]** Think about the potential joins and an extra column transformations that

**[07:08 - 07:10]** the view needs to resolve in runtime.

**[07:11 - 07:15]** And definitely, that's the reason why we need to wait a little bit

**[07:15 - 07:16]** when loading a regular dashboard.

**[07:18 - 07:23]** About the data quality, well, it takes some extra code to implement because

**[07:23 - 07:28]** nothing in this pipeline enforces the constraints, so you have to write the

**[07:28 - 07:33]** separate validation logic, including, for instance, where clauses, cases,

**[07:33 - 07:38]** statements, custom assertions that mainly lives outside the pipeline

**[07:39 - 07:40]** and is easy to forget and maintain.

**[07:43 - 07:49]** We also get monitoring is a challenge because the batch jobs reports a

**[07:49 - 07:52]** success or a failure at the job level, not at the data level.

**[07:53 - 07:58]** Then maybe you're wondering about how many records were written, how many

**[07:58 - 08:03]** records are duplicates, how many records that actually were not properly parsed.

**[08:04 - 08:08]** So you're notified reactively when everything breaks.

**[08:10 - 08:14]** And last but not least, there is no UI to explore or fix issues.

**[08:14 - 08:17]** We just run the code, and we leave it in there.

**[08:17 - 08:22]** But debugging means actually going back to review and fix some code with no lineage,

**[08:23 - 08:28]** no data preview, no way to see how the data flew from the source to the target.

**[08:29 - 08:32]** So sometimes even fixing a problem, it means to rerun

**[08:32 - 08:34]** the whole thing from scratch.

**[08:37 - 08:42]** And now some of you are already thinking, "Can we just use a structured

**[08:42 - 08:44]** streaming?" That is a very fair question.

**[08:44 - 08:48]** You can achieve a close implementation with the structured streaming,

**[08:48 - 08:53]** but you'll be rewriting the entire pipeline with significantly more

**[08:53 - 08:55]** code and operational overhead.

**[08:56 - 09:00]** And there are some considerations that actually take more effort.

**[09:00 - 09:02]** So let's review over here.

**[09:02 - 09:06]** First of all, we got checkpoint management, where every stream

**[09:06 - 09:08]** needs its own checkpoint location.

**[09:08 - 09:14]** And mainly, this means a unique persistent path that tracks what has been processed

**[09:14 - 09:16]** to the stream can actually resume.

**[09:18 - 09:24]** We also get that the simple upserts stop being simple because

**[09:24 - 09:28]** structured streaming output modes don't support merge logic directly.

**[09:29 - 09:33]** So you need to use the foreachBatch function, which is mainly is a callback

**[09:33 - 09:36]** receiving a micro batch as a dataframe.

**[09:37 - 09:42]** And inside that function, you register that dataframe as a temporary view,

**[09:42 - 09:45]** and then you run a SQL merge by hand.

**[09:46 - 09:52]** Then we got the trigger and schema configuration, where you pick trigger

**[09:52 - 09:57]** modes, and then you can define the schema location, so autoloader can

**[09:57 - 10:01]** track and evolve the inferred schema, and then manage the stream's life

**[10:01 - 10:06]** cycle, meaning the start, the stop, and as well awaiting for termination.

**[10:07 - 10:12]** And by the way, can you get any of these wrong, and you get a silent failures or

**[10:12 - 10:14]** streams that actually never terminate.

**[10:15 - 10:21]** So structured streaming fixes the re-read everything problem, but nothing more.

**[10:22 - 10:23]** And here is the kicker.

**[10:23 - 10:26]** You still don't get data quality constraints, a

**[10:26 - 10:29]** pipeline UI or a lineage view.

**[10:29 - 10:34]** And mainly, Spark declarative pipelines gives you that incremental processing and

**[10:34 - 10:37]** everything else is done declaratively.

**[10:38 - 10:43]** No foreachBatch, no checkpoint paths, no trigger configuration.

**[10:43 - 10:44]** It makes your life easier.

**[10:48 - 10:48]** Great.

**[10:48 - 10:53]** So this lead us to Spark declarative pipelines because it provide us

**[10:53 - 10:58]** mainly an efficient ingestion that is backed up by Apache Spark and supports

**[10:58 - 11:00]** batch streaming and CDC patterns.

**[11:00 - 11:03]** It also provide us with an intelligent transformation.

**[11:03 - 11:07]** So Spark declarative pipelines, remember, is an abstraction or

**[11:07 - 11:09]** simplification from structure streaming.

**[11:10 - 11:13]** From just a few lines of code, the pipelines are going to be planned

**[11:13 - 11:15]** and executed efficiently for you.

**[11:16 - 11:21]** The framework, it picks the execution and strategy for batch or streaming workloads,

**[11:21 - 11:26]** and at the same time, it optimizes for cost or performance without manual tuning.

**[11:27 - 11:30]** It also provide us with automated operations.

**[11:30 - 11:35]** That means that we are including the best practices such as dependency

**[11:35 - 11:40]** management, scaling, recovery, data quality enforcement, which by the

**[11:40 - 11:44]** way, this is automated, and there is no infrastructure to manage.

**[11:45 - 11:50]** And this is very valuable because this lets you focus on delivering high-quality

**[11:50 - 11:51]** data instead of operating pipelines.

**[11:54 - 12:00]** Lastly, you'll see that converting our traditional batch pipeline that we just

**[12:00 - 12:05]** built get us incremental processing, data quality enforcement, infrastructure

**[12:05 - 12:10]** management, and a full pipeline visibility, all of them at the same time.

**[12:13 - 12:14]** Great.

**[12:14 - 12:18]** The next question is how we can create the Spark declarative pipelines,

**[12:18 - 12:20]** and here we got two options for you.

**[12:20 - 12:23]** The first option is accessing via the workspace.

**[12:23 - 12:28]** So here we can open the workspace, and as you may notice, here we got folders

**[12:28 - 12:33]** and files, and all of them, they do have actions here on the ellipsis or kebab.

**[12:34 - 12:38]** Here, we can click Folder actions, then we can select the Create

**[12:38 - 12:41]** button, and then the ETL pipeline.

**[12:41 - 12:43]** This is option number one.

**[12:43 - 12:46]** This is going to create a empty pipeline for us.

**[12:47 - 12:51]** Option number two, it's using the menu here on the left with Jobs

**[12:51 - 12:55]** and Pipeline, which by the way, I already opened here in a new tab.

**[12:56 - 12:58]** And in here, we got a couple options.

**[12:58 - 12:59]** We got ingestion pipeline.

**[12:59 - 13:03]** This is for lakeflow-managed connectors pipelines.

**[13:04 - 13:07]** We got ETL, which is for Spark declarative pipelines.

**[13:08 - 13:11]** And then we got Lakeflow Jobs over here.

**[13:11 - 13:15]** You can also use this blue button to create any of those.

**[13:15 - 13:21]** I already created one that here we have this empty form ready to be worked on.

**[13:24 - 13:27]** And actually, this is way beyond a form.

**[13:27 - 13:31]** This is an editor, and Databricks designed this editor with

**[13:31 - 13:33]** the data engineer in mind.

**[13:34 - 13:38]** And mainly us, data engineers, we have four major concerns when

**[13:38 - 13:42]** working with a pipeline, and this editor covers all of them.

**[13:43 - 13:44]** So let's review.

**[13:44 - 13:48]** First of all, here we can see the name of our pipeline.

**[13:49 - 13:54]** And once you create a pipeline, please be aware that there is always a root

**[13:54 - 14:00]** folder associated to that pipeline where it's going to hold all of our files.

**[14:02 - 14:02]** Right.

**[14:02 - 14:08]** Here, you can see that we got a toggle where we can focus only into

**[14:08 - 14:12]** the root folder, or actually, we can go back to all the files where we

**[14:12 - 14:14]** can navigate through our workspace.

**[14:16 - 14:19]** Number two, we need to think about our code, and this is

**[14:19 - 14:21]** exactly this area over here.

**[14:22 - 14:26]** Again, this behaves pretty much as a regular notebook or file

**[14:26 - 14:27]** we get to open in Databricks.

**[14:29 - 14:34]** Number three, we want to see the output and the details of our pipeline.

**[14:34 - 14:40]** So notice here on the bottom, there is a tab that you can see the output

**[14:40 - 14:45]** tables, you can see the performance, and you can see the pipeline graph.

**[14:45 - 14:51]** So this shows you a visual representation of all the tables and their dependencies,

**[14:51 - 14:53]** mainly the lineage of your pipeline.

**[14:54 - 14:59]** And last but not least, the fourth concern is the operationals of your pipeline.

**[14:59 - 15:03]** And here we got what I call the operational corner.

**[15:04 - 15:08]** So when you define your code, you are able to create tables in

**[15:08 - 15:10]** multiple catalogs and schemas.

**[15:12 - 15:16]** In here, you get to select your default catalog and schema for

**[15:16 - 15:21]** those tables that do not have explicitly a three-level namespace,

**[15:21 - 15:23]** so are going to be placed in here.

**[15:24 - 15:27]** As well, over here, we got the ability to open settings.

**[15:27 - 15:29]** We're going to review that in the next demo.

**[15:29 - 15:34]** We have the ability to schedule these Spark declarative pipelines, which by

**[15:34 - 15:39]** the way, at the very end of the day, this leverages a Lakeflow Job with

**[15:39 - 15:44]** a single task, that it is targeting these Spark declarative pipelines.

**[15:45 - 15:50]** And you can also use the share feature, so you can bring in your team members

**[15:50 - 15:52]** to help you out to build this pipeline.

**[15:53 - 15:58]** Pipeline is also connected to a compute, which by default we

**[15:58 - 16:00]** suggest and to use serverless.

**[16:01 - 16:04]** And then here at the corner on the blue bottom, we get to see

**[16:05 - 16:06]** how we can execute our pipeline.

**[16:06 - 16:08]** We're going to review this in the next demos.

**[16:10 - 16:10]** All right.

**[16:12 - 16:16]** So as you may notice, there are many panels in this editor.

**[16:16 - 16:22]** So my recommendation is focus on what you're doing, and based on that, adjust

**[16:22 - 16:24]** the layout of this editor to your needs.

**[16:24 - 16:29]** So if you're working your files and with the code, then you may not this

**[16:29 - 16:30]** panel, so you may wanna close it.

**[16:32 - 16:34]** Then you work with your files, and then you work with your code.

**[16:35 - 16:39]** And then when you're ready to run this pipeline, you just hide the

**[16:39 - 16:43]** workspace, and then you can open the panel so you can see the results.

**[16:47 - 16:51]** So in conclusion, in this demonstration, you initialize the environment.

**[16:51 - 16:56]** We review all our resources, such as catalogs, schemas, and the source volumes.

**[16:56 - 17:01]** We preview our raw JSON order data with the read files function, and we

**[17:01 - 17:06]** build a traditional ETL pipeline across bronze, silver, and gold, and at the

**[17:06 - 17:12]** same time, we identify when that ETL process is not enough for scaling.

**[17:13 - 17:17]** We saw how declarative pipelines answers those limitations through the efficient

**[17:17 - 17:21]** ingestion, intelligent transformation, and automated operations, and we

**[17:21 - 17:24]** created the pipeline and review the UI.

