---
title: Instalación manual del certificado de seguridad en el navegador Firefox
sidebar_position: 11
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Para que AdGuard filtre con éxito el tráfico HTTPS en Firefox, el navegador debe confiar en el certificado de AdGuard. Se puede lograr de forma diferente para las distintas versiones de Firefox.

### Método 1

:::note

Este método funciona en Firefox para Android versión 90.0 y posteriores.

:::

Para que Firefox confíe en el certificado AdGuard, haz lo siguiente:

1. Ejecuta el navegador.

1. Ve a **Configuración** → **Acerca de Firefox**.

    ![Acerca de Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Toca el logo de Firefox cinco veces.

1. Ve a **Configuración** → **Configuración secreta**.

    ![Configuraciones secretas *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Activa **Usar certificados CA de terceros**.

### Método 2

:::note

Este método sólo funcionará en dispositivos **rooteados**.

:::

1. [Instala y configura](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; En la plataforma Windows, **los propietarios de Samsung** pueden necesitar instalar [esta utilidad](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Activa el **modo de desarrollador** y habilita la **depuración USB**:

    - Abre la aplicación **Configuración** en tu celular;
    - Ve a la sección **Sistema** (último elemento en el menú de configuración). En esta sección, encuentra el subelemento **Acerca del teléfono**;
    - Toca en **Número de build** 7 veces. Después de eso, recibirás una notificación que dice **Ahora eres un desarrollador** (Si es necesario, introduce un código de desbloqueo para el dispositivo);
    - Abre **Configuración del sistema** → **Opciones de desarrollador** → Desplázate hacia abajo y habilita **depuración USB** → Confirma que la depuración está habilitada en la ventana **Permitir la depuración USB** después de leer la advertencia cuidadosamente.

1. Instala el navegador [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (versión de lanzamiento);

1. Abre la configuración de AdGuard **** (icono de engranaje en la esquina inferior derecha) → **Filtrado** → **Red** → **Filtrado HTTPS** → **Certificado de seguridad** → **Instrucciones para Firefox** → **Instalar para versiones anteriores**;

1. Abre la carpeta `data/data/org.mozilla.firefox/files/mozilla` usando `adb shell su` y `cd data/data/...`, luego busca la carpeta llamada `xxxxxxx.default` y memoriza tu nombre;

1. En la carpeta indicada nos interesan dos archivos:

    - `cert9.db`
    - `key4.db`

1. Necesitamos mover estos archivos a una carpeta del navegador donde ocurrió el problema del certificado de seguridad:

    - `datos/datos/org.mozilla.<browser_name>/archivos/mozilla/yyyyyy.predeterminado`.

1. El comando completo se verá así:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    En caso de que hayas recibido la notificación del sistema **permiso denegado**, primero debes mover los archivos especificados al directorio sin permisos. Y después, debes moverlos a la carpeta necesaria en tu navegador Firefox.

    El comando completo debería verse así:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Si `adb shell su` no funciona, debes probar `adb shell` inicialmente y luego `su`.
