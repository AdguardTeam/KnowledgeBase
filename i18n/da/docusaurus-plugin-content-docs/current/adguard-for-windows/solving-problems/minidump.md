---
title: Sådan indsamles BSOD-minidump
sidebar_position: 9
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::note

Data og filer leveret i minidump-filer behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/en/privacy.html).

:::

Blue Screen of Death (BSOD) fejl kan lejlighedsvis forekomme under brugen af AdGuard. Når dette sker, kan vores supportteam anmode om en minidump-fil som bidrag til problemdiagnosticeringen. Disse filer indeholder tekniske nedbrudsdata, som bidrager til at identificere og løse problemet.

## Tjekker for den eksisterende minidump

For at indsamle minidump-filer kræves administratoradgang på computeren. Som standard gemmer Windows disse filer i mappen `C:\Windows\Minidump\`. De relevante filer vil enten hedde `MEMORY.DMP` eller følge mønsteret `Mini(ddmmmåå-xxx).dmp`, hvor bogstaver og tal repræsenterer datoer og sekvensnumre.

![Minidump-fil \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/minidump.png)

Kan disse filer ikke lokaliseres, er systemet muligvis ikke opsat til automatisk at oprette minidumps.

## Opsæt minidump-indstillinger

Oprettes minidumps ikke automatisk, følg disse trin for at aktiver _Small Memory Dump_:

1. Tryk på _Windows-tasten + r_ for at åbne dialogboksen _Kør_.

2. Skriv "sysdm.cpl" og klik på _Retur_. Dette åbner vinduet _Systemegenskaber_.

   ![Åbn systemegenskaber \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/sysdm.png)

3. Gå til fanen _Avanceret_ → _Opstart og gendannelse_ → _Indstillinger_.

   ![Fanen Avanceret \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/advanced_tab.png)

4. Her findes en indstilling kaldet _Skriv fejlfindingsinformation_. Sørg for, at den er indstillet til _Small Memory Dump (256 KB)_, og at stien viser `%SystemRoot%\Minidump`. Disse indstillinger vil sikre, at Windows opretter de minidump-filer, vi har brug for, når en BSOD udløses.

   ![Lille hukommelses-dump \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/systemroot.png)

5. Klik på _OK_ for at gemme ændringerne.

## Efter et nedbrud udløses

Efter at have oplevet en BSOD og genstartet computeren, kan de genererede minidump-filer findes i mappen `C:\Windows\Minidump\`. Ved at sortere filerne efter ændringsdato bliver det nemt at finde den fil, der matcher det seneste nedbrud.

Er minidump-indstillingerne opsat efter nedbruddet, skal problemet genskabes for at generere en ny minidump-fil.

## Indsamling til `wfpdiag.cab`-fil

Supportteamet kan anmode om en wfpdiag.cab-fil sammen med en minidump-fil for at analysere systemets logfiler mere grundigt og diagnosticere problemer. For at indsamle filindholdet, følg disse trin:

1. Aktivér AdGuard-beskyttelsen.

2. Klik på _Start_ og skriv `cmd` for at åbne _Kommandprompt_.

3. Højreklik på _Kommandoprompt_ og vælg _Kør som administrator_.

   :::note

   En wfpdiag.cab-fil oprettes i den aktuelle mappe. Placeringen kan ændres ved at skrive `cd <folder_name>`.

   :::

4. For at starte logning, indtast flg. kommando: `netsh wfp capture start`.

5. Besøg et websted for at rute trafik igennem AdGuard og logge filtreringsprocessen.

6. For at stoppe logning, indtast `netsh wfp capture stop`.
