---
title: Politique des filtres d'AdGuard
sidebar_position: 6
---

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

**Anti-adblock** est une technologie utilisée par des sites web ou des applications destinées à détecter le blocage publicitaire et à réagir de différentes manières : suivi, réinjecter des publicités, encourager à désactiver le bloqueur de publicité (appelé "mur anti-bloqueur de publicité"). Les anti-ablocks peuvent être de types différents :

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
- Annonces interstitielles — annonces en plein écran sur les appareils mobiles qui couvrent l'interface de l'application ou du navigateur web
- Les restes d'annonces qui occupent de grands espaces ou se détachent de l'arrière-plan et attirent l'attention des visiteurs (à l'exception de celles qui sont à peine discernables ou qui passent inaperçues)
- Publicité anti-adblock — annonce alternative affichée sur le site web après le blocage de l'annonce principale
- La propre publicité du site, si elle a été bloquée par les règles générales de filtrage (voir *Limitations et exceptions*)
- Scripts anti-adblock qui empêchent l'utilisation du site (voir *Limitations et exceptions*)
- Publicité injectée par un logiciel malveillant, si des informations détaillées sur sa méthode de chargement ou les étapes de reproduction sont fournies
- Minage indésirable — des scripts qui minent de la crypto-monnaie sans le consentement de l’utilisateur

### Limitations et exceptions

- La publicité du site ne doit pas être bloquée intentionnellement. Toutefois, elle ne doit pas être débloquée si le blocage est provoqué par des règles générales de filtrage
- Les mesures d'accès au contenu telles que les paywalls ne sont pas bloquées
- Les murs anti-adblock seront bloqués dans les cas suivants :
    - Ils insistent de manière agressive sur la désactivation ou la suppression du bloqueur de publicité ou empêchent effectivement l'utilisation du site web
    - Ils présentent des descriptions incorrectes et trompeuses des conséquences possibles de l'utilisation des bloqueurs de publicités
    - Ils exposent les visiteurs au risque de publicité malveillante, si les publicités débloquées proviennent de sources douteuses
- Nous ne bloquons pas les messages de détection des bloqueurs de publicités qui satisfont à au moins un des critères suivants :
    - Ils permettent l'utilisation du site Internet et ne superposent pas une quantité importante de contenu
    - Ils offrent une alternative à la désactivation d'un bloqueur de publicité étant donné que cette alternative ne met pas la vie privée ou la sécurité des utilisateurs en danger
    - Ils permettent à l'utilisateur d'accéder au contenu du site web ou offrent un échange de valeur réalisable qui ne met pas en péril la vie privée ou la sécurité de l'utilisateur
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

**Filtre de protection contre le suivi** est conçu pour bloquer les traqueurs qui collectent les données personnelles des utilisateurs et pour améliorer la confidentialité des utilisateurs.

Ce qui est bloqué :

- Scripts des systèmes d'analyse
- Scripts de suivi des sites web et des applications
- Trackers CNAME masqués
- Cookies de suivi
- Pixels de suivi
- API de suivi des navigateurs
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

**Widget**  — un élément d'interface utilisateur qui augmente les fonctionnalités d'un site web. Les widgets web sont intégrés dans les pages web et peuvent comporter des éléments interactifs tels que des boutons, des formulaires ou des bannières. Ils peuvent permettre aux utilisateurs d'accéder à des services ou à des contenus spécifiques sans nécessiter de navigation vers d'autres pages.

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

Ce filtre est conçu pour bloquer à la fois les avis de cookies et les demandes des plateformes de gestion des cookies (CMP). Des méthodes différentes peuvent être appliquées aux avis de cookies et aux CMP. Dans la plupart des cas, il suffit de masquer ou de bloquer les scripts correspondants. Toutefois, lorsque les fonctionnalités du site et l'affichage de contenus tiers nécessitent le consentement des cookies, les méthodes suivantes sont appliquées :

