---
title: Extensions Safari
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[En 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple a imposé des limites aux bloqueurs de publicités pour Safari, leur permettant d'utiliser simultanément seulement 50 000 règles de filtrage. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[En 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple a augmenté la limite des règles de filtrage pour chaque bloqueur de contenu à 150 000 règles appliquées simultanément. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Même si la limite a été augmentée, la structure des bloqueurs de contenu est restée la même.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard Général

_AdGuard Général_ est un bloqueur de contenu qui combine les filtres les plus essentiels pour bloquer les publicités. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard Confidentialité

Ce bloqueur de contenu est le principal outil de lutte contre les compteurs et autres outils d'analyse du web. Le _Filtre anti-suivi AdGuard_ est activé par défaut.

### AdGuard Social

_AdGuard Social_ contient des filtres contre les boutons, widgets, scripts et icônes des réseaux sociaux. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard Sécurité

Ce bloqueur de contenu regroupe plusieurs filtres liés à la sécurité. La liste _Malware Domains Blocklist_ bloque les domaines réputés pour la diffusion de logiciels malveillants et de logiciels espions. _Spam404_ vous protège des fraudeurs sur Internet. La liste _NoCoin Filter List_ perturbe les cryptomineurs basés sur un navigateur, tels que Coinhive.

### AdGuard Autres

_AdGuard Autres_ contient des filtres avec des fonctions différentes. Par exemple, il dispose d'un filtre qui débloque les annonces de recherche et les annonces d'autopromotion. Dans certains cas, ça permet de trouver exactement ce que vous cherchez, car ces types de publicités sont plus pertinentes et moins intrusives que d’autres.

:::note Clause de non-responsabilité

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Personnalisé

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Vous pouvez trouver de nouveaux filtres sur [filterlists.com](https://filterlists.com/).
