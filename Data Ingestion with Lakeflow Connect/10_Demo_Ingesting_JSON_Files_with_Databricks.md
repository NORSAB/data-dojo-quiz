# Demo: Ingesting JSON Files with Databricks

**Course:** Data Ingestion with Lakeflow Connect  
**Lesson Type:** Video Demo (Duration: 16:58)  
**Screenshot:** `capturas/10_Demo_Ingesting_JSON_Files_with_Databricks.png`

---

## Executive Summary & Technical Architecture

In this demonstration, you learn how to ingest raw JSON data into Unity Catalog using `CREATE TABLE AS SELECT` (CTAS) and evaluate the three primary methods for managing semi-structured JSON:
1. **Flattening JSON strings** using colon (`:`) notation.
2. **Parsing into `STRUCT` types** using `schema_of_json()` and `from_json()`, plus array navigation with `size()` and `explode()` / `explode_outer()`.
3. **Using the `VARIANT` data type** with `parse_json()` and type-casting operators (`:` and `::`).

---

## Detailed Step-by-Step Code Walkthrough

### 1. Lab Setup and Source Inspection
- Connect to Serverless Compute.
- Run setup script to set `current_catalog` and `current_schema` (e.g., `labuser`, `data_ingestion`).
- Source: `dbacademy_ecommerce` dataset from Databricks Marketplace, specifically `events-kafka` directory containing 11 raw files.
- Inspecting raw Kafka files using the `text` format reveals Base64-encoded strings:
```sql
SELECT * FROM text.`/Volumes/.../events-kafka/`;
```
Output columns include Kafka standard fields: `key`, `offset`, `partition`, `timestamp`, `topic`, `value`.

### 2. Storing Raw Ingested Data & Base64 Decoding
Save raw data into a bronze landing table:
```sql
CREATE OR REPLACE TABLE kafka_events_bronze_raw AS
SELECT * FROM text.`/Volumes/.../events-kafka/`;
```

Decode the Base64 binary payload using `unbase64()` and cast to human-readable JSON string:
```sql
CREATE OR REPLACE TABLE kafka_events_bronze_decoded AS
SELECT 
  cast(unbase64(key) AS STRING) AS key,
  offset,
  partition,
  timestamp,
  topic,
  cast(unbase64(value) AS STRING) AS value
FROM kafka_events_bronze_raw;
```

---

### 3. Approach 1: Flattening JSON Strings with Colon Notation
Querying the raw JSON string directly:
```sql
SELECT 
  value:device AS device,
  value:traffic_source AS traffic_source,
  value:geo AS geo,
  value:items AS items
FROM kafka_events_bronze_decoded;
```
- **Pros:** Fast to implement, zero schema constraints, highly flexible for ad-hoc exploration.
- **Cons:** Nested fields (`geo`, `items`) are still strings. Querying nested elements requires further manual string extraction; lacks schema enforcement and type performance.

---

### 4. Approach 2: Parsing JSON into `STRUCT` Columns

#### Step A: Infer Schema Automatically
```sql
SELECT schema_of_json('{"device":"mobile","geo":{"city":"Anytown","state":"CA"},"items":[{"item_id":"1","price":10.5}]}') AS derived_schema;
```

#### Step B: Ingest into Typed Struct Table
```sql
CREATE OR REPLACE TABLE kafka_events_bronze_struct AS
SELECT 
  key,
  from_json(value, 'STRUCT<device:STRING, geo:STRUCT<city:STRING, state:STRING>, items:ARRAY<STRUCT<item_id:STRING, price:DOUBLE>>, traffic_source:STRING>') AS value
FROM kafka_events_bronze_decoded;
```

#### Step C: Querying Nested Structs and Arrays
- Access nested struct fields using dot notation:
```sql
SELECT 
  value.device,
  value.geo.city,
  value.items,
  size(value.items) AS num_items
FROM kafka_events_bronze_struct;
```

