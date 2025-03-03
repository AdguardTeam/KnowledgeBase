---
title: Extensions Safari
sidebar_position: 3
---

:::info

Cet article concerne AdGuard pour Safari, qui protège uniquement votre navigateur Safari. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Qu’est-ce qu’une extension Safari

Les extensions Safari sont de petits logiciels qui ajoutent des fonctionnalités au navigateur web Safari. Ils permettent aux utilisateurs de personnaliser et d'améliorer leur expérience de navigation en ajoutant des fonctionnalités qui ne sont pas nativement intégrées au navigateur. AdGuard pour Safari utilise principalement des extensions pour appliquer des règles de filtrage sur les sites Web ouverts dans Safari.

## Comment ça marche

Pour bloquer les publicités, les traqueurs et les nuisances sur les sites web, AdGuard utilise des règles de filtrage. Les règles d'AdGuard et vos filtres personnalisés sont convertis en règles compréhensibles par Safari et sont intégrés dans 6 extensions Safari :

- AdGuard Général
- AdGuard Confidentialité
- AdGuard Social
- AdGuard Sécurité
- AdGuard Personnalisé
- AdGuard Autres

Chaque extension de blocage de contenu peut inclure jusqu'à 150 000 règles de filtrage actives. Le nombre de règles au sein de la plupart des groupes de filtres ne dépasse pas 150 000. Toutefois, si vous activez trop de filtres spécifiques à une langue ou de filtres personnalisés, vous risquez de dépasser la limite. Dans de tels cas, les règles aléatoires dépassant la limite seront automatiquement désactivées, ce qui peut entraîner un blocage incorrect. **Nous vous recommandons fortement d'activer uniquement les filtres dont vous avez besoin**.

Il existe également une extension supplémentaire responsable d'autres fonctionnalités : *AdGuard pour Safari*, qui ajoute l'icône AdGuard à côté de la barre de recherche dans Safari et permet d'utiliser des règles avancées pour bloquer les publicités complexes.

![Extensions Safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Plus d’informations sur chaque extension ci-dessous.

## Extensions de blocage de contenu

*AdGuard Général* applique les règles des filtres que vous pouvez trouver sur *Filtres* → *Blocage des publicités* et *Filtres* → *Spécifiques à la langue*. Cette extension se concentre sur le blocage complet des publicités et inclut des filtres pour les publicités dans des langues spécifiques.

*AdGuard Confidentialité* applique les règles des filtres situés dans *Filtres* → *Privacy*. Il bloque les mécanismes de suivi et garantit que votre activité de navigation reste privée.

*AdGuard Social* applique les règles des filtres qui se trouvent dans *Filtres* → *Widgets Sociaux* et *Filtres* → *Nuisances*. Il bloque les fenêtres contextuelles, les boutons de réseaux sociaux, les fenêtres de l'assistant en ligne et d'autres éléments des pages web que vous pourriez trouver agaçants.

*AdGuard Sécurité* applique les règles des filtres sous *Filtres* → *Sécurité*. Cette extension identifie et bloque les éléments potentiellement dangereux, en protégeant les utilisateurs de tout contenu malveillant.

*AdGuard Autres* applique des règles à partir de filtres qui n’entrent pas dans les catégories mentionnées ci-dessus et qui sont situés dans *Filtres* → *Autres*: *Filtrage des annonces de recherche et autopromotion débloquées*, *Filtre DNS AdGuard* et *Filtre expérimental AdGuard*.

*AdGuard Personnalisé* applique les règles des filtres que vous ajoutez vous-même à *Filtres personnalisés*.

Les règles d'utilisation et les règles d'autorisation sont incluses dans chaque extension.

## AdGuard pour Safari

*AdGuard pour Safari* active l'icône AdGuard à côté de la barre de recherche. Cette fonction est utile si vous souhaitez configurer rapidement la protection d'un site web spécifique ou bloquer les publicités manuellement. Vous y trouverez également des règles avancées qui ne sont pas converties au format pris en charge par Safari. Il s'agit notamment des [règles CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), des [sélecteurs de CSS étendu](/general/ad-filtering/create-own-filters#extended-css-selectors) et des [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), qui permettent à AdGuard de bloquer des publicités complexes, comme celles diffusées sur YouTube.

## Comment gérer les extensions Safari

1. Ouvrez Safari et cliquez sur *Safari* dans le coin supérieur gauche de l'écran pour développer le menu.

    ![Paramètres Safari *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

1. Cliquez sur *Paramètres...*

1. Sélectionnez *Extensions*.

    ![Onglet Extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Pourquoi AdGuard pour Safari nécessite une autorisation

Lorsque vous activez l'extension *AdGuard pour Safari* , vous pouvez remarquer qu'elle nécessite **l'accès au contenu des pages web** et **l'accès à l'historique de navigation**. Voici pourquoi elle a besoin de ces autorisations :

- L'accès au contenu des pages web est nécessaire pour que le blocage manuel des publicités et les règles de blocage avancées fonctionnent correctement
- L'accès à l'historique de navigation est nécessaire pour vérifier l'état de protection des sites web et déterminer les règles avancées à appliquer

Nous n'utilisons pas ces données à d'autres fins et ne les partageons avec personne. Pour plus d'informations, vous pouvez consulter notre [Politique de confidentialité](https://adguard.com/privacy.html).
