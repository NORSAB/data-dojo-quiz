/**
 * Databricks Fundamentals: version en ingles de las 50 preguntas que solo existian en espanol.
 * Claude (Opus 5.5) | 2026-10-08 | Generado con /home/claude/tr/build_q.js a partir de traducciones revisadas.
 * Cada pregunta lleva twinOf con el id original, para que el selector EN/ES encuentre su pareja.
 */
(function(){
  var twins = [
  {
    "id": "db-fund-11-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "According to Databricks, what are three consistent priorities that emerge when talking with companies about data and AI?",
    "options": [
      {
        "id": "a",
        "text": "Cost reduction (lower TCO)"
      },
      {
        "id": "b",
        "text": "More proprietary storage to improve performance"
      },
      {
        "id": "c",
        "text": "Data quality and security"
      },
      {
        "id": "d",
        "text": "AI-driven transformation"
      },
      {
        "id": "e",
        "text": "Replace all legacy systems in 30 days"
      }
    ],
    "correctIds": [
      "a",
      "c",
      "d"
    ],
    "explanation": "Key priorities: reduce costs, ensure quality/security, and power transformation with AI.",
    "domain": "History and Why",
    "twinOf": "db-fund-11"
  },
  {
    "id": "db-fund-12-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two factors are mentioned as contributors to the fragmentation of data and AI systems?",
    "options": [
      {
        "id": "a",
        "text": "Teams working in silos"
      },
      {
        "id": "b",
        "text": "Having a single central data warehouse from the start"
      },
      {
        "id": "c",
        "text": "Multiple data warehouses due to acquisitions"
      },
      {
        "id": "d",
        "text": "Eliminating platforms with the rise of GenAI"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "Fragmentation arises from isolated teams (silos) and acquisitions that bring in multiple warehouses.",
    "domain": "History and Why",
    "twinOf": "db-fund-12"
  },
  {
    "id": "db-fund-13-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What main consequence results from accumulating a “patchwork” of data environments over time?",
    "options": [
      {
        "id": "a",
        "text": "Fewer silos and less complexity"
      },
      {
        "id": "b",
        "text": "More silos, more complexity, and inefficiencies"
      },
      {
        "id": "c",
        "text": "Elimination of the need for governance"
      },
      {
        "id": "d",
        "text": "Automatic guarantee of a single source of truth"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "A patched-together system increases complexity, creates more silos, and generates inefficiencies.",
    "domain": "History and Why",
    "twinOf": "db-fund-13"
  },
  {
    "id": "db-fund-14-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "If an organization has duplicate platforms that do the same or similar things, what effect is mentioned?",
    "options": [
      {
        "id": "a",
        "text": "The total cost is reduced"
      },
      {
        "id": "b",
        "text": "Cost grows and there is less budget to invest in other areas"
      },
      {
        "id": "c",
        "text": "Data quality improves automatically"
      },
      {
        "id": "d",
        "text": "The need for integration is eliminated"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Duplication increases costs, reducing the budget available for innovation.",
    "domain": "History and Why",
    "twinOf": "db-fund-14"
  },
  {
    "id": "db-fund-15-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why is it difficult to ensure quality/security/consumption if there is no single source of truth?",
    "options": [
      {
        "id": "a",
        "text": "Because the data is in multiple locations and moves around; it is confusing what to use and what happens when it is updated"
      },
      {
        "id": "b",
        "text": "Because the newest data is always used without errors"
      },
      {
        "id": "c",
        "text": "Because governance does not apply to structured data"
      },
      {
        "id": "d",
        "text": "Because cloud storage does not allow control"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Without a single source, data sprawl creates confusion about which version is correct and secure.",
    "domain": "History and Why",
    "twinOf": "db-fund-15"
  },
  {
    "id": "db-fund-16-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "According to Databricks, in what year was Databricks founded?",
    "options": [
      {
        "id": "a",
        "text": "2010"
      },
      {
        "id": "b",
        "text": "2013"
      },
      {
        "id": "c",
        "text": "2020"
      },
      {
        "id": "d",
        "text": "2023"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks was founded in 2013.",
    "domain": "History and Why",
    "twinOf": "db-fund-16"
  },
  {
    "id": "db-fund-17-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why is it said that the lakehouse avoids vendor lock-in?",
    "options": [
      {
        "id": "a",
        "text": "Because it stores data in closed vendor formats"
      },
      {
        "id": "b",
        "text": "Because it is an open environment built in the cloud"
      },
      {
        "id": "c",
        "text": "Because it depends on proprietary hardware"
      },
      {
        "id": "d",
        "text": "Because it only works with structured data"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "By using open standards and cloud-agnostic storage, exclusive dependence on a single vendor is avoided.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-17"
  },
  {
    "id": "db-fund-18-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two benefits are mentioned when unifying the warehouse + lake into a single system (lakehouse)?",
    "options": [
      {
        "id": "a",
        "text": "Data teams move faster with a unified architecture"
      },
      {
        "id": "b",
        "text": "Users must access multiple systems to use data"
      },
      {
        "id": "c",
        "text": "More complete and up-to-date data for data science, ML, and business analyst reports"
      },
      {
        "id": "d",
        "text": "Duplication increases to improve availability"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "Unification speeds up teams and provides fresh, complete data for all use cases.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-18"
  },
  {
    "id": "db-fund-19-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "According to Databricks, from which three sources/signals does Data Intelligence learn?",
    "options": [
      {
        "id": "a",
        "text": "Data catalog"
      },
      {
        "id": "b",
        "text": "SQL queries"
      },
      {
        "id": "c",
        "text": "BI dashboards"
      },
      {
        "id": "d",
        "text": "Only public social networks"
      },
      {
        "id": "e",
        "text": "Only public Internet documents"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "It learns from metadata (catalog), usage (queries), and consumption (dashboards) within the organization.",
    "domain": "Data Intelligence",
    "twinOf": "db-fund-19"
  },
  {
    "id": "db-fund-20-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why can the platform answer more accurately than a “naive” LLM trained only on the public Internet?",
    "options": [
      {
        "id": "a",
        "text": "Because it completely ignores the business context"
      },
      {
        "id": "b",
        "text": "Because it learns from the real usage and semantics of the organization's data environment"
      },
      {
        "id": "c",
        "text": "Because it converts everything to a proprietary format"
      },
      {
        "id": "d",
        "text": "Because it avoids governance and auditing"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "By understanding the business-specific semantics, it provides contextualized and accurate answers.",
    "domain": "Data Intelligence",
    "twinOf": "db-fund-20"
  },
  {
    "id": "db-fund-21-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "ordering",
    "prompt": "Order the “data journey” in Databricks according to Databricks.",
    "options": [
      {
        "id": "t",
        "text": "Transformation"
      },
      {
        "id": "s",
        "text": "Data sources"
      },
      {
        "id": "i",
        "text": "Ingestion"
      },
      {
        "id": "c",
        "text": "Consumption/use (analysis, BI, AI)"
      }
    ],
    "correctIds": [
      "s",
      "i",
      "t",
      "c"
    ],
    "explanation": "Logical flow: Sources -> Ingestion -> Transformation -> Consumption.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-21"
  },
  {
    "id": "db-fund-22-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "true_false",
    "prompt": "“Deduplication and refinement are examples of transformation to improve data quality and integrity for business applications.”",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "Deduplication and refinement are classic transformation steps.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-22"
  },
  {
    "id": "db-fund-23-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why does serverless increase productivity according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Because users wait for compute to start"
      },
      {
        "id": "b",
        "text": "Because it offers instant availability and avoids waiting for resources"
      },
      {
        "id": "c",
        "text": "Because it requires manually configuring servers"
      },
      {
        "id": "d",
        "text": "Because it is only for slow batch tasks"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Serverless eliminates startup wait times, enabling immediate availability.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-23"
  },
  {
    "id": "db-fund-24-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two reasons explain why serverless reduces cost?",
    "options": [
      {
        "id": "a",
        "text": "You pay for what you consume, avoiding paying for idle time"
      },
      {
        "id": "b",
        "text": "It forces you to oversize resources “to be safe”"
      },
      {
        "id": "c",
        "text": "It scales elastically according to the actual load"
      },
      {
        "id": "d",
        "text": "It requires additional proprietary hardware"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "Paying only for consumption and automatic scaling avoid oversizing and idle costs.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-24"
  },
  {
    "id": "db-fund-25-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which three capabilities are mentioned as key features of Unity Catalog?",
    "options": [
      {
        "id": "a",
        "text": "Built-in auditing"
      },
      {
        "id": "b",
        "text": "Data lineage"
      },
      {
        "id": "c",
        "text": "Data discovery with tags/documentation and search"
      },
      {
        "id": "d",
        "text": "Replaces cloud storage"
      },
      {
        "id": "e",
        "text": "Eliminates the need for permissions"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Unity Catalog includes auditing, lineage, and discovery tools.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-25"
  },
  {
    "id": "db-fund-26-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "According to Databricks, which three types of products can be exchanged in Databricks Marketplace?",
    "options": [
      {
        "id": "a",
        "text": "Datasets"
      },
      {
        "id": "b",
        "text": "Notebooks"
      },
      {
        "id": "c",
        "text": "Dashboards"
      },
      {
        "id": "d",
        "text": "Only compute hardware"
      },
      {
        "id": "e",
        "text": "Only proprietary licenses"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "The Marketplace allows exchanging data, notebooks, dashboards, and models.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-26"
  },
  {
    "id": "db-fund-27-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is Databricks' mission according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Convert all data to proprietary formats"
      },
      {
        "id": "b",
        "text": "Democratize data and AI"
      },
      {
        "id": "c",
        "text": "Replace all data warehouses with on-premises hardware"
      },
      {
        "id": "d",
        "text": "Eliminate the need for governance"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The mission is to democratize data and AI.",
    "domain": "History and Why",
    "twinOf": "db-fund-27"
  },
  {
    "id": "db-fund-28-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "According to Databricks, the founding team includes the original creators of which three technologies?",
    "options": [
      {
        "id": "a",
        "text": "Apache Spark"
      },
      {
        "id": "b",
        "text": "Delta Lake"
      },
      {
        "id": "c",
        "text": "MLflow"
      },
      {
        "id": "d",
        "text": "Databricks Marketplace"
      },
      {
        "id": "e",
        "text": "SharePoint"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "The founders created Apache Spark, Delta Lake, and MLflow.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-28"
  },
  {
    "id": "db-fund-29-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What characteristic is highlighted about lakehouses regarding where they are built?",
    "options": [
      {
        "id": "a",
        "text": "Always on physical on-premises servers"
      },
      {
        "id": "b",
        "text": "In open environments built in the cloud"
      },
      {
        "id": "c",
        "text": "Only on specialized vendor hardware"
      },
      {
        "id": "d",
        "text": "Exclusively in traditional data warehouses"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "They are open environments built on cloud infrastructure.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-29"
  },
  {
    "id": "db-fund-30-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What problem is mentioned when teams copy data between the data lake and the data warehouse?",
    "options": [
      {
        "id": "a",
        "text": "It speeds up work and eliminates risks"
      },
      {
        "id": "b",
        "text": "It is efficient and reduces duplication"
      },
      {
        "id": "c",
        "text": "It is slow/inefficient and causes duplication and fragmented governance"
      },
      {
        "id": "d",
        "text": "It automatically avoids compliance issues"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Copying data creates inefficiencies, duplication, and fragments governance.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-30"
  },
  {
    "id": "db-fund-31-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "true_false",
    "prompt": "“In a data lake, data can coexist at multiple stages of the refinement process (raw and intermediate).”",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "Data lakes store data in various processing states.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-31"
  },
  {
    "id": "db-fund-32-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What type of data is mentioned as difficult for a traditional data warehouse to support?",
    "options": [
      {
        "id": "a",
        "text": "Tables with rows and columns"
      },
      {
        "id": "b",
        "text": "Excel-style structured data"
      },
      {
        "id": "c",
        "text": "Images, audio, videos, and free text"
      },
      {
        "id": "d",
        "text": "Data that is already clean and transformed"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Traditional warehouses do not handle unstructured data well.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-32"
  },
  {
    "id": "db-fund-33-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What can happen if a data lake is designed “too loosely” according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "It becomes an optimized data warehouse"
      },
      {
        "id": "b",
        "text": "It becomes a “data swamp” with governance/security problems"
      },
      {
        "id": "c",
        "text": "It automatically becomes a single source of truth"
      },
      {
        "id": "d",
        "text": "It becomes cheaper because it is proprietary"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "A lack of structure can turn a lake into an ungovernable 'swamp'.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-33"
  },
  {
    "id": "db-fund-34-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why is it said that the lakehouse is cost-efficient and scalable?",
    "options": [
      {
        "id": "a",
        "text": "Because it uses high-cost proprietary formats"
      },
      {
        "id": "b",
        "text": "Because it relies on cheap cloud storage"
      },
      {
        "id": "c",
        "text": "Because it avoids storing semi-structured/unstructured data"
      },
      {
        "id": "d",
        "text": "Because it depends on specialized hardware"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "It uses inexpensive cloud storage as its foundation.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-34"
  },
  {
    "id": "db-fund-35-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why can teams move faster with a lakehouse?",
    "options": [
      {
        "id": "a",
        "text": "Because they have to use multiple systems in parallel"
      },
      {
        "id": "b",
        "text": "Because they have a unified architecture for data and AI in one place"
      },
      {
        "id": "c",
        "text": "Because they must duplicate data for each team"
      },
      {
        "id": "d",
        "text": "Because no transformation is needed"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "The unified architecture eliminates friction between data silos.",
    "domain": "Lakehouse Architecture",
    "twinOf": "db-fund-35"
  },
  {
    "id": "db-fund-36-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two objectives are mentioned for Data Intelligence?",
    "options": [
      {
        "id": "a",
        "text": "Create custom AI applications"
      },
      {
        "id": "b",
        "text": "Democratize access to data across the company"
      },
      {
        "id": "c",
        "text": "Convert everything to a proprietary vendor format"
      },
      {
        "id": "d",
        "text": "Eliminate the use of catalogs and documentation"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "It aims to democratize data and enable AI applications.",
    "domain": "Data Intelligence",
    "twinOf": "db-fund-36"
  },
  {
    "id": "db-fund-37-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which four elements are listed as signals from which Data Intelligence learns?",
    "options": [
      {
        "id": "a",
        "text": "Data catalog"
      },
      {
        "id": "b",
        "text": "SQL queries"
      },
      {
        "id": "c",
        "text": "BI dashboards"
      },
      {
        "id": "d",
        "text": "Notebooks"
      },
      {
        "id": "e",
        "text": "Only social media comments"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c",
      "d"
    ],
    "explanation": "It uses all the internal context: catalog, queries, dashboards, and notebooks.",
    "domain": "Data Intelligence",
    "twinOf": "db-fund-37"
  },
  {
    "id": "db-fund-38-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What do you get by combining the lakehouse with data intelligence?",
    "options": [
      {
        "id": "a",
        "text": "A traditional data lake"
      },
      {
        "id": "b",
        "text": "A proprietary data warehouse"
      },
      {
        "id": "c",
        "text": "The Databricks Data Intelligence Platform"
      },
      {
        "id": "d",
        "text": "A system without governance"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "That is the definition of the Databricks Data Intelligence Platform.",
    "domain": "Data Intelligence",
    "twinOf": "db-fund-38"
  },
  {
    "id": "db-fund-39-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "According to Databricks, what best describes data ingestion?",
    "options": [
      {
        "id": "a",
        "text": "Only storing dashboards"
      },
      {
        "id": "b",
        "text": "Importing, processing, and storing data from diverse sources for analytics/decisions"
      },
      {
        "id": "c",
        "text": "Only transforming structured data"
      },
      {
        "id": "d",
        "text": "Only running generative models"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Ingestion is the process of bringing in and preparing data from external sources.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-39"
  },
  {
    "id": "db-fund-40-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the purpose of data transformation?",
    "options": [
      {
        "id": "a",
        "text": "Convert extracted raw data into usable datasets"
      },
      {
        "id": "b",
        "text": "Avoid any change to raw data"
      },
      {
        "id": "c",
        "text": "Create proprietary formats"
      },
      {
        "id": "d",
        "text": "Eliminate the need for BI"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Transforming raw data into business-ready formats.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-40"
  },
  {
    "id": "db-fund-41-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What does serverless compute eliminate according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "The need to scale resources"
      },
      {
        "id": "b",
        "text": "Complexities associated with managing infrastructure"
      },
      {
        "id": "c",
        "text": "The use of unstructured data"
      },
      {
        "id": "d",
        "text": "Access auditing"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "It removes the burden of managing the underlying infrastructure.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-41"
  },
  {
    "id": "db-fund-42-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In serverless compute, who handles infrastructure and scaling?",
    "options": [
      {
        "id": "a",
        "text": "The end user, manually"
      },
      {
        "id": "b",
        "text": "Databricks, configuring servers and scaling automatically"
      },
      {
        "id": "c",
        "text": "Only the cloud provider, without integration"
      },
      {
        "id": "d",
        "text": "The BI team with local scripts"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks manages everything automatically.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-42"
  },
  {
    "id": "db-fund-43-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "true_false",
    "prompt": "“Serverless aims to deliver optimal performance when needed and avoid waste when idle.”",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "That is the key economic benefit of Serverless.",
    "domain": "Architecture and Compute",
    "twinOf": "db-fund-43"
  },
  {
    "id": "db-fund-44-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How does the transcript define “data governance”?",
    "options": [
      {
        "id": "a",
        "text": "Only control of dashboards"
      },
      {
        "id": "b",
        "text": "Principles, practices, and tools for managing data assets throughout their lifecycle"
      },
      {
        "id": "c",
        "text": "Only storage encryption"
      },
      {
        "id": "d",
        "text": "Only cost control"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "It is the comprehensive management of the data lifecycle.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-44"
  },
  {
    "id": "db-fund-45-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "According to Databricks, is data governance limited to one workload?",
    "options": [
      {
        "id": "a",
        "text": "Yes, only to BI"
      },
      {
        "id": "b",
        "text": "Yes, only to ML"
      },
      {
        "id": "c",
        "text": "No, it spans the entire platform and its management aligned with strategy"
      },
      {
        "id": "d",
        "text": "Only to data lakes"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "It covers the entire platform and all types of workloads.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-45"
  },
  {
    "id": "db-fund-46-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which three are listed as elements of a governance strategy?",
    "options": [
      {
        "id": "a",
        "text": "Data cataloging"
      },
      {
        "id": "b",
        "text": "Data lineage"
      },
      {
        "id": "c",
        "text": "Data security"
      },
      {
        "id": "d",
        "text": "Marketing automation"
      },
      {
        "id": "e",
        "text": "GPU tuning"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Cataloging, lineage, and security are pillars.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-46"
  },
  {
    "id": "db-fund-47-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which three challenges are mentioned when implementing governance in existing ecosystems?",
    "options": [
      {
        "id": "a",
        "text": "Fragmented views of the data estate"
      },
      {
        "id": "b",
        "text": "Multiple tools for access management"
      },
      {
        "id": "c",
        "text": "Incomplete monitoring/visibility"
      },
      {
        "id": "d",
        "text": "Having a single integrated system from the start"
      },
      {
        "id": "e",
        "text": "Having no need for compliance"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Fragmentation, multiple tools, and lack of visibility are common challenges.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-47"
  },
  {
    "id": "db-fund-48-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is stated as imperative before “streaming data to different services without control”?",
    "options": [
      {
        "id": "a",
        "text": "Copy the data several times for greater security"
      },
      {
        "id": "b",
        "text": "Establish user controls and complete the groundwork for reliability"
      },
      {
        "id": "c",
        "text": "Eliminate auditing because it is costly"
      },
      {
        "id": "d",
        "text": "Avoid data classification"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "User controls must be established first to ensure trust.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-48"
  },
  {
    "id": "db-fund-49-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What are three top areas of concern mentioned?",
    "options": [
      {
        "id": "a",
        "text": "Global AI regulation, data privacy/protection (due to lawsuits), AI-powered cybercrime"
      },
      {
        "id": "b",
        "text": "Only cheap storage, only dashboards, only notebooks"
      },
      {
        "id": "c",
        "text": "Only query performance"
      },
      {
        "id": "d",
        "text": "Only licensing"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Concerns: AI regulation, Privacy/Lawsuits, and Cybercrime.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-49"
  },
  {
    "id": "db-fund-50-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main purpose of Unity Catalog according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "To be a second data lake"
      },
      {
        "id": "b",
        "text": "Unify governance, sharing, and collaboration under one tool"
      },
      {
        "id": "c",
        "text": "Replace Databricks SQL"
      },
      {
        "id": "d",
        "text": "Eliminate permissions"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Unify governance, sharing, and collaboration.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-50"
  },
  {
    "id": "db-fund-51-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "At which levels does the transcript mention that permissions are granted with familiar syntax?",
    "options": [
      {
        "id": "a",
        "text": "Catalogs"
      },
      {
        "id": "b",
        "text": "Schemas (databases)"
      },
      {
        "id": "c",
        "text": "Tables"
      },
      {
        "id": "d",
        "text": "Views"
      },
      {
        "id": "e",
        "text": "Only dashboards"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c",
      "d"
    ],
    "explanation": "Permissions are managed at the Catalog, Schema, Table, and View levels.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-51"
  },
  {
    "id": "db-fund-52-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What does Unity Catalog capture automatically, according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Only infrastructure logs"
      },
      {
        "id": "b",
        "text": "User-level audit logs and lineage about asset creation/usage"
      },
      {
        "id": "c",
        "text": "Only marketing costs"
      },
      {
        "id": "d",
        "text": "Only notebook templates"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "It captures user-level auditing and data lineage.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-52"
  },
  {
    "id": "db-fund-53-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What type of operational data does Unity Catalog allow you to query through system tables?",
    "options": [
      {
        "id": "a",
        "text": "Only images and videos"
      },
      {
        "id": "b",
        "text": "Audit logs, billable usage, and lineage"
      },
      {
        "id": "c",
        "text": "Only trained ML models"
      },
      {
        "id": "d",
        "text": "Only browser settings"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "System tables provide access to audit logs, billable usage, and lineage.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-53"
  },
  {
    "id": "db-fund-54-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "According to Databricks, Delta Sharing mainly offers:",
    "options": [
      {
        "id": "a",
        "text": "Mandatory data replication between platforms"
      },
      {
        "id": "b",
        "text": "Centralized administration and governance of sharing with monitoring"
      },
      {
        "id": "c",
        "text": "Only a private notebook repository"
      },
      {
        "id": "d",
        "text": "Elimination of tracking and auditing"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "It offers centralized, governed, and monitored administration for sharing data.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-54"
  },
  {
    "id": "db-fund-55-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Why does Delta Sharing reduce TCO according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Because it forces data to be duplicated in each system"
      },
      {
        "id": "b",
        "text": "Because it eliminates the need to duplicate data in order to share it"
      },
      {
        "id": "c",
        "text": "Because it makes the format proprietary"
      },
      {
        "id": "d",
        "text": "Because it prohibits collaboration"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "By not needing to duplicate data to share it, storage and management costs are reduced.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-55"
  },
  {
    "id": "db-fund-56-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "true_false",
    "prompt": "“The Marketplace requires the recipient to have a Databricks workspace to receive products.”",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "false"
    ],
    "explanation": "It does not require a Databricks workspace; it is based on Delta Sharing (an open protocol).",
    "domain": "Governance and Products",
    "twinOf": "db-fund-56"
  },
  {
    "id": "db-fund-57-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "What does the transcript mention as access points/tasks from the workspace homepage?",
    "options": [
      {
        "id": "a",
        "text": "Import data"
      },
      {
        "id": "b",
        "text": "Create notebooks"
      },
      {
        "id": "c",
        "text": "Create queries"
      },
      {
        "id": "d",
        "text": "Manufacture hardware"
      },
      {
        "id": "e",
        "text": "Uninstall the cloud provider"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Common tasks: import data, create notebooks, queries, etc.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-57"
  },
  {
    "id": "db-fund-58-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is Intelligent Search in the workspace used for according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "Search only for information on the public Internet"
      },
      {
        "id": "b",
        "text": "Locate data objects within the platform"
      },
      {
        "id": "c",
        "text": "Create firewall rules"
      },
      {
        "id": "d",
        "text": "Perform declarative ETL"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "It helps locate data objects (tables, models, etc.) across the entire platform.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-58"
  },
  {
    "id": "db-fund-59-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is Catalog Explorer according to Databricks?",
    "options": [
      {
        "id": "a",
        "text": "An external third-party system"
      },
      {
        "id": "b",
        "text": "The view where you see catalogs/schemas/tables/views/volumes and lineage; a “window into Unity Catalog”"
      },
      {
        "id": "c",
        "text": "A replacement for notebooks"
      },
      {
        "id": "d",
        "text": "A customer support service"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "It is the visual interface for exploring and managing Unity Catalog objects and their lineage.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-59"
  },
  {
    "id": "db-fund-60-en",
    "courseId": "databricks-fundamentals",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What characteristic distinguishes Lakeflow Connect in the transcript?",
    "options": [
      {
        "id": "a",
        "text": "No-code connectors to bring in data, with complete observability/governance within Databricks"
      },
      {
        "id": "b",
        "text": "It only works with structured data"
      },
      {
        "id": "c",
        "text": "It requires copying data by hand"
      },
      {
        "id": "d",
        "text": "It eliminates the need for security"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "They are no-code connectors for simple ingestion with built-in governance and observability.",
    "domain": "Governance and Products",
    "twinOf": "db-fund-60"
  }
];
  window.questionsData = (window.questionsData || []).concat(twins);
})();
