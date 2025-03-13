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

![Menú de extensión web *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)

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

Una vez hecho esto, abre *Configuración → Safari → Extensiones*.

![Selecciona "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Selecciona "Extensiones" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Busca la sección **PERMITIR ESTAS EXTENSIONES** y, a continuación, busca **AdGuard** entre las extensiones disponibles.

![Selecciona "AdGuard" en la sección PERMITIR ESTAS EXTENSIONES *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Tócalo y luego actívalo. En la misma pantalla, establece el permiso *Todos los sitios web* para AdGuard en *Permitir* o *Preguntar*. Si eliges *Permitir*, no tendrás que dar permiso cada vez que visites un nuevo sitio web. Si no está seguro, elige *Preguntar* para conceder permisos por sitio.

![Configuración de la extensión *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### En Safari

También puedes habilitar la extensión AdGuard desde el navegador Safari. Para hacerlo, pulsa *Extensiones* (si no lo ves junto a la barra de direcciones, pulsa el icono `aA`).

![En Safari, toca el ícono aA *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

A continuación, busca la opción *Administrar extensiones* en la lista y pulsa sobre ella. En la ventana abierta, activa el interruptor situado junto a **AdGuard**.

![Extensiones *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Extensiones *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Si utilizas este método, es posible que tengas que ir a la configuración de Safari para conceder a la extensión AdGuard los permisos necesarios.

Ahora, debería ser posible ver AdGuard entre las extensiones disponibles. Tócalo y luego el ícono amarillo **i**. Activa la **Protección avanzada** pulsando el botón *Activar* y confirmando la acción.

:::note

Si usas AdGuard para iOS sin una suscripción Premium, no podrás habilitar la **Protección avanzada**.

:::

También puedes activar la **Protección avanzada** directamente desde la aplicación, en la pestaña **Protección** (la segunda desde la izquierda en la fila de iconos inferior).

La extensión web de Safari de AdGuard sólo funciona en las versiones 15 y posteriores de iOS.
