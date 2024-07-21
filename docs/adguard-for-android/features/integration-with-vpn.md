---
title: Integration with AdGuard VPN
sidebar_position: 8
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

AdGuard for Android creates a local VPN to filter traffic. Thus, other VPN apps cannot be used while AdGuard for Android is running. However, both AdGuard and [AdGuard VPN](https://adguard-vpn.com/) apps have Integrated modes that let you use them together.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard Ad Blocker routes its traffic. This allows AdGuard to create a VPN interface and block ads and trackers locally, while AdGuard VPN routes all traffic through a remote server.

If you disable AdGuard VPN, AdGuard will stop using it as an outbound proxy. If you disable AdGuard, AdGuard VPN will route traffic through its own VPN interface.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable *Integration with AdGuard VPN* automatically. The same happens in reverse. Note that if you've enabled integration, you won't be able to manage app exclusions and connect to DNS servers from the AdGuard VPN app. You can specify apps to be routed through your VPN tunnel via *Settings* → *Filtering* → *Network* → *Proxy* → *Apps operating through proxy*. To select a DNS server, open AdGuard → *Protection* → *DNS protection* → *DNS server*.
