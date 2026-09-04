---
title: Guía de configuración de bajo nivel
sidebar_position: 5
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cómo acceder a la configuración de bajo nivel

:::caution

Cambiar la <em x-id="3">configuración de bajo nivel</em> puede causar problemas con el rendimiento de AdGuard, romper la conexión a Internet o comprometer tu seguridad y privacidad. Utiliza las características de bajo nivel solo si eres un usuario experimentado y sabes lo que estás haciendo, o si nuestro equipo de soporte te lo ha pedido.

:::

Para acceder a _Configuración de bajo nivel_, abre la aplicación AdGuard y toca el icono de engranaje en la esquina inferior derecha de la pantalla. A continuación, selecciona _General → Avanzado → Ajustes de bajo nivel_.

## Configuración de bajo nivel

Para AdGuard para Android v4.x, hemos rediseñado por completo los ajustes de bajo nivel. Hemos revisado la lista de configuraciones y las organizamos en grupos temáticos con descripciones más acertadas. También añadimos una validación de entrada y otras características de seguridad.

### Protección DNS

#### Upstreams fallback

Aquí puedes especificar los solucionadores DNS fallback que se utilizarán si el servidor configurado no está disponible. Opciones disponibles:

- _DNS automático_: Seleccione esta opción si desea utilizar el DNS del sistema o AdGuard DNS.
- _Ninguna_: Selecciona esta opción si no deseas tener ninguna alternativa.
- _DNS personalizado_: Selecciona esta opción e introduce direcciones IPv4 o IPv6 de servidores DNS en texto sin formato, una por línea. Estas direcciones serán utilizadas para denotar su proveedor

#### Dominios fallback

Aquí usted podrá enlistar dominios a los que puede ser redirigido como respaldo, en caso de no ser encontrados o no estar disponibles. Puede ingresar múltiples dominios, uno por cada línea. Puedes utilizar comodines limitados.

#### Detectar dominios de búsqueda

Si esta configuración está habilitada, AdGuard detectará los dominios de búsqueda DNS y los redirigirá automáticamente a fallback upstreams, si están disponibles.

#### Bootstrap de subida

Bootstrap DNS para DNS upstream cifrado, como servidores DoH, DoT y DoQ. Opciones disponibles:

- _DNS automático_: Seleccione esta opción si desea utilizar el DNS del sistema o AdGuard DNS. Esta opción está habilitada por defecto.
- _DNS personalizado_: Selecciona esta opción e introduce direcciones IPv4 o IPv6 de servidores DNS en texto sin formato, una por línea. Estas direcciones serán utilizadas como proveedores tipo BOOTP

#### Modo de bloqueo para reglas de estilo adblock

Aquí puede especificar el tipo de respuesta para los dominios bloqueados por reglas DNS basadas en la sintaxis de las reglas de bloqueo de anuncios (por ejemplo, `||example.org^`). Opciones disponibles:

- _REFUSED_: Responde con REFUSED
- _NXDOMAIN_: Responder con NXDOMAIN
- _Dirección IP personalizada_: Selecciona esta opción para responder con una dirección IP personalizada. Deberás ingresar una dirección IPv4 para las peticiones "A" bloqueadas y una dirección IPv6 para las peticiones "AAAA" bloqueadas.

#### Modo de bloqueo para reglas de hosts

