/**
 * 🥋 THE DATA DOJO — Bank: databricks-workflows
 * Total: 4 questions (2 EN + 2 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-workflows-1",
    "courseId": "databricks-workflows",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which task type in Lakeflow Jobs enables dynamic branching logic based on boolean expressions or string status from preceding tasks?",
    "options": [
      {
        "id": "a",
        "text": "If/Else condition task"
      },
      {
        "id": "b",
        "text": "Run Job task"
      },
      {
        "id": "c",
        "text": "Static Python script"
      },
      {
        "id": "d",
        "text": "Manual approval webhook"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Lakeflow Jobs provides the If/Else task operator to evaluate conditions dynamically and route execution down the true or false dependency branch.",
    "domain": "Lakeflow Jobs Control Flow"
  },
  {
    "id": "databricks-workflows-1-es",
    "courseId": "databricks-workflows",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de tarea en Lakeflow Jobs permite implementar lógica de bifurcación condicional basada en expresiones booleanas de tareas previas?",
    "options": [
      {
        "id": "a",
        "text": "Tarea condicional If/Else"
      },
      {
        "id": "b",
        "text": "Tarea Run Job"
      },
      {
        "id": "c",
        "text": "Script estático de Python"
      },
      {
        "id": "d",
        "text": "Webhook de aprobación manual"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La tarea If/Else evalúa variables y estados en tiempo de ejecución para bifurcar la ejecución de tareas dependientes según el resultado booleano.",
    "domain": "Control de Flujo en Lakeflow Jobs"
  },
  {
    "id": "databricks-workflows-2",
    "courseId": "databricks-workflows",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How can a Lakeflow Job be configured to trigger automatically as soon as new data arrives in cloud storage, without scheduled polling?",
    "options": [
      {
        "id": "a",
        "text": "Using File arrival triggers configured on an external volume or storage location"
      },
      {
        "id": "b",
        "text": "By running an infinite while-loop inside a notebook driver node"
      },
      {
        "id": "c",
        "text": "By setting a cron schedule to execute every second"
      },
      {
        "id": "d",
        "text": "Databricks Jobs cannot trigger on file arrival"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "File arrival triggers allow Lakeflow Jobs to listen for events when files are added to cloud storage locations/volumes and run immediately.",
    "domain": "Triggers & Dependencies"
  },
  {
    "id": "databricks-workflows-2-es",
    "courseId": "databricks-workflows",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se puede configurar un Lakeflow Job para que se ejecute automáticamente apenas lleguen nuevos archivos a la nube, sin sondeo periódico?",
    "options": [
      {
        "id": "a",
        "text": "Configurando un disparador de llegada de archivos (File arrival trigger) sobre una ubicación o volumen"
      },
      {
        "id": "b",
        "text": "Ejecutando un ciclo while infinito en el nodo driver del notebook"
      },
      {
        "id": "c",
        "text": "Estableciendo una expresión cron para ejecutarse cada segundo"
      },
      {
        "id": "d",
        "text": "Databricks Jobs no soporta detección de llegada de archivos"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los disparadores por llegada de archivos (File arrival triggers) inician el flujo automáticamente al detectar nuevos datos en almacenamiento.",
    "domain": "Disparadores y Dependencias"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
