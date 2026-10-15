---
title: Statistik
sidebar_position: 3
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Modulet _Statistik_ kan tilgås ved at trykke på fanen _Statistik_ (fjerde ikon fra venstre nederst på skærmen). Denne funktion giver et komplet billede af, hvad der sker med enhedens trafik: Hvor mange forespørgsler, som sendes og til hvilke virksomheder, hvor meget data, som uploades og downloades, hvilke forespørgsler, som blokeres og meget mere. Statistikken kan vises for perioderne 24 timer, 7 dage, 30 dage eller tidsubegrænset.

![Statistik \*mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Statistikken er kategoriseret i forskellige afsnit.

### Forespørgsler

Dette afsnit viser antallet af blokerede annoncer, trackere og det samlede antal forespørgsler. Forespørgsler kan filtreres efter datatype: Mobildata, Wi-Fi eller alle data kombineret.

_Seneste aktivitet_, tidligere betegnet _Filtreringslog_, viser de seneste 10.000 forespørgsler behandlet af AdGuard. Tryk på trepriksmenuen (⋮) og dernæst _Tilpas_ for at filtrere forespørgsler efter status (_almindelige_, _blokerede_, _ændrede_ eller _hvidlistede_) eller oprindelse (_førsteparts_ eller _tredjeparts_).

Tryk på en forespørgsel for at se dens detaljer og/eller tilføje en blokerings- eller afblokeringsregel med ét tryk.

### Dataforbrug

Dette afsnit viser mængden af downloadet og uploadet data samt sparet trafik for den valgte datatype (mobildata, Wi-Fi eller alle). Tryk på _sparet_, _uploadet_ eller _downloadet_ for at se grafen for dataforbrug over tid.

### Apps

Dette afsnit viser statistik for alle apps installeret på enheden. Apps kan sorteres efter antallet af blokerede annoncer eller trackere, eller efter antallet af sendte forespørgsler.

Tryk på _Se alle apps_ for at udvide apps-listen, sorteret efter antallet af annoncer, trackere eller forespørgsler.

![Apps-liste \*mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

Ved tryk på en app kan dens fulde statistik ses: Sendte forespørgsler og de domæner og virksomheder, den opretter forbindelse til.

### Virksomheder

Dette afsnit viser virksomheder, som enheden opretter forbindelse til. Hvad betyder det? AdGuard registrerer de domæner, enheden sender forespørgsler til og fastslår, hvilke virksomheder, de tilhører. En database over virksomheder kan findes på [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS-statistik

Dette afsnit viser data om de af _DNS-beskyttelse_ håndterede forespørgsler. Her fremgår i figurer og grafer det samlede antal sendte forespørgsler, og hvor mange, som blev blokeret af AdGuard. Her ses også statistik over mængden af sparet trafik samt downloadet og uploadet data.

### Strømforbrug

Dette afsnit viser statistik om enhedsressourcer brugt af AdGuard i løbet af de seneste 24 timer. Dataene kan afvige fra de statistikker, som fremgår i enhedsindstillingerne. Dette skyldes, at systemet tilskriver AdGuard trafikken for de filtrerede apps. Det fremgår således, at AdGuard forbruger flere ressourcer, end den faktisk gør. [Læs mere om problemer med strøm- og trafikforbrug](/adguard-for-android/solving-problems/battery/).
