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

La section _Paramètres de bas niveau_ est destinée aux utilisateurs experts. [En savoir plus sur les paramètres de bas niveau](/adguard-for-android/features/low-level-settings/)

![Paramètres de bas niveau \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrage

Cette section vous permet de gérer les paramètres de filtrage HTTPS, les filtres, les scripts utilisateur et de configurer un serveur proxy.

![Filtrage \*mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Filtres

AdGuard bloque les publicités, les traqueurs et les nuisances en appliquant des règles issues de ses filtres. La plupart des fonctionnalités de la section _Protection_ sont alimentées par les [filtres AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Si vous activez la _Protection de base_, le filtre de base AdGuard et le filtre des publicités mobiles AdGuard seront activés automatiquement. Et vice versa : si vous désactivez les deux filtres, la _Protection de base_ sera également désactivée.

![Filtres \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Les filtres activés par défaut sont suffisants pour le bon fonctionnement d'AdGuard. Cependant, si vous souhaitez personnaliser le blocage des publicités, vous pouvez utiliser d'autres filtres AdGuard ou de tiers. Pour ce faire, sélectionnez une catégorie et activez les filtres souhaités. Pour ajouter un filtre personnalisé, appuyez sur _Filtres personnalisés_ → _Ajouter un filtre personnalisé_ et saisissez son URL ou son chemin de fichier.

:::note

Si vous activez trop de filtres, certains sites web peuvent ne pas fonctionner correctement.

:::

[En savoir plus sur les filtres](https://adguard.com/en/blog/what-are-filters.html)

### Scripts utilisateur

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Les scripts utilisateur sont des mini-programmes écrits en JavaScript qui étendent la fonctionnalité d'un ou plusieurs sites web. Pour installer un script utilisateur, vous avez besoin d'un gestionnaire de scripts utilisateur. AdGuard possède cette fonctionnalité et vous permet d'ajouter des scripts utilisateur via une URL ou à partir d'un fichier.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra est un script utilisateur personnalisé qui bloque les publicités complexes et les mécanismes qui réinjectent des publicités dans les sites web.

#### Désactiver AMP

Désactiver AMP est un script utilisateur qui désactive les [Pages mobiles accélérées](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) dans les résultats de recherche Google.

### Réseau

#### Filtrage HTTPS

Pour bloquer les publicités et traqueurs sur la plupart des sites web et dans la plupart des applications, AdGuard doit filtrer leur trafic HTTPS. [En savoir plus sur le filtrage HTTPS](/general/https-filtering/what-is-https-filtering)

##### Certificats de sécurité

Pour gérer le trafic chiffré, AdGuard installe son certificat CA sur votre appareil. C'est sûr : le trafic est filtré localement et AdGuard vérifie la sécurité de la connexion.

Sur les anciennes versions d'Android, le certificat est installé automatiquement. Sur Android 11 et versions ultérieures, vous devez l'installer manuellement. [Instructions d'installation](/adguard-for-android/solving-problems/manual-certificate/)

Le certificat CA dans le stockage utilisateur est suffisant pour filtrer le trafic HTTPS dans les navigateurs et certaines applications. Cependant, certaines applications n'acceptent que les certificats provenant du stockage système. Pour filtrer le trafic HTTPS dans celles-ci, vous devez installer le certificat CA d'AdGuard dans le stockage système. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### Applications filtrées en HTTPS

Cette section contient la liste des applications pour lesquelles AdGuard filtre le trafic HTTPS. Veuillez noter que ce paramètre peut être appliqué à toutes les applications uniquement si vous avez des certificats CA dans le stockage d'utilisateur et dans le stockage système.

##### Sites web filtrés en HTTPS

Ce paramètre vous permet de gérer les sites web pour lesquels AdGuard doit filtrer le trafic HTTPS.

Le filtrage HTTPS permet à AdGuard de filtrer le contenu des requêtes et des réponses, mais nous ne collectons ni ne stockons jamais ces données. Cependant, pour renforcer la sécurité, nous [excluons les sites contenant des informations potentiellement sensibles du filtrage HTTPS](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Vous pouvez également ajouter des sites que vous considérez nécessaires aux exclusions en sélectionnant l'un des modes :

- Exclure certains sites du filtrage HTTPS
- Filtrer le trafic HTTPS uniquement sur les sites ajoutés aux exclusions

Par défaut, nous ne filtrons également pas les sites Web dotés de certificats de validation étendue (EV), tels que les sites financiers. Si nécessaire, vous pouvez activer l'option _Filtrer les sites web avec des certificats EV_.

#### Proxy

Vous pouvez configurer AdGuard pour qu'il redirige tout le trafic de votre appareil via votre serveur proxy. [Comment configurer un proxy sortant](/adguard-for-android/solving-problems/outbound-proxy)

Dans cette section, vous pouvez également configurer un VPN tiers pour fonctionner avec AdGuard, si votre fournisseur VPN le permet.

Sous _Applications fonctionnant via un proxy_, vous pouvez sélectionner des applications qui achemineront leur trafic via votre proxy spécifié. Si vous avez activé l'_Intégration avec AdGuard VPN_, ce paramètre joue le rôle d'exclusions d'applications d'AdGuard VPN : il vous permet de spécifier les applications à acheminer via le tunnel AdGuard VPN.

#### Mode de routage

Cette section vous permet de choisir la méthode de filtrage du trafic.

- _VPN local_ filtre le trafic à travers un VPN créé localement. C'est le mode le plus fiable. En raison des restrictions d'Android, c'est également la seule méthode de filtrage de trafic disponible sur les appareils non rootés.

:::note

Le mode _VPN local_ ne permet pas d'utiliser AdGuard simultanément avec d'autres VPN. Pour utiliser un autre VPN avec AdGuard, vous devez le reconfigurer pour fonctionner en mode proxy et configurer un proxy sortant dans AdGuard. Pour AdGuard VPN, cela se fait automatiquement à l'aide du [_Mode intégré_](/adguard-for-android/features/integration-with-vpn).

:::

- _Le proxy automatique_ est une méthode alternative de routage du trafic qui ne nécessite pas l'utilisation d'un VPN. L’un des avantages majeurs est qu’il peut être exécuté en parallèle avec un VPN. Ce mode nécessite un accès root.

:::note

Please note that DNS filtering will still be active in _Automatic proxy_ routing mode, and your device may not be able to filter DNS requests from specific apps. In _VPN_ routing mode, apps are excluded from the local VPN by system means. Therefore, the system resolver sees which apps are included in the VPN and which are not. It either allows them into the local VPN or lets them bypass it. However, DNS requests come from the system resolver, not the application. In _Automatic proxy_ mode, it is only possible to exclude traffic from applications, not their DNS queries, because AdGuard sees them as system queries.

:::

- _Le proxy manuel_ implique la configuration d'un serveur proxy sur un port spécifique, qui peut ensuite être configuré dans les paramètres Wi-Fi. Ce mode nécessite un accès root pour Android 10 et versions ultérieures.

## Licence

Dans cette section, vous pouvez trouver des informations sur votre licence et la gérer :

- Acheter une licence AdGuard pour activer [les fonctionnalités de la version complète](/adguard-for-android/features/free-vs-full)
- Se connecter à votre compte AdGuard ou saisir la clef de licence pour activer votre licence
- S'inscrire pour activer votre période d'essai de 7 jours si vous ne l'avez pas encore utilisée
- Rafraîchir le statut de la licence via le menu à trois points (⋮)
- Ouvrir le compte AdGuard pour gérer votre licence
- Réinitialiser votre licence — par exemple, si vous avez atteint la limite d'appareils pour cette licence et que vous souhaitez en appliquer une autre

![Écran de licence \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Assistance

Utilisez cette section si vous avez des questions ou suggestions concernant AdGuard pour Android. Nous vous recommandons de consulter _[FAQ](https://adguard.com/support/adguard_for_android.html)_ ou cette base de connaissances avant de contacter le support.

![Assistance \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Si vous remarquez une publicité manquée, veuillez la signaler via _Signaler un blocage incorrect_.

Pour un comportement inattendu de l'application, sélectionnez _Signaler un bug_. Si possible, décrivez votre problème en détail et ajoutez les journaux de l'application. [Comment décrire un problème](/guides/report-bugs/#how-to-describe-a-problem)

Pour vos suggestions, utilisez _Demander une fonctionnalité_.

:::note

GitHub est une méthode alternative pour signaler des bugs et suggérer de nouvelles fonctionnalités. [Instructions et liens vers les dépôts](/guides/report-bugs/#adguard-for-android)

:::
