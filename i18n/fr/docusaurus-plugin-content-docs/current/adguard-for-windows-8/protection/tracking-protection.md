---
title: Protection contre le suivi
sidebar_position: 2
---

:::info

Cet article décrit AdGuard pour Windows v8.0, un bloqueur de publicité complet qui protège votre appareil au niveau du système. Il s'agit d'une version bêta encore en développement. Pour l'essayer, téléchargez la [version bêta d'AdGuard pour Windows](https://agrd.io/windows_beta).

:::

De nombreux sites Web recueillent des données sur leurs visiteurs, y compris les adresses IP, les informations sur le navigateur et le système d'exploitation, la résolution de l'écran, et même la page d'où vous venez. Les cookies peuvent être utilisés pour identifier votre navigateur, se souvenir de vos préférences ou vous reconnaître lors de votre retour. La Protection contre le suivi empêche de tels systèmes de collecter vos données personnelles. Pour en savoir plus, consultez notre [article sur la protection contre le suivi dans AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Protection contre le suivi](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Si vous ne souhaitez pas passer du temps à ajuster manuellement les filtres, vous pouvez simplement choisir l'un des niveaux de protection prêts à l'emploi :

- _Standard_ : activée par défaut et offre une protection fiable pour la navigation quotidienne.
- _Élevé_ : retire les paramètres de suivi des URL des pages et bloque les cookies tiers. Vous pourriez devoir vous reconnecter à certains sites Web ou faire face à d'autres problèmes liés aux cookies.
- _Extrême_ : limite la durée de vie des cookies tiers et bloque certaines API du navigateur. Certains sites Web peuvent ne pas fonctionner correctement.

Pour une flexibilité maximale, sélectionnez _Personnalisé_ et ajustez tout manuellement. Les paramètres sont divisés en cinq catégories :

- [Paramètres généraux](#general-settings)

- [Méthodes de suivi](#tracking-methods)

- [API du navigateur](#browser-api)

- [Suivi Windows](#windows-tracking)

- [Divers](#miscellaneous)

## Paramètres généraux

![Paramètres généraux](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general.png)

### Bloquer le suivi

Bloque les traqueurs et les analytiques Web à l'aide du _Filtre AdGuard de protection contre le suivi_.

### Supprimer les paramètres de suivi des URL

Supprime les paramètres de suivi tels que `utm_*` et `fb_ref` des URL des pages à l'aide du _Filtre AdGuard du suivi des URL_.

### Masquez vos requêtes de recherche

Masque les requêtes pour les sites web visités à partir d'un moteur de recherche. Lorsque vous êtes redirigé vers un site web par Google, Yahoo ou tout autre moteur de recherche, cette option masque la requête de recherche que vous avez utilisée pour trouver ce site Web.

### Demandez aux sites Web de ne pas vous suivre

Envoie les signaux [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez.

## Méthodes de suivi

![Méthodes de suivi](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_tracking_methods.png)

### Supprimer les cookies tiers

Les sites Web utilisent des cookies pour stocker vos préférences — par exemple, la langue que vous avez choisie, votre emplacement, ou les articles dans votre panier d'achat. Lorsque vous revenez, le navigateur renvoie ces cookies afin que le site puisse vous reconnaître.

Les cookies tiers fonctionnent de la même manière, mais ils sont créés par des domaines autres que celui que vous visitez. Par exemple, cnn.com peut inclure un widget _Like_ de Facebook qui définit un cookie lu plus tard par Facebook. Les annonceurs utilisent souvent de tels cookies pour suivre les autres sites que vous visitez.

Avec cette option, vous pouvez définir une limite de temps (en minutes) après laquelle tous les cookies tiers seront supprimés. Si vous réglez le minuteur sur 0, ces cookies seront complètement bloqués.

![Temps de vie](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Gardez à l'esprit que ce paramètre retire tous les cookies tiers, y compris ceux utilisés pour les connexions via les réseaux sociaux ou d'autres services externes. Cela signifie que vous devrez peut-être vous reconnecter de temps en temps ou gérer d'autres problèmes liés aux cookies. Si vous souhaitez uniquement bloquer les cookies de suivi, utilisez le [_Filtre AdGuard de protection contre le suivi_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Supprimer les cookies propriétaires (non recommandé)

Cette option supprime les cookies définis par le site Web que vous visitez actuellement après une période sélectionnée (en minutes). Lorsque le délai est écoulé, tous ces cookies sont supprimés. Réglez le minuteur sur 0 pour les bloquer complètement.

:::caution

Nous vous déconseillons d'activer cette option car elle pourrait gravement interférer avec le fonctionnement de certains sites web.

:::

### Bloquer les en-têtes ETag et If-None-Match

Retire les en-têtes ETag et If-None-Match des requêtes et des réponses pour empêcher les sites Web de les utiliser pour le suivi.

Lorsqu'un navigateur accède à une page, le serveur lui attribue un ETag — un identifiant unique utilisé pour mettre en cache le contenu de la page. Lors des visites suivantes, le navigateur renvoie le même ETag au serveur. Cela permet au serveur de reconnaître le visiteur. Tant que les fichiers en cache subsistent, l'ETag est transmis avec chaque requête. Si la page contient également des éléments intégrés provenant d'autres serveurs, tels que des images ou des iframes, ces serveurs peuvent utiliser des ETags pour suivre votre activité à votre insu.

### Bloquer l'en-tête d'Autorisation tiers

Désactive les données d'autorisation mises en cache qui peuvent être utilisées à des fins de suivi. Peut interférer avec la fonctionnalité de certaines extensions de navigateur et sites web.

La valeur de l'en-tête Authorization est mise en cache par le navigateur et envoyée automatiquement avec chaque requête vers le même domaine. Puisqu'il accompagne chaque requête, il peut être utilisé pour vous identifier et vous suivre de la même manière que les cookies.

## API du navigateur

! [API du navigateur](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_browser_api.png)

### Bloquer WebRTC

Bloque WebRTC, une vulnérabilité connue qui peut divulguer votre réelle adresse IP même si vous utilisez un proxy ou un VPN.

WebRTC (Web Real-Time Communication) est une technologie qui autorise la diffusion en directe de données entre les navigateurs et les applications. Il peut révéler votre véritable adresse IP, même si vous utilisez un proxy ou un VPN. L'activation de cette option peut perturber certaines applications du navigateur, telles que les messageries, les chats, les cinémas ou les jeux.

### Bloquer l'API Push

L'API Push permet aux serveurs d'envoyer des messages aux applications Web indépendamment de l'état d'activité de votre navigateur. C'est pourquoi vous pouvez recevoir des notifications de sites Web même si votre navigateur est caché dans la barre d'état système ou n'est pas lancé. L'activation de cette option bloque complètement l'API Push.

### Bloquer l'API de position

Lorsque cette option est activée, le navigateur ne transmettra plus de données GPS aux sites Web. Cela les empêche de déterminer votre emplacement, de modifier les résultats de recherche ou d'adapter le contenu en fonction de votre emplacement.

### Bloquer Flash

Le plugin Flash Player est obsolète et très vulnérable aux virus et aux abus. Il peut également ralentir le chargement des sites Web. L'activation de cette option empêche les navigateurs de détecter les composants Flash (tels que les plugins ou les objets ActiveXObject), ce qui désactive effectivement la prise en charge de Flash.

## Suivi Windows

![Tracking Windows](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_windows_tracking.png)

### Désactiver la télémétrie de Windows

Désactive l'envoi des données techniques concernant votre système et l'utilisation de l'app.

### Désactiver l’identifiant Advertising ID

Désactive l'ID publicitaire pour bloquer le suivi de l'utilisation de votre application.

### Désactiver les rapports automatiques de Microsoft Defender

Bloque les rapports automatiques et l'échantillonnage des maliciels suspects.

### Désactiver le service de routage des messages WAP Push

Désactive la collecte de données sur les problèmes de composants Windows

## Divers

![Divers](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_misc.png)

### Masquer le Référent aux tiers

Le référent est un en-tête HTTP inclus dans les requêtes du navigateur au serveur. Il contient l'URL de la source de la requête. Lorsque vous naviguez d’une page à l’autre, le référent enregistre l’URL de la page initiale. Le serveur qui héberge la page web de destination dispose souvent d’un logiciel qui analyse le référent et en extrait diverses informations.

L'activation de l'option _Masquer le référent aux tiers_ empêche les sites web tiers de voir ces informations en modifiant ou en supprimant l'en-tête.

Vous pouvez également saisir une valeur personnalisée dans le champ _Référent personnalisé_. Pour utiliser le référent par défaut, laissez le champ vide.

Notez que pour pouvoir filtrer le trafic, les applications AdGuard interceptent les requêtes navigateur-serveur. Les requêtes adressées aux serveurs de publicité, de suivi et d'hameçonnage peuvent être modifiées avant d'être envoyées au serveur ou bloquées complètement.

Il en va de même pour l'option _Masquer le référent aux tiers_ : pour filtrer le trafic, AdGuard intercepte les requêtes HTTP(S) et peut les modifier ou les bloquer avant qu'elles n'atteignent le serveur. Le changement ne se produit qu'une fois que la requête quitte votre navigateur. C’est pourquoi, si vous vérifiez les en-têtes dans le navigateur (par exemple avec les outils de développement de Chrome), vous verrez toujours le référent d’origine. Pour confirmer qu'il a été modifié, vous pouvez utiliser des outils externes tels que Fiddler.

### Masquer votre agent utilisateur

Lorsque vous visitez un site Web, votre navigateur envoie un en-tête appelé Agent utilisateur dans le cadre de la requête HTTP. Il ressemble à une ligne de texte commençant par "Agent utilisateur:". Cette ligne contient généralement des informations telles que le nom et la version du navigateur, le système d'exploitation et les paramètres de langue.

En activant cette option, AdGuard supprime les informations d'identification de l'agent utilisateur afin que les annonceurs et les traqueurs ne puissent pas les utiliser pour établir votre profil. Si vous le souhaitez, vous pouvez saisir une valeur personnalisée dans le champ _Agent utilisateur personnalisé_. Pour conserver la valeur par défaut, laissez simplement le champ vide.

### Masquer votre adresse IP

AdGuard ne peut pas complètement masquer votre adresse IP réelle, mais il peut la remplacer par une autre afin que les sites Web interprètent votre connexion comme passant par un proxy. Dans certains cas, cela aide à masquer votre véritable IP.

Vous pouvez saisir l'adresse IP de votre choix dans le champ correspondant. Pour utiliser l'adresse IP par défaut, laissez le champ vide.

### Retirer l'en-tête X-Client-Data

Il interdit à Google Chrome d'envoyer des informations sur sa version et ses modifications dans les requêtes aux domaines de Google, y compris les services comme DoubleClick et les analytiques de Google.

### Protection contre l’IAP

L’inspection approfondie des paquets ou IAP est un système d’analyse et de filtrage approfondis du trafic par contenu des paquets, ainsi que l’accumulation de données statistiques. Grâce à cette technologie, les FAI ont la possibilité de contrôler le trafic passant et de limiter l'accès au contenu pour leurs clients.

L'Inspection Approfondie des Paquets (IAP) est une technologie utilisée par certains FAI pour analyser et filtrer le trafic en fonction du contenu des paquets. Cela leur permet de surveiller les connexions, de restreindre l'accès à certaines ressources et de collecter des statistiques sur les utilisateurs.

Lorsque cette option est activée, AdGuard modifie les données des paquets sortants de sorte qu'elles ne correspondent plus aux critères de blocage IAP. Cela peut vous aider à contourner les restrictions et à accéder au contenu dont vous avez besoin. Cependant, tous les systèmes IAP ne peuvent pas encore être contournés — des améliorations sont encore en cours.

La fonction _Protection anti IAP_ est déjà implémentée dans AdGuard pour Windows, AdGuard pour Mac et AdGuard pour Android.

:::caution

Si cette fonctionnalité est activée dans AdGuard pour Windows, elle peut interférer avec l'antivirus ESET. Dans ce cas, ESET ne pourra pas filtrer le trafic, laissant ouvert l'accès à certains sites Web malveillants ou bloqués.

:::
