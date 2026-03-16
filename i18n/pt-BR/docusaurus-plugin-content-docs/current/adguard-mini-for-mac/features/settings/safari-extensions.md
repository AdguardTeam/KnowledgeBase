---
title: Extensões para Safari
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[Em 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), a Apple impôs limitações aos bloqueadores de anúncios para Safari, permitindo-lhes usar apenas 50.000 regras de filtragem simultaneamente. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[Em 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), a Apple aumentou o limite de regras de filtragem para cada bloqueador de conteúdo para 150.000 regras aplicadas simultaneamente. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Embora o limite tenha aumentado, a estrutura dos bloqueadores de conteúdo permaneceu a mesma.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard Custom

_AdGuard General_ é um bloqueador de conteúdo que combina os filtros mais essenciais para bloquear anúncios. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard Privacy

Este bloqueador de conteúdo é a principal ferramenta contra counters e outras ferramentas de analytics da web. O _Filtro de proteção contra rastreamento do AdGuard_ é ativado por padrão.

### AdGuard Social

_AdGuard Social_ contém filtros para botões, widgets, scripts e ícones de redes sociais. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard Security

Este bloqueador de conteúdo reune vários filtros relacionados à segurança. _Lista de bloqueio de domínios de malware_ bloqueia domínios conhecidos por espalhar malware e spyware. _Spam404_ protege você contra fraudadores da Internet. O _NoCoin Filter List_ interrompe os criptomineradores baseados em navegador, como o Coinhive.

### AdGuard Other

O _AdGuard Outros_ contém filtros com várias funções. Por exemplo, possui um filtro que desbloqueia anúncios de busca e anúncios de autopromoção. Em alguns casos, isso ajuda a encontrar exatamente o que você está procurando, porque esses tipos de anúncios são mais relevantes e menos intrusivos do que outros.

:::note Isenção de responsabilidade

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Custom

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Você pode encontrar novos filtros em [filterlists.com](https://filterlists.com/).
