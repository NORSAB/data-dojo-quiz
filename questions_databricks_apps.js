/**
 * 🥋 THE DATA DOJO — Bank: databricks-apps
 * Total: 10 questions (5 EN + 5 ES)
 */
(function() {
  const bank = [
  {
    "id": "databricks-apps-1",
    "courseId": "databricks-apps",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What runtime environment does Databricks Apps use to securely host and execute custom user applications?",
    "options": [
      {
        "id": "a",
        "text": "Classic all-purpose interactive clusters running custom init scripts"
      },
      {
        "id": "b",
        "text": "Serverless containerized compute integrated with Unity Catalog authentication and governance"
      },
      {
        "id": "c",
        "text": "External AWS ECS/Fargate clusters managed outside the workspace"
      },
      {
        "id": "d",
        "text": "Single-node virtual machines managed directly by SSH"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks Apps provides serverless, containerized application hosting directly within the Databricks control/data plane, inheriting Unity Catalog governance, SSO, and service principals automatically.",
    "domain": "App Architecture & Deployment"
  },
  {
    "id": "databricks-apps-1-es",
    "courseId": "databricks-apps",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué entorno de ejecución utiliza Databricks Apps para alojar y ejecutar aplicaciones personalizadas de forma segura?",
    "options": [
      {
        "id": "a",
        "text": "Clusters interactivos clásicos all-purpose ejecutando scripts init personalizados"
      },
      {
        "id": "b",
        "text": "Cómputo serverless en contenedores integrado con autenticación y gobernanza de Unity Catalog"
      },
      {
        "id": "c",
        "text": "Clusters externos AWS ECS/Fargate administrados fuera del espacio de trabajo"
      },
      {
        "id": "d",
        "text": "Máquinas virtuales de un solo nodo administradas directamente por SSH"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Databricks Apps ofrece alojamiento de aplicaciones serverless en contenedores dentro de Databricks, heredando gobernanza de Unity Catalog, SSO e identidades de servicio automáticamente.",
    "domain": "Arquitectura y Despliegue de Apps"
  },
  {
    "id": "databricks-apps-2",
    "courseId": "databricks-apps",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which frameworks and languages are natively supported for building custom interfaces in Databricks Apps?",
    "options": [
      {
        "id": "a",
        "text": "Streamlit, Dash (Plotly), Gradio, and Flask/FastAPI in Python"
      },
      {
        "id": "b",
        "text": "Only PHP and Apache HTTP Server"
      },
      {
        "id": "c",
        "text": "Only static HTML with no backend processing"
      },
      {
        "id": "d",
        "text": "Only C# and .NET Core WebForms"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Databricks Apps supports popular Python data app frameworks including Streamlit, Dash, Gradio, FastAPI, and Flask.",
    "domain": "App Frameworks & Development"
  },
  {
    "id": "databricks-apps-2-es",
    "courseId": "databricks-apps",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué frameworks y lenguajes son compatibles de forma nativa para construir interfaces en Databricks Apps?",
    "options": [
      {
        "id": "a",
        "text": "Streamlit, Dash (Plotly), Gradio y Flask/FastAPI en Python"
      },
      {
        "id": "b",
        "text": "Únicamente PHP y Servidor HTTP Apache"
      },
      {
        "id": "c",
        "text": "Solo HTML estático sin procesamiento de backend"
      },
      {
        "id": "d",
        "text": "Únicamente C# y .NET Core WebForms"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Databricks Apps soporta frameworks populares de Python para aplicaciones de datos, incluyendo Streamlit, Dash, Gradio, FastAPI y Flask.",
    "domain": "Frameworks y Desarrollo de Apps"
  },
  {
    "id": "databricks-apps-3",
    "courseId": "databricks-apps",
    "lang": "en",
    "type": "single_choice",
    "prompt": "How does a Databricks App authenticate and query tables governed by Unity Catalog without exposing user passwords or personal tokens?",
    "options": [
      {
        "id": "a",
        "text": "The app uses an automatically assigned Service Principal with OAuth M2M credentials provided securely by the platform runtime"
      },
      {
        "id": "b",
        "text": "The app requires hardcoding admin personal access tokens (PAT) in the app.yaml file"
      },
      {
        "id": "c",
        "text": "The app must disable Unity Catalog and access storage directly via open AWS S3 keys"
      },
      {
        "id": "d",
        "text": "The app queries tables through unauthenticated public REST endpoints"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Each Databricks App runs with an associated Service Principal, using system-managed OAuth M2M tokens, ensuring least privilege without hardcoded secrets.",
    "domain": "Security & Unity Catalog Integration"
  },
  {
    "id": "databricks-apps-3-es",
    "courseId": "databricks-apps",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se autentica y consulta una Databricks App tablas gobernadas por Unity Catalog sin exponer contraseñas de usuario ni tokens personales?",
    "options": [
      {
        "id": "a",
        "text": "La app utiliza una Entidad de Servicio asignada automáticamente con credenciales OAuth M2M suministradas por la plataforma"
      },
      {
        "id": "b",
        "text": "La app requiere incrustar tokens de acceso personal (PAT) de administrador en app.yaml"
      },
      {
        "id": "c",
        "text": "La app debe deshabilitar Unity Catalog y acceder a almacenamiento con claves públicas de AWS S3"
      },
      {
        "id": "d",
        "text": "La app consulta tablas a través de endpoints REST públicos sin autenticación"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Cada Databricks App opera con una Entidad de Servicio dedicada y tokens OAuth M2M gestionados por la plataforma, garantizando mínimo privilegio sin secretos expuestos.",
    "domain": "Seguridad e Integración con Unity Catalog"
  },
  {
    "id": "databricks-apps-4",
    "courseId": "databricks-apps",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What file is required in the root directory of a Databricks App to specify the entry point, dependencies, and environment configuration?",
    "options": [
      {
        "id": "a",
        "text": "app.yaml"
      },
      {
        "id": "b",
        "text": "Dockerfile.production"
      },
      {
        "id": "c",
        "text": "serverless.json"
      },
      {
        "id": "d",
        "text": "databricks_app.xml"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "The `app.yaml` file configures the app's command entry point (e.g. `command: ['streamlit', 'run', 'app.py']`) and runtime parameters.",
    "domain": "Configuration & app.yaml"
  },
  {
    "id": "databricks-apps-4-es",
    "courseId": "databricks-apps",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué archivo es requerido en el directorio raíz de una Databricks App para definir el punto de entrada, dependencias y configuración?",
    "options": [
      {
        "id": "a",
        "text": "app.yaml"
      },
      {
        "id": "b",
        "text": "Dockerfile.production"
      },
      {
        "id": "c",
        "text": "serverless.json"
      },
      {
        "id": "d",
        "text": "databricks_app.xml"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El archivo `app.yaml` configura el punto de entrada de la aplicación (ej. `command: ['streamlit', 'run', 'app.py']`) y sus parámetros de ejecución.",
    "domain": "Configuración y app.yaml"
  },
  {
    "id": "databricks-apps-5",
    "courseId": "databricks-apps",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which permissions can be granted to users and groups for a published Databricks App?",
    "options": [
      {
        "id": "a",
        "text": "CAN VIEW, CAN MANAGE, and IS OWNER"
      },
      {
        "id": "b",
        "text": "READ_ONLY and WRITE_ALL only"
      },
      {
        "id": "c",
        "text": "ROOT access only"
      },
      {
        "id": "d",
        "text": "PUBLIC_ANONYMOUS without login"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Databricks Apps uses standard workspace ACLs: CAN VIEW (access and interact with the UI), CAN MANAGE (edit configuration and redeploy), and IS OWNER.",
    "domain": "Access Control & Sharing"
  },
  {
    "id": "databricks-apps-5-es",
    "courseId": "databricks-apps",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué permisos se pueden conceder a usuarios y grupos en una Databricks App publicada?",
    "options": [
      {
        "id": "a",
        "text": "CAN VIEW, CAN MANAGE y IS OWNER"
      },
      {
        "id": "b",
        "text": "Únicamente READ_ONLY y WRITE_ALL"
      },
      {
        "id": "c",
        "text": "Solo acceso ROOT"
      },
      {
        "id": "d",
        "text": "PUBLIC_ANONYMOUS sin inicio de sesión"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Databricks Apps utiliza permisos estándar del workspace: CAN VIEW (usar la aplicación), CAN MANAGE (modificar y redesplegar) e IS OWNER (propietario).",
    "domain": "Control de Acceso y Compartición"
  }
];
  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(bank);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
