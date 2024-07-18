---
title: Cómo habilitar el filtrado en todo el sistema en AdGuard para iOS
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona de primera mano, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Acerca del filtrado en todo el sistema

El filtrado a nivel del sistema significa bloquear anuncios y rastreadores más allá del navegador Safari, es decir, en otras aplicaciones y navegadores. Este artículo te dirá cómo activarlo en tu dispositivo iOS.

En iOS, la única forma de bloquear anuncios y rastreadores en todo el sistema es utilizar [el filtrado DNS](https://adguard-dns.io/kb/general/dns-filtering/).

Primero, debes habilitar la Protección DNS. Para hacerlo:

1. Abre *AdGuard para iOS*.
2. Toca el icono *Protección* (el segundo icono en la barra de menú inferior).
3. Activa *Protección DNS*.

![Pantalla de protección DNS *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Ahora, si tu objetivo es bloquear anuncios y rastreadores en todo el sistema, tienes tres opciones:

 1. Utiliza el filtro AdGuard DNS (*Protección* (el icono de escudo en el menú inferior) → *Protección DNS* → *Filtrado DNS* → *Filtros DNS* → *Filtro AdGuard DNS*).
 2. Utiliza el servidor AdGuard DNS (*Protección* (el icono de escudo en el menú inferior) → *Protección DNS* → *Servidor DNS* → *AdGuard DNS*) u otro servidor DNS de bloqueo de tu elección.
 3. Añade un filtro DNS personalizado/archivo hosts a tu gusto.

La primera y tercera opción tienen varias ventajas:

- Puedes utilizar cualquier servidor DNS a tu discreción y no está atado a un servidor de bloqueo específico, porque el filtro hace el bloqueo.
- Puedes agregar varios filtros DNS y/o archivos de hosts (aunque usar demasiados podría ralentizar AdGuard).

![Cómo funciona el filtrado de DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## Cómo agregar un filtro DNS personalizado/archivo de hosts

Puedes agregar cualquier filtro DNS o archivo de hosts que desees.

Por el bien del ejemplo, agreguemos [OISD Blocklist Big](https://oisd.nl/).

1. Copia este enlace: `https://big.oisd.nl` (es un enlace para OISD Blocklist Big filter)
2. Abre *Protección* (el icono de escudo en el menú inferior) → *Protección DNS* → *Filtrado DNS* → *Filtros DNS*.
3. Toca *Agregar un filtro*.
4. Pega el enlace en el campo de URL de filtrado.
5. Pulsa *Siguiente* → *Agregar*.

![Agregando una pantalla de filtrado DNS *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Agrega cualquier cantidad de otros filtros DNS de la misma manera pegando una URL diferente en el paso 4. Puedes encontrar varios filtros y enlaces a ellos [aquí](https://filterlists.com).
