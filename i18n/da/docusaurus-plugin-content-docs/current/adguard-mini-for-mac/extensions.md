---
title: Safari-udvidelser
sidebar_position: 3
---

:::info

Denne artikel omhandler AdGuard Mini til Mac, der kun beskytter Safari-webbrowseren. For at beskytte Mac'en helt, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Hvad Safari-udvidelser er

Safari-udvidelser er små softwareprogrammer, som føjer funktionalitet til Safari-webbrowseren. De giver brugerne mulighed for at tilpasse og forbedre deres browsingoplevelse ved at tilføje funktioner, som ikke er indbygget i webbrowseren. AdGuard Mini til Mac bruger primært udvidelser for at anvende filtreringsregler på websteder åbnet i Safari.

## Sådan fungerer det

For at blokere annoncer, trackere og irritationer på websteder bruger AdGuard filtreringsregler. Reglerne fra AdGuards samt egne tilpassede filtre konverteres til regler, som Safari kan forstå, og integreres i 6 Safari-udvidelser:

- AdGuard Generelt
- AdGuard Fortrolighed
- AdGuard Social
- AdGuard Sikkerhed
- AdGuard Tilpasset
- AdGuard Andre

Hver indholdsblokerende udvidelse kan indeholde op til 150.000 aktive filtreringsregler. Regelantallet inden for de fleste filtergrupper overstiger ikke 150.000. Aktiveres imidlertid for mange sprogspecifikke eller tilpassede filtre, vil kvoten kunne overskrides. I så tilfælde vil tilfældige regler, som overskrider kvoten, automatisk blive slået fra, hvilket kan medføre forkert blokering. **Vi anbefaler kraftigt kun at aktivere de filtre, som behøves**.

Der er også endnu en udvidelse, der er ansvarlig for andre funktioner: _AdGuard til Safari_, der tilføjer AdGuard-ikonet ved siden af søgebjælken i Safari og tillader brug af avancerede regler til at blokere komplekse annoncer.

![Safari-udvidelser](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Mere om hver udvidelse nedenfor.

## Indholdsblokerende udvidelser

_AdGuard Generelt_ anvender regler fra filtre, som kan findes under _Indstillinger_ → _Filtre_ → _Adblocking_ og _Sprogspecifikke_. Denne udvidelse fokuserer på omfattende adblocking og inkluderer filtre til sprogspecifikke annoncer.

_AdGuard Privacy_ anvender regler fra filtre placeret i _Filtre_ → _Fortrolighed_. Den blokerer sporingsmekanismer og sikrer, at browsingaktiviteten forbliver fortrolig.

_AdGuard Social_ anvender regler fra filtre, som findes i _Filtre_ → _Sociale Widgets_ og _Filtre_ → _Irritationer_. Den blokerer pop op-vinduer, sociale medie-knapper, online-assistentvinduer og andre elementer på websider, som måske findes irriterende.

_AdGuard Security_ anvender regler fra filtre under _Filtre_ → _Sikkerhed_. Denne udvidelse identificerer og blokerer potentielt skadelige elementer og beskytter brugerne mod ondsindet indhold.

_AdGuard Other_ anvender regler fra filtre, som ikke falder ind under ovennævnte kategorier og er placeret under _Filtre_ → _Andre_: _Filter til afblokering af søgeannoncer og selvpromovering_, _AdGuard DNS-filter_, og _AdGuard Eksperimental-filter_.

_AdGuard Custom_ anvender regler fra filtre, som brugeren selv føjer til _Tilpassede filtre_.

Brugerregler og hvidlisteregler er inkluderet i hver udvidelse.

## AdGuard til Safari

_AdGuard til Safari_ aktiverer AdGuard-ikonet ved siden af søgebjælken. Det er nyttigt til hurtig opsætning af beskyttelse for et bestemt websted eller manuel adblocking.

_AdGuard til Safari_-udvidelsen indeholder også avancerede regler, som ikke konverteres til formatet understøttet af Safari. Disse omfatter [CSS-regler](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [udvidede CSS-vælgere](/general/ad-filtering/create-own-filters#extended-css-selectors) og [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), som tillader AdGuard at blokere komplekse annoncer, såsom dem på YouTube.

## Sådan håndteres Safari-udvidelser

1. Åbn Safari, og klik på _Safari_ øverste til venstre på skærmen for at udvide menuen.

   ![Safari-indstillinger \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Klik på _Indstillinger..._

3. Vælg _Udvidelser_.

   ![Fanen Udvidelser](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Hvorfor AdGuard til Safari kræver tilladelse

Når _AdGuard til Safari_-udvidelsen aktiveres, bemærkes muligvis, at den kræver **adgang til websideindhold** og **adgang til webbrowserhistorik**. Her er årsagen til, at den behøver disse tilladelser:

- Adgang til websideindhold er obligatorisk for at manuel adblocking og avancerede blokeringsregler kan fungere korrekt
- Adgang til webbrowserhistorik kræves for at tjekke beskyttelsesstatussen på websteder og bestemme, hvilke avancerede regler, som skal anvendes

Vi bruger ikke disse data til andre formål eller deler dem med nogen. For yderligere info, tjek vores [Fortrolighedspolitik](https://adguard.com/privacy.html).
