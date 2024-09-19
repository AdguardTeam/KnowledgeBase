---
title: Guía de configuración avanzada
sidebar_position: 9
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cómo acceder a la configuración avanzada

:::caution

Cambiar la *Configuración avanzada* puede causar problemas con el rendimiento de AdGuard, interrumpir la conexión a Internet o comprometer tu seguridad y privacidad. Realiza cambios en esta sección solo si estás seguro de lo que estás haciendo o si nuestro equipo de soporte te lo ha pedido.

:::

Para encontrar *Configuración avanzada*, abre AdGuard, haz clic en el ícono de ajustes, selecciona *Avanzada*, luego selecciona *Configuración avanzada*.

## Configuración avanzada

### Network settings

#### `network.extension.exclude.domains`

Los dominios enumerados se excluirán del filtrado en el modo *Extensión de red*. Utiliza una coma o un salto de línea para separar valores.

#### `network.extension.exclude.ports`

Los puertos listados se excluirán del filtrado en el modo *Extensión de red*. Utiliza una coma o un salto de línea para separar valores.

#### `network.extension.route.exclude`

Las rutas enumeradas se excluirán del filtrado en el modo *Extensión de red*. Establece rutas utilizando una dirección IP o CIDR de destino. Separa los valores con comas o saltos de línea.

#### `extensión.de.red.http.downgrade.bundleids`

Aquí puedes especificar una lista de aplicaciones para las cuales el protocolo HTTP/2 se degradará a HTTP/1.1 en el modo de filtrado *Extensión de red*. El ID del paquete debe estar separado por una coma o un salto de línea.

#### `network.extension.monterey.force.split.tunnel`

Aquí puedes prohibir que AdGuard utilice la "ruta predeterminada" que está habilitada en el modo *Extensión de red* en macOS Monterey. AdGuard utiliza la "ruta predeterminada" para desactivar iCloud Private Relay y Protect Mail Activity, ya que no puede funcionar al unísono con ellos.

