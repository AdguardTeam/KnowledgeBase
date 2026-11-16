---
title: Safari-udvidelser
sidebar_position: 3
---

![Fanen Udvidelser](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari-udvidelser er mekanismer, som tillader implementering af indholdsblockere — tematiske klynger af filtre. F.eks. er fortrolighedsrelaterede filtre inkluderet i indholdsblockeren med det korresponderende navn — _AdGuard Privacy_.

Indholdsblockere er designet til to formål: Filterstrukturering og overholdelse af Apple-restriktioner.

[I 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) indførte Apple begrænsninger for adblockere til Safari, så disse kun kunne anvende 50.000 filtreringsregler samtidigt. Da dette tal var utilstrækkeligt til, at en adblocker kunne levere en god filtreringskvalitet (_AdGuard Base Filter_ alene har 30.000 filtreringsregler), blev AdGuard til Safari opdelt i seks indholdsblockere, hver med op til 50.000 regler.

[I 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html) øgede Apple filtreringsregelkvoten for hver indholdsblocker til 150.000 samtidigt anvendte regler. I AdGuard Mini til Mac kan op til 900.000 regler aktiveres for alle seks indholdsblockere.

Mens kvoten er blevet øget, er strukturen for indholdsblockere forblevet uændret.

I _Safari-udvidelser_ kan ses, hvilke indholdsblockere, som er aktiveret, hvor mange regler, hver af dem bruger, og hvilke filtre, som er i funktion.

:::tip

Aktiverede filtre kan håndteres via _Indstillinger_ → _Filtre_. I _Safari-udvidelser_ kan kun ses listen over aktiverede filtre og antallet af aktiverede regler.

:::

## Liste over AdGuard Mini Safari-udvidelser

### AdGuard Generelt

_AdGuard Generel_ er en indholdsblocker, der kombinerer de vigtigste adblockingfiltre. Det anbefales, at _AdGuard Base Filter_ altid er aktiveret.

### AdGuard Fortrolighed

Denne indholdsblocker er det primære værktøjet mod tællere og andre webanalyseværktøjer. _AdGuard Tracking Protection-filteret_ er slået til som standard.

### AdGuard Social

_AdGuard Social_ indeholder filtre mod sociale medier-knapper, -widgets, -scripts og -ikoner. Andre irritationfiltere kan også findes i dette afsnit: Filtre mod pop op-vinduer, bannere, cookie-meddelelser og mere. For at aktivere dem, find _Sociale widgets_ i _Indstillinger_ → _Filtre_.

### AdGuard Sikkerhed

Denne indholdsblocker forener flere sikkerhedsrelaterede filtre. _Malware Domains Blocklist_ blokerer domæner berygtet for at sprede malware og spyware. _Spam404_ beskytter mod internetsvindlere. _NoCoin Filter List_ forstyrrer webbrowserbaserede kryptominere, såsom Coinhive.

### AdGuard Andre

_AdGuard Andre_ indeholder filtre med forskellige funktioner. F.eks. har den et filter, der afblokerer søgeannoncer og selvpromoverende annoncer. I nogle tilfælde bidrager det med at finde præcis det, der ledes efter, fordi den slags annoncer er mere relevante og mindre påtrængende end andre.

:::note Forbehold

Vi har ingen "acceptable annoncer" betalt af annoncrer. I stedet giver vi brugerne mulighed for at se [søgeannoncer og websteders selvpromovering](/general/ad-filtering/search-ads).

:::

### AdGuard Tilpasset

![Opret tilpasset filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

Er der behov for flere filtre, kan de føjes til _AdGuard Tilpasset_-udvidelsen.

For at tilføje et tilpasset filter, gå til _Indstillinger_ → _Filtre_ → _Tilpassede filtre_ og indtast en URL eller en lokal filsti i det relevante felt. Nye filtre kan findes på [filterlists.com](https://filterlists.com/).
