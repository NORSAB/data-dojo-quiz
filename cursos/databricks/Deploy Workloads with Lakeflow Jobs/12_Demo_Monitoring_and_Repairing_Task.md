# Demo: Monitoring and Repairing Task

**Curso:** Deploy Workloads with Lakeflow Jobs
**Tipo de Contenido:** Video con Demostración Práctica Guiada
**Duración:** 14 minutos 49 segundos (889 segundos)
**Archivo de Captura:** `capturas/12_Demo_Monitoring_and_Repairing_Task.png`

## 1. Resumen y Objetivos de la Demostración

- Demostración del ciclo de vida de manejo de fallos en Lakeflow Jobs.
- Identificación y diagnóstico de fallos en tareas dependientes e independientes usando el panel de ejecuciones de Jobs.
- Uso de la funcionalidad **Repair and Rerun** para corregir parámetros erróneos sin reiniciar todo el DAG del pipeline.
- Inspección de Spark UI, timelines de ejecución, métricas de entrada/salida y tablas de sistema `system.lakeflow`.
- Validación de la persistencia de correcciones en la definición base del Job para corridas futuras.

## 2. Transcripción Completa y Verbatim del Video con Marcas de Tiempo

**[00:00 - 00:04]** Welcome to the last demo of this course, Monitoring and Repairing Tasks.

**[00:05 - 00:09]** In this demo, we are going to see how you can monitor jobs and

**[00:09 - 00:12]** how you can repair a failed run.

**[00:13 - 00:18]** Also, lakeflow gives you ability to only rerun the failed task.

**[00:19 - 00:27]** At the end, we will be adding a dashboard task into our retail sales lakeflow job.

**[00:28 - 00:31]** First thing first, I'll make sure I'm connected to latest version

**[00:31 - 00:39]** of serverless, and then I'm going to run my classroom setup script

**[00:42 - 00:46]** Meanwhile, this is running, let me give you a walkthrough of how my

**[00:46 - 00:49]** complete pipeline will look like after completing this demonstration.

**[00:50 - 00:55]** We have seen till this until our last demo.

**[00:55 - 00:58]** Now we are going to add a notebook task in which we are going to

**[00:58 - 01:04]** transform all the tables created by customer order state task.

**[01:05 - 01:12]** Then we're going to attach those two to form a dashboard task.

**[01:13 - 01:13]** Okay

**[01:18 - 01:22]** Now, before starting this, let me navigate to my catalog.

**[01:23 - 01:30]** Now, under my schema, I can see I have a silver table, and I need to have a

**[01:30 - 01:34]** gold table, so I need to add a notebook task, which is going to transform this.

**[01:36 - 01:36]** Okay.

**[01:38 - 01:43]** Let me go to my notebook, which I'm going to use to transform my

**[01:43 - 01:48]** New York and all those tables that we created using for each task.

**[01:48 - 01:49]** Right?

**[01:49 - 01:54]** So what we are doing, we are saving it in, in a data frame, and then

**[01:55 - 01:58]** since we don't want to repeat ourselves, we have written a code

**[01:58 - 02:01]** to clean a particular DF or a table.

**[02:02 - 02:06]** The first thing first, we're doing some stripping and adding a new column,

**[02:06 - 02:08]** which is a customer name, right?

**[02:10 - 02:17]** And then we have a separate function for transforming the California silver table,

**[02:18 - 02:21]** the NY silver table, and VA silver table.

**[02:22 - 02:25]** At last, we will be saving it in the gold layer.

**[02:26 - 02:26]** Right?

**[02:28 - 02:28]** Okay.

**[02:30 - 02:32]** Now, one thing you must have noticed is that

**[02:33 - 02:37]** we have intentionally written the wrong name here.

**[02:38 - 02:42]** What we have done, we have used customer instead of customer name.

**[02:42 - 02:47]** So this will make this particular task fail.

**[02:47 - 02:51]** We intentionally want to fail this, and we'll show you after

**[02:51 - 02:54]** this how you can rerun this, right?

**[02:55 - 02:59]** So let me first create my starter job.

**[03:01 - 03:05]** So what it says, it has created me a starter job for me.

**[03:06 - 03:07]** Okay.

**[03:07 - 03:11]** I'm going into jobs and pipelines and opening it in a new tab

