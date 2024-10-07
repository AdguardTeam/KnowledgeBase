---
title: Modo sigiloso
sidebar_position: 4
---

Muchos sitios web recopilan información sobre sus visitantes, como su dirección IP, navegador y sistema operativo instalados, resolución de pantalla e incluso la página desde la que se redirige al visitante. Algunas páginas web utilizan cookies para marcar tu navegador y guardar tus configuraciones y preferencias personales, o para "reconocerte" en tu próxima visita. El modo oculto protege tu información personal de sistemas de recopilación de datos y estadísticas.

Puedes ajustar de manera flexible el trabajo del Modo sigiloso: por ejemplo, puedes prohibir que el sitio web reciba la solicitud de búsqueda que utilizaste para encontrarlo en Internet, eliminar automáticamente tanto las cookies de terceros como las propias del sitio web, desactivar el uso compartido de geolocalización del navegador que puede usarse para rastrear tu ubicación, y ocultar tu verdadera Dirección IP o incluso reemplazarla por una arbitraria.

A continuación, enumeraremos y describiremos las principales características y opciones que puedes controlar en la configuración del **Modo sigiloso**. Se dividen en cuatro grupos: **General**, **Métodos de seguimiento**, **API del navegador** y **Varios**.

:::note

Es posible que algunas opciones no estén disponibles según el producto en particular debido al sistema operativo u otras limitaciones.

:::

## General {#general}

### Ocultar tus consultas de búsqueda {#searchqueries}

Cuando Google, Yahoo o cualquier otro motor de búsqueda te dirigen a un sitio web, esta opción oculta la consulta de búsqueda que utilizaste para encontrar ese sitio web.

### Pedir a los sitios web que no te rastreen {#donottrack}

