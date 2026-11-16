---
title: Sporingsbeskyttelse (tidligere Skjult tilstand (Stealth Mode))
sidebar_position: 4
---

Mange websteder indsamler oplysninger om deres besøgende, såsom IP-adresser, oplysninger om den installerede webbrowser og operativsystem, skærmopløsning, og endda hvilken side brugeren kom, eller blev omdirigeret, fra. Visse websider bruger cookies til at markere webbrowseren og gemme personlige indstillinger, brugerpræferencer eller "genkende" brugere ved nye besøg. **Sporingsbeskyttelse** sikrer de personlige oplysninger mod sådanne data- og statistikindsamlingssystemer.

Indstillingerne til sporingsbeskyttelse kan justeres efter behov. Websteder kan f.eks. forhindres i at modtage søgemaskineforespørgsler, som ledte frem til dem. Tredjeparts- og førstepart-cookies kan slettes automatisk. Webbrowsergeolokationsdelingen, der kan bruges til at placeringssporing, kan også slås fra. Den reelle IP-adresse kan skjules eller erstattes med en vilkårlig.

Nedenfor oplistes og beskrives de vigtigste funktioner og muligheder, som kan styres i indstillingerne til **Sporingsbeskyttelse**. De er opdelt i fire grupper: **Generelt**, **Sporingsmetoder**, **Browser-API**og **Diverse**.

:::note

Nogle funktioner er kun tilgængelige i bestemte produkter grundet begrænsninger fra operativsystemet eller webbrowseren.

:::

## Generelt {#general}

### Blokér trackere {#blocktrackers}

Denne funktion blokerer trackere og webanalysværktøjer via AdGuard Sporingsbeskyttelsesfilter.

### Fjern sporingsparametre fra URL'er {#removetracking}

Aktiveres denne funktion, bruger AdGuard sit URL-sporingsfilter til at fjerne sporingsparametre, såsom `utm_*` og `fb_ref`, fra sider-URL'er.

### Blokér fingerprinting {#fingerprinting}

Denne funktion forhindrer websteder i at identificere webbrowseren og enheden via lærred-fingerprinting.

Et canvas er et websideelement til at tegne billeder. Et websted kan tegne skjult tekst og former på et lærred og læse resultatet tilbage. Resultatet afhænger af enheden, grafikhardware, skrifttyper og webbrowser, så det kan identificere brugeren selv uden cookies.

Med denne funktion aktiveret ændrer AdGuard en smule på de billeder, som websteder læser fra et lærred. Ændringerne er for små til at se. Indtil webbrowseren genstartes, eller AdGuard opdateres, får hvert websted det samme ændrede resultat. Andre websteder får forskellige resultater, så resultatet kan ikke bruges til at genkende brugeren på tværs af websteder.

Det, der ses på siden, ændrer sig ikke. Funktionen dækker ikke WebGL- og WebGPU-fingerprinting eller lærreder tegnet i Web workers. Nogle websteder kan detektere beskyttelsen eller omgå den.

:::caution