**[03:14 - 03:18]** Once done, you can see we already shown you demonstration

**[03:18 - 03:19]** of demo seven and demo nine.

**[03:19 - 03:21]** We are right now on demo four.

**[03:22 - 03:27]** If I go into the task, you can see this particular task has created what

**[03:27 - 03:30]** the work done till the previous demo.

**[03:30 - 03:34]** So if someone has missed a previous demo, you just run the starter

**[03:34 - 03:39]** class,   starter job instead, and he can start doing this particular demo.

**[03:40 - 03:42]** So in this, I want to add a notebook task.

**[03:42 - 03:50]** I'm going to select a notebook, and then I'm going to go under

**[03:50 - 03:52]** lesson twelve and select this.

**[03:53 - 03:53]** Right.

**[03:54 - 03:56]** Let me fetch the name for this.

**[03:56 - 04:00]** So it is going to be transforming customer orders data.

**[04:01 - 04:01]** Okay.

**[04:04 - 04:08]** Now, the most important thing is we have already seen the code for this,

**[04:09 - 04:10]** and we know it is going to fail.

**[04:11 - 04:14]** So we'll just make sure the retries is set to zero.

**[04:15 - 04:17]** We want no retries, right?

**[04:19 - 04:23]** So we are going to disable this option here and confirm.

**[04:24 - 04:27]** So now whenever the task fails, we're not going to retry.

**[04:27 - 04:28]** It's just going to fail the entire job.

**[04:29 - 04:30]** That's our purpose.

**[04:31 - 04:37]** Okay, let me create a task and run it

**[04:42 - 04:43]** Meanwhile, this is running

**[04:46 - 04:51]** Let me show you how you can add a dashboard.

**[04:52 - 04:56]** So ideally, you should be creating your dashboard based on your

**[04:56 - 05:02]** tables, but we already created a sample dashboard for you.

**[05:03 - 05:05]** So what you just need to do, you need to run this function, and it

**[05:05 - 05:07]** will create a dashboard for you.

**[05:07 - 05:11]** Obviously, for running that, you need to have your all tables created.

**[05:12 - 05:15]** Right now, we don't have our gold tables created, which is getting

**[05:15 - 05:18]** created in the task that we just added.

**[05:18 - 05:25]** So if I run this, then my dashboard-- I get the dashboard, but it will not render

**[05:25 - 05:27]** as the final table is not yet created.

**[05:28 - 05:28]** Okay.

**[05:29 - 05:31]** So I'm going back to my run.

**[05:33 - 05:38]** Let me give it a refresh and monitor this

**[05:40 - 05:45]** So it is going to take one to two minutes to, uh, you know, reach until this.

**[05:45 - 05:49]** And when I reach-- when it reads here, we know it's going to fail because

**[05:49 - 05:53]** we have added a wrong column name

**[05:58 - 05:59]** Okay.

**[06:00 - 06:02]** Now the run has completed, and you can see it has failed.

**[06:04 - 06:09]** Let me go to this task, and you can see it is saying a column

**[06:09 - 06:13]** variable or function parameter with customer cannot be resolved.

**[06:14 - 06:18]** So it's saying we have this many things, but we don't have a customer.

**[06:18 - 06:20]** Instead, we have a customer name.

**[06:21 - 06:21]** Okay.

**[06:22 - 06:27]** Now, to fix this, what I need to do, I need to go into my task files

**[06:31 - 06:32]** And correct it.

**[06:34 - 06:35]** I'm going into that.

**[06:36 - 06:42]** And then under task files, I just copy-paste this name there.

**[06:44 - 06:44]** Done.

**[06:45 - 06:46]** Now it is fine.

**[06:47 - 06:48]** Let me go back to my run.

**[06:49 - 06:50]** This was my run.

**[06:51 - 06:53]** Let me go back to one step back.

**[06:54 - 06:55]** Oh, I'm completely back.

**[06:55 - 06:59]** Now, on the right-hand side, you can see I have two options, either

**[06:59 - 07:03]** delete this job run and trigger a new one, which obviously going to take

**[07:03 - 07:06]** more time, or I can repair this run.

**[07:07 - 07:08]** So I already made the fix.

**[07:09 - 07:12]** What it is saying, do you want to pass a new key-value pair?

