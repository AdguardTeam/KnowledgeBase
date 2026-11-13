---
title: Sådan oprettes en dump-fil
sidebar_position: 8
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::note

Data og/eller filer tilgængelige i dump-filer behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/en/privacy.html).

:::

For at diagnosticere årsagerne til potentielle problemer, som brugere kan støde på under brug af AdGuard, har supportteamet muligvis brug for procesdump-filen. Via dump-filen kan udviklere se de processer, som er eksekveret i applikationen over en given tidsperiode.

Følg disse trin for at oprette en dump-fil:

1. Tryk på *Ctrl + Shift + Esc* for at åbne *Opgavehåndtering*.

1. Klik i venstre sidebjælke på *Detaljer*. ![Opgavehåndteringsdetaljer *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/task_manager_en.png)
1. Højreklik på den proces, for hvilken en dump-fil skal oprettes. Klik i rullemenuen på *Opret hukommelses-dump-fil*. ![Oprettelse af dump-fil *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/create_dump_en.png)
1. Når dump-filen er oprettet, beder en prompt om at åbne mappen, hvori den er gemt. Hvis ikke, kan den findes i mappen **%tmp%**. ![Åbn filplacering *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/open_file_location_en.png)

Den oprettede dump-fil (`.DMP`) har samme navn som processen, der blev valgt.

:::note

AdGuard til Windows har to kørende processer: `Adguard.exe` og `AdguardSvc.exe`. En separat dump-fil vil skulle oprettes for hver enkelt.

:::

![To processer *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Da dump-filer kan være store, bedes de komprimeret til et arkiv før indsendelse til supporten. Medtag også AdGuard-logfilerne for en mere effektiv diagnosticering af problemet. Se [Vejledning til indsamling af logfiler](../adguard-logs).

## Indsamling af `wfpdiag.cab`-fil

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

1. Komprimér filen `wfpdiag.cab` og indsend den til vores supportteam via **support@adguard.com**.
