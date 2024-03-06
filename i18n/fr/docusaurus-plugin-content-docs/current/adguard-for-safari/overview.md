---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

:::info

Cet article concerne AdGuard pour Safari, qui protège uniquement votre navigateur Safari. Pour protéger l'intégralité de votre appareil, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pour Safari a été conçu pour se conformer aux restrictions d'Apple concernant les extensions de navigateur bloquant les publicités, c'est aussi le bloqueur de publicités le plus populaire pour Safari. Bien qu'elle ne soit pas comparable à nos applications de blocage des publicités sur ordinateur, elle est gratuite et peut vous protéger contre les publicités, les traqueurs, l'hameçonnage et les sites web malveillants.

## Général {#general}

![Onglet Général](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

Le premier onglet est l'écran Général où vous pouvez configurer des éléments de base tels que les notifications, les intervalles de mise à jour et le lancement d'AdGuard au démarrage du système. Vous pouvez également choisir d'afficher l'icône AdGuard dans la barre de menu. Vous pouvez également activer les [bloqueurs de contenu](#contentblockers) pour bloquer les publicités, les traqueurs, les nuisances, etc.

## Filtres {#filters}

![Onglet Filtres](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

Un filtre est une liste de règles écrites dans une syntaxe particulière. En suivant ces règles, les bloqueurs de contenu peuvent filtrer le trafic web : ils bloquent les publicités ou les requêtes vers des sites web malveillants.

Les filtres sont regroupés en huit catégories thématiques : *Blocage des publicités, Confidentialité, Widgets sociaux, Nuisances, Sécurité, Filtres spécifiques à une langue, Personnalisés et Autres filtres*.

Apprenez plus sur [les filtres AdGuard](/general/ad-filtering/adguard-filters) ou [le filtrage des publicités en général](/general/ad-filtering/how-ad-blocking-works).

Dans l'onglet Filtres, vous pouvez activer la catégorie entière ou des filtres séparés. Les modifications apportées à l'onglet Filtres sont reflétées dans la section Bloqueurs de contenu (située dans l'onglet Général).

## Bloqueurs de contenu {#contentblockers}

![Onglet Bloqueurs de contenu](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

Un bloqueur de contenu est un groupe thématique de filtres. Les filtres liés à la confidentialité sont inclus dans le bloqueur de contenu avec le nom correspondant — *AdGuard Confidentialité*.

Les bloqueurs de contenu ont été conçus pour deux raisons : structurer les filtres et se conformer aux restrictions d'Apple.

[En 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple a imposé des limites aux bloqueurs de publicités pour Safari, leur permettant d'utiliser seulement 50 000 règles de filtrage simultanément. Comme ce nombre n'était pas suffisant pour qu'un bloqueur de publicités fournisse une bonne qualité de filtrage (le Filtre de Base AdGuard possède à lui seul 30 000 règles de filtrage), nous avons divisé AdGuard pour Safari en six bloqueurs de contenu contenant chacun jusqu'à 50 000 règles.

[En 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple a augmenté la limite des règles de filtrage pour chaque bloqueur de contenu à 150 000 règles appliquées simultanément. En ce qui concerne AdGuard pour Safari, jusqu'à 900 000 règles peuvent être activées pour les six bloqueurs de contenu.

Même si la limite a été augmentée, la structure des bloqueurs de contenu est restée la même.

Dans l'onglet Bloqueurs de contenu, vous pouvez voir quels bloqueurs de contenu sont activés, combien de règles chacun d'eux utilise et quels filtres fonctionnent.

:::tip

Vous pouvez gérer les filtres activés dans l'onglet Filtres. Dans la section Bloqueurs de contenu, vous ne pouvez voir que la liste des filtres déjà activés.

:::

### AdGuard Général {#adguard_general}

*AdGuard Général* est un bloqueur de contenu qui combine les filtres les plus essentiels pour bloquer les publicités. Nous vous recommandons de garder le filtre de base AdGuard toujours activé.

### AdGuard Confidentialité {#adguard_privacy}

Ce bloqueur de contenu est le principal outil de lutte contre les compteurs et autres outils d'analyse du web. Le *Filtre anti-suivi AdGuard* est activé par défaut.

### AdGuard Social {#adguard_social}

*AdGuard Social* contient des filtres contre les boutons, widgets, scripts et icônes des réseaux sociaux. D'autres filtres de nuisances peuvent également être trouvés dans cette section : les filtres contre les pop-ups, les bannières d'applications mobiles, les notifications de cookies, etc. Pour les activer, recherchez *Widgets sociaux* dans l’onglet Filtres.

### AdGuard Sécurité {#adguard_security}

Ce bloqueur de contenu regroupe plusieurs filtres liés à la sécurité. La liste *Malware Domains Blocklist* bloque les domaines réputés pour la diffusion de logiciels malveillants et de logiciels espions. *Spam404* vous protège des fraudeurs sur Internet. La liste *NoCoin Filter List* perturbe les cryptomineurs basés sur un navigateur, tels que Coinhive.

### AdGuard Autres {#adguard_other}

*AdGuard Autres* contient des filtres avec des fonctions différentes. Par exemple, il dispose d'un filtre qui débloque les annonces de recherche et les annonces d'autopromotion. Dans certains cas, ça permet de trouver exactement ce que vous cherchez, car ces types de publicités sont plus pertinentes et moins intrusives que d’autres.

:::note Avis de non-responsabilité

Nous n'avons pas d'« annonces acceptables » payées par les annonceurs. Au lieu de cela, nous offrons aux utilisateurs la possibilité de voir [les annonces de recherche et l'auto-promotion des sites web](/general/ad-filtering/search-ads).

:::

### AdGuard Personnalisé {#adguard_custom}

![Onglet personnalisé](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

Si vous avez besoin de plus de filtres, vous pouvez les ajouter à *AdGuard Personnalisé*. Pour ajouter un filtre personnalisé, saisissez une URL ou un chemin de fichier local dans le champ approprié. Vous pouvez trouver de nouveaux filtres sur [filterlists.com](https://filterlists.com/).

## Règles utilisateur {#userrules}

Les règles utilisateur peuvent être utilisées pour personnaliser le blocage des publicités. Elles peuvent être ajoutées manuellement, importées ou créées automatiquement lorsque vous bloquez un élément sur la page. Pour ajouter vos propres règles de filtrage, utilisez une [syntaxe spéciale](/general/ad-filtering/create-own-filters).

## À propos {#about}

![Onglet À propos](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

Dans l'onglet À propos, vous pouvez voir des informations sur la version actuelle de votre produit et des liens vers des documents juridiques. Il y a également un lien vers notre dépôt sur GitHub. Vous pouvez y suivre le développement du produit, créer des demandes de fonctionnalités et signaler des bogues.

:::note Rappel

AdGuard pour Safari peut être téléchargé gratuitement [depuis l'App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). Une instruction de configuration détaillée est disponible dans la [Base de connaissances](../installation).

:::
