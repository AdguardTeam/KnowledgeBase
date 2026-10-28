---
title: Netværksindstillinger
sidebar_position: 3
---

Dette afsnit muliggør at håndtere, hvordan AdGuard filtrerer internett­rafikken og tilbyder yderligere værktøjer til styring af netværksrelaterede funktioner.

![Netværksindstillinger \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## Anvend AdGuard som en HTTP-proxy

Slå denne indstilling til for at få AdGuard til at fungere som en HTTP-proxy. Al trafik, der passerer igennem den, filtreres — ikke kun på computeren, men også på andre enheder i hjemmenetværket.

For at filtrere trafik på andre enheder, installér AdGuards root-certifikat på dem og opsæt proxyen manuelt.

Andre indstillinger er som standard slået til.

## HTTPS-filtrering

De fleste websteder bruger i dag HTTPS-kryptering. Uden HTTPS-filtrering kan AdGuard ikke blokere annoncer på websteder såsom YouTube, Facebook eller X (Twitter).

Vi anbefaler at beholde indstillingen _Filtrér HTTPS_ slået til, medmindre der er en specifik grund til at slå den fra.

Med denne indstilling er det muligt at:

- Geninstallere eller downloade AdGuard-certifikatet

- Føje websteder til en liste, der ikke filtreres

- Vælge, om der skal filtreres websteder med EV (Udvidet Validering) certifikater

## Proxy til app- og filteropdateringer

Her kan vælges, hvilken proxy AdGuard skal bruge til download af filteropdateringer eller nye app-versioner – systemproxyen, en tilpasset proxy eller slet ingen proxy.

![Proxyindstillinger \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## Anvend SockFilter-driver

Slå denne indstilling til for at anvende SockFilter-driveren, der assisterer med at blokere annoncer og trackere i apps i Windows 8 og senere. Er denne indstilling slået fra, skifter AdGuard i stedet til den ældre WFP-driver.

SockFilter blev først introduceret i v8.0 RC. Det er en _eksperimentel_, letvægts-netværksdriver i kernel-tilstand, der fungerer på socket-niveau (TCP/UDP). I stedet for at inspicere eller ændre pakker, når de bevæger sig gennem hele Windows-netværksstakken, opfanger et sock-filter socket-kald (f.eks. tilslut, send, modtag, tilknyt) på et højere og mere stabilt abstraktionsniveau. Dette gør det ideelt til applikationer med behov for at overvåge eller styre netværksaktivitet uden dyb pakkebehandling.

Når SockFilter er fuldt testet og implementeret, har det potentiale til at give flere fordele ift. andre drivere:

- **Den opererer på et højere socket-niveaulag**: SockFilter arbejder med socket-operationer i stedet for rå pakker, hvilket gør den mindre kompleks og mere stabil end WFPs lavniveaupakkefiltrering.
- **Ingen interferens med andre netværksdrivere**: Da det er placeret over VPN, Firewall og antivirus, undgår WFP-filtre problemer med filterrækkefølge og kompatibilitetskonflikter, som er almindelige i WFP-stakken.
- **Markant reduceret risiko for NETIO-relaterede BSOD'er**: SockFilter kører ikke inde i NETIO-pakkepipelinen, så den undgår de typiske nedbrudsscenarier, som skyldes, at WFP-callouts håndterer buffere, klassifikationsresultater eller pakkehukommelse forkert.

Når det gælder ulemper, så ser SockFilter-driveren kun socket-niveauoperationer og opsnapper ikke trafik genereret af andre kernel-drivere eller komponenter, som omgår standard Winsock API'en. Fra et lavniveau-netværksperspektiv kan dette ses som en begrænsning, da driveren ikke kan tilgå rå pakker eller inspicere ikke-socket-trafik. Men for en adblocking-applikation er denne adfærd ikke blot acceptabel, men optimal. Al relevant trafik fra webbrowsere og applikationer i brugertilstand går igennem standard sockets, og det er præcis det, vi har brug for at have kontrol over. Samtidig fjerner ignorering af lavniveaudriver-traffik unødvendig kompleksitet, undgår kompatibilitetsproblemer og holder systemet stabilt.
