---
title: Indstillinger
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

_Indstillinger_ er dét afsnit, der kræver størst opmærksomhed. Det er her, at appen kan opsættes, så den fuldt ud opfylder ønskede krav: Blokerer kun det, der generer, bruger den betroede udbyders DNS-server, fjerner tredjepartscookies mv.

### Generelle indstillinger

Her kan indstilles sprog og tema (Mørkt eller Lyst), aktivere AdGuard-start ved systemstart og opsættes automatiske opdateringer, vælges opdateringskanal og filteropdateringstjekinterval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/archive/adguard-for-windows/solving-problems/adguard-logs.md).

![Indstillinger \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

Helt nederst på skærmen findes _Avancerede indstillinger_. Ændres nogle af dem tankeløst, kan det potentielt forårsage problemer med AdGuards ydeevne, ødelægge internetforbindelsen eller kompromittere sikkerhed og fortrolighed. Dette afsnit bør derfor kun åbnes, såfremt man ved, hvad man foretager sig, eller supportteamet har anmodet herom. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/archive/adguard-for-windows/solving-problems/low-level-settings.md).

![Avancerede indstillinger \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Adblocking

Dette er hovedmodulet i AdGuard til Windows, der fjerner annoncer fra de besøgte websteder og fra apps installeret på enheden. AdGuard bruger forskellige filtre til at bortfiltrere fortrolighedstruende og reklameindhold, såsom bannere, pop op'er eller trackere — grupper af regler med et lignende formål skrevet i en [særlig syntaks](/general/ad-filtering/create-own-filters). For at forstå, hvad filtre — og deres funktion — er, læs [denne artikel](/general/ad-filtring/how-ad-blocking-works).

![Adblocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

I Adblocking-modulet er det muligt at:

- slå automatisk aktivering af sprogspecifikke filtre til,
- slå blokering af [søgeannoncer og selvpromovering](/general/ad-filtring/search-ads) fra,
- deaktivere annoncer i startmenuen på Windows 11,
- aktivere præinstallerede filtre, såsom _AdGuard Base-filter_,
- installere filtre fra listen eller tilføje et tilpasset filter ved klik på knappen _Tilføj et filter_,
- foretage ændringer i eksisterende regelgrupper via knappen _Filtereditor_,
- se alle forespørgsler sendt af webbrowsere og apps installeret på computeren ved klik på knappen _Filtreringslog_. Derfra kan enhver forespørgsel også blokeres/afblokeres ved at oprette en tilpasset regel,
- komponere et filter ud fra egne regler skrevet manuelt, importeret eller oprettet via AdGuard Assistent-udvidelsen.

Før man begynder at skrive sine egne regler manuelt, læs vores detaljerede [syntaksvejledning](/general/ad-filtring/create-own-filters).

### Sporingsbeskyttelse

Mange websteder indsamler oplysninger om deres besøgende, såsom deres IP-adresser, oplysninger om den installerede webbrowser og operativsystemet, skærmopløsning, og endda hvilken side brugeren kom eller blev omdirigeret fra. Visse websider bruger cookies til at markere og identificere webbrowseren og gemme personlige indstillinger og præferencer. Dette lader dem “genkende” brugeren ved det næste besøg. Sporingsbeskyttelse beskytter de personlige oplysninger mod disse data- og statistikindsamlingssystemer.

Indstillingerne til _Sporingsbeskyttelse_ kan justeres efter behov. Websteder kan f.eks. forhindres i at modtage den søgeforespørgsel, hvormed de blev fundet på internet, tredjeparts- og førsteparts-cookies kan slettes automatisk og placeringsdeling i webbrowseren kan deaktiveres for at forhindre lokationssporing.

For komplet info om _Sporingsbeskyttelse_ og dens mange muligheder, [læs denne artikel](/general/stealth-mode).

### Browsingsikkerhed

Browsingsikkerhed giver stærk beskyttelse mod fishing-websteder og ondsindede ditto. Nej, AdGuard til Windows er ikke et antivirusprogram. Den vil hverken stoppe download af en virus, når den allerede er startet, eller slette de allerede eksisterende. Men den vil advare, hvis man er ved at gå videre til et websted, hvis domæne er blevet føjet til vores database "ikke-betroede websteder", eller ved at downloade en fil fra et sådant websted. Mere information om dette moduls funktion kan findes i den [dedikerede artikel](/general/browsing-security).

Via dette modul er det muligt at:

- slå notifikationer til for at blokere forespørgsler til ondsindede og phishing websteder,
- slå notifikationslyde til,
- acceptere at indsende anonyme sikkerhedsrelaterede oplysninger til AdGuard-serveren for at hjælpe os med at holde databasen over skadelige og fishing-websteder opdateret.

![Browsingsikkerhed \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Ønskes mere info om Browsingsikkerhed, tjek [denne artikel](/general/browsing-security).

### DNS-beskyttelse

Der er tre væsentlige grunde til, at DNS-beskyttelsesindstillingerne måske ønskes gennemgået. For det første for at undgå at blive sporet af internetudbyderen. Inden et websted kan tilgås, f.eks. `google.com`, sender webbrowseren en forespørgsel til en DNS-server for at få webstedets IP-adresse oplyst. Normalt tilhører DNS-serveren internetudbyderen, hvilket giver vedkommende mulighed for at spore onlineaktivitet. For det andet for at kryptere DNS-trafikken. Den tredje er at [blokere indhold på DNS-niveau](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS-beskyttelse \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

I DNS-beskyttelsesmodulet i AdGuard til Windows kan der vælges DNS-servere fra kendte DNS-udbydere, herunder [AdGuard DNS](https://adguard-dns.io/kb/), der blokerer annoncer og trackere, AdGuard DNS Family Protection, der desuden blokerer voksenindhold eller AdGuard DNS Non-filtering, der leverer en sikker og pålidelig forbindelse uden filtrering overhovedet. Der kan endda tilføjes tilpassede DNS-servere og regler vha. [DNS-regelsyntaks](https://adguard-dns.io/kb/general/dns-filtering-syntax/). Om nødvendigt kan der tilføjes [DNS-filtre efter eget valg](https://filterlists.com).

Fra og med v7.20 kan der også tilføjes filtre ved blot at vælge dem fra en liste over færdigbyggede, betroede filtre. De er for overskueæighedshensyn grupperet i fire kategorier:

- **Generel**: Blokér annoncer og trackere
- **Regional**: Blokér annoncer og trackere på sprogspecifikke websteder
- **Sikkerhed**: Blokér upålidelige og phishing-websteder
- **Andre**: Dække særlige brugstilfælde, som falder udenfor ovenstående kategorier

![DNS-filtre \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Forældrekontrol

Der er flere websteder, hvortil adgang bør begrænses fra en PC brugt af børn. Denne opgave løses via Forældrekontrol.

![Forældrekontrol \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Modulet tjekker indholdet af websider, som åbnes i webbrowseren, og filtrerer dem, som indeholder uønsket indhold for børn: Billeder og tekster for voksne, groft sprogbrug, vold, narkopropaganda mv. Indstillingerne for Forældrekontrol er adgangskodebeskyttede, så barnet ikke kan omgå restriktionerne. Dette modul blokerer ikke kun videredirigeringer til uønskede websteder, men kan også slette de links fra søgeresultaterne, som er upassende for børn.

I modulet _Forældrekontrol_ kan der aktiveres _Sikker søgning_ og håndteres _sortlisten_ og _hvidlisten_ for at tilpasse, hvordan denne funktion opererer. Feltet _Blokér download af eksekverbare filer_ kan også markeret for at forhindre barnet i at downloade og installere software på computeren. _Forældrekontrol_-modulet har to muligheder mere: Der kan vælges en bestemt Windows-bruger, der skal beskyttes af _Forældrekontrol_ samt opsættes en adgangskode for at beskytte AdGuard-indstillingerne mod ændringer.

### Browser Assistent

![Browser Assistent \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

Fra denne fane kan der nemt fortsættes med at installere AdGuard Browser Assistent, hvis primære funktion er at håndtere filtrering direkte fra webbrowseren. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/archive/adguard-for-windows/browser-assistant.md).
