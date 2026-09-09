---
title: Integration med AdGuard VPN
sidebar_position: 8
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::info

For at bruge _Integration med AdGuard VPN_ skal begge apps — AdGuard til Android og AdGuard VPN til Android — opdateres til deres seneste versioner. Integrationstilstanden vil ellers være utilgængelig

:::

AdGuard til Android opretter et lokalt VPN for at filtrere trafik. Andre VPN-apps kan derfor ikke benyttes, mens AdGuard til Android kører. Både AdGuard- og [AdGuard VPN](https://adguard-vpn.com/)-apps har dog en Integreret tilstand, så de kan benyttes sideløbende.

I denne tilstand fungerer AdGuard VPN som en udgående proxyserver, hvorigennem AdGuard Ad Blocker ruter sin trafik. Dette lader AdGuard oprette en VPN-grænseflade og blokere annoncer og trackere lokalt, mens AdGuard VPN ruter al trafik igennem en fjernserver.

Deaktiveres AdGuard VPN, ophører AdGuard med at bruge den som udgående proxy. Deaktiveres AdGuard, ruter AdGuard VPN trafikken igennem sin egen VPN-grænseflade.

Er AdGuard Ad Blocker installeret og AdGuard VPN installeres, registrerer førstnævnte dette og aktiverer automatisk _Integration med AdGuard VPN_. Det samme sker også omvendt. Bemærk, at hvis integration er aktiveret, kan app-udtagelser og forbindelsesoprettelser til DNS-servere ikke håndteres via AdGuard VPN-appen. Det kan angives, hvilke apps, som skal rutes igennem VPN-tunnelen via _Indstillinger_ → _Filtrering_ → _Netværk_ → _Proxy_ → _Apps, som kører via proxy_. For valg af en DNS-server, åbn AdGuard → \*Beskyttelse \* → _DNS-beskyttelse_ → _DNS-server_.
