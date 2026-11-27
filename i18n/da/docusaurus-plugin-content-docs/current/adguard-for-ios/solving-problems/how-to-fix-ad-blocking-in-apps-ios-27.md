---
title: Sådan rettes adblocking i apps i iOS 27
sidebar_position: 6
---

:::info

Denne artikel omhandler AdGuard til iOS, en multifunktionel adblocker, der beskytter enheden på systemniveau. For selv at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock).

:::

Selv med [DNS-beskyttelse](/adguard-for-ios/features/dns-protection/) aktiveret kan de4 nogle gange stødes på annoncer i andre apps og webbrowsere end Safari. På enheder, som kører iOS 27 eller nyere med _AdGuard_ DNS-implementering i _Split-Tunnel_-tilstand, kan systemfunktionen _Connectivity Assist_ forstyrre DNS-beskyttelsen.

Da dette er et kendt problem, viser AdGuard proaktivt en engangsadvarselsdialog — **Connectivity Assist kan påvirke adblocking** — når alle de flg. betingelser er opfyldt:

- Enheden kører iOS 27 eller nyere
- _DNS-beskyttelse_ er aktiveret
- _DNS-implementering_ er indstillet til _AdGuard_
- _Tunneltilstand_ er indstillet til _Split_
- Advarslen er ikke tidligere blevet vist eller afvist

![Connectivity Assist-advarselsdialog](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/connectivity-assist-warning-new.png)

Denne advarsel kan vises på hovedskærmen, skærmen _Beskyttelse_ eller skærmen _DNS-beskyttelse_. Den peger kun på en potentiel konflikt: iOS forhindrer tredjeparts-apps i at læse systemets til/fra knapper, så AdGuard kan ikke detektere, om _Connectivity Assist_ rent faktisk er slået til. Er dialogen allerede afvist én gang, vises den ikke igen.

:::note

Adblocking i Safari kan fortsætte med at fungere normalt, selv når der vises annoncer i andre apps. Safari bruger indholdsblokeringsregler direkte i webbrowseren, som fungerer uafhængigt af DNS-beskyttelse og ikke påvirkes af netværksrutning.

:::

## Hvad er Connectivity Assist, og hvorfor den er vigtigt

I iOS 27 omdøbte Apple _Wi-Fi Assist_ til _Connectivity Assist_ og flyttede den til _Indstillinger_ → _Wi-Fi_. Når den er slået til, giver den enheden mulighed for at bruge mobildata til at supplere Wi-Fi, hver gang den trådløse forbindelse er langsom eller ustabil.

Denne mekanisme er i direkte konflikt med DNS-beskyttelsen. Når en app forespørger et annoncedomæne over Wi-Fi, rammer forespørgslen AdGuards lokale tunnel og blokeres som forventet. Da der ikke returneres noget gyldigt svar, fejltolker iOS imidlertid blokeringen som en Wi-Fi-netværksopløsningsfejl. _Connectivity Assist_ griber derefter ind og gentager automatisk nøjagtig den samme DNS-forespørgsel over mobildatanetværket. I _Split-Tunnel_-tilstand omgår denne mobildatareserve AdGuards lokale VPN-tunnel fuldstændigt. Som følge heraf opløses annoncedomænet ufiltreret over mobildata, og annoncer slipper igennem.

## Sådan rettes dette problem

1. Åbn iOS-appen _Indstillinger_.
2. Tryk på _Wi-Fi_, og sørg for, at Wi-Fi er slået til.
3. Rul ned til _Connectivity Assist_, og slå den fra. Er denne mulighed ikke synlig, sørg da for, at _Mobildata_ (eller _Cellular_) er slået til i _Indstillinger_, for at til/fra knappen vises.
4. Tjek resultatet: Åbn de apps eller websteder, hvor annoncer tidligere blev vist, for at bekræfte, at de ikke længere indlæses.

:::note

Brug ikke skærmen _Aktivitet_ til at bekræfte rettelsen. AdGuard registrerer blokerede DNS-forespørgsler på Wi-Fi-grænsefladen, uanset om iOS efterfølgende omgår tunnelen via mobildata. Som en konsekvens vil _Aktivitet_-loggen vise blokerede forespørgsler, selv når annoncer aktivt indlæses på enheden.

:::

Slipper annoncer stadig igennem, efter at _Connectivity Assist_ er slået fra, kontakt os via [support@adguard.com](mailto:support@adguard.com), så vi kan diagnosticere opsætningen.

## Alternativer og deres begrænsninger

Foretrækkes det ikke at deaktivere _Connectivity Assist_, bruges to andre opsætninger nogle gange. Dette er løsninger med kompromiser, ikke en rettelse, og ingen af dem er en ligeværdig erstatning for at slå den fra.

### Indbygget implementering

Med _DNS-implementering_ indstillet til _Indbygget_ opsættes DNS-serveren direkte af iOS i stedet for AdGuard. I denne tilstand etablerer AdGuard ikke en lokal VPN-tunnel, hvilket kan reducere muligheden for, at DNS-forespørgsler omdirigeres af systemet.

Der mistes dog kernefunktioner i AdGuards DNS-beskyttelse:

- Ingen lokal DNS-filtrering
- Ingen tilpassede DNS-regler
- Ingen DNS-forespørgselsstatistik i AdGuard

Derudover virker _Indbygget_-implementeringen ikke, mens et VPN er aktivt.

### Fuld tunnel

I tilstanden _Fuld tunnel_ rutes al DNS-trafik igennem AdGuard i stedet for at blive selektivt filtreret. Selvom dette kan forhindre trafik i at omgå tunnelen, er det forbundet med betydelige forbehold:

- _Fuld_ tunneltilstand kan ikke køre sideløbende med andre VPN-apps — intet andet personligt VPN kan køre på samme tid.
- Det kan forårsage forbindelsesproblemer: Svarer den valgte DNS-server ikke, vil internetadgangen helt ophøre med at fungere.
- Det kan påvirke bestemte apps og tjenester negativt, såsom FaceTime.
