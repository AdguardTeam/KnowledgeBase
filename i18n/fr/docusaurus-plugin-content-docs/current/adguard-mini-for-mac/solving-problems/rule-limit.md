---
title: Problèmes de limites de règles
sidebar_position: 1
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Limite des règles du bloqueur de contenu en Safari

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Actuellement, un maximum de 150 000 règles est autorisé pour chaque extension de blocage de contenu.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard Général
- AdGuard Confidentialité
- AdGuard Social
- AdGuard Sécurité
- AdGuard Autres
- AdGuard Personnalisé

Cela fait un total de 900 000 règles de filtrage.

However, **one extension can contain only up to 150,000 rules**. Si vous dépassez cette limite, certaines règles ne seront pas appliquées. Cela peut conduire à un blocage incorrect.

## Comment vérifier si vous dépassez la limite des règles

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Si plus de 150 000 règles sont activées dans un bloqueur de contenu, vous devriez possiblement désactiver certains filtres ou règles utilisateur. Accédez à _Filtres_, sélectionnez la catégorie problématique et désactivez les filtres ou les règles utilisateur dont vous n'avez pas besoin.
