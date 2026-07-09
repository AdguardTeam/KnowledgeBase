---
title: Politique des filtres d'AdGuard
sidebar_position: 6
---

:::note Avis de non-responsabilité

Veuillez lire cette politique sur les filtres attentivement avant d'activer un filtre.

L’utilisation du Bloqueur d’annonces AdGuard, de AdGuard DNS et de leurs filtres peut influencer le fonctionnement des sites et services tiers. Il vous incombe de consulter et de respecter les politiques et conditions de tous les sites web ou services que vous utilisez.

Avant d'activer les filtres fournis par des tiers, vous acceptez de consulter leurs conditions d'utilisation et de prendre une décision éclairée quant à leur utilisation. AdGuard n'est pas responsable du fonctionnement des filtres tiers ou de leurs conditions, et leur présence dans les produits AdGuard ne constitue pas une recommandation d'utilisation.

:::

Chez AdGuard, nous suivons depuis longtemps certains principes dans l'élaboration de nos filtres. Ces principes, ainsi que les descriptions des filtres, sont décrits ci-dessous dans le cadre de notre politique de filtrage.

## Critères communs

Ces critères s'appliquent également aux règles de tous les filtres.

- Les règles pour un site spécifique ne seront ajoutées que si le trafic est suffisant. Le trafic est déterminé par des statistiques publiques (si disponibles) ou des indicateurs indirects, comme le nombre d'abonnés sur les réseaux sociaux. Le trafic d'un site web est considéré suffisant s'il atteint 100 000 visites par mois. Nous envisagerons d'ajouter une règle pour un site moins populaire, mais la décision finale appartient aux développeurs de filtres. Les sites avec peu de trafic doivent toujours être vérifiés pour les analytiques et les réseaux publicitaires tiers
- La décision concernant les fermes de contenu (sites web qui produisent de grandes quantités de contenu visant principalement à obtenir une grande visibilité dans les résultats de recherche et à générer des revenus publicitaires) est prise par les développeurs de filtres en fonction de la qualité du contenu

Exigences de qualité pour les règles de filtrage :

- Les règles ne doivent pas avoir d'impact négatif sur les performances des sites web
- Les règles de déblocage doivent être aussi précises que possible pour éviter de débloquer quoi que ce soit d'inutile
- Les règles JavaScript doivent être utilisées aussi peu que possible et uniquement si le blocage d'annonces est impossible sans elles

## Filtres de blocage d'annonces

### Terminologie

**Le bloqueur d'annonces** est un outil logiciel ou matériel conçu pour filtrer, masquer ou bloquer les publicités et autres éléments sur les pages web. Les bloqueurs d'annonces sont créés pour améliorer l'expérience d'utilisateur, réduire les temps de chargement des pages, diminuer la consommation du trafic Internet, bloquer les publicités, améliorer la confidentialité lors de la navigation sur des sites web et de l'utilisation d'applications, ainsi que de bloquer les éléments gênants.

Un **filtre** (ou une **liste de filtres**) est un ensemble de règles de filtrage conçues pour filtrer le contenu et bloquer des divers types de publicités et d'autres types de contenu à l'aide de bloqueurs de publicités. Ces filtres fonctionnent généralement au niveau du navigateur web, des programmes ou du serveur DNS.

**Anti-blocage de publicités** est une technologie utilisée par des sites web ou des applications destinée à détecter le blocage de publicités et à y réagir de manières différentes : en piquant, réinjectant des publicités, encourageant à désactiver le bloqueur de pubs (les « murs de blocage publicitaire »). Les anti-ablocks peuvent être de types différents :

- Anti-adblock qui bloque le contenu du site web sans proposer d'alternative : pour continuer à utiliser le site, l'utilisateur doit y désactiver le bloqueur de publicité
- "Mur anti-adblock" avec des options alternatives proposées, telles que l'achat d'un abonnement pour continuer à utiliser le bloqueur de publicité
- Messages informatifs qui n'obligent pas à agir : les utilisateurs sont invités à désactiver le bloqueur de publicité, mais ces messages peuvent être fermés, en autorisant les utilisateurs à continuer à utiliser le site sans restrictions
- Mise en œuvre de publicités alternatives en réponse à l'utilisation de bloqueurs de publicités : les sites introduisent des publicités alternatives si des bloqueurs de publicités sont détectés
- Paywall : méthode de monétisation de contenu où le contenu est partiellement ou totalement masqué aux utilisateurs, avec un message les invitant à acheter un abonnement pour y accéder

