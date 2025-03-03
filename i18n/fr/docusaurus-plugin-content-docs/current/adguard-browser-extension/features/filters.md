---
title: Filtres
sidebar_position: 2
---

:::info

Cet article concerne l'extension de navigateur AdGuard, qui protège uniquement votre navigateur. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Bloquer les publicités est la fonctionnalité clé de tout bloqueur de publicités, et l'Extension de navigateur AdGuard ne fait pas exception. Le blocage des publicités est basé sur des filtres — des ensembles de règles écrites dans un langage spécial. Ces règles indiquent quels éléments doivent être bloqués et ceux qui ne doivent pas l'être. AdGuard interprète les règles et modifie les requêtes web en fonction de celles-ci. En conséquence, vous cessez de voir des publicités sur vos pages web.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tous les filtres sont regroupés en fonction de leur rôle. Par exemple, il existe des catégories pour les filtres de blocage de publicités, les filtres de protection de la vie privée, les filtres liés aux médias sociaux, etc. Vous pouvez activer soit des filtres individuels, soit l'ensemble du groupe à la fois.

![Filtres anti-publicitaires \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtres personnalisés

Alors que les fonctionnalités des autres groupes de filtres sont plus ou moins explicites, il y existe un groupe appelé _Personnalisés_ qui peut soulever des questions supplémentaires.

![Filtres personnalisés \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Dans cet onglet, vous pouvez ajouter des filtres qui ne sont pas présents par défaut dans l'extension. Il existe de nombreux [filtres disponibles publiquement sur Internet](https://filterlists.com). De plus, vous pouvez créer et ajouter vos propres filtres. En fait, vous pouvez construire n'importe quel ensemble de filtres et personnaliser le blocage des publicités selon vos préférences.

Pour ajouter un filtre, cliquez simplement sur _Ajouter un filtre personnalisé_, saisissez l'URL ou le chemin du fichier du filtre que vous souhaitez ajouter, puis cliquez sur _Suivant_.

![Ajouter un filtre personnalisé \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## Règles utilisateur {#user-rules}

Les _règles utilisateur_ sont un autre outil qui vous aide à personnaliser le blocage des publicités.

![Règles utilisateur \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Il existe plusieurs façons d'ajouter de nouvelles règles. Le plus simple est de taper une règle, mais cela nécessite une certaine connaissance de la [syntaxe des règles](/general/ad-filtering/create-own-filters).

Vous pouvez également importer une liste de filtres prête à l'emploi à partir d'un fichier texte. **Assurez-vous que les règles différentes sont séparées par des sauts de ligne.** Notez que l'importation d'une liste de filtres prête à l'emploi est mieux effectuée dans l'onglet Filtres personnalisés.

De plus, vous pouvez exporter vos propres règles de filtrage. Cette option est utile pour transférer votre liste de règles entre navigateurs ou appareils.

Lorsque vous ajoutez un site à la liste autorisée (plus d'informations à ce sujet ci-dessous) ou utilisez l'outil Assistant pour masquer un élément sur la page, une règle correspondante est également enregistrée dans _Règles utilisateur_.

## Liste d’autorisation

La _liste d'autorisation_ est utilisée pour exclure certains sites web du filtrage. Les règles de blocage ne s'appliquent pas aux sites web figurant sur la liste.

![Liste autorisée \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

La _liste d'autorisation_ peut également être inversée : vous pouvez débloquer les publicités partout, sauf sur les sites ajoutés à cette liste. Pour faire ça, activez l'option _Inverser la liste blanche_.

![Inverser la liste autorisée \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Vous pouvez également importer et exporter des listes d'autorisation existantes. C'est utile, par exemple, si vous souhaitez appliquer les mêmes règles d'autorisation dans chacun de vos navigateurs.
