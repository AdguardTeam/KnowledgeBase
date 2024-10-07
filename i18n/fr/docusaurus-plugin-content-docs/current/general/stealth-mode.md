---
title: Mode furtif
sidebar_position: 4
---

De nombreux sites web recueillent des informations sur leurs visiteurs, telles que leur adresse IP, le navigateur et le système d'exploitation installés, la résolution de l'écran et même la page à partir de laquelle le visiteur a été redirigé. Certaines pages web utilisent des cookies pour marquer votre navigateur et enregistrer vos paramètres personnels et vos préférences, ou pour vous "reconnaître" lors de votre prochaine visite. Le mode furtif protège vos informations personnelles de ces systèmes de collecte de données et de statistiques.

Vous pouvez adapter le fonctionnement du mode furtif de manière flexible : par exemple, vous pouvez interdire au site web de recevoir la requête de recherche que vous avez utilisée pour le trouver sur Internet, supprimer automatiquement les cookies de tiers et ceux du site web, désactiver le partage de la géolocalisation du navigateur qui peut être utilisé pour suivre vos déplacements, et masquer votre véritable adresse IP ou même la remplacer par une adresse arbitraire.

Nous allons énumérer et décrire ci-dessous les principales caractéristiques et options que vous pouvez contrôler dans les paramètres du **mode furtif**. Elles sont réparties en quatre groupes : **Général**, **Méthodes de suivi**, **API du navigateur** et **Divers**.

:::note

Certaines options peuvent ne pas être disponibles en fonction du produit particulier en raison du système d'exploitation ou d'autres limitations.

:::

## Général {#general}

### Masquez vos requêtes de recherche {#searchqueries}

Lorsque vous êtes redirigé vers un site web par Google, Yahoo ou tout autre moteur de recherche, cette option masque la requête de recherche que vous avez utilisée pour trouver ce site web.

### Demandez aux sites web de ne pas vous suivre {#donottrack}

