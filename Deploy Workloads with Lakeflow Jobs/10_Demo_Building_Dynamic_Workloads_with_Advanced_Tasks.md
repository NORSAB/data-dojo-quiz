# Demo: Building Dynamic Workloads with Advanced Tasks

**Curso:** Deploy Workloads with Lakeflow Jobs
**Tipo de Contenido:** Video con Demostración Práctica Guiada
**Duración:** 18 minutos 56 segundos (1,136 segundos)
**Archivo de Captura:** `capturas/10_Demo_Building_Dynamic_Workloads_with_Advanced_Tasks.png`

## 1. Resumen y Objetivos de la Demostración

- Definición de dependencias avanzadas entre tareas en Lakeflow Jobs.
- Implementación de tareas condicionales **If/Else** basadas en valores dinámicos calculados (`dbutils.jobs.taskValues.set` y `taskValues.get`).
- Creación y configuración de tareas iterativas **For Each** para ejecutar procesamiento por lotes sobre múltiples estados (California, New York, Virginia) usando una misma plantilla de notebook.
- Manejo de concurrencia y optimización de recursos de cómputo en bucles.
- Validación de tablas generadas en el catálogo de Unity Catalog bajo las capas Bronze, Silver y Gold.

## 2. Transcripción Completa y Verbatim del Video con Marcas de Tiempo

**[00:00 - 00:03]** Welcome to Demo Building Dynamic Workloads with Advanced Tasks.

**[00:04 - 00:08]** In this demo, we are going to cover how you can define dependency between tasks.

**[00:09 - 00:14]** Also, we are going to show how you can add advanced tasks such as If/Else and

**[00:14 - 00:17]** For Each task in your Lakeflow jobs.

**[00:19 - 00:24]** Now, I'll make sure I'm connected to serverless compute version five.

**[00:25 - 00:28]** Then I'll run my classroom setup script.

**[00:29 - 00:30]** Meanwhile, this is running.

**[00:31 - 00:35]** Let me show you where we have done till last demo.

**[00:36 - 00:39]** So we've ingested customers orders and sales table into our schema.

**[00:41 - 00:45]** And in this demo, we are going to see how you can define dependency.

**[00:45 - 00:50]** So we have a pre-run code in which these two notebook tasks will be

**[00:50 - 00:52]** automatically created for you.

**[00:52 - 00:56]** So we are going to create If/Else task and a For Each task.

**[00:58 - 00:58]** Okay.

**[01:00 - 01:01]** Okay, this is completed.

**[01:01 - 01:05]** Let me quickly go to my lab user catalog.

**[01:06 - 01:11]** Under my job schema, I can see I have three tables already created here.

**[01:12 - 01:12]** Perfect.

**[01:14 - 01:21]** Now, let me see these two notebooks, which is actually joining customer and

**[01:22 - 01:24]** sales and joining customers and orders.

**[01:25 - 01:29]** You can directly click on this, and it will open it in a new tab, but I'll

**[01:29 - 01:33]** click on My Files here, go to Task Files.

**[01:34 - 01:41]** Under Lesson Nine files, I can see nine point one and nine point two,

**[01:41 - 01:41]** Let me see.

**[01:42 - 01:47]** So what it is doing, it is creating a table, customer sales silver,

**[01:48 - 01:51]** taking a join between customer bronze and sales bronze.

**[01:53 - 01:59]** Also, you can see based on the result that I get from customer sales silver,

**[01:59 - 02:01]** it is saving it as a DataFrame.

**[02:01 - 02:01]** Why?

**[02:01 - 02:05]** Because it is going to be further used by another task, which is an If/Else task,

**[02:06 - 02:07]** which we'll see.

**[02:07 - 02:07]** Right.

**[02:08 - 02:09]** So what it is doing,

**[02:09 - 02:14]** it is creating one thing that is duplicate exist.

**[02:15 - 02:21]** First, it is checking whether the DF count is greater than DF drop

**[02:21 - 02:26]** duplicates count, which means it is checking for duplicate records.

**[02:26 - 02:31]** If the number is same, then it doesn't get any value, but if

**[02:31 - 02:37]** this is more and this is less, it means it contains some duplicates.

