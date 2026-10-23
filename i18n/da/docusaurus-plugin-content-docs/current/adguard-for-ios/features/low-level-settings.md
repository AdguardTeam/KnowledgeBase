---
title: Lavniveauindstillinger
sidebar_position: 6
---

:::info

Denne artikel omhandler AdGuard til iOS, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

![Lavniveauindstillinger \*mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

For at åbne _Lavniveauindstillinger_, gå til _Indstillinger_ → _Generelt_ → (slå _Avanceret tilstand_ til, hvis den er slået fra) → _Avancerede indstillinger_ → _Lavniveauindstillinger_.

Generelt bør indstillingerne i dette afsnit forblive uændrede: De bør kun bruges, såfremt man ved, hvad man foretager sig, eller såfremt supportteamet har givet andre dessiner. Nogle af indstillingerne kan dog ændres uden risiko.

### Blokér IPv6 {#blockipv6}

For enhver DNS-forespørgsel sendt for at hente en IPv6-adr. returnerer appen et tomt svar (som om denne IPv6-adr. ikke findes). Nu er der en mulighed for ikke at returnere IPv6-adresser. På dette stadie bliver beskrivelsen af denne funktion for teknisk: Opsætning eller deaktivering af IPv6 er udelukkende for avancerede brugere. Er man én af dem, vil det formentlig det være godt at vide, at vi nu har denne funktion, og er man ikke, er der ingen grund til at dykke ned i den.

### Bootstrap- og Reserveservere (fallback) {#bootstrap-fallback}

Fallback er en reserve-DNS-server. Ophører den valgte DNS-server med at svare, er der behov for, at en reserve-DNS-server (fallback) tager over, indtil primærserveren atter svarer.

Med Bootstrap er det lidt mere kompliceret. For at AdGuard til iOS kan bruge en tilpasset sikker DNS-server, skal appen først hente sin IP-adresse. Til dette formål bruges systemets DNS som standard, men nogle gange er dette ikke muligt af forskellige årsager. I sådanne tilfælde kan Bootstrap bruges til at hente IP-adressrn på den valgte sikre DNS-server. Her er to eksempler til illustration af, hvornår en tilpasset Bootstrap-server kan hjælpe:

1. Når en systemstandardmDNS-server ikke returnerer IP-adressen på en sikker DNS-server, og det ikke er muligt at bruge en sikker én.
2. Når AdGuard-appen og et tredjeparts-VPN bruges samtidigt, og det ikke er muligt at bruge System DNS som en Bootstrap.
