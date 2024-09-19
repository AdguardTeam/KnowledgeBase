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

### Use Encrypted Client Hello

Toda conexión a Internet cifrada tiene una parte no cifrada. Este es el primer paquete que contiene el nombre del servidor al que te estás conectando. La tecnología Encrypted Client Hello resuelve este problema y cifra la última parte de la información no cifrada. To benefit from it, enable the *Use Encrypted Client Hello* option. Utiliza un proxy DNS local para buscar la configuración de ECH para el dominio. If it is found, Client Hello packet will be encrypted.

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

### Usar modo de redireccionamiento del driver

Si esta opción está habilitada, AdGuard intercepta todo el tráfico y lo redirige al servidor proxy local para un mayor filtrado.

De lo contrario, AdGuard filtrará todo el tráfico, sin redirección. En este caso, el sistema considerará que AdGuard es la única aplicación que se conecta a Internet (las demás aplicaciones se enrutan a través de él). La desventaja es que eso hará que el Firewall del sistema sea menos efectivo. La ventaja es que este enfoque funciona un poco más rápido.

### Abrir la ventana principal al inicio del sistema

Activa esta opción para que la ventana principal de AdGuard se abra después de cargar el sistema. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in *Settings → General Settings*.

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

Esta opción debe habilitarse **solo con fines de debugging**. Ticking the checkbox will make AdGuard create a file in the HAR 1.2 format containing information about all filtered HTTP requests. Este archivo se puede analizar con la aplicación Fiddler. Ten en cuenta que esto puede ralentizar significativamente tu navegación web.

### Añadir un espacio adicional a la petición HTTP simple

Agrega espacio adicional entre el método HTTP y la URL y elimina el espacio después del campo "Host:" para evitar la inspección profunda de paquetes. Por ejemplo, la solicitud

`GET /foo/bar/ HTTP/1.1
Host: ejemplo.org`

se convertirá en

`GET /foo/bar/ HTTP/1.1
Host: ejemplo.org`

Esta opción solo se aplica cuando la opción *Proteger de DPI* en Modo Stealh está habilitada.

### Ajustar el tamaño de la fragmentación del paquete TLS inicial

Especifica el tamaño de la fragmentación del paquete TCP, evitando la inspección profunda de paquetes. Esta opción solo afecta el tráfico seguro (HTTPS).

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valores válidos: 1–1500. Si se especifica un tamaño no válido, se utilizará el valor seleccionado por el sistema. Esta opción solo se aplica cuando la opción *Proteger de DPI* en Modo Stealh está habilitada.

### Tamaño de fragmento de la petición HTTP simple

Ajusta el tamaño de la fragmentación de la solicitud HTTP. Esta opción solo afecta al tráfico HTTP simple. Si esta opción está habilitada, AdGuard divide el paquete inicial en dos partes: la primera tiene la longitud especificada y la segunda tiene el resto, hasta la longitud de todo el paquete original.

Valores válidos: 1–1500. Si se especifica un tamaño no válido, se utilizará el valor seleccionado por el sistema. Esta opción solo se aplica cuando la opción *Proteger de DPI* en Modo Stealh está habilitada.

### Mostrar QUIC

Permite visualizar los registros del protocolo QUIC en el log de filtrado. Solo para solicitudes bloqueadas.

### Habilitar TCP keepalive

Envía periódicamente paquetes TCP a través de una conexión inactiva para asegurarte de que esté activa y para renovar los tiempos de espera de NAT. Esta opción puede ser útil para omitir la estricta configuración de traducción de direcciones de red (NAT) que utilizan algunos ISP.

### Intervalo de TCP keepalive

Aquí puedes especificar un período de tiempo de inactividad, en segundos, antes de enviar una prueba de keepalive. Si se especifica 0, se utilizará el valor seleccionado por el sistema.

:::note

Esta configuración solo funciona cuando la opción *Activar TCP keepalive* está habilitada.

:::

### Tiempo de espera de TCP keepalive

Aquí puedes especificar el tiempo en segundos antes de enviar otra prueba de keepalive a un par que no responde. Si se especifica 0, se utilizará el valor seleccionado por el sistema.

:::note

Esta configuración solo funciona cuando la opción *Activar TCP keepalive* está habilitada.

:::

### Bloquear Java

Algunos sitios web y servicios web todavía son compatibles con los complementos de Java. La API que sirve como base para los complementos de Java tiene vulnerabilidades de seguridad graves. Puedes deshabilitar estos complementos por motivos de seguridad. Sin embargo, incluso si decides utilizar la opción *Bloquear Java*, JavaScript seguirá estando habilitado.

### Tiempo de espera del servidor DNS

Aquí puedes especificar el tiempo en milisegundos que AdGuard esperará la respuesta del servidor DNS seleccionado antes de recurrir al fallback. Si no completas este campo o ingresas un valor no válido, se utilizará el valor de 5000.

