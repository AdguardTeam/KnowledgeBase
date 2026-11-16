---
title: Safari-udvidelser
sidebar_position: 3
---

:::info

Denne artikel omhandler AdGuard til Safari, der kun beskytter Safari-webbrowseren. For at beskytte hele enheden, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Hvad Safari-udvidelser er

Safari-udvidelser er små softwareprogrammer, som føjer funktionalitet til Safari-webbrowseren. De giver brugerne mulighed for at tilpasse og forbedre deres browsingoplevelse ved at tilføje funktioner, som ikke er indbygget i webbrowseren. AdGuard til Safari bruger primært udvidelser til at effektuere filtreringsregler på websteder åbnet i Safari.

## Sådan fungerer det

For at blokere annoncer, trackere og irritationer på websteder bruger AdGuard filtreringsregler. Reglerne fra AdGuards samt evt. tilpassede filtre konverteres til versioner, som kan forstås af Safari og integreres i 6 Safari-udvidelser:

- AdGuard Generelt
- AdGuard Fortrolighed
- AdGuard Social
- AdGuard Sikkerhed
- AdGuard Tilpasset
- AdGuard Andre

Hver indholdsblokerende udvidelse kan indeholde op til 150.000 aktive filtreringsregler. Regelantallet inden for de fleste filtergrupper overstiger ikke 150.000. Aktiveres imidlertid for mange sprogspecifikke eller tilpassede filtre, vil kvoten kunne overskrides. I så tilfælde vil tilfældige regler, som overskrider kvoten, automatisk blive slået fra, hvilket kan medføre forkert blokering. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari-udvidelser](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Mere om hver udvidelse nedenfor.

## Indholdsblokerende udvidelser

_AdGuard Generel_ anvender regler fra filtre, som findes i _Filtre_ → _Adblocking_ og _Filtre_ → _Sprogspecifikke_. Denne udvidelse fokuserer på omfattende adblocking og inkluderer filtre til sprogspecifikke annoncer.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Den blokerer sporingsmekanismer og sikrer, at browsingaktiviteten forbliver fortrolig.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. Den blokerer pop op'er, knapper på sociale medier, online-assistentvinduer og andre elementer på websider, som måske findes irriterende.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Denne udvidelse identificerer og blokerer potentielt skadelige elementer og beskytter brugerne mod ondsindet indhold.

_AdGuard Andre_ anvender regler fra filtre, som ikke falder ind under ovennævnte kategorier og er placeret under _Filtre_ → _Andre_: _Filter til afblokering af søgeannoncer og selvpromovering_, _AdGuard DNS-filter_, og _AdGuard Eksperimentelt filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

Brugerregler og hvidlisteregler er inkluderet i hver udvidelse.

## AdGuard til Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. Det er nyttigt, hvis beskyttelse hurtigt skal opsætte på et bestemt websted eller annoncer skal blokeres manuelt. Den indeholder også avancerede regler, som ikke konverteres til det format, Safari understøtter. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Sådan håndteres Safari-udvidelser

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Hvorfor AdGuard til Safari kræver tilladelse

Når _AdGuard til Safari_-udvidelsen aktiveres, bemærkes muligvis, at den kræver **adgang til websideindhold** og **adgang til webbrowserhistorik**. Her er grunden til, at disse tilladelser behøves:

- Adgang til websideindhold kræves for korrekt funktion af manuel adblocking og avancerede blokeringsregler
- Adgang til webbrowserhistorik kræves for at tjekke beskyttelsesstatussen på websteder og bestemme, hvilke avancerede regler, som skal anvendes

Vi bruger ikke disse data til andre formål eller deler dem med nogen. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
