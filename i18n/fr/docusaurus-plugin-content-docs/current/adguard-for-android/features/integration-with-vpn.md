---
title: Intégration avec AdGuard VPN
sidebar_position: 8
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pour Android crée un VPN local pour filtrer le trafic. Ainsi, d’autres applications VPN ne peuvent pas être utilisées pendant qu’AdGuard pour Android est en cours d’exécution. Cependant, les applications AdGuard et [AdGuard VPN](https://adguard-vpn.com/) ont des modes intégrés qui vous permettent de les utiliser ensemble.

Dans ce mode, AdGuard VPN agit comme un proxy sortant par lequel le Bloqueur AdGuard achemine son trafic. Cela permet à AdGuard de créer une interface VPN et de bloquer les publicités et les traqueurs localement, tandis qu'AdGuard VPN dirige tout le trafic à travers un serveur distant.

Si vous désactivez AdGuard VPN, AdGuard cessera de l'utiliser comme proxy sortant. Si vous désactivez AdGuard, AdGuard VPN redirigera le trafic via sa propre interface VPN.

Si vous disposez du bloqueur de publicités AdGuard et installez AdGuard VPN, l'application Bloqueur le détectera et activera automatiquement l'_Intégration avec AdGuard VPN_. La même chose se produit dans l’autre sens. Veuillez noter que si vous avez activé l'intégration, vous ne pourrez pas gérer les exclusions d'application et vous connecter aux serveurs DNS depuis l'application AdGuard VPN. Vous pouvez spécifier des applications à faire passer par votre Tunnel VPN via _Paramètres_ → _Filtrage_ → _Réseau_ → _Proxy_ → _Applications fonctionnant via proxy_. Pour sélectionner un serveur DNS, ouvrez AdGuard → _Protection_ → _Protection DNS_ → _serveur DNS_.
