---
title: Protección de rastreo
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. También puedes bloquear las cookies que los sitios web utilizan para marcar tu navegador, guardar tu configuración personal y preferencias de usuario, o reconocerlo en tu próxima visita.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Estas son las características activas de los niveles preconfigurados:

1. **Estándar**

   a. _Bloquear rastreadores_. Esta función utiliza el _filtro de protección de seguimiento de AdGuard_ para protegerlo de contadores en línea y herramientas de análisis web

   b. _Ask websites not to track me_. Esta función envía las señales [Global Privacy Control](https://globalprivacycontrol.org/) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas, pidiendo a las aplicaciones web que desactiven el seguimiento de tu actividad

   c. _Eliminar encabezado X-Client-Data_. Esta función evita que Google Chrome envíe información sobre su versión y modificaciones a los dominios de Google (incluidos DoubleClick y Google Analytics)

2. **Alto**

   a. _Bloquear rastreadores_. Esta función utiliza el _filtro de protección de seguimiento de AdGuard_ para protegerlo de contadores en línea y herramientas de análisis web

   b. _Eliminar parámetros de seguimiento de las URL_. Esta función utiliza el _filtro de seguimiento de URL de AdGuard_ para eliminar parámetros de seguimiento, como `utm_*` y `fb_ref`, de las URL de las páginas

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Esta función envía las señales [Global Privacy Control](https://globalprivacycontrol.org/) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas, pidiendo a las aplicaciones web que desactiven el seguimiento de tu actividad

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Esta función elimina todas las cookies de terceros después de su vencimiento forzado. Esto incluye sus inicios de sesión a través de redes sociales u otros servicios de terceros. Es posible que debas volver a iniciar sesión en algunos sitios web periódicamente o experimentar otros problemas relacionados con las cookies. Para bloquear únicamente las cookies de seguimiento, utiliza el nivel de protección _Estándar_.

   :::

   f. _Eliminar encabezado X-Client-Data_. Esta función evita que Google Chrome envíe información sobre su versión y modificaciones a los dominios de Google (incluidos DoubleClick y Google Analytics)

3. **Extremo** (anteriormente conocido como _Ultimate_)

   a. _Bloquear rastreadores_. Esta función utiliza el _filtro de protección de seguimiento de AdGuard_ para protegerlo de contadores en línea y herramientas de análisis web

   b. _Eliminar parámetros de seguimiento de las URL_. Esta función utiliza el _filtro de seguimiento de URL de AdGuard_ para eliminar parámetros de seguimiento, como `utm_*` y `fb_ref`, de las URL de las páginas

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Esta función envía las señales [Global Privacy Control](https://globalprivacycontrol.org/) y [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a los sitios web que visitas, pidiendo a las aplicaciones web que desactiven el seguimiento de tu actividad

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Esta función elimina todas las cookies de terceros después de su vencimiento forzado. Esto incluye sus inicios de sesión a través de redes sociales u otros servicios de terceros. Es posible que debas volver a iniciar sesión en algunos sitios web periódicamente o experimentar otros problemas relacionados con las cookies. Para bloquear únicamente las cookies de seguimiento, utiliza el nivel de protección _Estándar_.

   :::

   f. _Bloquear WebRTC_. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   g. _Bloquear API Push_. This feature blocks push notifications from websites

   h. _Bloquear API de ubicación_. Esta función evita que los navegadores accedan a tus datos de GPS y determinen tu ubicación

   i. _Ocultar Referer de terceros_. Esta función evita que terceros sepan qué sitios web visitas. Oculta el encabezado HTTP que contiene la URL de la página inicial y lo reemplaza por uno predeterminado o personalizado que puedes configurar

   j. _Hide User-Agent_. Esta función elimina la información de identificación del encabezado User-Agent, que normalmente incluye el nombre y la versión del navegador, el sistema operativo y la configuración de idioma

   k. _Eliminar encabezado X-Client-Data_. Esta función evita que Google Chrome envíe información sobre su versión y modificaciones a los dominios de Google (incluidos DoubleClick y Google Analytics)

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
