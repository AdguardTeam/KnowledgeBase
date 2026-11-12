---
title: Filtreringsproblemer i Chrome 142+ ved brug af TDI-driveren
sidebar_position: 2
---

Nogle AdGuard til Windows-brugere kan opleve, at [appen stopper filtrering af trafik i Chromium-baserede webbrowsere](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Fra og med Google Chrome 142+ vises webbrowsertrafikken simpelthen ikke på TDI-driverniveauet, hvilket forhindrer AdGuard i at inspicere eller filtrere den.

Denne adfærd er ikke en fejl i AdGuard, men et resultat af nylige arkitektoniske og sikkerhedsmæssige ændringer i moderne webbrowsere.

## Hvorfor dette sker

Chromium-baserede webbrowsere (Chrome, Edge, Brave, Vivaldi mv.) har styrket deres sikkerhedsarkitektur. Én vigtig ændring er flytningen af følsomme interne processer til [Windows AppContainer-sandkassen](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), herunder Network Service, der håndterer al webbrowsertrafik.

### Ændringer foretaget i Chrome 142

Fra og med Chrome 142 startes Network Service-processen nu som standard i AppContainer.

Når dette sker, bruger applikationer, som kører i en AppContainer, ikke legacy TDI-netværksgrænsefladen; i stedet rutes deres trafik igennem den mere moderne WSK (Winsock Kernel) stak. Dette betyder, at TDI-driveren ikke kan se, opfange eller behandle forbindelser, som går igennem WSK, og al webbrowsertrafik bliver usynlig for TDI-driveren brugt af AdGuard.

Denne adfærd styres fuldstændigt af Chromes sandkassepolitikker og interne eksperimenter (feltforsøg), ikke af brugerindstillinger.

## Hvorfor dette påvirker AdGuard

TDI-driveren er en forældet Windows-teknologi, der har været udfaset og uunderstøtter af Microsoft i mange år. Den er inkompatibelt med moderne isolations- og sandkassemodeller brugt af webbrowsere.

Som følge heraf bliver TDI-baseret trafiksynlighed stadigt mere ustabil. I visse webbrowsere er den allerede forsvundet helt og vil til sidst helt ophøre med at fungere.

AdGuard behandler allerede TDI-driveren som udfaset, og dens fuldstændige fjernelse er planlagt i takt med produktets udvikling.

## Permanent løsning

Fra v8.0 RC har vi tilføjet eksperimentel understøttelse af SockFilter-driveren. Det rette problemet ved at løse konflikter i WFP-stakken. [Flere oplysninger](/adguard-for-windows/settings/app-settings/network-settings/).

For at bruge den, gå til _Indstillinger → Netværk → Trafikfiltrering_, slå trafikfiltrering til og vælg _SockFilter (Eksperimentel)_ fra listen over tilgængelige valgmuligheder.

Da det er eksperimentelt, kan fejl opleves. Bemærkes noget usædvanligt, uventet eller simpelthen helt i stykker, **kan der når som helst skiftes tilbage til TDI eller WFP** i samme afsnit.

## Midlertidig løsning

Visse Windows-registreringsdatabaseændringer kan tvinge webbrowseren til at stoppe brugen af AppContainer, hvilket får dens processer til igen at køre i en ikke-sandkassetilstand. Network Service stopper brugen af WSK-stakken og falder tilbage til en netværkssti, TDI-driveren kan se. AdGuard genvinder derefter evnen til at filtrere webbrowsertrafik.

### Sådan ændres registreringsdatabasen i Chromium-baserede webbrowsere

:::warning

Administratorrettigheder kræves for at redigere registreringsdatabasen. Ukorrekte ændringer kan påvirke systemets eller webbrowserens stabilitet og sikkerhed. Opret altid en sikkerhedskopi af registreringsdatabasenøglen, før den ændres.

Husk, før der fortsættes, at denne løsning reducerer sandbox/AppContainer-sikkerheden, hvilket gør webbrowseren mindre isoleret. Det har systemniveaueffekt, da det ændrer `HKLM`, og bør kun benyttes til fejlfinding, midlertidige løsninger, i kontrollerede miljøer eller når TDI-baseret trafikopfangelse er strengt nødvendig.

Det bør **ikke** anvendes bredt på tværs af slutbrugermaskiner. **Fortsæt kun, såfremt konsekvenserne er forstået.**

:::

De nødvendige registreringsdatabaseændringer kan udføres automatisk ved brug af en af de prægenererede .reg-filer nedenfor. Hver fil deaktiverer AppContainer/Network Service-sandkassefunktionen for en specifik Chromium-baseret webbrowser:

- [Download Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Download Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Download Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Download Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Download Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Download YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

Er en webbrowser ikke er opført, følg den manualle vejledningen nedenfor for at oprette de nødvendige registeringsdatabaseposter:

1. Fastslå dens politikgren ved at tjekke leverandørens officielle dokumentation eller ved at åbne den interne politikside. I Chrome, gå til `chrome://policy`. Andre webbrowsere bruger en lignende sti.

2. Identificér den korrekte registreringsdatabasegren til webbrowseren. Forskellige Chromium-baserede webbrowsere benytter forskellige politikstier under `HKLM`. Den skal følge formen `HKLM\\SOFTWARE\\Policies\\<Vendor>\\<Product>`.

3. Åbn Registreringseditoren:

   - Tryk på _Win + R_
   - Skriv _regedit_ og tryk på _Retur_
   - Godkend UAC-prompten ved at eksekvere den som administrator

4. Sikkerhedskopiér Policies-grenen:

   - Gå i venstre panel til `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
   - Højreklik på _Politikker_ → _Eksportér_
   - Gem filen som _Policies_backup.reg_

   Går noget galt, kan sikkerhedskopien gendannes ved at dobbeltklikke på denne fil.

5. Gå til webbrowserens politiknøgle:

   - Udvid stien `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Politikker_.
   - Find mappen korresponderende med webbrowseren.

Eksisterer nøglen ikke, kan den oprettes manuelt. Eksempel til Chrome:

- Højreklik på _Politikker_ → _Ny_ → _Nøgle_ og navngiv den `Google`
- I nøglen `Google`, opret endnu en nøgle med navnet `Chrome`

Gentag den samme logik for Chromium, Edge, Brave, Vivaldi, Yandex Browser mv. Resultatet bør være en nøgle, der ser således ud: `HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\<Vendor>\\<Product>`.

1. Tilføj de nødvendige registreringsdatabaseværdier:

   - I den korrekte nøgle, klik på højre panel → _Ny_ → _DWORD (32-bit) Værdi_

   - Navngiv den `RendererAppContainerEnabled`

   - Dobbeltklik på den og indstil:

     - **Værdi:** 0
     - **Base:** Hexadecimal eller Decimal (begge valg er fine)

   - Gentag processen og opret endnu en DWORD `NetworkServiceSandboxEnabled`.

   - Angiv dens værdi til 0.

   Begge parametre skal være `REG_DWORD` med værdien **0**.

2. Luk webbrowseren og effektuér indstillingerne. For at sikre, at politikken er indlæst:

   - Luk webbrowseren fuldstændigt
   - Tjek Jobliste og sørg for, at ingen processer, såsom _chrome.exe_, _msedge.exe_, _brave.exe_, fortsat kører
   - Åbn webbrowseren igen

3. Bekræft politikkernes effektuering ved at åbne webbrowserens politikviser.

Flg. aktive politikker bør kunne ses:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

Hvis tilgængelig, klik på _Genindlæs politikker_.

Færdig!
