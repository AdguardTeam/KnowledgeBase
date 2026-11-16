---
title: Sådan løses fejlen `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`
sidebar_position: 11
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Nogle brugere af AdGuard til Windows med aktiveret [HTTPS-filtrering](/general/https-filtering/what-is-https-filtering) kan ikke tilgå visse websteder, såsom google.com og youtube.com. I stedet for at åbne et websted viser webbrowsere med Strict Certificate Pinning fejlen `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`.

Her er en liste over berørte webbrowsere:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Er standard-webbrowseren en af disse, gør følgende for at løse problemet:

1. Skriv `about:config` på webbrowserens adressebjælke
2. Indtast i den viste menu `security.cert_pinning.enforcement_level` i søgefeltet.
3. Skift `security.cert_pinning.enforcement_level`-parameteren fra 2 til 1.