Web-apps, som eksporterer billeder fra et lærred, såsom online-billededitorer, kan få let ændrede billeder. Fejlfungerer et websted, kan det føjes det til hvidlisten eller beskyttelsen slås fra for det med en [regel](/general/ad-filtering/create-own-filters#stealth-modifier) såsom `@@||example.com^$stealth=fingerprinting`.

:::

:::note

Tilgængelig i [AdGuard Browser Extension](/adguard-browser-extension/features/stealth-mode#fingerprinting) fra v5.6.

:::

### Skjul søgeforespørgsler {#searchqueries}

Denne funktion skjuler søgeforespørgslen fra websteder besøgt via søgemaskineresultater. Åbnes f.eks. et websted via en søgemaskine, såsom Google eller Yahoo, skjuler denne funktion søgeforespørgslen brugt til at finde dette websted.

### Bed websteder undlade sporing {#donottrack}

Sender signalerne [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) og [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) til de besøgte websteder.

### Andre fortrolighedsfiltre {#otherprivacyfilters}

Denne funktion viser andre fortrolighedsfiltre, som er aktiveret i **Filtre**.

:::note

Tilgængelig i AdGuard til Android og AdGuard til Windows.

:::

## Sporingsmetoder {#tracking-methods}

### Slet tredjepartscookies {#3p-cookie}

Denne funktion forhindrer annoncører i at spore brugeradfærd på tværs af flere sider ved at begrænse levetiden for tredjepartscookies.

Websteder bruger cookies til at gemme besøgendes oplysninger og præferencer, såsom valgte sprog, geoplacering eller en indkøbskurvs vareindhold. Når brugeren returnerer til et websted, sender webbrowser webstedet de dertilhørende cookies, hvormed det kan "huske" brugerens data.

Tredjepartscookies er implementeret af et andet websted end det aktuelt besøgte. F.eks. kan cnn.com have en Facebook "Like"-widget på sin hjemmeside. Denne widget installerer en cookie, som Facebook kan læse senere. Visse annoncører bruger sådanne cookies til at spore, hvilke øvrige websteder indeholdende deres annoncer, som besøges.

Indstil en tidsperiode (i minutter), efter hvilken alle tredjepartscookies slettes. For at blokere disse cookies, indstil deres levetid til 0.

:::caution

Denne indstilling sletter alle tredjepartscookies, inkl. loginoplysninger via sociale netværk eller andre tredjepartstjenester. Der skal muligvis periodisk logges ind på nogle websteder igen og håndteres andre cookie-relaterede problemer. Brug [*AdGuard Sporingsbeskyttelse-filteret*](/general/ad-filtering/filter-policy/#tracking-protection-filter) for kun at blokere sporingscookies.

:::

:::note

Tilgængelig i AdGuard til Android/Windows/Mac samt AdGuard Browser Extension (MV2-baserede webbrowsere).

:::

### Slet førstepartscookies (ikke anbefalet) {#1p-cookie}

Denne funktion forhindrer websteder i at huske brugeroplysninger, såsom login-legitimationsoplysninger og sprogpræferencer, ved at begrænse levetiden af førstepartscookies.

Indstil en tidsperiode (i minutter), efter hvilken alle cookie slettes. For at blokere disse cookies, indstil deres levetid til 0.

:::caution

Denne indstilling anbefalers ikke aktiveret, da den markant kan forstyrre visse websteders funktionalitet. If you block these cookies, some websites may break or stop working.

:::

:::note

Tilgængelig i AdGuard til Android/Windows/Mac samt AdGuard Browser Extension (MV2-baserede webbrowsere).

:::

### Blokér ETag og If-None-Match-headere {#3p-cache}

Denne funktion fjerner ETag og If-None-Match headere fra forespørgsel og svar for at forhindre sporing via disse.

Når en webbrowser tilgår en side, tildeles denne side et ETag af serveren. Dette ETag bruges af webbrowseren til at cache sideindholdet. Ved efterfølgende forespørgsler sender webbrowseren ETag'et til den relevante server, og underretter den dermed om den besøgendes identitet. Så længe webstedets filer er cachelagret, sendes ETag'en, hver gang webbrowseren tilgår dette websted. Hvis webstedet har indlejret indhold fra en anden server (såsom et billede eller iframe), kan denne server upåagtet spore besøgendes aktiviteter.

:::note

Tilgængelig i AdGuard til Android/Windows/macOS.

:::

### Blokér tredjeparts Godkendelses-header {#3p-auth}

Denne funktion deaktiverer cachelagrede godkendelsesdata, som kan bruges til sporingsformål. Kan forstyrre funktionaliteten af visse webbrowserudvidelser og websteder.

Headerværdien "Godkendelse" cachelagres af webbrowseren og sendes dernæst sammen med hver forespørgsel til det pågældende domæne. Det betyder, at den kan bruges til sporingsformål, ligesom cookies.

:::note

Tilgængelig i AdGuard til Android/Windows/macOS.

:::

## Browser-API {#browser-api}

:::note

Kun funktionen **Blokér WebRTC** er tilgængelig i AdGuard Browser Extension. Den kan findes i afsnittet **Diverse**.

:::

### Blokér WebRTC {#webrtc}

Denne funktion blokerer WebRTC, en kendt sårbarhed, der kan lække den reelle IP-adresse selv ved brug af proxy eller VPN.

WebRTC (Web Real-Time Communication) er en teknologi, der muliggør direkte streaming af data mellem webbrowsere og apps. Den kan dog lade andre se den reelle IP-adresse, selv ved brug af proxy eller VPN.

:::caution

Aktivering af denne indstilling kan forstyrre funktionen af visse webbrowserapplikationer, såsom besked- og chat-apps, streamingplatforme eller spil.

:::

:::note

I AdGuard Browser Extension anvendes *Blokér WebRTC* globalt og kan ikke styres pr. websted. Undtagelsesregler, såsom `@@||example.com^$stealth=webrtc`, understøttes ikke. Til WebRTC-styring pr. websted, anvend den fuldt udstyrede AdGuard-app til Windows, Mac eller Android.

:::

### Blokér Push-API {#push}

Denne funktion blokerer push-notifikationer fra websteder.

Push-API'en tillader servere at sende beskeder til webapplikationer uanset webbrowserens aktivitetsstatus. Det betyder, at notifikationer fra forskellige websteder kan ses, selv når webbrowseren er minimeret eller lukket. Aktivér denne indstilling for helt at blokere webbrowserens Push-API.

### Blokér Lokations-API {#location}

Denne funktion forhindrer websteder i at registrere placering.

Aktivering af denne indstilling forhindrer webbrowseren i at sende GPS-data, som kan bruges til placeringsbestemmelse, ændring af søgeresultater eller på anden måde påvirke weboplevelsen.

### Blokér Flash {#flash}

Denne funktion øger beskyttelsen og accelererer webstedsindlæsning ved at blokere Flash Player-support i webbrowsere.

Flash Player-plugin'et er blevet mere og mere sårbart over for onlinetrusler, såsom vira og hackere. Det kan også forøge websteders indlæsningstid betydeligt. Aktiveres denne indstilling, blokerer AdGuard webbrowserens evne til at detektere komponenter (såsom plugins og ActiveXObject-objekter), som tillader visning af Flash-indhold. Dette betyder reelt, at webbrowsere ikke kan håndtere Flash-indhold.

### Blokér Java {#java}

Funktionen deaktiverer Java-plugins på websteder og i webtjenester, da API'en har alvorlige sikkerhedsproblemer. Deaktiverer ikke JavaScript.

Visse websteder og webtjenester bruger stadig den gamle teknologi til at understøtte Java-plugins. Java-plugin API'en, der er grundlaget for Java-plugins, har alvorlige sikkerhedsfejl. Af sikkerhedshensyn kan sådanne plugins deaktiveres. Selvom det besluttes at bruge indstillingen "Blokér Java", vil JavaScript fortsat være aktiveret.

## Windows-sporing {#windowstracking}

:::note

Disse funktioner er kun tilgængelige i AdGuard til Windows.

:::

### Deaktivér Windows-telemetri {#windowstelemetry}

Denne funktion deaktiverer indsendelsen af tekniske data om systemet og app-brug.

### Deaktivering af Windows Recall {#windowsrecall}

Denne funktion forhindrer Windows i at tage og analysere skærmfotos af computeraktiviteten.

### Slå Reklame-ID fra {#advertisingid}

Denne funktion deaktiverer Reklame-ID for at blokere sporing af apps-brug.

### Deaktivér automatisk anmeldelse fra Microsoft Defender {#windowsautoreport}

Funktionen blokerer automatisk anmeldelse og prøveudtagning af formodet malware.

### Deaktivér WAP Push-besked rutningstjeneste {#wappushrouting}

Funktionen deaktiverer dataindsamling om Windows-komponentproblemer.

## Diverse {#miscellaneous}

### Skjul Referer fra tredjeparter {#referer}

Funktionen forhindrer tredjeparters adgang til info om besøgte websteder.

Referer er en HTTP-header brugt i webbrowser-til-server forespørgsler. Den indeholder forespørgselskildens URL. Når der navigeres fra en side til en anden, gemmer Referer'en den oprindelige sides URL. Serveren, der hoster destinationswebsiden, har ofte software, der analyserer Referer og udtrækker diverse information herfra. Aktivering af indstillingen *Skjul Referer fra tredjeparter* skjuler det aktuelle websted for tredjepartswebsteder ved at ændre HTTP-headeren.

En vilkårlig værdi kan også opsættes for Referer ved at angive denne i feltet *Tilpasset Referer*. Lad feltet stå tomt for brug af standard-Referer.

Bemærk, at AdGuard-applikationer 'opsnapper' webbrowser-til-server forespørgsler for at kunne filtrere trafik. Forespørgsler til reklame-, sporings- og phishing-servere kan ændres, før de sendes til serveren, eller blokeres fuldstændigt. Det samme gælder for indstillingen *Skjul Referer fra tredjeparter*: AdGuard opsnapper HTTP(S)-forespørgsler for at fjerne eller ændre Referer-headeren, når denne indstilling er aktiveret. Det sker dog først, efter at disse forespørgsler "forlader" webbrowseren. Det betyder, at hvis Referer monitoreres i selve webbrowseren (f.eks. vha. Chromes udviklerværktøjer), så ses den oprindelige Referer, da forespørgslen endnu ikke har nået AdGuard. Software, såsom [Fiddler](https://www.telerik.com/fiddler), kan anvendes for at sikre, at Referer ændres korrekt.

Grundet webbrowserudvidelsers basisfunktion, fungerer AdGuard Browser Extension til gengæld 'inde i' webbrowseren. Den vil på stedet ændre Referer, så Udviklerværktøjer viser den ønskede Referer for forespørgslerne.

### Skjul User-Agent (Brugeragent) {#useragent}

Denne funktion fjerner identificerende oplysninger fra User-Agent-headeren.

Når et websted besøges, sender webbrowseren sine oplysninger til serveren. Det ligner en tekstlinje, der er en del af en HTTP-forespørgsel, der begynder med "User-Agent:". Den inkluderer normalt webbrowsernavn og -version, operativsysteminfo og sprogindstillinger. Vi afskærer User-Agent fra identificerende oplysninger, så annoncører ikke får dem.

En vilkårlig værdi kan også opsættes for User-Agent ved at angive denne i feltet Tilpasset User-Agent. Lad feltet stå tomt for brug af standard User-Agent.

:::note

Tilgængelig i AdGuard til Android/Windows/macOS.

:::

### Maskér IP-adresse {#ip}

Denne funktion narrer websteder til at tro, at man er en proxy med den IP-adresse, man angiver.

Sporingsbeskyttelse kan ikke skjule brugerens IP-adresse. Vi kan dog skjule den, så websteder tror, at de besøges af en proxy. Nogle gange virker dette, og websteder ignorerer den reelle IP-adresse.

Der kan opsættes en vilkårlig IP-adresse, som andre vil opfatte som den reelle, ved blot at angive adressen i det relevante felt. Lad feltet stå tomt for brug af standard IP-adressen.

:::note

Tilgængelig i AdGuard til Android/Windows/macOS.

:::

### Fjern X-Client-Data header {#xclientdata}

Denne funktion forhindrer Google Chrome i at indsende sine versions- og ændringsoplysninger til Google-domæner (herunder DoubleClick og Google Analytics).

:::note

Tilgængelig i AdGuard til Android/Windows/Mac samt AdGuard Browser Extension (Chromium-baserede webbrowsere).

:::

### Beskyt mod DPI {#dpi}

Funktionen ændrer den udgående trafik, så ISP'ens Deep Packet Inspection-systemer ikke kan detektere de besøgte websteder. Garanterer dog ikke 100% beskyttelse mod alle DPI-systemer.

Deep Packet Inspection er et system til dybdegående analyse og filtrering af trafik baseret på pakkeindhold samt akkumulering af statistiske data. Via denne teknologi har internetudbydere mulighed for at tjekke trafik og begrænse deres kunders adgang til indhold.

AdGuard kan ændre udgående pakkedata, så klienten ikke falder ind under DPI-blokeringskriterierne. Det betyder, at brugeren ved at aktivere denne mulighed kan få adgang til det indhold, der ønskes. Ikke alle DPI-systemer kan p.t. omgås, men vi arbejder konstant på at forbedre dette aspekt.

:::note

Tilgængelig i AdGuard til Android/Windows/macOS.

:::

:::caution

Er denne funktion aktiveret i AdGuard til Windows, kan den forstyrre ESET-antivirus. Anti-DPI forhindrer ESET i at filtrere trafik og efterlader sortlistede og ondsindede websteder ublokerede.

:::
