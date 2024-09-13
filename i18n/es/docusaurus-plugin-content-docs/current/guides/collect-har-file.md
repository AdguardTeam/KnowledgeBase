---
title: How to generate a HAR file
sidebar_position: 1
---

Los archivos HAR ayudan a nuestros equipos de soporte técnico a solucionar problemas complejos. Para crear estos archivos, recomendamos usar Chrome o Firefox. Sin embargo, IE 11, Edge y Safari también brindan capacidad de exportación y generación de archivos `.har`.

## Chrome {#chrome}

Para crear archivos HAR en Chrome, sigue estos pasos:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

1. Abre **Herramientas para desarrolladores**:

    - Desde el menú: **Menú → Más herramientas → Herramientas para desarrolladores**.
    - Teclado: **Ctrl+Shift+C**, o **Ctrl+Alt+I**, o **⌥+⌘+I para Mac**.

1. Haz clic en la pestaña **Red**.

1. Localiza el botón redondo en la parte superior izquierda de la pestaña Red y confirma que está en modo de grabación en rojo. Si está en gris, haz clic para que se vuelva rojo e iniciar la grabación.

1. Utiliza el botón **Borrar** (el botón circular con una línea que lo atraviesa al lado del botón de grabar) para borrar toda la actividad anterior.

1. Seleccione la casilla de verificación **Conservar registro** en la pestaña Red.

1. Marca la casilla de verificación **Deshabilitar caché**.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reproduce los pasos que crean el problema.

1. Guarda la sesión como un archivo .har haciendo clic derecho en la cuadrícula y seleccionando **Guardar como HAR con contenido**.

1. Envíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Edge {#edge}

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

1. Abre **Herramientas para desarrolladores**:

    - Desde el menú: **Menú → Más herramientas → Herramientas para desarrolladores**.
    - Teclado: **Ctrl+Shift+C**, o **Ctrl+Alt+I**, o **⌥+⌘+I para Mac**.

1. Haz clic en la pestaña **Red**.

1. Localiza el botón redondo en la parte superior izquierda de la pestaña Red y confirma que está en modo de grabación en rojo. Si está en gris, haz clic para que se vuelva rojo e iniciar la grabación.

1. Utiliza el botón **Borrar** (el botón circular con una línea que lo atraviesa al lado del botón de grabar) para borrar toda la actividad anterior.

1. Seleccione la casilla de verificación **Conservar registro** en la pestaña Red.

1. Marca la casilla de verificación **Deshabilitar caché**.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reproduce los pasos que crean el problema.

1. Guarda la sesión como un archivo .har haciendo clic derecho en la cuadrícula y seleccionando **Guardar como HAR con contenido**.

1. Envíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Firefox {#firefox}

Para crear archivos HAR en Firefox, sigue estos pasos:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

1. Abre las Herramientas de desarrollador en modo **Red**:

    - Desde el menú: **Menú → Desarrollador web → Red**.
    - Teclado: **Ctrl+Shift+C**o **⌥+⌘+E (Mac)**.

1. Ten en cuenta que el botón **Reproducir/Pausar** está ubicado en la parte superior izquierda de la pestaña Red.

    - El botón debe estar en modo de reproducción.

1. Si actualmente se muestra alguna información en la cuadrícula, bórrala haciendo clic en el botón **Eliminar papelera** al lado del botón reproducir/pausar.

1. Seleccione la casilla de verificación **registros persistentes** en la pestaña Red.

1. Marca la casilla de verificación **Deshabilitar caché**.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reproduce los pasos que crean el problema.

1. Guarde la sesión como un archivo .har haciendo clic derecho en la cuadrícula y seleccionando **Guardar todo como HAR**.

1. Envíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Internet Explorer 11 {#ie11}

Para crear archivos HAR en Internet Explorer 11, sigue estos pasos:

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

1. Abre las Herramientas de desarrollador en modo **Red**:

    - En el menú Herramientas: **Herramientas para desarrolladores** → **Pestaña de red**.
    - Teclado: **F12 →Red**.

1. Ten en cuenta que el botón para iniciar sesión de creación de perfiles **Play** y detener la creación de perfiles **Stop** está ubicado en la parte superior izquierda de la pestaña Red.

    - El botón Reproducir estará gris cuando se esté grabando y el botón Detener estará rojo. Activa el modo **Play**.

1. Borra cualquier información de sesión usando el botón **Borrar sesión** en la pestaña Red. Pasa el cursor sobre los iconos para ver los nombres.

    - El botón **Borrar sesión** es un ícono de tres líneas con una x.

1. Marca la casilla de verificación **Deshabilitar caché**.

1. Reproduce los pasos que crean el problema.

1. Guarda la sesión como un archivo .har haciendo clic en el botón **Guardar disco** (Exportar como HAR) en la pestaña Red.

1. Envíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Safari {#safari}

Para crear archivos HAR en Safari, sigue estos pasos:

1. Consulta la barra de menú de Safari en la parte superior de la pantalla para ver un menú **Desarrollar**.

    - Si no está visible, actívalo yendo a **Safari → Configuración → Avanzado**.
    - Marque la casilla de verificación en la parte inferior junto a **Mostrar menú Desarrollar en la barra de menú**.

1. Ve a la URL donde ocurre el problema. No reproduzca el problema todavía.

1. Abre la pestaña **Red** en Web Inspector:

    - En el menú: **Desarrollar → mostrar Web Inspector → Red**.
    - Teclado: **⌥+⌘+ I → Red**

1. Marca la casilla de verificación **Conservar registro** en el lado izquierdo de la pestaña Red, dentro del menú **Otras opciones de filtro...**.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Borra los elementos actuales de la Red haciendo clic en el ícono **Vaciar Papelera** en el extremo derecho de la pestaña Red.

    - Teclado: **⌘+K**

1. Marca la casilla de verificación **Deshabilitar cachés**.

1. Reproduce los pasos que crean el problema.

1. Guarda la sesión como un archivo .har haciendo clic en el ícono **Exportar** al lado del ícono **Vaciar papelera**.

1. Envíalo al soporte de AdGuard (support@adguard.com) con una explicación detallada del problema. Las capturas de pantalla de apoyo también pueden ser útiles.

## Android {#android}

Para crear archivos HAR, sigue estos pasos:

1. Abre AdGuard y ve a **Configuración**.

1. Selecciona **Avanzado** en el menú.

1. Selecciona **Configuración de nivel bajo**

1. Activa `pref.har.capture` (tendrás que reiniciar la protección).

1. Ahora reproduce el problema: abre la app y realiza las acciones necesarias para que aparezca el anuncio.

1. Ahora desactiva `pref.har.capture` de nuevo.

1. Regresa y toca **Exportar registros e información del sistema** → **Guardar**.

## Windows {#windows}

1. Abre **Configuración*** → **Configuración general** → **Configuración avanzada** y desplázate hacia abajo.

1. Marca la casilla **Habilitar el almacenamiento HAR**.

1. Reproduce el problema.

1. Ve a **Configuración general** → Haz clic en **Exportar registros** → **Guardar**.

1. Deshabilita la escritura HAR desmarcando la casilla correspondiente.
