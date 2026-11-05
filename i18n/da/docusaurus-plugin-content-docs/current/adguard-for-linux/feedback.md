---
title: Indsendelse af feedback
sidebar_position: 4
---

## Anmeld et problem eller foreslå en funktionalitet

Er der fundet en fejl i AdGuard til Linux eller ønskes en ny funktion tilføjet, så er fremgangsmåden:

- Udfyld [feedbackformularen](https://surveys.adguard.com/en/adguard_linux/form.html).
- Opret en [GitHub-problematik](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). Inden det gøres, tjek først [repo'et](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) for lignende problematikker.

:::note

Vil man støtte implementeringen af en ny funktion eller fejlrettelse, kan der stemme på den på GitHub. For at stemme, reagér blot med en emoji.

:::

## Indsamling og indsendelse af logger

1. Aktivér fejlfindingslogning:

   `adguard-cli config set log_level debug`

2. Genskab problemet, og prøv at huske det nøjagtige tidspunkt, hvor det opstod.

3. Vent nogle øjeblikke, og eksportér dernæst logfilerne:

   `adguard-cli export-logs`

   Den arkiverede logfil downloades til applikationsmappen som standard, og stien til logfilerne vil fremgå i konsollen.

4. Indsend logfilen til <devteam@adguard.com>. Angiv tidspunktet for fejlen, og vedhæft et link til GitHub-problematikken eller dens nummer (angivet som #number ved siden af titlen). Alternativt kan logfilen uploades til Google Drev og deles med <devteam@adguard.com>. Føj fillinket til GitHub-problematikken.

5. Skift logningsniveauet tilbage til `info`:

   `adguard-cli config set log_level info`
