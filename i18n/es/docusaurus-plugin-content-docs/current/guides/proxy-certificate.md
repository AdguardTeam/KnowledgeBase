---
title: Cómo instalar un certificado proxy
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## Cómo descargar e instalar el certificado

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Haz clic con el botón derecho del ratón en la carpeta *Certificados* y haz clic en **Todas las tareas** → **Importar**.

1. En la página *Asistente de importación de certificados*, haz clic en **Siguiente**.

1. Haz clic en **Navegar** para importar el certificado.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Selecciona la opción **Colocar todos los certificados en el siguiente repositorio**.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Haz clic en **Finalizar**.

1. Press **Win**, then open **Settings**.

1. Selecciona **Red & Internet** → **Proxy**.

1. Alternar *Detectar configuraciones automáticamente* para desactivado.

1. Haz clic en **Configurar** en la pestaña *Usar un servidor proxy*.

1. Activa el interruptor. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. Para **Puerto**, ingresa el puerto elegido en la configuración de red de la aplicación AdGuard.

1. Haz clic en **Guardar**.

### Mac {#mac}

1. Anota la dirección IP de tu computadora con AdGuard instalado.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Haz doble clic en el archivo de certificado descargado.

1. Ingresa la contraseña de administrador y luego haz clic en **Modificar Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. En *Sistema*, resalta el certificado que agregaste.

1. Right-click it and select **Get Info** from the context menu.

1. Expande *Confianza* para mostrar las políticas de confianza para el certificado.

1. En *Capas de sockets seguros (SSL)*, selecciona **Confiar siempre**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Haz clic en **Detalles...** y ve a la pestaña **Proxies**.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. En el campo **Puerto**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.

### Android {#android}

1. Anota la dirección IP de tu computadora con AdGuard instalado.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Desde la computadora con AdGuard, sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Abre la configuración avanzada de la red Wi-Fi activa.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. Para **Puerto proxy**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.

### iOS {#ios}

1. Anota la dirección IP de tu computadora con AdGuard instalado.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Desde la computadora con AdGuard, sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Introduce tu contraseña y confirma la instalación. Presiona **Listo**.

1. Vete a **Configuración** → **General** → **Acerca de** → **Configuración de confianza de certificados**. Habilita el interruptor junto a *Adguard Personal CA*. El certificado ya está instalado.

1. En ese dispositivo, abre la configuración avanzada de la red Wi-Fi activa.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. Para **Puerto proxy**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.
