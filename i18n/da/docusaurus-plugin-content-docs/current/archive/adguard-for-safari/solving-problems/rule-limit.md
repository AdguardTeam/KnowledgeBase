---
title: Regelkvoteproblemer
sidebar_position: 1
---

:::info

Denne artikel omhandler AdGuard til Safari, der kun beskytter Safari-webbrowseren. For at beskytte hele enheden, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Regelkvote i Safari-indholdsblocker

AdGuard til Safari bruger Content Blocking API'en til anvendelse af filtreringsregler på sider i Safari-webbrowseren. P.t. tillades maks. 150.000 regler pr. indholdsblokerende udvidelse.

AdGuard til Safari har 6 indholdsblockere:

- AdGuard Generelt
- AdGuard Fortrolighed
- AdGuard Social
- AdGuard Sikkerhed
- AdGuard Andre
- AdGuard Tilpasset

Dette muliggør i alt 900.000 filtreringsregler.

Dog kan **en udvidelse indeholde op til 150.000 regler**. Overskrides denne kvote, vil nogle af reglerne ikke blive anvendt. Dette kan medføre forkert blokering.

## Sådan tjekkes, om kvoten overskrides

1. Åbn AdGuard til Safari-appen.
2. Rul ned og klik på _Indholdsblockere_.
3. Under hver indholdsblocker ses de aktiverede filtre og antallet af aktive regler.
   ![Indholdsblockere](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

Er mere end 150.000 regler aktiveret i en indholdsblocker, skal nogle af dens filtre eller brugerregler muligvis deaktiveres. Gå til _Filtre_, vælg den problematiske kategori og deaktivér de filtre eller brugerregler, som ikke behøves.
