---
title: Instalación
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Requisitos del sistema

**Versión del sistema operativo:** Android 9.0 o superior

**RAM:** por lo menos 2 GB

**Espacio libre en disco:** 500 MB

## Instalación

La mayoría de las apps basadas en Android se distribuyen a través de Google Play; sin embargo, AdGuard no está presente allí, porque Google prohíbe la distribución de bloqueadores de anuncios a nivel de red a través de Google Play, es decir, apps que bloquean comerciales en otras apps. Encontrarás más información sobre la política restrictiva de Google [en nuestro blog](https://adguard.com/blog/adguard-google-play-removal.html).

Por ello, solo puedes instalar AdGuard para Android manualmente. Para usar la app en tu dispositivo móvil, necesitarás hacer lo siguiente:

1. **Descargar la app en tu dispositivo**. A continuación se muestran algunas formas de hacerlo:

    - dirígete a [nuestro sitio web](https://adguard.com/adguard-android/overview.html) y toca el botón *Descargar*
    - inicia el navegador y escribe la siguiente URL: [https://adguard.com/apk](https://adguard.com/apk)
    - o escanea este código QR:

    ![Código QR *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Permitir la instalación de apps de fuentes desconocidas**. Una vez que la descarga del archivo esté completa, toca *Abrir* en la notificación.

    ![Instalando apps de fuentes desconocidas *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Aparecerá una ventana emergente. Toca *Configuración*, navega a *Instalar aplicaciones desconocidas*, y da el permiso para el navegador que has utilizado para descargar el archivo.

    ![Instalando apps de fuentes desconocidas *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Instala la aplicación**. Una vez que el navegador haya obtenido los permisos necesarios, el sistema te preguntará si deseas instalar la app. Pulsa *Instalar*.

    ![Instalando apps de fuentes desconocidas *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    A continuación, se te pedirá que leas el *Acuerdo de licencia* y la *Política de privacidad* de AdGuard. También puedes participar en el desarrollo del producto. Para ello, marca las casillas de *Enviar informes de error automáticamente* y *Enviar datos técnicos e interacción*. Luego haz clic en *Continuar*.

    ![Política de privacidad *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Crea una VPN local**. Para filtrar todo el tráfico directamente en tu dispositivo y no dirigirlo a través de un servidor remoto, AdGuard necesita establecer una conexión VPN.

    ![Crear una VPN local *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Habilita el filtrado HTTPS**. No es una opción obligatoria; sin embargo, recomendamos activarla para obtener la mejor calidad de bloqueo de anuncios.

    Si tu dispositivo está ejecutando Android 7–9, se te pedirá que instales un certificado y configures el filtrado HTTPS después de la configuración local de la VPN.

    ![Habilitar el filtrado HTTPS en Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Después de que toques *Instalar ahora*, aparecerá un aviso solicitándote que autentiques la instalación del certificado con una contraseña o huella digital.

    ![Habilita el filtrado HTTPS en Android 7-9. Paso 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    Si tienes Android 10+ en tu dispositivo, después de crear una VPN local, verás la pantalla principal de la app con un snack bar en la parte inferior con una sugerencia para habilitar el filtrado HTTPS: toca *Habilitar* y sigue las instrucciones en la pantalla siguiente o consulta [el artículo sobre la instalación del certificado](solving-problems/manual-certificate.md) para más información.

    ![Habilita el filtrado HTTPS *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Desinstalando/Reinstalando AdGuard

Si necesitas desinstalar AdGuard en tu dispositivo móvil, abre *Configuración* y elige *Apps* (Android 7) o *Apps & notificaciones* (Android 8+). Encuentra AdGuard en la lista de apps instaladas y presiona *Desinstalar*.

![Reinstalar AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

Para reinstalar AdGuard, solo descarga el archivo apk nuevamente y sigue los pasos descritos en la sección de instalación. La desinstalación no es necesaria de antemano.
