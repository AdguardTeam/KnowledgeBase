---
title: Protection contre le suivi (anciennement Mode furtif)
sidebar_position: 4
---

De nombreux sites web recueillent des informations sur leurs visiteurs, telles que leur adresse IP, le navigateur et le système d'exploitation installés, la résolution de l'écran et même la page à partir de laquelle le visiteur a été redirigé. Certaines pages web utilisent des cookies pour marquer votre navigateur et enregistrer vos paramètres personnels et vos préférences, ou pour vous "reconnaître" lors de votre prochaine visite. La *Protection contre le suivi* protège vos informations personnelles contre ces systèmes de collecte de données et de statistiques.

Vous pouvez ajuster les paramètres de protection contre le suivi selon vos besoins. Par exemple, vous pouvez empêcher les sites web de recevoir les requêtes des moteurs de recherche qui vous ont conduit à eux. Vous pouvez supprimer les cookies tiers et propriétaires automatiquement. Vous pouvez également désactiver le partage de géolocalisation du navigateur, qui peut être utilisé pour suivre votre emplacement. Vous pouvez masquer votre véritable adresse IP ou la remplacer par une adresse arbitraire.

Nous allons énumérer les principales caractéristiques ci-dessous et décrire les options que vous pouvez contrôler dans les paramètres de la **Protection contre le suivi**. Les fonctionnalités sont réparties en quatre groupes : **Général**, **Méthodes de suivi**, **API du navigateur**,  **Suivi Windows** et **Divers**.

:::note

Certaines fonctionnalités ne sont disponibles que pour certains produits en raison de limitations du système d’exploitation ou du navigateur.

:::

## Général {#general}

### Bloquer le suivi {#blocktrackers}

Cette fonctionnalité bloque les traqueurs et les analyses Web à l'aide du filtre de Protection contre le suivi AdGuard.

### Supprimer les paramètres de suivi des URL {#removetracking}

Si vous activez cette fonctionnalité, AdGuard utilisera son Filtre AdGuard du suivi des URL pour retirer les paramètres de suivi tels que `utm_*` et `fb_ref` des URL des pages.

### Masquer les requêtes de recherche {#searchqueries}

Cette fonctionnalité masque vos requêtes de recherche sur les sites Web que vous visitez via les résultats des moteurs de recherche. Par exemple, lorsque vous ouvrez un site Web via un moteur de recherche comme Google ou Yahoo, cette fonctionnalité masque la requête de recherche que vous avez utilisée pour trouver ce site Web.

### Demander aux sites Web de ne pas me suivre {#donottrack}

