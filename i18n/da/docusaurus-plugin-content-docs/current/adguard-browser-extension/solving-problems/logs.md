---
title: Sådan eksporteres logfiler fra baggrundssiden
sidebar_position: 1
---

## Eksport af logfiler fra baggrundssiden i udvidelsen

### Chrome

1. Åbn AdGuard Browser Extension og gentag — om muligt — handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt for fejlens opståen.

2. Gå til `chrome://extensions`.

3. Slå _Udviklertilstand_ til.

   ![Udviklertilstand \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browsers Extension og klik på `service worker`.

   ![Baggrund \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Åbn fanen _Konsol_, højreklik hvor som helst i konsolområdet og vælg _Gem som…_.

   ![Gem som \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Åbn AdGuard Browser Extension og gentag — om muligt — handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt for fejlens opståen.

2. Gå til `about:addons`.

3. Klik på tandhjulsikonet _Fejlfind Tilføjelser_.

   ![Fejlfind Tilføjelser \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Klik på _Inspicér_.

   ![Inspicér \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. I fanen _Konsol_, højreklik hvor som helst i konsolområdet og vælg _Gem alle beskeder til fil_.

   ![Konsol \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Indsendelse af logfiler

:::note

AdGuard er dedikeret til beskyttelse af brugerfortrolighed. Vi overholder nøje vores [Fortrolighedspolitik](https://adguard.com/privacy/browser-extension.html) og indsamler ingen private oplysninger om brugere. Før indsendelse af logger til supportteamet, bedes filen gennemgået, da den kan indeholde yderligere oplysninger, som muligvis ikke ønskes delt. Indeholder den sådanne uønskede oplysninger, anbefaler disse slettet først.

:::

Nu hvor logfilerne er indsamlet, følg da disse trin for at indsende dem til vores udviklingsteam:

1. Anmeld fejlen på [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Indsend arkivfilen indeholdende logfilerne og afspilningstid til `devteam@adguard.com` og føj et link til GitHub-problematikken. Arkivfilen kan også uploades til Google Drev og et link til filen tilføjes i stedet for at vedhæfte filen.
