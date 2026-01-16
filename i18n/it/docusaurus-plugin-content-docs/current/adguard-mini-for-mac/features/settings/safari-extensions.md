---
title: Estensioni di Safari
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[Nel 2019](https://adguard.com/blog/adguard-safari-1-5.html), Apple ha inserito delle limitazioni sui bloccatori di inserzioni per Safari, consentendogli di utilizzare esclusivamente 50.000 regole di filtraggio simultaneamente. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[Nel 2022](https://adguard.com/blog/adguard-for-safari-1-11.html), Apple ha incrementato il limite delle regole di filtraggio per ogni bloccatore di contenuti a 150.000 regole applicate contemporaneamente. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Mentre il limite è stato aumentato, la struttura dei blocchi dei contenuti è rimasta la stessa.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard Generale

_AdGuard Generale_ è un bloccatore di contenuti che combina i filtri più essenziali per bloccare le inserzioni. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard Privacy

Questo blocco dei contenuti è lo strumento principale contro contatori e altri strumenti analitici web. Il _filtro di Protezione dal Tracciamento di AdGuard_ è abilitato per impostazione predefinita.

### AdGuard Social

_AdGuard Social_ contiene i filtri per pulsanti, widget, script e icone dei social. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard Sicurezza

Questo blocco dei contenuti unisce diversi filtri correlati alla sicurezza. La _Malware Domains Blocklist_ blocca i domini noti per la diffusione di malware e spyware. _Spam404_ ti protegge dai truffatori di Internet. L'elenco di filtraggio _NoCoin Filter List_ disturba i cryptominer basati su browser, come Coinhive.

### AdGuard Altri

_AdGuard Altri_ contiene filtri con varie funzionalità. Ad esempio, contiene un filtro che sblocca gli annunci di ricerca e gli annunci di auto-promozione. In alcuni casi, aiuta a trovare esattamente ciò che stai cercando, poiché questo tipo di annunci sono più rilevanti e meno intrusivi di altri.

:::note Avvertenza

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Personalizzati

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Puoi trovare i filtri nuovi su [filterlists.com](https://filterlists.com/).
