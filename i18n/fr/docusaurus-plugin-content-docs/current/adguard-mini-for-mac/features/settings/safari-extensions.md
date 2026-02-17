---
title: Extensions Safari
sidebar_position: 3
---

![Onglet extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Les extensions Safari sont des mécanismes qui autorisent la mise en œuvre de bloqueurs de contenu — des groupes thématiques de filtres. Par exemple, les filtres liés à la confidentialité sont inclus dans le bloqueur de contenu sous le nom correspondant — _AdGuard Confidentialité_.

Les bloqueurs de contenu ont été conçus pour deux raisons : pour structurer les filtres et se conformer aux restrictions d'Apple.

[En 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple a imposé des limites aux bloqueurs de publicités pour Safari, leur permettant d'utiliser simultanément seulement 50 000 règles de filtrage. Comme ce nombre n'était pas suffisant pour qu'un bloqueur de publicité fournisse une bonne qualité de filtrage (_Filtre de Base AdGuard_ possède à lui seul 30 000 règles de filtrage), nous avons divisé AdGuard pour Safari en six bloqueurs de contenu contenant chacun jusqu'à 50 000 règles.

[En 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple a augmenté la limite des règles de filtrage pour chaque bloqueur de contenu à 150 000 règles appliquées simultanément. En ce qui concerne AdGuard Mini pour Mac, jusqu'à 900 000 règles peuvent être activées pour les six bloqueurs de contenu.

Même si la limite a été augmentée, la structure des bloqueurs de contenu est restée la même.

Dans les _extensions Safari_, vous pouvez voir quels bloqueurs de contenu sont activés, combien de règles chacun d'eux utilise et quels filtres sont fonctionnels.

:::tip

Vous pouvez gérer les filtres activés dans _Paramètres_ → _Filtres_. Dans les _extensions Safari_, vous ne pouvez voir que la liste des filtres activés et le nombre de règles activées.

:::

## La liste des extensions Safari d'AdGuard Mini

### AdGuard Général

_AdGuard Général_ est un bloqueur de contenu qui combine les filtres les plus essentiels pour bloquer les publicités. Nous vous recommandons de garder le _Filtre de Base AdGuard_ toujours activé.

### AdGuard Confidentialité

Ce bloqueur de contenu est le principal outil de lutte contre les compteurs et autres outils d'analyse du web. Le _Filtre anti-suivi AdGuard_ est activé par défaut.

### AdGuard Social

_AdGuard Social_ contient des filtres contre les boutons, widgets, scripts et icônes des réseaux sociaux. D'autres filtres de nuisances peuvent également être trouvés dans cette section : les filtres contre les pop-ups, les bannières, les notifications de cookies, etc. Pour les activer, recherchez _Widgets sociaux_ dans _Paramètres_ → _Filtres_.

### AdGuard Sécurité

Ce bloqueur de contenu regroupe plusieurs filtres liés à la sécurité. La liste _Malware Domains Blocklist_ bloque les domaines réputés pour la diffusion de logiciels malveillants et de logiciels espions. _Spam404_ vous protège des fraudeurs sur Internet. La liste _NoCoin Filter List_ perturbe les cryptomineurs basés sur un navigateur, tels que Coinhive.

### AdGuard Autres

_AdGuard Autres_ contient des filtres avec des fonctions différentes. Par exemple, il dispose d'un filtre qui débloque les annonces de recherche et les annonces d'autopromotion. Dans certains cas, ça permet de trouver exactement ce que vous cherchez, car ces types de publicités sont plus pertinentes et moins intrusives que d’autres.

:::note Clause de non-responsabilité

Nous n'avons pas de ”publicités acceptables” payées par les annonceurs. Au lieu de cela, nous offrons aux utilisateurs la possibilité de voir [les annonces de recherche et l’autopromotion des sites Web](/general/ad-filtering/search-ads).

:::

### AdGuard Personnalisé

![Créer un filtre personnalisé](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

Si vous avez besoin de plus de filtres, vous pouvez les ajouter à l’extension _AdGuard personnalisé_.

Pour ajouter un filtre personnalisé, allez dans _Paramètres_ → _Filtres_ → _Filtres personnalisés_ et saisissez une URL ou un chemin de fichier local dans le champ approprié. Vous pouvez trouver de nouveaux filtres sur [filterlists.com](https://filterlists.com/).