### Filtres

Les filtres de blocage publicitaire d'AdGuard sont les suivants :

- Filtre de base AdGuard
- Filtre de publicités mobiles AdGuard
- Filtres régionaux divisés par principe linguistique : chinois, néerlandais, français, allemand, japonais, russe, espagnol/portugais, turc et ukrainien

### L'objectif de ces filtres

- **Le filtre de base** est conçu pour bloquer les publicités sur les sites web en anglais et ceux pour lesquels il n'existe pas de filtre séparé. Il contient également des règles générales de filtrage qui s'appliquent à tous les sites web quelle que soit la langue
- Le **Filtre de publicités mobiles** bloque les publicités sur les versions mobiles des sites web et dans les applications mobiles. Il n'y a pas de segmentation basée sur la langue
- Les **Filtres régionaux** suivent la même politique que le **Filtre de base**, mais sont limités aux sites web dans certaines langues

L'objectif des filtres de blocage des publicités est de bloquer tous les types de publicité sur les sites web, les applications et certains appareils qui peuvent charger des publicités depuis Internet :

- Bannières - publicités affichées sous forme d'images dans de différents endroits des pages web
- Teasers — publicités textuelles ou graphiques, souvent animées, conçues pour intriguer les visiteurs (titres sensationnels, images accrocheuses) et les inciter à cliquer sur la bannière (clickbait)
- Annonces textuelles – publicité sous forme de texte, y compris des liens
- Annonces modales — publicité qui apparaît soudainement sur le contenu actuel sous la forme de fenêtres modales
- Popunders — un type de publicité qui s'ouvre dans une fenêtre séparée sous la fenêtre actuelle, lorsque vous cliquez n'importe où sur la page
- Publicité de redirection — des mécanismes qui redirigent automatiquement les utilisateurs vers un autre site web après un clic dessus
- Les annonces déguisées en contenu de site, qui ouvrent des pages avec des produits promus ou un contenu sans rapport si on clique dessus
- Annonces vidéo - vidéos publicitaires intégrées dans un contenu vidéo ou dans des éléments publicitaires séparés sur des sites web et des applications
- Publicités interactives — publicités avec lesquelles les utilisateurs peuvent interagir (par exemple, jeux et sondages, à la fin desquels l'élément publicitaire s'ouvre)
- Annonces interstitielles — annonces en plein écran sur les appareils mobiles qui couvrent l'interface de l'app ou du navigateur web
- Les restes d'annonces qui occupent de grands espaces ou se détachent de l'arrière-plan et attirent l'attention des visiteurs (à l'exception de celles qui sont à peine discernables ou qui passent inaperçues)
- Publicité anti-adblock — annonce alternative affichée sur le site web après le blocage de l'annonce principale
- Éléments d'appât utilisés par plusieurs scripts de détection de bloqueurs de publicités connus pour détecter la présence d'un bloqueur de publicités à des fins différentes, notamment la modification de la manière dont les publicités sont affichées, le fingerprinting, etc.
- La propre publicité du site, si elle a été bloquée par les règles générales de filtrage (voir *Limitations et exceptions*)
- Scripts anti-adblock qui empêchent l'utilisation du site (voir *Limitations et exceptions*)
- Publicité injectée par un logiciel malveillant, si des informations détaillées sur sa méthode de chargement ou les étapes de reproduction sont fournies
- Minage indésirable — des scripts qui minent de la crypto-monnaie sans le consentement de l’utilisateur

### Limitations et exceptions

- La publicité du site ne doit pas être bloquée intentionnellement. Toutefois, elle ne doit pas être débloquée si le blocage est provoqué par des règles générales de filtrage
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- Les murs anti-adblock seront bloqués dans les cas suivants :
    - Ils insistent de manière agressive sur la désactivation ou la suppression du bloqueur de publicité ou empêchent effectivement l'utilisation du site web
    - Ils présentent des descriptions incorrectes et trompeuses des conséquences possibles de l'utilisation des bloqueurs de publicités
    - Ils exposent les visiteurs au risque de publicité malveillante, si les publicités débloquées proviennent de sources douteuses
    - They violate or negatively impact user privacy