#### Step D: Exploding Arrays into Rows
Flatten the array elements into individual rows:
```sql
CREATE OR REPLACE TABLE bronze_exploded_array AS
SELECT 
  key,
  value.device,
  value.geo.city,
  size(value.items) AS item_count,
  explode(value.items) AS item
FROM kafka_events_bronze_struct;
```
*Note:* If an array is empty or NULL, `explode()` drops the row. To preserve rows with NULL items, use `explode_outer()`.

---

### 5. Approach 3: Modern `VARIANT` Data Type (DBR 15.4+ / Serverless)
The `VARIANT` type provides high-performance binary semi-structured storage without predefined schema.

#### Ingest with `parse_json()`:
```sql
CREATE OR REPLACE TABLE kafka_events_bronze_variant AS
SELECT 
  key,
  offset,
  partition,
  timestamp,
  parse_json(value) AS json_variant_value
FROM kafka_events_bronze_decoded;
```

#### Querying `VARIANT`:
- **Single colon (`:`)**: Extracts subfield as `VARIANT` type:
  ```sql
  SELECT json_variant_value:device FROM kafka_events_bronze_variant;
  ```
- **Double colon (`::`)**: Casts the extracted subfield to a concrete SQL type:
  ```sql
  SELECT json_variant_value:device::string AS device_str FROM kafka_events_bronze_variant;
  ```

---

## Verbatim Video Transcript (233 Cues)

