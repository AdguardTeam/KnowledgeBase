---
title: Guía de configuración de bajo nivel
sidebar_position: 6
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cómo acceder a la configuración de bajo nivel

:::caution

Cambiar la *configuración de bajo nivel* puede causar problemas con el rendimiento de AdGuard, romper la conexión a Internet o comprometer tu seguridad y privacidad. Esta sección sólo debe abrirse si sabes lo que está haciendo o si se lo ha pedido nuestro equipo de asistencia.

:::

Para ir a *Configuración de bajo nivel*, abre la aplicación AdGuard y toca el ícono de engranaje en la esquina inferior derecha de la pantalla. Luego, selecciona *General → Avanzado → Configuración de bajo nivel*.

## Configuración de bajo nivel

Para AdGuard v4.0 para Android hemos rediseñado completamente las configuraciones de bajo nivel: las dividimos en bloques temáticos, las hicimos más claras, agregamos validación de valores ingresados y otras válvulas de seguridad, eliminamos algunas configuraciones y agregamos otras.

### Protección DNS

#### Upstreams fallback

Aquí puedes especificar los solucionadores DNS de respaldo que se utilizarán si el servidor configurado no está disponible. Hay tres opciones: *DNS automático*, *Ninguno*y *DNS personalizado*. Si no se especifica ningún servidor de respaldo, se utilizará el *DNS automático* (el DNS del sistema o el DNS de AdGuard). *Ninguno* significa que no hay respaldo alguno. Seleccionar *DNS personalizado* te permitirá enumerar direcciones de servidores IPv4 e IPv6 para usar como upstream.

#### Dominios fallback

Aquí puedes enumerar los dominios que se reenviarán directamente a los servidores ascendentes de respaldo, si existen.

#### Detectar dominios de búsqueda

If this setting is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams.

#### Bootstrap upstreams

DNS de arranque para servidores DoH, DoT y DoQ. El *DNS automático* (el DNS del sistema o DNS AdGuard) se utiliza de forma predeterminada. Al seleccionar *DNS personalizado*, puedes enumerar las direcciones de servidor IPv4 e IPv6 para usar como enlaces ascendentes de arranque.

#### Modo de bloqueo para reglas de estilo adblock

Aquí puedes especificar el tipo de respuesta para los dominios bloqueados por las reglas DNS según la sintaxis de la regla de bloqueo de publicidad (por ejemplo, `||example.org^`).

- Respond with REFUSED
- Respond with NXDOMAIN
- Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)

#### Modo de bloqueo para reglas de hosts

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, `<ip> <domain> 0.0.0.0 example.com`).

- Respond with REFUSED
- Respond with NXDOMAIN
- Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)

#### DNS request timeout

Aquí puedes especificar el tiempo en milisegundos que AdGuard esperará la respuesta del servidor DNS seleccionado antes de recurrir al fallback. Si no completas este campo o ingresas un valor no válido, se utilizará el valor de 5000.

#### TTL de respuesta bloqueada

Aquí puedes especificar el valor TTL (tiempo de vida) que se devolverá en respuesta a una solicitud bloqueada.

#### DNS cache size

Here you can specify the maximum number of cached responses. Default value is 1000.

#### ECH blocking

If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses.

#### Ignore unavailable outbound proxy

If this setting is enabled, AdGuard will send DNS requests directly when the outbound proxy is unavailable.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL failure response

If this setting is enabled and all upstreams, including fallback ones, fail to respond, AdGuard will send a SERVFAIL response to the client.

#### Use fallback for non-fallback domains

If this setting is enabled, AdGuard will use fallback upstreams for all domains. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a *Secure DNS* (or similar) setting. You can use *Filter secure DNS* in two different modes:

- **Filter on the fly**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn’t redirect it to the local DNS proxy. If a DNS server is specified in the browser’s settings, this server will handle the DoH traffic for this browser

- **Redirect to DNS proxy**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard’s DNS settings will handle all DoH traffic

### Filtering

#### Capture HAR

If this setting is enabled, AdGuard will capture HAR files. It will create a directory named “har” inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Use it only for debugging purposes!

### Filtrado HTTPS

#### Encrypted Client Hello

Toda conexión a Internet cifrada tiene una parte no cifrada. Este es el primer paquete que contiene el nombre del servidor al que te estás conectando. La tecnología Encrypted Client Hello resuelve este problema y cifra la última parte de la información no cifrada. To benefit from it, enable the *Encrypted Client Hello* option. Utiliza un proxy DNS local para buscar la configuración de ECH para el dominio. If it is found, Client Hello packet will be encrypted.

#### OCSP checking

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Si se revoca el certificado, se bloquearán las conexiones actuales y futuras al dominio.

#### Redirect DNS-over-HTTPS requests

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### Filtrar HTTP/3

Si esta configuración está habilitada, AdGuard filtrará las solicitudes enviadas a través de HTTP/3 además de otros tipos de solicitudes.

### Proxy saliente

#### Mostrar la configuración de solicitudes DNS de filtro

Si esta opción está habilitada, el interruptor *Filtrar solicitudes DNS* se mostrará en el cuadro de diálogo *Agregar servidor proxy*. Úsalo para habilitar el filtrado de solicitudes DNS que pasan a través del proxy especificado.

### Protección

#### Rangos de puertos

Aquí puedes especificar los rangos de puertos que deben filtrarse.

#### Registrar eventos HTML eliminados

Si esta configuración está habilitada, AdGuard registrará los elementos HTML bloqueados en *Actividad reciente*.

#### Depuración de scriptlet

Si esta configuración está habilitada, se activará la depuración en scriptlets y el registro del navegador registrará cuándo se aplican las reglas de scriptlets.

#### Aplicaciones excluidas

Here you can list package names and UIDs that you want to exclude from AdGuard protection.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if *Routing mode* is set to *Automatic proxy*.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Filtering for the IPv4 ranges listed in this section is disabled.

#### IPv6 ranges excluded from filtering

Filtering for the IPv6 ranges listed in this section is disabled.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection.

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

If this setting is enabled, AdGuard will create a file `timestamp.pcap` (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

#### IPv4 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `2001:db8:ad:0:ff::`.

### Misceláneo

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
