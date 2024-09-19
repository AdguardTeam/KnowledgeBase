---
title: Protect Mail Activity et AdGuard
sidebar_position: 8
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## En bref

L'application Mail d'Apple utilise désormais un proxy pour masquer l'adresse IP de l'utilisateur lors du téléchargement d'images à partir d'e-mails.

![Protection de la confidentialité de Mail](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

Pourtant, cela ne fonctionnera pas s'il y a une connexion VPN active. AdGuard étant considéré comme un VPN, les images ne seront pas préchargées automatiquement.

Apple explique ce problème [ici](https://support.apple.com/HT212797).

## Plus de détails

AdGuard pour Mac utilise désormais le filtrage de socket intégré à macOS basé sur l'API des extensions réseau. Ce nouveau mécanisme, plutôt bogué, a remplacé les bonnes vieilles extensions du noyau. Au cours des 1,5 dernières années, nous avons signalé plus de 20 (!) bugs à Apple concernant leur nouvelle méthode de filtrage.

L'API des extensions réseau a une configuration de type VPN avec une liste d'entrées de type route. Sur Big Sur, AdGuard a utilisé des règles "split-tunnel" pour éviter de créer la règle "route par défaut" qui pose des problèmes sur les premières versions de Big Sur. Ces problèmes ont été résolus dans Monterey et rien ne nous empêche donc d'utiliser la règle de la "route par défaut".

Sur Monterey, le Relais privé iCloud a été introduit. Les fonctionnalités de confidentialité de Mail.app utilisent également des serveurs de Relais privé.

Par conséquent, AdGuard ne peut pas fonctionner avec le Relais privé iCloud et les fonctionnalités de confidentialité de l'application Mail :

1. Le Relais privé iCloud est appliqué aux connexions au niveau de la bibliothèque, avant qu'elles n'atteignent le niveau du socket, où opère AdGuard.
2. Le Relais privé iCloud utilise QUIC, qu'AdGuard ne peut pas filtrer car le filtrage HTTP/3 n'est pas encore disponible.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. Lorsque vous utilisez le Relais privé iCloud en mettant AdGuard en mode "split-tunnel", vous ne pouvez pas ouvrir de sites web dans Safari.
5. Pour contourner ce problème pour Monterey, nous appliquons la règle de la "route par défaut". Lorsque le Relais privé voit cette règle, il se désactive automatiquement. Ainsi, AdGuard fonctionne parfaitement sur Monterey, mais le Relais privé iCloud est désactivé.

`network.extension.monterey.force.split.tunnel` restaure le comportement de "Big Sur", mais cette option peut interrompre l'accès aux sites web à cause de (3) et (4). Nous continuons à chercher une solution à ce problème. L'une des options consiste à mettre en œuvre le filtrage HTTP/3.

## Solution recommandée

À ce stade, nous vous recommandons d'utiliser un service VPN plus traditionnel, tel que [AdGuard VPN](https://adguard-vpn.com/), au lieu des nouvelles fonctionnalités de confidentialité d'Apple.
