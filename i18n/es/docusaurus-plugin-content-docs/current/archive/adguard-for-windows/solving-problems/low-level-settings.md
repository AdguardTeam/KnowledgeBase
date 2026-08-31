---
title: Guía de configuración avanzada (bajo nivel)
sidebar_position: 7
---

:::info

Este artículo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Anteriormente conocida como configuración de bajo nivel, la configuración avanzada contiene principalmente opciones que van más allá de la competencia del usuario promedio y no se aplican en el uso diario. AdGuard para Windows fue diseñado para funcionar sin tener que cambiar ninguno de ellos, pero proporcionará funciones adicionales al resolver problemas poco comunes.

:::caution

Cambiar una *Configuración avanzada* sin pensar puede causar problemas con el rendimiento de AdGuard, interrumpir la conexión a Internet o comprometer tu seguridad y privacidad online. Solo debes realizar cambios en esta configuración si estás seguro de lo que estás haciendo o si nuestro equipo de soporte te lo ha pedido.

:::

## Cómo acceder a la configuración avanzada

Para ir a *Configuración avanzada*, haz clic en *Configuración → Configuración general* en la ventana principal y desplázate hacia abajo hasta *Configuración avanzada*. Alternativamente, selecciona *Avanzado → Configuración avanzada...* en el menú lateral.

## Configuración avanzada

Una vez que abras la Configuración avanzada, se te presentarán las siguientes opciones:

### Bloquear TCP Fast Open

Si está habilitada, AdGuard bloqueará TCP Fast Open en el navegador Edge. Para aplicar la configuración, debes reiniciar el navegador.

### Usar Encrypted Client Hello

Toda conexión a Internet cifrada tiene una parte no cifrada. Este es el primer paquete que contiene el nombre del servidor al que te estás conectando. La tecnología Encrypted Client Hello resuelve este problema y cifra la última parte de la información no cifrada. Para usarla, habilita la opción *Usar Encrypted Client Hello*. Utiliza un proxy DNS local para buscar la configuración de ECH para el dominio. Si se encuentra, se cifrará el paquete Client Hello.

### Verificar la transparencia de los certificados de los sitios web

Verifica la autenticidad de todos los certificados para el dominio según la política de transparencia de certificados de Chrome. Si el certificado no cumple con la Política de transparencia de certificados de Chrome, AdGuard no filtrará el sitio web. Chrome, a su vez, lo bloqueará.

### Habilitar verificación de revocación de certificados SSL/TLS

Una vez habilitada, esta opción ejecuta verificaciones OCSP asíncronas para verificar si el certificado SSL/TLS del sitio web está revocado.

Si la verificación de OCSP se completa dentro del tiempo de espera mínimo, AdGuard aplicará inmediatamente el resultado: bloqueará la conexión si el certificado es revocado o establecerá una conexión si el certificado es válido.

Si la verificación demora demasiado, AdGuard establecerá una conexión y continuará verificando en segundo plano. Si se revoca el certificado, se bloquearán las conexiones actuales y futuras al dominio.

### Mostrar AdGuard VPN en la configuración

Habilitar esta opción te permite mostrar la pestaña AdGuard VPN en Configuración para abrir fácilmente la aplicación y el sitio web del producto.

### Excluye aplicaciones del filtrado ingresando la ruta completa

Si deseas que AdGuard no filtre ninguna aplicación específica, especifica la ruta completa a ellas y las aplicaciones se excluirán del filtrado. Separa las diferentes rutas con punto y coma.

### Habilitar notificaciones en ventanas emergentes de AdGuard

Habilita esta función para ver las notificaciones en ventanas emergentes de AdGuard. Ellas no aparecen con demasiada frecuencia y solo contienen información importante. También puedes usar el menú de la bandeja para recuperar la última notificación de ventana emergente.

### Interceptar automáticamente las URL de suscripción a los filtros

Habilita esta función si deseas que AdGuard intercepte automáticamente las URL de suscripción de filtro (es decir, `abp:subscribe` y similares) y abra un cuadro de diálogo de instalación de filtro personalizado.

### Filtrar HTTP/3

Si esta opción está habilitada, AdGuard filtrará las solicitudes enviadas a través de HTTP/3 además de otros tipos de solicitudes.

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### Usar modo de redireccionamiento del driver