**[02:38 - 02:42]** Whenever it finds any duplicates, it is storing it in a key-value pair.

**[02:43 - 02:47]** So the key is has duplicates, and the value is duplicate exist, which

**[02:47 - 02:49]** is a variable stores the number.

**[02:49 - 02:50]** Right.

**[02:50 - 02:51]** Or not the number.

**[02:51 - 02:54]** Actually, it's a  stores a Boolean expression.

**[02:55 - 02:56]** Right.

**[02:56 - 03:03]** And then this is passed using dbutils and passing it in the task values.

**[03:03 - 03:04]** Okay.

**[03:04 - 03:08]** So that we can fetch it dynamically in our task.

**[03:10 - 03:10]** Okay.

**[03:11 - 03:13]** Let's see joining customers and orders.

**[03:13 - 03:18]** It is creating a customer order silver table, joining between

**[03:18 - 03:23]** customers bronze and orders bronze based on the customer ID, obviously.

**[03:25 - 03:25]** Now,

**[03:28 - 03:31]** we already have a starter job for us, which is again going

**[03:31 - 03:33]** to create two tasks for me.

**[03:33 - 03:36]** These three are already we created.

**[03:36 - 03:40]** It is creating that as well because it going to be a separate Lakeflow job.

**[03:40 - 03:41]** Right.

**[03:41 - 03:46]** And it is creating customer sales service summary, which has…

**[03:46 - 03:49]** we have not created, and customers order report.

**[03:49 - 03:52]** So these two are again a notebook task.

**[03:52 - 03:53]** Right.

**[03:53 - 03:57]** So let me go into the jobs and pipelines.

**[03:57 - 03:59]** I'm going to open it in a new tab

**[04:01 - 04:08]** Here you can see we already have a demo seven which we executed, and under demo

**[04:08 - 04:13]** nine, you can see we have five tasks here

**[04:16 - 04:19]** So Ingesting customers, orders, and sales.

**[04:19 - 04:24]** If I click on this, you can see customer sales summary

**[04:27 - 04:30]** is already well-defined and dependency is also defined.

**[04:31 - 04:33]** So we need not to take care of that.

**[04:34 - 04:34]** But

**[04:37 - 04:40]** You can see the customer order report doesn't depend on anything.

**[04:41 - 04:45]** But we have seen the code, and it is taking join between

**[04:45 - 04:49]** customer and orders, right?

**[04:49 - 04:55]** So I define it in the dependency, which is ingesting customers and ingesting orders.

**[04:57 - 04:58]** Right.

**[04:59 - 05:01]** Let me give it a run

**[05:05 - 05:06]** And then back to my demo

**[05:09 - 05:09]** Okay.

**[05:09 - 05:10]** We have defined dependency.

**[05:12 - 05:15]** Our job is actually looking like this only.

**[05:16 - 05:17]** So we are fine.

**[05:17 - 05:20]** Now, what we are going to do, we are going to add an If/Else task,

**[05:22 - 05:23]** right?

**[05:23 - 05:25]** We also seen the code reference, right?

**[05:25 - 05:26]** We explained this thing.

**[05:27 - 05:29]** Now, let me add an If/Else task.

**[05:30 - 05:37]** I'm going back to my job, and on customer sales summary, I'm going to add a task.

**[05:40 - 05:44]** And under Advanced section, you will see If/Else condition.

**[05:45 - 05:51]** So what I'm going to name it, going back to the demo, and then naming

**[05:51 - 05:53]** it as checking for duplicates.

**[05:53 - 05:56]** So how If/Else task works.

**[05:56 - 05:58]** First, we are going to define a condition.

**[05:59 - 06:02]** Now, based on that condition, I want to run a certain task.

**[06:03 - 06:07]** If it's true, I want to run task A. If it's false, I'm going to

**[06:07 - 06:12]** run task B. So I'm going to do that, checking for duplicates.

**[06:13 - 06:14]** Now, condition.

**[06:15 - 06:19]** Either I can copy-paste the whole code or I'm going to

**[06:19 - 06:21]** click on this parenthesis here.

**[06:22 - 06:30]** And if I scroll down, you can see tasks.customersales.values.

