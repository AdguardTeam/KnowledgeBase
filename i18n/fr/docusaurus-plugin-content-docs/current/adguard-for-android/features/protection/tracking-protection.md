---
title: Protection contre le suivi
sidebar_position: 2
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Le module de Protection contre le suivi est accessible en appuyant sur l'onglet _Protection_ (deuxième icône en partant de la gauche en bas de l'écran) puis en sélectionnant _Protection contre le suivi_.

_La protection contre le suivi_ (anciennement connue sous le nom de _Mode furtif_) empêche les sites Web de recueillir des informations vous concernant, telles que vos adresses IP, des informations sur votre navigateur et votre système d'exploitation, la résolution de l'écran et la page à partir de laquelle vous êtes arrivé ou avez été redirigé. Le module peut également bloquer les cookies que les sites Web utilisent pour marquer votre navigateur, enregistrer vos paramètres personnels et préférences d'utilisateur, ou vous reconnaître lors de votre prochaine visite.

![Protection contre le suivi \*mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_La protection contre le suivi_ a trois niveaux préconfigurés de protection de la confidentialité (_Standard_, _Élevé_, et _Extrême_) et un niveau défini par l'utilisateur (_Personnalisé_).

Voici les fonctionnalités actives des niveaux préconfigurés :

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