Encontrarás más información sobre el problema [en este artículo](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Aquí puedes especificar una lista de aplicaciones que realizan consultas de DNS directamente, no a través del sistema de resolución de DNS (por ejemplo, algunos clientes VPN o aplicaciones de filtrado de DNS). El filtrado DNS se desactivará para ellos en el *Modo Extensión de red*. Los IDs de paquete deben estar separados por una coma o un salto de línea.

#### `network.dns.filter.secure.request`

Redirige las solicitudes de DNS seguras a un proxy DNS local, si hay uno disponible.

#### `network.https.ocsp.check`

Al configurar `true`, habilita la verificación de revocación de certificados HTTPS.

#### `network.tcp.keepalive.enabled`

Envía periódicamente paquetes TCP a través de una conexión inactiva para asegurar que permanezca activa y renovar los tiempos de espera de NAT.

#### `network.tcp.keepalive.interval.seconds`

Tiempo de inactividad, en segundos, antes de enviar una sonda de mantenimiento de actividad. Si se especifica 0, el sistema utilizará el valor predeterminado.

#### `network.tcp.keepalive.timeout.seconds`

Tiempo, en segundos, antes de enviar otra sonda de mantenimiento de actividad a un par que no responde. Si se especifica 0, se utilizará el valor seleccionado por el sistema.

#### `network.https.ech.enabled`

Utiliza un proxy DNS local para buscar configuraciones en las listas de configuración de ECH. If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Verifica la autenticidad de todos los certificados para el dominio según la política de transparencia de certificados de Chrome.

#### `network.https.filter.http3.enabled`

Al configurar `true`, permites que AdGuard filtre el tráfico enviado a través de HTTP/3, la última versión del protocolo HTTP basado en QUIC.

#### `network.filtering.localnetwork`

Al configurar `true`, habilita el filtrado de red local.

#### `network.filtering.localhost`

Al configurar `true`, habilita el filtrado LoopBack.

### DNS settings

#### `dns.proxy.bootstrap.ips`

Aquí, puedes ingresar las direcciones IP de los servidores DNS que se utilizarán para determinar la dirección del servidor DNS cifrado.

#### `dns.proxy.fallback.ips`

Aquí, puedes especificar una lista de direcciones IP de servidores DNS que se utilizarán como copias de seguridad en caso de que el servidor DNS cifrado no responda.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Las consultas normales se redirigirán a un upstream de fallback si fallan todos los upstreams normales.

#### `dns.proxy.detect.search.domains`

Esta opción permite la detección automática del dominio de la red local, que será redirigido automáticamente al servidor DNS alternativo en lugar del servidor DNS principal.

#### `dns.proxy.fallback.domains`

Aquí, puedes enumerar los dominios para los que se utilizará el servidor DNS alternativo en lugar del servidor DNS principal.

#### `dns.proxy.adblockrules.blocking.mode`

Aquí, puedes especificar el tipo de respuesta del servidor DNS a las solicitudes bloqueadas, correspondientes a reglas de estilo bloqueador de anuncios.

- 0 - responder con RECHAZADO
- 1 - responder con NXDOMAIN
- 2 - responder con 0.0.0.0 o las direcciones especificadas en `dns.proxy.blocking` `.response.IPv4.address` y/o `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.hostrules.blocking.mode`

Aquí, puedes especificar el tipo de respuesta del servidor DNS a las solicitudes bloqueadas, correspondiente a las reglas del host:

- 0 - responder con RECHAZADO
- 1 - responder con NXDOMAIN
- 2 - responder con 0.0.0.0 o las direcciones especificadas en `dns.proxy.blocking` `.response.IPv4.address` y/o `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.blocking.response.IPv4.address`

Aquí puedes especificar la dirección IPv4 que se devolverá en respuesta a las solicitudes "A" bloqueadas cuando `dns.proxy.adblockrules.blocking.mode` o `dns.proxy.hostrules.blocking.mode` está configurado en el tipo de respuesta "ADDRESS".

#### `dns.proxy.blocking.response.IPv6.address`

Aquí puedes especificar la dirección IPv6 que se devolverá en respuesta a las solicitudes "AAAA" bloqueadas cuando `dns.proxy.adblockrules.blocking.mode` o `dns.proxy.hostrules.blocking.mode` está configurado en el tipo de respuesta "ADDRESS".

#### `dns.proxy.block.AAAA.requests`

Aquí puedes habilitar el bloqueo de consultas DNS IPv6.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Aquí puedes especificar el valor TTL (tiempo de vida) que se devolverá en respuesta a una solicitud bloqueada.

#### `dns.proxy.parallel.upstream.queries.enabled`

Todos los upstreams se consultan simultáneamente. Se devuelve la primera respuesta.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Responde a una falla de upstream con un paquete SERVFAIL.

#### `dns.proxy.http3.enabled`

Habilita HTTP/3 para servidores DNS de subida con DNS mediante HTTPS para acelerar la conexión.

#### `dns.proxy.block.encrypted.client.hello.response`

Elimina los parámetros Encrypted Client Hello de las respuestas.

### Stealth Mode settings

#### `stealth.antidpi.http.split.fragment.size`

Ajusta el tamaño de la fragmentación de la solicitud HTTP. Valores válidos: 1–1500. Si se especifica un tamaño no válido, el sistema utilizará el valor predeterminado.

#### `stealth.antidpi.clienthello.split.fragment.size`

Esta opción especifica el tamaño de la fragmentación de paquetes TCP, lo que ayuda a evitar una inspección profunda de paquetes. Valores válidos: 1–1500. Si se especifica un tamaño no válido, el sistema utilizará el valor predeterminado.

#### `stealth.antidpi.http.space.juggling`

Agrega espacio adicional entre el método HTTP y la URL y elimina espacio después del campo "Host:".

#### `stealth.antidpi.split.delay.millisecond`

Aquí puedes especificar el retraso, en milisegundos, después de enviar el primer fragmento, si se realiza la fragmentación.

### Subscription link interception settings (userscripts and filters)

#### `subscription.link.interception.userscript`

Activa esta función si deseas que AdGuard intercepte automáticamente las URL de los scripts de usuario y abre la ventana de instalación.

#### `subscription.link.interception.filter`

Activa esta función si deseas que AdGuard intercepte automáticamente las URL de suscripción (por ejemplo, abp:subscribe, etc.) y abre la ventana de configuración del filtro personalizado.