**[06:31 - 06:35]** And instead of my value, what was my variable?

**[06:35 - 06:37]** It was hasduplicates.

**[06:38 - 06:44]** Now, if it has duplicates, I'm going to name it as true, right?

**[06:44 - 06:45]** What is the dependency?

**[06:45 - 06:47]** It completely depends upon this.

**[06:47 - 06:50]** So run if dependencies all succeeded.

**[06:51 - 06:52]** I'm going to save it

**[06:56 - 07:01]** Now, based on the condition, I'm going to add a notebook task.

**[07:01 - 07:06]** But before that, let me see what is my true condition and false condition.

**[07:07 - 07:07]** So

**[07:12 - 07:19]** If condition, or you can say if the thing is true, my task contain duplicates.

**[07:19 - 07:25]** So what I'm doing, I'm taking a distinct star, saving it in a DataFrame, and

**[07:25 - 07:29]** then writing my table, which is already existing, which is customer_sales_silver.

**[07:30 - 07:32]** That's how I can negate duplicates.

**[07:33 - 07:35]** What if my condition is false?

**[07:36 - 07:41]** So in that case, if my table does not have any duplicates,

**[07:42 - 07:47]** what I'm going to do, I'm going to perform some cleaning and transformation, and

**[07:47 - 07:51]** then I'm going to add two new columns, which is orderdate

**[07:51 - 07:54]** and average price per unit.

**[07:54 - 07:59]** So I'm adding orderyear, ordermonth base from orderdate, and then

**[07:59 - 08:02]** adding average price per unit using total price and unit purchased.

**[08:03 - 08:05]** When I'm done with all the transformation,

**[08:07 - 08:10]** I'm going to save it in customer_sales_gold.

**[08:11 - 08:11]** Right?

**[08:11 - 08:17]** Please note that the suffix at the end of table, it defines at what level

**[08:17 - 08:19]** we are in the medallion architecture.

**[08:21 - 08:21]** Okay.

**[08:22 - 08:30]** Now, going back to my demo, I'm adding an If task when the duplicate exist.

**[08:31 - 08:31]** Right.

**[08:31 - 08:35]** So the task name is going to be dropping duplicate records.

**[08:35 - 08:36]** I'm going to copy it.

**[08:37 - 08:39]** I'm going to add it in here.

**[08:40 - 08:41]** I'm going to select the notebook.

**[08:42 - 08:47]** Obviously, it is going to be a if condition, right?

**[08:48 - 08:49]** Then

**[08:51 - 08:54]** Depends upon checking for duplicates true.

**[08:54 - 08:55]** Yes.

**[08:55 - 08:56]** So this is fine.

**[08:56 - 08:57]** I'm going to create a task

**[09:01 - 09:01]** Right.

**[09:02 - 09:06]** Now I'm going to add a false task.

**[09:07 - 09:13]** It is going to be of notebook task only, and the name of this task is

**[09:15 - 09:19]** Transforming Customer Sales Table because we're doing that only.

**[09:21 - 09:21]** Okay.

**[09:23 - 09:23]** So

**[09:26 - 09:27]** It is this.

**[09:27 - 09:30]** And let me select the notebook.

**[09:32 - 09:33]** Else condition confirmed.

**[09:35 - 09:37]** Now, here comes the interesting part.

**[09:38 - 09:42]** So obviously, it depends upon the false condition of checking for duplicates.

**[09:42 - 09:47]** And also, what I want to do, once I'm done with dropping duplicate

**[09:47 - 09:52]** record, isn't it a nice idea that I transform my records instead of

**[09:52 - 09:54]** having, adding a separate task to this?

**[09:54 - 10:00]** I can have this, and after checking duplicates, I can have this task.

**[10:01 - 10:04]** So I need to make it dependent on dropping duplicate records.

**[10:05 - 10:06]** Okay, that's fine.

**[10:10 - 10:15]** It is this and dropping duplicate records, right?

**[10:16 - 10:18]** But what should be the run if dependency?

**[10:19 - 10:25]** Is it because this false and this true are not going to be all succeeded.

**[10:25 - 10:26]** So it's not going to be all succeeded.

**[10:27 - 10:30]** So it should be at least one succeeded or none failed.

