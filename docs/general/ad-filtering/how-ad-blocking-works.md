---
title: Comment fonctionne le blocage des publicités
sidebar_position: 1
---

AdGuard propose de nombreux produits de blocage des publicités pour différentes plateformes, chacun avec ses propres caractéristiques. Mais ce qui les unit tous, c'est qu'ils bloquent les publicités et les traqueurs. Cet article décrit le fonctionnement du blocage des publicités en détail.

:::remarque

Nous ne traitons pas ici du filtrage DNS. Il s'agit d'une autre manière de bloquer les publicités, avec ses propres avantages et inconvénients. Suivez ce lien pour [en savoir plus sur le filtrage DNS](https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work).

:::

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Principe général

Les listes de filtres, également appelées filtres, sont au cœur de tout bloqueur de publicités. Les filtres sont littéralement des listes de règles écrites dans une syntaxe spéciale. Les bloqueurs de publicité peuvent comprendre cette syntaxe complexe. Ils interprètent les règles de filtrage et agissent sur le trafic web en fonction de ce que les règles leur indiquent de faire : bloquer des éléments spécifiques, modifier les pages web d'une certaine manière, etc.

![Comment fonctionne le blocage des publicités](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

## Listes de filtres

Pour mieux comprendre le blocage des publicités, il est important de connaître les principes sous-jacents du fonctionnement des filtres.

Les règles de filtrage qui composent les filtres ne sont pas créées automatiquement. Elles sont développées par les personnes qui maintiennent les filtres, y compris des professionnels et des bénévoles, qui utilisent les consoles de développement des navigateurs et d'autres outils (tels que le journal de filtrage d'AdGuard) pour déterminer les règles qui bloqueront une publicité ou un traqueur particulier. Cette description du processus est très simpliste : certaines publicités sont particulièrement difficiles à bloquer et nécessitent plusieurs règles, plusieurs itérations et l'utilisation d'une syntaxe complexe.

Et même lorsqu'une règle est finalement ajoutée à un filtre, cela ne signifie pas qu'elle y reste pour toujours. Les publicités sont en constante évolution, les moyens de diffuser les mêmes publicités sur les mêmes sites web évoluent, et les règles de filtrage doivent elles aussi être adaptées. Parfois, les règles deviennent obsolètes, une nouvelle publicité apparaît ou une nouvelle règle de filtrage est nécessaire pour bloquer la même publicité. Les filtres sont souvent gérés par une seule personne, mais même pour une équipe de responsables, il est impossible de surveiller en permanence l'ensemble du web. C'est pourquoi de nombreux bloqueurs de publicités disposent d'outils permettant aux utilisateurs de signaler facilement tout problème lié au filtre qu'ils rencontrent.

![Schéma de révision des filtres](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png)

Les utilisateurs d'AdGuard [ont accès à un outil spécial de signalement sur le web] (https://reports.adguard.com/new_issue.html). Grâce aux plaintes des utilisateurs, les développeurs de filtres peuvent se concentrer sur la correction de leurs listes de filtres et non sur la recherche sur Internet de nouvelles et d'anciennes publicités non bloquées.

