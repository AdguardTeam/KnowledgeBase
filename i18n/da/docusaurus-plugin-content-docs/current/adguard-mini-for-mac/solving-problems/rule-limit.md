---
title: Regelkvoteproblemer
sidebar_position: 1
---

:::info

Denne artikel omhandler AdGuard Mini til Mac, der kun beskytter Safari-webbrowseren. For at beskytte Mac'en helt, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Regelkvote i Safari-indholdsblocker

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. P.t. tillades maks. 150.000 regler pr. indholdsblokerende udvidelse.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard Generelt
- AdGuard Fortrolighed
- AdGuard Social
- AdGuard Sikkerhed
- AdGuard Andre
- AdGuard Tilpasset

Dette muliggør i alt 900.000 filtreringsregler.

However, **one extension can contain only up to 150,000 rules**. Overskrides denne kvote, vil nogle af reglerne ikke blive anvendt. Dette kan medføre forkert blokering.

## Sådan tjekkes, om kvoten overskrides

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Fanen Udvidelser](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Er mere end 150.000 regler aktiveret i en indholdsblocker, skal nogle af dens filtre eller brugerregler muligvis deaktiveres. Gå til _Filtre_, vælg den problematiske kategori og deaktivér de filtre eller brugerregler, som ikke behøves.
