---
title: Problèmes de limites de règles
sidebar_position: 1
---

:::info

Cet article concerne AdGuard Mini pour Mac, qui protège uniquement votre navigateur Safari. Pour protéger l'ensemble de votre Mac, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limite des règles du bloqueur de contenu en Safari

AdGuard Mini pour Mac utilise l'API de blocage de contenu pour appliquer des règles de filtrage aux pages dans le navigateur Safari. Actuellement, un maximum de 150 000 règles est autorisé pour chaque extension de blocage de contenu.

AdGuard Mini pour Mac dispose de 6 bloqueurs de contenu :

- AdGuard Général
- AdGuard Confidentialité
- AdGuard Social
- AdGuard Sécurité
- AdGuard Autres
- AdGuard Personnalisé

Cela fait un total de 900 000 règles de filtrage.

Cependant, **une extension peut contenir jusqu'à 150 000 règles**. Si vous dépassez cette limite, certaines règles ne seront pas appliquées. Cela peut conduire à un blocage incorrect.

## Comment vérifier si vous dépassez la limite des règles

1. Ouvrez l'application AdGuard Mini.
2. Allez dans _Paramètres_ → _Extensions Safari_.
3. Sous chaque extension, vous pouvez voir les filtres activés et le nombre de règles actives.
   ![Onglet extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Si plus de 150 000 règles sont activées dans un bloqueur de contenu, vous devriez possiblement désactiver certains filtres ou règles utilisateur. Accédez à _Filtres_, sélectionnez la catégorie problématique et désactivez les filtres ou les règles utilisateur dont vous n'avez pas besoin.
