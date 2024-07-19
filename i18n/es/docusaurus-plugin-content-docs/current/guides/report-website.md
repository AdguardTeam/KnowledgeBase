---
title: How to report websites and apps
sidebar_position: 3
---


Al usar bloqueadores de anuncios, es posible que se enfrente a un trabajo incorrecto de ciertos sitios web o elementos de página rotos. Estos problemas pueden surgir debido a una variedad de factores:

- Reglas de usuario incorrectas;
- Algoritmos modificados para agregar anuncios;
- Se agregaron filtros/extensiones de desarrolladores externos;
- Los autores de uno de los filtros cometieron un error al crear la regla;
- Reinserción publicitaria. Descubre más sobre este método en nuestro [blog](https://adguard.com/en/blog/ad-reinsertion.html).

You can help us by filling in a form with examples of ads you have encountered. Para hacerlo, por favor, utiliza las instrucciones para tu sistema operativo.

## Reportar un sitio web {#report}

:::note

Cuando envías una queja a través de la app o mediante AdGuard Browser Assistant, toda la información se completa automáticamente. A excepción de las capturas de pantalla, tendrás que hacerlas y adjuntarlas tú mismo. Si está utilizando un [enlace directo](https://reports.adguard.com/new_issue.html), deberá ingresar los datos manualmente.

:::

Para informar sobre la reinserción de un anuncio o la visualización incorrecta de un sitio web, debes:

### Extensión de navegador {#extension}

- Abre la configuración de la extensión del navegador haciendo clic en el icono correspondiente;
- Haz clic en **Reportar un problema**:

![extension_issue *mobile_border](https://cdn.adtidy.org/blog/new/5si74extension.png)

- Una vez que hayas completado el formulario, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### Windows {#windows}

- Abre [AdGuard Browser Assistant](/adguard-for-windows/browser-assistant) y presiona **Reportar un problema**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- Completa el formulario para reportar una queja;
- Una vez hecho esto, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### Android {#android}

- Abre la configuración de AdGuard;
- Elige **Soporte**, luego **Informe de bloqueo incorrecto**:

![android *mobile_border](https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg)

- Una vez que hayas completado el formulario, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### Mac {#mac}

- Open [AdGuard Browser Assistant](/adguard-for-mac/features/browser-assistant) and hit **Report an issue**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- Completa el formulario para reportar una queja;
- Una vez hecho esto, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### iOS {#ios}

- Abre la configuración de AdGuard;
- Elige **Soporte**, luego **Informe de bloqueo incorrecto**:

![ios *mobile_border](https://cdn.adtidy.org/blog/new/fnl9aios.jpeg)

- Completa el formulario para reportar una queja;
- Una vez hecho esto, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

## Rellenando el formulario {#form}

:::note

Cuando envías una queja a través de la app o mediante AdGuard Assistant, toda la información se completa automáticamente. A excepción de las capturas de pantalla, tendrás que hacerlas y adjuntarlas tú mismo. Si está utilizando un [enlace directo](https://reports.adguard.com/new_issue.html), deberá ingresar los datos manualmente.

:::

1. El formulario comienza detallando el tipo y versión de un producto;

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Especifica el tipo de problema e información adicional sobre el uso de software de terceros (antivirus, VPN);

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Ingresa la dirección de la página y el navegador (o el enlace de descarga en el caso de una app) donde encontraste un problema;

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. La configuración de la app debe especificarse:

    - Filtros que utilizas;
    - Configuración del modo sigiloso, si esta función está habilitada.

    ![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Haz una captura de pantalla](../take-screenshot) que capture la esencia de un problema;

    - **Importante**: oculta tu información personal (correo electrónico, número de teléfono, etc.) porque las capturas de pantalla estarán disponibles públicamente.

    ![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Escribe informaciones adicionales que ayudarán a los desarrolladores de filtros a comprender la situación;

    También ingresa tu cuenta en **GitHub**, si está disponible (es necesario que los desarrolladores puedan contactarte en caso de que necesiten detalles adicionales);

    ![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Revisa cada paso antes de enviar el formulario;

    ![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. Recibirás un enlace para seguir el progreso de tu tarea.

    ![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## Diagnóstico de un problema {#issue}

Esta es una opción para aquellos que no temen las dificultades y no les importa intentar encontrar el problema por sí mismos. Esto no requiere ninguna habilidad especial o conocimiento profundo de HTML y CSS.

Por ejemplo, se enfrentas a una situación en la que tu sitio web favorito no se abre, la autorización se ha interrumpido o algunos elementos de la página se muestran incorrectamente. La causa puede ser el uso de una configuración específica de filtro/extensión/modo sigiloso. Para diagnosticar estos problemas, debes hacer lo siguiente:

### **Filtros**

1. Deshabilita el **Bloqueador de anuncios**;
2. Si resolvió el problema, vuelve a habilitar el módulo y deshabilita los filtros uno por uno. Esto se hace para identificar filtros que "rompen" la página;
3. Si has logrado averiguar qué filtro "rompe" una página, debes informar a los desarrolladores al completar el formulario (ver arriba). En este caso, es recomendable volver a la configuración inicial;
4. Si desactivar todos los filtros no ha producido ningún resultado, aplica la regla **@@||example.com^$document,extensión**; donde **ejemplo.com** es un nombre de sitio de ejemplo que debe ser reemplazado por tu propia opción;
5. En caso de fallo (problema no resuelto), pasa a la sección **Modo sigiloso**.

### **Modo Stealth**

1. Deshabilita el **Modo sigiloso**;
2. Si esto resolvió el problema, enciende el módulo y desactiva las opciones del **Modo sigiloso** una por una. Esto se hace para detectar qué filtros están "rompiendo" la página;
3. Si has logrado detectar qué configuración "rompe" una página, debes informar a los desarrolladores al completar el formulario (ver arriba). En este caso, es conveniente volver a la configuración inicial;
4. En caso de fallo (problema no resuelto), dirígete a la sección **Extensiones**.

### **Extensiones**

1. Deshabilita **Extensiones**;
2. Si esto resolvió el problema, enciende el módulo y desactiva las configuraciones de **Extensiones** una por una. Esto se hace para averiguar qué configuración "rompe" la página;
3. Si has logrado detectar qué configuración "rompe" una página, informa a los desarrolladores al completar el formulario (ver arriba). En este caso, es conveniente volver a la configuración inicial.

### **Bloqueadores de terceros**

Algunos navegadores y programas antivirus (como Yandex Browser, Kaspersky, etc.) tienen bloqueadores de anuncios incorporados. Ellos pueden afectar y causar problemas en el funcionamiento de los sitios. If you are using such programs, first make sure that the problem is caused by **AdGuard**: disable **AdGuard** filtering and try to reproduce the problem. Si permanece, significa que el problema es causado por otra aplicación o navegador. Si el problema es causado por **AdGuard**, sigue los pasos descritos en los párrafos anteriores.
