---
title: Problèmes de limites de règles
sidebar_position: 1
---

:::info

Cet article concerne AdGuard pour Safari, qui protège uniquement votre navigateur Safari. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limite des règles du bloqueur de contenu en Safari

AdGuard pour Safari utilise l'API de blocage de contenu pour appliquer les règles de filtrage aux pages du navigateur Safari. Actuellement, un maximum de 150 000 règles est autorisé pour chaque extension de blocage de contenu.

AdGuard pour Safari dispose de 6 bloqueurs de contenu :

- AdGuard Général
- AdGuard Confidentialité
- AdGuard Social
- AdGuard Sécurité
- AdGuard Autres
- AdGuard Personnalisé

Cela fait un total de 900 000 règles de filtrage.

Cependant, **une extension peut contenir jusqu'à 150 000 règles**. Si vous dépassez cette limite, certaines règles ne seront pas appliquées. Cela peut conduire à un blocage incorrect.

## Comment vérifier si vous dépassez la limite des règles

1. Ouvrez l'application AdGuard pour Safari.
2. Faites défiler vers le bas et cliquez sur _Bloqueurs de contenu_.
3. Sous chaque bloqueur de contenu, vous pouvez voir les filtres activés et le nombre de règles actives.
 ![Bloqueurs de contenu](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

Si plus de 150 000 règles sont activées dans un bloqueur de contenu, vous devriez possiblement désactiver certains filtres ou règles utilisateur. Accédez à _Filtres_, sélectionnez la catégorie problématique et désactivez les filtres ou les règles utilisateur dont vous n'avez pas besoin.
