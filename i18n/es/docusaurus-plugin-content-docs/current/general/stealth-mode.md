---
title: Protección de seguimiento (anteriormente Modo sigiloso)
sidebar_position: 4
---

Muchos sitios web recopilan información sobre sus visitantes, como su dirección IP, navegador y sistema operativo instalados, resolución de pantalla e incluso la página desde la que se redirige al visitante. Algunas páginas web utilizan cookies para marcar tu navegador y guardar tus configuraciones y preferencias personales, o para "reconocerte" en tu próxima visita. *Protección de seguimiento* protege tu información personal de sistemas de recopilación de datos y estadísticas.

Puedes ajustar la configuración de protección contra seguimiento según sea necesario. Por ejemplo, puedes evitar que los sitios web reciban las consultas de motores de búsqueda que te llevaron a ellos. Puedes eliminar automáticamente las cookies propias y de terceros. También puedes desactivar la compartición de geolocalización del navegador, que puede ser utilizada para rastrear tu ubicación. Puedes ocultar tu verdadera dirección IP o reemplazarla por una arbitraria.

A continuación, enumeraremos y describiremos las principales funciones y opciones que puedes controlar en la configuración del **Modo sigiloso**. Se dividen en cuatro grupos: **General**, **Métodos de seguimiento**, **API del navegador** **Rastreamento do Windows** y **Varios**.

:::note

Es posible que algunas opciones no estén disponibles según el producto en particular debido al sistema operativo o del navegador.

:::

## General {#general}

### Bloquear rastreadores {#blocktrackers}

Esta función bloquea los rastreadores y analíticas web mediante el filtro de protección contra seguimiento de AdGuard.

### Eliminar parámetros de seguimiento de las URL {#removetracking}

Si habilitas esta función, AdGuard usará su filtro contra seguimiento de URL para quitar parámetros de seguimiento como `utm_*` y `fb_ref` de las URL de las páginas.

### Ocultar consultas de búsqueda {#searchqueries}

Esta función oculta tus consultas de búsqueda en los sitios web que visitas a través de los resultados de los motores de búsqueda. Por ejemplo, cuando abres un sitio web a través de un motor de búsqueda como Google o Yahoo, esta función oculta la consulta de búsqueda que usaste para encontrar ese sitio web.

### Pedir a los sitios web que no me rastreen {#donottrack}

