---
title: Sådan fortsættes med at bruge AdGuard, efter Chrome har fjernet MV2
sidebar_position: 1
---

Denne artikel beskriver to måder at fortsætte adblocking på: Skift til MV3-versionen af AdGuard Browser Extension i Chrome eller fortsæt med MV2 i en webbrowser, der stadig understøtter den.

Chrome Webshop har fjernet alle resterende Manifest V2 (MV2)-udvidelser,
inkl. . Chrome deaktiverer sådanne udvidelser og rapporterer dem som ikke længere understøttede. MV3-versionen er ikke
påvirket.

:::caution

Hold kun én adblocker aktiveret i en webbrowser. To blockere, som filtrerer den samme trafik, forårsager missede
annoncer, ødelagte sidelayouts og sider med uendelig indlæsningstid. Har webbrowseren indbygget adblocking,
deaktivér den, før AdGuard installeres.

:::

## Skift til MV3 i Chrome

MV3 er den aktuelle version af AdGuard Browser Extension til Chrome og den eneste tilgængelige fra
Chrome Webshop.

Blev AdGuard installeret fra den primære webshopside, og Chrome blev tilladt at opdatere udvidelser, så
bruges allerede MV3, og ingen yderligere handling kræves.

Er **AdGuard Ad Blocker MV2** installeret fra dens egen webshopside, kan Chrome ikke erstatte den
automatisk, da de to versioner har forskellige udvidelses-ID'er. Sådan skiftes til MV3:

1. Installér [AdGuard Ad Blocker](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg) fra Chrome Webshop.
2. Åbn `chrome://extensions`, fjern **AdGuard Ad Blocker MV2** og aktivér MV3-versionen.
3. Tilføj de tilpassede regler og tredjepartsfiltre igen, da MV3 ikke importerer disse fra MV2.
4. Genindlæs åbne faner.

MV3 anvender de fleste blokeringsregler via webbrowserens deklarative motor, hvilket begrænser antallet
af regler og ændrer, hvordan filtre opdateres. Før der skiftes, tjek artiklen [AdGuard Browser Extension MV3](/adguard-browser-extension/mv3-version/).

## Fortsat brug af MV2 i andre webbrowsere

MV2 og MV3 er bygget ud fra den samme kodebase og udgivet sammen, så MV2 modtager fortsat
opdateringer til filtermotoren, filteropdateringer, fejlrettelser og sikkerhedsrettelser. MV2 ophører, når en webbrowser
ophører med at køre Manifest V2, ikke når vi stopper opdatering af den.

### Firefox

Firefox understøtter MV2-udvidelser og har ingen planer om at udfase dem. AdGuard til Firefox er bygget på
MV2 og distribueres via Firefox-tilføjelser, så den installeres og opdateres som alle andre tilføjelser.

1. Gå til [add-on-siden til AdGuard-adblocker](https://addons.mozilla.org/firefox/addon/adguard-adblocker/).
2. Klik på _Føj til Firefox_ og bekræft tilladelserne.

   ![AdGuard i Firefox \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/adguard_firefox.png)

Firefox' Enhanced Tracking Protection blokerer trackere i stedet for annoncer og kan forblive aktiveret
sammen med AdGuard.

### Brave

Brave understøtter MV2 gennem sin egen kompatibilitetstilstand og hoster AdGuard-buildet på sin backend,
uafhængigt af Chrome Webshop. Brave installerer og opdaterer den automatisk.

1. Gå til `brave://settings/extensions/v2`.
2. Slå _Aktivér AdGuard_ til.

   ![MV2-udvidelse i Brave settings \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/adguard_brave.png)

Brave beskriver MV2-support som en bedste evne-indsats snarere end en permanent garanti. Brave Shields blokerer
også annoncer — slå den fra, hvis AdGuard skal udføre filteringen.

### ungoogled-chromium, Helium og andre Chromium-builds

Disse webbrowsere bevarer MV2-understøttelse, men har ingen Chrome Webshop-integration, så udvidelsen
installeres manuelt:

- **ungoogled-chromium** er et modificeret Chromium, der patcher MV2-understøttelsen tilbage igen.
- **Helium** er en open source Chromium-baseret webbrowser, der understøtter Chromium-udvidelser og kan
  importere dem, som allerede er installeret i den tidligere webbrowser. Den blokerer som standard annoncer og trackere
  — deaktivér den, hvis AdGuard skal udføre filtreringen.
- **Portable Chromium-builds**, som hat beholdt MV2, bruger de samme trin. Tjek dokumentationen til buildet,
  da nogle vedligeholdere har fjernet MV2-understøttelse.

1. Download `chrome.zip` fra [AdGuard Browser Extension releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) og udpak den til en mappe, der ikke vil blive flyttet/slettet.
2. Åbn `chrome://extensions`.
3. Slå _Udviklertilstand_ til.
4. Klik på _Indlæs udpakket_ og vælg udvidelsesmappen.

![Udviklertilstand \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

![Indlæs udpakket \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

:::note

En udpakket udvidelse indlæses fra den valgte mappe og vil ophøre med at virke, hvis mappen
flyttes/slettes. Udpakkede udvidelser opdateres ikke automatisk: For at få en ny version, download
og indlæs buildet igen.

:::

For den fulde _Udviklertilstand_ → _Indlæs udpakket_ flowet, se afsnittet _Sådan installeres udpakket i
webbrowseren_ i [Sådan fejlfindes i regler i MV3-udvidelse](/adguard-browser-extension/solving-problems/debug-rules/).

### Microsoft Edge

MV2-buildet er stadig tilgængeligt fra Edge Add-ons, men Microsoft udfaser Manifest V2:
Advarsler begyndte at dukke op i august 2026, og overgangen for forbruger-Edge forventes at
være færdig inden udgangen af 2026. Håndterede virksomhedsinstallationer får mere tid. Anse Edge for en midlertidig
mulighed. Se [Edge udfaser den udvidelsesplatform, som adblockere er afhængige af](https://adguard.com/en/blog/edge-phasing-out-mv2-ad-blockers.html).

## Systemniveau-AdGuard-apps

AdGuard-appen til [Windows](https://adguard.com/en/adguard-windows/overview.html), [Mac](https://adguard.com/en/adguard-mac/overview.html), [Android](https://adguard.com/en/adguard-android/overview.html), [iOS](https://adguard.com/en/adguard-ios/overview.html) og [Linux](https://adguard.com/en/adguard-linux/overview.html) filtrerer trafik i alle webbrowsere og andre applikationer, uanset manifestversioner.
