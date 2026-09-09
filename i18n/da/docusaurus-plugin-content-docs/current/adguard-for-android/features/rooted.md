---
title: Rootede enheder
sidebar_position: 9
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Grundet sikkerhedsforanstaltninger i Android OS'et er visse AdGuard-funktioner kun tilgængelige på rootede enheder. Her er listen over dem:

- I de fleste tilfælde kræver **HTTPS-filtrering i apps** [installation af et CA-certifikat i systemlageret](/adguard-for-android/features/settings#security-certificates), da de fleste apps ikke har tillid til certifikater i brugerlageret
- [**Automatisk proxy**-rutningstilstanden](/adguard-for-android/features/settings#routing-mode) kræver root-adgang grundet Androids restriktioner for systemomfattende trafikfiltrering
- The [**Manual proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
