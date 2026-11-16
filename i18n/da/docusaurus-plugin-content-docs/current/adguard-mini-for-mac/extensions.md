---
title: Safari-udvidelser
sidebar_position: 3
---

:::info

Denne artikel omhandler AdGuard Mini til Mac, der kun beskytter Safari-webbrowseren. For at beskytte Mac'en helt, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Hvad Safari-udvidelser er

Safari-udvidelser er små softwareprogrammer, som føjer funktionalitet til Safari-webbrowseren. De giver brugerne mulighed for at tilpasse og forbedre deres browsingoplevelse ved at tilføje funktioner, som ikke er indbygget i webbrowseren. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Sådan fungerer det

For at blokere annoncer, trackere og irritationer på websteder bruger AdGuard filtreringsregler. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard Generelt
- AdGuard Fortrolighed
- AdGuard Social
- AdGuard Sikkerhed
- AdGuard Tilpasset
- AdGuard Andre

Hver indholdsblokerende udvidelse kan indeholde op til 150.000 aktive filtreringsregler. Regelantallet inden for de fleste filtergrupper overstiger ikke 150.000. Aktiveres imidlertid for mange sprogspecifikke eller tilpassede filtre, vil kvoten kunne overskrides. I så tilfælde vil tilfældige regler, som overskrider kvoten, automatisk blive slået fra, hvilket kan medføre forkert blokering. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Mere om hver udvidelse nedenfor.

## Indholdsblokerende udvidelser

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Denne udvidelse fokuserer på omfattende adblocking og inkluderer filtre til sprogspecifikke annoncer.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Den blokerer sporingsmekanismer og sikrer, at browsingaktiviteten forbliver fortrolig.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Denne udvidelse identificerer og blokerer potentielt skadelige elementer og beskytter brugerne mod ondsindet indhold.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard til Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Sådan håndteres Safari-udvidelser

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Hvorfor AdGuard til Safari kræver tilladelse

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- Adgang til webbrowserhistorik kræves for at tjekke beskyttelsesstatussen på websteder og bestemme, hvilke avancerede regler, som skal anvendes

Vi bruger ikke disse data til andre formål eller deler dem med nogen. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
