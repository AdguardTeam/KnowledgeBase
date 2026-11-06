---
title: Manuel certifikatinstallation
sidebar_position: 1
---

:::info

Denne artikel omhandler AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

AdGuard til Mac skal installere sit rodcertifikat i certifikatlageret for at kunne [filtrere HTTPS-trafik](/general/https-filtering/what-is-https-filtering). Denne handling udføres i de fleste tilfælde automatisk, når appen eksekveres første gang, men brugere af Gecko-baserede webbrowsere (Firefox, Waterfox mv.), som har en hovedadgangskode opsat til deres webbrowser, kan blive bedt om at tage yderligere skridt (da disse webbrowsere bruger deres eget certifikatlager i stedet for systemets). De skal enten angive hovedadgangskoden, når de anmodes herom (for at give AdGuard adgang til certifikatlageret) eller manuelt installere certifikatet.

Sådan installeres certifikatet manuelt i en Firefox-lignende webbrowser:

  1. Åbn *Præferencer*

  2. Gå til *Fortrolighed og Sikkerhed* → *Certifikater*

  3. Klik på *Vis Certifikater*

  4. Gå til fanen *Myndigheder*, og klik på knappen *Import…*

  5. Vælg filen `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` eller download den blot fra http://local.adguard.org/cert med en Chromium-baseret webbrowser (f.eks. Google Chrome eller den nye Edge) og med HTTPS-filtrering kørende i AdGuard

De eksakte handlinger, krævet for forskellige Gecko-baserede webbrowsere, kan variere, men den generelle sekvens samt stien til `AdGuard Personal CA.cer`-filen vil være den samme.
