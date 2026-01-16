---
title: Safari-Erweiterungen
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[Im Jahr 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) hat Apple die Werbeblocker für Safari eingeschränkt, so dass sie nur 50.000 Filterregeln gleichzeitig verwenden können. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[Im Jahr 2022](https://adguard.com/de/blog/adguard-for-safari-1-11.html) erhöhte Apple das Limit der Filterregeln für jeden Inhaltsblocker auf 150.000 gleichzeitig angewandte Regeln. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Während der Grenzwert erhöht wurde, ist die Struktur der Inhaltsblocker gleich geblieben.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard General (Allgemein)

_AdGuard Allgemein_ ist ein Inhaltsblocker, der die wichtigsten Filter zum Blockieren von Werbung vereint. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard Privacy (Datenschutz)

Dieser Inhaltsblocker ist das Hauptwerkzeug gegen Besucherzähler und andere Webanalysetools. Der _AdGuard Tracking-Schutzfilter_ ist standardmäßig aktiviert.

### AdGuard Soziales

_AdGuard Soziales_ enthält Filter gegen Social-Media-Schaltflächen, -Widgets, -Skripte und -Symbole. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard Security (Sicherheit)

Dieser Inhaltsblocker vereint mehrere sicherheitsrelevante Filter. _Malware Domains Blocklist_ blockiert Domains, die für die Verbreitung von Malware und Spyware berüchtigt sind. _Spam404_ schützt Sie vor Internet-Betrügern. Die _NoCoin Filterkiste_ verhindert die Nutzung von browserbasierten Kryptowährungen, wie z.B. Coinhive.

### AdGuard Other (Sonstiges)

_AdGuard Sonstiges_ enthält Filter mit verschiedenen Funktionen. So gibt es zum Beispiel einen Filter, der Suchanzeigen und Eigenwerbung freischaltet. In manchen Fällen hilft es, genau das zu finden, wonach man sucht, denn diese Art von Werbung ist relevanter und weniger aufdringlich als andere.

:::note Haftungsausschluss

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Benutzerdefiniert

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Neue Filter finden Sie unter [filterlists.com](https://filterlists.com/).
