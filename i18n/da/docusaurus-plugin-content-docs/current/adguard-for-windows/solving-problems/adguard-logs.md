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

## Sådan skiftes logningsniveau {#change-level}

Logningsniveau kan skiftes på én af to måder:

### Mulighed 1: Via appen

Gå til AdGuard-indstillinger → *Support* → *Logfiler*, og vælg *Fejlfinding* i rullemenuen *Logningsniveau*.

![Rullemenu Logningsniveau på siden Support *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/support_logs.png)

### Mulighed 2: Via systembakkemenu

Højreklik på AdGuard-ikonet i systembakken, vælg *Avanceret* → *Logningsniveau* og vælg *Fejlfinding*.

![Logningsniveau i bakkemenu *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/tray_menu_debug.png)

## Fejlfindingslogger {#debug-logs}

For de fleste problemer giver fejlfindingslogfiler supportteamet tilstrækkelige oplysninger til at identificere og løse problemet.

1. Indstil logningsniveauet til *Fejlfinding* via en af de metoder, som er beskrevet [ovenfor](#change-level).

1. Genskab problematikken. Notér det nøjagtige tidspunkt — det hjælper vores supportteam med at finde de relevante logposter og løse problemet hurtigere.

1. Gå til AdGuard-indstillinger → *Support* → *Logfiler* og klik på *Eksportere logfiler og systemoplysninger*.

    Når eksporten er fuldført, vises en bekræftelsesmeddelelse. Der kan klikkes på *Vis i mappe* for at åbne den mappe, hvori det eksporterede arkiv med logfiler og systemoplysninger er gemt.

    :::note

    Skift logningsniveauet tilbage til *Standard*, når logfilerne er eksporteret. Niveauet *Fejlfinding* gør applikationen langsommere.


:::

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

1. Eksportér de indsamlede logfiler: Gå til Indstillinger → *Support* → *Logfiler* → *Eksportere logfiler og systemoplysninger*.

    Hvis logfilen er stor, bare rolig – vi har behøver så mange detaljer som muligt for at løse problemet.

1. Når sporingslogfilerne er eksporteret, så luk AdGuard og genstart den normalt for at returnere til standardlogningsniveauet.

## Diagnostisk rapport {#diagnostic-report}

Når supporten kontaktes via formularen i Indstillinger → *Support*, kan en diagnosticeringsrapport inkluderes, der automatisk vedhæfter applikationslogfiler sammen med andre systemoplysninger.

Diagnostikrapporten omfatter:

- Oplysninger om systemet
- En liste over kørende processer
- Oplysninger om AdGuard-indstillinger, herunder aktiverede filtre og installerede udvidelser
- Applikationslogfiler

For at bruge denne mulighed, markér afkrydsningsfeltet *Tilføj diagnosticeringsrapport*, før beskeden afsendes.

![Valgmulighed for diagnosticeringsrapport *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/add_report.png)

:::note

AdGuard er dedikeret til beskyttelse af brugerfortrolighed. Vi følger strikst vores [Fortrolighedspolitik](https://adguard.com/privacy/windows.html) og indsamler ingen private oplysninger om brugere. Før indsendelse af logger til supportteamet, bedes filen gennemgået, da den kan indeholde yderligere oplysninger, som muligvis ikke ønskes delt. Indeholder den sådanne uønskede oplysninger, anbefales disse slettet først.

:::
