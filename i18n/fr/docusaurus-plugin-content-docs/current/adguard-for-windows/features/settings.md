---
title: Paramètres
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

_Paramètres_ est la section qui nécessite un maximum d'attention. C'est ici que vous pouvez configurer l'application pour qu'elle réponde pleinement à vos exigences : bloque uniquement ce qui vous dérange, utilise le serveur DNS du fournisseur de confiance, supprime les cookies tiers, etc.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### Paramètres généraux

Ici, vous pouvez définir la langue et le thème (Sombre ou Clair), activer le lancement d'AdGuard au démarrage du système et les mises à jour automatiques silencieuses, choisir la chaîne de mise à jour et filtrer l'intervalle de vérification des mises à jour. Les paramètres sont également l'endroit où aller si AdGuard pour Windows ne fonctionne pas correctement et si l'équipe d'assistance vous a demandé de [collecter les _journaux de débogage_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

Tout en bas de l'écran, vous trouverez les _Paramètres avancés_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad blocking

C'est le module principal d'AdGuard pour Windows qui supprime les publicités des sites web que vous visitez et des applications installées sur votre appareil. Pour filtrer la publicité et les contenus menaçant la vie privée tels que les bannières, les pop-ups ou les traqueurs, AdGuard utilise des filtres différents — des groupes de règles ayant un objectif similaire écrites avec une [syntaxe spéciale](/general/ad-filtering/create-own- filtres). Pour comprendre ce que sont les filtres et comment ils fonctionnent, lisez [cet article](/general/ad-filtering/how-ad-blocking-works).

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- permettre l'activation automatique des filtres spécifiques à la langue,
- désactiver le blocage des [annonces de recherche et auto-promotion](/general/ad-filtering/search-ads),
- désactiver les publicités dans le menu Démarrer sous Windows 11,
- activer les filtres préinstallés tels que _AdGuard Base filter_,
- installer des filtres de la liste ou ajouter un filtre personnalisé en cliquant sur le bouton _Ajouter un filtre_,
- apporter des modifications aux groupes de règles existants à l'aide du bouton _Éditeur de filtres_,
- consulter toutes les requêtes envoyées par les navigateurs et les applications installées sur votre ordinateur en cliquant sur le bouton _Journal de filtrage_. À partir de là, vous pouvez également bloquer ou débloquer n'importe quelle requête en créant une règle personnalisée,
- composer un filtre à partir de vos propres règles écrites manuellement, importées ou créées avec l'extension AdGuard Assistant.

Avant de commencer à écrire vos propres règles manuellement, lisez notre [guide détaillé sur la syntaxe](/general/ad-filtering/create-own-filters).

### Tracking protection

De nombreux sites web recueillent des informations sur leurs visiteurs, telles que leur adresse IP, des informations sur le navigateur et le système d'exploitation installés, la résolution de l'écran et même la page à partir de laquelle l'utilisateur est arrivé ou a été redirigé. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

Vous pouvez ajuster le fonctionnement du Mode furtif de manière flexible : par exemple, vous pouvez interdire au site web de recevoir la requête de recherche que vous avez utilisée pour le trouver sur Internet, supprimer automatiquement les cookies de tiers et ceux du site web lui-même, et désactiver le partage de localisation dans votre navigateur, qui peut être utilisé pour suivre vos déplacements.

Pour tout apprendre sur le Mode furtif et ses nombreuses options, [lisez cet article](/general/mode furtif).

### Navigation sécurisée

La Navigation sécurisée offre une protection efficace contre les sites web malveillants et les sites d'hameçonnage. Non, AdGuard pour Windows n'est pas un antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. Vous trouverez plus d'informations sur le fonctionnement de ce module dans l'[article dédié](/general/browsing-security).

Dans ce module, vous pouvez :

- activer les notifications pour bloquer les requêtes vers des sites malveillants et ceux d'hameçonnage,
- activer les notifications sonores,
- accepter de soumettre des informations anonymes liées à la sécurité au serveur AdGuard pour nous aider à tenir à jour la base de données des sites malveillants et des sites d'hameçonnage.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

Si vous souhaitez en savoir plus sur la navigation sécurisée, lisez [cet article](/general/browsing-security).

### Protection DNS

Il existe trois raisons importantes pour lesquelles vous souhaiterez peut-être explorer les paramètres de protection DNS. Tout d’abord, pour éviter d’être suivi par votre FAI. Chaque fois que vous ouvrez un site web, par exemple `google.com`, votre navigateur envoie une requête à un serveur DNS pour obtenir en retour l'adresse IP du site web. En général, le serveur DNS appartient à votre fournisseur d'accès, ce qui lui permet de suivre votre activité en ligne. Deuxièmement, pour chiffrer votre trafic DNS. Et troisièmement — à [bloquer le contenu au niveau DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

Dans le module de protection DNS d'AdGuard pour Windows, vous pouvez choisir des serveurs DNS provenant de fournisseurs DNS connus, y compris AdGuard DNS, qui bloque les publicités et les traqueurs, AdGuard DNS Protection Familiale, qui bloque également le contenu pour adultes, ou AdGuard DNS Sans filtrage, qui fournit une connexion sécurisée et fiable mais ne filtre rien. Vous pouvez même ajouter des serveurs DNS personnalisés. Si nécessaire, vous pouvez ajouter [des filtres DNS de votre choix](https://filterlists.com).

À partir de la version 7.20, vous pouvez également ajouter des filtres en les sélectionnant simplement dans une liste de filtres prédéfinis et fiables. Ils sont regroupés en quatre catégories pour votre commodité :

- **Général** : pour bloquer les publicités et les traqueurs
- **Régional** : pour bloquer les publicités et les traqueurs sur les sites Web spécifiques à la langue
- **Sécurité** : pour bloquer le phishing et les sites Web peu fiables
- **Autres** : couvre les cas d'utilisation spéciaux qui ne correspondent pas aux catégories ci-dessus

![Filtres DNS\*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Contrôle parental

Il existe plusieurs sites web dont l'accès doit être restreint à partir d'un PC utilisé par des enfants. This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Le module vérifie le contenu des pages web ouvertes dans le navigateur et filtre celles dont le contenu est indésirable pour les enfants : images et textes pour adultes, langage grossier, violence, propagande de drogue, etc. Les paramètres du Contrôle Parental sont protégés par mot de passe pour que l'enfant ne puisse pas contourner les restrictions. Ce module bloque non seulement les directions vers des sites indésirables, mais peut également supprimer des résultats de recherche les liens inappropriés pour les enfants.

Dans le module _Contrôle Parental_, vous pouvez activer la _Recherche sécurisée_ et gérer la _liste de blocage_ et la _liste d'autorisation_ pour personnaliser le fonctionnement de cette option. Vous pouvez également cocher la case _Bloquer le téléchargement des fichiers exécutables_ pour empêcher votre enfant de télécharger et d'installer des logiciels sur l'ordinateur. Il existe deux autres options dans le module _Contrôle parental_ : vous pouvez sélectionner un utilisateur Windows spécifique à protéger par le _Contrôle parental_ et définir un mot de passe pour protéger les paramètres AdGuard contre toute modification.

### Assistant de navigateur

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
