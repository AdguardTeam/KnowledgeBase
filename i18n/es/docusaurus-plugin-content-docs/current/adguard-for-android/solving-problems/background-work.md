---
title: Cómo evitar que el sistema desactive AdGuard
sidebar_position: 9
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

En algunos casos, las aplicaciones no permanecerán en segundo plano (“activas” o en modo de suspensión) debido a la función de optimización del sistema operativo Android, o el llamado “modo de ahorro de batería”: esta función puede eliminar las aplicaciones en segundo plano. Puede resultar inconveniente relanzarlos cada vez que se cierran. Para evitar la terminación de la aplicación en segundo plano, es necesario seguir los pasos que hemos descrito por separado para cada fabricante (versión) del sistema operativo Android. Ten en cuenta que las instrucciones para los diferentes fabricantes suelen ser muy similares.

## Asus

La información sobre los dispositivos Asus aún no está completa, por lo que puede haber más problemas que los enumerados aquí. Actualizaremos esta parte del artículo cuando sepamos más.

La principal fuente de posibles problemas con el trabajo en segundo plano en los dispositivos Asus está asociada con la aplicación de optimización llamada Power Master. Está preinstalada y tiene configuraciones predeterminadas bastante agresivas, por ejemplo, para bloquear el inicio de aplicaciones y eliminar tareas en segundo plano cuando la pantalla se apaga. Para asegurarte de que el procesamiento en segundo plano de las aplicaciones funcione, configura lo siguiente:

1. Ve a **Mobile Manager** → **PowerMaster** → **Ajustes** (u **Opciones de ahorro de batería**) → Desmarca**Limpiar en suspensión**

1. Ve a **Mobile Manager** → **PowerMaster** → **Configuración** (o **Opciones de ahorro de batería**) → Desmarca **Denegar automáticamente el inicio automático de aplicaciones**

Como alternativa, en lugar de desmarcar por completo la opción **Impedir automáticamente que las aplicaciones se inicien automáticamente**, puedes ir a **Configuración** → **Opciones de ahorro de batería** → **Administrador de inicio automático** → **AdGuard** y desmarcarlo.

## Xiaomi

Los dispositivos Xiaomi (y especialmente MIUI) se encuentran entre los más problemáticos cuando se trata del trabajo en segundo plano. Se sabe que limitan los procesos en segundo plano y tienen permisos no estándar y, además, carecen de la documentación adecuada. A veces, las aplicaciones simplemente no funcionan correctamente en los teléfonos Xiaomi y no hay mucho que se pueda hacer al respecto. A continuación se muestran algunas acciones que puede intentar realizar si tienes algún problema con el trabajo en segundo plano de AdGuard en varios dispositivos Xiaomi.

### MIUI 13+ y HyperOS

Dependiendo de las versiones de MIUI y HyperOS, hay dos formas de cambiar la configuración de optimización de la batería en tu teléfono y bloquear anuncios de manera más eficiente.

Opción 1

1. Ve a **Configuración** → **Aplicaciones** → **Permisos** → **Inicio automático en segundo plano** y permite que AdGuard se ejecute en segundo plano

1. Regresa a **Configuración** → **Aplicaciones** → **Administrar aplicaciones** → **AdGuard** y desmarca **Pausar la actividad de la aplicación si no se usa**

1. Ve a **Ahorro de batería** y toca **Sin restricciones**

Opción 2

1. Ve a **Configuración** → **Aplicaciones** → **Administrar aplicaciones** → **AdGuard** y habilita **Inicio automático**

1. Ve a **Ahorro de batería** y toca **Sin restricciones**

¡Listo! Has configurado correctamente AdGuard para que funcione en segundo plano.

### MIUI 12.0.8

Para permitir que tu aplicación AdGuard se ejecute correctamente en segundo plano, haz lo siguiente:

En **Configuración** → **Aplicaciones** → **Administrar aplicaciones**, desplázate hacia abajo para ubicar **AdGuard** y configura el **Inicio automático** en “Activado”.

