---
title: Extensiones para Safari
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[En 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple impuso limitaciones a los bloqueadores de anuncios para Safari, permitiéndoles usar solo 50.000 reglas de filtrado simultáneamente. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[En 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple aumentó el límite de reglas de filtrado para cada bloqueador de contenido a 150.000 reglas aplicadas simultáneamente. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Aunque se ha aumentado el límite, la estructura de los bloqueadores de contenidos sigue siendo la misma.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard - General

_AdGuard General_ es un bloqueador de contenido que combina los filtros más esenciales para bloquear anuncios. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard - Privacidad

Este bloqueador de contenido es la principal herramienta contra counters y otras herramientas de analytics en la web. El _Filtro de Protección de seguimiento de AdGuard_ está habilitado de forma predeterminada.

### AdGuard - Redes sociales

_AdGuard Social_ contiene filtros para botones, widgets, scripts e íconos de redes sociales. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard - Seguridad

Este bloqueador de contenidos reúne varios filtros relacionados con la seguridad. _Malware Domains Blocklist_ bloquea los dominios conocidos por propagar malware y spyware. _Spam404_ te protege de los estafadores de Internet. _NoCoin Filter List_ interrumpe a los criptomineros basados en navegador, como Coinhive.

### AdGuard - Otros

_AdGuard Otros_ contiene filtros con varias funciones. Por ejemplo, tiene un filtro que desbloquea anuncios de búsqueda y anuncios de autopromoción. En algunos casos, ayuda a encontrar exactamente lo que buscas, porque este tipo de anuncios es más relevantes y menos intrusivo que otros.

:::note Importante

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard - Personalizado

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Puedes encontrar nuevos filtros en [filterlists.com](https://filterlists.com/).
