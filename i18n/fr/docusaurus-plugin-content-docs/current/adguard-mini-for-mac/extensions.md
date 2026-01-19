---
title: Extensions Safari
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Qu’est-ce qu’une extension Safari

Les extensions Safari sont de petits logiciels qui ajoutent des fonctionnalités au navigateur web Safari. Ils permettent aux utilisateurs de personnaliser et d'améliorer leur expérience de navigation en ajoutant des fonctionnalités qui ne sont pas nativement intégrées au navigateur. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Comment ça marche

Pour bloquer les publicités, les traqueurs et les nuisances sur les sites web, AdGuard utilise des règles de filtrage. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard Général
- AdGuard Confidentialité
- AdGuard Social
- AdGuard Sécurité
- AdGuard Personnalisé
- AdGuard Autres

Chaque extension de blocage de contenu peut inclure jusqu'à 150 000 règles de filtrage actives. Le nombre de règles au sein de la plupart des groupes de filtres ne dépasse pas 150 000. Toutefois, si vous activez trop de filtres spécifiques à une langue ou de filtres personnalisés, vous risquez de dépasser la limite. Dans de tels cas, les règles aléatoires dépassant la limite seront automatiquement désactivées, ce qui peut entraîner un blocage incorrect. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Plus d’informations sur chaque extension ci-dessous.

## Extensions de blocage de contenu

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Cette extension se concentre sur le blocage complet des publicités et inclut des filtres pour les publicités dans des langues spécifiques.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Il bloque les mécanismes de suivi et garantit que votre activité de navigation reste privée.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Cette extension identifie et bloque les éléments potentiellement dangereux, en protégeant les utilisateurs de tout contenu malveillant.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard pour Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Comment gérer les extensions Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Pourquoi AdGuard pour Safari nécessite une autorisation

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- L'accès à l'historique de navigation est nécessaire pour vérifier l'état de protection des sites web et déterminer les règles avancées à appliquer

Nous n'utilisons pas ces données à d'autres fins et ne les partageons avec personne. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
