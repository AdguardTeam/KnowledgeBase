---
title: Tracking protection
sidebar_position: 2
---

Muchos sitios web recopilan datos sobre sus visitantes, incluidas las direcciones IP, la información del navegador y del sistema operativo, la resolución de pantalla e incluso la página de la que provienes. Las cookies pueden utilizarse para identificar tu navegador, recordar tus preferencias o reconocerte cuando regreses. La protección de seguimiento impide que estos sistemas recopilen tus datos personales. Descubre más en nuestro [artículo sobre protección de seguimiento en AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Si no quieres dedicar tiempo a ajustar los filtros manualmente, puedes simplemente elegir uno de los niveles de protección predefinidos:

- _Estándar_: está habilitado de forma predeterminada y proporciona protección fiable para la navegación diaria.
- _Alto_: elimina los parámetros de seguimiento de las URL de las páginas y bloquea las cookies de terceros. Es posible que tengas que volver a iniciar sesión en algunos sitios web o enfrentar otros problemas relacionados con las cookies.
- _Extremo_: limita la duración de las cookies de terceros y bloquea ciertas API del navegador. Algunos sitios web pueden no funcionar correctamente.

Para obtener la máxima flexibilidad, selecciona _Personalizado_ y ajusta todo manualmente. Los ajustes allí se dividen en cinco categorías:

- [Configuración general](#general-settings)

- [Métodos de seguimiento](#tracking-methods)

- [API del navegador](#browser-api)

- [Seguimiento de Windows](#windows-tracking)

- [Miscelánea](#miscellaneous)

## Configuración general

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Bloquear rastreadores

Bloquea rastreadores y analítica web usando el _filtro de Protección de Seguimiento de AdGuard_.

### Eliminar parámetros de seguimiento de las URL

Elimina los parámetros de seguimiento como `utm_*` y `fb_ref` de las URL de las páginas mediante el _filtro de seguimiento de URL de AdGuard_.

### Ocultar consultas de búsqueda

Oculta las consultas de los sitios web visitados desde un motor de búsqueda. Cuando Google, Yahoo o cualquier otro motor de búsqueda te dirigen a un sitio web, esta opción oculta la consulta de búsqueda que utilizaste para encontrar ese sitio web.

### Pedir a los sitios web que no me rastreen

Envía las señales de [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas.

### Otros filtros de privacidad

Applies a set of additional privacy protection filters. The number next to _Enabled in Filters_ shows how many filters are currently active.

## Métodos de seguimiento

![Tracking methods \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Eliminar cookies de terceros

Los sitios web usan cookies para almacenar tus preferencias — por ejemplo, el idioma que elegiste, tu ubicación o los artículos en tu carrito de compras. Cuando regresas, el navegador envía estas cookies de vuelta para que el sitio pueda reconocerte.

Las cookies de terceros funcionan de la misma manera, pero son creadas por dominios distintos al que estás visitando. Por ejemplo, cnn.com puede incluir un widget de _Me gusta_ de Facebook que establece una cookie que luego es leída por Facebook. Los anunciantes suelen usar este tipo de cookies para rastrear qué otros sitios visitas.

Con esta opción, puedes establecer un límite de tiempo (en minutos) después del cual se eliminarán todas las cookies de terceros. Si estableces el temporizador en 0, dichas cookies se bloquearán completamente.

![Time-to-live \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Ten en cuenta que esta configuración elimina todas las cookies de terceros, incluidas las utilizadas para iniciar sesión a través de redes sociales u otros servicios externos. Esto significa que es posible que debas iniciar sesión nuevamente de vez en cuando o lidiar con otros problemas relacionados con las cookies. Si solo desea bloquear las cookies de seguimiento, utilice el filtro [_AdGuard Tracking Protection_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Eliminar las cookies de origen (no recomendado)

Esta opción elimina las cookies establecidas por el sitio web que estás visitando actualmente después de un período de tiempo seleccionado (en minutos). Cuando el temporizador se agota, todas esas cookies se eliminan. Pon el temporizador en 0 para bloquearlos por completo.

:::caution

No recomendamos habilitar esta opción ya que puede interferir gravemente con el trabajo de ciertos sitios web.

:::

### Bloquear las cabeceras ETag e If-None-Match

Elimina los encabezados ETag y If-None-Match de las solicitudes y respuestas para evitar que los sitios web los utilicen para el seguimiento.

Cuando un navegador accede a una página, el servidor le asigna un ETag — un identificador único utilizado para almacenar en caché el contenido de la página. En visitas posteriores, el navegador envía el mismo ETag de vuelta al servidor. Esto permite al servidor reconocer al visitante. Mientras los archivos en caché permanezcan, el ETag se transmite con cada solicitud. Si la página también contiene elementos incrustados de otros servidores, como imágenes o iframes, esos servidores pueden usar ETags para rastrear tu actividad sin tu conocimiento.

### Bloquear encabezado de autorización de terceros

Desactiva los datos de autorización en caché que pueden utilizarse con fines de seguimiento. Puede interferir con la funcionalidad de algunas extensiones de navegador y sitios web.

El valor del encabezado Authorization es almacenado en caché por el navegador y se envía automáticamente con cada solicitud al mismo dominio. Dado que acompaña a cada solicitud, puede utilizarse para identificarte y rastrearte de manera similar a como lo hacen las cookies.

## API del navegador

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Prevent IP address leaks through WebRTC

Makes WebRTC use a stricter IP address policy to prevent your real IP address from being exposed, even if you use a proxy or VPN.

WebRTC (Comunicación en Tiempo Real Web) es una tecnología que permite la transmisión directa de datos entre navegadores y aplicaciones. By default, it can reveal your true IP address even when a proxy or VPN is active. This option enforces a stricter IP address policy instead of blocking WebRTC entirely, so browser applications such as messengers, chats, and games are less likely to be affected.

### Bloquear API Push

Push permite a los servidores enviar mensajes a apps web independientemente del estado de actividad de tu navegador. Por eso puedes recibir notificaciones de sitios web incluso si tu navegador está oculto en la bandeja o no está abierto. Activar esta opción bloquea completamente la API Push.

### Bloquear API de ubicación

Cuando esta opción esté habilitada, el navegador ya no enviará datos de GPS a los sitios web. Esto evita que determinen tu ubicación, alteren los resultados de búsqueda o adapten el contenido según dónde te encuentres.

## Seguimiento de Windows

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Deshabilitar telemetría de Windows

Deshabilita el envío de datos técnicos sobre tu sistema y el uso de la app.

### Disable Windows Recall

Disables the Windows Recall feature, which periodically takes snapshots of your screen and stores them locally. This prevents sensitive information visible on your screen from being captured and saved.

### Deshabilitar Advertising ID

Desactiva el ID de publicidad para bloquear el seguimiento del uso de tus aplicaciones.

### Deshabilitar el informe automático de Microsoft Defender

Bloquea el envío automático de informes y el muestreo de malware sospechoso.

### Deshabilitar el servicio de enrutamiento de mensajes WAP Push

Disables data collection about Windows component problems.

## Misceláneo

![Miscellaneous \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Ocultar Referer de terceros

Referer es un encabezado HTTP incluido en las solicitudes del navegador al servidor. Contiene la URL del origen de la petición. Cuando navegas de una página a otra, el Referer guarda la URL de la página inicial. El servidor que aloja la página web de destino suele tener un software que analiza Referer y extrae diversos datos de él.

Enabling the _Hide Referer from third parties_ option prevents third-party websites from seeing this information by altering or removing the header.

También puede introducir un valor personalizado en el campo _Custom Referer_. Para utilizar el Referer predeterminado, deja el campo en blanco.

Ten en cuenta que para poder filtrar el tráfico, las aplicaciones de AdGuard interceptan las solicitudes del navegador al servidor. Las solicitudes a servidores de publicidad, seguimiento y phishing pueden modificarse antes de enviarlas al servidor o bloquearse por completo.

Lo mismo ocurre con la opción _Ocultar Referer de terceros_: Para filtrar el tráfico, AdGuard intercepta las solicitudes HTTP(S) y puede modificarlas o bloquearlas antes de que lleguen al servidor. El cambio ocurre solo después de que la solicitud sale de tu navegador. Por esta razón, si revisas los encabezados dentro del navegador (por ejemplo, con las herramientas de desarrollo de Chrome), aún verás el Referer original. Para confirmar que se ha modificado, puede utilizar herramientas externas como Fiddler.

### Ocultar User-Agent

Cuando visitas un sitio web, tu navegador envía un encabezado llamado User-Agent como parte de la solicitud HTTP. Parece una línea de texto que comienza con “User-Agent:”. Esta línea generalmente contiene detalles como el nombre y la versión del navegador, el sistema operativo y la configuración de idioma.

Al habilitar esta opción, AdGuard elimina la información identificativa del User-Agent para que los anunciantes y rastreadores no puedan usarla para perfilarte. Si lo prefieres, puedes introducir un valor personalizado en el campo _Custom User-Agent_. Para mantener el valor predeterminado, simplemente deje el campo en blanco.

### Enmascarar dirección IP

AdGuard no puede ocultar completamente tu dirección IP real, pero sí puede reemplazarla por otra diferente para que las webs interpreten tu conexión como si llegara a través de un proxy. En algunos casos esto ayuda a ocultar tu IP real.

Puedes introducir cualquier dirección IP que quieras utilizar en el campo correspondiente. Para utilizar la dirección IP predeterminada, deja el campo en blanco.

### Eliminar encabezado X-Client-Data

Impide que Google Chrome envíe información sobre su versión y modificaciones en las solicitudes a Google Domains, incluyendo servicios como DoubleClick y Google Analytics.

### Proteger contra DPI

![Protect against DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) is a technology that allows ISPs to analyze and filter traffic based on packet content. With this option enabled, AdGuard modifies outgoing packet data to make it harder for DPI systems to identify and analyze your traffic, helping protect your connection privacy.

When you click on _Protect against DPI_, a separate screen opens with three groups of settings:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Split TCP packet at fixed position_ — splits the ClientHello TCP packet at a specified byte position.
- _Split TLS record at fixed position_ — splits the TLS record containing the ClientHello at a specified byte position.
- _Split TLS before SNI_ — splits the ClientHello before the Server Name Indication field.
- _Split TLS after SNI_ — splits the ClientHello after the Server Name Indication field.
- _Split TLS in the middle of SNI_ — splits the ClientHello in the middle of the Server Name Indication field.
- _Split TLS randomly within SNI_ — splits the ClientHello at a random position within the Server Name Indication field.

When using a fixed-position strategy, set the _Split byte position_ (1–1500) to specify where the split occurs.

**HTTP request split** — splits HTTP requests into multiple TCP packets to bypass DPI systems that rely on inspecting complete HTTP requests.

**HTTP space juggling** — manipulates whitespace in HTTP requests to confuse DPI systems that parse HTTP headers, making it harder for them to identify and block specific traffic.

:::caution

This feature can break access to some unencrypted websites. If this feature is enabled in AdGuard for Windows, it may also interfere with the ESET antivirus — ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
