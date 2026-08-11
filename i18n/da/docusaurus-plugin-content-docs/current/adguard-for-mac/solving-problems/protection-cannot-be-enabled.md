---
title: Beskyttelse kan ikke aktiveres
sidebar_position: 2
---

:::info

Denne artikel dækker AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Såfremt AdGuard-beskyttelsen af en eller anden grund ikke kan aktiveres, udfør da flg. trin:

1. Klik på AdGuard-ikonet på menubjælken → *Avanceret* → *Nulstil indstillinger...* → *Afslut AdGuard...*

2. Skriv Terminal i Spotlight-søgning, indtast `sudo rm -R /Library/Application\ Support/com.adguard.adguard` og eksekvér.

3. Genstart computeren.

4. Åbn terminalen igen, skriv `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` og eksekvér. Flg. besked bør nu vises: `Ingen sådan fil eller mappe`.

5. Start AdGuard, og angiv loginoplysningerne, når de udbedes.
