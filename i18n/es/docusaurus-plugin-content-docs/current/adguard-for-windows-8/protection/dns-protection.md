---
title: Protección DNS
sidebar_position: 4
---

:::info

Este artículo describe AdGuard para Windows v8.0, un bloqueador de anuncios integral que protege su dispositivo a nivel del sistema. Esta es una versión beta que aún está en desarrollo. Para probarlo, descarga la [versión beta de AdGuard para Windows](https://agrd.io/windows_beta).

:::

La Protección DNS te brinda más control sobre cómo tu dispositivo se conecta a Internet. Hay tres razones principales por las que puede ser útil:

## 1. Protege tu privacidad frente a tu ISP

Cada vez que abres un sitio web, por ejemplo "google.com", tu navegador envía una solicitud a un servidor DNS para obtener a cambio la dirección IP del sitio web. Por lo general, el servidor DNS pertenece a tu ISP, lo que significa que puede rastrear los sitios web que visitas. Si cambias a otro servidor DNS, como AdGuard DNS, tu proveedor de servicios de Internet ya no verá tu actividad en línea.

## 2. Cifra tu tráfico DNS

Los protocolos modernos como DNS-over-TLS y DNS-over-HTTPS garantizan que tus solicitudes de DNS estén cifradas. Esto los protege de que sean interceptados, modificados o espiados por atacantes.

## 3. Bloquear contenido no deseado a nivel de DNS

La Protección DNS puede filtrar anuncios, rastreadores, sitios web de phishing y otro contenido dañino o molesto antes de que siquiera se cargue en tu navegador o apps. [Más información sobre el filtrado DNS](https://adguard-dns.io/kb/general/dns-filtering/)

![Protección DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

Esto es lo que puedes configurar en la protección DNS:

## Elige un servidor DNS

![Servidores DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

Puedes elegir entre varios proveedores DNS de confianza. AdGuard ofrece varias opciones para diferentes necesidades:

- AdGuard DNS — bloquea anuncios y rastreadores.

- AdGuard DNS Family Protection — bloquea anuncios, rastreadores y contenido para adultos.

- AdGuard DNS No filtrado — proporciona una conexión segura y fiable sin filtros.

Puedes usar uno de nuestros servidores públicos, añadir tu propio servidor DNS personalizado o elegir otra opción de confianza de nuestra [lista de proveedores DNS de confianza](https://adguard-dns.io/kb/general/dns-providers/).

## Añadir filtros y reglas DNS

Para afinar la protección, puedes crear tus propios filtros DNS usando [sintaxis de reglas DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/) o importar [filtros DNS ya preparados](https://filterlists.com).

Además, puedes crear reglas DNS personalizadas para bloquear, desbloquear o redirigir dominios según sea necesario. Utiliza nuestro constructor de reglas integrado.
