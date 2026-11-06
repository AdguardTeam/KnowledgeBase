---
title: Come risolvere l'errore `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`
sidebar_position: 11
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Alcuni utenti di AdGuard per Windows con [Filtraggio HTTPS](/general/https-filtering/what-is-https-filtering) abilitato non riescono ad accedere a determinati siti web come google.com e youtube.com. Invece di aprire un sito web, i browser con il Blocco Rigido del Certificato mostrerebbero un errore `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`.

Ecco una lista di browser impattati:

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

Se il tuo browser predefinito è uno di questi, fai quanto segue per risolvere il problema:

1. Digita `about:config` nella barra degli indirizzi del tuo browser
2. Nel menu' che appare, inserisci `security.cert_pinning.enforcement_level` nel campo di ricerca.
3. Cambia il parametro `security.cert_pinning.enforcement_level` da 2 a 1.
