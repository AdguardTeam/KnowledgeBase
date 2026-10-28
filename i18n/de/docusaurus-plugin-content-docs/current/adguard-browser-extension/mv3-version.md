---
title: AdGuard-Browsererweiterung MV3
sidebar_position: 5
---

[Chrome hat alle verbliebenen Manifest-V2-Erweiterungen (MV2) aus dem Chrome Web Store entfernt](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html). Auch andere Chromium-basierte Browser, darunter Opera und Microsoft Edge, stellen auf MV3 um. Nutzer dieser Browser benötigen eine MV3-Erweiterung, die mit der neuen Manifest-V3-API kompatibel ist. Unsere Gedanken zu diesem Thema werden in [unserem Blog](https://adguard.com/en/blog/tag/manifest-v3.html) ausführlich erörtert.

Unsere MV3-Erweiterung sperrt effektiv Werbung und Tracker und verwaltet gleichzeitig nahtlos soziale Widgets, Banner und Videoanzeigen. Die meisten Benutzer:innen werden keine Unterschiede bei der Bedienung feststellen, aber es gibt einige Einschränkungen und Änderungen, die zu beachten sind.

## Wo Sie unsere Erweiterungen finden

**Die MV3-Version** ist unsere wichtigste Chrome-Erweiterung und im [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg) verfügbar. MV3-Versionen werden auch unter [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) veröffentlicht: als `chrome-mv3.zip` für Chrome und `opera-mv3.zip` für Opera.

Die **MV3-Beta-Version** ist im [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf) verfügbar.

**AdGuard Werbeblocker MV2** wurde zusammen mit allen anderen MV2-Erweiterungen aus dem Chrome Web Store entfernt. MV2 funktioniert weiterhin in Firefox und in Chromium-basierten Browsern, die die Unterstützung dafür beibehalten haben. Weitere Informationen finden Sie unter [So nutzen Sie AdGuard weiter, nachdem Chrome MV2 entfernt hat](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## Wichtigste Änderungen bei Funktionen und Einstellungen

- **Filteraktualisierungen.** Die Optionen _Filter automatisch aktualisieren_ und _Filteraktualisierung prüfen_ sind im Tab _Filter_ nicht verfügbar: Regeln, die mit der Erweiterung ausgeliefert werden, können erst mit einer neuen Version der Erweiterung nach der Prüfung im Store aktualisiert werden. Lassen Sie automatische Updates der Erweiterung in Ihrem Browser aktiviert.

  Benutzerdefinierte Filter, die Sie per URL hinzufügen, werden unabhängig von Updates der Erweiterung selbstständig aktualisiert.

- **AdGuard Quick Fixes-Filter.** Da die integrierten Regeln nicht auf Anfrage aktualisiert werden können, enthält die Erweiterung den Filter _AdGuard Quick Fixes_. Er verwendet dynamische Regeln, um zwischen den Releases auf neue Werbung und Fehler auf Websites zu reagieren. Lassen Sie ihn deshalb aktiviert.

- **Filterungsprotokoll**

  ![Filterungsprotokoll \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filtering_log.png)

  Aufgrund von DNR-Beschränkungen können wir nicht genau angeben, welche Regel funktioniert hat, aber wir werden eine „mutmaßliche Regel, die ausgelöst wurde“ auf der Grundlage unserer Engine angeben. Für genaue Informationen müssen Sie die Erweiterung selbst in entpackter Form in Ihrem Browser installieren. Eine ausführliche Anleitung dazu finden Sie in einem [separaten Artikel](/adguard-browser-extension/solving-problems/debug-rules/).

- _Tracking-Schutz_ (früher bekannt als _Privatsphären-Modus_)

  ![Tracking-Schutz \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

  Der Abschnitt _Cookies_ sowie die Optionen _Selbstzerstörung von Erstanbieter-Cookies_ und _Selbstzerstörung von Drittanbieter-Cookies_ sind nicht verfügbar, da sich die Lebensdauer von Cookies mit deklarativen Regeln nicht festlegen lässt.

- _Schutz vor Phishing und Malware_ ist in den allgemeinen Einstellungen nicht mehr verfügbar. Um sich vor bösartigen Websites und Betrügereien zu schützen, aktivieren Sie die entsprechenden _Sicherheitsfilter_ im Tab _Filter_.

  ![Sicherheit \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

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

Wenn diese Grenze überschritten wird, werden nur **5.000 umgewandelte Regeln** in der folgenden Reihenfolge angewendet: zuerst Freigabeliste, dann Benutzerregeln und schließlich benutzerdefinierte Filter.

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
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
