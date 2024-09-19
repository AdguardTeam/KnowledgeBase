---
title: How to collect Windows system logs
sidebar_position: 5
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Los datos y/o archivos proporcionados en los registros del sistema se procesan de acuerdo con la [la Política de privacidad de AdGuard](https://adguard.com/en/privacy.html).

:::

Para analizar y diagnosticar diferentes problemas que puedan surgir, el servicio de soporte de AdGuard puede necesitar archivos de registro del sistema de Windows. Windows event logs contain records about all errors that occur with the installed software, including AdGuard. A continuación, se muestran breves instrucciones que describen la forma de obtener los archivos de registro y enviarlos a nuestro servicio de soporte si es necesario.

1. Presiona *Win + R*

1. En la ventana que aparece, escribe `eventvwr` y haz clic en *OK*:

    ![Ventana de ejecución *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. La ventana del Visor de eventos aparece como se muestra en la imagen.

    ![Visor de sucesos *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Para guardar los archivos que necesitamos, haz lo siguiente:

    - Abre *Aplicación*: *Visor de eventos (local)* → *Registros de Windows* → *Aplicación*.

    - Haz clic derecho en *Aplicación* y, en el menú desplegable, selecciona *Guardar todos los eventos como...*

    - Selecciona un nombre y dónde guardar, haz clic en *Guardar*. Selecciona *Mostrar información para los siguientes idiomas*. Debes marcar la casilla de verificación junto a *Inglés*. Haz clic en *OK*.

    - Abre *Sistema*: *Visor de eventos (local)* → *Registros de Windows* → *Sistema*.

    - Haz clic derecho en *Sistema* y, en el menú desplegable, selecciona *Guardar todos los eventos como...*

    - Elige una carpeta de destino, ingresa el nombre, haz clic en *Guardar*. Selecciona *Mostrar información para los siguientes idiomas*. Debes marcar la casilla junto a *Inglés*. Haz clic en *OK*.

Envía los dos archivos que guardaste recientemente a **support@adguard.com**.

:::note

AdGuard se compromete a proteger tu privacidad. Seguimos estrictamente nuestra [Política de Privacidad](https://adguard.com/privacy/windows.html) y no recopilamos ninguna información privada sobre los usuarios. Antes de enviar tus registros al equipo de soporte, revisa el archivo, ya que puede contener información adicional que no deseas compartir. Si contiene información personal, te recomendamos que la elimines primero.

:::
