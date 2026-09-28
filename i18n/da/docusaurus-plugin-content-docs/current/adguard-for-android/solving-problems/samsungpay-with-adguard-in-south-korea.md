---
title: Sådan benyttes Samsung Pay med AdGuard i Sydkorea
sidebar_position: 16
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

En række brugere har oplevet det problem, at Samsung Pay ikke fungerer, mens AdGuard kører. Problemet opstår næsten udelukkende på enheder registreret i Sydkorea.

Hvad forårsager dette problem? Nogle gange fungerer Samsung Pay ikke på enheder med kørende VPN-tjenester, og AdGuard er en sådan app. Som standard anvender AdGuard et lokalt VPN til trafikfiltrering, hvilket kan forårsage problemer under brug af Samsung Pay.

Som en konsekvens måtte brugerne deaktivere AdGuard, inden de foretog betalinger med Samsung Pay. Dette kan nu undgås med funktionen *Detektér Samsung Pay*. Når denne indstilling er slået til, pauseres AdGuard-appen, hver gang brugeren åbner Samsung Pay-appen og genoptages, når appen lukkes.

:::note

Denne funktion fungerer kun, såfremt tilstanden Lokal VPN-filtrering er valgt i AdGuard-indstillingerne. Bruges en anden tilstand, fungerer Samsung Pay uden nogen afbrydelser.

:::

Følg disse trin for at slå *Detektér Samsung Pay* til:

1. Gå til *Indstillinger* → *Generelt* → *Avanceret* → *Lavniveauindstillinger*.

1. Rul til *Detektér Samsung Pay*, og flyt skyderen til højre.

1. Tryk på *Tildel tilladelser* og giv AdGuard adgang til oplysninger om brugen af andre apps.

Den kræves for indsamling af statistik om driften af Samsung Pay, således at funktionen *Detektér Samsung Pay* kan fungere.

Når der efter aktivering af funktionen skiftes fra Samsung Pay til AdGuard, vises meddelelsen som vist på skærmfotoet.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternativt kan filtrering for Samsung Pay deaktiveres via *App-håndtering*. Gå blot til skærmen *App-håndtering* (tredje fane fra bunden), find Samsung Pay på listen og slå kontakten fra for *Rut trafik igennem AdGuard*.
