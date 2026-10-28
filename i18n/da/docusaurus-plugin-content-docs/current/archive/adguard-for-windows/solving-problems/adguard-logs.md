---
title: Sådan indsamles AdGuard-logger
sidebar_position: 3
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::note

Data og/eller filer indeholdt i logfiler behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/en/privacy.html).

:::

For at analysere og diagnosticere forskellige potentielle problematikker, kan AdGuard-supporttjenesten have brug for AdGuard-logfiler. Disse filer indeholder poster om fejl og andre hændelser, som opstår med softwaren. Nedenfor beskriver en kort vejledning måden, hvorpå logfilerne om nødvendigt hentes og indsendes til vores supporttjeneste.

:::note

AdGuard er dedikeret til beskyttelse af brugerfortrolighed. Vi overholder strikst vores [Fortrolighedspolitik](https://adguard.com/privacy/windows.html) og indsamler ingen private oplysninger om brugere. Før indsendelse af logger til supportteamet, bedes filen gennemgået, da den også kan indeholde oplysninger, som muligvis ikke ønskes delt. Indeholder den sådanne uønskede oplysninger, anbefaler disse slettet først.

:::

### Fejlfindingslogfiler {#debug-logs}

1. Åbn AdGuard-indstillingerne. Gå til afsnittet _Generelle indstillinger_, rul ned til bunden af skærmen og skift _Logningsniveau_ til _Fejlfinding_.

   ![Fejlfindingslogningsniveau \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Genskab problematikken.

   Vi anbefaler kraftigt at notere det præcise tidspunkt for, hvornår problemet blev genskabt: Dette hjælper supportteam med at finde relevante logposter og løse problemet hurtigere.

3. Eksportér de indsamlede logfiler via knappen _Eksportér logfiler_.

   ![Eksport af logfiler \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Gem arkivet i den ønskede mappe.

4. \*_Vigtigt: Efter eksport af logfilerne skal logningsniveauet skiftes tilbage til Standard_. _Fejlfindingslogningsniveau_ vil gøre applikationen langsommere.

5. Indsend arkivet til AdGuards supporttjeneste via **support@adguard.com** inkl. problembeskrivelse og tidspunktet for genskabtelsen af problemet.

### Sporingslogfiler {#trace-logs}

Supportteamet kan evt. anmode om indsendelse af _sporingslogfiler_. I så fald vil flg. skulle gøres:

1. Stop AdGuard ved at højreklikke på dens ikon i bakkemenuen og vælge _Afslut AdGuard_:

   ![Afslut AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Sørg også for, at tjenesten ikke kører:

   ![Stop af AdGuard-tjeneste \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Åbn konsollen (skriv `cmd` i startpanelet).

3. Eksekvér applikationen med kommandoen `C:\"Program Files"\Adguard\Adguard.exe /trace` uanset Windows-bitversion, hvis AdGuard v7.16 til Windows eller senere er installeret.

Bruges en ældre version af AdGuard til Windows, eksekvér applikationen med kommandoen `C:\"Program Files (x86)"\Adguard\Adguard.exe /trace` på 64-bit Windows eller `C:\"Program Files"\Adguard\Adguard.exe /trace` på 32-bit Windows.

1. Genskab problematikken.

   Vi anbefaler kraftigt at notere det præcise tidspunkt for, hvornår problemet blev genskabt: Dette hjælper supportteam med at finde relevante logposter og løse problemet hurtigere.

2. Eksportér de indsamlede logfiler via knappen _Eksportér logfiler_.

   ![Eksport af logfiler \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Bare rolig, selv hvis logfilen er stor. Vi har brug for at kende så mange detaljer som muligt for at løse problematikken.
