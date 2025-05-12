---
title: Cómo obtener registros del sistema
sidebar_position: 4
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Los datos y/o archivos proporcionados en los registros se procesan de acuerdo con [la Política de privacidad de AdGuard](https://adguard.com/en/privacy.html).

:::

A veces, un registro regular puede no ser suficiente para identificar el origen del problema. En tales casos es necesario un registro del sistema. A continuación, encontrarás instrucciones sobre cómo recopilarlo y obtenerlo: a través de las opciones de desarrollador y Logcat.

:::note

AdGuard se compromete a proteger tu privacidad. Seguimos estrictamente nuestra [Política de Privacidad](https://adguard.com/privacy/android.html) y no recopilamos ninguna información privada sobre los usuarios. Antes de enviar tus registros al equipo de soporte, revisa el archivo, ya que puede contener información adicional que no deseas compartir. Si contiene información personal, te recomendamos que la elimines primero.

:::

## Capturar un informe de bug de un dispositivo

Para obtener un informe de bug directamente desde tu dispositivo, haz lo siguiente:

1. Asegúrate de tener las [Opciones de desarrollador](https://developer.android.com/studio/run/device.html#developer-device-options) habilitadas.

1. En **Opciones de desarrollador**, toca **Hacer un informe de bug**.

    ![Informe de bug *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Selecciona el tipo de informe de bug que deseas y toca **Informar**.

    :::note

    Después de un momento, verás una notificación de que el informe de bug está listo (ver Figura 2).


:::

    ![Informe de bug *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Para compartir el informe de error, toca la notificación.

    ![Informe de bug *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Envía este registro a nuestro equipo de soporte.

    :::note

    Nuestro equipo de soporte procesará tu ticket mucho más rápido si especificas el número de ticket de HelpDesk o el número de problema de GitHub en tu mensaje de soporte.


:::

## Captura un informe de bug a través de Logcat

En dispositivos con Android 7 y anteriores, no es posible enviar un informe de bug automáticamente. Luego puedes capturarlo manualmente a través de Logcat, una herramienta de línea de comandos estándar de Android que genera un registro de mensajes del sistema.

Sigue estas instrucciones:

### Parte #1: prepara el dispositivo

1. Pon el dispositivo al modo de desarrollador. Para ello: ve a **Ajustes** → **Acerca de** → toca el **Número de compilación** 7 veces.

1. Ve a **Opciones de desarrollador**.

1. Activa **la depuración USB**.

1. Aumenta el tamaño del **Logger buffer** a 4 MB por log buffer.

4 MB deberían ser suficientes para almacenar los registros que necesitamos hasta que puedas hacer la segunda parte (obtener el registro del dispositivo);

### Parte #2: reproduce el problema

It is important to reproduce the problem after you're done with the first part.

1. Reproduce el problema.

1. Recuerda/anota la fecha y hora de reproducción e inclúyela en el correo electrónico que enviarás posteriormente a nuestro soporte.

### Parte nº 3: obtén el registro

1. Conecta tu dispositivo a una PC con un cable USB.

1. Descarga [Herramientas de la plataforma Android SDK](https://developer.android.com/studio/releases/platform-tools#downloads). Elige el enlace de descarga apropiado para tu sistema operativo en la sección Descargas. Una vez que toques el enlace, se descargará un archivo ZIP. Puedes extraer los archivos ADB (Android Debug Bridge) del archivo ZIP y almacenarlos donde quieras.

1. Verifica si ADB funciona correctamente: conecta tu dispositivo Android a tu computadora usando un cable USB, abre el Símbolo del sistema, PowerShell o Terminal y ejecuta el siguiente comando:

    `adb devices`

    Un ejemplo de un resultado exitoso:

    ![Paso 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Luego ejecuta el siguiente comando (introduce la ruta correspondiente):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Email the created `txt` file as well as the time the problem was reproduced (from part #2) to our support team at <support@adguard.com>.

### Forma alternativa para usuarios ROOT

1. Descarga y ejecuta [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Selecciona **Grabar** en el menú. Elige un nombre para un archivo de registro o simplemente presiona **OK**. Ahora puedes presionar el botón **Inicio**, CatLog continuará grabando el registro en segundo plano.

1. Reproducir el problema.

1. Abre CatLog y presiona **Detener grabación** en el menú.

1. Envía este registro a nuestro equipo de soporte.

:::note

Nuestro equipo de soporte procesará tu ticket mucho más rápido si especificas el número de ticket de HelpDesk o el número de problema de GitHub en tu mensaje de soporte.

:::
