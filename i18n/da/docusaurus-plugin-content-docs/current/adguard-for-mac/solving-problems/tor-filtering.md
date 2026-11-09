---
title: Opsætning af filtrering i Tor Browser
sidebar_position: 10
---

:::info

Denne artikel omhandler AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Som standard føjes Tor Browser til AdGuards liste over filtrerede applikationer. For at filtrere den skal AdGuard dog ændre Tors sikkerhedsindstillinger. Dette vil få Tor til anse AdGuards CA-certifikat som betroet.

Besluttes det at filtrere Tor og afkrydse den i *Præferencer* → *Netværk* → *Applikationer*, viser AdGuard denne dialogboks:

![AdGuard-dialogboks](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Ved at opdatere Tor-indstillingerne, opsætter AdGuard flg.:

`security.enterprise_roots.enabled`: true

Indstillingen får Tor til at anse rodcertifikater som betroede. [Læs mere](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning er en sikkerhedsforanstaltning, hvormed websteder kan sikre sig, at forbindelsen mellem et websted og en bruger er reel. Dette indebærer, at webstedet udgiver en liste over offentlige nøgler eller PIN-koder, som det har tillid til. Med håndhævelsesniveauet sat til 1, håndhæves fastgørelse ikke for tilpassede CA'er. [Læs mere](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Genstart Tor Browser for at effektuere ændringerne.

Ændres disse indstillinger manuelt, stoppes Tor-filtreringen.
