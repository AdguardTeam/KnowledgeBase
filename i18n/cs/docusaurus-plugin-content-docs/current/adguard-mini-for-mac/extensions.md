---
title: Rozšíření Safari
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Co jsou rozšíření Safari

Rozšíření Safari jsou malé programy, které přidávají funkce do webového prohlížeče Safari. Umožňují uživatelům přizpůsobit a vylepšit prohlížení stránek přidáním funkcí, které nejsou nativně zabudovány v prohlížeči. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Jak to funguje

K blokování reklam, slídičů a obtěžujících prvků na webových stránkách používá AdGuard pravidla filtrování. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard – General
- AdGuard – Privacy
- AdGuard – Social
- AdGuard – Security
- AdGuard – Custom
- AdGuard – Other

Každé rozšíření pro blokování obsahu může obsahovat až 150 000 aktivních pravidel filtrování. Počet pravidel ve většině skupin filtrů nepřesahuje 150 000. Pokud však aktivujete příliš mnoho jazykově specifických nebo vlastních filtrů, můžete tento limit překročit. V takových případech budou náhodná pravidla, která překročí limit, automaticky zakázána, což může vést k nesprávnému blokování. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Více informací o jednotlivých rozšířeních najdete níže.

## Rozšíření blokování obsahu

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Toto rozšíření se zaměřuje na komplexní blokování reklam a obsahuje filtry pro reklamy v konkrétních jazycích.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Blokuje sledovací mechanismy a zajišťuje, že vaše aktivita při prohlížení zůstane v soukromí.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Toto rozšíření identifikuje a blokuje potenciálně škodlivé prvky a chrání uživatele před škodlivým obsahem.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard pro Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Jak spravovat rozšíření Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Proč vyžaduje AdGuard pro Safari oprávnění

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- Přístup k historii prohlížení je nutný pro kontrolu stavu ochrany na webových stránkách a určení, která pokročilá pravidla by měla být použita

Tyto údaje nepoužíváme pro žádné jiné účely a ani je s nikým nesdílíme. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
