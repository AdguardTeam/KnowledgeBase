---
title: Cómo denunciar un sitio web
sidebar_position: 3
---


Al usar bloqueadores de anuncios, es posible que se enfrente a un trabajo incorrecto de ciertos sitios web o elementos de página rotos. Estos problemas pueden surgir debido a una variedad de factores:

- Reglas de usuario incorrectas;
- Algoritmos modificados para agregar anuncios;
- Se agregaron filtros/extensiones de desarrolladores externos;
- Los autores de uno de los filtros cometieron un error al crear la regla;
- Reinserción publicitaria. Más información sobre este método en nuestro blog [](https://adguard.com/blog/ad-reinsertion.html).

Puedes ayudarnos completando un formulario de solicitud con ejemplos de anuncios a los que viste. Para hacerlo, por favor, utiliza las instrucciones para tu sistema operativo.

## Reportar un sitio web {#report}

:::note

When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. A excepción de las capturas de pantalla, tendrás que hacerlas y adjuntarlas tú mismo. Si está utilizando un [enlace directo](https://reports.adguard.com/new_issue.html), deberá ingresar los datos manualmente.

:::

Para informar sobre la reinserción de un anuncio o la visualización incorrecta de un sitio web, debes:

### Extensión de navegador {#extension}

- Abre la configuración de la extensión del navegador haciendo clic en el icono correspondiente;
- Haz clic en **Reportar un problema**:

![extensión *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/extension_issue.png)

- Una vez que hayas completado el formulario, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### Windows {#windows}

- Abre [AdGuard Browser Assistant](/adguard-for-windows/browser-assistant) y presiona **Reportar un problema**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- Completa el formulario para reportar una queja;
- Una vez hecho esto, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### Android {#android}

- Abre la configuración de AdGuard;
- Choose **Support**, then **Send Feedback** → **Missed ad**/**Incorrect blocking**:

![android *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/android.png)

- Una vez que hayas completado el formulario, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### Mac {#mac}

- Abre [AdGuard Browser Assistant](/adguard-for-mac/browser-assistant) y presiona **Reportar un problema**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- Completa el formulario para reportar una queja;
- Una vez hecho esto, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

### iOS {#ios}

- Abre la configuración de AdGuard;
- Elige **Soporte**, luego **Informe de bloqueo incorrecto**:

![ios *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/ios_issue.png)

- Completa el formulario para reportar una queja;
- Una vez hecho esto, se creará automáticamente una propuesta en [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). También habrá un enlace para monitorear el progreso hacia la solución de tu problema.

## Rellenando el formulario {#form}

:::note

When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. A excepción de las capturas de pantalla, tendrás que hacerlas y adjuntarlas tú mismo. Si está utilizando un [enlace directo](https://reports.adguard.com/new_issue.html), deberá ingresar los datos manualmente.

:::

1. Filling in the form starts with detailing the type and version of a product;

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Specify the type of problem and additional information on using third-party software (antivirus, VPN);

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Enter the address of the page and the browser (or the download link in case of an app) where you've encountered a problem;

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. Application configuration must be specified:

    - Filtros que utilizas;
    - Stealth mode settings, if this function is enabled.

    ![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Provide a screenshot](../take-screenshot) that captures the essence of a problem;

    - **Important**: Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.

    ![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Provide additional information that will help filter developers understand the situation;

    Also enter your account on **GitHub**, if available (it's necessary for developers to be able to reach you in case they need some additional details);

    ![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Check each step before sending the form;

    ![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. You'll be provided with a link to track progress on your task.

    ![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## Diagnóstico de un problema {#issue}

This option is suitable for those who aren’t afraid of difficulties and don’t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS.

For example, you are faced with a situation that your favorite website won’t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:

### **Filtros**

1. Disable **Ad Blocker**;
2. If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;
3. If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. If turning off all the filters hasn't produced any results, apply rule **@@||example.com^$document,extension**; where **example.com** is an example site name that needs to be replaced by your own option;
5. In case of failure (issue not solved), turn to section **Stealth Mode**.

### **Modo Stealth**

1. Disable **Stealth Mode**;
2. If this solved the problem, turn the module on and turn off the **Stealth Mode** options one by one. This is done to detect which filters are "breaking" the page;
3. If you have managed to to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. In case of failure (issue not solved), turn to section **Extensions**.

### **Extensiones**

1. Disable **Extensions**;
2. If this solved the problem, turn on the module and turn off **Extensions** settings one by one. This is done to find out which setting "breaks" the page;
3. If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.

### **Bloqueadores de terceros**

Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites. If you use such programs, make sure that the problem is on the side of **AdGuard**: disable **AdGuard** filtering and try to repeat the problem. If it remains, it means that the problem is caused by another application or browser. If the problem is caused by **AdGuard**, follow the steps described in the previous paragraphs.
