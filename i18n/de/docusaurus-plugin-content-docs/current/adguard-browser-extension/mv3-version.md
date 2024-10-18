---
title: AdGuard Browsererweiterung für Chrome MV3
sidebar_position: 5
---

Da die MV2-Erweiterungen im Chrome Web Store eingestellt werden, müssen Chrome-Benutzer:innen möglicherweise zu MV3-Erweiterungen wechseln, die mit dem neuen Manifest V3-API von Chrome kompatibel sind. Unsere Gedanken zu diesem Thema werden in [unserem Blog](https://adguard.com/en/blog/tag/manifest-v3.html) ausführlich erörtert.

Unsere MV3-Erweiterung sperrt effektiv Werbung und Tracker und verwaltet gleichzeitig nahtlos soziale Widgets, Banner und Videoanzeigen. Die meisten Benutzer:innen werden keine Unterschiede bei der Bedienung feststellen, aber es gibt einige Einschränkungen und Änderungen, die zu beachten sind.

## Wo Sie unsere Erweiterungen finden

Die **MV3-Version** ersetzt unsere alte Erweiterung im [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

Die **Beta-Version von MV3** wird weiterhin im [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf) verfügbar sein.

Die alte Beta-Erweiterung wird in [**AdGuard Werbeblocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) umbenannt und wird unterstützt, bis Google sie abkündigt.

## Wichtigste Änderungen bei Funktionen und Einstellungen

- **Keine automatische und manuelle Filteraktualisierung.** Die Optionen _Filter automatisch aktualisieren_ und _Filteraktualisierung prüfen_ sind auf der Registerkarte _Filter_ nicht mehr verfügbar. Da einige der Regeln jetzt in DNR-Form angewendet werden, können wir die Filter nicht auf Anfrage aktualisieren, sondern nur durch den gesamten Prozess der Aktualisierung der Erweiterung zusammen mit der Überprüfung in den Stores.

- **Filter-Protokoll**

  ![Filter-Protokoll \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  Aufgrund von DNR-Beschränkungen können wir nicht genau angeben, welche Regel funktioniert hat, aber wir werden eine „mutmaßliche Regel, die ausgelöst wurde“ auf der Grundlage unserer Engine angeben. Um genaue Informationen zu erhalten, müssen Sie die „entpackte" Form der Erweiterung selbst in Ihrem Browser installieren. Eine ausführliche Anleitung dazu finden Sie in einem [separaten Artikel](/adguard-browser-extension/solving-problems/debug-rules/).

- _Tracking-Schutz_ (früher bekannt als _Privatsphären-Modus_)

  ![Tracking-Schutz \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  Es gibt keinen Abschnitt _Cookies_ sowie _Selbstzerstörung von Erstanbieter-Cookies_ und _Selbstzerstörung von Drittanbieter-Cookies_, da wir die TTL von Cookies nicht mit deklarativen Regeln festlegen können.

- Der _Schutz vor Phishing und Malware_ ist in den allgemeinen Einstellungen nicht mehr verfügbar. Um sich vor bösartigen Websites und Betrügereien zu schützen, aktivieren Sie die entsprechenden _Sicherheitsfilter_ im Tab _Filter_.

  ![Sicherheit \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Beschränkungen

### Maximale Anzahl von Regeln und Filtern

Manifest V3 legt Grenzen für statische und Regex-Regeln pro Erweiterung fest. Die Nutzer:innen können Benachrichtigungen erhalten, wenn diese Grenzen überschritten werden.

![Regelgrenzen \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Zu viele Erweiterungen \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Grundsätzlich unterteilt Manifest V3 die Regeln in statische (integrierte) und dynamische Regeln, wobei strenge Grenzen gelten.

**Statische Regeln:** mindestens **30.000** Regeln pro Erweiterung, mit einem kumulativen Limit von **330.000** für alle von einem einzelnen Benutzer installierten Erweiterungen.

Für Regex-Regeln ist die Grenze auf **1.000 pro Erweiterung** festgelegt.

Die maximale Anzahl der gleichzeitig aktivierten Filter beträgt **50**.

**Dynamische Regeln:** Es gilt eine strikte Obergrenze von **5.000** Regeln, darunter maximal 1.000 Regex-Regeln.

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first Allowlist, then User rules, Custom filters, and finally — Quick Fixes filter.

> **Konvertierte Regeln** sind Regeln, die mit dem [deklarativen Konverter][github-declarative-converter] in das \[DNR-Format] umgewandelt wurden.
> Während dieses Umwandlungsprozesses können einige Regeln andere überschreiben (`$badfilter`), einige können kombiniert werden (`$removeparam`), was zu einer Liste von Regeln mit einer etwas anderen Reihenfolge führt.
>
> Von dieser Liste der konvertierter Regeln werden nur 5.000 Regeln verwendet. Die übrigen werden zwar im Editor angezeigt, aber nicht angewendet.

So wird eine Regel mit einem einfachen Modifikator in eine deklarative Regel umgewandelt:

```adblock
||example.org^$script,third-party,domain=example.com
```

wird umgewandelt in

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

Weitere Beispiele sind auf [GitHub][github-declarative-converter-examples] verfügbar.

### Modifizierer für Netzwerkregeln

Die Modifikatoren der Netzwerkregeln haben ihre Grenzen: Einige von ihnen können in MV3 nicht oder nur mit Einschränkungen implementiert werden.

Weitere Details zu den Einschränkungen finden Sie auf [GitHub][github-declarative-converter].
Weitere Informationen zu Modifikatoren finden Sie in unserer [Wissensdatenbank](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules

<!-- TODO: update the following urls after the release/v3.1 branch is merged -->

[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