| Timestamp | Spoken Transcript |
| --- | --- |
| 00:01 - 00:04 | Welcome to demo, Ingesting JSON files with |
| 00:06 - 00:06 | Databricks. |
| 00:06 - 00:10 | First thing first, I'll make sure I'm connected to a serverless compute. |
| 00:11 - 00:13 | Then I'm going to run a classroom setup script. |
| 00:14 - 00:19 | In this demonstration, we are going to ingest raw JSON data into |
| 00:20 - 00:22 | Unity Catalog using CTAS command. |
| 00:22 - 00:26 | We're going to see what are the different options that we |
| 00:26 - 00:30 | have to ingest JSON efficiently |
| 00:35 - 00:38 | Okay, let me see my current_catalog and current_schema, which is |
| 00:38 - 00:40 | labuser and data_ingestion. |
| 00:41 - 00:45 | So what we are going to do, we are going to ingest data from our |
| 00:45 - 00:51 | dbacademy_ecommerce, which is our data we taken from the marketplace, |
| 00:51 - 00:53 | and we are going to use events-kafka |
| 00:55 - 00:55 | data. |
| 00:55 - 00:57 | Let me first see how many files are there. |
| 00:58 - 01:03 | So there are total number of 11 files and their size and modification time. |
| 01:05 - 01:08 | Now, let me quickly look at the data. |
| 01:10 - 01:16 | Now I'm using text because it gives me a raw look of how my data looks like. |
| 01:16 - 01:20 | So you can see it is something like this. |
| 01:20 - 01:24 | So what I have done, I have copy-pasted it into the format here. |
| 01:25 - 01:31 | So you can see it is a encoded database with a base64, right? |
| 01:31 - 01:35 | So you can see we have a key here, which is a unique identification for a particular string, or in case, this value. |
| 01:39 - 01:44 | And we have some information, which is generally we get when we use Kafka, which is offset, partition, timestamp, topic, right? |
| 01:49 - 01:51 | So this is actually not readable. |
| 01:51 - 01:57 | So to ingest this data, first, I need to, you know, pass by JSON string, and then need to decode this data as well. |
| 02:00 - 02:06 | So first thing first, I'll just use and pass it my JSON string and see. |
| 02:07 - 02:14 | Now it is more readable, but it is still encoded, and we need to decode it. |
| 02:15 - 02:19 | So before doing that, I'm going to store this raw data and name it as events_kafka_table, and then I'm going to apply my different functionality to decode and to better pass my JSON data. |
| 02:30 - 02:30 | So, |
| 02:33 - 02:39 | First thing first, so I'm going to save it as kafka_events_bronze_raw |
| 02:40 - 02:42 | because it's actually a raw data. |
| 02:42 - 02:44 | Nothing have been applied into this. |
| 02:44 - 02:47 | We just save it in a table from the source. |
| 02:49 - 02:50 | Right. |
| 02:50 - 02:53 | Then I'm going to decode it. |
| 02:53 - 02:58 | So I'm going to use a functionality which is unbase64, and I'm going to query on this to see what are my decoded key and what are my decoded value. |
| 03:09 - 03:16 | Now, this is my encoded key, and this is my decoded value. |
| 03:19 - 03:20 | Right. |
| 03:22 - 03:26 | I'm going to cast them as well. |
| 03:30 - 03:39 | Now, what we have done, we have taken base64 encoded data to a binary format. |
| 03:39 - 03:43 | Now from that binary format, we are going to use cast function to convert it into the JSON formatted string. |
| 03:46 - 03:51 | I'm going to run this command, and I'm going to see our human-readable values, right? |
| 03:57 - 04:01 | So this complete thing is now stored as a string only, right? |
| 04:01 - 04:08 | So we need to use some functionalities to access this because it is not accessible right now. |
| 04:10 - 04:11 | It is a complete string. |
| 04:15 - 04:21 | Before doing that, let me store that decoded data in a kafka_events_bronze_decoded table. |
| 04:25 - 04:26 | Now, this is my data. |
| 04:26 - 04:29 | You can see all of them are stored as a string only. |
| 04:30 - 04:36 | The offset is integer, but the value, all of the value have been stored as a string. |
| 04:40 - 04:43 | Now, here comes the interesting part. |
| 04:43 - 04:50 | So there are several options which we can use to work with the JSON formatted strings and store it in a table. |
| 04:53 - 04:56 | The first way is to flatten the JSON string columns. |
| 04:56 - 05:00 | So the first thing is the benefit, the core benefit of this is it is very easy to implement. |
| 05:02 - 05:08 | You see it, you make the JSON as a plain text, and you just store it. |
| 05:08 - 05:10 | Second thing, it is very flexible. |
| 05:10 - 05:14 | It doesn't have any schema constraint because we don't define it in the initial stage itself because it doesn't have a schema because we are just flattening it, right? |
| 05:20 - 05:28 | The main consideration is first is going to be challenging because it works, but it is not as efficient as we want. |
| 05:31 - 05:35 | Second, it is very difficult to process the complex data. |
| 05:35 - 05:40 | Since it doesn't have any schema, so it can lead to some data integrity issues. |
| 05:40 - 05:43 | And also we need to take into consideration that it is very complex to query, which means we also require additional code to even parse or retrieve data, right? |
| 05:51 - 05:52 | So how you do that? |
| 05:53 - 05:54 | First. |
| 05:56 - 06:01 | Let me see one of the decoded value. |
| 06:02 - 06:04 | So this is how my data is looking like, right? |
| 06:05 - 06:11 | It has device and it has stored it as in a string. |
| 06:11 - 06:20 | Then in geo, we have an object which contains two things, city and state. |
| 06:20 - 06:25 | And in items, we actually have array of objects. |
| 06:25 - 06:28 | So let's say if somebody has ordered three things, so there will be three entries, right? |
| 06:32 - 06:37 | And let's say if somebody has ordered four items, so there would be like these four objects, right? |
| 06:42 - 06:46 | Then we have this traffic_source, user_first_touch_timestamp, and user_id. |
| 06:48 - 06:52 | For example, if you have to extract these four values, device, traffic_source, geo, and items, you can see device and traffic_source just straightforward. |
| 06:57 - 06:59 | We can extract those. |
| 06:59 - 07:04 | But geo is again, an object containing some values, and items, it's an array of objects, right? |
| 07:07 - 07:10 | So I'm using this functionality. |
| 07:11 - 07:13 | But I need to decode it. |
| 07:13 - 07:20 | I need to provide the column which contains the values, then using the column which I'm trying to fetch, right? |
| 07:25 - 07:33 | So if I run this, you're going to see, now, this is fine, the device and the traffic_source. |
| 07:35 - 07:39 | These all are strings, but you can see the geo and items, it has stored it as a string. |
| 07:39 - 07:41 | So this is again a JSON formatted string here, right? |
| 07:51 - 07:59 | So if I need to fetch the value inside geo or items, I need to further decode it. |
| 08:02 - 08:03 | So that's method one. |
| 08:03 - 08:07 | The another method is you can use the STRUCT type. |
| 08:07 - 08:13 | So you can use the STRUCT type directly on your decoded values. |
| 08:13 - 08:15 | What are the benefits of using STRUCT? |
| 08:15 - 08:19 | First, you define the schema, which helps in maintaining data integrity. |
| 08:19 - 08:24 | The second is, since you have defined, the performance is going to be better. |
| 08:26 - 08:31 | The top consideration or the drawbacks could be you can't have a variable schema in this case. |
| 08:34 - 08:41 | So the schema enforcement is from the start, so it can arise some problem if different type of JSON or a JSON structure changes over time. |
| 08:48 - 08:53 | Then the second is it has reduced flexibility, which means because since we define the schema initially, if any structure changes have been happened in our data, it should match the defined schema. |
| 09:04 - 09:10 | Let's say the order changes or if anything changes, then it is very complicated to deal with when we have a structure defined already. |
| 09:15 - 09:16 | Right. |
| 09:17 - 09:20 | Now, how to work with STRUCT column. |
| 09:20 - 09:25 | First, I need to define what sort of a data type that resides in my JSON-formatted string. |
| 09:28 - 09:32 | And then I'll apply that schema into my already present JSON-formatted string column. |
| 09:35 - 09:36 | Right. |
| 09:37 - 09:42 | So to do that, I can manually write down all the data types that's present in my JSON-formatted string, or I can use this function, which is a schema of JSON function, which is automatically going to fetch the schema inferred from a given string. |
| 09:54 - 09:56 | So what I have done, I have copy-pasted a JSON string value, and I'm going to pass it on schema of JSON and storing it as schema. |
| 10:07 - 10:13 | You can see now I have the data type defined or my structure defined. |
| 10:14 - 10:15 | Right. |
| 10:16 - 10:22 | What I'm going to do, I'm going to create a kafka_events_bronze_struct table, and I'm going to ingest the decode value and going to pass my schema directly. |
| 10:31 - 10:33 | And lastly, I'm going to query this. |
| 10:38 - 10:45 | The one thing to notice here is that now my value is not a string. |
| 10:46 - 10:51 | It is a well-managed structure here, right? |
| 10:51 - 10:54 | It used to be a string, but it is now a well-managed structure. |
| 10:54 - 10:57 | So fetching and retrieval of data is easy. |
| 10:58 - 11:01 | Now, what I'm going to do, I'm going to query the table that I just created, right? |
| 11:04 - 11:08 | So as you can see, now I have the value here, so I can directly query it using value.device, or if I want to query the data that resides in another STRUCT, so I can use a nested field, which is value.geo.city to access the New York item, right? |
| 11:28 - 11:33 | So in this particular query, I'm using a field directly, and then I'm using a nested field, and I'm also fetching the items that present the value and what are the size of the items, like how many items are present in the value. |
| 11:47 - 11:48 | I'm going to run this. |
| 11:50 - 11:55 | So I got my device and my city, and if I expand this, you can see I have an array here. |
| 11:56 - 12:01 | I got a array of STRUCT, and it has, like, three values, right? |
| 12:03 - 12:05 | And how many number of elements present in the array? It was three. |
| 12:06 - 12:09 | And for this particular, if I could see this, it has two elements, so I get the 2 count here. |
| 12:12 - 12:18 | Now, what if I want to explode all the items that present in this particular array into a row? |
| 12:21 - 12:24 | So to do that, I can use the explode array functionality. |
| 12:25 - 12:31 | The explode array functionality provides me an option to explode my items that is present into each row. |
| 12:36 - 12:38 | And let's see if it doesn't contain any element. |
| 12:38 - 12:43 | If it is null, the explode by default doesn't explode it into a new row. |
| 12:43 - 12:45 | But if I want to explode that as a null for any particular use case, you can use the explode outer function. |
| 12:51 - 12:51 | Right. |
| 12:52 - 12:55 | So what I'm going to do, I'm going to create a new table, which is a bronze_exploded_array, and I'm going to have number of items in array. |
| 13:00 - 13:04 | I'm going to explode each item, and I'm going to print whatever all those items and query the table as well. |
| 13:09 - 13:11 | Let me see. |
| 13:12 - 13:17 | Now I should get one item for a row. |
| 13:18 - 13:20 | So if you expand this, there's only one item. |
| 13:20 - 13:24 | I have one STRUCT here, and where it has been derived from? It has derived from this. |
| 13:27 - 13:27 | Right. |
| 13:29 - 13:35 | So it is P_FOAM_S, and it is again. |
| 13:36 - 13:39 | The decoded key is same because it has three items, so it get three entries. |
| 13:43 - 13:46 | Now, the last one is working with a variant column. |
| 13:47 - 13:51 | So it is the new format the Databricks has provided. |
| 13:51 - 13:55 | It is open, flexible, and performant when you're working with a JSON formatted string. |
| 13:57 - 14:02 | Some of the consideration is that it runs on Databricks 15.4 and above. |
| 14:02 - 14:07 | And also, if you're using serverless, in our case, we are using it, so the serverless version should be more than version 1. |
| 14:13 - 14:14 | Right. |
| 14:14 - 14:18 | Some of the example is that, which we are going to see below, but this is one of the common example how you can use this. |
| 14:20 - 14:24 | There are some resources that you can see, and you can know about whether-- how you can use variant data type, and how it works with semi-structured and other formats. |
| 14:32 - 14:36 | So here are some resources that is available, which you can go through to learn more about this. |
| 14:38 - 14:42 | So first thing I'm starting with my already created kafka_events_bronze_decoded table, which we created long back above into this demonstration. |
| 14:49 - 14:52 | So you can see it is a decoded key and decoded value, which is stored as a string. |
| 14:54 - 14:54 | Right. |
| 14:55 - 14:58 | Now I'm going to use a parse_json functionality, which is going to take my JSON and return me the variant data type. |
| 15:01 - 15:06 | If I click on this, you can see you can use this parse_json, provide a JSON string, and it provides with a variant value. |
| 15:13 - 15:13 | Back to my demo. |
| 15:14 - 15:17 | Now what I'm going to do, I'm going to create a table by name of kafka_events_bronze_variant, and passing all my column value. |
| 15:22 - 15:28 | Then using the parse_json, providing the decode value which contains the actual data, and saving it as JSON variant value. |
| 15:33 - 15:33 | Let's see. |
| 15:34 - 15:37 | And then obviously doing a SELECT * on the result. |
| 15:39 - 15:45 | So now here you can see it is a variant data type, and it is now easily accessible and easily retrievable. |
| 15:51 - 15:51 | Okay. |
| 15:53 - 15:57 | If you want to access the items, you can use a single colon, and if you want to define a data type, you can use a double colon. |
| 16:00 - 16:07 | For example, let's say if I just remove this and query this, so now it is going to access it only. |
| 16:10 - 16:15 | And you can see it is a variant data type, and it is stored as this. |
| 16:15 - 16:22 | But if I put back double colon string, now it is going to access it as a string only. |
| 16:24 - 16:28 | Now it is stored as string, and the values I can access it directly. |
| 16:31 - 16:34 | So this is how you can ingest JSON file with Databricks and use different functionalities. |
| 16:36 - 16:41 | We have seen how you can use the flatten string method and how can you use the STRUCT method. |
| 16:43 - 16:45 | And lastly, we see how you can use variant. |
| 16:46 - 16:48 | So this is a quick introduction to the variant data column. |
| 16:48 - 16:51 | If you want to learn more about this, I highly recommend to go to the resources provided here. |
