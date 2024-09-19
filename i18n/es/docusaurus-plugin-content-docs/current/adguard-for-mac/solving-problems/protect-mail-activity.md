---
title: Protect Mail Activity y AdGuard
sidebar_position: 8
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## En pocas palabras

La aplicación de correo de Apple ahora utiliza un proxy para ocultar la dirección IP de un usuario al descargar imágenes de correos electrónicos.

![Protección de la privacidad del correo](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

Sin embargo, no funcionará si hay una conexión VPN activa. Como trata a AdGuard como una VPN, no precargará imágenes automáticamente.

Apple explica este problema [aquí](https://support.apple.com/HT212797).

## En detalle

AdGuard para Mac ahora utiliza el filtrado de sockets integrado de macOS basado en la API de extensiones de red. Este mecanismo nuevo y bastante defectuoso reemplazó a las antiguas extensiones del Kernel. Durante los últimos 1,5 años, hemos informado a Apple de más de 20(!) errores relacionados con su nuevo método de filtrado.

La API de extensiones de red tiene una configuración similar a VPN con una lista de entradas similares a rutas. En Big Sur, AdGuard utilizó reglas de "túnel dividido" para evitar la creación de la regla de "ruta predeterminada" porque causa problemas en las primeras versiones de Big Sur. Estos problemas se resolvieron en Monterey por lo que nada nos impide utilizar la regla de la "ruta predeterminada".

En Monterey, se introdujo iCloud Private Relay. Las funciones de privacidad de Mail.app también utilizan servidores Private Relay.

Como consecuencia, AdGuard no puede funcionar junto con iCloud Private Relay y las funciones de privacidad de la aplicación Mail:

1. iCloud Private Relay se aplica a las conexiones a nivel de biblioteca, antes de que alcancen el nivel de socket, donde opera AdGuard.
2. iCloud Private Relay utiliza QUIC, que AdGuard no puede filtrar porque el filtrado HTTP/3 aún no está disponible.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. Cuando usas iCloud Private Relay y cambias AdGuard al modo de "túnel dividido", no puedes abrir sitios web en Safari.
5. Para solucionar este problema en Monterey, aplicamos la regla de "ruta predeterminada". Cuando Private Relay ve esa regla, se desactiva automáticamente. Entonces, AdGuard funciona perfectamente en Monterey, pero iCloud Private Relay se desactiva.

`network.extension.monterey.force.split.tunnel` restaura el comportamiento de "Big Sur", pero esta opción puede interrumpir el acceso a sitios web debido a (3) y (4). Seguimos buscando una solución a este problema. Una de las opciones es implementar el filtrado HTTP/3.

## Solución recomendada

En este punto, recomendamos utilizar un servicio VPN más tradicional, como [AdGuard VPN](https://adguard-vpn.com/), en lugar de las funciones de privacidad más nuevas de Apple.
