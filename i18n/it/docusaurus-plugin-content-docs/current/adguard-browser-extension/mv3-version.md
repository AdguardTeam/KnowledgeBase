---
title: Estensione AdGuard Browser per Chrome MV3
sidebar_position: 5
---

[Chrome has removed all remaining Manifest V2 (MV2) extensions from the Chrome Web Store](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), so Chrome users need an MV3 extension, compatible with Chrome’s new API Manifest V3. Le nostre riflessioni su questo argomento sono ampiamente discusse sul [nostro blog](https://adguard.com/en/blog/tag/manifest-v3.html).

La nostra estensione MV3 blocca in modo efficace gli annunci e i tracker, gestendo al tempo stesso widget sociali, banner e annunci video. La maggior parte degli utenti non noterà alcuna differenza operativa, ma ci sono alcune limitazioni e modifiche di cui essere a conoscenza.

## Dove trovare le nostre estensioni

The **MV3 version** is our primary Chrome extension and is available in the
[Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3 builds are also published on [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) as `chrome-mv3.zip`.

The **MV3 beta** is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** was removed from the Chrome Web Store together with all
other MV2 extensions. MV2 keeps working in Firefox and in Chromium-based browsers that retained
support for it — see [How to keep using AdGuard after Chrome removed MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## Principali modifiche alle funzionalità e alle impostazioni

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

## Limitazioni

### Quantità massimale di regole e filtri

Manifest V3 impone limiti alle regole statiche e regex per estensione. Gli utenti potrebbero ricevere notifiche quando questi limiti vengono superati.

![Limiti regole \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Troppe estensioni \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Fondamentalmente, Manifest V3 divide le regole in statiche (integrate) e dinamiche, con limiti rigorosi.

**Regole statiche:** minimo **30.000** regole per estensione, con un limite cumulativo di **330.000** per tutte le estensioni installate da un singolo utente.

Per le regole regex, il limite è impostato a **1.000 per estensione**.

Il numero massimo di filtri abilitati contemporaneamente è **50**.

**Regole dinamiche:** è imposto un limite massimo di **5.000** regole, che include un massimo di 1.000 regole regex.

Se questo limite viene superato, verranno applicate solo **5.000 regole convertite** nel seguente ordine: prima la lista consensi, poi le regole utente e infine i filtri personali.

> Le **regole convertite** sono regole che sono state trasformate
> in \[formato DNR] utilizzando il [convertitore dichiarativo][github-declarative-converter].
> Durante questo processo di conversione, alcune regole potrebbero sovrascriverne altre (`$badfilter`), alcune potrebbero essere combinate (`$removeparam`), producendo un elenco di regole con un ordine leggermente diverso.
>
> Da questo elenco di regole convertite, ne utilizzeremo solo 5.000. Gli altri verranno visualizzati nell'editor, ma non applicati.

Here’s how a rule with a basic modifier is converted to a declarative rule:

```adblock
||example.org^$script,third-party,domain=example.com
```

viene convertita in

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

Altri esempi possono essere trovati su [GitHub][github-declarative-converter-examples].

### Modificatori delle regole di rete

I modificatori delle regole di rete presentano delle limitazioni: alcuni di essi non possono essere implementati in MV3 oppure possono essere implementati solo con delle restrizioni.

Ulteriori dettagli sulle limitazioni sono disponibili su [GitHub][github-declarative-converter].
Per ulteriori informazioni sui modificatori, fare riferimento alla nostra [Knowledge base](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