**[07:12 - 07:14]** No, we don't, because it is same.

**[07:14 - 07:16]** Our catalog is same, schema is same.

**[07:16 - 07:21]** So I don't need to pass it, but if needed, you can pass a new parameter as well.

**[07:21 - 07:21]** Right.

**[07:24 - 07:25]** Let me click on Repair run.

**[07:27 - 07:31]** And it… As you can see, it is saying two attempts.

**[07:31 - 07:33]** So this is its second attempt.

**[07:34 - 07:36]** Let me go to the code to verify

**[07:39 - 07:45]** Oh, you can see it has now taken a snapshot of updated script, right?

**[07:45 - 07:48]** So whenever we trigger a run, it actually doesn't go into the notebook.

**[07:48 - 07:51]** It takes a snapshot.

**[07:51 - 07:54]** So let's say if it is running and I change something on the back

**[07:54 - 07:58]** end, it is not going to affect the run if it is running continuously.

**[07:58 - 08:03]** So I will not notice change into the, into this notebook because it takes a

**[08:03 - 08:06]** snapshot every time we trigger a run.

**[08:08 - 08:08]** Right.

**[08:09 - 08:17]** So it is saying customer name, and here you also see the two runs

**[08:17 - 08:20]** is done for this particular task.

**[08:20 - 08:23]** The first one has failed, and the, this current one has succeeded.

**[08:24 - 08:25]** Okay.

**[08:26 - 08:29]** Now I'm going back to my demo

**[08:33 - 08:34]** Okay.

**[08:34 - 08:40]** I'm back to my demo, and let me see how I can create my dashboards.

**[08:40 - 08:43]** You already have this function, which is going to create a dashboard for me.

**[08:44 - 08:47]** So what it's going to do, it is going to use an input file, which is

**[08:47 - 08:51]** located under Lesson4 files, and then going to create a dashboard for me.

**[08:51 - 08:53]** So we already have a JSON file based on that.

**[08:54 - 08:58]** It is now going to, you know, take parameters and all the datas from that and

**[08:58 - 09:00]** going to create a dashboard for me, right?

**[09:01 - 09:05]** So I'm going to run this, and I'll show you how my JSON file look likes.

**[09:05 - 09:06]** So this is the JSON file.

**[09:06 - 09:09]** It creates JSON into the lesson_12.

**[09:09 - 09:10]** So it is a JSON again.

**[09:11 - 09:14]** But it creates a dashboard for me

**[09:16 - 09:19]** On my directory, which is here, right?

**[09:20 - 09:24]** I'm going to click on this and see a dashboard.

**[09:24 - 09:28]** So as you can see, it currently says, "Show error, not able to see." I'm

**[09:28 - 09:34]** going to click on the edit draft, and I'm going to first confirm the

**[09:34 - 09:35]** data it is getting, it is using.

**[09:36 - 09:41]** So it is using my catalog, my schema, and all the gold table.

**[09:41 - 09:44]** So it is using ny_gold, va_gold, and salessummary_gold.

**[09:45 - 09:46]** Okay.

**[09:46 - 09:51]** So my dashboard should render now because now it is connected to a shared warehouse,

**[09:51 - 09:53]** and I'm able to see my dashboard, right?

**[09:54 - 09:59]** So let me quickly publish it.

**[09:59 - 10:01]** I'm going to use the individual data permission.

**[10:01 - 10:04]** If you want to know more about dashboard and what sort of a permission

**[10:04 - 10:10]** is this, I would recommend taking the AI/BI data analyst course.

**[10:11 - 10:12]** I'm going to publish it.

**[10:14 - 10:17]** We need to make sure that our dashboard is published, right?

**[10:18 - 10:20]** I'm going back to my job

**[10:23 - 10:28]** Under Task, what I'm going to do, I'm going to click on this, add a task.

**[10:28 - 10:32]** It is of type dashboard.

**[10:34 - 10:41]** What I'm going to name it, I'm going to name it as Refreshing Retail

**[10:43 - 10:44]** Dashboard.

**[10:45 - 10:47]** I'm going to name it as like that.

**[10:48 - 10:52]** Then under this, I have my unique lab username and then retail dashboard.

**[10:52 - 10:55]** I also need to select the compute.

