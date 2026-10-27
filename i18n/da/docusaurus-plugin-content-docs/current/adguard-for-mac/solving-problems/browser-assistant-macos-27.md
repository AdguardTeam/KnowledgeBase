---
title: Sådan fungerer AdGuard Browser Assistent på macOS 27+
sidebar_position: 12
---

:::info

Denne artikel omhandler AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Grundet politikopdateringer i macOS 27 kan AdGuard muligvis ikke kommunikere med sin Browser Assistent, hvilket kan få udvidelsesbaserede filtreringsfunktioner til at ophøre med at fungere. For at etablere denne forbindelse skal AdGuard placere et Native Messaging host-manifest i webbrowserens applikationsdatamappe. Tidligere gjorde AdGuard dette automatisk i baggrunden. macOS 27 begrænser dog som standard mappeadgang på tværs af apps og kræver udtrykkelig tilladelse. Som følge heraf kan AdGuard ikke længere placere manifestfilen automatisk, hvilket afbryder kommunikationen mellem appen og udvidelsen.

## Anbefalede løsninger

Dette afsnit dækker, hvordan AdGuard kan tildeles de obligatoriske tilladelser på tværs af Chromium- og Gecko-baserede webbrowsere.

### Trin 1: Tildel adgang via Filer og mapper

:::note

AdGuard tjekker mappeadgang **alene for systems standardwebbrowser**. App-prompterne og knappen _Tillad adgang…_ vises derfor ikke, hvis webbrowseren ikke er indstillet som standard. I så tilfælde skal der manuelt tildeles tilladelse via macOS _Systemindstillinger_.

:::

1. Åbn _Filer og mapper_

   - via AdGuard Opsætningsassistent ved første start: Klik fra installationsskærmen til Browserassistenten på _Tillad adgang…_. Afsnittet _Filer og mapper_ vises herefter
     ![AdGuard Opsætningsassistent](https://cdn.adtidy.org/content/kb/ad_blocker/mac/setup-assistant-new.png)
   - via hovedvinduet i AdGuard:
     - klik på _Tillad adgang til webbrowsermappen for Assistenten_ nederst → _Assistent_ → _Tillad adgang…_. Denne prompt vises kun, hvis Assistenten blev installeret mindst én gang, og adgang på nuværende tidspunkt er nægtet for standardwebbrowseren. Den forsvinder permanent efter første klik. Ses den ikke, brug indstillingen Præferencer nedenfor.
     - eller klik på tandhjulsikonet i øverste højre hjørne → _Præferencer…_ → _Assistent_ → _Tillad adgang…_

   |                                                                                       |                                                                                                     |
   | :-----------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
   | ![AdGuard-pop op](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-popup.png) | ![AdGuard-indstillinger](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-settings-new.png) |

   - via _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Filer og mapper_
     ![Systemindstillinger](https://cdn.adtidy.org/content/kb/ad_blocker/mac/system-settings-new.png)
2. Find _AdGuard_ på listen og klik på den for at få vist rullemenuen
3. Find webbrowseren (f.eks. Chrome eller Brave) og slå kontakten ud for den til

:::note

En til/fra-knap til en bestemt webbrowser vises kun på denne liste, hvis webbrowseren allerede er installeret. Er den aktuelle webbrowser, Google Chrome eller Mozilla Firefox ikke på listen, fortsæt til Trin 2.

:::

### Trin 2: Hvis webbrowseren ikke er på listen

**Mulighed A: Installér Google Chrome eller Mozilla Firefox**

Nogle webbrowsere bygget på Chromium eller Gecko opretter ikke deres egen dedikeret Native Messaging-mappe. I stedet deler de mappen brugt af Chrome eller Firefox. På tidligere macOS-versioner kunne AdGuard blot oprette disse mapper selv. Fra og med macOS 27 tillader macOS ikke AdGuard at sende en forespørgsel om adgang til disse mapper, medmindre den tilhørende webbrowser — Google Chrome eller Mozilla Firefox — faktisk er installeret på systemet.

1. Installér Google Chrome eller Mozilla Firefox (afhængigt af om den aktuelle webbrowser er Chromium- eller Gecko-baseret) og åbn den mindst én gang – den obligatoriske indbyggede Native Messaging-mappe vil blive tilgængelig på systemet
2. Åbn _Filer og mapper_ (via AdGuard-hovedvinduet, AdGuard Opsætningsassistent eller Mac-systemindstillingerne, som beskrevet i Trin 1)
3. Find _AdGuard_ på listen og klik på den for at få vist rullemenuen
4. Find Google Chrome eller Mozilla Firefox, og slå kontakten ud for den til. Browser Assistent vil herefter virke i den webbrowser, der er afhængig af Chromes eller Mozilla Firefox' mappe (såsom Opera eller Zen).

**Mulighed B: Tildel Fuld diskadgang**

:::caution

Tildeling af _Fuld diskadgang_ er en sidste udvej: Vi anbefaler kraftigt at prøve mulighederne ovenfor først. _Fuld diskadgang_ er generelt ikke obligatorisk for AdGuard. Brug det kun som en løsning til Browser Assistent, hvis mulighederne ovenfor ikke virkede og konsekvenserne heraf forstås.

:::

1. Åbn _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Fuld diskaadgang_
2. Find _AdGuard_ på listen og slå kontakten til
   ![Fuld diskadgang](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)