**[10:31 - 10:33]** So one, what should I select?

**[10:34 - 10:35]** So I'm going to select none failed.

**[10:35 - 10:36]** Why?

**[10:36 - 10:38]** Because I want to make sure my job runs.

**[10:40 - 10:46]** At least one succeeded runs whenever a second job has failed as well.

**[10:46 - 10:51]** But I want to make sure that none has failed, and at least one of them

**[10:51 - 10:53]** has passed the condition, right?

**[10:53 - 10:54]** Let me create task.

**[10:56 - 10:57]** I'm not able to see the arrow here.

**[10:57 - 10:59]** Let me give it a refresh.

**[11:00 - 11:02]** Some problem with the UI.

**[11:02 - 11:04]** Okay, now it is fine.

**[11:06 - 11:12]** So you can see if my condition is true, what it's going to do, it's going to

**[11:12 - 11:14]** drop duplicates and then transform.

**[11:15 - 11:21]** If it is false, it is directly going to transforming my customer sales table.

**[11:22 - 11:22]** Okay.

**[11:26 - 11:29]** Now, that's done.

**[11:30 - 11:34]** Now I'm going to add a For Each task on this.

**[11:34 - 11:36]** Before adding that, let me go through the code

**[11:50 - 11:54]** I'm going into the for each customer.

**[11:55 - 11:56]** So what it is saying?

**[11:56 - 11:59]** It is saying to fetch a state widget.

**[12:00 - 12:00]** Okay.

**[12:01 - 12:06]** So we need to pass a widget or a dynamic variable, which is going to be

**[12:07 - 12:09]** fetched by this particular notebook.

**[12:09 - 12:09]** Okay.

**[12:10 - 12:13]** Now, based on that, what it is doing, it is dynamically

**[12:15 - 12:17]** creating a table name as well.

**[12:17 - 12:21]** You can see whenever I decide a state name, it is going to add.

**[12:21 - 12:27]** So let's say if a state name is New York, and I pass it as, as state is

**[12:27 - 12:35]** equal to my NY, so my table name is going to be customers_orders_NY_silvertable.

**[12:36 - 12:41]** And what this function is doing, it is making sure that all the

**[12:41 - 12:46]** transformation is applied with the condition when state is that.

**[12:46 - 12:54]** So this particular table has record of all region, and since I want to

**[12:54 - 13:00]** iterate it with respect to each state, we are making sure that whatever the

**[13:01 - 13:05]** transformation or whatever the new columns that we are adding, it is

**[13:05 - 13:08]** specific to that particular state.

**[13:09 - 13:10]** Okay.

**[13:11 - 13:14]** Now, back to my job.

**[13:16 - 13:18]** So how a For Each task generally works.

**[13:18 - 13:24]** For a For Each task, we first needs to define the

**[13:26 - 13:32]** outer task, which means which is, which has my input, which is going

**[13:32 - 13:34]** to be passed in a nested loop.

**[13:35 - 13:36]** Right.

**[13:36 - 13:37]** So first I need to name it.

**[13:39 - 13:44]** For that, I'm going into my demo, and then

**[13:47 - 13:52]** I'm going to name it as Customer Orders Report.

**[13:53 - 13:53]** Okay.

**[13:55 - 13:57]** So it is going to be Customers Orders Report.

**[13:58 - 13:59]** What are my inputs?

**[13:59 - 14:00]** So I need to provide some input.

**[14:01 - 14:04]** So I'm going to provide three state name here.

**[14:04 - 14:06]** Let me copy-paste that.

**[14:06 - 14:09]** It is going to be California, New York, and VA

**[14:14 - 14:15]** Okay.

**[14:16 - 14:18]** Now, here's the interesting part.

**[14:18 - 14:19]** It is asking for concurrency.

**[14:19 - 14:27]** What does this… It means that whenever this job is initialized, so do you want

**[14:27 - 14:34]** to run all the tasks in parallel or all the iteration in parallel, in concurrency,

**[14:34 - 14:36]** or you want to run it one by one?

**[14:37 - 14:41]** To saving compute, I would recommend it to keep it as

**[14:41 - 14:43]** blank, which means one at a time.