**[10:55 - 10:58]** As you know, dashboard runs on SQL queries, so I get

**[10:58 - 10:59]** the option of SQL Warehouse.

**[11:00 - 11:02]** You can select your subscribers.

**[11:02 - 11:04]** Since I'm in a Vocareum environment, so I don't get that many option.

**[11:04 - 11:06]** I just got the option of lab user.

**[11:06 - 11:09]** But if you're working in a real environment, you can add the

**[11:09 - 11:13]** stakeholder's emails or your client's email, so they will get notified

**[11:13 - 11:17]** whenever this job is complete and dashboard get refreshed as well.

**[11:18 - 11:19]** Okay.

**[11:19 - 11:23]** Now, this particular dashboard takes data from this task as

**[11:23 - 11:25]** well, so I'm going to select that

**[11:28 - 11:29]** Perfect.

**[11:30 - 11:30]** Now this is done.

**[11:31 - 11:36]** I'm going to save it and give it a run again

**[11:42 - 11:43]** Back to my demo

**[11:48 - 11:55]** You can see our final pipeline is looking like this, and just

**[11:55 - 11:58]** wait for the run to complete.

**[11:59 - 12:00]** Right

**[12:03 - 12:04]** I'm going to the runs.

**[12:05 - 12:08]** You can let me refresh it

**[12:10 - 12:14]** You can see the first run took about three minutes, twenty seconds.

**[12:14 - 12:20]** I'm expecting to take this run exactly the same time, one, two seconds here and there

**[12:23 - 12:25]** Okay, the run has successfully completed.

**[12:26 - 12:28]** Let me navigate to the run.

**[12:28 - 12:32]** So it has refreshed the dashboard as well, and you can

**[12:32 - 12:34]** see the cluster is terminating.

**[12:35 - 12:40]** Okay, now I'm back to my demo.

**[12:42 - 12:46]** Now, the thing here is, whenever a job gets created, whenever

**[12:46 - 12:53]** a job runs, whenever anything happens, we keep record of it.

**[12:54 - 13:00]** And when I say record, so we keep metadata record of it in our system tables, right?

**[13:01 - 13:05]** So if you need to analyze the cost behind every run, what are the tasks

**[13:05 - 13:08]** that's assigned to a particular job, you can all see that in a system table.

**[13:09 - 13:12]** So let me first see how many system tables that we have access

**[13:12 - 13:16]** in the UK GM environment, or I would say a system catalog.

**[13:17 - 13:20]** You can see a system catalog here.

**[13:21 - 13:24]** Under this, we have one, two, three, four, five, six.

**[13:25 - 13:26]** Six different schemas.

**[13:26 - 13:29]** We are interested in the lakeflow schema.

**[13:30 - 13:31]** Okay.

**[13:33 - 13:38]** So I can see, you know, all these six schemas, and then we have this, all the

**[13:38 - 13:40]** tables will live in the lakeflow, right?

**[13:41 - 13:44]** So I made this query just to, you know, get some insight

**[13:44 - 13:46]** about our recently executed job.

**[13:47 - 13:48]** So let me quickly run this.

**[13:49 - 13:53]** You can see I've taken workspace ID, job name, job ID, run ID,

**[13:53 - 13:58]** period start time, task result, and taken a join with a job ID.

**[13:59 - 14:00]** Let's see what it returns.

**[14:01 - 14:04]** And we are just checking for demo 12 that we recently executed.

**[14:05 - 14:07]** So you can see I have workspace ID, I have my job name.

**[14:08 - 14:11]** You can see the job ID, the run ID, because we run at different times, right?

**[14:12 - 14:15]** And then period start time and what are the task key.

**[14:15 - 14:18]** So these, these are the different tasks that have been assigned, right?

**[14:18 - 14:21]** So all the metadata gets recorded whenever a job gets failed

**[14:22 - 14:24]** and all those things, right?

**[14:24 - 14:30]** This is helpful if you want to analyze the cost of your particular job, right?

**[14:31 - 14:36]** Now, we do have some additional resources attached to our demos and lectures.

**[14:36 - 14:40]** If you want to learn more about any features, you will find that

**[14:40 - 14:43]** in the attached documentation link.

**[14:44 - 14:44]** Thank you.

