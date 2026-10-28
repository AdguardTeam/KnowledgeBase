---
title: Mulige DNS-lækager
sidebar_position: 10
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

AdGuard til Windows lader brugeren angive en anden DNS-serveradresse end system-DNS-serveren leveret af internetudbyderen, såfremt denne ikke tilsidesættes i systemindstillingerne. Brug af en ikke-standard DNS-server kan beskytte DNS-trafikken mod opsnapning fra internetudbyderen. Desuden opnås der ved valg af en krypteret og/eller filtrerende DNS-server endnu et lag af beskyttelse mod dårlige aktører og irriterende annoncer.

Mange AdGuard til Windows-brugere sætter pris på DNS-beskyttelsesfunktionen. Nogle af dem støder dog på flg. problem: Et tjek på et websted såsom https://ipleak.net/ viser, at forespørgsler håndteres af standard DNS-serveren i stedet for den valgte. Denne artikel fortæller, hvorfor dette sker, og hvordan det undgås.

## Bootstrap DNS-adresse

DNS-serveradresserne kan skrives som enten IP'er eller domænenavne.
I tilfælde af IP-adresser er der ingen problemer, da AdGuard videresender DNS-forespørgslen direkte til den i DNS-beskyttelsesmodulet angivne server. Krypterede DNS-serveradresser, såsom DoT eller DoH, angives dog oftest som domænenavne. I så tilfælde, for først at opløse den krypterede DNS-serveradresse, sender AdGuard en DNS-forespørgsel til bootstrap-adressen, hvilket som standard er en system-DNS-server. Denne forbindelse er, hvad kontroltjenester opfatter som en lækage.

**For at fjerne denne lækage:**

- gå til _Avancerede indstillinger_
- rul ned til afsnittet _Liste over tilpassede bootstrap-adresser_
- angiv den tilpassede bootstrap-adresse i IP-adresseformatet ([listen over kendte DNS-udbydere](https://adguard-dns.io/kb/general/dns-providers/) kan bruges)
- klik på _Gem_

## Reserve-DNS-server

Grundet forskellige faktorer kan det ske, at AdGuard ikke vil kunne nå den angivne server. I så tilfælde opretter AdGuard forbindelse til reserveserveren, der som standard er en system-DNS-server. Denne forbindelse vil også af kontroltjenesten blive betragtet som en lækage.

**For at fjerne denne lækage:**

- gå til _Avancerede indstillinger_
- rul ned til afsnittet _Reserveservere_
- markér indstillingen _Brug tilpassede servere_
- find dernæst afsnittet _Liste over tilpassede reserveservere_ og angiv de tilpassede reserveservere, én pr. linje

eller

- gå til _Avancerede indstillinger_
- rul ned til afsnittet _Reserveservere_
- markér indstillingen _Brug ikke reserveservere_

eller

- gå til _Avancerede indstillinger_
- rul ned til afsnittet _DNS-server timeoutinterval_
- angiv et vilkårligt stort tal
