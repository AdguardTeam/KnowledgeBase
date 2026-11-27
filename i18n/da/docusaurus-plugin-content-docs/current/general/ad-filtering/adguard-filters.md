---
title: AdGuard-filtre
sidebar_position: 2
---

:::info

Denne artikel omhandler de filtre, vi udvikler, og som er præinstalleret i AdGuard. For at tjekke dem ud, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Denne artikel omhandler de filtre, vi opretter til brug i AdGuard og andre adblocker-software (f.eks. uBlock Origin). Filtre er sæt regler i tekstformat, som bruges af AdGuard-apps og -programmer til at bortfiltrere reklamer og fortrolighedstruende indhold, såsom bannere, pop op-vinduer eller trackere. Filtre indeholder lister over regler baseret på deres formål. Sprogfiltre inkluderer regler for korresponderende sprogsegmenter af internet (f.eks. tyskfilter). Opgavebaserede filtre grupperer regler, som udfører en specifik opgave, såsom filter på sociale medier eller filter til Sporingsbeskyttelse. Aktivering eller deaktivering af et filter gør det nemmere at arbejde med hele listen af regler på én gang.

## AdGuard-filtre

- **Basisfilter** fjerner annoncer fra websteder med indhold på engelsk. Oprindeligt baseret på [EasyList](https://easylist.to/) og tilpasset af os. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- **Tracking Protection-filter** — omfattende liste over forskellige onlinetællere og webanalyseværktøjer. Bruges til at skjule brugerhandlinger online og undgå sporing. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- **URL Tracking-filter** forbedrer fortroligheden ved at fjerne sporingsparametre fra URL'er. Når en bruger vælger at blokere sporingsparametre i Stealth Mode, aktiveres dette filter automatisk. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- **Sociale medier-filter** fjerner adskillige "Like"- og "Tweet"-knapper samt andre sociale medier-integrationer på populære websteder. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- **Annoyance filters** block irritating elements on webpages. The following AdGuard filters are available:

    - **Cookie Notices** blocks cookie notices on webpages. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **Popups** blokerer alle slags pop op'ere, som ikke kræves for webstedets drift. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **Mobile App Banners** blokerer bannere, som promoverer mobil-apps på websteder. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **Widgets** blokerer tredjeparts-widgets: Online-assistenter, live support chats mv. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **Other Annoyances** blokerer elementer, som ikke falder ind under de populære irritationskategorier. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)

- **Filter, der afblokerer søgeannoncer og selvpromoveringer**, afblokerer annoncer, som kan være nyttige for brugere. Læs mere om dette filter på [denne side](../search-ads). [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **Mail Sporingsbeskyttelse** blokerer sporingspixels indlejret i e-mails for at forhindre afsendere i at monitorere, hvornår beskederne åbnes og indsamle oplysninger om enheden eller aktivitet. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_25_Mail_Tracking_Protection/filter.txt)
- **Russian filter** fjerner annoncer fra russisksprogede websteder. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **German filter** fjerner annoncer fra tysksprogede websteder. Oprindeligt baseret på filteret [EasyList Germany](https://easylist.to/) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler<](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **French filter** fjerner annoncer fra fransksprogede websteder. Oprindeligt baseret på filteret [Liste FR](https://forums.lanik.us/viewforum.php?f=91) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler<](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **Japanese filter** fjerner annoncer fra japansksprogede websteder. Oprindeligt baseret på filteret [Fanboy's Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **Dutch filter** fjerner annoncer fra hollandsksprogede websteder. Oprindeligt baseret på filteret [EasyList Dutch](https://easylist.to/) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **Italian filter** fjerner annoncer fra italiensksprogede websteder. Oprindeligt baseret på filteret [EasyList Italy](https://github.com/easylist/easylistitaly/) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_26_Italian/filter.txt)
- **Polish filter** fjerner annoncer fra polsksprogede websteder. Oprindeligt baseret på [Official Polish filters for AdBlock, uBlock Origin & AdGuard](https://github.com/MajkiIT/polish-ads-filter#polish-filters-for-adblock-ublock-origin--adguard) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_27_Polish/filter.txt)
- **Spanish/Portugese filter** fjerner annoncer fra spansk-/portugisisksprogede websteder. Oprindeligt baseret på filteret [Fanboy's Spanish/Portugese](https://www.fanboy.co.nz/fanboy-espanol.txt) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **Turkish filter** fjerner annoncer fra tyrkisksprogede websteder. Oprettet af os iht. klager fra brugerne. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **Chinese filter** fjerner annoncer fra kinesisksprogede websteder. Oprindeligt baseret på filteret [EasyList China](https://github.com/easylist/easylistchina) og efterfølgende ændret af os iht. klager fra brugere. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **Ukrainsk filter** fjerner annoncer fra ukrainsksprogede websteder. Læs mere om dette filter på [denne side](https://adguard.com/en/blog/ukrainian-filter.html). [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt)
- **Eksperimentelt filter** til testning af nogle nye filtreringsregler, som potentielt kan forårsage konflikter og rod med websteders funktion. Fungerer disse regler problemfrit, føjes de til hovedfilterne. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **Mobile ads filter** blokerer annoncer på mobilenheder. Indeholder alle kendte mobilannoncenetværk. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **DNS-filter** — sammensat af flere andre filtre (AdGuard Basisfilter, Social media-filter, Spyware-filter, Mobile ads-filter, EasyList og EasyPrivacy) og forenklet specifikt for bedre kompatibilitet med DNS-adblocking. Dette filter bruges af [AdGuard DNS](https://adguard-dns.io/kb)-servere til at blokere annoncer og sporing. [Vis regler](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## AdGuard Filterpolitik

Vores filterpolitik definerer, hvad AdGuard-filtre skal og ikke skal blokere samt reglerne for tilføjelse og fjernelse af regler fra filtre. Læs den fulde [AdGuard Filterpolitik](../filter-policy) for detaljerede oplysninger.

## Bidrage til AdGuard-filtre

Vi er velsignet med et unikt fællesskab, der ikke kun elsker AdGuard, men også at give tilbage. Mange folk melder sig frivilligt på forskellige måder for at gøre AdGuards brugeroplevelse bedre for alle. Du er velkommen til at være med i bandet og gøre en forskel. Vi vil gøre vores del og med glæde belønne det mest aktive fællesskab. Så, hvad kan du gøre?

### Anmelde problematikker

Vi er afhængige af, at fællesskabet informerer os om problemer med vores filtre. Det hjælper os med at bruge vores tid mere effektivt og holde filtrene konstant opdateret. For at indsende en rapport, brug dette [webrapporteringsværktøj](https://agrd.io/report).

### Foreslå filtreringsregler

Der kan findes mange åbne problematikker i [GitHub-filterrepo'et](https://github.com/AdguardTeam/AdguardFilters/issues). Hver af dem refererer til en problematik på et websted, såsom en overset annonce eller en falsk positiv. Vælg en hvilken som helst og foreslå egne regler i kommentarerne. AdGuard-filterteknikere vil gennemgå forslagene, og finder de dem passende, føjes de til AdGuard-filtrene.

Her er den [officielle dokumentation](../create-own-filters) til syntaksen for AdGuard-filtreringsregler. Læs den omhyggeligt, da den vil være en hjælp ved oprettelse af egne filtreringsregler.

### Andre måder at bidrage på

Her er [en dedikeret side](https://adguard.com/contribute.html) til folk med interesse i at bidrage til AdGuard på andre måder.
