---
title: Beskyttelse af Mail Activity og AdGuard
sidebar_position: 8
---

:::info

Denne artikel omhandler AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## I en nøddeskal

Apples Mail-app bruger nu en proxy til at skjule brugerens IP-adresse ved download af billeder fra e-mails.

![Mailfortrolighedsbeskyttelse](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

Dette fungerer dog ikke, såfremt en VPN-forbindelse er aktiv. Da den behandler AdGuard som et VPN, præindlæses billeder ikke automatisk.

Apple forklarer dette problem [hér](https://support.apple.com/HT212797).

## I detaljer

AdGuard til Mac bruger nu macOS indbygget socket-filtrering baseret på netværksudvidelses-API'en. Denne nye og ret fejlbehæftede mekanisme har erstattet de gode gamle Kernel-udvidelser. I løbet af det seneste 1,5 år har vi anmeldt flere end 20(!) fejl til Apple vedr. deres nye filtreringsmetode.

Netværksudvidelses-API'en har en VPN-lignende opsætning med en liste over rute-lignende poster. I Big Sur brugte AdGuard "split-tunnel" regler for at undgå at oprette "default route"-reglen, da den gav problemer i tidlige Big Sur-udgivelser. Disse problemer blev løst i Monterey, så intet forhindrer længere brug af "default route"-reglen.

I Monterey blev iCloud Private Relay introduceret. Fortrolighedsfunktioner i Mail.app bruger også Private Relay-servere.

Som følge heraf er AdGuard ikke kompatibel med iCloud Private Relay og Mail-appens fortrolighedsfunktioner:

1. iCloud Private Relay anvendes på forbindelser på biblioteksniveauet — før de når socket-niveauet, hvor AdGuard opererer.
2. iCloud Private Relay bruger QUIC, som AdGuard ikke kan filtrere, da HTTP/3-filtrering endnu ikke er tilgængelig.
3. AdGuard blokerer derfor QUIC inkl. iCloud Private Relay-trafik, da adblocking ellers vil være umulig.
4. Bruges iCloud Private Relay, og skiftes AdGuard til "split-tunnel"-tilstand, kan der ikke åbnes websteder i Safari.
5. For at omgå dette problem på Monterey, anvendes reglen "default route". Når Private Relay ser denne regel, deaktiverer den automatisk sig selv. Så AdGuard fungerer gnidningløst på Monterey, men iCloud Private Relay deaktiveres.

`network.extension.monterey.force.split.tunnel` gendanner "Big Sur"-adfærden, men denne mulighed kan afbryde adgangen til websteder grundet (3) og (4). Søgning efter en løsning på dette problem fortsætter. En af mulighederne er at implementere HTTP/3-filtrering.

## Anbefalet løsning

P.t. anbefales brug af en mere traditionel VPN-tjeneste, såsom [AdGuard VPN](https://adguard-vpn.com/), i stedet for de nyere Apple-fortrolighedsfunktioner.
