---
title: Kendte problemer med AdGuard til Windows
sidebar_position: 10
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## AdGuard til Windows- og AdGuard VPN til Windows-kompatibilitetsproblemer

Når først AdGuard til Windows og AdGuard VPN til Windows er installeret, begynder de blot at samarbejde uden nogen indsats fra brugerens side. Ændring af nogle af deres standardindstillinger kan dog få de to apps til at fungere forkert, når de kører sideløbende.

Der er to specifikke indstillinger i AdGuard til Windows: *Anvend omdirigeringsdrivertilstand* og *Filtrér localhost*. Som standard er den første deaktiveret, og den anden er aktiveret. Ændres nogen af disse indstillinger, vil det afbryde AdGuards filtrering, såfremt både AdGuard Ad Blocker og AdGuard VPN er aktiveret på enheden.

Ændring af disse indstillinger er kun nødvendig for at løse problemer relateret til den sideløbende drift af AdGuard Ad Blocker og netværksniveau-apps, såsom antivirus, VPN og netværksfiltre. Opleves en situation, hvor det er nødvendigt at ændre standardtilstanden for ovenstående indstillinger, og det stadig ønskes, at AdGuard Ad Blocker og AdGuard VPN skal fungere sideløbende og korrekt, [opret en problematik på GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose), så vi kan yde personlig assistance.

Vi arbejder i øjeblikket på at overvinde de ovennævnte begrænsninger med den sideløbende drift af begge apps.
