---
title: AdGuard Browser Extension MV3
sidebar_position: 5
---

[Chrome has removed all remaining Manifest V2 (MV2) extensions from the Chrome Web Store](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), and other Chromium-based browsers, Opera and Microsoft Edge among them, are moving to MV3 as well. Users of these browsers need an MV3 extension, compatible with the new API Manifest V3. Our thoughts on this topic are extensively discussed on [our blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Unsere MV3-Erweiterung sperrt effektiv Werbung und Tracker und verwaltet gleichzeitig nahtlos soziale Widgets, Banner und Videoanzeigen. Die meisten Benutzer:innen werden keine Unterschiede bei der Bedienung feststellen, aber es gibt einige Einschränkungen und Änderungen, die zu beachten sind.

## Wo Sie unsere Erweiterungen finden

The **MV3 version** is our primary Chrome extension and is available in the
[Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3 builds are also published on [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) as `chrome-mv3.zip` for Chrome and `opera-mv3.zip` for Opera.

The **MV3 beta** is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** was removed from the Chrome Web Store together with all
other MV2 extensions. MV2 keeps working in Firefox and in Chromium-based browsers that retained
support for it — see [How to keep using AdGuard after Chrome removed MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## Wichtigste Änderungen bei Funktionen und Einstellungen

- **Filter updates.** The options _Auto-update filters_ and _Check filters update_ are not available
  in the _Filters_ tab: rules that ship as part of the extension can be updated only together with a
  new extension version, after store review. Keep automatic extension updates enabled in your
  browser.

  Custom filters you add by URL update on their own, independently of extension updates.

- **AdGuard Quick Fixes filter.** Because built-in rules can’t be updated on request, the extension
  ships the _AdGuard Quick Fixes_ filter. It uses dynamic rules to react to newly introduced ads and
  broken websites between releases, so keep it enabled.

- **Filtering log**

  ![Filtering log \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filtering_log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “assumed rule that was triggered” based on our engine. For precise information, you’ll need to install the “unpacked” form of the extension in your browser yourself. You’ll find detailed instructions on how to do this in a [separate article](/adguard-browser-extension/solving-problems/debug-rules/).

- _Tracking protection_ (formerly known as _Stealth mode_)

  ![Tracking protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

  There are no _Cookies_ section, along with _Self-destruction of first-party cookies_ and _Self-destruction of third-party cookies_ since we cannot set the TTL of cookies using declarative rules.

- _Phishing & malware protection_ is no longer available in the general settings. To protect yourself from malicious websites and scams, enable the appropriate _Security_ filters in the _Filters_ tab.

  ![Security \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

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

Here’s how a rule with a basic modifier is converted to a declarative rule:

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