- Les scriptlets sont utilisés pour contourner la demande de consentement (presque impossible à appliquer sur les sites avec des restrictions sur le chargement de contenu tiers jusqu'à ce qu'une décision soit prise)
- L'installation d'un cookie ou d'une clé dans le stockage local du site de telle sorte que le script considère que l'utilisateur a fait un choix
- Simulation de l'action de l'utilisateur à l'aide d'une règle qui clique sur un bouton spécifié et interrompt son exécution 10 secondes après le chargement. Il existe deux possibilités :
    - Rejeter (sauf pour les cookies fonctionnels — en fonction du système CMP) — l'option préférée, car il y a moins de risque de charger des outils d'analyse supplémentaires
    - Accepter — cette option est utilisée en dernier recours si d'autres méthodes échouent. Dans ce cas, le site est également vérifié pour l'utilisation d'outils analytiques, qui sont ensuite bloqués par le **Filtre AdGuard de protection contre le suivi**

**Limitations et exceptions**

Dans certains cas, la décision d'ajouter des règles est prise par les développeurs de filtres indépendamment; principalement lorsque le choix fait lors de la simulation d'actions affecterait la fonctionnalité du site (par exemple, l'historique peut ne pas fonctionner ou les paramètres utilisateur peuvent ne pas être enregistrés sur un tel site).

#### Filtre AdGuard Popups

Il s'agit d'un filtre qui bloque diverses fenêtres pop-up sur les pages web qui ne sont pas nécessaires à l'utilisation normale du site, y compris mais sans s'y limiter :

- Demandes d'autorisation pour recevoir des notifications push
- Popups et formulaires d'abonnement aux actualités, promotions et événements divers, y compris les chaînes tierces pour les recevoir (tels que Google News, Telegram)
- Les fenêtres contextuelles qui encouragent les utilisateurs à désactiver les bloqueurs de publicité et qui portent atteinte à la vie privée des utilisateurs (à la discrétion des développeurs de filtres)
- Autres types de popups qui peuvent gêner les utilisateurs (à la discrétion des développeurs de filtres)

**Limitations et exceptions**

- Les notifications push ne sont bloquées que sur les sites où elles ne sont pas utilisées à des fins pratiques. Par exemple, dans les clients web de messagerie ou les outils utilisés à des fins professionnelles, ces notifications ne seront pas bloquées
- Certaines fenêtres popup qui n'entrent pas dans les catégories décrites ci-dessus mais qui interfèrent quand-même avec l'expérience de l'utilisateur peuvent également être bloquées. Par exemple, des messages d'inscription sur un site ou des fenêtres contextuelles qui présentent les fonctionnalités du site. La décision est prise par les développeurs de filtres
- Les mesures d'accès au contenu qui demandent à l'utilisateur de payer pour accéder au contenu ne doivent pas être contournées

#### Filtre AdGuard Mobile App Banners

Il s'agit d'un filtre qui bloque les bannières et les popups qui encouragent les visiteurs à installer des applications mobiles.

**Limitations et exceptions**

Les bannières situées dans les en-têtes ou dans les menus des sites Internet ne sont pas bloquées si elles ne sont pas animées et n'occupent pas une part significative de l'espace utilisable. Si une bannière est située dans le pied de page, la décision est prise par les développeurs de filtres cas par cas. Normalement, les bannières placées dans le pied de page ne se détachent pas des autres éléments et ne sont pas gênantes.

#### Filtre AdGuard Widgets

Il s'agit d'un filtre qui bloque les différents widgets qui ne sont pas essentiels au fonctionnement du site web ou à l'interaction avec celui-ci :

- Les widgets pour les recommandations de contenu – articles connexes, sites web similaires, recommandations personnalisées de toute sorte
- Les widgets de chat qui ne sont pas intégrés au contenu et ne constituent pas le contenu principal de la page
- Widgets marketing :
    - Les chats pour communiquer avec des assistants ou des robots
    - Les widgets avec des recommandations de produits présentées à l'utilisateur
    - Formulaires de rappel
- D'autres widgets qui n'ont pas de catégorie dédiée mais peuvent encombrer la page visuellement. Par exemple, des widgets météo, des taux de change, des offres d'emploi et des dons

**Limitations et exceptions**

Ce filtre ne bloque pas :

- Widgets liés au contenu de la page, tels que les sections de commentaires, les flux de chat en direct, à l'exception des chats non modérés sur des sites avec des flux non officiels, qui sont souvent remplis de spam et de contenus similaires
- Widgets pour l'autopromotion et les activités promotionnelles spécifiques au site
- Widgets de don, sauf dans les cas où ils occupent une partie importante de la page et se détachent nettement du contenu. La décision de blocage est prise par les développeurs de filtres

#### Filtre Autres nuisances

Ce filtre est conçu pour bloquer les éléments agaçants qui ne sont pas inclus dans d'autres filtres, ainsi que pour appliquer des ajustements de toute sorte. Son objectif est de :

- Bloquer l'autopromotion des sites web (tout type de publicité promouvant des biens ou des services appartenant au propriétaire du site, sans recevoir de compensation commerciale d'un tiers), si elle est considérée comme un élément gênant
- Bloquer les éléments gênants qui ne sont pas inclus dans les autres catégories
- Débloquer les actions sur la page, telles que l'ouverture du menu contextuel, la sélection et la copie de texte, si elles sont bloquées
- Accélérer les temporisateurs lors du chargement de fichiers à partir de sites web, si la vérification n'est pas contrôlée par le serveur ou si elle n'est pas entravée
- Appliquer toutes sortes de règles qui peuvent être utiles aux développeurs de filtres. Par exemple, blocage de la détection du débogueur web

