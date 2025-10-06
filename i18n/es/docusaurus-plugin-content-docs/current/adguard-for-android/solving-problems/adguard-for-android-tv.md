---
title: Cómo instalar AdGuard para Android TV
sidebar_position: 15
---

:::info

Este artículo trata sobre AdGuard para Android TV, un bloqueador de anuncios que protege tu televisor a nivel del sistema. Para ver cómo funciona, [descarga la app de AdGuard TV](https://agrd.io/tvapk)

:::

En la mayoría de los casos, los navegadores estándar no pueden instalar un archivo en tu televisor, pero puedes descargar un navegador de Google Play Store que tenga esta funcionalidad. En nuestra guía, veremos un ejemplo de instalación utilizando el navegador TV Bro, pero hay otras opciones y puedes elegir la que mejor se adapte a tus necesidades. Como alternativa, puedes utilizar la aplicación [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader).

## Instalación de AdGuard para Android TV a través del navegador

1. Instala el [navegador TV Bro](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) en tu Android TV.

2. Descarga e instala AdGuard para Android TV:

- Abre el navegador TV Bro instalado en tu Android TV.
- En la barra de direcciones del navegador, escribe "https://agrd.io/tvapk" y presiona _Enter_ o sigue el enlace.
- El navegador comenzará a descargar automáticamente el archivo de instalación de AdGuard para Android TV.
- Una vez completada la descarga, selecciona _Descargas_ en la barra de control del navegador, luego selecciona el archivo descargado.
- En un mensaje de advertencia, permite la instalación de archivos desde el navegador.
- Regresa a tu navegador, abre _Descargas_ y haz clic en el archivo descargado.
- En la ventana del sistema que aparece, haz clic en _Instalar_, luego en _Listo_ o _Abrir_.

Listo, AdGuard para Android TV está instalado.

1. Inicia AdGuard para Android TV:

- Una vez completada la instalación, busca la aplicación AdGuard en la lista de aplicaciones instaladas en tu Android TV.
- Haz clic en el icono de AdGuard para iniciar la aplicación.
- Sigue las instrucciones en pantalla para completar la configuración.

## Instalación de AdGuard para Android TV a través de ADB

1. Asegúrate de que Android Debug Bridge (ADB) esté instalado en tu computadora. Si no, puedes seguir las instrucciones en XDA Developers: [Guía de instalación de ADB](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Descarga [AdGuard para Android TV](https://agrd.io/tvapk).

3. En la configuración de tu TV, ve a _Sistema_ → _Acerca de_ y presiona el número de compilación siete veces para desbloquear las opciones de desarrollador. Activa la _depuración USB_.

4. Anota la dirección IP de tu Android TV:

   - En tu Android TV, navega a Configuración.
   - Selecciona _Sistema_ → _Acerca de_.
   - Busca _Red_ y selecciona _Wi-Fi_ o _Ethernet_, según tu tipo de conexión.
   - Ve a la sección de red y busca _Dirección IP_. Anota esta dirección IP.

5. Conéctate a Android TV a través de ADB:

   - Abre el terminal o el símbolo del sistema de tu computadora.
   - Ingresa el comando `adb connect` y pega la dirección IP de tu televisor.
   - Se establecerá la conexión.

6. Instala AdGuard para Android TV a través de ADB:

   - En el terminal, introduce el comando `adb install Downloads/adguard_tv.apk`. Si es necesario, reemplaza `Downloads/adguard_tv.apk` con tu ruta.
   - Espera un mensaje en la terminal indicando la instalación exitosa de la aplicación.

## Installing AdGuard for Android TV via atvTools

**Important:** Your smartphone and TV with Android TV (TV box) must be on the same local network.

1. Install the [atvTools](https://play.google.com/store/apps/details?id=dev.vodik7.atvtools) app on your Android smartphone

2. Connect **atvTools** to **Android TV**

   1. Enable developer mode on your Android TV device

      `Settings` → `Device settings` → `About device` → Tap `Android TV build` until you see a message confirming that you have successfully obtained developer status

   2. Enable USB debugging on your Android TV device

      Go to `Settings` → `Device settings` → `For developers` → `Debugging`, allow and enable `USB debugging`

3. Launch **atvTools** on your smartphone

4. Find the desired **Android TV** device in the list and click it

5. Allow the connection on the TV

6. Download the [AdGuard for Android TV](https://agrd.io/tvapk) installer to your smartphone as an **APK** file

7. In **atvTools**, click **Install** on the main screen and wait (less than a minute) until the **AdGuard for Android TV** icon appears in the list of applications

![Main screen \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/android-tv/main-screen.png)
