---
title: Protección DNS
sidebar_position: 4
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Se puede acceder al módulo de protección DNS tocando la pestaña _Protección_ (segundo icono a la izquierda en la parte inferior de la pantalla) y luego seleccionando _Protección DNS_.

:::tip

La protección DNS funciona de manera diferente al bloqueo habitual de anuncios y rastreadores. You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_Protección DNS_ te permite filtrar solicitudes DNS con la ayuda de un servidor DNS seleccionado, filtros DNS y reglas de usuario:

- Algunos servidores DNS tienen listas de bloqueo que ayudan a bloquear solicitudes de DNS a dominios potencialmente dañinos

- Además de los servidores DNS, AdGuard puede filtrar las solicitudes DNS por sí solo utilizando un filtro DNS especial. Contiene una gran lista de dominios publicitarios y de seguimiento, Las solicitudes dirigidas a ellos se redirigen a un servidor blackhole

- También puedes bloquear y desbloquear dominios creando reglas de usuario. Es posible que necesites consultar nuestro artículo sobre [sintaxis de reglas de filtrado DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![Protección DNS \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### Servidor DNS

En esta sección, puedes seleccionar un servidor DNS para resolver peticiones DNS, bloquear anuncios y rastreadores, y cifrar el tráfico DNS. Toca un servidor para leer su descripción completa y selecciona un protocolo. Si no encontraste el servidor deseado, puedes agregarlo manualmente:

- Toca _Agregar servidor DNS_ e ingresa la dirección (o direcciones) del servidor

- También puedes seleccionar un servidor DNS de la [lista de proveedores DNS conocidos](https://adguard-dns.io/kb/general/dns-providers/) y pulsar _Añadir a AdGuard_ junto a él

- Si estás utilizando un servidor DNS privado de AdGuard, puedes agregarlo a AdGuard desde el [dashboard](https://adguard-dns.io/dashboard/)

Por defecto, está seleccionado _DNS automático_. Configura un servidor DNS según la configuración de AdGuard y del dispositivo. Si tienes activada la [integración con AdGuard VPN](/adguard-for-android/features/integration-with-vpn) u otro proxy SOCKS5, se conecta a _AdGuard DNS Non-filtering_ o a cualquier otro servidor que especifiques. En todos los demás casos, se conecta al servidor DNS seleccionado en la configuración de tu dispositivo.

#### Filtros DNS

Esta sección te permite agregar filtros DNS personalizados y reglas de filtrado DNS. Puedes encontrar más filtros en [filterlists.com](https://filterlists.com/).
