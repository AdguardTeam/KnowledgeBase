---
title: Interacción con AdGuard VPN CLI
sidebar_position: 5
---

## Interacción con AdGuard VPN CLI

El uso de AdGuard CLI en **modo proxy automático** junto con AdGuard VPN CLI en **modo túnel** es imposible debido a un bucle de enrutamiento: actualmente, el tráfico de AdGuard VPN CLI no se puede excluir del proxy transparente de AdGuard CLI, y el tráfico de AdGuard CLI debe pasar por el túnel de AdGuard VPN CLI.

Estas son las dos posibles soluciones:

- Cambia AdGuard CLI a **modo proxy manual**.
  - En este caso, se puede usar AdGuard VPN CLI en **modo túnel**, pero las apps para las que se desea el bloqueo de anuncios deben configurarse manualmente para usar el proxy de AdGuard CLI.
- Cambia AdGuard VPN CLI a **modo SOCKS5**, y configura AdGuard CLI con un proxy saliente que apunte a la interfaz SOCKS5 de AdGuard VPN CLI. En este caso, es importante tener en cuenta que:
  - Para que el tráfico de una aplicación pase a través del túnel VPN, debe tener su tráfico de forma transparente proxyado por AdGuard CLI (que es el caso para todas las aplicaciones de manera predeterminada), o estar configurado manualmente para usar la interfaz SOCKS5 de AdGuard VPN CLI.
  - Para evitar un bucle de enrutamiento, la opción `skip_outbound_proxy` debe estar habilitada para AdGuard VPN CLI en la sección de configuración de las apps de AdGuard CLI. Por defecto, `skip_outbound_proxy` está habilitado para todas las apps que tienen `vpn` en su nombre, incluyendo AdGuard VPN CLI.