Envoie les signaux [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites web que vous visitez.

### Autres filtres de confidentialité {#otherprivacyfilters}

Cette fonctionnalité affiche les autres filtres de confidentialité activés dans **Filtres**.

:::note

Disponible dans AdGuard pour Android et AdGuard pour Windows.

:::

## Méthodes de suivi {#tracking-methods}

### Supprimer les cookies tiers {#3p-cookie}

Cette fonctionnalité empêche les annonceurs de suivre votre comportement sur un nombre de pages en limitant la durée de vie des cookies tiers.

Les sites web utilisent des cookies pour stocker vos informations et vos préférences, telles que la langue que vous avez sélectionnée, votre localisation ou la liste des articles de votre panier d'achat. Lorsque vous revenez sur un site Web, votre navigateur envoie au site Web les cookies qui lui appartiennent, ce qui lui permet de "mémoriser" vos données.

Les cookies tiers sont mis en œuvre par un site Web autre que celui que vous êtes en train de parcourir. Par exemple, cnn.com peut avoir un widget Facebook "J'aime" sur sa page d'accueil. Ce widget installe un cookie que Facebook peut lire ultérieurement. Certains annonceurs utilisent de tels cookies pour suivre les autres sites Web que vous visitez et qui ont leurs propres annonces publicitaires.

Définissez une période de temps (en minutes) au terme de laquelle tous les cookies tiers seront supprimés. Pour bloquer ces cookies, définissez leur durée de vie à 0.

:::attention

Ce paramètre supprime tous les cookies de tiers, y compris les informations relatives à vos connexions via les réseaux sociaux ou d'autres services de tiers. Il se peut que vous deviez périodiquement vous reconnecter à certains sites web et que vous deviez faire face à d'autres problèmes liés aux cookies. Pour bloquer uniquement les cookies de suivi, utilisez le [*Filtre de protection contre le suivi AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

Disponible dans AdGuard pour Android, AdGuard pour Windows, AdGuard pour Mac, et l'Extension de navigateur AdGuard (navigateurs basés sur MV2).

:::

### Supprimer les cookies propriétaires (non recommandé) {#1p-cookie}

Cette fonctionnalité empêche les sites Web de mémoriser vos informations, telles que vos identifiants de connexion et vos préférences linguistiques, en limitant la durée de vie des cookies propriétaires.

Définissez une période de temps (en minutes) au terme de laquelle tous les cookies seront supprimés. Pour bloquer ces cookies, définissez leur durée de vie à 0.

:::attention

Nous vous déconseillons d'activer cette option car elle pourrait gravement interférer avec le fonctionnement de certains sites web. Si vous bloquez ces cookies, certains sites Web peuvent planter ou cesser de fonctionner.

:::

::note

Disponible dans AdGuard pour Android, AdGuard pour Windows, AdGuard pour Mac, et l'Extension de navigateur AdGuard (navigateurs basés sur MV2).

:::

### Bloquer les en-têtes ETag et If-None-Match {#3p-cache}

Cette fonctionnalité supprime les en-têtes ETag et If-None-Match des requêtes et des réponses pour empêcher leur suivi.

Lorsqu'un navigateur accède à une page, le serveur lui attribue un ETag. Cet ETag est utilisé par le navigateur pour mettre en cache le contenu de la page. Lors de requêtes ultérieures, le navigateur envoie l'ETag au serveur correspondant, permettant ainsi au serveur de connaître l'identité du visiteur. Tant que les fichiers du site sont mis en cache, l'ETag est envoyé à chaque fois que votre navigateur accède à ce site. Si le site intègre du contenu provenant d'un autre serveur (comme une image ou une iframe), ce serveur peut suivre vos activités à votre insu.

:::note

Disponible dans AdGuard pour Android, AdGuard pour Windows et AdGuard pour Mac.

:::

### Bloquer l'en-tête d'Autorisation tiers {#3p-auth}

Cette fonctionnalité désactive les données d'autorisation mises en cache qui peuvent être utilisées à des fins de suivi. Peut interférer avec la fonctionnalité de certaines extensions de navigateur et sites web.

La valeur de l'en-tête "Autorisation" est mise en cache par le navigateur et est ensuite envoyée avec chaque requête vers ce domaine. Cela signifie qu'il peut être utilisé à des fins de suivi, tout comme les cookies.

:::note

Disponible dans AdGuard pour Android, AdGuard pour Windows et AdGuard pour Mac.

:::

## API du navigateur {#browser-api}

:::note

Seule la fonctionnalité **Bloquer WebRTC** est disponible pour l'Extension de navigateur AdGuard. Vous pouvez la trouver dans la section **Divers**.

:::

### Bloquer WebRTC {#webrtc}

Cette fonctionnalité bloque WebRTC, une vulnérabilité connue qui peut divulguer votre adresse IP réelle même si vous utilisez un proxy ou un VPN.

WebRTC (Web Real-Time Communication) est une technologie qui permet la diffusion en directe de données entre les navigateurs et les applications. Cependant, elle peut permettre aux autres de connaître votre véritable adresse IP, même lorsque vous utilisez un proxy ou un VPN.

:::caution

L'activation de cette option peut perturber le fonctionnement de certaines applications du navigateur, telles que les messageries, les plateformes de streaming, les chats ou les jeux.

:::

### Bloquer l'API Push {#push}

Cette fonctionnalité bloque les notifications push des sites Web.

L'API Push permet aux serveurs d'envoyer des messages aux applications web indépendamment de l'état d'activité de votre navigateur. Ainsi, vous pouvez voir des notifications des sites Web différents même lorsque votre navigateur est réduit ou fermé. Activez cette option pour bloquer complètement l'API Push du navigateur.

### Bloquer l'API de position {#location}

Cette fonctionnalité empêche les sites Web de détecter votre emplacement.

L'activation de cette option empêche le navigateur d'envoyer des données GPS qui pourraient être utilisées pour déterminer votre emplacement, modifier vos résultats de recherche ou influencer d'une autre manière votre expérience sur le web.

### Bloquer Flash {#flash}

Cette fonction renforce la protection et accélère le chargement des sites web en bloquant la prise en charge de Flash Player dans les navigateurs.

Le plugin Flash Player est devenu de plus en plus vulnérable aux menaces en ligne telles que les virus et les pirates informatiques ; il peut aussi augmenter l'intervalle de chargement des sites web de manière dramatique. L'activation de ce paramètre permet à AdGuard de bloquer la capacité des navigateurs à détecter les composants (tels que les plugins et les objets ActiveXObject) qui permettent à Flash d'afficher du contenu. Cela signifie que les navigateurs ne peuvent pas prendre en charge Flash.

### Bloquer Java {#java}

Cette fonctionnalité désactive les plugins Java sur les sites Web et les services web car l'API présente de sérieux problèmes de sécurité. Ne désactive pas JavaScript.

Certains sites web et services web utilisent encore l'ancienne technologie pour prendre en charge les plugins Java. L'API du plugin Java, qui constitue la base des plugins Java, présente de sérieuses failles de sécurité. Pour des raisons de sécurité, vous pouvez désactiver ces plugins. Néanmoins, même si vous décidez d'utiliser l'option "Bloquer Java", JavaScript sera toujours activé.

## Suivi Windows {#windowstracking}

:::note

Ces fonctionnalités sont uniquement disponibles dans AdGuard pour Windows.

:::

### Désactiver la télémétrie de Windows {#windowstelemetry}

Cette fonctionnalité désactive l'envoi de données techniques concernant votre système et l'utilisation de l'app.

### Désactiver Windows Recall {#windowsrecall}

Cette fonctionnalité empêche Windows de prendre et d'analyser des captures d'écran de l'activité de votre bureau.

### Désactiver l’identifiant Advertising ID {#advertisingid}

Cette fonctionnalité désactive l'ID publicitaire pour bloquer le suivi de l'utilisation de votre application.

### Désactiver les rapports automatiques de Microsoft Defender {#windowsautoreport}

Cette fonctionnalité bloque les rapports et l'échantillonnage automatique des maliciels suspects.

### Désactiver le service de routage des messages WAP Push {#wappushrouting}

Cette fonctionnalité désactive la collecte de données sur les problèmes de composants Windows.

## Divers {#miscellaneous}

### Masquer le Référent aux tiers {#referer}

Cette fonctionnalité empêche les tiers de savoir quels sites Web vous visitez.

Le référent est un en-tête HTTP utilisé dans les requêtes du navigateur au serveur. Il contient l'URL de la source de la requête. Lorsque vous naviguez d’une page à l’autre, le référent enregistre l’URL de la page initiale. Le serveur qui héberge la page web de destination dispose souvent d’un logiciel qui analyse le référent et en extrait diverses informations. L'activation du paramètre *Masquer le référent des tiers* masque le site Web actuel des sites Web tiers en modifiant l'en-tête HTTP.

Vous pouvez également définir une valeur arbitraire pour le référent en la saisissant dans le champ *Référent personnalisé* . Pour utiliser le référent par défaut, laissez le champ vide.

Notez que pour pouvoir filtrer le trafic, les applications AdGuard "interceptent" les requêtes navigateur-serveur. Les requêtes adressées aux serveurs de publicité, de suivi et d'hameçonnage peuvent être modifiées avant d'être envoyées au serveur ou bloquées complètement. Idem pour l'option *Masquer le référent aux tiers* : AdGuard intercepte les requêtes HTTP(S), notamment pour supprimer ou modifier l'en-tête référent si cette option est activée. Toutefois, cela ne se produit qu'une fois que ces requêtes "quittent" le navigateur. Cela signifie que si vous surveillez le référent dans le navigateur (par exemple, avec l'aide des outils de développement de Chrome), vous verrez le référent d'origine car la requête n'a pas encore atteint AdGuard. Vous pouvez utiliser des logiciels tels que [Fiddler](https://www.telerik.com/fiddler) pour vous assurer que le référent est modifié correctement.

À cause de la nature de toutes les extensions de navigateur, l'Extension de navigateur AdGuard fonctionne "à l'intérieur" du navigateur. Elle modifiera le référent à ce moment précis, de sorte que les outils de développeur afficheront le référent souhaité pour vos requêtes.

### Masquer l'Agent utilisateur {#useragent}

Cette fonctionnalité supprime les informations d’identification de l’en-tête Agent Utilisateur.

Lorsque vous visitez un site web, votre navigateur envoie ses informations au serveur. Il ressemble à une ligne de texte faisant partie d'une requête HTTP et commençant par "User-Agent:". Il s’agit généralement du nom et de la version du navigateur, du système d’exploitation et des paramètres de langue. Nous empêchons l'Agent-utilisateur d'identifier les informations pour que les annonceurs ne puissent pas les obtenir.

Vous pouvez également définir une valeur arbitraire pour l'agent-utilisateur en la saisissant dans le champ Agent-utilisateur personnalisé . Pour utiliser l'Agent Utilisateur par défaut, laissez le champ vide.

:::note

Disponible dans AdGuard pour Android, AdGuard pour Windows et AdGuard pour Mac.

:::

### Masquer l'adresse IP {#ip}

Cette fonctionnalité fait croire aux sites Web que vous êtes un proxy avec l’adresse IP que vous spécifiez.

La Protection contre le suivi ne peut pas masquer votre adresse IP. Cependant, nous pouvons la dissimuler pour faire de sorte que les sites web que vous visitez pensent que vous êtes un proxy. Parfois, cette méthode aide et les sites web ignorent votre véritable adresse IP.

Vous pouvez définir une adresse IP arbitraire, que vous souhaiteriez que les autres perçoivent comme la vôtre, en la saisissant simplement dans le champ correspondant. Pour utiliser l'adresse IP par défaut, laissez le champ vide.

:::note

Disponible dans AdGuard pour Android, AdGuard pour Windows et AdGuard pour Mac.

:::

### Retirer l'en-tête X-Client-Data {#xclientdata}

Cette fonctionnalité empêche Google Chrome d'envoyer ses informations de version et de modifications aux domaines Google (y compris DoubleClick et Google analytiques).

:::note

Disponible dans AdGuard pour Android, AdGuard pour Windows, AdGuard pour Mac, et l'Extension de navigateur AdGuard (navigateurs basés sur Chromium).

:::

### Protection contre l’IAP {#dpi}

Cette fonction modifie votre trafic sortant de sorte que les systèmes d'inspection approfondie des paquets de votre FAI ne puissent pas détecter les sites web que vous visitez. Il n'est pas possible de garantir une protection totale contre tous les systèmes d'IAP.

L’inspection approfondie des paquets ou IAP est un système d’analyse et de filtrage approfondis du trafic par contenu des paquets, ainsi que l’accumulation de données statistiques. Grâce à cette technologie, les FAI ont la possibilité de contrôler le trafic passant et de limiter l'accès au contenu pour leurs clients.

AdGuard peut modifier les données des paquets sortants afin que le client ne relève pas des critères de blocage IPP. Cela signifie qu'en activant cette option, les utilisateurs peuvent accéder au contenu qu'ils souhaitent. Tous les systèmes IAP ne peuvent pas être contournés pour le moment, mais nous travaillons constamment à les améliorer.

:::note

Disponible dans AdGuard pour Android, AdGuard pour Windows et AdGuard pour Mac.

:::

:::caution

Si cette fonction est activée dans AdGuard pour Windows, elle peut interférer avec l'antivirus ESET. Le filtrage Anti-IAP empêchera ESET de filtrer le trafic, laissant les sites Web blacklistés et les sites malveillants débloqués.

:::
