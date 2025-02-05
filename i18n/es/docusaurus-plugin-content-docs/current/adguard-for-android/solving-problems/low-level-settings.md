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

Si esta configuración está habilitada, AdGuard detectará los dominios de búsqueda y los reenviará automáticamente a los dominios fallback de subida.

#### Bootstrap de subida

DNS de arranque para servidores DoH, DoT y DoQ. El *DNS automático* (el DNS del sistema o DNS AdGuard) se utiliza de forma predeterminada. Al seleccionar *DNS personalizado*, puedes enumerar las direcciones de servidor IPv4 e IPv6 para usar como enlaces ascendentes de arranque.

#### Modo de bloqueo para reglas de estilo adblock

Aquí puedes especificar el tipo de respuesta para los dominios bloqueados por las reglas DNS según la sintaxis de la regla de bloqueo de publicidad (por ejemplo, `||example.org^`).

- Responder con REFUSED
- Responder con NXDOMAIN
- Responder con dirección IP personalizada (aquí se pueden especificar direcciones IPv4 e IPv6)

#### Modo de bloqueo para reglas de hosts

Aquí puede especificar el tipo de respuesta para los dominios bloqueados por las reglas DNS según la sintaxis de la regla de hosts (por ejemplo, `<ip> <domain> 0.0.0.0 example.com`).

- Responder con REFUSED
- Responder con NXDOMAIN
- Responder con dirección IP personalizada (aquí se pueden especificar direcciones IPv4 e IPv6)

#### Tiempo de espera de petición de DNS

Aquí puedes especificar el tiempo en milisegundos que AdGuard esperará la respuesta del servidor DNS seleccionado antes de recurrir al fallback. Si no completas este campo o ingresas un valor no válido, se utilizará el valor de 5000.

#### TTL de respuesta bloqueada

Aquí puedes especificar el valor TTL (tiempo de vida) que se devolverá en respuesta a una solicitud bloqueada.

#### Tamaño de caché de DNS

Aquí puedes especificar el número máximo de respuestas almacenadas en caché. El valor predeterminado es 1000.

#### Bloqueo ECH

Si está habilitado, AdGuard elimina los parámetros Encrypted Client Hello de las respuestas DNS.

#### Ignorar proxy de salida no disponible

Si esta configuración está habilitada, AdGuard enviará solicitudes de DNS directamente cuando el proxy saliente no esté disponible.

#### Probar HTTP/3 para upstreams de DNS-over-HTTPS

Si esta configuración está habilitada, AdGuard utilizará HTTP/3 para acelerar la resolución de consultas DNS para los enlaces ascendentes de DoH. De lo contrario, AdGuard volverá a su comportamiento predeterminado y utilizará HTTP/2 para enviar todas las solicitudes de DNS para DNS sobre HTTPS.

#### Respuesta a fallos de SERVFAIL

Si esta configuración está habilitada y todos los upstreams, incluidos los de respaldo, no responden, AdGuard enviará una respuesta SERVFAIL al cliente.

#### Usar fallback para dominios que no son de fallback

Si esta configuración está habilitada, AdGuard utilizará rutas ascendentes de respaldo para todos los dominios. De lo contrario, los upstreams de respaldo solo se utilizarán para dominios de respaldo y dominios de búsqueda si la opción correspondiente está habilitada.

#### Validar upstreams DNS

Si esta configuración está habilitada, AdGuard probará los servidores DNS ascendentes antes de agregar o actualizar servidores DNS personalizados.

#### Filtrar DNS seguro

Si esta configuración está activada, AdGuard aplicará todos los filtros DNS habilitados y las reglas de usuario DNS al tráfico DNS sobre HTTPS (DoH) cifrado y no solo al DNS simple. El tráfico de DoH proviene principalmente de Chrome y otros navegadores que tienen una configuración *DNS seguro* (o similar). Puedes usar *Filtro DNS seguro* en dos modos diferentes:

- **Filtrar en tiempo real**. En este modo, AdGuard aplica todos los filtros DNS habilitados y las reglas de usuario DNS al tráfico DoH, pero no lo redirecciona al proxy DNS local. Si se especifica un servidor DNS en la configuración del navegador, este servidor manejará el tráfico DoH para este navegador

- **Redirigir al proxy DNS**. En este modo, AdGuard aplica todos los filtros DNS habilitados y las reglas de usuario DNS al tráfico DoH redirigiéndolo al proxy DNS local. El servidor DNS especificado en la configuración de DNS de AdGuard manejará todo el tráfico DoH

### Filtrado

#### Capturar HAR

Si esta configuración está habilitada, AdGuard capturará archivos HAR. Creará un directorio llamado “har” dentro del directorio de caché de la aplicación y agregará allí información sobre todas las solicitudes HTTP filtradas en formato HAR 1.2 que se pueden analizar con el programa Fiddler.

¡Úsalo sólo para fines de depuración!

### Filtrado HTTPS

#### Encrypted Client Hello

Toda conexión a Internet cifrada tiene una parte no cifrada. Este es el primer paquete que contiene el nombre del servidor al que te estás conectando. La tecnología Encrypted Client Hello resuelve este problema y cifra la última parte de la información no cifrada. Para beneficiarte de ello, habilita la opción *Encrypted Client Hello*. Utiliza un proxy DNS local para buscar la configuración de ECH para el dominio. Si se encuentra, se cifrará el paquete Client Hello.

