---
title: Extensiones para Safari
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard Mini para Mac, que protege solo tu navegador Safari. Para proteger completamente tu Mac, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Qué son las extensiones de Safari

Las extensiones de Safari son pequeños programas de software que agregan funcionalidad al navegador web Safari. Permiten a los usuarios personalizar y mejorar su experiencia de navegación agregando funciones que no están integradas de forma nativa en el navegador. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Cómo funciona

Para bloquear anuncios, rastreadores y molestias en los sitios web, AdGuard utiliza reglas de filtrado. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard - General
- AdGuard - Privacidad
- AdGuard - Redes sociales
- AdGuard - Seguridad
- AdGuard - Personalizado
- AdGuard - Otros

Cada extensión de bloqueo de contenido puede incluir hasta 150.000 reglas de filtrado activas. El número de reglas dentro de la mayoría de los grupos de filtros no supera las 150.000. Sin embargo, si activas demasiados filtros personalizados o específicos de un idioma, es posible que superes el límite. En tales casos, las reglas aleatorias que superen el límite se desactivarán automáticamente, lo que puede provocar un bloqueo incorrecto. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Más información sobre cada extensión a continuación.

## Extensiones de bloqueo de contenido

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Esta extensión se centra en el bloqueo integral de anuncios e incluye filtros para anuncios en idiomas específicos.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Bloquea los mecanismos de seguimiento y garantiza que tu actividad de navegación permanezca privada.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Esta extensión identifica y bloquea elementos potencialmente peligrosos, protegiendo a los usuarios de contenido malicioso.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard para Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Cómo gestionar las extensiones de Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Por qué AdGuard para Safari requiere permisos

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- El acceso al historial de navegación es necesario para verificar el estado de protección de los sitios web y determinar qué reglas avanzadas deben aplicarse

No utilizamos estos datos para ningún otro propósito ni los compartimos con nadie. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
