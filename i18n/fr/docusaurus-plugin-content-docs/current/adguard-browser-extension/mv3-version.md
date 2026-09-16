---
title: Extension AdGuard pour Chrome MV3
sidebar_position: 5
---

[Chrome has removed all remaining Manifest V2 (MV2) extensions from the Chrome Web Store](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), so Chrome users need an MV3 extension, compatible with Chrome’s new API Manifest V3. Nos réflexions sur ce sujet sont largement discutées sur [notre blog](https://adguard.com/fr/blog/tag/manifest-v3.html).

Notre extension MV3 bloque efficacement les publicités et les traqueurs tout en gérant de manière transparente les widgets sociaux, les bannières et les publicités vidéo. La plupart des utilisateurs ne remarqueront aucune différence opérationnelle, mais il existe certaines limitations et modifications dont il faut être conscient.

## Où trouver nos extensions

The **MV3 version** is our primary Chrome extension and is available in the
[Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3 builds are also published on [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) as `chrome-mv3.zip`.

The **MV3 beta** is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** was removed from the Chrome Web Store together with all
other MV2 extensions. MV2 keeps working in Firefox and in Chromium-based browsers that retained
support for it — see [How to keep using AdGuard after Chrome removed MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## Principales modifications des fonctionnalités et des paramètres

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

## Limitations

### Nombre maximal de règles et de filtres

Manifest V3 impose des limites aux règles statiques et regex par extension. Les utilisateurs peuvent recevoir des notifications lorsque ces limites sont dépassées.

![Limites des règles \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Trop d'extensions \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Fondamentalement, Manifest V3 divise les règles en règles statiques (intégrées) et dynamiques, avec des limites strictes en place.

Les **Règles statiques :** minimum **30 000** règles par extension, avec une limite cumulée de **330 000** pour toutes les extensions installées par un seul utilisateur.

Pour les règles regex, la limite est fixée à **1 000 par extension**.

Le nombre maximum de filtres activés simultanément est de **50**.

Les **Règles dynamiques :** un plafond strict de **5 000** règles est imposé, ce qui inclut un maximum de 1 000 règles d'expression régulière.

Si cette limite est dépassée, seulement **5 000 règles converties** seront appliquées dans l’ordre suivant : d’abord la Liste autorisée, puis les Règles Utilisateur et enfin les Filtres personnalisés.

> **Les règles converties** sont des règles qui ont été transformées
> au \[format DNR] à l'aide du [convertisseur déclaratif][github-declarative-converter].
> Au cours de ce processus de conversion, certaines règles peuvent écraser d'autres (`$badfilter`), certaines peuvent être combinées (`$removeparam`),
> résultant en une liste de règles avec un ordre légèrement différent.
>
> À partir de cette liste de règles converties, nous n'utiliserons que 5 000 règles. Le reste d’entre eux sera affiché dans l’éditeur, mais pas appliqué.

Here’s how a rule with a basic modifier is converted to a declarative rule:

```adblock
||example.org^$script,third-party,domain=example.com
```

est convertie en

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

D'autres exemples peuvent être trouvés sur [GitHub][github-declarative-converter-examples].

### Modificateurs de règles de réseau

Les modificateurs de règles de réseau ont des limites : certains d'entre eux ne peuvent pas être implémentés dans MV3, ou ne peuvent être implémentés qu'avec des restrictions.

Vous trouverez plus de détails sur les limitations sur [GitHub][github-declarative-converter].
Pour plus d'informations sur les modificateurs, veuillez vous référer à notre [Base de connaissances](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
