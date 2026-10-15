---
title: Indstillinger
sidebar_position: 4
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Fanen _Indstillinger_ kan tilgås ved at trykke på ikonet længst til højre nederst på skærmen. Dette afsnit indeholder forskellige indstillinger, oplysninger om appen, licens og abonnement samt forskellige supportressourcer.

## Generelt

I dette afsnit kan appens udseende og adfærd håndteres: Her kan angives farvetema og sprog, håndteres notifikationer mv. Ønsker det at hjælpe AdGuard-teamet med at detektere app-nedbrud og undersøge anvendelighed, kan hhv. _Autoanmeld nedbrud_ og _Indsend tekniske data og interaktionsdata_ aktiveres.

![Generelt \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under _App- og filteropdateringer_ kan automatiske filteropdateringer opsættes og en app-opdateringskanal vælges. Vælg _Udgivelse_ for større stabilitet og _Beta_ eller _Nightly_ for tidlig adgang til nye funktioner.

![Opdateringer \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Avancerede indstillinger

_Automatisering_ muliggør håndtering af AdGuard via tasker-apps.

_Watchdog_ bidrager til at beskytte AdGuard mod at blive deaktiveret af systemet ([læs mere om Androids strømsparetilstand](/adguard-for-android/solving-problems/background-work/)). Værdien, der angives, vil være intervallet i sekunder mellem hvert Watchdog-tjek.

_Logningsniveau_ definerer, hvilke data om appens drift, som skal logføres. Som standard indsamler appen data om sine begivenheder. _Fejlretningsniveau_ logger flere hændelser — slå det til, hvis AdGuard-teamet anmoder om det for bedre forståelse af problematikken. [Læs mere om indsamling og indsendelse af logfiler](/adguard-for-android/solving-problems/log/)

![Avanceret \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Afsnittet _Lavniveauindstillinger_ er til ekspertbrugere. [Læs mere om lavniveauindstillinger](/adguard-for-android/features/low-level-settings/)

![Lavniveauindstillinger \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrering

Dette afsnit muliggør håndtering af filtre, udvidelser, netværksindstillinger, tilføjelse af websteder på hvidlisten samt oprettelse af regler.

[Find ud af, hvordan egne brugerregler oprettes](/general/ad-filtering/create-own-filters)

![Filtrering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.png)

### Filtre

AdGuard blokerer annoncer, trackere og irritationer ved at anvende regler fra sine filtre. De fleste funktioner i afsnittet _Beskyttelse_ drives af [AdGuard-filtre](/general/ad-filtering/adguard-filters/#adguard-filters). Aktiveres _Basisbeskyttelse_, slår denne automatisk AdGuard Base- og AdGuard Mobile Ads-filtrene til. Og omvendt: Slås begge filtre fra, deaktiveres _Basisbeskyttelse_ ligeledes.

![Filtre \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filtre, som er slået til som standard, er tilstrækkelig til normal AdGuard-drift. Ønskes en tilpasset adblocking, kan andre AdGuard- eller tredjepartsfiltre anvendes. Til dette formål vælges en kategori, og de ønskede filtre slås til. For at tilføje et tilpasset filter, tryk på _Tilpassede filtre_ → _Tilføj tilpasset filter_, og angiv dets URL eller filsti.

:::note

Slås for mange filtre til, kan visse websteder fejlfungere.

:::

[Læs mere om filtre](https://adguard.com/en/blog/what-are-filters.html)

### Udvidelser

Udvidelser muliggør tilføjelse af userscripts og brugerstile.

![Udvidelser \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts er miniprogrammer skrevet i JavaScript, som udvider webstedsfunktionaliteten. Installation af et userscript kræver en særlig userscript-håndtering. AdGuard har en sådan funktionalitet, hvilket muliggør tilføjelse af userscripts fra en URL eller fil.

Brugerstile er som userscripts, de muliggør at ændre, hvordan websider ser ud i webbrowseren uden at ændre deres indhold. De fungerer ved at tilføje CSS-stile til webstedets eksisterende stilarter. Ønskes f.eks. et mørkt tema på et websted, der ikke tilbyder ét, kan der bruge en brugerstil til at opnå dette.

For at tilføje en brugerstil, gå til _Indstillinger_ → _Filtrering_ → _Udvidelser_→ _Tilføj udvidelse_ → _Importere fra fil eller URL_. Færdiglavede brugerstile kan findes [online](https://userstyles.world/).

For at oprette en egen stil, tryk på _Tilføj udvidelse_ → _Opret brugerstil_.

#### AdGuard Extra

AdGuard Extra er et tilpasset brugerscript, der blokerer komplekse annoncer og mekanismer, som genindsætter annoncer på websteder.

#### Disable AMP

Disable AMP er et userscript, der deaktiverer [Accelererede mobilsider](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) på Googles søgeresultatside.

### Netværk

#### HTTPS-filtrering

For at blokere annoncer og trackere på de fleste websteder og i de fleste apps skal AdGuard filtrere deres HTTPS-trafik. [Læs mere om HTTPS-filtrering](/general/https-filtering/what-is-https-filtring)

##### Sikkerhedscertifikater

For at håndtere krypteret trafik installerer AdGuard sit CA-certifikat på enheden. Det er sikkert: Trafikken filtreres lokalt, og AdGuard bekræfter forbindelsens sikkerhed.

I ældre Android-versioner installeres certifikatet automatisk. Fra og med Android 11 kræves manuel installation. [Installationsvejledning](/adguard-for-android/solving-problems/manual-certificate/)

CA-certifikatet i brugerlageret er tilstrækkeligt til at filtrere HTTPS-trafik i webbrowsere og visse apps. Der er dog apps, som kun har tillid til certifikater fra systemlageret. For at filtrere HTTPS-trafik i så tilfælde, skal AdGuards CA-certifikat installeres i systemlageret. [Vejledning](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtrerede apps

Dette afsnit indeholder en liste over apps, for hvilke AdGuard filtrerer HTTPS-trafik. Bemærk, at indstillingen kun kan anvendes for alle apps, såfremt CA-certifikatet er installeret i både bruger- og systemlageret.

##### HTTPS-filtrerede websteder

Denne indstilling muliggør at håndtere websteder, for hvilke AdGuard skal filtrere HTTPS-trafik.

HTTPS-filtrering lader AdGuard filtrere indholdet af forespørgsler og svar, uden at disse data indsamles eller opbevares. For at øge sikkerheden, [er websteder indeholdende potentielt sensitive oplysninger dog undtaget fra HTTPS-filtrering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal- data).

Der kan også efter ønske føjes websteder til undtagelser ved at vælge en af tilstandene:

- Undtag bestemte websteder fra HTTPS-filtrering
- Filtrér kun HTTPS-trafik på websteder føjet til undtagelser

Som standard filtreres heller ikke websteder med Extended Validation-certifikater (EV), såsom finansielle websteder. Indstillingen _Filtrér websteder med EV-certifikater_ kan om ønsket slås til.

#### Proxy

AdGuard kan opsættes til at rute al enhedens trafik igennem en egen proxyserver. [Sådan opsættes en udgående proxy](/adguard-for-android/solving-problems/outbound-proxy)

I dette afsnit kan også et tredjeparts-VPN opsættes til at fungere med AdGuard, hvis tilladt af VPN-udbyderen.

Under _Apps, som kører via proxy_ kan de apps vælges, hvis trafik skal rutes igennem den angivne proxy. Er _Integration med AdGuard VPN_ slået til, har denne indstilling rollen som AdGuard VPNs app-undtagelser: Den muliggør at angive de apps, som skal rutes igennem AdGuard VPN-tunnelen.

#### Rutningstilstand

Dette afsnit muliggør valg af trafikfiltreringsmetode.

- _Lokal VPN_ filtrerer trafik igennem et lokalt oprettet VPN. Denne tilstand er den mest pålidelige. Grundet Android-restriktioner er det også den eneste tilgængelige trafikfiltreringsmetode på systemniveau på en ikke-rooted enhed.

:::note

Tilstanden _Lokalt VPN_ tillader ikke brug af AdGuard samtidigt med andre VPN-tjenester. For brug af et andet VPN med AdGuard, skal dette opsættes til at fungere i proxytilstand samt en udgående proxy opsættes i AdGuard. For AdGuard VPN sker dette automatisk vha. [_Integreret tilstand_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatisk proxy_ er en alternativ trafikrutningsmetode uden behov for et VPN. En markant fordel er, at den kan køres parallelt med et VPN. Denne tilstand kræver dog root-adgang.

:::note

Bemærk, at DNS-filtrering stadig vil være aktiv i rutningstilstanden _Automatisk proxy_, og enheden kan muligvis ikke filtrere DNS-forespørgsler fra bestemte apps. I rutningstilstanden _VPN_ undtages apps fra det lokale VPN via systemmetoder. Systemopløseren kan derfor ikke se, hvilke apps, som er inkluderet i VPN'et, og hvilke, som ikke er. Den tillader dem enten adgang til det lokale VPN, eller lader dem omgå det. DNS-forespørgsler kommer dog fra systemopløseren, ikke fra applikationen. Det er i tilstanden _Automatisk proxy_ kun muligt at undtage trafik fra applikationer, ikke deres DNS-forespørgsler, idet AdGuard ser disse som systemforespørgsler.

:::

- _Manuel proxy_ involverer opsætning af en proxyserver på en bestemt port, der dernæst kan opsættes i Wi-Fi-indstillingerne. Fra Android 10 kræver denne tilstand root-adgang.

## Licens

I dette afsnit findes oplysninger om licensen samt mulighed for at håndtere den:

- Køb en AdGuard-licens for at aktivere [den fulde versions funktioner](/adguard-for-android/features/free-vs-full)
- Log ind på AdGuard-kontoen eller angiv licensnøglen for at aktivere licensen
- Foretag tilmelding for at aktivere den 14-dages prøveperiode. Aktiveringskoden kan bruges på forskellige enheder og platforme
- Opfrisk licensstatus via trepriksmenuen (⋮)
- Åbn AdGuard-kontoen for at håndtere licensen dér
- Nulstil licensen – f.eks. hvis en enhedskvote er opbrugt for denne licens, og en anden ønskes anvendt

![Licensskærm \*mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/android/settings/licensetab.png)

## Support

Brug dette afsnit ved evt. spørgsmål eller forslag til AdGuard til Android. Det anbefales at konsultere _[FAQ](https://adguard.com/support/adguard_for_android.html)_ eller denne vidensbase, inden supporten kontaktes.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Bemærkes en overset annonce, bedes denne anmeldt via _Anmeld forkert blokering_.

Ved usædvanlig app-adfærd, vælg _Anmeld en fejl_. Hvis det er muligt, beskriv problematikken detaljet og tilføj app-logfiler. [Sådan beskrives en problematik](/guides/report-bugs/#how-to-describe-a-problem)

For evt. forslag, brug _Anmod om en funktion_.

:::note

GitHub er en alternativ måde at anmelde fejl og foreslå nye funktioner på. [Vejledninger og repo-links](/guides/report-bugs/#adguard-for-android)

:::
