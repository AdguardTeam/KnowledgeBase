---
title: Certifikatrelaterede problemer
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

For at kunne filtrere HTTPS-trafik og effektivt blokere annoncer og trackere, genererer AdGuard et særligt (og unikt) rodcertifikat og installerer dette i systemlageret. Der kan læses mere om, hvorfor et certifikat kræves, i [denne artikel](/general/https-filtering/what-is-https-filtering).

Normalt stoler webbrowsere på AdGuard-certifikatet, når det er føjet til systemcertifikatlageret under installationsprocessen. I visse tilfælde er dette dog ikke nok, og advarsler eller fejl vil kunne ses. Dette sker oftest i Firefox-baserede webbrowsere såsom Mozilla Firefox, PaleMoon, Waterfox mv. eller i Yandex.Browser.

Her er nogle almindelige problemer:

- [_Potential sikkerhedsrisiko_-fejl i Firefox-baserede webbrowsere](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser-certifikatadvarsel](#yandexbrowser-certificate-warning)
- [Ikke-officielle tilføjelser opdateres ikke i Firefox-baserede webbrowsere](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potentiel sikkerhedsrisiko_-fejl i Firefox-baserede webbrowsere

![Sikkerhedsrisiko-fejl](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Gamle FireFox-versioner, såvel som webbrowsere baseret herpå, har ikke tillid til certifikater fra systemlageret, men kun til dem fra deres lokale lager. Siden v68 har FireFox tillid til systemcertifikaterne, men fejlen "Forbindelsen er ikke betroet" kan stadig opleves. Sker noget lignende, prøv først at klikke på _Geninstallér Certifikat_-knappen, der kan findes under fanen _Netværk_.

![Geninstallér certifikat](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Hjælper dette ikke, følg da vejledningen for manuel tilføjelse af AdGuard-certifikatet til FireFox-lageret.

> Denne vejledning er til Firefox-webbrowseren. Betegnelser på knapper og menupunkter kan afvige i andre Firefox-baserede webbrowsere.

1. Kør AdGuard.

2. Gå til [https://local.adguard.org/cert](https://local.adguard.org/cert) og klik på knappen _Download_. Webbrowseren bør så begynde at downloade cert.cer-filen.

   :::note

   Downloadsiden kan også åbnes i AdGuard-appen ved at klikke på linket under _Indstillinger → Netværk → HTTPS-filtrering_.

   :::

   ![Certifiatindstillinger](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Åbn først webbrowseren og dernæst _Indstillinger_.

4. Gå til fanen _Fortrolighed og Sikkerhed_.

5. Rul ned til _Certifikater_ og klik på knappen _Vis certifikater_.

   ![Vis certifikater-vindue](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Vælg fanen _Myndigheder_.

7. Klik på _Importere..._.

   ![Certifikatindstillinger — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Find den downloadede **cert.cer**-fil, og klik på _Åbn_.

9. Markér afkrydsningsfeltet _Stol på denne CA til at identificere websteder_, og klik dernæst på OK\*.

   ![Certifikatindstillinger — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

AdGuard-certifikatet er nu installeret. Efter genstart af webbrowseren burde fejlen være forsvundet.

## Yandex.Browser-certifikatadvarsel

Anvendes både AdGuard til Windows og Yandex.Browser, har denne advarsel muligvis været vist:

![Yandex-certificatadvarsel](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Hvorfor dette sker

Både AdGuard og Yandex tager brugernes internetsikkerhed meget alvorligt. Den nuværende Yandex-politik er at advare brugerne om ethvert certifikat, webbrowseren ikke genkender. Dette er ikke ubegrundet, da ondsindede apps nogle gange kan injicere deres egne certifikater og bruge dem til at skade systemet og stjæle fortrolige data.

AdGuard føjer dog også sit certifikat til de betroede. Dette fører til den førnævnte advarselsbesked.

### Sådan løses problemet

Den nemmeste måde er at klikke på knappen _Gå til websted_. Dette fortæller Yandex.Browser, at AdGuard-certifikatet skal betragtes som pålideligt, i det mindste i et stykke tid. Normalt vises denne besked ikke længere, dog vil den muligvis af ukendte årsager dukker igen op af og til. I så tilfælde trykkes blot på den samme knap igen _(vær dog helt sikker på, at det også er AdGuards certifikat!)_.

Deaktivering af HTTPS-filtreringen i AdGuard vil også forhindre Yandex.Browser i at vise denne besked igen, men det har en høj pris: Alle annoncer indlæst via HTTPS (inkl. Yandexs egne annoncer) vil blive vist på websteder såsom YouTube, Facebook, Instagram mv. Dette fraråder vi kraftigt, såfremt en højkvalitets adblocking ønskes bibeholdt.

## Ikke-officielle tilføjelser opdateres ikke i Firefox-baserede webbrowsere

Anvendes Firefox-baserede webbrowsere med tilføjelser, som ikke er fra Mozillas officielle katalog — og HTTPS-filtrering er aktiveret i AdGuard — vil disse tilføjelser ikke kunne opdateres. Her er årsagen.

For at opdatere tilføjelser tjekker Firefox, om forbindelsen til opdateringsserveren er sikret med et certifikat udstedt af en betroet certifikatmyndighed (CA). Firefox-baserede webbrowsere har kun tillid til certifikater fra CA'er inkluderet i Mozillas indbyggede liste — et sikkerhedstiltag til blokering af potentielt usikre opdateringer.

Selvom AdGuards certifikat er sikkert, findes det ikke på listen. Det er årsagen til, at Mozilla-domæner undtages fra HTTPS-filtrering i AdGuard.

Ikke-officielle tilføjelser bruger imidlertid tredjepartsservere til opdateringer, og disse er ikke undtaget fra HTTPS-filtrering som standard. Når Firefox derfor tjekker forbindelsen, ser den AdGuards certifikat i stedet for det oprindelige – og blokerer opdateringen.

Ved behov for at tjekke for opdateringer til sådanne tilføjelser, overvej midlertidigt at deaktivere AdGuard.
