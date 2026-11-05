---
title: Avancerede indstillinger
sidebar_position: 4
---

Afsnittet _Avancerede indstillinger_ indeholder indstillinger, som går ud over, hvad de fleste brugere normalt har behov for. AdGuard til Windows fungerer perfekt efter installation, men disse indstillinger kan være nyttige i særlige tilfælde eller til fejlfinding.

:::caution

Ændring af avancerede indstillinger uden at forstå dem kan forårsage problemer med ydeevnen, afbryde internetforbindelsen eller påvirke sikkerheden og fortroligheden. Ændr dem kun, hvis konsekvenserne forstås, eller hvis vores supportteam anmoder herom.

:::

## Undtag app fra filtrering ved at angive dens fulde sti

Skal AdGuard overspringe filtrering af en bestemt app, angiv da dens fulde filsti hér. Der kan tilføjes flere apps ved at adskille deres stier med semikolon.

## Aktivér AdGuard pop op-notifikationer

Aktivér denne funktion for at se AdGuard pop op-notifikationer. De vises ikke for ofte og indeholder kun vigtig information. Den seneste notifikation kan også åbnes fra bakkemenuen.

## Opsnap automatisk filterabonnements-URL'er

Når slået til, detekterer AdGuard automatisk filterabonnementslink (såsom `abp:subscribe`) og åbner et vindue for at assistere med at føje dem til filterlisten.

## Brug tilstanden omdirigeingsdriver

Er denne indstilling slået til, omdirigeret AdGuard al trafik og ruter den til den lokale proxyserver for filtrering.

Er den slået fra, filtrerer AdGuard trafikken direkte — uden at omdirigere den. I denne tilstand ser Windows AdGuard som den eneste app, der opretter forbindelse til internet, da alle andre apps går igennem den. Dette kan forbedre ydeevnen en smule, men kan reducere effektiviteten af systemets firewall.

## Åbn AdGuard ved systemopstart

Aktivér denne indstilling for automatisk at åbne AdGuard-vinduet, når PC'en starter.

## Aktivér filtrering ved systemstart

Siden version 7.12 starter AdGuard ikke automatisk trafikfiltrering efter opstart af PC'en — medmindre indstillingen _Start AdGuard ved systemstart_ er aktiveret. I stedet kører den i en passiv "tomgangstilstand".

Slås denne til, tillader det AdGuard at filtrere trafik med det samme, selvom appen endnu ikke er blevet åbnet.

## Filtrér localhost

Aktivér denne for at tillade AdGuard at filtrere loopback (localhost) trafik, som nogle apps bruger til kommunikation inden for systemet. Hvis AdGuard VPN er installeret, er denne indstilling altid slået til, da VPN'et kræver den for at fungere korrekt.

## Optag HAR

Dette er kun til fejlfinding. Når aktiveret, vil AdGuard oprette en HAR-fil (HTTP Archive 1.2-format) med detaljerede oplysninger om alle filtrerede forespørgsler. Den kan åbnes i apps såsom Fiddler.

Husk: Det kan nedsætte webbrowsinghastigheden.

## Vis QUIC i filtreringsloggen

Når aktiveret, vil AdGuard inkludere QUIC-protokoltrafik i filtreringsloggen — dog kun for blokerede forespørgsler.

## Blokér Java

Nogle websteder bruger stadig Java-plugins, som er afhængige af forældet og usikker teknologi. Disse plug-ins kan deaktiveres af sikkerhedshensyn.

Brug af indstillingen _Blokér Java_ påvirker ikke JavaScript — det forbliver aktiveret.

## Blokeringstilstand for DNS-regler

Vælg, hvordan AdGuard svarer, når et domæne blokeres af en DNS-regel baseret på [hosts-lignende syntaks](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Returnér en `REFUSED`-fejl
- Returnér en `NXDOMAIN`-fejl
- Returnér tilpasset IP-adresse

### Tilpasset IPv4-adr.

Hvis _Tilpasset IP-adresse_ er valgt i _Blokeringstilstand for DNS-regler_, returneres denne IP-adresse som svar på blokerede A-forespørgsler. Er ingen angivet, svarer AdGuard med standardfejlen REFUSED.

### Tilpasset IPv6-adr.

Hvis _Tilpasset IP-adresse_ er valgt i _Blokeringstilstand for DNS-regler_, returneres denne IP-adresse som svar på blokerede AAAA-forespørgsler. Er ingen angivet, svarer AdGuard med standardfejlen REFUSED.

## Reserveservere (fallback)

Opsæt reserve-DNS-servere her. AdGuard bruger disse, hvis den primære DNS-server ikke svarer inden for den angivne timeout. Det vil være muligt at:

- Anvende systemets standard DNS-servere
- Tilføje tilpassede reserveservere
- Eller vælge slet ikke at bruge reserveservere

## DNS-server timeout

Angiv, hvor længe (i millisekunder) AdGuard skal afvente et DNS-svar, før der skiftes til en reserveserver. Efterlades feltet tomt eller med ugyldigt indhold, er standardværdien 5.000 ms (5 sekunder).

## Tilpassede bootstrap-adresser

En bootstrap er en mellemliggende DNS-server brugt til at hente IP-adressen på den sikre DNS-server, der blev valgte tidligere i DNS-beskyttelsen. En sådan "mellemvej" er nødvendig ved brug af protokoller, som angiver serveradressen med bogstaver (såsom f.eks. DNS-over-TLS). I så tilfælde fungerer bootstrap'en som en oversætter, der omdanner bogstaverne til tal, som systemet kan forstå.

Om nødvendigt kan der dog angives forskellige IP-adresser her — de vil blive prøvet i rækkefølgen fra top til bund. Hvis ingen fungerer, eller intet er indtastet, falder AdGuard tilbage til systemstandarderne.

## DNS-undtagelser

Domæner opført her omgår AdGuard DNS-servere. Deres forespørgsler går igennem systemets standardopløser, og AdGuard anvender ikke nogen blokeringsregler på dem.
