---
title: iCloud Private Relay y AdGuard
sidebar_position: 7
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Descripción del problema en pocas palabras

De forma predeterminada, AdGuard utiliza la "ruta predeterminada" que desactiva la retransmisión privada de iCloud.

Actualmente, AdGuard y iCloud Private Relay no pueden funcionar al mismo tiempo. AdGuard no puede bloquear anuncios porque iCloud Private Relay cifra el tráfico antes de que AdGuard pueda filtrar las conexiones de red. Cuando iCloud Private Relay está activo, cualquier filtrado (incluido el filtrado local) se vuelve imposible. Por lo tanto, AdGuard no puede filtrar el tráfico ni realizar filtrado DNS en Safari. Sin embargo, AdGuard todavía filtra el tráfico en otros navegadores. Para seguir usando iCloud Private Relay, considere instalar [AdGuard para Safari](https://adguard.com/adguard-safari/overview.html).

Lo mismo se aplica al uso de cualquier aplicación VPN en Mac: debes elegir entre usar iCloud Private Relay o un servicio VPN.

## En detalle

AdGuard para Mac ahora utiliza el filtrado de sockets integrado de macOS basado en la API de extensiones de red. Este mecanismo nuevo y bastante defectuoso reemplazó a las antiguas extensiones del Kernel. Durante los últimos 1,5 años, hemos informado a Apple de más de 20(!) errores relacionados con su nuevo método de filtrado.

La API de extensiones de red tiene una configuración similar a VPN con una lista de entradas similares a rutas. En Big Sur, AdGuard desarrolló reglas de "túnel dividido" para evitar la creación de la regla de "ruta predeterminada" porque causa problemas en las primeras versiones de Big Sur.

En Monterey, se introdujo iCloud Private Relay. Las funciones de privacidad de la aplicación Mail también utilizan servidores de retransmisión privados.

As a consequence, AdGuard can’t work together with iCloud Private Relay and the Mail app privacy features:

1. iCloud Private Relay se aplica a las conexiones a nivel de biblioteca, antes de que alcancen el nivel de socket, donde opera AdGuard.
2. iCloud Private Relay is implemented with HTTP/3 CONNECT proxies.
3. Since AdGuard does not filter CONNECT HTTP/3 requests yet, it attempts to downgrade HTTP/3 proxy connections to HTTP/1.1, which results in blocking iCloud Private Relay traffic.
4. When you use iCloud Private Relay and switch AdGuard into the Split-Tunnel mode, you can’t open websites in Safari.
5. To work around this issue for Monterey, we apply the “default route” rule. Cuando Private Relay ve esa regla, se desactiva automáticamente. Entonces, AdGuard funciona perfectamente en Monterey, pero iCloud Private Relay se desactiva.

The `network.extension.monterey.force.split.tunnel` option restores the “Big Sur” behavior, but this option may break access to websites due to (3) and (4). Seguimos buscando una solución a este problema. One of the options is implementing HTTP/3 proxy filtering.

## Solución recomendada

Recomendamos utilizar AdGuard junto con un servicio VPN más tradicional como [AdGuard VPN](https://adguard-vpn.com/).

## Solución alternativa

Puedes evitar que AdGuard utilice la "ruta predeterminada" deshabilitándola. Se puede hacer a través de Configuración avanzada → `network.extension.monterey.force.split.tunnel`.

![Desactivar ruta predeterminada en configuración avanzada *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Ten en cuenta que, en este caso, se enfrentará a los problemas descritos anteriormente.
