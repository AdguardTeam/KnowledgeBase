---
title: Protection contre le suivi
sidebar_position: 2
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. Le module peut également bloquer les cookies que les sites Web utilisent pour marquer votre navigateur, enregistrer vos paramètres personnels et préférences d'utilisateur, ou vous reconnaître lors de votre prochaine visite.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Voici les fonctionnalités actives des niveaux préconfigurés :

1. **Standard**

   a. _Blocage du suivi_. Cette fonctionnalité utilise le _Filtre AdGuard de protection contre le suivi_ pour vous protéger des compteurs en ligne et des outils analytiques web

   b. _Ask websites not to track me_. Cette fonctionnalité envoie les signaux du [Contrôle global de la confidentialité](https://globalprivacycontrol.org/) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez, demandant aux applications web de désactiver le suivi de votre activité

   c. _Retirer l'en-tête X-Client-Data_. Il interdit à Google Chrome d'envoyer des informations sur sa version et ses modifications aux domaines de Google (y compris DoubleClick et les analytiques de Google)

2. **Haut**

   a. _Blocage du suivi_. Cette fonctionnalité utilise le _Filtre AdGuard de protection contre le suivi_ pour vous protéger des compteurs en ligne et des outils analytiques web

   b. _Supprimer les paramètres de suivi des URL_. Cette fonctionnalité utilise le _Filtre AdGuard du suivi des URL_ pour retirer les paramètres de suivi, tels que `utm_*` et `fb_ref`, des URL de page

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Cette fonctionnalité envoie les signaux du [Contrôle global de la confidentialité](https://globalprivacycontrol.org/) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez, demandant aux applications web de désactiver le suivi de votre activité

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Cette fonctionnalité supprime tous les cookies tiers après leur expiration forcée. Cela inclut vos connexions via des réseaux sociaux ou d'autres services tiers. Vous devrez peut-être vous reconnecter périodiquement à certains sites Web ou rencontrer d'autres problèmes liés aux cookies. Pour bloquer uniquement les cookies de suivi, utilisez le niveau de protection _Standard_.

   :::

   f. _Retirer l'en-tête X-Client-Data_. Cette fonctionnalité empêche Google Chrome d'envoyer ses informations de version et de modifications aux domaines Google (y compris DoubleClick et Google Analytics)

3. **Extrême** (anciennement connu sous le nom _Ultimate_)

   a. _Blocage du suivi_. Cette fonctionnalité utilise le _Filtre AdGuard de protection contre le suivi_ pour vous protéger des compteurs en ligne et des outils analytiques web

   b. _Supprimer les paramètres de suivi des URL_. Cette fonctionnalité utilise le _Filtre AdGuard du suivi des URL_ pour retirer les paramètres de suivi, tels que `utm_*` et `fb_ref`, des URL de page

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Cette fonctionnalité envoie les signaux du [Contrôle global de la confidentialité](https://globalprivacycontrol.org/) et [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) aux sites Web que vous visitez, demandant aux applications web de désactiver le suivi de votre activité

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Cette fonctionnalité supprime tous les cookies tiers après leur expiration forcée. Cela inclut vos connexions via des réseaux sociaux ou d'autres services tiers. Vous devrez peut-être vous reconnecter périodiquement à certains sites Web ou rencontrer d'autres problèmes liés aux cookies. Pour bloquer uniquement les cookies de suivi, utilisez le niveau de protection _Standard_.

   :::

   f. _Bloquer WebRTC_. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   g. _Bloquer l'API Push_. This feature blocks push notifications from websites

   h. _Bloquer l'API de position_. Cette fonctionnalité empêche les navigateurs d'accéder à vos données GPS et de déterminer votre emplacement

   i. _Masquer le référent auprès des tiers_. Cette fonctionnalité empêche les tiers de savoir quels sites Web vous visitez. Il masque l'en-tête HTTP qui contient l'URL de la page initiale et le remplace par une valeur par défaut ou personnalisée que vous pouvez définir

   j. _Hide User-Agent_. Cette fonctionnalité retire les informations d'identification de l'Agent utilisateur de l'en-tête, qui inclut généralement le nom et la version du navigateur, le système d'exploitation et les paramètres de langue

   k. _Retirer l'en-tête X-Client-Data_. Cette fonctionnalité empêche Google Chrome d'envoyer ses informations de version et de modifications aux domaines Google (y compris DoubleClick et Google Analytics)

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
