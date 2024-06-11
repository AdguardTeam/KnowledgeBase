---
title: Réseau
sidebar_position: 9
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment il fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Général

![Réseau](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Filtrage automatique des applications

Par défaut, AdGuard bloque les annonces et les traqueurs dans la plupart des navigateurs ([Tor Browser est une exception](/adguard-for-mac/solving-problems/tor-filtering)). Ce paramètre permet également à AdGuard de bloquer les publicités dans les applications.

Pour gérer les applications filtrées, cliquez sur _Applications_.

### Filtrage du protocole HTTPS

Ce paramètre permet à AdGuard de filtrer le protocole sécurisé HTTPS, actuellement utilisé par la plupart des sites web et des applications. Par défaut, les sites web contenant des informations potentiellement sensibles, tels que les services bancaires, ne sont pas filtrés. Pour gérer les exclusions HTTPS, cliquez sur _Exclusions_.

Par défaut, AdGuard ne filtre pas les sites web avec des certificats de Validation Étendue (EV). Si nécessaire, vous pouvez activer l'option _Filtrer les sites web avec des certificats EV_.

## Proxy Sortant

Vous pouvez configurer AdGuard pour acheminer tout le trafic de votre appareil via votre serveur proxy.

## Proxy HTTP

Vous pouvez utiliser AdGuard comme serveur proxy HTTP. Cela vous permettra de filtrer le trafic sur les autres appareils connectés au proxy.

Assurez-vous que votre Mac et votre autre appareil sont connectés au même réseau et entrez le port proxy de l'appareil que vous souhaitez acheminer via votre serveur proxy (généralement dans les paramètres réseau). Pour filtrer également le trafic HTTPS, [transférez le certificat proxy d'AdGuard](http://local.adguard.org/cert) vers cet appareil. [Apprenez plus sur l'installation d'un certificat proxy](/guides/proxy-certificate)
