---
title: Sådan indsamles AdGuard-logger
sidebar_position: 4
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::note

Data og filer tilgængelige i logfiler behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/en/privacy.html).

:::

For at analysere og diagnosticere forskellige potentielle problematikker, kan AdGuard-supporttjenesten få brug for AdGuard-logfiler. Disse filer indeholder poster over fejl og andre hændelser, som opstår med softwaren. Denne artikel forklarer, hvordan man ændrer logningsniveauet, indsamler logfilerne og indsender dem til supporten.

AdGuard til Windows tilbyder to logningsniveauer: *Standard* og *Fejlfinding*. Til de fleste former for fejlfinding er *Fejlfinding* tilstrækkelig, men det kan gøre appen langsommere.

## Fejlfindingslogger {#debug-logs}

For de fleste problemer giver fejlfindingslogfiler supportteamet tilstrækkelige oplysninger til at identificere og løse problemet.

1. Gå til *Indstillinger* → *Support* → *Logfiler*.

1. I rullemenuen *Logningsniveau*, vælg *Fejlfinding*.

    ![Rullemenu Logningsniveau på skærmen Logfiler *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/export_logs_debug_dropdown.png)

1. Genskab problematikken. Notér det nøjagtige tidspunkt — det hjælper vores supportteam med at finde de relevante logposter og løse problemet hurtigere.

1. Klik på *Eksportér logfiler og systeminfo*.

1. I systemdialogboksen, vælg den mappe, hvor arkivet ønskes gemt.

1. Når eksporten er fuldført, vises en notifikation med arkivfilens navn, f.eks. *Logfiler eksporteret til adguard_logs_4.0.688_2303_144521.zip*. Klik på *Vis i mappe* for at åbne mappen, hvori den er gemt.

    :::note

    Skift logningsniveauet tilbage til *Standard*, når logfilerne er eksporteret. Niveauet *Fejlfinding* gør applikationen langsommere.


:::

1. Mislykkes eksporten, vises *Mislykkedes at eksportere logfiler. Forsøg igen, eller kontakt supporten*.

1. Indsend arkivet til **support@adguard.com**, beskriv problemet og angiv det klokkeslæt, hvor problemet blev genskabt.

## Sporingslogfiler {#trace-logs}

Nogle gange kan supportteamet anmode om *sporingslogfiler*. Sporingslogning registrerer flere detaljer end fejlfindingslogning og er kun tilgængelig via kommandolinjen.

1. Stop AdGuard ved at højreklikke på dens ikon i bakkemenuen og vælge *Afslut AdGuard*:

    ![Afslut AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/exit_adguard.png)

    Anmodes der om at lade tjenesten køre i baggrunden, så sørg for at stoppe den — tjenesten må ikke køre, når AdGuard startes med sporingslogning.

1. Åbn konsollen (skriv `cmd` i Startpanelet).

1. Kør AdGuard med sporingslogning aktiveret:

    ```text
    C:\"Program Files"\Adguard\Adguard.exe /trace
    ```

1. Genskab problematikken. Notér det nøjagtige tidspunkt — det hjælper vores supportteam med at finde de relevante logposter og løse problemet hurtigere.

1. Gå til *Indstillinger* → *Support* → *Logfiler*.

1. Klik på *Eksportér logfiler og systeminfo*.

    Er logfilen stor, bare rolig – vi har behøver så mange detaljer som muligt for at løse problemet.

1. I systemdialogboksen, vælg den mappe, hvor arkivet ønskes gemt.

1. Når eksporten er fuldført, vises en notifikation med arkivfilens navn. Klik på *Vis i mappe* for at åbne mappen, hvori den er gemt.

1. Når sporingslogfilerne er eksporteret, luk AdGuard og genstart den normalt for at returnere til standardlogningsniveauet.

## Diagnostisk rapport {#diagnostic-report}

Når supporten kontaktes via formularen i *Indstillinger* → *Support* → *Kontakt support*, kan en diagnosticeringsrapport inkluderes, der automatisk vedhæfter applikationslogfiler sammen med andre systemoplysninger.

Diagnostikrapporten indeholder:

- Oplysninger om systemet
- En liste over kørende processer
- Oplysninger om AdGuard-indstillinger, herunder aktiverede filtre og installerede udvidelser
- Applikationslogfiler

For at bruge denne valgmulighed, markér afkrydsningsfeltet *Tilføj diagnosticeringsrapport*, før beskeden afsendes.

![Valgmuligheden Diagnosticeringsrapport *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/add_report.png)

:::note

AdGuard er dedikeret til beskyttelse af brugerfortrolighed. Vi følger strikst vores [Fortrolighedspolitik](https://adguard.com/privacy/windows.html) og indsamler ingen private oplysninger om brugere. Før indsendelse af logfiler til supportteamet, bedes filen gennemgået, da den også kan indeholde oplysninger, som muligvis ikke ønskes delt. Indeholder den sådanne uønskede oplysninger, anbefaler disse slettet først.

:::
