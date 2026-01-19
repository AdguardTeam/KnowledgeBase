---
title: Limitele regulilor
sidebar_position: 1
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari content blocker rule limit

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. În prezent, un maxim de 150.000 de reguli sunt permise pentru fiecare extensie de blocare a conținutului.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard General
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Altele
- AdGuard Custom

Acest lucru face un total de 900.000 de reguli de filtrare.

However, **one extension can contain only up to 150,000 rules**. Dacă depășești această limită, unele dintre reguli nu vor fi aplicate. Aceasta poate duce la blocări incorecte.

## Cum să verifici dacă depășești limita regulilor

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Dacă mai mult de 150.000 de reguli sunt activate într-un blocant de conținut, poate fi necesar să dezactivezi unele filtre sau reguli utilizator din acesta. Mergi la _Filtre_, selectează categoria problematică și dezactivează filtrele sau regulile utilizator de care nu ai nevoie.
