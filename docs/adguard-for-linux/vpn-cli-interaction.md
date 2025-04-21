---
title: AdGuard VPN CLI interaction
sidebar_position: 5
---

## AdGuard VPN CLI interaction

Using AdGuard CLI in **automatic proxy mode** together with AdGuard VPN CLI in **tunnel mode** is impossible due to a
routing loop: AdGuard VPN CLI's traffic currently can not be excluded from being transparently proxied by AdGuard CLI,
and AdGuard CLI's traffic must go through the AdGuard VPN CLI's tunnel.

These are the two possible solutions:

1. Switch AdGuard CLI to **manual proxy mode**.
    - In this case, AdGuard VPN CLI can be used in **tunnel mode**, but apps for which ad blocking is desired must be
      manually configured to use the AdGuard CLI's proxy.
2. Switch AdGuard VPN CLI to **SOCKS5 mode**, and configure AdGuard CLI with an outbound proxy pointing to the SOCKS5
   interface of AdGuard VPN CLI. In this case, it's important to keep in mind that:
    - For an app's traffic to go through the VPN tunnel it must either have its traffic
      transparently proxied by AdGuard CLI (which is the case for all apps by default), or manually configured to use
      AdGuard VPN CLI's SOCKS5 interface.
    - In order to avoid a routing loop, the `skip_outbound_proxy` option must be enabled
      for AdGuard VPN CLI in AdGuard CLI's apps configuration section. By default, `skip_outbound_proxy` is enabled for
      all apps with `vpn` in their name, which includes AdGuard VPN CLI.
