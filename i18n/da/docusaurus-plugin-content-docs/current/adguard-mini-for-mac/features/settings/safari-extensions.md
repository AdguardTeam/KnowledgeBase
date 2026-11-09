---
title: Safari extensions
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[I 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) indførte Apple begrænsninger for adblockere til Safari, så disse kun kunne anvende 50.000 filtreringsregler samtidigt. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[I 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html) øgede Apple filtreringsregelkvoten for hver indholdsblocker til 150.000 samtidigt anvendte regler. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Mens kvoten er blevet øget, er strukturen for indholdsblockere forblevet uændret.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard General

_AdGuard Generel_ er en indholdsblocker, der kombinerer de vigtigste adblockingfiltre. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard Fortrolighed

Denne indholdsblocker er det primære værktøjet mod tællere og andre webanalyseværktøjer. _AdGuard Tracking Protection-filteret_ er slået til som standard.

### AdGuard Social

_AdGuard Social_ indeholder filtre mod sociale medier-knapper, -widgets, -scripts og -ikoner. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard Sikkerhed

Denne indholdsblocker forener flere sikkerhedsrelaterede filtre. _Malware Domains Blocklist_ blokerer domæner berygtet for at sprede malware og spyware. _Spam404_ beskytter mod internetsvindlere. _NoCoin Filter List_ forstyrrer webbrowserbaserede kryptominere, såsom Coinhive.

### AdGuard Andre

_AdGuard Andre_ indeholder filtre med forskellige funktioner. F.eks. har den et filter, der afblokerer søgeannoncer og selvpromoverende annoncer. I nogle tilfælde bidrager det med at finde præcis det, der ledes efter, fordi den slags annoncer er mere relevante og mindre påtrængende end andre.

:::note Forbehold

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Tilpasset

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Nye filtre kan findes på [filterlists.com](https://filterlists.com/).
