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

- Asegúrate de que la función de inicio automático esté habilitada para AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

En muchos dispositivos Samsung, cualquier aplicación que no se utilice durante 3 días no podrá iniciarse en segundo plano. Debes desactivar las opciones **Batería adaptable** y **Poner aplicaciones en suspensión** siempre que sea posible para evitarlo. Ten en cuenta que después de una actualización de la aplicación o del sistema operativo, estas configuraciones suelen volver a sus valores predeterminados y será necesario desactivarlas nuevamente.

### Android 11+

En Android 11, Samsung evitará que las aplicaciones (incluido AdGuard) funcionen en segundo plano de forma predeterminada, a menos que las excluya de las optimizaciones de la batería. Para asegurarte de que AdGuard no se elimine en segundo plano:

1. Bloquea AdGuard en Recientes

    - Abre **Aplicaciones recientes**.
    - Encuentra AdGuard.
    - Mantén presionado el ícono de la aplicación AdGuard.

1. Para mantener AdGuard funcionando correctamente:

    Ve a **Configuración** → **Aplicaciones** → **AdGuard** → **Batería** → **Optimizar el uso de la batería**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    En el menú desplegable, selecciona **Todos**. Luego, busca AdGuard en la lista y configura el estado en **No optimizar** (en algunos modelos, puede haber un interruptor que necesites desactivar).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    En algunos dispositivos, la configuración relevante puede tener un nombre diferente y estar ubicada en otros lugares. Entre los caminos posibles, está:

    **Configuración** → **Aplicaciones** → Menú (⁝) → **Acceso especial** → **Optimizar el uso de la batería** → Busca AdGuard en la lista y desmárcalo

1. Desactivar la optimización automática. Para hacerlo:

    Abre **Batería** → Menú (⁝) → Elige **Automatización** → Desactiva todas las configuraciones allí

    Nuevamente, la ruta exacta puede variar. Por ejemplo, en algunos dispositivos debes ir a:

    **Configuración del celular** → **Cuidado del dispositivo** → Toca el menú de 3 puntos (⁝) → **Avanzado** → Deshabilita **Optimización automática** y **Optimizar configuración**

1. Si tu celular lo tiene, desactiva la Batería adaptable:

    Abre **Ajustes** → **Batería** → **Más ajustes de batería** → Desactiva **Batería adaptativa**

1. Deshabilita las aplicaciones inactivas (el nombre exacto de esta configuración y la ruta a la misma pueden variar según el dispositivo):

    Abre **Ajustes** → **Batería** → **Límites de uso en segundo plano** → Deshabilita **Poner en reposo las aplicaciones no utilizadas**

### Android 9 & 10

- Ve a **Configuración** → **Cuidado del dispositivo** → Toca el elemento **Batería** → **Menú de 3 puntos (⁝)** → **Configuración** y desmarca **Poner aplicaciones no utilizadas en reposo** y **Deshabilitar automáticamente aplicaciones no utilizadas**.

- Verifica si **Configuración** → **Aplicaciones** → **Dormir como Android** → **Batería** → **Restricción en segundo plano** está configurada como **La aplicación puede usar la batería en segundo plano** para AdGuard.

- Elimina AdGuard de las aplicaciones inactivas. Para ello:

    1. Ve a **Configuración** → **Cuidado del dispositivo**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Toca **Batería**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Toca el **Menú de 3 puntos** → **Configuración**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Toca **Aplicaciones inactivas**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Despierta** AdGuard usando el icono de la papelera

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Dispositivos Samsung antiguos

Para los primeros dispositivos Samsung, no es necesario configurar la operación en segundo plano, pero si en tu caso la aplicación AdGuard se cierra o desaparece de las tareas recientes después de un tiempo, haz lo siguiente:

