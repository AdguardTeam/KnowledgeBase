---
title: Extensions Safari
sidebar_position: 3
---

:::info

Cet article concerne AdGuard Mini pour Mac, qui protège uniquement votre navigateur Safari. Pour protéger l'ensemble de votre Mac, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Qu’est-ce qu’une extension Safari

Les extensions Safari sont de petits logiciels qui ajoutent des fonctionnalités au navigateur web Safari. Ils permettent aux utilisateurs de personnaliser et d'améliorer leur expérience de navigation en ajoutant des fonctionnalités qui ne sont pas nativement intégrées au navigateur. AdGuard Mini pour Mac utilise principalement des extensions pour appliquer des règles de filtrage sur les sites Web ouverts dans Safari.

## Comment ça marche

Pour bloquer les publicités, les traqueurs et les nuisances sur les sites web, AdGuard utilise des règles de filtrage. Les règles d’AdGuard et vos filtres personnalisés sont convertis en des filtres compréhensibles par Safari et intégrés dans 6 extensions Safari :

- AdGuard Général
- AdGuard Confidentialité
- AdGuard Social
- AdGuard Sécurité
- AdGuard Personnalisé
- AdGuard Autres

Chaque extension de blocage de contenu peut inclure jusqu'à 150 000 règles de filtrage actives. Le nombre de règles au sein de la plupart des groupes de filtres ne dépasse pas 150 000. Toutefois, si vous activez trop de filtres spécifiques à une langue ou de filtres personnalisés, vous risquez de dépasser la limite. Dans de tels cas, les règles aléatoires dépassant la limite seront automatiquement désactivées, ce qui peut entraîner un blocage incorrect. **Nous vous recommandons fortement d'activer uniquement les filtres dont vous avez besoin**.

Il existe également une extension supplémentaire responsable d'autres fonctionnalités : _AdGuard pour Safari_, qui ajoute l'icône AdGuard à côté de la barre de recherche dans Safari et permet d'utiliser des règles avancées pour bloquer les publicités complexes.

![Extensions Safari](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Plus d’informations sur chaque extension ci-dessous.

## Extensions de blocage de contenu

_AdGuard Général_ applique les règles des filtres que vous pouvez trouver dans _Paramètres_ → _Filtres_ → _Blocage des publicités_ et _Spécifiques à la langue_. Cette extension se concentre sur le blocage complet des publicités et inclut des filtres pour les publicités dans des langues spécifiques.

_AdGuard Confidentialité_ applique les règles des filtres situés dans _Filtres_ → _Confidentialité_. Il bloque les mécanismes de suivi et garantit que votre activité de navigation reste privée.

_AdGuard Social_ applique les règles des filtres qui se trouvent dans _Filtres_ → _Widgets Sociaux_ et _Filtres_ → _Nuisances_. Il bloque les popups, les boutons de réseaux sociaux, les fenêtres d'assistant en ligne et d'autres éléments sur les pages web que vous pourriez trouver agaçants.

_AdGuard Sécurité_ applique les règles des filtres sous _Filtres_ → _Sécurité_. Cette extension identifie et bloque les éléments potentiellement dangereux, en protégeant les utilisateurs de tout contenu malveillant.

_AdGuard Autres_ applique des règles provenant de filtres qui ne relèvent pas des catégories mentionnées ci-dessus et qui sont situés dans _Filtres_ → _Autres_ : _Filtrage débloquant les publicités de recherche et l'autopromotion_, _filtre AdGuard DNS_ et _Filtre expérimental AdGuard_.

_AdGuard Personnalisé_ applique les règles des filtres que vous ajoutez vous-même à _Filtres personnalisés_.

Les règles d’utilisation et les règles d’autorisation sont incluses dans chaque extension.

## AdGuard pour Safari

_AdGuard pour Safari_ active l'icône AdGuard à côté de la barre de recherche. Cette fonction est utile si vous souhaitez configurer rapidement la protection d’un site Web spécifique ou bloquer manuellement les publicités.

_L’extension AdGuard pour Safari_ contient également des règles avancées qui ne sont pas converties au format pris en charge par Safari. Cela inclut les [règles CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), les [sélecteurs extended CSS](/general/ad-filtering/create-own-filters#extended-css-selectors), et les [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), qui autorisent AdGuard à bloquer les publicités complexes, comme celles sur YouTube.

## Comment gérer les extensions Safari

1. Ouvrez Safari et cliquez sur _Safari_ dans le coin supérieur gauche de l'écran pour agrandir le menu.

   ![Paramètres Safari \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Cliquez sur _Paramètres..._

3. Sélectionnez _Extensions_.

   ![Onglet extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Pourquoi AdGuard pour Safari nécessite une autorisation

Lors de l'activation de l'extension _AdGuard pour Safari_, vous pouvez remarquer qu'elle nécessite **l'accès au contenu des pages web** et **l'accès à l'historique de navigation**. Voici pourquoi elle a besoin de ces autorisations :

- L'accès au contenu des pages web est nécessaire pour que le blocage manuel des publicités et les règles de blocage avancées fonctionnent correctement
- L'accès à l'historique de navigation est nécessaire pour vérifier l'état de protection des sites web et déterminer les règles avancées à appliquer

Nous n'utilisons pas ces données à d'autres fins et ne les partageons avec personne. Pour plus d'informations, vous pouvez consulter notre [Politique de confidentialité](https://adguard.com/privacy.html).
