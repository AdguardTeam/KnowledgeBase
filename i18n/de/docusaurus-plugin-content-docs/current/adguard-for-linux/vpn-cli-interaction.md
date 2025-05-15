---
title: Interaktion mit AdGuard VPN CLI
sidebar_position: 5
---

## Interaktion mit AdGuard VPN CLI

Die Nutzung von AdGuard CLI im **automatischen Proxy-Modus** zusammen mit AdGuard VPN CLI im **Tunnel-Modus** ist aufgrund einer Routingschleife nicht möglich. Der Datenverkehr von AdGuard VPN CLI kann derzeit nicht vom transparenten Proxy von AdGuard CLI ausgeschlossen werden, und der Datenverkehr von AdGuard CLI muss durch den Tunnel von AdGuard VPN CLI geleitet werden.

Hierfür gibt es zwei mögliche Lösungen:

- Schalten Sie AdGuard CLI in den **manuellen Proxymodus**.
    - In diesem Fall kann AdGuard VPN CLI im **Tunnel-Modus** verwendet werden, aber Anwendungen, für die eine Werbeblockierung erwünscht ist, müssen manuell konfiguriert werden, um den Proxy von AdGuard CLI zu nutzen.
- Schalten Sie AdGuard VPN CLI in den **SOCKS5-Modus** und konfigurieren Sie AdGuard CLI mit einem Outbound-Proxy, der auf die SOCKS5-Schnittstelle von AdGuard VPN CLI zeigt. In diesem Fall ist es wichtig, Folgendes zu bedenken:
    - Damit der Datenverkehr einer App den VPN-Tunnel passieren kann, muss er entweder von AdGuard CLI transparent proxyiert werden (was standardmäßig für alle Apps der Fall ist) oder manuell so konfiguriert werden, dass er die SOCKS5-Schnittstelle von AdGuard VPN CLI nutzt.
    - Um eine Routing-Schleife zu vermeiden, muss die Option `skip_outbound_proxy` für AdGuard VPN CLI im Bereich App-Konfiguration von AdGuard CLI aktiviert werden. Standardmäßig ist `skip_outbound_proxy` für alle Anwendungen mit `vpn` im Namen aktiviert, einschließlich AdGuard VPN CLI.
