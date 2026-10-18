---
title: Certifikatinstallation på enheder med Android 11+
sidebar_position: 11
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

For at kunne [filtrere HTTPS-trafik](/general/https-filtering/what-is-https-filtering.md) (hvilket er ekstremt vigtigt, da de fleste annoncer bruger HTTPS), skal AdGuard installere sit certifikat i enhedens brugerlager. På ældre Android OS- versioner skete dette automatisk, men fra Android 11 skal det installeres manuelt af brugeren.

![Certifikat *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Følg disse trin for at installere AdGuard-certifikatet:

1. Åbn appen. Tryk fra *Start*-skærmen på *HTTPS-filtrering er slået fra*.

1. Dernæst følger tre skærmbillederr:
    - HTTPS-filtrering er kritisk for adblocking
    - AdGuards HTTPS-filtrering er sikker
    - AdGuard-certifikat

1. Tryk gentagne gange i træk på *Fortsæt* → *Næste* → *Gem certifikat*.

1. Tryk på *Gem* nederst i den åbnede *Download*-mappe.

1. Efter at have gemt, kopiér teksten fra feltet *CA-certifikat* og tryk på *Åbn indstillinger*.

1. Åbn *Indstillinger* og indsæt/skriv *CA-certifikat* på søgebjælken. Tryk på den relevante mulighed.

1. En advarsel vises muligvis. Er det tilfældet, tryk på *Installér alligevel* og angiv om nødvendigt PIN-koden.

1. Vælg AdGuard-certifikatfilen. Dens navn bør være noget i stil med *adguard_1342_020322.crt*.

Alt er nu klar! Når certifikatet er installeret korrekt, er HTTPS-filtrering aktiveret.

Opleves problemer under den manuelle certifikatinstallation (certifikatet er f.eks. blevet installeret, men det ignoreres af appen), kan en af nedenstående løsninger følges.

1. Genstart AdGuard.
1. Prøv at installere det korrekte certifikat (AdGuard Personal CA) igen.

## Sikkerhedsadvarsler

I tidligere versioner af Android viste panelet hurtig-indstillinger beskeden "Netværk kan være monitoreret." Et tryk på den åbner et vindue med detaljerede oplysninger.

Fra og med Android 15 vil brugere, ud over "Netværk kan være monitoreret", se en advarselsnotifikation efter installation af et certifikat og efter genstart af enheden: "Certifikatmyndigheder installeret af en ukendt tredjepart." Det angiver, at systemet har registreret tredjepartscertifikater i brugercertifikatlageret. Et tryk på notifikationen åbner en liste over certifikater i brugercertifikatlageret.

Trods disse advarsler, forbliver trafikken sikker. Forbindelsen til fjernservere forbliver krypteret. Hvad AdGuard gør, er blot at bekræfte serverens certifikat, før den beslutter, om forbindelsen skal filtreres — ligesom en webbrowser vil gøre.

[Få mere at vide om HTTPS-filtrering, og hvordan certifikatet fungerer](/general/https-filtering/what-is-https-filtering.md).

Opleves fortsat et problem, og kan certifikatet ikke installeres, kontakt venligst vores supportteam via <support@adguard.com>.