Envía las señales [Control de privacidad global](https://globalprivacycontrol.org/#gpc-spec) y [No rastrear](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas.

### Otros filtros de privacidad {#otherprivacyfilters}

Esta función muestra otros filtros de privacidad habilitados en **Filtros**.

:::note

Disponible en AdGuard para Android y AdGuard para Windows.

:::

## Métodos de seguimiento {#tracking-methods}

### Eliminar cookies de terceros {#3p-cookie}

Esta función evita que los anunciantes rastreen su comportamiento en varias páginas limitando la vida útil de las cookies de terceros.

Los sitios web utilizan cookies para almacenar tu información y preferencias, como el idioma que seleccionaste, tu ubicación o la lista de artículos en tu carrito de compras. Pon el temporizador en 0 para bloquearlos por completo.

Las cookies de terceros son implementadas por un sitio web diferente al que estás navegando actualmente. Por ejemplo, cnn.com puede tener un widget de "Me gusta" de Facebook en su página de inicio. Este widget instala una cookie que Facebook puede leer más tarde. Algunos anunciantes utilizan este tipo de cookie para rastrear qué otros sitios web que visitas tienen sus anuncios.

Establece un período de tiempo (en minutos) después del cual se eliminarán todas las cookies de terceros. Para bloquear estas cookies, configura su duración en 0.

:::caution

Esta configuración elimina todas las cookies de terceros, incluida la información de tus inicios de sesión a través de redes sociales u otros servicios de terceros. Es posible que tengas que volver a iniciar sesión periódicamente en algunos sitios web y que se enfrente a otros problemas relacionados con las cookies. Para bloquear solo las cookies de seguimiento, utiliza [*Filtro de protección de seguimiento de AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

Disponible en AdGuard para Android, AdGuard para Windows, AdGuard para macOS y la Extensión de navegador AdGuard (navegadores basados en MV2).

:::

### Eliminar las cookies de origen (no recomendado) {#1p-cookie}

Esta función evita que los sitios web recuerden tus datos, como tus credenciales de inicio de sesión y preferencias de idioma, limitando el tiempo de vida de las cookies del dominio de la petición.

Establece un período de tiempo (en minutos) después del cual se eliminarán todas las cookies. Para bloquear estas cookies, configura su duración en 0.

:::caution

No recomendamos habilitar esta opción ya que puede interferir gravemente con el trabajo de ciertos sitios web. Si bloqueas estas cookies, algunos sitios web pueden dejar de funcionar.

:::

:::note

Disponible en AdGuard para Android, AdGuard para Windows, AdGuard para macOS y la Extensión de navegador AdGuard (navegadores basados en MV2).

:::

### Bloquear las cabeceras ETag e If-None-Match {#3p-cache}

Esta función quita los encabezados ETag e If-None-Match de las peticiones y respuestas para evitar seguimiento a través de ellos.

Cuando un navegador accede a una página, el servidor asigna una ETag a esa página. El navegador utiliza esta ETag para almacenar en caché el contenido de la página. Tras solicitudes posteriores, el navegador envía la ETag al servidor correspondiente, permitiendo así que el servidor conozca la identidad del visitante. Siempre que los archivos del sitio estén almacenados en caché, la ETag se envía cada vez que tu navegador accede a este sitio. Si el sitio tiene contenido incrustado de otro servidor (como una imagen o un iframe), ese servidor puede rastrear tus actividades sin tu conocimiento.

:::note

Disponible en AdGuard para Android, AdGuard para Windows y AdGuard para Mac.

:::

### Bloquear encabezado de autorización de terceros {#3p-auth}

Esta función deshabilita los datos de autorización almacenados en caché que se pueden utilizar con fines de seguimiento. Puede interferir con la funcionalidad de algunas extensiones de navegador y sitios web.

El valor del encabezado "Autorización" es almacenado en cache por el navegador y se envía junto con cada Petición a ese dominio. Esto significa que se puede utilizar con fines de seguimiento, al igual que las cookies.

:::note

Disponible en AdGuard para Android, AdGuard para Windows y AdGuard para Mac.

:::

## API del navegador {#browser-api}

:::note

Solo la función **Bloquear WebRTC** está disponible para la Extensión de navegador de AdGuard. Puedes encontrarlo en la sección **Varios**.

:::

### Bloquear WebRTC {#webrtc}

Esta función bloquea WebRTC, que puede filtrar tu dirección IP real incluso si utilizas un proxy o VPN (PREFERRED).

WebRTC (Web Real-Time Communication) es una tecnología que permite la transmisión directa de datos entre navegadores y aplicaciones. Sin embargo, puede permitir que otros sepan tu verdadera dirección IP, incluso cuando usas un proxy o VPN.

:::caution

Habilitar esta opción puede interrumpir el funcionamiento de determinadas aplicaciones del navegador, como mensajeros, plataformas de streaming, chats o juegos.

:::

### Bloquear API Push {#push}

Esta función bloquea las notificaciones push de los sitios web.

Push API permite a los servidores enviar mensajes a aplicaciones web independientemente del estado de actividad de tu navegador. Esto significa que puedes ver notificaciones de varios sitios web incluso cuando tu navegador está minimizado o cerrado. Habilita esta opción para bloquear completamente la Push API del navegador.

### Bloquear API de ubicación {#location}

Esta función evita que los sitios web detecten tu ubicación.

Habilitar esta opción evitará que el navegador envíe datos de GPS que podrían usarse para determinar tu ubicación, modificar tus resultados de búsqueda o influir de otra manera en tu experiencia web.

### Bloquear Flash {#flash}

Esta función incrementa la protección y la velocidad de carga del sitio web bloqueando el soporte de Flash Player en los navegadores.

El complemento Flash Player se ha vuelto cada vez más vulnerable a amenazas en línea como virus y hackers; también puede aumentar significativamente los tiempos de carga del sitio web. Al activar esta configuración, AdGuard bloquea la capacidad de los navegadores para detectar componentes (como complementos y objetos ActiveXObject) que permiten que Flash muestre contenido. En la práctica, esto significa que los navegadores no son compatibles con Flash.

### Bloquear Java {#java}

Esta función deshabilita los complementos de Java en sitios web y servicios web porque la API tiene graves problemas de seguridad. No deshabilita JavaScript.

Algunos sitios web y servicios web todavía utilizan la tecnología antigua para admitir complementos de Java. La API del complemento de Java, que es la base de los complementos de Java, tiene graves fallas de seguridad. Por motivos de seguridad, puedes desactivar los dichos complementos. Sin embargo, incluso si decides utilizar la opción "Bloquear Java", JavaScript seguirá habilitado.

## Seguimiento de Windows {#windowstracking}

:::note

Estas funciones solo están disponibles en AdGuard para Windows.

:::

### Deshabilitar telemetría de Windows {#windowstelemetry}

This feature disables sending technical data about your system and app usage.

### Disable Windows Recall {#windowsrecall}

This feature prevents Windows from taking and analyzing screenshots of your desktop activity.

### Turn off Advertising ID {#advertisingid}

This feature disables Advertising ID to block tracking of your app usage.

### Disable automatic reporting by Microsoft Defender {#windowsautoreport}

Esta función bloquea la notificación automática y el muestreo de malware sospechoso.

### Deshabilitar el servicio de enrutamiento de mensajes WAP Push {#wappushrouting}

Esta función deshabilita la recopilación de datos sobre problemas de los componente de Windows.

## Misceláneo {#miscellaneous}

### Ocultar Referer de terceros {#referer}

Esta función evita que terceros sepan qué sitios web visitas.

Referer es un encabezado HTTP utilizado en solicitudes de navegador a servidor. Contiene la URL del origen de la petición. Cuando navegas de una página a otra, el Referer guarda la URL de la página inicial. El servidor que aloja la página web de destino suele tener un software que analiza Referer y extrae diversos datos de él. Al habilitar la opción *Ocultar Referer de terceros*, se oculta el sitio web actual de sitios web de terceros alterando el encabezado HTTP.

También puedes establecer un valor arbitrario para Referer ingresándolo en el campo *Referer personalizado*. Para utilizar el Referer predeterminado, deja el campo en blanco.

Ten en cuenta que para poder filtrar el tráfico, las aplicaciones AdGuard "interceptan" las solicitudes del navegador al servidor. Las solicitudes a servidores de publicidad, seguimiento y phishing pueden modificarse antes de enviarlas al servidor o bloquearse por completo. Lo mismo ocurre con la opción *Ocultar Referer de terceros*: AdGuard intercepta solicitudes HTTP(S), en particular para eliminar o cambiar el encabezado Referer si esta opción está habilitada. Sin embargo, esto ocurre sólo después de que estas solicitudes “abandonan” el navegador. Esto significa que, si monitoreas el Referer dentro del navegador (por ejemplo, con la ayuda de las herramientas de desarrollo de Chrome), verás el Referer original porque la solicitud aún no ha llegado a AdGuard. Puedes utilizar software como [Fiddler](https://www.telerik.com/fiddler) para asegurarte de que Referer se modifique correctamente.

Por el contrario, debido a la naturaleza de todas las extensiones de navegador, la extensión de navegador de AdGuard funciona "dentro" del navegador. Modificará el Referer en ese mismo momento, por lo que Developer Tools mostrará el Referer deseado para tus peticiones.

### Ocultar User-Agent {#useragent}

Esta función elimina la información de identificación del encabezado User-Agent.

Cuando visitas un sitio web, tu navegador envía tu información al servidor. Parece una línea de texto que forma parte de una petición HTTP que comienza con "User-Agent:”. Generalmente incluye el nombre y la versión del navegador, el sistema operativo y la configuración de idioma. Eliminamos la información de identificación del User-Agent para que los anunciantes no puedan obtenerla.

También puedes establecer un valor arbitrario para el User-Agent ingresándolo en el campo User-Agent personalizado. Para utilizar el User-Agent predeterminado, deja el campo en blanco.

:::note

Disponible en AdGuard para Android, AdGuard para Windows y AdGuard para Mac.

:::

### Enmascarar dirección IP {#ip}

Esta función engaña a los sitios web para que crean que eres un proxy con la dirección IP que especifiques.

La protección de seguimiento no puede ocultar tu dirección IP. Sin embargo, podemos ocultarlo para que los sitios web que visite piensen que eres un proxy. A veces esto ayuda y los sitios web ignoran tu verdadera dirección IP.

Puedes establecer una dirección IP arbitraria, que te gustaría que otros perciban como tuya, simplemente introduciéndola en el campo correspondiente. Para utilizar la dirección IP predeterminada, deja el campo en blanco.

:::note

Disponible en AdGuard para Android, AdGuard para Windows y AdGuard para Mac.

:::

### Eliminar encabezado X-Client-Data {#xclientdata}

Esta función evita que Google Chrome envíe información sobre su versión y modificaciones a los dominios de Google (incluidos Double Click y Google Analytics).

:::note

Disponible en AdGuard para Android, AdGuard para Windows, AdGuard para macOS y la Extensión de navegador de AdGuard (navegadores basados en Chromium).

:::

### Proteger contra DPI {#dpi}

Esta función modifica tu tráfico saliente para que los sistemas de Inspección profunda de paquetes de tu Proveedor de Servicios de Internet no puedan detectar los sitios web que visitas. No se puede garantizar una protección completa contra todos los sistemas de Inspección profunda de paquetes.

Deep Packet Inspection es un sistema de análisis profundo y filtrado de tráfico por contenido de paquetes, así como de acumulación de datos estadísticos. Al utilizar esta tecnología, los ISP tienen la capacidad de controlar el tráfico que pasa por ello y limitar el acceso al contenido para sus clientes.

AdGuard puede modificar los datos de los paquetes salientes para que el cliente no entre en los criterios de bloqueo de DPI. Esto significa que, al habilitar esta opción, los usuarios pueden acceder al contenido que desean. No todos los sistemas DPI se pueden omitir en este momento, pero trabajamos constantemente para mejorarlo.

:::note

Disponible en AdGuard para Android, AdGuard para Windows y AdGuard para Mac.

:::

:::caution

Si esta función está habilitada en AdGuard para Windows, puede interferir con el antivirus ESET. Anti-DPI evitará que ESET filtre el tráfico, dejando los sitios web maliciosos y de la lista negra desbloqueados.

:::
