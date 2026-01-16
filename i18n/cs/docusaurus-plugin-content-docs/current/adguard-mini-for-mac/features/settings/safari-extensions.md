---
title: Rozšíření Safari
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[V roce 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) společnost Apple omezila blokátory reklam pro Safari tak, že mohou současně používat pouze 50 000 pravidel filtrování. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[V roce 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html) společnost Apple zvýšila limit pravidel filtrování pro každý blokátor obsahu na 150 000 současně aplikovaných pravidel. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Zatímco limit byl zvýšen, struktura blokátorů obsahu zůstala stejná.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard – General

_AdGuard – General_ je blokátor obsahu, který kombinuje nejdůležitější filtry pro blokování reklam. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard – Privacy

Tento blokátor obsahu je hlavním nástrojem proti čítačům a dalším nástrojům webové analytiky. Ve výchozím nastavení je povolen _filtr AdGuard ochrana sledování_.

### AdGuard – Social

_AdGuard – Social_ obsahuje filtry proti tlačítkům, widgetům, skriptům a ikonám sociálních médií. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard – Security

Tento blokátor obsahu spojuje několik filtrů souvisejících se zabezpečením. _Blokování domén s malwarem_ blokuje domény, které jsou známé šířením malwaru a spywaru. _Spam404_ vás chrání před podvodníky a internetu. _NoCoin Filter List_ blokuje těžbu kryptoměn v prohlížeči, například Coinhive.

### AdGuard – Other

_AdGuard – Other_ obsahuje filtry s různými funkcemi. Má například filtr, který odblokovává reklamy ve vyhledávání a sebepropagaci. V některých případech pomáhá najít přesně to, co hledáte, protože tyto druhy reklam jsou relevantnější a méně vtíravé než jiné.

:::note Odmítnutí odpovědnosti

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard – Custom

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Nové filtry najdete na [filterlists.com](https://filterlists.com/).