Si esta opción está habilitada, AdGuard intercepta todo el tráfico y lo redirige al servidor proxy local para un mayor filtrado.

De lo contrario, AdGuard filtrará todo el tráfico, sin redirección. En este caso, el sistema considerará que AdGuard es la única aplicación que se conecta a Internet (las demás aplicaciones se enrutan a través de él). La desventaja es que eso hará que el Firewall del sistema sea menos efectivo. La ventaja es que este enfoque funciona un poco más rápido.

### Abrir la ventana principal al inicio del sistema

Activa esta opción para que la ventana principal de AdGuard se abra después de cargar el sistema. Esta configuración, que no afecta si el servicio de filtrado real se inicia o no, se encuentra en *Configuración → Configuración general*.

### Habilitar filtrado al iniciar el sistema

A partir de la versión 7.12, de forma predeterminada, el servicio de AdGuard no filtra el tráfico después del inicio del sistema operativo si la opción Iniciar AdGuard al iniciar el sistema está deshabilitada. En otras palabras, el servicio de AdGuard se inicia en modo "inactivo". Habilita esta opción para que AdGuard filtre el tráfico incluso si la aplicación no se inicia.

:::note

Antes de la versión 7.12, el servicio AdGuard se iniciaba en modo de filtrado de forma predeterminada (incluso si la opción *Iniciar AdGuard al arrancar el sistema* estaba desactivada). Si estabas satisfecho con el recurso anterior, habilita esta opción.

:::

### Filtrar localhost

Si deseas que AdGuard filtre las conexiones loopback, marca la casilla. Esta opción siempre estará activada si tienes AdGuard VPN instalado, porque de lo contrario no podrá funcionar.

### Excluir del filtrado rangos de IP especificados

Si no deseas que AdGuard filtre subredes particulares, habilita esta función y especifica los rangos de IP en la notación CIDR (por ejemplo, 98.51.100.14/24) en la sección **rangos de IP excluidos del filtrado** a continuación.

### Habilitar escritura HAR

Esta opción debe habilitarse **solo con fines de debugging**. Marcar la casilla de verificación hará que AdGuard cree un archivo en el formato HAR 1.2 que contiene información sobre todas las Peticiones HTTP filtradas. Este archivo se puede analizar con la aplicación Fiddler. Ten en cuenta que esto puede ralentizar significativamente tu navegación web.

### Añadir un espacio adicional a la petición HTTP simple

Agrega espacio adicional entre el método HTTP y la URL y elimina el espacio después del campo "Host:" para evitar la inspección profunda de paquetes. Por ejemplo, la solicitud

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Ajustar el tamaño de la fragmentación del paquete TLS inicial

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Si se especifica un tamaño no válido, se utilizará el valor seleccionado por el sistema. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Tamaño de fragmento de la petición HTTP simple

Ajusta el tamaño de la fragmentación de la solicitud HTTP. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Valores válidos: 1–1500. Si se especifica un tamaño no válido, se utilizará el valor seleccionado por el sistema. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Mostrar QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Habilitar TCP keepalive

Valores válidos: 1–1500. Si se especifica un tamaño no válido, se utilizará el valor seleccionado por el sistema.

### Intervalo de TCP keepalive

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Tiempo de espera de TCP keepalive

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Bloquear Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### Tiempo de espera del servidor DNS

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Usar HTTP/3 para DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Usar upstreams de DNS alternativos

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Consultar servidores DNS de upstream en paralelo

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Siempre responder a las consultas DNS fallidas

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Habilitar el filtrado de solicitudes de DNS seguras

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Modo de bloqueo para reglas de hosts

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Respuesta con error "Rechazado"
- Respuesta con error "NxDomain"
- Respuesta con una dirección IP personalizada

### Modo de bloqueo para reglas de estilo adblock

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Respuesta con error "Rechazado"
- Respuesta con error "NxDomain"
- Respuesta con una dirección IP personalizada

### Dirección IPv4 personalizada

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Dirección IPv6 personalizada

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Servidores fallback

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- No usar servidores alternativos;
- Usar servidores predeterminados del sistema;
- Usar servidores personalizados.

### Bloquear ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Lista de servidores alternativos personalizados

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Lista de direcciones boostrap personalizadas

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### Exclusiones del DNS

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Excluir los nombres de redes Wi-Fi (SSID) especificados del filtrado de DNS

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
