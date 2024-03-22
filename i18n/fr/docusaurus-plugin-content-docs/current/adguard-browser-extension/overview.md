---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

:::info

Cet article concerne l'extension de navigateur AdGuard, qui protège uniquement votre navigateur. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard propose une gamme de produits logiciels qui bloquent les publicités et les traceurs sur différentes plateformes. L'un des produits AdGuard les plus populaires est une extension gratuite qui fonctionne sur cinq navigateurs populaires : Chrome, Firefox, Edge, Opera et Yandex Browser. Browser extensions include basic ad-blocking features but cannot be compared with full-featured desktop programs, such as [AdGuard for Windows](/adguard-for-windows/features/home-screen) and [AdGuard for Mac](/adguard-for-mac/overview).

![Extension AdGuard pour Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Disponibilité {#br-extension}

[L'extension de navigateur AdGuard](https://adguard.com/adguard-browser-extension/overview.html) est disponible pour la plupart des navigateurs principaux. Vous pouvez la trouver facilement dans la boutique en ligne de votre navigateur ou sur notre site officiel.

![Disponible pour la plupart des navigateurs populaires *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

:::note

Nous avons une extension autonome pour Safari. Depuis la sortie de [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html), la plupart des extensions de blocage de publicités ont rencontré d'importants problèmes, et beaucoup d'entre elles ont cessé de fonctionner. Nous avons dû développer une [extension distincte pour Safari](/adguard-for-safari/overview) qui présente certaines différences par rapport à l'extension décrite dans cet article.

:::

**N'oubliez pas que la fonctionnalité de chaque extension est strictement limitée par les capacités du navigateur.** Donc, si vous souhaitez une protection complète, envisagez d'installer un programme autonome sur votre ordinateur. Il y a [une raison à cela](#comparison).

## Blocage des publicités {#adblocker}

Bloquer les publicités est clairement la fonctionnalité clé de tout bloqueur de publicités, et AdGuard ne fait pas exception. L'extension bloquera les publicités sur n'importe quelle page de votre navigateur. Le blocage des publicités repose sur ce qu'on appelle des listes de filtres, ou simplement des [filtres](/general/ad-filtering/how-ad-blocking-works). Les filtres peuvent être activés ou désactivés dans les paramètres de votre extension. Vous pouvez personnaliser le blocage des publicités en activant des filtres spécifiques.

### Filtres {#filters}

Essentiellement, les listes de filtres sont des ensembles de règles écrites dans un langage spécial. Votre bloqueur de publicités interprète les règles et les met en œuvre. En conséquence, vous cessez de voir des publicités sur vos pages web.

![Filtres *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tous les filtres sont regroupés en fonction de leur rôle. Par exemple, il existe des catégories pour les filtres de blocage de publicités, les filtres de protection de la vie privée, les filtres liés aux médias sociaux, etc. Vous pouvez activer soit des filtres individuels, soit l'ensemble du groupe à la fois.

![Filtres de blocage des publicités *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Filtres personnalisés {#custom}

Alors que les fonctionnalités des autres groupes de filtres sont plus ou moins prévisibles, il y a un groupe appelé *Personnalisé* qui peut soulever des questions supplémentaires.

![Filtres personnalisés *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Dans cet onglet, vous pouvez ajouter des filtres qui ne sont pas présents par défaut dans l'extension. Il existe de nombreux [filtres disponibles publiquement sur Internet](https://filterlists.com). De plus, vous pouvez créer et ajouter vos propres filtres. En fait, vous pouvez construire n'importe quel ensemble de filtres et personnaliser le blocage des publicités selon vos préférences.

Pour ajouter un filtre, cliquez simplement sur *Ajouter un filtre personnalisé*, saisissez l'URL ou le chemin du fichier du filtre que vous souhaitez ajouter, puis cliquez sur *Suivant*.

![Ajouter un filtre personnalisé *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Règles utilisateur {#user-rules}

*Les règles utilisateur* sont un autre outil qui vous aide à personnaliser le blocage des publicités.

![Règles utilisateur *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Il existe plusieurs façons d'ajouter de nouvelles règles. La méthode la plus directe est de simplement saisir une règle, mais cela nécessite une certaine connaissance de la [syntaxe des règles](/general/ad-filtering/create-own-filters).

Vous pouvez également importer une liste de filtres prête à l'emploi à partir d'un fichier texte. **Assurez-vous que les règles différentes sont séparées par des sauts de ligne.** Notez que l'importation d'une liste de filtres prête à l'emploi est mieux effectuée dans l'onglet [Filtres personnalisés](#custom).

De plus, vous pouvez exporter vos propres règles de filtrage. Cette option est utile pour transférer votre liste de règles entre navigateurs ou appareils.

Lorsque vous ajoutez un site à la liste autorisée (plus d'informations à ce sujet [ci-dessous](#allowlist)) ou utilisez l'outil Assistant pour masquer un élément sur la page, une règle correspondante est également enregistrée dans *Règles utilisateur*.

### Liste d’autorisation {#allowlist}

La *liste d'autorisation* est utilisée pour exclure certains sites web du filtrage. Les règles de blocage ne s'appliquent pas aux sites web figurant sur la liste.

![Liste d’autorisation *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

La *liste d'autorisation* peut également être inversée : vous pouvez débloquer les publicités partout, sauf sur les sites ajoutés à cette liste. Pour ce faire, activez l'option *Inverser la liste blanche*.

![Inverser la liste d’autorisation *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Vous pouvez également importer et exporter des listes d'autorisation existantes. C'est utile, par exemple, si vous souhaitez appliquer les mêmes règles d'autorisation dans chacun de vos navigateurs.

## Mode furtif {#stealth-mode}

*Le mode furtif* vise à assurer la protection des données personnelles sensibles contre les traqueurs en ligne et les fraudeurs.

![Mode furtif *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

En mode furtif, vous pouvez empêcher un site web de voir les requêtes de recherche que vous avez utilisées pour le trouver sur Internet, supprimer automatiquement les cookies tiers et les cookies propres au site, etc. Un [article séparé](/general/stealth-mode) est consacré à toutes ces fonctionnalités.

:::note

Certaines des options du *Mode furtif* disponibles dans les applications autonomes ne sont pas présentes dans les extensions de navigateur en raison de restrictions techniques.

:::

## Autres fonctionnalités et options {#other}

Outre les grands modules clés de l'extension de navigateur AdGuard, il existe plusieurs fonctionnalités plus spécifiques qui peuvent être configurées dans les onglets *Général* et *Paramètres supplémentaires* des paramètres de l'extension.

### Général {#general}

Dans l'onglet *Général*, vous pouvez autoriser les publicités de recherche et l'[autopromotion des sites web](/general/ad-filtering/search-ads), activer automatiquement les filtres spécifiques à la langue, indiquer l'intervalle de mise à jour des filtres, etc.

![Général *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

De plus, ici vous pouvez activer [*Protection contre l'hameçonnage et les logiciels malveillants*](/general/browsing-security).

Vous pouvez sauvegarder la configuration de vos paramètres en cliquant sur le bouton *Exporter les paramètres*. Les paramètres seront sauvegardés sous la forme d'un fichier .json. Pour charger la configuration de paramètres précédemment sauvegardée, utilisez la fonction *Importer les paramètres*. Vous pouvez même l'utiliser pour passer rapidement entre différents profils de paramètres ou même pour transférer des configurations de paramètres entre différents navigateurs.

### Paramètres supplémentaires {#misc}

La section *Paramètres supplémentaires* contient une gamme de paramètres variés liés au processus de blocage des publicités et à la convivialité de l'application.

![Paramètres supplémentaires *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

Depuis cet onglet, vous pouvez activer les filtres optimisés, activer les notifications concernant les mises à jour de l'extension, ouvrir le *Journal de filtrage* ou effacer les statistiques des publicités et traceurs bloqués.

De plus, vous pouvez choisir de nous aider dans le développement des filtres en envoyant les statistiques sur les règles appliquées : celles qui sont déclenchées, sur quels sites web et à quelle fréquence. Cette option est désactivée par défaut car nous ne collectons pas de données utilisateur sans consentement. Cependant, si vous l'activez, toutes les données seront strictement anonymisées.

### À propos {#about}

Dans la section *À propos*, vous pouvez trouver des informations sur la version actuelle, des liens vers l'EULA et la politique de confidentialité, ainsi que vers le référentiel de l'extension de navigateur sur GitHub.

![À propos *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Menu principal de l'extension {#main-menu}

La page principale de l'extension peut être accédée en cliquant sur l'icône de l'extension dans la barre d'outils de votre navigateur.

![Menu principal *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

Sur la page principale, vous pouvez masquer manuellement n'importe quel élément sur n'importe quelle page (une règle correspondante sera ajoutée aux *Règles utilisateur*), ouvrir le *Journal de filtrage* pour consulter des informations complètes sur le trafic de votre navigateur et bloquer les requêtes en cours, ou consulter le rapport de sécurité d'un site web. De plus, vous pouvez soumettre une plainte concernant n'importe quel site web (par exemple, s'il y a des publicités manquées sur la page, nos ingénieurs en filtrage examineront le rapport et résoudront le problème) et consulter les statistiques sur les règles de blocage appliquées.

Toutes les requêtes web effectuées par le navigateur sont affichées dans le *Journal de filtrage*, avec des informations détaillées sur chaque requête. Le *Journal de filtrage* facilite, par exemple, le suivi des requêtes bloquées par l'extension de navigateur AdGuard. De plus, il vous permet de bloquer n'importe quelle requête ou d'ajouter une requête précédemment bloquée à la liste blanche en deux clics. Le *Journal de filtrage* vous offre également une grande variété d'options pour trier les requêtes web, ce qui peut être utile lors de la création de vos propres règles de filtrage. Vous pouvez ouvrir le *Journal de filtrage* en sélectionnant l'élément correspondant dans le menu principal, ou depuis la page des paramètres (dans l'onglet "Paramètres supplémentaires").

En cliquant sur les icônes dans le coin supérieur droit du menu principal de l'extension, vous pouvez ouvrir les paramètres de l'extension ou mettre la protection en pause.

## Extension de navigateur AdGuard vs applications autonomes {#comparison}

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ZGwceZP-0mM" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Le principal avantage des programmes autonomes AdGuard par rapport aux extensions de navigateur est que les programmes peuvent bloquer les publicités dans tous les navigateurs et dans presque toutes les applications. Vous pouvez utiliser différents navigateurs en même temps, l'application filtrera les publicités et les menaces en ligne dans tous ces navigateurs de manière équivalente.

La deuxième différence est que les possibilités des bloqueurs de publicités basés sur l'extension sont strictement limitées par les directives du navigateur. Les extensions de navigateur doivent se conformer aux politiques des navigateurs, où le blocage des publicités peut être restreint. Ainsi, certains types de règles de filtrage ne sont pas pris en charge par les extensions. La fonctionnalité des applications de bureau n'est pas limitée, elles offrent donc une meilleure qualité de filtrage.

Alors que l'extension de navigateur AdGuard est gratuite et facile à installer, et dispose de filtres pour bloquer les publicités et lutter contre les menaces en ligne, les applications autonomes sont plus puissantes et offrent une liste de fonctionnalités avancées. Voyez toutes les différences dans le tableau comparatif ci-dessous.

![Extension vs. application *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – dans les restrictions du navigateur et uniquement dans le navigateur où il est installé ;

`2` – l'extension ne peut pas détecter les requêtes provenant d'autres extensions. Si une extension malveillante ou de suivi envoie une requête à son serveur pour vous montrer des publicités ou suivre votre activité, l'extension de navigateur AdGuard ne pourra pas bloquer cette requête ;

`3` – tous les types de publicités et de menaces ne peuvent pas être bloqués par les extensions de navigateur en raison de certaines limitations du navigateur. Certains éléments peuvent arriver sur la page et ralentir le processus de chargement. De plus, contrairement aux bloqueurs de publicités basés sur le navigateur, l'application AdGuard bloque les publicités avant qu'elles ne soient chargées dans le navigateur. Cela économise la bande passante et accélère le chargement des pages.
