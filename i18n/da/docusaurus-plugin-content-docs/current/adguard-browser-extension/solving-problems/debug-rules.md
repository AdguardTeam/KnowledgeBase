---
title: Sådan fejlrettes regler i AdGuard til Chrome MV3
sidebar_position: 2
---

I [AdGuard til Chrome MV3](/adguard-browser-extension/mv3-version) viser filtreringsloggen kun de omtrentlige anvendte regler, hvilke vi kalder "antagne regler". Dette skyldes, at webbrowseren ikke giver detaljer om, hvilke specifikke deklarative regler, som blev brugt, medmindre udvidelsen er i et "udpakket" format. For at få præcise oplysninger, skal brugeren selv installere den udpakkede version af udvidelsen i sin webbrowser.

Disse vejledninger er også beregnet til problematiske tilfælde, hvor reglerne, som følger med udvidelsen, ønskes ændret statisk. I de fleste tilfælde bør brug af _Brugerregler_ i udvidelsen være tilstrækkeligt.

## Forudsætninger

1. **Git:** [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Install Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Sådan klones en udvidelse

1. Klon repo'et:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Gå til mappen:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Skift til `v5.0`-grenen:

   ```bash
   git checkout v5.0
   ```

4. Installér afhængigheder:

   ```bash
   yarn install
   ```

## Sådan bygges en udvidelse

1. Skift til `v5.0`-grenen:

   ```bash
   git checkout v5.0
   ```

2. Eksekvér flg. kommando i terminalen:

   ```bash
   yarn dev chrome-mv3
   ```

3. Den byggede udvidelse vil være placeret i mappen:

   ```bash
   ./build/dev/chrome-mv3
   ```

## Sådan installeres udpakket i webbrowseren

1. Slå Udviklertilstand til:

   ![Udviklertilstand \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Klik på _Indlæs udpakket_:

   ![Indlæs udpakket \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Vælg udvidelsesmappen, og klik på `Vælg`:

   ![Vælg \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

Det var det!

## Sådan fejlrettes regler

1. Find og modificér den ønskede regel i mappen `./Extension/filters/chromium-mv3` i `.txt`-filerne.

2. Konvertér reglerne fra txt til deklarativ form:

   ```bash
   yarn convert-declarative
   ```

3. Byg udvidelsen igen:

   ```bash
   yarn dev chrome-mv3
   ```

4. Genindlæs udvidelsen i webbrowseren:

   ![Genindlæs udvidelse \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