- Nous ne bloquons pas les messages de détection des bloqueurs de publicités qui satisfont à au moins un des critères suivants :
    - Ils permettent l'utilisation du site Internet et ne superposent pas une quantité importante de contenu
    - Ils offrent une alternative à la désactivation d'un bloqueur de publicité étant donné que cette alternative ne met pas la vie privée ou la sécurité des utilisateurs en danger
    - Ils permettent à l’utilisateur d’accéder au contenu du site Web
    - Certaines règles héritées peuvent continuer à bloquer les messages qui répondent à un ou plusieurs de ces critères. Si elles sont identifiées, ces règles seront traitées conformément à cette politique
- Les pools de minage ne sont pas bloqués s'ils sont publics et s'ils ne sont pas utilisés uniquement à des fins malveillantes

## Filtres de protection contre le suivi

### Terminologie

**Suivi** — le processus de surveillance et de collecte de données sur les utilisateurs et leurs interactions avec des sites web et des applications à des fins de marketing, ainsi que pour obtenir des données télémétriques sur le fonctionnement de sites web ou d'applications à des fins d'analyse de leur comportement. Ce processus comprend le suivi des pages visitées, du temps passé, de l'interaction avec les éléments du site web (par exemple, les clics, les soumissions de formulaires) et d'autres choses. Il permet aux propriétaires de sites web et d'applications de mieux comprendre le comportement des utilisateurs, d'optimiser les fonctionnalités et d'adapter les stratégies de marketing. Le suivi est également utilisé pour surveiller les performances, les modèles d'utilisation et identifier les problèmes, fournissant ainsi aux développeurs les données nécessaires pour améliorer la stabilité et la qualité du site web ou de l'application. Même si les données obtenues ne peuvent pas révéler l'identité d'une personne, les actions de cette sorte sont toujours considérées comme suivi.

**Traqueur** — logiciel utilisé sur un site web ou dans une application et conçu pour collecter des informations sur leur fonctionnement et les actions des visiteurs. Il suit l'interaction des utilisateurs avec le site web ou l'application, en enregistrant des données sur les pages vues, le temps passé, les clics, les soumissions de formulaires et d'autres événements. Son objectif est de fournir aux propriétaires de sites web et d'applications un outil permettant d'analyser le comportement des utilisateurs, d'améliorer leur expérience et d'optimiser le contenu et la publicité.

**Paramètre de suivi des URL** — une partie de l'adresse qui est ajoutée aux liens par les systèmes d'analyse ou présente dans certains liens sur des pages web. Lorsqu'une requête est effectuée, ce paramètre de suivi d'URL peut être traité par le backend d'un système d'analyse ou d'un site web, qui en extraira des informations. Par exemple, les paramètres de suivi d'URL peuvent transmettre des informations sur les clics ou les actions publicitaires. Les paramètres de suivi des URL peuvent également être utilisés par les systèmes de protection contre la fraude ou de détection de robots.

**Cookies** — fichiers que les sites web envoient et stockent sur les appareils. Ces fichiers contiennent des informations diverses — à la fois nécessaires au fonctionnement du site sur l'appareil et utilisées à des fins d'analyse — des identifiants uniques utilisés pour suivre l'activité des visiteurs sur le site web, des paramètres publicitaires, etc.

### Filtres

Les filtres de protection contre le suivi d'AdGuard comprennent :

- Filtre AdGuard de protection contre le suivi
- Filtre AdGuard du suivi des URL

### L'objectif de ces filtres

Le **Filtre de protection contre le suivi** est conçu pour bloquer les traqueurs qui collectent les données personnelles des utilisateurs et pour améliorer la confidentialité des utilisateurs.

Qu'est-ce qu'il bloque :

