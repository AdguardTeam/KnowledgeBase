---
title: Guía de la Configuración de bajo nivel
sidebar_position: 5
---

:::info

Este artículo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cómo llegar a la configuración de bajo nivel

:::caution

Cambiar la *configuración de bajo nivel* puede causar problemas con el rendimiento de AdGuard, romper la conexión a Internet o comprometer tu seguridad y privacidad. Esta sección sólo debe abrirse si sabes lo que está haciendo o si se lo ha pedido nuestro equipo de asistencia.

:::

Para ir a la *Configuración de bajo nivel*, toca el icono del engranaje en la parte inferior derecha de la pantalla para abrir * Configuración*. Selecciona la sección *General* y luego activa el *Modo avanzado*, después de eso aparecerá la sección *Configuración avanzada* a continuación. Toca *Configuración avanzada* para llegar a la sección *Configuración de bajo nivel*.

## Configuración de bajo nivel

### Modo túnel

Hay dos modos principales de túnel: *Dividido* y *Completo*. El *modo de túnel dividido* proporciona compatibilidad de AdGuard y las aplicaciones llamadas "VPN personal". En *Túnel completo*, ninguna otra VPN puede funcionar simultáneamente con AdGuard.

Hay una característica específica del modo *Split-Tunnel*: en caso de un rendimiento deficiente del proxy DNS, por ejemplo, si la respuesta del servidor DNS de AdGuard no se devuelve a tiempo, iOS redirigirá el tráfico a través del servidor DNS especificado en la configuración de iOS. Por el momento, no se bloquea ningún anuncio y el tráfico DNS no está cifrado.

En *Túnel completo*, solo se utiliza el servidor DNS especificado en la configuración de AdGuard. Si no responde, el Internet simplemente no funcionará. El modo *Full-Tunnel* activado puede afectar negativamente al rendimiento de algunos programas (por ejemplo, FaceTime) y causar problemas de actualización de aplicaciones.

De forma predeterminada, AdGuard utiliza *Túnel dividido* como la opción más estable.

También hay un modo adicional llamado *Túnel completo (sin icono de VPN)*. Esto es exactamente lo mismo que *Túnel completo*, pero está configurado para que el icono de VPN no se muestre en la línea del sistema.

### Modo de bloqueo

En este módulo, puedes seleccionar la forma en que AdGuard responderá a las consultas de DNS que deben bloquearse:

- Predeterminado: responde con cero dirección IP cuando está bloqueado por reglas de estilo adblock; responder con la dirección IP especificada en la regla cuando esté bloqueado por reglas de estilo /etc/hosts
- RECHAZADO: responden con el código RECHAZADO
- NXDOMAIN: responden con el código NXDOMAIN
- IP no especificada: responden con dirección IP cero
- IP personalizada: responda con una dirección IP configurada manualmente

### Bloquear IPv6

Al mover el interruptor hacia la derecha, activas el bloqueo de consultas IPv6 (solicitudes AAAA). Las solicitudes DNS de tipo AAAA no se resolverán, por lo que solo se podrán procesar consultas IPv4.

### TTL de respuesta bloqueada

Aquí puedes establecer el período para que un dispositivo guarde en caché la respuesta a una petición DNS. Durante el tiempo de vida especificado (en segundos), la petición puede ser leída desde la caché sin volver a solicitar al servidor DNS.

### Servidores Bootstrap

Para DNS-over-HTTPS, DNS-over-TLS y DNS-over-QUIC, se requiere un servidor bootstrap para obtener la dirección IP del servidor DNS principal. Si no se especifica, se utiliza el servidor DNS de la configuración de iOS como servidor de bootstrap.

### Servidores fallback

Aquí puedes especificar un servidor alternativo al que se redirigirá una solicitud si el servidor principal no responde. Si no se especifica, se utilizará el servidor DNS del sistema. También es posible especificar `none`. En este caso, no se establecerá ningún servidor de reserva y sólo se utilizará el servidor DNS principal.

### Tiempo de actualización de la aplicación

Aquí puedes seleccionar la frecuencia con la que la aplicación buscará actualizaciones de filtros mientras está en segundo plano. Ten en cuenta que las verificaciones de actualización no se realizarán con una frecuencia superior al periodo especificado, pero es posible que no se respeten los intervalos exactos.
