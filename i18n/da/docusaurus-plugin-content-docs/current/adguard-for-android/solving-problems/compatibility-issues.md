---
title: Kendte kompatibilitetsproblemer med Android-apps
sidebar_position: 14
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## VPN-apps

Anvendes AdGuard i filtreringstilstanden *Lokalt VPN*, kan der ikke afvikles andre VPN-apps samtidigt. For at løse dette problem foreslås flg.:

- Brug [AdGuard VPN](https://adguard-vpn.com/welcome.html) — dens *Integreret tilstand* muliggør, at to apps kan afvikles samtidigt
- Opsæt VPN-appen som en [udgående proxy](../solving-problems/outbound-proxy.md) og opsæt en lokal udgående proxy med parametrene fra tredjeparts-appen
- Skift til tilstanden *Automatisk proxy*. Når dette gøres, vil AdGuard ikke længere bruge lokalt VPN, men ændrer i stedet iptables-opsætningen
- Skift til tilstanden *Manuel proxy*. For at gøre dette, gå til *Indstillinger* → *Filtrering* → *Netværk* → *Rutingstilstand*

:::note Kompatibilitet

Tilstanden *Automatisk proxy* er kun tilgængelig på rootede enheder. Brug af *Manuel proxy* kræver rooting på enheder med Android 10 eller senere.

:::

## Private DNS

Private DNS-funktionen blev introduceret i Android Pie. Før version Q ødelagde Private DNS ikke AdGuard DNS-filtreringslogikken, og rutning af DNS igennem AdGuard fungerede normalt. Fra og med version Q tvinger tilstedeværelsen af Private DNS apps til at omdirigere trafik igennem systemopløseren i stedet for AdGuard. Se Android [devs blog](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) for flere detaljer.

- Brug `$network`-reglen for at løse problemet med Private DNS

Nogle enhedsproducenter holder Private DNS-indstillinger skjult og opsætter 'Automatisk' tilstand som standard. Private DNS kan derfor ikke deaktiveres, men vi kan få systemet til at tro, at upstream'en er ugyldig ved at blokere den med en `$network`-regel. Bruger systemet f.eks. Google DNS som standard, kan reglerne `|8.8.4.4^$network` og `|8.8.8.8^$network` tilføjes for at blokere Google DNS.

## Uunderstøttede webbrowsere

### UC Browsere: UC Browser, UC Browser til x86, UC Mini, UC Browser HD

For at kunne filtrere HTTPS-trafik kræver AdGuard, at brugeren tilføjer et certifikat til enhedens betroede brugercertifikater. Desværre har UC-webbrowsere ikke tillid til brugercertifikater, så AdGuard kan ikke HTTPS-filtrere dem.

- For at løse dette problem, flyt [-certifikatet til systemcertifikatlageret](../solving-problems/https-certificate-for-rooted.md/)

:::note Kompatibilitet

Kræver root-adgang.

:::

### Dolphin Browser: Dolphin Browser, Dolphin Browser Express

AdGuard kan ikke filtrere dens trafik, når den opererer i tilstanden *Manuel proxy*, da denne webbrowsere ignorerer systemproxyindstillinger.

- Brug filtreringstilstanden *Lokalt VPN* for at løse dette problem

### Opera mini: Opera mini, Opera mini med Yandex

Opera mini ruter som standard trafik gennem en komprimerings-proxy, og AdGuard kan ikke både dekomprimere og filtrere den på samme tid.

- P.t. findes ingen tilgængelig løsning

### Puffin Browser: Puffin Browser, Puffin Browser Pro

Puffin Browser ruter trafik igennem en komprimerings-proxy som standard, og AdGuard kan ikke både dekomprimere og filtrere den på samme tid.

- P.t. findes ingen tilgængelig løsning