![Configuración de Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Desplázate hacia abajo hasta **Ahorro de batería**, tócalo y configúralo en “Sin restricciones”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

En **Otros permisos**, configura todos los permisos posibles en “Activado”

Ejecuta la aplicación **Seguridad**.

Toca el **ícono de engranaje** en la esquina superior derecha de la pantalla.

![Configuración de Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Toca **Aumentar velocidad** en Configuración de funciones.

![Configuración de Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Presiona **Bloquear aplicaciones**.

![Configuración de Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

En la pantalla **Bloquear aplicaciones**, configura el interruptor de la aplicación AdGuard en Activado.

![Configuración de Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

¡Es todo! Has fijado exitosamente la aplicación AdGuard.

### MIUI 12

Ve a **Configuración** → **Aplicaciones** → **Administrar aplicaciones** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Activa el Autostart
- Establece todos los permisos posibles en Otros permisos como "Activado"
- Establece el ahorro de batería en **Sin restricciones**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Ahora inicia el administrador de aplicaciones activas deslizándo hacia arriba desde la parte inferior de la pantalla y busca la aplicación AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Mantenlo pulsado hasta que aparezca un menú. Selecciona un icono de candado.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

El icono del candado debería aparecer sobre la ventana de la aplicación.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Para permitir que tu aplicación se ejecute correctamente en segundo plano, configura sus ajustes de la siguiente manera:

- Activa el Autostart

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Ajustes** → **Rendimiento de la batería & ** → desactiva la función de **Ahorro de batería**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- A continuación, abre la app **Ahorro de batería** → **AdGuard** → **Sin restricciones**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Todos los modelos

Los siguientes pasos se deben realizar en cualquier dispositivo Xiaomi que sigue cerrando la aplicación AdGuard:

#### Gestión de energía

Por favor, habilita:

- **Configuración** → **Configuración avanzada** → **Administrador de batería** → establece **Plan de energía** en **Rendimiento**
- **Configuración del dispositivo** → **Configuración avanzada** → **Administrador de batería** → **Aplicaciones protegidas** — AdGuard debe estar **Protegido**
- **Ajustes del dispositivo** → **Aplicaciones** → **AdGuard** → **Batería** → **Aviso de consumo intensivo de energía** y **Seguir funcionando después de apagar la pantalla**
- **Configuración** → **Configuración adicional** → ** Rendimiento & de batería** → **Administrar el uso de la batería de las aplicaciones** y aquí:

1. Cambia los modos de ahorro de energía a "Apagado"
1. Elige las siguientes opciones: **Ahorro de energía en segundo plano** → **Elegir aplicaciones** → **AdGuard** → **Configuración en segundo plano** → **Sin restricciones**

#### Ahorro de batería de la aplicación

Establece **Seguridad** → **Batería** → **Ahorro de batería de la aplicación** → **AdGuard** a **Sin restricciones**

#### Fijación de la app

Para configurar el trabajo en segundo plano de AdGuard en dispositivos Xiaomi, debes prestar atención a Batería y Permisos.

- Toca el botón **Tareas recientes** y desliza AdGuard hacia abajo para hacer * visibles* las opciones (como se muestra en la captura de pantalla):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Toca el ícono de ** candado**. Esto evitará que Xiaomi cierre AdGuard automáticamente. Debería verse así:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Ve a **Batería**

- Selecciona la aplicación de **ahorro de batería**

- Busca y selecciona **AdGuard**

- Configura las siguientes **Configuración de fondo**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Ve a **Permisos**

- Selecciona **Inicio automático**

- Make sure that autostart function is enabled for AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

On many Samsung devices, any app that is unused for 3 days will not be able to start from background. You should turn off **Adaptive battery** and **Put apps to sleep** options wherever possible to prevent that. Note that after an app or OS update, these settings often revert to their default values and will need to be turned off again.

### Android 11+

On Android 11, Samsung will prevent apps (including AdGuard) from working in background by default unless you exclude them from battery optimizations. To make sure AdGuard will not get killed in the background:

1. Lock AdGuard in Recent

    - Open **Recent apps**.
    - Find AdGuard.
    - Long-press the icon of the AdGuard app.

1. To keep AdGuard working properly:

    Go to **Settings** → **Apps** → **AdGuard** → **Battery** → **Optimize battery usage**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    In the drop-down menu, select **All**. Then find AdGuard on the list and set the state for it to **Don’t optimize** (on some models, there may be a switch that you need to toggle off).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    On some devices, the relevant setting may be named differently and be located in other places. Among the possible paths is:

    **Settings** → **Apps** → (⁝) menu → **Special Access** → **Optimize battery usage** → Find AdGuard on the list and uncheck it

1. Disable automatic optimization. Para hacerlo:

    Open **Battery** → (⁝) menu → Choose **Automation** → Toggle off all of the settings there

    Again, the exact path may differ, for example on some devices you should go to:

    Phone **Settings** → **Device care** → Tap the (⁝) 3-dot menu → **Advanced** → Disable **Auto optimization** and **Optimize settings**

1. If your phone has it, disable Adaptive battery:

    Open phone **Settings** → **Battery** → **More battery settings** → Toggle off **Adaptive battery**

1. Disable Sleeping apps (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** → Disable **Put unused apps to sleep**

### Android 9 & 10

- Go to **Phone settings** → **Device care** → Tap on the **Battery** item → (⁝) **3-dot menu** → **Settings** and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- Check that **Phone settings** → **Apps** → **Sleep as Android** → **Battery** → **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from Sleeping apps. To do that:

    1. Go to **Phone settings** → **Device care**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tap **Battery**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tap the **3-dot menu** → **Settings**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tap **Sleeping apps**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Wake up** AdGuard using the trashcan icon

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Old Samsung devices

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. Debería verse así:

 ![Configuración de Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Configuración de Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Toca el icono del candado

 ![Configuración de Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei y tu personalización de Android **EMUI** pertenece a los más problemáticos en el mercado con respecto a las limitaciones de proceso en segundo plano no estándar. Con la configuración predeterminada, prácticamente todas las aplicaciones que funcionan en segundo plano tendrán problemas y, en última instancia, dejarán de funcionar.

### Lanzamiento de la aplicación en algunos dispositivos EMUI 8, 9 y 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

Es posible que esta función esté disponible o no para todos los dispositivos o que esté etiquetada de forma diferente.

1. Ir al teléfono **Configuración** → **Batería** → **Inicio de aplicación**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Desactiva **Administrar todo automáticamente**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Establece AdGuard en **Administrar manualmente** y habilita todos los interruptores.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Desactiva el **Startup manager** que evita que las aplicaciones se ejecuten automáticamente después de que se inicia el teléfono.

    Ve a **Configuración** → **Todo** → **Administrador de inicio** → Desactiva AdGuard

    También para procesos en segundo plano confiables es posible que necesites desinstalar **PowerGenie** como se detalla a continuación.

### Dispositivos EMUI 9+ y PowerGenie

:::note

En los teléfonos con EMUI 9+ (Android P+) hay una aplicación de eliminación de tareas llamada PowerGenie que obliga a cerrar todas las aplicaciones que no están en la lista blanca de Huawei y no ofrece a los usuarios ninguna opción de configuración. Ve a continuación cómo desinstalarlo.

:::

Huawei es extremadamente inventivo a la hora de romper aplicaciones en tus dispositivos. Además de todas las medidas de administración de energía no estándar que se describen a continuación, introdujeron una aplicación de eliminación de tareas integrada en EMUI 9 en Android Pie.

Se llama **PowerGenie** y elimina todas las aplicaciones que no están en su lista blanca. No puedes agregar aplicaciones personalizadas a tu lista blanca predefinida. Esto significa que no hay otra forma de lograr el funcionamiento adecuado de la aplicación en Huawei que desinstalando PowerGenie.

Lamentablemente, esta es una aplicación del sistema que solo se puede desinstalar por completo mediante ADB (Android Debug Bridge).

:::note Fuente

[Foro XDA](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**Necesitas**:

No está confirmado, pero podría ser posible simplemente deshabilitar PowerGenie en **Configuración del teléfono** → **Aplicaciones**. Si esta configuración está presente en la configuración de tu dispositivo, puedes omitir los siguientes pasos. Sin embargo, será necesario volver a aplicarlo cada vez que reinicies tu dispositivo. Si no existe dicha configuración, sigue estas instrucciones:

1. [Instala ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) en tu computadora;

1. Conecta tu teléfono con un cable de datos;

1. Habilita las [Opciones de desarrollador](https://developer.android.com/studio/debug/dev-options.html);

1. Habilita la ** depuración USB** dentro de las opciones de desarrollador en tu teléfono;

1. Ejecuta los siguientes comandos en tu computadora:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

Si AdGuard sigue cerrándose, intenta también ejecutar

`adb shell pm stopservice hwPfwService`

### Dispositivos EMUI 6+ (y algunos dispositivos EMUI 5)

- **Configuración del teléfono** → **Configuración avanzada** → **Administrador de batería** → **Plan de energía** establecido en **Rendimiento**;
- **Configuración del teléfono** → **Configuración avanzada** → **Administrador de batería** → **Aplicaciones protegidas** — establece AdGuard como **Protegido**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite and Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### Early Huawei

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap on the lock icon:

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Besides, to set up the background work of AdGuard more effectively, you should open device settings and do the following:

- Go to **Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** in the main settings and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) → **Special access** → choose **Ignore battery optimization** → press **Allowed** → **All apps** → find AdGuard on the list and set it to **Deny**.

## Meizu

Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to **Advanced Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** section and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**.

## Nokia

Nokia devices running Android 9+ have **The Evenwell Power saver** disabled, which was the main culprit for killing background processes. If AdGuard still gets killed on your Nokia phone, check out the [legacy instruction](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Instala ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) en tu computadora;

1. Conecta tu teléfono con un cable de datos;

1. Habilita las [Opciones de desarrollador](https://developer.android.com/studio/debug/dev-options.html);

1. Habilita la ** depuración USB** dentro de las opciones de desarrollador en tu teléfono;

1. Uninstall the **com.evenwell.emm** package via the following ADB commands:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 and 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Instala ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) en tu computadora;

1. Conecta tu teléfono con un cable de datos;

1. Habilita las [Opciones de desarrollador](https://developer.android.com/studio/debug/dev-options.html);

1. Habilita la ** depuración USB** dentro de las opciones de desarrollador en tu teléfono;

1. Grant MacroDroid (or your choice of automation app) the ability to write to the global settings store by entering this command:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Create a task triggered at **Device Boot** that performs the following:

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### Other Nokia models

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

From now on, AdGuard should work normally and use the standard Android battery optimizations until Power Saver restarts.

An alternative, more permanent solution for more tech-savvy users:

1. [Instala ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) en tu computadora;

1. Conecta tu teléfono con un cable de datos;

1. Habilita las [Opciones de desarrollador](https://developer.android.com/studio/debug/dev-options.html);

1. Habilita la ** depuración USB** dentro de las opciones de desarrollador en tu teléfono;

1. Uninstall the **com.evenwell.powersaving.g3** package via the following ADB commands:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) when you turn the screen off. So far, a workaround for this is:

Go to **Security Centre** → tap **Privacy Permissions** → **Startup manager** and allow AdGuard app to run in background.

Other solutions:

- Pin AdGuard to the recent apps screen
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Turn off battery optimizations

## OnePlus

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the AdGuard's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps.

### Locking the app

- Go to **Settings**

- **Battery** → **Battery optimization**

- Find AdGuard

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Open recent apps menu (as showed on this screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard app:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Por favor, desactívalo para AdGuard.

:::

### Battery optimization

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### App Auto-Launch

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Por favor, desactívalo para AdGuard.

### Enhanced / Advanced optimization

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### Recent apps clearing behaviour

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. Para solucionarlo:

Ve a **Configuración** → **Batería** → Deshabilita **Modo STAMINA**

![Modo Stamina de Sony *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

En Android 11+, en la misma pantalla con el modo STAMINA, hay una configuración llamada **Batería adaptable**, también debes desactivarla.

También es necesario configurar AdGuard como exceptuado de la función de ahorro de energía:

**Configuración del sistema** → **Aplicaciones & Notificaciones** → **Avanzadas** → **Acceso a aplicaciones especiales** → **Función de ahorro de energía** → Cambia AdGuard a **Exceptuadas**

## Wiko

Los dispositivos Wiko son problemáticos en términos de optimizaciones de procesos en segundo plano no estándar. Para permitir que AdGuard funcione en segundo plano, haz lo siguiente:

- Ve a **Asistente del teléfono** → **Batería** → desactiva el **Modo ecológico**
- Regresa y ve al **Modo manual**
- Toca el ícono del engranaje **** en la parte superior derecha → **Lista blanca de aplicaciones en segundo plano** → Selecciona **AdGuard**

## Dispositivos Android de serie Pixel/Nexus/Nubia/Essential

El sistema operativo Android estándar normalmente no entra en conflicto con las aplicaciones que se ejecutan en segundo plano, pero si enfrenta algún problema, deberá activar el modo **VPN siempre activo**.

- Ve a **Configuración** → **Red e Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Toca **VPN** y elige **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Configura el **Modo VPN siempre activo**

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)