Envía las señales [Control de privacidad global](https://globalprivacycontrol.org/#gpc-spec) y [No rastrear](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas.

### Eliminar los parámetros de seguimiento de las URL

Si habilitas esta opción, AdGuard eliminará parámetros de seguimiento como `utm_*` y `fb_ref` de las URL de las páginas.

### Métodos de seguimiento {#tracking-methods}

### Autodestrucción de cookies de terceros {#3p-cookie}

Los sitios web utilizan cookies para almacenar tu información y preferencias, como el idioma que seleccionaste, tu ubicación o la lista de artículos en tu carrito de compras. Cuando regresas a un sitio web, tu navegador devuelve las cookies pertenecientes a ese sitio web, lo que te permite "recordar" tus datos.

Las cookies de terceros son aquellas implementadas por un sitio web diferente al que estás navegando actualmente. Por ejemplo, cnn.com puede tener un widget "Me gusta" de Facebook en tu página de inicio. Este widget implementará una cookie que Facebook podrá leer más adelante. Algunos anunciantes utilizan este tipo de cookies para rastrear qué otros sitios donde se colocan sus anuncios visitas.

Establece un periodo de tiempo (en minutos) al final del cual se destruirán todas las cookies de terceros. Pon el temporizador en 0 para bloquearlos por completo.

:::caution

Esta configuración elimina todas las cookies de terceros, incluida la información de tus inicios de sesión a través de redes sociales u otros servicios de terceros. Es posible que tengas que volver a iniciar sesión periódicamente en algunos sitios web y que se enfrente a otros problemas relacionados con las cookies. Para bloquear solo las cookies de seguimiento, utiliza [*Filtro de protección de seguimiento de AdGuard*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Autodestrucción de cookies de origen {#1p-cookie}

Establece un período de tiempo (en minutos) al final del cual se destruirán todas las cookies. Pon el temporizador en 0 para bloquearlos por completo.

:::caution

No recomendamos habilitar esta opción ya que puede interferir gravemente con el trabajo de ciertos sitios web.

:::

### Desactivar caché para solicitudes de terceros {#3p-cache}

Cuando un navegador accede a una página, el servidor asigna una ETag a esa página. El navegador utiliza esta ETag para almacenar en caché el contenido de la página. Tras solicitudes posteriores, el navegador envía la ETag al servidor correspondiente, permitiendo así que el servidor conozca la identidad del visitante. Siempre que los archivos del sitio estén almacenados en caché, la ETag se envía cada vez que tu navegador accede a este sitio. Si el sitio tiene contenido incrustado de otro servidor (como una imagen o un iframe), ese servidor puede rastrear tus actividades sin tu conocimiento.

### Bloquear encabezado de autorización de terceros {#3p-auth}

El navegador almacena en caché el valor del encabezado "Autorización" y luego se envía junto con cada solicitud a ese dominio. Esto significa que se puede utilizar con fines de seguimiento al igual que las cookies.

## API del navegador {#browser-api}

### Bloquear WebRTC {#webrtc}

WebRTC (Web Real-Time Communication) es una tecnología que permite la transmisión directa de datos entre navegadores y aplicaciones. Puede permitir que otros sepan tu verdadera dirección IP, incluso si usas un proxy o VPN. Habilitar esta opción puede interrumpir el funcionamiento de determinadas aplicaciones del navegador, como mensajería, chats, cines o juegos.

### Bloquear API Push {#push}

Push API permite a los servidores enviar mensajes a aplicaciones web independientemente del estado de actividad de tu navegador. Por lo tanto, es posible que veas notificaciones de varios sitios web incluso si tu navegador está oculto en la bandeja o no está iniciado. Habilita esta opción para bloquear completamente la Push API del navegador.

### Bloquear API de ubicación {#location}

Habilitar esta opción evitará que el navegador envíe datos de GPS que podrían usarse para determinar tu ubicación, modificar tus resultados de búsqueda o influir de otra manera en tu experiencia web.

### Bloquear Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly increase website load times. Al activar esta configuración, AdGuard bloquea la capacidad de los navegadores para detectar componentes (como complementos y objetos ActiveXObject) que permiten que Flash muestre contenido. En la práctica, esto significa que los navegadores no son compatibles con Flash.

### Bloquear Java {#java}

Algunos sitios web y servicios web todavía utilizan la tecnología antigua para admitir complementos de Java. La API del complemento de Java, que es la base de los complementos de Java, tiene graves fallas de seguridad. Por motivos de seguridad, puedes desactivar los dichos complementos. Sin embargo, incluso si decides utilizar la opción "Bloquear Java", JavaScript seguirá habilitado.

## Misceláneo {#miscellaneous}

### Ocultar Referer de terceros {#referer}

Referer es un encabezado HTTP utilizado en solicitudes de navegador a servidor. Contiene la URL del origen de la petición. Cuando navegas de una página a otra, el Referer guarda la URL de la página inicial. El servidor que aloja la página web de destino suele tener un software que analiza Referer y extrae diversos datos de él. Al habilitar la opción *Ocultar referer de terceros*, se oculta el sitio web actual de sitios de terceros alterando el encabezado HTTP.

También puedes establecer un valor arbitrario para Referer ingresándolo en el campo *Personalizar Referer*. Para utilizar el Referer predeterminado, deja el campo en blanco.

Ten en cuenta que para poder filtrar el tráfico, las aplicaciones AdGuard "interceptan" las solicitudes del navegador al servidor. Las solicitudes a servidores de publicidad, seguimiento y phishing pueden modificarse antes de enviarlas al servidor o bloquearse por completo. Lo mismo ocurre con la opción *Ocultar Referer de terceros*: AdGuard intercepta solicitudes HTTP(S), en particular para eliminar o cambiar el encabezado Referer si esta opción está habilitada. Sin embargo, esto ocurre sólo después de que estas solicitudes “abandonan” el navegador. Esto significa que, si monitoreas el Referer dentro del navegador (por ejemplo, con la ayuda de las herramientas de desarrollo de Chrome), verás el Referer original porque la solicitud aún no ha llegado a AdGuard. Puedes utilizar software como [Fiddler](https://www.telerik.com/fiddler) para asegurarte de que Referer se modifique correctamente.

On the other hand, due to the nature of all browser extensions, AdGuard Browser Extension works 'inside' the browser. Modificará el Referer en ese mismo momento, por lo que Developer Tools mostrará el Referer deseado para tus peticiones.

### Ocultar tu User-Agent {#useragent}

Cuando visitas un sitio web, tu navegador envía tu información al servidor. Parece una línea de texto que forma parte de una petición HTTP que comienza con "User-Agent:". Suele incluir el nombre y la versión del navegador, el sistema operativo y la configuración del idioma. Eliminamos la información de identificación del User-Agent para que los anunciantes no puedan obtenerla.

También puedes establecer un valor arbitrario para el User-Agent ingresándolo en el campo User-Agent personalizado. Para utilizar el User-Agent predeterminado, deja el campo en blanco.

### Enmascarar tu dirección IP {#ip}

El modo sigiloso no puede ocultar tu dirección IP. Sin embargo, podemos ocultarlo para que los sitios web que visite piensen que eres un proxy. A veces esto ayuda y los sitios web ignoran tu verdadera dirección IP.

Puedes establecer una dirección IP arbitraria, que te gustaría que otros perciban como tuya, simplemente introduciéndola en el campo correspondiente. Para utilizar la dirección IP predeterminada, deja el campo en blanco.

### Eliminar encabezado X-Client-Data de las peticiones HTTP {#xclientdata}

Prohíbe a Google Chrome enviar su versión y información de modificación con solicitudes a dominios de Google (incluidos Double Click y Google Analytics).

### Proteger de DPI {#dpi}

Deep Packet Inspection es un sistema de análisis profundo y filtrado de tráfico por contenido de paquetes, así como de acumulación de datos estadísticos. Al utilizar esta tecnología, los ISP tienen la capacidad de controlar el tráfico que pasa por ello y limitar el acceso al contenido para sus clientes.

AdGuard puede modificar los datos de los paquetes salientes para que el cliente no entre en los criterios de bloqueo de DPI. Esto significa que, al habilitar esta opción, los usuarios pueden acceder al contenido que desean. No todos los sistemas DPI se pueden omitir en este momento, pero trabajamos constantemente para mejorarlo.

La función "Proteger de DPI" ya está implementada en AdGuard para Windows, AdGuard para Mac y AdGuard para Android.

:::caution

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
