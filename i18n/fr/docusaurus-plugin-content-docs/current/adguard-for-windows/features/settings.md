---
title: Paramètres
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

_Paramètres_ est la section qui nécessite un maximum d'attention. C'est ici que vous pouvez configurer l'application pour qu'elle réponde pleinement à vos exigences : bloque uniquement ce qui vous dérange, utilise le serveur DNS du fournisseur de confiance, supprime les cookies tiers, etc.

![Paramètres \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Paramètres généraux

Ici, vous pouvez définir la langue et le thème (Sombre ou Clair), activer le lancement d'AdGuard au démarrage du système et les mises à jour automatiques silencieuses, choisir la chaîne de mise à jour et filtrer l'intervalle de vérification des mises à jour. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Paramètres avancés \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Tout en bas de l'écran, vous trouverez les _Paramètres avancés_. Changer certains d'entre eux sans réfléchir peut potentiellement entraîner des problèmes de performances d'AdGuard, interrompre la connexion Internet ou compromettre votre sécurité et votre confidentialité. C'est pourquoi nous vous suggérons d'ouvrir cette section uniquement si vous êtes sûr de ce que vous faites ou si notre équipe d'assistance vous a interrogé à ce sujet. Si vous souhaitez savoir ce qui peut être configuré dans _Paramètres avancés_, lisez l'[article dédié](/adguard-for-windows/solving-problems/low-level-settings.md).

### Bloqueur d'annonces

C'est le module principal d'AdGuard pour Windows qui supprime les publicités des sites web que vous visitez et des applications installées sur votre appareil. Pour filtrer la publicité et les contenus menaçant la vie privée tels que les bannières, les pop-ups ou les traqueurs, AdGuard utilise des filtres différents : des groupes de règles ayant un objectif similaire écrites avec une [syntaxe spéciale](/general/ad-filtering/create-own- filtres). Pour comprendre ce que sont les filtres et comment ils fonctionnent, lisez [cet article](/general/ad-filtering/how-ad-blocking-works).

![Bloqueur de publicités \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

Dans le module Bloqueur d'annonces, vous pouvez :

- permettre l'activation automatique des filtres spécifiques à la langue,
- désactiver le blocage des [annonces de recherche et auto-promotion](/general/ad-filtering/search-ads),
- désactiver les publicités dans le menu Démarrer sous Windows 11,
- activer les filtres préinstallés tels que _AdGuard Base filter_,
- installer des filtres de la liste ou ajouter un filtre personnalisé en cliquant sur le bouton _Ajouter un filtre_,
- apporter des modifications aux groupes de règles existants à l'aide du bouton _Éditeur de filtres_,
- consulter toutes les requêtes envoyées par les navigateurs et les applications installées sur votre ordinateur en cliquant sur le bouton _Journal de filtrage_. À partir de là, vous pouvez également bloquer ou débloquer n'importe quelle requête en créant une règle personnalisée,
- composer un filtre à partir de vos propres règles écrites manuellement, importées ou créées avec l'extension AdGuard Assistant.

Avant de commencer à écrire vos propres règles manuellement, lisez notre [guide détaillé sur la syntaxe](/general/ad-filtering/create-own-filters).

### Mode furtif

De nombreux sites web recueillent des informations sur leurs visiteurs, telles que leur adresse IP, des informations sur le navigateur et le système d'exploitation installés, la résolution de l'écran et même la page à partir de laquelle l'utilisateur est arrivé ou a été redirigé. Certaines pages web utilisent des cookies pour marquer le navigateur et enregistrer les paramètres personnels, les préférences de l'utilisateur, ou pour vous "reconnaître" lors de votre prochaine visite. Le mode furtif protège vos informations personnelles de ces systèmes de collecte de données et de statistiques.

![Mode furtif \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Vous pouvez ajuster le fonctionnement du Mode furtif de manière flexible : par exemple, vous pouvez interdire au site web de recevoir la requête de recherche que vous avez utilisée pour le trouver sur Internet, supprimer automatiquement les cookies de tiers et ceux du site web lui-même, et désactiver le partage de localisation dans votre navigateur, qui peut être utilisé pour suivre vos déplacements.

Pour tout apprendre sur le Mode furtif et ses nombreuses options, [lisez cet article](/general/mode furtif).

### Navigation sécurisée

La Navigation sécurisée offre une protection efficace contre les sites web malveillants et les sites d'hameçonnage. Non, AdGuard pour Windows n'est pas un antivirus. Il n'arrêtera pas le téléchargement d'un virus lorsqu'il est déjà lancé, ni ne supprimera ceux déjà existants. Mais il vous avertira si vous êtes sur le point de vous rendre sur un site web dont le domaine a été ajouté à notre base de données de "sites non fiables", ou de télécharger un fichier à partir d'un tel site web. Vous trouverez plus d'informations sur le fonctionnement de ce module dans l'[article dédié](/general/browsing-security).

Dans ce module, vous pouvez

- activer les notifications pour bloquer les requêtes vers des sites malveillants et ceux d'hameçonnage,
- activer les notifications sonores,
- accepter de soumettre des informations anonymes liées à la sécurité au serveur AdGuard pour nous aider à tenir à jour la base de données des sites malveillants et des sites d'hameçonnage.

![Navigation sécurisée \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Si vous souhaitez en savoir plus sur la navigation sécurisée, lisez [cet article](/general/browsing-security).

### Protection DNS

Il existe trois raisons importantes pour lesquelles vous souhaiterez peut-être explorer les paramètres de protection DNS. Tout d’abord, pour éviter d’être suivi par votre FAI. Chaque fois que vous ouvrez un site web, par exemple `google.com`, votre navigateur envoie une requête à un serveur DNS pour obtenir en retour l'adresse IP du site web. En général, le serveur DNS appartient à votre fournisseur d'accès, ce qui lui permet de suivre votre activité en ligne. Deuxièmement, pour chiffrer votre trafic DNS. Et troisièmement — à [bloquer le contenu au niveau DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![Protection DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

Dans le module de protection DNS d'AdGuard pour Windows, vous pouvez sélectionner les serveurs DNS des fournisseurs DNS connus, y compris [AdGuard DNS] (https://adguard-dns.io/kb/) qui bloque les publicités et les traqueurs, AdGuard DNS Protection de Famille qui bloque en plus le contenu pour adultes, ou AdGuard DNS Sans filtrage qui fournit une connexion sécurisée et fiable, mais ne filtre rien. Vous pouvez même ajouter des serveurs DNS personnalisés. Il existe également une option pour ajouter des règles personnalisées à l'aide de la [syntaxe des règles DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). Et si nécessaire, vous pouvez ajouter les [filtres DNS de votre choix](https://filterlists.com).

### Contrôle parental

Il existe plusieurs sites web dont l'accès doit être restreint à partir d'un PC utilisé par des enfants. Cette tâche est accomplie par le Contrôle Parental.

![Contrôle parental \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Le module vérifie le contenu des pages web ouvertes dans le navigateur et filtre celles dont le contenu est indésirable pour les enfants : images et textes pour adultes, langage grossier, violence, propagande de drogue, etc. Les paramètres du Contrôle Parental sont protégés par mot de passe pour que l'enfant ne puisse pas contourner les restrictions. Ce module bloque non seulement les directions vers des sites indésirables, mais peut également supprimer des résultats de recherche les liens inappropriés pour les enfants.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. Vous pouvez également cocher la case _Bloquer le téléchargement des fichiers exécutables_ pour empêcher votre enfant de télécharger et d'installer des logiciels sur l'ordinateur. Il existe deux autres options dans le module _Contrôle parental_ : vous pouvez sélectionner un utilisateur Windows spécifique à protéger par le _Contrôle parental_ et définir un mot de passe pour protéger les paramètres AdGuard contre toute modification.

![Contrôle parental \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Assistant de navigateur

! [Assistant de navigateur \*mobile_border] (https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

À partir de cet onglet, vous pouvez facilement procéder à l'installation de l'Assistant de navigateur d'AdGuard, dont la fonction principale est de gérer le filtrage directement depuis le navigateur. Nous avons expliqué plus en détail comment l'utiliser et que faire s'il n'y a pas d'assistant de navigateur pour votre navigateur dans l'[article séparé](/adguard-for-windows/browser-assistant.md).
