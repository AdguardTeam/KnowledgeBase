---
title: Problemi di limite delle regole
sidebar_position: 1
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Limite delle regole di blocco dei contenuti di Safari

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Attualmente è consentito un massimo di 150.000 regole per ciascuna estensione di blocco dei contenuti.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard Generale
- AdGuard Privacy
- AdGuard Social
- AdGuard Sicurezza
- AdGuard Altri
- AdGuard Personalizzati

Ciò equivale a un totale di 900.000 regole di filtraggio.

However, **one extension can contain only up to 150,000 rules**. Se superi questo limite, alcune regole non verranno applicate. Ciò potrebbe portare a un blocco errato.

## Come verificare se stai superando il limite della regola

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Se in un blocco dei contenuti sono abilitate più di 150.000 regole, potrebbe essere necessario disabilitarne alcuni filtri o regole utente. Vai su _Filtri_, seleziona la categoria problematica e disabilita i filtri o le regole utente che non ti servono.