Les filtres ne se contentent pas de bloquer les publicités. Il existe des filtres qui bloquent le suivi, les widgets de médias sociaux et les désagréments, tels que les notifications de cookies. Chaque utilisateur peut choisir différentes combinaisons de filtres en fonction de ses préférences personnelles. Il existe des sites web tels que [filterlists.com] (https://filterlists.com/) qui sont consacrés aux listes de filtres et qui disposent d'énormes bases de données.

Nous développons et maintenons [notre propre ensemble de listes de filtres](../adguard-filters) qui peuvent être utilisées avec AdGuard ou d'autres bloqueurs de publicité.

## Types de règles de filtrage

Il existe de nombreux types de règles de filtrage qui répondent à des objectifs différents. En fonction du bloqueur de publicités que vous utilisez, et surtout de votre système d'exploitation, certains types de règles peuvent ne pas être pris en charge.

### Règles de filtrage de base

Pour être affichée sur une page web ou dans une application, la publicité doit d'abord être chargée à partir d'un serveur. Pour ce faire, le navigateur ou l'application doit envoyer une requête web. La façon la plus simple d'empêcher une publicité d'apparaître sur votre écran est de bloquer cette requête afin qu'elle n'atteigne jamais le serveur et qu'il n'y ait donc pas de réponse.

En principe, tous les produits AdGuard Bloqueurs de publicités peuvent bloquer les requêtes Web conformément aux règles du filtre actif. Cette méthode est très efficace pour bloquer la publicité, mais elle présente quelques inconvénients. Le plus évident est que la place occupée par une publicité sera laissée vide ou occupée par un reste de publicité.

### Règles de filtrage cosmétique

Chaque page web possède un modèle d'objet de document (DOM), un document HTML contenant la structure et les éléments de cette page. Les publicités étant également des éléments de la page, elles sont enregistrées dans le DOM. Les bloqueurs de publicité peuvent supprimer des parties du DOM, tandis que les règles de filtrage les aident à comprendre quelles parties sont des publicités et doivent être supprimées, et quelles parties doivent être laissées intactes.

Cette méthode vous permet d'éviter les espaces vides et les restes de publicité mentionnés ci-dessus, ainsi que d'effectuer d'autres tâches plus complexes.

### Règles de filtrage HTML

Dans la plupart des cas, il suffit d'utiliser les règles de base et les règles cosmétiques mentionnées ci-dessus pour filtrer les publicités. Mais lorsqu'il est nécessaire de modifier le code HTML de la page elle-même avant qu'elle ne soit chargée, vous avez besoin de règles de filtrage pour le contenu HTML. Ces règles vous permettent de spécifier les éléments HTML à supprimer avant même que le navigateur ne charge la page.

Ces règles sont assez compliquées et exigent que le bloqueur de publicité se voie accorder certains droits d'accès, de sorte que toutes les plateformes ne les prennent pas en charge. Actuellement, ces règles ne fonctionnent que dans le module complémentaire AdGuard Firefox et dans les applications AdGuard pour Windows, Mac et Android.

:::info

Il existe d'autres types de règles de filtrage, mais leur fonctionnement nécessite des connaissances techniques plus poussées. Si vous êtes intéressé, [consultez notre guide complet sur les règles de filtrage dans l'article lié](../create-own-filters).

:::

## Types de traitement des demandes dans AdGuard

AdGuard traite les demandes en fonction des filtres, des règles d'utilisation et des paramètres activés par l'utilisateur. Par conséquent, une demande peut être bloquée, modifiée, autorisée ou, si rien n'est fait, simplement traitée.

Des informations détaillées sur la façon dont chacune de vos demandes a été traitée par AdGuard peuvent être trouvées dans le *Journal de filtrage* (AdGuard pour Windows, AdGuard pour Mac, AdGuard Browser Extension) ou *Activité récente* (AdGuard pour iOS, AdGuard pour Android).

En ce qui concerne les filtres AdGuard, vous pouvez également consulter [notre politique de filtrage](../filter-policy), qui décrit en détail ce que chacun de nos filtres bloque et pourquoi.

### Exemples de requêtes bloquées

Le filtre DNS AdGuard bloque les requêtes vers les domaines publicitaires, tels que `ad.doubleclick.net`.

Le filtre AdGuard Tracking Protection bloque les requêtes de suivi, telles que `youtube.com/youtubei/log_event?`.

### Exemples de requêtes autorisées

Le filtre AdGuard Base autorise les requêtes non publicitaires, telles que `www.google.com/complete/search?q=`.

Le filtre débloquant les annonces de recherche et l'autopromotion autorise les requêtes vers des domaines liés aux annonces de recherche, tels que `www.google.com/aclk?`.

Les requêtes vers des sites Web ajoutés par l'utilisateur à *Allowlist* sont autorisées.

### Exemples de demandes modifiées

La fonction de protection contre le suivi, dont le niveau de protection est défini sur *High*, active le filtre AdGuard URL Tracking qui modifie les demandes en supprimant les paramètres de suivi :

`https://www.rentio.jp/products/ax-n1b?click_from=top_newitems` → `https://www.rentio.jp/products/ax-n1b`

`https://www.baseballchannel.jp/npb/183688/?ref=ise` → `https://www.baseballchannel.jp/npb/183688/`

`https://www.gog.com/game/spec_ops_the_line?pp=2863d7ae605104eeef364e3f164d3404e20f680c&gad_source=1` →
`https://www.gog.com/game/spec_ops_the_line`

Veuillez noter que les événements *modifiés* que vous voyez dans le journal de filtrage ou l'activité récente ne se réfèrent pas seulement aux cas où une requête est modifiée, mais aussi lorsque :

- un élément de la page est modifié (généralement par des règles esthétiques)
- la réponse est modifiée
- 