#### Verificación de OCSP

Si esta configuración está habilitada, AdGuard realizará comprobaciones OCSP asincrónicas para obtener el estado de revocación del certificado SSL de un sitio web.

Si se completa una verificación OCSP dentro del tiempo de espera requerido, AdGuard bloqueará inmediatamente la conexión si se revoca el certificado o establecerá la conexión si el certificado es válido.

Si la verificación tarda demasiado tiempo, AdGuard permitirá la conexión mientras continúa verificando el estado del certificado en segundo plano. Si se revoca el certificado, se bloquearán las conexiones actuales y futuras al dominio.

#### Redirigir solicitudes de DNS-over-HTTPS

Si esta configuración está habilitada, AdGuard redirigirá las solicitudes de DNS-over-HTTPS al proxy DNS local, además de las solicitudes de DNS simples. Recomendamos deshabilitar los servidores ascendentes de respaldo y utilizar solo servidores DNS encriptados para mantener la privacidad.

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

Aquí puedes enumerar los nombres de los paquetes y los UID que deseas excluir de la protección de AdGuard.

#### Paquetes de derivación QUIC

Aquí puedes especificar los nombres de los paquetes para los cuales AdGuard debe omitir el tráfico QUIC.

#### Reconfiguración automática del proxy cuando cambia la red

Si esta configuración está habilitada, la protección AdGuard se reiniciará para reconfigurar la configuración automática del proxy cuando tu dispositivo se conecte a otra red. Esta configuración solo se aplica si el *Modo de enrutamiento* está configurado en *Proxy automático*.

#### Filtrado IPv6

Si esta configuración está habilitada, AdGuard filtrará las redes IPv6 si hay una interfaz de red IPv6 disponible.

#### Intervalos de IPv4 excluidos del filtrado

El filtrado para los intervalos de IPv4 enumerados en esta sección está deshabilitado.

#### Intervalos de IPv6 excluidos del filtrado

El filtrado para los intervalos de IPv6 enumerados en esta sección está deshabilitado.

#### TCP keepalive para sockets salientes

Si esta configuración está habilitada, AdGuard enviará una sonda de mantenimiento después del período de tiempo especificado para garantizar que la conexión TCP esté activa. Aquí puedes especificar el tiempo de inactividad antes de iniciar las sondas keepalive y el tiempo entre sondas keepalive para un peer que no responde.

Después de un número definido por el sistema de intentos fallidos de obtener una respuesta del servidor, el sistema cierra automáticamente la conexión TCP.

### Configuración de VPN local

#### Retraso de recuperación para VPN revocada

Aquí puedes establecer el tiempo de retraso en milisegundos antes de que AdGuard intente restaurar la protección VPN después de que haya sido revocada por una aplicación VPN de terceros o eliminando el perfil VPN. El valor predeterminado es 5000 ms.

#### Reprogramar el retraso para la recuperación de VPN revocada

Aquí puedes establecer el tiempo de retraso en milisegundos antes de que AdGuard reprograme la restauración de la protección VPN después de que haya sido revocada por una aplicación VPN de terceros o al eliminar el perfil VPN. El valor predeterminado es 5000 ms.

#### MTU

Aquí puedes configurar la unidad de transmisión máxima (MTU) de la interfaz VPN. El intervalo recomendado es de 1500 a 1900 bytes.

#### Restaurar VPN automáticamente

Si esta configuración está habilitada, la VPN local de AdGuard se volverá a habilitar automáticamente después de apagarse debido a ausencia de red, conexión compartida o modo de bajo consumo.

#### Captura de paquetes (PCAP)

Si esta configuración está habilitada, AdGuard creará un archivo `timestamp.pcap` (por ejemplo, 1682599851461.pcap) en el directorio de caché de la aplicación. Este archivo enumera todos los paquetes de red transferidos a través de la VPN y puede analizarse con el programa Wireshark.

#### Incluir puerta de enlace Wi-Fi en rutas VPN

Si esta configuración está habilitada, las direcciones IP de la puerta de enlace se agregarán a las rutas VPN cuando esté en Wi-Fi.

#### Dirección IPv4

Aquí puedes ingresar la dirección IP que se utilizará para crear una interfaz TUN. De forma predeterminada, es `172.18.11.218`.

#### Enrutar a la fuerza LAN IPv4

Si esta configuración está habilitada, AdGuard filtrará todas las conexiones LAN, incluido el tráfico de red IPv4 local, incluso si la opción *Enrutar todas las conexiones IPv4 LAN* está habilitada.

#### Enrutar todas las conexiones LAN IPv4

Si esta configuración está habilitada, AdGuard excluirá las conexiones LAN del filtrado para redes simples. Es posible que esto no funcione para redes complejas. Esta configuración solo se aplica si la opción *Enrutar forzosamente LAN IPv4* está deshabilitada.

#### Dirección IPv6

Aquí puedes ingresar la dirección IP que se utilizará para crear una interfaz TUN. De forma predeterminada, es `2001:db8:ad:0:ff::`.

### Misceláneo

#### Detectar Samsung Pay

Si esta configuración está habilitada, la protección de AdGuard se pausará mientras Samsung Pay esté en uso. Los usuarios coreanos requieren esta función porque experimentan [problemas con Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) cuando AdGuard está habilitado.
