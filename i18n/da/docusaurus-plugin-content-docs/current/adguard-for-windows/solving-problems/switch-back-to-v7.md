---
title: Sådan skiftes tilbage til v7 efter opdatering til v8.0
sidebar_position: 14
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Sådan skiftes tilbage til v7 efter opdatering til v8.0

AdGuard til Windows v8.0 introducerer væsentlige ændringer. Findes den nye brugerflade ubekvem, eller opleves problemer, kan der skiftes tilbage til version 7.

:::note

Ønskes de aktuelle indstillinger bevaret, anbefales det, at de eksporteres, før der skiftes version. De gamle indstillinger kan derefter importeres efter opdatering af appen. De nødvendige trin for at gøre dette er anført nedenfor.

:::

1. Efter opgradering til v8, åbn mappen `C:\ProgramData\Adguard\Backups` og lokalisér ZIP-filen med et navn i stil med `adguard_settings_7.22.5008.0-08-04-2025-13_42_15.276.zip`.

2. Kopiér denne ZIP-fil til et sted uden for `C:\ProgramData\Adguard`, f.eks. til skrivebordet. Dette er vigtigt, da mappen renses i næste trin.

3. Afinstallér v8.0 via _Indstillinger_ → _Apps_ → _Installerede apps_. Markér i afinstallationsdialoen afkrydsningsfeltet for at fjerne alle brugerindstillinger og data, så ingen v8-rester efterlades.

   ![Afinstallation \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/uninstall.png)

   :::note

   For trinvis vejledning, se [Sådan afinstalleres AdGuard til Windows](/adguard-for-windows/installation#uninstall).

   :::

4. Installer den foregående version. Downloadlinket til den seneste stabile v7-udgivelse findes i afsnittet _Assets_ [på GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.22.9).

5. Afslut version 7 fra systembakken for at stoppe filtrering.

6. Udpak indholdet af ZIP-filen fra trin 2, og erstat flg. filer:

   - `adguard.db` → `C:\ProgramData\Adguard` — hovedindstillingsdatabase, inkl. filtre og tilpassede regler
   - `agflm_dns.db` → `C:\ProgramData\Adguard\FLM` — DNS-filterdatabase
   - `agflm_standard.db` → `C:\ProgramData\Adguard\FLM` — standardfilterdatabase

7. Start AdGuard. Version 7 starter med sine tidligere indstillinger gendannet.