- Toca el botón **Tareas recientes**, toca el ícono **Configuraciones adicionales**. Debería verse así:

 ![Configuración de Samsung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Toca **Bloquear aplicaciones**:

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
- **Configuración** → **Aplicaciones** → **Tu aplicación** → **Batería** → **Aviso de consumo intensivo de energía** `[uncheck]` y **Seguir funcionando después de apagar la pantalla** `[check]`;
- **Configuración del teléfono** → **Aplicaciones** → **Avanzadas (en la parte inferior)** → **Ignorar optimizaciones** → Presiona Permitido → **Todas las aplicaciones** → Busca AdGuard en la lista y configúralo en **Permitir**.

#### Huawei P9 Plus

Abre la configuración del dispositivo → **Aplicaciones** → **Configuración** → **Acceso especial** → elige **Ignorar optimización de batería** → selecciona **Permitir** para AdGuard.

### Huawei P20, Huawei Honor 9 Lite y Huawei Mate 9 Pro

Abre la configuración del dispositivo → **Batería** → **Inicio de aplicación** → configura AdGuard en **Administrar manualmente** y asegúrate de que todo esté activado.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Configuración** → **Batería** → **Inicio de la aplicación** → configura AdGuard en **Administrar manualmente** y asegúrate de que todo esté encendido. También para procesos en segundo plano confiables es posible que necesites desinstalar PowerGenie como se describe anteriormente.

### Los primeros Huawei

Los dispositivos Huawei más antiguos son los más fáciles de configurar, basta con realizar dos simples pasos para bloquear AdGuard en segundo plano para que no sea terminado por el proceso de ahorro de batería o de apagado en segundo plano.

- Toca el botón **Tareas recientes**:

    ![Aplicaciones recientes de Huawei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Toca el icono del candado:

    ![Bloqueo de Huawei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Además, para configurar el trabajo en segundo plano de AdGuard de manera más efectiva, debes abrir la configuración del dispositivo y hacer lo siguiente:

- Ve a **Configuración** → abre **Administrador de batería** → establece **Plan de energía** en **Rendimiento**;
- Luego selecciona **Aplicaciones protegidas** en el **Administrador de batería** y verifica si AdGuard está protegido;
- Ve a **Aplicaciones** en los ajustes principales y toca allí AdGuard → elige **Batería** → activa **Preguntar si consume mucha energía** y **Seguir funcionando después de apagar la pantalla**;
- A continuación, en la sección **Apps** abre **Ajustes** (en la parte inferior) → **Acceso especial** → elige **Ignorar optimización de batería** → pulsa **Permitido** → **Todas las apps** → busca AdGuard en la lista y establécelo en **Denegar**.

## Meizu

Meizu tiene casi el mismo enfoque en las limitaciones del proceso en segundo plano que Huawei y Xiaomi. Para evitar deshabilitar el trabajo en segundo plano de AdGuard y cualquier otra aplicación, ajusta la siguiente configuración:

- Ve a **Configuración avanzada** → abre **Administrador de batería** → establece **Plan de energía** en **Rendimiento**;
- Luego seleccionA **Aplicaciones protegidas** en el **Administrador de batería** y verifica si AdGuard está protegido;
- Ve a la sección **Aplicaciones** y toca AdGuard allí → elige **Batería** → habilita **Aviso de uso intensivo de energía** y **Seguir funcionando después de que la pantalla se apague**.

## Nokia

Los dispositivos Nokia con Android 9+ tienen el **Ahorrador de energía Evenwell** deshabilitado, que era el principal culpable de matar los procesos en segundo plano. Si AdGuard aún falla en tu teléfono Nokia, consulta la [instrucción antigua](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Instala ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) en tu computadora;

1. Conecta tu teléfono con un cable de datos;

1. Habilita las [Opciones de desarrollador](https://developer.android.com/studio/debug/dev-options.html);

1. Habilita la ** depuración USB** dentro de las opciones de desarrollador en tu teléfono;

1. Desinstala el paquete **com.evenwell.emm** mediante los siguientes comandos ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 y 5.1

En estos dispositivos hay un eliminador de tareas llamado **DuraSpeed** que finaliza todas las aplicaciones en segundo plano. No se puede desinstalar ni deshabilitar por los medios habituales. Estas acciones requieren ADB, e incluso entonces, cuando está deshabilitado, DuraSpeed se volverá a habilitar al reiniciar. Necesita una aplicación de tareas como [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) para desactivar automáticamente DuraSpeed.

1. [Instala ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) en tu computadora;

1. Conecta tu teléfono con un cable de datos;

1. Habilita las [Opciones de desarrollador](https://developer.android.com/studio/debug/dev-options.html);

1. Habilita la ** depuración USB** dentro de las opciones de desarrollador en tu teléfono;

1. Concede a MacroDroid (o a la aplicación de automatización que elijas) la capacidad de escribir en el almacenamiento de ajustes globales introduciendo este comando:

    `adb shell pm grant com.arlosoft.macrodroid android.permiso.WRITE_SECURE_SETTINGS`

1. Crea una tarea activada en **Arranque del dispositivo** que realiza lo siguiente:

    - Configuración del sistema: tipo **Global**, nombre `setting.duraspeed.enabled`, valor **-1**
    - Configuración del sistema: tipo ** System**, nombre `setting.duraspeed.enabled`, valor **-1**
    - Configuración del sistema: tipo **Global**, nombre `setting.duraspeed.enabled`, valor **0**
    - Configuración del sistema: tipo ** System**, nombre `setting.duraspeed.enabled`, valor **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    Necesita configuraciones de tipo **Global** y **Sistema**. La captura de pantalla muestra solo Global como ejemplo.


:::

### Otros modelos de Nokia

- Ve a **Configuración** → **Aplicaciones** → **Ver todas las aplicaciones**.

- Toca en el menú de la esquina superior derecha → **Mostrar sistema**.

Busca la aplicación de **ahorro de energía** en la lista, selecciónela y toca **Forzar cierre**. Permanecerá detenido por un tiempo pero se reiniciará en algún momento.

A partir de ahora, AdGuard debe funcionar normalmente y utilizar las optimizaciones de batería estándar de Android hasta que se reinicie Power Saver.

Una solución alternativa más permanente para los usuarios más expertos en tecnología:

1. [Instala ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) en tu computadora;

1. Conecta tu teléfono con un cable de datos;

1. Habilita las [Opciones de desarrollador](https://developer.android.com/studio/debug/dev-options.html);

1. Habilita la ** depuración USB** dentro de las opciones de desarrollador en tu teléfono;

1. Desinstala el paquete **com.evenwell.powersaving.g3** mediante los siguientes comandos ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

A veces, los servicios en segundo plano se eliminan (incluidos los servicios de accesibilidad, que luego deben volver a habilitarse) cuando apagas la pantalla. Hasta ahora, una solución alternativa para esto es:

Ve a **Centro de seguridad** → toca **Permisos de privacidad** → **Administrador de inicio** y permite que la aplicación AdGuard se ejecute en segundo plano.

Otras soluciones:

- Fijar AdGuard a la pantalla de aplicaciones recientes
- Habilitar AdGuard en la lista de aplicaciones dentro del “administrador de inicio” y la “lista de aplicaciones flotante” de la aplicación de seguridad (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Desactivar las optimizaciones de batería

## OnePlus

Los dispositivos con OxygenOS integrado son los más problemáticos, con su limpieza de caché específica del sistema operativo y RAM libre, incluida la optimización del sistema operativo. Además, OxygenOS puede interrumpir el trabajo de AdGuard si no lo utilizas durante un tiempo. Para evitar estas consecuencias no deseadas, sigue estos pasos.

### Bloqueo de la aplicación

- Ve a **Configuración**

- **Batería** → **Optimización de la batería**

- Encuentra AdGuard

- Pulsa sobre él y selecciona la opción **No optimizar**

- Pulsa **Listo** para guardar

- Abre el menú de aplicaciones recientes (como se muestra en esta captura de pantalla):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Bloquea la aplicación AdGuard:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

En algunos teléfonos OnePlus también hay una cosa llamada App Auto-Launch y Deep Optimization que esencialmente impide que las aplicaciones funcionen en segundo plano. Por favor, desactívalo para AdGuard.

:::

### Optimización de la batería

- Abre la configuración del dispositivo → **Batería** → **Optimización de la batería** → cambia a la lista **Todas las aplicaciones** (menú superior) → elige AdGuard → activa **No optimizar**

- Abre la configuración del dispositivo → **Batería** → **Optimización de la batería** → Menú de tres puntos (⁝) → **Optimización avanzada** → Deshabilitar optimización profunda

### Inicio automático de la aplicación

El inicio automático de aplicaciones (en algunos teléfonos OnePlus) esencialmente evita que las aplicaciones funcionen en segundo plano. Por favor, desactívalo para AdGuard.

### Optimización mejorada/avanzada

Para OnePlus 6 y superior:

- Abre **Ajustes del sistema** → **Batería** → **Optimización de la batería** → Menú de tres puntos (⁝) → **Optimización avanzada**
- Desactiva **Optimización profunda** / **Batería adaptable**
- Deshabilitar **Optimización del modo de suspensión**. OnePlus intenta aprender cuándo estás en modo de suspensión y, en esos momentos, desactivará las conexiones de red del teléfono. Esta configuración evitará que se envíen notificaciones push.

Para OnePlus inferiores a 6:

- Desactiva **Configuración del sistema** → **Batería** → **Optimización de la batería** → Menú de tres puntos (⁝) → **Optimización mejorada**.

### Comportamiento de limpieza de aplicaciones recientes

Normalmente, cuando deslizas una aplicación hacia afuera, esta no se cierra. Sin embargo, en OnePlus esto puede funcionar de forma diferente. Es posible que el administrador de comportamiento de limpieza de aplicaciones recientes esté configurado de manera tal que al deslizar la aplicación para cerrarla, la cierre. Para volver al modo “normal”:

Ve a **Configuración** → **Avanzado** → **Administración de aplicaciones recientes** → Cambia a **Normal clear**

## Sony

Sony fue el primer desarrollador de sistemas operativos móviles en introducir una optimización de procesos en segundo plano no estándar. Se llama modo **Stamina** y rompe instantáneamente todos los procesos en segundo plano si está habilitado. Para solucionarlo:

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

## Realme

En los dispositivos que ejecutan Realme UI 4.0, hay tres configuraciones clave para garantizar que AdGuard funcione correctamente en segundo plano.

1. Configuración de la app AdGuard:

    - Mantén presionado el icono de AdGuard
    - Del menú que aparece, selecciona **Información de la app**
    - Ve a **Uso de batería** y habilita todas las opciones:
        - Permite el funcionamiento en segundo plano
        - Permite la actividad en primer plano
        - Permite el inicio automático
    - En la sección **Información de la app**, desplázate hacia abajo y desactiva la opción **Pausar la actividad de la app si no se utiliza**

    ![VPN siempre activa *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Configura la batería:

    - Ve a **Configuración → Batería → Más configuraciones → Optimizar el uso de la batería**
    - Encuentra AdGuard en la lista y habilita **No optimizar**
    - En **Otra configuración**, verifica la sección **App Quick Freeze** y deshabilítala para AdGuard

    ![VPN siempre activa *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Habilita *VPN siempre activa* para AdGuard:

    - Ve a **Configuración → Compartir & conexión → VPN**
    - Encuentra **AdGuard** y habilita la opción **VPN siempre activa**

    ![VPN siempre activa *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
