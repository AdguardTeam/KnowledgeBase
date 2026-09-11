---
title: L'interaction de CLI avec AdGuard VPN
sidebar_position: 5
---

## L'interaction de CLI avec AdGuard VPN

L'utilisation d'AdGuard CLI en **mode proxy automatique** avec AdGuard VPN CLI en **mode tunnel** est impossible à cause d'une boucle de routage : le trafic d'AdGuard VPN CLI ne peut actuellement pas être exclu de l'acheminement transparent par AdGuard CLI, et le trafic d'AdGuard CLI doit passer par le tunnel d'AdGuard VPN CLI.

Voici les deux solutions possibles :

- Basculez AdGuard CLI en **mode proxy manuel**.
  - Dans ce cas, AdGuard VPN CLI peut être utilisé en **mode tunnel**, mais les applications pour lesquelles le blocage de publicités est souhaité doivent être configurées manuellement pour utiliser le proxy de AdGuard CLI.
- Basculez AdGuard VPN CLI en **mode SOCKS5** et configurez AdGuard VPN CLI avec un proxy sortant pointant vers l'interface SOCKS5 d'AdGuard VPN CLI. Dans ce cas-là, il faut garder à l'esprit que :
  - Pour que le trafic d’une application passe par le tunnel VPN, son trafic doit être transmis de manière transparente par l’interface de ligne de commande AdGuard (ce qui est le cas pour toutes les applications par défaut), ou configuré manuellement pour utiliser l’interface SOCKS5 de AdGuard VPN CLI.
  - Afin d'éviter une boucle de routage, l'option `skip_outbound_proxy` doit être activée pour AdGuard VPN CLI dans la section de configuration des applications d'AdGuard CLI. Par défaut, `skip_outbound_proxy` est activée pour toutes les apps contenant `vpn` dans leur nom, y compris AdGuard VPN CLI.
