---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Los datos y/o archivos proporcionados en los registros se procesan de acuerdo con [la Política de privacidad de AdGuard](https://adguard.com/en/privacy.html).

:::

Para analizar y diagnosticar diferentes problemas que puedan surgir, el servicio de soporte de AdGuard puede necesitar archivos de registro. These files contain records about errors and other events that occur with the software. A continuación se muestran breves instrucciones que describen la forma de obtener los archivos de registro y enviarlos al servicio de soporte si es necesario.

:::note

AdGuard se compromete a proteger tu privacidad. Seguimos estrictamente nuestra [Política de Privacidad](https://adguard.com/privacy/windows.html) y no recopilamos ninguna información privada sobre los usuarios. Antes de enviar tus registros al equipo de soporte, revisa el archivo, ya que puede contener información adicional que no deseas compartir. Si contiene información personal, te recomendamos que la elimines primero.

:::

### Registros de depuración {#debug-logs}

1. Abre la configuración de AdGuard. Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![Nivel de registro de depuración *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproducir el problema.

    Te recomendamos encarecidamente que tomes nota de la hora exacta en la que reprodujo el problema: ayudará a nuestro equipo de soporte a encontrar entradas de registro relevantes y resolver el problema más rápido.

1. Export the collected logs using the *Export Logs* button.

    ![Exportar registros *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Guarda el archivo en cualquier carpeta.

1. **Important**: after exporting the logs, set the logging level back to *Default*. *Depurar* el nivel de registro ralentizará la aplicación.

1. Envía el archivo al servicio de soporte de AdGuard a **support@adguard.com**, describe el problema y no olvides mencionar el momento en que reprodujo el problema.

### Registros de seguimiento {#trace-logs}

A veces, los miembros del equipo de soporte pueden pedirte que envíes *registros de seguimiento*. Entonces deberás hacer lo siguiente:

1. Detén AdGuard haciendo clic derecho en el icono de AdGuard en el menú de la bandeja y eligiendo *Salir de AdGuard*:

    ![Salir de AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Por favor, no dejes el servicio en ejecución:

    ![Detener el servicio AdGuard *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Abre la consola (escribe `cmd` en el panel de inicio).

1. Ejecuta la aplicación con el comando `C:\"Program Files"\Adguard\Adguard.exe /trace` independientemente del bitness de Windows si has instalado AdGuard v7.16 para Windows o posterior.

Si tienes una versión anterior de AdGuard para Windows, ejecuta la aplicación con el comando C:\"Program Files (x86)"\Adguard\Adguard.exe /trace si estás utilizando Windows de 64 bits y C:\"Program Archivos"\Adguard\Adguard.exe /trace si estás utilizando 32 bits.

1. Reproduce el problema.

    Te recomendamos encarecidamente que tomes nota de la hora exacta en la que reprodujo el problema: ayudará a nuestro equipo de soporte a encontrar entradas de registro relevantes y resolver el problema más rápido.

1. Export the collected logs using the *Export Logs* button.

    ![Exportar registros *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    No te preocupes si el archivo de registro es grande. Necesitamos conocer tantos detalles como sea posible para solucionar tu problema.
