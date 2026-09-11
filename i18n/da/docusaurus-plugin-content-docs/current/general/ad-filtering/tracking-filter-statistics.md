---
title: Statistik over sporingsfilterregler
sidebar_position: 4
---

:::note

Indstillingen *Indsend statistik for annoncefilterbrug* er som standard slået fra. Intet indsendes, medmindre en bruger manuelt slår funktionen til for at hjælpe os med at forbedre vores blokeringsfiltre.

:::

### Hvorfor behøves annoncefiltre?

Lad os starte med at definere, hvad annoncefiltre er. Grundet disse filtre kan AdGuard fjerne annoncer fra websteder. De sammensættes manuelt baseret på brugerklager over annoncer på websteder. Annoncefiltre er et væsentligt element i AdGuard — deres kvalitet bestemmer den overordnede kvalitet af AdGuard-adblockingen.

Der er dog en ulempe. Gennem årene er der dukket flere og flere annoncefiltre op. Jo flere annoncefiltre der er, des mere hukommelse forbruger AdGuard, hvilket dermed sinker rendering af websider. Samtidig begynder nogle af filtrene at udløbe og bliver gradvist ubrugelige, og optager blot hukommelse og gøre programmet langsommere.

### Hvorfor behøves statistikker?

Vi ønsker at løse problemet med forældede filtreringsregler én gang for alle. Vi behøver dog brugerhjælp til at gøre det. Ved at indsamle brugsstatistik for filtreringsregler opdager og fjerner vi de regler, som ikke længere er i brug. Som konsekvens, vil det hjælpe alle brugere af AdGuard.

På en tilstrækkelig kraftig computer, vil effekten være minimal. Forskellen vil dog være markant på mindre kraftige netbooks eller tablets.

### Hvilken slags statistik indsendes?

Aktiveres indstillingen *Indsend statistik for annoncefiltrebrug*, indsendes periodisk flg. oplysninger:

- Udvidelsesversion
- Webbrowsertype (Chrome/Firefox/Opera/Yandex.Browser/Safari).
- Liste over aktiverede annoncefiltre.
- Listen udgøres af flg. emner:
    - *Webstedets domænenavn*
    - *Antallet af seneste sidevisninger*
    - *Liste over filtreringsregler og Filter-ID aktiveret på dette websted*
    - *Domænenavnet på blokerede forespørgsler indsendes for URL-regler* Listen oprettes baseret på webstedets besøgsstatistik siden seneste indsendelse af statistiskdata.

De indsamlede statistikdata indsendes periodisk til vores server for analyse og filteroptimering.

Det er vigtigt at bemærke, at al indsendt statistikdata er gennemsnitlig og anonymiseret. Statistikdatane anvendes ikke til andre formål end filteroptimeringer, og disse data videresælges ikke til nogen tredjepart. Læs evt. mere herom i vores [Fortrolighedspolitik](https://adguard.com/privacy.html).

### What does tracking filter rules statistics fraught with?

For hovedparten af brugerne vil en ændring i computerhastigheden ikke rigtig være mærkbar. Netbook- og tabletbrugere kan dog bemærke en lille hastighedsreduktion.

Den indsamlede statistik indsendes periodisk til serveren. Størrelsen på overførte data er ikke særlig stor og kan sammenlignes med størrelsen på en gennemsnitlig webside.
