---
title: Systemniveaubeskyttelse
sidebar_position: 9
---

Fra version 3.0 introducerer AdGuard Mini til Mac _Systemniveaubeskyttelse_, en funktion, der blokerer annoncer og trackere, ikke kun i Safari, men i alle øvrige apps på Mac'en.

Funktionen er tilgængelig for brugere med en AdGuard-licens. [Køb en licensen med det samme](https://adguard.com/license.html) eller klik på _Prøv gratis_ i _Avanceret beskyttelse_ for at starte en 14-dages gratis prøveperiode.

## Sådan fungerer den

_Systemniveaubeskyttelse_ er indbygget i Apples [**URL-filter**](https://developer.apple.com/documentation/networkextension/filtering-traffic-by-url), en systemfiltrerings-API til brug for systemniveautrafikfiltrering. Sådan fungerer det.

Først tjekker macOS en URL mod et bloom-filter — et præfilter gemt på Mac'en, der opdateres i baggrunden. De fleste adresser godkendes lokalt, uden netværksforespørgsel til selve tjekket.

Finder præfilteret et muligt match, beder macOS AdGuards server om en afgørelse via Private Information Retrieval (PIR). Denne metode lader Mac'en anmode om data fra serveren uden at afsløre, præcis hvilken adresse den spurgte om. Anmodningen kan ikke knyttes til brugerkontoen eller enheden. Svarer serveren ikke, indlæses siden normalt.

Læs evt. [den detaljerede analyse af Apples tilgang til systemniveaufiltrering](https://adguard.com/en/blog/apple-url-filter-system-wide-filtering-api.html) på vores blog.

## Sådan aktiveres systemniveaubeskyttelse

_Systemniveaubeskyttelse_ findes under _Avanceret beskyttelse_ i AdGuard Mini-appen. For at aktivere den, slå kontakten til.

![Systemniveaubeskyttelse](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/system-wide-protection.png)

Når _Systemniveaubeskyttelse_ aktiveres første gang, anmodes om installation af URL-filteret på computeren. Klik på _Installér_, hvorefter en systemmeddelelse anmoder om tilføjelse af filteropsætninger. Dette er standard macOS-adfærd. AdGuard hverken ser eller gemmer ikke nogen af disse data.

![Systemniveaubeskyttelse kræver et URL-filter](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/install-screen.png)

Efter URL-filteret er installeret, forbliver _Systemniveaubeskyttelse_ slået til som standard. Ønskes det slået det fra, slå kontakten _Systemniveaubeskyttelse_ fra under _Avanceret beskyttelse_.

Der kan også klikkes på kontekstmenuen øverst til højre (⋮) og vælges _Fjern URL-filter_. Ønskes filteret nulstillet uden at slette det for at fejlfinde forbindelsesproblemer, vælg _Nulstil cache_.

Det er også muligt at deaktivere URL-filteret i Mac'ens _Systemindstillinger_ → _Netværk_ → _VPN og filtre_ → _Filtre og proxyer_. Skift _Aktiveret_ til _Deaktiveret_ i _Statusmenuen_. AdGuard Mini vil derefter automatisk slå _Systemniveaubeskyttelse_ fra.

## Beskyttelsesniveauer

Der er tre beskyttelsesniveauer at vælge imellem. _Essentiel_ er valgt som standard.

- _Essentiel_ — blokerer annoncer og trackere
- _Sikker_ — blokerer annoncer, trackere, phishing og malware
- _Familie_ — blokerer annoncer, sporere, phishing, malware og voksenindhold

![Tre beskyttelsesniveauer](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/levels-of-protection.png)

## Fejlfinding

### Systemniveaubeskyttelse fungerer ikke med alle apps eller webbrowsere

Dækningen afhænger af, hvordan hver enkelt app håndterer netværksforespørgsler, så nogle apps filtreres muligvis ikke. Dette er en begrænsning fra Apples side.

Chromium-baserede webbrowsere, såsom Chrome, Edge, Opera og Brave, bruger deres egen netværkskode i stedet for Apples frameworks, så URL-filteret kan ikke tjekke deres forespørgsler.

### Systemniveaubeskyttelse slås ikke til

- **Mac'en kører en ældre macOS-version.** Apples URL-filter kræver minimum macOS 26 Tahoe. I tidligere versioner er indstillingen deaktiveret, og appen anmoder om at _opdatere til minimum macOS Tahoe 26_.
- **Kontoen understøttes ikke.** _Systemniveaubeskyttelse_ fungerer kun med den første brugerkonto, der er oprettet på en Mac. Er kontoen tilføjet senere, er indstillingen deaktiveret og viser _Ikke understøttet på denne Mac-konto_. Se [Kan bruger-ID'et på en Mac-konto skiftes?](/adguard-mini-for-mac/features/system-wide-protection/#can-i-change-my-mac-accounts-user-id) nedenfor.
- **Den gratis version benyttes.** For brug af _Systemniveaubeskyttelse_, [køb en AdGuard-licens](https://adguard.com/license.html) eller klik på _Prøv gratis_ under _Avanceret beskyttelse_ for at starte en 14-dages gratis prøveperiode.

### Kan en Mac-kontos bruger-ID skiftes?

Ja. _Systemomniveaubeskyttelse_ virker kun med den første brugerkonto oprettet på en Mac med bruger-ID'et (UID) 501. Har Mac'en mere end én konto, eller er en konto overført fra en ældre Mac, kan UID'et være et andet. Følg nedenstående trin for at tjekke UID'et og om nødvendigt frigøre 501 og tildele det til kontoen.

:::warning

Dette er en avanceret og risikabel handling. Gør kun dette, hvis der ikke er andre muligheder. At frigøre UID 501 indebærer at slette en eksisterende konto og oprette en ny via Terminal. Går noget galt, kan det medføre permanent datatab. Sikkerhedskopiér alle data på Mac'en, før der fortsættes.

:::

1. **Tjek det aktuelle UID.** Åbn Terminal, skriv `id -u` og tryk på Retur. Er resultatet 501, har kontoen allerede det korrekte UID. Der behøves ikke at gøres yderligere.

2. **Find ud af, hvem der har UID 501.** Er UID'et ikke er 501, eksekvér denne kommando:

    ```bash
    dscacheutil -q user -a uid 501 | grep -E '^(name|uid|gecos):'
    ```

   Dette viser brugernavnet, UID og det fulde navn for den konto. Sørg for, at der ikke har brug for nogen filer fra den, eller sikkerhedskopiér dem, før der fortsættes.

3. **Slet kontoen med UID 501.** Mens der er logget ind på den egen admin-konto, åbn _Systemindstillinger_ → _Brugere og grupper_, vælg kontoen fra trin 2 og slet den. Når macOS spørger, hvad den skal ske med dens hjemmemappen, vælg _Gem hjemmemappen i en diskafbildning_ – dette gemmer kontoens filer, såfremt de behøves senere.

4. **Opret en ny konto med UID 501.** Kør flg. kommando, og erstat `brugernavn` og `Navn Efternavn` med de relevante oplysninger:

    ```bash
    sudo sysadminctl -addUser username \
      -fullName "Name Surname" \
      -password - \
      -admin \
      -UID 501
    ```

   `-password -` får Terminalen til at anmode om adgangskoden interaktivt; `-admin` giver den nye konto administratorrettigheder.

5. **Bekræft ændringen.** Log ind på den nye konto, og tjek derefter UID'et igen: Åbn Terminal, skriv `id -u`, og tryk på Retur. Resultatet bør nu være 501.
