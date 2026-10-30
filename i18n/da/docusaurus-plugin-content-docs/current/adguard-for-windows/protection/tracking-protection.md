---
title: Sporingsbeskyttelse
sidebar_position: 2
---

Mange websteder indsamler data om besøgende, herunder IP-adresser, webbrowser- og OS-information, skærmopløsning og endda den side, den besøgende kom fra. Cookies kan bruges til at identificere webbrowseren, huske præferencer eller genkende en besøgende ved et senere besøg. Sporingsbeskyttelse forhindrer sådanne systemer i at indsamle personlige brugerdata. Læs mere i vores [artikel om Sporingsbeskyttelse i AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Sporingsbeskyttelse \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Ønskes der ikke brugt tid på manuel filterjustering, kan et af de færdiglavede beskyttelsesniveauer blot vælges:

- _Standard_: Slået til som standard; giver pålidelig beskyttelse ved dagligdags surfing.
- _Høj_: Fjerner sporingsparametre fra side-URL'er og blokerer tredjepartscookies. Genindlogning på nogle websteder kan være nødvendig, eller andre cookie-relaterede problemer kan opleves.
- _Ekstrem_: Begrænser cookielevetiden for tredjepartscookies og blokerer visse webbrowser-API'er. Nogle websteder vil muligvis ikke fungere korrekt.

For maksimal fleksibilitet, vælg _Tilpasset_ og justér alt manuelt. Indstillingerne dér er opdelt i fem kategorier:

- [Generelle indstillinger](#general-settings)

- [Sporingsmetoder](#tracking-methods)

- [Webbrowser-API](#browser-api)

- [Windows-sporing](#windows-tracking)

- [Diverse](#miscellaneous)

## Generelle indstillinger

![Generelle indstillinger \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Blokér trackere

Blokerer trackere og Web-analyseværktøjer vha. _AdGuard Tracking Protection-filter_.

### Fjern sporingsparametre fra URL'er

Fjerner sporingsparametre, såsom `utm_*` og `fb_ref`, fra siders URL'er vha. _AdGuard URL Tracking-filter_.

### Skjul søgeforespørgsler

Skjuler forespørgsler overfor websteder besøgt via en søgemaskine. Når der dirigeres til et websted fra Google, Yahoo eller enhver anden søgemaskine, skjuler denne indstilling den søgeforespørgsel, hvormed webstedet blev fundet.

### Bed websteder undlade sporing

Sender signalerne [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) samt [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) til det besøgte websted.

### Andre fortrolighedsfiltre

Anvender en række yderligere filtre til beskyttelse af fortrolighed. Tallet ud for _Aktiverede i filtre_ angiver, hvor mange filtre, som p.t. er aktive.

## Sporingsmetoder

![Sporingsmetoder \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Slet tredjepartscookies

Websteder bruger cookies til at gemme besøgendes præferencer — f.eks. det valgte sprog, placeringen eller varerne i indkøbskurven. Når den besøgende returnerer, sender webbrowseren disse cookies tilbage, så webstedet genkender gæsten.

Tredjepartscookies fungerer på samme måde, men de oprettes af domæner andre end dét, der besøges. F.eks. kan cnn.com inkludere en Facebook _Like_-widget, der sætter en cookie, der senere læses af Facebook. Annoncører bruger ofte sådanne cookies til at spore, hvilke andre sider, som besøges.

Med denne indstilling kan der sættes en tidsgrænse (i minutter), hvorefter alle tredjepartscookies slettes. Sættes timeren til 0, blokeres sådanne cookies fuldstændigt.

![Levetid (Time-to-live) \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Husk, at denne indstilling fjerner alle tredjepartscookies, inkl. dem, som bruges til logins via sociale netværk eller andre eksterne tjenester. Dette betyder, at der muligvis skal logges ind igen fra tid til anden eller håndteres andre cookierelaterede problemer. Ønskes kun tracking-cookies blokeret, benyt [_AdGuard Tracking Protection-filter_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Slet førstepartscookies (ikke anbefalet)

Denne indstilling sletter cookies sat af det aktuelt besøgte websted efter en valgt tidsperiode (i minutter). Når timeren løber ud, fjernes alle sådanne cookies. Indstil timeren til 0 for helt at blokere dem.

:::caution

Denne indstilling anbefalers ikke aktiveret, da den markant kan forstyrre visse websteders funktionalitet.

:::

### Blokér ETag og If-None-Match-headere

Fjerner ETag og If-None-Match-headere fra forespørgsler og svar for at forhindre websteder i at bruge dem til sporing.

Når en webbrowser adresserer en side, tildeler serveren den et ETag — en unik identifikator brugt til at cache sidens indhold. Ved efterfølgende besøg sender webbrowseren det samme ETag retur til serveren. Dette tillader serveren at genkende den besøgende. Så længe de cachede filer eksisterer, overføres ETag'et med hver forespørgsel. Indeholder siden også indlejrede elementer fra andre servere, såsom billeder eller iframes, kan disse servere bruge ETags til aktivitetssporing uden brugerens viden.

### Blokér tredjeparts Godkendelses-header

Deaktiverer cachet godkendelsesdata, som kan bruges til sporingsformål. Kan forstyrre funktionaliteten af visse webbrowserudvidelser og websteder.

Godkendelsesheaderværdien caches af webbrowseren og sendes automatisk med hver forespørgsel til det samme domæne. Da den følger med hver forespørgsel, kan den bruges til at identificere og spore brugeren på samme måde, som cookies gør.

## Browser-API

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Forhindr IP-adresselækager via WebRTC

Får WebRTC til at anvende en striksere IP-adressepolitik for at forhindre afsløring af den reelle IP-adresse, selv ved brug af proxy eller VPN.

WebRTC (Web Real-Time Communication) er en teknologi, der tillader direkte datastreaming mellem webbrowsere og apps. Som standard kan den afsløre den reelle IP-adresse, selv når en proxy eller VPN er aktiveret. Denne indstilling håndhæver en strengere IP-adressepolitik i stedet for helt at blokere WebRTC, så webbrowserapplikationer, såsom beskedtjenester, chats og spil, er mindre tilbøjelige til at blive påvirket.

### Blokér Push-API

Push-API'en tillader servere at sende beskeder til webapplikationer uanset webbrowserens aktivitetstatus. Derfor kan der modtages notifikationer fra websteder, selvom webbrowseren er skjult i systembakken eller ikke er startet. Aktivering af denne indstilling blokerer helt Push-API'en.

### Blokér Lokations-API

Når denne indstilling er aktiveret, vil webbrowseren ikke længere sende GPS-data til websteder. Dette forhindrer dem i at bestemme brugerens placering, ændre søgeresultater eller skræddersy indhold baseret på den aktuelle placering.

## Windows-sporing

![Windows-sporing \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Deaktivér Windows-telemetri

Deaktiverer indsendelsen af tekniske data om brugerens system og app-brug.

### Deaktivere Windows Recall

Deaktiverer funktionen Windows Recall, der periodisk tager øjebliksbilleder af skærme og gemmer dem lokalt. Dette forhindrer, at sensitive oplysninger, som er synlige på skærmen, affotograferes og gemmes.

### Slå Reklame-ID fra

Deaktiverer Reklame-ID for at blokere sporing af app-brug.

### Deaktivér automatisk anmeldelse fra Microsoft Defender

Blokerer automatisk anmeldelse og prøvetagning af formodet malware.

### Deaktivér WAP Push-besked rutningstjeneste

Deaktiverer dataindsamling om Windows-komponentproblemer.

## Diverse

![Diverse \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Skjul Referer fra tredjeparter

Referer er en HTTP-header inkluderet i webbrowser-til-server forespørgsler. Den indeholder forespørgselskildens URL. Når der navigeres fra en side til en anden, gemmer Referer'en den oprindelige sides URL. Serveren, der hoster destinationswebsiden, har ofte software, der analyserer Referer og udtrækker diverse information herfra.

Aktivering af indstillingen _Skjul Referer fra tredjeparter_ forhindrer tredjepartswebsteder i at se denne information ved at ændre eller fjerne headeren.

Der kan også angives en tilpasset værdi i feltet _Tilpasset Referer_. Lad feltet stå tomt for brug af standard-Referer.

Bemærk, at AdGuard-applikationer 'opsnapper' webbrowser-til-server-forespørgsler for at kunne filtrere trafik. Forespørgsler til reklame-, sporings- og phishing-servere kan ændres, før de sendes til serveren, eller blokeres fuldstændigt.

Det samme gælder for indstillingen _Skjul Referer fra tredjeparter_: For at filtrere trafik opfanger AdGuard HTTP(S)-forespørgsler og kan ændre eller blokere dem, før de når serveren. Ændringen sker kun, efter at forespørgslen har forladt brugerens webbrowser. Af denne årsag, såfremt headers i webbrowseren (f.eks. med Chrome Developer Tools) tjekkes, vil den oprindelige Referer stadig kunne ses. For at bekræfte, at den er blevet ændret, kan eksterne værktøjer, såsom Fiddler, anvendes.

### Skjul Brugeragent (User-Agent)

Når et websted besøges, sender webbrowseren en header kaldet Brugeragent som en del af HTTP-forespørgslen. Den ligner en tekstlinje begyndende med "User-Agent:". Denne linje indeholder normalt oplysninger såsom webbrowsernavn og -version, operativsystem og sprogindstillinger.

Ved at slå denne indstilling til fjerner AdGuard identificerende oplysninger fra Brugeragenten, så annoncører og trackere ikke kan bruge dem til at profilering. Hvis det ønskes, kan en tilpasset værdi angives i feltet _Tilpasset Brugeragent_. For at beholde standardværdien, lad blot feltet stå tomt.

### Maskér IP-adresse

AdGuard kan ikke helt skjule den reelle IP-adresse, men kan erstatte den med en anden, så websteder opfatter forbindelsen som om, at den går igennem en proxy. I nogle tilfælde hjælper dette med at tilsløre den reelle IP-adresse.

En hvilken som helst IP-adresse, der ønskes brugt, kan angives i det korresponderende felt. Lad feltet stå tomt for brug af standard IP-adressen.

### Fjern X-Client-Data header

Forhindrer Google Chrome i at indsende oplysninger om sin version og ændringer i forespørgsler til Google-domæner, herunder tjenester såsom DoubleClick og Google Analytics.

### Beskyt mod DPI

![Beskyt mod DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) er en teknologi brugt af visse ISP'er til at analysere og filtrere trafik baseret på pakkeindhold. Når denne indstilling er aktiveret, ændrer AdGuard udgående pakkedata for at gøre det sværere for DPI-systemer at identificere og analysere trafikken, hvilket bidrager til at beskytte forbindelsesfortroligheden.

Ved klik på _Beskyt mod DPI_ åbnes en separat skærm med tre grupper af indstillinger:

**ClientHello-opdeling** — ændrer TLS ClientHello-meddelelsen for at gøre det sværere for DPI-systemer at registrere og blokere krypterede forbindelser. Følgende strategier er tilgængelige:

- _Opdel TCP-pakke på fast position_ — opdeler ClientHello TCP-pakken på en bestemt byteposition.
- _Opdel TLS-posten på en fast position_ — opdeler TLS-posten indeholdende ClientHello på en angivet byteposition.
- _Opdel TLS før SNI_ — opdeler ClientHello før feltet Server Name Indication.
- _Opdel TLS efter SNI_ — opdeler ClientHello efter feltet Server Name Indication.
- _Opdel TLS midt i SNI_ — opdeler ClientHello midt i feltet Server Name Indication.
- _Opdel TLS tilfældigt inden for SNI_ — opdeler ClientHello på en tilfældig position i feltet Server Name Indication.

Ved brug af en strategi med fast position, indstil _Byteposition for opdeling_ (1-1500) for at angive, hvor opdelingen skal ske.

**Opdeling af HTTP-forespørgsler** — opdeler HTTP-forespørgsler i flere TCP-pakker for at omgå DPI-systemer, som er afhængige af at inspicere komplette HTTP-forespørgsler.

**HTTP-mellemrumsmanipulation** — manipulerer blanktegn i HTTP-forespørgsler for at forvirre DPI-systemer, som fortolker HTTP-headere, hvilket besværliggør identifikation og blokering af specifik trafik.

:::caution

Denne funktion kan forhindre adgang til visse ukrypterede websteder. Er denne funktion aktiveret i AdGuard til Windows, kan den også forstyrre ESETs antivirusprogram – ESET vil ikke kunne filtrere trafik, hvilket vil gøre visse ondsindede eller blokerede websteder tilgængelige.

:::
