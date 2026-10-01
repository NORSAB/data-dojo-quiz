/**
 * 🥋 THE DATA DOJO — Bank: databricks-dabs
 * Total: 4 questions (2 EN + 2 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-dabs-1",
    "courseId": "databricks-dabs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "When deploying a bundle with `databricks bundle deploy -t prod --var='catalog=prod_gold'`, which source takes highest precedence for resolving variable values?",
    "options": [
      {
        "id": "a",
        "text": "Command-line flags (`--var`) take highest precedence over environment variables, target overrides, and defaults"
      },
      {
        "id": "b",
        "text": "The default value in `databricks.yml` always overrides command-line inputs"
      },
      {
        "id": "c",
        "text": "The cluster configuration file takes precedence"
      },
      {
        "id": "d",
        "text": "Git commit messages take precedence"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "In Databricks Asset Bundles (DABs), variable precedence orders command-line `--var` highest, followed by environment variables, target-specific overrides, and bundle defaults.",
    "domain": "Bundle Variables & Precedence"
  },
  {
    "id": "databricks-dabs-1-es",
    "courseId": "databricks-dabs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al desplegar un bundle con `databricks bundle deploy -t prod --var='catalog=prod_gold'`, ¿qué origen tiene la mayor prioridad para resolver el valor de la variable?",
    "options": [
      {
        "id": "a",
        "text": "Los argumentos de línea de comandos (`--var`) tienen la máxima precedencia sobre variables de entorno, targets y valores por defecto"
      },
      {
        "id": "b",
        "text": "El valor por defecto en `databricks.yml` siempre tiene prioridad sobre la línea de comandos"
      },
      {
        "id": "c",
        "text": "El archivo de configuración del cluster tiene precedencia"
      },
      {
        "id": "d",
        "text": "Los mensajes de commit de Git tienen precedencia"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En los Databricks Asset Bundles (DABs), el flag `--var` tiene la máxima jerarquía de resolución, superando a variables de entorno, bloques de target y defaults.",
    "domain": "Variables y Precedencia en Bundles"
  },
  {
    "id": "databricks-dabs-2",
    "courseId": "databricks-dabs",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What guardrails does Databricks Asset Bundles enforce when `mode: production` is configured on a target?",
    "options": [
      {
        "id": "a",
        "text": "It requires matching the designated Git branch, enforces deployment locks, requires service principal execution, and blocks arbitrary cluster overrides"
      },
      {
        "id": "b",
        "text": "It disables all job schedules and adds a `[dev]` prefix to all resource names"
      },
      {
        "id": "c",
        "text": "It destroys the target workspace after execution"
      },
      {
        "id": "d",
        "text": "It prevents developers from running unit tests"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Production mode (`mode: production`) locks the target branch, prevents unauthorized cluster config tampering, and deploys without user-specific prefixes.",
    "domain": "Deployment Modes"
  },
  {
    "id": "databricks-dabs-2-es",
    "courseId": "databricks-dabs",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué controles de seguridad impone Databricks Asset Bundles cuando se configura `mode: production` en un target?",
    "options": [
      {
        "id": "a",
        "text": "Verifica la coincidencia de rama Git, bloquea modificaciones arbitrarias de cluster, activa bloqueos de despliegue y recomienda Service Principals"
      },
      {
        "id": "b",
        "text": "Pausa todas las programaciones y antepone el prefijo `[dev]` a los nombres"
      },
      {
        "id": "c",
        "text": "Destruye el espacio de trabajo tras la ejecución"
      },
      {
        "id": "d",
        "text": "Impide a los ingenieros ejecutar pruebas unitarias"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El modo producción valida la rama de Git configurada, restringe sobreescrituras en caliente de clusters y despliega sin prefijos de usuario individual.",
    "domain": "Modos de Despliegue"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