**Limitations et exceptions**

Ce filtre peut contenir des règles qui ne conviennent pas à tous les utilisateurs. Il est parfois recommandé de désactiver ce filtre. Les décisions d'ajouter des règles à ce filtre sont prises par les développeurs de filtres, règle par règle.

## Filtres des médias sociaux

### Filtres

Les Filtres AdGuard pour médias sociaux comprennent :

- Filtre AdGuard pour médias sociaux

### L'objectif de ces filtres

Ce filtre bloque les widgets de médias sociaux sur les sites web de tiers, tels que les boutons "J'aime" et "Partager", les widgets de groupe, les recommandations et autres widgets similaires.

### Limitations et exceptions

Les widgets qui font partie de la fonctionnalité ou du contenu du site web, tels que les commentaires, les messages intégrés, les sondages, ainsi que les widgets de connexion aux médias sociaux, ne sont pas bloqués. Les liens vers les pages de médias sociaux du site web ne sont pas non plus bloqués.

## Autres filtres

Ce groupe contient des filtres qui ne sont pas indispensables pour bloquer les publicités.

### Terminologie

**La publicité contextuelle** est un type de publicité sur Internet dans lequel la publicité est affichée en fonction du contenu, du public sélectionné, de l'emplacement, de l'heure ou d'un autre contexte des pages Internet.

**La publicité par recherche** est une sous-classe de publicité contextuelle dans laquelle les annonces sont affichées en fonction de la requête de recherche du visiteur.

**L'auto-promotion des sites web** fait référence aux bannières d'un site web faisant la promotion de biens et de services appartenant au propriétaire du site, pour lesquels il ne reçoit pas de compensation de la part de tiers.

Pour plus de détails sur ces types de publicité, consultez l'article sur [les annonces de recherche](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtres

- Filtre débloquant les annonces de recherche et l'autopromotion
- Filtre DNS AdGuard
- Filtre expérimental AdGuard

### L'objectif de ces filtres

#### Filtre débloquant les annonces de recherche et l'autopromotion

Ce filtre débloque :

- Publicité contextuelle dans les résultats de recherche lors de l'utilisation de moteurs de recherche (tels que Google, Bing, Yandex, DuckDuckGo)
- Auto-promotion des sites web

**Limitations et exceptions**

- La publicité de recherches n'est débloquée que si elle correspond à la requête de recherche de l'utilisateur, car elle est contextuelle. Sinon, la publicité reste bloquée
- L'auto-promotion n'est débloquée que si elle est conforme à la politique de filtrage. Une requête de déblocage peut être rejetée par les développeurs des filtres
- Tout autre type de publicité ne sera pas débloqué

#### Filtre DNS AdGuard

Ce filtre est utilisé dans AdGuard DNS. Il ne remplace pas les filtres de blocage des publicités.

**Limitations et exceptions**

Idem pour les filtres bloquant les publicités.

#### Filtre expérimental AdGuard

Ce filtre est destiné à tester et à déboguer les règles susceptibles de perturber le fonctionnement des sites web. Les règles sont ajoutées par les développeurs de filtres lorsqu'il est nécessaire de tester une solution particulière. Le filtre étant conçu à des fins de débogage, ses limitations sont minimes.

**Limitations et exceptions**

- Les règles ne doivent pas explicitement enfreindre la fonctionnalité des sites web
- Les règles ne doivent pas débloquer les publicités ni enfreindre la Politique