- Scripts des systèmes d'analyse
- Scripts de suivi des sites web et des applications
- Trackers CNAME masqués
- Cookies de suivi
- Pixels de suivi
- API de suivi des navigateurs
- Détection du bloqueur de publicité à des fins de suivi
- Fonctionnalité Privacy Sandbox dans Google Chrome et ses dérivés utilisés pour le suivi (Google Topics API, Protected Audience API)

Le **Filtre de suivi des URL** est conçu pour supprimer les paramètres de suivi des adresses web

### Limitations et exceptions

Les filtres de protection contre le suivi ne doivent pas bloquer un traqueur si ce blocage risque de perturber le bon fonctionnement du site web :

- Anti-bots et protection contre la fraude s'ils interfèrent avec l'utilisation du site. Par exemple, avec PerimeterX ou hCaptcha, le blocage pose des problèmes lorsque le site tente de vérifier son visiteur à l'aide d'un captcha
- Les systèmes de suivi des erreurs comme Sentry ou Bugsnag ne sont pas bloqués

## Filtre anti-nuisances

Les filtres anti-nuisances sont conçus pour améliorer la convivialité des sites web en bloquant les éléments sur les pages qui ne sont pas des publicités mais qui distraient et interfèrent avec l'interaction du site ou la consommation de contenu — comme toutes sortes de fenêtres modales et formulaires interactifs, les notifications et demandes de consentement pour les cookies, les bannières d'applications mobiles et widgets.

### Terminologie

**Avis sur les cookies** — un formulaire qui décrit les types et l’utilisation des cookies sur un site web. Un avis de cookies apparaît lorsqu'un utilisateur visite le site web, l'informant que le site web utilise des cookies ou d'autres technologies de suivi pour collecter et utiliser des informations personnelles, et expliquant pourquoi et avec qui les informations collectées sont partagées.

**CMP (Consent Management Platform)** — logiciel qui aide les sites web à se conformer aux règles d'utilisation des cookies. Les CMP limitent l'utilisation des cookies jusqu'à ce que le consentement de l'utilisateur soit obtenu, offrant ainsi aux utilisateurs la possibilité d'accepter certains cookies et de gérer les paramètres de confidentialité.

**Widget** — un élément d'interface utilisateur qui augmente les fonctionnalités d'un site web. Les widgets web sont intégrés dans les pages web et peuvent comporter des éléments interactifs tels que des boutons, des formulaires ou des bannières. Ils peuvent permettre aux utilisateurs d'accéder à des services ou à des contenus spécifiques sans nécessiter de navigation vers d'autres pages.

**Popup** — une fenêtre qui apparaît au-dessus de la page web actuelle. Cette fenêtre affiche des informations supplémentaires, des publicités, des notifications ou des formulaires de saisie de données. Les fenêtres contextuelles bloquent généralement la vue du contenu principal de la page et nécessitent une action de l'utilisateur pour se fermer, ce qui peut être agaçant.

### Filtres

Pour une meilleure personnalisation, les filtres anti-nuisances sont divisés selon leur objectif :

- Filtre AdGuard Cookie Notices
- Filtre AdGuard Popups
- Filtre AdGuard Mobile App Banners
- Filtre AdGuard Widgets
- Filtre Autres nuisances
- Filtre Anti nuisances AdGuard — un filtre combiné qui inclut les 5 filtres de nuisances spécialisés

### L'objectif de ces filtres

#### Filtre AdGuard Cookie Notices

Ce filtre est conçu pour bloquer à la fois les avis de cookies et les demandes des plateformes de gestion des cookies (CMP). Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Limitations et exceptions**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### Filtre AdGuard Popups

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Limitations et exceptions**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### Filtre AdGuard Mobile App Banners

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Limitations et exceptions**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### Filtre AdGuard Widgets

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Limitations et exceptions**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### Filtre Autres nuisances

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Limitations et exceptions**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Filtres des médias sociaux

### Filtres

AdGuard Social Media filters include:

- AdGuard Social Media filter

### L'objectif de ces filtres

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Limitations et exceptions

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Autres filtres

This group contains filters that are not essential for blocking advertisements.

### Terminologie

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtres

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### L'objectif de ces filtres

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Limitations et exceptions**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Limitations et exceptions**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Limitations et exceptions**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
