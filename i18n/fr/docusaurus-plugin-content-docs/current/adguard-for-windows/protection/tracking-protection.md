---
title: Tracking protection
sidebar_position: 2
---

De nombreux sites Web recueillent des données sur leurs visiteurs, y compris les adresses IP, les informations sur le navigateur et le système d'exploitation, la résolution de l'écran, et même la page d'où vous venez. Les cookies peuvent être utilisés pour identifier votre navigateur, se souvenir de vos préférences ou vous reconnaître lors de votre retour. La Protection contre le suivi empêche de tels systèmes de collecter vos données personnelles. Pour en savoir plus, consultez notre [article sur la protection contre le suivi dans AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

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

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Bloquer le suivi

Bloque les traqueurs et les analytiques Web à l'aide du _Filtre AdGuard de protection contre le suivi_.

### Supprimer les paramètres de suivi des URL

Supprime les paramètres de suivi tels que `utm_*` et `fb_ref` des URL des pages à l'aide du _Filtre AdGuard du suivi des URL_.

### Masquer les requêtes de recherche

Masque les requêtes pour les sites web visités à partir d'un moteur de recherche. Lorsque vous êtes redirigé vers un site web par Google, Yahoo ou tout autre moteur de recherche, cette option masque la requête de recherche que vous avez utilisée pour trouver ce site Web.

### Demander aux sites Web de ne pas me suivre

