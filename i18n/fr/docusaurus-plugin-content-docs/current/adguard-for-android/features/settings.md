---
title: Paramètres
sidebar_position: 4
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicités multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

L'onglet _Paramètres_ est accessible en appuyant sur l'icône la plus à droite en bas de l'écran. Cette section contient divers paramètres, des informations sur votre application, votre licence et abonnement, ainsi que diverses ressources d'assistance.

## Général

Cette section vous aide à gérer l'apparence et le comportement de l'application : vous pouvez définir le thème de couleur, la langue, gérer les notifications, et plus encore. Si vous souhaitez aider l'équipe AdGuard à détecter les plantages et à étudier l'ergonomie, vous pouvez activer _Signaler les plantages automatiquement_ et _Envoyer des données techniques et d'interaction_.

![Général \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Dans _Mises à jour de l'application et des filtres_, vous pouvez configurer les mises à jour automatiques des filtres et choisir un canal de mise à jour de l'application. Choisissez _Version_ pour plus de stabilité et _Bêta_ ou _Nightly_ pour un accès anticipé aux nouvelles fonctionnalités.

![Mises à jour \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Paramètres avancés

_L'automatisation_ vous permet de gérer AdGuard via des applications du type Tasker.

_Watchdog_ aide à protéger AdGuard contre la désactivation par le système ([en savoir plus sur le mode d'économie de batterie d'Android](/adguard-for-android/solving-problems/background-work/)). La valeur que vous saisissez sera l'intervalle en secondes entre les vérifications de watchdog.

Le _Niveau de journalisation_ définit les données sur le fonctionnement de l'application qui doivent être enregistrées. Par défaut, l'application enregistre les événements. Le niveau _Debug_ enregistre plus d'événements — activez-le si l'équipe d'AdGuard le demande pour l'aider à mieux comprendre le problème. [En savoir plus sur la collecte et l'envoi de journaux](/adguard-for-android/solving-problems/log/)

![Paramètres avancés \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

La section _Paramètres de bas niveau_ est destinée aux utilisateurs experts. [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Paramètres de bas niveau \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrage

Cette section vous permet de gérer les paramètres de filtrage HTTPS, les filtres, les scripts utilisateur et de configurer un serveur proxy.

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### Filtres

AdGuard bloque les publicités, les traqueurs et les nuisances en appliquant des règles issues de ses filtres. La plupart des fonctionnalités de la section _Protection_ sont alimentées par les [filtres AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Si vous activez la _Protection de base_, le filtre de base AdGuard et le filtre des publicités mobiles AdGuard seront activés automatiquement. Et vice versa : si vous désactivez les deux filtres, la _Protection de base_ sera également désactivée.

![Filtres \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Les filtres activés par défaut sont suffisants pour le bon fonctionnement d'AdGuard. Cependant, si vous souhaitez personnaliser le blocage des publicités, vous pouvez utiliser d'autres filtres AdGuard ou de tiers. Pour ce faire, sélectionnez une catégorie et activez les filtres souhaités. Pour ajouter un filtre personnalisé, appuyez sur _Filtres personnalisés_ → _Ajouter un filtre personnalisé_ et saisissez son URL ou son chemin de fichier.

:::note

Si vous activez trop de filtres, certains sites web peuvent ne pas fonctionner correctement.

:::

[En savoir plus sur les filtres](https://adguard.com/en/blog/what-are-filters.html)

### Extensions

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Réseau

#### Filtrage HTTPS

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. Si nécessaire, vous pouvez activer l'option _Filtrer les sites web avec des certificats EV_.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## Licence

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Assistance

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
