---
title: Filtreringsproblemer i Chrome 142+ ved brug af TDI-driveren
sidebar_position: 14
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Nogle AdGuard til Windows-brugere kan opleve, at [appen stopper filtrering af trafik i Chromium-baserede webbrowsere](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Fra Google Chrome 142+ vises webbrowsertrafikken simpelthen ikke på TDI-driverniveauet, hvilket forhindrer AdGuard i at inspicere eller filtrere den.

Denne adfærd er ikke en fejl i AdGuard, men et resultat af nylige arkitektoniske og sikkerhedsmæssige ændringer i moderne webbrowsere.

## Hvorfor dette sker

Chromium-baserede webbrowsere (Chrome, Edge, Brave, Vivaldi mv.) har styrket deres sikkerhedsarkitektur. Én vigtig ændring er flytningen af følsomme interne processer til [Windows AppContainer-sandkassen](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), herunder Network Service, der håndterer al webbrowsertrafik.

### Ændringer foretaget i Chrome 142

Fra Chrome 142 startes Network Service-processen nu som standard i AppContainer.

Når dette sker, bruger applikationer, som kører i en AppContainer, ikke legacy TDI-netværksgrænsefladen; i stedet rutes deres trafik igennem den mere moderne WSK (Winsock Kernel) stak. Dette betyder, at TDI-driveren ikke kan se, opsnappe eller behandle forbindelser, som går igennem WSK, og al webbrowsertrafik bliver usynlig for TDI-driveren brugt af AdGuard.

Denne adfærd styres fuldstændigt af Chromes sandkassepolitikker og interne eksperimenter (feltforsøg), ikke af brugerindstillinger.

## Hvorfor dette påvirker AdGuard

TDI-driveren er en forældet Windows-teknologi, der har været udfaset og uunderstøtter af Microsoft i mange år. Den er inkompatibelt med moderne isolations- og sandkassemodeller brugt af webbrowsere.

Som følge heraf bliver TDI-baseret trafiksynlighed stadigt mere ustabil. I visse webbrowsere er den allerede forsvundet helt og vil til sidst helt ophøre med at fungere.

AdGuard behandler allerede TDI-driveren som udfaset, og dens fuldstændige fjernelse er planlagt i takt med produktets udvikling.

## Permanent løsning

Fra v7.22.4 har vi tilføjet eksperimentel understøttelse af SockFilter-driveren. Det retter problemet ved at løse konflikter i WFP-stakken. [Yderligere information](/archive/adguard-for-windows/features/network/#sockfilter-and-other-network-drivers).

For at bruge den, gå til _Indstillinger → Netværk → Trafikfiltrering_, slå trafikfiltrering til og vælg _SockFilter (eksperimentelt)_ fra listen over tilgængelige valgmuligheder.

Da det er eksperimentelt, kan der opleves fejl. Bemærkes noget usædvanligt, uventet eller simpelthen helt defekt, **kan der når som helst skiftes tilbage til TDI eller WFP** i samme afsnit.

## Midlertidig løsning

Visse Windows-registreringsdatabaseændringer kan tvinge webbrowseren til at stoppe brugen af AppContainer, hvilket får dens processer til igen at køre i en ikke-sandkassetilstand. Network Service stopper brugen af WSK-stakken og falder tilbage til en netværkssti, TDI-driveren kan se. AdGuard genvinder derefter evnen til at filtrere webbrowsertrafik.

### Sådan modificeres registreringsdatabasen i Chromium-baserede webbrowsere

:::warning

Administratorrettigheder kræves for at redigere registreringsdatabasen. Ukorrekte ændringer kan påvirke systemets eller webbrowserens stabilitet og sikkerhed. Opret altid en sikkerhedskopi af registreringsdatabasenøglen, før den ændres.

Husk, før der fortsættes, at denne løsning reducerer sandbox/AppContainer-sikkerheden, hvilket gør webbrowseren mindre isoleret. Det har systemniveaueffekt, da det ændrer `HKLM`, og bør kun benyttes til fejlfinding, midlertidige løsninger, i kontrollerede miljøer, eller når TDI-baseret trafikopsnapning er strengt nødvendigt.

Det bør **ikke** anvendes bredt på tværs af slutbrugermaskiner. **Fortsæt kun, såfremt konsekvenserne er forstået.**

:::

#### Brug af .reg-filer

De nødvendige registreringsdatabaseændringer kan udføres automatisk ved brug af en af de prægenererede .reg-filer nedenfor. Hver fil deaktiverer AppContainer/Network Service-sandkassefunktionen for en specifik Chromium-baseret webbrowser:

- [Download Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Download Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Download Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Download Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Download Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Download YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

Disse ændringer kan fortrydes ved brug af fortrydelses .reg-filerne angivet nedenfor. Disse filer fjerner registreringsdatabasegrenene tilføjet af den første .reg-fil:

- [Undo Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chrome.reg)
- [Undo Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chromium.reg)
- [Undo Edge.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Edge.reg)
- [Undo Brave.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Brave.reg)
- [Undo Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Vivaldi.reg)
- [Undo YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_YandexBrowser.reg)

#### Målrettet registreringsdatabaseredigering

Er en webbrowser ikke er opført, følg den manualle vejledningen nedenfor for at oprette de nødvendige registeringsdatabaseposter:

1. Fastslå dens politikgren ved at tjekke leverandørens officielle dokumentation eller ved at åbne den interne politikside. I Chrome, gå til `chrome://policy`. Andre webbrowsere bruger en lignende sti.

2. Identificér den korrekte registreringsdatabasegren til webbrowseren. Forskellige Chromium-baserede webbrowsere benytter forskellige politikstier under `HKLM`. Den skal følge formen `HKLM\\SOFTWARE\\Policies\\<Vendor>\\<Product>`.

3. Åbn Registreringseditoren:

   - Tryk på _Win + R_
   - Skriv _regedit_ og tryk på _Retur_
   - Godkend UAC-prompten ved at køre den som administrator

4. Sikkerhedskopiér Policies-grenen:

   - Gå i venstre panel til `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
   - Højreklik på _Policies_ → _Export_
   - Gem filen som _Policies_backup.reg_

   Går noget galt senere, kan sikkerhedskopien gendannes ved at dobbeltklikke på denne fil.

5. Gå til webbrowserens politiknøgle:

   - Udvid stien `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Policies_.
   - Find mappen svarende til webbrowseren.

Eksisterer nøglen ikke, kan den oprettes manuelt. Eksempel til Chrome:

- Right-click _Policies_ → _New_ → _Key_ and name it `Google`
- Inside `Google`, create another key named `Chrome`

Repeat the same logic for Chromium, Edge, Brave, Vivaldi, Yandex Browser, etc. You should end up with a key that looks like `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Add the required registry values:

   - In the correct key, click the right panel → _New_ → _DWORD (32-bit) Value_

   - Name it `RendererAppContainerEnabled`

   - Double-click it and set:

     - **Value:** 0
     - **Base:** Hexadecimal or Decimal (either is fine)

   - Repeat the process and create a second DWORD `NetworkServiceSandboxEnabled`.

   - Set its value to 0.

   Both parameters must be `REG_DWORD` and have the value **0**.

2. Close the browser and apply the settings. To ensure the policy is loaded:

   - Fully close the browser
   - Check Task Manager and make sure no processes such as _chrome.exe_, _msedge.exe_, _brave.exe_ remain running
   - Reopen the browser

3. Verify that the policies have been applied by opening the policy viewer for your browser.

You should see the following policies active:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

If available, click _Reload policies_.

Færdig!
