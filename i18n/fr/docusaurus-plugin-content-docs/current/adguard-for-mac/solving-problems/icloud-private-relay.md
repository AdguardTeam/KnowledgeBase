---
title: Relais privé iCloud et AdGuard
sidebar_position: 7
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Brève description du problème

Par défaut, AdGuard utilise la "route par défaut" qui désactive le Relais Privé iCloud.

Actuellement, AdGuard et le Relais privé iCloud ne peuvent pas fonctionner en même temps. AdGuard ne peut pas bloquer les publicités car le Relais privé iCloud crypte le trafic avant qu'AdGuard puisse filtrer les connexions réseau. Lorsque le Relais privé iCloud est actif, tout filtrage (y compris le filtrage local) devient impossible. AdGuard ne peut donc pas filtrer le trafic ou effectuer un filtrage DNS dans Safari. Cependant, AdGuard filtre toujours le trafic dans d’autres navigateurs. Pour continuer à utiliser le Relais privé iCloud, pensez à installer [AdGuard pour Safari](https://adguard.com/adguard-safari/overview.html).

Il en va de même pour l’utilisation de n’importe quelle application VPN sur Mac : vous devez choisir entre l'utilisation du Relais privé iCloud ou d'un service VPN.

## Plus de détails

AdGuard pour Mac utilise désormais le filtrage de socket intégré à macOS basé sur l'API des extensions réseau. Ce nouveau mécanisme, plutôt bogué, a remplacé les bonnes vieilles extensions du noyau. Au cours des 1,5 dernières années, nous avons signalé plus de 20 (!) bugs à Apple concernant leur nouvelle méthode de filtrage.

L'API des extensions réseau a une configuration de type VPN avec une liste d'entrées de type route. Sur Big Sur, AdGuard a développé des règles "split-tunnel" pour éviter de créer la règle "route par défaut" qui pose des problèmes sur les premières versions de Big Sur.

Sur Monterey, le Relais privé iCloud a été introduit. Les fonctionnalités de confidentialité de l'application Mail utilisent également des serveurs de relais privés.

As a consequence, AdGuard can’t work together with iCloud Private Relay and the Mail app privacy features:

1. Le Relais privé iCloud est appliqué aux connexions au niveau de la bibliothèque, avant qu'elles n'atteignent le niveau du socket, où opère AdGuard.
2. iCloud Private Relay is implemented with HTTP/3 CONNECT proxies.
3. Since AdGuard does not filter CONNECT HTTP/3 requests yet, it attempts to downgrade HTTP/3 proxy connections to HTTP/1.1, which results in blocking iCloud Private Relay traffic.
4. When you use iCloud Private Relay and switch AdGuard into the Split-Tunnel mode, you can’t open websites in Safari.
5. To work around this issue for Monterey, we apply the “default route” rule. Lorsque le Relais privé voit cette règle, il se désactive automatiquement. Ainsi, AdGuard fonctionne parfaitement sur Monterey, mais le Relais privé iCloud est désactivé.

The `network.extension.monterey.force.split.tunnel` option restores the “Big Sur” behavior, but this option may break access to websites due to (3) and (4). Nous continuons à chercher une solution à ce problème. One of the options is implementing HTTP/3 proxy filtering.

## Solution recommandée

Nous vous recommandons d'utiliser AdGuard avec un service VPN plus traditionnel tel que [AdGuard VPN](https://adguard-vpn.com/).

## Solution alternative

Vous pouvez empêcher AdGuard d'utiliser la "route par défaut" en désactivant la "route par défaut". Cela peut être fait via Paramètres avancés → `network.extension.monterey.force.split.tunnel`.

![Désactiver la route par défaut dans les paramètres avancés *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Gardez à l’esprit que, dans ce cas, vous serez confronté aux problèmes décrits ci-dessus.
