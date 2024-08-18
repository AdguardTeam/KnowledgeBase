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

Como consecuencia, AdGuard no puede funcionar junto con iCloud Private Relay y las funciones de privacidad de la aplicación Mail:

1. iCloud Private Relay se aplica a las conexiones a nivel de biblioteca, antes de que alcancen el nivel de socket, donde opera AdGuard.
2. iCloud Private Relay utiliza QUIC, que AdGuard no puede filtrar en aplicaciones filtradas porque el filtrado HTTP/3 aún no está disponible.
3. En consecuencia, AdGuard bloquea QUIC, incluido el tráfico de retransmisión privada de iCloud; de lo contrario, el bloqueo de anuncios es imposible.
4. Cuando usas iCloud Private Relay y cambias AdGuard al modo de "túnel dividido", no puedes abrir sitios web en Safari.
5. Para solucionar este problema en Monterey, aplicamos la regla de "ruta predeterminada". Cuando Private Relay ve esa regla, se desactiva automáticamente. Entonces, AdGuard funciona perfectamente en Monterey, pero iCloud Private Relay se desactiva.

`network.extension.monterey.force.split.tunnel` restaura el comportamiento de "Big Sur", pero esta opción puede interrumpir el acceso a sitios web debido a (3) y (4). Seguimos buscando una solución a este problema. Una de las opciones es implementar el filtrado HTTP/3.

## Solución recomendada

Recomendamos utilizar AdGuard junto con un servicio VPN más tradicional como [AdGuard VPN](https://adguard-vpn.com/).

## Solución alternativa

Puedes evitar que AdGuard utilice la "ruta predeterminada" deshabilitándola. Se puede hacer a través de Configuración avanzada → `network.extension.monterey.force.split.tunnel`.

![Desactivar ruta predeterminada en configuración avanzada *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Ten en cuenta que, en este caso, se enfrentará a los problemas descritos anteriormente.
