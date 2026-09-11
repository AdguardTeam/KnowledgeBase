---
title: iCloud Private Relay og AdGuard
sidebar_position: 7
---

:::info

Denne artikel dækker AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Problembeskrivelse i en nøddeskal

Som standard benytter AdGuard "standardrutning", der deaktiverer iCloud Private Relay.

Pt. kan AdGuard og iCloud Private Relay ikke fungere sideløbende. AdGuard kan ikke blokere annoncer, da iCloud Private Relay krypterer trafik, før AdGuard kan filtrere netværksforbindelser. Når iCloud Private Relay er aktivt, umuliggøres enhver filtrering (inkl. lokal filtrering). AdGuard kan derfor ikke filtrere trafik eller udføre DNS-filtrering i Safari. Dog filtrerer AdGuard fortsat trafik i andre webbrowsere. Overvej at installere [AdGuard til Safari](https://adguard.com/adguard-safari/overview.html) for fortsat brug af iCloud Private Relay.

Det samme gælder brug af VPN-apps på Mac: Vælg mellem brug af enten iCloud Private Relay eller en VPN-tjeneste.

## I detaljer

AdGuard til Mac bruger nu macOS indbygget socket-filtrering baseret på netværksudvidelses-API'en. Denne nye og ret fejlbehæftede mekanisme har erstattet de gode gamle Kernel-udvidelser. I løbet af det seneste 1,5 år har vi anmeldt flere end 20(!) fejl til Apple vedr. deres nye filtreringsmetode.

Netværksudvidelses-API'en har en VPN-lignende opsætning med en liste over rute-lignende poster. På Big Sur udviklede AdGuard "split-tunnel"-regler for at undgå at oprette "standardrutning"-reglen, da den forårsager problemer på tidlige Big Sur-udgivelser.

I Monterey blev iCloud Private Relay introduceret. Fortrolighedsfunktioner i Mail-appen bruger også Private Relay-servere.

Som følge heraf er AdGuard ikke kompatibel med iCloud Private Relay og Mail-appens fortrolighedsfunktioner:

1. iCloud Private Relay anvendes på forbindelser på biblioteksniveauet — før de når socket-niveauet, hvor AdGuard opererer.
2. iCloud Private Relay er implementeret med HTTP/3 CONNECT-proxyer.
3. Da AdGuard endnu ikke filtrerer CONNECT HTTP/3-forespørgsler, forsøger den at nedgradere HTTP/3-proxyforbindelser til HTTP/1.1, hvilket resulterer i blokering af iCloud Private Relay-trafik.
4. Når der benyttes iCloud Private Relay og skifter AdGuard til tilstanden Split-Tunnel, kan Safari ikke åbne websteder.
5. For at omgå dette problem på Monterey, anvendes reglen "standardrutning". Når Private Relay ser denne regel, deaktiverer den automatisk sig selv. Så AdGuard fungerer gnidningløst på Monterey, men iCloud Private Relay deaktiveres.

Indstillingen `network.extension.monterey.force.split.tunnel` gendanner "Big Sur"-adfærden, men den kan samtidig afbryde webstedsadgang grundet (3) og (4). Søgning efter en løsning på dette problem fortsættes. En af mulighederne er at implementere HTTP/3-filtrering.

## Anbefalet løsning

Det anbefales at bruge AdGuard sammen med en mere traditionel VPN-tjeneste såsom [AdGuard VPN](https://adguard-vpn.com/).

## Alternativ løsning

AdGuard kan forhindres i at bruge "standardrutning" ved at slå "standardrutning" fra. Dette kan gøres via Avancerede indstillinger → `network.extension.monterey.force.split.tunnel`.

![Slå Standardrutning fra i Avancerede indstillinger *kant](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Husk dog, at de ovenfor beskrevne problemer i så tilfælde vil kunne opstå.
