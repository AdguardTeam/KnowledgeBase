---
title: Guide sur les paramètres de bas niveau
sidebar_position: 5
---

:::info

Cet article parle de AdGuard pour iOS, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Comment accéder aux Paramètres de bas niveau

:::caution

La modification de *Les paramètres de bas niveau* peut entraîner des problèmes de performances d'AdGuard, interrompre la connexion Internet ou compromettre votre sécurité et votre confidentialité. Cette section ne doit être ouverte que si vous savez ce que vous faites ou si notre équipe d'assistance vous a demandé de le faire.

:::

Pour accéder à *Paramètres de bas niveau*, appuyez sur l'icône d'engrenage en bas à droite de l'écran pour ouvrir *Paramètres*. Sélectionnez la section *Général* , puis activez le commutateur *Mode avancé* , après quoi la section *Paramètres avancés* apparaîtra ci-dessous. Appuyez sur *Paramètres avancés* pour accéder à la section *Paramètres de bas niveau* .

## Paramètres de bas niveau

### Mode tunnel

Il existe deux modes de tunnel principaux : *Split* et *Full*. Le mode *Split-Tunnel* assure la compatibilité d'AdGuard et des applications dites "VPN personnel". En mode *Full-Tunnel* aucun autre VPN ne peut fonctionner simultanément avec AdGuard.

Il existe une particularité du mode *Split-Tunnel*  : si le proxy DNS ne fonctionne pas bien, par exemple si la réponse du serveur DNS AdGuard n'a pas été renvoyée à temps, iOS le "pénalise" et redirige le trafic via le serveur DNS, spécifié dans les paramètres iOS. Aucune publicité n'est bloquée pour le moment et le trafic DNS n'est pas crypté.

En mode *Full-Tunnel* , seul le serveur DNS spécifié dans les paramètres AdGuard est utilisé. S’il ne répond pas, Internet ne fonctionnera tout simplement pas. L'activation du mode *Full-Tunnel* peut entraîner des performances incorrectes de certains programmes (par exemple, FaceTime) et entraîner des problèmes avec les mises à jour des applications.

Par défaut, AdGuard utilise le mode *Split-Tunnel* comme option la plus stable.

Il existe également un mode supplémentaire appelé *Full-Tunnel (sans icône VPN)*. C'est exactement la même chose que le mode *Full-Tunnel* , mais il est configuré de manière que l'icône VPN ne s'affiche pas dans la ligne système.

### Mode de blocage

Dans ce module vous pouvez choisir la manière dont AdGuard répondra aux requêtes DNS qui devraient être bloquées :

- Défaut - réponse avec une adresse IP nulle en cas de blocage par des règles de type adblock ; réponse avec l'adresse IP spécifiée dans la règle en cas de blocage par des règles de type /etc/hosts
- REFUSED — réponse avec le code REFUSED
- NXDOMAIN — réponse avec le code NXDOMAIN
- IP non spécifiée — réponse avec une adresse IP nulle
- IP personnalisée — réponse avec une adresse IP définie manuellement

### Bloquer IPv6

En déplaçant la bascule vers la droite, vous activez le blocage des requêtes IPv6 (requêtes AAAA). Les requêtes DNS de type AAAA ne seront pas résolues, seules les requêtes IPv4 pourront être traitées.

### Réponse TTL bloquée

Ici, vous pouvez définir la période pendant laquelle un appareil met en cache la réponse à une requête DNS. Pendant la durée de vie spécifiée (en secondes), la requête peut être lue à partir du cache sans redemander au serveur DNS.

### Serveurs Bootstrap

Pour DNS-over-HTTPS, DNS-over-TLS et DNS-over-QUIC, un serveur bootstrap d'amorçage est requis pour obtenir l'adresse IP du serveur DNS principal. S'il n'est pas spécifié, le serveur DNS des paramètres iOS est utilisé comme serveur d'amorçage.

### Serveurs Fallback

Ici, vous pouvez spécifier un serveur alternatif vers lequel une demande sera redirigée si le serveur principal ne répond pas. S’il n’est pas spécifié, le serveur DNS du système sera utilisé comme solution de secours. Il est également possible de spécifier `none`, dans ce cas, aucun serveur de secours ne sera défini et seul le serveur DNS principal sera utilisé.

### Temps de réactualisation de l'app en arrière-plan

Ici, vous pouvez sélectionner la fréquence à laquelle l'application vérifiera les mises à jour des filtres en arrière-plan. Il est à noter que les vérifications de mise à jour ne seront pas effectuées plus souvent que la période spécifiée, mais les intervalles exacts pourraient ne pas être respectés.
