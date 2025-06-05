---
title: Protección DNS
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

El [Módulo de Protección DNS](https://adguard-dns.io/kb/general/dns-filtering/) mejora tu privacidad al cifrar el tráfico DNS. A diferencia del bloqueo de contenido de Safari, la Protección DNS funciona a nivel del sistema, es decir, más allá de Safari, en aplicaciones y otros navegadores. Tienes que habilitar este módulo antes de poder usarlo. Puedes hacer esto en la pantalla de inicio tocando el icono de escudo en la parte superior de la pantalla, o yendo a la pestaña _Protección_ → _Protección DNS_.

:::note

Para poder administrar la configuración de DNS, las aplicaciones de AdGuard requieren establecer una VPN local. No enrutará tu tráfico a través de ningún servidor remoto. Sin embargo, el sistema te pedirá que confirmes el permiso de acceso.

:::

### Implementación de DNS {#dns-implementation}

![Pantalla de implementación de DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Esta sección tiene dos opciones: AdGuard e implementación nativa. Básicamente, estos son dos métodos de configuración de DNS.

En la implementación nativa, el DNS es manejado por el sistema y no por la aplicación. Esto significa que AdGuard no tiene que crear un VPN local. Lamentablemente, esto no te ayudará a evitar las restricciones del sistema y utilizar AdGuard junto con otras aplicaciones basadas en VPN; si alguna VPN está habilitada, se ignora el DNS nativo. En consecuencia, no podrás filtrar el tráfico localmente ni usar nuestro nuevo [protocolo DNS mediante QUIC (DoQ)](https://adguard.com/es/blog/dns-over-quic.html).

### Servidores DNS {#dns-servers}

La próxima sección que verás en la pantalla de Protección DNS es servidores DNS. Muestra el servidor DNS actualmente seleccionado y el tipo de cifrado. Para cambiar uno u otro, toca el botón para entrar en la pantalla de servidores DNS.

![Servidores DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Los servidores difieren por su velocidad, protocolo utilizado, confiabilidad, política de registros, etc. De forma predeterminada, AdGuard sugerirá varios servidores DNS entre los más populares (incluido AdGuard DNS). Toca cualquier opción para cambiar el tipo de cifrado (si tal opción es proporcionada por el propietario de los servidores) o para ver la página de inicio del servidor. Añadimos etiquetas como `Política de no registro`, `Bloqueo de anuncios`, `Seguridad` para ayudarte a tomar una decisión.

Además, en la parte inferior de la pantalla hay una opción para agregar un servidor DNS personalizado. Admite servidores regulares, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS y DNS-over-QUIC.

#### Autenticación básica de HTTP para DNS-over-HTTPS

Esta fuinción lleva las capacidades de autenticación del protocolo HTTP al DNS, que no tiene autenticación incorporada. La autenticación en DNS es útil si deseas restringir el acceso a tu servidor DNS personalizado a usuarios específicos.

Para habilitar esta función:

1. En AdGuard DNS, ve a _Configuración de servidores_ → _Dispositivos_ → _Configuración_ y cambia el servidor DNS al que tiene autenticación. Al hacer clic en _Denegar otros protocolos_, se eliminarán otras opciones de uso de protocolo, dejando solo la autenticación DNS-over-HTTPS habilitada y evitando su uso por peticiones de terceros. Copia la dirección generada.

![DNS-over-HTTPS con autenticación](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. En AdGuard para iOS, ve a la pestaña de _Protección_ → _Protección DNS_ → _Servidores DNS_ y pega la dirección generada en el campo _Agregar un servidor DNS personalizado_. Guarda y selecciona la nueva configuración.

Para verificar si todo está configurado correctamente, visita nuestra [página de diagnóstico](https://adguard.com/en/test.html).

### Configuración de red {#network-settings}

![Pantalla de configuración de red \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Los usuarios también pueden gestionar su seguridad DNS en la pantalla de configuración de red. _Filtrar datos móviles_ y _Filtrar Wi-Fi_ habilitan o deshabilitan la protección DNS para los respectivos tipos de red. Más abajo, en _Excepciones de Wi-Fi_, puedes excluir redes Wi-Fi particulares de la protección DNS (por ejemplo, es posible que desees excluir tu red doméstica si utilizas [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### Filtrado de DNS {#dns-filtering}

El filtrado de DNS te permite personalizar tu tráfico DNS al habilitar el filtro de DNS de AdGuard DNS, agregar filtros DNS personalizados y utilizar la lista de bloqueo/lista de permitidos de DNS.

Cómo acceder:

_Protección_ (el icono de escudo en la barra de menú inferior) → _Protección DNS_ → _Filtrado DNS_

![Pantalla de filtrado DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### Filtrado de DNS {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard supervisará tu tráfico DNS y bloqueará las peticiones que cumplan una o más reglas. Puedes utilizar filtros como el [filtro de AdGuard DNS](https://github.com/AdguardTeam/AdguardSDNSFilter) o agregar archivos de hosts como filtros. Se pueden añadir varios filtros simultáneamente. Para saber cómo hacerlo, familiarízate con [este manual](adguard-for-ios/solving-problems/system-wide-filtering).

#### Lista de permitidos y Lista de bloqueo {#allowlist-blocklist}

Además de los filtros de DNS, puedes tener un impacto específico en el filtrado de DNS agregando dominios individuales a la lista de bloqueo o a la lista de permitidos. La lista de bloqueo incluso soporta la misma sintaxis DNS, y ambos pueden ser importados y exportados, al igual que la lista de permitidos en el bloqueo de contenido de Safari.
