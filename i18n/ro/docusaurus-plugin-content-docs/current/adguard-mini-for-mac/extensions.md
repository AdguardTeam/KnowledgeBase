---
title: Extensii pentru Safari
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Ce sunt extensiile pentru Safari

Extensiile pentru Safari sunt programe software mici care adaugă funcționalitate browserului web Safari. Acestea permit utilizatorilor să personalizeze și să îmbunătățească experiența de navigare prin adăugarea de caracteristici care nu sunt incluse nativ în browser. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Cum funcționează

Pentru a bloca reclame, trackere și elemente deranjante pe site-uri, AdGuard folosește reguli de filtrare. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard General
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Custom
- AdGuard Altele

Fiecare extensie de blocare a conținutului poate include până la 150.000 de reguli active de filtrare. Numărul de reguli din majoritatea grupurilor de filtrare nu depășește 150.000. Cu toate acestea, dacă activați prea multe filtre specifice limbii sau filtre personalizate, s-ar putea să depășiți limita. În astfel de cazuri, regulile aleatorii care depășesc limita vor fi dezactivate automat, ceea ce poate duce la blocări incorecte. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Mai multe informații despre fiecare extensie mai jos.

## Extensii de blocare a conținutului

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Această extensie se concentrează pe blocarea cuprinzătoare a reclamelor și include filtre pentru reclame în limbi specifice.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Aceasta blochează mecanismele de urmărire și garantează că activitatea dvs. de navigare rămâne privată.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Această extensie identifică și blochează elemente potențial dăunătoare, protejând utilizatorii de conținut malițios.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard for Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Cum să gestionați extensiile Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## De ce AdGuard pentru Safari necesită permisiuni

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- Accesul la istoricul de navigare este necesar pentru a verifica statutul de protecție pe site-uri și a determina care reguli avansate ar trebui aplicate

Nu folosim aceste date pentru niciun alt scop sau nu le împărtășim cu nimeni. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
