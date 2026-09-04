---
title: Sådan sikkerhedskopieres og gendannes AdGuard-indstillinger
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Når AdGuard til Windows opdateres eller afinstalleres, opretter appen automatisk en sikkerhedskopi af sine indstillinger i `C:\ProgramData\Adguard\Backups` som en ZIP-fil med et navn såsom `adguard_settings_7.22.5008.0-08-04-2025-13_42_15.276.zip`. Denne sikkerhedskopi kan bruges til at gendanne indstillingerne efter geninstallation af AdGuard.

Kan AdGuard ikke overføre sine indstillinger til en ny version, vises der en meddelelse med mulighed for at importere den gemte sikkerhedskopi eller beholde standardindstillingerne.

![Overførsel af indstillinger mislykkedes \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/failed_to_transfer_settings.png)

## Sådan eksporteres/importeres indstillinger manuelt {#export-import}

Det er ikke nødvendigt at afvente en automatisk sikkerhedskopiering – en indstillingsfil kan når som helst oprettes og importeres senere. I AdGuard til Windows, åbn _Indstillinger_ og gå til fanen _App-indstillinger_. Klik på trepriksmenuen øverst til højre.

![Indstillinger \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/settings_export_import.png)

- **Eksportér indstillinger** — gemmer app-indstillingerne (filtre, tilpassede regler, DNS-opsætning og appp-ræferencer) til en `.adg`-fil. Vælg en placering og gem filen.
- **Importér indstillinger** — gendanner app-indstillingerne fra en tidligere eksporteret `.adg`-fil. Efter importen, anmoder AdGuard om at genstarte appen for at anvende ændringerne.

## Sådan gendannes indstillinger efter geninstallation af AdGuard v8 {#reinstall-v8}

Er AdGuard v8.0 blevet afinstalleret (f.eks. for at reparere en beskadiget installation) og nu ønskes geninstalleret med sine tidligere indstillinger:

1. Før geninstallation, find sikkerhedskopi-ZIP-filen i `C:\ProgramData\Adguard\Backups`. Kopiér den til en placering uden for `C:\ProgramData\Adguard`, f.eks. skrivebordet, da mappen renses under geninstallationen.

2. Installér AdGuard v8.0 igen.

3. Afslut AdGuard fra systembakken for at stoppe filtrering.

4. Udpak indholdet af sikkerhedskopi-ZIP-filen.

5. Erstat flg. filer med dem fra sikkerhedskopien:

   - `adguard.db` → `C:\ProgramData\Adguard` — hovedindstillingsdatabase, inkl. filtre og tilpassede regler
   - `agflm_dns.db` → `C:\ProgramData\Adguard\FLM` — DNS-filterdatabase
   - `agflm_standard.db` → `C:\ProgramData\Adguard\FLM` — standardfilterdatabase

6. Start AdGuard. De tidligere indstillinger, filtre og tilpassede regler vil være gendannet.

## Sådan skiftes tilbage til v7 efter opdatering til v8.0 {#switch-back-v7}

AdGuard til Windows v8.0 introducerer væsentlige ændringer. Findes den nye brugerflade ubekvem, eller opleves problemer, kan der skiftes tilbage til version 7.

1. Efter opgradering til v8, åbn mappen `C:\ProgramData\Adguard\Backups` og lokalisér ZIP-filen med et navn i stil med `adguard_settings_7.22.5008.0-08-04-2025-13_42_15.276.zip`.

2. Kopiér denne ZIP-fil til et sted uden for `C:\ProgramData\Adguard`, f.eks. til skrivebordet. Dette er vigtigt, da mappen renses i næste trin.

3. Afinstallér v8.0 via _Indstillinger_ → _Apps_ → _Installerede apps_. Markér i afinstallationsdialoen afkrydsningsfeltet for at fjerne alle brugerindstillinger og data, så ingen v8-rester efterlades.

   ![Afinstallation \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/uninstall.png)

   :::note

   For trinvis vejledning, se [Sådan afinstalleres AdGuard til Windows](/adguard-for-windows/installation#uninstall).

   :::

4. Installer den foregående version. You can find the download link in the _Assets_ section of the latest stable v7 release on [GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.22.9).

5. Afslut version 7 fra systembakken for at stoppe filtrering.

6. Udpak indholdet af ZIP-filen fra trin 2, og erstat flg. filer:

   - `adguard.db` → `C:\ProgramData\Adguard` — hovedindstillingsdatabase, inkl. filtre og tilpassede regler
   - `agflm_dns.db` → `C:\ProgramData\Adguard\FLM` — DNS-filterdatabase
   - `agflm_standard.db` → `C:\ProgramData\Adguard\FLM` — standardfilterdatabase

7. Start AdGuard. Version 7 starter med sine tidligere indstillinger gendannet.
