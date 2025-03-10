---
title: Protection contre le suivi
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Tracking protection_ (formerly known as _Stealth Mode_) prevents websites from collecting information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking protection_ has three pre-configured levels of privacy protection (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Here are the active features of the pre-configured levels:

1. **Standard**

    a. _Blocage du suivi_. Cette fonctionnalité utilise le _Filtre AdGuard de protection contre le suivi_ pour vous protéger des compteurs en ligne et des outils analytiques web

    b. _Demander aux sites web de ne pas vous suivre_. Cette fonctionnalité envoie les signaux du [Contrôle global de la confidentialité](https://globalprivacycontrol.org/) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez, demandant aux applications web de désactiver le suivi de votre activité

    c. _Retirer l'en-tête X-Client-Data_. Il interdit à Google Chrome d'envoyer des informations sur sa version et ses modifications aux domaines de Google (y compris DoubleClick et les analytiques de Google)

2. **Haut**

    a. _Blocage du suivi_. Cette fonctionnalité utilise le _Filtre AdGuard de protection contre le suivi_ pour vous protéger des compteurs en ligne et des outils analytiques web

    b. _Supprimer les paramètres de suivi des URL_. Cette fonctionnalité utilise le _Filtre AdGuard du suivi des URL_ pour retirer les paramètres de suivi, tels que `utm_*` et `fb_ref`, des URL de page

    c. _Masquez vos requêtes de recherche_. Cette fonctionnalité masque les requêtes pour les sites Web visités depuis un moteur de recherche

    d. _Demander aux sites web de ne pas vous suivre_. Cette fonctionnalité envoie les signaux du [Contrôle global de la confidentialité](https://globalprivacycontrol.org/) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez, demandant aux applications web de désactiver le suivi de votre activité

    e. _Autodéstruction des cookies tiers_. Cette fonctionnalité limite la durée de vie des cookies tiers à 180 minutes

    :::caution

    Cette fonctionnalité supprime tous les cookies tiers après leur expiration forcée. Cela inclut vos connexions via des réseaux sociaux ou d'autres services tiers. Vous devrez peut-être vous reconnecter périodiquement à certains sites Web ou rencontrer d'autres problèmes liés aux cookies. Pour bloquer uniquement les cookies de suivi, utilisez le niveau de protection _Standard_.

    :::

    f. _Retirer l'en-tête X-Client-Data_. Cette fonctionnalité empêche Google Chrome d'envoyer ses informations de version et de modifications aux domaines Google (y compris DoubleClick et Google Analytics)

3. **Extrême** (anciennement connu sous le nom _Ultimate_)

    a. _Blocage du suivi_. Cette fonctionnalité utilise le _Filtre AdGuard de protection contre le suivi_ pour vous protéger des compteurs en ligne et des outils analytiques web

    b. _Supprimer les paramètres de suivi des URL_. Cette fonctionnalité utilise le _Filtre AdGuard du suivi des URL_ pour retirer les paramètres de suivi, tels que `utm_*` et `fb_ref`, des URL de page

    c. _Masquez vos requêtes de recherche_. Cette fonctionnalité masque les requêtes pour les sites Web visités depuis un moteur de recherche

    d. _Demander aux sites web de ne pas vous suivre_. Cette fonctionnalité envoie les signaux du [Contrôle global de la confidentialité](https://globalprivacycontrol.org/) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez, demandant aux applications web de désactiver le suivi de votre activité

    e. _Autodéstruction des cookies tiers_. Cette fonctionnalité limite la durée de vie des cookies tiers à 180 minutes

    :::caution

    Cette fonctionnalité supprime tous les cookies tiers après leur expiration forcée. Cela inclut vos connexions via des réseaux sociaux ou d'autres services tiers. Vous devrez peut-être vous reconnecter périodiquement à certains sites Web ou rencontrer d'autres problèmes liés aux cookies. Pour bloquer uniquement les cookies de suivi, utilisez le niveau de protection _Standard_.

    :::

    f. _Bloquer WebRTC_. Cette fonctionnalité bloque WebRTC, une vulnérabilité connue qui peut divulguer votre adresse IP réelle même si vous utilisez un proxy ou un VPN

    g. _Bloquer l'API Push_. Cette fonctionnalité empêche vos navigateurs de recevoir des messages push des serveurs

    h. _Bloquer l'API de position_. Cette fonctionnalité empêche les navigateurs d'accéder à vos données GPS et de déterminer votre emplacement

    i. _Masquer le référent auprès des tiers_. Cette fonctionnalité empêche les tiers de savoir quels sites Web vous visitez. Il masque l'en-tête HTTP qui contient l'URL de la page initiale et le remplace par une valeur par défaut ou personnalisée que vous pouvez définir

    j. _Masquer votre agent utilisateur_. Cette fonctionnalité retire les informations d'identification de l'Agent utilisateur de l'en-tête, qui inclut généralement le nom et la version du navigateur, le système d'exploitation et les paramètres de langue

    k. _Retirer l'en-tête X-Client-Data_. Cette fonctionnalité empêche Google Chrome d'envoyer ses informations de version et de modifications aux domaines Google (y compris DoubleClick et Google Analytics)

Vous pouvez ajuster des paramètres individuels dans _Protection contre le suivi_ et élaborer une configuration personnalisée. Chaque paramètre possède une description qui vous aidera à comprendre son rôle. [Découvrez-en plus sur les différents paramètres de _Protection contre le pistage_](/general/stealth-mode) et utilisez-les avec prudence, car certains peuvent interférer avec la fonctionnalité des sites Web et des extensions de navigateur.