Envoie les signaux [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites web que vous visitez.

### Retirez les paramètres de suivi des URL

Si vous activez cette option, AdGuard supprimera les paramètres de suivi tels que `utm_*` et `fb_ref` des URL des pages.

### Méthodes de suivi {#tracking-methods}

### Autodéstruction des cookies tiers {#3p-cookie}

Les sites web utilisent des cookies pour stocker vos informations et vos préférences, telles que la langue que vous avez sélectionnée, votre localisation ou la liste des articles de votre panier d'achat. Lorsque vous revenez sur un site web, votre navigateur renvoie les cookies appartenant à ce site, ce qui lui permet de "mémoriser" vos données.

Les cookies tiers sont ceux mis en œuvre par un site Internet différent de celui sur lequel vous naviguez actuellement. Par exemple, cnn.com peut avoir un widget Facebook "J'aime" sur sa page d'accueil. Ce widget implémentera un cookie qui pourra être lu ultérieurement par Facebook. Certains annonceurs utilisent de tels cookies pour suivre les autres sites que vous visitez et sur lesquels leurs annonces sont placées.

Définissez une période de temps (en minutes) au terme de laquelle tous les cookies tiers seront détruits. Réglez la minuterie sur 0 pour les bloquer complètement.

:::attention

Ce paramètre supprime tous les cookies de tiers, y compris les informations relatives à vos connexions via les réseaux sociaux ou d'autres services de tiers. Il se peut que vous deviez périodiquement vous reconnecter à certains sites web et que vous deviez faire face à d'autres problèmes liés aux cookies. Pour bloquer uniquement les cookies de suivi, utilisez [*Filtre de protection contre le suivi AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Autodestruction des cookies propriétaires {#1p-cookie}

Définissez une période de temps (en minutes) au terme de laquelle tous les cookies seront détruits. Réglez la minuterie sur 0 pour les bloquer complètement.

:::attention

Nous vous déconseillons d'activer cette option car elle pourrait gravement interférer avec le fonctionnement de certains sites web.

:::

### Désactivation du cache pour les requêtes des tiers {#3p-cache}

Lorsqu'un navigateur accède à une page, le serveur lui attribue un ETag. Cet ETag est utilisé par le navigateur pour mettre en cache le contenu de la page. Lors de requêtes ultérieures, le navigateur envoie l'ETag au serveur correspondant, permettant ainsi au serveur de connaître l'identité du visiteur. Tant que les fichiers du site sont mis en cache, l'ETag est envoyé à chaque fois que votre navigateur accède à ce site. Si le site intègre du contenu provenant d'un autre serveur (comme une image ou une iframe), ce serveur peut suivre vos activités à votre insu.

### Blocage de l'en-tête Autorisation tiers {#3p-auth}

La valeur de l'en-tête "Autorisation" est mise en cache par le navigateur et est ensuite envoyée avec chaque requête vers ce domaine. Cela signifie qu'il peut être utilisé à des fins de suivi, tout comme les cookies.

## API du navigateur {#browser-api}

### Bloquer WebRTC {#webrtc}

WebRTC (Web Real-Time Communication) est une technologie qui permet le streaming direct de données entre les navigateurs et les applications. Élément permettant aux autres utilisateurs de connaître votre adresse IP actuelle, même si vous utilisez un proxy ou un VPN. L'activation de cette option peut perturber le fonctionnement de certaines applications du navigateur, telles que les messageries, les chats, les cinémas ou les jeux.

### Bloquer l'API Push {#push}

L'API Push permet aux serveurs d'envoyer des messages aux applications web indépendamment de l'état d'activité de votre navigateur. Ainsi, vous pouvez voir des notifications de différents sites web même si votre navigateur est caché dans la barre d'état système ou n'est pas lancé. Activez cette option pour bloquer complètement l'API Push du navigateur.

### Bloquer l'API de position {#location}

L'activation de cette option empêchera le navigateur d'envoyer des données GPS qui pourraient être utilisées pour déterminer votre emplacement, modifier vos résultats de recherche ou influencer d'une autre manière votre expérience sur le web.

### Bloquer Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly increase website load times. L'activation de ce paramètre permet à AdGuard de bloquer la capacité des navigateurs à détecter les composants (tels que les plugins et les objets ActiveXObject) qui permettent à Flash d'afficher du contenu. Cela signifie que les navigateurs ne peuvent pas prendre en charge Flash.

### Bloquer Java {#java}

Certains sites web et services web utilisent encore l'ancienne technologie pour prendre en charge les plugins Java. L'API du plugin Java, qui constitue la base des plugins Java, présente de sérieuses failles de sécurité. Pour des raisons de sécurité, vous pouvez désactiver ces plugins. Néanmoins, même si vous décidez d'utiliser l'option "Bloquer Java", JavaScript sera toujours activé.

## Divers {#miscellaneous}

### Masquer le référent auprès des tiers {#referer}

Le référent est un en-tête HTTP utilisé dans les requêtes provenant du navigateur au serveur. Il contient l'URL de la source de la requête. Lorsque vous naviguez d’une page à l’autre, le référent enregistre l’URL de la page initiale. Le serveur qui héberge la page web de destination dispose souvent d’un logiciel qui analyse le référent et en extrait diverses informations. L'activation de l'option *Masquer le référent auprès des tiers* cache le site web actuel aux sites tiers en modifiant l'en-tête HTTP.

Vous pouvez également définir une valeur arbitraire pour le référent en la saisissant dans le champ *Référent personnalisé* . Pour utiliser le référent par défaut, laissez le champ vide.

Notez que pour pouvoir filtrer le trafic, les applications AdGuard "interceptent" les requêtes navigateur-serveur. Les requêtes adressées aux serveurs de publicité, de suivi et d'hameçonnage peuvent être modifiées avant d'être envoyées au serveur ou bloquées complètement. Idem pour l'option *Masquer le référent aux tiers* : AdGuard intercepte les requêtes HTTP(S), notamment pour supprimer ou modifier l'en-tête référent si cette option est activée. Toutefois, cela ne se produit qu'une fois que ces requêtes "quittent" le navigateur. Cela signifie que si vous surveillez le référent dans le navigateur (par exemple, avec l'aide des outils de développement de Chrome), vous verrez le référent d'origine car la requête n'a pas encore atteint AdGuard. Vous pouvez utiliser des logiciels tels que [Fiddler](https://www.telerik.com/fiddler) pour vous assurer que le référent est modifié correctement.

On the other hand, due to the nature of all browser extensions, AdGuard Browser Extension works 'inside' the browser. Elle modifiera le référent à ce moment précis, de sorte que les outils de développeur afficheront le référent souhaité pour vos demandes.

### Masquer votre agent utilisateur {#useragent}

Lorsque vous visitez un site web, votre navigateur envoie ses informations au serveur. Il s’agit d’une ligne de texte qui fait partie d’une requête HTTP commençant par "User-Agent :". Il s’agit généralement du nom et de la version du navigateur, du système d’exploitation et des paramètres de langue. Nous empêchons l'agent-utilisateur d'identifier les informations pour que les annonceurs ne puissent pas les obtenir.

Vous pouvez également définir une valeur arbitraire pour l'agent-utilisateur en la saisissant dans le champ Agent-utilisateur personnalisé . Pour utiliser l'agent-utilisateur par défaut, laissez le champ vide.

### Masquer votre adresse IP {#ip}

Le mode furtif ne peut pas masquer votre adresse IP. Cependant, nous pouvons le dissimuler pour faire de sorte que les sites web que vous visitez pensent que vous êtes un proxy. Parfois, cette méthode aide et les sites web ignorent votre véritable adresse IP.

Vous pouvez définir une adresse IP arbitraire, que vous souhaiteriez que les autres perçoivent comme la vôtre, en la saisissant simplement dans le champ correspondant. Pour utiliser l'adresse IP par défaut, laissez le champ vide.

### Retirer l'en-tête X-Client-Data des requêtes HTTP {#xclientdata}

Il interdit à Google Chrome d'envoyer ses informations de version et de modification avec les demandes adressées aux domaines de Google (y compris Double Click et Google Analytics).

### Protection anti-IPP {#dpi}

L’inspection approfondie des paquets ou IPP est un système d’analyse et de filtrage approfondis du trafic par contenu des paquets, ainsi que l’accumulation de données statistiques. Grâce à cette technologie, les FAI ont la possibilité de contrôler le trafic passant et de limiter l'accès au contenu pour leurs clients.

AdGuard peut modifier les données des paquets sortants afin que le client ne relève pas des critères de blocage IPP. Cela signifie qu'en activant cette option, les utilisateurs peuvent accéder au contenu qu'ils souhaitent. Tous les systèmes IPP ne peuvent pas être contournés pour le moment, mais nous travaillons constamment à les améliorer.

La fonction "Protection anti IPP" est déjà implémentée dans AdGuard pour Windows, AdGuard pour Mac et AdGuard pour Android.

:::caution

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
