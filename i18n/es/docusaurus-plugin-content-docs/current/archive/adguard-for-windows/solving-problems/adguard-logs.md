---
title: Cómo recopilar registros de AdGuard
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Para analizar y diagnosticar diferentes problemas que puedan surgir, el servicio de soporte de AdGuard puede necesitar archivos de registro. Estos archivos contienen registros sobre errores y otros eventos que ocurren con el software. A continuación se muestran breves instrucciones que describen la forma de obtener los archivos de registro y enviarlos al servicio de soporte si es necesario.

:::note

AdGuard se compromete a proteger tu privacidad. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Antes de enviar tus registros al equipo de soporte, revisa el archivo, ya que puede contener información adicional que no deseas compartir. Si contiene información personal, te recomendamos que la elimines primero.

:::

### Debug logs {#debug-logs}

1. Abre la configuración de AdGuard. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Reproducir el problema.

   Te recomendamos encarecidamente que tomes nota de la hora exacta en la que reprodujo el problema: ayudará a nuestro equipo de soporte a encontrar entradas de registro relevantes y resolver el problema más rápido.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Guarda el archivo en cualquier carpeta.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Entonces deberás hacer lo siguiente:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Por favor, no dejes el servicio en ejecución:

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Si tienes una versión anterior de AdGuard para Windows, ejecuta la aplicación con el comando C:\"Program Files (x86)"\Adguard\Adguard.exe /trace si estás utilizando Windows de 64 bits y C:\"Program Archivos"\Adguard\Adguard.exe /trace si estás utilizando 32 bits.

1. Reproducir el problema.

   Te recomendamos encarecidamente que tomes nota de la hora exacta en la que reprodujo el problema: ayudará a nuestro equipo de soporte a encontrar entradas de registro relevantes y resolver el problema más rápido.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   No te preocupes si el archivo de registro es grande. Necesitamos conocer tantos detalles como sea posible para solucionar tu problema.
