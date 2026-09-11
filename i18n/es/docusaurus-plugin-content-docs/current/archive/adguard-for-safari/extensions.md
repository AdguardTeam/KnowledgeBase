---
title: Extensiones para Safari
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard para Safari, que protege solo tu navegador Safari. Para proteger todo su dispositivo, [descarca la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Qué son las extensiones de Safari

Las extensiones de Safari son pequeños programas de software que agregan funcionalidad al navegador web Safari. Permiten a los usuarios personalizar y mejorar su experiencia de navegación agregando funciones que no están integradas de forma nativa en el navegador. AdGuard para Safari utiliza extensiones principalmente para aplicar reglas de filtrado en sitios web abiertos en Safari.

## Cómo funciona

Para bloquear anuncios, rastreadores y molestias en los sitios web, AdGuard utiliza reglas de filtrado. Las reglas de AdGuard y sus filtros personalizados se convierten en reglas comprensibles para Safari y se integran en 6 extensiones de Safari:

- AdGuard - General
- AdGuard - Privacidad
- AdGuard - Redes sociales
- AdGuard - Seguridad
- AdGuard - Personalizado
- AdGuard - Otros

Cada extensión de bloqueo de contenido puede incluir hasta 150.000 reglas de filtrado activas. El número de reglas dentro de la mayoría de los grupos de filtros no supera las 150.000. Sin embargo, si activas demasiados filtros personalizados o específicos de un idioma, es posible que superes el límite. En tales casos, las reglas aleatorias que superen el límite se desactivarán automáticamente, lo que puede provocar un bloqueo incorrecto. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Más información sobre cada extensión a continuación.

## Extensiones de bloqueo de contenido

_AdGuard General_ applies rules from filters that you can find in _Filters_ → _Ad blocking_ and _Filters_ → _Language-specific_. Esta extensión se centra en el bloqueo integral de anuncios e incluye filtros para anuncios en idiomas específicos.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Bloquea los mecanismos de seguimiento y garantiza que tu actividad de navegación permanezca privada.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. Bloquea ventanas emergentes, botones de redes sociales, ventanas de asistentes en línea y otros elementos en páginas web que pueden resultarte molestos.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Esta extensión identifica y bloquea elementos potencialmente peligrosos, protegiendo a los usuarios de contenido malicioso.

_AdGuard Other_ applies rules from filters that that don't fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

Las reglas de usuario y las reglas de la lista de permitidos se incluyen en todas las extensiones.

## AdGuard para Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. Es útil si deseas configurar rápidamente la protección en un sitio web en particular o bloquear anuncios manualmente. También contiene reglas avanzadas que no se convierten al formato admitido por Safari. Estos incluyen [reglas CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selectores CSS extendidos](/general/ad-filtering/create-own-filters#extended-css-selectors) y [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), que permiten a AdGuard bloquear anuncios complejos, como los que aparecen en YouTube.

## Cómo gestionar las extensiones de Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Por qué AdGuard para Safari requiere permisos

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to web page content** and **access to browsing history**. A continuación, te explicamos por qué necesita estos permisos:

- El acceso al contenido de la página web es necesario para que el bloqueo manual de anuncios y las reglas de bloqueo avanzadas funcionen correctamente
- El acceso al historial de navegación es necesario para verificar el estado de protección de los sitios web y determinar qué reglas avanzadas deben aplicarse

No utilizamos estos datos para ningún otro propósito ni los compartimos con nadie. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