**[14:44 - 14:47]** And if you are in a hurry, you can select it as three as well or

**[14:47 - 14:50]** two, depending on your situation.

**[14:51 - 14:53]** Is it depends upon customer orders?

**[14:53 - 14:53]** Yes.

**[14:54 - 14:55]** What is the dependency type?

**[14:55 - 14:55]** All succeeded.

**[14:56 - 15:01]** Now, you can see it is giving me an option to add a task to loop over.

**[15:01 - 15:03]** So where I want to loop over

**[15:07 - 15:10]** So I just copy the wrong name.

**[15:10 - 15:13]** It should be customer order state-wise report because we want to

**[15:17 - 15:17]** generate a state-wise report.

**[15:17 - 15:21]** Okay, so now this is going to be iterator, and then this iterator is going to

**[15:21 - 15:26]** generate iteration of each state, right?

**[15:26 - 15:30]** For that, I'm going to select a notebook, and this is going to be for each state

**[15:33 - 15:37]** Now, one interesting theory is I need to add a reference.

**[15:38 - 15:43]** So whatever I passed in the outer task need to be referenced inside.

**[15:43 - 15:50]** So what I'm going to say, it is going to be like this, and my key is state, right?

**[15:50 - 15:54]** Because we are using key as state, and this value is going to be referenced

**[15:54 - 15:58]** automatically using the outer task, right?

**[15:59 - 16:02]** Now, everything seems fine

**[16:05 - 16:06]** Let me give it a try

**[16:09 - 16:11]** I'm going inside the runs.

**[16:12 - 16:13]** This is the first run that I initiated.

**[16:14 - 16:16]** Now the second run has started

**[16:19 - 16:22]** So it might take, take some time to completely run this.

**[16:22 - 16:23]** I'll be back.

**[16:23 - 16:29]** Okay, as you can see, we found a duplicate as well, and in

**[16:29 - 16:30]** this, this task has started.

**[16:30 - 16:32]** Let me just click on this.

**[16:32 - 16:34]** It's interesting UI.

**[16:34 - 16:37]** So you can see the first input passed is CA. Now it is running

**[16:37 - 16:45]** job, the same notebook, but now the state is getting value of CA, right?

**[16:46 - 16:52]** If I go back again into this, the first iteration is passed,

**[16:52 - 16:53]** now it is doing it for NY.

**[16:54 - 16:58]** Similarly, it is going to do for VA. Right?

**[16:59 - 17:02]** As you can see, I've not selected concurrency.

**[17:04 - 17:07]** It is running it one by one.

**[17:07 - 17:09]** Okay, back to my job.

**[17:11 - 17:15]** And now this is completed.

**[17:16 - 17:23]** To confirm this, that we have different tables, I'm checking into my schema.

**[17:23 - 17:30]** So you can see, we expand it, CA, NY, VA. We got three separate tables created using

**[17:30 - 17:38]** For Each Task, and we just had a single notebook to create all these three tables.

**[17:39 - 17:41]** And similarly, our gold table is also created as well,

**[17:41 - 17:42]** which is customer_sales_gold.

**[17:44 - 17:51]** Okay, let me quickly run my three tables to see what sort of a data lies in.

**[17:53 - 17:59]** So in customer_sales_gold, you can see we have customer details here, and we do have

**[18:01 - 18:06]** average price per unit, which means sales data available as well,

**[18:06 - 18:08]** unit purchased, things like that.

**[18:09 - 18:12]** And in customer orders, you can see you have customer details

**[18:12 - 18:15]** and the order details, right?

**[18:19 - 18:20]** Similarly for New York.

**[18:20 - 18:22]** So you can see the state is New York.

**[18:22 - 18:23]** It has filtered it

**[18:25 - 18:26]** Similarly for VA.

**[18:29 - 18:34]** So one use case of For Each is that we kind of use the same code for

**[18:34 - 18:39]** each state, but in your case, you can specify it when state is, let's say,

**[18:39 - 18:42]** New York, you want to do different transformation, and if state is VA, you

**[18:42 - 18:44]** want to do some different transformation.

**[18:45 - 18:48]** It basically depends upon your need and your requirement

**[18:51 - 18:51]** Thank you

