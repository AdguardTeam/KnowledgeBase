---
title: Gestion des applications
sidebar_position: 2
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Le module _Gestion des applications_ est accessible en appuyant sur l'onglet _Gestion des applications_ (troisième icône à partir de la gauche en bas de l'écran). Cette section vous permet de gérer les autorisations et les paramètres de filtrage pour toutes les applications installées sur votre appareil.

![Gestion des applications \*mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

En appuyant sur une application, vous pouvez gérer ses paramètres :

- Dirigez son trafic via AdGuard
- Bloquez les publicités et les traqueurs dans cette application (_Filtrer le contenu de l'application_)
- Filtrez son trafic HTTPS (pour les applications hors du navigateur cela nécessite [l'installation du certificat CA d'AdGuard dans le stockage système](/adguard-for-android/solving-problems/https-certificate-for-rooted/), disponible sur les appareils rootés)
- Dirigez-le à travers votre serveur proxy spécifié ou AdGuard VPN en mode intégré

![Gestion des applications : Chrome \*mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

À partir du menu contextuel, vous pouvez également accéder aux statistiques de l'application.

![Gestion des applications : menu contextuel Chrome \*mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Applications "sans problème" et "problématiques"

La plupart des applications fonctionnent correctement lorsqu'elles sont filtrées. Le trafic de ces applications est acheminé par AdGuard et filtré par défaut.

Certaines applications, telles que Download Manager, la radio, les applications système avec UID 1000 et 1001 (par exemple, les services Google Play), sont "problématiques" et peuvent fonctionner de manière incorrecte lorsqu'elles sont acheminées via AdGuard. C'est pourquoi vous pouvez voir l'avertissement suivant lorsque vous essayez d'acheminer ou de filtrer toutes les applications :

![Boîte de dialogue Diriger toutes les applications \*mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Pour garantir le bon fonctionnement de toutes les applications installées sur votre appareil, nous vous recommandons vivement de ne faire passer que des applications sans problème par AdGuard. Vous pouvez voir la liste complète des applications non recommandées pour le filtrage dans _Paramètres_ → _Mode général_ → _Avancés_ → _Paramètres de bas niveau_ → _Protection_ → _Applications exclues_.
