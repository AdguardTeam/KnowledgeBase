---
title: Filtres
sidebar_position: 2
---

:::info

Cet article concerne l'extension de navigateur AdGuard, qui protège uniquement votre navigateur. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. En conséquence, vous cessez de voir des publicités sur vos pages web.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tous les filtres sont regroupés en fonction de leur rôle. Par exemple, il existe des catégories pour les filtres de blocage de publicités, les filtres de protection de la vie privée, les filtres liés aux médias sociaux, etc. Vous pouvez activer soit des filtres individuels, soit l'ensemble du groupe à la fois.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtres personnalisés

While the features of other filter groups are more or less predictable, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Dans cet onglet, vous pouvez ajouter des filtres qui ne sont pas présents par défaut dans l'extension. There are plenty of [publicly available filters on the Internet](https://filterlists.com). De plus, vous pouvez créer et ajouter vos propres filtres. En fait, vous pouvez construire n'importe quel ensemble de filtres et personnaliser le blocage des publicités selon vos préférences.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Il existe plusieurs façons d'ajouter de nouvelles règles. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Vous pouvez également importer une liste de filtres prête à l'emploi à partir d'un fichier texte. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

De plus, vous pouvez exporter vos propres règles de filtrage. Cette option est utile pour transférer votre liste de règles entre navigateurs ou appareils.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## Liste d’autorisation

The _allowlist_ is used to exclude certain websites from filtering. Les règles de blocage ne s'appliquent pas aux sites web figurant sur la liste.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Vous pouvez également importer et exporter des listes d'autorisation existantes. C'est utile, par exemple, si vous souhaitez appliquer les mêmes règles d'autorisation dans chacun de vos navigateurs.
