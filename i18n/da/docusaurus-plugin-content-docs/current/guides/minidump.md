---
title: Sådan oprettes en minidump-fil for at rette BSoD-fejlen
sidebar_position: 8
---

Næsten alle Windows-brugere er desværre bekendt med fejlen [Blue Screen of Death (BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death). BSoD opstår, når Windows-systemet støder på problemer, som kan påvirke sikker systemdrift, såsom problemer med tredjeparts driverkode, hardware eller Microsoft-kode. For at løse den blå skærm-fejl kan brugere bruge en minidump-fil.

## Hvad er en Minidump-fil?

En minidump-fil er en fil indeholdende oplysninger om arten af systemnedbruddet. Den oprettes lige før den blå skærm vises, og den har den minimale mængde nyttig information, der kan bruges til at løse problemet. Minidump-filen har normalt filtypenavnet *.dmp*.

:::note
På Windows 10 viser den blå skærm en stopkode og en QR-kode. Brugeren kan bruge disse oplysninger til at søge efter det specifikke problem på nettet.

:::

Muligheden for at oprette minidump-filen er deaktiveret som standard, så før vi går mere i detaljer om, hvordan filen bruges, lad os se nærmere på, hvordan den aktiveres.

## Opsæt Windows til at oprette Minidump-filen

Selvom der ikke opleves nogen BSoD-nedbrudsfejl, kan denne mulighed stadig indstilles — dette er en generel anbefaling, der ikke nødvendigvis er relateret til AdGuard-produkter. Følg vejledningen nedenfor for automatisk at oprette minidump-filen.

 1. Indtast *sysdm.cpl* på Windows-søgebjælken, og klik på **Åbn**. Kontrolpanelelementet **Systemegenskaber** vises på skærmen.

    :::tip

    Alternativt, klik på **Indstillinger** → **System** → **Om** → **Avancerede systemindstillinger**.


:::

    ![Systemegenskaber *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Gå til fanen **Avanceret**.
 1. Klik i afsnittet **Opstart og Gendannelse** på **Indstillinger**.

    ![Opstart og Gendannelse *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Aktivér flg. tre muligheder:

    - Skriv en hændelse til systemloggen
    - Genstart automatisk
    - Skrivning af fejlretningsoplysninger → Lille hukommelsesdump (256 kb)

    ![Tre valgmuligheder *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Klik på **OK** for anvende indstillingerne.
 1. Genstart computeren.

Oprettelse af minidump-fil er nu aktiveret. Den oprettes nu automatisk ved et systemnedbrud.

:::note

Som standard gemmes minidump-filen i mappen **%SystemRoot%\Minidump**. Mappeplaceringen kan frit ændres, men det bør bemærkes, at mange programmer er indstillet til at søge efter/på denne placering som standard, så en ændring heraf anbefales ikke.

:::

## Indsamling af wfpdiag.cab-fil

Supportteamet kan anmode om en wfpdiag.cab-fil sammen med en minidump-fil for at analysere systemets logfiler mere grundigt og diagnosticere problemer. For at indsamle filindholdet, følg disse trin:

1. Aktivér AdGuard-beskyttelsen.

1. Klik på *Start* og skriv `cmd` for at åbne Kommandprompt

1. Højreklik på Kommandoprompt og vælg *Kør som administrator*

    :::note

    En wfpdiag.cab-fil oprettes i den aktuelle mappe. Placeringen kan ændres ved at skrive `cd <folder_name>`.


:::

1. For at starte logning, indtast flg. kommando: `netsh wfp capture start`

1. Besøg et hvilket som helst websted for at rute trafik igennem AdGuard og logge filtreringsprocessen

1. For at stoppe logning, indtast `netsh wfp capture stop`
