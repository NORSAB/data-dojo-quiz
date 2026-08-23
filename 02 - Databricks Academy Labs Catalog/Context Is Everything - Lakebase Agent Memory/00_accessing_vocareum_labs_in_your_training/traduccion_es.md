# Acceso al entorno de laboratorio

## Cómo iniciar el laboratorio

- El entorno es proporcionado por **Vocareum** y se abre en una nueva pestaña del navegador.
- Ya está configurado con los permisos y recursos necesarios para completar las tareas.
- Deben habilitarse las cookies de terceros para que Vocareum funcione correctamente.

### Capacitación dirigida por un instructor

Desde la sección **Content** de la sesión, selecciona el enlace LTI del entorno de laboratorio.

### Capacitación a tu propio ritmo

Desde la navegación de contenido situada a la derecha del curso, selecciona el enlace LTI para abrir el entorno.

## Duración y presupuesto

- Cada laboratorio tiene un temporizador visible en la esquina superior derecha.
- Cuando el tiempo termina, el laboratorio se cierra y los recursos se eliminan.
- Si seleccionas **End Lab** antes de tiempo, también se cerrará el laboratorio y se limpiarán los recursos.
- El presupuesto total permite realizar cada laboratorio hasta **tres veces**.

> No selecciones **End Lab** hasta terminar y conservar cualquier resultado que necesites.

## Aprovisionamiento de recursos

- Espera hasta que Vocareum termine de configurar el entorno.
- El proceso puede tardar entre **5 y 20 minutos**, según la latencia de red.
- Cuando esté listo, el workspace de Databricks aparecerá dentro de la pestaña de Vocareum.

## Habilitar ventanas emergentes de Databricks Academy

Si el navegador bloquea Vocareum, aparecerá un icono de ventana emergente bloqueada en la barra de direcciones.

En Chrome:

1. Abre el menú de tres puntos y selecciona **Settings / Configuración**.
2. En **Privacy and security / Privacidad y seguridad**, entra en **Site settings / Configuración de sitios**.
3. En **Content / Contenido**, selecciona **Pop-ups and redirects / Ventanas emergentes y redirecciones**.
4. En **Allowed to send pop-ups and use redirects**, selecciona **Add / Agregar**.
5. Agrega la dirección correspondiente:
   - Clientes: `https://customer-academy.databricks.com:443`
   - Socios: `https://partner-academy.databricks.com:443`
   - Empleados: `https://employee-academy.databricks.com:443`

## Habilitar cookies de terceros para Vocareum

1. Ve a **Configuración del navegador → Privacidad y seguridad → Cookies y otros datos de sitios**.
2. Deshabilita **Block third-party cookies / Bloquear cookies de terceros**. También puedes abrir `chrome://settings/cookies`.
3. Si deseas mantener el bloqueo general, agrega `[*.]labs.vocareum.com` como excepción permitida.

## Imágenes originales

Las 12 diapositivas suministradas se conservaron en la carpeta [`images`](images/).