Envoie les signaux [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez.

### Autres filtres de confidentialité

Applies a set of additional privacy protection filters. The number next to _Enabled in Filters_ shows how many filters are currently active.

## Méthodes de suivi

![Tracking methods \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Supprimer les cookies tiers

Les sites Web utilisent des cookies pour stocker vos préférences — par exemple, la langue que vous avez choisie, votre emplacement, ou les articles dans votre panier d'achat. Lorsque vous revenez, le navigateur renvoie ces cookies afin que le site puisse vous reconnaître.

Les cookies tiers fonctionnent de la même manière, mais ils sont créés par des domaines autres que celui que vous visitez. Par exemple, cnn.com peut inclure un widget _Like_ de Facebook qui définit un cookie lu plus tard par Facebook. Les annonceurs utilisent souvent de tels cookies pour suivre les autres sites que vous visitez.

Avec cette option, vous pouvez définir une limite de temps (en minutes) après laquelle tous les cookies tiers seront supprimés. Si vous réglez le minuteur sur 0, ces cookies seront complètement bloqués.

![Time-to-live \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

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

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Prevent IP address leaks through WebRTC

Makes WebRTC use a stricter IP address policy to prevent your real IP address from being exposed, even if you use a proxy or VPN.

WebRTC (Web Real-Time Communication) est une technologie qui autorise la diffusion en directe de données entre les navigateurs et les applications. By default, it can reveal your true IP address even when a proxy or VPN is active. This option enforces a stricter IP address policy instead of blocking WebRTC entirely, so browser applications such as messengers, chats, and games are less likely to be affected.

### Bloquer l'API Push

L'API Push permet aux serveurs d'envoyer des messages aux applications Web indépendamment de l'état d'activité de votre navigateur. C'est pourquoi vous pouvez recevoir des notifications de sites Web même si votre navigateur est caché dans la barre d'état système ou n'est pas lancé. L'activation de cette option bloque complètement l'API Push.

### Bloquer l'API de position

Lorsque cette option est activée, le navigateur ne transmettra plus de données GPS aux sites Web. Cela les empêche de déterminer votre emplacement, de modifier les résultats de recherche ou d'adapter le contenu en fonction de votre emplacement.

## Suivi Windows

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Désactiver la télémétrie de Windows

Désactive l'envoi des données techniques concernant votre système et l'utilisation de l'app.

### Désactiver Windows Recall

Disables the Windows Recall feature, which periodically takes snapshots of your screen and stores them locally. This prevents sensitive information visible on your screen from being captured and saved.

### Désactiver l’identifiant Advertising ID

Désactive l'ID publicitaire pour bloquer le suivi de l'utilisation de votre application.

### Désactiver les rapports automatiques de Microsoft Defender

Bloque les rapports automatiques et l'échantillonnage des maliciels suspects.

### Désactiver le service de routage des messages WAP Push

Disables data collection about Windows component problems.

## Divers

![Miscellaneous \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Masquer le Référent aux tiers

Le référent est un en-tête HTTP inclus dans les requêtes du navigateur au serveur. Il contient l'URL de la source de la requête. Lorsque vous naviguez d’une page à l’autre, le référent enregistre l’URL de la page initiale. Le serveur qui héberge la page web de destination dispose souvent d’un logiciel qui analyse le référent et en extrait diverses informations.

Enabling the _Hide Referer from third parties_ option prevents third-party websites from seeing this information by altering or removing the header.

Vous pouvez également saisir une valeur personnalisée dans le champ _Référent personnalisé_. Pour utiliser le référent par défaut, laissez le champ vide.

Notez que pour pouvoir filtrer le trafic, les applications AdGuard interceptent les requêtes navigateur-serveur. Les requêtes adressées aux serveurs de publicité, de suivi et d'hameçonnage peuvent être modifiées avant d'être envoyées au serveur ou bloquées complètement.

Il en va de même pour l'option _Masquer le référent aux tiers_ : pour filtrer le trafic, AdGuard intercepte les requêtes HTTP(S) et peut les modifier ou les bloquer avant qu'elles n'atteignent le serveur. Le changement ne se produit qu'une fois que la requête quitte votre navigateur. C’est pourquoi, si vous vérifiez les en-têtes dans le navigateur (par exemple avec les outils de développement de Chrome), vous verrez toujours le référent d’origine. Pour confirmer qu'il a été modifié, vous pouvez utiliser des outils externes tels que Fiddler.

### Masquer l'Agent utilisateur

Lorsque vous visitez un site Web, votre navigateur envoie un en-tête appelé Agent utilisateur dans le cadre de la requête HTTP. Il ressemble à une ligne de texte commençant par "Agent utilisateur:". Cette ligne contient généralement des informations telles que le nom et la version du navigateur, le système d'exploitation et les paramètres de langue.

En activant cette option, AdGuard supprime les informations d'identification de l'agent utilisateur afin que les annonceurs et les traqueurs ne puissent pas les utiliser pour établir votre profil. Si vous le souhaitez, vous pouvez saisir une valeur personnalisée dans le champ _Agent utilisateur personnalisé_. Pour conserver la valeur par défaut, laissez simplement le champ vide.

### Masquer l'adresse IP

AdGuard ne peut pas complètement masquer votre adresse IP réelle, mais il peut la remplacer par une autre afin que les sites Web interprètent votre connexion comme passant par un proxy. Dans certains cas, cela aide à masquer votre véritable IP.

Vous pouvez saisir l'adresse IP de votre choix dans le champ correspondant. Pour utiliser l'adresse IP par défaut, laissez le champ vide.

### Retirer l'en-tête X-Client-Data

Il interdit à Google Chrome d'envoyer des informations sur sa version et ses modifications dans les requêtes aux domaines de Google, y compris les services comme DoubleClick et les analytiques de Google.

### Protection contre l’IAP

![Protect against DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) is a technology that allows ISPs to analyze and filter traffic based on packet content. With this option enabled, AdGuard modifies outgoing packet data to make it harder for DPI systems to identify and analyze your traffic, helping protect your connection privacy.

When you click on _Protect against DPI_, a separate screen opens with three groups of settings:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Split TCP packet at fixed position_ — splits the ClientHello TCP packet at a specified byte position.
- _Split TLS record at fixed position_ — splits the TLS record containing the ClientHello at a specified byte position.
- _Split TLS before SNI_ — splits the ClientHello before the Server Name Indication field.
- _Split TLS after SNI_ — splits the ClientHello after the Server Name Indication field.
- _Split TLS in the middle of SNI_ — splits the ClientHello in the middle of the Server Name Indication field.
- _Split TLS randomly within SNI_ — splits the ClientHello at a random position within the Server Name Indication field.

When using a fixed-position strategy, set the _Split byte position_ (1–1500) to specify where the split occurs.

**HTTP request split** — splits HTTP requests into multiple TCP packets to bypass DPI systems that rely on inspecting complete HTTP requests.

**HTTP space juggling** — manipulates whitespace in HTTP requests to confuse DPI systems that parse HTTP headers, making it harder for them to identify and block specific traffic.

:::caution

This feature can break access to some unencrypted websites. If this feature is enabled in AdGuard for Windows, it may also interfere with the ESET antivirus — ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
