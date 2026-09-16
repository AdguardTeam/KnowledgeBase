---
title: Rozšíření prohlížeče AdGuard pro Chrome MV3
sidebar_position: 5
---

[Chrome has removed all remaining Manifest V2 (MV2) extensions from the Chrome Web Store](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), so Chrome users need an MV3 extension, compatible with Chrome’s new API Manifest V3. Naše úvahy na toto téma jsou podrobně rozebrány na [našem blogu](https://adguard.com/en/blog/tag/manifest-v3.html).

Naše rozšíření MV3 účinně blokuje reklamy a slídiče a zároveň bezproblémově spravuje sociální widgety, bannery a videoreklamy. Většina uživatelů nezaznamená žádné provozní rozdíly, ale je třeba si uvědomit některá omezení a změny.

## Kde najdete naše rozšíření

The **MV3 version** is our primary Chrome extension and is available in the
[Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3 builds are also published on [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) as `chrome-mv3.zip`.

The **MV3 beta** is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** was removed from the Chrome Web Store together with all
other MV2 extensions. MV2 keeps working in Firefox and in Chromium-based browsers that retained
support for it — see [How to keep using AdGuard after Chrome removed MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## Hlavní změny funkcí a nastavení

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

## Omezení

### Maximální počet pravidel a filtrů

Manifest V3 zavádí omezení statických a regexových pravidel na jedno rozšíření. Uživatelé mohou dostávat oznámení o překročení těchto limitů.

![Rule limits \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Too many extensions \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Manifest V3 v zásadě dělí pravidla na statická (vestavěná) a dynamická s přísnými omezeními.

**Statická pravidla:** minimálně **30000** pravidel na jedno rozšíření s kumulativním limitem **330000** pro všechna rozšíření nainstalovaná jedním uživatelem.

Pro regexová pravidla je nastaven limit **1000 na jedno rozšíření**.

Maximální počet současně aktivovaných filtrů je **50**.

**Dynamická pravidla:** je stanoven přísný limit **5000** pravidel, který zahrnuje maximálně 1000 regexových pravidel.

Pokud je tento limit překročen, bude použito pouze **5000 převedených pravidel** v následujícím pořadí: nejprve seznam povolených, poté uživatelská pravidla, vlastní filtry a nakonec — filtr rychlých oprav.

> **Převedená pravidla** jsou pravidla, která byla převedena do formátu \[DNR] pomocí [deklarativního převodníku][github-declarative-converter].
> Během tohoto převodu mohou některá pravidla přepsat jiná (`$badfilter`), některá mohou být sloučena (`$removeparam`), takže vznikne seznam pravidel s mírně odlišným pořadím.
>
> Z tohoto seznamu převedených pravidel použijeme pouze 5000 pravidel. Ostatní se v editoru zobrazí, ale nepoužijí se.

Here’s how a rule with a basic modifier is converted to a declarative rule:

```adblock
||example.org^$script,third-party,domain=example.com
```

je převedeno na

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

Další příklady najdete na [GitHubu][github-declarative-converter-examples].

### Modifikátory síťových pravidel

Modifikátory síťových pravidel mají svá omezení: některé z nich nelze v MV3 implementovat nebo je lze implementovat pouze s omezeními.

Další podrobnosti o omezeních najdete na [GitHubu][github-declarative-converter].
Další informace o modifikátorech naleznete v naší [Databázi znalostí](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
