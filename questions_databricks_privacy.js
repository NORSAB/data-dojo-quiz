/**
 * 🥋 THE DATA DOJO — Bank: databricks-privacy
 * Total: 6 questions (3 EN + 3 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-privacy-1",
    "courseId": "databricks-privacy",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When a customer exercises their GDPR 'Right to be Forgotten' (Right to Erasure), which sequence of operations ensures compliant physical deletion in Delta Lake?",
    "options": [
      {
        "id": "a",
        "text": "Run a `DELETE FROM table WHERE customer_id = ?`, followed by a `VACUUM table RETAIN 0 HOURS` with retention check disabled or after retention window expires"
      },
      {
        "id": "b",
        "text": "Drop the database and recreate it from a CSV backup"
      },
      {
        "id": "c",
        "text": "Apply a column mask only, leaving raw storage unchanged"
      },
      {
        "id": "d",
        "text": "Simply rename the customer column"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "A logical `DELETE` creates new Parquet files without the record; physical deletion of historical Parquet snapshots requires `VACUUM` to purge files older than the retention threshold.",
    "domain": "GDPR & Right to be Forgotten"
  },
  {
    "id": "databricks-privacy-1-es",
    "courseId": "databricks-privacy",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Cuando un cliente ejerce su Derecho al Olvido según el RGPD, ¿qué secuencia de operaciones garantiza la eliminación física definitiva en Delta Lake?",
    "options": [
      {
        "id": "a",
        "text": "Ejecutar `DELETE FROM tabla WHERE customer_id = ?` y posteriormente `VACUUM tabla RETAIN 0 HOURS` (o esperar la expiración de la ventana de retención)"
      },
      {
        "id": "b",
        "text": "Eliminar la base de datos completa y reconstruirla desde CSV"
      },
      {
        "id": "c",
        "text": "Aplicar únicamente una máscara de columna sin modificar el almacenamiento"
      },
      {
        "id": "d",
        "text": "Renombrar la columna del identificador"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Un `DELETE` lógico marca el registro en el log transaccional; para la supresión física de archivos históricos de Parquet es indispensable ejecutar `VACUUM` cumplida la retención.",
    "domain": "RGPD y Derecho al Olvido"
  },
  {
    "id": "databricks-privacy-2",
    "courseId": "databricks-privacy",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What capability do Databricks Clean Rooms provide for multi-party data collaboration across different clouds and workspaces?",
    "options": [
      {
        "id": "a",
        "text": "They allow two or more organizations to securely join and analyze datasets without sharing raw PII or copying data out of their respective accounts"
      },
      {
        "id": "b",
        "text": "They format all data into uncompressed SQLite databases"
      },
      {
        "id": "c",
        "text": "They physically merge two cloud tenant subscriptions into one"
      },
      {
        "id": "d",
        "text": "They disable encryption to maximize transfer speeds"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Databricks Clean Rooms provide privacy-preserving environments where organizations run collaborative queries under strict governance without exposing raw underlying data.",
    "domain": "Clean Rooms"
  },
  {
    "id": "databricks-privacy-2-es",
    "courseId": "databricks-privacy",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué capacidad ofrecen las Salas Limpias (Clean Rooms) de Databricks para la colaboración de datos entre diferentes organizaciones y nubes?",
    "options": [
      {
        "id": "a",
        "text": "Permiten que dos o más organizaciones crucen y analicen datos confidenciales de forma segura sin exponer datos personales directos ni extraer copias"
      },
      {
        "id": "b",
        "text": "Formatean todos los datos en bases SQLite no comprimidas"
      },
      {
        "id": "c",
        "text": "Fusionan físicamente las suscripciones de ambas organizaciones"
      },
      {
        "id": "d",
        "text": "Deshabilitan el cifrado para acelerar transferencias"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las Clean Rooms permiten consultas y análisis conjuntos bajo estricta gobernanza e inspección mutua, sin transferir ni revelar registros brutos o datos sensibles.",
    "domain": "Salas Limpias (Clean Rooms)"
  },
  {
    "id": "databricks-privacy-3",
    "courseId": "databricks-privacy",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the recommended cryptographic approach in Delta pipelines for replacing natural person identifiers with irreversible identifiers while preserving joinability?",
    "options": [
      {
        "id": "a",
        "text": "Salted cryptographic hashing (e.g. `sha2(concat(pii_col, secret_salt), 256)`) with the salt stored securely in Databricks Secrets"
      },
      {
        "id": "b",
        "text": "ROT13 substitution cipher in a plaintext notebook"
      },
      {
        "id": "c",
        "text": "Replacing all characters with random asterisks"
      },
      {
        "id": "d",
        "text": "Writing the PII to an unencrypted public text file"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Salted SHA-256 hashing allows deterministic joins between pseudonymized tables while preventing rainbow table dictionary attacks on sensitive IDs.",
    "domain": "Pseudonymization & Tokenization"
  },
  {
    "id": "databricks-privacy-3-es",
    "courseId": "databricks-privacy",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la técnica criptográfica recomendada en pipelines Delta para sustituir identificadores personales por códigos irreversibles preservando la capacidad de joins?",
    "options": [
      {
        "id": "a",
        "text": "Hashing criptográfico con sal secreta (ej. `sha2(concat(col_pii, sal_secreta), 256)`) administrada en Databricks Secrets"
      },
      {
        "id": "b",
        "text": "Cifrado de sustitución ROT13 en un notebook de texto plano"
      },
      {
        "id": "c",
        "text": "Reemplazar todos los caracteres con asteriscos aleatorios"
      },
      {
        "id": "d",
        "text": "Almacenar los datos confidenciales en archivos de texto públicos"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El hashing SHA-256 con salt permite cruzar tablas manteniendo consistencia relacional e impide ataques de diccionario o tablas arcoíris contra los datos sensibles.",
    "domain": "Seudonimización y Tokenización"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
