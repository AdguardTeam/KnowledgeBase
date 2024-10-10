---
title: Problemas causados por múltiples perfiles de usuario
sidebar_position: 10
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

En este artículo, encontrarás los métodos sobre cómo resolver problemas con AdGuard cuando configura *múltiples cuentas* o *Perfiles restringidos* en tus dispositivos Android.

## Problemas causados por múltiples perfiles de usuario

En Android 9 y versiones posteriores, si AdGuard está instalado para más de un perfil de usuario en tu dispositivo, puedes encontrar problemas al desinstalar la aplicación. Cuando desinstalas AdGuard de un perfil de usuario, la aplicación seguirá apareciendo en la lista de aplicaciones, pero no podrás desinstalarla ni reinstalarla. Esto sucede porque AdGuard está instalado para un perfil de usuario diferente en el dispositivo.

Si intentas reinstalar AdGuard después de un intento de eliminación fallido, verás el mensaje de error "No puedes instalar la aplicación en tu dispositivo”.

Para solucionar este problema, debes desinstalar la aplicación para todos los usuarios: ve a Ajustes → Todas las apps → AdGuard. Toca el menú de tres puntos en la esquina superior derecha y selecciona *Desinstalar para todos los usuarios*.

![Desinstalar *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problemas causados por el uso de un perfil en modo restringido

Los propietarios de teléfonos, tabletas o televisores con el sistema operativo Android 7+ pueden enfrentar el problema causado por el uso de **un perfil con modo restringido**. Si tienes un perfil de este tipo, **AdGuard**, al igual que otras aplicaciones que utilizan VPN, obtiene restricciones en el filtrado selectivo del tráfico VPN. Como resultado, AdGuard no puede iniciar la protección en un **modo VPN local**. Además, una de las razones de esta situación puede ser el uso del **Perfil Dual App/Dual Messenger** en tu dispositivo. A continuación, se describen las recomendaciones que puedes aplicar cuando se presenta este problema.

### Soluciones

Tienes tres formas de resolver el problema:

### Opción 1: Conceder permisos a AdGuard mediante ADB

:::note

Este enfoque está disponible a partir de **AdGuard v3.5 nightly 6**. Si estás usando una versión anterior, puedes obtener la última actualización [aquí](https://adguard.com/adguard-android/overview.html).

:::

1. Activa el **modo de desarrollador** y habilita la **depuración USB**:

    - Abre la aplicación **Configuración** en tu celular;
    - Ve a la sección **Sistema** (último elemento en el menú de configuración). En esta sección, encuentra el subelemento **Acerca del teléfono**;
    - Toca en **Número de build** 7 veces. Después de eso, recibirás una notificación que dice **Ahora eres un desarrollador** (Si es necesario, introduce un código de desbloqueo para el dispositivo);
    - Abre **Configuración del sistema** → **Opciones de desarrollador** → Desplázate hacia abajo y habilita **depuración USB** → Confirma que la depuración está habilitada en la ventana **Permitir la depuración USB** después de leer la advertencia cuidadosamente.

    :::note

    Si encuentras alguna dificultad o tienes preguntas adicionales, puedes encontrar instrucciones completas [aquí](https://developer.android.com/studio/debug/dev-options).


:::

1. [Instala y configura](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; En la plataforma Windows, **los propietarios de Samsung** pueden necesitar instalar [esta utilidad](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Conecta tu dispositivo usando un ** cable USB** a la computadora o portátil en la que instalaste **ADB**;

1. Abre **la línea de comando** en tu PC:

    - **Cmd.exe** si estás usando **Windows**;
    - **Terminal** si estás usando **macOS**;

1. Introduce el comando `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` y pulsa **Enter**.

### Opción 2: Elimina la *cuenta de usuario restringida*

Sobre cómo gestionar cuentas de usuario desde un dispositivo [Android](https://support.google.com/a/answer/6223444?hl=en) puedes [encontrar información aquí](https://support.google.com/a/answer/6223444?hl=en).

:::note

En algunos casos, se crean cuentas de usuario restringidas de forma implícita y no se pueden eliminar. Por ejemplo, cuando utilizas las funciones de mensajería dual o de aplicación dual en dispositivos **Samsung** o **LG**. A continuación, puedes leer cómo solucionar el problema en estos casos.

:::

### Opción 3: Usar AdGuard en *modo proxy HTTP local* (requiere root)

Para habilitar este modo, abre **Configuración de AdGuard** → **Red** → **Método de filtrado** → **Proxy HTTP local**

### Dispositivos LG y Samsung

Los propietarios de los teléfonos **LG** o **Samsung** también pueden encontrar un problema similar. Puede ser causada por el uso de la **función dual App/Dual Messenger** (que crea automáticamente un perfil restringido). Para resolver este problema, deshabilita esta función.

### Samsung

- Abre **Configuración**;
- Presiona **Avanzado**;
- Desplázate hacia abajo y pulsa **Dual messenger**;
- Desactivar el **Dual messenger** para todas las aplicaciones;
- Bloquea el dispositivo durante 5 minutos;
- Desbloquea la pantalla y vuelve a intentar crear el perfil VPN.

### LG

- Abre **Configuración**;
- Selecciona la pestaña **General**;
- Desplázate hacia abajo y pulsa **Dual app**;
- Elimina todas las aplicaciones de la lista;
- Reinicia tu dispositivo.
