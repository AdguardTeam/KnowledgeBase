---
title: Extensión web de Safari
sidebar_position: 3
---

Las extensiones web añaden funcionalidades personalizadas a Safari. Puedes encontrar [más información sobre las extensiones web aquí](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Cómo se ve la extensión web en Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

La extensión web Safari de AdGuard es una herramienta que aprovecha las nuevas funciones de iOS 15. Sirve para mejorar las capacidades de AdGuard para iOS. Con él, AdGuard puede aplicar reglas de filtrado avanzadas y, en última instancia, bloquear más anuncios.

## Para qué sirve

Por defecto, Safari proporciona solo herramientas básicas para bloqueadores de contenido. Estas herramientas no ofrecen el nivel de rendimiento que se encuentra en los bloqueadores de contenido en otros sistemas operativos (Windows, Mac). Por ejemplo, las apps de AdGuard en otras plataformas pueden usar armas antianuncios tan poderosas como [reglas CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selectores CSS extendidos](/general/ad-filtering/create-own-filters#extended-css-selectors) y [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Desafortunadamente, estos instrumentos son absolutamente insustituibles cuando se trata de casos más complejos, como los anuncios pre-roll en YouTube.

La extensión web de Safari de AdGuard complementa a AdGuard dándole la capacidad de emplear este tipo de reglas de filtrado.

Además, la extensión web Safari de AdGuard se puede usar para administrar rápidamente AdGuard para iOS directamente desde el navegador. Pulsa el botón *Extensiones* (el que tiene el icono de un rompecabezas). Dependiendo del tipo de dispositivo puede estar situado a la izquierda o a la derecha de la barra de direcciones. Busca **AdGuard** en la lista y tócalo.

![Menú de extensión web *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> En iPads, se puede acceder directamente a la extensión web Safari de AdGuard tocando el icono de AdGuard en la barra de direcciones del navegador.

Verás la siguiente lista de opciones:

- **Activar/desactivar la protección en el sitio web**. Al desactivar el interruptor, AdGuard se desactivará por completo para el sitio web actual y se añadirá una regla de exclusión correspondiente. Al volver a activar el interruptor, se reanudará la protección del sitio web y se eliminará la regla. Cualquier cambio de este tipo necesitará algún tiempo para surtir efecto.

- **Bloqueo manual de elementos de la página**. Toca el botón *Elementos de bloque en esta página* para solicitar una ventana emergente para el bloqueo de elementos. Selecciona cualquier elemento de la página que desees ocultar, ajusta la zona de selección y, a continuación, previsualiza los cambios y confirme la eliminación. Se añadirá una regla de filtrado correspondiente a AdGuard (que podrá desactivar o eliminar posteriormente para revertir el cambio).

- **Informar un problema**. Desliza hacia arriba para que aparezca el botón *Informar un problema*. Utilízalo para informar de un anuncio perdido o de cualquier otro problema que hayas encontrado en la página actual.

## Cómo activar la extensión web de Safari de AdGuard

:::note

La extensión web Safari de AdGuard requiere acceso al contenido de las páginas web para funcionar, pero no lo utiliza para ningún otro propósito que no sea bloquear anuncios.

:::

### En la configuración de iOS

La extensión web no es una herramienta independiente y requiere AdGuard para iOS. Si no tienes AdGuard para iOS instalado en tu dispositivo, [instálalo primero](../installation) y completa el proceso de inicialización para prepararlo para el trabajo.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### En Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
