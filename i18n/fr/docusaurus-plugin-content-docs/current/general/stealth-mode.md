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

### Autodétruire les cookies tiers {#3p-cookie}

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

### Désactivez le cache pour les requêtes des tiers {#3p-cache}

Lorsqu'un navigateur accède à une page, le serveur lui attribue un ETag. Cet ETag est utilisé par le navigateur pour mettre en cache le contenu de la page. Lors de requêtes ultérieures, le navigateur envoie l'ETag au serveur correspondant, permettant ainsi au serveur de connaître l'identité du visiteur. Tant que les fichiers du site sont mis en cache, l'ETag est envoyé à chaque fois que votre navigateur accède à ce site. Si le site intègre du contenu provenant d'un autre serveur (comme une image ou une iframe), ce serveur peut suivre vos activités à votre insu.

### Block third-party Authorization header {#3p-auth}

"Authorization" header value is cached by the browser, and then is sent alongside every request to that domain. It means that it can be used for tracking purposes just like cookies.

## Browser API {#browser-api}

### Block WebRTC {#webrtc}

WebRTC (Web Real-Time Communication) is a technology that allows direct streaming of data between browsers and apps. It can let others know your true IP address, even if you use a proxy or VPN. Enabling this option can disrupt the work of certain browser applications, such as messengers, chats, cinemas, or games.

### Block Push API {#push}

The Push API enables servers to send messages to web applications regardless of the activity status of your browser. Thus, you may see notifications from various websites even if your browser is hidden in the tray or not launched. Enable this option to block the browser's Push API completely.

### Block Location API {#location}

Enabling this option will prevent the browser from sending GPS data that could be used to determine your location, modify your search results, or otherwise influence your web experience.

### Block Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly affect website loading time. Turning this setting on makes AdGuard block browsers' ability to detect components (such as plugins and ActiveXObject objects) that allow Flash to display content. This effectively means that browsers are unable to support Flash.

### Block Java {#java}

Some websites and web services still use the old technology to support Java plugins. The Java plugin API, which is the basis of Java plugins, has serious security flaws. For security purposes, you can disable such plugins. Nevertheless, even if you decide to use the "Block Java" option, JavaScript will still be enabled.

## Divers {#miscellaneous}

### Hide Referer from third parties {#referer}

Referer is an HTTP header used in browser-to-server requests. It contains the URL of the request source. When you navigate from one page to another, Referer saves the URL of the initial page. The server that hosts the destination web page often has software that parses Referer and extracts various pieces of information from it. Enabling the *Hide Referer from third-parties* option hides the current website from third-party sites by altering the HTTP header.

You can also set an arbitrary value for Referer by entering it into the *Custom Referer* field. To use default Referer, leave the field blank.

Note that to be able to filter traffic, AdGuard applications 'intercept' browser-to-server requests. Requests to ad, tracking, and phishing servers may be altered before sending them to the server or blocked completely. Same goes for the *Hide Referer from third parties* option: AdGuard intercepts HTTP(S) requests, in particular to remove or change the Referer header if this option is enabled. However, it happens only after these requests “leave” the browser. This means that if you monitor Referer inside the browser (for example, with the help of Chrome's Developer Tools), you will see the original Referer because the request hasn't reached AdGuard yet. You can use software like [Fiddler](https://www.telerik.com/fiddler) to make sure that Referer gets altered correctly.

On the opposite, due to the nature of all browser extensions, AdGuard Browser Extension works 'inside' the browser. It will alter the Referer right then and there, so Developer Tools will show the desired Referer for your requests.

### Hide your User-Agent {#useragent}

When you visit a website, your browser sends its information to the server. It looks like a text line that is part of an HTTP request that begins with "User-Agent:". It usually includes the name and version of the browser, the operating system, and language settings. We cut User-Agent from identifying information so that advertisers cannot obtain it.

You can also set an arbitrary value for User-Agent by entering it into the Custom User-Agent field. To use default User-Agent, leave the field blank.

### Hide your IP address {#ip}

Stealth Mode cannot hide your IP address. However, we can conceal it so that websites you visit will think you are a proxy. Sometimes this helps, and websites ignore your true IP address.

You can set an arbitrary IP address, which you would like others to perceive as yours, by simply entering it into the corresponding field. To use the default IP address, leave the field blank.

### Remove X-Client-Data header from HTTP requests {#xclientdata}

It forbids Google Chrome from sending its version and modification information with requests to Google domains (including Double Click and Google Analytics).

### Protect from DPI {#dpi}

The Deep Packet Inspection is a system of deep analysis and filtering of traffic by packet content, as well as the accumulation of statistical data. Using this technology, ISPs have the ability to control the passing traffic and limit access to content for their clients.

AdGuard can modify outgoing packet data so that the client does not fall under the DPI blocking criteria. This means that by enabling this option, users can get access to the content they want. Not all DPI systems can be bypassed at this time, but we are constantly working to improve this.

The "Protect from DPI" feature is already implemented in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android.
