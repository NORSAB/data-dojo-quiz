# Lecture: Ingesting Semi-Structured Data: JSON

## Overview
In this lecture, you will learn how ingesting semi-structured data such as JSON enables efficient parsing and transformation of complex, nested input into structured Delta tables for advanced analytics in the Lakehouse.

## Learning Objectives
By the end of this lecture, you will be able to:
- Describe the structure of JSON data including objects, keys, values, nested objects, and arrays.
- Explain three approaches for working with JSON columns: `STRING`, `STRUCT`, and `VARIANT` data types.
- Map JSON types to Databricks SQL data types and define `STRUCT` schemas for nested JSON.
- Use `schema_of_json` and `from_json` to derive and apply schemas when converting JSON strings to `STRUCT` columns.
- Describe the `VARIANT` data type and its benefits for semi-structured data.

---

## A. JSON Overview
Ingesting semi-structured data like JSON enables efficient parsing and transformation of complex, nested input into structured Delta tables for advanced analytics in the Lakehouse.

Understanding the format of JSON is important because it affects how we parse and transform the data during ingestion.

### Basic Structure of a JSON File

#### 1. Objects
- **Description:** JSON data is made up of JSON objects, which are typically enclosed in curly brackets `{}`.
- **Example:**
```json
{
  "name": "John Doe",
  "age": 35,
  "address": {
    "city": "Anytown",
    "state": "CA"
  },
  "children": [
    { "name": "Owen", "age": 10 },
    { "name": "Eva", "age": 8 }
  ]
}
```
*Note:* JSON objects are enclosed in curly brackets `{ }`.

#### 2. Keys
- **Description:** Within the curly brackets, JSON objects contain key-value pairs.
  - Each key is always a **string** enclosed in quotation marks.
  - Each key contains a **value**.
- **Example Keys:** `"name"`, `"age"`, `"address"`, `"children"`.
*Note:* Keys are enclosed in quotation marks.

#### 3. Values
- **Description:** The value of a key can be a string, number, boolean, array, object, or null.
  - Objects can be **flat** or **nested**.
  - The complexity depends on how the data is structured.
  - Understanding this format is important for parsing and transformation.
- **Value Types Illustrated:**
  - `"John Doe"` → `STRING`
  - `35` → `NUMERIC`
  - `address: { "city": "Anytown", "state": "CA" }` → `OBJECT`
  - `children: [ ... ]` → `ARRAY of OBJECTS`

---

## B. Working with JSON-Formatted Columns
When working with JSON data, it is common that after ingestion one or more columns in your table might contain JSON-formatted strings as values.

### B1. JSON-Formatted STRING Column
The question here is, how do you work with columns that store JSON formatted strings?

This is a common scenario when JSON isn't fully parsed during ingestion, or when JSON data is embedded within another field, like a log message or a nested structure.

```
json_column
'{"name": "John Doe", "age": 35, "address": {"city": "Anytown", "state": "CA"}, "children": [{"name": "Owen", "age": 10}, {"name": "Eva", "age": 8}]}'
'{"name": "Kristi Doe", "age": 40, "address": {"city": "Anytown", "state": "CA"}, "children": [{"name": "Steve", "age": 10}]}'
...
```

Columns in tables can hold JSON formatted strings as values.

### B2. JSON-Formatted String Column Methods
We'll explore techniques to parse, extract, and manipulate those JSON strings using SQL or DataFrame operations, so you can flatten and or access the nested fields just like regular columns.

#### Approach 1: STRING
One technique for working with a JSON-formatted string column is to access values directly from the STRING data type column.
- JSON can be stored as a simple `STRING`.
- Can hold any JSON content without constraints — it is just raw text.
- Less performant compared to typed approaches.

**Query Syntax (Colon Notation):**
```sql
SELECT json_column:name
-- Output: John Doe

SELECT json_column:address:city
-- Output: Anytown
```

To access subfields within JSON-formatted string columns, use the colon (`:`) syntax.
For example, if your column is named `json_column`, and you want to access the subfield `"name"`, specify: `json_column:name`.

#### Approach 2: STRUCT
Another method to work with a JSON-formatted string column is to convert the column to a `STRUCT` data type.
- You can parse JSON data into a `STRUCT` type with a defined schema.
- `STRUCT` enforces the JSON schema, ensuring data types and structure are consistent.
- Is more efficient for querying than a JSON-formatted `STRING`.

