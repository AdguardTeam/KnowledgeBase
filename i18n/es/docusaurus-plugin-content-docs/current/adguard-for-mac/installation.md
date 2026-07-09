---
title: 'Instalación'
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Requisitos del sistema

**Operating system version:** macOS 12 or later

**RAM:** por lo menos 2 GB

**Navegadores:** Safari, Chrome, Firefox, Opera, Yandex.Browser y cualquier otro navegador compatible con macOS

**Espacio libre en disco:** 120 MB

## Instalación

Para instalar AdGuard para Mac en tu computadora, inicia tu navegador, escribe *adguard.com* en la barra de direcciones y pulsa **Descargar** [en la página que se abra](https://adguard.com/download.html?auto=1).

![Descargar la aplicación *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Espere a que se descargue *AdguardInstaller.dmg* y haz doble clic en su ícono en la lista de archivos descargados en el panel Dock.

![Haz doble clic para abrir el archivo](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

El icono de AdGuard aparecerá en tu desktop. Haz clic para abrir la aplicación de instalación y haz doble clic en el icono de AdGuard en la ventana abierta.

![Haz doble clic en el icono de AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Tras el primer lanzamiento de AdGuard, tu sistema operativo te advertirá que esta aplicación se ha descargado de Internet. Haz clic en **Abrir. Haz clic en **Abrir**.

![Haz clic en Abrir](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

En el siguiente paso, debes hacer clic en **Instalar**.

![Haz clic en Instalar](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Espera a que se ejecute el instalador.

![Espera hasta que se descarguen los archivos necesarios](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Para utilizar la aplicación, necesitarás la contraseña de administrador de tu cuenta de macOS. Ingresa la contraseña cuando se te solicite en el cuadro de diálogo y presiona **OK**.

![Ingresa la contraseña](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Ahora, verás un asistente de instalación rápida donde se te ofrecerá configurar la protección según tus necesidades. Puedes comenzar a ajustar de inmediato ("¡Hagámoslo!") o saltar por ahora ("Dejar como está").

![Configurar protección](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Listo, ¡AdGuard está instalado en tu Mac!

### Installation on older versions of macOS

Users with older versions of macOS (Big Sur 11, Catalina 10.15, or earlier) won’t find a compatible app version on the AdGuard Ad Blocker website — these OS versions are no longer supported in the latest releases.

However, you still can [download an older, compatible version](https://agrd.io/adguard_for_mac_v2-17)

## Desinstalar

### Regular

En primer lugar, abre la aplicación Finder haciendo clic en el ícono correspondiente:

![Abre el Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Ve a la sección de Aplicaciones. Busca AdGuard allí, haz clic derecho sobre él y selecciona **Mover a la papelera**.

![Mueve AdGuard a la papelera *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Avanzado

**Utilice esta instrucción sólo si sabes lo que estás haciendo o si nuestro servicio de soporte te recomendó específicamente la "desinstalación avanzada". Además, haz primero todos los pasos de la "desinstalación normal".**

1. Después, elimina los siguientes archivos de AdGuard:
    - ~/Library/Group\Containers/TC3Q7MAJXF.com.adguard.mac (carpeta)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (archivo)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (archivo)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (archivo)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (archivo)

    Para ello, abre la aplicación Terminal, luego ingresa y ejecuta los siguientes comandos:

    ```bash
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Ejecuta la aplicación **Monitor de actividad**.
1. Usando esta herramienta de búsqueda, encuentra el proceso **cfprefsd**.

    ![Ejecuta el Monitor de actividad](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Detén el proceso que se está ejecutando bajo el usuario (no el que se ejecuta bajo root). Para ello, haz clic en el proceso y luego haz clic en X en la parte superior izquierda. Confirma la acción en la ventana de diálogo.

    ![Confirmar](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard ya se ha eliminado de tu camputadora.
