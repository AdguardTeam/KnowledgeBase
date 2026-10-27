---
title: Netværk
sidebar_position: 10
---

:::info

Denne artikel omhandler AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Generelt

![Netværk](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Filtrér automatisk applikationer

Som standard blokerer AdGuard annoncer og trackere i de fleste webbrowsere ([Tor Browser er en undtagelse](/adguard-for-mac/solving-problems/tor-filtring)). Denne indstilling tillader AdGuard også at blokere annoncer i apps.

Klik på _Applikationer_ for at håndtere filtrerede apps.

### Filtrér HTTPS-protokol

Denne indstilling lader AdGuard filtrere den sikre HTTPS-protokol p.t. brugt af de fleste websteder og apps. Som standard filtreres websteder med potentielt sensitive oplysninger, såsom banktjenester, ikke. Klik på _Undtagelser_ for at håndtere HTTPS-undtagelser.

Som standard filtrerer AdGuard ikke websteder med Extended Validation (EV) certifikater. Indstillingen _Filtrér websteder med EV-certifikater_ kan om ønsket slås til.

## Udgående proxy

AdGuard kan opsættes til at rute al enhedens trafik igennem en egen proxyserver.

## HTTP-proxy

AdGuard kan anvendes som en HTTP-proxyserver. Dette muliggør filtrering af trafik på andre enheder tilsluttet proxyen.

Sørg for, at Mac'en og den anden enhed er forbundet til det samme netværk, og angiv på enheden, der skal rutes igennem proxy-serveren, proxy-porten (normalt via netværksindstillingerne). For også at filtrere HTTPS-trafik, [overfør AdGuards proxycertifikat](http://local.adguard.org/cert) til denne enhed. [Læs mere om installation af proxycertifikat](/guides/proxy-certifikat)