Aquí puede especificar el tipo de respuesta para los dominios bloqueados por reglas DNS basadas en la sintaxis de las reglas de hosts
(por ejemplo, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Responde con REFUSED
- _NXDOMAIN_: Responder con NXDOMAIN
- _Dirección IP personalizada_: Selecciona esta opción para responder con una dirección IP personalizada. Deberás ingresar una dirección IPv4 para las peticiones "A" bloqueadas y una dirección IPv6 para las peticiones "AAAA" bloqueadas.

#### Tiempo de espera de petición de DNS

Aquí puedes especificar el tiempo de espera, en milisegundos, que AdGuard esperará para cada petición DNS antes de redirigirla a un solucionador DNS alternativo. Si no completas este campo o ingresas un valor no válido, se utilizará el valor de 5000 ms.
Si tiene varios proveedores, el DNS de respaldo será utilizado solo después de que hayan expirado los tiempos de espera de cada servidor.

#### TTL de respuesta bloqueada

Aquí puedes configurar el tiempo de vida (TTL) del registro de dominios bloqueados. El valor predeterminado es 3600 segundos.

#### Tamaño de caché de DNS

Aquí puedes especificar el número máximo de respuestas almacenadas en caché. El valor predeterminado es 1000.

#### Bloqueo ECH

Si esta configuración está habilitada, AdGuard bloqueará TLS Encrypted Hello (ECH) en las respuestas DNS.

#### Probar HTTP/3 para upstreams de DNS-over-HTTPS

Si esta configuración está habilitada, AdGuard utilizará HTTP/3 para acelerar la resolución de consultas DNS para los proveedores DNS de DNS mediante HTTPS. De lo contrario, AdGuard volverá a su comportamiento predeterminado y utilizará HTTP/2 para enviar todas las peticiones DNS para DNS-over-HTTPS.

#### Respuesta a fallos de SERVFAIL

Si esta configuración está habilitada, AdGuard enviará una respuesta SERVFAIL al cliente si todas las fuentes, incluidas las de segunda opción, no responden. Si esta configuración está deshabilitada, no se enviará ninguna respuesta al cliente en tal caso.

#### Utilice la opción de respaldo para todos los dominios

Si esta configuración está habilitada, AdGuard utilizará proveedores DNS alternativos para todos los dominios, incluidos los no alternativos. De lo contrario, los upstreams de fallback solo se utilizarán para dominios de segunda opción y dominios de búsqueda si la opción correspondiente está habilitada.

#### Validar upstreams DNS

Si esta configuración está habilitada, AdGuard probará las fuentes DNS upstream antes de agregar o actualizar servidores DNS personalizados.

#### Filtrar DNS seguro

Si está configuración está habilitada, AdGuard filtrará las peticiones DNS encriptadas además de las peticiones DNS simples. El tráfico de DNS encriptado viene en su mayoría desde Chrome y otros navegadores de internet que tengan una configuración de DNS Seguro.

Esta configuración tiene dos modos:

- **Filtrar en tiempo real**. En este modo, AdGuard filtrará el tráfico DNS-sobre-HTTPS sin redireccionarlo al DNS de proxy local. Se utilizará el servidor DNS especificado en la configuración del navegador de internet.

- **Redirigir al proxy DNS**. En este modo, AdGuard redireccionará las solicitudes de DNS-sobre-HTTPS al DNS proxy local para su filtrado. Se utilizará el servidor de DNS seleccionado en la configuración de DNS de la aplicación de AdGuard.

### Filtrado

#### Capturar HAR

Si esta configuración está habilitada, AdGuard registrará todas las peticiones HTTP filtradas en formato HAR 1.2 en el subdirectorio “har” del directorio de caché de la app. Estos archivos se pueden analizar con la aplicación Fiddler.

Esta configuración podría ralentizar su dispositivo. Úsalo solo para fines de depuración.

### Filtrado HTTPS

#### Encrypted Client Hello

Si esta configuración está habilitada, AdGuard cifrará ClientHellos, de ser necesario. Esta función requiere que el filtrado HTTPS esté habilitado. Esta característica utiliza un proxy DNS local para buscar la configuración de ECH para el dominio. Si se encuentra, el paquete ClientHello se cifrará. Asegúrese de utilizar un servidor DNS encriptado con esta función.

**Acerca de ClientHellos y ECH**: Cada conexión cifrada a Internet tiene una parte sin cifrar. Es el primer paquete que contiene el nombre del servidor al que se está conectando. La tecnología Encrypted Client Hello está diseñada para resolver este problema cifrando este paquete.

#### Verificación de OCSP

Si esta opción está activada, AdGuard comprobará automáticamente el estado de revocación de los certificados SSL antes de conectarse a un sitio web. Esta función requiere que el filtrado HTTPS esté habilitado.

Si se completa la verificación dentro del tiempo de espera requerido, AdGuard permitirá la conexión si el certificado es válido o bloqueará inmediatamente la conexión si el certificado es revocado.

Si la verificación tarda demasiado tiempo, AdGuard permitirá la conexión mientras continúa verificando el estado del certificado en segundo plano. Si se revoca el certificado, se bloquearán las conexiones actuales y futuras al dominio.

#### Filtrar HTTP/3

Si esta configuración está habilitada, AdGuard filtrará las solicitudes enviadas a través de HTTP/3 además de otros tipos de solicitudes. Esta función requiere que el filtrado HTTPS esté habilitado.

**Acerca de HTTP/3**: Esta es la versión más reciente del protocolo HTTP, basada en QUIC.

**Limitaciones**:

- Los navegadores basados en "Chrome" no aceptan certificados de usuario, por lo que el filtro HTTP/3 no funciona en ellos.
- Los navegadores basados en Firefox se comportan de manera similar de forma predeterminada, pero puedes establecer la opción `network.http.http3.disable_when_third_party_roots_found` en `about:config` como `false` para permitir certificados de usuario para HTTP/3.
- Safari soporta filtrado HTTP/3 sin configuración adicional.

### Proxy saliente

#### Mostrar la configuración de solicitudes DNS de filtro

Cuando esta opción está activada, el interruptor _Filtrar solicitudes DNS_ se muestra en el cuadro de diálogo _Añadir servidor proxy_. Para acceder al cuadro de diálogo, abre **Configuración**, ve a **Filtrado** → **Red** → **Proxy** → **Servidor proxy** y haz clic en _+ Añadir servidor proxy_. Al habilitar este cambio se activará el filtrado de solicitudes DNS que pasan a través del proxy de salida especificado.

### Protección

#### Rangos de puertos

Esta configuración permite especificar los rangos de puertos que deben filtrarse. Ingrese los rangos de puertos, un rango por línea. Usa `..` para especificar el rango. Por ejemplo, `80..5221`.

#### Registrar eventos HTML eliminados

Si esta opción está activada, AdGuard escribirá información sobre los elementos HTML bloqueados en _Actividad reciente_. Para acceder a los registros, ve a **Estadísticas** → **Actividad reciente**.

#### Depuración de scriptlet

Si esta configuración está habilitada, la app mostrará información de depuración en la consola del navegador. En este modo, se activa la depuración en scriptlets y el navegador registra los eventos que ocurren cuando se aplican las reglas de scriptlets.

#### Aplicaciones excluidas

Esta configuración permite listar los paquetes y UIDs que se excluirán de la protección de AdGuard. Ingrese nombres de paquetes o UIDs, uno por línea. Puedes usar `//` para los comentarios.

#### Paquetes de derivación QUIC

Aquí puedes especificar los nombres de los paquetes para los cuales AdGuard debe omitir el tráfico QUIC. Esta configuración solo se aplica si el <em x-id="3">Modo de enrutamiento</em> está configurado en <em x-id="3">Proxy automático</em>. Puedes usar `//` para los comentarios.

#### Reconfiguración automática del proxy cuando cambia la red

Si esta configuración está habilitada, la protección AdGuard se reiniciará para reconfigurar los parámetros automáticos del proxy cuando tu dispositivo se conecte a otra red. Esta configuración solo se aplica cuando el _Modo de enrutamiento_ está establecido en _Proxy automático_.

#### Filtrado IPv6

Si esta configuración está habilitada, AdGuard filtrará las redes IPv6 si hay una interfaz de red IPv6 disponible.

#### Intervalos de IPv4 excluidos del filtrado

Aquí puedes enumerar los rangos IPv4 para excluir del filtrado. Aquí puedes especificar el tiempo de inactividad antes de iniciar las sondas keepalive y el tiempo entre sondas keepalive para un peer que no responde. Puedes usar `//` para los comentarios.

#### Intervalos de IPv6 excluidos del filtrado

Si esta configuración está habilitada, AdGuard enviará una sonda de mantenimiento después del período de tiempo especificado para garantizar que la conexión TCP esté activa. Aquí puedes especificar el tiempo de inactividad antes de iniciar las sondas keepalive y el tiempo entre sondas keepalive para un peer que no responde. Puedes usar `//` para los comentarios.

#### TCP keepalive para sockets salientes

Si esta configuración está habilitada, AdGuard enviará una sonda de mantenimiento después del intervalo de tiempo especificado para garantizar que la conexión TCP esté activa. Después de un número definido por el sistema de intentos fallidos de obtener una respuesta del servidor, el sistema cerrará automáticamente la conexión TCP.

Esta configuración te permite especificar:

- **Tiempo de inactividad**, en segundos, antes de enviar sondeos TCP de mantenimiento de conexión a los sockets salientes. El valor predeterminado es 0. Si tienes problemas con NAT, configúralo a 20.
- **Tiempo entre sondeos de conexión persistente** para un par que no responde. El valor predeterminado es 0 segundos.

### Configuración de VPN local

#### Retraso de recuperación para VPN revocada

Aquí puedes establecer el tiempo de retraso en milisegundos antes de que AdGuard reprograme la restauración de la protección VPN después de que haya sido revocada por una aplicación VPN de terceros o al eliminar el perfil VPN. El valor predeterminado es 5000 ms.

#### Reprogramar el retraso para la recuperación de VPN revocada

Aquí puedes establecer el tiempo de retraso en milisegundos antes de que AdGuard reprograme la restauración de la protección VPN después de que haya sido revocada por una aplicación VPN de terceros o al eliminar el perfil VPN. El valor predeterminado es 5000 ms.

#### MTU

Aquí puedes configurar la unidad de transmisión máxima (MTU) de la interfaz VPN. Este es el tamaño máximo del paquete de datos utilizado en su VPN local. El intervalo recomendado es de 1500 a 1900 bytes.

#### Captura de paquetes (PCAP)

Esta configuración habilita el registro de interfaces TUN. Cuando está habilitado, AdGuard crea un archivo `timestamp.pcap`, como 1682599851461.pcap, en el directorio de caché de la aplicación. Este archivo enumera todos los paquetes de red transmitidos a través de la VPN y puede analizarse utilizando la herramienta Wireshark.

#### Incluir puerta de enlace Wi-Fi en rutas VPN

Si esta configuración está habilitada, las direcciones IP de la puerta de enlace se agregarán a las rutas de VPN cuando el dispositivo esté conectado a wifi.

#### Dirección IPv4

Aquí puedes especificar la dirección IP que se utilizará para crear una interfaz TUN. El valor predeterminado es `172.18.11.218`.

#### Enrutar a la fuerza LAN IPv4

Si este ajuste está activado, AdGuard filtrará todas las conexiones LAN, incluido el tráfico de red IPv4 local, incluso si la opción _Enrutar todas las conexiones LAN IPv4_ está activada.

#### Enrutar todas las conexiones LAN IPv4

Si esta configuración está habilitada, AdGuard excluirá las conexiones LAN del filtrado para redes simples. Es posible que esto no funcione para redes complejas. Esta configuración solo se aplica si _Enrutar IPv4 de LAN de forma forzada_ está deshabilitado.

#### Dirección IPv6

Aquí puedes ingresar la dirección IP que se utilizará para crear una interfaz TUN. El valor predeterminado es `2001:db8:ad:0:ff::`.

### Misceláneo

#### Mostrar las herramientas de desarrollador en la pantalla principal

Si esta opción está activada, AdGuard mostrará el icono **Herramientas para desarrolladores** en la esquina superior derecha de la pantalla de inicio de la aplicación.

**Herramientas para desarrolladores** es una sección especializada disponible en AdGuard para Android v4.3 y versiones posteriores, diseñada para navegar rápidamente y cambiar entre funciones. Te permite habilitar o deshabilitar rápidamente filtros personalizados, acceder a registros, habilitar varios registros y más.

#### Modo de interfaz de usuario simplificada

Si esta opción está activada, AdGuard solo mostrará el icono de DNS en la pantalla de inicio de la aplicación.

#### Detectar Samsung Pay

Si esta configuración está habilitada, la protección de AdGuard se pausará cuando abras la aplicación Samsung Pay. Los usuarios coreanos requieren esta característica ya que experimentan [asuntos con Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) cuando AdGuard está habilitado.

#### Mostrar aplicaciones clonadas

Si esta opción está habilitada, podrás cambiar la configuración de enrutamiento, filtrado y cortafuegos de las aplicaciones clonadas en _Gestión de aplicaciones_.
