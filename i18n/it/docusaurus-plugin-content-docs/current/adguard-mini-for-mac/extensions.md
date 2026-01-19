---
title: Estensioni di Safari
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Cosa sono le estensioni di Safari

Le estensioni di Safari sono piccoli programmi che aggiungono funzionalità al browser web di Safari. Consentono agli utenti di personalizzare e migliorare la propria esperienza di navigazione, aggiungendo funzionalità non integrate nativamente nel browser. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Come funziona

Per bloccare annunci, tracciatori e fastidi sui siti web, AdGuard utilizza le regole di filtraggio. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard Generale
- AdGuard Privacy
- AdGuard Social
- AdGuard Sicurezza
- AdGuard Personalizzati
- AdGuard Altri

Ogni estensione di blocco dei contenuti può includere fino a 150.000 regole di filtraggio attive. Il numero di regole in gran parte dei gruppi di filtri non supera le 150.000. Tuttavia, se attivi troppi filtri specifici per lingua o personalizzati, potresti superare il limite. In questi casi, delle regole casuali che superano il limite saranno disabilitate automaticamente, che potrebbe portare a un blocco errato. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Di più su ogni estensione di seguito.

## Estensioni di blocco dei contenuti

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Quest'estensione si incentra sul blocco completo degli annunci e include i filtri per gli annunci, in lingue specifiche.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Blocca i meccanismi di tracciamento e assicura che la tua attività di navigazione resti privata.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Quest'estensione identifica e blocca gli elementi potenzialmente dannosi, salvaguardando gli utenti dai contenuti dannosi.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard per Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Come gestire le estensioni di Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Perché AdGuard per Safari richiede l'autorizzazione

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- L'accesso alla cronologia di navigazione è necessario per verificare lo stato di protezione sui siti web, e per determinare quali regole avanzate dovrebbero essere applicate

Non utilizziamo questi dati per alcun altro scopo, né li condividiamo con nessuno. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
