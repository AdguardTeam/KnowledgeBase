---
title: Regelkvoteproblemer
sidebar_position: 1
---

:::info

Denne artikel omhandler AdGuard Mini til Mac, der kun beskytter Safari-webbrowseren. For at beskytte Mac'en helt, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Regelkvote i Safari-indholdsblocker

AdGuard Mini til Mac bruger Content Blocking API'en til at anvende filtreringsregler på sider i Safari-webbrowseren. P.t. tillades maks. 150.000 regler pr. indholdsblokerende udvidelse.

AdGuard Mini til Mac har 6 indholdsblockere:

- AdGuard Generelt
- AdGuard Fortrolighed
- AdGuard Social
- AdGuard Sikkerhed
- AdGuard Andre
- AdGuard Tilpasset

Dette muliggør i alt 900.000 filtreringsregler.

Dog **kan én udvidelse kun indeholde op til 150.000 regler**. Overskrides denne kvote, vil nogle af reglerne ikke blive anvendt. Dette kan medføre forkert blokering.

## Sådan tjekkes, om kvoten overskrides

1. Åbn AdGuard Mini-appen.
2. Gå til _Indstillinger_ → _Safari-udvidelser_.
3. Nedenfor hver udvidelse fremgår de aktiverede filtre og antallet af aktive regler.
   ![Fanen Udvidelser](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Er mere end 150.000 regler aktiveret i en indholdsblocker, skal nogle af dens filtre eller brugerregler muligvis deaktiveres. Gå til _Filtre_, vælg den problematiske kategori og deaktivér de filtre eller brugerregler, som ikke behøves.