### Usar HTTP/3 para DNS-over-HTTPS

Habilita HTTP/3 para upstreams de DNS-over-HTTPS para acelerar la conexión si el upstream seleccionado admite este protocolo. Esto significa que habilitar esta opción no garantiza que todas las solicitudes de DNS se envíen a través de HTTP/3.

### Usar upstreams de DNS alternativos

Las consultas normales se redirigirán al upstream alternativo si fallan todas las solicitudes de DNS a los upstream seleccionados.

### Consultar servidores DNS de upstream en paralelo

Todos los canales ascendentes se consultarán en paralelo y se devolverá la primera respuesta. Dado que las consultas de DNS se realizan en paralelo, habilitar esta función aumenta la velocidad de Internet.

### Siempre responder a las consultas DNS fallidas

Si la resolución de direcciones falla en cada uno de los upstreams reenviados, así como en los dominios alternativos, la respuesta a la solicitud de DNS será `SERVFAIL`.

### Habilitar el filtrado de solicitudes de DNS seguras

AdGuard redirigirá las solicitudes de DNS seguras al proxy DNS local, además de las solicitudes de DNS simples.

### Modo de bloqueo para reglas de hosts

Aquí puedes seleccionar la forma en que AdGuard responderá a los dominios bloqueados por las reglas de DNS según [la sintaxis de la regla de hosts](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Respuesta con error "Rechazado"
- Respuesta con error "NxDomain"
- Respuesta con una dirección IP personalizada

### Modo de bloqueo para reglas de estilo adblock

Aquí puedes seleccionar la forma en que AdGuard responderá a los dominios bloqueados por las reglas de DNS según [la sintaxis de la regla de estilo adblock](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Respuesta con error "Rechazado"
- Respuesta con error "NxDomain"
- Respuesta con una dirección IP personalizada

### Dirección IPv4 personalizada

Si se selecciona la dirección IP personalizada en modo de bloqueo para reglas de hosts o modo de bloqueo para reglas de estilo adblock, esta dirección IP se devolverá en respuesta a solicitudes A bloqueadas. Si no se especifica ninguno, AdGuard responderá con el error predeterminado "Rechazado".

### Dirección IPv6 personalizada

Si se selecciona la dirección IP personalizada en modo de bloqueo para reglas de hosts o modo de bloqueo para reglas de estilo adblock, esta dirección IP se devolverá en respuesta a solicitudes AAAA bloqueadas. Si no se especifica ninguno, AdGuard responderá con el error predeterminado "Rechazado".

### Servidores fallback

Aquí puesde especificar un servidor DNS alternativo al que se redirigirá una solicitud de DNS si el servidor principal no responde dentro del período de tiempo de espera especificado en la siguiente sección. Hay tres opciones para elegir:

- No usar servidores alternativos;
- Usar servidores predeterminados del sistema;
- Usar servidores personalizados.

### Bloquear ECH

Si está habilitado, AdGuard elimina los parámetros Encrypted ClientHello de las respuestas.

### Lista de servidores alternativos personalizados

Si deseas que AdGuard use servidores alternativos personalizados, inclúyelos en esta sección, uno por línea.

### Lista de direcciones boostrap personalizadas

Un bootstrap es un servidor DNS intermedio que se utiliza para obtener la dirección IP del servidor DNS seguro que eligiste anteriormente en *Protección DNS*. Este intermedio es necesario cuando se utilizan protocolos que indican la dirección del servidor mediante letras (como DNS-over-TLS, por ejemplo). En este caso, el bootstrap actúa como un traductor, transformando las letras en números que tu sistema pueda entender.

De forma predeterminada, se utiliza el sistema de resolución de DNS del sistema y la solicitud bootstrap inicial se realiza a través del puerto 53. Si esto no te conviene, enumera aquí las direcciones IP de los servidores DNS que se utilizarán para determinar la dirección del servidor DNS encriptado en orden de arriba a abajo. Las direcciones IP especificadas se aplicarán en el orden indicado. Si especificas direcciones no válidas, o ninguna dirección, se utilizarán las IP del sistema.

### Exclusiones del DNS

Todas las solicitudes de DNS a los dominios enumerados aquí se redirigirán al servidor DNS predeterminado del sistema en lugar del servidor DNS especificado en la configuración de la aplicación. Además, las reglas de bloqueo de DNS no se aplicarán a estas solicitudes.

### Excluir los nombres de redes Wi-Fi (SSID) especificados del filtrado de DNS

La protección DNS no incluirá las redes Wi-Fi enumeradas en esta sección. Especifique los nombres de las redes Wi-Fi (SSID), uno por línea. Esto puede ser útil si una red Wi-Fi en particular ya está protegida por AdGuard Home u otro sistema de protección de DNS. En este caso, es superfluo volver a filtrar las solicitudes de DNS.
