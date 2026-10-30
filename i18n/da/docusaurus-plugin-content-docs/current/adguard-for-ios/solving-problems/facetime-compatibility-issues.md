---
title: Sådan undgås kompatibilitetsproblemer med FaceTime
sidebar_position: 3
---

:::info

Denne artikel dækker AdGuard til iOS, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Det viste sig, at tilstanden Full-Tunnel kunne forstyrre ikke kun kompatibiliteten med andre VPN-applikationer, men også med FaceTime.

Nogle brugere er stødt på det problem, at FaceTime ikke fungerer på enheden, når AdGuard-appen til iOS er i tilstanden Fuld-Tunnel.

Det er sandsynligt, men ikke garanteret, at FaceTime vil fungere, når AdGuard er i Full-Tunnel tilstand uden VPN-ikon, da den også er inkompatibel med andre VPN-apps, samt ustabil.

**Vil man bruge FaceTime og sikre sig, at video-/lydopkald ikke ophører med at fungere, skal tilstanden Split-Tunnel bruges.**

![Tunneltilstandsskærm *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!)

For at aktivere den, følg denne vejledning:

1. Gå til AdGuard til iOS *Indstillinger* → *Generelle indstillinger*.
2. Aktivér *Avanceret tilstand* og gå til afsnittet *Avancerede indstillinger*, der vises umiddelbart efter.
3. Åbn *Tunneltilstand* og vælg *Split-Tunnel*.

Færdig! Nu skulle der ikke være problemer med FaceTime-kompatibilitet.
