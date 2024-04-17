---
title: Integration with AdGuard VPN
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard for Android creates a local VPN to filter traffic. Thus, other VPN apps cannot be used while AdGuard for Android is running. However, both AdGuard and [AdGuard VPN](https://adguard-vpn.com/) apps have Integrated modes that let you use them together.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard Ad Blocker routes its traffic. This allows AdGuard to create a VPN interface and block ads and trackers locally, while AdGuard VPN routes all traffic through a remote server.

If you disable AdGuard VPN, AdGuard will stop using it as an outbound proxy. If you disable AdGuard, AdGuard VPN will route traffic through its own VPN interface.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable _Integration with AdGuard VPN_ automatically. The same happens in reverse. Note that if you've enabled integration, you won't be able to manage app exclusions and connect to DNS servers from the AdGuard VPN app. You can specify apps to be routed through your VPN tunnel via _Settings_ → _Filtering_ → _Network_ → _Proxy_ → _Apps operating through proxy_. To select a DNS server, open AdGuard → _Protection_ → _DNS protection_ → _DNS server_.