| JSON String Types | Databricks SQL Data Type |
| --- | --- |
| String | `STRING` |
| Number | `INT` / `FLOAT` / `DOUBLE` |
| Boolean | `BOOLEAN` |
| Object | `STRUCT <...>` |
| Array | `ARRAY <...>` |

#### Approach 3: VARIANT
The `VARIANT` data type is the newest approach for working with JSON data in Databricks.
- Can store any type of data, including JSON — ideal for semi-structured data.
- Highly flexible — no schema required upfront; adapts to different data shapes without rigid schemas.
- Offers improved performance over existing `STRING` and `STRUCT` methods.
- *Public Preview as of 2025 Q2.*

---

## C. Converting JSON Formatted Strings as STRUCTS

### Mapping Steps:
1. **Define the schema of the JSON formatted string:** Tells Databricks how to interpret each part of the JSON string and convert it into the appropriate data types within a `STRUCT`.
2. **Specify the STRUCT data type to hold the JSON formatted string:** The `STRUCT<>` data type acts as a container for all the fields defined in the JSON, preserving their data types and hierarchy within a single column.
3. **Specify the STRING and INT data types for the name and age keys:**
   - The `name` key contains a string value (`STRING`).
   - The `age` key contains an integer value (`INT`).
4. **The address key holds a STRUCT data type with keys city and state:**
   - Nested object represented as `STRUCT<city: STRING, state: STRING>`.
5. **The children key holds an ARRAY of STRUCTS:**
   - Array of objects represented as `ARRAY<STRUCT<name: STRING, age: INT>>`.

### Full Resulting STRUCT Schema:
```sql
STRUCT<
  name: STRING,
  age: INT,
  address: STRUCT<
    city: STRING,
    state: STRING
  >,
  children: ARRAY<
    STRUCT<
      name: STRING,
      age: INT
    >
  >
>
```

---

## D. Structure of the JSON String
After reviewing how to map a JSON-formatted `STRING` to a `STRUCT` column, let's learn how to easily determine the structure of the JSON string. This can be done in two steps:
1. Get the schema of the JSON-formatted string using `schema_of_json`.
2. Use the `from_json` function to apply the schema and parse the column.

### D1. Step 1: Deriving the Schema with `schema_of_json`
Instead of manually defining the schema, you can use the built-in `schema_of_json` function to automatically derive the schema from an example JSON string.

```sql
SELECT schema_of_json('{"name": "John Doe", "age": 35, "address": {"city": "Anytown", "state": "CA"}, "children": [{"name": "Owen", "age": 10}, {"name": "Eva", "age": 8}]}')
```

The function returns the structure of the JSON formatted string:
```sql
STRUCT<
  name: STRING,
  age: INT,
  address: STRUCT<
    city: STRING,
    state: STRING
  >,
  children: ARRAY<
    STRUCT<
      name: STRING,
      age: INT
    >
  >
>
```

### D2. Step 2: Parsing JSON with `from_json`
Once you have the structure of the JSON-formatted string, you can use the Spark `from_json` function. This function takes the JSON string and the specified schema obtained in the previous step, and returns a `STRUCT` column.

```sql
SELECT from_json(json_col, 'STRUCT<name: STRING, age: INT, address: STRUCT<city: STRING, state: STRING>, children: ARRAY<STRUCT<name: STRING, age: INT>>>') AS struct_column 
FROM table;
```

Using `from_json` creates a new column with the `STRUCT` data type, containing the parsed JSON data according to the defined schema.

---

## E. Conclusion
In this lecture, you learned how to work with semi-structured JSON data in Databricks:
- **JSON structure:** Objects enclosed in curly brackets contain key-value pairs. Values can be strings, numbers, booleans, arrays, or nested objects.
- **Three approaches for working with JSON-formatted columns:**
  - **STRING:** Simple but less performant. JSON stored as raw text. Access subfields with colon syntax (`:`).
  - **STRUCT:** Parse JSON with a defined schema. Enforces structure and is more efficient for querying.
  - **VARIANT:** The newest approach (public preview). Highly flexible with improved performance.
- **JSON to STRUCT conversion** requires mapping JSON types to Databricks SQL types (`STRING`, `INT`, `BOOLEAN`, `STRUCT<>`, `ARRAY<>`).
- Use `schema_of_json` to automatically derive the schema from a sample JSON string.
- Use `from_json` to parse a JSON string column into a `STRUCT` column using the derived schema.

### Next Steps
In the next section, you will work hands-on with JSON data, parsing and transforming JSON-formatted columns using these techniques.
