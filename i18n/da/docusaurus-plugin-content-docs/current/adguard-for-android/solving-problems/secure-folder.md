---
title: Certifikatinstallation i en Sikker-mappe
sidebar_position: 12
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Installeres AdGuard i [*Sikker-mappen* i Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (dette gælder hovedsageligt Samsung-enheder), kan der opleves problemer under installationen af HTTPS-certifikatet. *Sikker-mappen* harnnemlig sin egen lagerplads til certifikater. Følges imidlertid den [almindelige vejledning til certifikatinstallation](/adguard-for-android/features/settings#https-filtering), installeres certifikatet på hovedlagerpladsen og får ingen indflydelse på adblockeren i *Sikker-mappen*. Følg i stedet denne vejledning for at installere certifikatet for AdGuard til Android på den *Sikker-mappe*-lagerplads:

1. Efter installation af appen og tilslutning til lokalt VPN, tryk på *HTTPS-filtrering er fra* på hovedskærmen.
1. Tryk på **Fortsæt** → **Næste** → **Gem certifikat**.
1. Gem certifikatet (på dette stadium kan det omdøbes for at gøre det lettere at finde senere, hvilket vil være nødvendigt).
1. Efter pop op'en til *Installationsvejledningen* vises, **TRYK IKKE ** på **Åbn Indstillinger**.
1. Minimer appen og gå til *Sikker-mappen*.
1. Tryk på trepriksmenuen og gå til **Indstillinger** → **Andre sikkerhedsindstillinger**.
1. Tryk på **Installér fra enhedslager** → **CA-certifikat** → **Installér alligevel**.
1. Bekræft installationen med den grafiske nøgle/adgangskode/fingeraftryk.
1. Find og vælg det tidligere gemte certifikat, og tryk dernæst på **Færdig**.
1. Returnér til AdGuard-appen og gå tilbage til hovedskærmen.
1. Færdig! Certifikatet er hermed installeret.
