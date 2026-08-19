---
title: Protección de rastreo
sidebar_position: 2
---

:::info

Este artículo describe AdGuard para Windows v8.0, un bloqueador de anuncios integral que protege su dispositivo a nivel del sistema. Esta es una versión beta que aún está en desarrollo. Para probarlo, descarga la [versión beta de AdGuard para Windows](https://agrd.io/windows_beta).

:::

Muchos sitios web recopilan datos sobre sus visitantes, incluidas las direcciones IP, la información del navegador y del sistema operativo, la resolución de pantalla e incluso la página de la que provienes. Las cookies pueden utilizarse para identificar tu navegador, recordar tus preferencias o reconocerte cuando regreses. La protección de seguimiento impide que estos sistemas recopilen tus datos personales. Descubre más en nuestro [artículo sobre protección de seguimiento en AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Protección de rastreo](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

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

![Configuración general](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general.png)

### Bloquear rastreadores

Bloquea rastreadores y analítica web usando el _filtro de Protección de Seguimiento de AdGuard_.

### Eliminar parámetros de seguimiento de las URL

Elimina los parámetros de seguimiento como `utm_*` y `fb_ref` de las URL de las páginas mediante el _filtro de seguimiento de URL de AdGuard_.

### Oculta tus consultas de búsqueda

Oculta las consultas de los sitios web visitados desde un motor de búsqueda. Cuando Google, Yahoo o cualquier otro motor de búsqueda te dirigen a un sitio web, esta opción oculta la consulta de búsqueda que utilizaste para encontrar ese sitio web.

### Pedir a los sitios web que no te rastreen

Envía las señales de [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas.

## Métodos de seguimiento

![Métodos de seguimiento](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_tracking_methods.png)

### Eliminar cookies de terceros

Los sitios web usan cookies para almacenar tus preferencias — por ejemplo, el idioma que elegiste, tu ubicación o los artículos en tu carrito de compras. Cuando regresas, el navegador envía estas cookies de vuelta para que el sitio pueda reconocerte.

Las cookies de terceros funcionan de la misma manera, pero son creadas por dominios distintos al que estás visitando. Por ejemplo, cnn.com puede incluir un widget de _Me gusta_ de Facebook que establece una cookie que luego es leída por Facebook. Los anunciantes suelen usar este tipo de cookies para rastrear qué otros sitios visitas.

Con esta opción, puedes establecer un límite de tiempo (en minutos) después del cual se eliminarán todas las cookies de terceros. Si estableces el temporizador en 0, dichas cookies se bloquearán completamente.

![Time-to-live](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

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

![Browser API](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_browser_api.png)

### Bloquear WebRTC

Bloquea WebRTC, una vulnerabilidad conocida que puede filtrar tu dirección IP real incluso si usas un proxy o VPN.

WebRTC (Comunicación en Tiempo Real Web) es una tecnología que permite la transmisión directa de datos entre navegadores y aplicaciones. Puede revelar tu dirección IP real, incluso si usas un proxy o una VPN. Activar esta opción puede interrumpir ciertas aplicaciones del navegador, como mensajeros, chats, cines o juegos.

### Bloquear API Push

Push permite a los servidores enviar mensajes a apps web independientemente del estado de actividad de tu navegador. Por eso puedes recibir notificaciones de sitios web incluso si tu navegador está oculto en la bandeja o no está abierto. Activar esta opción bloquea completamente la API Push.

### Bloquear API de ubicación

Cuando esta opción esté habilitada, el navegador ya no enviará datos de GPS a los sitios web. Esto evita que determinen tu ubicación, alteren los resultados de búsqueda o adapten el contenido según dónde te encuentres.

### Bloquear Flash

El complemento Flash Player está desactualizado y es muy vulnerable a virus y exploits. También puede ralentizar la carga de sitios web. Al habilitar esta opción se evita que los navegadores detecten componentes de Flash (como complementos o objetos ActiveXObject), lo que desactiva efectivamente la compatibilidad con Flash.

## Seguimiento de Windows

![Windows tracking](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_windows_tracking.png)

### Deshabilitar telemetría de Windows

Deshabilita el envío de datos técnicos sobre tu sistema y el uso de la app.

### Deshabilitar Advertising ID

Desactiva el ID de publicidad para bloquear el seguimiento del uso de tus aplicaciones.

### Deshabilitar el informe automático de Microsoft Defender

Bloquea el envío automático de informes y el muestreo de malware sospechoso.

### Deshabilitar el servicio de enrutamiento de mensajes WAP Push

Deshabilita la recopilación de datos sobre problemas de componentes de Windows

## Misceláneo

![Miscellaneous](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_misc.png)

### Ocultar Referer de terceros

Referer es un encabezado HTTP incluido en las solicitudes del navegador al servidor. Contiene la URL del origen de la petición. Cuando navegas de una página a otra, el Referer guarda la URL de la página inicial. El servidor que aloja la página web de destino suele tener un software que analiza Referer y extrae diversos datos de él.

Activar la opción _Ocultar el Referer de terceros_ evita que los sitios web de terceros vean esta información al modificar o eliminar el encabezado.

También puede introducir un valor personalizado en el campo _Custom Referer_. Para utilizar el Referer predeterminado, deja el campo en blanco.

Ten en cuenta que para poder filtrar el tráfico, las aplicaciones de AdGuard interceptan las solicitudes del navegador al servidor. Las solicitudes a servidores de publicidad, seguimiento y phishing pueden modificarse antes de enviarlas al servidor o bloquearse por completo.

Lo mismo ocurre con la opción _Ocultar Referer de terceros_: Para filtrar el tráfico, AdGuard intercepta las solicitudes HTTP(S) y puede modificarlas o bloquearlas antes de que lleguen al servidor. El cambio ocurre solo después de que la solicitud sale de tu navegador. Por esta razón, si revisas los encabezados dentro del navegador (por ejemplo, con las herramientas de desarrollo de Chrome), aún verás el Referer original. Para confirmar que se ha modificado, puede utilizar herramientas externas como Fiddler.

### Oculta tu User-Agent

Cuando visitas un sitio web, tu navegador envía un encabezado llamado User-Agent como parte de la solicitud HTTP. Parece una línea de texto que comienza con “User-Agent:”. Esta línea generalmente contiene detalles como el nombre y la versión del navegador, el sistema operativo y la configuración de idioma.

Al habilitar esta opción, AdGuard elimina la información identificativa del User-Agent para que los anunciantes y rastreadores no puedan usarla para perfilarte. Si lo prefieres, puedes introducir un valor personalizado en el campo _Custom User-Agent_. Para mantener el valor predeterminado, simplemente deje el campo en blanco.

### Enmascara tu dirección IP

AdGuard no puede ocultar completamente tu dirección IP real, pero sí puede reemplazarla por otra diferente para que las webs interpreten tu conexión como si llegara a través de un proxy. En algunos casos esto ayuda a ocultar tu IP real.

Puedes introducir cualquier dirección IP que quieras utilizar en el campo correspondiente. Para utilizar la dirección IP predeterminada, deja el campo en blanco.

### Eliminar encabezado X-Client-Data

Impide que Google Chrome envíe información sobre su versión y modificaciones en las solicitudes a Google Domains, incluyendo servicios como DoubleClick y Google Analytics.

### Proteger contra DPI

Deep Packet Inspection es un sistema de análisis profundo y filtrado de tráfico por contenido de paquetes, así como de acumulación de datos estadísticos. Al utilizar esta tecnología, los ISP tienen la capacidad de controlar el tráfico que pasa por ello y limitar el acceso al contenido para sus clientes.

La Inspección Profunda de Paquetes (DPI) es una tecnología utilizada por algunos proveedores de servicios de Internet (ISP) para analizar y filtrar el tráfico según el contenido de los paquetes. Les permite supervisar las conexiones, restringir el acceso a ciertos recursos y recopilar estadísticas sobre los usuarios.

Cuando esta opción está habilitada, AdGuard modifica los datos de los paquetes salientes para que ya no coincidan con los criterios de bloqueo de DPI. Esto puede ayudarte a eludir restricciones y acceder al contenido que necesitas. Sin embargo, no todos los sistemas DPI pueden eludirse todavía — las mejoras aún están en curso.

La función _Proteger contra DPI_ ya está implementada en AdGuard para Windows, AdGuard para Mac y AdGuard para Android.

:::caution

Si esta función está habilitada en AdGuard para Windows, puede interferir con el antivirus ESET. En este caso, ESET no podrá filtrar el tráfico, dejando accesibles algunos sitios web maliciosos o bloqueados.

:::
