---
title: Safari-Erweiterungen
sidebar_position: 3
---

:::info

In diesem Artikel geht es um AdGuard Mini für Mac, der nur Ihren Safari-Browser schützt. Um Ihren Mac vollständig zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Was sind Safari-Erweiterungen

Safari-Erweiterungen sind kleine Softwareprogramme, die den Safari-Webbrowser um zusätzliche Funktionen erweitern. Sie ermöglichen es den Nutzer:innen, ihr Surfern anzupassen und zu verbessern, indem sie Funktionen hinzufügen, die nicht von Haus aus in den Browser eingebaut sind. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## So funktioniert es

Um Werbung, Tracker und störende Elemente auf Websites zu blockieren, verwendet AdGuard Filterregeln. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard General (Allgemein)
- AdGuard Privacy (Datenschutz)
- AdGuard Soziales
- AdGuard Security (Sicherheit)
- AdGuard Benutzerdefiniert
- AdGuard Other (Sonstiges)

Jede Erweiterung zum Blockieren von Inhalten kann bis zu 150.000 aktive Filterregeln enthalten. Die Anzahl der Regeln in den meisten Filtergruppen beträgt nicht mehr als 150.000. Wenn Sie jedoch zu viele sprachspezifische oder benutzerdefinierte Filter aktivieren, könnten Sie das Limit überschreiten. In solchen Fällen werden zufällige Regeln, die den Grenzwert überschreiten, automatisch deaktiviert, was zu fehlerhaften Blockierungen führen kann. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Mehr zu den einzelnen Erweiterungen weiter unten.

## Erweiterungen zur Blockierung von Inhalten

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Diese Erweiterung konzentriert sich auf eine umfassende Werbeblockierung und enthält Filter für Werbung in bestimmten Sprachen.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Sie blockiert Verfolgungsmechanismen und sorgt dafür, dass Ihre Surfaktivitäten privat bleiben.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Diese Erweiterung identifiziert und blockiert potenziell schädliche Elemente und schützt die Nutzer:innen vor bösartigen Inhalten.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard für Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## So verwalten Sie Safari-Erweiterungen

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Darum benötigt AdGuard für Safari eine Genehmigung

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- Der Zugriff auf den Browserverlauf ist erforderlich, um den Schutzstatus von Websites zu überprüfen und zu bestimmen, welche erweiterten Regeln angewendet werden sollen

Wir verwenden diese Daten nicht für andere Zwecke und geben sie nicht an Dritte weiter. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
