---
title: Cómo instalar un certificado proxy
sidebar_position: 2
---

Nuestras aplicaciones de escritorio, AdGuard para Windows y AdGuard para Mac, se pueden utilizar como proxy para otros dispositivos. Esto significa que puedes enrutar el tráfico de otros dispositivos a través de AdGuard (totalmente o solo el tráfico de aplicaciones y navegadores específicos).

:::note

Estos dispositivos deben estar en la misma red que el PC o Mac con AdGuard.

:::

El tráfico HTTP se filtrará en cualquier caso, pero para que AdGuard pueda filtrar el tráfico HTTPS, debes instalar manualmente el certificado de AdGuard en el dispositivo conectado.

## Cómo descargar e instalar el certificado

Dependiendo del sistema operativo del dispositivo cuyo tráfico deseas filtrar, sigue una de estas instrucciones:

### Windows {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. Asegúrate de que la protección AdGuard esté habilitada. En una computadora con Windows, marca la casilla **Usar AdGuard como proxy HTTP** en la pestaña **Red** de su configuración. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. En la misma computadora con AdGuard, sigue este enlace: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. Si la descarga no se inicia, inténtalo con otro navegador, por ejemplo Firefox.

1. Transfiere el archivo **cert.cer** descargado al dispositivo Windows cuyo tráfico deseas enrutar a través de AdGuard. Puedes utilizar un cable USB, Bluetooth o servicios en la nube para hacerlo.

1. En ese dispositivo, presiona **Win**, escribe `Administrar certificados informáticos` y presiona **Enter**.

1. En la página *Certificados — Computadora local*, busca la carpeta *Autoridades confiables de certificación root* → *Certificados*.

1. Haz clic con el botón derecho del ratón en la carpeta *Certificados* y haz clic en **Todas las tareas** → **Importar**.

1. En la página *Asistente de importación de certificados*, haz clic en **Siguiente**.

1. Haz clic en **Navegar** para importar el certificado.

1. Navega hasta el archivo de certificado **cert.cer**, selecciónalo, haz clic en **Abrir**, luego en **Siguiente**.

1. Selecciona la opción **Colocar todos los certificados en el siguiente repositorio**.

1. Asegúrate de que el campo *Repositorio de certificados* muestre *Autoridades de certificación raíz de confianza* y haz clic en **Siguiente**.

1. Haz clic en **Finalizar**.

1. Presiona **Win**, luego abre **Configuración**.

1. Selecciona **Red & Internet** → **Proxy**.

1. Alternar *Detectar configuraciones automáticamente* para desactivado.

1. Haz clic en **Configurar** en la pestaña *Usar un servidor proxy*.

1. Activa el interruptor. For **Proxy IP address**, type the IP address of your computer that you noted in step 1. Para **Puerto**, ingresa el puerto elegido en la configuración de red de la aplicación AdGuard.

1. Haz clic en **Guardar**.

### Mac {#mac}

1. Note the IP address of your computer with installed AdGuard.

1. Asegúrate de que la protección AdGuard esté habilitada. En una computadora con Windows, marca la casilla **Usar AdGuard como proxy HTTP** en la pestaña **Red** de su configuración. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. Si la descarga no se inicia, inténtalo con otro navegador, por ejemplo Firefox.

1. Transfiere el archivo **cert.cer** descargado al dispositivo Mac cuyo tráfico deseas enrutar a través de AdGuard. Puedes utilizar un cable USB, Bluetooth o servicios en la nube para hacerlo.

1. Haz doble clic en el archivo de certificado descargado.

1. Ingresa la contraseña de administrador y luego haz clic en **Modificar Keychain**.

1. Ve a **Spotlight** (el ícono de búsqueda en la esquina superior derecha), escribe `Keychain Access`y luego selecciona **Keychain Access** en los resultados de la búsqueda.

1. En *Sistema*, resalta el certificado que agregaste.

1. Haz clic con el botón derecho y selecciona **Obtener información** en el menú contextual.

1. Expande *Confianza* para mostrar las políticas de confianza para el certificado.

1. En *Capas de sockets seguros (SSL)*, selecciona **Confiar siempre**.

1. Abre **Preferencias del Sistema** → **Red** y selecciona la conexión activa en la parte superior.

1. Haz clic en **Detalles...** y ve a la pestaña **Proxies**.

1. Marca dos casillas de verificación: *Proxy web (HTTP)* y *Proxy web seguro (HTTPS)*. En el campo **Servidor**, escriba la dirección IP de su computadora que anotó en el paso 1. En el campo **Puerto**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.

### Android {#android}

1. Note the IP address of your computer with installed AdGuard.

1. Asegúrate de que la protección AdGuard esté habilitada. En una computadora con Windows, marca la casilla **Usar AdGuard como proxy HTTP** en la pestaña **Red** de su configuración. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Desde la computadora con AdGuard, sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. Si la descarga no se inicia, inténtalo con otro navegador, por ejemplo Firefox.

1. Transfiere el archivo **cert.cer** descargado al dispositivo Android cuyo tráfico deseas enrutar a través de AdGuard. Puedes utilizar un cable USB, Bluetooth o servicios en la nube para hacerlo.

1. Localiza y toca el certificado **cert.cer** descargado previamente para abrir el archivo y seguir las instrucciones para instalar el certificado.

1. Los dispositivos Android no confían en los certificados de forma predeterminada, por lo que aparecerá una advertencia. Puedes ignorarla. En algunos teléfonos, es posible que se te solicite que ingreses la contraseña de tu dispositivo. Hazlo y luego presiona **OK**. Se instalará el certificado.

1. Abre la configuración avanzada de la red Wi-Fi activa.

1. Cambia el **Tipo de proxy** a **Manual**. For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. Para **Puerto proxy**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.

### iOS {#ios}

1. Note the IP address of your computer with installed AdGuard.

1. Asegúrate de que la protección AdGuard esté habilitada. En una computadora con Windows, marca la casilla **Usar AdGuard como proxy HTTP** en la pestaña **Red** de su configuración. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Desde la computadora con AdGuard, sigue este enlace usando un navegador web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Haz clic en el botón **Descargar**. Si la descarga no se inicia, inténtalo con otro navegador, por ejemplo Firefox.

1. Transfiere el archivo **cert.cer** descargado al dispositivo iOS cuyo tráfico deseas enrutar a través de AdGuard. Puedes utilizar un cable USB, Bluetooth o servicios en la nube para hacerlo.

1. En tu dispositivo iOS, abre **Ajustes** → **Perfil descargado** y pulsa **Instalar** en la esquina superior derecha. Introduce tu contraseña y confirma la instalación. Presiona **Listo**.

1. Vete a **Configuración** → **General** → **Acerca de** → **Configuración de confianza de certificados**. Habilita el interruptor junto a *Adguard Personal CA*. El certificado ya está instalado.

1. En ese dispositivo, abre la configuración avanzada de la red Wi-Fi activa.

1. Cambia el **Tipo de proxy** a **Manual**. Para el nombre de host del proxy ****, escribe la dirección IP de tu computadora que anotaste en el paso 1. Para **Puerto proxy**, ingresa el puerto elegido en la configuración de red de la aplicación de AdGuard.
