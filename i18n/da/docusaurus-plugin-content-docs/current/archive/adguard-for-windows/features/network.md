---
title: Netværk
sidebar_position: 4
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Modulet _Netværk_ er dedikeret til netværksfiltrering, og her findes yderligere netværksrelaterede indstillinger. To af dem er aktiveret som standard: _Aktivér trafikfiltrering_ og _Filtrér HTTPS_. Disse er vigtige ekstra forholdsregler for bedre at filtrere webområdet. De fleste websteder bruger nu HTTPS, hvilket også gælder for annoncering. På mange websteder, såsom youtube.com, facebook.com og x.com, er det umuligt at fjerne annoncer uden HTTPS-filtrering. Slå derfor ikke funktionen _Filtrér HTTPS_ fra, medmindre der er god grund til det.

![Netværksindstillinger \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/network/network_settings_2.png)

I dette modul kan feltet "Brug AdGuard som HTTP-proxy" afkrydses for at bruge AdGuard som en alm. HTTP-proxy, hvilket vil filtrere al trafik, der passerer igennem den. Funktionen _Filtrér websteder med EV-certifikater_ kan også aktiveres. Extended Validation (EV) SSL Certificates giver en bedre sikkerhedsgaranti, da webstedets ejer har bestået en grundig og globalt standardiseret identitetsbekræftelsesproces defineret inden for EV-retningslinjerne. Det er grunden til, at nogle brugere har tillid til websteder med sådanne certifikater og foretrækker ikke at filtrere dem.

Endelig er der et afsnit med proxy-indstillinger. Her kan angives, hvilken proxyserver AdGuard skal anvende til at opdatere filtre, hente nye versioner mv.

### Aktivér trafikfiltrering

Trafikfiltrering er kernemekanismen, der tillader AdGuard at inspicere og kontrollere netværkstrafikken genereret af applikationer på computeren. Når den er aktiveret, opfanger AdGuard ud- og indgående forbindelser og tjekker dem mod sine filtreringsregler. Matcher en forespørgsel en blokeringsregel, kan AdGuard blokere, ændre eller tillade den afhængigt af opsætningen. I AdGuard til Windows er denne opsnapning implementeret via netværksdrivere.

Aktiveres HTTPS-filtrering, udfører AdGuard en kontrolleret lokal TLS-opsnapning: Den dekrypterer trafikken via sit lokale certifikat, anvender filtreringsregler og krypterer derefter trafikken igen, inden den sendes til webbrowseren. Driveren faciliterer blot den systemniveauadgang, der er nødvendig for, at AdGuard kan opsnappe disse forbindelser.

I _Netværk_ kan der også aktiveres trafikfiltrering og vælges, hvilken driver, der skal bruges: SockFilter, WFP eller TDI.

#### SockFilter

**SockFilter** er en _eksperimentel_, letvægts-netværksdriver i kernel-tilstand, der fungerer på socket-niveau (TCP/UDP). I stedet for at inspicere eller ændre pakker, når de bevæger sig gennem hele Windows-netværksstakken, opfanger et sock-filter socket-kald (f.eks. tilslut, send, modtag, tilknyt) på et højere og mere stabilt abstraktionsniveau. Dette gør det ideelt til applikationer med behov for at overvåge eller styre netværksaktivitet uden dyb pakkebehandling.

SockFilter blev først implementeret i version 7.22.4, og det anses stadig for ustabilt — der kan opleves fejl. Når SockFilter er fuldt testet og implementeret, har det potentiale til at tilbyde flere fordele ift. andre drivere:

- **Den opererer på et højere socket-niveaulag**: SockFilter arbejder med socket-operationer i stedet for rå pakker, hvilket gør den mindre kompleks og mere stabil end WFPs lavniveaupakkefiltrering.
- **Ingen interferens med andre netværksdrivere**: Da det er placeret over VPN, Firewall og antivirus, undgår WFP-filtre problemer med filterrækkefølge og kompatibilitetskonflikter, som er almindelige i WFP-stakken.
- **Markant reduceret risiko for NETIO-relaterede BSOD'er**: SockFilter kører ikke inde i NETIO-pakkepipelinen, så den undgår de typiske nedbrudsscenarier, som skyldes, at WFP-callouts håndterer buffere, klassifikationsresultater eller pakkehukommelse forkert.

Når det gælder ulemper, ser SockFilter-driveren kun socket-niveauoperationer og opfanger ikke trafik genereret af andre kernel-drivere eller komponenter, som omgår standard Winsock API'en. Fra et lavniveau netværksperspektiv kan dette ses som en begrænsning, da driveren ikke kan tilgå rå pakker eller inspicere ikke-socket trafik. Men for en adblocking-applikation er denne adfærd ikke blot acceptabel, men optimal. Al relevant trafik fra webbrowsere og applikationer i brugertilstand går igennem standard sockets, og det er præcis det, vi har brug for at have kontrol over. Samtidig fjerner ignorering af lavniveaudriver-traffik unødvendig kompleksitet, undgår kompatibilitetsproblemer og holder systemet stabilt.

#### WFP

**WFP** (Windows Filtering Platform) er et Microsoft-netværksframework indbygget i Windows, der tillader software at filtrere og overvåge netværkspakker på forskellige lag i systemnetværksstakken. AdGuard bruger WFP til sikkert at koble sig ind på netværksflowet for applikationer og anvende filtreringsregler, før trafikken når webbrowseren eller internet. [Yderligere information](https://learn.microsoft.com/en-us/windows/win32/fwp/windows-filtering-platform-architecture-overview).

Selvom det er en kraftfuld driver, kan den medføre stabilitetsrisici, såsom [lejlighedsvise systemnedbrud (BSOD)](https://github.com/AdguardTeam/AdguardForWindows/issues/5792) og lavere internethastighed for nogle brugere.

#### TDI

**TDI**-driveren er også tilgængelig, men den er forældet og kan forårsage [filtreringsproblemer i visse Google Chrome-versioner](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). [Der findes en midlertidig løsning](https://adguard.com/kb/archive/adguard-for-windows/solving-problems/tdi-driver-and-Chrome-142/), der dog ikke en pålidelig på langt sigt.

### AdGuard VPN

Det sidste afsnit er dedikeret til AdGuard VPN — et ideelt værktøj, der leverer sikkerhed og anonymitet, når der surfes på internet. Den kan downloades ved at klikke på knappen _Download_ eller gå til AdGuard VPN-webstedet ved at klikke på knappen _Hjemmeside_.

Hvordan fungerer AdGuard VPN? Uden at blive for teknisk, så opretter VPN en sikker krypteret tunnel mellem brugerens computer eller mobilenhed og en ekstern VPN-server. På denne måde bevares datafortroligheden samt brugerens anonymitet, da en tredjepartsobservatør ser IP-adressen på VPN-serveren og ikke brugerens reelle IP-adresse.

**Hvad AdGuard VPN gør:**

- skjuler den reelle færden og hjælper med at bevare anonymiteten
- skifter brugerens IP-adresse for at beskytte data mod sporing
- krypterer trafikken, hvilket gør den ulæselig for tredjeparter
- muliggør at opsætte, hvor VPN skal, og ikke skal, bruges (undtagelsesfunktion)

For yderligere oplysninger om AdGuard VPN, tjek [AdGuard VPN Vidensbase](https://adguard-vpn.com/kb/).
