---
title: Safari-Erweiterungen
sidebar_position: 3
---

![Tab „Erweiterungen“](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari-Erweiterungen sind Mechanismen, die die Implementierung von Inhaltsblockern ermöglichen — thematische Gruppen von Filtern. Datenschutzbezogene Filter sind im Inhaltsblocker enthalten und tragen den entsprechenden Namen — _AdGuard Datenschutz_.

Inhaltsblocker wurden aus zwei Gründen entwickelt: zur Strukturierung von Filtern und zur Anpassung an die Beschränkungen von Apple.

[Im Jahr 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) hat Apple die Werbeblocker für Safari eingeschränkt, so dass sie nur 50.000 Filterregeln gleichzeitig verwenden können. Da diese Anzahl für einen Werbeblocker nicht ausreicht, um eine gute Filterqualität zu bieten (_AdGuard Basisfilter_ hat allein 30.000 Filterregeln), haben wir AdGuard für Safari in sechs Inhaltsblocker mit jeweils bis zu 50.000 Regeln unterteilt.

[Im Jahr 2022](https://adguard.com/de/blog/adguard-for-safari-1-11.html) erhöhte Apple das Limit der Filterregeln für jeden Inhaltsblocker auf 150.000 gleichzeitig angewandte Regeln. Bei AdGuard Mini für Mac können bis zu 900.000 Regeln für alle sechs Inhaltsblocker aktiviert werden.

Während der Grenzwert erhöht wurde, ist die Struktur der Inhaltsblocker gleich geblieben.

In _Safari-Erweiterungen_ können Sie sehen, welche Inhaltsblocker aktiviert sind, wie viele Regeln jeder von ihnen verwendet, und welche Filter funktionieren.

:::tip

Sie können aktivierte Filter in _Einstellungen_ → _Filter_ verwalten. In _Safari Extensions_ können Sie nur die Liste der aktivierten Filter und die Anzahl der aktivierten Regeln sehen.

:::

## Liste der Safari-Erweiterungen von AdGuard Mini

### AdGuard General (Allgemein)

_AdGuard Allgemein_ ist ein Inhaltsblocker, der die wichtigsten Filter zum Blockieren von Werbung vereint. Wir empfehlen, den _AdGuard Basisfilter_ immer aktiviert zu lassen.

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
