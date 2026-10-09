---
title: Installation
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Systemkrav

**OS-version:** Minimum Android 9.0

**RAM:** Minimum 2 GB

**Ledig diskplads:** 500 MB

## Installation

De fleste Android-baserede apps distribueres via Google Play, men AdGuard er dog ikke repræsenteret dér, da Google forbyder distribution af netværksniveau-adblockere via Google Play, dvs. apps, som blokerer reklamer i andre apps. Der findes flere oplysninger om Googles restriktive politik [på vores blog](https://adguard.com/blog/adguard-google-play-removal.html).

Derfor kan AdGuard til Android kun installeres manuelt. Gør flg. for at bruge appen på en mobilenhed.

1. **Download appen på enheden**. Her er et par måder at gøre dette på:

    - gå til [vores websted](https://adguard.com/adguard-android/overview.html) og tryk på knappen *Download*
    - start browseren og angiv flg. URL: [https://adguard.com/apk](https://adguard.com/apk)
    - eller skan denne QR-kode:

    ![QR-kode *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Tillad installation af apps fra ukendte kilder**. Når filen er downloadet, tryk i notifikationen på *Åbn*.

    ![Installation af apps fra ukendte kilder *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    En pop op vises. Tryk på *Indstillinger*, gå til *Installér ukendte apps* og giv tilladelse til webbrowseren, der er brugt til at downloade filen.

    ![Installation af apps fra ukendte kilder *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. Tryk på **Installér appen**. Når webbrowseren er tildelt de nødvendige tilladelser, spørger systemet, om AdGuard-appen ønskes installeret. Tryk på *Installér*.

    ![Installation af apps fra ukendte kilder *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Brugeren anmodes dernæst om at læse AdGuards *Licensaftale* og *Fortrolighedspolitik*. Det er også muligt at deltage i produktudviklingen. Dette gøres ved at markere afkrydsningsfelterne for *Indsend nedbrudsrapporter automatisk* og *Indsend tekniske data og interaktionsdata*. Tryk dernæst på *Fortsæt*.

    ![Fortrolighedspolitik *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Opret et lokalt VPN**. AdGuard skal oprette en VPN-forbindelse for at filtrere al trafik direkte på enheden uden at rute den igennem en fjernserver.

    ![Opret et lokalt VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Slå HTTPS-filtrering til**. Indstillingen er ikke obligatorisk, men den anbefales slået til for bedste adblockingkvalitet.

    Kører enheden Android 7–9, anmodes der efter den lokale VPN-opsætning om at installere et rodcertifikat og opsætte HTTPS-filtrering.

    ![Slå HTTPS-filtrering til på Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Efter et tryk på *Installér nu*, anmodes via en prompt om at godkende certifikatinstallationen med adgangskode eller fingeraftryk.

    ![Slå HTTPS-filtrering til på Android 7-9. Trin 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    På en Android 10+ enhed vises efter oprettelsen af et lokalt VPN appens hovedskærm og en snackbar i bunden, der foreslår at aktivere HTTPS-filtrering: Tryk på *Aktivér* og følg vejledningen på næste skærm eller tjek [artiklen om certifikatinstallation](solving-problems/manual-certificate.md) for yderligere information.

    ![Slå HTTPS-filtrering til *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Afinstallation/geninstallation af AdGuard

Skal AdGuard afinstalleres på mobilenhed, åbn *Indstillinger* og vælg *Apps* (Android 7) eller *Apps og notifikationer* (Android 8+). Find AdGuard på listen over installerede apps, og tryk på *Afinstallér*.

![Geninstallere AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

For at geninstallere AdGuard, download apk-filen igen og følg trinene beskrevet i afsnittet Installation. Forudgående afinstallation kræves ikke.
